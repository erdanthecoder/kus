(()=>{var qc="170";var Qf=0,Ch=1,td=2;var qu=1,$c=2,si=3,Ti=0,rn=1,Ee=2,Vn=0,Ts=1,He=2,Ph=3,Ih=4,ed=5,Gi=100,nd=101,id=102,sd=103,rd=104,od=200,ad=201,ld=202,cd=203,wl=204,bl=205,hd=206,ud=207,fd=208,dd=209,pd=210,md=211,gd=212,xd=213,vd=214,El=0,Sl=1,Tl=2,Ps=3,Al=4,Rl=5,Cl=6,Pl=7,$u=0,yd=1,_d=2,Ei=0,Yc=1,Zc=2,Jc=3,kr=4,Md=5,Kc=6,jc=7;var Yu=300,Is=301,zs=302,Il=303,zl=304,jo=306,br=1e3,Xi=1001,Ll=1002,yn=1003,wd=1004;var Hr=1005;var Hn=1006,Oa=1007;var qi=1008;var li=1009,Zu=1010,Ju=1011,Er=1012,Qc=1013,$i=1014,On=1015,Mn=1016,th=1017,eh=1018,Ls=1020,Ku=35902,ju=1021,Qu=1022,Dn=1023,tf=1024,ef=1025,As=1026,Ds=1027,nh=1028,ih=1029,nf=1030,sh=1031;var rh=1033,_o=33776,Mo=33777,wo=33778,bo=33779,Dl=35840,Ul=35841,kl=35842,Nl=35843,Bl=36196,Fl=37492,Hl=37496,Ol=37808,Vl=37809,Gl=37810,Wl=37811,Xl=37812,ql=37813,$l=37814,Yl=37815,Zl=37816,Jl=37817,Kl=37818,jl=37819,Ql=37820,tc=37821,Eo=36492,ec=36494,nc=36495,sf=36283,ic=36284,sc=36285,rc=36286;var So=2300,oc=2301,Va=2302,zh=2400,Lh=2401,Dh=2402;var bd=3200,Ed=3201;var rf=0,Sd=1,wi="",ye="srgb",$s="srgb-linear",Qo="linear",be="srgb";var rs=7680;var Uh=519,Td=512,Ad=513,Rd=514,of=515,Cd=516,Pd=517,Id=518,zd=519,ac=35044,Ys=35048;var kh="300 es",oi=2e3,To=2001,Ai=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nh=1234567,vr=Math.PI/180,Us=180/Math.PI;function Gn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(nn[r&255]+nn[r>>8&255]+nn[r>>16&255]+nn[r>>24&255]+"-"+nn[t&255]+nn[t>>8&255]+"-"+nn[t>>16&15|64]+nn[t>>24&255]+"-"+nn[e&63|128]+nn[e>>8&255]+"-"+nn[e>>16&255]+nn[e>>24&255]+nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]).toLowerCase()}function qe(r,t,e){return Math.max(t,Math.min(e,r))}function oh(r,t){return(r%t+t)%t}function Ld(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Dd(r,t,e){return r!==t?(e-r)/(t-r):0}function yr(r,t,e){return(1-e)*r+e*t}function Ud(r,t,e,n){return yr(r,t,1-Math.exp(-e*n))}function kd(r,t=1){return t-Math.abs(oh(r,t*2)-t)}function Nd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Bd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Fd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Hd(r,t){return r+Math.random()*(t-r)}function Od(r){return r*(.5-Math.random())}function Vd(r){r!==void 0&&(Nh=r);let t=Nh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Gd(r){return r*vr}function Wd(r){return r*Us}function Xd(r){return(r&r-1)===0&&r!==0}function qd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function $d(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Yd(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ln(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ie={DEG2RAD:vr,RAD2DEG:Us,generateUUID:Gn,clamp:qe,euclideanModulo:oh,mapLinear:Ld,inverseLerp:Dd,lerp:yr,damp:Ud,pingpong:kd,smoothstep:Nd,smootherstep:Bd,randInt:Fd,randFloat:Hd,randFloatSpread:Od,seededRandom:Vd,degToRad:Gd,radToDeg:Wd,isPowerOfTwo:Xd,ceilPowerOfTwo:qd,floorPowerOfTwo:$d,setQuaternionFromProperEuler:Yd,normalize:Ae,denormalize:Ln},tt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},re=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],m=i[0],x=i[3],p=i[6],y=i[1],M=i[4],v=i[7],S=i[2],E=i[5],b=i[8];return s[0]=o*m+a*y+l*S,s[3]=o*x+a*M+l*E,s[6]=o*p+a*v+l*b,s[1]=c*m+h*y+u*S,s[4]=c*x+h*M+u*E,s[7]=c*p+h*v+u*b,s[2]=d*m+f*y+g*S,s[5]=d*x+f*M+g*E,s[8]=d*p+f*v+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=d*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ga.makeScale(t,e)),this}rotate(t){return this.premultiply(Ga.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ga.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ga=new re;function af(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ao(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zd(){let r=Ao("canvas");return r.style.display="block",r}var Bh={};function gr(r){r in Bh||(Bh[r]=!0,console.warn(r))}function Jd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Kd(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function jd(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ue={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(r.r=ai(r.r),r.g=ai(r.g),r.b=ai(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===wi?Qo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function ai(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Fh=[.64,.33,.3,.6,.15,.06],Hh=[.2126,.7152,.0722],Oh=[.3127,.329],Vh=new re().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new re().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ue.define({[$s]:{primaries:Fh,whitePoint:Oh,transfer:Qo,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:Hh,workingColorSpaceConfig:{unpackColorSpace:ye},outputColorSpaceConfig:{drawingBufferColorSpace:ye}},[ye]:{primaries:Fh,whitePoint:Oh,transfer:be,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:Hh,outputColorSpaceConfig:{drawingBufferColorSpace:ye}}});var os,lc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Ao("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Ao("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ai(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ai(e[n]/255)*255):e[n]=ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Qd=0,Ro=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wa(i[o].image)):s.push(Wa(i[o]))}else s=Wa(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Wa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?lc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var tp=0,fn=class r extends Ai{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Xi,i=Xi,s=Hn,o=qi,a=Dn,l=li,c=r.DEFAULT_ANISOTROPY,h=wi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=Gn(),this.name="",this.source=new Ro(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new re,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case br:t.x=t.x-Math.floor(t.x);break;case Xi:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case br:t.y=t.y-Math.floor(t.y);break;case Xi:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Yu;fn.DEFAULT_ANISOTROPY=1;var Re=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],m=l[2],x=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,S=(p+1)/2,E=(h+d)/4,b=(u+m)/4,A=(g+x)/4;return M>v&&M>S?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=b/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=A/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=b/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((x-g)*(x-g)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(u-m)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},cc=class extends Ai{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new fn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Ro(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qe=class extends cc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Co=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var hc=class extends fn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ne=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==d||c!==f||h!==g){let x=1-a,p=l*d+c*f+h*g+u*m,y=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){let S=Math.sqrt(M),E=Math.atan2(S,p*y);x=Math.sin(x*E)/S,a=Math.sin(a*E)/S}let v=a*y;if(l=l*x+d*v,c=c*x+f*v,h=h*x+g*v,u=u*x+m*v,x===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(qe(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(qe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new I,Wh=new Ne,ci=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Or.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Or.copy(n.boundingBox)),Or.applyMatrix4(t.matrixWorld),this.union(Or)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Vr.subVectors(this.max,rr),as.subVectors(t.a,rr),ls.subVectors(t.b,rr),cs.subVectors(t.c,rr),gi.subVectors(ls,as),xi.subVectors(cs,ls),ki.subVectors(as,cs);let e=[0,-gi.z,gi.y,0,-xi.z,xi.y,0,-ki.z,ki.y,gi.z,0,-gi.x,xi.z,0,-xi.x,ki.z,0,-ki.x,-gi.y,gi.x,0,-xi.y,xi.x,0,-ki.y,ki.x,0];return!qa(e,as,ls,cs,Vr)||(e=[1,0,0,0,1,0,0,0,1],!qa(e,as,ls,cs,Vr))?!1:(Gr.crossVectors(gi,xi),e=[Gr.x,Gr.y,Gr.z],qa(e,as,ls,cs,Vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Qn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Qn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Qn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Qn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Qn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Qn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Qn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Qn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Qn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Qn=[new I,new I,new I,new I,new I,new I,new I,new I],Pn=new I,Or=new ci,as=new I,ls=new I,cs=new I,gi=new I,xi=new I,ki=new I,rr=new I,Vr=new I,Gr=new I,Ni=new I;function qa(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ni.fromArray(r,s);let a=i.x*Math.abs(Ni.x)+i.y*Math.abs(Ni.y)+i.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var ep=new ci,or=new I,$a=new I,hi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ep.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);let e=or.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(or,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add($a)),this.expandByPoint(or.copy(t.center).sub($a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ti=new I,Ya=new I,Wr=new I,vi=new I,Za=new I,Xr=new I,Ja=new I,Sr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ti)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ti.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ti.copy(this.origin).addScaledVector(this.direction,e),ti.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ya.copy(t).add(e).multiplyScalar(.5),Wr.copy(e).sub(t).normalize(),vi.copy(this.origin).sub(Ya);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Wr),a=vi.dot(this.direction),l=-vi.dot(Wr),c=vi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){let m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ya).addScaledVector(Wr,d),f}intersectSphere(t,e){ti.subVectors(t.center,this.origin);let n=ti.dot(this.direction),i=ti.dot(ti)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ti)!==null}intersectTriangle(t,e,n,i,s){Za.subVectors(e,t),Xr.subVectors(n,t),Ja.crossVectors(Za,Xr);let o=this.direction.dot(Ja),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;vi.subVectors(this.origin,t);let l=a*this.direction.dot(Xr.crossVectors(vi,Xr));if(l<0)return null;let c=a*this.direction.dot(Za.cross(vi));if(c<0||l+c>o)return null;let h=-a*vi.dot(Ja);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,m,x){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,m,x)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,m,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=m,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-m*c,e[9]=-a*l,e[2]=m-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d+m*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=m+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,g=c*h,m=c*u;e[0]=d-m*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=m-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+m,e[1]=l*u,e[5]=m*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-m*u}else if(t.order==="XZY"){let d=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+m,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=m*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(np,t,ip)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),yi.crossVectors(n,xn),yi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),yi.crossVectors(n,xn)),yi.normalize(),qr.crossVectors(xn,yi),i[0]=yi.x,i[4]=qr.x,i[8]=xn.x,i[1]=yi.y,i[5]=qr.y,i[9]=xn.y,i[2]=yi.z,i[6]=qr.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],m=n[6],x=n[10],p=n[14],y=n[3],M=n[7],v=n[11],S=n[15],E=i[0],b=i[4],A=i[8],_=i[12],w=i[1],R=i[5],L=i[9],k=i[13],H=i[2],B=i[6],N=i[10],V=i[14],O=i[3],q=i[7],Q=i[11],P=i[15];return s[0]=o*E+a*w+l*H+c*O,s[4]=o*b+a*R+l*B+c*q,s[8]=o*A+a*L+l*N+c*Q,s[12]=o*_+a*k+l*V+c*P,s[1]=h*E+u*w+d*H+f*O,s[5]=h*b+u*R+d*B+f*q,s[9]=h*A+u*L+d*N+f*Q,s[13]=h*_+u*k+d*V+f*P,s[2]=g*E+m*w+x*H+p*O,s[6]=g*b+m*R+x*B+p*q,s[10]=g*A+m*L+x*N+p*Q,s[14]=g*_+m*k+x*V+p*P,s[3]=y*E+M*w+v*H+S*O,s[7]=y*b+M*R+v*B+S*q,s[11]=y*A+M*L+v*N+S*Q,s[15]=y*_+M*k+v*V+S*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],m=t[7],x=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+m*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+x*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],m=t[13],x=t[14],p=t[15],y=u*x*c-m*d*c+m*l*f-a*x*f-u*l*p+a*d*p,M=g*d*c-h*x*c-g*l*f+o*x*f+h*l*p-o*d*p,v=h*m*c-g*u*c+g*a*f-o*m*f-h*a*p+o*u*p,S=g*u*l-h*m*l-g*a*d+o*m*d+h*a*x-o*u*x,E=e*y+n*M+i*v+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/E;return t[0]=y*b,t[1]=(m*d*s-u*x*s-m*i*f+n*x*f+u*i*p-n*d*p)*b,t[2]=(a*x*s-m*l*s+m*i*c-n*x*c-a*i*p+n*l*p)*b,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*b,t[4]=M*b,t[5]=(h*x*s-g*d*s+g*i*f-e*x*f-h*i*p+e*d*p)*b,t[6]=(g*l*s-o*x*s-g*i*c+e*x*c+o*i*p-e*l*p)*b,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*b,t[8]=v*b,t[9]=(g*u*s-h*m*s-g*n*f+e*m*f+h*n*p-e*u*p)*b,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*p+e*a*p)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*b,t[12]=S*b,t[13]=(h*m*i-g*u*i+g*n*d-e*m*d-h*n*x+e*u*x)*b,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*x-e*a*x)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,m=o*h,x=o*u,p=a*u,y=l*c,M=l*h,v=l*u,S=n.x,E=n.y,b=n.z;return i[0]=(1-(m+p))*S,i[1]=(f+v)*S,i[2]=(g-M)*S,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(x+y)*E,i[7]=0,i[8]=(g+M)*b,i[9]=(x-y)*b,i[10]=(1-(d+m))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=hs.set(i[0],i[1],i[2]).length(),o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);let c=1/s,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=oi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===oi)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===To)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=oi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h,g,m;if(a===oi)g=(o+s)*u,m=-2*u;else if(a===To)g=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new I,In=new ne,np=new I(0,0,0),ip=new I(1,1,1),yi=new I,qr=new I,xn=new I,Xh=new ne,qh=new Ne,Ke=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var Po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,$h=new I,us=new Ne,ei=new ne,$r=new I,ar=new I,rp=new I,op=new Ne,Yh=new I(1,0,0),Zh=new I(0,1,0),Jh=new I(0,0,1),Kh={type:"added"},ap={type:"removed"},fs={type:"childadded",child:null},Ka={type:"childremoved",child:null},Be=class r extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new Ke,n=new Ne,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ne},normalMatrix:{value:new re}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ei.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?$r.copy(t):$r.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ei.lookAt(ar,$r,this.up):ei.lookAt($r,ar,this.up),this.quaternion.setFromRotationMatrix(ei),i&&(ei.extractRotation(i.matrixWorld),us.setFromRotationMatrix(ei),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ei.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ei.multiply(t.parent.matrixWorld)),t.applyMatrix4(ei),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Be.DEFAULT_UP=new I(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new I,ni=new I,ja=new I,ii=new I,ds=new I,ps=new I,jh=new I,Qa=new I,tl=new I,el=new I,nl=new Re,il=new Re,sl=new Re,bi=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zn.subVectors(t,e),i.cross(zn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){zn.subVectors(i,e),ni.subVectors(n,e),ja.subVectors(t,e);let o=zn.dot(zn),a=zn.dot(ni),l=zn.dot(ja),c=ni.dot(ni),h=ni.dot(ja),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ii)===null?!1:ii.x>=0&&ii.y>=0&&ii.x+ii.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ii)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ii.x),l.addScaledVector(o,ii.y),l.addScaledVector(a,ii.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return nl.setScalar(0),il.setScalar(0),sl.setScalar(0),nl.fromBufferAttribute(t,e),il.fromBufferAttribute(t,n),sl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(nl,s.x),o.addScaledVector(il,s.y),o.addScaledVector(sl,s.z),o}static isFrontFacing(t,e,n,i){return zn.subVectors(n,e),ni.subVectors(t,e),zn.cross(ni).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zn.subVectors(this.c,this.b),ni.subVectors(this.a,this.b),zn.cross(ni).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ds.subVectors(i,n),ps.subVectors(s,n),Qa.subVectors(t,n);let l=ds.dot(Qa),c=ps.dot(Qa);if(l<=0&&c<=0)return e.copy(n);tl.subVectors(t,i);let h=ds.dot(tl),u=ps.dot(tl);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);el.subVectors(t,s);let f=ds.dot(el),g=ps.dot(el);if(g>=0&&f<=g)return e.copy(s);let m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);let x=h*g-f*u;if(x<=0&&u-h>=0&&f-g>=0)return jh.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(jh,a);let p=1/(x+m+d);return o=m*p,a=d*p,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function rl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ye){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ue.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ue.workingColorSpace){return this.r=t,this.g=e,this.b=n,ue.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ue.workingColorSpace){if(t=oh(t,1),e=qe(e,0,1),n=qe(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=rl(o,s,t+1/3),this.g=rl(o,s,t),this.b=rl(o,s,t-1/3)}return ue.toWorkingColorSpace(this,i),this}setStyle(t,e=ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ye){let n=lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ai(t.r),this.g=ai(t.g),this.b=ai(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ye){return ue.fromWorkingColorSpace(sn.copy(this),t),Math.round(qe(sn.r*255,0,255))*65536+Math.round(qe(sn.g*255,0,255))*256+Math.round(qe(sn.b*255,0,255))}getHexString(t=ye){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ue.workingColorSpace){ue.fromWorkingColorSpace(sn.copy(this),e);let n=sn.r,i=sn.g,s=sn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ue.workingColorSpace){return ue.fromWorkingColorSpace(sn.copy(this),e),t.r=sn.r,t.g=sn.g,t.b=sn.b,t}getStyle(t=ye){ue.fromWorkingColorSpace(sn.copy(this),t);let e=sn.r,n=sn.g,i=sn.b;return t!==ye?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Yr);let n=yr(_i.h,Yr.h,e),i=yr(_i.s,Yr.s,e),s=yr(_i.l,Yr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new bt;bt.NAMES=lf;var lp=0,Wn=class extends Ai{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Gn(),this.name="",this.blending=Ts,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wl,this.blendDst=bl,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wl&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},de=class extends Wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Ge=new I,Zr=new tt,fe=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ac,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Zr.fromBufferAttribute(this,e),Zr.applyMatrix3(t),this.setXY(e,Zr.x,Zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ln(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ln(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ln(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ln(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==ac&&(t.usage=this.usage),t}};var ks=class extends fe{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ns=class extends fe{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends fe{constructor(t,e,n){super(new Float32Array(t),e,n)}},cp=0,Sn=new ne,ol=new Be,ms=new I,vn=new ci,lr=new ci,Je=new I,ie=class r extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(af(t)?Ns:ks)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new re().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return ol.lookAt(t),ol.updateMatrix(),this.applyMatrix4(ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];lr.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(vn.min,lr.min),vn.expandByPoint(Je),Je.addVectors(vn.max,lr.max),vn.expandByPoint(Je)):(vn.expandByPoint(lr.min),vn.expandByPoint(lr.max))}vn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Je.add(ms)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new I,l[A]=new I;let c=new I,h=new I,u=new I,d=new tt,f=new tt,g=new tt,m=new I,x=new I;function p(A,_,w){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),d.fromBufferAttribute(s,A),f.fromBufferAttribute(s,_),g.fromBufferAttribute(s,w),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let R=1/(f.x*g.y-g.x*f.y);isFinite(R)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(R),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(R),a[A].add(m),a[_].add(m),a[w].add(m),l[A].add(x),l[_].add(x),l[w].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,_=y.length;A<_;++A){let w=y[A],R=w.start,L=w.count;for(let k=R,H=R+L;k<H;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let M=new I,v=new I,S=new I,E=new I;function b(A){S.fromBufferAttribute(i,A),E.copy(S);let _=a[A];M.copy(_),M.sub(S.multiplyScalar(S.dot(_))).normalize(),v.crossVectors(E,_);let R=v.dot(l[A])<0?-1:1;o.setXYZW(A,M.x,M.y,M.z,R)}for(let A=0,_=y.length;A<_;++A){let w=y[A],R=w.start,L=w.count;for(let k=R,H=R+L;k<H;k+=3)b(t.getX(k+0)),b(t.getX(k+1)),b(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),m=t.getX(d+1),x=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new fe(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new ne,Bi=new Sr,Jr=new hi,tu=new I,Kr=new I,jr=new I,Qr=new I,al=new I,to=new I,eu=new I,eo=new I,Z=class extends Be{constructor(t=new ie,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){to.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(al.fromBufferAttribute(u,t),o?to.addScaledVector(al,h):to.addScaledVector(al.sub(e),h))}e.add(to)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(s),Bi.copy(t.ray).recast(t.near),!(Jr.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Jr,tu)===null||Bi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(s).invert(),Bi.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Bi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Bi)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){let x=d[g],p=o[x.materialIndex],y=Math.max(x.start,f.start),M=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let v=y,S=M;v<S;v+=3){let E=a.getX(v),b=a.getX(v+1),A=a.getX(v+2);i=no(this,p,t,n,c,h,u,E,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let x=g,p=m;x<p;x+=3){let y=a.getX(x),M=a.getX(x+1),v=a.getX(x+2);i=no(this,o,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=d.length;g<m;g++){let x=d[g],p=o[x.materialIndex],y=Math.max(x.start,f.start),M=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let v=y,S=M;v<S;v+=3){let E=v,b=v+1,A=v+2;i=no(this,p,t,n,c,h,u,E,b,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let x=g,p=m;x<p;x+=3){let y=x,M=x+1,v=x+2;i=no(this,o,t,n,c,h,u,y,M,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function hp(r,t,e,n,i,s,o,a){let l;if(t.side===rn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Ti,a),l===null)return null;eo.copy(a),eo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(eo);return c<e.near||c>e.far?null:{distance:c,point:eo.clone(),object:r}}function no(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Kr),r.getVertexPosition(l,jr),r.getVertexPosition(c,Qr);let h=hp(r,t,e,n,Kr,jr,Qr,eu);if(h){let u=new I;bi.getBarycoord(eu,Kr,jr,Qr,u),i&&(h.uv=bi.getInterpolatedAttribute(i,a,l,c,u,new tt)),s&&(h.uv1=bi.getInterpolatedAttribute(s,a,l,c,u,new tt)),o&&(h.normal=bi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new I,materialIndex:0};bi.getNormal(Kr,jr,Qr,d.normal),h.face=d,h.barycoord=u}return h}var Tt=class r extends ie{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(m,x,p,y,M,v,S,E,b,A,_){let w=v/b,R=S/A,L=v/2,k=S/2,H=E/2,B=b+1,N=A+1,V=0,O=0,q=new I;for(let Q=0;Q<N;Q++){let P=Q*R-k;for(let ft=0;ft<B;ft++){let et=ft*w-L;q[m]=et*y,q[x]=P*M,q[p]=H,c.push(q.x,q.y,q.z),q[m]=0,q[x]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(ft/b),u.push(1-Q/A),V+=1}}for(let Q=0;Q<A;Q++)for(let P=0;P<b;P++){let ft=d+P+B*Q,et=d+P+B*(Q+1),F=d+(P+1)+B*(Q+1),J=d+(P+1)+B*Q;l.push(ft,et,J),l.push(et,F,J),O+=6}a.addGroup(f,O,_),f+=O,d+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(r){let t={};for(let e=0;e<r.length;e++){let n=Bs(r[e]);for(let i in n)t[i]=n[i]}return t}function up(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function cf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ue.workingColorSpace}var $n={clone:Bs,merge:cn},fp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends Wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fp,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=up(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Io=class extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=oi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new I,nu=new tt,iu=new tt,$e=class extends Io{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(vr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(vr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mi.x,Mi.y).multiplyScalar(-t/Mi.z)}getViewSize(t,e){return this.getViewBounds(t,nu,iu),e.subVectors(iu,nu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(vr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,uc=class extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new $e(gs,xs,t,e);i.layers=this.layers,this.add(i);let s=new $e(gs,xs,t,e);s.layers=this.layers,this.add(s);let o=new $e(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new $e(gs,xs,t,e);a.layers=this.layers,this.add(a);let l=new $e(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new $e(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===oi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===To)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},zo=class extends fn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fc=class extends Qe{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new zo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Tt(5,5,5),s=new _e({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:Vn});s.uniforms.tEquirect.value=e;let o=new Z(i,s),a=e.minFilter;return e.minFilter===qi&&(e.minFilter=Hn),new uc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},ll=new I,pp=new I,mp=new re,ri=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ll.subVectors(n,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ll),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mp.getNormalMatrix(t),i=this.coplanarPoint(ll).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fi=new hi,io=new I,Tr=class{constructor(t=new ri,e=new ri,n=new ri,i=new ri,s=new ri,o=new ri){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=oi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],m=i[10],x=i[11],p=i[12],y=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,d-c,x-f,v-p).normalize(),n[1].setComponents(l+s,d+c,x+f,v+p).normalize(),n[2].setComponents(l+o,d+h,x+g,v+y).normalize(),n[3].setComponents(l-o,d-h,x-g,v-y).normalize(),n[4].setComponents(l-a,d-u,x-m,v-M).normalize(),e===oi)n[5].setComponents(l+a,d+u,x+m,v+M).normalize();else if(e===To)n[5].setComponents(a,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(io.x=i.normal.x>0?t.max.x:t.min.x,io.y=i.normal.y>0?t.max.y:t.min.y,io.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function gp(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],m=u[f];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++d,u[d]=m)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let m=u[f];r.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ce=class r extends ie{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],m=[],x=[];for(let p=0;p<h;p++){let y=p*d-o;for(let M=0;M<c;M++){let v=M*u-s;g.push(v,-y,0),m.push(0,0,1),x.push(M/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let M=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),E=y+1+c*p;f.push(M,v,E),f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},xp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Pp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ip=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Hp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,c0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,m0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,g0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,T0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,P0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,U0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,k0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,H0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,V0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Y0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,K0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,um=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Em=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Im=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Um=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Bm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Om=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Xm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$m=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ae={alphahash_fragment:xp,alphahash_pars_fragment:vp,alphamap_fragment:yp,alphamap_pars_fragment:_p,alphatest_fragment:Mp,alphatest_pars_fragment:wp,aomap_fragment:bp,aomap_pars_fragment:Ep,batching_pars_vertex:Sp,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Pp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:zp,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:Dp,clipping_planes_vertex:Up,color_fragment:kp,color_pars_fragment:Np,color_pars_vertex:Bp,color_vertex:Fp,common:Hp,cube_uv_reflection_fragment:Op,defaultnormal_vertex:Vp,displacementmap_pars_vertex:Gp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:$p,colorspace_pars_fragment:Yp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Kp,envmap_pars_vertex:jp,envmap_physical_pars_fragment:c0,envmap_vertex:Qp,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:a0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:x0,lights_fragment_end:v0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:M0,logdepthbuf_vertex:w0,map_fragment:b0,map_pars_fragment:E0,map_particle_fragment:S0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:P0,morphnormal_vertex:I0,morphtarget_pars_vertex:z0,morphtarget_vertex:L0,normal_fragment_begin:D0,normal_fragment_maps:U0,normal_pars_fragment:k0,normal_pars_vertex:N0,normal_vertex:B0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:H0,clearcoat_normal_fragment_maps:O0,clearcoat_pars_fragment:V0,iridescence_pars_fragment:G0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:$0,dithering_fragment:Y0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:K0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:xm,backgroundCube_vert:vm,backgroundCube_frag:ym,cube_vert:_m,cube_frag:Mm,depth_vert:wm,depth_frag:bm,distanceRGBA_vert:Em,distanceRGBA_frag:Sm,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Pm,meshbasic_frag:Im,meshlambert_vert:zm,meshlambert_frag:Lm,meshmatcap_vert:Dm,meshmatcap_frag:Um,meshnormal_vert:km,meshnormal_frag:Nm,meshphong_vert:Bm,meshphong_frag:Fm,meshphysical_vert:Hm,meshphysical_frag:Om,meshtoon_vert:Vm,meshtoon_frag:Gm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:$m,sprite_vert:Ym,sprite_frag:Zm},Ct={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new re}},envmap:{envMap:{value:null},envMapRotation:{value:new re},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new re}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new re}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new re},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new re},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new re},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new re}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new re}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new re}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0},uvTransform:{value:new re}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new re},alphaMap:{value:null},alphaMapTransform:{value:new re},alphaTest:{value:0}}},Fn={basic:{uniforms:cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new bt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:cn([Ct.common,Ct.specularmap,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,Ct.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:cn([Ct.common,Ct.envmap,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.roughnessmap,Ct.metalnessmap,Ct.fog,Ct.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:cn([Ct.common,Ct.aomap,Ct.lightmap,Ct.emissivemap,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.gradientmap,Ct.fog,Ct.lights,{emissive:{value:new bt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:cn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,Ct.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:cn([Ct.points,Ct.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:cn([Ct.common,Ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:cn([Ct.common,Ct.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:cn([Ct.common,Ct.bumpmap,Ct.normalmap,Ct.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:cn([Ct.sprite,Ct.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new re},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new re}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:cn([Ct.common,Ct.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:cn([Ct.lights,Ct.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Fn.physical={uniforms:cn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new re},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new re},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new re},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new re},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new re},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new re},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new re},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new re},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new re},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new re},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new re},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new re}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var so={r:0,b:0,g:0},Hi=new Ke,Jm=new ne;function Km(r,t,e,n,i,s,o){let a=new bt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(y){let M=y.isScene===!0?y.background:null;return M&&M.isTexture&&(M=(y.backgroundBlurriness>0?e:t).get(M)),M}function m(y){let M=!1,v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),M=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(y,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===jo)?(h===void 0&&(h=new Z(new Tt(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Bs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Hi.copy(M.backgroundRotation),Hi.x*=-1,Hi.y*=-1,Hi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Hi.y*=-1,Hi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(Hi)),h.material.toneMapped=ue.getTransfer(v.colorSpace)!==be,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Z(new Ce(2,2),new _e({name:"BackgroundMaterial",uniforms:Bs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ue.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,M){y.getRGB(so,cf(r)),n.buffers.color.setClear(so.r,so.g,so.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(y,M=1){a.set(y),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:m,addToRenderList:x}}function jm(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(w,R,L,k,H){let B=!1,N=u(k,L,R);s!==N&&(s=N,c(s.object)),B=f(w,k,L,H),B&&g(w,k,L,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(w,R,L,k),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,R,L){let k=L.wireframe===!0,H=n[w.id];H===void 0&&(H={},n[w.id]=H);let B=H[R.id];B===void 0&&(B={},H[R.id]=B);let N=B[k];return N===void 0&&(N=d(l()),B[k]=N),N}function d(w){let R=[],L=[],k=[];for(let H=0;H<e;H++)R[H]=0,L[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:L,attributeDivisors:k,object:w,attributes:{},index:null}}function f(w,R,L,k){let H=s.attributes,B=R.attributes,N=0,V=L.getAttributes();for(let O in V)if(V[O].location>=0){let Q=H[O],P=B[O];if(P===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(P=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(P=w.instanceColor)),Q===void 0||Q.attribute!==P||P&&Q.data!==P.data)return!0;N++}return s.attributesNum!==N||s.index!==k}function g(w,R,L,k){let H={},B=R.attributes,N=0,V=L.getAttributes();for(let O in V)if(V[O].location>=0){let Q=B[O];Q===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(Q=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(Q=w.instanceColor));let P={};P.attribute=Q,Q&&Q.data&&(P.data=Q.data),H[O]=P,N++}s.attributes=H,s.attributesNum=N,s.index=k}function m(){let w=s.newAttributes;for(let R=0,L=w.length;R<L;R++)w[R]=0}function x(w){p(w,0)}function p(w,R){let L=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;L[w]=1,k[w]===0&&(r.enableVertexAttribArray(w),k[w]=1),H[w]!==R&&(r.vertexAttribDivisor(w,R),H[w]=R)}function y(){let w=s.newAttributes,R=s.enabledAttributes;for(let L=0,k=R.length;L<k;L++)R[L]!==w[L]&&(r.disableVertexAttribArray(L),R[L]=0)}function M(w,R,L,k,H,B,N){N===!0?r.vertexAttribIPointer(w,R,L,H,B):r.vertexAttribPointer(w,R,L,k,H,B)}function v(w,R,L,k){m();let H=k.attributes,B=L.getAttributes(),N=R.defaultAttributeValues;for(let V in B){let O=B[V];if(O.location>=0){let q=H[V];if(q===void 0&&(V==="instanceMatrix"&&w.instanceMatrix&&(q=w.instanceMatrix),V==="instanceColor"&&w.instanceColor&&(q=w.instanceColor)),q!==void 0){let Q=q.normalized,P=q.itemSize,ft=t.get(q);if(ft===void 0)continue;let et=ft.buffer,F=ft.type,J=ft.bytesPerElement,rt=F===r.INT||F===r.UNSIGNED_INT||q.gpuType===Qc;if(q.isInterleavedBufferAttribute){let st=q.data,dt=st.stride,zt=q.offset;if(st.isInstancedInterleavedBuffer){for(let Ut=0;Ut<O.locationSize;Ut++)p(O.location+Ut,st.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ut=0;Ut<O.locationSize;Ut++)x(O.location+Ut);r.bindBuffer(r.ARRAY_BUFFER,et);for(let Ut=0;Ut<O.locationSize;Ut++)M(O.location+Ut,P/O.locationSize,F,Q,dt*J,(zt+P/O.locationSize*Ut)*J,rt)}else{if(q.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)p(O.location+st,q.meshPerAttribute);w.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let st=0;st<O.locationSize;st++)x(O.location+st);r.bindBuffer(r.ARRAY_BUFFER,et);for(let st=0;st<O.locationSize;st++)M(O.location+st,P/O.locationSize,F,Q,P*J,P/O.locationSize*st*J,rt)}}else if(N!==void 0){let Q=N[V];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(O.location,Q);break;case 3:r.vertexAttrib3fv(O.location,Q);break;case 4:r.vertexAttrib4fv(O.location,Q);break;default:r.vertexAttrib1fv(O.location,Q)}}}}y()}function S(){A();for(let w in n){let R=n[w];for(let L in R){let k=R[L];for(let H in k)h(k[H].object),delete k[H];delete R[L]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let R=n[w.id];for(let L in R){let k=R[L];for(let H in k)h(k[H].object),delete k[H];delete R[L]}delete n[w.id]}function b(w){for(let R in n){let L=n[R];if(L[w.id]===void 0)continue;let k=L[w.id];for(let H in k)h(k[H].object),delete k[H];delete L[w.id]}}function A(){_(),o=!0,s!==i&&(s=i,c(s.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:_,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function Qm(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m]*d[m];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function tg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==Dn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let A=b===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==li&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==On&&!A)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:S,maxSamples:E}}function eg(r){let t=this,e=null,n=0,i=!1,s=!1,o=new ri,a=new re,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{let y=s?0:n,M=y*4,v=p.clippingState||null;l.value=v,v=h(g,d,M,f);for(let S=0;S!==M;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let m=u!==null?u.length:0,x=null;if(m!==0){if(x=l.value,g!==!0||x===null){let p=f+m*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let M=0,v=f;M!==m;++M,v+=4)o.copy(u[M]).applyMatrix4(y,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}function ng(r){let t=new WeakMap;function e(o,a){return a===Il?o.mapping=Is:a===zl&&(o.mapping=zs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Il||a===zl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new fc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Fs=class extends Io{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,su=[.125,.215,.35,.446,.526,.582],Wi=20,cl=new Fs,ru=new bt,hl=null,ul=0,fl=0,dl=!1,Vi=(1+Math.sqrt(5))/2,vs=1/Vi,ou=[new I(-Vi,vs,0),new I(Vi,vs,0),new I(-vs,0,Vi),new I(vs,0,Vi),new I(0,Vi,-vs),new I(0,Vi,vs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(hl,ul,fl),this._renderer.xr.enabled=dl,t.scissorTest=!1,ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),hl=this._renderer.getRenderTarget(),ul=this._renderer.getActiveCubeFace(),fl=this._renderer.getActiveMipmapLevel(),dl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Mn,format:Dn,colorSpace:$s,depthBuffer:!1},i=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(s)),this._blurMaterial=sg(s,t,e)}return i}_compileMaterial(t){let e=new Z(this._lodPlanes[0],t);this._renderer.compile(e,cl)}_sceneToCubeUV(t,e,n,i){let a=new $e(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(ru),h.toneMapping=Ei,h.autoClear=!1;let f=new de({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),g=new Z(new Tt,f),m=!1,x=t.background;x?x.isColor&&(f.color.copy(x),t.background=null,m=!0):(f.color.copy(ru),m=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let M=this._cubeSize;ro(i,y*M,p>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Is||t.mapping===zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Z(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ro(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,cl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ou[(i-s-1)%ou.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Z(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Wi-1),m=s/g,x=isFinite(s)?1+Math.floor(h*m):Wi;x>Wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Wi}`);let p=[],y=0;for(let b=0;b<Wi;++b){let A=b/m,_=Math.exp(-A*A/2);p.push(_),b===0?y+=_:b<x&&(y+=2*_)}for(let b=0;b<p.length;b++)p[b]=p[b]/y;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;let v=this._sizeLods[i],S=3*v*(i>M-Es?i-M+Es:0),E=4*(this._cubeSize-v);ro(e,S,E,3*v,2*v),l.setRenderTarget(e),l.render(u,cl)}};function ig(r){let t=[],e=[],n=[],i=r,s=r-Es+1+su.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Es?l=su[o-r+Es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,x=2,p=1,y=new Float32Array(m*g*f),M=new Float32Array(x*g*f),v=new Float32Array(p*g*f);for(let E=0;E<f;E++){let b=E%3*2/3-1,A=E>2?0:-1,_=[b,A,0,b+2/3,A,0,b+2/3,A+1,0,b,A,0,b+2/3,A+1,0,b,A+1,0];y.set(_,m*g*E),M.set(d,x*g*E);let w=[E,E,E,E,E,E];v.set(w,p*g*E)}let S=new ie;S.setAttribute("position",new fe(y,m)),S.setAttribute("uv",new fe(M,x)),S.setAttribute("faceIndex",new fe(v,p)),t.push(S),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(r,t,e){let n=new Qe(r,t,e);return n.texture.mapping=jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ro(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function sg(r,t,e){let n=new Float32Array(Wi),i=new I(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function lu(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function cu(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function ah(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function rg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Il||l===zl,h=l===Is||l===zs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Hs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Hs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function og(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&gr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function ag(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let m=d.morphAttributes[g];for(let x=0,p=m.length;x<p;x++)t.remove(m[x])}d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let m=f[g];for(let x=0,p=m.length;x<p;x++)t.update(m[x],r.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,m=0;if(f!==null){let y=f.array;m=f.version;for(let M=0,v=y.length;M<v;M+=3){let S=y[M+0],E=y[M+1],b=y[M+2];d.push(S,E,E,b,b,S)}}else if(g!==void 0){let y=g.array;m=g.version;for(let M=0,v=y.length/3-1;M<v;M+=3){let S=M+0,E=M+1,b=M+2;d.push(S,E,E,b,b,S)}}else return;let x=new(af(d)?Ns:ks)(d,1);x.version=m;let p=s.get(u);p&&t.remove(p),s.set(u,x)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function lg(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let x=0;for(let p=0;p<g;p++)x+=f[p];e.update(x,n,1)}function u(d,f,g,m){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],m[p]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,m,0,g);let p=0;for(let y=0;y<g;y++)p+=f[y]*m[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function cg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function hg(r,t,e){let n=new WeakMap,i=new Re;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let _=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let v=a.attributes.position.count*M,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*u),b=new Co(E,v,S,u);b.type=On,b.needsUpdate=!0;let A=M*4;for(let w=0;w<u;w++){let R=x[w],L=p[w],k=y[w],H=v*S*4*w;for(let B=0;B<R.count;B++){let N=B*A;f===!0&&(i.fromBufferAttribute(R,B),E[H+N+0]=i.x,E[H+N+1]=i.y,E[H+N+2]=i.z,E[H+N+3]=0),g===!0&&(i.fromBufferAttribute(L,B),E[H+N+4]=i.x,E[H+N+5]=i.y,E[H+N+6]=i.z,E[H+N+7]=0),m===!0&&(i.fromBufferAttribute(k,B),E[H+N+8]=i.x,E[H+N+9]=i.y,E[H+N+10]=i.z,E[H+N+11]=k.itemSize===4?i.w:1)}}d={count:u,texture:b,size:new tt(v,S)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function ug(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Lo=class extends fn{constructor(t,e,n,i,s,o,a,l,c,h=As){if(h!==As&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=$i),n===void 0&&h===Ds&&(n=Ls),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uf=new fn,hu=new Lo(1,1),ff=new Co,df=new hc,pf=new zo,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Zs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=uu[i];if(s===void 0&&(s=new Float32Array(i),uu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ze(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function ta(r,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function fg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2fv(this.addr,t),Ze(e,t)}}function pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ye(e,t))return;r.uniform3fv(this.addr,t),Ze(e,t)}}function mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4fv(this.addr,t),Ze(e,t)}}function gg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;mu.set(n),r.uniformMatrix2fv(this.addr,!1,mu),Ze(e,n)}}function xg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;pu.set(n),r.uniformMatrix3fv(this.addr,!1,pu),Ze(e,n)}}function vg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(Ye(e,n))return;du.set(n),r.uniformMatrix4fv(this.addr,!1,du),Ze(e,n)}}function yg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function _g(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2iv(this.addr,t),Ze(e,t)}}function Mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3iv(this.addr,t),Ze(e,t)}}function wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4iv(this.addr,t),Ze(e,t)}}function bg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ye(e,t))return;r.uniform2uiv(this.addr,t),Ze(e,t)}}function Sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ye(e,t))return;r.uniform3uiv(this.addr,t),Ze(e,t)}}function Tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ye(e,t))return;r.uniform4uiv(this.addr,t),Ze(e,t)}}function Ag(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hu.compareFunction=of,s=hu):s=uf,e.setTexture2D(t||s,i)}function Rg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||df,i)}function Cg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pf,i)}function Pg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ff,i)}function Ig(r){switch(r){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return xg;case 35676:return vg;case 5124:case 35670:return yg;case 35667:case 35671:return _g;case 35668:case 35672:return Mg;case 35669:case 35673:return wg;case 5125:return bg;case 36294:return Eg;case 36295:return Sg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Pg}}function zg(r,t){r.uniform1fv(this.addr,t)}function Lg(r,t){let e=Zs(t,this.size,2);r.uniform2fv(this.addr,e)}function Dg(r,t){let e=Zs(t,this.size,3);r.uniform3fv(this.addr,e)}function Ug(r,t){let e=Zs(t,this.size,4);r.uniform4fv(this.addr,e)}function kg(r,t){let e=Zs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ng(r,t){let e=Zs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Bg(r,t){let e=Zs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Fg(r,t){r.uniform1iv(this.addr,t)}function Hg(r,t){r.uniform2iv(this.addr,t)}function Og(r,t){r.uniform3iv(this.addr,t)}function Vg(r,t){r.uniform4iv(this.addr,t)}function Gg(r,t){r.uniform1uiv(this.addr,t)}function Wg(r,t){r.uniform2uiv(this.addr,t)}function Xg(r,t){r.uniform3uiv(this.addr,t)}function qg(r,t){r.uniform4uiv(this.addr,t)}function $g(r,t,e){let n=this.cache,i=t.length,s=ta(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uf,s[o])}function Yg(r,t,e){let n=this.cache,i=t.length,s=ta(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||df,s[o])}function Zg(r,t,e){let n=this.cache,i=t.length,s=ta(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pf,s[o])}function Jg(r,t,e){let n=this.cache,i=t.length,s=ta(e,i);Ye(n,s)||(r.uniform1iv(this.addr,s),Ze(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ff,s[o])}function Kg(r){switch(r){case 5126:return zg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ug;case 35674:return kg;case 35675:return Ng;case 35676:return Bg;case 5124:case 35670:return Fg;case 35667:case 35671:return Hg;case 35668:case 35672:return Og;case 35669:case 35673:return Vg;case 5125:return Gg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return Yg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}var dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}},pc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kg(e.type)}},mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;function gu(r,t){r.seq.push(t),r.map[t.id]=t}function jg(r,t,e){let n=r.name,i=n.length;for(pl.lastIndex=0;;){let s=pl.exec(n),o=pl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gu(e,c===void 0?new dc(a,r,t):new pc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new mc(a),gu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);jg(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function xu(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Qg=37297,tx=0;function ex(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vu=new re;function nx(r){ue._getMatrix(vu,ue.workingColorSpace,r);let t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(ue.getTransfer(r)){case Qo:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ex(r.getShaderSource(t),o)}else return i}function ix(r,t){let e=nx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sx(r,t){let e;switch(t){case Yc:e="Linear";break;case Zc:e="Reinhard";break;case Jc:e="Cineon";break;case kr:e="ACESFilmic";break;case Kc:e="AgX";break;case jc:e="Neutral";break;case Md:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var oo=new I;function rx(){ue.getLuminanceCoefficients(oo);let r=oo.x.toFixed(4),t=oo.y.toFixed(4),e=oo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ox(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xr).join(`
`)}function ax(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lx(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function xr(r){return r!==""}function _u(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var cx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gc(r){return r.replace(cx,ux)}var hx=new Map;function ux(r,t){let e=ae[t];if(e===void 0){let n=hx.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gc(e)}var fx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(r){return r.replace(fx,dx)}function dx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bu(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function px(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===si&&(t="SHADOWMAP_TYPE_VSM"),t}function mx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case zs:t="ENVMAP_TYPE_CUBE";break;case jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case zs:t="ENVMAP_MODE_REFRACTION";break}return t}function xx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $u:t="ENVMAP_BLENDING_MULTIPLY";break;case yd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function vx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function yx(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=px(e),c=mx(e),h=gx(e),u=xx(e),d=vx(e),f=ox(e),g=ax(s),m=i.createProgram(),x,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(xr).join(`
`),p.length>0&&(p+=`
`)):(x=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xr).join(`
`),p=[bu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ei?"#define TONE_MAPPING":"",e.toneMapping!==Ei?ae.tonemapping_pars_fragment:"",e.toneMapping!==Ei?sx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,ix("linearToOutputTexel",e.outputColorSpace),rx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xr).join(`
`)),o=gc(o),o=_u(o,e),o=Mu(o,e),a=gc(a),a=_u(a,e),a=Mu(a,e),o=wu(o),a=wu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===kh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=y+x+o,v=y+p+a,S=xu(i,i.VERTEX_SHADER,M),E=xu(i,i.FRAGMENT_SHADER,v);i.attachShader(m,S),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function b(R){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(m).trim(),k=i.getShaderInfoLog(S).trim(),H=i.getShaderInfoLog(E).trim(),B=!0,N=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,S,E);else{let V=yu(i,S,"vertex"),O=yu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+L+`
`+V+`
`+O)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(k===""||H==="")&&(N=!1);N&&(R.diagnostics={runnable:B,programLog:L,vertexShader:{log:k,prefix:x},fragmentShader:{log:H,prefix:p}})}i.deleteShader(S),i.deleteShader(E),A=new Cs(i,m),_=lx(i,m)}let A;this.getUniforms=function(){return A===void 0&&b(this),A};let _;this.getAttributes=function(){return _===void 0&&b(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(m,Qg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}var _x=0,xc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vc(t),e.set(t,n)),n}},vc=class{constructor(t){this.id=_x++,this.code=t,this.usedTimes=0}};function Mx(r,t,e,n,i,s,o){let a=new Po,l=new xc,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,w,R,L,k){let H=L.fog,B=k.geometry,N=_.isMeshStandardMaterial?L.environment:null,V=(_.isMeshStandardMaterial?e:t).get(_.envMap||N),O=V&&V.mapping===jo?V.image.height:null,q=g[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,P=Q!==void 0?Q.length:0,ft=0;B.morphAttributes.position!==void 0&&(ft=1),B.morphAttributes.normal!==void 0&&(ft=2),B.morphAttributes.color!==void 0&&(ft=3);let et,F,J,rt;if(q){let me=Fn[q];et=me.vertexShader,F=me.fragmentShader}else et=_.vertexShader,F=_.fragmentShader,l.update(_),J=l.getVertexShaderID(_),rt=l.getFragmentShaderID(_);let st=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),zt=k.isInstancedMesh===!0,Ut=k.isBatchedMesh===!0,Qt=!!_.map,at=!!_.matcap,gt=!!V,U=!!_.aoMap,Vt=!!_.lightMap,pt=!!_.bumpMap,kt=!!_.normalMap,Mt=!!_.displacementMap,Jt=!!_.emissiveMap,Pt=!!_.metalnessMap,z=!!_.roughnessMap,T=_.anisotropy>0,Y=_.clearcoat>0,it=_.dispersion>0,ct=_.iridescence>0,ot=_.sheen>0,Ot=_.transmission>0,St=T&&!!_.anisotropyMap,Lt=Y&&!!_.clearcoatMap,oe=Y&&!!_.clearcoatNormalMap,xt=Y&&!!_.clearcoatRoughnessMap,Ft=ct&&!!_.iridescenceMap,Kt=ct&&!!_.iridescenceThicknessMap,jt=ot&&!!_.sheenColorMap,Ht=ot&&!!_.sheenRoughnessMap,le=!!_.specularMap,se=!!_.specularColorMap,Te=!!_.specularIntensityMap,G=Ot&&!!_.transmissionMap,At=Ot&&!!_.thicknessMap,nt=!!_.gradientMap,lt=!!_.alphaMap,Et=_.alphaTest>0,Rt=!!_.alphaHash,ee=!!_.extensions,ge=Ei;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(ge=r.toneMapping);let Fe={shaderID:q,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:F,defines:_.defines,customVertexShaderID:J,customFragmentShaderID:rt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&k._colorsTexture!==null,instancing:zt,instancingColor:zt&&k.instanceColor!==null,instancingMorph:zt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:$s,alphaToCoverage:!!_.alphaToCoverage,map:Qt,matcap:at,envMap:gt,envMapMode:gt&&V.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:Vt,bumpMap:pt,normalMap:kt,displacementMap:d&&Mt,emissiveMap:Jt,normalMapObjectSpace:kt&&_.normalMapType===Sd,normalMapTangentSpace:kt&&_.normalMapType===rf,metalnessMap:Pt,roughnessMap:z,anisotropy:T,anisotropyMap:St,clearcoat:Y,clearcoatMap:Lt,clearcoatNormalMap:oe,clearcoatRoughnessMap:xt,dispersion:it,iridescence:ct,iridescenceMap:Ft,iridescenceThicknessMap:Kt,sheen:ot,sheenColorMap:jt,sheenRoughnessMap:Ht,specularMap:le,specularColorMap:se,specularIntensityMap:Te,transmission:Ot,transmissionMap:G,thicknessMap:At,gradientMap:nt,opaque:_.transparent===!1&&_.blending===Ts&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:Et,alphaHash:Rt,combine:_.combine,mapUv:Qt&&m(_.map.channel),aoMapUv:U&&m(_.aoMap.channel),lightMapUv:Vt&&m(_.lightMap.channel),bumpMapUv:pt&&m(_.bumpMap.channel),normalMapUv:kt&&m(_.normalMap.channel),displacementMapUv:Mt&&m(_.displacementMap.channel),emissiveMapUv:Jt&&m(_.emissiveMap.channel),metalnessMapUv:Pt&&m(_.metalnessMap.channel),roughnessMapUv:z&&m(_.roughnessMap.channel),anisotropyMapUv:St&&m(_.anisotropyMap.channel),clearcoatMapUv:Lt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ft&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:jt&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Ht&&m(_.sheenRoughnessMap.channel),specularMapUv:le&&m(_.specularMap.channel),specularColorMapUv:se&&m(_.specularColorMap.channel),specularIntensityMapUv:Te&&m(_.specularIntensityMap.channel),transmissionMapUv:G&&m(_.transmissionMap.channel),thicknessMapUv:At&&m(_.thicknessMap.channel),alphaMapUv:lt&&m(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(kt||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Qt||lt),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:dt,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:ge,decodeVideoTexture:Qt&&_.map.isVideoTexture===!0&&ue.getTransfer(_.map.colorSpace)===be,decodeVideoTextureEmissive:Jt&&_.emissiveMap.isVideoTexture===!0&&ue.getTransfer(_.emissiveMap.colorSpace)===be,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ee,flipSided:_.side===rn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Fe.vertexUv1s=c.has(1),Fe.vertexUv2s=c.has(2),Fe.vertexUv3s=c.has(3),c.clear(),Fe}function p(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let R in _.defines)w.push(R),w.push(_.defines[R]);return _.isRawShaderMaterial===!1&&(y(w,_),M(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function y(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function M(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let w=g[_.type],R;if(w){let L=Fn[w];R=$n.clone(L.uniforms)}else R=_.uniforms;return R}function S(_,w){let R;for(let L=0,k=h.length;L<k;L++){let H=h[L];if(H.cacheKey===w){R=H,++R.usedTimes;break}}return R===void 0&&(R=new yx(r,w,_,s),h.push(R)),R}function E(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function b(_){l.remove(_)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:A}}function wx(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function bx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Eu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Su(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,m,x){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=m,p.group=x),t++,p}function a(u,d,f,g,m,x){let p=o(u,d,f,g,m,x);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,m,x){let p=o(u,d,f,g,m,x);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||bx),n.length>1&&n.sort(d||Eu),i.length>1&&i.sort(d||Eu)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Ex(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Su,r.set(n,[o])):i>=s.length?(o=new Su,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Sx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new bt};break;case"SpotLight":e={position:new I,direction:new I,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Tx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Ax=0;function Rx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Cx(r){let t=new Sx,e=Tx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new ne,o=new ne;function a(c){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,m=0,x=0,p=0,y=0,M=0,v=0,S=0,E=0,b=0;c.sort(Rx);for(let _=0,w=c.length;_<w;_++){let R=c[_],L=R.color,k=R.intensity,H=R.distance,B=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=L.r*k,u+=L.g*k,d+=L.b*k;else if(R.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(R.sh.coefficients[N],k);b++}else if(R.isDirectionalLight){let N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,O=e.get(R);O.shadowIntensity=V.intensity,O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=R.shadow.matrix,y++}n.directional[f]=N,f++}else if(R.isSpotLight){let N=t.get(R);N.position.setFromMatrixPosition(R.matrixWorld),N.color.copy(L).multiplyScalar(k),N.distance=H,N.coneCos=Math.cos(R.angle),N.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),N.decay=R.decay,n.spot[m]=N;let V=R.shadow;if(R.map&&(n.spotLightMap[S]=R.map,S++,V.updateMatrices(R),R.castShadow&&E++),n.spotLightMatrix[m]=V.matrix,R.castShadow){let O=e.get(R);O.shadowIntensity=V.intensity,O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,n.spotShadow[m]=O,n.spotShadowMap[m]=B,v++}m++}else if(R.isRectAreaLight){let N=t.get(R);N.color.copy(L).multiplyScalar(k),N.halfWidth.set(R.width*.5,0,0),N.halfHeight.set(0,R.height*.5,0),n.rectArea[x]=N,x++}else if(R.isPointLight){let N=t.get(R);if(N.color.copy(R.color).multiplyScalar(R.intensity),N.distance=R.distance,N.decay=R.decay,R.castShadow){let V=R.shadow,O=e.get(R);O.shadowIntensity=V.intensity,O.shadowBias=V.bias,O.shadowNormalBias=V.normalBias,O.shadowRadius=V.radius,O.shadowMapSize=V.mapSize,O.shadowCameraNear=V.camera.near,O.shadowCameraFar=V.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=R.shadow.matrix,M++}n.point[g]=N,g++}else if(R.isHemisphereLight){let N=t.get(R);N.skyColor.copy(R.color).multiplyScalar(k),N.groundColor.copy(R.groundColor).multiplyScalar(k),n.hemi[p]=N,p++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ct.LTC_FLOAT_1,n.rectAreaLTC2=Ct.LTC_FLOAT_2):(n.rectAreaLTC1=Ct.LTC_HALF_1,n.rectAreaLTC2=Ct.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let A=n.hash;(A.directionalLength!==f||A.pointLength!==g||A.spotLength!==m||A.rectAreaLength!==x||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==M||A.numSpotShadows!==v||A.numSpotMaps!==S||A.numLightProbes!==b)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,A.directionalLength=f,A.pointLength=g,A.spotLength=m,A.rectAreaLength=x,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=M,A.numSpotShadows=v,A.numSpotMaps=S,A.numLightProbes=b,n.version=Ax++)}function l(c,h){let u=0,d=0,f=0,g=0,m=0,x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let M=c[p];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),u++}else if(M.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),f++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(M.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),d++}else if(M.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function Tu(r){let t=new Cx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Px(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Tu(r),t.set(i,[a])):s>=o.length?(a=new Tu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var yc=class extends Wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},_c=class extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,zx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lx(r,t,e){let n=new Tr,i=new tt,s=new tt,o=new Re,a=new yc({depthPacking:Ed}),l=new _c,c={},h=e.maxTextureSize,u={[Ti]:rn,[rn]:Ti,[Ee]:Ee},d=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Ix,fragmentShader:zx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ie;g.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Z(g,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let p=this.type;this.render=function(E,b,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;let _=r.getRenderTarget(),w=r.getActiveCubeFace(),R=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Vn),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==si&&this.type===si,H=p===si&&this.type!==si;for(let B=0,N=E.length;B<N;B++){let V=E[B],O=V.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let q=O.getFrameExtents();if(i.multiply(q),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,O.mapSize.y=s.y)),O.map===null||k===!0||H===!0){let P=this.type!==si?{minFilter:yn,magFilter:yn}:{};O.map!==null&&O.map.dispose(),O.map=new Qe(i.x,i.y,P),O.map.texture.name=V.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let Q=O.getViewportCount();for(let P=0;P<Q;P++){let ft=O.getViewport(P);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),L.viewport(o),O.updateMatrices(V,P),n=O.getFrustum(),v(b,A,O.camera,V,this.type)}O.isPointLightShadow!==!0&&this.type===si&&y(O,A),O.needsUpdate=!1}p=this.type,x.needsUpdate=!1,r.setRenderTarget(_,w,R)};function y(E,b){let A=t.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Qe(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,A,d,m,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,A,f,m,null)}function M(E,b,A,_){let w=null,R=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)w=R;else if(w=A.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let L=w.uuid,k=b.uuid,H=c[L];H===void 0&&(H={},c[L]=H);let B=H[k];B===void 0&&(B=w.clone(),H[k]=B,b.addEventListener("dispose",S)),w=B}if(w.visible=b.visible,w.wireframe=b.wireframe,_===si?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,A.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let L=r.properties.get(w);L.light=A}return w}function v(E,b,A,_,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===si)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let k=t.update(E),H=E.material;if(Array.isArray(H)){let B=k.groups;for(let N=0,V=B.length;N<V;N++){let O=B[N],q=H[O.materialIndex];if(q&&q.visible){let Q=M(E,q,_,w);E.onBeforeShadow(r,E,b,A,k,Q,O),r.renderBufferDirect(A,null,k,Q,E,O),E.onAfterShadow(r,E,b,A,k,Q,O)}}}else if(H.visible){let B=M(E,H,_,w);E.onBeforeShadow(r,E,b,A,k,B,null),r.renderBufferDirect(A,null,k,B,E,null),E.onAfterShadow(r,E,b,A,k,B,null)}}let L=E.children;for(let k=0,H=L.length;k<H;k++)v(L[k],b,A,_,w)}function S(E){E.target.removeEventListener("dispose",S);for(let A in c){let _=c[A],w=E.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}var Dx={[El]:Sl,[Tl]:Cl,[Al]:Pl,[Ps]:Rl,[Sl]:El,[Cl]:Tl,[Pl]:Al,[Rl]:Ps};function Ux(r,t){function e(){let G=!1,At=new Re,nt=null,lt=new Re(0,0,0,0);return{setMask:function(Et){nt!==Et&&!G&&(r.colorMask(Et,Et,Et,Et),nt=Et)},setLocked:function(Et){G=Et},setClear:function(Et,Rt,ee,ge,Fe){Fe===!0&&(Et*=ge,Rt*=ge,ee*=ge),At.set(Et,Rt,ee,ge),lt.equals(At)===!1&&(r.clearColor(Et,Rt,ee,ge),lt.copy(At))},reset:function(){G=!1,nt=null,lt.set(-1,0,0,0)}}}function n(){let G=!1,At=!1,nt=null,lt=null,Et=null;return{setReversed:function(Rt){if(At!==Rt){let ee=t.get("EXT_clip_control");At?ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.ZERO_TO_ONE_EXT):ee.clipControlEXT(ee.LOWER_LEFT_EXT,ee.NEGATIVE_ONE_TO_ONE_EXT);let ge=Et;Et=null,this.setClear(ge)}At=Rt},getReversed:function(){return At},setTest:function(Rt){Rt?st(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(Rt){nt!==Rt&&!G&&(r.depthMask(Rt),nt=Rt)},setFunc:function(Rt){if(At&&(Rt=Dx[Rt]),lt!==Rt){switch(Rt){case El:r.depthFunc(r.NEVER);break;case Sl:r.depthFunc(r.ALWAYS);break;case Tl:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case Al:r.depthFunc(r.EQUAL);break;case Rl:r.depthFunc(r.GEQUAL);break;case Cl:r.depthFunc(r.GREATER);break;case Pl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=Rt}},setLocked:function(Rt){G=Rt},setClear:function(Rt){Et!==Rt&&(At&&(Rt=1-Rt),r.clearDepth(Rt),Et=Rt)},reset:function(){G=!1,nt=null,lt=null,Et=null,At=!1}}}function i(){let G=!1,At=null,nt=null,lt=null,Et=null,Rt=null,ee=null,ge=null,Fe=null;return{setTest:function(me){G||(me?st(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(me){At!==me&&!G&&(r.stencilMask(me),At=me)},setFunc:function(me,pn,en){(nt!==me||lt!==pn||Et!==en)&&(r.stencilFunc(me,pn,en),nt=me,lt=pn,Et=en)},setOp:function(me,pn,en){(Rt!==me||ee!==pn||ge!==en)&&(r.stencilOp(me,pn,en),Rt=me,ee=pn,ge=en)},setLocked:function(me){G=me},setClear:function(me){Fe!==me&&(r.clearStencil(me),Fe=me)},reset:function(){G=!1,At=null,nt=null,lt=null,Et=null,Rt=null,ee=null,ge=null,Fe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,m=!1,x=null,p=null,y=null,M=null,v=null,S=null,E=null,b=new bt(0,0,0),A=0,_=!1,w=null,R=null,L=null,k=null,H=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,V=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(O)[1]),N=V>=1):O.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),N=V>=2);let q=null,Q={},P=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),et=new Re().fromArray(P),F=new Re().fromArray(ft);function J(G,At,nt,lt){let Et=new Uint8Array(4),Rt=r.createTexture();r.bindTexture(G,Rt),r.texParameteri(G,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(G,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ee=0;ee<nt;ee++)G===r.TEXTURE_3D||G===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,Et):r.texImage2D(At+ee,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Et);return Rt}let rt={};rt[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),rt[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),rt[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Ps),pt(!1),kt(Ch),st(r.CULL_FACE),U(Vn);function st(G){h[G]!==!0&&(r.enable(G),h[G]=!0)}function dt(G){h[G]!==!1&&(r.disable(G),h[G]=!1)}function zt(G,At){return u[G]!==At?(r.bindFramebuffer(G,At),u[G]=At,G===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=At),G===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=At),!0):!1}function Ut(G,At){let nt=f,lt=!1;if(G){nt=d.get(At),nt===void 0&&(nt=[],d.set(At,nt));let Et=G.textures;if(nt.length!==Et.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let Rt=0,ee=Et.length;Rt<ee;Rt++)nt[Rt]=r.COLOR_ATTACHMENT0+Rt;nt.length=Et.length,lt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,lt=!0);lt&&r.drawBuffers(nt)}function Qt(G){return g!==G?(r.useProgram(G),g=G,!0):!1}let at={[Gi]:r.FUNC_ADD,[nd]:r.FUNC_SUBTRACT,[id]:r.FUNC_REVERSE_SUBTRACT};at[sd]=r.MIN,at[rd]=r.MAX;let gt={[od]:r.ZERO,[ad]:r.ONE,[ld]:r.SRC_COLOR,[wl]:r.SRC_ALPHA,[pd]:r.SRC_ALPHA_SATURATE,[fd]:r.DST_COLOR,[hd]:r.DST_ALPHA,[cd]:r.ONE_MINUS_SRC_COLOR,[bl]:r.ONE_MINUS_SRC_ALPHA,[dd]:r.ONE_MINUS_DST_COLOR,[ud]:r.ONE_MINUS_DST_ALPHA,[md]:r.CONSTANT_COLOR,[gd]:r.ONE_MINUS_CONSTANT_COLOR,[xd]:r.CONSTANT_ALPHA,[vd]:r.ONE_MINUS_CONSTANT_ALPHA};function U(G,At,nt,lt,Et,Rt,ee,ge,Fe,me){if(G===Vn){m===!0&&(dt(r.BLEND),m=!1);return}if(m===!1&&(st(r.BLEND),m=!0),G!==ed){if(G!==x||me!==_){if((p!==Gi||v!==Gi)&&(r.blendEquation(r.FUNC_ADD),p=Gi,v=Gi),me)switch(G){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case He:r.blendFunc(r.ONE,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case He:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}y=null,M=null,S=null,E=null,b.set(0,0,0),A=0,x=G,_=me}return}Et=Et||At,Rt=Rt||nt,ee=ee||lt,(At!==p||Et!==v)&&(r.blendEquationSeparate(at[At],at[Et]),p=At,v=Et),(nt!==y||lt!==M||Rt!==S||ee!==E)&&(r.blendFuncSeparate(gt[nt],gt[lt],gt[Rt],gt[ee]),y=nt,M=lt,S=Rt,E=ee),(ge.equals(b)===!1||Fe!==A)&&(r.blendColor(ge.r,ge.g,ge.b,Fe),b.copy(ge),A=Fe),x=G,_=!1}function Vt(G,At){G.side===Ee?dt(r.CULL_FACE):st(r.CULL_FACE);let nt=G.side===rn;At&&(nt=!nt),pt(nt),G.blending===Ts&&G.transparent===!1?U(Vn):U(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),o.setFunc(G.depthFunc),o.setTest(G.depthTest),o.setMask(G.depthWrite),s.setMask(G.colorWrite);let lt=G.stencilWrite;a.setTest(lt),lt&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Jt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(G){w!==G&&(G?r.frontFace(r.CW):r.frontFace(r.CCW),w=G)}function kt(G){G!==Qf?(st(r.CULL_FACE),G!==R&&(G===Ch?r.cullFace(r.BACK):G===td?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),R=G}function Mt(G){G!==L&&(N&&r.lineWidth(G),L=G)}function Jt(G,At,nt){G?(st(r.POLYGON_OFFSET_FILL),(k!==At||H!==nt)&&(r.polygonOffset(At,nt),k=At,H=nt)):dt(r.POLYGON_OFFSET_FILL)}function Pt(G){G?st(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function z(G){G===void 0&&(G=r.TEXTURE0+B-1),q!==G&&(r.activeTexture(G),q=G)}function T(G,At,nt){nt===void 0&&(q===null?nt=r.TEXTURE0+B-1:nt=q);let lt=Q[nt];lt===void 0&&(lt={type:void 0,texture:void 0},Q[nt]=lt),(lt.type!==G||lt.texture!==At)&&(q!==nt&&(r.activeTexture(nt),q=nt),r.bindTexture(G,At||rt[G]),lt.type=G,lt.texture=At)}function Y(){let G=Q[q];G!==void 0&&G.type!==void 0&&(r.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function it(){try{r.compressedTexImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ot(){try{r.texSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function St(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Lt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function xt(){try{r.texStorage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ft(){try{r.texImage2D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Kt(){try{r.texImage3D.apply(r,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function jt(G){et.equals(G)===!1&&(r.scissor(G.x,G.y,G.z,G.w),et.copy(G))}function Ht(G){F.equals(G)===!1&&(r.viewport(G.x,G.y,G.z,G.w),F.copy(G))}function le(G,At){let nt=c.get(At);nt===void 0&&(nt=new WeakMap,c.set(At,nt));let lt=nt.get(G);lt===void 0&&(lt=r.getUniformBlockIndex(At,G.name),nt.set(G,lt))}function se(G,At){let lt=c.get(At).get(G);l.get(At)!==lt&&(r.uniformBlockBinding(At,lt,G.__bindingPointIndex),l.set(At,lt))}function Te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},q=null,Q={},u={},d=new WeakMap,f=[],g=null,m=!1,x=null,p=null,y=null,M=null,v=null,S=null,E=null,b=new bt(0,0,0),A=0,_=!1,w=null,R=null,L=null,k=null,H=null,et.set(0,0,r.canvas.width,r.canvas.height),F.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:dt,bindFramebuffer:zt,drawBuffers:Ut,useProgram:Qt,setBlending:U,setMaterial:Vt,setFlipSided:pt,setCullFace:kt,setLineWidth:Mt,setPolygonOffset:Jt,setScissorTest:Pt,activeTexture:z,bindTexture:T,unbindTexture:Y,compressedTexImage2D:it,compressedTexImage3D:ct,texImage2D:Ft,texImage3D:Kt,updateUBOMapping:le,uniformBlockBinding:se,texStorage2D:oe,texStorage3D:xt,texSubImage2D:ot,texSubImage3D:Ot,compressedTexSubImage2D:St,compressedTexSubImage3D:Lt,scissor:jt,viewport:Ht,reset:Te}}function Au(r,t,e,n){let i=kx(n);switch(e){case ju:return r*t;case tf:return r*t;case ef:return r*t*2;case nh:return r*t/i.components*i.byteLength;case ih:return r*t/i.components*i.byteLength;case nf:return r*t*2/i.components*i.byteLength;case sh:return r*t*2/i.components*i.byteLength;case Qu:return r*t*3/i.components*i.byteLength;case Dn:return r*t*4/i.components*i.byteLength;case rh:return r*t*4/i.components*i.byteLength;case _o:case Mo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case wo:case bo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ul:case Nl:return Math.max(r,16)*Math.max(t,8)/4;case Dl:case kl:return Math.max(r,8)*Math.max(t,8)/2;case Bl:case Fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Gl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Xl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case ql:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case $l:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Yl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case jl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case tc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Eo:case ec:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sf:case ic:return Math.ceil(r/4)*Math.ceil(t/4)*8;case sc:case rc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kx(r){switch(r){case li:case Zu:return{byteLength:1,components:1};case Er:case Ju:case Mn:return{byteLength:2,components:1};case th:case eh:return{byteLength:2,components:4};case $i:case Qc:case On:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Nx(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(z,T){return f?new OffscreenCanvas(z,T):Ao("canvas")}function m(z,T,Y){let it=1,ct=Pt(z);if((ct.width>Y||ct.height>Y)&&(it=Y/Math.max(ct.width,ct.height)),it<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let ot=Math.floor(it*ct.width),Ot=Math.floor(it*ct.height);u===void 0&&(u=g(ot,Ot));let St=T?g(ot,Ot):u;return St.width=ot,St.height=Ot,St.getContext("2d").drawImage(z,0,0,ot,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+ot+"x"+Ot+")."),St}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),z;return z}function x(z){return z.generateMipmaps}function p(z){r.generateMipmap(z)}function y(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(z,T,Y,it,ct=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ot=T;if(T===r.RED&&(Y===r.FLOAT&&(ot=r.R32F),Y===r.HALF_FLOAT&&(ot=r.R16F),Y===r.UNSIGNED_BYTE&&(ot=r.R8)),T===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.R8UI),Y===r.UNSIGNED_SHORT&&(ot=r.R16UI),Y===r.UNSIGNED_INT&&(ot=r.R32UI),Y===r.BYTE&&(ot=r.R8I),Y===r.SHORT&&(ot=r.R16I),Y===r.INT&&(ot=r.R32I)),T===r.RG&&(Y===r.FLOAT&&(ot=r.RG32F),Y===r.HALF_FLOAT&&(ot=r.RG16F),Y===r.UNSIGNED_BYTE&&(ot=r.RG8)),T===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RG16UI),Y===r.UNSIGNED_INT&&(ot=r.RG32UI),Y===r.BYTE&&(ot=r.RG8I),Y===r.SHORT&&(ot=r.RG16I),Y===r.INT&&(ot=r.RG32I)),T===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),Y===r.UNSIGNED_INT&&(ot=r.RGB32UI),Y===r.BYTE&&(ot=r.RGB8I),Y===r.SHORT&&(ot=r.RGB16I),Y===r.INT&&(ot=r.RGB32I)),T===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ot=r.RGBA32UI),Y===r.BYTE&&(ot=r.RGBA8I),Y===r.SHORT&&(ot=r.RGBA16I),Y===r.INT&&(ot=r.RGBA32I)),T===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),T===r.RGBA){let Ot=ct?Qo:ue.getTransfer(it);Y===r.FLOAT&&(ot=r.RGBA32F),Y===r.HALF_FLOAT&&(ot=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ot=Ot===be?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(z,T){let Y;return z?T===null||T===$i||T===Ls?Y=r.DEPTH24_STENCIL8:T===On?Y=r.DEPTH32F_STENCIL8:T===Er&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===$i||T===Ls?Y=r.DEPTH_COMPONENT24:T===On?Y=r.DEPTH_COMPONENT32F:T===Er&&(Y=r.DEPTH_COMPONENT16),Y}function S(z,T){return x(z)===!0||z.isFramebufferTexture&&z.minFilter!==yn&&z.minFilter!==Hn?Math.log2(Math.max(T.width,T.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?T.mipmaps.length:1}function E(z){let T=z.target;T.removeEventListener("dispose",E),A(T),T.isVideoTexture&&h.delete(T)}function b(z){let T=z.target;T.removeEventListener("dispose",b),w(T)}function A(z){let T=n.get(z);if(T.__webglInit===void 0)return;let Y=z.source,it=d.get(Y);if(it){let ct=it[T.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&_(z),Object.keys(it).length===0&&d.delete(Y)}n.remove(z)}function _(z){let T=n.get(z);r.deleteTexture(T.__webglTexture);let Y=z.source,it=d.get(Y);delete it[T.__cacheKey],o.memory.textures--}function w(z){let T=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let ct=0;ct<T.__webglFramebuffer[it].length;ct++)r.deleteFramebuffer(T.__webglFramebuffer[it][ct]);else r.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)r.deleteFramebuffer(T.__webglFramebuffer[it]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let Y=z.textures;for(let it=0,ct=Y.length;it<ct;it++){let ot=n.get(Y[it]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(Y[it])}n.remove(z)}let R=0;function L(){R=0}function k(){let z=R;return z>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+i.maxTextures),R+=1,z}function H(z){let T=[];return T.push(z.wrapS),T.push(z.wrapT),T.push(z.wrapR||0),T.push(z.magFilter),T.push(z.minFilter),T.push(z.anisotropy),T.push(z.internalFormat),T.push(z.format),T.push(z.type),T.push(z.generateMipmaps),T.push(z.premultiplyAlpha),T.push(z.flipY),T.push(z.unpackAlignment),T.push(z.colorSpace),T.join()}function B(z,T){let Y=n.get(z);if(z.isVideoTexture&&Mt(z),z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){let it=z.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(Y,z,T);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+T)}function N(z,T){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){F(Y,z,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+T)}function V(z,T){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){F(Y,z,T);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+T)}function O(z,T){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){J(Y,z,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+T)}let q={[br]:r.REPEAT,[Xi]:r.CLAMP_TO_EDGE,[Ll]:r.MIRRORED_REPEAT},Q={[yn]:r.NEAREST,[wd]:r.NEAREST_MIPMAP_NEAREST,[Hr]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[Oa]:r.LINEAR_MIPMAP_NEAREST,[qi]:r.LINEAR_MIPMAP_LINEAR},P={[Td]:r.NEVER,[zd]:r.ALWAYS,[Ad]:r.LESS,[of]:r.LEQUAL,[Rd]:r.EQUAL,[Id]:r.GEQUAL,[Cd]:r.GREATER,[Pd]:r.NOTEQUAL};function ft(z,T){if(T.type===On&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Hn||T.magFilter===Oa||T.magFilter===Hr||T.magFilter===qi||T.minFilter===Hn||T.minFilter===Oa||T.minFilter===Hr||T.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,q[T.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,q[T.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,q[T.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,Q[T.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,Q[T.minFilter]),T.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,P[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===yn||T.minFilter!==Hr&&T.minFilter!==qi||T.type===On&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function et(z,T){let Y=!1;z.__webglInit===void 0&&(z.__webglInit=!0,T.addEventListener("dispose",E));let it=T.source,ct=d.get(it);ct===void 0&&(ct={},d.set(it,ct));let ot=H(T);if(ot!==z.__cacheKey){ct[ot]===void 0&&(ct[ot]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ct[ot].usedTimes++;let Ot=ct[z.__cacheKey];Ot!==void 0&&(ct[z.__cacheKey].usedTimes--,Ot.usedTimes===0&&_(T)),z.__cacheKey=ot,z.__webglTexture=ct[ot].texture}return Y}function F(z,T,Y){let it=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=r.TEXTURE_3D);let ct=et(z,T),ot=T.source;e.bindTexture(it,z.__webglTexture,r.TEXTURE0+Y);let Ot=n.get(ot);if(ot.version!==Ot.__version||ct===!0){e.activeTexture(r.TEXTURE0+Y);let St=ue.getPrimaries(ue.workingColorSpace),Lt=T.colorSpace===wi?null:ue.getPrimaries(T.colorSpace),oe=T.colorSpace===wi||St===Lt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let xt=m(T.image,!1,i.maxTextureSize);xt=Jt(T,xt);let Ft=s.convert(T.format,T.colorSpace),Kt=s.convert(T.type),jt=M(T.internalFormat,Ft,Kt,T.colorSpace,T.isVideoTexture);ft(it,T);let Ht,le=T.mipmaps,se=T.isVideoTexture!==!0,Te=Ot.__version===void 0||ct===!0,G=ot.dataReady,At=S(T,xt);if(T.isDepthTexture)jt=v(T.format===Ds,T.type),Te&&(se?e.texStorage2D(r.TEXTURE_2D,1,jt,xt.width,xt.height):e.texImage2D(r.TEXTURE_2D,0,jt,xt.width,xt.height,0,Ft,Kt,null));else if(T.isDataTexture)if(le.length>0){se&&Te&&e.texStorage2D(r.TEXTURE_2D,At,jt,le[0].width,le[0].height);for(let nt=0,lt=le.length;nt<lt;nt++)Ht=le[nt],se?G&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Ht.width,Ht.height,Ft,Kt,Ht.data):e.texImage2D(r.TEXTURE_2D,nt,jt,Ht.width,Ht.height,0,Ft,Kt,Ht.data);T.generateMipmaps=!1}else se?(Te&&e.texStorage2D(r.TEXTURE_2D,At,jt,xt.width,xt.height),G&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt.width,xt.height,Ft,Kt,xt.data)):e.texImage2D(r.TEXTURE_2D,0,jt,xt.width,xt.height,0,Ft,Kt,xt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){se&&Te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,At,jt,le[0].width,le[0].height,xt.depth);for(let nt=0,lt=le.length;nt<lt;nt++)if(Ht=le[nt],T.format!==Dn)if(Ft!==null)if(se){if(G)if(T.layerUpdates.size>0){let Et=Au(Ht.width,Ht.height,T.format,T.type);for(let Rt of T.layerUpdates){let ee=Ht.data.subarray(Rt*Et/Ht.data.BYTES_PER_ELEMENT,(Rt+1)*Et/Ht.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,Rt,Ht.width,Ht.height,1,Ft,ee)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Ht.width,Ht.height,xt.depth,Ft,Ht.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,jt,Ht.width,Ht.height,xt.depth,0,Ht.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?G&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,Ht.width,Ht.height,xt.depth,Ft,Kt,Ht.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,jt,Ht.width,Ht.height,xt.depth,0,Ft,Kt,Ht.data)}else{se&&Te&&e.texStorage2D(r.TEXTURE_2D,At,jt,le[0].width,le[0].height);for(let nt=0,lt=le.length;nt<lt;nt++)Ht=le[nt],T.format!==Dn?Ft!==null?se?G&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,Ht.width,Ht.height,Ft,Ht.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,jt,Ht.width,Ht.height,0,Ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?G&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Ht.width,Ht.height,Ft,Kt,Ht.data):e.texImage2D(r.TEXTURE_2D,nt,jt,Ht.width,Ht.height,0,Ft,Kt,Ht.data)}else if(T.isDataArrayTexture)if(se){if(Te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,At,jt,xt.width,xt.height,xt.depth),G)if(T.layerUpdates.size>0){let nt=Au(xt.width,xt.height,T.format,T.type);for(let lt of T.layerUpdates){let Et=xt.data.subarray(lt*nt/xt.data.BYTES_PER_ELEMENT,(lt+1)*nt/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,xt.width,xt.height,1,Ft,Kt,Et)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Ft,Kt,xt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,jt,xt.width,xt.height,xt.depth,0,Ft,Kt,xt.data);else if(T.isData3DTexture)se?(Te&&e.texStorage3D(r.TEXTURE_3D,At,jt,xt.width,xt.height,xt.depth),G&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Ft,Kt,xt.data)):e.texImage3D(r.TEXTURE_3D,0,jt,xt.width,xt.height,xt.depth,0,Ft,Kt,xt.data);else if(T.isFramebufferTexture){if(Te)if(se)e.texStorage2D(r.TEXTURE_2D,At,jt,xt.width,xt.height);else{let nt=xt.width,lt=xt.height;for(let Et=0;Et<At;Et++)e.texImage2D(r.TEXTURE_2D,Et,jt,nt,lt,0,Ft,Kt,null),nt>>=1,lt>>=1}}else if(le.length>0){if(se&&Te){let nt=Pt(le[0]);e.texStorage2D(r.TEXTURE_2D,At,jt,nt.width,nt.height)}for(let nt=0,lt=le.length;nt<lt;nt++)Ht=le[nt],se?G&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,Ft,Kt,Ht):e.texImage2D(r.TEXTURE_2D,nt,jt,Ft,Kt,Ht);T.generateMipmaps=!1}else if(se){if(Te){let nt=Pt(xt);e.texStorage2D(r.TEXTURE_2D,At,jt,nt.width,nt.height)}G&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ft,Kt,xt)}else e.texImage2D(r.TEXTURE_2D,0,jt,Ft,Kt,xt);x(T)&&p(it),Ot.__version=ot.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function J(z,T,Y){if(T.image.length!==6)return;let it=et(z,T),ct=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+Y);let ot=n.get(ct);if(ct.version!==ot.__version||it===!0){e.activeTexture(r.TEXTURE0+Y);let Ot=ue.getPrimaries(ue.workingColorSpace),St=T.colorSpace===wi?null:ue.getPrimaries(T.colorSpace),Lt=T.colorSpace===wi||Ot===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);let oe=T.isCompressedTexture||T.image[0].isCompressedTexture,xt=T.image[0]&&T.image[0].isDataTexture,Ft=[];for(let lt=0;lt<6;lt++)!oe&&!xt?Ft[lt]=m(T.image[lt],!0,i.maxCubemapSize):Ft[lt]=xt?T.image[lt].image:T.image[lt],Ft[lt]=Jt(T,Ft[lt]);let Kt=Ft[0],jt=s.convert(T.format,T.colorSpace),Ht=s.convert(T.type),le=M(T.internalFormat,jt,Ht,T.colorSpace),se=T.isVideoTexture!==!0,Te=ot.__version===void 0||it===!0,G=ct.dataReady,At=S(T,Kt);ft(r.TEXTURE_CUBE_MAP,T);let nt;if(oe){se&&Te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,le,Kt.width,Kt.height);for(let lt=0;lt<6;lt++){nt=Ft[lt].mipmaps;for(let Et=0;Et<nt.length;Et++){let Rt=nt[Et];T.format!==Dn?jt!==null?se?G&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,Rt.width,Rt.height,jt,Rt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,le,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):se?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,0,0,Rt.width,Rt.height,jt,Ht,Rt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et,le,Rt.width,Rt.height,0,jt,Ht,Rt.data)}}}else{if(nt=T.mipmaps,se&&Te){nt.length>0&&At++;let lt=Pt(Ft[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,At,le,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(xt){se?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft[lt].width,Ft[lt].height,jt,Ht,Ft[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,le,Ft[lt].width,Ft[lt].height,0,jt,Ht,Ft[lt].data);for(let Et=0;Et<nt.length;Et++){let ee=nt[Et].image[lt].image;se?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,ee.width,ee.height,jt,Ht,ee.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,le,ee.width,ee.height,0,jt,Ht,ee.data)}}else{se?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,jt,Ht,Ft[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,le,jt,Ht,Ft[lt]);for(let Et=0;Et<nt.length;Et++){let Rt=nt[Et];se?G&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,0,0,jt,Ht,Rt.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Et+1,le,jt,Ht,Rt.image[lt])}}}x(T)&&p(r.TEXTURE_CUBE_MAP),ot.__version=ct.version,T.onUpdate&&T.onUpdate(T)}z.__version=T.version}function rt(z,T,Y,it,ct,ot){let Ot=s.convert(Y.format,Y.colorSpace),St=s.convert(Y.type),Lt=M(Y.internalFormat,Ot,St,Y.colorSpace),oe=n.get(T),xt=n.get(Y);if(xt.__renderTarget=T,!oe.__hasExternalTextures){let Ft=Math.max(1,T.width>>ot),Kt=Math.max(1,T.height>>ot);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?e.texImage3D(ct,ot,Lt,Ft,Kt,T.depth,0,Ot,St,null):e.texImage2D(ct,ot,Lt,Ft,Kt,0,Ot,St,null)}e.bindFramebuffer(r.FRAMEBUFFER,z),kt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,ct,xt.__webglTexture,0,pt(T)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,ct,xt.__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(z,T,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,z),T.depthBuffer){let it=T.depthTexture,ct=it&&it.isDepthTexture?it.type:null,ot=v(T.stencilBuffer,ct),Ot=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=pt(T);kt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,St,ot,T.width,T.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,St,ot,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,ot,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ot,r.RENDERBUFFER,z)}else{let it=T.textures;for(let ct=0;ct<it.length;ct++){let ot=it[ct],Ot=s.convert(ot.format,ot.colorSpace),St=s.convert(ot.type),Lt=M(ot.internalFormat,Ot,St,ot.colorSpace),oe=pt(T);Y&&kt(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,Lt,T.width,T.height):kt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,Lt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Lt,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(z,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,z),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(T.depthTexture);it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),B(T.depthTexture,0);let ct=it.__webglTexture,ot=pt(T);if(T.depthTexture.format===As)kt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0);else if(T.depthTexture.format===Ds)kt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function zt(z){let T=n.get(z),Y=z.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==z.depthTexture){let it=z.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),it){let ct=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,it.removeEventListener("dispose",ct)};it.addEventListener("dispose",ct),T.__depthDisposeCallback=ct}T.__boundDepthTexture=it}if(z.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");dt(T.__webglFramebuffer,z)}else if(Y){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]===void 0)T.__webglDepthbuffer[it]=r.createRenderbuffer(),st(T.__webglDepthbuffer[it],z,!1);else{let ct=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),st(T.__webglDepthbuffer,z,!1);else{let it=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ct)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ut(z,T,Y){let it=n.get(z);T!==void 0&&rt(it.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&zt(z)}function Qt(z){let T=z.texture,Y=n.get(z),it=n.get(T);z.addEventListener("dispose",b);let ct=z.textures,ot=z.isWebGLCubeRenderTarget===!0,Ot=ct.length>1;if(Ot||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=T.version,o.memory.textures++),ot){Y.__webglFramebuffer=[];for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[St]=[];for(let Lt=0;Lt<T.mipmaps.length;Lt++)Y.__webglFramebuffer[St][Lt]=r.createFramebuffer()}else Y.__webglFramebuffer[St]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let St=0;St<T.mipmaps.length;St++)Y.__webglFramebuffer[St]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ot)for(let St=0,Lt=ct.length;St<Lt;St++){let oe=n.get(ct[St]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),o.memory.textures++)}if(z.samples>0&&kt(z)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let St=0;St<ct.length;St++){let Lt=ct[St];Y.__webglColorRenderbuffer[St]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[St]);let oe=s.convert(Lt.format,Lt.colorSpace),xt=s.convert(Lt.type),Ft=M(Lt.internalFormat,oe,xt,Lt.colorSpace,z.isXRRenderTarget===!0),Kt=pt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Ft,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,Y.__webglColorRenderbuffer[St])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),st(Y.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),ft(r.TEXTURE_CUBE_MAP,T);for(let St=0;St<6;St++)if(T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)rt(Y.__webglFramebuffer[St][Lt],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+St,Lt);else rt(Y.__webglFramebuffer[St],z,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0);x(T)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let St=0,Lt=ct.length;St<Lt;St++){let oe=ct[St],xt=n.get(oe);e.bindTexture(r.TEXTURE_2D,xt.__webglTexture),ft(r.TEXTURE_2D,oe),rt(Y.__webglFramebuffer,z,oe,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,0),x(oe)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let St=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(St=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(St,it.__webglTexture),ft(St,T),T.mipmaps&&T.mipmaps.length>0)for(let Lt=0;Lt<T.mipmaps.length;Lt++)rt(Y.__webglFramebuffer[Lt],z,T,r.COLOR_ATTACHMENT0,St,Lt);else rt(Y.__webglFramebuffer,z,T,r.COLOR_ATTACHMENT0,St,0);x(T)&&p(St),e.unbindTexture()}z.depthBuffer&&zt(z)}function at(z){let T=z.textures;for(let Y=0,it=T.length;Y<it;Y++){let ct=T[Y];if(x(ct)){let ot=y(z),Ot=n.get(ct).__webglTexture;e.bindTexture(ot,Ot),p(ot),e.unbindTexture()}}}let gt=[],U=[];function Vt(z){if(z.samples>0){if(kt(z)===!1){let T=z.textures,Y=z.width,it=z.height,ct=r.COLOR_BUFFER_BIT,ot=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ot=n.get(z),St=T.length>1;if(St)for(let Lt=0;Lt<T.length;Lt++)e.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Lt=0;Lt<T.length;Lt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),St){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);let oe=n.get(T[Lt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,Y,it,0,0,Y,it,ct,r.NEAREST),l===!0&&(gt.length=0,U.length=0,gt.push(r.COLOR_ATTACHMENT0+Lt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(gt.push(ot),U.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,gt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),St)for(let Lt=0;Lt<T.length;Lt++){e.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.RENDERBUFFER,Ot.__webglColorRenderbuffer[Lt]);let oe=n.get(T[Lt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ot.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Lt,r.TEXTURE_2D,oe,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let T=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function pt(z){return Math.min(i.maxSamples,z.samples)}function kt(z){let T=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(z){let T=o.render.frame;h.get(z)!==T&&(h.set(z,T),z.update())}function Jt(z,T){let Y=z.colorSpace,it=z.format,ct=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Y!==$s&&Y!==wi&&(ue.getTransfer(Y)===be?(it!==Dn||ct!==li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}function Pt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.setTexture2D=B,this.setTexture2DArray=N,this.setTexture3D=V,this.setTextureCube=O,this.rebindTextures=Ut,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Vt,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=kt}function Bx(r,t){function e(n,i=wi){let s,o=ue.getTransfer(i);if(n===li)return r.UNSIGNED_BYTE;if(n===th)return r.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return r.BYTE;if(n===Ju)return r.SHORT;if(n===Er)return r.UNSIGNED_SHORT;if(n===Qc)return r.INT;if(n===$i)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===Mn)return r.HALF_FLOAT;if(n===ju)return r.ALPHA;if(n===Qu)return r.RGB;if(n===Dn)return r.RGBA;if(n===tf)return r.LUMINANCE;if(n===ef)return r.LUMINANCE_ALPHA;if(n===As)return r.DEPTH_COMPONENT;if(n===Ds)return r.DEPTH_STENCIL;if(n===nh)return r.RED;if(n===ih)return r.RED_INTEGER;if(n===nf)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===rh)return r.RGBA_INTEGER;if(n===_o||n===Mo||n===wo||n===bo)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_o)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dl||n===Ul||n===kl||n===Nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Dl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Bl||n===Fl||n===Hl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Bl||n===Fl)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Hl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ol||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===$l||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ol)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Gl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ql)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$l)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Zl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Jl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===jl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ql)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===tc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Eo||n===ec||n===nc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Eo)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sf||n===ic||n===sc||n===rc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Eo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===sc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ls?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Mc=class extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}},Fx={type:"move"},_r=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let x=e.getJointPose(m,n),p=this._getHandJoint(c,m);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Fx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ox=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new fn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:Hx,fragmentShader:Ox,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Z(new Ce(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Ai{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,m=new wc,x=e.getContextAttributes(),p=null,y=null,M=[],v=[],S=new tt,E=null,b=new $e;b.viewport=new Re;let A=new $e;A.viewport=new Re;let _=[b,A],w=new Mc,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let J=M[F];return J===void 0&&(J=new _r,M[F]=J),J.getTargetRaySpace()},this.getControllerGrip=function(F){let J=M[F];return J===void 0&&(J=new _r,M[F]=J),J.getGripSpace()},this.getHand=function(F){let J=M[F];return J===void 0&&(J=new _r,M[F]=J),J.getHandSpace()};function k(F){let J=v.indexOf(F.inputSource);if(J===-1)return;let rt=M[J];rt!==void 0&&(rt.update(F.inputSource,F.frame,c||o),rt.dispatchEvent({type:F.type,data:F.inputSource}))}function H(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",B);for(let F=0;F<M.length;F++){let J=v[F];J!==null&&(v[F]=null,M[F].disconnect(J))}R=null,L=null,m.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,y=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",H),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0){let J={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Qe(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:li,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,rt=null,st=null;x.depth&&(st=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=x.stencil?Ds:As,rt=x.stencil?Ls:$i);let dt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(dt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Qe(d.textureWidth,d.textureHeight,{format:Dn,type:li,depthTexture:new Lo(d.textureWidth,d.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(F){for(let J=0;J<F.removed.length;J++){let rt=F.removed[J],st=v.indexOf(rt);st>=0&&(v[st]=null,M[st].disconnect(rt))}for(let J=0;J<F.added.length;J++){let rt=F.added[J],st=v.indexOf(rt);if(st===-1){for(let zt=0;zt<M.length;zt++)if(zt>=v.length){v.push(rt),st=zt;break}else if(v[zt]===null){v[zt]=rt,st=zt;break}if(st===-1)break}let dt=M[st];dt&&dt.connect(rt)}}let N=new I,V=new I;function O(F,J,rt){N.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(rt.matrixWorld);let st=N.distanceTo(V),dt=J.projectionMatrix.elements,zt=rt.projectionMatrix.elements,Ut=dt[14]/(dt[10]-1),Qt=dt[14]/(dt[10]+1),at=(dt[9]+1)/dt[5],gt=(dt[9]-1)/dt[5],U=(dt[8]-1)/dt[0],Vt=(zt[8]+1)/zt[0],pt=Ut*U,kt=Ut*Vt,Mt=st/(-U+Vt),Jt=Mt*-U;if(J.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Jt),F.translateZ(Mt),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),dt[10]===-1)F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let Pt=Ut+Mt,z=Qt+Mt,T=pt-Jt,Y=kt+(st-Jt),it=at*Qt/z*Pt,ct=gt*Qt/z*Pt;F.projectionMatrix.makePerspective(T,Y,it,ct,Pt,z),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function q(F,J){J===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(J.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let J=F.near,rt=F.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),w.near=A.near=b.near=J,w.far=A.far=b.far=rt,(R!==w.near||L!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),R=w.near,L=w.far),b.layers.mask=F.layers.mask|2,A.layers.mask=F.layers.mask|4,w.layers.mask=b.layers.mask|A.layers.mask;let st=F.parent,dt=w.cameras;q(w,st);for(let zt=0;zt<dt.length;zt++)q(dt[zt],st);dt.length===2?O(w,b,A):w.projectionMatrix.copy(b.projectionMatrix),Q(F,w,st)};function Q(F,J,rt){rt===null?F.matrix.copy(J.matrixWorld):(F.matrix.copy(rt.matrixWorld),F.matrix.invert(),F.matrix.multiply(J.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(J.projectionMatrix),F.projectionMatrixInverse.copy(J.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Us*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(F){l=F,d!==null&&(d.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)};let P=null;function ft(F,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let st=!1;rt.length!==w.cameras.length&&(w.cameras.length=0,st=!0);for(let zt=0;zt<rt.length;zt++){let Ut=rt[zt],Qt=null;if(f!==null)Qt=f.getViewport(Ut);else{let gt=u.getViewSubImage(d,Ut);Qt=gt.viewport,zt===0&&(t.setRenderTargetTextures(y,gt.colorTexture,d.ignoreDepthValues?void 0:gt.depthStencilTexture),t.setRenderTarget(y))}let at=_[zt];at===void 0&&(at=new $e,at.layers.enable(zt),at.viewport=new Re,_[zt]=at),at.matrix.fromArray(Ut.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Ut.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),zt===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),st===!0&&w.cameras.push(at)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){let zt=u.getDepthInformation(rt[0]);zt&&zt.isValid&&zt.texture&&m.init(t,zt,i.renderState)}}for(let rt=0;rt<M.length;rt++){let st=v[rt],dt=M[rt];st!==null&&dt!==void 0&&dt.update(st,J,c||o)}P&&P(F,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let et=new hf;et.setAnimationLoop(ft),this.setAnimationLoop=function(F){P=F},this.dispose=function(){}}},Oi=new Ke,Vx=new ne;function Gx(r,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,cf(r)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,y,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),u(x,p)):p.isMeshPhongMaterial?(s(x,p),h(x,p)):p.isMeshStandardMaterial?(s(x,p),d(x,p),p.isMeshPhysicalMaterial&&f(x,p,v)):p.isMeshMatcapMaterial?(s(x,p),g(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),m(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,y,M):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===rn&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===rn&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let y=t.get(p),M=y.envMap,v=y.envMapRotation;M&&(x.envMap.value=M,Oi.copy(v),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),x.envMapRotation.value.setFromMatrix4(Vx.makeRotationFromEuler(Oi)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,M){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=M*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function d(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function f(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===rn&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function m(x,p){let y=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Wx(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,M){let v=M.program;n.uniformBlockBinding(y,v)}function c(y,M){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",x));let S=M.program;n.updateUBOMapping(y,S);let E=t.render.frame;s[y.id]!==E&&(d(y),s[y.id]=E)}function h(y){let M=u();y.__bindingPointIndex=M;let v=r.createBuffer(),S=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,S,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=i[y.id],v=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,b=v.length;E<b;E++){let A=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,w=A.length;_<w;_++){let R=A[_];if(f(R,E,_,S)===!0){let L=R.__offset,k=Array.isArray(R.value)?R.value:[R.value],H=0;for(let B=0;B<k.length;B++){let N=k[B],V=m(N);typeof N=="number"||typeof N=="boolean"?(R.__data[0]=N,r.bufferSubData(r.UNIFORM_BUFFER,L+H,R.__data)):N.isMatrix3?(R.__data[0]=N.elements[0],R.__data[1]=N.elements[1],R.__data[2]=N.elements[2],R.__data[3]=0,R.__data[4]=N.elements[3],R.__data[5]=N.elements[4],R.__data[6]=N.elements[5],R.__data[7]=0,R.__data[8]=N.elements[6],R.__data[9]=N.elements[7],R.__data[10]=N.elements[8],R.__data[11]=0):(N.toArray(R.__data,H),H+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,L,R.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,v,S){let E=y.value,b=M+"_"+v;if(S[b]===void 0)return typeof E=="number"||typeof E=="boolean"?S[b]=E:S[b]=E.clone(),!0;{let A=S[b];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return S[b]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){let M=y.uniforms,v=0,S=16;for(let b=0,A=M.length;b<A;b++){let _=Array.isArray(M[b])?M[b]:[M[b]];for(let w=0,R=_.length;w<R;w++){let L=_[w],k=Array.isArray(L.value)?L.value:[L.value];for(let H=0,B=k.length;H<B;H++){let N=k[H],V=m(N),O=v%S,q=O%V.boundary,Q=O+q;v+=q,Q!==0&&S-Q<V.storage&&(v+=S-Q),L.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=V.storage}}}let E=v%S;return E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function m(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),M}function x(y){let M=y.target;M.removeEventListener("dispose",x);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Do=class{constructor(t={}){let{canvas:e=Zd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,y=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ye,this.toneMapping=Ei,this.toneMappingExposure=1;let v=this,S=!1,E=0,b=0,A=null,_=-1,w=null,R=new Re,L=new Re,k=null,H=new bt(0),B=0,N=e.width,V=e.height,O=1,q=null,Q=null,P=new Re(0,0,N,V),ft=new Re(0,0,N,V),et=!1,F=new Tr,J=!1,rt=!1,st=new ne,dt=new ne,zt=new I,Ut=new Re,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function gt(){return A===null?O:1}let U=n;function Vt(C,W){return e.getContext(C,W)}try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),U===null){let W="webgl2";if(U=Vt(W,C),U===null)throw Vt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let pt,kt,Mt,Jt,Pt,z,T,Y,it,ct,ot,Ot,St,Lt,oe,xt,Ft,Kt,jt,Ht,le,se,Te,G;function At(){pt=new og(U),pt.init(),se=new Bx(U,pt),kt=new tg(U,pt,t,se),Mt=new Ux(U,pt),kt.reverseDepthBuffer&&d&&Mt.buffers.depth.setReversed(!0),Jt=new cg(U),Pt=new wx,z=new Nx(U,pt,Mt,Pt,kt,se,Jt),T=new ng(v),Y=new rg(v),it=new gp(U),Te=new jm(U,it),ct=new ag(U,it,Jt,Te),ot=new ug(U,ct,it,Jt),jt=new hg(U,kt,z),xt=new eg(Pt),Ot=new Mx(v,T,Y,pt,kt,Te,xt),St=new Gx(v,Pt),Lt=new Ex,oe=new Px(pt),Kt=new Km(v,T,Y,Mt,ot,f,l),Ft=new Lx(v,ot,kt),G=new Wx(U,Jt,kt,Mt),Ht=new Qm(U,pt,Jt),le=new lg(U,pt,Jt),Jt.programs=Ot.programs,v.capabilities=kt,v.extensions=pt,v.properties=Pt,v.renderLists=Lt,v.shadowMap=Ft,v.state=Mt,v.info=Jt}At();let nt=new bc(v,U);this.xr=nt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=pt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=pt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(N,V,!1))},this.getSize=function(C){return C.set(N,V)},this.setSize=function(C,W,K=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=C,V=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),K===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(N*O,V*O).floor()},this.setDrawingBufferSize=function(C,W,K){N=C,V=W,O=K,e.width=Math.floor(C*K),e.height=Math.floor(W*K),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(R)},this.getViewport=function(C){return C.copy(P)},this.setViewport=function(C,W,K,j){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,W,K,j),Mt.viewport(R.copy(P).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(ft)},this.setScissor=function(C,W,K,j){C.isVector4?ft.set(C.x,C.y,C.z,C.w):ft.set(C,W,K,j),Mt.scissor(L.copy(ft).multiplyScalar(O).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(C){Mt.setScissorTest(et=C)},this.setOpaqueSort=function(C){q=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(C=!0,W=!0,K=!0){let j=0;if(C){let X=!1;if(A!==null){let _t=A.texture.format;X=_t===rh||_t===sh||_t===ih}if(X){let _t=A.texture.type,It=_t===li||_t===$i||_t===Er||_t===Ls||_t===th||_t===eh,ut=Kt.getClearColor(),wt=Kt.getClearAlpha(),Zt=ut.r,vt=ut.g,Nt=ut.b;It?(g[0]=Zt,g[1]=vt,g[2]=Nt,g[3]=wt,U.clearBufferuiv(U.COLOR,0,g)):(m[0]=Zt,m[1]=vt,m[2]=Nt,m[3]=wt,U.clearBufferiv(U.COLOR,0,m))}else j|=U.COLOR_BUFFER_BIT}W&&(j|=U.DEPTH_BUFFER_BIT),K&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),Lt.dispose(),oe.dispose(),Pt.dispose(),T.dispose(),Y.dispose(),ot.dispose(),Te.dispose(),G.dispose(),Ot.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Kn),nt.removeEventListener("sessionend",er),D.stop()};function lt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let C=Jt.autoReset,W=Ft.enabled,K=Ft.autoUpdate,j=Ft.needsUpdate,X=Ft.type;At(),Jt.autoReset=C,Ft.enabled=W,Ft.autoUpdate=K,Ft.needsUpdate=j,Ft.type=X}function Rt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function ee(C){let W=C.target;W.removeEventListener("dispose",ee),ge(W)}function ge(C){Fe(C),Pt.remove(C)}function Fe(C){let W=Pt.get(C).programs;W!==void 0&&(W.forEach(function(K){Ot.releaseProgram(K)}),C.isShaderMaterial&&Ot.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,K,j,X,_t){W===null&&(W=Qt);let It=X.isMesh&&X.matrixWorld.determinant()<0,ut=is(C,W,K,j,X);Mt.setMaterial(j,It);let wt=K.index,Zt=1;if(j.wireframe===!0){if(wt=ct.getWireframeAttribute(K),wt===void 0)return;Zt=2}let vt=K.drawRange,Nt=K.attributes.position,ce=vt.start*Zt,he=(vt.start+vt.count)*Zt;_t!==null&&(ce=Math.max(ce,_t.start*Zt),he=Math.min(he,(_t.start+_t.count)*Zt)),wt!==null?(ce=Math.max(ce,0),he=Math.min(he,wt.count)):Nt!=null&&(ce=Math.max(ce,0),he=Math.min(he,Nt.count));let ve=he-ce;if(ve<0||ve===1/0)return;Te.setup(X,j,ut,K,wt);let Xe,Me=Ht;if(wt!==null&&(Xe=it.get(wt),Me=le,Me.setIndex(Xe)),X.isMesh)j.wireframe===!0?(Mt.setLineWidth(j.wireframeLinewidth*gt()),Me.setMode(U.LINES)):Me.setMode(U.TRIANGLES);else if(X.isLine){let qt=j.linewidth;qt===void 0&&(qt=1),Mt.setLineWidth(qt*gt()),X.isLineSegments?Me.setMode(U.LINES):X.isLineLoop?Me.setMode(U.LINE_LOOP):Me.setMode(U.LINE_STRIP)}else X.isPoints?Me.setMode(U.POINTS):X.isSprite&&Me.setMode(U.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Me.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))Me.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qt=X._multiDrawStarts,jn=X._multiDrawCounts,we=X._multiDrawCount,Cn=wt?it.get(wt).bytesPerElement:1,ss=Pt.get(j).currentProgram.getUniforms();for(let gn=0;gn<we;gn++)ss.setValue(U,"_gl_DrawID",gn),Me.render(qt[gn]/Cn,jn[gn])}else if(X.isInstancedMesh)Me.renderInstances(ce,ve,X.count);else if(K.isInstancedBufferGeometry){let qt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,jn=Math.min(K.instanceCount,qt);Me.renderInstances(ce,ve,jn)}else Me.render(ce,ve)};function me(C,W,K){C.transparent===!0&&C.side===Ee&&C.forceSinglePass===!1?(C.side=rn,C.needsUpdate=!0,$t(C,W,K),C.side=Ti,C.needsUpdate=!0,$t(C,W,K),C.side=Ee):$t(C,W,K)}this.compile=function(C,W,K=null){K===null&&(K=C),p=oe.get(K),p.init(W),M.push(p),K.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==K&&C.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();let j=new Set;return C.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let _t=X.material;if(_t)if(Array.isArray(_t))for(let It=0;It<_t.length;It++){let ut=_t[It];me(ut,K,X),j.add(ut)}else me(_t,K,X),j.add(_t)}),M.pop(),p=null,j},this.compileAsync=function(C,W,K=null){let j=this.compile(C,W,K);return new Promise(X=>{function _t(){if(j.forEach(function(It){Pt.get(It).currentProgram.isReady()&&j.delete(It)}),j.size===0){X(C);return}setTimeout(_t,10)}pt.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let pn=null;function en(C){pn&&pn(C)}function Kn(){D.stop()}function er(){D.start()}let D=new hf;D.setAnimationLoop(en),typeof self<"u"&&D.setContext(self),this.setAnimationLoop=function(C){pn=C,nt.setAnimationLoop(C),C===null?D.stop():D.start()},nt.addEventListener("sessionstart",Kn),nt.addEventListener("sessionend",er),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(W),W=nt.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,A),p=oe.get(C,M.length),p.init(W),M.push(p),dt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(dt),rt=this.localClippingEnabled,J=xt.init(this.clippingPlanes,rt),x=Lt.get(C,y.length),x.init(),y.push(x),nt.enabled===!0&&nt.isPresenting===!0){let _t=v.xr.getDepthSensingMesh();_t!==null&&$(_t,W,-1/0,v.sortObjects)}$(C,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(q,Q),at=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,at&&Kt.addToRenderList(x,C),this.info.render.frame++,J===!0&&xt.beginShadows();let K=p.state.shadowsArray;Ft.render(K,C,W),J===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let j=x.opaque,X=x.transmissive;if(p.setupLights(),W.isArrayCamera){let _t=W.cameras;if(X.length>0)for(let It=0,ut=_t.length;It<ut;It++){let wt=_t[It];te(j,X,C,wt)}at&&Kt.render(C);for(let It=0,ut=_t.length;It<ut;It++){let wt=_t[It];Gt(x,C,wt,wt.viewport)}}else X.length>0&&te(j,X,C,W),at&&Kt.render(C),Gt(x,C,W);A!==null&&(z.updateMultisampleRenderTarget(A),z.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,W),Te.resetDefaultState(),_=-1,w=null,M.pop(),M.length>0?(p=M[M.length-1],J===!0&&xt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function $(C,W,K,j){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)K=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){j&&Ut.setFromMatrixPosition(C.matrixWorld).applyMatrix4(dt);let It=ot.update(C),ut=C.material;ut.visible&&x.push(C,It,ut,K,Ut.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){let It=ot.update(C),ut=C.material;if(j&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ut.copy(C.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Ut.copy(It.boundingSphere.center)),Ut.applyMatrix4(C.matrixWorld).applyMatrix4(dt)),Array.isArray(ut)){let wt=It.groups;for(let Zt=0,vt=wt.length;Zt<vt;Zt++){let Nt=wt[Zt],ce=ut[Nt.materialIndex];ce&&ce.visible&&x.push(C,It,ce,K,Ut.z,Nt)}}else ut.visible&&x.push(C,It,ut,K,Ut.z,null)}}let _t=C.children;for(let It=0,ut=_t.length;It<ut;It++)$(_t[It],W,K,j)}function Gt(C,W,K,j){let X=C.opaque,_t=C.transmissive,It=C.transparent;p.setupLightsView(K),J===!0&&xt.setGlobalState(v.clippingPlanes,K),j&&Mt.viewport(R.copy(j)),X.length>0&&mt(X,W,K),_t.length>0&&mt(_t,W,K),It.length>0&&mt(It,W,K),Mt.buffers.depth.setTest(!0),Mt.buffers.depth.setMask(!0),Mt.buffers.color.setMask(!0),Mt.setPolygonOffset(!1)}function te(C,W,K,j){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[j.id]===void 0&&(p.state.transmissionRenderTarget[j.id]=new Qe(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Mn:li,minFilter:qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ue.workingColorSpace}));let _t=p.state.transmissionRenderTarget[j.id],It=j.viewport||R;_t.setSize(It.z,It.w);let ut=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(H),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),at&&Kt.render(K);let wt=v.toneMapping;v.toneMapping=Ei;let Zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),p.setupLightsView(j),J===!0&&xt.setGlobalState(v.clippingPlanes,j),mt(C,K,j),z.updateMultisampleRenderTarget(_t),z.updateRenderTargetMipmap(_t),pt.has("WEBGL_multisampled_render_to_texture")===!1){let vt=!1;for(let Nt=0,ce=W.length;Nt<ce;Nt++){let he=W[Nt],ve=he.object,Xe=he.geometry,Me=he.material,qt=he.group;if(Me.side===Ee&&ve.layers.test(j.layers)){let jn=Me.side;Me.side=rn,Me.needsUpdate=!0,Wt(ve,K,j,Xe,Me,qt),Me.side=jn,Me.needsUpdate=!0,vt=!0}}vt===!0&&(z.updateMultisampleRenderTarget(_t),z.updateRenderTargetMipmap(_t))}v.setRenderTarget(ut),v.setClearColor(H,B),Zt!==void 0&&(j.viewport=Zt),v.toneMapping=wt}function mt(C,W,K){let j=W.isScene===!0?W.overrideMaterial:null;for(let X=0,_t=C.length;X<_t;X++){let It=C[X],ut=It.object,wt=It.geometry,Zt=j===null?It.material:j,vt=It.group;ut.layers.test(K.layers)&&Wt(ut,W,K,wt,Zt,vt)}}function Wt(C,W,K,j,X,_t){C.onBeforeRender(v,W,K,j,X,_t),C.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(v,W,K,j,C,_t),X.transparent===!0&&X.side===Ee&&X.forceSinglePass===!1?(X.side=rn,X.needsUpdate=!0,v.renderBufferDirect(K,W,j,X,C,_t),X.side=Ti,X.needsUpdate=!0,v.renderBufferDirect(K,W,j,X,C,_t),X.side=Ee):v.renderBufferDirect(K,W,j,X,C,_t),C.onAfterRender(v,W,K,j,X,_t)}function $t(C,W,K){W.isScene!==!0&&(W=Qt);let j=Pt.get(C),X=p.state.lights,_t=p.state.shadowsArray,It=X.state.version,ut=Ot.getParameters(C,X.state,_t,W,K),wt=Ot.getProgramCacheKey(ut),Zt=j.programs;j.environment=C.isMeshStandardMaterial?W.environment:null,j.fog=W.fog,j.envMap=(C.isMeshStandardMaterial?Y:T).get(C.envMap||j.environment),j.envMapRotation=j.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Zt===void 0&&(C.addEventListener("dispose",ee),Zt=new Map,j.programs=Zt);let vt=Zt.get(wt);if(vt!==void 0){if(j.currentProgram===vt&&j.lightsStateVersion===It)return mn(C,ut),vt}else ut.uniforms=Ot.getUniforms(C),C.onBeforeCompile(ut,v),vt=Ot.acquireProgram(ut,wt),Zt.set(wt,vt),j.uniforms=ut.uniforms;let Nt=j.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Nt.clippingPlanes=xt.uniform),mn(C,ut),j.needsLights=nr(C),j.lightsStateVersion=It,j.needsLights&&(Nt.ambientLightColor.value=X.state.ambient,Nt.lightProbe.value=X.state.probe,Nt.directionalLights.value=X.state.directional,Nt.directionalLightShadows.value=X.state.directionalShadow,Nt.spotLights.value=X.state.spot,Nt.spotLightShadows.value=X.state.spotShadow,Nt.rectAreaLights.value=X.state.rectArea,Nt.ltc_1.value=X.state.rectAreaLTC1,Nt.ltc_2.value=X.state.rectAreaLTC2,Nt.pointLights.value=X.state.point,Nt.pointLightShadows.value=X.state.pointShadow,Nt.hemisphereLights.value=X.state.hemi,Nt.directionalShadowMap.value=X.state.directionalShadowMap,Nt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Nt.spotShadowMap.value=X.state.spotShadowMap,Nt.spotLightMatrix.value=X.state.spotLightMatrix,Nt.spotLightMap.value=X.state.spotLightMap,Nt.pointShadowMap.value=X.state.pointShadowMap,Nt.pointShadowMatrix.value=X.state.pointShadowMatrix),j.currentProgram=vt,j.uniformsList=null,vt}function xe(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Cs.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function mn(C,W){let K=Pt.get(C);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function is(C,W,K,j,X){W.isScene!==!0&&(W=Qt),z.resetTextureUnits();let _t=W.fog,It=j.isMeshStandardMaterial?W.environment:null,ut=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$s,wt=(j.isMeshStandardMaterial?Y:T).get(j.envMap||It),Zt=j.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,vt=!!K.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!K.morphAttributes.position,ce=!!K.morphAttributes.normal,he=!!K.morphAttributes.color,ve=Ei;j.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ve=v.toneMapping);let Xe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Me=Xe!==void 0?Xe.length:0,qt=Pt.get(j),jn=p.state.lights;if(J===!0&&(rt===!0||C!==w)){let En=C===w&&j.id===_;xt.setState(j,C,En)}let we=!1;j.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==jn.state.version||qt.outputColorSpace!==ut||X.isBatchedMesh&&qt.batching===!1||!X.isBatchedMesh&&qt.batching===!0||X.isBatchedMesh&&qt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qt.instancing===!1||!X.isInstancedMesh&&qt.instancing===!0||X.isSkinnedMesh&&qt.skinning===!1||!X.isSkinnedMesh&&qt.skinning===!0||X.isInstancedMesh&&qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qt.instancingMorph===!1&&X.morphTexture!==null||qt.envMap!==wt||j.fog===!0&&qt.fog!==_t||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==xt.numPlanes||qt.numIntersection!==xt.numIntersection)||qt.vertexAlphas!==Zt||qt.vertexTangents!==vt||qt.morphTargets!==Nt||qt.morphNormals!==ce||qt.morphColors!==he||qt.toneMapping!==ve||qt.morphTargetsCount!==Me)&&(we=!0):(we=!0,qt.__version=j.version);let Cn=qt.currentProgram;we===!0&&(Cn=$t(j,W,X));let ss=!1,gn=!1,ir=!1,De=Cn.getUniforms(),Bn=qt.uniforms;if(Mt.useProgram(Cn.program)&&(ss=!0,gn=!0,ir=!0),j.id!==_&&(_=j.id,gn=!0),ss||w!==C){Mt.buffers.depth.getReversed()?(st.copy(C.projectionMatrix),Kd(st),jd(st),De.setValue(U,"projectionMatrix",st)):De.setValue(U,"projectionMatrix",C.projectionMatrix),De.setValue(U,"viewMatrix",C.matrixWorldInverse);let pi=De.map.cameraPosition;pi!==void 0&&pi.setValue(U,zt.setFromMatrixPosition(C.matrixWorld)),kt.logarithmicDepthBuffer&&De.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&De.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),w!==C&&(w=C,gn=!0,ir=!0)}if(X.isSkinnedMesh){De.setOptional(U,X,"bindMatrix"),De.setOptional(U,X,"bindMatrixInverse");let En=X.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),De.setValue(U,"boneTexture",En.boneTexture,z))}X.isBatchedMesh&&(De.setOptional(U,X,"batchingTexture"),De.setValue(U,"batchingTexture",X._matricesTexture,z),De.setOptional(U,X,"batchingIdTexture"),De.setValue(U,"batchingIdTexture",X._indirectTexture,z),De.setOptional(U,X,"batchingColorTexture"),X._colorsTexture!==null&&De.setValue(U,"batchingColorTexture",X._colorsTexture,z));let sr=K.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&jt.update(X,K,Cn),(gn||qt.receiveShadow!==X.receiveShadow)&&(qt.receiveShadow=X.receiveShadow,De.setValue(U,"receiveShadow",X.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Bn.envMap.value=wt,Bn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),gn&&(De.setValue(U,"toneMappingExposure",v.toneMappingExposure),qt.needsLights&&un(Bn,ir),_t&&j.fog===!0&&St.refreshFogUniforms(Bn,_t),St.refreshMaterialUniforms(Bn,j,O,V,p.state.transmissionRenderTarget[C.id]),Cs.upload(U,xe(qt),Bn,z)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Cs.upload(U,xe(qt),Bn,z),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&De.setValue(U,"center",X.center),De.setValue(U,"modelViewMatrix",X.modelViewMatrix),De.setValue(U,"normalMatrix",X.normalMatrix),De.setValue(U,"modelMatrix",X.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){let En=j.uniformsGroups;for(let pi=0,mi=En.length;pi<mi;pi++){let Rh=En[pi];G.update(Rh,Cn),G.bind(Rh,Cn)}}return Cn}function un(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function nr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,W,K){Pt.get(C.texture).__webglTexture=W,Pt.get(C.depthTexture).__webglTexture=K;let j=Pt.get(C);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=K===void 0,j.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){let K=Pt.get(C);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,K=0){A=C,E=W,b=K;let j=!0,X=null,_t=!1,It=!1;if(C){let wt=Pt.get(C);if(wt.__useDefaultFramebuffer!==void 0)Mt.bindFramebuffer(U.FRAMEBUFFER,null),j=!1;else if(wt.__webglFramebuffer===void 0)z.setupRenderTarget(C);else if(wt.__hasExternalTextures)z.rebindTextures(C,Pt.get(C.texture).__webglTexture,Pt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Nt=C.depthTexture;if(wt.__boundDepthTexture!==Nt){if(Nt!==null&&Pt.has(Nt)&&(C.width!==Nt.image.width||C.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(C)}}let Zt=C.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(It=!0);let vt=Pt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(vt[W])?X=vt[W][K]:X=vt[W],_t=!0):C.samples>0&&z.useMultisampledRTT(C)===!1?X=Pt.get(C).__webglMultisampledFramebuffer:Array.isArray(vt)?X=vt[K]:X=vt,R.copy(C.viewport),L.copy(C.scissor),k=C.scissorTest}else R.copy(P).multiplyScalar(O).floor(),L.copy(ft).multiplyScalar(O).floor(),k=et;if(Mt.bindFramebuffer(U.FRAMEBUFFER,X)&&j&&Mt.drawBuffers(C,X),Mt.viewport(R),Mt.scissor(L),Mt.setScissorTest(k),_t){let wt=Pt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,wt.__webglTexture,K)}else if(It){let wt=Pt.get(C.texture),Zt=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,wt.__webglTexture,K||0,Zt)}_=-1},this.readRenderTargetPixels=function(C,W,K,j,X,_t,It){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(ut=ut[It]),ut){Mt.bindFramebuffer(U.FRAMEBUFFER,ut);try{let wt=C.texture,Zt=wt.format,vt=wt.type;if(!kt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-j&&K>=0&&K<=C.height-X&&U.readPixels(W,K,j,X,se.convert(Zt),se.convert(vt),_t)}finally{let wt=A!==null?Pt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(C,W,K,j,X,_t,It){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Pt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&It!==void 0&&(ut=ut[It]),ut){let wt=C.texture,Zt=wt.format,vt=wt.type;if(!kt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-j&&K>=0&&K<=C.height-X){Mt.bindFramebuffer(U.FRAMEBUFFER,ut);let Nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.bufferData(U.PIXEL_PACK_BUFFER,_t.byteLength,U.STREAM_READ),U.readPixels(W,K,j,X,se.convert(Zt),se.convert(vt),0);let ce=A!==null?Pt.get(A).__webglFramebuffer:null;Mt.bindFramebuffer(U.FRAMEBUFFER,ce);let he=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Jd(U,he,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,_t),U.deleteBuffer(Nt),U.deleteSync(he),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,K=0){C.isTexture!==!0&&(gr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);let j=Math.pow(2,-K),X=Math.floor(C.image.width*j),_t=Math.floor(C.image.height*j),It=W!==null?W.x:0,ut=W!==null?W.y:0;z.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,K,0,0,It,ut,X,_t),Mt.unbindTexture()},this.copyTextureToTexture=function(C,W,K=null,j=null,X=0){C.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,C=arguments[1],W=arguments[2],X=arguments[3]||0,K=null);let _t,It,ut,wt,Zt,vt,Nt,ce,he,ve=C.isCompressedTexture?C.mipmaps[X]:C.image;K!==null?(_t=K.max.x-K.min.x,It=K.max.y-K.min.y,ut=K.isBox3?K.max.z-K.min.z:1,wt=K.min.x,Zt=K.min.y,vt=K.isBox3?K.min.z:0):(_t=ve.width,It=ve.height,ut=ve.depth||1,wt=0,Zt=0,vt=0),j!==null?(Nt=j.x,ce=j.y,he=j.z):(Nt=0,ce=0,he=0);let Xe=se.convert(W.format),Me=se.convert(W.type),qt;W.isData3DTexture?(z.setTexture3D(W,0),qt=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(z.setTexture2DArray(W,0),qt=U.TEXTURE_2D_ARRAY):(z.setTexture2D(W,0),qt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);let jn=U.getParameter(U.UNPACK_ROW_LENGTH),we=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=U.getParameter(U.UNPACK_SKIP_PIXELS),ss=U.getParameter(U.UNPACK_SKIP_ROWS),gn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,wt),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,vt);let ir=C.isDataArrayTexture||C.isData3DTexture,De=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Bn=Pt.get(C),sr=Pt.get(W),En=Pt.get(Bn.__renderTarget),pi=Pt.get(sr.__renderTarget);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,pi.__webglFramebuffer);for(let mi=0;mi<ut;mi++)ir&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(C).__webglTexture,X,vt+mi),C.isDepthTexture?(De&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(W).__webglTexture,X,he+mi),U.blitFramebuffer(wt,Zt,_t,It,Nt,ce,_t,It,U.DEPTH_BUFFER_BIT,U.NEAREST)):De?U.copyTexSubImage3D(qt,X,Nt,ce,he+mi,wt,Zt,_t,It):U.copyTexSubImage2D(qt,X,Nt,ce,he+mi,wt,Zt,_t,It);Mt.bindFramebuffer(U.READ_FRAMEBUFFER,null),Mt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else De?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(qt,X,Nt,ce,he,_t,It,ut,Xe,Me,ve.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(qt,X,Nt,ce,he,_t,It,ut,Xe,ve.data):U.texSubImage3D(qt,X,Nt,ce,he,_t,It,ut,Xe,Me,ve):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,X,Nt,ce,_t,It,Xe,Me,ve.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,X,Nt,ce,ve.width,ve.height,Xe,ve.data):U.texSubImage2D(U.TEXTURE_2D,X,Nt,ce,_t,It,Xe,Me,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,jn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,we),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ss),U.pixelStorei(U.UNPACK_SKIP_IMAGES,gn),X===0&&W.generateMipmaps&&U.generateMipmap(qt),Mt.unbindTexture()},this.copyTextureToTexture3D=function(C,W,K=null,j=null,X=0){return C.isTexture!==!0&&(gr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,j=arguments[1]||null,C=arguments[2],W=arguments[3],X=arguments[4]||0),gr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,K,j,X)},this.initRenderTarget=function(C){Pt.get(C).__webglFramebuffer===void 0&&z.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?z.setTextureCube(C,0):C.isData3DTexture?z.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?z.setTexture2DArray(C,0):z.setTexture2D(C,0),Mt.unbindTexture()},this.resetState=function(){E=0,b=0,A=null,Mt.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ue._getDrawingBufferColorSpace(t),e.unpackColorSpace=ue._getUnpackColorSpace()}};var Uo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yi=class extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ko=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ac,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new I,Ar=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ln(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ln(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ln(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ln(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ln(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new fe(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dn=class extends Wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,cr=new I,_s=new I,Ms=new I,ws=new tt,hr=new tt,mf=new ne,ao=new I,ur=new I,lo=new I,Ru=new tt,ml=new tt,Cu=new tt,_n=class extends Be{constructor(t=new dn){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new ie;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ko(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Ar(n,3,0,!1)),ys.setAttribute("uv",new Ar(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Ms.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;co(ao.set(-.5,-.5,0),Ms,o,_s,i,s),co(ur.set(.5,-.5,0),Ms,o,_s,i,s),co(lo.set(.5,.5,0),Ms,o,_s,i,s),Ru.set(0,0),ml.set(1,0),Cu.set(1,1);let a=t.ray.intersectTriangle(ao,ur,lo,!1,cr);if(a===null&&(co(ur.set(-.5,.5,0),Ms,o,_s,i,s),ml.set(0,1),a=t.ray.intersectTriangle(ao,lo,ur,!1,cr),a===null))return;let l=t.ray.origin.distanceTo(cr);l<t.near||l>t.far||e.push({distance:l,point:cr.clone(),uv:bi.getInterpolation(cr,ao,ur,lo,Ru,ml,Cu,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function co(r,t,e,n,i,s){ws.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(hr.x=s*ws.x-i*ws.y,hr.y=i*ws.x+s*ws.y):hr.copy(ws),r.copy(t),r.x+=hr.x,r.y+=hr.y,r.applyMatrix4(mf)}var Ec=class extends fn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=yn,h=yn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rr=class extends fe{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bs=new ne,Pu=new ne,ho=[],Iu=new ci,Xx=new ne,fr=new Z,dr=new hi,Pe=class extends Z{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Xx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ci),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),Iu.copy(t.boundingBox).applyMatrix4(bs),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new hi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bs),dr.copy(t.boundingSphere).applyMatrix4(bs),this.boundingSphere.union(dr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(fr.geometry=this.geometry,fr.material=this.material,fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dr.copy(this.boundingSphere),dr.applyMatrix4(n),t.ray.intersectsSphere(dr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,bs),Pu.multiplyMatrices(n,bs),fr.matrixWorld=Pu,fr.raycast(t,ho);for(let o=0,a=ho.length;o<a;o++){let l=ho[o];l.instanceId=s,l.object=this,e.push(l)}ho.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ec(new Float32Array(i*this.count),i,this.count,nh,On));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Cr=class extends Wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},No=new I,Bo=new I,zu=new ne,pr=new Sr,uo=new hi,gl=new I,Lu=new I,Sc=class extends Be{constructor(t=new ie,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)No.fromBufferAttribute(e,i-1),Bo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=No.distanceTo(Bo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=s,t.ray.intersectsSphere(uo)===!1)return;zu.copy(i).invert(),pr.copy(t.ray).applyMatrix4(zu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let m=f,x=g-1;m<x;m+=c){let p=h.getX(m),y=h.getX(m+1),M=fo(this,t,pr,l,p,y);M&&e.push(M)}if(this.isLineLoop){let m=h.getX(g-1),x=h.getX(f),p=fo(this,t,pr,l,m,x);p&&e.push(p)}}else{let f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let m=f,x=g-1;m<x;m+=c){let p=fo(this,t,pr,l,m,m+1);p&&e.push(p)}if(this.isLineLoop){let m=fo(this,t,pr,l,g-1,f);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function fo(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(No.fromBufferAttribute(o,i),Bo.fromBufferAttribute(o,s),e.distanceSqToSegment(No,Bo,gl,Lu)>n)return;gl.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(gl);if(!(l<t.near||l>t.far))return{distance:l,point:Lu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Du=new I,Uu=new I,Os=class extends Sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Du.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Du.distanceTo(Uu);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zi=class extends Wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ku=new ne,Tc=new Sr,po=new hi,mo=new I,ui=class extends Be{constructor(t=new ie,e=new Zi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(i),po.radius+=s,t.ray.intersectsSphere(po)===!1)return;ku.copy(i).invert(),Tc.copy(t.ray).applyMatrix4(ku);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,m=f;g<m;g++){let x=c.getX(g);mo.fromBufferAttribute(u,x),Nu(mo,x,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,m=f;g<m;g++)mo.fromBufferAttribute(u,g),Nu(mo,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Nu(r,t,e,n,i,s,o){let a=Tc.distanceSqToPoint(r);if(a<e){let l=new I;Tc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var ze=class extends fn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new tt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],s=[],o=[],a=new I,l=new ne;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(qe(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(qe(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Pr=class extends Tn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ac=class extends Pr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var go=new I,xl=new lh,vl=new lh,yl=new lh,Ir=class extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(go.subVectors(i[0],i[1]).add(i[0]),c=go);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(go.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=go),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),x<1e-4&&(x=m),xl.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,m,x),vl.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,m,x),yl.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,m,x)}else this.curveType==="catmullrom"&&(xl.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),vl.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),yl.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(xl.calc(l),vl.calc(l),yl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function qx(r,t){let e=1-r;return e*e*t}function $x(r,t){return 2*(1-r)*r*t}function Yx(r,t){return r*r*t}function Mr(r,t,e,n){return qx(r,t)+$x(r,e)+Yx(r,n)}function Zx(r,t){let e=1-r;return e*e*e*t}function Jx(r,t){let e=1-r;return 3*e*e*r*t}function Kx(r,t){return 3*(1-r)*r*r*t}function jx(r,t){return r*r*r*t}function wr(r,t,e,n,i){return Zx(r,t)+Jx(r,e)+Kx(r,n)+jx(r,i)}var Fo=class extends Tn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,i.x,s.x,o.x,a.x),wr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rc=class extends Tn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(wr(t,i.x,s.x,o.x,a.x),wr(t,i.y,s.y,o.y,a.y),wr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ho=class extends Tn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends Tn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Oo=class extends Tn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Mr(t,i.x,s.x,o.x),Mr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vs=class extends Tn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Mr(t,i.x,s.x,o.x),Mr(t,i.y,s.y,o.y),Mr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Vo=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Bu(a,l.x,c.x,h.x,u.x),Bu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}},Go=Object.freeze({__proto__:null,ArcCurve:Ac,CatmullRomCurve3:Ir,CubicBezierCurve:Fo,CubicBezierCurve3:Rc,EllipseCurve:Pr,LineCurve:Ho,LineCurve3:Cc,QuadraticBezierCurve:Oo,QuadraticBezierCurve3:Vs,SplineCurve:Vo}),Pc=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Go[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Go[i.type]().fromJSON(i))}return this}},Wo=class extends Pc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ho(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Oo(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Fo(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Vo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Pr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Xo=class r extends ie{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=qe(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,d=new tt,f=new I,g=new I,m=new I,x=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-x,f.z=p*0,m.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,f.x=p*1,f.y=-x,f.z=p*0,g.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),l.push(f.x,f.y,f.z),m.copy(g)}for(let y=0;y<=e;y++){let M=n+y*h*i,v=Math.sin(M),S=Math.cos(M);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*S,o.push(u.x,u.y,u.z),d.x=y/e,d.y=E/(t.length-1),a.push(d.x,d.y);let b=l[3*E+0]*v,A=l[3*E+1],_=l[3*E+0]*S;c.push(b,A,_)}}for(let y=0;y<e;y++)for(let M=0;M<t.length-1;M++){let v=M+y*t.length,S=v,E=v+t.length,b=v+t.length+1,A=v+1;s.push(S,E,A),s.push(b,A,E)}this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ri=class r extends ie{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bt=class r extends ie{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,m=[],x=n/2,p=0;y(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function y(){let v=new I,S=new I,E=0,b=(e-t)/n;for(let A=0;A<=s;A++){let _=[],w=A/s,R=w*(e-t)+t;for(let L=0;L<=i;L++){let k=L/i,H=k*l+a,B=Math.sin(H),N=Math.cos(H);S.x=R*B,S.y=-w*n+x,S.z=R*N,u.push(S.x,S.y,S.z),v.set(B,b,N).normalize(),d.push(v.x,v.y,v.z),f.push(k,1-w),_.push(g++)}m.push(_)}for(let A=0;A<i;A++)for(let _=0;_<s;_++){let w=m[_][A],R=m[_+1][A],L=m[_+1][A+1],k=m[_][A+1];(t>0||_!==0)&&(h.push(w,R,k),E+=3),(e>0||_!==s-1)&&(h.push(R,L,k),E+=3)}c.addGroup(p,E,0),p+=E}function M(v){let S=g,E=new tt,b=new I,A=0,_=v===!0?t:e,w=v===!0?1:-1;for(let L=1;L<=i;L++)u.push(0,x*w,0),d.push(0,w,0),f.push(.5,.5),g++;let R=g;for(let L=0;L<=i;L++){let H=L/i*l+a,B=Math.cos(H),N=Math.sin(H);b.x=_*N,b.y=x*w,b.z=_*B,u.push(b.x,b.y,b.z),d.push(0,w,0),E.x=B*.5+.5,E.y=N*.5*w+.5,f.push(E.x,E.y),g++}for(let L=0;L<i;L++){let k=S+L,H=R+L;v===!0?h.push(H,H+1,k):h.push(H+1,H,k),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class r extends Bt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class extends Wo{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Wo().fromJSON(i))}return this}},Qx={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=gf(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,d,f;if(n&&(s=sv(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return zr(s,o,e,a,l,f,0),o}};function gf(r,t,e,n,i){let s,o;if(i===mv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Fu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Fu(s,r[s],r[s+1],o);return o&&ea(o,o.next)&&(Dr(o),o=o.next),o}function Ji(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ea(e,e.next)||ke(e.prev,e,e.next)===0)){if(Dr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&cv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ev(r,n,i,s):tv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Dr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=nv(Ji(r),t,e),zr(r,t,e,n,i,s,2)):o===2&&iv(r,t,e,n,i,s):zr(Ji(r),t,e,n,i,s,1);break}}}function tv(r){let t=r.prev,e=r,n=r.next;if(ke(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,d=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Ss(i,a,s,l,o,c,g.x,g.y)&&ke(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ev(r,t,e,n){let i=r.prev,s=r,o=r.next;if(ke(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,d=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,m=a>l?a>c?a:c:l>c?l:c,x=h>u?h>d?h:d:u>d?u:d,p=Ic(f,g,t,e,n),y=Ic(m,x,t,e,n),M=r.prevZ,v=r.nextZ;for(;M&&M.z>=p&&v&&v.z<=y;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=x&&M!==i&&M!==o&&Ss(a,h,l,u,c,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Ss(a,h,l,u,c,d,v.x,v.y)&&ke(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=x&&M!==i&&M!==o&&Ss(a,h,l,u,c,d,M.x,M.y)&&ke(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=y;){if(v.x>=f&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Ss(a,h,l,u,c,d,v.x,v.y)&&ke(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function nv(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!ea(i,s)&&xf(i,n,n.next,s)&&Lr(i,s)&&Lr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Dr(n),Dr(n.next),n=r=s),n=n.next}while(n!==r);return Ji(n)}function iv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&fv(o,a)){let l=vf(o,a);o=Ji(o,o.next),l=Ji(l,l.next),zr(o,t,e,n,i,s,0),zr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function sv(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=gf(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(uv(c));for(i.sort(rv),s=0;s<i.length;s++)e=ov(i[s],e);return e}function rv(r,t){return r.x-t.x}function ov(r,t){let e=av(r,t);if(!e)return t;let n=vf(e,r);return Ji(n,n.next),Ji(e,e.next)}function av(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ss(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Lr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&lv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function lv(r,t){return ke(r.prev,r,t.prev)<0&&ke(t.next,r,r.next)<0}function cv(r,t,e,n){let i=r;do i.z===0&&(i.z=Ic(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,hv(i)}function hv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Ic(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function uv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ss(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function fv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!dv(r,t)&&(Lr(r,t)&&Lr(t,r)&&pv(r,t)&&(ke(r.prev,r,t.prev)||ke(r,t.prev,t))||ea(r,t)&&ke(r.prev,r,r.next)>0&&ke(t.prev,t,t.next)>0)}function ke(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ea(r,t){return r.x===t.x&&r.y===t.y}function xf(r,t,e,n){let i=vo(ke(r,t,e)),s=vo(ke(r,t,n)),o=vo(ke(e,n,r)),a=vo(ke(e,n,t));return!!(i!==s&&o!==a||i===0&&xo(r,e,t)||s===0&&xo(r,n,t)||o===0&&xo(e,r,n)||a===0&&xo(e,t,n))}function xo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function vo(r){return r>0?1:r<0?-1:0}function dv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Lr(r,t){return ke(r.prev,r,r.next)<0?ke(r,t,r.next)>=0&&ke(r,r.prev,t)>=0:ke(r,t,r.prev)<0||ke(r,r.next,t)<0}function pv(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function vf(r,t){let e=new zc(r.i,r.x,r.y),n=new zc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Fu(r,t,e,n){let i=new zc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Dr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function zc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function mv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Si=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Hu(t),Ou(n,t);let o=t.length;e.forEach(Hu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ou(n,e[l]);let a=Qx.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Hu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Ou(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var qn=class r extends ie{constructor(t=new Un([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:gv,M,v=!1,S,E,b,A;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,S=p.computeFrenetFrames(h,!1),E=new I,b=new I,A=new I),d||(x=0,f=0,g=0,m=0);let _=a.extractPoints(c),w=_.shape,R=_.holes;if(!Si.isClockWise(w)){w=w.reverse();for(let at=0,gt=R.length;at<gt;at++){let U=R[at];Si.isClockWise(U)&&(R[at]=U.reverse())}}let k=Si.triangulateShape(w,R),H=w;for(let at=0,gt=R.length;at<gt;at++){let U=R[at];w=w.concat(U)}function B(at,gt,U){return gt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(gt,U)}let N=w.length,V=k.length;function O(at,gt,U){let Vt,pt,kt,Mt=at.x-gt.x,Jt=at.y-gt.y,Pt=U.x-at.x,z=U.y-at.y,T=Mt*Mt+Jt*Jt,Y=Mt*z-Jt*Pt;if(Math.abs(Y)>Number.EPSILON){let it=Math.sqrt(T),ct=Math.sqrt(Pt*Pt+z*z),ot=gt.x-Jt/it,Ot=gt.y+Mt/it,St=U.x-z/ct,Lt=U.y+Pt/ct,oe=((St-ot)*z-(Lt-Ot)*Pt)/(Mt*z-Jt*Pt);Vt=ot+Mt*oe-at.x,pt=Ot+Jt*oe-at.y;let xt=Vt*Vt+pt*pt;if(xt<=2)return new tt(Vt,pt);kt=Math.sqrt(xt/2)}else{let it=!1;Mt>Number.EPSILON?Pt>Number.EPSILON&&(it=!0):Mt<-Number.EPSILON?Pt<-Number.EPSILON&&(it=!0):Math.sign(Jt)===Math.sign(z)&&(it=!0),it?(Vt=-Jt,pt=Mt,kt=Math.sqrt(T)):(Vt=Mt,pt=Jt,kt=Math.sqrt(T/2))}return new tt(Vt/kt,pt/kt)}let q=[];for(let at=0,gt=H.length,U=gt-1,Vt=at+1;at<gt;at++,U++,Vt++)U===gt&&(U=0),Vt===gt&&(Vt=0),q[at]=O(H[at],H[U],H[Vt]);let Q=[],P,ft=q.concat();for(let at=0,gt=R.length;at<gt;at++){let U=R[at];P=[];for(let Vt=0,pt=U.length,kt=pt-1,Mt=Vt+1;Vt<pt;Vt++,kt++,Mt++)kt===pt&&(kt=0),Mt===pt&&(Mt=0),P[Vt]=O(U[Vt],U[kt],U[Mt]);Q.push(P),ft=ft.concat(P)}for(let at=0;at<x;at++){let gt=at/x,U=f*Math.cos(gt*Math.PI/2),Vt=g*Math.sin(gt*Math.PI/2)+m;for(let pt=0,kt=H.length;pt<kt;pt++){let Mt=B(H[pt],q[pt],Vt);st(Mt.x,Mt.y,-U)}for(let pt=0,kt=R.length;pt<kt;pt++){let Mt=R[pt];P=Q[pt];for(let Jt=0,Pt=Mt.length;Jt<Pt;Jt++){let z=B(Mt[Jt],P[Jt],Vt);st(z.x,z.y,-U)}}}let et=g+m;for(let at=0;at<N;at++){let gt=d?B(w[at],ft[at],et):w[at];v?(b.copy(S.normals[0]).multiplyScalar(gt.x),E.copy(S.binormals[0]).multiplyScalar(gt.y),A.copy(M[0]).add(b).add(E),st(A.x,A.y,A.z)):st(gt.x,gt.y,0)}for(let at=1;at<=h;at++)for(let gt=0;gt<N;gt++){let U=d?B(w[gt],ft[gt],et):w[gt];v?(b.copy(S.normals[at]).multiplyScalar(U.x),E.copy(S.binormals[at]).multiplyScalar(U.y),A.copy(M[at]).add(b).add(E),st(A.x,A.y,A.z)):st(U.x,U.y,u/h*at)}for(let at=x-1;at>=0;at--){let gt=at/x,U=f*Math.cos(gt*Math.PI/2),Vt=g*Math.sin(gt*Math.PI/2)+m;for(let pt=0,kt=H.length;pt<kt;pt++){let Mt=B(H[pt],q[pt],Vt);st(Mt.x,Mt.y,u+U)}for(let pt=0,kt=R.length;pt<kt;pt++){let Mt=R[pt];P=Q[pt];for(let Jt=0,Pt=Mt.length;Jt<Pt;Jt++){let z=B(Mt[Jt],P[Jt],Vt);v?st(z.x,z.y+M[h-1].y,M[h-1].x+U):st(z.x,z.y,u+U)}}}F(),J();function F(){let at=i.length/3;if(d){let gt=0,U=N*gt;for(let Vt=0;Vt<V;Vt++){let pt=k[Vt];dt(pt[2]+U,pt[1]+U,pt[0]+U)}gt=h+x*2,U=N*gt;for(let Vt=0;Vt<V;Vt++){let pt=k[Vt];dt(pt[0]+U,pt[1]+U,pt[2]+U)}}else{for(let gt=0;gt<V;gt++){let U=k[gt];dt(U[2],U[1],U[0])}for(let gt=0;gt<V;gt++){let U=k[gt];dt(U[0]+N*h,U[1]+N*h,U[2]+N*h)}}n.addGroup(at,i.length/3-at,0)}function J(){let at=i.length/3,gt=0;rt(H,gt),gt+=H.length;for(let U=0,Vt=R.length;U<Vt;U++){let pt=R[U];rt(pt,gt),gt+=pt.length}n.addGroup(at,i.length/3-at,1)}function rt(at,gt){let U=at.length;for(;--U>=0;){let Vt=U,pt=U-1;pt<0&&(pt=at.length-1);for(let kt=0,Mt=h+x*2;kt<Mt;kt++){let Jt=N*kt,Pt=N*(kt+1),z=gt+Vt+Jt,T=gt+pt+Jt,Y=gt+pt+Pt,it=gt+Vt+Pt;zt(z,T,Y,it)}}}function st(at,gt,U){l.push(at),l.push(gt),l.push(U)}function dt(at,gt,U){Ut(at),Ut(gt),Ut(U);let Vt=i.length/3,pt=y.generateTopUV(n,i,Vt-3,Vt-2,Vt-1);Qt(pt[0]),Qt(pt[1]),Qt(pt[2])}function zt(at,gt,U,Vt){Ut(at),Ut(gt),Ut(Vt),Ut(gt),Ut(U),Ut(Vt);let pt=i.length/3,kt=y.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);Qt(kt[0]),Qt(kt[1]),Qt(kt[3]),Qt(kt[1]),Qt(kt[2]),Qt(kt[3])}function Ut(at){i.push(l[at*3+0]),i.push(l[at*3+1]),i.push(l[at*3+2])}function Qt(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return xv(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Go[i.type]().fromJSON(i)),new r(n,t.options)}},gv={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new tt(s,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],m=t[s*3],x=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(d,1-g),new tt(m,1-p)]:[new tt(a,1-l),new tt(h,1-u),new tt(f,1-g),new tt(x,1-p)]}};function xv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Gs=class r extends ie{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,d=(e-t)/i,f=new I,g=new tt;for(let m=0;m<=i;m++){for(let x=0;x<=n;x++){let p=s+x/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let m=0;m<i;m++){let x=m*(n+1);for(let p=0;p<n;p++){let y=p+x,M=y,v=y+n+1,S=y+n+2,E=y+1;a.push(M,v,E),a.push(v,S,E)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Se=class r extends ie{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,d=new I,f=[],g=[],m=[],x=[];for(let p=0;p<=n;p++){let y=[],M=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let E=S/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),x.push(E+v,1-M),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let M=h[p][y+1],v=h[p][y],S=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&f.push(M,v,E),(p!==n-1||l<Math.PI)&&f.push(v,S,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ki=class r extends ie{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let m=g/i*s,x=f/n*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(m),u.y=(t+e*Math.cos(x))*Math.sin(m),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let m=(i+1)*f+g-1,x=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,y=(i+1)*f+g;o.push(m,x,y),o.push(x,p,y)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var qo=class r extends ie{constructor(t=new Vs(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new tt,h=new I,u=[],d=[],f=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(d,3)),this.setAttribute("uv",new Xt(f,2));function m(){for(let M=0;M<e;M++)x(M);x(s===!1?e:0),y(),p()}function x(M){h=t.getPointAt(M/e,h);let v=o.normals[M],S=o.binormals[M];for(let E=0;E<=i;E++){let b=E/i*Math.PI*2,A=Math.sin(b),_=-Math.cos(b);l.x=_*v.x+A*S.x,l.y=_*v.y+A*S.y,l.z=_*v.z+A*S.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){let S=(i+1)*(M-1)+(v-1),E=(i+1)*M+(v-1),b=(i+1)*M+v,A=(i+1)*(M-1)+v;g.push(S,E,A),g.push(E,b,A)}}function y(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Go[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var $o=class extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},yt=class extends Wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ci=class extends yt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function yo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function vv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ws=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Lc=class extends Ws{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zh,endingEnd:zh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Lh:s=t,a=2*e-n;break;case Dh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Lh:o=t,l=2*n-e;break;case Dh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),m=g*g,x=m*g,p=-d*x+2*d*m-d*g,y=(1+d)*x+(-1.5-2*d)*m+(-.5+d)*g+1,M=(-1-f)*x+(1.5+f)*m+.5*g,v=f*x-f*m;for(let S=0;S!==a;++S)s[S]=p*o[h+S]+y*o[c+S]+M*o[l+S]+v*o[u+S];return s}},Dc=class extends Ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},Uc=class extends Ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},kn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=yo(e,this.TimeBufferType),this.values=yo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:yo(t.times,Array),values:yo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case So:e=this.InterpolantFactoryMethodDiscrete;break;case oc:e=this.InterpolantFactoryMethodLinear;break;case Va:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return So;case this.InterpolantFactoryMethodLinear:return oc;case this.InterpolantFactoryMethodSmooth:return Va}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&vv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Va,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let m=e[u+g];if(m!==e[d+g]||m!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};kn.prototype.TimeBufferType=Float32Array;kn.prototype.ValueBufferType=Float32Array;kn.prototype.DefaultInterpolation=oc;var ji=class extends kn{constructor(t,e,n){super(t,e,n)}};ji.prototype.ValueTypeName="bool";ji.prototype.ValueBufferType=Array;ji.prototype.DefaultInterpolation=So;ji.prototype.InterpolantFactoryMethodLinear=void 0;ji.prototype.InterpolantFactoryMethodSmooth=void 0;var kc=class extends kn{};kc.prototype.ValueTypeName="color";var Nc=class extends kn{};Nc.prototype.ValueTypeName="number";var Bc=class extends Ws{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ne.slerpFlat(s,0,o,c-a,o,c,l);return s}},Yo=class extends kn{InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}};Yo.prototype.ValueTypeName="quaternion";Yo.prototype.InterpolantFactoryMethodSmooth=void 0;var Qi=class extends kn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="string";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=So;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends kn{};Fc.prototype.ValueTypeName="vector";var Hc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},yv=new Hc,Oc=class{constructor(t){this.manager=t!==void 0?t:yv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xs=class extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Zo=class extends Xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},_l=new ne,Vu=new I,Gu=new I,Ur=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),_l.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_l),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_l)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vc=class extends Ur{constructor(){super(new $e(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Jo=class extends Xs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Wu=new ne,mr=new I,Ml=new I,Gc=class extends Ur{constructor(){super(new $e(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),mr.setFromMatrixPosition(t.matrixWorld),n.position.copy(mr),Ml.copy(n.position),Ml.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ml),n.updateMatrixWorld(),i.makeTranslation(-mr.x,-mr.y,-mr.z),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}},ts=class extends Xs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wc=class extends Ur{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ko=class extends Xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var qs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Xu(){return performance.now()}var ch="\\[\\]\\.:\\/",_v=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",Mv="[^"+ch.replace("\\.","")+"]",wv=/((?:WC+[\/:])*)/.source.replace("WC",hh),bv=/(WCOD+)?/.source.replace("WCOD",Mv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Sv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Tv=new RegExp("^"+wv+bv+Ev+Sv+"$"),Av=["material","materials","bones","map"],Xc=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(_v,"")}static parseTrackName(t){let e=Tv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Av.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Xc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);var fh=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function Oe(r,t){return r*1e5+t}var na=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let l=0;l<a.length;l++){let c=a[l];e.set(c,(e.get(c)||0)+(l===0||l===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,l,c,h,u,d,f]=o,g=0;for(let m=1;m<d.length;m++)if(e.get(d[m])>1||m===d.length-1){let x=d.slice(g,m+1);x.length>=2&&this._addEdge(x,a,l,c,h,u,i),g=m}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let l=t.length,c=new Float32Array(l*2),h=new Float32Array(l),u=0;for(let f=0;f<l;f++)c[f*2]=this.P[t[f]*2],c[f*2+1]=this.P[t[f]*2+1],f>0&&(u+=Math.hypot(c[f*2]-c[f*2-2],c[f*2+1]-c[f*2-1])),h[f]=u;if(u<.5)return;let d={id:this.edges.length,ids:t,pts:c,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[l-1]),signals:[]};this.edges.push(d)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let l=t.cum,c=t.pts,h=0,u=l.length-1;for(;u-h>1;){let v=h+u>>1;l[v]<=a?h=v:u=v}let d=l[u]-l[h]||1e-6,f=(a-l[h])/d,g=c[h*2],m=c[h*2+1],x=c[u*2],p=c[u*2+1],y=(x-g)/d,M=(p-m)/d;return e&&(y=-y,M=-M),s.x=g+(x-g)*f-M*i,s.z=m+(p-m)*f+y*i,s.dx=y,s.dz=M,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,l=Math.min(i[s*2+1],i[s*2+3])-n.w/2,c=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(l/t);u<=Math.floor(c/t);u++){let d=Oe(h,u),f=e.get(d);f||e.set(d,f=[]),f.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),l=Math.floor(e/s),c=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let d=l-o;d<=l+o;d++){let f=this.roadGrid.get(Oe(u,d));if(f)for(let g=0;g<f.length;g+=2){let m=this.edges[f[g]],x=f[g+1];if(i&&!i(m))continue;let p=m.pts,y=p[x*2],M=p[x*2+1],v=p[x*2+2],S=p[x*2+3],E=v-y,b=S-M,A=E*E+b*b||1e-6,_=((t-y)*E+(e-M)*b)/A;_=_<0?0:_>1?1:_;let w=y+E*_,R=M+b*_,L=(t-w)**2+(e-R)**2;if(L<h){h=L;let k=Math.sqrt(A);c={e:m,i:x,t:_,x:w,z:R,dist:Math.sqrt(L),s:m.cum[x]+_*k,dx:E/k,dz:b/k}}}}return c&&(c.lat=(t-c.x)*-c.dz+(e-c.z)*c.dx),c}_indexChunks(t){let n=this.chunks=new Map,i=(a,l)=>{let c=Math.floor(a/400),h=Math.floor(l/400),u=Oe(c,h),d=n.get(u);return d||n.set(u,d={key:u,cx:c,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[],signs:[]}),d};this.globalAreas=[],this.buildings=t.buildings.map((a,l)=>{let c=a[3],h=c.length/2,u=new Float32Array(c.length),d=0,f=0,g=1e9,m=-1e9,x=1e9,p=-1e9,y=0,M=0;for(let S=0;S<h;S++)y+=c[S*2],M+=c[S*2+1],u[S*2]=y*.1,u[S*2+1]=M*.1;for(let S=0;S<h;S++){let E=u[S*2],b=u[S*2+1];d+=E,f+=b,E<g&&(g=E),E>m&&(m=E),b<x&&(x=b),b>p&&(p=b)}let v={i:l,kind:a[0],h:a[1],minH:a[2],pts:u,cx:d/h,cz:f/h,x0:g,x1:m,z0:x,z1:p,name:a[4]||null,colour:a[5]||null,roofColour:a[6]||null,roofShape:a[7]||null};return i(v.cx,v.cz).buildings.push(v),v});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let l=Math.floor(a.x0/s);l<=Math.floor(a.x1/s);l++)for(let c=Math.floor(a.z0/s);c<=Math.floor(a.z1/s);c++){let h=Oe(l,c),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let l=Math.floor(a.pts.length/4)*2;i(a.pts[l],a.pts[l+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let l=a[1],c=new Float32Array(l.length),h=0,u=0,d=1e9,f=-1e9,g=1e9,m=-1e9;for(let p=0;p<l.length;p++)c[p]=l[p]*.1;for(let p=0;p<l.length/2;p++){let y=c[p*2],M=c[p*2+1];h+=y,u+=M,y<d&&(d=y),y>f&&(f=y),M<g&&(g=M),M>m&&(m=M)}let x={type:a[0],pts:c,x0:d,x1:f,z0:g,z1:m};f-d>1500||m-g>1500?this.globalAreas.push(x):i(h/(l.length/2),u/(l.length/2)).areas.push(x)}this.areaList=t.areas;for(let a of t.lines){let[l,c,h]=a,u=h.length/2;for(let d=0;d<u-1;d+=23){let f=Math.min(u,d+24),g=new Float32Array((f-d)*2);for(let m=0;m<g.length;m++)g[m]=h[d*2+m]*.1;i(g[0],g[1]).lines.push({type:l,w:c,pts:g})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);for(let a of t.signs||[])i(a[0]*.1,a[1]*.1).signs.push({x:a[0]*.1,z:a[1]*.1,name:a[2],kind:a[3]});this.busStopList=t.busstops.map(a=>[a[0]*.1,a[1]*.1]),this.osmRoutes=(t.routes||[]).map(a=>({ref:a[0],name:a[1],type:a[2],pts:a[3].map(l=>l*.1),stops:a[4].map(l=>l*.1)})),this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(l=>l*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(l=>l*.1)})),this.stands=t.stands.map(a=>a.map(l=>l*.1)),this.jet=t.jet.map(a=>a.map(l=>l*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get(Oe(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&Js(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let l of t)e.set(l[0]+","+l[1],l);let n=this.raw,i=new Set;for(let l=0;l<n.pts.length/2;l++)e.has(n.pts[l*2]+","+n.pts[l*2+1])&&i.add(l);let s=[...i].map(l=>({i:l,x:this.P[l*2],z:this.P[l*2+1],c:-1})),o=this.signalClusters=[];for(let l of s){if(l.c>=0)continue;let c={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[l];for(l.c=c.id;h.length;){let u=h.pop();c.members.push(u),c.x+=u.x,c.z+=u.z,c.n++;for(let d of s)d.c<0&&Math.hypot(d.x-u.x,d.z-u.z)<45&&(d.c=c.id,h.push(d))}c.x/=c.n,c.z/=c.n,o.push(c)}let a=new Map;for(let l of s)a.set(l.i,o[l.c]);this.controls=[];for(let l of this.edges)for(let c=0;c<l.ids.length;c++){let h=a.get(l.ids[c]);if(h)for(let u of l.ow?[0]:[0,1]){let d=u?l.len-l.cum[c]:l.cum[c],f=u===0&&c===l.ids.length-1||u===1&&c===0;if(u===0&&c===0||u===1&&c===l.ids.length-1)continue;let m=Math.max(1,d-(f?4+(u?l.na:l.nb).maxW*.5:2.5)),x={};this.sample(l,u,Math.max(0,m-3),0,x);let p=Math.atan2(x.dz,x.dx);h.axis===null&&(h.axis=p);let y=Math.abs(Math.cos(p-h.axis)),M={e:l,dir:u,de:l.id*2+u,stop:m,cluster:h,group:y>.707?0:1,ang:p,x:0,z:0};l.signals.some(v=>v.dir===u&&v.cluster===h)||(l.signals.push(M),h.controls.push(M),this.controls.push(M))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,y=>y.cls<=5),o=this.nearestRoad(n,i,400,y=>y.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let l=new Set([o.e.na.id,o.e.nb.id]),c=new uh,h=new Map,u=new Map;for(let y of a){let M=Math.hypot(y.x-t,y.z-e);h.set(y.id,M),c.push(M+Math.hypot(y.x-n,y.z-i),y)}let d=null,f=0;for(;c.size&&f++<2e5;){let y=c.pop();if(l.has(y.id)){d=y;break}let M=h.get(y.id);for(let v of y.out){let S=this.edges[v>>1];if(S.cls>5)continue;let E=v&1?S.na:S.nb,b=S.len*(1+S.cls*.08),A=M+b;A<(h.get(E.id)??1e18)&&(h.set(E.id,A),u.set(E.id,{n:y,de:v}),c.push(A+Math.hypot(E.x-n,E.z-i),E))}}if(!d)return null;let g=[o.x,o.z],m=d,x=[];for(;u.has(m.id);){let y=u.get(m.id);x.push(y.de),m=y.n}x.reverse();let p=[t,e,s.x,s.z];for(let y of x){let v=this.edges[y>>1].pts,S=v.length/2;if(y&1)for(let E=S-1;E>=0;E--)p.push(v[E*2],v[E*2+1]);else for(let E=0;E<S;E++)p.push(v[E*2],v[E*2+1])}return p.push(...g),p}};function Js(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],l=e[s*2+1],c=e[o*2],h=e[o*2+1];l>t!=h>t&&r<(c-a)*(t-l)/(h-l)+a&&(n=!n)}return n}var uh=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let l=o*2+1,c=l+1,h=o,u=i;if(l<a&&t[l]<u&&(h=l,u=t[l]),c<a&&t[c]<u&&(h=c),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function wn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var tn={uNight:{value:0},uTime:{value:0},uSnow:{value:0}};function Pi(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function Ii(r,t=!0,e=!0){let n=new ze(r);return t&&(n.wrapS=n.wrapT=br),n.anisotropy=8,e&&(n.colorSpace=ye),n.needsUpdate=!0,n}function zi(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),l=a.data;for(let c=0;c<e;c+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let d=0;d<o;d++)for(let f=0;f<o;f++){let g=((c+d)*t+h+f)*4;l[g]=Math.max(0,Math.min(255,n[0]+u)),l[g+1]=Math.max(0,Math.min(255,n[1]+u)),l[g+2]=Math.max(0,Math.min(255,n[2]+u)),l[g+3]=255}}r.putImageData(a,0,0)}function yf(){let r=wn(42),t={};{let e=Pi(512),n=e.getContext("2d");zi(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=Ii(e)}{let e=Pi(512),n=e.getContext("2d");zi(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=Ii(e)}{let e=Pi(512),n=e.getContext("2d");zi(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=Ii(e)}{let e=Pi(512),n=e.getContext("2d");zi(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=Ii(e)}{let e=Pi(512),n=e.getContext("2d");zi(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=Ii(e)}{let e=Pi(512),n=e.getContext("2d");zi(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=Ii(e)}{let e=Pi(256),n=e.getContext("2d");zi(n,256,256,[60,90,100],18,r,2),t.water=Ii(e)}{let e=Pi(256),n=e.getContext("2d");zi(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=Ii(e,!0,!1)}return t}function _f(r){let t=new yt({vertexColors:!0,roughness:.88,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=tn.uNight,e.uniforms.uSnow=tn.uSnow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aInfo; attribute vec2 aWin; varying vec2 vInfo; varying vec2 vWin;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vInfo = aInfo; vWin = aWin;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vInfo; varying vec2 vWin; uniform float uNight; uniform float uSnow;
        float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
        float box2(vec2 f, vec4 r){ return step(r.x,f.x)*step(f.x,r.z)*step(r.y,f.y)*step(f.y,r.w); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float win = 0.0; float lit = 0.0; float hh = 0.0; float frameM = 0.0; float glassRough = 0.06;
        float st = vInfo.x;
        if (st > 0.5) {
          vec2 cell = floor(vWin); vec2 f = fract(vWin);
          hh = h21(cell + vInfo.y);
          float colH = h21(vec2(cell.x, vInfo.y*3.1));
          vec3 wall = diffuseColor.rgb;
          // weathering: vertical rain streaks + darker base (plinth) + subtle per-floor tone
          float streak = h21(vec2(floor(vWin.x*7.0), vInfo.y)) * smoothstep(0.0, 0.8, 1.0 - f.y);
          wall *= 1.0 - 0.07*streak;
          wall *= 0.96 + 0.06*h21(vec2(cell.y, vInfo.y));
          float ao = mix(0.55, 1.0, smoothstep(0.0, 0.9, vWin.y));
          vec4 wr = vec4(0.0);
          if (st < 1.5) {            // private house
            wr = vec4(0.30,0.32,0.70,0.74);
            if (colH < 0.25) wr = vec4(0.0);
          } else if (st < 2.5) {     // soviet panel block (khrushchyovka / 9-storey)
            wr = vec4(0.17,0.30,0.83,0.80);
            float seam = max(step(0.965,f.y), step(0.988,f.x));
            wall *= 1.0 - 0.09*seam;
            // glazed loggias / balconies on some columns
            float bal = step(0.55, colH);
            if (bal > 0.5 && vWin.y > 1.0) {
              float slab = box2(f, vec4(0.06,0.0,0.94,0.33));
              wall = mix(wall, wall*0.82 + vec3(0.03), slab);
              if (h21(cell + 7.0) > 0.5) { wr = vec4(0.08,0.36,0.92,0.82); }   // glazed balcony
            }
            if (vWin.y < 1.0) wr = vec4(0.0);
            // white air-conditioner units under some windows
            float ac = step(0.86, h21(cell + 3.3)) * box2(f, vec4(0.62,0.10,0.82,0.27)) * step(1.0, vWin.y);
            wall = mix(wall, vec3(0.86,0.86,0.84), ac);
          } else if (st < 3.5) {     // commercial / modern glass
            wr = vec4(0.04,0.10,0.96,0.95);
            if (vWin.y < 1.2) wr = vec4(0.03,0.04,0.97,0.9);
            if (colH < 0.15) wr = vec4(0.0);
          } else if (st < 4.5) {     // industrial
            wr = vec4(0.1,0.62,0.9,0.85) * step(0.5, h21(vec2(cell.x,3.0)+vInfo.y));
            wall *= 0.92 + 0.08*step(0.5, fract(vWin.x*2.0));
          } else if (st < 5.5) {     // public / marble / pink tuff
            wr = vec4(0.30,0.18,0.70,0.86);
            wall *= 0.93 + 0.07*step(0.5,fract(vWin.x*0.5+0.25));
            float pil = box2(f, vec4(0.0,0.0,0.12,1.0)) + box2(f, vec4(0.88,0.0,1.0,1.0));
            wall *= 1.0 + 0.06*pil;
          } else if (st < 6.5) {     // airport terminal glass
            wr = vec4(0.015,0.05,0.985,0.97); glassRough = 0.02;
          }
          // floor ledge line
          wall *= 1.0 - 0.12*step(0.955, f.y)*step(1.0, vWin.y);
          win = box2(f, wr);
          // window frame: thin light border just around the glass
          vec4 fr = vec4(wr.xy - 0.025, wr.zw + 0.025);
          frameM = box2(f, fr) * (1.0 - win) * step(0.001, wr.z);
          // interior: curtains / blinds / dark rooms, plus sky reflection via env (metalness)
          vec3 inside = mix(vec3(0.05,0.06,0.07), vec3(0.32,0.28,0.24), step(0.55, hh)*0.6);
          if (hh > 0.75) inside = mix(inside, vec3(0.55,0.5,0.42), 0.5*smoothstep(0.3,0.0,abs(f.x-0.5)-0.15)); // curtains
          if (st > 2.5 && st < 3.5) inside = mix(vec3(0.05,0.10,0.13), vec3(0.16,0.26,0.30), hh);
          if (st > 5.5) inside = vec3(0.10,0.17,0.22);
          vec3 frameC = (st > 2.5 && st < 3.5) ? vec3(0.22,0.24,0.26) : vec3(0.88,0.88,0.86);
          diffuseColor.rgb = wall * ao;
          diffuseColor.rgb = mix(diffuseColor.rgb, frameC * ao, frameM);
          diffuseColor.rgb = mix(diffuseColor.rgb, inside, win);
          lit = win * step(0.45, hh) * uNight;
          if (st > 5.5 || (st > 2.5 && st < 3.5 && vWin.y < 1.2)) lit = win * uNight * 0.8;
          if (st > 2.5 && st < 3.5 && vWin.y >= 1.2) lit *= step(0.7, hh);
        } else {
          // roofs: bitumen patches + gravel noise (+ snow in winter)
          diffuseColor.rgb *= 0.86 + 0.14*h21(floor(vWin*0.5)) + 0.05*h21(floor(vWin*4.0));
          diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.74,0.76,0.8), uSnow * 0.85);
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, glassRough, win);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.85, win*(1.0-lit));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.62,0.30), vec3(0.75,0.82,1.0), step(0.86,hh)) * (0.22 + 0.5*fract(hh*7.13));`)},t}function fi(r,t,e,n=16777215,i=.95,s=.9){let o=new yt({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return o.onBeforeCompile=a=>{a.uniforms.uSnow=tn.uSnow,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix*vec4(transformed,1.0)).xz;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ; uniform float uSnow;
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5), b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5),
          c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5), d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5);
          return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }`).replace("#include <map_fragment>",`
        vec4 tA = texture2D(map, vWXZ / ${e.toFixed(2)});
        vec4 tB = texture2D(map, vWXZ / ${(e*3.7).toFixed(2)} + 0.37);
        float mac = vn(vWXZ/60.0)*0.6 + vn(vWXZ/9.0)*0.4;
        diffuseColor *= mix(tA, tB, 0.35) * (0.82 + 0.3*mac);
        float snowM = uSnow * ${s.toFixed(2)} * smoothstep(0.25, 0.6, vn(vWXZ/3.0)*0.5 + 0.5*mac + 0.35);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), snowM * 0.85);`)},o}function Mf(){let r=new yt({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var on=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,l,c,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,l,c),h)for(let u in h){let d=h[u],f=this.extra[u].data;for(let g=0;g<d.length;g++)f.push(d[g])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new ie;t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("normal",new Xt(this.n,3)),t.setAttribute("color",new Xt(this.c,3));for(let e in this.extra)t.setAttribute(e,new Xt(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new Ns(this.i,1):new ks(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function dh(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let m=Math.hypot(i,s)||1;i/=m,s/=m}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let m=Math.hypot(o,a)||1;o/=m,a/=m}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let l=i+o,c=s+a,h=Math.hypot(l,c);h<1e-4?(l=o,c=a):(l/=h,c/=h);let u=-c,d=l,f=u*-a+d*o,g=Math.min(3,1/Math.max(.33,f));e[n*3]=u,e[n*3+1]=d,e[n*3+2]=g}return e}function ph(r,t,e,n){let i=[],s=r.length/2,o=c=>{let h=0;for(;h<s-2&&t[h+1]<c;)h++;let u=t[h+1]-t[h]||1e-6,d=Math.max(0,Math.min(1,(c-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*d,r[h*2+1]+(r[h*2+3]-r[h*2+1])*d]},a=o(e);i.push(a[0],a[1]);for(let c=1;c<s-1;c++)t[c]>e&&t[c]<n&&i.push(r[c*2],r[c*2+1]);let l=o(n);return i.push(l[0],l[1]),i}function wf(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function hn(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let l=dh(t),c=0,h=-1,u=-1;for(let d=0;d<a;d++){d>0&&(c+=Math.hypot(t[d*2]-t[d*2-2],t[d*2+1]-t[d*2-1]));let f=l[d*3],g=l[d*3+1],m=l[d*3+2],x=t[d*2],p=t[d*2+1],y=r.v(x+f*e*m,i,p+g*e*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,0)}),M=r.v(x+f*n*m,i,p+g*n*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,1)});h>=0&&r.quad(h,u,M,y),h=y,u=M}}function bf(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),l=-1,c=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,d=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);c>=0?r.tri(a,c,d):l=d,c=d}r.tri(a,c,l)}function Yn(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function mh(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ie,c=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Ef(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let m=0;m<o[h].length;++m)f.push(o[h][m][d]);let g=Ef(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ef(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new fe(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let m=h.getComponent(d,g);a.setComponent(d+u,g,m)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Dt(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new bt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new fe(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function an(r){let t=mh(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function Tf(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=wn(77);e.fillStyle="#5a4634",e.fillRect(0,0,512,512);for(let o=0;o<900;o++){let a=50+n()*60;e.fillStyle=`rgba(${a+20},${a},${a*.7},0.6)`,e.fillRect(n()*512,n()*512,2+n()*4,20+n()*60)}e.clearRect(512,0,512,512);let i=(o,a,l,c,h)=>{e.save(),e.translate(o,a),e.rotate(c);let u=90+h*110;e.fillStyle=`rgb(${Math.round(u*.55)},${Math.round(u)},${Math.round(u*.35)})`,e.beginPath(),e.ellipse(0,0,l,l*.45,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,50,20,0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(-l,0),e.lineTo(l,0),e.stroke(),e.restore()};for(let o=0;o<3800;o++){let a=n()*Math.PI*2,l=Math.sqrt(n())*512*.47,c=512+512/2+Math.cos(a)*l,h=512/2+Math.sin(a)*l;i(c,h,7+n()*9,n()*6.28,.25+.75*n()*(1-l/512*.9))}e.strokeStyle="rgba(70,55,40,0.9)",e.lineWidth=3;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(512+512/2,512/2),e.lineTo(512+512/2+(n()-.5)*512*.8,512/2+(n()-.5)*512*.8),e.stroke();let s=new ze(t);return s.colorSpace=ye,s.anisotropy=4,s.generateMipmaps=!0,s}function ia(r){let t=mh(r.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t}function sa(r,t,e,n=7,i=0){let s=new Bt(r,t,e,n,3,!0).translate(0,e/2,0),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+i*o.getY(l)/e),a.setXY(l,a.getX(l)*.45,a.getY(l)*2%1);return Af(s,16777215)}function Sf(r,t,e){let n=new I().subVectors(t,r),i=n.length(),s=new Bt(e*.6,e,i,5,1,!0),o=s.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a)*.45,o.getY(a));return s.translate(0,i/2,0),s.applyQuaternion(new Ne().setFromUnitVectors(new I(0,1,0),n.normalize())),s.translate(r.x,r.y,r.z),Af(s,16777215)}function Af(r,t,e=1){let n=new bt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new fe(s,3)),r}function ra(r,t,e,n,i,s,o,a,l,c,h=!1){let u=[],d=[],f=[],g=[],m=new bt(c),x=new Ne,p=new Ke,y=new I;for(let A=0;A<a;A++){let _,w,R;for(;;){_=r()*2-1,w=r()*2-1,R=r()*2-1;let Q=_*_+w*w+R*R;if(Q<=1&&Q>.15)break}if(h){let Q=1-(w+1)/2;_*=.25+Q,R*=.25+Q}let L=t+_*i,k=e+w*s,H=n+R*o,B=l*(.75+r()*.5);p.set(r()*Math.PI,r()*Math.PI,r()*Math.PI),x.setFromEuler(p);let N=[[-1,-1],[1,-1],[1,1],[-1,1]],V=new I(_,w*.7+.25,R).normalize(),O=.55+.55*((w+1)/2)*(.6+.4*Math.sqrt(_*_+R*R)),q=u.length/3;for(let[Q,P]of N){y.set(Q*B/2,P*B/2,0).applyQuaternion(x),u.push(L+y.x,k+y.y,H+y.z),d.push(V.x,V.y,V.z),f.push(.5+(Q+1)/4,(P+1)/2);let ft=.9+r()*.2;g.push(m.r*O*ft,m.g*O*ft,m.b*O*ft)}}let M=[],v=[],S=[],E=[];for(let A=0;A<a;A++)for(let _ of[0,1,2,0,2,3]){let w=A*4+_;M.push(u[w*3],u[w*3+1],u[w*3+2]),v.push(d[w*3],d[w*3+1],d[w*3+2]),S.push(f[w*2],f[w*2+1]),E.push(g[w*3],g[w*3+1],g[w*3+2])}let b=new ie;return b.setAttribute("position",new Xt(M,3)),b.setAttribute("normal",new Xt(v,3)),b.setAttribute("uv",new Xt(S,2)),b.setAttribute("color",new Xt(E,3)),b}function oa(r){return r.attributes.uv1&&r.deleteAttribute("uv1"),r}function gh(r=0){let t=wn(11+r),e=r?.28:1,n=r?1.35:1,i=(o,a,l)=>new I(o,a,l),s=[];{let o=[sa(.16,.28,3.6,7,.15)];if(!r)for(let[a,l]of[[.4,3.2],[2.4,3.4],[4.3,3]])o.push(Sf(i(0,l,0),i(Math.cos(a)*1.8,l+1.8,Math.sin(a)*1.8),.1));o.push(ra(t,.2,5.6,0,3,2.3,3,Math.round(70*e),2.1*n,6130234)),s.push(ia(o.map(oa)))}{let o=[sa(.15,.3,4,6)];o.push(ra(t,0,10,0,1.5,7.5,1.5,Math.round(80*e),1.8*n,5603124)),s.push(ia(o.map(oa)))}{let o=[sa(.12,.24,7,6)];o.push(ra(t,0,5,0,2.6,4.8,2.6,Math.round(70*e),1.6*n,3826768,!0)),s.push(ia(o.map(oa)))}{let o=[sa(.24,.42,3.4,8,-.1)];if(!r)for(let[a,l]of[[.9,3],[3.1,3.2],[5,2.9],[2,3.6]])o.push(Sf(i(0,l,0),i(Math.cos(a)*2.4,l+2.2,Math.sin(a)*2.4),.14));o.push(ra(t,0,6.6,0,3.8,2.9,3.8,Math.round(95*e),2.4*n,5077552)),s.push(ia(o.map(oa)))}return s}function Rf(){return gh(1)}function Cf(){let r=Dt(new Bt(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=Dt(new Tt(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=Dt(new Tt(.35,.14,.7).translate(0,8.35,-2.1),3948354);return an([r,t,e])}function Pf(){return Dt(new Tt(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function If(){let r=Dt(new Bt(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=Dt(new Tt(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(Dt(new Tt(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=Dt(new Tt(.44,1.15,.02).translate(0,3.5,-.16),14540253);return an([r,t,n,...e])}function zf(r){return Dt(new Ri(.12,12).translate(0,3.83-r*.33,.155),16777215)}function Lf(){return an([Dt(new Tt(1.8,.06,.45).translate(0,.45,0),8017460),Dt(new Tt(1.8,.4,.05).translate(0,.72,-.2),8017460),Dt(new Tt(.06,.45,.45).translate(-.8,.22,0),3355443),Dt(new Tt(.06,.45,.45).translate(.8,.22,0),3355443)])}function Df(){return an([Dt(new Tt(3.6,.08,1.6).translate(0,2.5,0),2973324),Dt(new Tt(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),Dt(new Tt(.08,2.5,1.5).translate(1.75,1.25,0),8952234),Dt(new Tt(3.5,1.8,.05).translate(0,1.4,-.72),10467012),Dt(new Tt(3,.08,.4).translate(0,.5,-.5),5592405)])}var Li={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]};function Rv(){let r=document.createElement("canvas");r.width=2048,r.height=1024;let t=r.getContext("2d");[["#d8261c","#ffcf3a","\u041D\u0410\u041D & \u0421\u0410\u041C\u0421\u0410","\u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u0438\u0437 \u0442\u0430\u043D\u0434\u044B\u0440\u0430 \xB7 24/7"],["#1667b8","#ffffff","\u0418\u0421\u0421\u042B\u041A-\u041A\u04E8\u041B \u041A\u04AE\u0422\u04E8\u0422!","\u0442\u0443\u0440\u044B \u043D\u0430 \u0418\u0441\u0441\u044B\u043A-\u041A\u0443\u043B\u044C \u043E\u0442 2 990 \u0441\u043E\u043C"],["#f2c200","#141414","\u0411\u0418\u0428\u041A\u0415\u041A \u0422\u0410\u041A\u0421\u0418","\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \xB7 1515"],["#2a7a3a","#fff4d0","\u041A\u042B\u041C\u042B\u0417 \xB7 \u041C\u0410\u041A\u0421\u042B\u041C","\u0410\u043B\u0430-\u0422\u043E\u043E \u0434\u0430\u0441\u0442\u043E\u0440\u043A\u043E\u043D\u0443"],["#0e2a4a","#5fd4ff","\u0428\u0423\u041C\u041A\u0410\u0420 \u0411\u0410\u041D\u041A","\u043A\u0440\u0435\u0434\u0438\u0442 \u043E\u043D\u043B\u0430\u0439\u043D \u0437\u0430 5 \u043C\u0438\u043D\u0443\u0442"],["#ffffff","#c8102e","\u0416\u0410\u04A2\u042B \u04AE\u0419\u041B\u04E8\u0420","\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \xB7 \u0438\u043F\u043E\u0442\u0435\u043A\u0430 4%"],["#c8102e","#ffffff","\u0421\u0410\u041A\u0422\u0410\u041D! \u0416\u041E\u041B\u0414\u041E \u042D\u0422\u0418\u042F\u0422 \u0411\u041E\u041B","\u0431\u0435\u0440\u0435\u0433\u0438\u0442\u0435 \u043F\u0435\u0448\u0435\u0445\u043E\u0434\u043E\u0432 \xB7 60 \u043A\u043C/\u0447"],["#5a2a8a","#ffd84a","TULPAR AIR","\u0411\u0438\u0448\u043A\u0435\u043A \u2708 \u041E\u0448 \u043E\u0442 2 500 \u0441\u043E\u043C"]].forEach(([i,s,o,a],l)=>{let c=l%4*512,h=Math.floor(l/4)*512,u=t.createLinearGradient(c,h,c+512,h+512);u.addColorStop(0,i),u.addColorStop(1,Cv(i,-40)),t.fillStyle=u,t.fillRect(c,h,512,512),t.fillStyle="rgba(255,255,255,0.08)",t.beginPath(),t.arc(c+420,h+120,160,0,7),t.fill(),t.fillStyle=s,t.textAlign="center",t.textBaseline="middle";let d=64;for(t.font=`900 ${d}px Arial`;t.measureText(o).width>470&&d>30;)d-=4,t.font=`900 ${d}px Arial`;t.fillText(o,c+256,h+220),t.font="600 30px Arial",t.fillText(a,c+256,h+310),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(c,h+470,512,42),t.fillStyle="#fff",t.font="600 22px Arial",t.fillText("bishkek \xB7 reklama",c+256,h+491)});let n=new ze(r);return n.colorSpace=ye,n.anisotropy=4,n}function Cv(r,t){let e=parseInt(r.slice(1),16),n=Math.max(0,Math.min(255,(e>>16)+t)),i=Math.max(0,Math.min(255,(e>>8&255)+t)),s=Math.max(0,Math.min(255,(e&255)+t));return`rgb(${n},${i},${s})`}var Pv={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},Iv={0:1/140,2:1/45,7:1/120,1:0},aa=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new Yt,t.add(this.root),this.mat={building:_f(n),road:fi(n,n.asphalt,7,16777215,.92,.1),mark:Mf(),paving:Object.assign(fi(n,n.paving,3.2,12104876,.9,.75),{side:Ee}),grass:fi(n,n.grass,6,16777215,1),dirt:fi(n,n.dirt,7,16777215,1),field:fi(n,n.field,14,16777215,1),asphalt:fi(n,n.asphalt,7,16777215,.92,.5),concrete:fi(n,n.concrete,20,13158596,.85,.6),water:new yt({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:(()=>{let i=new yt({vertexColors:!0,roughness:.85,map:Tf(),alphaTest:.42,side:Ee});return i.onBeforeCompile=s=>{s.uniforms.uSnow=tn.uSnow,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow;`).replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;").replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), uSnow * 0.3);`)},i})(),lamp:new yt({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new yt({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new yt({vertexColors:!0,roughness:.6}),rail:new yt({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=gh(),this.geoTreesLow=Rf(),this.geoLamp=Cf(),this.geoLampGlow=Pf(),this.geoBus=Df(),this.geoBench=Lf(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new Ce(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new fe(n,3));let i=fi(this.T,this.T.dirt,9,11843744,1);this.ground=new Z(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new Z(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),l=Math.floor((i+o)/400),c=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let g=a;g<=l;g++)for(let m=c;m<=h;m++){let x=Oe(g,m);if(this.live.has(x))continue;let p=this.map.chunks.get(x);if(!p)continue;let y=Math.hypot((g+.5)*400-i,(m+.5)*400-s);y<o&&u.push([y,p])}u.sort((g,m)=>g[0]-m[0]);let d=performance.now();for(let[g,m]of u)if(this._buildChunk(m),!n&&performance.now()-d>(this.radius>2e3?14:this.buildBudget||8))break;let f=this.farRadius||0;if(f>o){if(this.far||(this.far=new Map,this.farRoot=new Yt,this.scene.add(this.farRoot)),!this._farScan||performance.now()-this._farScan>400){this._farScan=performance.now();let m=Math.floor((i-f)/400),x=Math.floor((i+f)/400),p=Math.floor((s-f)/400),y=Math.floor((s+f)/400),M=[];for(let v=m;v<=x;v++)for(let S=p;S<=y;S++){let E=Oe(v,S);if(this.far.has(E))continue;let b=this.map.chunks.get(E);if(!b||!b.buildings.length)continue;let A=Math.hypot((v+.5)*400-i,(S+.5)*400-s);A<f&&A>o-600&&M.push([A,b])}M.sort((v,S)=>v[0]-S[0]),this._farQueue=M}let g=performance.now();for(;this._farQueue&&this._farQueue.length&&performance.now()-g<(n?50:4);){let[,m]=this._farQueue.shift();this.far.has(m.key)||this._buildFar(m)}for(let[m,x]of this.far){let p=Math.hypot(x.x-i,x.z-s);if(p>f+800){this.farRoot.remove(x.mesh),x.mesh.geometry.dispose(),this.far.delete(m);continue}let y=this.live.get(m);x.mesh.visible=!(y&&y.group.visible)&&p<f+200}}else if(this.far&&this.far.size){for(let g of this.far.values())this.farRoot.remove(g.mesh),g.mesh.geometry.dispose();this.far.clear()}for(let[g,m]of this.live){let x=Math.hypot(m.x-i,m.z-s);if(x>o+900){this._dispose(g,m);continue}m.group.visible=x<o+300,m.detail&&(m.detail.visible=x<650),m.trees&&(m.trees.visible=x<280,m.treesLow.visible=x>=280&&x<1400),m.marks&&(m.marks.visible=x<700)}}_buildFar(t){let e=wn(t.key*7+13),n=new on({aInfo:2,aWin:2});for(let a of t.buildings)!(a.h>=6||(a.x1-a.x0)*(a.z1-a.z0)>160)&&e()<.6||this._building(n,a,e,!1);let i=(t.cx+.5)*400,s=(t.cz+.5)*400;if(n.empty){this.far.set(t.key,{mesh:new Yt,x:i,z:s}),this.far.get(t.key).mesh.geometry={dispose(){}};return}let o=new Z(n.build(),this.mat.building);o.matrixAutoUpdate=!1,this.farRoot.add(o),this.far.set(t.key,{mesh:o,x:i,z:s})}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),e.signTex&&(e.signTex.dispose(),e.signMat.dispose()),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),l=Math.floor(Math.min(e,i)/s),c=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=l;u<=c;u++){let d=Oe(h,u),f=this.collision.get(d);f||this.collision.set(d,f=[]),f.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=wn(t.key*7+13),i=new Yt,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new on({aInfo:2,aWin:2});for(let _ of t.buildings)this._building(a,_,n,o);if(!a.empty){let _=new Z(a.build(),this.mat.building);_.castShadow=!0,_.receiveShadow=!0,i.add(_)}t.signs.length&&this._signs(t,i,s);let l=new on,c=new on,h=new on({aDash:2}),u=[1,1,1],d=Yn(15253568),f=[.92,.92,.9];for(let _ of t.edges){let w=.03+(6-_.cls)*.005;hn(l,_.pts,-_.w/2,_.w/2,w,[1,1,1]);let R=_.na.deg>1?_.na.maxW/2+1.5:0,L=_.nb.deg>1?_.nb.maxW/2+1.5:0;if(_.len-R-L<2)continue;let k=ph(_.pts,_.cum,R,_.len-L),H=w+.004,B=(N,V,O=.15,q=f)=>hn(h,k,N-O/2,N+O/2,H,q,Q=>[Q,V]);if(_.cls<=4){if(_.ow)for(let N=1;N<_.lanes;N++)B(-_.w/2+N*3.3,1);else if(_.lanes>=2){B(-.12,0),B(.12,0);for(let N=1;N<_.lanes;N++)B(N*3.3,1),B(-N*3.3,1)}else _.cls<=4&&_.w>=6&&B(0,1);_.cls<=2&&(B(_.w/2-.35,0,.12),B(-_.w/2+.35,0,.12))}for(let N of _.signals){let V={};e.sample(_,N.dir,N.stop,0,V);let O=N.dir?-1:1,q=(_.ow,_.w/2),Q=_.ow?-q:0,P=q,ft=-V.dz,et=V.dx,F=[V.x+ft*Q,V.z+et*Q,V.x+ft*P,V.z+et*P];hn(h,F,-.25,.25,H+.001,f,()=>[0,0])}if(_.cls>=1&&_.cls<=4&&_.w>=5){let N=_.na.deg>1?_.na.maxW/2+2.5:0,V=_.nb.deg>1?_.nb.maxW/2+2.5:0;if(_.len-N-V>3){let O=ph(_.pts,_.cum,N,_.len-V),q=_.cls<=2?3.4:2.6;for(let Q of[-1,1]){let P=Q>0?_.w/2:-_.w/2-q,ft=Q>0?_.w/2+q:-_.w/2;hn(c,O,P,ft,.15,[1,1,1]),this._curb(c,O,Q>0?_.w/2:-_.w/2,Q)}}}}for(let _ of t.nodes){let w=.03+_.top*.005+.002;bf(l,_.x,_.z,_.maxW/2*1.08,w,[1,1,1],16)}for(let[_,w]of t.crossings){let R=e.nearestRoad(_,w,4);if(!R||R.e.cls>4||R.e.w<5)continue;let L=.03+(6-R.e.cls)*.005+.006,k=-R.dz,H=R.dx,B=R.e.w/2,N=[R.x-k*B,R.z-H*B,R.x+k*B,R.z+H*B];hn(h,N,-2,2,L,f,V=>[V*2,2])}if(!l.empty){let _=new Z(l.build(),this.mat.road);_.receiveShadow=!0,i.add(_)}if(!c.empty){let _=new Z(c.build(),this.mat.paving);_.receiveShadow=!0,i.add(_),s.detail=_}if(!h.empty){let _=new Z(h.build(),this.mat.mark);_.receiveShadow=!0,i.add(_),s.marks=_}let g={},m=[[],[],[],[]];for(let _ of t.areas)this._area(g,_,n,m);for(let _ of t.lines)this._line(g,_,n,m);for(let _ in g){let w=new Z(g[_].build(),this.mat[_]);w.receiveShadow=!0,i.add(w)}let x=[];for(let _ of t.edges){if(_.cls<1||_.cls>4)continue;let w=_.cls<=2?9:11,R=_.w/2+(_.cls<=2?4.2:3.4);for(let L=6+n()*5;L<_.len-6;L+=w+n()*5)for(let k of[-1,1]){if(n()<(_.cls<=3?.18:.4))continue;let H={};if(e.sample(_,0,L,R*k,H),this._blocked(H.x,H.z,_,2.2))continue;let B=_.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;m[B].push(H.x,H.z,.75+n()*.5,n()*6.28)}if(_.cls<=3)for(let L=10;L<_.len-8;L+=34)for(let k of _.cls<=1?[-1,1]:[1]){let H={};if(e.sample(_,0,L,(_.w/2+.6)*k,H),this._blocked(H.x,H.z,_,.8))continue;let B=Math.atan2(-H.dz*k,H.dx*k);x.push(H.x,H.z,B)}}for(let _ of t.trees)m[n()<.5?0:3].push(_[0],_[1],.8+n()*.4,n()*6.28);let p=new Yt,y=new Yt,M=new ne,v=new Ne,S=new I,E=new I,b=new I(0,1,0),A=new bt;for(let _=0;_<4;_++){let w=m[_],R=w.length/4;if(!R)continue;let L=new Pe(this.geoTrees[_],this.mat.tree,R);for(let H=0;H<R;H++){let B=w[H*4+2];v.setFromAxisAngle(b,w[H*4+3]),M.compose(S.set(w[H*4],0,w[H*4+1]),v,E.set(B,B*(.9+n()*.25),B)),L.setMatrixAt(H,M);let N=.8+n()*.35;L.setColorAt(H,A.setRGB(N*(.9+n()*.25),N,N*(.85+n()*.2)))}L.castShadow=!0,L.receiveShadow=!0,L.computeBoundingSphere(),p.add(L);let k=new Pe(this.geoTreesLow[_],this.mat.tree,R);k.instanceMatrix.copy(L.instanceMatrix),k.instanceColor=L.instanceColor,k.castShadow=!0,k.computeBoundingSphere(),y.add(k)}if(i.add(p,y),s.trees=p,s.treesLow=y,x.length){let _=x.length/3,w=new Pe(this.geoLamp,this.mat.lamp,_),R=new Pe(this.geoLampGlow,this.mat.lampGlow,_);for(let L=0;L<_;L++)v.setFromAxisAngle(b,x[L*3+2]),M.compose(S.set(x[L*3],0,x[L*3+1]),v,E.set(1,1,1)),w.setMatrixAt(L,M),R.setMatrixAt(L,M);w.castShadow=!0,w.computeBoundingSphere(),R.computeBoundingSphere(),i.add(w,R)}if(this._trolley(t,i),this._billboards(t,i,n),t.busstops.length){let _=[];for(let[w,R]of t.busstops){let L=e.nearestRoad(w,R,25,O=>O.cls<=4);if(!L)continue;let k=L.lat>=0?1:-1,H=L.e.w/2+2.2,B=L.x+-L.dz*H*k,N=L.z+L.dx*H*k;if(e.insideBuilding(B,N,.5))continue;let V=e.nearestRoad(B,N,12);V&&V.dist<V.e.w/2+1||_.push(B,N,Math.atan2(L.dx*k,L.dz*k)+Math.PI)}if(_.length){let w=new Pe(this.geoBus,this.mat.prop,_.length/3);for(let R=0;R<_.length/3;R++)v.setFromAxisAngle(b,_[R*3+2]),M.compose(S.set(_[R*3],.15,_[R*3+1]),v,E.set(1,1,1)),w.setMatrixAt(R,M);w.castShadow=!0,w.computeBoundingSphere(),i.add(w)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_signs(t,e,n){let i={pharmacy:["#1d8a4a","#fff"],bank:["#163c7a","#fff"],cafe:["#5a3a22","#ffe9c8"],restaurant:["#7a1e1e","#fff3d0"],fast_food:["#d8261c","#fff"],supermarket:["#f2c200","#1a1a1a"],convenience:["#1f5fa8","#fff"],fuel:["#0a6a3a","#fff"],hotel:["#2a2a40","#f0d080"],clothes:["#222","#fff"],bar:["#3a1a40","#ffd0f0"],mobile_phone:["#e05a10","#fff"]},s=[];for(let v of t.signs){let S=Math.floor(v.x/this.map.BGRID),E=Math.floor(v.z/this.map.BGRID),b=null,A=18;for(let _=-1;_<=1;_++)for(let w=-1;w<=1;w++){let R=this.map.bgrid.get(Oe(S+_,E+w));if(R)for(let L of R){if(L.h<3||L.h>80)continue;let k=L.pts,H=k.length/2,B=0;for(let V=0;V<H;V++){let O=(V+1)%H;B+=k[V*2]*k[O*2+1]-k[O*2]*k[V*2+1]}let N=B>0?1:-1;for(let V=0;V<H;V++){let O=(V+1)%H,q=k[V*2],Q=k[V*2+1],P=k[O*2],ft=k[O*2+1],et=P-q,F=ft-Q,J=Math.hypot(et,F);if(J<3)continue;let rt=((v.x-q)*et+(v.z-Q)*F)/(J*J);rt=Math.max(.15,Math.min(.85,rt));let st=q+et*rt,dt=Q+F*rt,zt=Math.hypot(v.x-st,v.z-dt);if(zt>=A)continue;let Ut=F/J*N,Qt=-et/J*N,at=this.map.nearestRoad(st+Ut*6,dt+Qt*6,30),gt=zt+(at?at.dist*.15:6);gt<A&&(A=gt,b={x:st+Ut*.06,z:dt+Qt*.06,nx:Ut,nz:Qt,l:J,h:Math.min(L.h,4.2)})}}}if(b&&!s.some(_=>Math.hypot(_.x-b.x,_.z-b.z)<2.5)&&s.push(Object.assign(b,{name:v.name,kind:v.kind})),s.length>=48)break}if(!s.length)return;let o=256,a=48,l=4,c=Math.ceil(s.length/l),h=document.createElement("canvas");h.width=o*l,h.height=a*c;let u=h.getContext("2d"),d=[],f=[],g=[],m=[];s.forEach((v,S)=>{let E=S%l*o,b=Math.floor(S/l)*a,[A,_]=i[v.kind]||["#8a1a1a","#fff"];u.fillStyle=A,u.fillRect(E,b,o,a),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(E,b,o,4),u.fillStyle=_,u.textAlign="center",u.textBaseline="middle";let w=30;for(u.font=`700 ${w}px Arial`;u.measureText(v.name).width>o-16&&w>12;)w-=2,u.font=`700 ${w}px Arial`;u.fillText((v.name.toUpperCase,v.name),E+o/2,b+a/2+1),v.kind==="pharmacy"&&(u.fillStyle="#fff",u.fillRect(E+8,b+18,18,6),u.fillRect(E+14,b+12,6,18));let R=Math.min(v.l*.8,1.6+v.name.length*.28),L=R*a/o*1.15,k=-v.nz,H=v.nx,B=v.h-.6-L,N=v.h-.6,V=Math.max(2.6,Math.min(B,3)),O=V+L,q=d.length/3;for(let[F,J]of[[-1,V],[1,V],[1,O],[-1,O]])d.push(v.x+k*F*R/2,J,v.z+H*F*R/2),g.push(v.nx,0,v.nz);let Q=E/h.width,P=(E+o)/h.width,ft=1-(b+a)/h.height,et=1-b/h.height;f.push(P,ft,Q,ft,Q,et,P,et),m.push(q,q+1,q+2,q,q+2,q+3)});let x=new ie;x.setAttribute("position",new Xt(d,3)),x.setAttribute("normal",new Xt(g,3)),x.setAttribute("uv",new Xt(f,2)),x.setIndex(m);let p=new ze(h);p.colorSpace=ye,p.anisotropy=4;let y=new yt({map:p,emissiveMap:p,emissive:16777215,emissiveIntensity:.05+this.night*.9,roughness:.5,side:Ee}),M=new Z(x,y);e.add(M),n.signMat=y,n.signTex=p}_trolley(t,e){let n=/Чүй|Чуй|Chuy|Манас|Manas|Абдрахманов|Abdrahmanov|Жибек|Jibek|Ибраимов|Ibraimov|Ахунбаев|Akhunbaev|Токтогул|Toktogul|Киев|Kyiv|Москва|Moscow|Шабдан|Shabdan|Айтматов|Aytmatov|Фрунзе|Frunze|Горький|Gorky/,i=[],s=[],o={},a={};for(let l of t.edges){if(l.cls>2||l.name<0||l.len<30)continue;let c=this.map.names[l.name];if(!n.test(c[0])&&!n.test(c[1]||""))continue;let h=l.ow?[0]:[0,1],u=32;for(let d=4;d<l.len-2;d+=u){let f=Math.min(l.len-1,d+u);for(let g of h){let m=this.map.laneOffset(l,l.lanes-1);for(let x of[-.32,.32]){let p=null,y=null,M=null;for(let v=0;v<=4;v++){let S=v/4,E=d+(f-d)*S;this.map.sample(l,g,g?l.len-E:E,m+x,o);let b=6.3-Math.sin(S*Math.PI)*.25;p!==null&&i.push(p,M,y,o.x,b,o.z),p=o.x,M=b,y=o.z}}}this.map.sample(l,0,d,l.w/2+.7,o),this.map.sample(l,0,d,-l.w/2-.7,a),this.map.insideBuilding(o.x,o.z,.3)||s.push(o.x,o.z),this.map.insideBuilding(a.x,a.z,.3)||s.push(a.x,a.z),i.push(o.x,6.9,o.z,a.x,6.9,a.z)}}if(i.length){let l=new ie;l.setAttribute("position",new Xt(i,3));let c=new Os(l,this.wireMat||(this.wireMat=new Cr({color:1842204})));e.add(c)}if(s.length){let l=s.length/2,c=this.poleGeo||(this.poleGeo=new Bt(.1,.15,7.4,6).translate(0,3.7,0)),h=new Pe(c,this.poleMat||(this.poleMat=new yt({color:6053990,roughness:.6,metalness:.4})),l),u=new ne;for(let d=0;d<l;d++)u.makeTranslation(s[d*2],0,s[d*2+1]),h.setMatrixAt(d,u);h.castShadow=!0,h.computeBoundingSphere(),e.add(h)}}_billboards(t,e,n){this.adTex||(this.adTex=Rv());let i=[],s=[],o=[],a=[],l=[],c={};for(let x of t.edges)if(!(x.cls>2||x.len<120))for(let p=60+n()*80;p<x.len-40;p+=240+n()*140){let y=n()<.5?1:-1;if(this.map.sample(x,0,p,(x.w/2+5.5)*y,c),this.map.insideBuilding(c.x,c.z,4))continue;let M=this.map.nearestRoad(c.x,c.z,12);if(M&&M.dist<M.e.w/2+2)continue;let v=Math.atan2(c.dx,c.dz)+y*.45+(y>0?Math.PI:0),S=Math.sin(v),E=Math.cos(v),b=Math.cos(v),A=-Math.sin(v),_=6,w=3,R=4.2,L=Math.floor(n()*8),k=L%4/4,H=Math.floor(L/4)/2;for(let B of[0,1]){let N=i.length/3,V=B?-1:1;for(let[O,q]of[[-1,0],[1,0],[1,1],[-1,1]])i.push(c.x+b*O*_/2*V-S*.06*B,R+q*w,c.z+A*O*_/2*V-E*.06*B),o.push(S*V,0,E*V);B?s.push(.001,.001,.002,.001,.002,.002,.001,.002):s.push(k,1-H-.5,k+.25,1-H-.5,k+.25,1-H,k,1-H),a.push(N,N+1,N+2,N,N+2,N+3)}l.push(c.x+b*1.6,c.z+A*1.6,c.x-b*1.6,c.z-A*1.6)}if(!i.length)return;let h=new ie;h.setAttribute("position",new Xt(i,3)),h.setAttribute("normal",new Xt(o,3)),h.setAttribute("uv",new Xt(s,2)),h.setIndex(a),this.adMat||(this.adMat=new yt({map:this.adTex,emissiveMap:this.adTex,emissive:16777215,emissiveIntensity:.05,roughness:.6,side:Ee}));let u=new Z(h,this.adMat);u.castShadow=!0,e.add(u);let d=l.length/2,f=this.legGeo||(this.legGeo=new Bt(.14,.18,4.3,6).translate(0,2.15,0)),g=new Pe(f,this.poleMat||(this.poleMat=new yt({color:6053990,roughness:.6,metalness:.4})),d),m=new ne;for(let x=0;x<d;x++)m.makeTranslation(l[x*2],0,l[x*2+1]),g.setMatrixAt(x,m);g.castShadow=!0,g.computeBoundingSphere(),e.add(g)}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=dh(e),o=e.length/2,a=-1,l=-1;for(let c=0;c<o;c++){let h=s[c*3],u=s[c*3+1],d=s[c*3+2],f=e[c*2]+h*n*d,g=e[c*2+1]+u*n*d,m=-h*i,x=-u*i,p=t.v(f,.15,g,m,0,x,.85,.85,.83),y=t.v(f,0,g,m,0,x,.6,.6,.6);a>=0&&(i>0?t.quad(l,y,p,a):t.quad(l,a,p,y)),a=p,l=y}}_area(t,e,n,i){let s=Pv[e.type];if(!s)return;let[o,a,l]=s,c=t[o]||(t[o]=new on),h=e.pts,u=h.length/2,d=[];for(let p=0;p<u;p++)d.push(new tt(h[p*2],h[p*2+1]));let f;try{f=Si.triangulateShape(d,[])}catch{return}let g=Yn(a),m=c.vc;for(let p=0;p<u;p++)c.v(h[p*2],l,h[p*2+1],0,1,0,g[0],g[1],g[2]);for(let p of f){let[y,M,v]=p,S=h[y*2],E=h[y*2+1],b=h[M*2],A=h[M*2+1],_=h[v*2],w=h[v*2+1];(b-S)*(w-E)-(A-E)*(_-S)<0?c.tri(m+y,m+M,m+v):c.tri(m+y,m+v,m+M)}let x=Iv[e.type];if(i&&x&&n){let p=(e.x1-e.x0)*(e.z1-e.z0),y=Math.min(500,Math.floor(p*x)),M=y*3;for(;y>0&&M-- >0;){let v=e.x0+n()*(e.x1-e.x0),S=e.z0+n()*(e.z1-e.z0);if(!Js(v,S,h))continue;let E=this.map.nearestRoad(v,S,10);if(E&&E.dist<E.e.w/2+2||this.map.insideBuilding(v,S,1.5))continue;let b=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[b].push(v,S,.7+n()*.6,n()*6.28),y--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new on);hn(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new on);hn(o,s,-e.w/2,e.w/2,.005,Yn(6982288));let a=t.dirt||(t.dirt=new on);hn(a,s,-e.w/2-2.5,-e.w/2,.004,Yn(10129528)),hn(a,s,e.w/2,e.w/2+2.5,.004,Yn(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new on);hn(o,s,-1.8,1.8,.02,Yn(6971992));let a=t.rail||(t.rail=new on);hn(a,s,-.78,-.7,.16,[1,1,1]),hn(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new on);hn(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new on({aDash:2}));hn(a,s,-.08,.08,.03,Yn(15253552),l=>[l,0])}else if(e.type===5&&i){let o=wf(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let l=0;for(;l<o.length-2&&o[l+1]<a;)l++;let c=(a-o[l])/(o[l+1]-o[l]||1);i[n()<.6?1:0].push(s[l*2]+(s[l*2+2]-s[l*2])*c,s[l*2+1]+(s[l*2+3]-s[l*2+1])*c,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let B=0;B<o;B++){let N=(B+1)%o;a+=s[B*2]*s[N*2+1]-s[N*2]*s[B*2+1]}let l=Math.abs(a)/2,c=e.kind,h=e.h,u=e.minH,d,f,g=3,m=3.2,x=B=>B[Math.floor(n()*B.length)];switch(c===0&&(c=h<7.5?1:h>35?3:2),c){case 1:d=1,f=x(Li.house),m=3.6;break;case 2:d=2,f=x(Li.panel),m=3.1;break;case 3:d=3,f=x(Li.comm),m=2.2,g=3.6;break;case 4:d=4,f=x(Li.ind),m=4,g=4;break;case 5:d=0,f=9077880;break;case 6:d=0,f=10132122;break;case 7:d=5,f=x(Li.pub),m=3.4,g=3.8;break;case 8:d=5,f=15921128;break;case 9:d=4,f=11052188;break;case 10:d=6,f=13160664,m=2.5,g=4;break;default:d=2,f=x(Li.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(d=5,f=15262940),e.name&&/Жогорку Кеңеш|National Parliament|Ынтымак Ордо|Yntymak Ordo|City Hall|Мэрия|National Bank/i.test(e.name)&&(d=5,f=15987180,c=7);let p=Yn(f);if(e.colour)try{let B=new bt(e.colour);(e.colour!=="white"||c!==3)&&(p=[B.r,B.g,B.b])}catch{}let y=.92+n()*.12,M=p[0]*y,v=p[1]*y,S=p[2]*y,E=n()*100,b=(B,N)=>({aInfo:[d,E],aWin:[B,N]}),A=a>0?1:-1,_=0;for(let B=0;B<o;B++){let N=(B+1)%o,V=s[B*2],O=s[B*2+1],q=s[N*2],Q=s[N*2+1],P=q-V,ft=Q-O,et=Math.hypot(P,ft);if(et<.05)continue;let F=ft/et*A,J=-P/et*A,rt=Math.max(1,Math.round(et/m)),st=0,dt=(h-u)/g,zt=t.v(V,u,O,F,0,J,M,v,S,b(0,st)),Ut=t.v(q,u,Q,F,0,J,M,v,S,b(rt,st)),Qt=t.v(q,h,Q,F,0,J,M,v,S,b(rt,dt)),at=t.v(V,h,O,F,0,J,M,v,S,b(0,dt));A>0?(t.tri(zt,Qt,Ut),t.tri(zt,at,Qt)):(t.tri(zt,Ut,Qt),t.tri(zt,Qt,at)),i&&h>1.5&&this.addWall(V,O,q,Q),_+=et}let w=c===1&&l<260&&o<=8||/gabled|hipped|pitched/.test(e.roofShape||"");if(!w&&h>5&&c!==5&&c!==6){let B=c===3||c===10?1.1:.7,N=[M*.92,v*.92,S*.92],V={aInfo:[0,E],aWin:[0,0]};for(let O=0;O<o;O++){let q=(O+1)%o,Q=s[O*2],P=s[O*2+1],ft=s[q*2],et=s[q*2+1],F=Math.hypot(ft-Q,et-P);if(F<.05)continue;let J=(et-P)/F*A,rt=-(ft-Q)/F*A,st=t.v(Q,h,P,J,0,rt,N[0],N[1],N[2],V),dt=t.v(ft,h,et,J,0,rt,N[0],N[1],N[2],V),zt=t.v(ft,h+B,et,J,.2,rt,N[0],N[1],N[2],V),Ut=t.v(Q,h+B,P,J,.2,rt,N[0],N[1],N[2],V);A>0?(t.tri(st,zt,dt),t.tri(st,Ut,zt),t.tri(st,dt,zt),t.tri(st,zt,Ut)):(t.tri(st,dt,zt),t.tri(st,zt,Ut),t.tri(st,zt,dt),t.tri(st,Ut,zt))}}if(w){this._gableRoof(t,e,h,p,n,l);return}let R=[];for(let B=0;B<o;B++)R.push(new tt(s[B*2],s[B*2+1]));let L;try{L=Si.triangulateShape(R,[])}catch{return}let k=c===10?[.55,.57,.6]:c===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],H=t.vc;for(let B=0;B<o;B++)t.v(s[B*2],h,s[B*2+1],0,1,0,k[0],k[1],k[2],{aInfo:[0,E],aWin:[s[B*2],s[B*2+1]]});for(let B of L){let[N,V,O]=B,q=s[N*2],Q=s[N*2+1],P=s[V*2],ft=s[V*2+1],et=s[O*2],F=s[O*2+1];(P-q)*(F-Q)-(ft-Q)*(et-q)<0?t.tri(H+N,H+V,H+O):t.tri(H+N,H+O,H+V)}if((c===2||c===3)&&l>350&&h>12){let B=Math.min(3,Math.floor(l/400));for(let N=0;N<B;N++){let V=(N+.5)/B,O=e.x0+(e.x1-e.x0)*V,q=e.z0+(e.z1-e.z0)*V;Js(O,q,s)&&this._box(t,O,h,q,2.6,2.4,3.2,[k[0]*1.3,k[1]*1.3,k[2]*1.3],E)}}}_box(t,e,n,i,s,o,a,l,c){let h=s/2,u=a/2,d=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],f={aInfo:[0,c],aWin:[0,0]};for(let m=0;m<4;m++){let[x,p]=d[m],[y,M]=d[(m+1)%4],v=y-x,S=M-p,E=Math.hypot(v,S),b=S/E,A=-v/E,_=t.v(x,n,p,b,0,A,l[0],l[1],l[2],f),w=t.v(y,n,M,b,0,A,l[0],l[1],l[2],f),R=t.v(y,n+o,M,b,0,A,l[0],l[1],l[2],f),L=t.v(x,n+o,p,b,0,A,l[0],l[1],l[2],f);t.tri(_,R,w),t.tri(_,L,R)}let g=d.map(([m,x])=>t.v(m,n+o,x,0,1,0,l[0],l[1],l[2],f));t.tri(g[0],g[2],g[1]),t.tri(g[0],g[3],g[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,l=a.length/2,c=0,h=1,u=0;for(let q=0;q<l;q++){let Q=(q+1)%l,P=a[Q*2]-a[q*2],ft=a[Q*2+1]-a[q*2+1],et=Math.hypot(P,ft);et>c&&(c=et,h=P/et,u=ft/et)}let d=-u,f=h,g=1e9,m=-1e9,x=1e9,p=-1e9;for(let q=0;q<l;q++){let Q=a[q*2]*h+a[q*2+1]*u,P=a[q*2]*d+a[q*2+1]*f;g=Math.min(g,Q),m=Math.max(m,Q),x=Math.min(x,P),p=Math.max(p,P)}let y=.35;g-=y,m+=y,x-=y,p+=y;let M=(q,Q)=>[q*h+Q*d,q*u+Q*f],v=Math.min(2.6,(p-x)*.38),S=(x+p)/2,E=Yn(Li.roofHouse[Math.floor(s()*Li.roofHouse.length)]);if(e.roofColour)try{let q=new bt(e.roofColour);E=[q.r,q.g,q.b]}catch{}let b={aInfo:[0,0],aWin:[0,0]},A=n-.05,_=M(g,x),w=M(m,x),R=M(m,p),L=M(g,p),k=M(g,S),H=M(m,S),B=(q,Q,P,ft,et)=>{let F=(S-(et<0?x:p)===0,1),J=v/((p-x)/2),rt=d*et*J,st=f*et*J,dt=Math.hypot(rt,1,st),zt=t.v(q[0],A,q[1],rt/dt,F/dt,st/dt,E[0],E[1],E[2],b),Ut=t.v(Q[0],A,Q[1],rt/dt,F/dt,st/dt,E[0],E[1],E[2],b),Qt=t.v(P[0],A+v,P[1],rt/dt,F/dt,st/dt,E[0]*1.1,E[1]*1.1,E[2]*1.1,b),at=t.v(ft[0],A+v,ft[1],rt/dt,F/dt,st/dt,E[0]*1.1,E[1]*1.1,E[2]*1.1,b);return[zt,Ut,Qt,at]},N=B(_,w,H,k,-1),V=B(R,L,k,H,1),O=q=>{let[Q,P,ft]=q.map(zt=>[t.p[zt*3],t.p[zt*3+1],t.p[zt*3+2]]),et=P[0]-Q[0],F=P[1]-Q[1],J=P[2]-Q[2],rt=ft[0]-Q[0],st=ft[1]-Q[1],dt=ft[2]-Q[2];return J*rt-et*dt>0};for(let q of[N,V])O(q)?(t.tri(q[0],q[1],q[2]),t.tri(q[0],q[2],q[3])):(t.tri(q[0],q[2],q[1]),t.tri(q[0],q[3],q[2]));for(let[q,Q,P,ft]of[[_,L,k,-1],[w,R,H,1]]){let et=h*ft,F=u*ft,J=t.v(q[0],A,q[1],et,0,F,i[0],i[1],i[2],b),rt=t.v(Q[0],A,Q[1],et,0,F,i[0],i[1],i[2],b),st=t.v(P[0],A+v,P[1],et,0,F,i[0],i[1],i[2],b);t.tri(J,rt,st),t.tri(J,st,rt)}}setNight(t){if(this.adMat&&(this.adMat.emissiveIntensity=.05+t*.75),Math.abs((this.night||0)-t)>.02)for(let e of this.live.values())e.signMat&&(e.signMat.emissiveIntensity=.05+t*.9);this.night=t,tn.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),l=Math.floor((e-n)/s),c=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,d=e;for(let f=o;f<=a;f++)for(let g=l;g<=c;g++){let m=this.collision.get(Oe(f,g));if(m)for(let x=0;x<m.length;x+=4){let p=m[x],y=m[x+1],M=m[x+2],v=m[x+3],S=M-p,E=v-y,b=S*S+E*E||1e-6,A=((u-p)*S+(d-y)*E)/b;A=A<0?0:A>1?1:A;let _=p+S*A,w=y+E*A,R=u-_,L=d-w,k=Math.hypot(R,L);if(k<n&&k>1e-5){let H=n-k;u+=R/k*H,d+=L/k*H,i.nx+=R/k,i.nz+=L/k,h=!0}}}if(h){i.x=u-t,i.z=d-e;let f=Math.hypot(i.nx,i.nz)||1;i.nx/=f,i.nz/=f}return h}};var Ks=class r extends Z{constructor(){let t=r.SkyShader,e=new _e({name:t.name,uniforms:$n.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:rn,depthWrite:!1});super(new Tt(1,1,1),e),this.isSky=!0}};Ks.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calcuation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorbtion + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisk = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta );
			L0 += ( vSunE * 19000.0 * Fex ) * sundisk;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			vec3 retColor = pow( texColor, vec3( 1.0 / ( 1.2 + ( 1.2 * vSunfade ) ) ) );

			gl_FragColor = vec4( retColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var la=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new Yi,this.bgCam=new $e(60,1,50,2e5),this.sky=new Ks,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85;for(let s of[this.sky])s.material.fragmentShader=s.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min( retColor * 0.42, vec3( 24.0 ) ), 1.0 );");this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new I,this.sun=new Ko(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new Zo(12572927,6971464,1),e.add(this.hemi),e.fog=new Uo(13162208,300,2600),this.pmrem=new Hs(t),this.envScene=new Yi,this.envSky=new Ks,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=wn(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new ie;i.setAttribute("position",new fe(n,3)),this.starMat=new Zi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new ui(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=wn(99),e=260,n=70,i=new Ce(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let d=0,f=1,g=1/9e3;for(let m=0;m<6;m++)d+=f*(Math.sin(h*g+m*1.7)*Math.cos(u*g*1.3-m)+Math.sin((h+u)*g*.7+m*3.1)*.6),f*=.5,g*=2.1;return d};for(let h=0;h<s.count;h++){let u=s.getX(h),f=s.getZ(h)+26e3+13e3,g=f-26e3,m=Math.min(1,Math.max(0,(g+6e3)/14e3)),x=Math.exp(-((g-16e3)**2)/(2*9e3**2)),p=m*m*1100+x*4100*(.75+.35*o(u,f))+Math.abs(o(u*1.7,f*1.7))*600*m;p*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,p-120),f)}i.computeVertexNormals();let a=new Ce(22e4,3e4,160,20).rotateX(-Math.PI/2),l=a.attributes.position;for(let h=0;h<l.count;h++){let u=l.getX(h),d=l.getZ(h)-7e4,f=Math.max(0,(Math.abs(d+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,d*.6)))*Math.min(1,-(d+55e3)/12e3));l.setXYZ(h,u,f-80,d)}a.computeVertexNormals(),this.mtnMat=new _e({uniforms:{sunDir:{value:new I(0,1,0)},fogCol:{value:new bt(13162208)},light:{value:1},camPos:{value:new I}},vertexShader:`varying vec3 vN; varying vec3 vW;
        void main(){ vN = normal; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform vec3 sunDir; uniform vec3 fogCol; uniform float light; uniform vec3 camPos; varying vec3 vN; varying vec3 vW;
        float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
        void main(){
          vec3 n = normalize(vN);
          float slope = 1.0 - n.y;
          float snowLine = 2050.0 + 500.0*sin(vW.x*0.0006) + 200.0*h(floor(vW.xz/300.0));
          float snow = smoothstep(snowLine-250.0, snowLine+150.0, vW.y + slope*-900.0);
          vec3 rock = mix(vec3(0.42,0.38,0.33), vec3(0.32,0.30,0.29), smoothstep(0.2,0.6,slope));
          vec3 grass = vec3(0.45,0.47,0.30);
          vec3 c = mix(grass, rock, smoothstep(700.0, 1800.0, vW.y));
          c = mix(c, vec3(1.0,1.02,1.06), snow);
          float d = max(0.0, dot(n, normalize(sunDir)));
          vec3 col = c * (0.35 + 0.9*d) * light;
          float dist = length(vW.xz - camPos.xz);
          float haze = 1.0 - exp(-dist/110000.0);
          col = mix(col, fogCol, clamp(haze*0.75, 0.0, 0.5));
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,fog:!1}),this.mountains=new Z(i,this.mtnMat),this.hills=new Z(a,this.mtnMat);let c=new Z(new Ce(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);c.position.y=-6,this.plain=c,this.bg.add(this.mountains,this.hills,c),this._clouds()}_clouds(){this.cloudMat=new _e({uniforms:{uTime:tn.uTime,sunDir:{value:new I(0,1,0)},day:{value:1},fogCol:{value:new bt},cover:{value:.58},camPos:{value:new I}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float uTime; uniform vec3 sunDir; uniform float day; uniform vec3 fogCol; uniform float cover; uniform vec3 camPos; varying vec3 vW;
        float hash(vec2 p){ return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453); }
        float noise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          return mix(mix(hash(i),hash(i+vec2(1,0)),f.x), mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x), f.y); }
        float fbm(vec2 p){ float s=0.0, a=0.5; for(int i=0;i<6;i++){ s+=a*noise(p); p*=2.03; a*=0.5; } return s; }
        void main(){
          vec2 p = vW.xz/9000.0 + vec2(uTime*0.004, uTime*0.0015);
          float n = fbm(p);
          float d = smoothstep(cover, cover+0.28, n);
          if (d < 0.01) discard;
          float shade = fbm(p + sunDir.xz*0.05);
          float light = clamp(0.65 + (n - shade)*2.5, 0.35, 1.15);
          vec3 sunC = mix(vec3(1.0,0.62,0.4), vec3(1.0), smoothstep(0.0,0.35,sunDir.y));
          vec3 col = mix(vec3(0.55,0.6,0.7), sunC, light) * (0.08 + 0.95*day);
          float dist = length(vW.xz - camPos.xz);
          float fade = 1.0 - smoothstep(25000.0, 70000.0, dist);
          col = mix(fogCol, col, 0.35 + 0.65*(1.0 - smoothstep(8000.0, 60000.0, dist)));
          gl_FragColor = vec4(col, d*0.92*fade);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,transparent:!0,depthWrite:!1,fog:!1,side:Ee}),this.cloudsMesh=new Z(new Ce(16e4,16e4,1,1).rotateX(-Math.PI/2),this.cloudMat),this.cloudsMesh.position.y=2600,this.bg.add(this.cloudsMesh)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let c=Ie.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-Ie.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*c,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),c<.15&&(this.sun.intensity=.55*(1-c/.15)+3.2*c,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*c,this.hemi.color.setRGB(.55+.2*c,.62+.22*c,.85+.1*c).multiplyScalar(.5+.5*c),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+c),.38*(.3+c),.3*(.3+c));let u=new bt().setRGB(.55,.66,.8).lerp(new bt(.92,.66,.45),h*.55).multiplyScalar(.08+.92*c);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*c,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night,this.cloudMat.uniforms.sunDir.value.copy(this.sunDir),this.cloudMat.uniforms.day.value=c,this.cloudMat.uniforms.fogCol.value.copy(u),this.cloudMat.uniforms.camPos.value.copy(t.position),this.cloudsMesh.position.x=t.position.x,this.cloudsMesh.position.z=t.position.z;let d=this.sunDir.y>.05?this.sunDir:new I(-.4,.8,.3).normalize();return this.sun.position.set(e.x+d.x*400,d.y*400,e.z+d.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*c),{day:c,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function zv(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i],o=r[(i-1+n)%n],a=r[(i+1)%n],l=[o[0]-s[0],o[1]-s[1]],c=[a[0]-s[0],a[1]-s[1]],h=Math.hypot(...l),u=Math.hypot(...c),d=Math.min(t,h*.45,u*.45);if(s[1]<.5&&(o[1]<.5||a[1]<.5)||d<.01){e.push(s);continue}let g=[s[0]+l[0]/h*d,s[1]+l[1]/h*d],m=[s[0]+c[0]/u*d,s[1]+c[1]/u*d];for(let x=0;x<=4;x++){let p=x/4,y=1-p;e.push([y*y*g[0]+2*y*p*s[0]+p*p*m[0],y*y*g[1]+2*y*p*s[1]+p*p*m[1]])}}return e}function vh(r,t,e=.05,n={}){let i=n.fillet?zv(r,n.fillet):r,s=new Un;s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1]);s.closePath();let o=new qn(s,{depth:t-e*2,steps:n.steps||1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});if(o.rotateY(-Math.PI/2),o.translate((t-e*2)/2,0,0),n.shape){let{L:a,W:l,belt:c,top:h,taper:u=.12,tumble:d=.14}=n.shape,f=o.attributes.position;for(let g=0;g<f.count;g++){let m=f.getX(g),x=f.getY(g),p=f.getZ(g),y=Math.min(1,Math.abs(p)/(a/2)),M=1-u*Math.pow(y,3);x>c&&(M*=1-d*Math.min(1,(x-c)/Math.max(.1,h-c))),f.setX(g,m*M),Math.abs(m)>l*.3&&x>c*.7&&f.setY(g,x-.02*Math.pow(Math.abs(m)/(l/2),4))}o.computeVertexNormals()}return o}var je=(r,t,e,n,i,s)=>new Tt(r,t,e).translate(n,i,s),Lv={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},Dv=1844524,Uv=1447446,kv=12106944,ca=2105892,Nv=13159632;function An(r,t={}){let e=Lv[r],n=[],i=[],s=[],o=e.W,a=e.cabin[0][1],l=e.roof[2][1],c=r==="bus"||r==="truck",h=c?null:{L:e.L,W:o,belt:a*.75,top:l,taper:r==="van"?.06:.13,tumble:.05};n.push(vh(e.body,o,.08,{fillet:c?.08:.22,steps:4,shape:h}));let u=o*e.cabinW,d=c?null:{L:e.L,W:u,belt:a,top:l,taper:.1,tumble:r==="van"?.05:.2};if(i.push(Dt(vh(e.cabin,u,.04,{fillet:c?.05:.12,steps:3,shape:d}),Dv)),n.push(vh(e.roof,u+.03,.02,{fillet:.04,steps:2,shape:d&&{...d,W:u+.03}})),!c)for(let[_,w,R]of Uf(e)){let L=new Bt(e.wr*1.18,e.wr*1.18,.06,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2);i.push(Dt(L.translate(Math.sign(_)*(o/2-.02),w,R),657930))}if(!c)for(let _ of[-1,1])i.push(Dt(je(.012,a-e.body[0][1]-.15,.02,_*(o/2+.003),(a+e.body[0][1])/2,e.cabin[e.cabin.length-2][0]-.1),1118481)),i.push(Dt(je(.012,a-e.body[0][1]-.15,.02,_*(o/2+.003),(a+e.body[0][1])/2,(e.cabin[0][0]+e.cabin[1][0])/2+.2),1118481)),i.push(Dt(je(.02,.05,e.L*.5,_*(o/2+.005),a-.03,0),10133670));if(e.cargo){let[_,w,R,L]=e.cargo;n.push(je(o,L-R,w-_,0,(R+L)/2,(_+w)/2))}if(r==="van"||r==="bus"){let _=r==="bus"?7:4,w=e.cabin[0][0],R=e.cabin[3][0]-(r==="van"?.7:.2);for(let L=0;L<=_;L++){let k=w+(R-w)*L/_;n.push(je(u+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,k+.06))}}let f=e.body[0][1],g=e.head.z,m=e.tail.z;i.push(Dt(je(o+.02,.16,.12,0,f+.12,g-.02),ca)),i.push(Dt(je(o+.02,.16,.12,0,f+.12,m+.02),ca)),i.push(Dt(je(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,g+.01),789516)),i.push(Dt(je(o+.03,.1,e.L*.55,0,f+.04,0),ca));let x=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let _ of[-1,1])i.push(Dt(je(.2,.12,.1,_*(o/2+.08),e.cabin[0][1]+.12,x-.1),ca));i.push(Dt(je(.52,.12,.02,0,f+.3,g+.06),15921906)),i.push(Dt(je(.52,.12,.02,0,f+.42,m-.06),15921906));let p=e.head,y=e.tail;for(let _ of[-1,1])s.push(Dt(je(p.w,p.h,.06,_*p.x,p.y,p.z),16774880)),s.push(Dt(je(y.w,y.h,.06,_*y.x,y.y,y.z),16718352,.9));if(t.taxi&&i.push(Dt(je(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(Dt(je(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(Dt(je(1.6,.3,.05,0,2.55,5.92),16747024)),t.trolley)for(let _ of[-1,1]){let w=new Tt(.07,.07,5.6).rotateX(-.5).translate(_*.32,4.43,-2.4);i.push(Dt(w,1710618)),i.push(Dt(je(.3,.25,.6,_*.32,3.2,.2),3355443))}let M=Bv(e.wr,r==="bus"||r==="truck"?.32:.23),v=Uf(e),S=an(v.map(([_,w,R])=>M.clone().translate(_,w,R))),E=an(n.map(_=>Dt(_,16777215))),b=an([...i,S]),A=an(s);return{paint:E,detail:b,lights:A,wheel:M,wheelPos:v,spec:e,detailNoWheels:an(i)}}function Uf(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function Bv(r,t){let e=Dt(new Bt(r,r,t,16).rotateZ(Math.PI/2),Uv),n=Dt(new Bt(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),kv),i=Dt(new Bt(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),Nv),s=[];for(let o=0;o<5;o++){let a=new Tt(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(Dt(a,9080466))}return an([e,n,i,...s])}function yh(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new ze(t);return n.colorSpace=ye,n.anisotropy=4,n}var _h=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var ha=class{constructor(t,e="sedan",n){this.scene=t,this.group=new Yt,this.body=new Yt,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(p=>{p.geometry&&p.geometry.dispose()});let n=An(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new Ci({color:i,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.06,vertexColors:!0,envMapIntensity:1.2});let s=new yt({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new yt({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new Z(n.paint,this.paintMat);o.castShadow=!0;let a=new Z(n.detailNoWheels,s);a.castShadow=!0,this.paintMesh=o,this.detailMesh=a,this.damage=0,this.dents=0,this.lightMesh=new Z(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let l=n.spec;this.brakeMat=new de({color:16719888,transparent:!0,opacity:0,blending:He,depthWrite:!1});for(let x of[-1,1]){let p=new Z(new Ce(l.tail.w*2.2,l.tail.h*4),this.brakeMat);p.position.set(x*l.tail.x,l.tail.y,l.tail.z-.06),p.rotation.y=Math.PI,this.body.add(p)}this.flareMat=new de({color:16773840,transparent:!0,opacity:0,blending:He,depthWrite:!1});for(let x of[-1,1]){let p=new Z(new Ri(.45,16),this.flareMat);p.position.set(x*l.head.x,l.head.y,l.head.z+.08),this.body.add(p)}this.plateText||(this.plateText="01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B");let c=yh(this.plateText),h=new de({map:c});this.plateMat=h;let u=new Z(new Ce(.52,.12),h);u.position.set(0,l.body[0][1]+.3,l.head.z+.075);let d=new Z(new Ce(.52,.12),h);d.position.set(0,l.body[0][1]+.42,l.tail.z-.075),d.rotation.y=Math.PI,this.body.add(u,d);let f=new Z(new Se(.13,10,8),new yt({color:2760736}));if(f.position.set(.38,l.cabin[0][1]+.38,(l.cabin[1][0]+l.cabin[2][0])/2+.25),this.body.add(f),this.wheels)for(let x of this.wheels)this.group.remove(x.pivot);this.wheels=[];let g=new yt({vertexColors:!0,roughness:.6,metalness:.3});this.wheelMat=g;for(let[x,p,y]of n.wheelPos){let M=new Yt;M.position.set(x,p,y);let v=new Z(n.wheel,g);v.castShadow=!0,M.add(v),this.group.add(M),this.wheels.push({pivot:M,mesh:v,front:y>0})}this.flames=[];let m=new de({color:6728447,transparent:!0,opacity:.85,blending:He,depthWrite:!1});for(let x of[-1,1]){let p=new Z(new Xn(.11,.9,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.45),m);p.position.set(x*l.W*.24,l.body[0][1]+.05,l.tail.z-.05),p.visible=!1,this.body.add(p),this.flames.push(p)}this.flameMat=m,this._applyCustom(),this.spot?(this.spot.position.set(0,.8,l.head.z),this.spotTarget.position.set(0,0,l.head.z+25)):(this.spot=new Jo(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,l.head.z),this.spotTarget=new Be,this.spotTarget.position.set(0,0,l.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=l.mass,this.power=l.power*745.7,this.vmax=l.vmax/3.6,this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(l.L*l.L+l.W*l.W)/12*1.1,this.a=l.wb/2+(l.wbOff||0),this.b=l.wb/2-(l.wbOff||0),this.radius=l.W/2+.05,this.color=i}dent(t,e,n){let i=t-this.x,s=e-this.z,o=Math.cos(this.h),a=Math.sin(this.h),l=i*o-s*a,c=i*a+s*o,h=1.25,u=this.spec.roof[2][1];for(let d of[this.paintMesh,this.detailMesh]){let f=d.geometry.attributes.position;for(let g=0;g<f.count;g++){let m=f.getX(g),x=f.getY(g),p=f.getZ(g),y=Math.hypot(m-l,p-c);if(y>h||x>u+.1)continue;let M=Math.pow(1-y/h,2)*n,v=Math.hypot(m,p*.35)||1;f.setXYZ(g,m-m/v*M*.6-Math.sign(l)*0,x-M*.15*(x>.9?1:.3),p-Math.sign(p)*M*(Math.abs(c)>this.spec.L*.3?.5:.1))}f.needsUpdate=!0}this.dents++}repair(){this.setType(this.type,this.color)}_applyCustom(){let t=this.custom||(this.custom={}),e=this.spec;if(this.neon&&(this.group.remove(this.neon),this.neon=null),t.neon){let n=this._neonTex||(this._neonTex=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),o=s.createRadialGradient(64,64,10,64,64,64);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,128,128),new ze(i)})());this.neon=new Z(new Ce(e.W*1.9,e.L*1.35).rotateX(-Math.PI/2),new de({map:n,color:t.neon,transparent:!0,opacity:.9,blending:He,depthWrite:!1})),this.neon.position.y=.14,this.neon.material.polygonOffset=!0,this.neon.material.polygonOffsetFactor=-8,this.neon.material.polygonOffsetUnits=-30,this.neon.renderOrder=2,this.group.add(this.neon)}if(this.spoiler&&(this.body.remove(this.spoiler),this.spoiler=null),t.spoiler&&!["van","bus","truck"].includes(this.type)){let n=new Yt,i=new Z(new Tt(e.W*.95,.05,.35),this.paintMat);i.position.set(0,.28,0),n.add(i);for(let o of[-1,1]){let a=new Z(new Tt(.05,.28,.12),new yt({color:1118481}));a.position.set(o*e.W*.3,.14,0),n.add(a)}let s=e.body.reduce((o,a)=>a[0]<e.L*-.3?Math.max(o,a[1]):o,.8);n.position.set(0,s,e.tail.z+.3),n.traverse(o=>o.castShadow=!0),this.body.add(n),this.spoiler=n}this.wheelMat&&this.wheelMat.color.setHex(t.rims??16777215)}setPlate(t){this.plateText=String(t).toUpperCase().slice(0,12),this.plateMat&&(this.plateMat.map.dispose(),this.plateMat.map=yh(this.plateText),this.plateMat.needsUpdate=!0)}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let l=0;l<3;l++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=this.assists||(this.assists={abs:!0,tcs:!0,esc:!0,steerAssist:!0,sens:1,manual:!1}),a=Math.sin(this.h),l=Math.cos(this.h),c=-Math.cos(this.h),h=Math.sin(this.h),u=this.vx*a+this.vz*l,d=this.vx*c+this.vz*h,f=9.81,g=this.mass,m=Math.abs(u),x=this.surface??1,p=.6/(1+m/14)*(.75+.5*o.sens),y=-e.steer*p;o.steerAssist&&!e.hand&&m>6&&this.rearSlip&&(y+=Ie.clamp(this.rearSlip*.55,-.25,.25));let M=(e.steer===0?5.5:4.2)/(1+m/45);this.steer+=Ie.clamp(y-this.steer,-M*t,M*t);let v=this.steer,S=this._gearbox(e),E=0,b=e.throttle,A=e.brake;this.braking=!1,this.reversing=!1;let _=m<.6;A>0&&_?this.stopHold=(this.stopHold||0)+t:A===0&&(this.stopHold=0);let w=A>0&&(u<-.3||_&&this.stopHold>.2);if(this.nitro===void 0&&(this.nitro=1),this.boosting=!!(e.nitro&&this.nitro>.01&&b>0&&u>1),this.boosting?(E+=g*5.2,this.nitro=Math.max(0,this.nitro-t*.2)):this.nitro=Math.min(1,this.nitro+t*.02),b>0){if(u<-.5)E+=1*g*f*b,this.braking=!0;else if(!this.limiter){let et=this.power*S/Math.max(3,u)*b,F=(o.tcs?.92:1.15)*g*f*.6*x;!o.tcs&&et>F&&m<25?this.wheelspin=Math.min(1,(et-F)/F):this.wheelspin=0,E+=Math.min(F,et)}}else this.wheelspin=0;if(A>0){if(w)this.reversing=!0,u>-8&&(E-=g*3.4*A);else if(u>.3){let et=o.abs?1:1.12;E-=et*g*f*A*x,this.braking=!0,!o.abs&&A>.9&&m>4?this.locked=!0:this.locked=!1}}else this.locked=!1;e.hand&&(E-=Math.sign(u)*Math.min(Math.abs(u)*g*3,.55*g*f)),E-=this.drag*u*Math.abs(u)+(.015*g*f*Math.sign(u)+4*u)*Math.min(1,Math.abs(u))*(x<1?3.5:1),b===0&&A===0&&m<.4&&(u*=.85);let R=this.a,L=this.b,k=R+L,H=Ie.clamp(g*(this.accLong||0)*.55/k,-g*f*.3,g*f*.3),B=g*f*L/k-H,N=g*f*R/k+H,V=1.08*x,O=0,q=0;if(m>1.2){let et=Math.atan2(d-this.r*R,m)+v*Math.sign(u),F=Math.atan2(d+this.r*L,m),J=10*B,rt=11*N,st=Math.min(.9,Math.abs(E)/(V*(B+N))*(b>0?1.2:.6)),dt=Math.sqrt(1-st*st);e.hand&&(dt=.38),this.wheelspin&&(dt*=1-.5*this.wheelspin);let zt=this.locked?.25:1,Ut=V*B*zt,Qt=V*N*dt;O=-Ut*Math.tanh(J*et/Ut),q=-Qt*Math.tanh(rt*F/Qt),this.rearSlip=F,this.slip=Math.max(Math.abs(F)*(e.hand?2.4:1.6),Math.abs(et)*.7,this.wheelspin*.8,this.locked?.6:0)*Math.min(1,m/8);let at=-O*Math.cos(v)*R+q*L;if(this.r+=at/this.inertia*t,this.r*=1-.8*t,o.esc&&!e.hand){let gt=V*f/Math.max(m,4)*1.12;Math.abs(this.r)>gt&&(this.r+=(Math.sign(this.r)*gt-this.r)*Math.min(1,t*8)),Math.abs(F)>.12&&(d*=1-Math.min(.5,t*2.5))}}else this.r=u*Math.tan(v)/k,d*=.5,this.slip=0,this.rearSlip=0;let Q=O*Math.cos(v)+q;if(m<=1.2){let et=u+E/g*t;this.vx=a*et+c*d,this.vz=l*et+h*d,b===0&&!w&&Math.abs(et)<.2&&(this.vx=this.vz=0,this.r=0)}else{let et=u+E/g*t,F=d+Q/g*t;this.vx=a*et+c*F,this.vz=l*et+h*F}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=this.accLong===void 0?0:this.accLong+(E/g-this.accLong)*Math.min(1,t*10),this.accLat=Q/g,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let P=this.spec.L,ft={};for(let et of[P*.32,0,-P*.32]){let F=this.x+Math.sin(this.h)*et,J=this.z+Math.cos(this.h)*et;if(n.collide(F,J,this.radius,ft)){this.x+=ft.x,this.z+=ft.z;let rt=this.vx*ft.nx+this.vz*ft.nz;rt<0&&(this.vx-=ft.nx*rt*1.25,this.vz-=ft.nz*rt*1.25,this.vx*=.94,this.vz*=.94,this.r+=(et>0?1:-1)*rt*.02*Math.sign(ft.nx*Math.cos(this.h)-ft.nz*Math.sin(this.h)),-rt>2&&(s&&s(-rt,"wall",null,F-ft.nx*this.radius,J-ft.nz*this.radius,ft.nx,ft.nz),this.damage=Math.min(100,this.damage+-rt*.6)))}}i&&i.collidePlayer(this,s),this.remotes&&this.remotes.collide(this,s)}shiftUp(){this.gear<6&&(this.gear=Math.max(1,this.gear)+1,this.shiftT=.25)}shiftDown(){this.gear>1&&(this.gear--,this.shiftT=.2)}_gearbox(t){let e=Math.max(0,this.u||0),n=[0,3.6,2.2,1.55,1.18,.95,.78],i=3.6,s=this.spec.wr;this.gear>=1||(this.gear=1);let o=h=>e/s*n[h]*i*60/(2*Math.PI),a=o(this.gear);if(!(this.assists&&this.assists.manual)){let h=t.throttle>.5?6300:3800;a>h&&this.gear<6&&(this.gear++,this.shiftT=.18),a<2e3&&this.gear>1&&this.gear--,a=o(this.gear)}if(this.limiter=a>7200,this.rpmTarget=Math.min(7300,Math.max(900,a)),this.shiftT>0)return this.shiftT-=1/180,.25;let l=Math.min(1,a/6500),c=this.damage>=100?.3:1-this.damage/300;return(.72+.38*Math.sin(l*Math.PI))*c}_visual(t,e){if(this.flames){for(let s of this.flames)if(s.visible=!!this.boosting,s.visible){let o=.8+Math.random()*.5;s.scale.set(1,1,o)}}this.flameMat&&this.flameMat.color.setHex(Math.random()<.5?6728447:10079487),this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.gearLabel=this.reversing?"R":this.speed<.3&&!this.throttleOn?"N":String(this.gear);let n=Ie.clamp(-(this.accLong||0)*.006,-.05,.05),i=Ie.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((n-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((i-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let s of this.wheels)s.mesh.rotation.x=this.spin,s.front&&(s.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.75:this.night?.12:0,this.lightMat.emissiveIntensity=this.night?2.2:this.braking?1.2:.3,this.flareMat.opacity=this.night?.55:0,this.spot.intensity=this.night?60:0,this.slip>.22&&this.speed>6||this.wheelspin>.2&&this.speed>1?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new ie;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new fe(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new fe(n,1)),this.skidMesh=new Z(e,new de({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],l=o-i,c=a-s,h=Math.hypot(l,c);if(h<.05||h>5)continue;let u=-c/h*.11,d=l/h*.11,f=this.skidI++%this.skidN,g=.075;this.skidPos.set([i-u,g,s-d,i+u,g,s+d,o-u,g,a-d,o+u,g,a+d],f*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new ze(e);for(let s=0;s<160;s++){let o=new _n(new dn({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},ua=class{constructor(t){this.cam=t,this.mode=0,this.pos=new I(0,5,-10),this.look=new I,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,l,c,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,d=i*.7+h*.3,f=s*.7+u*.3,g=Math.atan2(d,f)+n,m=Math.sin(g),x=Math.cos(g),p=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let M=(this.mode===0?6.8:11)*p+o*.03,v=(this.mode===0?2.3:4)*p+a.cabin[1][1]*.4;l=new I(e.x-m*M,v,e.z-x*M),c=new I(e.x+i*4,1.1*p,e.z+s*4);let S=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(l,S)}else if(this.mode===2)l=new I(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),c=new I(e.x+i*30,1.2,e.z+s*30),this.pos.copy(l);else{this.lag+=t*.15;let M=this.lag;l=new I(e.x+Math.sin(M)*9,1.2+Math.sin(M*.7)*.6,e.z+Math.cos(M)*9),c=new I(e.x,.9,e.z),this.pos.lerp(l,1-Math.exp(-t*3))}this.look.lerp(c,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let y=(this.mode===2?(this.baseFov||62)+10:this.baseFov||62)+Math.min(16,o*.2);this.cam.fov+=(y-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var kf=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.04],["trolley",.04],["truck",.04]],Nf=[3,6,4,2.2,.6,.15,.02],Bf=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,fa=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new yt({vertexColors:!0,metalness:.5,roughness:.35}),s=new yt({vertexColors:!0,metalness:.3,roughness:.3}),o=new de({vertexColors:!0});for(let[a]of kf){let l=An(a==="taxi"?"sedan":a==="trolley"?"bus":a,{taxi:a==="taxi",trolley:a==="trolley"}),c=200,h=new Pe(l.paint,i,c),u=new Pe(l.detail,s,c),d=new Pe(l.lights,o,c);for(let f of[h,u,d])f.count=0,f.frustumCulled=!1,f.instanceMatrix.setUsage(Ys),t.add(f);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new bt),d.setColorAt(0,new bt),this.models[a]={p:h,d:u,l:d,spec:l.spec,cap:c,n:0}}this._busStops(),this._signals(),this.M=new ne,this.Q=new Ne,this.V=new I,this.S=new I(1,1,1),this.Y=new I(0,1,0),this.C=new bt,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,l=>l.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new Pe(If(),new yt({vertexColors:!0,roughness:.6}),e),i=new de({vertexColors:!0});this.lamps=[0,1,2].map(u=>new Pe(zf(u),i,e));let s={},o=new ne,a=new Ne,l=new I,c=new I(1,1,1),h=new I(0,1,0);t.forEach((u,d)=>{let f=u.e,g=f.w/2+.9;this.map.sample(f,u.dir,u.stop,g,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(l.set(s.x,.12,s.z),a,c),n.setMatrixAt(d,o);for(let m of this.lamps)m.setMatrixAt(d,o),m.setColorAt(d,new bt(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new bt(3,.15,.08),new bt(.18,.03,.02)],s=[new bt(3,1.6,.1),new bt(.18,.12,.02)],o=[new bt(.1,3,.8),new bt(.02,.15,.06)];for(let a=0;a<n.length;a++){let l=n[a],c=this.map.signalState(l.cluster,l.group,e);this.lamps[0].setColorAt(a,c==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,c==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,c==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of kf)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=Nf[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(Bf.test(n[0])||Bf.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),l=Math.floor(e/s),c=[],h=0;for(let u=a-o;u<=a+o;u++)for(let d=l-o;d<=l+o;d++){let f=this.map.chunks.get(Oe(u,d));if(f)for(let g of f.edges){if(g.cls>5)continue;let m=this._edgeWeight(g);m<=0||(c.push(g,m),h+=m)}}if(!h)return!1;for(let u=0;u<6;u++){let d=Math.random()*h,f=null;for(let _=0;_<c.length;_+=2)if(d-=c[_+1],d<=0){f=c[_];break}f||(f=c[0]);let g=f.ow||Math.random()<.5?0:1,m=Math.random()*f.len,x={};this.map.sample(f,g,m,0,x);let p=Math.hypot(x.x-t,x.z-e);if(p<n||p>i)continue;let y=Math.floor(Math.random()*f.lanes),M=f.id*2+g;if(this.cars.some(_=>_.de===M&&Math.abs(_.s-m)<12))continue;let v=this._pickType(),S=this.models[v];if(S.n>=S.cap)continue;S.n++;let E=fh[f.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="trolley"||v==="truck"?.85:1),b={type:v,spec:S.spec,e:f,dir:g,de:M,s:m,lane:v==="van"||v==="bus"||v==="trolley"?f.lanes-1:y,v:E*.7,v0:E,color:v==="van"?Math.random()<.8?16053492:15912992:v==="trolley"?Math.random()<.5?2779832:14212320:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:_h[Math.floor(Math.random()*_h.length)],x:x.x,z:x.z,h:Math.atan2(x.dx,x.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};b.next=this._chooseNext(b);let A={};return this.map.sample(f,g,m,this.map.laneOffset(f,b.lane),A),b.x=A.x,b.z=A.z,this.cars.push(b),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let l=this.map.edges[a>>1];if(l.cls>5)continue;let c={};this.map.sample(l,a&1,.5,0,c);let h=n.dx*c.dx+n.dz*c.dz,u=(h>.7?4:h>-.3?1:.15)*(Nf[l.cls]+.2);l.cls===5&&(u*=.2),(t.type==="bus"||t.type==="trolley"||t.type==="truck")&&(u*=l.cls<=2?3:.2),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),l=0;for(;this.cars.length<a&&l<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)l++;for(let m=this.cars.length-1;m>=0;m--){let x=this.cars[m];(Math.abs(x.x-s)>760||Math.abs(x.z-o)>760)&&this._remove(m)}let c=new Map;for(let m of this.cars){let x=c.get(m.de);x||c.set(m.de,x=[]),x.push(m)}for(let m of c.values())m.sort((x,p)=>x.s-p.s);let h=Math.sin(e.h),u=Math.cos(e.h),d=e.speed,f=e.spec.L;this.honks.length=0;let g=this.map;for(let m of this.cars){let x=m.e,p=x.len,y=m.spec.L,M=1e9,v=0,S=c.get(m.de);for(let et=0;et<S.length;et++){let F=S[et];if(F===m||F.s<=m.s||F.lane!==m.lane)continue;let J=F.s-m.s-(F.spec.L+y)/2;J<M&&(M=J,v=F.v);break}if(M>200&&m.next>=0){let et=c.get(m.next);if(et&&et.length){let F=et[0],J=p-m.s+F.s-(F.spec.L+y)/2;J<M&&(M=J,v=F.v)}}m.redAhead=!1;for(let et of x.signals){if(et.dir!==m.dir)continue;let F=et.stop-m.s;if(F<-.5||F>120)continue;let J=g.signalState(et.cluster,et.group,this.time);if(J==="R"||J==="Y"&&F>m.v*m.v/7+2){let rt=F-y/2;rt<M&&(M=Math.max(.01,rt),v=0,m.redAhead=!0)}}if((m.type==="van"||m.type==="bus"||m.type==="trolley")&&m.stopT<=0){let et=this.stopsOn.get(m.de);if(et)for(let F of et){let J=F-m.s;if(J>0&&J<60&&m.servedStop!==m.de*1e4+Math.round(F)){let rt=J-y/2+1.5;rt<M&&(M=Math.max(.01,rt),v=0),J<y/2+1.5&&m.v<.5&&(m.stopT=6+Math.random()*8,m.servedStop=m.de*1e4+Math.round(F))}}}m.stopT>0&&(m.stopT-=t,M=.01,v=0);let E=Math.sin(m.h),b=Math.cos(m.h);{let et=s-m.x,F=o-m.z,J=et*E+F*b,rt=Math.abs(et*b-F*E);if(J>0&&J<45&&rt<2.2){let st=J-(f+y)/2;st<M&&(M=Math.max(.01,st),v=Math.max(0,d*(h*E+u*b)),m.playerBlock=!0)}else m.playerBlock=!1}if(n)for(let et of n.crossers){let F=et.x-m.x,J=et.z-m.z,rt=F*E+J*b,st=Math.abs(F*b-J*E);if(rt>0&&rt<30&&st<2.6){let dt=rt-y/2-1.5;dt<M&&(M=Math.max(.01,dt),v=0)}}if(i)for(let et of i){let F=et.x-m.x,J=et.z-m.z,rt=F*E+J*b,st=Math.abs(F*b-J*E);if(rt>0&&rt<40&&st<et.r){let dt=rt-y/2-et.r;dt<M&&(M=Math.max(.01,dt),v=0)}}let A=m.v0;if(p-m.s<25&&m.next>=0){let et=g.edges[m.next>>1],F={},J={};g.sample(x,m.dir,p-.5,0,F),g.sample(et,m.next&1,.5,0,J);let rt=F.dx*J.dx+F.dz*J.dz;rt<.8&&(A=Math.min(A,4+8*Math.max(0,rt+.2)))}if(m.bump>0&&(m.bump-=t,A=0),m.wrecked){m.v=0,m.brake=!1;continue}let w=1.6*m.aggr,R=2.5,L=2.2,k=1.3/m.aggr,H=m.v-v,B=L+Math.max(0,m.v*k+m.v*H/(2*Math.sqrt(w*R))),N=w*(1-Math.pow(m.v/Math.max(.1,A),4)-(M<1e8?Math.pow(B/Math.max(.1,M),2):0));for(N=Math.max(-9,N),m.brake=N<-.6||m.v<.3,m.v=Math.max(0,m.v+N*t),M<.3&&m.v>0&&(m.v=Math.min(m.v,.2)),m.s+=m.v*t,m.playerBlock&&m.v<.3&&e.speed<1?(m.wait+=t,m.wait>3.5&&Math.random()<t*.6&&this.honks.push(m)):m.wait=Math.max(0,m.wait-t);m.s>=m.e.len;){if(m.next<0){m.dead=!0;break}m.s-=m.e.len,m.de=m.next,m.e=g.edges[m.de>>1],m.dir=m.de&1,m.lane=m.type==="van"||m.type==="bus"||m.type==="trolley"?m.e.lanes-1:Math.min(m.e.lanes-1,Math.floor(Math.random()*m.e.lanes)),m.v0=fh[m.e.cls]*(.85+Math.random()*.3)*(m.type==="bus"||m.type==="trolley"||m.type==="truck"?.85:1),m.next=this._chooseNext(m),m.transit=!0}let V=this._o||(this._o={});g.sample(m.e,m.dir,Math.min(m.s,m.e.len),g.laneOffset(m.e,m.lane),V),m.transit&&(m.ex=m.x-V.x,m.ez=m.z-V.z,m.transit=!1,Math.hypot(m.ex,m.ez)>12&&(m.ex=m.ez=0));let O=Math.exp(-t*2.5);m.ex*=O,m.ez*=O;let q=V.x+m.ex,Q=V.z+m.ez,P=q-m.x,ft=Q-m.z;if(P*P+ft*ft>1e-4){let F=Math.atan2(P,ft)-m.h;F=Math.atan2(Math.sin(F),Math.cos(F)),m.h+=F*Math.min(1,t*10)}m.x=q,m.z=Q}for(let m=this.cars.length-1;m>=0;m--)this.cars[m].dead&&this._remove(m);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let l in this.models)this.models[l]._i=0;let a=this.night>.5?1.6:.45;for(let l of this.cars){let c=this.models[l.type],h=c._i++;l.wrecked?(this._E=this._E||new Ke,this._E.set(0,l.h+l.wreckYaw,l.wreckRoll,"YXZ"),e.setFromEuler(this._E)):e.setFromAxisAngle(s,l.h),t.compose(n.set(l.x,.03,l.z),e,i),c.p.setMatrixAt(h,t),c.d.setMatrixAt(h,t),c.l.setMatrixAt(h,t),c.p.setColorAt(h,o.setHex(l.color)),l.wrecked?o.multiplyScalar(.45):l.hp<100&&o.multiplyScalar(.75+.25*l.hp/100),(l.wrecked||l.hp<100)&&c.p.setColorAt(h,o);let u=l.wrecked&&performance.now()%1e3<500,d=l.wrecked?u?1.6:.1:l.brake?Math.max(a,1.4):a;c.l.setColorAt(h,o.setRGB(d,d,d))}for(let l in this.models){let c=this.models[l];c.p.count=c.d.count=c.l.count=c._i,c.p.instanceMatrix.needsUpdate=c.d.instanceMatrix.needsUpdate=c.l.instanceMatrix.needsUpdate=!0,c.p.instanceColor&&(c.p.instanceColor.needsUpdate=!0),c.l.instanceColor&&(c.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,l=o.z-t.z;if(a*a+l*l>120)continue;let c=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(c/2.2));for(let d=0;d<u;d++){let f=(d/(u-1)-.5)*(c-h*2),g=o.x+Math.sin(o.h)*f,m=o.z+Math.cos(o.h)*f;for(let[x,p]of i){let y=x-g,M=p-m,v=Math.hypot(y,M),S=s+h;if(v<S&&v>1e-4){let E=y/v,b=M/v,A=S-v;t.x+=E*A,t.z+=b*A;let _=t.vx-Math.sin(o.h)*o.v,w=t.vz-Math.cos(o.h)*o.v,R=_*E+w*b;if(R<0){if(t.vx-=E*R*1.25,t.vz-=b*R*1.25,-R>1.5){o.hp=(o.hp??100)- -R*9;let L=o.hp<=0&&!o.wrecked;L&&(o.wrecked=!0,o.wreckRoll=(Math.random()-.5)*.12,o.wreckYaw=(Math.random()-.5)*.6),e&&e(-R,"car",o,g+E*h,m+b*h,-E,-b,L),t.damage=Math.min(100,t.damage+-R*.6)}o.bump=o.wrecked?1e9:2.5+Math.random()*2,o.v*=.3,o.wait=4}}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var Ff=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],Hf=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],Of=[14200976,13146744,14728864,12094056,13673602],Vf=[1709072,2760728,920586,4864040,6974058],Fv=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],pa=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let l=new Pe(o,a,this.N);return l.count=0,l.frustumCulled=!1,l.castShadow=!0,l.instanceMatrix.setUsage(Ys),t.add(l),l},i=new yt({roughness:.85}),s=16777215;this.torso=n(Dt(new Tt(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(Dt(new Tt(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(Dt(new Se(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(Dt(new Se(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(Dt(new Tt(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(Dt(new Tt(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(Dt(new Tt(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(Dt(new Tt(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(an([Dt(new Bt(.06,.13,.26,8).translate(0,1.88,0),15921126),Dt(new Bt(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new yt({vertexColors:!0,roughness:.9})),this.bag=n(Dt(new Tt(.38,.55,.22).translate(0,.32,0),s),i),this.M=new ne,this.M2=new ne,this.Q=new Ne,this.V=new I,this.S=new I(1,1,1),this.E=new Ke,this.C=new bt,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=Ff[Math.floor(e()*Ff.length)],t.pants=Hf[Math.floor(e()*Hf.length)],t.skin=Of[Math.floor(e()*Of.length)],t.hairC=Vf[Math.floor(e()*Vf.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let l=s-i;l<=s+i;l++)for(let c=o-i;c<=o+i;c++){let h=this.map.chunks.get(Oe(l,c));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let l=0;l<5;l++){let c=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,d=Math.random()*c.len,f={};this.map.sample(c,u,d,(c.w/2+1.4)*h,f);let g=Math.hypot(f.x-t,f.z-e);if(g<30||g>330||this.map.insideBuilding(f.x,f.z,.3))continue;let m={mode:"walk",e:c,dir:u,s:d,side:h,x:f.x,z:f.z,h:Math.atan2(f.dx,f.dz),ex:0,ez:0,dodge:0};return this._style(m),m}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let l={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(l),l}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let g=i-1;g<=i+1;g++)for(let m=s-1;m<=s+1;m++){let x=this.map.chunks.get(Oe(g,m));if(x)for(let p of x.crossings){let y=Math.hypot(p[0]-t,p[1]-e);y>40&&y<220&&o.push(p)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],l=this.map.nearestRoad(a[0],a[1],4);if(!l||l.e.cls>4||l.e.w<5)return null;let c=Math.random()<.5?1:-1,h=l.e.w/2+1.2,u=-l.dz,d=l.dx,f={mode:"cross",x:l.x+u*h*c,z:l.z+d*h*c,tx:l.x-u*h*c,tz:l.z-d*h*c,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return f.h=Math.atan2(f.tx-f.x,f.tz-f.z),this._style(f),f.speed=1.4,f}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=Fv.concat(this.extraZones);for(let g of a){let m=Math.hypot(g.x-i,g.z-s);if(g.active=m<420,!g.active)continue;g.count=g.count||0;let x=3;for(;g.count<g.n&&x-- >0&&o.length<this.N-5;){let p=this._spawnPlaza(g);p&&(o.push(p),g.count++)}}let l=0;for(let g of o)g.mode==="walk"&&l++;let c=l<this.target*.5?30:3;for(;l<this.target&&c-- >0&&o.length<this.N-30;){let g=this._spawnWalker(i,s);g&&(o.push(g),l++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let g=this._spawnCrosser(i,s);g&&o.push(g)}let h=Math.sin(e.h),u=Math.cos(e.h),d=e.speed;this.crossers.length=0;let f={};for(let g=o.length-1;g>=0;g--){let m=o[g];if((Math.abs(m.x-i)>380||Math.abs(m.z-s)>380)&&m.mode!=="plaza"){o[g]=o[o.length-1],o.pop();continue}if(m.mode==="plaza"&&!m.zone.active){m.zone.count--,o[g]=o[o.length-1],o.pop();continue}let p=!1;if(m.mode==="walk"){if(m.s+=m.speed*t,m.s>m.e.len){let _=m.dir?m.e.na:m.e.nb,w=[];for(let R of _.out){let L=this.map.edges[R>>1];L!==m.e&&L.cls>=1&&L.cls<=4&&L.w>=5&&w.push(R)}if(!_.out.length||!w.length)m.dir^=1,m.s=0,m.side=-m.side;else{let R=w[Math.floor(Math.random()*w.length)];m.e=this.map.edges[R>>1],m.dir=R&1,m.s=0,m.trans=!0}}this.map.sample(m.e,m.dir,m.s,(m.e.w/2+1.4)*m.side,f),m.trans&&(m.ex=m.x-f.x-m.ex*0,m.ez=m.z-f.z,m.trans=!1,Math.hypot(m.ex,m.ez)>25&&(m.ex=m.ez=0)),m.ex*=Math.exp(-t*.8),m.ez*=Math.exp(-t*.8);let b=f.x+m.ex,A=f.z+m.ez;m.h=Mh(m.h,Math.atan2(b-m.x,A-m.z),t*6),m.x=b,m.z=A,p=!0}else if(m.mode==="plaza")if(m.idle>0)m.idle-=t;else{let b=m.tx-m.x,A=m.tz-m.z,_=Math.hypot(b,A);if(_<.5){m.idle=1+Math.random()*6;let w=m.zone;for(let R=0;R<6;R++){let L=Math.random()*6.28,k=Math.sqrt(Math.random())*w.r,H=w.x+Math.cos(L)*k,B=w.z+Math.sin(L)*k;if(!this.map.insideBuilding(H,B,.6)){let N=this.map.nearestRoad(H,B,8);if(!N||N.dist>N.e.w/2+.5){m.tx=H,m.tz=B;break}}}}else{let w=Math.min(_,m.speed*.85*t);m.x+=b/_*w,m.z+=A/_*w,m.h=Mh(m.h,Math.atan2(b,A),t*5),p=!0}}else if(m.mode==="cross")if(m.wait>0)m.wait-=t;else{let b=m.tx-m.x,A=m.tz-m.z,_=Math.hypot(b,A);if(_<.3){o[g]=o[o.length-1],o.pop();continue}let w=Math.min(_,m.speed*t);m.x+=b/_*w,m.z+=A/_*w,p=!0,m.h=Mh(m.h,Math.atan2(b,A),t*6),this.crossers.push(m)}let y=m.x-i,M=m.z-s,v=y*h+M*u,S=y*u-M*h;if(!m.fixed&&d>2.5&&v>-1&&v<4+d*.45&&Math.abs(S)<2.4&&m.dodge<=0&&(m.dodge=.9,m.dside=S>=0?1:-1,m.scream=!0),m.dodge>0){m.dodge-=t;let b=5.5*t;m.x+=u*m.dside*b,m.z+=-h*m.dside*b,m.mode==="walk"&&(m.ex+=u*m.dside*b,m.ez+=-h*m.dside*b),p=!0}let E=Math.hypot(y,M);if(!m.fixed&&E<2.2&&E>.01){let b=2.2-E;m.x+=y/E*b,m.z+=M/E*b,m.mode==="walk"&&(m.ex+=y/E*b,m.ez+=M/E*b)}m.moving=p,m.phase+=t*(p?m.dodge>0?14:m.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,l=this.list,c=Math.min(l.length,this.N),h=0,u=0;for(let d=0;d<c;d++){let f=l[d],g=f.moving?Math.sin(f.phase):0,m=f.moving?Math.abs(Math.cos(f.phase))*.04:0,x=f.scale;n.setFromAxisAngle(i.set(0,1,0),f.h),t.compose(i.set(f.x,.15+m,f.z),n,s.set(x,x,x)),this.torso.setMatrixAt(d,t),this.hips.setMatrixAt(d,t),this.head.setMatrixAt(d,t),this.hair.setMatrixAt(d,t),this.torso.setColorAt(d,a.setHex(f.shirt)),this.hips.setColorAt(d,a.setHex(f.pants)),this.head.setColorAt(d,a.setHex(f.skin)),this.hair.setColorAt(d,a.setHex(f.hairC));let p=g*.55,y=-g*.5,M=f.dodge>0?2.6:0;da(this.legL,d,t,e,o,.1,.92,0,p,a.setHex(f.pants)),da(this.legR,d,t,e,o,-.1,.92,0,-p,a),da(this.armL,d,t,e,o,.26,1.5,0,y-M,a.setHex(f.shirt)),da(this.armR,d,t,e,o,-.26,1.5,0,f.wave?-2.7+Math.sin(performance.now()*.008)*.35:-y-M,a),f.kalpak&&this.kalpak.setMatrixAt(h++,t),f.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(f.shirt===1842206?9050650:1846332)),u++)}for(let d of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])d.count=c,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function da(r,t,e,n,i,s,o,a,l,c){n.makeRotationX(l),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,c)}function Mh(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var Gf=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],ma=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function Hv(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],l=26;for(let L=0;L<=l;L++){let k=L/l,H=-n/2+k*n,B;k<.1?B=i*Math.sqrt(1-Math.pow(1-k/.1,2))*.98+.02:k>.72?B=i*(1-Math.pow((k-.72)/.28,1.6)*.82):B=i,a.push(new tt(Math.max(.05,B),H))}let c=new Xo(a,24).rotateX(Math.PI/2);c.rotateY(Math.PI),s.push(Dt(c,r.body)),s.push(Dt(new Tt(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(Dt(new Tt(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(Dt(new Tt(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new Un,u=17*e,d=6.5*e,f=1.6*e,g=7*e;h.moveTo(0,d/2),h.lineTo(u,d/2-g),h.lineTo(u,d/2-g-f),h.lineTo(0,-d/2),h.closePath();let m=new qn(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),x=m.clone().translate(i*.4,0,-n*.02),p=m.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);x.rotateZ(.06),p.rotateZ(-.06),s.push(Dt(x,13159634),Dt(p,13159634));for(let L of[-1,1])s.push(Dt(new Tt(.2,2.2*e,1.4*e).translate(L*(u+i*.4),.6*e,-n*.02-g-.4*e),r.tail));for(let L of[-1,1])for(let k of t?[.33,.62]:[.36]){let H=L*(i*.4+u*k),B=-n*.02+d/2-g*k+2.6*e;s.push(Dt(new Bt(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(H,-1.9*e,B),14211806)),s.push(Dt(new Bt(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(H,-1.9*e,B+2.12*e),2105376)),s.push(Dt(new Tt(.3,1.2*e,2.5*e).translate(H,-1.2*e,B-.5*e),13159634))}let y=new Un;y.moveTo(0,0),y.lineTo(5.2*e,0),y.lineTo(1.8*e,7.2*e),y.lineTo(-.6*e,7.2*e),y.closePath();let M=new qn(y,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(Dt(M,r.tail));let v=new Un;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let S=new qn(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(Dt(S.clone(),13159634),Dt(S.clone().scale(-1,1,1),13159634));let E=an(s),b=[],A=2.45*e,_=(L,k)=>[Dt(new Bt(.13*e,.13*e,A,6).translate(L,-A/2-i*.6,k),10132122),Dt(new Bt(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(L,-A-i*.6+0,k),1381653)];b.push(..._(0,n*.36));for(let L of[-1,1])b.push(..._(L*2.9*e,-n*.06),..._(L*3.5*e,-n*.06));let w=an(b),R=A+i*.6+.55*e;return{body:E,gear:w,groundY:R,len:n,span:u+i*.4,S:e}}function Nr(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let l=new ze(o);return l.colorSpace=ye,l.anisotropy=8,l}var ga=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new Yt,t.add(this.group);let i=e.runways.sort((u,d)=>d.length-u.length)[0],s=i.length/2,o=new tt(i[0],i[1]),a=new tt(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new tt(-this.u.y,this.u.x),this.rwW=55;let l=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=l,this.tc=l?new tt(l.cx,l.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let c=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(c.x,c.y,200,u=>u.cls<=6);this.dropoff=h?new tt(h.x,h.z):c,this._zoneMarker(),this.goAround=!1}rel(t){let e=new tt(t.x-this.R0.x,t.y-this.R0.y);return new tt(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new Ce(t,e+14,1,1).rotateX(-Math.PI/2),i=new yt({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vR;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vR = vec2((uv.x)*${t.toFixed(1)}, (uv.y-0.5)*${(e+14).toFixed(1)});`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vR;
        float hh(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }`).replace("#include <color_fragment>",`#include <color_fragment>
          float x = vR.x, y = vR.y, L = ${t.toFixed(1)};
          float ay = abs(y);
          float xe = min(x, L - x);
          vec3 c = diffuseColor.rgb;
          // concrete slabs + shoulders
          float slab = step(0.97, fract(x/7.5)) + step(0.97, fract((y+50.0)/7.5));
          c *= 1.0 - 0.08*min(1.0,slab);
          c *= 0.92 + 0.12*hh(floor(vec2(x,y)/7.5));
          if (ay > ${(e/2).toFixed(1)}) c *= 0.78;
          // rubber deposits in touchdown zones
          float rub = smoothstep(1200.0, 300.0, xe) * smoothstep(14.0, 2.0, ay) * (0.5 + 0.5*hh(floor(vec2(x*0.3,y*2.0))));
          c *= 1.0 - 0.45*rub;
          float w = 0.0;
          w += step(${(e/2-1.6).toFixed(1)}, ay) * step(ay, ${(e/2-.7).toFixed(1)});                 // edge stripes
          w += step(ay, 0.45) * step(fract((x - 10.0)/50.0), 0.6) * step(420.0, xe);             // centreline
          float pk = step(6.0, xe) * step(xe, 51.0) * step(3.0, ay) * step(ay, 24.0) * step(fract((ay-3.0)/2.9), 0.62);
          w += pk;                                                                                 // threshold piano keys
          w += step(400.0, xe) * step(xe, 460.0) * step(6.0, ay) * step(ay, 15.0);               // aiming point
          for (int i = 0; i < 6; i++) {                                                            // touchdown zone bars
            float x0 = 150.0 + float(i)*150.0;
            if (i == 2) continue;
            w += step(x0, xe) * step(xe, x0 + 22.0) * step(5.0, ay) * step(ay, 6.8 + float(6-i)*0.0) ;
            w += step(x0, xe) * step(xe, x0 + 22.0) * step(8.0, ay) * step(ay, 9.8) * step(float(i), 2.5);
          }
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new Z(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,l,c]of[["07",70,0],["25",t-70,Math.PI]]){let h=Nr(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new Z(new Ce(18,18),new yt({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let d=this.at(l,0),f=new Yt;f.add(u),f.position.set(d.x,.05,d.y),f.rotation.y=this.heading+c+Math.PI,this.group.add(f)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let f=0;f<=n;f+=60)for(let g of[-1,1])t.push(this.at(f,g*i)),e.push(f>n-600?[1,.6,.2]:[1,.95,.8]);for(let f=-i;f<=i;f+=3)t.push(this.at(-1,f)),e.push([.2,1,.3]),t.push(this.at(n+1,f)),e.push([1,.1,.1]);for(let f=30;f<n;f+=30)t.push(this.at(f,0)),e.push(f>n-900?Math.floor(f/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let f of this.map.taxiways){let g=f.pts;for(let m=0;m<g.length/2-1;m++){let x=g[m*2],p=g[m*2+1],y=g[m*2+2],M=g[m*2+3],v=Math.hypot(y-x,M-p),S=-(M-p)/v,E=(y-x)/v;for(let b=0;b<v;b+=45)for(let A of[-1,1])t.push(new tt(x+(y-x)*b/v+S*A*(f.w/2+1),p+(M-p)*b/v+E*A*(f.w/2+1))),e.push([.15,.35,1])}}let s=new Se(.28,6,4),o=new de({color:16777215});this.rwLights=new Pe(s,o,t.length);let a=new ne,l=new bt;t.forEach((f,g)=>{a.makeTranslation(f.x,.35,f.y),this.rwLights.setMatrixAt(g,a),this.rwLights.setColorAt(g,l.setRGB(...e[g]))}),this.rwLightCols=e,this.group.add(this.rwLights);let c=[];for(let f=1;f<=30;f++)c.push(this.at(-f*30,0));let h=[];for(let f=1;f<=30;f++)for(let g=-6;g<=6;g+=2)h.push(this.at(-f*30,g));this.alsBars=new Pe(new Se(.3,6,4),new de({color:16773312}),h.length),h.forEach((f,g)=>{a.makeTranslation(f.x,1.2,f.y),this.alsBars.setMatrixAt(g,a)}),this.group.add(this.alsBars);let u=new Bt(.08,.08,1.2,4).translate(0,.6,0),d=new Pe(u,new yt({color:7829367}),c.length);c.forEach((f,g)=>{a.makeTranslation(f.x,0,f.y),d.setMatrixAt(g,a)}),this.group.add(d),this.rabbit=new Pe(new Se(.9,8,6),new de({color:16777215,transparent:!0,opacity:1,blending:He,depthWrite:!1}),c.length),c.forEach((f,g)=>{a.makeTranslation(f.x,1.4,f.y),this.rabbit.setMatrixAt(g,a),this.rabbit.setColorAt(g,l.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=c.length,this.papi=[];for(let f=0;f<4;f++){let g=this.at(400,-(this.rwW/2+15+f*9)),m=new Z(new Tt(2,1,1.2),new de({color:16719904}));m.position.set(g.x,.6,g.y),this.group.add(m),this.papi.push(m)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new Yt,n=new yt({color:14736596,roughness:.7}),i=new Z(new Bt(3.2,4.2,38,16),n);i.position.y=19;let s=new Z(new Tt(18,8,14),n);s.position.y=4;let o=new Z(new Bt(7.5,4.5,4,8),n);o.position.y=39.5;let a=new Z(new Bt(8,7.2,5,8),new yt({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let l=new Z(new Bt(8.6,8.6,1,8),n);l.position.y=47;let c=new Z(new Bt(.15,.15,9,5),new yt({color:13378082}));c.position.y=52,this.beacon=new Z(new Se(.6,8,6),new de({color:16719904})),this.beacon.position.y=57,this.radar=new Z(new Tt(7,1.6,.4),new yt({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,l,c,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=Nr("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new de({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new Z(new Ce(90,7),n),s=null,o=-1e9,a=t.pts;for(let c=0;c<a.length/2;c++){let h=(a[c*2]-t.cx)*this.n.x+(a[c*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=c)}let l=new tt(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(l.x,t.h+4.5,l.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new tt(e[0],e[1]),i=new tt(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(c=>c.p.distanceTo(s)<48))continue;let l=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:l,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new tt(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new Gs(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new de({color:4245759,transparent:!0,opacity:.8,side:Ee,depthWrite:!1}),this.zone=new Z(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new Z(new Bt(4.8,4.8,14,32,1,!0),new de({color:4245759,transparent:!0,opacity:.12,side:Ee,depthWrite:!1,blending:He}));e.position.y=7,this.zone.add(e);let n=new _n(new dn({map:Nr("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new tt(s.x,s.z):i,this.spotZone=new Z(t.clone(),new de({color:16756768,transparent:!0,opacity:.8,side:Ee,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new _n(new dn({map:Nr("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=Gf[Math.floor(Math.random()*Gf.length)],n=Math.random()<t,i=Hv(e,n),s=new yt({vertexColors:!0,metalness:.35,roughness:.35}),o=new Yt,a=new Z(i.body,s);a.castShadow=!0;let l=new Z(i.gear,s);l.castShadow=!0;let c=new Yt;c.add(a,l),o.add(c);let h=(M,v)=>new Z(new Se(v,6,4),new de({color:M,transparent:!0,blending:He,depthWrite:!1})),u=h(16719904,.5),d=h(2162496,.5),f=h(16777215,.9),g=h(16777215,.9),m=h(16723984,.6),x=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),d.position.set(i.span,-.4,-i.len*.02-7.4*i.S),f.position.copy(u.position),g.position.copy(d.position),m.position.set(0,2.1*i.S,-i.len*.1),x.position.set(0,-1.2*i.S,i.len*.42),c.add(u,d,f,g,m,x);let p=Nr(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let M of[-1,1]){let v=new Z(new Ce(3.4*i.S,1.7*i.S),new de({map:p,transparent:!0}));v.position.set(M*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=M*Math.PI/2,c.add(v)}this.group.add(o);let y={g:o,inner:c,gear:l,a:i,al:e,wide:n,navR:u,navG:d,strL:f,strR:g,bcn:m,land:x,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:ma[Math.floor(Math.random()*ma.length)],gearDown:1,thrust:0};return this.planes.push(y),y}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new tt(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),c=Math.atan2(s,o)-t.h;c=Math.atan2(Math.sin(c),Math.cos(c));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(c)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=Ie.clamp(c,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new tt(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let l=s*2%1,c=new bt;for(let u=0;u<this.alsN;u++){let d=Math.abs((1-l)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,c.setRGB(d,d,d))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,d)=>u.material.color.setHex(d<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(f=>["approach","landing","takeoff","lineup"].includes(f.state)&&!f.cine),d=this._freeStand();if(!u&&d&&this.planes.filter(f=>!f.cine).length<9){let f=this._newPlane();this._startApproach(f)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let d=this.planes[u];if(d!==i){if(this._updatePlane(d,t,h),d.dead){this.group.remove(d.g),this.planes.splice(u,1);continue}this._pose(d,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new tt(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new tt(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new tt(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-Ie.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new tt(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(l=>l.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=ma[Math.floor(Math.random()*ma.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new tt(Math.sin(i.h),Math.cos(i.h)),o=new tt(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=An(s,{}),l=new yt({color:o,vertexColors:!0,roughness:.5}),c=new Yt;c.add(new Z(a.paint,l),new Z(a.detail,new yt({vertexColors:!0})));let h=new Z(new Se(.2,6,4),new de({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,c.add(h),c.scale.setScalar(s==="truck"?.75:1),c.children.forEach(u=>u.castShadow=!0),this.group.add(c),this.vehicles.push({g:c,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let l=Math.atan2(i,s)-e.h;l=Math.atan2(Math.sin(l),Math.cos(l)),e.h+=Ie.clamp(l,-t*1.5,t*1.5);let c=Math.abs(l)>.6?2:5;e.x+=Math.sin(e.h)*c*t,e.z+=Math.cos(e.h)*c*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,l)=>new I(a.x,l,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new I(-3500,520,-9e3),new I(-900,430,-2600),new I(150,380,0),new I(1400,390,1600),new I(400,420,4200),new I(-3e3,480,4e3),new I(-6200,560,-1500),new I(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new Ir(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new tt(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new tt(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),l=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let c=Math.atan2(a.x,a.z),h=Math.atan2(l.x*a.z-l.z*a.x,l.x*a.x+l.z*a.z);n.h=c,n.roll+=(Ie.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(Ie.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),l=s.a.S;if(e===0)n.set(s.x-o*70*l,s.y+16*l,s.z-a*70*l),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let c=-a,h=o;n.set(s.x-c*2.3*l+o*2,s.y+.6*l,s.z-h*2.3*l+a*2),i.set(s.x-c*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*l,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new I(s.x,s.y,s.z))>1600)&&(t.camAnchor=new I(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function Wf(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new ze(r);return i.colorSpace=ye,i.anisotropy=8,i}var wh=()=>new yt({color:6965800,metalness:.85,roughness:.38}),js=(r=10127994)=>new yt({color:r,roughness:.75}),xa=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new Yt,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179),this._whiteHouse(),this._ordo()}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new Z(new Bt(.22,.45,45,12),new yt({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new Z(new Bt(3.5,4,1.2,24),js(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new Z(new Se(.5,12,8),new yt({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,l=new Ce(o,a,40,16).translate(o/2,0,0),c=new yt({map:Wf(),side:Ee,roughness:.75});c.onBeforeCompile=f=>{f.uniforms.uTime=tn.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new Z(l,c);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new yt({color:2767402,roughness:.6}),d=new yt({color:13146744});for(let f of[-1,1]){let g=new Yt,m=new Z(new Tt(.45,1.05,.28),u);m.position.y=1.35;let x=new Z(new Tt(.38,.85,.24),u);x.position.y=.42;let p=new Z(new Se(.12,10,8),d);p.position.y=2;let y=new Z(new Bt(.16,.13,.12,10),new yt({color:1976862}));y.position.y=2.12;let M=new Z(new Tt(.05,1.2,.05),new yt({color:2759184}));M.position.set(.3,1.5,.1),g.add(m,x,p,y,M),g.children.forEach(v=>v.castShadow=!0),g.position.set(t+f*5,1.2,e+3.5),this.g.add(g),this.anim.push({type:"guard",g,base:g.position.clone(),s:f})}}_manas(t,e,n,i=1){let s=new Yt,o=new Z(new Bt(3.2,3.8,9,8),js(9075824));o.position.y=4.5;let a=new Z(new Bt(6,6.5,1,16),js(10524808));a.position.y=.5;let l=wh(),c=new Yt,h=new Z(new Se(1,16,12),l);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new Z(new Bt(.55,.8,2.2,10),l);u.position.set(0,4.3,1.9),u.rotation.x=.7;let d=new Z(new Tt(.7,.75,1.6),l);d.position.set(0,5.2,2.8),d.rotation.x=.5;let f=new Z(new Xn(.35,2.2,8),l);f.position.set(0,2.6,-2.5),f.rotation.x=-.6,c.add(h,u,d,f);for(let[E,b,A]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let _=new Z(new Bt(.2,.16,2.4,8).translate(0,-1.2,0),l);_.position.set(E,2.7,b),_.rotation.x=A,c.add(_)}c.rotation.x=-.32,c.position.y=.4;let g=new Yt,m=new Z(new Bt(.55,.7,1.9,10),l);m.position.y=5;let x=new Z(new Se(.42,12,10),l);x.position.y=6.3;let p=new Z(new Xn(.45,.8,10),l);p.position.y=6.8;let y=new Z(new Bt(.16,.16,1.8,8).translate(0,.9,0),l);y.position.set(.6,5.6,0),y.rotation.z=-.5;let M=new Z(new Tt(.08,2.4,.18).translate(0,1.2,0),new yt({color:10518608,metalness:1,roughness:.25}));M.position.set(1.4,7.1,0),M.rotation.z=-.3;let v=new Z(new Tt(1.5,1.8,.1),l);v.position.set(0,4.8,-.7),v.rotation.x=.5,g.add(m,x,p,y,M,v);let S=new Yt;S.add(c,g),S.position.y=9,s.add(o,a,S),s.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new Yt,i=new yt({color:8008488,roughness:.55,metalness:.1}),s=new Z(new Bt(15,16,1.2,36),js(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let d=u/3*Math.PI*2,f=new I(Math.cos(d)*12,1,Math.sin(d)*12),g=new I(Math.cos(d)*9,15,Math.sin(d)*9),m=new I(Math.cos(d)*2.5,21,Math.sin(d)*2.5),x=new Vs(f,g,m),p=new Z(new qo(x,24,1.1,6,!1),i);n.add(p)}let o=new Z(new Ki(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new Z(new Bt(1.6,1.1,.8,16),new yt({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let l=new Yt,c=new Z(new Xn(.9,3.4,10),wh());c.position.y=1.7;let h=new Z(new Se(.32,10,8),wh());h.position.y=3.6,l.add(c,h),l.position.set(6.5,1.2,0),n.add(l),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new ie,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new fe(new Float32Array(90*3),3)),s.setAttribute("seed",new fe(o,1));let a=new _e({uniforms:{uTime:tn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:He}),l=new ui(s,a);l.position.set(t,e,n),l.frustumCulled=!1,this.g.add(l);let c=new ts(16747056,0,30,2);return c.position.set(t,e+1.5,n),this.g.add(c),this.anim.push({type:"firelight",light:c}),l}_mosque(){let t=this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(g.name)&&g.kind===8)||this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть/.test(g.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),l=new yt({color:15921128,roughness:.5}),c=new yt({color:5939384,metalness:.5,roughness:.25}),h=new yt({color:14200896,metalness:1,roughness:.2}),u=new Z(new Bt(o,o,5,24),l);u.position.set(e,a+2.5,n);let d=new Z(new Se(o,32,16,0,Math.PI*2,0,Math.PI/2),c);d.position.set(e,a+5,n),d.scale.y=1.15;let f=new Z(new Bt(.15,.3,4,8),h);f.position.set(e,a+5+o*1.15+2,n),this.g.add(u,d,f);for(let[g,m]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=e+g*(i/2-2),p=n+m*(s/2-2),y=new Z(new Bt(1.6,2,52,12),l);y.position.set(x,26,p);let M=new Z(new Bt(2.6,2.2,1.4,12),l);M.position.set(x,44,p);let v=new Z(new Xn(1.7,7,12),c);v.position.set(x,55.5,p);let S=new Z(new Bt(.1,.2,2.5,6),h);S.position.set(x,60,p),this.g.add(y,M,v,S),this._col(x,p,2)}this.g.children.slice(-19).forEach(g=>{g.castShadow=!0,g.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new Z(new Bt(4.2,4.4,.6,28,1,!0),js(12103840));s.position.set(n,.3,i);let o=new Z(new Ri(4.1,28).rotateX(-Math.PI/2),new yt({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new ie,l=new Float32Array(140);for(let u=0;u<140;u++)l[u]=Math.random();a.setAttribute("position",new fe(new Float32Array(140*3),3)),a.setAttribute("seed",new fe(l,1));let c=new _e({uniforms:{uTime:tn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new ui(a,c);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new Yt,i=new yt({color:15263976,metalness:.6,roughness:.3}),s=16,o=new Yt,a=new Z(new Ki(s,.25,6,48),i);o.add(a);let l=a.clone();l.position.z=1.6,o.add(l);let c=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,d=new Z(new Bt(.08,.08,s,4),i);d.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),d.rotation.z=u-Math.PI/2,o.add(d);let f=new Z(new Tt(1.4,1.5,1.4),new yt({color:c[h%4]}));f.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(f),this.cabins.push({cab:f,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new Z(new Bt(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let d=u.clone();d.position.z=2.2,n.add(d)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new Yt,i=new yt({color:10134688,metalness:.6,roughness:.35}),s=new Z(new Bt(.5,.75,13,12).rotateX(Math.PI/2),i),o=new Z(new Xn(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new Un;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let l=new Z(new qn(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),c=new Z(new Tt(.15,2.4,2.6),i);c.position.set(0,1.4,-5);let h=new Z(new Bt(.6,1,6,8),js(8947848));h.position.y=-3.4,n.add(s,o,l,c,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}_findB(t){return this.map.buildings.filter(e=>e.name&&t.test(e.name)).sort((e,n)=>(n.x1-n.x0)*(n.z1-n.z0)-(e.x1-e.x0)*(e.z1-e.z0))[0]}_miniFlag(t,e,n,i=1){this.flagTex||(this.flagTex=Wf());let s=3.2*i,o=1.9*i,a=new Z(new Bt(.05*i,.07*i,6*i,6),new yt({color:13620184,metalness:.8,roughness:.3}));a.position.set(t,e+3*i,n);let l=new Ce(s,o,12,6).translate(s/2,0,0),c=new yt({map:this.flagTex,side:Ee,roughness:.8});c.onBeforeCompile=u=>{u.uniforms.uTime=tn.uTime,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${s.toFixed(2)};
          transformed.z += sin(position.x*1.6 - uTime*4.0 + ${(t*.1).toFixed(2)}) * 0.35 * k * ${i.toFixed(2)};`)};let h=new Z(l,c);h.position.set(t+.06,e+6*i-o/2-.1,n),this.g.add(a,h)}_whiteHouse(){let t=this._findB(/Жогорку Кеңеш|National Parliament|White House|Ак үй|Белый дом/);if(!t)return;let e=t.pts,n=e.length/2,i=Math.max(t.h,26),s=0;for(let x=0;x<n;x++){let p=(x+1)%n;s+=e[x*2]*e[p*2+1]-e[p*2]*e[x*2+1]}let o=s>0?1:-1,a=[];for(let x=0;x<n;x++){let p=(x+1)%n,y=e[x*2],M=e[x*2+1],v=e[p*2],S=e[p*2+1],E=Math.hypot(v-y,S-M);if(E<8)continue;let b=(S-M)/E*o,A=-(v-y)/E*o,_=Math.floor(E/3.4);for(let w=0;w<=_;w++){let R=w/_;a.push([y+(v-y)*R+b*.45,M+(S-M)*R+A*.45,Math.atan2(b,A)])}}let l=new yt({color:15987180,roughness:.35,metalness:.05}),c=new Pe(new Tt(.7,i-3,.9),l,a.length),h=new ne,u=new Ne,d=new I(0,1,0);a.forEach(([x,p,y],M)=>{u.setFromAxisAngle(d,y),h.compose(new I(x,3+(i-3)/2,p),u,new I(1,1,1)),c.setMatrixAt(M,h)}),c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),this.g.add(c);let f=(t.x0+t.x1)/2,g=(t.z0+t.z1)/2,m=new Z(new Tt(t.x1-t.x0+1.6,1.4,t.z1-t.z0+1.6),l);m.position.set(f,i+.7,g),m.castShadow=!0,this.g.add(m),this._miniFlag(f,i+1.4,g,1.6)}_ordo(){let t=this._findB(/Ынтымак Ордо|Yntymak Ordo/);if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.max(t.h,18),a=new yt({color:16118506,roughness:.4}),l=new yt({color:14200896,metalness:1,roughness:.25}),c=Math.min(i,s)*.22,h=new Z(new Bt(c,c*1.05,7,32),a);h.position.set(e,o+3.5,n);let u=new Z(new Se(c,40,20,0,Math.PI*2,0,Math.PI/2),new yt({color:15330802,metalness:.3,roughness:.2}));u.position.set(e,o+7,n),u.scale.y=.85;let d=new Z(new Bt(c*.15,c*.18,3,16),l);d.position.set(e,o+7+c*.85+1.5,n),this.g.add(h,u,d);for(let x=0;x<16;x++){let p=x/16*Math.PI*2,y=new Z(new Bt(.35,.4,7,10),a);y.position.set(e+Math.cos(p)*(c+.8),o+3.5,n+Math.sin(p)*(c+.8)),this.g.add(y)}let f=Math.max(i,s)*.4,g=i>s?"z":"x";for(let x=0;x<8;x++){let p=(x/7-.5)*f,y=new Z(new Bt(.55,.6,o*.9,12),a);g==="z"?y.position.set(e+p,o*.45,t.z1+3):y.position.set(t.x1+3,o*.45,n+p),this.g.add(y)}let m=new Z(new Tt(g==="z"?f+3:6,1.6,g==="z"?6:f+3),a);m.position.set(g==="z"?e:t.x1+1.5,o*.9+.8,g==="z"?t.z1+1.5:n),this.g.add(m),this.g.children.slice(-30).forEach(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),this._miniFlag(e+i*.3,o,n,1.3),this._miniFlag(e-i*.3,o,n,1.3)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var va=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<e;a++){let l=Math.random()*2-1;s=(s+.02*l)/1.02,i[a]=l*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=2,this.osc=[];for(let[a,l,c]of[["sawtooth",1,.35],["sawtooth",1.01,.3],["square",.5,.25],["triangle",2,.15]]){let h=t.createOscillator();h.type=a;let u=t.createGain();u.gain.value=c,h.connect(u),u.connect(this.engFilter),h.start(),this.osc.push([h,l])}this.engFilter.connect(this.engGain),this.engGain.connect(this.master);let o=(a,l,c)=>{let h=t.createBufferSource();h.buffer=n,h.loop=!0;let u=t.createBiquadFilter();u.type=a,u.frequency.value=l,u.Q.value=c;let d=t.createGain();return d.gain.value=0,h.connect(u),u.connect(d),d.connect(this.master),h.start(Math.random()*.5),{s:h,fl:u,g:d}};this.wind=o("bandpass",600,.4),this.tyre=o("bandpass",1800,6),this.city=o("lowpass",420,.5),this.jet=o("bandpass",900,.6),this.jetLow=o("lowpass",140,1),this.road=o("lowpass",220,.8),this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?e.rpm:0,o=28+s/60*1;for(let[h,u]of this.osc)h.frequency.setTargetAtTime(o*u,i,.03);let a=n.throttle||0;this.engFilter.frequency.setTargetAtTime(350+s*.35+a*900,i,.05),this.engGain.gain.setTargetAtTime(n.inFlight?0:.05+a*.08+s/7e3*.06,i,.05);let l=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(l/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+l*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,l/40*.25),i,.1),this.tyre.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.5,Math.max(0,(e.slip-.18)*1.6))*(l>5?1:0),i,.04),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let c=n.jet||0;this.jet.g.gain.setTargetAtTime(c*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(c*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+c*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=2+Math.random()*6/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=2200;for(let l of[405*n,507*n]){let c=i.createOscillator();c.type="square",c.frequency.value=l,c.connect(a),c.start(s),c.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*120,n),l.frequency.exponentialRampToValueAtTime(60,n+.3);let c=e.createGain();c.gain.setValueAtTime(a*.5,n),c.gain.exponentialRampToValueAtTime(.001,n+.35),l.connect(c),c.connect(this.master),l.start(n),l.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let l=t.createBufferSource();l.buffer=this.noise;let c=t.createBiquadFilter();c.type="highpass",c.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),l.connect(c),c.connect(h),h.connect(this.master),l.start(e+a),l.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}whistle(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let[n,i]of[[0,.12],[.18,.28]]){let s=t.createOscillator();s.type="sine",s.frequency.value=2900;let o=t.createOscillator();o.frequency.value=35;let a=t.createGain();a.gain.value=140,o.connect(a),a.connect(s.frequency);let l=t.createGain();l.gain.setValueAtTime(0,e+n),l.gain.linearRampToValueAtTime(.12,e+n+.02),l.gain.setValueAtTime(.12,e+n+i),l.gain.linearRampToValueAtTime(0,e+n+i+.03),s.connect(l),l.connect(this.master),s.start(e+n),o.start(e+n),s.stop(e+n+i+.05),o.stop(e+n+i+.05)}}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var di=150,Ve=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"whitehouse",name:"White House (\u0410\u043A \u04AF\u0439)",local:"\u0410\u043A \u04AF\u0439 \xB7 \u0416\u043E\u0433\u043E\u0440\u043A\u0443 \u041A\u0435\u04A3\u0435\u0448",x:-277,z:-40,fact:`The 7-storey white marble "Ak Uy" on Chuy Avenue, built in 1985. Today it houses the Jogorku Kenesh, Kyrgyzstan's parliament.`},{id:"ordo",name:"Yntymak Ordo (new White House)",local:"\u042B\u043D\u0442\u044B\u043C\u0430\u043A \u041E\u0440\u0434\u043E",x:-1751,z:7480,fact:"The new presidential palace in the south of Bishkek, opened in 2022. The Presidential Administration moved here from the old White House."},{id:"cityhall",name:"Bishkek City Hall",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0448\u0430\u0430\u0440\u0434\u044B\u043A \u043C\u044D\u0440\u0438\u044F\u0441\u044B",x:-1389,z:60,fact:"The mayor's office of Bishkek, on Chuy Avenue next to the National Bank."},{id:"natbank",name:"National Bank",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0431\u0430\u043D\u043A",x:-1436,z:30,fact:"Head office of the National Bank of the Kyrgyz Republic, which issues the som."},{id:"gorky",name:"Gorky Park",local:"\u0413\u043E\u0440\u044C\u043A\u0438\u0439 \u0441\u043A\u0432\u0435\u0440\u0438",x:-887,z:-237,fact:"A shady square park next to the Philharmonic and the Kojomkul Sports Palace."},{id:"kojomkul",name:"Kojomkul Sports Palace",local:"\u041A\u043E\u0436\u043E\u043C\u043A\u0443\u043B \u0430\u0442\u044B\u043D\u0434\u0430\u0433\u044B \u0441\u043F\u043E\u0440\u0442 \u0441\u0430\u0440\u0430\u0439\u044B",x:-726,z:-211,fact:"Named after the legendary strongman Kojomkul. Wrestling, boxing and concerts."},{id:"spartak",name:"Spartak Stadium",local:"\u0421\u043F\u0430\u0440\u0442\u0430\u043A \u0441\u0442\u0430\u0434\u0438\u043E\u043D\u0443",x:-588,z:-470,fact:"The national stadium (also called Dolen Omurzakov Stadium) where Kyrgyzstan's football team plays."},{id:"caravan",name:"Caravan Mall",local:"\u041A\u0430\u0440\u0430\u0432\u0430\u043D",x:-798,z:199,fact:"A shopping centre on Kievskaya street, near the Sheraton."},{id:"sheraton",name:"Sheraton Bishkek",local:"\u0428\u0435\u0440\u0430\u0442\u043E\u043D",x:-1057,z:171,fact:"A 23-floor hotel \u2013 one of the tallest buildings in central Bishkek."},{id:"hyatt",name:"Hyatt Regency",local:"\u0425\u0430\u044F\u0442\u0442 \u0420\u0438\u0434\u0436\u0435\u043D\u0441\u0438",x:759,z:-362,fact:"The classic business hotel next to the Opera and Ballet Theatre and Oak Park."},{id:"knu",name:"Kyrgyz National University",local:"\u041A\u041D\u0423 \u0438\u043C. \u0416. \u0411\u0430\u043B\u0430\u0441\u0430\u0433\u044B\u043D\u0430",x:-1495,z:-555,fact:"The country's oldest university, founded in 1925 and named after the poet Jusup Balasagyn."},{id:"auca",name:"American University of Central Asia",local:"\u0410\u0423\u0426\u0410",x:1918,z:7200,fact:"AUCA's modern campus in the south of Bishkek, opened in 2015."},{id:"botanic",name:"Botanical Garden",local:"\u0411\u043E\u0442\u0430\u043D\u0438\u043A\u0430\u043B\u044B\u043A \u0431\u0430\u043A",x:-1051,z:1915,fact:"The E. Z. Gareev Botanical Garden, with thousands of plant species and quiet alleys."},{id:"ataturk",name:"Ataturk Park",local:"\u0410\u0442\u0430\u0442\u04AF\u0440\u043A \u0441\u0435\u0439\u0438\u043B \u0431\u0430\u0433\u044B",x:-782,z:4370,fact:"A large park in the south with a lake, fountains and a monument to Atat\xFCrk."},{id:"station",name:"Bishkek-2 Railway Station",local:"\u0411\u0438\u0448\u043A\u0435\u043A-2 \u0432\u043E\u043A\u0437\u0430\u043B\u044B",x:190,z:1290,fact:"The main railway station. Trains leave for Balykchy (Issyk-Kul) and Moscow."},{id:"eastbus",name:"Eastern Bus Station",local:"\u0427\u044B\u0433\u044B\u0448 \u0430\u0432\u0442\u043E\u0432\u043E\u043A\u0437\u0430\u043B\u044B",x:2131,z:-1213,fact:"Marshrutkas and buses to the east: Issyk-Kul, Kant and Tokmok."},{id:"alamedin",name:"Alamedin Bazaar",local:"\u0410\u043B\u0430\u043C\u04AF\u0434\u04AF\u043D \u0431\u0430\u0437\u0430\u0440\u044B",x:2784,z:-1202,fact:"A busy market in the east of the city \u2013 fruit, vegetables and everything for the home."},{id:"ortosai",name:"Orto-Sai Bazaar",local:"\u041E\u0440\u0442\u043E-\u0421\u0430\u0439 \u0431\u0430\u0437\u0430\u0440\u044B",x:1095,z:4501,fact:"The southern bazaar on the Ala-Archa road, famous for fresh produce."},{id:"tashrabat",name:"Tash-Rabat Mall",local:"\u0422\u0430\u0448-\u0420\u0430\u0431\u0430\u0442",x:1350,z:2140,fact:"A popular mall on Gorky street, named after the 15th-century stone caravanserai."},{id:"arena",name:"Bishkek Arena",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0410\u0440\u0435\u043D\u0430",x:-6465,z:5340,fact:"A large arena in the west of the city, built for concerts and sports."},{id:"nomad",name:"Nomad Arena Ice Rink",local:"\u041D\u043E\u043C\u0430\u0434 \u0410\u0440\u0435\u043D\u0430",x:5046,z:1978,fact:"The city ice rink in the east of Bishkek."},{id:"conservatory",name:"National Conservatory",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u043A\u043E\u043D\u0441\u0435\u0440\u0432\u0430\u0442\u043E\u0440\u0438\u044F",x:773,z:3392,fact:"The Kyrgyz National Conservatory, where komuz players and opera singers train."},{id:"post",name:"Main Post Office",local:"\u0411\u0430\u0448\u043A\u044B \u043F\u043E\u0447\u0442\u0430\u043C\u0442",x:710,z:171,fact:"The central post office on the corner of Chuy Avenue and Sovetskaya street."},{id:"bcity",name:"Bishkek City Center",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0421\u0438\u0442\u0438",x:1019,z:-577,fact:"A business district with new glass towers north-east of the centre."},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],ya=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=3e3,this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Ve){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Ve.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color,this.owned=t.owned,this.jobsDone=t.jobs||0,this.custom=t.custom,this.upgrades=t.upgrades)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:this.homeCar||t?.type,color:this.homeColor??t?.color,owned:[...this.owned||["sedan"]],jobs:this.jobsDone||0,custom:this.custom,upgrades:this.upgrades}))}catch{}}issueFine(t,e,n,i,s=0){this.money-=e;let o={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i,heat:s};this.fines.push(o),this.audio.fine(),this.hud.showFine(o),this.onFine&&this.onFine(o)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,l=this.speedState;if(a>di){if(l.over+=t,l.maxSpeed=Math.max(l.maxSpeed,a),l.armed&&l.over>.6){l.armed=!1,l.lastFine=this.time;let c=Math.round(l.maxSpeed),h=c>200?750:c>170?500:300,u=n.street?` on ${n.street}`:"";o(d=>this.issueFine("Speeding",h,`${c} km/h in a 150 km/h zone${u}`,d))}!l.armed&&this.time-l.lastFine>12&&(l.armed=!0,l.maxSpeed=0,l.over=0)}else a<di-5&&(l.armed=!0,l.over=0,l.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let c=n.road;for(let f of c.e.signals){let g=Math.sin(e.h),m=Math.cos(e.h),x=g*c.dx+m*c.dz,p=x>=0?0:1;if(f.dir!==p||Math.abs(x)<.7)continue;let y=p?c.e.len-c.s:c.s,M=e._sOnEdge&&e._sOnEdge.e===c.e?e._sOnEdge.s:null;if(M!==null&&M<f.stop&&y>=f.stop){let v=p?-c.lat:c.lat;(c.e.ow||v>-.5)&&this.map.signalState(f.cluster,f.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(S=>this.issueFine("Red light",100,`Ran a red light${n.street?" on "+n.street:""}`,S)))}}let h=Math.sin(e.h),u=Math.cos(e.h),d=h*c.dx+u*c.dz>=0?0:1;e._sOnEdge={e:c.e,s:d?c.e.len-c.s:c.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let c=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;c<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",150,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=c<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(c=>this.issueFine("Runway incursion",1e3,"Entered the active runway at Manas International Airport",c)))):(this.runwayT=0,n.runway=!1),this._moreRules(t,e,n,a,o)}_moreRules(t,e,n,i,s){let o=this.time;this.cool=this.cool||{},this.tm=this.tm||{};let a=this.tm,l=n.street||"the street",c=(v,S,E,b,A)=>{(this.cool[v]||0)>o||(this.cool[v]=o+10,s(_=>this.issueFine(S,E,b,_,A)))},h=(v,S)=>(a[v]=S?(a[v]||0)+t:0,a[v]),u="",d=Math.sin(e.h),f=Math.cos(e.h),g=n.road,m=!1;if(g&&!g.e.ow&&i>12&&g.e.w>=6&&g.e.cls<=4&&g.dist<g.e.w/2+.5){let v=d*g.dx+f*g.dz,S=v>=0?g.lat:-g.lat;m=Math.abs(v)>.7&&S<-.9}let x=h("onc",m);if(x>.6&&(u="ONCOMING LANE \u2013 KEEP RIGHT"),x>2.5&&(a.onc=0,c("onc","Oncoming lane",120,`Drove in the oncoming lane on ${l}`,.5)),this._zoneT=(this._zoneT||0)-t,this._zoneT<=0){this._zoneT=.2;let v="";if(i>6&&!n.runway){let S=this.map.nearestRoad(e.x,e.z,14);if(!(S&&S.dist<S.e.w/2+.4)){let b=Math.floor(e.x/400),A=Math.floor(e.z/400);for(let _=-1;_<=1&&v!=="square";_++)for(let w=-1;w<=1;w++){let R=this.map.chunks.get(Oe(b+_,A+w));if(R){for(let L of R.areas)if(!(e.x<L.x0||e.x>L.x1||e.z<L.z0||e.z>L.z1)&&!(![0,1,4,5,11].includes(L.type)||!Js(e.x,e.z,L.pts))){if(L.type===11){v="square";break}v="park"}}}!v&&S&&S.e.cls>=1&&S.e.cls<=4&&S.e.w>=5&&S.dist<S.e.w/2+3.6&&(v="sidewalk")}}this._zone=v}let p=h("sidewalk",this._zone==="sidewalk"),y=h("park",this._zone==="park"),M=h("square",this._zone==="square");if(p>.3&&(u="GET OFF THE SIDEWALK!"),y>.3&&(u="NO DRIVING IN THE PARK!"),M>.3&&(u="PEDESTRIAN ZONE \u2013 NO CARS!"),p>1.5&&(a.sidewalk=0,c("sidewalk","Driving on the sidewalk",150,`Drove on the sidewalk of ${l}`,.6)),y>1.5&&(a.park=0,c("park","Driving through a park",250,"Drove through a park / lawn",.8)),M>1.2&&(a.square=0,c("square","Pedestrian zone",400,"Drove into a pedestrian square",1.2)),this.peds&&i>22)for(let v of this.peds.list){if(v.fixed)continue;let S=v.x-e.x,E=v.z-e.z;if(S*S+E*E<6.5){u="WATCH OUT \u2013 PEDESTRIAN!",c("ped","Endangering a pedestrian",300,`Nearly hit a pedestrian at ${Math.round(i)} km/h`,1);break}}if(this.peds&&i>8&&this.peds.crossers.length)for(let v of this.peds.crossers){let S=Math.hypot(v.x-e.x,v.z-e.z);if(S<7){u="STOP \u2013 PEOPLE ON THE ZEBRA!",S<4.5&&c("zebra","Did not yield at zebra",150,"Did not give way to pedestrians at a zebra crossing",.4);break}}if(g&&i>15&&!u){let v=d*g.dx+f*g.dz,S=v>=0?0:1,E=S?g.e.len-g.s:g.s;for(let b of g.e.signals){if(b.dir!==S)continue;let A=b.stop-E;if(A>0&&A<30&&this.map.signalState(b.cluster,b.group,this.trafficTime)==="R"){u="RED LIGHT \u2013 STOP!";break}}}i>150&&!u&&(u="SPEEDING \u2013 SLOW DOWN"),u&&!this._lastWarn&&this.onWarn&&this.onWarn(u),this._lastWarn=u,n.warn=u}accident(t,e){if(this.cool=this.cool||{},(this.cool.dtp||0)>this.time)return;this.cool.dtp=this.time+4;let n=t>12?400:t>7?250:120;e(i=>this.issueFine("Road accident (\u0414\u0422\u041F)",n,`Crashed into another car at ${Math.round(t*3.6)} km/h`,i,t>7?1:.4))}checkLandmarks(t){for(let e of Ve)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Ve.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,l=this.map.nearestRoad(o,a,80,x=>x.cls>=1&&x.cls<=4);if(!l)continue;let c=l.lat>=0?1:-1,h=l.e.w/2+1.2,u=l.x-l.dz*h*c,d=l.z+l.dx*h*c;if(this.map.insideBuilding(u,d,.5))continue;let f=Ve.filter(x=>Math.hypot(x.x-u,x.z-d)>700&&(!x.airport||Math.random()<.5)),g=f[Math.floor(Math.random()*f.length)],m=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:d,dest:g,passenger:m[Math.floor(Math.random()*m.length)],t:0,start:null},this.setRoute(u,d,"Pick up "+this.mission.passenger),e){let x={mode:"plaza",zone:{x:u,z:d,r:.1,active:!0,count:0},x:u,z:d,h:0,tx:u,tz:d,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};x.shirt=15909376,x.pants=2238522,x.skin=14200976,x.hairC=1709072,x.scale=1,x.speed=1.2,x.phase=0,x.fixed=!0,e.list.push(x),this.mission.ped=x}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,l=i.fare+a;this.money+=l,this.audio.cash(),this.hud.toast(`Fare paid: ${Zn(i.fare)} coins. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],l=this.route[s+2],c=this.route[s+3],h=l-o,u=c-a,d=h*h+u*u||1,f=((t.x-o)*h+(t.z-a)*u)/d;f=Math.max(0,Math.min(1,f)),i=Math.min(i,Math.hypot(t.x-o-h*f,t.z-a-u*f))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let l=0;l<e.length/2;l++){l>0&&(o+=Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));let c=Math.max(0,l-1),h=Math.min(e.length/2-1,l+1),u=e[h*2]-e[c*2],d=e[h*2+1]-e[c*2+1],f=Math.hypot(u,d)||1;u/=f,d/=f;let g=1.1;if(n.push(e[l*2]-d*g,.22,e[l*2+1]+u*g,e[l*2]+d*g,.22,e[l*2+1]-u*g),i.push(o,0,o,1),l>0){let m=l*2;s.push(m-2,m,m-1,m-1,m,m+1)}}let a=new ie;a.setAttribute("position",new Xt(n,3)),a.setAttribute("uv",new Xt(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new _e({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:Ee})),this.routeMesh=new Z(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function Zn(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var Xf=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],qf=[5,4.2,3.4,2.6,2,1.6,1.2],pe=r=>document.getElementById(r),_a=class{constructor(t){this.map=t,this.speedo=pe("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=pe("minimap"),this.mctx=this.mini.getContext("2d"),this.big=pe("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,l=Math.min(n,i)/2-6*s,c=t.speed*3.6,h=260,u=Math.PI*.75,d=Math.PI*2.25,f=p=>u+(d-u)*Math.min(1,p/h),g=e.createRadialGradient(o,a,l*.2,o,a,l);g.addColorStop(0,"rgba(20,24,30,0.92)"),g.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=g,e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,l-10*s,f(di),d),e.stroke(),e.lineWidth=7*s,e.strokeStyle=c>di?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,l-10*s,u,f(c)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let p=0;p<=h;p+=10){let y=f(p),M=p%20===0;e.strokeStyle=p>di?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(M?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(y)*(l-18*s),a+Math.sin(y)*(l-18*s)),e.lineTo(o+Math.cos(y)*(l-(M?28:23)*s),a+Math.sin(y)*(l-(M?28:23)*s)),e.stroke(),M&&p%40===0&&e.fillText(p,o+Math.cos(y)*(l-40*s),a+Math.sin(y)*(l-40*s))}let m=f(c);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(m)*12*s,a-Math.sin(m)*12*s),e.lineTo(o+Math.cos(m)*(l-22*s),a+Math.sin(m)*(l-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=c>di?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(c),o,a+l*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+l*.62);let x=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=x>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,x)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gearLabel||"1",o,a-l*.12)}_miniBase(t,e,n){let i=this.mini.width,s=Math.ceil(i*2.2);(!this._mb||this._mb.width!==s)&&(this._mb=document.createElement("canvas"),this._mb.width=this._mb.height=s,this._mbS=0);let o=s/2/e;if(this._mbS===e&&Math.hypot(t.x-this._mbX,t.z-this._mbZ)<o*.35)return;this._mbS=e,this._mbX=t.x,this._mbZ=t.z;let a=this._mb.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="#1d2329",a.fillRect(0,0,s,s),a.translate(s/2,s/2),a.scale(e,e),a.translate(-t.x,-t.z);let l=400,c=Math.ceil(o/l)+1,h=Math.floor(t.x/l),u=Math.floor(t.z/l);a.fillStyle="#2f3741",a.beginPath();for(let d=h-c;d<=h+c;d++)for(let f=u-c;f<=u+c;f++){let g=this.map.chunks.get(Oe(d,f));if(g)for(let m of g.buildings){if(Math.abs(m.cx-t.x)>o||Math.abs(m.cz-t.z)>o)continue;let x=m.pts;a.moveTo(x[0],x[1]);for(let p=2;p<x.length;p+=2)a.lineTo(x[p],x[p+1]);a.closePath()}}a.fill(),a.lineCap="round",a.lineJoin="round";for(let d=6;d>=0;d--){a.strokeStyle=Xf[d];for(let f=h-c;f<=h+c;f++)for(let g=u-c;g<=u+c;g++){let m=this.map.chunks.get(Oe(f,g));if(m)for(let x of m.edges){if(x.cls!==d)continue;a.lineWidth=Math.max(x.w,3/e);let p=x.pts;a.beginPath(),a.moveTo(p[0],p[1]);for(let y=2;y<p.length;y+=2)a.lineTo(p[y],p[y+1]);a.stroke()}}}n&&(a.strokeStyle="#8a9098",a.lineWidth=n.rwW,a.beginPath(),a.moveTo(n.R0.x,n.R0.y),a.lineTo(n.R1.x,n.R1.y),a.stroke())}drawMini(t,e,n,i,s,o){let a=this.mctx,l=this.mini.width,c=this.mini.height,h=this.dpr,u=.55*h*(this.miniZoom||1)*(t.speed>25?.75:1);this._miniBase(t,u,i),a.save(),a.clearRect(0,0,l,c),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.clip(),a.translate(l/2,c/2+c*.12),a.rotate(t.h+Math.PI);let d=this._mb.width;a.drawImage(this._mb,(this._mbX-t.x)*u-d/2,(this._mbZ-t.z)*u-d/2),a.scale(u,u),a.translate(-t.x,-t.z);let f=l/u*.8;if(o&&o(a,u,f),i)for(let p of i.planes)a.fillStyle="#ffffff",a.beginPath(),a.arc(p.x,p.z,14,0,7),a.fill();if(n.route){a.strokeStyle="#3fc8ff",a.lineWidth=6/u*h,a.globalAlpha=.9;let p=n.route;a.beginPath(),a.moveTo(p[0],p[1]);for(let y=2;y<p.length;y+=2)a.lineTo(p[y],p[y+1]);a.stroke(),a.globalAlpha=1}a.fillStyle="#ff9a3a";for(let p of e.cars)Math.abs(p.x-t.x)<f&&Math.abs(p.z-t.z)<f&&a.fillRect(p.x-1.6,p.z-1.6,3.2,3.2);for(let p of Ve)p.x===void 0||Math.abs(p.x-t.x)>f||Math.abs(p.z-t.z)>f||(a.fillStyle=n.visited.has(p.id)?"#6ad06a":"#ffd84a",a.beginPath(),a.arc(p.x,p.z,6/u*h,0,7),a.fill());if(n.routeTarget&&(a.fillStyle="#ff3a6a",a.beginPath(),a.arc(n.routeTarget.x,n.routeTarget.z,8/u*h,0,7),a.fill()),s)for(let p of s.players.values())a.fillStyle="#3ddc84",a.beginPath(),a.arc(p.x,p.z,6/u*h,0,7),a.fill();a.restore(),a.save(),a.translate(l/2,c/2+c*.12),a.fillStyle="#3fc8ff",a.strokeStyle="#fff",a.lineWidth=2*h,a.beginPath(),a.moveTo(0,-10*h),a.lineTo(7*h,8*h),a.lineTo(0,4*h),a.lineTo(-7*h,8*h),a.closePath(),a.fill(),a.stroke(),a.restore();let g=t.h+Math.PI;a.fillStyle="#ff5050",a.font=`700 ${12*h}px Inter, Arial`,a.textAlign="center",a.textBaseline="middle";let m=l/2+Math.sin(g)*(l/2-14*h),x=c/2-Math.cos(g)*(c/2-14*h);a.fillText("N",m,x),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.strokeStyle="rgba(255,255,255,0.25)",a.lineWidth=2*h,a.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",i=>{t={x:i.clientX,y:i.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",i=>{if(!t)return;let s=i.clientX-t.x,o=i.clientY-t.y;Math.abs(s)+Math.abs(o)>4&&(t.moved=!0),this.mapView.x=t.vx-s*this.dpr/this.mapView.s,this.mapView.z=t.vz-o*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",i=>{if(t&&!t.moved&&this.onMapClick){let s=this.big.getBoundingClientRect(),o=this.mapView.x+((i.clientX-s.left)*this.dpr-this.big.width/2)/this.mapView.s,a=this.mapView.z+((i.clientY-s.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(o,a,i.shiftKey)}t=null}),this.big.addEventListener("wheel",i=>{i.preventDefault();let s=this.big.getBoundingClientRect();this.zoomMap(i.deltaY<0?1.25:1/1.25,(i.clientX-s.left)*this.dpr,(i.clientY-s.top)*this.dpr)},{passive:!1});let e=null,n=i=>[...i.touches].map(s=>[s.clientX,s.clientY]);this.big.addEventListener("touchstart",i=>{i.preventDefault();let s=n(i);e={p:s,x:this.mapView.x,z:this.mapView.z,s:this.mapView.s,moved:!1,d:s.length>1?Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]):0}},{passive:!1}),this.big.addEventListener("touchmove",i=>{if(i.preventDefault(),!e)return;let s=n(i);if(s.length>1&&e.d){let o=Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]);this.mapView.s=Math.max(.015,Math.min(4,e.s*o/e.d)),e.moved=!0}else if(s.length===1){let o=s[0][0]-e.p[0][0],a=s[0][1]-e.p[0][1];Math.abs(o)+Math.abs(a)>6&&(e.moved=!0),this.mapView.x=e.x-o*this.dpr/this.mapView.s,this.mapView.z=e.z-a*this.dpr/this.mapView.s}},{passive:!1}),this.big.addEventListener("touchend",i=>{if(e&&!e.moved&&i.touches.length===0&&this.onMapClick){let s=this.big.getBoundingClientRect(),[o,a]=e.p[0];this.onMapClick(this.mapView.x+((o-s.left)*this.dpr-this.big.width/2)/this.mapView.s,this.mapView.z+((a-s.top)*this.dpr-this.big.height/2)/this.mapView.s,!1)}i.touches.length===0?e=null:e={p:n(i),x:this.mapView.x,z:this.mapView.z,s:this.mapView.s,moved:!0,d:0}})}drawBigMap(t,e,n,i){let s=this.big.width,o=this.big.height,a=this.mapView,l=[a.x|0,a.z|0,a.s.toFixed(4),s,o,e.route?e.route.length+":"+(e.route[0]|0):0,this.searchMark?this.searchMark.x:0,e.visited.size].join("|");(!this._base||this._base.width!==s||this._base.height!==o)&&(this._base=document.createElement("canvas"),this._base.width=s,this._base.height=o,this._mapKey=null),l!==this._mapKey&&(this._mapKey=l,this._drawMapBase(this._base.getContext("2d"),t,e,n));let c=this.bctx;c.drawImage(this._base,0,0);let h=(g,m)=>[(g-a.x)*a.s+s/2,(m-a.z)*a.s+o/2];if(c.font=`600 ${11*this.dpr}px Inter, Arial`,c.textAlign="center",i)for(let g of i.players.values()){let[m,x]=h(g.x,g.z);c.fillStyle="#3ddc84",c.beginPath(),c.arc(m,x,6*this.dpr,0,7),c.fill(),c.fillStyle="#fff",c.fillText(g.name,m,x-10*this.dpr)}let[u,d]=h(t.x,t.z);c.save(),c.translate(u,d),c.rotate(Math.PI-t.h),c.fillStyle="#3fc8ff",c.strokeStyle="#fff",c.lineWidth=2*this.dpr;let f=this.dpr;c.beginPath(),c.moveTo(0,-11*f),c.lineTo(8*f,9*f),c.lineTo(0,4*f),c.lineTo(-8*f,9*f),c.closePath(),c.fill(),c.stroke(),c.restore()}_drawMapBase(t,e,n,i,s){let o=this.big.width,a=this.big.height,l=this.mapView,c=l.s;t.fillStyle="#161b20",t.fillRect(0,0,o,a),t.save(),t.translate(o/2,a/2),t.scale(c,c),t.translate(-l.x,-l.z);let h=l.x-o/2/c,u=l.x+o/2/c,d=l.z-a/2/c,f=l.z+a/2/c,g={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let x of this.map.areaList){let p=g[x[0]];if(!p)continue;let y=x[1];if(!(y[0]*.1<h-2e3||y[0]*.1>u+2e3||y[1]*.1<d-2e3||y[1]*.1>f+2e3)){t.fillStyle=p,t.beginPath(),t.moveTo(y[0]*.1,y[1]*.1);for(let M=2;M<y.length;M+=2)t.lineTo(y[M]*.1,y[M+1]*.1);t.fill()}}if(c>.035){t.fillStyle=c>.25?"#343c46":"#2a3139";for(let x of this.map.buildings){if(x.cx<h||x.cx>u||x.cz<d||x.cz>f)continue;let p=x.pts;t.beginPath(),t.moveTo(p[0],p[1]);for(let y=2;y<p.length;y+=2)t.lineTo(p[y],p[y+1]);t.fill()}}t.lineCap="round",t.lineJoin="round";for(let x=6;x>=0;x--)if(!(c<.08&&x>=5)){t.strokeStyle=Xf[x],t.lineWidth=Math.max(qf[x]*.6/c*this.dpr*.5,(this.map.edges[0],0))||1,t.beginPath();for(let p of this.map.edges){if(p.cls!==x)continue;let y=p.pts;if(!(y[0]<h-500||y[0]>u+500||y[1]<d-500||y[1]>f+500)){t.moveTo(y[0],y[1]);for(let M=2;M<y.length;M+=2)t.lineTo(y[M],y[M+1])}}t.lineWidth=Math.max(qf[x]*.5/c*this.dpr,(7-x)*1.2),c>.5&&(t.lineWidth=Math.max(t.lineWidth,6)),t.stroke()}if(i&&(t.strokeStyle="#9aa0a8",t.lineWidth=Math.max(55,3/c),t.beginPath(),t.moveTo(i.R0.x,i.R0.y),t.lineTo(i.R1.x,i.R1.y),t.stroke()),n.route){t.strokeStyle="#3fc8ff",t.lineWidth=5/c*this.dpr;let x=n.route;t.beginPath(),t.moveTo(x[0],x[1]);for(let p=2;p<x.length;p+=2)t.lineTo(x[p],x[p+1]);t.stroke()}t.restore();let m=(x,p)=>[(x-l.x)*c+o/2,(p-l.z)*c+a/2];if(c>.12){t.font=`500 ${10*this.dpr}px Inter, Arial`,t.textAlign="center";let x=[],p=(y,M,v,S,E)=>{let[b,A]=m(M,v);b<0||b>o||A<0||A>a||x.some(_=>Math.abs(_[0]-b)<70*this.dpr&&Math.abs(_[1]-A)<14*this.dpr)||(x.push([b,A]),t.fillStyle=S,t.beginPath(),t.arc(b,A,E*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,.7)",t.fillText(y,b+1,A-6*this.dpr+1),t.fillStyle="#e8eef4",t.fillText(y,b,A-6*this.dpr))};for(let y of this.map.pois)p((y.en||y.name).slice(0,28),y.x,y.z,"#7ec8ff",3);if(c>.55)for(let y of this.map.chunks.values()){let M=y.cx*400,v=y.cz*400;if(!(M>u+400||M+400<h-400||v>f+400||v+400<d-400))for(let S of y.signs)p(S.name.slice(0,24),S.x,S.z,"#ffb070",2.5)}}t.font=`600 ${12*this.dpr}px Inter, Arial`,t.textAlign="center";for(let x of Ve){if(x.x===void 0)continue;let[p,y]=m(x.x,x.z);p<-50||p>o+50||y<-50||y>a+50||(t.fillStyle=n.visited.has(x.id)?"#6ad06a":"#ffd84a",t.beginPath(),t.arc(p,y,5*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.6)",t.fillText(x.name,p+1,y-9*this.dpr+1),t.fillStyle="#fff",t.fillText(x.name,p,y-9*this.dpr))}if(c>.18){t.font=`${10*this.dpr}px Inter, Arial`,t.fillStyle="rgba(255,255,255,0.75)";let x=new Set;for(let p of this.map.edges){if(p.cls>2||p.name<0||p.len<150)continue;let y=this.map.names[p.name],M=y[1]||y[0],v=Math.floor(p.pts.length/4)*2,[S,E]=m(p.pts[v],p.pts[v+1]);if(S<0||S>o||E<0||E>a)continue;let b=M+Math.round(S/220)+","+Math.round(E/220);x.has(b)||(x.add(b),t.fillText(M,S,E))}}if(this.searchMark){let[x,p]=m(this.searchMark.x,this.searchMark.z),y=this.dpr;t.fillStyle="#ff3a6a",t.strokeStyle="#fff",t.lineWidth=2*y,t.beginPath(),t.moveTo(x,p),t.arc(x,p-18*y,9*y,Math.PI*.8,Math.PI*2.2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(x,p-18*y,3.5*y,0,7),t.fill()}if(n.routeTarget){let[x,p]=m(n.routeTarget.x,n.routeTarget.z);t.fillStyle="#ff3a6a",t.beginPath(),t.arc(x,p,7*this.dpr,0,7),t.fill()}t.fillStyle="rgba(255,255,255,0.5)",t.textAlign="right",t.font=`${10*this.dpr}px Inter, Arial`,t.fillText("Map data \xA9 OpenStreetMap contributors",o-10*this.dpr,a-10*this.dpr)}zoomMap(t,e,n){let i=this.mapView,s=this.big.width,o=this.big.height,a=e??s/2,l=n??o/2,c=i.x+(a-s/2)/i.s,h=i.z+(l-o/2)/i.s;i.s=Math.max(.015,Math.min(4,i.s*t)),i.x=c-(a-s/2)/i.s,i.z=h-(l-o/2)/i.s}zoomMini(t){this.miniZoom=Math.max(.35,Math.min(3,(this.miniZoom||1)*t))}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t&&t!==this._street&&(this._street=t,pe("street").innerHTML=`${t}<small>${e||""}</small>`,pe("street").classList.add("show"),clearTimeout(this._stTo),this._stTo=setTimeout(()=>pe("street").classList.remove("show"),4e3))}setMoney(t){let e=Zn(t);if(e!==this._money){let n=this._mv!==void 0&&t>this._mv;if(this._money=e,this._mv=t,pe("money").textContent=e,pe("coins").classList.toggle("neg",t<0),n){let i=pe("coins");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}}setClock(t,e){this.hour=t;let n=this.clockText()+(e!=null?` \xB7 <span class="dot ${e>0?"on":""}"></span>${e+1}`:"");n!==this._clk&&(this._clk=n,pe("clock").innerHTML=n)}setLimit(t,e,n,i){let s=t>di;pe("limit").classList.toggle("show",t>di-12),pe("limit").classList.toggle("over",s);let o=n?"ACTIVE RUNWAY \u2013 LEAVE NOW":e?"WRONG WAY \u2013 ONE-WAY STREET":i||"";o!==this._w&&(this._w=o,pe("warn").textContent=o,pe("warn").classList.toggle("show",!!o))}setMission(t){t!==this._mission&&(this._mission=t,pe("mission").innerHTML=t||"",pe("mission").classList.toggle("show",!!t))}toast(t,e=3){let n=pe("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=pe("fine");pe("fineKind").textContent=t.kind.toUpperCase(),pe("fineAmt").textContent="\u2212"+Zn(t.amount)+" coins",pe("fineDetail").textContent=t.detail,pe("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=pe("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=pe("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=pe("discover");pe("discName").textContent=t.name,pe("discLocal").textContent=t.local||"",pe("discFact").textContent=t.fact,pe("discCount").textContent=`Landmark ${e}/${n} \xB7 +500 coins`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=pe("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),pe("fhAlt").textContent=Math.round(t.alt)+" m",pe("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",pe("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",pe("fhStage").textContent=t.stage,pe("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var Ov=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar","Saltanat","Ulan","Aidana","Bekzat","Kymbat","Marat"],Jn=r=>r[Math.floor(Math.random()*r.length)],es={taxi:{name:"Taxi driver",icon:"\u{1F695}",desc:"Pick up passengers anywhere in the city"},bus:{name:"Bus driver",icon:"\u{1F68C}",desc:"Drive a city bus route, stop at every bus stop",car:"bus"},marshrutka:{name:"Marshrutka driver",icon:"\u{1F690}",desc:"Minibus route \u2013 faster, fewer passengers",car:"van"},courier:{name:"Courier",icon:"\u{1F4E6}",desc:"Deliver food & parcels from real shops"}},Ma=class{constructor(t,e,n,i,s){this.map=t,this.game=e,this.hud=n,this.audio=i,this.peds=s,this.active=null,this.marker=null,this.completed=0,this.shops=[];for(let o of t.chunks.values())for(let a of o.signs)["cafe","restaurant","fast_food","supermarket","convenience","pharmacy","bakery","clothes"].includes(a.kind)&&this.shops.push(a)}_marker(t,e,n,i=16760864){if(!this.markerMesh){let s=new Yt,o=new Z(new Gs(3.2,3.8,48).rotateX(-Math.PI/2),new de({color:i,transparent:!0,opacity:.9,depthWrite:!1}));o.position.y=.25;let a=new Z(new Bt(3.5,3.5,40,32,1,!0),new de({color:i,transparent:!0,opacity:.1,side:Ee,depthWrite:!1,blending:He}));a.position.y=20,s.add(o,a),this.markerMesh=s,this.ring=o,this.beam=a}this.ring.material.color.setHex(i),this.beam.material.color.setHex(i),this.markerMesh.position.set(e,0,n),this.markerMesh.parent||t.add(this.markerMesh),this.markerMesh.visible=!0}_hideMarker(){this.markerMesh&&(this.markerMesh.visible=!1)}_curbPoint(t,e,n=120){let i=this.map.nearestRoad(t,e,n,a=>a.cls>=1&&a.cls<=5);if(!i)return null;let s=i.lat>=0?1:-1,o=i.e.w/2+1.3;return{x:i.x-i.dz*o*s,z:i.z+i.dx*o*s,roadX:i.x-i.dz*(i.e.w/2-1.5)*s,roadZ:i.z+i.dx*(i.e.w/2-1.5)*s}}_spawnPed(t,e,n=!1,i){let s={mode:"plaza",zone:{x:t,z:e,r:.1,active:!0,count:0},x:t,z:e,h:0,tx:t,tz:e,idle:1e9,ex:0,ez:0,dodge:0,wave:n,fixed:!0};return s.shirt=i??Jn([15909376,1981018,9054794,15263976,3890490]),s.pants=2238522,s.skin=Jn([14200976,13146744,14728864]),s.hairC=1709072,s.scale=.95+Math.random()*.1,s.speed=1.3,s.phase=0,this.peds.list.push(s),s}_removePed(t){let e=this.peds.list.indexOf(t);e>=0&&this.peds.list.splice(e,1)}start(t,e,n,i){if(this.stop(e,i,!0),t==="taxi")return this._startTaxi(e,n);if(t==="courier")return this._startCourier(e,n);if(t==="bus"||t==="marshrutka")return this._startBus(t,e,n,i)}stop(t,e,n){let i=this.active;i&&(i.ped&&this._removePed(i.ped),i.boarders&&i.boarders.forEach(s=>this._removePed(s)),i.prevCar&&e&&e(i.prevCar.type,i.prevCar.color,!0),this.active=null,this._hideMarker(),this.game.clearRoute(),n||this.hud.toast("Shift ended",1.5))}_startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=this._curbPoint(t.x+Math.cos(i)*s,t.z+Math.sin(i)*s,80);if(!o||this.map.insideBuilding(o.x,o.z,.5))continue;let a=Ve.filter(c=>c.x!==void 0&&Math.hypot(c.x-o.x,c.z-o.z)>700&&(!c.airport||Math.random()<.35)),l=Jn(a);if(Math.random()<.5&&this.shops.length){let c=Jn(this.shops);Math.hypot(c.x-o.x,c.z-o.z)>600&&(l={name:c.name,x:c.x,z:c.z})}return this.active={type:"taxi",stage:"pickup",x:o.x,z:o.z,dest:l,passenger:Jn(Ov),t:0,damage0:t.damage},this.active.ped=this._spawnPed(o.x,o.z,!0,15909376),this.game.setRoute(o.x,o.z,"Passenger"),this._marker(e,o.x,o.z,16760864),this.audio.chime(),this.hud.toast(`\u{1F695} <b>${this.active.passenger}</b> is waiting for a taxi`,3),!0}return!1}_startCourier(t,e){let n=this.shops.filter(c=>{let h=Math.hypot(c.x-t.x,c.z-t.z);return h>120&&h<900});if(!n.length)return!1;let i=Jn(n),s=this._curbPoint(i.x,i.z,60)||{x:i.x,z:i.z},o=null;for(let c=0;c<60&&!o;c++){let h=this.map.buildings[Math.floor(Math.random()*this.map.buildings.length)],u=Math.hypot(h.cx-s.x,h.cz-s.z);u>900&&u<3200&&h.h>3&&(o=h)}if(!o)return!1;let a=this._curbPoint(o.cx,o.cz,80)||{x:o.cx,z:o.cz},l={cafe:"coffee & samsa",restaurant:"plov & lagman",fast_food:"shawarma",supermarket:"groceries",convenience:"a parcel",pharmacy:"medicine",bakery:"fresh nan",clothes:"a clothes parcel"}[i.kind]||"a parcel";return this.active={type:"courier",stage:"pickup",x:s.x,z:s.z,shop:i,item:l,dest:{name:"Customer",x:a.x,z:a.z},t:0,damage0:t.damage},this.game.setRoute(s.x,s.z,i.name),this._marker(e,s.x,s.z,4251776),this.audio.chime(),this.hud.toast(`\u{1F4E6} Pick up <b>${l}</b> at <b>${i.name}</b>`,3),!0}_startBus(t,e,n,i){let s=this.map.busStopList,o=s.map(a=>({s:a,d:Math.hypot(a[0]-e.x,a[1]-e.z)})).filter(a=>a.d<1500).sort((a,l)=>a.d-l.d).slice(0,12);if(!o.length)return this.hud.toast("No bus stops nearby \u2013 drive into the city",2),!1;for(let a=0;a<12;a++){let l=Jn(o).s,c=s.filter(y=>{let M=Math.hypot(y[0]-l[0],y[1]-l[1]);return M>2500&&M<5500});if(!c.length)continue;let h=Jn(c),u=this.map.route(l[0],l[1],h[0],h[1]);if(!u||u.length<8)continue;let d=[],f=0;for(let y=0;y<u.length-2;y+=2){let M=u[y],v=u[y+1],S=u[y+2],E=u[y+3],b=S-M,A=E-v,_=Math.hypot(b,A)||1;for(let w of s){if(Math.abs(w[0]-M)>_+25||Math.abs(w[1]-v)>_+25)continue;let R=((w[0]-M)*b+(w[1]-v)*A)/(_*_);if(R<0||R>1)continue;let L=M+b*R,k=v+A*R,H=((w[0]-M)*-A+(w[1]-v)*b)/_;Math.abs(H)<22&&H>-4&&d.push({x:w[0],z:w[1],d:f+R*_,px:L,pz:k})}f+=_}d.sort((y,M)=>y.d-M.d);let g=[];for(let y of d)(!g.length||y.d-g[g.length-1].d>220)&&g.push(y);if(g.length<4)continue;let m=Jn(t==="bus"?["7","20","31","35","38","42","48","52","62","64"]:["107","110","126","144","150","174","192","206","212","238","246","265"]);this.active={type:t,stage:"drive",stops:g.slice(0,12),i:0,num:m,t:0,pax:0,earned:0,boarders:[],prevCar:{type:e.type,color:e.color}},i(es[t].car,t==="bus"?2783802:16053492,!1);let x=this.active.stops[0],p=this.map.nearestRoad(x.px,x.pz,40,y=>y.cls<=4);if(p){let y=this.map.laneOffset(p.e,(p.e.ow,p.e.lanes-1)),M=u[2]-u[0],v=u[3]-u[1],S=p.dx,E=p.dz;S*M+E*v<0&&(S=-S,E=-E),e.place(p.x-E*y,p.z+S*y,Math.atan2(S,E))}return this.active.i=1,this._nextStop(n),this.audio.chime(),this.hud.toast(`${es[t].icon} Route <b>${m}</b>: ${g.length} stops. Stop at each bus stop to pick up passengers.`,4),!0}return this.hud.toast("Could not build a route here \u2013 try on a main avenue",2),!1}_nextStop(t){let e=this.active,n=e.stops[e.i];this.game.setRoute(n.x,n.z,`Stop ${e.i+1}/${e.stops.length}`),this._marker(t,n.px,n.pz,4235519),e.boarders.forEach(s=>this._removePed(s)),e.boarders=[];let i=1+Math.floor(Math.random()*(e.type==="bus"?6:4));for(let s=0;s<i;s++)e.boarders.push(this._spawnPed(n.x+(Math.random()-.5)*4,n.z+(Math.random()-.5)*3,!1))}update(t,e,n,i){let s=this.active;return s?(s.t+=t,this.markerMesh&&(this.ring.rotation.y+=t,this.beam.material.opacity=.08+.05*Math.sin(s.t*4)),s.type==="taxi"||s.type==="courier"?this._updateAB(t,e,n):this._updateBus(t,e,n,i)):null}_updateAB(t,e,n){let i=this.active,s=Math.hypot(e.x-i.x,e.z-i.z);if(i.ped&&i.stage==="pickup"&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.moving=!1),i.stage==="pickup"&&s<10&&e.speed<1.5)return i.ped?(i.stage="boarding",i.ped.wave=!1,i.ped.tx=e.x,i.ped.tz=e.z,i.ped.idle=0,i.ped.zone.r=.1,i.bt=0):this._beginRide(e,n),null;if(i.stage==="boarding"){i.bt+=t;let o=i.ped,a=e.x-o.x,l=e.z-o.z,c=Math.hypot(a,l);return c>2&&i.bt<5?(o.x+=a/c*1.6*t,o.z+=l/c*1.6*t,o.h=Math.atan2(a,l),o.moving=!0,o.phase+=t*8):(this._removePed(o),i.ped=null,this.audio.blip(520,.06),this._beginRide(e,n)),null}if(i.stage==="ride"&&s<14&&e.speed<1.5){let o=i.t-i.t0,a=i.dist,l=i.type==="taxi"?120+a/1e3*55:90+a/1e3*45,c=a/1e3*95+35,h=Math.max(0,e.damage-i.damage0),u=o<c?Math.min(l*.4,(c-o)*1.2):0,d=h*(i.type==="courier"?6:3),f=Math.max(1,Math.min(5,Math.round(5-h/8-Math.max(0,o-c)/40))),g=Math.max(20,Math.round((l+u-d)*(.6+f*.1)/5)*5);this.game.money+=g,this.completed++,this.audio.cash(),this.hud.toast(`${i.type==="taxi"?"\u{1F695}":"\u{1F4E6}"} +${g} coins \xB7 ${"\u2605".repeat(f)}${"\u2606".repeat(5-f)}${i.type==="taxi"?` \xB7 ${i.passenger}: "Rahmat!"`:""}`,4);let m=i.type;return this.active=null,this._hideMarker(),this.game.clearRoute(),this.nextIn=3,this.nextType=m,{done:!0,coins:g}}return null}_beginRide(t,e){let n=this.active;n.stage="ride",n.t0=n.t,n.x=n.dest.x,n.z=n.dest.z,n.dist=Math.hypot(n.x-t.x,n.z-t.z),this.game.setRoute(n.x,n.z,n.dest.name),this._marker(e,n.x,n.z,n.type==="taxi"?16728160:4251776),this.audio.chime(),this.hud.toast(n.type==="taxi"?`${n.passenger}: "Salam! To ${n.dest.name}, please."`:`\u{1F4E6} Got ${n.item}. Deliver it carefully!`,3)}_updateBus(t,e,n,i){let s=this.active,o=s.stops[s.i],a=Math.hypot(e.x-o.px,e.z-o.pz);if(s.stage==="drive"&&a<14&&e.speed<1&&(s.stage="doors",s.dt=0,this.audio.blip(440,.1)),s.stage==="doors"){s.dt+=t;let l=0;for(let c of s.boarders){if(c.gone)continue;let h=e.x-c.x,u=e.z-c.z,d=Math.hypot(h,u);d<2.8||s.dt>7?(c.gone=!0,this._removePed(c),s.pax++,this.game.money+=s.type==="bus"?15:20,s.earned+=s.type==="bus"?15:20,this.audio.blip(880,.03,.05)):(c.x+=h/d*1.7*t,c.z+=u/d*1.7*t,c.h=Math.atan2(h,u),c.moving=!0,c.phase+=t*8,l++)}if(e.speed>2&&(s.stage="drive",this.hud.toast("You left before everyone boarded!",1.5)),!l&&s.dt>2.5){if(s.i++,s.i>=s.stops.length){let c=150+s.stops.length*20;this.game.money+=c,s.earned+=c,this.completed++,this.audio.cash(),this.hud.toast(`\u{1F3C1} Route ${s.num} complete! ${s.pax} passengers \xB7 +${s.earned} coins`,5);let h=s.prevCar;return this.active=null,this._hideMarker(),this.game.clearRoute(),i(h.type,h.color,!0),{done:!0,coins:s.earned}}s.stage="drive",this._nextStop(n)}}return null}status(t){let e=this.active;return e?e.type==="taxi"?e.stage==="ride"?`\u{1F695} ${e.passenger} \u2192 ${e.dest.name}`:`\u{1F695} Pick up ${e.passenger}`:e.type==="courier"?e.stage==="ride"?`\u{1F4E6} Deliver ${e.item}`:`\u{1F4E6} Pick up at ${e.shop.name}`:`${es[e.type].icon} Route ${e.num} \xB7 stop ${Math.min(e.i+1,e.stops.length)}/${e.stops.length} \xB7 ${e.pax} pax`:null}};var Vv="wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket",$f="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU",bh="realtime:bskdrive-world-v1";function Gv(){try{let r=localStorage.getItem("bd_uid");return r||(r=Math.random().toString(36).slice(2,10),localStorage.setItem("bd_uid",r)),r}catch{return Math.random().toString(36).slice(2,10)}}function Yf(r,t="#ffffff"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font="700 30px Inter, Arial";let i=Math.min(248,n.measureText(r).width+28);n.fillStyle="rgba(10,14,20,0.72)";let s=18,o=(256-i)/2;n.beginPath(),n.moveTo(o+s,8),n.arcTo(o+i,8,o+i,56,s),n.arcTo(o+i,56,o,56,s),n.arcTo(o,56,o,8,s),n.arcTo(o,8,o+i,8,s),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,33);let a=new ze(e);a.colorSpace=ye;let l=new _n(new dn({map:a,depthTest:!0,transparent:!0}));return l.scale.set(4.2,1.05,1),l}var wa=class{constructor(t){this.scene=t,this.id=Gv(),this.players=new Map,this.ws=null,this.ref=1,this.joined=!1,this.status="offline",this.enabled=!1,this.sendT=0,this.hbT=0,this.onChat=null,this.onJoin=null,this.lastSent=null}connect(t){this.name=(t||"Driver").slice(0,18),this.enabled=!0,this._open()}disconnect(){if(this.enabled=!1,this.ws)try{this._push("bye",{i:this.id}),this.ws.close()}catch{}this.ws=null,this.joined=!1,this.status="offline";for(let t of[...this.players.keys()])this._drop(t)}_open(){if(!this.enabled)return;this.status="connecting";let t;try{t=new WebSocket(`${Vv}?apikey=${$f}&vsn=1.0.0`)}catch{this._retry();return}this.ws=t,t.onopen=()=>{t.send(JSON.stringify({topic:bh,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:this.id}},access_token:$f},ref:String(this.ref++),join_ref:"1"}))},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.event==="phx_reply"&&n.topic===bh&&n.payload?.status==="ok"&&!this.joined){this.joined=!0,this.status="online",this.backoff=1,this._push("hi",{i:this.id,n:this.name});return}n.event==="broadcast"&&n.payload&&this._recv(n.payload.event,n.payload.payload)},t.onclose=()=>{this.joined=!1,this.status="offline",this.ws=null,this._retry()},t.onerror=()=>{}}_retry(){this.enabled&&(this.backoff=Math.min(30,(this.backoff||1)*2),clearTimeout(this._rt),this._rt=setTimeout(()=>this._open(),this.backoff*1e3))}_push(t,e){!this.ws||this.ws.readyState!==1||!this.joined||this.ws.send(JSON.stringify({topic:bh,event:"broadcast",payload:{type:"broadcast",event:t,payload:e},ref:String(this.ref++),join_ref:"1"}))}chat(t){t=String(t).slice(0,120).trim(),t&&(this._push("c",{i:this.id,n:this.name,m:t}),this.onChat&&this.onChat(this.name,t,!0))}_recv(t,e){if(!(!e||e.i===this.id))if(t==="s"){let n=this.players.get(e.i);n||(n=this._add(e)),(n.type!==e.t||n.color!==e.c)&&this._rebuild(n,e.t,e.c),n.name!==e.n&&(n.name=e.n,n.group.remove(n.tag),n.tag=Yf(e.n),n.tag.position.y=n.spec.roof[2][1]+1.6,n.group.add(n.tag)),n.snaps.push({t:performance.now(),x:e.x,z:e.z,h:e.h,v:e.v,b:e.b}),n.snaps.length>20&&n.snaps.shift(),n.last=performance.now(),n.money=e.m??n.money,n.job=e.j||"",n.jobs=e.k??n.jobs}else t==="c"?this.onChat&&this.onChat(e.n,e.m,!1):t==="hi"?(this.onJoin&&this.onJoin(e.n),this.sendT=0,this.lastSent=null):t==="bye"&&this._drop(e.i)}_add(t){let e=new Yt,n={id:t.i,name:t.n,group:e,snaps:[],last:performance.now(),x:t.x,z:t.z,h:t.h,money:0,type:null,color:null};return this.players.set(t.i,n),this._rebuild(n,t.t,t.c),n.tag=Yf(t.n),n.tag.position.y=n.spec.roof[2][1]+1.6,e.add(n.tag),this.scene.add(e),this.onJoin&&this.onJoin(t.n),n}_rebuild(t,e,n){t.body&&(t.group.remove(t.body),t.body.traverse(c=>c.geometry&&c.geometry.dispose()));let i=An(["sedan","suv","coupe","hatch","oldsedan","van","bus"].includes(e)?e:"sedan",{}),s=new Yt,o=new Z(i.paint,new Ci({color:n??16777215,metalness:.45,roughness:.32,clearcoat:1,vertexColors:!0})),a=new Z(i.detail,new yt({vertexColors:!0,metalness:.3,roughness:.3}));t.lightMat=new yt({vertexColors:!0,emissive:16777215,emissiveIntensity:.3});let l=new Z(i.lights,t.lightMat);o.castShadow=a.castShadow=!0,s.add(o,a,l),t.body=s,t.group.add(s),t.spec=i.spec,t.type=e,t.color=n,t.tag&&(t.tag.position.y=i.spec.roof[2][1]+1.6)}_drop(t){let e=this.players.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.players.delete(t))}update(t,e,n,i){if(!this.enabled)return;let s=performance.now();if(this.sendT-=t,this.hbT-=t,this.joined&&this.sendT<=0){let a=e.speed>.3,l={i:this.id,n:this.name,t:e.type,c:e.color,x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,h:Math.round(e.h*1e3)/1e3,v:Math.round(e.speed*10)/10,b:e.braking?1:0,m:Math.round(n.money),j:n.job||"",k:n.jobs||0};this._push("s",l),this.sendT=a?.16:1}this.hbT<=0&&this.ws&&this.ws.readyState===1&&(this.hbT=25,this.ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(this.ref++)})));let o=s-200;for(let[a,l]of this.players){if(s-l.last>8e3){this._drop(a);continue}let c=l.snaps;if(!c.length)continue;let h=c[0],u=c[c.length-1];for(let m=0;m<c.length-1;m++)if(c[m].t<=o&&c[m+1].t>=o){h=c[m],u=c[m+1];break}let d,f,g;if(o>=u.t){let m=Math.min(.5,(o-u.t)/1e3);d=u.x+Math.sin(u.h)*u.v*m,f=u.z+Math.cos(u.h)*u.v*m,g=u.h}else{let m=(o-h.t)/Math.max(1,u.t-h.t);d=h.x+(u.x-h.x)*m,f=h.z+(u.z-h.z)*m;let x=u.h-h.h;x=Math.atan2(Math.sin(x),Math.cos(x)),g=h.h+x*m}l.x=d,l.z=f,l.h=g,l.v=u.v,l.group.position.set(d,.02,f),l.group.rotation.y=g,l.lightMat.emissiveIntensity=u.b?1.4:i>.45?1.8:.3}}collide(t,e){for(let n of this.players.values()){let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s>200)continue;let o=n.spec.W/2,a=Math.max(2,Math.round(n.spec.L/2.2));for(let l=0;l<a;l++){let c=(l/(a-1)-.5)*(n.spec.L-o*2),h=n.x+Math.sin(n.h)*c,u=n.z+Math.cos(n.h)*c;for(let d of[t.spec.L*.3,0,-t.spec.L*.3]){let f=t.x+Math.sin(t.h)*d,g=t.z+Math.cos(t.h)*d,m=f-h,x=g-u,p=Math.hypot(m,x),y=t.radius+o;if(p<y&&p>1e-4){let M=m/p,v=x/p;t.x+=M*(y-p),t.z+=v*(y-p);let S=(t.vx-Math.sin(n.h)*n.v)*M+(t.vz-Math.cos(n.h)*n.v)*v;S<0&&(t.vx-=M*S*1.2,t.vz-=v*S*1.2,-S>2&&e&&e(-S,"player"))}}}}}list(){return[...this.players.values()].map(t=>({name:t.name,money:t.money||0,job:t.job,car:t.type,x:t.x,z:t.z}))}};var ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var bn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Wv=new Fs(-1,1,1,-1,0,1),Eh=class extends ie{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Xv=new Eh,Di=class{constructor(t){this._mesh=new Z(Xv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Wv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ns=class extends bn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=$n.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Di(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Br=class extends bn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Ea=class extends bn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Sa=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new Qe(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ns(ba),this.copyPass.material.blending=Vn,this.clock=new qs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Br!==void 0&&(o instanceof Br?n=!0:o instanceof Ea&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Zf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Qs=class r extends bn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Qe(s,o,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new Qe(s,o,{type:Mn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new Qe(s,o,{type:Mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Zf;this.highPassUniforms=$n.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ba;this.copyUniforms=$n.clone(h.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:He,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new de,this.fsQuad=new Di(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new _e({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};Qs.BlurDirectionX=new tt(1,0);Qs.BlurDirectionY=new tt(0,1);var Jf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Ta=class extends bn{constructor(){super();let t=Jf;this.uniforms=$n.clone(t.uniforms),this.material=new $o({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Di(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ue.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===kr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sh=class extends bn{constructor(t,e,n){super(),this.env=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),this.env.render(t),t.clearDepth(),t.render(this.scene,this.camera)}},qv={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); c.rgb = clamp(c.rgb, 0.0, 30.0); if (any(isnan(c.rgb))) c.rgb = vec3(0.0); gl_FragColor = c; }"},$v={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uContrast:{value:1.06},uWarm:{value:.02},uTime:{value:0},uGrain:{value:.025}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette, uSat, uContrast, uWarm, uTime, uGrain; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233)))*43758.5453); }
    void main(){
      vec4 c = texture2D(tDiffuse, vUv);
      vec3 col = c.rgb;
      float l = dot(col, vec3(0.2126,0.7152,0.0722));
      col = mix(vec3(l), col, uSat);
      col = (col - 0.5) * uContrast + 0.5;
      col += vec3(uWarm, uWarm*0.4, -uWarm);
      // subtle split toning: cool shadows, warm highlights
      col = mix(col, col*vec3(0.95,1.0,1.06), (1.0 - l)*0.25);
      vec2 d = vUv - 0.5; float v = 1.0 - dot(d, d) * uVignette * 2.2;
      col *= v;
      col += (h(vUv*1000.0 + uTime) - 0.5) * uGrain;
      gl_FragColor = vec4(clamp(col, 0.0, 1.0), c.a);
    }`},Aa=class{constructor(t,e,n,i,s){this.renderer=t;let o=t.getDrawingBufferSize(new tt),a=new Qe(o.x,o.y,{type:Mn,samples:s.msaa?4:0});this.composer=new Sa(t,a),this.composer.addPass(new Sh(e,n,i)),this.composer.addPass(new ns(qv)),this.bloom=new Qs(new tt(o.x/2,o.y/2),.35,.55,.92),this.bloom.enabled=s.bloom!==!1,this.composer.addPass(this.bloom),this.composer.addPass(new Ta),this.grade=new ns($v),this.composer.addPass(this.grade)}setSize(t,e){this.composer.setSize(t,e)}setNight(t){this.bloom.strength=.18+t*.7,this.bloom.threshold=14-t*13.1,this.grade.uniforms.uWarm.value=.015*(1-t),this.grade.uniforms.uSat.value=1.08-t*.1}render(t){this.grade.uniforms.uTime.value+=t,this.composer.render(t)}};var Ra=class{constructor(t){this.scene=t,this.ND=260;let e=new Tt(1,1,1);this.debris=new Pe(e,new yt({roughness:.4,metalness:.4}),this.ND),this.debris.instanceMatrix.setUsage(Ys),this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.debris.count=0,this.debris.setColorAt(0,new bt),t.add(this.debris),this.parts=[],this.NS=200,this.sparkPos=new Float32Array(this.NS*3);let n=new ie;n.setAttribute("position",new fe(this.sparkPos,3)),this.sparkPts=new ui(n,new Zi({color:16762976,size:.18,transparent:!0,blending:He,depthWrite:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.sparks=[];let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),o=s.createRadialGradient(32,32,2,32,32,30);o.addColorStop(0,"rgba(255,255,255,0.9)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,64,64),this.smokeTex=new ze(i),this.smokePool=[];for(let a=0;a<140;a++){let l=new _n(new dn({map:this.smokeTex,color:3355443,transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,t.add(l),this.smokePool.push({s:l,life:0})}this.si=0,this.emitters=[],this.M=new ne,this.Q=new Ne,this.E=new Ke,this.V=new I,this.S=new I,this.C=new bt}crash(t,e,n,i,s,o,a=13421772){let l=Math.min(26,Math.round(4+o*1.6));for(let h=0;h<l;h++){let u=Math.random(),d=u<.35?12572904:u<.6?1381653:u<.7?16724e3:a,f=u<.35?.05+Math.random()*.06:.08+Math.random()*.22,g=2+Math.random()*o*.5,m=Math.atan2(s,i)+(Math.random()-.5)*2.2;this._part({x:t,y:e+Math.random()*.5,z:n,vx:Math.cos(m)*g,vy:1.5+Math.random()*3.5,vz:Math.sin(m)*g,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*20,wy:(Math.random()-.5)*20,s:f,sx:f*(u<.35?1.4:1+Math.random()*2),life:5+Math.random()*4,col:d})}let c=Math.min(40,Math.round(o*3));for(let h=0;h<c;h++){let u=Math.random()*Math.PI*2,d=2+Math.random()*6;this.sparks.push({x:t,y:e+.4,z:n,vx:Math.cos(u)*d+i*2,vy:Math.random()*4,vz:Math.sin(u)*d+s*2,life:.3+Math.random()*.4}),this.sparks.length>this.NS&&this.sparks.shift()}for(let h=0;h<4;h++)this.puff(t,e+.5,n,7829367,1.5)}_part(t){this.parts.length>=this.ND&&this.parts.shift(),this.parts.push(t)}puff(t,e,n,i=3355443,s=1,o=1.2){let a=this.smokePool[this.si++%this.smokePool.length];a.s.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.s.material.color.setHex(i),a.life=1,a.size=s,a.vy=o*(.7+Math.random()*.6),a.vx=(Math.random()-.5)*.6,a.vz=(Math.random()-.5)*.6,a.s.visible=!0}emitter(t,e,n=!0){let i={obj:t,offset:e,dark:n,t:0};return this.emitters.push(i),i}removeEmitter(t){let e=this.emitters.indexOf(t);e>=0&&this.emitters.splice(e,1)}update(t){let{M:e,Q:n,E:i,V:s,S:o,C:a}=this,l=0;for(let h=this.parts.length-1;h>=0;h--){let u=this.parts[h];if(u.life-=t,u.life<=0){this.parts.splice(h,1);continue}(u.y>u.s*.5||u.vy>0)&&(u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.rx+=u.wx*t,u.ry+=u.wy*t,u.y<u.s*.5&&(u.y=u.s*.5,u.vy=-u.vy*.3,u.vx*=.6,u.vz*=.6,u.wx*=.5,u.wy*=.5,Math.abs(u.vy)<.5&&(u.vy=0)))}for(let h of this.parts){i.set(h.rx,h.ry,0),n.setFromEuler(i);let u=Math.min(1,h.life);e.compose(s.set(h.x,h.y+.12,h.z),n,o.set(h.sx*u,h.s*.35*u,h.s*u)),this.debris.setMatrixAt(l,e),this.debris.setColorAt(l,a.setHex(h.col)),l++}this.debris.count=l,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor&&(this.debris.instanceColor.needsUpdate=!0);let c=0;for(let h=this.sparks.length-1;h>=0;h--){let u=this.sparks[h];if(u.life-=t,u.life<=0){this.sparks.splice(h,1);continue}u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t}for(let h of this.sparks)this.sparkPos[c*3]=h.x,this.sparkPos[c*3+1]=Math.max(.05,h.y),this.sparkPos[c*3+2]=h.z,c++;this.sparkPts.geometry.setDrawRange(0,c),this.sparkPts.geometry.attributes.position.needsUpdate=!0;for(let h of this.emitters)if(h.t-=t,h.t<=0){h.t=h.dark?.12:.25;let u=h.obj,d=Math.cos(u.h),f=Math.sin(u.h),g=h.offset[0],m=h.offset[2];this.puff(u.x+g*d+m*f,h.offset[1],u.z-g*f+m*d,h.dark?2236962:10066329,h.dark?1.4:.9,h.dark?2.2:1.2)}for(let h of this.smokePool)h.life<=0||(h.life-=t*.35,h.s.position.x+=h.vx*t,h.s.position.y+=h.vy*t,h.s.position.z+=h.vz*t,h.s.scale.setScalar(h.size*(1+(1-h.life)*4)),h.s.material.opacity=Math.max(0,h.life*.55),h.life<=0&&(h.s.visible=!1))}};function Yv(){let r=document.createElement("canvas");r.width=512,r.height=96;let t=r.getContext("2d");t.fillStyle="#1446a0",t.fillRect(0,30,512,40),t.fillStyle="#ffffff",t.font="bold 34px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("\u041F\u0410\u0422\u0420\u0423\u041B\u042C\u041D\u0410\u042F \u041C\u0418\u041B\u0418\u0426\u0418\u042F",256,51);let e=new ze(r);return e.colorSpace=ye,e.anisotropy=4,e}function Zv(){let r=new Yt,t=new yt({color:2896962,roughness:.8}),e=new yt({color:13164576,roughness:.6,emissive:3160064}),n=new yt({color:13146744}),i=(a,l,c,h,u)=>{let d=new Z(a,l);return d.position.set(c,h,u),d.castShadow=!0,r.add(d),d};i(new Tt(.46,.62,.27),e,0,1.25,0),i(new Tt(.4,.2,.24),t,0,.9,0),i(new Se(.12,12,10),n,0,1.7,0),i(new Bt(.15,.14,.08,14),t,0,1.84,0),i(new Tt(.34,.03,.36),t,0,1.8,.04);let s=[],o=[];for(let a of[-1,1]){let l=new Yt;l.position.set(.1*a,.9,0);let c=new Z(new Tt(.15,.88,.16).translate(0,-.44,0),t);c.castShadow=!0,l.add(c),r.add(l),s.push(l);let h=new Yt;h.position.set(.28*a,1.52,0);let u=new Z(new Tt(.1,.62,.11).translate(0,-.31,0),t);u.castShadow=!0,h.add(u),r.add(h),o.push(h)}return r.userData={legs:s,arms:o},r}var Ca=class{constructor(t,e,n,i,s,o){this.scene=t,this.map=e,this.world=n,this.audio=i,this.hud=s,this.fx=o,this.cars=[],this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this.lastSeen=0,this.cutscene=null;let a=An("sedan",{});this.geo=a,this.mats={paint:new Ci({color:16054008,metalness:.4,roughness:.3,clearcoat:1,vertexColors:!0}),det:new yt({vertexColors:!0,metalness:.3,roughness:.3}),red:new yt({color:4194304,emissive:16715792,emissiveIntensity:0}),blue:new yt({color:64,emissive:1065215,emissiveIntensity:0}),text:new yt({map:Yv(),transparent:!0,roughness:.4}),stripe:new yt({color:1328800,roughness:.4})},this.lights=[new ts(16719904,0,30,2),new ts(2117887,0,30,2)];for(let l of this.lights)t.add(l)}crime(t,e){let n=this.wanted;this.heat=Math.min(5.99,this.heat+t),this.wanted=Math.max(this.wanted,Math.floor(this.heat)),this.escapeT=0,this.wanted>n&&(this.hud.toast(`\u{1F6A8} ${e} \u2013 the police are after you!`,2.5),this._updateStars())}_updateStars(){let t=document.getElementById("wanted");t&&(t.innerHTML=this.wanted?"\u2605".repeat(this.wanted)+"<span>"+"\u2605".repeat(5-this.wanted)+"</span>":"",t.classList.toggle("show",this.wanted>0))}_makeCar(t,e,n){let i=new Yt,s=this.geo.spec,o=new Z(this.geo.paint,this.mats.paint),a=new Z(this.geo.detail,this.mats.det);o.castShadow=a.castShadow=!0,i.add(o,a);let l=s.roof[2][1],c=new Z(new Tt(1.1,.12,.3),new yt({color:2236962}));c.position.set(0,l+.06,-.2),i.add(c);let h=new Z(new Tt(.5,.14,.26),this.mats.red);h.position.set(-.28,l+.12,-.2);let u=new Z(new Tt(.5,.14,.26),this.mats.blue);u.position.set(.28,l+.12,-.2),i.add(h,u);for(let f of[-1,1]){let g=new Z(new Ce(s.L*.8,.22),this.mats.stripe);g.position.set(f*(s.W/2+.012),.72,0),g.rotation.y=f*Math.PI/2,i.add(g);let m=new Z(new Ce(2.4,.45),this.mats.text);m.position.set(f*(s.W/2+.02),.72,-.1),m.rotation.y=f*Math.PI/2,i.add(m)}this.scene.add(i);let d={g:i,x:t,z:e,h:n,v:0,path:null,pi:0,repath:0,stuck:0,spec:s,radius:s.W/2+.05};return this.cars.push(d),d}_spawn(t,e,n){for(let i=0;i<30;i++){let s=n+Math.PI+(Math.random()-.5)*2.2*(i>15?2:1),o=180+Math.random()*120,a=this.map.nearestRoad(t+Math.sin(s)*o,e+Math.cos(s)*o,80,c=>c.cls<=4);if(!a||this.map.insideBuilding(a.x,a.z,1))continue;let l=Math.atan2(t-a.x,e-a.z);return this._makeCar(a.x,a.z,l)}return null}clear(){for(let t of this.cars)this.scene.remove(t.g);this.cars.length=0,this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this._updateStars(),this.audio.siren(!1);for(let t of this.lights)t.intensity=0}update(t,e,n){if(this.cutscene)return this._updateCutscene(t,e);let s=performance.now()/1e3*4%2<1;if(this.mats.red.emissiveIntensity=this.wanted?s?4:.2:0,this.mats.blue.emissiveIntensity=this.wanted?s?.2:4:0,!this.wanted){this.cars.length&&this.clear(),this.heat=Math.max(0,this.heat-t*.05);return}let o=Math.min(4,this.wanted);this.cars.length<o&&Math.random()<t*.8&&this._spawn(e.x,e.z,e.h);let a=1e9,l=null;for(let u of this.cars){this._drive(u,t,e);let d=Math.hypot(u.x-e.x,u.z-e.z);d<a&&(a=d,l=u),u.g.position.set(u.x,.02,u.z),u.g.rotation.y=u.h}if(l)for(let u=0;u<2;u++)this.lights[u].position.set(l.x+(u?.4:-.4),2,l.z),this.lights[u].intensity=(u?!s:s)?25:2;this.audio.siren(a<450),a<9&&e.speed<2.2?this.bustT+=t:this.bustT=Math.max(0,this.bustT-t*.5),e.damage>=100&&a<20&&(this.bustT+=t);let c=document.getElementById("bust");if(c&&(c.style.width=Math.min(100,this.bustT/2.5*100)+"%",c.parentElement.classList.toggle("show",this.bustT>.05)),this.bustT>2.5){this._startCutscene(l,e),n&&n();return}a>260?this.escapeT+=t:this.escapeT=0;let h=8+this.wanted*4;this.escapeT>h&&(this.hud.toast(`\u{1F60E} You lost the police! (${this.wanted}\u2605 escape)`,3),this.onEscape&&this.onEscape(this.wanted),this.clear())}_drive(t,e,n){let i=Math.hypot(n.x-t.x,n.z-t.z),s=n.x+n.vx*Math.min(1.2,i/40),o=n.z+n.vz*Math.min(1.2,i/40);if(t.repath-=e,i>70&&((t.repath<=0||!t.path)&&(t.path=this.map.route(t.x,t.z,n.x,n.z),t.pi=2,t.repath=2.5),t.path)){for(;t.pi<t.path.length-2&&Math.hypot(t.path[t.pi]-t.x,t.path[t.pi+1]-t.z)<14;)t.pi+=2;s=t.path[t.pi],o=t.path[t.pi+1]}let l=Math.atan2(s-t.x,o-t.z)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let c=Math.min(2.2,9/Math.max(4,t.v))*e;t.h+=Ie.clamp(l,-c,c);let h=i>70?44:Math.max(6,n.speed+6);Math.abs(l)>.6&&(h=Math.min(h,12)),i<12&&(h=Math.max(2,n.speed)),t.v+=Ie.clamp(h-t.v,-12*e,7*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e;let u={};for(let d of[1.5,-1.5])this.world.collide(t.x+Math.sin(t.h)*d,t.z+Math.cos(t.h)*d,t.radius,u)&&(t.x+=u.x,t.z+=u.z,t.v*=.85);t.v<1.5&&i>40?t.stuck+=e:t.stuck=0,t.stuck>4&&i>120&&(this.scene.remove(t.g),this.cars.splice(this.cars.indexOf(t),1));for(let d of[n.spec.L*.3,0,-n.spec.L*.3]){let f=n.x+Math.sin(n.h)*d,g=n.z+Math.cos(n.h)*d;for(let m of[1.3,-1.3]){let x=t.x+Math.sin(t.h)*m,p=t.z+Math.cos(t.h)*m,y=f-x,M=g-p,v=Math.hypot(y,M),S=n.radius+t.radius;if(v<S&&v>1e-4){let E=y/v,b=M/v;n.x+=E*(S-v)*.6,n.z+=b*(S-v)*.6,t.x-=E*(S-v)*.4,t.z-=b*(S-v)*.4;let A=(n.vx-Math.sin(t.h)*t.v)*E+(n.vz-Math.cos(t.h)*t.v)*b;A<0&&(n.vx-=E*A,n.vz-=b*A,t.v*=.6,-A>4&&(this.fx&&this.fx.crash(x+E*t.radius,.6,p+b*t.radius,E,b,-A,16054008),this.audio.crash(-A),n.damage=Math.min(100,n.damage+-A*.4),this.onRam&&this.onRam(-A)))}}}}_startCutscene(t,e){this.audio.siren(!0);let n=Zv();this.scene.add(n);let i=Math.sin(e.h),s=Math.cos(e.h),o=-s,a=i;t||(t=this._makeCar(e.x+i*7,e.z+s*7,e.h+Math.PI));let l=e.x+i*6.5-o*2.2,c=e.z+s*6.5-a*2.2;this.cutscene={t:0,pc:t,off:n,from:{x:t.x,z:t.z,h:t.h},to:{x:l,z:c,h:e.h+Math.PI*.8},fine:250+this.wanted*250,stars:this.wanted},document.getElementById("cine").classList.add("on"),document.getElementById("bustBox").classList.remove("show")}_updateCutscene(t,e){let n=this.cutscene,i=n.pc;n.t+=t;let s=n.t;e.vx=e.vz=0,e.r=0;let o=performance.now()/250%2<1;this.mats.red.emissiveIntensity=o?4:.2,this.mats.blue.emissiveIntensity=o?.2:4;let a=Math.min(1,s/1.5),l=1-Math.pow(1-a,3);i.x=n.from.x+(n.to.x-n.from.x)*l,i.z=n.from.z+(n.to.z-n.from.z)*l;let c=n.to.h-n.from.h;c=Math.atan2(Math.sin(c),Math.cos(c)),i.h=n.from.h+c*l,i.g.position.set(i.x,.02,i.z),i.g.rotation.y=i.h;for(let _=0;_<2;_++)this.lights[_].position.set(i.x+(_?.4:-.4),2.2,i.z),this.lights[_].intensity=(_?!o:o)?30:3;let h=n.off,u=h.userData,d=i.x+Math.cos(i.h)*1.4,f=i.z-Math.sin(i.h)*1.4,g=e.x+Math.cos(e.h)*1.6+Math.sin(e.h)*.4,m=e.z-Math.sin(e.h)*1.6+Math.cos(e.h)*.4,x=d,p=f,y=!1;if(s>1.5){let _=Math.min(1,(s-1.5)/3);x=d+(g-d)*_,p=f+(m-f)*_,y=_<1}h.visible=s>1.4,h.position.set(x,.02,p),h.rotation.y=y?Math.atan2(g-d,m-f):Math.atan2(e.x-x,e.z-p);let M=y?Math.sin(s*9):0;u.legs[0].rotation.x=M*.5,u.legs[1].rotation.x=-M*.5,u.arms[0].rotation.x=-M*.45,u.arms[1].rotation.x=s>4.6?-1.4-Math.sin(s*3)*.1:M*.45;let v=document.getElementById("cineSub"),S=[[1.6,""],[4.6,"\u{1F46E} \xAB\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.\xBB"],[6.6,"\u{1F46E} \xAB\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u0414\u0422\u041F, \u043D\u0435\u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u0438\u0435\u2026 \u041E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C.\xBB"],[8.6,`Fine: \u2212${n.fine} coins \xB7 ${"\u2605".repeat(n.stars)} cleared`]],E="";for(let[_,w]of S)s>_&&(E=w);v.textContent!==E&&(v.textContent=E),document.getElementById("busted").classList.toggle("show",s>7.6);let b=new I,A=new I;if(s<2.5){let _=e.h+2.2+s*.35;b.set(e.x+Math.sin(_)*9,1.1,e.z+Math.cos(_)*9),A.set((e.x+i.x)/2,1,(e.z+i.z)/2)}else s<4.6?(b.set(x-Math.sin(h.rotation.y)*4+1.2,1.8,p-Math.cos(h.rotation.y)*4),A.set(x,1.4,p)):s<7.6?(b.set(x+Math.cos(e.h)*1.4-Math.sin(e.h)*1.2,1.75,p-Math.sin(e.h)*1.4-Math.cos(e.h)*1.2),A.set(e.x,1.1,e.z)):(b.set(e.x+Math.cos(e.h)*12+Math.sin(e.h)*6,4,e.z-Math.sin(e.h)*12+Math.cos(e.h)*6),A.set(e.x,.8,e.z));if(s>10.5){this.scene.remove(h),document.getElementById("cine").classList.remove("on"),document.getElementById("busted").classList.remove("show"),v.textContent="";let _=n.fine;return this.cutscene=null,this.clear(),{done:!0,fine:_,cam:b,look:A}}return{cam:b,look:A}}};var Jv={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u04E9:"o",\u04AF:"u",\u04A3:"n",\u0456:"i"};function Pa(r){r=String(r||"").toLowerCase();let t="";for(let e of r)t+=Jv[e]??e;return t.replace(/kh/g,"h").replace(/[jy]/g,"i").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}var Kf={cafe:"Caf\xE9",restaurant:"Restaurant",fast_food:"Fast food",pharmacy:"Pharmacy",bank:"Bank",supermarket:"Supermarket",convenience:"Shop",fuel:"Petrol station",hotel:"Hotel",clothes:"Clothes",bar:"Bar",mall:"Mall",museum:"Museum",theatre:"Theatre",university:"University",hospital:"Hospital",cinema:"Cinema",park:"Park",stadium:"Stadium",place_of_worship:"Place of worship",marketplace:"Bazaar",square:"Square",terminal:"Airport",department_store:"Department store",attraction:"Attraction",memorial:"Memorial",monument:"Monument",bakery:"Bakery",mobile_phone:"Phones"},Kv={Landmark:"\u2B50",Street:"\u{1F6E3}",Caf\u00E9:"\u2615",Restaurant:"\u{1F37D}","Fast food":"\u{1F32F}",Pharmacy:"\u{1F48A}",Bank:"\u{1F3E6}",Supermarket:"\u{1F6D2}",Shop:"\u{1F3EA}","Petrol station":"\u26FD",Hotel:"\u{1F3E8}",Mall:"\u{1F6CD}",Museum:"\u{1F3DB}",Park:"\u{1F333}",Bazaar:"\u{1F9FA}",Airport:"\u2708",University:"\u{1F393}",Hospital:"\u{1F3E5}",Building:"\u{1F3E2}"},Ia=class{constructor(t){this.items=[];let e=new Set,n=(s,o,a,l,c,h)=>{if(!s||l===void 0)return;let u=Pa(s)+"|"+Math.round(l/150)+","+Math.round(c/150);e.has(u)||(e.add(u),this.items.push({name:s,alt:o&&o!==s?o:"",kind:a,x:l,z:c,w:h,n:Pa(s)+" "+Pa(o)}))};for(let s of Ve)n(s.name,s.local,"Landmark",s.x,s.z,5);let i=new Map;for(let s of t.edges){if(s.name<0||s.cls>5)continue;let o=i.get(s.name);(!o||s.len>o.len)&&i.set(s.name,s)}for(let[s,o]of i){let[a,l]=t.names[s],c=Math.floor(o.pts.length/4)*2;n(l||a,l?a:"","Street",o.pts[c],o.pts[c+1],4-o.cls*.3)}for(let s of t.pois)n(s.en||s.name,s.en?s.name:"",Kf[s.kind]||"Place",s.x,s.z,3);for(let s of t.chunks.values())for(let o of s.signs)n(o.name,"",Kf[o.kind]||"Shop",o.x,o.z,1);for(let s of t.buildings)s.name&&n(s.name,"","Building",s.cx,s.cz,1.5)}find(t,e=12,n){let i=Pa(t);if(!i)return[];let s=i.split(" "),o=[];for(let a of this.items){let l=0;if(a.n.startsWith(i))l=10;else if(a.n.includes(" "+i))l=7;else if(s.every(c=>a.n.includes(c)))l=4;else continue;l+=a.w,n&&(l-=Math.min(3,Math.hypot(a.x-n.x,a.z-n.z)/4e3)),o.push([l,a])}return o.sort((a,l)=>l[0]-a[0]),o.slice(0,e).map(a=>a[1])}icon(t){return Kv[t]||"\u{1F4CD}"}};var tr=r=>document.getElementById(r),za=class{constructor(t,e,n){this.hud=t,this.audio=e,this.game=n,this.points=0,this.mult=1,this.active=!1,this.off=0,this.chain=0,this.best=0}update(t,e,n){let i=Math.abs(e.rearSlip||0),s=!n&&e.speed>8&&i>.22&&i<1.4,o=tr("drift");s?(this.active=!0,this.off=0,this.chain+=t,this.mult=Math.min(8,1+Math.floor(this.chain/2)),this.points+=e.speed*i*t*12*this.mult,e.nitro=Math.min(1,(e.nitro??0)+t*.06)):this.active&&(this.off+=t,this.off>1.1&&this._bank(!0)),o&&(o.classList.toggle("show",this.active),this.active&&(o.innerHTML=`DRIFT <b>${Math.round(this.points).toLocaleString()}</b>${this.mult>1?` <i>\xD7${this.mult}</i>`:""}`))}crash(){this.active&&this.points>50&&this.hud.toast("\u{1F4A5} Drift lost!",1),this.points=0,this._bank(!1)}_bank(t){if(t&&this.points>150){let e=Math.round(this.points/40);this.game.money+=e,this.audio.cash(),this.best=Math.max(this.best,this.points),this.hud.toast(`\u{1F300} Drift ${Math.round(this.points).toLocaleString()} pts \xB7 +${e} coins`,2)}this.active=!1,this.points=0,this.mult=1,this.chain=0,this.off=0}},La=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s;let o=wn(2026);this.list=[];for(let g of Ve)!g.airport&&g.x!==void 0&&this.list.length<8&&this.list.push({x:g.x+14,z:g.z+6});let a=0;for(;this.list.length<40&&a++<5e3;){let g=-6500+o()*12e3,m=-6e3+o()*9500,x=e.nearestRoad(g,m,60,S=>S.cls>=1&&S.cls<=5);if(!x)continue;let p=o()<.5?1:-1,y=x.e.w/2+1.2,M=x.x-x.dz*y*p,v=x.z+x.dx*y*p;e.insideBuilding(M,v,1)||this.list.some(S=>Math.hypot(S.x-M,S.z-v)<600)||this.list.push({x:M,z:v})}this.list.forEach((g,m)=>g.id=m);try{this.got=new Set(JSON.parse(localStorage.getItem("bd_kalpaks")||"[]"))}catch{this.got=new Set}let l=new yt({color:16762938,metalness:1,roughness:.22,emissive:5583616,emissiveIntensity:.6}),c=new Yt,h=new Z(new Bt(.22,.5,.9,16,1,!1),l);h.position.y=.45;let u=new Z(new Bt(.55,.55,.08,20),new yt({color:1708552,metalness:.4,roughness:.5})),d=new Z(new Se(.1,10,8),l);d.position.y=.95,c.add(h,u,d);let f=(()=>{let g=document.createElement("canvas");g.width=g.height=64;let m=g.getContext("2d"),x=m.createRadialGradient(32,32,2,32,32,32);return x.addColorStop(0,"rgba(255,220,120,0.9)"),x.addColorStop(1,"rgba(255,200,80,0)"),m.fillStyle=x,m.fillRect(0,0,64,64),new ze(g)})();this.proto=c,this.glowMat=new dn({map:f,transparent:!0,blending:He,depthWrite:!1}),this.live=new Map,this.t=0}get count(){return this.got.size}update(t,e,n){this.t+=t;for(let i of this.list){if(this.got.has(i.id))continue;let s=Math.hypot(i.x-e,i.z-n),o=this.live.get(i.id);if(s<450&&!o){o=this.proto.clone();let a=new _n(this.glowMat);a.scale.set(4,4,1),a.position.y=.5,o.add(a),o.position.set(i.x,1,i.z),this.scene.add(o),this.live.set(i.id,o)}else if(s>520&&o){this.scene.remove(o),this.live.delete(i.id);continue}if(o&&(o.rotation.y=this.t*2,o.position.y=1+Math.sin(this.t*3+i.id)*.25,s<4)){this.got.add(i.id),this.scene.remove(o),this.live.delete(i.id);try{localStorage.setItem("bd_kalpaks",JSON.stringify([...this.got]))}catch{}this.game.money+=250,this.audio.chime(),setTimeout(()=>this.audio.cash(),200),this.hud.toast(`\u{1F3A9} Golden kalpak ${this.got.size}/${this.list.length} \xB7 +250 coins`,2.5),this.got.size===this.list.length&&(this.game.money+=5e3,this.hud.toast("\u{1F3C6} All golden kalpaks found! +5000 coins",5))}}}near(t,e,n){return this.list.filter(i=>!this.got.has(i.id)&&Math.hypot(i.x-t,i.z-e)<n)}},Th=[{id:"chuy",name:"Chuy Avenue Sprint",desc:"Philharmonic \u2192 Victory Square, straight down Bishkek's main avenue",via:[[-1307,-120],[0,40],[1032,-300]]},{id:"center",name:"Ala-Too Circuit",desc:"A lap around the centre: Ala-Too, Osh Bazaar, Bishkek Park",via:[[30,40],[-1300,100],[-2700,330],[-1100,950],[30,60]]},{id:"south",name:"South Side Run",desc:"Asia Mall \u2192 Vefa Center \u2192 Central Mosque",via:null,places:["asia","vefa","mosque"]},{id:"airport",name:"Manas Airport Rush",desc:"25 km from Ala-Too Square to the airport terminal",via:null,places:["alatoo","airport"]}],Da=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s,this.active=null;try{this.best=JSON.parse(localStorage.getItem("bd_race_best")||"{}")}catch{this.best={}}this.ringMat=new de({color:16765498,transparent:!0,opacity:.85,side:Ee,depthWrite:!1}),this.ringMat2=new de({color:16777215,transparent:!0,opacity:.35,side:Ee,depthWrite:!1})}_waypoints(t){return t.via?t.via:t.places.map(e=>{let n=Ve.find(i=>i.id===e);return[n.x,n.z]})}start(t,e,n){this.stop();let i=this._waypoints(t),s=[];for(let d=0;d<i.length-1;d++){let f=this.map.route(i[d][0],i[d][1],i[d+1][0],i[d+1][1]);if(!f)return!1;s.push(...s.length?f.slice(2):f)}let o=[],a=0;for(let d=2;d<s.length;d+=2)a+=Math.hypot(s[d]-s[d-2],s[d+1]-s[d-1]),(a>300||d>=s.length-2)&&(a=0,o.push({x:s[d],z:s[d+1],h:Math.atan2(s[d]-s[d-2],s[d+1]-s[d-1])}));let l=0;for(let d=2;d<s.length;d+=2)l+=Math.hypot(s[d]-s[d-2],s[d+1]-s[d-1]);n(s[0],s[1]);let c=Math.atan2(s[4]-s[0],s[5]-s[1]),h=this.map.nearestRoad(s[0],s[1],30);if(h){let d=this.map.laneOffset(h.e,0),f=h.dx,g=h.dz;f*Math.sin(c)+g*Math.cos(c)<0&&(f=-f,g=-g),e.place(h.x-g*d,h.z+f*d,Math.atan2(f,g))}let u={R:t,path:s,cps:o,i:0,t:-3.5,total:l,rivals:[],meshes:[]};for(let[d,f,g]of[[22,16760864,"Gold rival"],[17,12634320,"Silver rival"]]){let m=An(d>20?"coupe":"hatch",{}),x=new Yt;x.add(new Z(m.paint,new yt({color:f,vertexColors:!0,metalness:.6,roughness:.3,transparent:!0,opacity:.75})),new Z(m.detail,new yt({vertexColors:!0,transparent:!0,opacity:.75}))),this.scene.add(x),u.rivals.push({g:x,s:0,v:0,pace:d,name:g,side:u.rivals.length?-1.8:1.8})}return u.gold=l/22,u.silver=l/17,u.bronze=l/13,this.active=u,this._showCp(),tr("raceHud").classList.add("show"),!0}_showCp(){let t=this.active;for(let e of t.meshes)this.scene.remove(e);t.meshes=[];for(let e=0;e<2;e++){let n=t.cps[t.i+e];if(!n)break;let i=new Yt,s=new Z(new Ki(7,.35,8,40),e?this.ringMat2:this.ringMat);if(s.position.y=4,i.add(s),!e){let o=new Z(new Bt(.4,.4,60,8),this.ringMat2);o.position.y=30,i.add(o)}i.position.set(n.x,0,n.z),i.rotation.y=n.h,this.scene.add(i),t.meshes.push(i)}}stop(){let t=this.active;if(t){for(let e of t.meshes)this.scene.remove(e);for(let e of t.rivals)this.scene.remove(e.g);this.active=null,tr("raceHud").classList.remove("show"),tr("countdown").classList.remove("show")}}_rivalPos(t,e,n){let i=t.s,s=2;for(;s<e.length;s+=2){let o=Math.hypot(e[s]-e[s-2],e[s+1]-e[s-1]);if(i<=o){let a=i/(o||1);return n.x=e[s-2]+(e[s]-e[s-2])*a,n.z=e[s-1]+(e[s+1]-e[s-1])*a,n.h=Math.atan2(e[s]-e[s-2],e[s+1]-e[s-1]),n.i=s,n}i-=o}return n.x=e[e.length-2],n.z=e[e.length-1],n.done=!0,n}update(t,e){let n=this.active;if(!n)return null;n.t+=t;let i=tr("countdown");if(n.t<0){e.vx=e.vz=0;let c=Math.ceil(-n.t),h=c>3?"":String(c);return i.textContent!==h&&(i.textContent=h,h&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(520,.15,.15))),null}n.t-t<0&&(i.textContent="GO!",i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(1040,.3,.18));let s={};for(let c of n.rivals){this._rivalPos(c,n.path,s);let h={},u={s:c.s+30};this._rivalPos(u,n.path,h);let d=Math.abs(Math.atan2(Math.sin(h.h-s.h),Math.cos(h.h-s.h))),f=c.pace*(d>.5?.45:d>.25?.7:1.15);c.v+=Ie.clamp(f-c.v,-8*t,4*t),c.s+=c.v*t,c.g.position.set(s.x+Math.cos(s.h)*c.side*.5,.02,s.z-Math.sin(s.h)*c.side*.5);let g=s.h-c.g.rotation.y;g=Math.atan2(Math.sin(g),Math.cos(g)),c.g.rotation.y+=g*Math.min(1,t*6)}let o=n.cps[n.i];if(Math.hypot(e.x-o.x,e.z-o.z)<12){if(n.i++,this.audio.blip(880,.08,.12),n.i>=n.cps.length)return this._finish(e);this._showCp()}let a=n.t,l=1+n.rivals.filter(c=>c.s>this._progress(e)).length;return tr("raceHud").innerHTML=`<b>${n.R.name}</b><span>\u23F1 ${Ua(a)}</span><span>CP ${n.i}/${n.cps.length}</span><span>P${l}/3</span>`,{target:n.cps[n.i]}}_progress(t){let e=this.active,n=0;for(let a=0;a<e.i;a++)n+=a?Math.hypot(e.cps[a].x-e.cps[a-1].x,e.cps[a].z-e.cps[a-1].z):Math.hypot(e.cps[0].x-e.path[0],e.cps[0].z-e.path[1]);let i=e.cps[e.i],s=e.i?e.cps[e.i-1]:{x:e.path[0],z:e.path[1]},o=Math.hypot(i.x-s.x,i.z-s.z)||1;return n+Math.max(0,o-Math.hypot(i.x-t.x,i.z-t.z))}_finish(){let t=this.active,e=t.t,n=e<=t.gold?"\u{1F947} Gold":e<=t.silver?"\u{1F948} Silver":e<=t.bronze?"\u{1F949} Bronze":"Finished",i=e<=t.gold?1500:e<=t.silver?800:e<=t.bronze?400:150,s=this.best[t.R.id],o=!s||e<s;if(o){this.best[t.R.id]=e;try{localStorage.setItem("bd_race_best",JSON.stringify(this.best))}catch{}}return this.game.money+=i,this.audio.cash(),this.hud.toast(`\u{1F3C1} ${t.R.name}: ${Ua(e)} \xB7 ${n} \xB7 +${i} coins${o?" \xB7 NEW RECORD!":""}`,6),this.stop(),{done:!0}}};function Ua(r){r=Math.max(0,r);let t=Math.floor(r/60),e=r-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var ka=class{constructor(t,e,n){this.scene=t,this.world=e,this.env=n,this.kind="clear",this.amount=0;let i=9e3,s=new Float32Array(i*6);for(let a=0;a<i;a++){let l=(Math.random()-.5)*80,c=Math.random()*40,h=(Math.random()-.5)*80;s.set([l,c,h,l,c-.6,h],a*6)}let o=new ie;o.setAttribute("position",new fe(s,3)),this.rainMat=new _e({uniforms:{uTime:{value:0},uCam:{value:new I},uSnow:{value:0},uAmt:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; uniform float uSnow; varying float vA;
        void main(){ vec3 p = position;
          float sp = mix(26.0, 2.2, uSnow);
          p.y = mod(p.y - uTime*sp, 40.0);
          if (uSnow > 0.5) { p.x += sin(uTime*0.8 + position.z)*0.8; p.z += cos(uTime*0.6 + position.x)*0.8; if (mod(float(gl_VertexID),2.0) > 0.5) p.y += 0.6 - 0.08; }
          p.xz = mod(p.xz - uCam.xz + 40.0, 80.0) - 40.0 + uCam.xz;
          p.y += uCam.y - 15.0;
          vA = 1.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform float uSnow; uniform float uAmt; void main(){ gl_FragColor = vec4(mix(vec3(0.6,0.65,0.75), vec3(0.95), uSnow), mix(0.3, 0.6, uSnow) * uAmt); }",transparent:!0,depthWrite:!1}),this.rain=new Os(o,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain),this.base=null}set(t){this.kind=t}update(t,e,n){let i=this.kind==="clear"?0:1;this.amount+=Ie.clamp(i-this.amount,-t*.25,t*.25),this.kind!=="clear"&&(this.cur=this.kind);let s=this.cur==="snow"?1:0,o=this.amount;this.rain.visible=o>.01,this.rainMat.uniforms.uTime.value+=t,this.rainMat.uniforms.uCam.value.copy(e.position),this.rainMat.uniforms.uSnow.value=s,this.rainMat.uniforms.uAmt.value=o,this.rain.geometry.setDrawRange(0,Math.floor(9e3*2*(s?.35:.8)*o));let a=this.world.mat;this.base||(this.base={road:a.road.roughness,ground:this.world.ground.material.color.clone(),grass:a.grass.color.clone(),tree:a.tree.color.clone()}),a.road.roughness=this.base.road-(s?0:.6*o),a.road.metalness=s?0:.25*o,tn.uSnow.value=s*o,this.world.ground.material.color.copy(this.base.ground).lerp(new bt(.85,.86,.88),s*o*.35),this.exposure=1-s*o*.22,this.env.cloudMat&&(this.env.cloudMat.uniforms.cover.value=.58-o*.45),this.grip=1-o*(s?.3:.12),this.fogMul=1-o*.55,this.dark=o*(s?.15:.35)}};function jv(r=2775706){let t=new Yt,e=u=>new yt({color:u,roughness:.8}),n=e(13672572),i=e(r),s=e(2237998),o=e(1118481),a=e(1380621),l=(u,d,f,g,m,x=t)=>{let p=new Z(u,d);return p.position.set(f,g,m),p.castShadow=!0,x.add(p),p};l(new Tt(.44,.6,.25),i,0,1.22,0),l(new Tt(.4,.2,.23),s,0,.88,0),l(new Se(.12,14,12),n,0,1.68,0),l(new Se(.127,14,8,0,Math.PI*2,0,Math.PI*.55),a,0,1.71,-.01);let c=[],h=[];for(let u of[-1,1]){let d=new Yt;d.position.set(.1*u,.9,0),t.add(d),l(new Tt(.15,.82,.16).translate(0,-.41,0),s,0,0,0,d),l(new Tt(.16,.08,.26),o,0,-.86,.04,d);let f=new Yt;f.position.set(.28*u,1.5,0),t.add(f),l(new Tt(.1,.6,.11).translate(0,-.3,0),i,0,0,0,f),l(new Se(.055,8,6),n,0,-.62,0,f),c.push(d),h.push(f)}return t.userData={legs:c,arms:h},t}var Na=class{constructor(t,e,n){this.scene=t,this.world=e,this.map=n,this.active=!1,this.char=jv(),this.char.visible=!1,t.add(this.char),this.x=0,this.z=0,this.y=0,this.vy=0,this.h=0,this.speed=0,this.phase=0,this.camYaw=0,this.camPitch=.25,this.vx=0,this.vz=0,this.spec={L:.6,W:.6},this.radius=.35}exit(t){let e=Math.cos(t.h)*1.6,n=-Math.sin(t.h)*1.6;this.x=t.x+e,this.z=t.z+n,this.y=0,this.vy=0;let i={};this.world.collide(this.x,this.z,this.radius,i)&&(this.x=t.x-e,this.z=t.z-n),this.h=t.h,this.camYaw=t.h,this.active=!0,this.char.visible=!0,t.vx=t.vz=0,t.r=0}enter(){this.active=!1,this.char.visible=!1}update(t,e,n,i){let s=e.fwd,o=e.side,a=e.run?6.2:2.6,l=0,c=0;if(s||o){let g=this.camYaw;l=Math.sin(g)*s-Math.cos(g)*o,c=Math.cos(g)*s+Math.sin(g)*o;let m=Math.hypot(l,c);l/=m,c/=m;let p=Math.atan2(l,c)-this.h;p=Math.atan2(Math.sin(p),Math.cos(p)),this.h+=p*Math.min(1,t*12)}let h=s||o?a:0;this.speed+=Ie.clamp(h-this.speed,-20*t,14*t),this.vx=Math.sin(this.h)*this.speed,this.vz=Math.cos(this.h)*this.speed,this.x+=this.vx*t,this.z+=this.vz*t,e.jump&&this.y<=.001&&(this.vy=4.6),this.vy-=13*t,this.y=Math.max(0,this.y+this.vy*t),this.y===0&&this.vy<0&&(this.vy=0);let u={};this.world.collide(this.x,this.z,this.radius,u)&&(this.x+=u.x,this.z+=u.z);for(let g of n){let m=this.x-g.x,x=this.z-g.z,p=Math.hypot(m,x),y=g.spec.W/2+.5;if(p<y+g.spec.L/2){let M=Math.sin(g.h),v=Math.cos(g.h),S=m*v-x*M,E=m*M+x*v,b=g.spec.W/2+.35,A=g.spec.L/2+.35;if(Math.abs(S)<b&&Math.abs(E)<A){let _=b-Math.abs(S),w=A-Math.abs(E),R=0,L=0;_<w?R=Math.sign(S)*_:L=Math.sign(E)*w,this.x+=R*v+L*M,this.z+=-R*M+L*v}}}this.phase+=t*this.speed*2.6;let d=Math.sin(this.phase)*Math.min(1,this.speed/2.6),f=this.char.userData;f.legs[0].rotation.x=d*.7,f.legs[1].rotation.x=-d*.7,f.arms[0].rotation.x=-d*.6,f.arms[1].rotation.x=d*.6,this.y>.01&&(f.legs[0].rotation.x=.6,f.legs[1].rotation.x=-.3,f.arms[0].rotation.x=f.arms[1].rotation.x=-2.6),this.char.position.set(this.x,this.y+Math.abs(Math.cos(this.phase))*.04*Math.min(1,this.speed/3),this.z),this.char.rotation.y=this.h}nearestCar(t,e){let n=null,i=4.5,s=Math.hypot(t.x-this.x,t.z-this.z);s<i+t.spec.L/2&&(n={own:!0,c:t},i=s-t.spec.L/2);for(let o of e.cars){let a=Math.hypot(o.x-this.x,o.z-this.z)-o.spec.L/2;a<i&&(i=a,n={own:!1,c:o})}return n}camera(t,e,n){if(this.camYaw+=n.dx,this.camPitch=Ie.clamp(this.camPitch+n.dy,-.1,1.1),!n.active&&this.speed>.5){let l=this.h-this.camYaw;l=Math.atan2(Math.sin(l),Math.cos(l)),this.camYaw+=l*Math.min(1,e*2.2)}let i=4.2,s=this.x-Math.sin(this.camYaw)*i*Math.cos(this.camPitch),o=this.z-Math.cos(this.camYaw)*i*Math.cos(this.camPitch),a=this.y+1.6+Math.sin(this.camPitch)*i;t.position.lerp(new I(s,a,o),1-Math.exp(-e*10)),t.lookAt(this.x,this.y+1.4,this.z),t.fov+=(60-t.fov)*Math.min(1,e*3),t.updateProjectionMatrix()}};var Nn=r=>440*Math.pow(2,(r-69)/12),Ba=[{name:"Bishkek FM",genre:"Pop hits",bpm:112,prog:[[60,64,67],[67,71,74],[69,72,76],[65,69,72]],scale:[0,2,4,7,9],style:"pop"},{name:"Night Drive 101.1",genre:"Synthwave",bpm:100,prog:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],scale:[0,3,5,7,10],style:"synth"},{name:"Komuz Radio",genre:"Kyrgyz folk",bpm:96,prog:[[62,69,74],[62,69,74],[60,67,72],[62,69,74]],scale:[0,2,5,7,9],style:"folk"},{name:"Ala-Too Lo-fi",genre:"Lo-fi beats",bpm:78,prog:[[62,65,69,72],[67,71,74,77],[60,64,67,71],[57,60,64,67]],scale:[0,3,5,7,10],style:"lofi"}],Fa=class{constructor(t){this.audio=t,this.idx=-1,this.timer=null}get on(){return this.idx>=0}get station(){return Ba[this.idx]}next(){return this.audio.start(),this.idx=this.idx+1>=Ba.length?-1:this.idx+1,this._stop(),this.idx>=0&&this._start(),this.idx>=0?Ba[this.idx]:null}setVolume(t){this.out&&(this.out.gain.value=t)}_start(){let t=this.audio.ctx;if(!t)return;this.out=t.createGain(),this.out.gain.value=.32;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=6500;let n=t.createDynamicsCompressor();this.out.connect(e),e.connect(n),n.connect(this.audio.master),this.step=0,this.nextT=t.currentTime+.1,this.seed=Math.random()*1e3,this.timer=setInterval(()=>this._schedule(),40)}_stop(){if(clearInterval(this.timer),this.timer=null,this.out){let t=this.out;t.gain.setTargetAtTime(0,this.audio.ctx.currentTime,.05),setTimeout(()=>t.disconnect(),400),this.out=null}}_rnd(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}_schedule(){let t=this.audio.ctx,e=Ba[this.idx];if(!t||!e||!this.out)return;let n=60/e.bpm/4;for(;this.nextT<t.currentTime+.25;){let i=this.step,s=this.nextT+(e.style==="lofi"&&i%2?n*.18:0),o=Math.floor(i/16)%e.prog.length,a=i%16,l=e.prog[o],c=l[0]-12;if(e.style==="pop"){if(a%4===0&&this._kick(s,.9),(a===4||a===12)&&this._snare(s,.35),a%2===0&&this._hat(s,a%4===2?.12:.06),a%2===0&&this._tone(s,Nn(c-12),n*1.8,"sawtooth",.12,500),a===0)for(let h of l)this._tone(s,Nn(h),n*15,"triangle",.035,2500,.05);this._rnd()<.45&&a%2===0&&this._tone(s,Nn(72+this._pick(e.scale,l[0])),n*1.6,"square",.035,3e3)}else if(e.style==="synth"){if(a%4===0&&this._kick(s,1),(a===4||a===12)&&this._snare(s,.5,!0),this._hat(s,.04),this._tone(s,Nn(c-12+(a%2?12:0)),n*.9,"sawtooth",.09,900),a===0)for(let h of l)this._tone(s,Nn(h),n*16,"sawtooth",.025,1800,.4),this._tone(s,Nn(h)*1.006,n*16,"sawtooth",.02,1800,.4);a%4===2&&this._rnd()<.7&&this._tone(s,Nn(76+this._pick(e.scale,l[0])),n*3,"square",.03,2200)}else if(e.style==="folk")a%8===0&&this._tone(s,Nn(50),n*8,"triangle",.08,700),[0,3,6,8,11,14].includes(a)&&this._pluck(s,Nn(62+this._pick(e.scale,62)+(this._rnd()<.3?12:0)),.12),a%8===0?this._drum(s,.6):(a%8===3||a%8===6)&&this._drum(s,.25);else{if((a===0||a===10)&&this._kick(s,.6),(a===4||a===12)&&this._snare(s,.18),a%2===0&&this._hat(s,.03),a===0||a===8)for(let h of l)this._tone(s,Nn(h),n*7,"sine",.05,1600,.02);a%4===0&&this._tone(s,Nn(c-12),n*3.5,"sine",.14,300),this._rnd()<.15&&this._crackle(s)}this.step++,this.nextT+=n}}_pick(t,e){return t[Math.floor(this._rnd()*t.length)]+(e%12===0,0)}_env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+i)}_tone(t,e,n,i,s,o,a=.005){let l=this.audio.ctx,c=l.createOscillator(),h=l.createGain(),u=l.createBiquadFilter();c.type=i,c.frequency.value=e,u.type="lowpass",u.frequency.value=o,this._env(h,t,a,n,s),c.connect(u),u.connect(h),h.connect(this.out),c.start(t),c.stop(t+a+n+.05)}_pluck(t,e,n){let i=this.audio.ctx;for(let[s,o]of[[1,n],[2,n*.35],[3,n*.15]]){let a=i.createOscillator(),l=i.createGain();a.type="triangle",a.frequency.value=e*s,this._env(l,t,.003,.5/s,o),a.connect(l),l.connect(this.out),a.start(t),a.stop(t+.6)}}_kick(t,e){let n=this.audio.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(42,t+.12),this._env(s,t,.002,.25,e*.8),i.connect(s),s.connect(this.out),i.start(t),i.stop(t+.3)}_noise(t,e,n,i,s){let o=this.audio.ctx,a=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();a.buffer=this.audio.noise,l.type=n,l.frequency.value=i,this._env(c,t,.002,e,s),a.connect(l),l.connect(c),c.connect(this.out),a.start(t,Math.random()),a.stop(t+e+.05)}_snare(t,e,n){this._noise(t,n?.3:.16,"bandpass",1800,e),this._tone(t,190,.08,"triangle",e*.3,2e3)}_hat(t,e){this._noise(t,.04,"highpass",8e3,e)}_drum(t,e){this._tone(t,90,.18,"sine",e*.5,400),this._noise(t,.08,"lowpass",900,e*.25)}_crackle(t){this._noise(t,.01,"highpass",3e3,.05)}};var ht=r=>document.getElementById(r),Ui=r=>new Promise(t=>setTimeout(t,r)),Qv=[15790320,1118740,9212054,5922918,12589080,1718906,2779706,15909376,6953530,14187040,4237528,13154458],Ah=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan. 165 hp",price:0},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend. 75 hp",price:2500},{id:"hatch",name:"City Hatch",desc:"Small Japanese import. Nimble. 110 hp",price:6e3},{id:"van",name:"Marshrutka",desc:"Your own white minibus. 160 hp",price:12e3},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes. 280 hp",price:25e3},{id:"coupe",name:"Sport Coupe",desc:"420 hp. Mind the 150 km/h cameras!",price:6e4}],Fr={low:{scale:.7,view:900,far:2500,shadows:!1,bloom:!1,msaa:!1},medium:{scale:1,view:1250,far:4500,shadows:!0,bloom:!0,msaa:!1},high:{scale:1.25,view:1600,far:6500,shadows:!0,bloom:!0,msaa:!0},ultra:{scale:1.6,view:2200,far:9e3,shadows:!0,bloom:!0,msaa:!0}},ty={preset:"medium",traffic:1,peds:1,sens:1,abs:!0,tcs:!0,esc:!0,steerAssist:!0,manual:!1,fov:62,vol:.7,minimap:!0,autoRes:!0,showFps:!1,weather:"auto",timeSpeed:1,mp:!0,name:"",shake:!0,...Fr.medium};function ey(){let r={};try{r=JSON.parse(localStorage.getItem("bd_settings2")||"{}")}catch{}if(!r.preset){let t=navigator.hardwareConcurrency||4,e=/Mobi|Android|iPhone/i.test(navigator.userAgent),n=new URLSearchParams(location.search).get("q");r.preset=n||(e?"low":t>=8?"high":"medium"),Object.assign(r,Fr[r.preset])}return Object.assign({},ty,Fr[r.preset]||{},r)}function jf(r){try{localStorage.setItem("bd_settings2",JSON.stringify(r))}catch{}}async function ny(){let r=(D,$)=>{ht("loadText").textContent=D,ht("loadBar").style.width=($*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await Ui(30),!window.BISHKEK_DATA){ht("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new na(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`${t.buildings.length.toLocaleString()} buildings \xB7 ${t.edges.length.toLocaleString()} streets \xB7 ${t.signalClusters.length} traffic lights`,.25),await Ui(30);let e=ey(),n=new Do({antialias:!1,powerPreference:"high-performance"}),i=1,s=()=>n.setPixelRatio((Math.min(window.devicePixelRatio*e.scale,2)*(window.devicePixelRatio>=2?.75:1)||1)*i);s(),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=ye,n.toneMapping=kr,n.toneMappingExposure=.95,n.shadowMap.enabled=e.shadows,n.shadowMap.type=$c,n.autoClear=!1,ht("app").appendChild(n.domElement);let o=new Yi,a=new $e(e.fov,window.innerWidth/window.innerHeight,.5,4200),l=new la(n,o);l.sun.shadow.mapSize.set(e.preset==="ultra"?4096:e.preset==="high"?2048:1536,e.preset==="ultra"?4096:e.preset==="high"?2048:1536);let c=yf();r("Building Bishkek\u2026",.35),await Ui(20);let h=new aa(o,t,c);for(let D of["grass","dirt","field","asphalt","concrete","water"])Object.assign(h.mat[D],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(h.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(h.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(h.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let u=new _a(t),d=new va,f=new ya(t,u,d);f.owned||(f.owned=["sedan"]);let g=new ga(o,t,h);f.setAirport(g),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await Ui(20);let m=new xa(o,t,h),x=t.nearestRoad(40,55,120,D=>D.cls<=2)||t.nearestRoad(0,0,500),p=new ha(o,f.owned.includes(f.savedCar)?f.savedCar:"sedan",f.savedColor);f.homeCar=p.type,f.homeColor=p.color;let y=x.x-x.dz*t.laneOffset(x.e,0),M=x.z+x.dx*t.laneOffset(x.e,0);p.place(y,M,Math.atan2(x.dx,x.dz));let v={x:y,z:M};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),h.radius=500,h.update({x:p.x,z:p.z},0,!0),h.radius=Math.min(e.view,900);for(let D=0;D<15;D++)h.update({x:p.x,z:p.z},0,!1),r("Streets, buildings, trees and shop signs\u2026",.55+D*.025),await Ui(1);h.radius=e.view,r("Traffic, traffic lights and people\u2026",.92),await Ui(20);let S=new fa(o,t,h),E=new pa(o,t);E.addZone({name:"Manas Airport",x:g.dropoff.x+g.n.x*18,z:g.dropoff.y+g.n.y*-18,r:45,n:40,bags:!0});let b=new Ma(t,f,u,d,E),A=new za(u,d,f),_=new La(o,t,f,u,d),w=new Da(o,t,f,u,d),R=new ka(o,h,l),L=new Na(o,h,t),k=new Fa(d);e.weather&&e.weather!=="auto"&&R.set(e.weather),f.custom&&(p.custom={...f.custom},p._applyCustom(),f.custom.plate&&p.setPlate(f.custom.plate)),b.completed=f.jobsDone||0;let H=new Ia(t),B=new Ra(o),N=new Ca(o,t,h,d,u,B);N.onEscape=D=>{let $=100*D;f.money+=$,d.cash(),u.toast(`+${$} coins escape bonus`,2)};let V=new wa(o);p.remotes=V;let O=new ua(a);O.snap(p);let q=null,Q=()=>{q=e.bloom||e.msaa?new Aa(n,l,o,a,{bloom:e.bloom,msaa:e.msaa}):null};Q();let P={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,thr:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0,hud:!0,chatOpen:!1};function ft(){S.target=Math.round(260*e.traffic),E.target=Math.round(220*e.peds),p.assists={abs:e.abs,tcs:e.tcs,esc:e.esc,steerAssist:e.steerAssist,sens:e.sens,manual:e.manual},d.setVolume(e.vol),h.radius=e.view,h.farRadius=e.far||0,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),a.fov=e.fov,ht("hudRoot").classList.toggle("nomini",!e.minimap),jf(e)}ft(),window.__bd={drift:A,kalpaks:_,races:w,weather:R,foot:L,radio:k,fx:B,police:N,teleport:(...D)=>Ut(...D),rig:O,map:t,world:h,car:p,traffic:S,peds:E,airport:g,game:f,jobs:b,net:V,S:P,scene:o,camera:a,renderer:n,env:l,settings:e};function et(D,$,Gt){p.setType(D,$??p.color),P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null),p.stolen=!1,p.assists&&(p.assists={...p.assists}),Gt&&(f.homeCar=D,f.homeColor=$??p.color),O.snap(p)}let F={steer:0,gas:0,brake:0,hand:!1,nitro:!1},J=["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",D=>{if(!P.chatOpen&&!(D.target&&D.target.tagName==="INPUT"&&D.target.type==="text"&&D.target.offsetParent!==null)){if(D.code==="Tab"){D.preventDefault(),P.mode!=="menu"&&xt(!0);return}D.code==="F1"&&D.preventDefault(),!(D.repeat&&!J.includes(D.code))&&(P.keys[D.code]=!0,J.includes(D.code)&&D.preventDefault(),rt(D.code))}}),window.addEventListener("keyup",D=>{P.keys[D.code]=!1,D.code==="Tab"&&P.tabOnline&&xt(!1)}),window.addEventListener("blur",()=>{P.keys={}});function rt(D){if(d.start(),P.mode==="menu"){D==="Enter"&&ht("startBtn").click();return}if(D==="Escape")return P.mapOpen?z(!1):ht("airportMenu").classList.contains("hidden")?P.mode==="flight"?Te(!0):P.mode==="spot"?At():P.mode==="cutscene"?void 0:Pt():ht("airportMenu").classList.add("hidden");if(!P.paused)switch(D){case"KeyC":P.mode==="flight"?P.flightCam=(P.flightCam+1)%4:u.toast("Camera: "+O.cycle(),1.2);break;case"KeyM":z();break;case"KeyH":d.horn(.3,.45),E.list.forEach($=>{!$.fixed&&Math.hypot($.x-p.x,$.z-p.z)<15&&$.mode==="walk"&&($.dodge=.5,$.dside=Math.random()<.5?1:-1)});break;case"KeyE":Ht();break;case"KeyJ":Pt(!0,"pJobs");break;case"KeyR":zt();break;case"KeyG":f.routeTarget&&!b.active&&(f.clearRoute(),u.toast("GPS cleared",1.2));break;case"KeyK":u.toast(d.toggleMute()?"Sound off":"Sound on",1.2);break;case"Equal":case"NumpadAdd":P.mapOpen?u.zoomMap(1.4):u.zoomMini(1.4);break;case"Minus":case"NumpadSubtract":P.mapOpen?u.zoomMap(1/1.4):u.zoomMini(1/1.4);break;case"BracketRight":P.hour=(P.hour+1)%24,u.toast(u.clockText(),.8);break;case"BracketLeft":P.hour=(P.hour+23)%24,u.toast(u.clockText(),.8);break;case"KeyX":e.manual&&p.shiftUp();break;case"KeyZ":e.manual&&p.shiftDown();break;case"KeyF":at();break;case"KeyQ":{let $=k.next();u.toast($?`\u{1F4FB} ${$.name} \xB7 ${$.genre}`:"\u{1F4FB} Radio off",1.6),ht("radioLbl").textContent=$?"\u{1F4FB} "+$.name:"";break}case"F1":P.hud=!P.hud,ht("hudRoot").classList.toggle("off",!P.hud);break;case"Enter":e.mp&&kt();break}}let st=!1;n.domElement.addEventListener("contextmenu",D=>D.preventDefault()),n.domElement.addEventListener("mousedown",D=>{D.button===2&&(st=!0),d.start()}),window.addEventListener("mouseup",D=>{D.button===2&&(st=!1)});let dt={dx:0,dy:0,active:!1};window.addEventListener("mousemove",D=>{st&&(P.mouseYaw-=D.movementX*.006,dt.dx+=D.movementX*.006,dt.dy+=D.movementY*.004)});function zt(){let D=t.nearestRoad(p.x,p.z,300,mt=>mt.cls<=4);if(!D)return;let $=t.laneOffset(D.e,0),Gt=D.dx,te=D.dz;!D.e.ow&&Math.sin(p.h)*Gt+Math.cos(p.h)*te<0&&(Gt=-Gt,te=-te),p.place(D.x-te*$,D.z+Gt*$,Math.atan2(Gt,te)),u.toast("Car reset",1)}function Ut(D,$){let Gt=t.nearestRoad(D,$,400,mt=>mt.cls<=4);if(!Gt)return;let te=t.laneOffset(Gt.e,0);p.place(Gt.x-Gt.dz*te,Gt.z+Gt.dx*te,Math.atan2(Gt.dx,Gt.dz)),S.clear();for(let mt in S.models)S.models[mt].n=0;N.clear();for(let mt of[...B.emitters])mt.ai&&B.removeEmitter(mt);E.list=E.list.filter(mt=>mt.fixed);for(let mt of E.extraZones)mt.count=0;O.snap(p);for(let mt=0;mt<6;mt++)h.update({x:p.x,z:p.z},0,!0)}let Qt={trolley:"bus",taxi:"sedan",sedan:"sedan",hatch:"hatch",suv:"suv",oldsedan:"oldsedan",van:"van",bus:"bus",truck:"truck"};function at(){if(P.mode!=="drive"||w.active)return;if(!P.onFoot){if(p.speed>3){u.toast("Slow down to get out",1);return}if(b.active&&(b.active.type==="bus"||b.active.type==="marshrutka")){u.toast("Finish your route first",1.2);return}L.exit(p),P.onFoot=!0,d.blip(300,.05,.08);return}let D=L.nearestCar(p,S);if(!D){u.toast("No car nearby",1);return}if(!D.own){let $=D.c,Gt=S.cars.indexOf($);Gt>=0&&S._remove(Gt);let te={mode:"cross",x:$.x+Math.cos($.h)*1.6,z:$.z-Math.sin($.h)*1.6,h:0,ex:0,ez:0,dodge:0,wait:0,shirt:6953498,pants:2238522,skin:14200976,hairC:1709072,scale:1,speed:5,phase:0};te.tx=te.x+Math.cos($.h)*25,te.tz=te.z-Math.sin($.h)*25,te.h=Math.atan2(te.tx-te.x,te.tz-te.z),E.list.push(te),p.setType(Qt[$.type]||"sedan",$.color),p.place($.x,$.z,$.h),p.stolen=!0,P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null),N.crime(1.3,"Car theft"),d.horn(.2,.6,.9),u.toast("\u{1F697} Car stolen! (your own car is waiting in the Garage)",2.5)}L.enter(),P.onFoot=!1,O.snap(p),d.blip(420,.05,.08)}function gt(D,$,Gt,te,mt,Wt,$t,xe){e.shake&&(O.shake=Math.min(.7,D*.05)),d.crash(D),D>3&&A.crash(),te!==void 0&&D>3&&(B.crash(te,.6,mt,Wt??0,$t??0,D,$==="car"&&Gt?Gt.color:p.color),D>4&&p.dent(te,mt,Math.min(.32,D*.022))),$==="car"&&Gt&&D>4&&!w.active&&f.accident(D,me),$==="car"&&Gt&&(xe?(Gt.emitter=B.emitter(Gt,[0,1,Gt.spec.L*.32],!0),Gt.emitter.ai=!0,u.toast("\u{1F4A5} Car wrecked!",1.5),N.crime(1.6,"You wrecked a car")):D>7?N.crime(1,"Hit-and-run"):D>4&&N.crime(.4,"Reckless driving")),$==="player"&&D>6&&N.crime(.6,"Rammed another driver"),U()}function U(){p.damage>55&&!P.engineSmoke&&(P.engineSmoke=B.emitter(p,[0,1.05,p.spec.L*.36],!1)),P.engineSmoke&&(P.engineSmoke.dark=p.damage>=90),p.damage<=55&&P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null)}N.onRam=()=>U(),f.peds=E,f.onWarn=()=>d.whistle&&d.whistle(),f.onFine=D=>{D.heat&&N.crime(D.heat,D.kind),D.kind==="Speeding"&&D.amount>=500?N.crime(1,"Extreme speeding"):D.kind==="Runway incursion"?N.crime(2,"Runway incursion"):D.kind==="Red light"&&N.crime(.35,"Ran a red light")};let Vt=[];function pt(D,$,Gt){let te=document.createElement("div");for(te.innerHTML=`<b>${Rn(D)}</b> ${Rn($)}`,Gt&&(te.style.opacity="0.85"),ht("chat").appendChild(te),Vt.push(te);Vt.length>6;)Vt.shift().remove();setTimeout(()=>{te.style.opacity="0"},9e3),setTimeout(()=>te.remove(),10500),Gt||d.blip(700,.04,.06)}V.onChat=pt,V.onJoin=D=>pt("\u25CF",`${D} is driving in Bishkek`,!0);function kt(){if(!V.enabled)return;P.chatOpen=!0,P.keys={};let D=ht("chatInput");D.classList.remove("hidden"),D.value="",D.focus()}ht("chatInput").addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&(V.chat(D.target.value),Mt()),D.key==="Escape"&&Mt()});function Mt(){P.chatOpen=!1,ht("chatInput").classList.add("hidden"),ht("chatInput").blur()}document.querySelectorAll(".tab").forEach(D=>D.onclick=()=>Jt(D.dataset.p));function Jt(D){document.querySelectorAll(".tab").forEach($=>$.classList.toggle("on",$.dataset.p===D)),document.querySelectorAll(".page").forEach($=>$.classList.toggle("on",$.id===D)),D==="pJobs"&&St(),D==="pGarage"&&Lt(),D==="pOnline"&&oe(),D==="pPlaces"&&Ft(),D==="pSettings"&&Kt()}function Pt(D,$){P.paused=D!==void 0?D:!P.paused,ht("pause").classList.toggle("hidden",!P.paused),P.paused&&Jt($||"pJobs"),P.keys={}}ht("resume").onclick=()=>Pt(!1);function z(D){P.mapOpen=D!==void 0?D:!P.mapOpen,ht("mapPanel").classList.toggle("hidden",!P.mapOpen),P.keys={},P.mapOpen?(u._resize(),u.centerMap(p.x,p.z,.12),setTimeout(()=>ht("searchInput").focus(),50)):ht("searchInput").blur()}let T=[],Y=0,it=null;function ct(){ht("searchRes").innerHTML=T.map((D,$)=>`<button class="${$===Y?"on":""}" data-i="${$}"><span class="ic">${H.icon(D.kind)}</span><span>${Rn(D.name)}<small>${D.kind}${D.alt?" \xB7 "+Rn(D.alt):""} \xB7 ${Ha(Math.hypot(D.x-p.x,D.z-p.z))}</small></span></button>`).join(""),ht("searchRes").querySelectorAll("button").forEach(D=>D.onclick=()=>ot(T[+D.dataset.i]))}function ot(D){D&&(it=D,u.searchMark=D,u.centerMap(D.x,D.z,.6),ht("pcName").textContent=D.name,ht("pcSub").textContent=`${D.kind}${D.alt?" \xB7 "+D.alt:""} \xB7 ${Ha(Math.hypot(D.x-p.x,D.z-p.z))} away`,ht("placeCard").classList.remove("hidden"),T=[],ct(),ht("searchInput").blur())}ht("searchInput").addEventListener("input",D=>{Y=0,T=H.find(D.target.value,10,p),ct()}),ht("searchInput").addEventListener("keydown",D=>{D.stopPropagation(),D.key==="ArrowDown"&&(Y=Math.min(T.length-1,Y+1),ct(),D.preventDefault()),D.key==="ArrowUp"&&(Y=Math.max(0,Y-1),ct(),D.preventDefault()),D.key==="Enter"&&ot(T[Y]),D.key==="Escape"&&(D.target.value?(D.target.value="",T=[],ct()):z(!1))}),ht("pcRoute").onclick=()=>{it&&(f.setRoute(it.x,it.z,it.name),u.toast(`\u{1F9ED} Route to ${Rn(it.name)}`,2),z(!1))},ht("pcGo").onclick=()=>{it&&(Ut(it.x,it.z),u.toast(`\u26A1 ${Rn(it.name)}`,2),z(!1))},u.onMapClick=(D,$,Gt)=>{if(ht("placeCard").classList.add("hidden"),u.searchMark=null,Gt){Ut(D,$),z(!1);return}f.setRoute(D,$,"Waypoint"),u.toast("GPS route set",1.2)},ht("mapClose").onclick=()=>z(!1),ht("zIn").onclick=()=>u.zoomMap(1.5),ht("zOut").onclick=()=>u.zoomMap(1/1.5),ht("zMe").onclick=()=>u.centerMap(Ot().x,Ot().z),ht("mzIn").onclick=()=>u.zoomMini(1.4),ht("mzOut").onclick=()=>u.zoomMini(1/1.4);let Ot=()=>P.onFoot?L:p;function St(){ht("jobCards").innerHTML=Object.entries(es).map(([$,Gt])=>`<button class="card ${b.active?.type===$?"sel":""}" data-id="${$}"><div class="ic">${Gt.icon}</div><b>${Gt.name}</b><small>${Gt.desc}</small></button>`).join(""),ht("jobCards").querySelectorAll("button").forEach($=>$.onclick=()=>{if(P.mode==="drive"){if(Pt(!1),b.active?.type===$.dataset.id){b.stop(p,et);return}b.start($.dataset.id,p,o,et)}}),ht("raceCards").innerHTML=Th.map($=>`<button class="card" data-r="${$.id}"><div class="ic">\u{1F3C1}</div><b>${$.name}</b><small>${$.desc}</small><div class="price">${w.best[$.id]?"\u{1F3C6} Best "+Ua(w.best[$.id]):"Prize up to 1 500 coins"}</div></button>`).join(""),ht("raceCards").querySelectorAll("button").forEach($=>$.onclick=()=>{P.mode==="drive"&&(P.onFoot&&(L.enter(),P.onFoot=!1),b.stop(p,et,!0),N.clear(),Pt(!1),w.start(Th.find(Gt=>Gt.id===$.dataset.r),p,Ut)?(O.snap(p),u.toast("Beat the gold & silver rivals! Speed cameras are off on the race route.",3)):u.toast("Could not build the race route",1.5))}),ht("kalpakTxt").textContent=`\u{1F3A9} Golden kalpaks found: ${_.count}/${_.list.length} \u2013 hidden all over Bishkek (+250 coins each)`,ht("jobNow").innerHTML=b.active?`On shift: <b>${b.status(p)}</b> \xB7 <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>`:`${b.completed} jobs done \xB7 balance <b>${Zn(f.money)} coins</b>`;let D=ht("endShift");D&&(D.onclick=$=>{$.preventDefault(),b.stop(p,et),St()})}function Lt(){ht("garage").innerHTML=Ah.map($t=>{let xe=f.owned.includes($t.id);return`<button class="card ${p.type===$t.id?"sel":""} ${xe?"":"locked"}" data-id="${$t.id}"><b>${$t.name}</b><small>${$t.desc}</small><div class="price">${xe?p.type===$t.id?"Driving":"Owned":"\u{1FA99} "+Zn($t.price)}</div></button>`}).join(""),ht("garage").querySelectorAll("button").forEach($t=>$t.onclick=()=>{let xe=Ah.find(mn=>mn.id===$t.dataset.id);if(b.active&&(b.active.type==="bus"||b.active.type==="marshrutka")){u.toast("Finish your route first",1.5);return}if(!f.owned.includes(xe.id)){if(f.money<xe.price){u.toast(`Not enough coins (${Zn(xe.price)} needed)`,1.6);return}f.money-=xe.price,f.owned.push(xe.id),d.cash()}et(xe.id,p.color,!0),f.save(p),Lt()});let D=Math.round(p.damage*3+p.dents*5);ht("dmgTxt").textContent=p.damage>1||p.dents?`Damage ${Math.round(p.damage)}% \xB7 ${D} coins`:"Your car is in perfect shape",ht("repairBtn").onclick=()=>{if(p.damage>1||p.dents){if(f.money<D){u.toast("Not enough coins",1.2);return}f.money-=D,p.repair(),U(),d.cash(),Lt()}};let $=p.custom||(p.custom={}),Gt=[[null,"Off"],[2130175,"Blue"],[16719968,"Pink"],[3211136,"Green"],[16752672,"Orange"],[11550975,"Purple"],[16777215,"White"]],te=[[null,"Chrome"],[2236962,"Black"],[13934624,"Gold"],[13639712,"Red"],[2777296,"Blue"]],mt=f.upgrades||(f.upgrades={}),Wt=($t,xe,mn)=>{if(!mt[$t]){if(f.money<xe){u.toast(`Need ${xe} coins`,1.2);return}f.money-=xe,mt[$t]=!0,d.cash()}mn(),p._applyCustom(),f.custom={...$},f.save(p),Lt()};ht("custom").innerHTML=`<h4>Neon underglow ${mt.neon?"":"\xB7 1 500 coins"}</h4><div class="sws">${Gt.map(([$t,xe])=>`<button class="btn ${$.neon===$t?"pri":""}" data-neon="${$t}">${xe}</button>`).join(" ")}</div>
      <h4>Rims ${mt.rims?"":"\xB7 600 coins"}</h4><div class="sws">${te.map(([$t,xe])=>`<button class="btn ${($.rims??null)===$t?"pri":""}" data-rims="${$t}">${xe}</button>`).join(" ")}</div>
      <h4>Rear spoiler ${mt.spoiler?"":"\xB7 1 000 coins"}</h4><button class="btn ${$.spoiler?"pri":""}" id="spBtn">${$.spoiler?"Remove spoiler":"Add spoiler"}</button>
      <h4>Number plate</h4><input type="text" id="plateIn" maxlength="12" value="${Rn(p.plateText||"")}" style="background:#1b2430;color:#fff;border:1px solid #2c3a4a;border-radius:8px;padding:8px;text-transform:uppercase">`,ht("custom").querySelectorAll("[data-neon]").forEach($t=>$t.onclick=()=>Wt("neon",1500,()=>{$.neon=$t.dataset.neon==="null"?null:+$t.dataset.neon})),ht("custom").querySelectorAll("[data-rims]").forEach($t=>$t.onclick=()=>Wt("rims",600,()=>{$.rims=$t.dataset.rims==="null"?null:+$t.dataset.rims})),ht("spBtn").onclick=()=>Wt("spoiler",1e3,()=>{$.spoiler=!$.spoiler}),ht("plateIn").onchange=$t=>{p.setPlate($t.target.value||"01KG 777 BSK"),$.plate=p.plateText,f.custom={...$},f.save(p)},ht("colors").innerHTML=Qv.map($t=>`<button class="sw" style="background:#${$t.toString(16).padStart(6,"0")}" data-c="${$t}"></button>`).join(""),ht("colors").querySelectorAll("button").forEach($t=>$t.onclick=()=>{p.setColor(+$t.dataset.c),f.homeColor=+$t.dataset.c,f.save(p)})}function oe(){ht("netStatus").innerHTML=e.mp?V.status==="online"?`<span class="dot on"></span> Connected \xB7 ${V.players.size+1} drivers in Bishkek right now`:`Connecting\u2026 (${V.status})`:"Multiplayer is off (Settings \u2192 Online).";let D=[{name:V.name||e.name||"You",money:f.money,job:b.active?es[b.active.type].icon:"",car:p.type,me:!0}].concat(V.list());D.sort(($,Gt)=>Gt.money-$.money),ht("lb").innerHTML="<tr><th>#</th><th>Driver</th><th>Coins</th><th>Now</th></tr>"+D.map(($,Gt)=>`<tr class="${$.me?"me":""}"><td>${Gt+1}</td><td>${Rn($.name)}</td><td>${Zn($.money)}</td><td>${$.job||Ah.find(te=>te.id===$.car)?.name||""}</td></tr>`).join("")}function xt(D){P.tabOnline=D,D?(oe(),ht("pause").classList.remove("hidden"),Jt("pOnline")):P.paused||ht("pause").classList.add("hidden")}function Ft(){ht("placeCount").textContent=`${f.visited.size}/${Ve.length} landmarks discovered \xB7 click to travel`,ht("placeList").innerHTML=Ve.map(D=>`<button class="place ${f.visited.has(D.id)?"done":""}" data-id="${D.id}"><span>${f.visited.has(D.id)?"\u2714":"\u25CB"} ${D.name}</span><small>${D.local||""}</small></button>`).join(""),ht("placeList").querySelectorAll("button").forEach(D=>D.onclick=()=>{let $=Ve.find(Gt=>Gt.id===D.dataset.id);Ut($.x,$.z),Pt(!1)}),ht("fineList").innerHTML=f.fines.length?f.fines.slice(-10).reverse().map(D=>`<div class="row"><span>${D.kind}<br><small class="muted">${D.time} \xB7 ${Rn(D.detail)}</small></span><b style="color:#ff8a80">\u2212${Zn(D.amount)}</b></div>`).join(""):'<p class="muted">No fines. Keep it under 150 km/h!</p>'}function Kt(){let D=(mt,Wt)=>`<div class="row"><label>${Wt}</label><button class="tog ${e[mt]?"on":""}" data-k="${mt}"></button></div>`,$=(mt,Wt,$t,xe,mn,is=un=>un)=>`<div class="row"><label>${Wt} <small class="muted" id="v_${mt}">${is(e[mt])}</small></label><input type="range" data-k="${mt}" min="${$t}" max="${xe}" step="${mn}" value="${e[mt]}"></div>`,Gt=(mt,Wt,$t)=>`<div class="row"><label>${Wt}</label><select data-k="${mt}">${$t.map(([xe,mn])=>`<option value="${xe}" ${String(e[mt])===String(xe)?"selected":""}>${mn}</option>`).join("")}</select></div>`;ht("settingsBox").innerHTML=`<div class="set"><div>
      <h4>Graphics</h4>
      ${Gt("preset","Quality preset",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"],["custom","Custom"]])}
      ${$("scale","Resolution",.5,2,.05,mt=>Math.round(mt*100)+"%")}
      ${$("view","Detail distance",600,2600,100,mt=>mt+" m")}
      ${$("far","City skyline distance",0,1e4,500,mt=>mt?mt/1e3+" km":"off")}
      ${D("shadows","Shadows")}${D("bloom","Bloom & colour grading")}${D("msaa","Anti-aliasing")}
      ${$("fov","Field of view",50,85,1,mt=>mt+"\xB0")}
      <h4>World</h4>
      ${$("traffic","Traffic density",.2,2,.1,mt=>Math.round(mt*100)+"%")}
      ${$("peds","Pedestrians",0,2,.1,mt=>Math.round(mt*100)+"%")}
      ${$("timeSpeed","Day speed",0,6,.5,mt=>mt?mt+"\xD7":"paused")}
      ${Gt("weather","Weather",[["auto","Changing"],["clear","Clear"],["rain","Rain"],["snow","Snow (winter)"]])}
    </div><div>
      <h4>Driving</h4>
      ${$("sens","Steering sensitivity",.4,1.6,.05,mt=>Math.round(mt*100)+"%")}
      ${Gt("manual","Gearbox",[["false","Automatic"],["true","Manual (Shift / Ctrl)"]])}
      ${D("abs","ABS")}${D("tcs","Traction control")}${D("esc","Stability control")}${D("steerAssist","Counter-steer assist")}
      <h4>Interface &amp; sound</h4>
      ${D("minimap","Minimap")}${D("shake","Camera shake")}${D("autoRes","Auto resolution (smooth FPS)")}${D("showFps","Show FPS")}
      ${$("vol","Volume",0,1,.05,mt=>Math.round(mt*100)+"%")}
      <h4>Online</h4>
      ${D("mp","Multiplayer")}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${Rn(e.name||"")}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;let te=ht("settingsBox");te.querySelectorAll(".tog").forEach(mt=>mt.onclick=()=>{let Wt=mt.dataset.k;e[Wt]=!e[Wt],mt.classList.toggle("on",e[Wt]),jt(Wt)}),te.querySelectorAll("input[type=range]").forEach(mt=>mt.oninput=()=>{let Wt=mt.dataset.k;e[Wt]=+mt.value;let $t=ht("v_"+Wt);$t&&($t.textContent=mt.parentElement.querySelector("small").textContent=Wt==="view"?mt.value+" m":Wt==="far"?+mt.value?mt.value/1e3+" km":"off":Wt==="fov"?mt.value+"\xB0":Wt==="timeSpeed"?+mt.value?mt.value+"\xD7":"paused":Math.round(mt.value*100)+"%"),jt(Wt)}),te.querySelectorAll("select").forEach(mt=>mt.onchange=()=>{let Wt=mt.dataset.k;e[Wt]=Wt==="manual"?mt.value==="true":mt.value,jt(Wt),Wt==="weather"&&mt.value!=="auto"&&R.set(mt.value)}),te.querySelector("input[type=text]").onchange=mt=>{e.name=mt.target.value.trim().slice(0,18)||"Driver",jt("name")},ht("resetProg").onclick=()=>{confirm("Reset coins, cars and landmarks?")&&(localStorage.removeItem("bishkekDrive"),location.reload())}}function jt(D){D==="preset"&&Fr[e.preset]?(Object.assign(e,Fr[e.preset]),Kt()):["scale","view","far","shadows","bloom","msaa"].includes(D)&&(e.preset="custom"),["scale","preset"].includes(D)&&(s(),n.setSize(window.innerWidth,window.innerHeight)),["shadows","preset"].includes(D)&&(n.shadowMap.enabled=e.shadows,o.traverse($=>{$.material&&(Array.isArray($.material)?$.material:[$.material]).forEach(Gt=>Gt.needsUpdate=!0)})),["bloom","msaa","preset","scale"].includes(D)&&Q(),D==="mp"&&(e.mp?V.connect(e.name||"Driver"):V.disconnect()),D==="name"&&V.enabled&&(V.name=e.name),ft(),a.updateProjectionMatrix()}ht("nameInput").value=e.name||"",ht("mpToggle").classList.toggle("on",e.mp),ht("mpToggle").onclick=()=>{e.mp=!e.mp,ht("mpToggle").classList.toggle("on",e.mp)},ht("startBtn").onclick=()=>{d.start(),e.name=(ht("nameInput").value.trim()||e.name||"Driver"+Math.floor(Math.random()*900+100)).slice(0,18),jf(e),ht("menu").classList.add("hidden"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),P.mode="drive",P.paused=!1,O.snap(p),e.mp&&V.connect(e.name);let D=!1;try{D=!!localStorage.getItem("bd_intro")}catch{}D?u.toast(`Salam, <b>${Rn(e.name)}</b>! <b>J</b> jobs \xB7 <b>M</b> map \xB7 <b>Esc</b> menu`,4):(P.paused=!0,ht("intro").classList.remove("hidden"))},ht("introGo").onclick=()=>{ht("intro").classList.add("hidden"),P.paused=!1;try{localStorage.setItem("bd_intro","1")}catch{}u.toast(`Salam, <b>${Rn(e.name)}</b>! Press <b>J</b> to start working`,4)};function Ht(){if(P.mode!=="drive")return;let D=Math.hypot(p.x-g.dropoff.x,p.z-g.dropoff.y),$=Math.hypot(p.x-g.spotter.x,p.z-g.spotter.y);if(D<14){if(p.speed>3){u.toast("Stop the car first",1.2);return}u.renderBoard(g.board,ht("fids")),ht("airportMenu").classList.remove("hidden"),d.pa()}else $<14&&G()}ht("apFlight").onclick=()=>{if(f.money<500){u.toast("Not enough coins for a ticket (500)",1.6);return}f.money-=500,d.cash(),ht("airportMenu").classList.add("hidden"),se()},ht("apSpot").onclick=()=>{ht("airportMenu").classList.add("hidden"),G()},ht("apTaxi").onclick=()=>{if(ht("airportMenu").classList.add("hidden"),!b.start("taxi",p,o,et))return;let D=b.active;D.x=g.dropoff.x+g.n.x*6,D.z=g.dropoff.y+g.n.y*6,D.ped&&(D.ped.x=D.ped.tx=D.x,D.ped.z=D.ped.tz=D.z),D.dest=Ve.filter($=>!$.airport)[Math.floor(Math.random()*(Ve.length-1))],f.setRoute(D.x,D.z,"Passenger"),u.toast(`\u{1F695} <b>${D.passenger}</b> just landed and needs a ride to ${D.dest.name}`,3.5)},ht("apClose").onclick=()=>ht("airportMenu").classList.add("hidden");let le=D=>ht("fade").classList.toggle("on",D);async function se(){le(!0),await Ui(700),P.flight=g.createScenicFlight(),P.mode="flight",P.flightCam=0,g.scenicCamera(P.flight,0,Rt,ee),a.position.copy(Rt),ge.copy(ee),h.radius=Math.max(e.view,2400),a.far=12e3,a.updateProjectionMatrix(),ht("boarding").classList.add("show"),setTimeout(()=>ht("boarding").classList.remove("show"),4e3),d.pa(),le(!1)}async function Te(D){if(!P.flight||P.ending)return;P.ending=!0;let $=P.flight;le(!0),await Ui(700),g.endScenic($),P.flight=null,P.ending=!1,P.mode="drive",h.radius=e.view,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),u.setFlightInfo(null),O.snap(p),le(!1),u.toast(D?"Back at Manas airport":"Welcome back to Bishkek!",2.5)}function G(){P.mode="spot";let D=g.planes.find($=>$.state==="approach"||$.state==="flare");D||(D=g._newPlane(),g._startApproach(D,.45)),P.spot={pl:D,cam:new I(g.spotter.x,2.2,g.spotter.y)},ge.set(D.x,D.y,D.z),u.toast("Plane spotting \xB7 Esc to exit",2.5)}function At(){P.mode="drive",P.spot=null}if("ontouchstart"in window){ht("touch").classList.remove("hidden");let D=($,Gt,te)=>{let mt=ht($);mt.addEventListener("touchstart",Wt=>{Wt.preventDefault(),d.start(),Gt()}),mt.addEventListener("touchend",Wt=>{Wt.preventDefault(),te()})};D("tLeft",()=>F.steer=-1,()=>F.steer=0),D("tRight",()=>F.steer=1,()=>F.steer=0),D("tGas",()=>F.gas=1,()=>F.gas=0),D("tBrake",()=>F.brake=1,()=>F.brake=0),D("tHand",()=>F.hand=!0,()=>F.hand=!1),D("tNitro",()=>F.nitro=!0,()=>F.nitro=!1),D("tCam",()=>rt("KeyC"),()=>{}),D("tAct",()=>rt("KeyE"),()=>{}),D("tMenu",()=>rt("Escape"),()=>{})}window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),q&&q.setSize(window.innerWidth,window.innerHeight)});let nt=new qs,lt={x:0,z:0,h:0,speed:0,spec:p.spec,vx:0,vz:0,radius:1},Et={},Rt=new I,ee=new I,ge=new I,Fe=document.createElement("canvas");Fe.width=320,Fe.height=180;let me=D=>P.photoCbs.push(D);if(ht("loading").classList.add("hidden"),ht("menu").classList.remove("hidden"),!localStorage.getItem("bd_seen"))try{localStorage.setItem("bd_seen","1")}catch{}function pn(D,$){return g.rel(new tt(D,$)).x>-2500&&$<-15500?"Manas International Airport":$<-3600?"Bishkek \u2013 Manas road":$<300?D<500?"Pervomaisky district":"Sverdlovsky district":D<0?"Leninsky district":"Oktyabrsky district"}let en=0,Kn={ema:1/60,t:0};n.shadowMap.autoUpdate=!1;function er(){requestAnimationFrame(er);let D=nt.getDelta(),$=Math.min(.05,D);if(Kn.ema=Kn.ema*.95+D*.05,Kn.t+=D,Kn.t>1.5){Kn.t=0;let ut=1/Math.max(.001,Kn.ema);if(e.showFps?(ht("fps").textContent=Math.round(ut)+" fps",ht("fps").style.display="block"):ht("fps").style.display="none",e.autoRes&&P.mode!=="menu"){let wt=i;ut<40?i=Math.max(.5,i-(ut<25?.15:.08)):ut>57&&i<1&&(i=Math.min(1,i+.05)),wt!==i&&(s(),n.setSize(window.innerWidth,window.innerHeight),q&&q.setSize(window.innerWidth,window.innerHeight))}h.buildBudget=ut<35?4:8}let Gt=!P.paused&&P.mode!=="menu",te=Gt?$:0;P.time+=te,tn.uTime.value+=$,P.hour=(P.hour+te/60*e.timeSpeed)%24,l.setHour(P.hour);let mt=P.hour;S.rush=mt>7.5&&mt<10||mt>17&&mt<20?1.65:mt>23||mt<6?.45:1;let Wt=P.keys,$t=(Wt.KeyD||Wt.ArrowRight?1:0)-(Wt.KeyA||Wt.ArrowLeft?1:0)+F.steer,xe=(Wt.KeyW||Wt.ArrowUp?1:0)+F.gas,mn=(Wt.KeyS||Wt.ArrowDown?1:0)+F.brake,is=!1,un=navigator.getGamepads?[...navigator.getGamepads()].find(ut=>ut):null;un&&(Math.abs(un.axes[0])>.08&&($t=Math.sign(un.axes[0])*Math.pow(Math.abs(un.axes[0]),1.5),is=!0),un.buttons[7]?.value>.02&&(xe=un.buttons[7].value),un.buttons[6]?.value>.02&&(mn=un.buttons[6].value)),P.steer=is?$t:P.steer+(Ie.clamp($t,-1,1)-P.steer)*Math.min(1,$*($t===0?12:8)),P.thr+=(Math.min(1,xe)-P.thr)*Math.min(1,$*(xe?5:12));let nr={steer:P.steer,throttle:P.thr<.02?0:P.thr,brake:Math.min(1,mn),hand:!!(Wt.Space||F.hand||un?.buttons[0]?.pressed),nitro:!!(Wt.ShiftLeft||Wt.ShiftRight||F.nitro||un?.buttons[1]?.pressed)};p.throttleOn=nr.throttle>0;let C=P.onFoot?L:p,W=l.night;if(p.night=W>.45,Gt){if(P.mode==="drive"||P.mode==="spot"){let vt=t.nearestRoad(p.x,p.z,25),Nt=vt&&vt.dist<vt.e.w/2+3.5;p.surface=(Nt||g.runwayIncursion(p.x,p.z)?1:.72)*(R.grip??1),Et.road=vt&&vt.dist<vt.e.w/2+4?vt:null;let ce=P.mode==="spot"||P.onFoot?{steer:0,throttle:0,brake:1,hand:!0}:nr;p.update($,ce,h,S,gt),P.onFoot&&L.update($,{fwd:(Wt.KeyW||Wt.ArrowUp?1:0)-(Wt.KeyS||Wt.ArrowDown?1:0),side:(Wt.KeyD||Wt.ArrowRight?1:0)-(Wt.KeyA||Wt.ArrowLeft?1:0),run:!!(Wt.ShiftLeft||Wt.ShiftRight),jump:!!Wt.Space},S.cars.concat([p]),E),A.update($,p,P.onFoot);let he=w.update($,p);he&&he.target&&(!f.routeTarget||f.routeTarget.x!==he.target.x)&&f.setRoute(he.target.x,he.target.z,"Checkpoint"),he&&he.done&&f.clearRoute()}let ut=P.mode==="flight"?Object.assign(lt,{x:P.flight.plane.x,z:P.flight.plane.z,h:P.flight.plane.h,speed:0}):C;S.night=W,S.update($,ut,e.peds>0?E:null),E.update($,ut,e.peds>0);for(let vt of S.honks){let Nt=Math.hypot(vt.x-p.x,vt.z-p.z);d.horn(Math.min(.3,6/(Nt+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(g.update($,W,p,P.flight?P.flight.plane:null),m.update($,P.time,W),P.mode==="drive"||P.mode==="cutscene"){let vt=N.update($,P.onFoot?L:p,()=>{P.mode="cutscene",document.body.classList.add("cinemode"),b.active&&b.stop(p,et,!0)});vt&&vt.cam&&(P.cutCam=vt),vt&&vt.done&&(P.mode="drive",document.body.classList.remove("cinemode"),P.cutCam=null,f.money-=vt.fine,f.fines.push({kind:"Arrest",amount:vt.fine,detail:"Caught by the patrol police",time:u.clockText()}),O.snap(p),f.save(p),u.toast(`Released after paying ${vt.fine} coins`,3))}if(B.update($),_.update($,C.x,C.z),R.update($,a),n.toneMappingExposure=.95*(R.exposure??1),e.weather==="auto"&&(P.wT=(P.wT??300)-$,P.wT<=0)){P.wT=300+Math.random()*400;let vt=Math.random();R.set(vt<.6?"clear":vt<.85?"rain":"snow")}if(en%60===0)for(let vt of[...B.emitters])vt.ai&&!S.cars.includes(vt.obj)&&B.removeEmitter(vt);if(P.mode==="drive"){let vt=Et.road?t.roadName(Et.road.e.name):null;Et.street=vt?vt.en:null,f.trafficTime=S.time,!w.active&&!P.onFoot&&f.checkRules($,p,Et,null,g,me),f.checkLandmarks(p);let Nt=b.update($,p,o,et);if(Nt&&Nt.done&&(f.jobsDone=b.completed,f.save(p)),!b.active&&b.nextIn!==void 0&&(b.nextIn-=$,b.nextIn<=0)){let Xe=b.nextType;b.nextIn=void 0,b.start(Xe,p,o,et)}u.setStreet(vt?vt.en!==vt.local?`${vt.en}`:vt.local:Et.runway?"Runway 07/25":"",vt&&vt.en!==vt.local?vt.local:pn(p.x,p.z)),u.setLimit(p.speed*3.6,Et.wrongWay,Et.runway,P.onFoot||w.active?"":Et.warn);let ce=Math.hypot(p.x-g.dropoff.x,p.z-g.dropoff.y),he=Math.hypot(p.x-g.spotter.x,p.z-g.spotter.y),ve=ce<14?"<b>E</b> \xB7 Manas Airport":he<14?"<b>E</b> \xB7 watch planes land":"";if(P.onFoot){let Xe=L.nearestCar(p,S);ve=Xe?Xe.own?"<b>F</b> \xB7 get in your car":"<b>F</b> \xB7 steal this car \u{1F6A8}":"Walking \xB7 <b>Shift</b> run \xB7 <b>Space</b> jump"}ve!==P.hintTxt&&(P.hintTxt=ve,ht("hint").innerHTML=ve,ht("hint").classList.toggle("show",!!ve))}else P.hintTxt&&(P.hintTxt="",ht("hint").classList.remove("show"));if(P.mode==="flight"){let vt=["pushback","taxi","taxiIn"].includes(P.flight.stage)?$*3:$;!P.ending&&g.updateScenic(P.flight,vt)&&Te(!1)}f.updateRoute(P.mode==="flight"?lt:p,o),f.routeMat&&(f.routeMat.uniforms.uTime.value=P.time);let wt=b.status(p),Zt=f.routeTarget?Math.hypot(p.x-f.routeTarget.x,p.z-f.routeTarget.z):0;u.setMission(wt?`${wt} \xB7 ${Ha(Zt)}`:f.routeTarget?`\u{1F4CD} ${f.routeTarget.label} \xB7 ${Ha(Zt)}`:""),P.lastSave+=$,P.lastSave>10&&(P.lastSave=0,f.save(p))}if(V.update($,p,{money:f.money,job:b.active?es[b.active.type].icon:"",jobs:b.completed},W),P.mode==="flight"&&P.flight){g.scenicCamera(P.flight,P.flightCam,Rt,ee),a.position.lerp(Rt,P.flightCam===0?1-Math.exp(-$*4):1),ge.lerp(ee,P.flightCam===0?1-Math.exp(-$*6):1),a.lookAt(ge),a.fov=P.flightCam===2?70:55,a.updateProjectionMatrix();let ut=P.flight.plane,wt=(Math.atan2(Math.sin(ut.h),-Math.cos(ut.h))*180/Math.PI+360)%360;u.setFlightInfo({alt:ut.y-ut.a.groundY+627,spd:ut.v,hdg:wt,stage:{pushback:"Pushback",taxi:"Taxi to runway 07",roll:"Take-off",air:"Over Bishkek",final:"Final approach",taxiIn:"Taxi to gate",done:"Arrived"}[P.flight.stage],cam:["Chase","Window","Cockpit","Spotter"][P.flightCam]})}else if(P.mode==="spot"&&P.spot){let ut=P.spot.pl;a.position.copy(P.spot.cam),ge.lerp(new I(ut.x,ut.y,ut.z),1-Math.exp(-$*5)),a.lookAt(ge),a.fov=Ie.clamp(Math.hypot(ut.x-P.spot.cam.x,ut.z-P.spot.cam.z)/40,12,60),a.updateProjectionMatrix(),(!g.planes.includes(ut)||ut.state==="taxiIn"||ut.state==="climb"||ut.state==="goaround"&&ut.y>300)&&At()}else if(P.mode==="cutscene"&&P.cutCam)a.position.lerp(P.cutCam.cam,1-Math.exp(-$*3)),ge.lerp(P.cutCam.look,1-Math.exp(-$*4)),a.lookAt(ge),a.fov=50,a.updateProjectionMatrix();else if(P.onFoot&&P.mode==="drive")dt.active=st,L.camera(a,$,dt),dt.dx=dt.dy=0;else if(P.mode!=="free"&&(st||(P.mouseYaw*=Math.exp(-$*2)),p.boosting&&(O.shake=Math.max(O.shake,.06)),O.baseFov=e.fov,O.update(Math.max($,.001),p,P.mouseYaw),P.mode==="menu")){let ut=performance.now()*4e-5;a.position.set(p.x+Math.sin(ut)*26,6+Math.sin(ut*3)*2,p.z+Math.cos(ut)*26),a.lookAt(p.x,2,p.z)}let K=P.mode==="flight"||P.mode==="free"?{x:a.position.x,z:a.position.z}:{x:p.x,z:p.z};h.update(K,$);let j=l.update(a,P.mode==="flight"&&P.flight?{x:P.flight.plane.x,z:P.flight.plane.z}:p),X=l.sun.shadow.camera,_t=P.mode==="flight"?160:110;X.right!==_t&&(X.left=X.bottom=-_t,X.right=X.top=_t,X.updateProjectionMatrix()),h.setNight(j.night),q&&q.setNight(j.night),P.mode!=="flight"&&(o.fog.near=450,o.fog.far=Math.max(h.radius+700,(e.far||0)*1.15));let It=g.noiseAt(a.position.x,a.position.z,a.position.y);if(d.update($,p,{throttle:nr.throttle,inFlight:P.mode==="flight",cityLevel:Math.min(1,S.cars.length/200)*(Math.abs(p.z)<6e3?1:.2),jet:P.mode==="flight"?.35:It}),e.shadows&&(en%2===0||p.speed>25)&&(n.shadowMap.needsUpdate=!0),q?q.render($):(n.setRenderTarget(null),n.clear(),l.render(n),n.clearDepth(),n.render(o,a)),P.photoCbs.length){let ut=Fe.getContext("2d");ut.drawImage(n.domElement,0,0,320,180),ut.fillStyle="rgba(0,0,0,0.55)",ut.fillRect(0,158,320,22),ut.fillStyle="#ffeb3b",ut.font="bold 12px monospace",ut.fillText(`${Math.round(p.speed*3.6)} km/h  LIMIT 150  ${u.clockText()}  01KG`,8,173);let wt=Fe.toDataURL("image/jpeg",.7);for(let Zt of P.photoCbs)Zt(wt);P.photoCbs.length=0}if(P.mode!=="menu"){en++,en%2===0&&u.drawSpeedo(p),e.minimap&&en%3===0&&u.drawMini(P.onFoot?Object.assign(lt,{x:L.x,z:L.z,h:L.camYaw,speed:0}):p,S,f,g,V,(wt,Zt)=>{wt.fillStyle="#ffc83a";for(let vt of _.near(C.x,C.z,180))wt.beginPath(),wt.arc(vt.x,vt.z,7/Zt*u.dpr,0,7),wt.fill();if(w.active){wt.fillStyle="#ffd23a";for(let vt of w.active.cps.slice(w.active.i,w.active.i+3))wt.beginPath(),wt.arc(vt.x,vt.z,9/Zt*u.dpr,0,7),wt.fill()}for(let vt of N.cars)wt.fillStyle=performance.now()%500<250?"#ff3030":"#3060ff",wt.beginPath(),wt.arc(vt.x,vt.z,7/Zt*u.dpr,0,7),wt.fill()});let ut=ht("nitroBar");ut&&(ut.style.width=Math.round((p.nitro??1)*100)+"%",ut.parentElement.classList.toggle("boost",!!p.boosting)),u.setMoney(f.money),u.setClock(P.hour,e.mp&&V.status==="online"?V.players.size:null),P.mapOpen&&u.drawBigMap(p,f,g,V),P.tabOnline&&en%20===0&&oe(),ht("hudRoot").classList.toggle("flightmode",P.mode==="flight"||P.mode==="spot")}}er(),window.addEventListener("beforeunload",()=>{f.save(p),V.disconnect()})}function Rn(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Ha(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}ny().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
