(()=>{var $c="170";var Gu=0,Cl=1,Wu=2;var Vh=1,Zc=2,Dn=3,ni=0,Oe=1,Ce=2,Qn=0,es=1,mn=2,Pl=3,Il=4,Xu=5,Ei=100,qu=101,Yu=102,$u=103,Zu=104,Ju=200,Ku=201,ju=202,Qu=203,wa=204,Sa=205,td=206,ed=207,nd=208,id=209,sd=210,rd=211,od=212,ad=213,cd=214,Ta=0,Aa=1,Ra=2,rs=3,Ca=4,Pa=5,Ia=6,La=7,Gh=0,ld=1,hd=2,ti=0,ud=1,dd=2,fd=3,Jc=4,pd=5,md=6,gd=7;var Wh=300,os=301,as=302,Da=303,Ua=304,Mo=306,Ws=1e3,wi=1001,za=1002,Qe=1003,xd=1004;var ar=1005;var yn=1006,Wo=1007;var Si=1008;var Fn=1009,Xh=1010,qh=1011,Xs=1012,Kc=1013,Ti=1014,Mn=1015,ir=1016,jc=1017,Qc=1018,cs=1020,Yh=35902,$h=1021,Zh=1022,pn=1023,Jh=1024,Kh=1025,ns=1026,ls=1027,tl=1028,el=1029,jh=1030,nl=1031;var il=1033,Br=33776,Or=33777,kr=33778,Hr=33779,Na=35840,Fa=35841,Ba=35842,Oa=35843,ka=36196,Ha=37492,Va=37496,Ga=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,$a=37813,Za=37814,Ja=37815,Ka=37816,ja=37817,Qa=37818,tc=37819,ec=37820,nc=37821,Vr=36492,ic=36494,sc=36495,Qh=36283,rc=36284,oc=36285,ac=36286;var Gr=2300,cc=2301,Xo=2302,Ll=2400,Dl=2401,Ul=2402;var vd=3200,_d=3201;var tu=0,yd=1,Kn="",Me="srgb",vs="srgb-linear",Eo="linear",ue="srgb";var Ui=7680;var zl=519,Md=512,Ed=513,bd=514,eu=515,wd=516,Sd=517,Td=518,Ad=519,lc=35044,bo=35048;var Nl="300 es",zn=2e3,Wr=2001,ii=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Fe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fl=1234567,Os=Math.PI/180,hs=180/Math.PI;function En(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Fe[r&255]+Fe[r>>8&255]+Fe[r>>16&255]+Fe[r>>24&255]+"-"+Fe[t&255]+Fe[t>>8&255]+"-"+Fe[t>>16&15|64]+Fe[t>>24&255]+"-"+Fe[e&63|128]+Fe[e>>8&255]+"-"+Fe[e>>16&255]+Fe[e>>24&255]+Fe[n&255]+Fe[n>>8&255]+Fe[n>>16&255]+Fe[n>>24&255]).toLowerCase()}function Ae(r,t,e){return Math.max(t,Math.min(e,r))}function sl(r,t){return(r%t+t)%t}function Rd(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Cd(r,t,e){return r!==t?(e-r)/(t-r):0}function ks(r,t,e){return(1-e)*r+e*t}function Pd(r,t,e,n){return ks(r,t,1-Math.exp(-e*n))}function Id(r,t=1){return t-Math.abs(sl(r,t*2)-t)}function Ld(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function Dd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function Ud(r,t){return r+Math.floor(Math.random()*(t-r+1))}function zd(r,t){return r+Math.random()*(t-r)}function Nd(r){return r*(.5-Math.random())}function Fd(r){r!==void 0&&(Fl=r);let t=Fl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Bd(r){return r*Os}function Od(r){return r*hs}function kd(r){return(r&r-1)===0&&r!==0}function Hd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Vd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Gd(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),p=s((n-t)/2),m=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*m,c*p,a*l);break;case"YXY":r.set(c*p,a*h,c*m,a*l);break;case"ZYZ":r.set(c*m,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function fn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function he(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ue={DEG2RAD:Os,RAD2DEG:hs,generateUUID:En,clamp:Ae,euclideanModulo:sl,mapLinear:Rd,inverseLerp:Cd,lerp:ks,damp:Pd,pingpong:Id,smoothstep:Ld,smootherstep:Dd,randInt:Ud,randFloat:zd,randFloatSpread:Nd,seededRandom:Fd,degToRad:Bd,radToDeg:Od,isPowerOfTwo:kd,ceilPowerOfTwo:Hd,floorPowerOfTwo:Vd,setQuaternionFromProperEuler:Gd,normalize:he,denormalize:fn},tt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class r{constructor(t,e,n,i,s,o,a,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],f=i[0],x=i[3],g=i[6],y=i[1],_=i[4],v=i[7],C=i[2],S=i[5],T=i[8];return s[0]=o*f+a*y+c*C,s[3]=o*x+a*_+c*S,s[6]=o*g+a*v+c*T,s[1]=l*f+h*y+u*C,s[4]=l*x+h*_+u*S,s[7]=l*g+h*v+u*T,s[2]=d*f+p*y+m*C,s[5]=d*x+p*_+m*S,s[8]=d*g+p*v+m*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,p=l*s-o*c,m=e*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let f=1/m;return t[0]=u*f,t[1]=(i*l-h*n)*f,t[2]=(a*n-i*o)*f,t[3]=d*f,t[4]=(h*e-i*c)*f,t[5]=(i*s-a*e)*f,t[6]=p*f,t[7]=(n*c-l*e)*f,t[8]=(o*e-n*s)*f,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(qo.makeScale(t,e)),this}rotate(t){return this.premultiply(qo.makeRotation(-t)),this}translate(t,e){return this.premultiply(qo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},qo=new Jt;function nu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Xr(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Wd(){let r=Xr("canvas");return r.style.display="block",r}var Bl={};function Fs(r){r in Bl||(Bl[r]=!0,console.warn(r))}function Xd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function qd(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yd(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ne={enabled:!0,workingColorSpace:vs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ue&&(r.r=Nn(r.r),r.g=Nn(r.g),r.b=Nn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ue&&(r.r=is(r.r),r.g=is(r.g),r.b=is(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Eo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Nn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function is(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var Ol=[.64,.33,.3,.6,.15,.06],kl=[.2126,.7152,.0722],Hl=[.3127,.329],Vl=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gl=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[vs]:{primaries:Ol,whitePoint:Hl,transfer:Eo,toXYZ:Vl,fromXYZ:Gl,luminanceCoefficients:kl,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:Ol,whitePoint:Hl,transfer:ue,toXYZ:Vl,fromXYZ:Gl,luminanceCoefficients:kl,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}});var zi,hc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Xr("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Xr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Nn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Nn(e[n]/255)*255):e[n]=Nn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},$d=0,qr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=En(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Yo(i[o].image)):s.push(Yo(i[o]))}else s=Yo(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Yo(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?hc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Zd=0,Ye=class r extends ii{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=wi,i=wi,s=yn,o=Si,a=pn,c=Fn,l=r.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=En(),this.name="",this.source=new qr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ws:t.x=t.x-Math.floor(t.x);break;case wi:t.x=t.x<0?0:1;break;case za:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ws:t.y=t.y-Math.floor(t.y);break;case wi:t.y=t.y<0?0:1;break;case za:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Wh;Ye.DEFAULT_ANISOTROPY=1;var de=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],f=c[2],x=c[6],g=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-f)<.01&&Math.abs(m-x)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+f)<.1&&Math.abs(m+x)<.1&&Math.abs(l+p+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(l+1)/2,v=(p+1)/2,C=(g+1)/2,S=(h+d)/4,T=(u+f)/4,E=(m+x)/4;return _>v&&_>C?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=S/n,s=T/n):v>C?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=E/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=T/s,i=E/s),this.set(n,i,s,e),this}let y=Math.sqrt((x-m)*(x-m)+(u-f)*(u-f)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(x-m)/y,this.y=(u-f)/y,this.z=(d-h)/y,this.w=Math.acos((l+p+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},uc=class extends ii{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new Ye(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new qr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Bn=class extends uc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Yr=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var dc=class extends Ye{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ve=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],p=s[o+1],m=s[o+2],f=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=f;return}if(u!==f||c!==d||l!==p||h!==m){let x=1-a,g=c*d+l*p+h*m+u*f,y=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let C=Math.sqrt(_),S=Math.atan2(C,g*y);x=Math.sin(x*S)/C,a=Math.sin(a*S)/C}let v=a*y;if(c=c*x+d*v,l=l*x+p*v,h=h*x+m*v,u=u*x+f*v,x===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],p=s[o+2],m=s[o+3];return t[e]=a*m+h*u+c*p-l*d,t[e+1]=c*m+h*d+l*u-a*p,t[e+2]=l*m+h*p+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),p=c(i/2),m=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(s-l)*p,this._z=(o-i)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(s+l)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(s-l)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-i)/p,this._x=(s+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*i+e*this._y,this._z=p*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return $o.copy(this).projectOnVector(t),this.sub($o)}reflect(t){return this.sub($o.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$o=new I,Wl=new Ve,On=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cr.copy(n.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(As),lr.subVectors(this.max,As),Ni.subVectors(t.a,As),Fi.subVectors(t.b,As),Bi.subVectors(t.c,As),Xn.subVectors(Fi,Ni),qn.subVectors(Bi,Fi),mi.subVectors(Ni,Bi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-mi.z,mi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,mi.z,0,-mi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-mi.y,mi.x,0];return!Zo(e,Ni,Fi,Bi,lr)||(e=[1,0,0,0,1,0,0,0,1],!Zo(e,Ni,Fi,Bi,lr))?!1:(hr.crossVectors(Xn,qn),e=[hr.x,hr.y,hr.z],Zo(e,Ni,Fi,Bi,lr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Rn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Rn=[new I,new I,new I,new I,new I,new I,new I,new I],hn=new I,cr=new On,Ni=new I,Fi=new I,Bi=new I,Xn=new I,qn=new I,mi=new I,As=new I,lr=new I,hr=new I,gi=new I;function Zo(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){gi.fromArray(r,s);let a=i.x*Math.abs(gi.x)+i.y*Math.abs(gi.y)+i.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),h=n.dot(gi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Jd=new On,Rs=new I,Jo=new I,si=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Jd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Rs.subVectors(t,this.center);let e=Rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Rs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Rs.copy(t.center).add(Jo)),this.expandByPoint(Rs.copy(t.center).sub(Jo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Cn=new I,Ko=new I,ur=new I,Yn=new I,jo=new I,dr=new I,Qo=new I,$r=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ko.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Ko);let s=t.distanceTo(e)*.5,o=-this.direction.dot(ur),a=Yn.dot(this.direction),c=-Yn.dot(ur),l=Yn.lengthSq(),h=Math.abs(1-o*o),u,d,p,m;if(h>0)if(u=o*c-a,d=o*a-c,m=s*h,u>=0)if(d>=-m)if(d<=m){let f=1/h;u*=f,d*=f,p=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-s,-c),s),p=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),p=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ko).addScaledVector(ur,d),p}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);let n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,i,s){jo.subVectors(e,t),dr.subVectors(n,t),Qo.crossVectors(jo,dr);let o=this.direction.dot(Qo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);let c=a*this.direction.dot(dr.crossVectors(Yn,dr));if(c<0)return null;let l=a*this.direction.dot(jo.cross(Yn));if(l<0||c+l>o)return null;let h=-a*Yn.dot(Qo);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Qt=class r{constructor(t,e,n,i,s,o,a,c,l,h,u,d,p,m,f,x){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,p,m,f,x)}set(t,e,n,i,s,o,a,c,l,h,u,d,p,m,f,x){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=u,g[14]=d,g[3]=p,g[7]=m,g[11]=f,g[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Oi.setFromMatrixColumn(t,0).length(),s=1/Oi.setFromMatrixColumn(t,1).length(),o=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,p=o*u,m=a*h,f=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+m*l,e[5]=d-f*l,e[9]=-a*c,e[2]=f-d*l,e[6]=m+p*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,p=c*u,m=l*h,f=l*u;e[0]=d+f*a,e[4]=m*a-p,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-m,e[6]=f+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,p=c*u,m=l*h,f=l*u;e[0]=d-f*a,e[4]=-o*u,e[8]=m+p*a,e[1]=p+m*a,e[5]=o*h,e[9]=f-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,p=o*u,m=a*h,f=a*u;e[0]=c*h,e[4]=m*l-p,e[8]=d*l+f,e[1]=c*u,e[5]=f*l+d,e[9]=p*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,p=o*l,m=a*c,f=a*l;e[0]=c*h,e[4]=f-d*u,e[8]=m*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+m,e[10]=d-f*u}else if(t.order==="XZY"){let d=o*c,p=o*l,m=a*c,f=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+f,e[5]=o*h,e[9]=p*u-m,e[2]=m*u-p,e[6]=a*h,e[10]=f*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kd,t,jd)}lookAt(t,e,n){let i=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),$n.crossVectors(n,Ke),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),$n.crossVectors(n,Ke)),$n.normalize(),fr.crossVectors(Ke,$n),i[0]=$n.x,i[4]=fr.x,i[8]=Ke.x,i[1]=$n.y,i[5]=fr.y,i[9]=Ke.y,i[2]=$n.z,i[6]=fr.z,i[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],f=n[6],x=n[10],g=n[14],y=n[3],_=n[7],v=n[11],C=n[15],S=i[0],T=i[4],E=i[8],M=i[12],b=i[1],P=i[5],D=i[9],U=i[13],N=i[2],F=i[6],B=i[10],Z=i[14],W=i[3],X=i[7],K=i[11],at=i[15];return s[0]=o*S+a*b+c*N+l*W,s[4]=o*T+a*P+c*F+l*X,s[8]=o*E+a*D+c*B+l*K,s[12]=o*M+a*U+c*Z+l*at,s[1]=h*S+u*b+d*N+p*W,s[5]=h*T+u*P+d*F+p*X,s[9]=h*E+u*D+d*B+p*K,s[13]=h*M+u*U+d*Z+p*at,s[2]=m*S+f*b+x*N+g*W,s[6]=m*T+f*P+x*F+g*X,s[10]=m*E+f*D+x*B+g*K,s[14]=m*M+f*U+x*Z+g*at,s[3]=y*S+_*b+v*N+C*W,s[7]=y*T+_*P+v*F+C*X,s[11]=y*E+_*D+v*B+C*K,s[15]=y*M+_*U+v*Z+C*at,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],p=t[14],m=t[3],f=t[7],x=t[11],g=t[15];return m*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*p-n*c*p)+f*(+e*c*p-e*l*d+s*o*d-i*o*p+i*l*h-s*c*h)+x*(+e*l*u-e*a*p-s*o*u+n*o*p+s*a*h-n*l*h)+g*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],p=t[11],m=t[12],f=t[13],x=t[14],g=t[15],y=u*x*l-f*d*l+f*c*p-a*x*p-u*c*g+a*d*g,_=m*d*l-h*x*l-m*c*p+o*x*p+h*c*g-o*d*g,v=h*f*l-m*u*l+m*a*p-o*f*p-h*a*g+o*u*g,C=m*u*c-h*f*c-m*a*d+o*f*d+h*a*x-o*u*x,S=e*y+n*_+i*v+s*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/S;return t[0]=y*T,t[1]=(f*d*s-u*x*s-f*i*p+n*x*p+u*i*g-n*d*g)*T,t[2]=(a*x*s-f*c*s+f*i*l-n*x*l-a*i*g+n*c*g)*T,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*p-n*c*p)*T,t[4]=_*T,t[5]=(h*x*s-m*d*s+m*i*p-e*x*p-h*i*g+e*d*g)*T,t[6]=(m*c*s-o*x*s-m*i*l+e*x*l+o*i*g-e*c*g)*T,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*p+e*c*p)*T,t[8]=v*T,t[9]=(m*u*s-h*f*s-m*n*p+e*f*p+h*n*g-e*u*g)*T,t[10]=(o*f*s-m*a*s+m*n*l-e*f*l-o*n*g+e*a*g)*T,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*p-e*a*p)*T,t[12]=C*T,t[13]=(h*f*i-m*u*i+m*n*d-e*f*d-h*n*x+e*u*x)*T,t[14]=(m*a*i-o*f*i-m*n*c+e*f*c+o*n*x-e*a*x)*T,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*T,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,p=s*h,m=s*u,f=o*h,x=o*u,g=a*u,y=c*l,_=c*h,v=c*u,C=n.x,S=n.y,T=n.z;return i[0]=(1-(f+g))*C,i[1]=(p+v)*C,i[2]=(m-_)*C,i[3]=0,i[4]=(p-v)*S,i[5]=(1-(d+g))*S,i[6]=(x+y)*S,i[7]=0,i[8]=(m+_)*T,i[9]=(x-y)*T,i[10]=(1-(d+f))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Oi.set(i[0],i[1],i[2]).length(),o=Oi.set(i[4],i[5],i[6]).length(),a=Oi.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],un.copy(this);let l=1/s,h=1/o,u=1/a;return un.elements[0]*=l,un.elements[1]*=l,un.elements[2]*=l,un.elements[4]*=h,un.elements[5]*=h,un.elements[6]*=h,un.elements[8]*=u,un.elements[9]*=u,un.elements[10]*=u,e.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=zn){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),p,m;if(a===zn)p=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Wr)p=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=zn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,p=(n+i)*h,m,f;if(a===zn)m=(o+s)*u,f=-2*u;else if(a===Wr)m=s*u,f=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=f,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Oi=new I,un=new Qt,Kd=new I(0,0,0),jd=new I(1,1,1),$n=new I,fr=new I,Ke=new I,Xl=new Qt,ql=new Ve,sn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ql.setFromEuler(this),this.setFromQuaternion(ql,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var Zr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Qd=0,Yl=new I,ki=new Ve,Pn=new Qt,pr=new I,Cs=new I,tf=new I,ef=new Ve,$l=new I(1,0,0),Zl=new I(0,1,0),Jl=new I(0,0,1),Kl={type:"added"},nf={type:"removed"},Hi={type:"childadded",child:null},ta={type:"childremoved",child:null},Ee=class r extends ii{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qd++}),this.uuid=En(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new sn,n=new Ve,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Qt},normalMatrix:{value:new Jt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis($l,t)}rotateY(t){return this.rotateOnAxis(Zl,t)}rotateZ(t){return this.rotateOnAxis(Jl,t)}translateOnAxis(t,e){return Yl.copy(t).applyQuaternion(this.quaternion),this.position.add(Yl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis($l,t)}translateY(t){return this.translateOnAxis(Zl,t)}translateZ(t){return this.translateOnAxis(Jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pr.copy(t):pr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Cs,pr,this.up):Pn.lookAt(pr,Cs,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),ki.setFromRotationMatrix(Pn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Pn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),Hi.child=t,this.dispatchEvent(Hi),Hi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),p=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Ee.DEFAULT_UP=new I(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var dn=new I,In=new I,ea=new I,Ln=new I,Vi=new I,Gi=new I,jl=new I,na=new I,ia=new I,sa=new I,ra=new de,oa=new de,aa=new de,jn=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),dn.subVectors(t,e),i.cross(dn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){dn.subVectors(i,e),In.subVectors(n,e),ea.subVectors(t,e);let o=dn.dot(dn),a=dn.dot(In),c=dn.dot(ea),l=In.dot(In),h=In.dot(ea),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,p=(l*c-a*h)*d,m=(o*h-a*c)*d;return s.set(1-p-m,m,p)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return ra.setScalar(0),oa.setScalar(0),aa.setScalar(0),ra.fromBufferAttribute(t,e),oa.fromBufferAttribute(t,n),aa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(ra,s.x),o.addScaledVector(oa,s.y),o.addScaledVector(aa,s.z),o}static isFrontFacing(t,e,n,i){return dn.subVectors(n,e),In.subVectors(t,e),dn.cross(In).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Vi.subVectors(i,n),Gi.subVectors(s,n),na.subVectors(t,n);let c=Vi.dot(na),l=Gi.dot(na);if(c<=0&&l<=0)return e.copy(n);ia.subVectors(t,i);let h=Vi.dot(ia),u=Gi.dot(ia);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Vi,o);sa.subVectors(t,s);let p=Vi.dot(sa),m=Gi.dot(sa);if(m>=0&&p<=m)return e.copy(s);let f=p*l-c*m;if(f<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Gi,a);let x=h*m-p*u;if(x<=0&&u-h>=0&&p-m>=0)return jl.subVectors(s,i),a=(u-h)/(u-h+(p-m)),e.copy(i).addScaledVector(jl,a);let g=1/(x+f+d);return o=f*g,a=d*g,e.copy(n).addScaledVector(Vi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},mr={h:0,s:0,l:0};function ca(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Ct=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ne.workingColorSpace){if(t=sl(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ca(o,s,t+1/3),this.g=ca(o,s,t),this.b=ca(o,s,t-1/3)}return ne.toWorkingColorSpace(this,i),this}setStyle(t,e=Me){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=iu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=is(t.r),this.g=is(t.g),this.b=is(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return ne.fromWorkingColorSpace(Be.copy(this),t),Math.round(Ae(Be.r*255,0,255))*65536+Math.round(Ae(Be.g*255,0,255))*256+Math.round(Ae(Be.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Be.copy(this),e);let n=Be.r,i=Be.g,s=Be.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Me){ne.fromWorkingColorSpace(Be.copy(this),t);let e=Be.r,n=Be.g,i=Be.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(mr);let n=ks(Zn.h,mr.h,e),i=ks(Zn.s,mr.s,e),s=ks(Zn.l,mr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Be=new Ct;Ct.NAMES=iu;var sf=0,kn=class extends ii{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=En(),this.name="",this.blending=es,this.side=ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Sa,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ui,this.stencilZFail=Ui,this.stencilZPass=Ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==es&&(n.blending=this.blending),this.side!==ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==wa&&(n.blendSrc=this.blendSrc),this.blendDst!==Sa&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xe=class extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=Gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Te=new I,gr=new tt,se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=lc,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gr.fromBufferAttribute(this,e),gr.applyMatrix3(t),this.setXY(e,gr.x,gr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix3(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyMatrix4(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.applyNormalMatrix(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Te.fromBufferAttribute(this,e),Te.transformDirection(t),this.setXYZ(e,Te.x,Te.y,Te.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==lc&&(t.usage=this.usage),t}};var us=class extends se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ds=class extends se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Yt=class extends se{constructor(t,e,n){super(new Float32Array(t),e,n)}},rf=0,nn=new Qt,la=new Ee,Wi=new I,je=new On,Ps=new On,De=new I,re=class r extends ii{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=En(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(nu(t)?ds:us)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,n){return nn.makeTranslation(t,e,n),this.applyMatrix4(nn),this}scale(t,e,n){return nn.makeScale(t,e,n),this.applyMatrix4(nn),this}lookAt(t){return la.lookAt(t),la.updateMatrix(),this.applyMatrix4(la.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Yt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];je.setFromBufferAttribute(s),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new si);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Ps.setFromBufferAttribute(a),this.morphTargetsRelative?(De.addVectors(je.min,Ps.min),je.expandByPoint(De),De.addVectors(je.max,Ps.max),je.expandByPoint(De)):(je.expandByPoint(Ps.min),je.expandByPoint(Ps.max))}je.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)De.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(De));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)De.fromBufferAttribute(a,l),c&&(Wi.fromBufferAttribute(t,l),De.add(Wi)),i=Math.max(i,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let E=0;E<n.count;E++)a[E]=new I,c[E]=new I;let l=new I,h=new I,u=new I,d=new tt,p=new tt,m=new tt,f=new I,x=new I;function g(E,M,b){l.fromBufferAttribute(n,E),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,M),m.fromBufferAttribute(s,b),h.sub(l),u.sub(l),p.sub(d),m.sub(d);let P=1/(p.x*m.y-m.x*p.y);isFinite(P)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(P),x.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(P),a[E].add(f),a[M].add(f),a[b].add(f),c[E].add(x),c[M].add(x),c[b].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let E=0,M=y.length;E<M;++E){let b=y[E],P=b.start,D=b.count;for(let U=P,N=P+D;U<N;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}let _=new I,v=new I,C=new I,S=new I;function T(E){C.fromBufferAttribute(i,E),S.copy(C);let M=a[E];_.copy(M),_.sub(C.multiplyScalar(C.dot(M))).normalize(),v.crossVectors(S,M);let P=v.dot(c[E])<0?-1:1;o.setXYZW(E,_.x,_.y,_.z,P)}for(let E=0,M=y.length;E<M;++E){let b=y[E],P=b.start,D=b.count;for(let U=P,N=P+D;U<N;U+=3)T(t.getX(U+0)),T(t.getX(U+1)),T(t.getX(U+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let i=new I,s=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,p=t.count;d<p;d+=3){let m=t.getX(d+0),f=t.getX(d+1),x=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,f),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,f),l.fromBufferAttribute(n,x),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z),n.setXYZ(x,l.x,l.y,l.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),p=0,m=0;for(let f=0,x=c.length;f<x;f++){a.isInterleavedBufferAttribute?p=c[f]*a.data.stride+a.offset:p=c[f]*h;for(let g=0;g<h;g++)d[m++]=l[p++]}return new se(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],p=t(d,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ql=new Qt,xi=new $r,xr=new si,th=new I,vr=new I,_r=new I,yr=new I,ha=new I,Mr=new I,eh=new I,Er=new I,it=class extends Ee{constructor(t=new re,e=new xe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Mr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(ha.fromBufferAttribute(u,t),o?Mr.addScaledVector(ha,h):Mr.addScaledVector(ha.sub(e),h))}e.add(Mr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),xi.copy(t.ray).recast(t.near),!(xr.containsPoint(xi.origin)===!1&&(xi.intersectSphere(xr,th)===null||xi.origin.distanceToSquared(th)>(t.far-t.near)**2))&&(Ql.copy(s).invert(),xi.copy(t.ray).applyMatrix4(Ql),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,f=d.length;m<f;m++){let x=d[m],g=o[x.materialIndex],y=Math.max(x.start,p.start),_=Math.min(a.count,Math.min(x.start+x.count,p.start+p.count));for(let v=y,C=_;v<C;v+=3){let S=a.getX(v),T=a.getX(v+1),E=a.getX(v+2);i=br(this,g,t,n,l,h,u,S,T,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),f=Math.min(a.count,p.start+p.count);for(let x=m,g=f;x<g;x+=3){let y=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);i=br(this,o,t,n,l,h,u,y,_,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,f=d.length;m<f;m++){let x=d[m],g=o[x.materialIndex],y=Math.max(x.start,p.start),_=Math.min(c.count,Math.min(x.start+x.count,p.start+p.count));for(let v=y,C=_;v<C;v+=3){let S=v,T=v+1,E=v+2;i=br(this,g,t,n,l,h,u,S,T,E),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let m=Math.max(0,p.start),f=Math.min(c.count,p.start+p.count);for(let x=m,g=f;x<g;x+=3){let y=x,_=x+1,v=x+2;i=br(this,o,t,n,l,h,u,y,_,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function of(r,t,e,n,i,s,o,a){let c;if(t.side===Oe?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===ni,a),c===null)return null;Er.copy(a),Er.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(Er);return l<e.near||l>e.far?null:{distance:l,point:Er.clone(),object:r}}function br(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,vr),r.getVertexPosition(c,_r),r.getVertexPosition(l,yr);let h=of(r,t,e,n,vr,_r,yr,eh);if(h){let u=new I;jn.getBarycoord(eh,vr,_r,yr,u),i&&(h.uv=jn.getInterpolatedAttribute(i,a,c,l,u,new tt)),s&&(h.uv1=jn.getInterpolatedAttribute(s,a,c,l,u,new tt)),o&&(h.normal=jn.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new I,materialIndex:0};jn.getNormal(vr,_r,yr,d.normal),h.face=d,h.barycoord=u}return h}var Ot=class r extends re{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,p=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Yt(l,3)),this.setAttribute("normal",new Yt(h,3)),this.setAttribute("uv",new Yt(u,2));function m(f,x,g,y,_,v,C,S,T,E,M){let b=v/T,P=C/E,D=v/2,U=C/2,N=S/2,F=T+1,B=E+1,Z=0,W=0,X=new I;for(let K=0;K<B;K++){let at=K*P-U;for(let xt=0;xt<F;xt++){let ot=xt*b-D;X[f]=ot*y,X[x]=at*_,X[g]=N,l.push(X.x,X.y,X.z),X[f]=0,X[x]=0,X[g]=S>0?1:-1,h.push(X.x,X.y,X.z),u.push(xt/T),u.push(1-K/E),Z+=1}}for(let K=0;K<E;K++)for(let at=0;at<T;at++){let xt=d+at+F*K,ot=d+at+F*(K+1),V=d+(at+1)+F*(K+1),J=d+(at+1)+F*K;c.push(xt,ot,J),c.push(ot,V,J),W+=6}a.addGroup(p,W,M),p+=W,d+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function fs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function He(r){let t={};for(let e=0;e<r.length;e++){let n=fs(r[e]);for(let i in n)t[i]=n[i]}return t}function af(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function su(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}var rl={clone:fs,merge:He},cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pe=class extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=lf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fs(t.uniforms),this.uniformsGroups=af(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Jr=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jn=new I,nh=new tt,ih=new tt,Re=class extends Jr{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=hs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Os*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return hs*2*Math.atan(Math.tan(Os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z),Jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jn.x,Jn.y).multiplyScalar(-t/Jn.z)}getViewSize(t,e){return this.getViewBounds(t,nh,ih),e.subVectors(ih,nh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Os*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Xi=-90,qi=1,fc=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Re(Xi,qi,t,e);i.layers=this.layers,this.add(i);let s=new Re(Xi,qi,t,e);s.layers=this.layers,this.add(s);let o=new Re(Xi,qi,t,e);o.layers=this.layers,this.add(o);let a=new Re(Xi,qi,t,e);a.layers=this.layers,this.add(a);let c=new Re(Xi,qi,t,e);c.layers=this.layers,this.add(c);let l=new Re(Xi,qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Wr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=f,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,p),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Kr=class extends Ye{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:os,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},pc=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Kr(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ot(5,5,5),s=new Pe({name:"CubemapFromEquirect",uniforms:fs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Qn});s.uniforms.tEquirect.value=e;let o=new it(i,s),a=e.minFilter;return e.minFilter===Si&&(e.minFilter=yn),new fc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},ua=new I,hf=new I,uf=new Jt,Un=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=ua.subVectors(n,e).cross(hf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(ua),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||uf.getNormalMatrix(t),i=this.coplanarPoint(ua).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vi=new si,wr=new I,qs=class{constructor(t=new Un,e=new Un,n=new Un,i=new Un,s=new Un,o=new Un){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],f=i[10],x=i[11],g=i[12],y=i[13],_=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,x-p,v-g).normalize(),n[1].setComponents(c+s,d+l,x+p,v+g).normalize(),n[2].setComponents(c+o,d+h,x+m,v+y).normalize(),n[3].setComponents(c-o,d-h,x-m,v-y).normalize(),n[4].setComponents(c-a,d-u,x-f,v-_).normalize(),e===zn)n[5].setComponents(c+a,d+u,x+f,v+_).normalize();else if(e===Wr)n[5].setComponents(a,u,f,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vi)}intersectsSprite(t){return vi.center.set(0,0,0),vi.radius=.7071067811865476,vi.applyMatrix4(t.matrixWorld),this.intersectsSphere(vi)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(wr.x=i.normal.x>0?t.max.x:t.min.x,wr.y=i.normal.y>0?t.max.y:t.min.y,wr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(wr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ru(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function df(r){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=r.HALF_FLOAT:p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<u.length;p++){let m=u[d],f=u[p];f.start<=m.start+m.count+1?m.count=Math.max(m.count,f.start+f.count-m.start):(++d,u[d]=f)}u.length=d+1;for(let p=0,m=u.length;p<m;p++){let f=u[p];r.bufferSubData(l,f.start*h.BYTES_PER_ELEMENT,h,f.start,f.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var be=class r extends re{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,p=[],m=[],f=[],x=[];for(let g=0;g<h;g++){let y=g*d-o;for(let _=0;_<l;_++){let v=_*u-s;m.push(v,-y,0),f.push(0,0,1),x.push(_/a),x.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let _=y+l*g,v=y+l*(g+1),C=y+1+l*(g+1),S=y+1+l*g;p.push(_,v,S),p.push(v,C,S)}this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},ff=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pf=`#ifdef USE_ALPHAHASH
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
#endif`,mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,_f=`#ifdef USE_AOMAP
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
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mf=`#ifdef USE_BATCHING
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
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tf=`#ifdef USE_IRIDESCENCE
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
#endif`,Af=`#ifdef USE_BUMPMAP
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
#endif`,Rf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Nf=`#define PI 3.141592653589793
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
} // validated`,Ff=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
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
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tp=`#ifdef USE_GRADIENTMAP
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
}`,ep=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,np=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sp=`uniform bool receiveShadow;
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
#endif`,rp=`#ifdef USE_ENVMAP
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
#endif`,op=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hp=`PhysicalMaterial material;
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
#endif`,up=`struct PhysicalMaterial {
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
}`,dp=`
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
#endif`,fp=`#if defined( RE_IndirectDiffuse )
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
#endif`,pp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_p=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ep=`#if defined( USE_POINTS_UV )
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
#endif`,bp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Rp=`#ifdef USE_MORPHTARGETS
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
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ip=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Up=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zp=`#ifdef USE_NORMALMAP
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
#endif`,Np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Kp=`float getShadowMask() {
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
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qp=`#ifdef USE_SKINNING
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
#endif`,tm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,em=`#ifdef USE_SKINNING
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
#endif`,nm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,om=`#ifdef USE_TRANSMISSION
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
#endif`,am=`#ifdef USE_TRANSMISSION
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
#endif`,cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,um=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fm=`uniform sampler2D t2D;
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
}`,pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,gm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`#include <common>
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
}`,_m=`#if DEPTH_PACKING == 3200
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
}`,ym=`#define DISTANCE
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
}`,Mm=`#define DISTANCE
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
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`uniform float scale;
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
}`,Sm=`uniform vec3 diffuse;
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
}`,Tm=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Rm=`#define LAMBERT
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
}`,Cm=`#define LAMBERT
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
}`,Pm=`#define MATCAP
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
}`,Im=`#define MATCAP
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
}`,Lm=`#define NORMAL
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
}`,Dm=`#define NORMAL
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
}`,Um=`#define PHONG
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
}`,zm=`#define PHONG
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
}`,Nm=`#define STANDARD
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
}`,Fm=`#define STANDARD
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
}`,Bm=`#define TOON
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
}`,Om=`#define TOON
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
}`,km=`uniform float size;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Vm=`#include <common>
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
}`,Gm=`uniform vec3 color;
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
}`,Wm=`uniform float rotation;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,Kt={alphahash_fragment:ff,alphahash_pars_fragment:pf,alphamap_fragment:mf,alphamap_pars_fragment:gf,alphatest_fragment:xf,alphatest_pars_fragment:vf,aomap_fragment:_f,aomap_pars_fragment:yf,batching_pars_vertex:Mf,batching_vertex:Ef,begin_vertex:bf,beginnormal_vertex:wf,bsdfs:Sf,iridescence_fragment:Tf,bumpmap_pars_fragment:Af,clipping_planes_fragment:Rf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:If,color_fragment:Lf,color_pars_fragment:Df,color_pars_vertex:Uf,color_vertex:zf,common:Nf,cube_uv_reflection_fragment:Ff,defaultnormal_vertex:Bf,displacementmap_pars_vertex:Of,displacementmap_vertex:kf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Vf,colorspace_fragment:Gf,colorspace_pars_fragment:Wf,envmap_fragment:Xf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:rp,envmap_vertex:Zf,fog_vertex:Jf,fog_pars_vertex:Kf,fog_fragment:jf,fog_pars_fragment:Qf,gradientmap_pars_fragment:tp,lightmap_pars_fragment:ep,lights_lambert_fragment:np,lights_lambert_pars_fragment:ip,lights_pars_begin:sp,lights_toon_fragment:op,lights_toon_pars_fragment:ap,lights_phong_fragment:cp,lights_phong_pars_fragment:lp,lights_physical_fragment:hp,lights_physical_pars_fragment:up,lights_fragment_begin:dp,lights_fragment_maps:fp,lights_fragment_end:pp,logdepthbuf_fragment:mp,logdepthbuf_pars_fragment:gp,logdepthbuf_pars_vertex:xp,logdepthbuf_vertex:vp,map_fragment:_p,map_pars_fragment:yp,map_particle_fragment:Mp,map_particle_pars_fragment:Ep,metalnessmap_fragment:bp,metalnessmap_pars_fragment:wp,morphinstance_vertex:Sp,morphcolor_vertex:Tp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Rp,morphtarget_vertex:Cp,normal_fragment_begin:Pp,normal_fragment_maps:Ip,normal_pars_fragment:Lp,normal_pars_vertex:Dp,normal_vertex:Up,normalmap_pars_fragment:zp,clearcoat_normal_fragment_begin:Np,clearcoat_normal_fragment_maps:Fp,clearcoat_pars_fragment:Bp,iridescence_pars_fragment:Op,opaque_fragment:kp,packing:Hp,premultiplied_alpha_fragment:Vp,project_vertex:Gp,dithering_fragment:Wp,dithering_pars_fragment:Xp,roughnessmap_fragment:qp,roughnessmap_pars_fragment:Yp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:Zp,shadowmap_vertex:Jp,shadowmask_pars_fragment:Kp,skinbase_vertex:jp,skinning_pars_vertex:Qp,skinning_vertex:tm,skinnormal_vertex:em,specularmap_fragment:nm,specularmap_pars_fragment:im,tonemapping_fragment:sm,tonemapping_pars_fragment:rm,transmission_fragment:om,transmission_pars_fragment:am,uv_pars_fragment:cm,uv_pars_vertex:lm,uv_vertex:hm,worldpos_vertex:um,background_vert:dm,background_frag:fm,backgroundCube_vert:pm,backgroundCube_frag:mm,cube_vert:gm,cube_frag:xm,depth_vert:vm,depth_frag:_m,distanceRGBA_vert:ym,distanceRGBA_frag:Mm,equirect_vert:Em,equirect_frag:bm,linedashed_vert:wm,linedashed_frag:Sm,meshbasic_vert:Tm,meshbasic_frag:Am,meshlambert_vert:Rm,meshlambert_frag:Cm,meshmatcap_vert:Pm,meshmatcap_frag:Im,meshnormal_vert:Lm,meshnormal_frag:Dm,meshphong_vert:Um,meshphong_frag:zm,meshphysical_vert:Nm,meshphysical_frag:Fm,meshtoon_vert:Bm,meshtoon_frag:Om,points_vert:km,points_frag:Hm,shadow_vert:Vm,shadow_frag:Gm,sprite_vert:Wm,sprite_frag:Xm},_t={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},_n={basic:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Kt.meshbasic_vert,fragmentShader:Kt.meshbasic_frag},lambert:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Kt.meshlambert_vert,fragmentShader:Kt.meshlambert_frag},phong:{uniforms:He([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30}}]),vertexShader:Kt.meshphong_vert,fragmentShader:Kt.meshphong_frag},standard:{uniforms:He([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag},toon:{uniforms:He([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Kt.meshtoon_vert,fragmentShader:Kt.meshtoon_frag},matcap:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Kt.meshmatcap_vert,fragmentShader:Kt.meshmatcap_frag},points:{uniforms:He([_t.points,_t.fog]),vertexShader:Kt.points_vert,fragmentShader:Kt.points_frag},dashed:{uniforms:He([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Kt.linedashed_vert,fragmentShader:Kt.linedashed_frag},depth:{uniforms:He([_t.common,_t.displacementmap]),vertexShader:Kt.depth_vert,fragmentShader:Kt.depth_frag},normal:{uniforms:He([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Kt.meshnormal_vert,fragmentShader:Kt.meshnormal_frag},sprite:{uniforms:He([_t.sprite,_t.fog]),vertexShader:Kt.sprite_vert,fragmentShader:Kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Kt.background_vert,fragmentShader:Kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:Kt.backgroundCube_vert,fragmentShader:Kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Kt.cube_vert,fragmentShader:Kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Kt.equirect_vert,fragmentShader:Kt.equirect_frag},distanceRGBA:{uniforms:He([_t.common,_t.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Kt.distanceRGBA_vert,fragmentShader:Kt.distanceRGBA_frag},shadow:{uniforms:He([_t.lights,_t.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Kt.shadow_vert,fragmentShader:Kt.shadow_frag}};_n.physical={uniforms:He([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Kt.meshphysical_vert,fragmentShader:Kt.meshphysical_frag};var Sr={r:0,b:0,g:0},_i=new sn,qm=new Qt;function Ym(r,t,e,n,i,s,o){let a=new Ct(0),c=s===!0?0:1,l,h,u=null,d=0,p=null;function m(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function f(y){let _=!1,v=m(y);v===null?g(a,c):v&&v.isColor&&(g(v,1),_=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(y,_){let v=m(_);v&&(v.isCubeTexture||v.mapping===Mo)?(h===void 0&&(h=new it(new Ot(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:fs(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,S,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),_i.copy(_.backgroundRotation),_i.x*=-1,_i.y*=-1,_i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_i.y*=-1,_i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qm.makeRotationFromEuler(_i)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,(u!==v||d!==v.version||p!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new it(new be(2,2),new Pe({name:"BackgroundMaterial",uniforms:fs(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==ue,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||p!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,p=r.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function g(y,_){y.getRGB(Sr,su(r)),n.buffers.color.setClear(Sr.r,Sr.g,Sr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),c=_,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(y){c=y,g(a,c)},render:f,addToRenderList:x}}function $m(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(b,P,D,U,N){let F=!1,B=u(U,D,P);s!==B&&(s=B,l(s.object)),F=p(b,U,D,N),F&&m(b,U,D,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(b,P,D,U),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return r.createVertexArray()}function l(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,P,D){let U=D.wireframe===!0,N=n[b.id];N===void 0&&(N={},n[b.id]=N);let F=N[P.id];F===void 0&&(F={},N[P.id]=F);let B=F[U];return B===void 0&&(B=d(c()),F[U]=B),B}function d(b){let P=[],D=[],U=[];for(let N=0;N<e;N++)P[N]=0,D[N]=0,U[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:U,object:b,attributes:{},index:null}}function p(b,P,D,U){let N=s.attributes,F=P.attributes,B=0,Z=D.getAttributes();for(let W in Z)if(Z[W].location>=0){let K=N[W],at=F[W];if(at===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(at=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(at=b.instanceColor)),K===void 0||K.attribute!==at||at&&K.data!==at.data)return!0;B++}return s.attributesNum!==B||s.index!==U}function m(b,P,D,U){let N={},F=P.attributes,B=0,Z=D.getAttributes();for(let W in Z)if(Z[W].location>=0){let K=F[W];K===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));let at={};at.attribute=K,K&&K.data&&(at.data=K.data),N[W]=at,B++}s.attributes=N,s.attributesNum=B,s.index=U}function f(){let b=s.newAttributes;for(let P=0,D=b.length;P<D;P++)b[P]=0}function x(b){g(b,0)}function g(b,P){let D=s.newAttributes,U=s.enabledAttributes,N=s.attributeDivisors;D[b]=1,U[b]===0&&(r.enableVertexAttribArray(b),U[b]=1),N[b]!==P&&(r.vertexAttribDivisor(b,P),N[b]=P)}function y(){let b=s.newAttributes,P=s.enabledAttributes;for(let D=0,U=P.length;D<U;D++)P[D]!==b[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function _(b,P,D,U,N,F,B){B===!0?r.vertexAttribIPointer(b,P,D,N,F):r.vertexAttribPointer(b,P,D,U,N,F)}function v(b,P,D,U){f();let N=U.attributes,F=D.getAttributes(),B=P.defaultAttributeValues;for(let Z in F){let W=F[Z];if(W.location>=0){let X=N[Z];if(X===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(X=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(X=b.instanceColor)),X!==void 0){let K=X.normalized,at=X.itemSize,xt=t.get(X);if(xt===void 0)continue;let ot=xt.buffer,V=xt.type,J=xt.bytesPerElement,ct=V===r.INT||V===r.UNSIGNED_INT||X.gpuType===Kc;if(X.isInterleavedBufferAttribute){let rt=X.data,mt=rt.stride,Lt=X.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<W.locationSize;It++)g(W.location+It,rt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<W.locationSize;It++)x(W.location+It);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let It=0;It<W.locationSize;It++)_(W.location+It,at/W.locationSize,V,K,mt*J,(Lt+at/W.locationSize*It)*J,ct)}else{if(X.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)g(W.location+rt,X.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let rt=0;rt<W.locationSize;rt++)x(W.location+rt);r.bindBuffer(r.ARRAY_BUFFER,ot);for(let rt=0;rt<W.locationSize;rt++)_(W.location+rt,at/W.locationSize,V,K,at*J,at/W.locationSize*rt*J,ct)}}else if(B!==void 0){let K=B[Z];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(W.location,K);break;case 3:r.vertexAttrib3fv(W.location,K);break;case 4:r.vertexAttrib4fv(W.location,K);break;default:r.vertexAttrib1fv(W.location,K)}}}}y()}function C(){E();for(let b in n){let P=n[b];for(let D in P){let U=P[D];for(let N in U)h(U[N].object),delete U[N];delete P[D]}delete n[b]}}function S(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let D in P){let U=P[D];for(let N in U)h(U[N].object),delete U[N];delete P[D]}delete n[b.id]}function T(b){for(let P in n){let D=n[P];if(D[b.id]===void 0)continue;let U=D[b.id];for(let N in U)h(U[N].object),delete U[N];delete D[b.id]}}function E(){M(),o=!0,s!==i&&(s=i,l(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:E,resetDefaultState:M,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:T,initAttributes:f,enableAttribute:x,disableUnusedAttributes:y}}function Zm(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let m=0;m<u;m++)p+=h[m];e.update(p,n,1)}function c(l,h,u,d){if(u===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let f=0;f<u;f++)m+=h[f]*d[f];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jm(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(T){return!(T!==pn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let E=T===ir&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==Fn&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Mn&&!E)}function c(T){if(T==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=m>0,S=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:f,maxCubemapSize:x,maxAttributes:g,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:C,maxSamples:S}}function Km(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Un,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||i;return i=d,n=u.length,p},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,p){let m=u.clippingPlanes,f=u.clipIntersection,x=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!x)s?h(null):l();else{let y=s?0:n,_=y*4,v=g.clippingState||null;c.value=v,v=h(m,d,_,p);for(let C=0;C!==_;++C)v[C]=e[C];g.clippingState=v,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,p,m){let f=u!==null?u.length:0,x=null;if(f!==0){if(x=c.value,m!==!0||x===null){let g=p+f*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<g)&&(x=new Float32Array(g));for(let _=0,v=p;_!==f;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(x,v),x[v+3]=o.constant}c.value=x,c.needsUpdate=!0}return t.numPlanes=f,t.numIntersection=0,x}}function jm(r){let t=new WeakMap;function e(o,a){return a===Da?o.mapping=os:a===Ua&&(o.mapping=as),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Da||a===Ua)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new pc(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var jr=class extends Jr{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Qi=4,sh=[.125,.215,.35,.446,.526,.582],bi=20,da=new jr,rh=new Ct,fa=null,pa=0,ma=0,ga=!1,Mi=(1+Math.sqrt(5))/2,Yi=1/Mi,oh=[new I(-Mi,Yi,0),new I(Mi,Yi,0),new I(-Yi,0,Mi),new I(Yi,0,Mi),new I(0,Mi,-Yi),new I(0,Mi,Yi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],ps=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ch(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(fa,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,Tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===os||t.mapping===as?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),fa=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:ir,format:pn,colorSpace:vs,depthBuffer:!1},i=ah(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ah(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qm(s)),this._blurMaterial=t0(s,t,e)}return i}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,i){let a=new Re(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rh),h.toneMapping=ti,h.autoClear=!1;let p=new xe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),m=new it(new Ot,p),f=!1,x=t.background;x?x.isColor&&(p.color.copy(x),t.background=null,f=!0):(p.color.copy(rh),f=!0);for(let g=0;g<6;g++){let y=g%3;y===0?(a.up.set(0,c[g],0),a.lookAt(l[g],0,0)):y===1?(a.up.set(0,0,c[g]),a.lookAt(0,l[g],0)):(a.up.set(0,c[g],0),a.lookAt(0,0,l[g]));let _=this._cubeSize;Tr(i,y*_,g>2?_:0,_,_),h.setRenderTarget(i),f&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===os||t.mapping===as;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ch());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Tr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=oh[(i-s-1)%oh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[i],l),d=l.uniforms,p=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*bi-1),f=s/m,x=isFinite(s)?1+Math.floor(h*f):bi;x>bi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${bi}`);let g=[],y=0;for(let T=0;T<bi;++T){let E=T/f,M=Math.exp(-E*E/2);g.push(M),T===0?y+=M:T<x&&(y+=2*M)}for(let T=0;T<g.length;T++)g[T]=g[T]/y;d.envMap.value=t.texture,d.samples.value=x,d.weights.value=g,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;let v=this._sizeLods[i],C=3*v*(i>_-Qi?i-_+Qi:0),S=4*(this._cubeSize-v);Tr(e,C,S,3*v,2*v),c.setRenderTarget(e),c.render(u,da)}};function Qm(r){let t=[],e=[],n=[],i=r,s=r-Qi+1+sh.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>r-Qi?c=sh[o-r+Qi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,m=6,f=3,x=2,g=1,y=new Float32Array(f*m*p),_=new Float32Array(x*m*p),v=new Float32Array(g*m*p);for(let S=0;S<p;S++){let T=S%3*2/3-1,E=S>2?0:-1,M=[T,E,0,T+2/3,E,0,T+2/3,E+1,0,T,E,0,T+2/3,E+1,0,T,E+1,0];y.set(M,f*m*S),_.set(d,x*m*S);let b=[S,S,S,S,S,S];v.set(b,g*m*S)}let C=new re;C.setAttribute("position",new se(y,f)),C.setAttribute("uv",new se(_,x)),C.setAttribute("faceIndex",new se(v,g)),t.push(C),i>Qi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ah(r,t,e){let n=new Bn(r,t,e);return n.texture.mapping=Mo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function t0(r,t,e){let n=new Float32Array(bi),i=new I(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ch(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ol(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function lh(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ol(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function ol(){return`

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
	`}function e0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Da||c===Ua,h=c===os||c===as;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new ps(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new ps(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function n0(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function i0(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);for(let m in d.morphAttributes){let f=d.morphAttributes[m];for(let x=0,g=f.length;x<g;x++)t.remove(f[x])}d.removeEventListener("dispose",o),delete i[d.id];let p=s.get(d);p&&(t.remove(p),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let m in d)t.update(d[m],r.ARRAY_BUFFER);let p=u.morphAttributes;for(let m in p){let f=p[m];for(let x=0,g=f.length;x<g;x++)t.update(f[x],r.ARRAY_BUFFER)}}function l(u){let d=[],p=u.index,m=u.attributes.position,f=0;if(p!==null){let y=p.array;f=p.version;for(let _=0,v=y.length;_<v;_+=3){let C=y[_+0],S=y[_+1],T=y[_+2];d.push(C,S,S,T,T,C)}}else if(m!==void 0){let y=m.array;f=m.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let C=_+0,S=_+1,T=_+2;d.push(C,S,S,T,T,C)}}else return;let x=new(nu(d)?ds:us)(d,1);x.version=f;let g=s.get(u);g&&t.remove(g),s.set(u,x)}function h(u){let d=s.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function s0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,p){r.drawElements(n,p,s,d*o),e.update(p,n,1)}function l(d,p,m){m!==0&&(r.drawElementsInstanced(n,p,s,d*o,m),e.update(p,n,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,d,0,m);let x=0;for(let g=0;g<m;g++)x+=p[g];e.update(x,n,1)}function u(d,p,m,f){if(m===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let g=0;g<d.length;g++)l(d[g]/o,p[g],f[g]);else{x.multiDrawElementsInstancedWEBGL(n,p,0,s,d,0,f,0,m);let g=0;for(let y=0;y<m;y++)g+=p[y]*f[y];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function r0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function o0(r,t,e){let n=new WeakMap,i=new de;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let M=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,f=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;p===!0&&(_=1),m===!0&&(_=2),f===!0&&(_=3);let v=a.attributes.position.count*_,C=1;v>t.maxTextureSize&&(C=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let S=new Float32Array(v*C*4*u),T=new Yr(S,v,C,u);T.type=Mn,T.needsUpdate=!0;let E=_*4;for(let b=0;b<u;b++){let P=x[b],D=g[b],U=y[b],N=v*C*4*b;for(let F=0;F<P.count;F++){let B=F*E;p===!0&&(i.fromBufferAttribute(P,F),S[N+B+0]=i.x,S[N+B+1]=i.y,S[N+B+2]=i.z,S[N+B+3]=0),m===!0&&(i.fromBufferAttribute(D,F),S[N+B+4]=i.x,S[N+B+5]=i.y,S[N+B+6]=i.z,S[N+B+7]=0),f===!0&&(i.fromBufferAttribute(U,F),S[N+B+8]=i.x,S[N+B+9]=i.y,S[N+B+10]=i.z,S[N+B+11]=U.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new tt(v,C)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let p=0;for(let f=0;f<l.length;f++)p+=l[f];let m=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(r,"morphTargetBaseInfluence",m),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function a0(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var Qr=class extends Ye{constructor(t,e,n,i,s,o,a,c,l,h=ns){if(h!==ns&&h!==ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ns&&(n=Ti),n===void 0&&h===ls&&(n=cs),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ou=new Ye,hh=new Qr(1,1),au=new Yr,cu=new dc,lu=new Kr,uh=[],dh=[],fh=new Float32Array(16),ph=new Float32Array(9),mh=new Float32Array(4);function _s(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=uh[i];if(s===void 0&&(s=new Float32Array(i),uh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function wo(r,t){let e=dh[t];e===void 0&&(e=new Int32Array(t),dh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function c0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function l0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),Le(e,t)}}function h0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),Le(e,t)}}function u0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),Le(e,t)}}function d0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;mh.set(n),r.uniformMatrix2fv(this.addr,!1,mh),Le(e,n)}}function f0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;ph.set(n),r.uniformMatrix3fv(this.addr,!1,ph),Le(e,n)}}function p0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;fh.set(n),r.uniformMatrix4fv(this.addr,!1,fh),Le(e,n)}}function m0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function g0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),Le(e,t)}}function x0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),Le(e,t)}}function v0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),Le(e,t)}}function _0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function y0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),Le(e,t)}}function M0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),Le(e,t)}}function E0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),Le(e,t)}}function b0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(hh.compareFunction=eu,s=hh):s=ou,e.setTexture2D(t||s,i)}function w0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||cu,i)}function S0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||lu,i)}function T0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||au,i)}function A0(r){switch(r){case 5126:return c0;case 35664:return l0;case 35665:return h0;case 35666:return u0;case 35674:return d0;case 35675:return f0;case 35676:return p0;case 5124:case 35670:return m0;case 35667:case 35671:return g0;case 35668:case 35672:return x0;case 35669:case 35673:return v0;case 5125:return _0;case 36294:return y0;case 36295:return M0;case 36296:return E0;case 35678:case 36198:case 36298:case 36306:case 35682:return b0;case 35679:case 36299:case 36307:return w0;case 35680:case 36300:case 36308:case 36293:return S0;case 36289:case 36303:case 36311:case 36292:return T0}}function R0(r,t){r.uniform1fv(this.addr,t)}function C0(r,t){let e=_s(t,this.size,2);r.uniform2fv(this.addr,e)}function P0(r,t){let e=_s(t,this.size,3);r.uniform3fv(this.addr,e)}function I0(r,t){let e=_s(t,this.size,4);r.uniform4fv(this.addr,e)}function L0(r,t){let e=_s(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function D0(r,t){let e=_s(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function U0(r,t){let e=_s(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function z0(r,t){r.uniform1iv(this.addr,t)}function N0(r,t){r.uniform2iv(this.addr,t)}function F0(r,t){r.uniform3iv(this.addr,t)}function B0(r,t){r.uniform4iv(this.addr,t)}function O0(r,t){r.uniform1uiv(this.addr,t)}function k0(r,t){r.uniform2uiv(this.addr,t)}function H0(r,t){r.uniform3uiv(this.addr,t)}function V0(r,t){r.uniform4uiv(this.addr,t)}function G0(r,t,e){let n=this.cache,i=t.length,s=wo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ou,s[o])}function W0(r,t,e){let n=this.cache,i=t.length,s=wo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||cu,s[o])}function X0(r,t,e){let n=this.cache,i=t.length,s=wo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||lu,s[o])}function q0(r,t,e){let n=this.cache,i=t.length,s=wo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||au,s[o])}function Y0(r){switch(r){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return I0;case 35674:return L0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return z0;case 35667:case 35671:return N0;case 35668:case 35672:return F0;case 35669:case 35673:return B0;case 5125:return O0;case 36294:return k0;case 36295:return H0;case 36296:return V0;case 35678:case 36198:case 36298:case 36306:case 35682:return G0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}var mc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=A0(e.type)}},gc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y0(e.type)}},xc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},xa=/(\w+)(\])?(\[|\.)?/g;function gh(r,t){r.seq.push(t),r.map[t.id]=t}function $0(r,t,e){let n=r.name,i=n.length;for(xa.lastIndex=0;;){let s=xa.exec(n),o=xa.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){gh(e,l===void 0?new mc(a,r,t):new gc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new xc(a),gh(e,u)),e=u}}}var ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);$0(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function xh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Z0=37297,J0=0;function K0(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var vh=new Jt;function j0(r){ne._getMatrix(vh,ne.workingColorSpace,r);let t=`mat3( ${vh.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(r)){case Eo:return[t,"LinearTransferOETF"];case ue:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function _h(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+K0(r.getShaderSource(t),o)}else return i}function Q0(r,t){let e=j0(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function tg(r,t){let e;switch(t){case ud:e="Linear";break;case dd:e="Reinhard";break;case fd:e="Cineon";break;case Jc:e="ACESFilmic";break;case md:e="AgX";break;case gd:e="Neutral";break;case pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Ar=new I;function eg(){ne.getLuminanceCoefficients(Ar);let r=Ar.x.toFixed(4),t=Ar.y.toFixed(4),e=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ng(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function ig(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function sg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Bs(r){return r!==""}function yh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var rg=/^[ \t]*#include +<([\w\d./]+)>/gm;function vc(r){return r.replace(rg,ag)}var og=new Map;function ag(r,t){let e=Kt[t];if(e===void 0){let n=og.get(t);if(n!==void 0)e=Kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return vc(e)}var cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Eh(r){return r.replace(cg,lg)}function lg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function bh(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function hg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vh?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Zc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function ug(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case os:case as:t="ENVMAP_TYPE_CUBE";break;case Mo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function dg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case as:t="ENVMAP_MODE_REFRACTION";break}return t}function fg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Gh:t="ENVMAP_BLENDING_MULTIPLY";break;case ld:t="ENVMAP_BLENDING_MIX";break;case hd:t="ENVMAP_BLENDING_ADD";break}return t}function pg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function mg(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=hg(e),l=ug(e),h=dg(e),u=fg(e),d=pg(e),p=ng(e),m=ig(s),f=i.createProgram(),x,g,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Bs).join(`
`),g.length>0&&(g+=`
`)):(x=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),g=[bh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Kt.tonemapping_pars_fragment:"",e.toneMapping!==ti?tg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Kt.colorspace_pars_fragment,Q0("linearToOutputTexel",e.outputColorSpace),eg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=vc(o),o=yh(o,e),o=Mh(o,e),a=vc(a),a=yh(a,e),a=Mh(a,e),o=Eh(o),a=Eh(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===Nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=y+x+o,v=y+g+a,C=xh(i,i.VERTEX_SHADER,_),S=xh(i,i.FRAGMENT_SHADER,v);i.attachShader(f,C),i.attachShader(f,S),e.index0AttributeName!==void 0?i.bindAttribLocation(f,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(f,0,"position"),i.linkProgram(f);function T(P){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(f).trim(),U=i.getShaderInfoLog(C).trim(),N=i.getShaderInfoLog(S).trim(),F=!0,B=!0;if(i.getProgramParameter(f,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,f,C,S);else{let Z=_h(i,C,"vertex"),W=_h(i,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(f,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+D+`
`+Z+`
`+W)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||N==="")&&(B=!1);B&&(P.diagnostics={runnable:F,programLog:D,vertexShader:{log:U,prefix:x},fragmentShader:{log:N,prefix:g}})}i.deleteShader(C),i.deleteShader(S),E=new ss(i,f),M=sg(i,f)}let E;this.getUniforms=function(){return E===void 0&&T(this),E};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(f,Z0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(f),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=J0++,this.cacheKey=t,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=S,this}var gg=0,_c=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new yc(t),e.set(t,n)),n}},yc=class{constructor(t){this.id=gg++,this.code=t,this.usedTimes=0}};function xg(r,t,e,n,i,s,o){let a=new Zr,c=new _c,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(M){return l.add(M),M===0?"uv":`uv${M}`}function x(M,b,P,D,U){let N=D.fog,F=U.geometry,B=M.isMeshStandardMaterial?D.environment:null,Z=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),W=Z&&Z.mapping===Mo?Z.image.height:null,X=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,at=K!==void 0?K.length:0,xt=0;F.morphAttributes.position!==void 0&&(xt=1),F.morphAttributes.normal!==void 0&&(xt=2),F.morphAttributes.color!==void 0&&(xt=3);let ot,V,J,ct;if(X){let le=_n[X];ot=le.vertexShader,V=le.fragmentShader}else ot=M.vertexShader,V=M.fragmentShader,c.update(M),J=c.getVertexShaderID(M),ct=c.getFragmentShaderID(M);let rt=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),Lt=U.isInstancedMesh===!0,It=U.isBatchedMesh===!0,Wt=!!M.map,nt=!!M.matcap,ht=!!Z,L=!!M.aoMap,Dt=!!M.lightMap,lt=!!M.bumpMap,Et=!!M.normalMap,pt=!!M.displacementMap,Ht=!!M.emissiveMap,z=!!M.metalnessMap,A=!!M.roughnessMap,w=M.anisotropy>0,k=M.clearcoat>0,$=M.dispersion>0,et=M.iridescence>0,Q=M.sheen>0,Tt=M.transmission>0,gt=w&&!!M.anisotropyMap,Mt=k&&!!M.clearcoatMap,jt=k&&!!M.clearcoatNormalMap,ut=k&&!!M.clearcoatRoughnessMap,Rt=et&&!!M.iridescenceMap,vt=et&&!!M.iridescenceThicknessMap,Pt=Q&&!!M.sheenColorMap,ft=Q&&!!M.sheenRoughnessMap,Vt=!!M.specularMap,Xt=!!M.specularColorMap,ce=!!M.specularIntensityMap,O=Tt&&!!M.transmissionMap,yt=Tt&&!!M.thicknessMap,j=!!M.gradientMap,st=!!M.alphaMap,At=M.alphaTest>0,bt=!!M.alphaHash,$t=!!M.extensions,ye=ti;M.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(ye=r.toneMapping);let Ne={shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:ot,fragmentShader:V,defines:M.defines,customVertexShaderID:J,customFragmentShaderID:ct,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:It,batchingColor:It&&U._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&U.instanceColor!==null,instancingMorph:Lt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:rt===null?r.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:vs,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:nt,envMap:ht,envMapMode:ht&&Z.mapping,envMapCubeUVHeight:W,aoMap:L,lightMap:Dt,bumpMap:lt,normalMap:Et,displacementMap:d&&pt,emissiveMap:Ht,normalMapObjectSpace:Et&&M.normalMapType===yd,normalMapTangentSpace:Et&&M.normalMapType===tu,metalnessMap:z,roughnessMap:A,anisotropy:w,anisotropyMap:gt,clearcoat:k,clearcoatMap:Mt,clearcoatNormalMap:jt,clearcoatRoughnessMap:ut,dispersion:$,iridescence:et,iridescenceMap:Rt,iridescenceThicknessMap:vt,sheen:Q,sheenColorMap:Pt,sheenRoughnessMap:ft,specularMap:Vt,specularColorMap:Xt,specularIntensityMap:ce,transmission:Tt,transmissionMap:O,thicknessMap:yt,gradientMap:j,opaque:M.transparent===!1&&M.blending===es&&M.alphaToCoverage===!1,alphaMap:st,alphaTest:At,alphaHash:bt,combine:M.combine,mapUv:Wt&&f(M.map.channel),aoMapUv:L&&f(M.aoMap.channel),lightMapUv:Dt&&f(M.lightMap.channel),bumpMapUv:lt&&f(M.bumpMap.channel),normalMapUv:Et&&f(M.normalMap.channel),displacementMapUv:pt&&f(M.displacementMap.channel),emissiveMapUv:Ht&&f(M.emissiveMap.channel),metalnessMapUv:z&&f(M.metalnessMap.channel),roughnessMapUv:A&&f(M.roughnessMap.channel),anisotropyMapUv:gt&&f(M.anisotropyMap.channel),clearcoatMapUv:Mt&&f(M.clearcoatMap.channel),clearcoatNormalMapUv:jt&&f(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ut&&f(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Rt&&f(M.iridescenceMap.channel),iridescenceThicknessMapUv:vt&&f(M.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&f(M.sheenColorMap.channel),sheenRoughnessMapUv:ft&&f(M.sheenRoughnessMap.channel),specularMapUv:Vt&&f(M.specularMap.channel),specularColorMapUv:Xt&&f(M.specularColorMap.channel),specularIntensityMapUv:ce&&f(M.specularIntensityMap.channel),transmissionMapUv:O&&f(M.transmissionMap.channel),thicknessMapUv:yt&&f(M.thicknessMap.channel),alphaMapUv:st&&f(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Et||w),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(Wt||st),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:at,morphTextureStride:xt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:ye,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===ue,decodeVideoTextureEmissive:Ht&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===ue,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ce,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ne.vertexUv1s=l.has(1),Ne.vertexUv2s=l.has(2),Ne.vertexUv3s=l.has(3),l.clear(),Ne}function g(M){let b=[];if(M.shaderID?b.push(M.shaderID):(b.push(M.customVertexShaderID),b.push(M.customFragmentShaderID)),M.defines!==void 0)for(let P in M.defines)b.push(P),b.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(y(b,M),_(b,M),b.push(r.outputColorSpace)),b.push(M.customProgramCacheKey),b.join()}function y(M,b){M.push(b.precision),M.push(b.outputColorSpace),M.push(b.envMapMode),M.push(b.envMapCubeUVHeight),M.push(b.mapUv),M.push(b.alphaMapUv),M.push(b.lightMapUv),M.push(b.aoMapUv),M.push(b.bumpMapUv),M.push(b.normalMapUv),M.push(b.displacementMapUv),M.push(b.emissiveMapUv),M.push(b.metalnessMapUv),M.push(b.roughnessMapUv),M.push(b.anisotropyMapUv),M.push(b.clearcoatMapUv),M.push(b.clearcoatNormalMapUv),M.push(b.clearcoatRoughnessMapUv),M.push(b.iridescenceMapUv),M.push(b.iridescenceThicknessMapUv),M.push(b.sheenColorMapUv),M.push(b.sheenRoughnessMapUv),M.push(b.specularMapUv),M.push(b.specularColorMapUv),M.push(b.specularIntensityMapUv),M.push(b.transmissionMapUv),M.push(b.thicknessMapUv),M.push(b.combine),M.push(b.fogExp2),M.push(b.sizeAttenuation),M.push(b.morphTargetsCount),M.push(b.morphAttributeCount),M.push(b.numDirLights),M.push(b.numPointLights),M.push(b.numSpotLights),M.push(b.numSpotLightMaps),M.push(b.numHemiLights),M.push(b.numRectAreaLights),M.push(b.numDirLightShadows),M.push(b.numPointLightShadows),M.push(b.numSpotLightShadows),M.push(b.numSpotLightShadowsWithMaps),M.push(b.numLightProbes),M.push(b.shadowMapType),M.push(b.toneMapping),M.push(b.numClippingPlanes),M.push(b.numClipIntersection),M.push(b.depthPacking)}function _(M,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let b=m[M.type],P;if(b){let D=_n[b];P=rl.clone(D.uniforms)}else P=M.uniforms;return P}function C(M,b){let P;for(let D=0,U=h.length;D<U;D++){let N=h[D];if(N.cacheKey===b){P=N,++P.usedTimes;break}}return P===void 0&&(P=new mg(r,b,M,s),h.push(P)),P}function S(M){if(--M.usedTimes===0){let b=h.indexOf(M);h[b]=h[h.length-1],h.pop(),M.destroy()}}function T(M){c.remove(M)}function E(){c.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:v,acquireProgram:C,releaseProgram:S,releaseShaderCache:T,programs:h,dispose:E}}function vg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function _g(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function wh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Sh(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,p,m,f,x){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:d,material:p,groupOrder:m,renderOrder:u.renderOrder,z:f,group:x},r[t]=g):(g.id=u.id,g.object=u,g.geometry=d,g.material=p,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=f,g.group=x),t++,g}function a(u,d,p,m,f,x){let g=o(u,d,p,m,f,x);p.transmission>0?n.push(g):p.transparent===!0?i.push(g):e.push(g)}function c(u,d,p,m,f,x){let g=o(u,d,p,m,f,x);p.transmission>0?n.unshift(g):p.transparent===!0?i.unshift(g):e.unshift(g)}function l(u,d){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(d||wh),i.length>1&&i.sort(d||wh)}function h(){for(let u=t,d=r.length;u<d;u++){let p=r[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function yg(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Sh,r.set(n,[o])):i>=s.length?(o=new Sh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Mg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Ct};break;case"SpotLight":e={position:new I,direction:new I,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":e={color:new Ct,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Eg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var bg=0;function wg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Sg(r){let t=new Mg,e=Eg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let i=new I,s=new Qt,o=new Qt;function a(l){let h=0,u=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,m=0,f=0,x=0,g=0,y=0,_=0,v=0,C=0,S=0,T=0;l.sort(wg);for(let M=0,b=l.length;M<b;M++){let P=l[M],D=P.color,U=P.intensity,N=P.distance,F=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],U);T++}else if(P.isDirectionalLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.directionalShadow[p]=W,n.directionalShadowMap[p]=F,n.directionalShadowMatrix[p]=P.shadow.matrix,y++}n.directional[p]=B,p++}else if(P.isSpotLight){let B=t.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(D).multiplyScalar(U),B.distance=N,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[f]=B;let Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[f]=Z.matrix,P.castShadow){let W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,n.spotShadow[f]=W,n.spotShadowMap[f]=F,v++}f++}else if(P.isRectAreaLight){let B=t.get(P);B.color.copy(D).multiplyScalar(U),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[x]=B,x++}else if(P.isPointLight){let B=t.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){let Z=P.shadow,W=e.get(P);W.shadowIntensity=Z.intensity,W.shadowBias=Z.bias,W.shadowNormalBias=Z.normalBias,W.shadowRadius=Z.radius,W.shadowMapSize=Z.mapSize,W.shadowCameraNear=Z.camera.near,W.shadowCameraFar=Z.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=F,n.pointShadowMatrix[m]=P.shadow.matrix,_++}n.point[m]=B,m++}else if(P.isHemisphereLight){let B=t.get(P);B.skyColor.copy(P.color).multiplyScalar(U),B.groundColor.copy(P.groundColor).multiplyScalar(U),n.hemi[g]=B,g++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let E=n.hash;(E.directionalLength!==p||E.pointLength!==m||E.spotLength!==f||E.rectAreaLength!==x||E.hemiLength!==g||E.numDirectionalShadows!==y||E.numPointShadows!==_||E.numSpotShadows!==v||E.numSpotMaps!==C||E.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=f,n.rectArea.length=x,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+C-S,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=T,E.directionalLength=p,E.pointLength=m,E.spotLength=f,E.rectAreaLength=x,E.hemiLength=g,E.numDirectionalShadows=y,E.numPointShadows=_,E.numSpotShadows=v,E.numSpotMaps=C,E.numLightProbes=T,n.version=bg++)}function c(l,h){let u=0,d=0,p=0,m=0,f=0,x=h.matrixWorldInverse;for(let g=0,y=l.length;g<y;g++){let _=l[g];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),u++}else if(_.isSpotLight){let v=n.spot[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),p++}else if(_.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),d++}else if(_.isHemisphereLight){let v=n.hemi[f];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),f++}}}return{setup:a,setupView:c,state:n}}function Th(r){let t=new Sg(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function Tg(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Th(r),t.set(i,[a])):s>=o.length?(a=new Th(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Mc=class extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ec=class extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
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
}`;function Cg(r,t,e){let n=new qs,i=new tt,s=new tt,o=new de,a=new Mc({depthPacking:_d}),c=new Ec,l={},h=e.maxTextureSize,u={[ni]:Oe,[Oe]:ni,[Ce]:Ce},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let m=new re;m.setAttribute("position",new se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let f=new it(m,d),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vh;let g=this.type;this.render=function(S,T,E){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||S.length===0)return;let M=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(Qn),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=g!==Dn&&this.type===Dn,N=g===Dn&&this.type!==Dn;for(let F=0,B=S.length;F<B;F++){let Z=S[F],W=Z.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;i.copy(W.mapSize);let X=W.getFrameExtents();if(i.multiply(X),s.copy(W.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/X.x),i.x=s.x*X.x,W.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/X.y),i.y=s.y*X.y,W.mapSize.y=s.y)),W.map===null||U===!0||N===!0){let at=this.type!==Dn?{minFilter:Qe,magFilter:Qe}:{};W.map!==null&&W.map.dispose(),W.map=new Bn(i.x,i.y,at),W.map.texture.name=Z.name+".shadowMap",W.camera.updateProjectionMatrix()}r.setRenderTarget(W.map),r.clear();let K=W.getViewportCount();for(let at=0;at<K;at++){let xt=W.getViewport(at);o.set(s.x*xt.x,s.y*xt.y,s.x*xt.z,s.y*xt.w),D.viewport(o),W.updateMatrices(Z,at),n=W.getFrustum(),v(T,E,W.camera,Z,this.type)}W.isPointLightShadow!==!0&&this.type===Dn&&y(W,E),W.needsUpdate=!1}g=this.type,x.needsUpdate=!1,r.setRenderTarget(M,b,P)};function y(S,T){let E=t.update(f);d.defines.VSM_SAMPLES!==S.blurSamples&&(d.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Bn(i.x,i.y)),d.uniforms.shadow_pass.value=S.map.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(T,null,E,d,f,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(T,null,E,p,f,null)}function _(S,T,E,M){let b=null,P=E.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)b=P;else if(b=E.isPointLight===!0?c:a,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let D=b.uuid,U=T.uuid,N=l[D];N===void 0&&(N={},l[D]=N);let F=N[U];F===void 0&&(F=b.clone(),N[U]=F,T.addEventListener("dispose",C)),b=F}if(b.visible=T.visible,b.wireframe=T.wireframe,M===Dn?b.side=T.shadowSide!==null?T.shadowSide:T.side:b.side=T.shadowSide!==null?T.shadowSide:u[T.side],b.alphaMap=T.alphaMap,b.alphaTest=T.alphaTest,b.map=T.map,b.clipShadows=T.clipShadows,b.clippingPlanes=T.clippingPlanes,b.clipIntersection=T.clipIntersection,b.displacementMap=T.displacementMap,b.displacementScale=T.displacementScale,b.displacementBias=T.displacementBias,b.wireframeLinewidth=T.wireframeLinewidth,b.linewidth=T.linewidth,E.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=r.properties.get(b);D.light=E}return b}function v(S,T,E,M,b){if(S.visible===!1)return;if(S.layers.test(T.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&b===Dn)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,S.matrixWorld);let U=t.update(S),N=S.material;if(Array.isArray(N)){let F=U.groups;for(let B=0,Z=F.length;B<Z;B++){let W=F[B],X=N[W.materialIndex];if(X&&X.visible){let K=_(S,X,M,b);S.onBeforeShadow(r,S,T,E,U,K,W),r.renderBufferDirect(E,null,U,K,S,W),S.onAfterShadow(r,S,T,E,U,K,W)}}}else if(N.visible){let F=_(S,N,M,b);S.onBeforeShadow(r,S,T,E,U,F,null),r.renderBufferDirect(E,null,U,F,S,null),S.onAfterShadow(r,S,T,E,U,F,null)}}let D=S.children;for(let U=0,N=D.length;U<N;U++)v(D[U],T,E,M,b)}function C(S){S.target.removeEventListener("dispose",C);for(let E in l){let M=l[E],b=S.target.uuid;b in M&&(M[b].dispose(),delete M[b])}}}var Pg={[Ta]:Aa,[Ra]:Ia,[Ca]:La,[rs]:Pa,[Aa]:Ta,[Ia]:Ra,[La]:Ca,[Pa]:rs};function Ig(r,t){function e(){let O=!1,yt=new de,j=null,st=new de(0,0,0,0);return{setMask:function(At){j!==At&&!O&&(r.colorMask(At,At,At,At),j=At)},setLocked:function(At){O=At},setClear:function(At,bt,$t,ye,Ne){Ne===!0&&(At*=ye,bt*=ye,$t*=ye),yt.set(At,bt,$t,ye),st.equals(yt)===!1&&(r.clearColor(At,bt,$t,ye),st.copy(yt))},reset:function(){O=!1,j=null,st.set(-1,0,0,0)}}}function n(){let O=!1,yt=!1,j=null,st=null,At=null;return{setReversed:function(bt){if(yt!==bt){let $t=t.get("EXT_clip_control");yt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let ye=At;At=null,this.setClear(ye)}yt=bt},getReversed:function(){return yt},setTest:function(bt){bt?rt(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(bt){j!==bt&&!O&&(r.depthMask(bt),j=bt)},setFunc:function(bt){if(yt&&(bt=Pg[bt]),st!==bt){switch(bt){case Ta:r.depthFunc(r.NEVER);break;case Aa:r.depthFunc(r.ALWAYS);break;case Ra:r.depthFunc(r.LESS);break;case rs:r.depthFunc(r.LEQUAL);break;case Ca:r.depthFunc(r.EQUAL);break;case Pa:r.depthFunc(r.GEQUAL);break;case Ia:r.depthFunc(r.GREATER);break;case La:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}st=bt}},setLocked:function(bt){O=bt},setClear:function(bt){At!==bt&&(yt&&(bt=1-bt),r.clearDepth(bt),At=bt)},reset:function(){O=!1,j=null,st=null,At=null,yt=!1}}}function i(){let O=!1,yt=null,j=null,st=null,At=null,bt=null,$t=null,ye=null,Ne=null;return{setTest:function(le){O||(le?rt(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(le){yt!==le&&!O&&(r.stencilMask(le),yt=le)},setFunc:function(le,cn,Tn){(j!==le||st!==cn||At!==Tn)&&(r.stencilFunc(le,cn,Tn),j=le,st=cn,At=Tn)},setOp:function(le,cn,Tn){(bt!==le||$t!==cn||ye!==Tn)&&(r.stencilOp(le,cn,Tn),bt=le,$t=cn,ye=Tn)},setLocked:function(le){O=le},setClear:function(le){Ne!==le&&(r.clearStencil(le),Ne=le)},reset:function(){O=!1,yt=null,j=null,st=null,At=null,bt=null,$t=null,ye=null,Ne=null}}}let s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,p=[],m=null,f=!1,x=null,g=null,y=null,_=null,v=null,C=null,S=null,T=new Ct(0,0,0),E=0,M=!1,b=null,P=null,D=null,U=null,N=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,Z=0,W=r.getParameter(r.VERSION);W.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(W)[1]),B=Z>=1):W.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),B=Z>=2);let X=null,K={},at=r.getParameter(r.SCISSOR_BOX),xt=r.getParameter(r.VIEWPORT),ot=new de().fromArray(at),V=new de().fromArray(xt);function J(O,yt,j,st){let At=new Uint8Array(4),bt=r.createTexture();r.bindTexture(O,bt),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<j;$t++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(yt,0,r.RGBA,1,1,st,0,r.RGBA,r.UNSIGNED_BYTE,At):r.texImage2D(yt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,At);return bt}let ct={};ct[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),ct[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ct[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(r.DEPTH_TEST),o.setFunc(rs),lt(!1),Et(Cl),rt(r.CULL_FACE),L(Qn);function rt(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Lt(O,yt){return u[O]!==yt?(r.bindFramebuffer(O,yt),u[O]=yt,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=yt),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=yt),!0):!1}function It(O,yt){let j=p,st=!1;if(O){j=d.get(yt),j===void 0&&(j=[],d.set(yt,j));let At=O.textures;if(j.length!==At.length||j[0]!==r.COLOR_ATTACHMENT0){for(let bt=0,$t=At.length;bt<$t;bt++)j[bt]=r.COLOR_ATTACHMENT0+bt;j.length=At.length,st=!0}}else j[0]!==r.BACK&&(j[0]=r.BACK,st=!0);st&&r.drawBuffers(j)}function Wt(O){return m!==O?(r.useProgram(O),m=O,!0):!1}let nt={[Ei]:r.FUNC_ADD,[qu]:r.FUNC_SUBTRACT,[Yu]:r.FUNC_REVERSE_SUBTRACT};nt[$u]=r.MIN,nt[Zu]=r.MAX;let ht={[Ju]:r.ZERO,[Ku]:r.ONE,[ju]:r.SRC_COLOR,[wa]:r.SRC_ALPHA,[sd]:r.SRC_ALPHA_SATURATE,[nd]:r.DST_COLOR,[td]:r.DST_ALPHA,[Qu]:r.ONE_MINUS_SRC_COLOR,[Sa]:r.ONE_MINUS_SRC_ALPHA,[id]:r.ONE_MINUS_DST_COLOR,[ed]:r.ONE_MINUS_DST_ALPHA,[rd]:r.CONSTANT_COLOR,[od]:r.ONE_MINUS_CONSTANT_COLOR,[ad]:r.CONSTANT_ALPHA,[cd]:r.ONE_MINUS_CONSTANT_ALPHA};function L(O,yt,j,st,At,bt,$t,ye,Ne,le){if(O===Qn){f===!0&&(mt(r.BLEND),f=!1);return}if(f===!1&&(rt(r.BLEND),f=!0),O!==Xu){if(O!==x||le!==M){if((g!==Ei||v!==Ei)&&(r.blendEquation(r.FUNC_ADD),g=Ei,v=Ei),le)switch(O){case es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mn:r.blendFunc(r.ONE,r.ONE);break;case Pl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Il:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mn:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Pl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Il:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}y=null,_=null,C=null,S=null,T.set(0,0,0),E=0,x=O,M=le}return}At=At||yt,bt=bt||j,$t=$t||st,(yt!==g||At!==v)&&(r.blendEquationSeparate(nt[yt],nt[At]),g=yt,v=At),(j!==y||st!==_||bt!==C||$t!==S)&&(r.blendFuncSeparate(ht[j],ht[st],ht[bt],ht[$t]),y=j,_=st,C=bt,S=$t),(ye.equals(T)===!1||Ne!==E)&&(r.blendColor(ye.r,ye.g,ye.b,Ne),T.copy(ye),E=Ne),x=O,M=!1}function Dt(O,yt){O.side===Ce?mt(r.CULL_FACE):rt(r.CULL_FACE);let j=O.side===Oe;yt&&(j=!j),lt(j),O.blending===es&&O.transparent===!1?L(Qn):L(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let st=O.stencilWrite;a.setTest(st),st&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ht(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?rt(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function lt(O){b!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),b=O)}function Et(O){O!==Gu?(rt(r.CULL_FACE),O!==P&&(O===Cl?r.cullFace(r.BACK):O===Wu?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),P=O}function pt(O){O!==D&&(B&&r.lineWidth(O),D=O)}function Ht(O,yt,j){O?(rt(r.POLYGON_OFFSET_FILL),(U!==yt||N!==j)&&(r.polygonOffset(yt,j),U=yt,N=j)):mt(r.POLYGON_OFFSET_FILL)}function z(O){O?rt(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function A(O){O===void 0&&(O=r.TEXTURE0+F-1),X!==O&&(r.activeTexture(O),X=O)}function w(O,yt,j){j===void 0&&(X===null?j=r.TEXTURE0+F-1:j=X);let st=K[j];st===void 0&&(st={type:void 0,texture:void 0},K[j]=st),(st.type!==O||st.texture!==yt)&&(X!==j&&(r.activeTexture(j),X=j),r.bindTexture(O,yt||ct[O]),st.type=O,st.texture=yt)}function k(){let O=K[X];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function $(){try{r.compressedTexImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{r.compressedTexImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{r.texSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Tt(){try{r.texSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function jt(){try{r.texStorage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ut(){try{r.texStorage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Rt(){try{r.texImage2D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{r.texImage3D.apply(r,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(O){ot.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),ot.copy(O))}function ft(O){V.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),V.copy(O))}function Vt(O,yt){let j=l.get(yt);j===void 0&&(j=new WeakMap,l.set(yt,j));let st=j.get(O);st===void 0&&(st=r.getUniformBlockIndex(yt,O.name),j.set(O,st))}function Xt(O,yt){let st=l.get(yt).get(O);c.get(yt)!==st&&(r.uniformBlockBinding(yt,st,O.__bindingPointIndex),c.set(yt,st))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},X=null,K={},u={},d=new WeakMap,p=[],m=null,f=!1,x=null,g=null,y=null,_=null,v=null,C=null,S=null,T=new Ct(0,0,0),E=0,M=!1,b=null,P=null,D=null,U=null,N=null,ot.set(0,0,r.canvas.width,r.canvas.height),V.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:rt,disable:mt,bindFramebuffer:Lt,drawBuffers:It,useProgram:Wt,setBlending:L,setMaterial:Dt,setFlipSided:lt,setCullFace:Et,setLineWidth:pt,setPolygonOffset:Ht,setScissorTest:z,activeTexture:A,bindTexture:w,unbindTexture:k,compressedTexImage2D:$,compressedTexImage3D:et,texImage2D:Rt,texImage3D:vt,updateUBOMapping:Vt,uniformBlockBinding:Xt,texStorage2D:jt,texStorage3D:ut,texSubImage2D:Q,texSubImage3D:Tt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Mt,scissor:Pt,viewport:ft,reset:ce}}function Ah(r,t,e,n){let i=Lg(n);switch(e){case $h:return r*t;case Jh:return r*t;case Kh:return r*t*2;case tl:return r*t/i.components*i.byteLength;case el:return r*t/i.components*i.byteLength;case jh:return r*t*2/i.components*i.byteLength;case nl:return r*t*2/i.components*i.byteLength;case Zh:return r*t*3/i.components*i.byteLength;case pn:return r*t*4/i.components*i.byteLength;case il:return r*t*4/i.components*i.byteLength;case Br:case Or:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case kr:case Hr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Oa:return Math.max(r,16)*Math.max(t,8)/4;case Na:case Ba:return Math.max(r,8)*Math.max(t,8)/2;case ka:case Ha:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Va:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Ga:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Wa:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case qa:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case $a:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Za:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ka:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ja:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Qa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case tc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case ec:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case nc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Vr:case ic:case sc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Qh:case rc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case oc:case ac:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Lg(r){switch(r){case Fn:case Xh:return{byteLength:1,components:1};case Xs:case qh:case ir:return{byteLength:2,components:1};case jc:case Qc:return{byteLength:2,components:4};case Ti:case Kc:case Mn:return{byteLength:4,components:1};case Yh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function Dg(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new tt,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,w){return p?new OffscreenCanvas(A,w):Xr("canvas")}function f(A,w,k){let $=1,et=z(A);if((et.width>k||et.height>k)&&($=k/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let Q=Math.floor($*et.width),Tt=Math.floor($*et.height);u===void 0&&(u=m(Q,Tt));let gt=w?m(Q,Tt):u;return gt.width=Q,gt.height=Tt,gt.getContext("2d").drawImage(A,0,0,Q,Tt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Q+"x"+Tt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function x(A){return A.generateMipmaps}function g(A){r.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(A,w,k,$,et=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Q=w;if(w===r.RED&&(k===r.FLOAT&&(Q=r.R32F),k===r.HALF_FLOAT&&(Q=r.R16F),k===r.UNSIGNED_BYTE&&(Q=r.R8)),w===r.RED_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.R8UI),k===r.UNSIGNED_SHORT&&(Q=r.R16UI),k===r.UNSIGNED_INT&&(Q=r.R32UI),k===r.BYTE&&(Q=r.R8I),k===r.SHORT&&(Q=r.R16I),k===r.INT&&(Q=r.R32I)),w===r.RG&&(k===r.FLOAT&&(Q=r.RG32F),k===r.HALF_FLOAT&&(Q=r.RG16F),k===r.UNSIGNED_BYTE&&(Q=r.RG8)),w===r.RG_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RG8UI),k===r.UNSIGNED_SHORT&&(Q=r.RG16UI),k===r.UNSIGNED_INT&&(Q=r.RG32UI),k===r.BYTE&&(Q=r.RG8I),k===r.SHORT&&(Q=r.RG16I),k===r.INT&&(Q=r.RG32I)),w===r.RGB_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),k===r.UNSIGNED_INT&&(Q=r.RGB32UI),k===r.BYTE&&(Q=r.RGB8I),k===r.SHORT&&(Q=r.RGB16I),k===r.INT&&(Q=r.RGB32I)),w===r.RGBA_INTEGER&&(k===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),k===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),k===r.UNSIGNED_INT&&(Q=r.RGBA32UI),k===r.BYTE&&(Q=r.RGBA8I),k===r.SHORT&&(Q=r.RGBA16I),k===r.INT&&(Q=r.RGBA32I)),w===r.RGB&&k===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),w===r.RGBA){let Tt=et?Eo:ne.getTransfer($);k===r.FLOAT&&(Q=r.RGBA32F),k===r.HALF_FLOAT&&(Q=r.RGBA16F),k===r.UNSIGNED_BYTE&&(Q=Tt===ue?r.SRGB8_ALPHA8:r.RGBA8),k===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),k===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(A,w){let k;return A?w===null||w===Ti||w===cs?k=r.DEPTH24_STENCIL8:w===Mn?k=r.DEPTH32F_STENCIL8:w===Xs&&(k=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Ti||w===cs?k=r.DEPTH_COMPONENT24:w===Mn?k=r.DEPTH_COMPONENT32F:w===Xs&&(k=r.DEPTH_COMPONENT16),k}function C(A,w){return x(A)===!0||A.isFramebufferTexture&&A.minFilter!==Qe&&A.minFilter!==yn?Math.log2(Math.max(w.width,w.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?w.mipmaps.length:1}function S(A){let w=A.target;w.removeEventListener("dispose",S),E(w),w.isVideoTexture&&h.delete(w)}function T(A){let w=A.target;w.removeEventListener("dispose",T),b(w)}function E(A){let w=n.get(A);if(w.__webglInit===void 0)return;let k=A.source,$=d.get(k);if($){let et=$[w.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(A),Object.keys($).length===0&&d.delete(k)}n.remove(A)}function M(A){let w=n.get(A);r.deleteTexture(w.__webglTexture);let k=A.source,$=d.get(k);delete $[w.__cacheKey],o.memory.textures--}function b(A){let w=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(w.__webglFramebuffer[$]))for(let et=0;et<w.__webglFramebuffer[$].length;et++)r.deleteFramebuffer(w.__webglFramebuffer[$][et]);else r.deleteFramebuffer(w.__webglFramebuffer[$]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[$])}else{if(Array.isArray(w.__webglFramebuffer))for(let $=0;$<w.__webglFramebuffer.length;$++)r.deleteFramebuffer(w.__webglFramebuffer[$]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let $=0;$<w.__webglColorRenderbuffer.length;$++)w.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[$]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let k=A.textures;for(let $=0,et=k.length;$<et;$++){let Q=n.get(k[$]);Q.__webglTexture&&(r.deleteTexture(Q.__webglTexture),o.memory.textures--),n.remove(k[$])}n.remove(A)}let P=0;function D(){P=0}function U(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function N(A){let w=[];return w.push(A.wrapS),w.push(A.wrapT),w.push(A.wrapR||0),w.push(A.magFilter),w.push(A.minFilter),w.push(A.anisotropy),w.push(A.internalFormat),w.push(A.format),w.push(A.type),w.push(A.generateMipmaps),w.push(A.premultiplyAlpha),w.push(A.flipY),w.push(A.unpackAlignment),w.push(A.colorSpace),w.join()}function F(A,w){let k=n.get(A);if(A.isVideoTexture&&pt(A),A.isRenderTargetTexture===!1&&A.version>0&&k.__version!==A.version){let $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{V(k,A,w);return}}e.bindTexture(r.TEXTURE_2D,k.__webglTexture,r.TEXTURE0+w)}function B(A,w){let k=n.get(A);if(A.version>0&&k.__version!==A.version){V(k,A,w);return}e.bindTexture(r.TEXTURE_2D_ARRAY,k.__webglTexture,r.TEXTURE0+w)}function Z(A,w){let k=n.get(A);if(A.version>0&&k.__version!==A.version){V(k,A,w);return}e.bindTexture(r.TEXTURE_3D,k.__webglTexture,r.TEXTURE0+w)}function W(A,w){let k=n.get(A);if(A.version>0&&k.__version!==A.version){J(k,A,w);return}e.bindTexture(r.TEXTURE_CUBE_MAP,k.__webglTexture,r.TEXTURE0+w)}let X={[Ws]:r.REPEAT,[wi]:r.CLAMP_TO_EDGE,[za]:r.MIRRORED_REPEAT},K={[Qe]:r.NEAREST,[xd]:r.NEAREST_MIPMAP_NEAREST,[ar]:r.NEAREST_MIPMAP_LINEAR,[yn]:r.LINEAR,[Wo]:r.LINEAR_MIPMAP_NEAREST,[Si]:r.LINEAR_MIPMAP_LINEAR},at={[Md]:r.NEVER,[Ad]:r.ALWAYS,[Ed]:r.LESS,[eu]:r.LEQUAL,[bd]:r.EQUAL,[Td]:r.GEQUAL,[wd]:r.GREATER,[Sd]:r.NOTEQUAL};function xt(A,w){if(w.type===Mn&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===yn||w.magFilter===Wo||w.magFilter===ar||w.magFilter===Si||w.minFilter===yn||w.minFilter===Wo||w.minFilter===ar||w.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,X[w.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,X[w.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,X[w.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,K[w.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,K[w.minFilter]),w.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,at[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===Qe||w.minFilter!==ar&&w.minFilter!==Si||w.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let k=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function ot(A,w){let k=!1;A.__webglInit===void 0&&(A.__webglInit=!0,w.addEventListener("dispose",S));let $=w.source,et=d.get($);et===void 0&&(et={},d.set($,et));let Q=N(w);if(Q!==A.__cacheKey){et[Q]===void 0&&(et[Q]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,k=!0),et[Q].usedTimes++;let Tt=et[A.__cacheKey];Tt!==void 0&&(et[A.__cacheKey].usedTimes--,Tt.usedTimes===0&&M(w)),A.__cacheKey=Q,A.__webglTexture=et[Q].texture}return k}function V(A,w,k){let $=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&($=r.TEXTURE_3D);let et=ot(A,w),Q=w.source;e.bindTexture($,A.__webglTexture,r.TEXTURE0+k);let Tt=n.get(Q);if(Q.version!==Tt.__version||et===!0){e.activeTexture(r.TEXTURE0+k);let gt=ne.getPrimaries(ne.workingColorSpace),Mt=w.colorSpace===Kn?null:ne.getPrimaries(w.colorSpace),jt=w.colorSpace===Kn||gt===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let ut=f(w.image,!1,i.maxTextureSize);ut=Ht(w,ut);let Rt=s.convert(w.format,w.colorSpace),vt=s.convert(w.type),Pt=_(w.internalFormat,Rt,vt,w.colorSpace,w.isVideoTexture);xt($,w);let ft,Vt=w.mipmaps,Xt=w.isVideoTexture!==!0,ce=Tt.__version===void 0||et===!0,O=Q.dataReady,yt=C(w,ut);if(w.isDepthTexture)Pt=v(w.format===ls,w.type),ce&&(Xt?e.texStorage2D(r.TEXTURE_2D,1,Pt,ut.width,ut.height):e.texImage2D(r.TEXTURE_2D,0,Pt,ut.width,ut.height,0,Rt,vt,null));else if(w.isDataTexture)if(Vt.length>0){Xt&&ce&&e.texStorage2D(r.TEXTURE_2D,yt,Pt,Vt[0].width,Vt[0].height);for(let j=0,st=Vt.length;j<st;j++)ft=Vt[j],Xt?O&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,ft.width,ft.height,Rt,vt,ft.data):e.texImage2D(r.TEXTURE_2D,j,Pt,ft.width,ft.height,0,Rt,vt,ft.data);w.generateMipmaps=!1}else Xt?(ce&&e.texStorage2D(r.TEXTURE_2D,yt,Pt,ut.width,ut.height),O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ut.width,ut.height,Rt,vt,ut.data)):e.texImage2D(r.TEXTURE_2D,0,Pt,ut.width,ut.height,0,Rt,vt,ut.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Xt&&ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Pt,Vt[0].width,Vt[0].height,ut.depth);for(let j=0,st=Vt.length;j<st;j++)if(ft=Vt[j],w.format!==pn)if(Rt!==null)if(Xt){if(O)if(w.layerUpdates.size>0){let At=Ah(ft.width,ft.height,w.format,w.type);for(let bt of w.layerUpdates){let $t=ft.data.subarray(bt*At/ft.data.BYTES_PER_ELEMENT,(bt+1)*At/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,bt,ft.width,ft.height,1,Rt,$t)}w.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,ut.depth,Rt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,j,Pt,ft.width,ft.height,ut.depth,0,ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xt?O&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,j,0,0,0,ft.width,ft.height,ut.depth,Rt,vt,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,j,Pt,ft.width,ft.height,ut.depth,0,Rt,vt,ft.data)}else{Xt&&ce&&e.texStorage2D(r.TEXTURE_2D,yt,Pt,Vt[0].width,Vt[0].height);for(let j=0,st=Vt.length;j<st;j++)ft=Vt[j],w.format!==pn?Rt!==null?Xt?O&&e.compressedTexSubImage2D(r.TEXTURE_2D,j,0,0,ft.width,ft.height,Rt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,j,Pt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xt?O&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,ft.width,ft.height,Rt,vt,ft.data):e.texImage2D(r.TEXTURE_2D,j,Pt,ft.width,ft.height,0,Rt,vt,ft.data)}else if(w.isDataArrayTexture)if(Xt){if(ce&&e.texStorage3D(r.TEXTURE_2D_ARRAY,yt,Pt,ut.width,ut.height,ut.depth),O)if(w.layerUpdates.size>0){let j=Ah(ut.width,ut.height,w.format,w.type);for(let st of w.layerUpdates){let At=ut.data.subarray(st*j/ut.data.BYTES_PER_ELEMENT,(st+1)*j/ut.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,st,ut.width,ut.height,1,Rt,vt,At)}w.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ut.width,ut.height,ut.depth,Rt,vt,ut.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,ut.width,ut.height,ut.depth,0,Rt,vt,ut.data);else if(w.isData3DTexture)Xt?(ce&&e.texStorage3D(r.TEXTURE_3D,yt,Pt,ut.width,ut.height,ut.depth),O&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ut.width,ut.height,ut.depth,Rt,vt,ut.data)):e.texImage3D(r.TEXTURE_3D,0,Pt,ut.width,ut.height,ut.depth,0,Rt,vt,ut.data);else if(w.isFramebufferTexture){if(ce)if(Xt)e.texStorage2D(r.TEXTURE_2D,yt,Pt,ut.width,ut.height);else{let j=ut.width,st=ut.height;for(let At=0;At<yt;At++)e.texImage2D(r.TEXTURE_2D,At,Pt,j,st,0,Rt,vt,null),j>>=1,st>>=1}}else if(Vt.length>0){if(Xt&&ce){let j=z(Vt[0]);e.texStorage2D(r.TEXTURE_2D,yt,Pt,j.width,j.height)}for(let j=0,st=Vt.length;j<st;j++)ft=Vt[j],Xt?O&&e.texSubImage2D(r.TEXTURE_2D,j,0,0,Rt,vt,ft):e.texImage2D(r.TEXTURE_2D,j,Pt,Rt,vt,ft);w.generateMipmaps=!1}else if(Xt){if(ce){let j=z(ut);e.texStorage2D(r.TEXTURE_2D,yt,Pt,j.width,j.height)}O&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Rt,vt,ut)}else e.texImage2D(r.TEXTURE_2D,0,Pt,Rt,vt,ut);x(w)&&g($),Tt.__version=Q.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function J(A,w,k){if(w.image.length!==6)return;let $=ot(A,w),et=w.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+k);let Q=n.get(et);if(et.version!==Q.__version||$===!0){e.activeTexture(r.TEXTURE0+k);let Tt=ne.getPrimaries(ne.workingColorSpace),gt=w.colorSpace===Kn?null:ne.getPrimaries(w.colorSpace),Mt=w.colorSpace===Kn||Tt===gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let jt=w.isCompressedTexture||w.image[0].isCompressedTexture,ut=w.image[0]&&w.image[0].isDataTexture,Rt=[];for(let st=0;st<6;st++)!jt&&!ut?Rt[st]=f(w.image[st],!0,i.maxCubemapSize):Rt[st]=ut?w.image[st].image:w.image[st],Rt[st]=Ht(w,Rt[st]);let vt=Rt[0],Pt=s.convert(w.format,w.colorSpace),ft=s.convert(w.type),Vt=_(w.internalFormat,Pt,ft,w.colorSpace),Xt=w.isVideoTexture!==!0,ce=Q.__version===void 0||$===!0,O=et.dataReady,yt=C(w,vt);xt(r.TEXTURE_CUBE_MAP,w);let j;if(jt){Xt&&ce&&e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Vt,vt.width,vt.height);for(let st=0;st<6;st++){j=Rt[st].mipmaps;for(let At=0;At<j.length;At++){let bt=j[At];w.format!==pn?Pt!==null?Xt?O&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,bt.width,bt.height,Pt,bt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,Vt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,0,0,bt.width,bt.height,Pt,ft,bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At,Vt,bt.width,bt.height,0,Pt,ft,bt.data)}}}else{if(j=w.mipmaps,Xt&&ce){j.length>0&&yt++;let st=z(Rt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,yt,Vt,st.width,st.height)}for(let st=0;st<6;st++)if(ut){Xt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Rt[st].width,Rt[st].height,Pt,ft,Rt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Vt,Rt[st].width,Rt[st].height,0,Pt,ft,Rt[st].data);for(let At=0;At<j.length;At++){let $t=j[At].image[st].image;Xt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,$t.width,$t.height,Pt,ft,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,Vt,$t.width,$t.height,0,Pt,ft,$t.data)}}else{Xt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Pt,ft,Rt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Vt,Pt,ft,Rt[st]);for(let At=0;At<j.length;At++){let bt=j[At];Xt?O&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,0,0,Pt,ft,bt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,At+1,Vt,Pt,ft,bt.image[st])}}}x(w)&&g(r.TEXTURE_CUBE_MAP),Q.__version=et.version,w.onUpdate&&w.onUpdate(w)}A.__version=w.version}function ct(A,w,k,$,et,Q){let Tt=s.convert(k.format,k.colorSpace),gt=s.convert(k.type),Mt=_(k.internalFormat,Tt,gt,k.colorSpace),jt=n.get(w),ut=n.get(k);if(ut.__renderTarget=w,!jt.__hasExternalTextures){let Rt=Math.max(1,w.width>>Q),vt=Math.max(1,w.height>>Q);et===r.TEXTURE_3D||et===r.TEXTURE_2D_ARRAY?e.texImage3D(et,Q,Mt,Rt,vt,w.depth,0,Tt,gt,null):e.texImage2D(et,Q,Mt,Rt,vt,0,Tt,gt,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Et(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,et,ut.__webglTexture,0,lt(w)):(et===r.TEXTURE_2D||et>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,et,ut.__webglTexture,Q),e.bindFramebuffer(r.FRAMEBUFFER,null)}function rt(A,w,k){if(r.bindRenderbuffer(r.RENDERBUFFER,A),w.depthBuffer){let $=w.depthTexture,et=$&&$.isDepthTexture?$.type:null,Q=v(w.stencilBuffer,et),Tt=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,gt=lt(w);Et(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,gt,Q,w.width,w.height):k?r.renderbufferStorageMultisample(r.RENDERBUFFER,gt,Q,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Q,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Tt,r.RENDERBUFFER,A)}else{let $=w.textures;for(let et=0;et<$.length;et++){let Q=$[et],Tt=s.convert(Q.format,Q.colorSpace),gt=s.convert(Q.type),Mt=_(Q.internalFormat,Tt,gt,Q.colorSpace),jt=lt(w);k&&Et(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,jt,Mt,w.width,w.height):Et(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,jt,Mt,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Mt,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(A,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let $=n.get(w.depthTexture);$.__renderTarget=w,(!$.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let et=$.__webglTexture,Q=lt(w);if(w.depthTexture.format===ns)Et(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,et,0);else if(w.depthTexture.format===ls)Et(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0,Q):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Lt(A){let w=n.get(A),k=A.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==A.depthTexture){let $=A.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),$){let et=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),w.__depthDisposeCallback=et}w.__boundDepthTexture=$}if(A.depthTexture&&!w.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");mt(w.__webglFramebuffer,A)}else if(k){w.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[$]),w.__webglDepthbuffer[$]===void 0)w.__webglDepthbuffer[$]=r.createRenderbuffer(),rt(w.__webglDepthbuffer[$],A,!1);else{let et=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=w.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,et,r.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),rt(w.__webglDepthbuffer,A,!1);else{let $=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,$,r.RENDERBUFFER,et)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(A,w,k){let $=n.get(A);w!==void 0&&ct($.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),k!==void 0&&Lt(A)}function Wt(A){let w=A.texture,k=n.get(A),$=n.get(w);A.addEventListener("dispose",T);let et=A.textures,Q=A.isWebGLCubeRenderTarget===!0,Tt=et.length>1;if(Tt||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=w.version,o.memory.textures++),Q){k.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer[gt]=[];for(let Mt=0;Mt<w.mipmaps.length;Mt++)k.__webglFramebuffer[gt][Mt]=r.createFramebuffer()}else k.__webglFramebuffer[gt]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){k.__webglFramebuffer=[];for(let gt=0;gt<w.mipmaps.length;gt++)k.__webglFramebuffer[gt]=r.createFramebuffer()}else k.__webglFramebuffer=r.createFramebuffer();if(Tt)for(let gt=0,Mt=et.length;gt<Mt;gt++){let jt=n.get(et[gt]);jt.__webglTexture===void 0&&(jt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&Et(A)===!1){k.__webglMultisampledFramebuffer=r.createFramebuffer(),k.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let gt=0;gt<et.length;gt++){let Mt=et[gt];k.__webglColorRenderbuffer[gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,k.__webglColorRenderbuffer[gt]);let jt=s.convert(Mt.format,Mt.colorSpace),ut=s.convert(Mt.type),Rt=_(Mt.internalFormat,jt,ut,Mt.colorSpace,A.isXRRenderTarget===!0),vt=lt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,vt,Rt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+gt,r.RENDERBUFFER,k.__webglColorRenderbuffer[gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(k.__webglDepthRenderbuffer=r.createRenderbuffer(),rt(k.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Q){e.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),xt(r.TEXTURE_CUBE_MAP,w);for(let gt=0;gt<6;gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)ct(k.__webglFramebuffer[gt][Mt],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Mt);else ct(k.__webglFramebuffer[gt],A,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);x(w)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Tt){for(let gt=0,Mt=et.length;gt<Mt;gt++){let jt=et[gt],ut=n.get(jt);e.bindTexture(r.TEXTURE_2D,ut.__webglTexture),xt(r.TEXTURE_2D,jt),ct(k.__webglFramebuffer,A,jt,r.COLOR_ATTACHMENT0+gt,r.TEXTURE_2D,0),x(jt)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let gt=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,$.__webglTexture),xt(gt,w),w.mipmaps&&w.mipmaps.length>0)for(let Mt=0;Mt<w.mipmaps.length;Mt++)ct(k.__webglFramebuffer[Mt],A,w,r.COLOR_ATTACHMENT0,gt,Mt);else ct(k.__webglFramebuffer,A,w,r.COLOR_ATTACHMENT0,gt,0);x(w)&&g(gt),e.unbindTexture()}A.depthBuffer&&Lt(A)}function nt(A){let w=A.textures;for(let k=0,$=w.length;k<$;k++){let et=w[k];if(x(et)){let Q=y(A),Tt=n.get(et).__webglTexture;e.bindTexture(Q,Tt),g(Q),e.unbindTexture()}}}let ht=[],L=[];function Dt(A){if(A.samples>0){if(Et(A)===!1){let w=A.textures,k=A.width,$=A.height,et=r.COLOR_BUFFER_BIT,Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=n.get(A),gt=w.length>1;if(gt)for(let Mt=0;Mt<w.length;Mt++)e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglFramebuffer);for(let Mt=0;Mt<w.length;Mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=r.STENCIL_BUFFER_BIT)),gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let jt=n.get(w[Mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,jt,0)}r.blitFramebuffer(0,0,k,$,0,0,k,$,et,r.NEAREST),c===!0&&(ht.length=0,L.length=0,ht.push(r.COLOR_ATTACHMENT0+Mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ht.push(Q),L.push(Q),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ht))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),gt)for(let Mt=0;Mt<w.length;Mt++){e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Tt.__webglColorRenderbuffer[Mt]);let jt=n.get(w[Mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Tt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,jt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Tt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){let w=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function lt(A){return Math.min(i.maxSamples,A.samples)}function Et(A){let w=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function pt(A){let w=o.render.frame;h.get(A)!==w&&(h.set(A,w),A.update())}function Ht(A,w){let k=A.colorSpace,$=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||k!==vs&&k!==Kn&&(ne.getTransfer(k)===ue?($!==pn||et!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),w}function z(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=Z,this.setTextureCube=W,this.rebindTextures=It,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=ct,this.useMultisampledRTT=Et}function Ug(r,t){function e(n,i=Kn){let s,o=ne.getTransfer(i);if(n===Fn)return r.UNSIGNED_BYTE;if(n===jc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Qc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Yh)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xh)return r.BYTE;if(n===qh)return r.SHORT;if(n===Xs)return r.UNSIGNED_SHORT;if(n===Kc)return r.INT;if(n===Ti)return r.UNSIGNED_INT;if(n===Mn)return r.FLOAT;if(n===ir)return r.HALF_FLOAT;if(n===$h)return r.ALPHA;if(n===Zh)return r.RGB;if(n===pn)return r.RGBA;if(n===Jh)return r.LUMINANCE;if(n===Kh)return r.LUMINANCE_ALPHA;if(n===ns)return r.DEPTH_COMPONENT;if(n===ls)return r.DEPTH_STENCIL;if(n===tl)return r.RED;if(n===el)return r.RED_INTEGER;if(n===jh)return r.RG;if(n===nl)return r.RG_INTEGER;if(n===il)return r.RGBA_INTEGER;if(n===Br||n===Or||n===kr||n===Hr)if(o===ue)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Br)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Br)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Or)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Na||n===Fa||n===Ba||n===Oa)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Na)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ba)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ka||n===Ha||n===Va)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ka||n===Ha)return o===ue?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Va)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka||n===ja||n===Qa||n===tc||n===ec||n===nc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ga)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===$a)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Za)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ja)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ec)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===nc)return o===ue?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===ic||n===sc)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Vr)return o===ue?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qh||n===rc||n===oc||n===ac)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Vr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ac)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var bc=class extends Re{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ee=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},zg={type:"move"},Hs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let f of t.hand.values()){let x=e.getJointPose(f,n),g=this._getHandJoint(l,f);x!==null&&(g.matrix.fromArray(x.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=x.radius),g.visible=x!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ng=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Fg=`
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

}`,wc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new Ye,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pe({vertexShader:Ng,fragmentShader:Fg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sc=class extends ii{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null,f=new wc,x=e.getContextAttributes(),g=null,y=null,_=[],v=[],C=new tt,S=null,T=new Re;T.viewport=new de;let E=new Re;E.viewport=new de;let M=[T,E],b=new bc,P=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let J=_[V];return J===void 0&&(J=new Hs,_[V]=J),J.getTargetRaySpace()},this.getControllerGrip=function(V){let J=_[V];return J===void 0&&(J=new Hs,_[V]=J),J.getGripSpace()},this.getHand=function(V){let J=_[V];return J===void 0&&(J=new Hs,_[V]=J),J.getHandSpace()};function U(V){let J=v.indexOf(V.inputSource);if(J===-1)return;let ct=_[J];ct!==void 0&&(ct.update(V.inputSource,V.frame,l||o),ct.dispatchEvent({type:V.type,data:V.inputSource}))}function N(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let V=0;V<_.length;V++){let J=v[V];J!==null&&(v[V]=null,_[V].disconnect(J))}P=null,D=null,f.reset(),t.setRenderTarget(g),p=null,d=null,u=null,i=null,y=null,ot.stop(),n.isPresenting=!1,t.setPixelRatio(S),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await e.makeXRCompatible(),S=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let J={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Bn(p.framebufferWidth,p.framebufferHeight,{format:pn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let J=null,ct=null,rt=null;x.depth&&(rt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=x.stencil?ls:ns,ct=x.stencil?cs:Ti);let mt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(mt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new Bn(d.textureWidth,d.textureHeight,{format:pn,type:Fn,depthTexture:new Qr(d.textureWidth,d.textureHeight,ct,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ot.setContext(i),ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function F(V){for(let J=0;J<V.removed.length;J++){let ct=V.removed[J],rt=v.indexOf(ct);rt>=0&&(v[rt]=null,_[rt].disconnect(ct))}for(let J=0;J<V.added.length;J++){let ct=V.added[J],rt=v.indexOf(ct);if(rt===-1){for(let Lt=0;Lt<_.length;Lt++)if(Lt>=v.length){v.push(ct),rt=Lt;break}else if(v[Lt]===null){v[Lt]=ct,rt=Lt;break}if(rt===-1)break}let mt=_[rt];mt&&mt.connect(ct)}}let B=new I,Z=new I;function W(V,J,ct){B.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ct.matrixWorld);let rt=B.distanceTo(Z),mt=J.projectionMatrix.elements,Lt=ct.projectionMatrix.elements,It=mt[14]/(mt[10]-1),Wt=mt[14]/(mt[10]+1),nt=(mt[9]+1)/mt[5],ht=(mt[9]-1)/mt[5],L=(mt[8]-1)/mt[0],Dt=(Lt[8]+1)/Lt[0],lt=It*L,Et=It*Dt,pt=rt/(-L+Dt),Ht=pt*-L;if(J.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ht),V.translateZ(pt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),mt[10]===-1)V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let z=It+pt,A=Wt+pt,w=lt-Ht,k=Et+(rt-Ht),$=nt*Wt/A*z,et=ht*Wt/A*z;V.projectionMatrix.makePerspective(w,k,$,et,z,A),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function X(V,J){J===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(J.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;let J=V.near,ct=V.far;f.texture!==null&&(f.depthNear>0&&(J=f.depthNear),f.depthFar>0&&(ct=f.depthFar)),b.near=E.near=T.near=J,b.far=E.far=T.far=ct,(P!==b.near||D!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,D=b.far),T.layers.mask=V.layers.mask|2,E.layers.mask=V.layers.mask|4,b.layers.mask=T.layers.mask|E.layers.mask;let rt=V.parent,mt=b.cameras;X(b,rt);for(let Lt=0;Lt<mt.length;Lt++)X(mt[Lt],rt);mt.length===2?W(b,T,E):b.projectionMatrix.copy(T.projectionMatrix),K(V,b,rt)};function K(V,J,ct){ct===null?V.matrix.copy(J.matrixWorld):(V.matrix.copy(ct.matrixWorld),V.matrix.invert(),V.matrix.multiply(J.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(J.projectionMatrix),V.projectionMatrixInverse.copy(J.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hs*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&p===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(b)};let at=null;function xt(V,J){if(h=J.getViewerPose(l||o),m=J,h!==null){let ct=h.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let rt=!1;ct.length!==b.cameras.length&&(b.cameras.length=0,rt=!0);for(let Lt=0;Lt<ct.length;Lt++){let It=ct[Lt],Wt=null;if(p!==null)Wt=p.getViewport(It);else{let ht=u.getViewSubImage(d,It);Wt=ht.viewport,Lt===0&&(t.setRenderTargetTextures(y,ht.colorTexture,d.ignoreDepthValues?void 0:ht.depthStencilTexture),t.setRenderTarget(y))}let nt=M[Lt];nt===void 0&&(nt=new Re,nt.layers.enable(Lt),nt.viewport=new de,M[Lt]=nt),nt.matrix.fromArray(It.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(It.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Lt===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),rt===!0&&b.cameras.push(nt)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")){let Lt=u.getDepthInformation(ct[0]);Lt&&Lt.isValid&&Lt.texture&&f.init(t,Lt,i.renderState)}}for(let ct=0;ct<_.length;ct++){let rt=v[ct],mt=_[ct];rt!==null&&mt!==void 0&&mt.update(rt,J,l||o)}at&&at(V,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let ot=new ru;ot.setAnimationLoop(xt),this.setAnimationLoop=function(V){at=V},this.dispose=function(){}}},yi=new sn,Bg=new Qt;function Og(r,t){function e(x,g){x.matrixAutoUpdate===!0&&x.updateMatrix(),g.value.copy(x.matrix)}function n(x,g){g.color.getRGB(x.fogColor.value,su(r)),g.isFog?(x.fogNear.value=g.near,x.fogFar.value=g.far):g.isFogExp2&&(x.fogDensity.value=g.density)}function i(x,g,y,_,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(x,g):g.isMeshToonMaterial?(s(x,g),u(x,g)):g.isMeshPhongMaterial?(s(x,g),h(x,g)):g.isMeshStandardMaterial?(s(x,g),d(x,g),g.isMeshPhysicalMaterial&&p(x,g,v)):g.isMeshMatcapMaterial?(s(x,g),m(x,g)):g.isMeshDepthMaterial?s(x,g):g.isMeshDistanceMaterial?(s(x,g),f(x,g)):g.isMeshNormalMaterial?s(x,g):g.isLineBasicMaterial?(o(x,g),g.isLineDashedMaterial&&a(x,g)):g.isPointsMaterial?c(x,g,y,_):g.isSpriteMaterial?l(x,g):g.isShadowMaterial?(x.color.value.copy(g.color),x.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(x,g){x.opacity.value=g.opacity,g.color&&x.diffuse.value.copy(g.color),g.emissive&&x.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.bumpMap&&(x.bumpMap.value=g.bumpMap,e(g.bumpMap,x.bumpMapTransform),x.bumpScale.value=g.bumpScale,g.side===Oe&&(x.bumpScale.value*=-1)),g.normalMap&&(x.normalMap.value=g.normalMap,e(g.normalMap,x.normalMapTransform),x.normalScale.value.copy(g.normalScale),g.side===Oe&&x.normalScale.value.negate()),g.displacementMap&&(x.displacementMap.value=g.displacementMap,e(g.displacementMap,x.displacementMapTransform),x.displacementScale.value=g.displacementScale,x.displacementBias.value=g.displacementBias),g.emissiveMap&&(x.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,x.emissiveMapTransform)),g.specularMap&&(x.specularMap.value=g.specularMap,e(g.specularMap,x.specularMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest);let y=t.get(g),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,yi.copy(v),yi.x*=-1,yi.y*=-1,yi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),x.envMapRotation.value.setFromMatrix4(Bg.makeRotationFromEuler(yi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=g.reflectivity,x.ior.value=g.ior,x.refractionRatio.value=g.refractionRatio),g.lightMap&&(x.lightMap.value=g.lightMap,x.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,x.lightMapTransform)),g.aoMap&&(x.aoMap.value=g.aoMap,x.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,x.aoMapTransform))}function o(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform))}function a(x,g){x.dashSize.value=g.dashSize,x.totalSize.value=g.dashSize+g.gapSize,x.scale.value=g.scale}function c(x,g,y,_){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.size.value=g.size*y,x.scale.value=_*.5,g.map&&(x.map.value=g.map,e(g.map,x.uvTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function l(x,g){x.diffuse.value.copy(g.color),x.opacity.value=g.opacity,x.rotation.value=g.rotation,g.map&&(x.map.value=g.map,e(g.map,x.mapTransform)),g.alphaMap&&(x.alphaMap.value=g.alphaMap,e(g.alphaMap,x.alphaMapTransform)),g.alphaTest>0&&(x.alphaTest.value=g.alphaTest)}function h(x,g){x.specular.value.copy(g.specular),x.shininess.value=Math.max(g.shininess,1e-4)}function u(x,g){g.gradientMap&&(x.gradientMap.value=g.gradientMap)}function d(x,g){x.metalness.value=g.metalness,g.metalnessMap&&(x.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,x.metalnessMapTransform)),x.roughness.value=g.roughness,g.roughnessMap&&(x.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,x.roughnessMapTransform)),g.envMap&&(x.envMapIntensity.value=g.envMapIntensity)}function p(x,g,y){x.ior.value=g.ior,g.sheen>0&&(x.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),x.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(x.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,x.sheenColorMapTransform)),g.sheenRoughnessMap&&(x.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,x.sheenRoughnessMapTransform))),g.clearcoat>0&&(x.clearcoat.value=g.clearcoat,x.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(x.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,x.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(x.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Oe&&x.clearcoatNormalScale.value.negate())),g.dispersion>0&&(x.dispersion.value=g.dispersion),g.iridescence>0&&(x.iridescence.value=g.iridescence,x.iridescenceIOR.value=g.iridescenceIOR,x.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(x.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,x.iridescenceMapTransform)),g.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),g.transmission>0&&(x.transmission.value=g.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(x.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,x.transmissionMapTransform)),x.thickness.value=g.thickness,g.thicknessMap&&(x.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=g.attenuationDistance,x.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(x.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(x.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=g.specularIntensity,x.specularColor.value.copy(g.specularColor),g.specularColorMap&&(x.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,x.specularColorMapTransform)),g.specularIntensityMap&&(x.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,x.specularIntensityMapTransform))}function m(x,g){g.matcap&&(x.matcap.value=g.matcap)}function f(x,g){let y=t.get(g).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kg(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function l(y,_){let v=i[y.id];v===void 0&&(m(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",x));let C=_.program;n.updateUBOMapping(y,C);let S=t.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function h(y){let _=u();y.__bindingPointIndex=_;let v=r.createBuffer(),C=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,C,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let _=i[y.id],v=y.uniforms,C=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let S=0,T=v.length;S<T;S++){let E=Array.isArray(v[S])?v[S]:[v[S]];for(let M=0,b=E.length;M<b;M++){let P=E[M];if(p(P,S,M,C)===!0){let D=P.__offset,U=Array.isArray(P.value)?P.value:[P.value],N=0;for(let F=0;F<U.length;F++){let B=U[F],Z=f(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,D+N,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,N),N+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function p(y,_,v,C){let S=y.value,T=_+"_"+v;if(C[T]===void 0)return typeof S=="number"||typeof S=="boolean"?C[T]=S:C[T]=S.clone(),!0;{let E=C[T];if(typeof S=="number"||typeof S=="boolean"){if(E!==S)return C[T]=S,!0}else if(E.equals(S)===!1)return E.copy(S),!0}return!1}function m(y){let _=y.uniforms,v=0,C=16;for(let T=0,E=_.length;T<E;T++){let M=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,P=M.length;b<P;b++){let D=M[b],U=Array.isArray(D.value)?D.value:[D.value];for(let N=0,F=U.length;N<F;N++){let B=U[N],Z=f(B),W=v%C,X=W%Z.boundary,K=W+X;v+=X,K!==0&&C-K<Z.storage&&(v+=C-K),D.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Z.storage}}}let S=v%C;return S>0&&(v+=C-S),y.__size=v,y.__cache={},this}function f(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){let _=y.target;_.removeEventListener("dispose",x);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:c,update:l,dispose:g}}var to=class{constructor(t={}){let{canvas:e=Wd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let m=new Uint32Array(4),f=new Int32Array(4),x=null,g=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this.toneMapping=ti,this.toneMappingExposure=1;let v=this,C=!1,S=0,T=0,E=null,M=-1,b=null,P=new de,D=new de,U=null,N=new Ct(0),F=0,B=e.width,Z=e.height,W=1,X=null,K=null,at=new de(0,0,B,Z),xt=new de(0,0,B,Z),ot=!1,V=new qs,J=!1,ct=!1,rt=new Qt,mt=new Qt,Lt=new I,It=new de,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ht(){return E===null?W:1}let L=n;function Dt(R,H){return e.getContext(R,H)}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${$c}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",bt,!1),L===null){let H="webgl2";if(L=Dt(H,R),L===null)throw Dt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let lt,Et,pt,Ht,z,A,w,k,$,et,Q,Tt,gt,Mt,jt,ut,Rt,vt,Pt,ft,Vt,Xt,ce,O;function yt(){lt=new n0(L),lt.init(),Xt=new Ug(L,lt),Et=new Jm(L,lt,t,Xt),pt=new Ig(L,lt),Et.reverseDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),Ht=new r0(L),z=new vg,A=new Dg(L,lt,pt,z,Et,Xt,Ht),w=new jm(v),k=new e0(v),$=new df(L),ce=new $m(L,$),et=new i0(L,$,Ht,ce),Q=new a0(L,et,$,Ht),Pt=new o0(L,Et,A),ut=new Km(z),Tt=new xg(v,w,k,lt,Et,ce,ut),gt=new Og(v,z),Mt=new yg,jt=new Tg(lt),vt=new Ym(v,w,k,pt,Q,p,c),Rt=new Cg(v,Q,Et),O=new kg(L,Ht,Et,pt),ft=new Zm(L,lt,Ht),Vt=new s0(L,lt,Ht),Ht.programs=Tt.programs,v.capabilities=Et,v.extensions=lt,v.properties=z,v.renderLists=Mt,v.shadowMap=Rt,v.state=pt,v.info=Ht}yt();let j=new Sc(v,L);this.xr=j,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let R=lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(B,Z,!1))},this.getSize=function(R){return R.set(B,Z)},this.setSize=function(R,H,q=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,Z=H,e.width=Math.floor(R*W),e.height=Math.floor(H*W),q===!0&&(e.style.width=R+"px",e.style.height=H+"px"),this.setViewport(0,0,R,H)},this.getDrawingBufferSize=function(R){return R.set(B*W,Z*W).floor()},this.setDrawingBufferSize=function(R,H,q){B=R,Z=H,W=q,e.width=Math.floor(R*q),e.height=Math.floor(H*q),this.setViewport(0,0,R,H)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(at)},this.setViewport=function(R,H,q,Y){R.isVector4?at.set(R.x,R.y,R.z,R.w):at.set(R,H,q,Y),pt.viewport(P.copy(at).multiplyScalar(W).round())},this.getScissor=function(R){return R.copy(xt)},this.setScissor=function(R,H,q,Y){R.isVector4?xt.set(R.x,R.y,R.z,R.w):xt.set(R,H,q,Y),pt.scissor(D.copy(xt).multiplyScalar(W).round())},this.getScissorTest=function(){return ot},this.setScissorTest=function(R){pt.setScissorTest(ot=R)},this.setOpaqueSort=function(R){X=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(vt.getClearColor())},this.setClearColor=function(){vt.setClearColor.apply(vt,arguments)},this.getClearAlpha=function(){return vt.getClearAlpha()},this.setClearAlpha=function(){vt.setClearAlpha.apply(vt,arguments)},this.clear=function(R=!0,H=!0,q=!0){let Y=0;if(R){let G=!1;if(E!==null){let dt=E.texture.format;G=dt===il||dt===nl||dt===el}if(G){let dt=E.texture.type,wt=dt===Fn||dt===Ti||dt===Xs||dt===cs||dt===jc||dt===Qc,Ut=vt.getClearColor(),zt=vt.getClearAlpha(),qt=Ut.r,Zt=Ut.g,Nt=Ut.b;wt?(m[0]=qt,m[1]=Zt,m[2]=Nt,m[3]=zt,L.clearBufferuiv(L.COLOR,0,m)):(f[0]=qt,f[1]=Zt,f[2]=Nt,f[3]=zt,L.clearBufferiv(L.COLOR,0,f))}else Y|=L.COLOR_BUFFER_BIT}H&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Mt.dispose(),jt.dispose(),z.dispose(),w.dispose(),k.dispose(),Q.dispose(),ce.dispose(),O.dispose(),Tt.dispose(),j.dispose(),j.removeEventListener("sessionstart",Ml),j.removeEventListener("sessionend",El),pi.stop()};function st(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let R=Ht.autoReset,H=Rt.enabled,q=Rt.autoUpdate,Y=Rt.needsUpdate,G=Rt.type;yt(),Ht.autoReset=R,Rt.enabled=H,Rt.autoUpdate=q,Rt.needsUpdate=Y,Rt.type=G}function bt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){let H=R.target;H.removeEventListener("dispose",$t),ye(H)}function ye(R){Ne(R),z.remove(R)}function Ne(R){let H=z.get(R).programs;H!==void 0&&(H.forEach(function(q){Tt.releaseProgram(q)}),R.isShaderMaterial&&Tt.releaseShaderCache(R))}this.renderBufferDirect=function(R,H,q,Y,G,dt){H===null&&(H=Wt);let wt=G.isMesh&&G.matrixWorld.determinant()<0,Ut=ku(R,H,q,Y,G);pt.setMaterial(Y,wt);let zt=q.index,qt=1;if(Y.wireframe===!0){if(zt=et.getWireframeAttribute(q),zt===void 0)return;qt=2}let Zt=q.drawRange,Nt=q.attributes.position,ie=Zt.start*qt,pe=(Zt.start+Zt.count)*qt;dt!==null&&(ie=Math.max(ie,dt.start*qt),pe=Math.min(pe,(dt.start+dt.count)*qt)),zt!==null?(ie=Math.max(ie,0),pe=Math.min(pe,zt.count)):Nt!=null&&(ie=Math.max(ie,0),pe=Math.min(pe,Nt.count));let me=pe-ie;if(me<0||me===1/0)return;ce.setup(G,Y,Ut,q,zt);let qe,oe=ft;if(zt!==null&&(qe=$.get(zt),oe=Vt,oe.setIndex(qe)),G.isMesh)Y.wireframe===!0?(pt.setLineWidth(Y.wireframeLinewidth*ht()),oe.setMode(L.LINES)):oe.setMode(L.TRIANGLES);else if(G.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),pt.setLineWidth(Bt*ht()),G.isLineSegments?oe.setMode(L.LINES):G.isLineLoop?oe.setMode(L.LINE_LOOP):oe.setMode(L.LINE_STRIP)}else G.isPoints?oe.setMode(L.POINTS):G.isSprite&&oe.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)oe.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))oe.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Bt=G._multiDrawStarts,An=G._multiDrawCounts,ae=G._multiDrawCount,ln=zt?$.get(zt).bytesPerElement:1,Di=z.get(Y).currentProgram.getUniforms();for(let Je=0;Je<ae;Je++)Di.setValue(L,"_gl_DrawID",Je),oe.render(Bt[Je]/ln,An[Je])}else if(G.isInstancedMesh)oe.renderInstances(ie,me,G.count);else if(q.isInstancedBufferGeometry){let Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,An=Math.min(q.instanceCount,Bt);oe.renderInstances(ie,me,An)}else oe.render(ie,me)};function le(R,H,q){R.transparent===!0&&R.side===Ce&&R.forceSinglePass===!1?(R.side=Oe,R.needsUpdate=!0,or(R,H,q),R.side=ni,R.needsUpdate=!0,or(R,H,q),R.side=Ce):or(R,H,q)}this.compile=function(R,H,q=null){q===null&&(q=R),g=jt.get(q),g.init(H),_.push(g),q.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),R!==q&&R.traverseVisible(function(G){G.isLight&&G.layers.test(H.layers)&&(g.pushLight(G),G.castShadow&&g.pushShadow(G))}),g.setupLights();let Y=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let dt=G.material;if(dt)if(Array.isArray(dt))for(let wt=0;wt<dt.length;wt++){let Ut=dt[wt];le(Ut,q,G),Y.add(Ut)}else le(dt,q,G),Y.add(dt)}),_.pop(),g=null,Y},this.compileAsync=function(R,H,q=null){let Y=this.compile(R,H,q);return new Promise(G=>{function dt(){if(Y.forEach(function(wt){z.get(wt).currentProgram.isReady()&&Y.delete(wt)}),Y.size===0){G(R);return}setTimeout(dt,10)}lt.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let cn=null;function Tn(R){cn&&cn(R)}function Ml(){pi.stop()}function El(){pi.start()}let pi=new ru;pi.setAnimationLoop(Tn),typeof self<"u"&&pi.setContext(self),this.setAnimationLoop=function(R){cn=R,j.setAnimationLoop(R),R===null?pi.stop():pi.start()},j.addEventListener("sessionstart",Ml),j.addEventListener("sessionend",El),this.render=function(R,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(H),H=j.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,H,E),g=jt.get(R,_.length),g.init(H),_.push(g),mt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),V.setFromProjectionMatrix(mt),ct=this.localClippingEnabled,J=ut.init(this.clippingPlanes,ct),x=Mt.get(R,y.length),x.init(),y.push(x),j.enabled===!0&&j.isPresenting===!0){let dt=v.xr.getDepthSensingMesh();dt!==null&&Go(dt,H,-1/0,v.sortObjects)}Go(R,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(X,K),nt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,nt&&vt.addToRenderList(x,R),this.info.render.frame++,J===!0&&ut.beginShadows();let q=g.state.shadowsArray;Rt.render(q,R,H),J===!0&&ut.endShadows(),this.info.autoReset===!0&&this.info.reset();let Y=x.opaque,G=x.transmissive;if(g.setupLights(),H.isArrayCamera){let dt=H.cameras;if(G.length>0)for(let wt=0,Ut=dt.length;wt<Ut;wt++){let zt=dt[wt];wl(Y,G,R,zt)}nt&&vt.render(R);for(let wt=0,Ut=dt.length;wt<Ut;wt++){let zt=dt[wt];bl(x,R,zt,zt.viewport)}}else G.length>0&&wl(Y,G,R,H),nt&&vt.render(R),bl(x,R,H);E!==null&&(A.updateMultisampleRenderTarget(E),A.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,H),ce.resetDefaultState(),M=-1,b=null,_.pop(),_.length>0?(g=_[_.length-1],J===!0&&ut.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function Go(R,H,q,Y){if(R.visible===!1)return;if(R.layers.test(H.layers)){if(R.isGroup)q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(H);else if(R.isLight)g.pushLight(R),R.castShadow&&g.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||V.intersectsSprite(R)){Y&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(mt);let wt=Q.update(R),Ut=R.material;Ut.visible&&x.push(R,wt,Ut,q,It.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||V.intersectsObject(R))){let wt=Q.update(R),Ut=R.material;if(Y&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),It.copy(wt.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(mt)),Array.isArray(Ut)){let zt=wt.groups;for(let qt=0,Zt=zt.length;qt<Zt;qt++){let Nt=zt[qt],ie=Ut[Nt.materialIndex];ie&&ie.visible&&x.push(R,wt,ie,q,It.z,Nt)}}else Ut.visible&&x.push(R,wt,Ut,q,It.z,null)}}let dt=R.children;for(let wt=0,Ut=dt.length;wt<Ut;wt++)Go(dt[wt],H,q,Y)}function bl(R,H,q,Y){let G=R.opaque,dt=R.transmissive,wt=R.transparent;g.setupLightsView(q),J===!0&&ut.setGlobalState(v.clippingPlanes,q),Y&&pt.viewport(P.copy(Y)),G.length>0&&rr(G,H,q),dt.length>0&&rr(dt,H,q),wt.length>0&&rr(wt,H,q),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function wl(R,H,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Y.id]===void 0&&(g.state.transmissionRenderTarget[Y.id]=new Bn(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?ir:Fn,minFilter:Si,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));let dt=g.state.transmissionRenderTarget[Y.id],wt=Y.viewport||P;dt.setSize(wt.z,wt.w);let Ut=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(N),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),nt&&vt.render(q);let zt=v.toneMapping;v.toneMapping=ti;let qt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),g.setupLightsView(Y),J===!0&&ut.setGlobalState(v.clippingPlanes,Y),rr(R,q,Y),A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt),lt.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Nt=0,ie=H.length;Nt<ie;Nt++){let pe=H[Nt],me=pe.object,qe=pe.geometry,oe=pe.material,Bt=pe.group;if(oe.side===Ce&&me.layers.test(Y.layers)){let An=oe.side;oe.side=Oe,oe.needsUpdate=!0,Sl(me,q,Y,qe,oe,Bt),oe.side=An,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt))}v.setRenderTarget(Ut),v.setClearColor(N,F),qt!==void 0&&(Y.viewport=qt),v.toneMapping=zt}function rr(R,H,q){let Y=H.isScene===!0?H.overrideMaterial:null;for(let G=0,dt=R.length;G<dt;G++){let wt=R[G],Ut=wt.object,zt=wt.geometry,qt=Y===null?wt.material:Y,Zt=wt.group;Ut.layers.test(q.layers)&&Sl(Ut,H,q,zt,qt,Zt)}}function Sl(R,H,q,Y,G,dt){R.onBeforeRender(v,H,q,Y,G,dt),R.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(v,H,q,Y,R,dt),G.transparent===!0&&G.side===Ce&&G.forceSinglePass===!1?(G.side=Oe,G.needsUpdate=!0,v.renderBufferDirect(q,H,Y,G,R,dt),G.side=ni,G.needsUpdate=!0,v.renderBufferDirect(q,H,Y,G,R,dt),G.side=Ce):v.renderBufferDirect(q,H,Y,G,R,dt),R.onAfterRender(v,H,q,Y,G,dt)}function or(R,H,q){H.isScene!==!0&&(H=Wt);let Y=z.get(R),G=g.state.lights,dt=g.state.shadowsArray,wt=G.state.version,Ut=Tt.getParameters(R,G.state,dt,H,q),zt=Tt.getProgramCacheKey(Ut),qt=Y.programs;Y.environment=R.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(R.isMeshStandardMaterial?k:w).get(R.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&R.envMap===null?H.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",$t),qt=new Map,Y.programs=qt);let Zt=qt.get(zt);if(Zt!==void 0){if(Y.currentProgram===Zt&&Y.lightsStateVersion===wt)return Al(R,Ut),Zt}else Ut.uniforms=Tt.getUniforms(R),R.onBeforeCompile(Ut,v),Zt=Tt.acquireProgram(Ut,zt),qt.set(zt,Zt),Y.uniforms=Ut.uniforms;let Nt=Y.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Nt.clippingPlanes=ut.uniform),Al(R,Ut),Y.needsLights=Vu(R),Y.lightsStateVersion=wt,Y.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Zt,Y.uniformsList=null,Zt}function Tl(R){if(R.uniformsList===null){let H=R.currentProgram.getUniforms();R.uniformsList=ss.seqWithValue(H.seq,R.uniforms)}return R.uniformsList}function Al(R,H){let q=z.get(R);q.outputColorSpace=H.outputColorSpace,q.batching=H.batching,q.batchingColor=H.batchingColor,q.instancing=H.instancing,q.instancingColor=H.instancingColor,q.instancingMorph=H.instancingMorph,q.skinning=H.skinning,q.morphTargets=H.morphTargets,q.morphNormals=H.morphNormals,q.morphColors=H.morphColors,q.morphTargetsCount=H.morphTargetsCount,q.numClippingPlanes=H.numClippingPlanes,q.numIntersection=H.numClipIntersection,q.vertexAlphas=H.vertexAlphas,q.vertexTangents=H.vertexTangents,q.toneMapping=H.toneMapping}function ku(R,H,q,Y,G){H.isScene!==!0&&(H=Wt),A.resetTextureUnits();let dt=H.fog,wt=Y.isMeshStandardMaterial?H.environment:null,Ut=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:vs,zt=(Y.isMeshStandardMaterial?k:w).get(Y.envMap||wt),qt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Zt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Nt=!!q.morphAttributes.position,ie=!!q.morphAttributes.normal,pe=!!q.morphAttributes.color,me=ti;Y.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(me=v.toneMapping);let qe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=qe!==void 0?qe.length:0,Bt=z.get(Y),An=g.state.lights;if(J===!0&&(ct===!0||R!==b)){let en=R===b&&Y.id===M;ut.setState(Y,R,en)}let ae=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==An.state.version||Bt.outputColorSpace!==Ut||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==zt||Y.fog===!0&&Bt.fog!==dt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ut.numPlanes||Bt.numIntersection!==ut.numIntersection)||Bt.vertexAlphas!==qt||Bt.vertexTangents!==Zt||Bt.morphTargets!==Nt||Bt.morphNormals!==ie||Bt.morphColors!==pe||Bt.toneMapping!==me||Bt.morphTargetsCount!==oe)&&(ae=!0):(ae=!0,Bt.__version=Y.version);let ln=Bt.currentProgram;ae===!0&&(ln=or(Y,H,G));let Di=!1,Je=!1,Ss=!1,ge=ln.getUniforms(),vn=Bt.uniforms;if(pt.useProgram(ln.program)&&(Di=!0,Je=!0,Ss=!0),Y.id!==M&&(M=Y.id,Je=!0),Di||b!==R){pt.buffers.depth.getReversed()?(rt.copy(R.projectionMatrix),qd(rt),Yd(rt),ge.setValue(L,"projectionMatrix",rt)):ge.setValue(L,"projectionMatrix",R.projectionMatrix),ge.setValue(L,"viewMatrix",R.matrixWorldInverse);let Gn=ge.map.cameraPosition;Gn!==void 0&&Gn.setValue(L,Lt.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ge.setValue(L,"isOrthographic",R.isOrthographicCamera===!0),b!==R&&(b=R,Je=!0,Ss=!0)}if(G.isSkinnedMesh){ge.setOptional(L,G,"bindMatrix"),ge.setOptional(L,G,"bindMatrixInverse");let en=G.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),ge.setValue(L,"boneTexture",en.boneTexture,A))}G.isBatchedMesh&&(ge.setOptional(L,G,"batchingTexture"),ge.setValue(L,"batchingTexture",G._matricesTexture,A),ge.setOptional(L,G,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",G._indirectTexture,A),ge.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",G._colorsTexture,A));let Ts=q.morphAttributes;if((Ts.position!==void 0||Ts.normal!==void 0||Ts.color!==void 0)&&Pt.update(G,q,ln),(Je||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,ge.setValue(L,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(vn.envMap.value=zt,vn.flipEnvMap.value=zt.isCubeTexture&&zt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&H.environment!==null&&(vn.envMapIntensity.value=H.environmentIntensity),Je&&(ge.setValue(L,"toneMappingExposure",v.toneMappingExposure),Bt.needsLights&&Hu(vn,Ss),dt&&Y.fog===!0&&gt.refreshFogUniforms(vn,dt),gt.refreshMaterialUniforms(vn,Y,W,Z,g.state.transmissionRenderTarget[R.id]),ss.upload(L,Tl(Bt),vn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(ss.upload(L,Tl(Bt),vn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ge.setValue(L,"center",G.center),ge.setValue(L,"modelViewMatrix",G.modelViewMatrix),ge.setValue(L,"normalMatrix",G.normalMatrix),ge.setValue(L,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let en=Y.uniformsGroups;for(let Gn=0,Wn=en.length;Gn<Wn;Gn++){let Rl=en[Gn];O.update(Rl,ln),O.bind(Rl,ln)}}return ln}function Hu(R,H){R.ambientLightColor.needsUpdate=H,R.lightProbe.needsUpdate=H,R.directionalLights.needsUpdate=H,R.directionalLightShadows.needsUpdate=H,R.pointLights.needsUpdate=H,R.pointLightShadows.needsUpdate=H,R.spotLights.needsUpdate=H,R.spotLightShadows.needsUpdate=H,R.rectAreaLights.needsUpdate=H,R.hemisphereLights.needsUpdate=H}function Vu(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,H,q){z.get(R.texture).__webglTexture=H,z.get(R.depthTexture).__webglTexture=q;let Y=z.get(R);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,H){let q=z.get(R);q.__webglFramebuffer=H,q.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(R,H=0,q=0){E=R,S=H,T=q;let Y=!0,G=null,dt=!1,wt=!1;if(R){let zt=z.get(R);if(zt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(zt.__webglFramebuffer===void 0)A.setupRenderTarget(R);else if(zt.__hasExternalTextures)A.rebindTextures(R,z.get(R.texture).__webglTexture,z.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Nt=R.depthTexture;if(zt.__boundDepthTexture!==Nt){if(Nt!==null&&z.has(Nt)&&(R.width!==Nt.image.width||R.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(R)}}let qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(wt=!0);let Zt=z.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Zt[H])?G=Zt[H][q]:G=Zt[H],dt=!0):R.samples>0&&A.useMultisampledRTT(R)===!1?G=z.get(R).__webglMultisampledFramebuffer:Array.isArray(Zt)?G=Zt[q]:G=Zt,P.copy(R.viewport),D.copy(R.scissor),U=R.scissorTest}else P.copy(at).multiplyScalar(W).floor(),D.copy(xt).multiplyScalar(W).floor(),U=ot;if(pt.bindFramebuffer(L.FRAMEBUFFER,G)&&Y&&pt.drawBuffers(R,G),pt.viewport(P),pt.scissor(D),pt.setScissorTest(U),dt){let zt=z.get(R.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+H,zt.__webglTexture,q)}else if(wt){let zt=z.get(R.texture),qt=H||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,zt.__webglTexture,q||0,qt)}M=-1},this.readRenderTargetPixels=function(R,H,q,Y,G,dt,wt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){pt.bindFramebuffer(L.FRAMEBUFFER,Ut);try{let zt=R.texture,qt=zt.format,Zt=zt.type;if(!Et.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=R.width-Y&&q>=0&&q<=R.height-G&&L.readPixels(H,q,Y,G,Xt.convert(qt),Xt.convert(Zt),dt)}finally{let zt=E!==null?z.get(E).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,zt)}}},this.readRenderTargetPixelsAsync=async function(R,H,q,Y,G,dt,wt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=z.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&wt!==void 0&&(Ut=Ut[wt]),Ut){let zt=R.texture,qt=zt.format,Zt=zt.type;if(!Et.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=R.width-Y&&q>=0&&q<=R.height-G){pt.bindFramebuffer(L.FRAMEBUFFER,Ut);let Nt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Nt),L.bufferData(L.PIXEL_PACK_BUFFER,dt.byteLength,L.STREAM_READ),L.readPixels(H,q,Y,G,Xt.convert(qt),Xt.convert(Zt),0);let ie=E!==null?z.get(E).__webglFramebuffer:null;pt.bindFramebuffer(L.FRAMEBUFFER,ie);let pe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Xd(L,pe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Nt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,dt),L.deleteBuffer(Nt),L.deleteSync(pe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,H=null,q=0){R.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,R=arguments[1]);let Y=Math.pow(2,-q),G=Math.floor(R.image.width*Y),dt=Math.floor(R.image.height*Y),wt=H!==null?H.x:0,Ut=H!==null?H.y:0;A.setTexture2D(R,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,wt,Ut,G,dt),pt.unbindTexture()},this.copyTextureToTexture=function(R,H,q=null,Y=null,G=0){R.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,R=arguments[1],H=arguments[2],G=arguments[3]||0,q=null);let dt,wt,Ut,zt,qt,Zt,Nt,ie,pe,me=R.isCompressedTexture?R.mipmaps[G]:R.image;q!==null?(dt=q.max.x-q.min.x,wt=q.max.y-q.min.y,Ut=q.isBox3?q.max.z-q.min.z:1,zt=q.min.x,qt=q.min.y,Zt=q.isBox3?q.min.z:0):(dt=me.width,wt=me.height,Ut=me.depth||1,zt=0,qt=0,Zt=0),Y!==null?(Nt=Y.x,ie=Y.y,pe=Y.z):(Nt=0,ie=0,pe=0);let qe=Xt.convert(H.format),oe=Xt.convert(H.type),Bt;H.isData3DTexture?(A.setTexture3D(H,0),Bt=L.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(A.setTexture2DArray(H,0),Bt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(H,0),Bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,H.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,H.unpackAlignment);let An=L.getParameter(L.UNPACK_ROW_LENGTH),ae=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ln=L.getParameter(L.UNPACK_SKIP_PIXELS),Di=L.getParameter(L.UNPACK_SKIP_ROWS),Je=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,zt),L.pixelStorei(L.UNPACK_SKIP_ROWS,qt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Zt);let Ss=R.isDataArrayTexture||R.isData3DTexture,ge=H.isDataArrayTexture||H.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let vn=z.get(R),Ts=z.get(H),en=z.get(vn.__renderTarget),Gn=z.get(Ts.__renderTarget);pt.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Gn.__webglFramebuffer);for(let Wn=0;Wn<Ut;Wn++)Ss&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(R).__webglTexture,G,Zt+Wn),R.isDepthTexture?(ge&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,z.get(H).__webglTexture,G,pe+Wn),L.blitFramebuffer(zt,qt,dt,wt,Nt,ie,dt,wt,L.DEPTH_BUFFER_BIT,L.NEAREST)):ge?L.copyTexSubImage3D(Bt,G,Nt,ie,pe+Wn,zt,qt,dt,wt):L.copyTexSubImage2D(Bt,G,Nt,ie,pe+Wn,zt,qt,dt,wt);pt.bindFramebuffer(L.READ_FRAMEBUFFER,null),pt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ge?R.isDataTexture||R.isData3DTexture?L.texSubImage3D(Bt,G,Nt,ie,pe,dt,wt,Ut,qe,oe,me.data):H.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,G,Nt,ie,pe,dt,wt,Ut,qe,me.data):L.texSubImage3D(Bt,G,Nt,ie,pe,dt,wt,Ut,qe,oe,me):R.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,G,Nt,ie,dt,wt,qe,oe,me.data):R.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,G,Nt,ie,me.width,me.height,qe,me.data):L.texSubImage2D(L.TEXTURE_2D,G,Nt,ie,dt,wt,qe,oe,me);L.pixelStorei(L.UNPACK_ROW_LENGTH,An),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ae),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ln),L.pixelStorei(L.UNPACK_SKIP_ROWS,Di),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Je),G===0&&H.generateMipmaps&&L.generateMipmap(Bt),pt.unbindTexture()},this.copyTextureToTexture3D=function(R,H,q=null,Y=null,G=0){return R.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,R=arguments[2],H=arguments[3],G=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,H,q,Y,G)},this.initRenderTarget=function(R){z.get(R).__webglFramebuffer===void 0&&A.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?A.setTextureCube(R,0):R.isData3DTexture?A.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?A.setTexture2DArray(R,0):A.setTexture2D(R,0),pt.unbindTexture()},this.resetState=function(){S=0,T=0,E=null,pt.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}};var eo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ct(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Ai=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},no=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=lc,this.updateRanges=[],this.version=0,this.uuid=En()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=En()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},ke=new I,Ys=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=fn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),i=he(i,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ri=class extends kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$i,Is=new I,Zi=new I,Ji=new I,Ki=new tt,Ls=new tt,hu=new Qt,Rr=new I,Ds=new I,Cr=new I,Rh=new tt,va=new tt,Ch=new tt,Ri=class extends Ee{constructor(t=new ri){if(super(),this.isSprite=!0,this.type="Sprite",$i===void 0){$i=new re;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new no(e,5);$i.setIndex([0,1,2,0,2,3]),$i.setAttribute("position",new Ys(n,3,0,!1)),$i.setAttribute("uv",new Ys(n,2,3,!1))}this.geometry=$i,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Zi.setFromMatrixScale(this.matrixWorld),hu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Zi.multiplyScalar(-Ji.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Pr(Rr.set(-.5,-.5,0),Ji,o,Zi,i,s),Pr(Ds.set(.5,-.5,0),Ji,o,Zi,i,s),Pr(Cr.set(.5,.5,0),Ji,o,Zi,i,s),Rh.set(0,0),va.set(1,0),Ch.set(1,1);let a=t.ray.intersectTriangle(Rr,Ds,Cr,!1,Is);if(a===null&&(Pr(Ds.set(-.5,.5,0),Ji,o,Zi,i,s),va.set(0,1),a=t.ray.intersectTriangle(Rr,Cr,Ds,!1,Is),a===null))return;let c=t.ray.origin.distanceTo(Is);c<t.near||c>t.far||e.push({distance:c,point:Is.clone(),uv:jn.getInterpolation(Is,Rr,Ds,Cr,Rh,va,Ch,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Pr(r,t,e,n,i,s){Ki.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ls.x=s*Ki.x-i*Ki.y,Ls.y=i*Ki.x+s*Ki.y):Ls.copy(Ki),r.copy(t),r.x+=Ls.x,r.y+=Ls.y,r.applyMatrix4(hu)}var Tc=class extends Ye{constructor(t=null,e=1,n=1,i,s,o,a,c,l=Qe,h=Qe,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var $s=class extends se{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ji=new Qt,Ph=new Qt,Ir=[],Ih=new On,Hg=new Qt,Us=new it,zs=new si,we=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new $s(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Hg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),Ih.copy(t.boundingBox).applyMatrix4(ji),this.boundingBox.union(Ih)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new si),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ji),zs.copy(t.boundingSphere).applyMatrix4(ji),this.boundingSphere.union(zs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Us.geometry=this.geometry,Us.material=this.material,Us.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zs.copy(this.boundingSphere),zs.applyMatrix4(n),t.ray.intersectsSphere(zs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,ji),Ph.multiplyMatrices(n,ji),Us.matrixWorld=Ph,Us.raycast(t,Ir);for(let o=0,a=Ir.length;o<a;o++){let c=Ir[o];c.instanceId=s,c.object=this,e.push(c)}Ir.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new $s(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Tc(new Float32Array(i*this.count),i,this.count,tl,Mn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Zs=class extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Lh=new Qt,Ac=new $r,Lr=new si,Dr=new I,Ci=class extends Ee{constructor(t=new re,e=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Lr.copy(n.boundingSphere),Lr.applyMatrix4(i),Lr.radius+=s,t.ray.intersectsSphere(Lr)===!1)return;Lh.copy(i).invert(),Ac.copy(t.ray).applyMatrix4(Lh);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),p=Math.min(l.count,o.start+o.count);for(let m=d,f=p;m<f;m++){let x=l.getX(m);Dr.fromBufferAttribute(u,x),Dh(Dr,x,c,i,t,e,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let m=d,f=p;m<f;m++)Dr.fromBufferAttribute(u,m),Dh(Dr,m,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Dh(r,t,e,n,i,s,o){let a=Ac.distanceSqToPoint(r);if(a<e){let c=new I;Ac.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var rn=class extends Ye{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,p=(o-h)/d;return(i+p)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new tt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],s=[],o=[],a=new I,c=new Qt;for(let p=0;p<=t;p++){let m=p/t;i[p]=this.getTangentAt(m,new I)}s[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let p=1;p<=t;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(i[p-1],i[p]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(Ae(i[p-1].dot(i[p]),-1,1));s[p].applyMatrix4(c.makeRotationAxis(a,m))}o[p].crossVectors(i[p],s[p])}if(e===!0){let p=Math.acos(Ae(s[0].dot(s[t]),-1,1));p/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(p=-p);for(let m=1;m<=t;m++)s[m].applyMatrix4(c.makeRotationAxis(i[m],p*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Js=class extends on{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new tt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,p=l-this.aY;c=d*h-p*u+this.aX,l=d*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Rc=class extends Js{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function al(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,p*=h,i(o,a,d,p)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Ur=new I,_a=new al,ya=new al,Ma=new al,Ks=class extends on{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(Ur.subVectors(i[0],i[1]).add(i[0]),l=Ur);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Ur.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Ur),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(u),p),f=Math.pow(u.distanceToSquared(d),p),x=Math.pow(d.distanceToSquared(h),p);f<1e-4&&(f=1),m<1e-4&&(m=f),x<1e-4&&(x=f),_a.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,f,x),ya.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,f,x),Ma.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,f,x)}else this.curveType==="catmullrom"&&(_a.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ya.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Ma.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(_a.calc(c),ya.calc(c),Ma.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uh(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function Vg(r,t){let e=1-r;return e*e*t}function Gg(r,t){return 2*(1-r)*r*t}function Wg(r,t){return r*r*t}function Vs(r,t,e,n){return Vg(r,t)+Gg(r,e)+Wg(r,n)}function Xg(r,t){let e=1-r;return e*e*e*t}function qg(r,t){let e=1-r;return 3*e*e*r*t}function Yg(r,t){return 3*(1-r)*r*r*t}function $g(r,t){return r*r*r*t}function Gs(r,t,e,n,i){return Xg(r,t)+qg(r,e)+Yg(r,n)+$g(r,i)}var io=class extends on{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,i.x,s.x,o.x,a.x),Gs(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Cc=class extends on{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Gs(t,i.x,s.x,o.x,a.x),Gs(t,i.y,s.y,o.y,a.y),Gs(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},so=class extends on{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends on{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ro=class extends on{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Vs(t,i.x,s.x,o.x),Vs(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ms=class extends on{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Vs(t,i.x,s.x,o.x),Vs(t,i.y,s.y,o.y),Vs(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},oo=class extends on{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Uh(a,c.x,l.x,h.x,u.x),Uh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}},ao=Object.freeze({__proto__:null,ArcCurve:Rc,CatmullRomCurve3:Ks,CubicBezierCurve:io,CubicBezierCurve3:Cc,EllipseCurve:Js,LineCurve:so,LineCurve3:Pc,QuadraticBezierCurve:ro,QuadraticBezierCurve3:ms,SplineCurve:oo}),Ic=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ao[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ao[i.type]().fromJSON(i))}return this}},co=class extends Ic{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new so(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new ro(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new io(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new oo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){let l=new Js(t,e,n,i,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},lo=class r extends re{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ae(i,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new I,d=new tt,p=new I,m=new I,f=new I,x=0,g=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,p.x=g*1,p.y=-x,p.z=g*0,f.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(f.x,f.y,f.z);break;default:x=t[y+1].x-t[y].x,g=t[y+1].y-t[y].y,p.x=g*1,p.y=-x,p.z=g*0,m.copy(p),p.x+=f.x,p.y+=f.y,p.z+=f.z,p.normalize(),c.push(p.x,p.y,p.z),f.copy(m)}for(let y=0;y<=e;y++){let _=n+y*h*i,v=Math.sin(_),C=Math.cos(_);for(let S=0;S<=t.length-1;S++){u.x=t[S].x*v,u.y=t[S].y,u.z=t[S].x*C,o.push(u.x,u.y,u.z),d.x=y/e,d.y=S/(t.length-1),a.push(d.x,d.y);let T=c[3*S+0]*v,E=c[3*S+1],M=c[3*S+0]*C;l.push(T,E,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,C=v,S=v+t.length,T=v+t.length+1,E=v+1;s.push(C,S,E),s.push(T,E,S)}this.setIndex(s),this.setAttribute("position",new Yt(o,3)),this.setAttribute("uv",new Yt(a,2)),this.setAttribute("normal",new Yt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var oi=class r extends re{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let p=n+u/e*i;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Yt(o,3)),this.setAttribute("normal",new Yt(a,3)),this.setAttribute("uv",new Yt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},kt=class r extends re{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],p=[],m=0,f=[],x=n/2,g=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function y(){let v=new I,C=new I,S=0,T=(e-t)/n;for(let E=0;E<=s;E++){let M=[],b=E/s,P=b*(e-t)+t;for(let D=0;D<=i;D++){let U=D/i,N=U*c+a,F=Math.sin(N),B=Math.cos(N);C.x=P*F,C.y=-b*n+x,C.z=P*B,u.push(C.x,C.y,C.z),v.set(F,T,B).normalize(),d.push(v.x,v.y,v.z),p.push(U,1-b),M.push(m++)}f.push(M)}for(let E=0;E<i;E++)for(let M=0;M<s;M++){let b=f[M][E],P=f[M+1][E],D=f[M+1][E+1],U=f[M][E+1];(t>0||M!==0)&&(h.push(b,P,U),S+=3),(e>0||M!==s-1)&&(h.push(P,D,U),S+=3)}l.addGroup(g,S,0),g+=S}function _(v){let C=m,S=new tt,T=new I,E=0,M=v===!0?t:e,b=v===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,x*b,0),d.push(0,b,0),p.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let N=D/i*c+a,F=Math.cos(N),B=Math.sin(N);T.x=M*B,T.y=x*b,T.z=M*F,u.push(T.x,T.y,T.z),d.push(0,b,0),S.x=F*.5+.5,S.y=B*.5*b+.5,p.push(S.x,S.y),m++}for(let D=0;D<i;D++){let U=C+D,N=P+D;v===!0?h.push(N,N+1,U):h.push(N+1,N,U),E+=3}l.addGroup(g,E,v===!0?1:2),g+=E}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},an=class r extends kt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lc=class r extends re{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),l(n),h(),this.setAttribute("position",new Yt(s,3)),this.setAttribute("normal",new Yt(s.slice(),3)),this.setAttribute("uv",new Yt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let _=new I,v=new I,C=new I;for(let S=0;S<e.length;S+=3)p(e[S+0],_),p(e[S+1],v),p(e[S+2],C),c(_,v,C,y)}function c(y,_,v,C){let S=C+1,T=[];for(let E=0;E<=S;E++){T[E]=[];let M=y.clone().lerp(v,E/S),b=_.clone().lerp(v,E/S),P=S-E;for(let D=0;D<=P;D++)D===0&&E===S?T[E][D]=M:T[E][D]=M.clone().lerp(b,D/P)}for(let E=0;E<S;E++)for(let M=0;M<2*(S-E)-1;M++){let b=Math.floor(M/2);M%2===0?(d(T[E][b+1]),d(T[E+1][b]),d(T[E][b])):(d(T[E][b+1]),d(T[E+1][b+1]),d(T[E+1][b]))}}function l(y){let _=new I;for(let v=0;v<s.length;v+=3)_.x=s[v+0],_.y=s[v+1],_.z=s[v+2],_.normalize().multiplyScalar(y),s[v+0]=_.x,s[v+1]=_.y,s[v+2]=_.z}function h(){let y=new I;for(let _=0;_<s.length;_+=3){y.x=s[_+0],y.y=s[_+1],y.z=s[_+2];let v=x(y)/2/Math.PI+.5,C=g(y)/Math.PI+.5;o.push(v,1-C)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let _=o[y+0],v=o[y+2],C=o[y+4],S=Math.max(_,v,C),T=Math.min(_,v,C);S>.9&&T<.1&&(_<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),C<.2&&(o[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function p(y,_){let v=y*3;_.x=t[v+0],_.y=t[v+1],_.z=t[v+2]}function m(){let y=new I,_=new I,v=new I,C=new I,S=new tt,T=new tt,E=new tt;for(let M=0,b=0;M<s.length;M+=9,b+=6){y.set(s[M+0],s[M+1],s[M+2]),_.set(s[M+3],s[M+4],s[M+5]),v.set(s[M+6],s[M+7],s[M+8]),S.set(o[b+0],o[b+1]),T.set(o[b+2],o[b+3]),E.set(o[b+4],o[b+5]),C.copy(y).add(_).add(v).divideScalar(3);let P=x(C);f(S,b+0,y,P),f(T,b+2,_,P),f(E,b+4,v,P)}}function f(y,_,v,C){C<0&&y.x===1&&(o[_]=y.x-1),v.x===0&&v.z===0&&(o[_]=C/2/Math.PI+.5)}function x(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var gn=class extends co{constructor(t){super(t),this.uuid=En(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new co().fromJSON(i))}return this}},Zg={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=uu(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,p;if(n&&(s=tx(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let m=e;m<i;m+=e)u=r[m],d=r[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return js(s,o,e,a,c,p,0),o}};function uu(r,t,e,n,i){let s,o;if(i===ux(r,t,e,n)>0)for(s=t;s<e;s+=n)o=zh(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=zh(s,r[s],r[s+1],o);return o&&So(o,o.next)&&(tr(o),o=o.next),o}function Pi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(So(e,e.next)||_e(e.prev,e,e.next)===0)){if(tr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function js(r,t,e,n,i,s,o){if(!r)return;!o&&s&&rx(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Kg(r,n,i,s):Jg(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),tr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=jg(Pi(r),t,e),js(r,t,e,n,i,s,2)):o===2&&Qg(r,t,e,n,i,s):js(Pi(r),t,e,n,i,s,1);break}}}function Jg(r){let t=r.prev,e=r,n=r.next;if(_e(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,p=a>c?a>l?a:l:c>l?c:l,m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=p&&ts(i,a,s,c,o,l,m.x,m.y)&&_e(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Kg(r,t,e,n){let i=r.prev,s=r,o=r.next;if(_e(i,s,o)>=0)return!1;let a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,p=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,f=a>c?a>l?a:l:c>l?c:l,x=h>u?h>d?h:d:u>d?u:d,g=Dc(p,m,t,e,n),y=Dc(f,x,t,e,n),_=r.prevZ,v=r.nextZ;for(;_&&_.z>=g&&v&&v.z<=y;){if(_.x>=p&&_.x<=f&&_.y>=m&&_.y<=x&&_!==i&&_!==o&&ts(a,h,c,u,l,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=p&&v.x<=f&&v.y>=m&&v.y<=x&&v!==i&&v!==o&&ts(a,h,c,u,l,d,v.x,v.y)&&_e(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=p&&_.x<=f&&_.y>=m&&_.y<=x&&_!==i&&_!==o&&ts(a,h,c,u,l,d,_.x,_.y)&&_e(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=p&&v.x<=f&&v.y>=m&&v.y<=x&&v!==i&&v!==o&&ts(a,h,c,u,l,d,v.x,v.y)&&_e(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function jg(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!So(i,s)&&du(i,n,n.next,s)&&Qs(i,s)&&Qs(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),tr(n),tr(n.next),n=r=s),n=n.next}while(n!==r);return Pi(n)}function Qg(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cx(o,a)){let c=fu(o,a);o=Pi(o,o.next),c=Pi(c,c.next),js(o,t,e,n,i,s,0),js(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function tx(r,t,e,n){let i=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=uu(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(ax(l));for(i.sort(ex),s=0;s<i.length;s++)e=nx(i[s],e);return e}function ex(r,t){return r.x-t.x}function nx(r,t){let e=ix(r,t);if(!e)return t;let n=fu(e,r);return Pi(n,n.next),Pi(e,e.next)}function ix(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&ts(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Qs(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&sx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function sx(r,t){return _e(r.prev,r,t.prev)<0&&_e(t.next,r,r.next)<0}function rx(r,t,e,n){let i=r;do i.z===0&&(i.z=Dc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,ox(i)}function ox(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function Dc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function ax(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ts(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function cx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!lx(r,t)&&(Qs(r,t)&&Qs(t,r)&&hx(r,t)&&(_e(r.prev,r,t.prev)||_e(r,t.prev,t))||So(r,t)&&_e(r.prev,r,r.next)>0&&_e(t.prev,t,t.next)>0)}function _e(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function So(r,t){return r.x===t.x&&r.y===t.y}function du(r,t,e,n){let i=Nr(_e(r,t,e)),s=Nr(_e(r,t,n)),o=Nr(_e(e,n,r)),a=Nr(_e(e,n,t));return!!(i!==s&&o!==a||i===0&&zr(r,e,t)||s===0&&zr(r,n,t)||o===0&&zr(e,r,n)||a===0&&zr(e,t,n))}function zr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Nr(r){return r>0?1:r<0?-1:0}function lx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&du(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Qs(r,t){return _e(r.prev,r,r.next)<0?_e(r,t,r.next)>=0&&_e(r,r.prev,t)>=0:_e(r,t,r.prev)<0||_e(r,r.next,t)<0}function hx(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function fu(r,t){let e=new Uc(r.i,r.x,r.y),n=new Uc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function zh(r,t,e,n){let i=new Uc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function tr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Uc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function ux(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var ei=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];Nh(t),Fh(n,t);let o=t.length;e.forEach(Nh);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,Fh(n,e[c]);let a=Zg.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Nh(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function Fh(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var bn=class r extends re{constructor(t=new gn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Yt(i,3)),this.setAttribute("uv",new Yt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:p-.1,f=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:dx,_,v=!1,C,S,T,E;g&&(_=g.getSpacedPoints(h),v=!0,d=!1,C=g.computeFrenetFrames(h,!1),S=new I,T=new I,E=new I),d||(x=0,p=0,m=0,f=0);let M=a.extractPoints(l),b=M.shape,P=M.holes;if(!ei.isClockWise(b)){b=b.reverse();for(let nt=0,ht=P.length;nt<ht;nt++){let L=P[nt];ei.isClockWise(L)&&(P[nt]=L.reverse())}}let U=ei.triangulateShape(b,P),N=b;for(let nt=0,ht=P.length;nt<ht;nt++){let L=P[nt];b=b.concat(L)}function F(nt,ht,L){return ht||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ht,L)}let B=b.length,Z=U.length;function W(nt,ht,L){let Dt,lt,Et,pt=nt.x-ht.x,Ht=nt.y-ht.y,z=L.x-nt.x,A=L.y-nt.y,w=pt*pt+Ht*Ht,k=pt*A-Ht*z;if(Math.abs(k)>Number.EPSILON){let $=Math.sqrt(w),et=Math.sqrt(z*z+A*A),Q=ht.x-Ht/$,Tt=ht.y+pt/$,gt=L.x-A/et,Mt=L.y+z/et,jt=((gt-Q)*A-(Mt-Tt)*z)/(pt*A-Ht*z);Dt=Q+pt*jt-nt.x,lt=Tt+Ht*jt-nt.y;let ut=Dt*Dt+lt*lt;if(ut<=2)return new tt(Dt,lt);Et=Math.sqrt(ut/2)}else{let $=!1;pt>Number.EPSILON?z>Number.EPSILON&&($=!0):pt<-Number.EPSILON?z<-Number.EPSILON&&($=!0):Math.sign(Ht)===Math.sign(A)&&($=!0),$?(Dt=-Ht,lt=pt,Et=Math.sqrt(w)):(Dt=pt,lt=Ht,Et=Math.sqrt(w/2))}return new tt(Dt/Et,lt/Et)}let X=[];for(let nt=0,ht=N.length,L=ht-1,Dt=nt+1;nt<ht;nt++,L++,Dt++)L===ht&&(L=0),Dt===ht&&(Dt=0),X[nt]=W(N[nt],N[L],N[Dt]);let K=[],at,xt=X.concat();for(let nt=0,ht=P.length;nt<ht;nt++){let L=P[nt];at=[];for(let Dt=0,lt=L.length,Et=lt-1,pt=Dt+1;Dt<lt;Dt++,Et++,pt++)Et===lt&&(Et=0),pt===lt&&(pt=0),at[Dt]=W(L[Dt],L[Et],L[pt]);K.push(at),xt=xt.concat(at)}for(let nt=0;nt<x;nt++){let ht=nt/x,L=p*Math.cos(ht*Math.PI/2),Dt=m*Math.sin(ht*Math.PI/2)+f;for(let lt=0,Et=N.length;lt<Et;lt++){let pt=F(N[lt],X[lt],Dt);rt(pt.x,pt.y,-L)}for(let lt=0,Et=P.length;lt<Et;lt++){let pt=P[lt];at=K[lt];for(let Ht=0,z=pt.length;Ht<z;Ht++){let A=F(pt[Ht],at[Ht],Dt);rt(A.x,A.y,-L)}}}let ot=m+f;for(let nt=0;nt<B;nt++){let ht=d?F(b[nt],xt[nt],ot):b[nt];v?(T.copy(C.normals[0]).multiplyScalar(ht.x),S.copy(C.binormals[0]).multiplyScalar(ht.y),E.copy(_[0]).add(T).add(S),rt(E.x,E.y,E.z)):rt(ht.x,ht.y,0)}for(let nt=1;nt<=h;nt++)for(let ht=0;ht<B;ht++){let L=d?F(b[ht],xt[ht],ot):b[ht];v?(T.copy(C.normals[nt]).multiplyScalar(L.x),S.copy(C.binormals[nt]).multiplyScalar(L.y),E.copy(_[nt]).add(T).add(S),rt(E.x,E.y,E.z)):rt(L.x,L.y,u/h*nt)}for(let nt=x-1;nt>=0;nt--){let ht=nt/x,L=p*Math.cos(ht*Math.PI/2),Dt=m*Math.sin(ht*Math.PI/2)+f;for(let lt=0,Et=N.length;lt<Et;lt++){let pt=F(N[lt],X[lt],Dt);rt(pt.x,pt.y,u+L)}for(let lt=0,Et=P.length;lt<Et;lt++){let pt=P[lt];at=K[lt];for(let Ht=0,z=pt.length;Ht<z;Ht++){let A=F(pt[Ht],at[Ht],Dt);v?rt(A.x,A.y+_[h-1].y,_[h-1].x+L):rt(A.x,A.y,u+L)}}}V(),J();function V(){let nt=i.length/3;if(d){let ht=0,L=B*ht;for(let Dt=0;Dt<Z;Dt++){let lt=U[Dt];mt(lt[2]+L,lt[1]+L,lt[0]+L)}ht=h+x*2,L=B*ht;for(let Dt=0;Dt<Z;Dt++){let lt=U[Dt];mt(lt[0]+L,lt[1]+L,lt[2]+L)}}else{for(let ht=0;ht<Z;ht++){let L=U[ht];mt(L[2],L[1],L[0])}for(let ht=0;ht<Z;ht++){let L=U[ht];mt(L[0]+B*h,L[1]+B*h,L[2]+B*h)}}n.addGroup(nt,i.length/3-nt,0)}function J(){let nt=i.length/3,ht=0;ct(N,ht),ht+=N.length;for(let L=0,Dt=P.length;L<Dt;L++){let lt=P[L];ct(lt,ht),ht+=lt.length}n.addGroup(nt,i.length/3-nt,1)}function ct(nt,ht){let L=nt.length;for(;--L>=0;){let Dt=L,lt=L-1;lt<0&&(lt=nt.length-1);for(let Et=0,pt=h+x*2;Et<pt;Et++){let Ht=B*Et,z=B*(Et+1),A=ht+Dt+Ht,w=ht+lt+Ht,k=ht+lt+z,$=ht+Dt+z;Lt(A,w,k,$)}}}function rt(nt,ht,L){c.push(nt),c.push(ht),c.push(L)}function mt(nt,ht,L){It(nt),It(ht),It(L);let Dt=i.length/3,lt=y.generateTopUV(n,i,Dt-3,Dt-2,Dt-1);Wt(lt[0]),Wt(lt[1]),Wt(lt[2])}function Lt(nt,ht,L,Dt){It(nt),It(ht),It(Dt),It(ht),It(L),It(Dt);let lt=i.length/3,Et=y.generateSideWallUV(n,i,lt-6,lt-3,lt-2,lt-1);Wt(Et[0]),Wt(Et[1]),Wt(Et[3]),Wt(Et[1]),Wt(Et[2]),Wt(Et[3])}function It(nt){i.push(c[nt*3+0]),i.push(c[nt*3+1]),i.push(c[nt*3+2])}function Wt(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return fx(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ao[i.type]().fromJSON(i)),new r(n,t.options)}},dx={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new tt(s,o),new tt(a,c),new tt(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],p=t[i*3+1],m=t[i*3+2],f=t[s*3],x=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new tt(o,1-c),new tt(l,1-u),new tt(d,1-m),new tt(f,1-g)]:[new tt(a,1-c),new tt(h,1-u),new tt(p,1-m),new tt(x,1-g)]}};function fx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ho=class r extends Lc{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var uo=class r extends re{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,p=new I,m=new tt;for(let f=0;f<=i;f++){for(let x=0;x<=n;x++){let g=s+x/n*o;p.x=u*Math.cos(g),p.y=u*Math.sin(g),c.push(p.x,p.y,p.z),l.push(0,0,1),m.x=(p.x/e+1)/2,m.y=(p.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let f=0;f<i;f++){let x=f*(n+1);for(let g=0;g<n;g++){let y=g+x,_=y,v=y+n+1,C=y+n+2,S=y+1;a.push(_,v,S),a.push(v,C,S)}}this.setIndex(a),this.setAttribute("position",new Yt(c,3)),this.setAttribute("normal",new Yt(l,3)),this.setAttribute("uv",new Yt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Se=class r extends re{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new I,d=new I,p=[],m=[],f=[],x=[];for(let g=0;g<=n;g++){let y=[],_=g/n,v=0;g===0&&o===0?v=.5/e:g===n&&c===Math.PI&&(v=-.5/e);for(let C=0;C<=e;C++){let S=C/e;u.x=-t*Math.cos(i+S*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+S*s)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),f.push(d.x,d.y,d.z),x.push(S+v,1-_),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<e;y++){let _=h[g][y+1],v=h[g][y],C=h[g+1][y],S=h[g+1][y+1];(g!==0||o>0)&&p.push(_,v,S),(g!==n-1||c<Math.PI)&&p.push(v,C,S)}this.setIndex(p),this.setAttribute("position",new Yt(m,3)),this.setAttribute("normal",new Yt(f,3)),this.setAttribute("uv",new Yt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var er=class r extends re{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let p=0;p<=n;p++)for(let m=0;m<=i;m++){let f=m/i*s,x=p/n*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(f),u.y=(t+e*Math.cos(x))*Math.sin(f),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(f),h.y=t*Math.sin(f),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/i),l.push(p/n)}for(let p=1;p<=n;p++)for(let m=1;m<=i;m++){let f=(i+1)*p+m-1,x=(i+1)*(p-1)+m-1,g=(i+1)*(p-1)+m,y=(i+1)*p+m;o.push(f,x,y),o.push(x,g,y)}this.setIndex(o),this.setAttribute("position",new Yt(a,3)),this.setAttribute("normal",new Yt(c,3)),this.setAttribute("uv",new Yt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var fo=class r extends re{constructor(t=new ms(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new tt,h=new I,u=[],d=[],p=[],m=[];f(),this.setIndex(m),this.setAttribute("position",new Yt(u,3)),this.setAttribute("normal",new Yt(d,3)),this.setAttribute("uv",new Yt(p,2));function f(){for(let _=0;_<e;_++)x(_);x(s===!1?e:0),y(),g()}function x(_){h=t.getPointAt(_/e,h);let v=o.normals[_],C=o.binormals[_];for(let S=0;S<=i;S++){let T=S/i*Math.PI*2,E=Math.sin(T),M=-Math.cos(T);c.x=M*v.x+E*C.x,c.y=M*v.y+E*C.y,c.z=M*v.z+E*C.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let v=1;v<=i;v++){let C=(i+1)*(_-1)+(v-1),S=(i+1)*_+(v-1),T=(i+1)*_+v,E=(i+1)*(_-1)+v;m.push(C,S,E),m.push(S,T,E)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=i;v++)l.x=_/e,l.y=v/i,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new ao[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ft=class extends kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=tu,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},po=class extends Ft{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ct(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ct(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ct(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function Fr(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function px(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var gs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zc=class extends gs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ll,endingEnd:Ll}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Dl:s=t,a=2*e-n;break;case Ul:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Dl:o=t,c=2*n-e;break;case Ul:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-e)/(i-e),f=m*m,x=f*m,g=-d*x+2*d*f-d*m,y=(1+d)*x+(-1.5-2*d)*f+(-.5+d)*m+1,_=(-1-p)*x+(1.5+p)*f+.5*m,v=p*x-p*f;for(let C=0;C!==a;++C)s[C]=g*o[h+C]+y*o[l+C]+_*o[c+C]+v*o[u+C];return s}},Nc=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},Fc=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new zc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case cc:e=this.InterpolantFactoryMethodLinear;break;case Xo:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return cc;case this.InterpolantFactoryMethodSmooth:return Xo}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&px(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Xo,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,p=u+n;for(let m=0;m!==n;++m){let f=e[u+m];if(f!==e[d+m]||f!==e[p+m]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)e[d+p]=e[u+p]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};xn.prototype.TimeBufferType=Float32Array;xn.prototype.ValueBufferType=Float32Array;xn.prototype.DefaultInterpolation=cc;var Ii=class extends xn{constructor(t,e,n){super(t,e,n)}};Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Gr;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Bc=class extends xn{};Bc.prototype.ValueTypeName="color";var Oc=class extends xn{};Oc.prototype.ValueTypeName="number";var kc=class extends gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ve.slerpFlat(s,0,o,l-a,o,l,c);return s}},mo=class extends xn{InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}};mo.prototype.ValueTypeName="quaternion";mo.prototype.InterpolantFactoryMethodSmooth=void 0;var Li=class extends xn{constructor(t,e,n){super(t,e,n)}};Li.prototype.ValueTypeName="string";Li.prototype.ValueBufferType=Array;Li.prototype.DefaultInterpolation=Gr;Li.prototype.InterpolantFactoryMethodLinear=void 0;Li.prototype.InterpolantFactoryMethodSmooth=void 0;var Hc=class extends xn{};Hc.prototype.ValueTypeName="vector";var Vc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}},mx=new Vc,Gc=class{constructor(t){this.manager=t!==void 0?t:mx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Gc.DEFAULT_MATERIAL_NAME="__DEFAULT";var xs=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},go=class extends xs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Ea=new Qt,Bh=new I,Oh=new I,nr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qs,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Bh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Bh),Oh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Oh),e.updateMatrixWorld(),Ea.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ea),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ea)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wc=class extends nr{constructor(){super(new Re(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=hs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},xo=class extends xs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Wc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},kh=new Qt,Ns=new I,ba=new I,Xc=class extends nr{constructor(){super(new Re(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new de(2,1,1,1),new de(0,1,1,1),new de(3,1,1,1),new de(1,1,1,1),new de(3,0,1,1),new de(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ns.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ns),ba.copy(n.position),ba.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ba),n.updateMatrixWorld(),i.makeTranslation(-Ns.x,-Ns.y,-Ns.z),kh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kh)}},vo=class extends xs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Xc}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},qc=class extends nr{constructor(){super(new jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},_o=class extends xs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new qc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var yo=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=Hh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function Hh(){return performance.now()}var cl="\\[\\]\\.:\\/",gx=new RegExp("["+cl+"]","g"),ll="[^"+cl+"]",xx="[^"+cl.replace("\\.","")+"]",vx=/((?:WC+[\/:])*)/.source.replace("WC",ll),_x=/(WCOD+)?/.source.replace("WCOD",xx),yx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ll),Mx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ll),Ex=new RegExp("^"+vx+_x+yx+Mx+"$"),bx=["material","materials","bones","map"],Yc=class{constructor(t,e,n){let i=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gx,"")}static parseTrackName(t){let e=Ex.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);bx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=Yc;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);var ul=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function ze(r,t){return r*1e5+t}var To=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let c=0;c<a.length;c++){let l=a[c];e.set(l,(e.get(l)||0)+(c===0||c===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,c,l,h,u,d,p]=o,m=0;for(let f=1;f<d.length;f++)if(e.get(d[f])>1||f===d.length-1){let x=d.slice(m,f+1);x.length>=2&&this._addEdge(x,a,c,l,h,u,i),m=f}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let c=t.length,l=new Float32Array(c*2),h=new Float32Array(c),u=0;for(let p=0;p<c;p++)l[p*2]=this.P[t[p]*2],l[p*2+1]=this.P[t[p]*2+1],p>0&&(u+=Math.hypot(l[p*2]-l[p*2-2],l[p*2+1]-l[p*2-1])),h[p]=u;if(u<.5)return;let d={id:this.edges.length,ids:t,pts:l,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[c-1]),signals:[]};this.edges.push(d)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let c=t.cum,l=t.pts,h=0,u=c.length-1;for(;u-h>1;){let v=h+u>>1;c[v]<=a?h=v:u=v}let d=c[u]-c[h]||1e-6,p=(a-c[h])/d,m=l[h*2],f=l[h*2+1],x=l[u*2],g=l[u*2+1],y=(x-m)/d,_=(g-f)/d;return e&&(y=-y,_=-_),s.x=m+(x-m)*p-_*i,s.z=f+(g-f)*p+y*i,s.dx=y,s.dz=_,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,c=Math.min(i[s*2+1],i[s*2+3])-n.w/2,l=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(c/t);u<=Math.floor(l/t);u++){let d=ze(h,u),p=e.get(d);p||e.set(d,p=[]),p.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),c=Math.floor(e/s),l=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let d=c-o;d<=c+o;d++){let p=this.roadGrid.get(ze(u,d));if(p)for(let m=0;m<p.length;m+=2){let f=this.edges[p[m]],x=p[m+1];if(i&&!i(f))continue;let g=f.pts,y=g[x*2],_=g[x*2+1],v=g[x*2+2],C=g[x*2+3],S=v-y,T=C-_,E=S*S+T*T||1e-6,M=((t-y)*S+(e-_)*T)/E;M=M<0?0:M>1?1:M;let b=y+S*M,P=_+T*M,D=(t-b)**2+(e-P)**2;if(D<h){h=D;let U=Math.sqrt(E);l={e:f,i:x,t:M,x:b,z:P,dist:Math.sqrt(D),s:f.cum[x]+M*U,dx:S/U,dz:T/U}}}}return l&&(l.lat=(t-l.x)*-l.dz+(e-l.z)*l.dx),l}_indexChunks(t){let n=this.chunks=new Map,i=(a,c)=>{let l=Math.floor(a/400),h=Math.floor(c/400),u=ze(l,h),d=n.get(u);return d||n.set(u,d={key:u,cx:l,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[]}),d};this.globalAreas=[],this.buildings=t.buildings.map((a,c)=>{let l=a[3],h=l.length/2,u=new Float32Array(l.length),d=0,p=0,m=1e9,f=-1e9,x=1e9,g=-1e9;for(let _=0;_<l.length;_++)u[_]=l[_]*.1;for(let _=0;_<h;_++){let v=u[_*2],C=u[_*2+1];d+=v,p+=C,v<m&&(m=v),v>f&&(f=v),C<x&&(x=C),C>g&&(g=C)}let y={i:c,kind:a[0],h:a[1],minH:a[2],pts:u,cx:d/h,cz:p/h,x0:m,x1:f,z0:x,z1:g,name:a[4]||null};return i(y.cx,y.cz).buildings.push(y),y});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let c=Math.floor(a.x0/s);c<=Math.floor(a.x1/s);c++)for(let l=Math.floor(a.z0/s);l<=Math.floor(a.z1/s);l++){let h=ze(c,l),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let c=Math.floor(a.pts.length/4)*2;i(a.pts[c],a.pts[c+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let c=a[1],l=new Float32Array(c.length),h=0,u=0,d=1e9,p=-1e9,m=1e9,f=-1e9;for(let g=0;g<c.length;g++)l[g]=c[g]*.1;for(let g=0;g<c.length/2;g++){let y=l[g*2],_=l[g*2+1];h+=y,u+=_,y<d&&(d=y),y>p&&(p=y),_<m&&(m=_),_>f&&(f=_)}let x={type:a[0],pts:l,x0:d,x1:p,z0:m,z1:f};p-d>1500||f-m>1500?this.globalAreas.push(x):i(h/(c.length/2),u/(c.length/2)).areas.push(x)}this.areaList=t.areas;for(let a of t.lines){let[c,l,h]=a,u=h.length/2;for(let d=0;d<u-1;d+=23){let p=Math.min(u,d+24),m=new Float32Array((p-d)*2);for(let f=0;f<m.length;f++)m[f]=h[d*2+f]*.1;i(m[0],m[1]).lines.push({type:c,w:l,pts:m})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(c=>c*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(c=>c*.1)})),this.stands=t.stands.map(a=>a.map(c=>c*.1)),this.jet=t.jet.map(a=>a.map(c=>c*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get(ze(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&Ao(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let c of t)e.set(c[0]+","+c[1],c);let n=this.raw,i=new Set;for(let c=0;c<n.pts.length/2;c++)e.has(n.pts[c*2]+","+n.pts[c*2+1])&&i.add(c);let s=[...i].map(c=>({i:c,x:this.P[c*2],z:this.P[c*2+1],c:-1})),o=this.signalClusters=[];for(let c of s){if(c.c>=0)continue;let l={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[c];for(c.c=l.id;h.length;){let u=h.pop();l.members.push(u),l.x+=u.x,l.z+=u.z,l.n++;for(let d of s)d.c<0&&Math.hypot(d.x-u.x,d.z-u.z)<45&&(d.c=l.id,h.push(d))}l.x/=l.n,l.z/=l.n,o.push(l)}let a=new Map;for(let c of s)a.set(c.i,o[c.c]);this.controls=[];for(let c of this.edges)for(let l=0;l<c.ids.length;l++){let h=a.get(c.ids[l]);if(h)for(let u of c.ow?[0]:[0,1]){let d=u?c.len-c.cum[l]:c.cum[l],p=u===0&&l===c.ids.length-1||u===1&&l===0;if(u===0&&l===0||u===1&&l===c.ids.length-1)continue;let f=Math.max(1,d-(p?4+(u?c.na:c.nb).maxW*.5:2.5)),x={};this.sample(c,u,Math.max(0,f-3),0,x);let g=Math.atan2(x.dz,x.dx);h.axis===null&&(h.axis=g);let y=Math.abs(Math.cos(g-h.axis)),_={e:c,dir:u,de:c.id*2+u,stop:f,cluster:h,group:y>.707?0:1,ang:g,x:0,z:0};c.signals.some(v=>v.dir===u&&v.cluster===h)||(c.signals.push(_),h.controls.push(_),this.controls.push(_))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,y=>y.cls<=5),o=this.nearestRoad(n,i,400,y=>y.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let c=new Set([o.e.na.id,o.e.nb.id]),l=new hl,h=new Map,u=new Map;for(let y of a){let _=Math.hypot(y.x-t,y.z-e);h.set(y.id,_),l.push(_+Math.hypot(y.x-n,y.z-i),y)}let d=null,p=0;for(;l.size&&p++<2e5;){let y=l.pop();if(c.has(y.id)){d=y;break}let _=h.get(y.id);for(let v of y.out){let C=this.edges[v>>1];if(C.cls>5)continue;let S=v&1?C.na:C.nb,T=C.len*(1+C.cls*.08),E=_+T;E<(h.get(S.id)??1e18)&&(h.set(S.id,E),u.set(S.id,{n:y,de:v}),l.push(E+Math.hypot(S.x-n,S.z-i),S))}}if(!d)return null;let m=[o.x,o.z],f=d,x=[];for(;u.has(f.id);){let y=u.get(f.id);x.push(y.de),f=y.n}x.reverse();let g=[t,e,s.x,s.z];for(let y of x){let v=this.edges[y>>1].pts,C=v.length/2;if(y&1)for(let S=C-1;S>=0;S--)g.push(v[S*2],v[S*2+1]);else for(let S=0;S<C;S++)g.push(v[S*2],v[S*2+1])}return g.push(...m),g}};function Ao(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],c=e[s*2+1],l=e[o*2],h=e[o*2+1];c>t!=h>t&&r<(l-a)*(t-c)/(h-c)+a&&(n=!n)}return n}var hl=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let c=o*2+1,l=c+1,h=o,u=i;if(c<a&&t[c]<u&&(h=c,u=t[c]),l<a&&t[l]<u&&(h=l),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function wn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var Hn={uNight:{value:0},uTime:{value:0}};function ai(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function ci(r,t=!0,e=!0){let n=new rn(r);return t&&(n.wrapS=n.wrapT=Ws),n.anisotropy=8,e&&(n.colorSpace=Me),n.needsUpdate=!0,n}function li(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),c=a.data;for(let l=0;l<e;l+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let d=0;d<o;d++)for(let p=0;p<o;p++){let m=((l+d)*t+h+p)*4;c[m]=Math.max(0,Math.min(255,n[0]+u)),c[m+1]=Math.max(0,Math.min(255,n[1]+u)),c[m+2]=Math.max(0,Math.min(255,n[2]+u)),c[m+3]=255}}r.putImageData(a,0,0)}function pu(){let r=wn(42),t={};{let e=ai(512),n=e.getContext("2d");li(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=ci(e)}{let e=ai(512),n=e.getContext("2d");li(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=ci(e)}{let e=ai(512),n=e.getContext("2d");li(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=ci(e)}{let e=ai(512),n=e.getContext("2d");li(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=ci(e)}{let e=ai(512),n=e.getContext("2d");li(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=ci(e)}{let e=ai(512),n=e.getContext("2d");li(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=ci(e)}{let e=ai(256),n=e.getContext("2d");li(n,256,256,[60,90,100],18,r,2),t.water=ci(e)}{let e=ai(256),n=e.getContext("2d");li(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=ci(e,!0,!1)}return t}function mu(r){let t=new Ft({vertexColors:!0,roughness:.85,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=Hn.uNight,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aInfo; attribute vec2 aWin; varying vec2 vInfo; varying vec2 vWin;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vInfo = aInfo; vWin = aWin;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vInfo; varying vec2 vWin; uniform float uNight;
        float h21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }`).replace("#include <color_fragment>",`#include <color_fragment>
        float win = 0.0; float lit = 0.0; float hh = 0.0;
        float st = vInfo.x;
        if (st > 0.5) {
          vec2 cell = floor(vWin); vec2 f = fract(vWin);
          hh = h21(cell + vInfo.y);
          float ao = mix(0.62, 1.0, clamp(vWin.y*0.9, 0.0, 1.0));
          if (st < 1.5) {            // private house
            win = step(0.30,f.x)*step(f.x,0.70)*step(0.30,f.y)*step(f.y,0.72);
          } else if (st < 2.5) {     // soviet panel block
            win = step(0.16,f.x)*step(f.x,0.84)*step(0.30,f.y)*step(f.y,0.80);
            float seam = max(step(0.965,f.y), step(0.985,f.x));
            diffuseColor.rgb *= 1.0 - 0.10*seam;
            // balconies on some columns
            float bal = step(0.6, h21(vec2(cell.x, vInfo.y))) * step(0.05,f.y)*step(f.y,0.32)*step(0.1,f.x)*step(f.x,0.9);
            diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb*0.78, bal);
            if (vWin.y < 1.0) win *= 0.0;
          } else if (st < 3.5) {     // commercial glass / modern
            win = step(0.05,f.x)*step(f.x,0.95)*step(0.14,f.y)*step(f.y,0.94);
            if (vWin.y < 1.2) win = step(0.03,f.x)*step(f.x,0.97)*step(0.05,f.y)*step(f.y,0.9);
          } else if (st < 4.5) {     // industrial
            win = step(0.1,f.x)*step(f.x,0.9)*step(0.62,f.y)*step(f.y,0.85) * step(0.5, h21(vec2(cell.x,3.0)+vInfo.y));
            diffuseColor.rgb *= 0.9 + 0.1*step(0.5, fract(vWin.x*2.0));
          } else if (st < 5.5) {     // public / marble
            win = step(0.28,f.x)*step(f.x,0.72)*step(0.2,f.y)*step(f.y,0.85);
            diffuseColor.rgb *= 0.93 + 0.07*step(0.5,fract(vWin.x*0.5+0.25));
          } else if (st < 6.5) {     // airport terminal glass
            win = step(0.02,f.x)*step(f.x,0.98)*step(0.06,f.y)*step(f.y,0.96);
          }
          vec3 glass = mix(vec3(0.05,0.07,0.09), vec3(0.22,0.28,0.33), hh*0.7);
          if (st > 2.5 && st < 3.5) glass = mix(vec3(0.06,0.12,0.16), vec3(0.2,0.35,0.42), hh);
          if (st > 5.5) glass = vec3(0.12,0.2,0.26);
          diffuseColor.rgb = mix(diffuseColor.rgb * ao, glass, win);
          lit = win * step(0.5, hh) * uNight;
          if (st > 5.5 || (st > 2.5 && st < 3.5 && vWin.y < 1.2)) lit = win * uNight * 0.8;
          if (st > 2.5 && st < 3.5 && vWin.y >= 1.2) lit *= step(0.75, hh);
        } else {
          // roofs: subtle tar patches
          diffuseColor.rgb *= 0.9 + 0.1*h21(floor(vWin*0.5));
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, 0.08, win);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.55, win*(1.0-lit));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.66,0.32), vec3(0.75,0.82,1.0), step(0.85,hh)) * (0.25 + 0.55*fract(hh*7.13));`)},t}function Vn(r,t,e,n=16777215,i=.95){let s=new Ft({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWXZ = (modelMatrix*vec4(transformed,1.0)).xz;`),o.fragmentShader=o.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWXZ;
        float vn(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.0-2.0*f);
          float a=fract(sin(dot(i,vec2(127.1,311.7)))*43758.5), b=fract(sin(dot(i+vec2(1,0),vec2(127.1,311.7)))*43758.5),
          c=fract(sin(dot(i+vec2(0,1),vec2(127.1,311.7)))*43758.5), d=fract(sin(dot(i+vec2(1,1),vec2(127.1,311.7)))*43758.5);
          return mix(mix(a,b,f.x),mix(c,d,f.x),f.y); }`).replace("#include <map_fragment>",`
        vec4 tA = texture2D(map, vWXZ / ${e.toFixed(2)});
        vec4 tB = texture2D(map, vWXZ / ${(e*3.7).toFixed(2)} + 0.37);
        float mac = vn(vWXZ/60.0)*0.6 + vn(vWXZ/9.0)*0.4;
        diffuseColor *= mix(tA, tB, 0.35) * (0.82 + 0.3*mac);`)},s}function gu(){let r=new Ft({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var Ge=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,c,l,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,c,l),h)for(let u in h){let d=h[u],p=this.extra[u].data;for(let m=0;m<d.length;m++)p.push(d[m])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new re;t.setAttribute("position",new Yt(this.p,3)),t.setAttribute("normal",new Yt(this.n,3)),t.setAttribute("color",new Yt(this.c,3));for(let e in this.extra)t.setAttribute(e,new Yt(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new ds(this.i,1):new us(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function dl(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let f=Math.hypot(i,s)||1;i/=f,s/=f}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let f=Math.hypot(o,a)||1;o/=f,a/=f}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let c=i+o,l=s+a,h=Math.hypot(c,l);h<1e-4?(c=o,l=a):(c/=h,l/=h);let u=-l,d=c,p=u*-a+d*o,m=Math.min(3,1/Math.max(.33,p));e[n*3]=u,e[n*3+1]=d,e[n*3+2]=m}return e}function fl(r,t,e,n){let i=[],s=r.length/2,o=l=>{let h=0;for(;h<s-2&&t[h+1]<l;)h++;let u=t[h+1]-t[h]||1e-6,d=Math.max(0,Math.min(1,(l-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*d,r[h*2+1]+(r[h*2+3]-r[h*2+1])*d]},a=o(e);i.push(a[0],a[1]);for(let l=1;l<s-1;l++)t[l]>e&&t[l]<n&&i.push(r[l*2],r[l*2+1]);let c=o(n);return i.push(c[0],c[1]),i}function xu(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function We(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let c=dl(t),l=0,h=-1,u=-1;for(let d=0;d<a;d++){d>0&&(l+=Math.hypot(t[d*2]-t[d*2-2],t[d*2+1]-t[d*2-1]));let p=c[d*3],m=c[d*3+1],f=c[d*3+2],x=t[d*2],g=t[d*2+1],y=r.v(x+p*e*f,i,g+m*e*f,0,1,0,s[0],s[1],s[2],o&&{aDash:o(l,0)}),_=r.v(x+p*n*f,i,g+m*n*f,0,1,0,s[0],s[1],s[2],o&&{aDash:o(l,1)});h>=0&&r.quad(h,u,_,y),h=y,u=_}}function vu(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),c=-1,l=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,d=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);l>=0?r.tri(a,l,d):c=d,l=d}r.tri(a,l,c)}function Sn(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function yu(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,c=new re,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in u.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(u.attributes[p]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in u.morphAttributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(u.morphAttributes[p])}if(t){let p;if(e)p=u.index.count;else if(u.attributes.position!==void 0)p=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,p,h),l+=p}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let p=r[d].index;for(let m=0;m<p.count;++m)u.push(p.getX(m)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=_u(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let p=[];for(let f=0;f<o[h].length;++f)p.push(o[h][f][d]);let m=_u(p);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}return c}function _u(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new se(o,e,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,p=h.count;d<p;d++)for(let m=0;m<e;m++){let f=h.getComponent(d,m);a.setComponent(d+u,m,f)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function St(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new Ct(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new se(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function fe(r){let t=yu(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function Ms(r,t,e,n=1,i=1,s=1){let o=new ho(r,t),a=o.attributes.position;for(let c=0;c<a.count;c++){let l=a.getX(c),h=a.getY(c),u=a.getZ(c),d=1+(Math.sin(l*3.1+h*1.7)*.5+Math.sin(u*2.3-h*2.9)*.5)*.12+(e()-.5)*.08;a.setXYZ(c,l*d*n,h*d*i,u*d*s)}return o.computeVertexNormals(),o}function Ro(r,t,e,n){let i=r.attributes.position,s=r.attributes.normal;for(let o=0;o<i.count;o++){let a=new I(i.getX(o)-t,(i.getY(o)-e)*.8,i.getZ(o)-n).normalize(),c=new I(s.getX(o),s.getY(o),s.getZ(o));a.lerp(c,.08).normalize(),s.setXYZ(o,a.x,a.y,a.z)}}function ys(r,t,e,n){let i=new Ct(t),s=r.attributes.position,o=new Float32Array(s.count*3);for(let a=0;a<s.count;a++){let l=.55+.6*Math.max(0,Math.min(1,(s.getY(a)-e)/(n-e)));o[a*3]=i.r*l,o[a*3+1]=i.g*l,o[a*3+2]=i.b*l}r.setAttribute("color",new se(o,3))}function Mu(){let r=wn(11),t=[];{let e=St(new kt(.16,.26,3.4,6).translate(0,1.7,0),5916210),n=[];for(let[s,o,a,c]of[[0,5.2,0,2.6],[1.3,4.6,.4,1.8],[-1.2,4.8,-.5,1.9],[.3,6.3,-.8,1.7],[-.4,4.4,1.2,1.6]]){let l=Ms(c,1,r).translate(s,o,a);n.push(l)}let i=fe(n);Ro(i,0,5,0),ys(i,5012014,3,7.5),t.push(fe([e,i]))}{let e=St(new kt(.15,.28,3,6).translate(0,1.5,0),6969928),n=Ms(1,2,r,1.3,7.5,1.3).translate(0,9.5,0);Ro(n,0,9.5,0),ys(n,4551212,3,16),t.push(fe([e,n]))}{let e=St(new kt(.12,.22,2,6).translate(0,1,0),4864040),n=[];for(let s=0;s<4;s++)n.push(new an(2.4-s*.5,3,8).translate(0,2.6+s*1.7,0));let i=fe(n);ys(i,3103292,1,9),t.push(fe([e,i]))}{let e=St(new kt(.22,.38,3.2,7).translate(0,1.6,0),5127210),n=[];for(let[s,o,a,c]of[[0,6,0,3.4],[2,5.2,1,2.3],[-2,5.4,-.6,2.4],[.5,7.4,1,2.2],[-.8,5,2,2.2],[.8,5,-2.1,2.1]])n.push(Ms(c,1,r).translate(s,o,a));let i=fe(n);Ro(i,0,6,0),ys(i,4353578,3,9.5),t.push(fe([e,i]))}return t}function Eu(){let r=wn(12),t=(n,i,s,o)=>St(new kt(n,i,s,4).translate(0,s/2,0),o),e=(n,i,s,o)=>(Ro(n,0,(s+o)/2,0),ys(n,i,s,o),n);return[fe([t(.16,.26,3.4,5916210),e(Ms(1,1,r,3,2.3,3).translate(0,5.2,0),5012014,3,7.5)]),fe([t(.15,.28,3,6969928),e(Ms(1,1,r,1.3,7.5,1.3).translate(0,9.5,0),4551212,3,16)]),fe([t(.12,.22,2,4864040),(()=>{let n=fe([new an(2.4,5,6).translate(0,3.6,0),new an(1.5,4,6).translate(0,6.6,0)]);return ys(n,3103292,1,9),n})()]),fe([t(.22,.38,3.2,5127210),e(Ms(1,1,r,3.8,2.8,3.8).translate(0,6,0),4353578,3,9.5)])]}function bu(){let r=St(new kt(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=St(new Ot(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=St(new Ot(.35,.14,.7).translate(0,8.35,-2.1),3948354);return fe([r,t,e])}function wu(){return St(new Ot(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function Su(){let r=St(new kt(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=St(new Ot(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(St(new Ot(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=St(new Ot(.44,1.15,.02).translate(0,3.5,-.16),14540253);return fe([r,t,n,...e])}function Tu(r){return St(new oi(.12,12).translate(0,3.83-r*.33,.155),16777215)}function Au(){return fe([St(new Ot(1.8,.06,.45).translate(0,.45,0),8017460),St(new Ot(1.8,.4,.05).translate(0,.72,-.2),8017460),St(new Ot(.06,.45,.45).translate(-.8,.22,0),3355443),St(new Ot(.06,.45,.45).translate(.8,.22,0),3355443)])}function Ru(){return fe([St(new Ot(3.6,.08,1.6).translate(0,2.5,0),2973324),St(new Ot(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),St(new Ot(.08,2.5,1.5).translate(1.75,1.25,0),8952234),St(new Ot(3.5,1.8,.05).translate(0,1.4,-.72),10467012),St(new Ot(3,.08,.4).translate(0,.5,-.5),5592405)])}var hi={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]},wx={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},Sx={0:1/140,2:1/45,7:1/120,1:0},Co=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new ee,t.add(this.root),this.mat={building:mu(n),road:Vn(n,n.asphalt,7,16777215,.92),mark:gu(),paving:Object.assign(Vn(n,n.paving,3.2,12104876,.9),{side:Ce}),grass:Vn(n,n.grass,6,16777215,1),dirt:Vn(n,n.dirt,7,16777215,1),field:Vn(n,n.field,14,16777215,1),asphalt:Vn(n,n.asphalt,7,16777215,.92),concrete:Vn(n,n.concrete,20,13158596,.85),water:new Ft({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:new Ft({vertexColors:!0,roughness:.9}),lamp:new Ft({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new Ft({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new Ft({vertexColors:!0,roughness:.6}),rail:new Ft({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=Mu(),this.geoTreesLow=Eu(),this.geoLamp=bu(),this.geoLampGlow=wu(),this.geoBus=Ru(),this.geoBench=Au(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new be(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new se(n,3));let i=Vn(this.T,this.T.dirt,9,11843744,1);this.ground=new it(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new it(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),c=Math.floor((i+o)/400),l=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let p=a;p<=c;p++)for(let m=l;m<=h;m++){let f=ze(p,m);if(this.live.has(f))continue;let x=this.map.chunks.get(f);if(!x)continue;let g=Math.hypot((p+.5)*400-i,(m+.5)*400-s);g<o&&u.push([g,x])}u.sort((p,m)=>p[0]-m[0]);let d=performance.now();for(let[p,m]of u)if(this._buildChunk(m),!n&&performance.now()-d>(this.radius>2e3?14:8))break;for(let[p,m]of this.live){let f=Math.hypot(m.x-i,m.z-s);if(f>o+900){this._dispose(p,m);continue}m.group.visible=f<o+300,m.detail&&(m.detail.visible=f<650),m.trees&&(m.trees.visible=f<280,m.treesLow.visible=f>=280&&f<1400),m.marks&&(m.marks.visible=f<700)}}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),c=Math.floor(Math.min(e,i)/s),l=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=c;u<=l;u++){let d=ze(h,u),p=this.collision.get(d);p||this.collision.set(d,p=[]),p.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=wn(t.key*7+13),i=new ee,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new Ge({aInfo:2,aWin:2});for(let M of t.buildings)this._building(a,M,n,o);if(!a.empty){let M=new it(a.build(),this.mat.building);M.castShadow=!0,M.receiveShadow=!0,i.add(M)}let c=new Ge,l=new Ge,h=new Ge({aDash:2}),u=[1,1,1],d=Sn(15253568),p=[.92,.92,.9];for(let M of t.edges){let b=.03+(6-M.cls)*.005;We(c,M.pts,-M.w/2,M.w/2,b,[1,1,1]);let P=M.na.deg>1?M.na.maxW/2+1.5:0,D=M.nb.deg>1?M.nb.maxW/2+1.5:0;if(M.len-P-D<2)continue;let U=fl(M.pts,M.cum,P,M.len-D),N=b+.004,F=(B,Z,W=.15,X=p)=>We(h,U,B-W/2,B+W/2,N,X,K=>[K,Z]);if(M.cls<=4){if(M.ow)for(let B=1;B<M.lanes;B++)F(-M.w/2+B*3.3,1);else if(M.lanes>=2){F(-.12,0),F(.12,0);for(let B=1;B<M.lanes;B++)F(B*3.3,1),F(-B*3.3,1)}else M.cls<=4&&M.w>=6&&F(0,1);M.cls<=2&&(F(M.w/2-.35,0,.12),F(-M.w/2+.35,0,.12))}for(let B of M.signals){let Z={};e.sample(M,B.dir,B.stop,0,Z);let W=B.dir?-1:1,X=(M.ow,M.w/2),K=M.ow?-X:0,at=X,xt=-Z.dz,ot=Z.dx,V=[Z.x+xt*K,Z.z+ot*K,Z.x+xt*at,Z.z+ot*at];We(h,V,-.25,.25,N+.001,p,()=>[0,0])}if(M.cls>=1&&M.cls<=4&&M.w>=5){let B=M.na.deg>1?M.na.maxW/2+2.5:0,Z=M.nb.deg>1?M.nb.maxW/2+2.5:0;if(M.len-B-Z>3){let W=fl(M.pts,M.cum,B,M.len-Z),X=M.cls<=2?3.4:2.6;for(let K of[-1,1]){let at=K>0?M.w/2:-M.w/2-X,xt=K>0?M.w/2+X:-M.w/2;We(l,W,at,xt,.15,[1,1,1]),this._curb(l,W,K>0?M.w/2:-M.w/2,K)}}}}for(let M of t.nodes){let b=.03+M.top*.005+.002;vu(c,M.x,M.z,M.maxW/2*1.08,b,[1,1,1],16)}for(let[M,b]of t.crossings){let P=e.nearestRoad(M,b,4);if(!P||P.e.cls>4||P.e.w<5)continue;let D=.03+(6-P.e.cls)*.005+.006,U=-P.dz,N=P.dx,F=P.e.w/2,B=[P.x-U*F,P.z-N*F,P.x+U*F,P.z+N*F];We(h,B,-2,2,D,p,Z=>[Z*2,2])}if(!c.empty){let M=new it(c.build(),this.mat.road);M.receiveShadow=!0,i.add(M)}if(!l.empty){let M=new it(l.build(),this.mat.paving);M.receiveShadow=!0,i.add(M),s.detail=M}if(!h.empty){let M=new it(h.build(),this.mat.mark);M.receiveShadow=!0,i.add(M),s.marks=M}let m={},f=[[],[],[],[]];for(let M of t.areas)this._area(m,M,n,f);for(let M of t.lines)this._line(m,M,n,f);for(let M in m){let b=new it(m[M].build(),this.mat[M]);b.receiveShadow=!0,i.add(b)}let x=[];for(let M of t.edges){if(M.cls<1||M.cls>4)continue;let b=M.cls<=2?9:11,P=M.w/2+(M.cls<=2?4.2:3.4);for(let D=6+n()*5;D<M.len-6;D+=b+n()*5)for(let U of[-1,1]){if(n()<(M.cls<=3?.18:.4))continue;let N={};if(e.sample(M,0,D,P*U,N),this._blocked(N.x,N.z,M,2.2))continue;let F=M.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;f[F].push(N.x,N.z,.75+n()*.5,n()*6.28)}if(M.cls<=3)for(let D=10;D<M.len-8;D+=34)for(let U of M.cls<=1?[-1,1]:[1]){let N={};if(e.sample(M,0,D,(M.w/2+.6)*U,N),this._blocked(N.x,N.z,M,.8))continue;let F=Math.atan2(-N.dz*U,N.dx*U);x.push(N.x,N.z,F)}}for(let M of t.trees)f[n()<.5?0:3].push(M[0],M[1],.8+n()*.4,n()*6.28);let g=new ee,y=new ee,_=new Qt,v=new Ve,C=new I,S=new I,T=new I(0,1,0),E=new Ct;for(let M=0;M<4;M++){let b=f[M],P=b.length/4;if(!P)continue;let D=new we(this.geoTrees[M],this.mat.tree,P);for(let N=0;N<P;N++){let F=b[N*4+2];v.setFromAxisAngle(T,b[N*4+3]),_.compose(C.set(b[N*4],0,b[N*4+1]),v,S.set(F,F*(.9+n()*.25),F)),D.setMatrixAt(N,_);let B=.8+n()*.35;D.setColorAt(N,E.setRGB(B*(.9+n()*.25),B,B*(.85+n()*.2)))}D.castShadow=!0,D.receiveShadow=!0,D.computeBoundingSphere(),g.add(D);let U=new we(this.geoTreesLow[M],this.mat.tree,P);U.instanceMatrix.copy(D.instanceMatrix),U.instanceColor=D.instanceColor,U.castShadow=!0,U.computeBoundingSphere(),y.add(U)}if(i.add(g,y),s.trees=g,s.treesLow=y,x.length){let M=x.length/3,b=new we(this.geoLamp,this.mat.lamp,M),P=new we(this.geoLampGlow,this.mat.lampGlow,M);for(let D=0;D<M;D++)v.setFromAxisAngle(T,x[D*3+2]),_.compose(C.set(x[D*3],0,x[D*3+1]),v,S.set(1,1,1)),b.setMatrixAt(D,_),P.setMatrixAt(D,_);b.castShadow=!0,b.computeBoundingSphere(),P.computeBoundingSphere(),i.add(b,P)}if(t.busstops.length){let M=[];for(let[b,P]of t.busstops){let D=e.nearestRoad(b,P,25,W=>W.cls<=4);if(!D)continue;let U=D.lat>=0?1:-1,N=D.e.w/2+2.2,F=D.x+-D.dz*N*U,B=D.z+D.dx*N*U;if(e.insideBuilding(F,B,.5))continue;let Z=e.nearestRoad(F,B,12);Z&&Z.dist<Z.e.w/2+1||M.push(F,B,Math.atan2(D.dx*U,D.dz*U)+Math.PI)}if(M.length){let b=new we(this.geoBus,this.mat.prop,M.length/3);for(let P=0;P<M.length/3;P++)v.setFromAxisAngle(T,M[P*3+2]),_.compose(C.set(M[P*3],.15,M[P*3+1]),v,S.set(1,1,1)),b.setMatrixAt(P,_);b.castShadow=!0,b.computeBoundingSphere(),i.add(b)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=dl(e),o=e.length/2,a=-1,c=-1;for(let l=0;l<o;l++){let h=s[l*3],u=s[l*3+1],d=s[l*3+2],p=e[l*2]+h*n*d,m=e[l*2+1]+u*n*d,f=-h*i,x=-u*i,g=t.v(p,.15,m,f,0,x,.85,.85,.83),y=t.v(p,0,m,f,0,x,.6,.6,.6);a>=0&&(i>0?t.quad(c,y,g,a):t.quad(c,a,g,y)),a=g,c=y}}_area(t,e,n,i){let s=wx[e.type];if(!s)return;let[o,a,c]=s,l=t[o]||(t[o]=new Ge),h=e.pts,u=h.length/2,d=[];for(let g=0;g<u;g++)d.push(new tt(h[g*2],h[g*2+1]));let p;try{p=ei.triangulateShape(d,[])}catch{return}let m=Sn(a),f=l.vc;for(let g=0;g<u;g++)l.v(h[g*2],c,h[g*2+1],0,1,0,m[0],m[1],m[2]);for(let g of p){let[y,_,v]=g,C=h[y*2],S=h[y*2+1],T=h[_*2],E=h[_*2+1],M=h[v*2],b=h[v*2+1];(T-C)*(b-S)-(E-S)*(M-C)<0?l.tri(f+y,f+_,f+v):l.tri(f+y,f+v,f+_)}let x=Sx[e.type];if(i&&x&&n){let g=(e.x1-e.x0)*(e.z1-e.z0),y=Math.min(500,Math.floor(g*x)),_=y*3;for(;y>0&&_-- >0;){let v=e.x0+n()*(e.x1-e.x0),C=e.z0+n()*(e.z1-e.z0);if(!Ao(v,C,h))continue;let S=this.map.nearestRoad(v,C,10);if(S&&S.dist<S.e.w/2+2||this.map.insideBuilding(v,C,1.5))continue;let T=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[T].push(v,C,.7+n()*.6,n()*6.28),y--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new Ge);We(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new Ge);We(o,s,-e.w/2,e.w/2,.005,Sn(6982288));let a=t.dirt||(t.dirt=new Ge);We(a,s,-e.w/2-2.5,-e.w/2,.004,Sn(10129528)),We(a,s,e.w/2,e.w/2+2.5,.004,Sn(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new Ge);We(o,s,-1.8,1.8,.02,Sn(6971992));let a=t.rail||(t.rail=new Ge);We(a,s,-.78,-.7,.16,[1,1,1]),We(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new Ge);We(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new Ge({aDash:2}));We(a,s,-.08,.08,.03,Sn(15253552),c=>[c,0])}else if(e.type===5&&i){let o=xu(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let c=0;for(;c<o.length-2&&o[c+1]<a;)c++;let l=(a-o[c])/(o[c+1]-o[c]||1);i[n()<.6?1:0].push(s[c*2]+(s[c*2+2]-s[c*2])*l,s[c*2+1]+(s[c*2+3]-s[c*2+1])*l,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let F=0;F<o;F++){let B=(F+1)%o;a+=s[F*2]*s[B*2+1]-s[B*2]*s[F*2+1]}let c=Math.abs(a)/2,l=e.kind,h=e.h,u=e.minH,d,p,m=3,f=3.2,x=F=>F[Math.floor(n()*F.length)];switch(l===0&&(l=h<7.5?1:h>35?3:2),l){case 1:d=1,p=x(hi.house),f=3.6;break;case 2:d=2,p=x(hi.panel),f=3.1;break;case 3:d=3,p=x(hi.comm),f=2.2,m=3.6;break;case 4:d=4,p=x(hi.ind),f=4,m=4;break;case 5:d=0,p=9077880;break;case 6:d=0,p=10132122;break;case 7:d=5,p=x(hi.pub),f=3.4,m=3.8;break;case 8:d=5,p=15921128;break;case 9:d=4,p=11052188;break;case 10:d=6,p=13160664,f=2.5,m=4;break;default:d=2,p=x(hi.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(d=5,p=15262940);let g=Sn(p),y=.92+n()*.12,_=g[0]*y,v=g[1]*y,C=g[2]*y,S=n()*100,T=(F,B)=>({aInfo:[d,S],aWin:[F,B]}),E=a>0?1:-1,M=0;for(let F=0;F<o;F++){let B=(F+1)%o,Z=s[F*2],W=s[F*2+1],X=s[B*2],K=s[B*2+1],at=X-Z,xt=K-W,ot=Math.hypot(at,xt);if(ot<.05)continue;let V=xt/ot*E,J=-at/ot*E,ct=Math.max(1,Math.round(ot/f)),rt=0,mt=(h-u)/m,Lt=t.v(Z,u,W,V,0,J,_,v,C,T(0,rt)),It=t.v(X,u,K,V,0,J,_,v,C,T(ct,rt)),Wt=t.v(X,h,K,V,0,J,_,v,C,T(ct,mt)),nt=t.v(Z,h,W,V,0,J,_,v,C,T(0,mt));E>0?(t.tri(Lt,Wt,It),t.tri(Lt,nt,Wt)):(t.tri(Lt,It,Wt),t.tri(Lt,Wt,nt)),i&&h>1.5&&this.addWall(Z,W,X,K),M+=ot}if(l===1&&c<260&&o<=8){this._gableRoof(t,e,h,g,n,c);return}let P=[];for(let F=0;F<o;F++)P.push(new tt(s[F*2],s[F*2+1]));let D;try{D=ei.triangulateShape(P,[])}catch{return}let U=l===10?[.55,.57,.6]:l===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],N=t.vc;for(let F=0;F<o;F++)t.v(s[F*2],h,s[F*2+1],0,1,0,U[0],U[1],U[2],{aInfo:[0,S],aWin:[s[F*2],s[F*2+1]]});for(let F of D){let[B,Z,W]=F,X=s[B*2],K=s[B*2+1],at=s[Z*2],xt=s[Z*2+1],ot=s[W*2],V=s[W*2+1];(at-X)*(V-K)-(xt-K)*(ot-X)<0?t.tri(N+B,N+Z,N+W):t.tri(N+B,N+W,N+Z)}if((l===2||l===3)&&c>350&&h>12){let F=Math.min(3,Math.floor(c/400));for(let B=0;B<F;B++){let Z=(B+.5)/F,W=e.x0+(e.x1-e.x0)*Z,X=e.z0+(e.z1-e.z0)*Z;Ao(W,X,s)&&this._box(t,W,h,X,2.6,2.4,3.2,[U[0]*1.3,U[1]*1.3,U[2]*1.3],S)}}}_box(t,e,n,i,s,o,a,c,l){let h=s/2,u=a/2,d=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],p={aInfo:[0,l],aWin:[0,0]};for(let f=0;f<4;f++){let[x,g]=d[f],[y,_]=d[(f+1)%4],v=y-x,C=_-g,S=Math.hypot(v,C),T=C/S,E=-v/S,M=t.v(x,n,g,T,0,E,c[0],c[1],c[2],p),b=t.v(y,n,_,T,0,E,c[0],c[1],c[2],p),P=t.v(y,n+o,_,T,0,E,c[0],c[1],c[2],p),D=t.v(x,n+o,g,T,0,E,c[0],c[1],c[2],p);t.tri(M,P,b),t.tri(M,D,P)}let m=d.map(([f,x])=>t.v(f,n+o,x,0,1,0,c[0],c[1],c[2],p));t.tri(m[0],m[2],m[1]),t.tri(m[0],m[3],m[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,c=a.length/2,l=0,h=1,u=0;for(let X=0;X<c;X++){let K=(X+1)%c,at=a[K*2]-a[X*2],xt=a[K*2+1]-a[X*2+1],ot=Math.hypot(at,xt);ot>l&&(l=ot,h=at/ot,u=xt/ot)}let d=-u,p=h,m=1e9,f=-1e9,x=1e9,g=-1e9;for(let X=0;X<c;X++){let K=a[X*2]*h+a[X*2+1]*u,at=a[X*2]*d+a[X*2+1]*p;m=Math.min(m,K),f=Math.max(f,K),x=Math.min(x,at),g=Math.max(g,at)}let y=.35;m-=y,f+=y,x-=y,g+=y;let _=(X,K)=>[X*h+K*d,X*u+K*p],v=Math.min(2.6,(g-x)*.38),C=(x+g)/2,S=Sn(hi.roofHouse[Math.floor(s()*hi.roofHouse.length)]),T={aInfo:[0,0],aWin:[0,0]},E=n-.05,M=_(m,x),b=_(f,x),P=_(f,g),D=_(m,g),U=_(m,C),N=_(f,C),F=(X,K,at,xt,ot)=>{let V=(C-(ot<0?x:g)===0,1),J=v/((g-x)/2),ct=d*ot*J,rt=p*ot*J,mt=Math.hypot(ct,1,rt),Lt=t.v(X[0],E,X[1],ct/mt,V/mt,rt/mt,S[0],S[1],S[2],T),It=t.v(K[0],E,K[1],ct/mt,V/mt,rt/mt,S[0],S[1],S[2],T),Wt=t.v(at[0],E+v,at[1],ct/mt,V/mt,rt/mt,S[0]*1.1,S[1]*1.1,S[2]*1.1,T),nt=t.v(xt[0],E+v,xt[1],ct/mt,V/mt,rt/mt,S[0]*1.1,S[1]*1.1,S[2]*1.1,T);return[Lt,It,Wt,nt]},B=F(M,b,N,U,-1),Z=F(P,D,U,N,1),W=X=>{let[K,at,xt]=X.map(Lt=>[t.p[Lt*3],t.p[Lt*3+1],t.p[Lt*3+2]]),ot=at[0]-K[0],V=at[1]-K[1],J=at[2]-K[2],ct=xt[0]-K[0],rt=xt[1]-K[1],mt=xt[2]-K[2];return J*ct-ot*mt>0};for(let X of[B,Z])W(X)?(t.tri(X[0],X[1],X[2]),t.tri(X[0],X[2],X[3])):(t.tri(X[0],X[2],X[1]),t.tri(X[0],X[3],X[2]));for(let[X,K,at,xt]of[[M,D,U,-1],[b,P,N,1]]){let ot=h*xt,V=u*xt,J=t.v(X[0],E,X[1],ot,0,V,i[0],i[1],i[2],T),ct=t.v(K[0],E,K[1],ot,0,V,i[0],i[1],i[2],T),rt=t.v(at[0],E+v,at[1],ot,0,V,i[0],i[1],i[2],T);t.tri(J,ct,rt),t.tri(J,rt,ct)}}setNight(t){Hn.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),c=Math.floor((e-n)/s),l=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,d=e;for(let p=o;p<=a;p++)for(let m=c;m<=l;m++){let f=this.collision.get(ze(p,m));if(f)for(let x=0;x<f.length;x+=4){let g=f[x],y=f[x+1],_=f[x+2],v=f[x+3],C=_-g,S=v-y,T=C*C+S*S||1e-6,E=((u-g)*C+(d-y)*S)/T;E=E<0?0:E>1?1:E;let M=g+C*E,b=y+S*E,P=u-M,D=d-b,U=Math.hypot(P,D);if(U<n&&U>1e-5){let N=n-U;u+=P/U*N,d+=D/U*N,i.nx+=P/U,i.nz+=D/U,h=!0}}}if(h){i.x=u-t,i.z=d-e;let p=Math.hypot(i.nx,i.nz)||1;i.nx/=p,i.nz/=p}return h}};var Es=class r extends it{constructor(){let t=r.SkyShader,e=new Pe({name:t.name,uniforms:rl.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Oe,depthWrite:!1});super(new Ot(1,1,1),e),this.isSky=!0}};Es.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var Po=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new Ai,this.bgCam=new Re(60,1,50,2e5),this.sky=new Es,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85,this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new I,this.sun=new _o(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new go(12572927,6971464,1),e.add(this.hemi),e.fog=new eo(13162208,300,2600),this.pmrem=new ps(t),this.envScene=new Ai,this.envSky=new Es,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=wn(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new re;i.setAttribute("position",new se(n,3)),this.starMat=new Zs({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Ci(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=wn(99),e=260,n=70,i=new be(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let d=0,p=1,m=1/9e3;for(let f=0;f<6;f++)d+=p*(Math.sin(h*m+f*1.7)*Math.cos(u*m*1.3-f)+Math.sin((h+u)*m*.7+f*3.1)*.6),p*=.5,m*=2.1;return d};for(let h=0;h<s.count;h++){let u=s.getX(h),p=s.getZ(h)+26e3+26e3,m=p-26e3,f=Math.min(1,Math.max(0,(m+6e3)/14e3)),x=Math.exp(-((m-16e3)**2)/(2*9e3**2)),g=f*f*900+x*3400*(.75+.35*o(u,p))+Math.abs(o(u*1.7,p*1.7))*600*f;g*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,g-120),p)}i.computeVertexNormals();let a=new be(22e4,3e4,160,20).rotateX(-Math.PI/2),c=a.attributes.position;for(let h=0;h<c.count;h++){let u=c.getX(h),d=c.getZ(h)-7e4,p=Math.max(0,(Math.abs(d+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,d*.6)))*Math.min(1,-(d+55e3)/12e3));c.setXYZ(h,u,p-80,d)}a.computeVertexNormals(),this.mtnMat=new Pe({uniforms:{sunDir:{value:new I(0,1,0)},fogCol:{value:new Ct(13162208)},light:{value:1},camPos:{value:new I}},vertexShader:`varying vec3 vN; varying vec3 vW;
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
        }`,fog:!1}),this.mountains=new it(i,this.mtnMat),this.hills=new it(a,this.mtnMat);let l=new it(new be(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);l.position.y=-6,this.plain=l,this.bg.add(this.mountains,this.hills,l)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let l=Ue.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-Ue.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*l,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),l<.15&&(this.sun.intensity=.55*(1-l/.15)+3.2*l,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*l,this.hemi.color.setRGB(.55+.2*l,.62+.22*l,.85+.1*l).multiplyScalar(.5+.5*l),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+l),.38*(.3+l),.3*(.3+l));let u=new Ct().setRGB(.6,.71,.84).lerp(new Ct(.92,.66,.45),h*.55).multiplyScalar(.08+.92*l);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*l,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night;let d=this.sunDir.y>.05?this.sunDir:new I(-.4,.8,.3).normalize();return this.sun.position.set(e.x+d.x*400,d.y*400,e.z+d.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*l),{day:l,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function ml(r,t,e=.05){let n=new gn;n.moveTo(r[0][0],r[0][1]);for(let s=1;s<r.length;s++)n.lineTo(r[s][0],r[s][1]);n.closePath();let i=new bn(n,{depth:t-e*2,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});return i.rotateY(-Math.PI/2),i.translate((t-e*2)/2,0,0),i}var $e=(r,t,e,n,i,s)=>new Ot(r,t,e).translate(n,i,s),Tx={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},Ax=1844524,Rx=1447446,Cx=12106944,Io=2105892,Px=13159632;function bs(r,t={}){let e=Tx[r],n=[],i=[],s=[],o=e.W;n.push(ml(e.body,o,.1));let a=o*e.cabinW;if(i.push(St(ml(e.cabin,a,.04),Ax)),n.push(ml(e.roof,a+.03,.02)),e.cargo){let[v,C,S,T]=e.cargo;n.push($e(o,T-S,C-v,0,(S+T)/2,(v+C)/2))}if(r==="van"||r==="bus"){let v=r==="bus"?7:4,C=e.cabin[0][0],S=e.cabin[3][0]-(r==="van"?.7:.2);for(let T=0;T<=v;T++){let E=C+(S-C)*T/v;n.push($e(a+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,E+.06))}}let c=e.body[0][1],l=e.head.z,h=e.tail.z;i.push(St($e(o+.02,.16,.12,0,c+.12,l-.02),Io)),i.push(St($e(o+.02,.16,.12,0,c+.12,h+.02),Io)),i.push(St($e(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,l+.01),789516)),i.push(St($e(o+.03,.1,e.L*.55,0,c+.04,0),Io));let u=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let v of[-1,1])i.push(St($e(.2,.12,.1,v*(o/2+.08),e.cabin[0][1]+.12,u-.1),Io));i.push(St($e(.52,.12,.02,0,c+.3,l+.06),15921906)),i.push(St($e(.52,.12,.02,0,c+.42,h-.06),15921906));let d=e.head,p=e.tail;for(let v of[-1,1])s.push(St($e(d.w,d.h,.06,v*d.x,d.y,d.z),16774880)),s.push(St($e(p.w,p.h,.06,v*p.x,p.y,p.z),16718352,.9));t.taxi&&i.push(St($e(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(St($e(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(St($e(1.6,.3,.05,0,2.55,5.92),16747024));let m=Lx(e.wr,r==="bus"||r==="truck"?.32:.23),f=Ix(e),x=fe(f.map(([v,C,S])=>m.clone().translate(v,C,S))),g=fe(n.map(v=>St(v,16777215))),y=fe([...i,x]),_=fe(s);return{paint:g,detail:y,lights:_,wheel:m,wheelPos:f,spec:e,detailNoWheels:fe(i)}}function Ix(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function Lx(r,t){let e=St(new kt(r,r,t,16).rotateZ(Math.PI/2),Rx),n=St(new kt(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),Cx),i=St(new kt(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),Px),s=[];for(let o=0;o<5;o++){let a=new Ot(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(St(a,9080466))}return fe([e,n,i,...s])}function Cu(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new rn(t);return n.colorSpace=Me,n.anisotropy=4,n}var gl=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var xl=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan",color:15790320},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes",color:1118740},{id:"coupe",name:"Sport Coupe",desc:"420 hp \u2013 watch the 150 km/h limit!",color:12589080},{id:"hatch",name:"City Hatch",desc:"Small, nimble, Japanese-import style",color:3829416},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend",color:14207136},{id:"van",name:"Marshrutka",desc:"Route 110 minibus. Passengers not included",color:16053492}],Lo=class{constructor(t,e="sedan",n){this.scene=t,this.group=new ee,this.body=new ee,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(x=>{x.geometry&&x.geometry.dispose()});let n=bs(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new po({color:i,metalness:.45,roughness:.32,clearcoat:1,clearcoatRoughness:.08,vertexColors:!0});let s=new Ft({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new Ft({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new it(n.paint,this.paintMat);o.castShadow=!0;let a=new it(n.detailNoWheels,s);a.castShadow=!0,this.lightMesh=new it(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let c=n.spec;this.brakeMat=new xe({color:16719888,transparent:!0,opacity:0,blending:mn,depthWrite:!1});for(let f of[-1,1]){let x=new it(new be(c.tail.w*2.2,c.tail.h*4),this.brakeMat);x.position.set(f*c.tail.x,c.tail.y,c.tail.z-.06),x.rotation.y=Math.PI,this.body.add(x)}this.flareMat=new xe({color:16773840,transparent:!0,opacity:0,blending:mn,depthWrite:!1});for(let f of[-1,1]){let x=new it(new oi(.45,16),this.flareMat);x.position.set(f*c.head.x,c.head.y,c.head.z+.08),this.body.add(x)}let l=Cu("01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B"),h=new xe({map:l}),u=new it(new be(.52,.12),h);u.position.set(0,c.body[0][1]+.3,c.head.z+.075);let d=new it(new be(.52,.12),h);d.position.set(0,c.body[0][1]+.42,c.tail.z-.075),d.rotation.y=Math.PI,this.body.add(u,d);let p=new it(new Se(.13,10,8),new Ft({color:2760736}));p.position.set(.38,c.cabin[0][1]+.38,(c.cabin[1][0]+c.cabin[2][0])/2+.25),this.body.add(p),this.wheels=[];let m=new Ft({vertexColors:!0,roughness:.6,metalness:.3});for(let[f,x,g]of n.wheelPos){let y=new ee;y.position.set(f,x,g);let _=new it(n.wheel,m);_.castShadow=!0,y.add(_),this.group.add(y),this.wheels.push({pivot:y,mesh:_,front:g>0})}this.spot?(this.spot.position.set(0,.8,c.head.z),this.spotTarget.position.set(0,0,c.head.z+25)):(this.spot=new xo(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,c.head.z),this.spotTarget=new Ee,this.spotTarget.position.set(0,0,c.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=c.mass,this.power=c.power*745.7,this.vmax=c.vmax/3.6,this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(c.L*c.L+c.W*c.W)/12*1.1,this.a=c.wb/2+(c.wbOff||0),this.b=c.wb/2-(c.wbOff||0),this.radius=c.W/2+.05,this.color=i}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let c=0;c<3;c++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=Math.sin(this.h),a=Math.cos(this.h),c=-a,l=o,h=-Math.cos(this.h),u=Math.sin(this.h),d=this.vx*o+this.vz*a,p=this.vx*h+this.vz*u,m=9.81,f=this.mass,x=Math.abs(d),g=.62/(1+x/16),y=-e.steer*g,_=3.2;this.steer+=Math.max(-_*t,Math.min(_*t,y-this.steer));let v=this.steer,C=0,S=e.throttle,T=e.brake;if(this.braking=!1,this.reversing=!1,S>0)if(d<-.5)C+=9e3*S*f/1500,this.braking=!0;else{let K=.95*f*m*.62;C+=Math.min(K,this.power*this._torqueCurve()/Math.max(3.5,d))*S}T>0&&(d>.6?(C-=1.05*f*m*T,this.braking=!0):(this.reversing=!0,d>-7&&(C-=f*3.2*T))),e.hand&&(C-=Math.sign(d)*Math.min(Math.abs(d)*f*4,.6*f*m)),C-=this.drag*d*Math.abs(d)+(.014*f*m*Math.sign(d)+4*d)*Math.min(1,Math.abs(d)),S===0&&T===0&&Math.abs(d)<.4&&(d*=.9);let E=this.a,M=this.b,b=0,P=0,D=1.05,U=f*m*M/(E+M),N=f*m*E/(E+M);if(x>1.5){let K=Math.atan2(p-this.r*E,Math.abs(d))+v*Math.sign(d),at=Math.atan2(p+this.r*M,Math.abs(d)),xt=9.5*U,ot=10.5*N,V=e.hand?.42:S>.9&&x<22&&this.power>2e5?.85:1;b=Ue.clamp(-xt*K,-D*U,D*U),P=Ue.clamp(-ot*at,-D*V*N,D*V*N),this.slip=Math.max(Math.abs(at)*(e.hand?2.5:1.4),Math.abs(K)*.6)*Math.min(1,x/8);let J=-b*Math.cos(v)*E+P*M;this.r+=J/this.inertia*t,this.r*=1-.6*t}else this.r=d*Math.tan(v)/(E+M),p*=.5,this.slip=0;let F=b*Math.cos(v)+P,B=(o*C+h*F)/f,Z=(a*C+u*F)/f;if(x<=1.5){let K=d+C/f*t;this.vx=o*K+h*p,this.vz=a*K+u*p,S===0&&T===0&&Math.abs(K)<.15&&(this.vx=this.vz=0,this.r=0)}else this.vx+=B*t,this.vz+=Z*t;this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=C/f,this.accLat=F/f,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let W=this.spec.L,X={};for(let K of[W*.32,0,-W*.32]){let at=this.x+Math.sin(this.h)*K,xt=this.z+Math.cos(this.h)*K;if(n.collide(at,xt,this.radius,X)){this.x+=X.x,this.z+=X.z;let ot=this.vx*X.nx+this.vz*X.nz;ot<0&&(this.vx-=X.nx*ot*1.3,this.vz-=X.nz*ot*1.3,this.vx*=.92,this.vz*=.92,this.r+=(K>0?1:-1)*ot*.02*Math.sign(X.nx*Math.cos(this.h)-X.nz*Math.sin(this.h)),-ot>2&&(s&&s(-ot,"wall"),this.damage=Math.min(100,this.damage+-ot*.6)))}}i&&i.collidePlayer(this,s)}_torqueCurve(){let t=Math.max(0,this.u||0),e=[0,3.6,2.2,1.55,1.18,.95,.78],n=3.6,i=this.spec.wr;this.gear>=1||(this.gear=1);let s=t/i*e[this.gear]*n*60/(2*Math.PI);return s>6300&&this.gear<6&&this.gear++,s<2400&&this.gear>1&&this.gear--,s=Math.max(900,t/i*e[this.gear]*n*60/(2*Math.PI)),this.rpmTarget=Math.min(7e3,s),.75+.35*Math.sin(Math.min(1,s/6500)*Math.PI)}_visual(t,e){this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.reversing?this.gear=-1:this.gear<1&&(this.gear=1);let n=Ue.clamp(-(this.accLong||0)*.006,-.05,.05),i=Ue.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((n-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((i-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let s of this.wheels)s.mesh.rotation.x=this.spin,s.front&&(s.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.9:this.night?.35:0,this.lightMat.emissiveIntensity=this.night?2.2:this.braking?1.2:.3,this.flareMat.opacity=this.night?.55:0,this.spot.intensity=this.night?60:0,this.slip>.22&&this.speed>6?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new re;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new se(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new se(n,1)),this.skidMesh=new it(e,new xe({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],c=o-i,l=a-s,h=Math.hypot(c,l);if(h<.05||h>5)continue;let u=-l/h*.11,d=c/h*.11,p=this.skidI++%this.skidN,m=.075;this.skidPos.set([i-u,m,s-d,i+u,m,s+d,o-u,m,a-d,o+u,m,a+d],p*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new rn(e);for(let s=0;s<160;s++){let o=new Ri(new ri({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},Do=class{constructor(t){this.cam=t,this.mode=0,this.pos=new I(0,5,-10),this.look=new I,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,c,l,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,d=i*.7+h*.3,p=s*.7+u*.3,m=Math.atan2(d,p)+n,f=Math.sin(m),x=Math.cos(m),g=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let _=(this.mode===0?6.8:11)*g+o*.03,v=(this.mode===0?2.3:4)*g+a.cabin[1][1]*.4;c=new I(e.x-f*_,v,e.z-x*_),l=new I(e.x+i*4,1.1*g,e.z+s*4);let C=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(c,C)}else if(this.mode===2)c=new I(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),l=new I(e.x+i*30,1.2,e.z+s*30),this.pos.copy(c);else{this.lag+=t*.15;let _=this.lag;c=new I(e.x+Math.sin(_)*9,1.2+Math.sin(_*.7)*.6,e.z+Math.cos(_)*9),l=new I(e.x,.9,e.z),this.pos.lerp(c,1-Math.exp(-t*3))}this.look.lerp(l,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let y=(this.mode===2?72:62)+Math.min(18,o*.22);this.cam.fov+=(y-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var Pu=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.05],["truck",.05]],Iu=[3,6,4,2.2,.6,.15,.02],Lu=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,Uo=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new Ft({vertexColors:!0,metalness:.5,roughness:.35}),s=new Ft({vertexColors:!0,metalness:.3,roughness:.3}),o=new xe({vertexColors:!0});for(let[a]of Pu){let c=bs(a==="taxi"?"sedan":a,{taxi:a==="taxi"}),l=200,h=new we(c.paint,i,l),u=new we(c.detail,s,l),d=new we(c.lights,o,l);for(let p of[h,u,d])p.count=0,p.frustumCulled=!1,p.instanceMatrix.setUsage(bo),t.add(p);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new Ct),d.setColorAt(0,new Ct),this.models[a]={p:h,d:u,l:d,spec:c.spec,cap:l,n:0}}this._busStops(),this._signals(),this.M=new Qt,this.Q=new Ve,this.V=new I,this.S=new I(1,1,1),this.Y=new I(0,1,0),this.C=new Ct,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,c=>c.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new we(Su(),new Ft({vertexColors:!0,roughness:.6}),e),i=new xe({vertexColors:!0});this.lamps=[0,1,2].map(u=>new we(Tu(u),i,e));let s={},o=new Qt,a=new Ve,c=new I,l=new I(1,1,1),h=new I(0,1,0);t.forEach((u,d)=>{let p=u.e,m=p.w/2+.9;this.map.sample(p,u.dir,u.stop,m,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(c.set(s.x,.12,s.z),a,l),n.setMatrixAt(d,o);for(let f of this.lamps)f.setMatrixAt(d,o),f.setColorAt(d,new Ct(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new Ct(3,.15,.08),new Ct(.18,.03,.02)],s=[new Ct(3,1.6,.1),new Ct(.18,.12,.02)],o=[new Ct(.1,3,.8),new Ct(.02,.15,.06)];for(let a=0;a<n.length;a++){let c=n[a],l=this.map.signalState(c.cluster,c.group,e);this.lamps[0].setColorAt(a,l==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,l==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,l==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of Pu)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=Iu[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(Lu.test(n[0])||Lu.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),c=Math.floor(e/s),l=[],h=0;for(let u=a-o;u<=a+o;u++)for(let d=c-o;d<=c+o;d++){let p=this.map.chunks.get(ze(u,d));if(p)for(let m of p.edges){if(m.cls>5)continue;let f=this._edgeWeight(m);f<=0||(l.push(m,f),h+=f)}}if(!h)return!1;for(let u=0;u<6;u++){let d=Math.random()*h,p=null;for(let M=0;M<l.length;M+=2)if(d-=l[M+1],d<=0){p=l[M];break}p||(p=l[0]);let m=p.ow||Math.random()<.5?0:1,f=Math.random()*p.len,x={};this.map.sample(p,m,f,0,x);let g=Math.hypot(x.x-t,x.z-e);if(g<n||g>i)continue;let y=Math.floor(Math.random()*p.lanes),_=p.id*2+m;if(this.cars.some(M=>M.de===_&&Math.abs(M.s-f)<12))continue;let v=this._pickType(),C=this.models[v];if(C.n>=C.cap)continue;C.n++;let S=ul[p.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="truck"?.85:1),T={type:v,spec:C.spec,e:p,dir:m,de:_,s:f,lane:v==="van"||v==="bus"?p.lanes-1:y,v:S*.7,v0:S,color:v==="van"?Math.random()<.8?16053492:15912992:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:gl[Math.floor(Math.random()*gl.length)],x:x.x,z:x.z,h:Math.atan2(x.dx,x.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};T.next=this._chooseNext(T);let E={};return this.map.sample(p,m,f,this.map.laneOffset(p,T.lane),E),T.x=E.x,T.z=E.z,this.cars.push(T),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let c=this.map.edges[a>>1];if(c.cls>5)continue;let l={};this.map.sample(c,a&1,.5,0,l);let h=n.dx*l.dx+n.dz*l.dz,u=(h>.7?4:h>-.3?1:.15)*(Iu[c.cls]+.2);c.cls===5&&(u*=.2),(t.type==="bus"||t.type==="truck")&&(u*=c.cls<=2?2:.3),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),c=0;for(;this.cars.length<a&&c<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)c++;for(let f=this.cars.length-1;f>=0;f--){let x=this.cars[f];(Math.abs(x.x-s)>760||Math.abs(x.z-o)>760)&&this._remove(f)}let l=new Map;for(let f of this.cars){let x=l.get(f.de);x||l.set(f.de,x=[]),x.push(f)}for(let f of l.values())f.sort((x,g)=>x.s-g.s);let h=Math.sin(e.h),u=Math.cos(e.h),d=e.speed,p=e.spec.L;this.honks.length=0;let m=this.map;for(let f of this.cars){let x=f.e,g=x.len,y=f.spec.L,_=1e9,v=0,C=l.get(f.de);for(let ot=0;ot<C.length;ot++){let V=C[ot];if(V===f||V.s<=f.s||V.lane!==f.lane)continue;let J=V.s-f.s-(V.spec.L+y)/2;J<_&&(_=J,v=V.v);break}if(_>200&&f.next>=0){let ot=l.get(f.next);if(ot&&ot.length){let V=ot[0],J=g-f.s+V.s-(V.spec.L+y)/2;J<_&&(_=J,v=V.v)}}f.redAhead=!1;for(let ot of x.signals){if(ot.dir!==f.dir)continue;let V=ot.stop-f.s;if(V<-.5||V>120)continue;let J=m.signalState(ot.cluster,ot.group,this.time);if(J==="R"||J==="Y"&&V>f.v*f.v/7+2){let ct=V-y/2;ct<_&&(_=Math.max(.01,ct),v=0,f.redAhead=!0)}}if((f.type==="van"||f.type==="bus")&&f.stopT<=0){let ot=this.stopsOn.get(f.de);if(ot)for(let V of ot){let J=V-f.s;if(J>0&&J<60&&f.servedStop!==f.de*1e4+Math.round(V)){let ct=J-y/2+1.5;ct<_&&(_=Math.max(.01,ct),v=0),J<y/2+1.5&&f.v<.5&&(f.stopT=6+Math.random()*8,f.servedStop=f.de*1e4+Math.round(V))}}}f.stopT>0&&(f.stopT-=t,_=.01,v=0);let S=Math.sin(f.h),T=Math.cos(f.h);{let ot=s-f.x,V=o-f.z,J=ot*S+V*T,ct=Math.abs(ot*T-V*S);if(J>0&&J<45&&ct<2.2){let rt=J-(p+y)/2;rt<_&&(_=Math.max(.01,rt),v=Math.max(0,d*(h*S+u*T)),f.playerBlock=!0)}else f.playerBlock=!1}if(n)for(let ot of n.crossers){let V=ot.x-f.x,J=ot.z-f.z,ct=V*S+J*T,rt=Math.abs(V*T-J*S);if(ct>0&&ct<30&&rt<2.6){let mt=ct-y/2-1.5;mt<_&&(_=Math.max(.01,mt),v=0)}}if(i)for(let ot of i){let V=ot.x-f.x,J=ot.z-f.z,ct=V*S+J*T,rt=Math.abs(V*T-J*S);if(ct>0&&ct<40&&rt<ot.r){let mt=ct-y/2-ot.r;mt<_&&(_=Math.max(.01,mt),v=0)}}let E=f.v0;if(g-f.s<25&&f.next>=0){let ot=m.edges[f.next>>1],V={},J={};m.sample(x,f.dir,g-.5,0,V),m.sample(ot,f.next&1,.5,0,J);let ct=V.dx*J.dx+V.dz*J.dz;ct<.8&&(E=Math.min(E,4+8*Math.max(0,ct+.2)))}f.bump>0&&(f.bump-=t,E=0);let b=1.6*f.aggr,P=2.5,D=2.2,U=1.3/f.aggr,N=f.v-v,F=D+Math.max(0,f.v*U+f.v*N/(2*Math.sqrt(b*P))),B=b*(1-Math.pow(f.v/Math.max(.1,E),4)-(_<1e8?Math.pow(F/Math.max(.1,_),2):0));for(B=Math.max(-9,B),f.brake=B<-.6||f.v<.3,f.v=Math.max(0,f.v+B*t),_<.3&&f.v>0&&(f.v=Math.min(f.v,.2)),f.s+=f.v*t,f.playerBlock&&f.v<.3&&e.speed<1?(f.wait+=t,f.wait>3.5&&Math.random()<t*.6&&this.honks.push(f)):f.wait=Math.max(0,f.wait-t);f.s>=f.e.len;){if(f.next<0){f.dead=!0;break}f.s-=f.e.len,f.de=f.next,f.e=m.edges[f.de>>1],f.dir=f.de&1,f.lane=f.type==="van"||f.type==="bus"?f.e.lanes-1:Math.min(f.e.lanes-1,Math.floor(Math.random()*f.e.lanes)),f.v0=ul[f.e.cls]*(.85+Math.random()*.3)*(f.type==="bus"||f.type==="truck"?.85:1),f.next=this._chooseNext(f),f.transit=!0}let Z=this._o||(this._o={});m.sample(f.e,f.dir,Math.min(f.s,f.e.len),m.laneOffset(f.e,f.lane),Z),f.transit&&(f.ex=f.x-Z.x,f.ez=f.z-Z.z,f.transit=!1,Math.hypot(f.ex,f.ez)>12&&(f.ex=f.ez=0));let W=Math.exp(-t*2.5);f.ex*=W,f.ez*=W;let X=Z.x+f.ex,K=Z.z+f.ez,at=X-f.x,xt=K-f.z;if(at*at+xt*xt>1e-4){let V=Math.atan2(at,xt)-f.h;V=Math.atan2(Math.sin(V),Math.cos(V)),f.h+=V*Math.min(1,t*10)}f.x=X,f.z=K}for(let f=this.cars.length-1;f>=0;f--)this.cars[f].dead&&this._remove(f);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let c in this.models)this.models[c]._i=0;let a=this.night>.5?1.6:.45;for(let c of this.cars){let l=this.models[c.type],h=l._i++;e.setFromAxisAngle(s,c.h),t.compose(n.set(c.x,.03,c.z),e,i),l.p.setMatrixAt(h,t),l.d.setMatrixAt(h,t),l.l.setMatrixAt(h,t),l.p.setColorAt(h,o.setHex(c.color));let u=c.brake?Math.max(a,1.4):a;l.l.setColorAt(h,o.setRGB(u,u,u))}for(let c in this.models){let l=this.models[c];l.p.count=l.d.count=l.l.count=l._i,l.p.instanceMatrix.needsUpdate=l.d.instanceMatrix.needsUpdate=l.l.instanceMatrix.needsUpdate=!0,l.p.instanceColor&&(l.p.instanceColor.needsUpdate=!0),l.l.instanceColor&&(l.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,c=o.z-t.z;if(a*a+c*c>120)continue;let l=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(l/2.2));for(let d=0;d<u;d++){let p=(d/(u-1)-.5)*(l-h*2),m=o.x+Math.sin(o.h)*p,f=o.z+Math.cos(o.h)*p;for(let[x,g]of i){let y=x-m,_=g-f,v=Math.hypot(y,_),C=s+h;if(v<C&&v>1e-4){let S=y/v,T=_/v,E=C-v;t.x+=S*E,t.z+=T*E;let M=t.vx-Math.sin(o.h)*o.v,b=t.vz-Math.cos(o.h)*o.v,P=M*S+b*T;P<0&&(t.vx-=S*P*1.25,t.vz-=T*P*1.25,-P>1.5&&(e&&e(-P,"car",o),t.damage=Math.min(100,t.damage+-P*.5)),o.bump=2.5+Math.random()*2,o.v*=.3,o.wait=4)}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var Du=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],Uu=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],zu=[14200976,13146744,14728864,12094056,13673602],Nu=[1709072,2760728,920586,4864040,6974058],Dx=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],No=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let c=new we(o,a,this.N);return c.count=0,c.frustumCulled=!1,c.castShadow=!0,c.instanceMatrix.setUsage(bo),t.add(c),c},i=new Ft({roughness:.85}),s=16777215;this.torso=n(St(new Ot(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(St(new Ot(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(St(new Se(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(St(new Se(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(St(new Ot(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(St(new Ot(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(St(new Ot(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(St(new Ot(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(fe([St(new kt(.06,.13,.26,8).translate(0,1.88,0),15921126),St(new kt(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new Ft({vertexColors:!0,roughness:.9})),this.bag=n(St(new Ot(.38,.55,.22).translate(0,.32,0),s),i),this.M=new Qt,this.M2=new Qt,this.Q=new Ve,this.V=new I,this.S=new I(1,1,1),this.E=new sn,this.C=new Ct,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=Du[Math.floor(e()*Du.length)],t.pants=Uu[Math.floor(e()*Uu.length)],t.skin=zu[Math.floor(e()*zu.length)],t.hairC=Nu[Math.floor(e()*Nu.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let c=s-i;c<=s+i;c++)for(let l=o-i;l<=o+i;l++){let h=this.map.chunks.get(ze(c,l));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let c=0;c<5;c++){let l=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,d=Math.random()*l.len,p={};this.map.sample(l,u,d,(l.w/2+1.4)*h,p);let m=Math.hypot(p.x-t,p.z-e);if(m<30||m>330||this.map.insideBuilding(p.x,p.z,.3))continue;let f={mode:"walk",e:l,dir:u,s:d,side:h,x:p.x,z:p.z,h:Math.atan2(p.dx,p.dz),ex:0,ez:0,dodge:0};return this._style(f),f}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let c={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(c),c}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let m=i-1;m<=i+1;m++)for(let f=s-1;f<=s+1;f++){let x=this.map.chunks.get(ze(m,f));if(x)for(let g of x.crossings){let y=Math.hypot(g[0]-t,g[1]-e);y>40&&y<220&&o.push(g)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],c=this.map.nearestRoad(a[0],a[1],4);if(!c||c.e.cls>4||c.e.w<5)return null;let l=Math.random()<.5?1:-1,h=c.e.w/2+1.2,u=-c.dz,d=c.dx,p={mode:"cross",x:c.x+u*h*l,z:c.z+d*h*l,tx:c.x-u*h*l,tz:c.z-d*h*l,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return p.h=Math.atan2(p.tx-p.x,p.tz-p.z),this._style(p),p.speed=1.4,p}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=Dx.concat(this.extraZones);for(let m of a){let f=Math.hypot(m.x-i,m.z-s);if(m.active=f<420,!m.active)continue;m.count=m.count||0;let x=3;for(;m.count<m.n&&x-- >0&&o.length<this.N-5;){let g=this._spawnPlaza(m);g&&(o.push(g),m.count++)}}let c=0;for(let m of o)m.mode==="walk"&&c++;let l=c<this.target*.5?30:3;for(;c<this.target&&l-- >0&&o.length<this.N-30;){let m=this._spawnWalker(i,s);m&&(o.push(m),c++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let m=this._spawnCrosser(i,s);m&&o.push(m)}let h=Math.sin(e.h),u=Math.cos(e.h),d=e.speed;this.crossers.length=0;let p={};for(let m=o.length-1;m>=0;m--){let f=o[m];if((Math.abs(f.x-i)>380||Math.abs(f.z-s)>380)&&f.mode!=="plaza"){o[m]=o[o.length-1],o.pop();continue}if(f.mode==="plaza"&&!f.zone.active){f.zone.count--,o[m]=o[o.length-1],o.pop();continue}let g=!1;if(f.mode==="walk"){if(f.s+=f.speed*t,f.s>f.e.len){let M=f.dir?f.e.na:f.e.nb,b=[];for(let P of M.out){let D=this.map.edges[P>>1];D!==f.e&&D.cls>=1&&D.cls<=4&&D.w>=5&&b.push(P)}if(!M.out.length||!b.length)f.dir^=1,f.s=0,f.side=-f.side;else{let P=b[Math.floor(Math.random()*b.length)];f.e=this.map.edges[P>>1],f.dir=P&1,f.s=0,f.trans=!0}}this.map.sample(f.e,f.dir,f.s,(f.e.w/2+1.4)*f.side,p),f.trans&&(f.ex=f.x-p.x-f.ex*0,f.ez=f.z-p.z,f.trans=!1,Math.hypot(f.ex,f.ez)>25&&(f.ex=f.ez=0)),f.ex*=Math.exp(-t*.8),f.ez*=Math.exp(-t*.8);let T=p.x+f.ex,E=p.z+f.ez;f.h=vl(f.h,Math.atan2(T-f.x,E-f.z),t*6),f.x=T,f.z=E,g=!0}else if(f.mode==="plaza")if(f.idle>0)f.idle-=t;else{let T=f.tx-f.x,E=f.tz-f.z,M=Math.hypot(T,E);if(M<.5){f.idle=1+Math.random()*6;let b=f.zone;for(let P=0;P<6;P++){let D=Math.random()*6.28,U=Math.sqrt(Math.random())*b.r,N=b.x+Math.cos(D)*U,F=b.z+Math.sin(D)*U;if(!this.map.insideBuilding(N,F,.6)){let B=this.map.nearestRoad(N,F,8);if(!B||B.dist>B.e.w/2+.5){f.tx=N,f.tz=F;break}}}}else{let b=Math.min(M,f.speed*.85*t);f.x+=T/M*b,f.z+=E/M*b,f.h=vl(f.h,Math.atan2(T,E),t*5),g=!0}}else if(f.mode==="cross")if(f.wait>0)f.wait-=t;else{let T=f.tx-f.x,E=f.tz-f.z,M=Math.hypot(T,E);if(M<.3){o[m]=o[o.length-1],o.pop();continue}let b=Math.min(M,f.speed*t);f.x+=T/M*b,f.z+=E/M*b,g=!0,f.h=vl(f.h,Math.atan2(T,E),t*6),this.crossers.push(f)}let y=f.x-i,_=f.z-s,v=y*h+_*u,C=y*u-_*h;if(d>2.5&&v>-1&&v<4+d*.45&&Math.abs(C)<2.4&&f.dodge<=0&&(f.dodge=.9,f.dside=C>=0?1:-1,f.scream=!0),f.dodge>0){f.dodge-=t;let T=5.5*t;f.x+=u*f.dside*T,f.z+=-h*f.dside*T,f.mode==="walk"&&(f.ex+=u*f.dside*T,f.ez+=-h*f.dside*T),g=!0}let S=Math.hypot(y,_);if(S<2.2&&S>.01){let T=2.2-S;f.x+=y/S*T,f.z+=_/S*T,f.mode==="walk"&&(f.ex+=y/S*T,f.ez+=_/S*T)}f.moving=g,f.phase+=t*(g?f.dodge>0?14:f.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,c=this.list,l=Math.min(c.length,this.N),h=0,u=0;for(let d=0;d<l;d++){let p=c[d],m=p.moving?Math.sin(p.phase):0,f=p.moving?Math.abs(Math.cos(p.phase))*.04:0,x=p.scale;n.setFromAxisAngle(i.set(0,1,0),p.h),t.compose(i.set(p.x,.15+f,p.z),n,s.set(x,x,x)),this.torso.setMatrixAt(d,t),this.hips.setMatrixAt(d,t),this.head.setMatrixAt(d,t),this.hair.setMatrixAt(d,t),this.torso.setColorAt(d,a.setHex(p.shirt)),this.hips.setColorAt(d,a.setHex(p.pants)),this.head.setColorAt(d,a.setHex(p.skin)),this.hair.setColorAt(d,a.setHex(p.hairC));let g=m*.55,y=-m*.5,_=p.dodge>0?2.6:0;zo(this.legL,d,t,e,o,.1,.92,0,g,a.setHex(p.pants)),zo(this.legR,d,t,e,o,-.1,.92,0,-g,a),zo(this.armL,d,t,e,o,.26,1.5,0,y-_,a.setHex(p.shirt)),zo(this.armR,d,t,e,o,-.26,1.5,0,p.wave?-2.7+Math.sin(performance.now()*.008)*.35:-y-_,a),p.kalpak&&this.kalpak.setMatrixAt(h++,t),p.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(p.shirt===1842206?9050650:1846332)),u++)}for(let d of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])d.count=l,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function zo(r,t,e,n,i,s,o,a,c,l){n.makeRotationX(c),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,l)}function vl(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var Fu=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],Fo=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function Ux(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],c=26;for(let D=0;D<=c;D++){let U=D/c,N=-n/2+U*n,F;U<.1?F=i*Math.sqrt(1-Math.pow(1-U/.1,2))*.98+.02:U>.72?F=i*(1-Math.pow((U-.72)/.28,1.6)*.82):F=i,a.push(new tt(Math.max(.05,F),N))}let l=new lo(a,24).rotateX(Math.PI/2);l.rotateY(Math.PI),s.push(St(l,r.body)),s.push(St(new Ot(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(St(new Ot(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(St(new Ot(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new gn,u=17*e,d=6.5*e,p=1.6*e,m=7*e;h.moveTo(0,d/2),h.lineTo(u,d/2-m),h.lineTo(u,d/2-m-p),h.lineTo(0,-d/2),h.closePath();let f=new bn(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),x=f.clone().translate(i*.4,0,-n*.02),g=f.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);x.rotateZ(.06),g.rotateZ(-.06),s.push(St(x,13159634),St(g,13159634));for(let D of[-1,1])s.push(St(new Ot(.2,2.2*e,1.4*e).translate(D*(u+i*.4),.6*e,-n*.02-m-.4*e),r.tail));for(let D of[-1,1])for(let U of t?[.33,.62]:[.36]){let N=D*(i*.4+u*U),F=-n*.02+d/2-m*U+2.6*e;s.push(St(new kt(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(N,-1.9*e,F),14211806)),s.push(St(new kt(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(N,-1.9*e,F+2.12*e),2105376)),s.push(St(new Ot(.3,1.2*e,2.5*e).translate(N,-1.2*e,F-.5*e),13159634))}let y=new gn;y.moveTo(0,0),y.lineTo(5.2*e,0),y.lineTo(1.8*e,7.2*e),y.lineTo(-.6*e,7.2*e),y.closePath();let _=new bn(y,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(St(_,r.tail));let v=new gn;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let C=new bn(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(St(C.clone(),13159634),St(C.clone().scale(-1,1,1),13159634));let S=fe(s),T=[],E=2.45*e,M=(D,U)=>[St(new kt(.13*e,.13*e,E,6).translate(D,-E/2-i*.6,U),10132122),St(new kt(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(D,-E-i*.6+0,U),1381653)];T.push(...M(0,n*.36));for(let D of[-1,1])T.push(...M(D*2.9*e,-n*.06),...M(D*3.5*e,-n*.06));let b=fe(T),P=E+i*.6+.55*e;return{body:S,gear:b,groundY:P,len:n,span:u+i*.4,S:e}}function sr(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let c=new rn(o);return c.colorSpace=Me,c.anisotropy=8,c}var Bo=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new ee,t.add(this.group);let i=e.runways.sort((u,d)=>d.length-u.length)[0],s=i.length/2,o=new tt(i[0],i[1]),a=new tt(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new tt(-this.u.y,this.u.x),this.rwW=55;let c=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=c,this.tc=c?new tt(c.cx,c.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let l=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(l.x,l.y,200,u=>u.cls<=6);this.dropoff=h?new tt(h.x,h.z):l,this._zoneMarker(),this.goAround=!1}rel(t){let e=new tt(t.x-this.R0.x,t.y-this.R0.y);return new tt(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new be(t,e+14,1,1).rotateX(-Math.PI/2),i=new Ft({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new it(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,c,l]of[["07",70,0],["25",t-70,Math.PI]]){let h=sr(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new it(new be(18,18),new Ft({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let d=this.at(c,0),p=new ee;p.add(u),p.position.set(d.x,.05,d.y),p.rotation.y=this.heading+l+Math.PI,this.group.add(p)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let p=0;p<=n;p+=60)for(let m of[-1,1])t.push(this.at(p,m*i)),e.push(p>n-600?[1,.6,.2]:[1,.95,.8]);for(let p=-i;p<=i;p+=3)t.push(this.at(-1,p)),e.push([.2,1,.3]),t.push(this.at(n+1,p)),e.push([1,.1,.1]);for(let p=30;p<n;p+=30)t.push(this.at(p,0)),e.push(p>n-900?Math.floor(p/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let p of this.map.taxiways){let m=p.pts;for(let f=0;f<m.length/2-1;f++){let x=m[f*2],g=m[f*2+1],y=m[f*2+2],_=m[f*2+3],v=Math.hypot(y-x,_-g),C=-(_-g)/v,S=(y-x)/v;for(let T=0;T<v;T+=45)for(let E of[-1,1])t.push(new tt(x+(y-x)*T/v+C*E*(p.w/2+1),g+(_-g)*T/v+S*E*(p.w/2+1))),e.push([.15,.35,1])}}let s=new Se(.28,6,4),o=new xe({color:16777215});this.rwLights=new we(s,o,t.length);let a=new Qt,c=new Ct;t.forEach((p,m)=>{a.makeTranslation(p.x,.35,p.y),this.rwLights.setMatrixAt(m,a),this.rwLights.setColorAt(m,c.setRGB(...e[m]))}),this.rwLightCols=e,this.group.add(this.rwLights);let l=[];for(let p=1;p<=30;p++)l.push(this.at(-p*30,0));let h=[];for(let p=1;p<=30;p++)for(let m=-6;m<=6;m+=2)h.push(this.at(-p*30,m));this.alsBars=new we(new Se(.3,6,4),new xe({color:16773312}),h.length),h.forEach((p,m)=>{a.makeTranslation(p.x,1.2,p.y),this.alsBars.setMatrixAt(m,a)}),this.group.add(this.alsBars);let u=new kt(.08,.08,1.2,4).translate(0,.6,0),d=new we(u,new Ft({color:7829367}),l.length);l.forEach((p,m)=>{a.makeTranslation(p.x,0,p.y),d.setMatrixAt(m,a)}),this.group.add(d),this.rabbit=new we(new Se(.9,8,6),new xe({color:16777215,transparent:!0,opacity:1,blending:mn,depthWrite:!1}),l.length),l.forEach((p,m)=>{a.makeTranslation(p.x,1.4,p.y),this.rabbit.setMatrixAt(m,a),this.rabbit.setColorAt(m,c.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=l.length,this.papi=[];for(let p=0;p<4;p++){let m=this.at(400,-(this.rwW/2+15+p*9)),f=new it(new Ot(2,1,1.2),new xe({color:16719904}));f.position.set(m.x,.6,m.y),this.group.add(f),this.papi.push(f)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new ee,n=new Ft({color:14736596,roughness:.7}),i=new it(new kt(3.2,4.2,38,16),n);i.position.y=19;let s=new it(new Ot(18,8,14),n);s.position.y=4;let o=new it(new kt(7.5,4.5,4,8),n);o.position.y=39.5;let a=new it(new kt(8,7.2,5,8),new Ft({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let c=new it(new kt(8.6,8.6,1,8),n);c.position.y=47;let l=new it(new kt(.15,.15,9,5),new Ft({color:13378082}));l.position.y=52,this.beacon=new it(new Se(.6,8,6),new xe({color:16719904})),this.beacon.position.y=57,this.radar=new it(new Ot(7,1.6,.4),new Ft({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,c,l,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=sr("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new xe({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new it(new be(90,7),n),s=null,o=-1e9,a=t.pts;for(let l=0;l<a.length/2;l++){let h=(a[l*2]-t.cx)*this.n.x+(a[l*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=l)}let c=new tt(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(c.x,t.h+4.5,c.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new tt(e[0],e[1]),i=new tt(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(l=>l.p.distanceTo(s)<48))continue;let c=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:c,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new tt(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new uo(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new xe({color:4245759,transparent:!0,opacity:.8,side:Ce,depthWrite:!1}),this.zone=new it(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new it(new kt(4.8,4.8,14,32,1,!0),new xe({color:4245759,transparent:!0,opacity:.12,side:Ce,depthWrite:!1,blending:mn}));e.position.y=7,this.zone.add(e);let n=new Ri(new ri({map:sr("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new tt(s.x,s.z):i,this.spotZone=new it(t.clone(),new xe({color:16756768,transparent:!0,opacity:.8,side:Ce,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new Ri(new ri({map:sr("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=Fu[Math.floor(Math.random()*Fu.length)],n=Math.random()<t,i=Ux(e,n),s=new Ft({vertexColors:!0,metalness:.35,roughness:.35}),o=new ee,a=new it(i.body,s);a.castShadow=!0;let c=new it(i.gear,s);c.castShadow=!0;let l=new ee;l.add(a,c),o.add(l);let h=(_,v)=>new it(new Se(v,6,4),new xe({color:_,transparent:!0,blending:mn,depthWrite:!1})),u=h(16719904,.5),d=h(2162496,.5),p=h(16777215,.9),m=h(16777215,.9),f=h(16723984,.6),x=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),d.position.set(i.span,-.4,-i.len*.02-7.4*i.S),p.position.copy(u.position),m.position.copy(d.position),f.position.set(0,2.1*i.S,-i.len*.1),x.position.set(0,-1.2*i.S,i.len*.42),l.add(u,d,p,m,f,x);let g=sr(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let _ of[-1,1]){let v=new it(new be(3.4*i.S,1.7*i.S),new xe({map:g,transparent:!0}));v.position.set(_*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=_*Math.PI/2,l.add(v)}this.group.add(o);let y={g:o,inner:l,gear:c,a:i,al:e,wide:n,navR:u,navG:d,strL:p,strR:m,bcn:f,land:x,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:Fo[Math.floor(Math.random()*Fo.length)],gearDown:1,thrust:0};return this.planes.push(y),y}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new tt(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),l=Math.atan2(s,o)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(l)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=Ue.clamp(l,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new tt(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let c=s*2%1,l=new Ct;for(let u=0;u<this.alsN;u++){let d=Math.abs((1-c)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,l.setRGB(d,d,d))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,d)=>u.material.color.setHex(d<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(p=>["approach","landing","takeoff","lineup"].includes(p.state)&&!p.cine),d=this._freeStand();if(!u&&d&&this.planes.filter(p=>!p.cine).length<9){let p=this._newPlane();this._startApproach(p)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let d=this.planes[u];if(d!==i){if(this._updatePlane(d,t,h),d.dead){this.group.remove(d.g),this.planes.splice(u,1);continue}this._pose(d,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new tt(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new tt(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new tt(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-Ue.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new tt(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(c=>c.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=Fo[Math.floor(Math.random()*Fo.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new tt(Math.sin(i.h),Math.cos(i.h)),o=new tt(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=bs(s,{}),c=new Ft({color:o,vertexColors:!0,roughness:.5}),l=new ee;l.add(new it(a.paint,c),new it(a.detail,new Ft({vertexColors:!0})));let h=new it(new Se(.2,6,4),new xe({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,l.add(h),l.scale.setScalar(s==="truck"?.75:1),l.children.forEach(u=>u.castShadow=!0),this.group.add(l),this.vehicles.push({g:l,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let c=Math.atan2(i,s)-e.h;c=Math.atan2(Math.sin(c),Math.cos(c)),e.h+=Ue.clamp(c,-t*1.5,t*1.5);let l=Math.abs(c)>.6?2:5;e.x+=Math.sin(e.h)*l*t,e.z+=Math.cos(e.h)*l*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,c)=>new I(a.x,c,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new I(-3500,520,-9e3),new I(-900,430,-2600),new I(150,380,0),new I(1400,390,1600),new I(400,420,4200),new I(-3e3,480,4e3),new I(-6200,560,-1500),new I(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new Ks(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new tt(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new tt(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),c=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let l=Math.atan2(a.x,a.z),h=Math.atan2(c.x*a.z-c.z*a.x,c.x*a.x+c.z*a.z);n.h=l,n.roll+=(Ue.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(Ue.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),c=s.a.S;if(e===0)n.set(s.x-o*70*c,s.y+16*c,s.z-a*70*c),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let l=-a,h=o;n.set(s.x-l*2.3*c+o*2,s.y+.6*c,s.z-h*2.3*c+a*2),i.set(s.x-l*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*c,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new I(s.x,s.y,s.z))>1600)&&(t.camAnchor=new I(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function zx(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new rn(r);return i.colorSpace=Me,i.anisotropy=8,i}var _l=()=>new Ft({color:6965800,metalness:.85,roughness:.38}),ws=(r=10127994)=>new Ft({color:r,roughness:.75}),Oo=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new ee,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179)}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new it(new kt(.22,.45,45,12),new Ft({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new it(new kt(3.5,4,1.2,24),ws(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new it(new Se(.5,12,8),new Ft({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,c=new be(o,a,40,16).translate(o/2,0,0),l=new Ft({map:zx(),side:Ce,roughness:.75});l.onBeforeCompile=p=>{p.uniforms.uTime=Hn.uTime,p.vertexShader=p.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new it(c,l);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new Ft({color:2767402,roughness:.6}),d=new Ft({color:13146744});for(let p of[-1,1]){let m=new ee,f=new it(new Ot(.45,1.05,.28),u);f.position.y=1.35;let x=new it(new Ot(.38,.85,.24),u);x.position.y=.42;let g=new it(new Se(.12,10,8),d);g.position.y=2;let y=new it(new kt(.16,.13,.12,10),new Ft({color:1976862}));y.position.y=2.12;let _=new it(new Ot(.05,1.2,.05),new Ft({color:2759184}));_.position.set(.3,1.5,.1),m.add(f,x,g,y,_),m.children.forEach(v=>v.castShadow=!0),m.position.set(t+p*5,1.2,e+3.5),this.g.add(m),this.anim.push({type:"guard",g:m,base:m.position.clone(),s:p})}}_manas(t,e,n,i=1){let s=new ee,o=new it(new kt(3.2,3.8,9,8),ws(9075824));o.position.y=4.5;let a=new it(new kt(6,6.5,1,16),ws(10524808));a.position.y=.5;let c=_l(),l=new ee,h=new it(new Se(1,16,12),c);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new it(new kt(.55,.8,2.2,10),c);u.position.set(0,4.3,1.9),u.rotation.x=.7;let d=new it(new Ot(.7,.75,1.6),c);d.position.set(0,5.2,2.8),d.rotation.x=.5;let p=new it(new an(.35,2.2,8),c);p.position.set(0,2.6,-2.5),p.rotation.x=-.6,l.add(h,u,d,p);for(let[S,T,E]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let M=new it(new kt(.2,.16,2.4,8).translate(0,-1.2,0),c);M.position.set(S,2.7,T),M.rotation.x=E,l.add(M)}l.rotation.x=-.32,l.position.y=.4;let m=new ee,f=new it(new kt(.55,.7,1.9,10),c);f.position.y=5;let x=new it(new Se(.42,12,10),c);x.position.y=6.3;let g=new it(new an(.45,.8,10),c);g.position.y=6.8;let y=new it(new kt(.16,.16,1.8,8).translate(0,.9,0),c);y.position.set(.6,5.6,0),y.rotation.z=-.5;let _=new it(new Ot(.08,2.4,.18).translate(0,1.2,0),new Ft({color:10518608,metalness:1,roughness:.25}));_.position.set(1.4,7.1,0),_.rotation.z=-.3;let v=new it(new Ot(1.5,1.8,.1),c);v.position.set(0,4.8,-.7),v.rotation.x=.5,m.add(f,x,g,y,_,v);let C=new ee;C.add(l,m),C.position.y=9,s.add(o,a,C),s.traverse(S=>{S.isMesh&&(S.castShadow=!0,S.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new ee,i=new Ft({color:8008488,roughness:.55,metalness:.1}),s=new it(new kt(15,16,1.2,36),ws(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let d=u/3*Math.PI*2,p=new I(Math.cos(d)*12,1,Math.sin(d)*12),m=new I(Math.cos(d)*9,15,Math.sin(d)*9),f=new I(Math.cos(d)*2.5,21,Math.sin(d)*2.5),x=new ms(p,m,f),g=new it(new fo(x,24,1.1,6,!1),i);n.add(g)}let o=new it(new er(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new it(new kt(1.6,1.1,.8,16),new Ft({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let c=new ee,l=new it(new an(.9,3.4,10),_l());l.position.y=1.7;let h=new it(new Se(.32,10,8),_l());h.position.y=3.6,c.add(l,h),c.position.set(6.5,1.2,0),n.add(c),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new re,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new se(new Float32Array(90*3),3)),s.setAttribute("seed",new se(o,1));let a=new Pe({uniforms:{uTime:Hn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:mn}),c=new Ci(s,a);c.position.set(t,e,n),c.frustumCulled=!1,this.g.add(c);let l=new vo(16747056,0,30,2);return l.position.set(t,e+1.5,n),this.g.add(l),this.anim.push({type:"firelight",light:l}),c}_mosque(){let t=this.map.buildings.find(m=>m.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(m.name)&&m.kind===8)||this.map.buildings.find(m=>m.name&&/Central Mosque|Центральная мечеть/.test(m.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),c=new Ft({color:15921128,roughness:.5}),l=new Ft({color:5939384,metalness:.5,roughness:.25}),h=new Ft({color:14200896,metalness:1,roughness:.2}),u=new it(new kt(o,o,5,24),c);u.position.set(e,a+2.5,n);let d=new it(new Se(o,32,16,0,Math.PI*2,0,Math.PI/2),l);d.position.set(e,a+5,n),d.scale.y=1.15;let p=new it(new kt(.15,.3,4,8),h);p.position.set(e,a+5+o*1.15+2,n),this.g.add(u,d,p);for(let[m,f]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=e+m*(i/2-2),g=n+f*(s/2-2),y=new it(new kt(1.6,2,52,12),c);y.position.set(x,26,g);let _=new it(new kt(2.6,2.2,1.4,12),c);_.position.set(x,44,g);let v=new it(new an(1.7,7,12),l);v.position.set(x,55.5,g);let C=new it(new kt(.1,.2,2.5,6),h);C.position.set(x,60,g),this.g.add(y,_,v,C),this._col(x,g,2)}this.g.children.slice(-19).forEach(m=>{m.castShadow=!0,m.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new it(new kt(4.2,4.4,.6,28,1,!0),ws(12103840));s.position.set(n,.3,i);let o=new it(new oi(4.1,28).rotateX(-Math.PI/2),new Ft({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new re,c=new Float32Array(140);for(let u=0;u<140;u++)c[u]=Math.random();a.setAttribute("position",new se(new Float32Array(140*3),3)),a.setAttribute("seed",new se(c,1));let l=new Pe({uniforms:{uTime:Hn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new Ci(a,l);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new ee,i=new Ft({color:15263976,metalness:.6,roughness:.3}),s=16,o=new ee,a=new it(new er(s,.25,6,48),i);o.add(a);let c=a.clone();c.position.z=1.6,o.add(c);let l=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,d=new it(new kt(.08,.08,s,4),i);d.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),d.rotation.z=u-Math.PI/2,o.add(d);let p=new it(new Ot(1.4,1.5,1.4),new Ft({color:l[h%4]}));p.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(p),this.cabins.push({cab:p,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new it(new kt(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let d=u.clone();d.position.z=2.2,n.add(d)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new ee,i=new Ft({color:10134688,metalness:.6,roughness:.35}),s=new it(new kt(.5,.75,13,12).rotateX(Math.PI/2),i),o=new it(new an(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new gn;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let c=new it(new bn(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),l=new it(new Ot(.15,2.4,2.6),i);l.position.set(0,1.4,-5);let h=new it(new kt(.6,1,6,8),ws(8947848));h.position.y=-3.4,n.add(s,o,c,l,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var ko=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<e;a++){let c=Math.random()*2-1;s=(s+.02*c)/1.02,i[a]=c*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=2,this.osc=[];for(let[a,c,l]of[["sawtooth",1,.35],["sawtooth",1.01,.3],["square",.5,.25],["triangle",2,.15]]){let h=t.createOscillator();h.type=a;let u=t.createGain();u.gain.value=l,h.connect(u),u.connect(this.engFilter),h.start(),this.osc.push([h,c])}this.engFilter.connect(this.engGain),this.engGain.connect(this.master);let o=(a,c,l)=>{let h=t.createBufferSource();h.buffer=n,h.loop=!0;let u=t.createBiquadFilter();u.type=a,u.frequency.value=c,u.Q.value=l;let d=t.createGain();return d.gain.value=0,h.connect(u),u.connect(d),d.connect(this.master),h.start(Math.random()*.5),{s:h,fl:u,g:d}};this.wind=o("bandpass",600,.4),this.tyre=o("bandpass",1800,6),this.city=o("lowpass",420,.5),this.jet=o("bandpass",900,.6),this.jetLow=o("lowpass",140,1),this.road=o("lowpass",220,.8),this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?e.rpm:0,o=28+s/60*1;for(let[h,u]of this.osc)h.frequency.setTargetAtTime(o*u,i,.03);let a=n.throttle||0;this.engFilter.frequency.setTargetAtTime(350+s*.35+a*900,i,.05),this.engGain.gain.setTargetAtTime(n.inFlight?0:.05+a*.08+s/7e3*.06,i,.05);let c=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(c/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+c*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,c/40*.25),i,.1),this.tyre.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.5,Math.max(0,(e.slip-.18)*1.6))*(c>5?1:0),i,.04),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let l=n.jet||0;this.jet.g.gain.setTargetAtTime(l*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(l*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+l*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=2+Math.random()*6/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=2200;for(let c of[405*n,507*n]){let l=i.createOscillator();l.type="square",l.frequency.value=c,l.connect(a),l.start(s),l.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let c=e.createOscillator();c.type="triangle",c.frequency.setValueAtTime(180+Math.random()*120,n),c.frequency.exponentialRampToValueAtTime(60,n+.3);let l=e.createGain();l.gain.setValueAtTime(a*.5,n),l.gain.exponentialRampToValueAtTime(.001,n+.35),c.connect(l),l.connect(this.master),c.start(n),c.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let c=t.createBufferSource();c.buffer=this.noise;let l=t.createBiquadFilter();l.type="highpass",l.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),c.connect(l),l.connect(h),h.connect(this.master),c.start(e+a),c.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var ui=150,Ze=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],Ho=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=2e4,this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Ze){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Ze.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:t?.type,color:t?.color}))}catch{}}issueFine(t,e,n,i){this.money-=e;let s={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i};this.fines.push(s),this.audio.fine(),this.hud.showFine(s)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,c=this.speedState;if(a>ui){if(c.over+=t,c.maxSpeed=Math.max(c.maxSpeed,a),c.armed&&c.over>.6){c.armed=!1,c.lastFine=this.time;let l=Math.round(c.maxSpeed),h=l>200?7500:l>170?5e3:3e3,u=n.street?` on ${n.street}`:"";o(d=>this.issueFine("Speeding",h,`${l} km/h in a 150 km/h zone${u}`,d))}!c.armed&&this.time-c.lastFine>12&&(c.armed=!0,c.maxSpeed=0,c.over=0)}else a<ui-5&&(c.armed=!0,c.over=0,c.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let l=n.road;for(let p of l.e.signals){let m=Math.sin(e.h),f=Math.cos(e.h),x=m*l.dx+f*l.dz,g=x>=0?0:1;if(p.dir!==g||Math.abs(x)<.7)continue;let y=g?l.e.len-l.s:l.s,_=e._sOnEdge&&e._sOnEdge.e===l.e?e._sOnEdge.s:null;if(_!==null&&_<p.stop&&y>=p.stop){let v=g?-l.lat:l.lat;(l.e.ow||v>-.5)&&this.map.signalState(p.cluster,p.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(C=>this.issueFine("Red light",1e3,`Ran a red light${n.street?" on "+n.street:""}`,C)))}}let h=Math.sin(e.h),u=Math.cos(e.h),d=h*l.dx+u*l.dz>=0?0:1;e._sOnEdge={e:l.e,s:d?l.e.len-l.s:l.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let l=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;l<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",1500,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=l<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(l=>this.issueFine("Runway incursion",1e4,"Entered the active runway at Manas International Airport",l)))):(this.runwayT=0,n.runway=!1)}checkLandmarks(t){for(let e of Ze)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Ze.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,c=this.map.nearestRoad(o,a,80,x=>x.cls>=1&&x.cls<=4);if(!c)continue;let l=c.lat>=0?1:-1,h=c.e.w/2+1.2,u=c.x-c.dz*h*l,d=c.z+c.dx*h*l;if(this.map.insideBuilding(u,d,.5))continue;let p=Ze.filter(x=>Math.hypot(x.x-u,x.z-d)>700&&(!x.airport||Math.random()<.5)),m=p[Math.floor(Math.random()*p.length)],f=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:d,dest:m,passenger:f[Math.floor(Math.random()*f.length)],t:0,start:null},this.setRoute(u,d,"Pick up "+this.mission.passenger),e){let x={mode:"plaza",zone:{x:u,z:d,r:.1,active:!0,count:0},x:u,z:d,h:0,tx:u,tz:d,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};x.shirt=15909376,x.pants=2238522,x.skin=14200976,x.hairC=1709072,x.scale=1,x.speed=1.2,x.phase=0,x.fixed=!0,e.list.push(x),this.mission.ped=x}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,c=i.fare+a;this.money+=c,this.audio.cash(),this.hud.toast(`Fare paid: ${di(i.fare)} \u0441\u043E\u043C${a?` + ${di(a)} \u0441\u043E\u043C fast-ride tip`:""}. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],c=this.route[s+2],l=this.route[s+3],h=c-o,u=l-a,d=h*h+u*u||1,p=((t.x-o)*h+(t.z-a)*u)/d;p=Math.max(0,Math.min(1,p)),i=Math.min(i,Math.hypot(t.x-o-h*p,t.z-a-u*p))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let c=0;c<e.length/2;c++){c>0&&(o+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]));let l=Math.max(0,c-1),h=Math.min(e.length/2-1,c+1),u=e[h*2]-e[l*2],d=e[h*2+1]-e[l*2+1],p=Math.hypot(u,d)||1;u/=p,d/=p;let m=1.1;if(n.push(e[c*2]-d*m,.22,e[c*2+1]+u*m,e[c*2]+d*m,.22,e[c*2+1]-u*m),i.push(o,0,o,1),c>0){let f=c*2;s.push(f-2,f,f-1,f-1,f,f+1)}}let a=new re;a.setAttribute("position",new Yt(n,3)),a.setAttribute("uv",new Yt(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new Pe({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:Ce})),this.routeMesh=new it(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function di(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var Bu=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],Ou=[5,4.2,3.4,2.6,2,1.6,1.2],te=r=>document.getElementById(r),Vo=class{constructor(t){this.map=t,this.speedo=te("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=te("minimap"),this.mctx=this.mini.getContext("2d"),this.big=te("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,c=Math.min(n,i)/2-6*s,l=t.speed*3.6,h=260,u=Math.PI*.75,d=Math.PI*2.25,p=g=>u+(d-u)*Math.min(1,g/h),m=e.createRadialGradient(o,a,c*.2,o,a,c);m.addColorStop(0,"rgba(20,24,30,0.92)"),m.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=m,e.beginPath(),e.arc(o,a,c,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,c-10*s,p(ui),d),e.stroke(),e.lineWidth=7*s,e.strokeStyle=l>ui?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,c-10*s,u,p(l)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let g=0;g<=h;g+=10){let y=p(g),_=g%20===0;e.strokeStyle=g>ui?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(_?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(y)*(c-18*s),a+Math.sin(y)*(c-18*s)),e.lineTo(o+Math.cos(y)*(c-(_?28:23)*s),a+Math.sin(y)*(c-(_?28:23)*s)),e.stroke(),_&&g%40===0&&e.fillText(g,o+Math.cos(y)*(c-40*s),a+Math.sin(y)*(c-40*s))}let f=p(l);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(f)*12*s,a-Math.sin(f)*12*s),e.lineTo(o+Math.cos(f)*(c-22*s),a+Math.sin(f)*(c-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=l>ui?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(l),o,a+c*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+c*.62);let x=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,c*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=x>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,c*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,x)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gear<0?"R":t.speed<.3&&!t.throttleOn?"N":t.gear,o,a-c*.12)}drawMini(t,e,n,i){let s=this.mctx,o=this.mini.width,a=this.mini.height,c=this.dpr,l=.55*c*(t.speed>25?.75:1);s.save(),s.clearRect(0,0,o,a),s.beginPath(),s.arc(o/2,a/2,o/2-2,0,7),s.clip(),s.fillStyle="#1d2329",s.fillRect(0,0,o,a),s.translate(o/2,a/2+a*.12),s.rotate(t.h+Math.PI),s.scale(l,l),s.translate(-t.x,-t.z);let h=o/l*.8,u=400,d=Math.ceil(h/u),p=Math.floor(t.x/u),m=Math.floor(t.z/u);s.fillStyle="#2f3741";for(let y=p-d;y<=p+d;y++)for(let _=m-d;_<=m+d;_++){let v=this.map.chunks.get(ze(y,_));if(v)for(let C of v.buildings){if(Math.abs(C.cx-t.x)>h||Math.abs(C.cz-t.z)>h)continue;let S=C.pts;s.beginPath(),s.moveTo(S[0],S[1]);for(let T=2;T<S.length;T+=2)s.lineTo(S[T],S[T+1]);s.fill()}}s.lineCap="round",s.lineJoin="round";for(let y=6;y>=0;y--){s.strokeStyle=Bu[y];for(let _=p-d;_<=p+d;_++)for(let v=m-d;v<=m+d;v++){let C=this.map.chunks.get(ze(_,v));if(C)for(let S of C.edges){if(S.cls!==y)continue;s.lineWidth=Math.max(S.w,3/l);let T=S.pts;s.beginPath(),s.moveTo(T[0],T[1]);for(let E=2;E<T.length;E+=2)s.lineTo(T[E],T[E+1]);s.stroke()}}}if(i){s.strokeStyle="#8a9098",s.lineWidth=i.rwW,s.beginPath(),s.moveTo(i.R0.x,i.R0.y),s.lineTo(i.R1.x,i.R1.y),s.stroke();for(let y of i.planes)s.fillStyle="#ffffff",s.beginPath(),s.arc(y.x,y.z,14,0,7),s.fill()}if(n.route){s.strokeStyle="#3fc8ff",s.lineWidth=6/l*c,s.globalAlpha=.9;let y=n.route;s.beginPath(),s.moveTo(y[0],y[1]);for(let _=2;_<y.length;_+=2)s.lineTo(y[_],y[_+1]);s.stroke(),s.globalAlpha=1}s.fillStyle="#ff9a3a";for(let y of e.cars)Math.abs(y.x-t.x)<h&&Math.abs(y.z-t.z)<h&&s.fillRect(y.x-1.6,y.z-1.6,3.2,3.2);for(let y of Ze)y.x===void 0||Math.abs(y.x-t.x)>h||Math.abs(y.z-t.z)>h||(s.fillStyle=n.visited.has(y.id)?"#6ad06a":"#ffd84a",s.beginPath(),s.arc(y.x,y.z,6/l*c,0,7),s.fill());n.routeTarget&&(s.fillStyle="#ff3a6a",s.beginPath(),s.arc(n.routeTarget.x,n.routeTarget.z,8/l*c,0,7),s.fill()),s.restore(),s.save(),s.translate(o/2,a/2+a*.12),s.fillStyle="#3fc8ff",s.strokeStyle="#fff",s.lineWidth=2*c,s.beginPath(),s.moveTo(0,-10*c),s.lineTo(7*c,8*c),s.lineTo(0,4*c),s.lineTo(-7*c,8*c),s.closePath(),s.fill(),s.stroke(),s.restore();let f=t.h+Math.PI;s.fillStyle="#ff5050",s.font=`700 ${12*c}px Inter, Arial`,s.textAlign="center",s.textBaseline="middle";let x=o/2+Math.sin(f)*(o/2-14*c),g=a/2-Math.cos(f)*(a/2-14*c);s.fillText("N",x,g),s.beginPath(),s.arc(o/2,a/2,o/2-2,0,7),s.strokeStyle="rgba(255,255,255,0.25)",s.lineWidth=2*c,s.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",e=>{t={x:e.clientX,y:e.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",e=>{if(!t)return;let n=e.clientX-t.x,i=e.clientY-t.y;Math.abs(n)+Math.abs(i)>4&&(t.moved=!0),this.mapView.x=t.vx-n*this.dpr/this.mapView.s,this.mapView.z=t.vz-i*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",e=>{if(t&&!t.moved&&this.onMapClick){let n=this.big.getBoundingClientRect(),i=this.mapView.x+((e.clientX-n.left)*this.dpr-this.big.width/2)/this.mapView.s,s=this.mapView.z+((e.clientY-n.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(i,s,e.shiftKey)}t=null}),this.big.addEventListener("wheel",e=>{e.preventDefault();let n=e.deltaY<0?1.2:1/1.2;this.mapView.s=Math.max(.02,Math.min(2.5,this.mapView.s*n)),this.mapDirty=!0},{passive:!1})}drawBigMap(t,e,n){let i=this.bctx,s=this.big.width,o=this.big.height,a=this.mapView,c=a.s;i.fillStyle="#161b20",i.fillRect(0,0,s,o),i.save(),i.translate(s/2,o/2),i.scale(c,c),i.translate(-a.x,-a.z);let l=a.x-s/2/c,h=a.x+s/2/c,u=a.z-o/2/c,d=a.z+o/2/c,p={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let y of this.map.areaList){let _=p[y[0]];if(!_)continue;let v=y[1];if(!(v[0]*.1<l-2e3||v[0]*.1>h+2e3||v[1]*.1<u-2e3||v[1]*.1>d+2e3)){i.fillStyle=_,i.beginPath(),i.moveTo(v[0]*.1,v[1]*.1);for(let C=2;C<v.length;C+=2)i.lineTo(v[C]*.1,v[C+1]*.1);i.fill()}}if(c>.25){i.fillStyle="#2c333b";for(let y of this.map.buildings){if(y.cx<l||y.cx>h||y.cz<u||y.cz>d)continue;let _=y.pts;i.beginPath(),i.moveTo(_[0],_[1]);for(let v=2;v<_.length;v+=2)i.lineTo(_[v],_[v+1]);i.fill()}}i.lineCap="round",i.lineJoin="round";for(let y=6;y>=0;y--)if(!(c<.08&&y>=5)){i.strokeStyle=Bu[y],i.lineWidth=Math.max(Ou[y]*.6/c*this.dpr*.5,(this.map.edges[0],0))||1,i.beginPath();for(let _ of this.map.edges){if(_.cls!==y)continue;let v=_.pts;if(!(v[0]<l-500||v[0]>h+500||v[1]<u-500||v[1]>d+500)){i.moveTo(v[0],v[1]);for(let C=2;C<v.length;C+=2)i.lineTo(v[C],v[C+1])}}i.lineWidth=Math.max(Ou[y]*.5/c*this.dpr,(7-y)*1.2),c>.5&&(i.lineWidth=Math.max(i.lineWidth,6)),i.stroke()}if(n&&(i.strokeStyle="#9aa0a8",i.lineWidth=Math.max(55,3/c),i.beginPath(),i.moveTo(n.R0.x,n.R0.y),i.lineTo(n.R1.x,n.R1.y),i.stroke()),e.route){i.strokeStyle="#3fc8ff",i.lineWidth=5/c*this.dpr;let y=e.route;i.beginPath(),i.moveTo(y[0],y[1]);for(let _=2;_<y.length;_+=2)i.lineTo(y[_],y[_+1]);i.stroke()}i.restore();let m=(y,_)=>[(y-a.x)*c+s/2,(_-a.z)*c+o/2];i.font=`600 ${12*this.dpr}px Inter, Arial`,i.textAlign="center";for(let y of Ze){if(y.x===void 0)continue;let[_,v]=m(y.x,y.z);_<-50||_>s+50||v<-50||v>o+50||(i.fillStyle=e.visited.has(y.id)?"#6ad06a":"#ffd84a",i.beginPath(),i.arc(_,v,5*this.dpr,0,7),i.fill(),i.fillStyle="rgba(0,0,0,0.6)",i.fillText(y.name,_+1,v-9*this.dpr+1),i.fillStyle="#fff",i.fillText(y.name,_,v-9*this.dpr))}if(c>.18){i.font=`${10*this.dpr}px Inter, Arial`,i.fillStyle="rgba(255,255,255,0.75)";let y=new Set;for(let _ of this.map.edges){if(_.cls>2||_.name<0||_.len<150)continue;let v=this.map.names[_.name],C=v[1]||v[0],S=Math.floor(_.pts.length/4)*2,[T,E]=m(_.pts[S],_.pts[S+1]);if(T<0||T>s||E<0||E>o)continue;let M=C+Math.round(T/220)+","+Math.round(E/220);y.has(M)||(y.add(M),i.fillText(C,T,E))}}if(e.routeTarget){let[y,_]=m(e.routeTarget.x,e.routeTarget.z);i.fillStyle="#ff3a6a",i.beginPath(),i.arc(y,_,7*this.dpr,0,7),i.fill()}let[f,x]=m(t.x,t.z);i.save(),i.translate(f,x),i.rotate(Math.PI-t.h),i.fillStyle="#3fc8ff",i.strokeStyle="#fff",i.lineWidth=2*this.dpr;let g=this.dpr;i.beginPath(),i.moveTo(0,-11*g),i.lineTo(8*g,9*g),i.lineTo(0,4*g),i.lineTo(-8*g,9*g),i.closePath(),i.fill(),i.stroke(),i.restore(),i.fillStyle="rgba(255,255,255,0.5)",i.textAlign="right",i.font=`${10*this.dpr}px Inter, Arial`,i.fillText("Map data \xA9 OpenStreetMap contributors",s-10*this.dpr,o-10*this.dpr)}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t!==this._street&&(this._street=t,te("street").textContent=t||"",te("street").classList.toggle("hidden",!t)),e!==this._district&&(this._district=e,te("district").textContent=e||"")}setMoney(t,e){let n=di(t)+" \u0441\u043E\u043C";n!==this._money&&(this._money=n,te("money").textContent=n,te("money").classList.toggle("neg",t<0)),e!==this._finesN&&(this._finesN=e,te("finecount").textContent=e?`${e} fine${e>1?"s":""}`:"No fines")}setClock(t,e){this.hour=t,te("clock").textContent=this.clockText();let n=e>.55?["Heavy traffic jam","jam3"]:e>.32?["Slow traffic","jam2"]:["Traffic flowing","jam1"];if(n[0]!==this._jam){this._jam=n[0];let i=te("jam");i.textContent=n[0],i.className=n[1]}}setLimit(t,e,n){let i=t>ui;te("limit").classList.toggle("over",i),te("warn").textContent=n?"\u26A0 ACTIVE RUNWAY \u2013 LEAVE IMMEDIATELY":e?"\u26A0 WRONG WAY \u2013 ONE-WAY STREET":i?"\u26A0 SPEED CAMERA ZONE \u2013 LIMIT 150":"",te("warn").classList.toggle("show",!!(n||e||i))}setMission(t){t!==this._mission&&(this._mission=t,te("mission").innerHTML=t||"",te("mission").classList.toggle("hidden",!t))}toast(t,e=3){let n=te("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=te("fine");te("fineKind").textContent=t.kind.toUpperCase(),te("fineAmt").textContent="\u2212"+di(t.amount)+" \u0441\u043E\u043C",te("fineDetail").textContent=t.detail,te("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=te("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=te("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=te("discover");te("discName").textContent=t.name,te("discLocal").textContent=t.local||"",te("discFact").textContent=t.fact,te("discCount").textContent=`Landmark ${e}/${n} discovered \xB7 +500 \u0441\u043E\u043C`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=te("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),te("fhAlt").textContent=Math.round(t.alt)+" m",te("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",te("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",te("fhStage").textContent=t.stage,te("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var Gt=r=>document.getElementById(r),fi=r=>new Promise(t=>setTimeout(t,r)),Nx=[15790320,1118740,9212054,12589080,1718906,2779706,15909376,6953530,14187040,4237528];async function Fx(){let r=(z,A)=>{Gt("loadText").textContent=z,Gt("loadBar").style.width=(A*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await fi(30),!window.BISHKEK_DATA){Gt("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new To(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`Road graph: ${t.edges.length.toLocaleString()} street segments, ${t.signalClusters.length} signalised junctions`,.25),await fi(30);let e=localStorage.getItem("bd_quality")||(navigator.hardwareConcurrency>=8?"high":"medium"),n=new to({antialias:e!=="low",powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio,e==="high"?1.5:e==="medium"?1:.75)),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=Me,n.toneMapping=Jc,n.toneMappingExposure=.92,n.shadowMap.enabled=e!=="low",n.shadowMap.type=Zc,n.autoClear=!1,Gt("app").appendChild(n.domElement);let i=new Ai,s=new Re(62,window.innerWidth/window.innerHeight,.5,4200),o=new Po(n,i);e==="medium"&&o.sun.shadow.mapSize.set(1536,1536);let a=pu();r("Building Bishkek\u2026",.35),await fi(20);let c=new Co(i,t,a);c.radius=e==="high"?1600:e==="medium"?1250:900;for(let z of["grass","dirt","field","asphalt","concrete","water"])Object.assign(c.mat[z],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(c.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(c.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(c.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let l=new Vo(t),h=new ko,u=new Ho(t,l,h),d=new Bo(i,t,c);u.setAirport(d),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await fi(20);let p=new Oo(i,t,c),m=t.nearestRoad(40,55,120,z=>z.cls<=2)||t.nearestRoad(0,0,500),f=new Lo(i,u.savedCar||"sedan",u.savedColor),x=m.x-m.dz*t.laneOffset(m.e,0),g=m.z+m.dx*t.laneOffset(m.e,0);f.place(x,g,Math.atan2(m.dx,m.dz));let y={x,z:g,h:f.h};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),c.radius=Math.min(c.radius,900);for(let z=0;z<20;z++)c.update({x:f.x,z:f.z},0,!1),r("Streets, buildings and parks around Ala-Too Square\u2026",.5+z*.02),await fi(1);c.radius=e==="high"?1600:e==="medium"?1250:900;let _=c.radius;r("Traffic, traffic lights and people\u2026",.92),await fi(20);let v=new Uo(i,t,c),C=new No(i,t);C.addZone({name:"Manas Airport",x:d.dropoff.x+d.n.x*18,z:d.dropoff.y+d.n.y*-18,r:45,n:40,bags:!0});let S={traffic:1,peds:1,timeSpeed:1,sens:1};try{Object.assign(S,JSON.parse(localStorage.getItem("bd_settings")||"{}"))}catch{}v.target=Math.round(260*S.traffic*(e==="low"?.6:1)),C.target=Math.round(220*S.peds*(e==="low"?.6:1));let T=new Do(s);T.pos.set(f.x-Math.sin(f.h)*8,3,f.z-Math.cos(f.h)*8);let E={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0};window.__bd={teleport:(...z)=>U(...z),rig:T,map:t,world:c,car:f,traffic:v,peds:C,airport:d,game:u,S:E,scene:i,camera:s,renderer:n,env:o};let M={steer:0,gas:0,brake:0,hand:!1};window.addEventListener("keydown",z=>{z.repeat&&!["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"].includes(z.code)||(E.keys[z.code]=!0,["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(z.code)&&z.preventDefault(),b(z.code))}),window.addEventListener("keyup",z=>{E.keys[z.code]=!1}),window.addEventListener("blur",()=>{E.keys={}});function b(z){if(h.start(),E.mode!=="menu"){if(z==="Escape"||z==="KeyP")return E.mapOpen?F(!1):Gt("airportMenu").classList.contains("hidden")?E.mode==="flight"?J(!0):E.mode==="spot"?rt():N():Gt("airportMenu").classList.add("hidden");if(!E.paused)switch(z){case"KeyC":E.mode==="flight"?E.flightCam=(E.flightCam+1)%4:l.toast("Camera: "+T.cycle(),1.2);break;case"KeyM":F();break;case"KeyH":h.horn(.3,.45),C.list.forEach(A=>{Math.hypot(A.x-f.x,A.z-f.z)<15&&A.mode==="walk"&&(A.dodge=.5,A.dside=Math.random()<.5?1:-1)});break;case"KeyE":xt();break;case"KeyJ":u.mission?(u.cancelMission(C),l.toast("Taxi job cancelled",2)):u.startTaxi(f,C)&&l.toast(`\u{1F695} New taxi order: pick up <b>${u.mission.passenger}</b> (follow the blue GPS line)`,4);break;case"KeyR":D();break;case"BracketRight":E.hour=(E.hour+1)%24,l.toast("Time "+l.clockText(),1);break;case"BracketLeft":E.hour=(E.hour+23)%24,l.toast("Time "+l.clockText(),1);break;case"KeyG":u.routeTarget&&!u.mission&&(u.clearRoute(),l.toast("GPS cleared",1.5));break;case"KeyK":l.toast(h.toggleMute()?"Sound off":"Sound on",1.2);break}}}let P=!1;n.domElement.addEventListener("contextmenu",z=>z.preventDefault()),n.domElement.addEventListener("mousedown",z=>{z.button===2&&(P=!0),h.start()}),window.addEventListener("mouseup",z=>{z.button===2&&(P=!1)}),window.addEventListener("mousemove",z=>{P&&(E.mouseYaw-=z.movementX*.006)});function D(){let z=t.nearestRoad(f.x,f.z,300,Q=>Q.cls<=4);if(!z)return;let A=t.laneOffset(z.e,0),w=Math.sin(f.h),k=Math.cos(f.h),$=z.dx,et=z.dz;!z.e.ow&&w*$+k*et<0&&($=-$,et=-et),f.place(z.x-et*A,z.z+$*A,Math.atan2($,et)),l.toast("Car reset to the road",1.5)}function U(z,A){let w=t.nearestRoad(z,A,400,$=>$.cls<=4);if(!w)return;let k=t.laneOffset(w.e,0);f.place(w.x-w.dz*k,w.z+w.dx*k,Math.atan2(w.dx,w.dz)),v.clear();for(let $ in v.models)v.models[$].n=0;C.list.length=0;for(let $ of C.extraZones)$.count=0;T.snap(f);for(let $=0;$<6;$++)c.update({x:f.x,z:f.z},0,!0)}function N(z){E.paused=z!==void 0?z:!E.paused,Gt("pause").classList.toggle("hidden",!E.paused),E.paused&&(B(),Z())}function F(z){E.mapOpen=z!==void 0?z:!E.mapOpen,Gt("mapPanel").classList.toggle("hidden",!E.mapOpen),E.mapOpen&&(l._resize(),l.centerMap(f.x,f.z,.12))}l.onMapClick=(z,A,w)=>{if(w){U(z,A),F(!1);return}u.setRoute(z,A,"Waypoint"),l.toast("GPS route set (G to clear)",1.5)},Gt("mapClose").onclick=()=>F(!1);function B(){let z=Gt("fineList");if(!u.fines.length){z.innerHTML='<p class="muted">No fines yet. Stay under 150 km/h, stop at red lights and keep off the runway!</p>';return}z.innerHTML=u.fines.slice(-12).reverse().map(A=>`<div class="fineRow"><b>${A.kind}</b> <span>\u2212${di(A.amount)} \u0441\u043E\u043C</span><small>${A.time} \xB7 ${A.detail}</small></div>`).join("")}function Z(){Gt("placeList").innerHTML=Ze.map(z=>`<button class="place ${u.visited.has(z.id)?"done":""}" data-id="${z.id}">${u.visited.has(z.id)?"\u2714":"\u25CB"} ${z.name}<small>${z.local||""}</small></button>`).join(""),Gt("placeList").querySelectorAll("button").forEach(z=>z.onclick=()=>{let A=Ze.find(w=>w.id===z.dataset.id);U(A.x,A.z),N(!1)}),Gt("placeCount").textContent=`${u.visited.size}/${Ze.length}`}function W(z){z.innerHTML=xl.map(A=>`<button class="carCard ${f.type===A.id?"sel":""}" data-id="${A.id}"><b>${A.name}</b><small>${A.desc}</small></button>`).join(""),z.querySelectorAll("button").forEach(A=>A.onclick=()=>{let w=xl.find(k=>k.id===A.dataset.id);f.setType(w.id,f.color??w.color),W(z),u.save(f)})}function X(z){z.innerHTML=Nx.map(A=>`<button class="sw" style="background:#${A.toString(16).padStart(6,"0")}" data-c="${A}"></button>`).join(""),z.querySelectorAll("button").forEach(A=>A.onclick=()=>{f.setColor(+A.dataset.c),u.save(f)})}W(Gt("garage")),X(Gt("colors")),W(Gt("garage2")),X(Gt("colors2"));let K=(z,A,w)=>{let k=Gt(z);k.value=S[A],k.oninput=()=>{S[A]=+k.value,w&&w(),localStorage.setItem("bd_settings",JSON.stringify(S))}};K("setTraffic","traffic",()=>v.target=Math.round(260*S.traffic)),K("setPeds","peds",()=>C.target=Math.round(220*S.peds)),K("setTimeSpeed","timeSpeed");let at=Gt("setVol");at.oninput=()=>h.setVolume(+at.value),Gt("setQuality").value=e,Gt("setQuality").onchange=()=>{localStorage.setItem("bd_quality",Gt("setQuality").value),location.reload()},Gt("resume").onclick=()=>N(!1),Gt("resetBtn").onclick=()=>{U(y.x,y.z),N(!1)},Gt("clearSave").onclick=()=>{localStorage.removeItem("bishkekDrive"),location.reload()},Gt("startBtn").onclick=()=>{h.start(),Gt("menu").classList.add("hidden"),E.mode="drive",E.paused=!1,l.toast("Welcome to <b>Bishkek</b>! Chuy Avenue, in front of Ala-Too Square. Speed limit for this game: <b>150 km/h</b>",6)};function xt(){if(E.mode!=="drive")return;let z=Math.hypot(f.x-d.dropoff.x,f.z-d.dropoff.y),A=Math.hypot(f.x-d.spotter.x,f.z-d.spotter.y);if(z<14){if(f.speed>3){l.toast("Stop the car first",1.5);return}l.renderBoard(d.board,Gt("fids")),Gt("airportMenu").classList.remove("hidden"),h.pa()}else A<14?ct():l.toast("Nothing to interact with here. Airport: drive to the glowing ring in front of the terminal.",2.5)}Gt("apFlight").onclick=()=>{if(u.money<2500){l.toast("Not enough money for a ticket (2 500 \u0441\u043E\u043C)",2);return}u.money-=2500,h.cash(),Gt("airportMenu").classList.add("hidden"),V()},Gt("apSpot").onclick=()=>{Gt("airportMenu").classList.add("hidden"),ct()},Gt("apTaxi").onclick=()=>{Gt("airportMenu").classList.add("hidden"),u.mission&&u.cancelMission(C);let z=u.startTaxi(f,C);z&&(z.x=d.dropoff.x+d.n.x*6,z.z=d.dropoff.y+d.n.y*6,z.ped&&(z.ped.x=z.ped.tx=z.x,z.ped.z=z.ped.tz=z.z),z.dest=Ze.filter(A=>!A.airport)[Math.floor(Math.random()*(Ze.length-1))],u.setRoute(z.x,z.z,"Passenger"),l.toast(`\u{1F695} Airport transfer: <b>${z.passenger}</b> just landed and needs a ride to ${z.dest.name}`,4))},Gt("apClose").onclick=()=>Gt("airportMenu").classList.add("hidden");function ot(z){Gt("fade").classList.toggle("on",z)}async function V(){ot(!0),await fi(700),E.flight=d.createScenicFlight(),E.mode="flight",E.flightCam=0,d.scenicCamera(E.flight,0,Wt,nt),s.position.copy(Wt),ht.copy(nt),c.radius=2600,i.fog.far=9e3,s.far=12e3,s.updateProjectionMatrix(),f.group.visible=!0,Gt("boarding").classList.add("show"),setTimeout(()=>Gt("boarding").classList.remove("show"),4500),h.pa(),ot(!1)}async function J(z){if(!E.flight||E.ending)return;E.ending=!0;let A=E.flight;ot(!0),await fi(700),d.endScenic(A),E.flight=null,E.ending=!1,E.mode="drive",c.radius=_,s.far=4200,s.updateProjectionMatrix(),l.setFlightInfo(null),T.pos.set(f.x-Math.sin(f.h)*8,3,f.z-Math.cos(f.h)*8),ot(!1),l.toast(z?"Flight skipped \u2013 back at Manas airport":"Welcome back to Bishkek! Thank you for flying Ala-Too Air.",3)}function ct(){E.mode="spot";let z=d.planes.find(A=>A.state==="approach"||A.state==="flare");z||(z=d._newPlane(),d._startApproach(z,.45)),E.spot={pl:z,cam:new I(d.spotter.x,2.2,d.spotter.y)},ht.set(z.x,z.y,z.z),l.toast("Plane spotting \u2013 watch the landing. [Esc] to exit",3)}function rt(){E.mode="drive",E.spot=null}if("ontouchstart"in window){Gt("touch").classList.remove("hidden");let z=(A,w,k)=>{let $=Gt(A);$.addEventListener("touchstart",et=>{et.preventDefault(),h.start(),w()}),$.addEventListener("touchend",et=>{et.preventDefault(),k()})};z("tLeft",()=>M.steer=-1,()=>M.steer=0),z("tRight",()=>M.steer=1,()=>M.steer=0),z("tGas",()=>M.gas=1,()=>M.gas=0),z("tBrake",()=>M.brake=1,()=>M.brake=0),z("tHand",()=>M.hand=!0,()=>M.hand=!1),z("tCam",()=>b("KeyC"),()=>{}),z("tMap",()=>b("KeyM"),()=>{}),z("tAct",()=>b("KeyE"),()=>{})}window.addEventListener("resize",()=>{s.aspect=window.innerWidth/window.innerHeight,s.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight)});let mt=new yo,Lt={x:0,z:0,h:0,speed:0,spec:f.spec,vx:0,vz:0,radius:1},It={},Wt=new I,nt=new I,ht=new I,L=0,Dt=0;function lt(z){E.photoCbs.push(z)}let Et=document.createElement("canvas");Et.width=320,Et.height=180,Gt("loading").classList.add("hidden"),Gt("menu").classList.remove("hidden");function pt(z,A){return d.rel(new tt(z,A)).x>-2500&&A<-15500?"Manas International Airport":A<-3600?"Bishkek \u2013 Manas airport road":A<300?z<500?"Pervomaisky district":"Sverdlovsky district":z<0?"Leninsky district":"Oktyabrsky district"}function Ht(){requestAnimationFrame(Ht);let z=Math.min(.05,mt.getDelta()),A=!E.paused&&E.mode!=="menu";A||(z=0),E.time+=z,Hn.uTime.value+=z,E.hour=(E.hour+z/60*S.timeSpeed)%24,o.setHour(E.hour);let w=E.hour;v.rush=w>7.5&&w<10||w>17&&w<20?1.65:w>23||w<6?.45:1;let k=E.keys,$=(k.KeyD||k.ArrowRight?1:0)-(k.KeyA||k.ArrowLeft?1:0)+M.steer,et=(k.KeyW||k.ArrowUp?1:0)+M.gas,Q=(k.KeyS||k.ArrowDown?1:0)+M.brake,Tt=navigator.getGamepads?[...navigator.getGamepads()].find(vt=>vt):null;Tt&&(Math.abs(Tt.axes[0])>.12&&($=Tt.axes[0]),Tt.buttons[7]&&(et=Math.max(et,Tt.buttons[7].value)),Tt.buttons[6]&&(Q=Math.max(Q,Tt.buttons[6].value))),E.steer+=(Ue.clamp($,-1,1)-E.steer)*Math.min(1,z*($===0?7:4.5));let gt={steer:E.steer,throttle:Math.min(1,et),brake:Math.min(1,Q),hand:!!(k.Space||M.hand||Tt&&Tt.buttons[0]?.pressed)};f.throttleOn=gt.throttle>0;let Mt=o.night;if(f.night=Mt>.45,A){if(E.mode==="drive"||E.mode==="spot"){let ft=E.mode==="spot"?{steer:0,throttle:0,brake:1,hand:!0}:gt;f.update(z,ft,c,v,(Vt,Xt)=>{T.shake=Math.min(.6,Vt*.04),h.crash(Vt),Vt>6&&l.toast(Xt==="car"?"\u{1F4A5} Collision! Careful \u2013 Bishkek drivers will honk at you.":"\u{1F4A5} Crash!",1.5)})}let vt=E.mode==="flight"?Object.assign(Lt,{x:E.flight.plane.x,z:E.flight.plane.z,h:E.flight.plane.h,speed:0}):f;v.night=Mt,v.update(z,vt.x!==void 0&&E.mode==="flight"?Lt:f,S.peds>0?C:null),C.update(z,E.mode==="flight"?Lt:f,S.peds>0);for(let ft of v.honks){let Vt=Math.hypot(ft.x-f.x,ft.z-f.z);h.horn(Math.min(.3,6/(Vt+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(d.update(z,Mt,f,E.flight?E.flight.plane:null),p.update(z,E.time,Mt),E.mode==="drive"){let ft=t.nearestRoad(f.x,f.z,25);It.road=ft&&ft.dist<ft.e.w/2+4?ft:null;let Vt=It.road?t.roadName(It.road.e.name):null;It.street=Vt?Vt.en:null,u.trafficTime=v.time,u.checkRules(z,f,It,null,d,lt),u.checkLandmarks(f),u.updateMission(z,f,C),l.setStreet(Vt?Vt.en!==Vt.local?`${Vt.en} \xB7 ${Vt.local}`:Vt.local:It.runway?"Runway 07/25":"",pt(f.x,f.z)),l.setLimit(f.speed*3.6,It.wrongWay,It.runway);let Xt=Math.hypot(f.x-d.dropoff.x,f.z-d.dropoff.y),ce=Math.hypot(f.x-d.spotter.x,f.z-d.spotter.y);Gt("hint").textContent=Xt<14?"Press E \u2013 Manas Airport: flights, plane spotting, airport taxi":ce<14?"Press E \u2013 watch planes land":"",Gt("hint").classList.toggle("show",Xt<14||ce<14)}else Gt("hint").classList.remove("show");if(E.mode==="flight"){let ft=["pushback","taxi","taxiIn"].includes(E.flight.stage)?z*3:z;!E.ending&&d.updateScenic(E.flight,ft)&&J(!1)}u.updateRoute(E.mode==="flight"?Lt:f,i),u.routeMat&&(u.routeMat.uniforms.uTime.value=E.time);let Pt=u.mission;if(Pt){let ft=Math.hypot(f.x-Pt.x,f.z-Pt.z);l.setMission(Pt.stage==="pickup"?`\u{1F695} <b>Taxi</b>: pick up ${Pt.passenger} \xB7 ${yl(ft)}<small>J \u2013 cancel job</small>`:`\u{1F695} <b>${Pt.passenger}</b> \u2192 ${Pt.dest.name} \xB7 ${yl(ft)}<small>Fare ${di(Pt.fare)} \u0441\u043E\u043C \xB7 stop at the destination</small>`)}else u.routeTarget?l.setMission(`\u{1F4CD} GPS: ${u.routeTarget.label} \xB7 ${yl(Math.hypot(f.x-u.routeTarget.x,f.z-u.routeTarget.z))}<small>G \u2013 clear route</small>`):l.setMission("<b>J</b> \u2013 start a taxi job \xB7 <b>M</b> \u2013 city map");E.lastSave+=z,E.lastSave>10&&(E.lastSave=0,u.save(f))}if(E.mode==="flight"&&E.flight){d.scenicCamera(E.flight,E.flightCam,Wt,nt);let vt=E.flightCam===0?1-Math.exp(-z*4):1;s.position.lerp(Wt,vt||1),ht.lerp(nt,E.flightCam===0?1-Math.exp(-z*6):1),s.lookAt(ht),s.fov=E.flightCam===2?70:55,s.updateProjectionMatrix();let Pt=E.flight.plane,ft=(Math.atan2(Math.sin(Pt.h),-Math.cos(Pt.h))*180/Math.PI+360)%360;l.setFlightInfo({alt:Pt.y-Pt.a.groundY+627,spd:Pt.v,hdg:ft,stage:{pushback:"Pushback",taxi:"Taxiing to runway 07",roll:"Take-off roll",air:"Scenic flight over Bishkek",final:"Final approach \u2013 runway 07",taxiIn:"Taxi to gate",done:"Arrived"}[E.flight.stage],cam:["Chase","Window seat","Cockpit","Spotter"][E.flightCam]})}else if(E.mode!=="free"){if(E.mode==="spot"&&E.spot){let vt=E.spot.pl;s.position.copy(E.spot.cam),ht.lerp(new I(vt.x,vt.y,vt.z),1-Math.exp(-z*5)),s.lookAt(ht);let Pt=Math.hypot(vt.x-E.spot.cam.x,vt.z-E.spot.cam.z);s.fov=Ue.clamp(Pt/40,12,60),s.updateProjectionMatrix(),(!d.planes.includes(vt)||vt.state==="taxiIn"||vt.state==="climb"||vt.state==="goaround"&&vt.y>300)&&E.time>0&&(rt(),l.toast("Landing complete",1.5))}else if(P||(E.mouseYaw*=Math.exp(-z*2)),T.update(Math.max(z,.001),f,E.mouseYaw),E.mode==="menu"){let vt=performance.now()*5e-5;s.position.set(f.x+Math.sin(vt)*60,28,f.z+Math.cos(vt)*60),s.lookAt(f.x,4,f.z)}}let jt=E.mode==="flight"&&E.flight?{x:E.flight.plane.x,z:E.flight.plane.z}:{x:f.x,z:f.z};c.update(E.mode==="flight"||E.mode==="free"?{x:s.position.x,z:s.position.z}:jt,z);let ut=o.update(s,E.mode==="flight"?jt:f);E.mode==="flight"?(o.sun.shadow.camera.left=o.sun.shadow.camera.bottom=-160,o.sun.shadow.camera.right=o.sun.shadow.camera.top=160,o.sun.shadow.camera.updateProjectionMatrix()):o.sun.shadow.camera.right!==110&&(o.sun.shadow.camera.left=o.sun.shadow.camera.bottom=-110,o.sun.shadow.camera.right=o.sun.shadow.camera.top=110,o.sun.shadow.camera.updateProjectionMatrix()),c.setNight(ut.night),E.mode!=="flight"&&(i.fog.near=250,i.fog.far=c.radius+300);let Rt=d.noiseAt(s.position.x,s.position.z,s.position.y);if(h.update(z,f,{throttle:gt.throttle,inFlight:E.mode==="flight",cityLevel:Math.min(1,v.cars.length/200)*(Math.abs(f.z)<4e3?1:.2),jet:E.mode==="flight"?.35:Rt}),n.clear(),o.render(n),n.clearDepth(),n.render(i,s),E.photoCbs.length){let vt=Et.getContext("2d");vt.drawImage(n.domElement,0,0,320,180),vt.fillStyle="rgba(0,0,0,0.55)",vt.fillRect(0,158,320,22),vt.fillStyle="#ffeb3b",vt.font="bold 12px monospace",vt.fillText(`${Math.round(f.speed*3.6)} km/h  LIMIT 150  ${l.clockText()}  01KG`,8,173);let Pt=Et.toDataURL("image/jpeg",.7);for(let ft of E.photoCbs)ft(Pt);E.photoCbs.length=0}E.mode!=="menu"&&(l.drawSpeedo(f),Dt++,L+=z,Dt%3===0&&l.drawMini(f,v,u,d),l.setMoney(u.money,u.fines.length),l.setClock(E.hour,v.jamLevel(f.x,f.z)),E.mapOpen&&l.drawBigMap(f,u,d),Gt("hudRoot").classList.toggle("flightmode",E.mode==="flight"||E.mode==="spot"))}Ht()}function yl(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}Fx().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
