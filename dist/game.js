(()=>{var hh="170";var _f=0,Jh=1,wf=2;var fd=1,uh=2,ui=3,Li=0,cn=1,we=2,Je=0,Ns=1,Be=2,jh=3,Kh=4,dh=5,Dn=100,bf=101,Ef=102,Sf=103,Tf=104,ir=200,Rf=201,Af=202,Cf=203,Ol=204,Gl=205,ha=206,Pf=207,ua=208,If=209,zf=210,Lf=211,Df=212,kf=213,Uf=214,Vl=0,Wl=1,Xl=2,Os=3,$l=4,ql=5,Yl=6,Zl=7,pd=0,Nf=1,Bf=2,Ii=0,fh=1,ph=2,mh=3,Xr=4,Hf=5,gh=6,xh=7;var md=300,Gs=301,Vs=302,Jl=303,jl=304,da=306,Wn=1e3,ns=1001,Kl=1002,hn=1003,Ff=1004;var Qr=1005;var Kn=1006,ol=1007;var is=1008;var Xn=1009,gd=1010,xd=1011,Lr=1012,vh=1013,ss=1014,Qn=1015,dn=1016,yh=1017,Mh=1018,Di=1020,vd=35902,yd=1021,Md=1022,An=1023,_d=1024,wd=1025,Bs=1026,ki=1027,_h=1028,wh=1029,bd=1030,bh=1031;var Eh=1033,Lo=33776,Do=33777,ko=33778,Uo=33779,Ql=35840,tc=35841,ec=35842,nc=35843,ic=36196,sc=37492,rc=37496,oc=37808,ac=37809,lc=37810,cc=37811,hc=37812,uc=37813,dc=37814,fc=37815,pc=37816,mc=37817,gc=37818,xc=37819,vc=37820,yc=37821,No=36492,Mc=36494,_c=36495,Ed=36283,wc=36284,bc=36285,Ec=36286;var Bo=2300,Sc=2301,al=2302,Qh=2400,tu=2401,eu=2402;var Of=3200,Gf=3201;var Sh=0,Vf=1,Ci="",Ee="srgb",sr="srgb-linear",fa="linear",Re="srgb";var gs=7680;var nu=519,Wf=512,Xf=513,$f=514,Sd=515,qf=516,Yf=517,Zf=518,Jf=519,Tc=35044,rr=35048;var iu="300 es",fi=2e3,Ho=2001,Ui=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],su=1234567,Ar=Math.PI/180,Ws=180/Math.PI;function ti(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Ye(r,t,e){return Math.max(t,Math.min(e,r))}function Th(r,t){return(r%t+t)%t}function jf(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function Kf(r,t,e){return r!==t?(e-r)/(t-r):0}function Cr(r,t,e){return(1-e)*r+e*t}function Qf(r,t,e,n){return Cr(r,t,1-Math.exp(-e*n))}function tp(r,t=1){return t-Math.abs(Th(r,t*2)-t)}function ep(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function np(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function ip(r,t){return r+Math.floor(Math.random()*(t-r+1))}function sp(r,t){return r+Math.random()*(t-r)}function rp(r){return r*(.5-Math.random())}function op(r){r!==void 0&&(su=r);let t=su+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ap(r){return r*Ar}function lp(r){return r*Ws}function cp(r){return(r&r-1)===0&&r!==0}function hp(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function up(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function dp(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),p=o((t-n)/2),d=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*p,a*c);break;case"YZY":r.set(l*p,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*p,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Vn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ie={DEG2RAD:Ar,RAD2DEG:Ws,generateUUID:ti,clamp:Ye,euclideanModulo:Th,mapLinear:jf,inverseLerp:Kf,lerp:Cr,damp:Qf,pingpong:tp,smoothstep:ep,smootherstep:np,randInt:ip,randFloat:sp,randFloatSpread:rp,seededRandom:op,degToRad:ap,radToDeg:lp,isPowerOfTwo:cp,ceilPowerOfTwo:hp,floorPowerOfTwo:up,setQuaternionFromProperEuler:dp,normalize:Ae,denormalize:Vn},tt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ae=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],p=n[2],d=n[5],g=n[8],m=i[0],x=i[3],f=i[6],y=i[1],_=i[4],v=i[7],R=i[2],E=i[5],b=i[8];return s[0]=o*m+a*y+l*R,s[3]=o*x+a*_+l*E,s[6]=o*f+a*v+l*b,s[1]=c*m+h*y+u*R,s[4]=c*x+h*_+u*E,s[7]=c*f+h*v+u*b,s[2]=p*m+d*y+g*R,s[5]=p*x+d*_+g*E,s[8]=p*f+d*v+g*b,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,p=a*l-h*s,d=c*s-o*l,g=e*u+n*p+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/g;return t[0]=u*m,t[1]=(i*c-h*n)*m,t[2]=(a*n-i*o)*m,t[3]=p*m,t[4]=(h*e-i*l)*m,t[5]=(i*s-a*e)*m,t[6]=d*m,t[7]=(n*l-c*e)*m,t[8]=(o*e-n*s)*m,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ll.makeScale(t,e)),this}rotate(t){return this.premultiply(ll.makeRotation(-t)),this}translate(t,e){return this.premultiply(ll.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ll=new ae;function Td(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Fo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function fp(){let r=Fo("canvas");return r.style.display="block",r}var ru={};function Tr(r){r in ru||(ru[r]=!0,console.warn(r))}function pp(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function mp(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function gp(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var me={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Re&&(r.r=pi(r.r),r.g=pi(r.g),r.b=pi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Re&&(r.r=Hs(r.r),r.g=Hs(r.g),r.b=Hs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ci?fa:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function pi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Hs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ou=[.64,.33,.3,.6,.15,.06],au=[.2126,.7152,.0722],lu=[.3127,.329],cu=new ae().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hu=new ae().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);me.define({[sr]:{primaries:ou,whitePoint:lu,transfer:fa,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:au,workingColorSpaceConfig:{unpackColorSpace:Ee},outputColorSpaceConfig:{drawingBufferColorSpace:Ee}},[Ee]:{primaries:ou,whitePoint:lu,transfer:Re,toXYZ:cu,fromXYZ:hu,luminanceCoefficients:au,outputColorSpaceConfig:{drawingBufferColorSpace:Ee}}});var xs,Rc=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Fo("canvas")),xs.width=t.width,xs.height=t.height;let n=xs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Fo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=pi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(pi(e[n]/255)*255):e[n]=pi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},xp=0,Oo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(cl(i[o].image)):s.push(cl(i[o]))}else s=cl(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function cl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Rc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vp=0,bn=class r extends Ui{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=ns,i=ns,s=Kn,o=is,a=An,l=Xn,c=r.DEFAULT_ANISOTROPY,h=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=ti(),this.name="",this.source=new Oo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new tt(0,0),this.repeat=new tt(1,1),this.center=new tt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==md)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Wn:t.x=t.x-Math.floor(t.x);break;case ns:t.x=t.x<0?0:1;break;case Kl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Wn:t.y=t.y-Math.floor(t.y);break;case ns:t.y=t.y<0?0:1;break;case Kl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=md;bn.DEFAULT_ANISOTROPY=1;var Ce=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],p=l[1],d=l[5],g=l[9],m=l[2],x=l[6],f=l[10];if(Math.abs(h-p)<.01&&Math.abs(u-m)<.01&&Math.abs(g-x)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+m)<.1&&Math.abs(g+x)<.1&&Math.abs(c+d+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,R=(f+1)/2,E=(h+p)/4,b=(u+m)/4,C=(g+x)/4;return _>v&&_>R?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=E/n,s=b/n):v>R?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=E/i,s=C/i):R<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(R),n=b/s,i=C/s),this.set(n,i,s,e),this}let y=Math.sqrt((x-g)*(x-g)+(u-m)*(u-m)+(p-h)*(p-h));return Math.abs(y)<.001&&(y=1),this.x=(x-g)/y,this.y=(u-m)/y,this.z=(p-h)/y,this.w=Math.acos((c+d+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Ac=class extends Ui{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new bn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Oo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},$e=class extends Ac{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Go=class extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Cc=class extends bn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=hn,this.minFilter=hn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ke=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],p=s[o+0],d=s[o+1],g=s[o+2],m=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=p,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(u!==m||l!==p||c!==d||h!==g){let x=1-a,f=l*p+c*d+h*g+u*m,y=f>=0?1:-1,_=1-f*f;if(_>Number.EPSILON){let R=Math.sqrt(_),E=Math.atan2(R,f*y);x=Math.sin(x*E)/R,a=Math.sin(a*E)/R}let v=a*y;if(l=l*x+p*v,c=c*x+d*v,h=h*x+g*v,u=u*x+m*v,x===1-a){let R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],p=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*d-c*p,t[e+1]=l*g+h*p+c*u-a*d,t[e+2]=c*g+h*d+a*p-l*u,t[e+3]=h*g-a*u-l*p-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),p=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"YXZ":this._x=p*h*u+c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"ZXY":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u-p*d*g;break;case"ZYX":this._x=p*h*u-c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u+p*d*g;break;case"YZX":this._x=p*h*u+c*d*g,this._y=c*d*u+p*h*g,this._z=c*h*g-p*d*u,this._w=c*h*u-p*d*g;break;case"XZY":this._x=p*h*u-c*d*g,this._y=c*d*u-p*h*g,this._z=c*h*g+p*d*u,this._w=c*h*u+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],p=n+a+u;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ye(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=i*u+this._y*p,this._z=s*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return hl.copy(this).projectOnVector(t),this.sub(hl)}reflect(t){return this.sub(hl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ye(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},hl=new I,uu=new ke,mi=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fn):Fn.fromBufferAttribute(s,o),Fn.applyMatrix4(t.matrixWorld),this.expandByPoint(Fn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),to.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),to.copy(n.boundingBox)),to.applyMatrix4(t.matrixWorld),this.union(to)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fn),Fn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mr),eo.subVectors(this.max,mr),vs.subVectors(t.a,mr),ys.subVectors(t.b,mr),Ms.subVectors(t.c,mr),bi.subVectors(ys,vs),Ei.subVectors(Ms,ys),Yi.subVectors(vs,Ms);let e=[0,-bi.z,bi.y,0,-Ei.z,Ei.y,0,-Yi.z,Yi.y,bi.z,0,-bi.x,Ei.z,0,-Ei.x,Yi.z,0,-Yi.x,-bi.y,bi.x,0,-Ei.y,Ei.x,0,-Yi.y,Yi.x,0];return!ul(e,vs,ys,Ms,eo)||(e=[1,0,0,0,1,0,0,0,1],!ul(e,vs,ys,Ms,eo))?!1:(no.crossVectors(bi,Ei),e=[no.x,no.y,no.z],ul(e,vs,ys,Ms,eo))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(oi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},oi=[new I,new I,new I,new I,new I,new I,new I,new I],Fn=new I,to=new mi,vs=new I,ys=new I,Ms=new I,bi=new I,Ei=new I,Yi=new I,mr=new I,eo=new I,no=new I,Zi=new I;function ul(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Zi.fromArray(r,s);let a=i.x*Math.abs(Zi.x)+i.y*Math.abs(Zi.y)+i.z*Math.abs(Zi.z),l=t.dot(Zi),c=e.dot(Zi),h=n.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var yp=new mi,gr=new I,dl=new I,gi=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):yp.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;gr.subVectors(t,this.center);let e=gr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(gr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(dl.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(gr.copy(t.center).add(dl)),this.expandByPoint(gr.copy(t.center).sub(dl))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},ai=new I,fl=new I,io=new I,Si=new I,pl=new I,so=new I,ml=new I,Dr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ai)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=ai.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ai.copy(this.origin).addScaledVector(this.direction,e),ai.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){fl.copy(t).add(e).multiplyScalar(.5),io.copy(e).sub(t).normalize(),Si.copy(this.origin).sub(fl);let s=t.distanceTo(e)*.5,o=-this.direction.dot(io),a=Si.dot(this.direction),l=-Si.dot(io),c=Si.lengthSq(),h=Math.abs(1-o*o),u,p,d,g;if(h>0)if(u=o*l-a,p=o*a-l,g=s*h,u>=0)if(p>=-g)if(p<=g){let m=1/h;u*=m,p*=m,d=u*(u+o*p+2*a)+p*(o*u+p+2*l)+c}else p=s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p=-s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;else p<=-g?(u=Math.max(0,-(-o*s+a)),p=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c):p<=g?(u=0,p=Math.min(Math.max(-s,-l),s),d=p*(p+2*l)+c):(u=Math.max(0,-(o*s+a)),p=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+p*(p+2*l)+c);else p=o>0?-s:s,u=Math.max(0,-(o*p+a)),d=-u*u+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(fl).addScaledVector(io,p),d}intersectSphere(t,e){ai.subVectors(t.center,this.origin);let n=ai.dot(this.direction),i=ai.dot(ai)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,i=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,i=(t.min.x-p.x)*c),h>=0?(s=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(s=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-p.z)*u,l=(t.max.z-p.z)*u):(a=(t.max.z-p.z)*u,l=(t.min.z-p.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,ai)!==null}intersectTriangle(t,e,n,i,s){pl.subVectors(e,t),so.subVectors(n,t),ml.crossVectors(pl,so);let o=this.direction.dot(ml),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Si.subVectors(this.origin,t);let l=a*this.direction.dot(so.crossVectors(Si,so));if(l<0)return null;let c=a*this.direction.dot(pl.cross(Si));if(c<0||l+c>o)return null;let h=-a*Si.dot(ml);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},jt=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,p,d,g,m,x){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,p,d,g,m,x)}set(t,e,n,i,s,o,a,l,c,h,u,p,d,g,m,x){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=i,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=p,f[3]=d,f[7]=g,f[11]=m,f[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/_s.setFromMatrixColumn(t,0).length(),s=1/_s.setFromMatrixColumn(t,1).length(),o=1/_s.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let p=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+g*c,e[5]=p-m*c,e[9]=-a*l,e[2]=m-p*c,e[6]=g+d*c,e[10]=o*l}else if(t.order==="YXZ"){let p=l*h,d=l*u,g=c*h,m=c*u;e[0]=p+m*a,e[4]=g*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=m+p*a,e[10]=o*l}else if(t.order==="ZXY"){let p=l*h,d=l*u,g=c*h,m=c*u;e[0]=p-m*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=m-p*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let p=o*h,d=o*u,g=a*h,m=a*u;e[0]=l*h,e[4]=g*c-d,e[8]=p*c+m,e[1]=l*u,e[5]=m*c+p,e[9]=d*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let p=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=m-p*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+g,e[10]=p-m*u}else if(t.order==="XZY"){let p=o*l,d=o*c,g=a*l,m=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=p*u+m,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=m*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Mp,t,_p)}lookAt(t,e,n){let i=this.elements;return Tn.subVectors(t,e),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),Ti.crossVectors(n,Tn),Ti.lengthSq()===0&&(Math.abs(n.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),Ti.crossVectors(n,Tn)),Ti.normalize(),ro.crossVectors(Tn,Ti),i[0]=Ti.x,i[4]=ro.x,i[8]=Tn.x,i[1]=Ti.y,i[5]=ro.y,i[9]=Tn.y,i[2]=Ti.z,i[6]=ro.z,i[10]=Tn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],p=n[9],d=n[13],g=n[2],m=n[6],x=n[10],f=n[14],y=n[3],_=n[7],v=n[11],R=n[15],E=i[0],b=i[4],C=i[8],M=i[12],w=i[1],A=i[5],z=i[9],L=i[13],N=i[2],F=i[6],B=i[10],J=i[14],O=i[3],V=i[7],j=i[11],it=i[15];return s[0]=o*E+a*w+l*N+c*O,s[4]=o*b+a*A+l*F+c*V,s[8]=o*C+a*z+l*B+c*j,s[12]=o*M+a*L+l*J+c*it,s[1]=h*E+u*w+p*N+d*O,s[5]=h*b+u*A+p*F+d*V,s[9]=h*C+u*z+p*B+d*j,s[13]=h*M+u*L+p*J+d*it,s[2]=g*E+m*w+x*N+f*O,s[6]=g*b+m*A+x*F+f*V,s[10]=g*C+m*z+x*B+f*j,s[14]=g*M+m*L+x*J+f*it,s[3]=y*E+_*w+v*N+R*O,s[7]=y*b+_*A+v*F+R*V,s[11]=y*C+_*z+v*B+R*j,s[15]=y*M+_*L+v*J+R*it,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],p=t[10],d=t[14],g=t[3],m=t[7],x=t[11],f=t[15];return g*(+s*l*u-i*c*u-s*a*p+n*c*p+i*a*d-n*l*d)+m*(+e*l*d-e*c*p+s*o*p-i*o*d+i*c*h-s*l*h)+x*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+f*(-i*a*h-e*l*u+e*a*p+i*o*u-n*o*p+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],p=t[10],d=t[11],g=t[12],m=t[13],x=t[14],f=t[15],y=u*x*c-m*p*c+m*l*d-a*x*d-u*l*f+a*p*f,_=g*p*c-h*x*c-g*l*d+o*x*d+h*l*f-o*p*f,v=h*m*c-g*u*c+g*a*d-o*m*d-h*a*f+o*u*f,R=g*u*l-h*m*l-g*a*p+o*m*p+h*a*x-o*u*x,E=e*y+n*_+i*v+s*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/E;return t[0]=y*b,t[1]=(m*p*s-u*x*s-m*i*d+n*x*d+u*i*f-n*p*f)*b,t[2]=(a*x*s-m*l*s+m*i*c-n*x*c-a*i*f+n*l*f)*b,t[3]=(u*l*s-a*p*s-u*i*c+n*p*c+a*i*d-n*l*d)*b,t[4]=_*b,t[5]=(h*x*s-g*p*s+g*i*d-e*x*d-h*i*f+e*p*f)*b,t[6]=(g*l*s-o*x*s-g*i*c+e*x*c+o*i*f-e*l*f)*b,t[7]=(o*p*s-h*l*s+h*i*c-e*p*c-o*i*d+e*l*d)*b,t[8]=v*b,t[9]=(g*u*s-h*m*s-g*n*d+e*m*d+h*n*f-e*u*f)*b,t[10]=(o*m*s-g*a*s+g*n*c-e*m*c-o*n*f+e*a*f)*b,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*b,t[12]=R*b,t[13]=(h*m*i-g*u*i+g*n*p-e*m*p-h*n*x+e*u*x)*b,t[14]=(g*a*i-o*m*i-g*n*l+e*m*l+o*n*x-e*a*x)*b,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*p+e*a*p)*b,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,p=s*c,d=s*h,g=s*u,m=o*h,x=o*u,f=a*u,y=l*c,_=l*h,v=l*u,R=n.x,E=n.y,b=n.z;return i[0]=(1-(m+f))*R,i[1]=(d+v)*R,i[2]=(g-_)*R,i[3]=0,i[4]=(d-v)*E,i[5]=(1-(p+f))*E,i[6]=(x+y)*E,i[7]=0,i[8]=(g+_)*b,i[9]=(x-y)*b,i[10]=(1-(p+m))*b,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=_s.set(i[0],i[1],i[2]).length(),o=_s.set(i[4],i[5],i[6]).length(),a=_s.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],On.copy(this);let c=1/s,h=1/o,u=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=u,On.elements[9]*=u,On.elements[10]*=u,e.setFromRotationMatrix(On),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=fi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),p=(n+i)/(n-i),d,g;if(a===fi)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ho)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=fi){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),p=(e+t)*c,d=(n+i)*h,g,m;if(a===fi)g=(o+s)*u,m=-2*u;else if(a===Ho)g=s*u,m=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=m,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},_s=new I,On=new jt,Mp=new I(0,0,0),_p=new I(1,1,1),Ti=new I,ro=new I,Tn=new I,du=new jt,fu=new ke,en=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],p=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ye(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ye(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return du.makeRotationFromQuaternion(t),this.setFromRotationMatrix(du,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fu.setFromEuler(this),this.setFromQuaternion(fu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};en.DEFAULT_ORDER="XYZ";var Vo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},wp=0,pu=new I,ws=new ke,li=new jt,oo=new I,xr=new I,bp=new I,Ep=new ke,mu=new I(1,0,0),gu=new I(0,1,0),xu=new I(0,0,1),vu={type:"added"},Sp={type:"removed"},bs={type:"childadded",child:null},gl={type:"childremoved",child:null},Fe=class r extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new I,e=new en,n=new ke,i=new I(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new jt},normalMatrix:{value:new ae}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.multiply(ws),this}rotateOnWorldAxis(t,e){return ws.setFromAxisAngle(t,e),this.quaternion.premultiply(ws),this}rotateX(t){return this.rotateOnAxis(mu,t)}rotateY(t){return this.rotateOnAxis(gu,t)}rotateZ(t){return this.rotateOnAxis(xu,t)}translateOnAxis(t,e){return pu.copy(t).applyQuaternion(this.quaternion),this.position.add(pu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(mu,t)}translateY(t){return this.translateOnAxis(gu,t)}translateZ(t){return this.translateOnAxis(xu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?oo.copy(t):oo.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(xr,oo,this.up):li.lookAt(oo,xr,this.up),this.quaternion.setFromRotationMatrix(li),i&&(li.extractRotation(i.matrixWorld),ws.setFromRotationMatrix(li),this.quaternion.premultiply(ws.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vu),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Sp),gl.child=t,this.dispatchEvent(gl),gl.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vu),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,t,bp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xr,Ep,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gn=new I,ci=new I,xl=new I,hi=new I,Es=new I,Ss=new I,yu=new I,vl=new I,yl=new I,Ml=new I,_l=new Ce,wl=new Ce,bl=new Ce,Pi=class r{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Gn.subVectors(t,e),i.cross(Gn);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Gn.subVectors(i,e),ci.subVectors(n,e),xl.subVectors(t,e);let o=Gn.dot(Gn),a=Gn.dot(ci),l=Gn.dot(xl),c=ci.dot(ci),h=ci.dot(xl),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let p=1/u,d=(c*l-a*h)*p,g=(o*h-a*l)*p;return s.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,hi.x),l.addScaledVector(o,hi.y),l.addScaledVector(a,hi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return _l.setScalar(0),wl.setScalar(0),bl.setScalar(0),_l.fromBufferAttribute(t,e),wl.fromBufferAttribute(t,n),bl.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(_l,s.x),o.addScaledVector(wl,s.y),o.addScaledVector(bl,s.z),o}static isFrontFacing(t,e,n,i){return Gn.subVectors(n,e),ci.subVectors(t,e),Gn.cross(ci).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gn.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Gn.cross(ci).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Es.subVectors(i,n),Ss.subVectors(s,n),vl.subVectors(t,n);let l=Es.dot(vl),c=Ss.dot(vl);if(l<=0&&c<=0)return e.copy(n);yl.subVectors(t,i);let h=Es.dot(yl),u=Ss.dot(yl);if(h>=0&&u<=h)return e.copy(i);let p=l*u-h*c;if(p<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Es,o);Ml.subVectors(t,s);let d=Es.dot(Ml),g=Ss.dot(Ml);if(g>=0&&d<=g)return e.copy(s);let m=d*c-l*g;if(m<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Ss,a);let x=h*g-d*u;if(x<=0&&u-h>=0&&d-g>=0)return yu.subVectors(s,i),a=(u-h)/(u-h+(d-g)),e.copy(i).addScaledVector(yu,a);let f=1/(x+m+p);return o=m*f,a=p*f,e.copy(n).addScaledVector(Es,o).addScaledVector(Ss,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Rd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ri={h:0,s:0,l:0},ao={h:0,s:0,l:0};function El(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var St=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ee){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,me.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=me.workingColorSpace){return this.r=t,this.g=e,this.b=n,me.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=me.workingColorSpace){if(t=Th(t,1),e=Ye(e,0,1),n=Ye(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=El(o,s,t+1/3),this.g=El(o,s,t),this.b=El(o,s,t-1/3)}return me.toWorkingColorSpace(this,i),this}setStyle(t,e=Ee){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ee){let n=Rd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=pi(t.r),this.g=pi(t.g),this.b=pi(t.b),this}copyLinearToSRGB(t){return this.r=Hs(t.r),this.g=Hs(t.g),this.b=Hs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ee){return me.fromWorkingColorSpace(ln.copy(this),t),Math.round(Ye(ln.r*255,0,255))*65536+Math.round(Ye(ln.g*255,0,255))*256+Math.round(Ye(ln.b*255,0,255))}getHexString(t=Ee){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=me.workingColorSpace){me.fromWorkingColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=me.workingColorSpace){return me.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=Ee){me.fromWorkingColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==Ee?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Ri),this.setHSL(Ri.h+t,Ri.s+e,Ri.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ri),t.getHSL(ao);let n=Cr(Ri.h,ao.h,e),i=Cr(Ri.s,ao.s,e),s=Cr(Ri.l,ao.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new St;St.NAMES=Rd;var Tp=0,$n=class extends Ui{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ti(),this.name="",this.blending=Ns,this.side=Li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ol,this.blendDst=Gl,this.blendEquation=Dn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=Os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ns&&(n.blending=this.blending),this.side!==Li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ol&&(n.blendSrc=this.blendSrc),this.blendDst!==Gl&&(n.blendDst=this.blendDst),this.blendEquation!==Dn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},le=class extends $n{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.combine=pd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Xe=new I,lo=new tt,ge=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Tc,this.updateRanges=[],this.gpuType=Qn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)lo.fromBufferAttribute(this,e),lo.applyMatrix3(t),this.setXY(e,lo.x,lo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix3(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}};var Xs=class extends ge{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var $s=class extends ge{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Xt=class extends ge{constructor(t,e,n){super(new Float32Array(t),e,n)}},Rp=0,Ln=new jt,Sl=new Fe,Ts=new I,Rn=new mi,vr=new mi,tn=new I,oe=class r extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Rp++}),this.uuid=ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Td(t)?$s:Xs)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ae().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ln.makeRotationFromQuaternion(t),this.applyMatrix4(Ln),this}rotateX(t){return Ln.makeRotationX(t),this.applyMatrix4(Ln),this}rotateY(t){return Ln.makeRotationY(t),this.applyMatrix4(Ln),this}rotateZ(t){return Ln.makeRotationZ(t),this.applyMatrix4(Ln),this}translate(t,e,n){return Ln.makeTranslation(t,e,n),this.applyMatrix4(Ln),this}scale(t,e,n){return Ln.makeScale(t,e,n),this.applyMatrix4(Ln),this}lookAt(t){return Sl.lookAt(t),Sl.updateMatrix(),this.applyMatrix4(Sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Xt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new mi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Rn.setFromBufferAttribute(s),this.morphTargetsRelative?(tn.addVectors(this.boundingBox.min,Rn.min),this.boundingBox.expandByPoint(tn),tn.addVectors(this.boundingBox.max,Rn.max),this.boundingBox.expandByPoint(tn)):(this.boundingBox.expandByPoint(Rn.min),this.boundingBox.expandByPoint(Rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new gi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Rn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];vr.setFromBufferAttribute(a),this.morphTargetsRelative?(tn.addVectors(Rn.min,vr.min),Rn.expandByPoint(tn),tn.addVectors(Rn.max,vr.max),Rn.expandByPoint(tn)):(Rn.expandByPoint(vr.min),Rn.expandByPoint(vr.max))}Rn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)tn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(tn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)tn.fromBufferAttribute(a,c),l&&(Ts.fromBufferAttribute(t,c),tn.add(Ts)),i=Math.max(i,n.distanceToSquared(tn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ge(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,h=new I,u=new I,p=new tt,d=new tt,g=new tt,m=new I,x=new I;function f(C,M,w){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,w),p.fromBufferAttribute(s,C),d.fromBufferAttribute(s,M),g.fromBufferAttribute(s,w),h.sub(c),u.sub(c),d.sub(p),g.sub(p);let A=1/(d.x*g.y-g.x*d.y);isFinite(A)&&(m.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(A),x.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(A),a[C].add(m),a[M].add(m),a[w].add(m),l[C].add(x),l[M].add(x),l[w].add(x))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let C=0,M=y.length;C<M;++C){let w=y[C],A=w.start,z=w.count;for(let L=A,N=A+z;L<N;L+=3)f(t.getX(L+0),t.getX(L+1),t.getX(L+2))}let _=new I,v=new I,R=new I,E=new I;function b(C){R.fromBufferAttribute(i,C),E.copy(R);let M=a[C];_.copy(M),_.sub(R.multiplyScalar(R.dot(M))).normalize(),v.crossVectors(E,M);let A=v.dot(l[C])<0?-1:1;o.setXYZW(C,_.x,_.y,_.z,A)}for(let C=0,M=y.length;C<M;++C){let w=y[C],A=w.start,z=w.count;for(let L=A,N=A+z;L<N;L+=3)b(t.getX(L+0)),b(t.getX(L+1)),b(t.getX(L+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ge(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(t)for(let p=0,d=t.count;p<d;p+=3){let g=t.getX(p+0),m=t.getX(p+1),x=t.getX(p+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,x),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,x),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let p=0,d=e.count;p<d;p+=3)i.fromBufferAttribute(e,p+0),s.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)tn.fromBufferAttribute(t,e),tn.normalize(),t.setXYZ(e,tn.x,tn.y,tn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,p=new c.constructor(l.length*h),d=0,g=0;for(let m=0,x=l.length;m<x;m++){a.isInterleavedBufferAttribute?d=l[m]*a.data.stride+a.offset:d=l[m]*h;for(let f=0;f<h;f++)p[g++]=c[d++]}return new ge(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let p=c[h],d=t(p,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,p=c.length;u<p;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let p=0,d=u.length;p<d;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mu=new jt,Ji=new Dr,co=new gi,_u=new I,ho=new I,uo=new I,fo=new I,Tl=new I,po=new I,wu=new I,mo=new I,q=class extends Fe{constructor(t=new oe,e=new le){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){po.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Tl.fromBufferAttribute(u,t),o?po.addScaledVector(Tl,h):po.addScaledVector(Tl.sub(e),h))}e.add(po)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),co.copy(n.boundingSphere),co.applyMatrix4(s),Ji.copy(t.ray).recast(t.near),!(co.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(co,_u)===null||Ji.origin.distanceToSquared(_u)>(t.far-t.near)**2))&&(Mu.copy(s).invert(),Ji.copy(t.ray).applyMatrix4(Mu),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,p=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,m=p.length;g<m;g++){let x=p[g],f=o[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(a.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,R=_;v<R;v+=3){let E=a.getX(v),b=a.getX(v+1),C=a.getX(v+2);i=go(this,f,t,n,c,h,u,E,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),m=Math.min(a.count,d.start+d.count);for(let x=g,f=m;x<f;x+=3){let y=a.getX(x),_=a.getX(x+1),v=a.getX(x+2);i=go(this,o,t,n,c,h,u,y,_,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,m=p.length;g<m;g++){let x=p[g],f=o[x.materialIndex],y=Math.max(x.start,d.start),_=Math.min(l.count,Math.min(x.start+x.count,d.start+d.count));for(let v=y,R=_;v<R;v+=3){let E=v,b=v+1,C=v+2;i=go(this,f,t,n,c,h,u,E,b,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=x.materialIndex,e.push(i))}}else{let g=Math.max(0,d.start),m=Math.min(l.count,d.start+d.count);for(let x=g,f=m;x<f;x+=3){let y=x,_=x+1,v=x+2;i=go(this,o,t,n,c,h,u,y,_,v),i&&(i.faceIndex=Math.floor(x/3),e.push(i))}}}};function Ap(r,t,e,n,i,s,o,a){let l;if(t.side===cn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Li,a),l===null)return null;mo.copy(a),mo.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(mo);return c<e.near||c>e.far?null:{distance:c,point:mo.clone(),object:r}}function go(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ho),r.getVertexPosition(l,uo),r.getVertexPosition(c,fo);let h=Ap(r,t,e,n,ho,uo,fo,wu);if(h){let u=new I;Pi.getBarycoord(wu,ho,uo,fo,u),i&&(h.uv=Pi.getInterpolatedAttribute(i,a,l,c,u,new tt)),s&&(h.uv1=Pi.getInterpolatedAttribute(s,a,l,c,u,new tt)),o&&(h.normal=Pi.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:l,c,normal:new I,materialIndex:0};Pi.getNormal(ho,uo,fo,p.normal),h.face=p,h.barycoord=u}return h}var pt=class r extends oe{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],p=0,d=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(u,2));function g(m,x,f,y,_,v,R,E,b,C,M){let w=v/b,A=R/C,z=v/2,L=R/2,N=E/2,F=b+1,B=C+1,J=0,O=0,V=new I;for(let j=0;j<B;j++){let it=j*A-L;for(let ut=0;ut<F;ut++){let xt=ut*w-z;V[m]=xt*y,V[x]=it*_,V[f]=N,c.push(V.x,V.y,V.z),V[m]=0,V[x]=0,V[f]=E>0?1:-1,h.push(V.x,V.y,V.z),u.push(ut/b),u.push(1-j/C),J+=1}}for(let j=0;j<C;j++)for(let it=0;it<b;it++){let ut=p+it+F*j,xt=p+it+F*(j+1),S=p+(it+1)+F*(j+1),Y=p+(it+1)+F*j;l.push(ut,xt,Y),l.push(xt,S,Y),O+=6}a.addGroup(d,O,M),d+=O,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function qs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function vn(r){let t={};for(let e=0;e<r.length;e++){let n=qs(r[e]);for(let i in n)t[i]=n[i]}return t}function Cp(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Ad(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:me.workingColorSpace}var fn={clone:qs,merge:vn},Pp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ip=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,de=class extends $n{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pp,this.fragmentShader=Ip,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=qs(t.uniforms),this.uniformsGroups=Cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Wo=class extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=fi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ai=new I,bu=new tt,Eu=new tt,Ze=class extends Wo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ws*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Ar*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ws*2*Math.atan(Math.tan(Ar*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ai.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z),Ai.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ai.x,Ai.y).multiplyScalar(-t/Ai.z)}getViewSize(t,e){return this.getViewBounds(t,bu,Eu),e.subVectors(Eu,bu)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Ar*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Rs=-90,As=1,Pc=class extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ze(Rs,As,t,e);i.layers=this.layers,this.add(i);let s=new Ze(Rs,As,t,e);s.layers=this.layers,this.add(s);let o=new Ze(Rs,As,t,e);o.layers=this.layers,this.add(o);let a=new Ze(Rs,As,t,e);a.layers=this.layers,this.add(a);let l=new Ze(Rs,As,t,e);l.layers=this.layers,this.add(l);let c=new Ze(Rs,As,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ho)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=m,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,p,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xo=class extends bn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Gs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ic=class extends $e{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Xo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new pt(5,5,5),s=new de({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:cn,blending:Je});s.uniforms.tEquirect.value=e;let o=new q(i,s),a=e.minFilter;return e.minFilter===is&&(e.minFilter=Kn),new Pc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Rl=new I,zp=new I,Lp=new ae,di=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Rl.subVectors(n,e).cross(zp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Rl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Lp.getNormalMatrix(t),i=this.coplanarPoint(Rl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ji=new gi,xo=new I,kr=class{constructor(t=new di,e=new di,n=new di,i=new di,s=new di,o=new di){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=fi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],p=i[7],d=i[8],g=i[9],m=i[10],x=i[11],f=i[12],y=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-s,p-c,x-d,v-f).normalize(),n[1].setComponents(l+s,p+c,x+d,v+f).normalize(),n[2].setComponents(l+o,p+h,x+g,v+y).normalize(),n[3].setComponents(l-o,p-h,x-g,v-y).normalize(),n[4].setComponents(l-a,p-u,x-m,v-_).normalize(),e===fi)n[5].setComponents(l+a,p+u,x+m,v+_).normalize();else if(e===Ho)n[5].setComponents(a,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ji.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ji.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ji)}intersectsSprite(t){return ji.center.set(0,0,0),ji.radius=.7071067811865476,ji.applyMatrix4(t.matrixWorld),this.intersectsSphere(ji)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(xo.x=i.normal.x>0?t.max.x:t.min.x,xo.y=i.normal.y>0?t.max.y:t.min.y,xo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(xo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Cd(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Dp(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,p=r.createBuffer();r.bindBuffer(l,p),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<u.length;d++){let g=u[p],m=u[d];m.start<=g.start+g.count+1?g.count=Math.max(g.count,m.start+m.count-g.start):(++p,u[p]=m)}u.length=p+1;for(let d=0,g=u.length;d<g;d++){let m=u[d];r.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ve=class r extends oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,p=e/l,d=[],g=[],m=[],x=[];for(let f=0;f<h;f++){let y=f*p-o;for(let _=0;_<c;_++){let v=_*u-s;g.push(v,-y,0),m.push(0,0,1),x.push(_/a),x.push(1-f/l)}}for(let f=0;f<l;f++)for(let y=0;y<a;y++){let _=y+c*f,v=y+c*(f+1),R=y+1+c*(f+1),E=y+1+c*f;d.push(_,v,E),d.push(v,R,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Up=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vp=`#ifdef USE_BATCHING
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
#endif`,Wp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yp=`#ifdef USE_IRIDESCENCE
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
#endif`,Zp=`#ifdef USE_BUMPMAP
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
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,s0=`#define PI 3.141592653589793
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
} // validated`,r0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o0=`vec3 transformedNormal = objectNormal;
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
#endif`,a0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,c0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,h0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,u0="gl_FragColor = linearToOutputTexel( gl_FragColor );",d0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m0=`#ifdef USE_ENVMAP
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
#endif`,g0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
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
#endif`,v0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,M0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,w0=`#ifdef USE_GRADIENTMAP
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
}`,b0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,E0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,T0=`uniform bool receiveShadow;
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
#endif`,R0=`#ifdef USE_ENVMAP
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
#endif`,A0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,C0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,z0=`PhysicalMaterial material;
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
#endif`,L0=`struct PhysicalMaterial {
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
}`,D0=`
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
#endif`,k0=`#if defined( RE_IndirectDiffuse )
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
#endif`,U0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,N0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,V0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,W0=`#if defined( USE_POINTS_UV )
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
#endif`,X0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,q0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J0=`#ifdef USE_MORPHTARGETS
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
#endif`,j0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Q0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,em=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,im=`#ifdef USE_NORMALMAP
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
#endif`,sm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,om=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,am=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,um=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ym=`float getShadowMask() {
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
}`,Mm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,Em=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Am=`#ifdef USE_TRANSMISSION
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
#endif`,Cm=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Dm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,km=`uniform sampler2D t2D;
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
}`,Um=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
}`,Gm=`#define DISTANCE
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
}`,Vm=`#define DISTANCE
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
}`,Wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Xm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$m=`uniform float scale;
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
}`,qm=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,Zm=`uniform vec3 diffuse;
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
}`,Jm=`#define LAMBERT
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
}`,jm=`#define LAMBERT
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
}`,Km=`#define MATCAP
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
}`,Qm=`#define MATCAP
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
}`,tg=`#define NORMAL
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
}`,eg=`#define NORMAL
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
}`,ng=`#define PHONG
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
}`,ig=`#define PHONG
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
}`,sg=`#define STANDARD
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
}`,rg=`#define STANDARD
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
}`,og=`#define TOON
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
}`,ag=`#define TOON
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
}`,lg=`uniform float size;
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
}`,cg=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,ug=`uniform vec3 color;
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
}`,dg=`uniform float rotation;
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
}`,fg=`uniform vec3 diffuse;
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
}`,ce={alphahash_fragment:kp,alphahash_pars_fragment:Up,alphamap_fragment:Np,alphamap_pars_fragment:Bp,alphatest_fragment:Hp,alphatest_pars_fragment:Fp,aomap_fragment:Op,aomap_pars_fragment:Gp,batching_pars_vertex:Vp,batching_vertex:Wp,begin_vertex:Xp,beginnormal_vertex:$p,bsdfs:qp,iridescence_fragment:Yp,bumpmap_pars_fragment:Zp,clipping_planes_fragment:Jp,clipping_planes_pars_fragment:jp,clipping_planes_pars_vertex:Kp,clipping_planes_vertex:Qp,color_fragment:t0,color_pars_fragment:e0,color_pars_vertex:n0,color_vertex:i0,common:s0,cube_uv_reflection_fragment:r0,defaultnormal_vertex:o0,displacementmap_pars_vertex:a0,displacementmap_vertex:l0,emissivemap_fragment:c0,emissivemap_pars_fragment:h0,colorspace_fragment:u0,colorspace_pars_fragment:d0,envmap_fragment:f0,envmap_common_pars_fragment:p0,envmap_pars_fragment:m0,envmap_pars_vertex:g0,envmap_physical_pars_fragment:R0,envmap_vertex:x0,fog_vertex:v0,fog_pars_vertex:y0,fog_fragment:M0,fog_pars_fragment:_0,gradientmap_pars_fragment:w0,lightmap_pars_fragment:b0,lights_lambert_fragment:E0,lights_lambert_pars_fragment:S0,lights_pars_begin:T0,lights_toon_fragment:A0,lights_toon_pars_fragment:C0,lights_phong_fragment:P0,lights_phong_pars_fragment:I0,lights_physical_fragment:z0,lights_physical_pars_fragment:L0,lights_fragment_begin:D0,lights_fragment_maps:k0,lights_fragment_end:U0,logdepthbuf_fragment:N0,logdepthbuf_pars_fragment:B0,logdepthbuf_pars_vertex:H0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:G0,map_particle_fragment:V0,map_particle_pars_fragment:W0,metalnessmap_fragment:X0,metalnessmap_pars_fragment:$0,morphinstance_vertex:q0,morphcolor_vertex:Y0,morphnormal_vertex:Z0,morphtarget_pars_vertex:J0,morphtarget_vertex:j0,normal_fragment_begin:K0,normal_fragment_maps:Q0,normal_pars_fragment:tm,normal_pars_vertex:em,normal_vertex:nm,normalmap_pars_fragment:im,clearcoat_normal_fragment_begin:sm,clearcoat_normal_fragment_maps:rm,clearcoat_pars_fragment:om,iridescence_pars_fragment:am,opaque_fragment:lm,packing:cm,premultiplied_alpha_fragment:hm,project_vertex:um,dithering_fragment:dm,dithering_pars_fragment:fm,roughnessmap_fragment:pm,roughnessmap_pars_fragment:mm,shadowmap_pars_fragment:gm,shadowmap_pars_vertex:xm,shadowmap_vertex:vm,shadowmask_pars_fragment:ym,skinbase_vertex:Mm,skinning_pars_vertex:_m,skinning_vertex:wm,skinnormal_vertex:bm,specularmap_fragment:Em,specularmap_pars_fragment:Sm,tonemapping_fragment:Tm,tonemapping_pars_fragment:Rm,transmission_fragment:Am,transmission_pars_fragment:Cm,uv_pars_fragment:Pm,uv_pars_vertex:Im,uv_vertex:zm,worldpos_vertex:Lm,background_vert:Dm,background_frag:km,backgroundCube_vert:Um,backgroundCube_frag:Nm,cube_vert:Bm,cube_frag:Hm,depth_vert:Fm,depth_frag:Om,distanceRGBA_vert:Gm,distanceRGBA_frag:Vm,equirect_vert:Wm,equirect_frag:Xm,linedashed_vert:$m,linedashed_frag:qm,meshbasic_vert:Ym,meshbasic_frag:Zm,meshlambert_vert:Jm,meshlambert_frag:jm,meshmatcap_vert:Km,meshmatcap_frag:Qm,meshnormal_vert:tg,meshnormal_frag:eg,meshphong_vert:ng,meshphong_frag:ig,meshphysical_vert:sg,meshphysical_frag:rg,meshtoon_vert:og,meshtoon_frag:ag,points_vert:lg,points_frag:cg,shadow_vert:hg,shadow_frag:ug,sprite_vert:dg,sprite_frag:fg},It={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ae}},envmap:{envMap:{value:null},envMapRotation:{value:new ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ae},normalScale:{value:new tt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0},uvTransform:{value:new ae}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new tt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ae},alphaMap:{value:null},alphaMapTransform:{value:new ae},alphaTest:{value:0}}},jn={basic:{uniforms:vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new St(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:vn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:vn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:vn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new St(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:vn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:vn([It.points,It.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:vn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:vn([It.common,It.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:vn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:vn([It.sprite,It.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ae}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:vn([It.common,It.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:vn([It.lights,It.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};jn.physical={uniforms:vn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ae},clearcoatNormalScale:{value:new tt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ae},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ae},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ae},transmissionSamplerSize:{value:new tt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ae},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ae},anisotropyVector:{value:new tt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ae}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};var vo={r:0,b:0,g:0},Ki=new en,pg=new jt;function mg(r,t,e,n,i,s,o){let a=new St(0),l=s===!0?0:1,c,h,u=null,p=0,d=null;function g(y){let _=y.isScene===!0?y.background:null;return _&&_.isTexture&&(_=(y.backgroundBlurriness>0?e:t).get(_)),_}function m(y){let _=!1,v=g(y);v===null?f(a,l):v&&v.isColor&&(f(v,1),_=!0);let R=r.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function x(y,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===da)?(h===void 0&&(h=new q(new pt(1,1,1),new de({name:"BackgroundCubeMaterial",uniforms:qs(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ki.copy(_.backgroundRotation),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pg.makeRotationFromEuler(Ki)),h.material.toneMapped=me.getTransfer(v.colorSpace)!==Re,(u!==v||p!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,p=v.version,d=r.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new q(new ve(2,2),new de({name:"BackgroundMaterial",uniforms:qs(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Li,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=me.getTransfer(v.colorSpace)!==Re,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||p!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,p=v.version,d=r.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function f(y,_){y.getRGB(vo,Ad(r)),n.buffers.color.setClear(vo.r,vo.g,vo.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(y,_=1){a.set(y),l=_,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,f(a,l)},render:m,addToRenderList:x}}function gg(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=p(null),s=i,o=!1;function a(w,A,z,L,N){let F=!1,B=u(L,z,A);s!==B&&(s=B,c(s.object)),F=d(w,L,z,N),F&&g(w,L,z,N),N!==null&&t.update(N,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(w,A,z,L),N!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function h(w){return r.deleteVertexArray(w)}function u(w,A,z){let L=z.wireframe===!0,N=n[w.id];N===void 0&&(N={},n[w.id]=N);let F=N[A.id];F===void 0&&(F={},N[A.id]=F);let B=F[L];return B===void 0&&(B=p(l()),F[L]=B),B}function p(w){let A=[],z=[],L=[];for(let N=0;N<e;N++)A[N]=0,z[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:A,enabledAttributes:z,attributeDivisors:L,object:w,attributes:{},index:null}}function d(w,A,z,L){let N=s.attributes,F=A.attributes,B=0,J=z.getAttributes();for(let O in J)if(J[O].location>=0){let j=N[O],it=F[O];if(it===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(it=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(it=w.instanceColor)),j===void 0||j.attribute!==it||it&&j.data!==it.data)return!0;B++}return s.attributesNum!==B||s.index!==L}function g(w,A,z,L){let N={},F=A.attributes,B=0,J=z.getAttributes();for(let O in J)if(J[O].location>=0){let j=F[O];j===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(j=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(j=w.instanceColor));let it={};it.attribute=j,j&&j.data&&(it.data=j.data),N[O]=it,B++}s.attributes=N,s.attributesNum=B,s.index=L}function m(){let w=s.newAttributes;for(let A=0,z=w.length;A<z;A++)w[A]=0}function x(w){f(w,0)}function f(w,A){let z=s.newAttributes,L=s.enabledAttributes,N=s.attributeDivisors;z[w]=1,L[w]===0&&(r.enableVertexAttribArray(w),L[w]=1),N[w]!==A&&(r.vertexAttribDivisor(w,A),N[w]=A)}function y(){let w=s.newAttributes,A=s.enabledAttributes;for(let z=0,L=A.length;z<L;z++)A[z]!==w[z]&&(r.disableVertexAttribArray(z),A[z]=0)}function _(w,A,z,L,N,F,B){B===!0?r.vertexAttribIPointer(w,A,z,N,F):r.vertexAttribPointer(w,A,z,L,N,F)}function v(w,A,z,L){m();let N=L.attributes,F=z.getAttributes(),B=A.defaultAttributeValues;for(let J in F){let O=F[J];if(O.location>=0){let V=N[J];if(V===void 0&&(J==="instanceMatrix"&&w.instanceMatrix&&(V=w.instanceMatrix),J==="instanceColor"&&w.instanceColor&&(V=w.instanceColor)),V!==void 0){let j=V.normalized,it=V.itemSize,ut=t.get(V);if(ut===void 0)continue;let xt=ut.buffer,S=ut.type,Y=ut.bytesPerElement,nt=S===r.INT||S===r.UNSIGNED_INT||V.gpuType===vh;if(V.isInterleavedBufferAttribute){let K=V.data,mt=K.stride,yt=V.offset;if(K.isInstancedInterleavedBuffer){for(let At=0;At<O.locationSize;At++)f(O.location+At,K.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let At=0;At<O.locationSize;At++)x(O.location+At);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let At=0;At<O.locationSize;At++)_(O.location+At,it/O.locationSize,S,j,mt*Y,(yt+it/O.locationSize*At)*Y,nt)}else{if(V.isInstancedBufferAttribute){for(let K=0;K<O.locationSize;K++)f(O.location+K,V.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let K=0;K<O.locationSize;K++)x(O.location+K);r.bindBuffer(r.ARRAY_BUFFER,xt);for(let K=0;K<O.locationSize;K++)_(O.location+K,it/O.locationSize,S,j,it*Y,it/O.locationSize*K*Y,nt)}}else if(B!==void 0){let j=B[J];if(j!==void 0)switch(j.length){case 2:r.vertexAttrib2fv(O.location,j);break;case 3:r.vertexAttrib3fv(O.location,j);break;case 4:r.vertexAttrib4fv(O.location,j);break;default:r.vertexAttrib1fv(O.location,j)}}}}y()}function R(){C();for(let w in n){let A=n[w];for(let z in A){let L=A[z];for(let N in L)h(L[N].object),delete L[N];delete A[z]}delete n[w]}}function E(w){if(n[w.id]===void 0)return;let A=n[w.id];for(let z in A){let L=A[z];for(let N in L)h(L[N].object),delete L[N];delete A[z]}delete n[w.id]}function b(w){for(let A in n){let z=n[A];if(z[w.id]===void 0)continue;let L=z[w.id];for(let N in L)h(L[N].object),delete L[N];delete z[w.id]}}function C(){M(),o=!0,s!==i&&(s=i,c(s.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:b,initAttributes:m,enableAttribute:x,disableUnusedAttributes:y}}function xg(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];e.update(d,n,1)}function l(c,h,u,p){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let g=0;for(let m=0;m<u;m++)g+=h[m]*p[m];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vg(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let b=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==An&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){let C=b===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(b!==Xn&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Qn&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),x=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),f=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,E=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:m,maxCubemapSize:x,maxAttributes:f,maxVertexUniforms:y,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function yg(r){let t=this,e=null,n=0,i=!1,s=!1,o=new di,a=new ae,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){let d=u.length!==0||p||n!==0||i;return i=p,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,d){let g=u.clippingPlanes,m=u.clipIntersection,x=u.clipShadows,f=r.get(u);if(!i||g===null||g.length===0||s&&!x)s?h(null):c();else{let y=s?0:n,_=y*4,v=f.clippingState||null;l.value=v,v=h(g,p,_,d);for(let R=0;R!==_;++R)v[R]=e[R];f.clippingState=v,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,d,g){let m=u!==null?u.length:0,x=null;if(m!==0){if(x=l.value,g!==!0||x===null){let f=d+m*4,y=p.matrixWorldInverse;a.getNormalMatrix(y),(x===null||x.length<f)&&(x=new Float32Array(f));for(let _=0,v=d;_!==m;++_,v+=4)o.copy(u[_]).applyMatrix4(y,a),o.normal.toArray(x,v),x[v+3]=o.constant}l.value=x,l.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,x}}function Mg(r){let t=new WeakMap;function e(o,a){return a===Jl?o.mapping=Gs:a===jl&&(o.mapping=Vs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jl||a===jl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ic(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var Ys=class extends Wo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},ks=4,Su=[.125,.215,.35,.446,.526,.582],es=20,Al=new Ys,Tu=new St,Cl=null,Pl=0,Il=0,zl=!1,ts=(1+Math.sqrt(5))/2,Cs=1/ts,Ru=[new I(-ts,Cs,0),new I(ts,Cs,0),new I(-Cs,0,ts),new I(Cs,0,ts),new I(0,ts,-Cs),new I(0,ts,Cs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],Zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cl,Pl,Il),this._renderer.xr.enabled=zl,t.scissorTest=!1,yo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Gs||t.mapping===Vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cl=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Il=this._renderer.getActiveMipmapLevel(),zl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:dn,format:An,colorSpace:sr,depthBuffer:!1},i=Au(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_g(s)),this._blurMaterial=wg(s,t,e)}return i}_compileMaterial(t){let e=new q(this._lodPlanes[0],t);this._renderer.compile(e,Al)}_sceneToCubeUV(t,e,n,i){let a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Tu),h.toneMapping=Ii,h.autoClear=!1;let d=new le({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),g=new q(new pt,d),m=!1,x=t.background;x?x.isColor&&(d.color.copy(x),t.background=null,m=!0):(d.color.copy(Tu),m=!0);for(let f=0;f<6;f++){let y=f%3;y===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):y===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));let _=this._cubeSize;yo(i,y*_,f>2?_:0,_,_),h.setRenderTarget(i),m&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=x}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Gs||t.mapping===Vs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cu());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new q(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;yo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Al)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Ru[(i-s-1)%Ru.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new q(this._lodPlanes[i],c),p=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*es-1),m=s/g,x=isFinite(s)?1+Math.floor(h*m):es;x>es&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${x} samples when the maximum is set to ${es}`);let f=[],y=0;for(let b=0;b<es;++b){let C=b/m,M=Math.exp(-C*C/2);f.push(M),b===0?y+=M:b<x&&(y+=2*M)}for(let b=0;b<f.length;b++)f[b]=f[b]/y;p.envMap.value=t.texture,p.samples.value=x,p.weights.value=f,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:_}=this;p.dTheta.value=g,p.mipInt.value=_-n;let v=this._sizeLods[i],R=3*v*(i>_-ks?i-_+ks:0),E=4*(this._cubeSize-v);yo(e,R,E,3*v,2*v),l.setRenderTarget(e),l.render(u,Al)}};function _g(r){let t=[],e=[],n=[],i=r,s=r-ks+1+Su.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-ks?l=Su[o-r+ks-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,m=3,x=2,f=1,y=new Float32Array(m*g*d),_=new Float32Array(x*g*d),v=new Float32Array(f*g*d);for(let E=0;E<d;E++){let b=E%3*2/3-1,C=E>2?0:-1,M=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];y.set(M,m*g*E),_.set(p,x*g*E);let w=[E,E,E,E,E,E];v.set(w,f*g*E)}let R=new oe;R.setAttribute("position",new ge(y,m)),R.setAttribute("uv",new ge(_,x)),R.setAttribute("faceIndex",new ge(v,f)),t.push(R),i>ks&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Au(r,t,e){let n=new $e(r,t,e);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function wg(r,t,e){let n=new Float32Array(es),i=new I(0,1,0);return new de({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Cu(){return new de({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rh(),fragmentShader:`

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
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Pu(){return new de({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Je,depthTest:!1,depthWrite:!1})}function Rh(){return`

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
	`}function bg(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Jl||l===jl,h=l===Gs||l===Vs;if(c||h){let u=t.get(a),p=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return e===null&&(e=new Zs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Zs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Eg(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Tr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Sg(r,t,e,n){let i={},s=new WeakMap;function o(u){let p=u.target;p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);for(let g in p.morphAttributes){let m=p.morphAttributes[g];for(let x=0,f=m.length;x<f;x++)t.remove(m[x])}p.removeEventListener("dispose",o),delete i[p.id];let d=s.get(p);d&&(t.remove(d),s.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function a(u,p){return i[p.id]===!0||(p.addEventListener("dispose",o),i[p.id]=!0,e.memory.geometries++),p}function l(u){let p=u.attributes;for(let g in p)t.update(p[g],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let m=d[g];for(let x=0,f=m.length;x<f;x++)t.update(m[x],r.ARRAY_BUFFER)}}function c(u){let p=[],d=u.index,g=u.attributes.position,m=0;if(d!==null){let y=d.array;m=d.version;for(let _=0,v=y.length;_<v;_+=3){let R=y[_+0],E=y[_+1],b=y[_+2];p.push(R,E,E,b,b,R)}}else if(g!==void 0){let y=g.array;m=g.version;for(let _=0,v=y.length/3-1;_<v;_+=3){let R=_+0,E=_+1,b=_+2;p.push(R,E,E,b,b,R)}}else return;let x=new(Td(p)?$s:Xs)(p,1);x.version=m;let f=s.get(u);f&&t.remove(f),s.set(u,x)}function h(u){let p=s.get(u);if(p){let d=u.index;d!==null&&p.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Tg(r,t,e){let n;function i(p){n=p}let s,o;function a(p){s=p.type,o=p.bytesPerElement}function l(p,d){r.drawElements(n,d,s,p*o),e.update(d,n,1)}function c(p,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,p*o,g),e.update(d,n,g))}function h(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,g);let x=0;for(let f=0;f<g;f++)x+=d[f];e.update(x,n,1)}function u(p,d,g,m){if(g===0)return;let x=t.get("WEBGL_multi_draw");if(x===null)for(let f=0;f<p.length;f++)c(p[f]/o,d[f],m[f]);else{x.multiDrawElementsInstancedWEBGL(n,d,0,s,p,0,m,0,g);let f=0;for(let y=0;y<g;y++)f+=d[y]*m[y];e.update(f,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Rg(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Ag(r,t,e){let n=new WeakMap,i=new Ce;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==u){let M=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,x=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],_=0;d===!0&&(_=1),g===!0&&(_=2),m===!0&&(_=3);let v=a.attributes.position.count*_,R=1;v>t.maxTextureSize&&(R=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let E=new Float32Array(v*R*4*u),b=new Go(E,v,R,u);b.type=Qn,b.needsUpdate=!0;let C=_*4;for(let w=0;w<u;w++){let A=x[w],z=f[w],L=y[w],N=v*R*4*w;for(let F=0;F<A.count;F++){let B=F*C;d===!0&&(i.fromBufferAttribute(A,F),E[N+B+0]=i.x,E[N+B+1]=i.y,E[N+B+2]=i.z,E[N+B+3]=0),g===!0&&(i.fromBufferAttribute(z,F),E[N+B+4]=i.x,E[N+B+5]=i.y,E[N+B+6]=i.z,E[N+B+7]=0),m===!0&&(i.fromBufferAttribute(L,F),E[N+B+8]=i.x,E[N+B+9]=i.y,E[N+B+10]=i.z,E[N+B+11]=L.itemSize===4?i.w:1)}}p={count:u,texture:b,size:new tt(v,R)},n.set(a,p),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let m=0;m<c.length;m++)d+=c[m];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",p.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",p.size)}return{update:s}}function Cg(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let p=l.skeleton;i.get(p)!==c&&(p.update(),i.set(p,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Js=class extends bn{constructor(t,e,n,i,s,o,a,l,c,h=Bs){if(h!==Bs&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=ss),n===void 0&&h===ki&&(n=Di),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:hn,this.minFilter=l!==void 0?l:hn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Pd=new bn,Iu=new Js(1,1),Id=new Go,zd=new Cc,Ld=new Xo,zu=[],Lu=[],Du=new Float32Array(16),ku=new Float32Array(9),Uu=new Float32Array(4);function or(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=zu[i];if(s===void 0&&(s=new Float32Array(i),zu[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function je(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Ke(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function pa(r,t){let e=Lu[t];e===void 0&&(e=new Int32Array(t),Lu[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function Pg(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Ig(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2fv(this.addr,t),Ke(e,t)}}function zg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;r.uniform3fv(this.addr,t),Ke(e,t)}}function Lg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4fv(this.addr,t),Ke(e,t)}}function Dg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Uu.set(n),r.uniformMatrix2fv(this.addr,!1,Uu),Ke(e,n)}}function kg(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;ku.set(n),r.uniformMatrix3fv(this.addr,!1,ku),Ke(e,n)}}function Ug(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(je(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Ke(e,t)}else{if(je(e,n))return;Du.set(n),r.uniformMatrix4fv(this.addr,!1,Du),Ke(e,n)}}function Ng(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Bg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2iv(this.addr,t),Ke(e,t)}}function Hg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3iv(this.addr,t),Ke(e,t)}}function Fg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4iv(this.addr,t),Ke(e,t)}}function Og(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Gg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;r.uniform2uiv(this.addr,t),Ke(e,t)}}function Vg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;r.uniform3uiv(this.addr,t),Ke(e,t)}}function Wg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;r.uniform4uiv(this.addr,t),Ke(e,t)}}function Xg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Iu.compareFunction=Sd,s=Iu):s=Pd,e.setTexture2D(t||s,i)}function $g(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||zd,i)}function qg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Ld,i)}function Yg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Id,i)}function Zg(r){switch(r){case 5126:return Pg;case 35664:return Ig;case 35665:return zg;case 35666:return Lg;case 35674:return Dg;case 35675:return kg;case 35676:return Ug;case 5124:case 35670:return Ng;case 35667:case 35671:return Bg;case 35668:case 35672:return Hg;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return Gg;case 36295:return Vg;case 36296:return Wg;case 35678:case 36198:case 36298:case 36306:case 35682:return Xg;case 35679:case 36299:case 36307:return $g;case 35680:case 36300:case 36308:case 36293:return qg;case 36289:case 36303:case 36311:case 36292:return Yg}}function Jg(r,t){r.uniform1fv(this.addr,t)}function jg(r,t){let e=or(t,this.size,2);r.uniform2fv(this.addr,e)}function Kg(r,t){let e=or(t,this.size,3);r.uniform3fv(this.addr,e)}function Qg(r,t){let e=or(t,this.size,4);r.uniform4fv(this.addr,e)}function tx(r,t){let e=or(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function ex(r,t){let e=or(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function nx(r,t){let e=or(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function ix(r,t){r.uniform1iv(this.addr,t)}function sx(r,t){r.uniform2iv(this.addr,t)}function rx(r,t){r.uniform3iv(this.addr,t)}function ox(r,t){r.uniform4iv(this.addr,t)}function ax(r,t){r.uniform1uiv(this.addr,t)}function lx(r,t){r.uniform2uiv(this.addr,t)}function cx(r,t){r.uniform3uiv(this.addr,t)}function hx(r,t){r.uniform4uiv(this.addr,t)}function ux(r,t,e){let n=this.cache,i=t.length,s=pa(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Pd,s[o])}function dx(r,t,e){let n=this.cache,i=t.length,s=pa(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||zd,s[o])}function fx(r,t,e){let n=this.cache,i=t.length,s=pa(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Ld,s[o])}function px(r,t,e){let n=this.cache,i=t.length,s=pa(e,i);je(n,s)||(r.uniform1iv(this.addr,s),Ke(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Id,s[o])}function mx(r){switch(r){case 5126:return Jg;case 35664:return jg;case 35665:return Kg;case 35666:return Qg;case 35674:return tx;case 35675:return ex;case 35676:return nx;case 5124:case 35670:return ix;case 35667:case 35671:return sx;case 35668:case 35672:return rx;case 35669:case 35673:return ox;case 5125:return ax;case 36294:return lx;case 36295:return cx;case 36296:return hx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return dx;case 35680:case 36300:case 36308:case 36293:return fx;case 36289:case 36303:case 36311:case 36292:return px}}var zc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Zg(e.type)}},Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=mx(e.type)}},Dc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Ll=/(\w+)(\])?(\[|\.)?/g;function Nu(r,t){r.seq.push(t),r.map[t.id]=t}function gx(r,t,e){let n=r.name,i=n.length;for(Ll.lastIndex=0;;){let s=Ll.exec(n),o=Ll.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Nu(e,c===void 0?new zc(a,r,t):new Lc(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Dc(a),Nu(e,u)),e=u}}}var Fs=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);gx(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Bu(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var xx=37297,vx=0;function yx(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Hu=new ae;function Mx(r){me._getMatrix(Hu,me.workingColorSpace,r);let t=`mat3( ${Hu.elements.map(e=>e.toFixed(4))} )`;switch(me.getTransfer(r)){case fa:return[t,"LinearTransferOETF"];case Re:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Fu(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+yx(r.getShaderSource(t),o)}else return i}function _x(r,t){let e=Mx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function wx(r,t){let e;switch(t){case fh:e="Linear";break;case ph:e="Reinhard";break;case mh:e="Cineon";break;case Xr:e="ACESFilmic";break;case gh:e="AgX";break;case xh:e="Neutral";break;case Hf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Mo=new I;function bx(){me.getLuminanceCoefficients(Mo);let r=Mo.x.toFixed(4),t=Mo.y.toFixed(4),e=Mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ex(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rr).join(`
`)}function Sx(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tx(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Rr(r){return r!==""}function Ou(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Gu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Rx=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(r){return r.replace(Rx,Cx)}var Ax=new Map;function Cx(r,t){let e=ce[t];if(e===void 0){let n=Ax.get(t);if(n!==void 0)e=ce[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kc(e)}var Px=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vu(r){return r.replace(Px,Ix)}function Ix(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function zx(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===fd?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===uh?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ui&&(t="SHADOWMAP_TYPE_VSM"),t}function Lx(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Gs:case Vs:t="ENVMAP_TYPE_CUBE";break;case da:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dx(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Vs:t="ENVMAP_MODE_REFRACTION";break}return t}function kx(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case pd:t="ENVMAP_BLENDING_MULTIPLY";break;case Nf:t="ENVMAP_BLENDING_MIX";break;case Bf:t="ENVMAP_BLENDING_ADD";break}return t}function Ux(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Nx(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=zx(e),c=Lx(e),h=Dx(e),u=kx(e),p=Ux(e),d=Ex(e),g=Sx(s),m=i.createProgram(),x,f,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),x.length>0&&(x+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rr).join(`
`),f.length>0&&(f+=`
`)):(x=[Wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rr).join(`
`),f=[Wu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ii?"#define TONE_MAPPING":"",e.toneMapping!==Ii?ce.tonemapping_pars_fragment:"",e.toneMapping!==Ii?wx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,_x("linearToOutputTexel",e.outputColorSpace),bx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rr).join(`
`)),o=kc(o),o=Ou(o,e),o=Gu(o,e),a=kc(a),a=Ou(a,e),a=Gu(a,e),o=Vu(o),a=Vu(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,x=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,f=["#define varying in",e.glslVersion===iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let _=y+x+o,v=y+f+a,R=Bu(i,i.VERTEX_SHADER,_),E=Bu(i,i.FRAGMENT_SHADER,v);i.attachShader(m,R),i.attachShader(m,E),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function b(A){if(r.debug.checkShaderErrors){let z=i.getProgramInfoLog(m).trim(),L=i.getShaderInfoLog(R).trim(),N=i.getShaderInfoLog(E).trim(),F=!0,B=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,R,E);else{let J=Fu(i,R,"vertex"),O=Fu(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+z+`
`+J+`
`+O)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(L===""||N==="")&&(B=!1);B&&(A.diagnostics={runnable:F,programLog:z,vertexShader:{log:L,prefix:x},fragmentShader:{log:N,prefix:f}})}i.deleteShader(R),i.deleteShader(E),C=new Fs(i,m),M=Tx(i,m)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(m,xx)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=vx++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=R,this.fragmentShader=E,this}var Bx=0,Uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Nc(t),e.set(t,n)),n}},Nc=class{constructor(t){this.id=Bx++,this.code=t,this.usedTimes=0}};function Hx(r,t,e,n,i,s,o){let a=new Vo,l=new Uc,c=new Set,h=[],u=i.logarithmicDepthBuffer,p=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(M){return c.add(M),M===0?"uv":`uv${M}`}function x(M,w,A,z,L){let N=z.fog,F=L.geometry,B=M.isMeshStandardMaterial?z.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||B),O=J&&J.mapping===da?J.image.height:null,V=g[M.type];M.precision!==null&&(d=i.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let j=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,it=j!==void 0?j.length:0,ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let xt,S,Y,nt;if(V){let Me=jn[V];xt=Me.vertexShader,S=Me.fragmentShader}else xt=M.vertexShader,S=M.fragmentShader,l.update(M),Y=l.getVertexShaderID(M),nt=l.getFragmentShaderID(M);let K=r.getRenderTarget(),mt=r.state.buffers.depth.getReversed(),yt=L.isInstancedMesh===!0,At=L.isBatchedMesh===!0,$t=!!M.map,ot=!!M.matcap,dt=!!J,U=!!M.aoMap,Ft=!!M.lightMap,gt=!!M.bumpMap,Lt=!!M.normalMap,_t=!!M.displacementMap,Jt=!!M.emissiveMap,zt=!!M.metalnessMap,D=!!M.roughnessMap,P=M.anisotropy>0,Q=M.clearcoat>0,st=M.dispersion>0,ht=M.iridescence>0,rt=M.sheen>0,Ht=M.transmission>0,Mt=P&&!!M.anisotropyMap,bt=Q&&!!M.clearcoatMap,te=Q&&!!M.clearcoatNormalMap,ft=Q&&!!M.clearcoatRoughnessMap,Ct=ht&&!!M.iridescenceMap,Yt=ht&&!!M.iridescenceThicknessMap,ee=rt&&!!M.sheenColorMap,kt=rt&&!!M.sheenRoughnessMap,he=!!M.specularMap,Qt=!!M.specularColorMap,pe=!!M.specularIntensityMap,X=Ht&&!!M.transmissionMap,Tt=Ht&&!!M.thicknessMap,et=!!M.gradientMap,ct=!!M.alphaMap,Dt=M.alphaTest>0,Pt=!!M.alphaHash,ie=!!M.extensions,De=Ii;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(De=r.toneMapping);let qe={shaderID:V,shaderType:M.type,shaderName:M.name,vertexShader:xt,fragmentShader:S,defines:M.defines,customVertexShaderID:Y,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:At,batchingColor:At&&L._colorsTexture!==null,instancing:yt,instancingColor:yt&&L.instanceColor!==null,instancingMorph:yt&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:K===null?r.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:sr,alphaToCoverage:!!M.alphaToCoverage,map:$t,matcap:ot,envMap:dt,envMapMode:dt&&J.mapping,envMapCubeUVHeight:O,aoMap:U,lightMap:Ft,bumpMap:gt,normalMap:Lt,displacementMap:p&&_t,emissiveMap:Jt,normalMapObjectSpace:Lt&&M.normalMapType===Vf,normalMapTangentSpace:Lt&&M.normalMapType===Sh,metalnessMap:zt,roughnessMap:D,anisotropy:P,anisotropyMap:Mt,clearcoat:Q,clearcoatMap:bt,clearcoatNormalMap:te,clearcoatRoughnessMap:ft,dispersion:st,iridescence:ht,iridescenceMap:Ct,iridescenceThicknessMap:Yt,sheen:rt,sheenColorMap:ee,sheenRoughnessMap:kt,specularMap:he,specularColorMap:Qt,specularIntensityMap:pe,transmission:Ht,transmissionMap:X,thicknessMap:Tt,gradientMap:et,opaque:M.transparent===!1&&M.blending===Ns&&M.alphaToCoverage===!1,alphaMap:ct,alphaTest:Dt,alphaHash:Pt,combine:M.combine,mapUv:$t&&m(M.map.channel),aoMapUv:U&&m(M.aoMap.channel),lightMapUv:Ft&&m(M.lightMap.channel),bumpMapUv:gt&&m(M.bumpMap.channel),normalMapUv:Lt&&m(M.normalMap.channel),displacementMapUv:_t&&m(M.displacementMap.channel),emissiveMapUv:Jt&&m(M.emissiveMap.channel),metalnessMapUv:zt&&m(M.metalnessMap.channel),roughnessMapUv:D&&m(M.roughnessMap.channel),anisotropyMapUv:Mt&&m(M.anisotropyMap.channel),clearcoatMapUv:bt&&m(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&m(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&m(M.iridescenceMap.channel),iridescenceThicknessMapUv:Yt&&m(M.iridescenceThicknessMap.channel),sheenColorMapUv:ee&&m(M.sheenColorMap.channel),sheenRoughnessMapUv:kt&&m(M.sheenRoughnessMap.channel),specularMapUv:he&&m(M.specularMap.channel),specularColorMapUv:Qt&&m(M.specularColorMap.channel),specularIntensityMapUv:pe&&m(M.specularIntensityMap.channel),transmissionMapUv:X&&m(M.transmissionMap.channel),thicknessMapUv:Tt&&m(M.thicknessMap.channel),alphaMapUv:ct&&m(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Lt||P),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&($t||ct),fog:!!N,useFog:M.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:it,morphTextureStride:ut,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:r.shadowMap.enabled&&A.length>0,shadowMapType:r.shadowMap.type,toneMapping:De,decodeVideoTexture:$t&&M.map.isVideoTexture===!0&&me.getTransfer(M.map.colorSpace)===Re,decodeVideoTextureEmissive:Jt&&M.emissiveMap.isVideoTexture===!0&&me.getTransfer(M.emissiveMap.colorSpace)===Re,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===we,flipSided:M.side===cn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ie&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&M.extensions.multiDraw===!0||At)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return qe.vertexUv1s=c.has(1),qe.vertexUv2s=c.has(2),qe.vertexUv3s=c.has(3),c.clear(),qe}function f(M){let w=[];if(M.shaderID?w.push(M.shaderID):(w.push(M.customVertexShaderID),w.push(M.customFragmentShaderID)),M.defines!==void 0)for(let A in M.defines)w.push(A),w.push(M.defines[A]);return M.isRawShaderMaterial===!1&&(y(w,M),_(w,M),w.push(r.outputColorSpace)),w.push(M.customProgramCacheKey),w.join()}function y(M,w){M.push(w.precision),M.push(w.outputColorSpace),M.push(w.envMapMode),M.push(w.envMapCubeUVHeight),M.push(w.mapUv),M.push(w.alphaMapUv),M.push(w.lightMapUv),M.push(w.aoMapUv),M.push(w.bumpMapUv),M.push(w.normalMapUv),M.push(w.displacementMapUv),M.push(w.emissiveMapUv),M.push(w.metalnessMapUv),M.push(w.roughnessMapUv),M.push(w.anisotropyMapUv),M.push(w.clearcoatMapUv),M.push(w.clearcoatNormalMapUv),M.push(w.clearcoatRoughnessMapUv),M.push(w.iridescenceMapUv),M.push(w.iridescenceThicknessMapUv),M.push(w.sheenColorMapUv),M.push(w.sheenRoughnessMapUv),M.push(w.specularMapUv),M.push(w.specularColorMapUv),M.push(w.specularIntensityMapUv),M.push(w.transmissionMapUv),M.push(w.thicknessMapUv),M.push(w.combine),M.push(w.fogExp2),M.push(w.sizeAttenuation),M.push(w.morphTargetsCount),M.push(w.morphAttributeCount),M.push(w.numDirLights),M.push(w.numPointLights),M.push(w.numSpotLights),M.push(w.numSpotLightMaps),M.push(w.numHemiLights),M.push(w.numRectAreaLights),M.push(w.numDirLightShadows),M.push(w.numPointLightShadows),M.push(w.numSpotLightShadows),M.push(w.numSpotLightShadowsWithMaps),M.push(w.numLightProbes),M.push(w.shadowMapType),M.push(w.toneMapping),M.push(w.numClippingPlanes),M.push(w.numClipIntersection),M.push(w.depthPacking)}function _(M,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.decodeVideoTextureEmissive&&a.enable(20),w.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){let w=g[M.type],A;if(w){let z=jn[w];A=fn.clone(z.uniforms)}else A=M.uniforms;return A}function R(M,w){let A;for(let z=0,L=h.length;z<L;z++){let N=h[z];if(N.cacheKey===w){A=N,++A.usedTimes;break}}return A===void 0&&(A=new Nx(r,w,M,s),h.push(A)),A}function E(M){if(--M.usedTimes===0){let w=h.indexOf(M);h[w]=h[h.length-1],h.pop(),M.destroy()}}function b(M){l.remove(M)}function C(){l.dispose()}return{getParameters:x,getProgramCacheKey:f,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:b,programs:h,dispose:C}}function Fx(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function Ox(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Xu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function $u(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,p,d,g,m,x){let f=r[t];return f===void 0?(f={id:u.id,object:u,geometry:p,material:d,groupOrder:g,renderOrder:u.renderOrder,z:m,group:x},r[t]=f):(f.id=u.id,f.object=u,f.geometry=p,f.material=d,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=m,f.group=x),t++,f}function a(u,p,d,g,m,x){let f=o(u,p,d,g,m,x);d.transmission>0?n.push(f):d.transparent===!0?i.push(f):e.push(f)}function l(u,p,d,g,m,x){let f=o(u,p,d,g,m,x);d.transmission>0?n.unshift(f):d.transparent===!0?i.unshift(f):e.unshift(f)}function c(u,p){e.length>1&&e.sort(u||Ox),n.length>1&&n.sort(p||Xu),i.length>1&&i.sort(p||Xu)}function h(){for(let u=t,p=r.length;u<p;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Gx(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new $u,r.set(n,[o])):i>=s.length?(o=new $u,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function Vx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new St};break;case"SpotLight":e={position:new I,direction:new I,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new I,halfWidth:new I,halfHeight:new I};break}return r[t.id]=e,e}}}function Wx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new tt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var Xx=0;function $x(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function qx(r){let t=new Vx,e=Wx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new jt,o=new jt;function a(c){let h=0,u=0,p=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,m=0,x=0,f=0,y=0,_=0,v=0,R=0,E=0,b=0;c.sort($x);for(let M=0,w=c.length;M<w;M++){let A=c[M],z=A.color,L=A.intensity,N=A.distance,F=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=z.r*L,u+=z.g*L,p+=z.b*L;else if(A.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(A.sh.coefficients[B],L);b++}else if(A.isDirectionalLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),A.castShadow){let J=A.shadow,O=e.get(A);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=A.shadow.matrix,y++}n.directional[d]=B,d++}else if(A.isSpotLight){let B=t.get(A);B.position.setFromMatrixPosition(A.matrixWorld),B.color.copy(z).multiplyScalar(L),B.distance=N,B.coneCos=Math.cos(A.angle),B.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),B.decay=A.decay,n.spot[m]=B;let J=A.shadow;if(A.map&&(n.spotLightMap[R]=A.map,R++,J.updateMatrices(A),A.castShadow&&E++),n.spotLightMatrix[m]=J.matrix,A.castShadow){let O=e.get(A);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,n.spotShadow[m]=O,n.spotShadowMap[m]=F,v++}m++}else if(A.isRectAreaLight){let B=t.get(A);B.color.copy(z).multiplyScalar(L),B.halfWidth.set(A.width*.5,0,0),B.halfHeight.set(0,A.height*.5,0),n.rectArea[x]=B,x++}else if(A.isPointLight){let B=t.get(A);if(B.color.copy(A.color).multiplyScalar(A.intensity),B.distance=A.distance,B.decay=A.decay,A.castShadow){let J=A.shadow,O=e.get(A);O.shadowIntensity=J.intensity,O.shadowBias=J.bias,O.shadowNormalBias=J.normalBias,O.shadowRadius=J.radius,O.shadowMapSize=J.mapSize,O.shadowCameraNear=J.camera.near,O.shadowCameraFar=J.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=F,n.pointShadowMatrix[g]=A.shadow.matrix,_++}n.point[g]=B,g++}else if(A.isHemisphereLight){let B=t.get(A);B.skyColor.copy(A.color).multiplyScalar(L),B.groundColor.copy(A.groundColor).multiplyScalar(L),n.hemi[f]=B,f++}}x>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=It.LTC_FLOAT_1,n.rectAreaLTC2=It.LTC_FLOAT_2):(n.rectAreaLTC1=It.LTC_HALF_1,n.rectAreaLTC2=It.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==m||C.rectAreaLength!==x||C.hemiLength!==f||C.numDirectionalShadows!==y||C.numPointShadows!==_||C.numSpotShadows!==v||C.numSpotMaps!==R||C.numLightProbes!==b)&&(n.directional.length=d,n.spot.length=m,n.rectArea.length=x,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=b,C.directionalLength=d,C.pointLength=g,C.spotLength=m,C.rectAreaLength=x,C.hemiLength=f,C.numDirectionalShadows=y,C.numPointShadows=_,C.numSpotShadows=v,C.numSpotMaps=R,C.numLightProbes=b,n.version=Xx++)}function l(c,h){let u=0,p=0,d=0,g=0,m=0,x=h.matrixWorldInverse;for(let f=0,y=c.length;f<y;f++){let _=c[f];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(x),d++}else if(_.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),o.identity(),s.copy(_.matrixWorld),s.premultiply(x),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){let v=n.point[p];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(x),p++}else if(_.isHemisphereLight){let v=n.hemi[m];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(x),m++}}}return{setup:a,setupView:l,state:n}}function qu(r){let t=new qx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Yx(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new qu(r),t.set(i,[a])):s>=o.length?(a=new qu(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Bc=class extends $n{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Of,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Hc=class extends $n{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},Zx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Jx=`uniform sampler2D shadow_pass;
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
}`;function jx(r,t,e){let n=new kr,i=new tt,s=new tt,o=new Ce,a=new Bc({depthPacking:Gf}),l=new Hc,c={},h=e.maxTextureSize,u={[Li]:cn,[cn]:Li,[we]:we},p=new de({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new tt},radius:{value:4}},vertexShader:Zx,fragmentShader:Jx}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new oe;g.setAttribute("position",new ge(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new q(g,p),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fd;let f=this.type;this.render=function(E,b,C){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||E.length===0)return;let M=r.getRenderTarget(),w=r.getActiveCubeFace(),A=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Je),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);let L=f!==ui&&this.type===ui,N=f===ui&&this.type!==ui;for(let F=0,B=E.length;F<B;F++){let J=E[F],O=J.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let V=O.getFrameExtents();if(i.multiply(V),s.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/V.x),i.x=s.x*V.x,O.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/V.y),i.y=s.y*V.y,O.mapSize.y=s.y)),O.map===null||L===!0||N===!0){let it=this.type!==ui?{minFilter:hn,magFilter:hn}:{};O.map!==null&&O.map.dispose(),O.map=new $e(i.x,i.y,it),O.map.texture.name=J.name+".shadowMap",O.camera.updateProjectionMatrix()}r.setRenderTarget(O.map),r.clear();let j=O.getViewportCount();for(let it=0;it<j;it++){let ut=O.getViewport(it);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),z.viewport(o),O.updateMatrices(J,it),n=O.getFrustum(),v(b,C,O.camera,J,this.type)}O.isPointLightShadow!==!0&&this.type===ui&&y(O,C),O.needsUpdate=!1}f=this.type,x.needsUpdate=!1,r.setRenderTarget(M,w,A)};function y(E,b){let C=t.update(m);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new $e(i.x,i.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(b,null,C,p,m,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(b,null,C,d,m,null)}function _(E,b,C,M){let w=null,A=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(A!==void 0)w=A;else if(w=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let z=w.uuid,L=b.uuid,N=c[z];N===void 0&&(N={},c[z]=N);let F=N[L];F===void 0&&(F=w.clone(),N[L]=F,b.addEventListener("dispose",R)),w=F}if(w.visible=b.visible,w.wireframe=b.wireframe,M===ui?w.side=b.shadowSide!==null?b.shadowSide:b.side:w.side=b.shadowSide!==null?b.shadowSide:u[b.side],w.alphaMap=b.alphaMap,w.alphaTest=b.alphaTest,w.map=b.map,w.clipShadows=b.clipShadows,w.clippingPlanes=b.clippingPlanes,w.clipIntersection=b.clipIntersection,w.displacementMap=b.displacementMap,w.displacementScale=b.displacementScale,w.displacementBias=b.displacementBias,w.wireframeLinewidth=b.wireframeLinewidth,w.linewidth=b.linewidth,C.isPointLight===!0&&w.isMeshDistanceMaterial===!0){let z=r.properties.get(w);z.light=C}return w}function v(E,b,C,M,w){if(E.visible===!1)return;if(E.layers.test(b.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&w===ui)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let L=t.update(E),N=E.material;if(Array.isArray(N)){let F=L.groups;for(let B=0,J=F.length;B<J;B++){let O=F[B],V=N[O.materialIndex];if(V&&V.visible){let j=_(E,V,M,w);E.onBeforeShadow(r,E,b,C,L,j,O),r.renderBufferDirect(C,null,L,j,E,O),E.onAfterShadow(r,E,b,C,L,j,O)}}}else if(N.visible){let F=_(E,N,M,w);E.onBeforeShadow(r,E,b,C,L,F,null),r.renderBufferDirect(C,null,L,F,E,null),E.onAfterShadow(r,E,b,C,L,F,null)}}let z=E.children;for(let L=0,N=z.length;L<N;L++)v(z[L],b,C,M,w)}function R(E){E.target.removeEventListener("dispose",R);for(let C in c){let M=c[C],w=E.target.uuid;w in M&&(M[w].dispose(),delete M[w])}}}var Kx={[Vl]:Wl,[Xl]:Yl,[$l]:Zl,[Os]:ql,[Wl]:Vl,[Yl]:Xl,[Zl]:$l,[ql]:Os};function Qx(r,t){function e(){let X=!1,Tt=new Ce,et=null,ct=new Ce(0,0,0,0);return{setMask:function(Dt){et!==Dt&&!X&&(r.colorMask(Dt,Dt,Dt,Dt),et=Dt)},setLocked:function(Dt){X=Dt},setClear:function(Dt,Pt,ie,De,qe){qe===!0&&(Dt*=De,Pt*=De,ie*=De),Tt.set(Dt,Pt,ie,De),ct.equals(Tt)===!1&&(r.clearColor(Dt,Pt,ie,De),ct.copy(Tt))},reset:function(){X=!1,et=null,ct.set(-1,0,0,0)}}}function n(){let X=!1,Tt=!1,et=null,ct=null,Dt=null;return{setReversed:function(Pt){if(Tt!==Pt){let ie=t.get("EXT_clip_control");Tt?ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.ZERO_TO_ONE_EXT):ie.clipControlEXT(ie.LOWER_LEFT_EXT,ie.NEGATIVE_ONE_TO_ONE_EXT);let De=Dt;Dt=null,this.setClear(De)}Tt=Pt},getReversed:function(){return Tt},setTest:function(Pt){Pt?K(r.DEPTH_TEST):mt(r.DEPTH_TEST)},setMask:function(Pt){et!==Pt&&!X&&(r.depthMask(Pt),et=Pt)},setFunc:function(Pt){if(Tt&&(Pt=Kx[Pt]),ct!==Pt){switch(Pt){case Vl:r.depthFunc(r.NEVER);break;case Wl:r.depthFunc(r.ALWAYS);break;case Xl:r.depthFunc(r.LESS);break;case Os:r.depthFunc(r.LEQUAL);break;case $l:r.depthFunc(r.EQUAL);break;case ql:r.depthFunc(r.GEQUAL);break;case Yl:r.depthFunc(r.GREATER);break;case Zl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ct=Pt}},setLocked:function(Pt){X=Pt},setClear:function(Pt){Dt!==Pt&&(Tt&&(Pt=1-Pt),r.clearDepth(Pt),Dt=Pt)},reset:function(){X=!1,et=null,ct=null,Dt=null,Tt=!1}}}function i(){let X=!1,Tt=null,et=null,ct=null,Dt=null,Pt=null,ie=null,De=null,qe=null;return{setTest:function(Me){X||(Me?K(r.STENCIL_TEST):mt(r.STENCIL_TEST))},setMask:function(Me){Tt!==Me&&!X&&(r.stencilMask(Me),Tt=Me)},setFunc:function(Me,En,Sn){(et!==Me||ct!==En||Dt!==Sn)&&(r.stencilFunc(Me,En,Sn),et=Me,ct=En,Dt=Sn)},setOp:function(Me,En,Sn){(Pt!==Me||ie!==En||De!==Sn)&&(r.stencilOp(Me,En,Sn),Pt=Me,ie=En,De=Sn)},setLocked:function(Me){X=Me},setClear:function(Me){qe!==Me&&(r.clearStencil(Me),qe=Me)},reset:function(){X=!1,Tt=null,et=null,ct=null,Dt=null,Pt=null,ie=null,De=null,qe=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},p=new WeakMap,d=[],g=null,m=!1,x=null,f=null,y=null,_=null,v=null,R=null,E=null,b=new St(0,0,0),C=0,M=!1,w=null,A=null,z=null,L=null,N=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),B=!1,J=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(O)[1]),B=J>=1):O.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),B=J>=2);let V=null,j={},it=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),xt=new Ce().fromArray(it),S=new Ce().fromArray(ut);function Y(X,Tt,et,ct){let Dt=new Uint8Array(4),Pt=r.createTexture();r.bindTexture(X,Pt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ie=0;ie<et;ie++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Tt,0,r.RGBA,1,1,ct,0,r.RGBA,r.UNSIGNED_BYTE,Dt):r.texImage2D(Tt+ie,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Dt);return Pt}let nt={};nt[r.TEXTURE_2D]=Y(r.TEXTURE_2D,r.TEXTURE_2D,1),nt[r.TEXTURE_CUBE_MAP]=Y(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[r.TEXTURE_2D_ARRAY]=Y(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),nt[r.TEXTURE_3D]=Y(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),K(r.DEPTH_TEST),o.setFunc(Os),gt(!1),Lt(Jh),K(r.CULL_FACE),U(Je);function K(X){h[X]!==!0&&(r.enable(X),h[X]=!0)}function mt(X){h[X]!==!1&&(r.disable(X),h[X]=!1)}function yt(X,Tt){return u[X]!==Tt?(r.bindFramebuffer(X,Tt),u[X]=Tt,X===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Tt),X===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Tt),!0):!1}function At(X,Tt){let et=d,ct=!1;if(X){et=p.get(Tt),et===void 0&&(et=[],p.set(Tt,et));let Dt=X.textures;if(et.length!==Dt.length||et[0]!==r.COLOR_ATTACHMENT0){for(let Pt=0,ie=Dt.length;Pt<ie;Pt++)et[Pt]=r.COLOR_ATTACHMENT0+Pt;et.length=Dt.length,ct=!0}}else et[0]!==r.BACK&&(et[0]=r.BACK,ct=!0);ct&&r.drawBuffers(et)}function $t(X){return g!==X?(r.useProgram(X),g=X,!0):!1}let ot={[Dn]:r.FUNC_ADD,[bf]:r.FUNC_SUBTRACT,[Ef]:r.FUNC_REVERSE_SUBTRACT};ot[Sf]=r.MIN,ot[Tf]=r.MAX;let dt={[ir]:r.ZERO,[Rf]:r.ONE,[Af]:r.SRC_COLOR,[Ol]:r.SRC_ALPHA,[zf]:r.SRC_ALPHA_SATURATE,[ua]:r.DST_COLOR,[ha]:r.DST_ALPHA,[Cf]:r.ONE_MINUS_SRC_COLOR,[Gl]:r.ONE_MINUS_SRC_ALPHA,[If]:r.ONE_MINUS_DST_COLOR,[Pf]:r.ONE_MINUS_DST_ALPHA,[Lf]:r.CONSTANT_COLOR,[Df]:r.ONE_MINUS_CONSTANT_COLOR,[kf]:r.CONSTANT_ALPHA,[Uf]:r.ONE_MINUS_CONSTANT_ALPHA};function U(X,Tt,et,ct,Dt,Pt,ie,De,qe,Me){if(X===Je){m===!0&&(mt(r.BLEND),m=!1);return}if(m===!1&&(K(r.BLEND),m=!0),X!==dh){if(X!==x||Me!==M){if((f!==Dn||v!==Dn)&&(r.blendEquation(r.FUNC_ADD),f=Dn,v=Dn),Me)switch(X){case Ns:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Be:r.blendFunc(r.ONE,r.ONE);break;case jh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ns:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Be:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case jh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Kh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}y=null,_=null,R=null,E=null,b.set(0,0,0),C=0,x=X,M=Me}return}Dt=Dt||Tt,Pt=Pt||et,ie=ie||ct,(Tt!==f||Dt!==v)&&(r.blendEquationSeparate(ot[Tt],ot[Dt]),f=Tt,v=Dt),(et!==y||ct!==_||Pt!==R||ie!==E)&&(r.blendFuncSeparate(dt[et],dt[ct],dt[Pt],dt[ie]),y=et,_=ct,R=Pt,E=ie),(De.equals(b)===!1||qe!==C)&&(r.blendColor(De.r,De.g,De.b,qe),b.copy(De),C=qe),x=X,M=!1}function Ft(X,Tt){X.side===we?mt(r.CULL_FACE):K(r.CULL_FACE);let et=X.side===cn;Tt&&(et=!et),gt(et),X.blending===Ns&&X.transparent===!1?U(Je):U(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),o.setFunc(X.depthFunc),o.setTest(X.depthTest),o.setMask(X.depthWrite),s.setMask(X.colorWrite);let ct=X.stencilWrite;a.setTest(ct),ct&&(a.setMask(X.stencilWriteMask),a.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),a.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Jt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?K(r.SAMPLE_ALPHA_TO_COVERAGE):mt(r.SAMPLE_ALPHA_TO_COVERAGE)}function gt(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function Lt(X){X!==_f?(K(r.CULL_FACE),X!==A&&(X===Jh?r.cullFace(r.BACK):X===wf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):mt(r.CULL_FACE),A=X}function _t(X){X!==z&&(B&&r.lineWidth(X),z=X)}function Jt(X,Tt,et){X?(K(r.POLYGON_OFFSET_FILL),(L!==Tt||N!==et)&&(r.polygonOffset(Tt,et),L=Tt,N=et)):mt(r.POLYGON_OFFSET_FILL)}function zt(X){X?K(r.SCISSOR_TEST):mt(r.SCISSOR_TEST)}function D(X){X===void 0&&(X=r.TEXTURE0+F-1),V!==X&&(r.activeTexture(X),V=X)}function P(X,Tt,et){et===void 0&&(V===null?et=r.TEXTURE0+F-1:et=V);let ct=j[et];ct===void 0&&(ct={type:void 0,texture:void 0},j[et]=ct),(ct.type!==X||ct.texture!==Tt)&&(V!==et&&(r.activeTexture(et),V=et),r.bindTexture(X,Tt||nt[X]),ct.type=X,ct.texture=Tt)}function Q(){let X=j[V];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function st(){try{r.compressedTexImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function rt(){try{r.texSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{r.texSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Mt(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function te(){try{r.texStorage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{r.texStorage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{r.texImage2D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Yt(){try{r.texImage3D.apply(r,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ee(X){xt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),xt.copy(X))}function kt(X){S.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),S.copy(X))}function he(X,Tt){let et=c.get(Tt);et===void 0&&(et=new WeakMap,c.set(Tt,et));let ct=et.get(X);ct===void 0&&(ct=r.getUniformBlockIndex(Tt,X.name),et.set(X,ct))}function Qt(X,Tt){let ct=c.get(Tt).get(X);l.get(Tt)!==ct&&(r.uniformBlockBinding(Tt,ct,X.__bindingPointIndex),l.set(Tt,ct))}function pe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},V=null,j={},u={},p=new WeakMap,d=[],g=null,m=!1,x=null,f=null,y=null,_=null,v=null,R=null,E=null,b=new St(0,0,0),C=0,M=!1,w=null,A=null,z=null,L=null,N=null,xt.set(0,0,r.canvas.width,r.canvas.height),S.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:K,disable:mt,bindFramebuffer:yt,drawBuffers:At,useProgram:$t,setBlending:U,setMaterial:Ft,setFlipSided:gt,setCullFace:Lt,setLineWidth:_t,setPolygonOffset:Jt,setScissorTest:zt,activeTexture:D,bindTexture:P,unbindTexture:Q,compressedTexImage2D:st,compressedTexImage3D:ht,texImage2D:Ct,texImage3D:Yt,updateUBOMapping:he,uniformBlockBinding:Qt,texStorage2D:te,texStorage3D:ft,texSubImage2D:rt,texSubImage3D:Ht,compressedTexSubImage2D:Mt,compressedTexSubImage3D:bt,scissor:ee,viewport:kt,reset:pe}}function Yu(r,t,e,n){let i=tv(n);switch(e){case yd:return r*t;case _d:return r*t;case wd:return r*t*2;case _h:return r*t/i.components*i.byteLength;case wh:return r*t/i.components*i.byteLength;case bd:return r*t*2/i.components*i.byteLength;case bh:return r*t*2/i.components*i.byteLength;case Md:return r*t*3/i.components*i.byteLength;case An:return r*t*4/i.components*i.byteLength;case Eh:return r*t*4/i.components*i.byteLength;case Lo:case Do:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ko:case Uo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case tc:case nc:return Math.max(r,16)*Math.max(t,8)/4;case Ql:case ec:return Math.max(r,8)*Math.max(t,8)/2;case ic:case sc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case rc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case oc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ac:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case lc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case cc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case uc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case dc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case fc:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case pc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case mc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case gc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case xc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case vc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case yc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case No:case Mc:case _c:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Ed:case wc:return Math.ceil(r/4)*Math.ceil(t/4)*8;case bc:case Ec:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function tv(r){switch(r){case Xn:case gd:return{byteLength:1,components:1};case Lr:case xd:case dn:return{byteLength:2,components:1};case yh:case Mh:return{byteLength:2,components:4};case ss:case vh:case Qn:return{byteLength:4,components:1};case vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ev(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new tt,h=new WeakMap,u,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,P){return d?new OffscreenCanvas(D,P):Fo("canvas")}function m(D,P,Q){let st=1,ht=zt(D);if((ht.width>Q||ht.height>Q)&&(st=Q/Math.max(ht.width,ht.height)),st<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let rt=Math.floor(st*ht.width),Ht=Math.floor(st*ht.height);u===void 0&&(u=g(rt,Ht));let Mt=P?g(rt,Ht):u;return Mt.width=rt,Mt.height=Ht,Mt.getContext("2d").drawImage(D,0,0,rt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+rt+"x"+Ht+")."),Mt}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),D;return D}function x(D){return D.generateMipmaps}function f(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(D,P,Q,st,ht=!1){if(D!==null){if(r[D]!==void 0)return r[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let rt=P;if(P===r.RED&&(Q===r.FLOAT&&(rt=r.R32F),Q===r.HALF_FLOAT&&(rt=r.R16F),Q===r.UNSIGNED_BYTE&&(rt=r.R8)),P===r.RED_INTEGER&&(Q===r.UNSIGNED_BYTE&&(rt=r.R8UI),Q===r.UNSIGNED_SHORT&&(rt=r.R16UI),Q===r.UNSIGNED_INT&&(rt=r.R32UI),Q===r.BYTE&&(rt=r.R8I),Q===r.SHORT&&(rt=r.R16I),Q===r.INT&&(rt=r.R32I)),P===r.RG&&(Q===r.FLOAT&&(rt=r.RG32F),Q===r.HALF_FLOAT&&(rt=r.RG16F),Q===r.UNSIGNED_BYTE&&(rt=r.RG8)),P===r.RG_INTEGER&&(Q===r.UNSIGNED_BYTE&&(rt=r.RG8UI),Q===r.UNSIGNED_SHORT&&(rt=r.RG16UI),Q===r.UNSIGNED_INT&&(rt=r.RG32UI),Q===r.BYTE&&(rt=r.RG8I),Q===r.SHORT&&(rt=r.RG16I),Q===r.INT&&(rt=r.RG32I)),P===r.RGB_INTEGER&&(Q===r.UNSIGNED_BYTE&&(rt=r.RGB8UI),Q===r.UNSIGNED_SHORT&&(rt=r.RGB16UI),Q===r.UNSIGNED_INT&&(rt=r.RGB32UI),Q===r.BYTE&&(rt=r.RGB8I),Q===r.SHORT&&(rt=r.RGB16I),Q===r.INT&&(rt=r.RGB32I)),P===r.RGBA_INTEGER&&(Q===r.UNSIGNED_BYTE&&(rt=r.RGBA8UI),Q===r.UNSIGNED_SHORT&&(rt=r.RGBA16UI),Q===r.UNSIGNED_INT&&(rt=r.RGBA32UI),Q===r.BYTE&&(rt=r.RGBA8I),Q===r.SHORT&&(rt=r.RGBA16I),Q===r.INT&&(rt=r.RGBA32I)),P===r.RGB&&Q===r.UNSIGNED_INT_5_9_9_9_REV&&(rt=r.RGB9_E5),P===r.RGBA){let Ht=ht?fa:me.getTransfer(st);Q===r.FLOAT&&(rt=r.RGBA32F),Q===r.HALF_FLOAT&&(rt=r.RGBA16F),Q===r.UNSIGNED_BYTE&&(rt=Ht===Re?r.SRGB8_ALPHA8:r.RGBA8),Q===r.UNSIGNED_SHORT_4_4_4_4&&(rt=r.RGBA4),Q===r.UNSIGNED_SHORT_5_5_5_1&&(rt=r.RGB5_A1)}return(rt===r.R16F||rt===r.R32F||rt===r.RG16F||rt===r.RG32F||rt===r.RGBA16F||rt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),rt}function v(D,P){let Q;return D?P===null||P===ss||P===Di?Q=r.DEPTH24_STENCIL8:P===Qn?Q=r.DEPTH32F_STENCIL8:P===Lr&&(Q=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):P===null||P===ss||P===Di?Q=r.DEPTH_COMPONENT24:P===Qn?Q=r.DEPTH_COMPONENT32F:P===Lr&&(Q=r.DEPTH_COMPONENT16),Q}function R(D,P){return x(D)===!0||D.isFramebufferTexture&&D.minFilter!==hn&&D.minFilter!==Kn?Math.log2(Math.max(P.width,P.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?P.mipmaps.length:1}function E(D){let P=D.target;P.removeEventListener("dispose",E),C(P),P.isVideoTexture&&h.delete(P)}function b(D){let P=D.target;P.removeEventListener("dispose",b),w(P)}function C(D){let P=n.get(D);if(P.__webglInit===void 0)return;let Q=D.source,st=p.get(Q);if(st){let ht=st[P.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&M(D),Object.keys(st).length===0&&p.delete(Q)}n.remove(D)}function M(D){let P=n.get(D);r.deleteTexture(P.__webglTexture);let Q=D.source,st=p.get(Q);delete st[P.__cacheKey],o.memory.textures--}function w(D){let P=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let st=0;st<6;st++){if(Array.isArray(P.__webglFramebuffer[st]))for(let ht=0;ht<P.__webglFramebuffer[st].length;ht++)r.deleteFramebuffer(P.__webglFramebuffer[st][ht]);else r.deleteFramebuffer(P.__webglFramebuffer[st]);P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer[st])}else{if(Array.isArray(P.__webglFramebuffer))for(let st=0;st<P.__webglFramebuffer.length;st++)r.deleteFramebuffer(P.__webglFramebuffer[st]);else r.deleteFramebuffer(P.__webglFramebuffer);if(P.__webglDepthbuffer&&r.deleteRenderbuffer(P.__webglDepthbuffer),P.__webglMultisampledFramebuffer&&r.deleteFramebuffer(P.__webglMultisampledFramebuffer),P.__webglColorRenderbuffer)for(let st=0;st<P.__webglColorRenderbuffer.length;st++)P.__webglColorRenderbuffer[st]&&r.deleteRenderbuffer(P.__webglColorRenderbuffer[st]);P.__webglDepthRenderbuffer&&r.deleteRenderbuffer(P.__webglDepthRenderbuffer)}let Q=D.textures;for(let st=0,ht=Q.length;st<ht;st++){let rt=n.get(Q[st]);rt.__webglTexture&&(r.deleteTexture(rt.__webglTexture),o.memory.textures--),n.remove(Q[st])}n.remove(D)}let A=0;function z(){A=0}function L(){let D=A;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),A+=1,D}function N(D){let P=[];return P.push(D.wrapS),P.push(D.wrapT),P.push(D.wrapR||0),P.push(D.magFilter),P.push(D.minFilter),P.push(D.anisotropy),P.push(D.internalFormat),P.push(D.format),P.push(D.type),P.push(D.generateMipmaps),P.push(D.premultiplyAlpha),P.push(D.flipY),P.push(D.unpackAlignment),P.push(D.colorSpace),P.join()}function F(D,P){let Q=n.get(D);if(D.isVideoTexture&&_t(D),D.isRenderTargetTexture===!1&&D.version>0&&Q.__version!==D.version){let st=D.image;if(st===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(st.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{S(Q,D,P);return}}e.bindTexture(r.TEXTURE_2D,Q.__webglTexture,r.TEXTURE0+P)}function B(D,P){let Q=n.get(D);if(D.version>0&&Q.__version!==D.version){S(Q,D,P);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Q.__webglTexture,r.TEXTURE0+P)}function J(D,P){let Q=n.get(D);if(D.version>0&&Q.__version!==D.version){S(Q,D,P);return}e.bindTexture(r.TEXTURE_3D,Q.__webglTexture,r.TEXTURE0+P)}function O(D,P){let Q=n.get(D);if(D.version>0&&Q.__version!==D.version){Y(Q,D,P);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Q.__webglTexture,r.TEXTURE0+P)}let V={[Wn]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[Kl]:r.MIRRORED_REPEAT},j={[hn]:r.NEAREST,[Ff]:r.NEAREST_MIPMAP_NEAREST,[Qr]:r.NEAREST_MIPMAP_LINEAR,[Kn]:r.LINEAR,[ol]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},it={[Wf]:r.NEVER,[Jf]:r.ALWAYS,[Xf]:r.LESS,[Sd]:r.LEQUAL,[$f]:r.EQUAL,[Zf]:r.GEQUAL,[qf]:r.GREATER,[Yf]:r.NOTEQUAL};function ut(D,P){if(P.type===Qn&&t.has("OES_texture_float_linear")===!1&&(P.magFilter===Kn||P.magFilter===ol||P.magFilter===Qr||P.magFilter===is||P.minFilter===Kn||P.minFilter===ol||P.minFilter===Qr||P.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,V[P.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,V[P.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,V[P.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,j[P.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,j[P.minFilter]),P.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,it[P.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(P.magFilter===hn||P.minFilter!==Qr&&P.minFilter!==is||P.type===Qn&&t.has("OES_texture_float_linear")===!1)return;if(P.anisotropy>1||n.get(P).__currentAnisotropy){let Q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(D,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,i.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy}}}function xt(D,P){let Q=!1;D.__webglInit===void 0&&(D.__webglInit=!0,P.addEventListener("dispose",E));let st=P.source,ht=p.get(st);ht===void 0&&(ht={},p.set(st,ht));let rt=N(P);if(rt!==D.__cacheKey){ht[rt]===void 0&&(ht[rt]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Q=!0),ht[rt].usedTimes++;let Ht=ht[D.__cacheKey];Ht!==void 0&&(ht[D.__cacheKey].usedTimes--,Ht.usedTimes===0&&M(P)),D.__cacheKey=rt,D.__webglTexture=ht[rt].texture}return Q}function S(D,P,Q){let st=r.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(st=r.TEXTURE_2D_ARRAY),P.isData3DTexture&&(st=r.TEXTURE_3D);let ht=xt(D,P),rt=P.source;e.bindTexture(st,D.__webglTexture,r.TEXTURE0+Q);let Ht=n.get(rt);if(rt.version!==Ht.__version||ht===!0){e.activeTexture(r.TEXTURE0+Q);let Mt=me.getPrimaries(me.workingColorSpace),bt=P.colorSpace===Ci?null:me.getPrimaries(P.colorSpace),te=P.colorSpace===Ci||Mt===bt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let ft=m(P.image,!1,i.maxTextureSize);ft=Jt(P,ft);let Ct=s.convert(P.format,P.colorSpace),Yt=s.convert(P.type),ee=_(P.internalFormat,Ct,Yt,P.colorSpace,P.isVideoTexture);ut(st,P);let kt,he=P.mipmaps,Qt=P.isVideoTexture!==!0,pe=Ht.__version===void 0||ht===!0,X=rt.dataReady,Tt=R(P,ft);if(P.isDepthTexture)ee=v(P.format===ki,P.type),pe&&(Qt?e.texStorage2D(r.TEXTURE_2D,1,ee,ft.width,ft.height):e.texImage2D(r.TEXTURE_2D,0,ee,ft.width,ft.height,0,Ct,Yt,null));else if(P.isDataTexture)if(he.length>0){Qt&&pe&&e.texStorage2D(r.TEXTURE_2D,Tt,ee,he[0].width,he[0].height);for(let et=0,ct=he.length;et<ct;et++)kt=he[et],Qt?X&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,kt.width,kt.height,Ct,Yt,kt.data):e.texImage2D(r.TEXTURE_2D,et,ee,kt.width,kt.height,0,Ct,Yt,kt.data);P.generateMipmaps=!1}else Qt?(pe&&e.texStorage2D(r.TEXTURE_2D,Tt,ee,ft.width,ft.height),X&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ft.width,ft.height,Ct,Yt,ft.data)):e.texImage2D(r.TEXTURE_2D,0,ee,ft.width,ft.height,0,Ct,Yt,ft.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Qt&&pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,ee,he[0].width,he[0].height,ft.depth);for(let et=0,ct=he.length;et<ct;et++)if(kt=he[et],P.format!==An)if(Ct!==null)if(Qt){if(X)if(P.layerUpdates.size>0){let Dt=Yu(kt.width,kt.height,P.format,P.type);for(let Pt of P.layerUpdates){let ie=kt.data.subarray(Pt*Dt/kt.data.BYTES_PER_ELEMENT,(Pt+1)*Dt/kt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,Pt,kt.width,kt.height,1,Ct,ie)}P.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,kt.width,kt.height,ft.depth,Ct,kt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,et,ee,kt.width,kt.height,ft.depth,0,kt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?X&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,et,0,0,0,kt.width,kt.height,ft.depth,Ct,Yt,kt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,et,ee,kt.width,kt.height,ft.depth,0,Ct,Yt,kt.data)}else{Qt&&pe&&e.texStorage2D(r.TEXTURE_2D,Tt,ee,he[0].width,he[0].height);for(let et=0,ct=he.length;et<ct;et++)kt=he[et],P.format!==An?Ct!==null?Qt?X&&e.compressedTexSubImage2D(r.TEXTURE_2D,et,0,0,kt.width,kt.height,Ct,kt.data):e.compressedTexImage2D(r.TEXTURE_2D,et,ee,kt.width,kt.height,0,kt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?X&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,kt.width,kt.height,Ct,Yt,kt.data):e.texImage2D(r.TEXTURE_2D,et,ee,kt.width,kt.height,0,Ct,Yt,kt.data)}else if(P.isDataArrayTexture)if(Qt){if(pe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Tt,ee,ft.width,ft.height,ft.depth),X)if(P.layerUpdates.size>0){let et=Yu(ft.width,ft.height,P.format,P.type);for(let ct of P.layerUpdates){let Dt=ft.data.subarray(ct*et/ft.data.BYTES_PER_ELEMENT,(ct+1)*et/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ct,ft.width,ft.height,1,Ct,Yt,Dt)}P.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Yt,ft.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,ee,ft.width,ft.height,ft.depth,0,Ct,Yt,ft.data);else if(P.isData3DTexture)Qt?(pe&&e.texStorage3D(r.TEXTURE_3D,Tt,ee,ft.width,ft.height,ft.depth),X&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Yt,ft.data)):e.texImage3D(r.TEXTURE_3D,0,ee,ft.width,ft.height,ft.depth,0,Ct,Yt,ft.data);else if(P.isFramebufferTexture){if(pe)if(Qt)e.texStorage2D(r.TEXTURE_2D,Tt,ee,ft.width,ft.height);else{let et=ft.width,ct=ft.height;for(let Dt=0;Dt<Tt;Dt++)e.texImage2D(r.TEXTURE_2D,Dt,ee,et,ct,0,Ct,Yt,null),et>>=1,ct>>=1}}else if(he.length>0){if(Qt&&pe){let et=zt(he[0]);e.texStorage2D(r.TEXTURE_2D,Tt,ee,et.width,et.height)}for(let et=0,ct=he.length;et<ct;et++)kt=he[et],Qt?X&&e.texSubImage2D(r.TEXTURE_2D,et,0,0,Ct,Yt,kt):e.texImage2D(r.TEXTURE_2D,et,ee,Ct,Yt,kt);P.generateMipmaps=!1}else if(Qt){if(pe){let et=zt(ft);e.texStorage2D(r.TEXTURE_2D,Tt,ee,et.width,et.height)}X&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Ct,Yt,ft)}else e.texImage2D(r.TEXTURE_2D,0,ee,Ct,Yt,ft);x(P)&&f(st),Ht.__version=rt.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function Y(D,P,Q){if(P.image.length!==6)return;let st=xt(D,P),ht=P.source;e.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+Q);let rt=n.get(ht);if(ht.version!==rt.__version||st===!0){e.activeTexture(r.TEXTURE0+Q);let Ht=me.getPrimaries(me.workingColorSpace),Mt=P.colorSpace===Ci?null:me.getPrimaries(P.colorSpace),bt=P.colorSpace===Ci||Ht===Mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,P.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,P.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let te=P.isCompressedTexture||P.image[0].isCompressedTexture,ft=P.image[0]&&P.image[0].isDataTexture,Ct=[];for(let ct=0;ct<6;ct++)!te&&!ft?Ct[ct]=m(P.image[ct],!0,i.maxCubemapSize):Ct[ct]=ft?P.image[ct].image:P.image[ct],Ct[ct]=Jt(P,Ct[ct]);let Yt=Ct[0],ee=s.convert(P.format,P.colorSpace),kt=s.convert(P.type),he=_(P.internalFormat,ee,kt,P.colorSpace),Qt=P.isVideoTexture!==!0,pe=rt.__version===void 0||st===!0,X=ht.dataReady,Tt=R(P,Yt);ut(r.TEXTURE_CUBE_MAP,P);let et;if(te){Qt&&pe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,he,Yt.width,Yt.height);for(let ct=0;ct<6;ct++){et=Ct[ct].mipmaps;for(let Dt=0;Dt<et.length;Dt++){let Pt=et[Dt];P.format!==An?ee!==null?Qt?X&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,0,0,Pt.width,Pt.height,ee,Pt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,he,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,0,0,Pt.width,Pt.height,ee,kt,Pt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt,he,Pt.width,Pt.height,0,ee,kt,Pt.data)}}}else{if(et=P.mipmaps,Qt&&pe){et.length>0&&Tt++;let ct=zt(Ct[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Tt,he,ct.width,ct.height)}for(let ct=0;ct<6;ct++)if(ft){Qt?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Ct[ct].width,Ct[ct].height,ee,kt,Ct[ct].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,he,Ct[ct].width,Ct[ct].height,0,ee,kt,Ct[ct].data);for(let Dt=0;Dt<et.length;Dt++){let ie=et[Dt].image[ct].image;Qt?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,0,0,ie.width,ie.height,ee,kt,ie.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,he,ie.width,ie.height,0,ee,kt,ie.data)}}else{Qt?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,ee,kt,Ct[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,he,ee,kt,Ct[ct]);for(let Dt=0;Dt<et.length;Dt++){let Pt=et[Dt];Qt?X&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,0,0,ee,kt,Pt.image[ct]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ct,Dt+1,he,ee,kt,Pt.image[ct])}}}x(P)&&f(r.TEXTURE_CUBE_MAP),rt.__version=ht.version,P.onUpdate&&P.onUpdate(P)}D.__version=P.version}function nt(D,P,Q,st,ht,rt){let Ht=s.convert(Q.format,Q.colorSpace),Mt=s.convert(Q.type),bt=_(Q.internalFormat,Ht,Mt,Q.colorSpace),te=n.get(P),ft=n.get(Q);if(ft.__renderTarget=P,!te.__hasExternalTextures){let Ct=Math.max(1,P.width>>rt),Yt=Math.max(1,P.height>>rt);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,rt,bt,Ct,Yt,P.depth,0,Ht,Mt,null):e.texImage2D(ht,rt,bt,Ct,Yt,0,Ht,Mt,null)}e.bindFramebuffer(r.FRAMEBUFFER,D),Lt(P)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,st,ht,ft.__webglTexture,0,gt(P)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,st,ht,ft.__webglTexture,rt),e.bindFramebuffer(r.FRAMEBUFFER,null)}function K(D,P,Q){if(r.bindRenderbuffer(r.RENDERBUFFER,D),P.depthBuffer){let st=P.depthTexture,ht=st&&st.isDepthTexture?st.type:null,rt=v(P.stencilBuffer,ht),Ht=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Mt=gt(P);Lt(P)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Mt,rt,P.width,P.height):Q?r.renderbufferStorageMultisample(r.RENDERBUFFER,Mt,rt,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,rt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ht,r.RENDERBUFFER,D)}else{let st=P.textures;for(let ht=0;ht<st.length;ht++){let rt=st[ht],Ht=s.convert(rt.format,rt.colorSpace),Mt=s.convert(rt.type),bt=_(rt.internalFormat,Ht,Mt,rt.colorSpace),te=gt(P);Q&&Lt(P)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,bt,P.width,P.height):Lt(P)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,bt,P.width,P.height):r.renderbufferStorage(r.RENDERBUFFER,bt,P.width,P.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(D,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,D),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let st=n.get(P.depthTexture);st.__renderTarget=P,(!st.__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),F(P.depthTexture,0);let ht=st.__webglTexture,rt=gt(P);if(P.depthTexture.format===Bs)Lt(P)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(P.depthTexture.format===ki)Lt(P)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function yt(D){let P=n.get(D),Q=D.isWebGLCubeRenderTarget===!0;if(P.__boundDepthTexture!==D.depthTexture){let st=D.depthTexture;if(P.__depthDisposeCallback&&P.__depthDisposeCallback(),st){let ht=()=>{delete P.__boundDepthTexture,delete P.__depthDisposeCallback,st.removeEventListener("dispose",ht)};st.addEventListener("dispose",ht),P.__depthDisposeCallback=ht}P.__boundDepthTexture=st}if(D.depthTexture&&!P.__autoAllocateDepthBuffer){if(Q)throw new Error("target.depthTexture not supported in Cube render targets");mt(P.__webglFramebuffer,D)}else if(Q){P.__webglDepthbuffer=[];for(let st=0;st<6;st++)if(e.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer[st]),P.__webglDepthbuffer[st]===void 0)P.__webglDepthbuffer[st]=r.createRenderbuffer(),K(P.__webglDepthbuffer[st],D,!1);else{let ht=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=P.__webglDepthbuffer[st];r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,rt)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer===void 0)P.__webglDepthbuffer=r.createRenderbuffer(),K(P.__webglDepthbuffer,D,!1);else{let st=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=P.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,st,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function At(D,P,Q){let st=n.get(D);P!==void 0&&nt(st.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Q!==void 0&&yt(D)}function $t(D){let P=D.texture,Q=n.get(D),st=n.get(P);D.addEventListener("dispose",b);let ht=D.textures,rt=D.isWebGLCubeRenderTarget===!0,Ht=ht.length>1;if(Ht||(st.__webglTexture===void 0&&(st.__webglTexture=r.createTexture()),st.__version=P.version,o.memory.textures++),rt){Q.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(P.mipmaps&&P.mipmaps.length>0){Q.__webglFramebuffer[Mt]=[];for(let bt=0;bt<P.mipmaps.length;bt++)Q.__webglFramebuffer[Mt][bt]=r.createFramebuffer()}else Q.__webglFramebuffer[Mt]=r.createFramebuffer()}else{if(P.mipmaps&&P.mipmaps.length>0){Q.__webglFramebuffer=[];for(let Mt=0;Mt<P.mipmaps.length;Mt++)Q.__webglFramebuffer[Mt]=r.createFramebuffer()}else Q.__webglFramebuffer=r.createFramebuffer();if(Ht)for(let Mt=0,bt=ht.length;Mt<bt;Mt++){let te=n.get(ht[Mt]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&Lt(D)===!1){Q.__webglMultisampledFramebuffer=r.createFramebuffer(),Q.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ht.length;Mt++){let bt=ht[Mt];Q.__webglColorRenderbuffer[Mt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Q.__webglColorRenderbuffer[Mt]);let te=s.convert(bt.format,bt.colorSpace),ft=s.convert(bt.type),Ct=_(bt.internalFormat,te,ft,bt.colorSpace,D.isXRRenderTarget===!0),Yt=gt(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Yt,Ct,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Mt,r.RENDERBUFFER,Q.__webglColorRenderbuffer[Mt])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(Q.__webglDepthRenderbuffer=r.createRenderbuffer(),K(Q.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(rt){e.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture),ut(r.TEXTURE_CUBE_MAP,P);for(let Mt=0;Mt<6;Mt++)if(P.mipmaps&&P.mipmaps.length>0)for(let bt=0;bt<P.mipmaps.length;bt++)nt(Q.__webglFramebuffer[Mt][bt],D,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,bt);else nt(Q.__webglFramebuffer[Mt],D,P,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);x(P)&&f(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ht){for(let Mt=0,bt=ht.length;Mt<bt;Mt++){let te=ht[Mt],ft=n.get(te);e.bindTexture(r.TEXTURE_2D,ft.__webglTexture),ut(r.TEXTURE_2D,te),nt(Q.__webglFramebuffer,D,te,r.COLOR_ATTACHMENT0+Mt,r.TEXTURE_2D,0),x(te)&&f(r.TEXTURE_2D)}e.unbindTexture()}else{let Mt=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Mt,st.__webglTexture),ut(Mt,P),P.mipmaps&&P.mipmaps.length>0)for(let bt=0;bt<P.mipmaps.length;bt++)nt(Q.__webglFramebuffer[bt],D,P,r.COLOR_ATTACHMENT0,Mt,bt);else nt(Q.__webglFramebuffer,D,P,r.COLOR_ATTACHMENT0,Mt,0);x(P)&&f(Mt),e.unbindTexture()}D.depthBuffer&&yt(D)}function ot(D){let P=D.textures;for(let Q=0,st=P.length;Q<st;Q++){let ht=P[Q];if(x(ht)){let rt=y(D),Ht=n.get(ht).__webglTexture;e.bindTexture(rt,Ht),f(rt),e.unbindTexture()}}}let dt=[],U=[];function Ft(D){if(D.samples>0){if(Lt(D)===!1){let P=D.textures,Q=D.width,st=D.height,ht=r.COLOR_BUFFER_BIT,rt=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ht=n.get(D),Mt=P.length>1;if(Mt)for(let bt=0;bt<P.length;bt++)e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let bt=0;bt<P.length;bt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),Mt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ht.__webglColorRenderbuffer[bt]);let te=n.get(P[bt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,te,0)}r.blitFramebuffer(0,0,Q,st,0,0,Q,st,ht,r.NEAREST),l===!0&&(dt.length=0,U.length=0,dt.push(r.COLOR_ATTACHMENT0+bt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(dt.push(rt),U.push(rt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,U)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Mt)for(let bt=0;bt<P.length;bt++){e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.RENDERBUFFER,Ht.__webglColorRenderbuffer[bt]);let te=n.get(P[bt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+bt,r.TEXTURE_2D,te,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let P=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[P])}}}function gt(D){return Math.min(i.maxSamples,D.samples)}function Lt(D){let P=n.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function _t(D){let P=o.render.frame;h.get(D)!==P&&(h.set(D,P),D.update())}function Jt(D,P){let Q=D.colorSpace,st=D.format,ht=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Q!==sr&&Q!==Ci&&(me.getTransfer(Q)===Re?(st!==An||ht!==Xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Q)),P}function zt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=L,this.resetTextureUnits=z,this.setTexture2D=F,this.setTexture2DArray=B,this.setTexture3D=J,this.setTextureCube=O,this.rebindTextures=At,this.setupRenderTarget=$t,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Ft,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Lt}function nv(r,t){function e(n,i=Ci){let s,o=me.getTransfer(i);if(n===Xn)return r.UNSIGNED_BYTE;if(n===yh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Mh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===gd)return r.BYTE;if(n===xd)return r.SHORT;if(n===Lr)return r.UNSIGNED_SHORT;if(n===vh)return r.INT;if(n===ss)return r.UNSIGNED_INT;if(n===Qn)return r.FLOAT;if(n===dn)return r.HALF_FLOAT;if(n===yd)return r.ALPHA;if(n===Md)return r.RGB;if(n===An)return r.RGBA;if(n===_d)return r.LUMINANCE;if(n===wd)return r.LUMINANCE_ALPHA;if(n===Bs)return r.DEPTH_COMPONENT;if(n===ki)return r.DEPTH_STENCIL;if(n===_h)return r.RED;if(n===wh)return r.RED_INTEGER;if(n===bd)return r.RG;if(n===bh)return r.RG_INTEGER;if(n===Eh)return r.RGBA_INTEGER;if(n===Lo||n===Do||n===ko||n===Uo)if(o===Re)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Lo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Lo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Do)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Uo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ql||n===tc||n===ec||n===nc)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ql)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===tc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ic||n===sc||n===rc)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ic||n===sc)return o===Re?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===rc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oc||n===ac||n===lc||n===cc||n===hc||n===uc||n===dc||n===fc||n===pc||n===mc||n===gc||n===xc||n===vc||n===yc)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===oc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ac)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===fc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===xc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===vc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===yc)return o===Re?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===No||n===Mc||n===_c)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===No)return o===Re?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_c)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ed||n===wc||n===bc||n===Ec)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===No)return s.COMPRESSED_RED_RGTC1_EXT;if(n===wc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ec)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Fc=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ot=class extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},iv={type:"move"},Pr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let m of t.hand.values()){let x=e.getJointPose(m,n),f=this._getHandJoint(c,m);x!==null&&(f.matrix.fromArray(x.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=x.radius),f.visible=x!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&p>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`,Oc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new bn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new de({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new q(new ve(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends Ui{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,p=null,d=null,g=null,m=new Oc,x=e.getContextAttributes(),f=null,y=null,_=[],v=[],R=new tt,E=null,b=new Ze;b.viewport=new Ce;let C=new Ze;C.viewport=new Ce;let M=[b,C],w=new Fc,A=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(S){let Y=_[S];return Y===void 0&&(Y=new Pr,_[S]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(S){let Y=_[S];return Y===void 0&&(Y=new Pr,_[S]=Y),Y.getGripSpace()},this.getHand=function(S){let Y=_[S];return Y===void 0&&(Y=new Pr,_[S]=Y),Y.getHandSpace()};function L(S){let Y=v.indexOf(S.inputSource);if(Y===-1)return;let nt=_[Y];nt!==void 0&&(nt.update(S.inputSource,S.frame,c||o),nt.dispatchEvent({type:S.type,data:S.inputSource}))}function N(){i.removeEventListener("select",L),i.removeEventListener("selectstart",L),i.removeEventListener("selectend",L),i.removeEventListener("squeeze",L),i.removeEventListener("squeezestart",L),i.removeEventListener("squeezeend",L),i.removeEventListener("end",N),i.removeEventListener("inputsourceschange",F);for(let S=0;S<_.length;S++){let Y=v[S];Y!==null&&(v[S]=null,_[S].disconnect(Y))}A=null,z=null,m.reset(),t.setRenderTarget(f),d=null,p=null,u=null,i=null,y=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(S){s=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(S){a=S,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(S){c=S},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(S){if(i=S,i!==null){if(f=t.getRenderTarget(),i.addEventListener("select",L),i.addEventListener("selectstart",L),i.addEventListener("selectend",L),i.addEventListener("squeeze",L),i.addEventListener("squeezestart",L),i.addEventListener("squeezeend",L),i.addEventListener("end",N),i.addEventListener("inputsourceschange",F),x.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(R),i.renderState.layers===void 0){let Y={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,Y),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new $e(d.framebufferWidth,d.framebufferHeight,{format:An,type:Xn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Y=null,nt=null,K=null;x.depth&&(K=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Y=x.stencil?ki:Bs,nt=x.stencil?Di:ss);let mt={colorFormat:e.RGBA8,depthFormat:K,scaleFactor:s};u=new XRWebGLBinding(i,e),p=u.createProjectionLayer(mt),i.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),y=new $e(p.textureWidth,p.textureHeight,{format:An,type:Xn,depthTexture:new Js(p.textureWidth,p.textureHeight,nt,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),xt.setContext(i),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function F(S){for(let Y=0;Y<S.removed.length;Y++){let nt=S.removed[Y],K=v.indexOf(nt);K>=0&&(v[K]=null,_[K].disconnect(nt))}for(let Y=0;Y<S.added.length;Y++){let nt=S.added[Y],K=v.indexOf(nt);if(K===-1){for(let yt=0;yt<_.length;yt++)if(yt>=v.length){v.push(nt),K=yt;break}else if(v[yt]===null){v[yt]=nt,K=yt;break}if(K===-1)break}let mt=_[K];mt&&mt.connect(nt)}}let B=new I,J=new I;function O(S,Y,nt){B.setFromMatrixPosition(Y.matrixWorld),J.setFromMatrixPosition(nt.matrixWorld);let K=B.distanceTo(J),mt=Y.projectionMatrix.elements,yt=nt.projectionMatrix.elements,At=mt[14]/(mt[10]-1),$t=mt[14]/(mt[10]+1),ot=(mt[9]+1)/mt[5],dt=(mt[9]-1)/mt[5],U=(mt[8]-1)/mt[0],Ft=(yt[8]+1)/yt[0],gt=At*U,Lt=At*Ft,_t=K/(-U+Ft),Jt=_t*-U;if(Y.matrixWorld.decompose(S.position,S.quaternion,S.scale),S.translateX(Jt),S.translateZ(_t),S.matrixWorld.compose(S.position,S.quaternion,S.scale),S.matrixWorldInverse.copy(S.matrixWorld).invert(),mt[10]===-1)S.projectionMatrix.copy(Y.projectionMatrix),S.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{let zt=At+_t,D=$t+_t,P=gt-Jt,Q=Lt+(K-Jt),st=ot*$t/D*zt,ht=dt*$t/D*zt;S.projectionMatrix.makePerspective(P,Q,st,ht,zt,D),S.projectionMatrixInverse.copy(S.projectionMatrix).invert()}}function V(S,Y){Y===null?S.matrixWorld.copy(S.matrix):S.matrixWorld.multiplyMatrices(Y.matrixWorld,S.matrix),S.matrixWorldInverse.copy(S.matrixWorld).invert()}this.updateCamera=function(S){if(i===null)return;let Y=S.near,nt=S.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(nt=m.depthFar)),w.near=C.near=b.near=Y,w.far=C.far=b.far=nt,(A!==w.near||z!==w.far)&&(i.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,z=w.far),b.layers.mask=S.layers.mask|2,C.layers.mask=S.layers.mask|4,w.layers.mask=b.layers.mask|C.layers.mask;let K=S.parent,mt=w.cameras;V(w,K);for(let yt=0;yt<mt.length;yt++)V(mt[yt],K);mt.length===2?O(w,b,C):w.projectionMatrix.copy(b.projectionMatrix),j(S,w,K)};function j(S,Y,nt){nt===null?S.matrix.copy(Y.matrixWorld):(S.matrix.copy(nt.matrixWorld),S.matrix.invert(),S.matrix.multiply(Y.matrixWorld)),S.matrix.decompose(S.position,S.quaternion,S.scale),S.updateMatrixWorld(!0),S.projectionMatrix.copy(Y.projectionMatrix),S.projectionMatrixInverse.copy(Y.projectionMatrixInverse),S.isPerspectiveCamera&&(S.fov=Ws*2*Math.atan(1/S.projectionMatrix.elements[5]),S.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(p===null&&d===null))return l},this.setFoveation=function(S){l=S,p!==null&&(p.fixedFoveation=S),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=S)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(w)};let it=null;function ut(S,Y){if(h=Y.getViewerPose(c||o),g=Y,h!==null){let nt=h.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let K=!1;nt.length!==w.cameras.length&&(w.cameras.length=0,K=!0);for(let yt=0;yt<nt.length;yt++){let At=nt[yt],$t=null;if(d!==null)$t=d.getViewport(At);else{let dt=u.getViewSubImage(p,At);$t=dt.viewport,yt===0&&(t.setRenderTargetTextures(y,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(y))}let ot=M[yt];ot===void 0&&(ot=new Ze,ot.layers.enable(yt),ot.viewport=new Ce,M[yt]=ot),ot.matrix.fromArray(At.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(At.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set($t.x,$t.y,$t.width,$t.height),yt===0&&(w.matrix.copy(ot.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),K===!0&&w.cameras.push(ot)}let mt=i.enabledFeatures;if(mt&&mt.includes("depth-sensing")){let yt=u.getDepthInformation(nt[0]);yt&&yt.isValid&&yt.texture&&m.init(t,yt,i.renderState)}}for(let nt=0;nt<_.length;nt++){let K=v[nt],mt=_[nt];K!==null&&mt!==void 0&&mt.update(K,Y,c||o)}it&&it(S,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}let xt=new Cd;xt.setAnimationLoop(ut),this.setAnimationLoop=function(S){it=S},this.dispose=function(){}}},Qi=new en,ov=new jt;function av(r,t){function e(x,f){x.matrixAutoUpdate===!0&&x.updateMatrix(),f.value.copy(x.matrix)}function n(x,f){f.color.getRGB(x.fogColor.value,Ad(r)),f.isFog?(x.fogNear.value=f.near,x.fogFar.value=f.far):f.isFogExp2&&(x.fogDensity.value=f.density)}function i(x,f,y,_,v){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(x,f):f.isMeshToonMaterial?(s(x,f),u(x,f)):f.isMeshPhongMaterial?(s(x,f),h(x,f)):f.isMeshStandardMaterial?(s(x,f),p(x,f),f.isMeshPhysicalMaterial&&d(x,f,v)):f.isMeshMatcapMaterial?(s(x,f),g(x,f)):f.isMeshDepthMaterial?s(x,f):f.isMeshDistanceMaterial?(s(x,f),m(x,f)):f.isMeshNormalMaterial?s(x,f):f.isLineBasicMaterial?(o(x,f),f.isLineDashedMaterial&&a(x,f)):f.isPointsMaterial?l(x,f,y,_):f.isSpriteMaterial?c(x,f):f.isShadowMaterial?(x.color.value.copy(f.color),x.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(x,f){x.opacity.value=f.opacity,f.color&&x.diffuse.value.copy(f.color),f.emissive&&x.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(x.map.value=f.map,e(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.bumpMap&&(x.bumpMap.value=f.bumpMap,e(f.bumpMap,x.bumpMapTransform),x.bumpScale.value=f.bumpScale,f.side===cn&&(x.bumpScale.value*=-1)),f.normalMap&&(x.normalMap.value=f.normalMap,e(f.normalMap,x.normalMapTransform),x.normalScale.value.copy(f.normalScale),f.side===cn&&x.normalScale.value.negate()),f.displacementMap&&(x.displacementMap.value=f.displacementMap,e(f.displacementMap,x.displacementMapTransform),x.displacementScale.value=f.displacementScale,x.displacementBias.value=f.displacementBias),f.emissiveMap&&(x.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,x.emissiveMapTransform)),f.specularMap&&(x.specularMap.value=f.specularMap,e(f.specularMap,x.specularMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest);let y=t.get(f),_=y.envMap,v=y.envMapRotation;_&&(x.envMap.value=_,Qi.copy(v),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),x.envMapRotation.value.setFromMatrix4(ov.makeRotationFromEuler(Qi)),x.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,x.reflectivity.value=f.reflectivity,x.ior.value=f.ior,x.refractionRatio.value=f.refractionRatio),f.lightMap&&(x.lightMap.value=f.lightMap,x.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,x.lightMapTransform)),f.aoMap&&(x.aoMap.value=f.aoMap,x.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,x.aoMapTransform))}function o(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,f.map&&(x.map.value=f.map,e(f.map,x.mapTransform))}function a(x,f){x.dashSize.value=f.dashSize,x.totalSize.value=f.dashSize+f.gapSize,x.scale.value=f.scale}function l(x,f,y,_){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.size.value=f.size*y,x.scale.value=_*.5,f.map&&(x.map.value=f.map,e(f.map,x.uvTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function c(x,f){x.diffuse.value.copy(f.color),x.opacity.value=f.opacity,x.rotation.value=f.rotation,f.map&&(x.map.value=f.map,e(f.map,x.mapTransform)),f.alphaMap&&(x.alphaMap.value=f.alphaMap,e(f.alphaMap,x.alphaMapTransform)),f.alphaTest>0&&(x.alphaTest.value=f.alphaTest)}function h(x,f){x.specular.value.copy(f.specular),x.shininess.value=Math.max(f.shininess,1e-4)}function u(x,f){f.gradientMap&&(x.gradientMap.value=f.gradientMap)}function p(x,f){x.metalness.value=f.metalness,f.metalnessMap&&(x.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,x.metalnessMapTransform)),x.roughness.value=f.roughness,f.roughnessMap&&(x.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,x.roughnessMapTransform)),f.envMap&&(x.envMapIntensity.value=f.envMapIntensity)}function d(x,f,y){x.ior.value=f.ior,f.sheen>0&&(x.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),x.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(x.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,x.sheenColorMapTransform)),f.sheenRoughnessMap&&(x.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,x.sheenRoughnessMapTransform))),f.clearcoat>0&&(x.clearcoat.value=f.clearcoat,x.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(x.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,x.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(x.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&x.clearcoatNormalScale.value.negate())),f.dispersion>0&&(x.dispersion.value=f.dispersion),f.iridescence>0&&(x.iridescence.value=f.iridescence,x.iridescenceIOR.value=f.iridescenceIOR,x.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(x.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,x.iridescenceMapTransform)),f.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),f.transmission>0&&(x.transmission.value=f.transmission,x.transmissionSamplerMap.value=y.texture,x.transmissionSamplerSize.value.set(y.width,y.height),f.transmissionMap&&(x.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,x.transmissionMapTransform)),x.thickness.value=f.thickness,f.thicknessMap&&(x.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=f.attenuationDistance,x.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(x.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(x.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=f.specularIntensity,x.specularColor.value.copy(f.specularColor),f.specularColorMap&&(x.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,x.specularColorMapTransform)),f.specularIntensityMap&&(x.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,x.specularIntensityMapTransform))}function g(x,f){f.matcap&&(x.matcap.value=f.matcap)}function m(x,f){let y=t.get(f).light;x.referencePosition.value.setFromMatrixPosition(y.matrixWorld),x.nearDistance.value=y.shadow.camera.near,x.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lv(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,_){let v=_.program;n.uniformBlockBinding(y,v)}function c(y,_){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",x));let R=_.program;n.updateUBOMapping(y,R);let E=t.render.frame;s[y.id]!==E&&(p(y),s[y.id]=E)}function h(y){let _=u();y.__bindingPointIndex=_;let v=r.createBuffer(),R=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,R,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(y){let _=i[y.id],v=y.uniforms,R=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let E=0,b=v.length;E<b;E++){let C=Array.isArray(v[E])?v[E]:[v[E]];for(let M=0,w=C.length;M<w;M++){let A=C[M];if(d(A,E,M,R)===!0){let z=A.__offset,L=Array.isArray(A.value)?A.value:[A.value],N=0;for(let F=0;F<L.length;F++){let B=L[F],J=m(B);typeof B=="number"||typeof B=="boolean"?(A.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,z+N,A.__data)):B.isMatrix3?(A.__data[0]=B.elements[0],A.__data[1]=B.elements[1],A.__data[2]=B.elements[2],A.__data[3]=0,A.__data[4]=B.elements[3],A.__data[5]=B.elements[4],A.__data[6]=B.elements[5],A.__data[7]=0,A.__data[8]=B.elements[6],A.__data[9]=B.elements[7],A.__data[10]=B.elements[8],A.__data[11]=0):(B.toArray(A.__data,N),N+=J.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,A.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,_,v,R){let E=y.value,b=_+"_"+v;if(R[b]===void 0)return typeof E=="number"||typeof E=="boolean"?R[b]=E:R[b]=E.clone(),!0;{let C=R[b];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return R[b]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(y){let _=y.uniforms,v=0,R=16;for(let b=0,C=_.length;b<C;b++){let M=Array.isArray(_[b])?_[b]:[_[b]];for(let w=0,A=M.length;w<A;w++){let z=M[w],L=Array.isArray(z.value)?z.value:[z.value];for(let N=0,F=L.length;N<F;N++){let B=L[N],J=m(B),O=v%R,V=O%J.boundary,j=O+V;v+=V,j!==0&&R-j<J.storage&&(v+=R-j),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=v,v+=J.storage}}}let E=v%R;return E>0&&(v+=R-E),y.__size=v,y.__cache={},this}function m(y){let _={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(_.boundary=4,_.storage=4):y.isVector2?(_.boundary=8,_.storage=8):y.isVector3||y.isColor?(_.boundary=16,_.storage=12):y.isVector4?(_.boundary=16,_.storage=16):y.isMatrix3?(_.boundary=48,_.storage=48):y.isMatrix4?(_.boundary=64,_.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),_}function x(y){let _=y.target;_.removeEventListener("dispose",x);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function f(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:f}}var $o=class{constructor(t={}){let{canvas:e=fp(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:p=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let g=new Uint32Array(4),m=new Int32Array(4),x=null,f=null,y=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ee,this.toneMapping=Ii,this.toneMappingExposure=1;let v=this,R=!1,E=0,b=0,C=null,M=-1,w=null,A=new Ce,z=new Ce,L=null,N=new St(0),F=0,B=e.width,J=e.height,O=1,V=null,j=null,it=new Ce(0,0,B,J),ut=new Ce(0,0,B,J),xt=!1,S=new kr,Y=!1,nt=!1,K=new jt,mt=new jt,yt=new I,At=new Ce,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ot=!1;function dt(){return C===null?O:1}let U=n;function Ft(T,H){return e.getContext(T,H)}try{let T={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hh}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),U===null){let H="webgl2";if(U=Ft(H,T),U===null)throw Ft(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let gt,Lt,_t,Jt,zt,D,P,Q,st,ht,rt,Ht,Mt,bt,te,ft,Ct,Yt,ee,kt,he,Qt,pe,X;function Tt(){gt=new Eg(U),gt.init(),Qt=new nv(U,gt),Lt=new vg(U,gt,t,Qt),_t=new Qx(U,gt),Lt.reverseDepthBuffer&&p&&_t.buffers.depth.setReversed(!0),Jt=new Rg(U),zt=new Fx,D=new ev(U,gt,_t,zt,Lt,Qt,Jt),P=new Mg(v),Q=new bg(v),st=new Dp(U),pe=new gg(U,st),ht=new Sg(U,st,Jt,pe),rt=new Cg(U,ht,st,Jt),ee=new Ag(U,Lt,D),ft=new yg(zt),Ht=new Hx(v,P,Q,gt,Lt,pe,ft),Mt=new av(v,zt),bt=new Gx,te=new Yx(gt),Yt=new mg(v,P,Q,_t,rt,d,l),Ct=new jx(v,rt,Lt),X=new lv(U,Jt,Lt,_t),kt=new xg(U,gt,Jt),he=new Tg(U,gt,Jt),Jt.programs=Ht.programs,v.capabilities=Lt,v.extensions=gt,v.properties=zt,v.renderLists=bt,v.shadowMap=Ct,v.state=_t,v.info=Jt}Tt();let et=new Gc(v,U);this.xr=et,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let T=gt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=gt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(T){T!==void 0&&(O=T,this.setSize(B,J,!1))},this.getSize=function(T){return T.set(B,J)},this.setSize=function(T,H,G=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=T,J=H,e.width=Math.floor(T*O),e.height=Math.floor(H*O),G===!0&&(e.style.width=T+"px",e.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(B*O,J*O).floor()},this.setDrawingBufferSize=function(T,H,G){B=T,J=H,O=G,e.width=Math.floor(T*G),e.height=Math.floor(H*G),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(A)},this.getViewport=function(T){return T.copy(it)},this.setViewport=function(T,H,G,Z){T.isVector4?it.set(T.x,T.y,T.z,T.w):it.set(T,H,G,Z),_t.viewport(A.copy(it).multiplyScalar(O).round())},this.getScissor=function(T){return T.copy(ut)},this.setScissor=function(T,H,G,Z){T.isVector4?ut.set(T.x,T.y,T.z,T.w):ut.set(T,H,G,Z),_t.scissor(z.copy(ut).multiplyScalar(O).round())},this.getScissorTest=function(){return xt},this.setScissorTest=function(T){_t.setScissorTest(xt=T)},this.setOpaqueSort=function(T){V=T},this.setTransparentSort=function(T){j=T},this.getClearColor=function(T){return T.copy(Yt.getClearColor())},this.setClearColor=function(){Yt.setClearColor.apply(Yt,arguments)},this.getClearAlpha=function(){return Yt.getClearAlpha()},this.setClearAlpha=function(){Yt.setClearAlpha.apply(Yt,arguments)},this.clear=function(T=!0,H=!0,G=!0){let Z=0;if(T){let $=!1;if(C!==null){let vt=C.texture.format;$=vt===Eh||vt===bh||vt===wh}if($){let vt=C.texture.type,Et=vt===Xn||vt===ss||vt===Lr||vt===Di||vt===yh||vt===Mh,Gt=Yt.getClearColor(),Ut=Yt.getClearAlpha(),Zt=Gt.r,se=Gt.g,Wt=Gt.b;Et?(g[0]=Zt,g[1]=se,g[2]=Wt,g[3]=Ut,U.clearBufferuiv(U.COLOR,0,g)):(m[0]=Zt,m[1]=se,m[2]=Wt,m[3]=Ut,U.clearBufferiv(U.COLOR,0,m))}else Z|=U.COLOR_BUFFER_BIT}H&&(Z|=U.DEPTH_BUFFER_BIT),G&&(Z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),bt.dispose(),te.dispose(),zt.dispose(),P.dispose(),Q.dispose(),rt.dispose(),pe.dispose(),X.dispose(),Ht.dispose(),et.dispose(),et.removeEventListener("sessionstart",wn),et.removeEventListener("sessionend",$i),Pn.stop()};function ct(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;let T=Jt.autoReset,H=Ct.enabled,G=Ct.autoUpdate,Z=Ct.needsUpdate,$=Ct.type;Tt(),Jt.autoReset=T,Ct.enabled=H,Ct.autoUpdate=G,Ct.needsUpdate=Z,Ct.type=$}function Pt(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){let H=T.target;H.removeEventListener("dispose",ie),De(H)}function De(T){qe(T),zt.remove(T)}function qe(T){let H=zt.get(T).programs;H!==void 0&&(H.forEach(function(G){Ht.releaseProgram(G)}),T.isShaderMaterial&&Ht.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,G,Z,$,vt){H===null&&(H=$t);let Et=$.isMesh&&$.matrixWorld.determinant()<0,Gt=W(T,H,G,Z,$);_t.setMaterial(Z,Et);let Ut=G.index,Zt=1;if(Z.wireframe===!0){if(Ut=ht.getWireframeAttribute(G),Ut===void 0)return;Zt=2}let se=G.drawRange,Wt=G.attributes.position,ue=se.start*Zt,Te=(se.start+se.count)*Zt;vt!==null&&(ue=Math.max(ue,vt.start*Zt),Te=Math.min(Te,(vt.start+vt.count)*Zt)),Ut!==null?(ue=Math.max(ue,0),Te=Math.min(Te,Ut.count)):Wt!=null&&(ue=Math.max(ue,0),Te=Math.min(Te,Wt.count));let Pe=Te-ue;if(Pe<0||Pe===1/0)return;pe.setup($,Z,Gt,G,Ut);let qt,re=kt;if(Ut!==null&&(qt=st.get(Ut),re=he,re.setIndex(qt)),$.isMesh)Z.wireframe===!0?(_t.setLineWidth(Z.wireframeLinewidth*dt()),re.setMode(U.LINES)):re.setMode(U.TRIANGLES);else if($.isLine){let Rt=Z.linewidth;Rt===void 0&&(Rt=1),_t.setLineWidth(Rt*dt()),$.isLineSegments?re.setMode(U.LINES):$.isLineLoop?re.setMode(U.LINE_LOOP):re.setMode(U.LINE_STRIP)}else $.isPoints?re.setMode(U.POINTS):$.isSprite&&re.setMode(U.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)re.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{let Rt=$._multiDrawStarts,sn=$._multiDrawCounts,ne=$._multiDrawCount,Vt=Ut?st.get(Ut).bytesPerElement:1,ze=zt.get(Z).currentProgram.getUniforms();for(let We=0;We<ne;We++)ze.setValue(U,"_gl_DrawID",We),re.render(Rt[We]/Vt,sn[We])}else if($.isInstancedMesh)re.renderInstances(ue,Pe,$.count);else if(G.isInstancedBufferGeometry){let Rt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,sn=Math.min(G.instanceCount,Rt);re.renderInstances(ue,Pe,sn)}else re.render(ue,Pe)};function Me(T,H,G){T.transparent===!0&&T.side===we&&T.forceSinglePass===!1?(T.side=cn,T.needsUpdate=!0,Hn(T,H,G),T.side=Li,T.needsUpdate=!0,Hn(T,H,G),T.side=we):Hn(T,H,G)}this.compile=function(T,H,G=null){G===null&&(G=T),f=te.get(G),f.init(H),_.push(f),G.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),T!==G&&T.traverseVisible(function($){$.isLight&&$.layers.test(H.layers)&&(f.pushLight($),$.castShadow&&f.pushShadow($))}),f.setupLights();let Z=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;let vt=$.material;if(vt)if(Array.isArray(vt))for(let Et=0;Et<vt.length;Et++){let Gt=vt[Et];Me(Gt,G,$),Z.add(Gt)}else Me(vt,G,$),Z.add(vt)}),_.pop(),f=null,Z},this.compileAsync=function(T,H,G=null){let Z=this.compile(T,H,G);return new Promise($=>{function vt(){if(Z.forEach(function(Et){zt.get(Et).currentProgram.isReady()&&Z.delete(Et)}),Z.size===0){$(T);return}setTimeout(vt,10)}gt.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let En=null;function Sn(T){En&&En(T)}function wn(){Pn.stop()}function $i(){Pn.start()}let Pn=new Cd;Pn.setAnimationLoop(Sn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(T){En=T,et.setAnimationLoop(T),T===null?Pn.stop():Pn.start()},et.addEventListener("sessionstart",wn),et.addEventListener("sessionend",$i),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(H),H=et.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,H,C),f=te.get(T,_.length),f.init(H),_.push(f),mt.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),S.setFromProjectionMatrix(mt),nt=this.localClippingEnabled,Y=ft.init(this.clippingPlanes,nt),x=bt.get(T,y.length),x.init(),y.push(x),et.enabled===!0&&et.isPresenting===!0){let vt=v.xr.getDepthSensingMesh();vt!==null&&In(vt,H,-1/0,v.sortObjects)}In(T,H,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(V,j),ot=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,ot&&Yt.addToRenderList(x,T),this.info.render.frame++,Y===!0&&ft.beginShadows();let G=f.state.shadowsArray;Ct.render(G,T,H),Y===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();let Z=x.opaque,$=x.transmissive;if(f.setupLights(),H.isArrayCamera){let vt=H.cameras;if($.length>0)for(let Et=0,Gt=vt.length;Et<Gt;Et++){let Ut=vt[Et];ps(Z,$,T,Ut)}ot&&Yt.render(T);for(let Et=0,Gt=vt.length;Et<Gt;Et++){let Ut=vt[Et];qi(x,T,Ut,Ut.viewport)}}else $.length>0&&ps(Z,$,T,H),ot&&Yt.render(T),qi(x,T,H);C!==null&&(D.updateMultisampleRenderTarget(C),D.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(v,T,H),pe.resetDefaultState(),M=-1,w=null,_.pop(),_.length>0?(f=_[_.length-1],Y===!0&&ft.setGlobalState(v.clippingPlanes,f.state.camera)):f=null,y.pop(),y.length>0?x=y[y.length-1]:x=null};function In(T,H,G,Z){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)G=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)f.pushLight(T),T.castShadow&&f.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||S.intersectsSprite(T)){Z&&At.setFromMatrixPosition(T.matrixWorld).applyMatrix4(mt);let Et=rt.update(T),Gt=T.material;Gt.visible&&x.push(T,Et,Gt,G,At.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||S.intersectsObject(T))){let Et=rt.update(T),Gt=T.material;if(Z&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),At.copy(T.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),At.copy(Et.boundingSphere.center)),At.applyMatrix4(T.matrixWorld).applyMatrix4(mt)),Array.isArray(Gt)){let Ut=Et.groups;for(let Zt=0,se=Ut.length;Zt<se;Zt++){let Wt=Ut[Zt],ue=Gt[Wt.materialIndex];ue&&ue.visible&&x.push(T,Et,ue,G,At.z,Wt)}}else Gt.visible&&x.push(T,Et,Gt,G,At.z,null)}}let vt=T.children;for(let Et=0,Gt=vt.length;Et<Gt;Et++)In(vt[Et],H,G,Z)}function qi(T,H,G,Z){let $=T.opaque,vt=T.transmissive,Et=T.transparent;f.setupLightsView(G),Y===!0&&ft.setGlobalState(v.clippingPlanes,G),Z&&_t.viewport(A.copy(Z)),$.length>0&&ms($,H,G),vt.length>0&&ms(vt,H,G),Et.length>0&&ms(Et,H,G),_t.buffers.depth.setTest(!0),_t.buffers.depth.setMask(!0),_t.buffers.color.setMask(!0),_t.setPolygonOffset(!1)}function ps(T,H,G,Z){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[Z.id]===void 0&&(f.state.transmissionRenderTarget[Z.id]=new $e(1,1,{generateMipmaps:!0,type:gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float")?dn:Xn,minFilter:is,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:me.workingColorSpace}));let vt=f.state.transmissionRenderTarget[Z.id],Et=Z.viewport||A;vt.setSize(Et.z,Et.w);let Gt=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(N),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),ot&&Yt.render(G);let Ut=v.toneMapping;v.toneMapping=Ii;let Zt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),f.setupLightsView(Z),Y===!0&&ft.setGlobalState(v.clippingPlanes,Z),ms(T,G,Z),D.updateMultisampleRenderTarget(vt),D.updateRenderTargetMipmap(vt),gt.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Wt=0,ue=H.length;Wt<ue;Wt++){let Te=H[Wt],Pe=Te.object,qt=Te.geometry,re=Te.material,Rt=Te.group;if(re.side===we&&Pe.layers.test(Z.layers)){let sn=re.side;re.side=cn,re.needsUpdate=!0,ri(Pe,G,Z,qt,re,Rt),re.side=sn,re.needsUpdate=!0,se=!0}}se===!0&&(D.updateMultisampleRenderTarget(vt),D.updateRenderTargetMipmap(vt))}v.setRenderTarget(Gt),v.setClearColor(N,F),Zt!==void 0&&(Z.viewport=Zt),v.toneMapping=Ut}function ms(T,H,G){let Z=H.isScene===!0?H.overrideMaterial:null;for(let $=0,vt=T.length;$<vt;$++){let Et=T[$],Gt=Et.object,Ut=Et.geometry,Zt=Z===null?Et.material:Z,se=Et.group;Gt.layers.test(G.layers)&&ri(Gt,H,G,Ut,Zt,se)}}function ri(T,H,G,Z,$,vt){T.onBeforeRender(v,H,G,Z,$,vt),T.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(v,H,G,Z,T,vt),$.transparent===!0&&$.side===we&&$.forceSinglePass===!1?($.side=cn,$.needsUpdate=!0,v.renderBufferDirect(G,H,Z,$,T,vt),$.side=Li,$.needsUpdate=!0,v.renderBufferDirect(G,H,Z,$,T,vt),$.side=we):v.renderBufferDirect(G,H,Z,$,T,vt),T.onAfterRender(v,H,G,Z,$,vt)}function Hn(T,H,G){H.isScene!==!0&&(H=$t);let Z=zt.get(T),$=f.state.lights,vt=f.state.shadowsArray,Et=$.state.version,Gt=Ht.getParameters(T,$.state,vt,H,G),Ut=Ht.getProgramCacheKey(Gt),Zt=Z.programs;Z.environment=T.isMeshStandardMaterial?H.environment:null,Z.fog=H.fog,Z.envMap=(T.isMeshStandardMaterial?Q:P).get(T.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Zt===void 0&&(T.addEventListener("dispose",ie),Zt=new Map,Z.programs=Zt);let se=Zt.get(Ut);if(se!==void 0){if(Z.currentProgram===se&&Z.lightsStateVersion===Et)return k(T,Gt),se}else Gt.uniforms=Ht.getUniforms(T),T.onBeforeCompile(Gt,v),se=Ht.acquireProgram(Gt,Ut),Zt.set(Ut,se),Z.uniforms=Gt.uniforms;let Wt=Z.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Wt.clippingPlanes=ft.uniform),k(T,Gt),Z.needsLights=Kt(T),Z.lightsStateVersion=Et,Z.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.directionalShadowMap.value=$.state.directionalShadowMap,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotShadowMap.value=$.state.spotShadowMap,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMap.value=$.state.pointShadowMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),Z.currentProgram=se,Z.uniformsList=null,se}function fr(T){if(T.uniformsList===null){let H=T.currentProgram.getUniforms();T.uniformsList=Fs.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function k(T,H){let G=zt.get(T);G.outputColorSpace=H.outputColorSpace,G.batching=H.batching,G.batchingColor=H.batchingColor,G.instancing=H.instancing,G.instancingColor=H.instancingColor,G.instancingMorph=H.instancingMorph,G.skinning=H.skinning,G.morphTargets=H.morphTargets,G.morphNormals=H.morphNormals,G.morphColors=H.morphColors,G.morphTargetsCount=H.morphTargetsCount,G.numClippingPlanes=H.numClippingPlanes,G.numIntersection=H.numClipIntersection,G.vertexAlphas=H.vertexAlphas,G.vertexTangents=H.vertexTangents,G.toneMapping=H.toneMapping}function W(T,H,G,Z,$){H.isScene!==!0&&(H=$t),D.resetTextureUnits();let vt=H.fog,Et=Z.isMeshStandardMaterial?H.environment:null,Gt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:sr,Ut=(Z.isMeshStandardMaterial?Q:P).get(Z.envMap||Et),Zt=Z.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,se=!!G.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Wt=!!G.morphAttributes.position,ue=!!G.morphAttributes.normal,Te=!!G.morphAttributes.color,Pe=Ii;Z.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Pe=v.toneMapping);let qt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,re=qt!==void 0?qt.length:0,Rt=zt.get(Z),sn=f.state.lights;if(Y===!0&&(nt===!0||T!==w)){let zn=T===w&&Z.id===M;ft.setState(Z,T,zn)}let ne=!1;Z.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==sn.state.version||Rt.outputColorSpace!==Gt||$.isBatchedMesh&&Rt.batching===!1||!$.isBatchedMesh&&Rt.batching===!0||$.isBatchedMesh&&Rt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Rt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Rt.instancing===!1||!$.isInstancedMesh&&Rt.instancing===!0||$.isSkinnedMesh&&Rt.skinning===!1||!$.isSkinnedMesh&&Rt.skinning===!0||$.isInstancedMesh&&Rt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Rt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Rt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Rt.instancingMorph===!1&&$.morphTexture!==null||Rt.envMap!==Ut||Z.fog===!0&&Rt.fog!==vt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ft.numPlanes||Rt.numIntersection!==ft.numIntersection)||Rt.vertexAlphas!==Zt||Rt.vertexTangents!==se||Rt.morphTargets!==Wt||Rt.morphNormals!==ue||Rt.morphColors!==Te||Rt.toneMapping!==Pe||Rt.morphTargetsCount!==re)&&(ne=!0):(ne=!0,Rt.__version=Z.version);let Vt=Rt.currentProgram;ne===!0&&(Vt=Hn(Z,H,$));let ze=!1,We=!1,mn=!1,_e=Vt.getUniforms(),gn=Rt.uniforms;if(_t.useProgram(Vt.program)&&(ze=!0,We=!0,mn=!0),Z.id!==M&&(M=Z.id,We=!0),ze||w!==T){_t.buffers.depth.getReversed()?(K.copy(T.projectionMatrix),mp(K),gp(K),_e.setValue(U,"projectionMatrix",K)):_e.setValue(U,"projectionMatrix",T.projectionMatrix),_e.setValue(U,"viewMatrix",T.matrixWorldInverse);let _i=_e.map.cameraPosition;_i!==void 0&&_i.setValue(U,yt.setFromMatrixPosition(T.matrixWorld)),Lt.logarithmicDepthBuffer&&_e.setValue(U,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&_e.setValue(U,"isOrthographic",T.isOrthographicCamera===!0),w!==T&&(w=T,We=!0,mn=!0)}if($.isSkinnedMesh){_e.setOptional(U,$,"bindMatrix"),_e.setOptional(U,$,"bindMatrixInverse");let zn=$.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),_e.setValue(U,"boneTexture",zn.boneTexture,D))}$.isBatchedMesh&&(_e.setOptional(U,$,"batchingTexture"),_e.setValue(U,"batchingTexture",$._matricesTexture,D),_e.setOptional(U,$,"batchingIdTexture"),_e.setValue(U,"batchingIdTexture",$._indirectTexture,D),_e.setOptional(U,$,"batchingColorTexture"),$._colorsTexture!==null&&_e.setValue(U,"batchingColorTexture",$._colorsTexture,D));let pr=G.morphAttributes;if((pr.position!==void 0||pr.normal!==void 0||pr.color!==void 0)&&ee.update($,G,Vt),(We||Rt.receiveShadow!==$.receiveShadow)&&(Rt.receiveShadow=$.receiveShadow,_e.setValue(U,"receiveShadow",$.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(gn.envMap.value=Ut,gn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&H.environment!==null&&(gn.envMapIntensity.value=H.environmentIntensity),We&&(_e.setValue(U,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&Bt(gn,mn),vt&&Z.fog===!0&&Mt.refreshFogUniforms(gn,vt),Mt.refreshMaterialUniforms(gn,Z,O,J,f.state.transmissionRenderTarget[T.id]),Fs.upload(U,fr(Rt),gn,D)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Fs.upload(U,fr(Rt),gn,D),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&_e.setValue(U,"center",$.center),_e.setValue(U,"modelViewMatrix",$.modelViewMatrix),_e.setValue(U,"normalMatrix",$.normalMatrix),_e.setValue(U,"modelMatrix",$.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){let zn=Z.uniformsGroups;for(let _i=0,wi=zn.length;_i<wi;_i++){let Zh=zn[_i];X.update(Zh,Vt),X.bind(Zh,Vt)}}return Vt}function Bt(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function Kt(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,H,G){zt.get(T.texture).__webglTexture=H,zt.get(T.depthTexture).__webglTexture=G;let Z=zt.get(T);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=G===void 0,Z.__autoAllocateDepthBuffer||gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){let G=zt.get(T);G.__webglFramebuffer=H,G.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,G=0){C=T,E=H,b=G;let Z=!0,$=null,vt=!1,Et=!1;if(T){let Ut=zt.get(T);if(Ut.__useDefaultFramebuffer!==void 0)_t.bindFramebuffer(U.FRAMEBUFFER,null),Z=!1;else if(Ut.__webglFramebuffer===void 0)D.setupRenderTarget(T);else if(Ut.__hasExternalTextures)D.rebindTextures(T,zt.get(T.texture).__webglTexture,zt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Wt=T.depthTexture;if(Ut.__boundDepthTexture!==Wt){if(Wt!==null&&zt.has(Wt)&&(T.width!==Wt.image.width||T.height!==Wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(T)}}let Zt=T.texture;(Zt.isData3DTexture||Zt.isDataArrayTexture||Zt.isCompressedArrayTexture)&&(Et=!0);let se=zt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(se[H])?$=se[H][G]:$=se[H],vt=!0):T.samples>0&&D.useMultisampledRTT(T)===!1?$=zt.get(T).__webglMultisampledFramebuffer:Array.isArray(se)?$=se[G]:$=se,A.copy(T.viewport),z.copy(T.scissor),L=T.scissorTest}else A.copy(it).multiplyScalar(O).floor(),z.copy(ut).multiplyScalar(O).floor(),L=xt;if(_t.bindFramebuffer(U.FRAMEBUFFER,$)&&Z&&_t.drawBuffers(T,$),_t.viewport(A),_t.scissor(z),_t.setScissorTest(L),vt){let Ut=zt.get(T.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+H,Ut.__webglTexture,G)}else if(Et){let Ut=zt.get(T.texture),Zt=H||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Ut.__webglTexture,G||0,Zt)}M=-1},this.readRenderTargetPixels=function(T,H,G,Z,$,vt,Et){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Gt=Gt[Et]),Gt){_t.bindFramebuffer(U.FRAMEBUFFER,Gt);try{let Ut=T.texture,Zt=Ut.format,se=Ut.type;if(!Lt.textureFormatReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Z&&G>=0&&G<=T.height-$&&U.readPixels(H,G,Z,$,Qt.convert(Zt),Qt.convert(se),vt)}finally{let Ut=C!==null?zt.get(C).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,Ut)}}},this.readRenderTargetPixelsAsync=async function(T,H,G,Z,$,vt,Et){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=zt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Et!==void 0&&(Gt=Gt[Et]),Gt){let Ut=T.texture,Zt=Ut.format,se=Ut.type;if(!Lt.textureFormatReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(H>=0&&H<=T.width-Z&&G>=0&&G<=T.height-$){_t.bindFramebuffer(U.FRAMEBUFFER,Gt);let Wt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Wt),U.bufferData(U.PIXEL_PACK_BUFFER,vt.byteLength,U.STREAM_READ),U.readPixels(H,G,Z,$,Qt.convert(Zt),Qt.convert(se),0);let ue=C!==null?zt.get(C).__webglFramebuffer:null;_t.bindFramebuffer(U.FRAMEBUFFER,ue);let Te=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await pp(U,Te,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Wt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,vt),U.deleteBuffer(Wt),U.deleteSync(Te),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,H=null,G=0){T.isTexture!==!0&&(Tr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),H=arguments[0]||null,T=arguments[1]);let Z=Math.pow(2,-G),$=Math.floor(T.image.width*Z),vt=Math.floor(T.image.height*Z),Et=H!==null?H.x:0,Gt=H!==null?H.y:0;D.setTexture2D(T,0),U.copyTexSubImage2D(U.TEXTURE_2D,G,0,0,Et,Gt,$,vt),_t.unbindTexture()},this.copyTextureToTexture=function(T,H,G=null,Z=null,$=0){T.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,T=arguments[1],H=arguments[2],$=arguments[3]||0,G=null);let vt,Et,Gt,Ut,Zt,se,Wt,ue,Te,Pe=T.isCompressedTexture?T.mipmaps[$]:T.image;G!==null?(vt=G.max.x-G.min.x,Et=G.max.y-G.min.y,Gt=G.isBox3?G.max.z-G.min.z:1,Ut=G.min.x,Zt=G.min.y,se=G.isBox3?G.min.z:0):(vt=Pe.width,Et=Pe.height,Gt=Pe.depth||1,Ut=0,Zt=0,se=0),Z!==null?(Wt=Z.x,ue=Z.y,Te=Z.z):(Wt=0,ue=0,Te=0);let qt=Qt.convert(H.format),re=Qt.convert(H.type),Rt;H.isData3DTexture?(D.setTexture3D(H,0),Rt=U.TEXTURE_3D):H.isDataArrayTexture||H.isCompressedArrayTexture?(D.setTexture2DArray(H,0),Rt=U.TEXTURE_2D_ARRAY):(D.setTexture2D(H,0),Rt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,H.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,H.unpackAlignment);let sn=U.getParameter(U.UNPACK_ROW_LENGTH),ne=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Vt=U.getParameter(U.UNPACK_SKIP_PIXELS),ze=U.getParameter(U.UNPACK_SKIP_ROWS),We=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Pe.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Pe.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ut),U.pixelStorei(U.UNPACK_SKIP_ROWS,Zt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,se);let mn=T.isDataArrayTexture||T.isData3DTexture,_e=H.isDataArrayTexture||H.isData3DTexture;if(T.isRenderTargetTexture||T.isDepthTexture){let gn=zt.get(T),pr=zt.get(H),zn=zt.get(gn.__renderTarget),_i=zt.get(pr.__renderTarget);_t.bindFramebuffer(U.READ_FRAMEBUFFER,zn.__webglFramebuffer),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,_i.__webglFramebuffer);for(let wi=0;wi<Gt;wi++)mn&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.get(T).__webglTexture,$,se+wi),T.isDepthTexture?(_e&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,zt.get(H).__webglTexture,$,Te+wi),U.blitFramebuffer(Ut,Zt,vt,Et,Wt,ue,vt,Et,U.DEPTH_BUFFER_BIT,U.NEAREST)):_e?U.copyTexSubImage3D(Rt,$,Wt,ue,Te+wi,Ut,Zt,vt,Et):U.copyTexSubImage2D(Rt,$,Wt,ue,Te+wi,Ut,Zt,vt,Et);_t.bindFramebuffer(U.READ_FRAMEBUFFER,null),_t.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else _e?T.isDataTexture||T.isData3DTexture?U.texSubImage3D(Rt,$,Wt,ue,Te,vt,Et,Gt,qt,re,Pe.data):H.isCompressedArrayTexture?U.compressedTexSubImage3D(Rt,$,Wt,ue,Te,vt,Et,Gt,qt,Pe.data):U.texSubImage3D(Rt,$,Wt,ue,Te,vt,Et,Gt,qt,re,Pe):T.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,$,Wt,ue,vt,Et,qt,re,Pe.data):T.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,$,Wt,ue,Pe.width,Pe.height,qt,Pe.data):U.texSubImage2D(U.TEXTURE_2D,$,Wt,ue,vt,Et,qt,re,Pe);U.pixelStorei(U.UNPACK_ROW_LENGTH,sn),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Vt),U.pixelStorei(U.UNPACK_SKIP_ROWS,ze),U.pixelStorei(U.UNPACK_SKIP_IMAGES,We),$===0&&H.generateMipmaps&&U.generateMipmap(Rt),_t.unbindTexture()},this.copyTextureToTexture3D=function(T,H,G=null,Z=null,$=0){return T.isTexture!==!0&&(Tr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,Z=arguments[1]||null,T=arguments[2],H=arguments[3],$=arguments[4]||0),Tr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(T,H,G,Z,$)},this.initRenderTarget=function(T){zt.get(T).__webglFramebuffer===void 0&&D.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?D.setTextureCube(T,0):T.isData3DTexture?D.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?D.setTexture2DArray(T,0):D.setTexture2D(T,0),_t.unbindTexture()},this.resetState=function(){E=0,b=0,C=null,_t.reset(),pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=me._getDrawingBufferColorSpace(t),e.unpackColorSpace=me._getUnpackColorSpace()}};var qo=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},rs=class extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new en,this.environmentIntensity=1,this.environmentRotation=new en,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Yo=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Tc,this.updateRanges=[],this.version=0,this.uuid=ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new I,Ur=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyMatrix4(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.applyNormalMatrix(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)xn.fromBufferAttribute(this,e),xn.transformDirection(t),this.setXYZ(e,xn.x,xn.y,xn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Vn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Vn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Vn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Vn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Vn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new ge(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},un=class extends $n{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ps,yr=new I,Is=new I,zs=new I,Ls=new tt,Mr=new tt,Dd=new jt,_o=new I,_r=new I,wo=new I,Zu=new tt,Dl=new tt,Ju=new tt,yn=class extends Fe{constructor(t=new un){if(super(),this.isSprite=!0,this.type="Sprite",Ps===void 0){Ps=new oe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Yo(e,5);Ps.setIndex([0,1,2,0,2,3]),Ps.setAttribute("position",new Ur(n,3,0,!1)),Ps.setAttribute("uv",new Ur(n,2,3,!1))}this.geometry=Ps,this.material=t,this.center=new tt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Is.setFromMatrixScale(this.matrixWorld),Dd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),zs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Is.multiplyScalar(-zs.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;bo(_o.set(-.5,-.5,0),zs,o,Is,i,s),bo(_r.set(.5,-.5,0),zs,o,Is,i,s),bo(wo.set(.5,.5,0),zs,o,Is,i,s),Zu.set(0,0),Dl.set(1,0),Ju.set(1,1);let a=t.ray.intersectTriangle(_o,_r,wo,!1,yr);if(a===null&&(bo(_r.set(-.5,.5,0),zs,o,Is,i,s),Dl.set(0,1),a=t.ray.intersectTriangle(_o,wo,_r,!1,yr),a===null))return;let l=t.ray.origin.distanceTo(yr);l<t.near||l>t.far||e.push({distance:l,point:yr.clone(),uv:Pi.getInterpolation(yr,_o,_r,wo,Zu,Dl,Ju,new tt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function bo(r,t,e,n,i,s){Ls.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Mr.x=s*Ls.x-i*Ls.y,Mr.y=i*Ls.x+s*Ls.y):Mr.copy(Ls),r.copy(t),r.x+=Mr.x,r.y+=Mr.y,r.applyMatrix4(Dd)}var os=class extends bn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=hn,h=hn,u,p){super(null,o,a,l,c,h,i,s,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Nr=class extends ge{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ds=new jt,ju=new jt,Eo=[],Ku=new mi,cv=new jt,wr=new q,br=new gi,Se=class extends q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Nr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,cv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),Ku.copy(t.boundingBox).applyMatrix4(Ds),this.boundingBox.union(Ku)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new gi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ds),br.copy(t.boundingSphere).applyMatrix4(Ds),this.boundingSphere.union(br)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(wr.geometry=this.geometry,wr.material=this.material,wr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),br.copy(this.boundingSphere),br.applyMatrix4(n),t.ray.intersectsSphere(br)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ds),ju.multiplyMatrices(n,Ds),wr.matrixWorld=ju,wr.raycast(t,Eo);for(let o=0,a=Eo.length;o<a;o++){let l=Eo[o];l.instanceId=s,l.object=this,e.push(l)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Nr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new os(new Float32Array(i*this.count),i,this.count,_h,Qn));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var Br=class extends $n{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Zo=new I,Jo=new I,Qu=new jt,Er=new Dr,So=new gi,kl=new I,td=new I,Vc=class extends Fe{constructor(t=new oe,e=new Br){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Zo.fromBufferAttribute(e,i-1),Jo.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Zo.distanceTo(Jo);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),So.copy(n.boundingSphere),So.applyMatrix4(i),So.radius+=s,t.ray.intersectsSphere(So)===!1)return;Qu.copy(i).invert(),Er.copy(t.ray).applyMatrix4(Qu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let m=d,x=g-1;m<x;m+=c){let f=h.getX(m),y=h.getX(m+1),_=To(this,t,Er,l,f,y);_&&e.push(_)}if(this.isLineLoop){let m=h.getX(g-1),x=h.getX(d),f=To(this,t,Er,l,m,x);f&&e.push(f)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let m=d,x=g-1;m<x;m+=c){let f=To(this,t,Er,l,m,m+1);f&&e.push(f)}if(this.isLineLoop){let m=To(this,t,Er,l,g-1,d);m&&e.push(m)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function To(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(Zo.fromBufferAttribute(o,i),Jo.fromBufferAttribute(o,s),e.distanceSqToSegment(Zo,Jo,kl,td)>n)return;kl.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(kl);if(!(l<t.near||l>t.far))return{distance:l,point:td.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var ed=new I,nd=new I,js=class extends Vc{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)ed.fromBufferAttribute(e,i),nd.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ed.distanceTo(nd);t.setAttribute("lineDistance",new Xt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var as=class extends $n{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},id=new jt,Wc=new Dr,Ro=new gi,Ao=new I,xi=class extends Fe{constructor(t=new oe,e=new as){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ro.copy(n.boundingSphere),Ro.applyMatrix4(i),Ro.radius+=s,t.ray.intersectsSphere(Ro)===!1)return;id.copy(i).invert(),Wc.copy(t.ray).applyMatrix4(id);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let p=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=p,m=d;g<m;g++){let x=c.getX(g);Ao.fromBufferAttribute(u,x),sd(Ao,x,l,i,t,e,this)}}else{let p=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=p,m=d;g<m;g++)Ao.fromBufferAttribute(u,g),sd(Ao,g,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function sd(r,t,e,n,i,s,o){let a=Wc.distanceSqToPoint(r);if(a<e){let l=new I;Wc.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var be=class extends bn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},kn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],p=n[i+1]-h,d=(o-h)/p;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new tt:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new I,i=[],s=[],o=[],a=new I,l=new jt;for(let d=0;d<=t;d++){let g=d/t;i[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),p=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ye(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ye(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Hr=class extends kn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new tt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=l-this.aX,d=c-this.aY;l=p*h-d*u+this.aX,c=p*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Xc=class extends Hr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ah(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let p=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;p*=h,d*=h,i(o,a,p,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Co=new I,Ul=new Ah,Nl=new Ah,Bl=new Ah,Fr=class extends kn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new I){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Co.subVectors(i[0],i[1]).add(i[0]),c=Co);let u=i[a%s],p=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Co.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Co),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),m=Math.pow(u.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(h),d);m<1e-4&&(m=1),g<1e-4&&(g=m),x<1e-4&&(x=m),Ul.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,g,m,x),Nl.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,g,m,x),Bl.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,g,m,x)}else this.curveType==="catmullrom"&&(Ul.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Nl.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Bl.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Ul.calc(l),Nl.calc(l),Bl.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new I().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function rd(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function hv(r,t){let e=1-r;return e*e*t}function uv(r,t){return 2*(1-r)*r*t}function dv(r,t){return r*r*t}function Ir(r,t,e,n){return hv(r,t)+uv(r,e)+dv(r,n)}function fv(r,t){let e=1-r;return e*e*e*t}function pv(r,t){let e=1-r;return 3*e*e*r*t}function mv(r,t){return 3*(1-r)*r*r*t}function gv(r,t){return r*r*r*t}function zr(r,t,e,n,i){return fv(r,t)+pv(r,e)+mv(r,n)+gv(r,i)}var jo=class extends kn{constructor(t=new tt,e=new tt,n=new tt,i=new tt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,i.x,s.x,o.x,a.x),zr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},$c=class extends kn{constructor(t=new I,e=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(zr(t,i.x,s.x,o.x,a.x),zr(t,i.y,s.y,o.y,a.y),zr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ko=class extends kn{constructor(t=new tt,e=new tt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new tt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new tt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},qc=class extends kn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Qo=class extends kn{constructor(t=new tt,e=new tt,n=new tt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new tt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ir(t,i.x,s.x,o.x),Ir(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ks=class extends kn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ir(t,i.x,s.x,o.x),Ir(t,i.y,s.y,o.y),Ir(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ta=class extends kn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new tt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(rd(a,l.x,c.x,h.x,u.x),rd(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new tt().fromArray(i))}return this}},ea=Object.freeze({__proto__:null,ArcCurve:Xc,CatmullRomCurve3:Fr,CubicBezierCurve:jo,CubicBezierCurve3:$c,EllipseCurve:Hr,LineCurve:Ko,LineCurve3:qc,QuadraticBezierCurve:Qo,QuadraticBezierCurve3:Ks,SplineCurve:ta}),Yc=class extends kn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ea[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new ea[i.type]().fromJSON(i))}return this}},na=class extends Yc{constructor(t){super(),this.type="Path",this.currentPoint=new tt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Ko(this.currentPoint.clone(),new tt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Qo(this.currentPoint.clone(),new tt(t,e),new tt(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new jo(this.currentPoint.clone(),new tt(t,e),new tt(n,i),new tt(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new ta(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Hr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ia=class r extends oe{constructor(t=[new tt(0,-.5),new tt(.5,0),new tt(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ye(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new I,p=new tt,d=new I,g=new I,m=new I,x=0,f=0;for(let y=0;y<=t.length-1;y++)switch(y){case 0:x=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-x,d.z=f*0,m.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(m.x,m.y,m.z);break;default:x=t[y+1].x-t[y].x,f=t[y+1].y-t[y].y,d.x=f*1,d.y=-x,d.z=f*0,g.copy(d),d.x+=m.x,d.y+=m.y,d.z+=m.z,d.normalize(),l.push(d.x,d.y,d.z),m.copy(g)}for(let y=0;y<=e;y++){let _=n+y*h*i,v=Math.sin(_),R=Math.cos(_);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*v,u.y=t[E].y,u.z=t[E].x*R,o.push(u.x,u.y,u.z),p.x=y/e,p.y=E/(t.length-1),a.push(p.x,p.y);let b=l[3*E+0]*v,C=l[3*E+1],M=l[3*E+0]*R;c.push(b,C,M)}}for(let y=0;y<e;y++)for(let _=0;_<t.length-1;_++){let v=_+y*t.length,R=v,E=v+t.length,b=v+t.length+1,C=v+1;s.push(R,E,C),s.push(b,C,E)}this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("uv",new Xt(a,2)),this.setAttribute("normal",new Xt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var Ni=class r extends oe{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new I,h=new tt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Xt(o,3)),this.setAttribute("normal",new Xt(a,3)),this.setAttribute("uv",new Xt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Nt=class r extends oe{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],p=[],d=[],g=0,m=[],x=n/2,f=0;y(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(d,2));function y(){let v=new I,R=new I,E=0,b=(e-t)/n;for(let C=0;C<=s;C++){let M=[],w=C/s,A=w*(e-t)+t;for(let z=0;z<=i;z++){let L=z/i,N=L*l+a,F=Math.sin(N),B=Math.cos(N);R.x=A*F,R.y=-w*n+x,R.z=A*B,u.push(R.x,R.y,R.z),v.set(F,b,B).normalize(),p.push(v.x,v.y,v.z),d.push(L,1-w),M.push(g++)}m.push(M)}for(let C=0;C<i;C++)for(let M=0;M<s;M++){let w=m[M][C],A=m[M+1][C],z=m[M+1][C+1],L=m[M][C+1];(t>0||M!==0)&&(h.push(w,A,L),E+=3),(e>0||M!==s-1)&&(h.push(A,z,L),E+=3)}c.addGroup(f,E,0),f+=E}function _(v){let R=g,E=new tt,b=new I,C=0,M=v===!0?t:e,w=v===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,x*w,0),p.push(0,w,0),d.push(.5,.5),g++;let A=g;for(let z=0;z<=i;z++){let N=z/i*l+a,F=Math.cos(N),B=Math.sin(N);b.x=M*B,b.y=x*w,b.z=M*F,u.push(b.x,b.y,b.z),p.push(0,w,0),E.x=F*.5+.5,E.y=B*.5*w+.5,d.push(E.x,E.y),g++}for(let z=0;z<i;z++){let L=R+z,N=A+z;v===!0?h.push(N,N+1,L):h.push(N+1,N,L),C+=3}c.addGroup(f,C,v===!0?1:2),f+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Un=class r extends Nt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var qn=class extends na{constructor(t){super(t),this.uuid=ti(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new na().fromJSON(i))}return this}},xv={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=kd(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,p,d;if(n&&(s=wv(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let g=e;g<i;g+=e)u=r[g],p=r[g+1],u<a&&(a=u),p<l&&(l=p),u>c&&(c=u),p>h&&(h=p);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return Or(s,o,e,a,l,d,0),o}};function kd(r,t,e,n,i){let s,o;if(i===Lv(r,t,e,n)>0)for(s=t;s<e;s+=n)o=od(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=od(s,r[s],r[s+1],o);return o&&ma(o,o.next)&&(Vr(o),o=o.next),o}function ls(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(ma(e,e.next)||Ne(e.prev,e,e.next)===0)){if(Vr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Or(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Rv(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?yv(r,n,i,s):vv(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Vr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Mv(ls(r),t,e),Or(r,t,e,n,i,s,2)):o===2&&_v(r,t,e,n,i,s):Or(ls(r),t,e,n,i,s,1);break}}}function vv(r){let t=r.prev,e=r,n=r.next;if(Ne(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,p=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=p&&g.y>=u&&g.y<=d&&Us(i,a,s,l,o,c,g.x,g.y)&&Ne(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function yv(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Ne(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,p=o.y,d=a<l?a<c?a:c:l<c?l:c,g=h<u?h<p?h:p:u<p?u:p,m=a>l?a>c?a:c:l>c?l:c,x=h>u?h>p?h:p:u>p?u:p,f=Zc(d,g,t,e,n),y=Zc(m,x,t,e,n),_=r.prevZ,v=r.nextZ;for(;_&&_.z>=f&&v&&v.z<=y;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==i&&_!==o&&Us(a,h,l,u,c,p,_.x,_.y)&&Ne(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Us(a,h,l,u,c,p,v.x,v.y)&&Ne(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=f;){if(_.x>=d&&_.x<=m&&_.y>=g&&_.y<=x&&_!==i&&_!==o&&Us(a,h,l,u,c,p,_.x,_.y)&&Ne(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=m&&v.y>=g&&v.y<=x&&v!==i&&v!==o&&Us(a,h,l,u,c,p,v.x,v.y)&&Ne(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Mv(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!ma(i,s)&&Ud(i,n,n.next,s)&&Gr(i,s)&&Gr(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Vr(n),Vr(n.next),n=r=s),n=n.next}while(n!==r);return ls(n)}function _v(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Pv(o,a)){let l=Nd(o,a);o=ls(o,o.next),l=ls(l,l.next),Or(o,t,e,n,i,s,0),Or(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function wv(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=kd(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Cv(c));for(i.sort(bv),s=0;s<i.length;s++)e=Ev(i[s],e);return e}function bv(r,t){return r.x-t.x}function Ev(r,t){let e=Sv(r,t);if(!e)return t;let n=Nd(e,r);return ls(n,n.next),ls(e,e.next)}function Sv(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=s&&p>n&&(n=p,i=e.x<e.next.x?e:e.next,p===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&Us(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Gr(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&Tv(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function Tv(r,t){return Ne(r.prev,r,t.prev)<0&&Ne(t.next,r,r.next)<0}function Rv(r,t,e,n){let i=r;do i.z===0&&(i.z=Zc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Av(i)}function Av(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function Zc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Cv(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function Us(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Pv(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Iv(r,t)&&(Gr(r,t)&&Gr(t,r)&&zv(r,t)&&(Ne(r.prev,r,t.prev)||Ne(r,t.prev,t))||ma(r,t)&&Ne(r.prev,r,r.next)>0&&Ne(t.prev,t,t.next)>0)}function Ne(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function ma(r,t){return r.x===t.x&&r.y===t.y}function Ud(r,t,e,n){let i=Io(Ne(r,t,e)),s=Io(Ne(r,t,n)),o=Io(Ne(e,n,r)),a=Io(Ne(e,n,t));return!!(i!==s&&o!==a||i===0&&Po(r,e,t)||s===0&&Po(r,n,t)||o===0&&Po(e,r,n)||a===0&&Po(e,t,n))}function Po(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function Io(r){return r>0?1:r<0?-1:0}function Iv(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Ud(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Gr(r,t){return Ne(r.prev,r,r.next)<0?Ne(r,t,r.next)>=0&&Ne(r,r.prev,t)>=0:Ne(r,t,r.prev)<0||Ne(r,r.next,t)<0}function zv(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function Nd(r,t){let e=new Jc(r.i,r.x,r.y),n=new Jc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function od(r,t,e,n){let i=new Jc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Vr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Jc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Lv(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var zi=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];ad(t),ld(n,t);let o=t.length;e.forEach(ad);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,ld(n,e[l]);let a=xv.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function ad(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ld(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var ei=class r extends oe{constructor(t=new qn([new tt(.5,.5),new tt(-.5,.5),new tt(-.5,-.5),new tt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Xt(i,3)),this.setAttribute("uv",new Xt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,m=e.bevelOffset!==void 0?e.bevelOffset:0,x=e.bevelSegments!==void 0?e.bevelSegments:3,f=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Dv,_,v=!1,R,E,b,C;f&&(_=f.getSpacedPoints(h),v=!0,p=!1,R=f.computeFrenetFrames(h,!1),E=new I,b=new I,C=new I),p||(x=0,d=0,g=0,m=0);let M=a.extractPoints(c),w=M.shape,A=M.holes;if(!zi.isClockWise(w)){w=w.reverse();for(let ot=0,dt=A.length;ot<dt;ot++){let U=A[ot];zi.isClockWise(U)&&(A[ot]=U.reverse())}}let L=zi.triangulateShape(w,A),N=w;for(let ot=0,dt=A.length;ot<dt;ot++){let U=A[ot];w=w.concat(U)}function F(ot,dt,U){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),ot.clone().addScaledVector(dt,U)}let B=w.length,J=L.length;function O(ot,dt,U){let Ft,gt,Lt,_t=ot.x-dt.x,Jt=ot.y-dt.y,zt=U.x-ot.x,D=U.y-ot.y,P=_t*_t+Jt*Jt,Q=_t*D-Jt*zt;if(Math.abs(Q)>Number.EPSILON){let st=Math.sqrt(P),ht=Math.sqrt(zt*zt+D*D),rt=dt.x-Jt/st,Ht=dt.y+_t/st,Mt=U.x-D/ht,bt=U.y+zt/ht,te=((Mt-rt)*D-(bt-Ht)*zt)/(_t*D-Jt*zt);Ft=rt+_t*te-ot.x,gt=Ht+Jt*te-ot.y;let ft=Ft*Ft+gt*gt;if(ft<=2)return new tt(Ft,gt);Lt=Math.sqrt(ft/2)}else{let st=!1;_t>Number.EPSILON?zt>Number.EPSILON&&(st=!0):_t<-Number.EPSILON?zt<-Number.EPSILON&&(st=!0):Math.sign(Jt)===Math.sign(D)&&(st=!0),st?(Ft=-Jt,gt=_t,Lt=Math.sqrt(P)):(Ft=_t,gt=Jt,Lt=Math.sqrt(P/2))}return new tt(Ft/Lt,gt/Lt)}let V=[];for(let ot=0,dt=N.length,U=dt-1,Ft=ot+1;ot<dt;ot++,U++,Ft++)U===dt&&(U=0),Ft===dt&&(Ft=0),V[ot]=O(N[ot],N[U],N[Ft]);let j=[],it,ut=V.concat();for(let ot=0,dt=A.length;ot<dt;ot++){let U=A[ot];it=[];for(let Ft=0,gt=U.length,Lt=gt-1,_t=Ft+1;Ft<gt;Ft++,Lt++,_t++)Lt===gt&&(Lt=0),_t===gt&&(_t=0),it[Ft]=O(U[Ft],U[Lt],U[_t]);j.push(it),ut=ut.concat(it)}for(let ot=0;ot<x;ot++){let dt=ot/x,U=d*Math.cos(dt*Math.PI/2),Ft=g*Math.sin(dt*Math.PI/2)+m;for(let gt=0,Lt=N.length;gt<Lt;gt++){let _t=F(N[gt],V[gt],Ft);K(_t.x,_t.y,-U)}for(let gt=0,Lt=A.length;gt<Lt;gt++){let _t=A[gt];it=j[gt];for(let Jt=0,zt=_t.length;Jt<zt;Jt++){let D=F(_t[Jt],it[Jt],Ft);K(D.x,D.y,-U)}}}let xt=g+m;for(let ot=0;ot<B;ot++){let dt=p?F(w[ot],ut[ot],xt):w[ot];v?(b.copy(R.normals[0]).multiplyScalar(dt.x),E.copy(R.binormals[0]).multiplyScalar(dt.y),C.copy(_[0]).add(b).add(E),K(C.x,C.y,C.z)):K(dt.x,dt.y,0)}for(let ot=1;ot<=h;ot++)for(let dt=0;dt<B;dt++){let U=p?F(w[dt],ut[dt],xt):w[dt];v?(b.copy(R.normals[ot]).multiplyScalar(U.x),E.copy(R.binormals[ot]).multiplyScalar(U.y),C.copy(_[ot]).add(b).add(E),K(C.x,C.y,C.z)):K(U.x,U.y,u/h*ot)}for(let ot=x-1;ot>=0;ot--){let dt=ot/x,U=d*Math.cos(dt*Math.PI/2),Ft=g*Math.sin(dt*Math.PI/2)+m;for(let gt=0,Lt=N.length;gt<Lt;gt++){let _t=F(N[gt],V[gt],Ft);K(_t.x,_t.y,u+U)}for(let gt=0,Lt=A.length;gt<Lt;gt++){let _t=A[gt];it=j[gt];for(let Jt=0,zt=_t.length;Jt<zt;Jt++){let D=F(_t[Jt],it[Jt],Ft);v?K(D.x,D.y+_[h-1].y,_[h-1].x+U):K(D.x,D.y,u+U)}}}S(),Y();function S(){let ot=i.length/3;if(p){let dt=0,U=B*dt;for(let Ft=0;Ft<J;Ft++){let gt=L[Ft];mt(gt[2]+U,gt[1]+U,gt[0]+U)}dt=h+x*2,U=B*dt;for(let Ft=0;Ft<J;Ft++){let gt=L[Ft];mt(gt[0]+U,gt[1]+U,gt[2]+U)}}else{for(let dt=0;dt<J;dt++){let U=L[dt];mt(U[2],U[1],U[0])}for(let dt=0;dt<J;dt++){let U=L[dt];mt(U[0]+B*h,U[1]+B*h,U[2]+B*h)}}n.addGroup(ot,i.length/3-ot,0)}function Y(){let ot=i.length/3,dt=0;nt(N,dt),dt+=N.length;for(let U=0,Ft=A.length;U<Ft;U++){let gt=A[U];nt(gt,dt),dt+=gt.length}n.addGroup(ot,i.length/3-ot,1)}function nt(ot,dt){let U=ot.length;for(;--U>=0;){let Ft=U,gt=U-1;gt<0&&(gt=ot.length-1);for(let Lt=0,_t=h+x*2;Lt<_t;Lt++){let Jt=B*Lt,zt=B*(Lt+1),D=dt+Ft+Jt,P=dt+gt+Jt,Q=dt+gt+zt,st=dt+Ft+zt;yt(D,P,Q,st)}}}function K(ot,dt,U){l.push(ot),l.push(dt),l.push(U)}function mt(ot,dt,U){At(ot),At(dt),At(U);let Ft=i.length/3,gt=y.generateTopUV(n,i,Ft-3,Ft-2,Ft-1);$t(gt[0]),$t(gt[1]),$t(gt[2])}function yt(ot,dt,U,Ft){At(ot),At(dt),At(Ft),At(dt),At(U),At(Ft);let gt=i.length/3,Lt=y.generateSideWallUV(n,i,gt-6,gt-3,gt-2,gt-1);$t(Lt[0]),$t(Lt[1]),$t(Lt[3]),$t(Lt[1]),$t(Lt[2]),$t(Lt[3])}function At(ot){i.push(l[ot*3+0]),i.push(l[ot*3+1]),i.push(l[ot*3+2])}function $t(ot){s.push(ot.x),s.push(ot.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return kv(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ea[i.type]().fromJSON(i)),new r(n,t.options)}},Dv={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new tt(s,o),new tt(a,l),new tt(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[i*3],d=t[i*3+1],g=t[i*3+2],m=t[s*3],x=t[s*3+1],f=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new tt(o,1-l),new tt(c,1-u),new tt(p,1-g),new tt(m,1-f)]:[new tt(a,1-l),new tt(h,1-u),new tt(d,1-g),new tt(x,1-f)]}};function kv(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Bi=class r extends oe{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,p=(e-t)/i,d=new I,g=new tt;for(let m=0;m<=i;m++){for(let x=0;x<=n;x++){let f=s+x/n*o;d.x=u*Math.cos(f),d.y=u*Math.sin(f),l.push(d.x,d.y,d.z),c.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=p}for(let m=0;m<i;m++){let x=m*(n+1);for(let f=0;f<n;f++){let y=f+x,_=y,v=y+n+1,R=y+n+2,E=y+1;a.push(_,v,E),a.push(v,R,E)}}this.setIndex(a),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(c,3)),this.setAttribute("uv",new Xt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ye=class r extends oe{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,p=new I,d=[],g=[],m=[],x=[];for(let f=0;f<=n;f++){let y=[],_=f/n,v=0;f===0&&o===0?v=.5/e:f===n&&l===Math.PI&&(v=-.5/e);for(let R=0;R<=e;R++){let E=R/e;u.x=-t*Math.cos(i+E*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+E*s)*Math.sin(o+_*a),g.push(u.x,u.y,u.z),p.copy(u).normalize(),m.push(p.x,p.y,p.z),x.push(E+v,1-_),y.push(c++)}h.push(y)}for(let f=0;f<n;f++)for(let y=0;y<e;y++){let _=h[f][y+1],v=h[f][y],R=h[f+1][y],E=h[f+1][y+1];(f!==0||o>0)&&d.push(_,v,E),(f!==n-1||l<Math.PI)&&d.push(v,R,E)}this.setIndex(d),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(m,3)),this.setAttribute("uv",new Xt(x,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Yn=class r extends oe{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,p=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let m=g/i*s,x=d/n*Math.PI*2;u.x=(t+e*Math.cos(x))*Math.cos(m),u.y=(t+e*Math.cos(x))*Math.sin(m),u.z=e*Math.sin(x),a.push(u.x,u.y,u.z),h.x=t*Math.cos(m),h.y=t*Math.sin(m),p.subVectors(u,h).normalize(),l.push(p.x,p.y,p.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let m=(i+1)*d+g-1,x=(i+1)*(d-1)+g-1,f=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(m,x,y),o.push(x,f,y)}this.setIndex(o),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var sa=class r extends oe{constructor(t=new Ks(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new tt,h=new I,u=[],p=[],d=[],g=[];m(),this.setIndex(g),this.setAttribute("position",new Xt(u,3)),this.setAttribute("normal",new Xt(p,3)),this.setAttribute("uv",new Xt(d,2));function m(){for(let _=0;_<e;_++)x(_);x(s===!1?e:0),y(),f()}function x(_){h=t.getPointAt(_/e,h);let v=o.normals[_],R=o.binormals[_];for(let E=0;E<=i;E++){let b=E/i*Math.PI*2,C=Math.sin(b),M=-Math.cos(b);l.x=M*v.x+C*R.x,l.y=M*v.y+C*R.y,l.z=M*v.z+C*R.z,l.normalize(),p.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function f(){for(let _=1;_<=e;_++)for(let v=1;v<=i;v++){let R=(i+1)*(_-1)+(v-1),E=(i+1)*_+(v-1),b=(i+1)*_+v,C=(i+1)*(_-1)+v;g.push(R,E,C),g.push(E,b,C)}}function y(){for(let _=0;_<=e;_++)for(let v=0;v<=i;v++)c.x=_/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new ea[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var ra=class extends de{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},lt=class extends $n{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new en,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hi=class extends lt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new tt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var oa=class extends $n{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sh,this.normalScale=new tt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}};function zo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Uv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Qs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},jc=class extends Qs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qh,endingEnd:Qh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case tu:s=t,a=2*e-n;break;case eu:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tu:o=t,l=2*n-e;break;case eu:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-e)/(i-e),m=g*g,x=m*g,f=-p*x+2*p*m-p*g,y=(1+p)*x+(-1.5-2*p)*m+(-.5+p)*g+1,_=(-1-d)*x+(1.5+d)*m+.5*g,v=d*x-d*m;for(let R=0;R!==a;++R)s[R]=f*o[h+R]+y*o[c+R]+_*o[l+R]+v*o[u+R];return s}},Kc=class extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let p=0;p!==a;++p)s[p]=o[c+p]*u+o[l+p]*h;return s}},Qc=class extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Zn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=zo(e,this.TimeBufferType),this.values=zo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:zo(t.times,Array),values:zo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Qc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Kc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new jc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Bo:e=this.InterpolantFactoryMethodDiscrete;break;case Sc:e=this.InterpolantFactoryMethodLinear;break;case al:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Sc;case this.InterpolantFactoryMethodSmooth:return al}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Uv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===al,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,p=u-n,d=u+n;for(let g=0;g!==n;++g){let m=e[u+g];if(m!==e[p+g]||m!==e[d+g]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,p=o*n;for(let d=0;d!==n;++d)e[p+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Sc;var cs=class extends Zn{constructor(t,e,n){super(t,e,n)}};cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=Bo;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;var th=class extends Zn{};th.prototype.ValueTypeName="color";var eh=class extends Zn{};eh.prototype.ValueTypeName="number";var nh=class extends Qs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)ke.slerpFlat(s,0,o,c-a,o,c,l);return s}},aa=class extends Zn{InterpolantFactoryMethodLinear(t){return new nh(this.times,this.values,this.getValueSize(),t)}};aa.prototype.ValueTypeName="quaternion";aa.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Zn{constructor(t,e,n){super(t,e,n)}};hs.prototype.ValueTypeName="string";hs.prototype.ValueBufferType=Array;hs.prototype.DefaultInterpolation=Bo;hs.prototype.InterpolantFactoryMethodLinear=void 0;hs.prototype.InterpolantFactoryMethodSmooth=void 0;var ih=class extends Zn{};ih.prototype.ValueTypeName="vector";var sh=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,p=c.length;u<p;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},Nv=new sh,rh=class{constructor(t){this.manager=t!==void 0?t:Nv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};rh.DEFAULT_MATERIAL_NAME="__DEFAULT";var tr=class extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},la=class extends tr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Hl=new jt,cd=new I,hd=new I,Wr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new tt(512,512),this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new kr,this._frameExtents=new tt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;cd.setFromMatrixPosition(t.matrixWorld),e.position.copy(cd),hd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(hd),e.updateMatrixWorld(),Hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},oh=class extends Wr{constructor(){super(new Ze(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Ws*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},er=class extends tr{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new oh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},ud=new jt,Sr=new I,Fl=new I,ah=class extends Wr{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new tt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(Sr),Fl.copy(n.position),Fl.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fl),n.updateMatrixWorld(),i.makeTranslation(-Sr.x,-Sr.y,-Sr.z),ud.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ud)}},vi=class extends tr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new ah}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},lh=class extends Wr{constructor(){super(new Ys(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ca=class extends tr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new lh}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var nr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=dd(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=dd();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function dd(){return performance.now()}var Ch="\\[\\]\\.:\\/",Bv=new RegExp("["+Ch+"]","g"),Ph="[^"+Ch+"]",Hv="[^"+Ch.replace("\\.","")+"]",Fv=/((?:WC+[\/:])*)/.source.replace("WC",Ph),Ov=/(WCOD+)?/.source.replace("WCOD",Hv),Gv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ph),Vv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ph),Wv=new RegExp("^"+Fv+Ov+Gv+Vv+"$"),Xv=["material","materials","bones","map"],ch=class{constructor(t,e,n){let i=n||Ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ue=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Bv,"")}static parseTrackName(t){let e=Wv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Xv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ue.Composite=ch;Ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ue.prototype.GetterByBindingType=[Ue.prototype._getValue_direct,Ue.prototype._getValue_array,Ue.prototype._getValue_arrayElement,Ue.prototype._getValue_toArray];Ue.prototype.SetterByBindingTypeAndVersioning=[[Ue.prototype._setValue_direct,Ue.prototype._setValue_direct_setNeedsUpdate,Ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_array,Ue.prototype._setValue_array_setNeedsUpdate,Ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_arrayElement,Ue.prototype._setValue_arrayElement_setNeedsUpdate,Ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ue.prototype._setValue_fromArray,Ue.prototype._setValue_fromArray_setNeedsUpdate,Ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var E1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);var zh=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function Ge(r,t){return r*1e5+t}var ga=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let l=0;l<a.length;l++){let c=a[l];e.set(c,(e.get(c)||0)+(l===0||l===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,l,c,h,u,p,d]=o,g=0;for(let m=1;m<p.length;m++)if(e.get(p[m])>1||m===p.length-1){let x=p.slice(g,m+1);x.length>=2&&this._addEdge(x,a,l,c,h,u,i),g=m}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let l=t.length,c=new Float32Array(l*2),h=new Float32Array(l),u=0;for(let d=0;d<l;d++)c[d*2]=this.P[t[d]*2],c[d*2+1]=this.P[t[d]*2+1],d>0&&(u+=Math.hypot(c[d*2]-c[d*2-2],c[d*2+1]-c[d*2-1])),h[d]=u;if(u<.5)return;let p={id:this.edges.length,ids:t,pts:c,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[l-1]),signals:[]};this.edges.push(p)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let l=t.cum,c=t.pts,h=0,u=l.length-1;for(;u-h>1;){let v=h+u>>1;l[v]<=a?h=v:u=v}let p=l[u]-l[h]||1e-6,d=(a-l[h])/p,g=c[h*2],m=c[h*2+1],x=c[u*2],f=c[u*2+1],y=(x-g)/p,_=(f-m)/p;return e&&(y=-y,_=-_),s.x=g+(x-g)*d-_*i,s.z=m+(f-m)*d+y*i,s.dx=y,s.dz=_,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,l=Math.min(i[s*2+1],i[s*2+3])-n.w/2,c=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(l/t);u<=Math.floor(c/t);u++){let p=Ge(h,u),d=e.get(p);d||e.set(p,d=[]),d.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),l=Math.floor(e/s),c=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let p=l-o;p<=l+o;p++){let d=this.roadGrid.get(Ge(u,p));if(d)for(let g=0;g<d.length;g+=2){let m=this.edges[d[g]],x=d[g+1];if(i&&!i(m))continue;let f=m.pts,y=f[x*2],_=f[x*2+1],v=f[x*2+2],R=f[x*2+3],E=v-y,b=R-_,C=E*E+b*b||1e-6,M=((t-y)*E+(e-_)*b)/C;M=M<0?0:M>1?1:M;let w=y+E*M,A=_+b*M,z=(t-w)**2+(e-A)**2;if(z<h){h=z;let L=Math.sqrt(C);c={e:m,i:x,t:M,x:w,z:A,dist:Math.sqrt(z),s:m.cum[x]+M*L,dx:E/L,dz:b/L}}}}return c&&(c.lat=(t-c.x)*-c.dz+(e-c.z)*c.dx),c}_indexChunks(t){let n=this.chunks=new Map,i=(a,l)=>{let c=Math.floor(a/400),h=Math.floor(l/400),u=Ge(c,h),p=n.get(u);return p||n.set(u,p={key:u,cx:c,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[],signs:[]}),p};this.globalAreas=[],this.buildings=t.buildings.map((a,l)=>{let c=a[3],h=c.length/2,u=new Float32Array(c.length),p=0,d=0,g=1e9,m=-1e9,x=1e9,f=-1e9,y=0,_=0;for(let R=0;R<h;R++)y+=c[R*2],_+=c[R*2+1],u[R*2]=y*.1,u[R*2+1]=_*.1;for(let R=0;R<h;R++){let E=u[R*2],b=u[R*2+1];p+=E,d+=b,E<g&&(g=E),E>m&&(m=E),b<x&&(x=b),b>f&&(f=b)}let v={i:l,kind:a[0],h:a[1],minH:a[2],pts:u,cx:p/h,cz:d/h,x0:g,x1:m,z0:x,z1:f,name:a[4]||null,colour:a[5]||null,roofColour:a[6]||null,roofShape:a[7]||null};return i(v.cx,v.cz).buildings.push(v),v});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let l=Math.floor(a.x0/s);l<=Math.floor(a.x1/s);l++)for(let c=Math.floor(a.z0/s);c<=Math.floor(a.z1/s);c++){let h=Ge(l,c),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let l=Math.floor(a.pts.length/4)*2;i(a.pts[l],a.pts[l+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let l=a[1],c=new Float32Array(l.length),h=0,u=0,p=1e9,d=-1e9,g=1e9,m=-1e9;for(let f=0;f<l.length;f++)c[f]=l[f]*.1;for(let f=0;f<l.length/2;f++){let y=c[f*2],_=c[f*2+1];h+=y,u+=_,y<p&&(p=y),y>d&&(d=y),_<g&&(g=_),_>m&&(m=_)}let x={type:a[0],pts:c,x0:p,x1:d,z0:g,z1:m};d-p>1500||m-g>1500?this.globalAreas.push(x):i(h/(l.length/2),u/(l.length/2)).areas.push(x)}this.areaList=t.areas;for(let a of t.lines){let[l,c,h]=a,u=h.length/2;for(let p=0;p<u-1;p+=23){let d=Math.min(u,p+24),g=new Float32Array((d-p)*2);for(let m=0;m<g.length;m++)g[m]=h[p*2+m]*.1;i(g[0],g[1]).lines.push({type:l,w:c,pts:g})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);for(let a of t.signs||[])i(a[0]*.1,a[1]*.1).signs.push({x:a[0]*.1,z:a[1]*.1,name:a[2],kind:a[3]});this.busStopList=t.busstops.map(a=>[a[0]*.1,a[1]*.1]),this.osmRoutes=(t.routes||[]).map(a=>({ref:a[0],name:a[1],type:a[2],pts:a[3].map(l=>l*.1),stops:a[4].map(l=>l*.1)})),this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(l=>l*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(l=>l*.1)})),this.stands=t.stands.map(a=>a.map(l=>l*.1)),this.jet=t.jet.map(a=>a.map(l=>l*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get(Ge(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&ar(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let l of t)e.set(l[0]+","+l[1],l);let n=this.raw,i=new Set;for(let l=0;l<n.pts.length/2;l++)e.has(n.pts[l*2]+","+n.pts[l*2+1])&&i.add(l);let s=[...i].map(l=>({i:l,x:this.P[l*2],z:this.P[l*2+1],c:-1})),o=this.signalClusters=[];for(let l of s){if(l.c>=0)continue;let c={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[l];for(l.c=c.id;h.length;){let u=h.pop();c.members.push(u),c.x+=u.x,c.z+=u.z,c.n++;for(let p of s)p.c<0&&Math.hypot(p.x-u.x,p.z-u.z)<45&&(p.c=c.id,h.push(p))}c.x/=c.n,c.z/=c.n,o.push(c)}let a=new Map;for(let l of s)a.set(l.i,o[l.c]);this.controls=[];for(let l of this.edges)for(let c=0;c<l.ids.length;c++){let h=a.get(l.ids[c]);if(h)for(let u of l.ow?[0]:[0,1]){let p=u?l.len-l.cum[c]:l.cum[c],d=u===0&&c===l.ids.length-1||u===1&&c===0;if(u===0&&c===0||u===1&&c===l.ids.length-1)continue;let m=Math.max(1,p-(d?4+(u?l.na:l.nb).maxW*.5:2.5)),x={};this.sample(l,u,Math.max(0,m-3),0,x);let f=Math.atan2(x.dz,x.dx);h.axis===null&&(h.axis=f);let y=Math.abs(Math.cos(f-h.axis)),_={e:l,dir:u,de:l.id*2+u,stop:m,cluster:h,group:y>.707?0:1,ang:f,x:0,z:0};l.signals.some(v=>v.dir===u&&v.cluster===h)||(l.signals.push(_),h.controls.push(_),this.controls.push(_))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,y=>y.cls<=5),o=this.nearestRoad(n,i,400,y=>y.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let l=new Set([o.e.na.id,o.e.nb.id]),c=new Ih,h=new Map,u=new Map;for(let y of a){let _=Math.hypot(y.x-t,y.z-e);h.set(y.id,_),c.push(_+Math.hypot(y.x-n,y.z-i),y)}let p=null,d=0;for(;c.size&&d++<2e5;){let y=c.pop();if(l.has(y.id)){p=y;break}let _=h.get(y.id);for(let v of y.out){let R=this.edges[v>>1];if(R.cls>5)continue;let E=v&1?R.na:R.nb,b=R.len*(1+R.cls*.08),C=_+b;C<(h.get(E.id)??1e18)&&(h.set(E.id,C),u.set(E.id,{n:y,de:v}),c.push(C+Math.hypot(E.x-n,E.z-i),E))}}if(!p)return null;let g=[o.x,o.z],m=p,x=[];for(;u.has(m.id);){let y=u.get(m.id);x.push(y.de),m=y.n}x.reverse();let f=[t,e,s.x,s.z];for(let y of x){let v=this.edges[y>>1].pts,R=v.length/2;if(y&1)for(let E=R-1;E>=0;E--)f.push(v[E*2],v[E*2+1]);else for(let E=0;E<R;E++)f.push(v[E*2],v[E*2+1])}return f.push(...g),f}};function ar(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],l=e[s*2+1],c=e[o*2],h=e[o*2+1];l>t!=h>t&&r<(c-a)*(t-l)/(h-l)+a&&(n=!n)}return n}var Ih=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let l=o*2+1,c=l+1,h=o,u=i;if(l<a&&t[l]<u&&(h=l,u=t[l]),c<a&&t[c]<u&&(h=c),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function Cn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var rn={uNight:{value:0},uTime:{value:0},uSnow:{value:0}};function Fi(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function Oi(r,t=!0,e=!0){let n=new be(r);return t&&(n.wrapS=n.wrapT=Wn),n.anisotropy=8,e&&(n.colorSpace=Ee),n.needsUpdate=!0,n}function Gi(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),l=a.data;for(let c=0;c<e;c+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let p=0;p<o;p++)for(let d=0;d<o;d++){let g=((c+p)*t+h+d)*4;l[g]=Math.max(0,Math.min(255,n[0]+u)),l[g+1]=Math.max(0,Math.min(255,n[1]+u)),l[g+2]=Math.max(0,Math.min(255,n[2]+u)),l[g+3]=255}}r.putImageData(a,0,0)}function Bd(){let r=Cn(42),t={};{let e=Fi(512),n=e.getContext("2d");Gi(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=Oi(e)}{let e=Fi(512),n=e.getContext("2d");Gi(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=Oi(e)}{let e=Fi(512),n=e.getContext("2d");Gi(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=Oi(e)}{let e=Fi(512),n=e.getContext("2d");Gi(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=Oi(e)}{let e=Fi(512),n=e.getContext("2d");Gi(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=Oi(e)}{let e=Fi(512),n=e.getContext("2d");Gi(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=Oi(e)}{let e=Fi(256),n=e.getContext("2d");Gi(n,256,256,[60,90,100],18,r,2),t.water=Oi(e)}{let e=Fi(256),n=e.getContext("2d");Gi(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=Oi(e,!0,!1)}return t}function Hd(r){let t=new lt({vertexColors:!0,roughness:.88,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=rn.uNight,e.uniforms.uSnow=rn.uSnow,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.62,0.30), vec3(0.75,0.82,1.0), step(0.86,hh)) * (0.22 + 0.5*fract(hh*7.13));`)},t}function yi(r,t,e,n=16777215,i=.95,s=.9){let o=new lt({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return o.onBeforeCompile=a=>{a.uniforms.uSnow=rn.uSnow,a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), snowM * 0.85);`)},o}function Fd(){let r=new lt({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var pn=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,l,c,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,l,c),h)for(let u in h){let p=h[u],d=this.extra[u].data;for(let g=0;g<p.length;g++)d.push(p[g])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new oe;t.setAttribute("position",new Xt(this.p,3)),t.setAttribute("normal",new Xt(this.n,3)),t.setAttribute("color",new Xt(this.c,3));for(let e in this.extra)t.setAttribute(e,new Xt(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new $s(this.i,1):new Xs(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function Lh(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let m=Math.hypot(i,s)||1;i/=m,s/=m}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let m=Math.hypot(o,a)||1;o/=m,a/=m}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let l=i+o,c=s+a,h=Math.hypot(l,c);h<1e-4?(l=o,c=a):(l/=h,c/=h);let u=-c,p=l,d=u*-a+p*o,g=Math.min(3,1/Math.max(.33,d));e[n*3]=u,e[n*3+1]=p,e[n*3+2]=g}return e}function Dh(r,t,e,n){let i=[],s=r.length/2,o=c=>{let h=0;for(;h<s-2&&t[h+1]<c;)h++;let u=t[h+1]-t[h]||1e-6,p=Math.max(0,Math.min(1,(c-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*p,r[h*2+1]+(r[h*2+3]-r[h*2+1])*p]},a=o(e);i.push(a[0],a[1]);for(let c=1;c<s-1;c++)t[c]>e&&t[c]<n&&i.push(r[c*2],r[c*2+1]);let l=o(n);return i.push(l[0],l[1]),i}function Od(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function Mn(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let l=Lh(t),c=0,h=-1,u=-1;for(let p=0;p<a;p++){p>0&&(c+=Math.hypot(t[p*2]-t[p*2-2],t[p*2+1]-t[p*2-1]));let d=l[p*3],g=l[p*3+1],m=l[p*3+2],x=t[p*2],f=t[p*2+1],y=r.v(x+d*e*m,i,f+g*e*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,0)}),_=r.v(x+d*n*m,i,f+g*n*m,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,1)});h>=0&&r.quad(h,u,_,y),h=y,u=_}}function Gd(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),l=-1,c=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,p=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);c>=0?r.tri(a,c,p):l=p,c=p}r.tri(a,c,l)}function ni(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function kh(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new oe,c=0;for(let h=0;h<r.length;++h){let u=r[h],p=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),p++}if(p!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let p=0;p<r.length;++p){let d=r[p].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=r[p].attributes.position.count}l.setIndex(u)}for(let h in s){let u=Vd(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let p=0;p<u;++p){let d=[];for(let m=0;m<o[h].length;++m)d.push(o[h][m][p]);let g=Vd(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Vd(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new ge(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let p=0,d=h.count;p<d;p++)for(let g=0;g<e;g++){let m=h.getComponent(p,g);a.setComponent(p+u,g,m)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function wt(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new St(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ge(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function Qe(r){let t=kh(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function Xd(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=Cn(77);e.fillStyle="#5a4634",e.fillRect(0,0,512,512);for(let o=0;o<900;o++){let a=50+n()*60;e.fillStyle=`rgba(${a+20},${a},${a*.7},0.6)`,e.fillRect(n()*512,n()*512,2+n()*4,20+n()*60)}e.clearRect(512,0,512,512);let i=(o,a,l,c,h)=>{e.save(),e.translate(o,a),e.rotate(c);let u=90+h*110;e.fillStyle=`rgb(${Math.round(u*.55)},${Math.round(u)},${Math.round(u*.35)})`,e.beginPath(),e.ellipse(0,0,l,l*.45,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,50,20,0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(-l,0),e.lineTo(l,0),e.stroke(),e.restore()};for(let o=0;o<3800;o++){let a=n()*Math.PI*2,l=Math.sqrt(n())*512*.47,c=512+512/2+Math.cos(a)*l,h=512/2+Math.sin(a)*l;i(c,h,7+n()*9,n()*6.28,.25+.75*n()*(1-l/512*.9))}e.strokeStyle="rgba(70,55,40,0.9)",e.lineWidth=3;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(512+512/2,512/2),e.lineTo(512+512/2+(n()-.5)*512*.8,512/2+(n()-.5)*512*.8),e.stroke();let s=new be(t);return s.colorSpace=Ee,s.anisotropy=4,s.generateMipmaps=!0,s}function xa(r){let t=kh(r.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t}function va(r,t,e,n=7,i=0){let s=new Nt(r,t,e,n,3,!0).translate(0,e/2,0),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+i*o.getY(l)/e),a.setXY(l,a.getX(l)*.45,a.getY(l)*2%1);return $d(s,16777215)}function Wd(r,t,e){let n=new I().subVectors(t,r),i=n.length(),s=new Nt(e*.6,e,i,5,1,!0),o=s.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a)*.45,o.getY(a));return s.translate(0,i/2,0),s.applyQuaternion(new ke().setFromUnitVectors(new I(0,1,0),n.normalize())),s.translate(r.x,r.y,r.z),$d(s,16777215)}function $d(r,t,e=1){let n=new St(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new ge(s,3)),r}function ya(r,t,e,n,i,s,o,a,l,c,h=!1){let u=[],p=[],d=[],g=[],m=new St(c),x=new ke,f=new en,y=new I;for(let C=0;C<a;C++){let M,w,A;for(;;){M=r()*2-1,w=r()*2-1,A=r()*2-1;let j=M*M+w*w+A*A;if(j<=1&&j>.15)break}if(h){let j=1-(w+1)/2;M*=.25+j,A*=.25+j}let z=t+M*i,L=e+w*s,N=n+A*o,F=l*(.75+r()*.5);f.set(r()*Math.PI,r()*Math.PI,r()*Math.PI),x.setFromEuler(f);let B=[[-1,-1],[1,-1],[1,1],[-1,1]],J=new I(M,w*.7+.25,A).normalize(),O=.55+.55*((w+1)/2)*(.6+.4*Math.sqrt(M*M+A*A)),V=u.length/3;for(let[j,it]of B){y.set(j*F/2,it*F/2,0).applyQuaternion(x),u.push(z+y.x,L+y.y,N+y.z),p.push(J.x,J.y,J.z),d.push(.5+(j+1)/4,(it+1)/2);let ut=.9+r()*.2;g.push(m.r*O*ut,m.g*O*ut,m.b*O*ut)}}let _=[],v=[],R=[],E=[];for(let C=0;C<a;C++)for(let M of[0,1,2,0,2,3]){let w=C*4+M;_.push(u[w*3],u[w*3+1],u[w*3+2]),v.push(p[w*3],p[w*3+1],p[w*3+2]),R.push(d[w*2],d[w*2+1]),E.push(g[w*3],g[w*3+1],g[w*3+2])}let b=new oe;return b.setAttribute("position",new Xt(_,3)),b.setAttribute("normal",new Xt(v,3)),b.setAttribute("uv",new Xt(R,2)),b.setAttribute("color",new Xt(E,3)),b}function Ma(r){return r.attributes.uv1&&r.deleteAttribute("uv1"),r}function Uh(r=0){let t=Cn(11+r),e=r?.28:1,n=r?1.35:1,i=(o,a,l)=>new I(o,a,l),s=[];{let o=[va(.16,.28,3.6,7,.15)];if(!r)for(let[a,l]of[[.4,3.2],[2.4,3.4],[4.3,3]])o.push(Wd(i(0,l,0),i(Math.cos(a)*1.8,l+1.8,Math.sin(a)*1.8),.1));o.push(ya(t,.2,5.6,0,3,2.3,3,Math.round(70*e),2.1*n,6130234)),s.push(xa(o.map(Ma)))}{let o=[va(.15,.3,4,6)];o.push(ya(t,0,10,0,1.5,7.5,1.5,Math.round(80*e),1.8*n,5603124)),s.push(xa(o.map(Ma)))}{let o=[va(.12,.24,7,6)];o.push(ya(t,0,5,0,2.6,4.8,2.6,Math.round(70*e),1.6*n,3826768,!0)),s.push(xa(o.map(Ma)))}{let o=[va(.24,.42,3.4,8,-.1)];if(!r)for(let[a,l]of[[.9,3],[3.1,3.2],[5,2.9],[2,3.6]])o.push(Wd(i(0,l,0),i(Math.cos(a)*2.4,l+2.2,Math.sin(a)*2.4),.14));o.push(ya(t,0,6.6,0,3.8,2.9,3.8,Math.round(95*e),2.4*n,5077552)),s.push(xa(o.map(Ma)))}return s}function qd(){return Uh(1)}function Yd(){let r=wt(new Nt(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=wt(new pt(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=wt(new pt(.35,.14,.7).translate(0,8.35,-2.1),3948354);return Qe([r,t,e])}function Zd(){return wt(new pt(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function Jd(){let r=wt(new Nt(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=wt(new pt(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(wt(new pt(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=wt(new pt(.44,1.15,.02).translate(0,3.5,-.16),14540253);return Qe([r,t,n,...e])}function jd(r){return wt(new Ni(.12,12).translate(0,3.83-r*.33,.155),16777215)}function Kd(){return Qe([wt(new pt(1.8,.06,.45).translate(0,.45,0),8017460),wt(new pt(1.8,.4,.05).translate(0,.72,-.2),8017460),wt(new pt(.06,.45,.45).translate(-.8,.22,0),3355443),wt(new pt(.06,.45,.45).translate(.8,.22,0),3355443)])}function Qd(){return Qe([wt(new pt(3.6,.08,1.6).translate(0,2.5,0),2973324),wt(new pt(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),wt(new pt(.08,2.5,1.5).translate(1.75,1.25,0),8952234),wt(new pt(3.5,1.8,.05).translate(0,1.4,-.72),10467012),wt(new pt(3,.08,.4).translate(0,.5,-.5),5592405)])}var Vi={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]};function $v(){let r=document.createElement("canvas");r.width=2048,r.height=1024;let t=r.getContext("2d");[["#d8261c","#ffcf3a","\u041D\u0410\u041D & \u0421\u0410\u041C\u0421\u0410","\u0433\u043E\u0440\u044F\u0447\u0438\u0435 \u0438\u0437 \u0442\u0430\u043D\u0434\u044B\u0440\u0430 \xB7 24/7"],["#1667b8","#ffffff","\u0418\u0421\u0421\u042B\u041A-\u041A\u04E8\u041B \u041A\u04AE\u0422\u04E8\u0422!","\u0442\u0443\u0440\u044B \u043D\u0430 \u0418\u0441\u0441\u044B\u043A-\u041A\u0443\u043B\u044C \u043E\u0442 2 990 \u0441\u043E\u043C"],["#f2c200","#141414","\u0411\u0418\u0428\u041A\u0415\u041A \u0422\u0410\u041A\u0421\u0418","\u0437\u0432\u043E\u043D\u0438\u0442\u0435 \xB7 1515"],["#2a7a3a","#fff4d0","\u041A\u042B\u041C\u042B\u0417 \xB7 \u041C\u0410\u041A\u0421\u042B\u041C","\u0410\u043B\u0430-\u0422\u043E\u043E \u0434\u0430\u0441\u0442\u043E\u0440\u043A\u043E\u043D\u0443"],["#0e2a4a","#5fd4ff","\u0428\u0423\u041C\u041A\u0410\u0420 \u0411\u0410\u041D\u041A","\u043A\u0440\u0435\u0434\u0438\u0442 \u043E\u043D\u043B\u0430\u0439\u043D \u0437\u0430 5 \u043C\u0438\u043D\u0443\u0442"],["#ffffff","#c8102e","\u0416\u0410\u04A2\u042B \u04AE\u0419\u041B\u04E8\u0420","\u043D\u043E\u0432\u043E\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \xB7 \u0438\u043F\u043E\u0442\u0435\u043A\u0430 4%"],["#c8102e","#ffffff","\u0421\u0410\u041A\u0422\u0410\u041D! \u0416\u041E\u041B\u0414\u041E \u042D\u0422\u0418\u042F\u0422 \u0411\u041E\u041B","\u0431\u0435\u0440\u0435\u0433\u0438\u0442\u0435 \u043F\u0435\u0448\u0435\u0445\u043E\u0434\u043E\u0432 \xB7 60 \u043A\u043C/\u0447"],["#5a2a8a","#ffd84a","TULPAR AIR","\u0411\u0438\u0448\u043A\u0435\u043A \u2708 \u041E\u0448 \u043E\u0442 2 500 \u0441\u043E\u043C"]].forEach(([i,s,o,a],l)=>{let c=l%4*512,h=Math.floor(l/4)*512,u=t.createLinearGradient(c,h,c+512,h+512);u.addColorStop(0,i),u.addColorStop(1,qv(i,-40)),t.fillStyle=u,t.fillRect(c,h,512,512),t.fillStyle="rgba(255,255,255,0.08)",t.beginPath(),t.arc(c+420,h+120,160,0,7),t.fill(),t.fillStyle=s,t.textAlign="center",t.textBaseline="middle";let p=64;for(t.font=`900 ${p}px Arial`;t.measureText(o).width>470&&p>30;)p-=4,t.font=`900 ${p}px Arial`;t.fillText(o,c+256,h+220),t.font="600 30px Arial",t.fillText(a,c+256,h+310),t.fillStyle="rgba(0,0,0,.35)",t.fillRect(c,h+470,512,42),t.fillStyle="#fff",t.font="600 22px Arial",t.fillText("bishkek \xB7 reklama",c+256,h+491)});let n=new be(r);return n.colorSpace=Ee,n.anisotropy=4,n}function qv(r,t){let e=parseInt(r.slice(1),16),n=Math.max(0,Math.min(255,(e>>16)+t)),i=Math.max(0,Math.min(255,(e>>8&255)+t)),s=Math.max(0,Math.min(255,(e&255)+t));return`rgb(${n},${i},${s})`}var Yv={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},Zv={0:1/140,2:1/45,7:1/120,1:0},_a=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new Ot,t.add(this.root),this.mat={building:Hd(n),road:yi(n,n.asphalt,7,16777215,.92,.1),mark:Fd(),paving:Object.assign(yi(n,n.paving,3.2,12104876,.9,.75),{side:we}),grass:yi(n,n.grass,6,16777215,1),dirt:yi(n,n.dirt,7,16777215,1),field:yi(n,n.field,14,16777215,1),asphalt:yi(n,n.asphalt,7,16777215,.92,.5),concrete:yi(n,n.concrete,20,13158596,.85,.6),water:new lt({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:(()=>{let i=new lt({vertexColors:!0,roughness:.85,map:Xd(),alphaTest:.42,side:we});return i.onBeforeCompile=s=>{s.uniforms.uSnow=rn.uSnow,s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uSnow;`).replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;").replace("#include <color_fragment>",`#include <color_fragment>
 diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.7,0.72,0.76), uSnow * 0.3);`)},i})(),lamp:new lt({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new lt({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new lt({vertexColors:!0,roughness:.6}),rail:new lt({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=Uh(),this.geoTreesLow=qd(),this.geoLamp=Yd(),this.geoLampGlow=Zd(),this.geoBus=Qd(),this.geoBench=Kd(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new ve(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new ge(n,3));let i=yi(this.T,this.T.dirt,9,11843744,1);this.ground=new q(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new q(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),l=Math.floor((i+o)/400),c=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let g=a;g<=l;g++)for(let m=c;m<=h;m++){let x=Ge(g,m);if(this.live.has(x))continue;let f=this.map.chunks.get(x);if(!f)continue;let y=Math.hypot((g+.5)*400-i,(m+.5)*400-s);y<o&&u.push([y,f])}u.sort((g,m)=>g[0]-m[0]);let p=performance.now();for(let[g,m]of u)if(this._buildChunk(m),!n&&performance.now()-p>(this.radius>2e3?14:this.buildBudget||8))break;let d=this.farRadius||0;if(d>o){if(this.far||(this.far=new Map,this.farRoot=new Ot,this.scene.add(this.farRoot)),!this._farScan||performance.now()-this._farScan>400){this._farScan=performance.now();let m=Math.floor((i-d)/400),x=Math.floor((i+d)/400),f=Math.floor((s-d)/400),y=Math.floor((s+d)/400),_=[];for(let v=m;v<=x;v++)for(let R=f;R<=y;R++){let E=Ge(v,R);if(this.far.has(E))continue;let b=this.map.chunks.get(E);if(!b||!b.buildings.length)continue;let C=Math.hypot((v+.5)*400-i,(R+.5)*400-s);C<d&&C>o-600&&_.push([C,b])}_.sort((v,R)=>v[0]-R[0]),this._farQueue=_}let g=performance.now();for(;this._farQueue&&this._farQueue.length&&performance.now()-g<(n?50:4);){let[,m]=this._farQueue.shift();this.far.has(m.key)||this._buildFar(m)}for(let[m,x]of this.far){let f=Math.hypot(x.x-i,x.z-s);if(f>d+800){this.farRoot.remove(x.mesh),x.mesh.geometry.dispose(),this.far.delete(m);continue}let y=this.live.get(m);x.mesh.visible=!(y&&y.group.visible)&&f<d+200}}else if(this.far&&this.far.size){for(let g of this.far.values())this.farRoot.remove(g.mesh),g.mesh.geometry.dispose();this.far.clear()}for(let[g,m]of this.live){let x=Math.hypot(m.x-i,m.z-s);if(x>o+900){this._dispose(g,m);continue}m.group.visible=x<o+300,m.detail&&(m.detail.visible=x<650),m.trees&&(m.trees.visible=x<280,m.treesLow.visible=x>=280&&x<1400),m.marks&&(m.marks.visible=x<700)}}_buildFar(t){let e=Cn(t.key*7+13),n=new pn({aInfo:2,aWin:2});for(let a of t.buildings)!(a.h>=6||(a.x1-a.x0)*(a.z1-a.z0)>160)&&e()<.6||this._building(n,a,e,!1);let i=(t.cx+.5)*400,s=(t.cz+.5)*400;if(n.empty){this.far.set(t.key,{mesh:new Ot,x:i,z:s}),this.far.get(t.key).mesh.geometry={dispose(){}};return}let o=new q(n.build(),this.mat.building);o.matrixAutoUpdate=!1,this.farRoot.add(o),this.far.set(t.key,{mesh:o,x:i,z:s})}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),e.signTex&&(e.signTex.dispose(),e.signMat.dispose()),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),l=Math.floor(Math.min(e,i)/s),c=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=l;u<=c;u++){let p=Ge(h,u),d=this.collision.get(p);d||this.collision.set(p,d=[]),d.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=Cn(t.key*7+13),i=new Ot,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new pn({aInfo:2,aWin:2});for(let M of t.buildings)this._building(a,M,n,o);if(!a.empty){let M=new q(a.build(),this.mat.building);M.castShadow=!0,M.receiveShadow=!0,i.add(M)}t.signs.length&&this._signs(t,i,s);let l=new pn,c=new pn,h=new pn({aDash:2}),u=[1,1,1],p=ni(15253568),d=[.92,.92,.9];for(let M of t.edges){let w=.03+(6-M.cls)*.005;Mn(l,M.pts,-M.w/2,M.w/2,w,[1,1,1]);let A=M.na.deg>1?M.na.maxW/2+1.5:0,z=M.nb.deg>1?M.nb.maxW/2+1.5:0;if(M.len-A-z<2)continue;let L=Dh(M.pts,M.cum,A,M.len-z),N=w+.004,F=(B,J,O=.15,V=d)=>Mn(h,L,B-O/2,B+O/2,N,V,j=>[j,J]);if(M.cls<=4){if(M.ow)for(let B=1;B<M.lanes;B++)F(-M.w/2+B*3.3,1);else if(M.lanes>=2){F(-.12,0),F(.12,0);for(let B=1;B<M.lanes;B++)F(B*3.3,1),F(-B*3.3,1)}else M.cls<=4&&M.w>=6&&F(0,1);M.cls<=2&&(F(M.w/2-.35,0,.12),F(-M.w/2+.35,0,.12))}for(let B of M.signals){let J={};e.sample(M,B.dir,B.stop,0,J);let O=B.dir?-1:1,V=(M.ow,M.w/2),j=M.ow?-V:0,it=V,ut=-J.dz,xt=J.dx,S=[J.x+ut*j,J.z+xt*j,J.x+ut*it,J.z+xt*it];Mn(h,S,-.25,.25,N+.001,d,()=>[0,0])}if(M.cls>=1&&M.cls<=4&&M.w>=5){let B=M.na.deg>1?M.na.maxW/2+2.5:0,J=M.nb.deg>1?M.nb.maxW/2+2.5:0;if(M.len-B-J>3){let O=Dh(M.pts,M.cum,B,M.len-J),V=M.cls<=2?3.4:2.6;for(let j of[-1,1]){let it=j>0?M.w/2:-M.w/2-V,ut=j>0?M.w/2+V:-M.w/2;Mn(c,O,it,ut,.15,[1,1,1]),this._curb(c,O,j>0?M.w/2:-M.w/2,j)}}}}for(let M of t.nodes){let w=.03+M.top*.005+.002;Gd(l,M.x,M.z,M.maxW/2*1.08,w,[1,1,1],16)}for(let[M,w]of t.crossings){let A=e.nearestRoad(M,w,4);if(!A||A.e.cls>4||A.e.w<5)continue;let z=.03+(6-A.e.cls)*.005+.006,L=-A.dz,N=A.dx,F=A.e.w/2,B=[A.x-L*F,A.z-N*F,A.x+L*F,A.z+N*F];Mn(h,B,-2,2,z,d,J=>[J*2,2])}if(!l.empty){let M=new q(l.build(),this.mat.road);M.receiveShadow=!0,i.add(M)}if(!c.empty){let M=new q(c.build(),this.mat.paving);M.receiveShadow=!0,i.add(M),s.detail=M}if(!h.empty){let M=new q(h.build(),this.mat.mark);M.receiveShadow=!0,i.add(M),s.marks=M}let g={},m=[[],[],[],[]];for(let M of t.areas)this._area(g,M,n,m);for(let M of t.lines)this._line(g,M,n,m);for(let M in g){let w=new q(g[M].build(),this.mat[M]);w.receiveShadow=!0,i.add(w)}let x=[];for(let M of t.edges){if(M.cls<1||M.cls>4)continue;let w=M.cls<=2?9:11,A=M.w/2+(M.cls<=2?4.2:3.4);for(let z=6+n()*5;z<M.len-6;z+=w+n()*5)for(let L of[-1,1]){if(n()<(M.cls<=3?.18:.4))continue;let N={};if(e.sample(M,0,z,A*L,N),this._blocked(N.x,N.z,M,2.2))continue;let F=M.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;m[F].push(N.x,N.z,.75+n()*.5,n()*6.28)}if(M.cls<=3)for(let z=10;z<M.len-8;z+=34)for(let L of M.cls<=1?[-1,1]:[1]){let N={};if(e.sample(M,0,z,(M.w/2+.6)*L,N),this._blocked(N.x,N.z,M,.8))continue;let F=Math.atan2(-N.dz*L,N.dx*L);x.push(N.x,N.z,F)}}for(let M of t.trees)m[n()<.5?0:3].push(M[0],M[1],.8+n()*.4,n()*6.28);let f=new Ot,y=new Ot,_=new jt,v=new ke,R=new I,E=new I,b=new I(0,1,0),C=new St;for(let M=0;M<4;M++){let w=m[M],A=w.length/4;if(!A)continue;let z=new Se(this.geoTrees[M],this.mat.tree,A);for(let N=0;N<A;N++){let F=w[N*4+2];v.setFromAxisAngle(b,w[N*4+3]),_.compose(R.set(w[N*4],0,w[N*4+1]),v,E.set(F,F*(.9+n()*.25),F)),z.setMatrixAt(N,_);let B=.8+n()*.35;z.setColorAt(N,C.setRGB(B*(.9+n()*.25),B,B*(.85+n()*.2)))}z.castShadow=!0,z.receiveShadow=!0,z.computeBoundingSphere(),f.add(z);let L=new Se(this.geoTreesLow[M],this.mat.tree,A);L.instanceMatrix.copy(z.instanceMatrix),L.instanceColor=z.instanceColor,L.castShadow=!0,L.computeBoundingSphere(),y.add(L)}if(i.add(f,y),s.trees=f,s.treesLow=y,x.length){let M=x.length/3,w=new Se(this.geoLamp,this.mat.lamp,M),A=new Se(this.geoLampGlow,this.mat.lampGlow,M);for(let L=0;L<M;L++)v.setFromAxisAngle(b,x[L*3+2]),_.compose(R.set(x[L*3],0,x[L*3+1]),v,E.set(1,1,1)),w.setMatrixAt(L,_),A.setMatrixAt(L,_);if(w.castShadow=!0,w.computeBoundingSphere(),A.computeBoundingSphere(),!this.poolGeo){let L=document.createElement("canvas");L.width=L.height=128;let N=L.getContext("2d"),F=N.createRadialGradient(64,64,4,64,64,64);F.addColorStop(0,"rgba(255,255,255,1)"),F.addColorStop(.5,"rgba(255,255,255,.45)"),F.addColorStop(1,"rgba(255,255,255,0)"),N.fillStyle=F,N.fillRect(0,0,128,128),this.poolGeo=new ve(13,13).rotateX(-Math.PI/2).translate(0,.16,-2.6),this.mat.pool=new le({map:new be(L),color:16756832,transparent:!0,opacity:0,blending:Be,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-6,polygonOffsetUnits:-20})}let z=new Se(this.poolGeo,this.mat.pool,M);for(let L=0;L<M;L++)w.getMatrixAt(L,_),z.setMatrixAt(L,_);z.computeBoundingSphere(),z.renderOrder=3,i.add(w,A,z)}if(this._trolley(t,i),this._billboards(t,i,n),t.busstops.length){let M=[];for(let[w,A]of t.busstops){let z=e.nearestRoad(w,A,25,O=>O.cls<=4);if(!z)continue;let L=z.lat>=0?1:-1,N=z.e.w/2+2.2,F=z.x+-z.dz*N*L,B=z.z+z.dx*N*L;if(e.insideBuilding(F,B,.5))continue;let J=e.nearestRoad(F,B,12);J&&J.dist<J.e.w/2+1||M.push(F,B,Math.atan2(z.dx*L,z.dz*L)+Math.PI)}if(M.length){let w=new Se(this.geoBus,this.mat.prop,M.length/3);for(let A=0;A<M.length/3;A++)v.setFromAxisAngle(b,M[A*3+2]),_.compose(R.set(M[A*3],.15,M[A*3+1]),v,E.set(1,1,1)),w.setMatrixAt(A,_);w.castShadow=!0,w.computeBoundingSphere(),i.add(w)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_signs(t,e,n){let i={pharmacy:["#1d8a4a","#fff"],bank:["#163c7a","#fff"],cafe:["#5a3a22","#ffe9c8"],restaurant:["#7a1e1e","#fff3d0"],fast_food:["#d8261c","#fff"],supermarket:["#f2c200","#1a1a1a"],convenience:["#1f5fa8","#fff"],fuel:["#0a6a3a","#fff"],hotel:["#2a2a40","#f0d080"],clothes:["#222","#fff"],bar:["#3a1a40","#ffd0f0"],mobile_phone:["#e05a10","#fff"]},s=[];for(let v of t.signs){let R=Math.floor(v.x/this.map.BGRID),E=Math.floor(v.z/this.map.BGRID),b=null,C=18;for(let M=-1;M<=1;M++)for(let w=-1;w<=1;w++){let A=this.map.bgrid.get(Ge(R+M,E+w));if(A)for(let z of A){if(z.h<3||z.h>80)continue;let L=z.pts,N=L.length/2,F=0;for(let J=0;J<N;J++){let O=(J+1)%N;F+=L[J*2]*L[O*2+1]-L[O*2]*L[J*2+1]}let B=F>0?1:-1;for(let J=0;J<N;J++){let O=(J+1)%N,V=L[J*2],j=L[J*2+1],it=L[O*2],ut=L[O*2+1],xt=it-V,S=ut-j,Y=Math.hypot(xt,S);if(Y<3)continue;let nt=((v.x-V)*xt+(v.z-j)*S)/(Y*Y);nt=Math.max(.15,Math.min(.85,nt));let K=V+xt*nt,mt=j+S*nt,yt=Math.hypot(v.x-K,v.z-mt);if(yt>=C)continue;let At=S/Y*B,$t=-xt/Y*B,ot=this.map.nearestRoad(K+At*6,mt+$t*6,30),dt=yt+(ot?ot.dist*.15:6);dt<C&&(C=dt,b={x:K+At*.06,z:mt+$t*.06,nx:At,nz:$t,l:Y,h:Math.min(z.h,4.2)})}}}if(b&&!s.some(M=>Math.hypot(M.x-b.x,M.z-b.z)<2.5)&&s.push(Object.assign(b,{name:v.name,kind:v.kind})),s.length>=48)break}if(!s.length)return;let o=256,a=48,l=4,c=Math.ceil(s.length/l),h=document.createElement("canvas");h.width=o*l,h.height=a*c;let u=h.getContext("2d"),p=[],d=[],g=[],m=[];s.forEach((v,R)=>{let E=R%l*o,b=Math.floor(R/l)*a,[C,M]=i[v.kind]||["#8a1a1a","#fff"];u.fillStyle=C,u.fillRect(E,b,o,a),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(E,b,o,4),u.fillStyle=M,u.textAlign="center",u.textBaseline="middle";let w=30;for(u.font=`700 ${w}px Arial`;u.measureText(v.name).width>o-16&&w>12;)w-=2,u.font=`700 ${w}px Arial`;u.fillText((v.name.toUpperCase,v.name),E+o/2,b+a/2+1),v.kind==="pharmacy"&&(u.fillStyle="#fff",u.fillRect(E+8,b+18,18,6),u.fillRect(E+14,b+12,6,18));let A=Math.min(v.l*.8,1.6+v.name.length*.28),z=A*a/o*1.15,L=-v.nz,N=v.nx,F=v.h-.6-z,B=v.h-.6,J=Math.max(2.6,Math.min(F,3)),O=J+z,V=p.length/3;for(let[S,Y]of[[-1,J],[1,J],[1,O],[-1,O]])p.push(v.x+L*S*A/2,Y,v.z+N*S*A/2),g.push(v.nx,0,v.nz);let j=E/h.width,it=(E+o)/h.width,ut=1-(b+a)/h.height,xt=1-b/h.height;d.push(it,ut,j,ut,j,xt,it,xt),m.push(V,V+1,V+2,V,V+2,V+3)});let x=new oe;x.setAttribute("position",new Xt(p,3)),x.setAttribute("normal",new Xt(g,3)),x.setAttribute("uv",new Xt(d,2)),x.setIndex(m);let f=new be(h);f.colorSpace=Ee,f.anisotropy=4;let y=new lt({map:f,emissiveMap:f,emissive:16777215,emissiveIntensity:.05+this.night*.9,roughness:.5,side:we}),_=new q(x,y);e.add(_),n.signMat=y,n.signTex=f}_trolley(t,e){let n=/Чүй|Чуй|Chuy|Манас|Manas|Абдрахманов|Abdrahmanov|Жибек|Jibek|Ибраимов|Ibraimov|Ахунбаев|Akhunbaev|Токтогул|Toktogul|Киев|Kyiv|Москва|Moscow|Шабдан|Shabdan|Айтматов|Aytmatov|Фрунзе|Frunze|Горький|Gorky/,i=[],s=[],o={},a={};for(let l of t.edges){if(l.cls>2||l.name<0||l.len<30)continue;let c=this.map.names[l.name];if(!n.test(c[0])&&!n.test(c[1]||""))continue;let h=l.ow?[0]:[0,1],u=32;for(let p=4;p<l.len-2;p+=u){let d=Math.min(l.len-1,p+u);for(let g of h){let m=this.map.laneOffset(l,l.lanes-1);for(let x of[-.32,.32]){let f=null,y=null,_=null;for(let v=0;v<=4;v++){let R=v/4,E=p+(d-p)*R;this.map.sample(l,g,g?l.len-E:E,m+x,o);let b=6.3-Math.sin(R*Math.PI)*.25;f!==null&&i.push(f,_,y,o.x,b,o.z),f=o.x,_=b,y=o.z}}}this.map.sample(l,0,p,l.w/2+.7,o),this.map.sample(l,0,p,-l.w/2-.7,a),this.map.insideBuilding(o.x,o.z,.3)||s.push(o.x,o.z),this.map.insideBuilding(a.x,a.z,.3)||s.push(a.x,a.z),i.push(o.x,6.9,o.z,a.x,6.9,a.z)}}if(i.length){let l=new oe;l.setAttribute("position",new Xt(i,3));let c=new js(l,this.wireMat||(this.wireMat=new Br({color:1842204})));e.add(c)}if(s.length){let l=s.length/2,c=this.poleGeo||(this.poleGeo=new Nt(.1,.15,7.4,6).translate(0,3.7,0)),h=new Se(c,this.poleMat||(this.poleMat=new lt({color:6053990,roughness:.6,metalness:.4})),l),u=new jt;for(let p=0;p<l;p++)u.makeTranslation(s[p*2],0,s[p*2+1]),h.setMatrixAt(p,u);h.castShadow=!0,h.computeBoundingSphere(),e.add(h)}}_billboards(t,e,n){this.adTex||(this.adTex=$v());let i=[],s=[],o=[],a=[],l=[],c={};for(let x of t.edges)if(!(x.cls>2||x.len<120))for(let f=60+n()*80;f<x.len-40;f+=240+n()*140){let y=n()<.5?1:-1;if(this.map.sample(x,0,f,(x.w/2+5.5)*y,c),this.map.insideBuilding(c.x,c.z,4))continue;let _=this.map.nearestRoad(c.x,c.z,12);if(_&&_.dist<_.e.w/2+2)continue;let v=Math.atan2(c.dx,c.dz)+y*.45+(y>0?Math.PI:0),R=Math.sin(v),E=Math.cos(v),b=Math.cos(v),C=-Math.sin(v),M=6,w=3,A=4.2,z=Math.floor(n()*8),L=z%4/4,N=Math.floor(z/4)/2;for(let F of[0,1]){let B=i.length/3,J=F?-1:1;for(let[O,V]of[[-1,0],[1,0],[1,1],[-1,1]])i.push(c.x+b*O*M/2*J-R*.06*F,A+V*w,c.z+C*O*M/2*J-E*.06*F),o.push(R*J,0,E*J);F?s.push(.001,.001,.002,.001,.002,.002,.001,.002):s.push(L,1-N-.5,L+.25,1-N-.5,L+.25,1-N,L,1-N),a.push(B,B+1,B+2,B,B+2,B+3)}l.push(c.x+b*1.6,c.z+C*1.6,c.x-b*1.6,c.z-C*1.6)}if(!i.length)return;let h=new oe;h.setAttribute("position",new Xt(i,3)),h.setAttribute("normal",new Xt(o,3)),h.setAttribute("uv",new Xt(s,2)),h.setIndex(a),this.adMat||(this.adMat=new lt({map:this.adTex,emissiveMap:this.adTex,emissive:16777215,emissiveIntensity:.05,roughness:.6,side:we}));let u=new q(h,this.adMat);u.castShadow=!0,e.add(u);let p=l.length/2,d=this.legGeo||(this.legGeo=new Nt(.14,.18,4.3,6).translate(0,2.15,0)),g=new Se(d,this.poleMat||(this.poleMat=new lt({color:6053990,roughness:.6,metalness:.4})),p),m=new jt;for(let x=0;x<p;x++)m.makeTranslation(l[x*2],0,l[x*2+1]),g.setMatrixAt(x,m);g.castShadow=!0,g.computeBoundingSphere(),e.add(g)}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=Lh(e),o=e.length/2,a=-1,l=-1;for(let c=0;c<o;c++){let h=s[c*3],u=s[c*3+1],p=s[c*3+2],d=e[c*2]+h*n*p,g=e[c*2+1]+u*n*p,m=-h*i,x=-u*i,f=t.v(d,.15,g,m,0,x,.85,.85,.83),y=t.v(d,0,g,m,0,x,.6,.6,.6);a>=0&&(i>0?t.quad(l,y,f,a):t.quad(l,a,f,y)),a=f,l=y}}_area(t,e,n,i){let s=Yv[e.type];if(!s)return;let[o,a,l]=s,c=t[o]||(t[o]=new pn),h=e.pts,u=h.length/2,p=[];for(let f=0;f<u;f++)p.push(new tt(h[f*2],h[f*2+1]));let d;try{d=zi.triangulateShape(p,[])}catch{return}let g=ni(a),m=c.vc;for(let f=0;f<u;f++)c.v(h[f*2],l,h[f*2+1],0,1,0,g[0],g[1],g[2]);for(let f of d){let[y,_,v]=f,R=h[y*2],E=h[y*2+1],b=h[_*2],C=h[_*2+1],M=h[v*2],w=h[v*2+1];(b-R)*(w-E)-(C-E)*(M-R)<0?c.tri(m+y,m+_,m+v):c.tri(m+y,m+v,m+_)}let x=Zv[e.type];if(i&&x&&n){let f=(e.x1-e.x0)*(e.z1-e.z0),y=Math.min(500,Math.floor(f*x)),_=y*3;for(;y>0&&_-- >0;){let v=e.x0+n()*(e.x1-e.x0),R=e.z0+n()*(e.z1-e.z0);if(!ar(v,R,h))continue;let E=this.map.nearestRoad(v,R,10);if(E&&E.dist<E.e.w/2+2||this.map.insideBuilding(v,R,1.5))continue;let b=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[b].push(v,R,.7+n()*.6,n()*6.28),y--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new pn);Mn(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new pn);Mn(o,s,-e.w/2,e.w/2,.005,ni(6982288));let a=t.dirt||(t.dirt=new pn);Mn(a,s,-e.w/2-2.5,-e.w/2,.004,ni(10129528)),Mn(a,s,e.w/2,e.w/2+2.5,.004,ni(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new pn);Mn(o,s,-1.8,1.8,.02,ni(6971992));let a=t.rail||(t.rail=new pn);Mn(a,s,-.78,-.7,.16,[1,1,1]),Mn(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new pn);Mn(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new pn({aDash:2}));Mn(a,s,-.08,.08,.03,ni(15253552),l=>[l,0])}else if(e.type===5&&i){let o=Od(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let l=0;for(;l<o.length-2&&o[l+1]<a;)l++;let c=(a-o[l])/(o[l+1]-o[l]||1);i[n()<.6?1:0].push(s[l*2]+(s[l*2+2]-s[l*2])*c,s[l*2+1]+(s[l*2+3]-s[l*2+1])*c,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let F=0;F<o;F++){let B=(F+1)%o;a+=s[F*2]*s[B*2+1]-s[B*2]*s[F*2+1]}let l=Math.abs(a)/2,c=e.kind,h=e.h,u=e.minH,p,d,g=3,m=3.2,x=F=>F[Math.floor(n()*F.length)];switch(c===0&&(c=h<7.5?1:h>35?3:2),c){case 1:p=1,d=x(Vi.house),m=3.6;break;case 2:p=2,d=x(Vi.panel),m=3.1;break;case 3:p=3,d=x(Vi.comm),m=2.2,g=3.6;break;case 4:p=4,d=x(Vi.ind),m=4,g=4;break;case 5:p=0,d=9077880;break;case 6:p=0,d=10132122;break;case 7:p=5,d=x(Vi.pub),m=3.4,g=3.8;break;case 8:p=5,d=15921128;break;case 9:p=4,d=11052188;break;case 10:p=6,d=13160664,m=2.5,g=4;break;default:p=2,d=x(Vi.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(p=5,d=15262940),e.name&&/Жогорку Кеңеш|National Parliament|Ынтымак Ордо|Yntymak Ordo|City Hall|Мэрия|National Bank/i.test(e.name)&&(p=5,d=15987180,c=7);let f=ni(d);if(e.colour)try{let F=new St(e.colour);(e.colour!=="white"||c!==3)&&(f=[F.r,F.g,F.b])}catch{}let y=.92+n()*.12,_=f[0]*y,v=f[1]*y,R=f[2]*y,E=n()*100,b=(F,B)=>({aInfo:[p,E],aWin:[F,B]}),C=a>0?1:-1,M=0;for(let F=0;F<o;F++){let B=(F+1)%o,J=s[F*2],O=s[F*2+1],V=s[B*2],j=s[B*2+1],it=V-J,ut=j-O,xt=Math.hypot(it,ut);if(xt<.05)continue;let S=ut/xt*C,Y=-it/xt*C,nt=Math.max(1,Math.round(xt/m)),K=0,mt=(h-u)/g,yt=t.v(J,u,O,S,0,Y,_,v,R,b(0,K)),At=t.v(V,u,j,S,0,Y,_,v,R,b(nt,K)),$t=t.v(V,h,j,S,0,Y,_,v,R,b(nt,mt)),ot=t.v(J,h,O,S,0,Y,_,v,R,b(0,mt));C>0?(t.tri(yt,$t,At),t.tri(yt,ot,$t)):(t.tri(yt,At,$t),t.tri(yt,$t,ot)),i&&h>1.5&&this.addWall(J,O,V,j),M+=xt}let w=c===1&&l<260&&o<=8||/gabled|hipped|pitched/.test(e.roofShape||"");if(!w&&h>5&&c!==5&&c!==6){let F=c===3||c===10?1.1:.7,B=[_*.92,v*.92,R*.92],J={aInfo:[0,E],aWin:[0,0]};for(let O=0;O<o;O++){let V=(O+1)%o,j=s[O*2],it=s[O*2+1],ut=s[V*2],xt=s[V*2+1],S=Math.hypot(ut-j,xt-it);if(S<.05)continue;let Y=(xt-it)/S*C,nt=-(ut-j)/S*C,K=t.v(j,h,it,Y,0,nt,B[0],B[1],B[2],J),mt=t.v(ut,h,xt,Y,0,nt,B[0],B[1],B[2],J),yt=t.v(ut,h+F,xt,Y,.2,nt,B[0],B[1],B[2],J),At=t.v(j,h+F,it,Y,.2,nt,B[0],B[1],B[2],J);C>0?(t.tri(K,yt,mt),t.tri(K,At,yt),t.tri(K,mt,yt),t.tri(K,yt,At)):(t.tri(K,mt,yt),t.tri(K,yt,At),t.tri(K,yt,mt),t.tri(K,At,yt))}}if(w){this._gableRoof(t,e,h,f,n,l);return}let A=[];for(let F=0;F<o;F++)A.push(new tt(s[F*2],s[F*2+1]));let z;try{z=zi.triangulateShape(A,[])}catch{return}let L=c===10?[.55,.57,.6]:c===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],N=t.vc;for(let F=0;F<o;F++)t.v(s[F*2],h,s[F*2+1],0,1,0,L[0],L[1],L[2],{aInfo:[0,E],aWin:[s[F*2],s[F*2+1]]});for(let F of z){let[B,J,O]=F,V=s[B*2],j=s[B*2+1],it=s[J*2],ut=s[J*2+1],xt=s[O*2],S=s[O*2+1];(it-V)*(S-j)-(ut-j)*(xt-V)<0?t.tri(N+B,N+J,N+O):t.tri(N+B,N+O,N+J)}if((c===2||c===3)&&l>350&&h>12){let F=Math.min(3,Math.floor(l/400));for(let B=0;B<F;B++){let J=(B+.5)/F,O=e.x0+(e.x1-e.x0)*J,V=e.z0+(e.z1-e.z0)*J;ar(O,V,s)&&this._box(t,O,h,V,2.6,2.4,3.2,[L[0]*1.3,L[1]*1.3,L[2]*1.3],E)}}}_box(t,e,n,i,s,o,a,l,c){let h=s/2,u=a/2,p=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],d={aInfo:[0,c],aWin:[0,0]};for(let m=0;m<4;m++){let[x,f]=p[m],[y,_]=p[(m+1)%4],v=y-x,R=_-f,E=Math.hypot(v,R),b=R/E,C=-v/E,M=t.v(x,n,f,b,0,C,l[0],l[1],l[2],d),w=t.v(y,n,_,b,0,C,l[0],l[1],l[2],d),A=t.v(y,n+o,_,b,0,C,l[0],l[1],l[2],d),z=t.v(x,n+o,f,b,0,C,l[0],l[1],l[2],d);t.tri(M,A,w),t.tri(M,z,A)}let g=p.map(([m,x])=>t.v(m,n+o,x,0,1,0,l[0],l[1],l[2],d));t.tri(g[0],g[2],g[1]),t.tri(g[0],g[3],g[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,l=a.length/2,c=0,h=1,u=0;for(let V=0;V<l;V++){let j=(V+1)%l,it=a[j*2]-a[V*2],ut=a[j*2+1]-a[V*2+1],xt=Math.hypot(it,ut);xt>c&&(c=xt,h=it/xt,u=ut/xt)}let p=-u,d=h,g=1e9,m=-1e9,x=1e9,f=-1e9;for(let V=0;V<l;V++){let j=a[V*2]*h+a[V*2+1]*u,it=a[V*2]*p+a[V*2+1]*d;g=Math.min(g,j),m=Math.max(m,j),x=Math.min(x,it),f=Math.max(f,it)}let y=.35;g-=y,m+=y,x-=y,f+=y;let _=(V,j)=>[V*h+j*p,V*u+j*d],v=Math.min(2.6,(f-x)*.38),R=(x+f)/2,E=ni(Vi.roofHouse[Math.floor(s()*Vi.roofHouse.length)]);if(e.roofColour)try{let V=new St(e.roofColour);E=[V.r,V.g,V.b]}catch{}let b={aInfo:[0,0],aWin:[0,0]},C=n-.05,M=_(g,x),w=_(m,x),A=_(m,f),z=_(g,f),L=_(g,R),N=_(m,R),F=(V,j,it,ut,xt)=>{let S=(R-(xt<0?x:f)===0,1),Y=v/((f-x)/2),nt=p*xt*Y,K=d*xt*Y,mt=Math.hypot(nt,1,K),yt=t.v(V[0],C,V[1],nt/mt,S/mt,K/mt,E[0],E[1],E[2],b),At=t.v(j[0],C,j[1],nt/mt,S/mt,K/mt,E[0],E[1],E[2],b),$t=t.v(it[0],C+v,it[1],nt/mt,S/mt,K/mt,E[0]*1.1,E[1]*1.1,E[2]*1.1,b),ot=t.v(ut[0],C+v,ut[1],nt/mt,S/mt,K/mt,E[0]*1.1,E[1]*1.1,E[2]*1.1,b);return[yt,At,$t,ot]},B=F(M,w,N,L,-1),J=F(A,z,L,N,1),O=V=>{let[j,it,ut]=V.map(yt=>[t.p[yt*3],t.p[yt*3+1],t.p[yt*3+2]]),xt=it[0]-j[0],S=it[1]-j[1],Y=it[2]-j[2],nt=ut[0]-j[0],K=ut[1]-j[1],mt=ut[2]-j[2];return Y*nt-xt*mt>0};for(let V of[B,J])O(V)?(t.tri(V[0],V[1],V[2]),t.tri(V[0],V[2],V[3])):(t.tri(V[0],V[2],V[1]),t.tri(V[0],V[3],V[2]));for(let[V,j,it,ut]of[[M,z,L,-1],[w,A,N,1]]){let xt=h*ut,S=u*ut,Y=t.v(V[0],C,V[1],xt,0,S,i[0],i[1],i[2],b),nt=t.v(j[0],C,j[1],xt,0,S,i[0],i[1],i[2],b),K=t.v(it[0],C+v,it[1],xt,0,S,i[0],i[1],i[2],b);t.tri(Y,nt,K),t.tri(Y,K,nt)}}setNight(t){if(this.mat.pool&&(this.mat.pool.opacity=Math.max(0,t-.2)*.55),this.adMat&&(this.adMat.emissiveIntensity=.05+t*.75),Math.abs((this.night||0)-t)>.02)for(let e of this.live.values())e.signMat&&(e.signMat.emissiveIntensity=.05+t*.9);this.night=t,rn.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),l=Math.floor((e-n)/s),c=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,p=e;for(let d=o;d<=a;d++)for(let g=l;g<=c;g++){let m=this.collision.get(Ge(d,g));if(m)for(let x=0;x<m.length;x+=4){let f=m[x],y=m[x+1],_=m[x+2],v=m[x+3],R=_-f,E=v-y,b=R*R+E*E||1e-6,C=((u-f)*R+(p-y)*E)/b;C=C<0?0:C>1?1:C;let M=f+R*C,w=y+E*C,A=u-M,z=p-w,L=Math.hypot(A,z);if(L<n&&L>1e-5){let N=n-L;u+=A/L*N,p+=z/L*N,i.nx+=A/L,i.nz+=z/L,h=!0}}}if(h){i.x=u-t,i.z=p-e;let d=Math.hypot(i.nx,i.nz)||1;i.nx/=d,i.nz/=d}return h}};var lr=class r extends q{constructor(){let t=r.SkyShader,e=new de({name:t.name,uniforms:fn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:cn,depthWrite:!1});super(new pt(1,1,1),e),this.isSky=!0}};lr.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new I},up:{value:new I(0,1,0)}},vertexShader:`
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

		}`};var wa=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new rs,this.bgCam=new Ze(60,1,50,2e5),this.sky=new lr,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85;for(let s of[this.sky])s.material.fragmentShader=s.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min( retColor * 0.42, vec3( 24.0 ) ), 1.0 );");this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new I,this.sun=new ca(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new la(12572927,6971464,1),e.add(this.hemi),e.fog=new qo(13162208,300,2600),this.pmrem=new Zs(t),this.envScene=new rs,this.envSky=new lr,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=Cn(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new oe;i.setAttribute("position",new ge(n,3)),this.starMat=new as({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new xi(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=Cn(99),e=260,n=70,i=new ve(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let p=0,d=1,g=1/9e3;for(let m=0;m<6;m++)p+=d*(Math.sin(h*g+m*1.7)*Math.cos(u*g*1.3-m)+Math.sin((h+u)*g*.7+m*3.1)*.6),d*=.5,g*=2.1;return p};for(let h=0;h<s.count;h++){let u=s.getX(h),d=s.getZ(h)+26e3+13e3,g=d-26e3,m=Math.min(1,Math.max(0,(g+6e3)/14e3)),x=Math.exp(-((g-16e3)**2)/(2*9e3**2)),f=m*m*1100+x*4100*(.75+.35*o(u,d))+Math.abs(o(u*1.7,d*1.7))*600*m;f*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,f-120),d)}i.computeVertexNormals();let a=new ve(22e4,3e4,160,20).rotateX(-Math.PI/2),l=a.attributes.position;for(let h=0;h<l.count;h++){let u=l.getX(h),p=l.getZ(h)-7e4,d=Math.max(0,(Math.abs(p+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,p*.6)))*Math.min(1,-(p+55e3)/12e3));l.setXYZ(h,u,d-80,p)}a.computeVertexNormals(),this.mtnMat=new de({uniforms:{sunDir:{value:new I(0,1,0)},fogCol:{value:new St(13162208)},light:{value:1},camPos:{value:new I}},vertexShader:`varying vec3 vN; varying vec3 vW;
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
        }`,fog:!1}),this.mountains=new q(i,this.mtnMat),this.hills=new q(a,this.mtnMat);let c=new q(new ve(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);c.position.y=-6,this.plain=c,this.bg.add(this.mountains,this.hills,c),this._clouds()}_clouds(){this.cloudMat=new de({uniforms:{uTime:rn.uTime,sunDir:{value:new I(0,1,0)},day:{value:1},fogCol:{value:new St},cover:{value:.58},camPos:{value:new I}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float uTime; uniform vec3 sunDir; uniform float day; uniform vec3 fogCol; uniform float cover; uniform vec3 camPos; varying vec3 vW;
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
        }`,transparent:!0,depthWrite:!1,fog:!1,side:we}),this.cloudsMesh=new q(new ve(16e4,16e4,1,1).rotateX(-Math.PI/2),this.cloudMat),this.cloudsMesh.position.y=2600,this.bg.add(this.cloudsMesh)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let c=Ie.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-Ie.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*c,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),c<.15&&(this.sun.intensity=.55*(1-c/.15)+3.2*c,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*c,this.hemi.color.setRGB(.55+.2*c,.62+.22*c,.85+.1*c).multiplyScalar(.5+.5*c),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+c),.38*(.3+c),.3*(.3+c));let u=new St().setRGB(.55,.66,.8).lerp(new St(.92,.66,.45),h*.55).multiplyScalar(.08+.92*c);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*c,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night,this.cloudMat.uniforms.sunDir.value.copy(this.sunDir),this.cloudMat.uniforms.day.value=c,this.cloudMat.uniforms.fogCol.value.copy(u),this.cloudMat.uniforms.camPos.value.copy(t.position),this.cloudsMesh.position.x=t.position.x,this.cloudsMesh.position.z=t.position.z;let p=this.sunDir.y>.05?this.sunDir:new I(-.4,.8,.3).normalize();return this.sun.position.set(e.x+p.x*400,p.y*400,e.z+p.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*c),{day:c,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function Jv(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i],o=r[(i-1+n)%n],a=r[(i+1)%n],l=[o[0]-s[0],o[1]-s[1]],c=[a[0]-s[0],a[1]-s[1]],h=Math.hypot(...l),u=Math.hypot(...c),p=Math.min(t,h*.45,u*.45);if(s[1]<.5&&(o[1]<.5||a[1]<.5)||p<.01){e.push(s);continue}let g=[s[0]+l[0]/h*p,s[1]+l[1]/h*p],m=[s[0]+c[0]/u*p,s[1]+c[1]/u*p];for(let x=0;x<=4;x++){let f=x/4,y=1-f;e.push([y*y*g[0]+2*y*f*s[0]+f*f*m[0],y*y*g[1]+2*y*f*s[1]+f*f*m[1]])}}return e}function Bh(r,t,e=.05,n={}){let i=n.fillet?Jv(r,n.fillet):r,s=new qn;s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1]);s.closePath();let o=new ei(s,{depth:t-e*2,steps:n.steps||1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});if(o.rotateY(-Math.PI/2),o.translate((t-e*2)/2,0,0),n.shape){let{L:a,W:l,belt:c,top:h,taper:u=.12,tumble:p=.14}=n.shape,d=o.attributes.position;for(let g=0;g<d.count;g++){let m=d.getX(g),x=d.getY(g),f=d.getZ(g),y=Math.min(1,Math.abs(f)/(a/2)),_=1-u*Math.pow(y,3);x>c&&(_*=1-p*Math.min(1,(x-c)/Math.max(.1,h-c))),d.setX(g,m*_),Math.abs(m)>l*.3&&x>c*.7&&d.setY(g,x-.02*Math.pow(Math.abs(m)/(l/2),4))}o.computeVertexNormals()}return o}var nn=(r,t,e,n,i,s)=>new pt(r,t,e).translate(n,i,s),jv={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},Kv=1844524,Qv=1447446,t1=12106944,ba=2105892,e1=13159632;function Nn(r,t={}){let e=jv[r],n=[],i=[],s=[],o=e.W,a=e.cabin[0][1],l=e.roof[2][1],c=r==="bus"||r==="truck",h=c?null:{L:e.L,W:o,belt:a*.75,top:l,taper:r==="van"?.06:.13,tumble:.05};n.push(Bh(e.body,o,.08,{fillet:c?.08:.22,steps:4,shape:h}));let u=o*e.cabinW,p=c?null:{L:e.L,W:u,belt:a,top:l,taper:.1,tumble:r==="van"?.05:.2};if(i.push(wt(Bh(e.cabin,u,.04,{fillet:c?.05:.12,steps:3,shape:p}),Kv)),n.push(Bh(e.roof,u+.03,.02,{fillet:.04,steps:2,shape:p&&{...p,W:u+.03}})),!c)for(let[M,w,A]of tf(e)){let z=new Nt(e.wr*1.18,e.wr*1.18,.06,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2);i.push(wt(z.translate(Math.sign(M)*(o/2-.02),w,A),657930))}if(!c)for(let M of[-1,1])i.push(wt(nn(.012,a-e.body[0][1]-.15,.02,M*(o/2+.003),(a+e.body[0][1])/2,e.cabin[e.cabin.length-2][0]-.1),1118481)),i.push(wt(nn(.012,a-e.body[0][1]-.15,.02,M*(o/2+.003),(a+e.body[0][1])/2,(e.cabin[0][0]+e.cabin[1][0])/2+.2),1118481)),i.push(wt(nn(.02,.05,e.L*.5,M*(o/2+.005),a-.03,0),10133670));if(e.cargo){let[M,w,A,z]=e.cargo;n.push(nn(o,z-A,w-M,0,(A+z)/2,(M+w)/2))}if(r==="van"||r==="bus"){let M=r==="bus"?7:4,w=e.cabin[0][0],A=e.cabin[3][0]-(r==="van"?.7:.2);for(let z=0;z<=M;z++){let L=w+(A-w)*z/M;n.push(nn(u+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,L+.06))}}let d=e.body[0][1],g=e.head.z,m=e.tail.z;i.push(wt(nn(o+.02,.16,.12,0,d+.12,g-.02),ba)),i.push(wt(nn(o+.02,.16,.12,0,d+.12,m+.02),ba)),i.push(wt(nn(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,g+.01),789516)),i.push(wt(nn(o+.03,.1,e.L*.55,0,d+.04,0),ba));let x=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let M of[-1,1])i.push(wt(nn(.2,.12,.1,M*(o/2+.08),e.cabin[0][1]+.12,x-.1),ba));i.push(wt(nn(.52,.12,.02,0,d+.3,g+.06),15921906)),i.push(wt(nn(.52,.12,.02,0,d+.42,m-.06),15921906));let f=e.head,y=e.tail;for(let M of[-1,1])s.push(wt(nn(f.w,f.h,.06,M*f.x,f.y,f.z),16774880)),s.push(wt(nn(y.w,y.h,.06,M*y.x,y.y,y.z),16718352,.9));if(t.taxi&&i.push(wt(nn(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(wt(nn(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(wt(nn(1.6,.3,.05,0,2.55,5.92),16747024)),t.trolley)for(let M of[-1,1]){let w=new pt(.07,.07,5.6).rotateX(-.5).translate(M*.32,4.43,-2.4);i.push(wt(w,1710618)),i.push(wt(nn(.3,.25,.6,M*.32,3.2,.2),3355443))}let _=n1(e.wr,r==="bus"||r==="truck"?.32:.23),v=tf(e),R=Qe(v.map(([M,w,A])=>_.clone().translate(M,w,A))),E=Qe(n.map(M=>wt(M,16777215))),b=Qe([...i,R]),C=Qe(s);return{paint:E,detail:b,lights:C,wheel:_,wheelPos:v,spec:e,detailNoWheels:Qe(i)}}function tf(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function n1(r,t){let e=wt(new Nt(r,r,t,16).rotateZ(Math.PI/2),Qv),n=wt(new Nt(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),t1),i=wt(new Nt(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),e1),s=[];for(let o=0;o<5;o++){let a=new pt(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(wt(a,9080466))}return Qe([e,n,i,...s])}function Hh(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new be(t);return n.colorSpace=Ee,n.anisotropy=4,n}var Fh=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var Ea=class{constructor(t,e="sedan",n){this.scene=t,this.group=new Ot,this.body=new Ot,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(f=>{f.geometry&&f.geometry.dispose()});let n=Nn(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new Hi({color:i,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.06,vertexColors:!0,envMapIntensity:1.2});let s=new lt({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new lt({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new q(n.paint,this.paintMat);o.castShadow=!0;let a=new q(n.detailNoWheels,s);a.castShadow=!0,this.paintMesh=o,this.detailMesh=a,this.damage=0,this.dents=0,this.lightMesh=new q(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let l=n.spec;this.brakeMat=new le({color:16719888,transparent:!0,opacity:0,blending:Be,depthWrite:!1});for(let x of[-1,1]){let f=new q(new ve(l.tail.w*2.2,l.tail.h*4),this.brakeMat);f.position.set(x*l.tail.x,l.tail.y,l.tail.z-.06),f.rotation.y=Math.PI,this.body.add(f)}this.flareMat=new le({color:16773840,transparent:!0,opacity:0,blending:Be,depthWrite:!1});for(let x of[-1,1]){let f=new q(new Ni(.45,16),this.flareMat);f.position.set(x*l.head.x,l.head.y,l.head.z+.08),this.body.add(f)}this.plateText||(this.plateText="01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B");let c=Hh(this.plateText),h=new le({map:c});this.plateMat=h;let u=new q(new ve(.52,.12),h);u.position.set(0,l.body[0][1]+.3,l.head.z+.075);let p=new q(new ve(.52,.12),h);p.position.set(0,l.body[0][1]+.42,l.tail.z-.075),p.rotation.y=Math.PI,this.body.add(u,p);let d=new q(new ye(.13,10,8),new lt({color:2760736}));if(d.position.set(.38,l.cabin[0][1]+.38,(l.cabin[1][0]+l.cabin[2][0])/2+.25),this.body.add(d),this.wheels)for(let x of this.wheels)this.group.remove(x.pivot);this.wheels=[];let g=new lt({vertexColors:!0,roughness:.6,metalness:.3});this.wheelMat=g;for(let[x,f,y]of n.wheelPos){let _=new Ot;_.position.set(x,f,y);let v=new q(n.wheel,g);v.castShadow=!0,_.add(v),this.group.add(_),this.wheels.push({pivot:_,mesh:v,front:y>0})}this.flames=[];let m=new le({color:6728447,transparent:!0,opacity:.85,blending:Be,depthWrite:!1});for(let x of[-1,1]){let f=new q(new Un(.11,.9,10,1,!0).rotateX(-Math.PI/2).translate(0,0,-.45),m);f.position.set(x*l.W*.24,l.body[0][1]+.05,l.tail.z-.05),f.visible=!1,this.body.add(f),this.flames.push(f)}this.flameMat=m,this._applyCustom(),this.spot?(this.spot.position.set(0,.8,l.head.z),this.spotTarget.position.set(0,0,l.head.z+25)):(this.spot=new er(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,l.head.z),this.spotTarget=new Fe,this.spotTarget.position.set(0,0,l.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=l.mass,this.power=l.power*745.7,this.vmax=l.vmax/3.6,this.tank={sedan:60,hatch:45,suv:90,coupe:65,oldsedan:40,van:75,bus:200,truck:200}[t]||60,this.diesel=["van","bus","truck"].includes(t),(this.fuel===void 0||this.fuel>this.tank)&&(this.fuel=this.tank*.7),this.blinkMat=new le({color:16751120,transparent:!0,opacity:0}),this.blinkers={L:[],R:[]};for(let[x,f]of[["L",1],["R",-1]])for(let y of[l.head.z-.02,l.tail.z+.02]){let _=new q(new ye(.07,8,6),new le({color:16752672}));_.position.set(f*(l.W/2-.08),l.head.y,y),_.visible=!1,this.body.add(_),this.blinkers[x].push(_)}this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(l.L*l.L+l.W*l.W)/12*1.1,this.a=l.wb/2+(l.wbOff||0),this.b=l.wb/2-(l.wbOff||0),this.radius=l.W/2+.05,this.color=i}dent(t,e,n){let i=t-this.x,s=e-this.z,o=Math.cos(this.h),a=Math.sin(this.h),l=i*o-s*a,c=i*a+s*o,h=1.25,u=this.spec.roof[2][1];for(let p of[this.paintMesh,this.detailMesh]){let d=p.geometry.attributes.position;for(let g=0;g<d.count;g++){let m=d.getX(g),x=d.getY(g),f=d.getZ(g),y=Math.hypot(m-l,f-c);if(y>h||x>u+.1)continue;let _=Math.pow(1-y/h,2)*n,v=Math.hypot(m,f*.35)||1;d.setXYZ(g,m-m/v*_*.6-Math.sign(l)*0,x-_*.15*(x>.9?1:.3),f-Math.sign(f)*_*(Math.abs(c)>this.spec.L*.3?.5:.1))}d.needsUpdate=!0}this.dents++}repair(){this.setType(this.type,this.color)}_applyCustom(){let t=this.custom||(this.custom={}),e=this.spec;if(this.neon&&(this.group.remove(this.neon),this.neon=null),t.neon){let n=this._neonTex||(this._neonTex=(()=>{let i=document.createElement("canvas");i.width=i.height=128;let s=i.getContext("2d"),o=s.createRadialGradient(64,64,10,64,64,64);return o.addColorStop(0,"rgba(255,255,255,1)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,128,128),new be(i)})());this.neon=new q(new ve(e.W*1.9,e.L*1.35).rotateX(-Math.PI/2),new le({map:n,color:t.neon,transparent:!0,opacity:.9,blending:Be,depthWrite:!1})),this.neon.position.y=.14,this.neon.material.polygonOffset=!0,this.neon.material.polygonOffsetFactor=-8,this.neon.material.polygonOffsetUnits=-30,this.neon.renderOrder=2,this.group.add(this.neon)}if(this.spoiler&&(this.body.remove(this.spoiler),this.spoiler=null),t.spoiler&&!["van","bus","truck"].includes(this.type)){let n=new Ot,i=new q(new pt(e.W*.95,.05,.35),this.paintMat);i.position.set(0,.28,0),n.add(i);for(let o of[-1,1]){let a=new q(new pt(.05,.28,.12),new lt({color:1118481}));a.position.set(o*e.W*.3,.14,0),n.add(a)}let s=e.body.reduce((o,a)=>a[0]<e.L*-.3?Math.max(o,a[1]):o,.8);n.position.set(0,s,e.tail.z+.3),n.traverse(o=>o.castShadow=!0),this.body.add(n),this.spoiler=n}this.wheelMat&&this.wheelMat.color.setHex(t.rims??16777215)}setPlate(t){this.plateText=String(t).toUpperCase().slice(0,12),this.plateMat&&(this.plateMat.map.dispose(),this.plateMat.map=Hh(this.plateText),this.plateMat.needsUpdate=!0)}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let l=0;l<3;l++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=this.assists||(this.assists={abs:!0,tcs:!0,esc:!0,steerAssist:!0,sens:1,manual:!1}),a=Math.sin(this.h),l=Math.cos(this.h),c=-Math.cos(this.h),h=Math.sin(this.h),u=this.vx*a+this.vz*l,p=this.vx*c+this.vz*h,d=9.81,g=this.mass,m=Math.abs(u),x=this.surface??1,f=.6/(1+m/14)*(.75+.5*o.sens),y=-e.steer*f;o.steerAssist&&!e.hand&&m>6&&this.rearSlip&&(y+=Ie.clamp(this.rearSlip*.55,-.25,.25));let _=(e.steer===0?5.5:4.2)/(1+m/45);this.steer+=Ie.clamp(y-this.steer,-_*t,_*t);let v=this.steer,R=this._gearbox(e),E=0,b=(this.fuel??1)>0?e.throttle:0,C=e.brake;this.braking=!1,this.reversing=!1;let M=m<.6;C>0&&M?this.stopHold=(this.stopHold||0)+t:C===0&&(this.stopHold=0);let w=C>0&&(u<-.3||M&&this.stopHold>.2);this.nitro===void 0&&(this.nitro=1);let A=(.35+b*5.5+(this.boosting?8:0))*(this.diesel?.8:1)*(this.mass/1500)*12e-5*Math.max(1,Math.abs(u));if((b>0||Math.abs(u)>.5)&&(this.fuel=Math.max(0,(this.fuel??this.tank)-A*t*10)),this.boosting=!!(e.nitro&&this.nitro>.01&&b>0&&u>1&&this.fuel>0),this.boosting?(E+=g*5.2,this.nitro=Math.max(0,this.nitro-t*.2)):this.nitro=Math.min(1,this.nitro+t*.02),b>0){if(u<-.5)E+=1*g*d*b,this.braking=!0;else if(!this.limiter){let S=this.power*R/Math.max(3,u)*b,Y=(o.tcs?.92:1.15)*g*d*.6*x;!o.tcs&&S>Y&&m<25?this.wheelspin=Math.min(1,(S-Y)/Y):this.wheelspin=0,E+=Math.min(Y,S)}}else this.wheelspin=0;if(C>0){if(w)this.reversing=!0,u>-8&&(E-=g*3.4*C);else if(u>.3){let S=o.abs?1:1.12;E-=S*g*d*C*x,this.braking=!0,!o.abs&&C>.9&&m>4?this.locked=!0:this.locked=!1}}else this.locked=!1;e.hand&&(E-=Math.sign(u)*Math.min(Math.abs(u)*g*3,.55*g*d)),E-=this.drag*u*Math.abs(u)+(.015*g*d*Math.sign(u)+4*u)*Math.min(1,Math.abs(u))*(x<1?3.5:1),b===0&&C===0&&m<.4&&(u*=.85);let z=this.a,L=this.b,N=z+L,F=Ie.clamp(g*(this.accLong||0)*.55/N,-g*d*.3,g*d*.3),B=g*d*L/N-F,J=g*d*z/N+F,O=1.08*x,V=0,j=0;if(m>1.2){let S=Math.atan2(p-this.r*z,m)+v*Math.sign(u),Y=Math.atan2(p+this.r*L,m),nt=10*B,K=11*J,mt=Math.min(.9,Math.abs(E)/(O*(B+J))*(b>0?1.2:.6)),yt=Math.sqrt(1-mt*mt);e.hand&&(yt=.38),this.wheelspin&&(yt*=1-.5*this.wheelspin);let At=this.locked?.25:1,$t=O*B*At,ot=O*J*yt;V=-$t*Math.tanh(nt*S/$t),j=-ot*Math.tanh(K*Y/ot),this.rearSlip=Y,this.slip=Math.max(Math.abs(Y)*(e.hand?2.4:1.6),Math.abs(S)*.7,this.wheelspin*.8,this.locked?.6:0)*Math.min(1,m/8);let dt=-V*Math.cos(v)*z+j*L;if(this.r+=dt/this.inertia*t,this.r*=1-.8*t,o.esc&&!e.hand){let U=O*d/Math.max(m,4)*1.12;Math.abs(this.r)>U&&(this.r+=(Math.sign(this.r)*U-this.r)*Math.min(1,t*8)),Math.abs(Y)>.12&&(p*=1-Math.min(.5,t*2.5))}}else this.r=u*Math.tan(v)/N,p*=.5,this.slip=0,this.rearSlip=0;let it=V*Math.cos(v)+j;if(m<=1.2){let S=u+E/g*t;this.vx=a*S+c*p,this.vz=l*S+h*p,b===0&&!w&&Math.abs(S)<.2&&(this.vx=this.vz=0,this.r=0)}else{let S=u+E/g*t,Y=p+it/g*t;this.vx=a*S+c*Y,this.vz=l*S+h*Y}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=this.accLong===void 0?0:this.accLong+(E/g-this.accLong)*Math.min(1,t*10),this.accLat=it/g,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let ut=this.spec.L,xt={};for(let S of[ut*.32,0,-ut*.32]){let Y=this.x+Math.sin(this.h)*S,nt=this.z+Math.cos(this.h)*S;if(n.collide(Y,nt,this.radius,xt)){this.x+=xt.x,this.z+=xt.z;let K=this.vx*xt.nx+this.vz*xt.nz;K<0&&(this.vx-=xt.nx*K*1.25,this.vz-=xt.nz*K*1.25,this.vx*=.94,this.vz*=.94,this.r+=(S>0?1:-1)*K*.02*Math.sign(xt.nx*Math.cos(this.h)-xt.nz*Math.sin(this.h)),-K>2&&(s&&s(-K,"wall",null,Y-xt.nx*this.radius,nt-xt.nz*this.radius,xt.nx,xt.nz),this.damage=Math.min(100,this.damage+-K*.6)))}}i&&i.collidePlayer(this,s),this.remotes&&this.remotes.collide(this,s)}shiftUp(){this.gear<6&&(this.gear=Math.max(1,this.gear)+1,this.shiftT=.25)}shiftDown(){this.gear>1&&(this.gear--,this.shiftT=.2)}_gearbox(t){let e=Math.max(0,this.u||0),n=[0,3.6,2.2,1.55,1.18,.95,.78],i=3.6,s=this.spec.wr;this.gear>=1||(this.gear=1);let o=h=>e/s*n[h]*i*60/(2*Math.PI),a=o(this.gear);if(!(this.assists&&this.assists.manual)){let h=t.throttle>.5?6300:3800;a>h&&this.gear<6&&(this.gear++,this.shiftT=.18),a<2e3&&this.gear>1&&this.gear--,a=o(this.gear)}if(this.limiter=a>7200,this.rpmTarget=Math.min(7300,Math.max(900,a)),this.shiftT>0)return this.shiftT-=1/180,.25;let l=Math.min(1,a/6500),c=this.damage>=100?.3:1-this.damage/300;return(.72+.38*Math.sin(l*Math.PI))*c}setIndicator(t){this.indicator=this.indicator===t?null:t}_visual(t,e){let n=performance.now()%760<380;if(this.blinkers)for(let o of["L","R"]){let a=this.indicator===o||this.indicator==="H";for(let l of this.blinkers[o])l.visible=a&&n}if(this.indicator==="L"||this.indicator==="R"?(this._turnAcc=(this._turnAcc||0)+Math.abs(this.r||0)*t,this._turnAcc>1.2&&(this.indicator=null,this._turnAcc=0)):this._turnAcc=0,this.blinkOn=!!this.indicator&&n,this.flames){for(let o of this.flames)if(o.visible=!!this.boosting,o.visible){let a=.8+Math.random()*.5;o.scale.set(1,1,a)}}this.flameMat&&this.flameMat.color.setHex(Math.random()<.5?6728447:10079487),this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.gearLabel=this.reversing?"R":this.speed<.3&&!this.throttleOn?"N":String(this.gear);let i=Ie.clamp(-(this.accLong||0)*.006,-.05,.05),s=Ie.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((i-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((s-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let o of this.wheels)o.mesh.rotation.x=this.spin,o.front&&(o.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.75:this.night?.12:0,this.lightMat.emissiveIntensity=this.night?this.braking?1.6:.8:this.braking?1.2:.25,this.lightsOn=this.headMode==="on"||this.headMode!=="off"&&this.night,this.flareMat.opacity=this.lightsOn?.55:0,this.spot.intensity=this.lightsOn?60:0,this.slip>.22&&this.speed>6||this.wheelspin>.2&&this.speed>1?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new oe;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new ge(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new ge(n,1)),this.skidMesh=new q(e,new le({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],l=o-i,c=a-s,h=Math.hypot(l,c);if(h<.05||h>5)continue;let u=-c/h*.11,p=l/h*.11,d=this.skidI++%this.skidN,g=.075;this.skidPos.set([i-u,g,s-p,i+u,g,s+p,o-u,g,a-p,o+u,g,a+p],d*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new be(e);for(let s=0;s<160;s++){let o=new yn(new un({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},Sa=class{constructor(t){this.cam=t,this.mode=0,this.pos=new I(0,5,-10),this.look=new I,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,l,c,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,p=i*.7+h*.3,d=s*.7+u*.3,g=Math.atan2(p,d)+n,m=Math.sin(g),x=Math.cos(g),f=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let _=(this.mode===0?6.8:11)*f+o*.03,v=(this.mode===0?2.3:4)*f+a.cabin[1][1]*.4;l=new I(e.x-m*_,v,e.z-x*_),c=new I(e.x+i*4,1.1*f,e.z+s*4);let R=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(l,R)}else if(this.mode===2)l=new I(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),c=new I(e.x+i*30,1.2,e.z+s*30),this.pos.copy(l);else{this.lag+=t*.15;let _=this.lag;l=new I(e.x+Math.sin(_)*9,1.2+Math.sin(_*.7)*.6,e.z+Math.cos(_)*9),c=new I(e.x,.9,e.z),this.pos.lerp(l,1-Math.exp(-t*3))}this.look.lerp(c,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let y=(this.mode===2?(this.baseFov||62)+10:this.baseFov||62)+Math.min(16,o*.2);this.cam.fov+=(y-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var ef=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.04],["trolley",.04],["truck",.04]],nf=[3,6,4,2.2,.6,.15,.02],sf=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,Ta=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new lt({vertexColors:!0,metalness:.5,roughness:.35}),s=new lt({vertexColors:!0,metalness:.3,roughness:.3}),o=new le({vertexColors:!0});for(let[a]of ef){let l=Nn(a==="taxi"?"sedan":a==="trolley"?"bus":a,{taxi:a==="taxi",trolley:a==="trolley"}),c=200,h=new Se(l.paint,i,c),u=new Se(l.detail,s,c),p=new Se(l.lights,o,c);for(let d of[h,u,p])d.count=0,d.frustumCulled=!1,d.instanceMatrix.setUsage(rr),t.add(d);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new St),p.setColorAt(0,new St),this.models[a]={p:h,d:u,l:p,spec:l.spec,cap:c,n:0}}this._busStops(),this._signals(),this.M=new jt,this.Q=new ke,this.V=new I,this.S=new I(1,1,1),this.Y=new I(0,1,0),this.C=new St,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,l=>l.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new Se(Jd(),new lt({vertexColors:!0,roughness:.6}),e),i=new le({vertexColors:!0});this.lamps=[0,1,2].map(u=>new Se(jd(u),i,e));let s={},o=new jt,a=new ke,l=new I,c=new I(1,1,1),h=new I(0,1,0);t.forEach((u,p)=>{let d=u.e,g=d.w/2+.9;this.map.sample(d,u.dir,u.stop,g,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(l.set(s.x,.12,s.z),a,c),n.setMatrixAt(p,o);for(let m of this.lamps)m.setMatrixAt(p,o),m.setColorAt(p,new St(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new St(3,.15,.08),new St(.18,.03,.02)],s=[new St(3,1.6,.1),new St(.18,.12,.02)],o=[new St(.1,3,.8),new St(.02,.15,.06)];for(let a=0;a<n.length;a++){let l=n[a],c=this.map.signalState(l.cluster,l.group,e);this.lamps[0].setColorAt(a,c==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,c==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,c==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of ef)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=nf[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(sf.test(n[0])||sf.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),l=Math.floor(e/s),c=[],h=0;for(let u=a-o;u<=a+o;u++)for(let p=l-o;p<=l+o;p++){let d=this.map.chunks.get(Ge(u,p));if(d)for(let g of d.edges){if(g.cls>5)continue;let m=this._edgeWeight(g);m<=0||(c.push(g,m),h+=m)}}if(!h)return!1;for(let u=0;u<6;u++){let p=Math.random()*h,d=null;for(let M=0;M<c.length;M+=2)if(p-=c[M+1],p<=0){d=c[M];break}d||(d=c[0]);let g=d.ow||Math.random()<.5?0:1,m=Math.random()*d.len,x={};this.map.sample(d,g,m,0,x);let f=Math.hypot(x.x-t,x.z-e);if(f<n||f>i)continue;let y=Math.floor(Math.random()*d.lanes),_=d.id*2+g;if(this.cars.some(M=>M.de===_&&Math.abs(M.s-m)<12))continue;let v=this._pickType(),R=this.models[v];if(R.n>=R.cap)continue;R.n++;let E=zh[d.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="trolley"||v==="truck"?.85:1),b={type:v,spec:R.spec,e:d,dir:g,de:_,s:m,lane:v==="van"||v==="bus"||v==="trolley"?d.lanes-1:y,v:E*.7,v0:E,color:v==="van"?Math.random()<.8?16053492:15912992:v==="trolley"?Math.random()<.5?2779832:14212320:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:Fh[Math.floor(Math.random()*Fh.length)],x:x.x,z:x.z,h:Math.atan2(x.dx,x.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};b.next=this._chooseNext(b);let C={};return this.map.sample(d,g,m,this.map.laneOffset(d,b.lane),C),b.x=C.x,b.z=C.z,this.cars.push(b),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){if(t.convoy){let n=t.convoy;if(n.route.has(t.de))return n.route.get(t.de)}let e=this._chooseNext0(t);return t.convoy&&t.convoy.route.set(t.de,e),e}spawnConvoy(t,e,n,i){let s={route:new Map,cars:[],flag:i},o=Math.min(t.len-5,10+n.length*11);for(let[a,l]of n){let c=this.models[a];if(c.n>=c.cap)continue;c.n++;let h={};this.map.sample(t,e,o,this.map.laneOffset(t,t.lanes-1),h);let u={type:a,spec:c.spec,e:t,dir:e,de:t.id*2+e,s:o,lane:t.lanes-1,v:6,v0:9,color:l,x:h.x,z:h.z,h:Math.atan2(h.dx,h.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:1,convoy:s,[i]:!0};if(u.next=this._chooseNext(u),this.cars.push(u),s.cars.push(u),o-=11,o<1)break}return s}_chooseNext0(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let l=this.map.edges[a>>1];if(l.cls>5)continue;let c={};this.map.sample(l,a&1,.5,0,c);let h=n.dx*c.dx+n.dz*c.dz,u=(h>.7?4:h>-.3?1:.15)*(nf[l.cls]+.2);l.cls===5&&(u*=.2),(t.type==="bus"||t.type==="trolley"||t.type==="truck")&&(u*=l.cls<=2?3:.2),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),l=0;for(;this.cars.length<a&&l<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)l++;for(let m=this.cars.length-1;m>=0;m--){let x=this.cars[m];(Math.abs(x.x-s)>(x.convoy?1400:760)||Math.abs(x.z-o)>(x.convoy?1400:760))&&this._remove(m)}let c=new Map;for(let m of this.cars){let x=c.get(m.de);x||c.set(m.de,x=[]),x.push(m)}for(let m of c.values())m.sort((x,f)=>x.s-f.s);let h=Math.sin(e.h),u=Math.cos(e.h),p=e.speed,d=e.spec.L;this.honks.length=0;let g=this.map;for(let m of this.cars){let x=m.e,f=x.len,y=m.spec.L,_=1e9,v=0,R=c.get(m.de);for(let S=0;S<R.length;S++){let Y=R[S];if(Y===m||Y.s<=m.s||Y.lane!==m.lane)continue;let nt=Y.s-m.s-(Y.spec.L+y)/2;nt<_&&(_=nt,v=Y.v);break}if(_>200&&m.next>=0){let S=c.get(m.next);if(S&&S.length){let Y=S[0],nt=f-m.s+Y.s-(Y.spec.L+y)/2;nt<_&&(_=nt,v=Y.v)}}m.redAhead=!1;for(let S of x.signals){if(S.dir!==m.dir)continue;let Y=S.stop-m.s;if(Y<-.5||Y>120)continue;let nt=g.signalState(S.cluster,S.group,this.time);if(nt==="R"||nt==="Y"&&Y>m.v*m.v/7+2){let K=Y-y/2;K<_&&(_=Math.max(.01,K),v=0,m.redAhead=!0)}}if((m.type==="van"||m.type==="bus"||m.type==="trolley")&&m.stopT<=0){let S=this.stopsOn.get(m.de);if(S)for(let Y of S){let nt=Y-m.s;if(nt>0&&nt<60&&m.servedStop!==m.de*1e4+Math.round(Y)){let K=nt-y/2+1.5;K<_&&(_=Math.max(.01,K),v=0),nt<y/2+1.5&&m.v<.5&&(m.stopT=6+Math.random()*8,m.servedStop=m.de*1e4+Math.round(Y))}}}m.stopT>0&&(m.stopT-=t,_=.01,v=0);let E=Math.sin(m.h),b=Math.cos(m.h);{let S=s-m.x,Y=o-m.z,nt=S*E+Y*b,K=Math.abs(S*b-Y*E);if(nt>0&&nt<45&&K<2.2){let mt=nt-(d+y)/2;mt<_&&(_=Math.max(.01,mt),v=Math.max(0,p*(h*E+u*b)),m.playerBlock=!0)}else m.playerBlock=!1}if(n)for(let S of n.crossers){let Y=S.x-m.x,nt=S.z-m.z,K=Y*E+nt*b,mt=Math.abs(Y*b-nt*E);if(K>0&&K<30&&mt<2.6){let yt=K-y/2-1.5;yt<_&&(_=Math.max(.01,yt),v=0)}}let C=i||this.obstacles;if(C)for(let S of C){let Y=S.x-m.x,nt=S.z-m.z,K=Y*E+nt*b,mt=Math.abs(Y*b-nt*E);if(K>0&&K<40&&mt<S.r){let yt=K-y/2-S.r;yt<_&&(_=Math.max(.01,yt),v=0),K<25&&m.e.lanes>1&&(m.mergeT=(m.mergeT||0)+t)>1.5&&(m.lane=(m.lane+1)%m.e.lanes,m.mergeT=-3,m.transit=!0)}}let M=m.v0;if(f-m.s<25&&m.next>=0){let S=g.edges[m.next>>1],Y={},nt={};g.sample(x,m.dir,f-.5,0,Y),g.sample(S,m.next&1,.5,0,nt);let K=Y.dx*nt.dx+Y.dz*nt.dz;K<.8&&(M=Math.min(M,4+8*Math.max(0,K+.2)))}if(m.bump>0&&(m.bump-=t,M=0),m.wrecked){m.v=0,m.brake=!1;continue}let A=1.6*m.aggr,z=2.5,L=2.2,N=1.3/m.aggr,F=m.v-v,B=L+Math.max(0,m.v*N+m.v*F/(2*Math.sqrt(A*z))),J=A*(1-Math.pow(m.v/Math.max(.1,M),4)-(_<1e8?Math.pow(B/Math.max(.1,_),2):0));for(J=Math.max(-9,J),m.brake=J<-.6||m.v<.3,m.v=Math.max(0,m.v+J*t),_<.3&&m.v>0&&(m.v=Math.min(m.v,.2)),m.s+=m.v*t,m.playerBlock&&m.v<.3&&e.speed<1?(m.wait+=t,m.wait>3.5&&Math.random()<t*.6&&this.honks.push(m)):m.wait=Math.max(0,m.wait-t);m.s>=m.e.len;){if(m.next<0){m.dead=!0;break}m.s-=m.e.len,m.de=m.next,m.e=g.edges[m.de>>1],m.dir=m.de&1,m.lane=m.type==="van"||m.type==="bus"||m.type==="trolley"?m.e.lanes-1:Math.min(m.e.lanes-1,Math.floor(Math.random()*m.e.lanes)),m.v0=m.convoy?9:zh[m.e.cls]*(.85+Math.random()*.3)*(m.type==="bus"||m.type==="trolley"||m.type==="truck"?.85:1),m.next=this._chooseNext(m),m.transit=!0}let O=this._o||(this._o={});g.sample(m.e,m.dir,Math.min(m.s,m.e.len),g.laneOffset(m.e,m.lane),O),m.transit&&(m.ex=m.x-O.x,m.ez=m.z-O.z,m.transit=!1,Math.hypot(m.ex,m.ez)>12&&(m.ex=m.ez=0));let V=Math.exp(-t*2.5);m.ex*=V,m.ez*=V;let j=O.x+m.ex,it=O.z+m.ez,ut=j-m.x,xt=it-m.z;if(ut*ut+xt*xt>1e-4){let Y=Math.atan2(ut,xt)-m.h;Y=Math.atan2(Math.sin(Y),Math.cos(Y)),m.h+=Y*Math.min(1,t*10)}m.x=j,m.z=it}for(let m=this.cars.length-1;m>=0;m--)this.cars[m].dead&&this._remove(m);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let l in this.models)this.models[l]._i=0;let a=this.night>.5?1.6:.45;for(let l of this.cars){let c=this.models[l.type],h=c._i++;l.wrecked?(this._E=this._E||new en,this._E.set(0,l.h+l.wreckYaw,l.wreckRoll,"YXZ"),e.setFromEuler(this._E)):e.setFromAxisAngle(s,l.h),t.compose(n.set(l.x,.03,l.z),e,i),c.p.setMatrixAt(h,t),c.d.setMatrixAt(h,t),c.l.setMatrixAt(h,t),c.p.setColorAt(h,o.setHex(l.color)),l.wrecked?o.multiplyScalar(.45):l.hp<100&&o.multiplyScalar(.75+.25*l.hp/100),(l.wrecked||l.hp<100)&&c.p.setColorAt(h,o);let u=l.wrecked&&performance.now()%1e3<500,p=l.wrecked?u?1.6:.1:l.brake?Math.max(a,1.4):a;c.l.setColorAt(h,o.setRGB(p,p,p))}for(let l in this.models){let c=this.models[l];c.p.count=c.d.count=c.l.count=c._i,c.p.instanceMatrix.needsUpdate=c.d.instanceMatrix.needsUpdate=c.l.instanceMatrix.needsUpdate=!0,c.p.instanceColor&&(c.p.instanceColor.needsUpdate=!0),c.l.instanceColor&&(c.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,l=o.z-t.z;if(a*a+l*l>120)continue;let c=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(c/2.2));for(let p=0;p<u;p++){let d=(p/(u-1)-.5)*(c-h*2),g=o.x+Math.sin(o.h)*d,m=o.z+Math.cos(o.h)*d;for(let[x,f]of i){let y=x-g,_=f-m,v=Math.hypot(y,_),R=s+h;if(v<R&&v>1e-4){let E=y/v,b=_/v,C=R-v;t.x+=E*C,t.z+=b*C;let M=t.vx-Math.sin(o.h)*o.v,w=t.vz-Math.cos(o.h)*o.v,A=M*E+w*b;if(A<0){if(t.vx-=E*A*1.25,t.vz-=b*A*1.25,-A>1.5){o.hp=(o.hp??100)- -A*9;let z=o.hp<=0&&!o.wrecked;z&&(o.wrecked=!0,o.wreckRoll=(Math.random()-.5)*.12,o.wreckYaw=(Math.random()-.5)*.6),e&&e(-A,"car",o,g+E*h,m+b*h,-E,-b,z),t.damage=Math.min(100,t.damage+-A*.6)}o.bump=o.wrecked?1e9:2.5+Math.random()*2,o.v*=.3,o.wait=4}}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var rf=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],of=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],af=[14200976,13146744,14728864,12094056,13673602],lf=[1709072,2760728,920586,4864040,6974058],i1=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],Aa=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let l=new Se(o,a,this.N);return l.count=0,l.frustumCulled=!1,l.castShadow=!0,l.instanceMatrix.setUsage(rr),t.add(l),l},i=new lt({roughness:.85}),s=16777215;this.torso=n(wt(new pt(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(wt(new pt(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(wt(new ye(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(wt(new ye(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(wt(new pt(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(wt(new pt(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(wt(new pt(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(wt(new pt(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(Qe([wt(new Nt(.06,.13,.26,8).translate(0,1.88,0),15921126),wt(new Nt(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new lt({vertexColors:!0,roughness:.9})),this.bag=n(wt(new pt(.38,.55,.22).translate(0,.32,0),s),i),this.M=new jt,this.M2=new jt,this.Q=new ke,this.V=new I,this.S=new I(1,1,1),this.E=new en,this.C=new St,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=rf[Math.floor(e()*rf.length)],t.pants=of[Math.floor(e()*of.length)],t.skin=af[Math.floor(e()*af.length)],t.hairC=lf[Math.floor(e()*lf.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let l=s-i;l<=s+i;l++)for(let c=o-i;c<=o+i;c++){let h=this.map.chunks.get(Ge(l,c));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let l=0;l<5;l++){let c=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,p=Math.random()*c.len,d={};this.map.sample(c,u,p,(c.w/2+1.4)*h,d);let g=Math.hypot(d.x-t,d.z-e);if(g<30||g>330||this.map.insideBuilding(d.x,d.z,.3))continue;let m={mode:"walk",e:c,dir:u,s:p,side:h,x:d.x,z:d.z,h:Math.atan2(d.dx,d.dz),ex:0,ez:0,dodge:0};return this._style(m),m}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let l={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(l),l}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let g=i-1;g<=i+1;g++)for(let m=s-1;m<=s+1;m++){let x=this.map.chunks.get(Ge(g,m));if(x)for(let f of x.crossings){let y=Math.hypot(f[0]-t,f[1]-e);y>40&&y<220&&o.push(f)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],l=this.map.nearestRoad(a[0],a[1],4);if(!l||l.e.cls>4||l.e.w<5)return null;let c=Math.random()<.5?1:-1,h=l.e.w/2+1.2,u=-l.dz,p=l.dx,d={mode:"cross",x:l.x+u*h*c,z:l.z+p*h*c,tx:l.x-u*h*c,tz:l.z-p*h*c,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return d.h=Math.atan2(d.tx-d.x,d.tz-d.z),this._style(d),d.speed=1.4,d}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=i1.concat(this.extraZones);for(let g of a){let m=Math.hypot(g.x-i,g.z-s);if(g.active=m<420,!g.active)continue;g.count=g.count||0;let x=3;for(;g.count<g.n&&x-- >0&&o.length<this.N-5;){let f=this._spawnPlaza(g);f&&(o.push(f),g.count++)}}let l=0;for(let g of o)g.mode==="walk"&&l++;let c=l<this.target*.5?30:3;for(;l<this.target&&c-- >0&&o.length<this.N-30;){let g=this._spawnWalker(i,s);g&&(o.push(g),l++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let g=this._spawnCrosser(i,s);g&&o.push(g)}let h=Math.sin(e.h),u=Math.cos(e.h),p=e.speed;this.crossers.length=0;let d={};for(let g=o.length-1;g>=0;g--){let m=o[g];if((Math.abs(m.x-i)>380||Math.abs(m.z-s)>380)&&m.mode!=="plaza"){o[g]=o[o.length-1],o.pop();continue}if(m.mode==="plaza"&&!m.zone.active){m.zone.count--,o[g]=o[o.length-1],o.pop();continue}let f=!1;if(m.mode==="walk"){if(m.s+=m.speed*t,m.s>m.e.len){let M=m.dir?m.e.na:m.e.nb,w=[];for(let A of M.out){let z=this.map.edges[A>>1];z!==m.e&&z.cls>=1&&z.cls<=4&&z.w>=5&&w.push(A)}if(!M.out.length||!w.length)m.dir^=1,m.s=0,m.side=-m.side;else{let A=w[Math.floor(Math.random()*w.length)];m.e=this.map.edges[A>>1],m.dir=A&1,m.s=0,m.trans=!0}}this.map.sample(m.e,m.dir,m.s,(m.e.w/2+1.4)*m.side,d),m.trans&&(m.ex=m.x-d.x-m.ex*0,m.ez=m.z-d.z,m.trans=!1,Math.hypot(m.ex,m.ez)>25&&(m.ex=m.ez=0)),m.ex*=Math.exp(-t*.8),m.ez*=Math.exp(-t*.8);let b=d.x+m.ex,C=d.z+m.ez;m.h=Oh(m.h,Math.atan2(b-m.x,C-m.z),t*6),m.x=b,m.z=C,f=!0}else if(m.mode==="plaza")if(m.idle>0)m.idle-=t;else{let b=m.tx-m.x,C=m.tz-m.z,M=Math.hypot(b,C);if(M<.5){m.idle=1+Math.random()*6;let w=m.zone;for(let A=0;A<6;A++){let z=Math.random()*6.28,L=Math.sqrt(Math.random())*w.r,N=w.x+Math.cos(z)*L,F=w.z+Math.sin(z)*L;if(!this.map.insideBuilding(N,F,.6)){let B=this.map.nearestRoad(N,F,8);if(!B||B.dist>B.e.w/2+.5){m.tx=N,m.tz=F;break}}}}else{let w=Math.min(M,m.speed*.85*t);m.x+=b/M*w,m.z+=C/M*w,m.h=Oh(m.h,Math.atan2(b,C),t*5),f=!0}}else if(m.mode==="cross")if(m.wait>0)m.wait-=t;else{let b=m.tx-m.x,C=m.tz-m.z,M=Math.hypot(b,C);if(M<.3){o[g]=o[o.length-1],o.pop();continue}let w=Math.min(M,m.speed*t);m.x+=b/M*w,m.z+=C/M*w,f=!0,m.h=Oh(m.h,Math.atan2(b,C),t*6),this.crossers.push(m)}let y=m.x-i,_=m.z-s,v=y*h+_*u,R=y*u-_*h;if(!m.fixed&&p>2.5&&v>-1&&v<4+p*.45&&Math.abs(R)<2.4&&m.dodge<=0&&(m.dodge=.9,m.dside=R>=0?1:-1,m.scream=!0),m.dodge>0){m.dodge-=t;let b=5.5*t;m.x+=u*m.dside*b,m.z+=-h*m.dside*b,m.mode==="walk"&&(m.ex+=u*m.dside*b,m.ez+=-h*m.dside*b),f=!0}let E=Math.hypot(y,_);if(!m.fixed&&E<2.2&&E>.01){let b=2.2-E;m.x+=y/E*b,m.z+=_/E*b,m.mode==="walk"&&(m.ex+=y/E*b,m.ez+=_/E*b)}m.moving=f,m.phase+=t*(f?m.dodge>0?14:m.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,l=this.list,c=Math.min(l.length,this.N),h=0,u=0;for(let p=0;p<c;p++){let d=l[p],g=d.moving?Math.sin(d.phase):0,m=d.moving?Math.abs(Math.cos(d.phase))*.04:0,x=d.scale;n.setFromAxisAngle(i.set(0,1,0),d.h),t.compose(i.set(d.x,.15+m,d.z),n,s.set(x,x,x)),this.torso.setMatrixAt(p,t),this.hips.setMatrixAt(p,t),this.head.setMatrixAt(p,t),this.hair.setMatrixAt(p,t),this.torso.setColorAt(p,a.setHex(d.shirt)),this.hips.setColorAt(p,a.setHex(d.pants)),this.head.setColorAt(p,a.setHex(d.skin)),this.hair.setColorAt(p,a.setHex(d.hairC));let f=g*.55,y=-g*.5,_=d.dodge>0?2.6:0;Ra(this.legL,p,t,e,o,.1,.92,0,f,a.setHex(d.pants)),Ra(this.legR,p,t,e,o,-.1,.92,0,-f,a),Ra(this.armL,p,t,e,o,.26,1.5,0,y-_,a.setHex(d.shirt)),Ra(this.armR,p,t,e,o,-.26,1.5,0,d.wave?-2.7+Math.sin(performance.now()*.008)*.35:-y-_,a),d.kalpak&&this.kalpak.setMatrixAt(h++,t),d.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(d.shirt===1842206?9050650:1846332)),u++)}for(let p of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])p.count=c,p.instanceMatrix.needsUpdate=!0,p.instanceColor&&(p.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function Ra(r,t,e,n,i,s,o,a,l,c){n.makeRotationX(l),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,c)}function Oh(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var cf=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],Ca=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function s1(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],l=26;for(let z=0;z<=l;z++){let L=z/l,N=-n/2+L*n,F;L<.1?F=i*Math.sqrt(1-Math.pow(1-L/.1,2))*.98+.02:L>.72?F=i*(1-Math.pow((L-.72)/.28,1.6)*.82):F=i,a.push(new tt(Math.max(.05,F),N))}let c=new ia(a,24).rotateX(Math.PI/2);c.rotateY(Math.PI),s.push(wt(c,r.body)),s.push(wt(new pt(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(wt(new pt(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(wt(new pt(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new qn,u=17*e,p=6.5*e,d=1.6*e,g=7*e;h.moveTo(0,p/2),h.lineTo(u,p/2-g),h.lineTo(u,p/2-g-d),h.lineTo(0,-p/2),h.closePath();let m=new ei(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),x=m.clone().translate(i*.4,0,-n*.02),f=m.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);x.rotateZ(.06),f.rotateZ(-.06),s.push(wt(x,13159634),wt(f,13159634));for(let z of[-1,1])s.push(wt(new pt(.2,2.2*e,1.4*e).translate(z*(u+i*.4),.6*e,-n*.02-g-.4*e),r.tail));for(let z of[-1,1])for(let L of t?[.33,.62]:[.36]){let N=z*(i*.4+u*L),F=-n*.02+p/2-g*L+2.6*e;s.push(wt(new Nt(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(N,-1.9*e,F),14211806)),s.push(wt(new Nt(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(N,-1.9*e,F+2.12*e),2105376)),s.push(wt(new pt(.3,1.2*e,2.5*e).translate(N,-1.2*e,F-.5*e),13159634))}let y=new qn;y.moveTo(0,0),y.lineTo(5.2*e,0),y.lineTo(1.8*e,7.2*e),y.lineTo(-.6*e,7.2*e),y.closePath();let _=new ei(y,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(wt(_,r.tail));let v=new qn;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let R=new ei(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(wt(R.clone(),13159634),wt(R.clone().scale(-1,1,1),13159634));let E=Qe(s),b=[],C=2.45*e,M=(z,L)=>[wt(new Nt(.13*e,.13*e,C,6).translate(z,-C/2-i*.6,L),10132122),wt(new Nt(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(z,-C-i*.6+0,L),1381653)];b.push(...M(0,n*.36));for(let z of[-1,1])b.push(...M(z*2.9*e,-n*.06),...M(z*3.5*e,-n*.06));let w=Qe(b),A=C+i*.6+.55*e;return{body:E,gear:w,groundY:A,len:n,span:u+i*.4,S:e}}function $r(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let l=new be(o);return l.colorSpace=Ee,l.anisotropy=8,l}var Pa=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new Ot,t.add(this.group);let i=e.runways.sort((u,p)=>p.length-u.length)[0],s=i.length/2,o=new tt(i[0],i[1]),a=new tt(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new tt(-this.u.y,this.u.x),this.rwW=55;let l=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=l,this.tc=l?new tt(l.cx,l.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let c=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(c.x,c.y,200,u=>u.cls<=6);this.dropoff=h?new tt(h.x,h.z):c,this._zoneMarker(),this.goAround=!1}rel(t){let e=new tt(t.x-this.R0.x,t.y-this.R0.y);return new tt(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new ve(t,e+14,1,1).rotateX(-Math.PI/2),i=new lt({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new q(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,l,c]of[["07",70,0],["25",t-70,Math.PI]]){let h=$r(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new q(new ve(18,18),new lt({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let p=this.at(l,0),d=new Ot;d.add(u),d.position.set(p.x,.05,p.y),d.rotation.y=this.heading+c+Math.PI,this.group.add(d)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let d=0;d<=n;d+=60)for(let g of[-1,1])t.push(this.at(d,g*i)),e.push(d>n-600?[1,.6,.2]:[1,.95,.8]);for(let d=-i;d<=i;d+=3)t.push(this.at(-1,d)),e.push([.2,1,.3]),t.push(this.at(n+1,d)),e.push([1,.1,.1]);for(let d=30;d<n;d+=30)t.push(this.at(d,0)),e.push(d>n-900?Math.floor(d/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let d of this.map.taxiways){let g=d.pts;for(let m=0;m<g.length/2-1;m++){let x=g[m*2],f=g[m*2+1],y=g[m*2+2],_=g[m*2+3],v=Math.hypot(y-x,_-f),R=-(_-f)/v,E=(y-x)/v;for(let b=0;b<v;b+=45)for(let C of[-1,1])t.push(new tt(x+(y-x)*b/v+R*C*(d.w/2+1),f+(_-f)*b/v+E*C*(d.w/2+1))),e.push([.15,.35,1])}}let s=new ye(.28,6,4),o=new le({color:16777215});this.rwLights=new Se(s,o,t.length);let a=new jt,l=new St;t.forEach((d,g)=>{a.makeTranslation(d.x,.35,d.y),this.rwLights.setMatrixAt(g,a),this.rwLights.setColorAt(g,l.setRGB(...e[g]))}),this.rwLightCols=e,this.group.add(this.rwLights);let c=[];for(let d=1;d<=30;d++)c.push(this.at(-d*30,0));let h=[];for(let d=1;d<=30;d++)for(let g=-6;g<=6;g+=2)h.push(this.at(-d*30,g));this.alsBars=new Se(new ye(.3,6,4),new le({color:16773312}),h.length),h.forEach((d,g)=>{a.makeTranslation(d.x,1.2,d.y),this.alsBars.setMatrixAt(g,a)}),this.group.add(this.alsBars);let u=new Nt(.08,.08,1.2,4).translate(0,.6,0),p=new Se(u,new lt({color:7829367}),c.length);c.forEach((d,g)=>{a.makeTranslation(d.x,0,d.y),p.setMatrixAt(g,a)}),this.group.add(p),this.rabbit=new Se(new ye(.9,8,6),new le({color:16777215,transparent:!0,opacity:1,blending:Be,depthWrite:!1}),c.length),c.forEach((d,g)=>{a.makeTranslation(d.x,1.4,d.y),this.rabbit.setMatrixAt(g,a),this.rabbit.setColorAt(g,l.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=c.length,this.papi=[];for(let d=0;d<4;d++){let g=this.at(400,-(this.rwW/2+15+d*9)),m=new q(new pt(2,1,1.2),new le({color:16719904}));m.position.set(g.x,.6,g.y),this.group.add(m),this.papi.push(m)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new Ot,n=new lt({color:14736596,roughness:.7}),i=new q(new Nt(3.2,4.2,38,16),n);i.position.y=19;let s=new q(new pt(18,8,14),n);s.position.y=4;let o=new q(new Nt(7.5,4.5,4,8),n);o.position.y=39.5;let a=new q(new Nt(8,7.2,5,8),new lt({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let l=new q(new Nt(8.6,8.6,1,8),n);l.position.y=47;let c=new q(new Nt(.15,.15,9,5),new lt({color:13378082}));c.position.y=52,this.beacon=new q(new ye(.6,8,6),new le({color:16719904})),this.beacon.position.y=57,this.radar=new q(new pt(7,1.6,.4),new lt({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,l,c,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=$r("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new le({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new q(new ve(90,7),n),s=null,o=-1e9,a=t.pts;for(let c=0;c<a.length/2;c++){let h=(a[c*2]-t.cx)*this.n.x+(a[c*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=c)}let l=new tt(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(l.x,t.h+4.5,l.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new tt(e[0],e[1]),i=new tt(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(c=>c.p.distanceTo(s)<48))continue;let l=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:l,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new tt(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new Bi(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new le({color:4245759,transparent:!0,opacity:.8,side:we,depthWrite:!1}),this.zone=new q(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new q(new Nt(4.8,4.8,14,32,1,!0),new le({color:4245759,transparent:!0,opacity:.12,side:we,depthWrite:!1,blending:Be}));e.position.y=7,this.zone.add(e);let n=new yn(new un({map:$r("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new tt(s.x,s.z):i,this.spotZone=new q(t.clone(),new le({color:16756768,transparent:!0,opacity:.8,side:we,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new yn(new un({map:$r("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=cf[Math.floor(Math.random()*cf.length)],n=Math.random()<t,i=s1(e,n),s=new lt({vertexColors:!0,metalness:.35,roughness:.35}),o=new Ot,a=new q(i.body,s);a.castShadow=!0;let l=new q(i.gear,s);l.castShadow=!0;let c=new Ot;c.add(a,l),o.add(c);let h=(_,v)=>new q(new ye(v,6,4),new le({color:_,transparent:!0,blending:Be,depthWrite:!1})),u=h(16719904,.5),p=h(2162496,.5),d=h(16777215,.9),g=h(16777215,.9),m=h(16723984,.6),x=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),p.position.set(i.span,-.4,-i.len*.02-7.4*i.S),d.position.copy(u.position),g.position.copy(p.position),m.position.set(0,2.1*i.S,-i.len*.1),x.position.set(0,-1.2*i.S,i.len*.42),c.add(u,p,d,g,m,x);let f=$r(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let _ of[-1,1]){let v=new q(new ve(3.4*i.S,1.7*i.S),new le({map:f,transparent:!0}));v.position.set(_*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=_*Math.PI/2,c.add(v)}this.group.add(o);let y={g:o,inner:c,gear:l,a:i,al:e,wide:n,navR:u,navG:p,strL:d,strR:g,bcn:m,land:x,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:Ca[Math.floor(Math.random()*Ca.length)],gearDown:1,thrust:0};return this.planes.push(y),y}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new tt(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),c=Math.atan2(s,o)-t.h;c=Math.atan2(Math.sin(c),Math.cos(c));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(c)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=Ie.clamp(c,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new tt(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let l=s*2%1,c=new St;for(let u=0;u<this.alsN;u++){let p=Math.abs((1-l)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,c.setRGB(p,p,p))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,p)=>u.material.color.setHex(p<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(d=>["approach","landing","takeoff","lineup"].includes(d.state)&&!d.cine),p=this._freeStand();if(!u&&p&&this.planes.filter(d=>!d.cine).length<9){let d=this._newPlane();this._startApproach(d)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let p=this.planes[u];if(p!==i){if(this._updatePlane(p,t,h),p.dead){this.group.remove(p.g),this.planes.splice(u,1);continue}this._pose(p,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new tt(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new tt(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new tt(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-Ie.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new tt(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(l=>l.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=Ca[Math.floor(Math.random()*Ca.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new tt(Math.sin(i.h),Math.cos(i.h)),o=new tt(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=Nn(s,{}),l=new lt({color:o,vertexColors:!0,roughness:.5}),c=new Ot;c.add(new q(a.paint,l),new q(a.detail,new lt({vertexColors:!0})));let h=new q(new ye(.2,6,4),new le({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,c.add(h),c.scale.setScalar(s==="truck"?.75:1),c.children.forEach(u=>u.castShadow=!0),this.group.add(c),this.vehicles.push({g:c,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let l=Math.atan2(i,s)-e.h;l=Math.atan2(Math.sin(l),Math.cos(l)),e.h+=Ie.clamp(l,-t*1.5,t*1.5);let c=Math.abs(l)>.6?2:5;e.x+=Math.sin(e.h)*c*t,e.z+=Math.cos(e.h)*c*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,l)=>new I(a.x,l,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new I(-3500,520,-9e3),new I(-900,430,-2600),new I(150,380,0),new I(1400,390,1600),new I(400,420,4200),new I(-3e3,480,4e3),new I(-6200,560,-1500),new I(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new Fr(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new tt(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new tt(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),l=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let c=Math.atan2(a.x,a.z),h=Math.atan2(l.x*a.z-l.z*a.x,l.x*a.x+l.z*a.z);n.h=c,n.roll+=(Ie.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(Ie.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),l=s.a.S;if(e===0)n.set(s.x-o*70*l,s.y+16*l,s.z-a*70*l),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let c=-a,h=o;n.set(s.x-c*2.3*l+o*2,s.y+.6*l,s.z-h*2.3*l+a*2),i.set(s.x-c*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*l,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new I(s.x,s.y,s.z))>1600)&&(t.camAnchor=new I(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function hf(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new be(r);return i.colorSpace=Ee,i.anisotropy=8,i}var Gh=()=>new lt({color:6965800,metalness:.85,roughness:.38}),cr=(r=10127994)=>new lt({color:r,roughness:.75}),Ia=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new Ot,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179),this._whiteHouse(),this._ordo()}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new q(new Nt(.22,.45,45,12),new lt({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new q(new Nt(3.5,4,1.2,24),cr(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new q(new ye(.5,12,8),new lt({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,l=new ve(o,a,40,16).translate(o/2,0,0),c=new lt({map:hf(),side:we,roughness:.75});c.onBeforeCompile=d=>{d.uniforms.uTime=rn.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new q(l,c);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new lt({color:2767402,roughness:.6}),p=new lt({color:13146744});for(let d of[-1,1]){let g=new Ot,m=new q(new pt(.45,1.05,.28),u);m.position.y=1.35;let x=new q(new pt(.38,.85,.24),u);x.position.y=.42;let f=new q(new ye(.12,10,8),p);f.position.y=2;let y=new q(new Nt(.16,.13,.12,10),new lt({color:1976862}));y.position.y=2.12;let _=new q(new pt(.05,1.2,.05),new lt({color:2759184}));_.position.set(.3,1.5,.1),g.add(m,x,f,y,_),g.children.forEach(v=>v.castShadow=!0),g.position.set(t+d*5,1.2,e+3.5),this.g.add(g),this.anim.push({type:"guard",g,base:g.position.clone(),s:d})}}_manas(t,e,n,i=1){let s=new Ot,o=new q(new Nt(3.2,3.8,9,8),cr(9075824));o.position.y=4.5;let a=new q(new Nt(6,6.5,1,16),cr(10524808));a.position.y=.5;let l=Gh(),c=new Ot,h=new q(new ye(1,16,12),l);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new q(new Nt(.55,.8,2.2,10),l);u.position.set(0,4.3,1.9),u.rotation.x=.7;let p=new q(new pt(.7,.75,1.6),l);p.position.set(0,5.2,2.8),p.rotation.x=.5;let d=new q(new Un(.35,2.2,8),l);d.position.set(0,2.6,-2.5),d.rotation.x=-.6,c.add(h,u,p,d);for(let[E,b,C]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let M=new q(new Nt(.2,.16,2.4,8).translate(0,-1.2,0),l);M.position.set(E,2.7,b),M.rotation.x=C,c.add(M)}c.rotation.x=-.32,c.position.y=.4;let g=new Ot,m=new q(new Nt(.55,.7,1.9,10),l);m.position.y=5;let x=new q(new ye(.42,12,10),l);x.position.y=6.3;let f=new q(new Un(.45,.8,10),l);f.position.y=6.8;let y=new q(new Nt(.16,.16,1.8,8).translate(0,.9,0),l);y.position.set(.6,5.6,0),y.rotation.z=-.5;let _=new q(new pt(.08,2.4,.18).translate(0,1.2,0),new lt({color:10518608,metalness:1,roughness:.25}));_.position.set(1.4,7.1,0),_.rotation.z=-.3;let v=new q(new pt(1.5,1.8,.1),l);v.position.set(0,4.8,-.7),v.rotation.x=.5,g.add(m,x,f,y,_,v);let R=new Ot;R.add(c,g),R.position.y=9,s.add(o,a,R),s.traverse(E=>{E.isMesh&&(E.castShadow=!0,E.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new Ot,i=new lt({color:8008488,roughness:.55,metalness:.1}),s=new q(new Nt(15,16,1.2,36),cr(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let p=u/3*Math.PI*2,d=new I(Math.cos(p)*12,1,Math.sin(p)*12),g=new I(Math.cos(p)*9,15,Math.sin(p)*9),m=new I(Math.cos(p)*2.5,21,Math.sin(p)*2.5),x=new Ks(d,g,m),f=new q(new sa(x,24,1.1,6,!1),i);n.add(f)}let o=new q(new Yn(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new q(new Nt(1.6,1.1,.8,16),new lt({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let l=new Ot,c=new q(new Un(.9,3.4,10),Gh());c.position.y=1.7;let h=new q(new ye(.32,10,8),Gh());h.position.y=3.6,l.add(c,h),l.position.set(6.5,1.2,0),n.add(l),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new oe,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new ge(new Float32Array(90*3),3)),s.setAttribute("seed",new ge(o,1));let a=new de({uniforms:{uTime:rn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:Be}),l=new xi(s,a);l.position.set(t,e,n),l.frustumCulled=!1,this.g.add(l);let c=new vi(16747056,0,30,2);return c.position.set(t,e+1.5,n),this.g.add(c),this.anim.push({type:"firelight",light:c}),l}_mosque(){let t=this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(g.name)&&g.kind===8)||this.map.buildings.find(g=>g.name&&/Central Mosque|Центральная мечеть/.test(g.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),l=new lt({color:15921128,roughness:.5}),c=new lt({color:5939384,metalness:.5,roughness:.25}),h=new lt({color:14200896,metalness:1,roughness:.2}),u=new q(new Nt(o,o,5,24),l);u.position.set(e,a+2.5,n);let p=new q(new ye(o,32,16,0,Math.PI*2,0,Math.PI/2),c);p.position.set(e,a+5,n),p.scale.y=1.15;let d=new q(new Nt(.15,.3,4,8),h);d.position.set(e,a+5+o*1.15+2,n),this.g.add(u,p,d);for(let[g,m]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let x=e+g*(i/2-2),f=n+m*(s/2-2),y=new q(new Nt(1.6,2,52,12),l);y.position.set(x,26,f);let _=new q(new Nt(2.6,2.2,1.4,12),l);_.position.set(x,44,f);let v=new q(new Un(1.7,7,12),c);v.position.set(x,55.5,f);let R=new q(new Nt(.1,.2,2.5,6),h);R.position.set(x,60,f),this.g.add(y,_,v,R),this._col(x,f,2)}this.g.children.slice(-19).forEach(g=>{g.castShadow=!0,g.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new q(new Nt(4.2,4.4,.6,28,1,!0),cr(12103840));s.position.set(n,.3,i);let o=new q(new Ni(4.1,28).rotateX(-Math.PI/2),new lt({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new oe,l=new Float32Array(140);for(let u=0;u<140;u++)l[u]=Math.random();a.setAttribute("position",new ge(new Float32Array(140*3),3)),a.setAttribute("seed",new ge(l,1));let c=new de({uniforms:{uTime:rn.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new xi(a,c);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new Ot,i=new lt({color:15263976,metalness:.6,roughness:.3}),s=16,o=new Ot,a=new q(new Yn(s,.25,6,48),i);o.add(a);let l=a.clone();l.position.z=1.6,o.add(l);let c=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,p=new q(new Nt(.08,.08,s,4),i);p.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),p.rotation.z=u-Math.PI/2,o.add(p);let d=new q(new pt(1.4,1.5,1.4),new lt({color:c[h%4]}));d.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(d),this.cabins.push({cab:d,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new q(new Nt(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let p=u.clone();p.position.z=2.2,n.add(p)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new Ot,i=new lt({color:10134688,metalness:.6,roughness:.35}),s=new q(new Nt(.5,.75,13,12).rotateX(Math.PI/2),i),o=new q(new Un(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new qn;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let l=new q(new ei(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),c=new q(new pt(.15,2.4,2.6),i);c.position.set(0,1.4,-5);let h=new q(new Nt(.6,1,6,8),cr(8947848));h.position.y=-3.4,n.add(s,o,l,c,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}_findB(t){return this.map.buildings.filter(e=>e.name&&t.test(e.name)).sort((e,n)=>(n.x1-n.x0)*(n.z1-n.z0)-(e.x1-e.x0)*(e.z1-e.z0))[0]}_miniFlag(t,e,n,i=1){this.flagTex||(this.flagTex=hf());let s=3.2*i,o=1.9*i,a=new q(new Nt(.05*i,.07*i,6*i,6),new lt({color:13620184,metalness:.8,roughness:.3}));a.position.set(t,e+3*i,n);let l=new ve(s,o,12,6).translate(s/2,0,0),c=new lt({map:this.flagTex,side:we,roughness:.8});c.onBeforeCompile=u=>{u.uniforms.uTime=rn.uTime,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${s.toFixed(2)};
          transformed.z += sin(position.x*1.6 - uTime*4.0 + ${(t*.1).toFixed(2)}) * 0.35 * k * ${i.toFixed(2)};`)};let h=new q(l,c);h.position.set(t+.06,e+6*i-o/2-.1,n),this.g.add(a,h)}_whiteHouse(){let t=this._findB(/Жогорку Кеңеш|National Parliament|White House|Ак үй|Белый дом/);if(!t)return;let e=t.pts,n=e.length/2,i=Math.max(t.h,26),s=0;for(let x=0;x<n;x++){let f=(x+1)%n;s+=e[x*2]*e[f*2+1]-e[f*2]*e[x*2+1]}let o=s>0?1:-1,a=[];for(let x=0;x<n;x++){let f=(x+1)%n,y=e[x*2],_=e[x*2+1],v=e[f*2],R=e[f*2+1],E=Math.hypot(v-y,R-_);if(E<8)continue;let b=(R-_)/E*o,C=-(v-y)/E*o,M=Math.floor(E/3.4);for(let w=0;w<=M;w++){let A=w/M;a.push([y+(v-y)*A+b*.45,_+(R-_)*A+C*.45,Math.atan2(b,C)])}}let l=new lt({color:15987180,roughness:.35,metalness:.05}),c=new Se(new pt(.7,i-3,.9),l,a.length),h=new jt,u=new ke,p=new I(0,1,0);a.forEach(([x,f,y],_)=>{u.setFromAxisAngle(p,y),h.compose(new I(x,3+(i-3)/2,f),u,new I(1,1,1)),c.setMatrixAt(_,h)}),c.castShadow=!0,c.receiveShadow=!0,c.computeBoundingSphere(),this.g.add(c);let d=(t.x0+t.x1)/2,g=(t.z0+t.z1)/2,m=new q(new pt(t.x1-t.x0+1.6,1.4,t.z1-t.z0+1.6),l);m.position.set(d,i+.7,g),m.castShadow=!0,this.g.add(m),this._miniFlag(d,i+1.4,g,1.6)}_ordo(){let t=this._findB(/Ынтымак Ордо|Yntymak Ordo/);if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.max(t.h,18),a=new lt({color:16118506,roughness:.4}),l=new lt({color:14200896,metalness:1,roughness:.25}),c=Math.min(i,s)*.22,h=new q(new Nt(c,c*1.05,7,32),a);h.position.set(e,o+3.5,n);let u=new q(new ye(c,40,20,0,Math.PI*2,0,Math.PI/2),new lt({color:15330802,metalness:.3,roughness:.2}));u.position.set(e,o+7,n),u.scale.y=.85;let p=new q(new Nt(c*.15,c*.18,3,16),l);p.position.set(e,o+7+c*.85+1.5,n),this.g.add(h,u,p);for(let x=0;x<16;x++){let f=x/16*Math.PI*2,y=new q(new Nt(.35,.4,7,10),a);y.position.set(e+Math.cos(f)*(c+.8),o+3.5,n+Math.sin(f)*(c+.8)),this.g.add(y)}let d=Math.max(i,s)*.4,g=i>s?"z":"x";for(let x=0;x<8;x++){let f=(x/7-.5)*d,y=new q(new Nt(.55,.6,o*.9,12),a);g==="z"?y.position.set(e+f,o*.45,t.z1+3):y.position.set(t.x1+3,o*.45,n+f),this.g.add(y)}let m=new q(new pt(g==="z"?d+3:6,1.6,g==="z"?6:d+3),a);m.position.set(g==="z"?e:t.x1+1.5,o*.9+.8,g==="z"?t.z1+1.5:n),this.g.add(m),this.g.children.slice(-30).forEach(x=>{x.isMesh&&(x.castShadow=!0,x.receiveShadow=!0)}),this._miniFlag(e+i*.3,o,n,1.3),this._miniFlag(e-i*.3,o,n,1.3)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var za=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let m=0;m<e;m++){let x=Math.random()*2-1;s=(s+.02*x)/1.02,i[m]=x*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engShaper=t.createWaveShaper(),this._setDrive(1.5),this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=700,this.engFilter.Q.value=.8,this.engBody=t.createBiquadFilter(),this.engBody.type="peaking",this.engBody.frequency.value=110,this.engBody.gain.value=7,this.engBody.Q.value=1.2;let o=new Float32Array(24),a=new Float32Array(24),l=[0,1,.75,.55,.62,.3,.38,.18,.26,.12,.15,.08,.1,.06,.06,.04,.05,.03,.03,.02,.02,.015,.012,.01];for(let m=1;m<24;m++)a[m]=l[m];this.engWave=t.createPeriodicWave(o,a),this.engOsc=t.createOscillator(),this.engOsc.setPeriodicWave(this.engWave),this.engSub=t.createOscillator(),this.engSub.type="triangle";let c=t.createGain();c.gain.value=.55;let h=t.createGain();h.gain.value=.45,this.engOsc.connect(c),this.engSub.connect(h),c.connect(this.engShaper),h.connect(this.engShaper);let u=t.createBufferSource();u.buffer=n,u.loop=!0,this.engNoiseF=t.createBiquadFilter(),this.engNoiseF.type="bandpass",this.engNoiseF.frequency.value=400,this.engNoiseF.Q.value=.9,this.engNoiseG=t.createGain(),this.engNoiseG.gain.value=.05,u.connect(this.engNoiseF),this.engNoiseF.connect(this.engNoiseG),this.engNoiseG.connect(this.engShaper),u.start(),this.engShaper.connect(this.engBody),this.engBody.connect(this.engFilter),this.engFilter.connect(this.engGain),this.engGain.connect(this.master),this.engOsc.start(),this.engSub.start(),this.turbo=t.createOscillator(),this.turbo.type="sine",this.turboG=t.createGain(),this.turboG.gain.value=0,this.turbo.connect(this.turboG),this.turboG.connect(this.master),this.turbo.start(),this.squealG=t.createGain(),this.squealG.gain.value=0;let p=t.createOscillator();p.frequency.value=6.5;let d=t.createGain();d.gain.value=35,p.connect(d),p.start();for(let m of[960,1105,1240]){let x=t.createOscillator();x.type="sine",x.frequency.value=m,d.connect(x.frequency);let f=t.createGain();f.gain.value=.33,x.connect(f),f.connect(this.squealG),x.start()}this.squealG.connect(this.master),this.lastThr=0,this.lastGear=1;let g=(m,x,f)=>{let y=t.createBufferSource();y.buffer=n,y.loop=!0;let _=t.createBiquadFilter();_.type=m,_.frequency.value=x,_.Q.value=f;let v=t.createGain();return v.gain.value=0,y.connect(_),_.connect(v),v.connect(this.master),y.start(Math.random()*.5),{s:y,fl:_,g:v}};this.wind=g("bandpass",600,.4),this.tyre=g("bandpass",1800,6),this.city=g("lowpass",420,.5),this.jet=g("bandpass",900,.6),this.jetLow=g("lowpass",140,1),this.road=g("lowpass",220,.8),this.rain=g("highpass",2500,.3),this.birdT=0,this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?Math.max(700,e.rpm):0,o=n.carType||"sedan",a={coupe:8,suv:8,bus:6,truck:6,van:4,oldsedan:4,hatch:4,sedan:4}[o]||4,l=o==="van"||o==="bus"||o==="truck",c=s/60*a/2;this.engOsc.frequency.setTargetAtTime(c,i,.025),this.engSub.frequency.setTargetAtTime(c/(a===8?4:2),i,.025);let h=n.throttle||0,u=h*(.6+.4*Math.min(1,s/5e3));this.engFilter.frequency.setTargetAtTime((l?220:280)+s*.16+u*(l?700:1300),i,.05),this.engNoiseF.frequency.setTargetAtTime(Math.min(3e3,c*3),i,.05),this.engNoiseG.gain.setTargetAtTime((l?.16:.05)+u*.08,i,.05),Math.abs(u-(this._drive||0))>.15&&(this._drive=u,this._setDrive(1.2+u*(o==="coupe"?5:2.5)));let p=n.inFlight||n.onFoot,d=p?0:.045+u*.075+Math.min(1,s/7e3)*.035;e&&e.gear!==this.lastGear&&(e.gear>this.lastGear&&h>.3&&(this.engGain.gain.setTargetAtTime(d*.35,i,.01),d*=1),this.lastGear=e.gear),this.engGain.gain.setTargetAtTime(d*(n.onFoot?.4:1),i,.06);let g=o==="coupe"||o==="suv"||l;if(this.turbo.frequency.setTargetAtTime(1800+s*.55,i,.1),this.turboG.gain.setTargetAtTime(p||!g?0:u*Math.min(1,s/6e3)*.012,i,.15),!p&&this.lastThr>.7&&h<.1&&s>3800&&(g&&this._burst(.25,"highpass",2200,.08),o==="coupe"||o==="sedan"))for(let y=0;y<5;y++)setTimeout(()=>this._burst(.02,"lowpass",900,.18*Math.random()),60+Math.random()*600);this.lastThr=h;let m=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(m/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+m*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,m/40*.25),i,.1);let x=n.inFlight||n.onFoot?0:Math.min(1,Math.max(0,(e.slip-.2)*2.2))*(m>4?1:0);this.tyre.g.gain.setTargetAtTime(x*.18,i,.04),this.squealG.gain.setTargetAtTime(x*.05,i,.05),this.rain.g.gain.setTargetAtTime((n.rain||0)*.12,i,.5),this.birdT-=t,this.birdT<=0&&!n.inFlight&&!(n.rain>.2)&&(this.birdT=n.night>.5?.35+Math.random()*.4:1.5+Math.random()*4,n.night>.5?this._cricket():n.cityLevel<.9&&this._bird()),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let f=n.jet||0;this.jet.g.gain.setTargetAtTime(f*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(f*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+f*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=8+Math.random()*14/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}_setDrive(t){let n=new Float32Array(256);for(let i=0;i<256;i++){let s=i/255*2-1;n[i]=Math.tanh(s*t)/Math.tanh(t)}this.engShaper.curve=n}_burst(t,e,n,i){let s=this.ctx,o=s.currentTime,a=s.createBufferSource(),l=s.createBiquadFilter(),c=s.createGain();a.buffer=this.noise,l.type=e,l.frequency.value=n,c.gain.setValueAtTime(i,o),c.gain.exponentialRampToValueAtTime(1e-4,o+t),a.connect(l),l.connect(c),c.connect(this.master),a.start(o,Math.random()),a.stop(o+t+.05)}_bird(){let t=this.ctx,e=t.currentTime,n=2+Math.floor(Math.random()*4),i=2800+Math.random()*1800;for(let s=0;s<n;s++){let o=t.createOscillator(),a=t.createGain(),l=e+s*(.09+Math.random()*.06);o.frequency.setValueAtTime(i,l),o.frequency.exponentialRampToValueAtTime(i*(1.3+Math.random()*.4),l+.06),a.gain.setValueAtTime(0,l),a.gain.linearRampToValueAtTime(.012,l+.01),a.gain.exponentialRampToValueAtTime(1e-4,l+.08),o.connect(a),a.connect(this.master),o.start(l),o.stop(l+.1)}}_cricket(){let t=this.ctx,e=t.currentTime;for(let n=0;n<3;n++){let i=t.createOscillator(),s=t.createGain(),o=e+n*.045;i.frequency.value=4400+Math.random()*200,s.gain.setValueAtTime(0,o),s.gain.linearRampToValueAtTime(.006,o+.005),s.gain.linearRampToValueAtTime(0,o+.03),i.connect(s),s.connect(this.master),i.start(o),i.stop(o+.04)}}ignition(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let n=0;n<6;n++)this._burstAt(e+n*.11,.07,"lowpass",500,.08);this.engGain.gain.setValueAtTime(0,e),this.engGain.gain.linearRampToValueAtTime(.11,e+.75),this.engGain.gain.linearRampToValueAtTime(.05,e+1.4)}_burstAt(t,e,n,i,s){let o=this.ctx,a=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();a.buffer=this.noise,l.type=n,l.frequency.value=i,c.gain.setValueAtTime(s,t),c.gain.exponentialRampToValueAtTime(1e-4,t+e),a.connect(l),l.connect(c),c.connect(this.master),a.start(t,Math.random()),a.stop(t+e+.05)}ping(){this.blip(1320,.06,.08),setTimeout(()=>this.blip(1760,.08,.07),90)}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="bandpass",a.frequency.value=900,a.Q.value=.7;for(let l of[420*n,510*n]){let c=i.createOscillator();c.type="sawtooth",c.frequency.value=l,c.connect(a),c.start(s),c.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*120,n),l.frequency.exponentialRampToValueAtTime(60,n+.3);let c=e.createGain();c.gain.setValueAtTime(a*.5,n),c.gain.exponentialRampToValueAtTime(.001,n+.35),l.connect(c),c.connect(this.master),l.start(n),l.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let l=t.createBufferSource();l.buffer=this.noise;let c=t.createBiquadFilter();c.type="highpass",c.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),l.connect(c),c.connect(h),h.connect(this.master),l.start(e+a),l.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}whistle(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let[n,i]of[[0,.12],[.18,.28]]){let s=t.createOscillator();s.type="sine",s.frequency.value=2900;let o=t.createOscillator();o.frequency.value=35;let a=t.createGain();a.gain.value=140,o.connect(a),a.connect(s.frequency);let l=t.createGain();l.gain.setValueAtTime(0,e+n),l.gain.linearRampToValueAtTime(.12,e+n+.02),l.gain.setValueAtTime(.12,e+n+i),l.gain.linearRampToValueAtTime(0,e+n+i+.03),s.connect(l),l.connect(this.master),s.start(e+n),o.start(e+n),s.stop(e+n+i+.05),o.stop(e+n+i+.05)}}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var Mi=150,Ve=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"whitehouse",name:"White House (\u0410\u043A \u04AF\u0439)",local:"\u0410\u043A \u04AF\u0439 \xB7 \u0416\u043E\u0433\u043E\u0440\u043A\u0443 \u041A\u0435\u04A3\u0435\u0448",x:-277,z:-40,fact:`The 7-storey white marble "Ak Uy" on Chuy Avenue, built in 1985. Today it houses the Jogorku Kenesh, Kyrgyzstan's parliament.`},{id:"ordo",name:"Yntymak Ordo (new White House)",local:"\u042B\u043D\u0442\u044B\u043C\u0430\u043A \u041E\u0440\u0434\u043E",x:-1751,z:7480,fact:"The new presidential palace in the south of Bishkek, opened in 2022. The Presidential Administration moved here from the old White House."},{id:"cityhall",name:"Bishkek City Hall",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0448\u0430\u0430\u0440\u0434\u044B\u043A \u043C\u044D\u0440\u0438\u044F\u0441\u044B",x:-1389,z:60,fact:"The mayor's office of Bishkek, on Chuy Avenue next to the National Bank."},{id:"natbank",name:"National Bank",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0431\u0430\u043D\u043A",x:-1436,z:30,fact:"Head office of the National Bank of the Kyrgyz Republic, which issues the som."},{id:"gorky",name:"Gorky Park",local:"\u0413\u043E\u0440\u044C\u043A\u0438\u0439 \u0441\u043A\u0432\u0435\u0440\u0438",x:-887,z:-237,fact:"A shady square park next to the Philharmonic and the Kojomkul Sports Palace."},{id:"kojomkul",name:"Kojomkul Sports Palace",local:"\u041A\u043E\u0436\u043E\u043C\u043A\u0443\u043B \u0430\u0442\u044B\u043D\u0434\u0430\u0433\u044B \u0441\u043F\u043E\u0440\u0442 \u0441\u0430\u0440\u0430\u0439\u044B",x:-726,z:-211,fact:"Named after the legendary strongman Kojomkul. Wrestling, boxing and concerts."},{id:"spartak",name:"Spartak Stadium",local:"\u0421\u043F\u0430\u0440\u0442\u0430\u043A \u0441\u0442\u0430\u0434\u0438\u043E\u043D\u0443",x:-588,z:-470,fact:"The national stadium (also called Dolen Omurzakov Stadium) where Kyrgyzstan's football team plays."},{id:"caravan",name:"Caravan Mall",local:"\u041A\u0430\u0440\u0430\u0432\u0430\u043D",x:-798,z:199,fact:"A shopping centre on Kievskaya street, near the Sheraton."},{id:"sheraton",name:"Sheraton Bishkek",local:"\u0428\u0435\u0440\u0430\u0442\u043E\u043D",x:-1057,z:171,fact:"A 23-floor hotel \u2013 one of the tallest buildings in central Bishkek."},{id:"hyatt",name:"Hyatt Regency",local:"\u0425\u0430\u044F\u0442\u0442 \u0420\u0438\u0434\u0436\u0435\u043D\u0441\u0438",x:759,z:-362,fact:"The classic business hotel next to the Opera and Ballet Theatre and Oak Park."},{id:"knu",name:"Kyrgyz National University",local:"\u041A\u041D\u0423 \u0438\u043C. \u0416. \u0411\u0430\u043B\u0430\u0441\u0430\u0433\u044B\u043D\u0430",x:-1495,z:-555,fact:"The country's oldest university, founded in 1925 and named after the poet Jusup Balasagyn."},{id:"auca",name:"American University of Central Asia",local:"\u0410\u0423\u0426\u0410",x:1918,z:7200,fact:"AUCA's modern campus in the south of Bishkek, opened in 2015."},{id:"botanic",name:"Botanical Garden",local:"\u0411\u043E\u0442\u0430\u043D\u0438\u043A\u0430\u043B\u044B\u043A \u0431\u0430\u043A",x:-1051,z:1915,fact:"The E. Z. Gareev Botanical Garden, with thousands of plant species and quiet alleys."},{id:"ataturk",name:"Ataturk Park",local:"\u0410\u0442\u0430\u0442\u04AF\u0440\u043A \u0441\u0435\u0439\u0438\u043B \u0431\u0430\u0433\u044B",x:-782,z:4370,fact:"A large park in the south with a lake, fountains and a monument to Atat\xFCrk."},{id:"station",name:"Bishkek-2 Railway Station",local:"\u0411\u0438\u0448\u043A\u0435\u043A-2 \u0432\u043E\u043A\u0437\u0430\u043B\u044B",x:190,z:1290,fact:"The main railway station. Trains leave for Balykchy (Issyk-Kul) and Moscow."},{id:"eastbus",name:"Eastern Bus Station",local:"\u0427\u044B\u0433\u044B\u0448 \u0430\u0432\u0442\u043E\u0432\u043E\u043A\u0437\u0430\u043B\u044B",x:2131,z:-1213,fact:"Marshrutkas and buses to the east: Issyk-Kul, Kant and Tokmok."},{id:"alamedin",name:"Alamedin Bazaar",local:"\u0410\u043B\u0430\u043C\u04AF\u0434\u04AF\u043D \u0431\u0430\u0437\u0430\u0440\u044B",x:2784,z:-1202,fact:"A busy market in the east of the city \u2013 fruit, vegetables and everything for the home."},{id:"ortosai",name:"Orto-Sai Bazaar",local:"\u041E\u0440\u0442\u043E-\u0421\u0430\u0439 \u0431\u0430\u0437\u0430\u0440\u044B",x:1095,z:4501,fact:"The southern bazaar on the Ala-Archa road, famous for fresh produce."},{id:"tashrabat",name:"Tash-Rabat Mall",local:"\u0422\u0430\u0448-\u0420\u0430\u0431\u0430\u0442",x:1350,z:2140,fact:"A popular mall on Gorky street, named after the 15th-century stone caravanserai."},{id:"arena",name:"Bishkek Arena",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0410\u0440\u0435\u043D\u0430",x:-6465,z:5340,fact:"A large arena in the west of the city, built for concerts and sports."},{id:"nomad",name:"Nomad Arena Ice Rink",local:"\u041D\u043E\u043C\u0430\u0434 \u0410\u0440\u0435\u043D\u0430",x:5046,z:1978,fact:"The city ice rink in the east of Bishkek."},{id:"conservatory",name:"National Conservatory",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u043A\u043E\u043D\u0441\u0435\u0440\u0432\u0430\u0442\u043E\u0440\u0438\u044F",x:773,z:3392,fact:"The Kyrgyz National Conservatory, where komuz players and opera singers train."},{id:"post",name:"Main Post Office",local:"\u0411\u0430\u0448\u043A\u044B \u043F\u043E\u0447\u0442\u0430\u043C\u0442",x:710,z:171,fact:"The central post office on the corner of Chuy Avenue and Sovetskaya street."},{id:"bcity",name:"Bishkek City Center",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u0421\u0438\u0442\u0438",x:1019,z:-577,fact:"A business district with new glass towers north-east of the centre."},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],La=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=1500,this.bank=5e3,this.tx=[],this.messages=[],this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Ve){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Ve.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color,this.owned=t.owned,this.jobsDone=t.jobs||0,this.custom=t.custom,this.upgrades=t.upgrades,this.bank=t.bank??this.bank,this.tx=t.tx||[],this.messages=t.messages||[],this.rent=t.rent||null,this.rentDay=t.rentDay,this.carRent=t.carRent||null,this.savedFuel=t.fuel)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:this.homeCar||t?.type,color:this.homeColor??t?.color,owned:[...this.owned||["sedan"]],jobs:this.jobsDone||0,custom:this.custom,upgrades:this.upgrades,bank:this.bank,tx:this.tx.slice(-60),messages:this.messages.slice(-80),rent:this.rent,rentDay:this.rentDay,carRent:this.carRent,fuel:t?.fuel}))}catch{}}credit(t,e,n=!1){t=Math.round(t),n?(this.bank+=t,this.tx.push({t:Date.now(),a:t,l:e}),this.msg("MBank",`+${fe(t)} \u0441\u043E\u043C \xB7 ${e}. \u0411\u0430\u043B\u0430\u043D\u0441: ${fe(this.bank)} \u0441\u043E\u043C`,"\u{1F3E6}",!0)):this.money+=t}spend(t,e){return t=Math.round(t),this.bank>=t?(this.bank-=t,this.tx.push({t:Date.now(),a:-t,l:e}),!0):this.money>=t?(this.money-=t,!0):!1}charge(t,e){t=Math.round(t),this.bank-=t,this.tx.push({t:Date.now(),a:-t,l:e})}msg(t,e,n="\u{1F4AC}",i=!1){let s={from:t,text:e,icon:n,t:Date.now(),clock:this.hud.clockText(),read:!1};return this.messages.push(s),this.messages.length>120&&this.messages.shift(),this.onMessage&&this.onMessage(s,i),s}issueFine(t,e,n,i,s=0){this.charge(e,"\u0428\u0442\u0440\u0430\u0444: "+t),this.msg("\u041A\u043E\u043E\u043F\u0441\u0443\u0437 \u0448\u0430\u0430\u0440 \xB7 Safe City",`\u0428\u0442\u0440\u0430\u0444 ${fe(e)} \u0441\u043E\u043C \u2013 ${n}. \u0421\u043F\u0438\u0441\u0430\u043D\u043E \u0441 MBank.`,"\u{1F4F8}",!0);let o={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i,heat:s};this.fines.push(o),this.audio.fine(),this.hud.showFine(o),this.onFine&&this.onFine(o)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,l=this.speedState;if(a>Mi){if(l.over+=t,l.maxSpeed=Math.max(l.maxSpeed,a),l.armed&&l.over>.6){l.armed=!1,l.lastFine=this.time;let c=Math.round(l.maxSpeed),h=c>200?750:c>170?500:300,u=n.street?` on ${n.street}`:"";o(p=>this.issueFine("Speeding",h,`${c} km/h in a 150 km/h zone${u}`,p))}!l.armed&&this.time-l.lastFine>12&&(l.armed=!0,l.maxSpeed=0,l.over=0)}else a<Mi-5&&(l.armed=!0,l.over=0,l.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let c=n.road;for(let d of c.e.signals){let g=Math.sin(e.h),m=Math.cos(e.h),x=g*c.dx+m*c.dz,f=x>=0?0:1;if(d.dir!==f||Math.abs(x)<.7)continue;let y=f?c.e.len-c.s:c.s,_=e._sOnEdge&&e._sOnEdge.e===c.e?e._sOnEdge.s:null;if(_!==null&&_<d.stop&&y>=d.stop){let v=f?-c.lat:c.lat;(c.e.ow||v>-.5)&&this.map.signalState(d.cluster,d.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(R=>this.issueFine("Red light",100,`Ran a red light${n.street?" on "+n.street:""}`,R)))}}let h=Math.sin(e.h),u=Math.cos(e.h),p=h*c.dx+u*c.dz>=0?0:1;e._sOnEdge={e:c.e,s:p?c.e.len-c.s:c.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let c=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;c<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",150,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=c<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(c=>this.issueFine("Runway incursion",1e3,"Entered the active runway at Manas International Airport",c)))):(this.runwayT=0,n.runway=!1),this._moreRules(t,e,n,a,o)}_moreRules(t,e,n,i,s){let o=this.time;this.cool=this.cool||{},this.tm=this.tm||{};let a=this.tm,l=n.street||"the street",c=(v,R,E,b,C)=>{(this.cool[v]||0)>o||(this.cool[v]=o+10,s(M=>this.issueFine(R,E,b,M,C)))},h=(v,R)=>(a[v]=R?(a[v]||0)+t:0,a[v]),u="",p=Math.sin(e.h),d=Math.cos(e.h),g=n.road,m=!1;if(g&&!g.e.ow&&i>12&&g.e.w>=6&&g.e.cls<=4&&g.dist<g.e.w/2+.5){let v=p*g.dx+d*g.dz,R=v>=0?g.lat:-g.lat;m=Math.abs(v)>.7&&R<-.9}let x=h("onc",m);if(x>.6&&(u="ONCOMING LANE \u2013 KEEP RIGHT"),x>2.5&&(a.onc=0,c("onc","Oncoming lane",120,`Drove in the oncoming lane on ${l}`,.5)),this._zoneT=(this._zoneT||0)-t,this._zoneT<=0){this._zoneT=.2;let v="";if(i>6&&!n.runway){let R=this.map.nearestRoad(e.x,e.z,14);if(!(R&&R.dist<R.e.w/2+.4)){let b=Math.floor(e.x/400),C=Math.floor(e.z/400);for(let M=-1;M<=1&&v!=="square";M++)for(let w=-1;w<=1;w++){let A=this.map.chunks.get(Ge(b+M,C+w));if(A){for(let z of A.areas)if(!(e.x<z.x0||e.x>z.x1||e.z<z.z0||e.z>z.z1)&&!(![0,1,4,5,11].includes(z.type)||!ar(e.x,e.z,z.pts))){if(z.type===11){v="square";break}v="park"}}}!v&&R&&R.e.cls>=1&&R.e.cls<=4&&R.e.w>=5&&R.dist<R.e.w/2+3.6&&(v="sidewalk")}}this._zone=v}let f=h("sidewalk",this._zone==="sidewalk"),y=h("park",this._zone==="park"),_=h("square",this._zone==="square");if(f>.3&&(u="GET OFF THE SIDEWALK!"),y>.3&&(u="NO DRIVING IN THE PARK!"),_>.3&&(u="PEDESTRIAN ZONE \u2013 NO CARS!"),f>1.5&&(a.sidewalk=0,c("sidewalk","Driving on the sidewalk",150,`Drove on the sidewalk of ${l}`,.6)),y>1.5&&(a.park=0,c("park","Driving through a park",250,"Drove through a park / lawn",.8)),_>1.2&&(a.square=0,c("square","Pedestrian zone",400,"Drove into a pedestrian square",1.2)),this.peds&&i>22)for(let v of this.peds.list){if(v.fixed)continue;let R=v.x-e.x,E=v.z-e.z;if(R*R+E*E<6.5){u="WATCH OUT \u2013 PEDESTRIAN!",c("ped","Endangering a pedestrian",300,`Nearly hit a pedestrian at ${Math.round(i)} km/h`,1);break}}if(this.peds&&i>8&&this.peds.crossers.length)for(let v of this.peds.crossers){let R=Math.hypot(v.x-e.x,v.z-e.z);if(R<7){u="STOP \u2013 PEOPLE ON THE ZEBRA!",R<4.5&&c("zebra","Did not yield at zebra",150,"Did not give way to pedestrians at a zebra crossing",.4);break}}if(g&&i>15&&!u){let v=p*g.dx+d*g.dz,R=v>=0?0:1,E=R?g.e.len-g.s:g.s;for(let b of g.e.signals){if(b.dir!==R)continue;let C=b.stop-E;if(C>0&&C<30&&this.map.signalState(b.cluster,b.group,this.trafficTime)==="R"){u="RED LIGHT \u2013 STOP!";break}}}i>150&&!u&&(u="SPEEDING \u2013 SLOW DOWN"),u&&!this._lastWarn&&this.onWarn&&this.onWarn(u),this._lastWarn=u,n.warn=u}accident(t,e){if(this.cool=this.cool||{},(this.cool.dtp||0)>this.time)return;this.cool.dtp=this.time+4;let n=t>12?400:t>7?250:120;e(i=>this.issueFine("Road accident (\u0414\u0422\u041F)",n,`Crashed into another car at ${Math.round(t*3.6)} km/h`,i,t>7?1:.4))}checkLandmarks(t){for(let e of Ve)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Ve.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,l=this.map.nearestRoad(o,a,80,x=>x.cls>=1&&x.cls<=4);if(!l)continue;let c=l.lat>=0?1:-1,h=l.e.w/2+1.2,u=l.x-l.dz*h*c,p=l.z+l.dx*h*c;if(this.map.insideBuilding(u,p,.5))continue;let d=Ve.filter(x=>Math.hypot(x.x-u,x.z-p)>700&&(!x.airport||Math.random()<.5)),g=d[Math.floor(Math.random()*d.length)],m=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:p,dest:g,passenger:m[Math.floor(Math.random()*m.length)],t:0,start:null},this.setRoute(u,p,"Pick up "+this.mission.passenger),e){let x={mode:"plaza",zone:{x:u,z:p,r:.1,active:!0,count:0},x:u,z:p,h:0,tx:u,tz:p,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};x.shirt=15909376,x.pants=2238522,x.skin=14200976,x.hairC=1709072,x.scale=1,x.speed=1.2,x.phase=0,x.fixed=!0,e.list.push(x),this.mission.ped=x}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,l=i.fare+a;this.money+=l,this.audio.cash(),this.hud.toast(`Fare paid: ${fe(i.fare)} \u0441\u043E\u043C. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],l=this.route[s+2],c=this.route[s+3],h=l-o,u=c-a,p=h*h+u*u||1,d=((t.x-o)*h+(t.z-a)*u)/p;d=Math.max(0,Math.min(1,d)),i=Math.min(i,Math.hypot(t.x-o-h*d,t.z-a-u*d))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let l=0;l<e.length/2;l++){l>0&&(o+=Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));let c=Math.max(0,l-1),h=Math.min(e.length/2-1,l+1),u=e[h*2]-e[c*2],p=e[h*2+1]-e[c*2+1],d=Math.hypot(u,p)||1;u/=d,p/=d;let g=1.1;if(n.push(e[l*2]-p*g,.22,e[l*2+1]+u*g,e[l*2]+p*g,.22,e[l*2+1]-u*g),i.push(o,0,o,1),l>0){let m=l*2;s.push(m-2,m,m-1,m-1,m,m+1)}}let a=new oe;a.setAttribute("position",new Xt(n,3)),a.setAttribute("uv",new Xt(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new de({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:we})),this.routeMesh=new q(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function fe(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var uf=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],df=[5,4.2,3.4,2.6,2,1.6,1.2],xe=r=>document.getElementById(r),Da=class{constructor(t){this.map=t,this.speedo=xe("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=xe("minimap"),this.mctx=this.mini.getContext("2d"),this.big=xe("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,l=Math.min(n,i)/2-6*s,c=t.speed*3.6,h=260,u=Math.PI*.75,p=Math.PI*2.25,d=f=>u+(p-u)*Math.min(1,f/h),g=e.createRadialGradient(o,a,l*.2,o,a,l);g.addColorStop(0,"rgba(20,24,30,0.92)"),g.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=g,e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,l-10*s,d(Mi),p),e.stroke(),e.lineWidth=7*s,e.strokeStyle=c>Mi?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,l-10*s,u,d(c)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let f=0;f<=h;f+=10){let y=d(f),_=f%20===0;e.strokeStyle=f>Mi?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(_?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(y)*(l-18*s),a+Math.sin(y)*(l-18*s)),e.lineTo(o+Math.cos(y)*(l-(_?28:23)*s),a+Math.sin(y)*(l-(_?28:23)*s)),e.stroke(),_&&f%40===0&&e.fillText(f,o+Math.cos(y)*(l-40*s),a+Math.sin(y)*(l-40*s))}let m=d(c);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(m)*12*s,a-Math.sin(m)*12*s),e.lineTo(o+Math.cos(m)*(l-22*s),a+Math.sin(m)*(l-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=c>Mi?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(c),o,a+l*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+l*.62);let x=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=x>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,x)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gearLabel||"1",o,a-l*.12)}_miniBase(t,e,n){let i=this.mini.width,s=Math.ceil(i*2.2);(!this._mb||this._mb.width!==s)&&(this._mb=document.createElement("canvas"),this._mb.width=this._mb.height=s,this._mbS=0);let o=s/2/e;if(this._mbS===e&&Math.hypot(t.x-this._mbX,t.z-this._mbZ)<o*.35)return;this._mbS=e,this._mbX=t.x,this._mbZ=t.z;let a=this._mb.getContext("2d");a.setTransform(1,0,0,1,0,0),a.fillStyle="#1d2329",a.fillRect(0,0,s,s),a.translate(s/2,s/2),a.scale(e,e),a.translate(-t.x,-t.z);let l=400,c=Math.ceil(o/l)+1,h=Math.floor(t.x/l),u=Math.floor(t.z/l);a.fillStyle="#2f3741",a.beginPath();for(let p=h-c;p<=h+c;p++)for(let d=u-c;d<=u+c;d++){let g=this.map.chunks.get(Ge(p,d));if(g)for(let m of g.buildings){if(Math.abs(m.cx-t.x)>o||Math.abs(m.cz-t.z)>o)continue;let x=m.pts;a.moveTo(x[0],x[1]);for(let f=2;f<x.length;f+=2)a.lineTo(x[f],x[f+1]);a.closePath()}}a.fill(),a.lineCap="round",a.lineJoin="round";for(let p=6;p>=0;p--){a.strokeStyle=uf[p];for(let d=h-c;d<=h+c;d++)for(let g=u-c;g<=u+c;g++){let m=this.map.chunks.get(Ge(d,g));if(m)for(let x of m.edges){if(x.cls!==p)continue;a.lineWidth=Math.max(x.w,3/e);let f=x.pts;a.beginPath(),a.moveTo(f[0],f[1]);for(let y=2;y<f.length;y+=2)a.lineTo(f[y],f[y+1]);a.stroke()}}}n&&(a.strokeStyle="#8a9098",a.lineWidth=n.rwW,a.beginPath(),a.moveTo(n.R0.x,n.R0.y),a.lineTo(n.R1.x,n.R1.y),a.stroke())}drawMini(t,e,n,i,s,o){let a=this.mctx,l=this.mini.width,c=this.mini.height,h=this.dpr,u=.55*h*(this.miniZoom||1)*(t.speed>25?.75:1);this._miniBase(t,u,i),a.save(),a.clearRect(0,0,l,c),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.clip(),a.translate(l/2,c/2+c*.12),a.rotate(t.h+Math.PI);let p=this._mb.width;a.drawImage(this._mb,(this._mbX-t.x)*u-p/2,(this._mbZ-t.z)*u-p/2),a.scale(u,u),a.translate(-t.x,-t.z);let d=l/u*.8;if(o&&o(a,u,d),i)for(let f of i.planes)a.fillStyle="#ffffff",a.beginPath(),a.arc(f.x,f.z,14,0,7),a.fill();if(n.route){a.strokeStyle="#3fc8ff",a.lineWidth=6/u*h,a.globalAlpha=.9;let f=n.route;a.beginPath(),a.moveTo(f[0],f[1]);for(let y=2;y<f.length;y+=2)a.lineTo(f[y],f[y+1]);a.stroke(),a.globalAlpha=1}a.fillStyle="#ff9a3a";for(let f of e.cars)Math.abs(f.x-t.x)<d&&Math.abs(f.z-t.z)<d&&a.fillRect(f.x-1.6,f.z-1.6,3.2,3.2);for(let f of Ve)f.x===void 0||Math.abs(f.x-t.x)>d||Math.abs(f.z-t.z)>d||(a.fillStyle=n.visited.has(f.id)?"#6ad06a":"#ffd84a",a.beginPath(),a.arc(f.x,f.z,6/u*h,0,7),a.fill());if(n.routeTarget&&(a.fillStyle="#ff3a6a",a.beginPath(),a.arc(n.routeTarget.x,n.routeTarget.z,8/u*h,0,7),a.fill()),s)for(let f of s.players.values())a.fillStyle="#3ddc84",a.beginPath(),a.arc(f.x,f.z,6/u*h,0,7),a.fill();a.restore(),a.save(),a.translate(l/2,c/2+c*.12),a.fillStyle="#3fc8ff",a.strokeStyle="#fff",a.lineWidth=2*h,a.beginPath(),a.moveTo(0,-10*h),a.lineTo(7*h,8*h),a.lineTo(0,4*h),a.lineTo(-7*h,8*h),a.closePath(),a.fill(),a.stroke(),a.restore();let g=t.h+Math.PI;a.fillStyle="#ff5050",a.font=`700 ${12*h}px Inter, Arial`,a.textAlign="center",a.textBaseline="middle";let m=l/2+Math.sin(g)*(l/2-14*h),x=c/2-Math.cos(g)*(c/2-14*h);a.fillText("N",m,x),a.beginPath(),a.arc(l/2,c/2,l/2-2,0,7),a.strokeStyle="rgba(255,255,255,0.25)",a.lineWidth=2*h,a.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",i=>{t={x:i.clientX,y:i.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",i=>{if(!t)return;let s=i.clientX-t.x,o=i.clientY-t.y;Math.abs(s)+Math.abs(o)>4&&(t.moved=!0),this.mapView.x=t.vx-s*this.dpr/this.mapView.s,this.mapView.z=t.vz-o*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",i=>{if(t&&!t.moved&&this.onMapClick){let s=this.big.getBoundingClientRect(),o=this.mapView.x+((i.clientX-s.left)*this.dpr-this.big.width/2)/this.mapView.s,a=this.mapView.z+((i.clientY-s.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(o,a,i.shiftKey)}t=null}),this.big.addEventListener("wheel",i=>{i.preventDefault();let s=this.big.getBoundingClientRect();this.zoomMap(i.deltaY<0?1.25:1/1.25,(i.clientX-s.left)*this.dpr,(i.clientY-s.top)*this.dpr)},{passive:!1});let e=null,n=i=>[...i.touches].map(s=>[s.clientX,s.clientY]);this.big.addEventListener("touchstart",i=>{i.preventDefault();let s=n(i);e={p:s,x:this.mapView.x,z:this.mapView.z,s:this.mapView.s,moved:!1,d:s.length>1?Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]):0}},{passive:!1}),this.big.addEventListener("touchmove",i=>{if(i.preventDefault(),!e)return;let s=n(i);if(s.length>1&&e.d){let o=Math.hypot(s[0][0]-s[1][0],s[0][1]-s[1][1]);this.mapView.s=Math.max(.015,Math.min(4,e.s*o/e.d)),e.moved=!0}else if(s.length===1){let o=s[0][0]-e.p[0][0],a=s[0][1]-e.p[0][1];Math.abs(o)+Math.abs(a)>6&&(e.moved=!0),this.mapView.x=e.x-o*this.dpr/this.mapView.s,this.mapView.z=e.z-a*this.dpr/this.mapView.s}},{passive:!1}),this.big.addEventListener("touchend",i=>{if(e&&!e.moved&&i.touches.length===0&&this.onMapClick){let s=this.big.getBoundingClientRect(),[o,a]=e.p[0];this.onMapClick(this.mapView.x+((o-s.left)*this.dpr-this.big.width/2)/this.mapView.s,this.mapView.z+((a-s.top)*this.dpr-this.big.height/2)/this.mapView.s,!1)}i.touches.length===0?e=null:e={p:n(i),x:this.mapView.x,z:this.mapView.z,s:this.mapView.s,moved:!0,d:0}})}drawBigMap(t,e,n,i){let s=this.big.width,o=this.big.height,a=this.mapView,l=[a.x|0,a.z|0,a.s.toFixed(4),s,o,e.route?e.route.length+":"+(e.route[0]|0):0,this.searchMark?this.searchMark.x:0,e.visited.size].join("|");(!this._base||this._base.width!==s||this._base.height!==o)&&(this._base=document.createElement("canvas"),this._base.width=s,this._base.height=o,this._mapKey=null),l!==this._mapKey&&(this._mapKey=l,this._drawMapBase(this._base.getContext("2d"),t,e,n));let c=this.bctx;c.drawImage(this._base,0,0);let h=(g,m)=>[(g-a.x)*a.s+s/2,(m-a.z)*a.s+o/2];if(c.font=`600 ${11*this.dpr}px Inter, Arial`,c.textAlign="center",i)for(let g of i.players.values()){let[m,x]=h(g.x,g.z);c.fillStyle="#3ddc84",c.beginPath(),c.arc(m,x,6*this.dpr,0,7),c.fill(),c.fillStyle="#fff",c.fillText(g.name,m,x-10*this.dpr)}let[u,p]=h(t.x,t.z);c.save(),c.translate(u,p),c.rotate(Math.PI-t.h),c.fillStyle="#3fc8ff",c.strokeStyle="#fff",c.lineWidth=2*this.dpr;let d=this.dpr;c.beginPath(),c.moveTo(0,-11*d),c.lineTo(8*d,9*d),c.lineTo(0,4*d),c.lineTo(-8*d,9*d),c.closePath(),c.fill(),c.stroke(),c.restore()}_drawMapBase(t,e,n,i,s){let o=this.big.width,a=this.big.height,l=this.mapView,c=l.s;t.fillStyle="#161b20",t.fillRect(0,0,o,a),t.save(),t.translate(o/2,a/2),t.scale(c,c),t.translate(-l.x,-l.z);let h=l.x-o/2/c,u=l.x+o/2/c,p=l.z-a/2/c,d=l.z+a/2/c,g={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let x of this.map.areaList){let f=g[x[0]];if(!f)continue;let y=x[1];if(!(y[0]*.1<h-2e3||y[0]*.1>u+2e3||y[1]*.1<p-2e3||y[1]*.1>d+2e3)){t.fillStyle=f,t.beginPath(),t.moveTo(y[0]*.1,y[1]*.1);for(let _=2;_<y.length;_+=2)t.lineTo(y[_]*.1,y[_+1]*.1);t.fill()}}if(c>.035){t.fillStyle=c>.25?"#343c46":"#2a3139";for(let x of this.map.buildings){if(x.cx<h||x.cx>u||x.cz<p||x.cz>d)continue;let f=x.pts;t.beginPath(),t.moveTo(f[0],f[1]);for(let y=2;y<f.length;y+=2)t.lineTo(f[y],f[y+1]);t.fill()}}t.lineCap="round",t.lineJoin="round";for(let x=6;x>=0;x--)if(!(c<.08&&x>=5)){t.strokeStyle=uf[x],t.lineWidth=Math.max(df[x]*.6/c*this.dpr*.5,(this.map.edges[0],0))||1,t.beginPath();for(let f of this.map.edges){if(f.cls!==x)continue;let y=f.pts;if(!(y[0]<h-500||y[0]>u+500||y[1]<p-500||y[1]>d+500)){t.moveTo(y[0],y[1]);for(let _=2;_<y.length;_+=2)t.lineTo(y[_],y[_+1])}}t.lineWidth=Math.max(df[x]*.5/c*this.dpr,(7-x)*1.2),c>.5&&(t.lineWidth=Math.max(t.lineWidth,6)),t.stroke()}if(i&&(t.strokeStyle="#9aa0a8",t.lineWidth=Math.max(55,3/c),t.beginPath(),t.moveTo(i.R0.x,i.R0.y),t.lineTo(i.R1.x,i.R1.y),t.stroke()),n.route){t.strokeStyle="#3fc8ff",t.lineWidth=5/c*this.dpr;let x=n.route;t.beginPath(),t.moveTo(x[0],x[1]);for(let f=2;f<x.length;f+=2)t.lineTo(x[f],x[f+1]);t.stroke()}t.restore();let m=(x,f)=>[(x-l.x)*c+o/2,(f-l.z)*c+a/2];if(c>.12){t.font=`500 ${10*this.dpr}px Inter, Arial`,t.textAlign="center";let x=[],f=(y,_,v,R,E)=>{let[b,C]=m(_,v);b<0||b>o||C<0||C>a||x.some(M=>Math.abs(M[0]-b)<70*this.dpr&&Math.abs(M[1]-C)<14*this.dpr)||(x.push([b,C]),t.fillStyle=R,t.beginPath(),t.arc(b,C,E*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,.7)",t.fillText(y,b+1,C-6*this.dpr+1),t.fillStyle="#e8eef4",t.fillText(y,b,C-6*this.dpr))};for(let y of this.map.pois)f((y.en||y.name).slice(0,28),y.x,y.z,"#7ec8ff",3);if(c>.55)for(let y of this.map.chunks.values()){let _=y.cx*400,v=y.cz*400;if(!(_>u+400||_+400<h-400||v>d+400||v+400<p-400))for(let R of y.signs)f(R.name.slice(0,24),R.x,R.z,"#ffb070",2.5)}}t.font=`600 ${12*this.dpr}px Inter, Arial`,t.textAlign="center";for(let x of Ve){if(x.x===void 0)continue;let[f,y]=m(x.x,x.z);f<-50||f>o+50||y<-50||y>a+50||(t.fillStyle=n.visited.has(x.id)?"#6ad06a":"#ffd84a",t.beginPath(),t.arc(f,y,5*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.6)",t.fillText(x.name,f+1,y-9*this.dpr+1),t.fillStyle="#fff",t.fillText(x.name,f,y-9*this.dpr))}if(c>.18){t.font=`${10*this.dpr}px Inter, Arial`,t.fillStyle="rgba(255,255,255,0.75)";let x=new Set;for(let f of this.map.edges){if(f.cls>2||f.name<0||f.len<150)continue;let y=this.map.names[f.name],_=y[1]||y[0],v=Math.floor(f.pts.length/4)*2,[R,E]=m(f.pts[v],f.pts[v+1]);if(R<0||R>o||E<0||E>a)continue;let b=_+Math.round(R/220)+","+Math.round(E/220);x.has(b)||(x.add(b),t.fillText(_,R,E))}}if(this.searchMark){let[x,f]=m(this.searchMark.x,this.searchMark.z),y=this.dpr;t.fillStyle="#ff3a6a",t.strokeStyle="#fff",t.lineWidth=2*y,t.beginPath(),t.moveTo(x,f),t.arc(x,f-18*y,9*y,Math.PI*.8,Math.PI*2.2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(x,f-18*y,3.5*y,0,7),t.fill()}if(n.routeTarget){let[x,f]=m(n.routeTarget.x,n.routeTarget.z);t.fillStyle="#ff3a6a",t.beginPath(),t.arc(x,f,7*this.dpr,0,7),t.fill()}t.fillStyle="rgba(255,255,255,0.5)",t.textAlign="right",t.font=`${10*this.dpr}px Inter, Arial`,t.fillText("Map data \xA9 OpenStreetMap contributors",o-10*this.dpr,a-10*this.dpr)}zoomMap(t,e,n){let i=this.mapView,s=this.big.width,o=this.big.height,a=e??s/2,l=n??o/2,c=i.x+(a-s/2)/i.s,h=i.z+(l-o/2)/i.s;i.s=Math.max(.015,Math.min(4,i.s*t)),i.x=c-(a-s/2)/i.s,i.z=h-(l-o/2)/i.s}zoomMini(t){this.miniZoom=Math.max(.35,Math.min(3,(this.miniZoom||1)*t))}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t&&t!==this._street&&(this._street=t,xe("street").innerHTML=`${t}<small>${e||""}</small>`,xe("street").classList.add("show"),clearTimeout(this._stTo),this._stTo=setTimeout(()=>xe("street").classList.remove("show"),4e3))}setMoney(t){let e=fe(t);if(e!==this._money){let n=this._mv!==void 0&&t>this._mv;if(this._money=e,this._mv=t,xe("money").textContent=e,xe("coins").classList.toggle("neg",t<0),n){let i=xe("coins");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}}setClock(t,e){this.hour=t;let n=this.clockText()+(e!=null?` \xB7 <span class="dot ${e>0?"on":""}"></span>${e+1}`:"");n!==this._clk&&(this._clk=n,xe("clock").innerHTML=n)}setLimit(t,e,n,i){let s=t>Mi;xe("limit").classList.toggle("show",t>Mi-12),xe("limit").classList.toggle("over",s);let o=n?"ACTIVE RUNWAY \u2013 LEAVE NOW":e?"WRONG WAY \u2013 ONE-WAY STREET":i||"";o!==this._w&&(this._w=o,xe("warn").textContent=o,xe("warn").classList.toggle("show",!!o))}setMission(t){t!==this._mission&&(this._mission=t,xe("mission").innerHTML=t||"",xe("mission").classList.toggle("show",!!t))}toast(t,e=3){let n=xe("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=xe("fine");xe("fineKind").textContent=t.kind.toUpperCase(),xe("fineAmt").textContent="\u2212"+fe(t.amount)+" \u0441\u043E\u043C",xe("fineDetail").textContent=t.detail,xe("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=xe("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=xe("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=xe("discover");xe("discName").textContent=t.name,xe("discLocal").textContent=t.local||"",xe("discFact").textContent=t.fact,xe("discCount").textContent=`Landmark ${e}/${n} \xB7 +500 \u0441\u043E\u043C`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=xe("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),xe("fhAlt").textContent=Math.round(t.alt)+" m",xe("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",xe("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",xe("fhStage").textContent=t.stage,xe("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var r1=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar","Saltanat","Ulan","Aidana","Bekzat","Kymbat","Marat"],ii=r=>r[Math.floor(Math.random()*r.length)],us={taxi:{name:"Taxi driver",icon:"\u{1F695}",desc:"Pick up passengers anywhere in the city"},bus:{name:"Bus driver",icon:"\u{1F68C}",desc:"Drive a city bus route, stop at every bus stop",car:"bus"},marshrutka:{name:"Marshrutka driver",icon:"\u{1F690}",desc:"Minibus route \u2013 faster, fewer passengers",car:"van"},courier:{name:"Courier",icon:"\u{1F4E6}",desc:"Deliver food & parcels from real shops"}},ka=class{constructor(t,e,n,i,s){this.map=t,this.game=e,this.hud=n,this.audio=i,this.peds=s,this.active=null,this.marker=null,this.completed=0,this.shops=[];for(let o of t.chunks.values())for(let a of o.signs)["cafe","restaurant","fast_food","supermarket","convenience","pharmacy","bakery","clothes"].includes(a.kind)&&this.shops.push(a)}_marker(t,e,n,i=16760864){if(!this.markerMesh){let s=new Ot,o=new q(new Bi(3.2,3.8,48).rotateX(-Math.PI/2),new le({color:i,transparent:!0,opacity:.9,depthWrite:!1}));o.position.y=.25;let a=new q(new Nt(3.5,3.5,40,32,1,!0),new le({color:i,transparent:!0,opacity:.1,side:we,depthWrite:!1,blending:Be}));a.position.y=20,s.add(o,a),this.markerMesh=s,this.ring=o,this.beam=a}this.ring.material.color.setHex(i),this.beam.material.color.setHex(i),this.markerMesh.position.set(e,0,n),this.markerMesh.parent||t.add(this.markerMesh),this.markerMesh.visible=!0}_hideMarker(){this.markerMesh&&(this.markerMesh.visible=!1)}_curbPoint(t,e,n=120){let i=this.map.nearestRoad(t,e,n,a=>a.cls>=1&&a.cls<=5);if(!i)return null;let s=i.lat>=0?1:-1,o=i.e.w/2+1.3;return{x:i.x-i.dz*o*s,z:i.z+i.dx*o*s,roadX:i.x-i.dz*(i.e.w/2-1.5)*s,roadZ:i.z+i.dx*(i.e.w/2-1.5)*s}}_spawnPed(t,e,n=!1,i){let s={mode:"plaza",zone:{x:t,z:e,r:.1,active:!0,count:0},x:t,z:e,h:0,tx:t,tz:e,idle:1e9,ex:0,ez:0,dodge:0,wave:n,fixed:!0};return s.shirt=i??ii([15909376,1981018,9054794,15263976,3890490]),s.pants=2238522,s.skin=ii([14200976,13146744,14728864]),s.hairC=1709072,s.scale=.95+Math.random()*.1,s.speed=1.3,s.phase=0,this.peds.list.push(s),s}_removePed(t){let e=this.peds.list.indexOf(t);e>=0&&this.peds.list.splice(e,1)}start(t,e,n,i){if(this.stop(e,i,!0),t==="taxi")return this._startTaxi(e,n);if(t==="courier")return this._startCourier(e,n);if(t==="bus"||t==="marshrutka")return this._startBus(t,e,n,i)}stop(t,e,n){let i=this.active;i&&(i.ped&&this._removePed(i.ped),(i.type==="bus"||i.type==="marshrutka")&&i.earned>0&&this.game.credit(i.earned,`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430: \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ${i.num} (\u043D\u0435\u043F\u043E\u043B\u043D\u044B\u0439)`,!0),i.boarders&&i.boarders.forEach(s=>this._removePed(s)),i.prevCar&&e&&e(i.prevCar.type,i.prevCar.color,!0),this.active=null,this._hideMarker(),this.game.clearRoute(),n||this.hud.toast("Shift ended",1.5))}_startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=this._curbPoint(t.x+Math.cos(i)*s,t.z+Math.sin(i)*s,80);if(!o||this.map.insideBuilding(o.x,o.z,.5))continue;let a=Ve.filter(c=>c.x!==void 0&&Math.hypot(c.x-o.x,c.z-o.z)>700&&(!c.airport||Math.random()<.35)),l=ii(a);if(Math.random()<.5&&this.shops.length){let c=ii(this.shops);Math.hypot(c.x-o.x,c.z-o.z)>600&&(l={name:c.name,x:c.x,z:c.z})}return this.active={type:"taxi",stage:"pickup",x:o.x,z:o.z,dest:l,passenger:ii(r1),t:0,damage0:t.damage},this.active.ped=this._spawnPed(o.x,o.z,!0,15909376),this.game.setRoute(o.x,o.z,"Passenger"),this._marker(e,o.x,o.z,16760864),this.audio.chime(),this.hud.toast(`\u{1F695} <b>${this.active.passenger}</b> is waiting for a taxi`,3),!0}return!1}_startCourier(t,e){let n=this.shops.filter(c=>{let h=Math.hypot(c.x-t.x,c.z-t.z);return h>120&&h<900});if(!n.length)return!1;let i=ii(n),s=this._curbPoint(i.x,i.z,60)||{x:i.x,z:i.z},o=null;for(let c=0;c<60&&!o;c++){let h=this.map.buildings[Math.floor(Math.random()*this.map.buildings.length)],u=Math.hypot(h.cx-s.x,h.cz-s.z);u>900&&u<3200&&h.h>3&&(o=h)}if(!o)return!1;let a=this._curbPoint(o.cx,o.cz,80)||{x:o.cx,z:o.cz},l={cafe:"coffee & samsa",restaurant:"plov & lagman",fast_food:"shawarma",supermarket:"groceries",convenience:"a parcel",pharmacy:"medicine",bakery:"fresh nan",clothes:"a clothes parcel"}[i.kind]||"a parcel";return this.active={type:"courier",stage:"pickup",x:s.x,z:s.z,shop:i,item:l,dest:{name:"Customer",x:a.x,z:a.z},t:0,damage0:t.damage},this.game.setRoute(s.x,s.z,i.name),this._marker(e,s.x,s.z,4251776),this.audio.chime(),this.hud.toast(`\u{1F4E6} Pick up <b>${l}</b> at <b>${i.name}</b>`,3),!0}_startBus(t,e,n,i){let s=this.map.busStopList,o=s.map(a=>({s:a,d:Math.hypot(a[0]-e.x,a[1]-e.z)})).filter(a=>a.d<1500).sort((a,l)=>a.d-l.d).slice(0,12);if(!o.length)return this.hud.toast("No bus stops nearby \u2013 drive into the city",2),!1;for(let a=0;a<12;a++){let l=ii(o).s,c=s.filter(y=>{let _=Math.hypot(y[0]-l[0],y[1]-l[1]);return _>2500&&_<5500});if(!c.length)continue;let h=ii(c),u=this.map.route(l[0],l[1],h[0],h[1]);if(!u||u.length<8)continue;let p=[],d=0;for(let y=0;y<u.length-2;y+=2){let _=u[y],v=u[y+1],R=u[y+2],E=u[y+3],b=R-_,C=E-v,M=Math.hypot(b,C)||1;for(let w of s){if(Math.abs(w[0]-_)>M+25||Math.abs(w[1]-v)>M+25)continue;let A=((w[0]-_)*b+(w[1]-v)*C)/(M*M);if(A<0||A>1)continue;let z=_+b*A,L=v+C*A,N=((w[0]-_)*-C+(w[1]-v)*b)/M;Math.abs(N)<22&&N>-4&&p.push({x:w[0],z:w[1],d:d+A*M,px:z,pz:L})}d+=M}p.sort((y,_)=>y.d-_.d);let g=[];for(let y of p)(!g.length||y.d-g[g.length-1].d>220)&&g.push(y);if(g.length<4)continue;let m=ii(t==="bus"?["7","20","31","35","38","42","48","52","62","64"]:["107","110","126","144","150","174","192","206","212","238","246","265"]);this.active={type:t,stage:"drive",stops:g.slice(0,12),i:0,num:m,t:0,pax:0,earned:0,boarders:[],prevCar:{type:e.type,color:e.color}},i(us[t].car,t==="bus"?2783802:16053492,!1);let x=this.active.stops[0],f=this.map.nearestRoad(x.px,x.pz,40,y=>y.cls<=4);if(f){let y=this.map.laneOffset(f.e,(f.e.ow,f.e.lanes-1)),_=u[2]-u[0],v=u[3]-u[1],R=f.dx,E=f.dz;R*_+E*v<0&&(R=-R,E=-E),e.place(f.x-E*y,f.z+R*y,Math.atan2(R,E))}return this.active.i=1,this._nextStop(n),this.audio.chime(),this.hud.toast(`${us[t].icon} Route <b>${m}</b>: ${g.length} stops. Stop at each bus stop to pick up passengers.`,4),!0}return this.hud.toast("Could not build a route here \u2013 try on a main avenue",2),!1}_nextStop(t){let e=this.active,n=e.stops[e.i];this.game.setRoute(n.x,n.z,`Stop ${e.i+1}/${e.stops.length}`),this._marker(t,n.px,n.pz,4235519),e.boarders.forEach(s=>this._removePed(s)),e.boarders=[];let i=1+Math.floor(Math.random()*(e.type==="bus"?6:4));for(let s=0;s<i;s++)e.boarders.push(this._spawnPed(n.x+(Math.random()-.5)*4,n.z+(Math.random()-.5)*3,!1))}update(t,e,n,i){let s=this.active;return s?(s.t+=t,this.markerMesh&&(this.ring.rotation.y+=t,this.beam.material.opacity=.08+.05*Math.sin(s.t*4)),s.type==="taxi"||s.type==="courier"?this._updateAB(t,e,n):this._updateBus(t,e,n,i)):null}_updateAB(t,e,n){let i=this.active,s=Math.hypot(e.x-i.x,e.z-i.z);if(i.ped&&i.stage==="pickup"&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.moving=!1),i.stage==="pickup"&&s<10&&e.speed<1.5)return i.ped?(i.stage="boarding",i.ped.wave=!1,i.ped.tx=e.x,i.ped.tz=e.z,i.ped.idle=0,i.ped.zone.r=.1,i.bt=0):this._beginRide(e,n),null;if(i.stage==="boarding"){i.bt+=t;let o=i.ped,a=e.x-o.x,l=e.z-o.z,c=Math.hypot(a,l);return c>2&&i.bt<5?(o.x+=a/c*1.6*t,o.z+=l/c*1.6*t,o.h=Math.atan2(a,l),o.moving=!0,o.phase+=t*8):(this._removePed(o),i.ped=null,this.audio.blip(520,.06),this._beginRide(e,n)),null}if(i.stage==="ride"&&s<14&&e.speed<1.5){let o=i.t-i.t0,a=i.dist,l=i.type==="taxi"?120+a/1e3*55:90+a/1e3*45,c=a/1e3*95+35,h=Math.max(0,e.damage-i.damage0),u=o<c?Math.min(l*.4,(c-o)*1.2):0,p=h*(i.type==="courier"?6:3),d=Math.max(1,Math.min(5,Math.round(5-h/8-Math.max(0,o-c)/40))),g=Math.max(20,Math.round((l+u-p)*(.6+d*.1)/5)*5);this.game.money+=g,this.completed++,this.audio.cash(),this.hud.toast(`${i.type==="taxi"?"\u{1F695}":"\u{1F4E6}"} +${g} \u0441\u043E\u043C \xB7 ${"\u2605".repeat(d)}${"\u2606".repeat(5-d)}${i.type==="taxi"?` \xB7 ${i.passenger}: "Rahmat!"`:""}`,4);let m=i.type;return this.active=null,this._hideMarker(),this.game.clearRoute(),this.nextIn=3,this.nextType=m,{done:!0,coins:g}}return null}_beginRide(t,e){let n=this.active;n.stage="ride",n.t0=n.t,n.x=n.dest.x,n.z=n.dest.z,n.dist=Math.hypot(n.x-t.x,n.z-t.z),this.game.setRoute(n.x,n.z,n.dest.name),this._marker(e,n.x,n.z,n.type==="taxi"?16728160:4251776),this.audio.chime(),this.hud.toast(n.type==="taxi"?`${n.passenger}: "Salam! To ${n.dest.name}, please."`:`\u{1F4E6} Got ${n.item}. Deliver it carefully!`,3)}_updateBus(t,e,n,i){let s=this.active,o=s.stops[s.i],a=Math.hypot(e.x-o.px,e.z-o.pz);if(s.stage==="drive"&&a<14&&e.speed<1&&(s.stage="doors",s.dt=0,this.audio.blip(440,.1)),s.stage==="doors"){s.dt+=t;let l=0;for(let c of s.boarders){if(c.gone)continue;let h=e.x-c.x,u=e.z-c.z,p=Math.hypot(h,u);p<2.8||s.dt>7?(c.gone=!0,this._removePed(c),s.pax++,s.earned+=s.type==="bus"?15:20,this.audio.blip(880,.03,.05)):(c.x+=h/p*1.7*t,c.z+=u/p*1.7*t,c.h=Math.atan2(h,u),c.moving=!0,c.phase+=t*8,l++)}if(e.speed>2&&(s.stage="drive",this.hud.toast("You left before everyone boarded!",1.5)),!l&&s.dt>2.5){if(s.i++,s.i>=s.stops.length){let c=150+s.stops.length*20;s.earned+=c,this.completed++,this.game.credit(s.earned,`\u0417\u0430\u0440\u043F\u043B\u0430\u0442\u0430: \u043C\u0430\u0440\u0448\u0440\u0443\u0442 ${s.num}`,!0),this.audio.cash(),this.hud.toast(`\u{1F3C1} Route ${s.num} complete! ${s.pax} passengers \xB7 +${s.earned} \u0441\u043E\u043C`,5);let h=s.prevCar;return this.active=null,this._hideMarker(),this.game.clearRoute(),i(h.type,h.color,!0),{done:!0,coins:s.earned}}s.stage="drive",this._nextStop(n)}}return null}status(t){let e=this.active;return e?e.type==="taxi"?e.stage==="ride"?`\u{1F695} ${e.passenger} \u2192 ${e.dest.name}`:`\u{1F695} Pick up ${e.passenger}`:e.type==="courier"?e.stage==="ride"?`\u{1F4E6} Deliver ${e.item}`:`\u{1F4E6} Pick up at ${e.shop.name}`:`${us[e.type].icon} Route ${e.num} \xB7 stop ${Math.min(e.i+1,e.stops.length)}/${e.stops.length} \xB7 ${e.pax} pax`:null}};var o1="wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket",ff="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU",Vh="realtime:bskdrive-world-v1";function a1(){try{let r=localStorage.getItem("bd_uid");return r||(r=Math.random().toString(36).slice(2,10),localStorage.setItem("bd_uid",r)),r}catch{return Math.random().toString(36).slice(2,10)}}function pf(r,t="#ffffff"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font="700 30px Inter, Arial";let i=Math.min(248,n.measureText(r).width+28);n.fillStyle="rgba(10,14,20,0.72)";let s=18,o=(256-i)/2;n.beginPath(),n.moveTo(o+s,8),n.arcTo(o+i,8,o+i,56,s),n.arcTo(o+i,56,o,56,s),n.arcTo(o,56,o,8,s),n.arcTo(o,8,o+i,8,s),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,33);let a=new be(e);a.colorSpace=Ee;let l=new yn(new un({map:a,depthTest:!0,transparent:!0}));return l.scale.set(4.2,1.05,1),l}var Ua=class{constructor(t){this.scene=t,this.id=a1(),this.players=new Map,this.ws=null,this.ref=1,this.joined=!1,this.status="offline",this.enabled=!1,this.sendT=0,this.hbT=0,this.onChat=null,this.onJoin=null,this.lastSent=null}connect(t){this.name=(t||"Driver").slice(0,18),this.enabled=!0,this._open()}disconnect(){if(this.enabled=!1,this.ws)try{this._push("bye",{i:this.id}),this.ws.close()}catch{}this.ws=null,this.joined=!1,this.status="offline";for(let t of[...this.players.keys()])this._drop(t)}_open(){if(!this.enabled)return;this.status="connecting";let t;try{t=new WebSocket(`${o1}?apikey=${ff}&vsn=1.0.0`)}catch{this._retry();return}this.ws=t,t.onopen=()=>{t.send(JSON.stringify({topic:Vh,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:this.id}},access_token:ff},ref:String(this.ref++),join_ref:"1"}))},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.event==="phx_reply"&&n.topic===Vh&&n.payload?.status==="ok"&&!this.joined){this.joined=!0,this.status="online",this.backoff=1,this._push("hi",{i:this.id,n:this.name});return}n.event==="broadcast"&&n.payload&&this._recv(n.payload.event,n.payload.payload)},t.onclose=()=>{this.joined=!1,this.status="offline",this.ws=null,this._retry()},t.onerror=()=>{}}_retry(){this.enabled&&(this.backoff=Math.min(30,(this.backoff||1)*2),clearTimeout(this._rt),this._rt=setTimeout(()=>this._open(),this.backoff*1e3))}_push(t,e){!this.ws||this.ws.readyState!==1||!this.joined||this.ws.send(JSON.stringify({topic:Vh,event:"broadcast",payload:{type:"broadcast",event:t,payload:e},ref:String(this.ref++),join_ref:"1"}))}chat(t){t=String(t).slice(0,120).trim(),t&&(this._push("c",{i:this.id,n:this.name,m:t}),this.onChat&&this.onChat(this.name,t,!0))}sendMoney(t,e){this._push("pay",{i:this.id,n:this.name,to:t,a:Math.round(e)})}dm(t,e){this._push("dm",{i:this.id,n:this.name,to:t,m:String(e).slice(0,200)})}_recv(t,e){if(!(!e||e.i===this.id)){if(t==="pay"){e.to===this.id&&e.a>0&&e.a<=1e6&&this.onPay&&this.onPay(e.n,e.a,e.i);return}if(t==="dm"){e.to===this.id&&this.onDM&&this.onDM(e.n,e.m,e.i);return}if(t==="s"){let n=this.players.get(e.i);n||(n=this._add(e)),(n.type!==e.t||n.color!==e.c)&&this._rebuild(n,e.t,e.c),n.name!==e.n&&(n.name=e.n,n.group.remove(n.tag),n.tag=pf(e.n),n.tag.position.y=n.spec.roof[2][1]+1.6,n.group.add(n.tag)),n.snaps.push({t:performance.now(),x:e.x,z:e.z,h:e.h,v:e.v,b:e.b}),n.snaps.length>20&&n.snaps.shift(),n.last=performance.now(),n.money=e.m??n.money,n.job=e.j||"",n.jobs=e.k??n.jobs}else t==="c"?this.onChat&&this.onChat(e.n,e.m,!1):t==="hi"?(this.onJoin&&this.onJoin(e.n),this.sendT=0,this.lastSent=null):t==="bye"&&this._drop(e.i)}}_add(t){let e=new Ot,n={id:t.i,name:t.n,group:e,snaps:[],last:performance.now(),x:t.x,z:t.z,h:t.h,money:0,type:null,color:null};return this.players.set(t.i,n),this._rebuild(n,t.t,t.c),n.tag=pf(t.n),n.tag.position.y=n.spec.roof[2][1]+1.6,e.add(n.tag),this.scene.add(e),this.onJoin&&this.onJoin(t.n),n}_rebuild(t,e,n){t.body&&(t.group.remove(t.body),t.body.traverse(c=>c.geometry&&c.geometry.dispose()));let i=Nn(["sedan","suv","coupe","hatch","oldsedan","van","bus"].includes(e)?e:"sedan",{}),s=new Ot,o=new q(i.paint,new Hi({color:n??16777215,metalness:.45,roughness:.32,clearcoat:1,vertexColors:!0})),a=new q(i.detail,new lt({vertexColors:!0,metalness:.3,roughness:.3}));t.lightMat=new lt({vertexColors:!0,emissive:16777215,emissiveIntensity:.3});let l=new q(i.lights,t.lightMat);o.castShadow=a.castShadow=!0,s.add(o,a,l),t.body=s,t.group.add(s),t.spec=i.spec,t.type=e,t.color=n,t.tag&&(t.tag.position.y=i.spec.roof[2][1]+1.6)}_drop(t){let e=this.players.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.players.delete(t))}update(t,e,n,i){if(!this.enabled)return;let s=performance.now();if(this.sendT-=t,this.hbT-=t,this.joined&&this.sendT<=0){let a=e.speed>.3,l={i:this.id,n:this.name,t:e.type,c:e.color,x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,h:Math.round(e.h*1e3)/1e3,v:Math.round(e.speed*10)/10,b:e.braking?1:0,m:Math.round(n.money),j:n.job||"",k:n.jobs||0};this._push("s",l),this.sendT=a?.16:1}this.hbT<=0&&this.ws&&this.ws.readyState===1&&(this.hbT=25,this.ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(this.ref++)})));let o=s-200;for(let[a,l]of this.players){if(s-l.last>8e3){this._drop(a);continue}let c=l.snaps;if(!c.length)continue;let h=c[0],u=c[c.length-1];for(let m=0;m<c.length-1;m++)if(c[m].t<=o&&c[m+1].t>=o){h=c[m],u=c[m+1];break}let p,d,g;if(o>=u.t){let m=Math.min(.5,(o-u.t)/1e3);p=u.x+Math.sin(u.h)*u.v*m,d=u.z+Math.cos(u.h)*u.v*m,g=u.h}else{let m=(o-h.t)/Math.max(1,u.t-h.t);p=h.x+(u.x-h.x)*m,d=h.z+(u.z-h.z)*m;let x=u.h-h.h;x=Math.atan2(Math.sin(x),Math.cos(x)),g=h.h+x*m}l.x=p,l.z=d,l.h=g,l.v=u.v,l.group.position.set(p,.02,d),l.group.rotation.y=g,l.lightMat.emissiveIntensity=u.b?1.4:i>.45?1.8:.3}}collide(t,e){for(let n of this.players.values()){let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s>200)continue;let o=n.spec.W/2,a=Math.max(2,Math.round(n.spec.L/2.2));for(let l=0;l<a;l++){let c=(l/(a-1)-.5)*(n.spec.L-o*2),h=n.x+Math.sin(n.h)*c,u=n.z+Math.cos(n.h)*c;for(let p of[t.spec.L*.3,0,-t.spec.L*.3]){let d=t.x+Math.sin(t.h)*p,g=t.z+Math.cos(t.h)*p,m=d-h,x=g-u,f=Math.hypot(m,x),y=t.radius+o;if(f<y&&f>1e-4){let _=m/f,v=x/f;t.x+=_*(y-f),t.z+=v*(y-f);let R=(t.vx-Math.sin(n.h)*n.v)*_+(t.vz-Math.cos(n.h)*n.v)*v;R<0&&(t.vx-=_*R*1.2,t.vz-=v*R*1.2,-R>2&&e&&e(-R,"player"))}}}}}list(){return[...this.players.values()].map(t=>({id:t.id,name:t.name,money:t.money||0,job:t.job,car:t.type,x:t.x,z:t.z}))}};var Wi={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var _n=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},l1=new Ys(-1,1,1,-1,0,1),Wh=class extends oe{constructor(){super(),this.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Xt([0,2,0,0,2,0],2))}},c1=new Wh,si=class{constructor(t){this._mesh=new q(c1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,l1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ds=class extends _n{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof de?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=fn.clone(t.uniforms),this.material=new de({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new si(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var qr=class extends _n{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Na=class extends _n{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var Ba=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new tt);this._width=n.width,this._height=n.height,e=new $e(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ds(Wi),this.copyPass.material.blending=Je,this.clock=new nr}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qr!==void 0&&(o instanceof qr?n=!0:o instanceof Na&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new tt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var mf={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var hr=class r extends _n{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new tt(t.x,t.y):new tt(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new $e(s,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let p=new $e(s,o,{type:dn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);let d=new $e(s,o,{type:dn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let a=mf;this.highPassUniforms=fn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new de({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new tt(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=Wi;this.copyUniforms=fn.clone(h.uniforms),this.blendMaterial=new de({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Be,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new le,this.fsQuad=new si(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new tt(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new de({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new tt(.5,.5)},direction:{value:new tt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};hr.BlurDirectionX=new tt(1,0);hr.BlurDirectionY=new tt(0,1);var gf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var Ha=class extends _n{constructor(){super();let t=gf;this.uniforms=fn.clone(t.uniforms),this.material=new ra({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new si(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},me.getTransfer(this._outputColorSpace)===Re&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===fh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Yr={name:"GTAOShader",defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new tt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new jt},cameraProjectionMatrixInverse:{value:new jt},cameraWorldMatrix:{value:new jt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new I(-1,-1,-1)},sceneBoxMax:{value:new I(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Zr={name:"GTAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Fa={name:"GTAOBlendShader",uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function xf(r=5){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=h1(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){let a=e[o],l=2*Math.PI*a/n,c=new I(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}let s=new os(i,t,t);return s.wrapS=Wn,s.wrapT=Wn,s.needsUpdate=!0,s}function h1(r){let t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,n=Array(e).fill(0),i=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(i===-1&&s===t?(s=t-2,i=0):(s===t&&(s=0),i<0&&(i=t-1)),n[i*t+s]!==0){s-=2,i++;continue}else n[i*t+s]=o++;s++,i--}return n}var Jr={name:"PoissonDenoiseShader",defines:{SAMPLES:16,SAMPLE_VECTORS:Xh(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new tt},cameraProjectionMatrixInverse:{value:new jt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Xh(r,t,e){let n=u1(r,t,e),i="vec3[SAMPLES](";for(let s=0;s<r;s++){let o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function u1(r,t,e){let n=[];for(let i=0;i<r;i++){let s=2*Math.PI*t*i/r,o=Math.pow(i/(r-1),e);n.push(new I(Math.cos(s),Math.sin(s),o))}return n}var Oa=class{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}noise(t,e){let n,i,s,o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,p=l-u,d=c-u,g=t-p,m=e-d,x,f;g>m?(x=1,f=0):(x=0,f=1);let y=g-x+h,_=m-f+h,v=g-1+2*h,R=m-1+2*h,E=l&255,b=c&255,C=this.perm[E+this.perm[b]]%12,M=this.perm[E+x+this.perm[b+f]]%12,w=this.perm[E+1+this.perm[b+1]]%12,A=.5-g*g-m*m;A<0?n=0:(A*=A,n=A*A*this.dot(this.grad3[C],g,m));let z=.5-y*y-_*_;z<0?i=0:(z*=z,i=z*z*this.dot(this.grad3[M],y,_));let L=.5-v*v-R*R;return L<0?s=0:(L*=L,s=L*L*this.dot(this.grad3[w],v,R)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a,c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),p=Math.floor(n+c),d=1/6,g=(h+u+p)*d,m=h-g,x=u-g,f=p-g,y=t-m,_=e-x,v=n-f,R,E,b,C,M,w;y>=_?_>=v?(R=1,E=0,b=0,C=1,M=1,w=0):y>=v?(R=1,E=0,b=0,C=1,M=0,w=1):(R=0,E=0,b=1,C=1,M=0,w=1):_<v?(R=0,E=0,b=1,C=0,M=1,w=1):y<v?(R=0,E=1,b=0,C=0,M=1,w=1):(R=0,E=1,b=0,C=1,M=1,w=0);let A=y-R+d,z=_-E+d,L=v-b+d,N=y-C+2*d,F=_-M+2*d,B=v-w+2*d,J=y-1+3*d,O=_-1+3*d,V=v-1+3*d,j=h&255,it=u&255,ut=p&255,xt=this.perm[j+this.perm[it+this.perm[ut]]]%12,S=this.perm[j+R+this.perm[it+E+this.perm[ut+b]]]%12,Y=this.perm[j+C+this.perm[it+M+this.perm[ut+w]]]%12,nt=this.perm[j+1+this.perm[it+1+this.perm[ut+1]]]%12,K=.6-y*y-_*_-v*v;K<0?i=0:(K*=K,i=K*K*this.dot3(this.grad3[xt],y,_,v));let mt=.6-A*A-z*z-L*L;mt<0?s=0:(mt*=mt,s=mt*mt*this.dot3(this.grad3[S],A,z,L));let yt=.6-N*N-F*F-B*B;yt<0?o=0:(yt*=yt,o=yt*yt*this.dot3(this.grad3[Y],N,F,B));let At=.6-J*J-O*O-V*V;return At<0?a=0:(At*=At,a=At*At*this.dot3(this.grad3[nt],J,O,V)),32*(i+s+o+a)}noise4d(t,e,n,i){let s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20,h,u,p,d,g,m=(t+e+n+i)*l,x=Math.floor(t+m),f=Math.floor(e+m),y=Math.floor(n+m),_=Math.floor(i+m),v=(x+f+y+_)*c,R=x-v,E=f-v,b=y-v,C=_-v,M=t-R,w=e-E,A=n-b,z=i-C,L=M>w?32:0,N=M>A?16:0,F=w>A?8:0,B=M>z?4:0,J=w>z?2:0,O=A>z?1:0,V=L+N+F+B+J+O,j=o[V][0]>=3?1:0,it=o[V][1]>=3?1:0,ut=o[V][2]>=3?1:0,xt=o[V][3]>=3?1:0,S=o[V][0]>=2?1:0,Y=o[V][1]>=2?1:0,nt=o[V][2]>=2?1:0,K=o[V][3]>=2?1:0,mt=o[V][0]>=1?1:0,yt=o[V][1]>=1?1:0,At=o[V][2]>=1?1:0,$t=o[V][3]>=1?1:0,ot=M-j+c,dt=w-it+c,U=A-ut+c,Ft=z-xt+c,gt=M-S+2*c,Lt=w-Y+2*c,_t=A-nt+2*c,Jt=z-K+2*c,zt=M-mt+3*c,D=w-yt+3*c,P=A-At+3*c,Q=z-$t+3*c,st=M-1+4*c,ht=w-1+4*c,rt=A-1+4*c,Ht=z-1+4*c,Mt=x&255,bt=f&255,te=y&255,ft=_&255,Ct=a[Mt+a[bt+a[te+a[ft]]]]%32,Yt=a[Mt+j+a[bt+it+a[te+ut+a[ft+xt]]]]%32,ee=a[Mt+S+a[bt+Y+a[te+nt+a[ft+K]]]]%32,kt=a[Mt+mt+a[bt+yt+a[te+At+a[ft+$t]]]]%32,he=a[Mt+1+a[bt+1+a[te+1+a[ft+1]]]]%32,Qt=.6-M*M-w*w-A*A-z*z;Qt<0?h=0:(Qt*=Qt,h=Qt*Qt*this.dot4(s[Ct],M,w,A,z));let pe=.6-ot*ot-dt*dt-U*U-Ft*Ft;pe<0?u=0:(pe*=pe,u=pe*pe*this.dot4(s[Yt],ot,dt,U,Ft));let X=.6-gt*gt-Lt*Lt-_t*_t-Jt*Jt;X<0?p=0:(X*=X,p=X*X*this.dot4(s[ee],gt,Lt,_t,Jt));let Tt=.6-zt*zt-D*D-P*P-Q*Q;Tt<0?d=0:(Tt*=Tt,d=Tt*Tt*this.dot4(s[kt],zt,D,P,Q));let et=.6-st*st-ht*ht-rt*rt-Ht*Ht;return et<0?g=0:(et*=et,g=et*et*this.dot4(s[he],st,ht,rt,Ht)),27*(h+u+p+d+g)}};var ur=class r extends _n{constructor(t,e,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=xf(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new $e(this.width,this.height,{type:dn}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new de({defines:Object.assign({},Yr.defines),uniforms:fn.clone(Yr.uniforms),vertexShader:Yr.vertexShader,fragmentShader:Yr.fragmentShader,blending:Je,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new oa,this.normalMaterial.blending=Je,this.pdMaterial=new de({defines:Object.assign({},Jr.defines),uniforms:fn.clone(Jr.uniforms),vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new de({defines:Object.assign({},Zr.defines),uniforms:fn.clone(Zr.uniforms),vertexShader:Zr.vertexShader,fragmentShader:Zr.fragmentShader,blending:Je}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new de({uniforms:fn.clone(Wi.uniforms),vertexShader:Wi.vertexShader,fragmentShader:Wi.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:ua,blendDst:ir,blendEquation:Dn,blendSrcAlpha:ha,blendDstAlpha:ir,blendEquationAlpha:Dn}),this.blendMaterial=new de({uniforms:fn.clone(Fa.uniforms),vertexShader:Fa.vertexShader,fragmentShader:Fa.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:dh,blendSrc:ua,blendDst:ir,blendEquation:Dn,blendSrcAlpha:ha,blendDstAlpha:ir,blendEquationAlpha:Dn}),this.fsQuad=new si(null),this.originalClearColor=new St,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Js,this.depthTexture.format=ki,this.depthTexture.type=Di,this.normalRenderTarget=new $e(this.width,this.height,{minFilter:hn,magFilter:hn,type:dn,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);let n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Xh(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case r.OUTPUT.Off:break;case r.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case r.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Je,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,i,s){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,i,s){t.getClearColor(this.originalClearColor);let o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){let t=this.scene,e=this._visibilityCache;t.traverse(function(n){let i=e.get(n);n.visible=i}),e.clear()}generateNoise(t=64){let e=new Oa,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){let l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}let s=new os(i,t,t,An,Xn);return s.wrapS=Wn,s.wrapT=Wn,s.needsUpdate=!0,s}};ur.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};var $h=class extends _n{constructor(t,e,n){super(),this.env=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),this.env.render(t),t.clearDepth(),t.render(this.scene,this.camera)}},d1={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); c.rgb = clamp(c.rgb, 0.0, 30.0); if (any(isnan(c.rgb))) c.rgb = vec3(0.0); gl_FragColor = c; }"},f1={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uContrast:{value:1.06},uWarm:{value:.02},uTime:{value:0},uGrain:{value:.025}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette, uSat, uContrast, uWarm, uTime, uGrain; varying vec2 vUv;
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
    }`},Ga=class{constructor(t,e,n,i,s){this.renderer=t;let o=t.getDrawingBufferSize(new tt),a=new $e(o.x,o.y,{type:dn,samples:s.msaa?4:0});this.composer=new Ba(t,a),this.composer.addPass(new $h(e,n,i)),this.composer.addPass(new ds(d1)),s.ao&&(this.ao=new ur(n,i,o.x,o.y),this.ao.output=ur.OUTPUT.Default,this.ao.blendIntensity=.85,this.ao.updateGtaoMaterial({radius:1.2,distanceExponent:1.5,thickness:2,scale:1.4,samples:12}),this.ao.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:6,rings:2,samples:12}),this.composer.addPass(this.ao)),this.bloom=new hr(new tt(o.x/2,o.y/2),.35,.55,.92),this.bloom.enabled=s.bloom!==!1,this.composer.addPass(this.bloom),this.composer.addPass(new Ha),this.grade=new ds(f1),this.composer.addPass(this.grade)}setSize(t,e){this.composer.setSize(t,e)}setNight(t){this.bloom.strength=.18+t*.7,this.bloom.threshold=14-t*13.1,this.grade.uniforms.uWarm.value=.015*(1-t),this.grade.uniforms.uSat.value=1.08-t*.1}render(t){this.grade.uniforms.uTime.value+=t,this.composer.render(t)}};var Va=class{constructor(t){this.scene=t,this.ND=260;let e=new pt(1,1,1);this.debris=new Se(e,new lt({roughness:.4,metalness:.4}),this.ND),this.debris.instanceMatrix.setUsage(rr),this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.debris.count=0,this.debris.setColorAt(0,new St),t.add(this.debris),this.parts=[],this.NS=200,this.sparkPos=new Float32Array(this.NS*3);let n=new oe;n.setAttribute("position",new ge(this.sparkPos,3)),this.sparkPts=new xi(n,new as({color:16762976,size:.18,transparent:!0,blending:Be,depthWrite:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.sparks=[];let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),o=s.createRadialGradient(32,32,2,32,32,30);o.addColorStop(0,"rgba(255,255,255,0.9)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,64,64),this.smokeTex=new be(i),this.smokePool=[];for(let a=0;a<140;a++){let l=new yn(new un({map:this.smokeTex,color:3355443,transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,t.add(l),this.smokePool.push({s:l,life:0})}this.si=0,this.emitters=[],this.M=new jt,this.Q=new ke,this.E=new en,this.V=new I,this.S=new I,this.C=new St}crash(t,e,n,i,s,o,a=13421772){let l=Math.min(26,Math.round(4+o*1.6));for(let h=0;h<l;h++){let u=Math.random(),p=u<.35?12572904:u<.6?1381653:u<.7?16724e3:a,d=u<.35?.05+Math.random()*.06:.08+Math.random()*.22,g=2+Math.random()*o*.5,m=Math.atan2(s,i)+(Math.random()-.5)*2.2;this._part({x:t,y:e+Math.random()*.5,z:n,vx:Math.cos(m)*g,vy:1.5+Math.random()*3.5,vz:Math.sin(m)*g,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*20,wy:(Math.random()-.5)*20,s:d,sx:d*(u<.35?1.4:1+Math.random()*2),life:5+Math.random()*4,col:p})}let c=Math.min(40,Math.round(o*3));for(let h=0;h<c;h++){let u=Math.random()*Math.PI*2,p=2+Math.random()*6;this.sparks.push({x:t,y:e+.4,z:n,vx:Math.cos(u)*p+i*2,vy:Math.random()*4,vz:Math.sin(u)*p+s*2,life:.3+Math.random()*.4}),this.sparks.length>this.NS&&this.sparks.shift()}for(let h=0;h<4;h++)this.puff(t,e+.5,n,7829367,1.5)}_part(t){this.parts.length>=this.ND&&this.parts.shift(),this.parts.push(t)}puff(t,e,n,i=3355443,s=1,o=1.2){let a=this.smokePool[this.si++%this.smokePool.length];a.s.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.s.material.color.setHex(i),a.life=1,a.size=s,a.vy=o*(.7+Math.random()*.6),a.vx=(Math.random()-.5)*.6,a.vz=(Math.random()-.5)*.6,a.s.visible=!0}emitter(t,e,n=!0){let i={obj:t,offset:e,dark:n,t:0};return this.emitters.push(i),i}removeEmitter(t){let e=this.emitters.indexOf(t);e>=0&&this.emitters.splice(e,1)}update(t){let{M:e,Q:n,E:i,V:s,S:o,C:a}=this,l=0;for(let h=this.parts.length-1;h>=0;h--){let u=this.parts[h];if(u.life-=t,u.life<=0){this.parts.splice(h,1);continue}(u.y>u.s*.5||u.vy>0)&&(u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.rx+=u.wx*t,u.ry+=u.wy*t,u.y<u.s*.5&&(u.y=u.s*.5,u.vy=-u.vy*.3,u.vx*=.6,u.vz*=.6,u.wx*=.5,u.wy*=.5,Math.abs(u.vy)<.5&&(u.vy=0)))}for(let h of this.parts){i.set(h.rx,h.ry,0),n.setFromEuler(i);let u=Math.min(1,h.life);e.compose(s.set(h.x,h.y+.12,h.z),n,o.set(h.sx*u,h.s*.35*u,h.s*u)),this.debris.setMatrixAt(l,e),this.debris.setColorAt(l,a.setHex(h.col)),l++}this.debris.count=l,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor&&(this.debris.instanceColor.needsUpdate=!0);let c=0;for(let h=this.sparks.length-1;h>=0;h--){let u=this.sparks[h];if(u.life-=t,u.life<=0){this.sparks.splice(h,1);continue}u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t}for(let h of this.sparks)this.sparkPos[c*3]=h.x,this.sparkPos[c*3+1]=Math.max(.05,h.y),this.sparkPos[c*3+2]=h.z,c++;this.sparkPts.geometry.setDrawRange(0,c),this.sparkPts.geometry.attributes.position.needsUpdate=!0;for(let h of this.emitters)if(h.t-=t,h.t<=0){h.t=h.dark?.12:.25;let u=h.obj,p=Math.cos(u.h),d=Math.sin(u.h),g=h.offset[0],m=h.offset[2];this.puff(u.x+g*p+m*d,h.offset[1],u.z-g*d+m*p,h.dark?2236962:10066329,h.dark?1.4:.9,h.dark?2.2:1.2)}for(let h of this.smokePool)h.life<=0||(h.life-=t*.35,h.s.position.x+=h.vx*t,h.s.position.y+=h.vy*t,h.s.position.z+=h.vz*t,h.s.scale.setScalar(h.size*(1+(1-h.life)*4)),h.s.material.opacity=Math.max(0,h.life*.55),h.life<=0&&(h.s.visible=!1))}};function p1(){let r=document.createElement("canvas");r.width=512,r.height=96;let t=r.getContext("2d");t.fillStyle="#1446a0",t.fillRect(0,30,512,40),t.fillStyle="#ffffff",t.font="bold 34px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("\u041F\u0410\u0422\u0420\u0423\u041B\u042C\u041D\u0410\u042F \u041C\u0418\u041B\u0418\u0426\u0418\u042F",256,51);let e=new be(r);return e.colorSpace=Ee,e.anisotropy=4,e}function m1(){let r=new Ot,t=new lt({color:2896962,roughness:.8}),e=new lt({color:13164576,roughness:.6,emissive:3160064}),n=new lt({color:13146744}),i=(a,l,c,h,u)=>{let p=new q(a,l);return p.position.set(c,h,u),p.castShadow=!0,r.add(p),p};i(new pt(.46,.62,.27),e,0,1.25,0),i(new pt(.4,.2,.24),t,0,.9,0),i(new ye(.12,12,10),n,0,1.7,0),i(new Nt(.15,.14,.08,14),t,0,1.84,0),i(new pt(.34,.03,.36),t,0,1.8,.04);let s=[],o=[];for(let a of[-1,1]){let l=new Ot;l.position.set(.1*a,.9,0);let c=new q(new pt(.15,.88,.16).translate(0,-.44,0),t);c.castShadow=!0,l.add(c),r.add(l),s.push(l);let h=new Ot;h.position.set(.28*a,1.52,0);let u=new q(new pt(.1,.62,.11).translate(0,-.31,0),t);u.castShadow=!0,h.add(u),r.add(h),o.push(h)}return r.userData={legs:s,arms:o},r}var Wa=class{constructor(t,e,n,i,s,o){this.scene=t,this.map=e,this.world=n,this.audio=i,this.hud=s,this.fx=o,this.cars=[],this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this.lastSeen=0,this.cutscene=null;let a=Nn("sedan",{});this.geo=a,this.mats={paint:new Hi({color:16054008,metalness:.4,roughness:.3,clearcoat:1,vertexColors:!0}),det:new lt({vertexColors:!0,metalness:.3,roughness:.3}),red:new lt({color:4194304,emissive:16715792,emissiveIntensity:0}),blue:new lt({color:64,emissive:1065215,emissiveIntensity:0}),text:new lt({map:p1(),transparent:!0,roughness:.4}),stripe:new lt({color:1328800,roughness:.4})},this.lights=[new vi(16719904,0,30,2),new vi(2117887,0,30,2)];for(let l of this.lights)t.add(l)}crime(t,e){let n=this.wanted;this.heat=Math.min(5.99,this.heat+t),this.wanted=Math.max(this.wanted,Math.floor(this.heat)),this.escapeT=0,this.wanted>n&&(this.hud.toast(`\u{1F6A8} ${e} \u2013 the police are after you!`,2.5),this._updateStars())}_updateStars(){let t=document.getElementById("wanted");t&&(t.innerHTML=this.wanted?"\u2605".repeat(this.wanted)+"<span>"+"\u2605".repeat(5-this.wanted)+"</span>":"",t.classList.toggle("show",this.wanted>0))}_makeCar(t,e,n){let i=new Ot,s=this.geo.spec,o=new q(this.geo.paint,this.mats.paint),a=new q(this.geo.detail,this.mats.det);o.castShadow=a.castShadow=!0,i.add(o,a);let l=s.roof[2][1],c=new q(new pt(1.1,.12,.3),new lt({color:2236962}));c.position.set(0,l+.06,-.2),i.add(c);let h=new q(new pt(.5,.14,.26),this.mats.red);h.position.set(-.28,l+.12,-.2);let u=new q(new pt(.5,.14,.26),this.mats.blue);u.position.set(.28,l+.12,-.2),i.add(h,u);for(let d of[-1,1]){let g=new q(new ve(s.L*.8,.22),this.mats.stripe);g.position.set(d*(s.W/2+.012),.72,0),g.rotation.y=d*Math.PI/2,i.add(g);let m=new q(new ve(2.4,.45),this.mats.text);m.position.set(d*(s.W/2+.02),.72,-.1),m.rotation.y=d*Math.PI/2,i.add(m)}this.scene.add(i);let p={g:i,x:t,z:e,h:n,v:0,path:null,pi:0,repath:0,stuck:0,spec:s,radius:s.W/2+.05};return this.cars.push(p),p}_spawn(t,e,n){for(let i=0;i<30;i++){let s=n+Math.PI+(Math.random()-.5)*2.2*(i>15?2:1),o=180+Math.random()*120,a=this.map.nearestRoad(t+Math.sin(s)*o,e+Math.cos(s)*o,80,c=>c.cls<=4);if(!a||this.map.insideBuilding(a.x,a.z,1))continue;let l=Math.atan2(t-a.x,e-a.z);return this._makeCar(a.x,a.z,l)}return null}clear(){for(let t of this.cars)this.scene.remove(t.g);this.cars.length=0,this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this._updateStars(),this.audio.siren(!1);for(let t of this.lights)t.intensity=0}update(t,e,n){if(this.cutscene)return this._updateCutscene(t,e);let s=performance.now()/1e3*4%2<1;if(this.mats.red.emissiveIntensity=this.wanted?s?4:.2:0,this.mats.blue.emissiveIntensity=this.wanted?s?.2:4:0,!this.wanted){this.cars.length&&this.clear(),this.heat=Math.max(0,this.heat-t*.05);return}let o=Math.min(4,this.wanted);this.cars.length<o&&Math.random()<t*.8&&this._spawn(e.x,e.z,e.h);let a=1e9,l=null;for(let u of this.cars){this._drive(u,t,e);let p=Math.hypot(u.x-e.x,u.z-e.z);p<a&&(a=p,l=u),u.g.position.set(u.x,.02,u.z),u.g.rotation.y=u.h}if(l)for(let u=0;u<2;u++)this.lights[u].position.set(l.x+(u?.4:-.4),2,l.z),this.lights[u].intensity=(u?!s:s)?25:2;this.audio.siren(a<450),a<9&&e.speed<2.2?this.bustT+=t:this.bustT=Math.max(0,this.bustT-t*.5),e.damage>=100&&a<20&&(this.bustT+=t);let c=document.getElementById("bust");if(c&&(c.style.width=Math.min(100,this.bustT/2.5*100)+"%",c.parentElement.classList.toggle("show",this.bustT>.05)),this.bustT>2.5){this._startCutscene(l,e),n&&n();return}a>260?this.escapeT+=t:this.escapeT=0;let h=8+this.wanted*4;this.escapeT>h&&(this.hud.toast(`\u{1F60E} You lost the police! (${this.wanted}\u2605 escape)`,3),this.onEscape&&this.onEscape(this.wanted),this.clear())}_drive(t,e,n){let i=Math.hypot(n.x-t.x,n.z-t.z),s=n.x+n.vx*Math.min(1.2,i/40),o=n.z+n.vz*Math.min(1.2,i/40);if(t.repath-=e,i>70&&((t.repath<=0||!t.path)&&(t.path=this.map.route(t.x,t.z,n.x,n.z),t.pi=2,t.repath=2.5),t.path)){for(;t.pi<t.path.length-2&&Math.hypot(t.path[t.pi]-t.x,t.path[t.pi+1]-t.z)<14;)t.pi+=2;s=t.path[t.pi],o=t.path[t.pi+1]}let l=Math.atan2(s-t.x,o-t.z)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let c=Math.min(2.2,9/Math.max(4,t.v))*e;t.h+=Ie.clamp(l,-c,c);let h=i>70?44:Math.max(6,n.speed+6);Math.abs(l)>.6&&(h=Math.min(h,12)),i<12&&(h=Math.max(2,n.speed)),t.v+=Ie.clamp(h-t.v,-12*e,7*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e;let u={};for(let p of[1.5,-1.5])this.world.collide(t.x+Math.sin(t.h)*p,t.z+Math.cos(t.h)*p,t.radius,u)&&(t.x+=u.x,t.z+=u.z,t.v*=.85);t.v<1.5&&i>40?t.stuck+=e:t.stuck=0,t.stuck>4&&i>120&&(this.scene.remove(t.g),this.cars.splice(this.cars.indexOf(t),1));for(let p of[n.spec.L*.3,0,-n.spec.L*.3]){let d=n.x+Math.sin(n.h)*p,g=n.z+Math.cos(n.h)*p;for(let m of[1.3,-1.3]){let x=t.x+Math.sin(t.h)*m,f=t.z+Math.cos(t.h)*m,y=d-x,_=g-f,v=Math.hypot(y,_),R=n.radius+t.radius;if(v<R&&v>1e-4){let E=y/v,b=_/v;n.x+=E*(R-v)*.6,n.z+=b*(R-v)*.6,t.x-=E*(R-v)*.4,t.z-=b*(R-v)*.4;let C=(n.vx-Math.sin(t.h)*t.v)*E+(n.vz-Math.cos(t.h)*t.v)*b;C<0&&(n.vx-=E*C,n.vz-=b*C,t.v*=.6,-C>4&&(this.fx&&this.fx.crash(x+E*t.radius,.6,f+b*t.radius,E,b,-C,16054008),this.audio.crash(-C),n.damage=Math.min(100,n.damage+-C*.4),this.onRam&&this.onRam(-C)))}}}}_startCutscene(t,e){this.audio.siren(!0);let n=m1();this.scene.add(n);let i=Math.sin(e.h),s=Math.cos(e.h),o=-s,a=i;t||(t=this._makeCar(e.x+i*7,e.z+s*7,e.h+Math.PI));let l=e.x+i*6.5-o*2.2,c=e.z+s*6.5-a*2.2;this.cutscene={t:0,pc:t,off:n,from:{x:t.x,z:t.z,h:t.h},to:{x:l,z:c,h:e.h+Math.PI*.8},fine:250+this.wanted*250,stars:this.wanted},document.getElementById("cine").classList.add("on"),document.getElementById("bustBox").classList.remove("show")}_updateCutscene(t,e){let n=this.cutscene,i=n.pc;n.t+=t;let s=n.t;e.vx=e.vz=0,e.r=0;let o=performance.now()/250%2<1;this.mats.red.emissiveIntensity=o?4:.2,this.mats.blue.emissiveIntensity=o?.2:4;let a=Math.min(1,s/1.5),l=1-Math.pow(1-a,3);i.x=n.from.x+(n.to.x-n.from.x)*l,i.z=n.from.z+(n.to.z-n.from.z)*l;let c=n.to.h-n.from.h;c=Math.atan2(Math.sin(c),Math.cos(c)),i.h=n.from.h+c*l,i.g.position.set(i.x,.02,i.z),i.g.rotation.y=i.h;for(let M=0;M<2;M++)this.lights[M].position.set(i.x+(M?.4:-.4),2.2,i.z),this.lights[M].intensity=(M?!o:o)?30:3;let h=n.off,u=h.userData,p=i.x+Math.cos(i.h)*1.4,d=i.z-Math.sin(i.h)*1.4,g=e.x+Math.cos(e.h)*1.6+Math.sin(e.h)*.4,m=e.z-Math.sin(e.h)*1.6+Math.cos(e.h)*.4,x=p,f=d,y=!1;if(s>1.5){let M=Math.min(1,(s-1.5)/3);x=p+(g-p)*M,f=d+(m-d)*M,y=M<1}h.visible=s>1.4,h.position.set(x,.02,f),h.rotation.y=y?Math.atan2(g-p,m-d):Math.atan2(e.x-x,e.z-f);let _=y?Math.sin(s*9):0;u.legs[0].rotation.x=_*.5,u.legs[1].rotation.x=-_*.5,u.arms[0].rotation.x=-_*.45,u.arms[1].rotation.x=s>4.6?-1.4-Math.sin(s*3)*.1:_*.45;let v=document.getElementById("cineSub"),R=[[1.6,""],[4.6,"\u{1F46E} \xAB\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.\xBB"],[6.6,"\u{1F46E} \xAB\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u0414\u0422\u041F, \u043D\u0435\u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u0438\u0435\u2026 \u041E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C.\xBB"],[8.6,`Fine: \u2212${n.fine} \u0441\u043E\u043C \xB7 ${"\u2605".repeat(n.stars)} cleared`]],E="";for(let[M,w]of R)s>M&&(E=w);v.textContent!==E&&(v.textContent=E),document.getElementById("busted").classList.toggle("show",s>7.6);let b=new I,C=new I;if(s<2.5){let M=e.h+2.2+s*.35;b.set(e.x+Math.sin(M)*9,1.1,e.z+Math.cos(M)*9),C.set((e.x+i.x)/2,1,(e.z+i.z)/2)}else s<4.6?(b.set(x-Math.sin(h.rotation.y)*4+1.2,1.8,f-Math.cos(h.rotation.y)*4),C.set(x,1.4,f)):s<7.6?(b.set(x+Math.cos(e.h)*1.4-Math.sin(e.h)*1.2,1.75,f-Math.sin(e.h)*1.4-Math.cos(e.h)*1.2),C.set(e.x,1.1,e.z)):(b.set(e.x+Math.cos(e.h)*12+Math.sin(e.h)*6,4,e.z-Math.sin(e.h)*12+Math.cos(e.h)*6),C.set(e.x,.8,e.z));if(s>10.5){this.scene.remove(h),document.getElementById("cine").classList.remove("on"),document.getElementById("busted").classList.remove("show"),v.textContent="";let M=n.fine;return this.cutscene=null,this.clear(),{done:!0,fine:M,cam:b,look:C,stars:n.stars}}return{cam:b,look:C}}};var g1={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u04E9:"o",\u04AF:"u",\u04A3:"n",\u0456:"i"};function Xa(r){r=String(r||"").toLowerCase();let t="";for(let e of r)t+=g1[e]??e;return t.replace(/kh/g,"h").replace(/[jy]/g,"i").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}var vf={cafe:"Caf\xE9",restaurant:"Restaurant",fast_food:"Fast food",pharmacy:"Pharmacy",bank:"Bank",supermarket:"Supermarket",convenience:"Shop",fuel:"Petrol station",hotel:"Hotel",clothes:"Clothes",bar:"Bar",mall:"Mall",museum:"Museum",theatre:"Theatre",university:"University",hospital:"Hospital",cinema:"Cinema",park:"Park",stadium:"Stadium",place_of_worship:"Place of worship",marketplace:"Bazaar",square:"Square",terminal:"Airport",department_store:"Department store",attraction:"Attraction",memorial:"Memorial",monument:"Monument",bakery:"Bakery",mobile_phone:"Phones"},x1={Landmark:"\u2B50",Street:"\u{1F6E3}",Caf\u00E9:"\u2615",Restaurant:"\u{1F37D}","Fast food":"\u{1F32F}",Pharmacy:"\u{1F48A}",Bank:"\u{1F3E6}",Supermarket:"\u{1F6D2}",Shop:"\u{1F3EA}","Petrol station":"\u26FD",Hotel:"\u{1F3E8}",Mall:"\u{1F6CD}",Museum:"\u{1F3DB}",Park:"\u{1F333}",Bazaar:"\u{1F9FA}",Airport:"\u2708",University:"\u{1F393}",Hospital:"\u{1F3E5}",Building:"\u{1F3E2}"},$a=class{constructor(t){this.items=[];let e=new Set,n=(s,o,a,l,c,h)=>{if(!s||l===void 0)return;let u=Xa(s)+"|"+Math.round(l/150)+","+Math.round(c/150);e.has(u)||(e.add(u),this.items.push({name:s,alt:o&&o!==s?o:"",kind:a,x:l,z:c,w:h,n:Xa(s)+" "+Xa(o)}))};for(let s of Ve)n(s.name,s.local,"Landmark",s.x,s.z,5);let i=new Map;for(let s of t.edges){if(s.name<0||s.cls>5)continue;let o=i.get(s.name);(!o||s.len>o.len)&&i.set(s.name,s)}for(let[s,o]of i){let[a,l]=t.names[s],c=Math.floor(o.pts.length/4)*2;n(l||a,l?a:"","Street",o.pts[c],o.pts[c+1],4-o.cls*.3)}for(let s of t.pois)n(s.en||s.name,s.en?s.name:"",vf[s.kind]||"Place",s.x,s.z,3);for(let s of t.chunks.values())for(let o of s.signs)n(o.name,"",vf[o.kind]||"Shop",o.x,o.z,1);for(let s of t.buildings)s.name&&n(s.name,"","Building",s.cx,s.cz,1.5)}find(t,e=12,n){let i=Xa(t);if(!i)return[];let s=i.split(" "),o=[];for(let a of this.items){let l=0;if(a.n.startsWith(i))l=10;else if(a.n.includes(" "+i))l=7;else if(s.every(c=>a.n.includes(c)))l=4;else continue;l+=a.w,n&&(l-=Math.min(3,Math.hypot(a.x-n.x,a.z-n.z)/4e3)),o.push([l,a])}return o.sort((a,l)=>l[0]-a[0]),o.slice(0,e).map(a=>a[1])}icon(t){return x1[t]||"\u{1F4CD}"}};var dr=r=>document.getElementById(r),qa=class{constructor(t,e,n){this.hud=t,this.audio=e,this.game=n,this.points=0,this.mult=1,this.active=!1,this.off=0,this.chain=0,this.best=0}update(t,e,n){let i=Math.abs(e.rearSlip||0),s=!n&&e.speed>8&&i>.22&&i<1.4,o=dr("drift");s?(this.active=!0,this.off=0,this.chain+=t,this.mult=Math.min(8,1+Math.floor(this.chain/2)),this.points+=e.speed*i*t*12*this.mult,e.nitro=Math.min(1,(e.nitro??0)+t*.06)):this.active&&(this.off+=t,this.off>1.1&&this._bank(!0)),o&&(o.classList.toggle("show",this.active),this.active&&(o.innerHTML=`DRIFT <b>${Math.round(this.points).toLocaleString()}</b>${this.mult>1?` <i>\xD7${this.mult}</i>`:""}`))}crash(){this.active&&this.points>50&&this.hud.toast("\u{1F4A5} Drift lost!",1),this.points=0,this._bank(!1)}_bank(t){if(t&&this.points>150){let e=Math.round(this.points/40);this.game.money+=e,this.audio.cash(),this.best=Math.max(this.best,this.points),this.hud.toast(`\u{1F300} Drift ${Math.round(this.points).toLocaleString()} pts \xB7 +${e} \u0441\u043E\u043C`,2)}this.active=!1,this.points=0,this.mult=1,this.chain=0,this.off=0}},Ya=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s;let o=Cn(2026);this.list=[];for(let g of Ve)!g.airport&&g.x!==void 0&&this.list.length<8&&this.list.push({x:g.x+14,z:g.z+6});let a=0;for(;this.list.length<40&&a++<5e3;){let g=-6500+o()*12e3,m=-6e3+o()*9500,x=e.nearestRoad(g,m,60,R=>R.cls>=1&&R.cls<=5);if(!x)continue;let f=o()<.5?1:-1,y=x.e.w/2+1.2,_=x.x-x.dz*y*f,v=x.z+x.dx*y*f;e.insideBuilding(_,v,1)||this.list.some(R=>Math.hypot(R.x-_,R.z-v)<600)||this.list.push({x:_,z:v})}this.list.forEach((g,m)=>g.id=m);try{this.got=new Set(JSON.parse(localStorage.getItem("bd_kalpaks")||"[]"))}catch{this.got=new Set}let l=new lt({color:16762938,metalness:1,roughness:.22,emissive:5583616,emissiveIntensity:.6}),c=new Ot,h=new q(new Nt(.22,.5,.9,16,1,!1),l);h.position.y=.45;let u=new q(new Nt(.55,.55,.08,20),new lt({color:1708552,metalness:.4,roughness:.5})),p=new q(new ye(.1,10,8),l);p.position.y=.95,c.add(h,u,p);let d=(()=>{let g=document.createElement("canvas");g.width=g.height=64;let m=g.getContext("2d"),x=m.createRadialGradient(32,32,2,32,32,32);return x.addColorStop(0,"rgba(255,220,120,0.9)"),x.addColorStop(1,"rgba(255,200,80,0)"),m.fillStyle=x,m.fillRect(0,0,64,64),new be(g)})();this.proto=c,this.glowMat=new un({map:d,transparent:!0,blending:Be,depthWrite:!1}),this.live=new Map,this.t=0}get count(){return this.got.size}update(t,e,n){this.t+=t;for(let i of this.list){if(this.got.has(i.id))continue;let s=Math.hypot(i.x-e,i.z-n),o=this.live.get(i.id);if(s<450&&!o){o=this.proto.clone();let a=new yn(this.glowMat);a.scale.set(4,4,1),a.position.y=.5,o.add(a),o.position.set(i.x,1,i.z),this.scene.add(o),this.live.set(i.id,o)}else if(s>520&&o){this.scene.remove(o),this.live.delete(i.id);continue}if(o&&(o.rotation.y=this.t*2,o.position.y=1+Math.sin(this.t*3+i.id)*.25,s<4)){this.got.add(i.id),this.scene.remove(o),this.live.delete(i.id);try{localStorage.setItem("bd_kalpaks",JSON.stringify([...this.got]))}catch{}this.game.money+=250,this.audio.chime(),setTimeout(()=>this.audio.cash(),200),this.hud.toast(`\u{1F3A9} Golden kalpak ${this.got.size}/${this.list.length} \xB7 +250 \u0441\u043E\u043C`,2.5),this.got.size===this.list.length&&(this.game.money+=5e3,this.hud.toast("\u{1F3C6} All golden kalpaks found! +5000 \u0441\u043E\u043C",5))}}}near(t,e,n){return this.list.filter(i=>!this.got.has(i.id)&&Math.hypot(i.x-t,i.z-e)<n)}},qh=[{id:"chuy",name:"Chuy Avenue Sprint",desc:"Philharmonic \u2192 Victory Square, straight down Bishkek's main avenue",via:[[-1307,-120],[0,40],[1032,-300]]},{id:"center",name:"Ala-Too Circuit",desc:"A lap around the centre: Ala-Too, Osh Bazaar, Bishkek Park",via:[[30,40],[-1300,100],[-2700,330],[-1100,950],[30,60]]},{id:"south",name:"South Side Run",desc:"Asia Mall \u2192 Vefa Center \u2192 Central Mosque",via:null,places:["asia","vefa","mosque"]},{id:"airport",name:"Manas Airport Rush",desc:"25 km from Ala-Too Square to the airport terminal",via:null,places:["alatoo","airport"]}],Za=class{constructor(t,e,n,i,s){this.scene=t,this.map=e,this.game=n,this.hud=i,this.audio=s,this.active=null;try{this.best=JSON.parse(localStorage.getItem("bd_race_best")||"{}")}catch{this.best={}}this.ringMat=new le({color:16765498,transparent:!0,opacity:.85,side:we,depthWrite:!1}),this.ringMat2=new le({color:16777215,transparent:!0,opacity:.35,side:we,depthWrite:!1})}_waypoints(t){return t.via?t.via:t.places.map(e=>{let n=Ve.find(i=>i.id===e);return[n.x,n.z]})}start(t,e,n){this.stop();let i=this._waypoints(t),s=[];for(let p=0;p<i.length-1;p++){let d=this.map.route(i[p][0],i[p][1],i[p+1][0],i[p+1][1]);if(!d)return!1;s.push(...s.length?d.slice(2):d)}let o=[],a=0;for(let p=2;p<s.length;p+=2)a+=Math.hypot(s[p]-s[p-2],s[p+1]-s[p-1]),(a>300||p>=s.length-2)&&(a=0,o.push({x:s[p],z:s[p+1],h:Math.atan2(s[p]-s[p-2],s[p+1]-s[p-1])}));let l=0;for(let p=2;p<s.length;p+=2)l+=Math.hypot(s[p]-s[p-2],s[p+1]-s[p-1]);n(s[0],s[1]);let c=Math.atan2(s[4]-s[0],s[5]-s[1]),h=this.map.nearestRoad(s[0],s[1],30);if(h){let p=this.map.laneOffset(h.e,0),d=h.dx,g=h.dz;d*Math.sin(c)+g*Math.cos(c)<0&&(d=-d,g=-g),e.place(h.x-g*p,h.z+d*p,Math.atan2(d,g))}let u={R:t,path:s,cps:o,i:0,t:-3.5,total:l,rivals:[],meshes:[]};for(let[p,d,g]of[[22,16760864,"Gold rival"],[17,12634320,"Silver rival"]]){let m=Nn(p>20?"coupe":"hatch",{}),x=new Ot;x.add(new q(m.paint,new lt({color:d,vertexColors:!0,metalness:.6,roughness:.3,transparent:!0,opacity:.75})),new q(m.detail,new lt({vertexColors:!0,transparent:!0,opacity:.75}))),this.scene.add(x),u.rivals.push({g:x,s:0,v:0,pace:p,name:g,side:u.rivals.length?-1.8:1.8})}return u.gold=l/22,u.silver=l/17,u.bronze=l/13,this.active=u,this._showCp(),dr("raceHud").classList.add("show"),!0}_showCp(){let t=this.active;for(let e of t.meshes)this.scene.remove(e);t.meshes=[];for(let e=0;e<2;e++){let n=t.cps[t.i+e];if(!n)break;let i=new Ot,s=new q(new Yn(7,.35,8,40),e?this.ringMat2:this.ringMat);if(s.position.y=4,i.add(s),!e){let o=new q(new Nt(.4,.4,60,8),this.ringMat2);o.position.y=30,i.add(o)}i.position.set(n.x,0,n.z),i.rotation.y=n.h,this.scene.add(i),t.meshes.push(i)}}stop(){let t=this.active;if(t){for(let e of t.meshes)this.scene.remove(e);for(let e of t.rivals)this.scene.remove(e.g);this.active=null,dr("raceHud").classList.remove("show"),dr("countdown").classList.remove("show")}}_rivalPos(t,e,n){let i=t.s,s=2;for(;s<e.length;s+=2){let o=Math.hypot(e[s]-e[s-2],e[s+1]-e[s-1]);if(i<=o){let a=i/(o||1);return n.x=e[s-2]+(e[s]-e[s-2])*a,n.z=e[s-1]+(e[s+1]-e[s-1])*a,n.h=Math.atan2(e[s]-e[s-2],e[s+1]-e[s-1]),n.i=s,n}i-=o}return n.x=e[e.length-2],n.z=e[e.length-1],n.done=!0,n}update(t,e){let n=this.active;if(!n)return null;n.t+=t;let i=dr("countdown");if(n.t<0){e.vx=e.vz=0;let c=Math.ceil(-n.t),h=c>3?"":String(c);return i.textContent!==h&&(i.textContent=h,h&&(i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(520,.15,.15))),null}n.t-t<0&&(i.textContent="GO!",i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),this.audio.blip(1040,.3,.18));let s={};for(let c of n.rivals){this._rivalPos(c,n.path,s);let h={},u={s:c.s+30};this._rivalPos(u,n.path,h);let p=Math.abs(Math.atan2(Math.sin(h.h-s.h),Math.cos(h.h-s.h))),d=c.pace*(p>.5?.45:p>.25?.7:1.15);c.v+=Ie.clamp(d-c.v,-8*t,4*t),c.s+=c.v*t,c.g.position.set(s.x+Math.cos(s.h)*c.side*.5,.02,s.z-Math.sin(s.h)*c.side*.5);let g=s.h-c.g.rotation.y;g=Math.atan2(Math.sin(g),Math.cos(g)),c.g.rotation.y+=g*Math.min(1,t*6)}let o=n.cps[n.i];if(Math.hypot(e.x-o.x,e.z-o.z)<12){if(n.i++,this.audio.blip(880,.08,.12),n.i>=n.cps.length)return this._finish(e);this._showCp()}let a=n.t,l=1+n.rivals.filter(c=>c.s>this._progress(e)).length;return dr("raceHud").innerHTML=`<b>${n.R.name}</b><span>\u23F1 ${Ja(a)}</span><span>CP ${n.i}/${n.cps.length}</span><span>P${l}/3</span>`,{target:n.cps[n.i]}}_progress(t){let e=this.active,n=0;for(let a=0;a<e.i;a++)n+=a?Math.hypot(e.cps[a].x-e.cps[a-1].x,e.cps[a].z-e.cps[a-1].z):Math.hypot(e.cps[0].x-e.path[0],e.cps[0].z-e.path[1]);let i=e.cps[e.i],s=e.i?e.cps[e.i-1]:{x:e.path[0],z:e.path[1]},o=Math.hypot(i.x-s.x,i.z-s.z)||1;return n+Math.max(0,o-Math.hypot(i.x-t.x,i.z-t.z))}_finish(){let t=this.active,e=t.t,n=e<=t.gold?"\u{1F947} Gold":e<=t.silver?"\u{1F948} Silver":e<=t.bronze?"\u{1F949} Bronze":"Finished";e<=t.gold&&(this.golds=(this.golds||0)+1);let i=e<=t.gold?1500:e<=t.silver?800:e<=t.bronze?400:150,s=this.best[t.R.id],o=!s||e<s;if(o){this.best[t.R.id]=e;try{localStorage.setItem("bd_race_best",JSON.stringify(this.best))}catch{}}return this.game.credit(i,"\u041F\u0440\u0438\u0437: "+t.R.name,!0),this.audio.cash(),this.hud.toast(`\u{1F3C1} ${t.R.name}: ${Ja(e)} \xB7 ${n} \xB7 +${i} \u0441\u043E\u043C${o?" \xB7 NEW RECORD!":""}`,6),this.stop(),{done:!0}}};function Ja(r){r=Math.max(0,r);let t=Math.floor(r/60),e=r-t*60;return`${t}:${e<10?"0":""}${e.toFixed(2)}`}var ja=class{constructor(t,e,n){this.scene=t,this.world=e,this.env=n,this.kind="clear",this.amount=0;let i=9e3,s=new Float32Array(i*6);for(let a=0;a<i;a++){let l=(Math.random()-.5)*80,c=Math.random()*40,h=(Math.random()-.5)*80;s.set([l,c,h,l,c-.6,h],a*6)}let o=new oe;o.setAttribute("position",new ge(s,3)),this.rainMat=new de({uniforms:{uTime:{value:0},uCam:{value:new I},uSnow:{value:0},uAmt:{value:0}},vertexShader:`uniform float uTime; uniform vec3 uCam; uniform float uSnow; varying float vA;
        void main(){ vec3 p = position;
          float sp = mix(26.0, 2.2, uSnow);
          p.y = mod(p.y - uTime*sp, 40.0);
          if (uSnow > 0.5) { p.x += sin(uTime*0.8 + position.z)*0.8; p.z += cos(uTime*0.6 + position.x)*0.8; if (mod(float(gl_VertexID),2.0) > 0.5) p.y += 0.6 - 0.08; }
          p.xz = mod(p.xz - uCam.xz + 40.0, 80.0) - 40.0 + uCam.xz;
          p.y += uCam.y - 15.0;
          vA = 1.0;
          gl_Position = projectionMatrix * viewMatrix * vec4(p, 1.0); }`,fragmentShader:"uniform float uSnow; uniform float uAmt; void main(){ gl_FragColor = vec4(mix(vec3(0.6,0.65,0.75), vec3(0.95), uSnow), mix(0.3, 0.6, uSnow) * uAmt); }",transparent:!0,depthWrite:!1}),this.rain=new js(o,this.rainMat),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain),this.base=null}set(t){this.kind=t}update(t,e,n){let i=this.kind==="clear"?0:1;this.amount+=Ie.clamp(i-this.amount,-t*.25,t*.25),this.kind!=="clear"&&(this.cur=this.kind);let s=this.cur==="snow"?1:0,o=this.amount;this.rain.visible=o>.01,this.rainMat.uniforms.uTime.value+=t,this.rainMat.uniforms.uCam.value.copy(e.position),this.rainMat.uniforms.uSnow.value=s,this.rainMat.uniforms.uAmt.value=o,this.rain.geometry.setDrawRange(0,Math.floor(9e3*2*(s?.35:.8)*o));let a=this.world.mat;this.base||(this.base={road:a.road.roughness,ground:this.world.ground.material.color.clone(),grass:a.grass.color.clone(),tree:a.tree.color.clone()}),a.road.roughness=this.base.road-(s?0:.6*o),a.road.metalness=s?0:.25*o,rn.uSnow.value=s*o,this.world.ground.material.color.copy(this.base.ground).lerp(new St(.85,.86,.88),s*o*.35),this.exposure=1-s*o*.22,this.env.cloudMat&&(this.env.cloudMat.uniforms.cover.value=.58-o*.45),this.grip=1-o*(s?.3:.12),this.fogMul=1-o*.55,this.dark=o*(s?.15:.35)}};function v1(r=2775706){let t=new Ot,e=u=>new lt({color:u,roughness:.8}),n=e(13672572),i=e(r),s=e(2237998),o=e(1118481),a=e(1380621),l=(u,p,d,g,m,x=t)=>{let f=new q(u,p);return f.position.set(d,g,m),f.castShadow=!0,x.add(f),f};l(new pt(.44,.6,.25),i,0,1.22,0),l(new pt(.4,.2,.23),s,0,.88,0),l(new ye(.12,14,12),n,0,1.68,0),l(new ye(.127,14,8,0,Math.PI*2,0,Math.PI*.55),a,0,1.71,-.01);let c=[],h=[];for(let u of[-1,1]){let p=new Ot;p.position.set(.1*u,.9,0),t.add(p),l(new pt(.15,.82,.16).translate(0,-.41,0),s,0,0,0,p),l(new pt(.16,.08,.26),o,0,-.86,.04,p);let d=new Ot;d.position.set(.28*u,1.5,0),t.add(d),l(new pt(.1,.6,.11).translate(0,-.3,0),i,0,0,0,d),l(new ye(.055,8,6),n,0,-.62,0,d),c.push(p),h.push(d)}return t.userData={legs:c,arms:h},t}var Ka=class{constructor(t,e,n){this.scene=t,this.world=e,this.map=n,this.active=!1,this.char=v1(),this.char.visible=!1,t.add(this.char),this.x=0,this.z=0,this.y=0,this.vy=0,this.h=0,this.speed=0,this.phase=0,this.camYaw=0,this.camPitch=.25,this.vx=0,this.vz=0,this.spec={L:.6,W:.6},this.radius=.35}exit(t){let e=Math.cos(t.h)*1.6,n=-Math.sin(t.h)*1.6;this.x=t.x+e,this.z=t.z+n,this.y=0,this.vy=0;let i={};this.world.collide(this.x,this.z,this.radius,i)&&(this.x=t.x-e,this.z=t.z-n),this.h=t.h,this.camYaw=t.h,this.active=!0,this.char.visible=!0,t.vx=t.vz=0,t.r=0}enter(){this.active=!1,this.char.visible=!1}update(t,e,n,i){let s=e.fwd,o=e.side,a=e.run?6.2:2.6,l=0,c=0;if(s||o){let g=this.camYaw;l=Math.sin(g)*s-Math.cos(g)*o,c=Math.cos(g)*s+Math.sin(g)*o;let m=Math.hypot(l,c);l/=m,c/=m;let f=Math.atan2(l,c)-this.h;f=Math.atan2(Math.sin(f),Math.cos(f)),this.h+=f*Math.min(1,t*12)}let h=s||o?a:0;this.speed+=Ie.clamp(h-this.speed,-20*t,14*t),this.vx=Math.sin(this.h)*this.speed,this.vz=Math.cos(this.h)*this.speed,this.x+=this.vx*t,this.z+=this.vz*t,e.jump&&this.y<=.001&&(this.vy=4.6),this.vy-=13*t,this.y=Math.max(0,this.y+this.vy*t),this.y===0&&this.vy<0&&(this.vy=0);let u={};this.world.collide(this.x,this.z,this.radius,u)&&(this.x+=u.x,this.z+=u.z);for(let g of n){let m=this.x-g.x,x=this.z-g.z,f=Math.hypot(m,x),y=g.spec.W/2+.5;if(f<y+g.spec.L/2){let _=Math.sin(g.h),v=Math.cos(g.h),R=m*v-x*_,E=m*_+x*v,b=g.spec.W/2+.35,C=g.spec.L/2+.35;if(Math.abs(R)<b&&Math.abs(E)<C){let M=b-Math.abs(R),w=C-Math.abs(E),A=0,z=0;M<w?A=Math.sign(R)*M:z=Math.sign(E)*w,this.x+=A*v+z*_,this.z+=-A*_+z*v}}}this.phase+=t*this.speed*2.6;let p=Math.sin(this.phase)*Math.min(1,this.speed/2.6),d=this.char.userData;d.legs[0].rotation.x=p*.7,d.legs[1].rotation.x=-p*.7,d.arms[0].rotation.x=-p*.6,d.arms[1].rotation.x=p*.6,this.y>.01&&(d.legs[0].rotation.x=.6,d.legs[1].rotation.x=-.3,d.arms[0].rotation.x=d.arms[1].rotation.x=-2.6),this.char.position.set(this.x,this.y+Math.abs(Math.cos(this.phase))*.04*Math.min(1,this.speed/3),this.z),this.char.rotation.y=this.h}nearestCar(t,e){let n=null,i=4.5,s=Math.hypot(t.x-this.x,t.z-this.z);s<i+t.spec.L/2&&(n={own:!0,c:t},i=s-t.spec.L/2);for(let o of e.cars){let a=Math.hypot(o.x-this.x,o.z-this.z)-o.spec.L/2;a<i&&(i=a,n={own:!1,c:o})}return n}camera(t,e,n){if(this.camYaw+=n.dx,this.camPitch=Ie.clamp(this.camPitch+n.dy,-.1,1.1),!n.active&&this.speed>.5){let l=this.h-this.camYaw;l=Math.atan2(Math.sin(l),Math.cos(l)),this.camYaw+=l*Math.min(1,e*2.2)}let i=4.2,s=this.x-Math.sin(this.camYaw)*i*Math.cos(this.camPitch),o=this.z-Math.cos(this.camYaw)*i*Math.cos(this.camPitch),a=this.y+1.6+Math.sin(this.camPitch)*i;t.position.lerp(new I(s,a,o),1-Math.exp(-e*10)),t.lookAt(this.x,this.y+1.4,this.z),t.fov+=(60-t.fov)*Math.min(1,e*3),t.updateProjectionMatrix()}};var Jn=r=>440*Math.pow(2,(r-69)/12),fs=[{name:"Bishkek FM",genre:"Pop hits",bpm:112,prog:[[60,64,67],[67,71,74],[69,72,76],[65,69,72]],scale:[0,2,4,7,9],style:"pop"},{name:"Night Drive 101.1",genre:"Synthwave",bpm:100,prog:[[57,60,64],[53,57,60],[60,64,67],[55,59,62]],scale:[0,3,5,7,10],style:"synth"},{name:"Komuz Radio",genre:"Kyrgyz folk",bpm:96,prog:[[62,69,74],[62,69,74],[60,67,72],[62,69,74]],scale:[0,2,5,7,9],style:"folk"},{name:"Ala-Too Lo-fi",genre:"Lo-fi beats",bpm:78,prog:[[62,65,69,72],[67,71,74,77],[60,64,67,71],[57,60,64,67]],scale:[0,3,5,7,10],style:"lofi"}],Qa=class{constructor(t){this.audio=t,this.idx=-1,this.timer=null}get on(){return this.idx>=0}get station(){return fs[this.idx]}next(){return this.audio.start(),this.idx=this.idx+1>=fs.length?-1:this.idx+1,this._stop(),this.idx>=0&&this._start(),this.idx>=0?fs[this.idx]:null}setVolume(t){this.out&&(this.out.gain.value=t)}_start(){let t=this.audio.ctx;if(!t)return;this.out=t.createGain(),this.out.gain.value=.32;let e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=6500;let n=t.createDynamicsCompressor();this.out.connect(e),e.connect(n),n.connect(this.audio.master),this.step=0,this.nextT=t.currentTime+.1,this.seed=Math.random()*1e3,this.timer=setInterval(()=>this._schedule(),40)}_stop(){if(clearInterval(this.timer),this.timer=null,this.out){let t=this.out;t.gain.setTargetAtTime(0,this.audio.ctx.currentTime,.05),setTimeout(()=>t.disconnect(),400),this.out=null}}_rnd(){return this.seed=(this.seed*9301+49297)%233280,this.seed/233280}_schedule(){let t=this.audio.ctx,e=fs[this.idx];if(!t||!e||!this.out)return;let n=60/e.bpm/4;for(;this.nextT<t.currentTime+.25;){let i=this.step,s=this.nextT+(e.style==="lofi"&&i%2?n*.18:0),o=Math.floor(i/16)%e.prog.length,a=i%16,l=e.prog[o],c=l[0]-12;if(e.style==="pop"){if(a%4===0&&this._kick(s,.9),(a===4||a===12)&&this._snare(s,.35),a%2===0&&this._hat(s,a%4===2?.12:.06),a%2===0&&this._tone(s,Jn(c-12),n*1.8,"sawtooth",.12,500),a===0)for(let h of l)this._tone(s,Jn(h),n*15,"triangle",.035,2500,.05);this._rnd()<.45&&a%2===0&&this._tone(s,Jn(72+this._pick(e.scale,l[0])),n*1.6,"square",.035,3e3)}else if(e.style==="synth"){if(a%4===0&&this._kick(s,1),(a===4||a===12)&&this._snare(s,.5,!0),this._hat(s,.04),this._tone(s,Jn(c-12+(a%2?12:0)),n*.9,"sawtooth",.09,900),a===0)for(let h of l)this._tone(s,Jn(h),n*16,"sawtooth",.025,1800,.4),this._tone(s,Jn(h)*1.006,n*16,"sawtooth",.02,1800,.4);a%4===2&&this._rnd()<.7&&this._tone(s,Jn(76+this._pick(e.scale,l[0])),n*3,"square",.03,2200)}else if(e.style==="folk")a%8===0&&this._tone(s,Jn(50),n*8,"triangle",.08,700),[0,3,6,8,11,14].includes(a)&&this._pluck(s,Jn(62+this._pick(e.scale,62)+(this._rnd()<.3?12:0)),.12),a%8===0?this._drum(s,.6):(a%8===3||a%8===6)&&this._drum(s,.25);else{if((a===0||a===10)&&this._kick(s,.6),(a===4||a===12)&&this._snare(s,.18),a%2===0&&this._hat(s,.03),a===0||a===8)for(let h of l)this._tone(s,Jn(h),n*7,"sine",.05,1600,.02);a%4===0&&this._tone(s,Jn(c-12),n*3.5,"sine",.14,300),this._rnd()<.15&&this._crackle(s)}this.step++,this.nextT+=n}}_pick(t,e){return t[Math.floor(this._rnd()*t.length)]+(e%12===0,0)}_env(t,e,n,i,s){t.gain.setValueAtTime(1e-4,e),t.gain.exponentialRampToValueAtTime(s,e+n),t.gain.exponentialRampToValueAtTime(1e-4,e+n+i)}_tone(t,e,n,i,s,o,a=.005){let l=this.audio.ctx,c=l.createOscillator(),h=l.createGain(),u=l.createBiquadFilter();c.type=i,c.frequency.value=e,u.type="lowpass",u.frequency.value=o,this._env(h,t,a,n,s),c.connect(u),u.connect(h),h.connect(this.out),c.start(t),c.stop(t+a+n+.05)}_pluck(t,e,n){let i=this.audio.ctx;for(let[s,o]of[[1,n],[2,n*.35],[3,n*.15]]){let a=i.createOscillator(),l=i.createGain();a.type="triangle",a.frequency.value=e*s,this._env(l,t,.003,.5/s,o),a.connect(l),l.connect(this.out),a.start(t),a.stop(t+.6)}}_kick(t,e){let n=this.audio.ctx,i=n.createOscillator(),s=n.createGain();i.frequency.setValueAtTime(140,t),i.frequency.exponentialRampToValueAtTime(42,t+.12),this._env(s,t,.002,.25,e*.8),i.connect(s),s.connect(this.out),i.start(t),i.stop(t+.3)}_noise(t,e,n,i,s){let o=this.audio.ctx,a=o.createBufferSource(),l=o.createBiquadFilter(),c=o.createGain();a.buffer=this.audio.noise,l.type=n,l.frequency.value=i,this._env(c,t,.002,e,s),a.connect(l),l.connect(c),c.connect(this.out),a.start(t,Math.random()),a.stop(t+e+.05)}_snare(t,e,n){this._noise(t,n?.3:.16,"bandpass",1800,e),this._tone(t,190,.08,"triangle",e*.3,2e3)}_hat(t,e){this._noise(t,.04,"highpass",8e3,e)}_drum(t,e){this._tone(t,90,.18,"sine",e*.5,400),this._noise(t,.08,"lowpass",900,e*.25)}_crackle(t){this._noise(t,.01,"highpass",3e3,.05)}};var jr=[{id:"hostel",name:"Hostel bed near Osh Bazaar",desc:"Bunk bed, shared kitchen. Cheap and loud.",near:[-2650,220],price:150},{id:"khrush",name:"1-room flat in a khrushchyovka",desc:"5-storey Soviet block, 4th floor, no lift. Pervomaisky district.",near:[-1400,700],price:600},{id:"center",name:"2-room flat on Erkindik Boulevard",desc:"High ceilings, oak trees under the window. City centre.",near:[230,520],price:1400},{id:"south",name:"New apartment near Asia Mall",desc:"12th floor, mountain view, underground parking.",near:[-1500,2200],price:2200},{id:"penthouse",name:"Penthouse in Bishkek City",desc:"Glass tower, panoramic view of the whole city.",near:[1019,-577],price:6e3}],tl=class{constructor(t,e,n,i,s,o){this.game=t,this.map=e,this.world=n,this.scene=i,this.hud=s,this.audio=o;for(let a of jr){let l=null,c=1e9;for(let p of e.buildings){let d=Math.hypot(p.cx-a.near[0],p.cz-a.near[1]);d>600||p.h<8||d<c&&(c=d,l=p)}a.b=l;let h=l?[l.cx,l.cz]:a.near,u=e.nearestRoad(h[0],h[1],150,p=>p.cls<=5);a.x=u?u.x:h[0],a.z=u?u.z:h[1],a.h=u?Math.atan2(u.dx,u.dz):0}this.home=null,this.jail=null,this._jailSite(),this.npcT=40+Math.random()*60}rentApartment(t){let e=jr.find(n=>n.id===t);return!e||!this.game.spend(e.price,"\u0410\u0440\u0435\u043D\u0434\u0430: "+e.name)?!1:(this.game.rent=t,this.game.rentDay=this._day(),this.game.msg("\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430",`\u041A\u043B\u044E\u0447\u0438 \u0432\u0430\u0448\u0438! ${e.name}. \u041E\u043F\u043B\u0430\u0442\u0430 ${fe(e.price)} \u0441\u043E\u043C \u0432 \u0441\u0443\u0442\u043A\u0438 \u0441\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442\u0441\u044F \u0441 MBank \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438.`,"\u{1F3E0}"),this._marker(),!0)}cancelRent(){this.game.rent&&(this.game.msg("\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430","\u0414\u043E\u0433\u043E\u0432\u043E\u0440 \u0430\u0440\u0435\u043D\u0434\u044B \u0440\u0430\u0441\u0442\u043E\u0440\u0433\u043D\u0443\u0442. \u041A\u043B\u044E\u0447\u0438 \u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u0443 \u0441\u043E\u0441\u0435\u0434\u043A\u0438.","\u{1F3E0}"),this.game.rent=null,this._marker())}get apartment(){return jr.find(t=>t.id===this.game.rent)||null}rentCar(t,e,n){return this.game.spend(e,"\u041F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E")?(this.game.carRent={type:t,day:this._day()},n(t,void 0,!1),this.game.msg("\u041F\u0440\u043E\u043A\u0430\u0442 \xAB\u0410\u043B\u0430-\u0422\u043E\u043E \u0410\u0432\u0442\u043E\xBB",`\u041C\u0430\u0448\u0438\u043D\u0430 \u0432\u0430\u0448\u0430 \u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438. \u041F\u0440\u0438\u044F\u0442\u043D\u043E\u0439 \u043F\u043E\u0435\u0437\u0434\u043A\u0438! \u0421\u043F\u0438\u0441\u0430\u043D\u043E ${fe(e)} \u0441\u043E\u043C.`,"\u{1F511}"),!0):!1}_day(){return new Date(Date.now()+216e5).toISOString().slice(0,10)}dailyTick(t,e){let n=this._day(),i=this.apartment;i&&this.game.rentDay!==n&&(this.game.rentDay=n,this.game.charge(i.price,"\u0410\u0440\u0435\u043D\u0434\u0430: "+i.name),this.game.msg("MBank",`\u2212${fe(i.price)} \u0441\u043E\u043C \xB7 \u0430\u0440\u0435\u043D\u0434\u0430 \xAB${i.name}\xBB. \u0411\u0430\u043B\u0430\u043D\u0441: ${fe(this.game.bank)} \u0441\u043E\u043C`,"\u{1F3E6}"),this.game.bank<-2e3&&(this.game.msg("\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430","\u0412\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0437\u0430 \u0430\u0440\u0435\u043D\u0434\u0443! \u041E\u0441\u0432\u043E\u0431\u043E\u0434\u0438\u0442\u0435 \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u0443.","\u{1F3E0}"),this.game.rent=null,this._marker())),this.game.carRent&&this.game.carRent.day!==n&&(this.game.carRent=null,this.game.msg("\u041F\u0440\u043E\u043A\u0430\u0442 \xAB\u0410\u043B\u0430-\u0422\u043E\u043E \u0410\u0432\u0442\u043E\xBB","\u0421\u0440\u043E\u043A \u0430\u0440\u0435\u043D\u0434\u044B \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F, \u043C\u0430\u0448\u0438\u043D\u0443 \u0437\u0430\u0431\u0440\u0430\u043B\u0438. \u0421\u043F\u0430\u0441\u0438\u0431\u043E!","\u{1F511}"),t&&t(this.game.homeCar||"sedan",this.game.homeColor,!0))}_marker(){this.homeMesh&&(this.scene.remove(this.homeMesh),this.homeMesh=null);let t=this.apartment;if(!t)return;let e=new Ot,n=new q(new Bi(3,3.6,40).rotateX(-Math.PI/2),new le({color:4054148,transparent:!0,opacity:.85,depthWrite:!1}));n.position.y=.25,e.add(n);let i=document.createElement("canvas");i.width=256,i.height=64;let s=i.getContext("2d");s.fillStyle="rgba(20,90,50,.85)",s.fillRect(0,0,256,64),s.fillStyle="#fff",s.font="bold 30px Arial",s.textAlign="center",s.textBaseline="middle",s.fillText("\u{1F3E0} HOME [E]",128,33);let o=new yn(new un({map:new be(i),depthTest:!1}));o.scale.set(5,1.25,1),o.position.y=4,e.add(o),e.position.set(t.x,0,t.z),this.scene.add(e),this.homeMesh=e}_jailSite(){let t=[1666,244],e=null;for(let E=30;E<600&&!e;E+=12)for(let b=0;b<6.28&&!e;b+=.25){let C=t[0]+Math.cos(b)*E,M=t[1]+Math.sin(b)*E,w=!0;for(let A=-22;A<=22&&w;A+=3.5)for(let z=-19;z<=19&&w;z+=3.5)this.map.insideBuilding(C+A,M+z,.5)&&(w=!1);for(let A=-16;A<=16&&w;A+=4)for(let z=-13;z<=13&&w;z+=4){let L=this.map.nearestRoad(C+A,M+z,12);L&&L.dist<L.e.w/2+1.5&&(w=!1)}w&&(e=[C,M])}this.jailPos=e||[t[0]+40,t[1]+40];let[n,i]=this.jailPos,s=28,o=22,a=new Ot,l=new lt({color:11052188,roughness:.9}),c=new lt({color:3816512,roughness:.6,metalness:.5}),h=(E,b,C,M)=>{let w=Math.hypot(C-E,M-b),A=new q(new pt(w,4,.4),l);A.position.set((E+C)/2,2,(b+M)/2),A.rotation.y=-Math.atan2(M-b,C-E),A.castShadow=A.receiveShadow=!0,a.add(A);let z=new q(new Yn(.25,.03,4,8),c);for(let L=.5;L<w;L+=.6){let N=z.clone();N.position.set(E+(C-E)*L/w,4.25,b+(M-b)*L/w),N.rotation.y=A.rotation.y,a.add(N)}this.world.addWall(E,b,C,M)},u=n-s/2,p=n+s/2,d=i-o/2,g=i+o/2;h(u,d,p,d),h(p,d,p,g),h(p,g,u,g),h(u,g,u,d);let m=new q(new pt(12,7,6),l);m.position.set(n,3.5,d+3.3),m.castShadow=m.receiveShadow=!0,a.add(m);for(let E=0;E<5;E++)for(let b=0;b<2;b++){let C=new q(new ve(1,.8),new lt({color:1118481}));C.position.set(n-4.8+E*2.4,2.2+b*3,d+6.32),a.add(C);for(let M=0;M<4;M++){let w=new q(new pt(.04,.8,.04),c);w.position.set(n-5.15+E*2.4+M*.24,2.2+b*3,d+6.36),a.add(w)}}let x=new q(new pt(2.4,7,2.4),l);x.position.set(p-1.4,3.5,g-1.4),a.add(x);let f=new q(new pt(3,1.6,3),new lt({color:2767402}));f.position.set(p-1.4,7.8,g-1.4),a.add(f),this.towerLight=new er(16773836,0,40,.4,.5,1),this.towerLight.position.set(p-1.4,8.6,g-1.4),this.towerLight.target.position.set(n,0,i),a.add(this.towerLight,this.towerLight.target);let y=document.createElement("canvas");y.width=512,y.height=96;let _=y.getContext("2d");_.fillStyle="#1446a0",_.fillRect(0,0,512,96),_.fillStyle="#fff",_.font="bold 34px Arial",_.textAlign="center",_.textBaseline="middle",_.fillText("\u0418\u0417\u041E\u041B\u042F\u0422\u041E\u0420 \u0412\u0420\u0415\u041C\u0415\u041D\u041D\u041E\u0413\u041E \u0421\u041E\u0414\u0415\u0420\u0416\u0410\u041D\u0418\u042F",256,48);let v=new q(new ve(9,1.7),new lt({map:new be(y)}));v.position.set(n,5.2,g+.25),a.add(v);let R=v.clone();R.position.set(n,5.2,d-.25),R.rotation.y=Math.PI,a.add(R),this.scene.add(a),this.jailBox={x0:u,x1:p,z0:d,z1:g,cx:n,cz:i}}sendToJail(t,e,n,i){let s=this.jailBox;this.jail={t,total:t,bail:e},n.x=s.cx,n.z=s.cz+3,n.y=0,n.h=0,n.camYaw=Math.PI,n.active=!0,n.char.visible=!0,i.place(s.cx,s.z1+8,Math.PI/2),this.game.msg("\u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F",`\u0412\u044B \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u044B \u043D\u0430 ${t} c. \u0417\u0430\u043B\u043E\u0433: ${fe(e)} \u0441\u043E\u043C (\u043D\u0430\u0436\u043C\u0438\u0442\u0435 B, \u0447\u0442\u043E\u0431\u044B \u0432\u043D\u0435\u0441\u0442\u0438).`,"\u{1F46E}")}updateJail(t,e,n){if(this.towerLight&&(this.towerLight.intensity=n>.4?80:0),!this.jail)return null;this.jail.t-=t;let i=this.jailBox;return e.x=Math.max(i.x0+1,Math.min(i.x1-1,e.x)),e.z=Math.max(i.z0+7,Math.min(i.z1-1,e.z)),this.jail.t<=0?this.release(e,!1):{t:this.jail.t,bail:this.jail.bail}}payBail(t){return!this.jail||!this.game.spend(this.jail.bail,"\u0417\u0430\u043B\u043E\u0433")?!1:(this.release(t,!0),!0)}release(t,e){let n=this.jailBox;return this.jail=null,t.x=n.cx+3,t.z=n.z1+4,t.h=0,this.game.msg("\u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F",e?"\u0417\u0430\u043B\u043E\u0433 \u0432\u043D\u0435\u0441\u0451\u043D. \u0412\u044B \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B \u2013 \u0431\u043E\u043B\u044C\u0448\u0435 \u043D\u0435 \u043D\u0430\u0440\u0443\u0448\u0430\u0439\u0442\u0435!":"\u0421\u0440\u043E\u043A \u0437\u0430\u043A\u043E\u043D\u0447\u0438\u043B\u0441\u044F. \u0412\u044B \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u044B. \u0412\u0430\u0448\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 \u0443 \u0432\u043E\u0440\u043E\u0442.","\u{1F46E}"),{released:!0}}npcMessages(t,e){if(this.npcT-=t,this.npcT>0)return;this.npcT=90+Math.random()*150;let n=[["\u0410\u043F\u0430 (\u043C\u0430\u043C\u0430)","\u0411\u0430\u043B\u0430\u043C, \u043A\u0435\u0447\u0438\u043D\u0434\u0435 \u0442\u0430\u043C\u0430\u043A\u043A\u0430 \u043A\u0435\u043B! \u0411\u0435\u0448\u0431\u0430\u0440\u043C\u0430\u043A \u0436\u0430\u0441\u0430\u0434\u044B\u043C \u{1F372}","\u2764\uFE0F"],["\u0414\u0438\u0441\u043F\u0435\u0442\u0447\u0435\u0440 \u0442\u0430\u043A\u0441\u0438","\u0415\u0441\u0442\u044C \u0437\u0430\u043A\u0430\u0437\u044B \u0432 \u0446\u0435\u043D\u0442\u0440\u0435 \u0438 \u0443 \u041E\u0448\u0441\u043A\u043E\u0433\u043E \u0431\u0430\u0437\u0430\u0440\u0430. \u041D\u0430\u0436\u043C\u0438 J \u2013 \u0432\u044B\u0445\u043E\u0434\u0438 \u043D\u0430 \u043B\u0438\u043D\u0438\u044E!","\u{1F695}"],["\u041D\u0443\u0440\u043B\u0430\u043D (\u0434\u0440\u0443\u0433)","\u0411\u0440\u0430\u0442\u0430\u043D, \u0432\u0435\u0447\u0435\u0440\u043E\u043C \u043A\u0430\u0442\u0430\u0435\u043C\u0441\u044F \u043F\u043E \u042E\u0436\u043D\u043E\u0439 \u043C\u0430\u0433\u0438\u0441\u0442\u0440\u0430\u043B\u0438? \u{1F3C1}","\u{1F60E}"],["MBank","\u041A\u044D\u0448\u0431\u044D\u043A 5% \u043D\u0430 \u0437\u0430\u043F\u0440\u0430\u0432\u043A\u0430\u0445 \u0434\u043E \u043A\u043E\u043D\u0446\u0430 \u043D\u0435\u0434\u0435\u043B\u0438!","\u{1F3E6}"],["\u041A\u043E\u043E\u043F\u0441\u0443\u0437 \u0448\u0430\u0430\u0440","\u041D\u0430\u043F\u043E\u043C\u0438\u043D\u0430\u0435\u043C: \u043D\u0430 \u0434\u043E\u0440\u043E\u0433\u0430\u0445 \u0411\u0438\u0448\u043A\u0435\u043A\u0430 \u0440\u0430\u0431\u043E\u0442\u0430\u044E\u0442 \u043A\u0430\u043C\u0435\u0440\u044B. \u0421\u043E\u0431\u043B\u044E\u0434\u0430\u0439\u0442\u0435 \u041F\u0414\u0414.","\u{1F4F8}"],["\u0410\u0439\u0433\u0435\u0440\u0438\u043C","\u041F\u0440\u0438\u0432\u0435\u0442! \u0422\u044B \u0432\u0438\u0434\u0435\u043B, \u043D\u0430 \u0410\u043B\u0430-\u0422\u043E\u043E \u0441\u043C\u0435\u043D\u0430 \u043A\u0430\u0440\u0430\u0443\u043B\u0430 \u0432 \u043A\u0430\u0436\u0434\u044B\u0439 \u0447\u0430\u0441?","\u{1F642}"],["\u041F\u043E\u0433\u043E\u0434\u0430 KG",e.night?"\u041D\u043E\u0447\u044C\u044E \u0432 \u0411\u0438\u0448\u043A\u0435\u043A\u0435 \u043F\u0440\u043E\u0445\u043B\u0430\u0434\u043D\u043E, \u043D\u0430 \u043F\u0435\u0440\u0435\u0432\u0430\u043B\u0430\u0445 \u0432\u043E\u0437\u043C\u043E\u0436\u0435\u043D \u0441\u043D\u0435\u0433 \u2744":"\u0421\u0435\u0433\u043E\u0434\u043D\u044F \u0432 \u0411\u0438\u0448\u043A\u0435\u043A\u0435 \u0441\u043E\u043B\u043D\u0435\u0447\u043D\u043E, \u0432 \u0433\u043E\u0440\u0430\u0445 +8\xB0C \u2600","\u{1F324}"],["\u041A\u0443\u0440\u044C\u0435\u0440\u0441\u043A\u0430\u044F \u0441\u043B\u0443\u0436\u0431\u0430","\u0421\u0440\u043E\u0447\u043D\u043E \u043D\u0443\u0436\u043D\u044B \u043A\u0443\u0440\u044C\u0435\u0440\u044B! \u041E\u043F\u043B\u0430\u0442\u0430 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438 \u0441\u0440\u0430\u0437\u0443. \u041D\u0430\u0436\u043C\u0438 J.","\u{1F4E6}"],["\u0410\u0433\u0430\u0439 (\u0434\u044F\u0434\u044F)","\u041C\u0430\u0448\u0438\u043D\u0430\u043D\u044B \u0430\u0439\u0434\u0430, \u0431\u0438\u0440\u043E\u043A 150\u0434\u04E9\u043D \u0430\u0448\u043F\u0430! \u0428\u0442\u0440\u0430\u0444 \u0447\u043E\u04A3 \u{1F605}","\u{1F474}"]];e.wanted&&n.push(["\u041D\u0443\u0440\u043B\u0430\u043D (\u0434\u0440\u0443\u0433)","\u0422\u0435\u0431\u044F \u043C\u0435\u043D\u0442\u044B \u0438\u0449\u0443\u0442?! \u0421\u0432\u043E\u0440\u0430\u0447\u0438\u0432\u0430\u0439 \u0432\u043E \u0434\u0432\u043E\u0440\u044B!","\u{1F6A8}"]),this.game.rent||n.push(["\u0410\u0440\u0435\u043D\u0434\u043E\u0434\u0430\u0442\u0435\u043B\u044C \u0413\u0443\u043B\u044C\u043C\u0438\u0440\u0430","\u0421\u0434\u0430\u044E \u043A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u043F\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E \u0432 \u0440\u0430\u0437\u043D\u044B\u0445 \u0440\u0430\u0439\u043E\u043D\u0430\u0445. \u041E\u0442\u043A\u0440\u043E\u0439 \u043F\u0440\u0438\u043B\u043E\u0436\u0435\u043D\u0438\u0435 \xAB\u0410\u0440\u0435\u043D\u0434\u0430\xBB \u0432 \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0435.","\u{1F3E0}"]);let[i,s,o]=n[Math.floor(Math.random()*n.length)];this.game.msg(i,s,o)}};var nl=[["first_km","\u{1F6E3}","First kilometre","Drive 1 km in Bishkek",r=>r.km>=1],["km50","\u{1F5FA}","Road warrior","Drive 50 km",r=>r.km>=50],["taxi5","\u{1F695}","Taxi pro","Complete 5 jobs",r=>r.jobs>=5],["jobs25","\u{1F4BC}","Hard worker","Complete 25 jobs",r=>r.jobs>=25],["rich","\u{1F4B0}","Rich man","Have 50 000 \u0441\u043E\u043C in total",r=>r.total>=5e4],["debt","\u{1F62C}","In debt","Let your MBank account go negative",r=>r.bank<0],["speed","\u26A1","Speed demon","Reach 200 km/h",r=>r.vmax>=200],["drift","\u{1F300}","Drift king","Score a 5 000-point drift",r=>r.drift>=5e3],["escape","\u{1F60E}","Ghost","Escape from a police chase",r=>r.escapes>=1],["busted","\u{1F694}","Busted!","Get caught by the police",r=>r.busted>=1],["jail","\u{1F512}","Behind bars","Spend time in the \u0418\u0412\u0421",r=>r.jailed>=1],["wreck","\u{1F4A5}","Demolition","Wreck 5 cars",r=>r.wrecks>=5],["kalpak","\u{1F3A9}","Treasure hunter","Find 10 golden kalpaks",r=>r.kalpaks>=10],["places","\u{1F4CD}","Bishkek explorer","Discover 20 landmarks",r=>r.places>=20],["race","\u{1F3C1}","Street racer","Win a gold medal",r=>r.gold>=1],["rent","\u{1F3E0}","Moved in","Rent an apartment",r=>!!r.rent],["airport","\u2708","Frequent flyer","Take the scenic flight",r=>r.flights>=1],["fuel","\u26FD","Fill her up","Refuel at a petrol station",r=>r.refuels>=1],["wedding","\u{1F48D}","\u0422\u043E\u0439!","Drive next to a wedding motorcade",r=>r.wedding>=1],["night","\u{1F319}","Night owl","Drive at night in real Bishkek time",r=>r.nightKm>=2],["snow","\u2744","Winter driver","Drive in the snow",r=>r.snowKm>=1],["walker","\u{1F6B6}","Pedestrian","Walk 500 m on foot",r=>r.walk>=500],["thief","\u{1F9B9}","Grand theft auto","Steal a car",r=>r.thefts>=1]],el=class{constructor(t,e,n){this.game=t,this.hud=e,this.audio=n;try{this.got=new Set(JSON.parse(localStorage.getItem("bd_ach")||"[]")),this.stats=JSON.parse(localStorage.getItem("bd_stats")||"{}")}catch{this.got=new Set,this.stats={}}this.t=0}add(t,e=1){this.stats[t]=(this.stats[t]||0)+e}max(t,e){this.stats[t]=Math.max(this.stats[t]||0,e)}update(t,e){if(this.t+=t,this.t<1)return;this.t=0;let n=Object.assign({},this.stats,e);for(let[i,s,o,a,l]of nl)this.got.has(i)||!l(n)||(this.got.add(i),this.game.credit(250,"\u0414\u043E\u0441\u0442\u0438\u0436\u0435\u043D\u0438\u0435: "+o,!0),this.audio.chime(),this.hud.toast(`\u{1F3C6} Achievement: <b>${s} ${o}</b> \u2013 ${a} \xB7 +250 \u0441\u043E\u043C`,4));try{localStorage.setItem("bd_ach",JSON.stringify([...this.got])),localStorage.setItem("bd_stats",JSON.stringify(this.stats))}catch{}}};var He=r=>document.getElementById(r),on=r=>String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]),y1=[["map","\u{1F5FA}","Map","#2f7de1"],["mbank","\u{1F3E6}","MBank","#11a37f"],["msg","\u{1F4AC}","Messages","#25c26a"],["jobs","\u{1F4BC}","Jobs","#f2a516"],["rent","\u{1F3E0}","Rent","#e85d3a"],["garage","\u{1F697}","Garage","#6a5acd"],["radio","\u{1F4FB}","Radio","#d63384"],["online","\u{1F465}","Online","#0aa2c0"],["services","\u{1F6E0}","Services","#8a6d3b"],["ach","\u{1F3C6}","Awards","#c9a227"],["camera","\u{1F4F7}","Camera","#555"],["settings","\u2699","Settings","#6c757d"]],il=class{constructor(t){this.c=t,this.open=!1,this.app=null,this.thread=null,this._home(),He("phHome").onclick=()=>this.show(null)}get unread(){return this.c.game.messages.filter(t=>!t.read).length}toggle(t){this.open?this.close():this.show(t||null)}show(t){this.open=!0,He("phone").classList.add("on"),document.body.classList.add("phoneOn"),this.unring(),this.c.audio.blip(980,.03,.04),this.app=t,this.thread=null,this.render()}close(){this.open=!1,He("phone").classList.remove("on"),document.body.classList.remove("phoneOn"),this.c.onClose&&this.c.onClose()}tick(){He("phTime").textContent=this.c.hud.clockText();let t=this.unread,e=He("phBadge");e&&(e.textContent=t,e.style.display=t?"flex":"none");let n=He("pkBadge");n&&(n.textContent=t,n.style.display=t?"flex":"none");let i=He("pkTime");i&&(i.textContent=this.c.hud.clockText());let s=document.querySelector('.ph-app[data-a="msg"] .bdg');s&&(s.textContent=t,s.style.display=t?"flex":"none")}ring(t){if(this.open)return;He("pkNote").innerHTML=`<b>${t.icon||"\u{1F4AC}"} ${on(t.from)}</b>${on(t.text)}`;let e=He("phPeek");e.classList.remove("ring"),e.offsetWidth,e.classList.add("ring"),clearTimeout(this._rt),this._rt=setTimeout(()=>this.unring(),5e3)}unring(){clearTimeout(this._rt);let t=He("phPeek");t&&t.classList.remove("ring")}_home(){He("phBody").innerHTML=""}render(){let t=He("phBody"),e=this.c.game;if(!this.app){t.innerHTML=`<div class="ph-clock">${this.c.hud.clockText()}</div><div class="ph-date">\u0411\u0438\u0448\u043A\u0435\u043A \xB7 ${new Date().toLocaleDateString("ru-RU",{weekday:"long",day:"numeric",month:"long"})}</div>
        <div class="ph-wid"><button data-a="mbank">\u{1F3E6} MBank<b>${fe(e.bank)} \u0441\u043E\u043C</b></button><button data-a="mbank">\u{1F45B} Wallet<b>${fe(e.money)} \u0441\u043E\u043C</b></button></div>
        ${(()=>{let s=e.messages.filter(o=>!o.read).slice(-3).reverse();return s.length?`<div class="ph-notes">${s.map(o=>`<button data-a="msg"><small>${on(o.clock||"")}</small><b>${o.icon||"\u{1F4AC}"} ${on(o.from)}</b><br>${on(o.text.length>70?o.text.slice(0,70)+"\u2026":o.text)}</button>`).join("")}</div>`:""})()}
        <div class="ph-grid">${y1.map(([s,o,a,l])=>`<button class="ph-app" data-a="${s}"><span style="background:${l}">${o}</span><small>${a}</small>${s==="msg"?'<i class="bdg"></i>':""}</button>`).join("")}</div>`,t.querySelectorAll("[data-a]").forEach(s=>s.onclick=()=>this.openApp(s.dataset.a)),this.tick();return}let n=s=>`<div class="ph-head"><button class="ph-back">\u2039</button><b>${s}</b></div>`;if(this.app==="mbank"){let s=e.tx.slice(-25).reverse();t.innerHTML=n("MBank")+`<div class="mb-card"><small>\u0421\u0447\u0451\u0442 MBank \xB7 KGS</small><div class="mb-bal ${e.bank<0?"neg":""}">${fe(e.bank)} \u0441\u043E\u043C</div><small>\u041D\u0430\u043B\u0438\u0447\u043D\u044B\u0435 \u0432 \u043A\u043E\u0448\u0435\u043B\u044C\u043A\u0435: <b>${fe(e.money)} \u0441\u043E\u043C</b></small></div>
        <div class="mb-row"><button data-w="500">\u0421\u043D\u044F\u0442\u044C 500</button><button data-w="2000">\u0421\u043D\u044F\u0442\u044C 2 000</button><button data-d="1">\u0412\u043D\u0435\u0441\u0442\u0438 \u0432\u0441\u0451</button></div>
        <div class="ph-sec">\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u0438\u0433\u0440\u043E\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D</div>
        <div class="mb-tr"><select id="mbTo">${this.c.net.list().map(o=>`<option value="${o.id}">${on(o.name)}</option>`).join("")||'<option value="">\u2014 \u043D\u0438\u043A\u043E\u0433\u043E \u043E\u043D\u043B\u0430\u0439\u043D \u2014</option>'}</select><input id="mbAmt" type="number" min="1" placeholder="\u0441\u043E\u043C"><button id="mbSend">\u2192</button></div>
        <div class="ph-sec">\u0418\u0441\u0442\u043E\u0440\u0438\u044F</div><div class="mb-tx">${s.map(o=>`<div><span>${on(o.l)}</span><b class="${o.a<0?"neg":"pos"}">${o.a>0?"+":""}${fe(o.a)}</b></div>`).join("")||'<p class="ph-muted">\u041D\u0435\u0442 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0439</p>'}</div>`,t.querySelectorAll("[data-w]").forEach(o=>o.onclick=()=>{let a=+o.dataset.w,l=Math.ceil(a*.01);if(e.bank<a+l)return this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2);e.bank-=a+l,e.money+=a,e.tx.push({t:Date.now(),a:-(a+l),l:"\u0421\u043D\u044F\u0442\u0438\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u0445 (\u043A\u043E\u043C\u0438\u0441\u0441\u0438\u044F 1%)"}),this.c.audio.cash(),this.render()}),t.querySelector("[data-d]").onclick=()=>{e.money<=0||(e.tx.push({t:Date.now(),a:e.money,l:"\u041F\u043E\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u0435 \u043D\u0430\u043B\u0438\u0447\u043D\u044B\u043C\u0438"}),e.bank+=e.money,e.money=0,this.c.audio.cash(),this.render())},He("mbSend").onclick=()=>{let o=He("mbTo").value,a=Math.round(+He("mbAmt").value);if(!o||!(a>0))return;if(e.bank<a)return this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2);let l=this.c.net.list().find(c=>c.id===o);e.bank-=a,e.tx.push({t:Date.now(),a:-a,l:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434: "+(l?l.name:"\u0438\u0433\u0440\u043E\u043A\u0443")}),this.c.net.sendMoney(o,a),this.c.audio.cash(),this.c.hud.toast(`\u2705 ${fe(a)} \u0441\u043E\u043C \u043E\u0442\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u043E ${l?on(l.name):""}`,2),this.render()}}else if(this.app==="msg")if(this.thread){let s=e.messages.filter(l=>l.from===this.thread);s.forEach(l=>l.read=!0);let o=this.c.net.list().find(l=>l.name===this.thread.replace(/^👤 /,""));t.innerHTML=n(on(this.thread))+`<div class="ms-list">${s.map(l=>`<div class="ms-b ${l.mine?"me":""}">${on(l.text)}<small>${l.clock}</small></div>`).join("")}</div>`+(o?'<div class="mb-tr"><input id="msTxt" placeholder="\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u2026" maxlength="200"><button id="msSend">\u2192</button></div>':"");let a=t.querySelector(".ms-list");if(a.scrollTop=a.scrollHeight,o){let l=()=>{let c=He("msTxt").value.trim();c&&(this.c.net.dm(o.id,c),e.messages.push({from:this.thread,text:c,icon:"\u{1F464}",t:Date.now(),clock:this.c.hud.clockText(),read:!0,mine:!0}),this.render())};He("msSend").onclick=l,He("msTxt").onkeydown=c=>{c.stopPropagation(),c.key==="Enter"&&l()},setTimeout(()=>He("msTxt")&&He("msTxt").focus(),50)}this.tick()}else{let s=new Map;for(let a of e.messages)s.set(a.from,a);let o=[...s.values()].sort((a,l)=>l.t-a.t);t.innerHTML=n("Messages")+`<div class="ms-th">${o.map(a=>{let l=e.messages.filter(c=>c.from===a.from&&!c.read).length;return`<button data-f="${on(a.from)}"><span class="av">${a.icon||"\u{1F4AC}"}</span><span><b>${on(a.from)}</b><small>${on(a.text).slice(0,60)}</small></span>${l?`<i>${l}</i>`:""}</button>`}).join("")||'<p class="ph-muted">\u041D\u0435\u0442 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439</p>'}</div>
          <div class="ph-sec">\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0438\u0433\u0440\u043E\u043A\u0443 \u043E\u043D\u043B\u0430\u0439\u043D</div><div class="ms-on">${this.c.net.list().map(a=>`<button data-p="${on(a.name)}">\u{1F464} ${on(a.name)}</button>`).join("")||'<p class="ph-muted">\u0421\u0435\u0439\u0447\u0430\u0441 \u043D\u0438\u043A\u043E\u0433\u043E \u043D\u0435\u0442 \u043E\u043D\u043B\u0430\u0439\u043D. \u041F\u043E\u0434\u0435\u043B\u0438\u0442\u0435\u0441\u044C \u0441\u0441\u044B\u043B\u043A\u043E\u0439 \u043D\u0430 \u0438\u0433\u0440\u0443 \u0441 \u0434\u0440\u0443\u0437\u044C\u044F\u043C\u0438!</p>'}</div>`,t.querySelectorAll("[data-f]").forEach(a=>a.onclick=()=>{this.thread=a.dataset.f,this.render()}),t.querySelectorAll("[data-p]").forEach(a=>a.onclick=()=>{this.thread="\u{1F464} "+a.dataset.p,this.render()})}else if(this.app==="rent"){let s=e.rent,o=[["hatch","City Hatch",350],["suv","Land SUV",900],["coupe","Sport Coupe",2200],["van","Marshrutka",600]];t.innerHTML=n("\u0410\u0440\u0435\u043D\u0434\u0430 \xB7 Rent")+'<div class="ph-sec">\u041A\u0432\u0430\u0440\u0442\u0438\u0440\u044B \u043F\u043E\u0441\u0443\u0442\u043E\u0447\u043D\u043E</div>'+jr.map(c=>`<div class="rt ${s===c.id?"on":""}"><b>${c.name}</b><small>${c.desc}</small><div><span>${fe(c.price)} \u0441\u043E\u043C / \u0441\u0443\u0442\u043A\u0438</span>${s===c.id?'<button data-go="1">\u0414\u043E\u043C\u043E\u0439</button><button data-cancel="1">\u0421\u044A\u0435\u0445\u0430\u0442\u044C</button>':`<button data-r="${c.id}">\u0421\u043D\u044F\u0442\u044C</button>`}</div></div>`).join("")+'<div class="ph-sec">\u041F\u0440\u043E\u043A\u0430\u0442 \u0430\u0432\u0442\u043E (\u0434\u043E \u043F\u043E\u043B\u0443\u043D\u043E\u0447\u0438)</div>'+o.map(([c,h,u])=>`<div class="rt"><b>${h}</b><div><span>${fe(u)} \u0441\u043E\u043C / \u0434\u0435\u043D\u044C</span><button data-car="${c}" data-pr="${u}">\u0412\u0437\u044F\u0442\u044C</button></div></div>`).join("")+'<p class="ph-muted">\u0421\u0432\u043E\u0439 \u0434\u043E\u043C: \u043C\u0435\u0441\u0442\u043E \u043F\u043E\u044F\u0432\u043B\u0435\u043D\u0438\u044F, \u0441\u043E\u043D (E \u0443 \u0434\u043E\u043C\u0430), \u0431\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u0430\u044F \u043F\u0430\u0440\u043A\u043E\u0432\u043A\u0430. \u041E\u043F\u043B\u0430\u0442\u0430 \u043A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C \u0441 MBank.</p>',t.querySelectorAll("[data-r]").forEach(c=>c.onclick=()=>{this.c.life.rentApartment(c.dataset.r)?(this.c.audio.cash(),this.render()):this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2)});let a=t.querySelector("[data-cancel]");a&&(a.onclick=()=>{this.c.life.cancelRent(),this.render()});let l=t.querySelector("[data-go]");l&&(l.onclick=()=>{this.c.goHome(),this.close()}),t.querySelectorAll("[data-car]").forEach(c=>c.onclick=()=>{this.c.life.rentCar(c.dataset.car,+c.dataset.pr,this.c.setCar)?(this.c.audio.cash(),this.close()):this.c.hud.toast("\u041D\u0435\u0434\u043E\u0441\u0442\u0430\u0442\u043E\u0447\u043D\u043E \u0441\u0440\u0435\u0434\u0441\u0442\u0432",1.2)})}else if(this.app==="radio"){let s=this.c.radio;t.innerHTML=n("Radio")+`<div class="rd">${["\u0412\u044B\u043A\u043B",...fs.map(o=>o.name)].map((o,a)=>`<button class="${s.idx===a-1?"on":""}" data-s="${a-1}">${a?"\u{1F4FB} ":"\u23F9 "}${o}${a?`<small>${fs[a-1].genre}</small>`:""}</button>`).join("")}</div>`,t.querySelectorAll("[data-s]").forEach(o=>o.onclick=()=>{let a=+o.dataset.s,l=8;for(;s.idx!==a&&l--;)s.next();He("radioLbl").textContent=s.on?"\u{1F4FB} "+s.station.name:"",this.render()})}else if(this.app==="services"){let s=this.c.car;t.innerHTML=n("Services")+`<div class="rt"><b>\u26FD Fuel</b><small>${Math.round(s.fuel)} / ${s.tank} L \xB7 ${s.diesel?"diesel":"AI-92"} \xB7 drive to any petrol station (\u26FD on the map) and press E</small></div>
        <div class="rt"><b>\u{1F69B} \u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440 \xB7 Tow truck</b><small>Out of fuel or stuck? We bring your car to the nearest petrol station with 10 L.</small><div><span>600 \u0441\u043E\u043C</span><button id="svTow">Call</button></div></div>
        <div class="rt"><b>\u{1F695} \u0422\u0430\u043A\u0441\u0438 \u0434\u043E\u043C\u043E\u0439</b><small>${this.c.life.apartment?"Ride to your apartment.":"Rent an apartment first."}</small><div><span>150 \u0441\u043E\u043C</span><button id="svHome">Go</button></div></div>
        <div class="rt"><b>\u{1F527} \u0421\u0422\u041E \xB7 Repair</b><small>Damage ${Math.round(s.damage)}% \u2013 repair in the Garage or rest at home for free.</small></div>`,He("svTow").onclick=()=>{this.close(),this.c.tow()},He("svHome").onclick=()=>{this.c.goHome(),this.close()}}else if(this.app==="ach"){let s=this.c.ach;t.innerHTML=n(`Awards ${s.got.size}/${nl.length}`)+nl.map(([o,a,l,c])=>`<div class="rt" style="${s.got.has(o)?"":"opacity:.5"}"><b>${a} ${l}${s.got.has(o)?" \u2713":""}</b><small>${c}</small></div>`).join("")}else if(this.app==="online"){let s=this.c.net.list();t.innerHTML=n("Online")+`<p class="ph-muted">${this.c.net.status==="online"?`\u{1F7E2} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u043E \xB7 \u0432\u043E\u0434\u0438\u0442\u0435\u043B\u0435\u0439 \u0432 \u0411\u0438\u0448\u043A\u0435\u043A\u0435: ${s.length+1}`:this.c.net.enabled?"\u{1F7E1} \u041F\u043E\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0435\u2026":"\u26AA \u041C\u0443\u043B\u044C\u0442\u0438\u043F\u043B\u0435\u0435\u0440 \u0432\u044B\u043A\u043B\u044E\u0447\u0435\u043D (\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438)"}</p><div class="ms-th">${s.map(o=>`<button data-p="${on(o.name)}"><span class="av">\u{1F697}</span><span><b>${on(o.name)}</b><small>${fe(o.money)} \u0441\u043E\u043C \xB7 ${o.job||o.car}</small></span></button>`).join("")||'<p class="ph-muted">\u0412\u044B \u043F\u043E\u043A\u0430 \u043E\u0434\u0438\u043D. \u041E\u0442\u043F\u0440\u0430\u0432\u044C\u0442\u0435 \u0441\u0441\u044B\u043B\u043A\u0443 \u043D\u0430 \u0438\u0433\u0440\u0443 \u0434\u0440\u0443\u0437\u044C\u044F\u043C \u2013 \u0438 \u043A\u0430\u0442\u0430\u0439\u0442\u0435\u0441\u044C \u0432\u043C\u0435\u0441\u0442\u0435 \u043F\u043E \u0411\u0438\u0448\u043A\u0435\u043A\u0443!</p>'}</div>`,t.querySelectorAll("[data-p]").forEach(o=>o.onclick=()=>{this.app="msg",this.thread="\u{1F464} "+o.dataset.p,this.render()})}let i=t.querySelector(".ph-back");i&&(i.onclick=()=>{this.thread?(this.thread=null,this.render()):(this.app=null,this.render())})}openApp(t){if(t==="map"){this.close(),this.c.openMap();return}if(t==="jobs"){this.close(),this.c.openTab("pJobs");return}if(t==="garage"){this.close(),this.c.openTab("pGarage");return}if(t==="settings"){this.close(),this.c.openTab("pSettings");return}if(t==="camera"){this.close(),this.c.photo();return}this.app=t,this.thread=null,this.render()}};var yf={petrol:72,diesel:78},sl=class{constructor(t,e,n,i,s,o){this.scene=t,this.map=e,this.traffic=n,this.game=i,this.hud=s,this.audio=o,this.stations=[];for(let a of e.chunks.values())for(let l of a.signs)if(l.kind==="fuel"){if(this.stations.some(h=>Math.hypot(h.x-l.x,h.z-l.z)<60))continue;let c=e.nearestRoad(l.x,l.z,60,h=>h.cls<=5);this.stations.push({name:l.name,x:l.x,z:l.z,rx:c?c.x:l.x,rz:c?c.z:l.z})}this._stationModels(),this._cameras(),this.events=[],this.eventT=25,this.flash=new vi(16777215,0,60,1.5),t.add(this.flash),this.fueling=null}_stationModels(){let t=[];t.push(wt(new pt(14,.6,9).translate(0,5.2,0),15921906)),t.push(wt(new pt(14.1,.25,9.1).translate(0,4.85,0),14165532));for(let s of[-4.5,4.5])for(let o of[-2.8,2.8])t.push(wt(new pt(.35,4.9,.35).translate(s,2.45,o),14540253));for(let s of[-4.5,4.5])t.push(wt(new pt(.8,1.7,.5).translate(s,.85,0),1727144)),t.push(wt(new pt(.6,.4,.52).translate(s,1.4,0),1118481)),t.push(wt(new pt(2.5,.2,1.4).translate(s,.1,0),8947848));t.push(wt(new pt(1.2,7,.3).translate(9,3.5,4),1727144)),t.push(wt(new pt(1,1.4,.32).translate(9,6.2,4),16765498)),this.stationGeo=Qe(t);let e=new Se(this.stationGeo,new lt({vertexColors:!0,roughness:.5}),this.stations.length),n=new jt,i=new ke;this.stations.forEach((s,o)=>{let a=s.x,l=s.z,c=this.map.nearestRoad(a,l,30);if(c&&c.dist<c.e.w/2+6){let h=c.lat>=0?1:-1;a=c.x-c.dz*(c.e.w/2+7)*h,l=c.z+c.dx*(c.e.w/2+7)*h}s.px=a,s.pz=l,i.setFromAxisAngle(new I(0,1,0),c?Math.atan2(c.dx,c.dz):0),n.compose(new I(a,.02,l),i,new I(1,1,1)),e.setMatrixAt(o,n)}),e.castShadow=!0,e.receiveShadow=!0,e.computeBoundingSphere(),this.scene.add(e)}_cameras(){let t=[wt(new Nt(.1,.14,6.5,6).translate(0,3.25,0),6975092),wt(new pt(.1,.1,1.6).translate(0,6.3,.8),6975092),wt(new pt(.34,.3,.6).translate(0,6.1,1.5),15921906),wt(new pt(.2,.2,.1).translate(0,6.1,1.82),1118481),wt(new pt(.5,.35,.05).translate(0,4.4,.08),1727144)],e=Qe(t);this.cams=[];for(let a of this.map.signalClusters){let l=a.controls[0];if(!l)continue;let c={};this.map.sample(l.e,l.dir,Math.max(1,l.stop-25),l.e.w/2+1.2,c),this.cams.push({x:c.x,z:c.z,h:Math.atan2(-c.dx,-c.dz)})}let n=new Se(e,new lt({vertexColors:!0,roughness:.5,metalness:.3}),this.cams.length),i=new jt,s=new ke,o=new I(0,1,0);this.cams.forEach((a,l)=>{s.setFromAxisAngle(o,a.h+Math.PI),i.compose(new I(a.x,0,a.z),s,new I(1,1,1)),n.setMatrixAt(l,i)}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n)}cameraFlash(t,e){let n=null,i=220;for(let s of this.cams){let o=Math.hypot(s.x-t,s.z-e);o<i&&(i=o,n=s)}n&&(this.flash.position.set(n.x-Math.sin(n.h)*1.5,6.1,n.z-Math.cos(n.h)*1.5),this.flash.intensity=400,this.flashT=.12)}nearestStation(t,e,n=18){for(let i of this.stations)if(Math.hypot(i.px-t,i.pz-e)<n)return i;return null}refuel(t){let e=this.nearestStation(t.x,t.z);if(!e)return!1;let n=t.tank-t.fuel;if(n<.5)return this.hud.toast("Tank is already full",1.2),!0;let i=t.diesel?yf.diesel:yf.petrol,s=Math.floor(Math.max(this.game.bank,this.game.money)/i),o=Math.min(n,s);return o<1?(this.hud.toast("Not enough money for fuel",1.5),!0):(this.fueling={car:t,left:o,price:i,total:0,s:e},this.hud.toast(`\u26FD ${e.name}: filling ${Math.round(o)} L of ${t.diesel?"diesel":"AI-92"} \xB7 ${i} \u0441\u043E\u043C/L`,2),!0)}update(t,e,n,i){this.flashT>0&&(this.flashT-=t,this.flashT<=0&&(this.flash.intensity=0));let s=this.fueling;if(s){let o=Math.min(s.left,t*12);if(s.left-=o,s.car.fuel=Math.min(s.car.tank,s.car.fuel+o),s.total+=o,s.left<=.01||n.speed>1){let a=Math.round(s.total*s.price);this.game.spend(a,`\u0410\u0417\u0421 ${s.s.name}: ${s.total.toFixed(1)} L`),this.audio.cash(),this.hud.toast(`\u26FD ${s.total.toFixed(1)} L \xB7 ${fe(a)} \u0441\u043E\u043C`,2),this.fueling=null}}this.eventT-=t,this.eventT<=0&&(this.eventT=70+Math.random()*90,this._spawnEvent(e));for(let o=this.events.length-1;o>=0;o--){let a=this.events[o];a.t+=t,a.update&&a.update(t,e);let l=Math.hypot(a.x-e.x,a.z-e.z)>1500;(a.t>a.life||l)&&(a.dispose(),this.events.splice(o,1))}this.traffic.obstacles=this.events.flatMap(o=>o.obstacles||[])}_roadNear(t,e,n,i){for(let s=0;s<30;s++){let o=Math.random()*6.28,a=e+Math.random()*(n-e),l=this.map.nearestRoad(t.x+Math.cos(o)*a,t.z+Math.sin(o)*a,60,i);if(l&&l.e.len>80)return l}return null}_spawnEvent(t){let e=Math.random();e<.4?this._wedding(t):e<.7?this._roadworks(t):this._accident(t)}_wedding(t){let e=this._roadNear(t,150,350,c=>c.cls<=3&&!c.ow);if(!e)return;let n=[["suv",16053492],["sedan",16053492],["sedan",1118740],["suv",16053492],["sedan",16053492],["suv",1118740]],i=this.traffic.spawnConvoy(e.e,0,n,"wedding"),s=new lt({color:16734858,roughness:.5}),o=i.cars.map((c,h)=>{let u=new Ot,p=new q(new pt(.08,.04,c.spec.L*.9),s);p.position.set(.3,c.spec.roof[2][1]+.02,0),u.add(p);let d=p.clone();if(d.position.x=-.3,u.add(d),h===0){let g=new q(new Yn(.35,.06,8,20),new lt({color:16765498,metalness:1,roughness:.2}));g.position.set(0,c.spec.roof[2][1]+.4,0),g.rotation.x=Math.PI/2,u.add(g)}for(let g of[-1,1]){let m=new q(new ye(.22,10,8),new lt({color:[16731501,16777215,5089023][(h+g+3)%3]}));m.position.set(g*.6,c.spec.roof[2][1]+.9,-c.spec.L*.3),u.add(m)}return this.scene.add(u),u}),a=0,l={kind:"wedding",t:0,life:150,x:e.x,z:e.z,update:(c,h)=>{let u=i.cars.filter(d=>this.traffic.cars.includes(d));i.cars.forEach((d,g)=>{let m=o[g];m.visible=u.includes(d),m.position.set(d.x,.03,d.z),m.rotation.y=d.h}),u.length?(l.x=u[0].x,l.z=u[0].z):l.t=l.life,a-=c;let p=Math.hypot(l.x-h.x,l.z-h.z);if(a<=0&&p<260){a=2.5+Math.random()*2;for(let d=0;d<3;d++)setTimeout(()=>this.audio.horn(Math.min(.25,8/(p+10)),.25,.9+Math.random()*.25),d*320)}},dispose:()=>o.forEach(c=>this.scene.remove(c))};this.events.push(l),this.game.msg("\u041D\u0443\u0440\u043B\u0430\u043D (\u0434\u0440\u0443\u0433)","\u0421\u043B\u044B\u0448\u0438\u0448\u044C \u0433\u0443\u0434\u043A\u0438? \u0421\u0432\u0430\u0434\u0435\u0431\u043D\u044B\u0439 \u043A\u043E\u0440\u0442\u0435\u0436 \u0435\u0434\u0435\u0442 \u043F\u043E \u0433\u043E\u0440\u043E\u0434\u0443! \u{1F48D}\u{1F697}\u{1F697}\u{1F697}","\u{1F48D}")}_roadworks(t){let e=this._roadNear(t,120,300,R=>R.cls<=3&&R.lanes>=2);if(!e)return;let n=e.e,i=Math.max(10,Math.min(n.len-50,e.s)),s=new Ot,o=[],a=new Un(.22,.75,10).translate(0,.37,0),l=new lt({color:16738832,roughness:.6}),c=new lt({color:16777215}),h={},u=n.ow?[0]:[0,1],p=u[Math.floor(Math.random()*u.length)],d=n.lanes-1,g=this.map.laneOffset(n,d);for(let R=0;R<40;R+=3)for(let E of[-1.6,1.6]){this.map.sample(n,p,i+R,g+E,h);let b=new q(a,l);b.position.set(h.x,.05,h.z),b.castShadow=!0,s.add(b);let C=new q(new Nt(.15,.17,.1,10),c);C.position.set(h.x,.45,h.z),s.add(C)}this.map.sample(n,p,i-2,g,h);let m=new q(new pt(3,.9,.15),new lt({color:14165532}));m.position.set(h.x,.8,h.z),m.rotation.y=Math.atan2(h.dx,h.dz)+Math.PI/2,s.add(m);let x=document.createElement("canvas");x.width=256,x.height=256;let f=x.getContext("2d");f.fillStyle="#fff",f.beginPath(),f.moveTo(128,10),f.lineTo(246,236),f.lineTo(10,236),f.closePath(),f.fill(),f.strokeStyle="#d8261c",f.lineWidth=22,f.stroke(),f.fillStyle="#111",f.font="bold 110px Arial",f.textAlign="center",f.fillText("\u2692",128,200);let y=new q(new ve(1.2,1.2),new lt({map:new be(x),transparent:!0,side:we}));y.position.set(h.x,2,h.z),y.rotation.y=Math.atan2(-h.dx,-h.dz),s.add(y),this.map.sample(n,p,i+20,g,h);let _=new q(new pt(2.4,2.2,4),new lt({color:15909376}));_.position.set(h.x,1.4,h.z),_.rotation.y=Math.atan2(h.dx,h.dz),_.castShadow=!0,s.add(_);let v=new q(new pt(.4,.4,4),new lt({color:15909376}));v.position.set(h.x+h.dx*2.5,2.8,h.z+h.dz*2.5),v.rotation.set(-.5,Math.atan2(h.dx,h.dz),0),s.add(v);for(let R=0;R<6;R++)this.map.sample(n,p,i+6+R*5,g,h),o.push({x:h.x,z:h.z,r:1.8});this.scene.add(s),this.events.push({kind:"roadworks",t:0,life:260,x:e.x,z:e.z,obstacles:o,dispose:()=>this.scene.remove(s)})}_accident(t){let e=this._roadNear(t,120,300,m=>m.cls<=3&&m.lanes>=2);if(!e)return;let n=e.e,i=Math.max(10,Math.min(n.len-20,e.s)),s={},o=n.lanes-1,a=this.map.laneOffset(n,o),l=new Ot,c=[],h=(m,x,f,y)=>{this.map.sample(n,0,f,a,s);let _=this.traffic.models[m],v=new Ot;return v.add(new q(_.p.geometry,new lt({color:x,vertexColors:!0,metalness:.4,roughness:.4})),new q(_.d.geometry,new lt({vertexColors:!0}))),v.position.set(s.x,.03,s.z),v.rotation.y=Math.atan2(s.dx,s.dz)+y,v.children.forEach(R=>R.castShadow=!0),l.add(v),c.push({x:s.x,z:s.z,r:1.9}),v};h("sedan",9212054,i,.35),h("suv",1118740,i+5,-.25);let u=h("sedan",16054008,i-9,.15),p=new q(new pt(.5,.14,.26),new lt({color:4194304,emissive:16715792,emissiveIntensity:3})),d=new q(new pt(.5,.14,.26),new lt({color:64,emissive:1065215,emissiveIntensity:3}));p.position.set(-.28,1.6,-.2),d.position.set(.28,1.6,-.2),u.add(p,d);for(let m=0;m<14;m++){let x=new q(new pt(.2,.04,.3),new lt({color:m%3?2236962:12572904}));x.position.set(s.x+(Math.random()-.5)*5,.06,s.z+(Math.random()-.5)*5),x.rotation.y=Math.random()*6,l.add(x)}this.scene.add(l);let g=0;this.events.push({kind:"accident",t:0,life:200,x:e.x,z:e.z,obstacles:c,update:m=>{g+=m;let x=g*4%2<1;p.material.emissiveIntensity=x?4:.2,d.material.emissiveIntensity=x?.2:4},dispose:()=>this.scene.remove(l)})}};var at=r=>document.getElementById(r),Xi=r=>new Promise(t=>setTimeout(t,r)),M1=[15790320,1118740,9212054,5922918,12589080,1718906,2779706,15909376,6953530,14187040,4237528,13154458],Yh=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan. 165 hp",price:0},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend. 75 hp",price:2500},{id:"hatch",name:"City Hatch",desc:"Small Japanese import. Nimble. 110 hp",price:6e3},{id:"van",name:"Marshrutka",desc:"Your own white minibus. 160 hp",price:12e3},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes. 280 hp",price:25e3},{id:"coupe",name:"Sport Coupe",desc:"420 hp. Mind the 150 km/h cameras!",price:6e4}],Kr={low:{scale:.7,view:900,far:2500,shadows:!1,bloom:!1,msaa:!1,ao:!1},medium:{scale:1,view:1250,far:4500,shadows:!0,bloom:!0,msaa:!1,ao:!1},high:{scale:1.25,view:1600,far:6500,shadows:!0,bloom:!0,msaa:!0,ao:!0},ultra:{scale:1.6,view:2200,far:9e3,shadows:!0,bloom:!0,msaa:!0,ao:!0}},_1={preset:"medium",traffic:1,peds:1,sens:1,abs:!0,tcs:!0,esc:!0,steerAssist:!0,manual:!1,fov:62,vol:.7,minimap:!0,autoRes:!0,showFps:!1,weather:"auto",realTime:!0,timeSpeed:1,mp:!0,name:"",shake:!0,...Kr.medium};function w1(){let r={};try{r=JSON.parse(localStorage.getItem("bd_settings2")||"{}")}catch{}if(!r.preset){let t=navigator.hardwareConcurrency||4,e=/Mobi|Android|iPhone/i.test(navigator.userAgent),n=new URLSearchParams(location.search).get("q");r.preset=n||(e?"low":t>=8?"high":"medium"),Object.assign(r,Kr[r.preset])}return Object.assign({},_1,Kr[r.preset]||{},r)}function Mf(r){try{localStorage.setItem("bd_settings2",JSON.stringify(r))}catch{}}async function b1(){let r=(k,W)=>{at("loadText").textContent=k,at("loadBar").style.width=(W*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await Xi(30),!window.BISHKEK_DATA){at("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new ga(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`${t.buildings.length.toLocaleString()} buildings \xB7 ${t.edges.length.toLocaleString()} streets \xB7 ${t.signalClusters.length} traffic lights`,.25),await Xi(30);let e=w1(),n=new $o({antialias:!1,powerPreference:"high-performance"}),i=1,s=()=>n.setPixelRatio((Math.min(window.devicePixelRatio*e.scale,2)*(window.devicePixelRatio>=2?.75:1)||1)*i);s(),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=Ee,n.toneMapping=Xr,n.toneMappingExposure=.95,n.shadowMap.enabled=e.shadows,n.shadowMap.type=uh,n.autoClear=!1,at("app").appendChild(n.domElement);let o=new rs,a=new Ze(e.fov,window.innerWidth/window.innerHeight,.5,4200),l=new wa(n,o);l.sun.shadow.mapSize.set(e.preset==="ultra"?4096:e.preset==="high"?2048:1536,e.preset==="ultra"?4096:e.preset==="high"?2048:1536);let c=Bd();r("Building Bishkek\u2026",.35),await Xi(20);let h=new _a(o,t,c);for(let k of["grass","dirt","field","asphalt","concrete","water"])Object.assign(h.mat[k],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(h.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(h.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(h.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let u=new Da(t),p=new za,d=new La(t,u,p);d.owned||(d.owned=["sedan"]);let g=new Pa(o,t,h);d.setAirport(g),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await Xi(20);let m=new Ia(o,t,h),x=t.nearestRoad(40,55,120,k=>k.cls<=2)||t.nearestRoad(0,0,500),f=new Ea(o,d.owned.includes(d.savedCar)?d.savedCar:"sedan",d.savedColor);d.homeCar=f.type,d.homeColor=f.color;let y=x.x-x.dz*t.laneOffset(x.e,0),_=x.z+x.dx*t.laneOffset(x.e,0);f.place(y,_,Math.atan2(x.dx,x.dz));let v={x:y,z:_};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),h.radius=500,h.update({x:f.x,z:f.z},0,!0),h.radius=Math.min(e.view,900);for(let k=0;k<15;k++)h.update({x:f.x,z:f.z},0,!1),r("Streets, buildings, trees and shop signs\u2026",.55+k*.025),await Xi(1);h.radius=e.view,r("Traffic, traffic lights and people\u2026",.92),await Xi(20);let R=new Ta(o,t,h),E=new Aa(o,t);E.addZone({name:"Manas Airport",x:g.dropoff.x+g.n.x*18,z:g.dropoff.y+g.n.y*-18,r:45,n:40,bags:!0});let b=new ka(t,d,u,p,E),C=new qa(u,p,d),M=new sl(o,t,R,d,u,p),w=new el(d,u,p);d.savedFuel!==void 0&&(f.fuel=Math.min(f.tank,d.savedFuel));let A=new Ya(o,t,d,u,p),z=new Za(o,t,d,u,p),L=new ja(o,h,l),N=new Ka(o,h,t),F=new Qa(p),B=new tl(d,t,h,o,u,p);d.rent&&B._marker(),e.weather&&e.weather!=="auto"&&L.set(e.weather),d.custom&&(f.custom={...d.custom},f._applyCustom(),d.custom.plate&&f.setPlate(d.custom.plate)),b.completed=d.jobsDone||0;let J=new $a(t),O=new Va(o),V=new Wa(o,t,h,p,u,O);V.onEscape=k=>{w.add("escapes");let W=100*k;d.money+=W,p.cash(),u.toast(`+${W} \u0441\u043E\u043C escape bonus`,2)};let j=new Ua(o);f.remotes=j;let it=new Sa(a);it.snap(f);let ut=null,xt=()=>{ut=e.bloom||e.msaa||e.ao?new Ga(n,l,o,a,{bloom:e.bloom,msaa:e.msaa,ao:e.ao}):null};xt();let S={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,thr:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0,hud:!0,chatOpen:!1};function Y(){R.target=Math.round(260*e.traffic),E.target=Math.round(220*e.peds),f.assists={abs:e.abs,tcs:e.tcs,esc:e.esc,steerAssist:e.steerAssist,sens:e.sens,manual:e.manual},p.setVolume(e.vol),h.radius=e.view,h.farRadius=e.far||0,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),a.fov=e.fov,at("hudRoot").classList.toggle("nomini",!e.minimap),Mf(e)}Y(),window.__bd={city:M,ach:w,life:B,drift:C,kalpaks:A,races:z,weather:L,foot:N,radio:F,fx:O,police:V,teleport:(...k)=>dt(...k),rig:it,map:t,world:h,car:f,traffic:R,peds:E,airport:g,game:d,jobs:b,net:j,S,scene:o,camera:a,renderer:n,env:l,settings:e};function nt(k,W,Bt){f.setType(k,W??f.color),S.engineSmoke&&(O.removeEmitter(S.engineSmoke),S.engineSmoke=null),f.stolen=!1,f.assists&&(f.assists={...f.assists}),Bt&&(d.homeCar=k,d.homeColor=W??f.color),it.snap(f)}let K={steer:0,gas:0,brake:0,hand:!1,nitro:!1},mt=["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",k=>{if(!S.chatOpen&&!(k.target&&k.target.tagName==="INPUT"&&k.target.type==="text"&&k.target.offsetParent!==null)){if(k.code==="Tab"){k.preventDefault(),S.mode!=="menu"&&X(!0);return}k.code==="F1"&&k.preventDefault(),!(k.repeat&&!mt.includes(k.code))&&(S.keys[k.code]=!0,mt.includes(k.code)&&k.preventDefault(),yt(k.code))}}),window.addEventListener("keyup",k=>{S.keys[k.code]=!1,k.code==="Tab"&&S.tabOnline&&X(!1)}),window.addEventListener("blur",()=>{S.keys={}});function yt(k){if(p.start(),S.mode==="menu"){k==="Enter"&&at("startBtn").click();return}if(k==="Escape")return S.mapOpen?bt(!1):at("airportMenu").classList.contains("hidden")?S.mode==="flight"?De(!0):S.mode==="spot"?Me():S.mode==="cutscene"?void 0:Mt():at("airportMenu").classList.add("hidden");if(!S.paused)switch(k){case"KeyC":S.mode==="flight"?S.flightCam=(S.flightCam+1)%4:u.toast("Camera: "+it.cycle(),1.2);break;case"KeyM":bt();break;case"KeyH":p.horn(.3,.45),E.list.forEach(W=>{!W.fixed&&Math.hypot(W.x-f.x,W.z-f.z)<15&&W.mode==="walk"&&(W.dodge=.5,W.dside=Math.random()<.5?1:-1)});break;case"KeyE":Dt();break;case"KeyJ":Mt(!0,"pJobs");break;case"KeyR":ot();break;case"KeyG":d.routeTarget&&!b.active&&(d.clearRoute(),u.toast("GPS cleared",1.2));break;case"KeyK":u.toast(p.toggleMute()?"Sound off":"Sound on",1.2);break;case"KeyP":U.toggle();break;case"Comma":f.setIndicator("L"),p.blip(1500,.01,.04);break;case"Period":f.setIndicator("R"),p.blip(1500,.01,.04);break;case"Slash":f.setIndicator("H"),p.blip(1500,.01,.04);break;case"KeyL":f.headMode=f.headMode==="on"?"off":f.headMode==="off"?"auto":"on",u.toast("Headlights: "+f.headMode,1);break;case"KeyB":B.jail&&(B.payBail(N)?(p.cash(),u.toast("Bail paid \u2013 you are free",2)):u.toast("Not enough money for bail",1.5));break;case"Equal":case"NumpadAdd":S.mapOpen?u.zoomMap(1.4):u.zoomMini(1.4);break;case"Minus":case"NumpadSubtract":S.mapOpen?u.zoomMap(1/1.4):u.zoomMini(1/1.4);break;case"BracketRight":e.realTime=!1,S.hour=(S.hour+1)%24,u.toast(u.clockText(),.8);break;case"BracketLeft":e.realTime=!1,S.hour=(S.hour+23)%24,u.toast(u.clockText(),.8);break;case"KeyX":e.manual&&f.shiftUp();break;case"KeyZ":e.manual&&f.shiftDown();break;case"KeyF":zt();break;case"KeyQ":{let W=F.next();u.toast(W?`\u{1F4FB} ${W.name} \xB7 ${W.genre}`:"\u{1F4FB} Radio off",1.6),at("radioLbl").textContent=W?"\u{1F4FB} "+W.name:"";break}case"F1":S.hud=!S.hud,at("hudRoot").classList.toggle("off",!S.hud);break;case"Enter":e.mp&&ht();break}}let At=!1;n.domElement.addEventListener("contextmenu",k=>k.preventDefault()),n.domElement.addEventListener("mousedown",k=>{k.button===2&&(At=!0),p.start()}),window.addEventListener("mouseup",k=>{k.button===2&&(At=!1)});let $t={dx:0,dy:0,active:!1};window.addEventListener("mousemove",k=>{At&&(S.mouseYaw-=k.movementX*.006,$t.dx+=k.movementX*.006,$t.dy+=k.movementY*.004)});function ot(){let k=t.nearestRoad(f.x,f.z,300,T=>T.cls<=4);if(!k)return;let W=t.laneOffset(k.e,0),Bt=k.dx,Kt=k.dz;!k.e.ow&&Math.sin(f.h)*Bt+Math.cos(f.h)*Kt<0&&(Bt=-Bt,Kt=-Kt),f.place(k.x-Kt*W,k.z+Bt*W,Math.atan2(Bt,Kt)),u.toast("Car reset",1)}function dt(k,W){let Bt=t.nearestRoad(k,W,400,T=>T.cls<=4);if(!Bt)return;let Kt=t.laneOffset(Bt.e,0);f.place(Bt.x-Bt.dz*Kt,Bt.z+Bt.dx*Kt,Math.atan2(Bt.dx,Bt.dz)),R.clear();for(let T in R.models)R.models[T].n=0;V.clear();for(let T of[...O.emitters])T.ai&&O.removeEmitter(T);E.list=E.list.filter(T=>T.fixed);for(let T of E.extraZones)T.count=0;it.snap(f);for(let T=0;T<6;T++)h.update({x:f.x,z:f.z},0,!0)}let U=new il({game:d,net:j,life:B,radio:F,hud:u,audio:p,setCar:nt,car:f,ach:null,tow:()=>Ft(),openMap:()=>bt(!0),openTab:k=>Mt(!0,k),goHome:()=>{let k=B.apartment;if(k){if(!d.spend(150,"\u0422\u0430\u043A\u0441\u0438 \u0434\u043E\u043C\u043E\u0439")){u.toast("\u041D\u0435\u0442 \u0434\u0435\u043D\u0435\u0433 \u043D\u0430 \u0442\u0430\u043A\u0441\u0438",1.2);return}dt(k.x,k.z),u.toast("\u{1F3E0} \u0414\u043E\u043C\u0430",1.5)}},photo:()=>gt()});window.__bd.phone=U,U.c.ach=w;function Ft(){let k=null,W=1e9;for(let Bt of M.stations){let Kt=Math.hypot(Bt.rx-f.x,Bt.rz-f.z);Kt<W&&(W=Kt,k=Bt)}if(k){if(!d.spend(600,"\u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440")){u.toast("Not enough money for the tow truck",1.5);return}S.onFoot&&(N.enter(),S.onFoot=!1),dt(k.rx,k.rz),f.fuel=Math.max(f.fuel,10),d.msg("\u042D\u0432\u0430\u043A\u0443\u0430\u0442\u043E\u0440 \xAB\u0411\u0438\u0448\u043A\u0435\u043A\xBB",`\u041C\u0430\u0448\u0438\u043D\u0430 \u0434\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D\u0430 \u043D\u0430 \u0410\u0417\u0421 \xAB${k.name}\xBB. \u0417\u0430\u043B\u0438\u043B\u0438 10 \u043B. \u0421\u043F\u0430\u0441\u0438\u0431\u043E!`,"\u{1F69B}")}}d.onMessage=(k,W)=>{U.tick(),!W&&(p.ping(),U.open?U.app===null&&U.render():U.ring(k),U.open&&U.app==="msg"&&U.render())},j.onPay=(k,W)=>{d.bank+=W,d.tx.push({t:Date.now(),a:W,l:"\u041F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442 "+k}),d.msg("MBank",`+${fe(W)} \u0441\u043E\u043C \u2013 \u043F\u0435\u0440\u0435\u0432\u043E\u0434 \u043E\u0442 ${k}. \u0411\u0430\u043B\u0430\u043D\u0441: ${fe(d.bank)} \u0441\u043E\u043C`,"\u{1F3E6}"),p.cash()},j.onDM=(k,W)=>d.msg("\u{1F464} "+k,W,"\u{1F464}"),at("bMap").onclick=()=>{p.start(),S.mode!=="menu"&&bt()},at("bPhone").onclick=()=>{p.start(),S.mode!=="menu"&&U.toggle()},at("phPeek").onclick=()=>{p.start(),S.mode!=="menu"&&U.show(U.unread?"msg":null)},at("bMenu").onclick=()=>{p.start(),S.mode!=="menu"&&Mt()},at("minimap").onclick=()=>{S.mode!=="menu"&&bt(!0)};function gt(){at("hudRoot").classList.add("off"),setTimeout(()=>{S.photoCbs.push(()=>{let k=document.createElement("a");k.download=`bishkek-${Date.now()}.png`,k.href=n.domElement.toDataURL("image/png"),k.click(),at("hudRoot").classList.toggle("off",!S.hud),p.fine(),u.toast("\u{1F4F7} Photo saved",1.5)})},120)}function Lt(){let k=new Date;return(k.getUTCHours()+6)%24+k.getUTCMinutes()/60+k.getUTCSeconds()/3600}function _t(){let k=Math.floor(Date.now()/12e5),W=Math.abs(Math.sin(k*12.9898)*43758.5453)%1,Bt=new Date(Date.now()+6*36e5).getUTCMonth(),Kt=Bt>=10||Bt<=2;return W<.62?"clear":Kt&&W>.8?"snow":"rain"}let Jt={trolley:"bus",taxi:"sedan",sedan:"sedan",hatch:"hatch",suv:"suv",oldsedan:"oldsedan",van:"van",bus:"bus",truck:"truck"};function zt(){if(S.mode!=="drive"||z.active)return;if(B.jail){u.toast("You are in jail",1);return}if(!S.onFoot){if(f.speed>3){u.toast("Slow down to get out",1);return}if(b.active&&(b.active.type==="bus"||b.active.type==="marshrutka")){u.toast("Finish your route first",1.2);return}N.exit(f),S.onFoot=!0,p.blip(300,.05,.08);return}let k=N.nearestCar(f,R);if(!k){u.toast("No car nearby",1);return}if(!k.own){let W=k.c,Bt=R.cars.indexOf(W);Bt>=0&&R._remove(Bt);let Kt={mode:"cross",x:W.x+Math.cos(W.h)*1.6,z:W.z-Math.sin(W.h)*1.6,h:0,ex:0,ez:0,dodge:0,wait:0,shirt:6953498,pants:2238522,skin:14200976,hairC:1709072,scale:1,speed:5,phase:0};Kt.tx=Kt.x+Math.cos(W.h)*25,Kt.tz=Kt.z-Math.sin(W.h)*25,Kt.h=Math.atan2(Kt.tx-Kt.x,Kt.tz-Kt.z),E.list.push(Kt),f.setType(Jt[W.type]||"sedan",W.color),f.place(W.x,W.z,W.h),f.stolen=!0,S.engineSmoke&&(O.removeEmitter(S.engineSmoke),S.engineSmoke=null),V.crime(1.3,"Car theft"),w.add("thefts"),p.horn(.2,.6,.9),u.toast("\u{1F697} Car stolen! (your own car is waiting in the Garage)",2.5)}N.enter(),S.onFoot=!1,it.snap(f),p.ignition()}function D(k,W,Bt,Kt,T,H,G,Z){e.shake&&(it.shake=Math.min(.7,k*.05)),p.crash(k),k>3&&C.crash(),Kt!==void 0&&k>3&&(O.crash(Kt,.6,T,H??0,G??0,k,W==="car"&&Bt?Bt.color:f.color),k>4&&f.dent(Kt,T,Math.min(.32,k*.022))),W==="car"&&Bt&&k>4&&!z.active&&d.accident(k,ps),W==="car"&&Bt&&(Z?(Bt.emitter=O.emitter(Bt,[0,1,Bt.spec.L*.32],!0),Bt.emitter.ai=!0,w.add("wrecks"),u.toast("\u{1F4A5} Car wrecked!",1.5),V.crime(1.6,"You wrecked a car")):k>7?V.crime(1,"Hit-and-run"):k>4&&V.crime(.4,"Reckless driving")),W==="player"&&k>6&&V.crime(.6,"Rammed another driver"),P()}function P(){f.damage>55&&!S.engineSmoke&&(S.engineSmoke=O.emitter(f,[0,1.05,f.spec.L*.36],!1)),S.engineSmoke&&(S.engineSmoke.dark=f.damage>=90),f.damage<=55&&S.engineSmoke&&(O.removeEmitter(S.engineSmoke),S.engineSmoke=null)}V.onRam=()=>P(),d.peds=E,d.onWarn=()=>p.whistle&&p.whistle(),d.onFine=k=>{M.cameraFlash(f.x,f.z),k.heat&&V.crime(k.heat,k.kind),k.kind==="Speeding"&&k.amount>=500?V.crime(1,"Extreme speeding"):k.kind==="Runway incursion"?V.crime(2,"Runway incursion"):k.kind==="Red light"&&V.crime(.35,"Ran a red light")};let Q=[];function st(k,W,Bt){let Kt=document.createElement("div");for(Kt.innerHTML=`<b>${Bn(k)}</b> ${Bn(W)}`,Bt&&(Kt.style.opacity="0.85"),at("chat").appendChild(Kt),Q.push(Kt);Q.length>6;)Q.shift().remove();setTimeout(()=>{Kt.style.opacity="0"},9e3),setTimeout(()=>Kt.remove(),10500),Bt||p.blip(700,.04,.06)}j.onChat=st,j.onJoin=k=>st("\u25CF",`${k} is driving in Bishkek`,!0);function ht(){if(!j.enabled)return;S.chatOpen=!0,S.keys={};let k=at("chatInput");k.classList.remove("hidden"),k.value="",k.focus()}at("chatInput").addEventListener("keydown",k=>{k.stopPropagation(),k.key==="Enter"&&(j.chat(k.target.value),rt()),k.key==="Escape"&&rt()});function rt(){S.chatOpen=!1,at("chatInput").classList.add("hidden"),at("chatInput").blur()}document.querySelectorAll(".tab").forEach(k=>k.onclick=()=>Ht(k.dataset.p));function Ht(k){document.querySelectorAll(".tab").forEach(W=>W.classList.toggle("on",W.dataset.p===k)),document.querySelectorAll(".page").forEach(W=>W.classList.toggle("on",W.id===k)),k==="pJobs"&&he(),k==="pGarage"&&Qt(),k==="pOnline"&&pe(),k==="pPlaces"&&Tt(),k==="pSettings"&&et()}function Mt(k,W){S.paused=k!==void 0?k:!S.paused,at("pause").classList.toggle("hidden",!S.paused),S.paused&&Ht(W||"pJobs"),S.keys={}}at("resume").onclick=()=>Mt(!1);function bt(k){S.mapOpen=k!==void 0?k:!S.mapOpen,at("mapPanel").classList.toggle("hidden",!S.mapOpen),S.keys={},S.mapOpen?(u._resize(),u.centerMap(f.x,f.z,.12),setTimeout(()=>at("searchInput").focus(),50)):at("searchInput").blur()}let te=[],ft=0,Ct=null;function Yt(){at("searchRes").innerHTML=te.map((k,W)=>`<button class="${W===ft?"on":""}" data-i="${W}"><span class="ic">${J.icon(k.kind)}</span><span>${Bn(k.name)}<small>${k.kind}${k.alt?" \xB7 "+Bn(k.alt):""} \xB7 ${rl(Math.hypot(k.x-f.x,k.z-f.z))}</small></span></button>`).join(""),at("searchRes").querySelectorAll("button").forEach(k=>k.onclick=()=>ee(te[+k.dataset.i]))}function ee(k){k&&(Ct=k,u.searchMark=k,u.centerMap(k.x,k.z,.6),at("pcName").textContent=k.name,at("pcSub").textContent=`${k.kind}${k.alt?" \xB7 "+k.alt:""} \xB7 ${rl(Math.hypot(k.x-f.x,k.z-f.z))} away`,at("placeCard").classList.remove("hidden"),te=[],Yt(),at("searchInput").blur())}at("searchInput").addEventListener("input",k=>{ft=0,te=J.find(k.target.value,10,f),Yt()}),at("searchInput").addEventListener("keydown",k=>{k.stopPropagation(),k.key==="ArrowDown"&&(ft=Math.min(te.length-1,ft+1),Yt(),k.preventDefault()),k.key==="ArrowUp"&&(ft=Math.max(0,ft-1),Yt(),k.preventDefault()),k.key==="Enter"&&ee(te[ft]),k.key==="Escape"&&(k.target.value?(k.target.value="",te=[],Yt()):bt(!1))}),at("pcRoute").onclick=()=>{Ct&&(d.setRoute(Ct.x,Ct.z,Ct.name),u.toast(`\u{1F9ED} Route to ${Bn(Ct.name)}`,2),bt(!1))},at("pcGo").onclick=()=>{Ct&&(dt(Ct.x,Ct.z),u.toast(`\u26A1 ${Bn(Ct.name)}`,2),bt(!1))},u.onMapClick=(k,W,Bt)=>{if(at("placeCard").classList.add("hidden"),u.searchMark=null,Bt){dt(k,W),bt(!1);return}d.setRoute(k,W,"Waypoint"),u.toast("GPS route set",1.2)},at("mapClose").onclick=()=>bt(!1),at("zIn").onclick=()=>u.zoomMap(1.5),at("zOut").onclick=()=>u.zoomMap(1/1.5),at("zMe").onclick=()=>u.centerMap(kt().x,kt().z),at("mzIn").onclick=()=>u.zoomMini(1.4),at("mzOut").onclick=()=>u.zoomMini(1/1.4);let kt=()=>S.onFoot?N:f;function he(){at("jobCards").innerHTML=Object.entries(us).map(([W,Bt])=>`<button class="card ${b.active?.type===W?"sel":""}" data-id="${W}"><div class="ic">${Bt.icon}</div><b>${Bt.name}</b><small>${Bt.desc}</small></button>`).join(""),at("jobCards").querySelectorAll("button").forEach(W=>W.onclick=()=>{if(S.mode==="drive"){if(Mt(!1),b.active?.type===W.dataset.id){b.stop(f,nt);return}b.start(W.dataset.id,f,o,nt)}}),at("raceCards").innerHTML=qh.map(W=>`<button class="card" data-r="${W.id}"><div class="ic">\u{1F3C1}</div><b>${W.name}</b><small>${W.desc}</small><div class="price">${z.best[W.id]?"\u{1F3C6} Best "+Ja(z.best[W.id]):"Prize up to 1 500 \u0441\u043E\u043C"}</div></button>`).join(""),at("raceCards").querySelectorAll("button").forEach(W=>W.onclick=()=>{S.mode==="drive"&&(S.onFoot&&(N.enter(),S.onFoot=!1),b.stop(f,nt,!0),V.clear(),Mt(!1),z.start(qh.find(Bt=>Bt.id===W.dataset.r),f,dt)?(it.snap(f),u.toast("Beat the gold & silver rivals! Speed cameras are off on the race route.",3)):u.toast("Could not build the race route",1.5))}),at("kalpakTxt").textContent=`\u{1F3A9} Golden kalpaks found: ${A.count}/${A.list.length} \u2013 hidden all over Bishkek (+250 \u0441\u043E\u043C each)`,at("jobNow").innerHTML=b.active?`On shift: <b>${b.status(f)}</b> \xB7 <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>`:`${b.completed} jobs done \xB7 cash <b>${fe(d.money)} \u0441\u043E\u043C</b> \xB7 bank <b>${fe(d.bank)} \u0441\u043E\u043C</b>`;let k=at("endShift");k&&(k.onclick=W=>{W.preventDefault(),b.stop(f,nt),he()})}function Qt(){at("garage").innerHTML=Yh.map(G=>{let Z=d.owned.includes(G.id);return`<button class="card ${f.type===G.id?"sel":""} ${Z?"":"locked"}" data-id="${G.id}"><b>${G.name}</b><small>${G.desc}</small><div class="price">${Z?f.type===G.id?"Driving":"Owned":"\u{1FA99} "+fe(G.price)}</div></button>`}).join(""),at("garage").querySelectorAll("button").forEach(G=>G.onclick=()=>{let Z=Yh.find($=>$.id===G.dataset.id);if(b.active&&(b.active.type==="bus"||b.active.type==="marshrutka")){u.toast("Finish your route first",1.5);return}if(!d.owned.includes(Z.id)){if(!d.spend(Z.price,"\u0410\u0432\u0442\u043E\u0441\u0430\u043B\u043E\u043D: "+Z.name)){u.toast(`Not enough money (${fe(Z.price)} \u0441\u043E\u043C needed)`,1.6);return}d.owned.push(Z.id),p.cash()}nt(Z.id,f.color,!0),d.save(f),Qt()});let k=Math.round(f.damage*3+f.dents*5);at("dmgTxt").textContent=f.damage>1||f.dents?`Damage ${Math.round(f.damage)}% \xB7 ${k} \u0441\u043E\u043C`:"Your car is in perfect shape",at("repairBtn").onclick=()=>{if(f.damage>1||f.dents){if(!d.spend(k,"\u0421\u0422\u041E: \u0440\u0435\u043C\u043E\u043D\u0442")){u.toast("Not enough money",1.2);return}f.repair(),P(),p.cash(),Qt()}};let W=f.custom||(f.custom={}),Bt=[[null,"Off"],[2130175,"Blue"],[16719968,"Pink"],[3211136,"Green"],[16752672,"Orange"],[11550975,"Purple"],[16777215,"White"]],Kt=[[null,"Chrome"],[2236962,"Black"],[13934624,"Gold"],[13639712,"Red"],[2777296,"Blue"]],T=d.upgrades||(d.upgrades={}),H=(G,Z,$)=>{if(!T[G]){if(!d.spend(Z,"\u0422\u044E\u043D\u0438\u043D\u0433")){u.toast(`Need ${Z} \u0441\u043E\u043C`,1.2);return}T[G]=!0,p.cash()}$(),f._applyCustom(),d.custom={...W},d.save(f),Qt()};at("custom").innerHTML=`<h4>Neon underglow ${T.neon?"":"\xB7 1 500 \u0441\u043E\u043C"}</h4><div class="sws">${Bt.map(([G,Z])=>`<button class="btn ${W.neon===G?"pri":""}" data-neon="${G}">${Z}</button>`).join(" ")}</div>
      <h4>Rims ${T.rims?"":"\xB7 600 \u0441\u043E\u043C"}</h4><div class="sws">${Kt.map(([G,Z])=>`<button class="btn ${(W.rims??null)===G?"pri":""}" data-rims="${G}">${Z}</button>`).join(" ")}</div>
      <h4>Rear spoiler ${T.spoiler?"":"\xB7 1 000 \u0441\u043E\u043C"}</h4><button class="btn ${W.spoiler?"pri":""}" id="spBtn">${W.spoiler?"Remove spoiler":"Add spoiler"}</button>
      <h4>Number plate</h4><input type="text" id="plateIn" maxlength="12" value="${Bn(f.plateText||"")}" style="background:#1b2430;color:#fff;border:1px solid #2c3a4a;border-radius:8px;padding:8px;text-transform:uppercase">`,at("custom").querySelectorAll("[data-neon]").forEach(G=>G.onclick=()=>H("neon",1500,()=>{W.neon=G.dataset.neon==="null"?null:+G.dataset.neon})),at("custom").querySelectorAll("[data-rims]").forEach(G=>G.onclick=()=>H("rims",600,()=>{W.rims=G.dataset.rims==="null"?null:+G.dataset.rims})),at("spBtn").onclick=()=>H("spoiler",1e3,()=>{W.spoiler=!W.spoiler}),at("plateIn").onchange=G=>{f.setPlate(G.target.value||"01KG 777 BSK"),W.plate=f.plateText,d.custom={...W},d.save(f)},at("colors").innerHTML=M1.map(G=>`<button class="sw" style="background:#${G.toString(16).padStart(6,"0")}" data-c="${G}"></button>`).join(""),at("colors").querySelectorAll("button").forEach(G=>G.onclick=()=>{f.setColor(+G.dataset.c),d.homeColor=+G.dataset.c,d.save(f)})}function pe(){at("netStatus").innerHTML=e.mp?j.status==="online"?`<span class="dot on"></span> Connected \xB7 ${j.players.size+1} drivers in Bishkek right now`:`Connecting\u2026 (${j.status})`:"Multiplayer is off (Settings \u2192 Online).";let k=[{name:j.name||e.name||"You",money:d.money+d.bank,job:b.active?us[b.active.type].icon:"",car:f.type,me:!0}].concat(j.list());k.sort((W,Bt)=>Bt.money-W.money),at("lb").innerHTML="<tr><th>#</th><th>Driver</th><th>\u0421\u043E\u043C</th><th>Now</th></tr>"+k.map((W,Bt)=>`<tr class="${W.me?"me":""}"><td>${Bt+1}</td><td>${Bn(W.name)}</td><td>${fe(W.money)}</td><td>${W.job||Yh.find(Kt=>Kt.id===W.car)?.name||""}</td></tr>`).join("")}function X(k){S.tabOnline=k,k?(pe(),at("pause").classList.remove("hidden"),Ht("pOnline")):S.paused||at("pause").classList.add("hidden")}function Tt(){at("placeCount").textContent=`${d.visited.size}/${Ve.length} landmarks discovered \xB7 click to travel`,at("placeList").innerHTML=Ve.map(k=>`<button class="place ${d.visited.has(k.id)?"done":""}" data-id="${k.id}"><span>${d.visited.has(k.id)?"\u2714":"\u25CB"} ${k.name}</span><small>${k.local||""}</small></button>`).join(""),at("placeList").querySelectorAll("button").forEach(k=>k.onclick=()=>{let W=Ve.find(Bt=>Bt.id===k.dataset.id);dt(W.x,W.z),Mt(!1)}),at("fineList").innerHTML=d.fines.length?d.fines.slice(-10).reverse().map(k=>`<div class="row"><span>${k.kind}<br><small class="muted">${k.time} \xB7 ${Bn(k.detail)}</small></span><b style="color:#ff8a80">\u2212${fe(k.amount)}</b></div>`).join(""):'<p class="muted">No fines. Keep it under 150 km/h!</p>'}function et(){let k=(T,H)=>`<div class="row"><label>${H}</label><button class="tog ${e[T]?"on":""}" data-k="${T}"></button></div>`,W=(T,H,G,Z,$,vt=Et=>Et)=>`<div class="row"><label>${H} <small class="muted" id="v_${T}">${vt(e[T])}</small></label><input type="range" data-k="${T}" min="${G}" max="${Z}" step="${$}" value="${e[T]}"></div>`,Bt=(T,H,G)=>`<div class="row"><label>${H}</label><select data-k="${T}">${G.map(([Z,$])=>`<option value="${Z}" ${String(e[T])===String(Z)?"selected":""}>${$}</option>`).join("")}</select></div>`;at("settingsBox").innerHTML=`<div class="set"><div>
      <h4>Graphics</h4>
      ${Bt("preset","Quality preset",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"],["custom","Custom"]])}
      ${W("scale","Resolution",.5,2,.05,T=>Math.round(T*100)+"%")}
      ${W("view","Detail distance",600,2600,100,T=>T+" m")}
      ${W("far","City skyline distance",0,1e4,500,T=>T?T/1e3+" km":"off")}
      ${k("shadows","Shadows")}${k("bloom","Bloom & colour grading")}${k("msaa","Anti-aliasing")}${k("ao","Ambient occlusion")}
      ${W("fov","Field of view",50,85,1,T=>T+"\xB0")}
      <h4>World</h4>
      ${W("traffic","Traffic density",.2,2,.1,T=>Math.round(T*100)+"%")}
      ${W("peds","Pedestrians",0,2,.1,T=>Math.round(T*100)+"%")}
      ${k("realTime","Real Bishkek time (synced)")}
      ${W("timeSpeed","Day speed",0,6,.5,T=>T?T+"\xD7":"paused")}
      ${Bt("weather","Weather",[["auto","Live (same for everyone)"],["clear","Clear"],["rain","Rain"],["snow","Snow (winter)"]])}
    </div><div>
      <h4>Driving</h4>
      ${W("sens","Steering sensitivity",.4,1.6,.05,T=>Math.round(T*100)+"%")}
      ${Bt("manual","Gearbox",[["false","Automatic"],["true","Manual (Shift / Ctrl)"]])}
      ${k("abs","ABS")}${k("tcs","Traction control")}${k("esc","Stability control")}${k("steerAssist","Counter-steer assist")}
      <h4>Interface &amp; sound</h4>
      ${k("minimap","Minimap")}${k("shake","Camera shake")}${k("autoRes","Auto resolution (smooth FPS)")}${k("showFps","Show FPS")}
      ${W("vol","Volume",0,1,.05,T=>Math.round(T*100)+"%")}
      <h4>Online</h4>
      ${k("mp","Multiplayer")}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${Bn(e.name||"")}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;let Kt=at("settingsBox");Kt.querySelectorAll(".tog").forEach(T=>T.onclick=()=>{let H=T.dataset.k;e[H]=!e[H],T.classList.toggle("on",e[H]),ct(H)}),Kt.querySelectorAll("input[type=range]").forEach(T=>T.oninput=()=>{let H=T.dataset.k;e[H]=+T.value;let G=at("v_"+H);G&&(G.textContent=T.parentElement.querySelector("small").textContent=H==="view"?T.value+" m":H==="far"?+T.value?T.value/1e3+" km":"off":H==="fov"?T.value+"\xB0":H==="timeSpeed"?+T.value?T.value+"\xD7":"paused":Math.round(T.value*100)+"%"),ct(H)}),Kt.querySelectorAll("select").forEach(T=>T.onchange=()=>{let H=T.dataset.k;e[H]=H==="manual"?T.value==="true":T.value,ct(H),H==="weather"&&T.value!=="auto"&&L.set(T.value)}),Kt.querySelector("input[type=text]").onchange=T=>{e.name=T.target.value.trim().slice(0,18)||"Driver",ct("name")},at("resetProg").onclick=()=>{confirm("Reset money, cars and landmarks?")&&(localStorage.removeItem("bishkekDrive"),location.reload())}}function ct(k){k==="preset"&&Kr[e.preset]?(Object.assign(e,Kr[e.preset]),et()):["scale","view","far","shadows","bloom","msaa","ao"].includes(k)&&(e.preset="custom"),["scale","preset"].includes(k)&&(s(),n.setSize(window.innerWidth,window.innerHeight)),["shadows","preset"].includes(k)&&(n.shadowMap.enabled=e.shadows,o.traverse(W=>{W.material&&(Array.isArray(W.material)?W.material:[W.material]).forEach(Bt=>Bt.needsUpdate=!0)})),["bloom","msaa","ao","preset","scale"].includes(k)&&xt(),k==="mp"&&(e.mp?j.connect(e.name||"Driver"):j.disconnect()),k==="name"&&j.enabled&&(j.name=e.name),Y(),a.updateProjectionMatrix()}at("nameInput").value=e.name||"",at("mpToggle").classList.toggle("on",e.mp),at("mpToggle").onclick=()=>{e.mp=!e.mp,at("mpToggle").classList.toggle("on",e.mp)},at("startBtn").onclick=()=>{p.start(),e.name=(at("nameInput").value.trim()||e.name||"Driver"+Math.floor(Math.random()*900+100)).slice(0,18),Mf(e),at("menu").classList.add("hidden"),document.activeElement&&document.activeElement.blur&&document.activeElement.blur(),S.mode="drive",S.paused=!1,it.snap(f),e.mp&&j.connect(e.name),B.apartment&&dt(B.apartment.x,B.apartment.z),setTimeout(()=>{d.messages.some(W=>W.from==="\u0410\u043F\u0430 (\u043C\u0430\u043C\u0430)")?U.unread&&U.ring({icon:"\u{1F4F1}",from:"Phone",text:U.unread+" unread message(s) \u2013 tap to read"}):d.msg("\u0410\u043F\u0430 (\u043C\u0430\u043C\u0430)","\u0411\u0430\u043B\u0430\u043C, \u0411\u0438\u0448\u043A\u0435\u043A\u043A\u0435 \u043A\u043E\u0448 \u043A\u0435\u043B\u0434\u0438\u04A3! This is your phone \u{1F4F1} \u2013 tap it (or press P): MBank, messages, jobs, rent, garage. \u042D\u0442\u0438\u044F\u0442 \u0430\u0439\u0434\u0430! \u2764\uFE0F","\u2764\uFE0F")},2500),p.ignition();let k=!1;try{k=!!localStorage.getItem("bd_intro")}catch{}k?u.toast(`Salam, <b>${Bn(e.name)}</b>! <b>J</b> jobs \xB7 <b>M</b> map \xB7 <b>Esc</b> menu`,4):(S.paused=!0,at("intro").classList.remove("hidden"))},at("introGo").onclick=()=>{at("intro").classList.add("hidden"),S.paused=!1;try{localStorage.setItem("bd_intro","1")}catch{}u.toast(`Salam, <b>${Bn(e.name)}</b>! Press <b>J</b> to start working`,4)};function Dt(){if(S.mode!=="drive")return;if(!S.onFoot&&M.nearestStation(f.x,f.z)){if(f.speed>1){u.toast("Stop at the pump first",1.2);return}M.refuel(f),w.add("refuels");return}let k=Math.hypot(f.x-g.dropoff.x,f.z-g.dropoff.y),W=Math.hypot(f.x-g.spotter.x,f.z-g.spotter.y);if(k<14){if(f.speed>3){u.toast("Stop the car first",1.2);return}u.renderBoard(g.board,at("fids")),at("airportMenu").classList.remove("hidden"),p.pa()}else W<14?qe():B.apartment&&Math.hypot(kt().x-B.apartment.x,kt().z-B.apartment.z)<12&&(f.repair(),P(),d.save(f),p.chime(),e.realTime||(S.hour=8),u.toast("\u{1F3E0} You rested at home. Car fixed, progress saved.",2.5))}at("apFlight").onclick=()=>{if(!d.spend(500,"\u0410\u0432\u0438\u0430\u0431\u0438\u043B\u0435\u0442 FRU")){u.toast("Not enough money for a ticket (500 \u0441\u043E\u043C)",1.6);return}p.cash(),at("airportMenu").classList.add("hidden"),ie()},at("apSpot").onclick=()=>{at("airportMenu").classList.add("hidden"),qe()},at("apTaxi").onclick=()=>{if(at("airportMenu").classList.add("hidden"),!b.start("taxi",f,o,nt))return;let k=b.active;k.x=g.dropoff.x+g.n.x*6,k.z=g.dropoff.y+g.n.y*6,k.ped&&(k.ped.x=k.ped.tx=k.x,k.ped.z=k.ped.tz=k.z),k.dest=Ve.filter(W=>!W.airport)[Math.floor(Math.random()*(Ve.length-1))],d.setRoute(k.x,k.z,"Passenger"),u.toast(`\u{1F695} <b>${k.passenger}</b> just landed and needs a ride to ${k.dest.name}`,3.5)},at("apClose").onclick=()=>at("airportMenu").classList.add("hidden");let Pt=k=>at("fade").classList.toggle("on",k);async function ie(){Pt(!0),await Xi(700),S.flight=g.createScenicFlight(),w.add("flights"),S.mode="flight",S.flightCam=0,g.scenicCamera(S.flight,0,$i,Pn),a.position.copy($i),In.copy(Pn),h.radius=Math.max(e.view,2400),a.far=12e3,a.updateProjectionMatrix(),at("boarding").classList.add("show"),setTimeout(()=>at("boarding").classList.remove("show"),4e3),p.pa(),Pt(!1)}async function De(k){if(!S.flight||S.ending)return;S.ending=!0;let W=S.flight;Pt(!0),await Xi(700),g.endScenic(W),S.flight=null,S.ending=!1,S.mode="drive",h.radius=e.view,a.far=Math.max(4200,(e.far||0)+800),a.updateProjectionMatrix(),u.setFlightInfo(null),it.snap(f),Pt(!1),u.toast(k?"Back at Manas airport":"Welcome back to Bishkek!",2.5)}function qe(){S.mode="spot";let k=g.planes.find(W=>W.state==="approach"||W.state==="flare");k||(k=g._newPlane(),g._startApproach(k,.45)),S.spot={pl:k,cam:new I(g.spotter.x,2.2,g.spotter.y)},In.set(k.x,k.y,k.z),u.toast("Plane spotting \xB7 Esc to exit",2.5)}function Me(){S.mode="drive",S.spot=null}if("ontouchstart"in window){at("touch").classList.remove("hidden");let k=(H,G,Z)=>{let $=at(H);$.addEventListener("touchstart",vt=>{vt.preventDefault(),p.start(),G()}),$.addEventListener("touchend",vt=>{vt.preventDefault(),Z()})},W=at("joy"),Bt=at("joyK"),Kt=null,T=0;W.addEventListener("touchstart",H=>{H.preventDefault(),p.start(),Kt=H.changedTouches[0].identifier,T=W.getBoundingClientRect().left+75}),W.addEventListener("touchmove",H=>{H.preventDefault();for(let G of H.changedTouches)if(G.identifier===Kt){let Z=Math.max(-60,Math.min(60,G.clientX-T));K.steer=Z/60,Bt.style.transform=`translateX(${Z}px)`}}),W.addEventListener("touchend",H=>{H.preventDefault(),K.steer=0,Bt.style.transform="",Kt=null}),k("tGas",()=>K.gas=1,()=>K.gas=0),k("tBrake",()=>K.brake=1,()=>K.brake=0),k("tHand",()=>K.hand=!0,()=>K.hand=!1),k("tNitro",()=>K.nitro=!0,()=>K.nitro=!1),k("tCam",()=>yt("KeyC"),()=>{}),k("tAct",()=>yt("KeyE"),()=>{})}window.addEventListener("resize",()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),ut&&ut.setSize(window.innerWidth,window.innerHeight)});let En=new nr,Sn={x:0,z:0,h:0,speed:0,spec:f.spec,vx:0,vz:0,radius:1},wn={},$i=new I,Pn=new I,In=new I,qi=document.createElement("canvas");qi.width=320,qi.height=180;let ps=k=>S.photoCbs.push(k);if(at("loading").classList.add("hidden"),at("menu").classList.remove("hidden"),!localStorage.getItem("bd_seen"))try{localStorage.setItem("bd_seen","1")}catch{}function ms(k,W){return g.rel(new tt(k,W)).x>-2500&&W<-15500?"Manas International Airport":W<-3600?"Bishkek \u2013 Manas road":W<300?k<500?"Pervomaisky district":"Sverdlovsky district":k<0?"Leninsky district":"Oktyabrsky district"}let ri=0,Hn={ema:1/60,t:0};n.shadowMap.autoUpdate=!1;function fr(){requestAnimationFrame(fr);let k=En.getDelta(),W=Math.min(.05,k);if(Hn.ema=Hn.ema*.95+k*.05,Hn.t+=k,Hn.t>1.5){Hn.t=0;let qt=1/Math.max(.001,Hn.ema);if(e.showFps?(at("fps").textContent=Math.round(qt)+" fps",at("fps").style.display="block"):at("fps").style.display="none",e.autoRes&&S.mode!=="menu"){let re=i;qt<40?i=Math.max(.5,i-(qt<25?.15:.08)):qt>57&&i<1&&(i=Math.min(1,i+.05)),re!==i&&(s(),n.setSize(window.innerWidth,window.innerHeight),ut&&ut.setSize(window.innerWidth,window.innerHeight))}h.buildBudget=qt<35?4:8}let Bt=!S.paused&&S.mode!=="menu",Kt=Bt?W:0;S.time+=Kt,rn.uTime.value+=W,S.hour=e.realTime&&S.mode!=="free"?Lt():(S.hour+Kt/60*e.timeSpeed)%24,l.setHour(S.hour);let T=S.hour;R.rush=T>7.5&&T<10||T>17&&T<20?1.65:T>23||T<6?.45:1;let H=S.keys,G=(H.KeyD||H.ArrowRight?1:0)-(H.KeyA||H.ArrowLeft?1:0)+K.steer,Z=(H.KeyW||H.ArrowUp?1:0)+K.gas,$=(H.KeyS||H.ArrowDown?1:0)+K.brake,vt=!1,Et=navigator.getGamepads?[...navigator.getGamepads()].find(qt=>qt):null;Et&&(Math.abs(Et.axes[0])>.08&&(G=Math.sign(Et.axes[0])*Math.pow(Math.abs(Et.axes[0]),1.5),vt=!0),Et.buttons[7]?.value>.02&&(Z=Et.buttons[7].value),Et.buttons[6]?.value>.02&&($=Et.buttons[6].value)),S.steer=vt?G:S.steer+(Ie.clamp(G,-1,1)-S.steer)*Math.min(1,W*(G===0?12:8)),S.thr+=(Math.min(1,Z)-S.thr)*Math.min(1,W*(Z?5:12));let Gt={steer:S.steer,throttle:S.thr<.02?0:S.thr,brake:Math.min(1,$),hand:!!(H.Space||K.hand||Et?.buttons[0]?.pressed),nitro:!!(H.ShiftLeft||H.ShiftRight||K.nitro||Et?.buttons[1]?.pressed)};f.throttleOn=Gt.throttle>0;let Ut=S.onFoot?N:f,Zt=l.night;if(f.night=Zt>.45,Bt){if(S.mode==="drive"||S.mode==="spot"){let Vt=t.nearestRoad(f.x,f.z,25),ze=Vt&&Vt.dist<Vt.e.w/2+3.5;f.surface=(ze||g.runwayIncursion(f.x,f.z)?1:.72)*(L.grip??1),wn.road=Vt&&Vt.dist<Vt.e.w/2+4?Vt:null;let We=S.mode==="spot"||S.onFoot?{steer:0,throttle:0,brake:1,hand:!0}:Gt;f.update(W,We,h,R,D),S.onFoot&&N.update(W,{fwd:(H.KeyW||H.ArrowUp?1:0)-(H.KeyS||H.ArrowDown?1:0),side:(H.KeyD||H.ArrowRight?1:0)-(H.KeyA||H.ArrowLeft?1:0),run:!!(H.ShiftLeft||H.ShiftRight),jump:!!H.Space},R.cars.concat([f]),E),C.update(W,f,S.onFoot);let mn=z.update(W,f);mn&&mn.target&&(!d.routeTarget||d.routeTarget.x!==mn.target.x)&&d.setRoute(mn.target.x,mn.target.z,"Checkpoint"),mn&&mn.done&&d.clearRoute()}let qt=S.mode==="flight"?Object.assign(Sn,{x:S.flight.plane.x,z:S.flight.plane.z,h:S.flight.plane.h,speed:0}):Ut;R.night=Zt,R.update(W,qt,e.peds>0?E:null),E.update(W,qt,e.peds>0);for(let Vt of R.honks){let ze=Math.hypot(Vt.x-f.x,Vt.z-f.z);p.horn(Math.min(.3,6/(ze+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(g.update(W,Zt,f,S.flight?S.flight.plane:null),m.update(W,S.time,Zt),S.mode==="drive"||S.mode==="cutscene"){let Vt=V.update(W,S.onFoot?N:f,()=>{S.mode="cutscene",document.body.classList.add("cinemode"),b.active&&b.stop(f,nt,!0)});if(Vt&&Vt.cam&&(S.cutCam=Vt),Vt&&Vt.done){if(S.mode="drive",document.body.classList.remove("cinemode"),S.cutCam=null,w.add("busted"),(Vt.stars||0)>=2){w.add("jailed");let ze=25+Vt.stars*15,We=400+Vt.stars*300;S.onFoot=!0,B.sendToJail(ze,We,N,f),d.fines.push({kind:"Arrest",amount:0,detail:`Detained for ${ze} s`,time:u.clockText()}),u.toast(`\u{1F512} Detained! ${ze} s in the \u0418\u0412\u0421 \u2013 or press B to pay ${fe(We)} \u0441\u043E\u043C bail`,4)}else d.charge(Vt.fine,"\u0428\u0442\u0440\u0430\u0444: \u0437\u0430\u0434\u0435\u0440\u0436\u0430\u043D\u0438\u0435"),d.fines.push({kind:"Arrest",amount:Vt.fine,detail:"Caught by the patrol police",time:u.clockText()}),d.msg("\u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F",`\u041F\u0440\u043E\u0442\u043E\u043A\u043E\u043B \u0441\u043E\u0441\u0442\u0430\u0432\u043B\u0435\u043D. \u0428\u0442\u0440\u0430\u0444 ${fe(Vt.fine)} \u0441\u043E\u043C \u0441\u043F\u0438\u0441\u0430\u043D \u0441 MBank.`,"\u{1F46E}"),it.snap(f);d.save(f)}}if(O.update(W),M.update(W,Ut,f,Zt),S.mode==="drive"){if(S.onFoot)w.add("walk",N.speed*W);else{let ze=f.speed*W/1e3;w.add("km",ze),Zt>.5&&e.realTime&&w.add("nightKm",ze),L.cur==="snow"&&L.amount>.5&&w.add("snowKm",ze),w.max("vmax",f.speed*3.6)}if(w.max("drift",C.best||0),!S.wedSeen)for(let ze of M.events)ze.kind==="wedding"&&Math.hypot(ze.x-Ut.x,ze.z-Ut.z)<45&&(w.add("wedding"),S.wedSeen=!0);w.update(W,{jobs:b.completed,total:d.money+d.bank,bank:d.bank,kalpaks:A.count,places:d.visited.size,rent:d.rent,gold:z.golds||0});let Vt=f.fuel/f.tank;Vt<.12&&!S.lowFuel&&(S.lowFuel=!0,d.msg("\u0411\u043E\u0440\u0442\u043E\u0432\u043E\u0439 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440",`\u041C\u0430\u043B\u043E \u0442\u043E\u043F\u043B\u0438\u0432\u0430: ${Math.round(f.fuel)} \u043B. \u0411\u043B\u0438\u0436\u0430\u0439\u0448\u0438\u0435 \u0410\u0417\u0421 \u043E\u0442\u043C\u0435\u0447\u0435\u043D\u044B \u26FD \u043D\u0430 \u043A\u0430\u0440\u0442\u0435.`,"\u26FD")),Vt>.2&&(S.lowFuel=!1),f.fuel<=0&&!S.noFuel?(S.noFuel=!0,u.toast("\u26FD Out of fuel! Phone \u2192 Services \u2192 tow truck (600 \u0441\u043E\u043C)",4)):f.fuel>0&&(S.noFuel=!1)}A.update(W,Ut.x,Ut.z),L.update(W,a),n.toneMappingExposure=.95*(L.exposure??1),e.weather==="auto"&&(S.wT=(S.wT??0)-W,S.wT<=0&&(S.wT=10,L.set(_t()))),S.dayT=(S.dayT??0)-W,S.dayT<=0&&(S.dayT=10,B.dailyTick(nt,f)),S.mode==="drive"&&B.npcMessages(W,{night:Zt>.5,wanted:V.wanted});let re=B.updateJail(W,N,Zt);re&&re.released&&(S.onFoot=!0,N.char.visible=!0,u.toast("\u{1F513} Released from jail",2.5));let Rt=at("jailBox");if(B.jail?(Rt.classList.add("show"),Rt.innerHTML=`\u{1F512} \u0418\u0412\u0421 \xB7 IN JAIL<b>${Math.ceil(B.jail.t)} s</b><small>Press <kbd>B</kbd> to pay ${fe(B.jail.bail)} \u0441\u043E\u043C bail</small>`):Rt.classList.remove("show"),U.open&&!S.onFoot&&f.speed*3.6>20&&S.mode==="drive"?(S.phT=(S.phT||0)+W,S.phT>.5&&(wn.warn=wn.warn||"PHONE WHILE DRIVING!"),S.phT>3&&(S.phT=-8,ps(Vt=>d.issueFine("Phone while driving",100,"Used a mobile phone while driving",Vt,.3)))):(S.phT||0)>0&&(S.phT=0),ri%60===0)for(let Vt of[...O.emitters])Vt.ai&&!R.cars.includes(Vt.obj)&&O.removeEmitter(Vt);if(S.mode==="drive"){let Vt=wn.road?t.roadName(wn.road.e.name):null;wn.street=Vt?Vt.en:null,d.trafficTime=R.time,!z.active&&!S.onFoot&&d.checkRules(W,f,wn,null,g,ps),d.checkLandmarks(f);let ze=b.update(W,f,o,nt);if(ze&&ze.done&&(d.jobsDone=b.completed,d.save(f)),!b.active&&b.nextIn!==void 0&&(b.nextIn-=W,b.nextIn<=0)){let gn=b.nextType;b.nextIn=void 0,b.start(gn,f,o,nt)}u.setStreet(Vt?Vt.en!==Vt.local?`${Vt.en}`:Vt.local:wn.runway?"Runway 07/25":"",Vt&&Vt.en!==Vt.local?Vt.local:ms(f.x,f.z)),u.setLimit(f.speed*3.6,wn.wrongWay,wn.runway,S.onFoot||z.active?"":wn.warn);let We=Math.hypot(f.x-g.dropoff.x,f.z-g.dropoff.y),mn=Math.hypot(f.x-g.spotter.x,f.z-g.spotter.y),_e=We<14?"<b>E</b> \xB7 Manas Airport":mn<14?"<b>E</b> \xB7 watch planes land":"";if(!S.onFoot&&M.nearestStation(f.x,f.z)&&(_e=M.fueling?"\u26FD Filling\u2026":`<b>E</b> \xB7 \u26FD Refuel (${Math.round(f.fuel)}/${f.tank} L)`),S.onFoot){let gn=N.nearestCar(f,R);_e=gn?gn.own?"<b>F</b> \xB7 get in your car":"<b>F</b> \xB7 steal this car \u{1F6A8}":"Walking \xB7 <b>Shift</b> run \xB7 <b>Space</b> jump"}_e!==S.hintTxt&&(S.hintTxt=_e,at("hint").innerHTML=_e,at("hint").classList.toggle("show",!!_e))}else S.hintTxt&&(S.hintTxt="",at("hint").classList.remove("show"));if(S.mode==="flight"){let Vt=["pushback","taxi","taxiIn"].includes(S.flight.stage)?W*3:W;!S.ending&&g.updateScenic(S.flight,Vt)&&De(!1)}d.updateRoute(S.mode==="flight"?Sn:f,o),d.routeMat&&(d.routeMat.uniforms.uTime.value=S.time);let sn=b.status(f),ne=d.routeTarget?Math.hypot(f.x-d.routeTarget.x,f.z-d.routeTarget.z):0;u.setMission(sn?`${sn} \xB7 ${rl(ne)}`:d.routeTarget?`\u{1F4CD} ${d.routeTarget.label} \xB7 ${rl(ne)}`:""),S.lastSave+=W,S.lastSave>10&&(S.lastSave=0,d.save(f))}if(j.update(W,f,{money:d.money+d.bank,job:b.active?us[b.active.type].icon:"",jobs:b.completed},Zt),S.mode==="flight"&&S.flight){g.scenicCamera(S.flight,S.flightCam,$i,Pn),a.position.lerp($i,S.flightCam===0?1-Math.exp(-W*4):1),In.lerp(Pn,S.flightCam===0?1-Math.exp(-W*6):1),a.lookAt(In),a.fov=S.flightCam===2?70:55,a.updateProjectionMatrix();let qt=S.flight.plane,re=(Math.atan2(Math.sin(qt.h),-Math.cos(qt.h))*180/Math.PI+360)%360;u.setFlightInfo({alt:qt.y-qt.a.groundY+627,spd:qt.v,hdg:re,stage:{pushback:"Pushback",taxi:"Taxi to runway 07",roll:"Take-off",air:"Over Bishkek",final:"Final approach",taxiIn:"Taxi to gate",done:"Arrived"}[S.flight.stage],cam:["Chase","Window","Cockpit","Spotter"][S.flightCam]})}else if(S.mode==="spot"&&S.spot){let qt=S.spot.pl;a.position.copy(S.spot.cam),In.lerp(new I(qt.x,qt.y,qt.z),1-Math.exp(-W*5)),a.lookAt(In),a.fov=Ie.clamp(Math.hypot(qt.x-S.spot.cam.x,qt.z-S.spot.cam.z)/40,12,60),a.updateProjectionMatrix(),(!g.planes.includes(qt)||qt.state==="taxiIn"||qt.state==="climb"||qt.state==="goaround"&&qt.y>300)&&Me()}else if(S.mode==="cutscene"&&S.cutCam)a.position.lerp(S.cutCam.cam,1-Math.exp(-W*3)),In.lerp(S.cutCam.look,1-Math.exp(-W*4)),a.lookAt(In),a.fov=50,a.updateProjectionMatrix();else if(S.onFoot&&S.mode==="drive")$t.active=At,N.camera(a,W,$t),$t.dx=$t.dy=0;else if(S.mode!=="free"&&(At||(S.mouseYaw*=Math.exp(-W*2)),f.boosting&&(it.shake=Math.max(it.shake,.06)),it.baseFov=e.fov,it.update(Math.max(W,.001),f,S.mouseYaw),S.mode==="menu")){let qt=performance.now()*4e-5;a.position.set(f.x+Math.sin(qt)*26,6+Math.sin(qt*3)*2,f.z+Math.cos(qt)*26),a.lookAt(f.x,2,f.z)}let se=S.mode==="flight"||S.mode==="free"?{x:a.position.x,z:a.position.z}:{x:f.x,z:f.z};h.update(se,W);let Wt=l.update(a,S.mode==="flight"&&S.flight?{x:S.flight.plane.x,z:S.flight.plane.z}:f),ue=l.sun.shadow.camera,Te=S.mode==="flight"?160:110;ue.right!==Te&&(ue.left=ue.bottom=-Te,ue.right=ue.top=Te,ue.updateProjectionMatrix()),h.setNight(Wt.night),ut&&ut.setNight(Wt.night),S.mode!=="flight"&&(o.fog.near=450,o.fog.far=Math.max(h.radius+700,(e.far||0)*1.15));let Pe=g.noiseAt(a.position.x,a.position.z,a.position.y);if(p.update(W,f,{carType:f.type,onFoot:S.onFoot,night:Zt,rain:L.cur==="rain"?L.amount:0,throttle:Gt.throttle,inFlight:S.mode==="flight",cityLevel:Math.min(1,R.cars.length/200)*(Math.abs(f.z)<6e3?1:.2),jet:S.mode==="flight"?.35:Pe}),e.shadows&&(ri%2===0||f.speed>25)&&(n.shadowMap.needsUpdate=!0),ut?ut.render(W):(n.setRenderTarget(null),n.clear(),l.render(n),n.clearDepth(),n.render(o,a)),S.photoCbs.length){let qt=qi.getContext("2d");qt.drawImage(n.domElement,0,0,320,180),qt.fillStyle="rgba(0,0,0,0.55)",qt.fillRect(0,158,320,22),qt.fillStyle="#ffeb3b",qt.font="bold 12px monospace",qt.fillText(`${Math.round(f.speed*3.6)} km/h  LIMIT 150  ${u.clockText()}  01KG`,8,173);let re=qi.toDataURL("image/jpeg",.7);for(let Rt of S.photoCbs)Rt(re);S.photoCbs.length=0}if(S.mode!=="menu"){ri++,ri%2===0&&u.drawSpeedo(f),e.minimap&&ri%3===0&&u.drawMini(S.onFoot?Object.assign(Sn,{x:N.x,z:N.z,h:N.camYaw,speed:0}):f,R,d,g,j,(Rt,sn)=>{Rt.fillStyle="#ffc83a";for(let ne of A.near(Ut.x,Ut.z,180))Rt.beginPath(),Rt.arc(ne.x,ne.z,7/sn*u.dpr,0,7),Rt.fill();Rt.fillStyle="#3fa0ff";for(let ne of M.stations)if(Math.abs(ne.px-Ut.x)<500&&Math.abs(ne.pz-Ut.z)<500){let Vt=9/sn*u.dpr;Rt.fillRect(ne.px-Vt/2,ne.pz-Vt/2,Vt,Vt)}if(z.active){Rt.fillStyle="#ffd23a";for(let ne of z.active.cps.slice(z.active.i,z.active.i+3))Rt.beginPath(),Rt.arc(ne.x,ne.z,9/sn*u.dpr,0,7),Rt.fill()}for(let ne of V.cars)Rt.fillStyle=performance.now()%500<250?"#ff3030":"#3060ff",Rt.beginPath(),Rt.arc(ne.x,ne.z,7/sn*u.dpr,0,7),Rt.fill()});let qt=at("fuelBar");if(qt){let Rt=f.fuel/f.tank;qt.style.width=Math.round(Rt*100)+"%",qt.parentElement.classList.toggle("low",Rt<.15)}let re=at("nitroBar");re&&(re.style.width=Math.round((f.nitro??1)*100)+"%",re.parentElement.classList.toggle("boost",!!f.boosting)),u.setMoney(d.money),u.setClock(S.hour,e.mp&&j.status==="online"?j.players.size:null),S.mapOpen&&u.drawBigMap(f,d,g,j),S.tabOnline&&ri%20===0&&pe(),at("hudRoot").classList.toggle("flightmode",S.mode==="flight"||S.mode==="spot"),at("hudRoot").classList.toggle("onfoot",!!S.onFoot)}}fr(),window.addEventListener("beforeunload",()=>{d.save(f),j.disconnect()})}function Bn(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function rl(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}b1().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
