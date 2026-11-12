import glob, pickle, xml.etree.ElementTree as ET
nodes={}; ways={}; rels={}
for f in glob.glob('osm/*.osm'):
    for ev,el in ET.iterparse(f):
        t=el.tag
        if t=='node':
            tags={c.get('k'):c.get('v') for c in el.findall('tag')}
            nodes[int(el.get('id'))]=(float(el.get('lat')),float(el.get('lon')),tags or None); el.clear()
        elif t=='way':
            ways[int(el.get('id'))]=([int(n.get('ref')) for n in el.findall('nd')],{c.get('k'):c.get('v') for c in el.findall('tag')}); el.clear()
        elif t=='relation':
            rels[int(el.get('id'))]=([(m.get('type'),int(m.get('ref')),m.get('role')) for m in el.findall('member')],{c.get('k'):c.get('v') for c in el.findall('tag')}); el.clear()
print(len(nodes),len(ways),len(rels))
pickle.dump((nodes,ways,rels),open('merged.pkl','wb'))
