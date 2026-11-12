import pickle, json, math, random, collections
random.seed(7)
nodes,ways,rels=pickle.load(open('merged.pkl','rb'))
LAT0,LON0=42.87631,74.60353
KX=math.cos(math.radians(LAT0))*111320.0; KZ=110574.0
BOXES=[(74.54,42.83,74.66,42.91),(74.44,42.91,74.56,43.08),(74.48,42.83,74.54,42.91),(74.40,42.95,74.44,43.07)]
def inb(la,lo): return any(b[0]<=lo<=b[2] and b[1]<=la<=b[3] for b in BOXES)
def P(n):
    la,lo,_=nodes[n]; return ((lo-LON0)*KX, -(la-LAT0)*KZ)
def q(v): return int(round(v*10))  # decimeters
# ---------- roads ----------
RC={'motorway':0,'trunk':0,'primary':1,'secondary':2,'tertiary':3,'unclassified':4,'residential':4,'living_street':5,'service':6,
    'motorway_link':1,'trunk_link':1,'primary_link':1,'secondary_link':2,'tertiary_link':3}
DEFL={0:3,1:2,2:2,3:1,4:1,5:1,6:1}  # lanes per direction default
LW=3.3
names=[]; nidx={}
def name_id(t):
    n=t.get('name'); 
    if not n: return -1
    en=t.get('name:en') or t.get('name:ru') or ''
    key=(n,en)
    if key not in nidx: nidx[key]=len(names); names.append([n,en])
    return nidx[key]
used={}  # osm node -> index
pts=[]
def NI(n):
    if n not in used:
        x,z=P(n); used[n]=len(pts)//2; pts.extend([q(x),q(z)])
    return used[n]
