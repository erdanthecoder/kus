(()=>{var qc="170";var jf=0,Ch=1,Qf=2;var qu=1,$c=2,ii=3,Si=0,sn=1,Ae=2,Vn=0,Ts=1,Be=2,Ph=3,Ih=4,td=5,Wi=100,ed=101,nd=102,id=103,sd=104,rd=200,od=201,ad=202,ld=203,Ml=204,bl=205,cd=206,hd=207,ud=208,fd=209,dd=210,pd=211,md=212,gd=213,xd=214,wl=0,El=1,Sl=2,Ps=3,Tl=4,Al=5,Rl=6,Cl=7,$u=0,vd=1,yd=2,wi=0,Yc=1,Zc=2,Jc=3,zr=4,_d=5,Kc=6,jc=7;var Yu=300,Is=301,Ls=302,Pl=303,Il=304,Jo=306,Mr=1e3,qi=1001,Ll=1002,yn=1003,Md=1004;var kr=1005;var Hn=1006,Ha=1007;var $i=1008;var ai=1009,Zu=1010,Ju=1011,br=1012,Qc=1013,Yi=1014,On=1015,Mn=1016,th=1017,eh=1018,zs=1020,Ku=35902,ju=1021,Qu=1022,Dn=1023,tf=1024,ef=1025,As=1026,Ds=1027,nh=1028,ih=1029,nf=1030,sh=1031;var rh=1033,xo=33776,vo=33777,yo=33778,_o=33779,zl=35840,Dl=35841,Ul=35842,Nl=35843,kl=36196,Bl=37492,Fl=37496,Hl=37808,Ol=37809,Vl=37810,Gl=37811,Wl=37812,Xl=37813,ql=37814,$l=37815,Yl=37816,Zl=37817,Jl=37818,Kl=37819,jl=37820,Ql=37821,Mo=36492,tc=36494,ec=36495,sf=36283,nc=36284,ic=36285,sc=36286;var bo=2300,rc=2301,Oa=2302,Lh=2400,zh=2401,Dh=2402;var bd=3200,wd=3201;var rf=0,Ed=1,Mi="",be="srgb",qs="srgb-linear",Ko="linear",Me="srgb";var rs=7680;var Uh=519,Sd=512,Td=513,Ad=514,of=515,Rd=516,Cd=517,Pd=518,Id=519,oc=35044,$s=35048;var Nh="300 es",ri=2e3,wo=2001,Ti=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},en=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],kh=1234567,gr=Math.PI/180,Us=180/Math.PI;function Gn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(en[r&255]+en[r>>8&255]+en[r>>16&255]+en[r>>24&255]+"-"+en[t&255]+en[t>>8&255]+"-"+en[t>>16&15|64]+en[t>>24&255]+"-"+en[e&63|128]+en[e>>8&255]+"-"+en[e>>16&255]+en[e>>24&255]+en[n&255]+en[n>>8&255]+en[n>>16&255]+en[n>>24&255]).toLowerCase()}function Ge(r,t,e){return Math.max(t,Math.min(e,r))}function oh(r,t){return(r%t+t)%t}function Ld(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function zd(r,t,e){return r!==t?(e-r)/(t-r):0}function xr(r,t,e){return(1-e)*r+e*t}function Dd(r,t,e,n){return xr(r,t,1-Math.exp(-e*n))}function Ud(r,t=1){return t-Math.abs(oh(r,t*2)-t)}function Nd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function kd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Bd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Fd(r,t){return r+Math.random()*(t-r)}function Hd(r){return r*(.5-Math.random())}function Od(r){r!==void 0&&(kh=r);let t=kh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Vd(r){return r*gr}function Gd(r){return r*Us}function Wd(r){return(r&r-1)===0&&r!==0}function Xd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function qd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $d(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),p=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*p,a*c);break;case"YZY":r.set(l*p,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*p,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function zn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ee(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ce={DEG2RAD:gr,RAD2DEG:Us,generateUUID:Gn,clamp:Ge,euclideanModulo:oh,mapLinear:Ld,inverseLerp:zd,lerp:xr,damp:Dd,pingpong:Ud,smoothstep:Nd,smootherstep:kd,randInt:Bd,randFloat:Fd,randFloatSpread:Hd,seededRandom:Od,degToRad:Vd,radToDeg:Gd,isPowerOfTwo:Wd,ceilPowerOfTwo:Xd,floorPowerOfTwo:qd,setQuaternionFromProperEuler:$d,normalize:Ee,denormalize:zn},tt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},se=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],f=n[5],g=n[8],m=i[0],x=i[3],d=i[6],_=i[1],M=i[4],v=i[7],T=i[2],w=i[5],E=i[8];return s[0]=o*m+a*_+l*T,s[3]=o*x+a*M+l*w,s[6]=o*d+a*v+l*E,s[1]=c*m+h*_+u*T,s[4]=c*x+h*M+u*w,s[7]=c*d+h*v+u*E,s[2]=p*m+f*_+g*T,s[5]=p*x+f*M+g*w,s[8]=p*d+f*v+g*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*s,f=c*s-o*l,g=e*u+n*p+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=p*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=f*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Va.makeScale(t,e)),this}rotate(t){return this.premultiply(Va.makeRotation(-t)),this}translate(t,e){return this.premultiply(Va.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Va=new se;function af(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Eo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yd(){let r=Eo("canvas");return r.style.display="block",r}var Bh={};function pr(r){r in Bh||(Bh[r]=!0,console.warn(r))}function Zd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Jd(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Kd(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var he={enabled:!0,workingColorSpace:qs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Me&&(r.r=oi(r.r),r.g=oi(r.g),r.b=oi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Me&&(r.r=Rs(r.r),r.g=Rs(r.g),r.b=Rs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mi?Ko:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function oi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Rs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Fh=[.64,.33,.3,.6,.15,.06],Hh=[.2126,.7152,.0722],Oh=[.3127,.329],Vh=new se().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gh=new se().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);he.define({[qs]:{primaries:Fh,whitePoint:Oh,transfer:Ko,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:Hh,workingColorSpaceConfig:{unpackColorSpace:be},outputColorSpaceConfig:{drawingBufferColorSpace:be}},[be]:{primaries:Fh,whitePoint:Oh,transfer:Me,toXYZ:Vh,fromXYZ:Gh,luminanceCoefficients:Hh,outputColorSpaceConfig:{drawingBufferColorSpace:be}}});var os,ac=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{os===void 0&&(os=Eo("canvas")),os.width=t.width,os.height=t.height;let n=os.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=os}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Eo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=oi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(oi(e[n]/255)*255):e[n]=oi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},jd=0,So=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Gn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ga(i[o].image)):s.push(Ga(i[o]))}else s=Ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ac.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qd=0,dn=class r extends Ti{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=qi,i=qi,s=Hn,o=$i,a=Dn,l=ai,c=r.DEFAULT_ANISOTROPY,h=Mi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=Gn(),this.name="",this.source=new So(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new se,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Mr:t.x=t.x-Math.floor(t.x);break;case qi:t.x=t.x<0?0:1;break;case Ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Mr:t.y=t.y-Math.floor(t.y);break;case qi:t.y=t.y<0?0:1;break;case Ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};dn.DEFAULT_IMAGE=null;dn.DEFAULT_MAPPING=Yu;dn.DEFAULT_ANISOTROPY=1;var Te=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],f=l[5],g=l[9],m=l[2],x=l[6],d=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+f+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,v=(f+1)/2,T=(d+1)/2,w=(h+p)/4,E=(u+m)/4,C=(g+x)/4;return M>v&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=w/n,s=E/n):v>T?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=C/s),this.set(n,i,s,e),this}let _=Math.sqrt((x-g)*(x-g)+(u-m)*(u-m)+(p-h)*(p-h));return Math.abs(_)<.001&&(_=1),this.x=(x-g)/_,this.y=(u-m)/_,this.z=(p-h)/_,this.w=Math.acos((c+f+d-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},lc=class extends Ti{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Hn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new dn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new So(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends lc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},To=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cc=class extends dn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Oe=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],p=s[o+0],f=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=f,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==p||c!==f||h!==g){let x=1-a,d=l*p+c*f+h*g+u*m,_=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){let T=Math.sqrt(M),w=Math.atan2(T,d*_);x=Math.sin(x*w)/T,a=Math.sin(a*w)/T}let v=a*_;if(l=l*x+p*v,c=c*x+f*v,h=h*x+g*v,u=u*x+m*v,x===1-a){let T=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=T,c*=T,h*=T,u*=T}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],p=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*p,t[e+1]=l*g+h*p+c*u-a*f,t[e+2]=c*g+h*f+a*p-l*u,t[e+3]=h*g-a*u-l*p-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),p=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=p*h*u+c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u-p*f*g;break;case"YXZ":this._x=p*h*u+c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u+p*f*g;break;case"ZXY":this._x=p*h*u-c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u-p*f*g;break;case"ZYX":this._x=p*h*u-c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u+p*f*g;break;case"YZX":this._x=p*h*u+c*f*g,this._y=c*f*u+p*h*g,this._z=c*h*g-p*f*u,this._w=c*h*u-p*f*g;break;case"XZY":this._x=p*h*u-c*f*g,this._y=c*f*u-p*h*g,this._z=c*h*g+p*f*u,this._w=c*h*u+p*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let f=.5/Math.sqrt(p+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ge(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Wa.copy(this).projectOnVector(t),this.sub(Wa)}reflect(t){return this.sub(Wa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ge(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Wa=new I,Wh=new Oe,li=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Pn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Pn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Pn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Pn):Pn.fromBufferAttribute(s,o),Pn.applyMatrix4(t.matrixWorld),this.expandByPoint(Pn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Br.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Br.copy(n.boundingBox)),Br.applyMatrix4(t.matrixWorld),this.union(Br)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Pn),Pn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ir),Fr.subVectors(this.max,ir),as.subVectors(t.a,ir),ls.subVectors(t.b,ir),cs.subVectors(t.c,ir),mi.subVectors(ls,as),gi.subVectors(cs,ls),ki.subVectors(as,cs);let e=[0,-mi.z,mi.y,0,-gi.z,gi.y,0,-ki.z,ki.y,mi.z,0,-mi.x,gi.z,0,-gi.x,ki.z,0,-ki.x,-mi.y,mi.x,0,-gi.y,gi.x,0,-ki.y,ki.x,0];return!Xa(e,as,ls,cs,Fr)||(e=[1,0,0,0,1,0,0,0,1],!Xa(e,as,ls,cs,Fr))?!1:(Hr.crossVectors(mi,gi),e=[Hr.x,Hr.y,Hr.z],Xa(e,as,ls,cs,Fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Pn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Pn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(jn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},jn=[new I,new I,new I,new I,new I,new I,new I,new I],Pn=new I,Br=new li,as=new I,ls=new I,cs=new I,mi=new I,gi=new I,ki=new I,ir=new I,Fr=new I,Hr=new I,Bi=new I;function Xa(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Bi.fromArray(r,s);let a=i.x*Math.abs(Bi.x)+i.y*Math.abs(Bi.y)+i.z*Math.abs(Bi.z),l=t.dot(Bi),c=e.dot(Bi),h=n.dot(Bi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var tp=new li,sr=new I,qa=new I,ci=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):tp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;sr.subVectors(t,this.center);let e=sr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(sr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(sr.copy(t.center).add(qa)),this.expandByPoint(sr.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Qn=new I,$a=new I,Or=new I,xi=new I,Ya=new I,Vr=new I,Za=new I,wr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Qn.copy(this.origin).addScaledVector(this.direction,e),Qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){$a.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),xi.copy(this.origin).sub($a);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Or),a=xi.dot(this.direction),l=-xi.dot(Or),c=xi.lengthSq(),h=Math.abs(1-o*o),u,p,f,g;if(h>0)if(u=o*l-a,p=o*a-l,g=s*h,u>=0)if(p>=-g)if(p<=g){let m=1/h;u*=m,p*=m,f=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-s,-l),s),f=p*(p+2*l)+c):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+p*(p+2*l)+c);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),f=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy($a).addScaledVector(Or,p),f}intersectSphere(t,e){Qn.subVectors(t.center,this.origin);let n=Qn.dot(this.direction),i=Qn.dot(Qn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Qn)!==null}intersectTriangle(t,e,n,i,s){Ya.subVectors(e,t),Vr.subVectors(n,t),Za.crossVectors(Ya,Vr);let o=this.direction.dot(Za),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;xi.subVectors(this.origin,t);let l=a*this.direction.dot(Vr.crossVectors(xi,Vr));if(l<0)return null;let c=a*this.direction.dot(Ya.cross(xi));if(c<0||l+c>o)return null;let h=-a*xi.dot(Za);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},re=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,p,f,g,m,x){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,p,f,g,m,x)}set(t,e,n,i,s,o,a,l,c,h,u,p,f,g,m,x){let d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=i,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=p,d[3]=f,d[7]=g,d[11]=m,d[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/hs.setFromMatrixColumn(t,0).length(),s=1/hs.setFromMatrixColumn(t,1).length(),o=1/hs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let p=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=p-m*c,e[9]=-a*l,e[2]=m-p*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,f=l*u,g=c*h,m=c*u;e[0]=p+m*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=m+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,f=l*u,g=c*h,m=c*u;e[0]=p-m*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=m-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,f=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=p*c+m,e[1]=l*u,e[5]=m*c+p,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-p*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=p-m*u}else if(t.order==="XZY"){let p=o*l,f=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+m,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=m*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ep,t,np)}lookAt(t,e,n){let i=this.elements;return xn.subVectors(t,e),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),vi.crossVectors(n,xn),vi.lengthSq()===0&&(Math.abs(n.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),vi.crossVectors(n,xn)),vi.normalize(),Gr.crossVectors(xn,vi),i[0]=vi.x,i[4]=Gr.x,i[8]=xn.x,i[1]=vi.y,i[5]=Gr.y,i[9]=xn.y,i[2]=vi.z,i[6]=Gr.z,i[10]=xn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],f=n[13],g=n[2],m=n[6],x=n[10],d=n[14],_=n[3],M=n[7],v=n[11],T=n[15],w=i[0],E=i[4],C=i[8],y=i[12],b=i[1],A=i[5],z=i[9],N=i[13],H=i[2],B=i[6],k=i[10],G=i[14],O=i[3],$=i[7],Q=i[11],P=i[15];return s[0]=o*w+a*b+l*H+c*O,s[4]=o*E+a*A+l*B+c*$,s[8]=o*C+a*z+l*k+c*Q,s[12]=o*y+a*N+l*G+c*P,s[1]=h*w+u*b+p*H+f*O,s[5]=h*E+u*A+p*B+f*$,s[9]=h*C+u*z+p*k+f*Q,s[13]=h*y+u*N+p*G+f*P,s[2]=g*w+m*b+x*H+d*O,s[6]=g*E+m*A+x*B+d*$,s[10]=g*C+m*z+x*k+d*Q,s[14]=g*y+m*N+x*G+d*P,s[3]=_*w+M*b+v*H+T*O,s[7]=_*E+M*A+v*B+T*$,s[11]=_*C+M*z+v*k+T*Q,s[15]=_*y+M*N+v*G+T*P,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],f=t[14],g=t[3],m=t[7],x=t[11],d=t[15];return g*(+s*l*u-i*c*u-s*a*p+n*c*p+i*a*f-n*l*f)+m*(+e*l*f-e*c*p+s*o*p-i*o*f+i*c*h-s*l*h)+x*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+d*(-i*a*h-e*l*u+e*a*p+i*o*u-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],f=t[11],g=t[12],m=t[13],x=t[14],d=t[15],_=u*x*c-m*p*c+m*l*f-a*x*f-u*l*d+a*p*d,M=g*p*c-h*x*c-g*l*f+o*x*f+h*l*d-o*p*d,v=h*m*c-g*u*c+g*a*f-o*m*f-h*a*d+o*u*d,T=g*u*l-h*m*l-g*a*p+o*m*p+h*a*x-o*u*x,w=e*_+n*M+i*v+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=_*E,t[1]=(m*p*s-u*x*s-m*i*f+n*x*f+u*i*d-n*p*d)*E,t[2]=(a*x*s-m*l*s+m*i*c-n*x*c-a*i*d+n*l*d)*E,t[3]=(u*l*s-a*p*s-u*i*c+n*p*c+a*i*f-n*l*f)*E,t[4]=M*E,t[5]=(h*x*s-g*p*s+g*i*f-e*x*f-h*i*d+e*p*d)*E,t[6]=(g*l*s-o*x*s-g*i*c+e*x*c+o*i*d-e*l*d)*E,t[7]=(o*p*s-h*l*s+h*i*c-e*p*c-o*i*f+e*l*f)*E,t[8]=v*E,t[9]=(g*u*s-h*m*s-g*n*f+e*m*f+h*n*d-e*u*d)*E,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*d+e*a*d)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=T*E,t[13]=(h*m*i-g*u*i+g*n*p-e*m*p-h*n*x+e*u*x)*E,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*x-e*a*x)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*p+e*a*p)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,p=s*c,f=s*h,g=s*u,m=o*h,x=o*u,d=a*u,_=l*c,M=l*h,v=l*u,T=n.x,w=n.y,E=n.z;return i[0]=(1-(m+d))*T,i[1]=(f+v)*T,i[2]=(g-M)*T,i[3]=0,i[4]=(f-v)*w,i[5]=(1-(p+d))*w,i[6]=(x+_)*w,i[7]=0,i[8]=(g+M)*E,i[9]=(x-_)*E,i[10]=(1-(p+m))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=hs.set(i[0],i[1],i[2]).length(),o=hs.set(i[4],i[5],i[6]).length(),a=hs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],In.copy(this);let c=1/s,h=1/o,u=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=h,In.elements[5]*=h,In.elements[6]*=h,In.elements[8]*=u,In.elements[9]*=u,In.elements[10]*=u,e.setFromRotationMatrix(In),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=ri){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i),f,g;if(a===ri)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===wo)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=ri){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),p=(e+t)*c,f=(n+i)*h,g,m;if(a===ri)g=(o+s)*u,m=-2*u;else if(a===wo)g=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},hs=new I,In=new re,ep=new I(0,0,0),np=new I(1,1,1),vi=new I,Gr=new I,xn=new I,Xh=new re,qh=new Oe,Ke=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ge(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ge(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ge(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ge(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ge(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ge(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qh.setFromEuler(this),this.setFromQuaternion(qh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ke.DEFAULT_ORDER="XYZ";var Ao=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},ip=0,$h=new I,us=new Oe,ti=new re,Wr=new I,rr=new I,sp=new I,rp=new Oe,Yh=new I(1,0,0),Zh=new I(0,1,0),Jh=new I(0,0,1),Kh={type:"added"},op={type:"removed"},fs={type:"childadded",child:null},Ja={type:"childremoved",child:null},ke=class r extends Ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=Gn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new Ke,n=new Oe,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new se}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ao,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.multiply(us),this}rotateOnWorldAxis(t,e){return us.setFromAxisAngle(t,e),this.quaternion.premultiply(us),this}rotateX(t){return this.rotateOnAxis(Yh,t)}rotateY(t){return this.rotateOnAxis(Zh,t)}rotateZ(t){return this.rotateOnAxis(Jh,t)}translateOnAxis(t,e){return $h.copy(t).applyQuaternion(this.quaternion),this.position.add($h.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yh,t)}translateY(t){return this.translateOnAxis(Zh,t)}translateZ(t){return this.translateOnAxis(Jh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ti.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Wr.copy(t):Wr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),rr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ti.lookAt(rr,Wr,this.up):ti.lookAt(Wr,rr,this.up),this.quaternion.setFromRotationMatrix(ti),i&&(ti.extractRotation(i.matrixWorld),us.setFromRotationMatrix(ti),this.quaternion.premultiply(us.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kh),fs.child=t,this.dispatchEvent(fs),fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),Ja.child=t,this.dispatchEvent(Ja),Ja.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ti.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ti.multiply(t.parent.matrixWorld)),t.applyMatrix4(ti),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kh),fs.child=t,this.dispatchEvent(fs),fs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,t,sp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rr,rp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};ke.DEFAULT_UP=new I(0,1,0);ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ln=new I,ei=new I,Ka=new I,ni=new I,ds=new I,ps=new I,jh=new I,ja=new I,Qa=new I,tl=new I,el=new Te,nl=new Te,il=new Te,bi=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ln.subVectors(t,e),i.cross(Ln);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Ln.subVectors(i,e),ei.subVectors(n,e),Ka.subVectors(t,e);let o=Ln.dot(Ln),a=Ln.dot(ei),l=Ln.dot(Ka),c=ei.dot(ei),h=ei.dot(Ka),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let p=1/u,f=(c*l-a*h)*p,g=(o*h-a*l)*p;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,ni)===null?!1:ni.x>=0&&ni.y>=0&&ni.x+ni.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ni.x),l.addScaledVector(o,ni.y),l.addScaledVector(a,ni.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return el.setScalar(0),nl.setScalar(0),il.setScalar(0),el.fromBufferAttribute(t,e),nl.fromBufferAttribute(t,n),il.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(el,s.x),o.addScaledVector(nl,s.y),o.addScaledVector(il,s.z),o}static isFrontFacing(t,e,n,i){return Ln.subVectors(n,e),ei.subVectors(t,e),Ln.cross(ei).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ln.subVectors(this.c,this.b),ei.subVectors(this.a,this.b),Ln.cross(ei).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ds.subVectors(i,n),ps.subVectors(s,n),ja.subVectors(t,n);let l=ds.dot(ja),c=ps.dot(ja);if(l<=0&&c<=0)return e.copy(n);Qa.subVectors(t,i);let h=ds.dot(Qa),u=ps.dot(Qa);if(h>=0&&u<=h)return e.copy(i);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(ds,o);tl.subVectors(t,s);let f=ds.dot(tl),g=ps.dot(tl);if(g>=0&&f<=g)return e.copy(s);let m=f*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ps,a);let x=h*g-f*u;if(x<=0&&u-h>=0&&f-g>=0)return jh.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(jh,a);let d=1/(x+m+p);return o=m*d,a=p*d,e.copy(n).addScaledVector(ds,o).addScaledVector(ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},lf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yi={h:0,s:0,l:0},Xr={h:0,s:0,l:0};function sl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=be){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,he.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=he.workingColorSpace){return this.r=t,this.g=e,this.b=n,he.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=he.workingColorSpace){if(t=oh(t,1),e=Ge(e,0,1),n=Ge(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=sl(o,s,t+1/3),this.g=sl(o,s,t),this.b=sl(o,s,t-1/3)}return he.toWorkingColorSpace(this,i),this}setStyle(t,e=be){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=be){let n=lf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=oi(t.r),this.g=oi(t.g),this.b=oi(t.b),this}copyLinearToSRGB(t){return this.r=Rs(t.r),this.g=Rs(t.g),this.b=Rs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=be){return he.fromWorkingColorSpace(nn.copy(this),t),Math.round(Ge(nn.r*255,0,255))*65536+Math.round(Ge(nn.g*255,0,255))*256+Math.round(Ge(nn.b*255,0,255))}getHexString(t=be){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=he.workingColorSpace){he.fromWorkingColorSpace(nn.copy(this),e);let n=nn.r,i=nn.g,s=nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=he.workingColorSpace){return he.fromWorkingColorSpace(nn.copy(this),e),t.r=nn.r,t.g=nn.g,t.b=nn.b,t}getStyle(t=be){he.fromWorkingColorSpace(nn.copy(this),t);let e=nn.r,n=nn.g,i=nn.b;return t!==be?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(yi),this.setHSL(yi.h+t,yi.s+e,yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yi),t.getHSL(Xr);let n=xr(yi.h,Xr.h,e),i=xr(yi.s,Xr.s,e),s=xr(yi.l,Xr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},nn=new wt;wt.NAMES=lf;var ap=0,Wn=class extends Ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Gn(),this.name="",this.blending=Ts,this.side=Si,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ml,this.blendDst=bl,this.blendEquation=Wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Uh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ts&&(n.blending=this.blending),this.side!==Si&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ml&&(n.blendSrc=this.blendSrc),this.blendDst!==bl&&(n.blendDst=this.blendDst),this.blendEquation!==Wi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Uh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fe=class extends Wn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.combine=$u,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var He=new I,qr=new tt,ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=oc,this.updateRanges=[],this.gpuType=On,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)qr.fromBufferAttribute(this,e),qr.applyMatrix3(t),this.setXY(e,qr.x,qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix3(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyMatrix4(t),this.setXYZ(e,He.x,He.y,He.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.applyNormalMatrix(t),this.setXYZ(e,He.x,He.y,He.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)He.fromBufferAttribute(this,e),He.transformDirection(t),this.setXYZ(e,He.x,He.y,He.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=zn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=zn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=zn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=zn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==oc&&(t.usage=this.usage),t}};var Ns=class extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ks=class extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var $t=class extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}},lp=0,Sn=new re,rl=new ke,ms=new I,vn=new li,or=new li,Je=new I,oe=class r extends Ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Gn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(af(t)?ks:Ns)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new se().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return rl.lookAt(t),rl.updateMatrix(),this.applyMatrix4(rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new $t(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ci);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(vn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];or.setFromBufferAttribute(a),this.morphTargetsRelative?(Je.addVectors(vn.min,or.min),vn.expandByPoint(Je),Je.addVectors(vn.max,or.max),vn.expandByPoint(Je)):(vn.expandByPoint(or.min),vn.expandByPoint(or.max))}vn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Je.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Je));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Je.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(t,c),Je.add(ms)),i=Math.max(i,n.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,h=new I,u=new I,p=new tt,f=new tt,g=new tt,m=new I,x=new I;function d(C,y,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),p.fromBufferAttribute(s,C),f.fromBufferAttribute(s,y),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(p),g.sub(p);let A=1/(f.x*g.y-g.x*f.y);isFinite(A)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(A),x.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(A),a[C].add(m),a[y].add(m),a[b].add(m),l[C].add(x),l[y].add(x),l[b].add(x))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let C=0,y=_.length;C<y;++C){let b=_[C],A=b.start,z=b.count;for(let N=A,H=A+z;N<H;N+=3)d(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let M=new I,v=new I,T=new I,w=new I;function E(C){T.fromBufferAttribute(i,C),w.copy(T);let y=a[C];M.copy(y),M.sub(T.multiplyScalar(T.dot(y))).normalize(),v.crossVectors(w,y);let A=v.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,A)}for(let C=0,y=_.length;C<y;++C){let b=_[C],A=b.start,z=b.count;for(let N=A,H=A+z;N<H;N+=3)E(t.getX(N+0)),E(t.getX(N+1)),E(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,f=n.count;p<f;p++)n.setXYZ(p,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let p=0,f=t.count;p<f;p+=3){let g=t.getX(p+0),m=t.getX(p+1),x=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,f=e.count;p<f;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),f=0,g=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let d=0;d<h;d++)p[g++]=c[f++]}return new ue(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],f=t(p,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let p=0,f=u.length;p<f;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qh=new re,Fi=new wr,$r=new ci,tu=new I,Yr=new I,Zr=new I,Jr=new I,ol=new I,Kr=new I,eu=new I,jr=new I,K=class extends ke{constructor(t=new oe,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Kr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(ol.fromBufferAttribute(u,t),o?Kr.addScaledVector(ol,h):Kr.addScaledVector(ol.sub(e),h))}e.add(Kr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere),$r.applyMatrix4(s),Fi.copy(t.ray).recast(t.near),!($r.containsPoint(Fi.origin)===!1&&(Fi.intersectSphere($r,tu)===null||Fi.origin.distanceToSquared(tu)>(t.far-t.near)**2))&&(Qh.copy(s).invert(),Fi.copy(t.ray).applyMatrix4(Qh),!(n.boundingBox!==null&&Fi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fi)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=p.length;g<m;g++){let x=p[g],d=o[x.materialIndex],_=Math.max(x.start,f.start),M=Math.min(a.count,Math.min(x.start+x.count,f.start+f.count));for(let v=_,T=M;v<T;v+=3){let w=a.getX(v),E=a.getX(v+1),C=a.getX(v+2);i=Qr(this,d,t,n,c,h,u,w,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let x=g,d=m;x<d;x+=3){let _=a.getX(x),M=a.getX(x+1),v=a.getX(x+2);i=Qr(this,o,t,n,c,h,u,_,M,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=p.length;g<m;g++){let x=p[g],d=o[x.materialIndex],_=Math.max(x.start,f.start),M=Math.min(l.count,Math.min(x.start+x.count,f.start+f.count));for(let v=_,T=M;v<T;v+=3){let w=v,E=v+1,C=v+2;i=Qr(this,d,t,n,c,h,u,w,E,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let x=g,d=m;x<d;x+=3){let _=x,M=x+1,v=x+2;i=Qr(this,o,t,n,c,h,u,_,M,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function cp(r,t,e,n,i,s,o,a){let l;if(t.side===sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Si,a),l===null)return null;jr.copy(a),jr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(jr);return c<e.near||c>e.far?null:{distance:c,point:jr.clone(),object:r}}function Qr(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Yr),r.getVertexPosition(l,Zr),r.getVertexPosition(c,Jr);let h=cp(r,t,e,n,Yr,Zr,Jr,eu);if(h){let u=new I;bi.getBarycoord(eu,Yr,Zr,Jr,u),i&&(h.uv=bi.getInterpolatedAttribute(i,a,l,c,u,new tt)),s&&(h.uv1=bi.getInterpolatedAttribute(s,a,l,c,u,new tt)),o&&(h.normal=bi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new I,materialIndex:0};bi.getNormal(Yr,Zr,Jr,p.normal),h.face=p,h.barycoord=u}return h}var Pt=class r extends oe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new $t(c,3)),this.setAttribute("normal",new $t(h,3)),this.setAttribute("uv",new $t(u,2));function g(m,x,d,_,M,v,T,w,E,C,y){let b=v/E,A=T/C,z=v/2,N=T/2,H=w/2,B=E+1,k=C+1,G=0,O=0,$=new I;for(let Q=0;Q<k;Q++){let P=Q*A-N;for(let ut=0;ut<B;ut++){let nt=ut*b-z;$[m]=nt*_,$[x]=P*M,$[d]=H,c.push($.x,$.y,$.z),$[m]=0,$[x]=0,$[d]=w>0?1:-1,h.push($.x,$.y,$.z),u.push(ut/E),u.push(1-Q/C),G+=1}}for(let Q=0;Q<C;Q++)for(let P=0;P<E;P++){let ut=p+P+B*Q,nt=p+P+B*(Q+1),F=p+(P+1)+B*(Q+1),Z=p+(P+1)+B*Q;l.push(ut,nt,Z),l.push(nt,F,Z),O+=6}a.addGroup(f,O,y),f+=O,p+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Bs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function cn(r){let t={};for(let e=0;e<r.length;e++){let n=Bs(r[e]);for(let i in n)t[i]=n[i]}return t}function hp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function cf(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:he.workingColorSpace}var $n={clone:Bs,merge:cn},up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends Wn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=fp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Bs(t.uniforms),this.uniformsGroups=hp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ro=class extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=ri}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},_i=new I,nu=new tt,iu=new tt,We=class extends Ro{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Us*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Us*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){_i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(_i.x,_i.y).multiplyScalar(-t/_i.z),_i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(_i.x,_i.y).multiplyScalar(-t/_i.z)}getViewSize(t,e){return this.getViewBounds(t,nu,iu),e.subVectors(iu,nu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(gr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},gs=-90,xs=1,hc=class extends ke{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new We(gs,xs,t,e);i.layers=this.layers,this.add(i);let s=new We(gs,xs,t,e);s.layers=this.layers,this.add(s);let o=new We(gs,xs,t,e);o.layers=this.layers,this.add(o);let a=new We(gs,xs,t,e);a.layers=this.layers,this.add(a);let l=new We(gs,xs,t,e);l.layers=this.layers,this.add(l);let c=new We(gs,xs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===ri)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===wo)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,p,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Co=class extends dn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Is,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uc=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Co(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Hn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Pt(5,5,5),s=new xe({name:"CubemapFromEquirect",uniforms:Bs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Vn});s.uniforms.tEquirect.value=e;let o=new K(i,s),a=e.minFilter;return e.minFilter===$i&&(e.minFilter=Hn),new hc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},al=new I,dp=new I,pp=new se,si=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=al.subVectors(n,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(al),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||pp.getNormalMatrix(t),i=this.coplanarPoint(al).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Hi=new ci,to=new I,Er=class{constructor(t=new si,e=new si,n=new si,i=new si,s=new si,o=new si){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ri){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],p=i[7],f=i[8],g=i[9],m=i[10],x=i[11],d=i[12],_=i[13],M=i[14],v=i[15];if(n[0].setComponents(l-s,p-c,x-f,v-d).normalize(),n[1].setComponents(l+s,p+c,x+f,v+d).normalize(),n[2].setComponents(l+o,p+h,x+g,v+_).normalize(),n[3].setComponents(l-o,p-h,x-g,v-_).normalize(),n[4].setComponents(l-a,p-u,x-m,v-M).normalize(),e===ri)n[5].setComponents(l+a,p+u,x+m,v+M).normalize();else if(e===wo)n[5].setComponents(a,u,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hi)}intersectsSprite(t){return Hi.center.set(0,0,0),Hi.radius=.7071067811865476,Hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(to.x=i.normal.x>0?t.max.x:t.min.x,to.y=i.normal.y>0?t.max.y:t.min.y,to.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(to)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hf(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function mp(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let p=0;for(let f=1;f<u.length;f++){let g=u[p],m=u[f];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++p,u[p]=m)}u.length=p+1;for(let f=0,g=u.length;f<g;f++){let m=u[f];r.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Pe=class r extends oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,p=e/l,f=[],g=[],m=[],x=[];for(let d=0;d<h;d++){let _=d*p-o;for(let M=0;M<c;M++){let v=M*u-s;g.push(v,-_,0),m.push(0,0,1),x.push(M/a),x.push(1-d/l)}}for(let d=0;d<l;d++)for(let _=0;_<a;_++){let M=_+c*d,v=_+c*(d+1),T=_+1+c*(d+1),w=_+1+c*d;f.push(M,v,w),f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},gp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xp=`#ifdef USE_ALPHAHASH
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
#endif`,vp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_p=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mp=`#ifdef USE_ALPHATEST
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
#endif`,wp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ep=`#ifdef USE_BATCHING
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
#endif`,Sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Tp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cp=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Op=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Wp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qp="gl_FragColor = linearToOutputTexel( gl_FragColor );",$p=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yp=`#ifdef USE_ENVMAP
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
#endif`,Zp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jp=`#ifdef USE_ENVMAP
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
#endif`,Kp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jp=`#ifdef USE_ENVMAP
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
#endif`,Qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,t0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,e0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,n0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,i0=`#ifdef USE_GRADIENTMAP
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
}`,s0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,r0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,o0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,a0=`uniform bool receiveShadow;
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
#endif`,l0=`#ifdef USE_ENVMAP
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
#endif`,c0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,u0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,f0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,d0=`PhysicalMaterial material;
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
#endif`,p0=`struct PhysicalMaterial {
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
}`,m0=`
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
#endif`,g0=`#if defined( RE_IndirectDiffuse )
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
#endif`,x0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,v0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,M0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,E0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,T0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,R0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,C0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I0=`#ifdef USE_MORPHTARGETS
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
#endif`,z0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,D0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,U0=`#ifndef FLAT_SHADED
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
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,G0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,W0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,X0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,q0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Y0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Z0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,J0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tm=`float getShadowMask() {
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
}`,em=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
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
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
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
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,om=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,am=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
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
#endif`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
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
}`,xm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_m=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
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
}`,wm=`#define DISTANCE
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
}`,Em=`#define DISTANCE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
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
}`,Rm=`uniform vec3 diffuse;
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
}`,Cm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Im=`#define LAMBERT
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
}`,zm=`#define MATCAP
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
}`,Dm=`#define MATCAP
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
}`,Um=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,Fm=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Om=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Gm=`uniform float size;
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
}`,Wm=`uniform vec3 diffuse;
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
}`,Xm=`#include <common>
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
}`,qm=`uniform vec3 color;
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
}`,$m=`uniform float rotation;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,ae={alphahash_fragment:gp,alphahash_pars_fragment:xp,alphamap_fragment:vp,alphamap_pars_fragment:yp,alphatest_fragment:_p,alphatest_pars_fragment:Mp,aomap_fragment:bp,aomap_pars_fragment:wp,batching_pars_vertex:Ep,batching_vertex:Sp,begin_vertex:Tp,beginnormal_vertex:Ap,bsdfs:Rp,iridescence_fragment:Cp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Ip,clipping_planes_pars_fragment:Lp,clipping_planes_pars_vertex:zp,clipping_planes_vertex:Dp,color_fragment:Up,color_pars_fragment:Np,color_pars_vertex:kp,color_vertex:Bp,common:Fp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Op,displacementmap_pars_vertex:Vp,displacementmap_vertex:Gp,emissivemap_fragment:Wp,emissivemap_pars_fragment:Xp,colorspace_fragment:qp,colorspace_pars_fragment:$p,envmap_fragment:Yp,envmap_common_pars_fragment:Zp,envmap_pars_fragment:Jp,envmap_pars_vertex:Kp,envmap_physical_pars_fragment:l0,envmap_vertex:jp,fog_vertex:Qp,fog_pars_vertex:t0,fog_fragment:e0,fog_pars_fragment:n0,gradientmap_pars_fragment:i0,lightmap_pars_fragment:s0,lights_lambert_fragment:r0,lights_lambert_pars_fragment:o0,lights_pars_begin:a0,lights_toon_fragment:c0,lights_toon_pars_fragment:h0,lights_phong_fragment:u0,lights_phong_pars_fragment:f0,lights_physical_fragment:d0,lights_physical_pars_fragment:p0,lights_fragment_begin:m0,lights_fragment_maps:g0,lights_fragment_end:x0,logdepthbuf_fragment:v0,logdepthbuf_pars_fragment:y0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:M0,map_fragment:b0,map_pars_fragment:w0,map_particle_fragment:E0,map_particle_pars_fragment:S0,metalnessmap_fragment:T0,metalnessmap_pars_fragment:A0,morphinstance_vertex:R0,morphcolor_vertex:C0,morphnormal_vertex:P0,morphtarget_pars_vertex:I0,morphtarget_vertex:L0,normal_fragment_begin:z0,normal_fragment_maps:D0,normal_pars_fragment:U0,normal_pars_vertex:N0,normal_vertex:k0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:O0,iridescence_pars_fragment:V0,opaque_fragment:G0,packing:W0,premultiplied_alpha_fragment:X0,project_vertex:q0,dithering_fragment:$0,dithering_pars_fragment:Y0,roughnessmap_fragment:Z0,roughnessmap_pars_fragment:J0,shadowmap_pars_fragment:K0,shadowmap_pars_vertex:j0,shadowmap_vertex:Q0,shadowmask_pars_fragment:tm,skinbase_vertex:em,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:om,tonemapping_fragment:am,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:fm,uv_vertex:dm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:xm,backgroundCube_frag:vm,cube_vert:ym,cube_frag:_m,depth_vert:Mm,depth_frag:bm,distanceRGBA_vert:wm,distanceRGBA_frag:Em,equirect_vert:Sm,equirect_frag:Tm,linedashed_vert:Am,linedashed_frag:Rm,meshbasic_vert:Cm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Lm,meshmatcap_vert:zm,meshmatcap_frag:Dm,meshnormal_vert:Um,meshnormal_frag:Nm,meshphong_vert:km,meshphong_frag:Bm,meshphysical_vert:Fm,meshphysical_frag:Hm,meshtoon_vert:Om,meshtoon_frag:Vm,points_vert:Gm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:$m,sprite_frag:Ym},Tt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new se}},envmap:{envMap:{value:null},envMapRotation:{value:new se},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new se}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new se}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new se},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new se},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new se},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new se}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new se}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new se}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0},uvTransform:{value:new se}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new se},alphaMap:{value:null},alphaMapTransform:{value:new se},alphaTest:{value:0}}},Fn={basic:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:ae.meshbasic_vert,fragmentShader:ae.meshbasic_frag},lambert:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)}}]),vertexShader:ae.meshlambert_vert,fragmentShader:ae.meshlambert_frag},phong:{uniforms:cn([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:ae.meshphong_vert,fragmentShader:ae.meshphong_frag},standard:{uniforms:cn([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag},toon:{uniforms:cn([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new wt(0)}}]),vertexShader:ae.meshtoon_vert,fragmentShader:ae.meshtoon_frag},matcap:{uniforms:cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:ae.meshmatcap_vert,fragmentShader:ae.meshmatcap_frag},points:{uniforms:cn([Tt.points,Tt.fog]),vertexShader:ae.points_vert,fragmentShader:ae.points_frag},dashed:{uniforms:cn([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ae.linedashed_vert,fragmentShader:ae.linedashed_frag},depth:{uniforms:cn([Tt.common,Tt.displacementmap]),vertexShader:ae.depth_vert,fragmentShader:ae.depth_frag},normal:{uniforms:cn([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:ae.meshnormal_vert,fragmentShader:ae.meshnormal_frag},sprite:{uniforms:cn([Tt.sprite,Tt.fog]),vertexShader:ae.sprite_vert,fragmentShader:ae.sprite_frag},background:{uniforms:{uvTransform:{value:new se},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ae.background_vert,fragmentShader:ae.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new se}},vertexShader:ae.backgroundCube_vert,fragmentShader:ae.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ae.cube_vert,fragmentShader:ae.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ae.equirect_vert,fragmentShader:ae.equirect_frag},distanceRGBA:{uniforms:cn([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ae.distanceRGBA_vert,fragmentShader:ae.distanceRGBA_frag},shadow:{uniforms:cn([Tt.lights,Tt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:ae.shadow_vert,fragmentShader:ae.shadow_frag}};Fn.physical={uniforms:cn([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new se},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new se},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new se},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new se},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new se},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new se},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new se},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new se},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new se},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new se},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new se},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new se}}]),vertexShader:ae.meshphysical_vert,fragmentShader:ae.meshphysical_frag};var eo={r:0,b:0,g:0},Oi=new Ke,Zm=new re;function Jm(r,t,e,n,i,s,o){let a=new wt(0),l=s===!0?0:1,c,h,u=null,p=0,f=null;function g(_){let M=_.isScene===!0?_.background:null;return M&&M.isTexture&&(M=(_.backgroundBlurriness>0?e:t).get(M)),M}function m(_){let M=!1,v=g(_);v===null?d(a,l):v&&v.isColor&&(d(v,1),M=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(_,M){let v=g(M);v&&(v.isCubeTexture||v.mapping===Jo)?(h===void 0&&(h=new K(new Pt(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Bs(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Oi.copy(M.backgroundRotation),Oi.x*=-1,Oi.y*=-1,Oi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Oi.y*=-1,Oi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Zm.makeRotationFromEuler(Oi)),h.material.toneMapped=he.getTransfer(v.colorSpace)!==Me,(u!==v||p!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new K(new Pe(2,2),new xe({name:"BackgroundMaterial",uniforms:Bs(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Si,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=he.getTransfer(v.colorSpace)!==Me,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,M){_.getRGB(eo,cf(r)),n.buffers.color.setClear(eo.r,eo.g,eo.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(_,M=1){a.set(_),l=M,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:m,addToRenderList:x}}function Km(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null),s=i,o=!1;function a(b,A,z,N,H){let B=!1,k=u(N,z,A);s!==k&&(s=k,c(s.object)),B=f(b,N,z,H),B&&g(b,N,z,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,v(b,A,z,N),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,A,z){let N=z.wireframe===!0,H=n[b.id];H===void 0&&(H={},n[b.id]=H);let B=H[A.id];B===void 0&&(B={},H[A.id]=B);let k=B[N];return k===void 0&&(k=p(l()),B[N]=k),k}function p(b){let A=[],z=[],N=[];for(let H=0;H<e;H++)A[H]=0,z[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:N,object:b,attributes:{},index:null}}function f(b,A,z,N){let H=s.attributes,B=A.attributes,k=0,G=z.getAttributes();for(let O in G)if(G[O].location>=0){let Q=H[O],P=B[O];if(P===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(P=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(P=b.instanceColor)),Q===void 0||Q.attribute!==P||P&&Q.data!==P.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function g(b,A,z,N){let H={},B=A.attributes,k=0,G=z.getAttributes();for(let O in G)if(G[O].location>=0){let Q=B[O];Q===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));let P={};P.attribute=Q,Q&&Q.data&&(P.data=Q.data),H[O]=P,k++}s.attributes=H,s.attributesNum=k,s.index=N}function m(){let b=s.newAttributes;for(let A=0,z=b.length;A<z;A++)b[A]=0}function x(b){d(b,0)}function d(b,A){let z=s.newAttributes,N=s.enabledAttributes,H=s.attributeDivisors;z[b]=1,N[b]===0&&(r.enableVertexAttribArray(b),N[b]=1),H[b]!==A&&(r.vertexAttribDivisor(b,A),H[b]=A)}function _(){let b=s.newAttributes,A=s.enabledAttributes;for(let z=0,N=A.length;z<N;z++)A[z]!==b[z]&&(r.disableVertexAttribArray(z),A[z]=0)}function M(b,A,z,N,H,B,k){k===!0?r.vertexAttribIPointer(b,A,z,H,B):r.vertexAttribPointer(b,A,z,N,H,B)}function v(b,A,z,N){m();let H=N.attributes,B=z.getAttributes(),k=A.defaultAttributeValues;for(let G in B){let O=B[G];if(O.location>=0){let $=H[G];if($===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){let Q=$.normalized,P=$.itemSize,ut=t.get($);if(ut===void 0)continue;let nt=ut.buffer,F=ut.type,Z=ut.bytesPerElement,rt=F===r.INT||F===r.UNSIGNED_INT||$.gpuType===Qc;if($.isInterleavedBufferAttribute){let st=$.data,dt=st.stride,It=$.offset;if(st.isInstancedInterleavedBuffer){for(let Lt=0;Lt<O.locationSize;Lt++)d(O.location+Lt,st.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Lt=0;Lt<O.locationSize;Lt++)x(O.location+Lt);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let Lt=0;Lt<O.locationSize;Lt++)M(O.location+Lt,P/O.locationSize,F,Q,dt*Z,(It+P/O.locationSize*Lt)*Z,rt)}else{if($.isInstancedBufferAttribute){for(let st=0;st<O.locationSize;st++)d(O.location+st,$.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<O.locationSize;st++)x(O.location+st);r.bindBuffer(r.ARRAY_BUFFER,nt);for(let st=0;st<O.locationSize;st++)M(O.location+st,P/O.locationSize,F,Q,P*Z,P/O.locationSize*st*Z,rt)}}else if(k!==void 0){let Q=k[G];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(O.location,Q);break;case 3:r.vertexAttrib3fv(O.location,Q);break;case 4:r.vertexAttrib4fv(O.location,Q);break;default:r.vertexAttrib1fv(O.location,Q)}}}}_()}function T(){C();for(let b in n){let A=n[b];for(let z in A){let N=A[z];for(let H in N)h(N[H].object),delete N[H];delete A[z]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let A=n[b.id];for(let z in A){let N=A[z];for(let H in N)h(N[H].object),delete N[H];delete A[z]}delete n[b.id]}function E(b){for(let A in n){let z=n[A];if(z[b.id]===void 0)continue;let N=z[b.id];for(let H in N)h(N[H].object),delete N[H];delete z[b.id]}}function C(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:y,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:m,enableAttribute:x,disableUnusedAttributes:_}}function jm(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,p){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m]*p[m];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Qm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Dn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==ai&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==On&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),d=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:f,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:d,maxVertexUniforms:_,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:T,maxSamples:w}}function tg(r){let t=this,e=null,n=0,i=!1,s=!1,o=new si,a=new se,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let f=u.length!==0||p||n!==0||i;return i=p,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,f){let g=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,d=r.get(u);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{let _=s?0:n,M=_*4,v=d.clippingState||null;l.value=v,v=h(g,p,M,f);for(let T=0;T!==M;++T)v[T]=e[T];d.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,f,g){let m=u!==null?u.length:0,x=null;if(m!==0){if(x=l.value,g!==!0||x===null){let d=f+m*4,_=p.matrixWorldInverse;a.getNormalMatrix(_),(x===null||x.length<d)&&(x=new Float32Array(d));for(let M=0,v=f;M!==m;++M,v+=4)o.copy(u[M]).applyMatrix4(_,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}function eg(r){let t=new WeakMap;function e(o,a){return a===Pl?o.mapping=Is:a===Il&&(o.mapping=Ls),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Pl||a===Il)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new uc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Fs=class extends Ro{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Es=4,su=[.125,.215,.35,.446,.526,.582],Xi=20,ll=new Fs,ru=new wt,cl=null,hl=0,ul=0,fl=!1,Gi=(1+Math.sqrt(5))/2,vs=1/Gi,ou=[new I(-Gi,vs,0),new I(Gi,vs,0),new I(-vs,0,Gi),new I(vs,0,Gi),new I(0,Gi,-vs),new I(0,Gi,vs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Hs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(cl,hl,ul),this._renderer.xr.enabled=fl,t.scissorTest=!1,no(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Is||t.mapping===Ls?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),cl=this._renderer.getRenderTarget(),hl=this._renderer.getActiveCubeFace(),ul=this._renderer.getActiveMipmapLevel(),fl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Hn,minFilter:Hn,generateMipmaps:!1,type:Mn,format:Dn,colorSpace:qs,depthBuffer:!1},i=au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=au(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ng(s)),this._blurMaterial=ig(s,t,e)}return i}_compileMaterial(t){let e=new K(this._lodPlanes[0],t);this._renderer.compile(e,ll)}_sceneToCubeUV(t,e,n,i){let a=new We(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(ru),h.toneMapping=wi,h.autoClear=!1;let f=new fe({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new K(new Pt,f),m=!1,x=t.background;x?x.isColor&&(f.color.copy(x),t.background=null,m=!0):(f.color.copy(ru),m=!0);for(let d=0;d<6;d++){let _=d%3;_===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):_===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));let M=this._cubeSize;no(i,_*M,d>2?M:0,M,M),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Is||t.mapping===Ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lu());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new K(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;no(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,ll)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ou[(i-s-1)%ou.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new K(this._lodPlanes[i],c),p=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),m=s/g,x=isFinite(s)?1+Math.floor(h*m):Xi;x>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Xi}`);let d=[],_=0;for(let E=0;E<Xi;++E){let C=E/m,y=Math.exp(-C*C/2);d.push(y),E===0?_+=y:E<x&&(_+=2*y)}for(let E=0;E<d.length;E++)d[E]=d[E]/_;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=d,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:M}=this;p.dTheta.value=g,p.mipInt.value=M-n;let v=this._sizeLods[i],T=3*v*(i>M-Es?i-M+Es:0),w=4*(this._cubeSize-v);no(e,T,w,3*v,2*v),l.setRenderTarget(e),l.render(u,ll)}};function ng(r){let t=[],e=[],n=[],i=r,s=r-Es+1+su.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Es?l=su[o-r+Es-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,m=3,x=2,d=1,_=new Float32Array(m*g*f),M=new Float32Array(x*g*f),v=new Float32Array(d*g*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,C=w>2?0:-1,y=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];_.set(y,m*g*w),M.set(p,x*g*w);let b=[w,w,w,w,w,w];v.set(b,d*g*w)}let T=new oe;T.setAttribute("position",new ue(_,m)),T.setAttribute("uv",new ue(M,x)),T.setAttribute("faceIndex",new ue(v,d)),t.push(T),i>Es&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function au(r,t,e){let n=new je(r,t,e);return n.texture.mapping=Jo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function no(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function ig(r,t,e){let n=new Float32Array(Xi),i=new I(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function lu(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function cu(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

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
	`}function sg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Pl||l===Il,h=l===Is||l===Ls;if(c||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Hs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Hs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function rg(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function og(r,t,e,n){let i={},s=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let m=p.morphAttributes[g];for(let x=0,d=m.length;x<d;x++)t.remove(m[x])}p.removeEventListener("dispose",o),delete i[p.id];let f=s.get(p);f&&(t.remove(f),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let g in p)t.update(p[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let m=f[g];for(let x=0,d=m.length;x<d;x++)t.update(m[x],r.ARRAY_BUFFER)}}function c(u){let p=[],f=u.index,g=u.attributes.position,m=0;if(f!==null){let _=f.array;m=f.version;for(let M=0,v=_.length;M<v;M+=3){let T=_[M+0],w=_[M+1],E=_[M+2];p.push(T,w,w,E,E,T)}}else if(g!==void 0){let _=g.array;m=g.version;for(let M=0,v=_.length/3-1;M<v;M+=3){let T=M+0,w=M+1,E=M+2;p.push(T,w,w,E,E,T)}}else return;let x=new(af(p)?ks:Ns)(p,1);x.version=m;let d=s.get(u);d&&t.remove(d),s.set(u,x)}function h(u){let p=s.get(u);if(p){let f=u.index;f!==null&&p.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ag(r,t,e){let n;function i(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,f){r.drawElements(n,f,s,p*o),e.update(f,n,1)}function c(p,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,p*o,g),e.update(f,n,g))}function h(p,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,p,0,g);let x=0;for(let d=0;d<g;d++)x+=f[d];e.update(x,n,1)}function u(p,f,g,m){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let d=0;d<p.length;d++)c(p[d]/o,f[d],m[d]);else{x.multiDrawElementsInstancedWEBGL(n,f,0,s,p,0,m,0,g);let d=0;for(let _=0;_<g;_++)d+=f[_]*m[_];e.update(d,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function lg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function cg(r,t,e){let n=new WeakMap,i=new Te;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};p!==void 0&&p.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],_=a.morphAttributes.color||[],M=0;f===!0&&(M=1),g===!0&&(M=2),m===!0&&(M=3);let v=a.attributes.position.count*M,T=1;v>t.maxTextureSize&&(T=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*T*4*u),E=new To(w,v,T,u);E.type=On,E.needsUpdate=!0;let C=M*4;for(let b=0;b<u;b++){let A=x[b],z=d[b],N=_[b],H=v*T*4*b;for(let B=0;B<A.count;B++){let k=B*C;f===!0&&(i.fromBufferAttribute(A,B),w[H+k+0]=i.x,w[H+k+1]=i.y,w[H+k+2]=i.z,w[H+k+3]=0),g===!0&&(i.fromBufferAttribute(z,B),w[H+k+4]=i.x,w[H+k+5]=i.y,w[H+k+6]=i.z,w[H+k+7]=0),m===!0&&(i.fromBufferAttribute(N,B),w[H+k+8]=i.x,w[H+k+9]=i.y,w[H+k+10]=i.z,w[H+k+11]=N.itemSize===4?i.w:1)}}p={count:u,texture:E,size:new tt(v,T)},n.set(a,p),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let g=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function hg(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Po=class extends dn{constructor(t,e,n,i,s,o,a,l,c,h=As){if(h!==As&&h!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===As&&(n=Yi),n===void 0&&h===Ds&&(n=zs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:yn,this.minFilter=l!==void 0?l:yn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},uf=new dn,hu=new Po(1,1),ff=new To,df=new cc,pf=new Co,uu=[],fu=[],du=new Float32Array(16),pu=new Float32Array(9),mu=new Float32Array(4);function Ys(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=uu[i];if(s===void 0&&(s=new Float32Array(i),uu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Xe(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function qe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function jo(r,t){let e=fu[t];e===void 0&&(e=new Int32Array(t),fu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function ug(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2fv(this.addr,t),qe(e,t)}}function dg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Xe(e,t))return;r.uniform3fv(this.addr,t),qe(e,t)}}function pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4fv(this.addr,t),qe(e,t)}}function mg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;mu.set(n),r.uniformMatrix2fv(this.addr,!1,mu),qe(e,n)}}function gg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;pu.set(n),r.uniformMatrix3fv(this.addr,!1,pu),qe(e,n)}}function xg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Xe(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(Xe(e,n))return;du.set(n),r.uniformMatrix4fv(this.addr,!1,du),qe(e,n)}}function vg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function yg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2iv(this.addr,t),qe(e,t)}}function _g(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;r.uniform3iv(this.addr,t),qe(e,t)}}function Mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4iv(this.addr,t),qe(e,t)}}function bg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Xe(e,t))return;r.uniform2uiv(this.addr,t),qe(e,t)}}function Eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Xe(e,t))return;r.uniform3uiv(this.addr,t),qe(e,t)}}function Sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Xe(e,t))return;r.uniform4uiv(this.addr,t),qe(e,t)}}function Tg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hu.compareFunction=of,s=hu):s=uf,e.setTexture2D(t||s,i)}function Ag(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||df,i)}function Rg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||pf,i)}function Cg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ff,i)}function Pg(r){switch(r){case 5126:return ug;case 35664:return fg;case 35665:return dg;case 35666:return pg;case 35674:return mg;case 35675:return gg;case 35676:return xg;case 5124:case 35670:return vg;case 35667:case 35671:return yg;case 35668:case 35672:return _g;case 35669:case 35673:return Mg;case 5125:return bg;case 36294:return wg;case 36295:return Eg;case 36296:return Sg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return Ag;case 35680:case 36300:case 36308:case 36293:return Rg;case 36289:case 36303:case 36311:case 36292:return Cg}}function Ig(r,t){r.uniform1fv(this.addr,t)}function Lg(r,t){let e=Ys(t,this.size,2);r.uniform2fv(this.addr,e)}function zg(r,t){let e=Ys(t,this.size,3);r.uniform3fv(this.addr,e)}function Dg(r,t){let e=Ys(t,this.size,4);r.uniform4fv(this.addr,e)}function Ug(r,t){let e=Ys(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ng(r,t){let e=Ys(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function kg(r,t){let e=Ys(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Bg(r,t){r.uniform1iv(this.addr,t)}function Fg(r,t){r.uniform2iv(this.addr,t)}function Hg(r,t){r.uniform3iv(this.addr,t)}function Og(r,t){r.uniform4iv(this.addr,t)}function Vg(r,t){r.uniform1uiv(this.addr,t)}function Gg(r,t){r.uniform2uiv(this.addr,t)}function Wg(r,t){r.uniform3uiv(this.addr,t)}function Xg(r,t){r.uniform4uiv(this.addr,t)}function qg(r,t,e){let n=this.cache,i=t.length,s=jo(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||uf,s[o])}function $g(r,t,e){let n=this.cache,i=t.length,s=jo(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||df,s[o])}function Yg(r,t,e){let n=this.cache,i=t.length,s=jo(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||pf,s[o])}function Zg(r,t,e){let n=this.cache,i=t.length,s=jo(e,i);Xe(n,s)||(r.uniform1iv(this.addr,s),qe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ff,s[o])}function Jg(r){switch(r){case 5126:return Ig;case 35664:return Lg;case 35665:return zg;case 35666:return Dg;case 35674:return Ug;case 35675:return Ng;case 35676:return kg;case 5124:case 35670:return Bg;case 35667:case 35671:return Fg;case 35668:case 35672:return Hg;case 35669:case 35673:return Og;case 5125:return Vg;case 36294:return Gg;case 36295:return Wg;case 36296:return Xg;case 35678:case 36198:case 36298:case 36306:case 35682:return qg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return Yg;case 36289:case 36303:case 36311:case 36292:return Zg}}var fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pg(e.type)}},dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Jg(e.type)}},pc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},dl=/(\w+)(\])?(\[|\.)?/g;function gu(r,t){r.seq.push(t),r.map[t.id]=t}function Kg(r,t,e){let n=r.name,i=n.length;for(dl.lastIndex=0;;){let s=dl.exec(n),o=dl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){gu(e,c===void 0?new fc(a,r,t):new dc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new pc(a),gu(e,u)),e=u}}}var Cs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Kg(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function xu(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var jg=37297,Qg=0;function tx(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vu=new se;function ex(r){he._getMatrix(vu,he.workingColorSpace,r);let t=`mat3( ${vu.elements.map(e=>e.toFixed(4))} )`;switch(he.getTransfer(r)){case Ko:return[t,"LinearTransferOETF"];case Me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function yu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+tx(r.getShaderSource(t),o)}else return i}function nx(r,t){let e=ex(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ix(r,t){let e;switch(t){case Yc:e="Linear";break;case Zc:e="Reinhard";break;case Jc:e="Cineon";break;case zr:e="ACESFilmic";break;case Kc:e="AgX";break;case jc:e="Neutral";break;case _d:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var io=new I;function sx(){he.getLuminanceCoefficients(io);let r=io.x.toFixed(4),t=io.y.toFixed(4),e=io.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rx(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function ox(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function ax(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function mr(r){return r!==""}function _u(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var lx=/^[ \t]*#include +<([\w\d./]+)>/gm;function mc(r){return r.replace(lx,hx)}var cx=new Map;function hx(r,t){let e=ae[t];if(e===void 0){let n=cx.get(t);if(n!==void 0)e=ae[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return mc(e)}var ux=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bu(r){return r.replace(ux,fx)}function fx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function wu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function dx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===qu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===$c?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ii&&(t="SHADOWMAP_TYPE_VSM"),t}function px(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Is:case Ls:t="ENVMAP_TYPE_CUBE";break;case Jo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function mx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ls:t="ENVMAP_MODE_REFRACTION";break}return t}function gx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $u:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case yd:t="ENVMAP_BLENDING_ADD";break}return t}function xx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function vx(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=dx(e),c=px(e),h=mx(e),u=gx(e),p=xx(e),f=rx(e),g=ox(s),m=i.createProgram(),x,d,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),x.length>0&&(x+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),d.length>0&&(d+=`
`)):(x=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),d=[wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wi?"#define TONE_MAPPING":"",e.toneMapping!==wi?ae.tonemapping_pars_fragment:"",e.toneMapping!==wi?ix("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ae.colorspace_pars_fragment,nx("linearToOutputTexel",e.outputColorSpace),sx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),o=mc(o),o=_u(o,e),o=Mu(o,e),a=mc(a),a=_u(a,e),a=Mu(a,e),o=bu(o),a=bu(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,x=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,d=["#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let M=_+x+o,v=_+d+a,T=xu(i,i.VERTEX_SHADER,M),w=xu(i,i.FRAGMENT_SHADER,v);i.attachShader(m,T),i.attachShader(m,w),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function E(A){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(m).trim(),N=i.getShaderInfoLog(T).trim(),H=i.getShaderInfoLog(w).trim(),B=!0,k=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,w);else{let G=yu(i,T,"vertex"),O=yu(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+G+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||H==="")&&(k=!1);k&&(A.diagnostics={runnable:B,programLog:z,vertexShader:{log:N,prefix:x},fragmentShader:{log:H,prefix:d}})}i.deleteShader(T),i.deleteShader(w),C=new Cs(i,m),y=ax(i,m)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(m,jg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Qg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=w,this}var yx=0,gc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new xc(t),e.set(t,n)),n}},xc=class{constructor(t){this.id=yx++,this.code=t,this.usedTimes=0}};function _x(r,t,e,n,i,s,o){let a=new Ao,l=new gc,c=new Set,h=[],u=i.logarithmicDepthBuffer,p=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function x(y,b,A,z,N){let H=z.fog,B=N.geometry,k=y.isMeshStandardMaterial?z.environment:null,G=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),O=G&&G.mapping===Jo?G.image.height:null,$=g[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,P=Q!==void 0?Q.length:0,ut=0;B.morphAttributes.position!==void 0&&(ut=1),B.morphAttributes.normal!==void 0&&(ut=2),B.morphAttributes.color!==void 0&&(ut=3);let nt,F,Z,rt;if($){let ge=Fn[$];nt=ge.vertexShader,F=ge.fragmentShader}else nt=y.vertexShader,F=y.fragmentShader,l.update(y),Z=l.getVertexShaderID(y),rt=l.getFragmentShaderID(y);let st=r.getRenderTarget(),dt=r.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,Lt=N.isBatchedMesh===!0,jt=!!y.map,at=!!y.matcap,mt=!!G,U=!!y.aoMap,Ot=!!y.lightMap,pt=!!y.bumpMap,Nt=!!y.normalMap,_t=!!y.displacementMap,Jt=!!y.emissiveMap,Ct=!!y.metalnessMap,L=!!y.roughnessMap,S=y.anisotropy>0,Y=y.clearcoat>0,it=y.dispersion>0,ht=y.iridescence>0,ot=y.sheen>0,Ft=y.transmission>0,Et=S&&!!y.anisotropyMap,zt=Y&&!!y.clearcoatMap,le=Y&&!!y.clearcoatNormalMap,vt=Y&&!!y.clearcoatRoughnessMap,Bt=ht&&!!y.iridescenceMap,Yt=ht&&!!y.iridescenceThicknessMap,te=ot&&!!y.sheenColorMap,Ut=ot&&!!y.sheenRoughnessMap,ce=!!y.specularMap,ne=!!y.specularColorMap,we=!!y.specularIntensityMap,V=Ft&&!!y.transmissionMap,At=Ft&&!!y.thicknessMap,et=!!y.gradientMap,lt=!!y.alphaMap,Rt=y.alphaTest>0,St=!!y.alphaHash,Kt=!!y.extensions,Re=wi;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Re=r.toneMapping);let Ye={shaderID:$,shaderType:y.type,shaderName:y.name,vertexShader:nt,fragmentShader:F,defines:y.defines,customVertexShaderID:Z,customFragmentShaderID:rt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Lt,batchingColor:Lt&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qs,alphaToCoverage:!!y.alphaToCoverage,map:jt,matcap:at,envMap:mt,envMapMode:mt&&G.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:Ot,bumpMap:pt,normalMap:Nt,displacementMap:p&&_t,emissiveMap:Jt,normalMapObjectSpace:Nt&&y.normalMapType===Ed,normalMapTangentSpace:Nt&&y.normalMapType===rf,metalnessMap:Ct,roughnessMap:L,anisotropy:S,anisotropyMap:Et,clearcoat:Y,clearcoatMap:zt,clearcoatNormalMap:le,clearcoatRoughnessMap:vt,dispersion:it,iridescence:ht,iridescenceMap:Bt,iridescenceThicknessMap:Yt,sheen:ot,sheenColorMap:te,sheenRoughnessMap:Ut,specularMap:ce,specularColorMap:ne,specularIntensityMap:we,transmission:Ft,transmissionMap:V,thicknessMap:At,gradientMap:et,opaque:y.transparent===!1&&y.blending===Ts&&y.alphaToCoverage===!1,alphaMap:lt,alphaTest:Rt,alphaHash:St,combine:y.combine,mapUv:jt&&m(y.map.channel),aoMapUv:U&&m(y.aoMap.channel),lightMapUv:Ot&&m(y.lightMap.channel),bumpMapUv:pt&&m(y.bumpMap.channel),normalMapUv:Nt&&m(y.normalMap.channel),displacementMapUv:_t&&m(y.displacementMap.channel),emissiveMapUv:Jt&&m(y.emissiveMap.channel),metalnessMapUv:Ct&&m(y.metalnessMap.channel),roughnessMapUv:L&&m(y.roughnessMap.channel),anisotropyMapUv:Et&&m(y.anisotropyMap.channel),clearcoatMapUv:zt&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:le&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:te&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ut&&m(y.sheenRoughnessMap.channel),specularMapUv:ce&&m(y.specularMap.channel),specularColorMapUv:ne&&m(y.specularColorMap.channel),specularIntensityMapUv:we&&m(y.specularIntensityMap.channel),transmissionMapUv:V&&m(y.transmissionMap.channel),thicknessMapUv:At&&m(y.thicknessMap.channel),alphaMapUv:lt&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Nt||S),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(jt||lt),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:dt,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:P,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:Re,decodeVideoTexture:jt&&y.map.isVideoTexture===!0&&he.getTransfer(y.map.colorSpace)===Me,decodeVideoTextureEmissive:Jt&&y.emissiveMap.isVideoTexture===!0&&he.getTransfer(y.emissiveMap.colorSpace)===Me,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ae,flipSided:y.side===sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Kt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Kt&&y.extensions.multiDraw===!0||Lt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function d(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let A in y.defines)b.push(A),b.push(y.defines[A]);return y.isRawShaderMaterial===!1&&(_(b,y),M(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function _(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function M(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let b=g[y.type],A;if(b){let z=Fn[b];A=$n.clone(z.uniforms)}else A=y.uniforms;return A}function T(y,b){let A;for(let z=0,N=h.length;z<N;z++){let H=h[z];if(H.cacheKey===b){A=H,++A.usedTimes;break}}return A===void 0&&(A=new vx(r,b,y,s),h.push(A)),A}function w(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function C(){l.dispose()}return{getParameters:x,getProgramCacheKey:d,getUniforms:v,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function Mx(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function bx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Eu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Su(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,p,f,g,m,x){let d=r[t];return d===void 0?(d={id:u.id,object:u,geometry:p,material:f,groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},r[t]=d):(d.id=u.id,d.object=u,d.geometry=p,d.material=f,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=m,d.group=x),t++,d}function a(u,p,f,g,m,x){let d=o(u,p,f,g,m,x);f.transmission>0?n.push(d):f.transparent===!0?i.push(d):e.push(d)}function l(u,p,f,g,m,x){let d=o(u,p,f,g,m,x);f.transmission>0?n.unshift(d):f.transparent===!0?i.unshift(d):e.unshift(d)}function c(u,p){e.length>1&&e.sort(u||bx),n.length>1&&n.sort(p||Eu),i.length>1&&i.sort(p||Eu)}function h(){for(let u=t,p=r.length;u<p;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function wx(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Su,r.set(n,[o])):i>=s.length?(o=new Su,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Ex(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new wt};break;case"SpotLight":e={position:new I,direction:new I,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Sx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Tx=0;function Ax(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Rx(r){let t=new Ex,e=Sx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new re,o=new re;function a(c){let h=0,u=0,p=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,g=0,m=0,x=0,d=0,_=0,M=0,v=0,T=0,w=0,E=0;c.sort(Ax);for(let y=0,b=c.length;y<b;y++){let A=c[y],z=A.color,N=A.intensity,H=A.distance,B=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*N,u+=z.g*N,p+=z.b*N;else if(A.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(A.sh.coefficients[k],N);E++}else if(A.isDirectionalLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let G=A.shadow,O=e.get(A);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.directionalShadow[f]=O,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=A.shadow.matrix,_++}n.directional[f]=k,f++}else if(A.isSpotLight){let k=t.get(A);k.position.setFromMatrixPosition(A.matrixWorld),k.color.copy(z).multiplyScalar(N),k.distance=H,k.coneCos=Math.cos(A.angle),k.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),k.decay=A.decay,n.spot[m]=k;let G=A.shadow;if(A.map&&(n.spotLightMap[T]=A.map,T++,G.updateMatrices(A),A.castShadow&&w++),n.spotLightMatrix[m]=G.matrix,A.castShadow){let O=e.get(A);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,n.spotShadow[m]=O,n.spotShadowMap[m]=B,v++}m++}else if(A.isRectAreaLight){let k=t.get(A);k.color.copy(z).multiplyScalar(N),k.halfWidth.set(A.width*.5,0,0),k.halfHeight.set(0,A.height*.5,0),n.rectArea[x]=k,x++}else if(A.isPointLight){let k=t.get(A);if(k.color.copy(A.color).multiplyScalar(A.intensity),k.distance=A.distance,k.decay=A.decay,A.castShadow){let G=A.shadow,O=e.get(A);O.shadowIntensity=G.intensity,O.shadowBias=G.bias,O.shadowNormalBias=G.normalBias,O.shadowRadius=G.radius,O.shadowMapSize=G.mapSize,O.shadowCameraNear=G.camera.near,O.shadowCameraFar=G.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=A.shadow.matrix,M++}n.point[g]=k,g++}else if(A.isHemisphereLight){let k=t.get(A);k.skyColor.copy(A.color).multiplyScalar(N),k.groundColor.copy(A.groundColor).multiplyScalar(N),n.hemi[d]=k,d++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==m||C.rectAreaLength!==x||C.hemiLength!==d||C.numDirectionalShadows!==_||C.numPointShadows!==M||C.numSpotShadows!==v||C.numSpotMaps!==T||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=g,C.spotLength=m,C.rectAreaLength=x,C.hemiLength=d,C.numDirectionalShadows=_,C.numPointShadows=M,C.numSpotShadows=v,C.numSpotMaps=T,C.numLightProbes=E,n.version=Tx++)}function l(c,h){let u=0,p=0,f=0,g=0,m=0,x=h.matrixWorldInverse;for(let d=0,_=c.length;d<_;d++){let M=c[d];if(M.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),u++}else if(M.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),f++}else if(M.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(M.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(x),p++}else if(M.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function Tu(r){let t=new Rx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Cx(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Tu(r),t.set(i,[a])):s>=o.length?(a=new Tu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var vc=class extends Wn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=bd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},yc=class extends Wn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ix=`uniform sampler2D shadow_pass;
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
}`;function Lx(r,t,e){let n=new Er,i=new tt,s=new tt,o=new Te,a=new vc({depthPacking:wd}),l=new yc,c={},h=e.maxTextureSize,u={[Si]:sn,[sn]:Si,[Ae]:Ae},p=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Px,fragmentShader:Ix}),f=p.clone();f.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new K(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu;let d=this.type;this.render=function(w,E,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||w.length===0)return;let y=r.getRenderTarget(),b=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let N=d!==ii&&this.type===ii,H=d===ii&&this.type!==ii;for(let B=0,k=w.length;B<k;B++){let G=w[B],O=G.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let $=O.getFrameExtents();if(i.multiply($),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,O.mapSize.y=s.y)),O.map===null||N===!0||H===!0){let P=this.type!==ii?{minFilter:yn,magFilter:yn}:{};O.map!==null&&O.map.dispose(),O.map=new je(i.x,i.y,P),O.map.texture.name=G.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let Q=O.getViewportCount();for(let P=0;P<Q;P++){let ut=O.getViewport(P);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),z.viewport(o),O.updateMatrices(G,P),n=O.getFrustum(),v(E,C,O.camera,G,this.type)}O.isPointLightShadow!==!0&&this.type===ii&&_(O,C),O.needsUpdate=!1}d=this.type,x.needsUpdate=!1,r.setRenderTarget(y,b,A)};function _(w,E){let C=t.update(m);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new je(i.x,i.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,C,p,m,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,C,f,m,null)}function M(w,E,C,y){let b=null,A=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)b=A;else if(b=C.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let z=b.uuid,N=E.uuid,H=c[z];H===void 0&&(H={},c[z]=H);let B=H[N];B===void 0&&(B=b.clone(),H[N]=B,E.addEventListener("dispose",T)),b=B}if(b.visible=E.visible,b.wireframe=E.wireframe,y===ii?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=r.properties.get(b);z.light=C}return b}function v(w,E,C,y,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===ii)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let N=t.update(w),H=w.material;if(Array.isArray(H)){let B=N.groups;for(let k=0,G=B.length;k<G;k++){let O=B[k],$=H[O.materialIndex];if($&&$.visible){let Q=M(w,$,y,b);w.onBeforeShadow(r,w,E,C,N,Q,O),r.renderBufferDirect(C,null,N,Q,w,O),w.onAfterShadow(r,w,E,C,N,Q,O)}}}else if(H.visible){let B=M(w,H,y,b);w.onBeforeShadow(r,w,E,C,N,B,null),r.renderBufferDirect(C,null,N,B,w,null),w.onAfterShadow(r,w,E,C,N,B,null)}}let z=w.children;for(let N=0,H=z.length;N<H;N++)v(z[N],E,C,y,b)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let y=c[C],b=w.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var zx={[wl]:El,[Sl]:Rl,[Tl]:Cl,[Ps]:Al,[El]:wl,[Rl]:Sl,[Cl]:Tl,[Al]:Ps};function Dx(r,t){function e(){let V=!1,At=new Te,et=null,lt=new Te(0,0,0,0);return{setMask:function(Rt){et!==Rt&&!V&&(r.colorMask(Rt,Rt,Rt,Rt),et=Rt)},setLocked:function(Rt){V=Rt},setClear:function(Rt,St,Kt,Re,Ye){Ye===!0&&(Rt*=Re,St*=Re,Kt*=Re),At.set(Rt,St,Kt,Re),lt.equals(At)===!1&&(r.clearColor(Rt,St,Kt,Re),lt.copy(At))},reset:function(){V=!1,et=null,lt.set(-1,0,0,0)}}}function n(){let V=!1,At=!1,et=null,lt=null,Rt=null;return{setReversed:function(St){if(At!==St){let Kt=t.get("EXT_clip_control");At?Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.ZERO_TO_ONE_EXT):Kt.clipControlEXT(Kt.LOWER_LEFT_EXT,Kt.NEGATIVE_ONE_TO_ONE_EXT);let Re=Rt;Rt=null,this.setClear(Re)}At=St},getReversed:function(){return At},setTest:function(St){St?st(r.DEPTH_TEST):dt(r.DEPTH_TEST)},setMask:function(St){et!==St&&!V&&(r.depthMask(St),et=St)},setFunc:function(St){if(At&&(St=zx[St]),lt!==St){switch(St){case wl:r.depthFunc(r.NEVER);break;case El:r.depthFunc(r.ALWAYS);break;case Sl:r.depthFunc(r.LESS);break;case Ps:r.depthFunc(r.LEQUAL);break;case Tl:r.depthFunc(r.EQUAL);break;case Al:r.depthFunc(r.GEQUAL);break;case Rl:r.depthFunc(r.GREATER);break;case Cl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}lt=St}},setLocked:function(St){V=St},setClear:function(St){Rt!==St&&(At&&(St=1-St),r.clearDepth(St),Rt=St)},reset:function(){V=!1,et=null,lt=null,Rt=null,At=!1}}}function i(){let V=!1,At=null,et=null,lt=null,Rt=null,St=null,Kt=null,Re=null,Ye=null;return{setTest:function(ge){V||(ge?st(r.STENCIL_TEST):dt(r.STENCIL_TEST))},setMask:function(ge){At!==ge&&!V&&(r.stencilMask(ge),At=ge)},setFunc:function(ge,Ze,tn){(et!==ge||lt!==Ze||Rt!==tn)&&(r.stencilFunc(ge,Ze,tn),et=ge,lt=Ze,Rt=tn)},setOp:function(ge,Ze,tn){(St!==ge||Kt!==Ze||Re!==tn)&&(r.stencilOp(ge,Ze,tn),St=ge,Kt=Ze,Re=tn)},setLocked:function(ge){V=ge},setClear:function(ge){Ye!==ge&&(r.clearStencil(ge),Ye=ge)},reset:function(){V=!1,At=null,et=null,lt=null,Rt=null,St=null,Kt=null,Re=null,Ye=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,f=[],g=null,m=!1,x=null,d=null,_=null,M=null,v=null,T=null,w=null,E=new wt(0,0,0),C=0,y=!1,b=null,A=null,z=null,N=null,H=null,B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,G=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(O)[1]),k=G>=1):O.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),k=G>=2);let $=null,Q={},P=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),nt=new Te().fromArray(P),F=new Te().fromArray(ut);function Z(V,At,et,lt){let Rt=new Uint8Array(4),St=r.createTexture();r.bindTexture(V,St),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Kt=0;Kt<et;Kt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(At,0,r.RGBA,1,1,lt,0,r.RGBA,r.UNSIGNED_BYTE,Rt):r.texImage2D(At+Kt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Rt);return St}let rt={};rt[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),rt[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),rt[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),rt[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Ps),pt(!1),Nt(Ch),st(r.CULL_FACE),U(Vn);function st(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function dt(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function It(V,At){return u[V]!==At?(r.bindFramebuffer(V,At),u[V]=At,V===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=At),V===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=At),!0):!1}function Lt(V,At){let et=f,lt=!1;if(V){et=p.get(At),et===void 0&&(et=[],p.set(At,et));let Rt=V.textures;if(et.length!==Rt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let St=0,Kt=Rt.length;St<Kt;St++)et[St]=r.COLOR_ATTACHMENT0+St;et.length=Rt.length,lt=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,lt=!0);lt&&r.drawBuffers(et)}function jt(V){return g!==V?(r.useProgram(V),g=V,!0):!1}let at={[Wi]:r.FUNC_ADD,[ed]:r.FUNC_SUBTRACT,[nd]:r.FUNC_REVERSE_SUBTRACT};at[id]=r.MIN,at[sd]=r.MAX;let mt={[rd]:r.ZERO,[od]:r.ONE,[ad]:r.SRC_COLOR,[Ml]:r.SRC_ALPHA,[dd]:r.SRC_ALPHA_SATURATE,[ud]:r.DST_COLOR,[cd]:r.DST_ALPHA,[ld]:r.ONE_MINUS_SRC_COLOR,[bl]:r.ONE_MINUS_SRC_ALPHA,[fd]:r.ONE_MINUS_DST_COLOR,[hd]:r.ONE_MINUS_DST_ALPHA,[pd]:r.CONSTANT_COLOR,[md]:r.ONE_MINUS_CONSTANT_COLOR,[gd]:r.CONSTANT_ALPHA,[xd]:r.ONE_MINUS_CONSTANT_ALPHA};function U(V,At,et,lt,Rt,St,Kt,Re,Ye,ge){if(V===Vn){m===!0&&(dt(r.BLEND),m=!1);return}if(m===!1&&(st(r.BLEND),m=!0),V!==td){if(V!==x||ge!==y){if((d!==Wi||v!==Wi)&&(r.blendEquation(r.FUNC_ADD),d=Wi,v=Wi),ge)switch(V){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Be:r.blendFunc(r.ONE,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Be:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Ph:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ih:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,M=null,T=null,w=null,E.set(0,0,0),C=0,x=V,y=ge}return}Rt=Rt||At,St=St||et,Kt=Kt||lt,(At!==d||Rt!==v)&&(r.blendEquationSeparate(at[At],at[Rt]),d=At,v=Rt),(et!==_||lt!==M||St!==T||Kt!==w)&&(r.blendFuncSeparate(mt[et],mt[lt],mt[St],mt[Kt]),_=et,M=lt,T=St,w=Kt),(Re.equals(E)===!1||Ye!==C)&&(r.blendColor(Re.r,Re.g,Re.b,Ye),E.copy(Re),C=Ye),x=V,y=!1}function Ot(V,At){V.side===Ae?dt(r.CULL_FACE):st(r.CULL_FACE);let et=V.side===sn;At&&(et=!et),pt(et),V.blending===Ts&&V.transparent===!1?U(Vn):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);let lt=V.stencilWrite;a.setTest(lt),lt&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Jt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):dt(r.SAMPLE_ALPHA_TO_COVERAGE)}function pt(V){b!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),b=V)}function Nt(V){V!==jf?(st(r.CULL_FACE),V!==A&&(V===Ch?r.cullFace(r.BACK):V===Qf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):dt(r.CULL_FACE),A=V}function _t(V){V!==z&&(k&&r.lineWidth(V),z=V)}function Jt(V,At,et){V?(st(r.POLYGON_OFFSET_FILL),(N!==At||H!==et)&&(r.polygonOffset(At,et),N=At,H=et)):dt(r.POLYGON_OFFSET_FILL)}function Ct(V){V?st(r.SCISSOR_TEST):dt(r.SCISSOR_TEST)}function L(V){V===void 0&&(V=r.TEXTURE0+B-1),$!==V&&(r.activeTexture(V),$=V)}function S(V,At,et){et===void 0&&($===null?et=r.TEXTURE0+B-1:et=$);let lt=Q[et];lt===void 0&&(lt={type:void 0,texture:void 0},Q[et]=lt),(lt.type!==V||lt.texture!==At)&&($!==et&&(r.activeTexture(et),$=et),r.bindTexture(V,At||rt[V]),lt.type=V,lt.texture=At)}function Y(){let V=Q[$];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function it(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ft(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function le(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Bt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Yt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(V){nt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),nt.copy(V))}function Ut(V){F.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),F.copy(V))}function ce(V,At){let et=c.get(At);et===void 0&&(et=new WeakMap,c.set(At,et));let lt=et.get(V);lt===void 0&&(lt=r.getUniformBlockIndex(At,V.name),et.set(V,lt))}function ne(V,At){let lt=c.get(At).get(V);l.get(At)!==lt&&(r.uniformBlockBinding(At,lt,V.__bindingPointIndex),l.set(At,lt))}function we(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,Q={},u={},p=new WeakMap,f=[],g=null,m=!1,x=null,d=null,_=null,M=null,v=null,T=null,w=null,E=new wt(0,0,0),C=0,y=!1,b=null,A=null,z=null,N=null,H=null,nt.set(0,0,r.canvas.width,r.canvas.height),F.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:dt,bindFramebuffer:It,drawBuffers:Lt,useProgram:jt,setBlending:U,setMaterial:Ot,setFlipSided:pt,setCullFace:Nt,setLineWidth:_t,setPolygonOffset:Jt,setScissorTest:Ct,activeTexture:L,bindTexture:S,unbindTexture:Y,compressedTexImage2D:it,compressedTexImage3D:ht,texImage2D:Bt,texImage3D:Yt,updateUBOMapping:ce,uniformBlockBinding:ne,texStorage2D:le,texStorage3D:vt,texSubImage2D:ot,texSubImage3D:Ft,compressedTexSubImage2D:Et,compressedTexSubImage3D:zt,scissor:te,viewport:Ut,reset:we}}function Au(r,t,e,n){let i=Ux(n);switch(e){case ju:return r*t;case tf:return r*t;case ef:return r*t*2;case nh:return r*t/i.components*i.byteLength;case ih:return r*t/i.components*i.byteLength;case nf:return r*t*2/i.components*i.byteLength;case sh:return r*t*2/i.components*i.byteLength;case Qu:return r*t*3/i.components*i.byteLength;case Dn:return r*t*4/i.components*i.byteLength;case rh:return r*t*4/i.components*i.byteLength;case xo:case vo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case yo:case _o:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Dl:case Nl:return Math.max(r,16)*Math.max(t,8)/4;case zl:case Ul:return Math.max(r,8)*Math.max(t,8)/2;case kl:case Bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Fl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Hl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ol:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Vl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Gl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Wl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Xl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ql:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case $l:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Yl:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Kl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case jl:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Ql:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Mo:case tc:case ec:return Math.ceil(r/4)*Math.ceil(t/4)*16;case sf:case nc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ic:case sc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ux(r){switch(r){case ai:case Zu:return{byteLength:1,components:1};case br:case Ju:case Mn:return{byteLength:2,components:1};case th:case eh:return{byteLength:2,components:4};case Yi:case Qc:case On:return{byteLength:4,components:1};case Ku:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Nx(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,p=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,S){return f?new OffscreenCanvas(L,S):Eo("canvas")}function m(L,S,Y){let it=1,ht=Ct(L);if((ht.width>Y||ht.height>Y)&&(it=Y/Math.max(ht.width,ht.height)),it<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){let ot=Math.floor(it*ht.width),Ft=Math.floor(it*ht.height);u===void 0&&(u=g(ot,Ft));let Et=S?g(ot,Ft):u;return Et.width=ot,Et.height=Ft,Et.getContext("2d").drawImage(L,0,0,ot,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+Ft+")."),Et}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),L;return L}function x(L){return L.generateMipmaps}function d(L){r.generateMipmap(L)}function _(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(L,S,Y,it,ht=!1){if(L!==null){if(r[L]!==void 0)return r[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ot=S;if(S===r.RED&&(Y===r.FLOAT&&(ot=r.R32F),Y===r.HALF_FLOAT&&(ot=r.R16F),Y===r.UNSIGNED_BYTE&&(ot=r.R8)),S===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.R8UI),Y===r.UNSIGNED_SHORT&&(ot=r.R16UI),Y===r.UNSIGNED_INT&&(ot=r.R32UI),Y===r.BYTE&&(ot=r.R8I),Y===r.SHORT&&(ot=r.R16I),Y===r.INT&&(ot=r.R32I)),S===r.RG&&(Y===r.FLOAT&&(ot=r.RG32F),Y===r.HALF_FLOAT&&(ot=r.RG16F),Y===r.UNSIGNED_BYTE&&(ot=r.RG8)),S===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RG16UI),Y===r.UNSIGNED_INT&&(ot=r.RG32UI),Y===r.BYTE&&(ot=r.RG8I),Y===r.SHORT&&(ot=r.RG16I),Y===r.INT&&(ot=r.RG32I)),S===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),Y===r.UNSIGNED_INT&&(ot=r.RGB32UI),Y===r.BYTE&&(ot=r.RGB8I),Y===r.SHORT&&(ot=r.RGB16I),Y===r.INT&&(ot=r.RGB32I)),S===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ot=r.RGBA32UI),Y===r.BYTE&&(ot=r.RGBA8I),Y===r.SHORT&&(ot=r.RGBA16I),Y===r.INT&&(ot=r.RGBA32I)),S===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),S===r.RGBA){let Ft=ht?Ko:he.getTransfer(it);Y===r.FLOAT&&(ot=r.RGBA32F),Y===r.HALF_FLOAT&&(ot=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ot=Ft===Me?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(L,S){let Y;return L?S===null||S===Yi||S===zs?Y=r.DEPTH24_STENCIL8:S===On?Y=r.DEPTH32F_STENCIL8:S===br&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Yi||S===zs?Y=r.DEPTH_COMPONENT24:S===On?Y=r.DEPTH_COMPONENT32F:S===br&&(Y=r.DEPTH_COMPONENT16),Y}function T(L,S){return x(L)===!0||L.isFramebufferTexture&&L.minFilter!==yn&&L.minFilter!==Hn?Math.log2(Math.max(S.width,S.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?S.mipmaps.length:1}function w(L){let S=L.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&h.delete(S)}function E(L){let S=L.target;S.removeEventListener("dispose",E),b(S)}function C(L){let S=n.get(L);if(S.__webglInit===void 0)return;let Y=L.source,it=p.get(Y);if(it){let ht=it[S.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&y(L),Object.keys(it).length===0&&p.delete(Y)}n.remove(L)}function y(L){let S=n.get(L);r.deleteTexture(S.__webglTexture);let Y=L.source,it=p.get(Y);delete it[S.__cacheKey],o.memory.textures--}function b(L){let S=n.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),n.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(S.__webglFramebuffer[it]))for(let ht=0;ht<S.__webglFramebuffer[it].length;ht++)r.deleteFramebuffer(S.__webglFramebuffer[it][ht]);else r.deleteFramebuffer(S.__webglFramebuffer[it]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[it])}else{if(Array.isArray(S.__webglFramebuffer))for(let it=0;it<S.__webglFramebuffer.length;it++)r.deleteFramebuffer(S.__webglFramebuffer[it]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let it=0;it<S.__webglColorRenderbuffer.length;it++)S.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[it]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let Y=L.textures;for(let it=0,ht=Y.length;it<ht;it++){let ot=n.get(Y[it]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(Y[it])}n.remove(L)}let A=0;function z(){A=0}function N(){let L=A;return L>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+i.maxTextures),A+=1,L}function H(L){let S=[];return S.push(L.wrapS),S.push(L.wrapT),S.push(L.wrapR||0),S.push(L.magFilter),S.push(L.minFilter),S.push(L.anisotropy),S.push(L.internalFormat),S.push(L.format),S.push(L.type),S.push(L.generateMipmaps),S.push(L.premultiplyAlpha),S.push(L.flipY),S.push(L.unpackAlignment),S.push(L.colorSpace),S.join()}function B(L,S){let Y=n.get(L);if(L.isVideoTexture&&_t(L),L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){let it=L.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(Y,L,S);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+S)}function k(L,S){let Y=n.get(L);if(L.version>0&&Y.__version!==L.version){F(Y,L,S);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+S)}function G(L,S){let Y=n.get(L);if(L.version>0&&Y.__version!==L.version){F(Y,L,S);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+S)}function O(L,S){let Y=n.get(L);if(L.version>0&&Y.__version!==L.version){Z(Y,L,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+S)}let $={[Mr]:r.REPEAT,[qi]:r.CLAMP_TO_EDGE,[Ll]:r.MIRRORED_REPEAT},Q={[yn]:r.NEAREST,[Md]:r.NEAREST_MIPMAP_NEAREST,[kr]:r.NEAREST_MIPMAP_LINEAR,[Hn]:r.LINEAR,[Ha]:r.LINEAR_MIPMAP_NEAREST,[$i]:r.LINEAR_MIPMAP_LINEAR},P={[Sd]:r.NEVER,[Id]:r.ALWAYS,[Td]:r.LESS,[of]:r.LEQUAL,[Ad]:r.EQUAL,[Pd]:r.GEQUAL,[Rd]:r.GREATER,[Cd]:r.NOTEQUAL};function ut(L,S){if(S.type===On&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Hn||S.magFilter===Ha||S.magFilter===kr||S.magFilter===$i||S.minFilter===Hn||S.minFilter===Ha||S.minFilter===kr||S.minFilter===$i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,$[S.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,$[S.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,$[S.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,Q[S.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,Q[S.minFilter]),S.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,P[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==kr&&S.minFilter!==$i||S.type===On&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(L,S){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,S.addEventListener("dispose",w));let it=S.source,ht=p.get(it);ht===void 0&&(ht={},p.set(it,ht));let ot=H(S);if(ot!==L.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ht[ot].usedTimes++;let Ft=ht[L.__cacheKey];Ft!==void 0&&(ht[L.__cacheKey].usedTimes--,Ft.usedTimes===0&&y(S)),L.__cacheKey=ot,L.__webglTexture=ht[ot].texture}return Y}function F(L,S,Y){let it=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(it=r.TEXTURE_3D);let ht=nt(L,S),ot=S.source;e.bindTexture(it,L.__webglTexture,r.TEXTURE0+Y);let Ft=n.get(ot);if(ot.version!==Ft.__version||ht===!0){e.activeTexture(r.TEXTURE0+Y);let Et=he.getPrimaries(he.workingColorSpace),zt=S.colorSpace===Mi?null:he.getPrimaries(S.colorSpace),le=S.colorSpace===Mi||Et===zt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let vt=m(S.image,!1,i.maxTextureSize);vt=Jt(S,vt);let Bt=s.convert(S.format,S.colorSpace),Yt=s.convert(S.type),te=M(S.internalFormat,Bt,Yt,S.colorSpace,S.isVideoTexture);ut(it,S);let Ut,ce=S.mipmaps,ne=S.isVideoTexture!==!0,we=Ft.__version===void 0||ht===!0,V=ot.dataReady,At=T(S,vt);if(S.isDepthTexture)te=v(S.format===Ds,S.type),we&&(ne?e.texStorage2D(r.TEXTURE_2D,1,te,vt.width,vt.height):e.texImage2D(r.TEXTURE_2D,0,te,vt.width,vt.height,0,Bt,Yt,null));else if(S.isDataTexture)if(ce.length>0){ne&&we&&e.texStorage2D(r.TEXTURE_2D,At,te,ce[0].width,ce[0].height);for(let et=0,lt=ce.length;et<lt;et++)Ut=ce[et],ne?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Ut.width,Ut.height,Bt,Yt,Ut.data):e.texImage2D(r.TEXTURE_2D,et,te,Ut.width,Ut.height,0,Bt,Yt,Ut.data);S.generateMipmaps=!1}else ne?(we&&e.texStorage2D(r.TEXTURE_2D,At,te,vt.width,vt.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,vt.width,vt.height,Bt,Yt,vt.data)):e.texImage2D(r.TEXTURE_2D,0,te,vt.width,vt.height,0,Bt,Yt,vt.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ne&&we&&e.texStorage3D(r.TEXTURE_2D_ARRAY,At,te,ce[0].width,ce[0].height,vt.depth);for(let et=0,lt=ce.length;et<lt;et++)if(Ut=ce[et],S.format!==Dn)if(Bt!==null)if(ne){if(V)if(S.layerUpdates.size>0){let Rt=Au(Ut.width,Ut.height,S.format,S.type);for(let St of S.layerUpdates){let Kt=Ut.data.subarray(St*Rt/Ut.data.BYTES_PER_ELEMENT,(St+1)*Rt/Ut.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,St,Ut.width,Ut.height,1,Bt,Kt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,Ut.width,Ut.height,vt.depth,Bt,Ut.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,te,Ut.width,Ut.height,vt.depth,0,Ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,Ut.width,Ut.height,vt.depth,Bt,Yt,Ut.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,te,Ut.width,Ut.height,vt.depth,0,Bt,Yt,Ut.data)}else{ne&&we&&e.texStorage2D(r.TEXTURE_2D,At,te,ce[0].width,ce[0].height);for(let et=0,lt=ce.length;et<lt;et++)Ut=ce[et],S.format!==Dn?Bt!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,Ut.width,Ut.height,Bt,Ut.data):e.compressedTexImage2D(r.TEXTURE_2D,et,te,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Ut.width,Ut.height,Bt,Yt,Ut.data):e.texImage2D(r.TEXTURE_2D,et,te,Ut.width,Ut.height,0,Bt,Yt,Ut.data)}else if(S.isDataArrayTexture)if(ne){if(we&&e.texStorage3D(r.TEXTURE_2D_ARRAY,At,te,vt.width,vt.height,vt.depth),V)if(S.layerUpdates.size>0){let et=Au(vt.width,vt.height,S.format,S.type);for(let lt of S.layerUpdates){let Rt=vt.data.subarray(lt*et/vt.data.BYTES_PER_ELEMENT,(lt+1)*et/vt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,lt,vt.width,vt.height,1,Bt,Yt,Rt)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,vt.width,vt.height,vt.depth,Bt,Yt,vt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,te,vt.width,vt.height,vt.depth,0,Bt,Yt,vt.data);else if(S.isData3DTexture)ne?(we&&e.texStorage3D(r.TEXTURE_3D,At,te,vt.width,vt.height,vt.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,vt.width,vt.height,vt.depth,Bt,Yt,vt.data)):e.texImage3D(r.TEXTURE_3D,0,te,vt.width,vt.height,vt.depth,0,Bt,Yt,vt.data);else if(S.isFramebufferTexture){if(we)if(ne)e.texStorage2D(r.TEXTURE_2D,At,te,vt.width,vt.height);else{let et=vt.width,lt=vt.height;for(let Rt=0;Rt<At;Rt++)e.texImage2D(r.TEXTURE_2D,Rt,te,et,lt,0,Bt,Yt,null),et>>=1,lt>>=1}}else if(ce.length>0){if(ne&&we){let et=Ct(ce[0]);e.texStorage2D(r.TEXTURE_2D,At,te,et.width,et.height)}for(let et=0,lt=ce.length;et<lt;et++)Ut=ce[et],ne?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Bt,Yt,Ut):e.texImage2D(r.TEXTURE_2D,et,te,Bt,Yt,Ut);S.generateMipmaps=!1}else if(ne){if(we){let et=Ct(vt);e.texStorage2D(r.TEXTURE_2D,At,te,et.width,et.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Bt,Yt,vt)}else e.texImage2D(r.TEXTURE_2D,0,te,Bt,Yt,vt);x(S)&&d(it),Ft.__version=ot.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function Z(L,S,Y){if(S.image.length!==6)return;let it=nt(L,S),ht=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+Y);let ot=n.get(ht);if(ht.version!==ot.__version||it===!0){e.activeTexture(r.TEXTURE0+Y);let Ft=he.getPrimaries(he.workingColorSpace),Et=S.colorSpace===Mi?null:he.getPrimaries(S.colorSpace),zt=S.colorSpace===Mi||Ft===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);let le=S.isCompressedTexture||S.image[0].isCompressedTexture,vt=S.image[0]&&S.image[0].isDataTexture,Bt=[];for(let lt=0;lt<6;lt++)!le&&!vt?Bt[lt]=m(S.image[lt],!0,i.maxCubemapSize):Bt[lt]=vt?S.image[lt].image:S.image[lt],Bt[lt]=Jt(S,Bt[lt]);let Yt=Bt[0],te=s.convert(S.format,S.colorSpace),Ut=s.convert(S.type),ce=M(S.internalFormat,te,Ut,S.colorSpace),ne=S.isVideoTexture!==!0,we=ot.__version===void 0||it===!0,V=ht.dataReady,At=T(S,Yt);ut(r.TEXTURE_CUBE_MAP,S);let et;if(le){ne&&we&&e.texStorage2D(r.TEXTURE_CUBE_MAP,At,ce,Yt.width,Yt.height);for(let lt=0;lt<6;lt++){et=Bt[lt].mipmaps;for(let Rt=0;Rt<et.length;Rt++){let St=et[Rt];S.format!==Dn?te!==null?ne?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,St.width,St.height,te,St.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,ce,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,0,0,St.width,St.height,te,Ut,St.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt,ce,St.width,St.height,0,te,Ut,St.data)}}}else{if(et=S.mipmaps,ne&&we){et.length>0&&At++;let lt=Ct(Bt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,At,ce,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(vt){ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Bt[lt].width,Bt[lt].height,te,Ut,Bt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ce,Bt[lt].width,Bt[lt].height,0,te,Ut,Bt[lt].data);for(let Rt=0;Rt<et.length;Rt++){let Kt=et[Rt].image[lt].image;ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,Kt.width,Kt.height,te,Ut,Kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,ce,Kt.width,Kt.height,0,te,Ut,Kt.data)}}else{ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,te,Ut,Bt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,ce,te,Ut,Bt[lt]);for(let Rt=0;Rt<et.length;Rt++){let St=et[Rt];ne?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,0,0,te,Ut,St.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Rt+1,ce,te,Ut,St.image[lt])}}}x(S)&&d(r.TEXTURE_CUBE_MAP),ot.__version=ht.version,S.onUpdate&&S.onUpdate(S)}L.__version=S.version}function rt(L,S,Y,it,ht,ot){let Ft=s.convert(Y.format,Y.colorSpace),Et=s.convert(Y.type),zt=M(Y.internalFormat,Ft,Et,Y.colorSpace),le=n.get(S),vt=n.get(Y);if(vt.__renderTarget=S,!le.__hasExternalTextures){let Bt=Math.max(1,S.width>>ot),Yt=Math.max(1,S.height>>ot);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,zt,Bt,Yt,S.depth,0,Ft,Et,null):e.texImage2D(ht,ot,zt,Bt,Yt,0,Ft,Et,null)}e.bindFramebuffer(r.FRAMEBUFFER,L),Nt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,ht,vt.__webglTexture,0,pt(S)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,ht,vt.__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(L,S,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,L),S.depthBuffer){let it=S.depthTexture,ht=it&&it.isDepthTexture?it.type:null,ot=v(S.stencilBuffer,ht),Ft=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=pt(S);Nt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Et,ot,S.width,S.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,Et,ot,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,ot,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ft,r.RENDERBUFFER,L)}else{let it=S.textures;for(let ht=0;ht<it.length;ht++){let ot=it[ht],Ft=s.convert(ot.format,ot.colorSpace),Et=s.convert(ot.type),zt=M(ot.internalFormat,Ft,Et,ot.colorSpace),le=pt(S);Y&&Nt(S)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,le,zt,S.width,S.height):Nt(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,le,zt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,zt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(L,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,L),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let it=n.get(S.depthTexture);it.__renderTarget=S,(!it.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),B(S.depthTexture,0);let ht=it.__webglTexture,ot=pt(S);if(S.depthTexture.format===As)Nt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(S.depthTexture.format===Ds)Nt(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function It(L){let S=n.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==L.depthTexture){let it=L.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),it){let ht=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,it.removeEventListener("dispose",ht)};it.addEventListener("dispose",ht),S.__depthDisposeCallback=ht}S.__boundDepthTexture=it}if(L.depthTexture&&!S.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");dt(S.__webglFramebuffer,L)}else if(Y){S.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[it]),S.__webglDepthbuffer[it]===void 0)S.__webglDepthbuffer[it]=r.createRenderbuffer(),st(S.__webglDepthbuffer[it],L,!1);else{let ht=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=S.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),st(S.__webglDepthbuffer,L,!1);else{let it=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(L,S,Y){let it=n.get(L);S!==void 0&&rt(it.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&It(L)}function jt(L){let S=L.texture,Y=n.get(L),it=n.get(S);L.addEventListener("dispose",E);let ht=L.textures,ot=L.isWebGLCubeRenderTarget===!0,Ft=ht.length>1;if(Ft||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=S.version,o.memory.textures++),ot){Y.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer[Et]=[];for(let zt=0;zt<S.mipmaps.length;zt++)Y.__webglFramebuffer[Et][zt]=r.createFramebuffer()}else Y.__webglFramebuffer[Et]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Et=0;Et<S.mipmaps.length;Et++)Y.__webglFramebuffer[Et]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ft)for(let Et=0,zt=ht.length;Et<zt;Et++){let le=n.get(ht[Et]);le.__webglTexture===void 0&&(le.__webglTexture=r.createTexture(),o.memory.textures++)}if(L.samples>0&&Nt(L)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Et=0;Et<ht.length;Et++){let zt=ht[Et];Y.__webglColorRenderbuffer[Et]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[Et]);let le=s.convert(zt.format,zt.colorSpace),vt=s.convert(zt.type),Bt=M(zt.internalFormat,le,vt,zt.colorSpace,L.isXRRenderTarget===!0),Yt=pt(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Bt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Et,r.RENDERBUFFER,Y.__webglColorRenderbuffer[Et])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),st(Y.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),ut(r.TEXTURE_CUBE_MAP,S);for(let Et=0;Et<6;Et++)if(S.mipmaps&&S.mipmaps.length>0)for(let zt=0;zt<S.mipmaps.length;zt++)rt(Y.__webglFramebuffer[Et][zt],L,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,zt);else rt(Y.__webglFramebuffer[Et],L,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);x(S)&&d(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Et=0,zt=ht.length;Et<zt;Et++){let le=ht[Et],vt=n.get(le);e.bindTexture(r.TEXTURE_2D,vt.__webglTexture),ut(r.TEXTURE_2D,le),rt(Y.__webglFramebuffer,L,le,r.COLOR_ATTACHMENT0+Et,r.TEXTURE_2D,0),x(le)&&d(r.TEXTURE_2D)}e.unbindTexture()}else{let Et=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Et=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Et,it.__webglTexture),ut(Et,S),S.mipmaps&&S.mipmaps.length>0)for(let zt=0;zt<S.mipmaps.length;zt++)rt(Y.__webglFramebuffer[zt],L,S,r.COLOR_ATTACHMENT0,Et,zt);else rt(Y.__webglFramebuffer,L,S,r.COLOR_ATTACHMENT0,Et,0);x(S)&&d(Et),e.unbindTexture()}L.depthBuffer&&It(L)}function at(L){let S=L.textures;for(let Y=0,it=S.length;Y<it;Y++){let ht=S[Y];if(x(ht)){let ot=_(L),Ft=n.get(ht).__webglTexture;e.bindTexture(ot,Ft),d(ot),e.unbindTexture()}}}let mt=[],U=[];function Ot(L){if(L.samples>0){if(Nt(L)===!1){let S=L.textures,Y=L.width,it=L.height,ht=r.COLOR_BUFFER_BIT,ot=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=n.get(L),Et=S.length>1;if(Et)for(let zt=0;zt<S.length;zt++)e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let zt=0;zt<S.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),Et){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[zt]);let le=n.get(S[zt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,le,0)}r.blitFramebuffer(0,0,Y,it,0,0,Y,it,ht,r.NEAREST),l===!0&&(mt.length=0,U.length=0,mt.push(r.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(mt.push(ot),U.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Et)for(let zt=0;zt<S.length;zt++){e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.RENDERBUFFER,Ft.__webglColorRenderbuffer[zt]);let le=n.get(S[zt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ft.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+zt,r.TEXTURE_2D,le,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&l){let S=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function pt(L){return Math.min(i.maxSamples,L.samples)}function Nt(L){let S=n.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function _t(L){let S=o.render.frame;h.get(L)!==S&&(h.set(L,S),L.update())}function Jt(L,S){let Y=L.colorSpace,it=L.format,ht=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==qs&&Y!==Mi&&(he.getTransfer(Y)===Me?(it!==Dn||ht!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),S}function Ct(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(c.width=L.naturalWidth||L.width,c.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(c.width=L.displayWidth,c.height=L.displayHeight):(c.width=L.width,c.height=L.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=k,this.setTexture3D=G,this.setTextureCube=O,this.rebindTextures=Lt,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=It,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Nt}function kx(r,t){function e(n,i=Mi){let s,o=he.getTransfer(i);if(n===ai)return r.UNSIGNED_BYTE;if(n===th)return r.UNSIGNED_SHORT_4_4_4_4;if(n===eh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ku)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Zu)return r.BYTE;if(n===Ju)return r.SHORT;if(n===br)return r.UNSIGNED_SHORT;if(n===Qc)return r.INT;if(n===Yi)return r.UNSIGNED_INT;if(n===On)return r.FLOAT;if(n===Mn)return r.HALF_FLOAT;if(n===ju)return r.ALPHA;if(n===Qu)return r.RGB;if(n===Dn)return r.RGBA;if(n===tf)return r.LUMINANCE;if(n===ef)return r.LUMINANCE_ALPHA;if(n===As)return r.DEPTH_COMPONENT;if(n===Ds)return r.DEPTH_STENCIL;if(n===nh)return r.RED;if(n===ih)return r.RED_INTEGER;if(n===nf)return r.RG;if(n===sh)return r.RG_INTEGER;if(n===rh)return r.RGBA_INTEGER;if(n===xo||n===vo||n===yo||n===_o)if(o===Me)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===xo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===xo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===vo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_o)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===zl||n===Dl||n===Ul||n===Nl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===zl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Dl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ul)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Nl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===kl||n===Bl||n===Fl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===kl||n===Bl)return o===Me?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Fl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Hl||n===Ol||n===Vl||n===Gl||n===Wl||n===Xl||n===ql||n===$l||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Hl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ol)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ql)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$l)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===jl)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ql)return o===Me?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mo||n===tc||n===ec)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mo)return o===Me?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ec)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===sf||n===nc||n===ic||n===sc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===nc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ic)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var _c=class extends We{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qt=class extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bx={type:"move"},vr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let x=e.getJointPose(m,n),d=this._getHandJoint(c,m);x!==null&&(d.matrix.fromArray(x.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=x.radius),d.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&p>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Bx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Fx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`,Mc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new dn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:Fx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new K(new Pe(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bc=class extends Ti{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,f=null,g=null,m=new Mc,x=e.getContextAttributes(),d=null,_=null,M=[],v=[],T=new tt,w=null,E=new We;E.viewport=new Te;let C=new We;C.viewport=new Te;let y=[E,C],b=new _c,A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=M[F];return Z===void 0&&(Z=new vr,M[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=M[F];return Z===void 0&&(Z=new vr,M[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=M[F];return Z===void 0&&(Z=new vr,M[F]=Z),Z.getHandSpace()};function N(F){let Z=v.indexOf(F.inputSource);if(Z===-1)return;let rt=M[Z];rt!==void 0&&(rt.update(F.inputSource,F.frame,c||o),rt.dispatchEvent({type:F.type,data:F.inputSource}))}function H(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",B);for(let F=0;F<M.length;F++){let Z=v[F];Z!==null&&(v[F]=null,M[F].disconnect(Z))}A=null,z=null,m.reset(),t.setRenderTarget(d),f=null,p=null,u=null,i=null,_=null,nt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return p!==null?p:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(d=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",H),i.addEventListener("inputsourceschange",B),x.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(T),i.renderState.layers===void 0){let Z={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new je(f.framebufferWidth,f.framebufferHeight,{format:Dn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,rt=null,st=null;x.depth&&(st=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=x.stencil?Ds:As,rt=x.stencil?zs:Yi);let dt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),p=u.createProjectionLayer(dt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new je(p.textureWidth,p.textureHeight,{format:Dn,type:ai,depthTexture:new Po(p.textureWidth,p.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),nt.setContext(i),nt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(F){for(let Z=0;Z<F.removed.length;Z++){let rt=F.removed[Z],st=v.indexOf(rt);st>=0&&(v[st]=null,M[st].disconnect(rt))}for(let Z=0;Z<F.added.length;Z++){let rt=F.added[Z],st=v.indexOf(rt);if(st===-1){for(let It=0;It<M.length;It++)if(It>=v.length){v.push(rt),st=It;break}else if(v[It]===null){v[It]=rt,st=It;break}if(st===-1)break}let dt=M[st];dt&&dt.connect(rt)}}let k=new I,G=new I;function O(F,Z,rt){k.setFromMatrixPosition(Z.matrixWorld),G.setFromMatrixPosition(rt.matrixWorld);let st=k.distanceTo(G),dt=Z.projectionMatrix.elements,It=rt.projectionMatrix.elements,Lt=dt[14]/(dt[10]-1),jt=dt[14]/(dt[10]+1),at=(dt[9]+1)/dt[5],mt=(dt[9]-1)/dt[5],U=(dt[8]-1)/dt[0],Ot=(It[8]+1)/It[0],pt=Lt*U,Nt=Lt*Ot,_t=st/(-U+Ot),Jt=_t*-U;if(Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Jt),F.translateZ(_t),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),dt[10]===-1)F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Ct=Lt+_t,L=jt+_t,S=pt-Jt,Y=Nt+(st-Jt),it=at*jt/L*Ct,ht=mt*jt/L*Ct;F.projectionMatrix.makePerspective(S,Y,it,ht,Ct,L),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function $(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let Z=F.near,rt=F.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(rt=m.depthFar)),b.near=C.near=E.near=Z,b.far=C.far=E.far=rt,(A!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),A=b.near,z=b.far),E.layers.mask=F.layers.mask|2,C.layers.mask=F.layers.mask|4,b.layers.mask=E.layers.mask|C.layers.mask;let st=F.parent,dt=b.cameras;$(b,st);for(let It=0;It<dt.length;It++)$(dt[It],st);dt.length===2?O(b,E,C):b.projectionMatrix.copy(E.projectionMatrix),Q(F,b,st)};function Q(F,Z,rt){rt===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(rt.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Us*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(p===null&&f===null))return l},this.setFoveation=function(F){l=F,p!==null&&(p.fixedFoveation=F),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(b)};let P=null;function ut(F,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){let rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let st=!1;rt.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let It=0;It<rt.length;It++){let Lt=rt[It],jt=null;if(f!==null)jt=f.getViewport(Lt);else{let mt=u.getViewSubImage(p,Lt);jt=mt.viewport,It===0&&(t.setRenderTargetTextures(_,mt.colorTexture,p.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(_))}let at=y[It];at===void 0&&(at=new We,at.layers.enable(It),at.viewport=new Te,y[It]=at),at.matrix.fromArray(Lt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Lt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(jt.x,jt.y,jt.width,jt.height),It===0&&(b.matrix.copy(at.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(at)}let dt=i.enabledFeatures;if(dt&&dt.includes("depth-sensing")){let It=u.getDepthInformation(rt[0]);It&&It.isValid&&It.texture&&m.init(t,It,i.renderState)}}for(let rt=0;rt<M.length;rt++){let st=v[rt],dt=M[rt];st!==null&&dt!==void 0&&dt.update(st,Z,c||o)}P&&P(F,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let nt=new hf;nt.setAnimationLoop(ut),this.setAnimationLoop=function(F){P=F},this.dispose=function(){}}},Vi=new Ke,Ox=new re;function Vx(r,t){function e(x,d){x.matrixAutoUpdate===!0&&x.updateMatrix(),d.value.copy(x.matrix)}function n(x,d){d.color.getRGB(x.fogColor.value,cf(r)),d.isFog?(x.fogNear.value=d.near,x.fogFar.value=d.far):d.isFogExp2&&(x.fogDensity.value=d.density)}function i(x,d,_,M,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(x,d):d.isMeshToonMaterial?(s(x,d),u(x,d)):d.isMeshPhongMaterial?(s(x,d),h(x,d)):d.isMeshStandardMaterial?(s(x,d),p(x,d),d.isMeshPhysicalMaterial&&f(x,d,v)):d.isMeshMatcapMaterial?(s(x,d),g(x,d)):d.isMeshDepthMaterial?s(x,d):d.isMeshDistanceMaterial?(s(x,d),m(x,d)):d.isMeshNormalMaterial?s(x,d):d.isLineBasicMaterial?(o(x,d),d.isLineDashedMaterial&&a(x,d)):d.isPointsMaterial?l(x,d,_,M):d.isSpriteMaterial?c(x,d):d.isShadowMaterial?(x.color.value.copy(d.color),x.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(x,d){x.opacity.value=d.opacity,d.color&&x.diffuse.value.copy(d.color),d.emissive&&x.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(x.map.value=d.map,e(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,e(d.alphaMap,x.alphaMapTransform)),d.bumpMap&&(x.bumpMap.value=d.bumpMap,e(d.bumpMap,x.bumpMapTransform),x.bumpScale.value=d.bumpScale,d.side===sn&&(x.bumpScale.value*=-1)),d.normalMap&&(x.normalMap.value=d.normalMap,e(d.normalMap,x.normalMapTransform),x.normalScale.value.copy(d.normalScale),d.side===sn&&x.normalScale.value.negate()),d.displacementMap&&(x.displacementMap.value=d.displacementMap,e(d.displacementMap,x.displacementMapTransform),x.displacementScale.value=d.displacementScale,x.displacementBias.value=d.displacementBias),d.emissiveMap&&(x.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,x.emissiveMapTransform)),d.specularMap&&(x.specularMap.value=d.specularMap,e(d.specularMap,x.specularMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest);let _=t.get(d),M=_.envMap,v=_.envMapRotation;M&&(x.envMap.value=M,Vi.copy(v),Vi.x*=-1,Vi.y*=-1,Vi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Vi.y*=-1,Vi.z*=-1),x.envMapRotation.value.setFromMatrix4(Ox.makeRotationFromEuler(Vi)),x.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=d.reflectivity,x.ior.value=d.ior,x.refractionRatio.value=d.refractionRatio),d.lightMap&&(x.lightMap.value=d.lightMap,x.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,x.lightMapTransform)),d.aoMap&&(x.aoMap.value=d.aoMap,x.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,x.aoMapTransform))}function o(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,d.map&&(x.map.value=d.map,e(d.map,x.mapTransform))}function a(x,d){x.dashSize.value=d.dashSize,x.totalSize.value=d.dashSize+d.gapSize,x.scale.value=d.scale}function l(x,d,_,M){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.size.value=d.size*_,x.scale.value=M*.5,d.map&&(x.map.value=d.map,e(d.map,x.uvTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,e(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function c(x,d){x.diffuse.value.copy(d.color),x.opacity.value=d.opacity,x.rotation.value=d.rotation,d.map&&(x.map.value=d.map,e(d.map,x.mapTransform)),d.alphaMap&&(x.alphaMap.value=d.alphaMap,e(d.alphaMap,x.alphaMapTransform)),d.alphaTest>0&&(x.alphaTest.value=d.alphaTest)}function h(x,d){x.specular.value.copy(d.specular),x.shininess.value=Math.max(d.shininess,1e-4)}function u(x,d){d.gradientMap&&(x.gradientMap.value=d.gradientMap)}function p(x,d){x.metalness.value=d.metalness,d.metalnessMap&&(x.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,x.metalnessMapTransform)),x.roughness.value=d.roughness,d.roughnessMap&&(x.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,x.roughnessMapTransform)),d.envMap&&(x.envMapIntensity.value=d.envMapIntensity)}function f(x,d,_){x.ior.value=d.ior,d.sheen>0&&(x.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),x.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(x.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,x.sheenColorMapTransform)),d.sheenRoughnessMap&&(x.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,x.sheenRoughnessMapTransform))),d.clearcoat>0&&(x.clearcoat.value=d.clearcoat,x.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(x.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,x.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(x.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===sn&&x.clearcoatNormalScale.value.negate())),d.dispersion>0&&(x.dispersion.value=d.dispersion),d.iridescence>0&&(x.iridescence.value=d.iridescence,x.iridescenceIOR.value=d.iridescenceIOR,x.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(x.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,x.iridescenceMapTransform)),d.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),d.transmission>0&&(x.transmission.value=d.transmission,x.transmissionSamplerMap.value=_.texture,x.transmissionSamplerSize.value.set(_.width,_.height),d.transmissionMap&&(x.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,x.transmissionMapTransform)),x.thickness.value=d.thickness,d.thicknessMap&&(x.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=d.attenuationDistance,x.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(x.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(x.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=d.specularIntensity,x.specularColor.value.copy(d.specularColor),d.specularColorMap&&(x.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,x.specularColorMapTransform)),d.specularIntensityMap&&(x.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,d){d.matcap&&(x.matcap.value=d.matcap)}function m(x,d){let _=t.get(d).light;x.referencePosition.value.setFromMatrixPosition(_.matrixWorld),x.nearDistance.value=_.shadow.camera.near,x.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Gx(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){let v=M.program;n.uniformBlockBinding(_,v)}function c(_,M){let v=i[_.id];v===void 0&&(g(_),v=h(_),i[_.id]=v,_.addEventListener("dispose",x));let T=M.program;n.updateUBOMapping(_,T);let w=t.render.frame;s[_.id]!==w&&(p(_),s[_.id]=w)}function h(_){let M=u();_.__bindingPointIndex=M;let v=r.createBuffer(),T=_.__size,w=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,v),v}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let M=i[_.id],v=_.uniforms,T=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let w=0,E=v.length;w<E;w++){let C=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,b=C.length;y<b;y++){let A=C[y];if(f(A,w,y,T)===!0){let z=A.__offset,N=Array.isArray(A.value)?A.value:[A.value],H=0;for(let B=0;B<N.length;B++){let k=N[B],G=m(k);typeof k=="number"||typeof k=="boolean"?(A.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,z+H,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=0,A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=0,A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=0):(k.toArray(A.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,M,v,T){let w=_.value,E=M+"_"+v;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{let C=T[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function g(_){let M=_.uniforms,v=0,T=16;for(let E=0,C=M.length;E<C;E++){let y=Array.isArray(M[E])?M[E]:[M[E]];for(let b=0,A=y.length;b<A;b++){let z=y[b],N=Array.isArray(z.value)?z.value:[z.value];for(let H=0,B=N.length;H<B;H++){let k=N[H],G=m(k),O=v%T,$=O%G.boundary,Q=O+$;v+=$,Q!==0&&T-Q<G.storage&&(v+=T-Q),z.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=G.storage}}}let w=v%T;return w>0&&(v+=T-w),_.__size=v,_.__cache={},this}function m(_){let M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),M}function x(_){let M=_.target;M.removeEventListener("dispose",x);let v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function d(){for(let _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:d}}var Io=class{constructor(t={}){let{canvas:e=Yd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),m=new Int32Array(4),x=null,d=null,_=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=be,this.toneMapping=wi,this.toneMappingExposure=1;let v=this,T=!1,w=0,E=0,C=null,y=-1,b=null,A=new Te,z=new Te,N=null,H=new wt(0),B=0,k=e.width,G=e.height,O=1,$=null,Q=null,P=new Te(0,0,k,G),ut=new Te(0,0,k,G),nt=!1,F=new Er,Z=!1,rt=!1,st=new re,dt=new re,It=new I,Lt=new Te,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function mt(){return C===null?O:1}let U=n;function Ot(R,X){return e.getContext(R,X)}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",St,!1),U===null){let X="webgl2";if(U=Ot(X,R),U===null)throw Ot(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let pt,Nt,_t,Jt,Ct,L,S,Y,it,ht,ot,Ft,Et,zt,le,vt,Bt,Yt,te,Ut,ce,ne,we,V;function At(){pt=new rg(U),pt.init(),ne=new kx(U,pt),Nt=new Qm(U,pt,t,ne),_t=new Dx(U,pt),Nt.reverseDepthBuffer&&p&&_t.buffers.depth.setReversed(!0),Jt=new lg(U),Ct=new Mx,L=new Nx(U,pt,_t,Ct,Nt,ne,Jt),S=new eg(v),Y=new sg(v),it=new mp(U),we=new Km(U,it),ht=new og(U,it,Jt,we),ot=new hg(U,ht,it,Jt),te=new cg(U,Nt,L),vt=new tg(Ct),Ft=new _x(v,S,Y,pt,Nt,we,vt),Et=new Vx(v,Ct),zt=new wx,le=new Cx(pt),Yt=new Jm(v,S,Y,_t,ot,f,l),Bt=new Lx(v,ot,Nt),V=new Gx(U,Jt,Nt,_t),Ut=new jm(U,pt,Jt),ce=new ag(U,pt,Jt),Jt.programs=Ft.programs,v.capabilities=Nt,v.extensions=pt,v.properties=Ct,v.renderLists=zt,v.shadowMap=Bt,v.state=_t,v.info=Jt}At();let et=new bc(v,U);this.xr=et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=pt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=pt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(R){R!==void 0&&(O=R,this.setSize(k,G,!1))},this.getSize=function(R){return R.set(k,G)},this.setSize=function(R,X,j=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=R,G=X,e.width=Math.floor(R*O),e.height=Math.floor(X*O),j===!0&&(e.style.width=R+"px",e.style.height=X+"px"),this.setViewport(0,0,R,X)},this.getDrawingBufferSize=function(R){return R.set(k*O,G*O).floor()},this.setDrawingBufferSize=function(R,X,j){k=R,G=X,O=j,e.width=Math.floor(R*j),e.height=Math.floor(X*j),this.setViewport(0,0,R,X)},this.getCurrentViewport=function(R){return R.copy(A)},this.getViewport=function(R){return R.copy(P)},this.setViewport=function(R,X,j,J){R.isVector4?P.set(R.x,R.y,R.z,R.w):P.set(R,X,j,J),_t.viewport(A.copy(P).multiplyScalar(O).round())},this.getScissor=function(R){return R.copy(ut)},this.setScissor=function(R,X,j,J){R.isVector4?ut.set(R.x,R.y,R.z,R.w):ut.set(R,X,j,J),_t.scissor(z.copy(ut).multiplyScalar(O).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(R){_t.setScissorTest(nt=R)},this.setOpaqueSort=function(R){$=R},this.setTransparentSort=function(R){Q=R},this.getClearColor=function(R){return R.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(R=!0,X=!0,j=!0){let J=0;if(R){let W=!1;if(C!==null){let yt=C.texture.format;W=yt===rh||yt===sh||yt===ih}if(W){let yt=C.texture.type,ct=yt===ai||yt===Yi||yt===br||yt===zs||yt===th||yt===eh,bt=Yt.getClearColor(),kt=Yt.getClearAlpha(),gt=bt.r,Qt=bt.g,Ht=bt.b;ct?(g[0]=gt,g[1]=Qt,g[2]=Ht,g[3]=kt,U.clearBufferuiv(U.COLOR,0,g)):(m[0]=gt,m[1]=Qt,m[2]=Ht,m[3]=kt,U.clearBufferiv(U.COLOR,0,m))}else J|=U.COLOR_BUFFER_BIT}X&&(J|=U.DEPTH_BUFFER_BIT),j&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),zt.dispose(),le.dispose(),Ct.dispose(),S.dispose(),Y.dispose(),ot.dispose(),we.dispose(),V.dispose(),Ft.dispose(),et.dispose(),et.removeEventListener("sessionstart",Qs),et.removeEventListener("sessionend",D),q.stop()};function lt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;let R=Jt.autoReset,X=Bt.enabled,j=Bt.autoUpdate,J=Bt.needsUpdate,W=Bt.type;At(),Jt.autoReset=R,Bt.enabled=X,Bt.autoUpdate=j,Bt.needsUpdate=J,Bt.type=W}function St(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Kt(R){let X=R.target;X.removeEventListener("dispose",Kt),Re(X)}function Re(R){Ye(R),Ct.remove(R)}function Ye(R){let X=Ct.get(R).programs;X!==void 0&&(X.forEach(function(j){Ft.releaseProgram(j)}),R.isShaderMaterial&&Ft.releaseShaderCache(R))}this.renderBufferDirect=function(R,X,j,J,W,yt){X===null&&(X=jt);let ct=W.isMesh&&W.matrixWorld.determinant()<0,bt=un(R,X,j,J,W);_t.setMaterial(J,ct);let kt=j.index,gt=1;if(J.wireframe===!0){if(kt=ht.getWireframeAttribute(j),kt===void 0)return;gt=2}let Qt=j.drawRange,Ht=j.attributes.position,ie=Qt.start*gt,me=(Qt.start+Qt.count)*gt;yt!==null&&(ie=Math.max(ie,yt.start*gt),me=Math.min(me,(yt.start+yt.count)*gt)),kt!==null?(ie=Math.max(ie,0),me=Math.min(me,kt.count)):Ht!=null&&(ie=Math.max(ie,0),me=Math.min(me,Ht.count));let ve=me-ie;if(ve<0||ve===1/0)return;we.setup(W,J,bt,j,kt);let fn,ye=Ut;if(kt!==null&&(fn=it.get(kt),ye=ce,ye.setIndex(fn)),W.isMesh)J.wireframe===!0?(_t.setLineWidth(J.wireframeLinewidth*mt()),ye.setMode(U.LINES)):ye.setMode(U.TRIANGLES);else if(W.isLine){let Xt=J.linewidth;Xt===void 0&&(Xt=1),_t.setLineWidth(Xt*mt()),W.isLineSegments?ye.setMode(U.LINES):W.isLineLoop?ye.setMode(U.LINE_LOOP):ye.setMode(U.LINE_STRIP)}else W.isPoints?ye.setMode(U.POINTS):W.isSprite&&ye.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)ye.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))ye.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Xt=W._multiDrawStarts,Kn=W._multiDrawCounts,_e=W._multiDrawCount,Cn=kt?it.get(kt).bytesPerElement:1,ss=Ct.get(J).currentProgram.getUniforms();for(let gn=0;gn<_e;gn++)ss.setValue(U,"_gl_DrawID",gn),ye.render(Xt[gn]/Cn,Kn[gn])}else if(W.isInstancedMesh)ye.renderInstances(ie,ve,W.count);else if(j.isInstancedBufferGeometry){let Xt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Kn=Math.min(j.instanceCount,Xt);ye.renderInstances(ie,ve,Kn)}else ye.render(ie,ve)};function ge(R,X,j){R.transparent===!0&&R.side===Ae&&R.forceSinglePass===!1?(R.side=sn,R.needsUpdate=!0,pe(R,X,j),R.side=Si,R.needsUpdate=!0,pe(R,X,j),R.side=Ae):pe(R,X,j)}this.compile=function(R,X,j=null){j===null&&(j=R),d=le.get(j),d.init(X),M.push(d),j.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),R!==j&&R.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(d.pushLight(W),W.castShadow&&d.pushShadow(W))}),d.setupLights();let J=new Set;return R.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let yt=W.material;if(yt)if(Array.isArray(yt))for(let ct=0;ct<yt.length;ct++){let bt=yt[ct];ge(bt,j,W),J.add(bt)}else ge(yt,j,W),J.add(yt)}),M.pop(),d=null,J},this.compileAsync=function(R,X,j=null){let J=this.compile(R,X,j);return new Promise(W=>{function yt(){if(J.forEach(function(ct){Ct.get(ct).currentProgram.isReady()&&J.delete(ct)}),J.size===0){W(R);return}setTimeout(yt,10)}pt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ze=null;function tn(R){Ze&&Ze(R)}function Qs(){q.stop()}function D(){q.start()}let q=new hf;q.setAnimationLoop(tn),typeof self<"u"&&q.setContext(self),this.setAnimationLoop=function(R){Ze=R,et.setAnimationLoop(R),R===null?q.stop():q.start()},et.addEventListener("sessionstart",Qs),et.addEventListener("sessionend",D),this.render=function(R,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(X),X=et.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,X,C),d=le.get(R,M.length),d.init(X),M.push(d),dt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),F.setFromProjectionMatrix(dt),rt=this.localClippingEnabled,Z=vt.init(this.clippingPlanes,rt),x=zt.get(R,_.length),x.init(),_.push(x),et.enabled===!0&&et.isPresenting===!0){let yt=v.xr.getDepthSensingMesh();yt!==null&&Vt(yt,X,-1/0,v.sortObjects)}Vt(R,X,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,Q),at=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,at&&Yt.addToRenderList(x,R),this.info.render.frame++,Z===!0&&vt.beginShadows();let j=d.state.shadowsArray;Bt.render(j,R,X),Z===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=x.opaque,W=x.transmissive;if(d.setupLights(),X.isArrayCamera){let yt=X.cameras;if(W.length>0)for(let ct=0,bt=yt.length;ct<bt;ct++){let kt=yt[ct];xt(J,W,R,kt)}at&&Yt.render(R);for(let ct=0,bt=yt.length;ct<bt;ct++){let kt=yt[ct];ee(x,R,kt,kt.viewport)}}else W.length>0&&xt(J,W,R,X),at&&Yt.render(R),ee(x,R,X);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,X),we.resetDefaultState(),y=-1,b=null,M.pop(),M.length>0?(d=M[M.length-1],Z===!0&&vt.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function Vt(R,X,j,J){if(R.visible===!1)return;if(R.layers.test(X.layers)){if(R.isGroup)j=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(X);else if(R.isLight)d.pushLight(R),R.castShadow&&d.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||F.intersectsSprite(R)){J&&Lt.setFromMatrixPosition(R.matrixWorld).applyMatrix4(dt);let ct=ot.update(R),bt=R.material;bt.visible&&x.push(R,ct,bt,j,Lt.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||F.intersectsObject(R))){let ct=ot.update(R),bt=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Lt.copy(R.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Lt.copy(ct.boundingSphere.center)),Lt.applyMatrix4(R.matrixWorld).applyMatrix4(dt)),Array.isArray(bt)){let kt=ct.groups;for(let gt=0,Qt=kt.length;gt<Qt;gt++){let Ht=kt[gt],ie=bt[Ht.materialIndex];ie&&ie.visible&&x.push(R,ct,ie,j,Lt.z,Ht)}}else bt.visible&&x.push(R,ct,bt,j,Lt.z,null)}}let yt=R.children;for(let ct=0,bt=yt.length;ct<bt;ct++)Vt(yt[ct],X,j,J)}function ee(R,X,j,J){let W=R.opaque,yt=R.transmissive,ct=R.transparent;d.setupLightsView(j),Z===!0&&vt.setGlobalState(v.clippingPlanes,j),J&&_t.viewport(A.copy(J)),W.length>0&&Gt(W,X,j),yt.length>0&&Gt(yt,X,j),ct.length>0&&Gt(ct,X,j),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function xt(R,X,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[J.id]===void 0&&(d.state.transmissionRenderTarget[J.id]=new je(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?Mn:ai,minFilter:$i,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:he.workingColorSpace}));let yt=d.state.transmissionRenderTarget[J.id],ct=J.viewport||A;yt.setSize(ct.z,ct.w);let bt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(H),B=v.getClearAlpha(),B<1&&v.setClearColor(16777215,.5),v.clear(),at&&Yt.render(j);let kt=v.toneMapping;v.toneMapping=wi;let gt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),d.setupLightsView(J),Z===!0&&vt.setGlobalState(v.clippingPlanes,J),Gt(R,j,J),L.updateMultisampleRenderTarget(yt),L.updateRenderTargetMipmap(yt),pt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Ht=0,ie=X.length;Ht<ie;Ht++){let me=X[Ht],ve=me.object,fn=me.geometry,ye=me.material,Xt=me.group;if(ye.side===Ae&&ve.layers.test(J.layers)){let Kn=ye.side;ye.side=sn,ye.needsUpdate=!0,Zt(ve,j,J,fn,ye,Xt),ye.side=Kn,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(L.updateMultisampleRenderTarget(yt),L.updateRenderTargetMipmap(yt))}v.setRenderTarget(bt),v.setClearColor(H,B),gt!==void 0&&(J.viewport=gt),v.toneMapping=kt}function Gt(R,X,j){let J=X.isScene===!0?X.overrideMaterial:null;for(let W=0,yt=R.length;W<yt;W++){let ct=R[W],bt=ct.object,kt=ct.geometry,gt=J===null?ct.material:J,Qt=ct.group;bt.layers.test(j.layers)&&Zt(bt,X,j,kt,gt,Qt)}}function Zt(R,X,j,J,W,yt){R.onBeforeRender(v,X,j,J,W,yt),R.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),W.onBeforeRender(v,X,j,J,R,yt),W.transparent===!0&&W.side===Ae&&W.forceSinglePass===!1?(W.side=sn,W.needsUpdate=!0,v.renderBufferDirect(j,X,J,W,R,yt),W.side=Si,W.needsUpdate=!0,v.renderBufferDirect(j,X,J,W,R,yt),W.side=Ae):v.renderBufferDirect(j,X,J,W,R,yt),R.onAfterRender(v,X,j,J,W,yt)}function pe(R,X,j){X.isScene!==!0&&(X=jt);let J=Ct.get(R),W=d.state.lights,yt=d.state.shadowsArray,ct=W.state.version,bt=Ft.getParameters(R,W.state,yt,X,j),kt=Ft.getProgramCacheKey(bt),gt=J.programs;J.environment=R.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(R.isMeshStandardMaterial?Y:S).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?X.environmentRotation:R.envMapRotation,gt===void 0&&(R.addEventListener("dispose",Kt),gt=new Map,J.programs=gt);let Qt=gt.get(kt);if(Qt!==void 0){if(J.currentProgram===Qt&&J.lightsStateVersion===ct)return Ui(R,bt),Qt}else bt.uniforms=Ft.getUniforms(R),R.onBeforeCompile(bt,v),Qt=Ft.acquireProgram(bt,kt),gt.set(kt,Qt),J.uniforms=bt.uniforms;let Ht=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ht.clippingPlanes=vt.uniform),Ui(R,bt),J.needsLights=Ni(R),J.lightsStateVersion=ct,J.needsLights&&(Ht.ambientLightColor.value=W.state.ambient,Ht.lightProbe.value=W.state.probe,Ht.directionalLights.value=W.state.directional,Ht.directionalLightShadows.value=W.state.directionalShadow,Ht.spotLights.value=W.state.spot,Ht.spotLightShadows.value=W.state.spotShadow,Ht.rectAreaLights.value=W.state.rectArea,Ht.ltc_1.value=W.state.rectAreaLTC1,Ht.ltc_2.value=W.state.rectAreaLTC2,Ht.pointLights.value=W.state.point,Ht.pointLightShadows.value=W.state.pointShadow,Ht.hemisphereLights.value=W.state.hemi,Ht.directionalShadowMap.value=W.state.directionalShadowMap,Ht.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ht.spotShadowMap.value=W.state.spotShadowMap,Ht.spotLightMatrix.value=W.state.spotLightMatrix,Ht.spotLightMap.value=W.state.spotLightMap,Ht.pointShadowMap.value=W.state.pointShadowMap,Ht.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Qt,J.uniformsList=null,Qt}function mn(R){if(R.uniformsList===null){let X=R.currentProgram.getUniforms();R.uniformsList=Cs.seqWithValue(X.seq,R.uniforms)}return R.uniformsList}function Ui(R,X){let j=Ct.get(R);j.outputColorSpace=X.outputColorSpace,j.batching=X.batching,j.batchingColor=X.batchingColor,j.instancing=X.instancing,j.instancingColor=X.instancingColor,j.instancingMorph=X.instancingMorph,j.skinning=X.skinning,j.morphTargets=X.morphTargets,j.morphNormals=X.morphNormals,j.morphColors=X.morphColors,j.morphTargetsCount=X.morphTargetsCount,j.numClippingPlanes=X.numClippingPlanes,j.numIntersection=X.numClipIntersection,j.vertexAlphas=X.vertexAlphas,j.vertexTangents=X.vertexTangents,j.toneMapping=X.toneMapping}function un(R,X,j,J,W){X.isScene!==!0&&(X=jt),L.resetTextureUnits();let yt=X.fog,ct=J.isMeshStandardMaterial?X.environment:null,bt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:qs,kt=(J.isMeshStandardMaterial?Y:S).get(J.envMap||ct),gt=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qt=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ht=!!j.morphAttributes.position,ie=!!j.morphAttributes.normal,me=!!j.morphAttributes.color,ve=wi;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ve=v.toneMapping);let fn=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ye=fn!==void 0?fn.length:0,Xt=Ct.get(J),Kn=d.state.lights;if(Z===!0&&(rt===!0||R!==b)){let En=R===b&&J.id===y;vt.setState(J,R,En)}let _e=!1;J.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Kn.state.version||Xt.outputColorSpace!==bt||W.isBatchedMesh&&Xt.batching===!1||!W.isBatchedMesh&&Xt.batching===!0||W.isBatchedMesh&&Xt.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Xt.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Xt.instancing===!1||!W.isInstancedMesh&&Xt.instancing===!0||W.isSkinnedMesh&&Xt.skinning===!1||!W.isSkinnedMesh&&Xt.skinning===!0||W.isInstancedMesh&&Xt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Xt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Xt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Xt.instancingMorph===!1&&W.morphTexture!==null||Xt.envMap!==kt||J.fog===!0&&Xt.fog!==yt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==vt.numPlanes||Xt.numIntersection!==vt.numIntersection)||Xt.vertexAlphas!==gt||Xt.vertexTangents!==Qt||Xt.morphTargets!==Ht||Xt.morphNormals!==ie||Xt.morphColors!==me||Xt.toneMapping!==ve||Xt.morphTargetsCount!==ye)&&(_e=!0):(_e=!0,Xt.__version=J.version);let Cn=Xt.currentProgram;_e===!0&&(Cn=pe(J,X,W));let ss=!1,gn=!1,er=!1,Ie=Cn.getUniforms(),Bn=Xt.uniforms;if(_t.useProgram(Cn.program)&&(ss=!0,gn=!0,er=!0),J.id!==y&&(y=J.id,gn=!0),ss||b!==R){_t.buffers.depth.getReversed()?(st.copy(R.projectionMatrix),Jd(st),Kd(st),Ie.setValue(U,"projectionMatrix",st)):Ie.setValue(U,"projectionMatrix",R.projectionMatrix),Ie.setValue(U,"viewMatrix",R.matrixWorldInverse);let di=Ie.map.cameraPosition;di!==void 0&&di.setValue(U,It.setFromMatrixPosition(R.matrixWorld)),Nt.logarithmicDepthBuffer&&Ie.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ie.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,gn=!0,er=!0)}if(W.isSkinnedMesh){Ie.setOptional(U,W,"bindMatrix"),Ie.setOptional(U,W,"bindMatrixInverse");let En=W.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),Ie.setValue(U,"boneTexture",En.boneTexture,L))}W.isBatchedMesh&&(Ie.setOptional(U,W,"batchingTexture"),Ie.setValue(U,"batchingTexture",W._matricesTexture,L),Ie.setOptional(U,W,"batchingIdTexture"),Ie.setValue(U,"batchingIdTexture",W._indirectTexture,L),Ie.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&Ie.setValue(U,"batchingColorTexture",W._colorsTexture,L));let nr=j.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&te.update(W,j,Cn),(gn||Xt.receiveShadow!==W.receiveShadow)&&(Xt.receiveShadow=W.receiveShadow,Ie.setValue(U,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Bn.envMap.value=kt,Bn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(Bn.envMapIntensity.value=X.environmentIntensity),gn&&(Ie.setValue(U,"toneMappingExposure",v.toneMappingExposure),Xt.needsLights&&tr(Bn,er),yt&&J.fog===!0&&Et.refreshFogUniforms(Bn,yt),Et.refreshMaterialUniforms(Bn,J,O,G,d.state.transmissionRenderTarget[R.id]),Cs.upload(U,mn(Xt),Bn,L)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Cs.upload(U,mn(Xt),Bn,L),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ie.setValue(U,"center",W.center),Ie.setValue(U,"modelViewMatrix",W.modelViewMatrix),Ie.setValue(U,"normalMatrix",W.normalMatrix),Ie.setValue(U,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let En=J.uniformsGroups;for(let di=0,pi=En.length;di<pi;di++){let Rh=En[di];V.update(Rh,Cn),V.bind(Rh,Cn)}}return Cn}function tr(R,X){R.ambientLightColor.needsUpdate=X,R.lightProbe.needsUpdate=X,R.directionalLights.needsUpdate=X,R.directionalLightShadows.needsUpdate=X,R.pointLights.needsUpdate=X,R.pointLightShadows.needsUpdate=X,R.spotLights.needsUpdate=X,R.spotLightShadows.needsUpdate=X,R.rectAreaLights.needsUpdate=X,R.hemisphereLights.needsUpdate=X}function Ni(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,X,j){Ct.get(R.texture).__webglTexture=X,Ct.get(R.depthTexture).__webglTexture=j;let J=Ct.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||pt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,X){let j=Ct.get(R);j.__webglFramebuffer=X,j.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(R,X=0,j=0){C=R,w=X,E=j;let J=!0,W=null,yt=!1,ct=!1;if(R){let kt=Ct.get(R);if(kt.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(kt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(kt.__hasExternalTextures)L.rebindTextures(R,Ct.get(R.texture).__webglTexture,Ct.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Ht=R.depthTexture;if(kt.__boundDepthTexture!==Ht){if(Ht!==null&&Ct.has(Ht)&&(R.width!==Ht.image.width||R.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}let gt=R.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(ct=!0);let Qt=Ct.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Qt[X])?W=Qt[X][j]:W=Qt[X],yt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?W=Ct.get(R).__webglMultisampledFramebuffer:Array.isArray(Qt)?W=Qt[j]:W=Qt,A.copy(R.viewport),z.copy(R.scissor),N=R.scissorTest}else A.copy(P).multiplyScalar(O).floor(),z.copy(ut).multiplyScalar(O).floor(),N=nt;if(_t.bindFramebuffer(U.FRAMEBUFFER,W)&&J&&_t.drawBuffers(R,W),_t.viewport(A),_t.scissor(z),_t.setScissorTest(N),yt){let kt=Ct.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+X,kt.__webglTexture,j)}else if(ct){let kt=Ct.get(R.texture),gt=X||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,kt.__webglTexture,j||0,gt)}y=-1},this.readRenderTargetPixels=function(R,X,j,J,W,yt,ct){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ct!==void 0&&(bt=bt[ct]),bt){_t.bindFramebuffer(U.FRAMEBUFFER,bt);try{let kt=R.texture,gt=kt.format,Qt=kt.type;if(!Nt.textureFormatReadable(gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Nt.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=R.width-J&&j>=0&&j<=R.height-W&&U.readPixels(X,j,J,W,ne.convert(gt),ne.convert(Qt),yt)}finally{let kt=C!==null?Ct.get(C).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(R,X,j,J,W,yt,ct){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Ct.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ct!==void 0&&(bt=bt[ct]),bt){let kt=R.texture,gt=kt.format,Qt=kt.type;if(!Nt.textureFormatReadable(gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Nt.textureTypeReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=R.width-J&&j>=0&&j<=R.height-W){_t.bindFramebuffer(U.FRAMEBUFFER,bt);let Ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ht),U.bufferData(U.PIXEL_PACK_BUFFER,yt.byteLength,U.STREAM_READ),U.readPixels(X,j,J,W,ne.convert(gt),ne.convert(Qt),0);let ie=C!==null?Ct.get(C).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,ie);let me=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Zd(U,me,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,yt),U.deleteBuffer(Ht),U.deleteSync(me),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,X=null,j=0){R.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,R=arguments[1]);let J=Math.pow(2,-j),W=Math.floor(R.image.width*J),yt=Math.floor(R.image.height*J),ct=X!==null?X.x:0,bt=X!==null?X.y:0;L.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,ct,bt,W,yt),_t.unbindTexture()},this.copyTextureToTexture=function(R,X,j=null,J=null,W=0){R.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],X=arguments[2],W=arguments[3]||0,j=null);let yt,ct,bt,kt,gt,Qt,Ht,ie,me,ve=R.isCompressedTexture?R.mipmaps[W]:R.image;j!==null?(yt=j.max.x-j.min.x,ct=j.max.y-j.min.y,bt=j.isBox3?j.max.z-j.min.z:1,kt=j.min.x,gt=j.min.y,Qt=j.isBox3?j.min.z:0):(yt=ve.width,ct=ve.height,bt=ve.depth||1,kt=0,gt=0,Qt=0),J!==null?(Ht=J.x,ie=J.y,me=J.z):(Ht=0,ie=0,me=0);let fn=ne.convert(X.format),ye=ne.convert(X.type),Xt;X.isData3DTexture?(L.setTexture3D(X,0),Xt=U.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),Xt=U.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),Xt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,X.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,X.unpackAlignment);let Kn=U.getParameter(U.UNPACK_ROW_LENGTH),_e=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Cn=U.getParameter(U.UNPACK_SKIP_PIXELS),ss=U.getParameter(U.UNPACK_SKIP_ROWS),gn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ve.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ve.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,kt),U.pixelStorei(U.UNPACK_SKIP_ROWS,gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Qt);let er=R.isDataArrayTexture||R.isData3DTexture,Ie=X.isDataArrayTexture||X.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Bn=Ct.get(R),nr=Ct.get(X),En=Ct.get(Bn.__renderTarget),di=Ct.get(nr.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,En.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,di.__webglFramebuffer);for(let pi=0;pi<bt;pi++)er&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(R).__webglTexture,W,Qt+pi),R.isDepthTexture?(Ie&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ct.get(X).__webglTexture,W,me+pi),U.blitFramebuffer(kt,gt,yt,ct,Ht,ie,yt,ct,U.DEPTH_BUFFER_BIT,U.NEAREST)):Ie?U.copyTexSubImage3D(Xt,W,Ht,ie,me+pi,kt,gt,yt,ct):U.copyTexSubImage2D(Xt,W,Ht,ie,me+pi,kt,gt,yt,ct);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ie?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Xt,W,Ht,ie,me,yt,ct,bt,fn,ye,ve.data):X.isCompressedArrayTexture?U.compressedTexSubImage3D(Xt,W,Ht,ie,me,yt,ct,bt,fn,ve.data):U.texSubImage3D(Xt,W,Ht,ie,me,yt,ct,bt,fn,ye,ve):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,W,Ht,ie,yt,ct,fn,ye,ve.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,W,Ht,ie,ve.width,ve.height,fn,ve.data):U.texSubImage2D(U.TEXTURE_2D,W,Ht,ie,yt,ct,fn,ye,ve);U.pixelStorei(U.UNPACK_ROW_LENGTH,Kn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_e),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Cn),U.pixelStorei(U.UNPACK_SKIP_ROWS,ss),U.pixelStorei(U.UNPACK_SKIP_IMAGES,gn),W===0&&X.generateMipmaps&&U.generateMipmap(Xt),_t.unbindTexture()},this.copyTextureToTexture3D=function(R,X,j=null,J=null,W=0){return R.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,J=arguments[1]||null,R=arguments[2],X=arguments[3],W=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,X,j,J,W)},this.initRenderTarget=function(R){Ct.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),_t.unbindTexture()},this.resetState=function(){w=0,E=0,C=null,_t.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=he._getDrawingBufferColorSpace(t),e.unpackColorSpace=he._getUnpackColorSpace()}};var Lo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Zi=class extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ke,this.environmentIntensity=1,this.environmentRotation=new Ke,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},zo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=oc,this.updateRanges=[],this.version=0,this.uuid=Gn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ln=new I,Sr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=zn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ee(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=zn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=zn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=zn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=zn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ee(e,this.array),n=Ee(n,this.array),i=Ee(i,this.array),s=Ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ue(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pn=class extends Wn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ys,ar=new I,_s=new I,Ms=new I,bs=new tt,lr=new tt,mf=new re,so=new I,cr=new I,ro=new I,Ru=new tt,pl=new tt,Cu=new tt,_n=class extends ke{constructor(t=new pn){if(super(),this.isSprite=!0,this.type="Sprite",ys===void 0){ys=new oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new zo(e,5);ys.setIndex([0,1,2,0,2,3]),ys.setAttribute("position",new Sr(n,3,0,!1)),ys.setAttribute("uv",new Sr(n,2,3,!1))}this.geometry=ys,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),_s.setFromMatrixScale(this.matrixWorld),mf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&_s.multiplyScalar(-Ms.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;oo(so.set(-.5,-.5,0),Ms,o,_s,i,s),oo(cr.set(.5,-.5,0),Ms,o,_s,i,s),oo(ro.set(.5,.5,0),Ms,o,_s,i,s),Ru.set(0,0),pl.set(1,0),Cu.set(1,1);let a=t.ray.intersectTriangle(so,cr,ro,!1,ar);if(a===null&&(oo(cr.set(-.5,.5,0),Ms,o,_s,i,s),pl.set(0,1),a=t.ray.intersectTriangle(so,ro,cr,!1,ar),a===null))return;let l=t.ray.origin.distanceTo(ar);l<t.near||l>t.far||e.push({distance:l,point:ar.clone(),uv:bi.getInterpolation(ar,so,cr,ro,Ru,pl,Cu,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function oo(r,t,e,n,i,s){bs.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(lr.x=s*bs.x-i*bs.y,lr.y=i*bs.x+s*bs.y):lr.copy(bs),r.copy(t),r.x+=lr.x,r.y+=lr.y,r.applyMatrix4(mf)}var wc=class extends dn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=yn,h=yn,u,p){super(null,o,a,l,c,h,i,s,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Tr=class extends ue{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ws=new re,Pu=new re,ao=[],Iu=new li,Wx=new re,hr=new K,ur=new ci,Ue=class extends K{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Tr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Wx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new li),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),Iu.copy(t.boundingBox).applyMatrix4(ws),this.boundingBox.union(Iu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ci),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ws),ur.copy(t.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(ur)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(hr.geometry=this.geometry,hr.material=this.material,hr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ur.copy(this.boundingSphere),ur.applyMatrix4(n),t.ray.intersectsSphere(ur)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ws),Pu.multiplyMatrices(n,ws),hr.matrixWorld=Pu,hr.raycast(t,ao);for(let o=0,a=ao.length;o<a;o++){let l=ao[o];l.instanceId=s,l.object=this,e.push(l)}ao.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Tr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new wc(new Float32Array(i*this.count),i,this.count,nh,On));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Ec=class extends Wn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Do=new I,Uo=new I,Lu=new re,fr=new wr,lo=new ci,ml=new I,zu=new I,Sc=class extends ke{constructor(t=new oe,e=new Ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Do.fromBufferAttribute(e,i-1),Uo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Do.distanceTo(Uo);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lo.copy(n.boundingSphere),lo.applyMatrix4(i),lo.radius+=s,t.ray.intersectsSphere(lo)===!1)return;Lu.copy(i).invert(),fr.copy(t.ray).applyMatrix4(Lu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let m=f,x=g-1;m<x;m+=c){let d=h.getX(m),_=h.getX(m+1),M=co(this,t,fr,l,d,_);M&&e.push(M)}if(this.isLineLoop){let m=h.getX(g-1),x=h.getX(f),d=co(this,t,fr,l,m,x);d&&e.push(d)}}else{let f=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let m=f,x=g-1;m<x;m+=c){let d=co(this,t,fr,l,m,m+1);d&&e.push(d)}if(this.isLineLoop){let m=co(this,t,fr,l,g-1,f);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function co(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(Do.fromBufferAttribute(o,i),Uo.fromBufferAttribute(o,s),e.distanceSqToSegment(Do,Uo,ml,zu)>n)return;ml.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(ml);if(!(l<t.near||l>t.far))return{distance:l,point:zu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Du=new I,Uu=new I,No=class extends Sc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Du.fromBufferAttribute(e,i),Uu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Du.distanceTo(Uu);t.setAttribute("lineDistance",new $t(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ji=class extends Wn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Nu=new re,Tc=new wr,ho=new ci,uo=new I,hi=class extends ke{constructor(t=new oe,e=new Ji){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ho.copy(n.boundingSphere),ho.applyMatrix4(i),ho.radius+=s,t.ray.intersectsSphere(ho)===!1)return;Nu.copy(i).invert(),Tc.copy(t.ray).applyMatrix4(Nu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=p,m=f;g<m;g++){let x=c.getX(g);uo.fromBufferAttribute(u,x),ku(uo,x,l,i,t,e,this)}}else{let p=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=p,m=f;g<m;g++)uo.fromBufferAttribute(u,g),ku(uo,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ku(r,t,e,n,i,s,o){let a=Tc.distanceSqToPoint(r);if(a<e){let l=new I;Tc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Le=class extends dn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],p=n[i+1]-h,f=(o-h)/p;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new tt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],s=[],o=[],a=new I,l=new re;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ge(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ge(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ar=class extends Tn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,f=c-this.aY;l=p*h-f*u+this.aX,c=p*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Ac=class extends Ar{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function lh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let p=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,f*=h,i(o,a,p,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var fo=new I,gl=new lh,xl=new lh,vl=new lh,Rr=class extends Tn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(fo.subVectors(i[0],i[1]).add(i[0]),c=fo);let u=i[a%s],p=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(fo.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=fo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(p),f),x=Math.pow(p.distanceToSquared(h),f);m<1e-4&&(m=1),g<1e-4&&(g=m),x<1e-4&&(x=m),gl.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,m,x),xl.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,m,x),vl.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,m,x)}else this.curveType==="catmullrom"&&(gl.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),xl.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),vl.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(gl.calc(l),xl.calc(l),vl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Bu(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Xx(r,t){let e=1-r;return e*e*t}function qx(r,t){return 2*(1-r)*r*t}function $x(r,t){return r*r*t}function yr(r,t,e,n){return Xx(r,t)+qx(r,e)+$x(r,n)}function Yx(r,t){let e=1-r;return e*e*e*t}function Zx(r,t){let e=1-r;return 3*e*e*r*t}function Jx(r,t){return 3*(1-r)*r*r*t}function Kx(r,t){return r*r*r*t}function _r(r,t,e,n,i){return Yx(r,t)+Zx(r,e)+Jx(r,n)+Kx(r,i)}var ko=class extends Tn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,i.x,s.x,o.x,a.x),_r(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rc=class extends Tn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(_r(t,i.x,s.x,o.x,a.x),_r(t,i.y,s.y,o.y,a.y),_r(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Bo=class extends Tn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends Tn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fo=class extends Tn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(yr(t,i.x,s.x,o.x),yr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Os=class extends Tn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(yr(t,i.x,s.x,o.x),yr(t,i.y,s.y,o.y),yr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ho=class extends Tn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Bu(a,l.x,c.x,h.x,u.x),Bu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}},Oo=Object.freeze({__proto__:null,ArcCurve:Ac,CatmullRomCurve3:Rr,CubicBezierCurve:ko,CubicBezierCurve3:Rc,EllipseCurve:Ar,LineCurve:Bo,LineCurve3:Cc,QuadraticBezierCurve:Fo,QuadraticBezierCurve3:Os,SplineCurve:Ho}),Pc=class extends Tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Oo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Oo[i.type]().fromJSON(i))}return this}},Vo=class extends Pc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Bo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Fo(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new ko(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ho(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Ar(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Go=class r extends oe{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ge(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,p=new tt,f=new I,g=new I,m=new I,x=0,d=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:x=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,f.x=d*1,f.y=-x,f.z=d*0,m.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[_+1].x-t[_].x,d=t[_+1].y-t[_].y,f.x=d*1,f.y=-x,f.z=d*0,g.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),l.push(f.x,f.y,f.z),m.copy(g)}for(let _=0;_<=e;_++){let M=n+_*h*i,v=Math.sin(M),T=Math.cos(M);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*T,o.push(u.x,u.y,u.z),p.x=_/e,p.y=w/(t.length-1),a.push(p.x,p.y);let E=l[3*w+0]*v,C=l[3*w+1],y=l[3*w+0]*T;c.push(E,C,y)}}for(let _=0;_<e;_++)for(let M=0;M<t.length-1;M++){let v=M+_*t.length,T=v,w=v+t.length,E=v+t.length+1,C=v+1;s.push(T,w,C),s.push(E,C,w)}this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("uv",new $t(a,2)),this.setAttribute("normal",new $t(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ai=class r extends oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new $t(o,3)),this.setAttribute("normal",new $t(a,3)),this.setAttribute("uv",new $t(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wt=class r extends oe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],p=[],f=[],g=0,m=[],x=n/2,d=0;_(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(f,2));function _(){let v=new I,T=new I,w=0,E=(e-t)/n;for(let C=0;C<=s;C++){let y=[],b=C/s,A=b*(e-t)+t;for(let z=0;z<=i;z++){let N=z/i,H=N*l+a,B=Math.sin(H),k=Math.cos(H);T.x=A*B,T.y=-b*n+x,T.z=A*k,u.push(T.x,T.y,T.z),v.set(B,E,k).normalize(),p.push(v.x,v.y,v.z),f.push(N,1-b),y.push(g++)}m.push(y)}for(let C=0;C<i;C++)for(let y=0;y<s;y++){let b=m[y][C],A=m[y+1][C],z=m[y+1][C+1],N=m[y][C+1];(t>0||y!==0)&&(h.push(b,A,N),w+=3),(e>0||y!==s-1)&&(h.push(A,z,N),w+=3)}c.addGroup(d,w,0),d+=w}function M(v){let T=g,w=new tt,E=new I,C=0,y=v===!0?t:e,b=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,x*b,0),p.push(0,b,0),f.push(.5,.5),g++;let A=g;for(let z=0;z<=i;z++){let H=z/i*l+a,B=Math.cos(H),k=Math.sin(H);E.x=y*k,E.y=x*b,E.z=y*B,u.push(E.x,E.y,E.z),p.push(0,b,0),w.x=B*.5+.5,w.y=k*.5*b+.5,f.push(w.x,w.y),g++}for(let z=0;z<i;z++){let N=T+z,H=A+z;v===!0?h.push(H,H+1,N):h.push(H+1,H,N),C+=3}c.addGroup(d,C,v===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Xn=class r extends Wt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Un=class extends Vo{constructor(t){super(t),this.uuid=Gn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Vo().fromJSON(i))}return this}},jx={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=gf(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,p,f;if(n&&(s=iv(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],p=r[g+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);f=Math.max(c-a,h-l),f=f!==0?32767/f:0}return Cr(s,o,e,a,l,f,0),o}};function gf(r,t,e,n,i){let s,o;if(i===pv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Fu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Fu(s,r[s],r[s+1],o);return o&&Qo(o,o.next)&&(Ir(o),o=o.next),o}function Ki(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Qo(e,e.next)||De(e.prev,e,e.next)===0)){if(Ir(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Cr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&lv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?tv(r,n,i,s):Qx(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Ir(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=ev(Ki(r),t,e),Cr(r,t,e,n,i,s,2)):o===2&&nv(r,t,e,n,i,s):Cr(Ki(r),t,e,n,i,s,1);break}}}function Qx(r){let t=r.prev,e=r,n=r.next;if(De(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,p=i>s?i>o?i:o:s>o?s:o,f=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=f&&Ss(i,a,s,l,o,c,g.x,g.y)&&De(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function tv(r,t,e,n){let i=r.prev,s=r,o=r.next;if(De(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,p=o.y,f=a<l?a<c?a:c:l<c?l:c,g=h<u?h<p?h:p:u<p?u:p,m=a>l?a>c?a:c:l>c?l:c,x=h>u?h>p?h:p:u>p?u:p,d=Ic(f,g,t,e,n),_=Ic(m,x,t,e,n),M=r.prevZ,v=r.nextZ;for(;M&&M.z>=d&&v&&v.z<=_;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=x&&M!==i&&M!==o&&Ss(a,h,l,u,c,p,M.x,M.y)&&De(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Ss(a,h,l,u,c,p,v.x,v.y)&&De(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=d;){if(M.x>=f&&M.x<=m&&M.y>=g&&M.y<=x&&M!==i&&M!==o&&Ss(a,h,l,u,c,p,M.x,M.y)&&De(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=_;){if(v.x>=f&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Ss(a,h,l,u,c,p,v.x,v.y)&&De(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function ev(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Qo(i,s)&&xf(i,n,n.next,s)&&Pr(i,s)&&Pr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Ir(n),Ir(n.next),n=r=s),n=n.next}while(n!==r);return Ki(n)}function nv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&uv(o,a)){let l=vf(o,a);o=Ki(o,o.next),l=Ki(l,l.next),Cr(o,t,e,n,i,s,0),Cr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function iv(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=gf(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(hv(c));for(i.sort(sv),s=0;s<i.length;s++)e=rv(i[s],e);return e}function sv(r,t){return r.x-t.x}function rv(r,t){let e=ov(r,t);if(!e)return t;let n=vf(e,r);return Ki(n,n.next),Ki(e,e.next)}function ov(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=s&&p>n&&(n=p,i=e.x<e.next.x?e:e.next,p===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ss(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Pr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&av(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function av(r,t){return De(r.prev,r,t.prev)<0&&De(t.next,r,r.next)<0}function lv(r,t,e,n){let i=r;do i.z===0&&(i.z=Ic(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,cv(i)}function cv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Ic(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function hv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ss(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function uv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!fv(r,t)&&(Pr(r,t)&&Pr(t,r)&&dv(r,t)&&(De(r.prev,r,t.prev)||De(r,t.prev,t))||Qo(r,t)&&De(r.prev,r,r.next)>0&&De(t.prev,t,t.next)>0)}function De(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Qo(r,t){return r.x===t.x&&r.y===t.y}function xf(r,t,e,n){let i=mo(De(r,t,e)),s=mo(De(r,t,n)),o=mo(De(e,n,r)),a=mo(De(e,n,t));return!!(i!==s&&o!==a||i===0&&po(r,e,t)||s===0&&po(r,n,t)||o===0&&po(e,r,n)||a===0&&po(e,t,n))}function po(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function mo(r){return r>0?1:r<0?-1:0}function fv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&xf(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Pr(r,t){return De(r.prev,r,r.next)<0?De(r,t,r.next)>=0&&De(r,r.prev,t)>=0:De(r,t,r.prev)<0||De(r,r.next,t)<0}function dv(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function vf(r,t){let e=new Lc(r.i,r.x,r.y),n=new Lc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Fu(r,t,e,n){let i=new Lc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Ir(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Lc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Ei=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Hu(t),Ou(n,t);let o=t.length;e.forEach(Hu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,Ou(n,e[l]);let a=jx.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Hu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Ou(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var qn=class r extends oe{constructor(t=new Un([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new $t(i,3)),this.setAttribute("uv",new $t(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:mv,M,v=!1,T,w,E,C;d&&(M=d.getSpacedPoints(h),v=!0,p=!1,T=d.computeFrenetFrames(h,!1),w=new I,E=new I,C=new I),p||(x=0,f=0,g=0,m=0);let y=a.extractPoints(c),b=y.shape,A=y.holes;if(!Ei.isClockWise(b)){b=b.reverse();for(let at=0,mt=A.length;at<mt;at++){let U=A[at];Ei.isClockWise(U)&&(A[at]=U.reverse())}}let N=Ei.triangulateShape(b,A),H=b;for(let at=0,mt=A.length;at<mt;at++){let U=A[at];b=b.concat(U)}function B(at,mt,U){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(mt,U)}let k=b.length,G=N.length;function O(at,mt,U){let Ot,pt,Nt,_t=at.x-mt.x,Jt=at.y-mt.y,Ct=U.x-at.x,L=U.y-at.y,S=_t*_t+Jt*Jt,Y=_t*L-Jt*Ct;if(Math.abs(Y)>Number.EPSILON){let it=Math.sqrt(S),ht=Math.sqrt(Ct*Ct+L*L),ot=mt.x-Jt/it,Ft=mt.y+_t/it,Et=U.x-L/ht,zt=U.y+Ct/ht,le=((Et-ot)*L-(zt-Ft)*Ct)/(_t*L-Jt*Ct);Ot=ot+_t*le-at.x,pt=Ft+Jt*le-at.y;let vt=Ot*Ot+pt*pt;if(vt<=2)return new tt(Ot,pt);Nt=Math.sqrt(vt/2)}else{let it=!1;_t>Number.EPSILON?Ct>Number.EPSILON&&(it=!0):_t<-Number.EPSILON?Ct<-Number.EPSILON&&(it=!0):Math.sign(Jt)===Math.sign(L)&&(it=!0),it?(Ot=-Jt,pt=_t,Nt=Math.sqrt(S)):(Ot=_t,pt=Jt,Nt=Math.sqrt(S/2))}return new tt(Ot/Nt,pt/Nt)}let $=[];for(let at=0,mt=H.length,U=mt-1,Ot=at+1;at<mt;at++,U++,Ot++)U===mt&&(U=0),Ot===mt&&(Ot=0),$[at]=O(H[at],H[U],H[Ot]);let Q=[],P,ut=$.concat();for(let at=0,mt=A.length;at<mt;at++){let U=A[at];P=[];for(let Ot=0,pt=U.length,Nt=pt-1,_t=Ot+1;Ot<pt;Ot++,Nt++,_t++)Nt===pt&&(Nt=0),_t===pt&&(_t=0),P[Ot]=O(U[Ot],U[Nt],U[_t]);Q.push(P),ut=ut.concat(P)}for(let at=0;at<x;at++){let mt=at/x,U=f*Math.cos(mt*Math.PI/2),Ot=g*Math.sin(mt*Math.PI/2)+m;for(let pt=0,Nt=H.length;pt<Nt;pt++){let _t=B(H[pt],$[pt],Ot);st(_t.x,_t.y,-U)}for(let pt=0,Nt=A.length;pt<Nt;pt++){let _t=A[pt];P=Q[pt];for(let Jt=0,Ct=_t.length;Jt<Ct;Jt++){let L=B(_t[Jt],P[Jt],Ot);st(L.x,L.y,-U)}}}let nt=g+m;for(let at=0;at<k;at++){let mt=p?B(b[at],ut[at],nt):b[at];v?(E.copy(T.normals[0]).multiplyScalar(mt.x),w.copy(T.binormals[0]).multiplyScalar(mt.y),C.copy(M[0]).add(E).add(w),st(C.x,C.y,C.z)):st(mt.x,mt.y,0)}for(let at=1;at<=h;at++)for(let mt=0;mt<k;mt++){let U=p?B(b[mt],ut[mt],nt):b[mt];v?(E.copy(T.normals[at]).multiplyScalar(U.x),w.copy(T.binormals[at]).multiplyScalar(U.y),C.copy(M[at]).add(E).add(w),st(C.x,C.y,C.z)):st(U.x,U.y,u/h*at)}for(let at=x-1;at>=0;at--){let mt=at/x,U=f*Math.cos(mt*Math.PI/2),Ot=g*Math.sin(mt*Math.PI/2)+m;for(let pt=0,Nt=H.length;pt<Nt;pt++){let _t=B(H[pt],$[pt],Ot);st(_t.x,_t.y,u+U)}for(let pt=0,Nt=A.length;pt<Nt;pt++){let _t=A[pt];P=Q[pt];for(let Jt=0,Ct=_t.length;Jt<Ct;Jt++){let L=B(_t[Jt],P[Jt],Ot);v?st(L.x,L.y+M[h-1].y,M[h-1].x+U):st(L.x,L.y,u+U)}}}F(),Z();function F(){let at=i.length/3;if(p){let mt=0,U=k*mt;for(let Ot=0;Ot<G;Ot++){let pt=N[Ot];dt(pt[2]+U,pt[1]+U,pt[0]+U)}mt=h+x*2,U=k*mt;for(let Ot=0;Ot<G;Ot++){let pt=N[Ot];dt(pt[0]+U,pt[1]+U,pt[2]+U)}}else{for(let mt=0;mt<G;mt++){let U=N[mt];dt(U[2],U[1],U[0])}for(let mt=0;mt<G;mt++){let U=N[mt];dt(U[0]+k*h,U[1]+k*h,U[2]+k*h)}}n.addGroup(at,i.length/3-at,0)}function Z(){let at=i.length/3,mt=0;rt(H,mt),mt+=H.length;for(let U=0,Ot=A.length;U<Ot;U++){let pt=A[U];rt(pt,mt),mt+=pt.length}n.addGroup(at,i.length/3-at,1)}function rt(at,mt){let U=at.length;for(;--U>=0;){let Ot=U,pt=U-1;pt<0&&(pt=at.length-1);for(let Nt=0,_t=h+x*2;Nt<_t;Nt++){let Jt=k*Nt,Ct=k*(Nt+1),L=mt+Ot+Jt,S=mt+pt+Jt,Y=mt+pt+Ct,it=mt+Ot+Ct;It(L,S,Y,it)}}}function st(at,mt,U){l.push(at),l.push(mt),l.push(U)}function dt(at,mt,U){Lt(at),Lt(mt),Lt(U);let Ot=i.length/3,pt=_.generateTopUV(n,i,Ot-3,Ot-2,Ot-1);jt(pt[0]),jt(pt[1]),jt(pt[2])}function It(at,mt,U,Ot){Lt(at),Lt(mt),Lt(Ot),Lt(mt),Lt(U),Lt(Ot);let pt=i.length/3,Nt=_.generateSideWallUV(n,i,pt-6,pt-3,pt-2,pt-1);jt(Nt[0]),jt(Nt[1]),jt(Nt[3]),jt(Nt[1]),jt(Nt[2]),jt(Nt[3])}function Lt(at){i.push(l[at*3+0]),i.push(l[at*3+1]),i.push(l[at*3+2])}function jt(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return gv(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Oo[i.type]().fromJSON(i)),new r(n,t.options)}},mv={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new tt(s,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[i*3],f=t[i*3+1],g=t[i*3+2],m=t[s*3],x=t[s*3+1],d=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(p,1-g),new tt(m,1-d)]:[new tt(a,1-l),new tt(h,1-u),new tt(f,1-g),new tt(x,1-d)]}};function gv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Vs=class r extends oe{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,p=(e-t)/i,f=new I,g=new tt;for(let m=0;m<=i;m++){for(let x=0;x<=n;x++){let d=s+x/n*o;f.x=u*Math.cos(d),f.y=u*Math.sin(d),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let m=0;m<i;m++){let x=m*(n+1);for(let d=0;d<n;d++){let _=d+x,M=_,v=_+n+1,T=_+n+2,w=_+1;a.push(M,v,w),a.push(v,T,w)}}this.setIndex(a),this.setAttribute("position",new $t(l,3)),this.setAttribute("normal",new $t(c,3)),this.setAttribute("uv",new $t(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Se=class r extends oe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,p=new I,f=[],g=[],m=[],x=[];for(let d=0;d<=n;d++){let _=[],M=d/n,v=0;d===0&&o===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){let w=T/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),m.push(p.x,p.y,p.z),x.push(w+v,1-M),_.push(c++)}h.push(_)}for(let d=0;d<n;d++)for(let _=0;_<e;_++){let M=h[d][_+1],v=h[d][_],T=h[d+1][_],w=h[d+1][_+1];(d!==0||o>0)&&f.push(M,v,w),(d!==n-1||l<Math.PI)&&f.push(v,T,w)}this.setIndex(f),this.setAttribute("position",new $t(g,3)),this.setAttribute("normal",new $t(m,3)),this.setAttribute("uv",new $t(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var ji=class r extends oe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,p=new I;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let m=g/i*s,x=f/n*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(m),u.y=(t+e*Math.cos(x))*Math.sin(m),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let m=(i+1)*f+g-1,x=(i+1)*(f-1)+g-1,d=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(m,x,_),o.push(x,d,_)}this.setIndex(o),this.setAttribute("position",new $t(a,3)),this.setAttribute("normal",new $t(l,3)),this.setAttribute("uv",new $t(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Wo=class r extends oe{constructor(t=new Os(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new tt,h=new I,u=[],p=[],f=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new $t(u,3)),this.setAttribute("normal",new $t(p,3)),this.setAttribute("uv",new $t(f,2));function m(){for(let M=0;M<e;M++)x(M);x(s===!1?e:0),_(),d()}function x(M){h=t.getPointAt(M/e,h);let v=o.normals[M],T=o.binormals[M];for(let w=0;w<=i;w++){let E=w/i*Math.PI*2,C=Math.sin(E),y=-Math.cos(E);l.x=y*v.x+C*T.x,l.y=y*v.y+C*T.y,l.z=y*v.z+C*T.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function d(){for(let M=1;M<=e;M++)for(let v=1;v<=i;v++){let T=(i+1)*(M-1)+(v-1),w=(i+1)*M+(v-1),E=(i+1)*M+v,C=(i+1)*(M-1)+v;g.push(T,w,C),g.push(w,E,C)}}function _(){for(let M=0;M<=e;M++)for(let v=0;v<=i;v++)c.x=M/e,c.y=v/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Oo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Xo=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Mt=class extends Wn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rf,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ke,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ri=class extends Mt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ge(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function go(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function xv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Gs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends Gs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case zh:s=t,a=2*e-n;break;case Dh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zh:o=t,l=2*n-e;break;case Dh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),m=g*g,x=m*g,d=-p*x+2*p*m-p*g,_=(1+p)*x+(-1.5-2*p)*m+(-.5+p)*g+1,M=(-1-f)*x+(1.5+f)*m+.5*g,v=f*x-f*m;for(let T=0;T!==a;++T)s[T]=d*o[h+T]+_*o[c+T]+M*o[l+T]+v*o[u+T];return s}},Dc=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let p=0;p!==a;++p)s[p]=o[c+p]*u+o[l+p]*h;return s}},Uc=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Nn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=go(e,this.TimeBufferType),this.values=go(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:go(t.times,Array),values:go(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Dc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case bo:e=this.InterpolantFactoryMethodDiscrete;break;case rc:e=this.InterpolantFactoryMethodLinear;break;case Oa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return rc;case this.InterpolantFactoryMethodSmooth:return Oa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&xv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Oa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,p=u-n,f=u+n;for(let g=0;g!==n;++g){let m=e[u+g];if(m!==e[p+g]||m!==e[f+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let f=0;f!==n;++f)e[p+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Nn.prototype.TimeBufferType=Float32Array;Nn.prototype.ValueBufferType=Float32Array;Nn.prototype.DefaultInterpolation=rc;var Qi=class extends Nn{constructor(t,e,n){super(t,e,n)}};Qi.prototype.ValueTypeName="bool";Qi.prototype.ValueBufferType=Array;Qi.prototype.DefaultInterpolation=bo;Qi.prototype.InterpolantFactoryMethodLinear=void 0;Qi.prototype.InterpolantFactoryMethodSmooth=void 0;var Nc=class extends Nn{};Nc.prototype.ValueTypeName="color";var kc=class extends Nn{};kc.prototype.ValueTypeName="number";var Bc=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Oe.slerpFlat(s,0,o,c-a,o,c,l);return s}},qo=class extends Nn{InterpolantFactoryMethodLinear(t){return new Bc(this.times,this.values,this.getValueSize(),t)}};qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;var ts=class extends Nn{constructor(t,e,n){super(t,e,n)}};ts.prototype.ValueTypeName="string";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=bo;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var Fc=class extends Nn{};Fc.prototype.ValueTypeName="vector";var Hc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},vv=new Hc,Oc=class{constructor(t){this.manager=t!==void 0?t:vv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Oc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ws=class extends ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},$o=class extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},yl=new re,Vu=new I,Gu=new I,Lr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new re,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Er,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Vu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Vu),Gu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Gu),e.updateMatrixWorld(),yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vc=class extends Lr{constructor(){super(new We(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Us*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Yo=class extends Ws{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Vc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Wu=new re,dr=new I,_l=new I,Gc=class extends Lr{constructor(){super(new We(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Te(2,1,1,1),new Te(0,1,1,1),new Te(3,1,1,1),new Te(1,1,1,1),new Te(3,0,1,1),new Te(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),dr.setFromMatrixPosition(t.matrixWorld),n.position.copy(dr),_l.copy(n.position),_l.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(_l),n.updateMatrixWorld(),i.makeTranslation(-dr.x,-dr.y,-dr.z),Wu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wu)}},es=class extends Ws{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Gc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wc=class extends Lr{constructor(){super(new Fs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zo=class extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new Wc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Xs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Xu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Xu(){return performance.now()}var ch="\\[\\]\\.:\\/",yv=new RegExp("["+ch+"]","g"),hh="[^"+ch+"]",_v="[^"+ch.replace("\\.","")+"]",Mv=/((?:WC+[\/:])*)/.source.replace("WC",hh),bv=/(WCOD+)?/.source.replace("WCOD",_v),wv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",hh),Ev=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",hh),Sv=new RegExp("^"+Mv+bv+wv+Ev+"$"),Tv=["material","materials","bones","map"],Xc=class{constructor(t,e,n){let i=n||ze.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ze=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(yv,"")}static parseTrackName(t){let e=Sv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Tv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ze.Composite=Xc;ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ze.prototype.GetterByBindingType=[ze.prototype._getValue_direct,ze.prototype._getValue_array,ze.prototype._getValue_arrayElement,ze.prototype._getValue_toArray];ze.prototype.SetterByBindingTypeAndVersioning=[[ze.prototype._setValue_direct,ze.prototype._setValue_direct_setNeedsUpdate,ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_array,ze.prototype._setValue_array_setNeedsUpdate,ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_arrayElement,ze.prototype._setValue_arrayElement_setNeedsUpdate,ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ze.prototype._setValue_fromArray,ze.prototype._setValue_fromArray_setNeedsUpdate,ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ey=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qc);var fh=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function $e(r,t){return r*1e5+t}var ta=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let l=0;l<a.length;l++){let c=a[l];e.set(c,(e.get(c)||0)+(l===0||l===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,l,c,h,u,p,f]=o,g=0;for(let m=1;m<p.length;m++)if(e.get(p[m])>1||m===p.length-1){let x=p.slice(g,m+1);x.length>=2&&this._addEdge(x,a,l,c,h,u,i),g=m}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let l=t.length,c=new Float32Array(l*2),h=new Float32Array(l),u=0;for(let f=0;f<l;f++)c[f*2]=this.P[t[f]*2],c[f*2+1]=this.P[t[f]*2+1],f>0&&(u+=Math.hypot(c[f*2]-c[f*2-2],c[f*2+1]-c[f*2-1])),h[f]=u;if(u<.5)return;let p={id:this.edges.length,ids:t,pts:c,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[l-1]),signals:[]};this.edges.push(p)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let l=t.cum,c=t.pts,h=0,u=l.length-1;for(;u-h>1;){let v=h+u>>1;l[v]<=a?h=v:u=v}let p=l[u]-l[h]||1e-6,f=(a-l[h])/p,g=c[h*2],m=c[h*2+1],x=c[u*2],d=c[u*2+1],_=(x-g)/p,M=(d-m)/p;return e&&(_=-_,M=-M),s.x=g+(x-g)*f-M*i,s.z=m+(d-m)*f+_*i,s.dx=_,s.dz=M,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,l=Math.min(i[s*2+1],i[s*2+3])-n.w/2,c=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(l/t);u<=Math.floor(c/t);u++){let p=$e(h,u),f=e.get(p);f||e.set(p,f=[]),f.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),l=Math.floor(e/s),c=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let p=l-o;p<=l+o;p++){let f=this.roadGrid.get($e(u,p));if(f)for(let g=0;g<f.length;g+=2){let m=this.edges[f[g]],x=f[g+1];if(i&&!i(m))continue;let d=m.pts,_=d[x*2],M=d[x*2+1],v=d[x*2+2],T=d[x*2+3],w=v-_,E=T-M,C=w*w+E*E||1e-6,y=((t-_)*w+(e-M)*E)/C;y=y<0?0:y>1?1:y;let b=_+w*y,A=M+E*y,z=(t-b)**2+(e-A)**2;if(z<h){h=z;let N=Math.sqrt(C);c={e:m,i:x,t:y,x:b,z:A,dist:Math.sqrt(z),s:m.cum[x]+y*N,dx:w/N,dz:E/N}}}}return c&&(c.lat=(t-c.x)*-c.dz+(e-c.z)*c.dx),c}_indexChunks(t){let n=this.chunks=new Map,i=(a,l)=>{let c=Math.floor(a/400),h=Math.floor(l/400),u=$e(c,h),p=n.get(u);return p||n.set(u,p={key:u,cx:c,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[],signs:[]}),p};this.globalAreas=[],this.buildings=t.buildings.map((a,l)=>{let c=a[3],h=c.length/2,u=new Float32Array(c.length),p=0,f=0,g=1e9,m=-1e9,x=1e9,d=-1e9,_=0,M=0;for(let T=0;T<h;T++)_+=c[T*2],M+=c[T*2+1],u[T*2]=_*.1,u[T*2+1]=M*.1;for(let T=0;T<h;T++){let w=u[T*2],E=u[T*2+1];p+=w,f+=E,w<g&&(g=w),w>m&&(m=w),E<x&&(x=E),E>d&&(d=E)}let v={i:l,kind:a[0],h:a[1],minH:a[2],pts:u,cx:p/h,cz:f/h,x0:g,x1:m,z0:x,z1:d,name:a[4]||null,colour:a[5]||null,roofColour:a[6]||null,roofShape:a[7]||null};return i(v.cx,v.cz).buildings.push(v),v});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let l=Math.floor(a.x0/s);l<=Math.floor(a.x1/s);l++)for(let c=Math.floor(a.z0/s);c<=Math.floor(a.z1/s);c++){let h=$e(l,c),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let l=Math.floor(a.pts.length/4)*2;i(a.pts[l],a.pts[l+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let l=a[1],c=new Float32Array(l.length),h=0,u=0,p=1e9,f=-1e9,g=1e9,m=-1e9;for(let d=0;d<l.length;d++)c[d]=l[d]*.1;for(let d=0;d<l.length/2;d++){let _=c[d*2],M=c[d*2+1];h+=_,u+=M,_<p&&(p=_),_>f&&(f=_),M<g&&(g=M),M>m&&(m=M)}let x={type:a[0],pts:c,x0:p,x1:f,z0:g,z1:m};f-p>1500||m-g>1500?this.globalAreas.push(x):i(h/(l.length/2),u/(l.length/2)).areas.push(x)}this.areaList=t.areas;for(let a of t.lines){let[l,c,h]=a,u=h.length/2;for(let p=0;p<u-1;p+=23){let f=Math.min(u,p+24),g=new Float32Array((f-p)*2);for(let m=0;m<g.length;m++)g[m]=h[p*2+m]*.1;i(g[0],g[1]).lines.push({type:l,w:c,pts:g})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);for(let a of t.signs||[])i(a[0]*.1,a[1]*.1).signs.push({x:a[0]*.1,z:a[1]*.1,name:a[2],kind:a[3]});this.busStopList=t.busstops.map(a=>[a[0]*.1,a[1]*.1]),this.osmRoutes=(t.routes||[]).map(a=>({ref:a[0],name:a[1],type:a[2],pts:a[3].map(l=>l*.1),stops:a[4].map(l=>l*.1)})),this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(l=>l*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(l=>l*.1)})),this.stands=t.stands.map(a=>a.map(l=>l*.1)),this.jet=t.jet.map(a=>a.map(l=>l*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get($e(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&ea(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let l of t)e.set(l[0]+","+l[1],l);let n=this.raw,i=new Set;for(let l=0;l<n.pts.length/2;l++)e.has(n.pts[l*2]+","+n.pts[l*2+1])&&i.add(l);let s=[...i].map(l=>({i:l,x:this.P[l*2],z:this.P[l*2+1],c:-1})),o=this.signalClusters=[];for(let l of s){if(l.c>=0)continue;let c={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[l];for(l.c=c.id;h.length;){let u=h.pop();c.members.push(u),c.x+=u.x,c.z+=u.z,c.n++;for(let p of s)p.c<0&&Math.hypot(p.x-u.x,p.z-u.z)<45&&(p.c=c.id,h.push(p))}c.x/=c.n,c.z/=c.n,o.push(c)}let a=new Map;for(let l of s)a.set(l.i,o[l.c]);this.controls=[];for(let l of this.edges)for(let c=0;c<l.ids.length;c++){let h=a.get(l.ids[c]);if(h)for(let u of l.ow?[0]:[0,1]){let p=u?l.len-l.cum[c]:l.cum[c],f=u===0&&c===l.ids.length-1||u===1&&c===0;if(u===0&&c===0||u===1&&c===l.ids.length-1)continue;let m=Math.max(1,p-(f?4+(u?l.na:l.nb).maxW*.5:2.5)),x={};this.sample(l,u,Math.max(0,m-3),0,x);let d=Math.atan2(x.dz,x.dx);h.axis===null&&(h.axis=d);let _=Math.abs(Math.cos(d-h.axis)),M={e:l,dir:u,de:l.id*2+u,stop:m,cluster:h,group:_>.707?0:1,ang:d,x:0,z:0};l.signals.some(v=>v.dir===u&&v.cluster===h)||(l.signals.push(M),h.controls.push(M),this.controls.push(M))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,_=>_.cls<=5),o=this.nearestRoad(n,i,400,_=>_.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let l=new Set([o.e.na.id,o.e.nb.id]),c=new uh,h=new Map,u=new Map;for(let _ of a){let M=Math.hypot(_.x-t,_.z-e);h.set(_.id,M),c.push(M+Math.hypot(_.x-n,_.z-i),_)}let p=null,f=0;for(;c.size&&f++<2e5;){let _=c.pop();if(l.has(_.id)){p=_;break}let M=h.get(_.id);for(let v of _.out){let T=this.edges[v>>1];if(T.cls>5)continue;let w=v&1?T.na:T.nb,E=T.len*(1+T.cls*.08),C=M+E;C<(h.get(w.id)??1e18)&&(h.set(w.id,C),u.set(w.id,{n:_,de:v}),c.push(C+Math.hypot(w.x-n,w.z-i),w))}}if(!p)return null;let g=[o.x,o.z],m=p,x=[];for(;u.has(m.id);){let _=u.get(m.id);x.push(_.de),m=_.n}x.reverse();let d=[t,e,s.x,s.z];for(let _ of x){let v=this.edges[_>>1].pts,T=v.length/2;if(_&1)for(let w=T-1;w>=0;w--)d.push(v[w*2],v[w*2+1]);else for(let w=0;w<T;w++)d.push(v[w*2],v[w*2+1])}return d.push(...g),d}};function ea(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],l=e[s*2+1],c=e[o*2],h=e[o*2+1];l>t!=h>t&&r<(c-a)*(t-l)/(h-l)+a&&(n=!n)}return n}var uh=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let l=o*2+1,c=l+1,h=o,u=i;if(l<a&&t[l]<u&&(h=l,u=t[l]),c<a&&t[c]<u&&(h=c),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function bn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var rn={uNight:{value:0},uTime:{value:0},uSnow:{value:0}};function Ci(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function Pi(r,t=!0,e=!0){let n=new Le(r);return t&&(n.wrapS=n.wrapT=Mr),n.anisotropy=8,e&&(n.colorSpace=be),n.needsUpdate=!0,n}function Ii(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),l=a.data;for(let c=0;c<e;c+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let p=0;p<o;p++)for(let f=0;f<o;f++){let g=((c+p)*t+h+f)*4;l[g]=Math.max(0,Math.min(255,n[0]+u)),l[g+1]=Math.max(0,Math.min(255,n[1]+u)),l[g+2]=Math.max(0,Math.min(255,n[2]+u)),l[g+3]=255}}r.putImageData(a,0,0)}function yf(){let r=bn(42),t={};{let e=Ci(512),n=e.getContext("2d");Ii(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=Pi(e)}{let e=Ci(512),n=e.getContext("2d");Ii(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=Pi(e)}{let e=Ci(512),n=e.getContext("2d");Ii(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=Pi(e)}{let e=Ci(512),n=e.getContext("2d");Ii(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=Pi(e)}{let e=Ci(512),n=e.getContext("2d");Ii(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=Pi(e)}{let e=Ci(512),n=e.getContext("2d");Ii(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=Pi(e)}{let e=Ci(256),n=e.getContext("2d");Ii(n,256,256,[60,90,100],18,r,2),t.water=Pi(e)}{let e=Ci(256),n=e.getContext("2d");Ii(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=Pi(e,!0,!1)}return t}function _f(r){let t=new Mt({vertexColors:!0,roughness:.88,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=rn.uNight,e.uniforms.uSnow=rn.uSnow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.62,0.30), vec3(0.75,0.82,1.0), step(0.86,hh)) * (0.22 + 0.5*fract(hh*7.13));`)},t}function ui(r,t,e,n=16777215,i=.95,s=.9){let o=new Mt({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return o.onBeforeCompile=a=>{a.uniforms.uSnow=rn.uSnow,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), snowM * 0.85);`)},o}function Mf(){let r=new Mt({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var on=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,l,c,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,l,c),h)for(let u in h){let p=h[u],f=this.extra[u].data;for(let g=0;g<p.length;g++)f.push(p[g])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new oe;t.setAttribute("position",new $t(this.p,3)),t.setAttribute("normal",new $t(this.n,3)),t.setAttribute("color",new $t(this.c,3));for(let e in this.extra)t.setAttribute(e,new $t(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new ks(this.i,1):new Ns(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function dh(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let m=Math.hypot(i,s)||1;i/=m,s/=m}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let m=Math.hypot(o,a)||1;o/=m,a/=m}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let l=i+o,c=s+a,h=Math.hypot(l,c);h<1e-4?(l=o,c=a):(l/=h,c/=h);let u=-c,p=l,f=u*-a+p*o,g=Math.min(3,1/Math.max(.33,f));e[n*3]=u,e[n*3+1]=p,e[n*3+2]=g}return e}function ph(r,t,e,n){let i=[],s=r.length/2,o=c=>{let h=0;for(;h<s-2&&t[h+1]<c;)h++;let u=t[h+1]-t[h]||1e-6,p=Math.max(0,Math.min(1,(c-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*p,r[h*2+1]+(r[h*2+3]-r[h*2+1])*p]},a=o(e);i.push(a[0],a[1]);for(let c=1;c<s-1;c++)t[c]>e&&t[c]<n&&i.push(r[c*2],r[c*2+1]);let l=o(n);return i.push(l[0],l[1]),i}function bf(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function hn(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let l=dh(t),c=0,h=-1,u=-1;for(let p=0;p<a;p++){p>0&&(c+=Math.hypot(t[p*2]-t[p*2-2],t[p*2+1]-t[p*2-1]));let f=l[p*3],g=l[p*3+1],m=l[p*3+2],x=t[p*2],d=t[p*2+1],_=r.v(x+f*e*m,i,d+g*e*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,0)}),M=r.v(x+f*n*m,i,d+g*n*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,1)});h>=0&&r.quad(h,u,M,_),h=_,u=M}}function wf(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),l=-1,c=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,p=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);c>=0?r.tri(a,c,p):l=p,c=p}r.tri(a,c,l)}function Yn(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function mh(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new oe,c=0;for(let h=0;h<r.length;++h){let u=r[h],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,u=[];for(let p=0;p<r.length;++p){let f=r[p].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[p].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Ef(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let f=[];for(let m=0;m<o[h].length;++m)f.push(o[h][m][p]);let g=Ef(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Ef(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new ue(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let p=0,f=h.count;p<f;p++)for(let g=0;g<e;g++){let m=h.getComponent(p,g);a.setComponent(p+u,g,m)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Dt(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new wt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ue(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function an(r){let t=mh(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function Tf(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=bn(77);e.fillStyle="#5a4634",e.fillRect(0,0,512,512);for(let o=0;o<900;o++){let a=50+n()*60;e.fillStyle=`rgba(${a+20},${a},${a*.7},0.6)`,e.fillRect(n()*512,n()*512,2+n()*4,20+n()*60)}e.clearRect(512,0,512,512);let i=(o,a,l,c,h)=>{e.save(),e.translate(o,a),e.rotate(c);let u=90+h*110;e.fillStyle=`rgb(${Math.round(u*.55)},${Math.round(u)},${Math.round(u*.35)})`,e.beginPath(),e.ellipse(0,0,l,l*.45,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,50,20,0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(-l,0),e.lineTo(l,0),e.stroke(),e.restore()};for(let o=0;o<3800;o++){let a=n()*Math.PI*2,l=Math.sqrt(n())*512*.47,c=512+512/2+Math.cos(a)*l,h=512/2+Math.sin(a)*l;i(c,h,7+n()*9,n()*6.28,.25+.75*n()*(1-l/512*.9))}e.strokeStyle="rgba(70,55,40,0.9)",e.lineWidth=3;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(512+512/2,512/2),e.lineTo(512+512/2+(n()-.5)*512*.8,512/2+(n()-.5)*512*.8),e.stroke();let s=new Le(t);return s.colorSpace=be,s.anisotropy=4,s.generateMipmaps=!0,s}function na(r){let t=mh(r.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t}function ia(r,t,e,n=7,i=0){let s=new Wt(r,t,e,n,3,!0).translate(0,e/2,0),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+i*o.getY(l)/e),a.setXY(l,a.getX(l)*.45,a.getY(l)*2%1);return Af(s,16777215)}function Sf(r,t,e){let n=new I().subVectors(t,r),i=n.length(),s=new Wt(e*.6,e,i,5,1,!0),o=s.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a)*.45,o.getY(a));return s.translate(0,i/2,0),s.applyQuaternion(new Oe().setFromUnitVectors(new I(0,1,0),n.normalize())),s.translate(r.x,r.y,r.z),Af(s,16777215)}function Af(r,t,e=1){let n=new wt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ue(s,3)),r}function sa(r,t,e,n,i,s,o,a,l,c,h=!1){let u=[],p=[],f=[],g=[],m=new wt(c),x=new Oe,d=new Ke,_=new I;for(let C=0;C<a;C++){let y,b,A;for(;;){y=r()*2-1,b=r()*2-1,A=r()*2-1;let Q=y*y+b*b+A*A;if(Q<=1&&Q>.15)break}if(h){let Q=1-(b+1)/2;y*=.25+Q,A*=.25+Q}let z=t+y*i,N=e+b*s,H=n+A*o,B=l*(.75+r()*.5);d.set(r()*Math.PI,r()*Math.PI,r()*Math.PI),x.setFromEuler(d);let k=[[-1,-1],[1,-1],[1,1],[-1,1]],G=new I(y,b*.7+.25,A).normalize(),O=.55+.55*((b+1)/2)*(.6+.4*Math.sqrt(y*y+A*A)),$=u.length/3;for(let[Q,P]of k){_.set(Q*B/2,P*B/2,0).applyQuaternion(x),u.push(z+_.x,N+_.y,H+_.z),p.push(G.x,G.y,G.z),f.push(.5+(Q+1)/4,(P+1)/2);let ut=.9+r()*.2;g.push(m.r*O*ut,m.g*O*ut,m.b*O*ut)}}let M=[],v=[],T=[],w=[];for(let C=0;C<a;C++)for(let y of[0,1,2,0,2,3]){let b=C*4+y;M.push(u[b*3],u[b*3+1],u[b*3+2]),v.push(p[b*3],p[b*3+1],p[b*3+2]),T.push(f[b*2],f[b*2+1]),w.push(g[b*3],g[b*3+1],g[b*3+2])}let E=new oe;return E.setAttribute("position",new $t(M,3)),E.setAttribute("normal",new $t(v,3)),E.setAttribute("uv",new $t(T,2)),E.setAttribute("color",new $t(w,3)),E}function ra(r){return r.attributes.uv1&&r.deleteAttribute("uv1"),r}function gh(r=0){let t=bn(11+r),e=r?.28:1,n=r?1.35:1,i=(o,a,l)=>new I(o,a,l),s=[];{let o=[ia(.16,.28,3.6,7,.15)];if(!r)for(let[a,l]of[[.4,3.2],[2.4,3.4],[4.3,3]])o.push(Sf(i(0,l,0),i(Math.cos(a)*1.8,l+1.8,Math.sin(a)*1.8),.1));o.push(sa(t,.2,5.6,0,3,2.3,3,Math.round(70*e),2.1*n,6130234)),s.push(na(o.map(ra)))}{let o=[ia(.15,.3,4,6)];o.push(sa(t,0,10,0,1.5,7.5,1.5,Math.round(80*e),1.8*n,5603124)),s.push(na(o.map(ra)))}{let o=[ia(.12,.24,7,6)];o.push(sa(t,0,5,0,2.6,4.8,2.6,Math.round(70*e),1.6*n,3826768,!0)),s.push(na(o.map(ra)))}{let o=[ia(.24,.42,3.4,8,-.1)];if(!r)for(let[a,l]of[[.9,3],[3.1,3.2],[5,2.9],[2,3.6]])o.push(Sf(i(0,l,0),i(Math.cos(a)*2.4,l+2.2,Math.sin(a)*2.4),.14));o.push(sa(t,0,6.6,0,3.8,2.9,3.8,Math.round(95*e),2.4*n,5077552)),s.push(na(o.map(ra)))}return s}function Rf(){return gh(1)}function Cf(){let r=Dt(new Wt(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=Dt(new Pt(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=Dt(new Pt(.35,.14,.7).translate(0,8.35,-2.1),3948354);return an([r,t,e])}function Pf(){return Dt(new Pt(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function If(){let r=Dt(new Wt(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=Dt(new Pt(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(Dt(new Pt(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=Dt(new Pt(.44,1.15,.02).translate(0,3.5,-.16),14540253);return an([r,t,n,...e])}function Lf(r){return Dt(new Ai(.12,12).translate(0,3.83-r*.33,.155),16777215)}function zf(){return an([Dt(new Pt(1.8,.06,.45).translate(0,.45,0),8017460),Dt(new Pt(1.8,.4,.05).translate(0,.72,-.2),8017460),Dt(new Pt(.06,.45,.45).translate(-.8,.22,0),3355443),Dt(new Pt(.06,.45,.45).translate(.8,.22,0),3355443)])}function Df(){return an([Dt(new Pt(3.6,.08,1.6).translate(0,2.5,0),2973324),Dt(new Pt(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),Dt(new Pt(.08,2.5,1.5).translate(1.75,1.25,0),8952234),Dt(new Pt(3.5,1.8,.05).translate(0,1.4,-.72),10467012),Dt(new Pt(3,.08,.4).translate(0,.5,-.5),5592405)])}var Li={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]},Av={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},Rv={0:1/140,2:1/45,7:1/120,1:0},oa=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new qt,t.add(this.root),this.mat={building:_f(n),road:ui(n,n.asphalt,7,16777215,.92,.1),mark:Mf(),paving:Object.assign(ui(n,n.paving,3.2,12104876,.9,.75),{side:Ae}),grass:ui(n,n.grass,6,16777215,1),dirt:ui(n,n.dirt,7,16777215,1),field:ui(n,n.field,14,16777215,1),asphalt:ui(n,n.asphalt,7,16777215,.92,.5),concrete:ui(n,n.concrete,20,13158596,.85,.6),water:new Mt({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:(()=>{let i=new Mt({vertexColors:!0,roughness:.85,map:Tf(),alphaTest:.42,side:Ae});return i.onBeforeCompile=s=>{s.uniforms.uSnow=rn.uSnow,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow;`).replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;").replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), uSnow * 0.3);`)},i})(),lamp:new Mt({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new Mt({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new Mt({vertexColors:!0,roughness:.6}),rail:new Mt({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=gh(),this.geoTreesLow=Rf(),this.geoLamp=Cf(),this.geoLampGlow=Pf(),this.geoBus=Df(),this.geoBench=zf(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new Pe(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new ue(n,3));let i=ui(this.T,this.T.dirt,9,11843744,1);this.ground=new K(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new K(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),l=Math.floor((i+o)/400),c=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let g=a;g<=l;g++)for(let m=c;m<=h;m++){let x=$e(g,m);if(this.live.has(x))continue;let d=this.map.chunks.get(x);if(!d)continue;let _=Math.hypot((g+.5)*400-i,(m+.5)*400-s);_<o&&u.push([_,d])}u.sort((g,m)=>g[0]-m[0]);let p=performance.now();for(let[g,m]of u)if(this._buildChunk(m),!n&&performance.now()-p>(this.radius>2e3?14:this.buildBudget||8))break;let f=this.farRadius||0;if(f>o){if(this.far||(this.far=new Map,this.farRoot=new qt,this.scene.add(this.farRoot)),!this._farScan||performance.now()-this._farScan>400){this._farScan=performance.now();let m=Math.floor((i-f)/400),x=Math.floor((i+f)/400),d=Math.floor((s-f)/400),_=Math.floor((s+f)/400),M=[];for(let v=m;v<=x;v++)for(let T=d;T<=_;T++){let w=$e(v,T);if(this.far.has(w))continue;let E=this.map.chunks.get(w);if(!E||!E.buildings.length)continue;let C=Math.hypot((v+.5)*400-i,(T+.5)*400-s);C<f&&C>o-600&&M.push([C,E])}M.sort((v,T)=>v[0]-T[0]),this._farQueue=M}let g=performance.now();for(;this._farQueue&&this._farQueue.length&&performance.now()-g<(n?50:4);){let[,m]=this._farQueue.shift();this.far.has(m.key)||this._buildFar(m)}for(let[m,x]of this.far){let d=Math.hypot(x.x-i,x.z-s);if(d>f+800){this.farRoot.remove(x.mesh),x.mesh.geometry.dispose(),this.far.delete(m);continue}let _=this.live.get(m);x.mesh.visible=!(_&&_.group.visible)&&d<f+200}}else if(this.far&&this.far.size){for(let g of this.far.values())this.farRoot.remove(g.mesh),g.mesh.geometry.dispose();this.far.clear()}for(let[g,m]of this.live){let x=Math.hypot(m.x-i,m.z-s);if(x>o+900){this._dispose(g,m);continue}m.group.visible=x<o+300,m.detail&&(m.detail.visible=x<650),m.trees&&(m.trees.visible=x<280,m.treesLow.visible=x>=280&&x<1400),m.marks&&(m.marks.visible=x<700)}}_buildFar(t){let e=bn(t.key*7+13),n=new on({aInfo:2,aWin:2});for(let a of t.buildings)!(a.h>=6||(a.x1-a.x0)*(a.z1-a.z0)>160)&&e()<.6||this._building(n,a,e,!1);let i=(t.cx+.5)*400,s=(t.cz+.5)*400;if(n.empty){this.far.set(t.key,{mesh:new qt,x:i,z:s}),this.far.get(t.key).mesh.geometry={dispose(){}};return}let o=new K(n.build(),this.mat.building);o.matrixAutoUpdate=!1,this.farRoot.add(o),this.far.set(t.key,{mesh:o,x:i,z:s})}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),e.signTex&&(e.signTex.dispose(),e.signMat.dispose()),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),l=Math.floor(Math.min(e,i)/s),c=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=l;u<=c;u++){let p=$e(h,u),f=this.collision.get(p);f||this.collision.set(p,f=[]),f.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=bn(t.key*7+13),i=new qt,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new on({aInfo:2,aWin:2});for(let y of t.buildings)this._building(a,y,n,o);if(!a.empty){let y=new K(a.build(),this.mat.building);y.castShadow=!0,y.receiveShadow=!0,i.add(y)}t.signs.length&&this._signs(t,i,s);let l=new on,c=new on,h=new on({aDash:2}),u=[1,1,1],p=Yn(15253568),f=[.92,.92,.9];for(let y of t.edges){let b=.03+(6-y.cls)*.005;hn(l,y.pts,-y.w/2,y.w/2,b,[1,1,1]);let A=y.na.deg>1?y.na.maxW/2+1.5:0,z=y.nb.deg>1?y.nb.maxW/2+1.5:0;if(y.len-A-z<2)continue;let N=ph(y.pts,y.cum,A,y.len-z),H=b+.004,B=(k,G,O=.15,$=f)=>hn(h,N,k-O/2,k+O/2,H,$,Q=>[Q,G]);if(y.cls<=4){if(y.ow)for(let k=1;k<y.lanes;k++)B(-y.w/2+k*3.3,1);else if(y.lanes>=2){B(-.12,0),B(.12,0);for(let k=1;k<y.lanes;k++)B(k*3.3,1),B(-k*3.3,1)}else y.cls<=4&&y.w>=6&&B(0,1);y.cls<=2&&(B(y.w/2-.35,0,.12),B(-y.w/2+.35,0,.12))}for(let k of y.signals){let G={};e.sample(y,k.dir,k.stop,0,G);let O=k.dir?-1:1,$=(y.ow,y.w/2),Q=y.ow?-$:0,P=$,ut=-G.dz,nt=G.dx,F=[G.x+ut*Q,G.z+nt*Q,G.x+ut*P,G.z+nt*P];hn(h,F,-.25,.25,H+.001,f,()=>[0,0])}if(y.cls>=1&&y.cls<=4&&y.w>=5){let k=y.na.deg>1?y.na.maxW/2+2.5:0,G=y.nb.deg>1?y.nb.maxW/2+2.5:0;if(y.len-k-G>3){let O=ph(y.pts,y.cum,k,y.len-G),$=y.cls<=2?3.4:2.6;for(let Q of[-1,1]){let P=Q>0?y.w/2:-y.w/2-$,ut=Q>0?y.w/2+$:-y.w/2;hn(c,O,P,ut,.15,[1,1,1]),this._curb(c,O,Q>0?y.w/2:-y.w/2,Q)}}}}for(let y of t.nodes){let b=.03+y.top*.005+.002;wf(l,y.x,y.z,y.maxW/2*1.08,b,[1,1,1],16)}for(let[y,b]of t.crossings){let A=e.nearestRoad(y,b,4);if(!A||A.e.cls>4||A.e.w<5)continue;let z=.03+(6-A.e.cls)*.005+.006,N=-A.dz,H=A.dx,B=A.e.w/2,k=[A.x-N*B,A.z-H*B,A.x+N*B,A.z+H*B];hn(h,k,-2,2,z,f,G=>[G*2,2])}if(!l.empty){let y=new K(l.build(),this.mat.road);y.receiveShadow=!0,i.add(y)}if(!c.empty){let y=new K(c.build(),this.mat.paving);y.receiveShadow=!0,i.add(y),s.detail=y}if(!h.empty){let y=new K(h.build(),this.mat.mark);y.receiveShadow=!0,i.add(y),s.marks=y}let g={},m=[[],[],[],[]];for(let y of t.areas)this._area(g,y,n,m);for(let y of t.lines)this._line(g,y,n,m);for(let y in g){let b=new K(g[y].build(),this.mat[y]);b.receiveShadow=!0,i.add(b)}let x=[];for(let y of t.edges){if(y.cls<1||y.cls>4)continue;let b=y.cls<=2?9:11,A=y.w/2+(y.cls<=2?4.2:3.4);for(let z=6+n()*5;z<y.len-6;z+=b+n()*5)for(let N of[-1,1]){if(n()<(y.cls<=3?.18:.4))continue;let H={};if(e.sample(y,0,z,A*N,H),this._blocked(H.x,H.z,y,2.2))continue;let B=y.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;m[B].push(H.x,H.z,.75+n()*.5,n()*6.28)}if(y.cls<=3)for(let z=10;z<y.len-8;z+=34)for(let N of y.cls<=1?[-1,1]:[1]){let H={};if(e.sample(y,0,z,(y.w/2+.6)*N,H),this._blocked(H.x,H.z,y,.8))continue;let B=Math.atan2(-H.dz*N,H.dx*N);x.push(H.x,H.z,B)}}for(let y of t.trees)m[n()<.5?0:3].push(y[0],y[1],.8+n()*.4,n()*6.28);let d=new qt,_=new qt,M=new re,v=new Oe,T=new I,w=new I,E=new I(0,1,0),C=new wt;for(let y=0;y<4;y++){let b=m[y],A=b.length/4;if(!A)continue;let z=new Ue(this.geoTrees[y],this.mat.tree,A);for(let H=0;H<A;H++){let B=b[H*4+2];v.setFromAxisAngle(E,b[H*4+3]),M.compose(T.set(b[H*4],0,b[H*4+1]),v,w.set(B,B*(.9+n()*.25),B)),z.setMatrixAt(H,M);let k=.8+n()*.35;z.setColorAt(H,C.setRGB(k*(.9+n()*.25),k,k*(.85+n()*.2)))}z.castShadow=!0,z.receiveShadow=!0,z.computeBoundingSphere(),d.add(z);let N=new Ue(this.geoTreesLow[y],this.mat.tree,A);N.instanceMatrix.copy(z.instanceMatrix),N.instanceColor=z.instanceColor,N.castShadow=!0,N.computeBoundingSphere(),_.add(N)}if(i.add(d,_),s.trees=d,s.treesLow=_,x.length){let y=x.length/3,b=new Ue(this.geoLamp,this.mat.lamp,y),A=new Ue(this.geoLampGlow,this.mat.lampGlow,y);for(let z=0;z<y;z++)v.setFromAxisAngle(E,x[z*3+2]),M.compose(T.set(x[z*3],0,x[z*3+1]),v,w.set(1,1,1)),b.setMatrixAt(z,M),A.setMatrixAt(z,M);b.castShadow=!0,b.computeBoundingSphere(),A.computeBoundingSphere(),i.add(b,A)}if(t.busstops.length){let y=[];for(let[b,A]of t.busstops){let z=e.nearestRoad(b,A,25,O=>O.cls<=4);if(!z)continue;let N=z.lat>=0?1:-1,H=z.e.w/2+2.2,B=z.x+-z.dz*H*N,k=z.z+z.dx*H*N;if(e.insideBuilding(B,k,.5))continue;let G=e.nearestRoad(B,k,12);G&&G.dist<G.e.w/2+1||y.push(B,k,Math.atan2(z.dx*N,z.dz*N)+Math.PI)}if(y.length){let b=new Ue(this.geoBus,this.mat.prop,y.length/3);for(let A=0;A<y.length/3;A++)v.setFromAxisAngle(E,y[A*3+2]),M.compose(T.set(y[A*3],.15,y[A*3+1]),v,w.set(1,1,1)),b.setMatrixAt(A,M);b.castShadow=!0,b.computeBoundingSphere(),i.add(b)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_signs(t,e,n){let i={pharmacy:["#1d8a4a","#fff"],bank:["#163c7a","#fff"],cafe:["#5a3a22","#ffe9c8"],restaurant:["#7a1e1e","#fff3d0"],fast_food:["#d8261c","#fff"],supermarket:["#f2c200","#1a1a1a"],convenience:["#1f5fa8","#fff"],fuel:["#0a6a3a","#fff"],hotel:["#2a2a40","#f0d080"],clothes:["#222","#fff"],bar:["#3a1a40","#ffd0f0"],mobile_phone:["#e05a10","#fff"]},s=[];for(let v of t.signs){let T=Math.floor(v.x/this.map.BGRID),w=Math.floor(v.z/this.map.BGRID),E=null,C=18;for(let y=-1;y<=1;y++)for(let b=-1;b<=1;b++){let A=this.map.bgrid.get($e(T+y,w+b));if(A)for(let z of A){if(z.h<3||z.h>80)continue;let N=z.pts,H=N.length/2,B=0;for(let G=0;G<H;G++){let O=(G+1)%H;B+=N[G*2]*N[O*2+1]-N[O*2]*N[G*2+1]}let k=B>0?1:-1;for(let G=0;G<H;G++){let O=(G+1)%H,$=N[G*2],Q=N[G*2+1],P=N[O*2],ut=N[O*2+1],nt=P-$,F=ut-Q,Z=Math.hypot(nt,F);if(Z<3)continue;let rt=((v.x-$)*nt+(v.z-Q)*F)/(Z*Z);rt=Math.max(.15,Math.min(.85,rt));let st=$+nt*rt,dt=Q+F*rt,It=Math.hypot(v.x-st,v.z-dt);if(It>=C)continue;let Lt=F/Z*k,jt=-nt/Z*k,at=this.map.nearestRoad(st+Lt*6,dt+jt*6,30),mt=It+(at?at.dist*.15:6);mt<C&&(C=mt,E={x:st+Lt*.06,z:dt+jt*.06,nx:Lt,nz:jt,l:Z,h:Math.min(z.h,4.2)})}}}if(E&&!s.some(y=>Math.hypot(y.x-E.x,y.z-E.z)<2.5)&&s.push(Object.assign(E,{name:v.name,kind:v.kind})),s.length>=48)break}if(!s.length)return;let o=256,a=48,l=4,c=Math.ceil(s.length/l),h=document.createElement("canvas");h.width=o*l,h.height=a*c;let u=h.getContext("2d"),p=[],f=[],g=[],m=[];s.forEach((v,T)=>{let w=T%l*o,E=Math.floor(T/l)*a,[C,y]=i[v.kind]||["#8a1a1a","#fff"];u.fillStyle=C,u.fillRect(w,E,o,a),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(w,E,o,4),u.fillStyle=y,u.textAlign="center",u.textBaseline="middle";let b=30;for(u.font=`700 ${b}px Arial`;u.measureText(v.name).width>o-16&&b>12;)b-=2,u.font=`700 ${b}px Arial`;u.fillText((v.name.toUpperCase,v.name),w+o/2,E+a/2+1),v.kind==="pharmacy"&&(u.fillStyle="#fff",u.fillRect(w+8,E+18,18,6),u.fillRect(w+14,E+12,6,18));let A=Math.min(v.l*.8,1.6+v.name.length*.28),z=A*a/o*1.15,N=-v.nz,H=v.nx,B=v.h-.6-z,k=v.h-.6,G=Math.max(2.6,Math.min(B,3)),O=G+z,$=p.length/3;for(let[F,Z]of[[-1,G],[1,G],[1,O],[-1,O]])p.push(v.x+N*F*A/2,Z,v.z+H*F*A/2),g.push(v.nx,0,v.nz);let Q=w/h.width,P=(w+o)/h.width,ut=1-(E+a)/h.height,nt=1-E/h.height;f.push(P,ut,Q,ut,Q,nt,P,nt),m.push($,$+1,$+2,$,$+2,$+3)});let x=new oe;x.setAttribute("position",new $t(p,3)),x.setAttribute("normal",new $t(g,3)),x.setAttribute("uv",new $t(f,2)),x.setIndex(m);let d=new Le(h);d.colorSpace=be,d.anisotropy=4;let _=new Mt({map:d,emissiveMap:d,emissive:16777215,emissiveIntensity:.05+this.night*.9,roughness:.5,side:Ae}),M=new K(x,_);e.add(M),n.signMat=_,n.signTex=d}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=dh(e),o=e.length/2,a=-1,l=-1;for(let c=0;c<o;c++){let h=s[c*3],u=s[c*3+1],p=s[c*3+2],f=e[c*2]+h*n*p,g=e[c*2+1]+u*n*p,m=-h*i,x=-u*i,d=t.v(f,.15,g,m,0,x,.85,.85,.83),_=t.v(f,0,g,m,0,x,.6,.6,.6);a>=0&&(i>0?t.quad(l,_,d,a):t.quad(l,a,d,_)),a=d,l=_}}_area(t,e,n,i){let s=Av[e.type];if(!s)return;let[o,a,l]=s,c=t[o]||(t[o]=new on),h=e.pts,u=h.length/2,p=[];for(let d=0;d<u;d++)p.push(new tt(h[d*2],h[d*2+1]));let f;try{f=Ei.triangulateShape(p,[])}catch{return}let g=Yn(a),m=c.vc;for(let d=0;d<u;d++)c.v(h[d*2],l,h[d*2+1],0,1,0,g[0],g[1],g[2]);for(let d of f){let[_,M,v]=d,T=h[_*2],w=h[_*2+1],E=h[M*2],C=h[M*2+1],y=h[v*2],b=h[v*2+1];(E-T)*(b-w)-(C-w)*(y-T)<0?c.tri(m+_,m+M,m+v):c.tri(m+_,m+v,m+M)}let x=Rv[e.type];if(i&&x&&n){let d=(e.x1-e.x0)*(e.z1-e.z0),_=Math.min(500,Math.floor(d*x)),M=_*3;for(;_>0&&M-- >0;){let v=e.x0+n()*(e.x1-e.x0),T=e.z0+n()*(e.z1-e.z0);if(!ea(v,T,h))continue;let w=this.map.nearestRoad(v,T,10);if(w&&w.dist<w.e.w/2+2||this.map.insideBuilding(v,T,1.5))continue;let E=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[E].push(v,T,.7+n()*.6,n()*6.28),_--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new on);hn(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new on);hn(o,s,-e.w/2,e.w/2,.005,Yn(6982288));let a=t.dirt||(t.dirt=new on);hn(a,s,-e.w/2-2.5,-e.w/2,.004,Yn(10129528)),hn(a,s,e.w/2,e.w/2+2.5,.004,Yn(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new on);hn(o,s,-1.8,1.8,.02,Yn(6971992));let a=t.rail||(t.rail=new on);hn(a,s,-.78,-.7,.16,[1,1,1]),hn(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new on);hn(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new on({aDash:2}));hn(a,s,-.08,.08,.03,Yn(15253552),l=>[l,0])}else if(e.type===5&&i){let o=bf(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let l=0;for(;l<o.length-2&&o[l+1]<a;)l++;let c=(a-o[l])/(o[l+1]-o[l]||1);i[n()<.6?1:0].push(s[l*2]+(s[l*2+2]-s[l*2])*c,s[l*2+1]+(s[l*2+3]-s[l*2+1])*c,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let B=0;B<o;B++){let k=(B+1)%o;a+=s[B*2]*s[k*2+1]-s[k*2]*s[B*2+1]}let l=Math.abs(a)/2,c=e.kind,h=e.h,u=e.minH,p,f,g=3,m=3.2,x=B=>B[Math.floor(n()*B.length)];switch(c===0&&(c=h<7.5?1:h>35?3:2),c){case 1:p=1,f=x(Li.house),m=3.6;break;case 2:p=2,f=x(Li.panel),m=3.1;break;case 3:p=3,f=x(Li.comm),m=2.2,g=3.6;break;case 4:p=4,f=x(Li.ind),m=4,g=4;break;case 5:p=0,f=9077880;break;case 6:p=0,f=10132122;break;case 7:p=5,f=x(Li.pub),m=3.4,g=3.8;break;case 8:p=5,f=15921128;break;case 9:p=4,f=11052188;break;case 10:p=6,f=13160664,m=2.5,g=4;break;default:p=2,f=x(Li.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(p=5,f=15262940);let d=Yn(f);if(e.colour)try{let B=new wt(e.colour);(e.colour!=="white"||c!==3)&&(d=[B.r,B.g,B.b])}catch{}let _=.92+n()*.12,M=d[0]*_,v=d[1]*_,T=d[2]*_,w=n()*100,E=(B,k)=>({aInfo:[p,w],aWin:[B,k]}),C=a>0?1:-1,y=0;for(let B=0;B<o;B++){let k=(B+1)%o,G=s[B*2],O=s[B*2+1],$=s[k*2],Q=s[k*2+1],P=$-G,ut=Q-O,nt=Math.hypot(P,ut);if(nt<.05)continue;let F=ut/nt*C,Z=-P/nt*C,rt=Math.max(1,Math.round(nt/m)),st=0,dt=(h-u)/g,It=t.v(G,u,O,F,0,Z,M,v,T,E(0,st)),Lt=t.v($,u,Q,F,0,Z,M,v,T,E(rt,st)),jt=t.v($,h,Q,F,0,Z,M,v,T,E(rt,dt)),at=t.v(G,h,O,F,0,Z,M,v,T,E(0,dt));C>0?(t.tri(It,jt,Lt),t.tri(It,at,jt)):(t.tri(It,Lt,jt),t.tri(It,jt,at)),i&&h>1.5&&this.addWall(G,O,$,Q),y+=nt}let b=c===1&&l<260&&o<=8||/gabled|hipped|pitched/.test(e.roofShape||"");if(!b&&h>5&&c!==5&&c!==6){let B=c===3||c===10?1.1:.7,k=[M*.92,v*.92,T*.92],G={aInfo:[0,w],aWin:[0,0]};for(let O=0;O<o;O++){let $=(O+1)%o,Q=s[O*2],P=s[O*2+1],ut=s[$*2],nt=s[$*2+1],F=Math.hypot(ut-Q,nt-P);if(F<.05)continue;let Z=(nt-P)/F*C,rt=-(ut-Q)/F*C,st=t.v(Q,h,P,Z,0,rt,k[0],k[1],k[2],G),dt=t.v(ut,h,nt,Z,0,rt,k[0],k[1],k[2],G),It=t.v(ut,h+B,nt,Z,.2,rt,k[0],k[1],k[2],G),Lt=t.v(Q,h+B,P,Z,.2,rt,k[0],k[1],k[2],G);C>0?(t.tri(st,It,dt),t.tri(st,Lt,It),t.tri(st,dt,It),t.tri(st,It,Lt)):(t.tri(st,dt,It),t.tri(st,It,Lt),t.tri(st,It,dt),t.tri(st,Lt,It))}}if(b){this._gableRoof(t,e,h,d,n,l);return}let A=[];for(let B=0;B<o;B++)A.push(new tt(s[B*2],s[B*2+1]));let z;try{z=Ei.triangulateShape(A,[])}catch{return}let N=c===10?[.55,.57,.6]:c===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],H=t.vc;for(let B=0;B<o;B++)t.v(s[B*2],h,s[B*2+1],0,1,0,N[0],N[1],N[2],{aInfo:[0,w],aWin:[s[B*2],s[B*2+1]]});for(let B of z){let[k,G,O]=B,$=s[k*2],Q=s[k*2+1],P=s[G*2],ut=s[G*2+1],nt=s[O*2],F=s[O*2+1];(P-$)*(F-Q)-(ut-Q)*(nt-$)<0?t.tri(H+k,H+G,H+O):t.tri(H+k,H+O,H+G)}if((c===2||c===3)&&l>350&&h>12){let B=Math.min(3,Math.floor(l/400));for(let k=0;k<B;k++){let G=(k+.5)/B,O=e.x0+(e.x1-e.x0)*G,$=e.z0+(e.z1-e.z0)*G;ea(O,$,s)&&this._box(t,O,h,$,2.6,2.4,3.2,[N[0]*1.3,N[1]*1.3,N[2]*1.3],w)}}}_box(t,e,n,i,s,o,a,l,c){let h=s/2,u=a/2,p=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],f={aInfo:[0,c],aWin:[0,0]};for(let m=0;m<4;m++){let[x,d]=p[m],[_,M]=p[(m+1)%4],v=_-x,T=M-d,w=Math.hypot(v,T),E=T/w,C=-v/w,y=t.v(x,n,d,E,0,C,l[0],l[1],l[2],f),b=t.v(_,n,M,E,0,C,l[0],l[1],l[2],f),A=t.v(_,n+o,M,E,0,C,l[0],l[1],l[2],f),z=t.v(x,n+o,d,E,0,C,l[0],l[1],l[2],f);t.tri(y,A,b),t.tri(y,z,A)}let g=p.map(([m,x])=>t.v(m,n+o,x,0,1,0,l[0],l[1],l[2],f));t.tri(g[0],g[2],g[1]),t.tri(g[0],g[3],g[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,l=a.length/2,c=0,h=1,u=0;for(let $=0;$<l;$++){let Q=($+1)%l,P=a[Q*2]-a[$*2],ut=a[Q*2+1]-a[$*2+1],nt=Math.hypot(P,ut);nt>c&&(c=nt,h=P/nt,u=ut/nt)}let p=-u,f=h,g=1e9,m=-1e9,x=1e9,d=-1e9;for(let $=0;$<l;$++){let Q=a[$*2]*h+a[$*2+1]*u,P=a[$*2]*p+a[$*2+1]*f;g=Math.min(g,Q),m=Math.max(m,Q),x=Math.min(x,P),d=Math.max(d,P)}let _=.35;g-=_,m+=_,x-=_,d+=_;let M=($,Q)=>[$*h+Q*p,$*u+Q*f],v=Math.min(2.6,(d-x)*.38),T=(x+d)/2,w=Yn(Li.roofHouse[Math.floor(s()*Li.roofHouse.length)]);if(e.roofColour)try{let $=new wt(e.roofColour);w=[$.r,$.g,$.b]}catch{}let E={aInfo:[0,0],aWin:[0,0]},C=n-.05,y=M(g,x),b=M(m,x),A=M(m,d),z=M(g,d),N=M(g,T),H=M(m,T),B=($,Q,P,ut,nt)=>{let F=(T-(nt<0?x:d)===0,1),Z=v/((d-x)/2),rt=p*nt*Z,st=f*nt*Z,dt=Math.hypot(rt,1,st),It=t.v($[0],C,$[1],rt/dt,F/dt,st/dt,w[0],w[1],w[2],E),Lt=t.v(Q[0],C,Q[1],rt/dt,F/dt,st/dt,w[0],w[1],w[2],E),jt=t.v(P[0],C+v,P[1],rt/dt,F/dt,st/dt,w[0]*1.1,w[1]*1.1,w[2]*1.1,E),at=t.v(ut[0],C+v,ut[1],rt/dt,F/dt,st/dt,w[0]*1.1,w[1]*1.1,w[2]*1.1,E);return[It,Lt,jt,at]},k=B(y,b,H,N,-1),G=B(A,z,N,H,1),O=$=>{let[Q,P,ut]=$.map(It=>[t.p[It*3],t.p[It*3+1],t.p[It*3+2]]),nt=P[0]-Q[0],F=P[1]-Q[1],Z=P[2]-Q[2],rt=ut[0]-Q[0],st=ut[1]-Q[1],dt=ut[2]-Q[2];return Z*rt-nt*dt>0};for(let $ of[k,G])O($)?(t.tri($[0],$[1],$[2]),t.tri($[0],$[2],$[3])):(t.tri($[0],$[2],$[1]),t.tri($[0],$[3],$[2]));for(let[$,Q,P,ut]of[[y,z,N,-1],[b,A,H,1]]){let nt=h*ut,F=u*ut,Z=t.v($[0],C,$[1],nt,0,F,i[0],i[1],i[2],E),rt=t.v(Q[0],C,Q[1],nt,0,F,i[0],i[1],i[2],E),st=t.v(P[0],C+v,P[1],nt,0,F,i[0],i[1],i[2],E);t.tri(Z,rt,st),t.tri(Z,st,rt)}}setNight(t){if(Math.abs((this.night||0)-t)>.02)for(let e of this.live.values())e.signMat&&(e.signMat.emissiveIntensity=.05+t*.9);this.night=t,rn.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),l=Math.floor((e-n)/s),c=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,p=e;for(let f=o;f<=a;f++)for(let g=l;g<=c;g++){let m=this.collision.get($e(f,g));if(m)for(let x=0;x<m.length;x+=4){let d=m[x],_=m[x+1],M=m[x+2],v=m[x+3],T=M-d,w=v-_,E=T*T+w*w||1e-6,C=((u-d)*T+(p-_)*w)/E;C=C<0?0:C>1?1:C;let y=d+T*C,b=_+w*C,A=u-y,z=p-b,N=Math.hypot(A,z);if(N<n&&N>1e-5){let H=n-N;u+=A/N*H,p+=z/N*H,i.nx+=A/N,i.nz+=z/N,h=!0}}}if(h){i.x=u-t,i.z=p-e;let f=Math.hypot(i.nx,i.nz)||1;i.nx/=f,i.nz/=f}return h}};var Zs=class r extends K{constructor(){let t=r.SkyShader,e=new xe({name:t.name,uniforms:$n.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:sn,depthWrite:!1});super(new Pt(1,1,1),e),this.isSky=!0}};Zs.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var aa=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new Zi,this.bgCam=new We(60,1,50,2e5),this.sky=new Zs,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85;for(let s of[this.sky])s.material.fragmentShader=s.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min( retColor, vec3( 24.0 ) ), 1.0 );");this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new I,this.sun=new Zo(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new $o(12572927,6971464,1),e.add(this.hemi),e.fog=new Lo(13162208,300,2600),this.pmrem=new Hs(t),this.envScene=new Zi,this.envSky=new Zs,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=bn(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new oe;i.setAttribute("position",new ue(n,3)),this.starMat=new Ji({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new hi(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=bn(99),e=260,n=70,i=new Pe(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let p=0,f=1,g=1/9e3;for(let m=0;m<6;m++)p+=f*(Math.sin(h*g+m*1.7)*Math.cos(u*g*1.3-m)+Math.sin((h+u)*g*.7+m*3.1)*.6),f*=.5,g*=2.1;return p};for(let h=0;h<s.count;h++){let u=s.getX(h),f=s.getZ(h)+26e3+26e3,g=f-26e3,m=Math.min(1,Math.max(0,(g+6e3)/14e3)),x=Math.exp(-((g-16e3)**2)/(2*9e3**2)),d=m*m*900+x*3400*(.75+.35*o(u,f))+Math.abs(o(u*1.7,f*1.7))*600*m;d*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,d-120),f)}i.computeVertexNormals();let a=new Pe(22e4,3e4,160,20).rotateX(-Math.PI/2),l=a.attributes.position;for(let h=0;h<l.count;h++){let u=l.getX(h),p=l.getZ(h)-7e4,f=Math.max(0,(Math.abs(p+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,p*.6)))*Math.min(1,-(p+55e3)/12e3));l.setXYZ(h,u,f-80,p)}a.computeVertexNormals(),this.mtnMat=new xe({uniforms:{sunDir:{value:new I(0,1,0)},fogCol:{value:new wt(13162208)},light:{value:1},camPos:{value:new I}},vertexShader:`varying vec3 vN; varying vec3 vW;
        void main(){ vN = normal; vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }`,fragmentShader:`uniform vec3 sunDir; uniform vec3 fogCol; uniform float light; uniform vec3 camPos; varying vec3 vN; varying vec3 vW;
        float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
        void main(){
          vec3 n = normalize(vN);
          float slope = 1.0 - n.y;
          float snowLine = 2600.0 + 500.0*sin(vW.x*0.0006) + 200.0*h(floor(vW.xz/300.0));
          float snow = smoothstep(snowLine-250.0, snowLine+150.0, vW.y + slope*-900.0);
          vec3 rock = mix(vec3(0.42,0.38,0.33), vec3(0.32,0.30,0.29), smoothstep(0.2,0.6,slope));
          vec3 grass = vec3(0.45,0.47,0.30);
          vec3 c = mix(grass, rock, smoothstep(700.0, 1800.0, vW.y));
          c = mix(c, vec3(0.95,0.97,1.0), snow);
          float d = max(0.0, dot(n, normalize(sunDir)));
          vec3 col = c * (0.35 + 0.9*d) * light;
          float dist = length(vW.xz - camPos.xz);
          float haze = 1.0 - exp(-dist/75000.0);
          col = mix(col, fogCol, clamp(haze*0.85, 0.0, 0.8));
          gl_FragColor = vec4(col, 1.0);
          #include <tonemapping_fragment>
          #include <colorspace_fragment>
        }`,fog:!1}),this.mountains=new K(i,this.mtnMat),this.hills=new K(a,this.mtnMat);let c=new K(new Pe(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);c.position.y=-6,this.plain=c,this.bg.add(this.mountains,this.hills,c),this._clouds()}_clouds(){this.cloudMat=new xe({uniforms:{uTime:rn.uTime,sunDir:{value:new I(0,1,0)},day:{value:1},fogCol:{value:new wt},cover:{value:.45},camPos:{value:new I}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float uTime; uniform vec3 sunDir; uniform float day; uniform vec3 fogCol; uniform float cover; uniform vec3 camPos; varying vec3 vW;
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
        }`,transparent:!0,depthWrite:!1,fog:!1,side:Ae}),this.cloudsMesh=new K(new Pe(16e4,16e4,1,1).rotateX(-Math.PI/2),this.cloudMat),this.cloudsMesh.position.y=2600,this.bg.add(this.cloudsMesh)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let c=Ce.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-Ce.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*c,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),c<.15&&(this.sun.intensity=.55*(1-c/.15)+3.2*c,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*c,this.hemi.color.setRGB(.55+.2*c,.62+.22*c,.85+.1*c).multiplyScalar(.5+.5*c),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+c),.38*(.3+c),.3*(.3+c));let u=new wt().setRGB(.55,.66,.8).lerp(new wt(.92,.66,.45),h*.55).multiplyScalar(.08+.92*c);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*c,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night,this.cloudMat.uniforms.sunDir.value.copy(this.sunDir),this.cloudMat.uniforms.day.value=c,this.cloudMat.uniforms.fogCol.value.copy(u),this.cloudMat.uniforms.camPos.value.copy(t.position),this.cloudsMesh.position.x=t.position.x,this.cloudsMesh.position.z=t.position.z;let p=this.sunDir.y>.05?this.sunDir:new I(-.4,.8,.3).normalize();return this.sun.position.set(e.x+p.x*400,p.y*400,e.z+p.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*c),{day:c,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function Cv(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i],o=r[(i-1+n)%n],a=r[(i+1)%n],l=[o[0]-s[0],o[1]-s[1]],c=[a[0]-s[0],a[1]-s[1]],h=Math.hypot(...l),u=Math.hypot(...c),p=Math.min(t,h*.45,u*.45);if(s[1]<.5&&(o[1]<.5||a[1]<.5)||p<.01){e.push(s);continue}let g=[s[0]+l[0]/h*p,s[1]+l[1]/h*p],m=[s[0]+c[0]/u*p,s[1]+c[1]/u*p];for(let x=0;x<=4;x++){let d=x/4,_=1-d;e.push([_*_*g[0]+2*_*d*s[0]+d*d*m[0],_*_*g[1]+2*_*d*s[1]+d*d*m[1]])}}return e}function vh(r,t,e=.05,n={}){let i=n.fillet?Cv(r,n.fillet):r,s=new Un;s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1]);s.closePath();let o=new qn(s,{depth:t-e*2,steps:n.steps||1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});if(o.rotateY(-Math.PI/2),o.translate((t-e*2)/2,0,0),n.shape){let{L:a,W:l,belt:c,top:h,taper:u=.12,tumble:p=.14}=n.shape,f=o.attributes.position;for(let g=0;g<f.count;g++){let m=f.getX(g),x=f.getY(g),d=f.getZ(g),_=Math.min(1,Math.abs(d)/(a/2)),M=1-u*Math.pow(_,3);x>c&&(M*=1-p*Math.min(1,(x-c)/Math.max(.1,h-c))),f.setX(g,m*M),Math.abs(m)>l*.3&&x>c*.7&&f.setY(g,x-.02*Math.pow(Math.abs(m)/(l/2),4))}o.computeVertexNormals()}return o}var Qe=(r,t,e,n,i,s)=>new Pt(r,t,e).translate(n,i,s),Pv={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},Iv=1844524,Lv=1447446,zv=12106944,la=2105892,Dv=13159632;function An(r,t={}){let e=Pv[r],n=[],i=[],s=[],o=e.W,a=e.cabin[0][1],l=e.roof[2][1],c=r==="bus"||r==="truck",h=c?null:{L:e.L,W:o,belt:a*.75,top:l,taper:r==="van"?.06:.13,tumble:.05};n.push(vh(e.body,o,.08,{fillet:c?.08:.22,steps:4,shape:h}));let u=o*e.cabinW,p=c?null:{L:e.L,W:u,belt:a,top:l,taper:.1,tumble:r==="van"?.05:.2};if(i.push(Dt(vh(e.cabin,u,.04,{fillet:c?.05:.12,steps:3,shape:p}),Iv)),n.push(vh(e.roof,u+.03,.02,{fillet:.04,steps:2,shape:p&&{...p,W:u+.03}})),!c)for(let[y,b,A]of Uf(e)){let z=new Wt(e.wr*1.18,e.wr*1.18,.06,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2);i.push(Dt(z.translate(Math.sign(y)*(o/2-.02),b,A),657930))}if(!c)for(let y of[-1,1])i.push(Dt(Qe(.012,a-e.body[0][1]-.15,.02,y*(o/2+.003),(a+e.body[0][1])/2,e.cabin[e.cabin.length-2][0]-.1),1118481)),i.push(Dt(Qe(.012,a-e.body[0][1]-.15,.02,y*(o/2+.003),(a+e.body[0][1])/2,(e.cabin[0][0]+e.cabin[1][0])/2+.2),1118481)),i.push(Dt(Qe(.02,.05,e.L*.5,y*(o/2+.005),a-.03,0),10133670));if(e.cargo){let[y,b,A,z]=e.cargo;n.push(Qe(o,z-A,b-y,0,(A+z)/2,(y+b)/2))}if(r==="van"||r==="bus"){let y=r==="bus"?7:4,b=e.cabin[0][0],A=e.cabin[3][0]-(r==="van"?.7:.2);for(let z=0;z<=y;z++){let N=b+(A-b)*z/y;n.push(Qe(u+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,N+.06))}}let f=e.body[0][1],g=e.head.z,m=e.tail.z;i.push(Dt(Qe(o+.02,.16,.12,0,f+.12,g-.02),la)),i.push(Dt(Qe(o+.02,.16,.12,0,f+.12,m+.02),la)),i.push(Dt(Qe(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,g+.01),789516)),i.push(Dt(Qe(o+.03,.1,e.L*.55,0,f+.04,0),la));let x=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let y of[-1,1])i.push(Dt(Qe(.2,.12,.1,y*(o/2+.08),e.cabin[0][1]+.12,x-.1),la));i.push(Dt(Qe(.52,.12,.02,0,f+.3,g+.06),15921906)),i.push(Dt(Qe(.52,.12,.02,0,f+.42,m-.06),15921906));let d=e.head,_=e.tail;for(let y of[-1,1])s.push(Dt(Qe(d.w,d.h,.06,y*d.x,d.y,d.z),16774880)),s.push(Dt(Qe(_.w,_.h,.06,y*_.x,_.y,_.z),16718352,.9));t.taxi&&i.push(Dt(Qe(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(Dt(Qe(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(Dt(Qe(1.6,.3,.05,0,2.55,5.92),16747024));let M=Uv(e.wr,r==="bus"||r==="truck"?.32:.23),v=Uf(e),T=an(v.map(([y,b,A])=>M.clone().translate(y,b,A))),w=an(n.map(y=>Dt(y,16777215))),E=an([...i,T]),C=an(s);return{paint:w,detail:E,lights:C,wheel:M,wheelPos:v,spec:e,detailNoWheels:an(i)}}function Uf(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function Uv(r,t){let e=Dt(new Wt(r,r,t,16).rotateZ(Math.PI/2),Lv),n=Dt(new Wt(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),zv),i=Dt(new Wt(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),Dv),s=[];for(let o=0;o<5;o++){let a=new Pt(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(Dt(a,9080466))}return an([e,n,i,...s])}function yh(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new Le(t);return n.colorSpace=be,n.anisotropy=4,n}var _h=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var ca=class{constructor(t,e="sedan",n){this.scene=t,this.group=new qt,this.body=new qt,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(d=>{d.geometry&&d.geometry.dispose()});let n=An(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new Ri({color:i,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.06,vertexColors:!0,envMapIntensity:1.2});let s=new Mt({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new Mt({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new K(n.paint,this.paintMat);o.castShadow=!0;let a=new K(n.detailNoWheels,s);a.castShadow=!0,this.paintMesh=o,this.detailMesh=a,this.damage=0,this.dents=0,this.lightMesh=new K(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let l=n.spec;this.brakeMat=new fe({color:16719888,transparent:!0,opacity:0,blending:Be,depthWrite:!1});for(let x of[-1,1]){let d=new K(new Pe(l.tail.w*2.2,l.tail.h*4),this.brakeMat);d.position.set(x*l.tail.x,l.tail.y,l.tail.z-.06),d.rotation.y=Math.PI,this.body.add(d)}this.flareMat=new fe({color:16773840,transparent:!0,opacity:0,blending:Be,depthWrite:!1});for(let x of[-1,1]){let d=new K(new Ai(.45,16),this.flareMat);d.position.set(x*l.head.x,l.head.y,l.head.z+.08),this.body.add(d)}this.plateText||(this.plateText="01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B");let c=yh(this.plateText),h=new fe({map:c});this.plateMat=h;let u=new K(new Pe(.52,.12),h);u.position.set(0,l.body[0][1]+.3,l.head.z+.075);let p=new K(new Pe(.52,.12),h);p.position.set(0,l.body[0][1]+.42,l.tail.z-.075),p.rotation.y=Math.PI,this.body.add(u,p);let f=new K(new Se(.13,10,8),new Mt({color:2760736}));if(f.position.set(.38,l.cabin[0][1]+.38,(l.cabin[1][0]+l.cabin[2][0])/2+.25),this.body.add(f),this.wheels)for(let x of this.wheels)this.group.remove(x.pivot);this.wheels=[];let g=new Mt({vertexColors:!0,roughness:.6,metalness:.3});this.wheelMat=g;for(let[x,d,_]of n.wheelPos){let M=new qt;M.position.set(x,d,_);let v=new K(n.wheel,g);v.castShadow=!0,M.add(v),this.group.add(M),this.wheels.push({pivot:M,mesh:v,front:_>0})}this.flames=[];let m=new fe({color:6728447,transparent:!0,opacity:.85,blending:Be,depthWrite:!1});for(let x of[-1,1]){let d=new K(new Xn(.11,.9,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.45),m);d.position.set(x*l.W*.24,l.body[0][1]+.05,l.tail.z-.05),d.visible=!1,this.body.add(d),this.flames.push(d)}this.flameMat=m,this._applyCustom(),this.spot?(this.spot.position.set(0,.8,l.head.z),this.spotTarget.position.set(0,0,l.head.z+25)):(this.spot=new Yo(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,l.head.z),this.spotTarget=new ke,this.spotTarget.position.set(0,0,l.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=l.mass,this.power=l.power*745.7,this.vmax=l.vmax/3.6,this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(l.L*l.L+l.W*l.W)/12*1.1,this.a=l.wb/2+(l.wbOff||0),this.b=l.wb/2-(l.wbOff||0),this.radius=l.W/2+.05,this.color=i}dent(t,e,n){let i=t-this.x,s=e-this.z,o=Math.cos(this.h),a=Math.sin(this.h),l=i*o-s*a,c=i*a+s*o,h=1.25,u=this.spec.roof[2][1];for(let p of[this.paintMesh,this.detailMesh]){let f=p.geometry.attributes.position;for(let g=0;g<f.count;g++){let m=f.getX(g),x=f.getY(g),d=f.getZ(g),_=Math.hypot(m-l,d-c);if(_>h||x>u+.1)continue;let M=Math.pow(1-_/h,2)*n,v=Math.hypot(m,d*.35)||1;f.setXYZ(g,m-m/v*M*.6-Math.sign(l)*0,x-M*.15*(x>.9?1:.3),d-Math.sign(d)*M*(Math.abs(c)>this.spec.L*.3?.5:.1))}f.needsUpdate=!0}this.dents++}repair(){this.setType(this.type,this.color)}_applyCustom(){let t=this.custom||(this.custom={}),e=this.spec;if(this.neon&&(this.group.remove(this.neon),this.neon=null),t.neon){let n=this._neonTex||(this._neonTex=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),o=s.createRadialGradient(64,64,10,64,64,64);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,128,128),new Le(i)})());this.neon=new K(new Pe(e.W*1.9,e.L*1.35).rotateX(-Math.PI/2),new fe({map:n,color:t.neon,transparent:!0,opacity:.9,blending:Be,depthWrite:!1})),this.neon.position.y=.14,this.neon.material.polygonOffset=!0,this.neon.material.polygonOffsetFactor=-8,this.neon.material.polygonOffsetUnits=-30,this.neon.renderOrder=2,this.group.add(this.neon)}if(this.spoiler&&(this.body.remove(this.spoiler),this.spoiler=null),t.spoiler&&!["van","bus","truck"].includes(this.type)){let n=new qt,i=new K(new Pt(e.W*.95,.05,.35),this.paintMat);i.position.set(0,.28,0),n.add(i);for(let o of[-1,1]){let a=new K(new Pt(.05,.28,.12),new Mt({color:1118481}));a.position.set(o*e.W*.3,.14,0),n.add(a)}let s=e.body.reduce((o,a)=>a[0]<e.L*-.3?Math.max(o,a[1]):o,.8);n.position.set(0,s,e.tail.z+.3),n.traverse(o=>o.castShadow=!0),this.body.add(n),this.spoiler=n}this.wheelMat&&this.wheelMat.color.setHex(t.rims??16777215)}setPlate(t){this.plateText=String(t).toUpperCase().slice(0,12),this.plateMat&&(this.plateMat.map.dispose(),this.plateMat.map=yh(this.plateText),this.plateMat.needsUpdate=!0)}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let l=0;l<3;l++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=this.assists||(this.assists={abs:!0,tcs:!0,esc:!0,steerAssist:!0,sens:1,manual:!1}),a=Math.sin(this.h),l=Math.cos(this.h),c=-Math.cos(this.h),h=Math.sin(this.h),u=this.vx*a+this.vz*l,p=this.vx*c+this.vz*h,f=9.81,g=this.mass,m=Math.abs(u),x=this.surface??1,d=.6/(1+m/14)*(.75+.5*o.sens),_=-e.steer*d;o.steerAssist&&!e.hand&&m>6&&this.rearSlip&&(_+=Ce.clamp(this.rearSlip*.55,-.25,.25));let M=(e.steer===0?5.5:4.2)/(1+m/45);this.steer+=Ce.clamp(_-this.steer,-M*t,M*t);let v=this.steer,T=this._gearbox(e),w=0,E=e.throttle,C=e.brake;this.braking=!1,this.reversing=!1;let y=m<.6;C>0&&y?this.stopHold=(this.stopHold||0)+t:C===0&&(this.stopHold=0);let b=C>0&&(u<-.3||y&&this.stopHold>.2);if(this.nitro===void 0&&(this.nitro=1),this.boosting=!!(e.nitro&&this.nitro>.01&&E>0&&u>1),this.boosting?(w+=g*5.2,this.nitro=Math.max(0,this.nitro-t*.2)):this.nitro=Math.min(1,this.nitro+t*.02),E>0){if(u<-.5)w+=1*g*f*E,this.braking=!0;else if(!this.limiter){let nt=this.power*T/Math.max(3,u)*E,F=(o.tcs?.92:1.15)*g*f*.6*x;!o.tcs&&nt>F&&m<25?this.wheelspin=Math.min(1,(nt-F)/F):this.wheelspin=0,w+=Math.min(F,nt)}}else this.wheelspin=0;if(C>0){if(b)this.reversing=!0,u>-8&&(w-=g*3.4*C);else if(u>.3){let nt=o.abs?1:1.12;w-=nt*g*f*C*x,this.braking=!0,!o.abs&&C>.9&&m>4?this.locked=!0:this.locked=!1}}else this.locked=!1;e.hand&&(w-=Math.sign(u)*Math.min(Math.abs(u)*g*3,.55*g*f)),w-=this.drag*u*Math.abs(u)+(.015*g*f*Math.sign(u)+4*u)*Math.min(1,Math.abs(u))*(x<1?3.5:1),E===0&&C===0&&m<.4&&(u*=.85);let A=this.a,z=this.b,N=A+z,H=Ce.clamp(g*(this.accLong||0)*.55/N,-g*f*.3,g*f*.3),B=g*f*z/N-H,k=g*f*A/N+H,G=1.08*x,O=0,$=0;if(m>1.2){let nt=Math.atan2(p-this.r*A,m)+v*Math.sign(u),F=Math.atan2(p+this.r*z,m),Z=10*B,rt=11*k,st=Math.min(.9,Math.abs(w)/(G*(B+k))*(E>0?1.2:.6)),dt=Math.sqrt(1-st*st);e.hand&&(dt=.38),this.wheelspin&&(dt*=1-.5*this.wheelspin);let It=this.locked?.25:1,Lt=G*B*It,jt=G*k*dt;O=-Lt*Math.tanh(Z*nt/Lt),$=-jt*Math.tanh(rt*F/jt),this.rearSlip=F,this.slip=Math.max(Math.abs(F)*(e.hand?2.4:1.6),Math.abs(nt)*.7,this.wheelspin*.8,this.locked?.6:0)*Math.min(1,m/8);let at=-O*Math.cos(v)*A+$*z;if(this.r+=at/this.inertia*t,this.r*=1-.8*t,o.esc&&!e.hand){let mt=G*f/Math.max(m,4)*1.12;Math.abs(this.r)>mt&&(this.r+=(Math.sign(this.r)*mt-this.r)*Math.min(1,t*8)),Math.abs(F)>.12&&(p*=1-Math.min(.5,t*2.5))}}else this.r=u*Math.tan(v)/N,p*=.5,this.slip=0,this.rearSlip=0;let Q=O*Math.cos(v)+$;if(m<=1.2){let nt=u+w/g*t;this.vx=a*nt+c*p,this.vz=l*nt+h*p,E===0&&!b&&Math.abs(nt)<.2&&(this.vx=this.vz=0,this.r=0)}else{let nt=u+w/g*t,F=p+Q/g*t;this.vx=a*nt+c*F,this.vz=l*nt+h*F}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=this.accLong===void 0?0:this.accLong+(w/g-this.accLong)*Math.min(1,t*10),this.accLat=Q/g,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let P=this.spec.L,ut={};for(let nt of[P*.32,0,-P*.32]){let F=this.x+Math.sin(this.h)*nt,Z=this.z+Math.cos(this.h)*nt;if(n.collide(F,Z,this.radius,ut)){this.x+=ut.x,this.z+=ut.z;let rt=this.vx*ut.nx+this.vz*ut.nz;rt<0&&(this.vx-=ut.nx*rt*1.25,this.vz-=ut.nz*rt*1.25,this.vx*=.94,this.vz*=.94,this.r+=(nt>0?1:-1)*rt*.02*Math.sign(ut.nx*Math.cos(this.h)-ut.nz*Math.sin(this.h)),-rt>2&&(s&&s(-rt,"wall",null,F-ut.nx*this.radius,Z-ut.nz*this.radius,ut.nx,ut.nz),this.damage=Math.min(100,this.damage+-rt*.6)))}}i&&i.collidePlayer(this,s),this.remotes&&this.remotes.collide(this,s)}shiftUp(){this.gear<6&&(this.gear=Math.max(1,this.gear)+1,this.shiftT=.25)}shiftDown(){this.gear>1&&(this.gear--,this.shiftT=.2)}_gearbox(t){let e=Math.max(0,this.u||0),n=[0,3.6,2.2,1.55,1.18,.95,.78],i=3.6,s=this.spec.wr;this.gear>=1||(this.gear=1);let o=h=>e/s*n[h]*i*60/(2*Math.PI),a=o(this.gear);if(!(this.assists&&this.assists.manual)){let h=t.throttle>.5?6300:3800;a>h&&this.gear<6&&(this.gear++,this.shiftT=.18),a<2e3&&this.gear>1&&this.gear--,a=o(this.gear)}if(this.limiter=a>7200,this.rpmTarget=Math.min(7300,Math.max(900,a)),this.shiftT>0)return this.shiftT-=1/180,.25;let l=Math.min(1,a/6500),c=this.damage>=100?.3:1-this.damage/300;return(.72+.38*Math.sin(l*Math.PI))*c}_visual(t,e){if(this.flames){for(let s of this.flames)if(s.visible=!!this.boosting,s.visible){let o=.8+Math.random()*.5;s.scale.set(1,1,o)}}this.flameMat&&this.flameMat.color.setHex(Math.random()<.5?6728447:10079487),this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.gearLabel=this.reversing?"R":this.speed<.3&&!this.throttleOn?"N":String(this.gear);let n=Ce.clamp(-(this.accLong||0)*.006,-.05,.05),i=Ce.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((n-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((i-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let s of this.wheels)s.mesh.rotation.x=this.spin,s.front&&(s.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.75:this.night?.12:0,this.lightMat.emissiveIntensity=this.night?2.2:this.braking?1.2:.3,this.flareMat.opacity=this.night?.55:0,this.spot.intensity=this.night?60:0,this.slip>.22&&this.speed>6||this.wheelspin>.2&&this.speed>1?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new oe;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new ue(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new ue(n,1)),this.skidMesh=new K(e,new fe({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],l=o-i,c=a-s,h=Math.hypot(l,c);if(h<.05||h>5)continue;let u=-c/h*.11,p=l/h*.11,f=this.skidI++%this.skidN,g=.075;this.skidPos.set([i-u,g,s-p,i+u,g,s+p,o-u,g,a-p,o+u,g,a+p],f*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new Le(e);for(let s=0;s<160;s++){let o=new _n(new pn({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},ha=class{constructor(t){this.cam=t,this.mode=0,this.pos=new I(0,5,-10),this.look=new I,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,l,c,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,p=i*.7+h*.3,f=s*.7+u*.3,g=Math.atan2(p,f)+n,m=Math.sin(g),x=Math.cos(g),d=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let M=(this.mode===0?6.8:11)*d+o*.03,v=(this.mode===0?2.3:4)*d+a.cabin[1][1]*.4;l=new I(e.x-m*M,v,e.z-x*M),c=new I(e.x+i*4,1.1*d,e.z+s*4);let T=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(l,T)}else if(this.mode===2)l=new I(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),c=new I(e.x+i*30,1.2,e.z+s*30),this.pos.copy(l);else{this.lag+=t*.15;let M=this.lag;l=new I(e.x+Math.sin(M)*9,1.2+Math.sin(M*.7)*.6,e.z+Math.cos(M)*9),c=new I(e.x,.9,e.z),this.pos.lerp(l,1-Math.exp(-t*3))}this.look.lerp(c,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let _=(this.mode===2?(this.baseFov||62)+10:this.baseFov||62)+Math.min(16,o*.2);this.cam.fov+=(_-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var Nf=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.05],["truck",.05]],kf=[3,6,4,2.2,.6,.15,.02],Bf=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,ua=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new Mt({vertexColors:!0,metalness:.5,roughness:.35}),s=new Mt({vertexColors:!0,metalness:.3,roughness:.3}),o=new fe({vertexColors:!0});for(let[a]of Nf){let l=An(a==="taxi"?"sedan":a,{taxi:a==="taxi"}),c=200,h=new Ue(l.paint,i,c),u=new Ue(l.detail,s,c),p=new Ue(l.lights,o,c);for(let f of[h,u,p])f.count=0,f.frustumCulled=!1,f.instanceMatrix.setUsage($s),t.add(f);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new wt),p.setColorAt(0,new wt),this.models[a]={p:h,d:u,l:p,spec:l.spec,cap:c,n:0}}this._busStops(),this._signals(),this.M=new re,this.Q=new Oe,this.V=new I,this.S=new I(1,1,1),this.Y=new I(0,1,0),this.C=new wt,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,l=>l.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new Ue(If(),new Mt({vertexColors:!0,roughness:.6}),e),i=new fe({vertexColors:!0});this.lamps=[0,1,2].map(u=>new Ue(Lf(u),i,e));let s={},o=new re,a=new Oe,l=new I,c=new I(1,1,1),h=new I(0,1,0);t.forEach((u,p)=>{let f=u.e,g=f.w/2+.9;this.map.sample(f,u.dir,u.stop,g,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(l.set(s.x,.12,s.z),a,c),n.setMatrixAt(p,o);for(let m of this.lamps)m.setMatrixAt(p,o),m.setColorAt(p,new wt(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new wt(3,.15,.08),new wt(.18,.03,.02)],s=[new wt(3,1.6,.1),new wt(.18,.12,.02)],o=[new wt(.1,3,.8),new wt(.02,.15,.06)];for(let a=0;a<n.length;a++){let l=n[a],c=this.map.signalState(l.cluster,l.group,e);this.lamps[0].setColorAt(a,c==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,c==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,c==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of Nf)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=kf[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(Bf.test(n[0])||Bf.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),l=Math.floor(e/s),c=[],h=0;for(let u=a-o;u<=a+o;u++)for(let p=l-o;p<=l+o;p++){let f=this.map.chunks.get($e(u,p));if(f)for(let g of f.edges){if(g.cls>5)continue;let m=this._edgeWeight(g);m<=0||(c.push(g,m),h+=m)}}if(!h)return!1;for(let u=0;u<6;u++){let p=Math.random()*h,f=null;for(let y=0;y<c.length;y+=2)if(p-=c[y+1],p<=0){f=c[y];break}f||(f=c[0]);let g=f.ow||Math.random()<.5?0:1,m=Math.random()*f.len,x={};this.map.sample(f,g,m,0,x);let d=Math.hypot(x.x-t,x.z-e);if(d<n||d>i)continue;let _=Math.floor(Math.random()*f.lanes),M=f.id*2+g;if(this.cars.some(y=>y.de===M&&Math.abs(y.s-m)<12))continue;let v=this._pickType(),T=this.models[v];if(T.n>=T.cap)continue;T.n++;let w=fh[f.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="truck"?.85:1),E={type:v,spec:T.spec,e:f,dir:g,de:M,s:m,lane:v==="van"||v==="bus"?f.lanes-1:_,v:w*.7,v0:w,color:v==="van"?Math.random()<.8?16053492:15912992:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:_h[Math.floor(Math.random()*_h.length)],x:x.x,z:x.z,h:Math.atan2(x.dx,x.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};E.next=this._chooseNext(E);let C={};return this.map.sample(f,g,m,this.map.laneOffset(f,E.lane),C),E.x=C.x,E.z=C.z,this.cars.push(E),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let l=this.map.edges[a>>1];if(l.cls>5)continue;let c={};this.map.sample(l,a&1,.5,0,c);let h=n.dx*c.dx+n.dz*c.dz,u=(h>.7?4:h>-.3?1:.15)*(kf[l.cls]+.2);l.cls===5&&(u*=.2),(t.type==="bus"||t.type==="truck")&&(u*=l.cls<=2?2:.3),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),l=0;for(;this.cars.length<a&&l<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)l++;for(let m=this.cars.length-1;m>=0;m--){let x=this.cars[m];(Math.abs(x.x-s)>760||Math.abs(x.z-o)>760)&&this._remove(m)}let c=new Map;for(let m of this.cars){let x=c.get(m.de);x||c.set(m.de,x=[]),x.push(m)}for(let m of c.values())m.sort((x,d)=>x.s-d.s);let h=Math.sin(e.h),u=Math.cos(e.h),p=e.speed,f=e.spec.L;this.honks.length=0;let g=this.map;for(let m of this.cars){let x=m.e,d=x.len,_=m.spec.L,M=1e9,v=0,T=c.get(m.de);for(let nt=0;nt<T.length;nt++){let F=T[nt];if(F===m||F.s<=m.s||F.lane!==m.lane)continue;let Z=F.s-m.s-(F.spec.L+_)/2;Z<M&&(M=Z,v=F.v);break}if(M>200&&m.next>=0){let nt=c.get(m.next);if(nt&&nt.length){let F=nt[0],Z=d-m.s+F.s-(F.spec.L+_)/2;Z<M&&(M=Z,v=F.v)}}m.redAhead=!1;for(let nt of x.signals){if(nt.dir!==m.dir)continue;let F=nt.stop-m.s;if(F<-.5||F>120)continue;let Z=g.signalState(nt.cluster,nt.group,this.time);if(Z==="R"||Z==="Y"&&F>m.v*m.v/7+2){let rt=F-_/2;rt<M&&(M=Math.max(.01,rt),v=0,m.redAhead=!0)}}if((m.type==="van"||m.type==="bus")&&m.stopT<=0){let nt=this.stopsOn.get(m.de);if(nt)for(let F of nt){let Z=F-m.s;if(Z>0&&Z<60&&m.servedStop!==m.de*1e4+Math.round(F)){let rt=Z-_/2+1.5;rt<M&&(M=Math.max(.01,rt),v=0),Z<_/2+1.5&&m.v<.5&&(m.stopT=6+Math.random()*8,m.servedStop=m.de*1e4+Math.round(F))}}}m.stopT>0&&(m.stopT-=t,M=.01,v=0);let w=Math.sin(m.h),E=Math.cos(m.h);{let nt=s-m.x,F=o-m.z,Z=nt*w+F*E,rt=Math.abs(nt*E-F*w);if(Z>0&&Z<45&&rt<2.2){let st=Z-(f+_)/2;st<M&&(M=Math.max(.01,st),v=Math.max(0,p*(h*w+u*E)),m.playerBlock=!0)}else m.playerBlock=!1}if(n)for(let nt of n.crossers){let F=nt.x-m.x,Z=nt.z-m.z,rt=F*w+Z*E,st=Math.abs(F*E-Z*w);if(rt>0&&rt<30&&st<2.6){let dt=rt-_/2-1.5;dt<M&&(M=Math.max(.01,dt),v=0)}}if(i)for(let nt of i){let F=nt.x-m.x,Z=nt.z-m.z,rt=F*w+Z*E,st=Math.abs(F*E-Z*w);if(rt>0&&rt<40&&st<nt.r){let dt=rt-_/2-nt.r;dt<M&&(M=Math.max(.01,dt),v=0)}}let C=m.v0;if(d-m.s<25&&m.next>=0){let nt=g.edges[m.next>>1],F={},Z={};g.sample(x,m.dir,d-.5,0,F),g.sample(nt,m.next&1,.5,0,Z);let rt=F.dx*Z.dx+F.dz*Z.dz;rt<.8&&(C=Math.min(C,4+8*Math.max(0,rt+.2)))}if(m.bump>0&&(m.bump-=t,C=0),m.wrecked){m.v=0,m.brake=!1;continue}let b=1.6*m.aggr,A=2.5,z=2.2,N=1.3/m.aggr,H=m.v-v,B=z+Math.max(0,m.v*N+m.v*H/(2*Math.sqrt(b*A))),k=b*(1-Math.pow(m.v/Math.max(.1,C),4)-(M<1e8?Math.pow(B/Math.max(.1,M),2):0));for(k=Math.max(-9,k),m.brake=k<-.6||m.v<.3,m.v=Math.max(0,m.v+k*t),M<.3&&m.v>0&&(m.v=Math.min(m.v,.2)),m.s+=m.v*t,m.playerBlock&&m.v<.3&&e.speed<1?(m.wait+=t,m.wait>3.5&&Math.random()<t*.6&&this.honks.push(m)):m.wait=Math.max(0,m.wait-t);m.s>=m.e.len;){if(m.next<0){m.dead=!0;break}m.s-=m.e.len,m.de=m.next,m.e=g.edges[m.de>>1],m.dir=m.de&1,m.lane=m.type==="van"||m.type==="bus"?m.e.lanes-1:Math.min(m.e.lanes-1,Math.floor(Math.random()*m.e.lanes)),m.v0=fh[m.e.cls]*(.85+Math.random()*.3)*(m.type==="bus"||m.type==="truck"?.85:1),m.next=this._chooseNext(m),m.transit=!0}let G=this._o||(this._o={});g.sample(m.e,m.dir,Math.min(m.s,m.e.len),g.laneOffset(m.e,m.lane),G),m.transit&&(m.ex=m.x-G.x,m.ez=m.z-G.z,m.transit=!1,Math.hypot(m.ex,m.ez)>12&&(m.ex=m.ez=0));let O=Math.exp(-t*2.5);m.ex*=O,m.ez*=O;let $=G.x+m.ex,Q=G.z+m.ez,P=$-m.x,ut=Q-m.z;if(P*P+ut*ut>1e-4){let F=Math.atan2(P,ut)-m.h;F=Math.atan2(Math.sin(F),Math.cos(F)),m.h+=F*Math.min(1,t*10)}m.x=$,m.z=Q}for(let m=this.cars.length-1;m>=0;m--)this.cars[m].dead&&this._remove(m);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let l in this.models)this.models[l]._i=0;let a=this.night>.5?1.6:.45;for(let l of this.cars){let c=this.models[l.type],h=c._i++;l.wrecked?(this._E=this._E||new Ke,this._E.set(0,l.h+l.wreckYaw,l.wreckRoll,"YXZ"),e.setFromEuler(this._E)):e.setFromAxisAngle(s,l.h),t.compose(n.set(l.x,.03,l.z),e,i),c.p.setMatrixAt(h,t),c.d.setMatrixAt(h,t),c.l.setMatrixAt(h,t),c.p.setColorAt(h,o.setHex(l.color)),l.wrecked?o.multiplyScalar(.45):l.hp<100&&o.multiplyScalar(.75+.25*l.hp/100),(l.wrecked||l.hp<100)&&c.p.setColorAt(h,o);let u=l.wrecked&&performance.now()%1e3<500,p=l.wrecked?u?1.6:.1:l.brake?Math.max(a,1.4):a;c.l.setColorAt(h,o.setRGB(p,p,p))}for(let l in this.models){let c=this.models[l];c.p.count=c.d.count=c.l.count=c._i,c.p.instanceMatrix.needsUpdate=c.d.instanceMatrix.needsUpdate=c.l.instanceMatrix.needsUpdate=!0,c.p.instanceColor&&(c.p.instanceColor.needsUpdate=!0),c.l.instanceColor&&(c.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,l=o.z-t.z;if(a*a+l*l>120)continue;let c=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(c/2.2));for(let p=0;p<u;p++){let f=(p/(u-1)-.5)*(c-h*2),g=o.x+Math.sin(o.h)*f,m=o.z+Math.cos(o.h)*f;for(let[x,d]of i){let _=x-g,M=d-m,v=Math.hypot(_,M),T=s+h;if(v<T&&v>1e-4){let w=_/v,E=M/v,C=T-v;t.x+=w*C,t.z+=E*C;let y=t.vx-Math.sin(o.h)*o.v,b=t.vz-Math.cos(o.h)*o.v,A=y*w+b*E;if(A<0){if(t.vx-=w*A*1.25,t.vz-=E*A*1.25,-A>1.5){o.hp=(o.hp??100)- -A*9;let z=o.hp<=0&&!o.wrecked;z&&(o.wrecked=!0,o.wreckRoll=(Math.random()-.5)*.12,o.wreckYaw=(Math.random()-.5)*.6),e&&e(-A,"car",o,g+w*h,m+E*h,-w,-E,z),t.damage=Math.min(100,t.damage+-A*.6)}o.bump=o.wrecked?1e9:2.5+Math.random()*2,o.v*=.3,o.wait=4}}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var Ff=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],Hf=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],Of=[14200976,13146744,14728864,12094056,13673602],Vf=[1709072,2760728,920586,4864040,6974058],Nv=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],da=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let l=new Ue(o,a,this.N);return l.count=0,l.frustumCulled=!1,l.castShadow=!0,l.instanceMatrix.setUsage($s),t.add(l),l},i=new Mt({roughness:.85}),s=16777215;this.torso=n(Dt(new Pt(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(Dt(new Pt(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(Dt(new Se(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(Dt(new Se(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(Dt(new Pt(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(Dt(new Pt(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(Dt(new Pt(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(Dt(new Pt(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(an([Dt(new Wt(.06,.13,.26,8).translate(0,1.88,0),15921126),Dt(new Wt(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new Mt({vertexColors:!0,roughness:.9})),this.bag=n(Dt(new Pt(.38,.55,.22).translate(0,.32,0),s),i),this.M=new re,this.M2=new re,this.Q=new Oe,this.V=new I,this.S=new I(1,1,1),this.E=new Ke,this.C=new wt,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=Ff[Math.floor(e()*Ff.length)],t.pants=Hf[Math.floor(e()*Hf.length)],t.skin=Of[Math.floor(e()*Of.length)],t.hairC=Vf[Math.floor(e()*Vf.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let l=s-i;l<=s+i;l++)for(let c=o-i;c<=o+i;c++){let h=this.map.chunks.get($e(l,c));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let l=0;l<5;l++){let c=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,p=Math.random()*c.len,f={};this.map.sample(c,u,p,(c.w/2+1.4)*h,f);let g=Math.hypot(f.x-t,f.z-e);if(g<30||g>330||this.map.insideBuilding(f.x,f.z,.3))continue;let m={mode:"walk",e:c,dir:u,s:p,side:h,x:f.x,z:f.z,h:Math.atan2(f.dx,f.dz),ex:0,ez:0,dodge:0};return this._style(m),m}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let l={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(l),l}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let g=i-1;g<=i+1;g++)for(let m=s-1;m<=s+1;m++){let x=this.map.chunks.get($e(g,m));if(x)for(let d of x.crossings){let _=Math.hypot(d[0]-t,d[1]-e);_>40&&_<220&&o.push(d)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],l=this.map.nearestRoad(a[0],a[1],4);if(!l||l.e.cls>4||l.e.w<5)return null;let c=Math.random()<.5?1:-1,h=l.e.w/2+1.2,u=-l.dz,p=l.dx,f={mode:"cross",x:l.x+u*h*c,z:l.z+p*h*c,tx:l.x-u*h*c,tz:l.z-p*h*c,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return f.h=Math.atan2(f.tx-f.x,f.tz-f.z),this._style(f),f.speed=1.4,f}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=Nv.concat(this.extraZones);for(let g of a){let m=Math.hypot(g.x-i,g.z-s);if(g.active=m<420,!g.active)continue;g.count=g.count||0;let x=3;for(;g.count<g.n&&x-- >0&&o.length<this.N-5;){let d=this._spawnPlaza(g);d&&(o.push(d),g.count++)}}let l=0;for(let g of o)g.mode==="walk"&&l++;let c=l<this.target*.5?30:3;for(;l<this.target&&c-- >0&&o.length<this.N-30;){let g=this._spawnWalker(i,s);g&&(o.push(g),l++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let g=this._spawnCrosser(i,s);g&&o.push(g)}let h=Math.sin(e.h),u=Math.cos(e.h),p=e.speed;this.crossers.length=0;let f={};for(let g=o.length-1;g>=0;g--){let m=o[g];if((Math.abs(m.x-i)>380||Math.abs(m.z-s)>380)&&m.mode!=="plaza"){o[g]=o[o.length-1],o.pop();continue}if(m.mode==="plaza"&&!m.zone.active){m.zone.count--,o[g]=o[o.length-1],o.pop();continue}let d=!1;if(m.mode==="walk"){if(m.s+=m.speed*t,m.s>m.e.len){let y=m.dir?m.e.na:m.e.nb,b=[];for(let A of y.out){let z=this.map.edges[A>>1];z!==m.e&&z.cls>=1&&z.cls<=4&&z.w>=5&&b.push(A)}if(!y.out.length||!b.length)m.dir^=1,m.s=0,m.side=-m.side;else{let A=b[Math.floor(Math.random()*b.length)];m.e=this.map.edges[A>>1],m.dir=A&1,m.s=0,m.trans=!0}}this.map.sample(m.e,m.dir,m.s,(m.e.w/2+1.4)*m.side,f),m.trans&&(m.ex=m.x-f.x-m.ex*0,m.ez=m.z-f.z,m.trans=!1,Math.hypot(m.ex,m.ez)>25&&(m.ex=m.ez=0)),m.ex*=Math.exp(-t*.8),m.ez*=Math.exp(-t*.8);let E=f.x+m.ex,C=f.z+m.ez;m.h=Mh(m.h,Math.atan2(E-m.x,C-m.z),t*6),m.x=E,m.z=C,d=!0}else if(m.mode==="plaza")if(m.idle>0)m.idle-=t;else{let E=m.tx-m.x,C=m.tz-m.z,y=Math.hypot(E,C);if(y<.5){m.idle=1+Math.random()*6;let b=m.zone;for(let A=0;A<6;A++){let z=Math.random()*6.28,N=Math.sqrt(Math.random())*b.r,H=b.x+Math.cos(z)*N,B=b.z+Math.sin(z)*N;if(!this.map.insideBuilding(H,B,.6)){let k=this.map.nearestRoad(H,B,8);if(!k||k.dist>k.e.w/2+.5){m.tx=H,m.tz=B;break}}}}else{let b=Math.min(y,m.speed*.85*t);m.x+=E/y*b,m.z+=C/y*b,m.h=Mh(m.h,Math.atan2(E,C),t*5),d=!0}}else if(m.mode==="cross")if(m.wait>0)m.wait-=t;else{let E=m.tx-m.x,C=m.tz-m.z,y=Math.hypot(E,C);if(y<.3){o[g]=o[o.length-1],o.pop();continue}let b=Math.min(y,m.speed*t);m.x+=E/y*b,m.z+=C/y*b,d=!0,m.h=Mh(m.h,Math.atan2(E,C),t*6),this.crossers.push(m)}let _=m.x-i,M=m.z-s,v=_*h+M*u,T=_*u-M*h;if(!m.fixed&&p>2.5&&v>-1&&v<4+p*.45&&Math.abs(T)<2.4&&m.dodge<=0&&(m.dodge=.9,m.dside=T>=0?1:-1,m.scream=!0),m.dodge>0){m.dodge-=t;let E=5.5*t;m.x+=u*m.dside*E,m.z+=-h*m.dside*E,m.mode==="walk"&&(m.ex+=u*m.dside*E,m.ez+=-h*m.dside*E),d=!0}let w=Math.hypot(_,M);if(!m.fixed&&w<2.2&&w>.01){let E=2.2-w;m.x+=_/w*E,m.z+=M/w*E,m.mode==="walk"&&(m.ex+=_/w*E,m.ez+=M/w*E)}m.moving=d,m.phase+=t*(d?m.dodge>0?14:m.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,l=this.list,c=Math.min(l.length,this.N),h=0,u=0;for(let p=0;p<c;p++){let f=l[p],g=f.moving?Math.sin(f.phase):0,m=f.moving?Math.abs(Math.cos(f.phase))*.04:0,x=f.scale;n.setFromAxisAngle(i.set(0,1,0),f.h),t.compose(i.set(f.x,.15+m,f.z),n,s.set(x,x,x)),this.torso.setMatrixAt(p,t),this.hips.setMatrixAt(p,t),this.head.setMatrixAt(p,t),this.hair.setMatrixAt(p,t),this.torso.setColorAt(p,a.setHex(f.shirt)),this.hips.setColorAt(p,a.setHex(f.pants)),this.head.setColorAt(p,a.setHex(f.skin)),this.hair.setColorAt(p,a.setHex(f.hairC));let d=g*.55,_=-g*.5,M=f.dodge>0?2.6:0;fa(this.legL,p,t,e,o,.1,.92,0,d,a.setHex(f.pants)),fa(this.legR,p,t,e,o,-.1,.92,0,-d,a),fa(this.armL,p,t,e,o,.26,1.5,0,_-M,a.setHex(f.shirt)),fa(this.armR,p,t,e,o,-.26,1.5,0,f.wave?-2.7+Math.sin(performance.now()*.008)*.35:-_-M,a),f.kalpak&&this.kalpak.setMatrixAt(h++,t),f.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(f.shirt===1842206?9050650:1846332)),u++)}for(let p of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])p.count=c,p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function fa(r,t,e,n,i,s,o,a,l,c){n.makeRotationX(l),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,c)}function Mh(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var Gf=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],pa=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function kv(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],l=26;for(let z=0;z<=l;z++){let N=z/l,H=-n/2+N*n,B;N<.1?B=i*Math.sqrt(1-Math.pow(1-N/.1,2))*.98+.02:N>.72?B=i*(1-Math.pow((N-.72)/.28,1.6)*.82):B=i,a.push(new tt(Math.max(.05,B),H))}let c=new Go(a,24).rotateX(Math.PI/2);c.rotateY(Math.PI),s.push(Dt(c,r.body)),s.push(Dt(new Pt(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(Dt(new Pt(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(Dt(new Pt(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new Un,u=17*e,p=6.5*e,f=1.6*e,g=7*e;h.moveTo(0,p/2),h.lineTo(u,p/2-g),h.lineTo(u,p/2-g-f),h.lineTo(0,-p/2),h.closePath();let m=new qn(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),x=m.clone().translate(i*.4,0,-n*.02),d=m.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);x.rotateZ(.06),d.rotateZ(-.06),s.push(Dt(x,13159634),Dt(d,13159634));for(let z of[-1,1])s.push(Dt(new Pt(.2,2.2*e,1.4*e).translate(z*(u+i*.4),.6*e,-n*.02-g-.4*e),r.tail));for(let z of[-1,1])for(let N of t?[.33,.62]:[.36]){let H=z*(i*.4+u*N),B=-n*.02+p/2-g*N+2.6*e;s.push(Dt(new Wt(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(H,-1.9*e,B),14211806)),s.push(Dt(new Wt(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(H,-1.9*e,B+2.12*e),2105376)),s.push(Dt(new Pt(.3,1.2*e,2.5*e).translate(H,-1.2*e,B-.5*e),13159634))}let _=new Un;_.moveTo(0,0),_.lineTo(5.2*e,0),_.lineTo(1.8*e,7.2*e),_.lineTo(-.6*e,7.2*e),_.closePath();let M=new qn(_,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(Dt(M,r.tail));let v=new Un;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let T=new qn(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(Dt(T.clone(),13159634),Dt(T.clone().scale(-1,1,1),13159634));let w=an(s),E=[],C=2.45*e,y=(z,N)=>[Dt(new Wt(.13*e,.13*e,C,6).translate(z,-C/2-i*.6,N),10132122),Dt(new Wt(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(z,-C-i*.6+0,N),1381653)];E.push(...y(0,n*.36));for(let z of[-1,1])E.push(...y(z*2.9*e,-n*.06),...y(z*3.5*e,-n*.06));let b=an(E),A=C+i*.6+.55*e;return{body:w,gear:b,groundY:A,len:n,span:u+i*.4,S:e}}function Dr(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let l=new Le(o);return l.colorSpace=be,l.anisotropy=8,l}var ma=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new qt,t.add(this.group);let i=e.runways.sort((u,p)=>p.length-u.length)[0],s=i.length/2,o=new tt(i[0],i[1]),a=new tt(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new tt(-this.u.y,this.u.x),this.rwW=55;let l=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=l,this.tc=l?new tt(l.cx,l.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let c=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(c.x,c.y,200,u=>u.cls<=6);this.dropoff=h?new tt(h.x,h.z):c,this._zoneMarker(),this.goAround=!1}rel(t){let e=new tt(t.x-this.R0.x,t.y-this.R0.y);return new tt(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new Pe(t,e+14,1,1).rotateX(-Math.PI/2),i=new Mt({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new K(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,l,c]of[["07",70,0],["25",t-70,Math.PI]]){let h=Dr(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new K(new Pe(18,18),new Mt({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let p=this.at(l,0),f=new qt;f.add(u),f.position.set(p.x,.05,p.y),f.rotation.y=this.heading+c+Math.PI,this.group.add(f)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let f=0;f<=n;f+=60)for(let g of[-1,1])t.push(this.at(f,g*i)),e.push(f>n-600?[1,.6,.2]:[1,.95,.8]);for(let f=-i;f<=i;f+=3)t.push(this.at(-1,f)),e.push([.2,1,.3]),t.push(this.at(n+1,f)),e.push([1,.1,.1]);for(let f=30;f<n;f+=30)t.push(this.at(f,0)),e.push(f>n-900?Math.floor(f/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let f of this.map.taxiways){let g=f.pts;for(let m=0;m<g.length/2-1;m++){let x=g[m*2],d=g[m*2+1],_=g[m*2+2],M=g[m*2+3],v=Math.hypot(_-x,M-d),T=-(M-d)/v,w=(_-x)/v;for(let E=0;E<v;E+=45)for(let C of[-1,1])t.push(new tt(x+(_-x)*E/v+T*C*(f.w/2+1),d+(M-d)*E/v+w*C*(f.w/2+1))),e.push([.15,.35,1])}}let s=new Se(.28,6,4),o=new fe({color:16777215});this.rwLights=new Ue(s,o,t.length);let a=new re,l=new wt;t.forEach((f,g)=>{a.makeTranslation(f.x,.35,f.y),this.rwLights.setMatrixAt(g,a),this.rwLights.setColorAt(g,l.setRGB(...e[g]))}),this.rwLightCols=e,this.group.add(this.rwLights);let c=[];for(let f=1;f<=30;f++)c.push(this.at(-f*30,0));let h=[];for(let f=1;f<=30;f++)for(let g=-6;g<=6;g+=2)h.push(this.at(-f*30,g));this.alsBars=new Ue(new Se(.3,6,4),new fe({color:16773312}),h.length),h.forEach((f,g)=>{a.makeTranslation(f.x,1.2,f.y),this.alsBars.setMatrixAt(g,a)}),this.group.add(this.alsBars);let u=new Wt(.08,.08,1.2,4).translate(0,.6,0),p=new Ue(u,new Mt({color:7829367}),c.length);c.forEach((f,g)=>{a.makeTranslation(f.x,0,f.y),p.setMatrixAt(g,a)}),this.group.add(p),this.rabbit=new Ue(new Se(.9,8,6),new fe({color:16777215,transparent:!0,opacity:1,blending:Be,depthWrite:!1}),c.length),c.forEach((f,g)=>{a.makeTranslation(f.x,1.4,f.y),this.rabbit.setMatrixAt(g,a),this.rabbit.setColorAt(g,l.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=c.length,this.papi=[];for(let f=0;f<4;f++){let g=this.at(400,-(this.rwW/2+15+f*9)),m=new K(new Pt(2,1,1.2),new fe({color:16719904}));m.position.set(g.x,.6,g.y),this.group.add(m),this.papi.push(m)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new qt,n=new Mt({color:14736596,roughness:.7}),i=new K(new Wt(3.2,4.2,38,16),n);i.position.y=19;let s=new K(new Pt(18,8,14),n);s.position.y=4;let o=new K(new Wt(7.5,4.5,4,8),n);o.position.y=39.5;let a=new K(new Wt(8,7.2,5,8),new Mt({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let l=new K(new Wt(8.6,8.6,1,8),n);l.position.y=47;let c=new K(new Wt(.15,.15,9,5),new Mt({color:13378082}));c.position.y=52,this.beacon=new K(new Se(.6,8,6),new fe({color:16719904})),this.beacon.position.y=57,this.radar=new K(new Pt(7,1.6,.4),new Mt({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,l,c,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=Dr("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new fe({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new K(new Pe(90,7),n),s=null,o=-1e9,a=t.pts;for(let c=0;c<a.length/2;c++){let h=(a[c*2]-t.cx)*this.n.x+(a[c*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=c)}let l=new tt(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(l.x,t.h+4.5,l.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new tt(e[0],e[1]),i=new tt(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(c=>c.p.distanceTo(s)<48))continue;let l=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:l,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new tt(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new Vs(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new fe({color:4245759,transparent:!0,opacity:.8,side:Ae,depthWrite:!1}),this.zone=new K(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new K(new Wt(4.8,4.8,14,32,1,!0),new fe({color:4245759,transparent:!0,opacity:.12,side:Ae,depthWrite:!1,blending:Be}));e.position.y=7,this.zone.add(e);let n=new _n(new pn({map:Dr("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new tt(s.x,s.z):i,this.spotZone=new K(t.clone(),new fe({color:16756768,transparent:!0,opacity:.8,side:Ae,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new _n(new pn({map:Dr("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=Gf[Math.floor(Math.random()*Gf.length)],n=Math.random()<t,i=kv(e,n),s=new Mt({vertexColors:!0,metalness:.35,roughness:.35}),o=new qt,a=new K(i.body,s);a.castShadow=!0;let l=new K(i.gear,s);l.castShadow=!0;let c=new qt;c.add(a,l),o.add(c);let h=(M,v)=>new K(new Se(v,6,4),new fe({color:M,transparent:!0,blending:Be,depthWrite:!1})),u=h(16719904,.5),p=h(2162496,.5),f=h(16777215,.9),g=h(16777215,.9),m=h(16723984,.6),x=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),p.position.set(i.span,-.4,-i.len*.02-7.4*i.S),f.position.copy(u.position),g.position.copy(p.position),m.position.set(0,2.1*i.S,-i.len*.1),x.position.set(0,-1.2*i.S,i.len*.42),c.add(u,p,f,g,m,x);let d=Dr(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let M of[-1,1]){let v=new K(new Pe(3.4*i.S,1.7*i.S),new fe({map:d,transparent:!0}));v.position.set(M*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=M*Math.PI/2,c.add(v)}this.group.add(o);let _={g:o,inner:c,gear:l,a:i,al:e,wide:n,navR:u,navG:p,strL:f,strR:g,bcn:m,land:x,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:pa[Math.floor(Math.random()*pa.length)],gearDown:1,thrust:0};return this.planes.push(_),_}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new tt(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),c=Math.atan2(s,o)-t.h;c=Math.atan2(Math.sin(c),Math.cos(c));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(c)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=Ce.clamp(c,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new tt(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let l=s*2%1,c=new wt;for(let u=0;u<this.alsN;u++){let p=Math.abs((1-l)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,c.setRGB(p,p,p))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,p)=>u.material.color.setHex(p<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(f=>["approach","landing","takeoff","lineup"].includes(f.state)&&!f.cine),p=this._freeStand();if(!u&&p&&this.planes.filter(f=>!f.cine).length<9){let f=this._newPlane();this._startApproach(f)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let p=this.planes[u];if(p!==i){if(this._updatePlane(p,t,h),p.dead){this.group.remove(p.g),this.planes.splice(u,1);continue}this._pose(p,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new tt(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new tt(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new tt(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-Ce.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new tt(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(l=>l.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=pa[Math.floor(Math.random()*pa.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new tt(Math.sin(i.h),Math.cos(i.h)),o=new tt(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=An(s,{}),l=new Mt({color:o,vertexColors:!0,roughness:.5}),c=new qt;c.add(new K(a.paint,l),new K(a.detail,new Mt({vertexColors:!0})));let h=new K(new Se(.2,6,4),new fe({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,c.add(h),c.scale.setScalar(s==="truck"?.75:1),c.children.forEach(u=>u.castShadow=!0),this.group.add(c),this.vehicles.push({g:c,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let l=Math.atan2(i,s)-e.h;l=Math.atan2(Math.sin(l),Math.cos(l)),e.h+=Ce.clamp(l,-t*1.5,t*1.5);let c=Math.abs(l)>.6?2:5;e.x+=Math.sin(e.h)*c*t,e.z+=Math.cos(e.h)*c*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,l)=>new I(a.x,l,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new I(-3500,520,-9e3),new I(-900,430,-2600),new I(150,380,0),new I(1400,390,1600),new I(400,420,4200),new I(-3e3,480,4e3),new I(-6200,560,-1500),new I(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new Rr(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new tt(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new tt(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),l=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let c=Math.atan2(a.x,a.z),h=Math.atan2(l.x*a.z-l.z*a.x,l.x*a.x+l.z*a.z);n.h=c,n.roll+=(Ce.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(Ce.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),l=s.a.S;if(e===0)n.set(s.x-o*70*l,s.y+16*l,s.z-a*70*l),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let c=-a,h=o;n.set(s.x-c*2.3*l+o*2,s.y+.6*l,s.z-h*2.3*l+a*2),i.set(s.x-c*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*l,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new I(s.x,s.y,s.z))>1600)&&(t.camAnchor=new I(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function Bv(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new Le(r);return i.colorSpace=be,i.anisotropy=8,i}var bh=()=>new Mt({color:6965800,metalness:.85,roughness:.38}),Js=(r=10127994)=>new Mt({color:r,roughness:.75}),ga=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new qt,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179)}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new K(new Wt(.22,.45,45,12),new Mt({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new K(new Wt(3.5,4,1.2,24),Js(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new K(new Se(.5,12,8),new Mt({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,l=new Pe(o,a,40,16).translate(o/2,0,0),c=new Mt({map:Bv(),side:Ae,roughness:.75});c.onBeforeCompile=f=>{f.uniforms.uTime=rn.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new K(l,c);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new Mt({color:2767402,roughness:.6}),p=new Mt({color:13146744});for(let f of[-1,1]){let g=new qt,m=new K(new Pt(.45,1.05,.28),u);m.position.y=1.35;let x=new K(new Pt(.38,.85,.24),u);x.position.y=.42;let d=new K(new Se(.12,10,8),p);d.position.y=2;let _=new K(new Wt(.16,.13,.12,10),new Mt({color:1976862}));_.position.y=2.12;let M=new K(new Pt(.05,1.2,.05),new Mt({color:2759184}));M.position.set(.3,1.5,.1),g.add(m,x,d,_,M),g.children.forEach(v=>v.castShadow=!0),g.position.set(t+f*5,1.2,e+3.5),this.g.add(g),this.anim.push({type:"guard",g,base:g.position.clone(),s:f})}}_manas(t,e,n,i=1){let s=new qt,o=new K(new Wt(3.2,3.8,9,8),Js(9075824));o.position.y=4.5;let a=new K(new Wt(6,6.5,1,16),Js(10524808));a.position.y=.5;let l=bh(),c=new qt,h=new K(new Se(1,16,12),l);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new K(new Wt(.55,.8,2.2,10),l);u.position.set(0,4.3,1.9),u.rotation.x=.7;let p=new K(new Pt(.7,.75,1.6),l);p.position.set(0,5.2,2.8),p.rotation.x=.5;let f=new K(new Xn(.35,2.2,8),l);f.position.set(0,2.6,-2.5),f.rotation.x=-.6,c.add(h,u,p,f);for(let[w,E,C]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let y=new K(new Wt(.2,.16,2.4,8).translate(0,-1.2,0),l);y.position.set(w,2.7,E),y.rotation.x=C,c.add(y)}c.rotation.x=-.32,c.position.y=.4;let g=new qt,m=new K(new Wt(.55,.7,1.9,10),l);m.position.y=5;let x=new K(new Se(.42,12,10),l);x.position.y=6.3;let d=new K(new Xn(.45,.8,10),l);d.position.y=6.8;let _=new K(new Wt(.16,.16,1.8,8).translate(0,.9,0),l);_.position.set(.6,5.6,0),_.rotation.z=-.5;let M=new K(new Pt(.08,2.4,.18).translate(0,1.2,0),new Mt({color:10518608,metalness:1,roughness:.25}));M.position.set(1.4,7.1,0),M.rotation.z=-.3;let v=new K(new Pt(1.5,1.8,.1),l);v.position.set(0,4.8,-.7),v.rotation.x=.5,g.add(m,x,d,_,M,v);let T=new qt;T.add(c,g),T.position.y=9,s.add(o,a,T),s.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new qt,i=new Mt({color:8008488,roughness:.55,metalness:.1}),s=new K(new Wt(15,16,1.2,36),Js(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let p=u/3*Math.PI*2,f=new I(Math.cos(p)*12,1,Math.sin(p)*12),g=new I(Math.cos(p)*9,15,Math.sin(p)*9),m=new I(Math.cos(p)*2.5,21,Math.sin(p)*2.5),x=new Os(f,g,m),d=new K(new Wo(x,24,1.1,6,!1),i);n.add(d)}let o=new K(new ji(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new K(new Wt(1.6,1.1,.8,16),new Mt({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let l=new qt,c=new K(new Xn(.9,3.4,10),bh());c.position.y=1.7;let h=new K(new Se(.32,10,8),bh());h.position.y=3.6,l.add(c,h),l.position.set(6.5,1.2,0),n.add(l),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new oe,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new ue(new Float32Array(90*3),3)),s.setAttribute("seed",new ue(o,1));let a=new xe({uniforms:{uTime:rn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:Be}),l=new hi(s,a);l.position.set(t,e,n),l.frustumCulled=!1,this.g.add(l);let c=new es(16747056,0,30,2);return c.position.set(t,e+1.5,n),this.g.add(c),this.anim.push({type:"firelight",light:c}),l}_mosque(){let t=this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(g.name)&&g.kind===8)||this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть/.test(g.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),l=new Mt({color:15921128,roughness:.5}),c=new Mt({color:5939384,metalness:.5,roughness:.25}),h=new Mt({color:14200896,metalness:1,roughness:.2}),u=new K(new Wt(o,o,5,24),l);u.position.set(e,a+2.5,n);let p=new K(new Se(o,32,16,0,Math.PI*2,0,Math.PI/2),c);p.position.set(e,a+5,n),p.scale.y=1.15;let f=new K(new Wt(.15,.3,4,8),h);f.position.set(e,a+5+o*1.15+2,n),this.g.add(u,p,f);for(let[g,m]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=e+g*(i/2-2),d=n+m*(s/2-2),_=new K(new Wt(1.6,2,52,12),l);_.position.set(x,26,d);let M=new K(new Wt(2.6,2.2,1.4,12),l);M.position.set(x,44,d);let v=new K(new Xn(1.7,7,12),c);v.position.set(x,55.5,d);let T=new K(new Wt(.1,.2,2.5,6),h);T.position.set(x,60,d),this.g.add(_,M,v,T),this._col(x,d,2)}this.g.children.slice(-19).forEach(g=>{g.castShadow=!0,g.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new K(new Wt(4.2,4.4,.6,28,1,!0),Js(12103840));s.position.set(n,.3,i);let o=new K(new Ai(4.1,28).rotateX(-Math.PI/2),new Mt({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new oe,l=new Float32Array(140);for(let u=0;u<140;u++)l[u]=Math.random();a.setAttribute("position",new ue(new Float32Array(140*3),3)),a.setAttribute("seed",new ue(l,1));let c=new xe({uniforms:{uTime:rn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new hi(a,c);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new qt,i=new Mt({color:15263976,metalness:.6,roughness:.3}),s=16,o=new qt,a=new K(new ji(s,.25,6,48),i);o.add(a);let l=a.clone();l.position.z=1.6,o.add(l);let c=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,p=new K(new Wt(.08,.08,s,4),i);p.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),p.rotation.z=u-Math.PI/2,o.add(p);let f=new K(new Pt(1.4,1.5,1.4),new Mt({color:c[h%4]}));f.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(f),this.cabins.push({cab:f,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new K(new Wt(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let p=u.clone();p.position.z=2.2,n.add(p)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new qt,i=new Mt({color:10134688,metalness:.6,roughness:.35}),s=new K(new Wt(.5,.75,13,12).rotateX(Math.PI/2),i),o=new K(new Xn(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new Un;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let l=new K(new qn(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),c=new K(new Pt(.15,2.4,2.6),i);c.position.set(0,1.4,-5);let h=new K(new Wt(.6,1,6,8),Js(8947848));h.position.y=-3.4,n.add(s,o,l,c,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var xa=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<e;a++){let l=Math.random()*2-1;s=(s+.02*l)/1.02,i[a]=l*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=2,this.osc=[];for(let[a,l,c]of[["sawtooth",1,.35],["sawtooth",1.01,.3],["square",.5,.25],["triangle",2,.15]]){let h=t.createOscillator();h.type=a;let u=t.createGain();u.gain.value=c,h.connect(u),u.connect(this.engFilter),h.start(),this.osc.push([h,l])}this.engFilter.connect(this.engGain),this.engGain.connect(this.master);let o=(a,l,c)=>{let h=t.createBufferSource();h.buffer=n,h.loop=!0;let u=t.createBiquadFilter();u.type=a,u.frequency.value=l,u.Q.value=c;let p=t.createGain();return p.gain.value=0,h.connect(u),u.connect(p),p.connect(this.master),h.start(Math.random()*.5),{s:h,fl:u,g:p}};this.wind=o("bandpass",600,.4),this.tyre=o("bandpass",1800,6),this.city=o("lowpass",420,.5),this.jet=o("bandpass",900,.6),this.jetLow=o("lowpass",140,1),this.road=o("lowpass",220,.8),this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?e.rpm:0,o=28+s/60*1;for(let[h,u]of this.osc)h.frequency.setTargetAtTime(o*u,i,.03);let a=n.throttle||0;this.engFilter.frequency.setTargetAtTime(350+s*.35+a*900,i,.05),this.engGain.gain.setTargetAtTime(n.inFlight?0:.05+a*.08+s/7e3*.06,i,.05);let l=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(l/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+l*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,l/40*.25),i,.1),this.tyre.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.5,Math.max(0,(e.slip-.18)*1.6))*(l>5?1:0),i,.04),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let c=n.jet||0;this.jet.g.gain.setTargetAtTime(c*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(c*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+c*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=2+Math.random()*6/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=2200;for(let l of[405*n,507*n]){let c=i.createOscillator();c.type="square",c.frequency.value=l,c.connect(a),c.start(s),c.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*120,n),l.frequency.exponentialRampToValueAtTime(60,n+.3);let c=e.createGain();c.gain.setValueAtTime(a*.5,n),c.gain.exponentialRampToValueAtTime(.001,n+.35),l.connect(c),c.connect(this.master),l.start(n),l.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let l=t.createBufferSource();l.buffer=this.noise;let c=t.createBiquadFilter();c.type="highpass",c.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),l.connect(c),c.connect(h),h.connect(this.master),l.start(e+a),l.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var fi=150,Fe=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],va=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=3e3,this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Fe){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Fe.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color,this.owned=t.owned,this.jobsDone=t.jobs||0,this.custom=t.custom,this.upgrades=t.upgrades)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:this.homeCar||t?.type,color:this.homeColor??t?.color,owned:[...this.owned||["sedan"]],jobs:this.jobsDone||0,custom:this.custom,upgrades:this.upgrades}))}catch{}}issueFine(t,e,n,i){this.money-=e;let s={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i};this.fines.push(s),this.audio.fine(),this.hud.showFine(s),this.onFine&&this.onFine(s)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,l=this.speedState;if(a>fi){if(l.over+=t,l.maxSpeed=Math.max(l.maxSpeed,a),l.armed&&l.over>.6){l.armed=!1,l.lastFine=this.time;let c=Math.round(l.maxSpeed),h=c>200?750:c>170?500:300,u=n.street?` on ${n.street}`:"";o(p=>this.issueFine("Speeding",h,`${c} km/h in a 150 km/h zone${u}`,p))}!l.armed&&this.time-l.lastFine>12&&(l.armed=!0,l.maxSpeed=0,l.over=0)}else a<fi-5&&(l.armed=!0,l.over=0,l.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let c=n.road;for(let f of c.e.signals){let g=Math.sin(e.h),m=Math.cos(e.h),x=g*c.dx+m*c.dz,d=x>=0?0:1;if(f.dir!==d||Math.abs(x)<.7)continue;let _=d?c.e.len-c.s:c.s,M=e._sOnEdge&&e._sOnEdge.e===c.e?e._sOnEdge.s:null;if(M!==null&&M<f.stop&&_>=f.stop){let v=d?-c.lat:c.lat;(c.e.ow||v>-.5)&&this.map.signalState(f.cluster,f.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(T=>this.issueFine("Red light",100,`Ran a red light${n.street?" on "+n.street:""}`,T)))}}let h=Math.sin(e.h),u=Math.cos(e.h),p=h*c.dx+u*c.dz>=0?0:1;e._sOnEdge={e:c.e,s:p?c.e.len-c.s:c.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let c=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;c<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",150,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=c<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(c=>this.issueFine("Runway incursion",1e3,"Entered the active runway at Manas International Airport",c)))):(this.runwayT=0,n.runway=!1)}checkLandmarks(t){for(let e of Fe)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Fe.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,l=this.map.nearestRoad(o,a,80,x=>x.cls>=1&&x.cls<=4);if(!l)continue;let c=l.lat>=0?1:-1,h=l.e.w/2+1.2,u=l.x-l.dz*h*c,p=l.z+l.dx*h*c;if(this.map.insideBuilding(u,p,.5))continue;let f=Fe.filter(x=>Math.hypot(x.x-u,x.z-p)>700&&(!x.airport||Math.random()<.5)),g=f[Math.floor(Math.random()*f.length)],m=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:p,dest:g,passenger:m[Math.floor(Math.random()*m.length)],t:0,start:null},this.setRoute(u,p,"Pick up "+this.mission.passenger),e){let x={mode:"plaza",zone:{x:u,z:p,r:.1,active:!0,count:0},x:u,z:p,h:0,tx:u,tz:p,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};x.shirt=15909376,x.pants=2238522,x.skin=14200976,x.hairC=1709072,x.scale=1,x.speed=1.2,x.phase=0,x.fixed=!0,e.list.push(x),this.mission.ped=x}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,l=i.fare+a;this.money+=l,this.audio.cash(),this.hud.toast(`Fare paid: ${Zn(i.fare)} coins. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],l=this.route[s+2],c=this.route[s+3],h=l-o,u=c-a,p=h*h+u*u||1,f=((t.x-o)*h+(t.z-a)*u)/p;f=Math.max(0,Math.min(1,f)),i=Math.min(i,Math.hypot(t.x-o-h*f,t.z-a-u*f))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let l=0;l<e.length/2;l++){l>0&&(o+=Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));let c=Math.max(0,l-1),h=Math.min(e.length/2-1,l+1),u=e[h*2]-e[c*2],p=e[h*2+1]-e[c*2+1],f=Math.hypot(u,p)||1;u/=f,p/=f;let g=1.1;if(n.push(e[l*2]-p*g,.22,e[l*2+1]+u*g,e[l*2]+p*g,.22,e[l*2+1]-u*g),i.push(o,0,o,1),l>0){let m=l*2;s.push(m-2,m,m-1,m-1,m,m+1)}}let a=new oe;a.setAttribute("position",new $t(n,3)),a.setAttribute("uv",new $t(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new xe({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:Ae})),this.routeMesh=new K(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function Zn(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var Wf=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],Xf=[5,4.2,3.4,2.6,2,1.6,1.2],de=r=>document.getElementById(r),ya=class{constructor(t){this.map=t,this.speedo=de("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=de("minimap"),this.mctx=this.mini.getContext("2d"),this.big=de("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,l=Math.min(n,i)/2-6*s,c=t.speed*3.6,h=260,u=Math.PI*.75,p=Math.PI*2.25,f=d=>u+(p-u)*Math.min(1,d/h),g=e.createRadialGradient(o,a,l*.2,o,a,l);g.addColorStop(0,"rgba(20,24,30,0.92)"),g.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=g,e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,l-10*s,f(fi),p),e.stroke(),e.lineWidth=7*s,e.strokeStyle=c>fi?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,l-10*s,u,f(c)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let d=0;d<=h;d+=10){let _=f(d),M=d%20===0;e.strokeStyle=d>fi?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(M?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(_)*(l-18*s),a+Math.sin(_)*(l-18*s)),e.lineTo(o+Math.cos(_)*(l-(M?28:23)*s),a+Math.sin(_)*(l-(M?28:23)*s)),e.stroke(),M&&d%40===0&&e.fillText(d,o+Math.cos(_)*(l-40*s),a+Math.sin(_)*(l-40*s))}let m=f(c);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(m)*12*s,a-Math.sin(m)*12*s),e.lineTo(o+Math.cos(m)*(l-22*s),a+Math.sin(m)*(l-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=c>fi?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(c),o,a+l*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+l*.62);let x=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=x>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,x)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gearLabel||"1",o,a-l*.12)}_miniBase(t,e,n){let i=this.mini.width,s=Math.ceil(i*2.2);(!this._mb||this._mb.width!==s)&&(this._mb=document.createElement("canvas"),this._mb.width=this._mb.height=s,this._mbS=0);let o=s/2/e;if(this._mbS===e&&Math.hypot(t.x-this._mbX,t.z-this._mbZ)<o*.35)return;this._mbS=e,this._mbX=t.x,this._mbZ=t.z;let a=this._mb.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="#1d2329",a.fillRect(0,0,s,s),a.translate(s/2,s/2),a.scale(e,e),a.translate(-t.x,-t.z);let l=400,c=Math.ceil(o/l)+1,h=Math.floor(t.x/l),u=Math.floor(t.z/l);a.fillStyle="#2f3741",a.beginPath();for(let p=h-c;p<=h+c;p++)for(let f=u-c;f<=u+c;f++){let g=this.map.chunks.get($e(p,f));if(g)for(let m of g.buildings){if(Math.abs(m.cx-t.x)>o||Math.abs(m.cz-t.z)>o)continue;let x=m.pts;a.moveTo(x[0],x[1]);for(let d=2;d<x.length;d+=2)a.lineTo(x[d],x[d+1]);a.closePath()}}a.fill(),a.lineCap="round",a.lineJoin="round";for(let p=6;p>=0;p--){a.strokeStyle=Wf[p];for(let f=h-c;f<=h+c;f++)for(let g=u-c;g<=u+c;g++){let m=this.map.chunks.get($e(f,g));if(m)for(let x of m.edges){if(x.cls!==p)continue;a.lineWidth=Math.max(x.w,3/e);let d=x.pts;a.beginPath(),a.moveTo(d[0],d[1]);for(let _=2;_<d.length;_+=2)a.lineTo(d[_],d[_+1]);a.stroke()}}}n&&(a.strokeStyle="#8a9098",a.lineWidth=n.rwW,a.beginPath(),a.moveTo(n.R0.x,n.R0.y),a.lineTo(n.R1.x,n.R1.y),a.stroke())}drawMini(t,e,n,i,s,o){let a=this.mctx,l=this.mini.width,c=this.mini.height,h=this.dpr,u=.55*h*(t.speed>25?.75:1);this._miniBase(t,u,i),a.save(),a.clearRect(0,0,l,c),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.clip(),a.translate(l/2,c/2+c*.12),a.rotate(t.h+Math.PI);let p=this._mb.width;a.drawImage(this._mb,(this._mbX-t.x)*u-p/2,(this._mbZ-t.z)*u-p/2),a.scale(u,u),a.translate(-t.x,-t.z);let f=l/u*.8;if(o&&o(a,u,f),i)for(let d of i.planes)a.fillStyle="#ffffff",a.beginPath(),a.arc(d.x,d.z,14,0,7),a.fill();if(n.route){a.strokeStyle="#3fc8ff",a.lineWidth=6/u*h,a.globalAlpha=.9;let d=n.route;a.beginPath(),a.moveTo(d[0],d[1]);for(let _=2;_<d.length;_+=2)a.lineTo(d[_],d[_+1]);a.stroke(),a.globalAlpha=1}a.fillStyle="#ff9a3a";for(let d of e.cars)Math.abs(d.x-t.x)<f&&Math.abs(d.z-t.z)<f&&a.fillRect(d.x-1.6,d.z-1.6,3.2,3.2);for(let d of Fe)d.x===void 0||Math.abs(d.x-t.x)>f||Math.abs(d.z-t.z)>f||(a.fillStyle=n.visited.has(d.id)?"#6ad06a":"#ffd84a",a.beginPath(),a.arc(d.x,d.z,6/u*h,0,7),a.fill());if(n.routeTarget&&(a.fillStyle="#ff3a6a",a.beginPath(),a.arc(n.routeTarget.x,n.routeTarget.z,8/u*h,0,7),a.fill()),s)for(let d of s.players.values())a.fillStyle="#3ddc84",a.beginPath(),a.arc(d.x,d.z,6/u*h,0,7),a.fill();a.restore(),a.save(),a.translate(l/2,c/2+c*.12),a.fillStyle="#3fc8ff",a.strokeStyle="#fff",a.lineWidth=2*h,a.beginPath(),a.moveTo(0,-10*h),a.lineTo(7*h,8*h),a.lineTo(0,4*h),a.lineTo(-7*h,8*h),a.closePath(),a.fill(),a.stroke(),a.restore();let g=t.h+Math.PI;a.fillStyle="#ff5050",a.font=`700 ${12*h}px Inter, Arial`,a.textAlign="center",a.textBaseline="middle";let m=l/2+Math.sin(g)*(l/2-14*h),x=c/2-Math.cos(g)*(c/2-14*h);a.fillText("N",m,x),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.strokeStyle="rgba(255,255,255,0.25)",a.lineWidth=2*h,a.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",e=>{t={x:e.clientX,y:e.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",e=>{if(!t)return;let n=e.clientX-t.x,i=e.clientY-t.y;Math.abs(n)+Math.abs(i)>4&&(t.moved=!0),this.mapView.x=t.vx-n*this.dpr/this.mapView.s,this.mapView.z=t.vz-i*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",e=>{if(t&&!t.moved&&this.onMapClick){let n=this.big.getBoundingClientRect(),i=this.mapView.x+((e.clientX-n.left)*this.dpr-this.big.width/2)/this.mapView.s,s=this.mapView.z+((e.clientY-n.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(i,s,e.shiftKey)}t=null}),this.big.addEventListener("wheel",e=>{e.preventDefault();let n=e.deltaY<0?1.2:1/1.2;this.mapView.s=Math.max(.02,Math.min(2.5,this.mapView.s*n)),this.mapDirty=!0},{passive:!1})}drawBigMap(t,e,n,i){let s=this.big.width,o=this.big.height,a=this.mapView,l=[a.x|0,a.z|0,a.s.toFixed(4),s,o,e.route?e.route.length+":"+(e.route[0]|0):0,this.searchMark?this.searchMark.x:0,e.visited.size].join("|");(!this._base||this._base.width!==s||this._base.height!==o)&&(this._base=document.createElement("canvas"),this._base.width=s,this._base.height=o,this._mapKey=null),l!==this._mapKey&&(this._mapKey=l,this._drawMapBase(this._base.getContext("2d"),t,e,n));let c=this.bctx;c.drawImage(this._base,0,0);let h=(g,m)=>[(g-a.x)*a.s+s/2,(m-a.z)*a.s+o/2];if(c.font=`600 ${11*this.dpr}px Inter, Arial`,c.textAlign="center",i)for(let g of i.players.values()){let[m,x]=h(g.x,g.z);c.fillStyle="#3ddc84",c.beginPath(),c.arc(m,x,6*this.dpr,0,7),c.fill(),c.fillStyle="#fff",c.fillText(g.name,m,x-10*this.dpr)}let[u,p]=h(t.x,t.z);c.save(),c.translate(u,p),c.rotate(Math.PI-t.h),c.fillStyle="#3fc8ff",c.strokeStyle="#fff",c.lineWidth=2*this.dpr;let f=this.dpr;c.beginPath(),c.moveTo(0,-11*f),c.lineTo(8*f,9*f),c.lineTo(0,4*f),c.lineTo(-8*f,9*f),c.closePath(),c.fill(),c.stroke(),c.restore()}_drawMapBase(t,e,n,i,s){let o=this.big.width,a=this.big.height,l=this.mapView,c=l.s;t.fillStyle="#161b20",t.fillRect(0,0,o,a),t.save(),t.translate(o/2,a/2),t.scale(c,c),t.translate(-l.x,-l.z);let h=l.x-o/2/c,u=l.x+o/2/c,p=l.z-a/2/c,f=l.z+a/2/c,g={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let x of this.map.areaList){let d=g[x[0]];if(!d)continue;let _=x[1];if(!(_[0]*.1<h-2e3||_[0]*.1>u+2e3||_[1]*.1<p-2e3||_[1]*.1>f+2e3)){t.fillStyle=d,t.beginPath(),t.moveTo(_[0]*.1,_[1]*.1);for(let M=2;M<_.length;M+=2)t.lineTo(_[M]*.1,_[M+1]*.1);t.fill()}}if(c>.035){t.fillStyle=c>.25?"#343c46":"#2a3139";for(let x of this.map.buildings){if(x.cx<h||x.cx>u||x.cz<p||x.cz>f)continue;let d=x.pts;t.beginPath(),t.moveTo(d[0],d[1]);for(let _=2;_<d.length;_+=2)t.lineTo(d[_],d[_+1]);t.fill()}}t.lineCap="round",t.lineJoin="round";for(let x=6;x>=0;x--)if(!(c<.08&&x>=5)){t.strokeStyle=Wf[x],t.lineWidth=Math.max(Xf[x]*.6/c*this.dpr*.5,(this.map.edges[0],0))||1,t.beginPath();for(let d of this.map.edges){if(d.cls!==x)continue;let _=d.pts;if(!(_[0]<h-500||_[0]>u+500||_[1]<p-500||_[1]>f+500)){t.moveTo(_[0],_[1]);for(let M=2;M<_.length;M+=2)t.lineTo(_[M],_[M+1])}}t.lineWidth=Math.max(Xf[x]*.5/c*this.dpr,(7-x)*1.2),c>.5&&(t.lineWidth=Math.max(t.lineWidth,6)),t.stroke()}if(i&&(t.strokeStyle="#9aa0a8",t.lineWidth=Math.max(55,3/c),t.beginPath(),t.moveTo(i.R0.x,i.R0.y),t.lineTo(i.R1.x,i.R1.y),t.stroke()),n.route){t.strokeStyle="#3fc8ff",t.lineWidth=5/c*this.dpr;let x=n.route;t.beginPath(),t.moveTo(x[0],x[1]);for(let d=2;d<x.length;d+=2)t.lineTo(x[d],x[d+1]);t.stroke()}t.restore();let m=(x,d)=>[(x-l.x)*c+o/2,(d-l.z)*c+a/2];t.font=`600 ${12*this.dpr}px Inter, Arial`,t.textAlign="center";for(let x of Fe){if(x.x===void 0)continue;let[d,_]=m(x.x,x.z);d<-50||d>o+50||_<-50||_>a+50||(t.fillStyle=n.visited.has(x.id)?"#6ad06a":"#ffd84a",t.beginPath(),t.arc(d,_,5*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.6)",t.fillText(x.name,d+1,_-9*this.dpr+1),t.fillStyle="#fff",t.fillText(x.name,d,_-9*this.dpr))}if(c>.18){t.font=`${10*this.dpr}px Inter, Arial`,t.fillStyle="rgba(255,255,255,0.75)";let x=new Set;for(let d of this.map.edges){if(d.cls>2||d.name<0||d.len<150)continue;let _=this.map.names[d.name],M=_[1]||_[0],v=Math.floor(d.pts.length/4)*2,[T,w]=m(d.pts[v],d.pts[v+1]);if(T<0||T>o||w<0||w>a)continue;let E=M+Math.round(T/220)+","+Math.round(w/220);x.has(E)||(x.add(E),t.fillText(M,T,w))}}if(this.searchMark){let[x,d]=m(this.searchMark.x,this.searchMark.z),_=this.dpr;t.fillStyle="#ff3a6a",t.strokeStyle="#fff",t.lineWidth=2*_,t.beginPath(),t.moveTo(x,d),t.arc(x,d-18*_,9*_,Math.PI*.8,Math.PI*2.2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(x,d-18*_,3.5*_,0,7),t.fill()}if(n.routeTarget){let[x,d]=m(n.routeTarget.x,n.routeTarget.z);t.fillStyle="#ff3a6a",t.beginPath(),t.arc(x,d,7*this.dpr,0,7),t.fill()}t.fillStyle="rgba(255,255,255,0.5)",t.textAlign="right",t.font=`${10*this.dpr}px Inter, Arial`,t.fillText("Map data \xA9 OpenStreetMap contributors",o-10*this.dpr,a-10*this.dpr)}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t&&t!==this._street&&(this._street=t,de("street").innerHTML=`${t}<small>${e||""}</small>`,de("street").classList.add("show"),clearTimeout(this._stTo),this._stTo=setTimeout(()=>de("street").classList.remove("show"),4e3))}setMoney(t){let e=Zn(t);if(e!==this._money){let n=this._mv!==void 0&&t>this._mv;if(this._money=e,this._mv=t,de("money").textContent=e,de("coins").classList.toggle("neg",t<0),n){let i=de("coins");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}}setClock(t,e){this.hour=t;let n=this.clockText()+(e!=null?` \xB7 <span class="dot ${e>0?"on":""}"></span>${e+1}`:"");n!==this._clk&&(this._clk=n,de("clock").innerHTML=n)}setLimit(t,e,n){let i=t>fi;de("limit").classList.toggle("show",t>fi-12),de("limit").classList.toggle("over",i);let s=n?"ACTIVE RUNWAY \u2013 LEAVE NOW":e?"WRONG WAY":"";s!==this._w&&(this._w=s,de("warn").textContent=s,de("warn").classList.toggle("show",!!s))}setMission(t){t!==this._mission&&(this._mission=t,de("mission").innerHTML=t||"",de("mission").classList.toggle("show",!!t))}toast(t,e=3){let n=de("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=de("fine");de("fineKind").textContent=t.kind.toUpperCase(),de("fineAmt").textContent="\u2212"+Zn(t.amount)+" coins",de("fineDetail").textContent=t.detail,de("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=de("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=de("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=de("discover");de("discName").textContent=t.name,de("discLocal").textContent=t.local||"",de("discFact").textContent=t.fact,de("discCount").textContent=`Landmark ${e}/${n} \xB7 +500 coins`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=de("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),de("fhAlt").textContent=Math.round(t.alt)+" m",de("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",de("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",de("fhStage").textContent=t.stage,de("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var Fv=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar","Saltanat","Ulan","Aidana","Bekzat","Kymbat","Marat"],Jn=r=>r[Math.floor(Math.random()*r.length)],ns={taxi:{name:"Taxi driver",icon:"\u{1F695}",desc:"Pick up passengers anywhere in the city"},bus:{name:"Bus driver",icon:"\u{1F68C}",desc:"Drive a city bus route, stop at every bus stop",car:"bus"},marshrutka:{name:"Marshrutka driver",icon:"\u{1F690}",desc:"Minibus route \u2013 faster, fewer passengers",car:"van"},courier:{name:"Courier",icon:"\u{1F4E6}",desc:"Deliver food & parcels from real shops"}},_a=class{constructor(t,e,n,i,s){this.map=t,this.game=e,this.hud=n,this.audio=i,this.peds=s,this.active=null,this.marker=null,this.completed=0,this.shops=[];for(let o of t.chunks.values())for(let a of o.signs)["cafe","restaurant","fast_food","supermarket","convenience","pharmacy","bakery","clothes"].includes(a.kind)&&this.shops.push(a)}_marker(t,e,n,i=16760864){if(!this.markerMesh){let s=new qt,o=new K(new Vs(3.2,3.8,48).rotateX(-Math.PI/2),new fe({color:i,transparent:!0,opacity:.9,depthWrite:!1}));o.position.y=.25;let a=new K(new Wt(3.5,3.5,40,32,1,!0),new fe({color:i,transparent:!0,opacity:.1,side:Ae,depthWrite:!1,blending:Be}));a.position.y=20,s.add(o,a),this.markerMesh=s,this.ring=o,this.beam=a}this.ring.material.color.setHex(i),this.beam.material.color.setHex(i),this.markerMesh.position.set(e,0,n),this.markerMesh.parent||t.add(this.markerMesh),this.markerMesh.visible=!0}_hideMarker(){this.markerMesh&&(this.markerMesh.visible=!1)}_curbPoint(t,e,n=120){let i=this.map.nearestRoad(t,e,n,a=>a.cls>=1&&a.cls<=5);if(!i)return null;let s=i.lat>=0?1:-1,o=i.e.w/2+1.3;return{x:i.x-i.dz*o*s,z:i.z+i.dx*o*s,roadX:i.x-i.dz*(i.e.w/2-1.5)*s,roadZ:i.z+i.dx*(i.e.w/2-1.5)*s}}_spawnPed(t,e,n=!1,i){let s={mode:"plaza",zone:{x:t,z:e,r:.1,active:!0,count:0},x:t,z:e,h:0,tx:t,tz:e,idle:1e9,ex:0,ez:0,dodge:0,wave:n,fixed:!0};return s.shirt=i??Jn([15909376,1981018,9054794,15263976,3890490]),s.pants=2238522,s.skin=Jn([14200976,13146744,14728864]),s.hairC=1709072,s.scale=.95+Math.random()*.1,s.speed=1.3,s.phase=0,this.peds.list.push(s),s}_removePed(t){let e=this.peds.list.indexOf(t);e>=0&&this.peds.list.splice(e,1)}start(t,e,n,i){if(this.stop(e,i,!0),t==="taxi")return this._startTaxi(e,n);if(t==="courier")return this._startCourier(e,n);if(t==="bus"||t==="marshrutka")return this._startBus(t,e,n,i)}stop(t,e,n){let i=this.active;i&&(i.ped&&this._removePed(i.ped),i.boarders&&i.boarders.forEach(s=>this._removePed(s)),i.prevCar&&e&&e(i.prevCar.type,i.prevCar.color,!0),this.active=null,this._hideMarker(),this.game.clearRoute(),n||this.hud.toast("Shift ended",1.5))}_startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=this._curbPoint(t.x+Math.cos(i)*s,t.z+Math.sin(i)*s,80);if(!o||this.map.insideBuilding(o.x,o.z,.5))continue;let a=Fe.filter(c=>c.x!==void 0&&Math.hypot(c.x-o.x,c.z-o.z)>700&&(!c.airport||Math.random()<.35)),l=Jn(a);if(Math.random()<.5&&this.shops.length){let c=Jn(this.shops);Math.hypot(c.x-o.x,c.z-o.z)>600&&(l={name:c.name,x:c.x,z:c.z})}return this.active={type:"taxi",stage:"pickup",x:o.x,z:o.z,dest:l,passenger:Jn(Fv),t:0,damage0:t.damage},this.active.ped=this._spawnPed(o.x,o.z,!0,15909376),this.game.setRoute(o.x,o.z,"Passenger"),this._marker(e,o.x,o.z,16760864),this.audio.chime(),this.hud.toast(`\u{1F695} <b>${this.active.passenger}</b> is waiting for a taxi`,3),!0}return!1}_startCourier(t,e){let n=this.shops.filter(c=>{let h=Math.hypot(c.x-t.x,c.z-t.z);return h>120&&h<900});if(!n.length)return!1;let i=Jn(n),s=this._curbPoint(i.x,i.z,60)||{x:i.x,z:i.z},o=null;for(let c=0;c<60&&!o;c++){let h=this.map.buildings[Math.floor(Math.random()*this.map.buildings.length)],u=Math.hypot(h.cx-s.x,h.cz-s.z);u>900&&u<3200&&h.h>3&&(o=h)}if(!o)return!1;let a=this._curbPoint(o.cx,o.cz,80)||{x:o.cx,z:o.cz},l={cafe:"coffee & samsa",restaurant:"plov & lagman",fast_food:"shawarma",supermarket:"groceries",convenience:"a parcel",pharmacy:"medicine",bakery:"fresh nan",clothes:"a clothes parcel"}[i.kind]||"a parcel";return this.active={type:"courier",stage:"pickup",x:s.x,z:s.z,shop:i,item:l,dest:{name:"Customer",x:a.x,z:a.z},t:0,damage0:t.damage},this.game.setRoute(s.x,s.z,i.name),this._marker(e,s.x,s.z,4251776),this.audio.chime(),this.hud.toast(`\u{1F4E6} Pick up <b>${l}</b> at <b>${i.name}</b>`,3),!0}_startBus(t,e,n,i){let s=this.map.busStopList,o=s.map(a=>({s:a,d:Math.hypot(a[0]-e.x,a[1]-e.z)})).filter(a=>a.d<1500).sort((a,l)=>a.d-l.d).slice(0,12);if(!o.length)return this.hud.toast("No bus stops nearby \u2013 drive into the city",2),!1;for(let a=0;a<12;a++){let l=Jn(o).s,c=s.filter(_=>{let M=Math.hypot(_[0]-l[0],_[1]-l[1]);return M>2500&&M<5500});if(!c.length)continue;let h=Jn(c),u=this.map.route(l[0],l[1],h[0],h[1]);if(!u||u.length<8)continue;let p=[],f=0;for(let _=0;_<u.length-2;_+=2){let M=u[_],v=u[_+1],T=u[_+2],w=u[_+3],E=T-M,C=w-v,y=Math.hypot(E,C)||1;for(let b of s){if(Math.abs(b[0]-M)>y+25||Math.abs(b[1]-v)>y+25)continue;let A=((b[0]-M)*E+(b[1]-v)*C)/(y*y);if(A<0||A>1)continue;let z=M+E*A,N=v+C*A,H=((b[0]-M)*-C+(b[1]-v)*E)/y;Math.abs(H)<22&&H>-4&&p.push({x:b[0],z:b[1],d:f+A*y,px:z,pz:N})}f+=y}p.sort((_,M)=>_.d-M.d);let g=[];for(let _ of p)(!g.length||_.d-g[g.length-1].d>220)&&g.push(_);if(g.length<4)continue;let m=Jn(t==="bus"?["7","20","31","35","38","42","48","52","62","64"]:["107","110","126","144","150","174","192","206","212","238","246","265"]);this.active={type:t,stage:"drive",stops:g.slice(0,12),i:0,num:m,t:0,pax:0,earned:0,boarders:[],prevCar:{type:e.type,color:e.color}},i(ns[t].car,t==="bus"?2783802:16053492,!1);let x=this.active.stops[0],d=this.map.nearestRoad(x.px,x.pz,40,_=>_.cls<=4);if(d){let _=this.map.laneOffset(d.e,(d.e.ow,d.e.lanes-1)),M=u[2]-u[0],v=u[3]-u[1],T=d.dx,w=d.dz;T*M+w*v<0&&(T=-T,w=-w),e.place(d.x-w*_,d.z+T*_,Math.atan2(T,w))}return this.active.i=1,this._nextStop(n),this.audio.chime(),this.hud.toast(`${ns[t].icon} Route <b>${m}</b>: ${g.length} stops. Stop at each bus stop to pick up passengers.`,4),!0}return this.hud.toast("Could not build a route here \u2013 try on a main avenue",2),!1}_nextStop(t){let e=this.active,n=e.stops[e.i];this.game.setRoute(n.x,n.z,`Stop ${e.i+1}/${e.stops.length}`),this._marker(t,n.px,n.pz,4235519),e.boarders.forEach(s=>this._removePed(s)),e.boarders=[];let i=1+Math.floor(Math.random()*(e.type==="bus"?6:4));for(let s=0;s<i;s++)e.boarders.push(this._spawnPed(n.x+(Math.random()-.5)*4,n.z+(Math.random()-.5)*3,!1))}update(t,e,n,i){let s=this.active;return s?(s.t+=t,this.markerMesh&&(this.ring.rotation.y+=t,this.beam.material.opacity=.08+.05*Math.sin(s.t*4)),s.type==="taxi"||s.type==="courier"?this._updateAB(t,e,n):this._updateBus(t,e,n,i)):null}_updateAB(t,e,n){let i=this.active,s=Math.hypot(e.x-i.x,e.z-i.z);if(i.ped&&i.stage==="pickup"&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.moving=!1),i.stage==="pickup"&&s<10&&e.speed<1.5)return i.ped?(i.stage="boarding",i.ped.wave=!1,i.ped.tx=e.x,i.ped.tz=e.z,i.ped.idle=0,i.ped.zone.r=.1,i.bt=0):this._beginRide(e,n),null;if(i.stage==="boarding"){i.bt+=t;let o=i.ped,a=e.x-o.x,l=e.z-o.z,c=Math.hypot(a,l);return c>2&&i.bt<5?(o.x+=a/c*1.6*t,o.z+=l/c*1.6*t,o.h=Math.atan2(a,l),o.moving=!0,o.phase+=t*8):(this._removePed(o),i.ped=null,this.audio.blip(520,.06),this._beginRide(e,n)),null}if(i.stage==="ride"&&s<14&&e.speed<1.5){let o=i.t-i.t0,a=i.dist,l=i.type==="taxi"?120+a/1e3*55:90+a/1e3*45,c=a/1e3*95+35,h=Math.max(0,e.damage-i.damage0),u=o<c?Math.min(l*.4,(c-o)*1.2):0,p=h*(i.type==="courier"?6:3),f=Math.max(1,Math.min(5,Math.round(5-h/8-Math.max(0,o-c)/40))),g=Math.max(20,Math.round((l+u-p)*(.6+f*.1)/5)*5);this.game.money+=g,this.completed++,this.audio.cash(),this.hud.toast(`${i.type==="taxi"?"\u{1F695}":"\u{1F4E6}"} +${g} coins \xB7 ${"\u2605".repeat(f)}${"\u2606".repeat(5-f)}${i.type==="taxi"?` \xB7 ${i.passenger}: "Rahmat!"`:""}`,4);let m=i.type;return this.active=null,this._hideMarker(),this.game.clearRoute(),this.nextIn=3,this.nextType=m,{done:!0,coins:g}}return null}_beginRide(t,e){let n=this.active;n.stage="ride",n.t0=n.t,n.x=n.dest.x,n.z=n.dest.z,n.dist=Math.hypot(n.x-t.x,n.z-t.z),this.game.setRoute(n.x,n.z,n.dest.name),this._marker(e,n.x,n.z,n.type==="taxi"?16728160:4251776),this.audio.chime(),this.hud.toast(n.type==="taxi"?`${n.passenger}: "Salam! To ${n.dest.name}, please."`:`\u{1F4E6} Got ${n.item}. Deliver it carefully!`,3)}_updateBus(t,e,n,i){let s=this.active,o=s.stops[s.i],a=Math.hypot(e.x-o.px,e.z-o.pz);if(s.stage==="drive"&&a<14&&e.speed<1&&(s.stage="doors",s.dt=0,this.audio.blip(440,.1)),s.stage==="doors"){s.dt+=t;let l=0;for(let c of s.boarders){if(c.gone)continue;let h=e.x-c.x,u=e.z-c.z,p=Math.hypot(h,u);p<2.8||s.dt>7?(c.gone=!0,this._removePed(c),s.pax++,this.game.money+=s.type==="bus"?15:20,s.earned+=s.type==="bus"?15:20,this.audio.blip(880,.03,.05)):(c.x+=h/p*1.7*t,c.z+=u/p*1.7*t,c.h=Math.atan2(h,u),c.moving=!0,c.phase+=t*8,l++)}if(e.speed>2&&(s.stage="drive",this.hud.toast("You left before everyone boarded!",1.5)),!l&&s.dt>2.5){if(s.i++,s.i>=s.stops.length){let c=150+s.stops.length*20;this.game.money+=c,s.earned+=c,this.completed++,this.audio.cash(),this.hud.toast(`\u{1F3C1} Route ${s.num} complete! ${s.pax} passengers \xB7 +${s.earned} coins`,5);let h=s.prevCar;return this.active=null,this._hideMarker(),this.game.clearRoute(),i(h.type,h.color,!0),{done:!0,coins:s.earned}}s.stage="drive",this._nextStop(n)}}return null}status(t){let e=this.active;return e?e.type==="taxi"?e.stage==="ride"?`\u{1F695} ${e.passenger} \u2192 ${e.dest.name}`:`\u{1F695} Pick up ${e.passenger}`:e.type==="courier"?e.stage==="ride"?`\u{1F4E6} Deliver ${e.item}`:`\u{1F4E6} Pick up at ${e.shop.name}`:`${ns[e.type].icon} Route ${e.num} \xB7 stop ${Math.min(e.i+1,e.stops.length)}/${e.stops.length} \xB7 ${e.pax} pax`:null}};var Hv="wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket",qf="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU",wh="realtime:bskdrive-world-v1";function Ov(){try{let r=localStorage.getItem("bd_uid");return r||(r=Math.random().toString(36).slice(2,10),localStorage.setItem("bd_uid",r)),r}catch{return Math.random().toString(36).slice(2,10)}}function $f(r,t="#ffffff"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font="700 30px Inter, Arial";let i=Math.min(248,n.measureText(r).width+28);n.fillStyle="rgba(10,14,20,0.72)";let s=18,o=(256-i)/2;n.beginPath(),n.moveTo(o+s,8),n.arcTo(o+i,8,o+i,56,s),n.arcTo(o+i,56,o,56,s),n.arcTo(o,56,o,8,s),n.arcTo(o,8,o+i,8,s),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,33);let a=new Le(e);a.colorSpace=be;let l=new _n(new pn({map:a,depthTest:!0,transparent:!0}));return l.scale.set(4.2,1.05,1),l}var Ma=class{constructor(t){this.scene=t,this.id=Ov(),this.players=new Map,this.ws=null,this.ref=1,this.joined=!1,this.status="offline",this.enabled=!1,this.sendT=0,this.hbT=0,this.onChat=null,this.onJoin=null,this.lastSent=null}connect(t){this.name=(t||"Driver").slice(0,18),this.enabled=!0,this._open()}disconnect(){if(this.enabled=!1,this.ws)try{this._push("bye",{i:this.id}),this.ws.close()}catch{}this.ws=null,this.joined=!1,this.status="offline";for(let t of[...this.players.keys()])this._drop(t)}_open(){if(!this.enabled)return;this.status="connecting";let t;try{t=new WebSocket(`${Hv}?apikey=${qf}&vsn=1.0.0`)}catch{this._retry();return}this.ws=t,t.onopen=()=>{t.send(JSON.stringify({topic:wh,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:this.id}},access_token:qf},ref:String(this.ref++),join_ref:"1"}))},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.event==="phx_reply"&&n.topic===wh&&n.payload?.status==="ok"&&!this.joined){this.joined=!0,this.status="online",this.backoff=1,this._push("hi",{i:this.id,n:this.name});return}n.event==="broadcast"&&n.payload&&this._recv(n.payload.event,n.payload.payload)},t.onclose=()=>{this.joined=!1,this.status="offline",this.ws=null,this._retry()},t.onerror=()=>{}}_retry(){this.enabled&&(this.backoff=Math.min(30,(this.backoff||1)*2),clearTimeout(this._rt),this._rt=setTimeout(()=>this._open(),this.backoff*1e3))}_push(t,e){!this.ws||this.ws.readyState!==1||!this.joined||this.ws.send(JSON.stringify({topic:wh,event:"broadcast",payload:{type:"broadcast",event:t,payload:e},ref:String(this.ref++),join_ref:"1"}))}chat(t){t=String(t).slice(0,120).trim(),t&&(this._push("c",{i:this.id,n:this.name,m:t}),this.onChat&&this.onChat(this.name,t,!0))}_recv(t,e){if(!(!e||e.i===this.id))if(t==="s"){let n=this.players.get(e.i);n||(n=this._add(e)),(n.type!==e.t||n.color!==e.c)&&this._rebuild(n,e.t,e.c),n.name!==e.n&&(n.name=e.n,n.group.remove(n.tag),n.tag=$f(e.n),n.tag.position.y=n.spec.roof[2][1]+1.6,n.group.add(n.tag)),n.snaps.push({t:performance.now(),x:e.x,z:e.z,h:e.h,v:e.v,b:e.b}),n.snaps.length>20&&n.snaps.shift(),n.last=performance.now(),n.money=e.m??n.money,n.job=e.j||"",n.jobs=e.k??n.jobs}else t==="c"?this.onChat&&this.onChat(e.n,e.m,!1):t==="hi"?(this.onJoin&&this.onJoin(e.n),this.sendT=0,this.lastSent=null):t==="bye"&&this._drop(e.i)}_add(t){let e=new qt,n={id:t.i,name:t.n,group:e,snaps:[],last:performance.now(),x:t.x,z:t.z,h:t.h,money:0,type:null,color:null};return this.players.set(t.i,n),this._rebuild(n,t.t,t.c),n.tag=$f(t.n),n.tag.position.y=n.spec.roof[2][1]+1.6,e.add(n.tag),this.scene.add(e),this.onJoin&&this.onJoin(t.n),n}_rebuild(t,e,n){t.body&&(t.group.remove(t.body),t.body.traverse(c=>c.geometry&&c.geometry.dispose()));let i=An(["sedan","suv","coupe","hatch","oldsedan","van","bus"].includes(e)?e:"sedan",{}),s=new qt,o=new K(i.paint,new Ri({color:n??16777215,metalness:.45,roughness:.32,clearcoat:1,vertexColors:!0})),a=new K(i.detail,new Mt({vertexColors:!0,metalness:.3,roughness:.3}));t.lightMat=new Mt({vertexColors:!0,emissive:16777215,emissiveIntensity:.3});let l=new K(i.lights,t.lightMat);o.castShadow=a.castShadow=!0,s.add(o,a,l),t.body=s,t.group.add(s),t.spec=i.spec,t.type=e,t.color=n,t.tag&&(t.tag.position.y=i.spec.roof[2][1]+1.6)}_drop(t){let e=this.players.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.players.delete(t))}update(t,e,n,i){if(!this.enabled)return;let s=performance.now();if(this.sendT-=t,this.hbT-=t,this.joined&&this.sendT<=0){let a=e.speed>.3,l={i:this.id,n:this.name,t:e.type,c:e.color,x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,h:Math.round(e.h*1e3)/1e3,v:Math.round(e.speed*10)/10,b:e.braking?1:0,m:Math.round(n.money),j:n.job||"",k:n.jobs||0};this._push("s",l),this.sendT=a?.16:1}this.hbT<=0&&this.ws&&this.ws.readyState===1&&(this.hbT=25,this.ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(this.ref++)})));let o=s-200;for(let[a,l]of this.players){if(s-l.last>8e3){this._drop(a);continue}let c=l.snaps;if(!c.length)continue;let h=c[0],u=c[c.length-1];for(let m=0;m<c.length-1;m++)if(c[m].t<=o&&c[m+1].t>=o){h=c[m],u=c[m+1];break}let p,f,g;if(o>=u.t){let m=Math.min(.5,(o-u.t)/1e3);p=u.x+Math.sin(u.h)*u.v*m,f=u.z+Math.cos(u.h)*u.v*m,g=u.h}else{let m=(o-h.t)/Math.max(1,u.t-h.t);p=h.x+(u.x-h.x)*m,f=h.z+(u.z-h.z)*m;let x=u.h-h.h;x=Math.atan2(Math.sin(x),Math.cos(x)),g=h.h+x*m}l.x=p,l.z=f,l.h=g,l.v=u.v,l.group.position.set(p,.02,f),l.group.rotation.y=g,l.lightMat.emissiveIntensity=u.b?1.4:i>.45?1.8:.3}}collide(t,e){for(let n of this.players.values()){let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s>200)continue;let o=n.spec.W/2,a=Math.max(2,Math.round(n.spec.L/2.2));for(let l=0;l<a;l++){let c=(l/(a-1)-.5)*(n.spec.L-o*2),h=n.x+Math.sin(n.h)*c,u=n.z+Math.cos(n.h)*c;for(let p of[t.spec.L*.3,0,-t.spec.L*.3]){let f=t.x+Math.sin(t.h)*p,g=t.z+Math.cos(t.h)*p,m=f-h,x=g-u,d=Math.hypot(m,x),_=t.radius+o;if(d<_&&d>1e-4){let M=m/d,v=x/d;t.x+=M*(_-d),t.z+=v*(_-d);let T=(t.vx-Math.sin(n.h)*n.v)*M+(t.vz-Math.cos(n.h)*n.v)*v;T<0&&(t.vx-=M*T*1.2,t.vz-=v*T*1.2,-T>2&&e&&e(-T,"player"))}}}}}list(){return[...this.players.values()].map(t=>({name:t.name,money:t.money||0,job:t.job,car:t.type,x:t.x,z:t.z}))}};var ba={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Vv=new Fs(-1,1,1,-1,0,1),Eh=class extends oe{constructor(){super(),this.setAttribute("position",new $t([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new $t([0,2,0,0,2,0],2))}},Gv=new Eh,zi=class{constructor(t){this._mesh=new K(Gv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var is=class extends wn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=$n.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new zi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ur=class extends wn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},wa=class extends wn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ea=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new is(ba),this.copyPass.material.blending=Vn,this.clock=new Xs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ur!==void 0&&(o instanceof Ur?n=!0:o instanceof wa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Yf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Ks=class r extends wn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new je(s,o,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new je(s,o,{type:Mn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let f=new je(s,o,{type:Mn});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Yf;this.highPassUniforms=$n.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ba;this.copyUniforms=$n.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new fe,this.fsQuad=new zi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new xe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Ks.BlurDirectionX=new tt(1,0);Ks.BlurDirectionY=new tt(0,1);var Zf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Sa=class extends wn{constructor(){super();let t=Zf;this.uniforms=$n.clone(t.uniforms),this.material=new Xo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new zi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},he.getTransfer(this._outputColorSpace)===Me&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Zc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Jc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===zr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===jc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Sh=class extends wn{constructor(t,e,n){super(),this.env=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),this.env.render(t),t.clearDepth(),t.render(this.scene,this.camera)}},Wv={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); c.rgb = clamp(c.rgb, 0.0, 30.0); if (any(isnan(c.rgb))) c.rgb = vec3(0.0); gl_FragColor = c; }"},Xv={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uContrast:{value:1.06},uWarm:{value:.02},uTime:{value:0},uGrain:{value:.025}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette, uSat, uContrast, uWarm, uTime, uGrain; varying vec2 vUv;
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
    }`},Ta=class{constructor(t,e,n,i,s){this.renderer=t;let o=t.getDrawingBufferSize(new tt),a=new je(o.x,o.y,{type:Mn,samples:s.msaa?4:0});this.composer=new Ea(t,a),this.composer.addPass(new Sh(e,n,i)),this.composer.addPass(new is(Wv)),this.bloom=new Ks(new tt(o.x/2,o.y/2),.35,.55,.92),this.bloom.enabled=s.bloom!==!1,this.composer.addPass(this.bloom),this.composer.addPass(new Sa),this.grade=new is(Xv),this.composer.addPass(this.grade)}setSize(t,e){this.composer.setSize(t,e)}setNight(t){this.bloom.strength=.18+t*.7,this.bloom.threshold=2.2-t*1.5,this.grade.uniforms.uWarm.value=.015*(1-t),this.grade.uniforms.uSat.value=1.08-t*.1}render(t){this.grade.uniforms.uTime.value+=t,this.composer.render(t)}};var Aa=class{constructor(t){this.scene=t,this.ND=260;let e=new Pt(1,1,1);this.debris=new Ue(e,new Mt({roughness:.4,metalness:.4}),this.ND),this.debris.instanceMatrix.setUsage($s),this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.debris.count=0,this.debris.setColorAt(0,new wt),t.add(this.debris),this.parts=[],this.NS=200,this.sparkPos=new Float32Array(this.NS*3);let n=new oe;n.setAttribute("position",new ue(this.sparkPos,3)),this.sparkPts=new hi(n,new Ji({color:16762976,size:.18,transparent:!0,blending:Be,depthWrite:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.sparks=[];let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),o=s.createRadialGradient(32,32,2,32,32,30);o.addColorStop(0,"rgba(255,255,255,0.9)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,64,64),this.smokeTex=new Le(i),this.smokePool=[];for(let a=0;a<140;a++){let l=new _n(new pn({map:this.smokeTex,color:3355443,transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,t.add(l),this.smokePool.push({s:l,life:0})}this.si=0,this.emitters=[],this.M=new re,this.Q=new Oe,this.E=new Ke,this.V=new I,this.S=new I,this.C=new wt}crash(t,e,n,i,s,o,a=13421772){let l=Math.min(26,Math.round(4+o*1.6));for(let h=0;h<l;h++){let u=Math.random(),p=u<.35?12572904:u<.6?1381653:u<.7?16724e3:a,f=u<.35?.05+Math.random()*.06:.08+Math.random()*.22,g=2+Math.random()*o*.5,m=Math.atan2(s,i)+(Math.random()-.5)*2.2;this._part({x:t,y:e+Math.random()*.5,z:n,vx:Math.cos(m)*g,vy:1.5+Math.random()*3.5,vz:Math.sin(m)*g,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*20,wy:(Math.random()-.5)*20,s:f,sx:f*(u<.35?1.4:1+Math.random()*2),life:5+Math.random()*4,col:p})}let c=Math.min(40,Math.round(o*3));for(let h=0;h<c;h++){let u=Math.random()*Math.PI*2,p=2+Math.random()*6;this.sparks.push({x:t,y:e+.4,z:n,vx:Math.cos(u)*p+i*2,vy:Math.random()*4,vz:Math.sin(u)*p+s*2,life:.3+Math.random()*.4}),this.sparks.length>this.NS&&this.sparks.shift()}for(let h=0;h<4;h++)this.puff(t,e+.5,n,7829367,1.5)}_part(t){this.parts.length>=this.ND&&this.parts.shift(),this.parts.push(t)}puff(t,e,n,i=3355443,s=1,o=1.2){let a=this.smokePool[this.si++%this.smokePool.length];a.s.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.s.material.color.setHex(i),a.life=1,a.size=s,a.vy=o*(.7+Math.random()*.6),a.vx=(Math.random()-.5)*.6,a.vz=(Math.random()-.5)*.6,a.s.visible=!0}emitter(t,e,n=!0){let i={obj:t,offset:e,dark:n,t:0};return this.emitters.push(i),i}removeEmitter(t){let e=this.emitters.indexOf(t);e>=0&&this.emitters.splice(e,1)}update(t){let{M:e,Q:n,E:i,V:s,S:o,C:a}=this,l=0;for(let h=this.parts.length-1;h>=0;h--){let u=this.parts[h];if(u.life-=t,u.life<=0){this.parts.splice(h,1);continue}(u.y>u.s*.5||u.vy>0)&&(u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.rx+=u.wx*t,u.ry+=u.wy*t,u.y<u.s*.5&&(u.y=u.s*.5,u.vy=-u.vy*.3,u.vx*=.6,u.vz*=.6,u.wx*=.5,u.wy*=.5,Math.abs(u.vy)<.5&&(u.vy=0)))}for(let h of this.parts){i.set(h.rx,h.ry,0),n.setFromEuler(i);let u=Math.min(1,h.life);e.compose(s.set(h.x,h.y+.12,h.z),n,o.set(h.sx*u,h.s*.35*u,h.s*u)),this.debris.setMatrixAt(l,e),this.debris.setColorAt(l,a.setHex(h.col)),l++}this.debris.count=l,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor&&(this.debris.instanceColor.needsUpdate=!0);let c=0;for(let h=this.sparks.length-1;h>=0;h--){let u=this.sparks[h];if(u.life-=t,u.life<=0){this.sparks.splice(h,1);continue}u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t}for(let h of this.sparks)this.sparkPos[c*3]=h.x,this.sparkPos[c*3+1]=Math.max(.05,h.y),this.sparkPos[c*3+2]=h.z,c++;this.sparkPts.geometry.setDrawRange(0,c),this.sparkPts.geometry.attributes.position.needsUpdate=!0;for(let h of this.emitters)if(h.t-=t,h.t<=0){h.t=h.dark?.12:.25;let u=h.obj,p=Math.cos(u.h),f=Math.sin(u.h),g=h.offset[0],m=h.offset[2];this.puff(u.x+g*p+m*f,h.offset[1],u.z-g*f+m*p,h.dark?2236962:10066329,h.dark?1.4:.9,h.dark?2.2:1.2)}for(let h of this.smokePool)h.life<=0||(h.life-=t*.35,h.s.position.x+=h.vx*t,h.s.position.y+=h.vy*t,h.s.position.z+=h.vz*t,h.s.scale.setScalar(h.size*(1+(1-h.life)*4)),h.s.material.opacity=Math.max(0,h.life*.55),h.life<=0&&(h.s.visible=!1))}};function qv(){let r=document.createElement("canvas");r.width=512,r.height=96;let t=r.getContext("2d");t.fillStyle="#1446a0",t.fillRect(0,30,512,40),t.fillStyle="#ffffff",t.font="bold 34px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("\u041F\u0410\u0422\u0420\u0423\u041B\u042C\u041D\u0410\u042F \u041C\u0418\u041B\u0418\u0426\u0418\u042F",256,51);let e=new Le(r);return e.colorSpace=be,e.anisotropy=4,e}function $v(){let r=new qt,t=new Mt({color:2896962,roughness:.8}),e=new Mt({color:13164576,roughness:.6,emissive:3160064}),n=new Mt({color:13146744}),i=(a,l,c,h,u)=>{let p=new K(a,l);return p.position.set(c,h,u),p.castShadow=!0,r.add(p),p};i(new Pt(.46,.62,.27),e,0,1.25,0),i(new Pt(.4,.2,.24),t,0,.9,0),i(new Se(.12,12,10),n,0,1.7,0),i(new Wt(.15,.14,.08,14),t,0,1.84,0),i(new Pt(.34,.03,.36),t,0,1.8,.04);let s=[],o=[];for(let a of[-1,1]){let l=new qt;l.position.set(.1*a,.9,0);let c=new K(new Pt(.15,.88,.16).translate(0,-.44,0),t);c.castShadow=!0,l.add(c),r.add(l),s.push(l);let h=new qt;h.position.set(.28*a,1.52,0);let u=new K(new Pt(.1,.62,.11).translate(0,-.31,0),t);u.castShadow=!0,h.add(u),r.add(h),o.push(h)}return r.userData={legs:s,arms:o},r}var Ra=class{constructor(t,e,n,i,s,o){this.scene=t,this.map=e,this.world=n,this.audio=i,this.hud=s,this.fx=o,this.cars=[],this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this.lastSeen=0,this.cutscene=null;let a=An("sedan",{});this.geo=a,this.mats={paint:new Ri({color:16054008,metalness:.4,roughness:.3,clearcoat:1,vertexColors:!0}),det:new Mt({vertexColors:!0,metalness:.3,roughness:.3}),red:new Mt({color:4194304,emissive:16715792,emissiveIntensity:0}),blue:new Mt({color:64,emissive:1065215,emissiveIntensity:0}),text:new Mt({map:qv(),transparent:!0,roughness:.4}),stripe:new Mt({color:1328800,roughness:.4})},this.lights=[new es(16719904,0,30,2),new es(2117887,0,30,2)];for(let l of this.lights)t.add(l)}crime(t,e){let n=this.wanted;this.heat=Math.min(5.99,this.heat+t),this.wanted=Math.max(this.wanted,Math.floor(this.heat)),this.escapeT=0,this.wanted>n&&(this.hud.toast(`\u{1F6A8} ${e} \u2013 the police are after you!`,2.5),this._updateStars())}_updateStars(){let t=document.getElementById("wanted");t&&(t.innerHTML=this.wanted?"\u2605".repeat(this.wanted)+"<span>"+"\u2605".repeat(5-this.wanted)+"</span>":"",t.classList.toggle("show",this.wanted>0))}_makeCar(t,e,n){let i=new qt,s=this.geo.spec,o=new K(this.geo.paint,this.mats.paint),a=new K(this.geo.detail,this.mats.det);o.castShadow=a.castShadow=!0,i.add(o,a);let l=s.roof[2][1],c=new K(new Pt(1.1,.12,.3),new Mt({color:2236962}));c.position.set(0,l+.06,-.2),i.add(c);let h=new K(new Pt(.5,.14,.26),this.mats.red);h.position.set(-.28,l+.12,-.2);let u=new K(new Pt(.5,.14,.26),this.mats.blue);u.position.set(.28,l+.12,-.2),i.add(h,u);for(let f of[-1,1]){let g=new K(new Pe(s.L*.8,.22),this.mats.stripe);g.position.set(f*(s.W/2+.012),.72,0),g.rotation.y=f*Math.PI/2,i.add(g);let m=new K(new Pe(2.4,.45),this.mats.text);m.position.set(f*(s.W/2+.02),.72,-.1),m.rotation.y=f*Math.PI/2,i.add(m)}this.scene.add(i);let p={g:i,x:t,z:e,h:n,v:0,path:null,pi:0,repath:0,stuck:0,spec:s,radius:s.W/2+.05};return this.cars.push(p),p}_spawn(t,e,n){for(let i=0;i<30;i++){let s=n+Math.PI+(Math.random()-.5)*2.2*(i>15?2:1),o=180+Math.random()*120,a=this.map.nearestRoad(t+Math.sin(s)*o,e+Math.cos(s)*o,80,c=>c.cls<=4);if(!a||this.map.insideBuilding(a.x,a.z,1))continue;let l=Math.atan2(t-a.x,e-a.z);return this._makeCar(a.x,a.z,l)}return null}clear(){for(let t of this.cars)this.scene.remove(t.g);this.cars.length=0,this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this._updateStars(),this.audio.siren(!1);for(let t of this.lights)t.intensity=0}update(t,e,n){if(this.cutscene)return this._updateCutscene(t,e);let s=performance.now()/1e3*4%2<1;if(this.mats.red.emissiveIntensity=this.wanted?s?4:.2:0,this.mats.blue.emissiveIntensity=this.wanted?s?.2:4:0,!this.wanted){this.cars.length&&this.clear(),this.heat=Math.max(0,this.heat-t*.05);return}let o=Math.min(4,this.wanted);this.cars.length<o&&Math.random()<t*.8&&this._spawn(e.x,e.z,e.h);let a=1e9,l=null;for(let u of this.cars){this._drive(u,t,e);let p=Math.hypot(u.x-e.x,u.z-e.z);p<a&&(a=p,l=u),u.g.position.set(u.x,.02,u.z),u.g.rotation.y=u.h}if(l)for(let u=0;u<2;u++)this.lights[u].position.set(l.x+(u?.4:-.4),2,l.z),this.lights[u].intensity=(u?!s:s)?25:2;this.audio.siren(a<450),a<9&&e.speed<2.2?this.bustT+=t:this.bustT=Math.max(0,this.bustT-t*.5),e.damage>=100&&a<20&&(this.bustT+=t);let c=document.getElementById("bust");if(c&&(c.style.width=Math.min(100,this.bustT/2.5*100)+"%",c.parentElement.classList.toggle("show",this.bustT>.05)),this.bustT>2.5){this._startCutscene(l,e),n&&n();return}a>260?this.escapeT+=t:this.escapeT=0;let h=8+this.wanted*4;this.escapeT>h&&(this.hud.toast(`\u{1F60E} You lost the police! (${this.wanted}\u2605 escape)`,3),this.onEscape&&this.onEscape(this.wanted),this.clear())}_drive(t,e,n){let i=Math.hypot(n.x-t.x,n.z-t.z),s=n.x+n.vx*Math.min(1.2,i/40),o=n.z+n.vz*Math.min(1.2,i/40);if(t.repath-=e,i>70&&((t.repath<=0||!t.path)&&(t.path=this.map.route(t.x,t.z,n.x,n.z),t.pi=2,t.repath=2.5),t.path)){for(;t.pi<t.path.length-2&&Math.hypot(t.path[t.pi]-t.x,t.path[t.pi+1]-t.z)<14;)t.pi+=2;s=t.path[t.pi],o=t.path[t.pi+1]}let l=Math.atan2(s-t.x,o-t.z)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let c=Math.min(2.2,9/Math.max(4,t.v))*e;t.h+=Ce.clamp(l,-c,c);let h=i>70?44:Math.max(6,n.speed+6);Math.abs(l)>.6&&(h=Math.min(h,12)),i<12&&(h=Math.max(2,n.speed)),t.v+=Ce.clamp(h-t.v,-12*e,7*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e;let u={};for(let p of[1.5,-1.5])this.world.collide(t.x+Math.sin(t.h)*p,t.z+Math.cos(t.h)*p,t.radius,u)&&(t.x+=u.x,t.z+=u.z,t.v*=.85);t.v<1.5&&i>40?t.stuck+=e:t.stuck=0,t.stuck>4&&i>120&&(this.scene.remove(t.g),this.cars.splice(this.cars.indexOf(t),1));for(let p of[n.spec.L*.3,0,-n.spec.L*.3]){let f=n.x+Math.sin(n.h)*p,g=n.z+Math.cos(n.h)*p;for(let m of[1.3,-1.3]){let x=t.x+Math.sin(t.h)*m,d=t.z+Math.cos(t.h)*m,_=f-x,M=g-d,v=Math.hypot(_,M),T=n.radius+t.radius;if(v<T&&v>1e-4){let w=_/v,E=M/v;n.x+=w*(T-v)*.6,n.z+=E*(T-v)*.6,t.x-=w*(T-v)*.4,t.z-=E*(T-v)*.4;let C=(n.vx-Math.sin(t.h)*t.v)*w+(n.vz-Math.cos(t.h)*t.v)*E;C<0&&(n.vx-=w*C,n.vz-=E*C,t.v*=.6,-C>4&&(this.fx&&this.fx.crash(x+w*t.radius,.6,d+E*t.radius,w,E,-C,16054008),this.audio.crash(-C),n.damage=Math.min(100,n.damage+-C*.4),this.onRam&&this.onRam(-C)))}}}}_startCutscene(t,e){this.audio.siren(!0);let n=$v();this.scene.add(n);let i=Math.sin(e.h),s=Math.cos(e.h),o=-s,a=i;t||(t=this._makeCar(e.x+i*7,e.z+s*7,e.h+Math.PI));let l=e.x+i*6.5-o*2.2,c=e.z+s*6.5-a*2.2;this.cutscene={t:0,pc:t,off:n,from:{x:t.x,z:t.z,h:t.h},to:{x:l,z:c,h:e.h+Math.PI*.8},fine:250+this.wanted*250,stars:this.wanted},document.getElementById("cine").classList.add("on"),document.getElementById("bustBox").classList.remove("show")}_updateCutscene(t,e){let n=this.cutscene,i=n.pc;n.t+=t;let s=n.t;e.vx=e.vz=0,e.r=0;let o=performance.now()/250%2<1;this.mats.red.emissiveIntensity=o?4:.2,this.mats.blue.emissiveIntensity=o?.2:4;let a=Math.min(1,s/1.5),l=1-Math.pow(1-a,3);i.x=n.from.x+(n.to.x-n.from.x)*l,i.z=n.from.z+(n.to.z-n.from.z)*l;let c=n.to.h-n.from.h;c=Math.atan2(Math.sin(c),Math.cos(c)),i.h=n.from.h+c*l,i.g.position.set(i.x,.02,i.z),i.g.rotation.y=i.h;for(let y=0;y<2;y++)this.lights[y].position.set(i.x+(y?.4:-.4),2.2,i.z),this.lights[y].intensity=(y?!o:o)?30:3;let h=n.off,u=h.userData,p=i.x+Math.cos(i.h)*1.4,f=i.z-Math.sin(i.h)*1.4,g=e.x+Math.cos(e.h)*1.6+Math.sin(e.h)*.4,m=e.z-Math.sin(e.h)*1.6+Math.cos(e.h)*.4,x=p,d=f,_=!1;if(s>1.5){let y=Math.min(1,(s-1.5)/3);x=p+(g-p)*y,d=f+(m-f)*y,_=y<1}h.visible=s>1.4,h.position.set(x,.02,d),h.rotation.y=_?Math.atan2(g-p,m-f):Math.atan2(e.x-x,e.z-d);let M=_?Math.sin(s*9):0;u.legs[0].rotation.x=M*.5,u.legs[1].rotation.x=-M*.5,u.arms[0].rotation.x=-M*.45,u.arms[1].rotation.x=s>4.6?-1.4-Math.sin(s*3)*.1:M*.45;let v=document.getElementById("cineSub"),T=[[1.6,""],[4.6,"\u{1F46E} \xAB\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.\xBB"],[6.6,"\u{1F46E} \xAB\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u0414\u0422\u041F, \u043D\u0435\u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u0438\u0435\u2026 \u041E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C.\xBB"],[8.6,`Fine: \u2212${n.fine} coins \xB7 ${"\u2605".repeat(n.stars)} cleared`]],w="";for(let[y,b]of T)s>y&&(w=b);v.textContent!==w&&(v.textContent=w),document.getElementById("busted").classList.toggle("show",s>7.6);let E=new I,C=new I;if(s<2.5){let y=e.h+2.2+s*.35;E.set(e.x+Math.sin(y)*9,1.1,e.z+Math.cos(y)*9),C.set((e.x+i.x)/2,1,(e.z+i.z)/2)}else s<4.6?(E.set(x-Math.sin(h.rotation.y)*4+1.2,1.8,d-Math.cos(h.rotation.y)*4),C.set(x,1.4,d)):s<7.6?(E.set(x+Math.cos(e.h)*1.4-Math.sin(e.h)*1.2,1.75,d-Math.sin(e.h)*1.4-Math.cos(e.h)*1.2),C.set(e.x,1.1,e.z)):(E.set(e.x+Math.cos(e.h)*12+Math.sin(e.h)*6,4,e.z-Math.sin(e.h)*12+Math.cos(e.h)*6),C.set(e.x,.8,e.z));if(s>10.5){this.scene.remove(h),document.getElementById("cine").classList.remove("on"),document.getElementById("busted").classList.remove("show"),v.textContent="";let y=n.fine;return this.cutscene=null,this.clear(),{done:!0,fine:y,cam:E,look:C}}return{cam:E,look:C}}};var Yv={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u04E9:"o",\u04AF:"u",\u04A3:"n",\u0456:"i"};function Ca(r){r=String(r||"").toLowerCase();let t="";for(let e of r)t+=Yv[e]??e;return t.replace(/kh/g,"h").replace(/[jy]/g,"i").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}var Jf={cafe:"Caf\xE9",restaurant:"Restaurant",fast_food:"Fast food",pharmacy:"Pharmacy",bank:"Bank",supermarket:"Supermarket",convenience:"Shop",fuel:"Petrol station",hotel:"Hotel",clothes:"Clothes",bar:"Bar",mall:"Mall",museum:"Museum",theatre:"Theatre",university:"University",hospital:"Hospital",cinema:"Cinema",park:"Park",stadium:"Stadium",place_of_worship:"Place of worship",marketplace:"Bazaar",square:"Square",terminal:"Airport",department_store:"Department store",attraction:"Attraction",memorial:"Memorial",monument:"Monument",bakery:"Bakery",mobile_phone:"Phones"},Zv={Landmark:"\u2B50",Street:"\u{1F6E3}",Caf\u00E9:"\u2615",Restaurant:"\u{1F37D}","Fast food":"\u{1F32F}",Pharmacy:"\u{1F48A}",Bank:"\u{1F3E6}",Supermarket:"\u{1F6D2}",Shop:"\u{1F3EA}","Petrol station":"\u26FD",Hotel:"\u{1F3E8}",Mall:"\u{1F6CD}",Museum:"\u{1F3DB}",Park:"\u{1F333}",Bazaar:"\u{1F9FA}",Airport:"\u2708",University:"\u{1F393}",Hospital:"\u{1F3E5}",Building:"\u{1F3E2}"},Pa=class{constructor(t){this.items=[];let e=new Set,n=(s,o,a,l,c,h)=>{if(!s||l===void 0)return;let u=Ca(s)+"|"+Math.round(l/150)+","+Math.round(c/150);e.has(u)||(e.add(u),this.items.push({name:s,alt:o&&o!==s?o:"",kind:a,x:l,z:c,w:h,n:Ca(s)+" "+Ca(o)}))};for(let s of Fe)n(s.name,s.local,"Landmark",s.x,s.z,5);let i=new Map;for(let s of t.edges){if(s.name<0||s.cls>5)continue;let o=i.get(s.name);(!o||s.len>o.len)&&i.set(s.name,s)}for(let[s,o]of i){let[a,l]=t.names[s],c=Math.floor(o.pts.length/4)*2;n(l||a,l?a:"","Street",o.pts[c],o.pts[c+1],4-o.cls*.3)}for(let s of t.pois)n(s.en||s.name,s.en?s.name:"",Jf[s.kind]||"Place",s.x,s.z,3);for(let s of t.chunks.values())for(let o of s.signs)n(o.name,"",Jf[o.kind]||"Shop",o.x,o.z,1);for(let s of t.buildings)s.name&&n(s.name,"","Building",s.cx,s.cz,1.5)}find(t,e=12,n){let i=Ca(t);if(!i)return[];let s=i.split(" "),o=[];for(let a of this.items){let l=0;if(a.n.startsWith(i))l=10;else if(a.n.includes(" "+i))l=7;else if(s.every(c=>a.n.includes(c)))l=4;else continue;l+=a.w,n&&(l-=Math.min(3,Math.hypot(a.x-n.x,a.z-n.z)/4e3)),o.push([l,a])}return o.sort((a,l)=>l[0]-a[0]),o.slice(0,e).map(a=>a[1])}icon(t){return Zv[t]||"\u{1F4CD}"}};var js=r=>document.getElementById(r),Ia=class{constructor(t,e,n){this.hud=t,this.audio=e,this.game=n,this.points=0,this.mult=1,this.active=!1,this.off=0,this.chain=0,this.best=0}update(t,e,n){let i=Math.abs(e.rearSlip||0),s=!n&&e.speed>8&&i>.22&&i<1.4,o=js("drift");s?(this.active=!0,this.off=0,this.chain+=t,this.mult=Math.min(8,1+Math.floor(this.chain/2)),this.points+=e.speed*i*t*12*this.mult,e.nitro=Math.min(1,(e.nitro??0)+t*.06)):this.active&&(this.off+=t,this.off>1.1&&this._bank(!0)),o&&(o.classList.toggle("show",this.active),this.active&&(o.innerHTML=`DRIFT <b>${Math.round(this.points).toLocaleString()}</b>${this.mult>1?` <i>\xD7${this.mult}</i>`:""}`))}crash(){this.active&&this.points>50&&this.hud.toast("\u{1F4A5} Drift lost!",1),this.points=0,this._bank(!1)}_bank(t){if(t&&this.points>150){let e=Math.round(this.points/40);this.game.money+=e,this.audio.cash(),this.best=Math.max(this.best,this.points),this.hud.toast(`\u{1F300} Drift ${Math.round(this.points).toLocaleString()} pts \xB7 +${e} coins`,2)}this.active=!1,this.points=0,this.mult=1,this.chain=0,this.off=0}},La=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s;let o=bn(2026);this.list=[];for(let g of Fe)!g.airport&&g.x!==void 0&&this.list.length<8&&this.list.push({x:g.x+14,z:g.z+6});let a=0;for(;this.list.length<40&&a++<5e3;){let g=-6500+o()*12e3,m=-6e3+o()*9500,x=e.nearestRoad(g,m,60,T=>T.cls>=1&&T.cls<=5);if(!x)continue;let d=o()<.5?1:-1,_=x.e.w/2+1.2,M=x.x-x.dz*_*d,v=x.z+x.dx*_*d;e.insideBuilding(M,v,1)||this.list.some(T=>Math.hypot(T.x-M,T.z-v)<600)||this.list.push({x:M,z:v})}this.list.forEach((g,m)=>g.id=m);try{this.got=new Set(JSON.parse(localStorage.getItem("bd_kalpaks")||"[]"))}catch{this.got=new Set}let l=new Mt({color:16762938,metalness:1,roughness:.22,emissive:5583616,emissiveIntensity:.6}),c=new qt,h=new K(new Wt(.22,.5,.9,16,1,!1),l);h.position.y=.45;let u=new K(new Wt(.55,.55,.08,20),new Mt({color:1708552,metalness:.4,roughness:.5})),p=new K(new Se(.1,10,8),l);p.position.y=.95,c.add(h,u,p);let f=(()=>{let g=document.createElement("canvas");g.width=g.height=64;let m=g.getContext("2d"),x=m.createRadialGradient(32,32,2,32,32,32);return x.addColorStop(0,"rgba(255,220,120,0.9)"),x.addColorStop(1,"rgba(255,200,80,0)"),m.fillStyle=x,m.fillRect(0,0,64,64),new Le(g)})();this.proto=c,this.glowMat=new pn({map:f,transparent:!0,blending:Be,depthWrite:!1}),this.live=new Map,this.t=0}get count(){return this.got.size}update(t,e,n){this.t+=t;for(let i of this.list){if(this.got.has(i.id))continue;let s=Math.hypot(i.x-e,i.z-n),o=this.live.get(i.id);if(s<450&&!o){o=this.proto.clone();let a=new _n(this.glowMat);a.scale.set(4,4,1),a.position.y=.5,o.add(a),o.position.set(i.x,1,i.z),this.scene.add(o),this.live.set(i.id,o)}else if(s>520&&o){this.scene.remove(o),this.live.delete(i.id);continue}if(o&&(o.rotation.y=this.t*2,o.position.y=1+Math.sin(this.t*3+i.id)*.25,s<4)){this.got.add(i.id),this.scene.remove(o),this.live.delete(i.id);try{localStorage.setItem("bd_kalpaks",JSON.stringify([...this.got]))}catch{}this.game.money+=250,this.audio.chime(),setTimeout(()=>this.audio.cash(),200),this.hud.toast(`\u{1F3A9} Golden kalpak ${this.got.size}/${this.list.length} \xB7 +250 coins`,2.5),this.got.size===this.list.length&&(this.game.money+=5e3,this.hud.toast("\u{1F3C6} All golden kalpaks found! +5000 coins",5))}}}near(t,e,n){return this.list.filter(i=>!this.got.has(i.id)&&Math.hypot(i.x-t,i.z-e)<n)}},Th=[{id:"chuy",name:"Chuy Avenue Sprint",desc:"Philharmonic \u2192 Victory Square, straight down Bishkek's main avenue",via:[[-1307,-120],[0,40],[1032,-300]]},{id:"center",name:"Ala-Too Circuit",desc:"A lap around the centre: Ala-Too, Osh Bazaar, Bishkek Park",via:[[30,40],[-1300,100],[-2700,330],[-1100,950],[30,60]]},{id:"south",name:"South Side Run",desc:"Asia Mall \u2192 Vefa Center \u2192 Central Mosque",via:null,places:["asia","vefa","mosque"]},{id:"airport",name:"Manas Airport Rush",desc:"25 km from Ala-Too Square to the airport terminal",via:null,places:["alatoo","airport"]}],za=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s,this.active=null;try{this.best=JSON.parse(localStorage.getItem("bd_race_best")||"{}")}catch{this.best={}}this.ringMat=new fe({color:16765498,transparent:!0,opacity:.85,side:Ae,depthWrite:!1}),this.ringMat2=new fe({color:16777215,transparent:!0,opacity:.35,side:Ae,depthWrite:!1})}_waypoints(t){return t.via?t.via:t.places.map(e=>{let n=Fe.find(i=>i.id===e);return[n.x,n.z]})}start(t,e,n){this.stop();let i=this._waypoints(t),s=[];for(let p=0;p<i.length-1;p++){let f=this.map.route(i[p][0],i[p][1],i[p+1][0],i[p+1][1]);if(!f)return!1;s.push(...s.length?f.slice(2):f)}let o=[],a=0;for(let p=2;p<s.length;p+=2)a+=Math.hypot(s[p]-s[p-2],s[p+1]-s[p-1]),(a>300||p>=s.length-2)&&(a=0,o.push({x:s[p],z:s[p+1],h:Math.atan2(s[p]-s[p-2],s[p+1]-s[p-1])}));let l=0;for(let p=2;p<s.length;p+=2)l+=Math.hypot(s[p]-s[p-2],s[p+1]-s[p-1]);n(s[0],s[1]);let c=Math.atan2(s[4]-s[0],s[5]-s[1]),h=this.map.nearestRoad(s[0],s[1],30);if(h){let p=this.map.laneOffset(h.e,0),f=h.dx,g=h.dz;f*Math.sin(c)+g*Math.cos(c)<0&&(f=-f,g=-g),e.place(h.x-g*p,h.z+f*p,Math.atan2(f,g))}let u={R:t,path:s,cps:o,i:0,t:-3.5,total:l,rivals:[],meshes:[]};for(let[p,f,g]of[[22,16760864,"Gold rival"],[17,12634320,"Silver rival"]]){let m=An(p>20?"coupe":"hatch",{}),x=new qt;x.add(new K(m.paint,new Mt({color:f,vertexColors:!0,metalness:.6,roughness:.3,transparent:!0,opacity:.75})),new K(m.detail,new Mt({vertexColors:!0,transparent:!0,opacity:.75}))),this.scene.add(x),u.rivals.push({g:x,s:0,v:0,pace:p,name:g,side:u.rivals.length?-1.8:1.8})}return u.gold=l/22,u.silver=l/17,u.bronze=l/13,this.active=u,this._showCp(),js("raceHud").classList.add("show"),!0}_showCp(){let t=this.active;for(let e of t.meshes)this.scene.remove(e);t.meshes=[];for(let e=0;e<2;e++){let n=t.cps[t.i+e];if(!n)break;let i=new qt,s=new K(new ji(7,.35,8,40),e?this.ringMat2:this.ringMat);if(s.position.y=4,i.add(s),!e){let o=new K(new Wt(.4,.4,60,8),this.ringMat2);o.position.y=30,i.add(o)}i.position.set(n.x,0,n.z),i.rotation.y=n.h,this.scene.add(i),t.meshes.push(i)}}stop(){let t=this.active;if(t){for(let e of t.meshes)this.scene.remove(e);for(let e of t.rivals)this.scene.remove(e.g);this.active=null,js("raceHud").classList.remove("show"),js("countdown").classList.remove("show")}}_rivalPos(t,e,n){let i=t.s,s=2;for(;s<e.length;s+=2){let o=Math.hypot(e[s]-e[s-2],e[s+1]-e[s-1]);if(i<=o){let a=i/(o||1);return n.x=e[s-2]+(e[s]-e[s-2])*a,n.z=e[s-1]+(e[s+1]-e[s-1])*a,n.h=Math.atan2(e[s]-e[s-2],e[s+1]-e[s-1]),n.i=s,n}i-=o}return n.x=e[e.length-2],n.z=e[e.length-1],n.done=!0,n}update(t,e){let n=this.active;if(!n)return null;n.t+=t;let i=js("countdown");if(n.t<0){e.vx=e.vz=0;let c=Math.ceil(-n.t),h=c>3?"":String(c);return i.textContent!==h&&(i.textContent=h,h&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(520,.15,.15))),null}n.t-t<0&&(i.textContent="GO!",i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(1040,.3,.18));let s={};for(let c of n.rivals){this._rivalPos(c,n.path,s);let h={},u={s:c.s+30};this._rivalPos(u,n.path,h);let p=Math.abs(Math.atan2(Math.sin(h.h-s.h),Math.cos(h.h-s.h))),f=c.pace*(p>.5?.45:p>.25?.7:1.15);c.v+=Ce.clamp(f-c.v,-8*t,4*t),c.s+=c.v*t,c.g.position.set(s.x+Math.cos(s.h)*c.side*.5,.02,s.z-Math.sin(s.h)*c.side*.5);let g=s.h-c.g.rotation.y;g=Math.atan2(Math.sin(g),Math.cos(g)),c.g.rotation.y+=g*Math.min(1,t*6)}let o=n.cps[n.i];if(Math.hypot(e.x-o.x,e.z-o.z)<12){if(n.i++,this.audio.blip(880,.08,.12),n.i>=n.cps.length)return this._finish(e);this._showCp()}let a=n.t,l=1+n.rivals.filter(c=>c.s>this._progress(e)).length;return js("raceHud").innerHTML=`<b>${n.R.name}</b><span>\u23F1 ${Da(a)}</span><span>CP ${n.i}/${n.cps.length}</span><span>P${l}/3</span>`,{target:n.cps[n.i]}}_progress(t){let e=this.active,n=0;for(let a=0;a<e.i;a++)n+=a?Math.hypot(e.cps[a].x-e.cps[a-1].x,e.cps[a].z-e.cps[a-1].z):Math.hypot(e.cps[0].x-e.path[0],e.cps[0].z-e.path[1]);let i=e.cps[e.i],s=e.i?e.cps[e.i-1]:{x:e.path[0],z:e.path[1]},o=Math.hypot(i.x-s.x,i.z-s.z)||1;return n+Math.max(0,o-Math.hypot(i.x-t.x,i.z-t.z))}_finish(){let t=this.active,e=t.t,n=e<=t.gold?"\u{1F947} Gold":e<=t.silver?"\u{1F948} Silver":e<=t.bronze?"\u{1F949} Bronze":"Finished",i=e<=t.gold?1500:e<=t.silver?800:e<=t.bronze?400:150,s=this.best[t.R.id],o=!s||e<s;if(o){this.best[t.R.id]=e;try{localStorage.setItem("bd_race_best",JSON.stringify(this.best))}catch{}}return this.game.money+=i,this.audio.cash(),this.hud.toast(`\u{1F3C1} ${t.R.name}: ${Da(e)} \xB7 ${n} \xB7 +${i} coins${o?" \xB7 NEW RECORD!":""}`,6),this.stop(),{done:!0}}};function Da(r){r=Math.max(0,r);let t=Math.floor(r/60),e=r-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var Ua=class{constructor(t,e,n){this.scene=t,this.world=e,this.env=n,this.kind="clear",this.amount=0;let i=9e3,s=new Float32Array(i*6);for(let a=0;a<i;a++){let l=(Math.random()-.5)*80,c=Math.random()*40,h=(Math.random()-.5)*80;s.set([l,c,h,l,c-.6,h],a*6)}let o=new oe;o.setAttribute("position",new ue(s,3)),this.rainMat=new xe({uniforms:{uTime:{value:0},uCam:{value:new I},uSnow:{value:0},uAmt:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; uniform float uSnow; varying float vA;
        void main(){ vec3 p = position;
          float sp = mix(26.0, 2.2, uSnow);
          p.y = mod(p.y - uTime*sp, 40.0);
          if (uSnow > 0.5) { p.x += sin(uTime*0.8 + position.z)*0.8; p.z += cos(uTime*0.6 + position.x)*0.8; if (mod(float(gl_VertexID),2.0) > 0.5) p.y += 0.6 - 0.08; }
          p.xz = mod(p.xz - uCam.xz + 40.0, 80.0) - 40.0 + uCam.xz;
          p.y += uCam.y - 15.0;
          vA = 1.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform float uSnow; uniform float uAmt; void main(){ gl_FragColor = vec4(mix(vec3(0.6,0.65,0.75), vec3(0.95), uSnow), mix(0.3, 0.6, uSnow) * uAmt); }",transparent:!0,depthWrite:!1}),this.rain=new No(o,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain),this.base=null}set(t){this.kind=t}update(t,e,n){let i=this.kind==="clear"?0:1;this.amount+=Ce.clamp(i-this.amount,-t*.25,t*.25),this.kind!=="clear"&&(this.cur=this.kind);let s=this.cur==="snow"?1:0,o=this.amount;this.rain.visible=o>.01,this.rainMat.uniforms.uTime.value+=t,this.rainMat.uniforms.uCam.value.copy(e.position),this.rainMat.uniforms.uSnow.value=s,this.rainMat.uniforms.uAmt.value=o,this.rain.geometry.setDrawRange(0,Math.floor(9e3*2*(s?.35:.8)*o));let a=this.world.mat;this.base||(this.base={road:a.road.roughness,ground:this.world.ground.material.color.clone(),grass:a.grass.color.clone(),tree:a.tree.color.clone()}),a.road.roughness=this.base.road-(s?0:.6*o),a.road.metalness=s?0:.25*o,rn.uSnow.value=s*o,this.world.ground.material.color.copy(this.base.ground).lerp(new wt(.85,.86,.88),s*o*.35),this.exposure=1-s*o*.22,this.env.cloudMat&&(this.env.cloudMat.uniforms.cover.value=.45-o*.35),this.grip=1-o*(s?.3:.12),this.fogMul=1-o*.55,this.dark=o*(s?.15:.35)}};function Jv(r=2775706){let t=new qt,e=u=>new Mt({color:u,roughness:.8}),n=e(13672572),i=e(r),s=e(2237998),o=e(1118481),a=e(1380621),l=(u,p,f,g,m,x=t)=>{let d=new K(u,p);return d.position.set(f,g,m),d.castShadow=!0,x.add(d),d};l(new Pt(.44,.6,.25),i,0,1.22,0),l(new Pt(.4,.2,.23),s,0,.88,0),l(new Se(.12,14,12),n,0,1.68,0),l(new Se(.127,14,8,0,Math.PI*2,0,Math.PI*.55),a,0,1.71,-.01);let c=[],h=[];for(let u of[-1,1]){let p=new qt;p.position.set(.1*u,.9,0),t.add(p),l(new Pt(.15,.82,.16).translate(0,-.41,0),s,0,0,0,p),l(new Pt(.16,.08,.26),o,0,-.86,.04,p);let f=new qt;f.position.set(.28*u,1.5,0),t.add(f),l(new Pt(.1,.6,.11).translate(0,-.3,0),i,0,0,0,f),l(new Se(.055,8,6),n,0,-.62,0,f),c.push(p),h.push(f)}return t.userData={legs:c,arms:h},t}var Na=class{constructor(t,e,n){this.scene=t,this.world=e,this.map=n,this.active=!1,this.char=Jv(),this.char.visible=!1,t.add(this.char),this.x=0,this.z=0,this.y=0,this.vy=0,this.h=0,this.speed=0,this.phase=0,this.camYaw=0,this.camPitch=.25,this.vx=0,this.vz=0,this.spec={L:.6,W:.6},this.radius=.35}exit(t){let e=Math.cos(t.h)*1.6,n=-Math.sin(t.h)*1.6;this.x=t.x+e,this.z=t.z+n,this.y=0,this.vy=0;let i={};this.world.collide(this.x,this.z,this.radius,i)&&(this.x=t.x-e,this.z=t.z-n),this.h=t.h,this.camYaw=t.h,this.active=!0,this.char.visible=!0,t.vx=t.vz=0,t.r=0}enter(){this.active=!1,this.char.visible=!1}update(t,e,n,i){let s=e.fwd,o=e.side,a=e.run?6.2:2.6,l=0,c=0;if(s||o){let g=this.camYaw;l=Math.sin(g)*s-Math.cos(g)*o,c=Math.cos(g)*s+Math.sin(g)*o;let m=Math.hypot(l,c);l/=m,c/=m;let d=Math.atan2(l,c)-this.h;d=Math.atan2(Math.sin(d),Math.cos(d)),this.h+=d*Math.min(1,t*12)}let h=s||o?a:0;this.speed+=Ce.clamp(h-this.speed,-20*t,14*t),this.vx=Math.sin(this.h)*this.speed,this.vz=Math.cos(this.h)*this.speed,this.x+=this.vx*t,this.z+=this.vz*t,e.jump&&this.y<=.001&&(this.vy=4.6),this.vy-=13*t,this.y=Math.max(0,this.y+this.vy*t),this.y===0&&this.vy<0&&(this.vy=0);let u={};this.world.collide(this.x,this.z,this.radius,u)&&(this.x+=u.x,this.z+=u.z);for(let g of n){let m=this.x-g.x,x=this.z-g.z,d=Math.hypot(m,x),_=g.spec.W/2+.5;if(d<_+g.spec.L/2){let M=Math.sin(g.h),v=Math.cos(g.h),T=m*v-x*M,w=m*M+x*v,E=g.spec.W/2+.35,C=g.spec.L/2+.35;if(Math.abs(T)<E&&Math.abs(w)<C){let y=E-Math.abs(T),b=C-Math.abs(w),A=0,z=0;y<b?A=Math.sign(T)*y:z=Math.sign(w)*b,this.x+=A*v+z*M,this.z+=-A*M+z*v}}}this.phase+=t*this.speed*2.6;let p=Math.sin(this.phase)*Math.min(1,this.speed/2.6),f=this.char.userData;f.legs[0].rotation.x=p*.7,f.legs[1].rotation.x=-p*.7,f.arms[0].rotation.x=-p*.6,f.arms[1].rotation.x=p*.6,this.y>.01&&(f.legs[0].rotation.x=.6,f.legs[1].rotation.x=-.3,f.arms[0].rotation.x=f.arms[1].rotation.x=-2.6),this.char.position.set(this.x,this.y+Math.abs(Math.cos(this.phase))*.04*Math.min(1,this.speed/3),this.z),this.char.rotation.y=this.h}nearestCar(t,e){let n=null,i=4.5,s=Math.hypot(t.x-this.x,t.z-this.z);s<i+t.spec.L/2&&(n={own:!0,c:t},i=s-t.spec.L/2);for(let o of e.cars){let a=Math.hypot(o.x-this.x,o.z-this.z)-o.spec.L/2;a<i&&(i=a,n={own:!1,c:o})}return n}camera(t,e,n){if(this.camYaw+=n.dx,this.camPitch=Ce.clamp(this.camPitch+n.dy,-.1,1.1),!n.active&&this.speed>.5){let l=this.h-this.camYaw;l=Math.atan2(Math.sin(l),Math.cos(l)),this.camYaw+=l*Math.min(1,e*2.2)}let i=4.2,s=this.x-Math.sin(this.camYaw)*i*Math.cos(this.camPitch),o=this.z-Math.cos(this.camYaw)*i*Math.cos(this.camPitch),a=this.y+1.6+Math.sin(this.camPitch)*i;t.position.lerp(new I(s,a,o),1-Math.exp(-e*10)),t.lookAt(this.x,this.y+1.4,this.z),t.fov+=(60-t.fov)*Math.min(1,e*3),t.updateProjectionMatrix()}};var kn=r=>440*Math.pow(2,(r-69)/12),ka=[{name:"Bishkek FM",genre:"Pop hits",bpm:112,prog:[[60,64,67],[67,71,74],[69,72,76],[65,69,72]],scale:[0,2,4,7,9],style:"pop"},{name:"Night Drive 101.1",genre:"Synthwave",bpm:100,prog:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],scale:[0,3,5,7,10],style:"synth"},{name:"Komuz Radio",genre:"Kyrgyz folk",bpm:96,prog:[[62,69,74],[62,69,74],[60,67,72],[62,69,74]],scale:[0,2,5,7,9],style:"folk"},{name:"Ala-Too Lo-fi",genre:"Lo-fi beats",bpm:78,prog:[[62,65,69,72],[67,71,74,77],[60,64,67,71],[57,60,64,67]],scale:[0,3,5,7,10],style:"lofi"}],Ba=class{constructor(t){this.audio=t,this.idx=-1,this.timer=null}get on(){return this.idx>=0}get station(){return ka[this.idx]}next(){return this.audio.start(),this.idx=this.idx+1>=ka.length?-1:this.idx+1,this._stop(),this.idx>=0&&this._start(),this.idx>=0?ka[this.idx]:null}setVolume(t){this.out&&(this.out.gain.value=t)}_start(){let t=this.audio.ctx;if(!t)return;this.out=t.createGain(),this.out.gain.value=.32;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=6500;let n=t.createDynamicsCompressor();this.out.connect(e),e.connect(n),n.connect(this.audio.master),this.step=0,this.nextT=t.currentTime+.1,this.seed=Math.random()*1e3,this.timer=setInterval(()=>this._schedule(),40)}_stop(){if(clearInterval(this.timer),this.timer=null,this.out){let t=this.out;t.gain.setTargetAtTime(0,this.audio.ctx.currentTime,.05),setTimeout(()=>t.disconnect(),400),this.out=null}}_rnd(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}_schedule(){let t=this.audio.ctx,e=ka[this.idx];if(!t||!e||!this.out)return;let n=60/e.bpm/4;for(;this.nextT<t.currentTime+.25;){let i=this.step,s=this.nextT+(e.style==="lofi"&&i%2?n*.18:0),o=Math.floor(i/16)%e.prog.length,a=i%16,l=e.prog[o],c=l[0]-12;if(e.style==="pop"){if(a%4===0&&this._kick(s,.9),(a===4||a===12)&&this._snare(s,.35),a%2===0&&this._hat(s,a%4===2?.12:.06),a%2===0&&this._tone(s,kn(c-12),n*1.8,"sawtooth",.12,500),a===0)for(let h of l)this._tone(s,kn(h),n*15,"triangle",.035,2500,.05);this._rnd()<.45&&a%2===0&&this._tone(s,kn(72+this._pick(e.scale,l[0])),n*1.6,"square",.035,3e3)}else if(e.style==="synth"){if(a%4===0&&this._kick(s,1),(a===4||a===12)&&this._snare(s,.5,!0),this._hat(s,.04),this._tone(s,kn(c-12+(a%2?12:0)),n*.9,"sawtooth",.09,900),a===0)for(let h of l)this._tone(s,kn(h),n*16,"sawtooth",.025,1800,.4),this._tone(s,kn(h)*1.006,n*16,"sawtooth",.02,1800,.4);a%4===2&&this._rnd()<.7&&this._tone(s,kn(76+this._pick(e.scale,l[0])),n*3,"square",.03,2200)}else if(e.style==="folk")a%8===0&&this._tone(s,kn(50),n*8,"triangle",.08,700),[0,3,6,8,11,14].includes(a)&&this._pluck(s,kn(62+this._pick(e.scale,62)+(this._rnd()<.3?12:0)),.12),a%8===0?this._drum(s,.6):(a%8===3||a%8===6)&&this._drum(s,.25);else{if((a===0||a===10)&&this._kick(s,.6),(a===4||a===12)&&this._snare(s,.18),a%2===0&&this._hat(s,.03),a===0||a===8)for(let h of l)this._tone(s,kn(h),n*7,"sine",.05,1600,.02);a%4===0&&this._tone(s,kn(c-12),n*3.5,"sine",.14,300),this._rnd()<.15&&this._crackle(s)}this.step++,this.nextT+=n}}_pick(t,e){return t[Math.floor(this._rnd()*t.length)]+(e%12===0,0)}_env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+i)}_tone(t,e,n,i,s,o,a=.005){let l=this.audio.ctx,c=l.createOscillator(),h=l.createGain(),u=l.createBiquadFilter();c.type=i,c.frequency.value=e,u.type="lowpass",u.frequency.value=o,this._env(h,t,a,n,s),c.connect(u),u.connect(h),h.connect(this.out),c.start(t),c.stop(t+a+n+.05)}_pluck(t,e,n){let i=this.audio.ctx;for(let[s,o]of[[1,n],[2,n*.35],[3,n*.15]]){let a=i.createOscillator(),l=i.createGain();a.type="triangle",a.frequency.value=e*s,this._env(l,t,.003,.5/s,o),a.connect(l),l.connect(this.out),a.start(t),a.stop(t+.6)}}_kick(t,e){let n=this.audio.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(42,t+.12),this._env(s,t,.002,.25,e*.8),i.connect(s),s.connect(this.out),i.start(t),i.stop(t+.3)}_noise(t,e,n,i,s){let o=this.audio.ctx,a=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();a.buffer=this.audio.noise,l.type=n,l.frequency.value=i,this._env(c,t,.002,e,s),a.connect(l),l.connect(c),c.connect(this.out),a.start(t,Math.random()),a.stop(t+e+.05)}_snare(t,e,n){this._noise(t,n?.3:.16,"bandpass",1800,e),this._tone(t,190,.08,"triangle",e*.3,2e3)}_hat(t,e){this._noise(t,.04,"highpass",8e3,e)}_drum(t,e){this._tone(t,90,.18,"sine",e*.5,400),this._noise(t,.08,"lowpass",900,e*.25)}_crackle(t){this._noise(t,.01,"highpass",3e3,.05)}};var ft=r=>document.getElementById(r),Di=r=>new Promise(t=>setTimeout(t,r)),Kv=[15790320,1118740,9212054,5922918,12589080,1718906,2779706,15909376,6953530,14187040,4237528,13154458],Ah=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan. 165 hp",price:0},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend. 75 hp",price:2500},{id:"hatch",name:"City Hatch",desc:"Small Japanese import. Nimble. 110 hp",price:6e3},{id:"van",name:"Marshrutka",desc:"Your own white minibus. 160 hp",price:12e3},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes. 280 hp",price:25e3},{id:"coupe",name:"Sport Coupe",desc:"420 hp. Mind the 150 km/h cameras!",price:6e4}],Nr={low:{scale:.7,view:900,far:2500,shadows:!1,bloom:!1,msaa:!1},medium:{scale:1,view:1250,far:4500,shadows:!0,bloom:!0,msaa:!1},high:{scale:1.25,view:1600,far:6500,shadows:!0,bloom:!0,msaa:!0},ultra:{scale:1.6,view:2200,far:9e3,shadows:!0,bloom:!0,msaa:!0}},jv={preset:"medium",traffic:1,peds:1,sens:1,abs:!0,tcs:!0,esc:!0,steerAssist:!0,manual:!1,fov:62,vol:.7,minimap:!0,autoRes:!0,showFps:!1,weather:"auto",timeSpeed:1,mp:!0,name:"",shake:!0,...Nr.medium};function Qv(){let r={};try{r=JSON.parse(localStorage.getItem("bd_settings2")||"{}")}catch{}if(!r.preset){let t=navigator.hardwareConcurrency||4,e=/Mobi|Android|iPhone/i.test(navigator.userAgent),n=new URLSearchParams(location.search).get("q");r.preset=n||(e?"low":t>=8?"high":"medium"),Object.assign(r,Nr[r.preset])}return Object.assign({},jv,Nr[r.preset]||{},r)}function Kf(r){try{localStorage.setItem("bd_settings2",JSON.stringify(r))}catch{}}async function ty(){let r=(D,q)=>{ft("loadText").textContent=D,ft("loadBar").style.width=(q*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await Di(30),!window.BISHKEK_DATA){ft("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new ta(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`${t.buildings.length.toLocaleString()} buildings \xB7 ${t.edges.length.toLocaleString()} streets \xB7 ${t.signalClusters.length} traffic lights`,.25),await Di(30);let e=Qv(),n=new Io({antialias:!1,powerPreference:"high-performance"}),i=1,s=()=>n.setPixelRatio((Math.min(window.devicePixelRatio*e.scale,2)*(window.devicePixelRatio>=2?.75:1)||1)*i);s(),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=be,n.toneMapping=zr,n.toneMappingExposure=.95,n.shadowMap.enabled=e.shadows,n.shadowMap.type=$c,n.autoClear=!1,ft("app").appendChild(n.domElement);let o=new Zi,a=new We(e.fov,window.innerWidth/window.innerHeight,.5,4200),l=new aa(n,o);l.sun.shadow.mapSize.set(e.preset==="ultra"?4096:e.preset==="high"?2048:1536,e.preset==="ultra"?4096:e.preset==="high"?2048:1536);let c=yf();r("Building Bishkek\u2026",.35),await Di(20);let h=new oa(o,t,c);for(let D of["grass","dirt","field","asphalt","concrete","water"])Object.assign(h.mat[D],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(h.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(h.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(h.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let u=new ya(t),p=new xa,f=new va(t,u,p);f.owned||(f.owned=["sedan"]);let g=new ma(o,t,h);f.setAirport(g),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await Di(20);let m=new ga(o,t,h),x=t.nearestRoad(40,55,120,D=>D.cls<=2)||t.nearestRoad(0,0,500),d=new ca(o,f.owned.includes(f.savedCar)?f.savedCar:"sedan",f.savedColor);f.homeCar=d.type,f.homeColor=d.color;let _=x.x-x.dz*t.laneOffset(x.e,0),M=x.z+x.dx*t.laneOffset(x.e,0);d.place(_,M,Math.atan2(x.dx,x.dz));let v={x:_,z:M};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),h.radius=500,h.update({x:d.x,z:d.z},0,!0),h.radius=Math.min(e.view,900);for(let D=0;D<15;D++)h.update({x:d.x,z:d.z},0,!1),r("Streets, buildings, trees and shop signs\u2026",.55+D*.025),await Di(1);h.radius=e.view,r("Traffic, traffic lights and people\u2026",.92),await Di(20);let T=new ua(o,t,h),w=new da(o,t);w.addZone({name:"Manas Airport",x:g.dropoff.x+g.n.x*18,z:g.dropoff.y+g.n.y*-18,r:45,n:40,bags:!0});let E=new _a(t,f,u,p,w),C=new Ia(u,p,f),y=new La(o,t,f,u,p),b=new za(o,t,f,u,p),A=new Ua(o,h,l),z=new Na(o,h,t),N=new Ba(p);e.weather&&e.weather!=="auto"&&A.set(e.weather),f.custom&&(d.custom={...f.custom},d._applyCustom(),f.custom.plate&&d.setPlate(f.custom.plate)),E.completed=f.jobsDone||0;let H=new Pa(t),B=new Aa(o),k=new Ra(o,t,h,p,u,B);k.onEscape=D=>{let q=100*D;f.money+=q,p.cash(),u.toast(`+${q} coins escape bonus`,2)};let G=new Ma(o);d.remotes=G;let O=new ha(a);O.snap(d);let $=null,Q=()=>{$=e.bloom||e.msaa?new Ta(n,l,o,a,{bloom:e.bloom,msaa:e.msaa}):null};Q();let P={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,thr:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0,hud:!0,chatOpen:!1};function ut(){T.target=Math.round(260*e.traffic),w.target=Math.round(220*e.peds),d.assists={abs:e.abs,tcs:e.tcs,esc:e.esc,steerAssist:e.steerAssist,sens:e.sens,manual:e.manual},p.setVolume(e.vol),h.radius=e.view,h.farRadius=e.far||0,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),a.fov=e.fov,ft("hudRoot").classList.toggle("nomini",!e.minimap),Kf(e)}ut(),window.__bd={drift:C,kalpaks:y,races:b,weather:A,foot:z,radio:N,fx:B,police:k,teleport:(...D)=>Lt(...D),rig:O,map:t,world:h,car:d,traffic:T,peds:w,airport:g,game:f,jobs:E,net:G,S:P,scene:o,camera:a,renderer:n,env:l,settings:e};function nt(D,q,Vt){d.setType(D,q??d.color),P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null),d.stolen=!1,d.assists&&(d.assists={...d.assists}),Vt&&(f.homeCar=D,f.homeColor=q??d.color),O.snap(d)}let F={steer:0,gas:0,brake:0,hand:!1,nitro:!1},Z=["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",D=>{if(!P.chatOpen&&!(D.target&&D.target.tagName==="INPUT"&&D.target.type==="text"&&D.target.offsetParent!==null)){if(D.code==="Tab"){D.preventDefault(),P.mode!=="menu"&&le(!0);return}D.code==="F1"&&D.preventDefault(),!(D.repeat&&!Z.includes(D.code))&&(P.keys[D.code]=!0,Z.includes(D.code)&&D.preventDefault(),rt(D.code))}}),window.addEventListener("keyup",D=>{P.keys[D.code]=!1,D.code==="Tab"&&P.tabOnline&&le(!1)}),window.addEventListener("blur",()=>{P.keys={}});function rt(D){if(p.start(),P.mode==="menu"){D==="Enter"&&ft("startBtn").click();return}if(D==="Escape")return P.mapOpen?L(!1):ft("airportMenu").classList.contains("hidden")?P.mode==="flight"?ne(!0):P.mode==="spot"?V():P.mode==="cutscene"?void 0:Ct():ft("airportMenu").classList.add("hidden");if(!P.paused)switch(D){case"KeyC":P.mode==="flight"?P.flightCam=(P.flightCam+1)%4:u.toast("Camera: "+O.cycle(),1.2);break;case"KeyM":L();break;case"KeyH":p.horn(.3,.45),w.list.forEach(q=>{!q.fixed&&Math.hypot(q.x-d.x,q.z-d.z)<15&&q.mode==="walk"&&(q.dodge=.5,q.dside=Math.random()<.5?1:-1)});break;case"KeyE":te();break;case"KeyJ":Ct(!0,"pJobs");break;case"KeyR":It();break;case"KeyG":f.routeTarget&&!E.active&&(f.clearRoute(),u.toast("GPS cleared",1.2));break;case"KeyK":u.toast(p.toggleMute()?"Sound off":"Sound on",1.2);break;case"BracketRight":P.hour=(P.hour+1)%24,u.toast(u.clockText(),.8);break;case"BracketLeft":P.hour=(P.hour+23)%24,u.toast(u.clockText(),.8);break;case"KeyX":e.manual&&d.shiftUp();break;case"KeyZ":e.manual&&d.shiftDown();break;case"KeyF":at();break;case"KeyQ":{let q=N.next();u.toast(q?`\u{1F4FB} ${q.name} \xB7 ${q.genre}`:"\u{1F4FB} Radio off",1.6),ft("radioLbl").textContent=q?"\u{1F4FB} "+q.name:"";break}case"F1":P.hud=!P.hud,ft("hudRoot").classList.toggle("off",!P.hud);break;case"Enter":e.mp&&Nt();break}}let st=!1;n.domElement.addEventListener("contextmenu",D=>D.preventDefault()),n.domElement.addEventListener("mousedown",D=>{D.button===2&&(st=!0),p.start()}),window.addEventListener("mouseup",D=>{D.button===2&&(st=!1)});let dt={dx:0,dy:0,active:!1};window.addEventListener("mousemove",D=>{st&&(P.mouseYaw-=D.movementX*.006,dt.dx+=D.movementX*.006,dt.dy+=D.movementY*.004)});function It(){let D=t.nearestRoad(d.x,d.z,300,xt=>xt.cls<=4);if(!D)return;let q=t.laneOffset(D.e,0),Vt=D.dx,ee=D.dz;!D.e.ow&&Math.sin(d.h)*Vt+Math.cos(d.h)*ee<0&&(Vt=-Vt,ee=-ee),d.place(D.x-ee*q,D.z+Vt*q,Math.atan2(Vt,ee)),u.toast("Car reset",1)}function Lt(D,q){let Vt=t.nearestRoad(D,q,400,xt=>xt.cls<=4);if(!Vt)return;let ee=t.laneOffset(Vt.e,0);d.place(Vt.x-Vt.dz*ee,Vt.z+Vt.dx*ee,Math.atan2(Vt.dx,Vt.dz)),T.clear();for(let xt in T.models)T.models[xt].n=0;k.clear();for(let xt of[...B.emitters])xt.ai&&B.removeEmitter(xt);w.list=w.list.filter(xt=>xt.fixed);for(let xt of w.extraZones)xt.count=0;O.snap(d);for(let xt=0;xt<6;xt++)h.update({x:d.x,z:d.z},0,!0)}let jt={taxi:"sedan",sedan:"sedan",hatch:"hatch",suv:"suv",oldsedan:"oldsedan",van:"van",bus:"bus",truck:"truck"};function at(){if(P.mode!=="drive"||b.active)return;if(!P.onFoot){if(d.speed>3){u.toast("Slow down to get out",1);return}if(E.active&&(E.active.type==="bus"||E.active.type==="marshrutka")){u.toast("Finish your route first",1.2);return}z.exit(d),P.onFoot=!0,p.blip(300,.05,.08);return}let D=z.nearestCar(d,T);if(!D){u.toast("No car nearby",1);return}if(!D.own){let q=D.c,Vt=T.cars.indexOf(q);Vt>=0&&T._remove(Vt);let ee={mode:"cross",x:q.x+Math.cos(q.h)*1.6,z:q.z-Math.sin(q.h)*1.6,h:0,ex:0,ez:0,dodge:0,wait:0,shirt:6953498,pants:2238522,skin:14200976,hairC:1709072,scale:1,speed:5,phase:0};ee.tx=ee.x+Math.cos(q.h)*25,ee.tz=ee.z-Math.sin(q.h)*25,ee.h=Math.atan2(ee.tx-ee.x,ee.tz-ee.z),w.list.push(ee),d.setType(jt[q.type]||"sedan",q.color),d.place(q.x,q.z,q.h),d.stolen=!0,P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null),k.crime(1.3,"Car theft"),p.horn(.2,.6,.9),u.toast("\u{1F697} Car stolen! (your own car is waiting in the Garage)",2.5)}z.enter(),P.onFoot=!1,O.snap(d),p.blip(420,.05,.08)}function mt(D,q,Vt,ee,xt,Gt,Zt,pe){e.shake&&(O.shake=Math.min(.7,D*.05)),p.crash(D),D>3&&C.crash(),ee!==void 0&&D>3&&(B.crash(ee,.6,xt,Gt??0,Zt??0,D,q==="car"&&Vt?Vt.color:d.color),D>4&&d.dent(ee,xt,Math.min(.32,D*.022))),q==="car"&&Vt&&(pe?(Vt.emitter=B.emitter(Vt,[0,1,Vt.spec.L*.32],!0),Vt.emitter.ai=!0,u.toast("\u{1F4A5} Car wrecked!",1.5),k.crime(1.6,"You wrecked a car")):D>7?k.crime(1,"Hit-and-run"):D>4&&k.crime(.4,"Reckless driving")),q==="player"&&D>6&&k.crime(.6,"Rammed another driver"),U()}function U(){d.damage>55&&!P.engineSmoke&&(P.engineSmoke=B.emitter(d,[0,1.05,d.spec.L*.36],!1)),P.engineSmoke&&(P.engineSmoke.dark=d.damage>=90),d.damage<=55&&P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null)}k.onRam=()=>U(),f.onFine=D=>{D.kind==="Speeding"&&D.amount>=500?k.crime(1,"Extreme speeding"):D.kind==="Runway incursion"?k.crime(2,"Runway incursion"):D.kind==="Red light"&&k.crime(.35,"Ran a red light")};let Ot=[];function pt(D,q,Vt){let ee=document.createElement("div");for(ee.innerHTML=`<b>${Rn(D)}</b> ${Rn(q)}`,Vt&&(ee.style.opacity="0.85"),ft("chat").appendChild(ee),Ot.push(ee);Ot.length>6;)Ot.shift().remove();setTimeout(()=>{ee.style.opacity="0"},9e3),setTimeout(()=>ee.remove(),10500),Vt||p.blip(700,.04,.06)}G.onChat=pt,G.onJoin=D=>pt("\u25CF",`${D} is driving in Bishkek`,!0);function Nt(){if(!G.enabled)return;P.chatOpen=!0,P.keys={};let D=ft("chatInput");D.classList.remove("hidden"),D.value="",D.focus()}ft("chatInput").addEventListener("keydown",D=>{D.stopPropagation(),D.key==="Enter"&&(G.chat(D.target.value),_t()),D.key==="Escape"&&_t()});function _t(){P.chatOpen=!1,ft("chatInput").classList.add("hidden"),ft("chatInput").blur()}document.querySelectorAll(".tab").forEach(D=>D.onclick=()=>Jt(D.dataset.p));function Jt(D){document.querySelectorAll(".tab").forEach(q=>q.classList.toggle("on",q.dataset.p===D)),document.querySelectorAll(".page").forEach(q=>q.classList.toggle("on",q.id===D)),D==="pJobs"&&Ft(),D==="pGarage"&&Et(),D==="pOnline"&&zt(),D==="pPlaces"&&vt(),D==="pSettings"&&Bt()}function Ct(D,q){P.paused=D!==void 0?D:!P.paused,ft("pause").classList.toggle("hidden",!P.paused),P.paused&&Jt(q||"pJobs"),P.keys={}}ft("resume").onclick=()=>Ct(!1);function L(D){P.mapOpen=D!==void 0?D:!P.mapOpen,ft("mapPanel").classList.toggle("hidden",!P.mapOpen),P.keys={},P.mapOpen?(u._resize(),u.centerMap(d.x,d.z,.12),setTimeout(()=>ft("searchInput").focus(),50)):ft("searchInput").blur()}let S=[],Y=0,it=null;function ht(){ft("searchRes").innerHTML=S.map((D,q)=>`<button class="${q===Y?"on":""}" data-i="${q}"><span class="ic">${H.icon(D.kind)}</span><span>${Rn(D.name)}<small>${D.kind}${D.alt?" \xB7 "+Rn(D.alt):""} \xB7 ${Fa(Math.hypot(D.x-d.x,D.z-d.z))}</small></span></button>`).join(""),ft("searchRes").querySelectorAll("button").forEach(D=>D.onclick=()=>ot(S[+D.dataset.i]))}function ot(D){D&&(it=D,u.searchMark=D,u.centerMap(D.x,D.z,.6),ft("pcName").textContent=D.name,ft("pcSub").textContent=`${D.kind}${D.alt?" \xB7 "+D.alt:""} \xB7 ${Fa(Math.hypot(D.x-d.x,D.z-d.z))} away`,ft("placeCard").classList.remove("hidden"),S=[],ht(),ft("searchInput").blur())}ft("searchInput").addEventListener("input",D=>{Y=0,S=H.find(D.target.value,10,d),ht()}),ft("searchInput").addEventListener("keydown",D=>{D.stopPropagation(),D.key==="ArrowDown"&&(Y=Math.min(S.length-1,Y+1),ht(),D.preventDefault()),D.key==="ArrowUp"&&(Y=Math.max(0,Y-1),ht(),D.preventDefault()),D.key==="Enter"&&ot(S[Y]),D.key==="Escape"&&(D.target.value?(D.target.value="",S=[],ht()):L(!1))}),ft("pcRoute").onclick=()=>{it&&(f.setRoute(it.x,it.z,it.name),u.toast(`\u{1F9ED} Route to ${Rn(it.name)}`,2),L(!1))},ft("pcGo").onclick=()=>{it&&(Lt(it.x,it.z),u.toast(`\u26A1 ${Rn(it.name)}`,2),L(!1))},u.onMapClick=(D,q,Vt)=>{if(ft("placeCard").classList.add("hidden"),u.searchMark=null,Vt){Lt(D,q),L(!1);return}f.setRoute(D,q,"Waypoint"),u.toast("GPS route set",1.2)},ft("mapClose").onclick=()=>L(!1);function Ft(){ft("jobCards").innerHTML=Object.entries(ns).map(([q,Vt])=>`<button class="card ${E.active?.type===q?"sel":""}" data-id="${q}"><div class="ic">${Vt.icon}</div><b>${Vt.name}</b><small>${Vt.desc}</small></button>`).join(""),ft("jobCards").querySelectorAll("button").forEach(q=>q.onclick=()=>{if(P.mode==="drive"){if(Ct(!1),E.active?.type===q.dataset.id){E.stop(d,nt);return}E.start(q.dataset.id,d,o,nt)}}),ft("raceCards").innerHTML=Th.map(q=>`<button class="card" data-r="${q.id}"><div class="ic">\u{1F3C1}</div><b>${q.name}</b><small>${q.desc}</small><div class="price">${b.best[q.id]?"\u{1F3C6} Best "+Da(b.best[q.id]):"Prize up to 1 500 coins"}</div></button>`).join(""),ft("raceCards").querySelectorAll("button").forEach(q=>q.onclick=()=>{P.mode==="drive"&&(P.onFoot&&(z.enter(),P.onFoot=!1),E.stop(d,nt,!0),k.clear(),Ct(!1),b.start(Th.find(Vt=>Vt.id===q.dataset.r),d,Lt)?(O.snap(d),u.toast("Beat the gold & silver rivals! Speed cameras are off on the race route.",3)):u.toast("Could not build the race route",1.5))}),ft("kalpakTxt").textContent=`\u{1F3A9} Golden kalpaks found: ${y.count}/${y.list.length} \u2013 hidden all over Bishkek (+250 coins each)`,ft("jobNow").innerHTML=E.active?`On shift: <b>${E.status(d)}</b> \xB7 <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>`:`${E.completed} jobs done \xB7 balance <b>${Zn(f.money)} coins</b>`;let D=ft("endShift");D&&(D.onclick=q=>{q.preventDefault(),E.stop(d,nt),Ft()})}function Et(){ft("garage").innerHTML=Ah.map(Zt=>{let pe=f.owned.includes(Zt.id);return`<button class="card ${d.type===Zt.id?"sel":""} ${pe?"":"locked"}" data-id="${Zt.id}"><b>${Zt.name}</b><small>${Zt.desc}</small><div class="price">${pe?d.type===Zt.id?"Driving":"Owned":"\u{1FA99} "+Zn(Zt.price)}</div></button>`}).join(""),ft("garage").querySelectorAll("button").forEach(Zt=>Zt.onclick=()=>{let pe=Ah.find(mn=>mn.id===Zt.dataset.id);if(E.active&&(E.active.type==="bus"||E.active.type==="marshrutka")){u.toast("Finish your route first",1.5);return}if(!f.owned.includes(pe.id)){if(f.money<pe.price){u.toast(`Not enough coins (${Zn(pe.price)} needed)`,1.6);return}f.money-=pe.price,f.owned.push(pe.id),p.cash()}nt(pe.id,d.color,!0),f.save(d),Et()});let D=Math.round(d.damage*3+d.dents*5);ft("dmgTxt").textContent=d.damage>1||d.dents?`Damage ${Math.round(d.damage)}% \xB7 ${D} coins`:"Your car is in perfect shape",ft("repairBtn").onclick=()=>{if(d.damage>1||d.dents){if(f.money<D){u.toast("Not enough coins",1.2);return}f.money-=D,d.repair(),U(),p.cash(),Et()}};let q=d.custom||(d.custom={}),Vt=[[null,"Off"],[2130175,"Blue"],[16719968,"Pink"],[3211136,"Green"],[16752672,"Orange"],[11550975,"Purple"],[16777215,"White"]],ee=[[null,"Chrome"],[2236962,"Black"],[13934624,"Gold"],[13639712,"Red"],[2777296,"Blue"]],xt=f.upgrades||(f.upgrades={}),Gt=(Zt,pe,mn)=>{if(!xt[Zt]){if(f.money<pe){u.toast(`Need ${pe} coins`,1.2);return}f.money-=pe,xt[Zt]=!0,p.cash()}mn(),d._applyCustom(),f.custom={...q},f.save(d),Et()};ft("custom").innerHTML=`<h4>Neon underglow ${xt.neon?"":"\xB7 1 500 coins"}</h4><div class="sws">${Vt.map(([Zt,pe])=>`<button class="btn ${q.neon===Zt?"pri":""}" data-neon="${Zt}">${pe}</button>`).join(" ")}</div>
      <h4>Rims ${xt.rims?"":"\xB7 600 coins"}</h4><div class="sws">${ee.map(([Zt,pe])=>`<button class="btn ${(q.rims??null)===Zt?"pri":""}" data-rims="${Zt}">${pe}</button>`).join(" ")}</div>
      <h4>Rear spoiler ${xt.spoiler?"":"\xB7 1 000 coins"}</h4><button class="btn ${q.spoiler?"pri":""}" id="spBtn">${q.spoiler?"Remove spoiler":"Add spoiler"}</button>
      <h4>Number plate</h4><input type="text" id="plateIn" maxlength="12" value="${Rn(d.plateText||"")}" style="background:#1b2430;color:#fff;border:1px solid #2c3a4a;border-radius:8px;padding:8px;text-transform:uppercase">`,ft("custom").querySelectorAll("[data-neon]").forEach(Zt=>Zt.onclick=()=>Gt("neon",1500,()=>{q.neon=Zt.dataset.neon==="null"?null:+Zt.dataset.neon})),ft("custom").querySelectorAll("[data-rims]").forEach(Zt=>Zt.onclick=()=>Gt("rims",600,()=>{q.rims=Zt.dataset.rims==="null"?null:+Zt.dataset.rims})),ft("spBtn").onclick=()=>Gt("spoiler",1e3,()=>{q.spoiler=!q.spoiler}),ft("plateIn").onchange=Zt=>{d.setPlate(Zt.target.value||"01KG 777 BSK"),q.plate=d.plateText,f.custom={...q},f.save(d)},ft("colors").innerHTML=Kv.map(Zt=>`<button class="sw" style="background:#${Zt.toString(16).padStart(6,"0")}" data-c="${Zt}"></button>`).join(""),ft("colors").querySelectorAll("button").forEach(Zt=>Zt.onclick=()=>{d.setColor(+Zt.dataset.c),f.homeColor=+Zt.dataset.c,f.save(d)})}function zt(){ft("netStatus").innerHTML=e.mp?G.status==="online"?`<span class="dot on"></span> Connected \xB7 ${G.players.size+1} drivers in Bishkek right now`:`Connecting\u2026 (${G.status})`:"Multiplayer is off (Settings \u2192 Online).";let D=[{name:G.name||e.name||"You",money:f.money,job:E.active?ns[E.active.type].icon:"",car:d.type,me:!0}].concat(G.list());D.sort((q,Vt)=>Vt.money-q.money),ft("lb").innerHTML="<tr><th>#</th><th>Driver</th><th>Coins</th><th>Now</th></tr>"+D.map((q,Vt)=>`<tr class="${q.me?"me":""}"><td>${Vt+1}</td><td>${Rn(q.name)}</td><td>${Zn(q.money)}</td><td>${q.job||Ah.find(ee=>ee.id===q.car)?.name||""}</td></tr>`).join("")}function le(D){P.tabOnline=D,D?(zt(),ft("pause").classList.remove("hidden"),Jt("pOnline")):P.paused||ft("pause").classList.add("hidden")}function vt(){ft("placeCount").textContent=`${f.visited.size}/${Fe.length} landmarks discovered \xB7 click to travel`,ft("placeList").innerHTML=Fe.map(D=>`<button class="place ${f.visited.has(D.id)?"done":""}" data-id="${D.id}"><span>${f.visited.has(D.id)?"\u2714":"\u25CB"} ${D.name}</span><small>${D.local||""}</small></button>`).join(""),ft("placeList").querySelectorAll("button").forEach(D=>D.onclick=()=>{let q=Fe.find(Vt=>Vt.id===D.dataset.id);Lt(q.x,q.z),Ct(!1)}),ft("fineList").innerHTML=f.fines.length?f.fines.slice(-10).reverse().map(D=>`<div class="row"><span>${D.kind}<br><small class="muted">${D.time} \xB7 ${Rn(D.detail)}</small></span><b style="color:#ff8a80">\u2212${Zn(D.amount)}</b></div>`).join(""):'<p class="muted">No fines. Keep it under 150 km/h!</p>'}function Bt(){let D=(xt,Gt)=>`<div class="row"><label>${Gt}</label><button class="tog ${e[xt]?"on":""}" data-k="${xt}"></button></div>`,q=(xt,Gt,Zt,pe,mn,Ui=un=>un)=>`<div class="row"><label>${Gt} <small class="muted" id="v_${xt}">${Ui(e[xt])}</small></label><input type="range" data-k="${xt}" min="${Zt}" max="${pe}" step="${mn}" value="${e[xt]}"></div>`,Vt=(xt,Gt,Zt)=>`<div class="row"><label>${Gt}</label><select data-k="${xt}">${Zt.map(([pe,mn])=>`<option value="${pe}" ${String(e[xt])===String(pe)?"selected":""}>${mn}</option>`).join("")}</select></div>`;ft("settingsBox").innerHTML=`<div class="set"><div>
      <h4>Graphics</h4>
      ${Vt("preset","Quality preset",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"],["custom","Custom"]])}
      ${q("scale","Resolution",.5,2,.05,xt=>Math.round(xt*100)+"%")}
      ${q("view","Detail distance",600,2600,100,xt=>xt+" m")}
      ${q("far","City skyline distance",0,1e4,500,xt=>xt?xt/1e3+" km":"off")}
      ${D("shadows","Shadows")}${D("bloom","Bloom & colour grading")}${D("msaa","Anti-aliasing")}
      ${q("fov","Field of view",50,85,1,xt=>xt+"\xB0")}
      <h4>World</h4>
      ${q("traffic","Traffic density",.2,2,.1,xt=>Math.round(xt*100)+"%")}
      ${q("peds","Pedestrians",0,2,.1,xt=>Math.round(xt*100)+"%")}
      ${q("timeSpeed","Day speed",0,6,.5,xt=>xt?xt+"\xD7":"paused")}
      ${Vt("weather","Weather",[["auto","Changing"],["clear","Clear"],["rain","Rain"],["snow","Snow (winter)"]])}
    </div><div>
      <h4>Driving</h4>
      ${q("sens","Steering sensitivity",.4,1.6,.05,xt=>Math.round(xt*100)+"%")}
      ${Vt("manual","Gearbox",[["false","Automatic"],["true","Manual (Shift / Ctrl)"]])}
      ${D("abs","ABS")}${D("tcs","Traction control")}${D("esc","Stability control")}${D("steerAssist","Counter-steer assist")}
      <h4>Interface &amp; sound</h4>
      ${D("minimap","Minimap")}${D("shake","Camera shake")}${D("autoRes","Auto resolution (smooth FPS)")}${D("showFps","Show FPS")}
      ${q("vol","Volume",0,1,.05,xt=>Math.round(xt*100)+"%")}
      <h4>Online</h4>
      ${D("mp","Multiplayer")}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${Rn(e.name||"")}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;let ee=ft("settingsBox");ee.querySelectorAll(".tog").forEach(xt=>xt.onclick=()=>{let Gt=xt.dataset.k;e[Gt]=!e[Gt],xt.classList.toggle("on",e[Gt]),Yt(Gt)}),ee.querySelectorAll("input[type=range]").forEach(xt=>xt.oninput=()=>{let Gt=xt.dataset.k;e[Gt]=+xt.value;let Zt=ft("v_"+Gt);Zt&&(Zt.textContent=xt.parentElement.querySelector("small").textContent=Gt==="view"?xt.value+" m":Gt==="far"?+xt.value?xt.value/1e3+" km":"off":Gt==="fov"?xt.value+"\xB0":Gt==="timeSpeed"?+xt.value?xt.value+"\xD7":"paused":Math.round(xt.value*100)+"%"),Yt(Gt)}),ee.querySelectorAll("select").forEach(xt=>xt.onchange=()=>{let Gt=xt.dataset.k;e[Gt]=Gt==="manual"?xt.value==="true":xt.value,Yt(Gt),Gt==="weather"&&xt.value!=="auto"&&A.set(xt.value)}),ee.querySelector("input[type=text]").onchange=xt=>{e.name=xt.target.value.trim().slice(0,18)||"Driver",Yt("name")},ft("resetProg").onclick=()=>{confirm("Reset coins, cars and landmarks?")&&(localStorage.removeItem("bishkekDrive"),location.reload())}}function Yt(D){D==="preset"&&Nr[e.preset]?(Object.assign(e,Nr[e.preset]),Bt()):["scale","view","far","shadows","bloom","msaa"].includes(D)&&(e.preset="custom"),["scale","preset"].includes(D)&&(s(),n.setSize(window.innerWidth,window.innerHeight)),["shadows","preset"].includes(D)&&(n.shadowMap.enabled=e.shadows,o.traverse(q=>{q.material&&(Array.isArray(q.material)?q.material:[q.material]).forEach(Vt=>Vt.needsUpdate=!0)})),["bloom","msaa","preset","scale"].includes(D)&&Q(),D==="mp"&&(e.mp?G.connect(e.name||"Driver"):G.disconnect()),D==="name"&&G.enabled&&(G.name=e.name),ut(),a.updateProjectionMatrix()}ft("nameInput").value=e.name||"",ft("mpToggle").classList.toggle("on",e.mp),ft("mpToggle").onclick=()=>{e.mp=!e.mp,ft("mpToggle").classList.toggle("on",e.mp)},ft("startBtn").onclick=()=>{p.start(),e.name=(ft("nameInput").value.trim()||e.name||"Driver"+Math.floor(Math.random()*900+100)).slice(0,18),Kf(e),ft("menu").classList.add("hidden"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),P.mode="drive",P.paused=!1,O.snap(d),e.mp&&G.connect(e.name);let D=!1;try{D=!!localStorage.getItem("bd_intro")}catch{}D?u.toast(`Salam, <b>${Rn(e.name)}</b>! <b>J</b> jobs \xB7 <b>M</b> map \xB7 <b>Esc</b> menu`,4):(P.paused=!0,ft("intro").classList.remove("hidden"))},ft("introGo").onclick=()=>{ft("intro").classList.add("hidden"),P.paused=!1;try{localStorage.setItem("bd_intro","1")}catch{}u.toast(`Salam, <b>${Rn(e.name)}</b>! Press <b>J</b> to start working`,4)};function te(){if(P.mode!=="drive")return;let D=Math.hypot(d.x-g.dropoff.x,d.z-g.dropoff.y),q=Math.hypot(d.x-g.spotter.x,d.z-g.spotter.y);if(D<14){if(d.speed>3){u.toast("Stop the car first",1.2);return}u.renderBoard(g.board,ft("fids")),ft("airportMenu").classList.remove("hidden"),p.pa()}else q<14&&we()}ft("apFlight").onclick=()=>{if(f.money<500){u.toast("Not enough coins for a ticket (500)",1.6);return}f.money-=500,p.cash(),ft("airportMenu").classList.add("hidden"),ce()},ft("apSpot").onclick=()=>{ft("airportMenu").classList.add("hidden"),we()},ft("apTaxi").onclick=()=>{if(ft("airportMenu").classList.add("hidden"),!E.start("taxi",d,o,nt))return;let D=E.active;D.x=g.dropoff.x+g.n.x*6,D.z=g.dropoff.y+g.n.y*6,D.ped&&(D.ped.x=D.ped.tx=D.x,D.ped.z=D.ped.tz=D.z),D.dest=Fe.filter(q=>!q.airport)[Math.floor(Math.random()*(Fe.length-1))],f.setRoute(D.x,D.z,"Passenger"),u.toast(`\u{1F695} <b>${D.passenger}</b> just landed and needs a ride to ${D.dest.name}`,3.5)},ft("apClose").onclick=()=>ft("airportMenu").classList.add("hidden");let Ut=D=>ft("fade").classList.toggle("on",D);async function ce(){Ut(!0),await Di(700),P.flight=g.createScenicFlight(),P.mode="flight",P.flightCam=0,g.scenicCamera(P.flight,0,Rt,St),a.position.copy(Rt),Kt.copy(St),h.radius=Math.max(e.view,2400),a.far=12e3,a.updateProjectionMatrix(),ft("boarding").classList.add("show"),setTimeout(()=>ft("boarding").classList.remove("show"),4e3),p.pa(),Ut(!1)}async function ne(D){if(!P.flight||P.ending)return;P.ending=!0;let q=P.flight;Ut(!0),await Di(700),g.endScenic(q),P.flight=null,P.ending=!1,P.mode="drive",h.radius=e.view,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),u.setFlightInfo(null),O.snap(d),Ut(!1),u.toast(D?"Back at Manas airport":"Welcome back to Bishkek!",2.5)}function we(){P.mode="spot";let D=g.planes.find(q=>q.state==="approach"||q.state==="flare");D||(D=g._newPlane(),g._startApproach(D,.45)),P.spot={pl:D,cam:new I(g.spotter.x,2.2,g.spotter.y)},Kt.set(D.x,D.y,D.z),u.toast("Plane spotting \xB7 Esc to exit",2.5)}function V(){P.mode="drive",P.spot=null}if("ontouchstart"in window){ft("touch").classList.remove("hidden");let D=(q,Vt,ee)=>{let xt=ft(q);xt.addEventListener("touchstart",Gt=>{Gt.preventDefault(),p.start(),Vt()}),xt.addEventListener("touchend",Gt=>{Gt.preventDefault(),ee()})};D("tLeft",()=>F.steer=-1,()=>F.steer=0),D("tRight",()=>F.steer=1,()=>F.steer=0),D("tGas",()=>F.gas=1,()=>F.gas=0),D("tBrake",()=>F.brake=1,()=>F.brake=0),D("tHand",()=>F.hand=!0,()=>F.hand=!1),D("tNitro",()=>F.nitro=!0,()=>F.nitro=!1),D("tCam",()=>rt("KeyC"),()=>{}),D("tAct",()=>rt("KeyE"),()=>{}),D("tMenu",()=>rt("Escape"),()=>{})}window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),$&&$.setSize(window.innerWidth,window.innerHeight)});let At=new Xs,et={x:0,z:0,h:0,speed:0,spec:d.spec,vx:0,vz:0,radius:1},lt={},Rt=new I,St=new I,Kt=new I,Re=document.createElement("canvas");Re.width=320,Re.height=180;let Ye=D=>P.photoCbs.push(D);if(ft("loading").classList.add("hidden"),ft("menu").classList.remove("hidden"),!localStorage.getItem("bd_seen"))try{localStorage.setItem("bd_seen","1")}catch{}function ge(D,q){return g.rel(new tt(D,q)).x>-2500&&q<-15500?"Manas International Airport":q<-3600?"Bishkek \u2013 Manas road":q<300?D<500?"Pervomaisky district":"Sverdlovsky district":D<0?"Leninsky district":"Oktyabrsky district"}let Ze=0,tn={ema:1/60,t:0};n.shadowMap.autoUpdate=!1;function Qs(){requestAnimationFrame(Qs);let D=At.getDelta(),q=Math.min(.05,D);if(tn.ema=tn.ema*.95+D*.05,tn.t+=D,tn.t>1.5){tn.t=0;let ct=1/Math.max(.001,tn.ema);if(e.showFps?(ft("fps").textContent=Math.round(ct)+" fps",ft("fps").style.display="block"):ft("fps").style.display="none",e.autoRes&&P.mode!=="menu"){let bt=i;ct<40?i=Math.max(.5,i-(ct<25?.15:.08)):ct>57&&i<1&&(i=Math.min(1,i+.05)),bt!==i&&(s(),n.setSize(window.innerWidth,window.innerHeight),$&&$.setSize(window.innerWidth,window.innerHeight))}h.buildBudget=ct<35?4:8}let Vt=!P.paused&&P.mode!=="menu",ee=Vt?q:0;P.time+=ee,rn.uTime.value+=q,P.hour=(P.hour+ee/60*e.timeSpeed)%24,l.setHour(P.hour);let xt=P.hour;T.rush=xt>7.5&&xt<10||xt>17&&xt<20?1.65:xt>23||xt<6?.45:1;let Gt=P.keys,Zt=(Gt.KeyD||Gt.ArrowRight?1:0)-(Gt.KeyA||Gt.ArrowLeft?1:0)+F.steer,pe=(Gt.KeyW||Gt.ArrowUp?1:0)+F.gas,mn=(Gt.KeyS||Gt.ArrowDown?1:0)+F.brake,Ui=!1,un=navigator.getGamepads?[...navigator.getGamepads()].find(ct=>ct):null;un&&(Math.abs(un.axes[0])>.08&&(Zt=Math.sign(un.axes[0])*Math.pow(Math.abs(un.axes[0]),1.5),Ui=!0),un.buttons[7]?.value>.02&&(pe=un.buttons[7].value),un.buttons[6]?.value>.02&&(mn=un.buttons[6].value)),P.steer=Ui?Zt:P.steer+(Ce.clamp(Zt,-1,1)-P.steer)*Math.min(1,q*(Zt===0?12:8)),P.thr+=(Math.min(1,pe)-P.thr)*Math.min(1,q*(pe?5:12));let tr={steer:P.steer,throttle:P.thr<.02?0:P.thr,brake:Math.min(1,mn),hand:!!(Gt.Space||F.hand||un?.buttons[0]?.pressed),nitro:!!(Gt.ShiftLeft||Gt.ShiftRight||F.nitro||un?.buttons[1]?.pressed)};d.throttleOn=tr.throttle>0;let Ni=P.onFoot?z:d,R=l.night;if(d.night=R>.45,Vt){if(P.mode==="drive"||P.mode==="spot"){let gt=t.nearestRoad(d.x,d.z,25),Qt=gt&&gt.dist<gt.e.w/2+3.5;d.surface=(Qt||g.runwayIncursion(d.x,d.z)?1:.72)*(A.grip??1),lt.road=gt&&gt.dist<gt.e.w/2+4?gt:null;let Ht=P.mode==="spot"||P.onFoot?{steer:0,throttle:0,brake:1,hand:!0}:tr;d.update(q,Ht,h,T,mt),P.onFoot&&z.update(q,{fwd:(Gt.KeyW||Gt.ArrowUp?1:0)-(Gt.KeyS||Gt.ArrowDown?1:0),side:(Gt.KeyD||Gt.ArrowRight?1:0)-(Gt.KeyA||Gt.ArrowLeft?1:0),run:!!(Gt.ShiftLeft||Gt.ShiftRight),jump:!!Gt.Space},T.cars.concat([d]),w),C.update(q,d,P.onFoot);let ie=b.update(q,d);ie&&ie.target&&(!f.routeTarget||f.routeTarget.x!==ie.target.x)&&f.setRoute(ie.target.x,ie.target.z,"Checkpoint"),ie&&ie.done&&f.clearRoute()}let ct=P.mode==="flight"?Object.assign(et,{x:P.flight.plane.x,z:P.flight.plane.z,h:P.flight.plane.h,speed:0}):Ni;T.night=R,T.update(q,ct,e.peds>0?w:null),w.update(q,ct,e.peds>0);for(let gt of T.honks){let Qt=Math.hypot(gt.x-d.x,gt.z-d.z);p.horn(Math.min(.3,6/(Qt+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(g.update(q,R,d,P.flight?P.flight.plane:null),m.update(q,P.time,R),P.mode==="drive"||P.mode==="cutscene"){let gt=k.update(q,P.onFoot?z:d,()=>{P.mode="cutscene",document.body.classList.add("cinemode"),E.active&&E.stop(d,nt,!0)});gt&&gt.cam&&(P.cutCam=gt),gt&&gt.done&&(P.mode="drive",document.body.classList.remove("cinemode"),P.cutCam=null,f.money-=gt.fine,f.fines.push({kind:"Arrest",amount:gt.fine,detail:"Caught by the patrol police",time:u.clockText()}),O.snap(d),f.save(d),u.toast(`Released after paying ${gt.fine} coins`,3))}if(B.update(q),y.update(q,Ni.x,Ni.z),A.update(q,a),n.toneMappingExposure=.95*(A.exposure??1),e.weather==="auto"&&(P.wT=(P.wT??300)-q,P.wT<=0)){P.wT=300+Math.random()*400;let gt=Math.random();A.set(gt<.6?"clear":gt<.85?"rain":"snow")}if(Ze%60===0)for(let gt of[...B.emitters])gt.ai&&!T.cars.includes(gt.obj)&&B.removeEmitter(gt);if(P.mode==="drive"){let gt=lt.road?t.roadName(lt.road.e.name):null;lt.street=gt?gt.en:null,f.trafficTime=T.time,!b.active&&!P.onFoot&&f.checkRules(q,d,lt,null,g,Ye),f.checkLandmarks(d);let Qt=E.update(q,d,o,nt);if(Qt&&Qt.done&&(f.jobsDone=E.completed,f.save(d)),!E.active&&E.nextIn!==void 0&&(E.nextIn-=q,E.nextIn<=0)){let ve=E.nextType;E.nextIn=void 0,E.start(ve,d,o,nt)}u.setStreet(gt?gt.en!==gt.local?`${gt.en}`:gt.local:lt.runway?"Runway 07/25":"",gt&&gt.en!==gt.local?gt.local:ge(d.x,d.z)),u.setLimit(d.speed*3.6,lt.wrongWay,lt.runway);let Ht=Math.hypot(d.x-g.dropoff.x,d.z-g.dropoff.y),ie=Math.hypot(d.x-g.spotter.x,d.z-g.spotter.y),me=Ht<14?"<b>E</b> \xB7 Manas Airport":ie<14?"<b>E</b> \xB7 watch planes land":"";if(P.onFoot){let ve=z.nearestCar(d,T);me=ve?ve.own?"<b>F</b> \xB7 get in your car":"<b>F</b> \xB7 steal this car \u{1F6A8}":"Walking \xB7 <b>Shift</b> run \xB7 <b>Space</b> jump"}me!==P.hintTxt&&(P.hintTxt=me,ft("hint").innerHTML=me,ft("hint").classList.toggle("show",!!me))}else P.hintTxt&&(P.hintTxt="",ft("hint").classList.remove("show"));if(P.mode==="flight"){let gt=["pushback","taxi","taxiIn"].includes(P.flight.stage)?q*3:q;!P.ending&&g.updateScenic(P.flight,gt)&&ne(!1)}f.updateRoute(P.mode==="flight"?et:d,o),f.routeMat&&(f.routeMat.uniforms.uTime.value=P.time);let bt=E.status(d),kt=f.routeTarget?Math.hypot(d.x-f.routeTarget.x,d.z-f.routeTarget.z):0;u.setMission(bt?`${bt} \xB7 ${Fa(kt)}`:f.routeTarget?`\u{1F4CD} ${f.routeTarget.label} \xB7 ${Fa(kt)}`:""),P.lastSave+=q,P.lastSave>10&&(P.lastSave=0,f.save(d))}if(G.update(q,d,{money:f.money,job:E.active?ns[E.active.type].icon:"",jobs:E.completed},R),P.mode==="flight"&&P.flight){g.scenicCamera(P.flight,P.flightCam,Rt,St),a.position.lerp(Rt,P.flightCam===0?1-Math.exp(-q*4):1),Kt.lerp(St,P.flightCam===0?1-Math.exp(-q*6):1),a.lookAt(Kt),a.fov=P.flightCam===2?70:55,a.updateProjectionMatrix();let ct=P.flight.plane,bt=(Math.atan2(Math.sin(ct.h),-Math.cos(ct.h))*180/Math.PI+360)%360;u.setFlightInfo({alt:ct.y-ct.a.groundY+627,spd:ct.v,hdg:bt,stage:{pushback:"Pushback",taxi:"Taxi to runway 07",roll:"Take-off",air:"Over Bishkek",final:"Final approach",taxiIn:"Taxi to gate",done:"Arrived"}[P.flight.stage],cam:["Chase","Window","Cockpit","Spotter"][P.flightCam]})}else if(P.mode==="spot"&&P.spot){let ct=P.spot.pl;a.position.copy(P.spot.cam),Kt.lerp(new I(ct.x,ct.y,ct.z),1-Math.exp(-q*5)),a.lookAt(Kt),a.fov=Ce.clamp(Math.hypot(ct.x-P.spot.cam.x,ct.z-P.spot.cam.z)/40,12,60),a.updateProjectionMatrix(),(!g.planes.includes(ct)||ct.state==="taxiIn"||ct.state==="climb"||ct.state==="goaround"&&ct.y>300)&&V()}else if(P.mode==="cutscene"&&P.cutCam)a.position.lerp(P.cutCam.cam,1-Math.exp(-q*3)),Kt.lerp(P.cutCam.look,1-Math.exp(-q*4)),a.lookAt(Kt),a.fov=50,a.updateProjectionMatrix();else if(P.onFoot&&P.mode==="drive")dt.active=st,z.camera(a,q,dt),dt.dx=dt.dy=0;else if(P.mode!=="free"&&(st||(P.mouseYaw*=Math.exp(-q*2)),d.boosting&&(O.shake=Math.max(O.shake,.06)),O.baseFov=e.fov,O.update(Math.max(q,.001),d,P.mouseYaw),P.mode==="menu")){let ct=performance.now()*4e-5;a.position.set(d.x+Math.sin(ct)*26,6+Math.sin(ct*3)*2,d.z+Math.cos(ct)*26),a.lookAt(d.x,2,d.z)}let X=P.mode==="flight"||P.mode==="free"?{x:a.position.x,z:a.position.z}:{x:d.x,z:d.z};h.update(X,q);let j=l.update(a,P.mode==="flight"&&P.flight?{x:P.flight.plane.x,z:P.flight.plane.z}:d),J=l.sun.shadow.camera,W=P.mode==="flight"?160:110;J.right!==W&&(J.left=J.bottom=-W,J.right=J.top=W,J.updateProjectionMatrix()),h.setNight(j.night),$&&$.setNight(j.night),P.mode!=="flight"&&(o.fog.near=450,o.fog.far=Math.max(h.radius+700,(e.far||0)*1.15));let yt=g.noiseAt(a.position.x,a.position.z,a.position.y);if(p.update(q,d,{throttle:tr.throttle,inFlight:P.mode==="flight",cityLevel:Math.min(1,T.cars.length/200)*(Math.abs(d.z)<6e3?1:.2),jet:P.mode==="flight"?.35:yt}),e.shadows&&(Ze%2===0||d.speed>25)&&(n.shadowMap.needsUpdate=!0),$?$.render(q):(n.setRenderTarget(null),n.clear(),l.render(n),n.clearDepth(),n.render(o,a)),P.photoCbs.length){let ct=Re.getContext("2d");ct.drawImage(n.domElement,0,0,320,180),ct.fillStyle="rgba(0,0,0,0.55)",ct.fillRect(0,158,320,22),ct.fillStyle="#ffeb3b",ct.font="bold 12px monospace",ct.fillText(`${Math.round(d.speed*3.6)} km/h  LIMIT 150  ${u.clockText()}  01KG`,8,173);let bt=Re.toDataURL("image/jpeg",.7);for(let kt of P.photoCbs)kt(bt);P.photoCbs.length=0}if(P.mode!=="menu"){Ze++,Ze%2===0&&u.drawSpeedo(d),e.minimap&&Ze%3===0&&u.drawMini(P.onFoot?Object.assign(et,{x:z.x,z:z.z,h:z.camYaw,speed:0}):d,T,f,g,G,(bt,kt)=>{bt.fillStyle="#ffc83a";for(let gt of y.near(Ni.x,Ni.z,180))bt.beginPath(),bt.arc(gt.x,gt.z,7/kt*u.dpr,0,7),bt.fill();if(b.active){bt.fillStyle="#ffd23a";for(let gt of b.active.cps.slice(b.active.i,b.active.i+3))bt.beginPath(),bt.arc(gt.x,gt.z,9/kt*u.dpr,0,7),bt.fill()}for(let gt of k.cars)bt.fillStyle=performance.now()%500<250?"#ff3030":"#3060ff",bt.beginPath(),bt.arc(gt.x,gt.z,7/kt*u.dpr,0,7),bt.fill()});let ct=ft("nitroBar");ct&&(ct.style.width=Math.round((d.nitro??1)*100)+"%",ct.parentElement.classList.toggle("boost",!!d.boosting)),u.setMoney(f.money),u.setClock(P.hour,e.mp&&G.status==="online"?G.players.size:null),P.mapOpen&&u.drawBigMap(d,f,g,G),P.tabOnline&&Ze%20===0&&zt(),ft("hudRoot").classList.toggle("flightmode",P.mode==="flight"||P.mode==="spot")}}Qs(),window.addEventListener("beforeunload",()=>{f.save(d),G.disconnect()})}function Rn(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Fa(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}ty().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
