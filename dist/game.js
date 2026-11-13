(()=>{var Kc="170";var sf=0,Dh=1,rf=2;var Ku=1,jc=2,ai=3,Pi=0,ln=1,we=2,$n=0,Is=1,Ge=2,kh=3,Uh=4,of=5,Ji=100,af=101,lf=102,cf=103,hf=104,uf=200,df=201,ff=202,pf=203,Al=204,Rl=205,mf=206,gf=207,xf=208,vf=209,yf=210,Mf=211,_f=212,bf=213,wf=214,Cl=0,Pl=1,Il=2,ks=3,zl=4,Ll=5,Dl=6,kl=7,ju=0,Ef=1,Sf=2,Ri=0,Qc=1,th=2,eh=3,Fr=4,Tf=5,nh=6,ih=7;var Qu=300,Us=301,Ns=302,Ul=303,Nl=304,na=306,Ar=1e3,ji=1001,Bl=1002,bn=1003,Af=1004;var Xr=1005;var Wn=1006,$a=1007;var Qi=1008;var ui=1009,td=1010,ed=1011,Rr=1012,sh=1013,ts=1014,Xn=1015,wn=1016,rh=1017,oh=1018,Bs=1020,nd=35902,id=1021,sd=1022,Bn=1023,rd=1024,od=1025,zs=1026,Hs=1027,ah=1028,lh=1029,ad=1030,ch=1031;var hh=1033,So=33776,To=33777,Ao=33778,Ro=33779,Hl=35840,Fl=35841,Ol=35842,Gl=35843,Vl=36196,Wl=37492,Xl=37496,$l=37808,ql=37809,Yl=37810,Zl=37811,Jl=37812,Kl=37813,jl=37814,Ql=37815,tc=37816,ec=37817,nc=37818,ic=37819,sc=37820,rc=37821,Co=36492,oc=36494,ac=36495,ld=36283,lc=36284,cc=36285,hc=36286;var Po=2300,uc=2301,qa=2302,Nh=2400,Bh=2401,Hh=2402;var Rf=3200,Cf=3201;var cd=0,Pf=1,Ti="",Me="srgb",js="srgb-linear",ia="linear",be="srgb";var hs=7680;var Fh=519,If=512,zf=513,Lf=514,hd=515,Df=516,kf=517,Uf=518,Nf=519,dc=35044,Qs=35048;var Oh="300 es",ci=2e3,Io=2001,Ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},on=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gh=1234567,br=Math.PI/180,Fs=180/Math.PI;function qn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(on[r&255]+on[r>>8&255]+on[r>>16&255]+on[r>>24&255]+"-"+on[t&255]+on[t>>8&255]+"-"+on[t>>16&15|64]+on[t>>24&255]+"-"+on[e&63|128]+on[e>>8&255]+"-"+on[e>>16&255]+on[e>>24&255]+on[n&255]+on[n>>8&255]+on[n>>16&255]+on[n>>24&255]).toLowerCase()}function Ye(r,t,e){return Math.max(t,Math.min(e,r))}function uh(r,t){return(r%t+t)%t}function Bf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Hf(r,t,e){return r!==t?(e-r)/(t-r):0}function wr(r,t,e){return(1-e)*r+e*t}function Ff(r,t,e,n){return wr(r,t,1-Math.exp(-e*n))}function Of(r,t=1){return t-Math.abs(uh(r,t*2)-t)}function Gf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Vf(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Wf(r,t){return r+Math.floor(Math.random()*(t-r+1))}function Xf(r,t){return r+Math.random()*(t-r)}function $f(r){return r*(.5-Math.random())}function qf(r){r!==void 0&&(Gh=r);let t=Gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yf(r){return r*br}function Zf(r){return r*Fs}function Jf(r){return(r&r-1)===0&&r!==0}function Kf(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function jf(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Qf(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Nn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ie={DEG2RAD:br,RAD2DEG:Fs,generateUUID:qn,clamp:Ye,euclideanModulo:uh,mapLinear:Bf,inverseLerp:Hf,lerp:wr,damp:Ff,pingpong:Of,smoothstep:Gf,smootherstep:Vf,randInt:Wf,randFloat:Xf,randFloatSpread:$f,seededRandom:qf,degToRad:Yf,radToDeg:Zf,isPowerOfTwo:Jf,ceilPowerOfTwo:Kf,floorPowerOfTwo:jf,setQuaternionFromProperEuler:Qf,normalize:Ae,denormalize:Nn},tt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ce=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],m=i[0],x=i[3],p=i[6],y=i[1],_=i[4],v=i[7],S=i[2],E=i[5],w=i[8];return s[0]=o*m+a*y+l*S,s[3]=o*x+a*_+l*E,s[6]=o*p+a*v+l*w,s[1]=c*m+h*y+u*S,s[4]=c*x+h*_+u*E,s[7]=c*p+h*v+u*w,s[2]=f*m+d*y+g*S,s[5]=f*x+d*_+g*E,s[8]=f*p+d*v+g*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=e*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=f*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ya=new ce;function ud(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function zo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function tp(){let r=zo("canvas");return r.style.display="block",r}var Vh={};function Mr(r){r in Vh||(Vh[r]=!0,console.warn(r))}function ep(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function np(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ip(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:js,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===be&&(r.r=hi(r.r),r.g=hi(r.g),r.b=hi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===be&&(r.r=Ls(r.r),r.g=Ls(r.g),r.b=Ls(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ti?ia:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ls(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Wh=[.64,.33,.3,.6,.15,.06],Xh=[.2126,.7152,.0722],$h=[.3127,.329],qh=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yh=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[js]:{primaries:Wh,whitePoint:$h,transfer:ia,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Xh,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Wh,whitePoint:$h,transfer:be,toXYZ:qh,fromXYZ:Yh,luminanceCoefficients:Xh,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var us,fc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{us===void 0&&(us=zo("canvas")),us.width=t.width,us.height=t.height;let n=us.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=us}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=zo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(hi(e[n]/255)*255):e[n]=hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},sp=0,Lo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=qn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Za(i[o].image)):s.push(Za(i[o]))}else s=Za(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Za(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?fc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var rp=0,vn=class r extends Ii{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ji,i=ji,s=Wn,o=Qi,a=Bn,l=ui,c=r.DEFAULT_ANISOTROPY,h=Ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=qn(),this.name="",this.source=new Lo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Qu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ar:t.x=t.x-Math.floor(t.x);break;case ji:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ar:t.y=t.y-Math.floor(t.y);break;case ji:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};vn.DEFAULT_IMAGE=null;vn.DEFAULT_MAPPING=Qu;vn.DEFAULT_ANISOTROPY=1;var Ce=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],m=l[2],x=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,S=(p+1)/2,E=(h+f)/4,w=(u+m)/4,A=(g+x)/4;return _>v&&_>S?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=w/n):v>S?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=A/i):S<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(S),n=w/s,i=A/s),this.set(n,i,s,e),this}let y=Math.sqrt((x-g)*(x-g)+(u-m)*(u-m)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(u-m)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},pc=class extends Ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new vn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Lo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},nn=class extends pc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Do=class extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var mc=class extends vn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=bn,this.minFilter=bn,this.wrapR=ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Be=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==f||c!==d||h!==g){let x=1-a,p=l*f+c*d+h*g+u*m,y=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let S=Math.sqrt(_),E=Math.atan2(S,p*y);x=Math.sin(x*E)/S,a=Math.sin(a*E)/S}let v=a*y;if(l=l*x+f*v,c=c*x+d*v,h=h*x+g*v,u=u*x+m*v,x===1-a){let S=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=S,c*=S,h*=S,u*=S}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*f,t[e+1]=l*g+h*f+c*u-a*d,t[e+2]=c*g+h*d+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Zh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Zh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ja.copy(this).projectOnVector(t),this.sub(Ja)}reflect(t){return this.sub(Ja.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ja=new I,Zh=new Be,di=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(t.matrixWorld),this.expandByPoint(Dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$r.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),$r.copy(n.boundingBox)),$r.applyMatrix4(t.matrixWorld),this.union($r)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Dn),Dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(cr),qr.subVectors(this.max,cr),ds.subVectors(t.a,cr),fs.subVectors(t.b,cr),ps.subVectors(t.c,cr),Mi.subVectors(fs,ds),_i.subVectors(ps,fs),Vi.subVectors(ds,ps);let e=[0,-Mi.z,Mi.y,0,-_i.z,_i.y,0,-Vi.z,Vi.y,Mi.z,0,-Mi.x,_i.z,0,-_i.x,Vi.z,0,-Vi.x,-Mi.y,Mi.x,0,-_i.y,_i.x,0,-Vi.y,Vi.x,0];return!Ka(e,ds,fs,ps,qr)||(e=[1,0,0,0,1,0,0,0,1],!Ka(e,ds,fs,ps,qr))?!1:(Yr.crossVectors(Mi,_i),e=[Yr.x,Yr.y,Yr.z],Ka(e,ds,fs,ps,qr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ni[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ni[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ni[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ni[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ni[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ni[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ni[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ni[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ni),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},ni=[new I,new I,new I,new I,new I,new I,new I,new I],Dn=new I,$r=new di,ds=new I,fs=new I,ps=new I,Mi=new I,_i=new I,Vi=new I,cr=new I,qr=new I,Yr=new I,Wi=new I;function Ka(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Wi.fromArray(r,s);let a=i.x*Math.abs(Wi.x)+i.y*Math.abs(Wi.y)+i.z*Math.abs(Wi.z),l=t.dot(Wi),c=e.dot(Wi),h=n.dot(Wi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var op=new di,hr=new I,ja=new I,fi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):op.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;hr.subVectors(t,this.center);let e=hr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(hr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ja.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(hr.copy(t.center).add(ja)),this.expandByPoint(hr.copy(t.center).sub(ja))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ii=new I,Qa=new I,Zr=new I,bi=new I,tl=new I,Jr=new I,el=new I,Cr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ii)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ii.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ii.copy(this.origin).addScaledVector(this.direction,e),ii.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Qa.copy(t).add(e).multiplyScalar(.5),Zr.copy(e).sub(t).normalize(),bi.copy(this.origin).sub(Qa);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Zr),a=bi.dot(this.direction),l=-bi.dot(Zr),c=bi.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let m=1/h;u*=m,f*=m,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Qa).addScaledVector(Zr,f),d}intersectSphere(t,e){ii.subVectors(t.center,this.origin);let n=ii.dot(this.direction),i=ii.dot(ii)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ii)!==null}intersectTriangle(t,e,n,i,s){tl.subVectors(e,t),Jr.subVectors(n,t),el.crossVectors(tl,Jr);let o=this.direction.dot(el),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bi.subVectors(this.origin,t);let l=a*this.direction.dot(Jr.crossVectors(bi,Jr));if(l<0)return null;let c=a*this.direction.dot(tl.cross(bi));if(c<0||l+c>o)return null;let h=-a*bi.dot(el);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ie=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,g,m,x){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,m,x)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,g,m,x){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=m,p[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ms.setFromMatrixColumn(t,0).length(),s=1/ms.setFromMatrixColumn(t,1).length(),o=1/ms.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=f-m*c,e[9]=-a*l,e[2]=m-f*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,g=c*h,m=c*u;e[0]=f+m*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=m+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,g=c*h,m=c*u;e[0]=f-m*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=m-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=f*c+m,e[1]=l*u,e[5]=m*c+f,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=f-m*u}else if(t.order==="XZY"){let f=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+m,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=m*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ap,t,lp)}lookAt(t,e,n){let i=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),wi.crossVectors(n,Mn),wi.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),wi.crossVectors(n,Mn)),wi.normalize(),Kr.crossVectors(Mn,wi),i[0]=wi.x,i[4]=Kr.x,i[8]=Mn.x,i[1]=wi.y,i[5]=Kr.y,i[9]=Mn.y,i[2]=wi.z,i[6]=Kr.z,i[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],m=n[6],x=n[10],p=n[14],y=n[3],_=n[7],v=n[11],S=n[15],E=i[0],w=i[4],A=i[8],M=i[12],b=i[1],T=i[5],z=i[9],k=i[13],N=i[2],H=i[6],B=i[10],X=i[14],O=i[3],$=i[7],Q=i[11],lt=i[15];return s[0]=o*E+a*b+l*N+c*O,s[4]=o*w+a*T+l*H+c*$,s[8]=o*A+a*z+l*B+c*Q,s[12]=o*M+a*k+l*X+c*lt,s[1]=h*E+u*b+f*N+d*O,s[5]=h*w+u*T+f*H+d*$,s[9]=h*A+u*z+f*B+d*Q,s[13]=h*M+u*k+f*X+d*lt,s[2]=g*E+m*b+x*N+p*O,s[6]=g*w+m*T+x*H+p*$,s[10]=g*A+m*z+x*B+p*Q,s[14]=g*M+m*k+x*X+p*lt,s[3]=y*E+_*b+v*N+S*O,s[7]=y*w+_*T+v*H+S*$,s[11]=y*A+_*z+v*B+S*Q,s[15]=y*M+_*k+v*X+S*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],m=t[7],x=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+m*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+x*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],m=t[13],x=t[14],p=t[15],y=u*x*c-m*f*c+m*l*d-a*x*d-u*l*p+a*f*p,_=g*f*c-h*x*c-g*l*d+o*x*d+h*l*p-o*f*p,v=h*m*c-g*u*c+g*a*d-o*m*d-h*a*p+o*u*p,S=g*u*l-h*m*l-g*a*f+o*m*f+h*a*x-o*u*x,E=e*y+n*_+i*v+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=y*w,t[1]=(m*f*s-u*x*s-m*i*d+n*x*d+u*i*p-n*f*p)*w,t[2]=(a*x*s-m*l*s+m*i*c-n*x*c-a*i*p+n*l*p)*w,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*w,t[4]=_*w,t[5]=(h*x*s-g*f*s+g*i*d-e*x*d-h*i*p+e*f*p)*w,t[6]=(g*l*s-o*x*s-g*i*c+e*x*c+o*i*p-e*l*p)*w,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*w,t[8]=v*w,t[9]=(g*u*s-h*m*s-g*n*d+e*m*d+h*n*p-e*u*p)*w,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*p+e*a*p)*w,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*w,t[12]=S*w,t[13]=(h*m*i-g*u*i+g*n*f-e*m*f-h*n*x+e*u*x)*w,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*x-e*a*x)*w,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,m=o*h,x=o*u,p=a*u,y=l*c,_=l*h,v=l*u,S=n.x,E=n.y,w=n.z;return i[0]=(1-(m+p))*S,i[1]=(d+v)*S,i[2]=(g-_)*S,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(f+p))*E,i[6]=(x+y)*E,i[7]=0,i[8]=(g+_)*w,i[9]=(x-y)*w,i[10]=(1-(f+m))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ms.set(i[0],i[1],i[2]).length(),o=ms.set(i[4],i[5],i[6]).length(),a=ms.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],kn.copy(this);let c=1/s,h=1/o,u=1/a;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=h,kn.elements[5]*=h,kn.elements[6]*=h,kn.elements[8]*=u,kn.elements[9]*=u,kn.elements[10]*=u,e.setFromRotationMatrix(kn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=ci){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,g;if(a===ci)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Io)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=ci){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,g,m;if(a===ci)g=(o+s)*u,m=-2*u;else if(a===Io)g=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ms=new I,kn=new ie,ap=new I(0,0,0),lp=new I(1,1,1),wi=new I,Kr=new I,Mn=new I,Jh=new ie,Kh=new Be,tn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Jh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Jh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};tn.DEFAULT_ORDER="XYZ";var ko=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},cp=0,jh=new I,gs=new Be,si=new ie,jr=new I,ur=new I,hp=new I,up=new Be,Qh=new I(1,0,0),tu=new I(0,1,0),eu=new I(0,0,1),nu={type:"added"},dp={type:"removed"},xs={type:"childadded",child:null},nl={type:"childremoved",child:null},He=class r extends Ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cp++}),this.uuid=qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new tn,n=new Be,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ie},normalMatrix:{value:new ce}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ko,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.multiply(gs),this}rotateOnWorldAxis(t,e){return gs.setFromAxisAngle(t,e),this.quaternion.premultiply(gs),this}rotateX(t){return this.rotateOnAxis(Qh,t)}rotateY(t){return this.rotateOnAxis(tu,t)}rotateZ(t){return this.rotateOnAxis(eu,t)}translateOnAxis(t,e){return jh.copy(t).applyQuaternion(this.quaternion),this.position.add(jh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qh,t)}translateY(t){return this.translateOnAxis(tu,t)}translateZ(t){return this.translateOnAxis(eu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(si.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ur.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?si.lookAt(ur,jr,this.up):si.lookAt(jr,ur,this.up),this.quaternion.setFromRotationMatrix(si),i&&(si.extractRotation(i.matrixWorld),gs.setFromRotationMatrix(si),this.quaternion.premultiply(gs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(nu),xs.child=t,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(dp),nl.child=t,this.dispatchEvent(nl),nl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),si.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),si.multiply(t.parent.matrixWorld)),t.applyMatrix4(si),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(nu),xs.child=t,this.dispatchEvent(xs),xs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,t,hp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ur,up,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};He.DEFAULT_UP=new I(0,1,0);He.DEFAULT_MATRIX_AUTO_UPDATE=!0;He.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new I,ri=new I,il=new I,oi=new I,vs=new I,ys=new I,iu=new I,sl=new I,rl=new I,ol=new I,al=new Ce,ll=new Ce,cl=new Ce,Ai=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Un.subVectors(t,e),i.cross(Un);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Un.subVectors(i,e),ri.subVectors(n,e),il.subVectors(t,e);let o=Un.dot(Un),a=Un.dot(ri),l=Un.dot(il),c=ri.dot(ri),h=ri.dot(il),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,oi)===null?!1:oi.x>=0&&oi.y>=0&&oi.x+oi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,oi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,oi.x),l.addScaledVector(o,oi.y),l.addScaledVector(a,oi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return al.setScalar(0),ll.setScalar(0),cl.setScalar(0),al.fromBufferAttribute(t,e),ll.fromBufferAttribute(t,n),cl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(al,s.x),o.addScaledVector(ll,s.y),o.addScaledVector(cl,s.z),o}static isFrontFacing(t,e,n,i){return Un.subVectors(n,e),ri.subVectors(t,e),Un.cross(ri).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Un.subVectors(this.c,this.b),ri.subVectors(this.a,this.b),Un.cross(ri).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;vs.subVectors(i,n),ys.subVectors(s,n),sl.subVectors(t,n);let l=vs.dot(sl),c=ys.dot(sl);if(l<=0&&c<=0)return e.copy(n);rl.subVectors(t,i);let h=vs.dot(rl),u=ys.dot(rl);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(vs,o);ol.subVectors(t,s);let d=vs.dot(ol),g=ys.dot(ol);if(g>=0&&d<=g)return e.copy(s);let m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ys,a);let x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return iu.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(iu,a);let p=1/(x+m+f);return o=m*p,a=f*p,e.copy(n).addScaledVector(vs,o).addScaledVector(ys,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ei={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function hl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=uh(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=hl(o,s,t+1/3),this.g=hl(o,s,t),this.b=hl(o,s,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=dd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=hi(t.r),this.g=hi(t.g),this.b=hi(t.b),this}copyLinearToSRGB(t){return this.r=Ls(t.r),this.g=Ls(t.g),this.b=Ls(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return me.fromWorkingColorSpace(an.copy(this),t),Math.round(Ye(an.r*255,0,255))*65536+Math.round(Ye(an.g*255,0,255))*256+Math.round(Ye(an.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(an.copy(this),e);let n=an.r,i=an.g,s=an.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(an.copy(this),e),t.r=an.r,t.g=an.g,t.b=an.b,t}getStyle(t=Me){me.fromWorkingColorSpace(an.copy(this),t);let e=an.r,n=an.g,i=an.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ei),this.setHSL(Ei.h+t,Ei.s+e,Ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ei),t.getHSL(Qr);let n=wr(Ei.h,Qr.h,e),i=wr(Ei.s,Qr.s,e),s=wr(Ei.l,Qr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},an=new wt;wt.NAMES=dd;var fp=0,Yn=class extends Ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:fp++}),this.uuid=qn(),this.name="",this.blending=Is,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Al,this.blendDst=Rl,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Al&&(n.blendSrc=this.blendSrc),this.blendDst!==Rl&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Fh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},fe=class extends Yn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.combine=ju,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var qe=new I,to=new tt,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dc,this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix3(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Nn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Nn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Nn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Nn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dc&&(t.usage=this.usage),t}};var Os=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Gs=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},pp=0,Rn=new ie,ul=new He,Ms=new I,_n=new di,dr=new di,Qe=new I,re=class r extends Ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=qn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ud(t)?Gs:Os)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ce().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Rn.makeRotationFromQuaternion(t),this.applyMatrix4(Rn),this}rotateX(t){return Rn.makeRotationX(t),this.applyMatrix4(Rn),this}rotateY(t){return Rn.makeRotationY(t),this.applyMatrix4(Rn),this}rotateZ(t){return Rn.makeRotationZ(t),this.applyMatrix4(Rn),this}translate(t,e,n){return Rn.makeTranslation(t,e,n),this.applyMatrix4(Rn),this}scale(t,e,n){return Rn.makeScale(t,e,n),this.applyMatrix4(Rn),this}lookAt(t){return ul.lookAt(t),ul.updateMatrix(),this.applyMatrix4(ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];_n.setFromBufferAttribute(s),this.morphTargetsRelative?(Qe.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Qe),Qe.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Qe)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];dr.setFromBufferAttribute(a),this.morphTargetsRelative?(Qe.addVectors(_n.min,dr.min),_n.expandByPoint(Qe),Qe.addVectors(_n.max,dr.max),_n.expandByPoint(Qe)):(_n.expandByPoint(dr.min),_n.expandByPoint(dr.max))}_n.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Qe.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Qe));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Qe.fromBufferAttribute(a,c),l&&(Ms.fromBufferAttribute(t,c),Qe.add(Ms)),i=Math.max(i,n.distanceToSquared(Qe))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new I,l[A]=new I;let c=new I,h=new I,u=new I,f=new tt,d=new tt,g=new tt,m=new I,x=new I;function p(A,M,b){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,b),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let T=1/(d.x*g.y-g.x*d.y);isFinite(T)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(T),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(T),a[A].add(m),a[M].add(m),a[b].add(m),l[A].add(x),l[M].add(x),l[b].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let A=0,M=y.length;A<M;++A){let b=y[A],T=b.start,z=b.count;for(let k=T,N=T+z;k<N;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let _=new I,v=new I,S=new I,E=new I;function w(A){S.fromBufferAttribute(i,A),E.copy(S);let M=a[A];_.copy(M),_.sub(S.multiplyScalar(S.dot(M))).normalize(),v.crossVectors(E,M);let T=v.dot(l[A])<0?-1:1;o.setXYZW(A,_.x,_.y,_.z,T)}for(let A=0,M=y.length;A<M;++A){let b=y[A],T=b.start,z=b.count;for(let k=T,N=T+z;k<N;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),m=t.getX(f+1),x=t.getX(f+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Qe.fromBufferAttribute(t,e),Qe.normalize(),t.setXYZ(e,Qe.x,Qe.y,Qe.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let p=0;p<h;p++)f[g++]=c[d++]}return new ge(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},su=new ie,Xi=new Cr,eo=new fi,ru=new I,no=new I,io=new I,so=new I,dl=new I,ro=new I,ou=new I,oo=new I,Y=class extends He{constructor(t=new re,e=new fe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){ro.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(dl.fromBufferAttribute(u,t),o?ro.addScaledVector(dl,h):ro.addScaledVector(dl.sub(e),h))}e.add(ro)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),eo.copy(n.boundingSphere),eo.applyMatrix4(s),Xi.copy(t.ray).recast(t.near),!(eo.containsPoint(Xi.origin)===!1&&(Xi.intersectSphere(eo,ru)===null||Xi.origin.distanceToSquared(ru)>(t.far-t.near)**2))&&(su.copy(s).invert(),Xi.copy(t.ray).applyMatrix4(su),!(n.boundingBox!==null&&Xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Xi)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=f.length;g<m;g++){let x=f[g],p=o[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,S=_;v<S;v+=3){let E=a.getX(v),w=a.getX(v+1),A=a.getX(v+2);i=ao(this,p,t,n,c,h,u,E,w,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){let y=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);i=ao(this,o,t,n,c,h,u,y,_,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=f.length;g<m;g++){let x=f[g],p=o[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,S=_;v<S;v+=3){let E=v,w=v+1,A=v+2;i=ao(this,p,t,n,c,h,u,E,w,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=g,p=m;x<p;x+=3){let y=x,_=x+1,v=x+2;i=ao(this,o,t,n,c,h,u,y,_,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function mp(r,t,e,n,i,s,o,a){let l;if(t.side===ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Pi,a),l===null)return null;oo.copy(a),oo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(oo);return c<e.near||c>e.far?null:{distance:c,point:oo.clone(),object:r}}function ao(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,no),r.getVertexPosition(l,io),r.getVertexPosition(c,so);let h=mp(r,t,e,n,no,io,so,ou);if(h){let u=new I;Ai.getBarycoord(ou,no,io,so,u),i&&(h.uv=Ai.getInterpolatedAttribute(i,a,l,c,u,new tt)),s&&(h.uv1=Ai.getInterpolatedAttribute(s,a,l,c,u,new tt)),o&&(h.normal=Ai.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};Ai.getNormal(no,io,so,f.normal),h.face=f,h.barycoord=u}return h}var Mt=class r extends re{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(m,x,p,y,_,v,S,E,w,A,M){let b=v/w,T=S/A,z=v/2,k=S/2,N=E/2,H=w+1,B=A+1,X=0,O=0,$=new I;for(let Q=0;Q<B;Q++){let lt=Q*T-k;for(let P=0;P<H;P++){let st=P*b-z;$[m]=st*y,$[x]=lt*_,$[p]=N,c.push($.x,$.y,$.z),$[m]=0,$[x]=0,$[p]=E>0?1:-1,h.push($.x,$.y,$.z),u.push(P/w),u.push(1-Q/A),X+=1}}for(let Q=0;Q<A;Q++)for(let lt=0;lt<w;lt++){let P=f+lt+H*Q,st=f+lt+H*(Q+1),F=f+(lt+1)+H*(Q+1),Z=f+(lt+1)+H*Q;l.push(P,st,Z),l.push(st,F,Z),O+=6}a.addGroup(d,O,M),d+=O,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Vs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function pn(r){let t={};for(let e=0;e<r.length;e++){let n=Vs(r[e]);for(let i in n)t[i]=n[i]}return t}function gp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function fd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var Kn={clone:Vs,merge:pn},xp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_e=class extends Yn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xp,this.fragmentShader=vp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vs(t.uniforms),this.uniformsGroups=gp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Uo=class extends He{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=ci}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Si=new I,au=new tt,lu=new tt,Ze=class extends Uo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Fs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(br*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(br*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Si.x,Si.y).multiplyScalar(-t/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Si.x,Si.y).multiplyScalar(-t/Si.z)}getViewSize(t,e){return this.getViewBounds(t,au,lu),e.subVectors(lu,au)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(br*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_s=-90,bs=1,gc=class extends He{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ze(_s,bs,t,e);i.layers=this.layers,this.add(i);let s=new Ze(_s,bs,t,e);s.layers=this.layers,this.add(s);let o=new Ze(_s,bs,t,e);o.layers=this.layers,this.add(o);let a=new Ze(_s,bs,t,e);a.layers=this.layers,this.add(a);let l=new Ze(_s,bs,t,e);l.layers=this.layers,this.add(l);let c=new Ze(_s,bs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===ci)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Io)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},No=class extends vn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},xc=class extends nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new No(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Wn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Mt(5,5,5),s=new _e({name:"CubemapFromEquirect",uniforms:Vs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:$n});s.uniforms.tEquirect.value=e;let o=new Y(i,s),a=e.minFilter;return e.minFilter===Qi&&(e.minFilter=Wn),new gc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},fl=new I,yp=new I,Mp=new ce,li=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=fl.subVectors(n,e).cross(yp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(fl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Mp.getNormalMatrix(t),i=this.coplanarPoint(fl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},$i=new fi,lo=new I,Pr=class{constructor(t=new li,e=new li,n=new li,i=new li,s=new li,o=new li){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ci){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],g=i[9],m=i[10],x=i[11],p=i[12],y=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,x-d,v-p).normalize(),n[1].setComponents(l+s,f+c,x+d,v+p).normalize(),n[2].setComponents(l+o,f+h,x+g,v+y).normalize(),n[3].setComponents(l-o,f-h,x-g,v-y).normalize(),n[4].setComponents(l-a,f-u,x-m,v-_).normalize(),e===ci)n[5].setComponents(l+a,f+u,x+m,v+_).normalize();else if(e===Io)n[5].setComponents(a,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),$i.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),$i.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere($i)}intersectsSprite(t){return $i.center.set(0,0,0),$i.radius=.7071067811865476,$i.applyMatrix4(t.matrixWorld),this.intersectsSphere($i)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(lo.x=i.normal.x>0?t.max.x:t.min.x,lo.y=i.normal.y>0?t.max.y:t.min.y,lo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function pd(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function _p(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],m=u[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++f,u[f]=m)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let m=u[d];r.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ee=class r extends re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],g=[],m=[],x=[];for(let p=0;p<h;p++){let y=p*f-o;for(let _=0;_<c;_++){let v=_*u-s;g.push(v,-y,0),m.push(0,0,1),x.push(_/a),x.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let _=y+c*p,v=y+c*(p+1),S=y+1+c*(p+1),E=y+1+c*p;d.push(_,v,E),d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},bp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wp=`#ifdef USE_ALPHAHASH
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
#endif`,Ep=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Cp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pp=`#ifdef USE_BATCHING
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
#endif`,Ip=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Up=`#ifdef USE_BUMPMAP
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Fp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Vp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,$p=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qp=`vec3 transformedNormal = objectNormal;
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
#endif`,Yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t0=`#ifdef USE_ENVMAP
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
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,s0=`#ifdef USE_ENVMAP
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
#endif`,r0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c0=`#ifdef USE_GRADIENTMAP
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
}`,h0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,f0=`uniform bool receiveShadow;
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
#endif`,p0=`#ifdef USE_ENVMAP
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
#endif`,m0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,x0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,y0=`PhysicalMaterial material;
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
#endif`,M0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,b0=`#if defined( RE_IndirectDiffuse )
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
#endif`,w0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,E0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,R0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,C0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,I0=`#if defined( USE_POINTS_UV )
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
#endif`,z0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,D0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,k0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,U0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`#ifdef USE_MORPHTARGETS
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
#endif`,B0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,H0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,F0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W0=`#ifdef USE_NORMALMAP
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
#endif`,X0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Y0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,j0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,om=`float getShadowMask() {
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
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lm=`#ifdef USE_SKINNING
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
#endif`,cm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hm=`#ifdef USE_SKINNING
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
#endif`,um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,dm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mm=`#ifdef USE_TRANSMISSION
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
#endif`,gm=`#ifdef USE_TRANSMISSION
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
#endif`,xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,_m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bm=`uniform sampler2D t2D;
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
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Em=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
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
}`,Rm=`#if DEPTH_PACKING == 3200
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
}`,Cm=`#define DISTANCE
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
}`,Pm=`#define DISTANCE
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
}`,Im=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,km=`#include <common>
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
}`,Um=`uniform vec3 diffuse;
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
}`,Nm=`#define LAMBERT
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
}`,Bm=`#define LAMBERT
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
}`,Hm=`#define MATCAP
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Gm=`#define NORMAL
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
}`,Vm=`#define PHONG
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
}`,Wm=`#define PHONG
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
}`,Xm=`#define STANDARD
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
}`,$m=`#define STANDARD
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
}`,qm=`#define TOON
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
}`,Ym=`#define TOON
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
}`,Zm=`uniform float size;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,Qm=`uniform float rotation;
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
}`,tg=`uniform vec3 diffuse;
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
}`,he={alphahash_fragment:bp,alphahash_pars_fragment:wp,alphamap_fragment:Ep,alphamap_pars_fragment:Sp,alphatest_fragment:Tp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Cp,batching_pars_vertex:Pp,batching_vertex:Ip,begin_vertex:zp,beginnormal_vertex:Lp,bsdfs:Dp,iridescence_fragment:kp,bumpmap_pars_fragment:Up,clipping_planes_fragment:Np,clipping_planes_pars_fragment:Bp,clipping_planes_pars_vertex:Hp,clipping_planes_vertex:Fp,color_fragment:Op,color_pars_fragment:Gp,color_pars_vertex:Vp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:$p,defaultnormal_vertex:qp,displacementmap_pars_vertex:Yp,displacementmap_vertex:Zp,emissivemap_fragment:Jp,emissivemap_pars_fragment:Kp,colorspace_fragment:jp,colorspace_pars_fragment:Qp,envmap_fragment:t0,envmap_common_pars_fragment:e0,envmap_pars_fragment:n0,envmap_pars_vertex:i0,envmap_physical_pars_fragment:p0,envmap_vertex:s0,fog_vertex:r0,fog_pars_vertex:o0,fog_fragment:a0,fog_pars_fragment:l0,gradientmap_pars_fragment:c0,lightmap_pars_fragment:h0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:d0,lights_pars_begin:f0,lights_toon_fragment:m0,lights_toon_pars_fragment:g0,lights_phong_fragment:x0,lights_phong_pars_fragment:v0,lights_physical_fragment:y0,lights_physical_pars_fragment:M0,lights_fragment_begin:_0,lights_fragment_maps:b0,lights_fragment_end:w0,logdepthbuf_fragment:E0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:A0,map_fragment:R0,map_pars_fragment:C0,map_particle_fragment:P0,map_particle_pars_fragment:I0,metalnessmap_fragment:z0,metalnessmap_pars_fragment:L0,morphinstance_vertex:D0,morphcolor_vertex:k0,morphnormal_vertex:U0,morphtarget_pars_vertex:N0,morphtarget_vertex:B0,normal_fragment_begin:H0,normal_fragment_maps:F0,normal_pars_fragment:O0,normal_pars_vertex:G0,normal_vertex:V0,normalmap_pars_fragment:W0,clearcoat_normal_fragment_begin:X0,clearcoat_normal_fragment_maps:$0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Y0,opaque_fragment:Z0,packing:J0,premultiplied_alpha_fragment:K0,project_vertex:j0,dithering_fragment:Q0,dithering_pars_fragment:tm,roughnessmap_fragment:em,roughnessmap_pars_fragment:nm,shadowmap_pars_fragment:im,shadowmap_pars_vertex:sm,shadowmap_vertex:rm,shadowmask_pars_fragment:om,skinbase_vertex:am,skinning_pars_vertex:lm,skinning_vertex:cm,skinnormal_vertex:hm,specularmap_fragment:um,specularmap_pars_fragment:dm,tonemapping_fragment:fm,tonemapping_pars_fragment:pm,transmission_fragment:mm,transmission_pars_fragment:gm,uv_pars_fragment:xm,uv_pars_vertex:vm,uv_vertex:ym,worldpos_vertex:Mm,background_vert:_m,background_frag:bm,backgroundCube_vert:wm,backgroundCube_frag:Em,cube_vert:Sm,cube_frag:Tm,depth_vert:Am,depth_frag:Rm,distanceRGBA_vert:Cm,distanceRGBA_frag:Pm,equirect_vert:Im,equirect_frag:zm,linedashed_vert:Lm,linedashed_frag:Dm,meshbasic_vert:km,meshbasic_frag:Um,meshlambert_vert:Nm,meshlambert_frag:Bm,meshmatcap_vert:Hm,meshmatcap_frag:Fm,meshnormal_vert:Om,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:Wm,meshphysical_vert:Xm,meshphysical_frag:$m,meshtoon_vert:qm,meshtoon_frag:Ym,points_vert:Zm,points_frag:Jm,shadow_vert:Km,shadow_frag:jm,sprite_vert:Qm,sprite_frag:tg},Rt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},Vn={basic:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:pn([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:pn([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:pn([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new wt(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:pn([Rt.points,Rt.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:pn([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:pn([Rt.common,Rt.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:pn([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:pn([Rt.sprite,Rt.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:pn([Rt.common,Rt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:pn([Rt.lights,Rt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Vn.physical={uniforms:pn([Vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};var co={r:0,b:0,g:0},qi=new tn,eg=new ie;function ng(r,t,e,n,i,s,o){let a=new wt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function m(y){let _=!1,v=g(y);v===null?p(a,l):v&&v.isColor&&(p(v,1),_=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(y,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===na)?(h===void 0&&(h=new Y(new Mt(1,1,1),new _e({name:"BackgroundCubeMaterial",uniforms:Vs(Vn.backgroundCube.uniforms),vertexShader:Vn.backgroundCube.vertexShader,fragmentShader:Vn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),qi.copy(_.backgroundRotation),qi.x*=-1,qi.y*=-1,qi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(qi.y*=-1,qi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(qi)),h.material.toneMapped=me.getTransfer(v.colorSpace)!==be,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Y(new Ee(2,2),new _e({name:"BackgroundMaterial",uniforms:Vs(Vn.background.uniforms),vertexShader:Vn.background.vertexShader,fragmentShader:Vn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==be,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,_){y.getRGB(co,fd(r)),n.buffers.color.setClear(co.r,co.g,co.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(a,l)},render:m,addToRenderList:x}}function ig(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(b,T,z,k,N){let H=!1,B=u(k,z,T);s!==B&&(s=B,c(s.object)),H=d(b,k,z,N),H&&g(b,k,z,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,v(b,T,z,k),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,T,z){let k=z.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let H=N[T.id];H===void 0&&(H={},N[T.id]=H);let B=H[k];return B===void 0&&(B=f(l()),H[k]=B),B}function f(b){let T=[],z=[],k=[];for(let N=0;N<e;N++)T[N]=0,z[N]=0,k[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:T,enabledAttributes:z,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,T,z,k){let N=s.attributes,H=T.attributes,B=0,X=z.getAttributes();for(let O in X)if(X[O].location>=0){let Q=N[O],lt=H[O];if(lt===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),Q===void 0||Q.attribute!==lt||lt&&Q.data!==lt.data)return!0;B++}return s.attributesNum!==B||s.index!==k}function g(b,T,z,k){let N={},H=T.attributes,B=0,X=z.getAttributes();for(let O in X)if(X[O].location>=0){let Q=H[O];Q===void 0&&(O==="instanceMatrix"&&b.instanceMatrix&&(Q=b.instanceMatrix),O==="instanceColor"&&b.instanceColor&&(Q=b.instanceColor));let lt={};lt.attribute=Q,Q&&Q.data&&(lt.data=Q.data),N[O]=lt,B++}s.attributes=N,s.attributesNum=B,s.index=k}function m(){let b=s.newAttributes;for(let T=0,z=b.length;T<z;T++)b[T]=0}function x(b){p(b,0)}function p(b,T){let z=s.newAttributes,k=s.enabledAttributes,N=s.attributeDivisors;z[b]=1,k[b]===0&&(r.enableVertexAttribArray(b),k[b]=1),N[b]!==T&&(r.vertexAttribDivisor(b,T),N[b]=T)}function y(){let b=s.newAttributes,T=s.enabledAttributes;for(let z=0,k=T.length;z<k;z++)T[z]!==b[z]&&(r.disableVertexAttribArray(z),T[z]=0)}function _(b,T,z,k,N,H,B){B===!0?r.vertexAttribIPointer(b,T,z,N,H):r.vertexAttribPointer(b,T,z,k,N,H)}function v(b,T,z,k){m();let N=k.attributes,H=z.getAttributes(),B=T.defaultAttributeValues;for(let X in H){let O=H[X];if(O.location>=0){let $=N[X];if($===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),$!==void 0){let Q=$.normalized,lt=$.itemSize,P=t.get($);if(P===void 0)continue;let st=P.buffer,F=P.type,Z=P.bytesPerElement,at=F===r.INT||F===r.UNSIGNED_INT||$.gpuType===sh;if($.isInterleavedBufferAttribute){let rt=$.data,pt=rt.stride,Tt=$.offset;if(rt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<O.locationSize;Bt++)p(O.location+Bt,rt.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Bt=0;Bt<O.locationSize;Bt++)x(O.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,st);for(let Bt=0;Bt<O.locationSize;Bt++)_(O.location+Bt,lt/O.locationSize,F,Q,pt*Z,(Tt+lt/O.locationSize*Bt)*Z,at)}else{if($.isInstancedBufferAttribute){for(let rt=0;rt<O.locationSize;rt++)p(O.location+rt,$.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let rt=0;rt<O.locationSize;rt++)x(O.location+rt);r.bindBuffer(r.ARRAY_BUFFER,st);for(let rt=0;rt<O.locationSize;rt++)_(O.location+rt,lt/O.locationSize,F,Q,lt*Z,lt/O.locationSize*rt*Z,at)}}else if(B!==void 0){let Q=B[X];if(Q!==void 0)switch(Q.length){case 2:r.vertexAttrib2fv(O.location,Q);break;case 3:r.vertexAttrib3fv(O.location,Q);break;case 4:r.vertexAttrib4fv(O.location,Q);break;default:r.vertexAttrib1fv(O.location,Q)}}}}y()}function S(){A();for(let b in n){let T=n[b];for(let z in T){let k=T[z];for(let N in k)h(k[N].object),delete k[N];delete T[z]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let T=n[b.id];for(let z in T){let k=T[z];for(let N in k)h(k[N].object),delete k[N];delete T[z]}delete n[b.id]}function w(b){for(let T in n){let z=n[T];if(z[b.id]===void 0)continue;let k=z[b.id];for(let N in k)h(k[N].object),delete k[N];delete z[b.id]}}function A(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:M,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function sg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m]*f[m];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function rg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Bn&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let A=w===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ui&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Xn&&!A)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),S=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:p,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:S,maxSamples:E}}function og(r){let t=this,e=null,n=0,i=!1,s=!1,o=new li,a=new ce,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{let y=s?0:n,_=y*4,v=p.clippingState||null;l.value=v,v=h(g,f,_,d);for(let S=0;S!==_;++S)v[S]=e[S];p.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let m=u!==null?u.length:0,x=null;if(m!==0){if(x=l.value,g!==!0||x===null){let p=d+m*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<p)&&(x=new Float32Array(p));for(let _=0,v=d;_!==m;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}function ag(r){let t=new WeakMap;function e(o,a){return a===Ul?o.mapping=Us:a===Nl&&(o.mapping=Ns),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ul||a===Nl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new xc(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ws=class extends Uo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Cs=4,cu=[.125,.215,.35,.446,.526,.582],Ki=20,pl=new Ws,hu=new wt,ml=null,gl=0,xl=0,vl=!1,Zi=(1+Math.sqrt(5))/2,ws=1/Zi,uu=[new I(-Zi,ws,0),new I(Zi,ws,0),new I(-ws,0,Zi),new I(ws,0,Zi),new I(0,Zi,-ws),new I(0,Zi,ws),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Xs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ml,gl,xl),this._renderer.xr.enabled=vl,t.scissorTest=!1,ho(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ml=this._renderer.getRenderTarget(),gl=this._renderer.getActiveCubeFace(),xl=this._renderer.getActiveMipmapLevel(),vl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:wn,format:Bn,colorSpace:js,depthBuffer:!1},i=du(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=du(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=lg(s)),this._blurMaterial=cg(s,t,e)}return i}_compileMaterial(t){let e=new Y(this._lodPlanes[0],t);this._renderer.compile(e,pl)}_sceneToCubeUV(t,e,n,i){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(hu),h.toneMapping=Ri,h.autoClear=!1;let d=new fe({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new Y(new Mt,d),m=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,m=!0):(d.color.copy(hu),m=!0);for(let p=0;p<6;p++){let y=p%3;y===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):y===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let _=this._cubeSize;ho(i,y*_,p>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Us||t.mapping===Ns;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fu());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Y(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;ho(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,pl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=uu[(i-s-1)%uu.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Y(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Ki-1),m=s/g,x=isFinite(s)?1+Math.floor(h*m):Ki;x>Ki&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${Ki}`);let p=[],y=0;for(let w=0;w<Ki;++w){let A=w/m,M=Math.exp(-A*A/2);p.push(M),w===0?y+=M:w<x&&(y+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=x,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;let v=this._sizeLods[i],S=3*v*(i>_-Cs?i-_+Cs:0),E=4*(this._cubeSize-v);ho(e,S,E,3*v,2*v),l.setRenderTarget(e),l.render(u,pl)}};function lg(r){let t=[],e=[],n=[],i=r,s=r-Cs+1+cu.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Cs?l=cu[o-r+Cs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,x=2,p=1,y=new Float32Array(m*g*d),_=new Float32Array(x*g*d),v=new Float32Array(p*g*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,A=E>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];y.set(M,m*g*E),_.set(f,x*g*E);let b=[E,E,E,E,E,E];v.set(b,p*g*E)}let S=new re;S.setAttribute("position",new ge(y,m)),S.setAttribute("uv",new ge(_,x)),S.setAttribute("faceIndex",new ge(v,p)),t.push(S),i>Cs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function du(r,t,e){let n=new nn(r,t,e);return n.texture.mapping=na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ho(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function cg(r,t,e){let n=new Float32Array(Ki),i=new I(0,1,0);return new _e({name:"SphericalGaussianBlur",defines:{n:Ki,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:dh(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function fu(){return new _e({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

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
		`,blending:$n,depthTest:!1,depthWrite:!1})}function pu(){return new _e({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$n,depthTest:!1,depthWrite:!1})}function dh(){return`

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
	`}function hg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Ul||l===Nl,h=l===Us||l===Ns;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Xs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Xs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ug(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Mr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function dg(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let m=f.morphAttributes[g];for(let x=0,p=m.length;x<p;x++)t.remove(m[x])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let m=d[g];for(let x=0,p=m.length;x<p;x++)t.update(m[x],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,g=u.attributes.position,m=0;if(d!==null){let y=d.array;m=d.version;for(let _=0,v=y.length;_<v;_+=3){let S=y[_+0],E=y[_+1],w=y[_+2];f.push(S,E,E,w,w,S)}}else if(g!==void 0){let y=g.array;m=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let S=_+0,E=_+1,w=_+2;f.push(S,E,E,w,w,S)}}else return;let x=new(ud(f)?Gs:Os)(f,1);x.version=m;let p=s.get(u);p&&t.remove(p),s.set(u,x)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function fg(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),e.update(d,n,g))}function h(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let x=0;for(let p=0;p<g;p++)x+=d[p];e.update(x,n,1)}function u(f,d,g,m){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],m[p]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,m,0,g);let p=0;for(let y=0;y<g;y++)p+=d[y]*m[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function pg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function mg(r,t,e){let n=new WeakMap,i=new Ce;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let M=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let v=a.attributes.position.count*_,S=1;v>t.maxTextureSize&&(S=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*S*4*u),w=new Do(E,v,S,u);w.type=Xn,w.needsUpdate=!0;let A=_*4;for(let b=0;b<u;b++){let T=x[b],z=p[b],k=y[b],N=v*S*4*b;for(let H=0;H<T.count;H++){let B=H*A;d===!0&&(i.fromBufferAttribute(T,H),E[N+B+0]=i.x,E[N+B+1]=i.y,E[N+B+2]=i.z,E[N+B+3]=0),g===!0&&(i.fromBufferAttribute(z,H),E[N+B+4]=i.x,E[N+B+5]=i.y,E[N+B+6]=i.z,E[N+B+7]=0),m===!0&&(i.fromBufferAttribute(k,H),E[N+B+8]=i.x,E[N+B+9]=i.y,E[N+B+10]=i.z,E[N+B+11]=k.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new tt(v,S)},n.set(a,f),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function gg(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Bo=class extends vn{constructor(t,e,n,i,s,o,a,l,c,h=zs){if(h!==zs&&h!==Hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===zs&&(n=ts),n===void 0&&h===Hs&&(n=Bs),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:bn,this.minFilter=l!==void 0?l:bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},md=new vn,mu=new Bo(1,1),gd=new Do,xd=new mc,vd=new No,gu=[],xu=[],vu=new Float32Array(16),yu=new Float32Array(9),Mu=new Float32Array(4);function tr(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=gu[i];if(s===void 0&&(s=new Float32Array(i),gu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function sa(r,t){let e=xu[t];e===void 0&&(e=new Int32Array(t),xu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function xg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function yg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Je(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function Mg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function _g(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;Mu.set(n),r.uniformMatrix2fv(this.addr,!1,Mu),Ke(e,n)}}function bg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;yu.set(n),r.uniformMatrix3fv(this.addr,!1,yu),Ke(e,n)}}function wg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(Je(e,n))return;vu.set(n),r.uniformMatrix4fv(this.addr,!1,vu),Ke(e,n)}}function Eg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Sg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function Tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function Ag(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function Rg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Cg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Je(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function Pg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Je(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function Ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Je(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function zg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(mu.compareFunction=hd,s=mu):s=md,e.setTexture2D(t||s,i)}function Lg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||xd,i)}function Dg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||vd,i)}function kg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gd,i)}function Ug(r){switch(r){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return _g;case 35675:return bg;case 35676:return wg;case 5124:case 35670:return Eg;case 35667:case 35671:return Sg;case 35668:case 35672:return Tg;case 35669:case 35673:return Ag;case 5125:return Rg;case 36294:return Cg;case 36295:return Pg;case 36296:return Ig;case 35678:case 36198:case 36298:case 36306:case 35682:return zg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Dg;case 36289:case 36303:case 36311:case 36292:return kg}}function Ng(r,t){r.uniform1fv(this.addr,t)}function Bg(r,t){let e=tr(t,this.size,2);r.uniform2fv(this.addr,e)}function Hg(r,t){let e=tr(t,this.size,3);r.uniform3fv(this.addr,e)}function Fg(r,t){let e=tr(t,this.size,4);r.uniform4fv(this.addr,e)}function Og(r,t){let e=tr(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Gg(r,t){let e=tr(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Vg(r,t){let e=tr(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Wg(r,t){r.uniform1iv(this.addr,t)}function Xg(r,t){r.uniform2iv(this.addr,t)}function $g(r,t){r.uniform3iv(this.addr,t)}function qg(r,t){r.uniform4iv(this.addr,t)}function Yg(r,t){r.uniform1uiv(this.addr,t)}function Zg(r,t){r.uniform2uiv(this.addr,t)}function Jg(r,t){r.uniform3uiv(this.addr,t)}function Kg(r,t){r.uniform4uiv(this.addr,t)}function jg(r,t,e){let n=this.cache,i=t.length,s=sa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||md,s[o])}function Qg(r,t,e){let n=this.cache,i=t.length,s=sa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||xd,s[o])}function tx(r,t,e){let n=this.cache,i=t.length,s=sa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||vd,s[o])}function ex(r,t,e){let n=this.cache,i=t.length,s=sa(e,i);Je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gd,s[o])}function nx(r){switch(r){case 5126:return Ng;case 35664:return Bg;case 35665:return Hg;case 35666:return Fg;case 35674:return Og;case 35675:return Gg;case 35676:return Vg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return $g;case 35669:case 35673:return qg;case 5125:return Yg;case 36294:return Zg;case 36295:return Jg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return tx;case 36289:case 36303:case 36311:case 36292:return ex}}var vc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Ug(e.type)}},yc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=nx(e.type)}},Mc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},yl=/(\w+)(\])?(\[|\.)?/g;function _u(r,t){r.seq.push(t),r.map[t.id]=t}function ix(r,t,e){let n=r.name,i=n.length;for(yl.lastIndex=0;;){let s=yl.exec(n),o=yl.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){_u(e,c===void 0?new vc(a,r,t):new yc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Mc(a),_u(e,u)),e=u}}}var Ds=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);ix(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function bu(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var sx=37297,rx=0;function ox(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var wu=new ce;function ax(r){me._getMatrix(wu,me.workingColorSpace,r);let t=`mat3( ${wu.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case ia:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Eu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ox(r.getShaderSource(t),o)}else return i}function lx(r,t){let e=ax(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function cx(r,t){let e;switch(t){case Qc:e="Linear";break;case th:e="Reinhard";break;case eh:e="Cineon";break;case Fr:e="ACESFilmic";break;case nh:e="AgX";break;case ih:e="Neutral";break;case Tf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uo=new I;function hx(){me.getLuminanceCoefficients(uo);let r=uo.x.toFixed(4),t=uo.y.toFixed(4),e=uo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ux(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function dx(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function fx(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function _r(r){return r!==""}function Su(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Tu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var px=/^[ \t]*#include +<([\w\d./]+)>/gm;function _c(r){return r.replace(px,gx)}var mx=new Map;function gx(r,t){let e=he[t];if(e===void 0){let n=mx.get(t);if(n!==void 0)e=he[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _c(e)}var xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Au(r){return r.replace(xx,vx)}function vx(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Ru(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function yx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Ku?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===jc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(t="SHADOWMAP_TYPE_VSM"),t}function Mx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function _x(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function bx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case ju:t="ENVMAP_BLENDING_MULTIPLY";break;case Ef:t="ENVMAP_BLENDING_MIX";break;case Sf:t="ENVMAP_BLENDING_ADD";break}return t}function wx(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ex(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=yx(e),c=Mx(e),h=_x(e),u=bx(e),f=wx(e),d=ux(e),g=dx(s),m=i.createProgram(),x,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),x.length>0&&(x+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(x=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ri?"#define TONE_MAPPING":"",e.toneMapping!==Ri?he.tonemapping_pars_fragment:"",e.toneMapping!==Ri?cx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,lx("linearToOutputTexel",e.outputColorSpace),hx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),o=_c(o),o=Su(o,e),o=Tu(o,e),a=_c(a),a=Su(a,e),a=Tu(a,e),o=Au(o),a=Au(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,p=["#define varying in",e.glslVersion===Oh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Oh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=y+x+o,v=y+p+a,S=bu(i,i.VERTEX_SHADER,_),E=bu(i,i.FRAGMENT_SHADER,v);i.attachShader(m,S),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function w(T){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(m).trim(),k=i.getShaderInfoLog(S).trim(),N=i.getShaderInfoLog(E).trim(),H=!0,B=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(H=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,S,E);else{let X=Eu(i,S,"vertex"),O=Eu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+T.name+`
Material Type: `+T.type+`

Program Info Log: `+z+`
`+X+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||N==="")&&(B=!1);B&&(T.diagnostics={runnable:H,programLog:z,vertexShader:{log:k,prefix:x},fragmentShader:{log:N,prefix:p}})}i.deleteShader(S),i.deleteShader(E),A=new Ds(i,m),M=fx(i,m)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(m,sx)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=S,this.fragmentShader=E,this}var Sx=0,bc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new wc(t),e.set(t,n)),n}},wc=class{constructor(t){this.id=Sx++,this.code=t,this.usedTimes=0}};function Tx(r,t,e,n,i,s,o){let a=new ko,l=new bc,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,b,T,z,k){let N=z.fog,H=k.geometry,B=M.isMeshStandardMaterial?z.environment:null,X=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),O=X&&X.mapping===na?X.image.height:null,$=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let Q=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,lt=Q!==void 0?Q.length:0,P=0;H.morphAttributes.position!==void 0&&(P=1),H.morphAttributes.normal!==void 0&&(P=2),H.morphAttributes.color!==void 0&&(P=3);let st,F,Z,at;if($){let le=Vn[$];st=le.vertexShader,F=le.fragmentShader}else st=M.vertexShader,F=M.fragmentShader,l.update(M),Z=l.getVertexShaderID(M),at=l.getFragmentShaderID(M);let rt=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Tt=k.isInstancedMesh===!0,Bt=k.isBatchedMesh===!0,Yt=!!M.map,it=!!M.matcap,mt=!!X,U=!!M.aoMap,Wt=!!M.lightMap,gt=!!M.bumpMap,kt=!!M.normalMap,_t=!!M.displacementMap,Zt=!!M.emissiveMap,Lt=!!M.metalnessMap,D=!!M.roughnessMap,R=M.anisotropy>0,J=M.clearcoat>0,ot=M.dispersion>0,ct=M.iridescence>0,nt=M.sheen>0,Ut=M.transmission>0,bt=R&&!!M.anisotropyMap,St=J&&!!M.clearcoatMap,oe=J&&!!M.clearcoatNormalMap,xt=J&&!!M.clearcoatRoughnessMap,Dt=ct&&!!M.iridescenceMap,Kt=ct&&!!M.iridescenceThicknessMap,Qt=nt&&!!M.sheenColorMap,Nt=nt&&!!M.sheenRoughnessMap,ue=!!M.specularMap,ae=!!M.specularColorMap,Te=!!M.specularIntensityMap,V=Ut&&!!M.transmissionMap,Ct=Ut&&!!M.thicknessMap,et=!!M.gradientMap,ut=!!M.alphaMap,It=M.alphaTest>0,Pt=!!M.alphaHash,se=!!M.extensions,ke=Ri;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ke=r.toneMapping);let $e={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:st,fragmentShader:F,defines:M.defines,customVertexShaderID:Z,customFragmentShaderID:at,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Bt,batchingColor:Bt&&k._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&k.instanceColor!==null,instancingMorph:Tt&&k.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:js,alphaToCoverage:!!M.alphaToCoverage,map:Yt,matcap:it,envMap:mt,envMapMode:mt&&X.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:Wt,bumpMap:gt,normalMap:kt,displacementMap:f&&_t,emissiveMap:Zt,normalMapObjectSpace:kt&&M.normalMapType===Pf,normalMapTangentSpace:kt&&M.normalMapType===cd,metalnessMap:Lt,roughnessMap:D,anisotropy:R,anisotropyMap:bt,clearcoat:J,clearcoatMap:St,clearcoatNormalMap:oe,clearcoatRoughnessMap:xt,dispersion:ot,iridescence:ct,iridescenceMap:Dt,iridescenceThicknessMap:Kt,sheen:nt,sheenColorMap:Qt,sheenRoughnessMap:Nt,specularMap:ue,specularColorMap:ae,specularIntensityMap:Te,transmission:Ut,transmissionMap:V,thicknessMap:Ct,gradientMap:et,opaque:M.transparent===!1&&M.blending===Is&&M.alphaToCoverage===!1,alphaMap:ut,alphaTest:It,alphaHash:Pt,combine:M.combine,mapUv:Yt&&m(M.map.channel),aoMapUv:U&&m(M.aoMap.channel),lightMapUv:Wt&&m(M.lightMap.channel),bumpMapUv:gt&&m(M.bumpMap.channel),normalMapUv:kt&&m(M.normalMap.channel),displacementMapUv:_t&&m(M.displacementMap.channel),emissiveMapUv:Zt&&m(M.emissiveMap.channel),metalnessMapUv:Lt&&m(M.metalnessMap.channel),roughnessMapUv:D&&m(M.roughnessMap.channel),anisotropyMapUv:bt&&m(M.anisotropyMap.channel),clearcoatMapUv:St&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:xt&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Dt&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Kt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:Qt&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&m(M.sheenRoughnessMap.channel),specularMapUv:ue&&m(M.specularMap.channel),specularColorMapUv:ae&&m(M.specularColorMap.channel),specularIntensityMapUv:Te&&m(M.specularIntensityMap.channel),transmissionMapUv:V&&m(M.transmissionMap.channel),thicknessMapUv:Ct&&m(M.thicknessMap.channel),alphaMapUv:ut&&m(M.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(kt||R),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!H.attributes.uv&&(Yt||ut),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:P,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&T.length>0,shadowMapType:r.shadowMap.type,toneMapping:ke,decodeVideoTexture:Yt&&M.map.isVideoTexture===!0&&me.getTransfer(M.map.colorSpace)===be,decodeVideoTextureEmissive:Zt&&M.emissiveMap.isVideoTexture===!0&&me.getTransfer(M.emissiveMap.colorSpace)===be,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===we,flipSided:M.side===ln,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:se&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&M.extensions.multiDraw===!0||Bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return $e.vertexUv1s=c.has(1),$e.vertexUv2s=c.has(2),$e.vertexUv3s=c.has(3),c.clear(),$e}function p(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let T in M.defines)b.push(T),b.push(M.defines[T]);return M.isRawShaderMaterial===!1&&(y(b,M),_(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let b=g[M.type],T;if(b){let z=Vn[b];T=Kn.clone(z.uniforms)}else T=M.uniforms;return T}function S(M,b){let T;for(let z=0,k=h.length;z<k;z++){let N=h[z];if(N.cacheKey===b){T=N,++T.usedTimes;break}}return T===void 0&&(T=new Ex(r,b,M,s),h.push(T)),T}function E(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function w(M){l.remove(M)}function A(){l.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:v,acquireProgram:S,releaseProgram:E,releaseShaderCache:w,programs:h,dispose:A}}function Ax(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Rx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Cu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Pu(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,g,m,x){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},r[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=m,p.group=x),t++,p}function a(u,f,d,g,m,x){let p=o(u,f,d,g,m,x);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(u,f,d,g,m,x){let p=o(u,f,d,g,m,x);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,f){e.length>1&&e.sort(u||Rx),n.length>1&&n.sort(f||Cu),i.length>1&&i.sort(f||Cu)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Cx(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Pu,r.set(n,[o])):i>=s.length?(o=new Pu,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Px(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new wt};break;case"SpotLight":e={position:new I,direction:new I,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Ix(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var zx=0;function Lx(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Dx(r){let t=new Px,e=Ix(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new ie,o=new ie;function a(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,m=0,x=0,p=0,y=0,_=0,v=0,S=0,E=0,w=0;c.sort(Lx);for(let M=0,b=c.length;M<b;M++){let T=c[M],z=T.color,k=T.intensity,N=T.distance,H=T.shadow&&T.shadow.map?T.shadow.map.texture:null;if(T.isAmbientLight)h+=z.r*k,u+=z.g*k,f+=z.b*k;else if(T.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(T.sh.coefficients[B],k);w++}else if(T.isDirectionalLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),T.castShadow){let X=T.shadow,O=e.get(T);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=T.shadow.matrix,y++}n.directional[d]=B,d++}else if(T.isSpotLight){let B=t.get(T);B.position.setFromMatrixPosition(T.matrixWorld),B.color.copy(z).multiplyScalar(k),B.distance=N,B.coneCos=Math.cos(T.angle),B.penumbraCos=Math.cos(T.angle*(1-T.penumbra)),B.decay=T.decay,n.spot[m]=B;let X=T.shadow;if(T.map&&(n.spotLightMap[S]=T.map,S++,X.updateMatrices(T),T.castShadow&&E++),n.spotLightMatrix[m]=X.matrix,T.castShadow){let O=e.get(T);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,n.spotShadow[m]=O,n.spotShadowMap[m]=H,v++}m++}else if(T.isRectAreaLight){let B=t.get(T);B.color.copy(z).multiplyScalar(k),B.halfWidth.set(T.width*.5,0,0),B.halfHeight.set(0,T.height*.5,0),n.rectArea[x]=B,x++}else if(T.isPointLight){let B=t.get(T);if(B.color.copy(T.color).multiplyScalar(T.intensity),B.distance=T.distance,B.decay=T.decay,T.castShadow){let X=T.shadow,O=e.get(T);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=T.shadow.matrix,_++}n.point[g]=B,g++}else if(T.isHemisphereLight){let B=t.get(T);B.skyColor.copy(T.color).multiplyScalar(k),B.groundColor.copy(T.groundColor).multiplyScalar(k),n.hemi[p]=B,p++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==m||A.rectAreaLength!==x||A.hemiLength!==p||A.numDirectionalShadows!==y||A.numPointShadows!==_||A.numSpotShadows!==v||A.numSpotMaps!==S||A.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+S-E,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,A.directionalLength=d,A.pointLength=g,A.spotLength=m,A.rectAreaLength=x,A.hemiLength=p,A.numDirectionalShadows=y,A.numPointShadows=_,A.numSpotShadows=v,A.numSpotMaps=S,A.numLightProbes=w,n.version=zx++)}function l(c,h){let u=0,f=0,d=0,g=0,m=0,x=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let _=c[p];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),d++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),f++}else if(_.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function Iu(r){let t=new Dx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function kx(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Iu(r),t.set(i,[a])):s>=o.length?(a=new Iu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Ec=class extends Yn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Rf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Sc=class extends Yn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ux=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nx=`uniform sampler2D shadow_pass;
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
}`;function Bx(r,t,e){let n=new Pr,i=new tt,s=new tt,o=new Ce,a=new Ec({depthPacking:Cf}),l=new Sc,c={},h=e.maxTextureSize,u={[Pi]:ln,[ln]:Pi,[we]:we},f=new _e({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Ux,fragmentShader:Nx}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new re;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Y(g,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ku;let p=this.type;this.render=function(E,w,A){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;let M=r.getRenderTarget(),b=r.getActiveCubeFace(),T=r.getActiveMipmapLevel(),z=r.state;z.setBlending($n),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let k=p!==ai&&this.type===ai,N=p===ai&&this.type!==ai;for(let H=0,B=E.length;H<B;H++){let X=E[H],O=X.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let $=O.getFrameExtents();if(i.multiply($),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/$.x),i.x=s.x*$.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/$.y),i.y=s.y*$.y,O.mapSize.y=s.y)),O.map===null||k===!0||N===!0){let lt=this.type!==ai?{minFilter:bn,magFilter:bn}:{};O.map!==null&&O.map.dispose(),O.map=new nn(i.x,i.y,lt),O.map.texture.name=X.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let Q=O.getViewportCount();for(let lt=0;lt<Q;lt++){let P=O.getViewport(lt);o.set(s.x*P.x,s.y*P.y,s.x*P.z,s.y*P.w),z.viewport(o),O.updateMatrices(X,lt),n=O.getFrustum(),v(w,A,O.camera,X,this.type)}O.isPointLightShadow!==!0&&this.type===ai&&y(O,A),O.needsUpdate=!1}p=this.type,x.needsUpdate=!1,r.setRenderTarget(M,b,T)};function y(E,w){let A=t.update(m);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new nn(i.x,i.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,A,f,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,A,d,m,null)}function _(E,w,A,M){let b=null,T=A.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(T!==void 0)b=T;else if(b=A.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){let z=b.uuid,k=w.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let H=N[k];H===void 0&&(H=b.clone(),N[k]=H,w.addEventListener("dispose",S)),b=H}if(b.visible=w.visible,b.wireframe=w.wireframe,M===ai?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:u[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,A.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let z=r.properties.get(b);z.light=A}return b}function v(E,w,A,M,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===ai)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,E.matrixWorld);let k=t.update(E),N=E.material;if(Array.isArray(N)){let H=k.groups;for(let B=0,X=H.length;B<X;B++){let O=H[B],$=N[O.materialIndex];if($&&$.visible){let Q=_(E,$,M,b);E.onBeforeShadow(r,E,w,A,k,Q,O),r.renderBufferDirect(A,null,k,Q,E,O),E.onAfterShadow(r,E,w,A,k,Q,O)}}}else if(N.visible){let H=_(E,N,M,b);E.onBeforeShadow(r,E,w,A,k,H,null),r.renderBufferDirect(A,null,k,H,E,null),E.onAfterShadow(r,E,w,A,k,H,null)}}let z=E.children;for(let k=0,N=z.length;k<N;k++)v(z[k],w,A,M,b)}function S(E){E.target.removeEventListener("dispose",S);for(let A in c){let M=c[A],b=E.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Hx={[Cl]:Pl,[Il]:Dl,[zl]:kl,[ks]:Ll,[Pl]:Cl,[Dl]:Il,[kl]:zl,[Ll]:ks};function Fx(r,t){function e(){let V=!1,Ct=new Ce,et=null,ut=new Ce(0,0,0,0);return{setMask:function(It){et!==It&&!V&&(r.colorMask(It,It,It,It),et=It)},setLocked:function(It){V=It},setClear:function(It,Pt,se,ke,$e){$e===!0&&(It*=ke,Pt*=ke,se*=ke),Ct.set(It,Pt,se,ke),ut.equals(Ct)===!1&&(r.clearColor(It,Pt,se,ke),ut.copy(Ct))},reset:function(){V=!1,et=null,ut.set(-1,0,0,0)}}}function n(){let V=!1,Ct=!1,et=null,ut=null,It=null;return{setReversed:function(Pt){if(Ct!==Pt){let se=t.get("EXT_clip_control");Ct?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT);let ke=It;It=null,this.setClear(ke)}Ct=Pt},getReversed:function(){return Ct},setTest:function(Pt){Pt?rt(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(Pt){et!==Pt&&!V&&(r.depthMask(Pt),et=Pt)},setFunc:function(Pt){if(Ct&&(Pt=Hx[Pt]),ut!==Pt){switch(Pt){case Cl:r.depthFunc(r.NEVER);break;case Pl:r.depthFunc(r.ALWAYS);break;case Il:r.depthFunc(r.LESS);break;case ks:r.depthFunc(r.LEQUAL);break;case zl:r.depthFunc(r.EQUAL);break;case Ll:r.depthFunc(r.GEQUAL);break;case Dl:r.depthFunc(r.GREATER);break;case kl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ut=Pt}},setLocked:function(Pt){V=Pt},setClear:function(Pt){It!==Pt&&(Ct&&(Pt=1-Pt),r.clearDepth(Pt),It=Pt)},reset:function(){V=!1,et=null,ut=null,It=null,Ct=!1}}}function i(){let V=!1,Ct=null,et=null,ut=null,It=null,Pt=null,se=null,ke=null,$e=null;return{setTest:function(le){V||(le?rt(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(le){Ct!==le&&!V&&(r.stencilMask(le),Ct=le)},setFunc:function(le,rn,xn){(et!==le||ut!==rn||It!==xn)&&(r.stencilFunc(le,rn,xn),et=le,ut=rn,It=xn)},setOp:function(le,rn,xn){(Pt!==le||se!==rn||ke!==xn)&&(r.stencilOp(le,rn,xn),Pt=le,se=rn,ke=xn)},setLocked:function(le){V=le},setClear:function(le){$e!==le&&(r.clearStencil(le),$e=le)},reset:function(){V=!1,Ct=null,et=null,ut=null,It=null,Pt=null,se=null,ke=null,$e=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,S=null,E=null,w=new wt(0,0,0),A=0,M=!1,b=null,T=null,z=null,k=null,N=null,H=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=X>=2);let $=null,Q={},lt=r.getParameter(r.SCISSOR_BOX),P=r.getParameter(r.VIEWPORT),st=new Ce().fromArray(lt),F=new Ce().fromArray(P);function Z(V,Ct,et,ut){let It=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(V,Pt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<et;se++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Ct,0,r.RGBA,1,1,ut,0,r.RGBA,r.UNSIGNED_BYTE,It):r.texImage2D(Ct+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,It);return Pt}let at={};at[r.TEXTURE_2D]=Z(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=Z(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=Z(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=Z(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(r.DEPTH_TEST),o.setFunc(ks),gt(!1),kt(Dh),rt(r.CULL_FACE),U($n);function rt(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function pt(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function Tt(V,Ct){return u[V]!==Ct?(r.bindFramebuffer(V,Ct),u[V]=Ct,V===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Ct),V===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Bt(V,Ct){let et=d,ut=!1;if(V){et=f.get(Ct),et===void 0&&(et=[],f.set(Ct,et));let It=V.textures;if(et.length!==It.length||et[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,se=It.length;Pt<se;Pt++)et[Pt]=r.COLOR_ATTACHMENT0+Pt;et.length=It.length,ut=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,ut=!0);ut&&r.drawBuffers(et)}function Yt(V){return g!==V?(r.useProgram(V),g=V,!0):!1}let it={[Ji]:r.FUNC_ADD,[af]:r.FUNC_SUBTRACT,[lf]:r.FUNC_REVERSE_SUBTRACT};it[cf]=r.MIN,it[hf]=r.MAX;let mt={[uf]:r.ZERO,[df]:r.ONE,[ff]:r.SRC_COLOR,[Al]:r.SRC_ALPHA,[yf]:r.SRC_ALPHA_SATURATE,[xf]:r.DST_COLOR,[mf]:r.DST_ALPHA,[pf]:r.ONE_MINUS_SRC_COLOR,[Rl]:r.ONE_MINUS_SRC_ALPHA,[vf]:r.ONE_MINUS_DST_COLOR,[gf]:r.ONE_MINUS_DST_ALPHA,[Mf]:r.CONSTANT_COLOR,[_f]:r.ONE_MINUS_CONSTANT_COLOR,[bf]:r.CONSTANT_ALPHA,[wf]:r.ONE_MINUS_CONSTANT_ALPHA};function U(V,Ct,et,ut,It,Pt,se,ke,$e,le){if(V===$n){m===!0&&(pt(r.BLEND),m=!1);return}if(m===!1&&(rt(r.BLEND),m=!0),V!==of){if(V!==x||le!==M){if((p!==Ji||v!==Ji)&&(r.blendEquation(r.FUNC_ADD),p=Ji,v=Ji),le)switch(V){case Is:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ge:r.blendFunc(r.ONE,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Is:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Ge:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Uh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}y=null,_=null,S=null,E=null,w.set(0,0,0),A=0,x=V,M=le}return}It=It||Ct,Pt=Pt||et,se=se||ut,(Ct!==p||It!==v)&&(r.blendEquationSeparate(it[Ct],it[It]),p=Ct,v=It),(et!==y||ut!==_||Pt!==S||se!==E)&&(r.blendFuncSeparate(mt[et],mt[ut],mt[Pt],mt[se]),y=et,_=ut,S=Pt,E=se),(ke.equals(w)===!1||$e!==A)&&(r.blendColor(ke.r,ke.g,ke.b,$e),w.copy(ke),A=$e),x=V,M=!1}function Wt(V,Ct){V.side===we?pt(r.CULL_FACE):rt(r.CULL_FACE);let et=V.side===ln;Ct&&(et=!et),gt(et),V.blending===Is&&V.transparent===!1?U($n):U(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);let ut=V.stencilWrite;a.setTest(ut),ut&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Zt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(V){b!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),b=V)}function kt(V){V!==sf?(rt(r.CULL_FACE),V!==T&&(V===Dh?r.cullFace(r.BACK):V===rf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),T=V}function _t(V){V!==z&&(B&&r.lineWidth(V),z=V)}function Zt(V,Ct,et){V?(rt(r.POLYGON_OFFSET_FILL),(k!==Ct||N!==et)&&(r.polygonOffset(Ct,et),k=Ct,N=et)):pt(r.POLYGON_OFFSET_FILL)}function Lt(V){V?rt(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function D(V){V===void 0&&(V=r.TEXTURE0+H-1),$!==V&&(r.activeTexture(V),$=V)}function R(V,Ct,et){et===void 0&&($===null?et=r.TEXTURE0+H-1:et=$);let ut=Q[et];ut===void 0&&(ut={type:void 0,texture:void 0},Q[et]=ut),(ut.type!==V||ut.texture!==Ct)&&($!==et&&(r.activeTexture(et),$=et),r.bindTexture(V,Ct||at[V]),ut.type=V,ut.texture=Ct)}function J(){let V=Q[$];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function ot(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function nt(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ut(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function bt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function oe(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Qt(V){st.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),st.copy(V))}function Nt(V){F.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),F.copy(V))}function ue(V,Ct){let et=c.get(Ct);et===void 0&&(et=new WeakMap,c.set(Ct,et));let ut=et.get(V);ut===void 0&&(ut=r.getUniformBlockIndex(Ct,V.name),et.set(V,ut))}function ae(V,Ct){let ut=c.get(Ct).get(V);l.get(Ct)!==ut&&(r.uniformBlockBinding(Ct,ut,V.__bindingPointIndex),l.set(Ct,ut))}function Te(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},$=null,Q={},u={},f=new WeakMap,d=[],g=null,m=!1,x=null,p=null,y=null,_=null,v=null,S=null,E=null,w=new wt(0,0,0),A=0,M=!1,b=null,T=null,z=null,k=null,N=null,st.set(0,0,r.canvas.width,r.canvas.height),F.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:pt,bindFramebuffer:Tt,drawBuffers:Bt,useProgram:Yt,setBlending:U,setMaterial:Wt,setFlipSided:gt,setCullFace:kt,setLineWidth:_t,setPolygonOffset:Zt,setScissorTest:Lt,activeTexture:D,bindTexture:R,unbindTexture:J,compressedTexImage2D:ot,compressedTexImage3D:ct,texImage2D:Dt,texImage3D:Kt,updateUBOMapping:ue,uniformBlockBinding:ae,texStorage2D:oe,texStorage3D:xt,texSubImage2D:nt,texSubImage3D:Ut,compressedTexSubImage2D:bt,compressedTexSubImage3D:St,scissor:Qt,viewport:Nt,reset:Te}}function zu(r,t,e,n){let i=Ox(n);switch(e){case id:return r*t;case rd:return r*t;case od:return r*t*2;case ah:return r*t/i.components*i.byteLength;case lh:return r*t/i.components*i.byteLength;case ad:return r*t*2/i.components*i.byteLength;case ch:return r*t*2/i.components*i.byteLength;case sd:return r*t*3/i.components*i.byteLength;case Bn:return r*t*4/i.components*i.byteLength;case hh:return r*t*4/i.components*i.byteLength;case So:case To:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ao:case Ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fl:case Gl:return Math.max(r,16)*Math.max(t,8)/4;case Hl:case Ol:return Math.max(r,8)*Math.max(t,8)/2;case Vl:case Wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Xl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Kl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case jl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case nc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ic:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Co:case oc:case ac:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ld:case lc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case cc:case hc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ox(r){switch(r){case ui:case td:return{byteLength:1,components:1};case Rr:case ed:case wn:return{byteLength:2,components:1};case rh:case oh:return{byteLength:2,components:4};case ts:case sh:case Xn:return{byteLength:4,components:1};case nd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Gx(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,R){return d?new OffscreenCanvas(D,R):zo("canvas")}function m(D,R,J){let ot=1,ct=Lt(D);if((ct.width>J||ct.height>J)&&(ot=J/Math.max(ct.width,ct.height)),ot<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let nt=Math.floor(ot*ct.width),Ut=Math.floor(ot*ct.height);u===void 0&&(u=g(nt,Ut));let bt=R?g(nt,Ut):u;return bt.width=nt,bt.height=Ut,bt.getContext("2d").drawImage(D,0,0,nt,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+nt+"x"+Ut+")."),bt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),D;return D}function x(D){return D.generateMipmaps}function p(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(D,R,J,ot,ct=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let nt=R;if(R===r.RED&&(J===r.FLOAT&&(nt=r.R32F),J===r.HALF_FLOAT&&(nt=r.R16F),J===r.UNSIGNED_BYTE&&(nt=r.R8)),R===r.RED_INTEGER&&(J===r.UNSIGNED_BYTE&&(nt=r.R8UI),J===r.UNSIGNED_SHORT&&(nt=r.R16UI),J===r.UNSIGNED_INT&&(nt=r.R32UI),J===r.BYTE&&(nt=r.R8I),J===r.SHORT&&(nt=r.R16I),J===r.INT&&(nt=r.R32I)),R===r.RG&&(J===r.FLOAT&&(nt=r.RG32F),J===r.HALF_FLOAT&&(nt=r.RG16F),J===r.UNSIGNED_BYTE&&(nt=r.RG8)),R===r.RG_INTEGER&&(J===r.UNSIGNED_BYTE&&(nt=r.RG8UI),J===r.UNSIGNED_SHORT&&(nt=r.RG16UI),J===r.UNSIGNED_INT&&(nt=r.RG32UI),J===r.BYTE&&(nt=r.RG8I),J===r.SHORT&&(nt=r.RG16I),J===r.INT&&(nt=r.RG32I)),R===r.RGB_INTEGER&&(J===r.UNSIGNED_BYTE&&(nt=r.RGB8UI),J===r.UNSIGNED_SHORT&&(nt=r.RGB16UI),J===r.UNSIGNED_INT&&(nt=r.RGB32UI),J===r.BYTE&&(nt=r.RGB8I),J===r.SHORT&&(nt=r.RGB16I),J===r.INT&&(nt=r.RGB32I)),R===r.RGBA_INTEGER&&(J===r.UNSIGNED_BYTE&&(nt=r.RGBA8UI),J===r.UNSIGNED_SHORT&&(nt=r.RGBA16UI),J===r.UNSIGNED_INT&&(nt=r.RGBA32UI),J===r.BYTE&&(nt=r.RGBA8I),J===r.SHORT&&(nt=r.RGBA16I),J===r.INT&&(nt=r.RGBA32I)),R===r.RGB&&J===r.UNSIGNED_INT_5_9_9_9_REV&&(nt=r.RGB9_E5),R===r.RGBA){let Ut=ct?ia:me.getTransfer(ot);J===r.FLOAT&&(nt=r.RGBA32F),J===r.HALF_FLOAT&&(nt=r.RGBA16F),J===r.UNSIGNED_BYTE&&(nt=Ut===be?r.SRGB8_ALPHA8:r.RGBA8),J===r.UNSIGNED_SHORT_4_4_4_4&&(nt=r.RGBA4),J===r.UNSIGNED_SHORT_5_5_5_1&&(nt=r.RGB5_A1)}return(nt===r.R16F||nt===r.R32F||nt===r.RG16F||nt===r.RG32F||nt===r.RGBA16F||nt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function v(D,R){let J;return D?R===null||R===ts||R===Bs?J=r.DEPTH24_STENCIL8:R===Xn?J=r.DEPTH32F_STENCIL8:R===Rr&&(J=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ts||R===Bs?J=r.DEPTH_COMPONENT24:R===Xn?J=r.DEPTH_COMPONENT32F:R===Rr&&(J=r.DEPTH_COMPONENT16),J}function S(D,R){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==bn&&D.minFilter!==Wn?Math.log2(Math.max(R.width,R.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?R.mipmaps.length:1}function E(D){let R=D.target;R.removeEventListener("dispose",E),A(R),R.isVideoTexture&&h.delete(R)}function w(D){let R=D.target;R.removeEventListener("dispose",w),b(R)}function A(D){let R=n.get(D);if(R.__webglInit===void 0)return;let J=D.source,ot=f.get(J);if(ot){let ct=ot[R.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&M(D),Object.keys(ot).length===0&&f.delete(J)}n.remove(D)}function M(D){let R=n.get(D);r.deleteTexture(R.__webglTexture);let J=D.source,ot=f.get(J);delete ot[R.__cacheKey],o.memory.textures--}function b(D){let R=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ot=0;ot<6;ot++){if(Array.isArray(R.__webglFramebuffer[ot]))for(let ct=0;ct<R.__webglFramebuffer[ot].length;ct++)r.deleteFramebuffer(R.__webglFramebuffer[ot][ct]);else r.deleteFramebuffer(R.__webglFramebuffer[ot]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[ot])}else{if(Array.isArray(R.__webglFramebuffer))for(let ot=0;ot<R.__webglFramebuffer.length;ot++)r.deleteFramebuffer(R.__webglFramebuffer[ot]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ot=0;ot<R.__webglColorRenderbuffer.length;ot++)R.__webglColorRenderbuffer[ot]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[ot]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let J=D.textures;for(let ot=0,ct=J.length;ot<ct;ot++){let nt=n.get(J[ot]);nt.__webglTexture&&(r.deleteTexture(nt.__webglTexture),o.memory.textures--),n.remove(J[ot])}n.remove(D)}let T=0;function z(){T=0}function k(){let D=T;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),T+=1,D}function N(D){let R=[];return R.push(D.wrapS),R.push(D.wrapT),R.push(D.wrapR||0),R.push(D.magFilter),R.push(D.minFilter),R.push(D.anisotropy),R.push(D.internalFormat),R.push(D.format),R.push(D.type),R.push(D.generateMipmaps),R.push(D.premultiplyAlpha),R.push(D.flipY),R.push(D.unpackAlignment),R.push(D.colorSpace),R.join()}function H(D,R){let J=n.get(D);if(D.isVideoTexture&&_t(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){let ot=D.image;if(ot===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ot.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(J,D,R);return}}e.bindTexture(r.TEXTURE_2D,J.__webglTexture,r.TEXTURE0+R)}function B(D,R){let J=n.get(D);if(D.version>0&&J.__version!==D.version){F(J,D,R);return}e.bindTexture(r.TEXTURE_2D_ARRAY,J.__webglTexture,r.TEXTURE0+R)}function X(D,R){let J=n.get(D);if(D.version>0&&J.__version!==D.version){F(J,D,R);return}e.bindTexture(r.TEXTURE_3D,J.__webglTexture,r.TEXTURE0+R)}function O(D,R){let J=n.get(D);if(D.version>0&&J.__version!==D.version){Z(J,D,R);return}e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture,r.TEXTURE0+R)}let $={[Ar]:r.REPEAT,[ji]:r.CLAMP_TO_EDGE,[Bl]:r.MIRRORED_REPEAT},Q={[bn]:r.NEAREST,[Af]:r.NEAREST_MIPMAP_NEAREST,[Xr]:r.NEAREST_MIPMAP_LINEAR,[Wn]:r.LINEAR,[$a]:r.LINEAR_MIPMAP_NEAREST,[Qi]:r.LINEAR_MIPMAP_LINEAR},lt={[If]:r.NEVER,[Nf]:r.ALWAYS,[zf]:r.LESS,[hd]:r.LEQUAL,[Lf]:r.EQUAL,[Uf]:r.GEQUAL,[Df]:r.GREATER,[kf]:r.NOTEQUAL};function P(D,R){if(R.type===Xn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Wn||R.magFilter===$a||R.magFilter===Xr||R.magFilter===Qi||R.minFilter===Wn||R.minFilter===$a||R.minFilter===Xr||R.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,$[R.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,$[R.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,$[R.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Q[R.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Q[R.minFilter]),R.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,lt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===bn||R.minFilter!==Xr&&R.minFilter!==Qi||R.type===Xn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let J=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function st(D,R){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,R.addEventListener("dispose",E));let ot=R.source,ct=f.get(ot);ct===void 0&&(ct={},f.set(ot,ct));let nt=N(R);if(nt!==D.__cacheKey){ct[nt]===void 0&&(ct[nt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,J=!0),ct[nt].usedTimes++;let Ut=ct[D.__cacheKey];Ut!==void 0&&(ct[D.__cacheKey].usedTimes--,Ut.usedTimes===0&&M(R)),D.__cacheKey=nt,D.__webglTexture=ct[nt].texture}return J}function F(D,R,J){let ot=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ot=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ot=r.TEXTURE_3D);let ct=st(D,R),nt=R.source;e.bindTexture(ot,D.__webglTexture,r.TEXTURE0+J);let Ut=n.get(nt);if(nt.version!==Ut.__version||ct===!0){e.activeTexture(r.TEXTURE0+J);let bt=me.getPrimaries(me.workingColorSpace),St=R.colorSpace===Ti?null:me.getPrimaries(R.colorSpace),oe=R.colorSpace===Ti||bt===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let xt=m(R.image,!1,i.maxTextureSize);xt=Zt(R,xt);let Dt=s.convert(R.format,R.colorSpace),Kt=s.convert(R.type),Qt=_(R.internalFormat,Dt,Kt,R.colorSpace,R.isVideoTexture);P(ot,R);let Nt,ue=R.mipmaps,ae=R.isVideoTexture!==!0,Te=Ut.__version===void 0||ct===!0,V=nt.dataReady,Ct=S(R,xt);if(R.isDepthTexture)Qt=v(R.format===Hs,R.type),Te&&(ae?e.texStorage2D(r.TEXTURE_2D,1,Qt,xt.width,xt.height):e.texImage2D(r.TEXTURE_2D,0,Qt,xt.width,xt.height,0,Dt,Kt,null));else if(R.isDataTexture)if(ue.length>0){ae&&Te&&e.texStorage2D(r.TEXTURE_2D,Ct,Qt,ue[0].width,ue[0].height);for(let et=0,ut=ue.length;et<ut;et++)Nt=ue[et],ae?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Nt.width,Nt.height,Dt,Kt,Nt.data):e.texImage2D(r.TEXTURE_2D,et,Qt,Nt.width,Nt.height,0,Dt,Kt,Nt.data);R.generateMipmaps=!1}else ae?(Te&&e.texStorage2D(r.TEXTURE_2D,Ct,Qt,xt.width,xt.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,xt.width,xt.height,Dt,Kt,xt.data)):e.texImage2D(r.TEXTURE_2D,0,Qt,xt.width,xt.height,0,Dt,Kt,xt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ae&&Te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Qt,ue[0].width,ue[0].height,xt.depth);for(let et=0,ut=ue.length;et<ut;et++)if(Nt=ue[et],R.format!==Bn)if(Dt!==null)if(ae){if(V)if(R.layerUpdates.size>0){let It=zu(Nt.width,Nt.height,R.format,R.type);for(let Pt of R.layerUpdates){let se=Nt.data.subarray(Pt*It/Nt.data.BYTES_PER_ELEMENT,(Pt+1)*It/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Pt,Nt.width,Nt.height,1,Dt,se)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,Nt.width,Nt.height,xt.depth,Dt,Nt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,Qt,Nt.width,Nt.height,xt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ae?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,Nt.width,Nt.height,xt.depth,Dt,Kt,Nt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,Qt,Nt.width,Nt.height,xt.depth,0,Dt,Kt,Nt.data)}else{ae&&Te&&e.texStorage2D(r.TEXTURE_2D,Ct,Qt,ue[0].width,ue[0].height);for(let et=0,ut=ue.length;et<ut;et++)Nt=ue[et],R.format!==Bn?Dt!==null?ae?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,Nt.width,Nt.height,Dt,Nt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,Qt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ae?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Nt.width,Nt.height,Dt,Kt,Nt.data):e.texImage2D(r.TEXTURE_2D,et,Qt,Nt.width,Nt.height,0,Dt,Kt,Nt.data)}else if(R.isDataArrayTexture)if(ae){if(Te&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Ct,Qt,xt.width,xt.height,xt.depth),V)if(R.layerUpdates.size>0){let et=zu(xt.width,xt.height,R.format,R.type);for(let ut of R.layerUpdates){let It=xt.data.subarray(ut*et/xt.data.BYTES_PER_ELEMENT,(ut+1)*et/xt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ut,xt.width,xt.height,1,Dt,Kt,It)}R.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xt.width,xt.height,xt.depth,Dt,Kt,xt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Qt,xt.width,xt.height,xt.depth,0,Dt,Kt,xt.data);else if(R.isData3DTexture)ae?(Te&&e.texStorage3D(r.TEXTURE_3D,Ct,Qt,xt.width,xt.height,xt.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xt.width,xt.height,xt.depth,Dt,Kt,xt.data)):e.texImage3D(r.TEXTURE_3D,0,Qt,xt.width,xt.height,xt.depth,0,Dt,Kt,xt.data);else if(R.isFramebufferTexture){if(Te)if(ae)e.texStorage2D(r.TEXTURE_2D,Ct,Qt,xt.width,xt.height);else{let et=xt.width,ut=xt.height;for(let It=0;It<Ct;It++)e.texImage2D(r.TEXTURE_2D,It,Qt,et,ut,0,Dt,Kt,null),et>>=1,ut>>=1}}else if(ue.length>0){if(ae&&Te){let et=Lt(ue[0]);e.texStorage2D(r.TEXTURE_2D,Ct,Qt,et.width,et.height)}for(let et=0,ut=ue.length;et<ut;et++)Nt=ue[et],ae?V&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Dt,Kt,Nt):e.texImage2D(r.TEXTURE_2D,et,Qt,Dt,Kt,Nt);R.generateMipmaps=!1}else if(ae){if(Te){let et=Lt(xt);e.texStorage2D(r.TEXTURE_2D,Ct,Qt,et.width,et.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Dt,Kt,xt)}else e.texImage2D(r.TEXTURE_2D,0,Qt,Dt,Kt,xt);x(R)&&p(ot),Ut.__version=nt.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function Z(D,R,J){if(R.image.length!==6)return;let ot=st(D,R),ct=R.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+J);let nt=n.get(ct);if(ct.version!==nt.__version||ot===!0){e.activeTexture(r.TEXTURE0+J);let Ut=me.getPrimaries(me.workingColorSpace),bt=R.colorSpace===Ti?null:me.getPrimaries(R.colorSpace),St=R.colorSpace===Ti||Ut===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let oe=R.isCompressedTexture||R.image[0].isCompressedTexture,xt=R.image[0]&&R.image[0].isDataTexture,Dt=[];for(let ut=0;ut<6;ut++)!oe&&!xt?Dt[ut]=m(R.image[ut],!0,i.maxCubemapSize):Dt[ut]=xt?R.image[ut].image:R.image[ut],Dt[ut]=Zt(R,Dt[ut]);let Kt=Dt[0],Qt=s.convert(R.format,R.colorSpace),Nt=s.convert(R.type),ue=_(R.internalFormat,Qt,Nt,R.colorSpace),ae=R.isVideoTexture!==!0,Te=nt.__version===void 0||ot===!0,V=ct.dataReady,Ct=S(R,Kt);P(r.TEXTURE_CUBE_MAP,R);let et;if(oe){ae&&Te&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ue,Kt.width,Kt.height);for(let ut=0;ut<6;ut++){et=Dt[ut].mipmaps;for(let It=0;It<et.length;It++){let Pt=et[It];R.format!==Bn?Qt!==null?ae?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,Pt.width,Pt.height,Qt,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ue,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ae?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,0,0,Pt.width,Pt.height,Qt,Nt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It,ue,Pt.width,Pt.height,0,Qt,Nt,Pt.data)}}}else{if(et=R.mipmaps,ae&&Te){et.length>0&&Ct++;let ut=Lt(Dt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Ct,ue,ut.width,ut.height)}for(let ut=0;ut<6;ut++)if(xt){ae?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Dt[ut].width,Dt[ut].height,Qt,Nt,Dt[ut].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ue,Dt[ut].width,Dt[ut].height,0,Qt,Nt,Dt[ut].data);for(let It=0;It<et.length;It++){let se=et[It].image[ut].image;ae?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,se.width,se.height,Qt,Nt,se.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ue,se.width,se.height,0,Qt,Nt,se.data)}}else{ae?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,0,0,Qt,Nt,Dt[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0,ue,Qt,Nt,Dt[ut]);for(let It=0;It<et.length;It++){let Pt=et[It];ae?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,0,0,Qt,Nt,Pt.image[ut]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,It+1,ue,Qt,Nt,Pt.image[ut])}}}x(R)&&p(r.TEXTURE_CUBE_MAP),nt.__version=ct.version,R.onUpdate&&R.onUpdate(R)}D.__version=R.version}function at(D,R,J,ot,ct,nt){let Ut=s.convert(J.format,J.colorSpace),bt=s.convert(J.type),St=_(J.internalFormat,Ut,bt,J.colorSpace),oe=n.get(R),xt=n.get(J);if(xt.__renderTarget=R,!oe.__hasExternalTextures){let Dt=Math.max(1,R.width>>nt),Kt=Math.max(1,R.height>>nt);ct===r.TEXTURE_3D||ct===r.TEXTURE_2D_ARRAY?e.texImage3D(ct,nt,St,Dt,Kt,R.depth,0,Ut,bt,null):e.texImage2D(ct,nt,St,Dt,Kt,0,Ut,bt,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),kt(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ot,ct,xt.__webglTexture,0,gt(R)):(ct===r.TEXTURE_2D||ct>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ot,ct,xt.__webglTexture,nt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(D,R,J){if(r.bindRenderbuffer(r.RENDERBUFFER,D),R.depthBuffer){let ot=R.depthTexture,ct=ot&&ot.isDepthTexture?ot.type:null,nt=v(R.stencilBuffer,ct),Ut=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=gt(R);kt(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,bt,nt,R.width,R.height):J?r.renderbufferStorageMultisample(r.RENDERBUFFER,bt,nt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,nt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,D)}else{let ot=R.textures;for(let ct=0;ct<ot.length;ct++){let nt=ot[ct],Ut=s.convert(nt.format,nt.colorSpace),bt=s.convert(nt.type),St=_(nt.internalFormat,Ut,bt,nt.colorSpace),oe=gt(R);J&&kt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,oe,St,R.width,R.height):kt(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,oe,St,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,St,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(D,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let ot=n.get(R.depthTexture);ot.__renderTarget=R,(!ot.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),H(R.depthTexture,0);let ct=ot.__webglTexture,nt=gt(R);if(R.depthTexture.format===zs)kt(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ct,0);else if(R.depthTexture.format===Hs)kt(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0,nt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function Tt(D){let R=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==D.depthTexture){let ot=D.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ot){let ct=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ot.removeEventListener("dispose",ct)};ot.addEventListener("dispose",ct),R.__depthDisposeCallback=ct}R.__boundDepthTexture=ot}if(D.depthTexture&&!R.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");pt(R.__webglFramebuffer,D)}else if(J){R.__webglDepthbuffer=[];for(let ot=0;ot<6;ot++)if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[ot]),R.__webglDepthbuffer[ot]===void 0)R.__webglDepthbuffer[ot]=r.createRenderbuffer(),rt(R.__webglDepthbuffer[ot],D,!1);else{let ct=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,nt=R.__webglDepthbuffer[ot];r.bindRenderbuffer(r.RENDERBUFFER,nt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ct,r.RENDERBUFFER,nt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),rt(R.__webglDepthbuffer,D,!1);else{let ot=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ct=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ct),r.framebufferRenderbuffer(r.FRAMEBUFFER,ot,r.RENDERBUFFER,ct)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(D,R,J){let ot=n.get(D);R!==void 0&&at(ot.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),J!==void 0&&Tt(D)}function Yt(D){let R=D.texture,J=n.get(D),ot=n.get(R);D.addEventListener("dispose",w);let ct=D.textures,nt=D.isWebGLCubeRenderTarget===!0,Ut=ct.length>1;if(Ut||(ot.__webglTexture===void 0&&(ot.__webglTexture=r.createTexture()),ot.__version=R.version,o.memory.textures++),nt){J.__webglFramebuffer=[];for(let bt=0;bt<6;bt++)if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer[bt]=[];for(let St=0;St<R.mipmaps.length;St++)J.__webglFramebuffer[bt][St]=r.createFramebuffer()}else J.__webglFramebuffer[bt]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){J.__webglFramebuffer=[];for(let bt=0;bt<R.mipmaps.length;bt++)J.__webglFramebuffer[bt]=r.createFramebuffer()}else J.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let bt=0,St=ct.length;bt<St;bt++){let oe=n.get(ct[bt]);oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&kt(D)===!1){J.__webglMultisampledFramebuffer=r.createFramebuffer(),J.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let bt=0;bt<ct.length;bt++){let St=ct[bt];J.__webglColorRenderbuffer[bt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,J.__webglColorRenderbuffer[bt]);let oe=s.convert(St.format,St.colorSpace),xt=s.convert(St.type),Dt=_(St.internalFormat,oe,xt,St.colorSpace,D.isXRRenderTarget===!0),Kt=gt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Kt,Dt,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,J.__webglColorRenderbuffer[bt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(J.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(nt){e.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture),P(r.TEXTURE_CUBE_MAP,R);for(let bt=0;bt<6;bt++)if(R.mipmaps&&R.mipmaps.length>0)for(let St=0;St<R.mipmaps.length;St++)at(J.__webglFramebuffer[bt][St],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,St);else at(J.__webglFramebuffer[bt],D,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0);x(R)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let bt=0,St=ct.length;bt<St;bt++){let oe=ct[bt],xt=n.get(oe);e.bindTexture(r.TEXTURE_2D,xt.__webglTexture),P(r.TEXTURE_2D,oe),at(J.__webglFramebuffer,D,oe,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,0),x(oe)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let bt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(bt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(bt,ot.__webglTexture),P(bt,R),R.mipmaps&&R.mipmaps.length>0)for(let St=0;St<R.mipmaps.length;St++)at(J.__webglFramebuffer[St],D,R,r.COLOR_ATTACHMENT0,bt,St);else at(J.__webglFramebuffer,D,R,r.COLOR_ATTACHMENT0,bt,0);x(R)&&p(bt),e.unbindTexture()}D.depthBuffer&&Tt(D)}function it(D){let R=D.textures;for(let J=0,ot=R.length;J<ot;J++){let ct=R[J];if(x(ct)){let nt=y(D),Ut=n.get(ct).__webglTexture;e.bindTexture(nt,Ut),p(nt),e.unbindTexture()}}}let mt=[],U=[];function Wt(D){if(D.samples>0){if(kt(D)===!1){let R=D.textures,J=D.width,ot=D.height,ct=r.COLOR_BUFFER_BIT,nt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=n.get(D),bt=R.length>1;if(bt)for(let St=0;St<R.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let St=0;St<R.length;St++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ct|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ct|=r.STENCIL_BUFFER_BIT)),bt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[St]);let oe=n.get(R[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,oe,0)}r.blitFramebuffer(0,0,J,ot,0,0,J,ot,ct,r.NEAREST),l===!0&&(mt.length=0,U.length=0,mt.push(r.COLOR_ATTACHMENT0+St),D.depthBuffer&&D.resolveDepthBuffer===!1&&(mt.push(nt),U.push(nt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),bt)for(let St=0;St<R.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[St]);let oe=n.get(R[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,oe,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let R=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function gt(D){return Math.min(i.maxSamples,D.samples)}function kt(D){let R=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function _t(D){let R=o.render.frame;h.get(D)!==R&&(h.set(D,R),D.update())}function Zt(D,R){let J=D.colorSpace,ot=D.format,ct=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==js&&J!==Ti&&(me.getTransfer(J)===be?(ot!==Bn||ct!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),R}function Lt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=H,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=Bt,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=it,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=kt}function Vx(r,t){function e(n,i=Ti){let s,o=me.getTransfer(i);if(n===ui)return r.UNSIGNED_BYTE;if(n===rh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===oh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===nd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===td)return r.BYTE;if(n===ed)return r.SHORT;if(n===Rr)return r.UNSIGNED_SHORT;if(n===sh)return r.INT;if(n===ts)return r.UNSIGNED_INT;if(n===Xn)return r.FLOAT;if(n===wn)return r.HALF_FLOAT;if(n===id)return r.ALPHA;if(n===sd)return r.RGB;if(n===Bn)return r.RGBA;if(n===rd)return r.LUMINANCE;if(n===od)return r.LUMINANCE_ALPHA;if(n===zs)return r.DEPTH_COMPONENT;if(n===Hs)return r.DEPTH_STENCIL;if(n===ah)return r.RED;if(n===lh)return r.RED_INTEGER;if(n===ad)return r.RG;if(n===ch)return r.RG_INTEGER;if(n===hh)return r.RGBA_INTEGER;if(n===So||n===To||n===Ao||n===Ro)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===So)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===So)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ao)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Fl||n===Ol||n===Gl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ol)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vl||n===Wl||n===Xl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Vl||n===Wl)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Xl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===$l||n===ql||n===Yl||n===Zl||n===Jl||n===Kl||n===jl||n===Ql||n===tc||n===ec||n===nc||n===ic||n===sc||n===rc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$l)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ql)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Yl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Zl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jl)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ql)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===tc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ec)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===nc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ic)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===sc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===rc)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Co||n===oc||n===ac)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Co)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===oc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ld||n===lc||n===cc||n===hc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Co)return s.COMPRESSED_RED_RGTC1_EXT;if(n===lc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===hc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Tc=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},qt=class extends He{constructor(){super(),this.isGroup=!0,this.type="Group"}},Wx={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let x=e.getJointPose(m,n),p=this._getHandJoint(c,m);x!==null&&(p.matrix.fromArray(x.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=x.radius),p.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wx)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new qt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$x=`
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

}`,Ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new vn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new _e({vertexShader:Xx,fragmentShader:$x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Y(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Rc=class extends Ii{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,m=new Ac,x=e.getContextAttributes(),p=null,y=null,_=[],v=[],S=new tt,E=null,w=new Ze;w.viewport=new Ce;let A=new Ze;A.viewport=new Ce;let M=[w,A],b=new Tc,T=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Z=_[F];return Z===void 0&&(Z=new Er,_[F]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(F){let Z=_[F];return Z===void 0&&(Z=new Er,_[F]=Z),Z.getGripSpace()},this.getHand=function(F){let Z=_[F];return Z===void 0&&(Z=new Er,_[F]=Z),Z.getHandSpace()};function k(F){let Z=v.indexOf(F.inputSource);if(Z===-1)return;let at=_[Z];at!==void 0&&(at.update(F.inputSource,F.frame,c||o),at.dispatchEvent({type:F.type,data:F.inputSource}))}function N(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",H);for(let F=0;F<_.length;F++){let Z=v[F];Z!==null&&(v[F]=null,_[F].disconnect(Z))}T=null,z=null,m.reset(),t.setRenderTarget(p),d=null,f=null,u=null,i=null,y=null,st.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(F){if(i=F,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",N),i.addEventListener("inputsourceschange",H),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(S),i.renderState.layers===void 0){let Z={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Z),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new nn(d.framebufferWidth,d.framebufferHeight,{format:Bn,type:ui,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Z=null,at=null,rt=null;x.depth&&(rt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Z=x.stencil?Hs:zs,at=x.stencil?Bs:ts);let pt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new nn(f.textureWidth,f.textureHeight,{format:Bn,type:ui,depthTexture:new Bo(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,Z),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),st.setContext(i),st.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H(F){for(let Z=0;Z<F.removed.length;Z++){let at=F.removed[Z],rt=v.indexOf(at);rt>=0&&(v[rt]=null,_[rt].disconnect(at))}for(let Z=0;Z<F.added.length;Z++){let at=F.added[Z],rt=v.indexOf(at);if(rt===-1){for(let Tt=0;Tt<_.length;Tt++)if(Tt>=v.length){v.push(at),rt=Tt;break}else if(v[Tt]===null){v[Tt]=at,rt=Tt;break}if(rt===-1)break}let pt=_[rt];pt&&pt.connect(at)}}let B=new I,X=new I;function O(F,Z,at){B.setFromMatrixPosition(Z.matrixWorld),X.setFromMatrixPosition(at.matrixWorld);let rt=B.distanceTo(X),pt=Z.projectionMatrix.elements,Tt=at.projectionMatrix.elements,Bt=pt[14]/(pt[10]-1),Yt=pt[14]/(pt[10]+1),it=(pt[9]+1)/pt[5],mt=(pt[9]-1)/pt[5],U=(pt[8]-1)/pt[0],Wt=(Tt[8]+1)/Tt[0],gt=Bt*U,kt=Bt*Wt,_t=rt/(-U+Wt),Zt=_t*-U;if(Z.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Zt),F.translateZ(_t),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),pt[10]===-1)F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{let Lt=Bt+_t,D=Yt+_t,R=gt-Zt,J=kt+(rt-Zt),ot=it*Yt/D*Lt,ct=mt*Yt/D*Lt;F.projectionMatrix.makePerspective(R,J,ot,ct,Lt,D),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function $(F,Z){Z===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Z.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(i===null)return;let Z=F.near,at=F.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(at=m.depthFar)),b.near=A.near=w.near=Z,b.far=A.far=w.far=at,(T!==b.near||z!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),T=b.near,z=b.far),w.layers.mask=F.layers.mask|2,A.layers.mask=F.layers.mask|4,b.layers.mask=w.layers.mask|A.layers.mask;let rt=F.parent,pt=b.cameras;$(b,rt);for(let Tt=0;Tt<pt.length;Tt++)$(pt[Tt],rt);pt.length===2?O(b,w,A):b.projectionMatrix.copy(w.projectionMatrix),Q(F,b,rt)};function Q(F,Z,at){at===null?F.matrix.copy(Z.matrixWorld):(F.matrix.copy(at.matrixWorld),F.matrix.invert(),F.matrix.multiply(Z.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Z.projectionMatrix),F.projectionMatrixInverse.copy(Z.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Fs*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(F){l=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(b)};let lt=null;function P(F,Z){if(h=Z.getViewerPose(c||o),g=Z,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let rt=!1;at.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let Tt=0;Tt<at.length;Tt++){let Bt=at[Tt],Yt=null;if(d!==null)Yt=d.getViewport(Bt);else{let mt=u.getViewSubImage(f,Bt);Yt=mt.viewport,Tt===0&&(t.setRenderTargetTextures(y,mt.colorTexture,f.ignoreDepthValues?void 0:mt.depthStencilTexture),t.setRenderTarget(y))}let it=M[Tt];it===void 0&&(it=new Ze,it.layers.enable(Tt),it.viewport=new Ce,M[Tt]=it),it.matrix.fromArray(Bt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Bt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Tt===0&&(b.matrix.copy(it.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(it)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let Tt=u.getDepthInformation(at[0]);Tt&&Tt.isValid&&Tt.texture&&m.init(t,Tt,i.renderState)}}for(let at=0;at<_.length;at++){let rt=v[at],pt=_[at];rt!==null&&pt!==void 0&&pt.update(rt,Z,c||o)}lt&&lt(F,Z),Z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Z}),g=null}let st=new pd;st.setAnimationLoop(P),this.setAnimationLoop=function(F){lt=F},this.dispose=function(){}}},Yi=new tn,qx=new ie;function Yx(r,t){function e(x,p){x.matrixAutoUpdate===!0&&x.updateMatrix(),p.value.copy(x.matrix)}function n(x,p){p.color.getRGB(x.fogColor.value,fd(r)),p.isFog?(x.fogNear.value=p.near,x.fogFar.value=p.far):p.isFogExp2&&(x.fogDensity.value=p.density)}function i(x,p,y,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(x,p):p.isMeshToonMaterial?(s(x,p),u(x,p)):p.isMeshPhongMaterial?(s(x,p),h(x,p)):p.isMeshStandardMaterial?(s(x,p),f(x,p),p.isMeshPhysicalMaterial&&d(x,p,v)):p.isMeshMatcapMaterial?(s(x,p),g(x,p)):p.isMeshDepthMaterial?s(x,p):p.isMeshDistanceMaterial?(s(x,p),m(x,p)):p.isMeshNormalMaterial?s(x,p):p.isLineBasicMaterial?(o(x,p),p.isLineDashedMaterial&&a(x,p)):p.isPointsMaterial?l(x,p,y,_):p.isSpriteMaterial?c(x,p):p.isShadowMaterial?(x.color.value.copy(p.color),x.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(x,p){x.opacity.value=p.opacity,p.color&&x.diffuse.value.copy(p.color),p.emissive&&x.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.bumpMap&&(x.bumpMap.value=p.bumpMap,e(p.bumpMap,x.bumpMapTransform),x.bumpScale.value=p.bumpScale,p.side===ln&&(x.bumpScale.value*=-1)),p.normalMap&&(x.normalMap.value=p.normalMap,e(p.normalMap,x.normalMapTransform),x.normalScale.value.copy(p.normalScale),p.side===ln&&x.normalScale.value.negate()),p.displacementMap&&(x.displacementMap.value=p.displacementMap,e(p.displacementMap,x.displacementMapTransform),x.displacementScale.value=p.displacementScale,x.displacementBias.value=p.displacementBias),p.emissiveMap&&(x.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,x.emissiveMapTransform)),p.specularMap&&(x.specularMap.value=p.specularMap,e(p.specularMap,x.specularMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest);let y=t.get(p),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,Yi.copy(v),Yi.x*=-1,Yi.y*=-1,Yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Yi.y*=-1,Yi.z*=-1),x.envMapRotation.value.setFromMatrix4(qx.makeRotationFromEuler(Yi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=p.reflectivity,x.ior.value=p.ior,x.refractionRatio.value=p.refractionRatio),p.lightMap&&(x.lightMap.value=p.lightMap,x.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,x.lightMapTransform)),p.aoMap&&(x.aoMap.value=p.aoMap,x.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,x.aoMapTransform))}function o(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform))}function a(x,p){x.dashSize.value=p.dashSize,x.totalSize.value=p.dashSize+p.gapSize,x.scale.value=p.scale}function l(x,p,y,_){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.size.value=p.size*y,x.scale.value=_*.5,p.map&&(x.map.value=p.map,e(p.map,x.uvTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function c(x,p){x.diffuse.value.copy(p.color),x.opacity.value=p.opacity,x.rotation.value=p.rotation,p.map&&(x.map.value=p.map,e(p.map,x.mapTransform)),p.alphaMap&&(x.alphaMap.value=p.alphaMap,e(p.alphaMap,x.alphaMapTransform)),p.alphaTest>0&&(x.alphaTest.value=p.alphaTest)}function h(x,p){x.specular.value.copy(p.specular),x.shininess.value=Math.max(p.shininess,1e-4)}function u(x,p){p.gradientMap&&(x.gradientMap.value=p.gradientMap)}function f(x,p){x.metalness.value=p.metalness,p.metalnessMap&&(x.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,x.metalnessMapTransform)),x.roughness.value=p.roughness,p.roughnessMap&&(x.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,x.roughnessMapTransform)),p.envMap&&(x.envMapIntensity.value=p.envMapIntensity)}function d(x,p,y){x.ior.value=p.ior,p.sheen>0&&(x.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),x.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(x.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,x.sheenColorMapTransform)),p.sheenRoughnessMap&&(x.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,x.sheenRoughnessMapTransform))),p.clearcoat>0&&(x.clearcoat.value=p.clearcoat,x.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(x.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,x.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(x.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===ln&&x.clearcoatNormalScale.value.negate())),p.dispersion>0&&(x.dispersion.value=p.dispersion),p.iridescence>0&&(x.iridescence.value=p.iridescence,x.iridescenceIOR.value=p.iridescenceIOR,x.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(x.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,x.iridescenceMapTransform)),p.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),p.transmission>0&&(x.transmission.value=p.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(x.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,x.transmissionMapTransform)),x.thickness.value=p.thickness,p.thicknessMap&&(x.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=p.attenuationDistance,x.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(x.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(x.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=p.specularIntensity,x.specularColor.value.copy(p.specularColor),p.specularColorMap&&(x.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,x.specularColorMapTransform)),p.specularIntensityMap&&(x.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,p){p.matcap&&(x.matcap.value=p.matcap)}function m(x,p){let y=t.get(p).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Zx(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",x));let S=_.program;n.updateUBOMapping(y,S);let E=t.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function h(y){let _=u();y.__bindingPointIndex=_;let v=r.createBuffer(),S=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,S,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let _=i[y.id],v=y.uniforms,S=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,w=v.length;E<w;E++){let A=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,b=A.length;M<b;M++){let T=A[M];if(d(T,E,M,S)===!0){let z=T.__offset,k=Array.isArray(T.value)?T.value:[T.value],N=0;for(let H=0;H<k.length;H++){let B=k[H],X=m(B);typeof B=="number"||typeof B=="boolean"?(T.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,z+N,T.__data)):B.isMatrix3?(T.__data[0]=B.elements[0],T.__data[1]=B.elements[1],T.__data[2]=B.elements[2],T.__data[3]=0,T.__data[4]=B.elements[3],T.__data[5]=B.elements[4],T.__data[6]=B.elements[5],T.__data[7]=0,T.__data[8]=B.elements[6],T.__data[9]=B.elements[7],T.__data[10]=B.elements[8],T.__data[11]=0):(B.toArray(T.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,T.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,_,v,S){let E=y.value,w=_+"_"+v;if(S[w]===void 0)return typeof E=="number"||typeof E=="boolean"?S[w]=E:S[w]=E.clone(),!0;{let A=S[w];if(typeof E=="number"||typeof E=="boolean"){if(A!==E)return S[w]=E,!0}else if(A.equals(E)===!1)return A.copy(E),!0}return!1}function g(y){let _=y.uniforms,v=0,S=16;for(let w=0,A=_.length;w<A;w++){let M=Array.isArray(_[w])?_[w]:[_[w]];for(let b=0,T=M.length;b<T;b++){let z=M[b],k=Array.isArray(z.value)?z.value:[z.value];for(let N=0,H=k.length;N<H;N++){let B=k[N],X=m(B),O=v%S,$=O%X.boundary,Q=O+$;v+=$,Q!==0&&S-Q<X.storage&&(v+=S-Q),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=X.storage}}}let E=v%S;return E>0&&(v+=S-E),y.__size=v,y.__cache={},this}function m(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){let _=y.target;_.removeEventListener("dispose",x);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Ho=class{constructor(t={}){let{canvas:e=tp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),m=new Int32Array(4),x=null,p=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=Ri,this.toneMappingExposure=1;let v=this,S=!1,E=0,w=0,A=null,M=-1,b=null,T=new Ce,z=new Ce,k=null,N=new wt(0),H=0,B=e.width,X=e.height,O=1,$=null,Q=null,lt=new Ce(0,0,B,X),P=new Ce(0,0,B,X),st=!1,F=new Pr,Z=!1,at=!1,rt=new ie,pt=new ie,Tt=new I,Bt=new Ce,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function mt(){return A===null?O:1}let U=n;function Wt(C,W){return e.getContext(C,W)}try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Kc}`),e.addEventListener("webglcontextlost",ut,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),U===null){let W="webgl2";if(U=Wt(W,C),U===null)throw Wt(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let gt,kt,_t,Zt,Lt,D,R,J,ot,ct,nt,Ut,bt,St,oe,xt,Dt,Kt,Qt,Nt,ue,ae,Te,V;function Ct(){gt=new ug(U),gt.init(),ae=new Vx(U,gt),kt=new rg(U,gt,t,ae),_t=new Fx(U,gt),kt.reverseDepthBuffer&&f&&_t.buffers.depth.setReversed(!0),Zt=new pg(U),Lt=new Ax,D=new Gx(U,gt,_t,Lt,kt,ae,Zt),R=new ag(v),J=new hg(v),ot=new _p(U),Te=new ig(U,ot),ct=new dg(U,ot,Zt,Te),nt=new gg(U,ct,ot,Zt),Qt=new mg(U,kt,D),xt=new og(Lt),Ut=new Tx(v,R,J,gt,kt,Te,xt),bt=new Yx(v,Lt),St=new Cx,oe=new kx(gt),Kt=new ng(v,R,J,_t,nt,d,l),Dt=new Bx(v,nt,kt),V=new Zx(U,Zt,kt,_t),Nt=new sg(U,gt,Zt),ue=new fg(U,gt,Zt),Zt.programs=Ut.programs,v.capabilities=kt,v.extensions=gt,v.properties=Lt,v.renderLists=St,v.shadowMap=Dt,v.state=_t,v.info=Zt}Ct();let et=new Rc(v,U);this.xr=et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let C=gt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=gt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(C){C!==void 0&&(O=C,this.setSize(B,X,!1))},this.getSize=function(C){return C.set(B,X)},this.setSize=function(C,W,j=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=C,X=W,e.width=Math.floor(C*O),e.height=Math.floor(W*O),j===!0&&(e.style.width=C+"px",e.style.height=W+"px"),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(B*O,X*O).floor()},this.setDrawingBufferSize=function(C,W,j){B=C,X=W,O=j,e.width=Math.floor(C*j),e.height=Math.floor(W*j),this.setViewport(0,0,C,W)},this.getCurrentViewport=function(C){return C.copy(T)},this.getViewport=function(C){return C.copy(lt)},this.setViewport=function(C,W,j,K){C.isVector4?lt.set(C.x,C.y,C.z,C.w):lt.set(C,W,j,K),_t.viewport(T.copy(lt).multiplyScalar(O).round())},this.getScissor=function(C){return C.copy(P)},this.setScissor=function(C,W,j,K){C.isVector4?P.set(C.x,C.y,C.z,C.w):P.set(C,W,j,K),_t.scissor(z.copy(P).multiplyScalar(O).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(C){_t.setScissorTest(st=C)},this.setOpaqueSort=function(C){$=C},this.setTransparentSort=function(C){Q=C},this.getClearColor=function(C){return C.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor.apply(Kt,arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha.apply(Kt,arguments)},this.clear=function(C=!0,W=!0,j=!0){let K=0;if(C){let q=!1;if(A!==null){let yt=A.texture.format;q=yt===hh||yt===ch||yt===lh}if(q){let yt=A.texture.type,Et=yt===ui||yt===ts||yt===Rr||yt===Bs||yt===rh||yt===oh,Gt=Kt.getClearColor(),Ot=Kt.getClearAlpha(),jt=Gt.r,ne=Gt.g,Vt=Gt.b;Et?(g[0]=jt,g[1]=ne,g[2]=Vt,g[3]=Ot,U.clearBufferuiv(U.COLOR,0,g)):(m[0]=jt,m[1]=ne,m[2]=Vt,m[3]=Ot,U.clearBufferiv(U.COLOR,0,m))}else K|=U.COLOR_BUFFER_BIT}W&&(K|=U.DEPTH_BUFFER_BIT),j&&(K|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ut,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),St.dispose(),oe.dispose(),Lt.dispose(),R.dispose(),J.dispose(),nt.dispose(),Te.dispose(),V.dispose(),Ut.dispose(),et.dispose(),et.removeEventListener("sessionstart",zn),et.removeEventListener("sessionend",Oi),Ln.stop()};function ut(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;let C=Zt.autoReset,W=Dt.enabled,j=Dt.autoUpdate,K=Dt.needsUpdate,q=Dt.type;Ct(),Zt.autoReset=C,Dt.enabled=W,Dt.autoUpdate=j,Dt.needsUpdate=K,Dt.type=q}function Pt(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function se(C){let W=C.target;W.removeEventListener("dispose",se),ke(W)}function ke(C){$e(C),Lt.remove(C)}function $e(C){let W=Lt.get(C).programs;W!==void 0&&(W.forEach(function(j){Ut.releaseProgram(j)}),C.isShaderMaterial&&Ut.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,j,K,q,yt){W===null&&(W=Yt);let Et=q.isMesh&&q.matrixWorld.determinant()<0,Gt=vt(C,W,j,K,q);_t.setMaterial(K,Et);let Ot=j.index,jt=1;if(K.wireframe===!0){if(Ot=ct.getWireframeAttribute(j),Ot===void 0)return;jt=2}let ne=j.drawRange,Vt=j.attributes.position,At=ne.start*jt,ee=(ne.start+ne.count)*jt;yt!==null&&(At=Math.max(At,yt.start*jt),ee=Math.min(ee,(yt.start+yt.count)*jt)),Ot!==null?(At=Math.max(At,0),ee=Math.min(ee,Ot.count)):Vt!=null&&(At=Math.max(At,0),ee=Math.min(ee,Vt.count));let pe=ee-At;if(pe<0||pe===1/0)return;Te.setup(q,K,Gt,j,Ot);let ze,ve=Nt;if(Ot!==null&&(ze=ot.get(Ot),ve=ue,ve.setIndex(ze)),q.isMesh)K.wireframe===!0?(_t.setLineWidth(K.wireframeLinewidth*mt()),ve.setMode(U.LINES)):ve.setMode(U.TRIANGLES);else if(q.isLine){let dt=K.linewidth;dt===void 0&&(dt=1),_t.setLineWidth(dt*mt()),q.isLineSegments?ve.setMode(U.LINES):q.isLineLoop?ve.setMode(U.LINE_LOOP):ve.setMode(U.LINE_STRIP)}else q.isPoints?ve.setMode(U.POINTS):q.isSprite&&ve.setMode(U.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)ve.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))ve.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let dt=q._multiDrawStarts,Fe=q._multiDrawCounts,de=q._multiDrawCount,Oe=Ot?ot.get(Ot).bytesPerElement:1,Tn=Lt.get(K).currentProgram.getUniforms();for(let je=0;je<de;je++)Tn.setValue(U,"_gl_DrawID",je),ve.render(dt[je]/Oe,Fe[je])}else if(q.isInstancedMesh)ve.renderInstances(At,pe,q.count);else if(j.isInstancedBufferGeometry){let dt=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,Fe=Math.min(j.instanceCount,dt);ve.renderInstances(At,pe,Fe)}else ve.render(At,pe)};function le(C,W,j){C.transparent===!0&&C.side===we&&C.forceSinglePass===!1?(C.side=ln,C.needsUpdate=!0,G(C,W,j),C.side=Pi,C.needsUpdate=!0,G(C,W,j),C.side=we):G(C,W,j)}this.compile=function(C,W,j=null){j===null&&(j=C),p=oe.get(j),p.init(W),_.push(p),j.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),C!==j&&C.traverseVisible(function(q){q.isLight&&q.layers.test(W.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();let K=new Set;return C.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let yt=q.material;if(yt)if(Array.isArray(yt))for(let Et=0;Et<yt.length;Et++){let Gt=yt[Et];le(Gt,j,q),K.add(Gt)}else le(yt,j,q),K.add(yt)}),_.pop(),p=null,K},this.compileAsync=function(C,W,j=null){let K=this.compile(C,W,j);return new Promise(q=>{function yt(){if(K.forEach(function(Et){Lt.get(Et).currentProgram.isReady()&&K.delete(Et)}),K.size===0){q(C);return}setTimeout(yt,10)}gt.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let rn=null;function xn(C){rn&&rn(C)}function zn(){Ln.stop()}function Oi(){Ln.start()}let Ln=new pd;Ln.setAnimationLoop(xn),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(C){rn=C,et.setAnimationLoop(C),C===null?Ln.stop():Ln.start()},et.addEventListener("sessionstart",zn),et.addEventListener("sessionend",Oi),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(W),W=et.getCamera()),C.isScene===!0&&C.onBeforeRender(v,C,W,A),p=oe.get(C,_.length),p.init(W),_.push(p),pt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),F.setFromProjectionMatrix(pt),at=this.localClippingEnabled,Z=xt.init(this.clippingPlanes,at),x=St.get(C,y.length),x.init(),y.push(x),et.enabled===!0&&et.isPresenting===!0){let yt=v.xr.getDepthSensingMesh();yt!==null&&or(yt,W,-1/0,v.sortObjects)}or(C,W,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort($,Q),it=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,it&&Kt.addToRenderList(x,C),this.info.render.frame++,Z===!0&&xt.beginShadows();let j=p.state.shadowsArray;Dt.render(j,C,W),Z===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset();let K=x.opaque,q=x.transmissive;if(p.setupLights(),W.isArrayCamera){let yt=W.cameras;if(q.length>0)for(let Et=0,Gt=yt.length;Et<Gt;Et++){let Ot=yt[Et];ei(K,q,C,Ot)}it&&Kt.render(C);for(let Et=0,Gt=yt.length;Et<Gt;Et++){let Ot=yt[Et];ti(x,C,Ot,Ot.viewport)}}else q.length>0&&ei(K,q,C,W),it&&Kt.render(C),ti(x,C,W);A!==null&&(D.updateMultisampleRenderTarget(A),D.updateRenderTargetMipmap(A)),C.isScene===!0&&C.onAfterRender(v,C,W),Te.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(p=_[_.length-1],Z===!0&&xt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function or(C,W,j,K){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)j=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||F.intersectsSprite(C)){K&&Bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(pt);let Et=nt.update(C),Gt=C.material;Gt.visible&&x.push(C,Et,Gt,j,Bt.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||F.intersectsObject(C))){let Et=nt.update(C),Gt=C.material;if(K&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Bt.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Bt.copy(Et.boundingSphere.center)),Bt.applyMatrix4(C.matrixWorld).applyMatrix4(pt)),Array.isArray(Gt)){let Ot=Et.groups;for(let jt=0,ne=Ot.length;jt<ne;jt++){let Vt=Ot[jt],At=Gt[Vt.materialIndex];At&&At.visible&&x.push(C,Et,At,j,Bt.z,Vt)}}else Gt.visible&&x.push(C,Et,Gt,j,Bt.z,null)}}let yt=C.children;for(let Et=0,Gt=yt.length;Et<Gt;Et++)or(yt[Et],W,j,K)}function ti(C,W,j,K){let q=C.opaque,yt=C.transmissive,Et=C.transparent;p.setupLightsView(j),Z===!0&&xt.setGlobalState(v.clippingPlanes,j),K&&_t.viewport(T.copy(K)),q.length>0&&Gi(q,W,j),yt.length>0&&Gi(yt,W,j),Et.length>0&&Gi(Et,W,j),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function ei(C,W,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new nn(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?wn:ui,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let yt=p.state.transmissionRenderTarget[K.id],Et=K.viewport||T;yt.setSize(Et.z,Et.w);let Gt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(N),H=v.getClearAlpha(),H<1&&v.setClearColor(16777215,.5),v.clear(),it&&Kt.render(j);let Ot=v.toneMapping;v.toneMapping=Ri;let jt=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),Z===!0&&xt.setGlobalState(v.clippingPlanes,K),Gi(C,j,K),D.updateMultisampleRenderTarget(yt),D.updateRenderTargetMipmap(yt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let ne=!1;for(let Vt=0,At=W.length;Vt<At;Vt++){let ee=W[Vt],pe=ee.object,ze=ee.geometry,ve=ee.material,dt=ee.group;if(ve.side===we&&pe.layers.test(K.layers)){let Fe=ve.side;ve.side=ln,ve.needsUpdate=!0,L(pe,j,K,ze,ve,dt),ve.side=Fe,ve.needsUpdate=!0,ne=!0}}ne===!0&&(D.updateMultisampleRenderTarget(yt),D.updateRenderTargetMipmap(yt))}v.setRenderTarget(Gt),v.setClearColor(N,H),jt!==void 0&&(K.viewport=jt),v.toneMapping=Ot}function Gi(C,W,j){let K=W.isScene===!0?W.overrideMaterial:null;for(let q=0,yt=C.length;q<yt;q++){let Et=C[q],Gt=Et.object,Ot=Et.geometry,jt=K===null?Et.material:K,ne=Et.group;Gt.layers.test(j.layers)&&L(Gt,W,j,Ot,jt,ne)}}function L(C,W,j,K,q,yt){C.onBeforeRender(v,W,j,K,q,yt),C.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),q.onBeforeRender(v,W,j,K,C,yt),q.transparent===!0&&q.side===we&&q.forceSinglePass===!1?(q.side=ln,q.needsUpdate=!0,v.renderBufferDirect(j,W,K,q,C,yt),q.side=Pi,q.needsUpdate=!0,v.renderBufferDirect(j,W,K,q,C,yt),q.side=we):v.renderBufferDirect(j,W,K,q,C,yt),C.onAfterRender(v,W,j,K,q,yt)}function G(C,W,j){W.isScene!==!0&&(W=Yt);let K=Lt.get(C),q=p.state.lights,yt=p.state.shadowsArray,Et=q.state.version,Gt=Ut.getParameters(C,q.state,yt,W,j),Ot=Ut.getProgramCacheKey(Gt),jt=K.programs;K.environment=C.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(C.isMeshStandardMaterial?J:R).get(C.envMap||K.environment),K.envMapRotation=K.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,jt===void 0&&(C.addEventListener("dispose",se),jt=new Map,K.programs=jt);let ne=jt.get(Ot);if(ne!==void 0){if(K.currentProgram===ne&&K.lightsStateVersion===Et)return te(C,Gt),ne}else Gt.uniforms=Ut.getUniforms(C),C.onBeforeCompile(Gt,v),ne=Ut.acquireProgram(Gt,Ot),jt.set(Ot,ne),K.uniforms=Gt.uniforms;let Vt=K.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Vt.clippingPlanes=xt.uniform),te(C,Gt),K.needsLights=Jt(C),K.lightsStateVersion=Et,K.needsLights&&(Vt.ambientLightColor.value=q.state.ambient,Vt.lightProbe.value=q.state.probe,Vt.directionalLights.value=q.state.directional,Vt.directionalLightShadows.value=q.state.directionalShadow,Vt.spotLights.value=q.state.spot,Vt.spotLightShadows.value=q.state.spotShadow,Vt.rectAreaLights.value=q.state.rectArea,Vt.ltc_1.value=q.state.rectAreaLTC1,Vt.ltc_2.value=q.state.rectAreaLTC2,Vt.pointLights.value=q.state.point,Vt.pointLightShadows.value=q.state.pointShadow,Vt.hemisphereLights.value=q.state.hemi,Vt.directionalShadowMap.value=q.state.directionalShadowMap,Vt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Vt.spotShadowMap.value=q.state.spotShadowMap,Vt.spotLightMatrix.value=q.state.spotLightMatrix,Vt.spotLightMap.value=q.state.spotLightMap,Vt.pointShadowMap.value=q.state.pointShadowMap,Vt.pointShadowMatrix.value=q.state.pointShadowMatrix),K.currentProgram=ne,K.uniformsList=null,ne}function Ft(C){if(C.uniformsList===null){let W=C.currentProgram.getUniforms();C.uniformsList=Ds.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function te(C,W){let j=Lt.get(C);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function vt(C,W,j,K,q){W.isScene!==!0&&(W=Yt),D.resetTextureUnits();let yt=W.fog,Et=K.isMeshStandardMaterial?W.environment:null,Gt=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:js,Ot=(K.isMeshStandardMaterial?J:R).get(K.envMap||Et),jt=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ne=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Vt=!!j.morphAttributes.position,At=!!j.morphAttributes.normal,ee=!!j.morphAttributes.color,pe=Ri;K.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(pe=v.toneMapping);let ze=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,ve=ze!==void 0?ze.length:0,dt=Lt.get(K),Fe=p.state.lights;if(Z===!0&&(at===!0||C!==b)){let An=C===b&&K.id===M;xt.setState(K,C,An)}let de=!1;K.version===dt.__version?(dt.needsLights&&dt.lightsStateVersion!==Fe.state.version||dt.outputColorSpace!==Gt||q.isBatchedMesh&&dt.batching===!1||!q.isBatchedMesh&&dt.batching===!0||q.isBatchedMesh&&dt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&dt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&dt.instancing===!1||!q.isInstancedMesh&&dt.instancing===!0||q.isSkinnedMesh&&dt.skinning===!1||!q.isSkinnedMesh&&dt.skinning===!0||q.isInstancedMesh&&dt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&dt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&dt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&dt.instancingMorph===!1&&q.morphTexture!==null||dt.envMap!==Ot||K.fog===!0&&dt.fog!==yt||dt.numClippingPlanes!==void 0&&(dt.numClippingPlanes!==xt.numPlanes||dt.numIntersection!==xt.numIntersection)||dt.vertexAlphas!==jt||dt.vertexTangents!==ne||dt.morphTargets!==Vt||dt.morphNormals!==At||dt.morphColors!==ee||dt.toneMapping!==pe||dt.morphTargetsCount!==ve)&&(de=!0):(de=!0,dt.__version=K.version);let Oe=dt.currentProgram;de===!0&&(Oe=G(K,W,q));let Tn=!1,je=!1,ar=!1,De=Oe.getUniforms(),Gn=dt.uniforms;if(_t.useProgram(Oe.program)&&(Tn=!0,je=!0,ar=!0),K.id!==M&&(M=K.id,je=!0),Tn||b!==C){_t.buffers.depth.getReversed()?(rt.copy(C.projectionMatrix),np(rt),ip(rt),De.setValue(U,"projectionMatrix",rt)):De.setValue(U,"projectionMatrix",C.projectionMatrix),De.setValue(U,"viewMatrix",C.matrixWorldInverse);let vi=De.map.cameraPosition;vi!==void 0&&vi.setValue(U,Tt.setFromMatrixPosition(C.matrixWorld)),kt.logarithmicDepthBuffer&&De.setValue(U,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&De.setValue(U,"isOrthographic",C.isOrthographicCamera===!0),b!==C&&(b=C,je=!0,ar=!0)}if(q.isSkinnedMesh){De.setOptional(U,q,"bindMatrix"),De.setOptional(U,q,"bindMatrixInverse");let An=q.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),De.setValue(U,"boneTexture",An.boneTexture,D))}q.isBatchedMesh&&(De.setOptional(U,q,"batchingTexture"),De.setValue(U,"batchingTexture",q._matricesTexture,D),De.setOptional(U,q,"batchingIdTexture"),De.setValue(U,"batchingIdTexture",q._indirectTexture,D),De.setOptional(U,q,"batchingColorTexture"),q._colorsTexture!==null&&De.setValue(U,"batchingColorTexture",q._colorsTexture,D));let lr=j.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0)&&Qt.update(q,j,Oe),(je||dt.receiveShadow!==q.receiveShadow)&&(dt.receiveShadow=q.receiveShadow,De.setValue(U,"receiveShadow",q.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(Gn.envMap.value=Ot,Gn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(Gn.envMapIntensity.value=W.environmentIntensity),je&&(De.setValue(U,"toneMappingExposure",v.toneMappingExposure),dt.needsLights&&$t(Gn,ar),yt&&K.fog===!0&&bt.refreshFogUniforms(Gn,yt),bt.refreshMaterialUniforms(Gn,K,O,X,p.state.transmissionRenderTarget[C.id]),Ds.upload(U,Ft(dt),Gn,D)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ds.upload(U,Ft(dt),Gn,D),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&De.setValue(U,"center",q.center),De.setValue(U,"modelViewMatrix",q.modelViewMatrix),De.setValue(U,"normalMatrix",q.normalMatrix),De.setValue(U,"modelMatrix",q.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){let An=K.uniformsGroups;for(let vi=0,yi=An.length;vi<yi;vi++){let Lh=An[vi];V.update(Lh,Oe),V.bind(Lh,Oe)}}return Oe}function $t(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function Jt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(C,W,j){Lt.get(C.texture).__webglTexture=W,Lt.get(C.depthTexture).__webglTexture=j;let K=Lt.get(C);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,W){let j=Lt.get(C);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,j=0){A=C,E=W,w=j;let K=!0,q=null,yt=!1,Et=!1;if(C){let Ot=Lt.get(C);if(Ot.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(U.FRAMEBUFFER,null),K=!1;else if(Ot.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(Ot.__hasExternalTextures)D.rebindTextures(C,Lt.get(C.texture).__webglTexture,Lt.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let Vt=C.depthTexture;if(Ot.__boundDepthTexture!==Vt){if(Vt!==null&&Lt.has(Vt)&&(C.width!==Vt.image.width||C.height!==Vt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}let jt=C.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Et=!0);let ne=Lt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ne[W])?q=ne[W][j]:q=ne[W],yt=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?q=Lt.get(C).__webglMultisampledFramebuffer:Array.isArray(ne)?q=ne[j]:q=ne,T.copy(C.viewport),z.copy(C.scissor),k=C.scissorTest}else T.copy(lt).multiplyScalar(O).floor(),z.copy(P).multiplyScalar(O).floor(),k=st;if(_t.bindFramebuffer(U.FRAMEBUFFER,q)&&K&&_t.drawBuffers(C,q),_t.viewport(T),_t.scissor(z),_t.setScissorTest(k),yt){let Ot=Lt.get(C.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ot.__webglTexture,j)}else if(Et){let Ot=Lt.get(C.texture),jt=W||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,j||0,jt)}M=-1},this.readRenderTargetPixels=function(C,W,j,K,q,yt,Et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Gt=Gt[Et]),Gt){_t.bindFramebuffer(U.FRAMEBUFFER,Gt);try{let Ot=C.texture,jt=Ot.format,ne=Ot.type;if(!kt.textureFormatReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-K&&j>=0&&j<=C.height-q&&U.readPixels(W,j,K,q,ae.convert(jt),ae.convert(ne),yt)}finally{let Ot=A!==null?Lt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(C,W,j,K,q,yt,Et){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Lt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Gt=Gt[Et]),Gt){let Ot=C.texture,jt=Ot.format,ne=Ot.type;if(!kt.textureFormatReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=C.width-K&&j>=0&&j<=C.height-q){_t.bindFramebuffer(U.FRAMEBUFFER,Gt);let Vt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Vt),U.bufferData(U.PIXEL_PACK_BUFFER,yt.byteLength,U.STREAM_READ),U.readPixels(W,j,K,q,ae.convert(jt),ae.convert(ne),0);let At=A!==null?Lt.get(A).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,At);let ee=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ep(U,ee,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Vt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,yt),U.deleteBuffer(Vt),U.deleteSync(ee),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,W=null,j=0){C.isTexture!==!0&&(Mr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,C=arguments[1]);let K=Math.pow(2,-j),q=Math.floor(C.image.width*K),yt=Math.floor(C.image.height*K),Et=W!==null?W.x:0,Gt=W!==null?W.y:0;D.setTexture2D(C,0),U.copyTexSubImage2D(U.TEXTURE_2D,j,0,0,Et,Gt,q,yt),_t.unbindTexture()},this.copyTextureToTexture=function(C,W,j=null,K=null,q=0){C.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,C=arguments[1],W=arguments[2],q=arguments[3]||0,j=null);let yt,Et,Gt,Ot,jt,ne,Vt,At,ee,pe=C.isCompressedTexture?C.mipmaps[q]:C.image;j!==null?(yt=j.max.x-j.min.x,Et=j.max.y-j.min.y,Gt=j.isBox3?j.max.z-j.min.z:1,Ot=j.min.x,jt=j.min.y,ne=j.isBox3?j.min.z:0):(yt=pe.width,Et=pe.height,Gt=pe.depth||1,Ot=0,jt=0,ne=0),K!==null?(Vt=K.x,At=K.y,ee=K.z):(Vt=0,At=0,ee=0);let ze=ae.convert(W.format),ve=ae.convert(W.type),dt;W.isData3DTexture?(D.setTexture3D(W,0),dt=U.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(D.setTexture2DArray(W,0),dt=U.TEXTURE_2D_ARRAY):(D.setTexture2D(W,0),dt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,W.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,W.unpackAlignment);let Fe=U.getParameter(U.UNPACK_ROW_LENGTH),de=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Oe=U.getParameter(U.UNPACK_SKIP_PIXELS),Tn=U.getParameter(U.UNPACK_SKIP_ROWS),je=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,pe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,pe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,jt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ne);let ar=C.isDataArrayTexture||C.isData3DTexture,De=W.isDataArrayTexture||W.isData3DTexture;if(C.isRenderTargetTexture||C.isDepthTexture){let Gn=Lt.get(C),lr=Lt.get(W),An=Lt.get(Gn.__renderTarget),vi=Lt.get(lr.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,An.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let yi=0;yi<Gt;yi++)ar&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(C).__webglTexture,q,ne+yi),C.isDepthTexture?(De&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.get(W).__webglTexture,q,ee+yi),U.blitFramebuffer(Ot,jt,yt,Et,Vt,At,yt,Et,U.DEPTH_BUFFER_BIT,U.NEAREST)):De?U.copyTexSubImage3D(dt,q,Vt,At,ee+yi,Ot,jt,yt,Et):U.copyTexSubImage2D(dt,q,Vt,At,ee+yi,Ot,jt,yt,Et);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else De?C.isDataTexture||C.isData3DTexture?U.texSubImage3D(dt,q,Vt,At,ee,yt,Et,Gt,ze,ve,pe.data):W.isCompressedArrayTexture?U.compressedTexSubImage3D(dt,q,Vt,At,ee,yt,Et,Gt,ze,pe.data):U.texSubImage3D(dt,q,Vt,At,ee,yt,Et,Gt,ze,ve,pe):C.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,q,Vt,At,yt,Et,ze,ve,pe.data):C.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,q,Vt,At,pe.width,pe.height,ze,pe.data):U.texSubImage2D(U.TEXTURE_2D,q,Vt,At,yt,Et,ze,ve,pe);U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,de),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Oe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,je),q===0&&W.generateMipmaps&&U.generateMipmap(dt),_t.unbindTexture()},this.copyTextureToTexture3D=function(C,W,j=null,K=null,q=0){return C.isTexture!==!0&&(Mr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,C=arguments[2],W=arguments[3],q=arguments[4]||0),Mr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,W,j,K,q)},this.initRenderTarget=function(C){Lt.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),_t.unbindTexture()},this.resetState=function(){E=0,w=0,A=null,_t.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var Fo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},es=class extends He{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tn,this.environmentIntensity=1,this.environmentRotation=new tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=dc,this.updateRanges=[],this.version=0,this.uuid=qn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=qn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},fn=new I,Ir=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Nn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Nn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Nn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Nn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Nn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},cn=class extends Yn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Es,fr=new I,Ss=new I,Ts=new I,As=new tt,pr=new tt,yd=new ie,fo=new I,mr=new I,po=new I,Lu=new tt,Ml=new tt,Du=new tt,mn=class extends He{constructor(t=new cn){if(super(),this.isSprite=!0,this.type="Sprite",Es===void 0){Es=new re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oo(e,5);Es.setIndex([0,1,2,0,2,3]),Es.setAttribute("position",new Ir(n,3,0,!1)),Es.setAttribute("uv",new Ir(n,2,3,!1))}this.geometry=Es,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ss.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ss.multiplyScalar(-Ts.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;mo(fo.set(-.5,-.5,0),Ts,o,Ss,i,s),mo(mr.set(.5,-.5,0),Ts,o,Ss,i,s),mo(po.set(.5,.5,0),Ts,o,Ss,i,s),Lu.set(0,0),Ml.set(1,0),Du.set(1,1);let a=t.ray.intersectTriangle(fo,mr,po,!1,fr);if(a===null&&(mo(mr.set(-.5,.5,0),Ts,o,Ss,i,s),Ml.set(0,1),a=t.ray.intersectTriangle(fo,po,mr,!1,fr),a===null))return;let l=t.ray.origin.distanceTo(fr);l<t.near||l>t.far||e.push({distance:l,point:fr.clone(),uv:Ai.getInterpolation(fr,fo,mr,po,Lu,Ml,Du,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function mo(r,t,e,n,i,s){As.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(pr.x=s*As.x-i*As.y,pr.y=i*As.x+s*As.y):pr.copy(As),r.copy(t),r.x+=pr.x,r.y+=pr.y,r.applyMatrix4(yd)}var Cc=class extends vn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=bn,h=bn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var zr=class extends ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Rs=new ie,ku=new ie,go=[],Uu=new di,Jx=new ie,gr=new Y,xr=new fi,Pe=class extends Y{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Jx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),Uu.copy(t.boundingBox).applyMatrix4(Rs),this.boundingBox.union(Uu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new fi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Rs),xr.copy(t.boundingSphere).applyMatrix4(Rs),this.boundingSphere.union(xr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(gr.geometry=this.geometry,gr.material=this.material,gr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xr.copy(this.boundingSphere),xr.applyMatrix4(n),t.ray.intersectsSphere(xr)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Rs),ku.multiplyMatrices(n,Rs),gr.matrixWorld=ku,gr.raycast(t,go);for(let o=0,a=go.length;o<a;o++){let l=go[o];l.instanceId=s,l.object=this,e.push(l)}go.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cc(new Float32Array(i*this.count),i,this.count,ah,Xn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Lr=class extends Yn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Go=new I,Vo=new I,Nu=new ie,vr=new Cr,xo=new fi,_l=new I,Bu=new I,Pc=class extends He{constructor(t=new re,e=new Lr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Go.fromBufferAttribute(e,i-1),Vo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Go.distanceTo(Vo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(i),xo.radius+=s,t.ray.intersectsSphere(xo)===!1)return;Nu.copy(i).invert(),vr.copy(t.ray).applyMatrix4(Nu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let m=d,x=g-1;m<x;m+=c){let p=h.getX(m),y=h.getX(m+1),_=vo(this,t,vr,l,p,y);_&&e.push(_)}if(this.isLineLoop){let m=h.getX(g-1),x=h.getX(d),p=vo(this,t,vr,l,m,x);p&&e.push(p)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let m=d,x=g-1;m<x;m+=c){let p=vo(this,t,vr,l,m,m+1);p&&e.push(p)}if(this.isLineLoop){let m=vo(this,t,vr,l,g-1,d);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function vo(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(Go.fromBufferAttribute(o,i),Vo.fromBufferAttribute(o,s),e.distanceSqToSegment(Go,Vo,_l,Bu)>n)return;_l.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(_l);if(!(l<t.near||l>t.far))return{distance:l,point:Bu.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var Hu=new I,Fu=new I,$s=class extends Pc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)Hu.fromBufferAttribute(e,i),Fu.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Hu.distanceTo(Fu);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ns=class extends Yn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ou=new ie,Ic=new Cr,yo=new fi,Mo=new I,pi=class extends He{constructor(t=new re,e=new ns){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yo.copy(n.boundingSphere),yo.applyMatrix4(i),yo.radius+=s,t.ray.intersectsSphere(yo)===!1)return;Ou.copy(i).invert(),Ic.copy(t.ray).applyMatrix4(Ou);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,m=d;g<m;g++){let x=c.getX(g);Mo.fromBufferAttribute(u,x),Gu(Mo,x,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,m=d;g<m;g++)Mo.fromBufferAttribute(u,g),Gu(Mo,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Gu(r,t,e,n,i,s,o){let a=Ic.distanceSqToPoint(r);if(a<e){let l=new I;Ic.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Re=class extends vn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new tt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],s=[],o=[],a=new I,l=new ie;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ye(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Dr=class extends Cn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},zc=class extends Dr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fh(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var _o=new I,bl=new fh,wl=new fh,El=new fh,kr=class extends Cn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(_o.subVectors(i[0],i[1]).add(i[0]),c=_o);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(_o.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),x<1e-4&&(x=m),bl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,m,x),wl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,m,x),El.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,m,x)}else this.curveType==="catmullrom"&&(bl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),wl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),El.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(bl.calc(l),wl.calc(l),El.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Vu(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Kx(r,t){let e=1-r;return e*e*t}function jx(r,t){return 2*(1-r)*r*t}function Qx(r,t){return r*r*t}function Sr(r,t,e,n){return Kx(r,t)+jx(r,e)+Qx(r,n)}function tv(r,t){let e=1-r;return e*e*e*t}function ev(r,t){let e=1-r;return 3*e*e*r*t}function nv(r,t){return 3*(1-r)*r*r*t}function iv(r,t){return r*r*r*t}function Tr(r,t,e,n,i){return tv(r,t)+ev(r,e)+nv(r,n)+iv(r,i)}var Wo=class extends Cn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,i.x,s.x,o.x,a.x),Tr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Lc=class extends Cn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Tr(t,i.x,s.x,o.x,a.x),Tr(t,i.y,s.y,o.y,a.y),Tr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Xo=class extends Cn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Dc=class extends Cn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},$o=class extends Cn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Sr(t,i.x,s.x,o.x),Sr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qs=class extends Cn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Sr(t,i.x,s.x,o.x),Sr(t,i.y,s.y,o.y),Sr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qo=class extends Cn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Vu(a,l.x,c.x,h.x,u.x),Vu(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}},Yo=Object.freeze({__proto__:null,ArcCurve:zc,CatmullRomCurve3:kr,CubicBezierCurve:Wo,CubicBezierCurve3:Lc,EllipseCurve:Dr,LineCurve:Xo,LineCurve3:Dc,QuadraticBezierCurve:$o,QuadraticBezierCurve3:qs,SplineCurve:qo}),kc=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Yo[i.type]().fromJSON(i))}return this}},Zo=class extends kc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Xo(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new $o(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Wo(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new qo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Dr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Jo=class r extends re{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ye(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,f=new tt,d=new I,g=new I,m=new I,x=0,p=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-x,d.z=p*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[y+1].x-t[y].x,p=t[y+1].y-t[y].y,d.x=p*1,d.y=-x,d.z=p*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*i,v=Math.sin(_),S=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*S,o.push(u.x,u.y,u.z),f.x=y/e,f.y=E/(t.length-1),a.push(f.x,f.y);let w=l[3*E+0]*v,A=l[3*E+1],M=l[3*E+0]*S;c.push(w,A,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,S=v,E=v+t.length,w=v+t.length+1,A=v+1;s.push(S,E,A),s.push(w,A,E)}this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var zi=class r extends re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Ht=class r extends re{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,m=[],x=n/2,p=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2));function y(){let v=new I,S=new I,E=0,w=(e-t)/n;for(let A=0;A<=s;A++){let M=[],b=A/s,T=b*(e-t)+t;for(let z=0;z<=i;z++){let k=z/i,N=k*l+a,H=Math.sin(N),B=Math.cos(N);S.x=T*H,S.y=-b*n+x,S.z=T*B,u.push(S.x,S.y,S.z),v.set(H,w,B).normalize(),f.push(v.x,v.y,v.z),d.push(k,1-b),M.push(g++)}m.push(M)}for(let A=0;A<i;A++)for(let M=0;M<s;M++){let b=m[M][A],T=m[M+1][A],z=m[M+1][A+1],k=m[M][A+1];(t>0||M!==0)&&(h.push(b,T,k),E+=3),(e>0||M!==s-1)&&(h.push(T,z,k),E+=3)}c.addGroup(p,E,0),p+=E}function _(v){let S=g,E=new tt,w=new I,A=0,M=v===!0?t:e,b=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,x*b,0),f.push(0,b,0),d.push(.5,.5),g++;let T=g;for(let z=0;z<=i;z++){let N=z/i*l+a,H=Math.cos(N),B=Math.sin(N);w.x=M*B,w.y=x*b,w.z=M*H,u.push(w.x,w.y,w.z),f.push(0,b,0),E.x=H*.5+.5,E.y=B*.5*b+.5,d.push(E.x,E.y),g++}for(let z=0;z<i;z++){let k=S+z,N=T+z;v===!0?h.push(N,N+1,k):h.push(N+1,N,k),A+=3}c.addGroup(p,A,v===!0?1:2),p+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zn=class r extends Ht{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Hn=class extends Zo{constructor(t){super(t),this.uuid=qn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new Zo().fromJSON(i))}return this}},sv={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Md(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=cv(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],f=r[g+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Ur(s,o,e,a,l,d,0),o}};function Md(r,t,e,n,i){let s,o;if(i===Mv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=Wu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=Wu(s,r[s],r[s+1],o);return o&&ra(o,o.next)&&(Br(o),o=o.next),o}function is(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ra(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Br(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ur(r,t,e,n,i,s,o){if(!r)return;!o&&s&&pv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?ov(r,n,i,s):rv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Br(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=av(is(r),t,e),Ur(r,t,e,n,i,s,2)):o===2&&lv(r,t,e,n,i,s):Ur(is(r),t,e,n,i,s,1);break}}}function rv(r){let t=r.prev,e=r,n=r.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Ps(i,a,s,l,o,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ov(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ne(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,m=a>l?a>c?a:c:l>c?l:c,x=h>u?h>f?h:f:u>f?u:f,p=Uc(d,g,t,e,n),y=Uc(m,x,t,e,n),_=r.prevZ,v=r.nextZ;for(;_&&_.z>=p&&v&&v.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==i&&_!==o&&Ps(a,h,l,u,c,f,_.x,_.y)&&Ne(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Ps(a,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==i&&_!==o&&Ps(a,h,l,u,c,f,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Ps(a,h,l,u,c,f,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function av(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!ra(i,s)&&_d(i,n,n.next,s)&&Nr(i,s)&&Nr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Br(n),Br(n.next),n=r=s),n=n.next}while(n!==r);return is(n)}function lv(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&xv(o,a)){let l=bd(o,a);o=is(o,o.next),l=is(l,l.next),Ur(o,t,e,n,i,s,0),Ur(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function cv(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Md(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(gv(c));for(i.sort(hv),s=0;s<i.length;s++)e=uv(i[s],e);return e}function hv(r,t){return r.x-t.x}function uv(r,t){let e=dv(r,t);if(!e)return t;let n=bd(e,r);return is(n,n.next),is(e,e.next)}function dv(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Ps(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Nr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&fv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function fv(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function pv(r,t,e,n){let i=r;do i.z===0&&(i.z=Uc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,mv(i)}function mv(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Uc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function gv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Ps(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function xv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!vv(r,t)&&(Nr(r,t)&&Nr(t,r)&&yv(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||ra(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ra(r,t){return r.x===t.x&&r.y===t.y}function _d(r,t,e,n){let i=wo(Ne(r,t,e)),s=wo(Ne(r,t,n)),o=wo(Ne(e,n,r)),a=wo(Ne(e,n,t));return!!(i!==s&&o!==a||i===0&&bo(r,e,t)||s===0&&bo(r,n,t)||o===0&&bo(e,r,n)||a===0&&bo(e,t,n))}function bo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function wo(r){return r>0?1:r<0?-1:0}function vv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&_d(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Nr(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function yv(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function bd(r,t){let e=new Nc(r.i,r.x,r.y),n=new Nc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function Wu(r,t,e,n){let i=new Nc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Br(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Nc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Mv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var Ci=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Xu(t),$u(n,t);let o=t.length;e.forEach(Xu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,$u(n,e[l]);let a=sv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function Xu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function $u(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Jn=class r extends re{constructor(t=new Hn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:_v,_,v=!1,S,E,w,A;p&&(_=p.getSpacedPoints(h),v=!0,f=!1,S=p.computeFrenetFrames(h,!1),E=new I,w=new I,A=new I),f||(x=0,d=0,g=0,m=0);let M=a.extractPoints(c),b=M.shape,T=M.holes;if(!Ci.isClockWise(b)){b=b.reverse();for(let it=0,mt=T.length;it<mt;it++){let U=T[it];Ci.isClockWise(U)&&(T[it]=U.reverse())}}let k=Ci.triangulateShape(b,T),N=b;for(let it=0,mt=T.length;it<mt;it++){let U=T[it];b=b.concat(U)}function H(it,mt,U){return mt||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(mt,U)}let B=b.length,X=k.length;function O(it,mt,U){let Wt,gt,kt,_t=it.x-mt.x,Zt=it.y-mt.y,Lt=U.x-it.x,D=U.y-it.y,R=_t*_t+Zt*Zt,J=_t*D-Zt*Lt;if(Math.abs(J)>Number.EPSILON){let ot=Math.sqrt(R),ct=Math.sqrt(Lt*Lt+D*D),nt=mt.x-Zt/ot,Ut=mt.y+_t/ot,bt=U.x-D/ct,St=U.y+Lt/ct,oe=((bt-nt)*D-(St-Ut)*Lt)/(_t*D-Zt*Lt);Wt=nt+_t*oe-it.x,gt=Ut+Zt*oe-it.y;let xt=Wt*Wt+gt*gt;if(xt<=2)return new tt(Wt,gt);kt=Math.sqrt(xt/2)}else{let ot=!1;_t>Number.EPSILON?Lt>Number.EPSILON&&(ot=!0):_t<-Number.EPSILON?Lt<-Number.EPSILON&&(ot=!0):Math.sign(Zt)===Math.sign(D)&&(ot=!0),ot?(Wt=-Zt,gt=_t,kt=Math.sqrt(R)):(Wt=_t,gt=Zt,kt=Math.sqrt(R/2))}return new tt(Wt/kt,gt/kt)}let $=[];for(let it=0,mt=N.length,U=mt-1,Wt=it+1;it<mt;it++,U++,Wt++)U===mt&&(U=0),Wt===mt&&(Wt=0),$[it]=O(N[it],N[U],N[Wt]);let Q=[],lt,P=$.concat();for(let it=0,mt=T.length;it<mt;it++){let U=T[it];lt=[];for(let Wt=0,gt=U.length,kt=gt-1,_t=Wt+1;Wt<gt;Wt++,kt++,_t++)kt===gt&&(kt=0),_t===gt&&(_t=0),lt[Wt]=O(U[Wt],U[kt],U[_t]);Q.push(lt),P=P.concat(lt)}for(let it=0;it<x;it++){let mt=it/x,U=d*Math.cos(mt*Math.PI/2),Wt=g*Math.sin(mt*Math.PI/2)+m;for(let gt=0,kt=N.length;gt<kt;gt++){let _t=H(N[gt],$[gt],Wt);rt(_t.x,_t.y,-U)}for(let gt=0,kt=T.length;gt<kt;gt++){let _t=T[gt];lt=Q[gt];for(let Zt=0,Lt=_t.length;Zt<Lt;Zt++){let D=H(_t[Zt],lt[Zt],Wt);rt(D.x,D.y,-U)}}}let st=g+m;for(let it=0;it<B;it++){let mt=f?H(b[it],P[it],st):b[it];v?(w.copy(S.normals[0]).multiplyScalar(mt.x),E.copy(S.binormals[0]).multiplyScalar(mt.y),A.copy(_[0]).add(w).add(E),rt(A.x,A.y,A.z)):rt(mt.x,mt.y,0)}for(let it=1;it<=h;it++)for(let mt=0;mt<B;mt++){let U=f?H(b[mt],P[mt],st):b[mt];v?(w.copy(S.normals[it]).multiplyScalar(U.x),E.copy(S.binormals[it]).multiplyScalar(U.y),A.copy(_[it]).add(w).add(E),rt(A.x,A.y,A.z)):rt(U.x,U.y,u/h*it)}for(let it=x-1;it>=0;it--){let mt=it/x,U=d*Math.cos(mt*Math.PI/2),Wt=g*Math.sin(mt*Math.PI/2)+m;for(let gt=0,kt=N.length;gt<kt;gt++){let _t=H(N[gt],$[gt],Wt);rt(_t.x,_t.y,u+U)}for(let gt=0,kt=T.length;gt<kt;gt++){let _t=T[gt];lt=Q[gt];for(let Zt=0,Lt=_t.length;Zt<Lt;Zt++){let D=H(_t[Zt],lt[Zt],Wt);v?rt(D.x,D.y+_[h-1].y,_[h-1].x+U):rt(D.x,D.y,u+U)}}}F(),Z();function F(){let it=i.length/3;if(f){let mt=0,U=B*mt;for(let Wt=0;Wt<X;Wt++){let gt=k[Wt];pt(gt[2]+U,gt[1]+U,gt[0]+U)}mt=h+x*2,U=B*mt;for(let Wt=0;Wt<X;Wt++){let gt=k[Wt];pt(gt[0]+U,gt[1]+U,gt[2]+U)}}else{for(let mt=0;mt<X;mt++){let U=k[mt];pt(U[2],U[1],U[0])}for(let mt=0;mt<X;mt++){let U=k[mt];pt(U[0]+B*h,U[1]+B*h,U[2]+B*h)}}n.addGroup(it,i.length/3-it,0)}function Z(){let it=i.length/3,mt=0;at(N,mt),mt+=N.length;for(let U=0,Wt=T.length;U<Wt;U++){let gt=T[U];at(gt,mt),mt+=gt.length}n.addGroup(it,i.length/3-it,1)}function at(it,mt){let U=it.length;for(;--U>=0;){let Wt=U,gt=U-1;gt<0&&(gt=it.length-1);for(let kt=0,_t=h+x*2;kt<_t;kt++){let Zt=B*kt,Lt=B*(kt+1),D=mt+Wt+Zt,R=mt+gt+Zt,J=mt+gt+Lt,ot=mt+Wt+Lt;Tt(D,R,J,ot)}}}function rt(it,mt,U){l.push(it),l.push(mt),l.push(U)}function pt(it,mt,U){Bt(it),Bt(mt),Bt(U);let Wt=i.length/3,gt=y.generateTopUV(n,i,Wt-3,Wt-2,Wt-1);Yt(gt[0]),Yt(gt[1]),Yt(gt[2])}function Tt(it,mt,U,Wt){Bt(it),Bt(mt),Bt(Wt),Bt(mt),Bt(U),Bt(Wt);let gt=i.length/3,kt=y.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);Yt(kt[0]),Yt(kt[1]),Yt(kt[3]),Yt(kt[1]),Yt(kt[2]),Yt(kt[3])}function Bt(it){i.push(l[it*3+0]),i.push(l[it*3+1]),i.push(l[it*3+2])}function Yt(it){s.push(it.x),s.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return bv(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Yo[i.type]().fromJSON(i)),new r(n,t.options)}},_v={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new tt(s,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],g=t[i*3+2],m=t[s*3],x=t[s*3+1],p=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(f,1-g),new tt(m,1-p)]:[new tt(a,1-l),new tt(h,1-u),new tt(d,1-g),new tt(x,1-p)]}};function bv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Li=class r extends re{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new I,g=new tt;for(let m=0;m<=i;m++){for(let x=0;x<=n;x++){let p=s+x/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let m=0;m<i;m++){let x=m*(n+1);for(let p=0;p<n;p++){let y=p+x,_=y,v=y+n+1,S=y+n+2,E=y+1;a.push(_,v,E),a.push(v,S,E)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Se=class r extends re{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],g=[],m=[],x=[];for(let p=0;p<=n;p++){let y=[],_=p/n,v=0;p===0&&o===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let S=0;S<=e;S++){let E=S/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),m.push(f.x,f.y,f.z),x.push(E+v,1-_),y.push(c++)}h.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let _=h[p][y+1],v=h[p][y],S=h[p+1][y],E=h[p+1][y+1];(p!==0||o>0)&&d.push(_,v,E),(p!==n-1||l<Math.PI)&&d.push(v,S,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var mi=class r extends re{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let m=g/i*s,x=d/n*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(m),u.y=(t+e*Math.cos(x))*Math.sin(m),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let m=(i+1)*d+g-1,x=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(m,x,y),o.push(x,p,y)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ko=class r extends re{constructor(t=new qs(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new tt,h=new I,u=[],f=[],d=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(f,3)),this.setAttribute("uv",new Xt(d,2));function m(){for(let _=0;_<e;_++)x(_);x(s===!1?e:0),y(),p()}function x(_){h=t.getPointAt(_/e,h);let v=o.normals[_],S=o.binormals[_];for(let E=0;E<=i;E++){let w=E/i*Math.PI*2,A=Math.sin(w),M=-Math.cos(w);l.x=M*v.x+A*S.x,l.y=M*v.y+A*S.y,l.z=M*v.z+A*S.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let _=1;_<=e;_++)for(let v=1;v<=i;v++){let S=(i+1)*(_-1)+(v-1),E=(i+1)*_+(v-1),w=(i+1)*_+v,A=(i+1)*(_-1)+v;g.push(S,E,A),g.push(E,w,A)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=i;v++)c.x=_/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Yo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var jo=class extends _e{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},ft=class extends Yn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=cd,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Di=class extends ft{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Eo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function wv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Ys=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bc=class extends Ys{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nh,endingEnd:Nh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Bh:s=t,a=2*e-n;break;case Hh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Bh:o=t,l=2*n-e;break;case Hh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),m=g*g,x=m*g,p=-f*x+2*f*m-f*g,y=(1+f)*x+(-1.5-2*f)*m+(-.5+f)*g+1,_=(-1-d)*x+(1.5+d)*m+.5*g,v=d*x-d*m;for(let S=0;S!==a;++S)s[S]=p*o[h+S]+y*o[c+S]+_*o[l+S]+v*o[u+S];return s}},Hc=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},Fc=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Fn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Eo(e,this.TimeBufferType),this.values=Eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Eo(t.times,Array),values:Eo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Hc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Po:e=this.InterpolantFactoryMethodDiscrete;break;case uc:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Po;case this.InterpolantFactoryMethodLinear:return uc;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&wv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let m=e[u+g];if(m!==e[f+g]||m!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Fn.prototype.TimeBufferType=Float32Array;Fn.prototype.ValueBufferType=Float32Array;Fn.prototype.DefaultInterpolation=uc;var ss=class extends Fn{constructor(t,e,n){super(t,e,n)}};ss.prototype.ValueTypeName="bool";ss.prototype.ValueBufferType=Array;ss.prototype.DefaultInterpolation=Po;ss.prototype.InterpolantFactoryMethodLinear=void 0;ss.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends Fn{};Oc.prototype.ValueTypeName="color";var Gc=class extends Fn{};Gc.prototype.ValueTypeName="number";var Vc=class extends Ys{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Be.slerpFlat(s,0,o,c-a,o,c,l);return s}},Qo=class extends Fn{InterpolantFactoryMethodLinear(t){return new Vc(this.times,this.values,this.getValueSize(),t)}};Qo.prototype.ValueTypeName="quaternion";Qo.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends Fn{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=Po;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Wc=class extends Fn{};Wc.prototype.ValueTypeName="vector";var Xc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Ev=new Xc,$c=class{constructor(t){this.manager=t!==void 0?t:Ev,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};$c.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zs=class extends He{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},ta=class extends Zs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Sl=new ie,qu=new I,Yu=new I,Hr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;qu.setFromMatrixPosition(t.matrixWorld),e.position.copy(qu),Yu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Yu),e.updateMatrixWorld(),Sl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},qc=class extends Hr{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Fs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Js=class extends Zs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new qc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Zu=new ie,yr=new I,Tl=new I,Yc=class extends Hr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),yr.setFromMatrixPosition(t.matrixWorld),n.position.copy(yr),Tl.copy(n.position),Tl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Tl),n.updateMatrixWorld(),i.makeTranslation(-yr.x,-yr.y,-yr.z),Zu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu)}},os=class extends Zs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Zc=class extends Hr{constructor(){super(new Ws(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ea=class extends Zs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(He.DEFAULT_UP),this.updateMatrix(),this.target=new He,this.shadow=new Zc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ks=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ju(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Ju();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Ju(){return performance.now()}var ph="\\[\\]\\.:\\/",Sv=new RegExp("["+ph+"]","g"),mh="[^"+ph+"]",Tv="[^"+ph.replace("\\.","")+"]",Av=/((?:WC+[\/:])*)/.source.replace("WC",mh),Rv=/(WCOD+)?/.source.replace("WCOD",Tv),Cv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mh),Pv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mh),Iv=new RegExp("^"+Av+Rv+Cv+Pv+"$"),zv=["material","materials","bones","map"],Jc=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Sv,"")}static parseTrackName(t){let e=Iv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);zv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=Jc;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cy=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kc);var xh=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function We(r,t){return r*1e5+t}var oa=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let l=0;l<a.length;l++){let c=a[l];e.set(c,(e.get(c)||0)+(l===0||l===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,l,c,h,u,f,d]=o,g=0;for(let m=1;m<f.length;m++)if(e.get(f[m])>1||m===f.length-1){let x=f.slice(g,m+1);x.length>=2&&this._addEdge(x,a,l,c,h,u,i),g=m}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let l=t.length,c=new Float32Array(l*2),h=new Float32Array(l),u=0;for(let d=0;d<l;d++)c[d*2]=this.P[t[d]*2],c[d*2+1]=this.P[t[d]*2+1],d>0&&(u+=Math.hypot(c[d*2]-c[d*2-2],c[d*2+1]-c[d*2-1])),h[d]=u;if(u<.5)return;let f={id:this.edges.length,ids:t,pts:c,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[l-1]),signals:[]};this.edges.push(f)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let l=t.cum,c=t.pts,h=0,u=l.length-1;for(;u-h>1;){let v=h+u>>1;l[v]<=a?h=v:u=v}let f=l[u]-l[h]||1e-6,d=(a-l[h])/f,g=c[h*2],m=c[h*2+1],x=c[u*2],p=c[u*2+1],y=(x-g)/f,_=(p-m)/f;return e&&(y=-y,_=-_),s.x=g+(x-g)*d-_*i,s.z=m+(p-m)*d+y*i,s.dx=y,s.dz=_,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,l=Math.min(i[s*2+1],i[s*2+3])-n.w/2,c=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(l/t);u<=Math.floor(c/t);u++){let f=We(h,u),d=e.get(f);d||e.set(f,d=[]),d.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),l=Math.floor(e/s),c=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let f=l-o;f<=l+o;f++){let d=this.roadGrid.get(We(u,f));if(d)for(let g=0;g<d.length;g+=2){let m=this.edges[d[g]],x=d[g+1];if(i&&!i(m))continue;let p=m.pts,y=p[x*2],_=p[x*2+1],v=p[x*2+2],S=p[x*2+3],E=v-y,w=S-_,A=E*E+w*w||1e-6,M=((t-y)*E+(e-_)*w)/A;M=M<0?0:M>1?1:M;let b=y+E*M,T=_+w*M,z=(t-b)**2+(e-T)**2;if(z<h){h=z;let k=Math.sqrt(A);c={e:m,i:x,t:M,x:b,z:T,dist:Math.sqrt(z),s:m.cum[x]+M*k,dx:E/k,dz:w/k}}}}return c&&(c.lat=(t-c.x)*-c.dz+(e-c.z)*c.dx),c}_indexChunks(t){let n=this.chunks=new Map,i=(a,l)=>{let c=Math.floor(a/400),h=Math.floor(l/400),u=We(c,h),f=n.get(u);return f||n.set(u,f={key:u,cx:c,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[],signs:[]}),f};this.globalAreas=[],this.buildings=t.buildings.map((a,l)=>{let c=a[3],h=c.length/2,u=new Float32Array(c.length),f=0,d=0,g=1e9,m=-1e9,x=1e9,p=-1e9,y=0,_=0;for(let S=0;S<h;S++)y+=c[S*2],_+=c[S*2+1],u[S*2]=y*.1,u[S*2+1]=_*.1;for(let S=0;S<h;S++){let E=u[S*2],w=u[S*2+1];f+=E,d+=w,E<g&&(g=E),E>m&&(m=E),w<x&&(x=w),w>p&&(p=w)}let v={i:l,kind:a[0],h:a[1],minH:a[2],pts:u,cx:f/h,cz:d/h,x0:g,x1:m,z0:x,z1:p,name:a[4]||null,colour:a[5]||null,roofColour:a[6]||null,roofShape:a[7]||null};return i(v.cx,v.cz).buildings.push(v),v});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let l=Math.floor(a.x0/s);l<=Math.floor(a.x1/s);l++)for(let c=Math.floor(a.z0/s);c<=Math.floor(a.z1/s);c++){let h=We(l,c),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let l=Math.floor(a.pts.length/4)*2;i(a.pts[l],a.pts[l+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let l=a[1],c=new Float32Array(l.length),h=0,u=0,f=1e9,d=-1e9,g=1e9,m=-1e9;for(let p=0;p<l.length;p++)c[p]=l[p]*.1;for(let p=0;p<l.length/2;p++){let y=c[p*2],_=c[p*2+1];h+=y,u+=_,y<f&&(f=y),y>d&&(d=y),_<g&&(g=_),_>m&&(m=_)}let x={type:a[0],pts:c,x0:f,x1:d,z0:g,z1:m};d-f>1500||m-g>1500?this.globalAreas.push(x):i(h/(l.length/2),u/(l.length/2)).areas.push(x)}this.areaList=t.areas;for(let a of t.lines){let[l,c,h]=a,u=h.length/2;for(let f=0;f<u-1;f+=23){let d=Math.min(u,f+24),g=new Float32Array((d-f)*2);for(let m=0;m<g.length;m++)g[m]=h[f*2+m]*.1;i(g[0],g[1]).lines.push({type:l,w:c,pts:g})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);for(let a of t.signs||[])i(a[0]*.1,a[1]*.1).signs.push({x:a[0]*.1,z:a[1]*.1,name:a[2],kind:a[3]});this.busStopList=t.busstops.map(a=>[a[0]*.1,a[1]*.1]),this.osmRoutes=(t.routes||[]).map(a=>({ref:a[0],name:a[1],type:a[2],pts:a[3].map(l=>l*.1),stops:a[4].map(l=>l*.1)})),this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(l=>l*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(l=>l*.1)})),this.stands=t.stands.map(a=>a.map(l=>l*.1)),this.jet=t.jet.map(a=>a.map(l=>l*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get(We(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&er(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let l of t)e.set(l[0]+","+l[1],l);let n=this.raw,i=new Set;for(let l=0;l<n.pts.length/2;l++)e.has(n.pts[l*2]+","+n.pts[l*2+1])&&i.add(l);let s=[...i].map(l=>({i:l,x:this.P[l*2],z:this.P[l*2+1],c:-1})),o=this.signalClusters=[];for(let l of s){if(l.c>=0)continue;let c={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[l];for(l.c=c.id;h.length;){let u=h.pop();c.members.push(u),c.x+=u.x,c.z+=u.z,c.n++;for(let f of s)f.c<0&&Math.hypot(f.x-u.x,f.z-u.z)<45&&(f.c=c.id,h.push(f))}c.x/=c.n,c.z/=c.n,o.push(c)}let a=new Map;for(let l of s)a.set(l.i,o[l.c]);this.controls=[];for(let l of this.edges)for(let c=0;c<l.ids.length;c++){let h=a.get(l.ids[c]);if(h)for(let u of l.ow?[0]:[0,1]){let f=u?l.len-l.cum[c]:l.cum[c],d=u===0&&c===l.ids.length-1||u===1&&c===0;if(u===0&&c===0||u===1&&c===l.ids.length-1)continue;let m=Math.max(1,f-(d?4+(u?l.na:l.nb).maxW*.5:2.5)),x={};this.sample(l,u,Math.max(0,m-3),0,x);let p=Math.atan2(x.dz,x.dx);h.axis===null&&(h.axis=p);let y=Math.abs(Math.cos(p-h.axis)),_={e:l,dir:u,de:l.id*2+u,stop:m,cluster:h,group:y>.707?0:1,ang:p,x:0,z:0};l.signals.some(v=>v.dir===u&&v.cluster===h)||(l.signals.push(_),h.controls.push(_),this.controls.push(_))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,y=>y.cls<=5),o=this.nearestRoad(n,i,400,y=>y.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let l=new Set([o.e.na.id,o.e.nb.id]),c=new gh,h=new Map,u=new Map;for(let y of a){let _=Math.hypot(y.x-t,y.z-e);h.set(y.id,_),c.push(_+Math.hypot(y.x-n,y.z-i),y)}let f=null,d=0;for(;c.size&&d++<2e5;){let y=c.pop();if(l.has(y.id)){f=y;break}let _=h.get(y.id);for(let v of y.out){let S=this.edges[v>>1];if(S.cls>5)continue;let E=v&1?S.na:S.nb,w=S.len*(1+S.cls*.08),A=_+w;A<(h.get(E.id)??1e18)&&(h.set(E.id,A),u.set(E.id,{n:y,de:v}),c.push(A+Math.hypot(E.x-n,E.z-i),E))}}if(!f)return null;let g=[o.x,o.z],m=f,x=[];for(;u.has(m.id);){let y=u.get(m.id);x.push(y.de),m=y.n}x.reverse();let p=[t,e,s.x,s.z];for(let y of x){let v=this.edges[y>>1].pts,S=v.length/2;if(y&1)for(let E=S-1;E>=0;E--)p.push(v[E*2],v[E*2+1]);else for(let E=0;E<S;E++)p.push(v[E*2],v[E*2+1])}return p.push(...g),p}};function er(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],l=e[s*2+1],c=e[o*2],h=e[o*2+1];l>t!=h>t&&r<(c-a)*(t-l)/(h-l)+a&&(n=!n)}return n}var gh=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let l=o*2+1,c=l+1,h=o,u=i;if(l<a&&t[l]<u&&(h=l,u=t[l]),c<a&&t[c]<u&&(h=c),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function En(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var sn={uNight:{value:0},uTime:{value:0},uSnow:{value:0}};function ki(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function Ui(r,t=!0,e=!0){let n=new Re(r);return t&&(n.wrapS=n.wrapT=Ar),n.anisotropy=8,e&&(n.colorSpace=Me),n.needsUpdate=!0,n}function Ni(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),l=a.data;for(let c=0;c<e;c+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let f=0;f<o;f++)for(let d=0;d<o;d++){let g=((c+f)*t+h+d)*4;l[g]=Math.max(0,Math.min(255,n[0]+u)),l[g+1]=Math.max(0,Math.min(255,n[1]+u)),l[g+2]=Math.max(0,Math.min(255,n[2]+u)),l[g+3]=255}}r.putImageData(a,0,0)}function wd(){let r=En(42),t={};{let e=ki(512),n=e.getContext("2d");Ni(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=Ui(e)}{let e=ki(512),n=e.getContext("2d");Ni(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=Ui(e)}{let e=ki(512),n=e.getContext("2d");Ni(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=Ui(e)}{let e=ki(512),n=e.getContext("2d");Ni(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=Ui(e)}{let e=ki(512),n=e.getContext("2d");Ni(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=Ui(e)}{let e=ki(512),n=e.getContext("2d");Ni(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=Ui(e)}{let e=ki(256),n=e.getContext("2d");Ni(n,256,256,[60,90,100],18,r,2),t.water=Ui(e)}{let e=ki(256),n=e.getContext("2d");Ni(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=Ui(e,!0,!1)}return t}function Ed(r){let t=new ft({vertexColors:!0,roughness:.88,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=sn.uNight,e.uniforms.uSnow=sn.uSnow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.62,0.30), vec3(0.75,0.82,1.0), step(0.86,hh)) * (0.22 + 0.5*fract(hh*7.13));`)},t}function gi(r,t,e,n=16777215,i=.95,s=.9){let o=new ft({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return o.onBeforeCompile=a=>{a.uniforms.uSnow=sn.uSnow,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), snowM * 0.85);`)},o}function Sd(){let r=new ft({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var hn=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,l,c,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,l,c),h)for(let u in h){let f=h[u],d=this.extra[u].data;for(let g=0;g<f.length;g++)d.push(f[g])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new re;t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("normal",new Xt(this.n,3)),t.setAttribute("color",new Xt(this.c,3));for(let e in this.extra)t.setAttribute(e,new Xt(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new Gs(this.i,1):new Os(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function vh(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let m=Math.hypot(i,s)||1;i/=m,s/=m}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let m=Math.hypot(o,a)||1;o/=m,a/=m}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let l=i+o,c=s+a,h=Math.hypot(l,c);h<1e-4?(l=o,c=a):(l/=h,c/=h);let u=-c,f=l,d=u*-a+f*o,g=Math.min(3,1/Math.max(.33,d));e[n*3]=u,e[n*3+1]=f,e[n*3+2]=g}return e}function yh(r,t,e,n){let i=[],s=r.length/2,o=c=>{let h=0;for(;h<s-2&&t[h+1]<c;)h++;let u=t[h+1]-t[h]||1e-6,f=Math.max(0,Math.min(1,(c-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*f,r[h*2+1]+(r[h*2+3]-r[h*2+1])*f]},a=o(e);i.push(a[0],a[1]);for(let c=1;c<s-1;c++)t[c]>e&&t[c]<n&&i.push(r[c*2],r[c*2+1]);let l=o(n);return i.push(l[0],l[1]),i}function Td(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function gn(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let l=vh(t),c=0,h=-1,u=-1;for(let f=0;f<a;f++){f>0&&(c+=Math.hypot(t[f*2]-t[f*2-2],t[f*2+1]-t[f*2-1]));let d=l[f*3],g=l[f*3+1],m=l[f*3+2],x=t[f*2],p=t[f*2+1],y=r.v(x+d*e*m,i,p+g*e*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,0)}),_=r.v(x+d*n*m,i,p+g*n*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,1)});h>=0&&r.quad(h,u,_,y),h=y,u=_}}function Ad(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),l=-1,c=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,f=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);c>=0?r.tri(a,c,f):l=f,c=f}r.tri(a,c,l)}function jn(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function Mh(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new re,c=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Rd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let m=0;m<o[h].length;++m)d.push(o[h][m][f]);let g=Rd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Rd(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new ge(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let g=0;g<e;g++){let m=h.getComponent(f,g);a.setComponent(f+u,g,m)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function zt(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new wt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ge(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function un(r){let t=Mh(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function Pd(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=En(77);e.fillStyle="#5a4634",e.fillRect(0,0,512,512);for(let o=0;o<900;o++){let a=50+n()*60;e.fillStyle=`rgba(${a+20},${a},${a*.7},0.6)`,e.fillRect(n()*512,n()*512,2+n()*4,20+n()*60)}e.clearRect(512,0,512,512);let i=(o,a,l,c,h)=>{e.save(),e.translate(o,a),e.rotate(c);let u=90+h*110;e.fillStyle=`rgb(${Math.round(u*.55)},${Math.round(u)},${Math.round(u*.35)})`,e.beginPath(),e.ellipse(0,0,l,l*.45,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,50,20,0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(-l,0),e.lineTo(l,0),e.stroke(),e.restore()};for(let o=0;o<3800;o++){let a=n()*Math.PI*2,l=Math.sqrt(n())*512*.47,c=512+512/2+Math.cos(a)*l,h=512/2+Math.sin(a)*l;i(c,h,7+n()*9,n()*6.28,.25+.75*n()*(1-l/512*.9))}e.strokeStyle="rgba(70,55,40,0.9)",e.lineWidth=3;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(512+512/2,512/2),e.lineTo(512+512/2+(n()-.5)*512*.8,512/2+(n()-.5)*512*.8),e.stroke();let s=new Re(t);return s.colorSpace=Me,s.anisotropy=4,s.generateMipmaps=!0,s}function aa(r){let t=Mh(r.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t}function la(r,t,e,n=7,i=0){let s=new Ht(r,t,e,n,3,!0).translate(0,e/2,0),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+i*o.getY(l)/e),a.setXY(l,a.getX(l)*.45,a.getY(l)*2%1);return Id(s,16777215)}function Cd(r,t,e){let n=new I().subVectors(t,r),i=n.length(),s=new Ht(e*.6,e,i,5,1,!0),o=s.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a)*.45,o.getY(a));return s.translate(0,i/2,0),s.applyQuaternion(new Be().setFromUnitVectors(new I(0,1,0),n.normalize())),s.translate(r.x,r.y,r.z),Id(s,16777215)}function Id(r,t,e=1){let n=new wt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ge(s,3)),r}function ca(r,t,e,n,i,s,o,a,l,c,h=!1){let u=[],f=[],d=[],g=[],m=new wt(c),x=new Be,p=new tn,y=new I;for(let A=0;A<a;A++){let M,b,T;for(;;){M=r()*2-1,b=r()*2-1,T=r()*2-1;let Q=M*M+b*b+T*T;if(Q<=1&&Q>.15)break}if(h){let Q=1-(b+1)/2;M*=.25+Q,T*=.25+Q}let z=t+M*i,k=e+b*s,N=n+T*o,H=l*(.75+r()*.5);p.set(r()*Math.PI,r()*Math.PI,r()*Math.PI),x.setFromEuler(p);let B=[[-1,-1],[1,-1],[1,1],[-1,1]],X=new I(M,b*.7+.25,T).normalize(),O=.55+.55*((b+1)/2)*(.6+.4*Math.sqrt(M*M+T*T)),$=u.length/3;for(let[Q,lt]of B){y.set(Q*H/2,lt*H/2,0).applyQuaternion(x),u.push(z+y.x,k+y.y,N+y.z),f.push(X.x,X.y,X.z),d.push(.5+(Q+1)/4,(lt+1)/2);let P=.9+r()*.2;g.push(m.r*O*P,m.g*O*P,m.b*O*P)}}let _=[],v=[],S=[],E=[];for(let A=0;A<a;A++)for(let M of[0,1,2,0,2,3]){let b=A*4+M;_.push(u[b*3],u[b*3+1],u[b*3+2]),v.push(f[b*3],f[b*3+1],f[b*3+2]),S.push(d[b*2],d[b*2+1]),E.push(g[b*3],g[b*3+1],g[b*3+2])}let w=new re;return w.setAttribute("position",new Xt(_,3)),w.setAttribute("normal",new Xt(v,3)),w.setAttribute("uv",new Xt(S,2)),w.setAttribute("color",new Xt(E,3)),w}function ha(r){return r.attributes.uv1&&r.deleteAttribute("uv1"),r}function _h(r=0){let t=En(11+r),e=r?.28:1,n=r?1.35:1,i=(o,a,l)=>new I(o,a,l),s=[];{let o=[la(.16,.28,3.6,7,.15)];if(!r)for(let[a,l]of[[.4,3.2],[2.4,3.4],[4.3,3]])o.push(Cd(i(0,l,0),i(Math.cos(a)*1.8,l+1.8,Math.sin(a)*1.8),.1));o.push(ca(t,.2,5.6,0,3,2.3,3,Math.round(70*e),2.1*n,6130234)),s.push(aa(o.map(ha)))}{let o=[la(.15,.3,4,6)];o.push(ca(t,0,10,0,1.5,7.5,1.5,Math.round(80*e),1.8*n,5603124)),s.push(aa(o.map(ha)))}{let o=[la(.12,.24,7,6)];o.push(ca(t,0,5,0,2.6,4.8,2.6,Math.round(70*e),1.6*n,3826768,!0)),s.push(aa(o.map(ha)))}{let o=[la(.24,.42,3.4,8,-.1)];if(!r)for(let[a,l]of[[.9,3],[3.1,3.2],[5,2.9],[2,3.6]])o.push(Cd(i(0,l,0),i(Math.cos(a)*2.4,l+2.2,Math.sin(a)*2.4),.14));o.push(ca(t,0,6.6,0,3.8,2.9,3.8,Math.round(95*e),2.4*n,5077552)),s.push(aa(o.map(ha)))}return s}function zd(){return _h(1)}function Ld(){let r=zt(new Ht(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=zt(new Mt(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=zt(new Mt(.35,.14,.7).translate(0,8.35,-2.1),3948354);return un([r,t,e])}function Dd(){return zt(new Mt(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function kd(){let r=zt(new Ht(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=zt(new Mt(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(zt(new Mt(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=zt(new Mt(.44,1.15,.02).translate(0,3.5,-.16),14540253);return un([r,t,n,...e])}function Ud(r){return zt(new zi(.12,12).translate(0,3.83-r*.33,.155),16777215)}function Nd(){return un([zt(new Mt(1.8,.06,.45).translate(0,.45,0),8017460),zt(new Mt(1.8,.4,.05).translate(0,.72,-.2),8017460),zt(new Mt(.06,.45,.45).translate(-.8,.22,0),3355443),zt(new Mt(.06,.45,.45).translate(.8,.22,0),3355443)])}function Bd(){return un([zt(new Mt(3.6,.08,1.6).translate(0,2.5,0),2973324),zt(new Mt(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),zt(new Mt(.08,2.5,1.5).translate(1.75,1.25,0),8952234),zt(new Mt(3.5,1.8,.05).translate(0,1.4,-.72),10467012),zt(new Mt(3,.08,.4).translate(0,.5,-.5),5592405)])}var Bi={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]};function Lv(){let r=document.createElement("canvas");r.width=2048,r.height=1024;let t=r.getContext("2d");[["#d8261c","#ffcf3a","\u041D\u0410\u041D & \u0421\u0410\u041C\u0421\u0410","\u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u0438\u0437 \u0442\u0430\u043D\u0434\u044B\u0440\u0430 \xB7 24/7"],["#1667b8","#ffffff","\u0418\u0421\u0421\u042B\u041A-\u041A\u04E8\u041B \u041A\u04AE\u0422\u04E8\u0422!","\u0442\u0443\u0440\u044B \u043D\u0430 \u0418\u0441\u0441\u044B\u043A-\u041A\u0443\u043B\u044C \u043E\u0442 2 990 \u0441\u043E\u043C"],["#f2c200","#141414","\u0411\u0418\u0428\u041A\u0415\u041A \u0422\u0410\u041A\u0421\u0418","\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \xB7 1515"],["#2a7a3a","#fff4d0","\u041A\u042B\u041C\u042B\u0417 \xB7 \u041C\u0410\u041A\u0421\u042B\u041C","\u0410\u043B\u0430-\u0422\u043E\u043E \u0434\u0430\u0441\u0442\u043E\u0440\u043A\u043E\u043D\u0443"],["#0e2a4a","#5fd4ff","\u0428\u0423\u041C\u041A\u0410\u0420 \u0411\u0410\u041D\u041A","\u043A\u0440\u0435\u0434\u0438\u0442 \u043E\u043D\u043B\u0430\u0439\u043D \u0437\u0430 5 \u043C\u0438\u043D\u0443\u0442"],["#ffffff","#c8102e","\u0416\u0410\u04A2\u042B \u04AE\u0419\u041B\u04E8\u0420","\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \xB7 \u0438\u043F\u043E\u0442\u0435\u043A\u0430 4%"],["#c8102e","#ffffff","\u0421\u0410\u041A\u0422\u0410\u041D! \u0416\u041E\u041B\u0414\u041E \u042D\u0422\u0418\u042F\u0422 \u0411\u041E\u041B","\u0431\u0435\u0440\u0435\u0433\u0438\u0442\u0435 \u043F\u0435\u0448\u0435\u0445\u043E\u0434\u043E\u0432 \xB7 60 \u043A\u043C/\u0447"],["#5a2a8a","#ffd84a","TULPAR AIR","\u0411\u0438\u0448\u043A\u0435\u043A \u2708 \u041E\u0448 \u043E\u0442 2 500 \u0441\u043E\u043C"]].forEach(([i,s,o,a],l)=>{let c=l%4*512,h=Math.floor(l/4)*512,u=t.createLinearGradient(c,h,c+512,h+512);u.addColorStop(0,i),u.addColorStop(1,Dv(i,-40)),t.fillStyle=u,t.fillRect(c,h,512,512),t.fillStyle="rgba(255,255,255,0.08)",t.beginPath(),t.arc(c+420,h+120,160,0,7),t.fill(),t.fillStyle=s,t.textAlign="center",t.textBaseline="middle";let f=64;for(t.font=`900 ${f}px Arial`;t.measureText(o).width>470&&f>30;)f-=4,t.font=`900 ${f}px Arial`;t.fillText(o,c+256,h+220),t.font="600 30px Arial",t.fillText(a,c+256,h+310),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(c,h+470,512,42),t.fillStyle="#fff",t.font="600 22px Arial",t.fillText("bishkek \xB7 reklama",c+256,h+491)});let n=new Re(r);return n.colorSpace=Me,n.anisotropy=4,n}function Dv(r,t){let e=parseInt(r.slice(1),16),n=Math.max(0,Math.min(255,(e>>16)+t)),i=Math.max(0,Math.min(255,(e>>8&255)+t)),s=Math.max(0,Math.min(255,(e&255)+t));return`rgb(${n},${i},${s})`}var kv={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},Uv={0:1/140,2:1/45,7:1/120,1:0},ua=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new qt,t.add(this.root),this.mat={building:Ed(n),road:gi(n,n.asphalt,7,16777215,.92,.1),mark:Sd(),paving:Object.assign(gi(n,n.paving,3.2,12104876,.9,.75),{side:we}),grass:gi(n,n.grass,6,16777215,1),dirt:gi(n,n.dirt,7,16777215,1),field:gi(n,n.field,14,16777215,1),asphalt:gi(n,n.asphalt,7,16777215,.92,.5),concrete:gi(n,n.concrete,20,13158596,.85,.6),water:new ft({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:(()=>{let i=new ft({vertexColors:!0,roughness:.85,map:Pd(),alphaTest:.42,side:we});return i.onBeforeCompile=s=>{s.uniforms.uSnow=sn.uSnow,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow;`).replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;").replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), uSnow * 0.3);`)},i})(),lamp:new ft({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new ft({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new ft({vertexColors:!0,roughness:.6}),rail:new ft({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=_h(),this.geoTreesLow=zd(),this.geoLamp=Ld(),this.geoLampGlow=Dd(),this.geoBus=Bd(),this.geoBench=Nd(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new Ee(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new ge(n,3));let i=gi(this.T,this.T.dirt,9,11843744,1);this.ground=new Y(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new Y(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),l=Math.floor((i+o)/400),c=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let g=a;g<=l;g++)for(let m=c;m<=h;m++){let x=We(g,m);if(this.live.has(x))continue;let p=this.map.chunks.get(x);if(!p)continue;let y=Math.hypot((g+.5)*400-i,(m+.5)*400-s);y<o&&u.push([y,p])}u.sort((g,m)=>g[0]-m[0]);let f=performance.now();for(let[g,m]of u)if(this._buildChunk(m),!n&&performance.now()-f>(this.radius>2e3?14:this.buildBudget||8))break;let d=this.farRadius||0;if(d>o){if(this.far||(this.far=new Map,this.farRoot=new qt,this.scene.add(this.farRoot)),!this._farScan||performance.now()-this._farScan>400){this._farScan=performance.now();let m=Math.floor((i-d)/400),x=Math.floor((i+d)/400),p=Math.floor((s-d)/400),y=Math.floor((s+d)/400),_=[];for(let v=m;v<=x;v++)for(let S=p;S<=y;S++){let E=We(v,S);if(this.far.has(E))continue;let w=this.map.chunks.get(E);if(!w||!w.buildings.length)continue;let A=Math.hypot((v+.5)*400-i,(S+.5)*400-s);A<d&&A>o-600&&_.push([A,w])}_.sort((v,S)=>v[0]-S[0]),this._farQueue=_}let g=performance.now();for(;this._farQueue&&this._farQueue.length&&performance.now()-g<(n?50:4);){let[,m]=this._farQueue.shift();this.far.has(m.key)||this._buildFar(m)}for(let[m,x]of this.far){let p=Math.hypot(x.x-i,x.z-s);if(p>d+800){this.farRoot.remove(x.mesh),x.mesh.geometry.dispose(),this.far.delete(m);continue}let y=this.live.get(m);x.mesh.visible=!(y&&y.group.visible)&&p<d+200}}else if(this.far&&this.far.size){for(let g of this.far.values())this.farRoot.remove(g.mesh),g.mesh.geometry.dispose();this.far.clear()}for(let[g,m]of this.live){let x=Math.hypot(m.x-i,m.z-s);if(x>o+900){this._dispose(g,m);continue}m.group.visible=x<o+300,m.detail&&(m.detail.visible=x<650),m.trees&&(m.trees.visible=x<280,m.treesLow.visible=x>=280&&x<1400),m.marks&&(m.marks.visible=x<700)}}_buildFar(t){let e=En(t.key*7+13),n=new hn({aInfo:2,aWin:2});for(let a of t.buildings)!(a.h>=6||(a.x1-a.x0)*(a.z1-a.z0)>160)&&e()<.6||this._building(n,a,e,!1);let i=(t.cx+.5)*400,s=(t.cz+.5)*400;if(n.empty){this.far.set(t.key,{mesh:new qt,x:i,z:s}),this.far.get(t.key).mesh.geometry={dispose(){}};return}let o=new Y(n.build(),this.mat.building);o.matrixAutoUpdate=!1,this.farRoot.add(o),this.far.set(t.key,{mesh:o,x:i,z:s})}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),e.signTex&&(e.signTex.dispose(),e.signMat.dispose()),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),l=Math.floor(Math.min(e,i)/s),c=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=l;u<=c;u++){let f=We(h,u),d=this.collision.get(f);d||this.collision.set(f,d=[]),d.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=En(t.key*7+13),i=new qt,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new hn({aInfo:2,aWin:2});for(let M of t.buildings)this._building(a,M,n,o);if(!a.empty){let M=new Y(a.build(),this.mat.building);M.castShadow=!0,M.receiveShadow=!0,i.add(M)}t.signs.length&&this._signs(t,i,s);let l=new hn,c=new hn,h=new hn({aDash:2}),u=[1,1,1],f=jn(15253568),d=[.92,.92,.9];for(let M of t.edges){let b=.03+(6-M.cls)*.005;gn(l,M.pts,-M.w/2,M.w/2,b,[1,1,1]);let T=M.na.deg>1?M.na.maxW/2+1.5:0,z=M.nb.deg>1?M.nb.maxW/2+1.5:0;if(M.len-T-z<2)continue;let k=yh(M.pts,M.cum,T,M.len-z),N=b+.004,H=(B,X,O=.15,$=d)=>gn(h,k,B-O/2,B+O/2,N,$,Q=>[Q,X]);if(M.cls<=4){if(M.ow)for(let B=1;B<M.lanes;B++)H(-M.w/2+B*3.3,1);else if(M.lanes>=2){H(-.12,0),H(.12,0);for(let B=1;B<M.lanes;B++)H(B*3.3,1),H(-B*3.3,1)}else M.cls<=4&&M.w>=6&&H(0,1);M.cls<=2&&(H(M.w/2-.35,0,.12),H(-M.w/2+.35,0,.12))}for(let B of M.signals){let X={};e.sample(M,B.dir,B.stop,0,X);let O=B.dir?-1:1,$=(M.ow,M.w/2),Q=M.ow?-$:0,lt=$,P=-X.dz,st=X.dx,F=[X.x+P*Q,X.z+st*Q,X.x+P*lt,X.z+st*lt];gn(h,F,-.25,.25,N+.001,d,()=>[0,0])}if(M.cls>=1&&M.cls<=4&&M.w>=5){let B=M.na.deg>1?M.na.maxW/2+2.5:0,X=M.nb.deg>1?M.nb.maxW/2+2.5:0;if(M.len-B-X>3){let O=yh(M.pts,M.cum,B,M.len-X),$=M.cls<=2?3.4:2.6;for(let Q of[-1,1]){let lt=Q>0?M.w/2:-M.w/2-$,P=Q>0?M.w/2+$:-M.w/2;gn(c,O,lt,P,.15,[1,1,1]),this._curb(c,O,Q>0?M.w/2:-M.w/2,Q)}}}}for(let M of t.nodes){let b=.03+M.top*.005+.002;Ad(l,M.x,M.z,M.maxW/2*1.08,b,[1,1,1],16)}for(let[M,b]of t.crossings){let T=e.nearestRoad(M,b,4);if(!T||T.e.cls>4||T.e.w<5)continue;let z=.03+(6-T.e.cls)*.005+.006,k=-T.dz,N=T.dx,H=T.e.w/2,B=[T.x-k*H,T.z-N*H,T.x+k*H,T.z+N*H];gn(h,B,-2,2,z,d,X=>[X*2,2])}if(!l.empty){let M=new Y(l.build(),this.mat.road);M.receiveShadow=!0,i.add(M)}if(!c.empty){let M=new Y(c.build(),this.mat.paving);M.receiveShadow=!0,i.add(M),s.detail=M}if(!h.empty){let M=new Y(h.build(),this.mat.mark);M.receiveShadow=!0,i.add(M),s.marks=M}let g={},m=[[],[],[],[]];for(let M of t.areas)this._area(g,M,n,m);for(let M of t.lines)this._line(g,M,n,m);for(let M in g){let b=new Y(g[M].build(),this.mat[M]);b.receiveShadow=!0,i.add(b)}let x=[];for(let M of t.edges){if(M.cls<1||M.cls>4)continue;let b=M.cls<=2?9:11,T=M.w/2+(M.cls<=2?4.2:3.4);for(let z=6+n()*5;z<M.len-6;z+=b+n()*5)for(let k of[-1,1]){if(n()<(M.cls<=3?.18:.4))continue;let N={};if(e.sample(M,0,z,T*k,N),this._blocked(N.x,N.z,M,2.2))continue;let H=M.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;m[H].push(N.x,N.z,.75+n()*.5,n()*6.28)}if(M.cls<=3)for(let z=10;z<M.len-8;z+=34)for(let k of M.cls<=1?[-1,1]:[1]){let N={};if(e.sample(M,0,z,(M.w/2+.6)*k,N),this._blocked(N.x,N.z,M,.8))continue;let H=Math.atan2(-N.dz*k,N.dx*k);x.push(N.x,N.z,H)}}for(let M of t.trees)m[n()<.5?0:3].push(M[0],M[1],.8+n()*.4,n()*6.28);let p=new qt,y=new qt,_=new ie,v=new Be,S=new I,E=new I,w=new I(0,1,0),A=new wt;for(let M=0;M<4;M++){let b=m[M],T=b.length/4;if(!T)continue;let z=new Pe(this.geoTrees[M],this.mat.tree,T);for(let N=0;N<T;N++){let H=b[N*4+2];v.setFromAxisAngle(w,b[N*4+3]),_.compose(S.set(b[N*4],0,b[N*4+1]),v,E.set(H,H*(.9+n()*.25),H)),z.setMatrixAt(N,_);let B=.8+n()*.35;z.setColorAt(N,A.setRGB(B*(.9+n()*.25),B,B*(.85+n()*.2)))}z.castShadow=!0,z.receiveShadow=!0,z.computeBoundingSphere(),p.add(z);let k=new Pe(this.geoTreesLow[M],this.mat.tree,T);k.instanceMatrix.copy(z.instanceMatrix),k.instanceColor=z.instanceColor,k.castShadow=!0,k.computeBoundingSphere(),y.add(k)}if(i.add(p,y),s.trees=p,s.treesLow=y,x.length){let M=x.length/3,b=new Pe(this.geoLamp,this.mat.lamp,M),T=new Pe(this.geoLampGlow,this.mat.lampGlow,M);for(let z=0;z<M;z++)v.setFromAxisAngle(w,x[z*3+2]),_.compose(S.set(x[z*3],0,x[z*3+1]),v,E.set(1,1,1)),b.setMatrixAt(z,_),T.setMatrixAt(z,_);b.castShadow=!0,b.computeBoundingSphere(),T.computeBoundingSphere(),i.add(b,T)}if(this._trolley(t,i),this._billboards(t,i,n),t.busstops.length){let M=[];for(let[b,T]of t.busstops){let z=e.nearestRoad(b,T,25,O=>O.cls<=4);if(!z)continue;let k=z.lat>=0?1:-1,N=z.e.w/2+2.2,H=z.x+-z.dz*N*k,B=z.z+z.dx*N*k;if(e.insideBuilding(H,B,.5))continue;let X=e.nearestRoad(H,B,12);X&&X.dist<X.e.w/2+1||M.push(H,B,Math.atan2(z.dx*k,z.dz*k)+Math.PI)}if(M.length){let b=new Pe(this.geoBus,this.mat.prop,M.length/3);for(let T=0;T<M.length/3;T++)v.setFromAxisAngle(w,M[T*3+2]),_.compose(S.set(M[T*3],.15,M[T*3+1]),v,E.set(1,1,1)),b.setMatrixAt(T,_);b.castShadow=!0,b.computeBoundingSphere(),i.add(b)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_signs(t,e,n){let i={pharmacy:["#1d8a4a","#fff"],bank:["#163c7a","#fff"],cafe:["#5a3a22","#ffe9c8"],restaurant:["#7a1e1e","#fff3d0"],fast_food:["#d8261c","#fff"],supermarket:["#f2c200","#1a1a1a"],convenience:["#1f5fa8","#fff"],fuel:["#0a6a3a","#fff"],hotel:["#2a2a40","#f0d080"],clothes:["#222","#fff"],bar:["#3a1a40","#ffd0f0"],mobile_phone:["#e05a10","#fff"]},s=[];for(let v of t.signs){let S=Math.floor(v.x/this.map.BGRID),E=Math.floor(v.z/this.map.BGRID),w=null,A=18;for(let M=-1;M<=1;M++)for(let b=-1;b<=1;b++){let T=this.map.bgrid.get(We(S+M,E+b));if(T)for(let z of T){if(z.h<3||z.h>80)continue;let k=z.pts,N=k.length/2,H=0;for(let X=0;X<N;X++){let O=(X+1)%N;H+=k[X*2]*k[O*2+1]-k[O*2]*k[X*2+1]}let B=H>0?1:-1;for(let X=0;X<N;X++){let O=(X+1)%N,$=k[X*2],Q=k[X*2+1],lt=k[O*2],P=k[O*2+1],st=lt-$,F=P-Q,Z=Math.hypot(st,F);if(Z<3)continue;let at=((v.x-$)*st+(v.z-Q)*F)/(Z*Z);at=Math.max(.15,Math.min(.85,at));let rt=$+st*at,pt=Q+F*at,Tt=Math.hypot(v.x-rt,v.z-pt);if(Tt>=A)continue;let Bt=F/Z*B,Yt=-st/Z*B,it=this.map.nearestRoad(rt+Bt*6,pt+Yt*6,30),mt=Tt+(it?it.dist*.15:6);mt<A&&(A=mt,w={x:rt+Bt*.06,z:pt+Yt*.06,nx:Bt,nz:Yt,l:Z,h:Math.min(z.h,4.2)})}}}if(w&&!s.some(M=>Math.hypot(M.x-w.x,M.z-w.z)<2.5)&&s.push(Object.assign(w,{name:v.name,kind:v.kind})),s.length>=48)break}if(!s.length)return;let o=256,a=48,l=4,c=Math.ceil(s.length/l),h=document.createElement("canvas");h.width=o*l,h.height=a*c;let u=h.getContext("2d"),f=[],d=[],g=[],m=[];s.forEach((v,S)=>{let E=S%l*o,w=Math.floor(S/l)*a,[A,M]=i[v.kind]||["#8a1a1a","#fff"];u.fillStyle=A,u.fillRect(E,w,o,a),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(E,w,o,4),u.fillStyle=M,u.textAlign="center",u.textBaseline="middle";let b=30;for(u.font=`700 ${b}px Arial`;u.measureText(v.name).width>o-16&&b>12;)b-=2,u.font=`700 ${b}px Arial`;u.fillText((v.name.toUpperCase,v.name),E+o/2,w+a/2+1),v.kind==="pharmacy"&&(u.fillStyle="#fff",u.fillRect(E+8,w+18,18,6),u.fillRect(E+14,w+12,6,18));let T=Math.min(v.l*.8,1.6+v.name.length*.28),z=T*a/o*1.15,k=-v.nz,N=v.nx,H=v.h-.6-z,B=v.h-.6,X=Math.max(2.6,Math.min(H,3)),O=X+z,$=f.length/3;for(let[F,Z]of[[-1,X],[1,X],[1,O],[-1,O]])f.push(v.x+k*F*T/2,Z,v.z+N*F*T/2),g.push(v.nx,0,v.nz);let Q=E/h.width,lt=(E+o)/h.width,P=1-(w+a)/h.height,st=1-w/h.height;d.push(lt,P,Q,P,Q,st,lt,st),m.push($,$+1,$+2,$,$+2,$+3)});let x=new re;x.setAttribute("position",new Xt(f,3)),x.setAttribute("normal",new Xt(g,3)),x.setAttribute("uv",new Xt(d,2)),x.setIndex(m);let p=new Re(h);p.colorSpace=Me,p.anisotropy=4;let y=new ft({map:p,emissiveMap:p,emissive:16777215,emissiveIntensity:.05+this.night*.9,roughness:.5,side:we}),_=new Y(x,y);e.add(_),n.signMat=y,n.signTex=p}_trolley(t,e){let n=/Чүй|Чуй|Chuy|Манас|Manas|Абдрахманов|Abdrahmanov|Жибек|Jibek|Ибраимов|Ibraimov|Ахунбаев|Akhunbaev|Токтогул|Toktogul|Киев|Kyiv|Москва|Moscow|Шабдан|Shabdan|Айтматов|Aytmatov|Фрунзе|Frunze|Горький|Gorky/,i=[],s=[],o={},a={};for(let l of t.edges){if(l.cls>2||l.name<0||l.len<30)continue;let c=this.map.names[l.name];if(!n.test(c[0])&&!n.test(c[1]||""))continue;let h=l.ow?[0]:[0,1],u=32;for(let f=4;f<l.len-2;f+=u){let d=Math.min(l.len-1,f+u);for(let g of h){let m=this.map.laneOffset(l,l.lanes-1);for(let x of[-.32,.32]){let p=null,y=null,_=null;for(let v=0;v<=4;v++){let S=v/4,E=f+(d-f)*S;this.map.sample(l,g,g?l.len-E:E,m+x,o);let w=6.3-Math.sin(S*Math.PI)*.25;p!==null&&i.push(p,_,y,o.x,w,o.z),p=o.x,_=w,y=o.z}}}this.map.sample(l,0,f,l.w/2+.7,o),this.map.sample(l,0,f,-l.w/2-.7,a),this.map.insideBuilding(o.x,o.z,.3)||s.push(o.x,o.z),this.map.insideBuilding(a.x,a.z,.3)||s.push(a.x,a.z),i.push(o.x,6.9,o.z,a.x,6.9,a.z)}}if(i.length){let l=new re;l.setAttribute("position",new Xt(i,3));let c=new $s(l,this.wireMat||(this.wireMat=new Lr({color:1842204})));e.add(c)}if(s.length){let l=s.length/2,c=this.poleGeo||(this.poleGeo=new Ht(.1,.15,7.4,6).translate(0,3.7,0)),h=new Pe(c,this.poleMat||(this.poleMat=new ft({color:6053990,roughness:.6,metalness:.4})),l),u=new ie;for(let f=0;f<l;f++)u.makeTranslation(s[f*2],0,s[f*2+1]),h.setMatrixAt(f,u);h.castShadow=!0,h.computeBoundingSphere(),e.add(h)}}_billboards(t,e,n){this.adTex||(this.adTex=Lv());let i=[],s=[],o=[],a=[],l=[],c={};for(let x of t.edges)if(!(x.cls>2||x.len<120))for(let p=60+n()*80;p<x.len-40;p+=240+n()*140){let y=n()<.5?1:-1;if(this.map.sample(x,0,p,(x.w/2+5.5)*y,c),this.map.insideBuilding(c.x,c.z,4))continue;let _=this.map.nearestRoad(c.x,c.z,12);if(_&&_.dist<_.e.w/2+2)continue;let v=Math.atan2(c.dx,c.dz)+y*.45+(y>0?Math.PI:0),S=Math.sin(v),E=Math.cos(v),w=Math.cos(v),A=-Math.sin(v),M=6,b=3,T=4.2,z=Math.floor(n()*8),k=z%4/4,N=Math.floor(z/4)/2;for(let H of[0,1]){let B=i.length/3,X=H?-1:1;for(let[O,$]of[[-1,0],[1,0],[1,1],[-1,1]])i.push(c.x+w*O*M/2*X-S*.06*H,T+$*b,c.z+A*O*M/2*X-E*.06*H),o.push(S*X,0,E*X);H?s.push(.001,.001,.002,.001,.002,.002,.001,.002):s.push(k,1-N-.5,k+.25,1-N-.5,k+.25,1-N,k,1-N),a.push(B,B+1,B+2,B,B+2,B+3)}l.push(c.x+w*1.6,c.z+A*1.6,c.x-w*1.6,c.z-A*1.6)}if(!i.length)return;let h=new re;h.setAttribute("position",new Xt(i,3)),h.setAttribute("normal",new Xt(o,3)),h.setAttribute("uv",new Xt(s,2)),h.setIndex(a),this.adMat||(this.adMat=new ft({map:this.adTex,emissiveMap:this.adTex,emissive:16777215,emissiveIntensity:.05,roughness:.6,side:we}));let u=new Y(h,this.adMat);u.castShadow=!0,e.add(u);let f=l.length/2,d=this.legGeo||(this.legGeo=new Ht(.14,.18,4.3,6).translate(0,2.15,0)),g=new Pe(d,this.poleMat||(this.poleMat=new ft({color:6053990,roughness:.6,metalness:.4})),f),m=new ie;for(let x=0;x<f;x++)m.makeTranslation(l[x*2],0,l[x*2+1]),g.setMatrixAt(x,m);g.castShadow=!0,g.computeBoundingSphere(),e.add(g)}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=vh(e),o=e.length/2,a=-1,l=-1;for(let c=0;c<o;c++){let h=s[c*3],u=s[c*3+1],f=s[c*3+2],d=e[c*2]+h*n*f,g=e[c*2+1]+u*n*f,m=-h*i,x=-u*i,p=t.v(d,.15,g,m,0,x,.85,.85,.83),y=t.v(d,0,g,m,0,x,.6,.6,.6);a>=0&&(i>0?t.quad(l,y,p,a):t.quad(l,a,p,y)),a=p,l=y}}_area(t,e,n,i){let s=kv[e.type];if(!s)return;let[o,a,l]=s,c=t[o]||(t[o]=new hn),h=e.pts,u=h.length/2,f=[];for(let p=0;p<u;p++)f.push(new tt(h[p*2],h[p*2+1]));let d;try{d=Ci.triangulateShape(f,[])}catch{return}let g=jn(a),m=c.vc;for(let p=0;p<u;p++)c.v(h[p*2],l,h[p*2+1],0,1,0,g[0],g[1],g[2]);for(let p of d){let[y,_,v]=p,S=h[y*2],E=h[y*2+1],w=h[_*2],A=h[_*2+1],M=h[v*2],b=h[v*2+1];(w-S)*(b-E)-(A-E)*(M-S)<0?c.tri(m+y,m+_,m+v):c.tri(m+y,m+v,m+_)}let x=Uv[e.type];if(i&&x&&n){let p=(e.x1-e.x0)*(e.z1-e.z0),y=Math.min(500,Math.floor(p*x)),_=y*3;for(;y>0&&_-- >0;){let v=e.x0+n()*(e.x1-e.x0),S=e.z0+n()*(e.z1-e.z0);if(!er(v,S,h))continue;let E=this.map.nearestRoad(v,S,10);if(E&&E.dist<E.e.w/2+2||this.map.insideBuilding(v,S,1.5))continue;let w=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[w].push(v,S,.7+n()*.6,n()*6.28),y--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new hn);gn(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new hn);gn(o,s,-e.w/2,e.w/2,.005,jn(6982288));let a=t.dirt||(t.dirt=new hn);gn(a,s,-e.w/2-2.5,-e.w/2,.004,jn(10129528)),gn(a,s,e.w/2,e.w/2+2.5,.004,jn(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new hn);gn(o,s,-1.8,1.8,.02,jn(6971992));let a=t.rail||(t.rail=new hn);gn(a,s,-.78,-.7,.16,[1,1,1]),gn(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new hn);gn(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new hn({aDash:2}));gn(a,s,-.08,.08,.03,jn(15253552),l=>[l,0])}else if(e.type===5&&i){let o=Td(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let l=0;for(;l<o.length-2&&o[l+1]<a;)l++;let c=(a-o[l])/(o[l+1]-o[l]||1);i[n()<.6?1:0].push(s[l*2]+(s[l*2+2]-s[l*2])*c,s[l*2+1]+(s[l*2+3]-s[l*2+1])*c,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let H=0;H<o;H++){let B=(H+1)%o;a+=s[H*2]*s[B*2+1]-s[B*2]*s[H*2+1]}let l=Math.abs(a)/2,c=e.kind,h=e.h,u=e.minH,f,d,g=3,m=3.2,x=H=>H[Math.floor(n()*H.length)];switch(c===0&&(c=h<7.5?1:h>35?3:2),c){case 1:f=1,d=x(Bi.house),m=3.6;break;case 2:f=2,d=x(Bi.panel),m=3.1;break;case 3:f=3,d=x(Bi.comm),m=2.2,g=3.6;break;case 4:f=4,d=x(Bi.ind),m=4,g=4;break;case 5:f=0,d=9077880;break;case 6:f=0,d=10132122;break;case 7:f=5,d=x(Bi.pub),m=3.4,g=3.8;break;case 8:f=5,d=15921128;break;case 9:f=4,d=11052188;break;case 10:f=6,d=13160664,m=2.5,g=4;break;default:f=2,d=x(Bi.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(f=5,d=15262940),e.name&&/Жогорку Кеңеш|National Parliament|Ынтымак Ордо|Yntymak Ordo|City Hall|Мэрия|National Bank/i.test(e.name)&&(f=5,d=15987180,c=7);let p=jn(d);if(e.colour)try{let H=new wt(e.colour);(e.colour!=="white"||c!==3)&&(p=[H.r,H.g,H.b])}catch{}let y=.92+n()*.12,_=p[0]*y,v=p[1]*y,S=p[2]*y,E=n()*100,w=(H,B)=>({aInfo:[f,E],aWin:[H,B]}),A=a>0?1:-1,M=0;for(let H=0;H<o;H++){let B=(H+1)%o,X=s[H*2],O=s[H*2+1],$=s[B*2],Q=s[B*2+1],lt=$-X,P=Q-O,st=Math.hypot(lt,P);if(st<.05)continue;let F=P/st*A,Z=-lt/st*A,at=Math.max(1,Math.round(st/m)),rt=0,pt=(h-u)/g,Tt=t.v(X,u,O,F,0,Z,_,v,S,w(0,rt)),Bt=t.v($,u,Q,F,0,Z,_,v,S,w(at,rt)),Yt=t.v($,h,Q,F,0,Z,_,v,S,w(at,pt)),it=t.v(X,h,O,F,0,Z,_,v,S,w(0,pt));A>0?(t.tri(Tt,Yt,Bt),t.tri(Tt,it,Yt)):(t.tri(Tt,Bt,Yt),t.tri(Tt,Yt,it)),i&&h>1.5&&this.addWall(X,O,$,Q),M+=st}let b=c===1&&l<260&&o<=8||/gabled|hipped|pitched/.test(e.roofShape||"");if(!b&&h>5&&c!==5&&c!==6){let H=c===3||c===10?1.1:.7,B=[_*.92,v*.92,S*.92],X={aInfo:[0,E],aWin:[0,0]};for(let O=0;O<o;O++){let $=(O+1)%o,Q=s[O*2],lt=s[O*2+1],P=s[$*2],st=s[$*2+1],F=Math.hypot(P-Q,st-lt);if(F<.05)continue;let Z=(st-lt)/F*A,at=-(P-Q)/F*A,rt=t.v(Q,h,lt,Z,0,at,B[0],B[1],B[2],X),pt=t.v(P,h,st,Z,0,at,B[0],B[1],B[2],X),Tt=t.v(P,h+H,st,Z,.2,at,B[0],B[1],B[2],X),Bt=t.v(Q,h+H,lt,Z,.2,at,B[0],B[1],B[2],X);A>0?(t.tri(rt,Tt,pt),t.tri(rt,Bt,Tt),t.tri(rt,pt,Tt),t.tri(rt,Tt,Bt)):(t.tri(rt,pt,Tt),t.tri(rt,Tt,Bt),t.tri(rt,Tt,pt),t.tri(rt,Bt,Tt))}}if(b){this._gableRoof(t,e,h,p,n,l);return}let T=[];for(let H=0;H<o;H++)T.push(new tt(s[H*2],s[H*2+1]));let z;try{z=Ci.triangulateShape(T,[])}catch{return}let k=c===10?[.55,.57,.6]:c===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],N=t.vc;for(let H=0;H<o;H++)t.v(s[H*2],h,s[H*2+1],0,1,0,k[0],k[1],k[2],{aInfo:[0,E],aWin:[s[H*2],s[H*2+1]]});for(let H of z){let[B,X,O]=H,$=s[B*2],Q=s[B*2+1],lt=s[X*2],P=s[X*2+1],st=s[O*2],F=s[O*2+1];(lt-$)*(F-Q)-(P-Q)*(st-$)<0?t.tri(N+B,N+X,N+O):t.tri(N+B,N+O,N+X)}if((c===2||c===3)&&l>350&&h>12){let H=Math.min(3,Math.floor(l/400));for(let B=0;B<H;B++){let X=(B+.5)/H,O=e.x0+(e.x1-e.x0)*X,$=e.z0+(e.z1-e.z0)*X;er(O,$,s)&&this._box(t,O,h,$,2.6,2.4,3.2,[k[0]*1.3,k[1]*1.3,k[2]*1.3],E)}}}_box(t,e,n,i,s,o,a,l,c){let h=s/2,u=a/2,f=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],d={aInfo:[0,c],aWin:[0,0]};for(let m=0;m<4;m++){let[x,p]=f[m],[y,_]=f[(m+1)%4],v=y-x,S=_-p,E=Math.hypot(v,S),w=S/E,A=-v/E,M=t.v(x,n,p,w,0,A,l[0],l[1],l[2],d),b=t.v(y,n,_,w,0,A,l[0],l[1],l[2],d),T=t.v(y,n+o,_,w,0,A,l[0],l[1],l[2],d),z=t.v(x,n+o,p,w,0,A,l[0],l[1],l[2],d);t.tri(M,T,b),t.tri(M,z,T)}let g=f.map(([m,x])=>t.v(m,n+o,x,0,1,0,l[0],l[1],l[2],d));t.tri(g[0],g[2],g[1]),t.tri(g[0],g[3],g[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,l=a.length/2,c=0,h=1,u=0;for(let $=0;$<l;$++){let Q=($+1)%l,lt=a[Q*2]-a[$*2],P=a[Q*2+1]-a[$*2+1],st=Math.hypot(lt,P);st>c&&(c=st,h=lt/st,u=P/st)}let f=-u,d=h,g=1e9,m=-1e9,x=1e9,p=-1e9;for(let $=0;$<l;$++){let Q=a[$*2]*h+a[$*2+1]*u,lt=a[$*2]*f+a[$*2+1]*d;g=Math.min(g,Q),m=Math.max(m,Q),x=Math.min(x,lt),p=Math.max(p,lt)}let y=.35;g-=y,m+=y,x-=y,p+=y;let _=($,Q)=>[$*h+Q*f,$*u+Q*d],v=Math.min(2.6,(p-x)*.38),S=(x+p)/2,E=jn(Bi.roofHouse[Math.floor(s()*Bi.roofHouse.length)]);if(e.roofColour)try{let $=new wt(e.roofColour);E=[$.r,$.g,$.b]}catch{}let w={aInfo:[0,0],aWin:[0,0]},A=n-.05,M=_(g,x),b=_(m,x),T=_(m,p),z=_(g,p),k=_(g,S),N=_(m,S),H=($,Q,lt,P,st)=>{let F=(S-(st<0?x:p)===0,1),Z=v/((p-x)/2),at=f*st*Z,rt=d*st*Z,pt=Math.hypot(at,1,rt),Tt=t.v($[0],A,$[1],at/pt,F/pt,rt/pt,E[0],E[1],E[2],w),Bt=t.v(Q[0],A,Q[1],at/pt,F/pt,rt/pt,E[0],E[1],E[2],w),Yt=t.v(lt[0],A+v,lt[1],at/pt,F/pt,rt/pt,E[0]*1.1,E[1]*1.1,E[2]*1.1,w),it=t.v(P[0],A+v,P[1],at/pt,F/pt,rt/pt,E[0]*1.1,E[1]*1.1,E[2]*1.1,w);return[Tt,Bt,Yt,it]},B=H(M,b,N,k,-1),X=H(T,z,k,N,1),O=$=>{let[Q,lt,P]=$.map(Tt=>[t.p[Tt*3],t.p[Tt*3+1],t.p[Tt*3+2]]),st=lt[0]-Q[0],F=lt[1]-Q[1],Z=lt[2]-Q[2],at=P[0]-Q[0],rt=P[1]-Q[1],pt=P[2]-Q[2];return Z*at-st*pt>0};for(let $ of[B,X])O($)?(t.tri($[0],$[1],$[2]),t.tri($[0],$[2],$[3])):(t.tri($[0],$[2],$[1]),t.tri($[0],$[3],$[2]));for(let[$,Q,lt,P]of[[M,z,k,-1],[b,T,N,1]]){let st=h*P,F=u*P,Z=t.v($[0],A,$[1],st,0,F,i[0],i[1],i[2],w),at=t.v(Q[0],A,Q[1],st,0,F,i[0],i[1],i[2],w),rt=t.v(lt[0],A+v,lt[1],st,0,F,i[0],i[1],i[2],w);t.tri(Z,at,rt),t.tri(Z,rt,at)}}setNight(t){if(this.adMat&&(this.adMat.emissiveIntensity=.05+t*.75),Math.abs((this.night||0)-t)>.02)for(let e of this.live.values())e.signMat&&(e.signMat.emissiveIntensity=.05+t*.9);this.night=t,sn.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),l=Math.floor((e-n)/s),c=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,f=e;for(let d=o;d<=a;d++)for(let g=l;g<=c;g++){let m=this.collision.get(We(d,g));if(m)for(let x=0;x<m.length;x+=4){let p=m[x],y=m[x+1],_=m[x+2],v=m[x+3],S=_-p,E=v-y,w=S*S+E*E||1e-6,A=((u-p)*S+(f-y)*E)/w;A=A<0?0:A>1?1:A;let M=p+S*A,b=y+E*A,T=u-M,z=f-b,k=Math.hypot(T,z);if(k<n&&k>1e-5){let N=n-k;u+=T/k*N,f+=z/k*N,i.nx+=T/k,i.nz+=z/k,h=!0}}}if(h){i.x=u-t,i.z=f-e;let d=Math.hypot(i.nx,i.nz)||1;i.nx/=d,i.nz/=d}return h}};var nr=class r extends Y{constructor(){let t=r.SkyShader,e=new _e({name:t.name,uniforms:Kn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:ln,depthWrite:!1});super(new Mt(1,1,1),e),this.isSky=!0}};nr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var da=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new es,this.bgCam=new Ze(60,1,50,2e5),this.sky=new nr,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85;for(let s of[this.sky])s.material.fragmentShader=s.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min( retColor * 0.42, vec3( 24.0 ) ), 1.0 );");this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new I,this.sun=new ea(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new ta(12572927,6971464,1),e.add(this.hemi),e.fog=new Fo(13162208,300,2600),this.pmrem=new Xs(t),this.envScene=new es,this.envSky=new nr,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=En(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new re;i.setAttribute("position",new ge(n,3)),this.starMat=new ns({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new pi(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=En(99),e=260,n=70,i=new Ee(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let f=0,d=1,g=1/9e3;for(let m=0;m<6;m++)f+=d*(Math.sin(h*g+m*1.7)*Math.cos(u*g*1.3-m)+Math.sin((h+u)*g*.7+m*3.1)*.6),d*=.5,g*=2.1;return f};for(let h=0;h<s.count;h++){let u=s.getX(h),d=s.getZ(h)+26e3+13e3,g=d-26e3,m=Math.min(1,Math.max(0,(g+6e3)/14e3)),x=Math.exp(-((g-16e3)**2)/(2*9e3**2)),p=m*m*1100+x*4100*(.75+.35*o(u,d))+Math.abs(o(u*1.7,d*1.7))*600*m;p*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,p-120),d)}i.computeVertexNormals();let a=new Ee(22e4,3e4,160,20).rotateX(-Math.PI/2),l=a.attributes.position;for(let h=0;h<l.count;h++){let u=l.getX(h),f=l.getZ(h)-7e4,d=Math.max(0,(Math.abs(f+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,f*.6)))*Math.min(1,-(f+55e3)/12e3));l.setXYZ(h,u,d-80,f)}a.computeVertexNormals(),this.mtnMat=new _e({uniforms:{sunDir:{value:new I(0,1,0)},fogCol:{value:new wt(13162208)},light:{value:1},camPos:{value:new I}},vertexShader:`varying vec3 vN; varying vec3 vW;
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
        }`,fog:!1}),this.mountains=new Y(i,this.mtnMat),this.hills=new Y(a,this.mtnMat);let c=new Y(new Ee(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);c.position.y=-6,this.plain=c,this.bg.add(this.mountains,this.hills,c),this._clouds()}_clouds(){this.cloudMat=new _e({uniforms:{uTime:sn.uTime,sunDir:{value:new I(0,1,0)},day:{value:1},fogCol:{value:new wt},cover:{value:.58},camPos:{value:new I}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float uTime; uniform vec3 sunDir; uniform float day; uniform vec3 fogCol; uniform float cover; uniform vec3 camPos; varying vec3 vW;
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
        }`,transparent:!0,depthWrite:!1,fog:!1,side:we}),this.cloudsMesh=new Y(new Ee(16e4,16e4,1,1).rotateX(-Math.PI/2),this.cloudMat),this.cloudsMesh.position.y=2600,this.bg.add(this.cloudsMesh)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let c=Ie.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-Ie.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*c,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),c<.15&&(this.sun.intensity=.55*(1-c/.15)+3.2*c,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*c,this.hemi.color.setRGB(.55+.2*c,.62+.22*c,.85+.1*c).multiplyScalar(.5+.5*c),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+c),.38*(.3+c),.3*(.3+c));let u=new wt().setRGB(.55,.66,.8).lerp(new wt(.92,.66,.45),h*.55).multiplyScalar(.08+.92*c);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*c,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night,this.cloudMat.uniforms.sunDir.value.copy(this.sunDir),this.cloudMat.uniforms.day.value=c,this.cloudMat.uniforms.fogCol.value.copy(u),this.cloudMat.uniforms.camPos.value.copy(t.position),this.cloudsMesh.position.x=t.position.x,this.cloudsMesh.position.z=t.position.z;let f=this.sunDir.y>.05?this.sunDir:new I(-.4,.8,.3).normalize();return this.sun.position.set(e.x+f.x*400,f.y*400,e.z+f.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*c),{day:c,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function Nv(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i],o=r[(i-1+n)%n],a=r[(i+1)%n],l=[o[0]-s[0],o[1]-s[1]],c=[a[0]-s[0],a[1]-s[1]],h=Math.hypot(...l),u=Math.hypot(...c),f=Math.min(t,h*.45,u*.45);if(s[1]<.5&&(o[1]<.5||a[1]<.5)||f<.01){e.push(s);continue}let g=[s[0]+l[0]/h*f,s[1]+l[1]/h*f],m=[s[0]+c[0]/u*f,s[1]+c[1]/u*f];for(let x=0;x<=4;x++){let p=x/4,y=1-p;e.push([y*y*g[0]+2*y*p*s[0]+p*p*m[0],y*y*g[1]+2*y*p*s[1]+p*p*m[1]])}}return e}function wh(r,t,e=.05,n={}){let i=n.fillet?Nv(r,n.fillet):r,s=new Hn;s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1]);s.closePath();let o=new Jn(s,{depth:t-e*2,steps:n.steps||1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});if(o.rotateY(-Math.PI/2),o.translate((t-e*2)/2,0,0),n.shape){let{L:a,W:l,belt:c,top:h,taper:u=.12,tumble:f=.14}=n.shape,d=o.attributes.position;for(let g=0;g<d.count;g++){let m=d.getX(g),x=d.getY(g),p=d.getZ(g),y=Math.min(1,Math.abs(p)/(a/2)),_=1-u*Math.pow(y,3);x>c&&(_*=1-f*Math.min(1,(x-c)/Math.max(.1,h-c))),d.setX(g,m*_),Math.abs(m)>l*.3&&x>c*.7&&d.setY(g,x-.02*Math.pow(Math.abs(m)/(l/2),4))}o.computeVertexNormals()}return o}var en=(r,t,e,n,i,s)=>new Mt(r,t,e).translate(n,i,s),Bv={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},Hv=1844524,Fv=1447446,Ov=12106944,fa=2105892,Gv=13159632;function Pn(r,t={}){let e=Bv[r],n=[],i=[],s=[],o=e.W,a=e.cabin[0][1],l=e.roof[2][1],c=r==="bus"||r==="truck",h=c?null:{L:e.L,W:o,belt:a*.75,top:l,taper:r==="van"?.06:.13,tumble:.05};n.push(wh(e.body,o,.08,{fillet:c?.08:.22,steps:4,shape:h}));let u=o*e.cabinW,f=c?null:{L:e.L,W:u,belt:a,top:l,taper:.1,tumble:r==="van"?.05:.2};if(i.push(zt(wh(e.cabin,u,.04,{fillet:c?.05:.12,steps:3,shape:f}),Hv)),n.push(wh(e.roof,u+.03,.02,{fillet:.04,steps:2,shape:f&&{...f,W:u+.03}})),!c)for(let[M,b,T]of Hd(e)){let z=new Ht(e.wr*1.18,e.wr*1.18,.06,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2);i.push(zt(z.translate(Math.sign(M)*(o/2-.02),b,T),657930))}if(!c)for(let M of[-1,1])i.push(zt(en(.012,a-e.body[0][1]-.15,.02,M*(o/2+.003),(a+e.body[0][1])/2,e.cabin[e.cabin.length-2][0]-.1),1118481)),i.push(zt(en(.012,a-e.body[0][1]-.15,.02,M*(o/2+.003),(a+e.body[0][1])/2,(e.cabin[0][0]+e.cabin[1][0])/2+.2),1118481)),i.push(zt(en(.02,.05,e.L*.5,M*(o/2+.005),a-.03,0),10133670));if(e.cargo){let[M,b,T,z]=e.cargo;n.push(en(o,z-T,b-M,0,(T+z)/2,(M+b)/2))}if(r==="van"||r==="bus"){let M=r==="bus"?7:4,b=e.cabin[0][0],T=e.cabin[3][0]-(r==="van"?.7:.2);for(let z=0;z<=M;z++){let k=b+(T-b)*z/M;n.push(en(u+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,k+.06))}}let d=e.body[0][1],g=e.head.z,m=e.tail.z;i.push(zt(en(o+.02,.16,.12,0,d+.12,g-.02),fa)),i.push(zt(en(o+.02,.16,.12,0,d+.12,m+.02),fa)),i.push(zt(en(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,g+.01),789516)),i.push(zt(en(o+.03,.1,e.L*.55,0,d+.04,0),fa));let x=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let M of[-1,1])i.push(zt(en(.2,.12,.1,M*(o/2+.08),e.cabin[0][1]+.12,x-.1),fa));i.push(zt(en(.52,.12,.02,0,d+.3,g+.06),15921906)),i.push(zt(en(.52,.12,.02,0,d+.42,m-.06),15921906));let p=e.head,y=e.tail;for(let M of[-1,1])s.push(zt(en(p.w,p.h,.06,M*p.x,p.y,p.z),16774880)),s.push(zt(en(y.w,y.h,.06,M*y.x,y.y,y.z),16718352,.9));if(t.taxi&&i.push(zt(en(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(zt(en(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(zt(en(1.6,.3,.05,0,2.55,5.92),16747024)),t.trolley)for(let M of[-1,1]){let b=new Mt(.07,.07,5.6).rotateX(-.5).translate(M*.32,4.43,-2.4);i.push(zt(b,1710618)),i.push(zt(en(.3,.25,.6,M*.32,3.2,.2),3355443))}let _=Vv(e.wr,r==="bus"||r==="truck"?.32:.23),v=Hd(e),S=un(v.map(([M,b,T])=>_.clone().translate(M,b,T))),E=un(n.map(M=>zt(M,16777215))),w=un([...i,S]),A=un(s);return{paint:E,detail:w,lights:A,wheel:_,wheelPos:v,spec:e,detailNoWheels:un(i)}}function Hd(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function Vv(r,t){let e=zt(new Ht(r,r,t,16).rotateZ(Math.PI/2),Fv),n=zt(new Ht(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),Ov),i=zt(new Ht(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),Gv),s=[];for(let o=0;o<5;o++){let a=new Mt(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(zt(a,9080466))}return un([e,n,i,...s])}function Eh(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new Re(t);return n.colorSpace=Me,n.anisotropy=4,n}var Sh=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var pa=class{constructor(t,e="sedan",n){this.scene=t,this.group=new qt,this.body=new qt,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(p=>{p.geometry&&p.geometry.dispose()});let n=Pn(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new Di({color:i,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.06,vertexColors:!0,envMapIntensity:1.2});let s=new ft({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new ft({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new Y(n.paint,this.paintMat);o.castShadow=!0;let a=new Y(n.detailNoWheels,s);a.castShadow=!0,this.paintMesh=o,this.detailMesh=a,this.damage=0,this.dents=0,this.lightMesh=new Y(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let l=n.spec;this.brakeMat=new fe({color:16719888,transparent:!0,opacity:0,blending:Ge,depthWrite:!1});for(let x of[-1,1]){let p=new Y(new Ee(l.tail.w*2.2,l.tail.h*4),this.brakeMat);p.position.set(x*l.tail.x,l.tail.y,l.tail.z-.06),p.rotation.y=Math.PI,this.body.add(p)}this.flareMat=new fe({color:16773840,transparent:!0,opacity:0,blending:Ge,depthWrite:!1});for(let x of[-1,1]){let p=new Y(new zi(.45,16),this.flareMat);p.position.set(x*l.head.x,l.head.y,l.head.z+.08),this.body.add(p)}this.plateText||(this.plateText="01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B");let c=Eh(this.plateText),h=new fe({map:c});this.plateMat=h;let u=new Y(new Ee(.52,.12),h);u.position.set(0,l.body[0][1]+.3,l.head.z+.075);let f=new Y(new Ee(.52,.12),h);f.position.set(0,l.body[0][1]+.42,l.tail.z-.075),f.rotation.y=Math.PI,this.body.add(u,f);let d=new Y(new Se(.13,10,8),new ft({color:2760736}));if(d.position.set(.38,l.cabin[0][1]+.38,(l.cabin[1][0]+l.cabin[2][0])/2+.25),this.body.add(d),this.wheels)for(let x of this.wheels)this.group.remove(x.pivot);this.wheels=[];let g=new ft({vertexColors:!0,roughness:.6,metalness:.3});this.wheelMat=g;for(let[x,p,y]of n.wheelPos){let _=new qt;_.position.set(x,p,y);let v=new Y(n.wheel,g);v.castShadow=!0,_.add(v),this.group.add(_),this.wheels.push({pivot:_,mesh:v,front:y>0})}this.flames=[];let m=new fe({color:6728447,transparent:!0,opacity:.85,blending:Ge,depthWrite:!1});for(let x of[-1,1]){let p=new Y(new Zn(.11,.9,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.45),m);p.position.set(x*l.W*.24,l.body[0][1]+.05,l.tail.z-.05),p.visible=!1,this.body.add(p),this.flames.push(p)}this.flameMat=m,this._applyCustom(),this.spot?(this.spot.position.set(0,.8,l.head.z),this.spotTarget.position.set(0,0,l.head.z+25)):(this.spot=new Js(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,l.head.z),this.spotTarget=new He,this.spotTarget.position.set(0,0,l.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=l.mass,this.power=l.power*745.7,this.vmax=l.vmax/3.6,this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(l.L*l.L+l.W*l.W)/12*1.1,this.a=l.wb/2+(l.wbOff||0),this.b=l.wb/2-(l.wbOff||0),this.radius=l.W/2+.05,this.color=i}dent(t,e,n){let i=t-this.x,s=e-this.z,o=Math.cos(this.h),a=Math.sin(this.h),l=i*o-s*a,c=i*a+s*o,h=1.25,u=this.spec.roof[2][1];for(let f of[this.paintMesh,this.detailMesh]){let d=f.geometry.attributes.position;for(let g=0;g<d.count;g++){let m=d.getX(g),x=d.getY(g),p=d.getZ(g),y=Math.hypot(m-l,p-c);if(y>h||x>u+.1)continue;let _=Math.pow(1-y/h,2)*n,v=Math.hypot(m,p*.35)||1;d.setXYZ(g,m-m/v*_*.6-Math.sign(l)*0,x-_*.15*(x>.9?1:.3),p-Math.sign(p)*_*(Math.abs(c)>this.spec.L*.3?.5:.1))}d.needsUpdate=!0}this.dents++}repair(){this.setType(this.type,this.color)}_applyCustom(){let t=this.custom||(this.custom={}),e=this.spec;if(this.neon&&(this.group.remove(this.neon),this.neon=null),t.neon){let n=this._neonTex||(this._neonTex=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),o=s.createRadialGradient(64,64,10,64,64,64);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,128,128),new Re(i)})());this.neon=new Y(new Ee(e.W*1.9,e.L*1.35).rotateX(-Math.PI/2),new fe({map:n,color:t.neon,transparent:!0,opacity:.9,blending:Ge,depthWrite:!1})),this.neon.position.y=.14,this.neon.material.polygonOffset=!0,this.neon.material.polygonOffsetFactor=-8,this.neon.material.polygonOffsetUnits=-30,this.neon.renderOrder=2,this.group.add(this.neon)}if(this.spoiler&&(this.body.remove(this.spoiler),this.spoiler=null),t.spoiler&&!["van","bus","truck"].includes(this.type)){let n=new qt,i=new Y(new Mt(e.W*.95,.05,.35),this.paintMat);i.position.set(0,.28,0),n.add(i);for(let o of[-1,1]){let a=new Y(new Mt(.05,.28,.12),new ft({color:1118481}));a.position.set(o*e.W*.3,.14,0),n.add(a)}let s=e.body.reduce((o,a)=>a[0]<e.L*-.3?Math.max(o,a[1]):o,.8);n.position.set(0,s,e.tail.z+.3),n.traverse(o=>o.castShadow=!0),this.body.add(n),this.spoiler=n}this.wheelMat&&this.wheelMat.color.setHex(t.rims??16777215)}setPlate(t){this.plateText=String(t).toUpperCase().slice(0,12),this.plateMat&&(this.plateMat.map.dispose(),this.plateMat.map=Eh(this.plateText),this.plateMat.needsUpdate=!0)}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let l=0;l<3;l++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=this.assists||(this.assists={abs:!0,tcs:!0,esc:!0,steerAssist:!0,sens:1,manual:!1}),a=Math.sin(this.h),l=Math.cos(this.h),c=-Math.cos(this.h),h=Math.sin(this.h),u=this.vx*a+this.vz*l,f=this.vx*c+this.vz*h,d=9.81,g=this.mass,m=Math.abs(u),x=this.surface??1,p=.6/(1+m/14)*(.75+.5*o.sens),y=-e.steer*p;o.steerAssist&&!e.hand&&m>6&&this.rearSlip&&(y+=Ie.clamp(this.rearSlip*.55,-.25,.25));let _=(e.steer===0?5.5:4.2)/(1+m/45);this.steer+=Ie.clamp(y-this.steer,-_*t,_*t);let v=this.steer,S=this._gearbox(e),E=0,w=e.throttle,A=e.brake;this.braking=!1,this.reversing=!1;let M=m<.6;A>0&&M?this.stopHold=(this.stopHold||0)+t:A===0&&(this.stopHold=0);let b=A>0&&(u<-.3||M&&this.stopHold>.2);if(this.nitro===void 0&&(this.nitro=1),this.boosting=!!(e.nitro&&this.nitro>.01&&w>0&&u>1),this.boosting?(E+=g*5.2,this.nitro=Math.max(0,this.nitro-t*.2)):this.nitro=Math.min(1,this.nitro+t*.02),w>0){if(u<-.5)E+=1*g*d*w,this.braking=!0;else if(!this.limiter){let st=this.power*S/Math.max(3,u)*w,F=(o.tcs?.92:1.15)*g*d*.6*x;!o.tcs&&st>F&&m<25?this.wheelspin=Math.min(1,(st-F)/F):this.wheelspin=0,E+=Math.min(F,st)}}else this.wheelspin=0;if(A>0){if(b)this.reversing=!0,u>-8&&(E-=g*3.4*A);else if(u>.3){let st=o.abs?1:1.12;E-=st*g*d*A*x,this.braking=!0,!o.abs&&A>.9&&m>4?this.locked=!0:this.locked=!1}}else this.locked=!1;e.hand&&(E-=Math.sign(u)*Math.min(Math.abs(u)*g*3,.55*g*d)),E-=this.drag*u*Math.abs(u)+(.015*g*d*Math.sign(u)+4*u)*Math.min(1,Math.abs(u))*(x<1?3.5:1),w===0&&A===0&&m<.4&&(u*=.85);let T=this.a,z=this.b,k=T+z,N=Ie.clamp(g*(this.accLong||0)*.55/k,-g*d*.3,g*d*.3),H=g*d*z/k-N,B=g*d*T/k+N,X=1.08*x,O=0,$=0;if(m>1.2){let st=Math.atan2(f-this.r*T,m)+v*Math.sign(u),F=Math.atan2(f+this.r*z,m),Z=10*H,at=11*B,rt=Math.min(.9,Math.abs(E)/(X*(H+B))*(w>0?1.2:.6)),pt=Math.sqrt(1-rt*rt);e.hand&&(pt=.38),this.wheelspin&&(pt*=1-.5*this.wheelspin);let Tt=this.locked?.25:1,Bt=X*H*Tt,Yt=X*B*pt;O=-Bt*Math.tanh(Z*st/Bt),$=-Yt*Math.tanh(at*F/Yt),this.rearSlip=F,this.slip=Math.max(Math.abs(F)*(e.hand?2.4:1.6),Math.abs(st)*.7,this.wheelspin*.8,this.locked?.6:0)*Math.min(1,m/8);let it=-O*Math.cos(v)*T+$*z;if(this.r+=it/this.inertia*t,this.r*=1-.8*t,o.esc&&!e.hand){let mt=X*d/Math.max(m,4)*1.12;Math.abs(this.r)>mt&&(this.r+=(Math.sign(this.r)*mt-this.r)*Math.min(1,t*8)),Math.abs(F)>.12&&(f*=1-Math.min(.5,t*2.5))}}else this.r=u*Math.tan(v)/k,f*=.5,this.slip=0,this.rearSlip=0;let Q=O*Math.cos(v)+$;if(m<=1.2){let st=u+E/g*t;this.vx=a*st+c*f,this.vz=l*st+h*f,w===0&&!b&&Math.abs(st)<.2&&(this.vx=this.vz=0,this.r=0)}else{let st=u+E/g*t,F=f+Q/g*t;this.vx=a*st+c*F,this.vz=l*st+h*F}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=this.accLong===void 0?0:this.accLong+(E/g-this.accLong)*Math.min(1,t*10),this.accLat=Q/g,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let lt=this.spec.L,P={};for(let st of[lt*.32,0,-lt*.32]){let F=this.x+Math.sin(this.h)*st,Z=this.z+Math.cos(this.h)*st;if(n.collide(F,Z,this.radius,P)){this.x+=P.x,this.z+=P.z;let at=this.vx*P.nx+this.vz*P.nz;at<0&&(this.vx-=P.nx*at*1.25,this.vz-=P.nz*at*1.25,this.vx*=.94,this.vz*=.94,this.r+=(st>0?1:-1)*at*.02*Math.sign(P.nx*Math.cos(this.h)-P.nz*Math.sin(this.h)),-at>2&&(s&&s(-at,"wall",null,F-P.nx*this.radius,Z-P.nz*this.radius,P.nx,P.nz),this.damage=Math.min(100,this.damage+-at*.6)))}}i&&i.collidePlayer(this,s),this.remotes&&this.remotes.collide(this,s)}shiftUp(){this.gear<6&&(this.gear=Math.max(1,this.gear)+1,this.shiftT=.25)}shiftDown(){this.gear>1&&(this.gear--,this.shiftT=.2)}_gearbox(t){let e=Math.max(0,this.u||0),n=[0,3.6,2.2,1.55,1.18,.95,.78],i=3.6,s=this.spec.wr;this.gear>=1||(this.gear=1);let o=h=>e/s*n[h]*i*60/(2*Math.PI),a=o(this.gear);if(!(this.assists&&this.assists.manual)){let h=t.throttle>.5?6300:3800;a>h&&this.gear<6&&(this.gear++,this.shiftT=.18),a<2e3&&this.gear>1&&this.gear--,a=o(this.gear)}if(this.limiter=a>7200,this.rpmTarget=Math.min(7300,Math.max(900,a)),this.shiftT>0)return this.shiftT-=1/180,.25;let l=Math.min(1,a/6500),c=this.damage>=100?.3:1-this.damage/300;return(.72+.38*Math.sin(l*Math.PI))*c}_visual(t,e){if(this.flames){for(let s of this.flames)if(s.visible=!!this.boosting,s.visible){let o=.8+Math.random()*.5;s.scale.set(1,1,o)}}this.flameMat&&this.flameMat.color.setHex(Math.random()<.5?6728447:10079487),this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.gearLabel=this.reversing?"R":this.speed<.3&&!this.throttleOn?"N":String(this.gear);let n=Ie.clamp(-(this.accLong||0)*.006,-.05,.05),i=Ie.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((n-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((i-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let s of this.wheels)s.mesh.rotation.x=this.spin,s.front&&(s.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.75:this.night?.12:0,this.lightMat.emissiveIntensity=this.night?this.braking?1.6:.8:this.braking?1.2:.25,this.flareMat.opacity=this.night?.55:0,this.spot.intensity=this.night?60:0,this.slip>.22&&this.speed>6||this.wheelspin>.2&&this.speed>1?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new re;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new ge(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new ge(n,1)),this.skidMesh=new Y(e,new fe({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],l=o-i,c=a-s,h=Math.hypot(l,c);if(h<.05||h>5)continue;let u=-c/h*.11,f=l/h*.11,d=this.skidI++%this.skidN,g=.075;this.skidPos.set([i-u,g,s-f,i+u,g,s+f,o-u,g,a-f,o+u,g,a+f],d*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new Re(e);for(let s=0;s<160;s++){let o=new mn(new cn({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},ma=class{constructor(t){this.cam=t,this.mode=0,this.pos=new I(0,5,-10),this.look=new I,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,l,c,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,f=i*.7+h*.3,d=s*.7+u*.3,g=Math.atan2(f,d)+n,m=Math.sin(g),x=Math.cos(g),p=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let _=(this.mode===0?6.8:11)*p+o*.03,v=(this.mode===0?2.3:4)*p+a.cabin[1][1]*.4;l=new I(e.x-m*_,v,e.z-x*_),c=new I(e.x+i*4,1.1*p,e.z+s*4);let S=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(l,S)}else if(this.mode===2)l=new I(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),c=new I(e.x+i*30,1.2,e.z+s*30),this.pos.copy(l);else{this.lag+=t*.15;let _=this.lag;l=new I(e.x+Math.sin(_)*9,1.2+Math.sin(_*.7)*.6,e.z+Math.cos(_)*9),c=new I(e.x,.9,e.z),this.pos.lerp(l,1-Math.exp(-t*3))}this.look.lerp(c,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let y=(this.mode===2?(this.baseFov||62)+10:this.baseFov||62)+Math.min(16,o*.2);this.cam.fov+=(y-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var Fd=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.04],["trolley",.04],["truck",.04]],Od=[3,6,4,2.2,.6,.15,.02],Gd=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,ga=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new ft({vertexColors:!0,metalness:.5,roughness:.35}),s=new ft({vertexColors:!0,metalness:.3,roughness:.3}),o=new fe({vertexColors:!0});for(let[a]of Fd){let l=Pn(a==="taxi"?"sedan":a==="trolley"?"bus":a,{taxi:a==="taxi",trolley:a==="trolley"}),c=200,h=new Pe(l.paint,i,c),u=new Pe(l.detail,s,c),f=new Pe(l.lights,o,c);for(let d of[h,u,f])d.count=0,d.frustumCulled=!1,d.instanceMatrix.setUsage(Qs),t.add(d);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new wt),f.setColorAt(0,new wt),this.models[a]={p:h,d:u,l:f,spec:l.spec,cap:c,n:0}}this._busStops(),this._signals(),this.M=new ie,this.Q=new Be,this.V=new I,this.S=new I(1,1,1),this.Y=new I(0,1,0),this.C=new wt,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,l=>l.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new Pe(kd(),new ft({vertexColors:!0,roughness:.6}),e),i=new fe({vertexColors:!0});this.lamps=[0,1,2].map(u=>new Pe(Ud(u),i,e));let s={},o=new ie,a=new Be,l=new I,c=new I(1,1,1),h=new I(0,1,0);t.forEach((u,f)=>{let d=u.e,g=d.w/2+.9;this.map.sample(d,u.dir,u.stop,g,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(l.set(s.x,.12,s.z),a,c),n.setMatrixAt(f,o);for(let m of this.lamps)m.setMatrixAt(f,o),m.setColorAt(f,new wt(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new wt(3,.15,.08),new wt(.18,.03,.02)],s=[new wt(3,1.6,.1),new wt(.18,.12,.02)],o=[new wt(.1,3,.8),new wt(.02,.15,.06)];for(let a=0;a<n.length;a++){let l=n[a],c=this.map.signalState(l.cluster,l.group,e);this.lamps[0].setColorAt(a,c==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,c==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,c==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of Fd)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=Od[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(Gd.test(n[0])||Gd.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),l=Math.floor(e/s),c=[],h=0;for(let u=a-o;u<=a+o;u++)for(let f=l-o;f<=l+o;f++){let d=this.map.chunks.get(We(u,f));if(d)for(let g of d.edges){if(g.cls>5)continue;let m=this._edgeWeight(g);m<=0||(c.push(g,m),h+=m)}}if(!h)return!1;for(let u=0;u<6;u++){let f=Math.random()*h,d=null;for(let M=0;M<c.length;M+=2)if(f-=c[M+1],f<=0){d=c[M];break}d||(d=c[0]);let g=d.ow||Math.random()<.5?0:1,m=Math.random()*d.len,x={};this.map.sample(d,g,m,0,x);let p=Math.hypot(x.x-t,x.z-e);if(p<n||p>i)continue;let y=Math.floor(Math.random()*d.lanes),_=d.id*2+g;if(this.cars.some(M=>M.de===_&&Math.abs(M.s-m)<12))continue;let v=this._pickType(),S=this.models[v];if(S.n>=S.cap)continue;S.n++;let E=xh[d.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="trolley"||v==="truck"?.85:1),w={type:v,spec:S.spec,e:d,dir:g,de:_,s:m,lane:v==="van"||v==="bus"||v==="trolley"?d.lanes-1:y,v:E*.7,v0:E,color:v==="van"?Math.random()<.8?16053492:15912992:v==="trolley"?Math.random()<.5?2779832:14212320:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:Sh[Math.floor(Math.random()*Sh.length)],x:x.x,z:x.z,h:Math.atan2(x.dx,x.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};w.next=this._chooseNext(w);let A={};return this.map.sample(d,g,m,this.map.laneOffset(d,w.lane),A),w.x=A.x,w.z=A.z,this.cars.push(w),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let l=this.map.edges[a>>1];if(l.cls>5)continue;let c={};this.map.sample(l,a&1,.5,0,c);let h=n.dx*c.dx+n.dz*c.dz,u=(h>.7?4:h>-.3?1:.15)*(Od[l.cls]+.2);l.cls===5&&(u*=.2),(t.type==="bus"||t.type==="trolley"||t.type==="truck")&&(u*=l.cls<=2?3:.2),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),l=0;for(;this.cars.length<a&&l<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)l++;for(let m=this.cars.length-1;m>=0;m--){let x=this.cars[m];(Math.abs(x.x-s)>760||Math.abs(x.z-o)>760)&&this._remove(m)}let c=new Map;for(let m of this.cars){let x=c.get(m.de);x||c.set(m.de,x=[]),x.push(m)}for(let m of c.values())m.sort((x,p)=>x.s-p.s);let h=Math.sin(e.h),u=Math.cos(e.h),f=e.speed,d=e.spec.L;this.honks.length=0;let g=this.map;for(let m of this.cars){let x=m.e,p=x.len,y=m.spec.L,_=1e9,v=0,S=c.get(m.de);for(let st=0;st<S.length;st++){let F=S[st];if(F===m||F.s<=m.s||F.lane!==m.lane)continue;let Z=F.s-m.s-(F.spec.L+y)/2;Z<_&&(_=Z,v=F.v);break}if(_>200&&m.next>=0){let st=c.get(m.next);if(st&&st.length){let F=st[0],Z=p-m.s+F.s-(F.spec.L+y)/2;Z<_&&(_=Z,v=F.v)}}m.redAhead=!1;for(let st of x.signals){if(st.dir!==m.dir)continue;let F=st.stop-m.s;if(F<-.5||F>120)continue;let Z=g.signalState(st.cluster,st.group,this.time);if(Z==="R"||Z==="Y"&&F>m.v*m.v/7+2){let at=F-y/2;at<_&&(_=Math.max(.01,at),v=0,m.redAhead=!0)}}if((m.type==="van"||m.type==="bus"||m.type==="trolley")&&m.stopT<=0){let st=this.stopsOn.get(m.de);if(st)for(let F of st){let Z=F-m.s;if(Z>0&&Z<60&&m.servedStop!==m.de*1e4+Math.round(F)){let at=Z-y/2+1.5;at<_&&(_=Math.max(.01,at),v=0),Z<y/2+1.5&&m.v<.5&&(m.stopT=6+Math.random()*8,m.servedStop=m.de*1e4+Math.round(F))}}}m.stopT>0&&(m.stopT-=t,_=.01,v=0);let E=Math.sin(m.h),w=Math.cos(m.h);{let st=s-m.x,F=o-m.z,Z=st*E+F*w,at=Math.abs(st*w-F*E);if(Z>0&&Z<45&&at<2.2){let rt=Z-(d+y)/2;rt<_&&(_=Math.max(.01,rt),v=Math.max(0,f*(h*E+u*w)),m.playerBlock=!0)}else m.playerBlock=!1}if(n)for(let st of n.crossers){let F=st.x-m.x,Z=st.z-m.z,at=F*E+Z*w,rt=Math.abs(F*w-Z*E);if(at>0&&at<30&&rt<2.6){let pt=at-y/2-1.5;pt<_&&(_=Math.max(.01,pt),v=0)}}if(i)for(let st of i){let F=st.x-m.x,Z=st.z-m.z,at=F*E+Z*w,rt=Math.abs(F*w-Z*E);if(at>0&&at<40&&rt<st.r){let pt=at-y/2-st.r;pt<_&&(_=Math.max(.01,pt),v=0)}}let A=m.v0;if(p-m.s<25&&m.next>=0){let st=g.edges[m.next>>1],F={},Z={};g.sample(x,m.dir,p-.5,0,F),g.sample(st,m.next&1,.5,0,Z);let at=F.dx*Z.dx+F.dz*Z.dz;at<.8&&(A=Math.min(A,4+8*Math.max(0,at+.2)))}if(m.bump>0&&(m.bump-=t,A=0),m.wrecked){m.v=0,m.brake=!1;continue}let b=1.6*m.aggr,T=2.5,z=2.2,k=1.3/m.aggr,N=m.v-v,H=z+Math.max(0,m.v*k+m.v*N/(2*Math.sqrt(b*T))),B=b*(1-Math.pow(m.v/Math.max(.1,A),4)-(_<1e8?Math.pow(H/Math.max(.1,_),2):0));for(B=Math.max(-9,B),m.brake=B<-.6||m.v<.3,m.v=Math.max(0,m.v+B*t),_<.3&&m.v>0&&(m.v=Math.min(m.v,.2)),m.s+=m.v*t,m.playerBlock&&m.v<.3&&e.speed<1?(m.wait+=t,m.wait>3.5&&Math.random()<t*.6&&this.honks.push(m)):m.wait=Math.max(0,m.wait-t);m.s>=m.e.len;){if(m.next<0){m.dead=!0;break}m.s-=m.e.len,m.de=m.next,m.e=g.edges[m.de>>1],m.dir=m.de&1,m.lane=m.type==="van"||m.type==="bus"||m.type==="trolley"?m.e.lanes-1:Math.min(m.e.lanes-1,Math.floor(Math.random()*m.e.lanes)),m.v0=xh[m.e.cls]*(.85+Math.random()*.3)*(m.type==="bus"||m.type==="trolley"||m.type==="truck"?.85:1),m.next=this._chooseNext(m),m.transit=!0}let X=this._o||(this._o={});g.sample(m.e,m.dir,Math.min(m.s,m.e.len),g.laneOffset(m.e,m.lane),X),m.transit&&(m.ex=m.x-X.x,m.ez=m.z-X.z,m.transit=!1,Math.hypot(m.ex,m.ez)>12&&(m.ex=m.ez=0));let O=Math.exp(-t*2.5);m.ex*=O,m.ez*=O;let $=X.x+m.ex,Q=X.z+m.ez,lt=$-m.x,P=Q-m.z;if(lt*lt+P*P>1e-4){let F=Math.atan2(lt,P)-m.h;F=Math.atan2(Math.sin(F),Math.cos(F)),m.h+=F*Math.min(1,t*10)}m.x=$,m.z=Q}for(let m=this.cars.length-1;m>=0;m--)this.cars[m].dead&&this._remove(m);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let l in this.models)this.models[l]._i=0;let a=this.night>.5?1.6:.45;for(let l of this.cars){let c=this.models[l.type],h=c._i++;l.wrecked?(this._E=this._E||new tn,this._E.set(0,l.h+l.wreckYaw,l.wreckRoll,"YXZ"),e.setFromEuler(this._E)):e.setFromAxisAngle(s,l.h),t.compose(n.set(l.x,.03,l.z),e,i),c.p.setMatrixAt(h,t),c.d.setMatrixAt(h,t),c.l.setMatrixAt(h,t),c.p.setColorAt(h,o.setHex(l.color)),l.wrecked?o.multiplyScalar(.45):l.hp<100&&o.multiplyScalar(.75+.25*l.hp/100),(l.wrecked||l.hp<100)&&c.p.setColorAt(h,o);let u=l.wrecked&&performance.now()%1e3<500,f=l.wrecked?u?1.6:.1:l.brake?Math.max(a,1.4):a;c.l.setColorAt(h,o.setRGB(f,f,f))}for(let l in this.models){let c=this.models[l];c.p.count=c.d.count=c.l.count=c._i,c.p.instanceMatrix.needsUpdate=c.d.instanceMatrix.needsUpdate=c.l.instanceMatrix.needsUpdate=!0,c.p.instanceColor&&(c.p.instanceColor.needsUpdate=!0),c.l.instanceColor&&(c.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,l=o.z-t.z;if(a*a+l*l>120)continue;let c=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(c/2.2));for(let f=0;f<u;f++){let d=(f/(u-1)-.5)*(c-h*2),g=o.x+Math.sin(o.h)*d,m=o.z+Math.cos(o.h)*d;for(let[x,p]of i){let y=x-g,_=p-m,v=Math.hypot(y,_),S=s+h;if(v<S&&v>1e-4){let E=y/v,w=_/v,A=S-v;t.x+=E*A,t.z+=w*A;let M=t.vx-Math.sin(o.h)*o.v,b=t.vz-Math.cos(o.h)*o.v,T=M*E+b*w;if(T<0){if(t.vx-=E*T*1.25,t.vz-=w*T*1.25,-T>1.5){o.hp=(o.hp??100)- -T*9;let z=o.hp<=0&&!o.wrecked;z&&(o.wrecked=!0,o.wreckRoll=(Math.random()-.5)*.12,o.wreckYaw=(Math.random()-.5)*.6),e&&e(-T,"car",o,g+E*h,m+w*h,-E,-w,z),t.damage=Math.min(100,t.damage+-T*.6)}o.bump=o.wrecked?1e9:2.5+Math.random()*2,o.v*=.3,o.wait=4}}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var Vd=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],Wd=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],Xd=[14200976,13146744,14728864,12094056,13673602],$d=[1709072,2760728,920586,4864040,6974058],Wv=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],va=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let l=new Pe(o,a,this.N);return l.count=0,l.frustumCulled=!1,l.castShadow=!0,l.instanceMatrix.setUsage(Qs),t.add(l),l},i=new ft({roughness:.85}),s=16777215;this.torso=n(zt(new Mt(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(zt(new Mt(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(zt(new Se(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(zt(new Se(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(zt(new Mt(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(zt(new Mt(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(zt(new Mt(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(zt(new Mt(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(un([zt(new Ht(.06,.13,.26,8).translate(0,1.88,0),15921126),zt(new Ht(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new ft({vertexColors:!0,roughness:.9})),this.bag=n(zt(new Mt(.38,.55,.22).translate(0,.32,0),s),i),this.M=new ie,this.M2=new ie,this.Q=new Be,this.V=new I,this.S=new I(1,1,1),this.E=new tn,this.C=new wt,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=Vd[Math.floor(e()*Vd.length)],t.pants=Wd[Math.floor(e()*Wd.length)],t.skin=Xd[Math.floor(e()*Xd.length)],t.hairC=$d[Math.floor(e()*$d.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let l=s-i;l<=s+i;l++)for(let c=o-i;c<=o+i;c++){let h=this.map.chunks.get(We(l,c));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let l=0;l<5;l++){let c=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,f=Math.random()*c.len,d={};this.map.sample(c,u,f,(c.w/2+1.4)*h,d);let g=Math.hypot(d.x-t,d.z-e);if(g<30||g>330||this.map.insideBuilding(d.x,d.z,.3))continue;let m={mode:"walk",e:c,dir:u,s:f,side:h,x:d.x,z:d.z,h:Math.atan2(d.dx,d.dz),ex:0,ez:0,dodge:0};return this._style(m),m}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let l={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(l),l}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let g=i-1;g<=i+1;g++)for(let m=s-1;m<=s+1;m++){let x=this.map.chunks.get(We(g,m));if(x)for(let p of x.crossings){let y=Math.hypot(p[0]-t,p[1]-e);y>40&&y<220&&o.push(p)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],l=this.map.nearestRoad(a[0],a[1],4);if(!l||l.e.cls>4||l.e.w<5)return null;let c=Math.random()<.5?1:-1,h=l.e.w/2+1.2,u=-l.dz,f=l.dx,d={mode:"cross",x:l.x+u*h*c,z:l.z+f*h*c,tx:l.x-u*h*c,tz:l.z-f*h*c,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return d.h=Math.atan2(d.tx-d.x,d.tz-d.z),this._style(d),d.speed=1.4,d}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=Wv.concat(this.extraZones);for(let g of a){let m=Math.hypot(g.x-i,g.z-s);if(g.active=m<420,!g.active)continue;g.count=g.count||0;let x=3;for(;g.count<g.n&&x-- >0&&o.length<this.N-5;){let p=this._spawnPlaza(g);p&&(o.push(p),g.count++)}}let l=0;for(let g of o)g.mode==="walk"&&l++;let c=l<this.target*.5?30:3;for(;l<this.target&&c-- >0&&o.length<this.N-30;){let g=this._spawnWalker(i,s);g&&(o.push(g),l++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let g=this._spawnCrosser(i,s);g&&o.push(g)}let h=Math.sin(e.h),u=Math.cos(e.h),f=e.speed;this.crossers.length=0;let d={};for(let g=o.length-1;g>=0;g--){let m=o[g];if((Math.abs(m.x-i)>380||Math.abs(m.z-s)>380)&&m.mode!=="plaza"){o[g]=o[o.length-1],o.pop();continue}if(m.mode==="plaza"&&!m.zone.active){m.zone.count--,o[g]=o[o.length-1],o.pop();continue}let p=!1;if(m.mode==="walk"){if(m.s+=m.speed*t,m.s>m.e.len){let M=m.dir?m.e.na:m.e.nb,b=[];for(let T of M.out){let z=this.map.edges[T>>1];z!==m.e&&z.cls>=1&&z.cls<=4&&z.w>=5&&b.push(T)}if(!M.out.length||!b.length)m.dir^=1,m.s=0,m.side=-m.side;else{let T=b[Math.floor(Math.random()*b.length)];m.e=this.map.edges[T>>1],m.dir=T&1,m.s=0,m.trans=!0}}this.map.sample(m.e,m.dir,m.s,(m.e.w/2+1.4)*m.side,d),m.trans&&(m.ex=m.x-d.x-m.ex*0,m.ez=m.z-d.z,m.trans=!1,Math.hypot(m.ex,m.ez)>25&&(m.ex=m.ez=0)),m.ex*=Math.exp(-t*.8),m.ez*=Math.exp(-t*.8);let w=d.x+m.ex,A=d.z+m.ez;m.h=Th(m.h,Math.atan2(w-m.x,A-m.z),t*6),m.x=w,m.z=A,p=!0}else if(m.mode==="plaza")if(m.idle>0)m.idle-=t;else{let w=m.tx-m.x,A=m.tz-m.z,M=Math.hypot(w,A);if(M<.5){m.idle=1+Math.random()*6;let b=m.zone;for(let T=0;T<6;T++){let z=Math.random()*6.28,k=Math.sqrt(Math.random())*b.r,N=b.x+Math.cos(z)*k,H=b.z+Math.sin(z)*k;if(!this.map.insideBuilding(N,H,.6)){let B=this.map.nearestRoad(N,H,8);if(!B||B.dist>B.e.w/2+.5){m.tx=N,m.tz=H;break}}}}else{let b=Math.min(M,m.speed*.85*t);m.x+=w/M*b,m.z+=A/M*b,m.h=Th(m.h,Math.atan2(w,A),t*5),p=!0}}else if(m.mode==="cross")if(m.wait>0)m.wait-=t;else{let w=m.tx-m.x,A=m.tz-m.z,M=Math.hypot(w,A);if(M<.3){o[g]=o[o.length-1],o.pop();continue}let b=Math.min(M,m.speed*t);m.x+=w/M*b,m.z+=A/M*b,p=!0,m.h=Th(m.h,Math.atan2(w,A),t*6),this.crossers.push(m)}let y=m.x-i,_=m.z-s,v=y*h+_*u,S=y*u-_*h;if(!m.fixed&&f>2.5&&v>-1&&v<4+f*.45&&Math.abs(S)<2.4&&m.dodge<=0&&(m.dodge=.9,m.dside=S>=0?1:-1,m.scream=!0),m.dodge>0){m.dodge-=t;let w=5.5*t;m.x+=u*m.dside*w,m.z+=-h*m.dside*w,m.mode==="walk"&&(m.ex+=u*m.dside*w,m.ez+=-h*m.dside*w),p=!0}let E=Math.hypot(y,_);if(!m.fixed&&E<2.2&&E>.01){let w=2.2-E;m.x+=y/E*w,m.z+=_/E*w,m.mode==="walk"&&(m.ex+=y/E*w,m.ez+=_/E*w)}m.moving=p,m.phase+=t*(p?m.dodge>0?14:m.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,l=this.list,c=Math.min(l.length,this.N),h=0,u=0;for(let f=0;f<c;f++){let d=l[f],g=d.moving?Math.sin(d.phase):0,m=d.moving?Math.abs(Math.cos(d.phase))*.04:0,x=d.scale;n.setFromAxisAngle(i.set(0,1,0),d.h),t.compose(i.set(d.x,.15+m,d.z),n,s.set(x,x,x)),this.torso.setMatrixAt(f,t),this.hips.setMatrixAt(f,t),this.head.setMatrixAt(f,t),this.hair.setMatrixAt(f,t),this.torso.setColorAt(f,a.setHex(d.shirt)),this.hips.setColorAt(f,a.setHex(d.pants)),this.head.setColorAt(f,a.setHex(d.skin)),this.hair.setColorAt(f,a.setHex(d.hairC));let p=g*.55,y=-g*.5,_=d.dodge>0?2.6:0;xa(this.legL,f,t,e,o,.1,.92,0,p,a.setHex(d.pants)),xa(this.legR,f,t,e,o,-.1,.92,0,-p,a),xa(this.armL,f,t,e,o,.26,1.5,0,y-_,a.setHex(d.shirt)),xa(this.armR,f,t,e,o,-.26,1.5,0,d.wave?-2.7+Math.sin(performance.now()*.008)*.35:-y-_,a),d.kalpak&&this.kalpak.setMatrixAt(h++,t),d.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(d.shirt===1842206?9050650:1846332)),u++)}for(let f of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])f.count=c,f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function xa(r,t,e,n,i,s,o,a,l,c){n.makeRotationX(l),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,c)}function Th(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var qd=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],ya=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function Xv(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],l=26;for(let z=0;z<=l;z++){let k=z/l,N=-n/2+k*n,H;k<.1?H=i*Math.sqrt(1-Math.pow(1-k/.1,2))*.98+.02:k>.72?H=i*(1-Math.pow((k-.72)/.28,1.6)*.82):H=i,a.push(new tt(Math.max(.05,H),N))}let c=new Jo(a,24).rotateX(Math.PI/2);c.rotateY(Math.PI),s.push(zt(c,r.body)),s.push(zt(new Mt(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(zt(new Mt(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(zt(new Mt(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new Hn,u=17*e,f=6.5*e,d=1.6*e,g=7*e;h.moveTo(0,f/2),h.lineTo(u,f/2-g),h.lineTo(u,f/2-g-d),h.lineTo(0,-f/2),h.closePath();let m=new Jn(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),x=m.clone().translate(i*.4,0,-n*.02),p=m.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);x.rotateZ(.06),p.rotateZ(-.06),s.push(zt(x,13159634),zt(p,13159634));for(let z of[-1,1])s.push(zt(new Mt(.2,2.2*e,1.4*e).translate(z*(u+i*.4),.6*e,-n*.02-g-.4*e),r.tail));for(let z of[-1,1])for(let k of t?[.33,.62]:[.36]){let N=z*(i*.4+u*k),H=-n*.02+f/2-g*k+2.6*e;s.push(zt(new Ht(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(N,-1.9*e,H),14211806)),s.push(zt(new Ht(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(N,-1.9*e,H+2.12*e),2105376)),s.push(zt(new Mt(.3,1.2*e,2.5*e).translate(N,-1.2*e,H-.5*e),13159634))}let y=new Hn;y.moveTo(0,0),y.lineTo(5.2*e,0),y.lineTo(1.8*e,7.2*e),y.lineTo(-.6*e,7.2*e),y.closePath();let _=new Jn(y,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(zt(_,r.tail));let v=new Hn;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let S=new Jn(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(zt(S.clone(),13159634),zt(S.clone().scale(-1,1,1),13159634));let E=un(s),w=[],A=2.45*e,M=(z,k)=>[zt(new Ht(.13*e,.13*e,A,6).translate(z,-A/2-i*.6,k),10132122),zt(new Ht(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(z,-A-i*.6+0,k),1381653)];w.push(...M(0,n*.36));for(let z of[-1,1])w.push(...M(z*2.9*e,-n*.06),...M(z*3.5*e,-n*.06));let b=un(w),T=A+i*.6+.55*e;return{body:E,gear:b,groundY:T,len:n,span:u+i*.4,S:e}}function Or(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let l=new Re(o);return l.colorSpace=Me,l.anisotropy=8,l}var Ma=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new qt,t.add(this.group);let i=e.runways.sort((u,f)=>f.length-u.length)[0],s=i.length/2,o=new tt(i[0],i[1]),a=new tt(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new tt(-this.u.y,this.u.x),this.rwW=55;let l=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=l,this.tc=l?new tt(l.cx,l.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let c=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(c.x,c.y,200,u=>u.cls<=6);this.dropoff=h?new tt(h.x,h.z):c,this._zoneMarker(),this.goAround=!1}rel(t){let e=new tt(t.x-this.R0.x,t.y-this.R0.y);return new tt(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new Ee(t,e+14,1,1).rotateX(-Math.PI/2),i=new ft({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new Y(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,l,c]of[["07",70,0],["25",t-70,Math.PI]]){let h=Or(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new Y(new Ee(18,18),new ft({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let f=this.at(l,0),d=new qt;d.add(u),d.position.set(f.x,.05,f.y),d.rotation.y=this.heading+c+Math.PI,this.group.add(d)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let d=0;d<=n;d+=60)for(let g of[-1,1])t.push(this.at(d,g*i)),e.push(d>n-600?[1,.6,.2]:[1,.95,.8]);for(let d=-i;d<=i;d+=3)t.push(this.at(-1,d)),e.push([.2,1,.3]),t.push(this.at(n+1,d)),e.push([1,.1,.1]);for(let d=30;d<n;d+=30)t.push(this.at(d,0)),e.push(d>n-900?Math.floor(d/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let d of this.map.taxiways){let g=d.pts;for(let m=0;m<g.length/2-1;m++){let x=g[m*2],p=g[m*2+1],y=g[m*2+2],_=g[m*2+3],v=Math.hypot(y-x,_-p),S=-(_-p)/v,E=(y-x)/v;for(let w=0;w<v;w+=45)for(let A of[-1,1])t.push(new tt(x+(y-x)*w/v+S*A*(d.w/2+1),p+(_-p)*w/v+E*A*(d.w/2+1))),e.push([.15,.35,1])}}let s=new Se(.28,6,4),o=new fe({color:16777215});this.rwLights=new Pe(s,o,t.length);let a=new ie,l=new wt;t.forEach((d,g)=>{a.makeTranslation(d.x,.35,d.y),this.rwLights.setMatrixAt(g,a),this.rwLights.setColorAt(g,l.setRGB(...e[g]))}),this.rwLightCols=e,this.group.add(this.rwLights);let c=[];for(let d=1;d<=30;d++)c.push(this.at(-d*30,0));let h=[];for(let d=1;d<=30;d++)for(let g=-6;g<=6;g+=2)h.push(this.at(-d*30,g));this.alsBars=new Pe(new Se(.3,6,4),new fe({color:16773312}),h.length),h.forEach((d,g)=>{a.makeTranslation(d.x,1.2,d.y),this.alsBars.setMatrixAt(g,a)}),this.group.add(this.alsBars);let u=new Ht(.08,.08,1.2,4).translate(0,.6,0),f=new Pe(u,new ft({color:7829367}),c.length);c.forEach((d,g)=>{a.makeTranslation(d.x,0,d.y),f.setMatrixAt(g,a)}),this.group.add(f),this.rabbit=new Pe(new Se(.9,8,6),new fe({color:16777215,transparent:!0,opacity:1,blending:Ge,depthWrite:!1}),c.length),c.forEach((d,g)=>{a.makeTranslation(d.x,1.4,d.y),this.rabbit.setMatrixAt(g,a),this.rabbit.setColorAt(g,l.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=c.length,this.papi=[];for(let d=0;d<4;d++){let g=this.at(400,-(this.rwW/2+15+d*9)),m=new Y(new Mt(2,1,1.2),new fe({color:16719904}));m.position.set(g.x,.6,g.y),this.group.add(m),this.papi.push(m)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new qt,n=new ft({color:14736596,roughness:.7}),i=new Y(new Ht(3.2,4.2,38,16),n);i.position.y=19;let s=new Y(new Mt(18,8,14),n);s.position.y=4;let o=new Y(new Ht(7.5,4.5,4,8),n);o.position.y=39.5;let a=new Y(new Ht(8,7.2,5,8),new ft({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let l=new Y(new Ht(8.6,8.6,1,8),n);l.position.y=47;let c=new Y(new Ht(.15,.15,9,5),new ft({color:13378082}));c.position.y=52,this.beacon=new Y(new Se(.6,8,6),new fe({color:16719904})),this.beacon.position.y=57,this.radar=new Y(new Mt(7,1.6,.4),new ft({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,l,c,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=Or("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new fe({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new Y(new Ee(90,7),n),s=null,o=-1e9,a=t.pts;for(let c=0;c<a.length/2;c++){let h=(a[c*2]-t.cx)*this.n.x+(a[c*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=c)}let l=new tt(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(l.x,t.h+4.5,l.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new tt(e[0],e[1]),i=new tt(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(c=>c.p.distanceTo(s)<48))continue;let l=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:l,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new tt(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new Li(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new fe({color:4245759,transparent:!0,opacity:.8,side:we,depthWrite:!1}),this.zone=new Y(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new Y(new Ht(4.8,4.8,14,32,1,!0),new fe({color:4245759,transparent:!0,opacity:.12,side:we,depthWrite:!1,blending:Ge}));e.position.y=7,this.zone.add(e);let n=new mn(new cn({map:Or("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new tt(s.x,s.z):i,this.spotZone=new Y(t.clone(),new fe({color:16756768,transparent:!0,opacity:.8,side:we,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new mn(new cn({map:Or("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=qd[Math.floor(Math.random()*qd.length)],n=Math.random()<t,i=Xv(e,n),s=new ft({vertexColors:!0,metalness:.35,roughness:.35}),o=new qt,a=new Y(i.body,s);a.castShadow=!0;let l=new Y(i.gear,s);l.castShadow=!0;let c=new qt;c.add(a,l),o.add(c);let h=(_,v)=>new Y(new Se(v,6,4),new fe({color:_,transparent:!0,blending:Ge,depthWrite:!1})),u=h(16719904,.5),f=h(2162496,.5),d=h(16777215,.9),g=h(16777215,.9),m=h(16723984,.6),x=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),f.position.set(i.span,-.4,-i.len*.02-7.4*i.S),d.position.copy(u.position),g.position.copy(f.position),m.position.set(0,2.1*i.S,-i.len*.1),x.position.set(0,-1.2*i.S,i.len*.42),c.add(u,f,d,g,m,x);let p=Or(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let _ of[-1,1]){let v=new Y(new Ee(3.4*i.S,1.7*i.S),new fe({map:p,transparent:!0}));v.position.set(_*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=_*Math.PI/2,c.add(v)}this.group.add(o);let y={g:o,inner:c,gear:l,a:i,al:e,wide:n,navR:u,navG:f,strL:d,strR:g,bcn:m,land:x,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:ya[Math.floor(Math.random()*ya.length)],gearDown:1,thrust:0};return this.planes.push(y),y}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new tt(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),c=Math.atan2(s,o)-t.h;c=Math.atan2(Math.sin(c),Math.cos(c));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(c)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=Ie.clamp(c,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new tt(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let l=s*2%1,c=new wt;for(let u=0;u<this.alsN;u++){let f=Math.abs((1-l)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,c.setRGB(f,f,f))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,f)=>u.material.color.setHex(f<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(d=>["approach","landing","takeoff","lineup"].includes(d.state)&&!d.cine),f=this._freeStand();if(!u&&f&&this.planes.filter(d=>!d.cine).length<9){let d=this._newPlane();this._startApproach(d)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let f=this.planes[u];if(f!==i){if(this._updatePlane(f,t,h),f.dead){this.group.remove(f.g),this.planes.splice(u,1);continue}this._pose(f,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new tt(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new tt(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new tt(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-Ie.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new tt(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(l=>l.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=ya[Math.floor(Math.random()*ya.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new tt(Math.sin(i.h),Math.cos(i.h)),o=new tt(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=Pn(s,{}),l=new ft({color:o,vertexColors:!0,roughness:.5}),c=new qt;c.add(new Y(a.paint,l),new Y(a.detail,new ft({vertexColors:!0})));let h=new Y(new Se(.2,6,4),new fe({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,c.add(h),c.scale.setScalar(s==="truck"?.75:1),c.children.forEach(u=>u.castShadow=!0),this.group.add(c),this.vehicles.push({g:c,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let l=Math.atan2(i,s)-e.h;l=Math.atan2(Math.sin(l),Math.cos(l)),e.h+=Ie.clamp(l,-t*1.5,t*1.5);let c=Math.abs(l)>.6?2:5;e.x+=Math.sin(e.h)*c*t,e.z+=Math.cos(e.h)*c*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,l)=>new I(a.x,l,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new I(-3500,520,-9e3),new I(-900,430,-2600),new I(150,380,0),new I(1400,390,1600),new I(400,420,4200),new I(-3e3,480,4e3),new I(-6200,560,-1500),new I(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new kr(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new tt(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new tt(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),l=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let c=Math.atan2(a.x,a.z),h=Math.atan2(l.x*a.z-l.z*a.x,l.x*a.x+l.z*a.z);n.h=c,n.roll+=(Ie.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(Ie.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),l=s.a.S;if(e===0)n.set(s.x-o*70*l,s.y+16*l,s.z-a*70*l),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let c=-a,h=o;n.set(s.x-c*2.3*l+o*2,s.y+.6*l,s.z-h*2.3*l+a*2),i.set(s.x-c*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*l,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new I(s.x,s.y,s.z))>1600)&&(t.camAnchor=new I(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function Yd(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new Re(r);return i.colorSpace=Me,i.anisotropy=8,i}var Ah=()=>new ft({color:6965800,metalness:.85,roughness:.38}),ir=(r=10127994)=>new ft({color:r,roughness:.75}),_a=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new qt,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179),this._whiteHouse(),this._ordo()}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new Y(new Ht(.22,.45,45,12),new ft({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new Y(new Ht(3.5,4,1.2,24),ir(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new Y(new Se(.5,12,8),new ft({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,l=new Ee(o,a,40,16).translate(o/2,0,0),c=new ft({map:Yd(),side:we,roughness:.75});c.onBeforeCompile=d=>{d.uniforms.uTime=sn.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new Y(l,c);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new ft({color:2767402,roughness:.6}),f=new ft({color:13146744});for(let d of[-1,1]){let g=new qt,m=new Y(new Mt(.45,1.05,.28),u);m.position.y=1.35;let x=new Y(new Mt(.38,.85,.24),u);x.position.y=.42;let p=new Y(new Se(.12,10,8),f);p.position.y=2;let y=new Y(new Ht(.16,.13,.12,10),new ft({color:1976862}));y.position.y=2.12;let _=new Y(new Mt(.05,1.2,.05),new ft({color:2759184}));_.position.set(.3,1.5,.1),g.add(m,x,p,y,_),g.children.forEach(v=>v.castShadow=!0),g.position.set(t+d*5,1.2,e+3.5),this.g.add(g),this.anim.push({type:"guard",g,base:g.position.clone(),s:d})}}_manas(t,e,n,i=1){let s=new qt,o=new Y(new Ht(3.2,3.8,9,8),ir(9075824));o.position.y=4.5;let a=new Y(new Ht(6,6.5,1,16),ir(10524808));a.position.y=.5;let l=Ah(),c=new qt,h=new Y(new Se(1,16,12),l);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new Y(new Ht(.55,.8,2.2,10),l);u.position.set(0,4.3,1.9),u.rotation.x=.7;let f=new Y(new Mt(.7,.75,1.6),l);f.position.set(0,5.2,2.8),f.rotation.x=.5;let d=new Y(new Zn(.35,2.2,8),l);d.position.set(0,2.6,-2.5),d.rotation.x=-.6,c.add(h,u,f,d);for(let[E,w,A]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let M=new Y(new Ht(.2,.16,2.4,8).translate(0,-1.2,0),l);M.position.set(E,2.7,w),M.rotation.x=A,c.add(M)}c.rotation.x=-.32,c.position.y=.4;let g=new qt,m=new Y(new Ht(.55,.7,1.9,10),l);m.position.y=5;let x=new Y(new Se(.42,12,10),l);x.position.y=6.3;let p=new Y(new Zn(.45,.8,10),l);p.position.y=6.8;let y=new Y(new Ht(.16,.16,1.8,8).translate(0,.9,0),l);y.position.set(.6,5.6,0),y.rotation.z=-.5;let _=new Y(new Mt(.08,2.4,.18).translate(0,1.2,0),new ft({color:10518608,metalness:1,roughness:.25}));_.position.set(1.4,7.1,0),_.rotation.z=-.3;let v=new Y(new Mt(1.5,1.8,.1),l);v.position.set(0,4.8,-.7),v.rotation.x=.5,g.add(m,x,p,y,_,v);let S=new qt;S.add(c,g),S.position.y=9,s.add(o,a,S),s.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new qt,i=new ft({color:8008488,roughness:.55,metalness:.1}),s=new Y(new Ht(15,16,1.2,36),ir(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let f=u/3*Math.PI*2,d=new I(Math.cos(f)*12,1,Math.sin(f)*12),g=new I(Math.cos(f)*9,15,Math.sin(f)*9),m=new I(Math.cos(f)*2.5,21,Math.sin(f)*2.5),x=new qs(d,g,m),p=new Y(new Ko(x,24,1.1,6,!1),i);n.add(p)}let o=new Y(new mi(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new Y(new Ht(1.6,1.1,.8,16),new ft({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let l=new qt,c=new Y(new Zn(.9,3.4,10),Ah());c.position.y=1.7;let h=new Y(new Se(.32,10,8),Ah());h.position.y=3.6,l.add(c,h),l.position.set(6.5,1.2,0),n.add(l),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new re,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new ge(new Float32Array(90*3),3)),s.setAttribute("seed",new ge(o,1));let a=new _e({uniforms:{uTime:sn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:Ge}),l=new pi(s,a);l.position.set(t,e,n),l.frustumCulled=!1,this.g.add(l);let c=new os(16747056,0,30,2);return c.position.set(t,e+1.5,n),this.g.add(c),this.anim.push({type:"firelight",light:c}),l}_mosque(){let t=this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(g.name)&&g.kind===8)||this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть/.test(g.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),l=new ft({color:15921128,roughness:.5}),c=new ft({color:5939384,metalness:.5,roughness:.25}),h=new ft({color:14200896,metalness:1,roughness:.2}),u=new Y(new Ht(o,o,5,24),l);u.position.set(e,a+2.5,n);let f=new Y(new Se(o,32,16,0,Math.PI*2,0,Math.PI/2),c);f.position.set(e,a+5,n),f.scale.y=1.15;let d=new Y(new Ht(.15,.3,4,8),h);d.position.set(e,a+5+o*1.15+2,n),this.g.add(u,f,d);for(let[g,m]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=e+g*(i/2-2),p=n+m*(s/2-2),y=new Y(new Ht(1.6,2,52,12),l);y.position.set(x,26,p);let _=new Y(new Ht(2.6,2.2,1.4,12),l);_.position.set(x,44,p);let v=new Y(new Zn(1.7,7,12),c);v.position.set(x,55.5,p);let S=new Y(new Ht(.1,.2,2.5,6),h);S.position.set(x,60,p),this.g.add(y,_,v,S),this._col(x,p,2)}this.g.children.slice(-19).forEach(g=>{g.castShadow=!0,g.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new Y(new Ht(4.2,4.4,.6,28,1,!0),ir(12103840));s.position.set(n,.3,i);let o=new Y(new zi(4.1,28).rotateX(-Math.PI/2),new ft({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new re,l=new Float32Array(140);for(let u=0;u<140;u++)l[u]=Math.random();a.setAttribute("position",new ge(new Float32Array(140*3),3)),a.setAttribute("seed",new ge(l,1));let c=new _e({uniforms:{uTime:sn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new pi(a,c);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new qt,i=new ft({color:15263976,metalness:.6,roughness:.3}),s=16,o=new qt,a=new Y(new mi(s,.25,6,48),i);o.add(a);let l=a.clone();l.position.z=1.6,o.add(l);let c=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,f=new Y(new Ht(.08,.08,s,4),i);f.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),f.rotation.z=u-Math.PI/2,o.add(f);let d=new Y(new Mt(1.4,1.5,1.4),new ft({color:c[h%4]}));d.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(d),this.cabins.push({cab:d,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new Y(new Ht(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let f=u.clone();f.position.z=2.2,n.add(f)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new qt,i=new ft({color:10134688,metalness:.6,roughness:.35}),s=new Y(new Ht(.5,.75,13,12).rotateX(Math.PI/2),i),o=new Y(new Zn(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new Hn;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let l=new Y(new Jn(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),c=new Y(new Mt(.15,2.4,2.6),i);c.position.set(0,1.4,-5);let h=new Y(new Ht(.6,1,6,8),ir(8947848));h.position.y=-3.4,n.add(s,o,l,c,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}_findB(t){return this.map.buildings.filter(e=>e.name&&t.test(e.name)).sort((e,n)=>(n.x1-n.x0)*(n.z1-n.z0)-(e.x1-e.x0)*(e.z1-e.z0))[0]}_miniFlag(t,e,n,i=1){this.flagTex||(this.flagTex=Yd());let s=3.2*i,o=1.9*i,a=new Y(new Ht(.05*i,.07*i,6*i,6),new ft({color:13620184,metalness:.8,roughness:.3}));a.position.set(t,e+3*i,n);let l=new Ee(s,o,12,6).translate(s/2,0,0),c=new ft({map:this.flagTex,side:we,roughness:.8});c.onBeforeCompile=u=>{u.uniforms.uTime=sn.uTime,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${s.toFixed(2)};
          transformed.z += sin(position.x*1.6 - uTime*4.0 + ${(t*.1).toFixed(2)}) * 0.35 * k * ${i.toFixed(2)};`)};let h=new Y(l,c);h.position.set(t+.06,e+6*i-o/2-.1,n),this.g.add(a,h)}_whiteHouse(){let t=this._findB(/Жогорку Кеңеш|National Parliament|White House|Ак үй|Белый дом/);if(!t)return;let e=t.pts,n=e.length/2,i=Math.max(t.h,26),s=0;for(let x=0;x<n;x++){let p=(x+1)%n;s+=e[x*2]*e[p*2+1]-e[p*2]*e[x*2+1]}let o=s>0?1:-1,a=[];for(let x=0;x<n;x++){let p=(x+1)%n,y=e[x*2],_=e[x*2+1],v=e[p*2],S=e[p*2+1],E=Math.hypot(v-y,S-_);if(E<8)continue;let w=(S-_)/E*o,A=-(v-y)/E*o,M=Math.floor(E/3.4);for(let b=0;b<=M;b++){let T=b/M;a.push([y+(v-y)*T+w*.45,_+(S-_)*T+A*.45,Math.atan2(w,A)])}}let l=new ft({color:15987180,roughness:.35,metalness:.05}),c=new Pe(new Mt(.7,i-3,.9),l,a.length),h=new ie,u=new Be,f=new I(0,1,0);a.forEach(([x,p,y],_)=>{u.setFromAxisAngle(f,y),h.compose(new I(x,3+(i-3)/2,p),u,new I(1,1,1)),c.setMatrixAt(_,h)}),c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),this.g.add(c);let d=(t.x0+t.x1)/2,g=(t.z0+t.z1)/2,m=new Y(new Mt(t.x1-t.x0+1.6,1.4,t.z1-t.z0+1.6),l);m.position.set(d,i+.7,g),m.castShadow=!0,this.g.add(m),this._miniFlag(d,i+1.4,g,1.6)}_ordo(){let t=this._findB(/Ынтымак Ордо|Yntymak Ordo/);if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.max(t.h,18),a=new ft({color:16118506,roughness:.4}),l=new ft({color:14200896,metalness:1,roughness:.25}),c=Math.min(i,s)*.22,h=new Y(new Ht(c,c*1.05,7,32),a);h.position.set(e,o+3.5,n);let u=new Y(new Se(c,40,20,0,Math.PI*2,0,Math.PI/2),new ft({color:15330802,metalness:.3,roughness:.2}));u.position.set(e,o+7,n),u.scale.y=.85;let f=new Y(new Ht(c*.15,c*.18,3,16),l);f.position.set(e,o+7+c*.85+1.5,n),this.g.add(h,u,f);for(let x=0;x<16;x++){let p=x/16*Math.PI*2,y=new Y(new Ht(.35,.4,7,10),a);y.position.set(e+Math.cos(p)*(c+.8),o+3.5,n+Math.sin(p)*(c+.8)),this.g.add(y)}let d=Math.max(i,s)*.4,g=i>s?"z":"x";for(let x=0;x<8;x++){let p=(x/7-.5)*d,y=new Y(new Ht(.55,.6,o*.9,12),a);g==="z"?y.position.set(e+p,o*.45,t.z1+3):y.position.set(t.x1+3,o*.45,n+p),this.g.add(y)}let m=new Y(new Mt(g==="z"?d+3:6,1.6,g==="z"?6:d+3),a);m.position.set(g==="z"?e:t.x1+1.5,o*.9+.8,g==="z"?t.z1+1.5:n),this.g.add(m),this.g.children.slice(-30).forEach(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),this._miniFlag(e+i*.3,o,n,1.3),this._miniFlag(e-i*.3,o,n,1.3)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var ba=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let m=0;m<e;m++){let x=Math.random()*2-1;s=(s+.02*x)/1.02,i[m]=x*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engShaper=t.createWaveShaper(),this._setDrive(1.5),this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=700,this.engFilter.Q.value=.8,this.engBody=t.createBiquadFilter(),this.engBody.type="peaking",this.engBody.frequency.value=110,this.engBody.gain.value=7,this.engBody.Q.value=1.2;let o=new Float32Array(24),a=new Float32Array(24),l=[0,1,.75,.55,.62,.3,.38,.18,.26,.12,.15,.08,.1,.06,.06,.04,.05,.03,.03,.02,.02,.015,.012,.01];for(let m=1;m<24;m++)a[m]=l[m];this.engWave=t.createPeriodicWave(o,a),this.engOsc=t.createOscillator(),this.engOsc.setPeriodicWave(this.engWave),this.engSub=t.createOscillator(),this.engSub.type="triangle";let c=t.createGain();c.gain.value=.55;let h=t.createGain();h.gain.value=.45,this.engOsc.connect(c),this.engSub.connect(h),c.connect(this.engShaper),h.connect(this.engShaper);let u=t.createBufferSource();u.buffer=n,u.loop=!0,this.engNoiseF=t.createBiquadFilter(),this.engNoiseF.type="bandpass",this.engNoiseF.frequency.value=400,this.engNoiseF.Q.value=.9,this.engNoiseG=t.createGain(),this.engNoiseG.gain.value=.05,u.connect(this.engNoiseF),this.engNoiseF.connect(this.engNoiseG),this.engNoiseG.connect(this.engShaper),u.start(),this.engShaper.connect(this.engBody),this.engBody.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.master),this.engOsc.start(),this.engSub.start(),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG),this.turboG.connect(this.master),this.turbo.start(),this.squealG=t.createGain(),this.squealG.gain.value=0;let f=t.createOscillator();f.frequency.value=6.5;let d=t.createGain();d.gain.value=35,f.connect(d),f.start();for(let m of[960,1105,1240]){let x=t.createOscillator();x.type="sine",x.frequency.value=m,d.connect(x.frequency);let p=t.createGain();p.gain.value=.33,x.connect(p),p.connect(this.squealG),x.start()}this.squealG.connect(this.master),this.lastThr=0,this.lastGear=1;let g=(m,x,p)=>{let y=t.createBufferSource();y.buffer=n,y.loop=!0;let _=t.createBiquadFilter();_.type=m,_.frequency.value=x,_.Q.value=p;let v=t.createGain();return v.gain.value=0,y.connect(_),_.connect(v),v.connect(this.master),y.start(Math.random()*.5),{s:y,fl:_,g:v}};this.wind=g("bandpass",600,.4),this.tyre=g("bandpass",1800,6),this.city=g("lowpass",420,.5),this.jet=g("bandpass",900,.6),this.jetLow=g("lowpass",140,1),this.road=g("lowpass",220,.8),this.rain=g("highpass",2500,.3),this.birdT=0,this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?Math.max(700,e.rpm):0,o=n.carType||"sedan",a={coupe:8,suv:8,bus:6,truck:6,van:4,oldsedan:4,hatch:4,sedan:4}[o]||4,l=o==="van"||o==="bus"||o==="truck",c=s/60*a/2;this.engOsc.frequency.setTargetAtTime(c,i,.025),this.engSub.frequency.setTargetAtTime(c/(a===8?4:2),i,.025);let h=n.throttle||0,u=h*(.6+.4*Math.min(1,s/5e3));this.engFilter.frequency.setTargetAtTime((l?220:280)+s*.16+u*(l?700:1300),i,.05),this.engNoiseF.frequency.setTargetAtTime(Math.min(3e3,c*3),i,.05),this.engNoiseG.gain.setTargetAtTime((l?.16:.05)+u*.08,i,.05),Math.abs(u-(this._drive||0))>.15&&(this._drive=u,this._setDrive(1.2+u*(o==="coupe"?5:2.5)));let f=n.inFlight||n.onFoot,d=f?0:.045+u*.075+Math.min(1,s/7e3)*.035;e&&e.gear!==this.lastGear&&(e.gear>this.lastGear&&h>.3&&(this.engGain.gain.setTargetAtTime(d*.35,i,.01),d*=1),this.lastGear=e.gear),this.engGain.gain.setTargetAtTime(d*(n.onFoot?.4:1),i,.06);let g=o==="coupe"||o==="suv"||l;if(this.turbo.frequency.setTargetAtTime(1800+s*.55,i,.1),this.turboG.gain.setTargetAtTime(f||!g?0:u*Math.min(1,s/6e3)*.012,i,.15),!f&&this.lastThr>.7&&h<.1&&s>3800&&(g&&this._burst(.25,"highpass",2200,.08),o==="coupe"||o==="sedan"))for(let y=0;y<5;y++)setTimeout(()=>this._burst(.02,"lowpass",900,.18*Math.random()),60+Math.random()*600);this.lastThr=h;let m=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(m/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+m*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,m/40*.25),i,.1);let x=n.inFlight||n.onFoot?0:Math.min(1,Math.max(0,(e.slip-.2)*2.2))*(m>4?1:0);this.tyre.g.gain.setTargetAtTime(x*.18,i,.04),this.squealG.gain.setTargetAtTime(x*.05,i,.05),this.rain.g.gain.setTargetAtTime((n.rain||0)*.12,i,.5),this.birdT-=t,this.birdT<=0&&!n.inFlight&&!(n.rain>.2)&&(this.birdT=n.night>.5?.35+Math.random()*.4:1.5+Math.random()*4,n.night>.5?this._cricket():n.cityLevel<.9&&this._bird()),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let p=n.jet||0;this.jet.g.gain.setTargetAtTime(p*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(p*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+p*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=8+Math.random()*14/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}_setDrive(t){let n=new Float32Array(256);for(let i=0;i<256;i++){let s=i/255*2-1;n[i]=Math.tanh(s*t)/Math.tanh(t)}this.engShaper.curve=n}_burst(t,e,n,i){let s=this.ctx,o=s.currentTime,a=s.createBufferSource(),l=s.createBiquadFilter(),c=s.createGain();a.buffer=this.noise,l.type=e,l.frequency.value=n,c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(c),c.connect(this.master),a.start(o,Math.random()),a.stop(o+t+.05)}_bird(){let t=this.ctx,e=t.currentTime,n=2+Math.floor(Math.random()*4),i=2800+Math.random()*1800;for(let s=0;s<n;s++){let o=t.createOscillator(),a=t.createGain(),l=e+s*(.09+Math.random()*.06);o.frequency.setValueAtTime(i,l),o.frequency.exponentialRampToValueAtTime(i*(1.3+Math.random()*.4),l+.06),a.gain.setValueAtTime(0,l),a.gain.linearRampToValueAtTime(.012,l+.01),a.gain.exponentialRampToValueAtTime(1e-4,l+.08),o.connect(a),a.connect(this.master),o.start(l),o.stop(l+.1)}}_cricket(){let t=this.ctx,e=t.currentTime;for(let n=0;n<3;n++){let i=t.createOscillator(),s=t.createGain(),o=e+n*.045;i.frequency.value=4400+Math.random()*200,s.gain.setValueAtTime(0,o),s.gain.linearRampToValueAtTime(.006,o+.005),s.gain.linearRampToValueAtTime(0,o+.03),i.connect(s),s.connect(this.master),i.start(o),i.stop(o+.04)}}ignition(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let n=0;n<6;n++)this._burstAt(e+n*.11,.07,"lowpass",500,.08);this.engGain.gain.setValueAtTime(0,e),this.engGain.gain.linearRampToValueAtTime(.11,e+.75),this.engGain.gain.linearRampToValueAtTime(.05,e+1.4)}_burstAt(t,e,n,i,s){let o=this.ctx,a=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();a.buffer=this.noise,l.type=n,l.frequency.value=i,c.gain.setValueAtTime(s,t),c.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(l),l.connect(c),c.connect(this.master),a.start(t,Math.random()),a.stop(t+e+.05)}ping(){this.blip(1320,.06,.08),setTimeout(()=>this.blip(1760,.08,.07),90)}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=.7;for(let l of[420*n,510*n]){let c=i.createOscillator();c.type="sawtooth",c.frequency.value=l,c.connect(a),c.start(s),c.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*120,n),l.frequency.exponentialRampToValueAtTime(60,n+.3);let c=e.createGain();c.gain.setValueAtTime(a*.5,n),c.gain.exponentialRampToValueAtTime(.001,n+.35),l.connect(c),c.connect(this.master),l.start(n),l.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let l=t.createBufferSource();l.buffer=this.noise;let c=t.createBiquadFilter();c.type="highpass",c.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),l.connect(c),c.connect(h),h.connect(this.master),l.start(e+a),l.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}whistle(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let[n,i]of[[0,.12],[.18,.28]]){let s=t.createOscillator();s.type="sine",s.frequency.value=2900;let o=t.createOscillator();o.frequency.value=35;let a=t.createGain();a.gain.value=140,o.connect(a),a.connect(s.frequency);let l=t.createGain();l.gain.setValueAtTime(0,e+n),l.gain.linearRampToValueAtTime(.12,e+n+.02),l.gain.setValueAtTime(.12,e+n+i),l.gain.linearRampToValueAtTime(0,e+n+i+.03),s.connect(l),l.connect(this.master),s.start(e+n),o.start(e+n),s.stop(e+n+i+.05),o.stop(e+n+i+.05)}}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var xi=150,Xe=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"whitehouse",name:"White House (\u0410\u043A \u04AF\u0439)",local:"\u0410\u043A \u04AF\u0439 \xB7 \u0416\u043E\u0433\u043E\u0440\u043A\u0443 \u041A\u0435\u04A3\u0435\u0448",x:-277,z:-40,fact:`The 7-storey white marble "Ak Uy" on Chuy Avenue, built in 1985. Today it houses the Jogorku Kenesh, Kyrgyzstan's parliament.`},{id:"ordo",name:"Yntymak Ordo (new White House)",local:"\u042B\u043D\u0442\u044B\u043C\u0430\u043A \u041E\u0440\u0434\u043E",x:-1751,z:7480,fact:"The new presidential palace in the south of Bishkek, opened in 2022. The Presidential Administration moved here from the old White House."},{id:"cityhall",name:"Bishkek City Hall",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0448\u0430\u0430\u0440\u0434\u044B\u043A \u043C\u044D\u0440\u0438\u044F\u0441\u044B",x:-1389,z:60,fact:"The mayor's office of Bishkek, on Chuy Avenue next to the National Bank."},{id:"natbank",name:"National Bank",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0431\u0430\u043D\u043A",x:-1436,z:30,fact:"Head office of the National Bank of the Kyrgyz Republic, which issues the som."},{id:"gorky",name:"Gorky Park",local:"\u0413\u043E\u0440\u044C\u043A\u0438\u0439 \u0441\u043A\u0432\u0435\u0440\u0438",x:-887,z:-237,fact:"A shady square park next to the Philharmonic and the Kojomkul Sports Palace."},{id:"kojomkul",name:"Kojomkul Sports Palace",local:"\u041A\u043E\u0436\u043E\u043C\u043A\u0443\u043B \u0430\u0442\u044B\u043D\u0434\u0430\u0433\u044B \u0441\u043F\u043E\u0440\u0442 \u0441\u0430\u0440\u0430\u0439\u044B",x:-726,z:-211,fact:"Named after the legendary strongman Kojomkul. Wrestling, boxing and concerts."},{id:"spartak",name:"Spartak Stadium",local:"\u0421\u043F\u0430\u0440\u0442\u0430\u043A \u0441\u0442\u0430\u0434\u0438\u043E\u043D\u0443",x:-588,z:-470,fact:"The national stadium (also called Dolen Omurzakov Stadium) where Kyrgyzstan's football team plays."},{id:"caravan",name:"Caravan Mall",local:"\u041A\u0430\u0440\u0430\u0432\u0430\u043D",x:-798,z:199,fact:"A shopping centre on Kievskaya street, near the Sheraton."},{id:"sheraton",name:"Sheraton Bishkek",local:"\u0428\u0435\u0440\u0430\u0442\u043E\u043D",x:-1057,z:171,fact:"A 23-floor hotel \u2013 one of the tallest buildings in central Bishkek."},{id:"hyatt",name:"Hyatt Regency",local:"\u0425\u0430\u044F\u0442\u0442 \u0420\u0438\u0434\u0436\u0435\u043D\u0441\u0438",x:759,z:-362,fact:"The classic business hotel next to the Opera and Ballet Theatre and Oak Park."},{id:"knu",name:"Kyrgyz National University",local:"\u041A\u041D\u0423 \u0438\u043C. \u0416. \u0411\u0430\u043B\u0430\u0441\u0430\u0433\u044B\u043D\u0430",x:-1495,z:-555,fact:"The country's oldest university, founded in 1925 and named after the poet Jusup Balasagyn."},{id:"auca",name:"American University of Central Asia",local:"\u0410\u0423\u0426\u0410",x:1918,z:7200,fact:"AUCA's modern campus in the south of Bishkek, opened in 2015."},{id:"botanic",name:"Botanical Garden",local:"\u0411\u043E\u0442\u0430\u043D\u0438\u043A\u0430\u043B\u044B\u043A \u0431\u0430\u043A",x:-1051,z:1915,fact:"The E. Z. Gareev Botanical Garden, with thousands of plant species and quiet alleys."},{id:"ataturk",name:"Ataturk Park",local:"\u0410\u0442\u0430\u0442\u04AF\u0440\u043A \u0441\u0435\u0439\u0438\u043B \u0431\u0430\u0433\u044B",x:-782,z:4370,fact:"A large park in the south with a lake, fountains and a monument to Atat\xFCrk."},{id:"station",name:"Bishkek-2 Railway Station",local:"\u0411\u0438\u0448\u043A\u0435\u043A-2 \u0432\u043E\u043A\u0437\u0430\u043B\u044B",x:190,z:1290,fact:"The main railway station. Trains leave for Balykchy (Issyk-Kul) and Moscow."},{id:"eastbus",name:"Eastern Bus Station",local:"\u0427\u044B\u0433\u044B\u0448 \u0430\u0432\u0442\u043E\u0432\u043E\u043A\u0437\u0430\u043B\u044B",x:2131,z:-1213,fact:"Marshrutkas and buses to the east: Issyk-Kul, Kant and Tokmok."},{id:"alamedin",name:"Alamedin Bazaar",local:"\u0410\u043B\u0430\u043C\u04AF\u0434\u04AF\u043D \u0431\u0430\u0437\u0430\u0440\u044B",x:2784,z:-1202,fact:"A busy market in the east of the city \u2013 fruit, vegetables and everything for the home."},{id:"ortosai",name:"Orto-Sai Bazaar",local:"\u041E\u0440\u0442\u043E-\u0421\u0430\u0439 \u0431\u0430\u0437\u0430\u0440\u044B",x:1095,z:4501,fact:"The southern bazaar on the Ala-Archa road, famous for fresh produce."},{id:"tashrabat",name:"Tash-Rabat Mall",local:"\u0422\u0430\u0448-\u0420\u0430\u0431\u0430\u0442",x:1350,z:2140,fact:"A popular mall on Gorky street, named after the 15th-century stone caravanserai."},{id:"arena",name:"Bishkek Arena",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0410\u0440\u0435\u043D\u0430",x:-6465,z:5340,fact:"A large arena in the west of the city, built for concerts and sports."},{id:"nomad",name:"Nomad Arena Ice Rink",local:"\u041D\u043E\u043C\u0430\u0434 \u0410\u0440\u0435\u043D\u0430",x:5046,z:1978,fact:"The city ice rink in the east of Bishkek."},{id:"conservatory",name:"National Conservatory",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u043A\u043E\u043D\u0441\u0435\u0440\u0432\u0430\u0442\u043E\u0440\u0438\u044F",x:773,z:3392,fact:"The Kyrgyz National Conservatory, where komuz players and opera singers train."},{id:"post",name:"Main Post Office",local:"\u0411\u0430\u0448\u043A\u044B \u043F\u043E\u0447\u0442\u0430\u043C\u0442",x:710,z:171,fact:"The central post office on the corner of Chuy Avenue and Sovetskaya street."},{id:"bcity",name:"Bishkek City Center",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0421\u0438\u0442\u0438",x:1019,z:-577,fact:"A business district with new glass towers north-east of the centre."},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],wa=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=1500,this.bank=5e3,this.tx=[],this.messages=[],this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Xe){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Xe.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color,this.owned=t.owned,this.jobsDone=t.jobs||0,this.custom=t.custom,this.upgrades=t.upgrades,this.bank=t.bank??this.bank,this.tx=t.tx||[],this.messages=t.messages||[],this.rent=t.rent||null,this.rentDay=t.rentDay,this.carRent=t.carRent||null)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:this.homeCar||t?.type,color:this.homeColor??t?.color,owned:[...this.owned||["sedan"]],jobs:this.jobsDone||0,custom:this.custom,upgrades:this.upgrades,bank:this.bank,tx:this.tx.slice(-60),messages:this.messages.slice(-80),rent:this.rent,rentDay:this.rentDay,carRent:this.carRent}))}catch{}}credit(t,e,n=!1){t=Math.round(t),n?(this.bank+=t,this.tx.push({t:Date.now(),a:t,l:e}),this.msg("MBank",`+${ye(t)} \u0441\u043E\u043C \xB7 ${e}. \u0411\u0430\u043B\u0430\u043D\u0441: ${ye(this.bank)} \u0441\u043E\u043C`,"\u{1F3E6}",!0)):this.money+=t}spend(t,e){return t=Math.round(t),this.bank>=t?(this.bank-=t,this.tx.push({t:Date.now(),a:-t,l:e}),!0):this.money>=t?(this.money-=t,!0):!1}charge(t,e){t=Math.round(t),this.bank-=t,this.tx.push({t:Date.now(),a:-t,l:e})}msg(t,e,n="\u{1F4AC}",i=!1){let s={from:t,text:e,icon:n,t:Date.now(),clock:this.hud.clockText(),read:!1};return this.messages.push(s),this.messages.length>120&&this.messages.shift(),this.onMessage&&this.onMessage(s,i),s}issueFine(t,e,n,i,s=0){this.charge(e,"\u0428\u0442\u0440\u0430\u0444: "+t),this.msg("\u041A\u043E\u043E\u043F\u0441\u0443\u0437 \u0448\u0430\u0430\u0440 \xB7 Safe City",`\u0428\u0442\u0440\u0430\u0444 ${ye(e)} \u0441\u043E\u043C \u2013 ${n}. \u0421\u043F\u0438\u0441\u0430\u043D\u043E \u0441 MBank.`,"\u{1F4F8}",!0);let o={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i,heat:s};this.fines.push(o),this.audio.fine(),this.hud.showFine(o),this.onFine&&this.onFine(o)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,l=this.speedState;if(a>xi){if(l.over+=t,l.maxSpeed=Math.max(l.maxSpeed,a),l.armed&&l.over>.6){l.armed=!1,l.lastFine=this.time;let c=Math.round(l.maxSpeed),h=c>200?750:c>170?500:300,u=n.street?` on ${n.street}`:"";o(f=>this.issueFine("Speeding",h,`${c} km/h in a 150 km/h zone${u}`,f))}!l.armed&&this.time-l.lastFine>12&&(l.armed=!0,l.maxSpeed=0,l.over=0)}else a<xi-5&&(l.armed=!0,l.over=0,l.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let c=n.road;for(let d of c.e.signals){let g=Math.sin(e.h),m=Math.cos(e.h),x=g*c.dx+m*c.dz,p=x>=0?0:1;if(d.dir!==p||Math.abs(x)<.7)continue;let y=p?c.e.len-c.s:c.s,_=e._sOnEdge&&e._sOnEdge.e===c.e?e._sOnEdge.s:null;if(_!==null&&_<d.stop&&y>=d.stop){let v=p?-c.lat:c.lat;(c.e.ow||v>-.5)&&this.map.signalState(d.cluster,d.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(S=>this.issueFine("Red light",100,`Ran a red light${n.street?" on "+n.street:""}`,S)))}}let h=Math.sin(e.h),u=Math.cos(e.h),f=h*c.dx+u*c.dz>=0?0:1;e._sOnEdge={e:c.e,s:f?c.e.len-c.s:c.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let c=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;c<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",150,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=c<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(c=>this.issueFine("Runway incursion",1e3,"Entered the active runway at Manas International Airport",c)))):(this.runwayT=0,n.runway=!1),this._moreRules(t,e,n,a,o)}_moreRules(t,e,n,i,s){let o=this.time;this.cool=this.cool||{},this.tm=this.tm||{};let a=this.tm,l=n.street||"the street",c=(v,S,E,w,A)=>{(this.cool[v]||0)>o||(this.cool[v]=o+10,s(M=>this.issueFine(S,E,w,M,A)))},h=(v,S)=>(a[v]=S?(a[v]||0)+t:0,a[v]),u="",f=Math.sin(e.h),d=Math.cos(e.h),g=n.road,m=!1;if(g&&!g.e.ow&&i>12&&g.e.w>=6&&g.e.cls<=4&&g.dist<g.e.w/2+.5){let v=f*g.dx+d*g.dz,S=v>=0?g.lat:-g.lat;m=Math.abs(v)>.7&&S<-.9}let x=h("onc",m);if(x>.6&&(u="ONCOMING LANE \u2013 KEEP RIGHT"),x>2.5&&(a.onc=0,c("onc","Oncoming lane",120,`Drove in the oncoming lane on ${l}`,.5)),this._zoneT=(this._zoneT||0)-t,this._zoneT<=0){this._zoneT=.2;let v="";if(i>6&&!n.runway){let S=this.map.nearestRoad(e.x,e.z,14);if(!(S&&S.dist<S.e.w/2+.4)){let w=Math.floor(e.x/400),A=Math.floor(e.z/400);for(let M=-1;M<=1&&v!=="square";M++)for(let b=-1;b<=1;b++){let T=this.map.chunks.get(We(w+M,A+b));if(T){for(let z of T.areas)if(!(e.x<z.x0||e.x>z.x1||e.z<z.z0||e.z>z.z1)&&!(![0,1,4,5,11].includes(z.type)||!er(e.x,e.z,z.pts))){if(z.type===11){v="square";break}v="park"}}}!v&&S&&S.e.cls>=1&&S.e.cls<=4&&S.e.w>=5&&S.dist<S.e.w/2+3.6&&(v="sidewalk")}}this._zone=v}let p=h("sidewalk",this._zone==="sidewalk"),y=h("park",this._zone==="park"),_=h("square",this._zone==="square");if(p>.3&&(u="GET OFF THE SIDEWALK!"),y>.3&&(u="NO DRIVING IN THE PARK!"),_>.3&&(u="PEDESTRIAN ZONE \u2013 NO CARS!"),p>1.5&&(a.sidewalk=0,c("sidewalk","Driving on the sidewalk",150,`Drove on the sidewalk of ${l}`,.6)),y>1.5&&(a.park=0,c("park","Driving through a park",250,"Drove through a park / lawn",.8)),_>1.2&&(a.square=0,c("square","Pedestrian zone",400,"Drove into a pedestrian square",1.2)),this.peds&&i>22)for(let v of this.peds.list){if(v.fixed)continue;let S=v.x-e.x,E=v.z-e.z;if(S*S+E*E<6.5){u="WATCH OUT \u2013 PEDESTRIAN!",c("ped","Endangering a pedestrian",300,`Nearly hit a pedestrian at ${Math.round(i)} km/h`,1);break}}if(this.peds&&i>8&&this.peds.crossers.length)for(let v of this.peds.crossers){let S=Math.hypot(v.x-e.x,v.z-e.z);if(S<7){u="STOP \u2013 PEOPLE ON THE ZEBRA!",S<4.5&&c("zebra","Did not yield at zebra",150,"Did not give way to pedestrians at a zebra crossing",.4);break}}if(g&&i>15&&!u){let v=f*g.dx+d*g.dz,S=v>=0?0:1,E=S?g.e.len-g.s:g.s;for(let w of g.e.signals){if(w.dir!==S)continue;let A=w.stop-E;if(A>0&&A<30&&this.map.signalState(w.cluster,w.group,this.trafficTime)==="R"){u="RED LIGHT \u2013 STOP!";break}}}i>150&&!u&&(u="SPEEDING \u2013 SLOW DOWN"),u&&!this._lastWarn&&this.onWarn&&this.onWarn(u),this._lastWarn=u,n.warn=u}accident(t,e){if(this.cool=this.cool||{},(this.cool.dtp||0)>this.time)return;this.cool.dtp=this.time+4;let n=t>12?400:t>7?250:120;e(i=>this.issueFine("Road accident (\u0414\u0422\u041F)",n,`Crashed into another car at ${Math.round(t*3.6)} km/h`,i,t>7?1:.4))}checkLandmarks(t){for(let e of Xe)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Xe.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,l=this.map.nearestRoad(o,a,80,x=>x.cls>=1&&x.cls<=4);if(!l)continue;let c=l.lat>=0?1:-1,h=l.e.w/2+1.2,u=l.x-l.dz*h*c,f=l.z+l.dx*h*c;if(this.map.insideBuilding(u,f,.5))continue;let d=Xe.filter(x=>Math.hypot(x.x-u,x.z-f)>700&&(!x.airport||Math.random()<.5)),g=d[Math.floor(Math.random()*d.length)],m=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:f,dest:g,passenger:m[Math.floor(Math.random()*m.length)],t:0,start:null},this.setRoute(u,f,"Pick up "+this.mission.passenger),e){let x={mode:"plaza",zone:{x:u,z:f,r:.1,active:!0,count:0},x:u,z:f,h:0,tx:u,tz:f,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};x.shirt=15909376,x.pants=2238522,x.skin=14200976,x.hairC=1709072,x.scale=1,x.speed=1.2,x.phase=0,x.fixed=!0,e.list.push(x),this.mission.ped=x}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,l=i.fare+a;this.money+=l,this.audio.cash(),this.hud.toast(`Fare paid: ${ye(i.fare)} \u0441\u043E\u043C. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],l=this.route[s+2],c=this.route[s+3],h=l-o,u=c-a,f=h*h+u*u||1,d=((t.x-o)*h+(t.z-a)*u)/f;d=Math.max(0,Math.min(1,d)),i=Math.min(i,Math.hypot(t.x-o-h*d,t.z-a-u*d))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let l=0;l<e.length/2;l++){l>0&&(o+=Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));let c=Math.max(0,l-1),h=Math.min(e.length/2-1,l+1),u=e[h*2]-e[c*2],f=e[h*2+1]-e[c*2+1],d=Math.hypot(u,f)||1;u/=d,f/=d;let g=1.1;if(n.push(e[l*2]-f*g,.22,e[l*2+1]+u*g,e[l*2]+f*g,.22,e[l*2+1]-u*g),i.push(o,0,o,1),l>0){let m=l*2;s.push(m-2,m,m-1,m-1,m,m+1)}}let a=new re;a.setAttribute("position",new Xt(n,3)),a.setAttribute("uv",new Xt(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new _e({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:we})),this.routeMesh=new Y(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function ye(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var Zd=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],Jd=[5,4.2,3.4,2.6,2,1.6,1.2],xe=r=>document.getElementById(r),Ea=class{constructor(t){this.map=t,this.speedo=xe("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=xe("minimap"),this.mctx=this.mini.getContext("2d"),this.big=xe("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,l=Math.min(n,i)/2-6*s,c=t.speed*3.6,h=260,u=Math.PI*.75,f=Math.PI*2.25,d=p=>u+(f-u)*Math.min(1,p/h),g=e.createRadialGradient(o,a,l*.2,o,a,l);g.addColorStop(0,"rgba(20,24,30,0.92)"),g.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=g,e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,l-10*s,d(xi),f),e.stroke(),e.lineWidth=7*s,e.strokeStyle=c>xi?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,l-10*s,u,d(c)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let p=0;p<=h;p+=10){let y=d(p),_=p%20===0;e.strokeStyle=p>xi?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(_?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(y)*(l-18*s),a+Math.sin(y)*(l-18*s)),e.lineTo(o+Math.cos(y)*(l-(_?28:23)*s),a+Math.sin(y)*(l-(_?28:23)*s)),e.stroke(),_&&p%40===0&&e.fillText(p,o+Math.cos(y)*(l-40*s),a+Math.sin(y)*(l-40*s))}let m=d(c);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(m)*12*s,a-Math.sin(m)*12*s),e.lineTo(o+Math.cos(m)*(l-22*s),a+Math.sin(m)*(l-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=c>xi?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(c),o,a+l*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+l*.62);let x=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=x>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,x)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gearLabel||"1",o,a-l*.12)}_miniBase(t,e,n){let i=this.mini.width,s=Math.ceil(i*2.2);(!this._mb||this._mb.width!==s)&&(this._mb=document.createElement("canvas"),this._mb.width=this._mb.height=s,this._mbS=0);let o=s/2/e;if(this._mbS===e&&Math.hypot(t.x-this._mbX,t.z-this._mbZ)<o*.35)return;this._mbS=e,this._mbX=t.x,this._mbZ=t.z;let a=this._mb.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="#1d2329",a.fillRect(0,0,s,s),a.translate(s/2,s/2),a.scale(e,e),a.translate(-t.x,-t.z);let l=400,c=Math.ceil(o/l)+1,h=Math.floor(t.x/l),u=Math.floor(t.z/l);a.fillStyle="#2f3741",a.beginPath();for(let f=h-c;f<=h+c;f++)for(let d=u-c;d<=u+c;d++){let g=this.map.chunks.get(We(f,d));if(g)for(let m of g.buildings){if(Math.abs(m.cx-t.x)>o||Math.abs(m.cz-t.z)>o)continue;let x=m.pts;a.moveTo(x[0],x[1]);for(let p=2;p<x.length;p+=2)a.lineTo(x[p],x[p+1]);a.closePath()}}a.fill(),a.lineCap="round",a.lineJoin="round";for(let f=6;f>=0;f--){a.strokeStyle=Zd[f];for(let d=h-c;d<=h+c;d++)for(let g=u-c;g<=u+c;g++){let m=this.map.chunks.get(We(d,g));if(m)for(let x of m.edges){if(x.cls!==f)continue;a.lineWidth=Math.max(x.w,3/e);let p=x.pts;a.beginPath(),a.moveTo(p[0],p[1]);for(let y=2;y<p.length;y+=2)a.lineTo(p[y],p[y+1]);a.stroke()}}}n&&(a.strokeStyle="#8a9098",a.lineWidth=n.rwW,a.beginPath(),a.moveTo(n.R0.x,n.R0.y),a.lineTo(n.R1.x,n.R1.y),a.stroke())}drawMini(t,e,n,i,s,o){let a=this.mctx,l=this.mini.width,c=this.mini.height,h=this.dpr,u=.55*h*(this.miniZoom||1)*(t.speed>25?.75:1);this._miniBase(t,u,i),a.save(),a.clearRect(0,0,l,c),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.clip(),a.translate(l/2,c/2+c*.12),a.rotate(t.h+Math.PI);let f=this._mb.width;a.drawImage(this._mb,(this._mbX-t.x)*u-f/2,(this._mbZ-t.z)*u-f/2),a.scale(u,u),a.translate(-t.x,-t.z);let d=l/u*.8;if(o&&o(a,u,d),i)for(let p of i.planes)a.fillStyle="#ffffff",a.beginPath(),a.arc(p.x,p.z,14,0,7),a.fill();if(n.route){a.strokeStyle="#3fc8ff",a.lineWidth=6/u*h,a.globalAlpha=.9;let p=n.route;a.beginPath(),a.moveTo(p[0],p[1]);for(let y=2;y<p.length;y+=2)a.lineTo(p[y],p[y+1]);a.stroke(),a.globalAlpha=1}a.fillStyle="#ff9a3a";for(let p of e.cars)Math.abs(p.x-t.x)<d&&Math.abs(p.z-t.z)<d&&a.fillRect(p.x-1.6,p.z-1.6,3.2,3.2);for(let p of Xe)p.x===void 0||Math.abs(p.x-t.x)>d||Math.abs(p.z-t.z)>d||(a.fillStyle=n.visited.has(p.id)?"#6ad06a":"#ffd84a",a.beginPath(),a.arc(p.x,p.z,6/u*h,0,7),a.fill());if(n.routeTarget&&(a.fillStyle="#ff3a6a",a.beginPath(),a.arc(n.routeTarget.x,n.routeTarget.z,8/u*h,0,7),a.fill()),s)for(let p of s.players.values())a.fillStyle="#3ddc84",a.beginPath(),a.arc(p.x,p.z,6/u*h,0,7),a.fill();a.restore(),a.save(),a.translate(l/2,c/2+c*.12),a.fillStyle="#3fc8ff",a.strokeStyle="#fff",a.lineWidth=2*h,a.beginPath(),a.moveTo(0,-10*h),a.lineTo(7*h,8*h),a.lineTo(0,4*h),a.lineTo(-7*h,8*h),a.closePath(),a.fill(),a.stroke(),a.restore();let g=t.h+Math.PI;a.fillStyle="#ff5050",a.font=`700 ${12*h}px Inter, Arial`,a.textAlign="center",a.textBaseline="middle";let m=l/2+Math.sin(g)*(l/2-14*h),x=c/2-Math.cos(g)*(c/2-14*h);a.fillText("N",m,x),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.strokeStyle="rgba(255,255,255,0.25)",a.lineWidth=2*h,a.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",i=>{t={x:i.clientX,y:i.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",i=>{if(!t)return;let s=i.clientX-t.x,o=i.clientY-t.y;Math.abs(s)+Math.abs(o)>4&&(t.moved=!0),this.mapView.x=t.vx-s*this.dpr/this.mapView.s,this.mapView.z=t.vz-o*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",i=>{if(t&&!t.moved&&this.onMapClick){let s=this.big.getBoundingClientRect(),o=this.mapView.x+((i.clientX-s.left)*this.dpr-this.big.width/2)/this.mapView.s,a=this.mapView.z+((i.clientY-s.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(o,a,i.shiftKey)}t=null}),this.big.addEventListener("wheel",i=>{i.preventDefault();let s=this.big.getBoundingClientRect();this.zoomMap(i.deltaY<0?1.25:1/1.25,(i.clientX-s.left)*this.dpr,(i.clientY-s.top)*this.dpr)},{passive:!1});let e=null,n=i=>[...i.touches].map(s=>[s.clientX,s.clientY]);this.big.addEventListener("touchstart",i=>{i.preventDefault();let s=n(i);e={p:s,x:this.mapView.x,z:this.mapView.z,s:this.mapView.s,moved:!1,d:s.length>1?Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]):0}},{passive:!1}),this.big.addEventListener("touchmove",i=>{if(i.preventDefault(),!e)return;let s=n(i);if(s.length>1&&e.d){let o=Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]);this.mapView.s=Math.max(.015,Math.min(4,e.s*o/e.d)),e.moved=!0}else if(s.length===1){let o=s[0][0]-e.p[0][0],a=s[0][1]-e.p[0][1];Math.abs(o)+Math.abs(a)>6&&(e.moved=!0),this.mapView.x=e.x-o*this.dpr/this.mapView.s,this.mapView.z=e.z-a*this.dpr/this.mapView.s}},{passive:!1}),this.big.addEventListener("touchend",i=>{if(e&&!e.moved&&i.touches.length===0&&this.onMapClick){let s=this.big.getBoundingClientRect(),[o,a]=e.p[0];this.onMapClick(this.mapView.x+((o-s.left)*this.dpr-this.big.width/2)/this.mapView.s,this.mapView.z+((a-s.top)*this.dpr-this.big.height/2)/this.mapView.s,!1)}i.touches.length===0?e=null:e={p:n(i),x:this.mapView.x,z:this.mapView.z,s:this.mapView.s,moved:!0,d:0}})}drawBigMap(t,e,n,i){let s=this.big.width,o=this.big.height,a=this.mapView,l=[a.x|0,a.z|0,a.s.toFixed(4),s,o,e.route?e.route.length+":"+(e.route[0]|0):0,this.searchMark?this.searchMark.x:0,e.visited.size].join("|");(!this._base||this._base.width!==s||this._base.height!==o)&&(this._base=document.createElement("canvas"),this._base.width=s,this._base.height=o,this._mapKey=null),l!==this._mapKey&&(this._mapKey=l,this._drawMapBase(this._base.getContext("2d"),t,e,n));let c=this.bctx;c.drawImage(this._base,0,0);let h=(g,m)=>[(g-a.x)*a.s+s/2,(m-a.z)*a.s+o/2];if(c.font=`600 ${11*this.dpr}px Inter, Arial`,c.textAlign="center",i)for(let g of i.players.values()){let[m,x]=h(g.x,g.z);c.fillStyle="#3ddc84",c.beginPath(),c.arc(m,x,6*this.dpr,0,7),c.fill(),c.fillStyle="#fff",c.fillText(g.name,m,x-10*this.dpr)}let[u,f]=h(t.x,t.z);c.save(),c.translate(u,f),c.rotate(Math.PI-t.h),c.fillStyle="#3fc8ff",c.strokeStyle="#fff",c.lineWidth=2*this.dpr;let d=this.dpr;c.beginPath(),c.moveTo(0,-11*d),c.lineTo(8*d,9*d),c.lineTo(0,4*d),c.lineTo(-8*d,9*d),c.closePath(),c.fill(),c.stroke(),c.restore()}_drawMapBase(t,e,n,i,s){let o=this.big.width,a=this.big.height,l=this.mapView,c=l.s;t.fillStyle="#161b20",t.fillRect(0,0,o,a),t.save(),t.translate(o/2,a/2),t.scale(c,c),t.translate(-l.x,-l.z);let h=l.x-o/2/c,u=l.x+o/2/c,f=l.z-a/2/c,d=l.z+a/2/c,g={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let x of this.map.areaList){let p=g[x[0]];if(!p)continue;let y=x[1];if(!(y[0]*.1<h-2e3||y[0]*.1>u+2e3||y[1]*.1<f-2e3||y[1]*.1>d+2e3)){t.fillStyle=p,t.beginPath(),t.moveTo(y[0]*.1,y[1]*.1);for(let _=2;_<y.length;_+=2)t.lineTo(y[_]*.1,y[_+1]*.1);t.fill()}}if(c>.035){t.fillStyle=c>.25?"#343c46":"#2a3139";for(let x of this.map.buildings){if(x.cx<h||x.cx>u||x.cz<f||x.cz>d)continue;let p=x.pts;t.beginPath(),t.moveTo(p[0],p[1]);for(let y=2;y<p.length;y+=2)t.lineTo(p[y],p[y+1]);t.fill()}}t.lineCap="round",t.lineJoin="round";for(let x=6;x>=0;x--)if(!(c<.08&&x>=5)){t.strokeStyle=Zd[x],t.lineWidth=Math.max(Jd[x]*.6/c*this.dpr*.5,(this.map.edges[0],0))||1,t.beginPath();for(let p of this.map.edges){if(p.cls!==x)continue;let y=p.pts;if(!(y[0]<h-500||y[0]>u+500||y[1]<f-500||y[1]>d+500)){t.moveTo(y[0],y[1]);for(let _=2;_<y.length;_+=2)t.lineTo(y[_],y[_+1])}}t.lineWidth=Math.max(Jd[x]*.5/c*this.dpr,(7-x)*1.2),c>.5&&(t.lineWidth=Math.max(t.lineWidth,6)),t.stroke()}if(i&&(t.strokeStyle="#9aa0a8",t.lineWidth=Math.max(55,3/c),t.beginPath(),t.moveTo(i.R0.x,i.R0.y),t.lineTo(i.R1.x,i.R1.y),t.stroke()),n.route){t.strokeStyle="#3fc8ff",t.lineWidth=5/c*this.dpr;let x=n.route;t.beginPath(),t.moveTo(x[0],x[1]);for(let p=2;p<x.length;p+=2)t.lineTo(x[p],x[p+1]);t.stroke()}t.restore();let m=(x,p)=>[(x-l.x)*c+o/2,(p-l.z)*c+a/2];if(c>.12){t.font=`500 ${10*this.dpr}px Inter, Arial`,t.textAlign="center";let x=[],p=(y,_,v,S,E)=>{let[w,A]=m(_,v);w<0||w>o||A<0||A>a||x.some(M=>Math.abs(M[0]-w)<70*this.dpr&&Math.abs(M[1]-A)<14*this.dpr)||(x.push([w,A]),t.fillStyle=S,t.beginPath(),t.arc(w,A,E*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,.7)",t.fillText(y,w+1,A-6*this.dpr+1),t.fillStyle="#e8eef4",t.fillText(y,w,A-6*this.dpr))};for(let y of this.map.pois)p((y.en||y.name).slice(0,28),y.x,y.z,"#7ec8ff",3);if(c>.55)for(let y of this.map.chunks.values()){let _=y.cx*400,v=y.cz*400;if(!(_>u+400||_+400<h-400||v>d+400||v+400<f-400))for(let S of y.signs)p(S.name.slice(0,24),S.x,S.z,"#ffb070",2.5)}}t.font=`600 ${12*this.dpr}px Inter, Arial`,t.textAlign="center";for(let x of Xe){if(x.x===void 0)continue;let[p,y]=m(x.x,x.z);p<-50||p>o+50||y<-50||y>a+50||(t.fillStyle=n.visited.has(x.id)?"#6ad06a":"#ffd84a",t.beginPath(),t.arc(p,y,5*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.6)",t.fillText(x.name,p+1,y-9*this.dpr+1),t.fillStyle="#fff",t.fillText(x.name,p,y-9*this.dpr))}if(c>.18){t.font=`${10*this.dpr}px Inter, Arial`,t.fillStyle="rgba(255,255,255,0.75)";let x=new Set;for(let p of this.map.edges){if(p.cls>2||p.name<0||p.len<150)continue;let y=this.map.names[p.name],_=y[1]||y[0],v=Math.floor(p.pts.length/4)*2,[S,E]=m(p.pts[v],p.pts[v+1]);if(S<0||S>o||E<0||E>a)continue;let w=_+Math.round(S/220)+","+Math.round(E/220);x.has(w)||(x.add(w),t.fillText(_,S,E))}}if(this.searchMark){let[x,p]=m(this.searchMark.x,this.searchMark.z),y=this.dpr;t.fillStyle="#ff3a6a",t.strokeStyle="#fff",t.lineWidth=2*y,t.beginPath(),t.moveTo(x,p),t.arc(x,p-18*y,9*y,Math.PI*.8,Math.PI*2.2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(x,p-18*y,3.5*y,0,7),t.fill()}if(n.routeTarget){let[x,p]=m(n.routeTarget.x,n.routeTarget.z);t.fillStyle="#ff3a6a",t.beginPath(),t.arc(x,p,7*this.dpr,0,7),t.fill()}t.fillStyle="rgba(255,255,255,0.5)",t.textAlign="right",t.font=`${10*this.dpr}px Inter, Arial`,t.fillText("Map data \xA9 OpenStreetMap contributors",o-10*this.dpr,a-10*this.dpr)}zoomMap(t,e,n){let i=this.mapView,s=this.big.width,o=this.big.height,a=e??s/2,l=n??o/2,c=i.x+(a-s/2)/i.s,h=i.z+(l-o/2)/i.s;i.s=Math.max(.015,Math.min(4,i.s*t)),i.x=c-(a-s/2)/i.s,i.z=h-(l-o/2)/i.s}zoomMini(t){this.miniZoom=Math.max(.35,Math.min(3,(this.miniZoom||1)*t))}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t&&t!==this._street&&(this._street=t,xe("street").innerHTML=`${t}<small>${e||""}</small>`,xe("street").classList.add("show"),clearTimeout(this._stTo),this._stTo=setTimeout(()=>xe("street").classList.remove("show"),4e3))}setMoney(t){let e=ye(t);if(e!==this._money){let n=this._mv!==void 0&&t>this._mv;if(this._money=e,this._mv=t,xe("money").textContent=e,xe("coins").classList.toggle("neg",t<0),n){let i=xe("coins");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}}setClock(t,e){this.hour=t;let n=this.clockText()+(e!=null?` \xB7 <span class="dot ${e>0?"on":""}"></span>${e+1}`:"");n!==this._clk&&(this._clk=n,xe("clock").innerHTML=n)}setLimit(t,e,n,i){let s=t>xi;xe("limit").classList.toggle("show",t>xi-12),xe("limit").classList.toggle("over",s);let o=n?"ACTIVE RUNWAY \u2013 LEAVE NOW":e?"WRONG WAY \u2013 ONE-WAY STREET":i||"";o!==this._w&&(this._w=o,xe("warn").textContent=o,xe("warn").classList.toggle("show",!!o))}setMission(t){t!==this._mission&&(this._mission=t,xe("mission").innerHTML=t||"",xe("mission").classList.toggle("show",!!t))}toast(t,e=3){let n=xe("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=xe("fine");xe("fineKind").textContent=t.kind.toUpperCase(),xe("fineAmt").textContent="\u2212"+ye(t.amount)+" \u0441\u043E\u043C",xe("fineDetail").textContent=t.detail,xe("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=xe("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=xe("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=xe("discover");xe("discName").textContent=t.name,xe("discLocal").textContent=t.local||"",xe("discFact").textContent=t.fact,xe("discCount").textContent=`Landmark ${e}/${n} \xB7 +500 \u0441\u043E\u043C`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=xe("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),xe("fhAlt").textContent=Math.round(t.alt)+" m",xe("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",xe("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",xe("fhStage").textContent=t.stage,xe("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var $v=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar","Saltanat","Ulan","Aidana","Bekzat","Kymbat","Marat"],Qn=r=>r[Math.floor(Math.random()*r.length)],as={taxi:{name:"Taxi driver",icon:"\u{1F695}",desc:"Pick up passengers anywhere in the city"},bus:{name:"Bus driver",icon:"\u{1F68C}",desc:"Drive a city bus route, stop at every bus stop",car:"bus"},marshrutka:{name:"Marshrutka driver",icon:"\u{1F690}",desc:"Minibus route \u2013 faster, fewer passengers",car:"van"},courier:{name:"Courier",icon:"\u{1F4E6}",desc:"Deliver food & parcels from real shops"}},Sa=class{constructor(t,e,n,i,s){this.map=t,this.game=e,this.hud=n,this.audio=i,this.peds=s,this.active=null,this.marker=null,this.completed=0,this.shops=[];for(let o of t.chunks.values())for(let a of o.signs)["cafe","restaurant","fast_food","supermarket","convenience","pharmacy","bakery","clothes"].includes(a.kind)&&this.shops.push(a)}_marker(t,e,n,i=16760864){if(!this.markerMesh){let s=new qt,o=new Y(new Li(3.2,3.8,48).rotateX(-Math.PI/2),new fe({color:i,transparent:!0,opacity:.9,depthWrite:!1}));o.position.y=.25;let a=new Y(new Ht(3.5,3.5,40,32,1,!0),new fe({color:i,transparent:!0,opacity:.1,side:we,depthWrite:!1,blending:Ge}));a.position.y=20,s.add(o,a),this.markerMesh=s,this.ring=o,this.beam=a}this.ring.material.color.setHex(i),this.beam.material.color.setHex(i),this.markerMesh.position.set(e,0,n),this.markerMesh.parent||t.add(this.markerMesh),this.markerMesh.visible=!0}_hideMarker(){this.markerMesh&&(this.markerMesh.visible=!1)}_curbPoint(t,e,n=120){let i=this.map.nearestRoad(t,e,n,a=>a.cls>=1&&a.cls<=5);if(!i)return null;let s=i.lat>=0?1:-1,o=i.e.w/2+1.3;return{x:i.x-i.dz*o*s,z:i.z+i.dx*o*s,roadX:i.x-i.dz*(i.e.w/2-1.5)*s,roadZ:i.z+i.dx*(i.e.w/2-1.5)*s}}_spawnPed(t,e,n=!1,i){let s={mode:"plaza",zone:{x:t,z:e,r:.1,active:!0,count:0},x:t,z:e,h:0,tx:t,tz:e,idle:1e9,ex:0,ez:0,dodge:0,wave:n,fixed:!0};return s.shirt=i??Qn([15909376,1981018,9054794,15263976,3890490]),s.pants=2238522,s.skin=Qn([14200976,13146744,14728864]),s.hairC=1709072,s.scale=.95+Math.random()*.1,s.speed=1.3,s.phase=0,this.peds.list.push(s),s}_removePed(t){let e=this.peds.list.indexOf(t);e>=0&&this.peds.list.splice(e,1)}start(t,e,n,i){if(this.stop(e,i,!0),t==="taxi")return this._startTaxi(e,n);if(t==="courier")return this._startCourier(e,n);if(t==="bus"||t==="marshrutka")return this._startBus(t,e,n,i)}stop(t,e,n){let i=this.active;i&&(i.ped&&this._removePed(i.ped),(i.type==="bus"||i.type==="marshrutka")&&i.earned>0&&this.game.credit(i.earned,`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430: \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ${i.num} (\u043D\u0435\u043F\u043E\u043B\u043D\u044B\u0439)`,!0),i.boarders&&i.boarders.forEach(s=>this._removePed(s)),i.prevCar&&e&&e(i.prevCar.type,i.prevCar.color,!0),this.active=null,this._hideMarker(),this.game.clearRoute(),n||this.hud.toast("Shift ended",1.5))}_startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=this._curbPoint(t.x+Math.cos(i)*s,t.z+Math.sin(i)*s,80);if(!o||this.map.insideBuilding(o.x,o.z,.5))continue;let a=Xe.filter(c=>c.x!==void 0&&Math.hypot(c.x-o.x,c.z-o.z)>700&&(!c.airport||Math.random()<.35)),l=Qn(a);if(Math.random()<.5&&this.shops.length){let c=Qn(this.shops);Math.hypot(c.x-o.x,c.z-o.z)>600&&(l={name:c.name,x:c.x,z:c.z})}return this.active={type:"taxi",stage:"pickup",x:o.x,z:o.z,dest:l,passenger:Qn($v),t:0,damage0:t.damage},this.active.ped=this._spawnPed(o.x,o.z,!0,15909376),this.game.setRoute(o.x,o.z,"Passenger"),this._marker(e,o.x,o.z,16760864),this.audio.chime(),this.hud.toast(`\u{1F695} <b>${this.active.passenger}</b> is waiting for a taxi`,3),!0}return!1}_startCourier(t,e){let n=this.shops.filter(c=>{let h=Math.hypot(c.x-t.x,c.z-t.z);return h>120&&h<900});if(!n.length)return!1;let i=Qn(n),s=this._curbPoint(i.x,i.z,60)||{x:i.x,z:i.z},o=null;for(let c=0;c<60&&!o;c++){let h=this.map.buildings[Math.floor(Math.random()*this.map.buildings.length)],u=Math.hypot(h.cx-s.x,h.cz-s.z);u>900&&u<3200&&h.h>3&&(o=h)}if(!o)return!1;let a=this._curbPoint(o.cx,o.cz,80)||{x:o.cx,z:o.cz},l={cafe:"coffee & samsa",restaurant:"plov & lagman",fast_food:"shawarma",supermarket:"groceries",convenience:"a parcel",pharmacy:"medicine",bakery:"fresh nan",clothes:"a clothes parcel"}[i.kind]||"a parcel";return this.active={type:"courier",stage:"pickup",x:s.x,z:s.z,shop:i,item:l,dest:{name:"Customer",x:a.x,z:a.z},t:0,damage0:t.damage},this.game.setRoute(s.x,s.z,i.name),this._marker(e,s.x,s.z,4251776),this.audio.chime(),this.hud.toast(`\u{1F4E6} Pick up <b>${l}</b> at <b>${i.name}</b>`,3),!0}_startBus(t,e,n,i){let s=this.map.busStopList,o=s.map(a=>({s:a,d:Math.hypot(a[0]-e.x,a[1]-e.z)})).filter(a=>a.d<1500).sort((a,l)=>a.d-l.d).slice(0,12);if(!o.length)return this.hud.toast("No bus stops nearby \u2013 drive into the city",2),!1;for(let a=0;a<12;a++){let l=Qn(o).s,c=s.filter(y=>{let _=Math.hypot(y[0]-l[0],y[1]-l[1]);return _>2500&&_<5500});if(!c.length)continue;let h=Qn(c),u=this.map.route(l[0],l[1],h[0],h[1]);if(!u||u.length<8)continue;let f=[],d=0;for(let y=0;y<u.length-2;y+=2){let _=u[y],v=u[y+1],S=u[y+2],E=u[y+3],w=S-_,A=E-v,M=Math.hypot(w,A)||1;for(let b of s){if(Math.abs(b[0]-_)>M+25||Math.abs(b[1]-v)>M+25)continue;let T=((b[0]-_)*w+(b[1]-v)*A)/(M*M);if(T<0||T>1)continue;let z=_+w*T,k=v+A*T,N=((b[0]-_)*-A+(b[1]-v)*w)/M;Math.abs(N)<22&&N>-4&&f.push({x:b[0],z:b[1],d:d+T*M,px:z,pz:k})}d+=M}f.sort((y,_)=>y.d-_.d);let g=[];for(let y of f)(!g.length||y.d-g[g.length-1].d>220)&&g.push(y);if(g.length<4)continue;let m=Qn(t==="bus"?["7","20","31","35","38","42","48","52","62","64"]:["107","110","126","144","150","174","192","206","212","238","246","265"]);this.active={type:t,stage:"drive",stops:g.slice(0,12),i:0,num:m,t:0,pax:0,earned:0,boarders:[],prevCar:{type:e.type,color:e.color}},i(as[t].car,t==="bus"?2783802:16053492,!1);let x=this.active.stops[0],p=this.map.nearestRoad(x.px,x.pz,40,y=>y.cls<=4);if(p){let y=this.map.laneOffset(p.e,(p.e.ow,p.e.lanes-1)),_=u[2]-u[0],v=u[3]-u[1],S=p.dx,E=p.dz;S*_+E*v<0&&(S=-S,E=-E),e.place(p.x-E*y,p.z+S*y,Math.atan2(S,E))}return this.active.i=1,this._nextStop(n),this.audio.chime(),this.hud.toast(`${as[t].icon} Route <b>${m}</b>: ${g.length} stops. Stop at each bus stop to pick up passengers.`,4),!0}return this.hud.toast("Could not build a route here \u2013 try on a main avenue",2),!1}_nextStop(t){let e=this.active,n=e.stops[e.i];this.game.setRoute(n.x,n.z,`Stop ${e.i+1}/${e.stops.length}`),this._marker(t,n.px,n.pz,4235519),e.boarders.forEach(s=>this._removePed(s)),e.boarders=[];let i=1+Math.floor(Math.random()*(e.type==="bus"?6:4));for(let s=0;s<i;s++)e.boarders.push(this._spawnPed(n.x+(Math.random()-.5)*4,n.z+(Math.random()-.5)*3,!1))}update(t,e,n,i){let s=this.active;return s?(s.t+=t,this.markerMesh&&(this.ring.rotation.y+=t,this.beam.material.opacity=.08+.05*Math.sin(s.t*4)),s.type==="taxi"||s.type==="courier"?this._updateAB(t,e,n):this._updateBus(t,e,n,i)):null}_updateAB(t,e,n){let i=this.active,s=Math.hypot(e.x-i.x,e.z-i.z);if(i.ped&&i.stage==="pickup"&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.moving=!1),i.stage==="pickup"&&s<10&&e.speed<1.5)return i.ped?(i.stage="boarding",i.ped.wave=!1,i.ped.tx=e.x,i.ped.tz=e.z,i.ped.idle=0,i.ped.zone.r=.1,i.bt=0):this._beginRide(e,n),null;if(i.stage==="boarding"){i.bt+=t;let o=i.ped,a=e.x-o.x,l=e.z-o.z,c=Math.hypot(a,l);return c>2&&i.bt<5?(o.x+=a/c*1.6*t,o.z+=l/c*1.6*t,o.h=Math.atan2(a,l),o.moving=!0,o.phase+=t*8):(this._removePed(o),i.ped=null,this.audio.blip(520,.06),this._beginRide(e,n)),null}if(i.stage==="ride"&&s<14&&e.speed<1.5){let o=i.t-i.t0,a=i.dist,l=i.type==="taxi"?120+a/1e3*55:90+a/1e3*45,c=a/1e3*95+35,h=Math.max(0,e.damage-i.damage0),u=o<c?Math.min(l*.4,(c-o)*1.2):0,f=h*(i.type==="courier"?6:3),d=Math.max(1,Math.min(5,Math.round(5-h/8-Math.max(0,o-c)/40))),g=Math.max(20,Math.round((l+u-f)*(.6+d*.1)/5)*5);this.game.money+=g,this.completed++,this.audio.cash(),this.hud.toast(`${i.type==="taxi"?"\u{1F695}":"\u{1F4E6}"} +${g} \u0441\u043E\u043C \xB7 ${"\u2605".repeat(d)}${"\u2606".repeat(5-d)}${i.type==="taxi"?` \xB7 ${i.passenger}: "Rahmat!"`:""}`,4);let m=i.type;return this.active=null,this._hideMarker(),this.game.clearRoute(),this.nextIn=3,this.nextType=m,{done:!0,coins:g}}return null}_beginRide(t,e){let n=this.active;n.stage="ride",n.t0=n.t,n.x=n.dest.x,n.z=n.dest.z,n.dist=Math.hypot(n.x-t.x,n.z-t.z),this.game.setRoute(n.x,n.z,n.dest.name),this._marker(e,n.x,n.z,n.type==="taxi"?16728160:4251776),this.audio.chime(),this.hud.toast(n.type==="taxi"?`${n.passenger}: "Salam! To ${n.dest.name}, please."`:`\u{1F4E6} Got ${n.item}. Deliver it carefully!`,3)}_updateBus(t,e,n,i){let s=this.active,o=s.stops[s.i],a=Math.hypot(e.x-o.px,e.z-o.pz);if(s.stage==="drive"&&a<14&&e.speed<1&&(s.stage="doors",s.dt=0,this.audio.blip(440,.1)),s.stage==="doors"){s.dt+=t;let l=0;for(let c of s.boarders){if(c.gone)continue;let h=e.x-c.x,u=e.z-c.z,f=Math.hypot(h,u);f<2.8||s.dt>7?(c.gone=!0,this._removePed(c),s.pax++,s.earned+=s.type==="bus"?15:20,this.audio.blip(880,.03,.05)):(c.x+=h/f*1.7*t,c.z+=u/f*1.7*t,c.h=Math.atan2(h,u),c.moving=!0,c.phase+=t*8,l++)}if(e.speed>2&&(s.stage="drive",this.hud.toast("You left before everyone boarded!",1.5)),!l&&s.dt>2.5){if(s.i++,s.i>=s.stops.length){let c=150+s.stops.length*20;s.earned+=c,this.completed++,this.game.credit(s.earned,`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430: \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ${s.num}`,!0),this.audio.cash(),this.hud.toast(`\u{1F3C1} Route ${s.num} complete! ${s.pax} passengers \xB7 +${s.earned} \u0441\u043E\u043C`,5);let h=s.prevCar;return this.active=null,this._hideMarker(),this.game.clearRoute(),i(h.type,h.color,!0),{done:!0,coins:s.earned}}s.stage="drive",this._nextStop(n)}}return null}status(t){let e=this.active;return e?e.type==="taxi"?e.stage==="ride"?`\u{1F695} ${e.passenger} \u2192 ${e.dest.name}`:`\u{1F695} Pick up ${e.passenger}`:e.type==="courier"?e.stage==="ride"?`\u{1F4E6} Deliver ${e.item}`:`\u{1F4E6} Pick up at ${e.shop.name}`:`${as[e.type].icon} Route ${e.num} \xB7 stop ${Math.min(e.i+1,e.stops.length)}/${e.stops.length} \xB7 ${e.pax} pax`:null}};var qv="wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket",Kd="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU",Rh="realtime:bskdrive-world-v1";function Yv(){try{let r=localStorage.getItem("bd_uid");return r||(r=Math.random().toString(36).slice(2,10),localStorage.setItem("bd_uid",r)),r}catch{return Math.random().toString(36).slice(2,10)}}function jd(r,t="#ffffff"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font="700 30px Inter, Arial";let i=Math.min(248,n.measureText(r).width+28);n.fillStyle="rgba(10,14,20,0.72)";let s=18,o=(256-i)/2;n.beginPath(),n.moveTo(o+s,8),n.arcTo(o+i,8,o+i,56,s),n.arcTo(o+i,56,o,56,s),n.arcTo(o,56,o,8,s),n.arcTo(o,8,o+i,8,s),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,33);let a=new Re(e);a.colorSpace=Me;let l=new mn(new cn({map:a,depthTest:!0,transparent:!0}));return l.scale.set(4.2,1.05,1),l}var Ta=class{constructor(t){this.scene=t,this.id=Yv(),this.players=new Map,this.ws=null,this.ref=1,this.joined=!1,this.status="offline",this.enabled=!1,this.sendT=0,this.hbT=0,this.onChat=null,this.onJoin=null,this.lastSent=null}connect(t){this.name=(t||"Driver").slice(0,18),this.enabled=!0,this._open()}disconnect(){if(this.enabled=!1,this.ws)try{this._push("bye",{i:this.id}),this.ws.close()}catch{}this.ws=null,this.joined=!1,this.status="offline";for(let t of[...this.players.keys()])this._drop(t)}_open(){if(!this.enabled)return;this.status="connecting";let t;try{t=new WebSocket(`${qv}?apikey=${Kd}&vsn=1.0.0`)}catch{this._retry();return}this.ws=t,t.onopen=()=>{t.send(JSON.stringify({topic:Rh,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:this.id}},access_token:Kd},ref:String(this.ref++),join_ref:"1"}))},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.event==="phx_reply"&&n.topic===Rh&&n.payload?.status==="ok"&&!this.joined){this.joined=!0,this.status="online",this.backoff=1,this._push("hi",{i:this.id,n:this.name});return}n.event==="broadcast"&&n.payload&&this._recv(n.payload.event,n.payload.payload)},t.onclose=()=>{this.joined=!1,this.status="offline",this.ws=null,this._retry()},t.onerror=()=>{}}_retry(){this.enabled&&(this.backoff=Math.min(30,(this.backoff||1)*2),clearTimeout(this._rt),this._rt=setTimeout(()=>this._open(),this.backoff*1e3))}_push(t,e){!this.ws||this.ws.readyState!==1||!this.joined||this.ws.send(JSON.stringify({topic:Rh,event:"broadcast",payload:{type:"broadcast",event:t,payload:e},ref:String(this.ref++),join_ref:"1"}))}chat(t){t=String(t).slice(0,120).trim(),t&&(this._push("c",{i:this.id,n:this.name,m:t}),this.onChat&&this.onChat(this.name,t,!0))}sendMoney(t,e){this._push("pay",{i:this.id,n:this.name,to:t,a:Math.round(e)})}dm(t,e){this._push("dm",{i:this.id,n:this.name,to:t,m:String(e).slice(0,200)})}_recv(t,e){if(!(!e||e.i===this.id)){if(t==="pay"){e.to===this.id&&e.a>0&&e.a<=1e6&&this.onPay&&this.onPay(e.n,e.a,e.i);return}if(t==="dm"){e.to===this.id&&this.onDM&&this.onDM(e.n,e.m,e.i);return}if(t==="s"){let n=this.players.get(e.i);n||(n=this._add(e)),(n.type!==e.t||n.color!==e.c)&&this._rebuild(n,e.t,e.c),n.name!==e.n&&(n.name=e.n,n.group.remove(n.tag),n.tag=jd(e.n),n.tag.position.y=n.spec.roof[2][1]+1.6,n.group.add(n.tag)),n.snaps.push({t:performance.now(),x:e.x,z:e.z,h:e.h,v:e.v,b:e.b}),n.snaps.length>20&&n.snaps.shift(),n.last=performance.now(),n.money=e.m??n.money,n.job=e.j||"",n.jobs=e.k??n.jobs}else t==="c"?this.onChat&&this.onChat(e.n,e.m,!1):t==="hi"?(this.onJoin&&this.onJoin(e.n),this.sendT=0,this.lastSent=null):t==="bye"&&this._drop(e.i)}}_add(t){let e=new qt,n={id:t.i,name:t.n,group:e,snaps:[],last:performance.now(),x:t.x,z:t.z,h:t.h,money:0,type:null,color:null};return this.players.set(t.i,n),this._rebuild(n,t.t,t.c),n.tag=jd(t.n),n.tag.position.y=n.spec.roof[2][1]+1.6,e.add(n.tag),this.scene.add(e),this.onJoin&&this.onJoin(t.n),n}_rebuild(t,e,n){t.body&&(t.group.remove(t.body),t.body.traverse(c=>c.geometry&&c.geometry.dispose()));let i=Pn(["sedan","suv","coupe","hatch","oldsedan","van","bus"].includes(e)?e:"sedan",{}),s=new qt,o=new Y(i.paint,new Di({color:n??16777215,metalness:.45,roughness:.32,clearcoat:1,vertexColors:!0})),a=new Y(i.detail,new ft({vertexColors:!0,metalness:.3,roughness:.3}));t.lightMat=new ft({vertexColors:!0,emissive:16777215,emissiveIntensity:.3});let l=new Y(i.lights,t.lightMat);o.castShadow=a.castShadow=!0,s.add(o,a,l),t.body=s,t.group.add(s),t.spec=i.spec,t.type=e,t.color=n,t.tag&&(t.tag.position.y=i.spec.roof[2][1]+1.6)}_drop(t){let e=this.players.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.players.delete(t))}update(t,e,n,i){if(!this.enabled)return;let s=performance.now();if(this.sendT-=t,this.hbT-=t,this.joined&&this.sendT<=0){let a=e.speed>.3,l={i:this.id,n:this.name,t:e.type,c:e.color,x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,h:Math.round(e.h*1e3)/1e3,v:Math.round(e.speed*10)/10,b:e.braking?1:0,m:Math.round(n.money),j:n.job||"",k:n.jobs||0};this._push("s",l),this.sendT=a?.16:1}this.hbT<=0&&this.ws&&this.ws.readyState===1&&(this.hbT=25,this.ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(this.ref++)})));let o=s-200;for(let[a,l]of this.players){if(s-l.last>8e3){this._drop(a);continue}let c=l.snaps;if(!c.length)continue;let h=c[0],u=c[c.length-1];for(let m=0;m<c.length-1;m++)if(c[m].t<=o&&c[m+1].t>=o){h=c[m],u=c[m+1];break}let f,d,g;if(o>=u.t){let m=Math.min(.5,(o-u.t)/1e3);f=u.x+Math.sin(u.h)*u.v*m,d=u.z+Math.cos(u.h)*u.v*m,g=u.h}else{let m=(o-h.t)/Math.max(1,u.t-h.t);f=h.x+(u.x-h.x)*m,d=h.z+(u.z-h.z)*m;let x=u.h-h.h;x=Math.atan2(Math.sin(x),Math.cos(x)),g=h.h+x*m}l.x=f,l.z=d,l.h=g,l.v=u.v,l.group.position.set(f,.02,d),l.group.rotation.y=g,l.lightMat.emissiveIntensity=u.b?1.4:i>.45?1.8:.3}}collide(t,e){for(let n of this.players.values()){let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s>200)continue;let o=n.spec.W/2,a=Math.max(2,Math.round(n.spec.L/2.2));for(let l=0;l<a;l++){let c=(l/(a-1)-.5)*(n.spec.L-o*2),h=n.x+Math.sin(n.h)*c,u=n.z+Math.cos(n.h)*c;for(let f of[t.spec.L*.3,0,-t.spec.L*.3]){let d=t.x+Math.sin(t.h)*f,g=t.z+Math.cos(t.h)*f,m=d-h,x=g-u,p=Math.hypot(m,x),y=t.radius+o;if(p<y&&p>1e-4){let _=m/p,v=x/p;t.x+=_*(y-p),t.z+=v*(y-p);let S=(t.vx-Math.sin(n.h)*n.v)*_+(t.vz-Math.cos(n.h)*n.v)*v;S<0&&(t.vx-=_*S*1.2,t.vz-=v*S*1.2,-S>2&&e&&e(-S,"player"))}}}}}list(){return[...this.players.values()].map(t=>({id:t.id,name:t.name,money:t.money||0,job:t.job,car:t.type,x:t.x,z:t.z}))}};var Aa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Sn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Zv=new Ws(-1,1,1,-1,0,1),Ch=class extends re{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},Jv=new Ch,Hi=class{constructor(t){this._mesh=new Y(Jv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Zv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ls=class extends Sn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof _e?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Kn.clone(t.uniforms),this.material=new _e({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Hi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Gr=class extends Sn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Ra=class extends Sn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ca=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new nn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ls(Aa),this.copyPass.material.blending=$n,this.clock=new Ks}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Gr!==void 0&&(o instanceof Gr?n=!0:o instanceof Ra&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Qd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var sr=class r extends Sn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new nn(s,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new nn(s,o,{type:wn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new nn(s,o,{type:wn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let a=Qd;this.highPassUniforms=Kn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _e({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Aa;this.copyUniforms=Kn.clone(h.uniforms),this.blendMaterial=new _e({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ge,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new fe,this.fsQuad=new Hi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new _e({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};sr.BlurDirectionX=new tt(1,0);sr.BlurDirectionY=new tt(0,1);var tf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Pa=class extends Sn{constructor(){super();let t=tf;this.uniforms=Kn.clone(t.uniforms),this.material=new jo({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Hi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===be&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Qc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===th?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===eh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ih&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Ph=class extends Sn{constructor(t,e,n){super(),this.env=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),this.env.render(t),t.clearDepth(),t.render(this.scene,this.camera)}},Kv={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); c.rgb = clamp(c.rgb, 0.0, 30.0); if (any(isnan(c.rgb))) c.rgb = vec3(0.0); gl_FragColor = c; }"},jv={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uContrast:{value:1.06},uWarm:{value:.02},uTime:{value:0},uGrain:{value:.025}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette, uSat, uContrast, uWarm, uTime, uGrain; varying vec2 vUv;
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
    }`},Ia=class{constructor(t,e,n,i,s){this.renderer=t;let o=t.getDrawingBufferSize(new tt),a=new nn(o.x,o.y,{type:wn,samples:s.msaa?4:0});this.composer=new Ca(t,a),this.composer.addPass(new Ph(e,n,i)),this.composer.addPass(new ls(Kv)),this.bloom=new sr(new tt(o.x/2,o.y/2),.35,.55,.92),this.bloom.enabled=s.bloom!==!1,this.composer.addPass(this.bloom),this.composer.addPass(new Pa),this.grade=new ls(jv),this.composer.addPass(this.grade)}setSize(t,e){this.composer.setSize(t,e)}setNight(t){this.bloom.strength=.18+t*.7,this.bloom.threshold=14-t*13.1,this.grade.uniforms.uWarm.value=.015*(1-t),this.grade.uniforms.uSat.value=1.08-t*.1}render(t){this.grade.uniforms.uTime.value+=t,this.composer.render(t)}};var za=class{constructor(t){this.scene=t,this.ND=260;let e=new Mt(1,1,1);this.debris=new Pe(e,new ft({roughness:.4,metalness:.4}),this.ND),this.debris.instanceMatrix.setUsage(Qs),this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.debris.count=0,this.debris.setColorAt(0,new wt),t.add(this.debris),this.parts=[],this.NS=200,this.sparkPos=new Float32Array(this.NS*3);let n=new re;n.setAttribute("position",new ge(this.sparkPos,3)),this.sparkPts=new pi(n,new ns({color:16762976,size:.18,transparent:!0,blending:Ge,depthWrite:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.sparks=[];let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),o=s.createRadialGradient(32,32,2,32,32,30);o.addColorStop(0,"rgba(255,255,255,0.9)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,64,64),this.smokeTex=new Re(i),this.smokePool=[];for(let a=0;a<140;a++){let l=new mn(new cn({map:this.smokeTex,color:3355443,transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,t.add(l),this.smokePool.push({s:l,life:0})}this.si=0,this.emitters=[],this.M=new ie,this.Q=new Be,this.E=new tn,this.V=new I,this.S=new I,this.C=new wt}crash(t,e,n,i,s,o,a=13421772){let l=Math.min(26,Math.round(4+o*1.6));for(let h=0;h<l;h++){let u=Math.random(),f=u<.35?12572904:u<.6?1381653:u<.7?16724e3:a,d=u<.35?.05+Math.random()*.06:.08+Math.random()*.22,g=2+Math.random()*o*.5,m=Math.atan2(s,i)+(Math.random()-.5)*2.2;this._part({x:t,y:e+Math.random()*.5,z:n,vx:Math.cos(m)*g,vy:1.5+Math.random()*3.5,vz:Math.sin(m)*g,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*20,wy:(Math.random()-.5)*20,s:d,sx:d*(u<.35?1.4:1+Math.random()*2),life:5+Math.random()*4,col:f})}let c=Math.min(40,Math.round(o*3));for(let h=0;h<c;h++){let u=Math.random()*Math.PI*2,f=2+Math.random()*6;this.sparks.push({x:t,y:e+.4,z:n,vx:Math.cos(u)*f+i*2,vy:Math.random()*4,vz:Math.sin(u)*f+s*2,life:.3+Math.random()*.4}),this.sparks.length>this.NS&&this.sparks.shift()}for(let h=0;h<4;h++)this.puff(t,e+.5,n,7829367,1.5)}_part(t){this.parts.length>=this.ND&&this.parts.shift(),this.parts.push(t)}puff(t,e,n,i=3355443,s=1,o=1.2){let a=this.smokePool[this.si++%this.smokePool.length];a.s.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.s.material.color.setHex(i),a.life=1,a.size=s,a.vy=o*(.7+Math.random()*.6),a.vx=(Math.random()-.5)*.6,a.vz=(Math.random()-.5)*.6,a.s.visible=!0}emitter(t,e,n=!0){let i={obj:t,offset:e,dark:n,t:0};return this.emitters.push(i),i}removeEmitter(t){let e=this.emitters.indexOf(t);e>=0&&this.emitters.splice(e,1)}update(t){let{M:e,Q:n,E:i,V:s,S:o,C:a}=this,l=0;for(let h=this.parts.length-1;h>=0;h--){let u=this.parts[h];if(u.life-=t,u.life<=0){this.parts.splice(h,1);continue}(u.y>u.s*.5||u.vy>0)&&(u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.rx+=u.wx*t,u.ry+=u.wy*t,u.y<u.s*.5&&(u.y=u.s*.5,u.vy=-u.vy*.3,u.vx*=.6,u.vz*=.6,u.wx*=.5,u.wy*=.5,Math.abs(u.vy)<.5&&(u.vy=0)))}for(let h of this.parts){i.set(h.rx,h.ry,0),n.setFromEuler(i);let u=Math.min(1,h.life);e.compose(s.set(h.x,h.y+.12,h.z),n,o.set(h.sx*u,h.s*.35*u,h.s*u)),this.debris.setMatrixAt(l,e),this.debris.setColorAt(l,a.setHex(h.col)),l++}this.debris.count=l,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor&&(this.debris.instanceColor.needsUpdate=!0);let c=0;for(let h=this.sparks.length-1;h>=0;h--){let u=this.sparks[h];if(u.life-=t,u.life<=0){this.sparks.splice(h,1);continue}u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t}for(let h of this.sparks)this.sparkPos[c*3]=h.x,this.sparkPos[c*3+1]=Math.max(.05,h.y),this.sparkPos[c*3+2]=h.z,c++;this.sparkPts.geometry.setDrawRange(0,c),this.sparkPts.geometry.attributes.position.needsUpdate=!0;for(let h of this.emitters)if(h.t-=t,h.t<=0){h.t=h.dark?.12:.25;let u=h.obj,f=Math.cos(u.h),d=Math.sin(u.h),g=h.offset[0],m=h.offset[2];this.puff(u.x+g*f+m*d,h.offset[1],u.z-g*d+m*f,h.dark?2236962:10066329,h.dark?1.4:.9,h.dark?2.2:1.2)}for(let h of this.smokePool)h.life<=0||(h.life-=t*.35,h.s.position.x+=h.vx*t,h.s.position.y+=h.vy*t,h.s.position.z+=h.vz*t,h.s.scale.setScalar(h.size*(1+(1-h.life)*4)),h.s.material.opacity=Math.max(0,h.life*.55),h.life<=0&&(h.s.visible=!1))}};function Qv(){let r=document.createElement("canvas");r.width=512,r.height=96;let t=r.getContext("2d");t.fillStyle="#1446a0",t.fillRect(0,30,512,40),t.fillStyle="#ffffff",t.font="bold 34px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("\u041F\u0410\u0422\u0420\u0423\u041B\u042C\u041D\u0410\u042F \u041C\u0418\u041B\u0418\u0426\u0418\u042F",256,51);let e=new Re(r);return e.colorSpace=Me,e.anisotropy=4,e}function ty(){let r=new qt,t=new ft({color:2896962,roughness:.8}),e=new ft({color:13164576,roughness:.6,emissive:3160064}),n=new ft({color:13146744}),i=(a,l,c,h,u)=>{let f=new Y(a,l);return f.position.set(c,h,u),f.castShadow=!0,r.add(f),f};i(new Mt(.46,.62,.27),e,0,1.25,0),i(new Mt(.4,.2,.24),t,0,.9,0),i(new Se(.12,12,10),n,0,1.7,0),i(new Ht(.15,.14,.08,14),t,0,1.84,0),i(new Mt(.34,.03,.36),t,0,1.8,.04);let s=[],o=[];for(let a of[-1,1]){let l=new qt;l.position.set(.1*a,.9,0);let c=new Y(new Mt(.15,.88,.16).translate(0,-.44,0),t);c.castShadow=!0,l.add(c),r.add(l),s.push(l);let h=new qt;h.position.set(.28*a,1.52,0);let u=new Y(new Mt(.1,.62,.11).translate(0,-.31,0),t);u.castShadow=!0,h.add(u),r.add(h),o.push(h)}return r.userData={legs:s,arms:o},r}var La=class{constructor(t,e,n,i,s,o){this.scene=t,this.map=e,this.world=n,this.audio=i,this.hud=s,this.fx=o,this.cars=[],this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this.lastSeen=0,this.cutscene=null;let a=Pn("sedan",{});this.geo=a,this.mats={paint:new Di({color:16054008,metalness:.4,roughness:.3,clearcoat:1,vertexColors:!0}),det:new ft({vertexColors:!0,metalness:.3,roughness:.3}),red:new ft({color:4194304,emissive:16715792,emissiveIntensity:0}),blue:new ft({color:64,emissive:1065215,emissiveIntensity:0}),text:new ft({map:Qv(),transparent:!0,roughness:.4}),stripe:new ft({color:1328800,roughness:.4})},this.lights=[new os(16719904,0,30,2),new os(2117887,0,30,2)];for(let l of this.lights)t.add(l)}crime(t,e){let n=this.wanted;this.heat=Math.min(5.99,this.heat+t),this.wanted=Math.max(this.wanted,Math.floor(this.heat)),this.escapeT=0,this.wanted>n&&(this.hud.toast(`\u{1F6A8} ${e} \u2013 the police are after you!`,2.5),this._updateStars())}_updateStars(){let t=document.getElementById("wanted");t&&(t.innerHTML=this.wanted?"\u2605".repeat(this.wanted)+"<span>"+"\u2605".repeat(5-this.wanted)+"</span>":"",t.classList.toggle("show",this.wanted>0))}_makeCar(t,e,n){let i=new qt,s=this.geo.spec,o=new Y(this.geo.paint,this.mats.paint),a=new Y(this.geo.detail,this.mats.det);o.castShadow=a.castShadow=!0,i.add(o,a);let l=s.roof[2][1],c=new Y(new Mt(1.1,.12,.3),new ft({color:2236962}));c.position.set(0,l+.06,-.2),i.add(c);let h=new Y(new Mt(.5,.14,.26),this.mats.red);h.position.set(-.28,l+.12,-.2);let u=new Y(new Mt(.5,.14,.26),this.mats.blue);u.position.set(.28,l+.12,-.2),i.add(h,u);for(let d of[-1,1]){let g=new Y(new Ee(s.L*.8,.22),this.mats.stripe);g.position.set(d*(s.W/2+.012),.72,0),g.rotation.y=d*Math.PI/2,i.add(g);let m=new Y(new Ee(2.4,.45),this.mats.text);m.position.set(d*(s.W/2+.02),.72,-.1),m.rotation.y=d*Math.PI/2,i.add(m)}this.scene.add(i);let f={g:i,x:t,z:e,h:n,v:0,path:null,pi:0,repath:0,stuck:0,spec:s,radius:s.W/2+.05};return this.cars.push(f),f}_spawn(t,e,n){for(let i=0;i<30;i++){let s=n+Math.PI+(Math.random()-.5)*2.2*(i>15?2:1),o=180+Math.random()*120,a=this.map.nearestRoad(t+Math.sin(s)*o,e+Math.cos(s)*o,80,c=>c.cls<=4);if(!a||this.map.insideBuilding(a.x,a.z,1))continue;let l=Math.atan2(t-a.x,e-a.z);return this._makeCar(a.x,a.z,l)}return null}clear(){for(let t of this.cars)this.scene.remove(t.g);this.cars.length=0,this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this._updateStars(),this.audio.siren(!1);for(let t of this.lights)t.intensity=0}update(t,e,n){if(this.cutscene)return this._updateCutscene(t,e);let s=performance.now()/1e3*4%2<1;if(this.mats.red.emissiveIntensity=this.wanted?s?4:.2:0,this.mats.blue.emissiveIntensity=this.wanted?s?.2:4:0,!this.wanted){this.cars.length&&this.clear(),this.heat=Math.max(0,this.heat-t*.05);return}let o=Math.min(4,this.wanted);this.cars.length<o&&Math.random()<t*.8&&this._spawn(e.x,e.z,e.h);let a=1e9,l=null;for(let u of this.cars){this._drive(u,t,e);let f=Math.hypot(u.x-e.x,u.z-e.z);f<a&&(a=f,l=u),u.g.position.set(u.x,.02,u.z),u.g.rotation.y=u.h}if(l)for(let u=0;u<2;u++)this.lights[u].position.set(l.x+(u?.4:-.4),2,l.z),this.lights[u].intensity=(u?!s:s)?25:2;this.audio.siren(a<450),a<9&&e.speed<2.2?this.bustT+=t:this.bustT=Math.max(0,this.bustT-t*.5),e.damage>=100&&a<20&&(this.bustT+=t);let c=document.getElementById("bust");if(c&&(c.style.width=Math.min(100,this.bustT/2.5*100)+"%",c.parentElement.classList.toggle("show",this.bustT>.05)),this.bustT>2.5){this._startCutscene(l,e),n&&n();return}a>260?this.escapeT+=t:this.escapeT=0;let h=8+this.wanted*4;this.escapeT>h&&(this.hud.toast(`\u{1F60E} You lost the police! (${this.wanted}\u2605 escape)`,3),this.onEscape&&this.onEscape(this.wanted),this.clear())}_drive(t,e,n){let i=Math.hypot(n.x-t.x,n.z-t.z),s=n.x+n.vx*Math.min(1.2,i/40),o=n.z+n.vz*Math.min(1.2,i/40);if(t.repath-=e,i>70&&((t.repath<=0||!t.path)&&(t.path=this.map.route(t.x,t.z,n.x,n.z),t.pi=2,t.repath=2.5),t.path)){for(;t.pi<t.path.length-2&&Math.hypot(t.path[t.pi]-t.x,t.path[t.pi+1]-t.z)<14;)t.pi+=2;s=t.path[t.pi],o=t.path[t.pi+1]}let l=Math.atan2(s-t.x,o-t.z)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let c=Math.min(2.2,9/Math.max(4,t.v))*e;t.h+=Ie.clamp(l,-c,c);let h=i>70?44:Math.max(6,n.speed+6);Math.abs(l)>.6&&(h=Math.min(h,12)),i<12&&(h=Math.max(2,n.speed)),t.v+=Ie.clamp(h-t.v,-12*e,7*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e;let u={};for(let f of[1.5,-1.5])this.world.collide(t.x+Math.sin(t.h)*f,t.z+Math.cos(t.h)*f,t.radius,u)&&(t.x+=u.x,t.z+=u.z,t.v*=.85);t.v<1.5&&i>40?t.stuck+=e:t.stuck=0,t.stuck>4&&i>120&&(this.scene.remove(t.g),this.cars.splice(this.cars.indexOf(t),1));for(let f of[n.spec.L*.3,0,-n.spec.L*.3]){let d=n.x+Math.sin(n.h)*f,g=n.z+Math.cos(n.h)*f;for(let m of[1.3,-1.3]){let x=t.x+Math.sin(t.h)*m,p=t.z+Math.cos(t.h)*m,y=d-x,_=g-p,v=Math.hypot(y,_),S=n.radius+t.radius;if(v<S&&v>1e-4){let E=y/v,w=_/v;n.x+=E*(S-v)*.6,n.z+=w*(S-v)*.6,t.x-=E*(S-v)*.4,t.z-=w*(S-v)*.4;let A=(n.vx-Math.sin(t.h)*t.v)*E+(n.vz-Math.cos(t.h)*t.v)*w;A<0&&(n.vx-=E*A,n.vz-=w*A,t.v*=.6,-A>4&&(this.fx&&this.fx.crash(x+E*t.radius,.6,p+w*t.radius,E,w,-A,16054008),this.audio.crash(-A),n.damage=Math.min(100,n.damage+-A*.4),this.onRam&&this.onRam(-A)))}}}}_startCutscene(t,e){this.audio.siren(!0);let n=ty();this.scene.add(n);let i=Math.sin(e.h),s=Math.cos(e.h),o=-s,a=i;t||(t=this._makeCar(e.x+i*7,e.z+s*7,e.h+Math.PI));let l=e.x+i*6.5-o*2.2,c=e.z+s*6.5-a*2.2;this.cutscene={t:0,pc:t,off:n,from:{x:t.x,z:t.z,h:t.h},to:{x:l,z:c,h:e.h+Math.PI*.8},fine:250+this.wanted*250,stars:this.wanted},document.getElementById("cine").classList.add("on"),document.getElementById("bustBox").classList.remove("show")}_updateCutscene(t,e){let n=this.cutscene,i=n.pc;n.t+=t;let s=n.t;e.vx=e.vz=0,e.r=0;let o=performance.now()/250%2<1;this.mats.red.emissiveIntensity=o?4:.2,this.mats.blue.emissiveIntensity=o?.2:4;let a=Math.min(1,s/1.5),l=1-Math.pow(1-a,3);i.x=n.from.x+(n.to.x-n.from.x)*l,i.z=n.from.z+(n.to.z-n.from.z)*l;let c=n.to.h-n.from.h;c=Math.atan2(Math.sin(c),Math.cos(c)),i.h=n.from.h+c*l,i.g.position.set(i.x,.02,i.z),i.g.rotation.y=i.h;for(let M=0;M<2;M++)this.lights[M].position.set(i.x+(M?.4:-.4),2.2,i.z),this.lights[M].intensity=(M?!o:o)?30:3;let h=n.off,u=h.userData,f=i.x+Math.cos(i.h)*1.4,d=i.z-Math.sin(i.h)*1.4,g=e.x+Math.cos(e.h)*1.6+Math.sin(e.h)*.4,m=e.z-Math.sin(e.h)*1.6+Math.cos(e.h)*.4,x=f,p=d,y=!1;if(s>1.5){let M=Math.min(1,(s-1.5)/3);x=f+(g-f)*M,p=d+(m-d)*M,y=M<1}h.visible=s>1.4,h.position.set(x,.02,p),h.rotation.y=y?Math.atan2(g-f,m-d):Math.atan2(e.x-x,e.z-p);let _=y?Math.sin(s*9):0;u.legs[0].rotation.x=_*.5,u.legs[1].rotation.x=-_*.5,u.arms[0].rotation.x=-_*.45,u.arms[1].rotation.x=s>4.6?-1.4-Math.sin(s*3)*.1:_*.45;let v=document.getElementById("cineSub"),S=[[1.6,""],[4.6,"\u{1F46E} \xAB\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.\xBB"],[6.6,"\u{1F46E} \xAB\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u0414\u0422\u041F, \u043D\u0435\u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u0438\u0435\u2026 \u041E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C.\xBB"],[8.6,`Fine: \u2212${n.fine} \u0441\u043E\u043C \xB7 ${"\u2605".repeat(n.stars)} cleared`]],E="";for(let[M,b]of S)s>M&&(E=b);v.textContent!==E&&(v.textContent=E),document.getElementById("busted").classList.toggle("show",s>7.6);let w=new I,A=new I;if(s<2.5){let M=e.h+2.2+s*.35;w.set(e.x+Math.sin(M)*9,1.1,e.z+Math.cos(M)*9),A.set((e.x+i.x)/2,1,(e.z+i.z)/2)}else s<4.6?(w.set(x-Math.sin(h.rotation.y)*4+1.2,1.8,p-Math.cos(h.rotation.y)*4),A.set(x,1.4,p)):s<7.6?(w.set(x+Math.cos(e.h)*1.4-Math.sin(e.h)*1.2,1.75,p-Math.sin(e.h)*1.4-Math.cos(e.h)*1.2),A.set(e.x,1.1,e.z)):(w.set(e.x+Math.cos(e.h)*12+Math.sin(e.h)*6,4,e.z-Math.sin(e.h)*12+Math.cos(e.h)*6),A.set(e.x,.8,e.z));if(s>10.5){this.scene.remove(h),document.getElementById("cine").classList.remove("on"),document.getElementById("busted").classList.remove("show"),v.textContent="";let M=n.fine;return this.cutscene=null,this.clear(),{done:!0,fine:M,cam:w,look:A,stars:n.stars}}return{cam:w,look:A}}};var ey={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u04E9:"o",\u04AF:"u",\u04A3:"n",\u0456:"i"};function Da(r){r=String(r||"").toLowerCase();let t="";for(let e of r)t+=ey[e]??e;return t.replace(/kh/g,"h").replace(/[jy]/g,"i").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}var ef={cafe:"Caf\xE9",restaurant:"Restaurant",fast_food:"Fast food",pharmacy:"Pharmacy",bank:"Bank",supermarket:"Supermarket",convenience:"Shop",fuel:"Petrol station",hotel:"Hotel",clothes:"Clothes",bar:"Bar",mall:"Mall",museum:"Museum",theatre:"Theatre",university:"University",hospital:"Hospital",cinema:"Cinema",park:"Park",stadium:"Stadium",place_of_worship:"Place of worship",marketplace:"Bazaar",square:"Square",terminal:"Airport",department_store:"Department store",attraction:"Attraction",memorial:"Memorial",monument:"Monument",bakery:"Bakery",mobile_phone:"Phones"},ny={Landmark:"\u2B50",Street:"\u{1F6E3}",Caf\u00E9:"\u2615",Restaurant:"\u{1F37D}","Fast food":"\u{1F32F}",Pharmacy:"\u{1F48A}",Bank:"\u{1F3E6}",Supermarket:"\u{1F6D2}",Shop:"\u{1F3EA}","Petrol station":"\u26FD",Hotel:"\u{1F3E8}",Mall:"\u{1F6CD}",Museum:"\u{1F3DB}",Park:"\u{1F333}",Bazaar:"\u{1F9FA}",Airport:"\u2708",University:"\u{1F393}",Hospital:"\u{1F3E5}",Building:"\u{1F3E2}"},ka=class{constructor(t){this.items=[];let e=new Set,n=(s,o,a,l,c,h)=>{if(!s||l===void 0)return;let u=Da(s)+"|"+Math.round(l/150)+","+Math.round(c/150);e.has(u)||(e.add(u),this.items.push({name:s,alt:o&&o!==s?o:"",kind:a,x:l,z:c,w:h,n:Da(s)+" "+Da(o)}))};for(let s of Xe)n(s.name,s.local,"Landmark",s.x,s.z,5);let i=new Map;for(let s of t.edges){if(s.name<0||s.cls>5)continue;let o=i.get(s.name);(!o||s.len>o.len)&&i.set(s.name,s)}for(let[s,o]of i){let[a,l]=t.names[s],c=Math.floor(o.pts.length/4)*2;n(l||a,l?a:"","Street",o.pts[c],o.pts[c+1],4-o.cls*.3)}for(let s of t.pois)n(s.en||s.name,s.en?s.name:"",ef[s.kind]||"Place",s.x,s.z,3);for(let s of t.chunks.values())for(let o of s.signs)n(o.name,"",ef[o.kind]||"Shop",o.x,o.z,1);for(let s of t.buildings)s.name&&n(s.name,"","Building",s.cx,s.cz,1.5)}find(t,e=12,n){let i=Da(t);if(!i)return[];let s=i.split(" "),o=[];for(let a of this.items){let l=0;if(a.n.startsWith(i))l=10;else if(a.n.includes(" "+i))l=7;else if(s.every(c=>a.n.includes(c)))l=4;else continue;l+=a.w,n&&(l-=Math.min(3,Math.hypot(a.x-n.x,a.z-n.z)/4e3)),o.push([l,a])}return o.sort((a,l)=>l[0]-a[0]),o.slice(0,e).map(a=>a[1])}icon(t){return ny[t]||"\u{1F4CD}"}};var rr=r=>document.getElementById(r),Ua=class{constructor(t,e,n){this.hud=t,this.audio=e,this.game=n,this.points=0,this.mult=1,this.active=!1,this.off=0,this.chain=0,this.best=0}update(t,e,n){let i=Math.abs(e.rearSlip||0),s=!n&&e.speed>8&&i>.22&&i<1.4,o=rr("drift");s?(this.active=!0,this.off=0,this.chain+=t,this.mult=Math.min(8,1+Math.floor(this.chain/2)),this.points+=e.speed*i*t*12*this.mult,e.nitro=Math.min(1,(e.nitro??0)+t*.06)):this.active&&(this.off+=t,this.off>1.1&&this._bank(!0)),o&&(o.classList.toggle("show",this.active),this.active&&(o.innerHTML=`DRIFT <b>${Math.round(this.points).toLocaleString()}</b>${this.mult>1?` <i>\xD7${this.mult}</i>`:""}`))}crash(){this.active&&this.points>50&&this.hud.toast("\u{1F4A5} Drift lost!",1),this.points=0,this._bank(!1)}_bank(t){if(t&&this.points>150){let e=Math.round(this.points/40);this.game.money+=e,this.audio.cash(),this.best=Math.max(this.best,this.points),this.hud.toast(`\u{1F300} Drift ${Math.round(this.points).toLocaleString()} pts \xB7 +${e} \u0441\u043E\u043C`,2)}this.active=!1,this.points=0,this.mult=1,this.chain=0,this.off=0}},Na=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s;let o=En(2026);this.list=[];for(let g of Xe)!g.airport&&g.x!==void 0&&this.list.length<8&&this.list.push({x:g.x+14,z:g.z+6});let a=0;for(;this.list.length<40&&a++<5e3;){let g=-6500+o()*12e3,m=-6e3+o()*9500,x=e.nearestRoad(g,m,60,S=>S.cls>=1&&S.cls<=5);if(!x)continue;let p=o()<.5?1:-1,y=x.e.w/2+1.2,_=x.x-x.dz*y*p,v=x.z+x.dx*y*p;e.insideBuilding(_,v,1)||this.list.some(S=>Math.hypot(S.x-_,S.z-v)<600)||this.list.push({x:_,z:v})}this.list.forEach((g,m)=>g.id=m);try{this.got=new Set(JSON.parse(localStorage.getItem("bd_kalpaks")||"[]"))}catch{this.got=new Set}let l=new ft({color:16762938,metalness:1,roughness:.22,emissive:5583616,emissiveIntensity:.6}),c=new qt,h=new Y(new Ht(.22,.5,.9,16,1,!1),l);h.position.y=.45;let u=new Y(new Ht(.55,.55,.08,20),new ft({color:1708552,metalness:.4,roughness:.5})),f=new Y(new Se(.1,10,8),l);f.position.y=.95,c.add(h,u,f);let d=(()=>{let g=document.createElement("canvas");g.width=g.height=64;let m=g.getContext("2d"),x=m.createRadialGradient(32,32,2,32,32,32);return x.addColorStop(0,"rgba(255,220,120,0.9)"),x.addColorStop(1,"rgba(255,200,80,0)"),m.fillStyle=x,m.fillRect(0,0,64,64),new Re(g)})();this.proto=c,this.glowMat=new cn({map:d,transparent:!0,blending:Ge,depthWrite:!1}),this.live=new Map,this.t=0}get count(){return this.got.size}update(t,e,n){this.t+=t;for(let i of this.list){if(this.got.has(i.id))continue;let s=Math.hypot(i.x-e,i.z-n),o=this.live.get(i.id);if(s<450&&!o){o=this.proto.clone();let a=new mn(this.glowMat);a.scale.set(4,4,1),a.position.y=.5,o.add(a),o.position.set(i.x,1,i.z),this.scene.add(o),this.live.set(i.id,o)}else if(s>520&&o){this.scene.remove(o),this.live.delete(i.id);continue}if(o&&(o.rotation.y=this.t*2,o.position.y=1+Math.sin(this.t*3+i.id)*.25,s<4)){this.got.add(i.id),this.scene.remove(o),this.live.delete(i.id);try{localStorage.setItem("bd_kalpaks",JSON.stringify([...this.got]))}catch{}this.game.money+=250,this.audio.chime(),setTimeout(()=>this.audio.cash(),200),this.hud.toast(`\u{1F3A9} Golden kalpak ${this.got.size}/${this.list.length} \xB7 +250 \u0441\u043E\u043C`,2.5),this.got.size===this.list.length&&(this.game.money+=5e3,this.hud.toast("\u{1F3C6} All golden kalpaks found! +5000 \u0441\u043E\u043C",5))}}}near(t,e,n){return this.list.filter(i=>!this.got.has(i.id)&&Math.hypot(i.x-t,i.z-e)<n)}},Ih=[{id:"chuy",name:"Chuy Avenue Sprint",desc:"Philharmonic \u2192 Victory Square, straight down Bishkek's main avenue",via:[[-1307,-120],[0,40],[1032,-300]]},{id:"center",name:"Ala-Too Circuit",desc:"A lap around the centre: Ala-Too, Osh Bazaar, Bishkek Park",via:[[30,40],[-1300,100],[-2700,330],[-1100,950],[30,60]]},{id:"south",name:"South Side Run",desc:"Asia Mall \u2192 Vefa Center \u2192 Central Mosque",via:null,places:["asia","vefa","mosque"]},{id:"airport",name:"Manas Airport Rush",desc:"25 km from Ala-Too Square to the airport terminal",via:null,places:["alatoo","airport"]}],Ba=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s,this.active=null;try{this.best=JSON.parse(localStorage.getItem("bd_race_best")||"{}")}catch{this.best={}}this.ringMat=new fe({color:16765498,transparent:!0,opacity:.85,side:we,depthWrite:!1}),this.ringMat2=new fe({color:16777215,transparent:!0,opacity:.35,side:we,depthWrite:!1})}_waypoints(t){return t.via?t.via:t.places.map(e=>{let n=Xe.find(i=>i.id===e);return[n.x,n.z]})}start(t,e,n){this.stop();let i=this._waypoints(t),s=[];for(let f=0;f<i.length-1;f++){let d=this.map.route(i[f][0],i[f][1],i[f+1][0],i[f+1][1]);if(!d)return!1;s.push(...s.length?d.slice(2):d)}let o=[],a=0;for(let f=2;f<s.length;f+=2)a+=Math.hypot(s[f]-s[f-2],s[f+1]-s[f-1]),(a>300||f>=s.length-2)&&(a=0,o.push({x:s[f],z:s[f+1],h:Math.atan2(s[f]-s[f-2],s[f+1]-s[f-1])}));let l=0;for(let f=2;f<s.length;f+=2)l+=Math.hypot(s[f]-s[f-2],s[f+1]-s[f-1]);n(s[0],s[1]);let c=Math.atan2(s[4]-s[0],s[5]-s[1]),h=this.map.nearestRoad(s[0],s[1],30);if(h){let f=this.map.laneOffset(h.e,0),d=h.dx,g=h.dz;d*Math.sin(c)+g*Math.cos(c)<0&&(d=-d,g=-g),e.place(h.x-g*f,h.z+d*f,Math.atan2(d,g))}let u={R:t,path:s,cps:o,i:0,t:-3.5,total:l,rivals:[],meshes:[]};for(let[f,d,g]of[[22,16760864,"Gold rival"],[17,12634320,"Silver rival"]]){let m=Pn(f>20?"coupe":"hatch",{}),x=new qt;x.add(new Y(m.paint,new ft({color:d,vertexColors:!0,metalness:.6,roughness:.3,transparent:!0,opacity:.75})),new Y(m.detail,new ft({vertexColors:!0,transparent:!0,opacity:.75}))),this.scene.add(x),u.rivals.push({g:x,s:0,v:0,pace:f,name:g,side:u.rivals.length?-1.8:1.8})}return u.gold=l/22,u.silver=l/17,u.bronze=l/13,this.active=u,this._showCp(),rr("raceHud").classList.add("show"),!0}_showCp(){let t=this.active;for(let e of t.meshes)this.scene.remove(e);t.meshes=[];for(let e=0;e<2;e++){let n=t.cps[t.i+e];if(!n)break;let i=new qt,s=new Y(new mi(7,.35,8,40),e?this.ringMat2:this.ringMat);if(s.position.y=4,i.add(s),!e){let o=new Y(new Ht(.4,.4,60,8),this.ringMat2);o.position.y=30,i.add(o)}i.position.set(n.x,0,n.z),i.rotation.y=n.h,this.scene.add(i),t.meshes.push(i)}}stop(){let t=this.active;if(t){for(let e of t.meshes)this.scene.remove(e);for(let e of t.rivals)this.scene.remove(e.g);this.active=null,rr("raceHud").classList.remove("show"),rr("countdown").classList.remove("show")}}_rivalPos(t,e,n){let i=t.s,s=2;for(;s<e.length;s+=2){let o=Math.hypot(e[s]-e[s-2],e[s+1]-e[s-1]);if(i<=o){let a=i/(o||1);return n.x=e[s-2]+(e[s]-e[s-2])*a,n.z=e[s-1]+(e[s+1]-e[s-1])*a,n.h=Math.atan2(e[s]-e[s-2],e[s+1]-e[s-1]),n.i=s,n}i-=o}return n.x=e[e.length-2],n.z=e[e.length-1],n.done=!0,n}update(t,e){let n=this.active;if(!n)return null;n.t+=t;let i=rr("countdown");if(n.t<0){e.vx=e.vz=0;let c=Math.ceil(-n.t),h=c>3?"":String(c);return i.textContent!==h&&(i.textContent=h,h&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(520,.15,.15))),null}n.t-t<0&&(i.textContent="GO!",i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(1040,.3,.18));let s={};for(let c of n.rivals){this._rivalPos(c,n.path,s);let h={},u={s:c.s+30};this._rivalPos(u,n.path,h);let f=Math.abs(Math.atan2(Math.sin(h.h-s.h),Math.cos(h.h-s.h))),d=c.pace*(f>.5?.45:f>.25?.7:1.15);c.v+=Ie.clamp(d-c.v,-8*t,4*t),c.s+=c.v*t,c.g.position.set(s.x+Math.cos(s.h)*c.side*.5,.02,s.z-Math.sin(s.h)*c.side*.5);let g=s.h-c.g.rotation.y;g=Math.atan2(Math.sin(g),Math.cos(g)),c.g.rotation.y+=g*Math.min(1,t*6)}let o=n.cps[n.i];if(Math.hypot(e.x-o.x,e.z-o.z)<12){if(n.i++,this.audio.blip(880,.08,.12),n.i>=n.cps.length)return this._finish(e);this._showCp()}let a=n.t,l=1+n.rivals.filter(c=>c.s>this._progress(e)).length;return rr("raceHud").innerHTML=`<b>${n.R.name}</b><span>\u23F1 ${Ha(a)}</span><span>CP ${n.i}/${n.cps.length}</span><span>P${l}/3</span>`,{target:n.cps[n.i]}}_progress(t){let e=this.active,n=0;for(let a=0;a<e.i;a++)n+=a?Math.hypot(e.cps[a].x-e.cps[a-1].x,e.cps[a].z-e.cps[a-1].z):Math.hypot(e.cps[0].x-e.path[0],e.cps[0].z-e.path[1]);let i=e.cps[e.i],s=e.i?e.cps[e.i-1]:{x:e.path[0],z:e.path[1]},o=Math.hypot(i.x-s.x,i.z-s.z)||1;return n+Math.max(0,o-Math.hypot(i.x-t.x,i.z-t.z))}_finish(){let t=this.active,e=t.t,n=e<=t.gold?"\u{1F947} Gold":e<=t.silver?"\u{1F948} Silver":e<=t.bronze?"\u{1F949} Bronze":"Finished",i=e<=t.gold?1500:e<=t.silver?800:e<=t.bronze?400:150,s=this.best[t.R.id],o=!s||e<s;if(o){this.best[t.R.id]=e;try{localStorage.setItem("bd_race_best",JSON.stringify(this.best))}catch{}}return this.game.credit(i,"\u041F\u0440\u0438\u0437: "+t.R.name,!0),this.audio.cash(),this.hud.toast(`\u{1F3C1} ${t.R.name}: ${Ha(e)} \xB7 ${n} \xB7 +${i} \u0441\u043E\u043C${o?" \xB7 NEW RECORD!":""}`,6),this.stop(),{done:!0}}};function Ha(r){r=Math.max(0,r);let t=Math.floor(r/60),e=r-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var Fa=class{constructor(t,e,n){this.scene=t,this.world=e,this.env=n,this.kind="clear",this.amount=0;let i=9e3,s=new Float32Array(i*6);for(let a=0;a<i;a++){let l=(Math.random()-.5)*80,c=Math.random()*40,h=(Math.random()-.5)*80;s.set([l,c,h,l,c-.6,h],a*6)}let o=new re;o.setAttribute("position",new ge(s,3)),this.rainMat=new _e({uniforms:{uTime:{value:0},uCam:{value:new I},uSnow:{value:0},uAmt:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; uniform float uSnow; varying float vA;
        void main(){ vec3 p = position;
          float sp = mix(26.0, 2.2, uSnow);
          p.y = mod(p.y - uTime*sp, 40.0);
          if (uSnow > 0.5) { p.x += sin(uTime*0.8 + position.z)*0.8; p.z += cos(uTime*0.6 + position.x)*0.8; if (mod(float(gl_VertexID),2.0) > 0.5) p.y += 0.6 - 0.08; }
          p.xz = mod(p.xz - uCam.xz + 40.0, 80.0) - 40.0 + uCam.xz;
          p.y += uCam.y - 15.0;
          vA = 1.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform float uSnow; uniform float uAmt; void main(){ gl_FragColor = vec4(mix(vec3(0.6,0.65,0.75), vec3(0.95), uSnow), mix(0.3, 0.6, uSnow) * uAmt); }",transparent:!0,depthWrite:!1}),this.rain=new $s(o,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain),this.base=null}set(t){this.kind=t}update(t,e,n){let i=this.kind==="clear"?0:1;this.amount+=Ie.clamp(i-this.amount,-t*.25,t*.25),this.kind!=="clear"&&(this.cur=this.kind);let s=this.cur==="snow"?1:0,o=this.amount;this.rain.visible=o>.01,this.rainMat.uniforms.uTime.value+=t,this.rainMat.uniforms.uCam.value.copy(e.position),this.rainMat.uniforms.uSnow.value=s,this.rainMat.uniforms.uAmt.value=o,this.rain.geometry.setDrawRange(0,Math.floor(9e3*2*(s?.35:.8)*o));let a=this.world.mat;this.base||(this.base={road:a.road.roughness,ground:this.world.ground.material.color.clone(),grass:a.grass.color.clone(),tree:a.tree.color.clone()}),a.road.roughness=this.base.road-(s?0:.6*o),a.road.metalness=s?0:.25*o,sn.uSnow.value=s*o,this.world.ground.material.color.copy(this.base.ground).lerp(new wt(.85,.86,.88),s*o*.35),this.exposure=1-s*o*.22,this.env.cloudMat&&(this.env.cloudMat.uniforms.cover.value=.58-o*.45),this.grip=1-o*(s?.3:.12),this.fogMul=1-o*.55,this.dark=o*(s?.15:.35)}};function iy(r=2775706){let t=new qt,e=u=>new ft({color:u,roughness:.8}),n=e(13672572),i=e(r),s=e(2237998),o=e(1118481),a=e(1380621),l=(u,f,d,g,m,x=t)=>{let p=new Y(u,f);return p.position.set(d,g,m),p.castShadow=!0,x.add(p),p};l(new Mt(.44,.6,.25),i,0,1.22,0),l(new Mt(.4,.2,.23),s,0,.88,0),l(new Se(.12,14,12),n,0,1.68,0),l(new Se(.127,14,8,0,Math.PI*2,0,Math.PI*.55),a,0,1.71,-.01);let c=[],h=[];for(let u of[-1,1]){let f=new qt;f.position.set(.1*u,.9,0),t.add(f),l(new Mt(.15,.82,.16).translate(0,-.41,0),s,0,0,0,f),l(new Mt(.16,.08,.26),o,0,-.86,.04,f);let d=new qt;d.position.set(.28*u,1.5,0),t.add(d),l(new Mt(.1,.6,.11).translate(0,-.3,0),i,0,0,0,d),l(new Se(.055,8,6),n,0,-.62,0,d),c.push(f),h.push(d)}return t.userData={legs:c,arms:h},t}var Oa=class{constructor(t,e,n){this.scene=t,this.world=e,this.map=n,this.active=!1,this.char=iy(),this.char.visible=!1,t.add(this.char),this.x=0,this.z=0,this.y=0,this.vy=0,this.h=0,this.speed=0,this.phase=0,this.camYaw=0,this.camPitch=.25,this.vx=0,this.vz=0,this.spec={L:.6,W:.6},this.radius=.35}exit(t){let e=Math.cos(t.h)*1.6,n=-Math.sin(t.h)*1.6;this.x=t.x+e,this.z=t.z+n,this.y=0,this.vy=0;let i={};this.world.collide(this.x,this.z,this.radius,i)&&(this.x=t.x-e,this.z=t.z-n),this.h=t.h,this.camYaw=t.h,this.active=!0,this.char.visible=!0,t.vx=t.vz=0,t.r=0}enter(){this.active=!1,this.char.visible=!1}update(t,e,n,i){let s=e.fwd,o=e.side,a=e.run?6.2:2.6,l=0,c=0;if(s||o){let g=this.camYaw;l=Math.sin(g)*s-Math.cos(g)*o,c=Math.cos(g)*s+Math.sin(g)*o;let m=Math.hypot(l,c);l/=m,c/=m;let p=Math.atan2(l,c)-this.h;p=Math.atan2(Math.sin(p),Math.cos(p)),this.h+=p*Math.min(1,t*12)}let h=s||o?a:0;this.speed+=Ie.clamp(h-this.speed,-20*t,14*t),this.vx=Math.sin(this.h)*this.speed,this.vz=Math.cos(this.h)*this.speed,this.x+=this.vx*t,this.z+=this.vz*t,e.jump&&this.y<=.001&&(this.vy=4.6),this.vy-=13*t,this.y=Math.max(0,this.y+this.vy*t),this.y===0&&this.vy<0&&(this.vy=0);let u={};this.world.collide(this.x,this.z,this.radius,u)&&(this.x+=u.x,this.z+=u.z);for(let g of n){let m=this.x-g.x,x=this.z-g.z,p=Math.hypot(m,x),y=g.spec.W/2+.5;if(p<y+g.spec.L/2){let _=Math.sin(g.h),v=Math.cos(g.h),S=m*v-x*_,E=m*_+x*v,w=g.spec.W/2+.35,A=g.spec.L/2+.35;if(Math.abs(S)<w&&Math.abs(E)<A){let M=w-Math.abs(S),b=A-Math.abs(E),T=0,z=0;M<b?T=Math.sign(S)*M:z=Math.sign(E)*b,this.x+=T*v+z*_,this.z+=-T*_+z*v}}}this.phase+=t*this.speed*2.6;let f=Math.sin(this.phase)*Math.min(1,this.speed/2.6),d=this.char.userData;d.legs[0].rotation.x=f*.7,d.legs[1].rotation.x=-f*.7,d.arms[0].rotation.x=-f*.6,d.arms[1].rotation.x=f*.6,this.y>.01&&(d.legs[0].rotation.x=.6,d.legs[1].rotation.x=-.3,d.arms[0].rotation.x=d.arms[1].rotation.x=-2.6),this.char.position.set(this.x,this.y+Math.abs(Math.cos(this.phase))*.04*Math.min(1,this.speed/3),this.z),this.char.rotation.y=this.h}nearestCar(t,e){let n=null,i=4.5,s=Math.hypot(t.x-this.x,t.z-this.z);s<i+t.spec.L/2&&(n={own:!0,c:t},i=s-t.spec.L/2);for(let o of e.cars){let a=Math.hypot(o.x-this.x,o.z-this.z)-o.spec.L/2;a<i&&(i=a,n={own:!1,c:o})}return n}camera(t,e,n){if(this.camYaw+=n.dx,this.camPitch=Ie.clamp(this.camPitch+n.dy,-.1,1.1),!n.active&&this.speed>.5){let l=this.h-this.camYaw;l=Math.atan2(Math.sin(l),Math.cos(l)),this.camYaw+=l*Math.min(1,e*2.2)}let i=4.2,s=this.x-Math.sin(this.camYaw)*i*Math.cos(this.camPitch),o=this.z-Math.cos(this.camYaw)*i*Math.cos(this.camPitch),a=this.y+1.6+Math.sin(this.camPitch)*i;t.position.lerp(new I(s,a,o),1-Math.exp(-e*10)),t.lookAt(this.x,this.y+1.4,this.z),t.fov+=(60-t.fov)*Math.min(1,e*3),t.updateProjectionMatrix()}};var On=r=>440*Math.pow(2,(r-69)/12),cs=[{name:"Bishkek FM",genre:"Pop hits",bpm:112,prog:[[60,64,67],[67,71,74],[69,72,76],[65,69,72]],scale:[0,2,4,7,9],style:"pop"},{name:"Night Drive 101.1",genre:"Synthwave",bpm:100,prog:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],scale:[0,3,5,7,10],style:"synth"},{name:"Komuz Radio",genre:"Kyrgyz folk",bpm:96,prog:[[62,69,74],[62,69,74],[60,67,72],[62,69,74]],scale:[0,2,5,7,9],style:"folk"},{name:"Ala-Too Lo-fi",genre:"Lo-fi beats",bpm:78,prog:[[62,65,69,72],[67,71,74,77],[60,64,67,71],[57,60,64,67]],scale:[0,3,5,7,10],style:"lofi"}],Ga=class{constructor(t){this.audio=t,this.idx=-1,this.timer=null}get on(){return this.idx>=0}get station(){return cs[this.idx]}next(){return this.audio.start(),this.idx=this.idx+1>=cs.length?-1:this.idx+1,this._stop(),this.idx>=0&&this._start(),this.idx>=0?cs[this.idx]:null}setVolume(t){this.out&&(this.out.gain.value=t)}_start(){let t=this.audio.ctx;if(!t)return;this.out=t.createGain(),this.out.gain.value=.32;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=6500;let n=t.createDynamicsCompressor();this.out.connect(e),e.connect(n),n.connect(this.audio.master),this.step=0,this.nextT=t.currentTime+.1,this.seed=Math.random()*1e3,this.timer=setInterval(()=>this._schedule(),40)}_stop(){if(clearInterval(this.timer),this.timer=null,this.out){let t=this.out;t.gain.setTargetAtTime(0,this.audio.ctx.currentTime,.05),setTimeout(()=>t.disconnect(),400),this.out=null}}_rnd(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}_schedule(){let t=this.audio.ctx,e=cs[this.idx];if(!t||!e||!this.out)return;let n=60/e.bpm/4;for(;this.nextT<t.currentTime+.25;){let i=this.step,s=this.nextT+(e.style==="lofi"&&i%2?n*.18:0),o=Math.floor(i/16)%e.prog.length,a=i%16,l=e.prog[o],c=l[0]-12;if(e.style==="pop"){if(a%4===0&&this._kick(s,.9),(a===4||a===12)&&this._snare(s,.35),a%2===0&&this._hat(s,a%4===2?.12:.06),a%2===0&&this._tone(s,On(c-12),n*1.8,"sawtooth",.12,500),a===0)for(let h of l)this._tone(s,On(h),n*15,"triangle",.035,2500,.05);this._rnd()<.45&&a%2===0&&this._tone(s,On(72+this._pick(e.scale,l[0])),n*1.6,"square",.035,3e3)}else if(e.style==="synth"){if(a%4===0&&this._kick(s,1),(a===4||a===12)&&this._snare(s,.5,!0),this._hat(s,.04),this._tone(s,On(c-12+(a%2?12:0)),n*.9,"sawtooth",.09,900),a===0)for(let h of l)this._tone(s,On(h),n*16,"sawtooth",.025,1800,.4),this._tone(s,On(h)*1.006,n*16,"sawtooth",.02,1800,.4);a%4===2&&this._rnd()<.7&&this._tone(s,On(76+this._pick(e.scale,l[0])),n*3,"square",.03,2200)}else if(e.style==="folk")a%8===0&&this._tone(s,On(50),n*8,"triangle",.08,700),[0,3,6,8,11,14].includes(a)&&this._pluck(s,On(62+this._pick(e.scale,62)+(this._rnd()<.3?12:0)),.12),a%8===0?this._drum(s,.6):(a%8===3||a%8===6)&&this._drum(s,.25);else{if((a===0||a===10)&&this._kick(s,.6),(a===4||a===12)&&this._snare(s,.18),a%2===0&&this._hat(s,.03),a===0||a===8)for(let h of l)this._tone(s,On(h),n*7,"sine",.05,1600,.02);a%4===0&&this._tone(s,On(c-12),n*3.5,"sine",.14,300),this._rnd()<.15&&this._crackle(s)}this.step++,this.nextT+=n}}_pick(t,e){return t[Math.floor(this._rnd()*t.length)]+(e%12===0,0)}_env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+i)}_tone(t,e,n,i,s,o,a=.005){let l=this.audio.ctx,c=l.createOscillator(),h=l.createGain(),u=l.createBiquadFilter();c.type=i,c.frequency.value=e,u.type="lowpass",u.frequency.value=o,this._env(h,t,a,n,s),c.connect(u),u.connect(h),h.connect(this.out),c.start(t),c.stop(t+a+n+.05)}_pluck(t,e,n){let i=this.audio.ctx;for(let[s,o]of[[1,n],[2,n*.35],[3,n*.15]]){let a=i.createOscillator(),l=i.createGain();a.type="triangle",a.frequency.value=e*s,this._env(l,t,.003,.5/s,o),a.connect(l),l.connect(this.out),a.start(t),a.stop(t+.6)}}_kick(t,e){let n=this.audio.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(42,t+.12),this._env(s,t,.002,.25,e*.8),i.connect(s),s.connect(this.out),i.start(t),i.stop(t+.3)}_noise(t,e,n,i,s){let o=this.audio.ctx,a=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();a.buffer=this.audio.noise,l.type=n,l.frequency.value=i,this._env(c,t,.002,e,s),a.connect(l),l.connect(c),c.connect(this.out),a.start(t,Math.random()),a.stop(t+e+.05)}_snare(t,e,n){this._noise(t,n?.3:.16,"bandpass",1800,e),this._tone(t,190,.08,"triangle",e*.3,2e3)}_hat(t,e){this._noise(t,.04,"highpass",8e3,e)}_drum(t,e){this._tone(t,90,.18,"sine",e*.5,400),this._noise(t,.08,"lowpass",900,e*.25)}_crackle(t){this._noise(t,.01,"highpass",3e3,.05)}};var Vr=[{id:"hostel",name:"Hostel bed near Osh Bazaar",desc:"Bunk bed, shared kitchen. Cheap and loud.",near:[-2650,220],price:150},{id:"khrush",name:"1-room flat in a khrushchyovka",desc:"5-storey Soviet block, 4th floor, no lift. Pervomaisky district.",near:[-1400,700],price:600},{id:"center",name:"2-room flat on Erkindik Boulevard",desc:"High ceilings, oak trees under the window. City centre.",near:[230,520],price:1400},{id:"south",name:"New apartment near Asia Mall",desc:"12th floor, mountain view, underground parking.",near:[-1500,2200],price:2200},{id:"penthouse",name:"Penthouse in Bishkek City",desc:"Glass tower, panoramic view of the whole city.",near:[1019,-577],price:6e3}],Va=class{constructor(t,e,n,i,s,o){this.game=t,this.map=e,this.world=n,this.scene=i,this.hud=s,this.audio=o;for(let a of Vr){let l=null,c=1e9;for(let f of e.buildings){let d=Math.hypot(f.cx-a.near[0],f.cz-a.near[1]);d>600||f.h<8||d<c&&(c=d,l=f)}a.b=l;let h=l?[l.cx,l.cz]:a.near,u=e.nearestRoad(h[0],h[1],150,f=>f.cls<=5);a.x=u?u.x:h[0],a.z=u?u.z:h[1],a.h=u?Math.atan2(u.dx,u.dz):0}this.home=null,this.jail=null,this._jailSite(),this.npcT=40+Math.random()*60}rentApartment(t){let e=Vr.find(n=>n.id===t);return!e||!this.game.spend(e.price,"\u0410\u0440\u0435\u043D\u0434\u0430: "+e.name)?!1:(this.game.rent=t,this.game.rentDay=this._day(),this.game.msg("\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430",`\u041A\u043B\u044E\u0447\u0438 \u0432\u0430\u0448\u0438! ${e.name}. \u041E\u043F\u043B\u0430\u0442\u0430 ${ye(e.price)} \u0441\u043E\u043C \u0432 \u0441\u0443\u0442\u043A\u0438 \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441 MBank \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.`,"\u{1F3E0}"),this._marker(),!0)}cancelRent(){this.game.rent&&(this.game.msg("\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430","\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u0430\u0440\u0435\u043D\u0434\u044B \u0440\u0430\u0441\u0442\u043E\u0440\u0433\u043D\u0443\u0442. \u041A\u043B\u044E\u0447\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0443 \u0441\u043E\u0441\u0435\u0434\u043A\u0438.","\u{1F3E0}"),this.game.rent=null,this._marker())}get apartment(){return Vr.find(t=>t.id===this.game.rent)||null}rentCar(t,e,n){return this.game.spend(e,"\u041F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E")?(this.game.carRent={type:t,day:this._day()},n(t,void 0,!1),this.game.msg("\u041F\u0440\u043E\u043A\u0430\u0442 \xAB\u0410\u043B\u0430-\u0422\u043E\u043E \u0410\u0432\u0442\u043E\xBB",`\u041C\u0430\u0448\u0438\u043D\u0430 \u0432\u0430\u0448\u0430 \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438. \u041F\u0440\u0438\u044F\u0442\u043D\u043E\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438! \u0421\u043F\u0438\u0441\u0430\u043D\u043E ${ye(e)} \u0441\u043E\u043C.`,"\u{1F511}"),!0):!1}_day(){return new Date(Date.now()+216e5).toISOString().slice(0,10)}dailyTick(t,e){let n=this._day(),i=this.apartment;i&&this.game.rentDay!==n&&(this.game.rentDay=n,this.game.charge(i.price,"\u0410\u0440\u0435\u043D\u0434\u0430: "+i.name),this.game.msg("MBank",`\u2212${ye(i.price)} \u0441\u043E\u043C \xB7 \u0430\u0440\u0435\u043D\u0434\u0430 \xAB${i.name}\xBB. \u0411\u0430\u043B\u0430\u043D\u0441: ${ye(this.game.bank)} \u0441\u043E\u043C`,"\u{1F3E6}"),this.game.bank<-2e3&&(this.game.msg("\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430","\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430 \u0430\u0440\u0435\u043D\u0434\u0443! \u041E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443.","\u{1F3E0}"),this.game.rent=null,this._marker())),this.game.carRent&&this.game.carRent.day!==n&&(this.game.carRent=null,this.game.msg("\u041F\u0440\u043E\u043A\u0430\u0442 \xAB\u0410\u043B\u0430-\u0422\u043E\u043E \u0410\u0432\u0442\u043E\xBB","\u0421\u0440\u043E\u043A \u0430\u0440\u0435\u043D\u0434\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F, \u043C\u0430\u0448\u0438\u043D\u0443 \u0437\u0430\u0431\u0440\u0430\u043B\u0438. \u0421\u043F\u0430\u0441\u0438\u0431\u043E!","\u{1F511}"),t&&t(this.game.homeCar||"sedan",this.game.homeColor,!0))}_marker(){this.homeMesh&&(this.scene.remove(this.homeMesh),this.homeMesh=null);let t=this.apartment;if(!t)return;let e=new qt,n=new Y(new Li(3,3.6,40).rotateX(-Math.PI/2),new fe({color:4054148,transparent:!0,opacity:.85,depthWrite:!1}));n.position.y=.25,e.add(n);let i=document.createElement("canvas");i.width=256,i.height=64;let s=i.getContext("2d");s.fillStyle="rgba(20,90,50,.85)",s.fillRect(0,0,256,64),s.fillStyle="#fff",s.font="bold 30px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("\u{1F3E0} HOME [E]",128,33);let o=new mn(new cn({map:new Re(i),depthTest:!1}));o.scale.set(5,1.25,1),o.position.y=4,e.add(o),e.position.set(t.x,0,t.z),this.scene.add(e),this.homeMesh=e}_jailSite(){let t=[1666,244],e=null;for(let E=30;E<600&&!e;E+=12)for(let w=0;w<6.28&&!e;w+=.25){let A=t[0]+Math.cos(w)*E,M=t[1]+Math.sin(w)*E,b=!0;for(let T=-22;T<=22&&b;T+=3.5)for(let z=-19;z<=19&&b;z+=3.5)this.map.insideBuilding(A+T,M+z,.5)&&(b=!1);for(let T=-16;T<=16&&b;T+=4)for(let z=-13;z<=13&&b;z+=4){let k=this.map.nearestRoad(A+T,M+z,12);k&&k.dist<k.e.w/2+1.5&&(b=!1)}b&&(e=[A,M])}this.jailPos=e||[t[0]+40,t[1]+40];let[n,i]=this.jailPos,s=28,o=22,a=new qt,l=new ft({color:11052188,roughness:.9}),c=new ft({color:3816512,roughness:.6,metalness:.5}),h=(E,w,A,M)=>{let b=Math.hypot(A-E,M-w),T=new Y(new Mt(b,4,.4),l);T.position.set((E+A)/2,2,(w+M)/2),T.rotation.y=-Math.atan2(M-w,A-E),T.castShadow=T.receiveShadow=!0,a.add(T);let z=new Y(new mi(.25,.03,4,8),c);for(let k=.5;k<b;k+=.6){let N=z.clone();N.position.set(E+(A-E)*k/b,4.25,w+(M-w)*k/b),N.rotation.y=T.rotation.y,a.add(N)}this.world.addWall(E,w,A,M)},u=n-s/2,f=n+s/2,d=i-o/2,g=i+o/2;h(u,d,f,d),h(f,d,f,g),h(f,g,u,g),h(u,g,u,d);let m=new Y(new Mt(12,7,6),l);m.position.set(n,3.5,d+3.3),m.castShadow=m.receiveShadow=!0,a.add(m);for(let E=0;E<5;E++)for(let w=0;w<2;w++){let A=new Y(new Ee(1,.8),new ft({color:1118481}));A.position.set(n-4.8+E*2.4,2.2+w*3,d+6.32),a.add(A);for(let M=0;M<4;M++){let b=new Y(new Mt(.04,.8,.04),c);b.position.set(n-5.15+E*2.4+M*.24,2.2+w*3,d+6.36),a.add(b)}}let x=new Y(new Mt(2.4,7,2.4),l);x.position.set(f-1.4,3.5,g-1.4),a.add(x);let p=new Y(new Mt(3,1.6,3),new ft({color:2767402}));p.position.set(f-1.4,7.8,g-1.4),a.add(p),this.towerLight=new Js(16773836,0,40,.4,.5,1),this.towerLight.position.set(f-1.4,8.6,g-1.4),this.towerLight.target.position.set(n,0,i),a.add(this.towerLight,this.towerLight.target);let y=document.createElement("canvas");y.width=512,y.height=96;let _=y.getContext("2d");_.fillStyle="#1446a0",_.fillRect(0,0,512,96),_.fillStyle="#fff",_.font="bold 34px Arial",_.textAlign="center",_.textBaseline="middle",_.fillText("\u0418\u0417\u041E\u041B\u042F\u0422\u041E\u0420 \u0412\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0413\u041E \u0421\u041E\u0414\u0415\u0420\u0416\u0410\u041D\u0418\u042F",256,48);let v=new Y(new Ee(9,1.7),new ft({map:new Re(y)}));v.position.set(n,5.2,g+.25),a.add(v);let S=v.clone();S.position.set(n,5.2,d-.25),S.rotation.y=Math.PI,a.add(S),this.scene.add(a),this.jailBox={x0:u,x1:f,z0:d,z1:g,cx:n,cz:i}}sendToJail(t,e,n,i){let s=this.jailBox;this.jail={t,total:t,bail:e},n.x=s.cx,n.z=s.cz+3,n.y=0,n.h=0,n.camYaw=Math.PI,n.active=!0,n.char.visible=!0,i.place(s.cx,s.z1+8,Math.PI/2),this.game.msg("\u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F",`\u0412\u044B \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u044B \u043D\u0430 ${t} c. \u0417\u0430\u043B\u043E\u0433: ${ye(e)} \u0441\u043E\u043C (\u043D\u0430\u0436\u043C\u0438\u0442\u0435 B, \u0447\u0442\u043E\u0431\u044B \u0432\u043D\u0435\u0441\u0442\u0438).`,"\u{1F46E}")}updateJail(t,e,n){if(this.towerLight&&(this.towerLight.intensity=n>.4?80:0),!this.jail)return null;this.jail.t-=t;let i=this.jailBox;return e.x=Math.max(i.x0+1,Math.min(i.x1-1,e.x)),e.z=Math.max(i.z0+7,Math.min(i.z1-1,e.z)),this.jail.t<=0?this.release(e,!1):{t:this.jail.t,bail:this.jail.bail}}payBail(t){return!this.jail||!this.game.spend(this.jail.bail,"\u0417\u0430\u043B\u043E\u0433")?!1:(this.release(t,!0),!0)}release(t,e){let n=this.jailBox;return this.jail=null,t.x=n.cx+3,t.z=n.z1+4,t.h=0,this.game.msg("\u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F",e?"\u0417\u0430\u043B\u043E\u0433 \u0432\u043D\u0435\u0441\u0451\u043D. \u0412\u044B \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B \u2013 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0439\u0442\u0435!":"\u0421\u0440\u043E\u043A \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F. \u0412\u044B \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B. \u0412\u0430\u0448\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 \u0443 \u0432\u043E\u0440\u043E\u0442.","\u{1F46E}"),{released:!0}}npcMessages(t,e){if(this.npcT-=t,this.npcT>0)return;this.npcT=90+Math.random()*150;let n=[["\u0410\u043F\u0430 (\u043C\u0430\u043C\u0430)","\u0411\u0430\u043B\u0430\u043C, \u043A\u0435\u0447\u0438\u043D\u0434\u0435 \u0442\u0430\u043C\u0430\u043A\u043A\u0430 \u043A\u0435\u043B! \u0411\u0435\u0448\u0431\u0430\u0440\u043C\u0430\u043A \u0436\u0430\u0441\u0430\u0434\u044B\u043C \u{1F372}","\u2764\uFE0F"],["\u0414\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440 \u0442\u0430\u043A\u0441\u0438","\u0415\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0438 \u0443 \u041E\u0448\u0441\u043A\u043E\u0433\u043E \u0431\u0430\u0437\u0430\u0440\u0430. \u041D\u0430\u0436\u043C\u0438 J \u2013 \u0432\u044B\u0445\u043E\u0434\u0438 \u043D\u0430 \u043B\u0438\u043D\u0438\u044E!","\u{1F695}"],["\u041D\u0443\u0440\u043B\u0430\u043D (\u0434\u0440\u0443\u0433)","\u0411\u0440\u0430\u0442\u0430\u043D, \u0432\u0435\u0447\u0435\u0440\u043E\u043C \u043A\u0430\u0442\u0430\u0435\u043C\u0441\u044F \u043F\u043E \u042E\u0436\u043D\u043E\u0439 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438? \u{1F3C1}","\u{1F60E}"],["MBank","\u041A\u044D\u0448\u0431\u044D\u043A 5% \u043D\u0430 \u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430\u0445 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043D\u0435\u0434\u0435\u043B\u0438!","\u{1F3E6}"],["\u041A\u043E\u043E\u043F\u0441\u0443\u0437 \u0448\u0430\u0430\u0440","\u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C: \u043D\u0430 \u0434\u043E\u0440\u043E\u0433\u0430\u0445 \u0411\u0438\u0448\u043A\u0435\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u041F\u0414\u0414.","\u{1F4F8}"],["\u0410\u0439\u0433\u0435\u0440\u0438\u043C","\u041F\u0440\u0438\u0432\u0435\u0442! \u0422\u044B \u0432\u0438\u0434\u0435\u043B, \u043D\u0430 \u0410\u043B\u0430-\u0422\u043E\u043E \u0441\u043C\u0435\u043D\u0430 \u043A\u0430\u0440\u0430\u0443\u043B\u0430 \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u0447\u0430\u0441?","\u{1F642}"],["\u041F\u043E\u0433\u043E\u0434\u0430 KG",e.night?"\u041D\u043E\u0447\u044C\u044E \u0432 \u0411\u0438\u0448\u043A\u0435\u043A\u0435 \u043F\u0440\u043E\u0445\u043B\u0430\u0434\u043D\u043E, \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u0430\u043B\u0430\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0441\u043D\u0435\u0433 \u2744":"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432 \u0411\u0438\u0448\u043A\u0435\u043A\u0435 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E, \u0432 \u0433\u043E\u0440\u0430\u0445 +8\xB0C \u2600","\u{1F324}"],["\u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430","\u0421\u0440\u043E\u0447\u043D\u043E \u043D\u0443\u0436\u043D\u044B \u043A\u0443\u0440\u044C\u0435\u0440\u044B! \u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0441\u0440\u0430\u0437\u0443. \u041D\u0430\u0436\u043C\u0438 J.","\u{1F4E6}"],["\u0410\u0433\u0430\u0439 (\u0434\u044F\u0434\u044F)","\u041C\u0430\u0448\u0438\u043D\u0430\u043D\u044B \u0430\u0439\u0434\u0430, \u0431\u0438\u0440\u043E\u043A 150\u0434\u04E9\u043D \u0430\u0448\u043F\u0430! \u0428\u0442\u0440\u0430\u0444 \u0447\u043E\u04A3 \u{1F605}","\u{1F474}"]];e.wanted&&n.push(["\u041D\u0443\u0440\u043B\u0430\u043D (\u0434\u0440\u0443\u0433)","\u0422\u0435\u0431\u044F \u043C\u0435\u043D\u0442\u044B \u0438\u0449\u0443\u0442?! \u0421\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0439 \u0432\u043E \u0434\u0432\u043E\u0440\u044B!","\u{1F6A8}"]),this.game.rent||n.push(["\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430","\u0421\u0434\u0430\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u043F\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445. \u041E\u0442\u043A\u0440\u043E\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \xAB\u0410\u0440\u0435\u043D\u0434\u0430\xBB \u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435.","\u{1F3E0}"]);let[i,s,o]=n[Math.floor(Math.random()*n.length)];this.game.msg(i,s,o)}};var dn=r=>document.getElementById(r),In=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),sy=[["map","\u{1F5FA}","Map","#2f7de1"],["mbank","\u{1F3E6}","MBank","#11a37f"],["msg","\u{1F4AC}","Messages","#25c26a"],["jobs","\u{1F4BC}","Jobs","#f2a516"],["rent","\u{1F3E0}","Rent","#e85d3a"],["garage","\u{1F697}","Garage","#6a5acd"],["radio","\u{1F4FB}","Radio","#d63384"],["online","\u{1F465}","Online","#0aa2c0"],["camera","\u{1F4F7}","Camera","#555"],["settings","\u2699","Settings","#6c757d"]],Wa=class{constructor(t){this.c=t,this.open=!1,this.app=null,this.thread=null,this._home(),dn("phHome").onclick=()=>this.show(null)}get unread(){return this.c.game.messages.filter(t=>!t.read).length}toggle(t){this.open?this.close():this.show(t||null)}show(t){this.open=!0,dn("phone").classList.add("on"),this.c.audio.blip(980,.03,.04),this.app=t,this.thread=null,this.render()}close(){this.open=!1,dn("phone").classList.remove("on"),this.c.onClose&&this.c.onClose()}tick(){dn("phTime").textContent=this.c.hud.clockText();let t=this.unread,e=dn("phBadge");e&&(e.textContent=t,e.style.display=t?"flex":"none");let n=document.querySelector('.ph-app[data-a="msg"] .bdg');n&&(n.textContent=t,n.style.display=t?"flex":"none")}_home(){dn("phBody").innerHTML=""}render(){let t=dn("phBody"),e=this.c.game;if(!this.app){t.innerHTML=`<div class="ph-clock">${this.c.hud.clockText()}</div><div class="ph-date">\u0411\u0438\u0448\u043A\u0435\u043A \xB7 ${new Date().toLocaleDateString("ru-RU",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="ph-grid">${sy.map(([s,o,a,l])=>`<button class="ph-app" data-a="${s}"><span style="background:${l}">${o}</span><small>${a}</small>${s==="msg"?'<i class="bdg"></i>':""}</button>`).join("")}</div>`,t.querySelectorAll(".ph-app").forEach(s=>s.onclick=()=>this.openApp(s.dataset.a)),this.tick();return}let n=s=>`<div class="ph-head"><button class="ph-back">\u2039</button><b>${s}</b></div>`;if(this.app==="mbank"){let s=e.tx.slice(-25).reverse();t.innerHTML=n("MBank")+`<div class="mb-card"><small>\u0421\u0447\u0451\u0442 MBank \xB7 KGS</small><div class="mb-bal ${e.bank<0?"neg":""}">${ye(e.bank)} \u0441\u043E\u043C</div><small>\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u0432 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0435: <b>${ye(e.money)} \u0441\u043E\u043C</b></small></div>
        <div class="mb-row"><button data-w="500">\u0421\u043D\u044F\u0442\u044C 500</button><button data-w="2000">\u0421\u043D\u044F\u0442\u044C 2 000</button><button data-d="1">\u0412\u043D\u0435\u0441\u0442\u0438 \u0432\u0441\u0451</button></div>
        <div class="ph-sec">\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0438\u0433\u0440\u043E\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D</div>
        <div class="mb-tr"><select id="mbTo">${this.c.net.list().map(o=>`<option value="${o.id}">${In(o.name)}</option>`).join("")||'<option value="">\u2014 \u043D\u0438\u043A\u043E\u0433\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u2014</option>'}</select><input id="mbAmt" type="number" min="1" placeholder="\u0441\u043E\u043C"><button id="mbSend">\u2192</button></div>
        <div class="ph-sec">\u0418\u0441\u0442\u043E\u0440\u0438\u044F</div><div class="mb-tx">${s.map(o=>`<div><span>${In(o.l)}</span><b class="${o.a<0?"neg":"pos"}">${o.a>0?"+":""}${ye(o.a)}</b></div>`).join("")||'<p class="ph-muted">\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</p>'}</div>`,t.querySelectorAll("[data-w]").forEach(o=>o.onclick=()=>{let a=+o.dataset.w,l=Math.ceil(a*.01);if(e.bank<a+l)return this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2);e.bank-=a+l,e.money+=a,e.tx.push({t:Date.now(),a:-(a+l),l:"\u0421\u043D\u044F\u0442\u0438\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0445 (\u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F 1%)"}),this.c.audio.cash(),this.render()}),t.querySelector("[data-d]").onclick=()=>{e.money<=0||(e.tx.push({t:Date.now(),a:e.money,l:"\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438"}),e.bank+=e.money,e.money=0,this.c.audio.cash(),this.render())},dn("mbSend").onclick=()=>{let o=dn("mbTo").value,a=Math.round(+dn("mbAmt").value);if(!o||!(a>0))return;if(e.bank<a)return this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2);let l=this.c.net.list().find(c=>c.id===o);e.bank-=a,e.tx.push({t:Date.now(),a:-a,l:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434: "+(l?l.name:"\u0438\u0433\u0440\u043E\u043A\u0443")}),this.c.net.sendMoney(o,a),this.c.audio.cash(),this.c.hud.toast(`\u2705 ${ye(a)} \u0441\u043E\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E ${l?In(l.name):""}`,2),this.render()}}else if(this.app==="msg")if(this.thread){let s=e.messages.filter(l=>l.from===this.thread);s.forEach(l=>l.read=!0);let o=this.c.net.list().find(l=>l.name===this.thread.replace(/^👤 /,""));t.innerHTML=n(In(this.thread))+`<div class="ms-list">${s.map(l=>`<div class="ms-b ${l.mine?"me":""}">${In(l.text)}<small>${l.clock}</small></div>`).join("")}</div>`+(o?'<div class="mb-tr"><input id="msTxt" placeholder="\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u2026" maxlength="200"><button id="msSend">\u2192</button></div>':"");let a=t.querySelector(".ms-list");if(a.scrollTop=a.scrollHeight,o){let l=()=>{let c=dn("msTxt").value.trim();c&&(this.c.net.dm(o.id,c),e.messages.push({from:this.thread,text:c,icon:"\u{1F464}",t:Date.now(),clock:this.c.hud.clockText(),read:!0,mine:!0}),this.render())};dn("msSend").onclick=l,dn("msTxt").onkeydown=c=>{c.stopPropagation(),c.key==="Enter"&&l()},setTimeout(()=>dn("msTxt")&&dn("msTxt").focus(),50)}this.tick()}else{let s=new Map;for(let a of e.messages)s.set(a.from,a);let o=[...s.values()].sort((a,l)=>l.t-a.t);t.innerHTML=n("Messages")+`<div class="ms-th">${o.map(a=>{let l=e.messages.filter(c=>c.from===a.from&&!c.read).length;return`<button data-f="${In(a.from)}"><span class="av">${a.icon||"\u{1F4AC}"}</span><span><b>${In(a.from)}</b><small>${In(a.text).slice(0,60)}</small></span>${l?`<i>${l}</i>`:""}</button>`}).join("")||'<p class="ph-muted">\u041D\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</p>'}</div>
          <div class="ph-sec">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0438\u0433\u0440\u043E\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D</div><div class="ms-on">${this.c.net.list().map(a=>`<button data-p="${In(a.name)}">\u{1F464} ${In(a.name)}</button>`).join("")||'<p class="ph-muted">\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435\u0442 \u043E\u043D\u043B\u0430\u0439\u043D. \u041F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 \u0438\u0433\u0440\u0443 \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438!</p>'}</div>`,t.querySelectorAll("[data-f]").forEach(a=>a.onclick=()=>{this.thread=a.dataset.f,this.render()}),t.querySelectorAll("[data-p]").forEach(a=>a.onclick=()=>{this.thread="\u{1F464} "+a.dataset.p,this.render()})}else if(this.app==="rent"){let s=e.rent,o=[["hatch","City Hatch",350],["suv","Land SUV",900],["coupe","Sport Coupe",2200],["van","Marshrutka",600]];t.innerHTML=n("\u0410\u0440\u0435\u043D\u0434\u0430 \xB7 Rent")+'<div class="ph-sec">\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u043F\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E</div>'+Vr.map(c=>`<div class="rt ${s===c.id?"on":""}"><b>${c.name}</b><small>${c.desc}</small><div><span>${ye(c.price)} \u0441\u043E\u043C / \u0441\u0443\u0442\u043A\u0438</span>${s===c.id?'<button data-go="1">\u0414\u043E\u043C\u043E\u0439</button><button data-cancel="1">\u0421\u044A\u0435\u0445\u0430\u0442\u044C</button>':`<button data-r="${c.id}">\u0421\u043D\u044F\u0442\u044C</button>`}</div></div>`).join("")+'<div class="ph-sec">\u041F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E (\u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438)</div>'+o.map(([c,h,u])=>`<div class="rt"><b>${h}</b><div><span>${ye(u)} \u0441\u043E\u043C / \u0434\u0435\u043D\u044C</span><button data-car="${c}" data-pr="${u}">\u0412\u0437\u044F\u0442\u044C</button></div></div>`).join("")+'<p class="ph-muted">\u0421\u0432\u043E\u0439 \u0434\u043E\u043C: \u043C\u0435\u0441\u0442\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u0441\u043E\u043D (E \u0443 \u0434\u043E\u043C\u0430), \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430. \u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0441 MBank.</p>',t.querySelectorAll("[data-r]").forEach(c=>c.onclick=()=>{this.c.life.rentApartment(c.dataset.r)?(this.c.audio.cash(),this.render()):this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2)});let a=t.querySelector("[data-cancel]");a&&(a.onclick=()=>{this.c.life.cancelRent(),this.render()});let l=t.querySelector("[data-go]");l&&(l.onclick=()=>{this.c.goHome(),this.close()}),t.querySelectorAll("[data-car]").forEach(c=>c.onclick=()=>{this.c.life.rentCar(c.dataset.car,+c.dataset.pr,this.c.setCar)?(this.c.audio.cash(),this.close()):this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2)})}else if(this.app==="radio"){let s=this.c.radio;t.innerHTML=n("Radio")+`<div class="rd">${["\u0412\u044B\u043A\u043B",...cs.map(o=>o.name)].map((o,a)=>`<button class="${s.idx===a-1?"on":""}" data-s="${a-1}">${a?"\u{1F4FB} ":"\u23F9 "}${o}${a?`<small>${cs[a-1].genre}</small>`:""}</button>`).join("")}</div>`,t.querySelectorAll("[data-s]").forEach(o=>o.onclick=()=>{let a=+o.dataset.s,l=8;for(;s.idx!==a&&l--;)s.next();dn("radioLbl").textContent=s.on?"\u{1F4FB} "+s.station.name:"",this.render()})}else if(this.app==="online"){let s=this.c.net.list();t.innerHTML=n("Online")+`<p class="ph-muted">${this.c.net.status==="online"?`\u{1F7E2} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \xB7 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u0411\u0438\u0448\u043A\u0435\u043A\u0435: ${s.length+1}`:this.c.net.enabled?"\u{1F7E1} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026":"\u26AA \u041C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0435\u0435\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438)"}</p><div class="ms-th">${s.map(o=>`<button data-p="${In(o.name)}"><span class="av">\u{1F697}</span><span><b>${In(o.name)}</b><small>${ye(o.money)} \u0441\u043E\u043C \xB7 ${o.job||o.car}</small></span></button>`).join("")||'<p class="ph-muted">\u0412\u044B \u043F\u043E\u043A\u0430 \u043E\u0434\u0438\u043D. \u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0438\u0433\u0440\u0443 \u0434\u0440\u0443\u0437\u044C\u044F\u043C \u2013 \u0438 \u043A\u0430\u0442\u0430\u0439\u0442\u0435\u0441\u044C \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u043E \u0411\u0438\u0448\u043A\u0435\u043A\u0443!</p>'}</div>`,t.querySelectorAll("[data-p]").forEach(o=>o.onclick=()=>{this.app="msg",this.thread="\u{1F464} "+o.dataset.p,this.render()})}let i=t.querySelector(".ph-back");i&&(i.onclick=()=>{this.thread?(this.thread=null,this.render()):(this.app=null,this.render())})}openApp(t){if(t==="map"){this.close(),this.c.openMap();return}if(t==="jobs"){this.close(),this.c.openTab("pJobs");return}if(t==="garage"){this.close(),this.c.openTab("pGarage");return}if(t==="settings"){this.close(),this.c.openTab("pSettings");return}if(t==="camera"){this.close(),this.c.photo();return}this.app=t,this.thread=null,this.render()}};var ht=r=>document.getElementById(r),Fi=r=>new Promise(t=>setTimeout(t,r)),ry=[15790320,1118740,9212054,5922918,12589080,1718906,2779706,15909376,6953530,14187040,4237528,13154458],zh=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan. 165 hp",price:0},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend. 75 hp",price:2500},{id:"hatch",name:"City Hatch",desc:"Small Japanese import. Nimble. 110 hp",price:6e3},{id:"van",name:"Marshrutka",desc:"Your own white minibus. 160 hp",price:12e3},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes. 280 hp",price:25e3},{id:"coupe",name:"Sport Coupe",desc:"420 hp. Mind the 150 km/h cameras!",price:6e4}],Wr={low:{scale:.7,view:900,far:2500,shadows:!1,bloom:!1,msaa:!1},medium:{scale:1,view:1250,far:4500,shadows:!0,bloom:!0,msaa:!1},high:{scale:1.25,view:1600,far:6500,shadows:!0,bloom:!0,msaa:!0},ultra:{scale:1.6,view:2200,far:9e3,shadows:!0,bloom:!0,msaa:!0}},oy={preset:"medium",traffic:1,peds:1,sens:1,abs:!0,tcs:!0,esc:!0,steerAssist:!0,manual:!1,fov:62,vol:.7,minimap:!0,autoRes:!0,showFps:!1,weather:"auto",realTime:!0,timeSpeed:1,mp:!0,name:"",shake:!0,...Wr.medium};function ay(){let r={};try{r=JSON.parse(localStorage.getItem("bd_settings2")||"{}")}catch{}if(!r.preset){let t=navigator.hardwareConcurrency||4,e=/Mobi|Android|iPhone/i.test(navigator.userAgent),n=new URLSearchParams(location.search).get("q");r.preset=n||(e?"low":t>=8?"high":"medium"),Object.assign(r,Wr[r.preset])}return Object.assign({},oy,Wr[r.preset]||{},r)}function nf(r){try{localStorage.setItem("bd_settings2",JSON.stringify(r))}catch{}}async function ly(){let r=(L,G)=>{ht("loadText").textContent=L,ht("loadBar").style.width=(G*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await Fi(30),!window.BISHKEK_DATA){ht("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new oa(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`${t.buildings.length.toLocaleString()} buildings \xB7 ${t.edges.length.toLocaleString()} streets \xB7 ${t.signalClusters.length} traffic lights`,.25),await Fi(30);let e=ay(),n=new Ho({antialias:!1,powerPreference:"high-performance"}),i=1,s=()=>n.setPixelRatio((Math.min(window.devicePixelRatio*e.scale,2)*(window.devicePixelRatio>=2?.75:1)||1)*i);s(),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=Me,n.toneMapping=Fr,n.toneMappingExposure=.95,n.shadowMap.enabled=e.shadows,n.shadowMap.type=jc,n.autoClear=!1,ht("app").appendChild(n.domElement);let o=new es,a=new Ze(e.fov,window.innerWidth/window.innerHeight,.5,4200),l=new da(n,o);l.sun.shadow.mapSize.set(e.preset==="ultra"?4096:e.preset==="high"?2048:1536,e.preset==="ultra"?4096:e.preset==="high"?2048:1536);let c=wd();r("Building Bishkek\u2026",.35),await Fi(20);let h=new ua(o,t,c);for(let L of["grass","dirt","field","asphalt","concrete","water"])Object.assign(h.mat[L],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(h.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(h.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(h.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let u=new Ea(t),f=new ba,d=new wa(t,u,f);d.owned||(d.owned=["sedan"]);let g=new Ma(o,t,h);d.setAirport(g),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await Fi(20);let m=new _a(o,t,h),x=t.nearestRoad(40,55,120,L=>L.cls<=2)||t.nearestRoad(0,0,500),p=new pa(o,d.owned.includes(d.savedCar)?d.savedCar:"sedan",d.savedColor);d.homeCar=p.type,d.homeColor=p.color;let y=x.x-x.dz*t.laneOffset(x.e,0),_=x.z+x.dx*t.laneOffset(x.e,0);p.place(y,_,Math.atan2(x.dx,x.dz));let v={x:y,z:_};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),h.radius=500,h.update({x:p.x,z:p.z},0,!0),h.radius=Math.min(e.view,900);for(let L=0;L<15;L++)h.update({x:p.x,z:p.z},0,!1),r("Streets, buildings, trees and shop signs\u2026",.55+L*.025),await Fi(1);h.radius=e.view,r("Traffic, traffic lights and people\u2026",.92),await Fi(20);let S=new ga(o,t,h),E=new va(o,t);E.addZone({name:"Manas Airport",x:g.dropoff.x+g.n.x*18,z:g.dropoff.y+g.n.y*-18,r:45,n:40,bags:!0});let w=new Sa(t,d,u,f,E),A=new Ua(u,f,d),M=new Na(o,t,d,u,f),b=new Ba(o,t,d,u,f),T=new Fa(o,h,l),z=new Oa(o,h,t),k=new Ga(f),N=new Va(d,t,h,o,u,f);d.rent&&N._marker(),e.weather&&e.weather!=="auto"&&T.set(e.weather),d.custom&&(p.custom={...d.custom},p._applyCustom(),d.custom.plate&&p.setPlate(d.custom.plate)),w.completed=d.jobsDone||0;let H=new ka(t),B=new za(o),X=new La(o,t,h,f,u,B);X.onEscape=L=>{let G=100*L;d.money+=G,f.cash(),u.toast(`+${G} \u0441\u043E\u043C escape bonus`,2)};let O=new Ta(o);p.remotes=O;let $=new ma(a);$.snap(p);let Q=null,lt=()=>{Q=e.bloom||e.msaa?new Ia(n,l,o,a,{bloom:e.bloom,msaa:e.msaa}):null};lt();let P={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,thr:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0,hud:!0,chatOpen:!1};function st(){S.target=Math.round(260*e.traffic),E.target=Math.round(220*e.peds),p.assists={abs:e.abs,tcs:e.tcs,esc:e.esc,steerAssist:e.steerAssist,sens:e.sens,manual:e.manual},f.setVolume(e.vol),h.radius=e.view,h.farRadius=e.far||0,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),a.fov=e.fov,ht("hudRoot").classList.toggle("nomini",!e.minimap),nf(e)}st(),window.__bd={life:N,drift:A,kalpaks:M,races:b,weather:T,foot:z,radio:k,fx:B,police:X,teleport:(...L)=>Yt(...L),rig:$,map:t,world:h,car:p,traffic:S,peds:E,airport:g,game:d,jobs:w,net:O,S:P,scene:o,camera:a,renderer:n,env:l,settings:e};function F(L,G,Ft){p.setType(L,G??p.color),P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null),p.stolen=!1,p.assists&&(p.assists={...p.assists}),Ft&&(d.homeCar=L,d.homeColor=G??p.color),$.snap(p)}let Z={steer:0,gas:0,brake:0,hand:!1,nitro:!1},at=["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",L=>{if(!P.chatOpen&&!(L.target&&L.target.tagName==="INPUT"&&L.target.type==="text"&&L.target.offsetParent!==null)){if(L.code==="Tab"){L.preventDefault(),P.mode!=="menu"&&ue(!0);return}L.code==="F1"&&L.preventDefault(),!(L.repeat&&!at.includes(L.code))&&(P.keys[L.code]=!0,at.includes(L.code)&&L.preventDefault(),rt(L.code))}}),window.addEventListener("keyup",L=>{P.keys[L.code]=!1,L.code==="Tab"&&P.tabOnline&&ue(!1)}),window.addEventListener("blur",()=>{P.keys={}});function rt(L){if(f.start(),P.mode==="menu"){L==="Enter"&&ht("startBtn").click();return}if(L==="Escape")return P.mapOpen?nt(!1):ht("airportMenu").classList.contains("hidden")?P.mode==="flight"?It(!0):P.mode==="spot"?se():P.mode==="cutscene"?void 0:ct():ht("airportMenu").classList.add("hidden");if(!P.paused)switch(L){case"KeyC":P.mode==="flight"?P.flightCam=(P.flightCam+1)%4:u.toast("Camera: "+$.cycle(),1.2);break;case"KeyM":nt();break;case"KeyH":f.horn(.3,.45),E.list.forEach(G=>{!G.fixed&&Math.hypot(G.x-p.x,G.z-p.z)<15&&G.mode==="walk"&&(G.dodge=.5,G.dside=Math.random()<.5?1:-1)});break;case"KeyE":Ct();break;case"KeyJ":ct(!0,"pJobs");break;case"KeyR":Bt();break;case"KeyG":d.routeTarget&&!w.active&&(d.clearRoute(),u.toast("GPS cleared",1.2));break;case"KeyK":u.toast(f.toggleMute()?"Sound off":"Sound on",1.2);break;case"KeyP":it.toggle();break;case"KeyB":N.jail&&(N.payBail(z)?(f.cash(),u.toast("Bail paid \u2013 you are free",2)):u.toast("Not enough money for bail",1.5));break;case"Equal":case"NumpadAdd":P.mapOpen?u.zoomMap(1.4):u.zoomMini(1.4);break;case"Minus":case"NumpadSubtract":P.mapOpen?u.zoomMap(1/1.4):u.zoomMini(1/1.4);break;case"BracketRight":e.realTime=!1,P.hour=(P.hour+1)%24,u.toast(u.clockText(),.8);break;case"BracketLeft":e.realTime=!1,P.hour=(P.hour+23)%24,u.toast(u.clockText(),.8);break;case"KeyX":e.manual&&p.shiftUp();break;case"KeyZ":e.manual&&p.shiftDown();break;case"KeyF":kt();break;case"KeyQ":{let G=k.next();u.toast(G?`\u{1F4FB} ${G.name} \xB7 ${G.genre}`:"\u{1F4FB} Radio off",1.6),ht("radioLbl").textContent=G?"\u{1F4FB} "+G.name:"";break}case"F1":P.hud=!P.hud,ht("hudRoot").classList.toggle("off",!P.hud);break;case"Enter":e.mp&&R();break}}let pt=!1;n.domElement.addEventListener("contextmenu",L=>L.preventDefault()),n.domElement.addEventListener("mousedown",L=>{L.button===2&&(pt=!0),f.start()}),window.addEventListener("mouseup",L=>{L.button===2&&(pt=!1)});let Tt={dx:0,dy:0,active:!1};window.addEventListener("mousemove",L=>{pt&&(P.mouseYaw-=L.movementX*.006,Tt.dx+=L.movementX*.006,Tt.dy+=L.movementY*.004)});function Bt(){let L=t.nearestRoad(p.x,p.z,300,vt=>vt.cls<=4);if(!L)return;let G=t.laneOffset(L.e,0),Ft=L.dx,te=L.dz;!L.e.ow&&Math.sin(p.h)*Ft+Math.cos(p.h)*te<0&&(Ft=-Ft,te=-te),p.place(L.x-te*G,L.z+Ft*G,Math.atan2(Ft,te)),u.toast("Car reset",1)}function Yt(L,G){let Ft=t.nearestRoad(L,G,400,vt=>vt.cls<=4);if(!Ft)return;let te=t.laneOffset(Ft.e,0);p.place(Ft.x-Ft.dz*te,Ft.z+Ft.dx*te,Math.atan2(Ft.dx,Ft.dz)),S.clear();for(let vt in S.models)S.models[vt].n=0;X.clear();for(let vt of[...B.emitters])vt.ai&&B.removeEmitter(vt);E.list=E.list.filter(vt=>vt.fixed);for(let vt of E.extraZones)vt.count=0;$.snap(p);for(let vt=0;vt<6;vt++)h.update({x:p.x,z:p.z},0,!0)}let it=new Wa({game:d,net:O,life:N,radio:k,hud:u,audio:f,setCar:F,openMap:()=>nt(!0),openTab:L=>ct(!0,L),goHome:()=>{let L=N.apartment;if(L){if(!d.spend(150,"\u0422\u0430\u043A\u0441\u0438 \u0434\u043E\u043C\u043E\u0439")){u.toast("\u041D\u0435\u0442 \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u0442\u0430\u043A\u0441\u0438",1.2);return}Yt(L.x,L.z),u.toast("\u{1F3E0} \u0414\u043E\u043C\u0430",1.5)}},photo:()=>mt()});window.__bd.phone=it,d.onMessage=(L,G)=>{it.tick(),!G&&(f.ping(),u.toast(`${L.icon||"\u{1F4AC}"} <b>${yn(L.from)}</b>: ${yn(L.text)}`,4.5),it.open&&it.app==="msg"&&it.render())},O.onPay=(L,G)=>{d.bank+=G,d.tx.push({t:Date.now(),a:G,l:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442 "+L}),d.msg("MBank",`+${ye(G)} \u0441\u043E\u043C \u2013 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442 ${L}. \u0411\u0430\u043B\u0430\u043D\u0441: ${ye(d.bank)} \u0441\u043E\u043C`,"\u{1F3E6}"),f.cash()},O.onDM=(L,G)=>d.msg("\u{1F464} "+L,G,"\u{1F464}"),ht("bMap").onclick=()=>{f.start(),P.mode!=="menu"&&nt()},ht("bPhone").onclick=()=>{f.start(),P.mode!=="menu"&&it.toggle()},ht("bMenu").onclick=()=>{f.start(),P.mode!=="menu"&&ct()},ht("minimap").onclick=()=>{P.mode!=="menu"&&nt(!0)};function mt(){ht("hudRoot").classList.add("off"),setTimeout(()=>{P.photoCbs.push(()=>{let L=document.createElement("a");L.download=`bishkek-${Date.now()}.png`,L.href=n.domElement.toDataURL("image/png"),L.click(),ht("hudRoot").classList.toggle("off",!P.hud),f.fine(),u.toast("\u{1F4F7} Photo saved",1.5)})},120)}function U(){let L=new Date;return(L.getUTCHours()+6)%24+L.getUTCMinutes()/60+L.getUTCSeconds()/3600}function Wt(){let L=Math.floor(Date.now()/12e5),G=Math.abs(Math.sin(L*12.9898)*43758.5453)%1,Ft=new Date(Date.now()+6*36e5).getUTCMonth(),te=Ft>=10||Ft<=2;return G<.62?"clear":te&&G>.8?"snow":"rain"}let gt={trolley:"bus",taxi:"sedan",sedan:"sedan",hatch:"hatch",suv:"suv",oldsedan:"oldsedan",van:"van",bus:"bus",truck:"truck"};function kt(){if(P.mode!=="drive"||b.active)return;if(N.jail){u.toast("You are in jail",1);return}if(!P.onFoot){if(p.speed>3){u.toast("Slow down to get out",1);return}if(w.active&&(w.active.type==="bus"||w.active.type==="marshrutka")){u.toast("Finish your route first",1.2);return}z.exit(p),P.onFoot=!0,f.blip(300,.05,.08);return}let L=z.nearestCar(p,S);if(!L){u.toast("No car nearby",1);return}if(!L.own){let G=L.c,Ft=S.cars.indexOf(G);Ft>=0&&S._remove(Ft);let te={mode:"cross",x:G.x+Math.cos(G.h)*1.6,z:G.z-Math.sin(G.h)*1.6,h:0,ex:0,ez:0,dodge:0,wait:0,shirt:6953498,pants:2238522,skin:14200976,hairC:1709072,scale:1,speed:5,phase:0};te.tx=te.x+Math.cos(G.h)*25,te.tz=te.z-Math.sin(G.h)*25,te.h=Math.atan2(te.tx-te.x,te.tz-te.z),E.list.push(te),p.setType(gt[G.type]||"sedan",G.color),p.place(G.x,G.z,G.h),p.stolen=!0,P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null),X.crime(1.3,"Car theft"),f.horn(.2,.6,.9),u.toast("\u{1F697} Car stolen! (your own car is waiting in the Garage)",2.5)}z.enter(),P.onFoot=!1,$.snap(p),f.ignition()}function _t(L,G,Ft,te,vt,$t,Jt,C){e.shake&&($.shake=Math.min(.7,L*.05)),f.crash(L),L>3&&A.crash(),te!==void 0&&L>3&&(B.crash(te,.6,vt,$t??0,Jt??0,L,G==="car"&&Ft?Ft.color:p.color),L>4&&p.dent(te,vt,Math.min(.32,L*.022))),G==="car"&&Ft&&L>4&&!b.active&&d.accident(L,Ln),G==="car"&&Ft&&(C?(Ft.emitter=B.emitter(Ft,[0,1,Ft.spec.L*.32],!0),Ft.emitter.ai=!0,u.toast("\u{1F4A5} Car wrecked!",1.5),X.crime(1.6,"You wrecked a car")):L>7?X.crime(1,"Hit-and-run"):L>4&&X.crime(.4,"Reckless driving")),G==="player"&&L>6&&X.crime(.6,"Rammed another driver"),Zt()}function Zt(){p.damage>55&&!P.engineSmoke&&(P.engineSmoke=B.emitter(p,[0,1.05,p.spec.L*.36],!1)),P.engineSmoke&&(P.engineSmoke.dark=p.damage>=90),p.damage<=55&&P.engineSmoke&&(B.removeEmitter(P.engineSmoke),P.engineSmoke=null)}X.onRam=()=>Zt(),d.peds=E,d.onWarn=()=>f.whistle&&f.whistle(),d.onFine=L=>{L.heat&&X.crime(L.heat,L.kind),L.kind==="Speeding"&&L.amount>=500?X.crime(1,"Extreme speeding"):L.kind==="Runway incursion"?X.crime(2,"Runway incursion"):L.kind==="Red light"&&X.crime(.35,"Ran a red light")};let Lt=[];function D(L,G,Ft){let te=document.createElement("div");for(te.innerHTML=`<b>${yn(L)}</b> ${yn(G)}`,Ft&&(te.style.opacity="0.85"),ht("chat").appendChild(te),Lt.push(te);Lt.length>6;)Lt.shift().remove();setTimeout(()=>{te.style.opacity="0"},9e3),setTimeout(()=>te.remove(),10500),Ft||f.blip(700,.04,.06)}O.onChat=D,O.onJoin=L=>D("\u25CF",`${L} is driving in Bishkek`,!0);function R(){if(!O.enabled)return;P.chatOpen=!0,P.keys={};let L=ht("chatInput");L.classList.remove("hidden"),L.value="",L.focus()}ht("chatInput").addEventListener("keydown",L=>{L.stopPropagation(),L.key==="Enter"&&(O.chat(L.target.value),J()),L.key==="Escape"&&J()});function J(){P.chatOpen=!1,ht("chatInput").classList.add("hidden"),ht("chatInput").blur()}document.querySelectorAll(".tab").forEach(L=>L.onclick=()=>ot(L.dataset.p));function ot(L){document.querySelectorAll(".tab").forEach(G=>G.classList.toggle("on",G.dataset.p===L)),document.querySelectorAll(".page").forEach(G=>G.classList.toggle("on",G.id===L)),L==="pJobs"&&Kt(),L==="pGarage"&&Qt(),L==="pOnline"&&Nt(),L==="pPlaces"&&ae(),L==="pSettings"&&Te()}function ct(L,G){P.paused=L!==void 0?L:!P.paused,ht("pause").classList.toggle("hidden",!P.paused),P.paused&&ot(G||"pJobs"),P.keys={}}ht("resume").onclick=()=>ct(!1);function nt(L){P.mapOpen=L!==void 0?L:!P.mapOpen,ht("mapPanel").classList.toggle("hidden",!P.mapOpen),P.keys={},P.mapOpen?(u._resize(),u.centerMap(p.x,p.z,.12),setTimeout(()=>ht("searchInput").focus(),50)):ht("searchInput").blur()}let Ut=[],bt=0,St=null;function oe(){ht("searchRes").innerHTML=Ut.map((L,G)=>`<button class="${G===bt?"on":""}" data-i="${G}"><span class="ic">${H.icon(L.kind)}</span><span>${yn(L.name)}<small>${L.kind}${L.alt?" \xB7 "+yn(L.alt):""} \xB7 ${Xa(Math.hypot(L.x-p.x,L.z-p.z))}</small></span></button>`).join(""),ht("searchRes").querySelectorAll("button").forEach(L=>L.onclick=()=>xt(Ut[+L.dataset.i]))}function xt(L){L&&(St=L,u.searchMark=L,u.centerMap(L.x,L.z,.6),ht("pcName").textContent=L.name,ht("pcSub").textContent=`${L.kind}${L.alt?" \xB7 "+L.alt:""} \xB7 ${Xa(Math.hypot(L.x-p.x,L.z-p.z))} away`,ht("placeCard").classList.remove("hidden"),Ut=[],oe(),ht("searchInput").blur())}ht("searchInput").addEventListener("input",L=>{bt=0,Ut=H.find(L.target.value,10,p),oe()}),ht("searchInput").addEventListener("keydown",L=>{L.stopPropagation(),L.key==="ArrowDown"&&(bt=Math.min(Ut.length-1,bt+1),oe(),L.preventDefault()),L.key==="ArrowUp"&&(bt=Math.max(0,bt-1),oe(),L.preventDefault()),L.key==="Enter"&&xt(Ut[bt]),L.key==="Escape"&&(L.target.value?(L.target.value="",Ut=[],oe()):nt(!1))}),ht("pcRoute").onclick=()=>{St&&(d.setRoute(St.x,St.z,St.name),u.toast(`\u{1F9ED} Route to ${yn(St.name)}`,2),nt(!1))},ht("pcGo").onclick=()=>{St&&(Yt(St.x,St.z),u.toast(`\u26A1 ${yn(St.name)}`,2),nt(!1))},u.onMapClick=(L,G,Ft)=>{if(ht("placeCard").classList.add("hidden"),u.searchMark=null,Ft){Yt(L,G),nt(!1);return}d.setRoute(L,G,"Waypoint"),u.toast("GPS route set",1.2)},ht("mapClose").onclick=()=>nt(!1),ht("zIn").onclick=()=>u.zoomMap(1.5),ht("zOut").onclick=()=>u.zoomMap(1/1.5),ht("zMe").onclick=()=>u.centerMap(Dt().x,Dt().z),ht("mzIn").onclick=()=>u.zoomMini(1.4),ht("mzOut").onclick=()=>u.zoomMini(1/1.4);let Dt=()=>P.onFoot?z:p;function Kt(){ht("jobCards").innerHTML=Object.entries(as).map(([G,Ft])=>`<button class="card ${w.active?.type===G?"sel":""}" data-id="${G}"><div class="ic">${Ft.icon}</div><b>${Ft.name}</b><small>${Ft.desc}</small></button>`).join(""),ht("jobCards").querySelectorAll("button").forEach(G=>G.onclick=()=>{if(P.mode==="drive"){if(ct(!1),w.active?.type===G.dataset.id){w.stop(p,F);return}w.start(G.dataset.id,p,o,F)}}),ht("raceCards").innerHTML=Ih.map(G=>`<button class="card" data-r="${G.id}"><div class="ic">\u{1F3C1}</div><b>${G.name}</b><small>${G.desc}</small><div class="price">${b.best[G.id]?"\u{1F3C6} Best "+Ha(b.best[G.id]):"Prize up to 1 500 \u0441\u043E\u043C"}</div></button>`).join(""),ht("raceCards").querySelectorAll("button").forEach(G=>G.onclick=()=>{P.mode==="drive"&&(P.onFoot&&(z.enter(),P.onFoot=!1),w.stop(p,F,!0),X.clear(),ct(!1),b.start(Ih.find(Ft=>Ft.id===G.dataset.r),p,Yt)?($.snap(p),u.toast("Beat the gold & silver rivals! Speed cameras are off on the race route.",3)):u.toast("Could not build the race route",1.5))}),ht("kalpakTxt").textContent=`\u{1F3A9} Golden kalpaks found: ${M.count}/${M.list.length} \u2013 hidden all over Bishkek (+250 \u0441\u043E\u043C each)`,ht("jobNow").innerHTML=w.active?`On shift: <b>${w.status(p)}</b> \xB7 <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>`:`${w.completed} jobs done \xB7 cash <b>${ye(d.money)} \u0441\u043E\u043C</b> \xB7 bank <b>${ye(d.bank)} \u0441\u043E\u043C</b>`;let L=ht("endShift");L&&(L.onclick=G=>{G.preventDefault(),w.stop(p,F),Kt()})}function Qt(){ht("garage").innerHTML=zh.map(Jt=>{let C=d.owned.includes(Jt.id);return`<button class="card ${p.type===Jt.id?"sel":""} ${C?"":"locked"}" data-id="${Jt.id}"><b>${Jt.name}</b><small>${Jt.desc}</small><div class="price">${C?p.type===Jt.id?"Driving":"Owned":"\u{1FA99} "+ye(Jt.price)}</div></button>`}).join(""),ht("garage").querySelectorAll("button").forEach(Jt=>Jt.onclick=()=>{let C=zh.find(W=>W.id===Jt.dataset.id);if(w.active&&(w.active.type==="bus"||w.active.type==="marshrutka")){u.toast("Finish your route first",1.5);return}if(!d.owned.includes(C.id)){if(!d.spend(C.price,"\u0410\u0432\u0442\u043E\u0441\u0430\u043B\u043E\u043D: "+C.name)){u.toast(`Not enough money (${ye(C.price)} \u0441\u043E\u043C needed)`,1.6);return}d.owned.push(C.id),f.cash()}F(C.id,p.color,!0),d.save(p),Qt()});let L=Math.round(p.damage*3+p.dents*5);ht("dmgTxt").textContent=p.damage>1||p.dents?`Damage ${Math.round(p.damage)}% \xB7 ${L} \u0441\u043E\u043C`:"Your car is in perfect shape",ht("repairBtn").onclick=()=>{if(p.damage>1||p.dents){if(!d.spend(L,"\u0421\u0422\u041E: \u0440\u0435\u043C\u043E\u043D\u0442")){u.toast("Not enough money",1.2);return}p.repair(),Zt(),f.cash(),Qt()}};let G=p.custom||(p.custom={}),Ft=[[null,"Off"],[2130175,"Blue"],[16719968,"Pink"],[3211136,"Green"],[16752672,"Orange"],[11550975,"Purple"],[16777215,"White"]],te=[[null,"Chrome"],[2236962,"Black"],[13934624,"Gold"],[13639712,"Red"],[2777296,"Blue"]],vt=d.upgrades||(d.upgrades={}),$t=(Jt,C,W)=>{if(!vt[Jt]){if(!d.spend(C,"\u0422\u044E\u043D\u0438\u043D\u0433")){u.toast(`Need ${C} \u0441\u043E\u043C`,1.2);return}vt[Jt]=!0,f.cash()}W(),p._applyCustom(),d.custom={...G},d.save(p),Qt()};ht("custom").innerHTML=`<h4>Neon underglow ${vt.neon?"":"\xB7 1 500 \u0441\u043E\u043C"}</h4><div class="sws">${Ft.map(([Jt,C])=>`<button class="btn ${G.neon===Jt?"pri":""}" data-neon="${Jt}">${C}</button>`).join(" ")}</div>
      <h4>Rims ${vt.rims?"":"\xB7 600 \u0441\u043E\u043C"}</h4><div class="sws">${te.map(([Jt,C])=>`<button class="btn ${(G.rims??null)===Jt?"pri":""}" data-rims="${Jt}">${C}</button>`).join(" ")}</div>
      <h4>Rear spoiler ${vt.spoiler?"":"\xB7 1 000 \u0441\u043E\u043C"}</h4><button class="btn ${G.spoiler?"pri":""}" id="spBtn">${G.spoiler?"Remove spoiler":"Add spoiler"}</button>
      <h4>Number plate</h4><input type="text" id="plateIn" maxlength="12" value="${yn(p.plateText||"")}" style="background:#1b2430;color:#fff;border:1px solid #2c3a4a;border-radius:8px;padding:8px;text-transform:uppercase">`,ht("custom").querySelectorAll("[data-neon]").forEach(Jt=>Jt.onclick=()=>$t("neon",1500,()=>{G.neon=Jt.dataset.neon==="null"?null:+Jt.dataset.neon})),ht("custom").querySelectorAll("[data-rims]").forEach(Jt=>Jt.onclick=()=>$t("rims",600,()=>{G.rims=Jt.dataset.rims==="null"?null:+Jt.dataset.rims})),ht("spBtn").onclick=()=>$t("spoiler",1e3,()=>{G.spoiler=!G.spoiler}),ht("plateIn").onchange=Jt=>{p.setPlate(Jt.target.value||"01KG 777 BSK"),G.plate=p.plateText,d.custom={...G},d.save(p)},ht("colors").innerHTML=ry.map(Jt=>`<button class="sw" style="background:#${Jt.toString(16).padStart(6,"0")}" data-c="${Jt}"></button>`).join(""),ht("colors").querySelectorAll("button").forEach(Jt=>Jt.onclick=()=>{p.setColor(+Jt.dataset.c),d.homeColor=+Jt.dataset.c,d.save(p)})}function Nt(){ht("netStatus").innerHTML=e.mp?O.status==="online"?`<span class="dot on"></span> Connected \xB7 ${O.players.size+1} drivers in Bishkek right now`:`Connecting\u2026 (${O.status})`:"Multiplayer is off (Settings \u2192 Online).";let L=[{name:O.name||e.name||"You",money:d.money+d.bank,job:w.active?as[w.active.type].icon:"",car:p.type,me:!0}].concat(O.list());L.sort((G,Ft)=>Ft.money-G.money),ht("lb").innerHTML="<tr><th>#</th><th>Driver</th><th>\u0421\u043E\u043C</th><th>Now</th></tr>"+L.map((G,Ft)=>`<tr class="${G.me?"me":""}"><td>${Ft+1}</td><td>${yn(G.name)}</td><td>${ye(G.money)}</td><td>${G.job||zh.find(te=>te.id===G.car)?.name||""}</td></tr>`).join("")}function ue(L){P.tabOnline=L,L?(Nt(),ht("pause").classList.remove("hidden"),ot("pOnline")):P.paused||ht("pause").classList.add("hidden")}function ae(){ht("placeCount").textContent=`${d.visited.size}/${Xe.length} landmarks discovered \xB7 click to travel`,ht("placeList").innerHTML=Xe.map(L=>`<button class="place ${d.visited.has(L.id)?"done":""}" data-id="${L.id}"><span>${d.visited.has(L.id)?"\u2714":"\u25CB"} ${L.name}</span><small>${L.local||""}</small></button>`).join(""),ht("placeList").querySelectorAll("button").forEach(L=>L.onclick=()=>{let G=Xe.find(Ft=>Ft.id===L.dataset.id);Yt(G.x,G.z),ct(!1)}),ht("fineList").innerHTML=d.fines.length?d.fines.slice(-10).reverse().map(L=>`<div class="row"><span>${L.kind}<br><small class="muted">${L.time} \xB7 ${yn(L.detail)}</small></span><b style="color:#ff8a80">\u2212${ye(L.amount)}</b></div>`).join(""):'<p class="muted">No fines. Keep it under 150 km/h!</p>'}function Te(){let L=(vt,$t)=>`<div class="row"><label>${$t}</label><button class="tog ${e[vt]?"on":""}" data-k="${vt}"></button></div>`,G=(vt,$t,Jt,C,W,j=K=>K)=>`<div class="row"><label>${$t} <small class="muted" id="v_${vt}">${j(e[vt])}</small></label><input type="range" data-k="${vt}" min="${Jt}" max="${C}" step="${W}" value="${e[vt]}"></div>`,Ft=(vt,$t,Jt)=>`<div class="row"><label>${$t}</label><select data-k="${vt}">${Jt.map(([C,W])=>`<option value="${C}" ${String(e[vt])===String(C)?"selected":""}>${W}</option>`).join("")}</select></div>`;ht("settingsBox").innerHTML=`<div class="set"><div>
      <h4>Graphics</h4>
      ${Ft("preset","Quality preset",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"],["custom","Custom"]])}
      ${G("scale","Resolution",.5,2,.05,vt=>Math.round(vt*100)+"%")}
      ${G("view","Detail distance",600,2600,100,vt=>vt+" m")}
      ${G("far","City skyline distance",0,1e4,500,vt=>vt?vt/1e3+" km":"off")}
      ${L("shadows","Shadows")}${L("bloom","Bloom & colour grading")}${L("msaa","Anti-aliasing")}
      ${G("fov","Field of view",50,85,1,vt=>vt+"\xB0")}
      <h4>World</h4>
      ${G("traffic","Traffic density",.2,2,.1,vt=>Math.round(vt*100)+"%")}
      ${G("peds","Pedestrians",0,2,.1,vt=>Math.round(vt*100)+"%")}
      ${L("realTime","Real Bishkek time (synced)")}
      ${G("timeSpeed","Day speed",0,6,.5,vt=>vt?vt+"\xD7":"paused")}
      ${Ft("weather","Weather",[["auto","Live (same for everyone)"],["clear","Clear"],["rain","Rain"],["snow","Snow (winter)"]])}
    </div><div>
      <h4>Driving</h4>
      ${G("sens","Steering sensitivity",.4,1.6,.05,vt=>Math.round(vt*100)+"%")}
      ${Ft("manual","Gearbox",[["false","Automatic"],["true","Manual (Shift / Ctrl)"]])}
      ${L("abs","ABS")}${L("tcs","Traction control")}${L("esc","Stability control")}${L("steerAssist","Counter-steer assist")}
      <h4>Interface &amp; sound</h4>
      ${L("minimap","Minimap")}${L("shake","Camera shake")}${L("autoRes","Auto resolution (smooth FPS)")}${L("showFps","Show FPS")}
      ${G("vol","Volume",0,1,.05,vt=>Math.round(vt*100)+"%")}
      <h4>Online</h4>
      ${L("mp","Multiplayer")}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${yn(e.name||"")}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;let te=ht("settingsBox");te.querySelectorAll(".tog").forEach(vt=>vt.onclick=()=>{let $t=vt.dataset.k;e[$t]=!e[$t],vt.classList.toggle("on",e[$t]),V($t)}),te.querySelectorAll("input[type=range]").forEach(vt=>vt.oninput=()=>{let $t=vt.dataset.k;e[$t]=+vt.value;let Jt=ht("v_"+$t);Jt&&(Jt.textContent=vt.parentElement.querySelector("small").textContent=$t==="view"?vt.value+" m":$t==="far"?+vt.value?vt.value/1e3+" km":"off":$t==="fov"?vt.value+"\xB0":$t==="timeSpeed"?+vt.value?vt.value+"\xD7":"paused":Math.round(vt.value*100)+"%"),V($t)}),te.querySelectorAll("select").forEach(vt=>vt.onchange=()=>{let $t=vt.dataset.k;e[$t]=$t==="manual"?vt.value==="true":vt.value,V($t),$t==="weather"&&vt.value!=="auto"&&T.set(vt.value)}),te.querySelector("input[type=text]").onchange=vt=>{e.name=vt.target.value.trim().slice(0,18)||"Driver",V("name")},ht("resetProg").onclick=()=>{confirm("Reset money, cars and landmarks?")&&(localStorage.removeItem("bishkekDrive"),location.reload())}}function V(L){L==="preset"&&Wr[e.preset]?(Object.assign(e,Wr[e.preset]),Te()):["scale","view","far","shadows","bloom","msaa"].includes(L)&&(e.preset="custom"),["scale","preset"].includes(L)&&(s(),n.setSize(window.innerWidth,window.innerHeight)),["shadows","preset"].includes(L)&&(n.shadowMap.enabled=e.shadows,o.traverse(G=>{G.material&&(Array.isArray(G.material)?G.material:[G.material]).forEach(Ft=>Ft.needsUpdate=!0)})),["bloom","msaa","preset","scale"].includes(L)&&lt(),L==="mp"&&(e.mp?O.connect(e.name||"Driver"):O.disconnect()),L==="name"&&O.enabled&&(O.name=e.name),st(),a.updateProjectionMatrix()}ht("nameInput").value=e.name||"",ht("mpToggle").classList.toggle("on",e.mp),ht("mpToggle").onclick=()=>{e.mp=!e.mp,ht("mpToggle").classList.toggle("on",e.mp)},ht("startBtn").onclick=()=>{f.start(),e.name=(ht("nameInput").value.trim()||e.name||"Driver"+Math.floor(Math.random()*900+100)).slice(0,18),nf(e),ht("menu").classList.add("hidden"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),P.mode="drive",P.paused=!1,$.snap(p),e.mp&&O.connect(e.name),N.apartment&&Yt(N.apartment.x,N.apartment.z),d.messages.length||d.msg("\u0410\u043F\u0430 (\u043C\u0430\u043C\u0430)","\u0411\u0430\u043B\u0430\u043C, \u0411\u0438\u0448\u043A\u0435\u043A\u043A\u0435 \u043A\u043E\u0448 \u043A\u0435\u043B\u0434\u0438\u04A3! \u0422\u0435\u043B\u0435\u0444\u043E\u043D\u0443\u04A3\u0434\u0443 \u0430\u0447 (P) \u2013 MBank, \u0438\u0448 \u0436\u0430\u043D\u0430 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0430 \u0431\u0430\u0440. \u042D\u0442\u0438\u044F\u0442 \u0430\u0439\u0434\u0430! \u2764\uFE0F","\u2764\uFE0F"),f.ignition();let L=!1;try{L=!!localStorage.getItem("bd_intro")}catch{}L?u.toast(`Salam, <b>${yn(e.name)}</b>! <b>J</b> jobs \xB7 <b>M</b> map \xB7 <b>Esc</b> menu`,4):(P.paused=!0,ht("intro").classList.remove("hidden"))},ht("introGo").onclick=()=>{ht("intro").classList.add("hidden"),P.paused=!1;try{localStorage.setItem("bd_intro","1")}catch{}u.toast(`Salam, <b>${yn(e.name)}</b>! Press <b>J</b> to start working`,4)};function Ct(){if(P.mode!=="drive")return;let L=Math.hypot(p.x-g.dropoff.x,p.z-g.dropoff.y),G=Math.hypot(p.x-g.spotter.x,p.z-g.spotter.y);if(L<14){if(p.speed>3){u.toast("Stop the car first",1.2);return}u.renderBoard(g.board,ht("fids")),ht("airportMenu").classList.remove("hidden"),f.pa()}else G<14?Pt():N.apartment&&Math.hypot(Dt().x-N.apartment.x,Dt().z-N.apartment.z)<12&&(p.repair(),Zt(),d.save(p),f.chime(),e.realTime||(P.hour=8),u.toast("\u{1F3E0} You rested at home. Car fixed, progress saved.",2.5))}ht("apFlight").onclick=()=>{if(!d.spend(500,"\u0410\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442 FRU")){u.toast("Not enough money for a ticket (500 \u0441\u043E\u043C)",1.6);return}f.cash(),ht("airportMenu").classList.add("hidden"),ut()},ht("apSpot").onclick=()=>{ht("airportMenu").classList.add("hidden"),Pt()},ht("apTaxi").onclick=()=>{if(ht("airportMenu").classList.add("hidden"),!w.start("taxi",p,o,F))return;let L=w.active;L.x=g.dropoff.x+g.n.x*6,L.z=g.dropoff.y+g.n.y*6,L.ped&&(L.ped.x=L.ped.tx=L.x,L.ped.z=L.ped.tz=L.z),L.dest=Xe.filter(G=>!G.airport)[Math.floor(Math.random()*(Xe.length-1))],d.setRoute(L.x,L.z,"Passenger"),u.toast(`\u{1F695} <b>${L.passenger}</b> just landed and needs a ride to ${L.dest.name}`,3.5)},ht("apClose").onclick=()=>ht("airportMenu").classList.add("hidden");let et=L=>ht("fade").classList.toggle("on",L);async function ut(){et(!0),await Fi(700),P.flight=g.createScenicFlight(),P.mode="flight",P.flightCam=0,g.scenicCamera(P.flight,0,rn,xn),a.position.copy(rn),zn.copy(xn),h.radius=Math.max(e.view,2400),a.far=12e3,a.updateProjectionMatrix(),ht("boarding").classList.add("show"),setTimeout(()=>ht("boarding").classList.remove("show"),4e3),f.pa(),et(!1)}async function It(L){if(!P.flight||P.ending)return;P.ending=!0;let G=P.flight;et(!0),await Fi(700),g.endScenic(G),P.flight=null,P.ending=!1,P.mode="drive",h.radius=e.view,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),u.setFlightInfo(null),$.snap(p),et(!1),u.toast(L?"Back at Manas airport":"Welcome back to Bishkek!",2.5)}function Pt(){P.mode="spot";let L=g.planes.find(G=>G.state==="approach"||G.state==="flare");L||(L=g._newPlane(),g._startApproach(L,.45)),P.spot={pl:L,cam:new I(g.spotter.x,2.2,g.spotter.y)},zn.set(L.x,L.y,L.z),u.toast("Plane spotting \xB7 Esc to exit",2.5)}function se(){P.mode="drive",P.spot=null}if("ontouchstart"in window){ht("touch").classList.remove("hidden");let L=(G,Ft,te)=>{let vt=ht(G);vt.addEventListener("touchstart",$t=>{$t.preventDefault(),f.start(),Ft()}),vt.addEventListener("touchend",$t=>{$t.preventDefault(),te()})};L("tLeft",()=>Z.steer=-1,()=>Z.steer=0),L("tRight",()=>Z.steer=1,()=>Z.steer=0),L("tGas",()=>Z.gas=1,()=>Z.gas=0),L("tBrake",()=>Z.brake=1,()=>Z.brake=0),L("tHand",()=>Z.hand=!0,()=>Z.hand=!1),L("tNitro",()=>Z.nitro=!0,()=>Z.nitro=!1),L("tCam",()=>rt("KeyC"),()=>{}),L("tAct",()=>rt("KeyE"),()=>{}),L("tMenu",()=>rt("Escape"),()=>{})}window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),Q&&Q.setSize(window.innerWidth,window.innerHeight)});let ke=new Ks,$e={x:0,z:0,h:0,speed:0,spec:p.spec,vx:0,vz:0,radius:1},le={},rn=new I,xn=new I,zn=new I,Oi=document.createElement("canvas");Oi.width=320,Oi.height=180;let Ln=L=>P.photoCbs.push(L);if(ht("loading").classList.add("hidden"),ht("menu").classList.remove("hidden"),!localStorage.getItem("bd_seen"))try{localStorage.setItem("bd_seen","1")}catch{}function or(L,G){return g.rel(new tt(L,G)).x>-2500&&G<-15500?"Manas International Airport":G<-3600?"Bishkek \u2013 Manas road":G<300?L<500?"Pervomaisky district":"Sverdlovsky district":L<0?"Leninsky district":"Oktyabrsky district"}let ti=0,ei={ema:1/60,t:0};n.shadowMap.autoUpdate=!1;function Gi(){requestAnimationFrame(Gi);let L=ke.getDelta(),G=Math.min(.05,L);if(ei.ema=ei.ema*.95+L*.05,ei.t+=L,ei.t>1.5){ei.t=0;let At=1/Math.max(.001,ei.ema);if(e.showFps?(ht("fps").textContent=Math.round(At)+" fps",ht("fps").style.display="block"):ht("fps").style.display="none",e.autoRes&&P.mode!=="menu"){let ee=i;At<40?i=Math.max(.5,i-(At<25?.15:.08)):At>57&&i<1&&(i=Math.min(1,i+.05)),ee!==i&&(s(),n.setSize(window.innerWidth,window.innerHeight),Q&&Q.setSize(window.innerWidth,window.innerHeight))}h.buildBudget=At<35?4:8}let Ft=!P.paused&&P.mode!=="menu",te=Ft?G:0;P.time+=te,sn.uTime.value+=G,P.hour=e.realTime&&P.mode!=="free"?U():(P.hour+te/60*e.timeSpeed)%24,l.setHour(P.hour);let vt=P.hour;S.rush=vt>7.5&&vt<10||vt>17&&vt<20?1.65:vt>23||vt<6?.45:1;let $t=P.keys,Jt=($t.KeyD||$t.ArrowRight?1:0)-($t.KeyA||$t.ArrowLeft?1:0)+Z.steer,C=($t.KeyW||$t.ArrowUp?1:0)+Z.gas,W=($t.KeyS||$t.ArrowDown?1:0)+Z.brake,j=!1,K=navigator.getGamepads?[...navigator.getGamepads()].find(At=>At):null;K&&(Math.abs(K.axes[0])>.08&&(Jt=Math.sign(K.axes[0])*Math.pow(Math.abs(K.axes[0]),1.5),j=!0),K.buttons[7]?.value>.02&&(C=K.buttons[7].value),K.buttons[6]?.value>.02&&(W=K.buttons[6].value)),P.steer=j?Jt:P.steer+(Ie.clamp(Jt,-1,1)-P.steer)*Math.min(1,G*(Jt===0?12:8)),P.thr+=(Math.min(1,C)-P.thr)*Math.min(1,G*(C?5:12));let q={steer:P.steer,throttle:P.thr<.02?0:P.thr,brake:Math.min(1,W),hand:!!($t.Space||Z.hand||K?.buttons[0]?.pressed),nitro:!!($t.ShiftLeft||$t.ShiftRight||Z.nitro||K?.buttons[1]?.pressed)};p.throttleOn=q.throttle>0;let yt=P.onFoot?z:p,Et=l.night;if(p.night=Et>.45,Ft){if(P.mode==="drive"||P.mode==="spot"){let dt=t.nearestRoad(p.x,p.z,25),Fe=dt&&dt.dist<dt.e.w/2+3.5;p.surface=(Fe||g.runwayIncursion(p.x,p.z)?1:.72)*(T.grip??1),le.road=dt&&dt.dist<dt.e.w/2+4?dt:null;let de=P.mode==="spot"||P.onFoot?{steer:0,throttle:0,brake:1,hand:!0}:q;p.update(G,de,h,S,_t),P.onFoot&&z.update(G,{fwd:($t.KeyW||$t.ArrowUp?1:0)-($t.KeyS||$t.ArrowDown?1:0),side:($t.KeyD||$t.ArrowRight?1:0)-($t.KeyA||$t.ArrowLeft?1:0),run:!!($t.ShiftLeft||$t.ShiftRight),jump:!!$t.Space},S.cars.concat([p]),E),A.update(G,p,P.onFoot);let Oe=b.update(G,p);Oe&&Oe.target&&(!d.routeTarget||d.routeTarget.x!==Oe.target.x)&&d.setRoute(Oe.target.x,Oe.target.z,"Checkpoint"),Oe&&Oe.done&&d.clearRoute()}let At=P.mode==="flight"?Object.assign($e,{x:P.flight.plane.x,z:P.flight.plane.z,h:P.flight.plane.h,speed:0}):yt;S.night=Et,S.update(G,At,e.peds>0?E:null),E.update(G,At,e.peds>0);for(let dt of S.honks){let Fe=Math.hypot(dt.x-p.x,dt.z-p.z);f.horn(Math.min(.3,6/(Fe+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(g.update(G,Et,p,P.flight?P.flight.plane:null),m.update(G,P.time,Et),P.mode==="drive"||P.mode==="cutscene"){let dt=X.update(G,P.onFoot?z:p,()=>{P.mode="cutscene",document.body.classList.add("cinemode"),w.active&&w.stop(p,F,!0)});if(dt&&dt.cam&&(P.cutCam=dt),dt&&dt.done){if(P.mode="drive",document.body.classList.remove("cinemode"),P.cutCam=null,(dt.stars||0)>=2){let Fe=25+dt.stars*15,de=400+dt.stars*300;P.onFoot=!0,N.sendToJail(Fe,de,z,p),d.fines.push({kind:"Arrest",amount:0,detail:`Detained for ${Fe} s`,time:u.clockText()}),u.toast(`\u{1F512} Detained! ${Fe} s in the \u0418\u0412\u0421 \u2013 or press B to pay ${ye(de)} \u0441\u043E\u043C bail`,4)}else d.charge(dt.fine,"\u0428\u0442\u0440\u0430\u0444: \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"),d.fines.push({kind:"Arrest",amount:dt.fine,detail:"Caught by the patrol police",time:u.clockText()}),d.msg("\u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F",`\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D. \u0428\u0442\u0440\u0430\u0444 ${ye(dt.fine)} \u0441\u043E\u043C \u0441\u043F\u0438\u0441\u0430\u043D \u0441 MBank.`,"\u{1F46E}"),$.snap(p);d.save(p)}}B.update(G),M.update(G,yt.x,yt.z),T.update(G,a),n.toneMappingExposure=.95*(T.exposure??1),e.weather==="auto"&&(P.wT=(P.wT??0)-G,P.wT<=0&&(P.wT=10,T.set(Wt()))),P.dayT=(P.dayT??0)-G,P.dayT<=0&&(P.dayT=10,N.dailyTick(F,p)),P.mode==="drive"&&N.npcMessages(G,{night:Et>.5,wanted:X.wanted});let ee=N.updateJail(G,z,Et);ee&&ee.released&&(P.onFoot=!0,z.char.visible=!0,u.toast("\u{1F513} Released from jail",2.5));let pe=ht("jailBox");if(N.jail?(pe.classList.add("show"),pe.innerHTML=`\u{1F512} \u0418\u0412\u0421 \xB7 IN JAIL<b>${Math.ceil(N.jail.t)} s</b><small>Press <kbd>B</kbd> to pay ${ye(N.jail.bail)} \u0441\u043E\u043C bail</small>`):pe.classList.remove("show"),it.open&&!P.onFoot&&p.speed*3.6>20&&P.mode==="drive"?(P.phT=(P.phT||0)+G,P.phT>.5&&(le.warn=le.warn||"PHONE WHILE DRIVING!"),P.phT>3&&(P.phT=-8,Ln(dt=>d.issueFine("Phone while driving",100,"Used a mobile phone while driving",dt,.3)))):(P.phT||0)>0&&(P.phT=0),ti%60===0)for(let dt of[...B.emitters])dt.ai&&!S.cars.includes(dt.obj)&&B.removeEmitter(dt);if(P.mode==="drive"){let dt=le.road?t.roadName(le.road.e.name):null;le.street=dt?dt.en:null,d.trafficTime=S.time,!b.active&&!P.onFoot&&d.checkRules(G,p,le,null,g,Ln),d.checkLandmarks(p);let Fe=w.update(G,p,o,F);if(Fe&&Fe.done&&(d.jobsDone=w.completed,d.save(p)),!w.active&&w.nextIn!==void 0&&(w.nextIn-=G,w.nextIn<=0)){let je=w.nextType;w.nextIn=void 0,w.start(je,p,o,F)}u.setStreet(dt?dt.en!==dt.local?`${dt.en}`:dt.local:le.runway?"Runway 07/25":"",dt&&dt.en!==dt.local?dt.local:or(p.x,p.z)),u.setLimit(p.speed*3.6,le.wrongWay,le.runway,P.onFoot||b.active?"":le.warn);let de=Math.hypot(p.x-g.dropoff.x,p.z-g.dropoff.y),Oe=Math.hypot(p.x-g.spotter.x,p.z-g.spotter.y),Tn=de<14?"<b>E</b> \xB7 Manas Airport":Oe<14?"<b>E</b> \xB7 watch planes land":"";if(P.onFoot){let je=z.nearestCar(p,S);Tn=je?je.own?"<b>F</b> \xB7 get in your car":"<b>F</b> \xB7 steal this car \u{1F6A8}":"Walking \xB7 <b>Shift</b> run \xB7 <b>Space</b> jump"}Tn!==P.hintTxt&&(P.hintTxt=Tn,ht("hint").innerHTML=Tn,ht("hint").classList.toggle("show",!!Tn))}else P.hintTxt&&(P.hintTxt="",ht("hint").classList.remove("show"));if(P.mode==="flight"){let dt=["pushback","taxi","taxiIn"].includes(P.flight.stage)?G*3:G;!P.ending&&g.updateScenic(P.flight,dt)&&It(!1)}d.updateRoute(P.mode==="flight"?$e:p,o),d.routeMat&&(d.routeMat.uniforms.uTime.value=P.time);let ze=w.status(p),ve=d.routeTarget?Math.hypot(p.x-d.routeTarget.x,p.z-d.routeTarget.z):0;u.setMission(ze?`${ze} \xB7 ${Xa(ve)}`:d.routeTarget?`\u{1F4CD} ${d.routeTarget.label} \xB7 ${Xa(ve)}`:""),P.lastSave+=G,P.lastSave>10&&(P.lastSave=0,d.save(p))}if(O.update(G,p,{money:d.money+d.bank,job:w.active?as[w.active.type].icon:"",jobs:w.completed},Et),P.mode==="flight"&&P.flight){g.scenicCamera(P.flight,P.flightCam,rn,xn),a.position.lerp(rn,P.flightCam===0?1-Math.exp(-G*4):1),zn.lerp(xn,P.flightCam===0?1-Math.exp(-G*6):1),a.lookAt(zn),a.fov=P.flightCam===2?70:55,a.updateProjectionMatrix();let At=P.flight.plane,ee=(Math.atan2(Math.sin(At.h),-Math.cos(At.h))*180/Math.PI+360)%360;u.setFlightInfo({alt:At.y-At.a.groundY+627,spd:At.v,hdg:ee,stage:{pushback:"Pushback",taxi:"Taxi to runway 07",roll:"Take-off",air:"Over Bishkek",final:"Final approach",taxiIn:"Taxi to gate",done:"Arrived"}[P.flight.stage],cam:["Chase","Window","Cockpit","Spotter"][P.flightCam]})}else if(P.mode==="spot"&&P.spot){let At=P.spot.pl;a.position.copy(P.spot.cam),zn.lerp(new I(At.x,At.y,At.z),1-Math.exp(-G*5)),a.lookAt(zn),a.fov=Ie.clamp(Math.hypot(At.x-P.spot.cam.x,At.z-P.spot.cam.z)/40,12,60),a.updateProjectionMatrix(),(!g.planes.includes(At)||At.state==="taxiIn"||At.state==="climb"||At.state==="goaround"&&At.y>300)&&se()}else if(P.mode==="cutscene"&&P.cutCam)a.position.lerp(P.cutCam.cam,1-Math.exp(-G*3)),zn.lerp(P.cutCam.look,1-Math.exp(-G*4)),a.lookAt(zn),a.fov=50,a.updateProjectionMatrix();else if(P.onFoot&&P.mode==="drive")Tt.active=pt,z.camera(a,G,Tt),Tt.dx=Tt.dy=0;else if(P.mode!=="free"&&(pt||(P.mouseYaw*=Math.exp(-G*2)),p.boosting&&($.shake=Math.max($.shake,.06)),$.baseFov=e.fov,$.update(Math.max(G,.001),p,P.mouseYaw),P.mode==="menu")){let At=performance.now()*4e-5;a.position.set(p.x+Math.sin(At)*26,6+Math.sin(At*3)*2,p.z+Math.cos(At)*26),a.lookAt(p.x,2,p.z)}let Gt=P.mode==="flight"||P.mode==="free"?{x:a.position.x,z:a.position.z}:{x:p.x,z:p.z};h.update(Gt,G);let Ot=l.update(a,P.mode==="flight"&&P.flight?{x:P.flight.plane.x,z:P.flight.plane.z}:p),jt=l.sun.shadow.camera,ne=P.mode==="flight"?160:110;jt.right!==ne&&(jt.left=jt.bottom=-ne,jt.right=jt.top=ne,jt.updateProjectionMatrix()),h.setNight(Ot.night),Q&&Q.setNight(Ot.night),P.mode!=="flight"&&(o.fog.near=450,o.fog.far=Math.max(h.radius+700,(e.far||0)*1.15));let Vt=g.noiseAt(a.position.x,a.position.z,a.position.y);if(f.update(G,p,{carType:p.type,onFoot:P.onFoot,night:Et,rain:T.cur==="rain"?T.amount:0,throttle:q.throttle,inFlight:P.mode==="flight",cityLevel:Math.min(1,S.cars.length/200)*(Math.abs(p.z)<6e3?1:.2),jet:P.mode==="flight"?.35:Vt}),e.shadows&&(ti%2===0||p.speed>25)&&(n.shadowMap.needsUpdate=!0),Q?Q.render(G):(n.setRenderTarget(null),n.clear(),l.render(n),n.clearDepth(),n.render(o,a)),P.photoCbs.length){let At=Oi.getContext("2d");At.drawImage(n.domElement,0,0,320,180),At.fillStyle="rgba(0,0,0,0.55)",At.fillRect(0,158,320,22),At.fillStyle="#ffeb3b",At.font="bold 12px monospace",At.fillText(`${Math.round(p.speed*3.6)} km/h  LIMIT 150  ${u.clockText()}  01KG`,8,173);let ee=Oi.toDataURL("image/jpeg",.7);for(let pe of P.photoCbs)pe(ee);P.photoCbs.length=0}if(P.mode!=="menu"){ti++,ti%2===0&&u.drawSpeedo(p),e.minimap&&ti%3===0&&u.drawMini(P.onFoot?Object.assign($e,{x:z.x,z:z.z,h:z.camYaw,speed:0}):p,S,d,g,O,(ee,pe)=>{ee.fillStyle="#ffc83a";for(let ze of M.near(yt.x,yt.z,180))ee.beginPath(),ee.arc(ze.x,ze.z,7/pe*u.dpr,0,7),ee.fill();if(b.active){ee.fillStyle="#ffd23a";for(let ze of b.active.cps.slice(b.active.i,b.active.i+3))ee.beginPath(),ee.arc(ze.x,ze.z,9/pe*u.dpr,0,7),ee.fill()}for(let ze of X.cars)ee.fillStyle=performance.now()%500<250?"#ff3030":"#3060ff",ee.beginPath(),ee.arc(ze.x,ze.z,7/pe*u.dpr,0,7),ee.fill()});let At=ht("nitroBar");At&&(At.style.width=Math.round((p.nitro??1)*100)+"%",At.parentElement.classList.toggle("boost",!!p.boosting)),u.setMoney(d.money),u.setClock(P.hour,e.mp&&O.status==="online"?O.players.size:null),P.mapOpen&&u.drawBigMap(p,d,g,O),P.tabOnline&&ti%20===0&&Nt(),ht("hudRoot").classList.toggle("flightmode",P.mode==="flight"||P.mode==="spot"),ht("hudRoot").classList.toggle("onfoot",!!P.onFoot)}}Gi(),window.addEventListener("beforeunload",()=>{d.save(p),O.disconnect()})}function yn(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function Xa(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}ly().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