roads=[]
for wid,(nd,t) in ways.items():
    h=t.get('highway')
    if h not in RC: continue
    if h=='service' and t.get('service') in ('parking_aisle','drive-through'): continue
    if t.get('area')=='yes' or t.get('access') in ('private','no') and h=='service': continue
    c=RC[h]; ow=1 if t.get('oneway') in ('yes','1','true') or t.get('junction')=='roundabout' or h.endswith('_link') and t.get('oneway')!='no' else 0
    if t.get('oneway')=='-1': nd=nd[::-1]; ow=1
    try: L=int(str(t.get('lanes','')).split(';')[0])
    except: L=None
    if L: lpd=max(1,L if ow else L//2 if L>=2 else 1)
    else: lpd=DEFL[c] if not ow else max(1,DEFL[c])
    if c==6: lpd=1
    w=lpd*LW*(1 if ow else 2)
    if c==6: w=4.5 if not ow else 3.5
    if c==5: w=5.5
    seg=[]
    for n in nd+[None]:
        if n is not None and n in nodes and inb(nodes[n][0],nodes[n][1]): seg.append(n); continue
        if len(seg)>=2:
            roads.append([c,round(w,1),lpd,ow,name_id(t),[NI(x) for x in seg],1 if t.get('bridge')=='yes' else 0])
        seg=[]
print('roads',len(roads))
# ---------- polygons ----------
def ring_from_rel(members):
    segs=[ways[r][0][:] for (ty,r,role) in members if ty=='way' and role in('outer','') and r in ways]
    rings=[]
    while segs:
        cur=segs.pop(0)
        changed=True
        while cur[0]!=cur[-1] and changed:
            changed=False
            for i,s in enumerate(segs):
                if s[0]==cur[-1]: cur+=s[1:]; segs.pop(i); changed=True; break
                if s[-1]==cur[-1]: cur+=s[::-1][1:]; segs.pop(i); changed=True; break
        if cur[0]==cur[-1]: rings.append(cur)
    return rings
def poly(nd):
    if nd[0]!=nd[-1] or len(nd)<4: return None
    if not all(n in nodes for n in nd): return None
    if not all(inb(nodes[n][0],nodes[n][1]) for n in nd[::max(1,len(nd)//4)]): return None
    xy=[P(n) for n in nd[:-1]]
    # simplify: drop near-duplicate points
    out=[]
    for p in xy:
        if not out or abs(p[0]-out[-1][0])+abs(p[1]-out[-1][1])>0.4: out.append(p)
    if len(out)<3: return None
    a=0
    for i in range(len(out)):
        x1,z1=out[i]; x2,z2=out[(i+1)%len(out)]; a+=x1*z2-x2*z1
    return out, abs(a)/2
def flat(xy): 
    r=[]
    for x,z in xy: r+= [q(x),q(z)]
    return r
items=[(t,nd) for wid,(nd,t) in ways.items()]
for rid,(mem,t) in rels.items():
    if t.get('type')=='multipolygon':
        for ring in ring_from_rel(mem): items.append((t,ring))
BK={'house':1,'detached':1,'residential':2,'apartments':2,'dormitory':2,'commercial':3,'retail':3,'office':3,'hotel':3,
    'industrial':4,'warehouse':4,'hangar':4,'service':4,'garage':5,'garages':5,'roof':6,'school':7,'university':7,'college':7,'kindergarten':7,
    'hospital':7,'public':7,'government':7,'mosque':8,'church':8,'cathedral':8,'construction':9,'grandstand':6,'terminal':10}
buildings=[]
areas=[]
AREA={'park':0,'garden':0,'grass':0,'flowerbed':1,'wood':2,'forest':2,'scrub':2,'water':3,'basin':3,'reservoir':3,'swimming_pool':3,
      'pitch':4,'stadium':4,'playground':5,'farmland':6,'meadow':6,'grassland':6,'heath':6,'orchard':2,'cemetery':7,'industrial':8,
      'construction':9,'parking':10,'pedestrian':11,'square':11,'apron':12,'runway':13,'taxiway':13,'retail':8,'garages':10,'commercial':8,'railway':8,'allotments':6}
for t,nd in items:
    if 'building' in t or 'building:part' in t:
        r=poly(nd)
        if not r: continue
        xy,a=r
        if a<8: continue
        b=t.get('building') or 'yes'
        if t.get('aeroway')=='terminal': b='terminal'
        k=BK.get(b,0)
        h=None
        try: h=float(str(t.get('height','')).replace('m','').strip())
        except: pass
        if not h and t.get('building:levels'):
            try: h=float(t['building:levels'].split(';')[0])*3.1+ (0.8)
            except: pass
        if not h:
            if k==1: h=3.5+random.random()*2.5
            elif k==5: h=3
            elif k==6: h=4
            elif k==4: h=7+random.random()*4
            elif k==9: h=6+random.random()*20
            elif k==10: h=16
            elif k==8: h=12
            elif k==2: h=random.choice([15.5,15.5,15.5,28.5,12.5])
            else:
                if a<120: h=3.5+random.random()*2; k = k or 1
                elif a<300: h=random.choice([4,6.5,7])
                elif a<700: h=random.choice([9.5,12.5,15.5,15.5])
                else: h=random.choice([12.5,15.5,15.5,28.5,9.5]); k=k or 2
        mn=0
        try: mn=float(t.get('min_height',0))
        except: pass
        nm=t.get('name:en') or t.get('name') or ''
        buildings.append([k,round(h,1),round(mn,1),flat(xy)]+([nm] if nm else []))
        continue
    key=t.get('leisure') or t.get('landuse') or t.get('natural') or t.get('amenity') or t.get('aeroway') or t.get('place') or (('pedestrian') if t.get('highway')=='pedestrian' and t.get('area')=='yes' else None)
    if key in AREA:
        if key in ('runway','taxiway'): continue
        if t.get('amenity')=='parking' or key=='parking': key='parking'
        r=poly(nd)
        if not r: continue
        if key=='residential': continue
        areas.append([AREA[key],flat(r[0])])
print('buildings',len(buildings),'areas',len(areas))
# ---------- lines ----------
lines=[]  # type, width, pts
def line(nd):
    out=[]
    for n in nd:
        if n in nodes and inb(nodes[n][0],nodes[n][1]): 
            x,z=P(n); out+=[q(x),q(z)]
    return out
for wid,(nd,t) in ways.items():
    h=t.get('highway'); ww=t.get('waterway'); rw=t.get('railway'); ae=t.get('aeroway')
    if h in ('footway','pedestrian','path','cycleway','steps') and t.get('area')!='yes':
        l=line(nd); 
        if len(l)>=4: lines.append([0,2.2 if h!='pedestrian' else 6,l])
    elif ww in ('river','canal','stream'):
        try: w=float(t.get('width',0))
        except: w=0
        w = w or {'river':14,'canal':9,'stream':3}[ww]
        l=line(nd)
        if len(l)>=4: lines.append([1,w,l])
    elif rw=='rail':
        l=line(nd)
        if len(l)>=4: lines.append([2,3,l])
    elif ae=='runway':
        l=line(nd)
        if len(l)>=4 and math.hypot(l[0]-l[-2],l[1]-l[-1])>20000: lines.append([3,float(t.get('width',55) or 55),l])
    elif ae=='taxiway':
        l=line(nd)
        try: w=float(t.get('width',23))
        except: w=23
        if len(l)>=4: lines.append([4,w,l])
    elif t.get('natural')=='tree_row':
        l=line(nd)
        if len(l)>=4: lines.append([5,0,l])
    elif t.get('barrier') in ('fence','wall'):
        pass
print('lines',len(lines))
# ---------- points ----------
signals=[];crossings=[];trees=[];stands=[];busstops=[]
for nid,(la,lo,t) in nodes.items():
    if not t or not inb(la,lo): continue
    x,z=P(nid)
    h=t.get('highway')
    if h=='traffic_signals': signals.append([q(x),q(z)])
    elif h=='crossing': crossings.append([q(x),q(z)])
    elif h=='bus_stop': busstops.append([q(x),q(z)])
    elif t.get('natural')=='tree': trees.append([q(x),q(z)])

for wid,(nd,t) in ways.items():
    if t.get('aeroway')=='parking_position' and len(nd)>=2 and all(n in nodes for n in nd):
        a=P(nd[0]); b=P(nd[-1]); stands.append([q(a[0]),q(a[1]),q(b[0]),q(b[1])])
jet=[]
for wid,(nd,t) in ways.items():
    if t.get('aeroway')=='jet_bridge' and all(n in nodes for n in nd): jet.append(flat([P(n) for n in nd]))
# ---------- POIs ----------
def wc(t,nd):
    p=[P(n) for n in nd if n in nodes]
    return (sum(a for a,b in p)/len(p), sum(b for a,b in p)/len(p)) if p else None
pois=[]
for wid,(nd,t) in ways.items():
    if not t.get('name'): continue
    good = t.get('tourism') in ('museum','attraction','hotel') or t.get('amenity') in ('theatre','university','hospital','cinema','place_of_worship','marketplace') or t.get('shop') in ('mall','department_store','supermarket') or t.get('leisure') in ('park','stadium') or t.get('place')=='square' or t.get('aeroway')=='terminal' or t.get('historic')
    if good:
        c=wc(t,nd)
        if c: pois.append([t.get('name'),t.get('name:en') or '',q(c[0]),q(c[1]),t.get('tourism') or t.get('amenity') or t.get('shop') or t.get('leisure') or t.get('place') or t.get('aeroway') or 'historic'])
for nid,(la,lo,t) in nodes.items():
    if t and t.get('name') and inb(la,lo) and (t.get('amenity') in('marketplace','theatre','cinema','bus_station') or t.get('tourism') in ('museum','attraction','hotel') or t.get('shop') in('mall',) or t.get('historic') in ('monument','memorial')):
        x,z=P(nid); pois.append([t['name'],t.get('name:en') or '',q(x),q(z),t.get('amenity') or t.get('tourism') or t.get('shop') or t.get('historic')])
print('pois',len(pois),'signals',len(signals),'trees',len(trees),'stands',len(stands))
data=dict(origin=[LAT0,LON0],names=names,pts=pts,roads=roads,buildings=buildings,areas=areas,lines=lines,signals=signals,crossings=crossings,trees=trees,stands=stands,busstops=busstops,jet=jet,pois=pois)
s=json.dumps(data,ensure_ascii=False,separators=(',',':'))
open('bishkek.json','w').write(s)
print(len(s)/1e6,'MB')
