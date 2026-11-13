(()=>{var gl="170";var wf=0,th=1,Ef=2;var du=1,xl=2,Wn=3,pi=0,We=1,Me=2,Cn=0,ds=1,Je=2,eh=3,nh=4,Sf=5,Di=100,Tf=101,Af=102,Rf=103,Cf=104,Pf=200,If=201,Lf=202,Df=203,Ya=204,$a=205,zf=206,Uf=207,Nf=208,Bf=209,Ff=210,Of=211,kf=212,Hf=213,Vf=214,Za=0,Ja=1,Ka=2,xs=3,ja=4,Qa=5,tc=6,ec=7,pu=0,Gf=1,Wf=2,fi=0,vl=1,yl=2,_l=3,vr=4,Xf=5,Ml=6,bl=7;var mu=300,vs=301,ys=302,nc=303,ic=304,Uo=306,rr=1e3,Ui=1001,sc=1002,cn=1003,qf=1004;var Sr=1005;var An=1006,da=1007;var Ni=1008;var $n=1009,gu=1010,xu=1011,or=1012,wl=1013,Bi=1014,Rn=1015,ln=1016,El=1017,Sl=1018,_s=1020,vu=35902,yu=1021,_u=1022,_n=1023,Mu=1024,bu=1025,ps=1026,Ms=1027,Tl=1028,Al=1029,wu=1030,Rl=1031;var Cl=1033,no=33776,io=33777,so=33778,ro=33779,rc=35840,oc=35841,ac=35842,cc=35843,lc=36196,hc=37492,uc=37496,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,xc=37813,vc=37814,yc=37815,_c=37816,Mc=37817,bc=37818,wc=37819,Ec=37820,Sc=37821,oo=36492,Tc=36494,Ac=36495,Eu=36283,Rc=36284,Cc=36285,Pc=36286;var ao=2300,Ic=2301,pa=2302,ih=2400,sh=2401,rh=2402;var Yf=3200,$f=3201;var Su=0,Zf=1,hi="",pe="srgb",zs="srgb-linear",No="linear",he="srgb";var qi=7680;var oh=519,Jf=512,Kf=513,jf=514,Tu=515,Qf=516,td=517,ed=518,nd=519,Lc=35044,Bo=35048;var ah="300 es",qn=2e3,co=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ch=1234567,tr=Math.PI/180,bs=180/Math.PI;function Pn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[r&255]+Ve[r>>8&255]+Ve[r>>16&255]+Ve[r>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Ce(r,t,e){return Math.max(t,Math.min(e,r))}function Pl(r,t){return(r%t+t)%t}function id(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function sd(r,t,e){return r!==t?(e-r)/(t-r):0}function er(r,t,e){return(1-e)*r+e*t}function rd(r,t,e,n){return er(r,t,1-Math.exp(-e*n))}function od(r,t=1){return t-Math.abs(Pl(r,t*2)-t)}function ad(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function cd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ld(r,t){return r+Math.floor(Math.random()*(t-r+1))}function hd(r,t){return r+Math.random()*(t-r)}function ud(r){return r*(.5-Math.random())}function fd(r){r!==void 0&&(ch=r);let t=ch+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function dd(r){return r*tr}function pd(r){return r*bs}function md(r){return(r&r-1)===0&&r!==0}function gd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function xd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function vd(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),c=o(e/2),l=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,c*u,c*d,a*l);break;case"YZY":r.set(c*d,a*h,c*u,a*l);break;case"ZXZ":r.set(c*u,c*d,a*h,a*l);break;case"XZX":r.set(a*h,c*g,c*f,a*l);break;case"YXY":r.set(c*f,a*h,c*g,a*l);break;case"ZYZ":r.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function yn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function fe(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Fe={DEG2RAD:tr,RAD2DEG:bs,generateUUID:Pn,clamp:Ce,euclideanModulo:Pl,mapLinear:id,inverseLerp:sd,lerp:er,damp:rd,pingpong:od,smoothstep:ad,smootherstep:cd,randInt:ld,randFloat:hd,randFloatSpread:ud,seededRandom:fd,degToRad:dd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:xd,setQuaternionFromProperEuler:vd,normalize:fe,denormalize:yn},Q=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class r{constructor(t,e,n,i,s,o,a,c,l){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l)}set(t,e,n,i,s,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],p=i[0],m=i[3],x=i[6],M=i[1],y=i[4],v=i[7],A=i[2],E=i[5],S=i[8];return s[0]=o*p+a*M+c*A,s[3]=o*m+a*y+c*E,s[6]=o*x+a*v+c*S,s[1]=l*p+h*M+u*A,s[4]=l*m+h*y+u*E,s[7]=l*x+h*v+u*S,s[2]=d*p+f*M+g*A,s[5]=d*m+f*y+g*E,s[8]=d*x+f*v+g*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*s*h+n*a*c+i*s*l-i*o*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*s,f=l*s-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return t[0]=u*p,t[1]=(i*l-h*n)*p,t[2]=(a*n-i*o)*p,t[3]=d*p,t[4]=(h*e-i*c)*p,t[5]=(i*s-a*e)*p,t[6]=f*p,t[7]=(n*c-l*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ma.makeScale(t,e)),this}rotate(t){return this.premultiply(ma.makeRotation(-t)),this}translate(t,e){return this.premultiply(ma.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ma=new Kt;function Au(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yd(){let r=lo("canvas");return r.style.display="block",r}var lh={};function js(r){r in lh||(lh[r]=!0,console.warn(r))}function _d(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Md(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bd(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ie={enabled:!0,workingColorSpace:zs,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(r.r=Yn(r.r),r.g=Yn(r.g),r.b=Yn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(r.r=ms(r.r),r.g=ms(r.g),r.b=ms(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===hi?No:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Yn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ms(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var hh=[.64,.33,.3,.6,.15,.06],uh=[.2126,.7152,.0722],fh=[.3127,.329],dh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ph=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ie.define({[zs]:{primaries:hh,whitePoint:fh,transfer:No,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:uh,workingColorSpaceConfig:{unpackColorSpace:pe},outputColorSpaceConfig:{drawingBufferColorSpace:pe}},[pe]:{primaries:hh,whitePoint:fh,transfer:he,toXYZ:dh,fromXYZ:ph,luminanceCoefficients:uh,outputColorSpaceConfig:{drawingBufferColorSpace:pe}}});var Yi,Dc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Yi===void 0&&(Yi=lo("canvas")),Yi.width=t.width,Yi.height=t.height;let n=Yi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Yi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=lo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Yn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},wd=0,ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(ga(i[o].image)):s.push(ga(i[o]))}else s=ga(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function ga(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Dc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ed=0,nn=class r extends mi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Ui,i=Ui,s=An,o=Ni,a=_n,c=$n,l=r.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Pn(),this.name="",this.source=new ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Q(0,0),this.repeat=new Q(1,1),this.center=new Q(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==mu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case rr:t.x=t.x-Math.floor(t.x);break;case Ui:t.x=t.x<0?0:1;break;case sc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case rr:t.y=t.y-Math.floor(t.y);break;case Ui:t.y=t.y<0?0:1;break;case sc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=mu;nn.DEFAULT_ANISOTROPY=1;var me=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],p=c[2],m=c[6],x=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let y=(l+1)/2,v=(f+1)/2,A=(x+1)/2,E=(h+d)/4,S=(u+p)/4,C=(g+m)/4;return y>v&&y>A?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=E/n,s=S/n):v>A?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):A<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(A),n=S/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-g)*(m-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-p)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+x-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},zc=class extends mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:An,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ho(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ke=class extends zc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},uo=class extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Uc=class extends nn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ne=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],g=s[o+2],p=s[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=p;return}if(u!==p||c!==d||l!==f||h!==g){let m=1-a,x=c*d+l*f+h*g+u*p,M=x>=0?1:-1,y=1-x*x;if(y>Number.EPSILON){let A=Math.sqrt(y),E=Math.atan2(A,x*M);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}let v=a*M;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+p*v,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(s/2),d=c(n/2),f=c(i/2),g=c(s/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(s-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+l)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-s*c,this._y=i*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(mh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(mh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-s*u,this.z=i+c*u+s*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-s*a,this.y=s*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ce(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},xa=new L,mh=new Ne,Zn=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,gn):gn.fromBufferAttribute(s,o),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(t.matrixWorld),this.union(Tr)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Vs),Ar.subVectors(this.max,Vs),$i.subVectors(t.a,Vs),Zi.subVectors(t.b,Vs),Ji.subVectors(t.c,Vs),si.subVectors(Zi,$i),ri.subVectors(Ji,Zi),Ti.subVectors($i,Ji);let e=[0,-si.z,si.y,0,-ri.z,ri.y,0,-Ti.z,Ti.y,si.z,0,-si.x,ri.z,0,-ri.x,Ti.z,0,-Ti.x,-si.y,si.x,0,-ri.y,ri.x,0,-Ti.y,Ti.x,0];return!va(e,$i,Zi,Ji,Ar)||(e=[1,0,0,0,1,0,0,0,1],!va(e,$i,Zi,Ji,Ar))?!1:(Rr.crossVectors(si,ri),e=[Rr.x,Rr.y,Rr.z],va(e,$i,Zi,Ji,Ar))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},On=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,Tr=new Zn,$i=new L,Zi=new L,Ji=new L,si=new L,ri=new L,Ti=new L,Vs=new L,Ar=new L,Rr=new L,Ai=new L;function va(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ai.fromArray(r,s);let a=i.x*Math.abs(Ai.x)+i.y*Math.abs(Ai.y)+i.z*Math.abs(Ai.z),c=t.dot(Ai),l=e.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Sd=new Zn,Gs=new L,ya=new L,gi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Sd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Gs.subVectors(t,this.center);let e=Gs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Gs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Gs.copy(t.center).add(ya)),this.expandByPoint(Gs.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},kn=new L,_a=new L,Cr=new L,oi=new L,Ma=new L,Pr=new L,ba=new L,fo=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){_a.copy(t).add(e).multiplyScalar(.5),Cr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(_a);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Cr),a=oi.dot(this.direction),c=-oi.dot(Cr),l=oi.lengthSq(),h=Math.abs(1-o*o),u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=s*h,u>=0)if(d>=-g)if(d<=g){let p=1/h;u*=p,d*=p,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-s,-c),s),f=d*(d+2*c)+l):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-c),s),f=-u*u+d*(d+2*c)+l);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_a).addScaledVector(Cr,d),f}intersectSphere(t,e){kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),i=kn.dot(kn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,i,s){Ma.subVectors(e,t),Pr.subVectors(n,t),ba.crossVectors(Ma,Pr);let o=this.direction.dot(ba),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,t);let c=a*this.direction.dot(Pr.crossVectors(oi,Pr));if(c<0)return null;let l=a*this.direction.dot(Ma.cross(oi));if(l<0||c+l>o)return null;let h=-a*oi.dot(ba);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class r{constructor(t,e,n,i,s,o,a,c,l,h,u,d,f,g,p,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,c,l,h,u,d,f,g,p,m)}set(t,e,n,i,s,o,a,c,l,h,u,d,f,g,p,m){let x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=s,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=h,x[10]=u,x[14]=d,x[3]=f,x[7]=g,x[11]=p,x[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ki.setFromMatrixColumn(t,0).length(),s=1/Ki.setFromMatrixColumn(t,1).length(),o=1/Ki.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,g=a*h,p=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-p*l,e[9]=-a*c,e[2]=p-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,f=c*u,g=l*h,p=l*u;e[0]=d+p*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=p+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,f=c*u,g=l*h,p=l*u;e[0]=d-p*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=p-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,f=o*u,g=a*h,p=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+p,e[1]=c*u,e[5]=p*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,f=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=p-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-p*u}else if(t.order==="XZY"){let d=o*c,f=o*l,g=a*c,p=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+p,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=p*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Td,t,Ad)}lookAt(t,e,n){let i=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ai.crossVectors(n,on),ai.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ai.crossVectors(n,on)),ai.normalize(),Ir.crossVectors(on,ai),i[0]=ai.x,i[4]=Ir.x,i[8]=on.x,i[1]=ai.y,i[5]=Ir.y,i[9]=on.y,i[2]=ai.z,i[6]=Ir.z,i[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],p=n[6],m=n[10],x=n[14],M=n[3],y=n[7],v=n[11],A=n[15],E=i[0],S=i[4],C=i[8],_=i[12],w=i[1],b=i[5],z=i[9],D=i[13],N=i[2],F=i[6],B=i[10],X=i[14],H=i[3],W=i[7],K=i[11],lt=i[15];return s[0]=o*E+a*w+c*N+l*H,s[4]=o*S+a*b+c*F+l*W,s[8]=o*C+a*z+c*B+l*K,s[12]=o*_+a*D+c*X+l*lt,s[1]=h*E+u*w+d*N+f*H,s[5]=h*S+u*b+d*F+f*W,s[9]=h*C+u*z+d*B+f*K,s[13]=h*_+u*D+d*X+f*lt,s[2]=g*E+p*w+m*N+x*H,s[6]=g*S+p*b+m*F+x*W,s[10]=g*C+p*z+m*B+x*K,s[14]=g*_+p*D+m*X+x*lt,s[3]=M*E+y*w+v*N+A*H,s[7]=M*S+y*b+v*F+A*W,s[11]=M*C+y*z+v*B+A*K,s[15]=M*_+y*D+v*X+A*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],p=t[7],m=t[11],x=t[15];return g*(+s*c*u-i*l*u-s*a*d+n*l*d+i*a*f-n*c*f)+p*(+e*c*f-e*l*d+s*o*d-i*o*f+i*l*h-s*c*h)+m*(+e*l*u-e*a*f-s*o*u+n*o*f+s*a*h-n*l*h)+x*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],p=t[13],m=t[14],x=t[15],M=u*m*l-p*d*l+p*c*f-a*m*f-u*c*x+a*d*x,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*x-o*d*x,v=h*p*l-g*u*l+g*a*f-o*p*f-h*a*x+o*u*x,A=g*u*c-h*p*c-g*a*d+o*p*d+h*a*m-o*u*m,E=e*M+n*y+i*v+s*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/E;return t[0]=M*S,t[1]=(p*d*s-u*m*s-p*i*f+n*m*f+u*i*x-n*d*x)*S,t[2]=(a*m*s-p*c*s+p*i*l-n*m*l-a*i*x+n*c*x)*S,t[3]=(u*c*s-a*d*s-u*i*l+n*d*l+a*i*f-n*c*f)*S,t[4]=y*S,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*x+e*d*x)*S,t[6]=(g*c*s-o*m*s-g*i*l+e*m*l+o*i*x-e*c*x)*S,t[7]=(o*d*s-h*c*s+h*i*l-e*d*l-o*i*f+e*c*f)*S,t[8]=v*S,t[9]=(g*u*s-h*p*s-g*n*f+e*p*f+h*n*x-e*u*x)*S,t[10]=(o*p*s-g*a*s+g*n*l-e*p*l-o*n*x+e*a*x)*S,t[11]=(h*a*s-o*u*s-h*n*l+e*u*l+o*n*f-e*a*f)*S,t[12]=A*S,t[13]=(h*p*i-g*u*i+g*n*d-e*p*d-h*n*m+e*u*m)*S,t[14]=(g*a*i-o*p*i-g*n*c+e*p*c+o*n*m-e*a*m)*S,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,c=t.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,c=e._w,l=s+s,h=o+o,u=a+a,d=s*l,f=s*h,g=s*u,p=o*h,m=o*u,x=a*u,M=c*l,y=c*h,v=c*u,A=n.x,E=n.y,S=n.z;return i[0]=(1-(p+x))*A,i[1]=(f+v)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+x))*E,i[6]=(m+M)*E,i[7]=0,i[8]=(g+y)*S,i[9]=(m-M)*S,i[10]=(1-(d+p))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ki.set(i[0],i[1],i[2]).length(),o=Ki.set(i[4],i[5],i[6]).length(),a=Ki.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],xn.copy(this);let l=1/s,h=1/o,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=qn){let c=this.elements,l=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i),f,g;if(a===qn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===co)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=qn){let c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*l,f=(n+i)*h,g,p;if(a===qn)g=(o+s)*u,p=-2*u;else if(a===co)g=s*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=p,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ki=new L,xn=new ee,Td=new L(0,0,0),Ad=new L(1,1,1),ai=new L,Ir=new L,on=new L,gh=new ee,xh=new Ne,sn=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return gh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(gh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return xh.setFromEuler(this),this.setFromQuaternion(xh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};sn.DEFAULT_ORDER="XYZ";var po=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Rd=0,vh=new L,ji=new Ne,Hn=new ee,Lr=new L,Ws=new L,Cd=new L,Pd=new Ne,yh=new L(1,0,0),_h=new L(0,1,0),Mh=new L(0,0,1),bh={type:"added"},Id={type:"removed"},Qi={type:"childadded",child:null},wa={type:"childremoved",child:null},Se=class r extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new L,e=new sn,n=new Ne,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new Kt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new po,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.multiply(ji),this}rotateOnWorldAxis(t,e){return ji.setFromAxisAngle(t,e),this.quaternion.premultiply(ji),this}rotateX(t){return this.rotateOnAxis(yh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(Mh,t)}translateOnAxis(t,e){return vh.copy(t).applyQuaternion(this.quaternion),this.position.add(vh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(Mh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Hn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Lr.copy(t):Lr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Hn.lookAt(Ws,Lr,this.up):Hn.lookAt(Lr,Ws,this.up),this.quaternion.setFromRotationMatrix(Hn),i&&(Hn.extractRotation(i.matrixWorld),ji.setFromRotationMatrix(Hn),this.quaternion.premultiply(ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(bh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Id),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Hn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Hn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Hn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(bh),Qi.child=t,this.dispatchEvent(Qi),Qi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,t,Cd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ws,Pd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];s(t.shapes,u)}else s(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(t.materials,this.material[c]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(s(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Se.DEFAULT_UP=new L(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new L,Vn=new L,Ea=new L,Gn=new L,ts=new L,es=new L,wh=new L,Sa=new L,Ta=new L,Aa=new L,Ra=new me,Ca=new me,Pa=new me,ui=class r{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),vn.subVectors(t,e),i.cross(vn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){vn.subVectors(i,e),Vn.subVectors(n,e),Ea.subVectors(t,e);let o=vn.dot(vn),a=vn.dot(Vn),c=vn.dot(Ea),l=Vn.dot(Vn),h=Vn.dot(Ea),u=o*l-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,i,s,o,a,c){return this.getBarycoord(t,e,n,i,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Gn.x),c.addScaledVector(o,Gn.y),c.addScaledVector(a,Gn.z),c)}static getInterpolatedAttribute(t,e,n,i,s,o){return Ra.setScalar(0),Ca.setScalar(0),Pa.setScalar(0),Ra.fromBufferAttribute(t,e),Ca.fromBufferAttribute(t,n),Pa.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Ra,s.x),o.addScaledVector(Ca,s.y),o.addScaledVector(Pa,s.z),o}static isFrontFacing(t,e,n,i){return vn.subVectors(n,e),Vn.subVectors(t,e),vn.cross(Vn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;ts.subVectors(i,n),es.subVectors(s,n),Sa.subVectors(t,n);let c=ts.dot(Sa),l=es.dot(Sa);if(c<=0&&l<=0)return e.copy(n);Ta.subVectors(t,i);let h=ts.dot(Ta),u=es.dot(Ta);if(h>=0&&u<=h)return e.copy(i);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(ts,o);Aa.subVectors(t,s);let f=ts.dot(Aa),g=es.dot(Aa);if(g>=0&&f<=g)return e.copy(s);let p=f*l-c*g;if(p<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(es,a);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return wh.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(wh,a);let x=1/(m+p+d);return o=p*x,a=d*x,e.copy(n).addScaledVector(ts,o).addScaledVector(es,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Ru={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Ia(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=Pl(t,1),e=Ce(e,0,1),n=Ce(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Ia(o,s,t+1/3),this.g=Ia(o,s,t),this.b=Ia(o,s,t-1/3)}return ie.toWorkingColorSpace(this,i),this}setStyle(t,e=pe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pe){let n=Ru[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pe){return ie.fromWorkingColorSpace(Ge.copy(this),t),Math.round(Ce(Ge.r*255,0,255))*65536+Math.round(Ce(Ge.g*255,0,255))*256+Math.round(Ce(Ge.b*255,0,255))}getHexString(t=pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.fromWorkingColorSpace(Ge.copy(this),e);let n=Ge.r,i=Ge.g,s=Ge.b,o=Math.max(n,i,s),a=Math.min(n,i,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-s)/u+(i<s?6:0);break;case i:c=(s-n)/u+2;break;case s:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ie.workingColorSpace){return ie.fromWorkingColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=pe){ie.fromWorkingColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,i=Ge.b;return t!==pe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Dr);let n=er(ci.h,Dr.h,e),i=er(ci.s,Dr.s,e),s=er(ci.l,Dr.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new bt;bt.NAMES=Ru;var Ld=0,Jn=class extends mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ld++}),this.uuid=Pn(),this.name="",this.blending=ds,this.side=pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ya,this.blendDst=$a,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=xs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qi,this.stencilZFail=qi,this.stencilZPass=qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(n.blending=this.blending),this.side!==pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ya&&(n.blendSrc=this.blendSrc),this.blendDst!==$a&&(n.blendDst=this.blendDst),this.blendEquation!==Di&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==xs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ue=class extends Jn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Re=new L,zr=new Q,ae=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=Rn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zr.fromBufferAttribute(this,e),zr.applyMatrix3(t),this.setXY(e,zr.x,zr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix3(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyMatrix4(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.applyNormalMatrix(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Re.fromBufferAttribute(this,e),Re.transformDirection(t),this.setXYZ(e,Re.x,Re.y,Re.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=yn(e,this.array)),e}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=yn(e,this.array)),e}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=yn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=yn(e,this.array)),e}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}};var ws=class extends ae{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Es=class extends ae{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Vt=class extends ae{constructor(t,e,n){super(new Float32Array(t),e,n)}},Dd=0,fn=new ee,La=new Se,ns=new L,an=new Zn,Xs=new Zn,Ue=new L,ne=class r extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Au(t)?Es:ws)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return La.lookAt(t),La.updateMatrix(),this.applyMatrix4(La.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Vt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];an.setFromBufferAttribute(s),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ue.addVectors(an.min,Xs.min),an.expandByPoint(Ue),Ue.addVectors(an.max,Xs.max),an.expandByPoint(Ue)):(an.expandByPoint(Xs.min),an.expandByPoint(Xs.max))}an.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ue.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ue));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ue.fromBufferAttribute(a,l),c&&(ns.fromBufferAttribute(t,l),Ue.add(ns)),i=Math.max(i,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ae(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;let l=new L,h=new L,u=new L,d=new Q,f=new Q,g=new Q,p=new L,m=new L;function x(C,_,w){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,_),u.fromBufferAttribute(n,w),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,_),g.fromBufferAttribute(s,w),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let b=1/(f.x*g.y-g.x*f.y);isFinite(b)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(b),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(b),a[C].add(p),a[_].add(p),a[w].add(p),c[C].add(m),c[_].add(m),c[w].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,_=M.length;C<_;++C){let w=M[C],b=w.start,z=w.count;for(let D=b,N=b+z;D<N;D+=3)x(t.getX(D+0),t.getX(D+1),t.getX(D+2))}let y=new L,v=new L,A=new L,E=new L;function S(C){A.fromBufferAttribute(i,C),E.copy(A);let _=a[C];y.copy(_),y.sub(A.multiplyScalar(A.dot(_))).normalize(),v.crossVectors(E,_);let b=v.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,b)}for(let C=0,_=M.length;C<_;++C){let w=M[C],b=w.start,z=w.count;for(let D=b,N=b+z;D<N;D+=3)S(t.getX(D+0)),S(t.getX(D+1)),S(t.getX(D+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ae(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){let g=t.getX(d+0),p=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,p),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let p=0,m=c.length;p<m;p++){a.isInterleavedBufferAttribute?f=c[p]*a.data.stride+a.offset:f=c[p]*h;for(let x=0;x<h;x++)d[g++]=l[f++]}return new ae(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=t(c,n);e.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let l in i){let h=i[l];this.setAttribute(l,h.clone(e))}let s=t.morphAttributes;for(let l in s){let h=[],u=s[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Eh=new ee,Ri=new fo,Ur=new gi,Sh=new L,Nr=new L,Br=new L,Fr=new L,Da=new L,Or=new L,Th=new L,kr=new L,it=class extends Se{constructor(t=new ne,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Or.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],u=s[c];h!==0&&(Da.fromBufferAttribute(u,t),o?Or.addScaledVector(Da,h):Or.addScaledVector(Da.sub(e),h))}e.add(Or)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ur.copy(n.boundingSphere),Ur.applyMatrix4(s),Ri.copy(t.ray).recast(t.near),!(Ur.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Ur,Sh)===null||Ri.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(Eh.copy(s).invert(),Ri.copy(t.ray).applyMatrix4(Eh),!(n.boundingBox!==null&&Ri.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,p=d.length;g<p;g++){let m=d[g],x=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,A=y;v<A;v+=3){let E=a.getX(v),S=a.getX(v+1),C=a.getX(v+2);i=Hr(this,x,t,n,l,h,u,E,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),p=Math.min(a.count,f.start+f.count);for(let m=g,x=p;m<x;m+=3){let M=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Hr(this,o,t,n,l,h,u,M,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,p=d.length;g<p;g++){let m=d[g],x=o[m.materialIndex],M=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=M,A=y;v<A;v+=3){let E=v,S=v+1,C=v+2;i=Hr(this,x,t,n,l,h,u,E,S,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),p=Math.min(c.count,f.start+f.count);for(let m=g,x=p;m<x;m+=3){let M=m,y=m+1,v=m+2;i=Hr(this,o,t,n,l,h,u,M,y,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function zd(r,t,e,n,i,s,o,a){let c;if(t.side===We?c=n.intersectTriangle(o,s,i,!0,a):c=n.intersectTriangle(i,s,o,t.side===pi,a),c===null)return null;kr.copy(a),kr.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(kr);return l<e.near||l>e.far?null:{distance:l,point:kr.clone(),object:r}}function Hr(r,t,e,n,i,s,o,a,c,l){r.getVertexPosition(a,Nr),r.getVertexPosition(c,Br),r.getVertexPosition(l,Fr);let h=zd(r,t,e,n,Nr,Br,Fr,Th);if(h){let u=new L;ui.getBarycoord(Th,Nr,Br,Fr,u),i&&(h.uv=ui.getInterpolatedAttribute(i,a,c,l,u,new Q)),s&&(h.uv1=ui.getInterpolatedAttribute(s,a,c,l,u,new Q)),o&&(h.normal=ui.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:c,c:l,normal:new L,materialIndex:0};ui.getNormal(Nr,Br,Fr,d.normal),h.face=d,h.barycoord=u}return h}var Gt=class r extends ne{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new Vt(l,3)),this.setAttribute("normal",new Vt(h,3)),this.setAttribute("uv",new Vt(u,2));function g(p,m,x,M,y,v,A,E,S,C,_){let w=v/S,b=A/C,z=v/2,D=A/2,N=E/2,F=S+1,B=C+1,X=0,H=0,W=new L;for(let K=0;K<B;K++){let lt=K*b-D;for(let ft=0;ft<F;ft++){let et=ft*w-z;W[p]=et*M,W[m]=lt*y,W[x]=N,l.push(W.x,W.y,W.z),W[p]=0,W[m]=0,W[x]=E>0?1:-1,h.push(W.x,W.y,W.z),u.push(ft/S),u.push(1-K/C),X+=1}}for(let K=0;K<C;K++)for(let lt=0;lt<S;lt++){let ft=d+lt+F*K,et=d+lt+F*(K+1),O=d+(lt+1)+F*(K+1),$=d+(lt+1)+F*K;c.push(ft,et,$),c.push(et,O,$),H+=6}a.addGroup(f,H,_),f+=H,d+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ss(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ze(r){let t={};for(let e=0;e<r.length;e++){let n=Ss(r[e]);for(let i in n)t[i]=n[i]}return t}function Ud(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Cu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var Dn={clone:Ss,merge:Ze},Nd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,de=class extends Jn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nd,this.fragmentShader=Bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ss(t.uniforms),this.uniformsGroups=Ud(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},mo=class extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},li=new L,Ah=new Q,Rh=new Q,Pe=class extends mo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){li.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(li.x,li.y).multiplyScalar(-t/li.z),li.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(li.x,li.y).multiplyScalar(-t/li.z)}getViewSize(t,e){return this.getViewBounds(t,Ah,Rh),e.subVectors(Rh,Ah)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},is=-90,ss=1,Nc=class extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Pe(is,ss,t,e);i.layers=this.layers,this.add(i);let s=new Pe(is,ss,t,e);s.layers=this.layers,this.add(s);let o=new Pe(is,ss,t,e);o.layers=this.layers,this.add(o);let a=new Pe(is,ss,t,e);a.layers=this.layers,this.add(a);let c=new Pe(is,ss,t,e);c.layers=this.layers,this.add(c);let l=new Pe(is,ss,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,c]=e;for(let l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=p,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},go=class extends nn{constructor(t,e,n,i,s,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,n,i,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Bc=class extends ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new go(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:An}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),s=new de({name:"CubemapFromEquirect",uniforms:Ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:We,blending:Cn});s.uniforms.tEquirect.value=e;let o=new it(i,s),a=e.minFilter;return e.minFilter===Ni&&(e.minFilter=An),new Nc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},za=new L,Fd=new L,Od=new Kt,Xn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=za.subVectors(n,e).cross(Fd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(za),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Od.getNormalMatrix(t),i=this.coplanarPoint(za).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new gi,Vr=new L,ar=class{constructor(t=new Xn,e=new Xn,n=new Xn,i=new Xn,s=new Xn,o=new Xn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],p=i[10],m=i[11],x=i[12],M=i[13],y=i[14],v=i[15];if(n[0].setComponents(c-s,d-l,m-f,v-x).normalize(),n[1].setComponents(c+s,d+l,m+f,v+x).normalize(),n[2].setComponents(c+o,d+h,m+g,v+M).normalize(),n[3].setComponents(c-o,d-h,m-g,v-M).normalize(),n[4].setComponents(c-a,d-u,m-p,v-y).normalize(),e===qn)n[5].setComponents(c+a,d+u,m+p,v+y).normalize();else if(e===co)n[5].setComponents(a,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Vr.x=i.normal.x>0?t.max.x:t.min.x,Vr.y=i.normal.y>0?t.max.y:t.min.y,Vr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Pu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function kd(r){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,u=l.byteLength,d=r.createBuffer();r.bindBuffer(c,d),r.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){let h=c.array,u=c.updateRanges;if(r.bindBuffer(l,a),u.length===0)r.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],p=u[f];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++d,u[d]=p)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let p=u[f];r.bufferSubData(l,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(r.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:s,update:o}}var Ee=class r extends ne{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],p=[],m=[];for(let x=0;x<h;x++){let M=x*d-o;for(let y=0;y<l;y++){let v=y*u-s;g.push(v,-M,0),p.push(0,0,1),m.push(y/a),m.push(1-x/c)}}for(let x=0;x<c;x++)for(let M=0;M<a;M++){let y=M+l*x,v=M+l*(x+1),A=M+1+l*(x+1),E=M+1+l*x;f.push(y,v,E),f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},Hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vd=`#ifdef USE_ALPHAHASH
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
#endif`,Gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yd=`#ifdef USE_AOMAP
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
#endif`,$d=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zd=`#ifdef USE_BATCHING
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
#endif`,Jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Kd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Qd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tp=`#ifdef USE_IRIDESCENCE
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
#endif`,ep=`#ifdef USE_BUMPMAP
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
#endif`,np=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,hp=`#define PI 3.141592653589793
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
} // validated`,up=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fp=`vec3 transformedNormal = objectNormal;
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
#endif`,dp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xp="gl_FragColor = linearToOutputTexel( gl_FragColor );",vp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yp=`#ifdef USE_ENVMAP
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
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mp=`#ifdef USE_ENVMAP
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
#endif`,bp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wp=`#ifdef USE_ENVMAP
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
#endif`,Ep=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Sp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rp=`#ifdef USE_GRADIENTMAP
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
}`,Cp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Lp=`uniform bool receiveShadow;
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
#endif`,Dp=`#ifdef USE_ENVMAP
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
#endif`,zp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Up=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fp=`PhysicalMaterial material;
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
#endif`,Op=`struct PhysicalMaterial {
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
}`,kp=`
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
#endif`,Hp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$p=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jp=`#if defined( USE_POINTS_UV )
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
#endif`,Kp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,em=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,nm=`#ifdef USE_MORPHTARGETS
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
#endif`,im=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,om=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,am=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lm=`#ifdef USE_NORMALMAP
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
#endif`,hm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,um=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ym=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_m=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Em=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sm=`float getShadowMask() {
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
}`,Tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Am=`#ifdef USE_SKINNING
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
#endif`,Rm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cm=`#ifdef USE_SKINNING
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
#endif`,Pm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Im=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zm=`#ifdef USE_TRANSMISSION
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
#endif`,Um=`#ifdef USE_TRANSMISSION
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
#endif`,Nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Om=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,km=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hm=`uniform sampler2D t2D;
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
}`,Vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qm=`#include <common>
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
}`,Ym=`#if DEPTH_PACKING == 3200
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
}`,$m=`#define DISTANCE
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
}`,Zm=`#define DISTANCE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Km=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`uniform float scale;
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
}`,Qm=`uniform vec3 diffuse;
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
}`,t0=`#include <common>
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
}`,e0=`uniform vec3 diffuse;
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define MATCAP
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
}`,r0=`#define MATCAP
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
}`,o0=`#define NORMAL
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
}`,a0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,l0=`#define PHONG
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
}`,h0=`#define STANDARD
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
}`,u0=`#define STANDARD
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
}`,f0=`#define TOON
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
}`,d0=`#define TOON
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
}`,p0=`uniform float size;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,v0=`uniform float rotation;
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
}`,y0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Hd,alphahash_pars_fragment:Vd,alphamap_fragment:Gd,alphamap_pars_fragment:Wd,alphatest_fragment:Xd,alphatest_pars_fragment:qd,aomap_fragment:Yd,aomap_pars_fragment:$d,batching_pars_vertex:Zd,batching_vertex:Jd,begin_vertex:Kd,beginnormal_vertex:jd,bsdfs:Qd,iridescence_fragment:tp,bumpmap_pars_fragment:ep,clipping_planes_fragment:np,clipping_planes_pars_fragment:ip,clipping_planes_pars_vertex:sp,clipping_planes_vertex:rp,color_fragment:op,color_pars_fragment:ap,color_pars_vertex:cp,color_vertex:lp,common:hp,cube_uv_reflection_fragment:up,defaultnormal_vertex:fp,displacementmap_pars_vertex:dp,displacementmap_vertex:pp,emissivemap_fragment:mp,emissivemap_pars_fragment:gp,colorspace_fragment:xp,colorspace_pars_fragment:vp,envmap_fragment:yp,envmap_common_pars_fragment:_p,envmap_pars_fragment:Mp,envmap_pars_vertex:bp,envmap_physical_pars_fragment:Dp,envmap_vertex:wp,fog_vertex:Ep,fog_pars_vertex:Sp,fog_fragment:Tp,fog_pars_fragment:Ap,gradientmap_pars_fragment:Rp,lightmap_pars_fragment:Cp,lights_lambert_fragment:Pp,lights_lambert_pars_fragment:Ip,lights_pars_begin:Lp,lights_toon_fragment:zp,lights_toon_pars_fragment:Up,lights_phong_fragment:Np,lights_phong_pars_fragment:Bp,lights_physical_fragment:Fp,lights_physical_pars_fragment:Op,lights_fragment_begin:kp,lights_fragment_maps:Hp,lights_fragment_end:Vp,logdepthbuf_fragment:Gp,logdepthbuf_pars_fragment:Wp,logdepthbuf_pars_vertex:Xp,logdepthbuf_vertex:qp,map_fragment:Yp,map_pars_fragment:$p,map_particle_fragment:Zp,map_particle_pars_fragment:Jp,metalnessmap_fragment:Kp,metalnessmap_pars_fragment:jp,morphinstance_vertex:Qp,morphcolor_vertex:tm,morphnormal_vertex:em,morphtarget_pars_vertex:nm,morphtarget_vertex:im,normal_fragment_begin:sm,normal_fragment_maps:rm,normal_pars_fragment:om,normal_pars_vertex:am,normal_vertex:cm,normalmap_pars_fragment:lm,clearcoat_normal_fragment_begin:hm,clearcoat_normal_fragment_maps:um,clearcoat_pars_fragment:fm,iridescence_pars_fragment:dm,opaque_fragment:pm,packing:mm,premultiplied_alpha_fragment:gm,project_vertex:xm,dithering_fragment:vm,dithering_pars_fragment:ym,roughnessmap_fragment:_m,roughnessmap_pars_fragment:Mm,shadowmap_pars_fragment:bm,shadowmap_pars_vertex:wm,shadowmap_vertex:Em,shadowmask_pars_fragment:Sm,skinbase_vertex:Tm,skinning_pars_vertex:Am,skinning_vertex:Rm,skinnormal_vertex:Cm,specularmap_fragment:Pm,specularmap_pars_fragment:Im,tonemapping_fragment:Lm,tonemapping_pars_fragment:Dm,transmission_fragment:zm,transmission_pars_fragment:Um,uv_pars_fragment:Nm,uv_pars_vertex:Bm,uv_vertex:Fm,worldpos_vertex:Om,background_vert:km,background_frag:Hm,backgroundCube_vert:Vm,backgroundCube_frag:Gm,cube_vert:Wm,cube_frag:Xm,depth_vert:qm,depth_frag:Ym,distanceRGBA_vert:$m,distanceRGBA_frag:Zm,equirect_vert:Jm,equirect_frag:Km,linedashed_vert:jm,linedashed_frag:Qm,meshbasic_vert:t0,meshbasic_frag:e0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:s0,meshmatcap_frag:r0,meshnormal_vert:o0,meshnormal_frag:a0,meshphong_vert:c0,meshphong_frag:l0,meshphysical_vert:h0,meshphysical_frag:u0,meshtoon_vert:f0,meshtoon_frag:d0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:x0,sprite_vert:v0,sprite_frag:y0},Mt={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new Q(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new Q(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ze([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ze([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ze([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new bt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ze([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ze([Mt.points,Mt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ze([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ze([Mt.common,Mt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ze([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ze([Mt.sprite,Mt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ze([Mt.common,Mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ze([Mt.lights,Mt.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Tn.physical={uniforms:Ze([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new Q(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new Q},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new Q},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};var Gr={r:0,b:0,g:0},Pi=new sn,_0=new ee;function M0(r,t,e,n,i,s,o){let a=new bt(0),c=s===!0?0:1,l,h,u=null,d=0,f=null;function g(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function p(M){let y=!1,v=g(M);v===null?x(a,c):v&&v.isColor&&(x(v,1),y=!0);let A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,y){let v=g(y);v&&(v.isCubeTexture||v.mapping===Uo)?(h===void 0&&(h=new it(new Gt(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:Ss(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Pi.copy(y.backgroundRotation),Pi.x*=-1,Pi.y*=-1,Pi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Pi.y*=-1,Pi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_0.makeRotationFromEuler(Pi)),h.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,(u!==v||d!==v.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new it(new Ee(2,2),new de({name:"BackgroundMaterial",uniforms:Ss(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:pi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=ie.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==r.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function x(M,y){M.getRGB(Gr,Cu(r)),n.buffers.color.setClear(Gr.r,Gr.g,Gr.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),c=y,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,x(a,c)},render:p,addToRenderList:m}}function b0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(w,b,z,D,N){let F=!1,B=u(D,z,b);s!==B&&(s=B,l(s.object)),F=f(w,D,z,N),F&&g(w,D,z,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(w,b,z,D),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return r.createVertexArray()}function l(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,b,z){let D=z.wireframe===!0,N=n[w.id];N===void 0&&(N={},n[w.id]=N);let F=N[b.id];F===void 0&&(F={},N[b.id]=F);let B=F[D];return B===void 0&&(B=d(c()),F[D]=B),B}function d(w){let b=[],z=[],D=[];for(let N=0;N<e;N++)b[N]=0,z[N]=0,D[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:z,attributeDivisors:D,object:w,attributes:{},index:null}}function f(w,b,z,D){let N=s.attributes,F=b.attributes,B=0,X=z.getAttributes();for(let H in X)if(X[H].location>=0){let K=N[H],lt=F[H];if(lt===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(lt=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(lt=w.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;B++}return s.attributesNum!==B||s.index!==D}function g(w,b,z,D){let N={},F=b.attributes,B=0,X=z.getAttributes();for(let H in X)if(X[H].location>=0){let K=F[H];K===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(K=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(K=w.instanceColor));let lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),N[H]=lt,B++}s.attributes=N,s.attributesNum=B,s.index=D}function p(){let w=s.newAttributes;for(let b=0,z=w.length;b<z;b++)w[b]=0}function m(w){x(w,0)}function x(w,b){let z=s.newAttributes,D=s.enabledAttributes,N=s.attributeDivisors;z[w]=1,D[w]===0&&(r.enableVertexAttribArray(w),D[w]=1),N[w]!==b&&(r.vertexAttribDivisor(w,b),N[w]=b)}function M(){let w=s.newAttributes,b=s.enabledAttributes;for(let z=0,D=b.length;z<D;z++)b[z]!==w[z]&&(r.disableVertexAttribArray(z),b[z]=0)}function y(w,b,z,D,N,F,B){B===!0?r.vertexAttribIPointer(w,b,z,N,F):r.vertexAttribPointer(w,b,z,D,N,F)}function v(w,b,z,D){p();let N=D.attributes,F=z.getAttributes(),B=b.defaultAttributeValues;for(let X in F){let H=F[X];if(H.location>=0){let W=N[X];if(W===void 0&&(X==="instanceMatrix"&&w.instanceMatrix&&(W=w.instanceMatrix),X==="instanceColor"&&w.instanceColor&&(W=w.instanceColor)),W!==void 0){let K=W.normalized,lt=W.itemSize,ft=t.get(W);if(ft===void 0)continue;let et=ft.buffer,O=ft.type,$=ft.bytesPerElement,ot=O===r.INT||O===r.UNSIGNED_INT||W.gpuType===wl;if(W.isInterleavedBufferAttribute){let st=W.data,pt=st.stride,Et=W.offset;if(st.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)x(H.location+It,st.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let It=0;It<H.locationSize;It++)m(H.location+It);r.bindBuffer(r.ARRAY_BUFFER,et);for(let It=0;It<H.locationSize;It++)y(H.location+It,lt/H.locationSize,O,K,pt*$,(Et+lt/H.locationSize*It)*$,ot)}else{if(W.isInstancedBufferAttribute){for(let st=0;st<H.locationSize;st++)x(H.location+st,W.meshPerAttribute);w.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let st=0;st<H.locationSize;st++)m(H.location+st);r.bindBuffer(r.ARRAY_BUFFER,et);for(let st=0;st<H.locationSize;st++)y(H.location+st,lt/H.locationSize,O,K,lt*$,lt/H.locationSize*st*$,ot)}}else if(B!==void 0){let K=B[X];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(H.location,K);break;case 3:r.vertexAttrib3fv(H.location,K);break;case 4:r.vertexAttrib4fv(H.location,K);break;default:r.vertexAttrib1fv(H.location,K)}}}}M()}function A(){C();for(let w in n){let b=n[w];for(let z in b){let D=b[z];for(let N in D)h(D[N].object),delete D[N];delete b[z]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let b=n[w.id];for(let z in b){let D=b[z];for(let N in D)h(D[N].object),delete D[N];delete b[z]}delete n[w.id]}function S(w){for(let b in n){let z=n[b];if(z[w.id]===void 0)continue;let D=z[w.id];for(let N in D)h(D[N].object),delete D[N];delete z[w.id]}}function C(){_(),o=!0,s!==i&&(s=i,l(s.object))}function _(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:_,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:S,initAttributes:p,enableAttribute:m,disableUnusedAttributes:M}}function w0(r,t,e){let n;function i(l){n=l}function s(l,h){r.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(r.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let p=0;p<u;p++)g+=h[p]*d[p];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function E0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==_n&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let C=S===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==$n&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Rn&&!C)}function c(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:m,maxAttributes:x,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:A,maxSamples:E}}function S0(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Xn,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,x=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):l();else{let M=s?0:n,y=M*4,v=x.clippingState||null;c.value=v,v=h(g,d,y,f);for(let A=0;A!==y;++A)v[A]=e[A];x.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){let p=u!==null?u.length:0,m=null;if(p!==0){if(m=c.value,g!==!0||m===null){let x=f+p*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<x)&&(m=new Float32Array(x));for(let y=0,v=f;y!==p;++y,v+=4)o.copy(u[y]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function T0(r){let t=new WeakMap;function e(o,a){return a===nc?o.mapping=vs:a===ic&&(o.mapping=ys),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===nc||a===ic)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Bc(c.height);return l.fromEquirectangularTexture(r,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ts=class extends mo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},us=4,Ch=[.125,.215,.35,.446,.526,.582],zi=20,Ua=new Ts,Ph=new bt,Na=null,Ba=0,Fa=0,Oa=!1,Li=(1+Math.sqrt(5))/2,rs=1/Li,Ih=[new L(-Li,rs,0),new L(Li,rs,0),new L(-rs,0,Li),new L(rs,0,Li),new L(0,Li,-rs),new L(0,Li,rs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],As=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Na=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Dh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Ba,Fa),this._renderer.xr.enabled=Oa,t.scissorTest=!1,Wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),Oa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:An,minFilter:An,generateMipmaps:!1,type:ln,format:_n,colorSpace:zs,depthBuffer:!1},i=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=A0(s)),this._blurMaterial=R0(s,t,e)}return i}_compileMaterial(t){let e=new it(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,i){let a=new Pe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ph),h.toneMapping=fi,h.autoClear=!1;let f=new ue({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),g=new it(new Gt,f),p=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,p=!0):(f.color.copy(Ph),p=!0);for(let x=0;x<6;x++){let M=x%3;M===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):M===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));let y=this._cubeSize;Wr(i,M*y,x>2?y:0,y,y),h.setRenderTarget(i),p&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===vs||t.mapping===ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=zh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Dh());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new it(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let c=this._cubeSize;Wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Ua)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ih[(i-s-1)%Ih.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new it(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*zi-1),p=s/g,m=isFinite(s)?1+Math.floor(h*p):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);let x=[],M=0;for(let S=0;S<zi;++S){let C=S/p,_=Math.exp(-C*C/2);x.push(_),S===0?M+=_:S<m&&(M+=2*_)}for(let S=0;S<x.length;S++)x[S]=x[S]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=x,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;let v=this._sizeLods[i],A=3*v*(i>y-us?i-y+us:0),E=4*(this._cubeSize-v);Wr(e,A,E,3*v,2*v),c.setRenderTarget(e),c.render(u,Ua)}};function A0(r){let t=[],e=[],n=[],i=r,s=r-us+1+Ch.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let c=1/a;o>r-us?c=Ch[o-r+us-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,m=2,x=1,M=new Float32Array(p*g*f),y=new Float32Array(m*g*f),v=new Float32Array(x*g*f);for(let E=0;E<f;E++){let S=E%3*2/3-1,C=E>2?0:-1,_=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];M.set(_,p*g*E),y.set(d,m*g*E);let w=[E,E,E,E,E,E];v.set(w,x*g*E)}let A=new ne;A.setAttribute("position",new ae(M,p)),A.setAttribute("uv",new ae(y,m)),A.setAttribute("faceIndex",new ae(v,x)),t.push(A),i>us&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(r,t,e){let n=new ke(r,t,e);return n.texture.mapping=Uo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function R0(r,t,e){let n=new Float32Array(zi),i=new L(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Dh(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Il(),fragmentShader:`

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
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function zh(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Il(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cn,depthTest:!1,depthWrite:!1})}function Il(){return`

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
	`}function C0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===nc||c===ic,h=c===vs||c===ys;if(l||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new As(r)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new As(r)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function P0(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&js("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function I0(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let p=d.morphAttributes[g];for(let m=0,x=p.length;m<x;m++)t.remove(p[m])}d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)t.update(d[g],r.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let p=f[g];for(let m=0,x=p.length;m<x;m++)t.update(p[m],r.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,p=0;if(f!==null){let M=f.array;p=f.version;for(let y=0,v=M.length;y<v;y+=3){let A=M[y+0],E=M[y+1],S=M[y+2];d.push(A,E,E,S,S,A)}}else if(g!==void 0){let M=g.array;p=g.version;for(let y=0,v=M.length/3-1;y<v;y+=3){let A=y+0,E=y+1,S=y+2;d.push(A,E,E,S,S,A)}}else return;let m=new(Au(d)?Es:ws)(d,1);m.version=p;let x=s.get(u);x&&t.remove(x),s.set(u,m)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function L0(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function c(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let x=0;x<g;x++)m+=f[x];e.update(m,n,1)}function u(d,f,g,p){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let x=0;x<d.length;x++)l(d[x]/o,f[x],p[x]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,p,0,g);let x=0;for(let M=0;M<g;M++)x+=f[M]*p[M];e.update(x,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function D0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function z0(r,t,e){let n=new WeakMap,i=new me;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let _=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",_)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],y=0;f===!0&&(y=1),g===!0&&(y=2),p===!0&&(y=3);let v=a.attributes.position.count*y,A=1;v>t.maxTextureSize&&(A=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*A*4*u),S=new uo(E,v,A,u);S.type=Rn,S.needsUpdate=!0;let C=y*4;for(let w=0;w<u;w++){let b=m[w],z=x[w],D=M[w],N=v*A*4*w;for(let F=0;F<b.count;F++){let B=F*C;f===!0&&(i.fromBufferAttribute(b,F),E[N+B+0]=i.x,E[N+B+1]=i.y,E[N+B+2]=i.z,E[N+B+3]=0),g===!0&&(i.fromBufferAttribute(z,F),E[N+B+4]=i.x,E[N+B+5]=i.y,E[N+B+6]=i.z,E[N+B+7]=0),p===!0&&(i.fromBufferAttribute(D,F),E[N+B+8]=i.x,E[N+B+9]=i.y,E[N+B+10]=i.z,E[N+B+11]=D.itemSize===4?i.w:1)}}d={count:u,texture:S,size:new Q(v,A)},n.set(a,d),a.addEventListener("dispose",_)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let p=0;p<l.length;p++)f+=l[p];let g=a.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function U0(r,t,e,n){let i=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,r.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}var xo=class extends nn{constructor(t,e,n,i,s,o,a,c,l,h=ps){if(h!==ps&&h!==Ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ps&&(n=Bi),n===void 0&&h===Ms&&(n=_s),super(null,i,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=c!==void 0?c:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Iu=new nn,Uh=new xo(1,1),Lu=new uo,Du=new Uc,zu=new go,Nh=[],Bh=[],Fh=new Float32Array(16),Oh=new Float32Array(9),kh=new Float32Array(4);function Us(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Nh[i];if(s===void 0&&(s=new Float32Array(i),Nh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Ie(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Le(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Fo(r,t){let e=Bh[t];e===void 0&&(e=new Int32Array(t),Bh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function N0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function B0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2fv(this.addr,t),Le(e,t)}}function F0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;r.uniform3fv(this.addr,t),Le(e,t)}}function O0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4fv(this.addr,t),Le(e,t)}}function k0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;kh.set(n),r.uniformMatrix2fv(this.addr,!1,kh),Le(e,n)}}function H0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Oh.set(n),r.uniformMatrix3fv(this.addr,!1,Oh),Le(e,n)}}function V0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Le(e,t)}else{if(Ie(e,n))return;Fh.set(n),r.uniformMatrix4fv(this.addr,!1,Fh),Le(e,n)}}function G0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function W0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2iv(this.addr,t),Le(e,t)}}function X0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3iv(this.addr,t),Le(e,t)}}function q0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4iv(this.addr,t),Le(e,t)}}function Y0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function $0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;r.uniform2uiv(this.addr,t),Le(e,t)}}function Z0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;r.uniform3uiv(this.addr,t),Le(e,t)}}function J0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;r.uniform4uiv(this.addr,t),Le(e,t)}}function K0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Uh.compareFunction=Tu,s=Uh):s=Iu,e.setTexture2D(t||s,i)}function j0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Du,i)}function Q0(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||zu,i)}function tg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Lu,i)}function eg(r){switch(r){case 5126:return N0;case 35664:return B0;case 35665:return F0;case 35666:return O0;case 35674:return k0;case 35675:return H0;case 35676:return V0;case 5124:case 35670:return G0;case 35667:case 35671:return W0;case 35668:case 35672:return X0;case 35669:case 35673:return q0;case 5125:return Y0;case 36294:return $0;case 36295:return Z0;case 36296:return J0;case 35678:case 36198:case 36298:case 36306:case 35682:return K0;case 35679:case 36299:case 36307:return j0;case 35680:case 36300:case 36308:case 36293:return Q0;case 36289:case 36303:case 36311:case 36292:return tg}}function ng(r,t){r.uniform1fv(this.addr,t)}function ig(r,t){let e=Us(t,this.size,2);r.uniform2fv(this.addr,e)}function sg(r,t){let e=Us(t,this.size,3);r.uniform3fv(this.addr,e)}function rg(r,t){let e=Us(t,this.size,4);r.uniform4fv(this.addr,e)}function og(r,t){let e=Us(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ag(r,t){let e=Us(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function cg(r,t){let e=Us(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function lg(r,t){r.uniform1iv(this.addr,t)}function hg(r,t){r.uniform2iv(this.addr,t)}function ug(r,t){r.uniform3iv(this.addr,t)}function fg(r,t){r.uniform4iv(this.addr,t)}function dg(r,t){r.uniform1uiv(this.addr,t)}function pg(r,t){r.uniform2uiv(this.addr,t)}function mg(r,t){r.uniform3uiv(this.addr,t)}function gg(r,t){r.uniform4uiv(this.addr,t)}function xg(r,t,e){let n=this.cache,i=t.length,s=Fo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Iu,s[o])}function vg(r,t,e){let n=this.cache,i=t.length,s=Fo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Du,s[o])}function yg(r,t,e){let n=this.cache,i=t.length,s=Fo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||zu,s[o])}function _g(r,t,e){let n=this.cache,i=t.length,s=Fo(e,i);Ie(n,s)||(r.uniform1iv(this.addr,s),Le(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Lu,s[o])}function Mg(r){switch(r){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return og;case 35675:return ag;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return _g}}var Fc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=eg(e.type)}},Oc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mg(e.type)}},kc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},ka=/(\w+)(\])?(\[|\.)?/g;function Hh(r,t){r.seq.push(t),r.map[t.id]=t}function bg(r,t,e){let n=r.name,i=n.length;for(ka.lastIndex=0;;){let s=ka.exec(n),o=ka.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Hh(e,l===void 0?new Fc(a,r,t):new Oc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new kc(a),Hh(e,u)),e=u}}}var gs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);bg(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Vh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var wg=37297,Eg=0;function Sg(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Gh=new Kt;function Tg(r){ie._getMatrix(Gh,ie.workingColorSpace,r);let t=`mat3( ${Gh.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case No:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Wh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Sg(r.getShaderSource(t),o)}else return i}function Ag(r,t){let e=Tg(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Rg(r,t){let e;switch(t){case vl:e="Linear";break;case yl:e="Reinhard";break;case _l:e="Cineon";break;case vr:e="ACESFilmic";break;case Ml:e="AgX";break;case bl:e="Neutral";break;case Xf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xr=new L;function Cg(){ie.getLuminanceCoefficients(Xr);let r=Xr.x.toFixed(4),t=Xr.y.toFixed(4),e=Xr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Ig(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Lg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Qs(r){return r!==""}function Xh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qh(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hc(r){return r.replace(Dg,Ug)}var zg=new Map;function Ug(r,t){let e=jt[t];if(e===void 0){let n=zg.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Hc(e)}var Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yh(r){return r.replace(Ng,Bg)}function Bg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $h(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Fg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===du?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===xl?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function Og(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case Uo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function kg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Hg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pu:t="ENVMAP_BLENDING_MULTIPLY";break;case Gf:t="ENVMAP_BLENDING_MIX";break;case Wf:t="ENVMAP_BLENDING_ADD";break}return t}function Vg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Gg(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Fg(e),l=Og(e),h=kg(e),u=Hg(e),d=Vg(e),f=Pg(e),g=Ig(s),p=i.createProgram(),m,x,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),m.length>0&&(m+=`
`),x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Qs).join(`
`),x.length>0&&(x+=`
`)):(m=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),x=[$h(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?jt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Rg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Ag("linearToOutputTexel",e.outputColorSpace),Cg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Qs).join(`
`)),o=Hc(o),o=Xh(o,e),o=qh(o,e),a=Hc(a),a=Xh(a,e),a=qh(a,e),o=Yh(o),a=Yh(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,x=["#define varying in",e.glslVersion===ah?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ah?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);let y=M+m+o,v=M+x+a,A=Vh(i,i.VERTEX_SHADER,y),E=Vh(i,i.FRAGMENT_SHADER,v);i.attachShader(p,A),i.attachShader(p,E),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function S(b){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(p).trim(),D=i.getShaderInfoLog(A).trim(),N=i.getShaderInfoLog(E).trim(),F=!0,B=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,A,E);else{let X=Wh(i,A,"vertex"),H=Wh(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+z+`
`+X+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(D===""||N==="")&&(B=!1);B&&(b.diagnostics={runnable:F,programLog:z,vertexShader:{log:D,prefix:m},fragmentShader:{log:N,prefix:x}})}i.deleteShader(A),i.deleteShader(E),C=new gs(i,p),_=Lg(i,p)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let _;this.getAttributes=function(){return _===void 0&&S(this),_};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(p,wg)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Eg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=E,this}var Wg=0,Vc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Gc(t),e.set(t,n)),n}},Gc=class{constructor(t){this.id=Wg++,this.code=t,this.usedTimes=0}};function Xg(r,t,e,n,i,s,o){let a=new po,c=new Vc,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures,f=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function m(_,w,b,z,D){let N=z.fog,F=D.geometry,B=_.isMeshStandardMaterial?z.environment:null,X=(_.isMeshStandardMaterial?e:t).get(_.envMap||B),H=X&&X.mapping===Uo?X.image.height:null,W=g[_.type];_.precision!==null&&(f=i.getMaxPrecision(_.precision),f!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,lt=K!==void 0?K.length:0,ft=0;F.morphAttributes.position!==void 0&&(ft=1),F.morphAttributes.normal!==void 0&&(ft=2),F.morphAttributes.color!==void 0&&(ft=3);let et,O,$,ot;if(W){let Ut=Tn[W];et=Ut.vertexShader,O=Ut.fragmentShader}else et=_.vertexShader,O=_.fragmentShader,c.update(_),$=c.getVertexShaderID(_),ot=c.getFragmentShaderID(_);let st=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Et=D.isInstancedMesh===!0,It=D.isBatchedMesh===!0,Yt=!!_.map,at=!!_.matcap,ut=!!X,U=!!_.aoMap,zt=!!_.lightMap,dt=!!_.bumpMap,Ct=!!_.normalMap,vt=!!_.displacementMap,Xt=!!_.emissiveMap,Pt=!!_.metalnessMap,I=!!_.roughnessMap,T=_.anisotropy>0,q=_.clearcoat>0,nt=_.dispersion>0,ht=_.iridescence>0,rt=_.sheen>0,Nt=_.transmission>0,_t=T&&!!_.anisotropyMap,St=q&&!!_.clearcoatMap,Qt=q&&!!_.clearcoatNormalMap,P=q&&!!_.clearcoatRoughnessMap,Y=ht&&!!_.iridescenceMap,mt=ht&&!!_.iridescenceThicknessMap,yt=rt&&!!_.sheenColorMap,j=rt&&!!_.sheenRoughnessMap,Dt=!!_.specularMap,qt=!!_.specularColorMap,re=!!_.specularIntensityMap,k=Nt&&!!_.transmissionMap,xt=Nt&&!!_.thicknessMap,tt=!!_.gradientMap,ct=!!_.alphaMap,Tt=_.alphaTest>0,wt=!!_.alphaHash,$t=!!_.extensions,xe=fi;_.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(xe=r.toneMapping);let De={shaderID:W,shaderType:_.type,shaderName:_.name,vertexShader:et,fragmentShader:O,defines:_.defines,customVertexShaderID:$,customFragmentShaderID:ot,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:It,batchingColor:It&&D._colorsTexture!==null,instancing:Et,instancingColor:Et&&D.instanceColor!==null,instancingMorph:Et&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:zs,alphaToCoverage:!!_.alphaToCoverage,map:Yt,matcap:at,envMap:ut,envMapMode:ut&&X.mapping,envMapCubeUVHeight:H,aoMap:U,lightMap:zt,bumpMap:dt,normalMap:Ct,displacementMap:d&&vt,emissiveMap:Xt,normalMapObjectSpace:Ct&&_.normalMapType===Zf,normalMapTangentSpace:Ct&&_.normalMapType===Su,metalnessMap:Pt,roughnessMap:I,anisotropy:T,anisotropyMap:_t,clearcoat:q,clearcoatMap:St,clearcoatNormalMap:Qt,clearcoatRoughnessMap:P,dispersion:nt,iridescence:ht,iridescenceMap:Y,iridescenceThicknessMap:mt,sheen:rt,sheenColorMap:yt,sheenRoughnessMap:j,specularMap:Dt,specularColorMap:qt,specularIntensityMap:re,transmission:Nt,transmissionMap:k,thicknessMap:xt,gradientMap:tt,opaque:_.transparent===!1&&_.blending===ds&&_.alphaToCoverage===!1,alphaMap:ct,alphaTest:Tt,alphaHash:wt,combine:_.combine,mapUv:Yt&&p(_.map.channel),aoMapUv:U&&p(_.aoMap.channel),lightMapUv:zt&&p(_.lightMap.channel),bumpMapUv:dt&&p(_.bumpMap.channel),normalMapUv:Ct&&p(_.normalMap.channel),displacementMapUv:vt&&p(_.displacementMap.channel),emissiveMapUv:Xt&&p(_.emissiveMap.channel),metalnessMapUv:Pt&&p(_.metalnessMap.channel),roughnessMapUv:I&&p(_.roughnessMap.channel),anisotropyMapUv:_t&&p(_.anisotropyMap.channel),clearcoatMapUv:St&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:Qt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Y&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:j&&p(_.sheenRoughnessMap.channel),specularMapUv:Dt&&p(_.specularMap.channel),specularColorMapUv:qt&&p(_.specularColorMap.channel),specularIntensityMapUv:re&&p(_.specularIntensityMap.channel),transmissionMapUv:k&&p(_.transmissionMap.channel),thicknessMapUv:xt&&p(_.thicknessMap.channel),alphaMapUv:ct&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ct||T),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(Yt||ct),fog:!!N,useFog:_.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:r.shadowMap.enabled&&b.length>0,shadowMapType:r.shadowMap.type,toneMapping:xe,decodeVideoTexture:Yt&&_.map.isVideoTexture===!0&&ie.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Xt&&_.emissiveMap.isVideoTexture===!0&&ie.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Me,flipSided:_.side===We,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:$t&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&_.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return De.vertexUv1s=l.has(1),De.vertexUv2s=l.has(2),De.vertexUv3s=l.has(3),l.clear(),De}function x(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let b in _.defines)w.push(b),w.push(_.defines[b]);return _.isRawShaderMaterial===!1&&(M(w,_),y(w,_),w.push(r.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function M(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function y(_,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),_.push(a.mask)}function v(_){let w=g[_.type],b;if(w){let z=Tn[w];b=Dn.clone(z.uniforms)}else b=_.uniforms;return b}function A(_,w){let b;for(let z=0,D=h.length;z<D;z++){let N=h[z];if(N.cacheKey===w){b=N,++b.usedTimes;break}}return b===void 0&&(b=new Gg(r,w,_,s),h.push(b)),b}function E(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function S(_){c.remove(_)}function C(){c.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:v,acquireProgram:A,releaseProgram:E,releaseShaderCache:S,programs:h,dispose:C}}function qg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,c){r.get(o)[a]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Yg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Zh(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Jh(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,p,m){let x=r[t];return x===void 0?(x={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:m},r[t]=x):(x.id=u.id,x.object=u,x.geometry=d,x.material=f,x.groupOrder=g,x.renderOrder=u.renderOrder,x.z=p,x.group=m),t++,x}function a(u,d,f,g,p,m){let x=o(u,d,f,g,p,m);f.transmission>0?n.push(x):f.transparent===!0?i.push(x):e.push(x)}function c(u,d,f,g,p,m){let x=o(u,d,f,g,p,m);f.transmission>0?n.unshift(x):f.transparent===!0?i.unshift(x):e.unshift(x)}function l(u,d){e.length>1&&e.sort(u||Yg),n.length>1&&n.sort(d||Zh),i.length>1&&i.sort(d||Zh)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:c,finish:h,sort:l}}function $g(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Jh,r.set(n,[o])):i>=s.length?(o=new Jh,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Zg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new bt};break;case"SpotLight":e={position:new L,direction:new L,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function Jg(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Q,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Kg=0;function jg(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function Qg(r){let t=new Zg,e=Jg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);let i=new L,s=new ee,o=new ee;function a(l){let h=0,u=0,d=0;for(let _=0;_<9;_++)n.probe[_].set(0,0,0);let f=0,g=0,p=0,m=0,x=0,M=0,y=0,v=0,A=0,E=0,S=0;l.sort(jg);for(let _=0,w=l.length;_<w;_++){let b=l[_],z=b.color,D=b.intensity,N=b.distance,F=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=z.r*D,u+=z.g*D,d+=z.b*D;else if(b.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(b.sh.coefficients[B],D);S++}else if(b.isDirectionalLight){let B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let X=b.shadow,H=e.get(b);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=F,n.directionalShadowMatrix[f]=b.shadow.matrix,M++}n.directional[f]=B,f++}else if(b.isSpotLight){let B=t.get(b);B.position.setFromMatrixPosition(b.matrixWorld),B.color.copy(z).multiplyScalar(D),B.distance=N,B.coneCos=Math.cos(b.angle),B.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),B.decay=b.decay,n.spot[p]=B;let X=b.shadow;if(b.map&&(n.spotLightMap[A]=b.map,A++,X.updateMatrices(b),b.castShadow&&E++),n.spotLightMatrix[p]=X.matrix,b.castShadow){let H=e.get(b);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,n.spotShadow[p]=H,n.spotShadowMap[p]=F,v++}p++}else if(b.isRectAreaLight){let B=t.get(b);B.color.copy(z).multiplyScalar(D),B.halfWidth.set(b.width*.5,0,0),B.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=B,m++}else if(b.isPointLight){let B=t.get(b);if(B.color.copy(b.color).multiplyScalar(b.intensity),B.distance=b.distance,B.decay=b.decay,b.castShadow){let X=b.shadow,H=e.get(b);H.shadowIntensity=X.intensity,H.shadowBias=X.bias,H.shadowNormalBias=X.normalBias,H.shadowRadius=X.radius,H.shadowMapSize=X.mapSize,H.shadowCameraNear=X.camera.near,H.shadowCameraFar=X.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=B,g++}else if(b.isHemisphereLight){let B=t.get(b);B.skyColor.copy(b.color).multiplyScalar(D),B.groundColor.copy(b.groundColor).multiplyScalar(D),n.hemi[x]=B,x++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==p||C.rectAreaLength!==m||C.hemiLength!==x||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==A||C.numLightProbes!==S)&&(n.directional.length=f,n.spot.length=p,n.rectArea.length=m,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=S,C.directionalLength=f,C.pointLength=g,C.spotLength=p,C.rectAreaLength=m,C.hemiLength=x,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=A,C.numLightProbes=S,n.version=Kg++)}function c(l,h){let u=0,d=0,f=0,g=0,p=0,m=h.matrixWorldInverse;for(let x=0,M=l.length;x<M;x++){let y=l[x];if(y.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){let v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:a,setupView:c,state:n}}function Kh(r){let t=new Qg(r),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function tx(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Kh(r),t.set(i,[a])):s>=o.length?(a=new Kh(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Wc=class extends Jn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xc=class extends Jn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ex=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nx=`uniform sampler2D shadow_pass;
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
}`;function ix(r,t,e){let n=new ar,i=new Q,s=new Q,o=new me,a=new Wc({depthPacking:$f}),c=new Xc,l={},h=e.maxTextureSize,u={[pi]:We,[We]:pi,[Me]:Me},d=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Q},radius:{value:4}},vertexShader:ex,fragmentShader:nx}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ne;g.setAttribute("position",new ae(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new it(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=du;let x=this.type;this.render=function(E,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let _=r.getRenderTarget(),w=r.getActiveCubeFace(),b=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Cn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let D=x!==Wn&&this.type===Wn,N=x===Wn&&this.type!==Wn;for(let F=0,B=E.length;F<B;F++){let X=E[F],H=X.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let W=H.getFrameExtents();if(i.multiply(W),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/W.x),i.x=s.x*W.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/W.y),i.y=s.y*W.y,H.mapSize.y=s.y)),H.map===null||D===!0||N===!0){let lt=this.type!==Wn?{minFilter:cn,magFilter:cn}:{};H.map!==null&&H.map.dispose(),H.map=new ke(i.x,i.y,lt),H.map.texture.name=X.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();let K=H.getViewportCount();for(let lt=0;lt<K;lt++){let ft=H.getViewport(lt);o.set(s.x*ft.x,s.y*ft.y,s.x*ft.z,s.y*ft.w),z.viewport(o),H.updateMatrices(X,lt),n=H.getFrustum(),v(S,C,H.camera,X,this.type)}H.isPointLightShadow!==!0&&this.type===Wn&&M(H,C),H.needsUpdate=!1}x=this.type,m.needsUpdate=!1,r.setRenderTarget(_,w,b)};function M(E,S){let C=t.update(p);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ke(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(S,null,C,d,p,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(S,null,C,f,p,null)}function y(E,S,C,_){let w=null,b=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(b!==void 0)w=b;else if(w=C.isPointLight===!0?c:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let z=w.uuid,D=S.uuid,N=l[z];N===void 0&&(N={},l[z]=N);let F=N[D];F===void 0&&(F=w.clone(),N[D]=F,S.addEventListener("dispose",A)),w=F}if(w.visible=S.visible,w.wireframe=S.wireframe,_===Wn?w.side=S.shadowSide!==null?S.shadowSide:S.side:w.side=S.shadowSide!==null?S.shadowSide:u[S.side],w.alphaMap=S.alphaMap,w.alphaTest=S.alphaTest,w.map=S.map,w.clipShadows=S.clipShadows,w.clippingPlanes=S.clippingPlanes,w.clipIntersection=S.clipIntersection,w.displacementMap=S.displacementMap,w.displacementScale=S.displacementScale,w.displacementBias=S.displacementBias,w.wireframeLinewidth=S.wireframeLinewidth,w.linewidth=S.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let z=r.properties.get(w);z.light=C}return w}function v(E,S,C,_,w){if(E.visible===!1)return;if(E.layers.test(S.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===Wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let D=t.update(E),N=E.material;if(Array.isArray(N)){let F=D.groups;for(let B=0,X=F.length;B<X;B++){let H=F[B],W=N[H.materialIndex];if(W&&W.visible){let K=y(E,W,_,w);E.onBeforeShadow(r,E,S,C,D,K,H),r.renderBufferDirect(C,null,D,K,E,H),E.onAfterShadow(r,E,S,C,D,K,H)}}}else if(N.visible){let F=y(E,N,_,w);E.onBeforeShadow(r,E,S,C,D,F,null),r.renderBufferDirect(C,null,D,F,E,null),E.onAfterShadow(r,E,S,C,D,F,null)}}let z=E.children;for(let D=0,N=z.length;D<N;D++)v(z[D],S,C,_,w)}function A(E){E.target.removeEventListener("dispose",A);for(let C in l){let _=l[C],w=E.target.uuid;w in _&&(_[w].dispose(),delete _[w])}}}var sx={[Za]:Ja,[Ka]:tc,[ja]:ec,[xs]:Qa,[Ja]:Za,[tc]:Ka,[ec]:ja,[Qa]:xs};function rx(r,t){function e(){let k=!1,xt=new me,tt=null,ct=new me(0,0,0,0);return{setMask:function(Tt){tt!==Tt&&!k&&(r.colorMask(Tt,Tt,Tt,Tt),tt=Tt)},setLocked:function(Tt){k=Tt},setClear:function(Tt,wt,$t,xe,De){De===!0&&(Tt*=xe,wt*=xe,$t*=xe),xt.set(Tt,wt,$t,xe),ct.equals(xt)===!1&&(r.clearColor(Tt,wt,$t,xe),ct.copy(xt))},reset:function(){k=!1,tt=null,ct.set(-1,0,0,0)}}}function n(){let k=!1,xt=!1,tt=null,ct=null,Tt=null;return{setReversed:function(wt){if(xt!==wt){let $t=t.get("EXT_clip_control");xt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);let xe=Tt;Tt=null,this.setClear(xe)}xt=wt},getReversed:function(){return xt},setTest:function(wt){wt?st(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(wt){tt!==wt&&!k&&(r.depthMask(wt),tt=wt)},setFunc:function(wt){if(xt&&(wt=sx[wt]),ct!==wt){switch(wt){case Za:r.depthFunc(r.NEVER);break;case Ja:r.depthFunc(r.ALWAYS);break;case Ka:r.depthFunc(r.LESS);break;case xs:r.depthFunc(r.LEQUAL);break;case ja:r.depthFunc(r.EQUAL);break;case Qa:r.depthFunc(r.GEQUAL);break;case tc:r.depthFunc(r.GREATER);break;case ec:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=wt}},setLocked:function(wt){k=wt},setClear:function(wt){Tt!==wt&&(xt&&(wt=1-wt),r.clearDepth(wt),Tt=wt)},reset:function(){k=!1,tt=null,ct=null,Tt=null,xt=!1}}}function i(){let k=!1,xt=null,tt=null,ct=null,Tt=null,wt=null,$t=null,xe=null,De=null;return{setTest:function(Ut){k||(Ut?st(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(Ut){xt!==Ut&&!k&&(r.stencilMask(Ut),xt=Ut)},setFunc:function(Ut,ze,tn){(tt!==Ut||ct!==ze||Tt!==tn)&&(r.stencilFunc(Ut,ze,tn),tt=Ut,ct=ze,Tt=tn)},setOp:function(Ut,ze,tn){(wt!==Ut||$t!==ze||xe!==tn)&&(r.stencilOp(Ut,ze,tn),wt=Ut,$t=ze,xe=tn)},setLocked:function(Ut){k=Ut},setClear:function(Ut){De!==Ut&&(r.clearStencil(Ut),De=Ut)},reset:function(){k=!1,xt=null,tt=null,ct=null,Tt=null,wt=null,$t=null,xe=null,De=null}}}let s=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap,h={},u={},d=new WeakMap,f=[],g=null,p=!1,m=null,x=null,M=null,y=null,v=null,A=null,E=null,S=new bt(0,0,0),C=0,_=!1,w=null,b=null,z=null,D=null,N=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,X=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=X>=1):H.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=X>=2);let W=null,K={},lt=r.getParameter(r.SCISSOR_BOX),ft=r.getParameter(r.VIEWPORT),et=new me().fromArray(lt),O=new me().fromArray(ft);function $(k,xt,tt,ct){let Tt=new Uint8Array(4),wt=r.createTexture();r.bindTexture(k,wt),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $t=0;$t<tt;$t++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(xt,0,r.RGBA,1,1,ct,0,r.RGBA,r.UNSIGNED_BYTE,Tt):r.texImage2D(xt+$t,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Tt);return wt}let ot={};ot[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),ot[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ot[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ot[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(xs),dt(!1),Ct(th),st(r.CULL_FACE),U(Cn);function st(k){h[k]!==!0&&(r.enable(k),h[k]=!0)}function pt(k){h[k]!==!1&&(r.disable(k),h[k]=!1)}function Et(k,xt){return u[k]!==xt?(r.bindFramebuffer(k,xt),u[k]=xt,k===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=xt),k===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=xt),!0):!1}function It(k,xt){let tt=f,ct=!1;if(k){tt=d.get(xt),tt===void 0&&(tt=[],d.set(xt,tt));let Tt=k.textures;if(tt.length!==Tt.length||tt[0]!==r.COLOR_ATTACHMENT0){for(let wt=0,$t=Tt.length;wt<$t;wt++)tt[wt]=r.COLOR_ATTACHMENT0+wt;tt.length=Tt.length,ct=!0}}else tt[0]!==r.BACK&&(tt[0]=r.BACK,ct=!0);ct&&r.drawBuffers(tt)}function Yt(k){return g!==k?(r.useProgram(k),g=k,!0):!1}let at={[Di]:r.FUNC_ADD,[Tf]:r.FUNC_SUBTRACT,[Af]:r.FUNC_REVERSE_SUBTRACT};at[Rf]=r.MIN,at[Cf]=r.MAX;let ut={[Pf]:r.ZERO,[If]:r.ONE,[Lf]:r.SRC_COLOR,[Ya]:r.SRC_ALPHA,[Ff]:r.SRC_ALPHA_SATURATE,[Nf]:r.DST_COLOR,[zf]:r.DST_ALPHA,[Df]:r.ONE_MINUS_SRC_COLOR,[$a]:r.ONE_MINUS_SRC_ALPHA,[Bf]:r.ONE_MINUS_DST_COLOR,[Uf]:r.ONE_MINUS_DST_ALPHA,[Of]:r.CONSTANT_COLOR,[kf]:r.ONE_MINUS_CONSTANT_COLOR,[Hf]:r.CONSTANT_ALPHA,[Vf]:r.ONE_MINUS_CONSTANT_ALPHA};function U(k,xt,tt,ct,Tt,wt,$t,xe,De,Ut){if(k===Cn){p===!0&&(pt(r.BLEND),p=!1);return}if(p===!1&&(st(r.BLEND),p=!0),k!==Sf){if(k!==m||Ut!==_){if((x!==Di||v!==Di)&&(r.blendEquation(r.FUNC_ADD),x=Di,v=Di),Ut)switch(k){case ds:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Je:r.blendFunc(r.ONE,r.ONE);break;case eh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case ds:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Je:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case eh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case nh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,y=null,A=null,E=null,S.set(0,0,0),C=0,m=k,_=Ut}return}Tt=Tt||xt,wt=wt||tt,$t=$t||ct,(xt!==x||Tt!==v)&&(r.blendEquationSeparate(at[xt],at[Tt]),x=xt,v=Tt),(tt!==M||ct!==y||wt!==A||$t!==E)&&(r.blendFuncSeparate(ut[tt],ut[ct],ut[wt],ut[$t]),M=tt,y=ct,A=wt,E=$t),(xe.equals(S)===!1||De!==C)&&(r.blendColor(xe.r,xe.g,xe.b,De),S.copy(xe),C=De),m=k,_=!1}function zt(k,xt){k.side===Me?pt(r.CULL_FACE):st(r.CULL_FACE);let tt=k.side===We;xt&&(tt=!tt),dt(tt),k.blending===ds&&k.transparent===!1?U(Cn):U(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),o.setFunc(k.depthFunc),o.setTest(k.depthTest),o.setMask(k.depthWrite),s.setMask(k.colorWrite);let ct=k.stencilWrite;a.setTest(ct),ct&&(a.setMask(k.stencilWriteMask),a.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),a.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Xt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(k){w!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),w=k)}function Ct(k){k!==wf?(st(r.CULL_FACE),k!==b&&(k===th?r.cullFace(r.BACK):k===Ef?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),b=k}function vt(k){k!==z&&(B&&r.lineWidth(k),z=k)}function Xt(k,xt,tt){k?(st(r.POLYGON_OFFSET_FILL),(D!==xt||N!==tt)&&(r.polygonOffset(xt,tt),D=xt,N=tt)):pt(r.POLYGON_OFFSET_FILL)}function Pt(k){k?st(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function I(k){k===void 0&&(k=r.TEXTURE0+F-1),W!==k&&(r.activeTexture(k),W=k)}function T(k,xt,tt){tt===void 0&&(W===null?tt=r.TEXTURE0+F-1:tt=W);let ct=K[tt];ct===void 0&&(ct={type:void 0,texture:void 0},K[tt]=ct),(ct.type!==k||ct.texture!==xt)&&(W!==tt&&(r.activeTexture(tt),W=tt),r.bindTexture(k,xt||ot[k]),ct.type=k,ct.texture=xt)}function q(){let k=K[W];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function nt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function rt(){try{r.texSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Nt(){try{r.texSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function St(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qt(){try{r.texStorage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function P(){try{r.texStorage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Y(){try{r.texImage2D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function mt(){try{r.texImage3D.apply(r,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function yt(k){et.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),et.copy(k))}function j(k){O.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),O.copy(k))}function Dt(k,xt){let tt=l.get(xt);tt===void 0&&(tt=new WeakMap,l.set(xt,tt));let ct=tt.get(k);ct===void 0&&(ct=r.getUniformBlockIndex(xt,k.name),tt.set(k,ct))}function qt(k,xt){let ct=l.get(xt).get(k);c.get(xt)!==ct&&(r.uniformBlockBinding(xt,ct,k.__bindingPointIndex),c.set(xt,ct))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},W=null,K={},u={},d=new WeakMap,f=[],g=null,p=!1,m=null,x=null,M=null,y=null,v=null,A=null,E=null,S=new bt(0,0,0),C=0,_=!1,w=null,b=null,z=null,D=null,N=null,et.set(0,0,r.canvas.width,r.canvas.height),O.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:pt,bindFramebuffer:Et,drawBuffers:It,useProgram:Yt,setBlending:U,setMaterial:zt,setFlipSided:dt,setCullFace:Ct,setLineWidth:vt,setPolygonOffset:Xt,setScissorTest:Pt,activeTexture:I,bindTexture:T,unbindTexture:q,compressedTexImage2D:nt,compressedTexImage3D:ht,texImage2D:Y,texImage3D:mt,updateUBOMapping:Dt,uniformBlockBinding:qt,texStorage2D:Qt,texStorage3D:P,texSubImage2D:rt,texSubImage3D:Nt,compressedTexSubImage2D:_t,compressedTexSubImage3D:St,scissor:yt,viewport:j,reset:re}}function jh(r,t,e,n){let i=ox(n);switch(e){case yu:return r*t;case Mu:return r*t;case bu:return r*t*2;case Tl:return r*t/i.components*i.byteLength;case Al:return r*t/i.components*i.byteLength;case wu:return r*t*2/i.components*i.byteLength;case Rl:return r*t*2/i.components*i.byteLength;case _u:return r*t*3/i.components*i.byteLength;case _n:return r*t*4/i.components*i.byteLength;case Cl:return r*t*4/i.components*i.byteLength;case no:case io:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case so:case ro:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oc:case cc:return Math.max(r,16)*Math.max(t,8)/4;case rc:case ac:return Math.max(r,8)*Math.max(t,8)/2;case lc:case hc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case dc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case pc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case mc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case gc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case xc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case vc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case yc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case _c:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case bc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case wc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ec:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case oo:case Tc:case Ac:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Eu:case Rc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Cc:case Pc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ox(r){switch(r){case $n:case gu:return{byteLength:1,components:1};case or:case xu:case ln:return{byteLength:2,components:1};case El:case Sl:return{byteLength:2,components:4};case Bi:case wl:case Rn:return{byteLength:4,components:1};case vu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ax(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Q,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(I,T){return f?new OffscreenCanvas(I,T):lo("canvas")}function p(I,T,q){let nt=1,ht=Pt(I);if((ht.width>q||ht.height>q)&&(nt=q/Math.max(ht.width,ht.height)),nt<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let rt=Math.floor(nt*ht.width),Nt=Math.floor(nt*ht.height);u===void 0&&(u=g(rt,Nt));let _t=T?g(rt,Nt):u;return _t.width=rt,_t.height=Nt,_t.getContext("2d").drawImage(I,0,0,rt,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Nt+")."),_t}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),I;return I}function m(I){return I.generateMipmaps}function x(I){r.generateMipmap(I)}function M(I){return I.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?r.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(I,T,q,nt,ht=!1){if(I!==null){if(r[I]!==void 0)return r[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let rt=T;if(T===r.RED&&(q===r.FLOAT&&(rt=r.R32F),q===r.HALF_FLOAT&&(rt=r.R16F),q===r.UNSIGNED_BYTE&&(rt=r.R8)),T===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(rt=r.R8UI),q===r.UNSIGNED_SHORT&&(rt=r.R16UI),q===r.UNSIGNED_INT&&(rt=r.R32UI),q===r.BYTE&&(rt=r.R8I),q===r.SHORT&&(rt=r.R16I),q===r.INT&&(rt=r.R32I)),T===r.RG&&(q===r.FLOAT&&(rt=r.RG32F),q===r.HALF_FLOAT&&(rt=r.RG16F),q===r.UNSIGNED_BYTE&&(rt=r.RG8)),T===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(rt=r.RG8UI),q===r.UNSIGNED_SHORT&&(rt=r.RG16UI),q===r.UNSIGNED_INT&&(rt=r.RG32UI),q===r.BYTE&&(rt=r.RG8I),q===r.SHORT&&(rt=r.RG16I),q===r.INT&&(rt=r.RG32I)),T===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(rt=r.RGB8UI),q===r.UNSIGNED_SHORT&&(rt=r.RGB16UI),q===r.UNSIGNED_INT&&(rt=r.RGB32UI),q===r.BYTE&&(rt=r.RGB8I),q===r.SHORT&&(rt=r.RGB16I),q===r.INT&&(rt=r.RGB32I)),T===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(rt=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(rt=r.RGBA16UI),q===r.UNSIGNED_INT&&(rt=r.RGBA32UI),q===r.BYTE&&(rt=r.RGBA8I),q===r.SHORT&&(rt=r.RGBA16I),q===r.INT&&(rt=r.RGBA32I)),T===r.RGB&&q===r.UNSIGNED_INT_5_9_9_9_REV&&(rt=r.RGB9_E5),T===r.RGBA){let Nt=ht?No:ie.getTransfer(nt);q===r.FLOAT&&(rt=r.RGBA32F),q===r.HALF_FLOAT&&(rt=r.RGBA16F),q===r.UNSIGNED_BYTE&&(rt=Nt===he?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(rt=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(rt=r.RGB5_A1)}return(rt===r.R16F||rt===r.R32F||rt===r.RG16F||rt===r.RG32F||rt===r.RGBA16F||rt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(I,T){let q;return I?T===null||T===Bi||T===_s?q=r.DEPTH24_STENCIL8:T===Rn?q=r.DEPTH32F_STENCIL8:T===or&&(q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Bi||T===_s?q=r.DEPTH_COMPONENT24:T===Rn?q=r.DEPTH_COMPONENT32F:T===or&&(q=r.DEPTH_COMPONENT16),q}function A(I,T){return m(I)===!0||I.isFramebufferTexture&&I.minFilter!==cn&&I.minFilter!==An?Math.log2(Math.max(T.width,T.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?T.mipmaps.length:1}function E(I){let T=I.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&h.delete(T)}function S(I){let T=I.target;T.removeEventListener("dispose",S),w(T)}function C(I){let T=n.get(I);if(T.__webglInit===void 0)return;let q=I.source,nt=d.get(q);if(nt){let ht=nt[T.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&_(I),Object.keys(nt).length===0&&d.delete(q)}n.remove(I)}function _(I){let T=n.get(I);r.deleteTexture(T.__webglTexture);let q=I.source,nt=d.get(q);delete nt[T.__cacheKey],o.memory.textures--}function w(I){let T=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(T.__webglFramebuffer[nt]))for(let ht=0;ht<T.__webglFramebuffer[nt].length;ht++)r.deleteFramebuffer(T.__webglFramebuffer[nt][ht]);else r.deleteFramebuffer(T.__webglFramebuffer[nt]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[nt])}else{if(Array.isArray(T.__webglFramebuffer))for(let nt=0;nt<T.__webglFramebuffer.length;nt++)r.deleteFramebuffer(T.__webglFramebuffer[nt]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let nt=0;nt<T.__webglColorRenderbuffer.length;nt++)T.__webglColorRenderbuffer[nt]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[nt]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let q=I.textures;for(let nt=0,ht=q.length;nt<ht;nt++){let rt=n.get(q[nt]);rt.__webglTexture&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(q[nt])}n.remove(I)}let b=0;function z(){b=0}function D(){let I=b;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),b+=1,I}function N(I){let T=[];return T.push(I.wrapS),T.push(I.wrapT),T.push(I.wrapR||0),T.push(I.magFilter),T.push(I.minFilter),T.push(I.anisotropy),T.push(I.internalFormat),T.push(I.format),T.push(I.type),T.push(I.generateMipmaps),T.push(I.premultiplyAlpha),T.push(I.flipY),T.push(I.unpackAlignment),T.push(I.colorSpace),T.join()}function F(I,T){let q=n.get(I);if(I.isVideoTexture&&vt(I),I.isRenderTargetTexture===!1&&I.version>0&&q.__version!==I.version){let nt=I.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(q,I,T);return}}e.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+T)}function B(I,T){let q=n.get(I);if(I.version>0&&q.__version!==I.version){O(q,I,T);return}e.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+T)}function X(I,T){let q=n.get(I);if(I.version>0&&q.__version!==I.version){O(q,I,T);return}e.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+T)}function H(I,T){let q=n.get(I);if(I.version>0&&q.__version!==I.version){$(q,I,T);return}e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+T)}let W={[rr]:r.REPEAT,[Ui]:r.CLAMP_TO_EDGE,[sc]:r.MIRRORED_REPEAT},K={[cn]:r.NEAREST,[qf]:r.NEAREST_MIPMAP_NEAREST,[Sr]:r.NEAREST_MIPMAP_LINEAR,[An]:r.LINEAR,[da]:r.LINEAR_MIPMAP_NEAREST,[Ni]:r.LINEAR_MIPMAP_LINEAR},lt={[Jf]:r.NEVER,[nd]:r.ALWAYS,[Kf]:r.LESS,[Tu]:r.LEQUAL,[jf]:r.EQUAL,[ed]:r.GEQUAL,[Qf]:r.GREATER,[td]:r.NOTEQUAL};function ft(I,T){if(T.type===Rn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===An||T.magFilter===da||T.magFilter===Sr||T.magFilter===Ni||T.minFilter===An||T.minFilter===da||T.minFilter===Sr||T.minFilter===Ni)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(I,r.TEXTURE_WRAP_S,W[T.wrapS]),r.texParameteri(I,r.TEXTURE_WRAP_T,W[T.wrapT]),(I===r.TEXTURE_3D||I===r.TEXTURE_2D_ARRAY)&&r.texParameteri(I,r.TEXTURE_WRAP_R,W[T.wrapR]),r.texParameteri(I,r.TEXTURE_MAG_FILTER,K[T.magFilter]),r.texParameteri(I,r.TEXTURE_MIN_FILTER,K[T.minFilter]),T.compareFunction&&(r.texParameteri(I,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(I,r.TEXTURE_COMPARE_FUNC,lt[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===cn||T.minFilter!==Sr&&T.minFilter!==Ni||T.type===Rn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(I,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function et(I,T){let q=!1;I.__webglInit===void 0&&(I.__webglInit=!0,T.addEventListener("dispose",E));let nt=T.source,ht=d.get(nt);ht===void 0&&(ht={},d.set(nt,ht));let rt=N(T);if(rt!==I.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,q=!0),ht[rt].usedTimes++;let Nt=ht[I.__cacheKey];Nt!==void 0&&(ht[I.__cacheKey].usedTimes--,Nt.usedTimes===0&&_(T)),I.__cacheKey=rt,I.__webglTexture=ht[rt].texture}return q}function O(I,T,q){let nt=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(nt=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(nt=r.TEXTURE_3D);let ht=et(I,T),rt=T.source;e.bindTexture(nt,I.__webglTexture,r.TEXTURE0+q);let Nt=n.get(rt);if(rt.version!==Nt.__version||ht===!0){e.activeTexture(r.TEXTURE0+q);let _t=ie.getPrimaries(ie.workingColorSpace),St=T.colorSpace===hi?null:ie.getPrimaries(T.colorSpace),Qt=T.colorSpace===hi||_t===St?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let P=p(T.image,!1,i.maxTextureSize);P=Xt(T,P);let Y=s.convert(T.format,T.colorSpace),mt=s.convert(T.type),yt=y(T.internalFormat,Y,mt,T.colorSpace,T.isVideoTexture);ft(nt,T);let j,Dt=T.mipmaps,qt=T.isVideoTexture!==!0,re=Nt.__version===void 0||ht===!0,k=rt.dataReady,xt=A(T,P);if(T.isDepthTexture)yt=v(T.format===Ms,T.type),re&&(qt?e.texStorage2D(r.TEXTURE_2D,1,yt,P.width,P.height):e.texImage2D(r.TEXTURE_2D,0,yt,P.width,P.height,0,Y,mt,null));else if(T.isDataTexture)if(Dt.length>0){qt&&re&&e.texStorage2D(r.TEXTURE_2D,xt,yt,Dt[0].width,Dt[0].height);for(let tt=0,ct=Dt.length;tt<ct;tt++)j=Dt[tt],qt?k&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,j.width,j.height,Y,mt,j.data):e.texImage2D(r.TEXTURE_2D,tt,yt,j.width,j.height,0,Y,mt,j.data);T.generateMipmaps=!1}else qt?(re&&e.texStorage2D(r.TEXTURE_2D,xt,yt,P.width,P.height),k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,P.width,P.height,Y,mt,P.data)):e.texImage2D(r.TEXTURE_2D,0,yt,P.width,P.height,0,Y,mt,P.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){qt&&re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,yt,Dt[0].width,Dt[0].height,P.depth);for(let tt=0,ct=Dt.length;tt<ct;tt++)if(j=Dt[tt],T.format!==_n)if(Y!==null)if(qt){if(k)if(T.layerUpdates.size>0){let Tt=jh(j.width,j.height,T.format,T.type);for(let wt of T.layerUpdates){let $t=j.data.subarray(wt*Tt/j.data.BYTES_PER_ELEMENT,(wt+1)*Tt/j.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,wt,j.width,j.height,1,Y,$t)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,j.width,j.height,P.depth,Y,j.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,yt,j.width,j.height,P.depth,0,j.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?k&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,j.width,j.height,P.depth,Y,mt,j.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,yt,j.width,j.height,P.depth,0,Y,mt,j.data)}else{qt&&re&&e.texStorage2D(r.TEXTURE_2D,xt,yt,Dt[0].width,Dt[0].height);for(let tt=0,ct=Dt.length;tt<ct;tt++)j=Dt[tt],T.format!==_n?Y!==null?qt?k&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,j.width,j.height,Y,j.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,yt,j.width,j.height,0,j.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?k&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,j.width,j.height,Y,mt,j.data):e.texImage2D(r.TEXTURE_2D,tt,yt,j.width,j.height,0,Y,mt,j.data)}else if(T.isDataArrayTexture)if(qt){if(re&&e.texStorage3D(r.TEXTURE_2D_ARRAY,xt,yt,P.width,P.height,P.depth),k)if(T.layerUpdates.size>0){let tt=jh(P.width,P.height,T.format,T.type);for(let ct of T.layerUpdates){let Tt=P.data.subarray(ct*tt/P.data.BYTES_PER_ELEMENT,(ct+1)*tt/P.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ct,P.width,P.height,1,Y,mt,Tt)}T.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,Y,mt,P.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,yt,P.width,P.height,P.depth,0,Y,mt,P.data);else if(T.isData3DTexture)qt?(re&&e.texStorage3D(r.TEXTURE_3D,xt,yt,P.width,P.height,P.depth),k&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,Y,mt,P.data)):e.texImage3D(r.TEXTURE_3D,0,yt,P.width,P.height,P.depth,0,Y,mt,P.data);else if(T.isFramebufferTexture){if(re)if(qt)e.texStorage2D(r.TEXTURE_2D,xt,yt,P.width,P.height);else{let tt=P.width,ct=P.height;for(let Tt=0;Tt<xt;Tt++)e.texImage2D(r.TEXTURE_2D,Tt,yt,tt,ct,0,Y,mt,null),tt>>=1,ct>>=1}}else if(Dt.length>0){if(qt&&re){let tt=Pt(Dt[0]);e.texStorage2D(r.TEXTURE_2D,xt,yt,tt.width,tt.height)}for(let tt=0,ct=Dt.length;tt<ct;tt++)j=Dt[tt],qt?k&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,Y,mt,j):e.texImage2D(r.TEXTURE_2D,tt,yt,Y,mt,j);T.generateMipmaps=!1}else if(qt){if(re){let tt=Pt(P);e.texStorage2D(r.TEXTURE_2D,xt,yt,tt.width,tt.height)}k&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Y,mt,P)}else e.texImage2D(r.TEXTURE_2D,0,yt,Y,mt,P);m(T)&&x(nt),Nt.__version=rt.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function $(I,T,q){if(T.image.length!==6)return;let nt=et(I,T),ht=T.source;e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+q);let rt=n.get(ht);if(ht.version!==rt.__version||nt===!0){e.activeTexture(r.TEXTURE0+q);let Nt=ie.getPrimaries(ie.workingColorSpace),_t=T.colorSpace===hi?null:ie.getPrimaries(T.colorSpace),St=T.colorSpace===hi||Nt===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);let Qt=T.isCompressedTexture||T.image[0].isCompressedTexture,P=T.image[0]&&T.image[0].isDataTexture,Y=[];for(let ct=0;ct<6;ct++)!Qt&&!P?Y[ct]=p(T.image[ct],!0,i.maxCubemapSize):Y[ct]=P?T.image[ct].image:T.image[ct],Y[ct]=Xt(T,Y[ct]);let mt=Y[0],yt=s.convert(T.format,T.colorSpace),j=s.convert(T.type),Dt=y(T.internalFormat,yt,j,T.colorSpace),qt=T.isVideoTexture!==!0,re=rt.__version===void 0||nt===!0,k=ht.dataReady,xt=A(T,mt);ft(r.TEXTURE_CUBE_MAP,T);let tt;if(Qt){qt&&re&&e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Dt,mt.width,mt.height);for(let ct=0;ct<6;ct++){tt=Y[ct].mipmaps;for(let Tt=0;Tt<tt.length;Tt++){let wt=tt[Tt];T.format!==_n?yt!==null?qt?k&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,wt.width,wt.height,yt,wt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,Dt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,0,0,wt.width,wt.height,yt,j,wt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt,Dt,wt.width,wt.height,0,yt,j,wt.data)}}}else{if(tt=T.mipmaps,qt&&re){tt.length>0&&xt++;let ct=Pt(Y[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,xt,Dt,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(P){qt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Y[ct].width,Y[ct].height,yt,j,Y[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Dt,Y[ct].width,Y[ct].height,0,yt,j,Y[ct].data);for(let Tt=0;Tt<tt.length;Tt++){let $t=tt[Tt].image[ct].image;qt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,$t.width,$t.height,yt,j,$t.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,Dt,$t.width,$t.height,0,yt,j,$t.data)}}else{qt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,yt,j,Y[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,Dt,yt,j,Y[ct]);for(let Tt=0;Tt<tt.length;Tt++){let wt=tt[Tt];qt?k&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,0,0,yt,j,wt.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Tt+1,Dt,yt,j,wt.image[ct])}}}m(T)&&x(r.TEXTURE_CUBE_MAP),rt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}I.__version=T.version}function ot(I,T,q,nt,ht,rt){let Nt=s.convert(q.format,q.colorSpace),_t=s.convert(q.type),St=y(q.internalFormat,Nt,_t,q.colorSpace),Qt=n.get(T),P=n.get(q);if(P.__renderTarget=T,!Qt.__hasExternalTextures){let Y=Math.max(1,T.width>>rt),mt=Math.max(1,T.height>>rt);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,St,Y,mt,T.depth,0,Nt,_t,null):e.texImage2D(ht,rt,St,Y,mt,0,Nt,_t,null)}e.bindFramebuffer(r.FRAMEBUFFER,I),Ct(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,nt,ht,P.__webglTexture,0,dt(T)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,nt,ht,P.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(I,T,q){if(r.bindRenderbuffer(r.RENDERBUFFER,I),T.depthBuffer){let nt=T.depthTexture,ht=nt&&nt.isDepthTexture?nt.type:null,rt=v(T.stencilBuffer,ht),Nt=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=dt(T);Ct(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,rt,T.width,T.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,rt,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,rt,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,I)}else{let nt=T.textures;for(let ht=0;ht<nt.length;ht++){let rt=nt[ht],Nt=s.convert(rt.format,rt.colorSpace),_t=s.convert(rt.type),St=y(rt.internalFormat,Nt,_t,rt.colorSpace),Qt=dt(T);q&&Ct(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qt,St,T.width,T.height):Ct(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qt,St,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,St,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(I,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,I),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let nt=n.get(T.depthTexture);nt.__renderTarget=T,(!nt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);let ht=nt.__webglTexture,rt=dt(T);if(T.depthTexture.format===ps)Ct(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(T.depthTexture.format===Ms)Ct(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Et(I){let T=n.get(I),q=I.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==I.depthTexture){let nt=I.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),nt){let ht=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,nt.removeEventListener("dispose",ht)};nt.addEventListener("dispose",ht),T.__depthDisposeCallback=ht}T.__boundDepthTexture=nt}if(I.depthTexture&&!T.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");pt(T.__webglFramebuffer,I)}else if(q){T.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[nt]),T.__webglDepthbuffer[nt]===void 0)T.__webglDepthbuffer[nt]=r.createRenderbuffer(),st(T.__webglDepthbuffer[nt],I,!1);else{let ht=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=T.__webglDepthbuffer[nt];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),st(T.__webglDepthbuffer,I,!1);else{let nt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,nt,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(I,T,q){let nt=n.get(I);T!==void 0&&ot(nt.__webglFramebuffer,I,I.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&Et(I)}function Yt(I){let T=I.texture,q=n.get(I),nt=n.get(T);I.addEventListener("dispose",S);let ht=I.textures,rt=I.isWebGLCubeRenderTarget===!0,Nt=ht.length>1;if(Nt||(nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture()),nt.__version=T.version,o.memory.textures++),rt){q.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer[_t]=[];for(let St=0;St<T.mipmaps.length;St++)q.__webglFramebuffer[_t][St]=r.createFramebuffer()}else q.__webglFramebuffer[_t]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){q.__webglFramebuffer=[];for(let _t=0;_t<T.mipmaps.length;_t++)q.__webglFramebuffer[_t]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Nt)for(let _t=0,St=ht.length;_t<St;_t++){let Qt=n.get(ht[_t]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=r.createTexture(),o.memory.textures++)}if(I.samples>0&&Ct(I)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){let St=ht[_t];q.__webglColorRenderbuffer[_t]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[_t]);let Qt=s.convert(St.format,St.colorSpace),P=s.convert(St.type),Y=y(St.internalFormat,Qt,P,St.colorSpace,I.isXRRenderTarget===!0),mt=dt(I);r.renderbufferStorageMultisample(r.RENDERBUFFER,mt,Y,I.width,I.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,q.__webglColorRenderbuffer[_t])}r.bindRenderbuffer(r.RENDERBUFFER,null),I.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),st(q.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,nt.__webglTexture),ft(r.TEXTURE_CUBE_MAP,T);for(let _t=0;_t<6;_t++)if(T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)ot(q.__webglFramebuffer[_t][St],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,St);else ot(q.__webglFramebuffer[_t],I,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(T)&&x(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let _t=0,St=ht.length;_t<St;_t++){let Qt=ht[_t],P=n.get(Qt);e.bindTexture(r.TEXTURE_2D,P.__webglTexture),ft(r.TEXTURE_2D,Qt),ot(q.__webglFramebuffer,I,Qt,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,0),m(Qt)&&x(r.TEXTURE_2D)}e.unbindTexture()}else{let _t=r.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_t=I.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(_t,nt.__webglTexture),ft(_t,T),T.mipmaps&&T.mipmaps.length>0)for(let St=0;St<T.mipmaps.length;St++)ot(q.__webglFramebuffer[St],I,T,r.COLOR_ATTACHMENT0,_t,St);else ot(q.__webglFramebuffer,I,T,r.COLOR_ATTACHMENT0,_t,0);m(T)&&x(_t),e.unbindTexture()}I.depthBuffer&&Et(I)}function at(I){let T=I.textures;for(let q=0,nt=T.length;q<nt;q++){let ht=T[q];if(m(ht)){let rt=M(I),Nt=n.get(ht).__webglTexture;e.bindTexture(rt,Nt),x(rt),e.unbindTexture()}}}let ut=[],U=[];function zt(I){if(I.samples>0){if(Ct(I)===!1){let T=I.textures,q=I.width,nt=I.height,ht=r.COLOR_BUFFER_BIT,rt=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Nt=n.get(I),_t=T.length>1;if(_t)for(let St=0;St<T.length;St++)e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let St=0;St<T.length;St++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),_t){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[St]);let Qt=n.get(T[St]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Qt,0)}r.blitFramebuffer(0,0,q,nt,0,0,q,nt,ht,r.NEAREST),c===!0&&(ut.length=0,U.length=0,ut.push(r.COLOR_ATTACHMENT0+St),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(rt),U.push(rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ut))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_t)for(let St=0;St<T.length;St++){e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.RENDERBUFFER,Nt.__webglColorRenderbuffer[St]);let Qt=n.get(T[St]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Nt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+St,r.TEXTURE_2D,Qt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){let T=I.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function dt(I){return Math.min(i.maxSamples,I.samples)}function Ct(I){let T=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function vt(I){let T=o.render.frame;h.get(I)!==T&&(h.set(I,T),I.update())}function Xt(I,T){let q=I.colorSpace,nt=I.format,ht=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||q!==zs&&q!==hi&&(ie.getTransfer(q)===he?(nt!==_n||ht!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),T}function Pt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=D,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=X,this.setTextureCube=H,this.rebindTextures=It,this.setupRenderTarget=Yt,this.updateRenderTargetMipmap=at,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Ct}function cx(r,t){function e(n,i=hi){let s,o=ie.getTransfer(i);if(n===$n)return r.UNSIGNED_BYTE;if(n===El)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sl)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gu)return r.BYTE;if(n===xu)return r.SHORT;if(n===or)return r.UNSIGNED_SHORT;if(n===wl)return r.INT;if(n===Bi)return r.UNSIGNED_INT;if(n===Rn)return r.FLOAT;if(n===ln)return r.HALF_FLOAT;if(n===yu)return r.ALPHA;if(n===_u)return r.RGB;if(n===_n)return r.RGBA;if(n===Mu)return r.LUMINANCE;if(n===bu)return r.LUMINANCE_ALPHA;if(n===ps)return r.DEPTH_COMPONENT;if(n===Ms)return r.DEPTH_STENCIL;if(n===Tl)return r.RED;if(n===Al)return r.RED_INTEGER;if(n===wu)return r.RG;if(n===Rl)return r.RG_INTEGER;if(n===Cl)return r.RGBA_INTEGER;if(n===no||n===io||n===so||n===ro)if(o===he)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===no)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===no)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===io)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===so)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ro)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===rc||n===oc||n===ac||n===cc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===rc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ac)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===cc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lc||n===hc||n===uc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===lc||n===hc)return o===he?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===uc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===xc||n===vc||n===yc||n===_c||n===Mc||n===bc||n===wc||n===Ec||n===Sc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===fc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===vc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===bc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ec)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===he?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oo||n===Tc||n===Ac)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===oo)return o===he?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Tc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ac)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Eu||n===Rc||n===Cc||n===Pc)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===oo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Rc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Cc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var qc=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},te=class extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}},lx={type:"move"},nr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let p of t.hand.values()){let m=e.getJointPose(p,n),x=this._getHandJoint(l,p);m!==null&&(x.matrix.fromArray(m.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=m.radius),x.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lx)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},hx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ux=`
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

}`,Yc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new nn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new de({vertexShader:hx,fragmentShader:ux,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new it(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$c=class extends mi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,p=new Yc,m=e.getContextAttributes(),x=null,M=null,y=[],v=[],A=new Q,E=null,S=new Pe;S.viewport=new me;let C=new Pe;C.viewport=new me;let _=[S,C],w=new qc,b=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=y[O];return $===void 0&&($=new nr,y[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=y[O];return $===void 0&&($=new nr,y[O]=$),$.getGripSpace()},this.getHand=function(O){let $=y[O];return $===void 0&&($=new nr,y[O]=$),$.getHandSpace()};function D(O){let $=v.indexOf(O.inputSource);if($===-1)return;let ot=y[$];ot!==void 0&&(ot.update(O.inputSource,O.frame,l||o),ot.dispatchEvent({type:O.type,data:O.inputSource}))}function N(){i.removeEventListener("select",D),i.removeEventListener("selectstart",D),i.removeEventListener("selectend",D),i.removeEventListener("squeeze",D),i.removeEventListener("squeezestart",D),i.removeEventListener("squeezeend",D),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let O=0;O<y.length;O++){let $=v[O];$!==null&&(v[O]=null,y[O].disconnect($))}b=null,z=null,p.reset(),t.setRenderTarget(x),f=null,d=null,u=null,i=null,M=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(x=t.getRenderTarget(),i.addEventListener("select",D),i.addEventListener("selectstart",D),i.addEventListener("selectend",D),i.addEventListener("squeeze",D),i.addEventListener("squeezestart",D),i.addEventListener("squeezeend",D),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new ke(f.framebufferWidth,f.framebufferHeight,{format:_n,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,ot=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?Ms:ps,ot=m.stencil?_s:Bi);let pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(pt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new ke(d.textureWidth,d.textureHeight,{format:_n,type:$n,depthTexture:new xo(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(O){for(let $=0;$<O.removed.length;$++){let ot=O.removed[$],st=v.indexOf(ot);st>=0&&(v[st]=null,y[st].disconnect(ot))}for(let $=0;$<O.added.length;$++){let ot=O.added[$],st=v.indexOf(ot);if(st===-1){for(let Et=0;Et<y.length;Et++)if(Et>=v.length){v.push(ot),st=Et;break}else if(v[Et]===null){v[Et]=ot,st=Et;break}if(st===-1)break}let pt=y[st];pt&&pt.connect(ot)}}let B=new L,X=new L;function H(O,$,ot){B.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(ot.matrixWorld);let st=B.distanceTo(X),pt=$.projectionMatrix.elements,Et=ot.projectionMatrix.elements,It=pt[14]/(pt[10]-1),Yt=pt[14]/(pt[10]+1),at=(pt[9]+1)/pt[5],ut=(pt[9]-1)/pt[5],U=(pt[8]-1)/pt[0],zt=(Et[8]+1)/Et[0],dt=It*U,Ct=It*zt,vt=st/(-U+zt),Xt=vt*-U;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Xt),O.translateZ(vt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),pt[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Pt=It+vt,I=Yt+vt,T=dt-Xt,q=Ct+(st-Xt),nt=at*Yt/I*Pt,ht=ut*Yt/I*Pt;O.projectionMatrix.makePerspective(T,q,nt,ht,Pt,I),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function W(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let $=O.near,ot=O.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(ot=p.depthFar)),w.near=C.near=S.near=$,w.far=C.far=S.far=ot,(b!==w.near||z!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),b=w.near,z=w.far),S.layers.mask=O.layers.mask|2,C.layers.mask=O.layers.mask|4,w.layers.mask=S.layers.mask|C.layers.mask;let st=O.parent,pt=w.cameras;W(w,st);for(let Et=0;Et<pt.length;Et++)W(pt[Et],st);pt.length===2?H(w,S,C):w.projectionMatrix.copy(S.projectionMatrix),K(O,w,st)};function K(O,$,ot){ot===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(ot.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=bs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=O)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(w)};let lt=null;function ft(O,$){if(h=$.getViewerPose(l||o),g=$,h!==null){let ot=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let st=!1;ot.length!==w.cameras.length&&(w.cameras.length=0,st=!0);for(let Et=0;Et<ot.length;Et++){let It=ot[Et],Yt=null;if(f!==null)Yt=f.getViewport(It);else{let ut=u.getViewSubImage(d,It);Yt=ut.viewport,Et===0&&(t.setRenderTargetTextures(M,ut.colorTexture,d.ignoreDepthValues?void 0:ut.depthStencilTexture),t.setRenderTarget(M))}let at=_[Et];at===void 0&&(at=new Pe,at.layers.enable(Et),at.viewport=new me,_[Et]=at),at.matrix.fromArray(It.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(It.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Yt.x,Yt.y,Yt.width,Yt.height),Et===0&&(w.matrix.copy(at.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),st===!0&&w.cameras.push(at)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let Et=u.getDepthInformation(ot[0]);Et&&Et.isValid&&Et.texture&&p.init(t,Et,i.renderState)}}for(let ot=0;ot<y.length;ot++){let st=v[ot],pt=y[ot];st!==null&&pt!==void 0&&pt.update(st,$,l||o)}lt&&lt(O,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}let et=new Pu;et.setAnimationLoop(ft),this.setAnimationLoop=function(O){lt=O},this.dispose=function(){}}},Ii=new sn,fx=new ee;function dx(r,t){function e(m,x){m.matrixAutoUpdate===!0&&m.updateMatrix(),x.value.copy(m.matrix)}function n(m,x){x.color.getRGB(m.fogColor.value,Cu(r)),x.isFog?(m.fogNear.value=x.near,m.fogFar.value=x.far):x.isFogExp2&&(m.fogDensity.value=x.density)}function i(m,x,M,y,v){x.isMeshBasicMaterial||x.isMeshLambertMaterial?s(m,x):x.isMeshToonMaterial?(s(m,x),u(m,x)):x.isMeshPhongMaterial?(s(m,x),h(m,x)):x.isMeshStandardMaterial?(s(m,x),d(m,x),x.isMeshPhysicalMaterial&&f(m,x,v)):x.isMeshMatcapMaterial?(s(m,x),g(m,x)):x.isMeshDepthMaterial?s(m,x):x.isMeshDistanceMaterial?(s(m,x),p(m,x)):x.isMeshNormalMaterial?s(m,x):x.isLineBasicMaterial?(o(m,x),x.isLineDashedMaterial&&a(m,x)):x.isPointsMaterial?c(m,x,M,y):x.isSpriteMaterial?l(m,x):x.isShadowMaterial?(m.color.value.copy(x.color),m.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function s(m,x){m.opacity.value=x.opacity,x.color&&m.diffuse.value.copy(x.color),x.emissive&&m.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.bumpMap&&(m.bumpMap.value=x.bumpMap,e(x.bumpMap,m.bumpMapTransform),m.bumpScale.value=x.bumpScale,x.side===We&&(m.bumpScale.value*=-1)),x.normalMap&&(m.normalMap.value=x.normalMap,e(x.normalMap,m.normalMapTransform),m.normalScale.value.copy(x.normalScale),x.side===We&&m.normalScale.value.negate()),x.displacementMap&&(m.displacementMap.value=x.displacementMap,e(x.displacementMap,m.displacementMapTransform),m.displacementScale.value=x.displacementScale,m.displacementBias.value=x.displacementBias),x.emissiveMap&&(m.emissiveMap.value=x.emissiveMap,e(x.emissiveMap,m.emissiveMapTransform)),x.specularMap&&(m.specularMap.value=x.specularMap,e(x.specularMap,m.specularMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest);let M=t.get(x),y=M.envMap,v=M.envMapRotation;y&&(m.envMap.value=y,Ii.copy(v),Ii.x*=-1,Ii.y*=-1,Ii.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ii.y*=-1,Ii.z*=-1),m.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(Ii)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=x.reflectivity,m.ior.value=x.ior,m.refractionRatio.value=x.refractionRatio),x.lightMap&&(m.lightMap.value=x.lightMap,m.lightMapIntensity.value=x.lightMapIntensity,e(x.lightMap,m.lightMapTransform)),x.aoMap&&(m.aoMap.value=x.aoMap,m.aoMapIntensity.value=x.aoMapIntensity,e(x.aoMap,m.aoMapTransform))}function o(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform))}function a(m,x){m.dashSize.value=x.dashSize,m.totalSize.value=x.dashSize+x.gapSize,m.scale.value=x.scale}function c(m,x,M,y){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.size.value=x.size*M,m.scale.value=y*.5,x.map&&(m.map.value=x.map,e(x.map,m.uvTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function l(m,x){m.diffuse.value.copy(x.color),m.opacity.value=x.opacity,m.rotation.value=x.rotation,x.map&&(m.map.value=x.map,e(x.map,m.mapTransform)),x.alphaMap&&(m.alphaMap.value=x.alphaMap,e(x.alphaMap,m.alphaMapTransform)),x.alphaTest>0&&(m.alphaTest.value=x.alphaTest)}function h(m,x){m.specular.value.copy(x.specular),m.shininess.value=Math.max(x.shininess,1e-4)}function u(m,x){x.gradientMap&&(m.gradientMap.value=x.gradientMap)}function d(m,x){m.metalness.value=x.metalness,x.metalnessMap&&(m.metalnessMap.value=x.metalnessMap,e(x.metalnessMap,m.metalnessMapTransform)),m.roughness.value=x.roughness,x.roughnessMap&&(m.roughnessMap.value=x.roughnessMap,e(x.roughnessMap,m.roughnessMapTransform)),x.envMap&&(m.envMapIntensity.value=x.envMapIntensity)}function f(m,x,M){m.ior.value=x.ior,x.sheen>0&&(m.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),m.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(m.sheenColorMap.value=x.sheenColorMap,e(x.sheenColorMap,m.sheenColorMapTransform)),x.sheenRoughnessMap&&(m.sheenRoughnessMap.value=x.sheenRoughnessMap,e(x.sheenRoughnessMap,m.sheenRoughnessMapTransform))),x.clearcoat>0&&(m.clearcoat.value=x.clearcoat,m.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(m.clearcoatMap.value=x.clearcoatMap,e(x.clearcoatMap,m.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,e(x.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(m.clearcoatNormalMap.value=x.clearcoatNormalMap,e(x.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===We&&m.clearcoatNormalScale.value.negate())),x.dispersion>0&&(m.dispersion.value=x.dispersion),x.iridescence>0&&(m.iridescence.value=x.iridescence,m.iridescenceIOR.value=x.iridescenceIOR,m.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(m.iridescenceMap.value=x.iridescenceMap,e(x.iridescenceMap,m.iridescenceMapTransform)),x.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=x.iridescenceThicknessMap,e(x.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),x.transmission>0&&(m.transmission.value=x.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),x.transmissionMap&&(m.transmissionMap.value=x.transmissionMap,e(x.transmissionMap,m.transmissionMapTransform)),m.thickness.value=x.thickness,x.thicknessMap&&(m.thicknessMap.value=x.thicknessMap,e(x.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=x.attenuationDistance,m.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(m.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(m.anisotropyMap.value=x.anisotropyMap,e(x.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=x.specularIntensity,m.specularColor.value.copy(x.specularColor),x.specularColorMap&&(m.specularColorMap.value=x.specularColorMap,e(x.specularColorMap,m.specularColorMapTransform)),x.specularIntensityMap&&(m.specularIntensityMap.value=x.specularIntensityMap,e(x.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,x){x.matcap&&(m.matcap.value=x.matcap)}function p(m,x){let M=t.get(x).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function px(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,y){let v=y.program;n.uniformBlockBinding(M,v)}function l(M,y){let v=i[M.id];v===void 0&&(g(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));let A=y.program;n.updateUBOMapping(M,A);let E=t.render.frame;s[M.id]!==E&&(d(M),s[M.id]=E)}function h(M){let y=u();M.__bindingPointIndex=y;let v=r.createBuffer(),A=M.__size,E=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,A,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let y=i[M.id],v=M.uniforms,A=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let E=0,S=v.length;E<S;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let _=0,w=C.length;_<w;_++){let b=C[_];if(f(b,E,_,A)===!0){let z=b.__offset,D=Array.isArray(b.value)?b.value:[b.value],N=0;for(let F=0;F<D.length;F++){let B=D[F],X=p(B);typeof B=="number"||typeof B=="boolean"?(b.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,z+N,b.__data)):B.isMatrix3?(b.__data[0]=B.elements[0],b.__data[1]=B.elements[1],b.__data[2]=B.elements[2],b.__data[3]=0,b.__data[4]=B.elements[3],b.__data[5]=B.elements[4],b.__data[6]=B.elements[5],b.__data[7]=0,b.__data[8]=B.elements[6],b.__data[9]=B.elements[7],b.__data[10]=B.elements[8],b.__data[11]=0):(B.toArray(b.__data,N),N+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,b.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,y,v,A){let E=M.value,S=y+"_"+v;if(A[S]===void 0)return typeof E=="number"||typeof E=="boolean"?A[S]=E:A[S]=E.clone(),!0;{let C=A[S];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return A[S]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){let y=M.uniforms,v=0,A=16;for(let S=0,C=y.length;S<C;S++){let _=Array.isArray(y[S])?y[S]:[y[S]];for(let w=0,b=_.length;w<b;w++){let z=_[w],D=Array.isArray(z.value)?z.value:[z.value];for(let N=0,F=D.length;N<F;N++){let B=D[N],X=p(B),H=v%A,W=H%X.boundary,K=H+W;v+=W,K!==0&&A-K<X.storage&&(v+=A-K),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=X.storage}}}let E=v%A;return E>0&&(v+=A-E),M.__size=v,M.__cache={},this}function p(M){let y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function m(M){let y=M.target;y.removeEventListener("dispose",m);let v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function x(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:c,update:l,dispose:x}}var vo=class{constructor(t={}){let{canvas:e=yd(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let g=new Uint32Array(4),p=new Int32Array(4),m=null,x=null,M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pe,this.toneMapping=fi,this.toneMappingExposure=1;let v=this,A=!1,E=0,S=0,C=null,_=-1,w=null,b=new me,z=new me,D=null,N=new bt(0),F=0,B=e.width,X=e.height,H=1,W=null,K=null,lt=new me(0,0,B,X),ft=new me(0,0,B,X),et=!1,O=new ar,$=!1,ot=!1,st=new ee,pt=new ee,Et=new L,It=new me,Yt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},at=!1;function ut(){return C===null?H:1}let U=n;function zt(R,V){return e.getContext(R,V)}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${gl}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Tt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),U===null){let V="webgl2";if(U=zt(V,R),U===null)throw zt(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let dt,Ct,vt,Xt,Pt,I,T,q,nt,ht,rt,Nt,_t,St,Qt,P,Y,mt,yt,j,Dt,qt,re,k;function xt(){dt=new P0(U),dt.init(),qt=new cx(U,dt),Ct=new E0(U,dt,t,qt),vt=new rx(U,dt),Ct.reverseDepthBuffer&&d&&vt.buffers.depth.setReversed(!0),Xt=new D0(U),Pt=new qg,I=new ax(U,dt,vt,Pt,Ct,qt,Xt),T=new T0(v),q=new C0(v),nt=new kd(U),re=new b0(U,nt),ht=new I0(U,nt,Xt,re),rt=new U0(U,ht,nt,Xt),yt=new z0(U,Ct,I),P=new S0(Pt),Nt=new Xg(v,T,q,dt,Ct,re,P),_t=new dx(v,Pt),St=new $g,Qt=new tx(dt),mt=new M0(v,T,q,vt,rt,f,c),Y=new ix(v,rt,Ct),k=new px(U,Xt,Ct,vt),j=new w0(U,dt,Xt),Dt=new L0(U,dt,Xt),Xt.programs=Nt.programs,v.capabilities=Ct,v.extensions=dt,v.properties=Pt,v.renderLists=St,v.shadowMap=Y,v.state=vt,v.info=Xt}xt();let tt=new $c(v,U);this.xr=tt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(R){R!==void 0&&(H=R,this.setSize(B,X,!1))},this.getSize=function(R){return R.set(B,X)},this.setSize=function(R,V,Z=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=R,X=V,e.width=Math.floor(R*H),e.height=Math.floor(V*H),Z===!0&&(e.style.width=R+"px",e.style.height=V+"px"),this.setViewport(0,0,R,V)},this.getDrawingBufferSize=function(R){return R.set(B*H,X*H).floor()},this.setDrawingBufferSize=function(R,V,Z){B=R,X=V,H=Z,e.width=Math.floor(R*Z),e.height=Math.floor(V*Z),this.setViewport(0,0,R,V)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(lt)},this.setViewport=function(R,V,Z,J){R.isVector4?lt.set(R.x,R.y,R.z,R.w):lt.set(R,V,Z,J),vt.viewport(b.copy(lt).multiplyScalar(H).round())},this.getScissor=function(R){return R.copy(ft)},this.setScissor=function(R,V,Z,J){R.isVector4?ft.set(R.x,R.y,R.z,R.w):ft.set(R,V,Z,J),vt.scissor(z.copy(ft).multiplyScalar(H).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(R){vt.setScissorTest(et=R)},this.setOpaqueSort=function(R){W=R},this.setTransparentSort=function(R){K=R},this.getClearColor=function(R){return R.copy(mt.getClearColor())},this.setClearColor=function(){mt.setClearColor.apply(mt,arguments)},this.getClearAlpha=function(){return mt.getClearAlpha()},this.setClearAlpha=function(){mt.setClearAlpha.apply(mt,arguments)},this.clear=function(R=!0,V=!0,Z=!0){let J=0;if(R){let G=!1;if(C!==null){let gt=C.texture.format;G=gt===Cl||gt===Rl||gt===Al}if(G){let gt=C.texture.type,At=gt===$n||gt===Bi||gt===or||gt===_s||gt===El||gt===Sl,Ft=mt.getClearColor(),Ot=mt.getClearAlpha(),Zt=Ft.r,Jt=Ft.g,kt=Ft.b;At?(g[0]=Zt,g[1]=Jt,g[2]=kt,g[3]=Ot,U.clearBufferuiv(U.COLOR,0,g)):(p[0]=Zt,p[1]=Jt,p[2]=kt,p[3]=Ot,U.clearBufferiv(U.COLOR,0,p))}else J|=U.COLOR_BUFFER_BIT}V&&(J|=U.DEPTH_BUFFER_BIT),Z&&(J|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Tt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),St.dispose(),Qt.dispose(),Pt.dispose(),T.dispose(),q.dispose(),rt.dispose(),re.dispose(),k.dispose(),Nt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",ge),tt.removeEventListener("sessionend",En),pn.stop()};function ct(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Tt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let R=Xt.autoReset,V=Y.enabled,Z=Y.autoUpdate,J=Y.needsUpdate,G=Y.type;xt(),Xt.autoReset=R,Y.enabled=V,Y.autoUpdate=Z,Y.needsUpdate=J,Y.type=G}function wt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function $t(R){let V=R.target;V.removeEventListener("dispose",$t),xe(V)}function xe(R){De(R),Pt.remove(R)}function De(R){let V=Pt.get(R).programs;V!==void 0&&(V.forEach(function(Z){Nt.releaseProgram(Z)}),R.isShaderMaterial&&Nt.releaseShaderCache(R))}this.renderBufferDirect=function(R,V,Z,J,G,gt){V===null&&(V=Yt);let At=G.isMesh&&G.matrixWorld.determinant()<0,Ft=_f(R,V,Z,J,G);vt.setMaterial(J,At);let Ot=Z.index,Zt=1;if(J.wireframe===!0){if(Ot=ht.getWireframeAttribute(Z),Ot===void 0)return;Zt=2}let Jt=Z.drawRange,kt=Z.attributes.position,oe=Jt.start*Zt,ve=(Jt.start+Jt.count)*Zt;gt!==null&&(oe=Math.max(oe,gt.start*Zt),ve=Math.min(ve,(gt.start+gt.count)*Zt)),Ot!==null?(oe=Math.max(oe,0),ve=Math.min(ve,Ot.count)):kt!=null&&(oe=Math.max(oe,0),ve=Math.min(ve,kt.count));let ye=ve-oe;if(ye<0||ye===1/0)return;re.setup(G,J,Ft,Z,Ot);let en,ce=j;if(Ot!==null&&(en=nt.get(Ot),ce=Dt,ce.setIndex(en)),G.isMesh)J.wireframe===!0?(vt.setLineWidth(J.wireframeLinewidth*ut()),ce.setMode(U.LINES)):ce.setMode(U.TRIANGLES);else if(G.isLine){let Ht=J.linewidth;Ht===void 0&&(Ht=1),vt.setLineWidth(Ht*ut()),G.isLineSegments?ce.setMode(U.LINES):G.isLineLoop?ce.setMode(U.LINE_LOOP):ce.setMode(U.LINE_STRIP)}else G.isPoints?ce.setMode(U.POINTS):G.isSprite&&ce.setMode(U.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)ce.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))ce.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let Ht=G._multiDrawStarts,Fn=G._multiDrawCounts,le=G._multiDrawCount,mn=Ot?nt.get(Ot).bytesPerElement:1,Xi=Pt.get(J).currentProgram.getUniforms();for(let rn=0;rn<le;rn++)Xi.setValue(U,"_gl_DrawID",rn),ce.render(Ht[rn]/mn,Fn[rn])}else if(G.isInstancedMesh)ce.renderInstances(oe,ye,G.count);else if(Z.isInstancedBufferGeometry){let Ht=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Fn=Math.min(Z.instanceCount,Ht);ce.renderInstances(oe,ye,Fn)}else ce.render(oe,ye)};function Ut(R,V,Z){R.transparent===!0&&R.side===Me&&R.forceSinglePass===!1?(R.side=We,R.needsUpdate=!0,Er(R,V,Z),R.side=pi,R.needsUpdate=!0,Er(R,V,Z),R.side=Me):Er(R,V,Z)}this.compile=function(R,V,Z=null){Z===null&&(Z=R),x=Qt.get(Z),x.init(V),y.push(x),Z.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),R!==Z&&R.traverseVisible(function(G){G.isLight&&G.layers.test(V.layers)&&(x.pushLight(G),G.castShadow&&x.pushShadow(G))}),x.setupLights();let J=new Set;return R.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let gt=G.material;if(gt)if(Array.isArray(gt))for(let At=0;At<gt.length;At++){let Ft=gt[At];Ut(Ft,Z,G),J.add(Ft)}else Ut(gt,Z,G),J.add(gt)}),y.pop(),x=null,J},this.compileAsync=function(R,V,Z=null){let J=this.compile(R,V,Z);return new Promise(G=>{function gt(){if(J.forEach(function(At){Pt.get(At).currentProgram.isReady()&&J.delete(At)}),J.size===0){G(R);return}setTimeout(gt,10)}dt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let ze=null;function tn(R){ze&&ze(R)}function ge(){pn.stop()}function En(){pn.start()}let pn=new Pu;pn.setAnimationLoop(tn),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(R){ze=R,tt.setAnimationLoop(R),R===null?pn.stop():pn.start()},tt.addEventListener("sessionstart",ge),tt.addEventListener("sessionend",En),this.render=function(R,V){if(V!==void 0&&V.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(V),V=tt.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,V,C),x=Qt.get(R,y.length),x.init(V),y.push(x),pt.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),O.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,$=P.init(this.clippingPlanes,ot),m=St.get(R,M.length),m.init(),M.push(m),tt.enabled===!0&&tt.isPresenting===!0){let gt=v.xr.getDepthSensingMesh();gt!==null&&ti(gt,V,-1/0,v.sortObjects)}ti(R,V,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(W,K),at=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,at&&mt.addToRenderList(m,R),this.info.render.frame++,$===!0&&P.beginShadows();let Z=x.state.shadowsArray;Y.render(Z,R,V),$===!0&&P.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,G=m.transmissive;if(x.setupLights(),V.isArrayCamera){let gt=V.cameras;if(G.length>0)for(let At=0,Ft=gt.length;At<Ft;At++){let Ot=gt[At];br(J,G,R,Ot)}at&&mt.render(R);for(let At=0,Ft=gt.length;At<Ft;At++){let Ot=gt[At];ei(m,R,Ot,Ot.viewport)}}else G.length>0&&br(J,G,R,V),at&&mt.render(R),ei(m,R,V);C!==null&&(I.updateMultisampleRenderTarget(C),I.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,V),re.resetDefaultState(),_=-1,w=null,y.pop(),y.length>0?(x=y[y.length-1],$===!0&&P.setGlobalState(v.clippingPlanes,x.state.camera)):x=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function ti(R,V,Z,J){if(R.visible===!1)return;if(R.layers.test(V.layers)){if(R.isGroup)Z=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(V);else if(R.isLight)x.pushLight(R),R.castShadow&&x.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||O.intersectsSprite(R)){J&&It.setFromMatrixPosition(R.matrixWorld).applyMatrix4(pt);let At=rt.update(R),Ft=R.material;Ft.visible&&m.push(R,At,Ft,Z,It.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||O.intersectsObject(R))){let At=rt.update(R),Ft=R.material;if(J&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),It.copy(R.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),It.copy(At.boundingSphere.center)),It.applyMatrix4(R.matrixWorld).applyMatrix4(pt)),Array.isArray(Ft)){let Ot=At.groups;for(let Zt=0,Jt=Ot.length;Zt<Jt;Zt++){let kt=Ot[Zt],oe=Ft[kt.materialIndex];oe&&oe.visible&&m.push(R,At,oe,Z,It.z,kt)}}else Ft.visible&&m.push(R,At,Ft,Z,It.z,null)}}let gt=R.children;for(let At=0,Ft=gt.length;At<Ft;At++)ti(gt[At],V,Z,J)}function ei(R,V,Z,J){let G=R.opaque,gt=R.transmissive,At=R.transparent;x.setupLightsView(Z),$===!0&&P.setGlobalState(v.clippingPlanes,Z),J&&vt.viewport(b.copy(J)),G.length>0&&wr(G,V,Z),gt.length>0&&wr(gt,V,Z),At.length>0&&wr(At,V,Z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function br(R,V,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[J.id]===void 0&&(x.state.transmissionRenderTarget[J.id]=new ke(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?ln:$n,minFilter:Ni,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ie.workingColorSpace}));let gt=x.state.transmissionRenderTarget[J.id],At=J.viewport||b;gt.setSize(At.z,At.w);let Ft=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(N),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),at&&mt.render(Z);let Ot=v.toneMapping;v.toneMapping=fi;let Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),x.setupLightsView(J),$===!0&&P.setGlobalState(v.clippingPlanes,J),wr(R,Z,J),I.updateMultisampleRenderTarget(gt),I.updateRenderTargetMipmap(gt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let kt=0,oe=V.length;kt<oe;kt++){let ve=V[kt],ye=ve.object,en=ve.geometry,ce=ve.material,Ht=ve.group;if(ce.side===Me&&ye.layers.test(J.layers)){let Fn=ce.side;ce.side=We,ce.needsUpdate=!0,Jl(ye,Z,J,en,ce,Ht),ce.side=Fn,ce.needsUpdate=!0,Jt=!0}}Jt===!0&&(I.updateMultisampleRenderTarget(gt),I.updateRenderTargetMipmap(gt))}v.setRenderTarget(Ft),v.setClearColor(N,F),Zt!==void 0&&(J.viewport=Zt),v.toneMapping=Ot}function wr(R,V,Z){let J=V.isScene===!0?V.overrideMaterial:null;for(let G=0,gt=R.length;G<gt;G++){let At=R[G],Ft=At.object,Ot=At.geometry,Zt=J===null?At.material:J,Jt=At.group;Ft.layers.test(Z.layers)&&Jl(Ft,V,Z,Ot,Zt,Jt)}}function Jl(R,V,Z,J,G,gt){R.onBeforeRender(v,V,Z,J,G,gt),R.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),G.onBeforeRender(v,V,Z,J,R,gt),G.transparent===!0&&G.side===Me&&G.forceSinglePass===!1?(G.side=We,G.needsUpdate=!0,v.renderBufferDirect(Z,V,J,G,R,gt),G.side=pi,G.needsUpdate=!0,v.renderBufferDirect(Z,V,J,G,R,gt),G.side=Me):v.renderBufferDirect(Z,V,J,G,R,gt),R.onAfterRender(v,V,Z,J,G,gt)}function Er(R,V,Z){V.isScene!==!0&&(V=Yt);let J=Pt.get(R),G=x.state.lights,gt=x.state.shadowsArray,At=G.state.version,Ft=Nt.getParameters(R,G.state,gt,V,Z),Ot=Nt.getProgramCacheKey(Ft),Zt=J.programs;J.environment=R.isMeshStandardMaterial?V.environment:null,J.fog=V.fog,J.envMap=(R.isMeshStandardMaterial?q:T).get(R.envMap||J.environment),J.envMapRotation=J.environment!==null&&R.envMap===null?V.environmentRotation:R.envMapRotation,Zt===void 0&&(R.addEventListener("dispose",$t),Zt=new Map,J.programs=Zt);let Jt=Zt.get(Ot);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===At)return jl(R,Ft),Jt}else Ft.uniforms=Nt.getUniforms(R),R.onBeforeCompile(Ft,v),Jt=Nt.acquireProgram(Ft,Ot),Zt.set(Ot,Jt),J.uniforms=Ft.uniforms;let kt=J.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(kt.clippingPlanes=P.uniform),jl(R,Ft),J.needsLights=bf(R),J.lightsStateVersion=At,J.needsLights&&(kt.ambientLightColor.value=G.state.ambient,kt.lightProbe.value=G.state.probe,kt.directionalLights.value=G.state.directional,kt.directionalLightShadows.value=G.state.directionalShadow,kt.spotLights.value=G.state.spot,kt.spotLightShadows.value=G.state.spotShadow,kt.rectAreaLights.value=G.state.rectArea,kt.ltc_1.value=G.state.rectAreaLTC1,kt.ltc_2.value=G.state.rectAreaLTC2,kt.pointLights.value=G.state.point,kt.pointLightShadows.value=G.state.pointShadow,kt.hemisphereLights.value=G.state.hemi,kt.directionalShadowMap.value=G.state.directionalShadowMap,kt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,kt.spotShadowMap.value=G.state.spotShadowMap,kt.spotLightMatrix.value=G.state.spotLightMatrix,kt.spotLightMap.value=G.state.spotLightMap,kt.pointShadowMap.value=G.state.pointShadowMap,kt.pointShadowMatrix.value=G.state.pointShadowMatrix),J.currentProgram=Jt,J.uniformsList=null,Jt}function Kl(R){if(R.uniformsList===null){let V=R.currentProgram.getUniforms();R.uniformsList=gs.seqWithValue(V.seq,R.uniforms)}return R.uniformsList}function jl(R,V){let Z=Pt.get(R);Z.outputColorSpace=V.outputColorSpace,Z.batching=V.batching,Z.batchingColor=V.batchingColor,Z.instancing=V.instancing,Z.instancingColor=V.instancingColor,Z.instancingMorph=V.instancingMorph,Z.skinning=V.skinning,Z.morphTargets=V.morphTargets,Z.morphNormals=V.morphNormals,Z.morphColors=V.morphColors,Z.morphTargetsCount=V.morphTargetsCount,Z.numClippingPlanes=V.numClippingPlanes,Z.numIntersection=V.numClipIntersection,Z.vertexAlphas=V.vertexAlphas,Z.vertexTangents=V.vertexTangents,Z.toneMapping=V.toneMapping}function _f(R,V,Z,J,G){V.isScene!==!0&&(V=Yt),I.resetTextureUnits();let gt=V.fog,At=J.isMeshStandardMaterial?V.environment:null,Ft=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:zs,Ot=(J.isMeshStandardMaterial?q:T).get(J.envMap||At),Zt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Jt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),kt=!!Z.morphAttributes.position,oe=!!Z.morphAttributes.normal,ve=!!Z.morphAttributes.color,ye=fi;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ye=v.toneMapping);let en=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ce=en!==void 0?en.length:0,Ht=Pt.get(J),Fn=x.state.lights;if($===!0&&(ot===!0||R!==w)){let un=R===w&&J.id===_;P.setState(J,R,un)}let le=!1;J.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Fn.state.version||Ht.outputColorSpace!==Ft||G.isBatchedMesh&&Ht.batching===!1||!G.isBatchedMesh&&Ht.batching===!0||G.isBatchedMesh&&Ht.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Ht.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Ht.instancing===!1||!G.isInstancedMesh&&Ht.instancing===!0||G.isSkinnedMesh&&Ht.skinning===!1||!G.isSkinnedMesh&&Ht.skinning===!0||G.isInstancedMesh&&Ht.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Ht.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Ht.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Ht.instancingMorph===!1&&G.morphTexture!==null||Ht.envMap!==Ot||J.fog===!0&&Ht.fog!==gt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==P.numPlanes||Ht.numIntersection!==P.numIntersection)||Ht.vertexAlphas!==Zt||Ht.vertexTangents!==Jt||Ht.morphTargets!==kt||Ht.morphNormals!==oe||Ht.morphColors!==ve||Ht.toneMapping!==ye||Ht.morphTargetsCount!==ce)&&(le=!0):(le=!0,Ht.__version=J.version);let mn=Ht.currentProgram;le===!0&&(mn=Er(J,V,G));let Xi=!1,rn=!1,ks=!1,_e=mn.getUniforms(),Sn=Ht.uniforms;if(vt.useProgram(mn.program)&&(Xi=!0,rn=!0,ks=!0),J.id!==_&&(_=J.id,rn=!0),Xi||w!==R){vt.buffers.depth.getReversed()?(st.copy(R.projectionMatrix),Md(st),bd(st),_e.setValue(U,"projectionMatrix",st)):_e.setValue(U,"projectionMatrix",R.projectionMatrix),_e.setValue(U,"viewMatrix",R.matrixWorldInverse);let ni=_e.map.cameraPosition;ni!==void 0&&ni.setValue(U,Et.setFromMatrixPosition(R.matrixWorld)),Ct.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&_e.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),w!==R&&(w=R,rn=!0,ks=!0)}if(G.isSkinnedMesh){_e.setOptional(U,G,"bindMatrix"),_e.setOptional(U,G,"bindMatrixInverse");let un=G.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),_e.setValue(U,"boneTexture",un.boneTexture,I))}G.isBatchedMesh&&(_e.setOptional(U,G,"batchingTexture"),_e.setValue(U,"batchingTexture",G._matricesTexture,I),_e.setOptional(U,G,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",G._indirectTexture,I),_e.setOptional(U,G,"batchingColorTexture"),G._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",G._colorsTexture,I));let Hs=Z.morphAttributes;if((Hs.position!==void 0||Hs.normal!==void 0||Hs.color!==void 0)&&yt.update(G,Z,mn),(rn||Ht.receiveShadow!==G.receiveShadow)&&(Ht.receiveShadow=G.receiveShadow,_e.setValue(U,"receiveShadow",G.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Sn.envMap.value=Ot,Sn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&V.environment!==null&&(Sn.envMapIntensity.value=V.environmentIntensity),rn&&(_e.setValue(U,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&Mf(Sn,ks),gt&&J.fog===!0&&_t.refreshFogUniforms(Sn,gt),_t.refreshMaterialUniforms(Sn,J,H,X,x.state.transmissionRenderTarget[R.id]),gs.upload(U,Kl(Ht),Sn,I)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(gs.upload(U,Kl(Ht),Sn,I),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&_e.setValue(U,"center",G.center),_e.setValue(U,"modelViewMatrix",G.modelViewMatrix),_e.setValue(U,"normalMatrix",G.normalMatrix),_e.setValue(U,"modelMatrix",G.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let un=J.uniformsGroups;for(let ni=0,ii=un.length;ni<ii;ni++){let Ql=un[ni];k.update(Ql,mn),k.bind(Ql,mn)}}return mn}function Mf(R,V){R.ambientLightColor.needsUpdate=V,R.lightProbe.needsUpdate=V,R.directionalLights.needsUpdate=V,R.directionalLightShadows.needsUpdate=V,R.pointLights.needsUpdate=V,R.pointLightShadows.needsUpdate=V,R.spotLights.needsUpdate=V,R.spotLightShadows.needsUpdate=V,R.rectAreaLights.needsUpdate=V,R.hemisphereLights.needsUpdate=V}function bf(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,V,Z){Pt.get(R.texture).__webglTexture=V,Pt.get(R.depthTexture).__webglTexture=Z;let J=Pt.get(R);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,V){let Z=Pt.get(R);Z.__webglFramebuffer=V,Z.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(R,V=0,Z=0){C=R,E=V,S=Z;let J=!0,G=null,gt=!1,At=!1;if(R){let Ot=Pt.get(R);if(Ot.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(U.FRAMEBUFFER,null),J=!1;else if(Ot.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Ot.__hasExternalTextures)I.rebindTextures(R,Pt.get(R.texture).__webglTexture,Pt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let kt=R.depthTexture;if(Ot.__boundDepthTexture!==kt){if(kt!==null&&Pt.has(kt)&&(R.width!==kt.image.width||R.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let Zt=R.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(At=!0);let Jt=Pt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[V])?G=Jt[V][Z]:G=Jt[V],gt=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?G=Pt.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?G=Jt[Z]:G=Jt,b.copy(R.viewport),z.copy(R.scissor),D=R.scissorTest}else b.copy(lt).multiplyScalar(H).floor(),z.copy(ft).multiplyScalar(H).floor(),D=et;if(vt.bindFramebuffer(U.FRAMEBUFFER,G)&&J&&vt.drawBuffers(R,G),vt.viewport(b),vt.scissor(z),vt.setScissorTest(D),gt){let Ot=Pt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+V,Ot.__webglTexture,Z)}else if(At){let Ot=Pt.get(R.texture),Zt=V||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ot.__webglTexture,Z||0,Zt)}_=-1},this.readRenderTargetPixels=function(R,V,Z,J,G,gt,At){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){vt.bindFramebuffer(U.FRAMEBUFFER,Ft);try{let Ot=R.texture,Zt=Ot.format,Jt=Ot.type;if(!Ct.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ct.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=R.width-J&&Z>=0&&Z<=R.height-G&&U.readPixels(V,Z,J,G,qt.convert(Zt),qt.convert(Jt),gt)}finally{let Ot=C!==null?Pt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(R,V,Z,J,G,gt,At){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=Pt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){let Ot=R.texture,Zt=Ot.format,Jt=Ot.type;if(!Ct.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ct.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(V>=0&&V<=R.width-J&&Z>=0&&Z<=R.height-G){vt.bindFramebuffer(U.FRAMEBUFFER,Ft);let kt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,kt),U.bufferData(U.PIXEL_PACK_BUFFER,gt.byteLength,U.STREAM_READ),U.readPixels(V,Z,J,G,qt.convert(Zt),qt.convert(Jt),0);let oe=C!==null?Pt.get(C).__webglFramebuffer:null;vt.bindFramebuffer(U.FRAMEBUFFER,oe);let ve=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await _d(U,ve,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,kt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,gt),U.deleteBuffer(kt),U.deleteSync(ve),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,V=null,Z=0){R.isTexture!==!0&&(js("WebGLRenderer: copyFramebufferToTexture function signature has changed."),V=arguments[0]||null,R=arguments[1]);let J=Math.pow(2,-Z),G=Math.floor(R.image.width*J),gt=Math.floor(R.image.height*J),At=V!==null?V.x:0,Ft=V!==null?V.y:0;I.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,At,Ft,G,gt),vt.unbindTexture()},this.copyTextureToTexture=function(R,V,Z=null,J=null,G=0){R.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,R=arguments[1],V=arguments[2],G=arguments[3]||0,Z=null);let gt,At,Ft,Ot,Zt,Jt,kt,oe,ve,ye=R.isCompressedTexture?R.mipmaps[G]:R.image;Z!==null?(gt=Z.max.x-Z.min.x,At=Z.max.y-Z.min.y,Ft=Z.isBox3?Z.max.z-Z.min.z:1,Ot=Z.min.x,Zt=Z.min.y,Jt=Z.isBox3?Z.min.z:0):(gt=ye.width,At=ye.height,Ft=ye.depth||1,Ot=0,Zt=0,Jt=0),J!==null?(kt=J.x,oe=J.y,ve=J.z):(kt=0,oe=0,ve=0);let en=qt.convert(V.format),ce=qt.convert(V.type),Ht;V.isData3DTexture?(I.setTexture3D(V,0),Ht=U.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(I.setTexture2DArray(V,0),Ht=U.TEXTURE_2D_ARRAY):(I.setTexture2D(V,0),Ht=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,V.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,V.unpackAlignment);let Fn=U.getParameter(U.UNPACK_ROW_LENGTH),le=U.getParameter(U.UNPACK_IMAGE_HEIGHT),mn=U.getParameter(U.UNPACK_SKIP_PIXELS),Xi=U.getParameter(U.UNPACK_SKIP_ROWS),rn=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,ye.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ye.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ot),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Jt);let ks=R.isDataArrayTexture||R.isData3DTexture,_e=V.isDataArrayTexture||V.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){let Sn=Pt.get(R),Hs=Pt.get(V),un=Pt.get(Sn.__renderTarget),ni=Pt.get(Hs.__renderTarget);vt.bindFramebuffer(U.READ_FRAMEBUFFER,un.__webglFramebuffer),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,ni.__webglFramebuffer);for(let ii=0;ii<Ft;ii++)ks&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(R).__webglTexture,G,Jt+ii),R.isDepthTexture?(_e&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.get(V).__webglTexture,G,ve+ii),U.blitFramebuffer(Ot,Zt,gt,At,kt,oe,gt,At,U.DEPTH_BUFFER_BIT,U.NEAREST)):_e?U.copyTexSubImage3D(Ht,G,kt,oe,ve+ii,Ot,Zt,gt,At):U.copyTexSubImage2D(Ht,G,kt,oe,ve+ii,Ot,Zt,gt,At);vt.bindFramebuffer(U.READ_FRAMEBUFFER,null),vt.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _e?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(Ht,G,kt,oe,ve,gt,At,Ft,en,ce,ye.data):V.isCompressedArrayTexture?U.compressedTexSubImage3D(Ht,G,kt,oe,ve,gt,At,Ft,en,ye.data):U.texSubImage3D(Ht,G,kt,oe,ve,gt,At,Ft,en,ce,ye):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,kt,oe,gt,At,en,ce,ye.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,kt,oe,ye.width,ye.height,en,ye.data):U.texSubImage2D(U.TEXTURE_2D,G,kt,oe,gt,At,en,ce,ye);U.pixelStorei(U.UNPACK_ROW_LENGTH,Fn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,le),U.pixelStorei(U.UNPACK_SKIP_PIXELS,mn),U.pixelStorei(U.UNPACK_SKIP_ROWS,Xi),U.pixelStorei(U.UNPACK_SKIP_IMAGES,rn),G===0&&V.generateMipmaps&&U.generateMipmap(Ht),vt.unbindTexture()},this.copyTextureToTexture3D=function(R,V,Z=null,J=null,G=0){return R.isTexture!==!0&&(js("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,R=arguments[2],V=arguments[3],G=arguments[4]||0),js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,V,Z,J,G)},this.initRenderTarget=function(R){Pt.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),vt.unbindTexture()},this.resetState=function(){E=0,S=0,C=null,vt.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var yo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fi=class extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new sn,this.environmentIntensity=1,this.environmentRotation=new sn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},_o=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lc,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$e=new L,cr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyMatrix4(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.applyNormalMatrix(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$e.fromBufferAttribute(this,e),$e.transformDirection(t),this.setXYZ(e,$e.x,$e.y,$e.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=yn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=fe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=fe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=yn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=yn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=yn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=yn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=fe(e,this.array),n=fe(n,this.array),i=fe(i,this.array),s=fe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ae(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},In=class extends Jn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},os,qs=new L,as=new L,cs=new L,ls=new Q,Ys=new Q,Uu=new ee,qr=new L,$s=new L,Yr=new L,Qh=new Q,Ha=new Q,tu=new Q,Kn=class extends Se{constructor(t=new In){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new ne;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new _o(e,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new cr(n,3,0,!1)),os.setAttribute("uv",new cr(n,2,3,!1))}this.geometry=os,this.material=t,this.center=new Q(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),Uu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-cs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;$r(qr.set(-.5,-.5,0),cs,o,as,i,s),$r($s.set(.5,-.5,0),cs,o,as,i,s),$r(Yr.set(.5,.5,0),cs,o,as,i,s),Qh.set(0,0),Ha.set(1,0),tu.set(1,1);let a=t.ray.intersectTriangle(qr,$s,Yr,!1,qs);if(a===null&&($r($s.set(-.5,.5,0),cs,o,as,i,s),Ha.set(0,1),a=t.ray.intersectTriangle(qr,Yr,$s,!1,qs),a===null))return;let c=t.ray.origin.distanceTo(qs);c<t.near||c>t.far||e.push({distance:c,point:qs.clone(),uv:ui.getInterpolation(qs,qr,$s,Yr,Qh,Ha,tu,new Q),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function $r(r,t,e,n,i,s){ls.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ys.x=s*ls.x-i*ls.y,Ys.y=i*ls.x+s*ls.y):Ys.copy(ls),r.copy(t),r.x+=Ys.x,r.y+=Ys.y,r.applyMatrix4(Uu)}var Zc=class extends nn{constructor(t=null,e=1,n=1,i,s,o,a,c,l=cn,h=cn,u,d){super(null,o,a,c,l,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var lr=class extends ae{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},hs=new ee,eu=new ee,Zr=[],nu=new Zn,mx=new ee,Zs=new it,Js=new gi,Te=class extends it{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new lr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,mx)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),nu.copy(t.boundingBox).applyMatrix4(hs),this.boundingBox.union(nu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,hs),Js.copy(t.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(Js)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Js.copy(this.boundingSphere),Js.applyMatrix4(n),t.ray.intersectsSphere(Js)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,hs),eu.multiplyMatrices(n,hs),Zs.matrixWorld=eu,Zs.raycast(t,Zr);for(let o=0,a=Zr.length;o<a;o++){let c=Zr[o];c.instanceId=s,c.object=this,e.push(c)}Zr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new lr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zc(new Float32Array(i*this.count),i,this.count,Tl,Rn));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var hr=class extends Jn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},iu=new ee,Jc=new fo,Jr=new gi,Kr=new L,Oi=class extends Se{constructor(t=new ne,e=new hr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),Jr.radius+=s,t.ray.intersectsSphere(Jr)===!1)return;iu.copy(i).invert(),Jc.copy(t.ray).applyMatrix4(iu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){let d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,p=f;g<p;g++){let m=l.getX(g);Kr.fromBufferAttribute(u,m),su(Kr,m,c,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,p=f;g<p;g++)Kr.fromBufferAttribute(u,g),su(Kr,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function su(r,t,e,n,i,s,o){let a=Jc.distanceSqToPoint(r);if(a<e){let c=new L;Jc.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Be=class extends nn{constructor(t,e,n,i,s,o,a,c,l){super(t,e,n,i,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},dn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),c=e||(o.isVector2?new Q:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],s=[],o=[],a=new L,c=new ee;for(let f=0;f<=t;f++){let g=f/t;i[f]=this.getTangentAt(g,new L)}s[0]=new L,o[0]=new L;let l=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ce(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(Ce(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let g=1;g<=t;g++)s[g].applyMatrix4(c.makeRotationAxis(i[g],f*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ur=class extends dn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new Q){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Kc=class extends ur{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ll(){let r=0,t=0,e=0,n=0;function i(s,o,a,c){r=s,t=a,e=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){i(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,u){let d=(o-s)/l-(a-s)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var jr=new L,Va=new Ll,Ga=new Ll,Wa=new Ll,fr=class extends dn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=i[(a-1)%s]:(jr.subVectors(i[0],i[1]).add(i[0]),l=jr);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(jr.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=jr),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);p<1e-4&&(p=1),g<1e-4&&(g=p),m<1e-4&&(m=p),Va.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,p,m),Ga.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,p,m),Wa.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,p,m)}else this.curveType==="catmullrom"&&(Va.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Ga.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Wa.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Va.calc(c),Ga.calc(c),Wa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function ru(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,c=r*a;return(2*e-2*n+s+o)*c+(-3*e+3*n-2*s-o)*a+s*r+e}function gx(r,t){let e=1-r;return e*e*t}function xx(r,t){return 2*(1-r)*r*t}function vx(r,t){return r*r*t}function ir(r,t,e,n){return gx(r,t)+xx(r,e)+vx(r,n)}function yx(r,t){let e=1-r;return e*e*e*t}function _x(r,t){let e=1-r;return 3*e*e*r*t}function Mx(r,t){return 3*(1-r)*r*r*t}function bx(r,t){return r*r*r*t}function sr(r,t,e,n,i){return yx(r,t)+_x(r,e)+Mx(r,n)+bx(r,i)}var Mo=class extends dn{constructor(t=new Q,e=new Q,n=new Q,i=new Q){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Q){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sr(t,i.x,s.x,o.x,a.x),sr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},jc=class extends dn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(sr(t,i.x,s.x,o.x,a.x),sr(t,i.y,s.y,o.y,a.y),sr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},bo=class extends dn{constructor(t=new Q,e=new Q){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Q){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Q){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qc=class extends dn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},wo=class extends dn{constructor(t=new Q,e=new Q,n=new Q){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Q){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ir(t,i.x,s.x,o.x),ir(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rs=class extends dn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(ir(t,i.x,s.x,o.x),ir(t,i.y,s.y,o.y),ir(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Eo=class extends dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Q){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,c=i[o===0?o:o-1],l=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(ru(a,c.x,l.x,h.x,u.x),ru(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Q().fromArray(i))}return this}},So=Object.freeze({__proto__:null,ArcCurve:Kc,CatmullRomCurve3:fr,CubicBezierCurve:Mo,CubicBezierCurve3:jc,EllipseCurve:ur,LineCurve:bo,LineCurve3:Qc,QuadraticBezierCurve:wo,QuadraticBezierCurve3:Rs,SplineCurve:Eo}),tl=class extends dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new So[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new So[i.type]().fromJSON(i))}return this}},To=class extends tl{constructor(t){super(),this.type="Path",this.currentPoint=new Q,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new bo(this.currentPoint.clone(),new Q(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new wo(this.currentPoint.clone(),new Q(t,e),new Q(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Mo(this.currentPoint.clone(),new Q(t,e),new Q(n,i),new Q(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Eo(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,i,s,o,a,c),this}absellipse(t,e,n,i,s,o,a,c){let l=new ur(t,e,n,i,s,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Ao=class r extends ne{constructor(t=[new Q(0,-.5),new Q(.5,0),new Q(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ce(i,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,d=new Q,f=new L,g=new L,p=new L,m=0,x=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,p.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(p.x,p.y,p.z);break;default:m=t[M+1].x-t[M].x,x=t[M+1].y-t[M].y,f.x=x*1,f.y=-m,f.z=x*0,g.copy(f),f.x+=p.x,f.y+=p.y,f.z+=p.z,f.normalize(),c.push(f.x,f.y,f.z),p.copy(g)}for(let M=0;M<=e;M++){let y=n+M*h*i,v=Math.sin(y),A=Math.cos(y);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*A,o.push(u.x,u.y,u.z),d.x=M/e,d.y=E/(t.length-1),a.push(d.x,d.y);let S=c[3*E+0]*v,C=c[3*E+1],_=c[3*E+0]*A;l.push(S,C,_)}}for(let M=0;M<e;M++)for(let y=0;y<t.length-1;y++){let v=y+M*t.length,A=v,E=v+t.length,S=v+t.length+1,C=v+1;s.push(A,E,C),s.push(S,C,E)}this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("uv",new Vt(a,2)),this.setAttribute("normal",new Vt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var xi=class r extends ne{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],c=[],l=new L,h=new Q;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Vt(o,3)),this.setAttribute("normal",new Vt(a,3)),this.setAttribute("uv",new Vt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Wt=class r extends ne{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],g=0,p=[],m=n/2,x=0;M(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function M(){let v=new L,A=new L,E=0,S=(e-t)/n;for(let C=0;C<=s;C++){let _=[],w=C/s,b=w*(e-t)+t;for(let z=0;z<=i;z++){let D=z/i,N=D*c+a,F=Math.sin(N),B=Math.cos(N);A.x=b*F,A.y=-w*n+m,A.z=b*B,u.push(A.x,A.y,A.z),v.set(F,S,B).normalize(),d.push(v.x,v.y,v.z),f.push(D,1-w),_.push(g++)}p.push(_)}for(let C=0;C<i;C++)for(let _=0;_<s;_++){let w=p[_][C],b=p[_+1][C],z=p[_+1][C+1],D=p[_][C+1];(t>0||_!==0)&&(h.push(w,b,D),E+=3),(e>0||_!==s-1)&&(h.push(b,z,D),E+=3)}l.addGroup(x,E,0),x+=E}function y(v){let A=g,E=new Q,S=new L,C=0,_=v===!0?t:e,w=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*w,0),d.push(0,w,0),f.push(.5,.5),g++;let b=g;for(let z=0;z<=i;z++){let N=z/i*c+a,F=Math.cos(N),B=Math.sin(N);S.x=_*B,S.y=m*w,S.z=_*F,u.push(S.x,S.y,S.z),d.push(0,w,0),E.x=F*.5+.5,E.y=B*.5*w+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){let D=A+z,N=b+z;v===!0?h.push(N,N+1,D):h.push(N+1,N,D),C+=3}l.addGroup(x,C,v===!0?1:2),x+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},vi=class r extends Wt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Mn=class extends To{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new To().fromJSON(i))}return this}},wx={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Nu(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,u,d,f;if(n&&(s=Rx(r,t,s,e)),r.length>80*e){a=l=r[0],c=h=r[1];for(let g=e;g<i;g+=e)u=r[g],d=r[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return dr(s,o,e,a,c,f,0),o}};function Nu(r,t,e,n,i){let s,o;if(i===Ox(r,t,e,n)>0)for(s=t;s<e;s+=n)o=ou(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=ou(s,r[s],r[s+1],o);return o&&Oo(o,o.next)&&(mr(o),o=o.next),o}function ki(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Oo(e,e.next)||we(e.prev,e,e.next)===0)){if(mr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function dr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Dx(r,n,i,s);let a=r,c,l;for(;r.prev!==r.next;){if(c=r.prev,l=r.next,s?Sx(r,n,i,s):Ex(r)){t.push(c.i/e|0),t.push(r.i/e|0),t.push(l.i/e|0),mr(r),r=l.next,a=l.next;continue}if(r=l,r===a){o?o===1?(r=Tx(ki(r),t,e),dr(r,t,e,n,i,s,2)):o===2&&Ax(r,t,e,n,i,s):dr(ki(r),t,e,n,i,s,1);break}}}function Ex(r){let t=r.prev,e=r,n=r.next;if(we(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<c?a<l?a:l:c<l?c:l,d=i>s?i>o?i:o:s>o?s:o,f=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&fs(i,a,s,c,o,l,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Sx(r,t,e,n){let i=r.prev,s=r,o=r.next;if(we(i,s,o)>=0)return!1;let a=i.x,c=s.x,l=o.x,h=i.y,u=s.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,p=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,x=el(f,g,t,e,n),M=el(p,m,t,e,n),y=r.prevZ,v=r.nextZ;for(;y&&y.z>=x&&v&&v.z<=M;){if(y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&fs(a,h,c,u,l,d,y.x,y.y)&&we(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=p&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&fs(a,h,c,u,l,d,v.x,v.y)&&we(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=x;){if(y.x>=f&&y.x<=p&&y.y>=g&&y.y<=m&&y!==i&&y!==o&&fs(a,h,c,u,l,d,y.x,y.y)&&we(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=M;){if(v.x>=f&&v.x<=p&&v.y>=g&&v.y<=m&&v!==i&&v!==o&&fs(a,h,c,u,l,d,v.x,v.y)&&we(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Tx(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Oo(i,s)&&Bu(i,n,n.next,s)&&pr(i,s)&&pr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),mr(n),mr(n.next),n=r=s),n=n.next}while(n!==r);return ki(n)}function Ax(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Nx(o,a)){let c=Fu(o,a);o=ki(o,o.next),c=ki(c,c.next),dr(o,t,e,n,i,s,0),dr(c,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function Rx(r,t,e,n){let i=[],s,o,a,c,l;for(s=0,o=t.length;s<o;s++)a=t[s]*n,c=s<o-1?t[s+1]*n:r.length,l=Nu(r,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Ux(l));for(i.sort(Cx),s=0;s<i.length;s++)e=Px(i[s],e);return e}function Cx(r,t){return r.x-t.x}function Px(r,t){let e=Ix(r,t);if(!e)return t;let n=Fu(e,r);return ki(n,n.next),ki(e,e.next)}function Ix(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=s&&d>n&&(n=d,i=e.x<e.next.x?e:e.next,d===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,c=i.x,l=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=c&&s!==e.x&&fs(o<l?s:n,o,c,l,o<l?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),pr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Lx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Lx(r,t){return we(r.prev,r,t.prev)<0&&we(t.next,r,r.next)<0}function Dx(r,t,e,n){let i=r;do i.z===0&&(i.z=el(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,zx(i)}function zx(r){let t,e,n,i,s,o,a,c,l=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,c--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,l*=2}while(o>1);return r}function el(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Ux(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function fs(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Nx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Bx(r,t)&&(pr(r,t)&&pr(t,r)&&Fx(r,t)&&(we(r.prev,r,t.prev)||we(r,t.prev,t))||Oo(r,t)&&we(r.prev,r,r.next)>0&&we(t.prev,t,t.next)>0)}function we(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Oo(r,t){return r.x===t.x&&r.y===t.y}function Bu(r,t,e,n){let i=to(we(r,t,e)),s=to(we(r,t,n)),o=to(we(e,n,r)),a=to(we(e,n,t));return!!(i!==s&&o!==a||i===0&&Qr(r,e,t)||s===0&&Qr(r,n,t)||o===0&&Qr(e,r,n)||a===0&&Qr(e,t,n))}function Qr(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function to(r){return r>0?1:r<0?-1:0}function Bx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Bu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function pr(r,t){return we(r.prev,r,r.next)<0?we(r,t,r.next)>=0&&we(r,r.prev,t)>=0:we(r,t,r.prev)<0||we(r,r.next,t)<0}function Fx(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Fu(r,t){let e=new nl(r.i,r.x,r.y),n=new nl(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function ou(r,t,e,n){let i=new nl(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function mr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function nl(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ox(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var di=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];au(t),cu(n,t);let o=t.length;e.forEach(au);for(let c=0;c<e.length;c++)i.push(o),o+=e[c].length,cu(n,e[c]);let a=wx.triangulate(n,i);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function au(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function cu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Ln=class r extends ne{constructor(t=new Mn([new Q(.5,.5),new Q(-.5,.5),new Q(-.5,-.5),new Q(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Vt(i,3)),this.setAttribute("uv",new Vt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,x=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:kx,y,v=!1,A,E,S,C;x&&(y=x.getSpacedPoints(h),v=!0,d=!1,A=x.computeFrenetFrames(h,!1),E=new L,S=new L,C=new L),d||(m=0,f=0,g=0,p=0);let _=a.extractPoints(l),w=_.shape,b=_.holes;if(!di.isClockWise(w)){w=w.reverse();for(let at=0,ut=b.length;at<ut;at++){let U=b[at];di.isClockWise(U)&&(b[at]=U.reverse())}}let D=di.triangulateShape(w,b),N=w;for(let at=0,ut=b.length;at<ut;at++){let U=b[at];w=w.concat(U)}function F(at,ut,U){return ut||console.error("THREE.ExtrudeGeometry: vec does not exist"),at.clone().addScaledVector(ut,U)}let B=w.length,X=D.length;function H(at,ut,U){let zt,dt,Ct,vt=at.x-ut.x,Xt=at.y-ut.y,Pt=U.x-at.x,I=U.y-at.y,T=vt*vt+Xt*Xt,q=vt*I-Xt*Pt;if(Math.abs(q)>Number.EPSILON){let nt=Math.sqrt(T),ht=Math.sqrt(Pt*Pt+I*I),rt=ut.x-Xt/nt,Nt=ut.y+vt/nt,_t=U.x-I/ht,St=U.y+Pt/ht,Qt=((_t-rt)*I-(St-Nt)*Pt)/(vt*I-Xt*Pt);zt=rt+vt*Qt-at.x,dt=Nt+Xt*Qt-at.y;let P=zt*zt+dt*dt;if(P<=2)return new Q(zt,dt);Ct=Math.sqrt(P/2)}else{let nt=!1;vt>Number.EPSILON?Pt>Number.EPSILON&&(nt=!0):vt<-Number.EPSILON?Pt<-Number.EPSILON&&(nt=!0):Math.sign(Xt)===Math.sign(I)&&(nt=!0),nt?(zt=-Xt,dt=vt,Ct=Math.sqrt(T)):(zt=vt,dt=Xt,Ct=Math.sqrt(T/2))}return new Q(zt/Ct,dt/Ct)}let W=[];for(let at=0,ut=N.length,U=ut-1,zt=at+1;at<ut;at++,U++,zt++)U===ut&&(U=0),zt===ut&&(zt=0),W[at]=H(N[at],N[U],N[zt]);let K=[],lt,ft=W.concat();for(let at=0,ut=b.length;at<ut;at++){let U=b[at];lt=[];for(let zt=0,dt=U.length,Ct=dt-1,vt=zt+1;zt<dt;zt++,Ct++,vt++)Ct===dt&&(Ct=0),vt===dt&&(vt=0),lt[zt]=H(U[zt],U[Ct],U[vt]);K.push(lt),ft=ft.concat(lt)}for(let at=0;at<m;at++){let ut=at/m,U=f*Math.cos(ut*Math.PI/2),zt=g*Math.sin(ut*Math.PI/2)+p;for(let dt=0,Ct=N.length;dt<Ct;dt++){let vt=F(N[dt],W[dt],zt);st(vt.x,vt.y,-U)}for(let dt=0,Ct=b.length;dt<Ct;dt++){let vt=b[dt];lt=K[dt];for(let Xt=0,Pt=vt.length;Xt<Pt;Xt++){let I=F(vt[Xt],lt[Xt],zt);st(I.x,I.y,-U)}}}let et=g+p;for(let at=0;at<B;at++){let ut=d?F(w[at],ft[at],et):w[at];v?(S.copy(A.normals[0]).multiplyScalar(ut.x),E.copy(A.binormals[0]).multiplyScalar(ut.y),C.copy(y[0]).add(S).add(E),st(C.x,C.y,C.z)):st(ut.x,ut.y,0)}for(let at=1;at<=h;at++)for(let ut=0;ut<B;ut++){let U=d?F(w[ut],ft[ut],et):w[ut];v?(S.copy(A.normals[at]).multiplyScalar(U.x),E.copy(A.binormals[at]).multiplyScalar(U.y),C.copy(y[at]).add(S).add(E),st(C.x,C.y,C.z)):st(U.x,U.y,u/h*at)}for(let at=m-1;at>=0;at--){let ut=at/m,U=f*Math.cos(ut*Math.PI/2),zt=g*Math.sin(ut*Math.PI/2)+p;for(let dt=0,Ct=N.length;dt<Ct;dt++){let vt=F(N[dt],W[dt],zt);st(vt.x,vt.y,u+U)}for(let dt=0,Ct=b.length;dt<Ct;dt++){let vt=b[dt];lt=K[dt];for(let Xt=0,Pt=vt.length;Xt<Pt;Xt++){let I=F(vt[Xt],lt[Xt],zt);v?st(I.x,I.y+y[h-1].y,y[h-1].x+U):st(I.x,I.y,u+U)}}}O(),$();function O(){let at=i.length/3;if(d){let ut=0,U=B*ut;for(let zt=0;zt<X;zt++){let dt=D[zt];pt(dt[2]+U,dt[1]+U,dt[0]+U)}ut=h+m*2,U=B*ut;for(let zt=0;zt<X;zt++){let dt=D[zt];pt(dt[0]+U,dt[1]+U,dt[2]+U)}}else{for(let ut=0;ut<X;ut++){let U=D[ut];pt(U[2],U[1],U[0])}for(let ut=0;ut<X;ut++){let U=D[ut];pt(U[0]+B*h,U[1]+B*h,U[2]+B*h)}}n.addGroup(at,i.length/3-at,0)}function $(){let at=i.length/3,ut=0;ot(N,ut),ut+=N.length;for(let U=0,zt=b.length;U<zt;U++){let dt=b[U];ot(dt,ut),ut+=dt.length}n.addGroup(at,i.length/3-at,1)}function ot(at,ut){let U=at.length;for(;--U>=0;){let zt=U,dt=U-1;dt<0&&(dt=at.length-1);for(let Ct=0,vt=h+m*2;Ct<vt;Ct++){let Xt=B*Ct,Pt=B*(Ct+1),I=ut+zt+Xt,T=ut+dt+Xt,q=ut+dt+Pt,nt=ut+zt+Pt;Et(I,T,q,nt)}}}function st(at,ut,U){c.push(at),c.push(ut),c.push(U)}function pt(at,ut,U){It(at),It(ut),It(U);let zt=i.length/3,dt=M.generateTopUV(n,i,zt-3,zt-2,zt-1);Yt(dt[0]),Yt(dt[1]),Yt(dt[2])}function Et(at,ut,U,zt){It(at),It(ut),It(zt),It(ut),It(U),It(zt);let dt=i.length/3,Ct=M.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);Yt(Ct[0]),Yt(Ct[1]),Yt(Ct[3]),Yt(Ct[1]),Yt(Ct[2]),Yt(Ct[3])}function It(at){i.push(c[at*3+0]),i.push(c[at*3+1]),i.push(c[at*3+2])}function Yt(at){s.push(at.x),s.push(at.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Hx(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new So[i.type]().fromJSON(i)),new r(n,t.options)}},kx={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[i*3],h=t[i*3+1];return[new Q(s,o),new Q(a,c),new Q(l,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[i*3],f=t[i*3+1],g=t[i*3+2],p=t[s*3],m=t[s*3+1],x=t[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Q(o,1-c),new Q(l,1-u),new Q(d,1-g),new Q(p,1-x)]:[new Q(a,1-c),new Q(h,1-u),new Q(f,1-g),new Q(m,1-x)]}};function Hx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Cs=class r extends ne{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],c=[],l=[],h=[],u=t,d=(e-t)/i,f=new L,g=new Q;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){let x=s+m/n*o;f.x=u*Math.cos(x),f.y=u*Math.sin(x),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let p=0;p<i;p++){let m=p*(n+1);for(let x=0;x<n;x++){let M=x+m,y=M,v=M+n+1,A=M+n+2,E=M+1;a.push(y,v,E),a.push(v,A,E)}}this.setIndex(a),this.setAttribute("position",new Vt(c,3)),this.setAttribute("normal",new Vt(l,3)),this.setAttribute("uv",new Vt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Ae=class r extends ne{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new L,d=new L,f=[],g=[],p=[],m=[];for(let x=0;x<=n;x++){let M=[],y=x/n,v=0;x===0&&o===0?v=.5/e:x===n&&c===Math.PI&&(v=-.5/e);for(let A=0;A<=e;A++){let E=A/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),p.push(d.x,d.y,d.z),m.push(E+v,1-y),M.push(l++)}h.push(M)}for(let x=0;x<n;x++)for(let M=0;M<e;M++){let y=h[x][M+1],v=h[x][M],A=h[x+1][M],E=h[x+1][M+1];(x!==0||o>0)&&f.push(y,v,E),(x!==n-1||c<Math.PI)&&f.push(v,A,E)}this.setIndex(f),this.setAttribute("position",new Vt(g,3)),this.setAttribute("normal",new Vt(p,3)),this.setAttribute("uv",new Vt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var gr=class r extends ne{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){let p=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(p),u.y=(t+e*Math.cos(m))*Math.sin(p),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(p),h.y=t*Math.sin(p),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){let p=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,x=(i+1)*(f-1)+g,M=(i+1)*f+g;o.push(p,m,M),o.push(m,x,M)}this.setIndex(o),this.setAttribute("position",new Vt(a,3)),this.setAttribute("normal",new Vt(c,3)),this.setAttribute("uv",new Vt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ro=class r extends ne{constructor(t=new Rs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,c=new L,l=new Q,h=new L,u=[],d=[],f=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new Vt(u,3)),this.setAttribute("normal",new Vt(d,3)),this.setAttribute("uv",new Vt(f,2));function p(){for(let y=0;y<e;y++)m(y);m(s===!1?e:0),M(),x()}function m(y){h=t.getPointAt(y/e,h);let v=o.normals[y],A=o.binormals[y];for(let E=0;E<=i;E++){let S=E/i*Math.PI*2,C=Math.sin(S),_=-Math.cos(S);c.x=_*v.x+C*A.x,c.y=_*v.y+C*A.y,c.z=_*v.z+C*A.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function x(){for(let y=1;y<=e;y++)for(let v=1;v<=i;v++){let A=(i+1)*(y-1)+(v-1),E=(i+1)*y+(v-1),S=(i+1)*y+v,C=(i+1)*(y-1)+v;g.push(A,E,C),g.push(E,S,C)}}function M(){for(let y=0;y<=e;y++)for(let v=0;v<=i;v++)l.x=y/e,l.y=v/i,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new So[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Co=class extends de{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},Bt=class extends Jn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Su,this.normalScale=new Q(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new sn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ps=class extends Bt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Q(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ce(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function eo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Vx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Is=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},il=class extends Is{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sh:s=t,a=2*e-n;break;case rh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case sh:o=t,c=2*n-e;break;case rh:o=1,c=n+i[1]-i[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),p=g*g,m=p*g,x=-d*m+2*d*p-d*g,M=(1+d)*m+(-1.5-2*d)*p+(-.5+d)*g+1,y=(-1-f)*m+(1.5+f)*p+.5*g,v=f*m-f*p;for(let A=0;A!==a;++A)s[A]=x*o[h+A]+M*o[l+A]+y*o[c+A]+v*o[u+A];return s}},sl=class extends Is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[l+d]*u+o[c+d]*h;return s}},rl=class extends Is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},bn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=eo(e,this.TimeBufferType),this.values=eo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:eo(t.times,Array),values:eo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new rl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new sl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new il(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ao:e=this.InterpolantFactoryMethodDiscrete;break;case Ic:e=this.InterpolantFactoryMethodLinear;break;case pa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return Ic;case this.InterpolantFactoryMethodSmooth:return pa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(i!==void 0&&Vx(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===pa,s=t.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(i)c=!0;else{let u=a*n,d=u-n,f=u+n;for(let g=0;g!==n;++g){let p=e[u+g];if(p!==e[d+g]||p!==e[f+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};bn.prototype.TimeBufferType=Float32Array;bn.prototype.ValueBufferType=Float32Array;bn.prototype.DefaultInterpolation=Ic;var Hi=class extends bn{constructor(t,e,n){super(t,e,n)}};Hi.prototype.ValueTypeName="bool";Hi.prototype.ValueBufferType=Array;Hi.prototype.DefaultInterpolation=ao;Hi.prototype.InterpolantFactoryMethodLinear=void 0;Hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ol=class extends bn{};ol.prototype.ValueTypeName="color";var al=class extends bn{};al.prototype.ValueTypeName="number";var cl=class extends Is{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(i-e),l=t*a;for(let h=l+a;l!==h;l+=4)Ne.slerpFlat(s,0,o,l-a,o,l,c);return s}},Po=class extends bn{InterpolantFactoryMethodLinear(t){return new cl(this.times,this.values,this.getValueSize(),t)}};Po.prototype.ValueTypeName="quaternion";Po.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends bn{constructor(t,e,n){super(t,e,n)}};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ao;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ll=class extends bn{};ll.prototype.ValueTypeName="vector";var hl=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Gx=new hl,ul=class{constructor(t){this.manager=t!==void 0?t:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ul.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ls=class extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Io=class extends Ls{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Xa=new ee,lu=new L,hu=new L,xr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Q(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Q(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(lu),hu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hu),e.updateMatrixWorld(),Xa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},fl=class extends xr{constructor(){super(new Pe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=bs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Lo=class extends Ls{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new fl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},uu=new ee,Ks=new L,qa=new L,dl=class extends xr{constructor(){super(new Pe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Q(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ks.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ks),qa.copy(n.position),qa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(qa),n.updateMatrixWorld(),i.makeTranslation(-Ks.x,-Ks.y,-Ks.z),uu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu)}},Do=class extends Ls{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new dl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},pl=class extends xr{constructor(){super(new Ts(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},zo=class extends Ls{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new pl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Ds=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=fu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function fu(){return performance.now()}var Dl="\\[\\]\\.:\\/",Wx=new RegExp("["+Dl+"]","g"),zl="[^"+Dl+"]",Xx="[^"+Dl.replace("\\.","")+"]",qx=/((?:WC+[\/:])*)/.source.replace("WC",zl),Yx=/(WCOD+)?/.source.replace("WCOD",Xx),$x=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zl),Zx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zl),Jx=new RegExp("^"+qx+Yx+$x+Zx+"$"),Kx=["material","materials","bones","map"],ml=class{constructor(t,e,n){let i=n||be.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},be=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Wx,"")}static parseTrackName(t){let e=Jx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Kx.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[i];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};be.Composite=ml;be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};be.prototype.GetterByBindingType=[be.prototype._getValue_direct,be.prototype._getValue_array,be.prototype._getValue_arrayElement,be.prototype._getValue_toArray];be.prototype.SetterByBindingTypeAndVersioning=[[be.prototype._setValue_direct,be.prototype._setValue_direct_setNeedsUpdate,be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[be.prototype._setValue_array,be.prototype._setValue_array_setNeedsUpdate,be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[be.prototype._setValue_arrayElement,be.prototype._setValue_arrayElement_setNeedsUpdate,be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[be.prototype._setValue_fromArray,be.prototype._setValue_fromArray_setNeedsUpdate,be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Mv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gl);var Nl=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function Oe(r,t){return r*1e5+t}var ko=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let c=0;c<a.length;c++){let l=a[c];e.set(l,(e.get(l)||0)+(c===0||c===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,c,l,h,u,d,f]=o,g=0;for(let p=1;p<d.length;p++)if(e.get(d[p])>1||p===d.length-1){let m=d.slice(g,p+1);m.length>=2&&this._addEdge(m,a,c,l,h,u,i),g=p}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let c=t.length,l=new Float32Array(c*2),h=new Float32Array(c),u=0;for(let f=0;f<c;f++)l[f*2]=this.P[t[f]*2],l[f*2+1]=this.P[t[f]*2+1],f>0&&(u+=Math.hypot(l[f*2]-l[f*2-2],l[f*2+1]-l[f*2-1])),h[f]=u;if(u<.5)return;let d={id:this.edges.length,ids:t,pts:l,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[c-1]),signals:[]};this.edges.push(d)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let c=t.cum,l=t.pts,h=0,u=c.length-1;for(;u-h>1;){let v=h+u>>1;c[v]<=a?h=v:u=v}let d=c[u]-c[h]||1e-6,f=(a-c[h])/d,g=l[h*2],p=l[h*2+1],m=l[u*2],x=l[u*2+1],M=(m-g)/d,y=(x-p)/d;return e&&(M=-M,y=-y),s.x=g+(m-g)*f-y*i,s.z=p+(x-p)*f+M*i,s.dx=M,s.dz=y,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,c=Math.min(i[s*2+1],i[s*2+3])-n.w/2,l=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(c/t);u<=Math.floor(l/t);u++){let d=Oe(h,u),f=e.get(d);f||e.set(d,f=[]),f.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),c=Math.floor(e/s),l=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let d=c-o;d<=c+o;d++){let f=this.roadGrid.get(Oe(u,d));if(f)for(let g=0;g<f.length;g+=2){let p=this.edges[f[g]],m=f[g+1];if(i&&!i(p))continue;let x=p.pts,M=x[m*2],y=x[m*2+1],v=x[m*2+2],A=x[m*2+3],E=v-M,S=A-y,C=E*E+S*S||1e-6,_=((t-M)*E+(e-y)*S)/C;_=_<0?0:_>1?1:_;let w=M+E*_,b=y+S*_,z=(t-w)**2+(e-b)**2;if(z<h){h=z;let D=Math.sqrt(C);l={e:p,i:m,t:_,x:w,z:b,dist:Math.sqrt(z),s:p.cum[m]+_*D,dx:E/D,dz:S/D}}}}return l&&(l.lat=(t-l.x)*-l.dz+(e-l.z)*l.dx),l}_indexChunks(t){let n=this.chunks=new Map,i=(a,c)=>{let l=Math.floor(a/400),h=Math.floor(c/400),u=Oe(l,h),d=n.get(u);return d||n.set(u,d={key:u,cx:l,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[],signs:[]}),d};this.globalAreas=[],this.buildings=t.buildings.map((a,c)=>{let l=a[3],h=l.length/2,u=new Float32Array(l.length),d=0,f=0,g=1e9,p=-1e9,m=1e9,x=-1e9,M=0,y=0;for(let A=0;A<h;A++)M+=l[A*2],y+=l[A*2+1],u[A*2]=M*.1,u[A*2+1]=y*.1;for(let A=0;A<h;A++){let E=u[A*2],S=u[A*2+1];d+=E,f+=S,E<g&&(g=E),E>p&&(p=E),S<m&&(m=S),S>x&&(x=S)}let v={i:c,kind:a[0],h:a[1],minH:a[2],pts:u,cx:d/h,cz:f/h,x0:g,x1:p,z0:m,z1:x,name:a[4]||null,colour:a[5]||null,roofColour:a[6]||null,roofShape:a[7]||null};return i(v.cx,v.cz).buildings.push(v),v});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let c=Math.floor(a.x0/s);c<=Math.floor(a.x1/s);c++)for(let l=Math.floor(a.z0/s);l<=Math.floor(a.z1/s);l++){let h=Oe(c,l),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let c=Math.floor(a.pts.length/4)*2;i(a.pts[c],a.pts[c+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let c=a[1],l=new Float32Array(c.length),h=0,u=0,d=1e9,f=-1e9,g=1e9,p=-1e9;for(let x=0;x<c.length;x++)l[x]=c[x]*.1;for(let x=0;x<c.length/2;x++){let M=l[x*2],y=l[x*2+1];h+=M,u+=y,M<d&&(d=M),M>f&&(f=M),y<g&&(g=y),y>p&&(p=y)}let m={type:a[0],pts:l,x0:d,x1:f,z0:g,z1:p};f-d>1500||p-g>1500?this.globalAreas.push(m):i(h/(c.length/2),u/(c.length/2)).areas.push(m)}this.areaList=t.areas;for(let a of t.lines){let[c,l,h]=a,u=h.length/2;for(let d=0;d<u-1;d+=23){let f=Math.min(u,d+24),g=new Float32Array((f-d)*2);for(let p=0;p<g.length;p++)g[p]=h[d*2+p]*.1;i(g[0],g[1]).lines.push({type:c,w:l,pts:g})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);for(let a of t.signs||[])i(a[0]*.1,a[1]*.1).signs.push({x:a[0]*.1,z:a[1]*.1,name:a[2],kind:a[3]});this.busStopList=t.busstops.map(a=>[a[0]*.1,a[1]*.1]),this.osmRoutes=(t.routes||[]).map(a=>({ref:a[0],name:a[1],type:a[2],pts:a[3].map(c=>c*.1),stops:a[4].map(c=>c*.1)})),this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(c=>c*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(c=>c*.1)})),this.stands=t.stands.map(a=>a.map(c=>c*.1)),this.jet=t.jet.map(a=>a.map(c=>c*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get(Oe(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&Ho(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let c of t)e.set(c[0]+","+c[1],c);let n=this.raw,i=new Set;for(let c=0;c<n.pts.length/2;c++)e.has(n.pts[c*2]+","+n.pts[c*2+1])&&i.add(c);let s=[...i].map(c=>({i:c,x:this.P[c*2],z:this.P[c*2+1],c:-1})),o=this.signalClusters=[];for(let c of s){if(c.c>=0)continue;let l={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[c];for(c.c=l.id;h.length;){let u=h.pop();l.members.push(u),l.x+=u.x,l.z+=u.z,l.n++;for(let d of s)d.c<0&&Math.hypot(d.x-u.x,d.z-u.z)<45&&(d.c=l.id,h.push(d))}l.x/=l.n,l.z/=l.n,o.push(l)}let a=new Map;for(let c of s)a.set(c.i,o[c.c]);this.controls=[];for(let c of this.edges)for(let l=0;l<c.ids.length;l++){let h=a.get(c.ids[l]);if(h)for(let u of c.ow?[0]:[0,1]){let d=u?c.len-c.cum[l]:c.cum[l],f=u===0&&l===c.ids.length-1||u===1&&l===0;if(u===0&&l===0||u===1&&l===c.ids.length-1)continue;let p=Math.max(1,d-(f?4+(u?c.na:c.nb).maxW*.5:2.5)),m={};this.sample(c,u,Math.max(0,p-3),0,m);let x=Math.atan2(m.dz,m.dx);h.axis===null&&(h.axis=x);let M=Math.abs(Math.cos(x-h.axis)),y={e:c,dir:u,de:c.id*2+u,stop:p,cluster:h,group:M>.707?0:1,ang:x,x:0,z:0};c.signals.some(v=>v.dir===u&&v.cluster===h)||(c.signals.push(y),h.controls.push(y),this.controls.push(y))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,M=>M.cls<=5),o=this.nearestRoad(n,i,400,M=>M.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let c=new Set([o.e.na.id,o.e.nb.id]),l=new Ul,h=new Map,u=new Map;for(let M of a){let y=Math.hypot(M.x-t,M.z-e);h.set(M.id,y),l.push(y+Math.hypot(M.x-n,M.z-i),M)}let d=null,f=0;for(;l.size&&f++<2e5;){let M=l.pop();if(c.has(M.id)){d=M;break}let y=h.get(M.id);for(let v of M.out){let A=this.edges[v>>1];if(A.cls>5)continue;let E=v&1?A.na:A.nb,S=A.len*(1+A.cls*.08),C=y+S;C<(h.get(E.id)??1e18)&&(h.set(E.id,C),u.set(E.id,{n:M,de:v}),l.push(C+Math.hypot(E.x-n,E.z-i),E))}}if(!d)return null;let g=[o.x,o.z],p=d,m=[];for(;u.has(p.id);){let M=u.get(p.id);m.push(M.de),p=M.n}m.reverse();let x=[t,e,s.x,s.z];for(let M of m){let v=this.edges[M>>1].pts,A=v.length/2;if(M&1)for(let E=A-1;E>=0;E--)x.push(v[E*2],v[E*2+1]);else for(let E=0;E<A;E++)x.push(v[E*2],v[E*2+1])}return x.push(...g),x}};function Ho(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],c=e[s*2+1],l=e[o*2],h=e[o*2+1];c>t!=h>t&&r<(l-a)*(t-c)/(h-c)+a&&(n=!n)}return n}var Ul=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let c=o*2+1,l=c+1,h=o,u=i;if(c<a&&t[c]<u&&(h=c,u=t[c]),l<a&&t[l]<u&&(h=l),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function zn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var wn={uNight:{value:0},uTime:{value:0}};function yi(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function _i(r,t=!0,e=!0){let n=new Be(r);return t&&(n.wrapS=n.wrapT=rr),n.anisotropy=8,e&&(n.colorSpace=pe),n.needsUpdate=!0,n}function Mi(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),c=a.data;for(let l=0;l<e;l+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let d=0;d<o;d++)for(let f=0;f<o;f++){let g=((l+d)*t+h+f)*4;c[g]=Math.max(0,Math.min(255,n[0]+u)),c[g+1]=Math.max(0,Math.min(255,n[1]+u)),c[g+2]=Math.max(0,Math.min(255,n[2]+u)),c[g+3]=255}}r.putImageData(a,0,0)}function Ou(){let r=zn(42),t={};{let e=yi(512),n=e.getContext("2d");Mi(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=_i(e)}{let e=yi(512),n=e.getContext("2d");Mi(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=_i(e)}{let e=yi(512),n=e.getContext("2d");Mi(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=_i(e)}{let e=yi(512),n=e.getContext("2d");Mi(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=_i(e)}{let e=yi(512),n=e.getContext("2d");Mi(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=_i(e)}{let e=yi(512),n=e.getContext("2d");Mi(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=_i(e)}{let e=yi(256),n=e.getContext("2d");Mi(n,256,256,[60,90,100],18,r,2),t.water=_i(e)}{let e=yi(256),n=e.getContext("2d");Mi(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=_i(e,!0,!1)}return t}function ku(r){let t=new Bt({vertexColors:!0,roughness:.88,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=wn.uNight,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aInfo; attribute vec2 aWin; varying vec2 vInfo; varying vec2 vWin;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vInfo = aInfo; vWin = aWin;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
        varying vec2 vInfo; varying vec2 vWin; uniform float uNight;
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
          // roofs: bitumen patches + gravel noise
          diffuseColor.rgb *= 0.86 + 0.14*h21(floor(vWin*0.5)) + 0.05*h21(floor(vWin*4.0));
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
        roughnessFactor = mix(roughnessFactor, glassRough, win);`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
        metalnessFactor = mix(metalnessFactor, 0.85, win*(1.0-lit));`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.62,0.30), vec3(0.75,0.82,1.0), step(0.86,hh)) * (0.22 + 0.5*fract(hh*7.13));`)},t}function jn(r,t,e,n=16777215,i=.95){let s=new Bt({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor *= mix(tA, tB, 0.35) * (0.82 + 0.3*mac);`)},s}function Hu(){let r=new Bt({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var Ke=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,c,l,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,c,l),h)for(let u in h){let d=h[u],f=this.extra[u].data;for(let g=0;g<d.length;g++)f.push(d[g])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new ne;t.setAttribute("position",new Vt(this.p,3)),t.setAttribute("normal",new Vt(this.n,3)),t.setAttribute("color",new Vt(this.c,3));for(let e in this.extra)t.setAttribute(e,new Vt(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new Es(this.i,1):new ws(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function Bl(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let p=Math.hypot(i,s)||1;i/=p,s/=p}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let p=Math.hypot(o,a)||1;o/=p,a/=p}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let c=i+o,l=s+a,h=Math.hypot(c,l);h<1e-4?(c=o,l=a):(c/=h,l/=h);let u=-l,d=c,f=u*-a+d*o,g=Math.min(3,1/Math.max(.33,f));e[n*3]=u,e[n*3+1]=d,e[n*3+2]=g}return e}function Fl(r,t,e,n){let i=[],s=r.length/2,o=l=>{let h=0;for(;h<s-2&&t[h+1]<l;)h++;let u=t[h+1]-t[h]||1e-6,d=Math.max(0,Math.min(1,(l-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*d,r[h*2+1]+(r[h*2+3]-r[h*2+1])*d]},a=o(e);i.push(a[0],a[1]);for(let l=1;l<s-1;l++)t[l]>e&&t[l]<n&&i.push(r[l*2],r[l*2+1]);let c=o(n);return i.push(c[0],c[1]),i}function Vu(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function je(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let c=Bl(t),l=0,h=-1,u=-1;for(let d=0;d<a;d++){d>0&&(l+=Math.hypot(t[d*2]-t[d*2-2],t[d*2+1]-t[d*2-1]));let f=c[d*3],g=c[d*3+1],p=c[d*3+2],m=t[d*2],x=t[d*2+1],M=r.v(m+f*e*p,i,x+g*e*p,0,1,0,s[0],s[1],s[2],o&&{aDash:o(l,0)}),y=r.v(m+f*n*p,i,x+g*n*p,0,1,0,s[0],s[1],s[2],o&&{aDash:o(l,1)});h>=0&&r.quad(h,u,y,M),h=M,u=y}}function Gu(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),c=-1,l=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,d=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);l>=0?r.tri(a,l,d):c=d,l=d}r.tri(a,l,c)}function Un(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function Ol(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,c=new ne,l=0;for(let h=0;h<r.length;++h){let u=r[h],d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0,u=[];for(let d=0;d<r.length;++d){let f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}c.setIndex(u)}for(let h in s){let u=Wu(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let p=0;p<o[h].length;++p)f.push(o[h][p][d]);let g=Wu(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Wu(r){let t,e,n,i=-1,s=0;for(let l=0;l<r.length;++l){let h=r[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new ae(o,e,n),c=0;for(let l=0;l<r.length;++l){let h=r[l];if(h.isInterleavedBufferAttribute){let u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){let p=h.getComponent(d,g);a.setComponent(d+u,g,p)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function Rt(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new bt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ae(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function qe(r){let t=Ol(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function qu(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=zn(77);e.fillStyle="#5a4634",e.fillRect(0,0,512,512);for(let o=0;o<900;o++){let a=50+n()*60;e.fillStyle=`rgba(${a+20},${a},${a*.7},0.6)`,e.fillRect(n()*512,n()*512,2+n()*4,20+n()*60)}e.clearRect(512,0,512,512);let i=(o,a,c,l,h)=>{e.save(),e.translate(o,a),e.rotate(l);let u=90+h*110;e.fillStyle=`rgb(${Math.round(u*.55)},${Math.round(u)},${Math.round(u*.35)})`,e.beginPath(),e.ellipse(0,0,c,c*.45,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,50,20,0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(-c,0),e.lineTo(c,0),e.stroke(),e.restore()};for(let o=0;o<3800;o++){let a=n()*Math.PI*2,c=Math.sqrt(n())*512*.47,l=512+512/2+Math.cos(a)*c,h=512/2+Math.sin(a)*c;i(l,h,7+n()*9,n()*6.28,.25+.75*n()*(1-c/512*.9))}e.strokeStyle="rgba(70,55,40,0.9)",e.lineWidth=3;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(512+512/2,512/2),e.lineTo(512+512/2+(n()-.5)*512*.8,512/2+(n()-.5)*512*.8),e.stroke();let s=new Be(t);return s.colorSpace=pe,s.anisotropy=4,s.generateMipmaps=!0,s}function Vo(r){let t=Ol(r.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t}function Go(r,t,e,n=7,i=0){let s=new Wt(r,t,e,n,3,!0).translate(0,e/2,0),o=s.attributes.position,a=s.attributes.uv;for(let c=0;c<o.count;c++)o.setX(c,o.getX(c)+i*o.getY(c)/e),a.setXY(c,a.getX(c)*.45,a.getY(c)*2%1);return Yu(s,16777215)}function Xu(r,t,e){let n=new L().subVectors(t,r),i=n.length(),s=new Wt(e*.6,e,i,5,1,!0),o=s.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a)*.45,o.getY(a));return s.translate(0,i/2,0),s.applyQuaternion(new Ne().setFromUnitVectors(new L(0,1,0),n.normalize())),s.translate(r.x,r.y,r.z),Yu(s,16777215)}function Yu(r,t,e=1){let n=new bt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ae(s,3)),r}function Wo(r,t,e,n,i,s,o,a,c,l,h=!1){let u=[],d=[],f=[],g=[],p=new bt(l),m=new Ne,x=new sn,M=new L;for(let C=0;C<a;C++){let _,w,b;for(;;){_=r()*2-1,w=r()*2-1,b=r()*2-1;let K=_*_+w*w+b*b;if(K<=1&&K>.15)break}if(h){let K=1-(w+1)/2;_*=.25+K,b*=.25+K}let z=t+_*i,D=e+w*s,N=n+b*o,F=c*(.75+r()*.5);x.set(r()*Math.PI,r()*Math.PI,r()*Math.PI),m.setFromEuler(x);let B=[[-1,-1],[1,-1],[1,1],[-1,1]],X=new L(_,w*.7+.25,b).normalize(),H=.55+.55*((w+1)/2)*(.6+.4*Math.sqrt(_*_+b*b)),W=u.length/3;for(let[K,lt]of B){M.set(K*F/2,lt*F/2,0).applyQuaternion(m),u.push(z+M.x,D+M.y,N+M.z),d.push(X.x,X.y,X.z),f.push(.5+(K+1)/4,(lt+1)/2);let ft=.9+r()*.2;g.push(p.r*H*ft,p.g*H*ft,p.b*H*ft)}}let y=[],v=[],A=[],E=[];for(let C=0;C<a;C++)for(let _ of[0,1,2,0,2,3]){let w=C*4+_;y.push(u[w*3],u[w*3+1],u[w*3+2]),v.push(d[w*3],d[w*3+1],d[w*3+2]),A.push(f[w*2],f[w*2+1]),E.push(g[w*3],g[w*3+1],g[w*3+2])}let S=new ne;return S.setAttribute("position",new Vt(y,3)),S.setAttribute("normal",new Vt(v,3)),S.setAttribute("uv",new Vt(A,2)),S.setAttribute("color",new Vt(E,3)),S}function Xo(r){return r.attributes.uv1&&r.deleteAttribute("uv1"),r}function kl(r=0){let t=zn(11+r),e=r?.28:1,n=r?1.35:1,i=(o,a,c)=>new L(o,a,c),s=[];{let o=[Go(.16,.28,3.6,7,.15)];if(!r)for(let[a,c]of[[.4,3.2],[2.4,3.4],[4.3,3]])o.push(Xu(i(0,c,0),i(Math.cos(a)*1.8,c+1.8,Math.sin(a)*1.8),.1));o.push(Wo(t,.2,5.6,0,3,2.3,3,Math.round(70*e),2.1*n,6130234)),s.push(Vo(o.map(Xo)))}{let o=[Go(.15,.3,4,6)];o.push(Wo(t,0,10,0,1.5,7.5,1.5,Math.round(80*e),1.8*n,5603124)),s.push(Vo(o.map(Xo)))}{let o=[Go(.12,.24,7,6)];o.push(Wo(t,0,5,0,2.6,4.8,2.6,Math.round(70*e),1.6*n,3826768,!0)),s.push(Vo(o.map(Xo)))}{let o=[Go(.24,.42,3.4,8,-.1)];if(!r)for(let[a,c]of[[.9,3],[3.1,3.2],[5,2.9],[2,3.6]])o.push(Xu(i(0,c,0),i(Math.cos(a)*2.4,c+2.2,Math.sin(a)*2.4),.14));o.push(Wo(t,0,6.6,0,3.8,2.9,3.8,Math.round(95*e),2.4*n,5077552)),s.push(Vo(o.map(Xo)))}return s}function $u(){return kl(1)}function Zu(){let r=Rt(new Wt(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=Rt(new Gt(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=Rt(new Gt(.35,.14,.7).translate(0,8.35,-2.1),3948354);return qe([r,t,e])}function Ju(){return Rt(new Gt(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function Ku(){let r=Rt(new Wt(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=Rt(new Gt(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(Rt(new Gt(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=Rt(new Gt(.44,1.15,.02).translate(0,3.5,-.16),14540253);return qe([r,t,n,...e])}function ju(r){return Rt(new xi(.12,12).translate(0,3.83-r*.33,.155),16777215)}function Qu(){return qe([Rt(new Gt(1.8,.06,.45).translate(0,.45,0),8017460),Rt(new Gt(1.8,.4,.05).translate(0,.72,-.2),8017460),Rt(new Gt(.06,.45,.45).translate(-.8,.22,0),3355443),Rt(new Gt(.06,.45,.45).translate(.8,.22,0),3355443)])}function tf(){return qe([Rt(new Gt(3.6,.08,1.6).translate(0,2.5,0),2973324),Rt(new Gt(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),Rt(new Gt(.08,2.5,1.5).translate(1.75,1.25,0),8952234),Rt(new Gt(3.5,1.8,.05).translate(0,1.4,-.72),10467012),Rt(new Gt(3,.08,.4).translate(0,.5,-.5),5592405)])}var bi={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]},jx={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},Qx={0:1/140,2:1/45,7:1/120,1:0},qo=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new te,t.add(this.root),this.mat={building:ku(n),road:jn(n,n.asphalt,7,16777215,.92),mark:Hu(),paving:Object.assign(jn(n,n.paving,3.2,12104876,.9),{side:Me}),grass:jn(n,n.grass,6,16777215,1),dirt:jn(n,n.dirt,7,16777215,1),field:jn(n,n.field,14,16777215,1),asphalt:jn(n,n.asphalt,7,16777215,.92),concrete:jn(n,n.concrete,20,13158596,.85),water:new Bt({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:(()=>{let i=new Bt({vertexColors:!0,roughness:.85,map:qu(),alphaTest:.42,side:Me});return i.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;")},i})(),lamp:new Bt({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new Bt({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new Bt({vertexColors:!0,roughness:.6}),rail:new Bt({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=kl(),this.geoTreesLow=$u(),this.geoLamp=Zu(),this.geoLampGlow=Ju(),this.geoBus=tf(),this.geoBench=Qu(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new Ee(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new ae(n,3));let i=jn(this.T,this.T.dirt,9,11843744,1);this.ground=new it(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new it(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),c=Math.floor((i+o)/400),l=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let f=a;f<=c;f++)for(let g=l;g<=h;g++){let p=Oe(f,g);if(this.live.has(p))continue;let m=this.map.chunks.get(p);if(!m)continue;let x=Math.hypot((f+.5)*400-i,(g+.5)*400-s);x<o&&u.push([x,m])}u.sort((f,g)=>f[0]-g[0]);let d=performance.now();for(let[f,g]of u)if(this._buildChunk(g),!n&&performance.now()-d>(this.radius>2e3?14:8))break;for(let[f,g]of this.live){let p=Math.hypot(g.x-i,g.z-s);if(p>o+900){this._dispose(f,g);continue}g.group.visible=p<o+300,g.detail&&(g.detail.visible=p<650),g.trees&&(g.trees.visible=p<280,g.treesLow.visible=p>=280&&p<1400),g.marks&&(g.marks.visible=p<700)}}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),e.signTex&&(e.signTex.dispose(),e.signMat.dispose()),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),c=Math.floor(Math.min(e,i)/s),l=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=c;u<=l;u++){let d=Oe(h,u),f=this.collision.get(d);f||this.collision.set(d,f=[]),f.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=zn(t.key*7+13),i=new te,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new Ke({aInfo:2,aWin:2});for(let _ of t.buildings)this._building(a,_,n,o);if(!a.empty){let _=new it(a.build(),this.mat.building);_.castShadow=!0,_.receiveShadow=!0,i.add(_)}t.signs.length&&this._signs(t,i,s);let c=new Ke,l=new Ke,h=new Ke({aDash:2}),u=[1,1,1],d=Un(15253568),f=[.92,.92,.9];for(let _ of t.edges){let w=.03+(6-_.cls)*.005;je(c,_.pts,-_.w/2,_.w/2,w,[1,1,1]);let b=_.na.deg>1?_.na.maxW/2+1.5:0,z=_.nb.deg>1?_.nb.maxW/2+1.5:0;if(_.len-b-z<2)continue;let D=Fl(_.pts,_.cum,b,_.len-z),N=w+.004,F=(B,X,H=.15,W=f)=>je(h,D,B-H/2,B+H/2,N,W,K=>[K,X]);if(_.cls<=4){if(_.ow)for(let B=1;B<_.lanes;B++)F(-_.w/2+B*3.3,1);else if(_.lanes>=2){F(-.12,0),F(.12,0);for(let B=1;B<_.lanes;B++)F(B*3.3,1),F(-B*3.3,1)}else _.cls<=4&&_.w>=6&&F(0,1);_.cls<=2&&(F(_.w/2-.35,0,.12),F(-_.w/2+.35,0,.12))}for(let B of _.signals){let X={};e.sample(_,B.dir,B.stop,0,X);let H=B.dir?-1:1,W=(_.ow,_.w/2),K=_.ow?-W:0,lt=W,ft=-X.dz,et=X.dx,O=[X.x+ft*K,X.z+et*K,X.x+ft*lt,X.z+et*lt];je(h,O,-.25,.25,N+.001,f,()=>[0,0])}if(_.cls>=1&&_.cls<=4&&_.w>=5){let B=_.na.deg>1?_.na.maxW/2+2.5:0,X=_.nb.deg>1?_.nb.maxW/2+2.5:0;if(_.len-B-X>3){let H=Fl(_.pts,_.cum,B,_.len-X),W=_.cls<=2?3.4:2.6;for(let K of[-1,1]){let lt=K>0?_.w/2:-_.w/2-W,ft=K>0?_.w/2+W:-_.w/2;je(l,H,lt,ft,.15,[1,1,1]),this._curb(l,H,K>0?_.w/2:-_.w/2,K)}}}}for(let _ of t.nodes){let w=.03+_.top*.005+.002;Gu(c,_.x,_.z,_.maxW/2*1.08,w,[1,1,1],16)}for(let[_,w]of t.crossings){let b=e.nearestRoad(_,w,4);if(!b||b.e.cls>4||b.e.w<5)continue;let z=.03+(6-b.e.cls)*.005+.006,D=-b.dz,N=b.dx,F=b.e.w/2,B=[b.x-D*F,b.z-N*F,b.x+D*F,b.z+N*F];je(h,B,-2,2,z,f,X=>[X*2,2])}if(!c.empty){let _=new it(c.build(),this.mat.road);_.receiveShadow=!0,i.add(_)}if(!l.empty){let _=new it(l.build(),this.mat.paving);_.receiveShadow=!0,i.add(_),s.detail=_}if(!h.empty){let _=new it(h.build(),this.mat.mark);_.receiveShadow=!0,i.add(_),s.marks=_}let g={},p=[[],[],[],[]];for(let _ of t.areas)this._area(g,_,n,p);for(let _ of t.lines)this._line(g,_,n,p);for(let _ in g){let w=new it(g[_].build(),this.mat[_]);w.receiveShadow=!0,i.add(w)}let m=[];for(let _ of t.edges){if(_.cls<1||_.cls>4)continue;let w=_.cls<=2?9:11,b=_.w/2+(_.cls<=2?4.2:3.4);for(let z=6+n()*5;z<_.len-6;z+=w+n()*5)for(let D of[-1,1]){if(n()<(_.cls<=3?.18:.4))continue;let N={};if(e.sample(_,0,z,b*D,N),this._blocked(N.x,N.z,_,2.2))continue;let F=_.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;p[F].push(N.x,N.z,.75+n()*.5,n()*6.28)}if(_.cls<=3)for(let z=10;z<_.len-8;z+=34)for(let D of _.cls<=1?[-1,1]:[1]){let N={};if(e.sample(_,0,z,(_.w/2+.6)*D,N),this._blocked(N.x,N.z,_,.8))continue;let F=Math.atan2(-N.dz*D,N.dx*D);m.push(N.x,N.z,F)}}for(let _ of t.trees)p[n()<.5?0:3].push(_[0],_[1],.8+n()*.4,n()*6.28);let x=new te,M=new te,y=new ee,v=new Ne,A=new L,E=new L,S=new L(0,1,0),C=new bt;for(let _=0;_<4;_++){let w=p[_],b=w.length/4;if(!b)continue;let z=new Te(this.geoTrees[_],this.mat.tree,b);for(let N=0;N<b;N++){let F=w[N*4+2];v.setFromAxisAngle(S,w[N*4+3]),y.compose(A.set(w[N*4],0,w[N*4+1]),v,E.set(F,F*(.9+n()*.25),F)),z.setMatrixAt(N,y);let B=.8+n()*.35;z.setColorAt(N,C.setRGB(B*(.9+n()*.25),B,B*(.85+n()*.2)))}z.castShadow=!0,z.receiveShadow=!0,z.computeBoundingSphere(),x.add(z);let D=new Te(this.geoTreesLow[_],this.mat.tree,b);D.instanceMatrix.copy(z.instanceMatrix),D.instanceColor=z.instanceColor,D.castShadow=!0,D.computeBoundingSphere(),M.add(D)}if(i.add(x,M),s.trees=x,s.treesLow=M,m.length){let _=m.length/3,w=new Te(this.geoLamp,this.mat.lamp,_),b=new Te(this.geoLampGlow,this.mat.lampGlow,_);for(let z=0;z<_;z++)v.setFromAxisAngle(S,m[z*3+2]),y.compose(A.set(m[z*3],0,m[z*3+1]),v,E.set(1,1,1)),w.setMatrixAt(z,y),b.setMatrixAt(z,y);w.castShadow=!0,w.computeBoundingSphere(),b.computeBoundingSphere(),i.add(w,b)}if(t.busstops.length){let _=[];for(let[w,b]of t.busstops){let z=e.nearestRoad(w,b,25,H=>H.cls<=4);if(!z)continue;let D=z.lat>=0?1:-1,N=z.e.w/2+2.2,F=z.x+-z.dz*N*D,B=z.z+z.dx*N*D;if(e.insideBuilding(F,B,.5))continue;let X=e.nearestRoad(F,B,12);X&&X.dist<X.e.w/2+1||_.push(F,B,Math.atan2(z.dx*D,z.dz*D)+Math.PI)}if(_.length){let w=new Te(this.geoBus,this.mat.prop,_.length/3);for(let b=0;b<_.length/3;b++)v.setFromAxisAngle(S,_[b*3+2]),y.compose(A.set(_[b*3],.15,_[b*3+1]),v,E.set(1,1,1)),w.setMatrixAt(b,y);w.castShadow=!0,w.computeBoundingSphere(),i.add(w)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_signs(t,e,n){let i={pharmacy:["#1d8a4a","#fff"],bank:["#163c7a","#fff"],cafe:["#5a3a22","#ffe9c8"],restaurant:["#7a1e1e","#fff3d0"],fast_food:["#d8261c","#fff"],supermarket:["#f2c200","#1a1a1a"],convenience:["#1f5fa8","#fff"],fuel:["#0a6a3a","#fff"],hotel:["#2a2a40","#f0d080"],clothes:["#222","#fff"],bar:["#3a1a40","#ffd0f0"],mobile_phone:["#e05a10","#fff"]},s=[];for(let v of t.signs){let A=Math.floor(v.x/this.map.BGRID),E=Math.floor(v.z/this.map.BGRID),S=null,C=18;for(let _=-1;_<=1;_++)for(let w=-1;w<=1;w++){let b=this.map.bgrid.get(Oe(A+_,E+w));if(b)for(let z of b){if(z.h<3||z.h>80)continue;let D=z.pts,N=D.length/2,F=0;for(let X=0;X<N;X++){let H=(X+1)%N;F+=D[X*2]*D[H*2+1]-D[H*2]*D[X*2+1]}let B=F>0?1:-1;for(let X=0;X<N;X++){let H=(X+1)%N,W=D[X*2],K=D[X*2+1],lt=D[H*2],ft=D[H*2+1],et=lt-W,O=ft-K,$=Math.hypot(et,O);if($<3)continue;let ot=((v.x-W)*et+(v.z-K)*O)/($*$);ot=Math.max(.15,Math.min(.85,ot));let st=W+et*ot,pt=K+O*ot,Et=Math.hypot(v.x-st,v.z-pt),It=O/$*B,Yt=-et/$*B,at=this.map.nearestRoad(st+It*6,pt+Yt*6,30),ut=Et+(at?at.dist*.15:6);ut<C&&(C=ut,S={x:st+It*.06,z:pt+Yt*.06,nx:It,nz:Yt,l:$,h:Math.min(z.h,4.2)})}}}if(S&&!s.some(_=>Math.hypot(_.x-S.x,_.z-S.z)<2.5)&&s.push(Object.assign(S,{name:v.name,kind:v.kind})),s.length>=48)break}if(!s.length)return;let o=256,a=48,c=4,l=Math.ceil(s.length/c),h=document.createElement("canvas");h.width=o*c,h.height=a*l;let u=h.getContext("2d"),d=[],f=[],g=[],p=[];s.forEach((v,A)=>{let E=A%c*o,S=Math.floor(A/c)*a,[C,_]=i[v.kind]||["#8a1a1a","#fff"];u.fillStyle=C,u.fillRect(E,S,o,a),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(E,S,o,4),u.fillStyle=_,u.textAlign="center",u.textBaseline="middle";let w=30;for(u.font=`700 ${w}px Arial`;u.measureText(v.name).width>o-16&&w>12;)w-=2,u.font=`700 ${w}px Arial`;u.fillText((v.name.toUpperCase,v.name),E+o/2,S+a/2+1),v.kind==="pharmacy"&&(u.fillStyle="#fff",u.fillRect(E+8,S+18,18,6),u.fillRect(E+14,S+12,6,18));let b=Math.min(v.l*.8,1.6+v.name.length*.28),z=b*a/o*1.15,D=-v.nz,N=v.nx,F=v.h-.6-z,B=v.h-.6,X=Math.max(2.6,Math.min(F,3)),H=X+z,W=d.length/3;for(let[O,$]of[[-1,X],[1,X],[1,H],[-1,H]])d.push(v.x+D*O*b/2,$,v.z+N*O*b/2),g.push(v.nx,0,v.nz);let K=E/h.width,lt=(E+o)/h.width,ft=1-(S+a)/h.height,et=1-S/h.height;f.push(lt,ft,K,ft,K,et,lt,et),p.push(W,W+1,W+2,W,W+2,W+3)});let m=new ne;m.setAttribute("position",new Vt(d,3)),m.setAttribute("normal",new Vt(g,3)),m.setAttribute("uv",new Vt(f,2)),m.setIndex(p);let x=new Be(h);x.colorSpace=pe,x.anisotropy=4;let M=new Bt({map:x,emissiveMap:x,emissive:16777215,emissiveIntensity:.05+this.night*.9,roughness:.5,side:Me}),y=new it(m,M);e.add(y),n.signMat=M,n.signTex=x}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=Bl(e),o=e.length/2,a=-1,c=-1;for(let l=0;l<o;l++){let h=s[l*3],u=s[l*3+1],d=s[l*3+2],f=e[l*2]+h*n*d,g=e[l*2+1]+u*n*d,p=-h*i,m=-u*i,x=t.v(f,.15,g,p,0,m,.85,.85,.83),M=t.v(f,0,g,p,0,m,.6,.6,.6);a>=0&&(i>0?t.quad(c,M,x,a):t.quad(c,a,x,M)),a=x,c=M}}_area(t,e,n,i){let s=jx[e.type];if(!s)return;let[o,a,c]=s,l=t[o]||(t[o]=new Ke),h=e.pts,u=h.length/2,d=[];for(let x=0;x<u;x++)d.push(new Q(h[x*2],h[x*2+1]));let f;try{f=di.triangulateShape(d,[])}catch{return}let g=Un(a),p=l.vc;for(let x=0;x<u;x++)l.v(h[x*2],c,h[x*2+1],0,1,0,g[0],g[1],g[2]);for(let x of f){let[M,y,v]=x,A=h[M*2],E=h[M*2+1],S=h[y*2],C=h[y*2+1],_=h[v*2],w=h[v*2+1];(S-A)*(w-E)-(C-E)*(_-A)<0?l.tri(p+M,p+y,p+v):l.tri(p+M,p+v,p+y)}let m=Qx[e.type];if(i&&m&&n){let x=(e.x1-e.x0)*(e.z1-e.z0),M=Math.min(500,Math.floor(x*m)),y=M*3;for(;M>0&&y-- >0;){let v=e.x0+n()*(e.x1-e.x0),A=e.z0+n()*(e.z1-e.z0);if(!Ho(v,A,h))continue;let E=this.map.nearestRoad(v,A,10);if(E&&E.dist<E.e.w/2+2||this.map.insideBuilding(v,A,1.5))continue;let S=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[S].push(v,A,.7+n()*.6,n()*6.28),M--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new Ke);je(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new Ke);je(o,s,-e.w/2,e.w/2,.005,Un(6982288));let a=t.dirt||(t.dirt=new Ke);je(a,s,-e.w/2-2.5,-e.w/2,.004,Un(10129528)),je(a,s,e.w/2,e.w/2+2.5,.004,Un(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new Ke);je(o,s,-1.8,1.8,.02,Un(6971992));let a=t.rail||(t.rail=new Ke);je(a,s,-.78,-.7,.16,[1,1,1]),je(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new Ke);je(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new Ke({aDash:2}));je(a,s,-.08,.08,.03,Un(15253552),c=>[c,0])}else if(e.type===5&&i){let o=Vu(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let c=0;for(;c<o.length-2&&o[c+1]<a;)c++;let l=(a-o[c])/(o[c+1]-o[c]||1);i[n()<.6?1:0].push(s[c*2]+(s[c*2+2]-s[c*2])*l,s[c*2+1]+(s[c*2+3]-s[c*2+1])*l,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let F=0;F<o;F++){let B=(F+1)%o;a+=s[F*2]*s[B*2+1]-s[B*2]*s[F*2+1]}let c=Math.abs(a)/2,l=e.kind,h=e.h,u=e.minH,d,f,g=3,p=3.2,m=F=>F[Math.floor(n()*F.length)];switch(l===0&&(l=h<7.5?1:h>35?3:2),l){case 1:d=1,f=m(bi.house),p=3.6;break;case 2:d=2,f=m(bi.panel),p=3.1;break;case 3:d=3,f=m(bi.comm),p=2.2,g=3.6;break;case 4:d=4,f=m(bi.ind),p=4,g=4;break;case 5:d=0,f=9077880;break;case 6:d=0,f=10132122;break;case 7:d=5,f=m(bi.pub),p=3.4,g=3.8;break;case 8:d=5,f=15921128;break;case 9:d=4,f=11052188;break;case 10:d=6,f=13160664,p=2.5,g=4;break;default:d=2,f=m(bi.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(d=5,f=15262940);let x=Un(f);if(e.colour)try{let F=new bt(e.colour);(e.colour!=="white"||l!==3)&&(x=[F.r,F.g,F.b])}catch{}let M=.92+n()*.12,y=x[0]*M,v=x[1]*M,A=x[2]*M,E=n()*100,S=(F,B)=>({aInfo:[d,E],aWin:[F,B]}),C=a>0?1:-1,_=0;for(let F=0;F<o;F++){let B=(F+1)%o,X=s[F*2],H=s[F*2+1],W=s[B*2],K=s[B*2+1],lt=W-X,ft=K-H,et=Math.hypot(lt,ft);if(et<.05)continue;let O=ft/et*C,$=-lt/et*C,ot=Math.max(1,Math.round(et/p)),st=0,pt=(h-u)/g,Et=t.v(X,u,H,O,0,$,y,v,A,S(0,st)),It=t.v(W,u,K,O,0,$,y,v,A,S(ot,st)),Yt=t.v(W,h,K,O,0,$,y,v,A,S(ot,pt)),at=t.v(X,h,H,O,0,$,y,v,A,S(0,pt));C>0?(t.tri(Et,Yt,It),t.tri(Et,at,Yt)):(t.tri(Et,It,Yt),t.tri(Et,Yt,at)),i&&h>1.5&&this.addWall(X,H,W,K),_+=et}let w=l===1&&c<260&&o<=8||/gabled|hipped|pitched/.test(e.roofShape||"");if(!w&&h>5&&l!==5&&l!==6){let F=l===3||l===10?1.1:.7,B=[y*.92,v*.92,A*.92],X={aInfo:[0,E],aWin:[0,0]};for(let H=0;H<o;H++){let W=(H+1)%o,K=s[H*2],lt=s[H*2+1],ft=s[W*2],et=s[W*2+1],O=Math.hypot(ft-K,et-lt);if(O<.05)continue;let $=(et-lt)/O*C,ot=-(ft-K)/O*C,st=t.v(K,h,lt,$,0,ot,B[0],B[1],B[2],X),pt=t.v(ft,h,et,$,0,ot,B[0],B[1],B[2],X),Et=t.v(ft,h+F,et,$,.2,ot,B[0],B[1],B[2],X),It=t.v(K,h+F,lt,$,.2,ot,B[0],B[1],B[2],X);C>0?(t.tri(st,Et,pt),t.tri(st,It,Et),t.tri(st,pt,Et),t.tri(st,Et,It)):(t.tri(st,pt,Et),t.tri(st,Et,It),t.tri(st,Et,pt),t.tri(st,It,Et))}}if(w){this._gableRoof(t,e,h,x,n,c);return}let b=[];for(let F=0;F<o;F++)b.push(new Q(s[F*2],s[F*2+1]));let z;try{z=di.triangulateShape(b,[])}catch{return}let D=l===10?[.55,.57,.6]:l===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],N=t.vc;for(let F=0;F<o;F++)t.v(s[F*2],h,s[F*2+1],0,1,0,D[0],D[1],D[2],{aInfo:[0,E],aWin:[s[F*2],s[F*2+1]]});for(let F of z){let[B,X,H]=F,W=s[B*2],K=s[B*2+1],lt=s[X*2],ft=s[X*2+1],et=s[H*2],O=s[H*2+1];(lt-W)*(O-K)-(ft-K)*(et-W)<0?t.tri(N+B,N+X,N+H):t.tri(N+B,N+H,N+X)}if((l===2||l===3)&&c>350&&h>12){let F=Math.min(3,Math.floor(c/400));for(let B=0;B<F;B++){let X=(B+.5)/F,H=e.x0+(e.x1-e.x0)*X,W=e.z0+(e.z1-e.z0)*X;Ho(H,W,s)&&this._box(t,H,h,W,2.6,2.4,3.2,[D[0]*1.3,D[1]*1.3,D[2]*1.3],E)}}}_box(t,e,n,i,s,o,a,c,l){let h=s/2,u=a/2,d=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],f={aInfo:[0,l],aWin:[0,0]};for(let p=0;p<4;p++){let[m,x]=d[p],[M,y]=d[(p+1)%4],v=M-m,A=y-x,E=Math.hypot(v,A),S=A/E,C=-v/E,_=t.v(m,n,x,S,0,C,c[0],c[1],c[2],f),w=t.v(M,n,y,S,0,C,c[0],c[1],c[2],f),b=t.v(M,n+o,y,S,0,C,c[0],c[1],c[2],f),z=t.v(m,n+o,x,S,0,C,c[0],c[1],c[2],f);t.tri(_,b,w),t.tri(_,z,b)}let g=d.map(([p,m])=>t.v(p,n+o,m,0,1,0,c[0],c[1],c[2],f));t.tri(g[0],g[2],g[1]),t.tri(g[0],g[3],g[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,c=a.length/2,l=0,h=1,u=0;for(let W=0;W<c;W++){let K=(W+1)%c,lt=a[K*2]-a[W*2],ft=a[K*2+1]-a[W*2+1],et=Math.hypot(lt,ft);et>l&&(l=et,h=lt/et,u=ft/et)}let d=-u,f=h,g=1e9,p=-1e9,m=1e9,x=-1e9;for(let W=0;W<c;W++){let K=a[W*2]*h+a[W*2+1]*u,lt=a[W*2]*d+a[W*2+1]*f;g=Math.min(g,K),p=Math.max(p,K),m=Math.min(m,lt),x=Math.max(x,lt)}let M=.35;g-=M,p+=M,m-=M,x+=M;let y=(W,K)=>[W*h+K*d,W*u+K*f],v=Math.min(2.6,(x-m)*.38),A=(m+x)/2,E=Un(bi.roofHouse[Math.floor(s()*bi.roofHouse.length)]);if(e.roofColour)try{let W=new bt(e.roofColour);E=[W.r,W.g,W.b]}catch{}let S={aInfo:[0,0],aWin:[0,0]},C=n-.05,_=y(g,m),w=y(p,m),b=y(p,x),z=y(g,x),D=y(g,A),N=y(p,A),F=(W,K,lt,ft,et)=>{let O=(A-(et<0?m:x)===0,1),$=v/((x-m)/2),ot=d*et*$,st=f*et*$,pt=Math.hypot(ot,1,st),Et=t.v(W[0],C,W[1],ot/pt,O/pt,st/pt,E[0],E[1],E[2],S),It=t.v(K[0],C,K[1],ot/pt,O/pt,st/pt,E[0],E[1],E[2],S),Yt=t.v(lt[0],C+v,lt[1],ot/pt,O/pt,st/pt,E[0]*1.1,E[1]*1.1,E[2]*1.1,S),at=t.v(ft[0],C+v,ft[1],ot/pt,O/pt,st/pt,E[0]*1.1,E[1]*1.1,E[2]*1.1,S);return[Et,It,Yt,at]},B=F(_,w,N,D,-1),X=F(b,z,D,N,1),H=W=>{let[K,lt,ft]=W.map(Et=>[t.p[Et*3],t.p[Et*3+1],t.p[Et*3+2]]),et=lt[0]-K[0],O=lt[1]-K[1],$=lt[2]-K[2],ot=ft[0]-K[0],st=ft[1]-K[1],pt=ft[2]-K[2];return $*ot-et*pt>0};for(let W of[B,X])H(W)?(t.tri(W[0],W[1],W[2]),t.tri(W[0],W[2],W[3])):(t.tri(W[0],W[2],W[1]),t.tri(W[0],W[3],W[2]));for(let[W,K,lt,ft]of[[_,z,D,-1],[w,b,N,1]]){let et=h*ft,O=u*ft,$=t.v(W[0],C,W[1],et,0,O,i[0],i[1],i[2],S),ot=t.v(K[0],C,K[1],et,0,O,i[0],i[1],i[2],S),st=t.v(lt[0],C+v,lt[1],et,0,O,i[0],i[1],i[2],S);t.tri($,ot,st),t.tri($,st,ot)}}setNight(t){if(Math.abs((this.night||0)-t)>.02)for(let e of this.live.values())e.signMat&&(e.signMat.emissiveIntensity=.05+t*.9);this.night=t,wn.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),c=Math.floor((e-n)/s),l=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,d=e;for(let f=o;f<=a;f++)for(let g=c;g<=l;g++){let p=this.collision.get(Oe(f,g));if(p)for(let m=0;m<p.length;m+=4){let x=p[m],M=p[m+1],y=p[m+2],v=p[m+3],A=y-x,E=v-M,S=A*A+E*E||1e-6,C=((u-x)*A+(d-M)*E)/S;C=C<0?0:C>1?1:C;let _=x+A*C,w=M+E*C,b=u-_,z=d-w,D=Math.hypot(b,z);if(D<n&&D>1e-5){let N=n-D;u+=b/D*N,d+=z/D*N,i.nx+=b/D,i.nz+=z/D,h=!0}}}if(h){i.x=u-t,i.z=d-e;let f=Math.hypot(i.nx,i.nz)||1;i.nx/=f,i.nz/=f}return h}};var Ns=class r extends it{constructor(){let t=r.SkyShader,e=new de({name:t.name,uniforms:Dn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:We,depthWrite:!1});super(new Gt(1,1,1),e),this.isSky=!0}};Ns.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
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

		}`};var Yo=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new Fi,this.bgCam=new Pe(60,1,50,2e5),this.sky=new Ns,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85;for(let s of[this.sky])s.material.fragmentShader=s.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min( retColor, vec3( 24.0 ) ), 1.0 );");this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new L,this.sun=new zo(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new Io(12572927,6971464,1),e.add(this.hemi),e.fog=new yo(13162208,300,2600),this.pmrem=new As(t),this.envScene=new Fi,this.envSky=new Ns,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=zn(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new ne;i.setAttribute("position",new ae(n,3)),this.starMat=new hr({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new Oi(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=zn(99),e=260,n=70,i=new Ee(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let d=0,f=1,g=1/9e3;for(let p=0;p<6;p++)d+=f*(Math.sin(h*g+p*1.7)*Math.cos(u*g*1.3-p)+Math.sin((h+u)*g*.7+p*3.1)*.6),f*=.5,g*=2.1;return d};for(let h=0;h<s.count;h++){let u=s.getX(h),f=s.getZ(h)+26e3+26e3,g=f-26e3,p=Math.min(1,Math.max(0,(g+6e3)/14e3)),m=Math.exp(-((g-16e3)**2)/(2*9e3**2)),x=p*p*900+m*3400*(.75+.35*o(u,f))+Math.abs(o(u*1.7,f*1.7))*600*p;x*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,x-120),f)}i.computeVertexNormals();let a=new Ee(22e4,3e4,160,20).rotateX(-Math.PI/2),c=a.attributes.position;for(let h=0;h<c.count;h++){let u=c.getX(h),d=c.getZ(h)-7e4,f=Math.max(0,(Math.abs(d+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,d*.6)))*Math.min(1,-(d+55e3)/12e3));c.setXYZ(h,u,f-80,d)}a.computeVertexNormals(),this.mtnMat=new de({uniforms:{sunDir:{value:new L(0,1,0)},fogCol:{value:new bt(13162208)},light:{value:1},camPos:{value:new L}},vertexShader:`varying vec3 vN; varying vec3 vW;
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
        }`,fog:!1}),this.mountains=new it(i,this.mtnMat),this.hills=new it(a,this.mtnMat);let l=new it(new Ee(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);l.position.y=-6,this.plain=l,this.bg.add(this.mountains,this.hills,l),this._clouds()}_clouds(){this.cloudMat=new de({uniforms:{uTime:wn.uTime,sunDir:{value:new L(0,1,0)},day:{value:1},fogCol:{value:new bt},cover:{value:.45},camPos:{value:new L}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float uTime; uniform vec3 sunDir; uniform float day; uniform vec3 fogCol; uniform float cover; uniform vec3 camPos; varying vec3 vW;
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
        }`,transparent:!0,depthWrite:!1,fog:!1,side:Me}),this.cloudsMesh=new it(new Ee(16e4,16e4,1,1).rotateX(-Math.PI/2),this.cloudMat),this.cloudsMesh.position.y=2600,this.bg.add(this.cloudsMesh)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let l=Fe.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-Fe.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*l,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),l<.15&&(this.sun.intensity=.55*(1-l/.15)+3.2*l,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*l,this.hemi.color.setRGB(.55+.2*l,.62+.22*l,.85+.1*l).multiplyScalar(.5+.5*l),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+l),.38*(.3+l),.3*(.3+l));let u=new bt().setRGB(.55,.66,.8).lerp(new bt(.92,.66,.45),h*.55).multiplyScalar(.08+.92*l);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*l,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night,this.cloudMat.uniforms.sunDir.value.copy(this.sunDir),this.cloudMat.uniforms.day.value=l,this.cloudMat.uniforms.fogCol.value.copy(u),this.cloudMat.uniforms.camPos.value.copy(t.position),this.cloudsMesh.position.x=t.position.x,this.cloudsMesh.position.z=t.position.z;let d=this.sunDir.y>.05?this.sunDir:new L(-.4,.8,.3).normalize();return this.sun.position.set(e.x+d.x*400,d.y*400,e.z+d.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*l),{day:l,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function tv(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i],o=r[(i-1+n)%n],a=r[(i+1)%n],c=[o[0]-s[0],o[1]-s[1]],l=[a[0]-s[0],a[1]-s[1]],h=Math.hypot(...c),u=Math.hypot(...l),d=Math.min(t,h*.45,u*.45);if(s[1]<.5&&(o[1]<.5||a[1]<.5)||d<.01){e.push(s);continue}let g=[s[0]+c[0]/h*d,s[1]+c[1]/h*d],p=[s[0]+l[0]/u*d,s[1]+l[1]/u*d];for(let m=0;m<=4;m++){let x=m/4,M=1-x;e.push([M*M*g[0]+2*M*x*s[0]+x*x*p[0],M*M*g[1]+2*M*x*s[1]+x*x*p[1]])}}return e}function Vl(r,t,e=.05,n={}){let i=n.fillet?tv(r,n.fillet):r,s=new Mn;s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1]);s.closePath();let o=new Ln(s,{depth:t-e*2,steps:n.steps||1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});if(o.rotateY(-Math.PI/2),o.translate((t-e*2)/2,0,0),n.shape){let{L:a,W:c,belt:l,top:h,taper:u=.12,tumble:d=.14}=n.shape,f=o.attributes.position;for(let g=0;g<f.count;g++){let p=f.getX(g),m=f.getY(g),x=f.getZ(g),M=Math.min(1,Math.abs(x)/(a/2)),y=1-u*Math.pow(M,3);m>l&&(y*=1-d*Math.min(1,(m-l)/Math.max(.1,h-l))),f.setX(g,p*y),Math.abs(p)>c*.3&&m>l*.7&&f.setY(g,m-.02*Math.pow(Math.abs(p)/(c/2),4))}o.computeVertexNormals()}return o}var He=(r,t,e,n,i,s)=>new Gt(r,t,e).translate(n,i,s),ev={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},nv=1844524,iv=1447446,sv=12106944,$o=2105892,rv=13159632;function wi(r,t={}){let e=ev[r],n=[],i=[],s=[],o=e.W,a=e.cabin[0][1],c=e.roof[2][1],l=r==="bus"||r==="truck",h=l?null:{L:e.L,W:o,belt:a*.75,top:c,taper:r==="van"?.06:.13,tumble:.05};n.push(Vl(e.body,o,.08,{fillet:l?.08:.22,steps:4,shape:h}));let u=o*e.cabinW,d=l?null:{L:e.L,W:u,belt:a,top:c,taper:.1,tumble:r==="van"?.05:.2};if(i.push(Rt(Vl(e.cabin,u,.04,{fillet:l?.05:.12,steps:3,shape:d}),nv)),n.push(Vl(e.roof,u+.03,.02,{fillet:.04,steps:2,shape:d&&{...d,W:u+.03}})),!l)for(let[_,w,b]of ef(e)){let z=new Wt(e.wr*1.18,e.wr*1.18,.06,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2);i.push(Rt(z.translate(Math.sign(_)*(o/2-.02),w,b),657930))}if(!l)for(let _ of[-1,1])i.push(Rt(He(.012,a-e.body[0][1]-.15,.02,_*(o/2+.003),(a+e.body[0][1])/2,e.cabin[e.cabin.length-2][0]-.1),1118481)),i.push(Rt(He(.012,a-e.body[0][1]-.15,.02,_*(o/2+.003),(a+e.body[0][1])/2,(e.cabin[0][0]+e.cabin[1][0])/2+.2),1118481)),i.push(Rt(He(.02,.05,e.L*.5,_*(o/2+.005),a-.03,0),10133670));if(e.cargo){let[_,w,b,z]=e.cargo;n.push(He(o,z-b,w-_,0,(b+z)/2,(_+w)/2))}if(r==="van"||r==="bus"){let _=r==="bus"?7:4,w=e.cabin[0][0],b=e.cabin[3][0]-(r==="van"?.7:.2);for(let z=0;z<=_;z++){let D=w+(b-w)*z/_;n.push(He(u+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,D+.06))}}let f=e.body[0][1],g=e.head.z,p=e.tail.z;i.push(Rt(He(o+.02,.16,.12,0,f+.12,g-.02),$o)),i.push(Rt(He(o+.02,.16,.12,0,f+.12,p+.02),$o)),i.push(Rt(He(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,g+.01),789516)),i.push(Rt(He(o+.03,.1,e.L*.55,0,f+.04,0),$o));let m=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let _ of[-1,1])i.push(Rt(He(.2,.12,.1,_*(o/2+.08),e.cabin[0][1]+.12,m-.1),$o));i.push(Rt(He(.52,.12,.02,0,f+.3,g+.06),15921906)),i.push(Rt(He(.52,.12,.02,0,f+.42,p-.06),15921906));let x=e.head,M=e.tail;for(let _ of[-1,1])s.push(Rt(He(x.w,x.h,.06,_*x.x,x.y,x.z),16774880)),s.push(Rt(He(M.w,M.h,.06,_*M.x,M.y,M.z),16718352,.9));t.taxi&&i.push(Rt(He(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(Rt(He(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(Rt(He(1.6,.3,.05,0,2.55,5.92),16747024));let y=ov(e.wr,r==="bus"||r==="truck"?.32:.23),v=ef(e),A=qe(v.map(([_,w,b])=>y.clone().translate(_,w,b))),E=qe(n.map(_=>Rt(_,16777215))),S=qe([...i,A]),C=qe(s);return{paint:E,detail:S,lights:C,wheel:y,wheelPos:v,spec:e,detailNoWheels:qe(i)}}function ef(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function ov(r,t){let e=Rt(new Wt(r,r,t,16).rotateZ(Math.PI/2),iv),n=Rt(new Wt(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),sv),i=Rt(new Wt(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),rv),s=[];for(let o=0;o<5;o++){let a=new Gt(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(Rt(a,9080466))}return qe([e,n,i,...s])}function nf(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new Be(t);return n.colorSpace=pe,n.anisotropy=4,n}var Gl=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var Zo=class{constructor(t,e="sedan",n){this.scene=t,this.group=new te,this.body=new te,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(m=>{m.geometry&&m.geometry.dispose()});let n=wi(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new Ps({color:i,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.06,vertexColors:!0,envMapIntensity:1.2});let s=new Bt({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new Bt({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new it(n.paint,this.paintMat);o.castShadow=!0;let a=new it(n.detailNoWheels,s);a.castShadow=!0,this.lightMesh=new it(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let c=n.spec;this.brakeMat=new ue({color:16719888,transparent:!0,opacity:0,blending:Je,depthWrite:!1});for(let p of[-1,1]){let m=new it(new Ee(c.tail.w*2.2,c.tail.h*4),this.brakeMat);m.position.set(p*c.tail.x,c.tail.y,c.tail.z-.06),m.rotation.y=Math.PI,this.body.add(m)}this.flareMat=new ue({color:16773840,transparent:!0,opacity:0,blending:Je,depthWrite:!1});for(let p of[-1,1]){let m=new it(new xi(.45,16),this.flareMat);m.position.set(p*c.head.x,c.head.y,c.head.z+.08),this.body.add(m)}let l=nf("01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B"),h=new ue({map:l}),u=new it(new Ee(.52,.12),h);u.position.set(0,c.body[0][1]+.3,c.head.z+.075);let d=new it(new Ee(.52,.12),h);d.position.set(0,c.body[0][1]+.42,c.tail.z-.075),d.rotation.y=Math.PI,this.body.add(u,d);let f=new it(new Ae(.13,10,8),new Bt({color:2760736}));f.position.set(.38,c.cabin[0][1]+.38,(c.cabin[1][0]+c.cabin[2][0])/2+.25),this.body.add(f),this.wheels=[];let g=new Bt({vertexColors:!0,roughness:.6,metalness:.3});for(let[p,m,x]of n.wheelPos){let M=new te;M.position.set(p,m,x);let y=new it(n.wheel,g);y.castShadow=!0,M.add(y),this.group.add(M),this.wheels.push({pivot:M,mesh:y,front:x>0})}this.spot?(this.spot.position.set(0,.8,c.head.z),this.spotTarget.position.set(0,0,c.head.z+25)):(this.spot=new Lo(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,c.head.z),this.spotTarget=new Se,this.spotTarget.position.set(0,0,c.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=c.mass,this.power=c.power*745.7,this.vmax=c.vmax/3.6,this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(c.L*c.L+c.W*c.W)/12*1.1,this.a=c.wb/2+(c.wbOff||0),this.b=c.wb/2-(c.wbOff||0),this.radius=c.W/2+.05,this.color=i}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let c=0;c<3;c++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=this.assists||(this.assists={abs:!0,tcs:!0,esc:!0,steerAssist:!0,sens:1,manual:!1}),a=Math.sin(this.h),c=Math.cos(this.h),l=-Math.cos(this.h),h=Math.sin(this.h),u=this.vx*a+this.vz*c,d=this.vx*l+this.vz*h,f=9.81,g=this.mass,p=Math.abs(u),m=this.surface??1,x=.6/(1+p/14)*(.75+.5*o.sens),M=-e.steer*x;o.steerAssist&&!e.hand&&p>6&&this.rearSlip&&(M+=Fe.clamp(this.rearSlip*.55,-.25,.25));let y=(e.steer===0?5.5:4.2)/(1+p/45);this.steer+=Fe.clamp(M-this.steer,-y*t,y*t);let v=this.steer,A=this._gearbox(e),E=0,S=e.throttle,C=e.brake;this.braking=!1,this.reversing=!1;let _=p<.6;C>0&&_?this.stopHold=(this.stopHold||0)+t:C===0&&(this.stopHold=0);let w=C>0&&(u<-.3||_&&this.stopHold>.2);if(S>0){if(u<-.5)E+=1*g*f*S,this.braking=!0;else if(!this.limiter){let et=this.power*A/Math.max(3,u)*S,O=(o.tcs?.92:1.15)*g*f*.6*m;!o.tcs&&et>O&&p<25?this.wheelspin=Math.min(1,(et-O)/O):this.wheelspin=0,E+=Math.min(O,et)}}else this.wheelspin=0;if(C>0){if(w)this.reversing=!0,u>-8&&(E-=g*3.4*C);else if(u>.3){let et=o.abs?1:1.12;E-=et*g*f*C*m,this.braking=!0,!o.abs&&C>.9&&p>4?this.locked=!0:this.locked=!1}}else this.locked=!1;e.hand&&(E-=Math.sign(u)*Math.min(Math.abs(u)*g*3,.55*g*f)),E-=this.drag*u*Math.abs(u)+(.015*g*f*Math.sign(u)+4*u)*Math.min(1,Math.abs(u))*(m<1?3.5:1),S===0&&C===0&&p<.4&&(u*=.85);let b=this.a,z=this.b,D=b+z,N=Fe.clamp(g*(this.accLong||0)*.55/D,-g*f*.3,g*f*.3),F=g*f*z/D-N,B=g*f*b/D+N,X=1.08*m,H=0,W=0;if(p>1.2){let et=Math.atan2(d-this.r*b,p)+v*Math.sign(u),O=Math.atan2(d+this.r*z,p),$=10*F,ot=11*B,st=Math.min(.9,Math.abs(E)/(X*(F+B))*(S>0?1.2:.6)),pt=Math.sqrt(1-st*st);e.hand&&(pt=.38),this.wheelspin&&(pt*=1-.5*this.wheelspin);let Et=this.locked?.25:1,It=X*F*Et,Yt=X*B*pt;H=-It*Math.tanh($*et/It),W=-Yt*Math.tanh(ot*O/Yt),this.rearSlip=O,this.slip=Math.max(Math.abs(O)*(e.hand?2.4:1.6),Math.abs(et)*.7,this.wheelspin*.8,this.locked?.6:0)*Math.min(1,p/8);let at=-H*Math.cos(v)*b+W*z;if(this.r+=at/this.inertia*t,this.r*=1-.8*t,o.esc&&!e.hand){let ut=X*f/Math.max(p,4)*1.12;Math.abs(this.r)>ut&&(this.r+=(Math.sign(this.r)*ut-this.r)*Math.min(1,t*8)),Math.abs(O)>.12&&(d*=1-Math.min(.5,t*2.5))}}else this.r=u*Math.tan(v)/D,d*=.5,this.slip=0,this.rearSlip=0;let K=H*Math.cos(v)+W;if(p<=1.2){let et=u+E/g*t;this.vx=a*et+l*d,this.vz=c*et+h*d,S===0&&!w&&Math.abs(et)<.2&&(this.vx=this.vz=0,this.r=0)}else{let et=u+E/g*t,O=d+K/g*t;this.vx=a*et+l*O,this.vz=c*et+h*O}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=this.accLong===void 0?0:this.accLong+(E/g-this.accLong)*Math.min(1,t*10),this.accLat=K/g,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let lt=this.spec.L,ft={};for(let et of[lt*.32,0,-lt*.32]){let O=this.x+Math.sin(this.h)*et,$=this.z+Math.cos(this.h)*et;if(n.collide(O,$,this.radius,ft)){this.x+=ft.x,this.z+=ft.z;let ot=this.vx*ft.nx+this.vz*ft.nz;ot<0&&(this.vx-=ft.nx*ot*1.25,this.vz-=ft.nz*ot*1.25,this.vx*=.94,this.vz*=.94,this.r+=(et>0?1:-1)*ot*.02*Math.sign(ft.nx*Math.cos(this.h)-ft.nz*Math.sin(this.h)),-ot>2&&(s&&s(-ot,"wall"),this.damage=Math.min(100,this.damage+-ot*.6)))}}i&&i.collidePlayer(this,s),this.remotes&&this.remotes.collide(this,s)}shiftUp(){this.gear<6&&(this.gear=Math.max(1,this.gear)+1,this.shiftT=.25)}shiftDown(){this.gear>1&&(this.gear--,this.shiftT=.2)}_gearbox(t){let e=Math.max(0,this.u||0),n=[0,3.6,2.2,1.55,1.18,.95,.78],i=3.6,s=this.spec.wr;this.gear>=1||(this.gear=1);let o=l=>e/s*n[l]*i*60/(2*Math.PI),a=o(this.gear);if(!(this.assists&&this.assists.manual)){let l=t.throttle>.5?6300:3800;a>l&&this.gear<6&&(this.gear++,this.shiftT=.18),a<2e3&&this.gear>1&&this.gear--,a=o(this.gear)}if(this.limiter=a>7200,this.rpmTarget=Math.min(7300,Math.max(900,a)),this.shiftT>0)return this.shiftT-=1/180,.25;let c=Math.min(1,a/6500);return .72+.38*Math.sin(c*Math.PI)}_visual(t,e){this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.gearLabel=this.reversing?"R":this.speed<.3&&!this.throttleOn?"N":String(this.gear);let n=Fe.clamp(-(this.accLong||0)*.006,-.05,.05),i=Fe.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((n-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((i-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let s of this.wheels)s.mesh.rotation.x=this.spin,s.front&&(s.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.9:this.night?.35:0,this.lightMat.emissiveIntensity=this.night?2.2:this.braking?1.2:.3,this.flareMat.opacity=this.night?.55:0,this.spot.intensity=this.night?60:0,this.slip>.22&&this.speed>6||this.wheelspin>.2&&this.speed>1?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new ne;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new ae(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new ae(n,1)),this.skidMesh=new it(e,new ue({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],c=o-i,l=a-s,h=Math.hypot(c,l);if(h<.05||h>5)continue;let u=-l/h*.11,d=c/h*.11,f=this.skidI++%this.skidN,g=.075;this.skidPos.set([i-u,g,s-d,i+u,g,s+d,o-u,g,a-d,o+u,g,a+d],f*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new Be(e);for(let s=0;s<160;s++){let o=new Kn(new In({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},Jo=class{constructor(t){this.cam=t,this.mode=0,this.pos=new L(0,5,-10),this.look=new L,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,c,l,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,d=i*.7+h*.3,f=s*.7+u*.3,g=Math.atan2(d,f)+n,p=Math.sin(g),m=Math.cos(g),x=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let y=(this.mode===0?6.8:11)*x+o*.03,v=(this.mode===0?2.3:4)*x+a.cabin[1][1]*.4;c=new L(e.x-p*y,v,e.z-m*y),l=new L(e.x+i*4,1.1*x,e.z+s*4);let A=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(c,A)}else if(this.mode===2)c=new L(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),l=new L(e.x+i*30,1.2,e.z+s*30),this.pos.copy(c);else{this.lag+=t*.15;let y=this.lag;c=new L(e.x+Math.sin(y)*9,1.2+Math.sin(y*.7)*.6,e.z+Math.cos(y)*9),l=new L(e.x,.9,e.z),this.pos.lerp(c,1-Math.exp(-t*3))}this.look.lerp(l,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let M=(this.mode===2?(this.baseFov||62)+10:this.baseFov||62)+Math.min(16,o*.2);this.cam.fov+=(M-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var sf=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.05],["truck",.05]],rf=[3,6,4,2.2,.6,.15,.02],of=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,Ko=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new Bt({vertexColors:!0,metalness:.5,roughness:.35}),s=new Bt({vertexColors:!0,metalness:.3,roughness:.3}),o=new ue({vertexColors:!0});for(let[a]of sf){let c=wi(a==="taxi"?"sedan":a,{taxi:a==="taxi"}),l=200,h=new Te(c.paint,i,l),u=new Te(c.detail,s,l),d=new Te(c.lights,o,l);for(let f of[h,u,d])f.count=0,f.frustumCulled=!1,f.instanceMatrix.setUsage(Bo),t.add(f);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new bt),d.setColorAt(0,new bt),this.models[a]={p:h,d:u,l:d,spec:c.spec,cap:l,n:0}}this._busStops(),this._signals(),this.M=new ee,this.Q=new Ne,this.V=new L,this.S=new L(1,1,1),this.Y=new L(0,1,0),this.C=new bt,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,c=>c.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new Te(Ku(),new Bt({vertexColors:!0,roughness:.6}),e),i=new ue({vertexColors:!0});this.lamps=[0,1,2].map(u=>new Te(ju(u),i,e));let s={},o=new ee,a=new Ne,c=new L,l=new L(1,1,1),h=new L(0,1,0);t.forEach((u,d)=>{let f=u.e,g=f.w/2+.9;this.map.sample(f,u.dir,u.stop,g,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(c.set(s.x,.12,s.z),a,l),n.setMatrixAt(d,o);for(let p of this.lamps)p.setMatrixAt(d,o),p.setColorAt(d,new bt(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new bt(3,.15,.08),new bt(.18,.03,.02)],s=[new bt(3,1.6,.1),new bt(.18,.12,.02)],o=[new bt(.1,3,.8),new bt(.02,.15,.06)];for(let a=0;a<n.length;a++){let c=n[a],l=this.map.signalState(c.cluster,c.group,e);this.lamps[0].setColorAt(a,l==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,l==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,l==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of sf)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=rf[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(of.test(n[0])||of.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),c=Math.floor(e/s),l=[],h=0;for(let u=a-o;u<=a+o;u++)for(let d=c-o;d<=c+o;d++){let f=this.map.chunks.get(Oe(u,d));if(f)for(let g of f.edges){if(g.cls>5)continue;let p=this._edgeWeight(g);p<=0||(l.push(g,p),h+=p)}}if(!h)return!1;for(let u=0;u<6;u++){let d=Math.random()*h,f=null;for(let _=0;_<l.length;_+=2)if(d-=l[_+1],d<=0){f=l[_];break}f||(f=l[0]);let g=f.ow||Math.random()<.5?0:1,p=Math.random()*f.len,m={};this.map.sample(f,g,p,0,m);let x=Math.hypot(m.x-t,m.z-e);if(x<n||x>i)continue;let M=Math.floor(Math.random()*f.lanes),y=f.id*2+g;if(this.cars.some(_=>_.de===y&&Math.abs(_.s-p)<12))continue;let v=this._pickType(),A=this.models[v];if(A.n>=A.cap)continue;A.n++;let E=Nl[f.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="truck"?.85:1),S={type:v,spec:A.spec,e:f,dir:g,de:y,s:p,lane:v==="van"||v==="bus"?f.lanes-1:M,v:E*.7,v0:E,color:v==="van"?Math.random()<.8?16053492:15912992:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:Gl[Math.floor(Math.random()*Gl.length)],x:m.x,z:m.z,h:Math.atan2(m.dx,m.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};S.next=this._chooseNext(S);let C={};return this.map.sample(f,g,p,this.map.laneOffset(f,S.lane),C),S.x=C.x,S.z=C.z,this.cars.push(S),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let c=this.map.edges[a>>1];if(c.cls>5)continue;let l={};this.map.sample(c,a&1,.5,0,l);let h=n.dx*l.dx+n.dz*l.dz,u=(h>.7?4:h>-.3?1:.15)*(rf[c.cls]+.2);c.cls===5&&(u*=.2),(t.type==="bus"||t.type==="truck")&&(u*=c.cls<=2?2:.3),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),c=0;for(;this.cars.length<a&&c<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)c++;for(let p=this.cars.length-1;p>=0;p--){let m=this.cars[p];(Math.abs(m.x-s)>760||Math.abs(m.z-o)>760)&&this._remove(p)}let l=new Map;for(let p of this.cars){let m=l.get(p.de);m||l.set(p.de,m=[]),m.push(p)}for(let p of l.values())p.sort((m,x)=>m.s-x.s);let h=Math.sin(e.h),u=Math.cos(e.h),d=e.speed,f=e.spec.L;this.honks.length=0;let g=this.map;for(let p of this.cars){let m=p.e,x=m.len,M=p.spec.L,y=1e9,v=0,A=l.get(p.de);for(let et=0;et<A.length;et++){let O=A[et];if(O===p||O.s<=p.s||O.lane!==p.lane)continue;let $=O.s-p.s-(O.spec.L+M)/2;$<y&&(y=$,v=O.v);break}if(y>200&&p.next>=0){let et=l.get(p.next);if(et&&et.length){let O=et[0],$=x-p.s+O.s-(O.spec.L+M)/2;$<y&&(y=$,v=O.v)}}p.redAhead=!1;for(let et of m.signals){if(et.dir!==p.dir)continue;let O=et.stop-p.s;if(O<-.5||O>120)continue;let $=g.signalState(et.cluster,et.group,this.time);if($==="R"||$==="Y"&&O>p.v*p.v/7+2){let ot=O-M/2;ot<y&&(y=Math.max(.01,ot),v=0,p.redAhead=!0)}}if((p.type==="van"||p.type==="bus")&&p.stopT<=0){let et=this.stopsOn.get(p.de);if(et)for(let O of et){let $=O-p.s;if($>0&&$<60&&p.servedStop!==p.de*1e4+Math.round(O)){let ot=$-M/2+1.5;ot<y&&(y=Math.max(.01,ot),v=0),$<M/2+1.5&&p.v<.5&&(p.stopT=6+Math.random()*8,p.servedStop=p.de*1e4+Math.round(O))}}}p.stopT>0&&(p.stopT-=t,y=.01,v=0);let E=Math.sin(p.h),S=Math.cos(p.h);{let et=s-p.x,O=o-p.z,$=et*E+O*S,ot=Math.abs(et*S-O*E);if($>0&&$<45&&ot<2.2){let st=$-(f+M)/2;st<y&&(y=Math.max(.01,st),v=Math.max(0,d*(h*E+u*S)),p.playerBlock=!0)}else p.playerBlock=!1}if(n)for(let et of n.crossers){let O=et.x-p.x,$=et.z-p.z,ot=O*E+$*S,st=Math.abs(O*S-$*E);if(ot>0&&ot<30&&st<2.6){let pt=ot-M/2-1.5;pt<y&&(y=Math.max(.01,pt),v=0)}}if(i)for(let et of i){let O=et.x-p.x,$=et.z-p.z,ot=O*E+$*S,st=Math.abs(O*S-$*E);if(ot>0&&ot<40&&st<et.r){let pt=ot-M/2-et.r;pt<y&&(y=Math.max(.01,pt),v=0)}}let C=p.v0;if(x-p.s<25&&p.next>=0){let et=g.edges[p.next>>1],O={},$={};g.sample(m,p.dir,x-.5,0,O),g.sample(et,p.next&1,.5,0,$);let ot=O.dx*$.dx+O.dz*$.dz;ot<.8&&(C=Math.min(C,4+8*Math.max(0,ot+.2)))}p.bump>0&&(p.bump-=t,C=0);let w=1.6*p.aggr,b=2.5,z=2.2,D=1.3/p.aggr,N=p.v-v,F=z+Math.max(0,p.v*D+p.v*N/(2*Math.sqrt(w*b))),B=w*(1-Math.pow(p.v/Math.max(.1,C),4)-(y<1e8?Math.pow(F/Math.max(.1,y),2):0));for(B=Math.max(-9,B),p.brake=B<-.6||p.v<.3,p.v=Math.max(0,p.v+B*t),y<.3&&p.v>0&&(p.v=Math.min(p.v,.2)),p.s+=p.v*t,p.playerBlock&&p.v<.3&&e.speed<1?(p.wait+=t,p.wait>3.5&&Math.random()<t*.6&&this.honks.push(p)):p.wait=Math.max(0,p.wait-t);p.s>=p.e.len;){if(p.next<0){p.dead=!0;break}p.s-=p.e.len,p.de=p.next,p.e=g.edges[p.de>>1],p.dir=p.de&1,p.lane=p.type==="van"||p.type==="bus"?p.e.lanes-1:Math.min(p.e.lanes-1,Math.floor(Math.random()*p.e.lanes)),p.v0=Nl[p.e.cls]*(.85+Math.random()*.3)*(p.type==="bus"||p.type==="truck"?.85:1),p.next=this._chooseNext(p),p.transit=!0}let X=this._o||(this._o={});g.sample(p.e,p.dir,Math.min(p.s,p.e.len),g.laneOffset(p.e,p.lane),X),p.transit&&(p.ex=p.x-X.x,p.ez=p.z-X.z,p.transit=!1,Math.hypot(p.ex,p.ez)>12&&(p.ex=p.ez=0));let H=Math.exp(-t*2.5);p.ex*=H,p.ez*=H;let W=X.x+p.ex,K=X.z+p.ez,lt=W-p.x,ft=K-p.z;if(lt*lt+ft*ft>1e-4){let O=Math.atan2(lt,ft)-p.h;O=Math.atan2(Math.sin(O),Math.cos(O)),p.h+=O*Math.min(1,t*10)}p.x=W,p.z=K}for(let p=this.cars.length-1;p>=0;p--)this.cars[p].dead&&this._remove(p);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let c in this.models)this.models[c]._i=0;let a=this.night>.5?1.6:.45;for(let c of this.cars){let l=this.models[c.type],h=l._i++;e.setFromAxisAngle(s,c.h),t.compose(n.set(c.x,.03,c.z),e,i),l.p.setMatrixAt(h,t),l.d.setMatrixAt(h,t),l.l.setMatrixAt(h,t),l.p.setColorAt(h,o.setHex(c.color));let u=c.brake?Math.max(a,1.4):a;l.l.setColorAt(h,o.setRGB(u,u,u))}for(let c in this.models){let l=this.models[c];l.p.count=l.d.count=l.l.count=l._i,l.p.instanceMatrix.needsUpdate=l.d.instanceMatrix.needsUpdate=l.l.instanceMatrix.needsUpdate=!0,l.p.instanceColor&&(l.p.instanceColor.needsUpdate=!0),l.l.instanceColor&&(l.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,c=o.z-t.z;if(a*a+c*c>120)continue;let l=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(l/2.2));for(let d=0;d<u;d++){let f=(d/(u-1)-.5)*(l-h*2),g=o.x+Math.sin(o.h)*f,p=o.z+Math.cos(o.h)*f;for(let[m,x]of i){let M=m-g,y=x-p,v=Math.hypot(M,y),A=s+h;if(v<A&&v>1e-4){let E=M/v,S=y/v,C=A-v;t.x+=E*C,t.z+=S*C;let _=t.vx-Math.sin(o.h)*o.v,w=t.vz-Math.cos(o.h)*o.v,b=_*E+w*S;b<0&&(t.vx-=E*b*1.25,t.vz-=S*b*1.25,-b>1.5&&(e&&e(-b,"car",o),t.damage=Math.min(100,t.damage+-b*.5)),o.bump=2.5+Math.random()*2,o.v*=.3,o.wait=4)}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var af=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],cf=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],lf=[14200976,13146744,14728864,12094056,13673602],hf=[1709072,2760728,920586,4864040,6974058],av=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],Qo=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let c=new Te(o,a,this.N);return c.count=0,c.frustumCulled=!1,c.castShadow=!0,c.instanceMatrix.setUsage(Bo),t.add(c),c},i=new Bt({roughness:.85}),s=16777215;this.torso=n(Rt(new Gt(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(Rt(new Gt(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(Rt(new Ae(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(Rt(new Ae(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(Rt(new Gt(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(Rt(new Gt(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(Rt(new Gt(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(Rt(new Gt(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(qe([Rt(new Wt(.06,.13,.26,8).translate(0,1.88,0),15921126),Rt(new Wt(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new Bt({vertexColors:!0,roughness:.9})),this.bag=n(Rt(new Gt(.38,.55,.22).translate(0,.32,0),s),i),this.M=new ee,this.M2=new ee,this.Q=new Ne,this.V=new L,this.S=new L(1,1,1),this.E=new sn,this.C=new bt,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=af[Math.floor(e()*af.length)],t.pants=cf[Math.floor(e()*cf.length)],t.skin=lf[Math.floor(e()*lf.length)],t.hairC=hf[Math.floor(e()*hf.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let c=s-i;c<=s+i;c++)for(let l=o-i;l<=o+i;l++){let h=this.map.chunks.get(Oe(c,l));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let c=0;c<5;c++){let l=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,d=Math.random()*l.len,f={};this.map.sample(l,u,d,(l.w/2+1.4)*h,f);let g=Math.hypot(f.x-t,f.z-e);if(g<30||g>330||this.map.insideBuilding(f.x,f.z,.3))continue;let p={mode:"walk",e:l,dir:u,s:d,side:h,x:f.x,z:f.z,h:Math.atan2(f.dx,f.dz),ex:0,ez:0,dodge:0};return this._style(p),p}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let c={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(c),c}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let g=i-1;g<=i+1;g++)for(let p=s-1;p<=s+1;p++){let m=this.map.chunks.get(Oe(g,p));if(m)for(let x of m.crossings){let M=Math.hypot(x[0]-t,x[1]-e);M>40&&M<220&&o.push(x)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],c=this.map.nearestRoad(a[0],a[1],4);if(!c||c.e.cls>4||c.e.w<5)return null;let l=Math.random()<.5?1:-1,h=c.e.w/2+1.2,u=-c.dz,d=c.dx,f={mode:"cross",x:c.x+u*h*l,z:c.z+d*h*l,tx:c.x-u*h*l,tz:c.z-d*h*l,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return f.h=Math.atan2(f.tx-f.x,f.tz-f.z),this._style(f),f.speed=1.4,f}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=av.concat(this.extraZones);for(let g of a){let p=Math.hypot(g.x-i,g.z-s);if(g.active=p<420,!g.active)continue;g.count=g.count||0;let m=3;for(;g.count<g.n&&m-- >0&&o.length<this.N-5;){let x=this._spawnPlaza(g);x&&(o.push(x),g.count++)}}let c=0;for(let g of o)g.mode==="walk"&&c++;let l=c<this.target*.5?30:3;for(;c<this.target&&l-- >0&&o.length<this.N-30;){let g=this._spawnWalker(i,s);g&&(o.push(g),c++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let g=this._spawnCrosser(i,s);g&&o.push(g)}let h=Math.sin(e.h),u=Math.cos(e.h),d=e.speed;this.crossers.length=0;let f={};for(let g=o.length-1;g>=0;g--){let p=o[g];if((Math.abs(p.x-i)>380||Math.abs(p.z-s)>380)&&p.mode!=="plaza"){o[g]=o[o.length-1],o.pop();continue}if(p.mode==="plaza"&&!p.zone.active){p.zone.count--,o[g]=o[o.length-1],o.pop();continue}let x=!1;if(p.mode==="walk"){if(p.s+=p.speed*t,p.s>p.e.len){let _=p.dir?p.e.na:p.e.nb,w=[];for(let b of _.out){let z=this.map.edges[b>>1];z!==p.e&&z.cls>=1&&z.cls<=4&&z.w>=5&&w.push(b)}if(!_.out.length||!w.length)p.dir^=1,p.s=0,p.side=-p.side;else{let b=w[Math.floor(Math.random()*w.length)];p.e=this.map.edges[b>>1],p.dir=b&1,p.s=0,p.trans=!0}}this.map.sample(p.e,p.dir,p.s,(p.e.w/2+1.4)*p.side,f),p.trans&&(p.ex=p.x-f.x-p.ex*0,p.ez=p.z-f.z,p.trans=!1,Math.hypot(p.ex,p.ez)>25&&(p.ex=p.ez=0)),p.ex*=Math.exp(-t*.8),p.ez*=Math.exp(-t*.8);let S=f.x+p.ex,C=f.z+p.ez;p.h=Wl(p.h,Math.atan2(S-p.x,C-p.z),t*6),p.x=S,p.z=C,x=!0}else if(p.mode==="plaza")if(p.idle>0)p.idle-=t;else{let S=p.tx-p.x,C=p.tz-p.z,_=Math.hypot(S,C);if(_<.5){p.idle=1+Math.random()*6;let w=p.zone;for(let b=0;b<6;b++){let z=Math.random()*6.28,D=Math.sqrt(Math.random())*w.r,N=w.x+Math.cos(z)*D,F=w.z+Math.sin(z)*D;if(!this.map.insideBuilding(N,F,.6)){let B=this.map.nearestRoad(N,F,8);if(!B||B.dist>B.e.w/2+.5){p.tx=N,p.tz=F;break}}}}else{let w=Math.min(_,p.speed*.85*t);p.x+=S/_*w,p.z+=C/_*w,p.h=Wl(p.h,Math.atan2(S,C),t*5),x=!0}}else if(p.mode==="cross")if(p.wait>0)p.wait-=t;else{let S=p.tx-p.x,C=p.tz-p.z,_=Math.hypot(S,C);if(_<.3){o[g]=o[o.length-1],o.pop();continue}let w=Math.min(_,p.speed*t);p.x+=S/_*w,p.z+=C/_*w,x=!0,p.h=Wl(p.h,Math.atan2(S,C),t*6),this.crossers.push(p)}let M=p.x-i,y=p.z-s,v=M*h+y*u,A=M*u-y*h;if(!p.fixed&&d>2.5&&v>-1&&v<4+d*.45&&Math.abs(A)<2.4&&p.dodge<=0&&(p.dodge=.9,p.dside=A>=0?1:-1,p.scream=!0),p.dodge>0){p.dodge-=t;let S=5.5*t;p.x+=u*p.dside*S,p.z+=-h*p.dside*S,p.mode==="walk"&&(p.ex+=u*p.dside*S,p.ez+=-h*p.dside*S),x=!0}let E=Math.hypot(M,y);if(!p.fixed&&E<2.2&&E>.01){let S=2.2-E;p.x+=M/E*S,p.z+=y/E*S,p.mode==="walk"&&(p.ex+=M/E*S,p.ez+=y/E*S)}p.moving=x,p.phase+=t*(x?p.dodge>0?14:p.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,c=this.list,l=Math.min(c.length,this.N),h=0,u=0;for(let d=0;d<l;d++){let f=c[d],g=f.moving?Math.sin(f.phase):0,p=f.moving?Math.abs(Math.cos(f.phase))*.04:0,m=f.scale;n.setFromAxisAngle(i.set(0,1,0),f.h),t.compose(i.set(f.x,.15+p,f.z),n,s.set(m,m,m)),this.torso.setMatrixAt(d,t),this.hips.setMatrixAt(d,t),this.head.setMatrixAt(d,t),this.hair.setMatrixAt(d,t),this.torso.setColorAt(d,a.setHex(f.shirt)),this.hips.setColorAt(d,a.setHex(f.pants)),this.head.setColorAt(d,a.setHex(f.skin)),this.hair.setColorAt(d,a.setHex(f.hairC));let x=g*.55,M=-g*.5,y=f.dodge>0?2.6:0;jo(this.legL,d,t,e,o,.1,.92,0,x,a.setHex(f.pants)),jo(this.legR,d,t,e,o,-.1,.92,0,-x,a),jo(this.armL,d,t,e,o,.26,1.5,0,M-y,a.setHex(f.shirt)),jo(this.armR,d,t,e,o,-.26,1.5,0,f.wave?-2.7+Math.sin(performance.now()*.008)*.35:-M-y,a),f.kalpak&&this.kalpak.setMatrixAt(h++,t),f.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(f.shirt===1842206?9050650:1846332)),u++)}for(let d of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])d.count=l,d.instanceMatrix.needsUpdate=!0,d.instanceColor&&(d.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function jo(r,t,e,n,i,s,o,a,c,l){n.makeRotationX(c),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,l)}function Wl(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var uf=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],ta=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function cv(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],c=26;for(let z=0;z<=c;z++){let D=z/c,N=-n/2+D*n,F;D<.1?F=i*Math.sqrt(1-Math.pow(1-D/.1,2))*.98+.02:D>.72?F=i*(1-Math.pow((D-.72)/.28,1.6)*.82):F=i,a.push(new Q(Math.max(.05,F),N))}let l=new Ao(a,24).rotateX(Math.PI/2);l.rotateY(Math.PI),s.push(Rt(l,r.body)),s.push(Rt(new Gt(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(Rt(new Gt(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(Rt(new Gt(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new Mn,u=17*e,d=6.5*e,f=1.6*e,g=7*e;h.moveTo(0,d/2),h.lineTo(u,d/2-g),h.lineTo(u,d/2-g-f),h.lineTo(0,-d/2),h.closePath();let p=new Ln(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),m=p.clone().translate(i*.4,0,-n*.02),x=p.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);m.rotateZ(.06),x.rotateZ(-.06),s.push(Rt(m,13159634),Rt(x,13159634));for(let z of[-1,1])s.push(Rt(new Gt(.2,2.2*e,1.4*e).translate(z*(u+i*.4),.6*e,-n*.02-g-.4*e),r.tail));for(let z of[-1,1])for(let D of t?[.33,.62]:[.36]){let N=z*(i*.4+u*D),F=-n*.02+d/2-g*D+2.6*e;s.push(Rt(new Wt(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(N,-1.9*e,F),14211806)),s.push(Rt(new Wt(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(N,-1.9*e,F+2.12*e),2105376)),s.push(Rt(new Gt(.3,1.2*e,2.5*e).translate(N,-1.2*e,F-.5*e),13159634))}let M=new Mn;M.moveTo(0,0),M.lineTo(5.2*e,0),M.lineTo(1.8*e,7.2*e),M.lineTo(-.6*e,7.2*e),M.closePath();let y=new Ln(M,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(Rt(y,r.tail));let v=new Mn;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let A=new Ln(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(Rt(A.clone(),13159634),Rt(A.clone().scale(-1,1,1),13159634));let E=qe(s),S=[],C=2.45*e,_=(z,D)=>[Rt(new Wt(.13*e,.13*e,C,6).translate(z,-C/2-i*.6,D),10132122),Rt(new Wt(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(z,-C-i*.6+0,D),1381653)];S.push(..._(0,n*.36));for(let z of[-1,1])S.push(..._(z*2.9*e,-n*.06),..._(z*3.5*e,-n*.06));let w=qe(S),b=C+i*.6+.55*e;return{body:E,gear:w,groundY:b,len:n,span:u+i*.4,S:e}}function yr(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let c=new Be(o);return c.colorSpace=pe,c.anisotropy=8,c}var ea=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new te,t.add(this.group);let i=e.runways.sort((u,d)=>d.length-u.length)[0],s=i.length/2,o=new Q(i[0],i[1]),a=new Q(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new Q(-this.u.y,this.u.x),this.rwW=55;let c=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=c,this.tc=c?new Q(c.cx,c.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let l=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(l.x,l.y,200,u=>u.cls<=6);this.dropoff=h?new Q(h.x,h.z):l,this._zoneMarker(),this.goAround=!1}rel(t){let e=new Q(t.x-this.R0.x,t.y-this.R0.y);return new Q(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new Ee(t,e+14,1,1).rotateX(-Math.PI/2),i=new Bt({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new it(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,c,l]of[["07",70,0],["25",t-70,Math.PI]]){let h=yr(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new it(new Ee(18,18),new Bt({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let d=this.at(c,0),f=new te;f.add(u),f.position.set(d.x,.05,d.y),f.rotation.y=this.heading+l+Math.PI,this.group.add(f)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let f=0;f<=n;f+=60)for(let g of[-1,1])t.push(this.at(f,g*i)),e.push(f>n-600?[1,.6,.2]:[1,.95,.8]);for(let f=-i;f<=i;f+=3)t.push(this.at(-1,f)),e.push([.2,1,.3]),t.push(this.at(n+1,f)),e.push([1,.1,.1]);for(let f=30;f<n;f+=30)t.push(this.at(f,0)),e.push(f>n-900?Math.floor(f/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let f of this.map.taxiways){let g=f.pts;for(let p=0;p<g.length/2-1;p++){let m=g[p*2],x=g[p*2+1],M=g[p*2+2],y=g[p*2+3],v=Math.hypot(M-m,y-x),A=-(y-x)/v,E=(M-m)/v;for(let S=0;S<v;S+=45)for(let C of[-1,1])t.push(new Q(m+(M-m)*S/v+A*C*(f.w/2+1),x+(y-x)*S/v+E*C*(f.w/2+1))),e.push([.15,.35,1])}}let s=new Ae(.28,6,4),o=new ue({color:16777215});this.rwLights=new Te(s,o,t.length);let a=new ee,c=new bt;t.forEach((f,g)=>{a.makeTranslation(f.x,.35,f.y),this.rwLights.setMatrixAt(g,a),this.rwLights.setColorAt(g,c.setRGB(...e[g]))}),this.rwLightCols=e,this.group.add(this.rwLights);let l=[];for(let f=1;f<=30;f++)l.push(this.at(-f*30,0));let h=[];for(let f=1;f<=30;f++)for(let g=-6;g<=6;g+=2)h.push(this.at(-f*30,g));this.alsBars=new Te(new Ae(.3,6,4),new ue({color:16773312}),h.length),h.forEach((f,g)=>{a.makeTranslation(f.x,1.2,f.y),this.alsBars.setMatrixAt(g,a)}),this.group.add(this.alsBars);let u=new Wt(.08,.08,1.2,4).translate(0,.6,0),d=new Te(u,new Bt({color:7829367}),l.length);l.forEach((f,g)=>{a.makeTranslation(f.x,0,f.y),d.setMatrixAt(g,a)}),this.group.add(d),this.rabbit=new Te(new Ae(.9,8,6),new ue({color:16777215,transparent:!0,opacity:1,blending:Je,depthWrite:!1}),l.length),l.forEach((f,g)=>{a.makeTranslation(f.x,1.4,f.y),this.rabbit.setMatrixAt(g,a),this.rabbit.setColorAt(g,c.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=l.length,this.papi=[];for(let f=0;f<4;f++){let g=this.at(400,-(this.rwW/2+15+f*9)),p=new it(new Gt(2,1,1.2),new ue({color:16719904}));p.position.set(g.x,.6,g.y),this.group.add(p),this.papi.push(p)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new te,n=new Bt({color:14736596,roughness:.7}),i=new it(new Wt(3.2,4.2,38,16),n);i.position.y=19;let s=new it(new Gt(18,8,14),n);s.position.y=4;let o=new it(new Wt(7.5,4.5,4,8),n);o.position.y=39.5;let a=new it(new Wt(8,7.2,5,8),new Bt({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let c=new it(new Wt(8.6,8.6,1,8),n);c.position.y=47;let l=new it(new Wt(.15,.15,9,5),new Bt({color:13378082}));l.position.y=52,this.beacon=new it(new Ae(.6,8,6),new ue({color:16719904})),this.beacon.position.y=57,this.radar=new it(new Gt(7,1.6,.4),new Bt({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,c,l,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=yr("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new ue({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new it(new Ee(90,7),n),s=null,o=-1e9,a=t.pts;for(let l=0;l<a.length/2;l++){let h=(a[l*2]-t.cx)*this.n.x+(a[l*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=l)}let c=new Q(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(c.x,t.h+4.5,c.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new Q(e[0],e[1]),i=new Q(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(l=>l.p.distanceTo(s)<48))continue;let c=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:c,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new Q(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new Cs(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new ue({color:4245759,transparent:!0,opacity:.8,side:Me,depthWrite:!1}),this.zone=new it(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new it(new Wt(4.8,4.8,14,32,1,!0),new ue({color:4245759,transparent:!0,opacity:.12,side:Me,depthWrite:!1,blending:Je}));e.position.y=7,this.zone.add(e);let n=new Kn(new In({map:yr("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new Q(s.x,s.z):i,this.spotZone=new it(t.clone(),new ue({color:16756768,transparent:!0,opacity:.8,side:Me,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new Kn(new In({map:yr("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=uf[Math.floor(Math.random()*uf.length)],n=Math.random()<t,i=cv(e,n),s=new Bt({vertexColors:!0,metalness:.35,roughness:.35}),o=new te,a=new it(i.body,s);a.castShadow=!0;let c=new it(i.gear,s);c.castShadow=!0;let l=new te;l.add(a,c),o.add(l);let h=(y,v)=>new it(new Ae(v,6,4),new ue({color:y,transparent:!0,blending:Je,depthWrite:!1})),u=h(16719904,.5),d=h(2162496,.5),f=h(16777215,.9),g=h(16777215,.9),p=h(16723984,.6),m=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),d.position.set(i.span,-.4,-i.len*.02-7.4*i.S),f.position.copy(u.position),g.position.copy(d.position),p.position.set(0,2.1*i.S,-i.len*.1),m.position.set(0,-1.2*i.S,i.len*.42),l.add(u,d,f,g,p,m);let x=yr(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let y of[-1,1]){let v=new it(new Ee(3.4*i.S,1.7*i.S),new ue({map:x,transparent:!0}));v.position.set(y*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=y*Math.PI/2,l.add(v)}this.group.add(o);let M={g:o,inner:l,gear:c,a:i,al:e,wide:n,navR:u,navG:d,strL:f,strR:g,bcn:p,land:m,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:ta[Math.floor(Math.random()*ta.length)],gearDown:1,thrust:0};return this.planes.push(M),M}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new Q(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),l=Math.atan2(s,o)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(l)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=Fe.clamp(l,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new Q(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let c=s*2%1,l=new bt;for(let u=0;u<this.alsN;u++){let d=Math.abs((1-c)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,l.setRGB(d,d,d))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,d)=>u.material.color.setHex(d<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(f=>["approach","landing","takeoff","lineup"].includes(f.state)&&!f.cine),d=this._freeStand();if(!u&&d&&this.planes.filter(f=>!f.cine).length<9){let f=this._newPlane();this._startApproach(f)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let d=this.planes[u];if(d!==i){if(this._updatePlane(d,t,h),d.dead){this.group.remove(d.g),this.planes.splice(u,1);continue}this._pose(d,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new Q(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new Q(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new Q(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-Fe.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new Q(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(c=>c.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=ta[Math.floor(Math.random()*ta.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new Q(Math.sin(i.h),Math.cos(i.h)),o=new Q(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=wi(s,{}),c=new Bt({color:o,vertexColors:!0,roughness:.5}),l=new te;l.add(new it(a.paint,c),new it(a.detail,new Bt({vertexColors:!0})));let h=new it(new Ae(.2,6,4),new ue({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,l.add(h),l.scale.setScalar(s==="truck"?.75:1),l.children.forEach(u=>u.castShadow=!0),this.group.add(l),this.vehicles.push({g:l,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let c=Math.atan2(i,s)-e.h;c=Math.atan2(Math.sin(c),Math.cos(c)),e.h+=Fe.clamp(c,-t*1.5,t*1.5);let l=Math.abs(c)>.6?2:5;e.x+=Math.sin(e.h)*l*t,e.z+=Math.cos(e.h)*l*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,c)=>new L(a.x,c,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new L(-3500,520,-9e3),new L(-900,430,-2600),new L(150,380,0),new L(1400,390,1600),new L(400,420,4200),new L(-3e3,480,4e3),new L(-6200,560,-1500),new L(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new fr(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new Q(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new Q(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),c=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let l=Math.atan2(a.x,a.z),h=Math.atan2(c.x*a.z-c.z*a.x,c.x*a.x+c.z*a.z);n.h=l,n.roll+=(Fe.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(Fe.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),c=s.a.S;if(e===0)n.set(s.x-o*70*c,s.y+16*c,s.z-a*70*c),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let l=-a,h=o;n.set(s.x-l*2.3*c+o*2,s.y+.6*c,s.z-h*2.3*c+a*2),i.set(s.x-l*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*c,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new L(s.x,s.y,s.z))>1600)&&(t.camAnchor=new L(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function lv(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new Be(r);return i.colorSpace=pe,i.anisotropy=8,i}var Xl=()=>new Bt({color:6965800,metalness:.85,roughness:.38}),Bs=(r=10127994)=>new Bt({color:r,roughness:.75}),na=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new te,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179)}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new it(new Wt(.22,.45,45,12),new Bt({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new it(new Wt(3.5,4,1.2,24),Bs(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new it(new Ae(.5,12,8),new Bt({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,c=new Ee(o,a,40,16).translate(o/2,0,0),l=new Bt({map:lv(),side:Me,roughness:.75});l.onBeforeCompile=f=>{f.uniforms.uTime=wn.uTime,f.vertexShader=f.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new it(c,l);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new Bt({color:2767402,roughness:.6}),d=new Bt({color:13146744});for(let f of[-1,1]){let g=new te,p=new it(new Gt(.45,1.05,.28),u);p.position.y=1.35;let m=new it(new Gt(.38,.85,.24),u);m.position.y=.42;let x=new it(new Ae(.12,10,8),d);x.position.y=2;let M=new it(new Wt(.16,.13,.12,10),new Bt({color:1976862}));M.position.y=2.12;let y=new it(new Gt(.05,1.2,.05),new Bt({color:2759184}));y.position.set(.3,1.5,.1),g.add(p,m,x,M,y),g.children.forEach(v=>v.castShadow=!0),g.position.set(t+f*5,1.2,e+3.5),this.g.add(g),this.anim.push({type:"guard",g,base:g.position.clone(),s:f})}}_manas(t,e,n,i=1){let s=new te,o=new it(new Wt(3.2,3.8,9,8),Bs(9075824));o.position.y=4.5;let a=new it(new Wt(6,6.5,1,16),Bs(10524808));a.position.y=.5;let c=Xl(),l=new te,h=new it(new Ae(1,16,12),c);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new it(new Wt(.55,.8,2.2,10),c);u.position.set(0,4.3,1.9),u.rotation.x=.7;let d=new it(new Gt(.7,.75,1.6),c);d.position.set(0,5.2,2.8),d.rotation.x=.5;let f=new it(new vi(.35,2.2,8),c);f.position.set(0,2.6,-2.5),f.rotation.x=-.6,l.add(h,u,d,f);for(let[E,S,C]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let _=new it(new Wt(.2,.16,2.4,8).translate(0,-1.2,0),c);_.position.set(E,2.7,S),_.rotation.x=C,l.add(_)}l.rotation.x=-.32,l.position.y=.4;let g=new te,p=new it(new Wt(.55,.7,1.9,10),c);p.position.y=5;let m=new it(new Ae(.42,12,10),c);m.position.y=6.3;let x=new it(new vi(.45,.8,10),c);x.position.y=6.8;let M=new it(new Wt(.16,.16,1.8,8).translate(0,.9,0),c);M.position.set(.6,5.6,0),M.rotation.z=-.5;let y=new it(new Gt(.08,2.4,.18).translate(0,1.2,0),new Bt({color:10518608,metalness:1,roughness:.25}));y.position.set(1.4,7.1,0),y.rotation.z=-.3;let v=new it(new Gt(1.5,1.8,.1),c);v.position.set(0,4.8,-.7),v.rotation.x=.5,g.add(p,m,x,M,y,v);let A=new te;A.add(l,g),A.position.y=9,s.add(o,a,A),s.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new te,i=new Bt({color:8008488,roughness:.55,metalness:.1}),s=new it(new Wt(15,16,1.2,36),Bs(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let d=u/3*Math.PI*2,f=new L(Math.cos(d)*12,1,Math.sin(d)*12),g=new L(Math.cos(d)*9,15,Math.sin(d)*9),p=new L(Math.cos(d)*2.5,21,Math.sin(d)*2.5),m=new Rs(f,g,p),x=new it(new Ro(m,24,1.1,6,!1),i);n.add(x)}let o=new it(new gr(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new it(new Wt(1.6,1.1,.8,16),new Bt({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let c=new te,l=new it(new vi(.9,3.4,10),Xl());l.position.y=1.7;let h=new it(new Ae(.32,10,8),Xl());h.position.y=3.6,c.add(l,h),c.position.set(6.5,1.2,0),n.add(c),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new ne,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new ae(new Float32Array(90*3),3)),s.setAttribute("seed",new ae(o,1));let a=new de({uniforms:{uTime:wn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:Je}),c=new Oi(s,a);c.position.set(t,e,n),c.frustumCulled=!1,this.g.add(c);let l=new Do(16747056,0,30,2);return l.position.set(t,e+1.5,n),this.g.add(l),this.anim.push({type:"firelight",light:l}),c}_mosque(){let t=this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(g.name)&&g.kind===8)||this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть/.test(g.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),c=new Bt({color:15921128,roughness:.5}),l=new Bt({color:5939384,metalness:.5,roughness:.25}),h=new Bt({color:14200896,metalness:1,roughness:.2}),u=new it(new Wt(o,o,5,24),c);u.position.set(e,a+2.5,n);let d=new it(new Ae(o,32,16,0,Math.PI*2,0,Math.PI/2),l);d.position.set(e,a+5,n),d.scale.y=1.15;let f=new it(new Wt(.15,.3,4,8),h);f.position.set(e,a+5+o*1.15+2,n),this.g.add(u,d,f);for(let[g,p]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let m=e+g*(i/2-2),x=n+p*(s/2-2),M=new it(new Wt(1.6,2,52,12),c);M.position.set(m,26,x);let y=new it(new Wt(2.6,2.2,1.4,12),c);y.position.set(m,44,x);let v=new it(new vi(1.7,7,12),l);v.position.set(m,55.5,x);let A=new it(new Wt(.1,.2,2.5,6),h);A.position.set(m,60,x),this.g.add(M,y,v,A),this._col(m,x,2)}this.g.children.slice(-19).forEach(g=>{g.castShadow=!0,g.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new it(new Wt(4.2,4.4,.6,28,1,!0),Bs(12103840));s.position.set(n,.3,i);let o=new it(new xi(4.1,28).rotateX(-Math.PI/2),new Bt({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new ne,c=new Float32Array(140);for(let u=0;u<140;u++)c[u]=Math.random();a.setAttribute("position",new ae(new Float32Array(140*3),3)),a.setAttribute("seed",new ae(c,1));let l=new de({uniforms:{uTime:wn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new Oi(a,l);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new te,i=new Bt({color:15263976,metalness:.6,roughness:.3}),s=16,o=new te,a=new it(new gr(s,.25,6,48),i);o.add(a);let c=a.clone();c.position.z=1.6,o.add(c);let l=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,d=new it(new Wt(.08,.08,s,4),i);d.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),d.rotation.z=u-Math.PI/2,o.add(d);let f=new it(new Gt(1.4,1.5,1.4),new Bt({color:l[h%4]}));f.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(f),this.cabins.push({cab:f,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new it(new Wt(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let d=u.clone();d.position.z=2.2,n.add(d)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new te,i=new Bt({color:10134688,metalness:.6,roughness:.35}),s=new it(new Wt(.5,.75,13,12).rotateX(Math.PI/2),i),o=new it(new vi(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new Mn;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let c=new it(new Ln(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),l=new it(new Gt(.15,2.4,2.6),i);l.position.set(0,1.4,-5);let h=new it(new Wt(.6,1,6,8),Bs(8947848));h.position.y=-3.4,n.add(s,o,c,l,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var ia=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<e;a++){let c=Math.random()*2-1;s=(s+.02*c)/1.02,i[a]=c*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=2,this.osc=[];for(let[a,c,l]of[["sawtooth",1,.35],["sawtooth",1.01,.3],["square",.5,.25],["triangle",2,.15]]){let h=t.createOscillator();h.type=a;let u=t.createGain();u.gain.value=l,h.connect(u),u.connect(this.engFilter),h.start(),this.osc.push([h,c])}this.engFilter.connect(this.engGain),this.engGain.connect(this.master);let o=(a,c,l)=>{let h=t.createBufferSource();h.buffer=n,h.loop=!0;let u=t.createBiquadFilter();u.type=a,u.frequency.value=c,u.Q.value=l;let d=t.createGain();return d.gain.value=0,h.connect(u),u.connect(d),d.connect(this.master),h.start(Math.random()*.5),{s:h,fl:u,g:d}};this.wind=o("bandpass",600,.4),this.tyre=o("bandpass",1800,6),this.city=o("lowpass",420,.5),this.jet=o("bandpass",900,.6),this.jetLow=o("lowpass",140,1),this.road=o("lowpass",220,.8),this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?e.rpm:0,o=28+s/60*1;for(let[h,u]of this.osc)h.frequency.setTargetAtTime(o*u,i,.03);let a=n.throttle||0;this.engFilter.frequency.setTargetAtTime(350+s*.35+a*900,i,.05),this.engGain.gain.setTargetAtTime(n.inFlight?0:.05+a*.08+s/7e3*.06,i,.05);let c=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(c/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+c*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,c/40*.25),i,.1),this.tyre.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.5,Math.max(0,(e.slip-.18)*1.6))*(c>5?1:0),i,.04),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let l=n.jet||0;this.jet.g.gain.setTargetAtTime(l*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(l*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+l*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=2+Math.random()*6/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=2200;for(let c of[405*n,507*n]){let l=i.createOscillator();l.type="square",l.frequency.value=c,l.connect(a),l.start(s),l.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let c=e.createOscillator();c.type="triangle",c.frequency.setValueAtTime(180+Math.random()*120,n),c.frequency.exponentialRampToValueAtTime(60,n+.3);let l=e.createGain();l.gain.setValueAtTime(a*.5,n),l.gain.exponentialRampToValueAtTime(.001,n+.35),c.connect(l),l.connect(this.master),c.start(n),c.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let c=t.createBufferSource();c.buffer=this.noise;let l=t.createBiquadFilter();l.type="highpass",l.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),c.connect(l),l.connect(h),h.connect(this.master),c.start(e+a),c.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var Qn=150,Ye=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],sa=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=3e3,this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Ye){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Ye.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color,this.owned=t.owned,this.jobsDone=t.jobs||0)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:this.homeCar||t?.type,color:this.homeColor??t?.color,owned:[...this.owned||["sedan"]],jobs:this.jobsDone||0}))}catch{}}issueFine(t,e,n,i){this.money-=e;let s={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i};this.fines.push(s),this.audio.fine(),this.hud.showFine(s)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,c=this.speedState;if(a>Qn){if(c.over+=t,c.maxSpeed=Math.max(c.maxSpeed,a),c.armed&&c.over>.6){c.armed=!1,c.lastFine=this.time;let l=Math.round(c.maxSpeed),h=l>200?750:l>170?500:300,u=n.street?` on ${n.street}`:"";o(d=>this.issueFine("Speeding",h,`${l} km/h in a 150 km/h zone${u}`,d))}!c.armed&&this.time-c.lastFine>12&&(c.armed=!0,c.maxSpeed=0,c.over=0)}else a<Qn-5&&(c.armed=!0,c.over=0,c.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let l=n.road;for(let f of l.e.signals){let g=Math.sin(e.h),p=Math.cos(e.h),m=g*l.dx+p*l.dz,x=m>=0?0:1;if(f.dir!==x||Math.abs(m)<.7)continue;let M=x?l.e.len-l.s:l.s,y=e._sOnEdge&&e._sOnEdge.e===l.e?e._sOnEdge.s:null;if(y!==null&&y<f.stop&&M>=f.stop){let v=x?-l.lat:l.lat;(l.e.ow||v>-.5)&&this.map.signalState(f.cluster,f.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(A=>this.issueFine("Red light",100,`Ran a red light${n.street?" on "+n.street:""}`,A)))}}let h=Math.sin(e.h),u=Math.cos(e.h),d=h*l.dx+u*l.dz>=0?0:1;e._sOnEdge={e:l.e,s:d?l.e.len-l.s:l.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let l=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;l<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",150,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=l<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(l=>this.issueFine("Runway incursion",1e3,"Entered the active runway at Manas International Airport",l)))):(this.runwayT=0,n.runway=!1)}checkLandmarks(t){for(let e of Ye)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Ye.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,c=this.map.nearestRoad(o,a,80,m=>m.cls>=1&&m.cls<=4);if(!c)continue;let l=c.lat>=0?1:-1,h=c.e.w/2+1.2,u=c.x-c.dz*h*l,d=c.z+c.dx*h*l;if(this.map.insideBuilding(u,d,.5))continue;let f=Ye.filter(m=>Math.hypot(m.x-u,m.z-d)>700&&(!m.airport||Math.random()<.5)),g=f[Math.floor(Math.random()*f.length)],p=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:d,dest:g,passenger:p[Math.floor(Math.random()*p.length)],t:0,start:null},this.setRoute(u,d,"Pick up "+this.mission.passenger),e){let m={mode:"plaza",zone:{x:u,z:d,r:.1,active:!0,count:0},x:u,z:d,h:0,tx:u,tz:d,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};m.shirt=15909376,m.pants=2238522,m.skin=14200976,m.hairC=1709072,m.scale=1,m.speed=1.2,m.phase=0,m.fixed=!0,e.list.push(m),this.mission.ped=m}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,c=i.fare+a;this.money+=c,this.audio.cash(),this.hud.toast(`Fare paid: ${Nn(i.fare)} coins. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],c=this.route[s+2],l=this.route[s+3],h=c-o,u=l-a,d=h*h+u*u||1,f=((t.x-o)*h+(t.z-a)*u)/d;f=Math.max(0,Math.min(1,f)),i=Math.min(i,Math.hypot(t.x-o-h*f,t.z-a-u*f))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let c=0;c<e.length/2;c++){c>0&&(o+=Math.hypot(e[c*2]-e[c*2-2],e[c*2+1]-e[c*2-1]));let l=Math.max(0,c-1),h=Math.min(e.length/2-1,c+1),u=e[h*2]-e[l*2],d=e[h*2+1]-e[l*2+1],f=Math.hypot(u,d)||1;u/=f,d/=f;let g=1.1;if(n.push(e[c*2]-d*g,.22,e[c*2+1]+u*g,e[c*2]+d*g,.22,e[c*2+1]-u*g),i.push(o,0,o,1),c>0){let p=c*2;s.push(p-2,p,p-1,p-1,p,p+1)}}let a=new ne;a.setAttribute("position",new Vt(n,3)),a.setAttribute("uv",new Vt(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new de({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:Me})),this.routeMesh=new it(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function Nn(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var ff=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],df=[5,4.2,3.4,2.6,2,1.6,1.2],se=r=>document.getElementById(r),ra=class{constructor(t){this.map=t,this.speedo=se("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=se("minimap"),this.mctx=this.mini.getContext("2d"),this.big=se("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,c=Math.min(n,i)/2-6*s,l=t.speed*3.6,h=260,u=Math.PI*.75,d=Math.PI*2.25,f=x=>u+(d-u)*Math.min(1,x/h),g=e.createRadialGradient(o,a,c*.2,o,a,c);g.addColorStop(0,"rgba(20,24,30,0.92)"),g.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=g,e.beginPath(),e.arc(o,a,c,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,c-10*s,f(Qn),d),e.stroke(),e.lineWidth=7*s,e.strokeStyle=l>Qn?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,c-10*s,u,f(l)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let x=0;x<=h;x+=10){let M=f(x),y=x%20===0;e.strokeStyle=x>Qn?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(y?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(M)*(c-18*s),a+Math.sin(M)*(c-18*s)),e.lineTo(o+Math.cos(M)*(c-(y?28:23)*s),a+Math.sin(M)*(c-(y?28:23)*s)),e.stroke(),y&&x%40===0&&e.fillText(x,o+Math.cos(M)*(c-40*s),a+Math.sin(M)*(c-40*s))}let p=f(l);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(p)*12*s,a-Math.sin(p)*12*s),e.lineTo(o+Math.cos(p)*(c-22*s),a+Math.sin(p)*(c-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=l>Qn?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(l),o,a+c*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+c*.62);let m=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,c*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=m>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,c*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,m)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gearLabel||"1",o,a-c*.12)}drawMini(t,e,n,i,s){let o=this.mctx,a=this.mini.width,c=this.mini.height,l=this.dpr,h=.55*l*(t.speed>25?.75:1);o.save(),o.clearRect(0,0,a,c),o.beginPath(),o.arc(a/2,c/2,a/2-2,0,7),o.clip(),o.fillStyle="#1d2329",o.fillRect(0,0,a,c),o.translate(a/2,c/2+c*.12),o.rotate(t.h+Math.PI),o.scale(h,h),o.translate(-t.x,-t.z);let u=a/h*.8,d=400,f=Math.ceil(u/d),g=Math.floor(t.x/d),p=Math.floor(t.z/d);o.fillStyle="#2f3741";for(let y=g-f;y<=g+f;y++)for(let v=p-f;v<=p+f;v++){let A=this.map.chunks.get(Oe(y,v));if(A)for(let E of A.buildings){if(Math.abs(E.cx-t.x)>u||Math.abs(E.cz-t.z)>u)continue;let S=E.pts;o.beginPath(),o.moveTo(S[0],S[1]);for(let C=2;C<S.length;C+=2)o.lineTo(S[C],S[C+1]);o.fill()}}o.lineCap="round",o.lineJoin="round";for(let y=6;y>=0;y--){o.strokeStyle=ff[y];for(let v=g-f;v<=g+f;v++)for(let A=p-f;A<=p+f;A++){let E=this.map.chunks.get(Oe(v,A));if(E)for(let S of E.edges){if(S.cls!==y)continue;o.lineWidth=Math.max(S.w,3/h);let C=S.pts;o.beginPath(),o.moveTo(C[0],C[1]);for(let _=2;_<C.length;_+=2)o.lineTo(C[_],C[_+1]);o.stroke()}}}if(i){o.strokeStyle="#8a9098",o.lineWidth=i.rwW,o.beginPath(),o.moveTo(i.R0.x,i.R0.y),o.lineTo(i.R1.x,i.R1.y),o.stroke();for(let y of i.planes)o.fillStyle="#ffffff",o.beginPath(),o.arc(y.x,y.z,14,0,7),o.fill()}if(n.route){o.strokeStyle="#3fc8ff",o.lineWidth=6/h*l,o.globalAlpha=.9;let y=n.route;o.beginPath(),o.moveTo(y[0],y[1]);for(let v=2;v<y.length;v+=2)o.lineTo(y[v],y[v+1]);o.stroke(),o.globalAlpha=1}o.fillStyle="#ff9a3a";for(let y of e.cars)Math.abs(y.x-t.x)<u&&Math.abs(y.z-t.z)<u&&o.fillRect(y.x-1.6,y.z-1.6,3.2,3.2);for(let y of Ye)y.x===void 0||Math.abs(y.x-t.x)>u||Math.abs(y.z-t.z)>u||(o.fillStyle=n.visited.has(y.id)?"#6ad06a":"#ffd84a",o.beginPath(),o.arc(y.x,y.z,6/h*l,0,7),o.fill());if(n.routeTarget&&(o.fillStyle="#ff3a6a",o.beginPath(),o.arc(n.routeTarget.x,n.routeTarget.z,8/h*l,0,7),o.fill()),s)for(let y of s.players.values())o.fillStyle="#3ddc84",o.beginPath(),o.arc(y.x,y.z,6/h*l,0,7),o.fill();o.restore(),o.save(),o.translate(a/2,c/2+c*.12),o.fillStyle="#3fc8ff",o.strokeStyle="#fff",o.lineWidth=2*l,o.beginPath(),o.moveTo(0,-10*l),o.lineTo(7*l,8*l),o.lineTo(0,4*l),o.lineTo(-7*l,8*l),o.closePath(),o.fill(),o.stroke(),o.restore();let m=t.h+Math.PI;o.fillStyle="#ff5050",o.font=`700 ${12*l}px Inter, Arial`,o.textAlign="center",o.textBaseline="middle";let x=a/2+Math.sin(m)*(a/2-14*l),M=c/2-Math.cos(m)*(c/2-14*l);o.fillText("N",x,M),o.beginPath(),o.arc(a/2,c/2,a/2-2,0,7),o.strokeStyle="rgba(255,255,255,0.25)",o.lineWidth=2*l,o.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",e=>{t={x:e.clientX,y:e.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",e=>{if(!t)return;let n=e.clientX-t.x,i=e.clientY-t.y;Math.abs(n)+Math.abs(i)>4&&(t.moved=!0),this.mapView.x=t.vx-n*this.dpr/this.mapView.s,this.mapView.z=t.vz-i*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",e=>{if(t&&!t.moved&&this.onMapClick){let n=this.big.getBoundingClientRect(),i=this.mapView.x+((e.clientX-n.left)*this.dpr-this.big.width/2)/this.mapView.s,s=this.mapView.z+((e.clientY-n.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(i,s,e.shiftKey)}t=null}),this.big.addEventListener("wheel",e=>{e.preventDefault();let n=e.deltaY<0?1.2:1/1.2;this.mapView.s=Math.max(.02,Math.min(2.5,this.mapView.s*n)),this.mapDirty=!0},{passive:!1})}drawBigMap(t,e,n,i){let s=this.bctx,o=this.big.width,a=this.big.height,c=this.mapView,l=c.s;s.fillStyle="#161b20",s.fillRect(0,0,o,a),s.save(),s.translate(o/2,a/2),s.scale(l,l),s.translate(-c.x,-c.z);let h=c.x-o/2/l,u=c.x+o/2/l,d=c.z-a/2/l,f=c.z+a/2/l,g={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let y of this.map.areaList){let v=g[y[0]];if(!v)continue;let A=y[1];if(!(A[0]*.1<h-2e3||A[0]*.1>u+2e3||A[1]*.1<d-2e3||A[1]*.1>f+2e3)){s.fillStyle=v,s.beginPath(),s.moveTo(A[0]*.1,A[1]*.1);for(let E=2;E<A.length;E+=2)s.lineTo(A[E]*.1,A[E+1]*.1);s.fill()}}if(l>.25){s.fillStyle="#2c333b";for(let y of this.map.buildings){if(y.cx<h||y.cx>u||y.cz<d||y.cz>f)continue;let v=y.pts;s.beginPath(),s.moveTo(v[0],v[1]);for(let A=2;A<v.length;A+=2)s.lineTo(v[A],v[A+1]);s.fill()}}s.lineCap="round",s.lineJoin="round";for(let y=6;y>=0;y--)if(!(l<.08&&y>=5)){s.strokeStyle=ff[y],s.lineWidth=Math.max(df[y]*.6/l*this.dpr*.5,(this.map.edges[0],0))||1,s.beginPath();for(let v of this.map.edges){if(v.cls!==y)continue;let A=v.pts;if(!(A[0]<h-500||A[0]>u+500||A[1]<d-500||A[1]>f+500)){s.moveTo(A[0],A[1]);for(let E=2;E<A.length;E+=2)s.lineTo(A[E],A[E+1])}}s.lineWidth=Math.max(df[y]*.5/l*this.dpr,(7-y)*1.2),l>.5&&(s.lineWidth=Math.max(s.lineWidth,6)),s.stroke()}if(n&&(s.strokeStyle="#9aa0a8",s.lineWidth=Math.max(55,3/l),s.beginPath(),s.moveTo(n.R0.x,n.R0.y),s.lineTo(n.R1.x,n.R1.y),s.stroke()),e.route){s.strokeStyle="#3fc8ff",s.lineWidth=5/l*this.dpr;let y=e.route;s.beginPath(),s.moveTo(y[0],y[1]);for(let v=2;v<y.length;v+=2)s.lineTo(y[v],y[v+1]);s.stroke()}s.restore();let p=(y,v)=>[(y-c.x)*l+o/2,(v-c.z)*l+a/2];s.font=`600 ${12*this.dpr}px Inter, Arial`,s.textAlign="center";for(let y of Ye){if(y.x===void 0)continue;let[v,A]=p(y.x,y.z);v<-50||v>o+50||A<-50||A>a+50||(s.fillStyle=e.visited.has(y.id)?"#6ad06a":"#ffd84a",s.beginPath(),s.arc(v,A,5*this.dpr,0,7),s.fill(),s.fillStyle="rgba(0,0,0,0.6)",s.fillText(y.name,v+1,A-9*this.dpr+1),s.fillStyle="#fff",s.fillText(y.name,v,A-9*this.dpr))}if(l>.18){s.font=`${10*this.dpr}px Inter, Arial`,s.fillStyle="rgba(255,255,255,0.75)";let y=new Set;for(let v of this.map.edges){if(v.cls>2||v.name<0||v.len<150)continue;let A=this.map.names[v.name],E=A[1]||A[0],S=Math.floor(v.pts.length/4)*2,[C,_]=p(v.pts[S],v.pts[S+1]);if(C<0||C>o||_<0||_>a)continue;let w=E+Math.round(C/220)+","+Math.round(_/220);y.has(w)||(y.add(w),s.fillText(E,C,_))}}if(i)for(let y of i.players.values()){let[v,A]=p(y.x,y.z);s.fillStyle="#3ddc84",s.beginPath(),s.arc(v,A,6*this.dpr,0,7),s.fill(),s.fillStyle="#fff",s.fillText(y.name,v,A-10*this.dpr)}if(e.routeTarget){let[y,v]=p(e.routeTarget.x,e.routeTarget.z);s.fillStyle="#ff3a6a",s.beginPath(),s.arc(y,v,7*this.dpr,0,7),s.fill()}let[m,x]=p(t.x,t.z);s.save(),s.translate(m,x),s.rotate(Math.PI-t.h),s.fillStyle="#3fc8ff",s.strokeStyle="#fff",s.lineWidth=2*this.dpr;let M=this.dpr;s.beginPath(),s.moveTo(0,-11*M),s.lineTo(8*M,9*M),s.lineTo(0,4*M),s.lineTo(-8*M,9*M),s.closePath(),s.fill(),s.stroke(),s.restore(),s.fillStyle="rgba(255,255,255,0.5)",s.textAlign="right",s.font=`${10*this.dpr}px Inter, Arial`,s.fillText("Map data \xA9 OpenStreetMap contributors",o-10*this.dpr,a-10*this.dpr)}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t&&t!==this._street&&(this._street=t,se("street").innerHTML=`${t}<small>${e||""}</small>`,se("street").classList.add("show"),clearTimeout(this._stTo),this._stTo=setTimeout(()=>se("street").classList.remove("show"),4e3))}setMoney(t){let e=Nn(t);if(e!==this._money){let n=this._mv!==void 0&&t>this._mv;if(this._money=e,this._mv=t,se("money").textContent=e,se("coins").classList.toggle("neg",t<0),n){let i=se("coins");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}}setClock(t,e){this.hour=t;let n=this.clockText()+(e!=null?` \xB7 <span class="dot ${e>0?"on":""}"></span>${e+1}`:"");n!==this._clk&&(this._clk=n,se("clock").innerHTML=n)}setLimit(t,e,n){let i=t>Qn;se("limit").classList.toggle("show",t>Qn-12),se("limit").classList.toggle("over",i);let s=n?"ACTIVE RUNWAY \u2013 LEAVE NOW":e?"WRONG WAY":"";s!==this._w&&(this._w=s,se("warn").textContent=s,se("warn").classList.toggle("show",!!s))}setMission(t){t!==this._mission&&(this._mission=t,se("mission").innerHTML=t||"",se("mission").classList.toggle("show",!!t))}toast(t,e=3){let n=se("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=se("fine");se("fineKind").textContent=t.kind.toUpperCase(),se("fineAmt").textContent="\u2212"+Nn(t.amount)+" coins",se("fineDetail").textContent=t.detail,se("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=se("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=se("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=se("discover");se("discName").textContent=t.name,se("discLocal").textContent=t.local||"",se("discFact").textContent=t.fact,se("discCount").textContent=`Landmark ${e}/${n} \xB7 +500 coins`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=se("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),se("fhAlt").textContent=Math.round(t.alt)+" m",se("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",se("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",se("fhStage").textContent=t.stage,se("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var hv=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar","Saltanat","Ulan","Aidana","Bekzat","Kymbat","Marat"],Bn=r=>r[Math.floor(Math.random()*r.length)],Gi={taxi:{name:"Taxi driver",icon:"\u{1F695}",desc:"Pick up passengers anywhere in the city"},bus:{name:"Bus driver",icon:"\u{1F68C}",desc:"Drive a city bus route, stop at every bus stop",car:"bus"},marshrutka:{name:"Marshrutka driver",icon:"\u{1F690}",desc:"Minibus route \u2013 faster, fewer passengers",car:"van"},courier:{name:"Courier",icon:"\u{1F4E6}",desc:"Deliver food & parcels from real shops"}},oa=class{constructor(t,e,n,i,s){this.map=t,this.game=e,this.hud=n,this.audio=i,this.peds=s,this.active=null,this.marker=null,this.completed=0,this.shops=[];for(let o of t.chunks.values())for(let a of o.signs)["cafe","restaurant","fast_food","supermarket","convenience","pharmacy","bakery","clothes"].includes(a.kind)&&this.shops.push(a)}_marker(t,e,n,i=16760864){if(!this.markerMesh){let s=new te,o=new it(new Cs(3.2,3.8,48).rotateX(-Math.PI/2),new ue({color:i,transparent:!0,opacity:.9,depthWrite:!1}));o.position.y=.25;let a=new it(new Wt(3.5,3.5,40,32,1,!0),new ue({color:i,transparent:!0,opacity:.1,side:Me,depthWrite:!1,blending:Je}));a.position.y=20,s.add(o,a),this.markerMesh=s,this.ring=o,this.beam=a}this.ring.material.color.setHex(i),this.beam.material.color.setHex(i),this.markerMesh.position.set(e,0,n),this.markerMesh.parent||t.add(this.markerMesh),this.markerMesh.visible=!0}_hideMarker(){this.markerMesh&&(this.markerMesh.visible=!1)}_curbPoint(t,e,n=120){let i=this.map.nearestRoad(t,e,n,a=>a.cls>=1&&a.cls<=5);if(!i)return null;let s=i.lat>=0?1:-1,o=i.e.w/2+1.3;return{x:i.x-i.dz*o*s,z:i.z+i.dx*o*s,roadX:i.x-i.dz*(i.e.w/2-1.5)*s,roadZ:i.z+i.dx*(i.e.w/2-1.5)*s}}_spawnPed(t,e,n=!1,i){let s={mode:"plaza",zone:{x:t,z:e,r:.1,active:!0,count:0},x:t,z:e,h:0,tx:t,tz:e,idle:1e9,ex:0,ez:0,dodge:0,wave:n,fixed:!0};return s.shirt=i??Bn([15909376,1981018,9054794,15263976,3890490]),s.pants=2238522,s.skin=Bn([14200976,13146744,14728864]),s.hairC=1709072,s.scale=.95+Math.random()*.1,s.speed=1.3,s.phase=0,this.peds.list.push(s),s}_removePed(t){let e=this.peds.list.indexOf(t);e>=0&&this.peds.list.splice(e,1)}start(t,e,n,i){if(this.stop(e,i,!0),t==="taxi")return this._startTaxi(e,n);if(t==="courier")return this._startCourier(e,n);if(t==="bus"||t==="marshrutka")return this._startBus(t,e,n,i)}stop(t,e,n){let i=this.active;i&&(i.ped&&this._removePed(i.ped),i.boarders&&i.boarders.forEach(s=>this._removePed(s)),i.prevCar&&e&&e(i.prevCar.type,i.prevCar.color,!0),this.active=null,this._hideMarker(),this.game.clearRoute(),n||this.hud.toast("Shift ended",1.5))}_startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=this._curbPoint(t.x+Math.cos(i)*s,t.z+Math.sin(i)*s,80);if(!o||this.map.insideBuilding(o.x,o.z,.5))continue;let a=Ye.filter(l=>l.x!==void 0&&Math.hypot(l.x-o.x,l.z-o.z)>700&&(!l.airport||Math.random()<.35)),c=Bn(a);if(Math.random()<.5&&this.shops.length){let l=Bn(this.shops);Math.hypot(l.x-o.x,l.z-o.z)>600&&(c={name:l.name,x:l.x,z:l.z})}return this.active={type:"taxi",stage:"pickup",x:o.x,z:o.z,dest:c,passenger:Bn(hv),t:0,damage0:t.damage},this.active.ped=this._spawnPed(o.x,o.z,!0,15909376),this.game.setRoute(o.x,o.z,"Passenger"),this._marker(e,o.x,o.z,16760864),this.audio.chime(),this.hud.toast(`\u{1F695} <b>${this.active.passenger}</b> is waiting for a taxi`,3),!0}return!1}_startCourier(t,e){let n=this.shops.filter(l=>{let h=Math.hypot(l.x-t.x,l.z-t.z);return h>120&&h<900});if(!n.length)return!1;let i=Bn(n),s=this._curbPoint(i.x,i.z,60)||{x:i.x,z:i.z},o=null;for(let l=0;l<60&&!o;l++){let h=this.map.buildings[Math.floor(Math.random()*this.map.buildings.length)],u=Math.hypot(h.cx-s.x,h.cz-s.z);u>900&&u<3200&&h.h>3&&(o=h)}if(!o)return!1;let a=this._curbPoint(o.cx,o.cz,80)||{x:o.cx,z:o.cz},c={cafe:"coffee & samsa",restaurant:"plov & lagman",fast_food:"shawarma",supermarket:"groceries",convenience:"a parcel",pharmacy:"medicine",bakery:"fresh nan",clothes:"a clothes parcel"}[i.kind]||"a parcel";return this.active={type:"courier",stage:"pickup",x:s.x,z:s.z,shop:i,item:c,dest:{name:"Customer",x:a.x,z:a.z},t:0,damage0:t.damage},this.game.setRoute(s.x,s.z,i.name),this._marker(e,s.x,s.z,4251776),this.audio.chime(),this.hud.toast(`\u{1F4E6} Pick up <b>${c}</b> at <b>${i.name}</b>`,3),!0}_startBus(t,e,n,i){let s=this.map.busStopList,o=s.map(a=>({s:a,d:Math.hypot(a[0]-e.x,a[1]-e.z)})).filter(a=>a.d<1500).sort((a,c)=>a.d-c.d).slice(0,12);if(!o.length)return this.hud.toast("No bus stops nearby \u2013 drive into the city",2),!1;for(let a=0;a<12;a++){let c=Bn(o).s,l=s.filter(M=>{let y=Math.hypot(M[0]-c[0],M[1]-c[1]);return y>2500&&y<5500});if(!l.length)continue;let h=Bn(l),u=this.map.route(c[0],c[1],h[0],h[1]);if(!u||u.length<8)continue;let d=[],f=0;for(let M=0;M<u.length-2;M+=2){let y=u[M],v=u[M+1],A=u[M+2],E=u[M+3],S=A-y,C=E-v,_=Math.hypot(S,C)||1;for(let w of s){if(Math.abs(w[0]-y)>_+25||Math.abs(w[1]-v)>_+25)continue;let b=((w[0]-y)*S+(w[1]-v)*C)/(_*_);if(b<0||b>1)continue;let z=y+S*b,D=v+C*b,N=((w[0]-y)*-C+(w[1]-v)*S)/_;Math.abs(N)<22&&N>-4&&d.push({x:w[0],z:w[1],d:f+b*_,px:z,pz:D})}f+=_}d.sort((M,y)=>M.d-y.d);let g=[];for(let M of d)(!g.length||M.d-g[g.length-1].d>220)&&g.push(M);if(g.length<4)continue;let p=Bn(t==="bus"?["7","20","31","35","38","42","48","52","62","64"]:["107","110","126","144","150","174","192","206","212","238","246","265"]);this.active={type:t,stage:"drive",stops:g.slice(0,12),i:0,num:p,t:0,pax:0,earned:0,boarders:[],prevCar:{type:e.type,color:e.color}},i(Gi[t].car,t==="bus"?2783802:16053492,!1);let m=this.active.stops[0],x=this.map.nearestRoad(m.px,m.pz,40,M=>M.cls<=4);if(x){let M=this.map.laneOffset(x.e,(x.e.ow,x.e.lanes-1)),y=u[2]-u[0],v=u[3]-u[1],A=x.dx,E=x.dz;A*y+E*v<0&&(A=-A,E=-E),e.place(x.x-E*M,x.z+A*M,Math.atan2(A,E))}return this.active.i=1,this._nextStop(n),this.audio.chime(),this.hud.toast(`${Gi[t].icon} Route <b>${p}</b>: ${g.length} stops. Stop at each bus stop to pick up passengers.`,4),!0}return this.hud.toast("Could not build a route here \u2013 try on a main avenue",2),!1}_nextStop(t){let e=this.active,n=e.stops[e.i];this.game.setRoute(n.x,n.z,`Stop ${e.i+1}/${e.stops.length}`),this._marker(t,n.px,n.pz,4235519),e.boarders.forEach(s=>this._removePed(s)),e.boarders=[];let i=1+Math.floor(Math.random()*(e.type==="bus"?6:4));for(let s=0;s<i;s++)e.boarders.push(this._spawnPed(n.x+(Math.random()-.5)*4,n.z+(Math.random()-.5)*3,!1))}update(t,e,n,i){let s=this.active;return s?(s.t+=t,this.markerMesh&&(this.ring.rotation.y+=t,this.beam.material.opacity=.08+.05*Math.sin(s.t*4)),s.type==="taxi"||s.type==="courier"?this._updateAB(t,e,n):this._updateBus(t,e,n,i)):null}_updateAB(t,e,n){let i=this.active,s=Math.hypot(e.x-i.x,e.z-i.z);if(i.ped&&i.stage==="pickup"&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.moving=!1),i.stage==="pickup"&&s<10&&e.speed<1.5)return i.ped?(i.stage="boarding",i.ped.wave=!1,i.ped.tx=e.x,i.ped.tz=e.z,i.ped.idle=0,i.ped.zone.r=.1,i.bt=0):this._beginRide(e,n),null;if(i.stage==="boarding"){i.bt+=t;let o=i.ped,a=e.x-o.x,c=e.z-o.z,l=Math.hypot(a,c);return l>2&&i.bt<5?(o.x+=a/l*1.6*t,o.z+=c/l*1.6*t,o.h=Math.atan2(a,c),o.moving=!0,o.phase+=t*8):(this._removePed(o),i.ped=null,this.audio.blip(520,.06),this._beginRide(e,n)),null}if(i.stage==="ride"&&s<14&&e.speed<1.5){let o=i.t-i.t0,a=i.dist,c=i.type==="taxi"?120+a/1e3*55:90+a/1e3*45,l=a/1e3*95+35,h=Math.max(0,e.damage-i.damage0),u=o<l?Math.min(c*.4,(l-o)*1.2):0,d=h*(i.type==="courier"?6:3),f=Math.max(1,Math.min(5,Math.round(5-h/8-Math.max(0,o-l)/40))),g=Math.max(20,Math.round((c+u-d)*(.6+f*.1)/5)*5);this.game.money+=g,this.completed++,this.audio.cash(),this.hud.toast(`${i.type==="taxi"?"\u{1F695}":"\u{1F4E6}"} +${g} coins \xB7 ${"\u2605".repeat(f)}${"\u2606".repeat(5-f)}${i.type==="taxi"?` \xB7 ${i.passenger}: "Rahmat!"`:""}`,4);let p=i.type;return this.active=null,this._hideMarker(),this.game.clearRoute(),this.nextIn=3,this.nextType=p,{done:!0,coins:g}}return null}_beginRide(t,e){let n=this.active;n.stage="ride",n.t0=n.t,n.x=n.dest.x,n.z=n.dest.z,n.dist=Math.hypot(n.x-t.x,n.z-t.z),this.game.setRoute(n.x,n.z,n.dest.name),this._marker(e,n.x,n.z,n.type==="taxi"?16728160:4251776),this.audio.chime(),this.hud.toast(n.type==="taxi"?`${n.passenger}: "Salam! To ${n.dest.name}, please."`:`\u{1F4E6} Got ${n.item}. Deliver it carefully!`,3)}_updateBus(t,e,n,i){let s=this.active,o=s.stops[s.i],a=Math.hypot(e.x-o.px,e.z-o.pz);if(s.stage==="drive"&&a<14&&e.speed<1&&(s.stage="doors",s.dt=0,this.audio.blip(440,.1)),s.stage==="doors"){s.dt+=t;let c=0;for(let l of s.boarders){if(l.gone)continue;let h=e.x-l.x,u=e.z-l.z,d=Math.hypot(h,u);d<2.8||s.dt>7?(l.gone=!0,this._removePed(l),s.pax++,this.game.money+=s.type==="bus"?15:20,s.earned+=s.type==="bus"?15:20,this.audio.blip(880,.03,.05)):(l.x+=h/d*1.7*t,l.z+=u/d*1.7*t,l.h=Math.atan2(h,u),l.moving=!0,l.phase+=t*8,c++)}if(e.speed>2&&(s.stage="drive",this.hud.toast("You left before everyone boarded!",1.5)),!c&&s.dt>2.5){if(s.i++,s.i>=s.stops.length){let l=150+s.stops.length*20;this.game.money+=l,s.earned+=l,this.completed++,this.audio.cash(),this.hud.toast(`\u{1F3C1} Route ${s.num} complete! ${s.pax} passengers \xB7 +${s.earned} coins`,5);let h=s.prevCar;return this.active=null,this._hideMarker(),this.game.clearRoute(),i(h.type,h.color,!0),{done:!0,coins:s.earned}}s.stage="drive",this._nextStop(n)}}return null}status(t){let e=this.active;return e?e.type==="taxi"?e.stage==="ride"?`\u{1F695} ${e.passenger} \u2192 ${e.dest.name}`:`\u{1F695} Pick up ${e.passenger}`:e.type==="courier"?e.stage==="ride"?`\u{1F4E6} Deliver ${e.item}`:`\u{1F4E6} Pick up at ${e.shop.name}`:`${Gi[e.type].icon} Route ${e.num} \xB7 stop ${Math.min(e.i+1,e.stops.length)}/${e.stops.length} \xB7 ${e.pax} pax`:null}};var uv="wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket",pf="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU",ql="realtime:bskdrive-world-v1";function fv(){try{let r=localStorage.getItem("bd_uid");return r||(r=Math.random().toString(36).slice(2,10),localStorage.setItem("bd_uid",r)),r}catch{return Math.random().toString(36).slice(2,10)}}function mf(r,t="#ffffff"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font="700 30px Inter, Arial";let i=Math.min(248,n.measureText(r).width+28);n.fillStyle="rgba(10,14,20,0.72)";let s=18,o=(256-i)/2;n.beginPath(),n.moveTo(o+s,8),n.arcTo(o+i,8,o+i,56,s),n.arcTo(o+i,56,o,56,s),n.arcTo(o,56,o,8,s),n.arcTo(o,8,o+i,8,s),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,33);let a=new Be(e);a.colorSpace=pe;let c=new Kn(new In({map:a,depthTest:!0,transparent:!0}));return c.scale.set(4.2,1.05,1),c}var aa=class{constructor(t){this.scene=t,this.id=fv(),this.players=new Map,this.ws=null,this.ref=1,this.joined=!1,this.status="offline",this.enabled=!1,this.sendT=0,this.hbT=0,this.onChat=null,this.onJoin=null,this.lastSent=null}connect(t){this.name=(t||"Driver").slice(0,18),this.enabled=!0,this._open()}disconnect(){if(this.enabled=!1,this.ws)try{this._push("bye",{i:this.id}),this.ws.close()}catch{}this.ws=null,this.joined=!1,this.status="offline";for(let t of[...this.players.keys()])this._drop(t)}_open(){if(!this.enabled)return;this.status="connecting";let t;try{t=new WebSocket(`${uv}?apikey=${pf}&vsn=1.0.0`)}catch{this._retry();return}this.ws=t,t.onopen=()=>{t.send(JSON.stringify({topic:ql,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:this.id}},access_token:pf},ref:String(this.ref++),join_ref:"1"}))},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.event==="phx_reply"&&n.topic===ql&&n.payload?.status==="ok"&&!this.joined){this.joined=!0,this.status="online",this.backoff=1,this._push("hi",{i:this.id,n:this.name});return}n.event==="broadcast"&&n.payload&&this._recv(n.payload.event,n.payload.payload)},t.onclose=()=>{this.joined=!1,this.status="offline",this.ws=null,this._retry()},t.onerror=()=>{}}_retry(){this.enabled&&(this.backoff=Math.min(30,(this.backoff||1)*2),clearTimeout(this._rt),this._rt=setTimeout(()=>this._open(),this.backoff*1e3))}_push(t,e){!this.ws||this.ws.readyState!==1||!this.joined||this.ws.send(JSON.stringify({topic:ql,event:"broadcast",payload:{type:"broadcast",event:t,payload:e},ref:String(this.ref++),join_ref:"1"}))}chat(t){t=String(t).slice(0,120).trim(),t&&(this._push("c",{i:this.id,n:this.name,m:t}),this.onChat&&this.onChat(this.name,t,!0))}_recv(t,e){if(!(!e||e.i===this.id))if(t==="s"){let n=this.players.get(e.i);n||(n=this._add(e)),(n.type!==e.t||n.color!==e.c)&&this._rebuild(n,e.t,e.c),n.name!==e.n&&(n.name=e.n,n.group.remove(n.tag),n.tag=mf(e.n),n.tag.position.y=n.spec.roof[2][1]+1.6,n.group.add(n.tag)),n.snaps.push({t:performance.now(),x:e.x,z:e.z,h:e.h,v:e.v,b:e.b}),n.snaps.length>20&&n.snaps.shift(),n.last=performance.now(),n.money=e.m??n.money,n.job=e.j||"",n.jobs=e.k??n.jobs}else t==="c"?this.onChat&&this.onChat(e.n,e.m,!1):t==="hi"?(this.onJoin&&this.onJoin(e.n),this.sendT=0,this.lastSent=null):t==="bye"&&this._drop(e.i)}_add(t){let e=new te,n={id:t.i,name:t.n,group:e,snaps:[],last:performance.now(),x:t.x,z:t.z,h:t.h,money:0,type:null,color:null};return this.players.set(t.i,n),this._rebuild(n,t.t,t.c),n.tag=mf(t.n),n.tag.position.y=n.spec.roof[2][1]+1.6,e.add(n.tag),this.scene.add(e),this.onJoin&&this.onJoin(t.n),n}_rebuild(t,e,n){t.body&&(t.group.remove(t.body),t.body.traverse(l=>l.geometry&&l.geometry.dispose()));let i=wi(["sedan","suv","coupe","hatch","oldsedan","van","bus"].includes(e)?e:"sedan",{}),s=new te,o=new it(i.paint,new Ps({color:n??16777215,metalness:.45,roughness:.32,clearcoat:1,vertexColors:!0})),a=new it(i.detail,new Bt({vertexColors:!0,metalness:.3,roughness:.3}));t.lightMat=new Bt({vertexColors:!0,emissive:16777215,emissiveIntensity:.3});let c=new it(i.lights,t.lightMat);o.castShadow=a.castShadow=!0,s.add(o,a,c),t.body=s,t.group.add(s),t.spec=i.spec,t.type=e,t.color=n,t.tag&&(t.tag.position.y=i.spec.roof[2][1]+1.6)}_drop(t){let e=this.players.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.players.delete(t))}update(t,e,n,i){if(!this.enabled)return;let s=performance.now();if(this.sendT-=t,this.hbT-=t,this.joined&&this.sendT<=0){let a=e.speed>.3,c={i:this.id,n:this.name,t:e.type,c:e.color,x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,h:Math.round(e.h*1e3)/1e3,v:Math.round(e.speed*10)/10,b:e.braking?1:0,m:Math.round(n.money),j:n.job||"",k:n.jobs||0};this._push("s",c),this.sendT=a?.16:1}this.hbT<=0&&this.ws&&this.ws.readyState===1&&(this.hbT=25,this.ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(this.ref++)})));let o=s-200;for(let[a,c]of this.players){if(s-c.last>8e3){this._drop(a);continue}let l=c.snaps;if(!l.length)continue;let h=l[0],u=l[l.length-1];for(let p=0;p<l.length-1;p++)if(l[p].t<=o&&l[p+1].t>=o){h=l[p],u=l[p+1];break}let d,f,g;if(o>=u.t){let p=Math.min(.5,(o-u.t)/1e3);d=u.x+Math.sin(u.h)*u.v*p,f=u.z+Math.cos(u.h)*u.v*p,g=u.h}else{let p=(o-h.t)/Math.max(1,u.t-h.t);d=h.x+(u.x-h.x)*p,f=h.z+(u.z-h.z)*p;let m=u.h-h.h;m=Math.atan2(Math.sin(m),Math.cos(m)),g=h.h+m*p}c.x=d,c.z=f,c.h=g,c.v=u.v,c.group.position.set(d,.02,f),c.group.rotation.y=g,c.lightMat.emissiveIntensity=u.b?1.4:i>.45?1.8:.3}}collide(t,e){for(let n of this.players.values()){let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s>200)continue;let o=n.spec.W/2,a=Math.max(2,Math.round(n.spec.L/2.2));for(let c=0;c<a;c++){let l=(c/(a-1)-.5)*(n.spec.L-o*2),h=n.x+Math.sin(n.h)*l,u=n.z+Math.cos(n.h)*l;for(let d of[t.spec.L*.3,0,-t.spec.L*.3]){let f=t.x+Math.sin(t.h)*d,g=t.z+Math.cos(t.h)*d,p=f-h,m=g-u,x=Math.hypot(p,m),M=t.radius+o;if(x<M&&x>1e-4){let y=p/x,v=m/x;t.x+=y*(M-x),t.z+=v*(M-x);let A=(t.vx-Math.sin(n.h)*n.v)*y+(t.vz-Math.cos(n.h)*n.v)*v;A<0&&(t.vx-=y*A*1.2,t.vz-=v*A*1.2,-A>2&&e&&e(-A,"player"))}}}}}list(){return[...this.players.values()].map(t=>({name:t.name,money:t.money||0,job:t.job,car:t.type,x:t.x,z:t.z}))}};var ca={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var hn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},dv=new Ts(-1,1,1,-1,0,1),Yl=class extends ne{constructor(){super(),this.setAttribute("position",new Vt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Vt([0,2,0,0,2,0],2))}},pv=new Yl,Ei=class{constructor(t){this._mesh=new it(pv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,dv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var Wi=class extends hn{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof de?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Dn.clone(t.uniforms),this.material=new de({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ei(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var _r=class extends hn{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},la=class extends hn{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ha=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new Q);this._width=n.width,this._height=n.height,e=new ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wi(ca),this.copyPass.material.blending=Cn,this.clock=new Ds}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}_r!==void 0&&(o instanceof _r?n=!0:o instanceof la&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new Q);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Fs=class r extends hn{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new Q(t.x,t.y):new Q(256,256),this.clearColor=new bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new ke(s,o,{type:ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let d=new ke(s,o,{type:ln});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let f=new ke(s,o,{type:ln});f.texture.name="UnrealBloomPass.v"+u,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=gf;this.highPassUniforms=Dn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new de({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Q(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=ca;this.copyUniforms=Dn.clone(h.uniforms),this.blendMaterial=new de({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new bt,this.oldClearAlpha=1,this.basic=new ue,this.fsQuad=new Ei(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new Q(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new de({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Q(.5,.5)},direction:{value:new Q(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new de({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Fs.BlurDirectionX=new Q(1,0);Fs.BlurDirectionY=new Q(0,1);var xf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ua=class extends hn{constructor(){super();let t=xf;this.uniforms=Dn.clone(t.uniforms),this.material=new Co({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ei(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ie.getTransfer(this._outputColorSpace)===he&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===vl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===yl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===_l?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===vr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ml?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===bl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $l=class extends hn{constructor(t,e,n){super(),this.env=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),this.env.render(t),t.clearDepth(),t.render(this.scene,this.camera)}},mv={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); c.rgb = clamp(c.rgb, 0.0, 30.0); if (any(isnan(c.rgb))) c.rgb = vec3(0.0); gl_FragColor = c; }"},gv={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uContrast:{value:1.06},uWarm:{value:.02},uTime:{value:0},uGrain:{value:.025}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette, uSat, uContrast, uWarm, uTime, uGrain; varying vec2 vUv;
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
    }`},fa=class{constructor(t,e,n,i,s){this.renderer=t;let o=t.getDrawingBufferSize(new Q),a=new ke(o.x,o.y,{type:ln,samples:s.msaa?4:0});this.composer=new ha(t,a),this.composer.addPass(new $l(e,n,i)),this.composer.addPass(new Wi(mv)),this.bloom=new Fs(new Q(o.x/2,o.y/2),.35,.55,.92),this.bloom.enabled=s.bloom!==!1,this.composer.addPass(this.bloom),this.composer.addPass(new ua),this.grade=new Wi(gv),this.composer.addPass(this.grade)}setSize(t,e){this.composer.setSize(t,e)}setNight(t){this.bloom.strength=.18+t*.7,this.bloom.threshold=2.2-t*1.5,this.grade.uniforms.uWarm.value=.015*(1-t),this.grade.uniforms.uSat.value=1.08-t*.1}render(t){this.grade.uniforms.uTime.value+=t,this.composer.render(t)}};var Lt=r=>document.getElementById(r),Si=r=>new Promise(t=>setTimeout(t,r)),xv=[15790320,1118740,9212054,5922918,12589080,1718906,2779706,15909376,6953530,14187040,4237528,13154458],Zl=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan. 165 hp",price:0},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend. 75 hp",price:2500},{id:"hatch",name:"City Hatch",desc:"Small Japanese import. Nimble. 110 hp",price:6e3},{id:"van",name:"Marshrutka",desc:"Your own white minibus. 160 hp",price:12e3},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes. 280 hp",price:25e3},{id:"coupe",name:"Sport Coupe",desc:"420 hp. Mind the 150 km/h cameras!",price:6e4}],Mr={low:{scale:.7,view:900,shadows:!1,bloom:!1,msaa:!1},medium:{scale:1,view:1250,shadows:!0,bloom:!0,msaa:!1},high:{scale:1.25,view:1600,shadows:!0,bloom:!0,msaa:!0},ultra:{scale:1.6,view:2200,shadows:!0,bloom:!0,msaa:!0}},vv={preset:"medium",traffic:1,peds:1,sens:1,abs:!0,tcs:!0,esc:!0,steerAssist:!0,manual:!1,fov:62,vol:.7,minimap:!0,timeSpeed:1,mp:!0,name:"",shake:!0,...Mr.medium};function yv(){let r={};try{r=JSON.parse(localStorage.getItem("bd_settings2")||"{}")}catch{}if(!r.preset){let t=navigator.hardwareConcurrency||4,e=/Mobi|Android|iPhone/i.test(navigator.userAgent),n=new URLSearchParams(location.search).get("q");r.preset=n||(e?"low":t>=8?"high":"medium"),Object.assign(r,Mr[r.preset])}return Object.assign({},vv,Mr[r.preset]||{},r)}function vf(r){try{localStorage.setItem("bd_settings2",JSON.stringify(r))}catch{}}async function _v(){let r=(P,Y)=>{Lt("loadText").textContent=P,Lt("loadBar").style.width=(Y*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await Si(30),!window.BISHKEK_DATA){Lt("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new ko(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`${t.buildings.length.toLocaleString()} buildings \xB7 ${t.edges.length.toLocaleString()} streets \xB7 ${t.signalClusters.length} traffic lights`,.25),await Si(30);let e=yv(),n=new vo({antialias:!1,powerPreference:"high-performance"}),i=()=>n.setPixelRatio(Math.min(window.devicePixelRatio*e.scale,2)*(window.devicePixelRatio>=2?.75:1)||1);i(),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=pe,n.toneMapping=vr,n.toneMappingExposure=.95,n.shadowMap.enabled=e.shadows,n.shadowMap.type=xl,n.autoClear=!1,Lt("app").appendChild(n.domElement);let s=new Fi,o=new Pe(e.fov,window.innerWidth/window.innerHeight,.5,4200),a=new Yo(n,s);a.sun.shadow.mapSize.set(e.preset==="ultra"?4096:e.preset==="high"?2048:1536,e.preset==="ultra"?4096:e.preset==="high"?2048:1536);let c=Ou();r("Building Bishkek\u2026",.35),await Si(20);let l=new qo(s,t,c);for(let P of["grass","dirt","field","asphalt","concrete","water"])Object.assign(l.mat[P],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(l.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(l.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(l.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let h=new ra(t),u=new ia,d=new sa(t,h,u);d.owned||(d.owned=["sedan"]);let f=new ea(s,t,l);d.setAirport(f),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await Si(20);let g=new na(s,t,l),p=t.nearestRoad(40,55,120,P=>P.cls<=2)||t.nearestRoad(0,0,500),m=new Zo(s,d.owned.includes(d.savedCar)?d.savedCar:"sedan",d.savedColor);d.homeCar=m.type,d.homeColor=m.color;let x=p.x-p.dz*t.laneOffset(p.e,0),M=p.z+p.dx*t.laneOffset(p.e,0);m.place(x,M,Math.atan2(p.dx,p.dz));let y={x,z:M};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),l.radius=500,l.update({x:m.x,z:m.z},0,!0),l.radius=Math.min(e.view,900);for(let P=0;P<15;P++)l.update({x:m.x,z:m.z},0,!1),r("Streets, buildings, trees and shop signs\u2026",.55+P*.025),await Si(1);l.radius=e.view,r("Traffic, traffic lights and people\u2026",.92),await Si(20);let v=new Ko(s,t,l),A=new Qo(s,t);A.addZone({name:"Manas Airport",x:f.dropoff.x+f.n.x*18,z:f.dropoff.y+f.n.y*-18,r:45,n:40,bags:!0});let E=new oa(t,d,h,u,A);E.completed=d.jobsDone||0;let S=new aa(s);m.remotes=S;let C=new Jo(o);C.snap(m);let _=null,w=()=>{_=e.bloom||e.msaa?new fa(n,a,s,o,{bloom:e.bloom,msaa:e.msaa}):null};w();let b={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,thr:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0,hud:!0,chatOpen:!1};function z(){v.target=Math.round(260*e.traffic),A.target=Math.round(220*e.peds),m.assists={abs:e.abs,tcs:e.tcs,esc:e.esc,steerAssist:e.steerAssist,sens:e.sens,manual:e.manual},u.setVolume(e.vol),l.radius=e.view,o.fov=e.fov,Lt("hudRoot").classList.toggle("nomini",!e.minimap),vf(e)}z(),window.__bd={teleport:(...P)=>W(...P),rig:C,map:t,world:l,car:m,traffic:v,peds:A,airport:f,game:d,jobs:E,net:S,S:b,scene:s,camera:o,renderer:n,env:a,settings:e};function D(P,Y,mt){m.setType(P,Y??m.color),m.assists&&(m.assists={...m.assists}),mt&&(d.homeCar=P,d.homeColor=Y??m.color),C.snap(m)}let N={steer:0,gas:0,brake:0,hand:!1},F=["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",P=>{if(!b.chatOpen&&!(P.target&&P.target.tagName==="INPUT"&&P.target.type==="text")){if(P.code==="Tab"){P.preventDefault(),b.mode!=="menu"&&It(!0);return}P.code==="F1"&&P.preventDefault(),!(P.repeat&&!F.includes(P.code))&&(b.keys[P.code]=!0,F.includes(P.code)&&P.preventDefault(),B(P.code))}}),window.addEventListener("keyup",P=>{b.keys[P.code]=!1,P.code==="Tab"&&b.tabOnline&&It(!1)}),window.addEventListener("blur",()=>{b.keys={}});function B(P){if(u.start(),b.mode==="menu"){P==="Enter"&&Lt("startBtn").click();return}if(P==="Escape")return b.mapOpen?ot(!1):Lt("airportMenu").classList.contains("hidden")?b.mode==="flight"?Ct(!0):b.mode==="spot"?Xt():$():Lt("airportMenu").classList.add("hidden");if(!b.paused)switch(P){case"KeyC":b.mode==="flight"?b.flightCam=(b.flightCam+1)%4:h.toast("Camera: "+C.cycle(),1.2);break;case"KeyM":ot();break;case"KeyH":u.horn(.3,.45),A.list.forEach(Y=>{!Y.fixed&&Math.hypot(Y.x-m.x,Y.z-m.z)<15&&Y.mode==="walk"&&(Y.dodge=.5,Y.dside=Math.random()<.5?1:-1)});break;case"KeyE":U();break;case"KeyJ":$(!0,"pJobs");break;case"KeyR":H();break;case"KeyG":d.routeTarget&&!E.active&&(d.clearRoute(),h.toast("GPS cleared",1.2));break;case"KeyK":h.toast(u.toggleMute()?"Sound off":"Sound on",1.2);break;case"BracketRight":b.hour=(b.hour+1)%24,h.toast(h.clockText(),.8);break;case"BracketLeft":b.hour=(b.hour+23)%24,h.toast(h.clockText(),.8);break;case"ShiftLeft":case"ShiftRight":e.manual&&m.shiftUp();break;case"ControlLeft":case"ControlRight":e.manual&&m.shiftDown();break;case"F1":b.hud=!b.hud,Lt("hudRoot").classList.toggle("off",!b.hud);break;case"Enter":e.mp&&ft();break}}let X=!1;n.domElement.addEventListener("contextmenu",P=>P.preventDefault()),n.domElement.addEventListener("mousedown",P=>{P.button===2&&(X=!0),u.start()}),window.addEventListener("mouseup",P=>{P.button===2&&(X=!1)}),window.addEventListener("mousemove",P=>{X&&(b.mouseYaw-=P.movementX*.006)});function H(){let P=t.nearestRoad(m.x,m.z,300,j=>j.cls<=4);if(!P)return;let Y=t.laneOffset(P.e,0),mt=P.dx,yt=P.dz;!P.e.ow&&Math.sin(m.h)*mt+Math.cos(m.h)*yt<0&&(mt=-mt,yt=-yt),m.place(P.x-yt*Y,P.z+mt*Y,Math.atan2(mt,yt)),h.toast("Car reset",1)}function W(P,Y){let mt=t.nearestRoad(P,Y,400,j=>j.cls<=4);if(!mt)return;let yt=t.laneOffset(mt.e,0);m.place(mt.x-mt.dz*yt,mt.z+mt.dx*yt,Math.atan2(mt.dx,mt.dz)),v.clear();for(let j in v.models)v.models[j].n=0;A.list=A.list.filter(j=>j.fixed);for(let j of A.extraZones)j.count=0;C.snap(m);for(let j=0;j<6;j++)l.update({x:m.x,z:m.z},0,!0)}let K=[];function lt(P,Y,mt){let yt=document.createElement("div");for(yt.innerHTML=`<b>${Os(P)}</b> ${Os(Y)}`,mt&&(yt.style.opacity="0.85"),Lt("chat").appendChild(yt),K.push(yt);K.length>6;)K.shift().remove();setTimeout(()=>{yt.style.opacity="0"},9e3),setTimeout(()=>yt.remove(),10500),mt||u.blip(700,.04,.06)}S.onChat=lt,S.onJoin=P=>lt("\u25CF",`${P} is driving in Bishkek`,!0);function ft(){if(!S.enabled)return;b.chatOpen=!0,b.keys={};let P=Lt("chatInput");P.classList.remove("hidden"),P.value="",P.focus()}Lt("chatInput").addEventListener("keydown",P=>{P.stopPropagation(),P.key==="Enter"&&(S.chat(P.target.value),et()),P.key==="Escape"&&et()});function et(){b.chatOpen=!1,Lt("chatInput").classList.add("hidden"),Lt("chatInput").blur()}document.querySelectorAll(".tab").forEach(P=>P.onclick=()=>O(P.dataset.p));function O(P){document.querySelectorAll(".tab").forEach(Y=>Y.classList.toggle("on",Y.dataset.p===P)),document.querySelectorAll(".page").forEach(Y=>Y.classList.toggle("on",Y.id===P)),P==="pJobs"&&st(),P==="pGarage"&&pt(),P==="pOnline"&&Et(),P==="pPlaces"&&Yt(),P==="pSettings"&&at()}function $(P,Y){b.paused=P!==void 0?P:!b.paused,Lt("pause").classList.toggle("hidden",!b.paused),b.paused&&O(Y||"pJobs"),b.keys={}}Lt("resume").onclick=()=>$(!1);function ot(P){b.mapOpen=P!==void 0?P:!b.mapOpen,Lt("mapPanel").classList.toggle("hidden",!b.mapOpen),b.mapOpen&&(h._resize(),h.centerMap(m.x,m.z,.12))}h.onMapClick=(P,Y,mt)=>{if(mt){W(P,Y),ot(!1);return}d.setRoute(P,Y,"Waypoint"),h.toast("GPS route set",1.2)},Lt("mapClose").onclick=()=>ot(!1);function st(){Lt("jobCards").innerHTML=Object.entries(Gi).map(([Y,mt])=>`<button class="card ${E.active?.type===Y?"sel":""}" data-id="${Y}"><div class="ic">${mt.icon}</div><b>${mt.name}</b><small>${mt.desc}</small></button>`).join(""),Lt("jobCards").querySelectorAll("button").forEach(Y=>Y.onclick=()=>{if(b.mode==="drive"){if($(!1),E.active?.type===Y.dataset.id){E.stop(m,D);return}E.start(Y.dataset.id,m,s,D)}}),Lt("jobNow").innerHTML=E.active?`On shift: <b>${E.status(m)}</b> \xB7 <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>`:`${E.completed} jobs done \xB7 balance <b>${Nn(d.money)} coins</b>`;let P=Lt("endShift");P&&(P.onclick=Y=>{Y.preventDefault(),E.stop(m,D),st()})}function pt(){Lt("garage").innerHTML=Zl.map(P=>{let Y=d.owned.includes(P.id);return`<button class="card ${m.type===P.id?"sel":""} ${Y?"":"locked"}" data-id="${P.id}"><b>${P.name}</b><small>${P.desc}</small><div class="price">${Y?m.type===P.id?"Driving":"Owned":"\u{1FA99} "+Nn(P.price)}</div></button>`}).join(""),Lt("garage").querySelectorAll("button").forEach(P=>P.onclick=()=>{let Y=Zl.find(mt=>mt.id===P.dataset.id);if(E.active&&(E.active.type==="bus"||E.active.type==="marshrutka")){h.toast("Finish your route first",1.5);return}if(!d.owned.includes(Y.id)){if(d.money<Y.price){h.toast(`Not enough coins (${Nn(Y.price)} needed)`,1.6);return}d.money-=Y.price,d.owned.push(Y.id),u.cash()}D(Y.id,m.color,!0),d.save(m),pt()}),Lt("colors").innerHTML=xv.map(P=>`<button class="sw" style="background:#${P.toString(16).padStart(6,"0")}" data-c="${P}"></button>`).join(""),Lt("colors").querySelectorAll("button").forEach(P=>P.onclick=()=>{m.setColor(+P.dataset.c),d.homeColor=+P.dataset.c,d.save(m)})}function Et(){Lt("netStatus").innerHTML=e.mp?S.status==="online"?`<span class="dot on"></span> Connected \xB7 ${S.players.size+1} drivers in Bishkek right now`:`Connecting\u2026 (${S.status})`:"Multiplayer is off (Settings \u2192 Online).";let P=[{name:S.name||e.name||"You",money:d.money,job:E.active?Gi[E.active.type].icon:"",car:m.type,me:!0}].concat(S.list());P.sort((Y,mt)=>mt.money-Y.money),Lt("lb").innerHTML="<tr><th>#</th><th>Driver</th><th>Coins</th><th>Now</th></tr>"+P.map((Y,mt)=>`<tr class="${Y.me?"me":""}"><td>${mt+1}</td><td>${Os(Y.name)}</td><td>${Nn(Y.money)}</td><td>${Y.job||Zl.find(yt=>yt.id===Y.car)?.name||""}</td></tr>`).join("")}function It(P){b.tabOnline=P,P?(Et(),Lt("pause").classList.remove("hidden"),O("pOnline")):b.paused||Lt("pause").classList.add("hidden")}function Yt(){Lt("placeCount").textContent=`${d.visited.size}/${Ye.length} landmarks discovered \xB7 click to travel`,Lt("placeList").innerHTML=Ye.map(P=>`<button class="place ${d.visited.has(P.id)?"done":""}" data-id="${P.id}"><span>${d.visited.has(P.id)?"\u2714":"\u25CB"} ${P.name}</span><small>${P.local||""}</small></button>`).join(""),Lt("placeList").querySelectorAll("button").forEach(P=>P.onclick=()=>{let Y=Ye.find(mt=>mt.id===P.dataset.id);W(Y.x,Y.z),$(!1)}),Lt("fineList").innerHTML=d.fines.length?d.fines.slice(-10).reverse().map(P=>`<div class="row"><span>${P.kind}<br><small class="muted">${P.time} \xB7 ${Os(P.detail)}</small></span><b style="color:#ff8a80">\u2212${Nn(P.amount)}</b></div>`).join(""):'<p class="muted">No fines. Keep it under 150 km/h!</p>'}function at(){let P=(j,Dt)=>`<div class="row"><label>${Dt}</label><button class="tog ${e[j]?"on":""}" data-k="${j}"></button></div>`,Y=(j,Dt,qt,re,k,xt=tt=>tt)=>`<div class="row"><label>${Dt} <small class="muted" id="v_${j}">${xt(e[j])}</small></label><input type="range" data-k="${j}" min="${qt}" max="${re}" step="${k}" value="${e[j]}"></div>`,mt=(j,Dt,qt)=>`<div class="row"><label>${Dt}</label><select data-k="${j}">${qt.map(([re,k])=>`<option value="${re}" ${String(e[j])===String(re)?"selected":""}>${k}</option>`).join("")}</select></div>`;Lt("settingsBox").innerHTML=`<div class="set"><div>
      <h4>Graphics</h4>
      ${mt("preset","Quality preset",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"],["custom","Custom"]])}
      ${Y("scale","Resolution",.5,2,.05,j=>Math.round(j*100)+"%")}
      ${Y("view","View distance",600,2600,100,j=>j+" m")}
      ${P("shadows","Shadows")}${P("bloom","Bloom & colour grading")}${P("msaa","Anti-aliasing")}
      ${Y("fov","Field of view",50,85,1,j=>j+"\xB0")}
      <h4>World</h4>
      ${Y("traffic","Traffic density",.2,2,.1,j=>Math.round(j*100)+"%")}
      ${Y("peds","Pedestrians",0,2,.1,j=>Math.round(j*100)+"%")}
      ${Y("timeSpeed","Day speed",0,6,.5,j=>j?j+"\xD7":"paused")}
    </div><div>
      <h4>Driving</h4>
      ${Y("sens","Steering sensitivity",.4,1.6,.05,j=>Math.round(j*100)+"%")}
      ${mt("manual","Gearbox",[["false","Automatic"],["true","Manual (Shift / Ctrl)"]])}
      ${P("abs","ABS")}${P("tcs","Traction control")}${P("esc","Stability control")}${P("steerAssist","Counter-steer assist")}
      <h4>Interface &amp; sound</h4>
      ${P("minimap","Minimap")}${P("shake","Camera shake")}
      ${Y("vol","Volume",0,1,.05,j=>Math.round(j*100)+"%")}
      <h4>Online</h4>
      ${P("mp","Multiplayer")}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${Os(e.name||"")}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;let yt=Lt("settingsBox");yt.querySelectorAll(".tog").forEach(j=>j.onclick=()=>{let Dt=j.dataset.k;e[Dt]=!e[Dt],j.classList.toggle("on",e[Dt]),ut(Dt)}),yt.querySelectorAll("input[type=range]").forEach(j=>j.oninput=()=>{let Dt=j.dataset.k;e[Dt]=+j.value;let qt=Lt("v_"+Dt);qt&&(qt.textContent=j.parentElement.querySelector("small").textContent=Dt==="view"?j.value+" m":Dt==="fov"?j.value+"\xB0":Dt==="timeSpeed"?+j.value?j.value+"\xD7":"paused":Math.round(j.value*100)+"%"),ut(Dt)}),yt.querySelectorAll("select").forEach(j=>j.onchange=()=>{let Dt=j.dataset.k;e[Dt]=Dt==="manual"?j.value==="true":j.value,ut(Dt)}),yt.querySelector("input[type=text]").onchange=j=>{e.name=j.target.value.trim().slice(0,18)||"Driver",ut("name")},Lt("resetProg").onclick=()=>{confirm("Reset coins, cars and landmarks?")&&(localStorage.removeItem("bishkekDrive"),location.reload())}}function ut(P){P==="preset"&&Mr[e.preset]?(Object.assign(e,Mr[e.preset]),at()):["scale","view","shadows","bloom","msaa"].includes(P)&&(e.preset="custom"),["scale","preset"].includes(P)&&(i(),n.setSize(window.innerWidth,window.innerHeight)),["shadows","preset"].includes(P)&&(n.shadowMap.enabled=e.shadows,s.traverse(Y=>{Y.material&&(Array.isArray(Y.material)?Y.material:[Y.material]).forEach(mt=>mt.needsUpdate=!0)})),["bloom","msaa","preset","scale"].includes(P)&&w(),P==="mp"&&(e.mp?S.connect(e.name||"Driver"):S.disconnect()),P==="name"&&S.enabled&&(S.name=e.name),z(),o.updateProjectionMatrix()}Lt("nameInput").value=e.name||"",Lt("mpToggle").classList.toggle("on",e.mp),Lt("mpToggle").onclick=()=>{e.mp=!e.mp,Lt("mpToggle").classList.toggle("on",e.mp)},Lt("startBtn").onclick=()=>{u.start(),e.name=(Lt("nameInput").value.trim()||e.name||"Driver"+Math.floor(Math.random()*900+100)).slice(0,18),vf(e),Lt("menu").classList.add("hidden"),b.mode="drive",b.paused=!1,C.snap(m),e.mp&&S.connect(e.name),h.toast(`Salam, <b>${Os(e.name)}</b>! Press <b>J</b> to find work \xB7 <b>Esc</b> for menu`,5)};function U(){if(b.mode!=="drive")return;let P=Math.hypot(m.x-f.dropoff.x,m.z-f.dropoff.y),Y=Math.hypot(m.x-f.spotter.x,m.z-f.spotter.y);if(P<14){if(m.speed>3){h.toast("Stop the car first",1.2);return}h.renderBoard(f.board,Lt("fids")),Lt("airportMenu").classList.remove("hidden"),u.pa()}else Y<14&&vt()}Lt("apFlight").onclick=()=>{if(d.money<500){h.toast("Not enough coins for a ticket (500)",1.6);return}d.money-=500,u.cash(),Lt("airportMenu").classList.add("hidden"),dt()},Lt("apSpot").onclick=()=>{Lt("airportMenu").classList.add("hidden"),vt()},Lt("apTaxi").onclick=()=>{if(Lt("airportMenu").classList.add("hidden"),!E.start("taxi",m,s,D))return;let P=E.active;P.x=f.dropoff.x+f.n.x*6,P.z=f.dropoff.y+f.n.y*6,P.ped&&(P.ped.x=P.ped.tx=P.x,P.ped.z=P.ped.tz=P.z),P.dest=Ye.filter(Y=>!Y.airport)[Math.floor(Math.random()*(Ye.length-1))],d.setRoute(P.x,P.z,"Passenger"),h.toast(`\u{1F695} <b>${P.passenger}</b> just landed and needs a ride to ${P.dest.name}`,3.5)},Lt("apClose").onclick=()=>Lt("airportMenu").classList.add("hidden");let zt=P=>Lt("fade").classList.toggle("on",P);async function dt(){zt(!0),await Si(700),b.flight=f.createScenicFlight(),b.mode="flight",b.flightCam=0,f.scenicCamera(b.flight,0,q,nt),o.position.copy(q),ht.copy(nt),l.radius=Math.max(e.view,2400),o.far=12e3,o.updateProjectionMatrix(),Lt("boarding").classList.add("show"),setTimeout(()=>Lt("boarding").classList.remove("show"),4e3),u.pa(),zt(!1)}async function Ct(P){if(!b.flight||b.ending)return;b.ending=!0;let Y=b.flight;zt(!0),await Si(700),f.endScenic(Y),b.flight=null,b.ending=!1,b.mode="drive",l.radius=e.view,o.far=4200,o.updateProjectionMatrix(),h.setFlightInfo(null),C.snap(m),zt(!1),h.toast(P?"Back at Manas airport":"Welcome back to Bishkek!",2.5)}function vt(){b.mode="spot";let P=f.planes.find(Y=>Y.state==="approach"||Y.state==="flare");P||(P=f._newPlane(),f._startApproach(P,.45)),b.spot={pl:P,cam:new L(f.spotter.x,2.2,f.spotter.y)},ht.set(P.x,P.y,P.z),h.toast("Plane spotting \xB7 Esc to exit",2.5)}function Xt(){b.mode="drive",b.spot=null}if("ontouchstart"in window){Lt("touch").classList.remove("hidden");let P=(Y,mt,yt)=>{let j=Lt(Y);j.addEventListener("touchstart",Dt=>{Dt.preventDefault(),u.start(),mt()}),j.addEventListener("touchend",Dt=>{Dt.preventDefault(),yt()})};P("tLeft",()=>N.steer=-1,()=>N.steer=0),P("tRight",()=>N.steer=1,()=>N.steer=0),P("tGas",()=>N.gas=1,()=>N.gas=0),P("tBrake",()=>N.brake=1,()=>N.brake=0),P("tHand",()=>N.hand=!0,()=>N.hand=!1),P("tCam",()=>B("KeyC"),()=>{}),P("tAct",()=>B("KeyE"),()=>{}),P("tMenu",()=>B("Escape"),()=>{})}window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),_&&_.setSize(window.innerWidth,window.innerHeight)});let Pt=new Ds,I={x:0,z:0,h:0,speed:0,spec:m.spec,vx:0,vz:0,radius:1},T={},q=new L,nt=new L,ht=new L,rt=document.createElement("canvas");rt.width=320,rt.height=180;let Nt=P=>b.photoCbs.push(P);if(Lt("loading").classList.add("hidden"),Lt("menu").classList.remove("hidden"),!localStorage.getItem("bd_seen"))try{localStorage.setItem("bd_seen","1")}catch{}function _t(P,Y){return f.rel(new Q(P,Y)).x>-2500&&Y<-15500?"Manas International Airport":Y<-3600?"Bishkek \u2013 Manas road":Y<300?P<500?"Pervomaisky district":"Sverdlovsky district":P<0?"Leninsky district":"Oktyabrsky district"}let St=0;function Qt(){requestAnimationFrame(Qt);let P=Math.min(.05,Pt.getDelta()),Y=!b.paused&&b.mode!=="menu",mt=Y?P:0;b.time+=mt,wn.uTime.value+=P,b.hour=(b.hour+mt/60*e.timeSpeed)%24,a.setHour(b.hour);let yt=b.hour;v.rush=yt>7.5&&yt<10||yt>17&&yt<20?1.65:yt>23||yt<6?.45:1;let j=b.keys,Dt=(j.KeyD||j.ArrowRight?1:0)-(j.KeyA||j.ArrowLeft?1:0)+N.steer,qt=(j.KeyW||j.ArrowUp?1:0)+N.gas,re=(j.KeyS||j.ArrowDown?1:0)+N.brake,k=!1,xt=navigator.getGamepads?[...navigator.getGamepads()].find(Ut=>Ut):null;xt&&(Math.abs(xt.axes[0])>.08&&(Dt=Math.sign(xt.axes[0])*Math.pow(Math.abs(xt.axes[0]),1.5),k=!0),xt.buttons[7]?.value>.02&&(qt=xt.buttons[7].value),xt.buttons[6]?.value>.02&&(re=xt.buttons[6].value)),b.steer=k?Dt:b.steer+(Fe.clamp(Dt,-1,1)-b.steer)*Math.min(1,P*(Dt===0?12:8)),b.thr+=(Math.min(1,qt)-b.thr)*Math.min(1,P*(qt?5:12));let tt={steer:b.steer,throttle:b.thr<.02?0:b.thr,brake:Math.min(1,re),hand:!!(j.Space||N.hand||xt?.buttons[0]?.pressed)};m.throttleOn=tt.throttle>0;let ct=a.night;if(m.night=ct>.45,Y){if(b.mode==="drive"||b.mode==="spot"){let ge=t.nearestRoad(m.x,m.z,25),En=ge&&ge.dist<ge.e.w/2+3.5;m.surface=En||f.runwayIncursion(m.x,m.z)?1:.72,T.road=ge&&ge.dist<ge.e.w/2+4?ge:null;let pn=b.mode==="spot"?{steer:0,throttle:0,brake:1,hand:!0}:tt;m.update(P,pn,l,v,(ti,ei)=>{e.shake&&(C.shake=Math.min(.6,ti*.04)),u.crash(ti)})}let Ut=b.mode==="flight"?Object.assign(I,{x:b.flight.plane.x,z:b.flight.plane.z,h:b.flight.plane.h,speed:0}):m;v.night=ct,v.update(P,Ut,e.peds>0?A:null),A.update(P,Ut,e.peds>0);for(let ge of v.honks){let En=Math.hypot(ge.x-m.x,ge.z-m.z);u.horn(Math.min(.3,6/(En+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(f.update(P,ct,m,b.flight?b.flight.plane:null),g.update(P,b.time,ct),b.mode==="drive"){let ge=T.road?t.roadName(T.road.e.name):null;T.street=ge?ge.en:null,d.trafficTime=v.time,d.checkRules(P,m,T,null,f,Nt),d.checkLandmarks(m);let En=E.update(P,m,s,D);if(En&&En.done&&(d.jobsDone=E.completed,d.save(m)),!E.active&&E.nextIn!==void 0&&(E.nextIn-=P,E.nextIn<=0)){let br=E.nextType;E.nextIn=void 0,E.start(br,m,s,D)}h.setStreet(ge?ge.en!==ge.local?`${ge.en}`:ge.local:T.runway?"Runway 07/25":"",ge&&ge.en!==ge.local?ge.local:_t(m.x,m.z)),h.setLimit(m.speed*3.6,T.wrongWay,T.runway);let pn=Math.hypot(m.x-f.dropoff.x,m.z-f.dropoff.y),ti=Math.hypot(m.x-f.spotter.x,m.z-f.spotter.y),ei=pn<14?"<b>E</b> \xB7 Manas Airport":ti<14?"<b>E</b> \xB7 watch planes land":"";ei!==b.hintTxt&&(b.hintTxt=ei,Lt("hint").innerHTML=ei,Lt("hint").classList.toggle("show",!!ei))}else b.hintTxt&&(b.hintTxt="",Lt("hint").classList.remove("show"));if(b.mode==="flight"){let ge=["pushback","taxi","taxiIn"].includes(b.flight.stage)?P*3:P;!b.ending&&f.updateScenic(b.flight,ge)&&Ct(!1)}d.updateRoute(b.mode==="flight"?I:m,s),d.routeMat&&(d.routeMat.uniforms.uTime.value=b.time);let ze=E.status(m),tn=d.routeTarget?Math.hypot(m.x-d.routeTarget.x,m.z-d.routeTarget.z):0;h.setMission(ze?`${ze} \xB7 ${yf(tn)}`:d.routeTarget?`\u{1F4CD} ${d.routeTarget.label} \xB7 ${yf(tn)}`:""),b.lastSave+=P,b.lastSave>10&&(b.lastSave=0,d.save(m))}if(S.update(P,m,{money:d.money,job:E.active?Gi[E.active.type].icon:"",jobs:E.completed},ct),b.mode==="flight"&&b.flight){f.scenicCamera(b.flight,b.flightCam,q,nt),o.position.lerp(q,b.flightCam===0?1-Math.exp(-P*4):1),ht.lerp(nt,b.flightCam===0?1-Math.exp(-P*6):1),o.lookAt(ht),o.fov=b.flightCam===2?70:55,o.updateProjectionMatrix();let Ut=b.flight.plane,ze=(Math.atan2(Math.sin(Ut.h),-Math.cos(Ut.h))*180/Math.PI+360)%360;h.setFlightInfo({alt:Ut.y-Ut.a.groundY+627,spd:Ut.v,hdg:ze,stage:{pushback:"Pushback",taxi:"Taxi to runway 07",roll:"Take-off",air:"Over Bishkek",final:"Final approach",taxiIn:"Taxi to gate",done:"Arrived"}[b.flight.stage],cam:["Chase","Window","Cockpit","Spotter"][b.flightCam]})}else if(b.mode==="spot"&&b.spot){let Ut=b.spot.pl;o.position.copy(b.spot.cam),ht.lerp(new L(Ut.x,Ut.y,Ut.z),1-Math.exp(-P*5)),o.lookAt(ht),o.fov=Fe.clamp(Math.hypot(Ut.x-b.spot.cam.x,Ut.z-b.spot.cam.z)/40,12,60),o.updateProjectionMatrix(),(!f.planes.includes(Ut)||Ut.state==="taxiIn"||Ut.state==="climb"||Ut.state==="goaround"&&Ut.y>300)&&Xt()}else if(b.mode!=="free"&&(X||(b.mouseYaw*=Math.exp(-P*2)),C.baseFov=e.fov,C.update(Math.max(P,.001),m,b.mouseYaw),b.mode==="menu")){let Ut=performance.now()*4e-5;o.position.set(m.x+Math.sin(Ut)*26,6+Math.sin(Ut*3)*2,m.z+Math.cos(Ut)*26),o.lookAt(m.x,2,m.z)}let Tt=b.mode==="flight"||b.mode==="free"?{x:o.position.x,z:o.position.z}:{x:m.x,z:m.z};l.update(Tt,P);let wt=a.update(o,b.mode==="flight"&&b.flight?{x:b.flight.plane.x,z:b.flight.plane.z}:m),$t=a.sun.shadow.camera,xe=b.mode==="flight"?160:110;$t.right!==xe&&($t.left=$t.bottom=-xe,$t.right=$t.top=xe,$t.updateProjectionMatrix()),l.setNight(wt.night),_&&_.setNight(wt.night),b.mode!=="flight"&&(s.fog.near=350,s.fog.far=l.radius+700);let De=f.noiseAt(o.position.x,o.position.z,o.position.y);if(u.update(P,m,{throttle:tt.throttle,inFlight:b.mode==="flight",cityLevel:Math.min(1,v.cars.length/200)*(Math.abs(m.z)<6e3?1:.2),jet:b.mode==="flight"?.35:De}),_?_.render(P):(n.setRenderTarget(null),n.clear(),a.render(n),n.clearDepth(),n.render(s,o)),b.photoCbs.length){let Ut=rt.getContext("2d");Ut.drawImage(n.domElement,0,0,320,180),Ut.fillStyle="rgba(0,0,0,0.55)",Ut.fillRect(0,158,320,22),Ut.fillStyle="#ffeb3b",Ut.font="bold 12px monospace",Ut.fillText(`${Math.round(m.speed*3.6)} km/h  LIMIT 150  ${h.clockText()}  01KG`,8,173);let ze=rt.toDataURL("image/jpeg",.7);for(let tn of b.photoCbs)tn(ze);b.photoCbs.length=0}b.mode!=="menu"&&(St++,St%2===0&&h.drawSpeedo(m),e.minimap&&St%3===0&&h.drawMini(m,v,d,f,S),h.setMoney(d.money),h.setClock(b.hour,e.mp&&S.status==="online"?S.players.size:null),b.mapOpen&&h.drawBigMap(m,d,f,S),b.tabOnline&&St%20===0&&Et(),Lt("hudRoot").classList.toggle("flightmode",b.mode==="flight"||b.mode==="spot"))}Qt(),window.addEventListener("beforeunload",()=>{d.save(m),S.disconnect()})}function Os(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function yf(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}_v().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
