import os, sys, subprocess, concurrent.futures as cf
OUT='osm'
def get(w,s,e,n,depth=0):
    fn=f"{OUT}/{w:.4f}_{s:.4f}_{e:.4f}_{n:.4f}.osm"
    if os.path.exists(fn) and os.path.getsize(fn)>100: return [fn]
    for attempt in range(4):
        r=subprocess.run(["curl","-sS","-m","180","-o",fn,"-w","%{http_code}",f"https://api.openstreetmap.org/api/0.6/map?bbox={w},{s},{e},{n}"],capture_output=True,text=True)
        code=r.stdout.strip()
        if code=="200": return [fn]
        if code in ("400","509") or (code=="000" and attempt==3):
            break
    os.remove(fn) if os.path.exists(fn) else None
    if depth>3: print("FAIL",w,s,e,n,code,file=sys.stderr); return []
    mx=(w+e)/2; my=(s+n)/2; res=[]
    for b in [(w,s,mx,my),(mx,s,e,my),(w,my,mx,n),(mx,my,e,n)]:
        res+=get(*b,depth=depth+1)
    return res
def tiles(w,s,e,n,step):
    out=[];y=s
    while y<n-1e-9:
        x=w
        while x<e-1e-9:
            out.append((round(x,4),round(y,4),round(min(x+step,e),4),round(min(y+step,n),4))); x+=step
        y+=step
    return out
T=tiles(74.54,42.83,74.66,42.91,0.02)+tiles(74.44,42.91,74.56,43.08,0.02)+tiles(74.48,42.83,74.54,42.91,0.02)+tiles(74.40,42.95,74.44,43.07,0.02)+tiles(74.46,42.79,74.72,42.83,0.02)+tiles(74.66,42.83,74.72,42.93,0.02)+tiles(74.56,42.91,74.66,42.93,0.02)+tiles(74.44,42.83,74.48,42.91,0.02)
print(len(T))
with cf.ThreadPoolExecutor(3) as ex:
    for i,r in enumerate(ex.map(lambda t:get(*t),T)): print(i,len(r),flush=True)
