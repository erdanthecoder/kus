(()=>{var Ac="170";var Rf=0,lh=1,Cf=2;var Mu=1,Rc=2,Jn=3,_i=0,Ke=1,we=2,zn=0,Es=1,qe=2,ch=3,hh=4,Pf=5,Oi=100,If=101,Lf=102,zf=103,Df=104,Uf=200,Nf=201,kf=202,Bf=203,sl=204,rl=205,Ff=206,Of=207,Hf=208,Vf=209,Gf=210,Wf=211,Xf=212,qf=213,Yf=214,ol=0,al=1,ll=2,Rs=3,cl=4,hl=5,ul=6,fl=7,bu=0,$f=1,Zf=2,vi=0,Cc=1,Pc=2,Ic=3,Rr=4,Jf=5,Lc=6,zc=7;var wu=300,Cs=301,Ps=302,dl=303,pl=304,Ho=306,gr=1e3,Vi=1001,ml=1002,cn=1003,Kf=1004;var Lr=1005;var In=1006,Ea=1007;var Gi=1008;var ti=1009,Eu=1010,Su=1011,xr=1012,Dc=1013,Wi=1014,Ln=1015,hn=1016,Uc=1017,Nc=1018,Is=1020,Tu=35902,Au=1021,Ru=1022,bn=1023,Cu=1024,Pu=1025,Ss=1026,Ls=1027,kc=1028,Bc=1029,Iu=1030,Fc=1031;var Oc=1033,co=33776,ho=33777,uo=33778,fo=33779,gl=35840,xl=35841,vl=35842,yl=35843,_l=36196,Ml=37492,bl=37496,wl=37808,El=37809,Sl=37810,Tl=37811,Al=37812,Rl=37813,Cl=37814,Pl=37815,Il=37816,Ll=37817,zl=37818,Dl=37819,Ul=37820,Nl=37821,po=36492,kl=36494,Bl=36495,Lu=36283,Fl=36284,Ol=36285,Hl=36286;var mo=2300,Vl=2301,Sa=2302,uh=2400,fh=2401,dh=2402;var jf=3200,Qf=3201;var zu=0,td=1,gi="",de="srgb",Ws="srgb-linear",Vo="linear",fe="srgb";var is=7680;var ph=519,ed=512,nd=513,id=514,Du=515,sd=516,rd=517,od=518,ad=519,Gl=35044,Xs=35048;var mh="300 es",jn=2e3,go=2001,Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gh=1234567,ur=Math.PI/180,zs=180/Math.PI;function Dn(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ze[r&255]+Ze[r>>8&255]+Ze[r>>16&255]+Ze[r>>24&255]+"-"+Ze[t&255]+Ze[t>>8&255]+"-"+Ze[t>>16&15|64]+Ze[t>>24&255]+"-"+Ze[e&63|128]+Ze[e>>8&255]+"-"+Ze[e>>16&255]+Ze[e>>24&255]+Ze[n&255]+Ze[n>>8&255]+Ze[n>>16&255]+Ze[n>>24&255]).toLowerCase()}function Ne(r,t,e){return Math.max(t,Math.min(e,r))}function Hc(r,t){return(r%t+t)%t}function ld(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function cd(r,t,e){return r!==t?(e-r)/(t-r):0}function fr(r,t,e){return(1-e)*r+e*t}function hd(r,t,e,n){return fr(r,t,1-Math.exp(-e*n))}function ud(r,t=1){return t-Math.abs(Hc(r,t*2)-t)}function fd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function dd(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function pd(r,t){return r+Math.floor(Math.random()*(t-r+1))}function md(r,t){return r+Math.random()*(t-r)}function gd(r){return r*(.5-Math.random())}function xd(r){r!==void 0&&(gh=r);let t=gh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function vd(r){return r*ur}function yd(r){return r*zs}function _d(r){return(r&r-1)===0&&r!==0}function Md(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function bd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function wd(r,t,e,n,i){let s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),f=o((t-n)/2),d=s((n-t)/2),x=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*x,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*x,a*c);break;case"ZYZ":r.set(l*x,l*d,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Mn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ge(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var ze={DEG2RAD:ur,RAD2DEG:zs,generateUUID:Dn,clamp:Ne,euclideanModulo:Hc,mapLinear:ld,inverseLerp:cd,lerp:fr,damp:hd,pingpong:ud,smoothstep:fd,smootherstep:dd,randInt:pd,randFloat:md,randFloatSpread:gd,seededRandom:xd,degToRad:vd,radToDeg:yd,isPowerOfTwo:_d,ceilPowerOfTwo:Md,floorPowerOfTwo:bd,setQuaternionFromProperEuler:wd,normalize:ge,denormalize:Mn},j=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Kt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],x=n[8],p=i[0],m=i[3],g=i[6],M=i[1],_=i[4],v=i[7],I=i[2],w=i[5],S=i[8];return s[0]=o*p+a*M+l*I,s[3]=o*m+a*_+l*w,s[6]=o*g+a*v+l*S,s[1]=c*p+h*M+u*I,s[4]=c*m+h*_+u*w,s[7]=c*g+h*v+u*S,s[2]=f*p+d*M+x*I,s[5]=f*m+d*_+x*w,s[8]=f*g+d*v+x*S,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,x=e*u+n*f+i*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/x;return t[0]=u*p,t[1]=(i*c-h*n)*p,t[2]=(a*n-i*o)*p,t[3]=f*p,t[4]=(h*e-i*l)*p,t[5]=(i*s-a*e)*p,t[6]=d*p,t[7]=(n*l-c*e)*p,t[8]=(o*e-n*s)*p,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ta=new Kt;function Uu(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function xo(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Ed(){let r=xo("canvas");return r.style.display="block",r}var xh={};function cr(r){r in xh||(xh[r]=!0,console.warn(r))}function Sd(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Td(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Ad(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var oe={enabled:!0,workingColorSpace:Ws,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===fe&&(r.r=Qn(r.r),r.g=Qn(r.g),r.b=Qn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===fe&&(r.r=Ts(r.r),r.g=Ts(r.g),r.b=Ts(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===gi?Vo:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Qn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ts(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var vh=[.64,.33,.3,.6,.15,.06],yh=[.2126,.7152,.0722],_h=[.3127,.329],Mh=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bh=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Ws]:{primaries:vh,whitePoint:_h,transfer:Vo,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:yh,workingColorSpaceConfig:{unpackColorSpace:de},outputColorSpaceConfig:{drawingBufferColorSpace:de}},[de]:{primaries:vh,whitePoint:_h,transfer:fe,toXYZ:Mh,fromXYZ:bh,luminanceCoefficients:yh,outputColorSpaceConfig:{drawingBufferColorSpace:de}}});var ss,Wl=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ss===void 0&&(ss=xo("canvas")),ss.width=t.width,ss.height=t.height;let n=ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=xo("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Qn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Qn(e[n]/255)*255):e[n]=Qn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Rd=0,vo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Dn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Aa(i[o].image)):s.push(Aa(i[o]))}else s=Aa(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Aa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Wl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Cd=0,rn=class r extends Mi{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Vi,i=Vi,s=In,o=Gi,a=bn,l=ti,c=r.DEFAULT_ANISOTROPY,h=gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Cd++}),this.uuid=Dn(),this.name="",this.source=new vo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gr:t.x=t.x-Math.floor(t.x);break;case Vi:t.x=t.x<0?0:1;break;case ml:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gr:t.y=t.y-Math.floor(t.y);break;case Vi:t.y=t.y<0?0:1;break;case ml:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=wu;rn.DEFAULT_ANISOTROPY=1;var ye=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],x=l[9],p=l[2],m=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(x-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(x+m)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let _=(c+1)/2,v=(d+1)/2,I=(g+1)/2,w=(h+f)/4,S=(u+p)/4,R=(x+m)/4;return _>v&&_>I?_<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(_),i=w/n,s=S/n):v>I?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=w/i,s=R/i):I<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(I),n=S/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-x)*(m-x)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(M)<.001&&(M=1),this.x=(m-x)/M,this.y=(u-p)/M,this.z=(f-h)/M,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Xl=class extends Mi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ye(0,0,t,e),this.scissorTest=!1,this.viewport=new ye(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new rn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new vo(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ye=class extends Xl{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},yo=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ql=class extends rn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=Vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ue=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],x=s[o+2],p=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=x,t[e+3]=p;return}if(u!==p||l!==f||c!==d||h!==x){let m=1-a,g=l*f+c*d+h*x+u*p,M=g>=0?1:-1,_=1-g*g;if(_>Number.EPSILON){let I=Math.sqrt(_),w=Math.atan2(I,g*M);m=Math.sin(m*w)/I,a=Math.sin(a*w)/I}let v=a*M;if(l=l*m+f*v,c=c*m+d*v,h=h*m+x*v,u=u*m+p*v,m===1-a){let I=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=I,c*=I,h*=I,u*=I}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],x=s[o+3];return t[e]=a*x+h*u+l*d-c*f,t[e+1]=l*x+h*f+c*u-a*d,t[e+2]=c*x+h*d+a*f-l*u,t[e+3]=h*x-a*u-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),x=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"YXZ":this._x=f*h*u+c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"ZXY":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u-f*d*x;break;case"ZYX":this._x=f*h*u-c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u+f*d*x;break;case"YZX":this._x=f*h*u+c*d*x,this._y=c*d*u+f*h*x,this._z=c*h*x-f*d*u,this._w=c*h*u-f*d*x;break;case"XZY":this._x=f*h*u-c*d*x,this._y=c*d*u-f*h*x,this._z=c*h*x+f*d*u,this._w=c*h*u+f*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(wh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(wh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ra.copy(this).projectOnVector(t),this.sub(Ra)}reflect(t){return this.sub(Ra.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ra=new L,wh=new Ue,ei=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(s,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),zr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),zr.copy(n.boundingBox)),zr.applyMatrix4(t.matrixWorld),this.union(zr)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Qs),Dr.subVectors(this.max,Qs),rs.subVectors(t.a,Qs),os.subVectors(t.b,Qs),as.subVectors(t.c,Qs),hi.subVectors(os,rs),ui.subVectors(as,os),zi.subVectors(rs,as);let e=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-zi.z,zi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,zi.z,0,-zi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-zi.y,zi.x,0];return!Ca(e,rs,os,as,Dr)||(e=[1,0,0,0,1,0,0,0,1],!Ca(e,rs,os,as,Dr))?!1:(Ur.crossVectors(hi,ui),e=[Ur.x,Ur.y,Ur.z],Ca(e,rs,os,as,Dr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Xn=[new L,new L,new L,new L,new L,new L,new L,new L],vn=new L,zr=new ei,rs=new L,os=new L,as=new L,hi=new L,ui=new L,zi=new L,Qs=new L,Dr=new L,Ur=new L,Di=new L;function Ca(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Di.fromArray(r,s);let a=i.x*Math.abs(Di.x)+i.y*Math.abs(Di.y)+i.z*Math.abs(Di.z),l=t.dot(Di),c=e.dot(Di),h=n.dot(Di);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Pd=new ei,tr=new L,Pa=new L,bi=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Pd.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tr.subVectors(t,this.center);let e=tr.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(tr,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Pa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tr.copy(t.center).add(Pa)),this.expandByPoint(tr.copy(t.center).sub(Pa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},qn=new L,Ia=new L,Nr=new L,fi=new L,La=new L,kr=new L,za=new L,_o=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,qn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=qn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(qn.copy(this.origin).addScaledVector(this.direction,e),qn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Ia.copy(t).add(e).multiplyScalar(.5),Nr.copy(e).sub(t).normalize(),fi.copy(this.origin).sub(Ia);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Nr),a=fi.dot(this.direction),l=-fi.dot(Nr),c=fi.lengthSq(),h=Math.abs(1-o*o),u,f,d,x;if(h>0)if(u=o*l-a,f=o*a-l,x=s*h,u>=0)if(f>=-x)if(f<=x){let p=1/h;u*=p,f*=p,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-x?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=x?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Ia).addScaledVector(Nr,f),d}intersectSphere(t,e){qn.subVectors(t.center,this.origin);let n=qn.dot(this.direction),i=qn.dot(qn)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),h>=0?(s=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(s=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,qn)!==null}intersectTriangle(t,e,n,i,s){La.subVectors(e,t),kr.subVectors(n,t),za.crossVectors(La,kr);let o=this.direction.dot(za),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;fi.subVectors(this.origin,t);let l=a*this.direction.dot(kr.crossVectors(fi,kr));if(l<0)return null;let c=a*this.direction.dot(La.cross(fi));if(c<0||l+c>o)return null;let h=-a*fi.dot(za);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},te=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,f,d,x,p,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,f,d,x,p,m)}set(t,e,n,i,s,o,a,l,c,h,u,f,d,x,p,m){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=x,g[11]=p,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/ls.setFromMatrixColumn(t,0).length(),s=1/ls.setFromMatrixColumn(t,1).length(),o=1/ls.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let f=o*h,d=o*u,x=a*h,p=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=d+x*c,e[5]=f-p*c,e[9]=-a*l,e[2]=p-f*c,e[6]=x+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*h,d=l*u,x=c*h,p=c*u;e[0]=f+p*a,e[4]=x*a-d,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-x,e[6]=p+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*h,d=l*u,x=c*h,p=c*u;e[0]=f-p*a,e[4]=-o*u,e[8]=x+d*a,e[1]=d+x*a,e[5]=o*h,e[9]=p-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*h,d=o*u,x=a*h,p=a*u;e[0]=l*h,e[4]=x*c-d,e[8]=f*c+p,e[1]=l*u,e[5]=p*c+f,e[9]=d*c-x,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,x=a*l,p=a*c;e[0]=l*h,e[4]=p-f*u,e[8]=x*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=d*u+x,e[10]=f-p*u}else if(t.order==="XZY"){let f=o*l,d=o*c,x=a*l,p=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+p,e[5]=o*h,e[9]=d*u-x,e[2]=x*u-d,e[6]=a*h,e[10]=p*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Id,t,Ld)}lookAt(t,e,n){let i=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),di.crossVectors(n,an),di.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),di.crossVectors(n,an)),di.normalize(),Br.crossVectors(an,di),i[0]=di.x,i[4]=Br.x,i[8]=an.x,i[1]=di.y,i[5]=Br.y,i[9]=an.y,i[2]=di.z,i[6]=Br.z,i[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],x=n[2],p=n[6],m=n[10],g=n[14],M=n[3],_=n[7],v=n[11],I=n[15],w=i[0],S=i[4],R=i[8],y=i[12],b=i[1],C=i[5],U=i[9],N=i[13],T=i[2],F=i[6],k=i[10],X=i[14],V=i[3],q=i[7],K=i[11],lt=i[15];return s[0]=o*w+a*b+l*T+c*V,s[4]=o*S+a*C+l*F+c*q,s[8]=o*R+a*U+l*k+c*K,s[12]=o*y+a*N+l*X+c*lt,s[1]=h*w+u*b+f*T+d*V,s[5]=h*S+u*C+f*F+d*q,s[9]=h*R+u*U+f*k+d*K,s[13]=h*y+u*N+f*X+d*lt,s[2]=x*w+p*b+m*T+g*V,s[6]=x*S+p*C+m*F+g*q,s[10]=x*R+p*U+m*k+g*K,s[14]=x*y+p*N+m*X+g*lt,s[3]=M*w+_*b+v*T+I*V,s[7]=M*S+_*C+v*F+I*q,s[11]=M*R+_*U+v*k+I*K,s[15]=M*y+_*N+v*X+I*lt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],d=t[14],x=t[3],p=t[7],m=t[11],g=t[15];return x*(+s*l*u-i*c*u-s*a*f+n*c*f+i*a*d-n*l*d)+p*(+e*l*d-e*c*f+s*o*f-i*o*d+i*c*h-s*l*h)+m*(+e*c*u-e*a*d-s*o*u+n*o*d+s*a*h-n*c*h)+g*(-i*a*h-e*l*u+e*a*f+i*o*u-n*o*f+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],d=t[11],x=t[12],p=t[13],m=t[14],g=t[15],M=u*m*c-p*f*c+p*l*d-a*m*d-u*l*g+a*f*g,_=x*f*c-h*m*c-x*l*d+o*m*d+h*l*g-o*f*g,v=h*p*c-x*u*c+x*a*d-o*p*d-h*a*g+o*u*g,I=x*u*l-h*p*l-x*a*f+o*p*f+h*a*m-o*u*m,w=e*M+n*_+i*v+s*I;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/w;return t[0]=M*S,t[1]=(p*f*s-u*m*s-p*i*d+n*m*d+u*i*g-n*f*g)*S,t[2]=(a*m*s-p*l*s+p*i*c-n*m*c-a*i*g+n*l*g)*S,t[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*S,t[4]=_*S,t[5]=(h*m*s-x*f*s+x*i*d-e*m*d-h*i*g+e*f*g)*S,t[6]=(x*l*s-o*m*s-x*i*c+e*m*c+o*i*g-e*l*g)*S,t[7]=(o*f*s-h*l*s+h*i*c-e*f*c-o*i*d+e*l*d)*S,t[8]=v*S,t[9]=(x*u*s-h*p*s-x*n*d+e*p*d+h*n*g-e*u*g)*S,t[10]=(o*p*s-x*a*s+x*n*c-e*p*c-o*n*g+e*a*g)*S,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*d-e*a*d)*S,t[12]=I*S,t[13]=(h*p*i-x*u*i+x*n*f-e*p*f-h*n*m+e*u*m)*S,t[14]=(x*a*i-o*p*i-x*n*l+e*p*l+o*n*m-e*a*m)*S,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*f+e*a*f)*S,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,x=s*u,p=o*h,m=o*u,g=a*u,M=l*c,_=l*h,v=l*u,I=n.x,w=n.y,S=n.z;return i[0]=(1-(p+g))*I,i[1]=(d+v)*I,i[2]=(x-_)*I,i[3]=0,i[4]=(d-v)*w,i[5]=(1-(f+g))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(x+_)*S,i[9]=(m-M)*S,i[10]=(1-(f+p))*S,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=ls.set(i[0],i[1],i[2]).length(),o=ls.set(i[4],i[5],i[6]).length(),a=ls.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],yn.copy(this);let c=1/s,h=1/o,u=1/a;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=u,yn.elements[9]*=u,yn.elements[10]*=u,e.setFromRotationMatrix(yn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=jn){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),d,x;if(a===jn)d=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===go)d=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=jn){let l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),f=(e+t)*c,d=(n+i)*h,x,p;if(a===jn)x=(o+s)*u,p=-2*u;else if(a===go)x=s*u,p=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=p,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},ls=new L,yn=new te,Id=new L(0,0,0),Ld=new L(1,1,1),di=new L,Br=new L,an=new L,Eh=new te,Sh=new Ue,Ge=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Eh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Eh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Sh.setFromEuler(this),this.setFromQuaternion(Sh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ge.DEFAULT_ORDER="XYZ";var Mo=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},zd=0,Th=new L,cs=new Ue,Yn=new te,Fr=new L,er=new L,Dd=new L,Ud=new Ue,Ah=new L(1,0,0),Rh=new L(0,1,0),Ch=new L(0,0,1),Ph={type:"added"},Nd={type:"removed"},hs={type:"childadded",child:null},Da={type:"childremoved",child:null},Le=class r extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=Dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new L,e=new Ge,n=new Ue,i=new L(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new te},normalMatrix:{value:new Kt}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.multiply(cs),this}rotateOnWorldAxis(t,e){return cs.setFromAxisAngle(t,e),this.quaternion.premultiply(cs),this}rotateX(t){return this.rotateOnAxis(Ah,t)}rotateY(t){return this.rotateOnAxis(Rh,t)}rotateZ(t){return this.rotateOnAxis(Ch,t)}translateOnAxis(t,e){return Th.copy(t).applyQuaternion(this.quaternion),this.position.add(Th.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ah,t)}translateY(t){return this.translateOnAxis(Rh,t)}translateZ(t){return this.translateOnAxis(Ch,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fr.copy(t):Fr.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Yn.lookAt(er,Fr,this.up):Yn.lookAt(Fr,er,this.up),this.quaternion.setFromRotationMatrix(Yn),i&&(Yn.extractRotation(i.matrixWorld),cs.setFromRotationMatrix(Yn),this.quaternion.premultiply(cs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ph),hs.child=t,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Nd),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ph),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,t,Dd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(er,Ud,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),x=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Le.DEFAULT_UP=new L(0,1,0);Le.DEFAULT_MATRIX_AUTO_UPDATE=!0;Le.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=new L,$n=new L,Ua=new L,Zn=new L,us=new L,fs=new L,Ih=new L,Na=new L,ka=new L,Ba=new L,Fa=new ye,Oa=new ye,Ha=new ye,xi=class r{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),_n.subVectors(t,e),i.cross(_n);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){_n.subVectors(i,e),$n.subVectors(n,e),Ua.subVectors(t,e);let o=_n.dot(_n),a=_n.dot($n),l=_n.dot(Ua),c=$n.dot($n),h=$n.dot(Ua),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,x=(o*h-a*l)*f;return s.set(1-d-x,x,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Zn)===null?!1:Zn.x>=0&&Zn.y>=0&&Zn.x+Zn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Zn.x),l.addScaledVector(o,Zn.y),l.addScaledVector(a,Zn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Fa.setScalar(0),Oa.setScalar(0),Ha.setScalar(0),Fa.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),Ha.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Fa,s.x),o.addScaledVector(Oa,s.y),o.addScaledVector(Ha,s.z),o}static isFrontFacing(t,e,n,i){return _n.subVectors(n,e),$n.subVectors(t,e),_n.cross($n).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _n.subVectors(this.c,this.b),$n.subVectors(this.a,this.b),_n.cross($n).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;us.subVectors(i,n),fs.subVectors(s,n),Na.subVectors(t,n);let l=us.dot(Na),c=fs.dot(Na);if(l<=0&&c<=0)return e.copy(n);ka.subVectors(t,i);let h=us.dot(ka),u=fs.dot(ka);if(h>=0&&u<=h)return e.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(us,o);Ba.subVectors(t,s);let d=us.dot(Ba),x=fs.dot(Ba);if(x>=0&&d<=x)return e.copy(s);let p=d*c-l*x;if(p<=0&&c>=0&&x<=0)return a=c/(c-x),e.copy(n).addScaledVector(fs,a);let m=h*x-d*u;if(m<=0&&u-h>=0&&d-x>=0)return Ih.subVectors(s,i),a=(u-h)/(u-h+(d-x)),e.copy(i).addScaledVector(Ih,a);let g=1/(m+p+f);return o=p*g,a=f*g,e.copy(n).addScaledVector(us,o).addScaledVector(fs,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function Va(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var yt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=de){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=oe.workingColorSpace){if(t=Hc(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=Va(o,s,t+1/3),this.g=Va(o,s,t),this.b=Va(o,s,t-1/3)}return oe.toWorkingColorSpace(this,i),this}setStyle(t,e=de){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=de){let n=Nu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qn(t.r),this.g=Qn(t.g),this.b=Qn(t.b),this}copyLinearToSRGB(t){return this.r=Ts(t.r),this.g=Ts(t.g),this.b=Ts(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=de){return oe.fromWorkingColorSpace(Je.copy(this),t),Math.round(Ne(Je.r*255,0,255))*65536+Math.round(Ne(Je.g*255,0,255))*256+Math.round(Ne(Je.b*255,0,255))}getHexString(t=de){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Je.copy(this),e);let n=Je.r,i=Je.g,s=Je.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Je.copy(this),e),t.r=Je.r,t.g=Je.g,t.b=Je.b,t}getStyle(t=de){oe.fromWorkingColorSpace(Je.copy(this),t);let e=Je.r,n=Je.g,i=Je.b;return t!==de?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(pi),this.setHSL(pi.h+t,pi.s+e,pi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(pi),t.getHSL(Or);let n=fr(pi.h,Or.h,e),i=fr(pi.s,Or.s,e),s=fr(pi.l,Or.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Je=new yt;yt.NAMES=Nu;var kd=0,ni=class extends Mi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Dn(),this.name="",this.blending=Es,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Oi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Rs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=is,this.stencilZFail=is,this.stencilZPass=is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Es&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==sl&&(n.blendSrc=this.blendSrc),this.blendDst!==rl&&(n.blendDst=this.blendDst),this.blendEquation!==Oi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Rs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ph&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},pe=class extends ni{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.combine=bu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var De=new L,Hr=new j,le=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Gl,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Gl&&(t.usage=this.usage),t}};var Ds=class extends le{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Us=class extends le{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Wt=class extends le{constructor(t,e,n){super(new Float32Array(t),e,n)}},Bd=0,dn=new te,Ga=new Le,ds=new L,ln=new ei,nr=new ei,Ve=new L,se=class r extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Dn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Uu(t)?Us:Ds)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Kt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return dn.makeRotationFromQuaternion(t),this.applyMatrix4(dn),this}rotateX(t){return dn.makeRotationX(t),this.applyMatrix4(dn),this}rotateY(t){return dn.makeRotationY(t),this.applyMatrix4(dn),this}rotateZ(t){return dn.makeRotationZ(t),this.applyMatrix4(dn),this}translate(t,e,n){return dn.makeTranslation(t,e,n),this.applyMatrix4(dn),this}scale(t,e,n){return dn.makeScale(t,e,n),this.applyMatrix4(dn),this}lookAt(t){return Ga.lookAt(t),Ga.updateMatrix(),this.applyMatrix4(Ga.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ds).negate(),this.translate(ds.x,ds.y,ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ei);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ln.setFromBufferAttribute(s),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];nr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(ln.min,nr.min),ln.expandByPoint(Ve),Ve.addVectors(ln.max,nr.max),ln.expandByPoint(Ve)):(ln.expandByPoint(nr.min),ln.expandByPoint(nr.max))}ln.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ve.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ve));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ve.fromBufferAttribute(a,c),l&&(ds.fromBufferAttribute(t,c),Ve.add(ds)),i=Math.max(i,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new le(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;let c=new L,h=new L,u=new L,f=new j,d=new j,x=new j,p=new L,m=new L;function g(R,y,b){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,b),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,y),x.fromBufferAttribute(s,b),h.sub(c),u.sub(c),d.sub(f),x.sub(f);let C=1/(d.x*x.y-x.x*d.y);isFinite(C)&&(p.copy(h).multiplyScalar(x.y).addScaledVector(u,-d.y).multiplyScalar(C),m.copy(u).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(C),a[R].add(p),a[y].add(p),a[b].add(p),l[R].add(m),l[y].add(m),l[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,y=M.length;R<y;++R){let b=M[R],C=b.start,U=b.count;for(let N=C,T=C+U;N<T;N+=3)g(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let _=new L,v=new L,I=new L,w=new L;function S(R){I.fromBufferAttribute(i,R),w.copy(I);let y=a[R];_.copy(y),_.sub(I.multiplyScalar(I.dot(y))).normalize(),v.crossVectors(w,y);let C=v.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,C)}for(let R=0,y=M.length;R<y;++R){let b=M[R],C=b.start,U=b.count;for(let N=C,T=C+U;N<T;N+=3)S(t.getX(N+0)),S(t.getX(N+1)),S(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new le(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,d=t.count;f<d;f+=3){let x=t.getX(f+0),p=t.getX(f+1),m=t.getX(f+2);i.fromBufferAttribute(e,x),s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(x,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,x=0;for(let p=0,m=l.length;p<m;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*h;for(let g=0;g<h;g++)f[x++]=c[d++]}return new le(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Lh=new te,Ui=new _o,Vr=new bi,zh=new L,Gr=new L,Wr=new L,Xr=new L,Wa=new L,qr=new L,Dh=new L,Yr=new L,Q=class extends Le{constructor(t=new se,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){qr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Wa.fromBufferAttribute(u,t),o?qr.addScaledVector(Wa,h):qr.addScaledVector(Wa.sub(e),h))}e.add(qr)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Ui.copy(t.ray).recast(t.near),!(Vr.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Vr,zh)===null||Ui.origin.distanceToSquared(zh)>(t.far-t.near)**2))&&(Lh.copy(s).invert(),Ui.copy(t.ray).applyMatrix4(Lh),!(n.boundingBox!==null&&Ui.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ui)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,p=f.length;x<p;x++){let m=f[x],g=o[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,I=_;v<I;v+=3){let w=a.getX(v),S=a.getX(v+1),R=a.getX(v+2);i=$r(this,g,t,n,c,h,u,w,S,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let x=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let m=x,g=p;m<g;m+=3){let M=a.getX(m),_=a.getX(m+1),v=a.getX(m+2);i=$r(this,o,t,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,p=f.length;x<p;x++){let m=f[x],g=o[m.materialIndex],M=Math.max(m.start,d.start),_=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=M,I=_;v<I;v+=3){let w=v,S=v+1,R=v+2;i=$r(this,g,t,n,c,h,u,w,S,R),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let x=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let m=x,g=p;m<g;m+=3){let M=m,_=m+1,v=m+2;i=$r(this,o,t,n,c,h,u,M,_,v),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Fd(r,t,e,n,i,s,o,a){let l;if(t.side===Ke?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===_i,a),l===null)return null;Yr.copy(a),Yr.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:r}}function $r(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Gr),r.getVertexPosition(l,Wr),r.getVertexPosition(c,Xr);let h=Fd(r,t,e,n,Gr,Wr,Xr,Dh);if(h){let u=new L;xi.getBarycoord(Dh,Gr,Wr,Xr,u),i&&(h.uv=xi.getInterpolatedAttribute(i,a,l,c,u,new j)),s&&(h.uv1=xi.getInterpolatedAttribute(s,a,l,c,u,new j)),o&&(h.normal=xi.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new L,materialIndex:0};xi.getNormal(Gr,Wr,Xr,f.normal),h.face=f,h.barycoord=u}return h}var Dt=class r extends se{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;x("z","y","x",-1,-1,n,e,t,o,s,0),x("z","y","x",1,-1,n,e,-t,o,s,1),x("x","z","y",1,1,t,n,e,i,o,2),x("x","z","y",1,-1,t,n,-e,i,o,3),x("x","y","z",1,-1,t,e,n,i,s,4),x("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(h,3)),this.setAttribute("uv",new Wt(u,2));function x(p,m,g,M,_,v,I,w,S,R,y){let b=v/S,C=I/R,U=v/2,N=I/2,T=w/2,F=S+1,k=R+1,X=0,V=0,q=new L;for(let K=0;K<k;K++){let lt=K*C-N;for(let ut=0;ut<F;ut++){let it=ut*b-U;q[p]=it*M,q[m]=lt*_,q[g]=T,c.push(q.x,q.y,q.z),q[p]=0,q[m]=0,q[g]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(ut/S),u.push(1-K/R),X+=1}}for(let K=0;K<R;K++)for(let lt=0;lt<S;lt++){let ut=f+lt+F*K,it=f+lt+F*(K+1),O=f+(lt+1)+F*(K+1),$=f+(lt+1)+F*K;l.push(ut,it,$),l.push(it,O,$),V+=6}a.addGroup(d,V,y),d+=V,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ns(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function en(r){let t={};for(let e=0;e<r.length;e++){let n=Ns(r[e]);for(let i in n)t[i]=n[i]}return t}function Od(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function ku(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}var Nn={clone:Ns,merge:en},Hd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,xe=class extends ni{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ns(t.uniforms),this.uniformsGroups=Od(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},bo=class extends Le{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},mi=new L,Uh=new j,Nh=new j,ke=class extends bo{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=zs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return zs*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(mi.x,mi.y).multiplyScalar(-t/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-t/mi.z)}getViewSize(t,e){return this.getViewBounds(t,Uh,Nh),e.subVectors(Nh,Uh)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ur*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},ps=-90,ms=1,Yl=class extends Le{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new ke(ps,ms,t,e);i.layers=this.layers,this.add(i);let s=new ke(ps,ms,t,e);s.layers=this.layers,this.add(s);let o=new ke(ps,ms,t,e);o.layers=this.layers,this.add(o);let a=new ke(ps,ms,t,e);a.layers=this.layers,this.add(a);let l=new ke(ps,ms,t,e);l.layers=this.layers,this.add(l);let c=new ke(ps,ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===jn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===go)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=p,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},wo=class extends rn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Cs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},$l=class extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new wo(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:In}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Dt(5,5,5),s=new xe({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:zn});s.uniforms.tEquirect.value=e;let o=new Q(i,s),a=e.minFilter;return e.minFilter===Gi&&(e.minFilter=In),new Yl(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},Xa=new L,Gd=new L,Wd=new Kt,Kn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Xa.subVectors(n,e).cross(Gd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Xa),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Wd.getNormalMatrix(t),i=this.coplanarPoint(Xa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ni=new bi,Zr=new L,vr=class{constructor(t=new Kn,e=new Kn,n=new Kn,i=new Kn,s=new Kn,o=new Kn){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=jn){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],f=i[7],d=i[8],x=i[9],p=i[10],m=i[11],g=i[12],M=i[13],_=i[14],v=i[15];if(n[0].setComponents(l-s,f-c,m-d,v-g).normalize(),n[1].setComponents(l+s,f+c,m+d,v+g).normalize(),n[2].setComponents(l+o,f+h,m+x,v+M).normalize(),n[3].setComponents(l-o,f-h,m-x,v-M).normalize(),n[4].setComponents(l-a,f-u,m-p,v-_).normalize(),e===jn)n[5].setComponents(l+a,f+u,m+p,v+_).normalize();else if(e===go)n[5].setComponents(a,u,p,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(t){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Zr.x=i.normal.x>0?t.max.x:t.min.x,Zr.y=i.normal.y>0?t.max.y:t.min.y,Zr.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Zr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Bu(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function Xd(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,x)=>d.start-x.start);let f=0;for(let d=1;d<u.length;d++){let x=u[f],p=u[d];p.start<=x.start+x.count+1?x.count=Math.max(x.count,p.start+p.count-x.start):(++f,u[f]=p)}u.length=f+1;for(let d=0,x=u.length;d<x;d++){let p=u[d];r.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Ee=class r extends se{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,f=e/l,d=[],x=[],p=[],m=[];for(let g=0;g<h;g++){let M=g*f-o;for(let _=0;_<c;_++){let v=_*u-s;x.push(v,-M,0),p.push(0,0,1),m.push(_/a),m.push(1-g/l)}}for(let g=0;g<l;g++)for(let M=0;M<a;M++){let _=M+c*g,v=M+c*(g+1),I=M+1+c*(g+1),w=M+1+c*g;d.push(_,v,w),d.push(v,I,w)}this.setIndex(d),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},qd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yd=`#ifdef USE_ALPHAHASH
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
#endif`,$d=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Zd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Kd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jd=`#ifdef USE_AOMAP
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
#endif`,Qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tp=`#ifdef USE_BATCHING
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
#endif`,ep=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,np=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ip=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rp=`#ifdef USE_IRIDESCENCE
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
#endif`,op=`#ifdef USE_BUMPMAP
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
#endif`,ap=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,lp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,up=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,dp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mp=`#define PI 3.141592653589793
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
} // validated`,gp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xp=`vec3 transformedNormal = objectNormal;
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
#endif`,vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_p=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ep=`#ifdef USE_ENVMAP
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
#endif`,Sp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tp=`#ifdef USE_ENVMAP
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
#endif`,Ap=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zp=`#ifdef USE_GRADIENTMAP
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
}`,Dp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Up=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Np=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Bp=`#ifdef USE_ENVMAP
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
#endif`,Fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Op=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Gp=`PhysicalMaterial material;
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
#endif`,Wp=`struct PhysicalMaterial {
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
}`,Xp=`
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
#endif`,qp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$p=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Qp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,em=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,im=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,om=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,am=`#ifdef USE_MORPHTARGETS
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
#endif`,lm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pm=`#ifdef USE_NORMALMAP
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
#endif`,mm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ym=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_m=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Mm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Em=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Am=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lm=`#ifdef USE_SKINNING
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
#endif`,zm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Dm=`#ifdef USE_SKINNING
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
#endif`,Um=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Nm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Fm=`#ifdef USE_TRANSMISSION
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
#endif`,Om=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qm=`uniform sampler2D t2D;
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
}`,Ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Zm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`#include <common>
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
}`,jm=`#if DEPTH_PACKING == 3200
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
}`,Qm=`#define DISTANCE
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
}`,t0=`#define DISTANCE
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
}`,e0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,n0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,i0=`uniform float scale;
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
}`,s0=`uniform vec3 diffuse;
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
}`,r0=`#include <common>
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
}`,o0=`uniform vec3 diffuse;
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
}`,a0=`#define LAMBERT
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
}`,l0=`#define LAMBERT
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
}`,c0=`#define MATCAP
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
}`,h0=`#define MATCAP
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
}`,u0=`#define NORMAL
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
}`,f0=`#define NORMAL
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
}`,d0=`#define PHONG
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
}`,p0=`#define PHONG
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
}`,m0=`#define STANDARD
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
}`,g0=`#define STANDARD
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
}`,x0=`#define TOON
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
}`,v0=`#define TOON
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
}`,y0=`uniform float size;
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
}`,_0=`uniform vec3 diffuse;
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
}`,M0=`#include <common>
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
}`,b0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,E0=`uniform vec3 diffuse;
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
}`,Qt={alphahash_fragment:qd,alphahash_pars_fragment:Yd,alphamap_fragment:$d,alphamap_pars_fragment:Zd,alphatest_fragment:Jd,alphatest_pars_fragment:Kd,aomap_fragment:jd,aomap_pars_fragment:Qd,batching_pars_vertex:tp,batching_vertex:ep,begin_vertex:np,beginnormal_vertex:ip,bsdfs:sp,iridescence_fragment:rp,bumpmap_pars_fragment:op,clipping_planes_fragment:ap,clipping_planes_pars_fragment:lp,clipping_planes_pars_vertex:cp,clipping_planes_vertex:hp,color_fragment:up,color_pars_fragment:fp,color_pars_vertex:dp,color_vertex:pp,common:mp,cube_uv_reflection_fragment:gp,defaultnormal_vertex:xp,displacementmap_pars_vertex:vp,displacementmap_vertex:yp,emissivemap_fragment:_p,emissivemap_pars_fragment:Mp,colorspace_fragment:bp,colorspace_pars_fragment:wp,envmap_fragment:Ep,envmap_common_pars_fragment:Sp,envmap_pars_fragment:Tp,envmap_pars_vertex:Ap,envmap_physical_pars_fragment:Bp,envmap_vertex:Rp,fog_vertex:Cp,fog_pars_vertex:Pp,fog_fragment:Ip,fog_pars_fragment:Lp,gradientmap_pars_fragment:zp,lightmap_pars_fragment:Dp,lights_lambert_fragment:Up,lights_lambert_pars_fragment:Np,lights_pars_begin:kp,lights_toon_fragment:Fp,lights_toon_pars_fragment:Op,lights_phong_fragment:Hp,lights_phong_pars_fragment:Vp,lights_physical_fragment:Gp,lights_physical_pars_fragment:Wp,lights_fragment_begin:Xp,lights_fragment_maps:qp,lights_fragment_end:Yp,logdepthbuf_fragment:$p,logdepthbuf_pars_fragment:Zp,logdepthbuf_pars_vertex:Jp,logdepthbuf_vertex:Kp,map_fragment:jp,map_pars_fragment:Qp,map_particle_fragment:tm,map_particle_pars_fragment:em,metalnessmap_fragment:nm,metalnessmap_pars_fragment:im,morphinstance_vertex:sm,morphcolor_vertex:rm,morphnormal_vertex:om,morphtarget_pars_vertex:am,morphtarget_vertex:lm,normal_fragment_begin:cm,normal_fragment_maps:hm,normal_pars_fragment:um,normal_pars_vertex:fm,normal_vertex:dm,normalmap_pars_fragment:pm,clearcoat_normal_fragment_begin:mm,clearcoat_normal_fragment_maps:gm,clearcoat_pars_fragment:xm,iridescence_pars_fragment:vm,opaque_fragment:ym,packing:_m,premultiplied_alpha_fragment:Mm,project_vertex:bm,dithering_fragment:wm,dithering_pars_fragment:Em,roughnessmap_fragment:Sm,roughnessmap_pars_fragment:Tm,shadowmap_pars_fragment:Am,shadowmap_pars_vertex:Rm,shadowmap_vertex:Cm,shadowmask_pars_fragment:Pm,skinbase_vertex:Im,skinning_pars_vertex:Lm,skinning_vertex:zm,skinnormal_vertex:Dm,specularmap_fragment:Um,specularmap_pars_fragment:Nm,tonemapping_fragment:km,tonemapping_pars_fragment:Bm,transmission_fragment:Fm,transmission_pars_fragment:Om,uv_pars_fragment:Hm,uv_pars_vertex:Vm,uv_vertex:Gm,worldpos_vertex:Wm,background_vert:Xm,background_frag:qm,backgroundCube_vert:Ym,backgroundCube_frag:$m,cube_vert:Zm,cube_frag:Jm,depth_vert:Km,depth_frag:jm,distanceRGBA_vert:Qm,distanceRGBA_frag:t0,equirect_vert:e0,equirect_frag:n0,linedashed_vert:i0,linedashed_frag:s0,meshbasic_vert:r0,meshbasic_frag:o0,meshlambert_vert:a0,meshlambert_frag:l0,meshmatcap_vert:c0,meshmatcap_frag:h0,meshnormal_vert:u0,meshnormal_frag:f0,meshphong_vert:d0,meshphong_frag:p0,meshphysical_vert:m0,meshphysical_frag:g0,meshtoon_vert:x0,meshtoon_frag:v0,points_vert:y0,points_frag:_0,shadow_vert:M0,shadow_frag:b0,sprite_vert:w0,sprite_frag:E0},bt={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Pn={basic:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:en([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:en([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:en([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:en([bt.points,bt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:en([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:en([bt.common,bt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:en([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:en([bt.sprite,bt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:en([bt.common,bt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:en([bt.lights,bt.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Pn.physical={uniforms:en([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};var Jr={r:0,b:0,g:0},ki=new Ge,S0=new te;function T0(r,t,e,n,i,s,o){let a=new yt(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function x(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?e:t).get(_)),_}function p(M){let _=!1,v=x(M);v===null?g(a,l):v&&v.isColor&&(g(v,1),_=!0);let I=r.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||_)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,_){let v=x(_);v&&(v.isCubeTexture||v.mapping===Ho)?(h===void 0&&(h=new Q(new Dt(1,1,1),new xe({name:"BackgroundCubeMaterial",uniforms:Ns(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,w,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),ki.copy(_.backgroundRotation),ki.x*=-1,ki.y*=-1,ki.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(S0.makeRotationFromEuler(ki)),h.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,(u!==v||f!==v.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Q(new Ee(2,2),new xe({name:"BackgroundMaterial",uniforms:Ns(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=oe.getTransfer(v.colorSpace)!==fe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,d=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function g(M,_){M.getRGB(Jr,ku(r)),n.buffers.color.setClear(Jr.r,Jr.g,Jr.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(M,_=1){a.set(M),l=_,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,g(a,l)},render:p,addToRenderList:m}}function A0(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(b,C,U,N,T){let F=!1,k=u(N,U,C);s!==k&&(s=k,c(s.object)),F=d(b,N,U,T),F&&x(b,N,U,T),T!==null&&t.update(T,r.ELEMENT_ARRAY_BUFFER),(F||o)&&(o=!1,v(b,C,U,N),T!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(T).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,C,U){let N=U.wireframe===!0,T=n[b.id];T===void 0&&(T={},n[b.id]=T);let F=T[C.id];F===void 0&&(F={},T[C.id]=F);let k=F[N];return k===void 0&&(k=f(l()),F[N]=k),k}function f(b){let C=[],U=[],N=[];for(let T=0;T<e;T++)C[T]=0,U[T]=0,N[T]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:N,object:b,attributes:{},index:null}}function d(b,C,U,N){let T=s.attributes,F=C.attributes,k=0,X=U.getAttributes();for(let V in X)if(X[V].location>=0){let K=T[V],lt=F[V];if(lt===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(lt=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(lt=b.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function x(b,C,U,N){let T={},F=C.attributes,k=0,X=U.getAttributes();for(let V in X)if(X[V].location>=0){let K=F[V];K===void 0&&(V==="instanceMatrix"&&b.instanceMatrix&&(K=b.instanceMatrix),V==="instanceColor"&&b.instanceColor&&(K=b.instanceColor));let lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),T[V]=lt,k++}s.attributes=T,s.attributesNum=k,s.index=N}function p(){let b=s.newAttributes;for(let C=0,U=b.length;C<U;C++)b[C]=0}function m(b){g(b,0)}function g(b,C){let U=s.newAttributes,N=s.enabledAttributes,T=s.attributeDivisors;U[b]=1,N[b]===0&&(r.enableVertexAttribArray(b),N[b]=1),T[b]!==C&&(r.vertexAttribDivisor(b,C),T[b]=C)}function M(){let b=s.newAttributes,C=s.enabledAttributes;for(let U=0,N=C.length;U<N;U++)C[U]!==b[U]&&(r.disableVertexAttribArray(U),C[U]=0)}function _(b,C,U,N,T,F,k){k===!0?r.vertexAttribIPointer(b,C,U,T,F):r.vertexAttribPointer(b,C,U,N,T,F)}function v(b,C,U,N){p();let T=N.attributes,F=U.getAttributes(),k=C.defaultAttributeValues;for(let X in F){let V=F[X];if(V.location>=0){let q=T[X];if(q===void 0&&(X==="instanceMatrix"&&b.instanceMatrix&&(q=b.instanceMatrix),X==="instanceColor"&&b.instanceColor&&(q=b.instanceColor)),q!==void 0){let K=q.normalized,lt=q.itemSize,ut=t.get(q);if(ut===void 0)continue;let it=ut.buffer,O=ut.type,$=ut.bytesPerElement,at=O===r.INT||O===r.UNSIGNED_INT||q.gpuType===Dc;if(q.isInterleavedBufferAttribute){let st=q.data,pt=st.stride,Et=q.offset;if(st.isInstancedInterleavedBuffer){for(let Tt=0;Tt<V.locationSize;Tt++)g(V.location+Tt,st.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Tt=0;Tt<V.locationSize;Tt++)m(V.location+Tt);r.bindBuffer(r.ARRAY_BUFFER,it);for(let Tt=0;Tt<V.locationSize;Tt++)_(V.location+Tt,lt/V.locationSize,O,K,pt*$,(Et+lt/V.locationSize*Tt)*$,at)}else{if(q.isInstancedBufferAttribute){for(let st=0;st<V.locationSize;st++)g(V.location+st,q.meshPerAttribute);b.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let st=0;st<V.locationSize;st++)m(V.location+st);r.bindBuffer(r.ARRAY_BUFFER,it);for(let st=0;st<V.locationSize;st++)_(V.location+st,lt/V.locationSize,O,K,lt*$,lt/V.locationSize*st*$,at)}}else if(k!==void 0){let K=k[X];if(K!==void 0)switch(K.length){case 2:r.vertexAttrib2fv(V.location,K);break;case 3:r.vertexAttrib3fv(V.location,K);break;case 4:r.vertexAttrib4fv(V.location,K);break;default:r.vertexAttrib1fv(V.location,K)}}}}M()}function I(){R();for(let b in n){let C=n[b];for(let U in C){let N=C[U];for(let T in N)h(N[T].object),delete N[T];delete C[U]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let C=n[b.id];for(let U in C){let N=C[U];for(let T in N)h(N[T].object),delete N[T];delete C[U]}delete n[b.id]}function S(b){for(let C in n){let U=n[C];if(U[b.id]===void 0)continue;let N=U[b.id];for(let T in N)h(N[T].object),delete N[T];delete U[b.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:I,releaseStatesOfGeometry:w,releaseStatesOfProgram:S,initAttributes:p,enableAttribute:m,disableUnusedAttributes:M}}function R0(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let x=0;x<u;x++)d+=h[x];e.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)o(c[x],h[x],f[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let x=0;for(let p=0;p<u;p++)x+=h[p]*f[p];e.update(x,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function C0(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let S=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==bn&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let R=S===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(S!==ti&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==Ln&&!R)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),x=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=x>0,w=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:p,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:I,maxSamples:w}}function P0(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Kn,a=new Kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let x=u.clippingPlanes,p=u.clipIntersection,m=u.clipShadows,g=r.get(u);if(!i||x===null||x.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,_=M*4,v=g.clippingState||null;l.value=v,v=h(x,f,_,d);for(let I=0;I!==_;++I)v[I]=e[I];g.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,x){let p=u!==null?u.length:0,m=null;if(p!==0){if(m=l.value,x!==!0||m===null){let g=d+p*4,M=f.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let _=0,v=d;_!==p;++_,v+=4)o.copy(u[_]).applyMatrix4(M,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=p,t.numIntersection=0,m}}function I0(r){let t=new WeakMap;function e(o,a){return a===dl?o.mapping=Cs:a===pl&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===dl||a===pl)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new $l(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ks=class extends bo{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},bs=4,kh=[.125,.215,.35,.446,.526,.582],Hi=20,qa=new ks,Bh=new yt,Ya=null,$a=0,Za=0,Ja=!1,Fi=(1+Math.sqrt(5))/2,gs=1/Fi,Fh=[new L(-Fi,gs,0),new L(Fi,gs,0),new L(-gs,0,Fi),new L(gs,0,Fi),new L(0,Fi,-gs),new L(0,Fi,gs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)],Bs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Ya=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ya,$a,Za),this._renderer.xr.enabled=Ja,t.scissorTest=!1,Kr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Cs||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ya=this._renderer.getRenderTarget(),$a=this._renderer.getActiveCubeFace(),Za=this._renderer.getActiveMipmapLevel(),Ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:In,minFilter:In,generateMipmaps:!1,type:hn,format:bn,colorSpace:Ws,depthBuffer:!1},i=Oh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Oh(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L0(s)),this._blurMaterial=z0(s,t,e)}return i}_compileMaterial(t){let e=new Q(this._lodPlanes[0],t);this._renderer.compile(e,qa)}_sceneToCubeUV(t,e,n,i){let a=new ke(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Bh),h.toneMapping=vi,h.autoClear=!1;let d=new pe({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1}),x=new Q(new Dt,d),p=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,p=!0):(d.color.copy(Bh),p=!0);for(let g=0;g<6;g++){let M=g%3;M===0?(a.up.set(0,l[g],0),a.lookAt(c[g],0,0)):M===1?(a.up.set(0,0,l[g]),a.lookAt(0,c[g],0)):(a.up.set(0,l[g],0),a.lookAt(0,0,c[g]));let _=this._cubeSize;Kr(i,M*_,g>2?_:0,_,_),h.setRenderTarget(i),p&&h.render(x,a),h.render(t,a)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Cs||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hh());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Q(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Kr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,qa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Fh[(i-s-1)%Fh.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Q(this._lodPlanes[i],c),f=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Hi-1),p=s/x,m=isFinite(s)?1+Math.floor(h*p):Hi;m>Hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hi}`);let g=[],M=0;for(let S=0;S<Hi;++S){let R=S/p,y=Math.exp(-R*R/2);g.push(y),S===0?M+=y:S<m&&(M+=2*y)}for(let S=0;S<g.length;S++)g[S]=g[S]/M;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:_}=this;f.dTheta.value=x,f.mipInt.value=_-n;let v=this._sizeLods[i],I=3*v*(i>_-bs?i-_+bs:0),w=4*(this._cubeSize-v);Kr(e,I,w,3*v,2*v),l.setRenderTarget(e),l.render(u,qa)}};function L0(r){let t=[],e=[],n=[],i=r,s=r-bs+1+kh.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-bs?l=kh[o-r+bs-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,x=6,p=3,m=2,g=1,M=new Float32Array(p*x*d),_=new Float32Array(m*x*d),v=new Float32Array(g*x*d);for(let w=0;w<d;w++){let S=w%3*2/3-1,R=w>2?0:-1,y=[S,R,0,S+2/3,R,0,S+2/3,R+1,0,S,R,0,S+2/3,R+1,0,S,R+1,0];M.set(y,p*x*w),_.set(f,m*x*w);let b=[w,w,w,w,w,w];v.set(b,g*x*w)}let I=new se;I.setAttribute("position",new le(M,p)),I.setAttribute("uv",new le(_,m)),I.setAttribute("faceIndex",new le(v,g)),t.push(I),i>bs&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Oh(r,t,e){let n=new Ye(r,t,e);return n.texture.mapping=Ho,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Kr(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function z0(r,t,e){let n=new Float32Array(Hi),i=new L(0,1,0);return new xe({name:"SphericalGaussianBlur",defines:{n:Hi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Hh(){return new xe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vc(),fragmentShader:`

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
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vh(){return new xe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zn,depthTest:!1,depthWrite:!1})}function Vc(){return`

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
	`}function D0(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===dl||l===pl,h=l===Cs||l===Ps;if(c||h){let u=t.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(e===null&&(e=new Bs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function U0(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&cr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function N0(r,t,e,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let x in f.attributes)t.remove(f.attributes[x]);for(let x in f.morphAttributes){let p=f.morphAttributes[x];for(let m=0,g=p.length;m<g;m++)t.remove(p[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let x in f)t.update(f[x],r.ARRAY_BUFFER);let d=u.morphAttributes;for(let x in d){let p=d[x];for(let m=0,g=p.length;m<g;m++)t.update(p[m],r.ARRAY_BUFFER)}}function c(u){let f=[],d=u.index,x=u.attributes.position,p=0;if(d!==null){let M=d.array;p=d.version;for(let _=0,v=M.length;_<v;_+=3){let I=M[_+0],w=M[_+1],S=M[_+2];f.push(I,w,w,S,S,I)}}else if(x!==void 0){let M=x.array;p=x.version;for(let _=0,v=M.length/3-1;_<v;_+=3){let I=_+0,w=_+1,S=_+2;f.push(I,w,w,S,S,I)}}else return;let m=new(Uu(f)?Us:Ds)(f,1);m.version=p;let g=s.get(u);g&&t.remove(g),s.set(u,m)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function k0(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,x){x!==0&&(r.drawElementsInstanced(n,d,s,f*o,x),e.update(d,n,x))}function h(f,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,x);let m=0;for(let g=0;g<x;g++)m+=d[g];e.update(m,n,1)}function u(f,d,x,p){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],p[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,p,0,x);let g=0;for(let M=0;M<x;M++)g+=d[M]*p[M];e.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function B0(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function F0(r,t,e){let n=new WeakMap,i=new ye;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let y=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,x=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],_=0;d===!0&&(_=1),x===!0&&(_=2),p===!0&&(_=3);let v=a.attributes.position.count*_,I=1;v>t.maxTextureSize&&(I=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);let w=new Float32Array(v*I*4*u),S=new yo(w,v,I,u);S.type=Ln,S.needsUpdate=!0;let R=_*4;for(let b=0;b<u;b++){let C=m[b],U=g[b],N=M[b],T=v*I*4*b;for(let F=0;F<C.count;F++){let k=F*R;d===!0&&(i.fromBufferAttribute(C,F),w[T+k+0]=i.x,w[T+k+1]=i.y,w[T+k+2]=i.z,w[T+k+3]=0),x===!0&&(i.fromBufferAttribute(U,F),w[T+k+4]=i.x,w[T+k+5]=i.y,w[T+k+6]=i.z,w[T+k+7]=0),p===!0&&(i.fromBufferAttribute(N,F),w[T+k+8]=i.x,w[T+k+9]=i.y,w[T+k+10]=i.z,w[T+k+11]=N.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new j(v,I)},n.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let p=0;p<c.length;p++)d+=c[p];let x=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",x),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function O0(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Eo=class extends rn{constructor(t,e,n,i,s,o,a,l,c,h=Ss){if(h!==Ss&&h!==Ls)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ss&&(n=Wi),n===void 0&&h===Ls&&(n=Is),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:cn,this.minFilter=l!==void 0?l:cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Fu=new rn,Gh=new Eo(1,1),Ou=new yo,Hu=new ql,Vu=new wo,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),$h=new Float32Array(4);function qs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Wh[i];if(s===void 0&&(s=new Float32Array(i),Wh[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function Be(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Fe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Go(r,t){let e=Xh[t];e===void 0&&(e=new Int32Array(t),Xh[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function H0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function V0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2fv(this.addr,t),Fe(e,t)}}function G0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Be(e,t))return;r.uniform3fv(this.addr,t),Fe(e,t)}}function W0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4fv(this.addr,t),Fe(e,t)}}function X0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;$h.set(n),r.uniformMatrix2fv(this.addr,!1,$h),Fe(e,n)}}function q0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;Yh.set(n),r.uniformMatrix3fv(this.addr,!1,Yh),Fe(e,n)}}function Y0(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(Be(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Be(e,n))return;qh.set(n),r.uniformMatrix4fv(this.addr,!1,qh),Fe(e,n)}}function $0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function Z0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2iv(this.addr,t),Fe(e,t)}}function J0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3iv(this.addr,t),Fe(e,t)}}function K0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4iv(this.addr,t),Fe(e,t)}}function j0(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function Q0(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Be(e,t))return;r.uniform2uiv(this.addr,t),Fe(e,t)}}function tg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Be(e,t))return;r.uniform3uiv(this.addr,t),Fe(e,t)}}function eg(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Be(e,t))return;r.uniform4uiv(this.addr,t),Fe(e,t)}}function ng(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Gh.compareFunction=Du,s=Gh):s=Fu,e.setTexture2D(t||s,i)}function ig(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Hu,i)}function sg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Vu,i)}function rg(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Ou,i)}function og(r){switch(r){case 5126:return H0;case 35664:return V0;case 35665:return G0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return $0;case 35667:case 35671:return Z0;case 35668:case 35672:return J0;case 35669:case 35673:return K0;case 5125:return j0;case 36294:return Q0;case 36295:return tg;case 36296:return eg;case 35678:case 36198:case 36298:case 36306:case 35682:return ng;case 35679:case 36299:case 36307:return ig;case 35680:case 36300:case 36308:case 36293:return sg;case 36289:case 36303:case 36311:case 36292:return rg}}function ag(r,t){r.uniform1fv(this.addr,t)}function lg(r,t){let e=qs(t,this.size,2);r.uniform2fv(this.addr,e)}function cg(r,t){let e=qs(t,this.size,3);r.uniform3fv(this.addr,e)}function hg(r,t){let e=qs(t,this.size,4);r.uniform4fv(this.addr,e)}function ug(r,t){let e=qs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function fg(r,t){let e=qs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function dg(r,t){let e=qs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function pg(r,t){r.uniform1iv(this.addr,t)}function mg(r,t){r.uniform2iv(this.addr,t)}function gg(r,t){r.uniform3iv(this.addr,t)}function xg(r,t){r.uniform4iv(this.addr,t)}function vg(r,t){r.uniform1uiv(this.addr,t)}function yg(r,t){r.uniform2uiv(this.addr,t)}function _g(r,t){r.uniform3uiv(this.addr,t)}function Mg(r,t){r.uniform4uiv(this.addr,t)}function bg(r,t,e){let n=this.cache,i=t.length,s=Go(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Fu,s[o])}function wg(r,t,e){let n=this.cache,i=t.length,s=Go(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Hu,s[o])}function Eg(r,t,e){let n=this.cache,i=t.length,s=Go(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Vu,s[o])}function Sg(r,t,e){let n=this.cache,i=t.length,s=Go(e,i);Be(n,s)||(r.uniform1iv(this.addr,s),Fe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Ou,s[o])}function Tg(r){switch(r){case 5126:return ag;case 35664:return lg;case 35665:return cg;case 35666:return hg;case 35674:return ug;case 35675:return fg;case 35676:return dg;case 5124:case 35670:return pg;case 35667:case 35671:return mg;case 35668:case 35672:return gg;case 35669:case 35673:return xg;case 5125:return vg;case 36294:return yg;case 36295:return _g;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Sg}}var Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=og(e.type)}},Jl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Tg(e.type)}},Kl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Ka=/(\w+)(\])?(\[|\.)?/g;function Zh(r,t){r.seq.push(t),r.map[t.id]=t}function Ag(r,t,e){let n=r.name,i=n.length;for(Ka.lastIndex=0;;){let s=Ka.exec(n),o=Ka.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zh(e,c===void 0?new Zl(a,r,t):new Jl(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Kl(a),Zh(e,u)),e=u}}}var As=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Ag(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Jh(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Rg=37297,Cg=0;function Pg(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Kh=new Kt;function Ig(r){oe._getMatrix(Kh,oe.workingColorSpace,r);let t=`mat3( ${Kh.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(r)){case Vo:return[t,"LinearTransferOETF"];case fe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function jh(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+Pg(r.getShaderSource(t),o)}else return i}function Lg(r,t){let e=Ig(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function zg(r,t){let e;switch(t){case Cc:e="Linear";break;case Pc:e="Reinhard";break;case Ic:e="Cineon";break;case Rr:e="ACESFilmic";break;case Lc:e="AgX";break;case zc:e="Neutral";break;case Jf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var jr=new L;function Dg(){oe.getLuminanceCoefficients(jr);let r=jr.x.toFixed(4),t=jr.y.toFixed(4),e=jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ug(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(hr).join(`
`)}function Ng(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function kg(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function hr(r){return r!==""}function Qh(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function tu(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Bg=/^[ \t]*#include +<([\w\d./]+)>/gm;function jl(r){return r.replace(Bg,Og)}var Fg=new Map;function Og(r,t){let e=Qt[t];if(e===void 0){let n=Fg.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jl(e)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eu(r){return r.replace(Hg,Vg)}function Vg(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function nu(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function Gg(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Rc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Jn&&(t="SHADOWMAP_TYPE_VSM"),t}function Wg(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Cs:case Ps:t="ENVMAP_TYPE_CUBE";break;case Ho:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xg(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ps:t="ENVMAP_MODE_REFRACTION";break}return t}function qg(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case bu:t="ENVMAP_BLENDING_MULTIPLY";break;case $f:t="ENVMAP_BLENDING_MIX";break;case Zf:t="ENVMAP_BLENDING_ADD";break}return t}function Yg(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function $g(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Gg(e),c=Wg(e),h=Xg(e),u=qg(e),f=Yg(e),d=Ug(e),x=Ng(s),p=i.createProgram(),m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(hr).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(hr).join(`
`),g.length>0&&(g+=`
`)):(m=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(hr).join(`
`),g=[nu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vi?"#define TONE_MAPPING":"",e.toneMapping!==vi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==vi?zg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Lg("linearToOutputTexel",e.outputColorSpace),Dg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(hr).join(`
`)),o=jl(o),o=Qh(o,e),o=tu(o,e),a=jl(a),a=Qh(a,e),a=tu(a,e),o=eu(o),a=eu(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===mh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===mh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let _=M+m+o,v=M+g+a,I=Jh(i,i.VERTEX_SHADER,_),w=Jh(i,i.FRAGMENT_SHADER,v);i.attachShader(p,I),i.attachShader(p,w),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function S(C){if(r.debug.checkShaderErrors){let U=i.getProgramInfoLog(p).trim(),N=i.getShaderInfoLog(I).trim(),T=i.getShaderInfoLog(w).trim(),F=!0,k=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(F=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,I,w);else{let X=jh(i,I,"vertex"),V=jh(i,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+X+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||T==="")&&(k=!1);k&&(C.diagnostics={runnable:F,programLog:U,vertexShader:{log:N,prefix:m},fragmentShader:{log:T,prefix:g}})}i.deleteShader(I),i.deleteShader(w),R=new As(i,p),y=kg(i,p)}let R;this.getUniforms=function(){return R===void 0&&S(this),R};let y;this.getAttributes=function(){return y===void 0&&S(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(p,Rg)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=I,this.fragmentShader=w,this}var Zg=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new tc(t),e.set(t,n)),n}},tc=class{constructor(t){this.id=Zg++,this.code=t,this.usedTimes=0}};function Jg(r,t,e,n,i,s,o){let a=new Mo,l=new Ql,c=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,b,C,U,N){let T=U.fog,F=N.geometry,k=y.isMeshStandardMaterial?U.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||k),V=X&&X.mapping===Ho?X.image.height:null,q=x[y.type];y.precision!==null&&(d=i.getMaxPrecision(y.precision),d!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",d,"instead."));let K=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,lt=K!==void 0?K.length:0,ut=0;F.morphAttributes.position!==void 0&&(ut=1),F.morphAttributes.normal!==void 0&&(ut=2),F.morphAttributes.color!==void 0&&(ut=3);let it,O,$,at;if(q){let ne=Pn[q];it=ne.vertexShader,O=ne.fragmentShader}else it=y.vertexShader,O=y.fragmentShader,l.update(y),$=l.getVertexShaderID(y),at=l.getFragmentShaderID(y);let st=r.getRenderTarget(),pt=r.state.buffers.depth.getReversed(),Et=N.isInstancedMesh===!0,Tt=N.isBatchedMesh===!0,Ht=!!y.map,nt=!!y.matcap,ft=!!X,D=!!y.aoMap,zt=!!y.lightMap,dt=!!y.bumpMap,Lt=!!y.normalMap,vt=!!y.displacementMap,Xt=!!y.emissiveMap,Ct=!!y.metalnessMap,z=!!y.roughnessMap,A=y.anisotropy>0,Y=y.clearcoat>0,rt=y.dispersion>0,ht=y.iridescence>0,ot=y.sheen>0,Ut=y.transmission>0,_t=A&&!!y.anisotropyMap,Pt=Y&&!!y.clearcoatMap,ie=Y&&!!y.clearcoatNormalMap,mt=Y&&!!y.clearcoatRoughnessMap,St=ht&&!!y.iridescenceMap,Gt=ht&&!!y.iridescenceThicknessMap,qt=ot&&!!y.sheenColorMap,At=ot&&!!y.sheenRoughnessMap,ee=!!y.specularMap,Zt=!!y.specularColorMap,ve=!!y.specularIntensityMap,H=Ut&&!!y.transmissionMap,Mt=Ut&&!!y.thicknessMap,E=!!y.gradientMap,B=!!y.alphaMap,tt=y.alphaTest>0,ct=!!y.alphaHash,et=!!y.extensions,Ft=vi;y.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ft=r.toneMapping);let me={shaderID:q,shaderType:y.type,shaderName:y.name,vertexShader:it,fragmentShader:O,defines:y.defines,customVertexShaderID:$,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:d,batching:Tt,batchingColor:Tt&&N._colorsTexture!==null,instancing:Et,instancingColor:Et&&N.instanceColor!==null,instancingMorph:Et&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Ws,alphaToCoverage:!!y.alphaToCoverage,map:Ht,matcap:nt,envMap:ft,envMapMode:ft&&X.mapping,envMapCubeUVHeight:V,aoMap:D,lightMap:zt,bumpMap:dt,normalMap:Lt,displacementMap:f&&vt,emissiveMap:Xt,normalMapObjectSpace:Lt&&y.normalMapType===td,normalMapTangentSpace:Lt&&y.normalMapType===zu,metalnessMap:Ct,roughnessMap:z,anisotropy:A,anisotropyMap:_t,clearcoat:Y,clearcoatMap:Pt,clearcoatNormalMap:ie,clearcoatRoughnessMap:mt,dispersion:rt,iridescence:ht,iridescenceMap:St,iridescenceThicknessMap:Gt,sheen:ot,sheenColorMap:qt,sheenRoughnessMap:At,specularMap:ee,specularColorMap:Zt,specularIntensityMap:ve,transmission:Ut,transmissionMap:H,thicknessMap:Mt,gradientMap:E,opaque:y.transparent===!1&&y.blending===Es&&y.alphaToCoverage===!1,alphaMap:B,alphaTest:tt,alphaHash:ct,combine:y.combine,mapUv:Ht&&p(y.map.channel),aoMapUv:D&&p(y.aoMap.channel),lightMapUv:zt&&p(y.lightMap.channel),bumpMapUv:dt&&p(y.bumpMap.channel),normalMapUv:Lt&&p(y.normalMap.channel),displacementMapUv:vt&&p(y.displacementMap.channel),emissiveMapUv:Xt&&p(y.emissiveMap.channel),metalnessMapUv:Ct&&p(y.metalnessMap.channel),roughnessMapUv:z&&p(y.roughnessMap.channel),anisotropyMapUv:_t&&p(y.anisotropyMap.channel),clearcoatMapUv:Pt&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:ie&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:mt&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:At&&p(y.sheenRoughnessMap.channel),specularMapUv:ee&&p(y.specularMap.channel),specularColorMapUv:Zt&&p(y.specularColorMap.channel),specularIntensityMapUv:ve&&p(y.specularIntensityMap.channel),transmissionMapUv:H&&p(y.transmissionMap.channel),thicknessMapUv:Mt&&p(y.thicknessMap.channel),alphaMapUv:B&&p(y.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Lt||A),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!F.attributes.uv&&(Ht||B),fog:!!T,useFog:y.fog===!0,fogExp2:!!T&&T.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:N.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:ut,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Ht&&y.map.isVideoTexture===!0&&oe.getTransfer(y.map.colorSpace)===fe,decodeVideoTextureEmissive:Xt&&y.emissiveMap.isVideoTexture===!0&&oe.getTransfer(y.emissiveMap.colorSpace)===fe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===we,flipSided:y.side===Ke,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:et&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(et&&y.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function g(y){let b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)b.push(C),b.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(M(b,y),_(b,y),b.push(r.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function _(y,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),y.push(a.mask)}function v(y){let b=x[y.type],C;if(b){let U=Pn[b];C=Nn.clone(U.uniforms)}else C=y.uniforms;return C}function I(y,b){let C;for(let U=0,N=h.length;U<N;U++){let T=h[U];if(T.cacheKey===b){C=T,++C.usedTimes;break}}return C===void 0&&(C=new $g(r,b,y,s),h.push(C)),C}function w(y){if(--y.usedTimes===0){let b=h.indexOf(y);h[b]=h[h.length-1],h.pop(),y.destroy()}}function S(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:I,releaseProgram:w,releaseShaderCache:S,programs:h,dispose:R}}function Kg(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function jg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function iu(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function su(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,f,d,x,p,m){let g=r[t];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},r[t]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=x,g.renderOrder=u.renderOrder,g.z=p,g.group=m),t++,g}function a(u,f,d,x,p,m){let g=o(u,f,d,x,p,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):e.push(g)}function l(u,f,d,x,p,m){let g=o(u,f,d,x,p,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):e.unshift(g)}function c(u,f){e.length>1&&e.sort(u||jg),n.length>1&&n.sort(f||iu),i.length>1&&i.sort(f||iu)}function h(){for(let u=t,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function Qg(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new su,r.set(n,[o])):i>=s.length?(o=new su,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function tx(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new yt};break;case"SpotLight":e={position:new L,direction:new L,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[t.id]=e,e}}}function ex(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var nx=0;function ix(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function sx(r){let t=new tx,e=ex(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,s=new te,o=new te;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let d=0,x=0,p=0,m=0,g=0,M=0,_=0,v=0,I=0,w=0,S=0;c.sort(ix);for(let y=0,b=c.length;y<b;y++){let C=c[y],U=C.color,N=C.intensity,T=C.distance,F=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*N,u+=U.g*N,f+=U.b*N;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],N);S++}else if(C.isDirectionalLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let X=C.shadow,V=e.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=F,n.directionalShadowMatrix[d]=C.shadow.matrix,M++}n.directional[d]=k,d++}else if(C.isSpotLight){let k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(U).multiplyScalar(N),k.distance=T,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[p]=k;let X=C.shadow;if(C.map&&(n.spotLightMap[I]=C.map,I++,X.updateMatrices(C),C.castShadow&&w++),n.spotLightMatrix[p]=X.matrix,C.castShadow){let V=e.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,n.spotShadow[p]=V,n.spotShadowMap[p]=F,v++}p++}else if(C.isRectAreaLight){let k=t.get(C);k.color.copy(U).multiplyScalar(N),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=k,m++}else if(C.isPointLight){let k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){let X=C.shadow,V=e.get(C);V.shadowIntensity=X.intensity,V.shadowBias=X.bias,V.shadowNormalBias=X.normalBias,V.shadowRadius=X.radius,V.shadowMapSize=X.mapSize,V.shadowCameraNear=X.camera.near,V.shadowCameraFar=X.camera.far,n.pointShadow[x]=V,n.pointShadowMap[x]=F,n.pointShadowMatrix[x]=C.shadow.matrix,_++}n.point[x]=k,x++}else if(C.isHemisphereLight){let k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(N),k.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[g]=k,g++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==x||R.spotLength!==p||R.rectAreaLength!==m||R.hemiLength!==g||R.numDirectionalShadows!==M||R.numPointShadows!==_||R.numSpotShadows!==v||R.numSpotMaps!==I||R.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=m,n.point.length=x,n.hemi.length=g,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=_,n.pointShadowMap.length=_,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=_,n.spotLightMatrix.length=v+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=S,R.directionalLength=d,R.pointLength=x,R.spotLength=p,R.rectAreaLength=m,R.hemiLength=g,R.numDirectionalShadows=M,R.numPointShadows=_,R.numSpotShadows=v,R.numSpotMaps=I,R.numLightProbes=S,n.version=nx++)}function l(c,h){let u=0,f=0,d=0,x=0,p=0,m=h.matrixWorldInverse;for(let g=0,M=c.length;g<M;g++){let _=c[g];if(_.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),i.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),d++}else if(_.isRectAreaLight){let v=n.rectArea[x];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),x++}else if(_.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),f++}else if(_.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),p++}}}return{setup:a,setupView:l,state:n}}function ru(r){let t=new sx(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function rx(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new ru(r),t.set(i,[a])):s>=o.length?(a=new ru(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ec=class extends ni{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},nc=class extends ni{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},ox=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ax=`uniform sampler2D shadow_pass;
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
}`;function lx(r,t,e){let n=new vr,i=new j,s=new j,o=new ye,a=new ec({depthPacking:Qf}),l=new nc,c={},h=e.maxTextureSize,u={[_i]:Ke,[Ke]:_i,[we]:we},f=new xe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:ox,fragmentShader:ax}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let x=new se;x.setAttribute("position",new le(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Q(x,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mu;let g=this.type;this.render=function(w,S,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;let y=r.getRenderTarget(),b=r.getActiveCubeFace(),C=r.getActiveMipmapLevel(),U=r.state;U.setBlending(zn),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let N=g!==Jn&&this.type===Jn,T=g===Jn&&this.type!==Jn;for(let F=0,k=w.length;F<k;F++){let X=w[F],V=X.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;i.copy(V.mapSize);let q=V.getFrameExtents();if(i.multiply(q),s.copy(V.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/q.x),i.x=s.x*q.x,V.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/q.y),i.y=s.y*q.y,V.mapSize.y=s.y)),V.map===null||N===!0||T===!0){let lt=this.type!==Jn?{minFilter:cn,magFilter:cn}:{};V.map!==null&&V.map.dispose(),V.map=new Ye(i.x,i.y,lt),V.map.texture.name=X.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();let K=V.getViewportCount();for(let lt=0;lt<K;lt++){let ut=V.getViewport(lt);o.set(s.x*ut.x,s.y*ut.y,s.x*ut.z,s.y*ut.w),U.viewport(o),V.updateMatrices(X,lt),n=V.getFrustum(),v(S,R,V.camera,X,this.type)}V.isPointLightShadow!==!0&&this.type===Jn&&M(V,R),V.needsUpdate=!1}g=this.type,m.needsUpdate=!1,r.setRenderTarget(y,b,C)};function M(w,S){let R=t.update(p);f.defines.VSM_SAMPLES!==w.blurSamples&&(f.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ye(i.x,i.y)),f.uniforms.shadow_pass.value=w.map.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(S,null,R,f,p,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(S,null,R,d,p,null)}function _(w,S,R,y){let b=null,C=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(C!==void 0)b=C;else if(b=R.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let U=b.uuid,N=S.uuid,T=c[U];T===void 0&&(T={},c[U]=T);let F=T[N];F===void 0&&(F=b.clone(),T[N]=F,S.addEventListener("dispose",I)),b=F}if(b.visible=S.visible,b.wireframe=S.wireframe,y===Jn?b.side=S.shadowSide!==null?S.shadowSide:S.side:b.side=S.shadowSide!==null?S.shadowSide:u[S.side],b.alphaMap=S.alphaMap,b.alphaTest=S.alphaTest,b.map=S.map,b.clipShadows=S.clipShadows,b.clippingPlanes=S.clippingPlanes,b.clipIntersection=S.clipIntersection,b.displacementMap=S.displacementMap,b.displacementScale=S.displacementScale,b.displacementBias=S.displacementBias,b.wireframeLinewidth=S.wireframeLinewidth,b.linewidth=S.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let U=r.properties.get(b);U.light=R}return b}function v(w,S,R,y,b){if(w.visible===!1)return;if(w.layers.test(S.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===Jn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);let N=t.update(w),T=w.material;if(Array.isArray(T)){let F=N.groups;for(let k=0,X=F.length;k<X;k++){let V=F[k],q=T[V.materialIndex];if(q&&q.visible){let K=_(w,q,y,b);w.onBeforeShadow(r,w,S,R,N,K,V),r.renderBufferDirect(R,null,N,K,w,V),w.onAfterShadow(r,w,S,R,N,K,V)}}}else if(T.visible){let F=_(w,T,y,b);w.onBeforeShadow(r,w,S,R,N,F,null),r.renderBufferDirect(R,null,N,F,w,null),w.onAfterShadow(r,w,S,R,N,F,null)}}let U=w.children;for(let N=0,T=U.length;N<T;N++)v(U[N],S,R,y,b)}function I(w){w.target.removeEventListener("dispose",I);for(let R in c){let y=c[R],b=w.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}var cx={[ol]:al,[ll]:ul,[cl]:fl,[Rs]:hl,[al]:ol,[ul]:ll,[fl]:cl,[hl]:Rs};function hx(r,t){function e(){let H=!1,Mt=new ye,E=null,B=new ye(0,0,0,0);return{setMask:function(tt){E!==tt&&!H&&(r.colorMask(tt,tt,tt,tt),E=tt)},setLocked:function(tt){H=tt},setClear:function(tt,ct,et,Ft,me){me===!0&&(tt*=Ft,ct*=Ft,et*=Ft),Mt.set(tt,ct,et,Ft),B.equals(Mt)===!1&&(r.clearColor(tt,ct,et,Ft),B.copy(Mt))},reset:function(){H=!1,E=null,B.set(-1,0,0,0)}}}function n(){let H=!1,Mt=!1,E=null,B=null,tt=null;return{setReversed:function(ct){if(Mt!==ct){let et=t.get("EXT_clip_control");Mt?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT);let Ft=tt;tt=null,this.setClear(Ft)}Mt=ct},getReversed:function(){return Mt},setTest:function(ct){ct?st(r.DEPTH_TEST):pt(r.DEPTH_TEST)},setMask:function(ct){E!==ct&&!H&&(r.depthMask(ct),E=ct)},setFunc:function(ct){if(Mt&&(ct=cx[ct]),B!==ct){switch(ct){case ol:r.depthFunc(r.NEVER);break;case al:r.depthFunc(r.ALWAYS);break;case ll:r.depthFunc(r.LESS);break;case Rs:r.depthFunc(r.LEQUAL);break;case cl:r.depthFunc(r.EQUAL);break;case hl:r.depthFunc(r.GEQUAL);break;case ul:r.depthFunc(r.GREATER);break;case fl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}B=ct}},setLocked:function(ct){H=ct},setClear:function(ct){tt!==ct&&(Mt&&(ct=1-ct),r.clearDepth(ct),tt=ct)},reset:function(){H=!1,E=null,B=null,tt=null,Mt=!1}}}function i(){let H=!1,Mt=null,E=null,B=null,tt=null,ct=null,et=null,Ft=null,me=null;return{setTest:function(ne){H||(ne?st(r.STENCIL_TEST):pt(r.STENCIL_TEST))},setMask:function(ne){Mt!==ne&&!H&&(r.stencilMask(ne),Mt=ne)},setFunc:function(ne,He,Ie){(E!==ne||B!==He||tt!==Ie)&&(r.stencilFunc(ne,He,Ie),E=ne,B=He,tt=Ie)},setOp:function(ne,He,Ie){(ct!==ne||et!==He||Ft!==Ie)&&(r.stencilOp(ne,He,Ie),ct=ne,et=He,Ft=Ie)},setLocked:function(ne){H=ne},setClear:function(ne){me!==ne&&(r.clearStencil(ne),me=ne)},reset:function(){H=!1,Mt=null,E=null,B=null,tt=null,ct=null,et=null,Ft=null,me=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],x=null,p=!1,m=null,g=null,M=null,_=null,v=null,I=null,w=null,S=new yt(0,0,0),R=0,y=!1,b=null,C=null,U=null,N=null,T=null,F=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,X=0,V=r.getParameter(r.VERSION);V.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=X>=1):V.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=X>=2);let q=null,K={},lt=r.getParameter(r.SCISSOR_BOX),ut=r.getParameter(r.VIEWPORT),it=new ye().fromArray(lt),O=new ye().fromArray(ut);function $(H,Mt,E,B){let tt=new Uint8Array(4),ct=r.createTexture();r.bindTexture(H,ct),r.texParameteri(H,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(H,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let et=0;et<E;et++)H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?r.texImage3D(Mt,0,r.RGBA,1,1,B,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(Mt+et,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return ct}let at={};at[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(r.DEPTH_TEST),o.setFunc(Rs),dt(!1),Lt(lh),st(r.CULL_FACE),D(zn);function st(H){h[H]!==!0&&(r.enable(H),h[H]=!0)}function pt(H){h[H]!==!1&&(r.disable(H),h[H]=!1)}function Et(H,Mt){return u[H]!==Mt?(r.bindFramebuffer(H,Mt),u[H]=Mt,H===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=Mt),H===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Tt(H,Mt){let E=d,B=!1;if(H){E=f.get(Mt),E===void 0&&(E=[],f.set(Mt,E));let tt=H.textures;if(E.length!==tt.length||E[0]!==r.COLOR_ATTACHMENT0){for(let ct=0,et=tt.length;ct<et;ct++)E[ct]=r.COLOR_ATTACHMENT0+ct;E.length=tt.length,B=!0}}else E[0]!==r.BACK&&(E[0]=r.BACK,B=!0);B&&r.drawBuffers(E)}function Ht(H){return x!==H?(r.useProgram(H),x=H,!0):!1}let nt={[Oi]:r.FUNC_ADD,[If]:r.FUNC_SUBTRACT,[Lf]:r.FUNC_REVERSE_SUBTRACT};nt[zf]=r.MIN,nt[Df]=r.MAX;let ft={[Uf]:r.ZERO,[Nf]:r.ONE,[kf]:r.SRC_COLOR,[sl]:r.SRC_ALPHA,[Gf]:r.SRC_ALPHA_SATURATE,[Hf]:r.DST_COLOR,[Ff]:r.DST_ALPHA,[Bf]:r.ONE_MINUS_SRC_COLOR,[rl]:r.ONE_MINUS_SRC_ALPHA,[Vf]:r.ONE_MINUS_DST_COLOR,[Of]:r.ONE_MINUS_DST_ALPHA,[Wf]:r.CONSTANT_COLOR,[Xf]:r.ONE_MINUS_CONSTANT_COLOR,[qf]:r.CONSTANT_ALPHA,[Yf]:r.ONE_MINUS_CONSTANT_ALPHA};function D(H,Mt,E,B,tt,ct,et,Ft,me,ne){if(H===zn){p===!0&&(pt(r.BLEND),p=!1);return}if(p===!1&&(st(r.BLEND),p=!0),H!==Pf){if(H!==m||ne!==y){if((g!==Oi||v!==Oi)&&(r.blendEquation(r.FUNC_ADD),g=Oi,v=Oi),ne)switch(H){case Es:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.ONE,r.ONE);break;case ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case Es:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case qe:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case ch:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case hh:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}M=null,_=null,I=null,w=null,S.set(0,0,0),R=0,m=H,y=ne}return}tt=tt||Mt,ct=ct||E,et=et||B,(Mt!==g||tt!==v)&&(r.blendEquationSeparate(nt[Mt],nt[tt]),g=Mt,v=tt),(E!==M||B!==_||ct!==I||et!==w)&&(r.blendFuncSeparate(ft[E],ft[B],ft[ct],ft[et]),M=E,_=B,I=ct,w=et),(Ft.equals(S)===!1||me!==R)&&(r.blendColor(Ft.r,Ft.g,Ft.b,me),S.copy(Ft),R=me),m=H,y=!1}function zt(H,Mt){H.side===we?pt(r.CULL_FACE):st(r.CULL_FACE);let E=H.side===Ke;Mt&&(E=!E),dt(E),H.blending===Es&&H.transparent===!1?D(zn):D(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),o.setFunc(H.depthFunc),o.setTest(H.depthTest),o.setMask(H.depthWrite),s.setMask(H.colorWrite);let B=H.stencilWrite;a.setTest(B),B&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Xt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):pt(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){b!==H&&(H?r.frontFace(r.CW):r.frontFace(r.CCW),b=H)}function Lt(H){H!==Rf?(st(r.CULL_FACE),H!==C&&(H===lh?r.cullFace(r.BACK):H===Cf?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):pt(r.CULL_FACE),C=H}function vt(H){H!==U&&(k&&r.lineWidth(H),U=H)}function Xt(H,Mt,E){H?(st(r.POLYGON_OFFSET_FILL),(N!==Mt||T!==E)&&(r.polygonOffset(Mt,E),N=Mt,T=E)):pt(r.POLYGON_OFFSET_FILL)}function Ct(H){H?st(r.SCISSOR_TEST):pt(r.SCISSOR_TEST)}function z(H){H===void 0&&(H=r.TEXTURE0+F-1),q!==H&&(r.activeTexture(H),q=H)}function A(H,Mt,E){E===void 0&&(q===null?E=r.TEXTURE0+F-1:E=q);let B=K[E];B===void 0&&(B={type:void 0,texture:void 0},K[E]=B),(B.type!==H||B.texture!==Mt)&&(q!==E&&(r.activeTexture(E),q=E),r.bindTexture(H,Mt||at[H]),B.type=H,B.texture=Mt)}function Y(){let H=K[q];H!==void 0&&H.type!==void 0&&(r.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function rt(){try{r.compressedTexImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ht(){try{r.compressedTexImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ot(){try{r.texSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ut(){try{r.texSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function _t(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{r.texStorage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function mt(){try{r.texStorage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function St(){try{r.texImage2D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Gt(){try{r.texImage3D.apply(r,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function qt(H){it.equals(H)===!1&&(r.scissor(H.x,H.y,H.z,H.w),it.copy(H))}function At(H){O.equals(H)===!1&&(r.viewport(H.x,H.y,H.z,H.w),O.copy(H))}function ee(H,Mt){let E=c.get(Mt);E===void 0&&(E=new WeakMap,c.set(Mt,E));let B=E.get(H);B===void 0&&(B=r.getUniformBlockIndex(Mt,H.name),E.set(H,B))}function Zt(H,Mt){let B=c.get(Mt).get(H);l.get(Mt)!==B&&(r.uniformBlockBinding(Mt,B,H.__bindingPointIndex),l.set(Mt,B))}function ve(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},q=null,K={},u={},f=new WeakMap,d=[],x=null,p=!1,m=null,g=null,M=null,_=null,v=null,I=null,w=null,S=new yt(0,0,0),R=0,y=!1,b=null,C=null,U=null,N=null,T=null,it.set(0,0,r.canvas.width,r.canvas.height),O.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:st,disable:pt,bindFramebuffer:Et,drawBuffers:Tt,useProgram:Ht,setBlending:D,setMaterial:zt,setFlipSided:dt,setCullFace:Lt,setLineWidth:vt,setPolygonOffset:Xt,setScissorTest:Ct,activeTexture:z,bindTexture:A,unbindTexture:Y,compressedTexImage2D:rt,compressedTexImage3D:ht,texImage2D:St,texImage3D:Gt,updateUBOMapping:ee,uniformBlockBinding:Zt,texStorage2D:ie,texStorage3D:mt,texSubImage2D:ot,texSubImage3D:Ut,compressedTexSubImage2D:_t,compressedTexSubImage3D:Pt,scissor:qt,viewport:At,reset:ve}}function ou(r,t,e,n){let i=ux(n);switch(e){case Au:return r*t;case Cu:return r*t;case Pu:return r*t*2;case kc:return r*t/i.components*i.byteLength;case Bc:return r*t/i.components*i.byteLength;case Iu:return r*t*2/i.components*i.byteLength;case Fc:return r*t*2/i.components*i.byteLength;case Ru:return r*t*3/i.components*i.byteLength;case bn:return r*t*4/i.components*i.byteLength;case Oc:return r*t*4/i.components*i.byteLength;case co:case ho:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case uo:case fo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case xl:case yl:return Math.max(r,16)*Math.max(t,8)/4;case gl:case vl:return Math.max(r,8)*Math.max(t,8)/2;case _l:case Ml:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case bl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case wl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case El:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Sl:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Al:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Rl:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Cl:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Pl:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Il:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ll:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case zl:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Dl:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Ul:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Nl:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case po:case kl:case Bl:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Lu:case Fl:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ol:case Hl:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ux(r){switch(r){case ti:case Eu:return{byteLength:1,components:1};case xr:case Su:case hn:return{byteLength:2,components:1};case Uc:case Nc:return{byteLength:2,components:4};case Wi:case Dc:case Ln:return{byteLength:4,components:1};case Tu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function fx(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(z,A){return d?new OffscreenCanvas(z,A):xo("canvas")}function p(z,A,Y){let rt=1,ht=Ct(z);if((ht.width>Y||ht.height>Y)&&(rt=Y/Math.max(ht.width,ht.height)),rt<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){let ot=Math.floor(rt*ht.width),Ut=Math.floor(rt*ht.height);u===void 0&&(u=x(ot,Ut));let _t=A?x(ot,Ut):u;return _t.width=ot,_t.height=Ut,_t.getContext("2d").drawImage(z,0,0,ot,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ht.width+"x"+ht.height+") to ("+ot+"x"+Ut+")."),_t}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ht.width+"x"+ht.height+")."),z;return z}function m(z){return z.generateMipmaps}function g(z){r.generateMipmap(z)}function M(z){return z.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?r.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function _(z,A,Y,rt,ht=!1){if(z!==null){if(r[z]!==void 0)return r[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let ot=A;if(A===r.RED&&(Y===r.FLOAT&&(ot=r.R32F),Y===r.HALF_FLOAT&&(ot=r.R16F),Y===r.UNSIGNED_BYTE&&(ot=r.R8)),A===r.RED_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.R8UI),Y===r.UNSIGNED_SHORT&&(ot=r.R16UI),Y===r.UNSIGNED_INT&&(ot=r.R32UI),Y===r.BYTE&&(ot=r.R8I),Y===r.SHORT&&(ot=r.R16I),Y===r.INT&&(ot=r.R32I)),A===r.RG&&(Y===r.FLOAT&&(ot=r.RG32F),Y===r.HALF_FLOAT&&(ot=r.RG16F),Y===r.UNSIGNED_BYTE&&(ot=r.RG8)),A===r.RG_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RG8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RG16UI),Y===r.UNSIGNED_INT&&(ot=r.RG32UI),Y===r.BYTE&&(ot=r.RG8I),Y===r.SHORT&&(ot=r.RG16I),Y===r.INT&&(ot=r.RG32I)),A===r.RGB_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGB8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGB16UI),Y===r.UNSIGNED_INT&&(ot=r.RGB32UI),Y===r.BYTE&&(ot=r.RGB8I),Y===r.SHORT&&(ot=r.RGB16I),Y===r.INT&&(ot=r.RGB32I)),A===r.RGBA_INTEGER&&(Y===r.UNSIGNED_BYTE&&(ot=r.RGBA8UI),Y===r.UNSIGNED_SHORT&&(ot=r.RGBA16UI),Y===r.UNSIGNED_INT&&(ot=r.RGBA32UI),Y===r.BYTE&&(ot=r.RGBA8I),Y===r.SHORT&&(ot=r.RGBA16I),Y===r.INT&&(ot=r.RGBA32I)),A===r.RGB&&Y===r.UNSIGNED_INT_5_9_9_9_REV&&(ot=r.RGB9_E5),A===r.RGBA){let Ut=ht?Vo:oe.getTransfer(rt);Y===r.FLOAT&&(ot=r.RGBA32F),Y===r.HALF_FLOAT&&(ot=r.RGBA16F),Y===r.UNSIGNED_BYTE&&(ot=Ut===fe?r.SRGB8_ALPHA8:r.RGBA8),Y===r.UNSIGNED_SHORT_4_4_4_4&&(ot=r.RGBA4),Y===r.UNSIGNED_SHORT_5_5_5_1&&(ot=r.RGB5_A1)}return(ot===r.R16F||ot===r.R32F||ot===r.RG16F||ot===r.RG32F||ot===r.RGBA16F||ot===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(z,A){let Y;return z?A===null||A===Wi||A===Is?Y=r.DEPTH24_STENCIL8:A===Ln?Y=r.DEPTH32F_STENCIL8:A===xr&&(Y=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Wi||A===Is?Y=r.DEPTH_COMPONENT24:A===Ln?Y=r.DEPTH_COMPONENT32F:A===xr&&(Y=r.DEPTH_COMPONENT16),Y}function I(z,A){return m(z)===!0||z.isFramebufferTexture&&z.minFilter!==cn&&z.minFilter!==In?Math.log2(Math.max(A.width,A.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?A.mipmaps.length:1}function w(z){let A=z.target;A.removeEventListener("dispose",w),R(A),A.isVideoTexture&&h.delete(A)}function S(z){let A=z.target;A.removeEventListener("dispose",S),b(A)}function R(z){let A=n.get(z);if(A.__webglInit===void 0)return;let Y=z.source,rt=f.get(Y);if(rt){let ht=rt[A.__cacheKey];ht.usedTimes--,ht.usedTimes===0&&y(z),Object.keys(rt).length===0&&f.delete(Y)}n.remove(z)}function y(z){let A=n.get(z);r.deleteTexture(A.__webglTexture);let Y=z.source,rt=f.get(Y);delete rt[A.__cacheKey],o.memory.textures--}function b(z){let A=n.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),n.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(A.__webglFramebuffer[rt]))for(let ht=0;ht<A.__webglFramebuffer[rt].length;ht++)r.deleteFramebuffer(A.__webglFramebuffer[rt][ht]);else r.deleteFramebuffer(A.__webglFramebuffer[rt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[rt])}else{if(Array.isArray(A.__webglFramebuffer))for(let rt=0;rt<A.__webglFramebuffer.length;rt++)r.deleteFramebuffer(A.__webglFramebuffer[rt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let rt=0;rt<A.__webglColorRenderbuffer.length;rt++)A.__webglColorRenderbuffer[rt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[rt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}let Y=z.textures;for(let rt=0,ht=Y.length;rt<ht;rt++){let ot=n.get(Y[rt]);ot.__webglTexture&&(r.deleteTexture(ot.__webglTexture),o.memory.textures--),n.remove(Y[rt])}n.remove(z)}let C=0;function U(){C=0}function N(){let z=C;return z>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+i.maxTextures),C+=1,z}function T(z){let A=[];return A.push(z.wrapS),A.push(z.wrapT),A.push(z.wrapR||0),A.push(z.magFilter),A.push(z.minFilter),A.push(z.anisotropy),A.push(z.internalFormat),A.push(z.format),A.push(z.type),A.push(z.generateMipmaps),A.push(z.premultiplyAlpha),A.push(z.flipY),A.push(z.unpackAlignment),A.push(z.colorSpace),A.join()}function F(z,A){let Y=n.get(z);if(z.isVideoTexture&&vt(z),z.isRenderTargetTexture===!1&&z.version>0&&Y.__version!==z.version){let rt=z.image;if(rt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(rt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{O(Y,z,A);return}}e.bindTexture(r.TEXTURE_2D,Y.__webglTexture,r.TEXTURE0+A)}function k(z,A){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){O(Y,z,A);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Y.__webglTexture,r.TEXTURE0+A)}function X(z,A){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){O(Y,z,A);return}e.bindTexture(r.TEXTURE_3D,Y.__webglTexture,r.TEXTURE0+A)}function V(z,A){let Y=n.get(z);if(z.version>0&&Y.__version!==z.version){$(Y,z,A);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Y.__webglTexture,r.TEXTURE0+A)}let q={[gr]:r.REPEAT,[Vi]:r.CLAMP_TO_EDGE,[ml]:r.MIRRORED_REPEAT},K={[cn]:r.NEAREST,[Kf]:r.NEAREST_MIPMAP_NEAREST,[Lr]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[Ea]:r.LINEAR_MIPMAP_NEAREST,[Gi]:r.LINEAR_MIPMAP_LINEAR},lt={[ed]:r.NEVER,[ad]:r.ALWAYS,[nd]:r.LESS,[Du]:r.LEQUAL,[id]:r.EQUAL,[od]:r.GEQUAL,[sd]:r.GREATER,[rd]:r.NOTEQUAL};function ut(z,A){if(A.type===Ln&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===In||A.magFilter===Ea||A.magFilter===Lr||A.magFilter===Gi||A.minFilter===In||A.minFilter===Ea||A.minFilter===Lr||A.minFilter===Gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(z,r.TEXTURE_WRAP_S,q[A.wrapS]),r.texParameteri(z,r.TEXTURE_WRAP_T,q[A.wrapT]),(z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY)&&r.texParameteri(z,r.TEXTURE_WRAP_R,q[A.wrapR]),r.texParameteri(z,r.TEXTURE_MAG_FILTER,K[A.magFilter]),r.texParameteri(z,r.TEXTURE_MIN_FILTER,K[A.minFilter]),A.compareFunction&&(r.texParameteri(z,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(z,r.TEXTURE_COMPARE_FUNC,lt[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===cn||A.minFilter!==Lr&&A.minFilter!==Gi||A.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){let Y=t.get("EXT_texture_filter_anisotropic");r.texParameterf(z,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function it(z,A){let Y=!1;z.__webglInit===void 0&&(z.__webglInit=!0,A.addEventListener("dispose",w));let rt=A.source,ht=f.get(rt);ht===void 0&&(ht={},f.set(rt,ht));let ot=T(A);if(ot!==z.__cacheKey){ht[ot]===void 0&&(ht[ot]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),ht[ot].usedTimes++;let Ut=ht[z.__cacheKey];Ut!==void 0&&(ht[z.__cacheKey].usedTimes--,Ut.usedTimes===0&&y(A)),z.__cacheKey=ot,z.__webglTexture=ht[ot].texture}return Y}function O(z,A,Y){let rt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(rt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(rt=r.TEXTURE_3D);let ht=it(z,A),ot=A.source;e.bindTexture(rt,z.__webglTexture,r.TEXTURE0+Y);let Ut=n.get(ot);if(ot.version!==Ut.__version||ht===!0){e.activeTexture(r.TEXTURE0+Y);let _t=oe.getPrimaries(oe.workingColorSpace),Pt=A.colorSpace===gi?null:oe.getPrimaries(A.colorSpace),ie=A.colorSpace===gi||_t===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let mt=p(A.image,!1,i.maxTextureSize);mt=Xt(A,mt);let St=s.convert(A.format,A.colorSpace),Gt=s.convert(A.type),qt=_(A.internalFormat,St,Gt,A.colorSpace,A.isVideoTexture);ut(rt,A);let At,ee=A.mipmaps,Zt=A.isVideoTexture!==!0,ve=Ut.__version===void 0||ht===!0,H=ot.dataReady,Mt=I(A,mt);if(A.isDepthTexture)qt=v(A.format===Ls,A.type),ve&&(Zt?e.texStorage2D(r.TEXTURE_2D,1,qt,mt.width,mt.height):e.texImage2D(r.TEXTURE_2D,0,qt,mt.width,mt.height,0,St,Gt,null));else if(A.isDataTexture)if(ee.length>0){Zt&&ve&&e.texStorage2D(r.TEXTURE_2D,Mt,qt,ee[0].width,ee[0].height);for(let E=0,B=ee.length;E<B;E++)At=ee[E],Zt?H&&e.texSubImage2D(r.TEXTURE_2D,E,0,0,At.width,At.height,St,Gt,At.data):e.texImage2D(r.TEXTURE_2D,E,qt,At.width,At.height,0,St,Gt,At.data);A.generateMipmaps=!1}else Zt?(ve&&e.texStorage2D(r.TEXTURE_2D,Mt,qt,mt.width,mt.height),H&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,mt.width,mt.height,St,Gt,mt.data)):e.texImage2D(r.TEXTURE_2D,0,qt,mt.width,mt.height,0,St,Gt,mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){Zt&&ve&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,qt,ee[0].width,ee[0].height,mt.depth);for(let E=0,B=ee.length;E<B;E++)if(At=ee[E],A.format!==bn)if(St!==null)if(Zt){if(H)if(A.layerUpdates.size>0){let tt=ou(At.width,At.height,A.format,A.type);for(let ct of A.layerUpdates){let et=At.data.subarray(ct*tt/At.data.BYTES_PER_ELEMENT,(ct+1)*tt/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,E,0,0,ct,At.width,At.height,1,St,et)}A.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,E,0,0,0,At.width,At.height,mt.depth,St,At.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,E,qt,At.width,At.height,mt.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Zt?H&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,E,0,0,0,At.width,At.height,mt.depth,St,Gt,At.data):e.texImage3D(r.TEXTURE_2D_ARRAY,E,qt,At.width,At.height,mt.depth,0,St,Gt,At.data)}else{Zt&&ve&&e.texStorage2D(r.TEXTURE_2D,Mt,qt,ee[0].width,ee[0].height);for(let E=0,B=ee.length;E<B;E++)At=ee[E],A.format!==bn?St!==null?Zt?H&&e.compressedTexSubImage2D(r.TEXTURE_2D,E,0,0,At.width,At.height,St,At.data):e.compressedTexImage2D(r.TEXTURE_2D,E,qt,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Zt?H&&e.texSubImage2D(r.TEXTURE_2D,E,0,0,At.width,At.height,St,Gt,At.data):e.texImage2D(r.TEXTURE_2D,E,qt,At.width,At.height,0,St,Gt,At.data)}else if(A.isDataArrayTexture)if(Zt){if(ve&&e.texStorage3D(r.TEXTURE_2D_ARRAY,Mt,qt,mt.width,mt.height,mt.depth),H)if(A.layerUpdates.size>0){let E=ou(mt.width,mt.height,A.format,A.type);for(let B of A.layerUpdates){let tt=mt.data.subarray(B*E/mt.data.BYTES_PER_ELEMENT,(B+1)*E/mt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,B,mt.width,mt.height,1,St,Gt,tt)}A.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,mt.width,mt.height,mt.depth,St,Gt,mt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,qt,mt.width,mt.height,mt.depth,0,St,Gt,mt.data);else if(A.isData3DTexture)Zt?(ve&&e.texStorage3D(r.TEXTURE_3D,Mt,qt,mt.width,mt.height,mt.depth),H&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,mt.width,mt.height,mt.depth,St,Gt,mt.data)):e.texImage3D(r.TEXTURE_3D,0,qt,mt.width,mt.height,mt.depth,0,St,Gt,mt.data);else if(A.isFramebufferTexture){if(ve)if(Zt)e.texStorage2D(r.TEXTURE_2D,Mt,qt,mt.width,mt.height);else{let E=mt.width,B=mt.height;for(let tt=0;tt<Mt;tt++)e.texImage2D(r.TEXTURE_2D,tt,qt,E,B,0,St,Gt,null),E>>=1,B>>=1}}else if(ee.length>0){if(Zt&&ve){let E=Ct(ee[0]);e.texStorage2D(r.TEXTURE_2D,Mt,qt,E.width,E.height)}for(let E=0,B=ee.length;E<B;E++)At=ee[E],Zt?H&&e.texSubImage2D(r.TEXTURE_2D,E,0,0,St,Gt,At):e.texImage2D(r.TEXTURE_2D,E,qt,St,Gt,At);A.generateMipmaps=!1}else if(Zt){if(ve){let E=Ct(mt);e.texStorage2D(r.TEXTURE_2D,Mt,qt,E.width,E.height)}H&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,St,Gt,mt)}else e.texImage2D(r.TEXTURE_2D,0,qt,St,Gt,mt);m(A)&&g(rt),Ut.__version=ot.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function $(z,A,Y){if(A.image.length!==6)return;let rt=it(z,A),ht=A.source;e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+Y);let ot=n.get(ht);if(ht.version!==ot.__version||rt===!0){e.activeTexture(r.TEXTURE0+Y);let Ut=oe.getPrimaries(oe.workingColorSpace),_t=A.colorSpace===gi?null:oe.getPrimaries(A.colorSpace),Pt=A.colorSpace===gi||Ut===_t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let ie=A.isCompressedTexture||A.image[0].isCompressedTexture,mt=A.image[0]&&A.image[0].isDataTexture,St=[];for(let B=0;B<6;B++)!ie&&!mt?St[B]=p(A.image[B],!0,i.maxCubemapSize):St[B]=mt?A.image[B].image:A.image[B],St[B]=Xt(A,St[B]);let Gt=St[0],qt=s.convert(A.format,A.colorSpace),At=s.convert(A.type),ee=_(A.internalFormat,qt,At,A.colorSpace),Zt=A.isVideoTexture!==!0,ve=ot.__version===void 0||rt===!0,H=ht.dataReady,Mt=I(A,Gt);ut(r.TEXTURE_CUBE_MAP,A);let E;if(ie){Zt&&ve&&e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,ee,Gt.width,Gt.height);for(let B=0;B<6;B++){E=St[B].mipmaps;for(let tt=0;tt<E.length;tt++){let ct=E[tt];A.format!==bn?qt!==null?Zt?H&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt,0,0,ct.width,ct.height,qt,ct.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt,ee,ct.width,ct.height,0,ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Zt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt,0,0,ct.width,ct.height,qt,At,ct.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt,ee,ct.width,ct.height,0,qt,At,ct.data)}}}else{if(E=A.mipmaps,Zt&&ve){E.length>0&&Mt++;let B=Ct(St[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,Mt,ee,B.width,B.height)}for(let B=0;B<6;B++)if(mt){Zt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,St[B].width,St[B].height,qt,At,St[B].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ee,St[B].width,St[B].height,0,qt,At,St[B].data);for(let tt=0;tt<E.length;tt++){let et=E[tt].image[B].image;Zt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt+1,0,0,et.width,et.height,qt,At,et.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt+1,ee,et.width,et.height,0,qt,At,et.data)}}else{Zt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,0,0,qt,At,St[B]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,0,ee,qt,At,St[B]);for(let tt=0;tt<E.length;tt++){let ct=E[tt];Zt?H&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt+1,0,0,qt,At,ct.image[B]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+B,tt+1,ee,qt,At,ct.image[B])}}}m(A)&&g(r.TEXTURE_CUBE_MAP),ot.__version=ht.version,A.onUpdate&&A.onUpdate(A)}z.__version=A.version}function at(z,A,Y,rt,ht,ot){let Ut=s.convert(Y.format,Y.colorSpace),_t=s.convert(Y.type),Pt=_(Y.internalFormat,Ut,_t,Y.colorSpace),ie=n.get(A),mt=n.get(Y);if(mt.__renderTarget=A,!ie.__hasExternalTextures){let St=Math.max(1,A.width>>ot),Gt=Math.max(1,A.height>>ot);ht===r.TEXTURE_3D||ht===r.TEXTURE_2D_ARRAY?e.texImage3D(ht,ot,Pt,St,Gt,A.depth,0,Ut,_t,null):e.texImage2D(ht,ot,Pt,St,Gt,0,Ut,_t,null)}e.bindFramebuffer(r.FRAMEBUFFER,z),Lt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,rt,ht,mt.__webglTexture,0,dt(A)):(ht===r.TEXTURE_2D||ht>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ht<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,rt,ht,mt.__webglTexture,ot),e.bindFramebuffer(r.FRAMEBUFFER,null)}function st(z,A,Y){if(r.bindRenderbuffer(r.RENDERBUFFER,z),A.depthBuffer){let rt=A.depthTexture,ht=rt&&rt.isDepthTexture?rt.type:null,ot=v(A.stencilBuffer,ht),Ut=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,_t=dt(A);Lt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,_t,ot,A.width,A.height):Y?r.renderbufferStorageMultisample(r.RENDERBUFFER,_t,ot,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ot,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,z)}else{let rt=A.textures;for(let ht=0;ht<rt.length;ht++){let ot=rt[ht],Ut=s.convert(ot.format,ot.colorSpace),_t=s.convert(ot.type),Pt=_(ot.internalFormat,Ut,_t,ot.colorSpace),ie=dt(A);Y&&Lt(A)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ie,Pt,A.width,A.height):Lt(A)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ie,Pt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,Pt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pt(z,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,z),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let rt=n.get(A.depthTexture);rt.__renderTarget=A,(!rt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),F(A.depthTexture,0);let ht=rt.__webglTexture,ot=dt(A);if(A.depthTexture.format===Ss)Lt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ht,0);else if(A.depthTexture.format===Ls)Lt(A)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0,ot):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ht,0);else throw new Error("Unknown depthTexture format")}function Et(z){let A=n.get(z),Y=z.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==z.depthTexture){let rt=z.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),rt){let ht=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,rt.removeEventListener("dispose",ht)};rt.addEventListener("dispose",ht),A.__depthDisposeCallback=ht}A.__boundDepthTexture=rt}if(z.depthTexture&&!A.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");pt(A.__webglFramebuffer,z)}else if(Y){A.__webglDepthbuffer=[];for(let rt=0;rt<6;rt++)if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[rt]),A.__webglDepthbuffer[rt]===void 0)A.__webglDepthbuffer[rt]=r.createRenderbuffer(),st(A.__webglDepthbuffer[rt],z,!1);else{let ht=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ot=A.__webglDepthbuffer[rt];r.bindRenderbuffer(r.RENDERBUFFER,ot),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),st(A.__webglDepthbuffer,z,!1);else{let rt=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ht),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,ht)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function Tt(z,A,Y){let rt=n.get(z);A!==void 0&&at(rt.__webglFramebuffer,z,z.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Y!==void 0&&Et(z)}function Ht(z){let A=z.texture,Y=n.get(z),rt=n.get(A);z.addEventListener("dispose",S);let ht=z.textures,ot=z.isWebGLCubeRenderTarget===!0,Ut=ht.length>1;if(Ut||(rt.__webglTexture===void 0&&(rt.__webglTexture=r.createTexture()),rt.__version=A.version,o.memory.textures++),ot){Y.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer[_t]=[];for(let Pt=0;Pt<A.mipmaps.length;Pt++)Y.__webglFramebuffer[_t][Pt]=r.createFramebuffer()}else Y.__webglFramebuffer[_t]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _t=0;_t<A.mipmaps.length;_t++)Y.__webglFramebuffer[_t]=r.createFramebuffer()}else Y.__webglFramebuffer=r.createFramebuffer();if(Ut)for(let _t=0,Pt=ht.length;_t<Pt;_t++){let ie=n.get(ht[_t]);ie.__webglTexture===void 0&&(ie.__webglTexture=r.createTexture(),o.memory.textures++)}if(z.samples>0&&Lt(z)===!1){Y.__webglMultisampledFramebuffer=r.createFramebuffer(),Y.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let _t=0;_t<ht.length;_t++){let Pt=ht[_t];Y.__webglColorRenderbuffer[_t]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Y.__webglColorRenderbuffer[_t]);let ie=s.convert(Pt.format,Pt.colorSpace),mt=s.convert(Pt.type),St=_(Pt.internalFormat,ie,mt,Pt.colorSpace,z.isXRRenderTarget===!0),Gt=dt(z);r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,St,z.width,z.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+_t,r.RENDERBUFFER,Y.__webglColorRenderbuffer[_t])}r.bindRenderbuffer(r.RENDERBUFFER,null),z.depthBuffer&&(Y.__webglDepthRenderbuffer=r.createRenderbuffer(),st(Y.__webglDepthRenderbuffer,z,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ot){e.bindTexture(r.TEXTURE_CUBE_MAP,rt.__webglTexture),ut(r.TEXTURE_CUBE_MAP,A);for(let _t=0;_t<6;_t++)if(A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)at(Y.__webglFramebuffer[_t][Pt],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Pt);else at(Y.__webglFramebuffer[_t],z,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);m(A)&&g(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let _t=0,Pt=ht.length;_t<Pt;_t++){let ie=ht[_t],mt=n.get(ie);e.bindTexture(r.TEXTURE_2D,mt.__webglTexture),ut(r.TEXTURE_2D,ie),at(Y.__webglFramebuffer,z,ie,r.COLOR_ATTACHMENT0+_t,r.TEXTURE_2D,0),m(ie)&&g(r.TEXTURE_2D)}e.unbindTexture()}else{let _t=r.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(_t=z.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(_t,rt.__webglTexture),ut(_t,A),A.mipmaps&&A.mipmaps.length>0)for(let Pt=0;Pt<A.mipmaps.length;Pt++)at(Y.__webglFramebuffer[Pt],z,A,r.COLOR_ATTACHMENT0,_t,Pt);else at(Y.__webglFramebuffer,z,A,r.COLOR_ATTACHMENT0,_t,0);m(A)&&g(_t),e.unbindTexture()}z.depthBuffer&&Et(z)}function nt(z){let A=z.textures;for(let Y=0,rt=A.length;Y<rt;Y++){let ht=A[Y];if(m(ht)){let ot=M(z),Ut=n.get(ht).__webglTexture;e.bindTexture(ot,Ut),g(ot),e.unbindTexture()}}}let ft=[],D=[];function zt(z){if(z.samples>0){if(Lt(z)===!1){let A=z.textures,Y=z.width,rt=z.height,ht=r.COLOR_BUFFER_BIT,ot=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ut=n.get(z),_t=A.length>1;if(_t)for(let Pt=0;Pt<A.length;Pt++)e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Pt=0;Pt<A.length;Pt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(ht|=r.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(ht|=r.STENCIL_BUFFER_BIT)),_t){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let ie=n.get(A[Pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ie,0)}r.blitFramebuffer(0,0,Y,rt,0,0,Y,rt,ht,r.NEAREST),l===!0&&(ft.length=0,D.length=0,ft.push(r.COLOR_ATTACHMENT0+Pt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(ft.push(ot),D.push(ot),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,ft))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),_t)for(let Pt=0;Pt<A.length;Pt++){e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,Ut.__webglColorRenderbuffer[Pt]);let ie=n.get(A[Pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.TEXTURE_2D,ie,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&l){let A=z.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function dt(z){return Math.min(i.maxSamples,z.samples)}function Lt(z){let A=n.get(z);return z.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function vt(z){let A=o.render.frame;h.get(z)!==A&&(h.set(z,A),z.update())}function Xt(z,A){let Y=z.colorSpace,rt=z.format,ht=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||Y!==Ws&&Y!==gi&&(oe.getTransfer(Y)===fe?(rt!==bn||ht!==ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),A}function Ct(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(c.width=z.naturalWidth||z.width,c.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(c.width=z.displayWidth,c.height=z.displayHeight):(c.width=z.width,c.height=z.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=F,this.setTexture2DArray=k,this.setTexture3D=X,this.setTextureCube=V,this.rebindTextures=Tt,this.setupRenderTarget=Ht,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Lt}function dx(r,t){function e(n,i=gi){let s,o=oe.getTransfer(i);if(n===ti)return r.UNSIGNED_BYTE;if(n===Uc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Nc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Tu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return r.BYTE;if(n===Su)return r.SHORT;if(n===xr)return r.UNSIGNED_SHORT;if(n===Dc)return r.INT;if(n===Wi)return r.UNSIGNED_INT;if(n===Ln)return r.FLOAT;if(n===hn)return r.HALF_FLOAT;if(n===Au)return r.ALPHA;if(n===Ru)return r.RGB;if(n===bn)return r.RGBA;if(n===Cu)return r.LUMINANCE;if(n===Pu)return r.LUMINANCE_ALPHA;if(n===Ss)return r.DEPTH_COMPONENT;if(n===Ls)return r.DEPTH_STENCIL;if(n===kc)return r.RED;if(n===Bc)return r.RED_INTEGER;if(n===Iu)return r.RG;if(n===Fc)return r.RG_INTEGER;if(n===Oc)return r.RGBA_INTEGER;if(n===co||n===ho||n===uo||n===fo)if(o===fe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===co)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===co)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ho)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===uo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===gl||n===xl||n===vl||n===yl)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===gl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===vl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_l||n===Ml||n===bl)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===_l||n===Ml)return o===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===bl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===wl||n===El||n===Sl||n===Tl||n===Al||n===Rl||n===Cl||n===Pl||n===Il||n===Ll||n===zl||n===Dl||n===Ul||n===Nl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===wl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===El)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Sl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Tl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Al)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Rl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Cl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Pl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Il)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ll)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Dl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ul)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Nl)return o===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===po||n===kl||n===Bl)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===po)return o===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===kl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Bl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Lu||n===Fl||n===Ol||n===Hl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===po)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Hl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Is?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var ic=class extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Yt=class extends Le{constructor(){super(),this.isGroup=!0,this.type="Group"}},px={type:"move"},dr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let p of t.hand.values()){let m=e.getJointPose(p,n),g=this._getHandJoint(c,p);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,x=.005;c.inputState.pinching&&f>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(px)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Yt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},mx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gx=`
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

}`,sc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new rn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new xe({vertexShader:mx,fragmentShader:gx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Q(new Ee(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},rc=class extends Mi{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,x=null,p=new sc,m=e.getContextAttributes(),g=null,M=null,_=[],v=[],I=new j,w=null,S=new ke;S.viewport=new ye;let R=new ke;R.viewport=new ye;let y=[S,R],b=new ic,C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=_[O];return $===void 0&&($=new dr,_[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=_[O];return $===void 0&&($=new dr,_[O]=$),$.getGripSpace()},this.getHand=function(O){let $=_[O];return $===void 0&&($=new dr,_[O]=$),$.getHandSpace()};function N(O){let $=v.indexOf(O.inputSource);if($===-1)return;let at=_[$];at!==void 0&&(at.update(O.inputSource,O.frame,c||o),at.dispatchEvent({type:O.type,data:O.inputSource}))}function T(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",T),i.removeEventListener("inputsourceschange",F);for(let O=0;O<_.length;O++){let $=v[O];$!==null&&(v[O]=null,_[O].disconnect($))}C=null,U=null,p.reset(),t.setRenderTarget(g),d=null,f=null,u=null,i=null,M=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return x},this.getSession=function(){return i},this.setSession=async function(O){if(i=O,i!==null){if(g=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",T),i.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(I),i.renderState.layers===void 0){let $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Ye(d.framebufferWidth,d.framebufferHeight,{format:bn,type:ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,at=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?Ls:Ss,at=m.stencil?Is:Wi);let pt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:s};u=new XRWebGLBinding(i,e),f=u.createProjectionLayer(pt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new Ye(f.textureWidth,f.textureHeight,{format:bn,type:ti,depthTexture:new Eo(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function F(O){for(let $=0;$<O.removed.length;$++){let at=O.removed[$],st=v.indexOf(at);st>=0&&(v[st]=null,_[st].disconnect(at))}for(let $=0;$<O.added.length;$++){let at=O.added[$],st=v.indexOf(at);if(st===-1){for(let Et=0;Et<_.length;Et++)if(Et>=v.length){v.push(at),st=Et;break}else if(v[Et]===null){v[Et]=at,st=Et;break}if(st===-1)break}let pt=_[st];pt&&pt.connect(at)}}let k=new L,X=new L;function V(O,$,at){k.setFromMatrixPosition($.matrixWorld),X.setFromMatrixPosition(at.matrixWorld);let st=k.distanceTo(X),pt=$.projectionMatrix.elements,Et=at.projectionMatrix.elements,Tt=pt[14]/(pt[10]-1),Ht=pt[14]/(pt[10]+1),nt=(pt[9]+1)/pt[5],ft=(pt[9]-1)/pt[5],D=(pt[8]-1)/pt[0],zt=(Et[8]+1)/Et[0],dt=Tt*D,Lt=Tt*zt,vt=st/(-D+zt),Xt=vt*-D;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Xt),O.translateZ(vt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),pt[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{let Ct=Tt+vt,z=Ht+vt,A=dt-Xt,Y=Lt+(st-Xt),rt=nt*Ht/z*Ct,ht=ft*Ht/z*Ct;O.projectionMatrix.makePerspective(A,Y,rt,ht,Ct,z),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function q(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(i===null)return;let $=O.near,at=O.far;p.texture!==null&&(p.depthNear>0&&($=p.depthNear),p.depthFar>0&&(at=p.depthFar)),b.near=R.near=S.near=$,b.far=R.far=S.far=at,(C!==b.near||U!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),C=b.near,U=b.far),S.layers.mask=O.layers.mask|2,R.layers.mask=O.layers.mask|4,b.layers.mask=S.layers.mask|R.layers.mask;let st=O.parent,pt=b.cameras;q(b,st);for(let Et=0;Et<pt.length;Et++)q(pt[Et],st);pt.length===2?V(b,S,R):b.projectionMatrix.copy(S.projectionMatrix),K(O,b,st)};function K(O,$,at){at===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(at.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=zs*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(b)};let lt=null;function ut(O,$){if(h=$.getViewerPose(c||o),x=$,h!==null){let at=h.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let st=!1;at.length!==b.cameras.length&&(b.cameras.length=0,st=!0);for(let Et=0;Et<at.length;Et++){let Tt=at[Et],Ht=null;if(d!==null)Ht=d.getViewport(Tt);else{let ft=u.getViewSubImage(f,Tt);Ht=ft.viewport,Et===0&&(t.setRenderTargetTextures(M,ft.colorTexture,f.ignoreDepthValues?void 0:ft.depthStencilTexture),t.setRenderTarget(M))}let nt=y[Et];nt===void 0&&(nt=new ke,nt.layers.enable(Et),nt.viewport=new ye,y[Et]=nt),nt.matrix.fromArray(Tt.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Tt.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Ht.x,Ht.y,Ht.width,Ht.height),Et===0&&(b.matrix.copy(nt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),st===!0&&b.cameras.push(nt)}let pt=i.enabledFeatures;if(pt&&pt.includes("depth-sensing")){let Et=u.getDepthInformation(at[0]);Et&&Et.isValid&&Et.texture&&p.init(t,Et,i.renderState)}}for(let at=0;at<_.length;at++){let st=v[at],pt=_[at];st!==null&&pt!==void 0&&pt.update(st,$,c||o)}lt&&lt(O,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),x=null}let it=new Bu;it.setAnimationLoop(ut),this.setAnimationLoop=function(O){lt=O},this.dispose=function(){}}},Bi=new Ge,xx=new te;function vx(r,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,ku(r)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,M,_,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(m,g):g.isMeshToonMaterial?(s(m,g),u(m,g)):g.isMeshPhongMaterial?(s(m,g),h(m,g)):g.isMeshStandardMaterial?(s(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,v)):g.isMeshMatcapMaterial?(s(m,g),x(m,g)):g.isMeshDepthMaterial?s(m,g):g.isMeshDistanceMaterial?(s(m,g),p(m,g)):g.isMeshNormalMaterial?s(m,g):g.isLineBasicMaterial?(o(m,g),g.isLineDashedMaterial&&a(m,g)):g.isPointsMaterial?l(m,g,M,_):g.isSpriteMaterial?c(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Ke&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Ke&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);let M=t.get(g),_=M.envMap,v=M.envMapRotation;_&&(m.envMap.value=_,Bi.copy(v),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),m.envMapRotation.value.setFromMatrix4(xx.makeRotationFromEuler(Bi)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function o(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function a(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function l(m,g,M,_){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=_*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function c(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function u(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,g){g.matcap&&(m.matcap.value=g.matcap)}function p(m,g){let M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function yx(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let v=_.program;n.uniformBlockBinding(M,v)}function c(M,_){let v=i[M.id];v===void 0&&(x(M),v=h(M),i[M.id]=v,M.addEventListener("dispose",m));let I=_.program;n.updateUBOMapping(M,I);let w=t.render.frame;s[M.id]!==w&&(f(M),s[M.id]=w)}function h(M){let _=u();M.__bindingPointIndex=_;let v=r.createBuffer(),I=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,I,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,_,v),v}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(M){let _=i[M.id],v=M.uniforms,I=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,_);for(let w=0,S=v.length;w<S;w++){let R=Array.isArray(v[w])?v[w]:[v[w]];for(let y=0,b=R.length;y<b;y++){let C=R[y];if(d(C,w,y,I)===!0){let U=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],T=0;for(let F=0;F<N.length;F++){let k=N[F],X=p(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,U+T,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,T),T+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,U,C.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(M,_,v,I){let w=M.value,S=_+"_"+v;if(I[S]===void 0)return typeof w=="number"||typeof w=="boolean"?I[S]=w:I[S]=w.clone(),!0;{let R=I[S];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return I[S]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function x(M){let _=M.uniforms,v=0,I=16;for(let S=0,R=_.length;S<R;S++){let y=Array.isArray(_[S])?_[S]:[_[S]];for(let b=0,C=y.length;b<C;b++){let U=y[b],N=Array.isArray(U.value)?U.value:[U.value];for(let T=0,F=N.length;T<F;T++){let k=N[T],X=p(k),V=v%I,q=V%X.boundary,K=V+q;v+=q,K!==0&&I-K<X.storage&&(v+=I-K),U.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=X.storage}}}let w=v%I;return w>0&&(v+=I-w),M.__size=v,M.__cache={},this}function p(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let v=o.indexOf(_.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[_.id]),delete i[_.id],delete s[_.id]}function g(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}var So=class{constructor(t={}){let{canvas:e=Ed(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;let x=new Uint32Array(4),p=new Int32Array(4),m=null,g=null,M=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=de,this.toneMapping=vi,this.toneMappingExposure=1;let v=this,I=!1,w=0,S=0,R=null,y=-1,b=null,C=new ye,U=new ye,N=null,T=new yt(0),F=0,k=e.width,X=e.height,V=1,q=null,K=null,lt=new ye(0,0,k,X),ut=new ye(0,0,k,X),it=!1,O=new vr,$=!1,at=!1,st=new te,pt=new te,Et=new L,Tt=new ye,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},nt=!1;function ft(){return R===null?V:1}let D=n;function zt(P,G){return e.getContext(P,G)}try{let P={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ac}`),e.addEventListener("webglcontextlost",B,!1),e.addEventListener("webglcontextrestored",tt,!1),e.addEventListener("webglcontextcreationerror",ct,!1),D===null){let G="webgl2";if(D=zt(G,P),D===null)throw zt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let dt,Lt,vt,Xt,Ct,z,A,Y,rt,ht,ot,Ut,_t,Pt,ie,mt,St,Gt,qt,At,ee,Zt,ve,H;function Mt(){dt=new U0(D),dt.init(),Zt=new dx(D,dt),Lt=new C0(D,dt,t,Zt),vt=new hx(D,dt),Lt.reverseDepthBuffer&&f&&vt.buffers.depth.setReversed(!0),Xt=new B0(D),Ct=new Kg,z=new fx(D,dt,vt,Ct,Lt,Zt,Xt),A=new I0(v),Y=new D0(v),rt=new Xd(D),ve=new A0(D,rt),ht=new N0(D,rt,Xt,ve),ot=new O0(D,ht,rt,Xt),qt=new F0(D,Lt,z),mt=new P0(Ct),Ut=new Jg(v,A,Y,dt,Lt,ve,mt),_t=new vx(v,Ct),Pt=new Qg,ie=new rx(dt),Gt=new T0(v,A,Y,vt,ot,d,l),St=new lx(v,ot,Lt),H=new yx(D,Xt,Lt,vt),At=new R0(D,dt,Xt),ee=new k0(D,dt,Xt),Xt.programs=Ut.programs,v.capabilities=Lt,v.extensions=dt,v.properties=Ct,v.renderLists=Pt,v.shadowMap=St,v.state=vt,v.info=Xt}Mt();let E=new rc(v,D);this.xr=E,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let P=dt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=dt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(P){P!==void 0&&(V=P,this.setSize(k,X,!1))},this.getSize=function(P){return P.set(k,X)},this.setSize=function(P,G,Z=!0){if(E.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=P,X=G,e.width=Math.floor(P*V),e.height=Math.floor(G*V),Z===!0&&(e.style.width=P+"px",e.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(k*V,X*V).floor()},this.setDrawingBufferSize=function(P,G,Z){k=P,X=G,V=Z,e.width=Math.floor(P*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(C)},this.getViewport=function(P){return P.copy(lt)},this.setViewport=function(P,G,Z,J){P.isVector4?lt.set(P.x,P.y,P.z,P.w):lt.set(P,G,Z,J),vt.viewport(C.copy(lt).multiplyScalar(V).round())},this.getScissor=function(P){return P.copy(ut)},this.setScissor=function(P,G,Z,J){P.isVector4?ut.set(P.x,P.y,P.z,P.w):ut.set(P,G,Z,J),vt.scissor(U.copy(ut).multiplyScalar(V).round())},this.getScissorTest=function(){return it},this.setScissorTest=function(P){vt.setScissorTest(it=P)},this.setOpaqueSort=function(P){q=P},this.setTransparentSort=function(P){K=P},this.getClearColor=function(P){return P.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(P=!0,G=!0,Z=!0){let J=0;if(P){let W=!1;if(R!==null){let gt=R.texture.format;W=gt===Oc||gt===Fc||gt===Bc}if(W){let gt=R.texture.type,Rt=gt===ti||gt===Wi||gt===xr||gt===Is||gt===Uc||gt===Nc,Nt=Gt.getClearColor(),kt=Gt.getClearAlpha(),$t=Nt.r,Jt=Nt.g,Bt=Nt.b;Rt?(x[0]=$t,x[1]=Jt,x[2]=Bt,x[3]=kt,D.clearBufferuiv(D.COLOR,0,x)):(p[0]=$t,p[1]=Jt,p[2]=Bt,p[3]=kt,D.clearBufferiv(D.COLOR,0,p))}else J|=D.COLOR_BUFFER_BIT}G&&(J|=D.DEPTH_BUFFER_BIT),Z&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",B,!1),e.removeEventListener("webglcontextrestored",tt,!1),e.removeEventListener("webglcontextcreationerror",ct,!1),Pt.dispose(),ie.dispose(),Ct.dispose(),A.dispose(),Y.dispose(),ot.dispose(),ve.dispose(),H.dispose(),Ut.dispose(),E.dispose(),E.removeEventListener("sessionstart",oi),E.removeEventListener("sessionend",ai),Hn.stop()};function B(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function tt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;let P=Xt.autoReset,G=St.enabled,Z=St.autoUpdate,J=St.needsUpdate,W=St.type;Mt(),Xt.autoReset=P,St.enabled=G,St.autoUpdate=Z,St.needsUpdate=J,St.type=W}function ct(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function et(P){let G=P.target;G.removeEventListener("dispose",et),Ft(G)}function Ft(P){me(P),Ct.remove(P)}function me(P){let G=Ct.get(P).programs;G!==void 0&&(G.forEach(function(Z){Ut.releaseProgram(Z)}),P.isShaderMaterial&&Ut.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,Z,J,W,gt){G===null&&(G=Ht);let Rt=W.isMesh&&W.matrixWorld.determinant()<0,Nt=Gn(P,G,Z,J,W);vt.setMaterial(J,Rt);let kt=Z.index,$t=1;if(J.wireframe===!0){if(kt=ht.getWireframeAttribute(Z),kt===void 0)return;$t=2}let Jt=Z.drawRange,Bt=Z.attributes.position,ce=Jt.start*$t,_e=(Jt.start+Jt.count)*$t;gt!==null&&(ce=Math.max(ce,gt.start*$t),_e=Math.min(_e,(gt.start+gt.count)*$t)),kt!==null?(ce=Math.max(ce,0),_e=Math.min(_e,kt.count)):Bt!=null&&(ce=Math.max(ce,0),_e=Math.min(_e,Bt.count));let Me=_e-ce;if(Me<0||Me===1/0)return;ve.setup(W,J,Nt,Z,kt);let sn,he=At;if(kt!==null&&(sn=rt.get(kt),he=ee,he.setIndex(sn)),W.isMesh)J.wireframe===!0?(vt.setLineWidth(J.wireframeLinewidth*ft()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if(W.isLine){let Ot=J.linewidth;Ot===void 0&&(Ot=1),vt.setLineWidth(Ot*ft()),W.isLineSegments?he.setMode(D.LINES):W.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else W.isPoints?he.setMode(D.POINTS):W.isSprite&&he.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)he.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))he.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Ot=W._multiDrawStarts,Wn=W._multiDrawCounts,ue=W._multiDrawCount,xn=kt?rt.get(kt).bytesPerElement:1,ns=Ct.get(J).currentProgram.getUniforms();for(let on=0;on<ue;on++)ns.setValue(D,"_gl_DrawID",on),he.render(Ot[on]/xn,Wn[on])}else if(W.isInstancedMesh)he.renderInstances(ce,Me,W.count);else if(Z.isInstancedBufferGeometry){let Ot=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Wn=Math.min(Z.instanceCount,Ot);he.renderInstances(ce,Me,Wn)}else he.render(ce,Me)};function ne(P,G,Z){P.transparent===!0&&P.side===we&&P.forceSinglePass===!1?(P.side=Ke,P.needsUpdate=!0,gn(P,G,Z),P.side=_i,P.needsUpdate=!0,gn(P,G,Z),P.side=we):gn(P,G,Z)}this.compile=function(P,G,Z=null){Z===null&&(Z=P),g=ie.get(Z),g.init(G),_.push(g),Z.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),P!==Z&&P.traverseVisible(function(W){W.isLight&&W.layers.test(G.layers)&&(g.pushLight(W),W.castShadow&&g.pushShadow(W))}),g.setupLights();let J=new Set;return P.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let gt=W.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){let Nt=gt[Rt];ne(Nt,Z,W),J.add(Nt)}else ne(gt,Z,W),J.add(gt)}),_.pop(),g=null,J},this.compileAsync=function(P,G,Z=null){let J=this.compile(P,G,Z);return new Promise(W=>{function gt(){if(J.forEach(function(Rt){Ct.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){W(P);return}setTimeout(gt,10)}dt.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let He=null;function Ie(P){He&&He(P)}function oi(){Hn.stop()}function ai(){Hn.start()}let Hn=new Bu;Hn.setAnimationLoop(Ie),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(P){He=P,E.setAnimationLoop(P),P===null?Hn.stop():Hn.start()},E.addEventListener("sessionstart",oi),E.addEventListener("sessionend",ai),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),E.enabled===!0&&E.isPresenting===!0&&(E.cameraAutoUpdate===!0&&E.updateCamera(G),G=E.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,G,R),g=ie.get(P,_.length),g.init(G),_.push(g),pt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O.setFromProjectionMatrix(pt),at=this.localClippingEnabled,$=mt.init(this.clippingPlanes,at),m=Pt.get(P,M.length),m.init(),M.push(m),E.enabled===!0&&E.isPresenting===!0){let gt=v.xr.getDepthSensingMesh();gt!==null&&Qi(gt,G,-1/0,v.sortObjects)}Qi(P,G,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(q,K),nt=E.enabled===!1||E.isPresenting===!1||E.hasDepthSensing()===!1,nt&&Gt.addToRenderList(m,P),this.info.render.frame++,$===!0&&mt.beginShadows();let Z=g.state.shadowsArray;St.render(Z,P,G),$===!0&&mt.endShadows(),this.info.autoReset===!0&&this.info.reset();let J=m.opaque,W=m.transmissive;if(g.setupLights(),G.isArrayCamera){let gt=G.cameras;if(W.length>0)for(let Rt=0,Nt=gt.length;Rt<Nt;Rt++){let kt=gt[Rt];ts(J,W,P,kt)}nt&&Gt.render(P);for(let Rt=0,Nt=gt.length;Rt<Nt;Rt++){let kt=gt[Rt];Vn(m,P,kt,kt.viewport)}}else W.length>0&&ts(J,W,P,G),nt&&Gt.render(P),Vn(m,P,G);R!==null&&(z.updateMultisampleRenderTarget(R),z.updateRenderTargetMipmap(R)),P.isScene===!0&&P.onAfterRender(v,P,G),ve.resetDefaultState(),y=-1,b=null,_.pop(),_.length>0?(g=_[_.length-1],$===!0&&mt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Qi(P,G,Z,J){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)Z=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)g.pushLight(P),P.castShadow&&g.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||O.intersectsSprite(P)){J&&Tt.setFromMatrixPosition(P.matrixWorld).applyMatrix4(pt);let Rt=ot.update(P),Nt=P.material;Nt.visible&&m.push(P,Rt,Nt,Z,Tt.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||O.intersectsObject(P))){let Rt=ot.update(P),Nt=P.material;if(J&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),Tt.copy(P.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Tt.copy(Rt.boundingSphere.center)),Tt.applyMatrix4(P.matrixWorld).applyMatrix4(pt)),Array.isArray(Nt)){let kt=Rt.groups;for(let $t=0,Jt=kt.length;$t<Jt;$t++){let Bt=kt[$t],ce=Nt[Bt.materialIndex];ce&&ce.visible&&m.push(P,Rt,ce,Z,Tt.z,Bt)}}else Nt.visible&&m.push(P,Rt,Nt,Z,Tt.z,null)}}let gt=P.children;for(let Rt=0,Nt=gt.length;Rt<Nt;Rt++)Qi(gt[Rt],G,Z,J)}function Vn(P,G,Z,J){let W=P.opaque,gt=P.transmissive,Rt=P.transparent;g.setupLightsView(Z),$===!0&&mt.setGlobalState(v.clippingPlanes,Z),J&&vt.viewport(C.copy(J)),W.length>0&&es(W,G,Z),gt.length>0&&es(gt,G,Z),Rt.length>0&&es(Rt,G,Z),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function ts(P,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[J.id]===void 0&&(g.state.transmissionRenderTarget[J.id]=new Ye(1,1,{generateMipmaps:!0,type:dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float")?hn:ti,minFilter:Gi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));let gt=g.state.transmissionRenderTarget[J.id],Rt=J.viewport||C;gt.setSize(Rt.z,Rt.w);let Nt=v.getRenderTarget();v.setRenderTarget(gt),v.getClearColor(T),F=v.getClearAlpha(),F<1&&v.setClearColor(16777215,.5),v.clear(),nt&&Gt.render(Z);let kt=v.toneMapping;v.toneMapping=vi;let $t=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),g.setupLightsView(J),$===!0&&mt.setGlobalState(v.clippingPlanes,J),es(P,Z,J),z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt),dt.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let Bt=0,ce=G.length;Bt<ce;Bt++){let _e=G[Bt],Me=_e.object,sn=_e.geometry,he=_e.material,Ot=_e.group;if(he.side===we&&Me.layers.test(J.layers)){let Wn=he.side;he.side=Ke,he.needsUpdate=!0,re(Me,Z,J,sn,he,Ot),he.side=Wn,he.needsUpdate=!0,Jt=!0}}Jt===!0&&(z.updateMultisampleRenderTarget(gt),z.updateRenderTargetMipmap(gt))}v.setRenderTarget(Nt),v.setClearColor(T,F),$t!==void 0&&(J.viewport=$t),v.toneMapping=kt}function es(P,G,Z){let J=G.isScene===!0?G.overrideMaterial:null;for(let W=0,gt=P.length;W<gt;W++){let Rt=P[W],Nt=Rt.object,kt=Rt.geometry,$t=J===null?Rt.material:J,Jt=Rt.group;Nt.layers.test(Z.layers)&&re(Nt,G,Z,kt,$t,Jt)}}function re(P,G,Z,J,W,gt){P.onBeforeRender(v,G,Z,J,W,gt),P.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),W.onBeforeRender(v,G,Z,J,P,gt),W.transparent===!0&&W.side===we&&W.forceSinglePass===!1?(W.side=Ke,W.needsUpdate=!0,v.renderBufferDirect(Z,G,J,W,P,gt),W.side=_i,W.needsUpdate=!0,v.renderBufferDirect(Z,G,J,W,P,gt),W.side=we):v.renderBufferDirect(Z,G,J,W,P,gt),P.onAfterRender(v,G,Z,J,W,gt)}function gn(P,G,Z){G.isScene!==!0&&(G=Ht);let J=Ct.get(P),W=g.state.lights,gt=g.state.shadowsArray,Rt=W.state.version,Nt=Ut.getParameters(P,W.state,gt,G,Z),kt=Ut.getProgramCacheKey(Nt),$t=J.programs;J.environment=P.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(P.isMeshStandardMaterial?Y:A).get(P.envMap||J.environment),J.envMapRotation=J.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,$t===void 0&&(P.addEventListener("dispose",et),$t=new Map,J.programs=$t);let Jt=$t.get(kt);if(Jt!==void 0){if(J.currentProgram===Jt&&J.lightsStateVersion===Rt)return jt(P,Nt),Jt}else Nt.uniforms=Ut.getUniforms(P),P.onBeforeCompile(Nt,v),Jt=Ut.acquireProgram(Nt,kt),$t.set(kt,Jt),J.uniforms=Nt.uniforms;let Bt=J.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Bt.clippingPlanes=mt.uniform),jt(P,Nt),J.needsLights=wa(P),J.lightsStateVersion=Rt,J.needsLights&&(Bt.ambientLightColor.value=W.state.ambient,Bt.lightProbe.value=W.state.probe,Bt.directionalLights.value=W.state.directional,Bt.directionalLightShadows.value=W.state.directionalShadow,Bt.spotLights.value=W.state.spot,Bt.spotLightShadows.value=W.state.spotShadow,Bt.rectAreaLights.value=W.state.rectArea,Bt.ltc_1.value=W.state.rectAreaLTC1,Bt.ltc_2.value=W.state.rectAreaLTC2,Bt.pointLights.value=W.state.point,Bt.pointLightShadows.value=W.state.pointShadow,Bt.hemisphereLights.value=W.state.hemi,Bt.directionalShadowMap.value=W.state.directionalShadowMap,Bt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Bt.spotShadowMap.value=W.state.spotShadowMap,Bt.spotLightMatrix.value=W.state.spotLightMatrix,Bt.spotLightMap.value=W.state.spotLightMap,Bt.pointShadowMap.value=W.state.pointShadowMap,Bt.pointShadowMatrix.value=W.state.pointShadowMatrix),J.currentProgram=Jt,J.uniformsList=null,Jt}function Li(P){if(P.uniformsList===null){let G=P.currentProgram.getUniforms();P.uniformsList=As.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function jt(P,G){let Z=Ct.get(P);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Gn(P,G,Z,J,W){G.isScene!==!0&&(G=Ht),z.resetTextureUnits();let gt=G.fog,Rt=J.isMeshStandardMaterial?G.environment:null,Nt=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ws,kt=(J.isMeshStandardMaterial?Y:A).get(J.envMap||Rt),$t=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,Jt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Bt=!!Z.morphAttributes.position,ce=!!Z.morphAttributes.normal,_e=!!Z.morphAttributes.color,Me=vi;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Me=v.toneMapping);let sn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=sn!==void 0?sn.length:0,Ot=Ct.get(J),Wn=g.state.lights;if($===!0&&(at===!0||P!==b)){let fn=P===b&&J.id===y;mt.setState(J,P,fn)}let ue=!1;J.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Wn.state.version||Ot.outputColorSpace!==Nt||W.isBatchedMesh&&Ot.batching===!1||!W.isBatchedMesh&&Ot.batching===!0||W.isBatchedMesh&&Ot.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ot.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ot.instancing===!1||!W.isInstancedMesh&&Ot.instancing===!0||W.isSkinnedMesh&&Ot.skinning===!1||!W.isSkinnedMesh&&Ot.skinning===!0||W.isInstancedMesh&&Ot.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ot.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ot.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ot.instancingMorph===!1&&W.morphTexture!==null||Ot.envMap!==kt||J.fog===!0&&Ot.fog!==gt||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==mt.numPlanes||Ot.numIntersection!==mt.numIntersection)||Ot.vertexAlphas!==$t||Ot.vertexTangents!==Jt||Ot.morphTargets!==Bt||Ot.morphNormals!==ce||Ot.morphColors!==_e||Ot.toneMapping!==Me||Ot.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Ot.__version=J.version);let xn=Ot.currentProgram;ue===!0&&(xn=gn(J,G,W));let ns=!1,on=!1,Ks=!1,be=xn.getUniforms(),Cn=Ot.uniforms;if(vt.useProgram(xn.program)&&(ns=!0,on=!0,Ks=!0),J.id!==y&&(y=J.id,on=!0),ns||b!==P){vt.buffers.depth.getReversed()?(st.copy(P.projectionMatrix),Td(st),Ad(st),be.setValue(D,"projectionMatrix",st)):be.setValue(D,"projectionMatrix",P.projectionMatrix),be.setValue(D,"viewMatrix",P.matrixWorldInverse);let li=be.map.cameraPosition;li!==void 0&&li.setValue(D,Et.setFromMatrixPosition(P.matrixWorld)),Lt.logarithmicDepthBuffer&&be.setValue(D,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&be.setValue(D,"isOrthographic",P.isOrthographicCamera===!0),b!==P&&(b=P,on=!0,Ks=!0)}if(W.isSkinnedMesh){be.setOptional(D,W,"bindMatrix"),be.setOptional(D,W,"bindMatrixInverse");let fn=W.skeleton;fn&&(fn.boneTexture===null&&fn.computeBoneTexture(),be.setValue(D,"boneTexture",fn.boneTexture,z))}W.isBatchedMesh&&(be.setOptional(D,W,"batchingTexture"),be.setValue(D,"batchingTexture",W._matricesTexture,z),be.setOptional(D,W,"batchingIdTexture"),be.setValue(D,"batchingIdTexture",W._indirectTexture,z),be.setOptional(D,W,"batchingColorTexture"),W._colorsTexture!==null&&be.setValue(D,"batchingColorTexture",W._colorsTexture,z));let js=Z.morphAttributes;if((js.position!==void 0||js.normal!==void 0||js.color!==void 0)&&qt.update(W,Z,xn),(on||Ot.receiveShadow!==W.receiveShadow)&&(Ot.receiveShadow=W.receiveShadow,be.setValue(D,"receiveShadow",W.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Cn.envMap.value=kt,Cn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(Cn.envMapIntensity.value=G.environmentIntensity),on&&(be.setValue(D,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Js(Cn,Ks),gt&&J.fog===!0&&_t.refreshFogUniforms(Cn,gt),_t.refreshMaterialUniforms(Cn,J,V,X,g.state.transmissionRenderTarget[P.id]),As.upload(D,Li(Ot),Cn,z)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(As.upload(D,Li(Ot),Cn,z),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&be.setValue(D,"center",W.center),be.setValue(D,"modelViewMatrix",W.modelViewMatrix),be.setValue(D,"normalMatrix",W.normalMatrix),be.setValue(D,"modelMatrix",W.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){let fn=J.uniformsGroups;for(let li=0,ci=fn.length;li<ci;li++){let ah=fn[li];H.update(ah,xn),H.bind(ah,xn)}}return xn}function Js(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function wa(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(P,G,Z){Ct.get(P.texture).__webglTexture=G,Ct.get(P.depthTexture).__webglTexture=Z;let J=Ct.get(P);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||dt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){let Z=Ct.get(P);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,Z=0){R=P,w=G,S=Z;let J=!0,W=null,gt=!1,Rt=!1;if(P){let kt=Ct.get(P);if(kt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(kt.__webglFramebuffer===void 0)z.setupRenderTarget(P);else if(kt.__hasExternalTextures)z.rebindTextures(P,Ct.get(P.texture).__webglTexture,Ct.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Bt=P.depthTexture;if(kt.__boundDepthTexture!==Bt){if(Bt!==null&&Ct.has(Bt)&&(P.width!==Bt.image.width||P.height!==Bt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");z.setupDepthRenderbuffer(P)}}let $t=P.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Rt=!0);let Jt=Ct.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Jt[G])?W=Jt[G][Z]:W=Jt[G],gt=!0):P.samples>0&&z.useMultisampledRTT(P)===!1?W=Ct.get(P).__webglMultisampledFramebuffer:Array.isArray(Jt)?W=Jt[Z]:W=Jt,C.copy(P.viewport),U.copy(P.scissor),N=P.scissorTest}else C.copy(lt).multiplyScalar(V).floor(),U.copy(ut).multiplyScalar(V).floor(),N=it;if(vt.bindFramebuffer(D.FRAMEBUFFER,W)&&J&&vt.drawBuffers(P,W),vt.viewport(C),vt.scissor(U),vt.setScissorTest(N),gt){let kt=Ct.get(P.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,kt.__webglTexture,Z)}else if(Rt){let kt=Ct.get(P.texture),$t=G||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,kt.__webglTexture,Z||0,$t)}y=-1},this.readRenderTargetPixels=function(P,G,Z,J,W,gt,Rt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Nt=Ct.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){vt.bindFramebuffer(D.FRAMEBUFFER,Nt);try{let kt=P.texture,$t=kt.format,Jt=kt.type;if(!Lt.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Lt.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-J&&Z>=0&&Z<=P.height-W&&D.readPixels(G,Z,J,W,Zt.convert($t),Zt.convert(Jt),gt)}finally{let kt=R!==null?Ct.get(R).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(P,G,Z,J,W,gt,Rt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Nt=Ct.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Rt!==void 0&&(Nt=Nt[Rt]),Nt){let kt=P.texture,$t=kt.format,Jt=kt.type;if(!Lt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Lt.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-J&&Z>=0&&Z<=P.height-W){vt.bindFramebuffer(D.FRAMEBUFFER,Nt);let Bt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.bufferData(D.PIXEL_PACK_BUFFER,gt.byteLength,D.STREAM_READ),D.readPixels(G,Z,J,W,Zt.convert($t),Zt.convert(Jt),0);let ce=R!==null?Ct.get(R).__webglFramebuffer:null;vt.bindFramebuffer(D.FRAMEBUFFER,ce);let _e=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Sd(D,_e,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Bt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,gt),D.deleteBuffer(Bt),D.deleteSync(_e),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,Z=0){P.isTexture!==!0&&(cr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);let J=Math.pow(2,-Z),W=Math.floor(P.image.width*J),gt=Math.floor(P.image.height*J),Rt=G!==null?G.x:0,Nt=G!==null?G.y:0;z.setTexture2D(P,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Rt,Nt,W,gt),vt.unbindTexture()},this.copyTextureToTexture=function(P,G,Z=null,J=null,W=0){P.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,P=arguments[1],G=arguments[2],W=arguments[3]||0,Z=null);let gt,Rt,Nt,kt,$t,Jt,Bt,ce,_e,Me=P.isCompressedTexture?P.mipmaps[W]:P.image;Z!==null?(gt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,Nt=Z.isBox3?Z.max.z-Z.min.z:1,kt=Z.min.x,$t=Z.min.y,Jt=Z.isBox3?Z.min.z:0):(gt=Me.width,Rt=Me.height,Nt=Me.depth||1,kt=0,$t=0,Jt=0),J!==null?(Bt=J.x,ce=J.y,_e=J.z):(Bt=0,ce=0,_e=0);let sn=Zt.convert(G.format),he=Zt.convert(G.type),Ot;G.isData3DTexture?(z.setTexture3D(G,0),Ot=D.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(z.setTexture2DArray(G,0),Ot=D.TEXTURE_2D_ARRAY):(z.setTexture2D(G,0),Ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);let Wn=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),xn=D.getParameter(D.UNPACK_SKIP_PIXELS),ns=D.getParameter(D.UNPACK_SKIP_ROWS),on=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Me.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Me.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,$t),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Jt);let Ks=P.isDataArrayTexture||P.isData3DTexture,be=G.isDataArrayTexture||G.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){let Cn=Ct.get(P),js=Ct.get(G),fn=Ct.get(Cn.__renderTarget),li=Ct.get(js.__renderTarget);vt.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let ci=0;ci<Nt;ci++)Ks&&D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(P).__webglTexture,W,Jt+ci),P.isDepthTexture?(be&&D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ct.get(G).__webglTexture,W,_e+ci),D.blitFramebuffer(kt,$t,gt,Rt,Bt,ce,gt,Rt,D.DEPTH_BUFFER_BIT,D.NEAREST)):be?D.copyTexSubImage3D(Ot,W,Bt,ce,_e+ci,kt,$t,gt,Rt):D.copyTexSubImage2D(Ot,W,Bt,ce,_e+ci,kt,$t,gt,Rt);vt.bindFramebuffer(D.READ_FRAMEBUFFER,null),vt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else be?P.isDataTexture||P.isData3DTexture?D.texSubImage3D(Ot,W,Bt,ce,_e,gt,Rt,Nt,sn,he,Me.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(Ot,W,Bt,ce,_e,gt,Rt,Nt,sn,Me.data):D.texSubImage3D(Ot,W,Bt,ce,_e,gt,Rt,Nt,sn,he,Me):P.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,W,Bt,ce,gt,Rt,sn,he,Me.data):P.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,W,Bt,ce,Me.width,Me.height,sn,Me.data):D.texSubImage2D(D.TEXTURE_2D,W,Bt,ce,gt,Rt,sn,he,Me);D.pixelStorei(D.UNPACK_ROW_LENGTH,Wn),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xn),D.pixelStorei(D.UNPACK_SKIP_ROWS,ns),D.pixelStorei(D.UNPACK_SKIP_IMAGES,on),W===0&&G.generateMipmaps&&D.generateMipmap(Ot),vt.unbindTexture()},this.copyTextureToTexture3D=function(P,G,Z=null,J=null,W=0){return P.isTexture!==!0&&(cr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,P=arguments[2],G=arguments[3],W=arguments[4]||0),cr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,Z,J,W)},this.initRenderTarget=function(P){Ct.get(P).__webglFramebuffer===void 0&&z.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?z.setTextureCube(P,0):P.isData3DTexture?z.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?z.setTexture2DArray(P,0):z.setTexture2D(P,0),vt.unbindTexture()},this.resetState=function(){w=0,S=0,R=null,vt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}};var To=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Xi=class extends Le{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ge,this.environmentIntensity=1,this.environmentRotation=new Ge,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},Ao=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Gl,this.updateRanges=[],this.version=0,this.uuid=Dn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Dn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},tn=new L,yr=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyMatrix4(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.applyNormalMatrix(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)tn.fromBufferAttribute(this,e),tn.transformDirection(t),this.setXYZ(e,tn.x,tn.y,tn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Mn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ge(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ge(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Mn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Mn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Mn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Mn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ge(e,this.array),n=ge(n,this.array),i=ge(i,this.array),s=ge(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new le(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},pn=class extends ni{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xs,ir=new L,vs=new L,ys=new L,_s=new j,sr=new j,Gu=new te,Qr=new L,rr=new L,to=new L,au=new j,ja=new j,lu=new j,wn=class extends Le{constructor(t=new pn){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ao(e,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new yr(n,3,0,!1)),xs.setAttribute("uv",new yr(n,2,3,!1))}this.geometry=xs,this.material=t,this.center=new j(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vs.setFromMatrixScale(this.matrixWorld),Gu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ys.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vs.multiplyScalar(-ys.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;eo(Qr.set(-.5,-.5,0),ys,o,vs,i,s),eo(rr.set(.5,-.5,0),ys,o,vs,i,s),eo(to.set(.5,.5,0),ys,o,vs,i,s),au.set(0,0),ja.set(1,0),lu.set(1,1);let a=t.ray.intersectTriangle(Qr,rr,to,!1,ir);if(a===null&&(eo(rr.set(-.5,.5,0),ys,o,vs,i,s),ja.set(0,1),a=t.ray.intersectTriangle(Qr,to,rr,!1,ir),a===null))return;let l=t.ray.origin.distanceTo(ir);l<t.near||l>t.far||e.push({distance:l,point:ir.clone(),uv:xi.getInterpolation(ir,Qr,rr,to,au,ja,lu,new j),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function eo(r,t,e,n,i,s){_s.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(sr.x=s*_s.x-i*_s.y,sr.y=i*_s.x+s*_s.y):sr.copy(_s),r.copy(t),r.x+=sr.x,r.y+=sr.y,r.applyMatrix4(Gu)}var oc=class extends rn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=cn,h=cn,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _r=class extends le{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ms=new te,cu=new te,no=[],hu=new ei,_x=new te,or=new Q,ar=new bi,Ae=class extends Q{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _r(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,_x)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ei),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),hu.copy(t.boundingBox).applyMatrix4(Ms),this.boundingBox.union(hu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new bi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ms),ar.copy(t.boundingSphere).applyMatrix4(Ms),this.boundingSphere.union(ar)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(or.geometry=this.geometry,or.material=this.material,or.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ar.copy(this.boundingSphere),ar.applyMatrix4(n),t.ray.intersectsSphere(ar)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ms),cu.multiplyMatrices(n,Ms),or.matrixWorld=cu,or.raycast(t,no);for(let o=0,a=no.length;o<a;o++){let l=no[o];l.instanceId=s,l.object=this,e.push(l)}no.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _r(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new oc(new Float32Array(i*this.count),i,this.count,kc,Ln));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qi=class extends ni{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},uu=new te,ac=new _o,io=new bi,so=new L,ii=class extends Le{constructor(t=new se,e=new qi){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(i),io.radius+=s,t.ray.intersectsSphere(io)===!1)return;uu.copy(i).invert(),ac.copy(t.ray).applyMatrix4(uu);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let x=f,p=d;x<p;x++){let m=c.getX(x);so.fromBufferAttribute(u,m),fu(so,m,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let x=f,p=d;x<p;x++)so.fromBufferAttribute(u,x),fu(so,x,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function fu(r,t,e,n,i,s,o){let a=ac.distanceSqToPoint(r);if(a<e){let l=new L;ac.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Pe=class extends rn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new j:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new L,i=[],s=[],o=[],a=new L,l=new te;for(let d=0;d<=t;d++){let x=d/t;i[d]=this.getTangentAt(x,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let x=Math.acos(Ne(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,x))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(Ne(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let x=1;x<=t;x++)s[x].applyMatrix4(l.makeRotationAxis(i[x],d*x)),o[x].crossVectors(i[x],s[x])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Mr=class extends mn{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new j){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},lc=class extends Mr{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Gc(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var ro=new L,Qa=new Gc,tl=new Gc,el=new Gc,br=class extends mn{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new L){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(ro.subVectors(i[0],i[1]).add(i[0]),c=ro);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(ro.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=ro),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),x<1e-4&&(x=p),m<1e-4&&(m=p),Qa.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,x,p,m),tl.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,x,p,m),el.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,x,p,m)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),tl.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),el.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(Qa.calc(l),tl.calc(l),el.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new L().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function du(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Mx(r,t){let e=1-r;return e*e*t}function bx(r,t){return 2*(1-r)*r*t}function wx(r,t){return r*r*t}function pr(r,t,e,n){return Mx(r,t)+bx(r,e)+wx(r,n)}function Ex(r,t){let e=1-r;return e*e*e*t}function Sx(r,t){let e=1-r;return 3*e*e*r*t}function Tx(r,t){return 3*(1-r)*r*r*t}function Ax(r,t){return r*r*r*t}function mr(r,t,e,n,i){return Ex(r,t)+Sx(r,e)+Tx(r,n)+Ax(r,i)}var Ro=class extends mn{constructor(t=new j,e=new j,n=new j,i=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new j){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,i.x,s.x,o.x,a.x),mr(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},cc=class extends mn{constructor(t=new L,e=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new L){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(mr(t,i.x,s.x,o.x,a.x),mr(t,i.y,s.y,o.y,a.y),mr(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Co=class extends mn{constructor(t=new j,e=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new j){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new j){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},hc=class extends mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends mn{constructor(t=new j,e=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new j){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(pr(t,i.x,s.x,o.x),pr(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fs=class extends mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(pr(t,i.x,s.x,o.x),pr(t,i.y,s.y,o.y),pr(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Io=class extends mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new j){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(du(a,l.x,c.x,h.x,u.x),du(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new j().fromArray(i))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:lc,CatmullRomCurve3:br,CubicBezierCurve:Ro,CubicBezierCurve3:cc,EllipseCurve:Mr,LineCurve:Co,LineCurve3:hc,QuadraticBezierCurve:Po,QuadraticBezierCurve3:Fs,SplineCurve:Io}),uc=class extends mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,e)}s++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,i=this.curves.length;n<i;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(i.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let i=this.curves[e];t.curves.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let i=t.curves[e];this.curves.push(new Lo[i.type]().fromJSON(i))}return this}},zo=class extends uc{constructor(t){super(),this.type="Path",this.currentPoint=new j,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Co(this.currentPoint.clone(),new j(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,i){let s=new Po(this.currentPoint.clone(),new j(t,e),new j(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(t,e,n,i,s,o){let a=new Ro(this.currentPoint.clone(),new j(t,e),new j(n,i),new j(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Io(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+a,e+l,n,i,s,o),this}absarc(t,e,n,i,s,o){return this.absellipse(t,e,n,n,i,s,o),this}ellipse(t,e,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,i,s,o,a,l),this}absellipse(t,e,n,i,s,o,a,l){let c=new Mr(t,e,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Do=class r extends se{constructor(t=[new j(0,-.5),new j(.5,0),new j(0,.5)],e=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:i},e=Math.floor(e),i=Ne(i,0,Math.PI*2);let s=[],o=[],a=[],l=[],c=[],h=1/e,u=new L,f=new j,d=new L,x=new L,p=new L,m=0,g=0;for(let M=0;M<=t.length-1;M++)switch(M){case 0:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-m,d.z=g*0,p.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(p.x,p.y,p.z);break;default:m=t[M+1].x-t[M].x,g=t[M+1].y-t[M].y,d.x=g*1,d.y=-m,d.z=g*0,x.copy(d),d.x+=p.x,d.y+=p.y,d.z+=p.z,d.normalize(),l.push(d.x,d.y,d.z),p.copy(x)}for(let M=0;M<=e;M++){let _=n+M*h*i,v=Math.sin(_),I=Math.cos(_);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*v,u.y=t[w].y,u.z=t[w].x*I,o.push(u.x,u.y,u.z),f.x=M/e,f.y=w/(t.length-1),a.push(f.x,f.y);let S=l[3*w+0]*v,R=l[3*w+1],y=l[3*w+0]*I;c.push(S,R,y)}}for(let M=0;M<e;M++)for(let _=0;_<t.length-1;_++){let v=_+M*t.length,I=v,w=v+t.length,S=v+t.length+1,R=v+1;s.push(I,w,R),s.push(S,R,w)}this.setIndex(s),this.setAttribute("position",new Wt(o,3)),this.setAttribute("uv",new Wt(a,2)),this.setAttribute("normal",new Wt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.points,t.segments,t.phiStart,t.phiLength)}};var wi=class r extends se{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new L,h=new j;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){let d=n+u/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new Wt(o,3)),this.setAttribute("normal",new Wt(a,3)),this.setAttribute("uv",new Wt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Vt=class r extends se{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],x=0,p=[],m=n/2,g=0;M(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function M(){let v=new L,I=new L,w=0,S=(e-t)/n;for(let R=0;R<=s;R++){let y=[],b=R/s,C=b*(e-t)+t;for(let U=0;U<=i;U++){let N=U/i,T=N*l+a,F=Math.sin(T),k=Math.cos(T);I.x=C*F,I.y=-b*n+m,I.z=C*k,u.push(I.x,I.y,I.z),v.set(F,S,k).normalize(),f.push(v.x,v.y,v.z),d.push(N,1-b),y.push(x++)}p.push(y)}for(let R=0;R<i;R++)for(let y=0;y<s;y++){let b=p[y][R],C=p[y+1][R],U=p[y+1][R+1],N=p[y][R+1];(t>0||y!==0)&&(h.push(b,C,N),w+=3),(e>0||y!==s-1)&&(h.push(C,U,N),w+=3)}c.addGroup(g,w,0),g+=w}function _(v){let I=x,w=new j,S=new L,R=0,y=v===!0?t:e,b=v===!0?1:-1;for(let U=1;U<=i;U++)u.push(0,m*b,0),f.push(0,b,0),d.push(.5,.5),x++;let C=x;for(let U=0;U<=i;U++){let T=U/i*l+a,F=Math.cos(T),k=Math.sin(T);S.x=y*k,S.y=m*b,S.z=y*F,u.push(S.x,S.y,S.z),f.push(0,b,0),w.x=F*.5+.5,w.y=k*.5*b+.5,d.push(w.x,w.y),x++}for(let U=0;U<i;U++){let N=I+U,T=C+U;v===!0?h.push(T,T+1,N):h.push(T+1,T,N),R+=3}c.addGroup(g,R,v===!0?1:2),g+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ei=class r extends Vt{constructor(t=1,e=1,n=32,i=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,n,i,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var En=class extends zo{constructor(t){super(t),this.uuid=Dn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,i=this.holes.length;n<i;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let i=this.holes[e];t.holes.push(i.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let i=t.holes[e];this.holes.push(new zo().fromJSON(i))}return this}},Rx={triangulate:function(r,t,e=2){let n=t&&t.length,i=n?t[0]*e:r.length,s=Wu(r,0,i,e,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c,h,u,f,d;if(n&&(s=zx(r,t,s,e)),r.length>80*e){a=c=r[0],l=h=r[1];for(let x=e;x<i;x+=e)u=r[x],f=r[x+1],u<a&&(a=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);d=Math.max(c-a,h-l),d=d!==0?32767/d:0}return wr(s,o,e,a,l,d,0),o}};function Wu(r,t,e,n,i){let s,o;if(i===Wx(r,t,e,n)>0)for(s=t;s<e;s+=n)o=pu(s,r[s],r[s+1],o);else for(s=e-n;s>=t;s-=n)o=pu(s,r[s],r[s+1],o);return o&&Wo(o,o.next)&&(Sr(o),o=o.next),o}function Yi(r,t){if(!r)return r;t||(t=r);let e=r,n;do if(n=!1,!e.steiner&&(Wo(e,e.next)||Te(e.prev,e,e.next)===0)){if(Sr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function wr(r,t,e,n,i,s,o){if(!r)return;!o&&s&&Bx(r,n,i,s);let a=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,s?Px(r,n,i,s):Cx(r)){t.push(l.i/e|0),t.push(r.i/e|0),t.push(c.i/e|0),Sr(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=Ix(Yi(r),t,e),wr(r,t,e,n,i,s,2)):o===2&&Lx(r,t,e,n,i,s):wr(Yi(r),t,e,n,i,s,1);break}}}function Cx(r){let t=r.prev,e=r,n=r.next;if(Te(t,e,n)>=0)return!1;let i=t.x,s=e.x,o=n.x,a=t.y,l=e.y,c=n.y,h=i<s?i<o?i:o:s<o?s:o,u=a<l?a<c?a:c:l<c?l:c,f=i>s?i>o?i:o:s>o?s:o,d=a>l?a>c?a:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=f&&x.y>=u&&x.y<=d&&ws(i,a,s,l,o,c,x.x,x.y)&&Te(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function Px(r,t,e,n){let i=r.prev,s=r,o=r.next;if(Te(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=a<l?a<c?a:c:l<c?l:c,x=h<u?h<f?h:f:u<f?u:f,p=a>l?a>c?a:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,g=fc(d,x,t,e,n),M=fc(p,m,t,e,n),_=r.prevZ,v=r.nextZ;for(;_&&_.z>=g&&v&&v.z<=M;){if(_.x>=d&&_.x<=p&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&ws(a,h,l,u,c,f,_.x,_.y)&&Te(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=d&&v.x<=p&&v.y>=x&&v.y<=m&&v!==i&&v!==o&&ws(a,h,l,u,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=g;){if(_.x>=d&&_.x<=p&&_.y>=x&&_.y<=m&&_!==i&&_!==o&&ws(a,h,l,u,c,f,_.x,_.y)&&Te(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=M;){if(v.x>=d&&v.x<=p&&v.y>=x&&v.y<=m&&v!==i&&v!==o&&ws(a,h,l,u,c,f,v.x,v.y)&&Te(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Ix(r,t,e){let n=r;do{let i=n.prev,s=n.next.next;!Wo(i,s)&&Xu(i,n,n.next,s)&&Er(i,s)&&Er(s,i)&&(t.push(i.i/e|0),t.push(n.i/e|0),t.push(s.i/e|0),Sr(n),Sr(n.next),n=r=s),n=n.next}while(n!==r);return Yi(n)}function Lx(r,t,e,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Hx(o,a)){let l=qu(o,a);o=Yi(o,o.next),l=Yi(l,l.next),wr(o,t,e,n,i,s,0),wr(l,t,e,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function zx(r,t,e,n){let i=[],s,o,a,l,c;for(s=0,o=t.length;s<o;s++)a=t[s]*n,l=s<o-1?t[s+1]*n:r.length,c=Wu(r,a,l,n,!1),c===c.next&&(c.steiner=!0),i.push(Ox(c));for(i.sort(Dx),s=0;s<i.length;s++)e=Ux(i[s],e);return e}function Dx(r,t){return r.x-t.x}function Ux(r,t){let e=Nx(r,t);if(!e)return t;let n=qu(e,r);return Yi(n,n.next),Yi(e,e.next)}function Nx(r,t){let e=t,n=-1/0,i,s=r.x,o=r.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=s&&f>n&&(n=f,i=e.x<e.next.x?e:e.next,f===s))return i}e=e.next}while(e!==t);if(!i)return null;let a=i,l=i.x,c=i.y,h=1/0,u;e=i;do s>=e.x&&e.x>=l&&s!==e.x&&ws(o<c?s:n,o,l,c,o<c?n:s,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(s-e.x),Er(e,r)&&(u<h||u===h&&(e.x>i.x||e.x===i.x&&kx(i,e)))&&(i=e,h=u)),e=e.next;while(e!==a);return i}function kx(r,t){return Te(r.prev,r,t.prev)<0&&Te(t.next,r,r.next)<0}function Bx(r,t,e,n){let i=r;do i.z===0&&(i.z=fc(i.x,i.y,t,e,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,Fx(i)}function Fx(r){let t,e,n,i,s,o,a,l,c=1;do{for(e=r,r=null,s=null,o=0;e;){for(o++,n=e,a=0,t=0;t<c&&(a++,n=n.nextZ,!!n);t++);for(l=c;a>0||l>0&&n;)a!==0&&(l===0||!n||e.z<=n.z)?(i=e,e=e.nextZ,a--):(i=n,n=n.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;e=n}s.nextZ=null,c*=2}while(o>1);return r}function fc(r,t,e,n,i){return r=(r-e)*i|0,t=(t-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Ox(r){let t=r,e=r;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==r);return e}function ws(r,t,e,n,i,s,o,a){return(i-o)*(t-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(s-a)>=(i-o)*(n-a)}function Hx(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Vx(r,t)&&(Er(r,t)&&Er(t,r)&&Gx(r,t)&&(Te(r.prev,r,t.prev)||Te(r,t.prev,t))||Wo(r,t)&&Te(r.prev,r,r.next)>0&&Te(t.prev,t,t.next)>0)}function Te(r,t,e){return(t.y-r.y)*(e.x-t.x)-(t.x-r.x)*(e.y-t.y)}function Wo(r,t){return r.x===t.x&&r.y===t.y}function Xu(r,t,e,n){let i=ao(Te(r,t,e)),s=ao(Te(r,t,n)),o=ao(Te(e,n,r)),a=ao(Te(e,n,t));return!!(i!==s&&o!==a||i===0&&oo(r,e,t)||s===0&&oo(r,n,t)||o===0&&oo(e,r,n)||a===0&&oo(e,t,n))}function oo(r,t,e){return t.x<=Math.max(r.x,e.x)&&t.x>=Math.min(r.x,e.x)&&t.y<=Math.max(r.y,e.y)&&t.y>=Math.min(r.y,e.y)}function ao(r){return r>0?1:r<0?-1:0}function Vx(r,t){let e=r;do{if(e.i!==r.i&&e.next.i!==r.i&&e.i!==t.i&&e.next.i!==t.i&&Xu(e,e.next,r,t))return!0;e=e.next}while(e!==r);return!1}function Er(r,t){return Te(r.prev,r,r.next)<0?Te(r,t,r.next)>=0&&Te(r,r.prev,t)>=0:Te(r,t,r.prev)<0||Te(r,r.next,t)<0}function Gx(r,t){let e=r,n=!1,i=(r.x+t.x)/2,s=(r.y+t.y)/2;do e.y>s!=e.next.y>s&&e.next.y!==e.y&&i<(e.next.x-e.x)*(s-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==r);return n}function qu(r,t){let e=new dc(r.i,r.x,r.y),n=new dc(t.i,t.x,t.y),i=r.next,s=t.prev;return r.next=t,t.prev=r,e.next=i,i.prev=e,n.next=e,e.prev=n,s.next=n,n.prev=s,n}function pu(r,t,e,n){let i=new dc(r,t,e);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function Sr(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dc(r,t,e){this.i=r,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Wx(r,t,e,n){let i=0;for(let s=t,o=e-n;s<e;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var yi=class r{static area(t){let e=t.length,n=0;for(let i=e-1,s=0;s<e;i=s++)n+=t[i].x*t[s].y-t[s].x*t[i].y;return n*.5}static isClockWise(t){return r.area(t)<0}static triangulateShape(t,e){let n=[],i=[],s=[];mu(t),gu(n,t);let o=t.length;e.forEach(mu);for(let l=0;l<e.length;l++)i.push(o),o+=e[l].length,gu(n,e[l]);let a=Rx.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function mu(r){let t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function gu(r,t){for(let e=0;e<t.length;e++)r.push(t[e].x),r.push(t[e].y)}var Un=class r extends se{constructor(t=new En([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,i=[],s=[];for(let a=0,l=t.length;a<l;a++){let c=t[a];o(c)}this.setAttribute("position",new Wt(i,3)),this.setAttribute("uv",new Wt(s,2)),this.computeVertexNormals();function o(a){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,p=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,g=e.extrudePath,M=e.UVGenerator!==void 0?e.UVGenerator:Xx,_,v=!1,I,w,S,R;g&&(_=g.getSpacedPoints(h),v=!0,f=!1,I=g.computeFrenetFrames(h,!1),w=new L,S=new L,R=new L),f||(m=0,d=0,x=0,p=0);let y=a.extractPoints(c),b=y.shape,C=y.holes;if(!yi.isClockWise(b)){b=b.reverse();for(let nt=0,ft=C.length;nt<ft;nt++){let D=C[nt];yi.isClockWise(D)&&(C[nt]=D.reverse())}}let N=yi.triangulateShape(b,C),T=b;for(let nt=0,ft=C.length;nt<ft;nt++){let D=C[nt];b=b.concat(D)}function F(nt,ft,D){return ft||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(ft,D)}let k=b.length,X=N.length;function V(nt,ft,D){let zt,dt,Lt,vt=nt.x-ft.x,Xt=nt.y-ft.y,Ct=D.x-nt.x,z=D.y-nt.y,A=vt*vt+Xt*Xt,Y=vt*z-Xt*Ct;if(Math.abs(Y)>Number.EPSILON){let rt=Math.sqrt(A),ht=Math.sqrt(Ct*Ct+z*z),ot=ft.x-Xt/rt,Ut=ft.y+vt/rt,_t=D.x-z/ht,Pt=D.y+Ct/ht,ie=((_t-ot)*z-(Pt-Ut)*Ct)/(vt*z-Xt*Ct);zt=ot+vt*ie-nt.x,dt=Ut+Xt*ie-nt.y;let mt=zt*zt+dt*dt;if(mt<=2)return new j(zt,dt);Lt=Math.sqrt(mt/2)}else{let rt=!1;vt>Number.EPSILON?Ct>Number.EPSILON&&(rt=!0):vt<-Number.EPSILON?Ct<-Number.EPSILON&&(rt=!0):Math.sign(Xt)===Math.sign(z)&&(rt=!0),rt?(zt=-Xt,dt=vt,Lt=Math.sqrt(A)):(zt=vt,dt=Xt,Lt=Math.sqrt(A/2))}return new j(zt/Lt,dt/Lt)}let q=[];for(let nt=0,ft=T.length,D=ft-1,zt=nt+1;nt<ft;nt++,D++,zt++)D===ft&&(D=0),zt===ft&&(zt=0),q[nt]=V(T[nt],T[D],T[zt]);let K=[],lt,ut=q.concat();for(let nt=0,ft=C.length;nt<ft;nt++){let D=C[nt];lt=[];for(let zt=0,dt=D.length,Lt=dt-1,vt=zt+1;zt<dt;zt++,Lt++,vt++)Lt===dt&&(Lt=0),vt===dt&&(vt=0),lt[zt]=V(D[zt],D[Lt],D[vt]);K.push(lt),ut=ut.concat(lt)}for(let nt=0;nt<m;nt++){let ft=nt/m,D=d*Math.cos(ft*Math.PI/2),zt=x*Math.sin(ft*Math.PI/2)+p;for(let dt=0,Lt=T.length;dt<Lt;dt++){let vt=F(T[dt],q[dt],zt);st(vt.x,vt.y,-D)}for(let dt=0,Lt=C.length;dt<Lt;dt++){let vt=C[dt];lt=K[dt];for(let Xt=0,Ct=vt.length;Xt<Ct;Xt++){let z=F(vt[Xt],lt[Xt],zt);st(z.x,z.y,-D)}}}let it=x+p;for(let nt=0;nt<k;nt++){let ft=f?F(b[nt],ut[nt],it):b[nt];v?(S.copy(I.normals[0]).multiplyScalar(ft.x),w.copy(I.binormals[0]).multiplyScalar(ft.y),R.copy(_[0]).add(S).add(w),st(R.x,R.y,R.z)):st(ft.x,ft.y,0)}for(let nt=1;nt<=h;nt++)for(let ft=0;ft<k;ft++){let D=f?F(b[ft],ut[ft],it):b[ft];v?(S.copy(I.normals[nt]).multiplyScalar(D.x),w.copy(I.binormals[nt]).multiplyScalar(D.y),R.copy(_[nt]).add(S).add(w),st(R.x,R.y,R.z)):st(D.x,D.y,u/h*nt)}for(let nt=m-1;nt>=0;nt--){let ft=nt/m,D=d*Math.cos(ft*Math.PI/2),zt=x*Math.sin(ft*Math.PI/2)+p;for(let dt=0,Lt=T.length;dt<Lt;dt++){let vt=F(T[dt],q[dt],zt);st(vt.x,vt.y,u+D)}for(let dt=0,Lt=C.length;dt<Lt;dt++){let vt=C[dt];lt=K[dt];for(let Xt=0,Ct=vt.length;Xt<Ct;Xt++){let z=F(vt[Xt],lt[Xt],zt);v?st(z.x,z.y+_[h-1].y,_[h-1].x+D):st(z.x,z.y,u+D)}}}O(),$();function O(){let nt=i.length/3;if(f){let ft=0,D=k*ft;for(let zt=0;zt<X;zt++){let dt=N[zt];pt(dt[2]+D,dt[1]+D,dt[0]+D)}ft=h+m*2,D=k*ft;for(let zt=0;zt<X;zt++){let dt=N[zt];pt(dt[0]+D,dt[1]+D,dt[2]+D)}}else{for(let ft=0;ft<X;ft++){let D=N[ft];pt(D[2],D[1],D[0])}for(let ft=0;ft<X;ft++){let D=N[ft];pt(D[0]+k*h,D[1]+k*h,D[2]+k*h)}}n.addGroup(nt,i.length/3-nt,0)}function $(){let nt=i.length/3,ft=0;at(T,ft),ft+=T.length;for(let D=0,zt=C.length;D<zt;D++){let dt=C[D];at(dt,ft),ft+=dt.length}n.addGroup(nt,i.length/3-nt,1)}function at(nt,ft){let D=nt.length;for(;--D>=0;){let zt=D,dt=D-1;dt<0&&(dt=nt.length-1);for(let Lt=0,vt=h+m*2;Lt<vt;Lt++){let Xt=k*Lt,Ct=k*(Lt+1),z=ft+zt+Xt,A=ft+dt+Xt,Y=ft+dt+Ct,rt=ft+zt+Ct;Et(z,A,Y,rt)}}}function st(nt,ft,D){l.push(nt),l.push(ft),l.push(D)}function pt(nt,ft,D){Tt(nt),Tt(ft),Tt(D);let zt=i.length/3,dt=M.generateTopUV(n,i,zt-3,zt-2,zt-1);Ht(dt[0]),Ht(dt[1]),Ht(dt[2])}function Et(nt,ft,D,zt){Tt(nt),Tt(ft),Tt(zt),Tt(ft),Tt(D),Tt(zt);let dt=i.length/3,Lt=M.generateSideWallUV(n,i,dt-6,dt-3,dt-2,dt-1);Ht(Lt[0]),Ht(Lt[1]),Ht(Lt[3]),Ht(Lt[1]),Ht(Lt[2]),Ht(Lt[3])}function Tt(nt){i.push(l[nt*3+0]),i.push(l[nt*3+1]),i.push(l[nt*3+2])}function Ht(nt){s.push(nt.x),s.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return qx(e,n,t)}static fromJSON(t,e){let n=[];for(let s=0,o=t.shapes.length;s<o;s++){let a=e[t.shapes[s]];n.push(a)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Lo[i.type]().fromJSON(i)),new r(n,t.options)}},Xx={generateTopUV:function(r,t,e,n,i){let s=t[e*3],o=t[e*3+1],a=t[n*3],l=t[n*3+1],c=t[i*3],h=t[i*3+1];return[new j(s,o),new j(a,l),new j(c,h)]},generateSideWallUV:function(r,t,e,n,i,s){let o=t[e*3],a=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[i*3],d=t[i*3+1],x=t[i*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2];return Math.abs(a-h)<Math.abs(o-c)?[new j(o,1-l),new j(c,1-u),new j(f,1-x),new j(p,1-g)]:[new j(a,1-l),new j(h,1-u),new j(d,1-x),new j(m,1-g)]}};function qx(r,t,e){if(e.shapes=[],Array.isArray(r))for(let n=0,i=r.length;n<i;n++){let s=r[n];e.shapes.push(s.uuid)}else e.shapes.push(r.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Os=class r extends se{constructor(t=.5,e=1,n=32,i=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:i,thetaStart:s,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);let a=[],l=[],c=[],h=[],u=t,f=(e-t)/i,d=new L,x=new j;for(let p=0;p<=i;p++){for(let m=0;m<=n;m++){let g=s+m/n*o;d.x=u*Math.cos(g),d.y=u*Math.sin(g),l.push(d.x,d.y,d.z),c.push(0,0,1),x.x=(d.x/e+1)/2,x.y=(d.y/e+1)/2,h.push(x.x,x.y)}u+=f}for(let p=0;p<i;p++){let m=p*(n+1);for(let g=0;g<n;g++){let M=g+m,_=M,v=M+n+1,I=M+n+2,w=M+1;a.push(_,v,w),a.push(v,I,w)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var Re=class r extends se{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,f=new L,d=[],x=[],p=[],m=[];for(let g=0;g<=n;g++){let M=[],_=g/n,v=0;g===0&&o===0?v=.5/e:g===n&&l===Math.PI&&(v=-.5/e);for(let I=0;I<=e;I++){let w=I/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+_*a),u.y=t*Math.cos(o+_*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+_*a),x.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),m.push(w+v,1-_),M.push(c++)}h.push(M)}for(let g=0;g<n;g++)for(let M=0;M<e;M++){let _=h[g][M+1],v=h[g][M],I=h[g+1][M],w=h[g+1][M+1];(g!==0||o>0)&&d.push(_,v,w),(g!==n-1||l<Math.PI)&&d.push(v,I,w)}this.setIndex(d),this.setAttribute("position",new Wt(x,3)),this.setAttribute("normal",new Wt(p,3)),this.setAttribute("uv",new Wt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Tr=class r extends se{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,f=new L;for(let d=0;d<=n;d++)for(let x=0;x<=i;x++){let p=x/i*s,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(p),u.y=(t+e*Math.cos(m))*Math.sin(p),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(p),h.y=t*Math.sin(p),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(x/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=i;x++){let p=(i+1)*d+x-1,m=(i+1)*(d-1)+x-1,g=(i+1)*(d-1)+x,M=(i+1)*d+x;o.push(p,m,M),o.push(m,g,M)}this.setIndex(o),this.setAttribute("position",new Wt(a,3)),this.setAttribute("normal",new Wt(l,3)),this.setAttribute("uv",new Wt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Uo=class r extends se{constructor(t=new Fs(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new j,h=new L,u=[],f=[],d=[],x=[];p(),this.setIndex(x),this.setAttribute("position",new Wt(u,3)),this.setAttribute("normal",new Wt(f,3)),this.setAttribute("uv",new Wt(d,2));function p(){for(let _=0;_<e;_++)m(_);m(s===!1?e:0),M(),g()}function m(_){h=t.getPointAt(_/e,h);let v=o.normals[_],I=o.binormals[_];for(let w=0;w<=i;w++){let S=w/i*Math.PI*2,R=Math.sin(S),y=-Math.cos(S);l.x=y*v.x+R*I.x,l.y=y*v.y+R*I.y,l.z=y*v.z+R*I.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let _=1;_<=e;_++)for(let v=1;v<=i;v++){let I=(i+1)*(_-1)+(v-1),w=(i+1)*_+(v-1),S=(i+1)*_+v,R=(i+1)*(_-1)+v;x.push(I,w,R),x.push(w,S,R)}}function M(){for(let _=0;_<=e;_++)for(let v=0;v<=i;v++)c.x=_/e,c.y=v/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Lo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var No=class extends xe{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}},wt=class extends ni{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ge,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Si=class extends wt{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function lo(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function Yx(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var Hs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},pc=class extends Hs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:uh,endingEnd:uh}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fh:s=t,a=2*e-n;break;case dh:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case fh:o=t,l=2*n-e;break;case dh:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,x=(n-e)/(i-e),p=x*x,m=p*x,g=-f*m+2*f*p-f*x,M=(1+f)*m+(-1.5-2*f)*p+(-.5+f)*x+1,_=(-1-d)*m+(1.5+d)*p+.5*x,v=d*m-d*p;for(let I=0;I!==a;++I)s[I]=g*o[h+I]+M*o[c+I]+_*o[l+I]+v*o[u+I];return s}},mc=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},gc=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=lo(e,this.TimeBufferType),this.values=lo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:lo(t.times,Array),values:lo(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new gc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new mc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case mo:e=this.InterpolantFactoryMethodDiscrete;break;case Vl:e=this.InterpolantFactoryMethodLinear;break;case Sa:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mo;case this.InterpolantFactoryMethodLinear:return Vl;case this.InterpolantFactoryMethodSmooth:return Sa}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Yx(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Sa,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let x=0;x!==n;++x){let p=e[u+x];if(p!==e[f+x]||p!==e[d+x]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=Vl;var $i=class extends Sn{constructor(t,e,n){super(t,e,n)}};$i.prototype.ValueTypeName="bool";$i.prototype.ValueBufferType=Array;$i.prototype.DefaultInterpolation=mo;$i.prototype.InterpolantFactoryMethodLinear=void 0;$i.prototype.InterpolantFactoryMethodSmooth=void 0;var xc=class extends Sn{};xc.prototype.ValueTypeName="color";var vc=class extends Sn{};vc.prototype.ValueTypeName="number";var yc=class extends Hs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Ue.slerpFlat(s,0,o,c-a,o,c,l);return s}},ko=class extends Sn{InterpolantFactoryMethodLinear(t){return new yc(this.times,this.values,this.getValueSize(),t)}};ko.prototype.ValueTypeName="quaternion";ko.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=mo;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var _c=class extends Sn{};_c.prototype.ValueTypeName="vector";var Mc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],x=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},$x=new Mc,bc=class{constructor(t){this.manager=t!==void 0?t:$x,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};bc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Vs=class extends Le{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Bo=class extends Vs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},nl=new te,xu=new L,vu=new L,Ar=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;xu.setFromMatrixPosition(t.matrixWorld),e.position.copy(xu),vu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(vu),e.updateMatrixWorld(),nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},wc=class extends Ar{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=zs*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Fo=class extends Vs{constructor(t,e,n=0,i=Math.PI/3,s=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.distance=n,this.angle=i,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new wc}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},yu=new te,lr=new L,il=new L,Ec=class extends Ar{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new ye(2,1,1,1),new ye(0,1,1,1),new ye(3,1,1,1),new ye(1,1,1,1),new ye(3,0,1,1),new ye(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),lr.setFromMatrixPosition(t.matrixWorld),n.position.copy(lr),il.copy(n.position),il.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(il),n.updateMatrixWorld(),i.makeTranslation(-lr.x,-lr.y,-lr.z),yu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yu)}},Ji=class extends Vs{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Ec}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Sc=class extends Ar{constructor(){super(new ks(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Oo=class extends Vs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Le.DEFAULT_UP),this.updateMatrix(),this.target=new Le,this.shadow=new Sc}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Gs=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_u(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=_u();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function _u(){return performance.now()}var Wc="\\[\\]\\.:\\/",Zx=new RegExp("["+Wc+"]","g"),Xc="[^"+Wc+"]",Jx="[^"+Wc.replace("\\.","")+"]",Kx=/((?:WC+[\/:])*)/.source.replace("WC",Xc),jx=/(WCOD+)?/.source.replace("WCOD",Jx),Qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xc),tv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xc),ev=new RegExp("^"+Kx+jx+Qx+tv+"$"),nv=["material","materials","bones","map"],Tc=class{constructor(t,e,n){let i=n||Se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Se=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Zx,"")}static parseTrackName(t){let e=ev.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);nv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Se.Composite=Tc;Se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Se.prototype.GetterByBindingType=[Se.prototype._getValue_direct,Se.prototype._getValue_array,Se.prototype._getValue_arrayElement,Se.prototype._getValue_toArray];Se.prototype.SetterByBindingTypeAndVersioning=[[Se.prototype._setValue_direct,Se.prototype._setValue_direct_setNeedsUpdate,Se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_array,Se.prototype._setValue_array_setNeedsUpdate,Se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_arrayElement,Se.prototype._setValue_arrayElement_setNeedsUpdate,Se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Se.prototype._setValue_fromArray,Se.prototype._setValue_fromArray_setNeedsUpdate,Se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Pv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ac}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ac);var Yc=[22.22222222222222,16.666666666666668,15.277777777777777,13.333333333333332,10.555555555555555,6.111111111111111,5];function Oe(r,t){return r*1e5+t}var Xo=class{constructor(t){this.raw=t,this.origin=t.origin,this.names=t.names;let e=this.P=new Float32Array(t.pts.length);for(let n=0;n<t.pts.length;n++)e[n]=t.pts[n]*.1;this._buildGraph(t.roads),this._buildRoadGrid(),this._indexChunks(t),this._buildSignals(t.signals),this.pois=t.pois.map(n=>({name:n[0],en:n[1],x:n[2]*.1,z:n[3]*.1,kind:n[4]}))}roadName(t){if(t<0)return null;let e=this.names[t];return{local:e[0],en:e[1]||e[0]}}_buildGraph(t){let e=new Map;for(let o of t){let a=o[5];for(let l=0;l<a.length;l++){let c=a[l];e.set(c,(e.get(c)||0)+(l===0||l===a.length-1?2:1))}}let n=this.nodes=new Map,i=o=>{let a=n.get(o);return a||(a={id:o,x:this.P[o*2],z:this.P[o*2+1],out:[],inc:[],deg:0,signal:null,maxW:0,top:0},n.set(o,a)),a},s=this.edges=[];for(let o of t){let[a,l,c,h,u,f,d]=o,x=0;for(let p=1;p<f.length;p++)if(e.get(f[p])>1||p===f.length-1){let m=f.slice(x,p+1);m.length>=2&&this._addEdge(m,a,l,c,h,u,i),x=p}}for(let o of s)for(let a of[o.na,o.nb])a.deg++,o.w>a.maxW&&(a.maxW=o.w),a.top=Math.max(a.top,6-o.cls);for(let o of s)o.na.out.push(o.id*2),o.nb.inc.push(o.id*2),o.ow||(o.nb.out.push(o.id*2+1),o.na.inc.push(o.id*2+1))}_addEdge(t,e,n,i,s,o,a){let l=t.length,c=new Float32Array(l*2),h=new Float32Array(l),u=0;for(let d=0;d<l;d++)c[d*2]=this.P[t[d]*2],c[d*2+1]=this.P[t[d]*2+1],d>0&&(u+=Math.hypot(c[d*2]-c[d*2-2],c[d*2+1]-c[d*2-1])),h[d]=u;if(u<.5)return;let f={id:this.edges.length,ids:t,pts:c,cum:h,len:u,cls:e,w:n,lanes:i,ow:s,name:o,na:a(t[0]),nb:a(t[l-1]),signals:[]};this.edges.push(f)}sample(t,e,n,i,s){let o=t.len,a=e?o-n:n;a<0?a=0:a>o&&(a=o);let l=t.cum,c=t.pts,h=0,u=l.length-1;for(;u-h>1;){let v=h+u>>1;l[v]<=a?h=v:u=v}let f=l[u]-l[h]||1e-6,d=(a-l[h])/f,x=c[h*2],p=c[h*2+1],m=c[u*2],g=c[u*2+1],M=(m-x)/f,_=(g-p)/f;return e&&(M=-M,_=-_),s.x=x+(m-x)*d-_*i,s.z=p+(g-p)*d+M*i,s.dx=M,s.dz=_,s}laneOffset(t,e){return t.ow?-t.w/2+3.3*(e+.5):3.3*(e+.5)-.15}_buildRoadGrid(){let t=this.GRID=40,e=this.roadGrid=new Map;for(let n of this.edges){let i=n.pts;for(let s=0;s<i.length/2-1;s++){let o=Math.min(i[s*2],i[s*2+2])-n.w/2,a=Math.max(i[s*2],i[s*2+2])+n.w/2,l=Math.min(i[s*2+1],i[s*2+3])-n.w/2,c=Math.max(i[s*2+1],i[s*2+3])+n.w/2;for(let h=Math.floor(o/t);h<=Math.floor(a/t);h++)for(let u=Math.floor(l/t);u<=Math.floor(c/t);u++){let f=Oe(h,u),d=e.get(f);d||e.set(f,d=[]),d.push(n.id,s)}}}}nearestRoad(t,e,n=40,i=null){let s=this.GRID,o=Math.ceil(n/s),a=Math.floor(t/s),l=Math.floor(e/s),c=null,h=n*n;for(let u=a-o;u<=a+o;u++)for(let f=l-o;f<=l+o;f++){let d=this.roadGrid.get(Oe(u,f));if(d)for(let x=0;x<d.length;x+=2){let p=this.edges[d[x]],m=d[x+1];if(i&&!i(p))continue;let g=p.pts,M=g[m*2],_=g[m*2+1],v=g[m*2+2],I=g[m*2+3],w=v-M,S=I-_,R=w*w+S*S||1e-6,y=((t-M)*w+(e-_)*S)/R;y=y<0?0:y>1?1:y;let b=M+w*y,C=_+S*y,U=(t-b)**2+(e-C)**2;if(U<h){h=U;let N=Math.sqrt(R);c={e:p,i:m,t:y,x:b,z:C,dist:Math.sqrt(U),s:p.cum[m]+y*N,dx:w/N,dz:S/N}}}}return c&&(c.lat=(t-c.x)*-c.dz+(e-c.z)*c.dx),c}_indexChunks(t){let n=this.chunks=new Map,i=(a,l)=>{let c=Math.floor(a/400),h=Math.floor(l/400),u=Oe(c,h),f=n.get(u);return f||n.set(u,f={key:u,cx:c,cz:h,buildings:[],edges:[],areas:[],lines:[],nodes:[],trees:[],crossings:[],busstops:[],signs:[]}),f};this.globalAreas=[],this.buildings=t.buildings.map((a,l)=>{let c=a[3],h=c.length/2,u=new Float32Array(c.length),f=0,d=0,x=1e9,p=-1e9,m=1e9,g=-1e9,M=0,_=0;for(let I=0;I<h;I++)M+=c[I*2],_+=c[I*2+1],u[I*2]=M*.1,u[I*2+1]=_*.1;for(let I=0;I<h;I++){let w=u[I*2],S=u[I*2+1];f+=w,d+=S,w<x&&(x=w),w>p&&(p=w),S<m&&(m=S),S>g&&(g=S)}let v={i:l,kind:a[0],h:a[1],minH:a[2],pts:u,cx:f/h,cz:d/h,x0:x,x1:p,z0:m,z1:g,name:a[4]||null,colour:a[5]||null,roofColour:a[6]||null,roofShape:a[7]||null};return i(v.cx,v.cz).buildings.push(v),v});let s=this.BGRID=30,o=this.bgrid=new Map;for(let a of this.buildings)for(let l=Math.floor(a.x0/s);l<=Math.floor(a.x1/s);l++)for(let c=Math.floor(a.z0/s);c<=Math.floor(a.z1/s);c++){let h=Oe(l,c),u=o.get(h);u||o.set(h,u=[]),u.push(a)}for(let a of this.edges){let l=Math.floor(a.pts.length/4)*2;i(a.pts[l],a.pts[l+1]).edges.push(a)}for(let a of this.nodes.values())a.deg>1&&i(a.x,a.z).nodes.push(a);for(let a of t.areas){let l=a[1],c=new Float32Array(l.length),h=0,u=0,f=1e9,d=-1e9,x=1e9,p=-1e9;for(let g=0;g<l.length;g++)c[g]=l[g]*.1;for(let g=0;g<l.length/2;g++){let M=c[g*2],_=c[g*2+1];h+=M,u+=_,M<f&&(f=M),M>d&&(d=M),_<x&&(x=_),_>p&&(p=_)}let m={type:a[0],pts:c,x0:f,x1:d,z0:x,z1:p};d-f>1500||p-x>1500?this.globalAreas.push(m):i(h/(l.length/2),u/(l.length/2)).areas.push(m)}this.areaList=t.areas;for(let a of t.lines){let[l,c,h]=a,u=h.length/2;for(let f=0;f<u-1;f+=23){let d=Math.min(u,f+24),x=new Float32Array((d-f)*2);for(let p=0;p<x.length;p++)x[p]=h[f*2+p]*.1;i(x[0],x[1]).lines.push({type:l,w:c,pts:x})}}for(let a of t.trees)i(a[0]*.1,a[1]*.1).trees.push([a[0]*.1,a[1]*.1]);for(let a of t.crossings)i(a[0]*.1,a[1]*.1).crossings.push([a[0]*.1,a[1]*.1]);for(let a of t.busstops)i(a[0]*.1,a[1]*.1).busstops.push([a[0]*.1,a[1]*.1]);for(let a of t.signs||[])i(a[0]*.1,a[1]*.1).signs.push({x:a[0]*.1,z:a[1]*.1,name:a[2],kind:a[3]});this.busStopList=t.busstops.map(a=>[a[0]*.1,a[1]*.1]),this.osmRoutes=(t.routes||[]).map(a=>({ref:a[0],name:a[1],type:a[2],pts:a[3].map(l=>l*.1),stops:a[4].map(l=>l*.1)})),this.runways=t.lines.filter(a=>a[0]===3).map(a=>a[2].map(l=>l*.1)),this.taxiways=t.lines.filter(a=>a[0]===4).map(a=>({w:a[1],pts:a[2].map(l=>l*.1)})),this.stands=t.stands.map(a=>a.map(l=>l*.1)),this.jet=t.jet.map(a=>a.map(l=>l*.1))}insideBuilding(t,e,n=0){let i=this.bgrid.get(Oe(Math.floor(t/this.BGRID),Math.floor(e/this.BGRID)));if(!i)return null;for(let s of i)if(!(t<s.x0-n||t>s.x1+n||e<s.z0-n||e>s.z1+n)&&qo(t,e,s.pts))return s;return null}_buildSignals(t){let e=new Map;for(let l of t)e.set(l[0]+","+l[1],l);let n=this.raw,i=new Set;for(let l=0;l<n.pts.length/2;l++)e.has(n.pts[l*2]+","+n.pts[l*2+1])&&i.add(l);let s=[...i].map(l=>({i:l,x:this.P[l*2],z:this.P[l*2+1],c:-1})),o=this.signalClusters=[];for(let l of s){if(l.c>=0)continue;let c={id:o.length,x:0,z:0,n:0,members:[],axis:null,phase:Math.random()*60,cycle:46+Math.random()*10,controls:[]},h=[l];for(l.c=c.id;h.length;){let u=h.pop();c.members.push(u),c.x+=u.x,c.z+=u.z,c.n++;for(let f of s)f.c<0&&Math.hypot(f.x-u.x,f.z-u.z)<45&&(f.c=c.id,h.push(f))}c.x/=c.n,c.z/=c.n,o.push(c)}let a=new Map;for(let l of s)a.set(l.i,o[l.c]);this.controls=[];for(let l of this.edges)for(let c=0;c<l.ids.length;c++){let h=a.get(l.ids[c]);if(h)for(let u of l.ow?[0]:[0,1]){let f=u?l.len-l.cum[c]:l.cum[c],d=u===0&&c===l.ids.length-1||u===1&&c===0;if(u===0&&c===0||u===1&&c===l.ids.length-1)continue;let p=Math.max(1,f-(d?4+(u?l.na:l.nb).maxW*.5:2.5)),m={};this.sample(l,u,Math.max(0,p-3),0,m);let g=Math.atan2(m.dz,m.dx);h.axis===null&&(h.axis=g);let M=Math.abs(Math.cos(g-h.axis)),_={e:l,dir:u,de:l.id*2+u,stop:p,cluster:h,group:M>.707?0:1,ang:g,x:0,z:0};l.signals.some(v=>v.dir===u&&v.cluster===h)||(l.signals.push(_),h.controls.push(_),this.controls.push(_))}}}signalState(t,e,n){let i=(n+t.phase)%t.cycle,s=t.cycle/2,o=i<s?0:1,a=i-o*s;return o!==e?"R":a<s-5?"G":a<s-2?"Y":"R"}route(t,e,n,i){let s=this.nearestRoad(t,e,300,M=>M.cls<=5),o=this.nearestRoad(n,i,400,M=>M.cls<=5);if(!s||!o)return null;let a=[s.e.nb];s.e.ow||a.push(s.e.na);let l=new Set([o.e.na.id,o.e.nb.id]),c=new qc,h=new Map,u=new Map;for(let M of a){let _=Math.hypot(M.x-t,M.z-e);h.set(M.id,_),c.push(_+Math.hypot(M.x-n,M.z-i),M)}let f=null,d=0;for(;c.size&&d++<2e5;){let M=c.pop();if(l.has(M.id)){f=M;break}let _=h.get(M.id);for(let v of M.out){let I=this.edges[v>>1];if(I.cls>5)continue;let w=v&1?I.na:I.nb,S=I.len*(1+I.cls*.08),R=_+S;R<(h.get(w.id)??1e18)&&(h.set(w.id,R),u.set(w.id,{n:M,de:v}),c.push(R+Math.hypot(w.x-n,w.z-i),w))}}if(!f)return null;let x=[o.x,o.z],p=f,m=[];for(;u.has(p.id);){let M=u.get(p.id);m.push(M.de),p=M.n}m.reverse();let g=[t,e,s.x,s.z];for(let M of m){let v=this.edges[M>>1].pts,I=v.length/2;if(M&1)for(let w=I-1;w>=0;w--)g.push(v[w*2],v[w*2+1]);else for(let w=0;w<I;w++)g.push(v[w*2],v[w*2+1])}return g.push(...x),g}};function qo(r,t,e){let n=!1,i=e.length/2;for(let s=0,o=i-1;s<i;o=s++){let a=e[s*2],l=e[s*2+1],c=e[o*2],h=e[o*2+1];l>t!=h>t&&r<(c-a)*(t-l)/(h-l)+a&&(n=!n)}return n}var qc=class{constructor(){this.k=[],this.v=[]}get size(){return this.k.length}push(t,e){let n=this.k,i=this.v,s=n.length;for(n.push(t),i.push(e);s>0;){let o=s-1>>1;if(n[o]<=t)break;n[s]=n[o],i[s]=i[o],s=o}n[s]=t,i[s]=e}pop(){let t=this.k,e=this.v,n=e[0],i=t.pop(),s=e.pop();if(t.length){let o=0,a=t.length;for(;;){let l=o*2+1,c=l+1,h=o,u=i;if(l<a&&t[l]<u&&(h=l,u=t[l]),c<a&&t[c]<u&&(h=c),h===o)break;t[o]=t[h],e[o]=e[h],o=h}t[o]=i,e[o]=s}return n}};function Tn(r){let t=r>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var An={uNight:{value:0},uTime:{value:0}};function Ti(r,t=r){let e=document.createElement("canvas");return e.width=r,e.height=t,e}function Ai(r,t=!0,e=!0){let n=new Pe(r);return t&&(n.wrapS=n.wrapT=gr),n.anisotropy=8,e&&(n.colorSpace=de),n.needsUpdate=!0,n}function Ri(r,t,e,n,i,s,o=1){let a=r.getImageData(0,0,t,e),l=a.data;for(let c=0;c<e;c+=o)for(let h=0;h<t;h+=o){let u=(s()-.5)*i;for(let f=0;f<o;f++)for(let d=0;d<o;d++){let x=((c+f)*t+h+d)*4;l[x]=Math.max(0,Math.min(255,n[0]+u)),l[x+1]=Math.max(0,Math.min(255,n[1]+u)),l[x+2]=Math.max(0,Math.min(255,n[2]+u)),l[x+3]=255}}r.putImageData(a,0,0)}function Yu(){let r=Tn(42),t={};{let e=Ti(512),n=e.getContext("2d");Ri(n,512,512,[92,92,94],34,r);for(let i=0;i<2500;i++)n.fillStyle=`rgba(${r()<.5?40:150},${r()<.5?40:150},${r()<.5?40:150},${.25*r()})`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2);for(let i=0;i<9;i++)n.fillStyle=`rgba(30,30,32,${.15+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,20+r()*60,10+r()*40,r()*3,0,7),n.fill();n.strokeStyle="rgba(25,25,25,0.5)";for(let i=0;i<14;i++){n.lineWidth=.6+r(),n.beginPath();let s=r()*512,o=r()*512;n.moveTo(s,o);for(let a=0;a<8;a++)s+=(r()-.5)*40,o+=(r()-.5)*40,n.lineTo(s,o);n.stroke()}t.asphalt=Ai(e)}{let e=Ti(512),n=e.getContext("2d");Ri(n,512,512,[86,112,52],30,r,2);for(let i=0;i<9e3;i++){let s=80+r()*70;n.fillStyle=`rgba(${s*.7},${s},${s*.4},0.5)`,n.fillRect(r()*512,r()*512,1,2+r()*3)}for(let i=0;i<40;i++)n.fillStyle=`rgba(120,105,70,${.1+r()*.2})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*40,8+r()*30,r()*3,0,7),n.fill();t.grass=Ai(e)}{let e=Ti(512),n=e.getContext("2d");Ri(n,512,512,[128,118,92],30,r,2);for(let i=0;i<6e3;i++){let s=90+r()*80;n.fillStyle=`rgba(${s},${s*.92},${s*.7},0.35)`,n.fillRect(r()*512,r()*512,1+r()*2,1+r()*2)}for(let i=0;i<60;i++)n.fillStyle=`rgba(95,115,55,${.15+r()*.25})`,n.beginPath(),n.ellipse(r()*512,r()*512,6+r()*30,6+r()*20,r()*3,0,7),n.fill();t.dirt=Ai(e)}{let e=Ti(512),n=e.getContext("2d");Ri(n,512,512,[168,164,156],14,r),n.strokeStyle="rgba(90,88,84,0.55)",n.lineWidth=2;let i=64;for(let s=0;s<512;s+=i/2){let o=s/(i/2)%2?i/2:0;n.beginPath(),n.moveTo(0,s),n.lineTo(512,s),n.stroke();for(let a=o;a<512+i;a+=i)n.beginPath(),n.moveTo(a,s),n.lineTo(a,s+i/2),n.stroke()}for(let s=0;s<300;s++)n.fillStyle=`rgba(${r()<.5?120:200},${r()<.5?115:190},110,${.12*r()})`,n.fillRect(Math.floor(r()*16)*32,Math.floor(r()*16)*32,64,32);t.paving=Ai(e)}{let e=Ti(512),n=e.getContext("2d");Ri(n,512,512,[176,174,168],18,r),n.strokeStyle="rgba(70,70,70,0.45)",n.lineWidth=2;for(let i=0;i<=512;i+=128)n.beginPath(),n.moveTo(i,0),n.lineTo(i,512),n.stroke(),n.beginPath(),n.moveTo(0,i),n.lineTo(512,i),n.stroke();for(let i=0;i<25;i++)n.fillStyle=`rgba(60,55,50,${.05+r()*.12})`,n.beginPath(),n.ellipse(r()*512,r()*512,10+r()*50,8+r()*25,r()*3,0,7),n.fill();t.concrete=Ai(e)}{let e=Ti(512),n=e.getContext("2d");Ri(n,512,512,[150,140,80],26,r,2);for(let i=0;i<512;i+=6)n.fillStyle=`rgba(90,110,40,${.25+.2*r()})`,n.fillRect(0,i,512,2);t.field=Ai(e)}{let e=Ti(256),n=e.getContext("2d");Ri(n,256,256,[60,90,100],18,r,2),t.water=Ai(e)}{let e=Ti(256),n=e.getContext("2d");Ri(n,256,256,[230,230,230],30,r,1);for(let i=0;i<40;i++)n.fillStyle=`rgba(80,70,60,${.08*r()})`,n.fillRect(r()*256,r()*256*.2+200,2+r()*10,50);t.facade=Ai(e,!0,!1)}return t}function $u(r){let t=new wt({vertexColors:!0,roughness:.88,metalness:0,map:r.facade});return t.onBeforeCompile=e=>{e.uniforms.uNight=An.uNight,e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
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
        totalEmissiveRadiance += lit * mix(vec3(1.0,0.62,0.30), vec3(0.75,0.82,1.0), step(0.86,hh)) * (0.22 + 0.5*fract(hh*7.13));`)},t}function si(r,t,e,n=16777215,i=.95){let s=new wt({map:t,color:n,roughness:i,metalness:0,vertexColors:!0});return s.onBeforeCompile=o=>{o.vertexShader=o.vertexShader.replace("#include <common>",`#include <common>
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
        diffuseColor *= mix(tA, tB, 0.35) * (0.82 + 0.3*mac);`)},s}function Zu(){let r=new wt({vertexColors:!0,roughness:.7,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});return r.onBeforeCompile=t=>{t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute vec2 aDash; varying vec2 vDash;`).replace("#include <uv_vertex>",`#include <uv_vertex>
vDash = aDash;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vDash;`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
        if (vDash.y > 0.5 && vDash.y < 1.5 && fract(vDash.x / 9.0) > 0.38) discard;      // dashed lane line
        if (vDash.y > 1.5 && vDash.y < 2.5 && fract(vDash.x / 1.0) > 0.5) discard;       // zebra crossing stripes
        if (vDash.y > 2.5 && fract(vDash.x / 50.0) > 0.6) discard;                       // runway centreline`)},r}var je=class{constructor(t={}){this.p=[],this.n=[],this.c=[],this.i=[],this.extra={};for(let e in t)this.extra[e]={size:t[e],data:[]};this.vc=0}v(t,e,n,i,s,o,a,l,c,h){if(this.p.push(t,e,n),this.n.push(i,s,o),this.c.push(a,l,c),h)for(let u in h){let f=h[u],d=this.extra[u].data;for(let x=0;x<f.length;x++)d.push(f[x])}return this.vc++}tri(t,e,n){this.i.push(t,e,n)}quad(t,e,n,i){this.i.push(t,e,n,t,n,i)}get empty(){return this.vc===0}build(){let t=new se;t.setAttribute("position",new Wt(this.p,3)),t.setAttribute("normal",new Wt(this.n,3)),t.setAttribute("color",new Wt(this.c,3));for(let e in this.extra)t.setAttribute(e,new Wt(this.extra[e].data,this.extra[e].size));return t.setIndex(this.vc>65535?new Us(this.i,1):new Ds(this.i,1)),t.computeBoundingSphere(),t.computeBoundingBox(),t}};function $c(r){let t=r.length/2,e=new Float32Array(t*3);for(let n=0;n<t;n++){let i=0,s=0,o=0,a=0;if(n>0){i=r[n*2]-r[n*2-2],s=r[n*2+1]-r[n*2-1];let p=Math.hypot(i,s)||1;i/=p,s/=p}if(n<t-1){o=r[n*2+2]-r[n*2],a=r[n*2+3]-r[n*2+1];let p=Math.hypot(o,a)||1;o/=p,a/=p}n===0&&(i=o,s=a),n===t-1&&(o=i,a=s);let l=i+o,c=s+a,h=Math.hypot(l,c);h<1e-4?(l=o,c=a):(l/=h,c/=h);let u=-c,f=l,d=u*-a+f*o,x=Math.min(3,1/Math.max(.33,d));e[n*3]=u,e[n*3+1]=f,e[n*3+2]=x}return e}function Zc(r,t,e,n){let i=[],s=r.length/2,o=c=>{let h=0;for(;h<s-2&&t[h+1]<c;)h++;let u=t[h+1]-t[h]||1e-6,f=Math.max(0,Math.min(1,(c-t[h])/u));return[r[h*2]+(r[h*2+2]-r[h*2])*f,r[h*2+1]+(r[h*2+3]-r[h*2+1])*f]},a=o(e);i.push(a[0],a[1]);for(let c=1;c<s-1;c++)t[c]>e&&t[c]<n&&i.push(r[c*2],r[c*2+1]);let l=o(n);return i.push(l[0],l[1]),i}function Ju(r){let t=r.length/2,e=new Float32Array(t);for(let n=1;n<t;n++)e[n]=e[n-1]+Math.hypot(r[n*2]-r[n*2-2],r[n*2+1]-r[n*2-1]);return e}function nn(r,t,e,n,i,s,o){let a=t.length/2;if(a<2)return;let l=$c(t),c=0,h=-1,u=-1;for(let f=0;f<a;f++){f>0&&(c+=Math.hypot(t[f*2]-t[f*2-2],t[f*2+1]-t[f*2-1]));let d=l[f*3],x=l[f*3+1],p=l[f*3+2],m=t[f*2],g=t[f*2+1],M=r.v(m+d*e*p,i,g+x*e*p,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,0)}),_=r.v(m+d*n*p,i,g+x*n*p,0,1,0,s[0],s[1],s[2],o&&{aDash:o(c,1)});h>=0&&r.quad(h,u,_,M),h=M,u=_}}function Ku(r,t,e,n,i,s,o=14){let a=r.v(t,i,e,0,1,0,s[0],s[1],s[2]),l=-1,c=-1;for(let h=0;h<o;h++){let u=-h/o*Math.PI*2,f=r.v(t+Math.cos(u)*n,i,e+Math.sin(u)*n,0,1,0,s[0],s[1],s[2]);c>=0?r.tri(a,c,f):l=f,c=f}r.tri(a,c,l)}function kn(r){return[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255].map(t=>Math.pow(t,2.2))}function Jc(r,t=!1){let e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new se,c=0;for(let h=0;h<r.length;++h){let u=r[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;s[d]===void 0&&(s[d]=[]),s[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,d,h),c+=d}}if(e){let h=0,u=[];for(let f=0;f<r.length;++f){let d=r[f].index;for(let x=0;x<d.count;++x)u.push(d.getX(x)+h);h+=r[f].attributes.position.count}l.setIndex(u)}for(let h in s){let u=ju(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let p=0;p<o[h].length;++p)d.push(o[h][p][f]);let x=ju(d);if(!x)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(x)}}return l}function ju(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){let h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}let o=new t(s),a=new le(o,e,n),l=0;for(let c=0;c<r.length;++c){let h=r[c];if(h.isInterleavedBufferAttribute){let u=l/e;for(let f=0,d=h.count;f<d;f++)for(let x=0;x<e;x++){let p=h.getComponent(f,x);a.setComponent(f+u,x,p)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}function It(r,t,e=1){r=r.index?r.toNonIndexed():r;let n=new yt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new le(s,3)),r.attributes.uv&&r.deleteAttribute("uv"),r}function Qe(r){let t=Jc(r.map(e=>{let n=e.index?e.toNonIndexed():e;return n.attributes.uv&&n.deleteAttribute("uv"),n.attributes.uv1&&n.deleteAttribute("uv1"),n}),!1);return t.computeBoundingSphere(),t}function tf(){let t=document.createElement("canvas");t.width=512*2,t.height=512;let e=t.getContext("2d"),n=Tn(77);e.fillStyle="#5a4634",e.fillRect(0,0,512,512);for(let o=0;o<900;o++){let a=50+n()*60;e.fillStyle=`rgba(${a+20},${a},${a*.7},0.6)`,e.fillRect(n()*512,n()*512,2+n()*4,20+n()*60)}e.clearRect(512,0,512,512);let i=(o,a,l,c,h)=>{e.save(),e.translate(o,a),e.rotate(c);let u=90+h*110;e.fillStyle=`rgb(${Math.round(u*.55)},${Math.round(u)},${Math.round(u*.35)})`,e.beginPath(),e.ellipse(0,0,l,l*.45,0,0,Math.PI*2),e.fill(),e.strokeStyle="rgba(30,50,20,0.35)",e.lineWidth=1,e.beginPath(),e.moveTo(-l,0),e.lineTo(l,0),e.stroke(),e.restore()};for(let o=0;o<3800;o++){let a=n()*Math.PI*2,l=Math.sqrt(n())*512*.47,c=512+512/2+Math.cos(a)*l,h=512/2+Math.sin(a)*l;i(c,h,7+n()*9,n()*6.28,.25+.75*n()*(1-l/512*.9))}e.strokeStyle="rgba(70,55,40,0.9)",e.lineWidth=3;for(let o=0;o<6;o++)e.beginPath(),e.moveTo(512+512/2,512/2),e.lineTo(512+512/2+(n()-.5)*512*.8,512/2+(n()-.5)*512*.8),e.stroke();let s=new Pe(t);return s.colorSpace=de,s.anisotropy=4,s.generateMipmaps=!0,s}function Yo(r){let t=Jc(r.map(e=>e.index?e.toNonIndexed():e),!1);return t.computeBoundingSphere(),t}function $o(r,t,e,n=7,i=0){let s=new Vt(r,t,e,n,3,!0).translate(0,e/2,0),o=s.attributes.position,a=s.attributes.uv;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+i*o.getY(l)/e),a.setXY(l,a.getX(l)*.45,a.getY(l)*2%1);return ef(s,16777215)}function Qu(r,t,e){let n=new L().subVectors(t,r),i=n.length(),s=new Vt(e*.6,e,i,5,1,!0),o=s.attributes.uv;for(let a=0;a<o.count;a++)o.setXY(a,o.getX(a)*.45,o.getY(a));return s.translate(0,i/2,0),s.applyQuaternion(new Ue().setFromUnitVectors(new L(0,1,0),n.normalize())),s.translate(r.x,r.y,r.z),ef(s,16777215)}function ef(r,t,e=1){let n=new yt(t),i=r.attributes.position.count,s=new Float32Array(i*3);for(let o=0;o<i;o++)s[o*3]=n.r*e,s[o*3+1]=n.g*e,s[o*3+2]=n.b*e;return r.setAttribute("color",new le(s,3)),r}function Zo(r,t,e,n,i,s,o,a,l,c,h=!1){let u=[],f=[],d=[],x=[],p=new yt(c),m=new Ue,g=new Ge,M=new L;for(let R=0;R<a;R++){let y,b,C;for(;;){y=r()*2-1,b=r()*2-1,C=r()*2-1;let K=y*y+b*b+C*C;if(K<=1&&K>.15)break}if(h){let K=1-(b+1)/2;y*=.25+K,C*=.25+K}let U=t+y*i,N=e+b*s,T=n+C*o,F=l*(.75+r()*.5);g.set(r()*Math.PI,r()*Math.PI,r()*Math.PI),m.setFromEuler(g);let k=[[-1,-1],[1,-1],[1,1],[-1,1]],X=new L(y,b*.7+.25,C).normalize(),V=.55+.55*((b+1)/2)*(.6+.4*Math.sqrt(y*y+C*C)),q=u.length/3;for(let[K,lt]of k){M.set(K*F/2,lt*F/2,0).applyQuaternion(m),u.push(U+M.x,N+M.y,T+M.z),f.push(X.x,X.y,X.z),d.push(.5+(K+1)/4,(lt+1)/2);let ut=.9+r()*.2;x.push(p.r*V*ut,p.g*V*ut,p.b*V*ut)}}let _=[],v=[],I=[],w=[];for(let R=0;R<a;R++)for(let y of[0,1,2,0,2,3]){let b=R*4+y;_.push(u[b*3],u[b*3+1],u[b*3+2]),v.push(f[b*3],f[b*3+1],f[b*3+2]),I.push(d[b*2],d[b*2+1]),w.push(x[b*3],x[b*3+1],x[b*3+2])}let S=new se;return S.setAttribute("position",new Wt(_,3)),S.setAttribute("normal",new Wt(v,3)),S.setAttribute("uv",new Wt(I,2)),S.setAttribute("color",new Wt(w,3)),S}function Jo(r){return r.attributes.uv1&&r.deleteAttribute("uv1"),r}function Kc(r=0){let t=Tn(11+r),e=r?.28:1,n=r?1.35:1,i=(o,a,l)=>new L(o,a,l),s=[];{let o=[$o(.16,.28,3.6,7,.15)];if(!r)for(let[a,l]of[[.4,3.2],[2.4,3.4],[4.3,3]])o.push(Qu(i(0,l,0),i(Math.cos(a)*1.8,l+1.8,Math.sin(a)*1.8),.1));o.push(Zo(t,.2,5.6,0,3,2.3,3,Math.round(70*e),2.1*n,6130234)),s.push(Yo(o.map(Jo)))}{let o=[$o(.15,.3,4,6)];o.push(Zo(t,0,10,0,1.5,7.5,1.5,Math.round(80*e),1.8*n,5603124)),s.push(Yo(o.map(Jo)))}{let o=[$o(.12,.24,7,6)];o.push(Zo(t,0,5,0,2.6,4.8,2.6,Math.round(70*e),1.6*n,3826768,!0)),s.push(Yo(o.map(Jo)))}{let o=[$o(.24,.42,3.4,8,-.1)];if(!r)for(let[a,l]of[[.9,3],[3.1,3.2],[5,2.9],[2,3.6]])o.push(Qu(i(0,l,0),i(Math.cos(a)*2.4,l+2.2,Math.sin(a)*2.4),.14));o.push(Zo(t,0,6.6,0,3.8,2.9,3.8,Math.round(95*e),2.4*n,5077552)),s.push(Yo(o.map(Jo)))}return s}function nf(){return Kc(1)}function sf(){let r=It(new Vt(.07,.11,8.5,6).translate(0,4.25,0),5922402),t=It(new Dt(.08,.08,2.2).translate(0,8.4,-1.05),5922402),e=It(new Dt(.35,.14,.7).translate(0,8.35,-2.1),3948354);return Qe([r,t,e])}function rf(){return It(new Dt(.28,.04,.6).translate(0,8.27,-2.1),16777215)}function of(){let r=It(new Vt(.08,.1,3.6,6).translate(0,1.8,0),2829616),t=It(new Dt(.36,1.05,.3).translate(0,3.5,0),1710876),e=[];for(let i=0;i<3;i++)e.push(It(new Dt(.34,.04,.18).translate(0,3.86-i*.33,.22),1118481));let n=It(new Dt(.44,1.15,.02).translate(0,3.5,-.16),14540253);return Qe([r,t,n,...e])}function af(r){return It(new wi(.12,12).translate(0,3.83-r*.33,.155),16777215)}function lf(){return Qe([It(new Dt(1.8,.06,.45).translate(0,.45,0),8017460),It(new Dt(1.8,.4,.05).translate(0,.72,-.2),8017460),It(new Dt(.06,.45,.45).translate(-.8,.22,0),3355443),It(new Dt(.06,.45,.45).translate(.8,.22,0),3355443)])}function cf(){return Qe([It(new Dt(3.6,.08,1.6).translate(0,2.5,0),2973324),It(new Dt(.08,2.5,1.5).translate(-1.75,1.25,0),8952234),It(new Dt(.08,2.5,1.5).translate(1.75,1.25,0),8952234),It(new Dt(3.5,1.8,.05).translate(0,1.4,-.72),10467012),It(new Dt(3,.08,.4).translate(0,.5,-.5),5592405)])}var Ci={house:[15262420,15788760,14272936,11887946,13221806,15129792,11031870,14209224],panel:[14207920,13616824,14734784,14268584,12109e3,11578534,14207120,14933199,12891292,13285792],comm:[9083560,13156528,5925496,13816012,8359818,12035727],ind:[10525328,9211016,10130050,11578016],pub:[15131354,13212296,14472388,15328472,13083022],roofHouse:[4157002,9058862,3824250,8026744,10111538,5925466,10527912]},iv={0:["grass",16777215,.012],1:["grass",15780048,.014],2:["grass",11059352,.013],3:["water",3828352,.006],4:["grass",12120224,.015],5:["dirt",15786176,.015],6:["field",16777215,.01],7:["grass",13684928,.012],8:["dirt",13157564,.011],9:["dirt",14203024,.012],10:["asphalt",14211288,.018],11:["paving",16777215,.02],12:["concrete",16777215,.021]},sv={0:1/140,2:1/45,7:1/120,1:0},Ko=class{constructor(t,e,n){this.scene=t,this.map=e,this.T=n,this.root=new Yt,t.add(this.root),this.mat={building:$u(n),road:si(n,n.asphalt,7,16777215,.92),mark:Zu(),paving:Object.assign(si(n,n.paving,3.2,12104876,.9),{side:we}),grass:si(n,n.grass,6,16777215,1),dirt:si(n,n.dirt,7,16777215,1),field:si(n,n.field,14,16777215,1),asphalt:si(n,n.asphalt,7,16777215,.92),concrete:si(n,n.concrete,20,13158596,.85),water:new wt({color:5931152,roughness:.06,metalness:.4,vertexColors:!0}),tree:(()=>{let i=new wt({vertexColors:!0,roughness:.85,map:tf(),alphaTest:.42,side:we});return i.onBeforeCompile=s=>{s.fragmentShader=s.fragmentShader.replace("float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;","float faceDirection = 1.0;")},i})(),lamp:new wt({vertexColors:!0,roughness:.5,metalness:.5}),lampGlow:new wt({color:2236962,emissive:16760944,emissiveIntensity:0}),prop:new wt({vertexColors:!0,roughness:.6}),rail:new wt({color:7829367,roughness:.3,metalness:.8})},this.geoTrees=Kc(),this.geoTreesLow=nf(),this.geoLamp=sf(),this.geoLampGlow=rf(),this.geoBus=cf(),this.geoBench=lf(),this.live=new Map,this.queue=[],this.radius=1500,this.collision=new Map,this.CG=20,this._buildGround(),this._buildGlobalAreas(),this.lampLights=[]}_buildGround(){let t=new Ee(9e3,9e3,1,1).rotateX(-Math.PI/2),e=t.attributes.position.count,n=new Float32Array(e*3).fill(1);t.setAttribute("color",new le(n,3));let i=si(this.T,this.T.dirt,9,11843744,1);this.ground=new Q(t,i),this.ground.receiveShadow=!0,this.ground.renderOrder=-2,this.scene.add(this.ground)}_buildGlobalAreas(){let t={};for(let e of this.map.globalAreas)this._area(t,e,null);for(let e in t){let n=new Q(t[e].build(),this.mat[e]);n.receiveShadow=!0,this.root.add(n)}}update(t,e,n=!1){let i=t.x,s=t.z;this.ground.position.set(Math.round(i/50)*50,0,Math.round(s/50)*50);let o=this.radius,a=Math.floor((i-o)/400),l=Math.floor((i+o)/400),c=Math.floor((s-o)/400),h=Math.floor((s+o)/400),u=[];for(let x=a;x<=l;x++)for(let p=c;p<=h;p++){let m=Oe(x,p);if(this.live.has(m))continue;let g=this.map.chunks.get(m);if(!g)continue;let M=Math.hypot((x+.5)*400-i,(p+.5)*400-s);M<o&&u.push([M,g])}u.sort((x,p)=>x[0]-p[0]);let f=performance.now();for(let[x,p]of u)if(this._buildChunk(p),!n&&performance.now()-f>(this.radius>2e3?14:8))break;let d=this.farRadius||0;if(d>o){if(this.far||(this.far=new Map,this.farRoot=new Yt,this.scene.add(this.farRoot)),!this._farScan||performance.now()-this._farScan>400){this._farScan=performance.now();let p=Math.floor((i-d)/400),m=Math.floor((i+d)/400),g=Math.floor((s-d)/400),M=Math.floor((s+d)/400),_=[];for(let v=p;v<=m;v++)for(let I=g;I<=M;I++){let w=Oe(v,I);if(this.far.has(w))continue;let S=this.map.chunks.get(w);if(!S||!S.buildings.length)continue;let R=Math.hypot((v+.5)*400-i,(I+.5)*400-s);R<d&&R>o-600&&_.push([R,S])}_.sort((v,I)=>v[0]-I[0]),this._farQueue=_}let x=performance.now();for(;this._farQueue&&this._farQueue.length&&performance.now()-x<(n?50:4);){let[,p]=this._farQueue.shift();this.far.has(p.key)||this._buildFar(p)}for(let[p,m]of this.far){let g=Math.hypot(m.x-i,m.z-s);if(g>d+800){this.farRoot.remove(m.mesh),m.mesh.geometry.dispose(),this.far.delete(p);continue}let M=this.live.get(p);m.mesh.visible=!(M&&M.group.visible)&&g<d+200}}else if(this.far&&this.far.size){for(let x of this.far.values())this.farRoot.remove(x.mesh),x.mesh.geometry.dispose();this.far.clear()}for(let[x,p]of this.live){let m=Math.hypot(p.x-i,p.z-s);if(m>o+900){this._dispose(x,p);continue}p.group.visible=m<o+300,p.detail&&(p.detail.visible=m<650),p.trees&&(p.trees.visible=m<280,p.treesLow.visible=m>=280&&m<1400),p.marks&&(p.marks.visible=m<700)}}_buildFar(t){let e=Tn(t.key*7+13),n=new je({aInfo:2,aWin:2});for(let a of t.buildings)!(a.h>=6||(a.x1-a.x0)*(a.z1-a.z0)>160)&&e()<.6||this._building(n,a,e,!1);let i=(t.cx+.5)*400,s=(t.cz+.5)*400;if(n.empty){this.far.set(t.key,{mesh:new Yt,x:i,z:s}),this.far.get(t.key).mesh.geometry={dispose(){}};return}let o=new Q(n.build(),this.mat.building);o.matrixAutoUpdate=!1,this.farRoot.add(o),this.far.set(t.key,{mesh:o,x:i,z:s})}_dispose(t,e){this.root.remove(e.group),e.group.traverse(n=>{n.geometry&&!n.userData.shared&&n.geometry.dispose(),n.isInstancedMesh&&n.dispose()}),e.signTex&&(e.signTex.dispose(),e.signMat.dispose()),this.live.delete(t)}addWall(t,e,n,i){let s=this.CG,o=Math.floor(Math.min(t,n)/s),a=Math.floor(Math.max(t,n)/s),l=Math.floor(Math.min(e,i)/s),c=Math.floor(Math.max(e,i)/s);for(let h=o;h<=a;h++)for(let u=l;u<=c;u++){let f=Oe(h,u),d=this.collision.get(f);d||this.collision.set(f,d=[]),d.push(t,e,n,i)}}_buildChunk(t){let e=this.map,n=Tn(t.key*7+13),i=new Yt,s={group:i,x:(t.cx+.5)*400,z:(t.cz+.5)*400};if(this.live.set(t.key,s),!t.collided){t.collided=!0;var o=!0}let a=new je({aInfo:2,aWin:2});for(let y of t.buildings)this._building(a,y,n,o);if(!a.empty){let y=new Q(a.build(),this.mat.building);y.castShadow=!0,y.receiveShadow=!0,i.add(y)}t.signs.length&&this._signs(t,i,s);let l=new je,c=new je,h=new je({aDash:2}),u=[1,1,1],f=kn(15253568),d=[.92,.92,.9];for(let y of t.edges){let b=.03+(6-y.cls)*.005;nn(l,y.pts,-y.w/2,y.w/2,b,[1,1,1]);let C=y.na.deg>1?y.na.maxW/2+1.5:0,U=y.nb.deg>1?y.nb.maxW/2+1.5:0;if(y.len-C-U<2)continue;let N=Zc(y.pts,y.cum,C,y.len-U),T=b+.004,F=(k,X,V=.15,q=d)=>nn(h,N,k-V/2,k+V/2,T,q,K=>[K,X]);if(y.cls<=4){if(y.ow)for(let k=1;k<y.lanes;k++)F(-y.w/2+k*3.3,1);else if(y.lanes>=2){F(-.12,0),F(.12,0);for(let k=1;k<y.lanes;k++)F(k*3.3,1),F(-k*3.3,1)}else y.cls<=4&&y.w>=6&&F(0,1);y.cls<=2&&(F(y.w/2-.35,0,.12),F(-y.w/2+.35,0,.12))}for(let k of y.signals){let X={};e.sample(y,k.dir,k.stop,0,X);let V=k.dir?-1:1,q=(y.ow,y.w/2),K=y.ow?-q:0,lt=q,ut=-X.dz,it=X.dx,O=[X.x+ut*K,X.z+it*K,X.x+ut*lt,X.z+it*lt];nn(h,O,-.25,.25,T+.001,d,()=>[0,0])}if(y.cls>=1&&y.cls<=4&&y.w>=5){let k=y.na.deg>1?y.na.maxW/2+2.5:0,X=y.nb.deg>1?y.nb.maxW/2+2.5:0;if(y.len-k-X>3){let V=Zc(y.pts,y.cum,k,y.len-X),q=y.cls<=2?3.4:2.6;for(let K of[-1,1]){let lt=K>0?y.w/2:-y.w/2-q,ut=K>0?y.w/2+q:-y.w/2;nn(c,V,lt,ut,.15,[1,1,1]),this._curb(c,V,K>0?y.w/2:-y.w/2,K)}}}}for(let y of t.nodes){let b=.03+y.top*.005+.002;Ku(l,y.x,y.z,y.maxW/2*1.08,b,[1,1,1],16)}for(let[y,b]of t.crossings){let C=e.nearestRoad(y,b,4);if(!C||C.e.cls>4||C.e.w<5)continue;let U=.03+(6-C.e.cls)*.005+.006,N=-C.dz,T=C.dx,F=C.e.w/2,k=[C.x-N*F,C.z-T*F,C.x+N*F,C.z+T*F];nn(h,k,-2,2,U,d,X=>[X*2,2])}if(!l.empty){let y=new Q(l.build(),this.mat.road);y.receiveShadow=!0,i.add(y)}if(!c.empty){let y=new Q(c.build(),this.mat.paving);y.receiveShadow=!0,i.add(y),s.detail=y}if(!h.empty){let y=new Q(h.build(),this.mat.mark);y.receiveShadow=!0,i.add(y),s.marks=y}let x={},p=[[],[],[],[]];for(let y of t.areas)this._area(x,y,n,p);for(let y of t.lines)this._line(x,y,n,p);for(let y in x){let b=new Q(x[y].build(),this.mat[y]);b.receiveShadow=!0,i.add(b)}let m=[];for(let y of t.edges){if(y.cls<1||y.cls>4)continue;let b=y.cls<=2?9:11,C=y.w/2+(y.cls<=2?4.2:3.4);for(let U=6+n()*5;U<y.len-6;U+=b+n()*5)for(let N of[-1,1]){if(n()<(y.cls<=3?.18:.4))continue;let T={};if(e.sample(y,0,U,C*N,T),this._blocked(T.x,T.z,y,2.2))continue;let F=y.cls<=2?n()<.55?1:0:n()<.25?1:n()<.85?0:3;p[F].push(T.x,T.z,.75+n()*.5,n()*6.28)}if(y.cls<=3)for(let U=10;U<y.len-8;U+=34)for(let N of y.cls<=1?[-1,1]:[1]){let T={};if(e.sample(y,0,U,(y.w/2+.6)*N,T),this._blocked(T.x,T.z,y,.8))continue;let F=Math.atan2(-T.dz*N,T.dx*N);m.push(T.x,T.z,F)}}for(let y of t.trees)p[n()<.5?0:3].push(y[0],y[1],.8+n()*.4,n()*6.28);let g=new Yt,M=new Yt,_=new te,v=new Ue,I=new L,w=new L,S=new L(0,1,0),R=new yt;for(let y=0;y<4;y++){let b=p[y],C=b.length/4;if(!C)continue;let U=new Ae(this.geoTrees[y],this.mat.tree,C);for(let T=0;T<C;T++){let F=b[T*4+2];v.setFromAxisAngle(S,b[T*4+3]),_.compose(I.set(b[T*4],0,b[T*4+1]),v,w.set(F,F*(.9+n()*.25),F)),U.setMatrixAt(T,_);let k=.8+n()*.35;U.setColorAt(T,R.setRGB(k*(.9+n()*.25),k,k*(.85+n()*.2)))}U.castShadow=!0,U.receiveShadow=!0,U.computeBoundingSphere(),g.add(U);let N=new Ae(this.geoTreesLow[y],this.mat.tree,C);N.instanceMatrix.copy(U.instanceMatrix),N.instanceColor=U.instanceColor,N.castShadow=!0,N.computeBoundingSphere(),M.add(N)}if(i.add(g,M),s.trees=g,s.treesLow=M,m.length){let y=m.length/3,b=new Ae(this.geoLamp,this.mat.lamp,y),C=new Ae(this.geoLampGlow,this.mat.lampGlow,y);for(let U=0;U<y;U++)v.setFromAxisAngle(S,m[U*3+2]),_.compose(I.set(m[U*3],0,m[U*3+1]),v,w.set(1,1,1)),b.setMatrixAt(U,_),C.setMatrixAt(U,_);b.castShadow=!0,b.computeBoundingSphere(),C.computeBoundingSphere(),i.add(b,C)}if(t.busstops.length){let y=[];for(let[b,C]of t.busstops){let U=e.nearestRoad(b,C,25,V=>V.cls<=4);if(!U)continue;let N=U.lat>=0?1:-1,T=U.e.w/2+2.2,F=U.x+-U.dz*T*N,k=U.z+U.dx*T*N;if(e.insideBuilding(F,k,.5))continue;let X=e.nearestRoad(F,k,12);X&&X.dist<X.e.w/2+1||y.push(F,k,Math.atan2(U.dx*N,U.dz*N)+Math.PI)}if(y.length){let b=new Ae(this.geoBus,this.mat.prop,y.length/3);for(let C=0;C<y.length/3;C++)v.setFromAxisAngle(S,y[C*3+2]),_.compose(I.set(y[C*3],.15,y[C*3+1]),v,w.set(1,1,1)),b.setMatrixAt(C,_);b.castShadow=!0,b.computeBoundingSphere(),i.add(b)}}this.root.add(i),this.onChunk&&this.onChunk(t,s)}_signs(t,e,n){let i={pharmacy:["#1d8a4a","#fff"],bank:["#163c7a","#fff"],cafe:["#5a3a22","#ffe9c8"],restaurant:["#7a1e1e","#fff3d0"],fast_food:["#d8261c","#fff"],supermarket:["#f2c200","#1a1a1a"],convenience:["#1f5fa8","#fff"],fuel:["#0a6a3a","#fff"],hotel:["#2a2a40","#f0d080"],clothes:["#222","#fff"],bar:["#3a1a40","#ffd0f0"],mobile_phone:["#e05a10","#fff"]},s=[];for(let v of t.signs){let I=Math.floor(v.x/this.map.BGRID),w=Math.floor(v.z/this.map.BGRID),S=null,R=18;for(let y=-1;y<=1;y++)for(let b=-1;b<=1;b++){let C=this.map.bgrid.get(Oe(I+y,w+b));if(C)for(let U of C){if(U.h<3||U.h>80)continue;let N=U.pts,T=N.length/2,F=0;for(let X=0;X<T;X++){let V=(X+1)%T;F+=N[X*2]*N[V*2+1]-N[V*2]*N[X*2+1]}let k=F>0?1:-1;for(let X=0;X<T;X++){let V=(X+1)%T,q=N[X*2],K=N[X*2+1],lt=N[V*2],ut=N[V*2+1],it=lt-q,O=ut-K,$=Math.hypot(it,O);if($<3)continue;let at=((v.x-q)*it+(v.z-K)*O)/($*$);at=Math.max(.15,Math.min(.85,at));let st=q+it*at,pt=K+O*at,Et=Math.hypot(v.x-st,v.z-pt),Tt=O/$*k,Ht=-it/$*k,nt=this.map.nearestRoad(st+Tt*6,pt+Ht*6,30),ft=Et+(nt?nt.dist*.15:6);ft<R&&(R=ft,S={x:st+Tt*.06,z:pt+Ht*.06,nx:Tt,nz:Ht,l:$,h:Math.min(U.h,4.2)})}}}if(S&&!s.some(y=>Math.hypot(y.x-S.x,y.z-S.z)<2.5)&&s.push(Object.assign(S,{name:v.name,kind:v.kind})),s.length>=48)break}if(!s.length)return;let o=256,a=48,l=4,c=Math.ceil(s.length/l),h=document.createElement("canvas");h.width=o*l,h.height=a*c;let u=h.getContext("2d"),f=[],d=[],x=[],p=[];s.forEach((v,I)=>{let w=I%l*o,S=Math.floor(I/l)*a,[R,y]=i[v.kind]||["#8a1a1a","#fff"];u.fillStyle=R,u.fillRect(w,S,o,a),u.fillStyle="rgba(255,255,255,0.12)",u.fillRect(w,S,o,4),u.fillStyle=y,u.textAlign="center",u.textBaseline="middle";let b=30;for(u.font=`700 ${b}px Arial`;u.measureText(v.name).width>o-16&&b>12;)b-=2,u.font=`700 ${b}px Arial`;u.fillText((v.name.toUpperCase,v.name),w+o/2,S+a/2+1),v.kind==="pharmacy"&&(u.fillStyle="#fff",u.fillRect(w+8,S+18,18,6),u.fillRect(w+14,S+12,6,18));let C=Math.min(v.l*.8,1.6+v.name.length*.28),U=C*a/o*1.15,N=-v.nz,T=v.nx,F=v.h-.6-U,k=v.h-.6,X=Math.max(2.6,Math.min(F,3)),V=X+U,q=f.length/3;for(let[O,$]of[[-1,X],[1,X],[1,V],[-1,V]])f.push(v.x+N*O*C/2,$,v.z+T*O*C/2),x.push(v.nx,0,v.nz);let K=w/h.width,lt=(w+o)/h.width,ut=1-(S+a)/h.height,it=1-S/h.height;d.push(lt,ut,K,ut,K,it,lt,it),p.push(q,q+1,q+2,q,q+2,q+3)});let m=new se;m.setAttribute("position",new Wt(f,3)),m.setAttribute("normal",new Wt(x,3)),m.setAttribute("uv",new Wt(d,2)),m.setIndex(p);let g=new Pe(h);g.colorSpace=de,g.anisotropy=4;let M=new wt({map:g,emissiveMap:g,emissive:16777215,emissiveIntensity:.05+this.night*.9,roughness:.5,side:we}),_=new Q(m,M);e.add(_),n.signMat=M,n.signTex=g}_blocked(t,e,n,i){if(this.map.insideBuilding(t,e,i))return!0;let s=this.map.nearestRoad(t,e,14);return!!(s&&s.e!==n&&s.dist<s.e.w/2+i||s&&s.e===n&&s.dist<s.e.w/2+.3)}_curb(t,e,n,i){let s=$c(e),o=e.length/2,a=-1,l=-1;for(let c=0;c<o;c++){let h=s[c*3],u=s[c*3+1],f=s[c*3+2],d=e[c*2]+h*n*f,x=e[c*2+1]+u*n*f,p=-h*i,m=-u*i,g=t.v(d,.15,x,p,0,m,.85,.85,.83),M=t.v(d,0,x,p,0,m,.6,.6,.6);a>=0&&(i>0?t.quad(l,M,g,a):t.quad(l,a,g,M)),a=g,l=M}}_area(t,e,n,i){let s=iv[e.type];if(!s)return;let[o,a,l]=s,c=t[o]||(t[o]=new je),h=e.pts,u=h.length/2,f=[];for(let g=0;g<u;g++)f.push(new j(h[g*2],h[g*2+1]));let d;try{d=yi.triangulateShape(f,[])}catch{return}let x=kn(a),p=c.vc;for(let g=0;g<u;g++)c.v(h[g*2],l,h[g*2+1],0,1,0,x[0],x[1],x[2]);for(let g of d){let[M,_,v]=g,I=h[M*2],w=h[M*2+1],S=h[_*2],R=h[_*2+1],y=h[v*2],b=h[v*2+1];(S-I)*(b-w)-(R-w)*(y-I)<0?c.tri(p+M,p+_,p+v):c.tri(p+M,p+v,p+_)}let m=sv[e.type];if(i&&m&&n){let g=(e.x1-e.x0)*(e.z1-e.z0),M=Math.min(500,Math.floor(g*m)),_=M*3;for(;M>0&&_-- >0;){let v=e.x0+n()*(e.x1-e.x0),I=e.z0+n()*(e.z1-e.z0);if(!qo(v,I,h))continue;let w=this.map.nearestRoad(v,I,10);if(w&&w.dist<w.e.w/2+2||this.map.insideBuilding(v,I,1.5))continue;let S=e.type===2?n()<.5?2:0:n()<.4?3:n()<.7?0:n()<.6?2:1;i[S].push(v,I,.7+n()*.6,n()*6.28),M--}}}_line(t,e,n,i){let s=e.pts;if(e.type===0){let o=t.paving||(t.paving=new je);nn(o,s,-e.w/2,e.w/2,.025,[.95,.93,.9])}else if(e.type===1){let o=t.water||(t.water=new je);nn(o,s,-e.w/2,e.w/2,.005,kn(6982288));let a=t.dirt||(t.dirt=new je);nn(a,s,-e.w/2-2.5,-e.w/2,.004,kn(10129528)),nn(a,s,e.w/2,e.w/2+2.5,.004,kn(10129528))}else if(e.type===2){let o=t.dirt||(t.dirt=new je);nn(o,s,-1.8,1.8,.02,kn(6971992));let a=t.rail||(t.rail=new je);nn(a,s,-.78,-.7,.16,[1,1,1]),nn(a,s,.7,.78,.16,[1,1,1])}else if(e.type===4){let o=t.concrete||(t.concrete=new je);nn(o,s,-e.w/2,e.w/2,.024,[.9,.9,.9]);let a=t.mark||(t.mark=new je({aDash:2}));nn(a,s,-.08,.08,.03,kn(15253552),l=>[l,0])}else if(e.type===5&&i){let o=Ju(s);for(let a=0;a<o[o.length-1];a+=7+n()*3){let l=0;for(;l<o.length-2&&o[l+1]<a;)l++;let c=(a-o[l])/(o[l+1]-o[l]||1);i[n()<.6?1:0].push(s[l*2]+(s[l*2+2]-s[l*2])*c,s[l*2+1]+(s[l*2+3]-s[l*2+1])*c,.8+n()*.4,n()*6)}}}_building(t,e,n,i){let s=e.pts,o=s.length/2,a=0;for(let F=0;F<o;F++){let k=(F+1)%o;a+=s[F*2]*s[k*2+1]-s[k*2]*s[F*2+1]}let l=Math.abs(a)/2,c=e.kind,h=e.h,u=e.minH,f,d,x=3,p=3.2,m=F=>F[Math.floor(n()*F.length)];switch(c===0&&(c=h<7.5?1:h>35?3:2),c){case 1:f=1,d=m(Ci.house),p=3.6;break;case 2:f=2,d=m(Ci.panel),p=3.1;break;case 3:f=3,d=m(Ci.comm),p=2.2,x=3.6;break;case 4:f=4,d=m(Ci.ind),p=4,x=4;break;case 5:f=0,d=9077880;break;case 6:f=0,d=10132122;break;case 7:f=5,d=m(Ci.pub),p=3.4,x=3.8;break;case 8:f=5,d=15921128;break;case 9:f=4,d=11052188;break;case 10:f=6,d=13160664,p=2.5,x=4;break;default:f=2,d=m(Ci.panel)}e.name&&/Historical|Музей|museum|Филармон|Philharmonic|Opera|Театр|Theat/i.test(e.name)&&(f=5,d=15262940);let g=kn(d);if(e.colour)try{let F=new yt(e.colour);(e.colour!=="white"||c!==3)&&(g=[F.r,F.g,F.b])}catch{}let M=.92+n()*.12,_=g[0]*M,v=g[1]*M,I=g[2]*M,w=n()*100,S=(F,k)=>({aInfo:[f,w],aWin:[F,k]}),R=a>0?1:-1,y=0;for(let F=0;F<o;F++){let k=(F+1)%o,X=s[F*2],V=s[F*2+1],q=s[k*2],K=s[k*2+1],lt=q-X,ut=K-V,it=Math.hypot(lt,ut);if(it<.05)continue;let O=ut/it*R,$=-lt/it*R,at=Math.max(1,Math.round(it/p)),st=0,pt=(h-u)/x,Et=t.v(X,u,V,O,0,$,_,v,I,S(0,st)),Tt=t.v(q,u,K,O,0,$,_,v,I,S(at,st)),Ht=t.v(q,h,K,O,0,$,_,v,I,S(at,pt)),nt=t.v(X,h,V,O,0,$,_,v,I,S(0,pt));R>0?(t.tri(Et,Ht,Tt),t.tri(Et,nt,Ht)):(t.tri(Et,Tt,Ht),t.tri(Et,Ht,nt)),i&&h>1.5&&this.addWall(X,V,q,K),y+=it}let b=c===1&&l<260&&o<=8||/gabled|hipped|pitched/.test(e.roofShape||"");if(!b&&h>5&&c!==5&&c!==6){let F=c===3||c===10?1.1:.7,k=[_*.92,v*.92,I*.92],X={aInfo:[0,w],aWin:[0,0]};for(let V=0;V<o;V++){let q=(V+1)%o,K=s[V*2],lt=s[V*2+1],ut=s[q*2],it=s[q*2+1],O=Math.hypot(ut-K,it-lt);if(O<.05)continue;let $=(it-lt)/O*R,at=-(ut-K)/O*R,st=t.v(K,h,lt,$,0,at,k[0],k[1],k[2],X),pt=t.v(ut,h,it,$,0,at,k[0],k[1],k[2],X),Et=t.v(ut,h+F,it,$,.2,at,k[0],k[1],k[2],X),Tt=t.v(K,h+F,lt,$,.2,at,k[0],k[1],k[2],X);R>0?(t.tri(st,Et,pt),t.tri(st,Tt,Et),t.tri(st,pt,Et),t.tri(st,Et,Tt)):(t.tri(st,pt,Et),t.tri(st,Et,Tt),t.tri(st,Et,pt),t.tri(st,Tt,Et))}}if(b){this._gableRoof(t,e,h,g,n,l);return}let C=[];for(let F=0;F<o;F++)C.push(new j(s[F*2],s[F*2+1]));let U;try{U=yi.triangulateShape(C,[])}catch{return}let N=c===10?[.55,.57,.6]:c===3?[.32,.34,.36]:[.36+n()*.12,.35+n()*.1,.33+n()*.08],T=t.vc;for(let F=0;F<o;F++)t.v(s[F*2],h,s[F*2+1],0,1,0,N[0],N[1],N[2],{aInfo:[0,w],aWin:[s[F*2],s[F*2+1]]});for(let F of U){let[k,X,V]=F,q=s[k*2],K=s[k*2+1],lt=s[X*2],ut=s[X*2+1],it=s[V*2],O=s[V*2+1];(lt-q)*(O-K)-(ut-K)*(it-q)<0?t.tri(T+k,T+X,T+V):t.tri(T+k,T+V,T+X)}if((c===2||c===3)&&l>350&&h>12){let F=Math.min(3,Math.floor(l/400));for(let k=0;k<F;k++){let X=(k+.5)/F,V=e.x0+(e.x1-e.x0)*X,q=e.z0+(e.z1-e.z0)*X;qo(V,q,s)&&this._box(t,V,h,q,2.6,2.4,3.2,[N[0]*1.3,N[1]*1.3,N[2]*1.3],w)}}}_box(t,e,n,i,s,o,a,l,c){let h=s/2,u=a/2,f=[[e-h,i-u],[e+h,i-u],[e+h,i+u],[e-h,i+u]],d={aInfo:[0,c],aWin:[0,0]};for(let p=0;p<4;p++){let[m,g]=f[p],[M,_]=f[(p+1)%4],v=M-m,I=_-g,w=Math.hypot(v,I),S=I/w,R=-v/w,y=t.v(m,n,g,S,0,R,l[0],l[1],l[2],d),b=t.v(M,n,_,S,0,R,l[0],l[1],l[2],d),C=t.v(M,n+o,_,S,0,R,l[0],l[1],l[2],d),U=t.v(m,n+o,g,S,0,R,l[0],l[1],l[2],d);t.tri(y,C,b),t.tri(y,U,C)}let x=f.map(([p,m])=>t.v(p,n+o,m,0,1,0,l[0],l[1],l[2],d));t.tri(x[0],x[2],x[1]),t.tri(x[0],x[3],x[2])}_gableRoof(t,e,n,i,s,o){let a=e.pts,l=a.length/2,c=0,h=1,u=0;for(let q=0;q<l;q++){let K=(q+1)%l,lt=a[K*2]-a[q*2],ut=a[K*2+1]-a[q*2+1],it=Math.hypot(lt,ut);it>c&&(c=it,h=lt/it,u=ut/it)}let f=-u,d=h,x=1e9,p=-1e9,m=1e9,g=-1e9;for(let q=0;q<l;q++){let K=a[q*2]*h+a[q*2+1]*u,lt=a[q*2]*f+a[q*2+1]*d;x=Math.min(x,K),p=Math.max(p,K),m=Math.min(m,lt),g=Math.max(g,lt)}let M=.35;x-=M,p+=M,m-=M,g+=M;let _=(q,K)=>[q*h+K*f,q*u+K*d],v=Math.min(2.6,(g-m)*.38),I=(m+g)/2,w=kn(Ci.roofHouse[Math.floor(s()*Ci.roofHouse.length)]);if(e.roofColour)try{let q=new yt(e.roofColour);w=[q.r,q.g,q.b]}catch{}let S={aInfo:[0,0],aWin:[0,0]},R=n-.05,y=_(x,m),b=_(p,m),C=_(p,g),U=_(x,g),N=_(x,I),T=_(p,I),F=(q,K,lt,ut,it)=>{let O=(I-(it<0?m:g)===0,1),$=v/((g-m)/2),at=f*it*$,st=d*it*$,pt=Math.hypot(at,1,st),Et=t.v(q[0],R,q[1],at/pt,O/pt,st/pt,w[0],w[1],w[2],S),Tt=t.v(K[0],R,K[1],at/pt,O/pt,st/pt,w[0],w[1],w[2],S),Ht=t.v(lt[0],R+v,lt[1],at/pt,O/pt,st/pt,w[0]*1.1,w[1]*1.1,w[2]*1.1,S),nt=t.v(ut[0],R+v,ut[1],at/pt,O/pt,st/pt,w[0]*1.1,w[1]*1.1,w[2]*1.1,S);return[Et,Tt,Ht,nt]},k=F(y,b,T,N,-1),X=F(C,U,N,T,1),V=q=>{let[K,lt,ut]=q.map(Et=>[t.p[Et*3],t.p[Et*3+1],t.p[Et*3+2]]),it=lt[0]-K[0],O=lt[1]-K[1],$=lt[2]-K[2],at=ut[0]-K[0],st=ut[1]-K[1],pt=ut[2]-K[2];return $*at-it*pt>0};for(let q of[k,X])V(q)?(t.tri(q[0],q[1],q[2]),t.tri(q[0],q[2],q[3])):(t.tri(q[0],q[2],q[1]),t.tri(q[0],q[3],q[2]));for(let[q,K,lt,ut]of[[y,U,N,-1],[b,C,T,1]]){let it=h*ut,O=u*ut,$=t.v(q[0],R,q[1],it,0,O,i[0],i[1],i[2],S),at=t.v(K[0],R,K[1],it,0,O,i[0],i[1],i[2],S),st=t.v(lt[0],R+v,lt[1],it,0,O,i[0],i[1],i[2],S);t.tri($,at,st),t.tri($,st,at)}}setNight(t){if(Math.abs((this.night||0)-t)>.02)for(let e of this.live.values())e.signMat&&(e.signMat.emissiveIntensity=.05+t*.9);this.night=t,An.uNight.value=t,this.mat.lampGlow.emissiveIntensity=t*3,this.mat.lampGlow.color.setScalar(.2+t*.8)}collide(t,e,n,i){let s=this.CG,o=Math.floor((t-n)/s),a=Math.floor((t+n)/s),l=Math.floor((e-n)/s),c=Math.floor((e+n)/s),h=!1;i.x=0,i.z=0,i.nx=0,i.nz=0;let u=t,f=e;for(let d=o;d<=a;d++)for(let x=l;x<=c;x++){let p=this.collision.get(Oe(d,x));if(p)for(let m=0;m<p.length;m+=4){let g=p[m],M=p[m+1],_=p[m+2],v=p[m+3],I=_-g,w=v-M,S=I*I+w*w||1e-6,R=((u-g)*I+(f-M)*w)/S;R=R<0?0:R>1?1:R;let y=g+I*R,b=M+w*R,C=u-y,U=f-b,N=Math.hypot(C,U);if(N<n&&N>1e-5){let T=n-N;u+=C/N*T,f+=U/N*T,i.nx+=C/N,i.nz+=U/N,h=!0}}}if(h){i.x=u-t,i.z=f-e;let d=Math.hypot(i.nx,i.nz)||1;i.nx/=d,i.nz/=d}return h}};var Ys=class r extends Q{constructor(){let t=r.SkyShader,e=new xe({name:t.name,uniforms:Nn.clone(t.uniforms),vertexShader:t.vertexShader,fragmentShader:t.fragmentShader,side:Ke,depthWrite:!1});super(new Dt(1,1,1),e),this.isSky=!0}};Ys.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new L},up:{value:new L(0,1,0)}},vertexShader:`
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

		}`};var jo=class{constructor(t,e){this.renderer=t,this.scene=e,this.bg=new Xi,this.bgCam=new ke(60,1,50,2e5),this.sky=new Ys,this.sky.scale.setScalar(15e4);let n=this.sky.material.uniforms;n.turbidity.value=2.6,n.rayleigh.value=2.2,n.mieCoefficient.value=.004,n.mieDirectionalG.value=.85;for(let s of[this.sky])s.material.fragmentShader=s.material.fragmentShader.replace("gl_FragColor = vec4( retColor, 1.0 );","gl_FragColor = vec4( min( retColor, vec3( 24.0 ) ), 1.0 );");this.bg.add(this.sky),this._stars(),this._mountains(),this.sunDir=new L,this.sun=new Oo(16777215,3),this.sun.castShadow=!0;let i=this.sun.shadow;i.mapSize.set(2048,2048),i.camera.left=-110,i.camera.right=110,i.camera.top=110,i.camera.bottom=-110,i.camera.near=10,i.camera.far=900,i.bias=-5e-4,i.normalBias=.35,i.camera.updateProjectionMatrix(),e.add(this.sun,this.sun.target),this.hemi=new Bo(12572927,6971464,1),e.add(this.hemi),e.fog=new To(13162208,300,2600),this.pmrem=new Bs(t),this.envScene=new Xi,this.envSky=new Ys,this.envSky.scale.setScalar(1e3),this.envScene.add(this.envSky),this.lastEnvHour=-10,this.hour=10,this.night=0}_stars(){let t=Tn(5),e=2500,n=new Float32Array(e*3);for(let s=0;s<e;s++){let o=t()*Math.PI*2,a=Math.acos(t()*.95);n[s*3]=Math.sin(a)*Math.cos(o)*1e5,n[s*3+1]=Math.cos(a)*1e5,n[s*3+2]=Math.sin(a)*Math.sin(o)*1e5}let i=new se;i.setAttribute("position",new le(n,3)),this.starMat=new qi({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,opacity:0,fog:!1,depthWrite:!1}),this.stars=new ii(i,this.starMat),this.bg.add(this.stars)}_mountains(){let t=Tn(99),e=260,n=70,i=new Ee(22e4,52e3,e,n).rotateX(-Math.PI/2),s=i.attributes.position,o=(h,u)=>{let f=0,d=1,x=1/9e3;for(let p=0;p<6;p++)f+=d*(Math.sin(h*x+p*1.7)*Math.cos(u*x*1.3-p)+Math.sin((h+u)*x*.7+p*3.1)*.6),d*=.5,x*=2.1;return f};for(let h=0;h<s.count;h++){let u=s.getX(h),d=s.getZ(h)+26e3+26e3,x=d-26e3,p=Math.min(1,Math.max(0,(x+6e3)/14e3)),m=Math.exp(-((x-16e3)**2)/(2*9e3**2)),g=p*p*900+m*3400*(.75+.35*o(u,d))+Math.abs(o(u*1.7,d*1.7))*600*p;g*=Math.min(1,Math.max(.15,1-Math.abs(u)/12e4)),s.setXYZ(h,u,Math.max(-40,g-120),d)}i.computeVertexNormals();let a=new Ee(22e4,3e4,160,20).rotateX(-Math.PI/2),l=a.attributes.position;for(let h=0;h<l.count;h++){let u=l.getX(h),f=l.getZ(h)-7e4,d=Math.max(0,(Math.abs(f+7e4-15e3)<15e3?1:0)*(300+500*Math.abs(o(u*.6,f*.6)))*Math.min(1,-(f+55e3)/12e3));l.setXYZ(h,u,d-80,f)}a.computeVertexNormals(),this.mtnMat=new xe({uniforms:{sunDir:{value:new L(0,1,0)},fogCol:{value:new yt(13162208)},light:{value:1},camPos:{value:new L}},vertexShader:`varying vec3 vN; varying vec3 vW;
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
        }`,fog:!1}),this.mountains=new Q(i,this.mtnMat),this.hills=new Q(a,this.mtnMat);let c=new Q(new Ee(4e5,4e5,1,1).rotateX(-Math.PI/2),this.mtnMat);c.position.y=-6,this.plain=c,this.bg.add(this.mountains,this.hills,c),this._clouds()}_clouds(){this.cloudMat=new xe({uniforms:{uTime:An.uTime,sunDir:{value:new L(0,1,0)},day:{value:1},fogCol:{value:new yt},cover:{value:.45},camPos:{value:new L}},vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix*vec4(position,1.0); vW = w.xyz; gl_Position = projectionMatrix*viewMatrix*w; }",fragmentShader:`uniform float uTime; uniform vec3 sunDir; uniform float day; uniform vec3 fogCol; uniform float cover; uniform vec3 camPos; varying vec3 vW;
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
        }`,transparent:!0,depthWrite:!1,fog:!1,side:we}),this.cloudsMesh=new Q(new Ee(16e4,16e4,1,1).rotateX(-Math.PI/2),this.cloudMat),this.cloudsMesh.position.y=2600,this.bg.add(this.cloudsMesh)}setHour(t){this.hour=(t%24+24)%24}update(t,e){let n=this.hour,i=(n-6.2)/12.6,s=Math.sin(i*Math.PI)*62*Math.PI/180-(i<0||i>1?.25:0),o=Math.PI*Math.max(-.2,Math.min(1.2,i)),a=Math.max(-.5,s);this.sunDir.set(Math.cos(a)*Math.cos(o),Math.sin(a),Math.cos(a)*Math.sin(o)*.8+.25).normalize(),this.sky.material.uniforms.sunPosition.value.copy(this.sunDir),this.envSky.material.uniforms.sunPosition.value.copy(this.sunDir);let c=ze.smoothstep(this.sunDir.y,-.08,.18),h=Math.exp(-((this.sunDir.y-.06)**2)/.006);this.night=1-ze.smoothstep(this.sunDir.y,-.12,.05),this.sun.intensity=3.2*c,this.sun.color.setRGB(1,.92-h*.25,.82-h*.45),c<.15&&(this.sun.intensity=.55*(1-c/.15)+3.2*c,this.sun.color.setRGB(.62,.72,1)),this.hemi.intensity=.25+.9*c,this.hemi.color.setRGB(.55+.2*c,.62+.22*c,.85+.1*c).multiplyScalar(.5+.5*c),this.night>.5&&(this.hemi.color.setRGB(.42,.5,.75),this.hemi.intensity=.6),this.hemi.groundColor.setRGB(.42*(.3+c),.38*(.3+c),.3*(.3+c));let u=new yt().setRGB(.55,.66,.8).lerp(new yt(.92,.66,.45),h*.55).multiplyScalar(.08+.92*c);this.night>.5&&u.setRGB(.05,.065,.1),this.scene.fog.color.copy(u),this.mtnMat.uniforms.fogCol.value.copy(u),this.mtnMat.uniforms.sunDir.value.copy(this.sunDir),this.mtnMat.uniforms.light.value=.12+.95*c,this.mtnMat.uniforms.camPos.value.copy(t.position),this.starMat.opacity=this.night,this.cloudMat.uniforms.sunDir.value.copy(this.sunDir),this.cloudMat.uniforms.day.value=c,this.cloudMat.uniforms.fogCol.value.copy(u),this.cloudMat.uniforms.camPos.value.copy(t.position),this.cloudsMesh.position.x=t.position.x,this.cloudsMesh.position.z=t.position.z;let f=this.sunDir.y>.05?this.sunDir:new L(-.4,.8,.3).normalize();return this.sun.position.set(e.x+f.x*400,f.y*400,e.z+f.z*400),this.sun.target.position.set(e.x,0,e.z),this.sun.shadow.camera.updateMatrixWorld(),this.bgCam.position.copy(t.position),this.bgCam.quaternion.copy(t.quaternion),this.bgCam.fov=t.fov,this.bgCam.aspect=t.aspect,this.bgCam.updateProjectionMatrix(),this.mountains.position.set(0,0,0),this.plain.position.x=t.position.x,this.plain.position.z=t.position.z,this.sky.position.copy(t.position),this.stars.position.copy(t.position),Math.abs(n-this.lastEnvHour)>.2&&(this.lastEnvHour=n,this.envRT&&this.envRT.dispose(),this.envRT=this.pmrem.fromScene(this.envScene,0,1,2e3),this.scene.environment=this.envRT.texture,this.scene.environmentIntensity=.15+.85*c),{day:c,night:this.night}}render(t){t.render(this.bg,this.bgCam)}};function rv(r,t){let e=[],n=r.length;for(let i=0;i<n;i++){let s=r[i],o=r[(i-1+n)%n],a=r[(i+1)%n],l=[o[0]-s[0],o[1]-s[1]],c=[a[0]-s[0],a[1]-s[1]],h=Math.hypot(...l),u=Math.hypot(...c),f=Math.min(t,h*.45,u*.45);if(s[1]<.5&&(o[1]<.5||a[1]<.5)||f<.01){e.push(s);continue}let x=[s[0]+l[0]/h*f,s[1]+l[1]/h*f],p=[s[0]+c[0]/u*f,s[1]+c[1]/u*f];for(let m=0;m<=4;m++){let g=m/4,M=1-g;e.push([M*M*x[0]+2*M*g*s[0]+g*g*p[0],M*M*x[1]+2*M*g*s[1]+g*g*p[1]])}}return e}function Qc(r,t,e=.05,n={}){let i=n.fillet?rv(r,n.fillet):r,s=new En;s.moveTo(i[0][0],i[0][1]);for(let a=1;a<i.length;a++)s.lineTo(i[a][0],i[a][1]);s.closePath();let o=new Un(s,{depth:t-e*2,steps:n.steps||1,bevelEnabled:e>0,bevelThickness:e,bevelSize:e,bevelSegments:3,curveSegments:1});if(o.rotateY(-Math.PI/2),o.translate((t-e*2)/2,0,0),n.shape){let{L:a,W:l,belt:c,top:h,taper:u=.12,tumble:f=.14}=n.shape,d=o.attributes.position;for(let x=0;x<d.count;x++){let p=d.getX(x),m=d.getY(x),g=d.getZ(x),M=Math.min(1,Math.abs(g)/(a/2)),_=1-u*Math.pow(M,3);m>c&&(_*=1-f*Math.min(1,(m-c)/Math.max(.1,h-c))),d.setX(x,p*_),Math.abs(p)>l*.3&&m>c*.7&&d.setY(x,m-.02*Math.pow(Math.abs(p)/(l/2),4))}o.computeVertexNormals()}return o}var $e=(r,t,e,n,i,s)=>new Dt(r,t,e).translate(n,i,s),ov={sedan:{L:4.7,W:1.82,wr:.33,wb:2.75,track:1.56,body:[[-2.35,.32],[-2.37,.62],[-2.27,.92],[-1.45,.99],[.75,.99],[2.1,.86],[2.35,.68],[2.33,.32]],cabin:[[-1.48,.96],[-.85,1.4],[.42,1.42],[.85,1.2],[.98,.96]],cabinW:.86,roof:[[-.86,1.38],[.42,1.38],[.42,1.45],[-.84,1.45]],head:{z:2.31,y:.74,x:.62,w:.42,h:.13},tail:{z:-2.35,y:.82,x:.66,w:.4,h:.12},mass:1450,power:165,vmax:230},hatch:{L:4,W:1.7,wr:.31,wb:2.5,track:1.48,body:[[-2,.32],[-2.02,.7],[-1.98,1],[.55,.98],[1.75,.84],[2,.66],[1.98,.32]],cabin:[[-1.98,.96],[-1.86,1.48],[.2,1.52],[.72,1.18],[.82,.96]],cabinW:.86,roof:[[-1.84,1.46],[.22,1.48],[.2,1.55],[-1.82,1.53]],head:{z:1.96,y:.76,x:.58,w:.38,h:.13},tail:{z:-2.02,y:.9,x:.62,w:.25,h:.2},mass:1150,power:110,vmax:190},suv:{L:4.95,W:1.97,wr:.4,wb:2.85,track:1.66,body:[[-2.48,.45],[-2.5,.85],[-2.45,1.28],[1,1.28],[2.25,1.15],[2.48,.9],[2.47,.45]],cabin:[[-2.42,1.25],[-2.3,1.82],[.55,1.86],[1.05,1.5],[1.2,1.25]],cabinW:.88,roof:[[-2.28,1.8],[.55,1.84],[.53,1.92],[-2.26,1.88]],head:{z:2.45,y:1,x:.68,w:.42,h:.15},tail:{z:-2.5,y:1.15,x:.75,w:.25,h:.3},mass:2300,power:280,vmax:210},coupe:{L:4.55,W:1.92,wr:.34,wb:2.6,track:1.62,body:[[-2.27,.28],[-2.3,.6],[-2.15,.84],[-1.2,.88],[.7,.88],[2,.72],[2.28,.52],[2.26,.28]],cabin:[[-1.25,.85],[-.45,1.24],[.25,1.26],[.9,.98],[1.1,.85]],cabinW:.82,roof:[[-.46,1.22],[.24,1.24],[.22,1.29],[-.44,1.27]],head:{z:2.22,y:.6,x:.66,w:.44,h:.1},tail:{z:-2.29,y:.74,x:.4,w:.8,h:.08},mass:1500,power:420,vmax:300},oldsedan:{L:4.1,W:1.62,wr:.3,wb:2.42,track:1.36,body:[[-2.05,.34],[-2.07,.72],[-2.02,.92],[-1.25,.94],[.7,.94],[1.95,.9],[2.06,.74],[2.05,.34]],cabin:[[-1.27,.92],[-.95,1.4],[.42,1.4],[.72,.92]],cabinW:.88,roof:[[-.95,1.37],[.42,1.37],[.42,1.44],[-.95,1.44]],head:{z:2.04,y:.72,x:.55,w:.22,h:.18},tail:{z:-2.07,y:.8,x:.55,w:.35,h:.14},mass:1050,power:75,vmax:150},van:{L:6.6,W:2,wr:.36,wb:3.66,track:1.72,body:[[-3.3,.42],[-3.3,1.2],[2.35,1.2],[3.2,1.05],[3.3,.8],[3.28,.42]],cabin:[[-3.28,1.17],[-3.28,2.55],[1.85,2.58],[2.55,1.6],[2.85,1.17]],cabinW:.98,roof:[[-3.3,2.5],[1.8,2.52],[1.8,2.72],[-3.3,2.7]],head:{z:3.28,y:1,x:.7,w:.35,h:.18},tail:{z:-3.31,y:1,x:.85,w:.18,h:.45},mass:3400,power:160,vmax:160},bus:{L:11.8,W:2.5,wr:.5,wb:6,track:2.1,wbOff:-.6,body:[[-5.9,.4],[-5.9,1.25],[5.9,1.25],[5.9,.4]],cabin:[[-5.88,1.22],[-5.88,2.75],[5.8,2.75],[5.9,1.22]],cabinW:.99,roof:[[-5.9,2.7],[5.85,2.7],[5.85,3.1],[-5.9,3.1]],head:{z:5.92,y:.8,x:.95,w:.35,h:.18},tail:{z:-5.92,y:1,x:1,w:.2,h:.4},mass:11e3,power:230,vmax:100},truck:{L:7.2,W:2.4,wr:.5,wb:4.2,track:2,wbOff:-.4,body:[[-3.6,.6],[-3.6,1.1],[3.6,1.1],[3.6,.6]],cabin:[[2.05,1.08],[2.05,2.75],[3.15,2.75],[3.55,1.9],[3.6,1.08]],cabinW:.98,roof:[[2.05,2.72],[3.15,2.72],[3.15,2.8],[2.05,2.8]],cargo:[-3.6,1.95,1,3.3],head:{z:3.62,y:.95,x:.95,w:.3,h:.18},tail:{z:-3.62,y:.9,x:1,w:.25,h:.15},mass:9e3,power:300,vmax:110}},av=1844524,lv=1447446,cv=12106944,Qo=2105892,hv=13159632;function Bn(r,t={}){let e=ov[r],n=[],i=[],s=[],o=e.W,a=e.cabin[0][1],l=e.roof[2][1],c=r==="bus"||r==="truck",h=c?null:{L:e.L,W:o,belt:a*.75,top:l,taper:r==="van"?.06:.13,tumble:.05};n.push(Qc(e.body,o,.08,{fillet:c?.08:.22,steps:4,shape:h}));let u=o*e.cabinW,f=c?null:{L:e.L,W:u,belt:a,top:l,taper:.1,tumble:r==="van"?.05:.2};if(i.push(It(Qc(e.cabin,u,.04,{fillet:c?.05:.12,steps:3,shape:f}),av)),n.push(Qc(e.roof,u+.03,.02,{fillet:.04,steps:2,shape:f&&{...f,W:u+.03}})),!c)for(let[y,b,C]of hf(e)){let U=new Vt(e.wr*1.18,e.wr*1.18,.06,18,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(Math.PI/2);i.push(It(U.translate(Math.sign(y)*(o/2-.02),b,C),657930))}if(!c)for(let y of[-1,1])i.push(It($e(.012,a-e.body[0][1]-.15,.02,y*(o/2+.003),(a+e.body[0][1])/2,e.cabin[e.cabin.length-2][0]-.1),1118481)),i.push(It($e(.012,a-e.body[0][1]-.15,.02,y*(o/2+.003),(a+e.body[0][1])/2,(e.cabin[0][0]+e.cabin[1][0])/2+.2),1118481)),i.push(It($e(.02,.05,e.L*.5,y*(o/2+.005),a-.03,0),10133670));if(e.cargo){let[y,b,C,U]=e.cargo;n.push($e(o,U-C,b-y,0,(C+U)/2,(y+b)/2))}if(r==="van"||r==="bus"){let y=r==="bus"?7:4,b=e.cabin[0][0],C=e.cabin[3][0]-(r==="van"?.7:.2);for(let U=0;U<=y;U++){let N=b+(C-b)*U/y;n.push($e(u+.04,e.cabin[1][1]-e.cabin[0][1],.12,0,(e.cabin[0][1]+e.cabin[1][1])/2,N+.06))}}let d=e.body[0][1],x=e.head.z,p=e.tail.z;i.push(It($e(o+.02,.16,.12,0,d+.12,x-.02),Qo)),i.push(It($e(o+.02,.16,.12,0,d+.12,p+.02),Qo)),i.push(It($e(o*.45,e.head.h*1.3,.05,0,e.head.y-.04,x+.01),789516)),i.push(It($e(o+.03,.1,e.L*.55,0,d+.04,0),Qo));let m=(e.cabin[e.cabin.length-1][0]+e.cabin[e.cabin.length-2][0])/2;for(let y of[-1,1])i.push(It($e(.2,.12,.1,y*(o/2+.08),e.cabin[0][1]+.12,m-.1),Qo));i.push(It($e(.52,.12,.02,0,d+.3,x+.06),15921906)),i.push(It($e(.52,.12,.02,0,d+.42,p-.06),15921906));let g=e.head,M=e.tail;for(let y of[-1,1])s.push(It($e(g.w,g.h,.06,y*g.x,g.y,g.z),16774880)),s.push(It($e(M.w,M.h,.06,y*M.x,M.y,M.z),16718352,.9));t.taxi&&i.push(It($e(.6,.18,.25,0,e.roof[2][1]+.09,-.2),15909376)),r==="van"&&i.push(It($e(.9,.22,.03,.2,2.25,2),15786032)),r==="bus"&&i.push(It($e(1.6,.3,.05,0,2.55,5.92),16747024));let _=uv(e.wr,r==="bus"||r==="truck"?.32:.23),v=hf(e),I=Qe(v.map(([y,b,C])=>_.clone().translate(y,b,C))),w=Qe(n.map(y=>It(y,16777215))),S=Qe([...i,I]),R=Qe(s);return{paint:w,detail:S,lights:R,wheel:_,wheelPos:v,spec:e,detailNoWheels:Qe(i)}}function hf(r){let t=r.wbOff||0,e=r.wb/2+t,n=-r.wb/2+t,i=r.track/2;return[[-i,r.wr,e],[i,r.wr,e],[-i,r.wr,n],[i,r.wr,n]]}function uv(r,t){let e=It(new Vt(r,r,t,16).rotateZ(Math.PI/2),lv),n=It(new Vt(r*.62,r*.62,t+.02,10).rotateZ(Math.PI/2),cv),i=It(new Vt(r*.18,r*.18,t+.04,6).rotateZ(Math.PI/2),hv),s=[];for(let o=0;o<5;o++){let a=new Dt(t+.03,r*1.15,r*.12).rotateX(o/5*Math.PI);s.push(It(a,9080466))}return Qe([e,n,i,...s])}function uf(r="01KG 777 ABC"){let t=document.createElement("canvas");t.width=256,t.height=56;let e=t.getContext("2d");e.fillStyle="#f4f4f4",e.fillRect(0,0,256,56),e.strokeStyle="#111",e.lineWidth=3,e.strokeRect(2,2,252,52),e.fillStyle="#d0141e",e.fillRect(6,6,36,44),e.fillStyle="#ffd23a",e.beginPath(),e.arc(24,22,9,0,7),e.fill(),e.fillStyle="#fff",e.font="bold 12px Arial",e.textAlign="center",e.fillText("KG",24,46),e.fillStyle="#111",e.font="bold 34px Arial",e.textAlign="left",e.fillText(r.replace("KG","").replace(/\s+/," "),50,41);let n=new Pe(t);return n.colorSpace=de,n.anisotropy=4,n}var th=[15921906,15921906,15263976,1118740,1711134,9212054,11054514,5922918,2767450,6953498,10127984,3820090,13154458,2109504,11542560,4219002];var ta=class{constructor(t,e="sedan",n){this.scene=t,this.group=new Yt,this.body=new Yt,this.group.add(this.body),t.add(this.group),this.x=0,this.z=0,this.h=0,this.vx=0,this.vz=0,this.r=0,this.steer=0,this.throttle=0,this.brake=0,this.hand=!1,this.rpm=900,this.gear=1,this.damage=0,this.pitch=0,this.roll=0,this.pitchV=0,this.rollV=0,this.slip=0,this.speed=0,this.spin=0,this._skid(),this._smoke(),this.setType(e,n)}setType(t,e){for(this.type=t;this.body.children.length;)this.body.children.pop().traverse?.(m=>{m.geometry&&m.geometry.dispose()});let n=Bn(t,{});this.spec=n.spec;let i=e??15790320;this.paintMat=new Si({color:i,metalness:.55,roughness:.3,clearcoat:1,clearcoatRoughness:.06,vertexColors:!0,envMapIntensity:1.2});let s=new wt({vertexColors:!0,metalness:.3,roughness:.25});this.lightMat=new wt({vertexColors:!0,emissive:16777215,emissiveIntensity:.4,roughness:.2});let o=new Q(n.paint,this.paintMat);o.castShadow=!0;let a=new Q(n.detailNoWheels,s);a.castShadow=!0,this.paintMesh=o,this.detailMesh=a,this.damage=0,this.dents=0,this.lightMesh=new Q(n.lights,this.lightMat),this.body.add(o,a,this.lightMesh);let l=n.spec;this.brakeMat=new pe({color:16719888,transparent:!0,opacity:0,blending:qe,depthWrite:!1});for(let p of[-1,1]){let m=new Q(new Ee(l.tail.w*2.2,l.tail.h*4),this.brakeMat);m.position.set(p*l.tail.x,l.tail.y,l.tail.z-.06),m.rotation.y=Math.PI,this.body.add(m)}this.flareMat=new pe({color:16773840,transparent:!0,opacity:0,blending:qe,depthWrite:!1});for(let p of[-1,1]){let m=new Q(new wi(.45,16),this.flareMat);m.position.set(p*l.head.x,l.head.y,l.head.z+.08),this.body.add(m)}let c=uf("01KG "+String(100+Math.floor(Math.random()*899))+" "+"ABK"[Math.floor(Math.random()*3)]+"KG"[Math.floor(Math.random()*2)]+"B"),h=new pe({map:c}),u=new Q(new Ee(.52,.12),h);u.position.set(0,l.body[0][1]+.3,l.head.z+.075);let f=new Q(new Ee(.52,.12),h);f.position.set(0,l.body[0][1]+.42,l.tail.z-.075),f.rotation.y=Math.PI,this.body.add(u,f);let d=new Q(new Re(.13,10,8),new wt({color:2760736}));d.position.set(.38,l.cabin[0][1]+.38,(l.cabin[1][0]+l.cabin[2][0])/2+.25),this.body.add(d),this.wheels=[];let x=new wt({vertexColors:!0,roughness:.6,metalness:.3});for(let[p,m,g]of n.wheelPos){let M=new Yt;M.position.set(p,m,g);let _=new Q(n.wheel,x);_.castShadow=!0,M.add(_),this.group.add(M),this.wheels.push({pivot:M,mesh:_,front:g>0})}this.spot?(this.spot.position.set(0,.8,l.head.z),this.spotTarget.position.set(0,0,l.head.z+25)):(this.spot=new Fo(16773336,0,90,.55,.5,1.2),this.spot.position.set(0,.8,l.head.z),this.spotTarget=new Le,this.spotTarget.position.set(0,0,l.head.z+25),this.spot.target=this.spotTarget,this.group.add(this.spot,this.spotTarget)),this.mass=l.mass,this.power=l.power*745.7,this.vmax=l.vmax/3.6,this.drag=this.power/Math.pow(this.vmax,3),this.inertia=this.mass*(l.L*l.L+l.W*l.W)/12*1.1,this.a=l.wb/2+(l.wbOff||0),this.b=l.wb/2-(l.wbOff||0),this.radius=l.W/2+.05,this.color=i}dent(t,e,n){let i=t-this.x,s=e-this.z,o=Math.cos(this.h),a=Math.sin(this.h),l=i*o-s*a,c=i*a+s*o,h=1.25,u=this.spec.roof[2][1];for(let f of[this.paintMesh,this.detailMesh]){let d=f.geometry.attributes.position;for(let x=0;x<d.count;x++){let p=d.getX(x),m=d.getY(x),g=d.getZ(x),M=Math.hypot(p-l,g-c);if(M>h||m>u+.1)continue;let _=Math.pow(1-M/h,2)*n,v=Math.hypot(p,g*.35)||1;d.setXYZ(x,p-p/v*_*.6-Math.sign(l)*0,m-_*.15*(m>.9?1:.3),g-Math.sign(g)*_*(Math.abs(c)>this.spec.L*.3?.5:.1))}d.needsUpdate=!0}this.dents++}repair(){this.setType(this.type,this.color)}setColor(t){this.paintMat.color.setHex(t),this.color=t}place(t,e,n){this.x=t,this.z=e,this.h=n,this.vx=this.vz=this.r=0,this.steer=0}get forward(){return[Math.sin(this.h),Math.cos(this.h)]}update(t,e,n,i,s){let a=t/3;for(let l=0;l<3;l++)this._step(a,e,n,i,s);this._visual(t,e)}_step(t,e,n,i,s){let o=this.assists||(this.assists={abs:!0,tcs:!0,esc:!0,steerAssist:!0,sens:1,manual:!1}),a=Math.sin(this.h),l=Math.cos(this.h),c=-Math.cos(this.h),h=Math.sin(this.h),u=this.vx*a+this.vz*l,f=this.vx*c+this.vz*h,d=9.81,x=this.mass,p=Math.abs(u),m=this.surface??1,g=.6/(1+p/14)*(.75+.5*o.sens),M=-e.steer*g;o.steerAssist&&!e.hand&&p>6&&this.rearSlip&&(M+=ze.clamp(this.rearSlip*.55,-.25,.25));let _=(e.steer===0?5.5:4.2)/(1+p/45);this.steer+=ze.clamp(M-this.steer,-_*t,_*t);let v=this.steer,I=this._gearbox(e),w=0,S=e.throttle,R=e.brake;this.braking=!1,this.reversing=!1;let y=p<.6;R>0&&y?this.stopHold=(this.stopHold||0)+t:R===0&&(this.stopHold=0);let b=R>0&&(u<-.3||y&&this.stopHold>.2);if(S>0){if(u<-.5)w+=1*x*d*S,this.braking=!0;else if(!this.limiter){let it=this.power*I/Math.max(3,u)*S,O=(o.tcs?.92:1.15)*x*d*.6*m;!o.tcs&&it>O&&p<25?this.wheelspin=Math.min(1,(it-O)/O):this.wheelspin=0,w+=Math.min(O,it)}}else this.wheelspin=0;if(R>0){if(b)this.reversing=!0,u>-8&&(w-=x*3.4*R);else if(u>.3){let it=o.abs?1:1.12;w-=it*x*d*R*m,this.braking=!0,!o.abs&&R>.9&&p>4?this.locked=!0:this.locked=!1}}else this.locked=!1;e.hand&&(w-=Math.sign(u)*Math.min(Math.abs(u)*x*3,.55*x*d)),w-=this.drag*u*Math.abs(u)+(.015*x*d*Math.sign(u)+4*u)*Math.min(1,Math.abs(u))*(m<1?3.5:1),S===0&&R===0&&p<.4&&(u*=.85);let C=this.a,U=this.b,N=C+U,T=ze.clamp(x*(this.accLong||0)*.55/N,-x*d*.3,x*d*.3),F=x*d*U/N-T,k=x*d*C/N+T,X=1.08*m,V=0,q=0;if(p>1.2){let it=Math.atan2(f-this.r*C,p)+v*Math.sign(u),O=Math.atan2(f+this.r*U,p),$=10*F,at=11*k,st=Math.min(.9,Math.abs(w)/(X*(F+k))*(S>0?1.2:.6)),pt=Math.sqrt(1-st*st);e.hand&&(pt=.38),this.wheelspin&&(pt*=1-.5*this.wheelspin);let Et=this.locked?.25:1,Tt=X*F*Et,Ht=X*k*pt;V=-Tt*Math.tanh($*it/Tt),q=-Ht*Math.tanh(at*O/Ht),this.rearSlip=O,this.slip=Math.max(Math.abs(O)*(e.hand?2.4:1.6),Math.abs(it)*.7,this.wheelspin*.8,this.locked?.6:0)*Math.min(1,p/8);let nt=-V*Math.cos(v)*C+q*U;if(this.r+=nt/this.inertia*t,this.r*=1-.8*t,o.esc&&!e.hand){let ft=X*d/Math.max(p,4)*1.12;Math.abs(this.r)>ft&&(this.r+=(Math.sign(this.r)*ft-this.r)*Math.min(1,t*8)),Math.abs(O)>.12&&(f*=1-Math.min(.5,t*2.5))}}else this.r=u*Math.tan(v)/N,f*=.5,this.slip=0,this.rearSlip=0;let K=V*Math.cos(v)+q;if(p<=1.2){let it=u+w/x*t;this.vx=a*it+c*f,this.vz=l*it+h*f,S===0&&!b&&Math.abs(it)<.2&&(this.vx=this.vz=0,this.r=0)}else{let it=u+w/x*t,O=f+K/x*t;this.vx=a*it+c*O,this.vz=l*it+h*O}this.h+=this.r*t,this.x+=this.vx*t,this.z+=this.vz*t,this.accLong=this.accLong===void 0?0:this.accLong+(w/x-this.accLong)*Math.min(1,t*10),this.accLat=K/x,this.speed=Math.hypot(this.vx,this.vz),this.u=this.vx*Math.sin(this.h)+this.vz*Math.cos(this.h);let lt=this.spec.L,ut={};for(let it of[lt*.32,0,-lt*.32]){let O=this.x+Math.sin(this.h)*it,$=this.z+Math.cos(this.h)*it;if(n.collide(O,$,this.radius,ut)){this.x+=ut.x,this.z+=ut.z;let at=this.vx*ut.nx+this.vz*ut.nz;at<0&&(this.vx-=ut.nx*at*1.25,this.vz-=ut.nz*at*1.25,this.vx*=.94,this.vz*=.94,this.r+=(it>0?1:-1)*at*.02*Math.sign(ut.nx*Math.cos(this.h)-ut.nz*Math.sin(this.h)),-at>2&&(s&&s(-at,"wall",null,O-ut.nx*this.radius,$-ut.nz*this.radius,ut.nx,ut.nz),this.damage=Math.min(100,this.damage+-at*.6)))}}i&&i.collidePlayer(this,s),this.remotes&&this.remotes.collide(this,s)}shiftUp(){this.gear<6&&(this.gear=Math.max(1,this.gear)+1,this.shiftT=.25)}shiftDown(){this.gear>1&&(this.gear--,this.shiftT=.2)}_gearbox(t){let e=Math.max(0,this.u||0),n=[0,3.6,2.2,1.55,1.18,.95,.78],i=3.6,s=this.spec.wr;this.gear>=1||(this.gear=1);let o=h=>e/s*n[h]*i*60/(2*Math.PI),a=o(this.gear);if(!(this.assists&&this.assists.manual)){let h=t.throttle>.5?6300:3800;a>h&&this.gear<6&&(this.gear++,this.shiftT=.18),a<2e3&&this.gear>1&&this.gear--,a=o(this.gear)}if(this.limiter=a>7200,this.rpmTarget=Math.min(7300,Math.max(900,a)),this.shiftT>0)return this.shiftT-=1/180,.25;let l=Math.min(1,a/6500),c=this.damage>=100?.3:1-this.damage/300;return(.72+.38*Math.sin(l*Math.PI))*c}_visual(t,e){this.rpm+=((this.rpmTarget||900)+(e.throttle>0&&this.speed<1?2200*e.throttle:0)-this.rpm)*Math.min(1,t*6),this.gearLabel=this.reversing?"R":this.speed<.3&&!this.throttleOn?"N":String(this.gear);let n=ze.clamp(-(this.accLong||0)*.006,-.05,.05),i=ze.clamp((this.accLat||0)*.007,-.06,.06);this.pitchV+=((n-this.pitch)*90-this.pitchV*12)*t,this.pitch+=this.pitchV*t,this.rollV+=((i-this.roll)*90-this.rollV*12)*t,this.roll+=this.rollV*t,this.group.position.set(this.x,0,this.z),this.group.rotation.y=this.h,this.body.rotation.set(this.pitch,0,this.roll),this.body.position.y=.02+Math.sin(performance.now()*.03)*.002*Math.min(1,this.speed/10),this.spin+=(this.u||0)/this.spec.wr*t;for(let s of this.wheels)s.mesh.rotation.x=this.spin,s.front&&(s.pivot.rotation.y=this.steer);this.brakeMat.opacity=this.braking?.9:this.night?.35:0,this.lightMat.emissiveIntensity=this.night?2.2:this.braking?1.2:.3,this.flareMat.opacity=this.night?.55:0,this.spot.intensity=this.night?60:0,this.slip>.22&&this.speed>6||this.wheelspin>.2&&this.speed>1?(this._addSkid(),Math.random()<this.slip*1.5&&this._puff()):this.lastSkid=null,this._updateSmoke(t)}_skid(){this.skidN=1200,this.skidI=0;let e=new se;this.skidPos=new Float32Array(1200*4*3),e.setAttribute("position",new le(this.skidPos,3));let n=new Uint32Array(1200*6);for(let i=0;i<1200;i++)n.set([i*4,i*4+2,i*4+1,i*4+1,i*4+2,i*4+3],i*6);e.setIndex(new le(n,1)),this.skidMesh=new Q(e,new pe({color:1118481,transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-4})),this.skidMesh.frustumCulled=!1,this.scene.add(this.skidMesh)}_addSkid(){let t=this.spec,e=[];for(let n of this.wheels){if(n.front)continue;let i=n.pivot.position,s=Math.cos(this.h),o=Math.sin(this.h);e.push([this.x+i.x*s+i.z*o,this.z-i.x*o+i.z*s])}if(this.lastSkid){for(let n=0;n<e.length;n++){let[i,s]=this.lastSkid[n],[o,a]=e[n],l=o-i,c=a-s,h=Math.hypot(l,c);if(h<.05||h>5)continue;let u=-c/h*.11,f=l/h*.11,d=this.skidI++%this.skidN,x=.075;this.skidPos.set([i-u,x,s-f,i+u,x,s+f,o-u,x,a-f,o+u,x,a+f],d*12)}this.skidMesh.geometry.attributes.position.needsUpdate=!0}this.lastSkid=e}_smoke(){this.smokeN=160,this.smokeI=0,this.smoke=[];let e=document.createElement("canvas");e.width=e.height=64;let n=e.getContext("2d"),i=n.createRadialGradient(32,32,2,32,32,30);i.addColorStop(0,"rgba(255,255,255,0.8)"),i.addColorStop(1,"rgba(255,255,255,0)"),n.fillStyle=i,n.fillRect(0,0,64,64),this.smokeTex=new Pe(e);for(let s=0;s<160;s++){let o=new wn(new pn({map:this.smokeTex,color:14540253,transparent:!0,opacity:0,depthWrite:!1}));o.visible=!1,this.scene.add(o),this.smoke.push({m:o,life:0,vx:0,vy:0,vz:0})}}_puff(){let t=this.smoke[this.smokeI++%this.smokeN],e=Math.random()<.5?-1:1,n=this.spec,i=Math.cos(this.h),s=Math.sin(this.h),o=e*n.track/2,a=-n.wb/2;t.m.position.set(this.x+o*i+a*s,.3,this.z-o*s+a*i),t.life=1,t.vx=this.vx*.1+(Math.random()-.5),t.vz=this.vz*.1+(Math.random()-.5),t.vy=.6+Math.random()*.5,t.m.visible=!0,t.m.scale.setScalar(1)}_updateSmoke(t){for(let e of this.smoke){if(e.life<=0)continue;e.life-=t*.55,e.m.position.x+=e.vx*t,e.m.position.y+=e.vy*t,e.m.position.z+=e.vz*t;let n=1+(1-e.life)*5;e.m.scale.setScalar(n),e.m.material.opacity=Math.max(0,e.life*.45),e.life<=0&&(e.m.visible=!1)}}},ea=class{constructor(t){this.cam=t,this.mode=0,this.pos=new L(0,5,-10),this.look=new L,this.shake=0,this.yawOff=0,this.lag=0,this.modes=["Chase","Far chase","Hood","Cinematic"]}cycle(){return this.mode=(this.mode+1)%this.modes.length,this.modes[this.mode]}snap(t){this.pos.set(t.x-Math.sin(t.h)*8,3,t.z-Math.cos(t.h)*8),this.look.set(t.x,1,t.z)}update(t,e,n=0){let i=Math.sin(e.h),s=Math.cos(e.h),o=e.speed,a=e.spec,l,c,h=o>2?e.vx/o:i,u=o>2?e.vz/o:s,f=i*.7+h*.3,d=s*.7+u*.3,x=Math.atan2(f,d)+n,p=Math.sin(x),m=Math.cos(x),g=Math.max(1,a.L/4.7);if(this.mode===0||this.mode===1){let _=(this.mode===0?6.8:11)*g+o*.03,v=(this.mode===0?2.3:4)*g+a.cabin[1][1]*.4;l=new L(e.x-p*_,v,e.z-m*_),c=new L(e.x+i*4,1.1*g,e.z+s*4);let I=1-Math.exp(-t*(this.mode===0?7:5));this.pos.lerp(l,I)}else if(this.mode===2)l=new L(e.x+i*(a.cabin[a.cabin.length-1][0]-.2),a.cabin[0][1]+.55,e.z+s*(a.cabin[a.cabin.length-1][0]-.2)),c=new L(e.x+i*30,1.2,e.z+s*30),this.pos.copy(l);else{this.lag+=t*.15;let _=this.lag;l=new L(e.x+Math.sin(_)*9,1.2+Math.sin(_*.7)*.6,e.z+Math.cos(_)*9),c=new L(e.x,.9,e.z),this.pos.lerp(l,1-Math.exp(-t*3))}this.look.lerp(c,this.mode===2?1:1-Math.exp(-t*10)),this.cam.position.copy(this.pos),this.shake>0&&(this.cam.position.x+=(Math.random()-.5)*this.shake,this.cam.position.y+=(Math.random()-.5)*this.shake,this.shake=Math.max(0,this.shake-t*2)),o>30&&(this.cam.position.y+=(Math.random()-.5)*.015*(o-30)/20),this.cam.lookAt(this.look);let M=(this.mode===2?(this.baseFov||62)+10:this.baseFov||62)+Math.min(16,o*.2);this.cam.fov+=(M-this.cam.fov)*Math.min(1,t*3),this.cam.updateProjectionMatrix()}};var ff=[["sedan",.34],["hatch",.14],["suv",.15],["oldsedan",.08],["van",.13],["taxi",.06],["bus",.05],["truck",.05]],df=[3,6,4,2.2,.6,.15,.02],pf=/Чүй|Чуй|Chuy|Жибек|Jibek|Манас|Manas|Ахунбаев|Akhunbaev|Абдрахманов|Abdrahmanov|Киев|Kyiv|Москва|Moscow|Токтогул|Toktogul|Айтматов|Aytmatov|Шабдан|Shabdan/,na=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.cars=[],this.target=260,this.max=520,this.rush=1,this.time=0,this.models={};let i=new wt({vertexColors:!0,metalness:.5,roughness:.35}),s=new wt({vertexColors:!0,metalness:.3,roughness:.3}),o=new pe({vertexColors:!0});for(let[a]of ff){let l=Bn(a==="taxi"?"sedan":a,{taxi:a==="taxi"}),c=200,h=new Ae(l.paint,i,c),u=new Ae(l.detail,s,c),f=new Ae(l.lights,o,c);for(let d of[h,u,f])d.count=0,d.frustumCulled=!1,d.instanceMatrix.setUsage(Xs),t.add(d);h.castShadow=!0,u.castShadow=!0,h.setColorAt(0,new yt),f.setColorAt(0,new yt),this.models[a]={p:h,d:u,l:f,spec:l.spec,cap:c,n:0}}this._busStops(),this._signals(),this.M=new te,this.Q=new Ue,this.V=new L,this.S=new L(1,1,1),this.Y=new L(0,1,0),this.C=new yt,this.honks=[],this.night=0}_busStops(){this.stopsOn=new Map;for(let t of this.map.chunks.values())for(let[e,n]of t.busstops){let i=this.map.nearestRoad(e,n,25,l=>l.cls<=4);if(!i)continue;let s=i.lat>=0?0:1,o=s?i.e.len-i.s:i.s,a=this.stopsOn.get(i.e.id*2+s);a||this.stopsOn.set(i.e.id*2+s,a=[]),a.push(o)}}_signals(){let t=this.map.controls,e=t.length,n=new Ae(of(),new wt({vertexColors:!0,roughness:.6}),e),i=new pe({vertexColors:!0});this.lamps=[0,1,2].map(u=>new Ae(af(u),i,e));let s={},o=new te,a=new Ue,l=new L,c=new L(1,1,1),h=new L(0,1,0);t.forEach((u,f)=>{let d=u.e,x=d.w/2+.9;this.map.sample(d,u.dir,u.stop,x,s),u.x=s.x,u.z=s.z,a.setFromAxisAngle(h,Math.atan2(-s.dx,-s.dz)),o.compose(l.set(s.x,.12,s.z),a,c),n.setMatrixAt(f,o);for(let p of this.lamps)p.setMatrixAt(f,o),p.setColorAt(f,new yt(.1,.1,.1))}),n.castShadow=!0,n.computeBoundingSphere(),this.scene.add(n,...this.lamps);for(let u of this.lamps)u.computeBoundingSphere();this.signalPole=n,this._sigT=0}_updateSignalLamps(){let t=this.C,e=this.time,n=this.map.controls,i=[new yt(3,.15,.08),new yt(.18,.03,.02)],s=[new yt(3,1.6,.1),new yt(.18,.12,.02)],o=[new yt(.1,3,.8),new yt(.02,.15,.06)];for(let a=0;a<n.length;a++){let l=n[a],c=this.map.signalState(l.cluster,l.group,e);this.lamps[0].setColorAt(a,c==="R"?i[0]:i[1]),this.lamps[1].setColorAt(a,c==="Y"?s[0]:s[1]),this.lamps[2].setColorAt(a,c==="G"?o[0]:o[1])}for(let a of this.lamps)a.instanceColor.needsUpdate=!0}clear(){this.cars.length=0}_pickType(){let t=Math.random(),e=0;for(let[n,i]of ff)if(e+=i,t<e)return n;return"sedan"}_edgeWeight(t){let e=df[t.cls]*Math.min(t.len,300);if(this.rush>1&&t.name>=0){let n=this.map.names[t.name];(pf.test(n[0])||pf.test(n[1]||""))&&(e*=1+(this.rush-1)*2.5)}return e}_spawn(t,e,n,i){let s=400,o=Math.ceil(i/s),a=Math.floor(t/s),l=Math.floor(e/s),c=[],h=0;for(let u=a-o;u<=a+o;u++)for(let f=l-o;f<=l+o;f++){let d=this.map.chunks.get(Oe(u,f));if(d)for(let x of d.edges){if(x.cls>5)continue;let p=this._edgeWeight(x);p<=0||(c.push(x,p),h+=p)}}if(!h)return!1;for(let u=0;u<6;u++){let f=Math.random()*h,d=null;for(let y=0;y<c.length;y+=2)if(f-=c[y+1],f<=0){d=c[y];break}d||(d=c[0]);let x=d.ow||Math.random()<.5?0:1,p=Math.random()*d.len,m={};this.map.sample(d,x,p,0,m);let g=Math.hypot(m.x-t,m.z-e);if(g<n||g>i)continue;let M=Math.floor(Math.random()*d.lanes),_=d.id*2+x;if(this.cars.some(y=>y.de===_&&Math.abs(y.s-p)<12))continue;let v=this._pickType(),I=this.models[v];if(I.n>=I.cap)continue;I.n++;let w=Yc[d.cls]*(.85+Math.random()*.3)*(v==="bus"||v==="truck"?.85:1),S={type:v,spec:I.spec,e:d,dir:x,de:_,s:p,lane:v==="van"||v==="bus"?d.lanes-1:M,v:w*.7,v0:w,color:v==="van"?Math.random()<.8?16053492:15912992:v==="bus"?Math.random()<.5?2783802:15261904:v==="taxi"?Math.random()<.5?15921906:15909376:th[Math.floor(Math.random()*th.length)],x:m.x,z:m.z,h:Math.atan2(m.dx,m.dz),ex:0,ez:0,next:-1,wait:0,bump:0,brake:!1,stopT:0,servedStop:-1,aggr:.8+Math.random()*.5};S.next=this._chooseNext(S);let R={};return this.map.sample(d,x,p,this.map.laneOffset(d,S.lane),R),S.x=R.x,S.z=R.z,this.cars.push(S),!0}return!1}_endNode(t){let e=this.map.edges[t>>1];return t&1?e.na:e.nb}_chooseNext(t){let e=this._endNode(t.de),n={};this.map.sample(t.e,t.dir,t.e.len-.5,0,n);let i=0,s=[];for(let a of e.out){if(a>>1===t.e.id)continue;let l=this.map.edges[a>>1];if(l.cls>5)continue;let c={};this.map.sample(l,a&1,.5,0,c);let h=n.dx*c.dx+n.dz*c.dz,u=(h>.7?4:h>-.3?1:.15)*(df[l.cls]+.2);l.cls===5&&(u*=.2),(t.type==="bus"||t.type==="truck")&&(u*=l.cls<=2?2:.3),s.push(a,u),i+=u}if(!i)return t.e.ow?-1:t.de^1;let o=Math.random()*i;for(let a=0;a<s.length;a+=2)if(o-=s[a+1],o<=0)return s[a];return s[0]}_remove(t){let e=this.cars[t];this.models[e.type].n--,this.cars[t]=this.cars[this.cars.length-1],this.cars.pop()}update(t,e,n,i){this.time+=t;let s=e.x,o=e.z,a=Math.min(this.max,Math.round(this.target*this.rush)),l=0;for(;this.cars.length<a&&l<(this.cars.length<a*.5?40:3)&&this._spawn(s,o,this.cars.length<20?25:140,640);)l++;for(let p=this.cars.length-1;p>=0;p--){let m=this.cars[p];(Math.abs(m.x-s)>760||Math.abs(m.z-o)>760)&&this._remove(p)}let c=new Map;for(let p of this.cars){let m=c.get(p.de);m||c.set(p.de,m=[]),m.push(p)}for(let p of c.values())p.sort((m,g)=>m.s-g.s);let h=Math.sin(e.h),u=Math.cos(e.h),f=e.speed,d=e.spec.L;this.honks.length=0;let x=this.map;for(let p of this.cars){let m=p.e,g=m.len,M=p.spec.L,_=1e9,v=0,I=c.get(p.de);for(let it=0;it<I.length;it++){let O=I[it];if(O===p||O.s<=p.s||O.lane!==p.lane)continue;let $=O.s-p.s-(O.spec.L+M)/2;$<_&&(_=$,v=O.v);break}if(_>200&&p.next>=0){let it=c.get(p.next);if(it&&it.length){let O=it[0],$=g-p.s+O.s-(O.spec.L+M)/2;$<_&&(_=$,v=O.v)}}p.redAhead=!1;for(let it of m.signals){if(it.dir!==p.dir)continue;let O=it.stop-p.s;if(O<-.5||O>120)continue;let $=x.signalState(it.cluster,it.group,this.time);if($==="R"||$==="Y"&&O>p.v*p.v/7+2){let at=O-M/2;at<_&&(_=Math.max(.01,at),v=0,p.redAhead=!0)}}if((p.type==="van"||p.type==="bus")&&p.stopT<=0){let it=this.stopsOn.get(p.de);if(it)for(let O of it){let $=O-p.s;if($>0&&$<60&&p.servedStop!==p.de*1e4+Math.round(O)){let at=$-M/2+1.5;at<_&&(_=Math.max(.01,at),v=0),$<M/2+1.5&&p.v<.5&&(p.stopT=6+Math.random()*8,p.servedStop=p.de*1e4+Math.round(O))}}}p.stopT>0&&(p.stopT-=t,_=.01,v=0);let w=Math.sin(p.h),S=Math.cos(p.h);{let it=s-p.x,O=o-p.z,$=it*w+O*S,at=Math.abs(it*S-O*w);if($>0&&$<45&&at<2.2){let st=$-(d+M)/2;st<_&&(_=Math.max(.01,st),v=Math.max(0,f*(h*w+u*S)),p.playerBlock=!0)}else p.playerBlock=!1}if(n)for(let it of n.crossers){let O=it.x-p.x,$=it.z-p.z,at=O*w+$*S,st=Math.abs(O*S-$*w);if(at>0&&at<30&&st<2.6){let pt=at-M/2-1.5;pt<_&&(_=Math.max(.01,pt),v=0)}}if(i)for(let it of i){let O=it.x-p.x,$=it.z-p.z,at=O*w+$*S,st=Math.abs(O*S-$*w);if(at>0&&at<40&&st<it.r){let pt=at-M/2-it.r;pt<_&&(_=Math.max(.01,pt),v=0)}}let R=p.v0;if(g-p.s<25&&p.next>=0){let it=x.edges[p.next>>1],O={},$={};x.sample(m,p.dir,g-.5,0,O),x.sample(it,p.next&1,.5,0,$);let at=O.dx*$.dx+O.dz*$.dz;at<.8&&(R=Math.min(R,4+8*Math.max(0,at+.2)))}if(p.bump>0&&(p.bump-=t,R=0),p.wrecked){p.v=0,p.brake=!1;continue}let b=1.6*p.aggr,C=2.5,U=2.2,N=1.3/p.aggr,T=p.v-v,F=U+Math.max(0,p.v*N+p.v*T/(2*Math.sqrt(b*C))),k=b*(1-Math.pow(p.v/Math.max(.1,R),4)-(_<1e8?Math.pow(F/Math.max(.1,_),2):0));for(k=Math.max(-9,k),p.brake=k<-.6||p.v<.3,p.v=Math.max(0,p.v+k*t),_<.3&&p.v>0&&(p.v=Math.min(p.v,.2)),p.s+=p.v*t,p.playerBlock&&p.v<.3&&e.speed<1?(p.wait+=t,p.wait>3.5&&Math.random()<t*.6&&this.honks.push(p)):p.wait=Math.max(0,p.wait-t);p.s>=p.e.len;){if(p.next<0){p.dead=!0;break}p.s-=p.e.len,p.de=p.next,p.e=x.edges[p.de>>1],p.dir=p.de&1,p.lane=p.type==="van"||p.type==="bus"?p.e.lanes-1:Math.min(p.e.lanes-1,Math.floor(Math.random()*p.e.lanes)),p.v0=Yc[p.e.cls]*(.85+Math.random()*.3)*(p.type==="bus"||p.type==="truck"?.85:1),p.next=this._chooseNext(p),p.transit=!0}let X=this._o||(this._o={});x.sample(p.e,p.dir,Math.min(p.s,p.e.len),x.laneOffset(p.e,p.lane),X),p.transit&&(p.ex=p.x-X.x,p.ez=p.z-X.z,p.transit=!1,Math.hypot(p.ex,p.ez)>12&&(p.ex=p.ez=0));let V=Math.exp(-t*2.5);p.ex*=V,p.ez*=V;let q=X.x+p.ex,K=X.z+p.ez,lt=q-p.x,ut=K-p.z;if(lt*lt+ut*ut>1e-4){let O=Math.atan2(lt,ut)-p.h;O=Math.atan2(Math.sin(O),Math.cos(O)),p.h+=O*Math.min(1,t*10)}p.x=q,p.z=K}for(let p=this.cars.length-1;p>=0;p--)this.cars[p].dead&&this._remove(p);this._sigT-=t,this._sigT<=0&&(this._sigT=.25,this._updateSignalLamps()),this._render()}_render(){let{M:t,Q:e,V:n,S:i,Y:s,C:o}=this;for(let l in this.models)this.models[l]._i=0;let a=this.night>.5?1.6:.45;for(let l of this.cars){let c=this.models[l.type],h=c._i++;l.wrecked?(this._E=this._E||new Ge,this._E.set(0,l.h+l.wreckYaw,l.wreckRoll,"YXZ"),e.setFromEuler(this._E)):e.setFromAxisAngle(s,l.h),t.compose(n.set(l.x,.03,l.z),e,i),c.p.setMatrixAt(h,t),c.d.setMatrixAt(h,t),c.l.setMatrixAt(h,t),c.p.setColorAt(h,o.setHex(l.color)),l.wrecked?o.multiplyScalar(.45):l.hp<100&&o.multiplyScalar(.75+.25*l.hp/100),(l.wrecked||l.hp<100)&&c.p.setColorAt(h,o);let u=l.wrecked&&performance.now()%1e3<500,f=l.wrecked?u?1.6:.1:l.brake?Math.max(a,1.4):a;c.l.setColorAt(h,o.setRGB(f,f,f))}for(let l in this.models){let c=this.models[l];c.p.count=c.d.count=c.l.count=c._i,c.p.instanceMatrix.needsUpdate=c.d.instanceMatrix.needsUpdate=c.l.instanceMatrix.needsUpdate=!0,c.p.instanceColor&&(c.p.instanceColor.needsUpdate=!0),c.l.instanceColor&&(c.l.instanceColor.needsUpdate=!0)}}collidePlayer(t,e){let n=t.spec.L,i=[n*.3,0,-n*.3].map(o=>[t.x+Math.sin(t.h)*o,t.z+Math.cos(t.h)*o]),s=t.radius;for(let o of this.cars){let a=o.x-t.x,l=o.z-t.z;if(a*a+l*l>120)continue;let c=o.spec.L,h=o.spec.W/2,u=Math.max(2,Math.round(c/2.2));for(let f=0;f<u;f++){let d=(f/(u-1)-.5)*(c-h*2),x=o.x+Math.sin(o.h)*d,p=o.z+Math.cos(o.h)*d;for(let[m,g]of i){let M=m-x,_=g-p,v=Math.hypot(M,_),I=s+h;if(v<I&&v>1e-4){let w=M/v,S=_/v,R=I-v;t.x+=w*R,t.z+=S*R;let y=t.vx-Math.sin(o.h)*o.v,b=t.vz-Math.cos(o.h)*o.v,C=y*w+b*S;if(C<0){if(t.vx-=w*C*1.25,t.vz-=S*C*1.25,-C>1.5){o.hp=(o.hp??100)- -C*9;let U=o.hp<=0&&!o.wrecked;U&&(o.wrecked=!0,o.wreckRoll=(Math.random()-.5)*.12,o.wreckYaw=(Math.random()-.5)*.6),e&&e(-C,"car",o,x+w*h,p+S*h,-w,-S,U),t.damage=Math.min(100,t.damage+-C*.6)}o.bump=o.wrecked?1e9:2.5+Math.random()*2,o.v*=.3,o.wait=4}}}}}}jamLevel(t,e){let n=0,i=0;for(let s of this.cars)Math.abs(s.x-t)>250||Math.abs(s.z-e)>250||(n++,s.v<2&&i++);return n?i/n:0}};var mf=[1842206,2764602,15263976,6953498,2377579,3890490,8022618,12632256,9054794,14200906,1981018,5921370,10502192],gf=[1710620,2238522,2899546,3815994,5917242,1710620,6974066],xf=[14200976,13146744,14728864,12094056,13673602],vf=[1709072,2760728,920586,4864040,6974058],fv=[{name:"Ala-Too Square",x:30,z:-10,r:95,n:55},{name:"Victory Square",x:1032,z:-325,r:45,n:14},{name:"Osh Bazaar",x:-2760,z:300,r:90,n:50},{name:"Erkindik Boulevard",x:230,z:320,r:60,n:18},{name:"TSUM",x:905,z:0,r:50,n:22}],sa=class{constructor(t,e){this.scene=t,this.map=e,this.N=520,this.list=[],this.crossers=[],this.target=240;let n=(o,a)=>{let l=new Ae(o,a,this.N);return l.count=0,l.frustumCulled=!1,l.castShadow=!0,l.instanceMatrix.setUsage(Xs),t.add(l),l},i=new wt({roughness:.85}),s=16777215;this.torso=n(It(new Dt(.42,.62,.24).translate(0,1.22,0),s),i),this.hips=n(It(new Dt(.38,.18,.22).translate(0,.9,0),s),i),this.head=n(It(new Re(.115,10,8).scale(.95,1.1,1).translate(0,1.68,0),s),i),this.hair=n(It(new Re(.122,10,6,0,Math.PI*2,0,Math.PI*.55).translate(0,1.71,-.01),s),i),this.legL=n(It(new Dt(.15,.88,.16).translate(0,-.44,0),s),i),this.legR=n(It(new Dt(.15,.88,.16).translate(0,-.44,0),s),i),this.armL=n(It(new Dt(.1,.62,.11).translate(0,-.31,0),s),i),this.armR=n(It(new Dt(.1,.62,.11).translate(0,-.31,0),s),i),this.kalpak=n(Qe([It(new Vt(.06,.13,.26,8).translate(0,1.88,0),15921126),It(new Vt(.135,.135,.05,10).translate(0,1.76,0),1118481)]),new wt({vertexColors:!0,roughness:.9})),this.bag=n(It(new Dt(.38,.55,.22).translate(0,.32,0),s),i),this.M=new te,this.M2=new te,this.Q=new Ue,this.V=new L,this.S=new L(1,1,1),this.E=new Ge,this.C=new yt,this.extraZones=[],this._crossT=0}addZone(t){this.extraZones.push(t)}_style(t){let e=Math.random;t.shirt=mf[Math.floor(e()*mf.length)],t.pants=gf[Math.floor(e()*gf.length)],t.skin=xf[Math.floor(e()*xf.length)],t.hairC=vf[Math.floor(e()*vf.length)],t.kalpak=e()<.07,t.scale=.9+e()*.17,t.speed=1.05+e()*.55,t.phase=e()*10,e()<.12&&(t.pants=t.shirt)}_spawnWalker(t,e){let n=400,i=1,s=Math.floor(t/n),o=Math.floor(e/n),a=[];for(let l=s-i;l<=s+i;l++)for(let c=o-i;c<=o+i;c++){let h=this.map.chunks.get(Oe(l,c));if(h)for(let u of h.edges)u.cls>=1&&u.cls<=4&&u.w>=5&&a.push(u)}if(!a.length)return null;for(let l=0;l<5;l++){let c=a[Math.floor(Math.random()*a.length)],h=Math.random()<.5?-1:1,u=Math.random()<.5?0:1,f=Math.random()*c.len,d={};this.map.sample(c,u,f,(c.w/2+1.4)*h,d);let x=Math.hypot(d.x-t,d.z-e);if(x<30||x>330||this.map.insideBuilding(d.x,d.z,.3))continue;let p={mode:"walk",e:c,dir:u,s:f,side:h,x:d.x,z:d.z,h:Math.atan2(d.dx,d.dz),ex:0,ez:0,dodge:0};return this._style(p),p}return null}_spawnPlaza(t){for(let e=0;e<8;e++){let n=Math.random()*6.28,i=Math.sqrt(Math.random())*t.r,s=t.x+Math.cos(n)*i,o=t.z+Math.sin(n)*i;if(this.map.insideBuilding(s,o,.5))continue;let a=this.map.nearestRoad(s,o,8);if(a&&a.dist<a.e.w/2+.5)continue;let l={mode:"plaza",zone:t,x:s,z:o,h:Math.random()*6.28,tx:s,tz:o,idle:Math.random()*4,ex:0,ez:0,dodge:0,bag:!!t.bags&&Math.random()<.6};return this._style(l),l}return null}_spawnCrosser(t,e){let n=400,i=Math.floor(t/n),s=Math.floor(e/n),o=[];for(let x=i-1;x<=i+1;x++)for(let p=s-1;p<=s+1;p++){let m=this.map.chunks.get(Oe(x,p));if(m)for(let g of m.crossings){let M=Math.hypot(g[0]-t,g[1]-e);M>40&&M<220&&o.push(g)}}if(!o.length)return null;let a=o[Math.floor(Math.random()*o.length)],l=this.map.nearestRoad(a[0],a[1],4);if(!l||l.e.cls>4||l.e.w<5)return null;let c=Math.random()<.5?1:-1,h=l.e.w/2+1.2,u=-l.dz,f=l.dx,d={mode:"cross",x:l.x+u*h*c,z:l.z+f*h*c,tx:l.x-u*h*c,tz:l.z-f*h*c,h:0,ex:0,ez:0,dodge:0,wait:1+Math.random()*2};return d.h=Math.atan2(d.tx-d.x,d.tz-d.z),this._style(d),d.speed=1.4,d}update(t,e,n=!0){let i=e.x,s=e.z,o=this.list;if(!n){o.length=0,this.crossers.length=0,this._render(t);return}let a=fv.concat(this.extraZones);for(let x of a){let p=Math.hypot(x.x-i,x.z-s);if(x.active=p<420,!x.active)continue;x.count=x.count||0;let m=3;for(;x.count<x.n&&m-- >0&&o.length<this.N-5;){let g=this._spawnPlaza(x);g&&(o.push(g),x.count++)}}let l=0;for(let x of o)x.mode==="walk"&&l++;let c=l<this.target*.5?30:3;for(;l<this.target&&c-- >0&&o.length<this.N-30;){let x=this._spawnWalker(i,s);x&&(o.push(x),l++)}if(this._crossT-=t,this._crossT<=0&&o.length<this.N-2){this._crossT=2+Math.random()*3;let x=this._spawnCrosser(i,s);x&&o.push(x)}let h=Math.sin(e.h),u=Math.cos(e.h),f=e.speed;this.crossers.length=0;let d={};for(let x=o.length-1;x>=0;x--){let p=o[x];if((Math.abs(p.x-i)>380||Math.abs(p.z-s)>380)&&p.mode!=="plaza"){o[x]=o[o.length-1],o.pop();continue}if(p.mode==="plaza"&&!p.zone.active){p.zone.count--,o[x]=o[o.length-1],o.pop();continue}let g=!1;if(p.mode==="walk"){if(p.s+=p.speed*t,p.s>p.e.len){let y=p.dir?p.e.na:p.e.nb,b=[];for(let C of y.out){let U=this.map.edges[C>>1];U!==p.e&&U.cls>=1&&U.cls<=4&&U.w>=5&&b.push(C)}if(!y.out.length||!b.length)p.dir^=1,p.s=0,p.side=-p.side;else{let C=b[Math.floor(Math.random()*b.length)];p.e=this.map.edges[C>>1],p.dir=C&1,p.s=0,p.trans=!0}}this.map.sample(p.e,p.dir,p.s,(p.e.w/2+1.4)*p.side,d),p.trans&&(p.ex=p.x-d.x-p.ex*0,p.ez=p.z-d.z,p.trans=!1,Math.hypot(p.ex,p.ez)>25&&(p.ex=p.ez=0)),p.ex*=Math.exp(-t*.8),p.ez*=Math.exp(-t*.8);let S=d.x+p.ex,R=d.z+p.ez;p.h=eh(p.h,Math.atan2(S-p.x,R-p.z),t*6),p.x=S,p.z=R,g=!0}else if(p.mode==="plaza")if(p.idle>0)p.idle-=t;else{let S=p.tx-p.x,R=p.tz-p.z,y=Math.hypot(S,R);if(y<.5){p.idle=1+Math.random()*6;let b=p.zone;for(let C=0;C<6;C++){let U=Math.random()*6.28,N=Math.sqrt(Math.random())*b.r,T=b.x+Math.cos(U)*N,F=b.z+Math.sin(U)*N;if(!this.map.insideBuilding(T,F,.6)){let k=this.map.nearestRoad(T,F,8);if(!k||k.dist>k.e.w/2+.5){p.tx=T,p.tz=F;break}}}}else{let b=Math.min(y,p.speed*.85*t);p.x+=S/y*b,p.z+=R/y*b,p.h=eh(p.h,Math.atan2(S,R),t*5),g=!0}}else if(p.mode==="cross")if(p.wait>0)p.wait-=t;else{let S=p.tx-p.x,R=p.tz-p.z,y=Math.hypot(S,R);if(y<.3){o[x]=o[o.length-1],o.pop();continue}let b=Math.min(y,p.speed*t);p.x+=S/y*b,p.z+=R/y*b,g=!0,p.h=eh(p.h,Math.atan2(S,R),t*6),this.crossers.push(p)}let M=p.x-i,_=p.z-s,v=M*h+_*u,I=M*u-_*h;if(!p.fixed&&f>2.5&&v>-1&&v<4+f*.45&&Math.abs(I)<2.4&&p.dodge<=0&&(p.dodge=.9,p.dside=I>=0?1:-1,p.scream=!0),p.dodge>0){p.dodge-=t;let S=5.5*t;p.x+=u*p.dside*S,p.z+=-h*p.dside*S,p.mode==="walk"&&(p.ex+=u*p.dside*S,p.ez+=-h*p.dside*S),g=!0}let w=Math.hypot(M,_);if(!p.fixed&&w<2.2&&w>.01){let S=2.2-w;p.x+=M/w*S,p.z+=_/w*S,p.mode==="walk"&&(p.ex+=M/w*S,p.ez+=_/w*S)}p.moving=g,p.phase+=t*(g?p.dodge>0?14:p.speed*5.2:0)}this._render(t)}_render(){let{M:t,M2:e,Q:n,V:i,S:s,E:o,C:a}=this,l=this.list,c=Math.min(l.length,this.N),h=0,u=0;for(let f=0;f<c;f++){let d=l[f],x=d.moving?Math.sin(d.phase):0,p=d.moving?Math.abs(Math.cos(d.phase))*.04:0,m=d.scale;n.setFromAxisAngle(i.set(0,1,0),d.h),t.compose(i.set(d.x,.15+p,d.z),n,s.set(m,m,m)),this.torso.setMatrixAt(f,t),this.hips.setMatrixAt(f,t),this.head.setMatrixAt(f,t),this.hair.setMatrixAt(f,t),this.torso.setColorAt(f,a.setHex(d.shirt)),this.hips.setColorAt(f,a.setHex(d.pants)),this.head.setColorAt(f,a.setHex(d.skin)),this.hair.setColorAt(f,a.setHex(d.hairC));let g=x*.55,M=-x*.5,_=d.dodge>0?2.6:0;ia(this.legL,f,t,e,o,.1,.92,0,g,a.setHex(d.pants)),ia(this.legR,f,t,e,o,-.1,.92,0,-g,a),ia(this.armL,f,t,e,o,.26,1.5,0,M-_,a.setHex(d.shirt)),ia(this.armR,f,t,e,o,-.26,1.5,0,d.wave?-2.7+Math.sin(performance.now()*.008)*.35:-M-_,a),d.kalpak&&this.kalpak.setMatrixAt(h++,t),d.bag&&(e.makeTranslation(-.42,0,-.1),e.premultiply(t),this.bag.setMatrixAt(u,e),this.bag.setColorAt(u,a.setHex(d.shirt===1842206?9050650:1846332)),u++)}for(let f of[this.torso,this.hips,this.head,this.hair,this.legL,this.legR,this.armL,this.armR])f.count=c,f.instanceMatrix.needsUpdate=!0,f.instanceColor&&(f.instanceColor.needsUpdate=!0);this.kalpak.count=h,this.kalpak.instanceMatrix.needsUpdate=!0,this.bag.count=u,this.bag.instanceMatrix.needsUpdate=!0,this.bag.instanceColor&&(this.bag.instanceColor.needsUpdate=!0)}};function ia(r,t,e,n,i,s,o,a,l,c){n.makeRotationX(l),n.setPosition(s,o,a),n.premultiply(e),r.setMatrixAt(t,n),r.setColorAt(t,c)}function eh(r,t,e){let n=t-r;return n=Math.atan2(Math.sin(n),Math.cos(n)),r+n*Math.min(1,e)}var yf=[{name:"Ala-Too Air",code:"AT",body:16053492,tail:13636638,stripe:15909376},{name:"Tengri Wings",code:"TW",body:16053492,tail:1723018,stripe:1723018},{name:"Issyk Air",code:"IK",body:15660280,tail:1614024,stripe:1614024},{name:"Silk Road Jet",code:"SR",body:15921386,tail:8002106,stripe:13148224},{name:"Tulpar Airlines",code:"TP",body:16777215,tail:2783802,stripe:14721056},{name:"Steppe Cargo",code:"SC",body:14211806,tail:3815994,stripe:14704656}],ra=["Moscow","Istanbul","Dubai","Osh","Almaty","Novosibirsk","Tashkent","Jalal-Abad","Batken","Urumqi","Delhi","Antalya","Yekaterinburg","Seoul","St Petersburg","Karakol","Baku","Doha"];function dv(r,t=!1){let e=t?1.5:1,n=37*e,i=1.98*e,s=[],o=[],a=[],l=26;for(let U=0;U<=l;U++){let N=U/l,T=-n/2+N*n,F;N<.1?F=i*Math.sqrt(1-Math.pow(1-N/.1,2))*.98+.02:N>.72?F=i*(1-Math.pow((N-.72)/.28,1.6)*.82):F=i,a.push(new j(Math.max(.05,F),T))}let c=new Do(a,24).rotateX(Math.PI/2);c.rotateY(Math.PI),s.push(It(c,r.body)),s.push(It(new Dt(i*2.02,.32*e,n*.62).translate(0,.55*e,-n*.04),1975856)),s.push(It(new Dt(i*1.2,.5*e,1.2*e).translate(0,.75*e,n/2-2.6*e).rotateX(0),1054236)),s.push(It(new Dt(i*2.03,.22*e,n*.68).translate(0,-.15*e,-n*.02),r.stripe));let h=new En,u=17*e,f=6.5*e,d=1.6*e,x=7*e;h.moveTo(0,f/2),h.lineTo(u,f/2-x),h.lineTo(u,f/2-x-d),h.lineTo(0,-f/2),h.closePath();let p=new Un(h,{depth:.45*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,-.9*e,0),m=p.clone().translate(i*.4,0,-n*.02),g=p.clone().scale(-1,1,1).translate(-i*.4,0,-n*.02);m.rotateZ(.06),g.rotateZ(-.06),s.push(It(m,13159634),It(g,13159634));for(let U of[-1,1])s.push(It(new Dt(.2,2.2*e,1.4*e).translate(U*(u+i*.4),.6*e,-n*.02-x-.4*e),r.tail));for(let U of[-1,1])for(let N of t?[.33,.62]:[.36]){let T=U*(i*.4+u*N),F=-n*.02+f/2-x*N+2.6*e;s.push(It(new Vt(1.05*e,.9*e,4.2*e,16).rotateX(Math.PI/2).translate(T,-1.9*e,F),14211806)),s.push(It(new Vt(.85*e,.85*e,.1,16).rotateX(Math.PI/2).translate(T,-1.9*e,F+2.12*e),2105376)),s.push(It(new Dt(.3,1.2*e,2.5*e).translate(T,-1.2*e,F-.5*e),13159634))}let M=new En;M.moveTo(0,0),M.lineTo(5.2*e,0),M.lineTo(1.8*e,7.2*e),M.lineTo(-.6*e,7.2*e),M.closePath();let _=new Un(M,{depth:.4*e,bevelEnabled:!1}).rotateY(-Math.PI/2).translate(.2*e,i*.6,-n/2+1*e);s.push(It(_,r.tail));let v=new En;v.moveTo(0,1.8*e),v.lineTo(6.2*e,-1.2*e),v.lineTo(6.2*e,-2.4*e),v.lineTo(0,-1.8*e),v.closePath();let I=new Un(v,{depth:.25*e,bevelEnabled:!1}).rotateX(Math.PI/2).translate(0,i*.25,-n/2+3.4*e);s.push(It(I.clone(),13159634),It(I.clone().scale(-1,1,1),13159634));let w=Qe(s),S=[],R=2.45*e,y=(U,N)=>[It(new Vt(.13*e,.13*e,R,6).translate(U,-R/2-i*.6,N),10132122),It(new Vt(.55*e,.55*e,.45*e,12).rotateZ(Math.PI/2).translate(U,-R-i*.6+0,N),1381653)];S.push(...y(0,n*.36));for(let U of[-1,1])S.push(...y(U*2.9*e,-n*.06),...y(U*3.5*e,-n*.06));let b=Qe(S),C=R+i*.6+.55*e;return{body:w,gear:b,groundY:C,len:n,span:u+i*.4,S:e}}function Cr(r,t=512,e=128,n=null,i="#fff",s="bold 80px Arial"){let o=document.createElement("canvas");o.width=t,o.height=e;let a=o.getContext("2d");n&&(a.fillStyle=n,a.fillRect(0,0,t,e)),a.fillStyle=i,a.font=s,a.textAlign="center",a.textBaseline="middle",a.fillText(r,t/2,e/2);let l=new Pe(o);return l.colorSpace=de,l.anisotropy=8,l}var oa=class{constructor(t,e,n){this.scene=t,this.map=e,this.world=n,this.group=new Yt,t.add(this.group);let i=e.runways.sort((u,f)=>f.length-u.length)[0],s=i.length/2,o=new j(i[0],i[1]),a=new j(i[s*2-2],i[s*2-1]);o.x>a.x&&([o,a]=[a,o]),this.R0=o,this.R1=a,this.len=o.distanceTo(a),this.u=a.clone().sub(o).normalize(),this.n=new j(-this.u.y,this.u.x),this.rwW=55;let l=e.buildings.find(u=>u.name&&/Manas International Airport|главный терминал/.test(u.name))||e.buildings.find(u=>u.kind===10);this.terminal=l,this.tc=l?new j(l.cx,l.cz):o.clone().addScaledVector(this.u,1400).addScaledVector(this.n,450),this.rel(this.tc).y<0&&this.n.multiplyScalar(-1),this.heading=Math.atan2(this.u.x,this.u.y),this._runway(),this._lights(),this._tower(),this._stands(),this._taxiLine(),this._sign(),this.planes=[],this.vehicles=[],this.time=0,this.board=[],this.flightNo=100,this._initPlanes(),this._serviceVehicles();let c=this.tc.clone().addScaledVector(this.n,70),h=e.nearestRoad(c.x,c.y,200,u=>u.cls<=6);this.dropoff=h?new j(h.x,h.z):c,this._zoneMarker(),this.goAround=!1}rel(t){let e=new j(t.x-this.R0.x,t.y-this.R0.y);return new j(e.dot(this.u),e.dot(this.n))}at(t,e){return this.R0.clone().addScaledVector(this.u,t).addScaledVector(this.n,e)}_runway(){let t=this.len,e=this.rwW,n=new Ee(t,e+14,1,1).rotateX(-Math.PI/2),i=new wt({color:9079432,roughness:.85,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-8});i.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
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
          diffuseColor.rgb = mix(c, vec3(0.93), clamp(w, 0.0, 1.0));`)};let s=new Q(n,i),o=this.at(t/2,0);s.position.set(o.x,.06,o.y),s.rotation.y=this.heading-Math.PI/2,s.receiveShadow=!0,this.group.add(s);for(let[a,l,c]of[["07",70,0],["25",t-70,Math.PI]]){let h=Cr(a,256,256,null,"#eeeeee","bold 220px Arial"),u=new Q(new Ee(18,18),new wt({map:h,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-12}));u.rotation.x=-Math.PI/2;let f=this.at(l,0),d=new Yt;d.add(u),d.position.set(f.x,.05,f.y),d.rotation.y=this.heading+c+Math.PI,this.group.add(d)}}_lights(){let t=[],e=[],n=this.len,i=this.rwW/2+1.5;for(let d=0;d<=n;d+=60)for(let x of[-1,1])t.push(this.at(d,x*i)),e.push(d>n-600?[1,.6,.2]:[1,.95,.8]);for(let d=-i;d<=i;d+=3)t.push(this.at(-1,d)),e.push([.2,1,.3]),t.push(this.at(n+1,d)),e.push([1,.1,.1]);for(let d=30;d<n;d+=30)t.push(this.at(d,0)),e.push(d>n-900?Math.floor(d/30)%2?[1,.1,.1]:[1,1,1]:[1,1,1]);for(let d of this.map.taxiways){let x=d.pts;for(let p=0;p<x.length/2-1;p++){let m=x[p*2],g=x[p*2+1],M=x[p*2+2],_=x[p*2+3],v=Math.hypot(M-m,_-g),I=-(_-g)/v,w=(M-m)/v;for(let S=0;S<v;S+=45)for(let R of[-1,1])t.push(new j(m+(M-m)*S/v+I*R*(d.w/2+1),g+(_-g)*S/v+w*R*(d.w/2+1))),e.push([.15,.35,1])}}let s=new Re(.28,6,4),o=new pe({color:16777215});this.rwLights=new Ae(s,o,t.length);let a=new te,l=new yt;t.forEach((d,x)=>{a.makeTranslation(d.x,.35,d.y),this.rwLights.setMatrixAt(x,a),this.rwLights.setColorAt(x,l.setRGB(...e[x]))}),this.rwLightCols=e,this.group.add(this.rwLights);let c=[];for(let d=1;d<=30;d++)c.push(this.at(-d*30,0));let h=[];for(let d=1;d<=30;d++)for(let x=-6;x<=6;x+=2)h.push(this.at(-d*30,x));this.alsBars=new Ae(new Re(.3,6,4),new pe({color:16773312}),h.length),h.forEach((d,x)=>{a.makeTranslation(d.x,1.2,d.y),this.alsBars.setMatrixAt(x,a)}),this.group.add(this.alsBars);let u=new Vt(.08,.08,1.2,4).translate(0,.6,0),f=new Ae(u,new wt({color:7829367}),c.length);c.forEach((d,x)=>{a.makeTranslation(d.x,0,d.y),f.setMatrixAt(x,a)}),this.group.add(f),this.rabbit=new Ae(new Re(.9,8,6),new pe({color:16777215,transparent:!0,opacity:1,blending:qe,depthWrite:!1}),c.length),c.forEach((d,x)=>{a.makeTranslation(d.x,1.4,d.y),this.rabbit.setMatrixAt(x,a),this.rabbit.setColorAt(x,l.setRGB(0,0,0))}),this.group.add(this.rabbit),this.alsN=c.length,this.papi=[];for(let d=0;d<4;d++){let x=this.at(400,-(this.rwW/2+15+d*9)),p=new Q(new Dt(2,1,1.2),new pe({color:16719904}));p.position.set(x.x,.6,x.y),this.group.add(p),this.papi.push(p)}}_tower(){let t=this.tc.clone().addScaledVector(this.u,520).addScaledVector(this.n,-40),e=new Yt,n=new wt({color:14736596,roughness:.7}),i=new Q(new Vt(3.2,4.2,38,16),n);i.position.y=19;let s=new Q(new Dt(18,8,14),n);s.position.y=4;let o=new Q(new Vt(7.5,4.5,4,8),n);o.position.y=39.5;let a=new Q(new Vt(8,7.2,5,8),new wt({color:2375756,metalness:.7,roughness:.08,emissive:2109504,emissiveIntensity:0}));a.position.y=44,this.towerCab=a;let l=new Q(new Vt(8.6,8.6,1,8),n);l.position.y=47;let c=new Q(new Vt(.15,.15,9,5),new wt({color:13378082}));c.position.y=52,this.beacon=new Q(new Re(.6,8,6),new pe({color:16719904})),this.beacon.position.y=57,this.radar=new Q(new Dt(7,1.6,.4),new wt({color:15658734})),this.radar.position.y=49;for(let h of[i,s,o,a,l,c,this.radar])h.castShadow=!0,h.receiveShadow=!0,e.add(h);if(e.add(this.beacon),e.position.set(t.x,0,t.y),this.group.add(e),this.towerPos=t,this.world){let h=[[-9,-7],[9,-7],[9,7],[-9,7]];for(let u=0;u<4;u++)this.world.addWall(t.x+h[u][0],t.y+h[u][1],t.x+h[(u+1)%4][0],t.y+h[(u+1)%4][1])}}_sign(){if(!this.terminal)return;let t=this.terminal,e=Cr("MANAS  \xB7  \u041C\u0410\u041D\u0410\u0421  \xB7  INTERNATIONAL AIRPORT",2048,160,null,"#ffffff","bold 96px Arial"),n=new pe({map:e,transparent:!0,color:14675967});this.signMat=n;let i=new Q(new Ee(90,7),n),s=null,o=-1e9,a=t.pts;for(let c=0;c<a.length/2;c++){let h=(a[c*2]-t.cx)*this.n.x+(a[c*2+1]-t.cz)*this.n.y;h>o&&(o=h,s=c)}let l=new j(t.cx,t.cz).addScaledVector(this.n,o+1.5);i.position.set(l.x,t.h+4.5,l.y),i.rotation.y=Math.atan2(this.n.x,this.n.y),this.group.add(i)}_stands(){let t=[];for(let e of this.map.stands){let n=new j(e[0],e[1]),i=new j(e[2],e[3]),s=n,o=i;this.rel(i).y>this.rel(n).y&&(s=i,o=n);let a=this.rel(s);if(a.y<120||a.y>700||a.x<200||a.x>this.len-200||t.some(c=>c.p.distanceTo(s)<48))continue;let l=Math.atan2(s.x-o.x,s.y-o.y);t.push({p:s,lead:o,h:l,d:s.distanceTo(this.tc),busy:null})}if(t.sort((e,n)=>e.d-n.d),this.stands=t.slice(0,12),this.stands.length<4){this.stands=[];for(let e=-3;e<=3;e++){let n=this.rel(this.tc),i=this.at(n.x+e*55,n.y-90);this.stands.push({p:i,lead:this.at(n.x+e*55,n.y-160),h:Math.atan2(this.n.x,this.n.y),busy:null})}}}_taxiLine(){let t=[];for(let e of this.map.taxiways)for(let n=0;n<e.pts.length;n+=2){let i=this.rel(new j(e.pts[n],e.pts[n+1]));i.y>90&&i.y<260&&i.x>300&&i.x<this.len-300&&t.push(i.y)}t.sort((e,n)=>e-n),this.taxiOff=t.length?t[Math.floor(t.length/2)]:180}_zoneMarker(){let t=new Os(4.5,5.5,40).rotateX(-Math.PI/2);this.zoneMat=new pe({color:4245759,transparent:!0,opacity:.8,side:we,depthWrite:!1}),this.zone=new Q(t,this.zoneMat),this.zone.position.set(this.dropoff.x,.2,this.dropoff.y);let e=new Q(new Vt(4.8,4.8,14,32,1,!0),new pe({color:4245759,transparent:!0,opacity:.12,side:we,depthWrite:!1,blending:qe}));e.position.y=7,this.zone.add(e);let n=new wn(new pn({map:Cr("\u2708 FLIGHTS  [E]",512,128,"rgba(10,40,70,0.85)","#fff","bold 60px Arial"),depthTest:!1}));n.scale.set(9,2.25,1),n.position.y=6,this.zone.add(n),this.group.add(this.zone);let i=this.at(this.len*.55,this.taxiOff+120),s=this.map.nearestRoad(i.x,i.y,400);this.spotter=s?new j(s.x,s.z):i,this.spotZone=new Q(t.clone(),new pe({color:16756768,transparent:!0,opacity:.8,side:we,depthWrite:!1})),this.spotZone.position.set(this.spotter.x,.2,this.spotter.y);let o=new wn(new pn({map:Cr("\u{1F4F7} PLANE SPOTTING  [E]",640,128,"rgba(70,40,0,0.85)","#fff","bold 54px Arial"),depthTest:!1}));o.scale.set(11,2.2,1),o.position.y=6,this.spotZone.add(o),this.group.add(this.spotZone)}_newPlane(t=.2){let e=yf[Math.floor(Math.random()*yf.length)],n=Math.random()<t,i=dv(e,n),s=new wt({vertexColors:!0,metalness:.35,roughness:.35}),o=new Yt,a=new Q(i.body,s);a.castShadow=!0;let l=new Q(i.gear,s);l.castShadow=!0;let c=new Yt;c.add(a,l),o.add(c);let h=(_,v)=>new Q(new Re(v,6,4),new pe({color:_,transparent:!0,blending:qe,depthWrite:!1})),u=h(16719904,.5),f=h(2162496,.5),d=h(16777215,.9),x=h(16777215,.9),p=h(16723984,.6),m=h(16774880,1.6);u.position.set(-i.span,-.4,-i.len*.02-7.4*i.S),f.position.set(i.span,-.4,-i.len*.02-7.4*i.S),d.position.copy(u.position),x.position.copy(f.position),p.position.set(0,2.1*i.S,-i.len*.1),m.position.set(0,-1.2*i.S,i.len*.42),c.add(u,f,d,x,p,m);let g=Cr(e.code,256,128,null,"#ffffff","bold 100px Arial");for(let _ of[-1,1]){let v=new Q(new Ee(3.4*i.S,1.7*i.S),new pe({map:g,transparent:!0}));v.position.set(_*.45*i.S,2*i.S+4.5*i.S,-i.len/2+3.2*i.S),v.rotation.y=_*Math.PI/2,c.add(v)}this.group.add(o);let M={g:o,inner:c,gear:l,a:i,al:e,wide:n,navR:u,navG:f,strL:d,strR:x,bcn:p,land:m,state:"parked",x:0,z:0,y:0,h:0,pitch:0,roll:0,v:0,t:0,path:null,stand:null,flight:e.code+" "+this.flightNo++,dest:ra[Math.floor(Math.random()*ra.length)],gearDown:1,thrust:0};return this.planes.push(M),M}_initPlanes(){let t=Math.min(this.stands.length,6);for(let n=0;n<t;n++){if(Math.random()<.2)continue;let i=this._newPlane();this._park(i,this.stands[n]),i.t=30+Math.random()*160}let e=this._newPlane();this._startApproach(e,.55),this.nextArrival=70}_park(t,e){t.state="parked",t.stand=e,e.busy=t,t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.pitch=0,t.roll=0,t.v=0,t.gearDown=1}_startApproach(t,e=1){t.state="approach";let n=11e3*e,i=this.at(-n,0);t.x=i.x,t.z=i.y,t.h=this.heading,t.v=72,t.y=Math.tan(3*Math.PI/180)*(n+330)+t.a.groundY,t.gearDown=1,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"Landing"})}_freeStand(){let t=this.stands.filter(e=>!e.busy);return t.length?t[Math.floor(Math.random()*t.length)]:null}_taxiPathFromRunway(t,e){let n=[];n.push(this.at(t,0)),n.push(this.at(t+120,this.taxiOff*.5));let i=this.rel(e.lead);return n.push(this.at(Math.max(200,Math.min(this.len-200,i.x))+(t<i.x?-60:60),this.taxiOff)),n.push(this.at(i.x,this.taxiOff)),n.push(e.lead.clone()),n.push(e.p.clone()),n}_taxiPathToRunway(t){let e=[],n=t.p.clone().addScaledVector(new j(Math.sin(t.h),Math.cos(t.h)),-45),i=this.rel(n);return e.push(n),e.push(this.at(i.x,this.taxiOff)),e.push(this.at(160,this.taxiOff)),e.push(this.at(60,this.taxiOff*.5)),e.push(this.at(30,0)),e.push(this.at(60,0)),e}_followPath(t,e,n){if(!t.path||t.pi>=t.path.length)return!0;let i=t.path[t.pi],s=i.x-t.x,o=i.y-t.z,a=Math.hypot(s,o),c=Math.atan2(s,o)-t.h;c=Math.atan2(Math.sin(c),Math.cos(c));let h=t.pi===t.path.length-1;return t.v+=((h&&a<60?Math.max(1.5,a/10):Math.abs(c)>.5?4:n)-t.v)*Math.min(1,e*.8),t.h+=ze.clamp(c,-e*.45,e*.45),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,a<(h?1.2:14)&&t.pi++,t.pi>=t.path.length}runwayIncursion(t,e){let n=this.rel(new j(t,e));return n.x>-60&&n.x<this.len+60&&Math.abs(n.y)<this.rwW/2+8}update(t,e,n,i){this.time+=t;let s=this.time,o=s%1.2<.08?1:0,a=s%1<.15?1:.1;this.beacon.material.color.setScalar(0).setRGB(a,.05,.03),this.radar.rotation.y=s*1.6,this.rwLights.visible=e>.2||!0,this.rwLights.material.color.setScalar(.4+e*1.6),this.alsBars.material.color.setScalar(.3+e*1.5);let l=s*2%1,c=new yt;for(let u=0;u<this.alsN;u++){let f=Math.abs((1-l)*this.alsN-u)<1?2.5:0;this.rabbit.setColorAt(u,c.setRGB(f,f,f))}this.rabbit.instanceColor.needsUpdate=!0,this.towerCab.material.emissiveIntensity=e*.8,this.zoneMat.opacity=.5+.4*Math.sin(s*4),this.papi.forEach((u,f)=>u.material.color.setHex(f<2?16777215:16719904));let h=n&&this.runwayIncursion(n.x,n.z);if(this.nextArrival-=t,this.nextArrival<=0){let u=this.planes.some(d=>["approach","landing","takeoff","lineup"].includes(d.state)&&!d.cine),f=this._freeStand();if(!u&&f&&this.planes.filter(d=>!d.cine).length<9){let d=this._newPlane();this._startApproach(d)}this.nextArrival=80+Math.random()*60}for(let u=this.planes.length-1;u>=0;u--){let f=this.planes[u];if(f!==i){if(this._updatePlane(f,t,h),f.dead){this.group.remove(f.g),this.planes.splice(u,1);continue}this._pose(f,t,e,o)}}i&&this._pose(i,t,e,o),this._updateVehicles(t),this.board=this.board.slice(0,8)}_updatePlane(t,e,n){let i=t.a.groundY;switch(t.state){case"parked":{t.t-=e,t.thrust=0,t.t<=0&&(this.planes.some(o=>["takeoff","lineup","taxiOut","pushback"].includes(o.state)&&o!==t&&!o.cine)?t.t=10:(t.state="pushback",t.pb=0,this.board.unshift({t:"DEP",flight:t.flight,city:t.dest,status:"Departing"})));break}case"pushback":{t.thrust=.1,t.pb+=e;let s=1.6;t.pb<26?(t.x-=Math.sin(t.h)*s*e,t.z-=Math.cos(t.h)*s*e):(t.stand&&(t.stand.busy=null),t.path=this._taxiPathToRunway(t.stand||{p:new j(t.x,t.z),h:t.h}),t.path.shift(),t.pi=0,t.state="taxiOut",t.stand=null);break}case"taxiOut":{t.thrust=.25,this._followPath(t,e,9)&&(t.state="lineup",t.t=4);break}case"lineup":{t.v*=.9,t.thrust=.3;let s=this.heading-t.h;s=Math.atan2(Math.sin(s),Math.cos(s)),t.h+=s*Math.min(1,e),t.t-=e,t.t<=0&&!n&&!this.planes.some(o=>o.state==="landing"||o.state==="approach"&&this.rel(new j(o.x,o.z)).x>-3500)&&(t.state="takeoff");break}case"takeoff":{t.thrust=1,t.v+=2.3*e,t.h+=Math.atan2(Math.sin(this.heading-t.h),Math.cos(this.heading-t.h))*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.v>70&&(t.pitch=Math.min(.16,t.pitch+e*.06)),t.v>76&&(t.y+=Math.max(0,t.v-76)*e*.35+t.pitch*t.v*e*.6),t.y=Math.max(i,t.y),t.y>i+30&&(t.gearDown=Math.max(0,t.gearDown-e*.4)),t.y>i+150&&(t.state="climb");break}case"climb":{t.thrust=.9,t.v=Math.min(120,t.v+e*1.5),t.y+=11*e,t.roll=Math.min(.3,t.roll+e*.05)*(t.y>i+500?1:0),t.h+=t.roll*e*.08,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.3),t.y>2600&&(t.dead=!0);break}case"approach":{t.thrust=.35;let s=this.rel(new j(t.x,t.z));if(n&&s.x>-4e3&&s.x<600&&!t.ga){t.ga=!0,t.state="goaround",this.goAround=!0,this.board.unshift({t:"ARR",flight:t.flight,city:t.dest,status:"GO-AROUND"});break}let o=Math.tan(3*Math.PI/180)*(330-s.x)+i;t.y+=(o-t.y)*Math.min(1,e*1.5),t.v+=(68-t.v)*e*.2;let a=s.y;t.h=this.heading-ze.clamp(a*.004,-.2,.2),t.pitch=.04,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<i+16&&(t.state="flare");break}case"flare":{t.thrust=.1,t.pitch=Math.min(.1,t.pitch+e*.08),t.y=Math.max(i,t.y-2.2*e),t.v-=1.2*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.y<=i+.01&&(t.state="landing",t.touch=1.5,this.onTouchdown&&this.onTouchdown(t));break}case"landing":{if(t.thrust=t.v>30?.8:.15,t.pitch=Math.max(0,t.pitch-e*.05),t.v=Math.max(14,t.v-2.4*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.touch>0&&(t.touch-=e),t.v<=14.5){let s=this._freeStand(),o=this.rel(new j(t.x,t.z));if(s){s.busy=t,t.stand=s,t.path=this._taxiPathFromRunway(o.x,s),t.path.shift(),t.pi=0,t.state="taxiIn";let a=this.board.find(l=>l.flight===t.flight);a&&(a.status="Landed")}else t.state="climb"}break}case"goaround":{t.thrust=1,t.v=Math.min(95,t.v+e*3),t.pitch=Math.min(.14,t.pitch+e*.05),t.y+=12*e,t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e,t.gearDown=Math.max(0,t.gearDown-e*.25),t.y>900&&(t.dead=!0);break}case"taxiIn":{t.thrust=.2,this._followPath(t,e,10)&&(this._park(t,t.stand),t.t=90+Math.random()*120,t.dest=ra[Math.floor(Math.random()*ra.length)],t.flight=t.al.code+" "+this.flightNo++);break}}}_pose(t,e,n,i){t.g.position.set(t.x,t.y-t.a.groundY+t.a.groundY,t.z),t.g.position.y=t.y,t.g.rotation.set(0,t.h,0),t.inner.rotation.set(-t.pitch,0,t.roll),t.gear.visible=t.gearDown>.05,t.gear.scale.y=Math.max(.05,t.gearDown),t.gear.position.y=(1-t.gearDown)*1.5;let s=t.state!=="parked";t.navR.visible=t.navG.visible=!0,t.strL.visible=t.strR.visible=s&&i>0,t.bcn.visible=s&&this.time%1.3<.2,t.land.visible=["approach","flare","landing","takeoff","climb","goaround","scenic"].includes(t.state),t.land.scale.setScalar(n>.3?2.5:1)}_serviceVehicles(){let t=[];for(let n=0;n<Math.min(4,this.stands.length);n++){let i=this.stands[n],s=new j(Math.sin(i.h),Math.cos(i.h)),o=new j(s.y,-s.x);t.push([i.p.clone().addScaledVector(o,14),i.p.clone().addScaledVector(o,14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14).addScaledVector(s,-30),i.p.clone().addScaledVector(o,-14)])}let e=[["truck",15909376],["van",15909376],["hatch",16763904],["truck",14540253]];t.forEach((n,i)=>{let[s,o]=e[i%e.length],a=Bn(s,{}),l=new wt({color:o,vertexColors:!0,roughness:.5}),c=new Yt;c.add(new Q(a.paint,l),new Q(a.detail,new wt({vertexColors:!0})));let h=new Q(new Re(.2,6,4),new pe({color:16752640}));h.position.y=a.spec.roof[2][1]+.2,c.add(h),c.scale.setScalar(s==="truck"?.75:1),c.children.forEach(u=>u.castShadow=!0),this.group.add(c),this.vehicles.push({g:c,loop:n,i:0,x:n[0].x,z:n[0].y,h:0,flash:h,wait:Math.random()*10})})}_updateVehicles(t){for(let e of this.vehicles){if(e.flash.visible=(this.time*2+e.i)%1<.5,e.wait>0){e.wait-=t;continue}let n=e.loop[e.i],i=n.x-e.x,s=n.y-e.z;if(Math.hypot(i,s)<1){e.i=(e.i+1)%e.loop.length,e.i===0&&(e.wait=6+Math.random()*10);continue}let l=Math.atan2(i,s)-e.h;l=Math.atan2(Math.sin(l),Math.cos(l)),e.h+=ze.clamp(l,-t*1.5,t*1.5);let c=Math.abs(l)>.6?2:5;e.x+=Math.sin(e.h)*c*t,e.z+=Math.cos(e.h)*c*t,e.g.position.set(e.x,.03,e.z),e.g.rotation.y=e.h}}noiseAt(t,e,n=1){let i=0;for(let s of this.planes){let o=Math.hypot(s.x-t,s.z-e,(s.y-n)*1),a=(.15+s.thrust)/(1+(o/220)**2);a>i&&(i=a)}return Math.min(1,i)}createScenicFlight(){let t=this._newPlane(0);t.cine=!0;let e=this._freeStand()||this.stands[0];t.x=e.p.x,t.z=e.p.y,t.h=e.h,t.y=t.a.groundY,t.flight="AT 1991",t.dest="Bishkek scenic";let n=t.a.groundY,i=(a,l)=>new L(a.x,l,a.y),s=[i(this.at(this.len-700,0),n+60),i(this.at(this.len+3e3,200),380),i(this.at(this.len+7e3,1800),560),new L(-3500,520,-9e3),new L(-900,430,-2600),new L(150,380,0),new L(1400,390,1600),new L(400,420,4200),new L(-3e3,480,4e3),new L(-6200,560,-1500),new L(-9500,620,-9e3),i(this.at(-13500,-2500),700),i(this.at(-9500,0),520),i(this.at(-6e3,0),Math.tan(3*Math.PI/180)*6330+n)],o=new br(s,!1,"centripetal",.5);return{plane:t,stand:e,curve:o,stage:"pushback",t:0,s:0}}updateScenic(t,e){let n=t.plane,i=n.a.groundY;switch(t.t+=e,t.stage){case"pushback":n.state="pushback",n.thrust=.1,n.x-=Math.sin(n.h)*2.4*e,n.z-=Math.cos(n.h)*2.4*e,t.t>12&&(t.stage="taxi",n.path=this._taxiPathToRunway({p:new j(n.x,n.z),h:n.h}),n.path.shift(),n.pi=0);break;case"taxi":n.state="taxiOut",n.thrust=.25,this._followPath(n,e,16)&&(t.stage="roll",n.v=4);break;case"roll":{n.state="takeoff",n.thrust=1;let s=this.heading-n.h;s=Math.atan2(Math.sin(s),Math.cos(s)),n.h+=s*Math.min(1,e*2),n.v+=2.6*e,n.x+=Math.sin(n.h)*n.v*e,n.z+=Math.cos(n.h)*n.v*e,n.v>70&&(n.pitch=Math.min(.15,n.pitch+e*.07)),n.v>76&&(n.y+=(n.v-74)*e*.5);let o=this.rel(new j(n.x,n.z));(n.y>i+55||o.x>this.len-700)&&(t.stage="air",t.s=0,t.curve.points[0].set(n.x,n.y,n.z),t.curve.updateArcLengths&&t.curve.updateArcLengths(),t.L=t.curve.getLength());break}case"air":{n.state="scenic",n.thrust=.7,n.v+=(88-n.v)*e*.3,t.s+=n.v*e;let s=Math.min(1,t.s/t.L),o=t.curve.getPointAt(s),a=t.curve.getTangentAt(s),l=t.curve.getTangentAt(Math.min(1,s+.01));n.x=o.x,n.y=o.y,n.z=o.z;let c=Math.atan2(a.x,a.z),h=Math.atan2(l.x*a.z-l.z*a.x,l.x*a.x+l.z*a.z);n.h=c,n.roll+=(ze.clamp(-h*18,-.5,.5)-n.roll)*Math.min(1,e*1.5),n.pitch+=(Math.asin(ze.clamp(a.y,-.3,.3))*1.2+.03-n.pitch)*Math.min(1,e),n.gearDown=s<.1?Math.max(0,n.gearDown-e*.3):s>.92?Math.min(1,n.gearDown+e*.3):n.gearDown,s>=1&&(t.stage="final",n.state="approach",n.roll=0);break}case"final":{n.gearDown=Math.min(1,n.gearDown+e*.3);let s=n.state;this._updatePlane(n,e,!1),n.state==="landing"&&s!=="landing"&&(t.touch=!0),(n.state==="taxiIn"||n.state==="climb")&&(t.stage="taxiIn",n.stand&&(n.stand.busy=null),n.state="taxiIn");break}case"taxiIn":{n.thrust=.2,(this._followPath(n,e,16)||!n.path)&&(t.stage="done");break}case"done":return!0}return n.roll*=t.stage==="air"?1:Math.exp(-e*2),!1}endScenic(t){let e=t.plane;e.stand&&(e.stand.busy=null),this.group.remove(e.g),this.planes.splice(this.planes.indexOf(e),1)}scenicCamera(t,e,n,i){let s=t.plane,o=Math.sin(s.h),a=Math.cos(s.h),l=s.a.S;if(e===0)n.set(s.x-o*70*l,s.y+16*l,s.z-a*70*l),i.set(s.x+o*20,s.y+2,s.z+a*20);else if(e===1){let c=-a,h=o;n.set(s.x-c*2.3*l+o*2,s.y+.6*l,s.z-h*2.3*l+a*2),i.set(s.x-c*60+o*-10,s.y-30,s.z-h*60+a*-10)}else e===2?(n.set(s.x+o*(s.a.len/2-3),s.y+1.4*l,s.z+a*(s.a.len/2-3)),i.set(s.x+o*300,s.y-30+Math.sin(s.pitch)*300,s.z+a*300)):((!t.camAnchor||t.camAnchor.distanceTo(new L(s.x,s.y,s.z))>1600)&&(t.camAnchor=new L(s.x+o*900+(Math.random()-.5)*400,Math.max(30,s.y*.6),s.z+a*900+(Math.random()-.5)*400)),n.copy(t.camAnchor),i.set(s.x,s.y,s.z))}};function pv(){let r=document.createElement("canvas");r.width=1e3,r.height=600;let t=r.getContext("2d");t.fillStyle="#e8112d",t.fillRect(0,0,1e3,600);let e=500,n=300;t.fillStyle="#ffef00";for(let s=0;s<40;s++){let o=s/40*Math.PI*2;t.beginPath(),t.moveTo(e+Math.cos(o-.05)*105,n+Math.sin(o-.05)*105),t.lineTo(e+Math.cos(o)*190,n+Math.sin(o)*190),t.lineTo(e+Math.cos(o+.05)*105,n+Math.sin(o+.05)*105),t.fill()}t.beginPath(),t.arc(e,n,108,0,7),t.fill(),t.strokeStyle="#e8112d",t.lineWidth=14,t.beginPath(),t.arc(e,n,80,0,7),t.stroke(),t.lineWidth=10;for(let s of[-1,1]){for(let o of[-26,26])t.beginPath(),t.moveTo(e+o,n-76),t.quadraticCurveTo(e+o+s*30*(o>0?1:-1)*0,n,e+o,n+76),t.stroke();t.beginPath(),t.moveTo(e-76,n+s*26),t.quadraticCurveTo(e,n+s*8,e+76,n+s*26),t.stroke()}let i=new Pe(r);return i.colorSpace=de,i.anisotropy=8,i}var nh=()=>new wt({color:6965800,metalness:.85,roughness:.38}),$s=(r=10127994)=>new wt({color:r,roughness:.75}),aa=class{constructor(t,e,n){this.scene=t,this.map=e,this.g=new Yt,t.add(this.g),this.anim=[],this.world=n,this._flag(-25,-30),this._manas(17,-42,Math.PI),this._manas(-1307,-150,Math.PI,.7),this._victory(1032,-325),this._mosque(),this._fountains([[525,-78],[544,-80],[559,-79],[581,-78],[597,-78],[613,-77],[159,-204],[416,-193],[710,-100],[711,-128],[614,-271],[627,469],[716,132]]),this._ferris(-330,-270),this._mig(-498,179)}_col(t,e,n){if(!this.world)return;let i=[[-n,-n],[n,-n],[n,n],[-n,n]];for(let s=0;s<4;s++)this.world.addWall(t+i[s][0],e+i[s][1],t+i[(s+1)%4][0],e+i[(s+1)%4][1])}_flag(t,e){let n=new Q(new Vt(.22,.45,45,12),new wt({color:14212320,metalness:.9,roughness:.2}));n.position.set(t,22.5,e),n.castShadow=!0;let i=new Q(new Vt(3.5,4,1.2,24),$s(11577496));i.position.set(t,.6,e),i.receiveShadow=!0;let s=new Q(new Re(.5,12,8),new wt({color:13936688,metalness:1,roughness:.2}));s.position.set(t,45.3,e);let o=16,a=9.6,l=new Ee(o,a,40,16).translate(o/2,0,0),c=new wt({map:pv(),side:we,roughness:.75});c.onBeforeCompile=d=>{d.uniforms.uTime=An.uTime,d.vertexShader=d.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float k = position.x / ${o.toFixed(1)};
          float w = sin(position.x*0.55 - uTime*3.4) * 0.9 + sin(position.x*0.9 + position.y*0.3 - uTime*5.1)*0.35;
          transformed.z += w * k * 1.2;
          transformed.y -= k*k*0.8;
          transformed.x -= abs(w)*k*0.15;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
          float kk = position.x / ${o.toFixed(1)};
          objectNormal = normalize(vec3(-cos(position.x*0.55 - uTime*3.4)*0.5*kk, 0.0, 1.0));`)};let h=new Q(l,c);h.position.set(t+.3,45-a/2-.4,e),h.castShadow=!0,h.customDepthMaterial=void 0,this.g.add(n,i,s,h),this._col(t,e,3.6);let u=new wt({color:2767402,roughness:.6}),f=new wt({color:13146744});for(let d of[-1,1]){let x=new Yt,p=new Q(new Dt(.45,1.05,.28),u);p.position.y=1.35;let m=new Q(new Dt(.38,.85,.24),u);m.position.y=.42;let g=new Q(new Re(.12,10,8),f);g.position.y=2;let M=new Q(new Vt(.16,.13,.12,10),new wt({color:1976862}));M.position.y=2.12;let _=new Q(new Dt(.05,1.2,.05),new wt({color:2759184}));_.position.set(.3,1.5,.1),x.add(p,m,g,M,_),x.children.forEach(v=>v.castShadow=!0),x.position.set(t+d*5,1.2,e+3.5),this.g.add(x),this.anim.push({type:"guard",g:x,base:x.position.clone(),s:d})}}_manas(t,e,n,i=1){let s=new Yt,o=new Q(new Vt(3.2,3.8,9,8),$s(9075824));o.position.y=4.5;let a=new Q(new Vt(6,6.5,1,16),$s(10524808));a.position.y=.5;let l=nh(),c=new Yt,h=new Q(new Re(1,16,12),l);h.scale.set(1.1,1.1,2.3),h.position.y=3;let u=new Q(new Vt(.55,.8,2.2,10),l);u.position.set(0,4.3,1.9),u.rotation.x=.7;let f=new Q(new Dt(.7,.75,1.6),l);f.position.set(0,5.2,2.8),f.rotation.x=.5;let d=new Q(new Ei(.35,2.2,8),l);d.position.set(0,2.6,-2.5),d.rotation.x=-.6,c.add(h,u,f,d);for(let[w,S,R]of[[-.55,1.4,-.9],[.55,1.5,-1.2],[-.55,-1.5,.15],[.55,-1.5,-.1]]){let y=new Q(new Vt(.2,.16,2.4,8).translate(0,-1.2,0),l);y.position.set(w,2.7,S),y.rotation.x=R,c.add(y)}c.rotation.x=-.32,c.position.y=.4;let x=new Yt,p=new Q(new Vt(.55,.7,1.9,10),l);p.position.y=5;let m=new Q(new Re(.42,12,10),l);m.position.y=6.3;let g=new Q(new Ei(.45,.8,10),l);g.position.y=6.8;let M=new Q(new Vt(.16,.16,1.8,8).translate(0,.9,0),l);M.position.set(.6,5.6,0),M.rotation.z=-.5;let _=new Q(new Dt(.08,2.4,.18).translate(0,1.2,0),new wt({color:10518608,metalness:1,roughness:.25}));_.position.set(1.4,7.1,0),_.rotation.z=-.3;let v=new Q(new Dt(1.5,1.8,.1),l);v.position.set(0,4.8,-.7),v.rotation.x=.5,x.add(p,m,g,M,_,v);let I=new Yt;I.add(c,x),I.position.y=9,s.add(o,a,I),s.traverse(w=>{w.isMesh&&(w.castShadow=!0,w.receiveShadow=!0)}),s.position.set(t,0,e),s.rotation.y=n,s.scale.setScalar(i),this.g.add(s),this._col(t,e,4*i)}_victory(t,e){let n=new Yt,i=new wt({color:8008488,roughness:.55,metalness:.1}),s=new Q(new Vt(15,16,1.2,36),$s(9076856));s.position.y=.6,n.add(s);for(let u=0;u<3;u++){let f=u/3*Math.PI*2,d=new L(Math.cos(f)*12,1,Math.sin(f)*12),x=new L(Math.cos(f)*9,15,Math.sin(f)*9),p=new L(Math.cos(f)*2.5,21,Math.sin(f)*2.5),m=new Fs(d,x,p),g=new Q(new Uo(m,24,1.1,6,!1),i);n.add(g)}let o=new Q(new Tr(2.7,.7,8,24),i);o.rotation.x=Math.PI/2,o.position.y=21,n.add(o);let a=new Q(new Vt(1.6,1.1,.8,16),new wt({color:3355443,metalness:.8,roughness:.3}));a.position.y=1.6,n.add(a);let l=new Yt,c=new Q(new Ei(.9,3.4,10),nh());c.position.y=1.7;let h=new Q(new Re(.32,10,8),nh());h.position.y=3.6,l.add(c,h),l.position.set(6.5,1.2,0),n.add(l),n.traverse(u=>{u.isMesh&&(u.castShadow=!0,u.receiveShadow=!0)}),n.position.set(t,0,e),this.g.add(n),this._col(t,e,3),this.anim.push({type:"flame",ps:this._fire(t,2,e)})}_fire(t,e,n){let s=new se,o=new Float32Array(90);for(let h=0;h<90;h++)o[h]=Math.random();s.setAttribute("position",new le(new Float32Array(90*3),3)),s.setAttribute("seed",new le(o,1));let a=new xe({uniforms:{uTime:An.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vT;
        void main(){ float t = fract(uTime*0.9 + seed); vT = t;
          vec3 p = vec3(sin(seed*40.0)*0.7*(1.0-t), t*3.2, cos(seed*31.0)*0.7*(1.0-t));
          p.x += sin(uTime*6.0+seed*10.0)*0.15*t;
          vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
          gl_PointSize = (1.0-t)*900.0/ -mv.z; }`,fragmentShader:`varying float vT; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d));
          vec3 c = mix(vec3(1.0,0.85,0.3), vec3(1.0,0.25,0.05), vT); gl_FragColor = vec4(c*2.0, a*(1.0-vT)); }`,transparent:!0,depthWrite:!1,blending:qe}),l=new ii(s,a);l.position.set(t,e,n),l.frustumCulled=!1,this.g.add(l);let c=new Ji(16747056,0,30,2);return c.position.set(t,e+1.5,n),this.g.add(c),this.anim.push({type:"firelight",light:c}),l}_mosque(){let t=this.map.buildings.find(x=>x.name&&/Central Mosque|Центральная мечеть|Сарахси/.test(x.name)&&x.kind===8)||this.map.buildings.find(x=>x.name&&/Central Mosque|Центральная мечеть/.test(x.name));if(!t)return;let e=(t.x0+t.x1)/2,n=(t.z0+t.z1)/2,i=t.x1-t.x0,s=t.z1-t.z0,o=Math.min(i,s)*.28,a=Math.max(t.h,16),l=new wt({color:15921128,roughness:.5}),c=new wt({color:5939384,metalness:.5,roughness:.25}),h=new wt({color:14200896,metalness:1,roughness:.2}),u=new Q(new Vt(o,o,5,24),l);u.position.set(e,a+2.5,n);let f=new Q(new Re(o,32,16,0,Math.PI*2,0,Math.PI/2),c);f.position.set(e,a+5,n),f.scale.y=1.15;let d=new Q(new Vt(.15,.3,4,8),h);d.position.set(e,a+5+o*1.15+2,n),this.g.add(u,f,d);for(let[x,p]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let m=e+x*(i/2-2),g=n+p*(s/2-2),M=new Q(new Vt(1.6,2,52,12),l);M.position.set(m,26,g);let _=new Q(new Vt(2.6,2.2,1.4,12),l);_.position.set(m,44,g);let v=new Q(new Ei(1.7,7,12),c);v.position.set(m,55.5,g);let I=new Q(new Vt(.1,.2,2.5,6),h);I.position.set(m,60,g),this.g.add(M,_,v,I),this._col(m,g,2)}this.g.children.slice(-19).forEach(x=>{x.castShadow=!0,x.receiveShadow=!0})}_fountains(t){for(let[n,i]of t){let s=new Q(new Vt(4.2,4.4,.6,28,1,!0),$s(12103840));s.position.set(n,.3,i);let o=new Q(new wi(4.1,28).rotateX(-Math.PI/2),new wt({color:5933728,roughness:.05,metalness:.3}));o.position.set(n,.45,i),this.g.add(s,o);let a=new se,l=new Float32Array(140);for(let u=0;u<140;u++)l[u]=Math.random();a.setAttribute("position",new le(new Float32Array(140*3),3)),a.setAttribute("seed",new le(l,1));let c=new xe({uniforms:{uTime:An.uTime},vertexShader:`attribute float seed; uniform float uTime; varying float vA;
          void main(){ float t = fract(uTime*0.55 + seed); float a = seed*6.2831*7.0;
            float jet = step(0.5, fract(seed*3.0));
            float r = mix(0.4, 3.0, jet);
            vec3 v0 = vec3(cos(a)*r*0.6, mix(9.0, 5.0, jet), sin(a)*r*0.6);
            vec3 p = v0*t*1.6 + vec3(0.0,-9.8,0.0)*t*t*1.28;
            p.y = max(p.y, 0.0);
            vA = 1.0 - t;
            vec4 mv = modelViewMatrix*vec4(p,1.0); gl_Position = projectionMatrix*mv;
            gl_PointSize = 260.0 / -mv.z; }`,fragmentShader:"varying float vA; void main(){ float a = smoothstep(0.5,0.1,length(gl_PointCoord-0.5)); gl_FragColor = vec4(0.85,0.93,1.0, a*0.55*vA); }",transparent:!0,depthWrite:!1}),h=new ii(a,c);h.position.set(n,.5,i),h.frustumCulled=!1,this.g.add(h),this._col(n,i,3.5)}}_ferris(t,e){let n=new Yt,i=new wt({color:15263976,metalness:.6,roughness:.3}),s=16,o=new Yt,a=new Q(new Tr(s,.25,6,48),i);o.add(a);let l=a.clone();l.position.z=1.6,o.add(l);let c=[14692400,15777824,3186912,4243552];this.cabins=[];for(let h=0;h<16;h++){let u=h/16*Math.PI*2,f=new Q(new Vt(.08,.08,s,4),i);f.position.set(Math.cos(u)*s/2,Math.sin(u)*s/2,.8),f.rotation.z=u-Math.PI/2,o.add(f);let d=new Q(new Dt(1.4,1.5,1.4),new wt({color:c[h%4]}));d.position.set(Math.cos(u)*s,Math.sin(u)*s-1,.8),o.add(d),this.cabins.push({cab:d,a:u})}o.position.y=s+3;for(let h of[-1,1]){let u=new Q(new Vt(.3,.4,s+5,6),i);u.position.set(h*5,(s+3)/2,-.6),u.rotation.z=h*.28,n.add(u);let f=u.clone();f.position.z=2.2,n.add(f)}n.add(o),n.position.set(t,0,e),n.rotation.y=.4,n.traverse(h=>{h.isMesh&&(h.castShadow=!0)}),this.g.add(n),this.anim.push({type:"ferris",wheel:o,R:s})}_mig(t,e){let n=new Yt,i=new wt({color:10134688,metalness:.6,roughness:.35}),s=new Q(new Vt(.5,.75,13,12).rotateX(Math.PI/2),i),o=new Q(new Ei(.5,2,12).rotateX(Math.PI/2),i);o.position.z=7.5;let a=new En;a.moveTo(0,2),a.lineTo(3.6,-2.5),a.lineTo(-3.6,-2.5),a.closePath();let l=new Q(new Un(a,{depth:.15,bevelEnabled:!1}).rotateX(Math.PI/2),i),c=new Q(new Dt(.15,2.4,2.6),i);c.position.set(0,1.4,-5);let h=new Q(new Vt(.6,1,6,8),$s(8947848));h.position.y=-3.4,n.add(s,o,l,c,h),n.position.set(t,6.8,e),n.rotation.set(-.35,1.2,0),n.traverse(u=>{u.isMesh&&(u.castShadow=!0)}),this.g.add(n)}update(t,e,n){for(let i of this.anim)if(i.type==="ferris"){i.wheel.rotation.z=e*.05;for(let s of this.cabins){let o=s.a+i.wheel.rotation.z;s.cab.position.set(Math.cos(s.a)*i.R,Math.sin(s.a)*i.R-1,.8),s.cab.rotation.z=-i.wheel.rotation.z}}else if(i.type==="firelight")i.light.intensity=(8+Math.sin(e*13)*2+Math.sin(e*7.3)*1.5)*(.4+n*1.6);else if(i.type==="guard"){let s=e%60/60,o=s>.8?Math.sin((s-.8)/.2*Math.PI):0;i.g.position.z=i.base.z+o*6,i.g.rotation.y=o>.01?0:Math.PI}}};var la=class{constructor(){this.ctx=null,this.vol=.7,this.muted=!1}start(){if(this.ctx){this.ctx.resume();return}let t=this.ctx=new(window.AudioContext||window.webkitAudioContext);this.master=t.createGain(),this.master.gain.value=this.vol,this.master.connect(t.destination);let e=t.sampleRate*2,n=t.createBuffer(1,e,t.sampleRate),i=n.getChannelData(0),s=0;for(let a=0;a<e;a++){let l=Math.random()*2-1;s=(s+.02*l)/1.02,i[a]=l*.6+s*3}this.noise=n,this.engGain=t.createGain(),this.engGain.gain.value=0,this.engFilter=t.createBiquadFilter(),this.engFilter.type="lowpass",this.engFilter.frequency.value=800,this.engFilter.Q.value=2,this.osc=[];for(let[a,l,c]of[["sawtooth",1,.35],["sawtooth",1.01,.3],["square",.5,.25],["triangle",2,.15]]){let h=t.createOscillator();h.type=a;let u=t.createGain();u.gain.value=c,h.connect(u),u.connect(this.engFilter),h.start(),this.osc.push([h,l])}this.engFilter.connect(this.engGain),this.engGain.connect(this.master);let o=(a,l,c)=>{let h=t.createBufferSource();h.buffer=n,h.loop=!0;let u=t.createBiquadFilter();u.type=a,u.frequency.value=l,u.Q.value=c;let f=t.createGain();return f.gain.value=0,h.connect(u),u.connect(f),f.connect(this.master),h.start(Math.random()*.5),{s:h,fl:u,g:f}};this.wind=o("bandpass",600,.4),this.tyre=o("bandpass",1800,6),this.city=o("lowpass",420,.5),this.jet=o("bandpass",900,.6),this.jetLow=o("lowpass",140,1),this.road=o("lowpass",220,.8),this._ambientT=0}setVolume(t){this.vol=t,this.master&&(this.master.gain.value=this.muted?0:t)}toggleMute(){return this.muted=!this.muted,this.setVolume(this.vol),this.muted}update(t,e,n){if(!this.ctx)return;let i=this.ctx.currentTime,s=e?e.rpm:0,o=28+s/60*1;for(let[h,u]of this.osc)h.frequency.setTargetAtTime(o*u,i,.03);let a=n.throttle||0;this.engFilter.frequency.setTargetAtTime(350+s*.35+a*900,i,.05),this.engGain.gain.setTargetAtTime(n.inFlight?0:.05+a*.08+s/7e3*.06,i,.05);let l=e?e.speed:0;this.wind.g.gain.setTargetAtTime(n.inFlight?.35:Math.min(.35,(l/60)**2*.35),i,.1),this.wind.fl.frequency.setTargetAtTime(400+l*12,i,.1),this.road.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.25,l/40*.25),i,.1),this.tyre.g.gain.setTargetAtTime(n.inFlight?0:Math.min(.5,Math.max(0,(e.slip-.18)*1.6))*(l>5?1:0),i,.04),this.city.g.gain.setTargetAtTime(n.inFlight?.02:.05+n.cityLevel*.12,i,.5);let c=n.jet||0;this.jet.g.gain.setTargetAtTime(c*.6,i,.2),this.jetLow.g.gain.setTargetAtTime(c*.9,i,.2),this.jet.fl.frequency.setTargetAtTime(700+c*1800,i,.3),this._ambientT-=t,this._ambientT<=0&&!n.inFlight&&(this._ambientT=2+Math.random()*6/(.3+n.cityLevel),n.cityLevel>.2&&this.horn(.05+Math.random()*.06,.15+Math.random()*.4,.7+Math.random()*.6))}horn(t=.25,e=.5,n=1){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createGain();o.gain.setValueAtTime(0,s),o.gain.linearRampToValueAtTime(t,s+.02),o.gain.setValueAtTime(t,s+e),o.gain.linearRampToValueAtTime(0,s+e+.06);let a=i.createBiquadFilter();a.type="lowpass",a.frequency.value=2200;for(let l of[405*n,507*n]){let c=i.createOscillator();c.type="square",c.frequency.value=l,c.connect(a),c.start(s),c.stop(s+e+.1)}a.connect(o),o.connect(this.master)}crash(t){if(!this.ctx)return;let e=this.ctx,n=e.currentTime,i=e.createBufferSource();i.buffer=this.noise;let s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900+t*80;let o=e.createGain(),a=Math.min(.9,.15+t*.05);o.gain.setValueAtTime(a,n),o.gain.exponentialRampToValueAtTime(.001,n+.5+t*.02),i.connect(s),s.connect(o),o.connect(this.master),i.start(n,Math.random()),i.stop(n+1.2);let l=e.createOscillator();l.type="triangle",l.frequency.setValueAtTime(180+Math.random()*120,n),l.frequency.exponentialRampToValueAtTime(60,n+.3);let c=e.createGain();c.gain.setValueAtTime(a*.5,n),c.gain.exponentialRampToValueAtTime(.001,n+.35),l.connect(c),c.connect(this.master),l.start(n),l.stop(n+.4)}fine(){if(!this.ctx)return;let t=this.ctx,e=t.currentTime;for(let a of[0,.12]){let l=t.createBufferSource();l.buffer=this.noise;let c=t.createBiquadFilter();c.type="highpass",c.frequency.value=3e3;let h=t.createGain();h.gain.setValueAtTime(.5,e+a),h.gain.exponentialRampToValueAtTime(.001,e+a+.05),l.connect(c),c.connect(h),h.connect(this.master),l.start(e+a),l.stop(e+a+.08)}let n=t.createOscillator();n.type="sine";let i=t.createOscillator();i.frequency.value=28;let s=t.createGain();s.gain.value=120,i.connect(s),s.connect(n.frequency),n.frequency.value=2600;let o=t.createGain();o.gain.setValueAtTime(0,e+.3),o.gain.linearRampToValueAtTime(.18,e+.35),o.gain.setValueAtTime(.18,e+.9),o.gain.linearRampToValueAtTime(0,e+1),n.connect(o),o.connect(this.master),n.start(e+.3),i.start(e+.3),n.stop(e+1.05),i.stop(e+1.05)}siren(t){if(this.ctx)if(t&&!this._siren){let e=this.ctx,n=e.createOscillator();n.type="sawtooth";let i=e.createOscillator();i.frequency.value=.45;let s=e.createGain();s.gain.value=320,i.connect(s),s.connect(n.frequency),n.frequency.value=900;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=1800;let a=e.createGain();a.gain.value=.06,n.connect(o),o.connect(a),a.connect(this.master),n.start(),i.start(),this._siren={o:n,lfo:i,g:a}}else!t&&this._siren&&(this._siren.o.stop(),this._siren.lfo.stop(),this._siren=null)}blip(t=880,e=.08,n=.12){if(!this.ctx)return;let i=this.ctx,s=i.currentTime,o=i.createOscillator();o.type="sine",o.frequency.setValueAtTime(t,s),o.frequency.exponentialRampToValueAtTime(t*1.5,s+e);let a=i.createGain();a.gain.setValueAtTime(n,s),a.gain.exponentialRampToValueAtTime(.001,s+e+.1),o.connect(a),a.connect(this.master),o.start(s),o.stop(s+e+.12)}chime(){this.blip(660,.1),setTimeout(()=>this.blip(990,.15),120)}cash(){this.blip(1200,.05,.1),setTimeout(()=>this.blip(1600,.08,.1),70),setTimeout(()=>this.blip(2e3,.1,.08),150)}pa(){this.blip(784,.25,.12),setTimeout(()=>this.blip(622,.4,.12),350)}};var ri=150,Xe=[{id:"alatoo",name:"Ala-Too Square",local:"\u0410\u043B\u0430-\u0422\u043E\u043E \u0430\u044F\u043D\u0442\u044B",x:30,z:30,fact:"The main square of Bishkek. The 45 m flagpole and the Aikol Manas statue stand in front of the State Historical Museum. The honour guard changes here every hour."},{id:"museum",name:"National Historical Museum",local:"\u0423\u043B\u0443\u0442\u0442\u0443\u043A \u0442\u0430\u0440\u044B\u0445\u044B\u0439 \u043C\u0443\u0437\u0435\u0439",match:/National Historical Museum/,fact:"Opened in 1984 as the Lenin Museum, renovated in 2016 \u2013 the marble cube on the north side of Ala-Too Square."},{id:"victory",name:"Victory Square",local:"\u0416\u0435\u04A3\u0438\u0448 \u0430\u044F\u043D\u0442\u044B",x:1032,z:-300,fact:"Built in 1985 for the 40th anniversary of the Victory. Three red granite arches form the frame of a yurt above the eternal flame."},{id:"philharmonic",name:"Philharmonic Hall",local:"\u0424\u0438\u043B\u0430\u0440\u043C\u043E\u043D\u0438\u044F",match:/Philharmonic Hall/,fact:"The Toktogul Satylganov National Philharmonic, with the monument to the heroes of the Manas epic in front of it on Chuy Avenue."},{id:"osh",name:"Osh Bazaar",local:"\u041E\u0448 \u0431\u0430\u0437\u0430\u0440\u044B",x:-2760,z:300,fact:"The biggest bazaar in central Bishkek \u2013 dried fruit, spices, kurut, fresh nan and everything else. Expect heavy traffic around it."},{id:"tsum",name:"TSUM Aichurok",local:"\u0426\u0423\u041C \xAB\u0410\u0439\u0447\u04AF\u0440\u04E9\u043A\xBB",match:/TSUM Aichurok/,fact:"The Central Department Store on Chuy Avenue, a Bishkek landmark since 1964."},{id:"dordoi",name:"Dordoi Plaza",local:"\u0414\u043E\u0440\u0434\u043E\u0439 \u041F\u043B\u0430\u0437\u0430",match:/Dordoi Plaza/,fact:"A shopping centre right next to Victory Square, on the corner of Ibraimov and Chuy."},{id:"asia",name:"Asia Mall",local:"Asia Mall",match:/^Asia Mall$/,fact:"One of the largest malls in Bishkek, in the south of the city on Chyngyz Aytmatov Avenue."},{id:"bpark",name:"Bishkek Park",local:"\u0411\u0438\u0448\u043A\u0435\u043A \u041F\u0430\u0440\u043A",match:/^Bishkek Park$/,fact:"A modern mall on Kievskaya / Turusbekov streets with a cinema and food court."},{id:"panfilov",name:"Panfilov Park",local:"\u041F\u0430\u043D\u0444\u0438\u043B\u043E\u0432 \u0441\u0435\u0439\u0438\u043B\u0431\u0430\u0433\u044B",match:/Panfilov Park/,fact:"The city amusement park behind the White House, with a Ferris wheel and rides."},{id:"oak",name:"Oak Park",local:"\u0414\u0443\u0431\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043A",x:300,z:-170,fact:"Bishkek's oldest park, planted in 1890. It is full of century-old oaks and an open-air sculpture gallery."},{id:"mosque",name:"Central Mosque",local:"\u0411\u043E\u0440\u0431\u043E\u0440\u0434\u0443\u043A \u043C\u0435\u0447\u0438\u0442",match:/Central Mosque/,fact:"The Imam Sarakhsi Central Mosque opened in 2023. It holds up to 20,000 worshippers and has four 64 m minarets."},{id:"opera",name:"Opera & Ballet Theatre",local:"\u041E\u043F\u0435\u0440\u0430 \u0436\u0430\u043D\u0430 \u0431\u0430\u043B\u0435\u0442 \u0442\u0435\u0430\u0442\u0440\u044B",match:/Opera and Ballet/,fact:"The Abdylas Maldybaev National Opera and Ballet Theatre, a neoclassical building from 1955."},{id:"vefa",name:"Vefa Center",local:"\u0412\u0435\u0444\u0430",match:/Vefa Center/,fact:"A popular mall on the corner of Gorky and Sovetskaya streets in the south of the city."},{id:"erkindik",name:"Erkindik Boulevard",local:"\u042D\u0440\u043A\u0438\u043D\u0434\u0438\u043A \u0431\u0443\u043B\u044C\u0432\u0430\u0440\u044B",x:230,z:320,fact:'"Freedom" boulevard: a long pedestrian alley lined with huge oak and elm trees, running south from the centre.'},{id:"airport",name:"Manas International Airport",local:"\u041C\u0430\u043D\u0430\u0441 \u044D\u043B \u0430\u0440\u0430\u043B\u044B\u043A \u0430\u044D\u0440\u043E\u043F\u043E\u0440\u0442\u0443",airport:!0,fact:"Bishkek's airport (FRU), about 25 km north-west of the centre. Its single 4,200 m runway is one of the longest in Central Asia."}],ca=class{constructor(t,e,n){this.map=t,this.hud=e,this.audio=n,this.money=3e3,this.fines=[],this.speedState={armed:!0,over:0,lastFine:-100,maxSpeed:0},this.redCooldown=0,this.wrongWay=0,this.wrongCooldown=0,this.runwayT=0,this.runwayCooldown=0,this.time=0,this.mission=null,this.visited=new Set,this.route=null,this.routeTarget=null,this.routeMesh=null,this._resolvePlaces(),this._load()}_resolvePlaces(){for(let t of Xe){if(t.match){let e=this.map.pois.find(n=>t.match.test(n.en)||t.match.test(n.name));e&&(t.x=e.x,t.z=e.z)}t.x===void 0&&!t.airport&&(t.x=0,t.z=0)}}setAirport(t){let e=Xe.find(n=>n.airport);e.x=t.dropoff.x,e.z=t.dropoff.y}_load(){try{let t=JSON.parse(localStorage.getItem("bishkekDrive")||"null");t&&(this.money=t.money??this.money,this.visited=new Set(t.visited||[]),this.fines=t.fines||[],this.savedCar=t.car,this.savedColor=t.color,this.owned=t.owned,this.jobsDone=t.jobs||0)}catch{}}save(t){try{localStorage.setItem("bishkekDrive",JSON.stringify({money:this.money,visited:[...this.visited],fines:this.fines.slice(-30),car:this.homeCar||t?.type,color:this.homeColor??t?.color,owned:[...this.owned||["sedan"]],jobs:this.jobsDone||0}))}catch{}}issueFine(t,e,n,i){this.money-=e;let s={kind:t,amount:e,detail:n,time:this.hud.clockText(),photo:i};this.fines.push(s),this.audio.fine(),this.hud.showFine(s),this.onFine&&this.onFine(s)}checkRules(t,e,n,i,s,o){this.time+=t;let a=e.speed*3.6,l=this.speedState;if(a>ri){if(l.over+=t,l.maxSpeed=Math.max(l.maxSpeed,a),l.armed&&l.over>.6){l.armed=!1,l.lastFine=this.time;let c=Math.round(l.maxSpeed),h=c>200?750:c>170?500:300,u=n.street?` on ${n.street}`:"";o(f=>this.issueFine("Speeding",h,`${c} km/h in a 150 km/h zone${u}`,f))}!l.armed&&this.time-l.lastFine>12&&(l.armed=!0,l.maxSpeed=0,l.over=0)}else a<ri-5&&(l.armed=!0,l.over=0,l.maxSpeed=0);if(this.redCooldown-=t,this.redCooldown<=0&&a>12&&n.road){let c=n.road;for(let d of c.e.signals){let x=Math.sin(e.h),p=Math.cos(e.h),m=x*c.dx+p*c.dz,g=m>=0?0:1;if(d.dir!==g||Math.abs(m)<.7)continue;let M=g?c.e.len-c.s:c.s,_=e._sOnEdge&&e._sOnEdge.e===c.e?e._sOnEdge.s:null;if(_!==null&&_<d.stop&&M>=d.stop){let v=g?-c.lat:c.lat;(c.e.ow||v>-.5)&&this.map.signalState(d.cluster,d.group,this.trafficTime)==="R"&&(this.redCooldown=8,o(I=>this.issueFine("Red light",100,`Ran a red light${n.street?" on "+n.street:""}`,I)))}}let h=Math.sin(e.h),u=Math.cos(e.h),f=h*c.dx+u*c.dz>=0?0:1;e._sOnEdge={e:c.e,s:f?c.e.len-c.s:c.s}}if(this.wrongCooldown-=t,n.road&&n.road.e.ow&&n.road.dist<n.road.e.w/2&&a>15){let c=Math.sin(e.h)*n.road.dx+Math.cos(e.h)*n.road.dz;c<-.75?this.wrongWay+=t:this.wrongWay=0,this.wrongWay>2.5&&this.wrongCooldown<=0&&(this.wrongCooldown=20,this.wrongWay=0,o(h=>this.issueFine("Wrong way",150,`Driving against traffic on one-way ${n.street||"street"}`,h))),n.wrongWay=c<-.75}else this.wrongWay=0,n.wrongWay=!1;this.runwayCooldown-=t,s&&s.runwayIncursion(e.x,e.z)?(this.runwayT+=t,n.runway=!0,this.runwayT>4&&this.runwayCooldown<=0&&(this.runwayCooldown=30,o(c=>this.issueFine("Runway incursion",1e3,"Entered the active runway at Manas International Airport",c)))):(this.runwayT=0,n.runway=!1)}checkLandmarks(t){for(let e of Xe)this.visited.has(e.id)||e.x===void 0||Math.hypot(t.x-e.x,t.z-e.z)<(e.airport?120:70)&&(this.visited.add(e.id),this.money+=500,this.audio.chime(),this.hud.showDiscovery(e,this.visited.size,Xe.length))}startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=t.x+Math.cos(i)*s,a=t.z+Math.sin(i)*s,l=this.map.nearestRoad(o,a,80,m=>m.cls>=1&&m.cls<=4);if(!l)continue;let c=l.lat>=0?1:-1,h=l.e.w/2+1.2,u=l.x-l.dz*h*c,f=l.z+l.dx*h*c;if(this.map.insideBuilding(u,f,.5))continue;let d=Xe.filter(m=>Math.hypot(m.x-u,m.z-f)>700&&(!m.airport||Math.random()<.5)),x=d[Math.floor(Math.random()*d.length)],p=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar"];if(this.mission={stage:"pickup",x:u,z:f,dest:x,passenger:p[Math.floor(Math.random()*p.length)],t:0,start:null},this.setRoute(u,f,"Pick up "+this.mission.passenger),e){let m={mode:"plaza",zone:{x:u,z:f,r:.1,active:!0,count:0},x:u,z:f,h:0,tx:u,tz:f,idle:1e9,ex:0,ez:0,dodge:0,wave:!0};m.shirt=15909376,m.pants=2238522,m.skin=14200976,m.hairC=1709072,m.scale=1,m.speed=1.2,m.phase=0,m.fixed=!0,e.list.push(m),this.mission.ped=m}return this.audio.chime(),this.mission}return null}updateMission(t,e,n){let i=this.mission;if(!i)return;i.t+=t;let s=Math.hypot(e.x-i.x,e.z-i.z);if(i.stage==="pickup"){if(i.ped&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.zone.active=!0,i.ped.moving=!1),s<9&&e.speed<1.5){if(i.stage="ride",i.start={x:e.x,z:e.z,t:i.t},i.ped&&n){let a=n.list.indexOf(i.ped);a>=0&&n.list.splice(a,1)}i.x=i.dest.x,i.z=i.dest.z;let o=Math.hypot(i.x-e.x,i.z-e.z);i.fare=Math.round((120+o/1e3*38*1.35)/10)*10+(i.dest.airport?600:0),i.par=o/1e3*110+40,this.setRoute(i.x,i.z,i.dest.name),this.audio.chime(),this.hud.toast(`${i.passenger}: "Salam! ${i.dest.name}, please."`,4)}}else if(i.stage==="ride"&&s<22&&e.speed<2){let o=i.t-i.start.t,a=o<i.par?Math.round((i.par-o)*4/10)*10:0,l=i.fare+a;this.money+=l,this.audio.cash(),this.hud.toast(`Fare paid: ${Fn(i.fare)} coins. Rahmat!`,5),this.mission=null,this.clearRoute()}}cancelMission(t){if(this.mission?.ped&&t){let e=t.list.indexOf(this.mission.ped);e>=0&&t.list.splice(e,1)}this.mission=null,this.clearRoute()}setRoute(t,e,n){this.routeTarget={x:t,z:e,label:n},this._routeDirty=!0}clearRoute(){this.routeTarget=null,this.route=null,this._routeDirty=!0}updateRoute(t,e){if(!this.routeTarget){this.routeMesh&&(e.remove(this.routeMesh),this.routeMesh.geometry.dispose(),this.routeMesh=null);return}this._routeT=(this._routeT||0)-1;let n=0;if(this.route&&this.route.length>=4){let i=1e9;for(let s=0;s<this.route.length-2;s+=2){let o=this.route[s],a=this.route[s+1],l=this.route[s+2],c=this.route[s+3],h=l-o,u=c-a,f=h*h+u*u||1,d=((t.x-o)*h+(t.z-a)*u)/f;d=Math.max(0,Math.min(1,d)),i=Math.min(i,Math.hypot(t.x-o-h*d,t.z-a-u*d))}n=i}(this._routeDirty||n>40&&this._routeT<=0)&&(this._routeDirty=!1,this._routeT=60,this.route=this.map.route(t.x,t.z,this.routeTarget.x,this.routeTarget.z)||[t.x,t.z,this.routeTarget.x,this.routeTarget.z],this._buildRouteMesh(e))}_buildRouteMesh(t){this.routeMesh&&(t.remove(this.routeMesh),this.routeMesh.geometry.dispose());let e=this.route,n=[],i=[],s=[],o=0;for(let l=0;l<e.length/2;l++){l>0&&(o+=Math.hypot(e[l*2]-e[l*2-2],e[l*2+1]-e[l*2-1]));let c=Math.max(0,l-1),h=Math.min(e.length/2-1,l+1),u=e[h*2]-e[c*2],f=e[h*2+1]-e[c*2+1],d=Math.hypot(u,f)||1;u/=d,f/=d;let x=1.1;if(n.push(e[l*2]-f*x,.22,e[l*2+1]+u*x,e[l*2]+f*x,.22,e[l*2+1]-u*x),i.push(o,0,o,1),l>0){let p=l*2;s.push(p-2,p,p-1,p-1,p,p+1)}}let a=new se;a.setAttribute("position",new Wt(n,3)),a.setAttribute("uv",new Wt(i,2)),a.setIndex(s),this.routeMat||(this.routeMat=new xe({uniforms:{uTime:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform float uTime; varying vec2 vUv;
          void main(){ float c = abs(vUv.y-0.5)*2.0; float chev = fract(vUv.x/6.0 - uTime*0.8 - c*0.25);
            float a = smoothstep(0.0,0.15,chev)*smoothstep(0.55,0.4,chev);
            gl_FragColor = vec4(vec3(0.25,0.8,1.0)*1.6, (0.25 + 0.6*a)*(1.0-c*c)); }`,transparent:!0,depthWrite:!1,side:we})),this.routeMesh=new Q(a,this.routeMat),this.routeMesh.frustumCulled=!1,t.add(this.routeMesh)}};function Fn(r){return Math.round(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}var _f=["#f6c05a","#f2d38a","#e8e2c8","#d8d4c4","#c4c0b4","#b4b0a4","#9a968c"],Mf=[5,4.2,3.4,2.6,2,1.6,1.2],ae=r=>document.getElementById(r),ha=class{constructor(t){this.map=t,this.speedo=ae("speedo"),this.sctx=this.speedo.getContext("2d"),this.mini=ae("minimap"),this.mctx=this.mini.getContext("2d"),this.big=ae("bigmap"),this.bctx=this.big.getContext("2d"),this.hour=10,this.toastT=0,this.mapView={x:-3e3,z:-8e3,s:.06},this.fineQueue=[],this._resize(),window.addEventListener("resize",()=>this._resize()),this._mapEvents()}_resize(){let t=Math.min(2,window.devicePixelRatio||1);for(let e of[this.speedo,this.mini])e.width=e.clientWidth*t,e.height=e.clientHeight*t;this.big.width=this.big.clientWidth*t,this.big.height=this.big.clientHeight*t,this.dpr=t}clockText(){let t=Math.floor(this.hour),e=Math.floor((this.hour-t)*60);return`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`}drawSpeedo(t){let e=this.sctx,n=this.speedo.width,i=this.speedo.height,s=this.dpr;e.clearRect(0,0,n,i);let o=n/2,a=i/2,l=Math.min(n,i)/2-6*s,c=t.speed*3.6,h=260,u=Math.PI*.75,f=Math.PI*2.25,d=g=>u+(f-u)*Math.min(1,g/h),x=e.createRadialGradient(o,a,l*.2,o,a,l);x.addColorStop(0,"rgba(20,24,30,0.92)"),x.addColorStop(1,"rgba(8,10,14,0.92)"),e.fillStyle=x,e.beginPath(),e.arc(o,a,l,0,Math.PI*2),e.fill(),e.lineWidth=2*s,e.strokeStyle="rgba(255,255,255,0.18)",e.stroke(),e.lineWidth=7*s,e.strokeStyle="rgba(230,40,40,0.85)",e.beginPath(),e.arc(o,a,l-10*s,d(ri),f),e.stroke(),e.lineWidth=7*s,e.strokeStyle=c>ri?"#ff4040":"#3fc8ff",e.beginPath(),e.arc(o,a,l-10*s,u,d(c)),e.stroke(),e.fillStyle="#cfd6de",e.font=`${11*s}px Inter, Arial`,e.textAlign="center",e.textBaseline="middle";for(let g=0;g<=h;g+=10){let M=d(g),_=g%20===0;e.strokeStyle=g>ri?"#ff6060":"rgba(255,255,255,0.7)",e.lineWidth=(_?2:1)*s,e.beginPath(),e.moveTo(o+Math.cos(M)*(l-18*s),a+Math.sin(M)*(l-18*s)),e.lineTo(o+Math.cos(M)*(l-(_?28:23)*s),a+Math.sin(M)*(l-(_?28:23)*s)),e.stroke(),_&&g%40===0&&e.fillText(g,o+Math.cos(M)*(l-40*s),a+Math.sin(M)*(l-40*s))}let p=d(c);e.strokeStyle="#ff5a2a",e.lineWidth=3*s,e.lineCap="round",e.beginPath(),e.moveTo(o-Math.cos(p)*12*s,a-Math.sin(p)*12*s),e.lineTo(o+Math.cos(p)*(l-22*s),a+Math.sin(p)*(l-22*s)),e.stroke(),e.fillStyle="#222",e.beginPath(),e.arc(o,a,7*s,0,7),e.fill(),e.fillStyle=c>ri?"#ff5050":"#ffffff",e.font=`700 ${30*s}px Inter, Arial`,e.fillText(Math.round(c),o,a+l*.42),e.fillStyle="#8a96a4",e.font=`${10*s}px Inter, Arial`,e.fillText("km/h",o,a+l*.62);let m=t.rpm/7e3;e.lineWidth=4*s,e.strokeStyle="rgba(255,255,255,0.1)",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*2.2),e.stroke(),e.strokeStyle=m>.88?"#ff4040":"#f2c200",e.beginPath(),e.arc(o,a,l*.42,Math.PI*.8,Math.PI*.8+Math.PI*1.4*Math.min(1,m)),e.stroke(),e.fillStyle="#f2c200",e.font=`700 ${14*s}px Inter, Arial`,e.fillText(t.gearLabel||"1",o,a-l*.12)}drawMini(t,e,n,i,s){let o=this.mctx,a=this.mini.width,l=this.mini.height,c=this.dpr,h=.55*c*(t.speed>25?.75:1);o.save(),o.clearRect(0,0,a,l),o.beginPath(),o.arc(a/2,l/2,a/2-2,0,7),o.clip(),o.fillStyle="#1d2329",o.fillRect(0,0,a,l),o.translate(a/2,l/2+l*.12),o.rotate(t.h+Math.PI),o.scale(h,h),o.translate(-t.x,-t.z);let u=a/h*.8,f=400,d=Math.ceil(u/f),x=Math.floor(t.x/f),p=Math.floor(t.z/f);o.fillStyle="#2f3741";for(let _=x-d;_<=x+d;_++)for(let v=p-d;v<=p+d;v++){let I=this.map.chunks.get(Oe(_,v));if(I)for(let w of I.buildings){if(Math.abs(w.cx-t.x)>u||Math.abs(w.cz-t.z)>u)continue;let S=w.pts;o.beginPath(),o.moveTo(S[0],S[1]);for(let R=2;R<S.length;R+=2)o.lineTo(S[R],S[R+1]);o.fill()}}o.lineCap="round",o.lineJoin="round";for(let _=6;_>=0;_--){o.strokeStyle=_f[_];for(let v=x-d;v<=x+d;v++)for(let I=p-d;I<=p+d;I++){let w=this.map.chunks.get(Oe(v,I));if(w)for(let S of w.edges){if(S.cls!==_)continue;o.lineWidth=Math.max(S.w,3/h);let R=S.pts;o.beginPath(),o.moveTo(R[0],R[1]);for(let y=2;y<R.length;y+=2)o.lineTo(R[y],R[y+1]);o.stroke()}}}if(i){o.strokeStyle="#8a9098",o.lineWidth=i.rwW,o.beginPath(),o.moveTo(i.R0.x,i.R0.y),o.lineTo(i.R1.x,i.R1.y),o.stroke();for(let _ of i.planes)o.fillStyle="#ffffff",o.beginPath(),o.arc(_.x,_.z,14,0,7),o.fill()}if(n.route){o.strokeStyle="#3fc8ff",o.lineWidth=6/h*c,o.globalAlpha=.9;let _=n.route;o.beginPath(),o.moveTo(_[0],_[1]);for(let v=2;v<_.length;v+=2)o.lineTo(_[v],_[v+1]);o.stroke(),o.globalAlpha=1}o.fillStyle="#ff9a3a";for(let _ of e.cars)Math.abs(_.x-t.x)<u&&Math.abs(_.z-t.z)<u&&o.fillRect(_.x-1.6,_.z-1.6,3.2,3.2);for(let _ of Xe)_.x===void 0||Math.abs(_.x-t.x)>u||Math.abs(_.z-t.z)>u||(o.fillStyle=n.visited.has(_.id)?"#6ad06a":"#ffd84a",o.beginPath(),o.arc(_.x,_.z,6/h*c,0,7),o.fill());if(n.routeTarget&&(o.fillStyle="#ff3a6a",o.beginPath(),o.arc(n.routeTarget.x,n.routeTarget.z,8/h*c,0,7),o.fill()),s)for(let _ of s.players.values())o.fillStyle="#3ddc84",o.beginPath(),o.arc(_.x,_.z,6/h*c,0,7),o.fill();o.restore(),o.save(),o.translate(a/2,l/2+l*.12),o.fillStyle="#3fc8ff",o.strokeStyle="#fff",o.lineWidth=2*c,o.beginPath(),o.moveTo(0,-10*c),o.lineTo(7*c,8*c),o.lineTo(0,4*c),o.lineTo(-7*c,8*c),o.closePath(),o.fill(),o.stroke(),o.restore();let m=t.h+Math.PI;o.fillStyle="#ff5050",o.font=`700 ${12*c}px Inter, Arial`,o.textAlign="center",o.textBaseline="middle";let g=a/2+Math.sin(m)*(a/2-14*c),M=l/2-Math.cos(m)*(l/2-14*c);o.fillText("N",g,M),o.beginPath(),o.arc(a/2,l/2,a/2-2,0,7),o.strokeStyle="rgba(255,255,255,0.25)",o.lineWidth=2*c,o.stroke()}_mapEvents(){let t=null;this.big.addEventListener("mousedown",e=>{t={x:e.clientX,y:e.clientY,vx:this.mapView.x,vz:this.mapView.z,moved:!1}}),window.addEventListener("mousemove",e=>{if(!t)return;let n=e.clientX-t.x,i=e.clientY-t.y;Math.abs(n)+Math.abs(i)>4&&(t.moved=!0),this.mapView.x=t.vx-n*this.dpr/this.mapView.s,this.mapView.z=t.vz-i*this.dpr/this.mapView.s,this.mapDirty=!0}),window.addEventListener("mouseup",e=>{if(t&&!t.moved&&this.onMapClick){let n=this.big.getBoundingClientRect(),i=this.mapView.x+((e.clientX-n.left)*this.dpr-this.big.width/2)/this.mapView.s,s=this.mapView.z+((e.clientY-n.top)*this.dpr-this.big.height/2)/this.mapView.s;this.onMapClick(i,s,e.shiftKey)}t=null}),this.big.addEventListener("wheel",e=>{e.preventDefault();let n=e.deltaY<0?1.2:1/1.2;this.mapView.s=Math.max(.02,Math.min(2.5,this.mapView.s*n)),this.mapDirty=!0},{passive:!1})}drawBigMap(t,e,n,i){let s=this.big.width,o=this.big.height,a=this.mapView,l=[a.x|0,a.z|0,a.s.toFixed(4),s,o,e.route?e.route.length+":"+(e.route[0]|0):0,this.searchMark?this.searchMark.x:0,e.visited.size].join("|");(!this._base||this._base.width!==s||this._base.height!==o)&&(this._base=document.createElement("canvas"),this._base.width=s,this._base.height=o,this._mapKey=null),l!==this._mapKey&&(this._mapKey=l,this._drawMapBase(this._base.getContext("2d"),t,e,n));let c=this.bctx;c.drawImage(this._base,0,0);let h=(x,p)=>[(x-a.x)*a.s+s/2,(p-a.z)*a.s+o/2];if(c.font=`600 ${11*this.dpr}px Inter, Arial`,c.textAlign="center",i)for(let x of i.players.values()){let[p,m]=h(x.x,x.z);c.fillStyle="#3ddc84",c.beginPath(),c.arc(p,m,6*this.dpr,0,7),c.fill(),c.fillStyle="#fff",c.fillText(x.name,p,m-10*this.dpr)}let[u,f]=h(t.x,t.z);c.save(),c.translate(u,f),c.rotate(Math.PI-t.h),c.fillStyle="#3fc8ff",c.strokeStyle="#fff",c.lineWidth=2*this.dpr;let d=this.dpr;c.beginPath(),c.moveTo(0,-11*d),c.lineTo(8*d,9*d),c.lineTo(0,4*d),c.lineTo(-8*d,9*d),c.closePath(),c.fill(),c.stroke(),c.restore()}_drawMapBase(t,e,n,i,s){let o=this.big.width,a=this.big.height,l=this.mapView,c=l.s;t.fillStyle="#161b20",t.fillRect(0,0,o,a),t.save(),t.translate(o/2,a/2),t.scale(c,c),t.translate(-l.x,-l.z);let h=l.x-o/2/c,u=l.x+o/2/c,f=l.z-a/2/c,d=l.z+a/2/c,x={0:"#22402a",2:"#1e3a24",3:"#1f4660",4:"#2a5030",6:"#3a3828",11:"#3a3a40",12:"#3a3c40"};for(let m of this.map.areaList){let g=x[m[0]];if(!g)continue;let M=m[1];if(!(M[0]*.1<h-2e3||M[0]*.1>u+2e3||M[1]*.1<f-2e3||M[1]*.1>d+2e3)){t.fillStyle=g,t.beginPath(),t.moveTo(M[0]*.1,M[1]*.1);for(let _=2;_<M.length;_+=2)t.lineTo(M[_]*.1,M[_+1]*.1);t.fill()}}if(c>.035){t.fillStyle=c>.25?"#343c46":"#2a3139";for(let m of this.map.buildings){if(m.cx<h||m.cx>u||m.cz<f||m.cz>d)continue;let g=m.pts;t.beginPath(),t.moveTo(g[0],g[1]);for(let M=2;M<g.length;M+=2)t.lineTo(g[M],g[M+1]);t.fill()}}t.lineCap="round",t.lineJoin="round";for(let m=6;m>=0;m--)if(!(c<.08&&m>=5)){t.strokeStyle=_f[m],t.lineWidth=Math.max(Mf[m]*.6/c*this.dpr*.5,(this.map.edges[0],0))||1,t.beginPath();for(let g of this.map.edges){if(g.cls!==m)continue;let M=g.pts;if(!(M[0]<h-500||M[0]>u+500||M[1]<f-500||M[1]>d+500)){t.moveTo(M[0],M[1]);for(let _=2;_<M.length;_+=2)t.lineTo(M[_],M[_+1])}}t.lineWidth=Math.max(Mf[m]*.5/c*this.dpr,(7-m)*1.2),c>.5&&(t.lineWidth=Math.max(t.lineWidth,6)),t.stroke()}if(i&&(t.strokeStyle="#9aa0a8",t.lineWidth=Math.max(55,3/c),t.beginPath(),t.moveTo(i.R0.x,i.R0.y),t.lineTo(i.R1.x,i.R1.y),t.stroke()),n.route){t.strokeStyle="#3fc8ff",t.lineWidth=5/c*this.dpr;let m=n.route;t.beginPath(),t.moveTo(m[0],m[1]);for(let g=2;g<m.length;g+=2)t.lineTo(m[g],m[g+1]);t.stroke()}t.restore();let p=(m,g)=>[(m-l.x)*c+o/2,(g-l.z)*c+a/2];t.font=`600 ${12*this.dpr}px Inter, Arial`,t.textAlign="center";for(let m of Xe){if(m.x===void 0)continue;let[g,M]=p(m.x,m.z);g<-50||g>o+50||M<-50||M>a+50||(t.fillStyle=n.visited.has(m.id)?"#6ad06a":"#ffd84a",t.beginPath(),t.arc(g,M,5*this.dpr,0,7),t.fill(),t.fillStyle="rgba(0,0,0,0.6)",t.fillText(m.name,g+1,M-9*this.dpr+1),t.fillStyle="#fff",t.fillText(m.name,g,M-9*this.dpr))}if(c>.18){t.font=`${10*this.dpr}px Inter, Arial`,t.fillStyle="rgba(255,255,255,0.75)";let m=new Set;for(let g of this.map.edges){if(g.cls>2||g.name<0||g.len<150)continue;let M=this.map.names[g.name],_=M[1]||M[0],v=Math.floor(g.pts.length/4)*2,[I,w]=p(g.pts[v],g.pts[v+1]);if(I<0||I>o||w<0||w>a)continue;let S=_+Math.round(I/220)+","+Math.round(w/220);m.has(S)||(m.add(S),t.fillText(_,I,w))}}if(this.searchMark){let[m,g]=p(this.searchMark.x,this.searchMark.z),M=this.dpr;t.fillStyle="#ff3a6a",t.strokeStyle="#fff",t.lineWidth=2*M,t.beginPath(),t.moveTo(m,g),t.arc(m,g-18*M,9*M,Math.PI*.8,Math.PI*2.2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(m,g-18*M,3.5*M,0,7),t.fill()}if(n.routeTarget){let[m,g]=p(n.routeTarget.x,n.routeTarget.z);t.fillStyle="#ff3a6a",t.beginPath(),t.arc(m,g,7*this.dpr,0,7),t.fill()}t.fillStyle="rgba(255,255,255,0.5)",t.textAlign="right",t.font=`${10*this.dpr}px Inter, Arial`,t.fillText("Map data \xA9 OpenStreetMap contributors",o-10*this.dpr,a-10*this.dpr)}centerMap(t,e,n){this.mapView.x=t,this.mapView.z=e,n&&(this.mapView.s=n)}setStreet(t,e){t&&t!==this._street&&(this._street=t,ae("street").innerHTML=`${t}<small>${e||""}</small>`,ae("street").classList.add("show"),clearTimeout(this._stTo),this._stTo=setTimeout(()=>ae("street").classList.remove("show"),4e3))}setMoney(t){let e=Fn(t);if(e!==this._money){let n=this._mv!==void 0&&t>this._mv;if(this._money=e,this._mv=t,ae("money").textContent=e,ae("coins").classList.toggle("neg",t<0),n){let i=ae("coins");i.classList.remove("pop"),i.offsetWidth,i.classList.add("pop")}}}setClock(t,e){this.hour=t;let n=this.clockText()+(e!=null?` \xB7 <span class="dot ${e>0?"on":""}"></span>${e+1}`:"");n!==this._clk&&(this._clk=n,ae("clock").innerHTML=n)}setLimit(t,e,n){let i=t>ri;ae("limit").classList.toggle("show",t>ri-12),ae("limit").classList.toggle("over",i);let s=n?"ACTIVE RUNWAY \u2013 LEAVE NOW":e?"WRONG WAY":"";s!==this._w&&(this._w=s,ae("warn").textContent=s,ae("warn").classList.toggle("show",!!s))}setMission(t){t!==this._mission&&(this._mission=t,ae("mission").innerHTML=t||"",ae("mission").classList.toggle("show",!!t))}toast(t,e=3){let n=ae("toast");n.innerHTML=t,n.classList.add("show"),clearTimeout(this._toastTo),this._toastTo=setTimeout(()=>n.classList.remove("show"),e*1e3)}showFine(t){let e=ae("fine");ae("fineKind").textContent=t.kind.toUpperCase(),ae("fineAmt").textContent="\u2212"+Fn(t.amount)+" coins",ae("fineDetail").textContent=t.detail,ae("fineTime").textContent=t.time+' \xB7 Bishkek "Safe City" camera';let n=ae("finePhoto");t.photo?(n.src=t.photo,n.style.display="block"):n.style.display="none",e.classList.remove("show"),e.offsetWidth,e.classList.add("show");let i=ae("flash");i.classList.remove("go"),i.offsetWidth,i.classList.add("go"),clearTimeout(this._fineTo),this._fineTo=setTimeout(()=>e.classList.remove("show"),5200)}showDiscovery(t,e,n){let i=ae("discover");ae("discName").textContent=t.name,ae("discLocal").textContent=t.local||"",ae("discFact").textContent=t.fact,ae("discCount").textContent=`Landmark ${e}/${n} \xB7 +500 coins`,i.classList.remove("show"),i.offsetWidth,i.classList.add("show"),clearTimeout(this._discTo),this._discTo=setTimeout(()=>i.classList.remove("show"),7e3)}setFlightInfo(t){let e=ae("flightHud");if(!t){e.classList.add("hidden");return}e.classList.remove("hidden"),ae("fhAlt").textContent=Math.round(t.alt)+" m",ae("fhSpd").textContent=Math.round(t.spd*3.6)+" km/h",ae("fhHdg").textContent=String(Math.round(t.hdg)).padStart(3,"0")+"\xB0",ae("fhStage").textContent=t.stage,ae("fhCam").textContent=t.cam}renderBoard(t,e){e.innerHTML="<tr><th>Flight</th><th>From / To</th><th>Status</th></tr>"+t.map(n=>`<tr><td>${n.flight}</td><td>${n.t==="ARR"?"from ":"to "}${n.city}</td><td class="${/GO/.test(n.status)?"red":""}">${n.status}</td></tr>`).join("")}};var mv=["Aibek","Nurlan","Aigerim","Bakyt","Cholpon","Azamat","Elnura","Timur","Gulnara","Ermek","Aizada","Kanat","Meerim","Daniyar","Saltanat","Ulan","Aidana","Bekzat","Kymbat","Marat"],On=r=>r[Math.floor(Math.random()*r.length)],Ki={taxi:{name:"Taxi driver",icon:"\u{1F695}",desc:"Pick up passengers anywhere in the city"},bus:{name:"Bus driver",icon:"\u{1F68C}",desc:"Drive a city bus route, stop at every bus stop",car:"bus"},marshrutka:{name:"Marshrutka driver",icon:"\u{1F690}",desc:"Minibus route \u2013 faster, fewer passengers",car:"van"},courier:{name:"Courier",icon:"\u{1F4E6}",desc:"Deliver food & parcels from real shops"}},ua=class{constructor(t,e,n,i,s){this.map=t,this.game=e,this.hud=n,this.audio=i,this.peds=s,this.active=null,this.marker=null,this.completed=0,this.shops=[];for(let o of t.chunks.values())for(let a of o.signs)["cafe","restaurant","fast_food","supermarket","convenience","pharmacy","bakery","clothes"].includes(a.kind)&&this.shops.push(a)}_marker(t,e,n,i=16760864){if(!this.markerMesh){let s=new Yt,o=new Q(new Os(3.2,3.8,48).rotateX(-Math.PI/2),new pe({color:i,transparent:!0,opacity:.9,depthWrite:!1}));o.position.y=.25;let a=new Q(new Vt(3.5,3.5,40,32,1,!0),new pe({color:i,transparent:!0,opacity:.1,side:we,depthWrite:!1,blending:qe}));a.position.y=20,s.add(o,a),this.markerMesh=s,this.ring=o,this.beam=a}this.ring.material.color.setHex(i),this.beam.material.color.setHex(i),this.markerMesh.position.set(e,0,n),this.markerMesh.parent||t.add(this.markerMesh),this.markerMesh.visible=!0}_hideMarker(){this.markerMesh&&(this.markerMesh.visible=!1)}_curbPoint(t,e,n=120){let i=this.map.nearestRoad(t,e,n,a=>a.cls>=1&&a.cls<=5);if(!i)return null;let s=i.lat>=0?1:-1,o=i.e.w/2+1.3;return{x:i.x-i.dz*o*s,z:i.z+i.dx*o*s,roadX:i.x-i.dz*(i.e.w/2-1.5)*s,roadZ:i.z+i.dx*(i.e.w/2-1.5)*s}}_spawnPed(t,e,n=!1,i){let s={mode:"plaza",zone:{x:t,z:e,r:.1,active:!0,count:0},x:t,z:e,h:0,tx:t,tz:e,idle:1e9,ex:0,ez:0,dodge:0,wave:n,fixed:!0};return s.shirt=i??On([15909376,1981018,9054794,15263976,3890490]),s.pants=2238522,s.skin=On([14200976,13146744,14728864]),s.hairC=1709072,s.scale=.95+Math.random()*.1,s.speed=1.3,s.phase=0,this.peds.list.push(s),s}_removePed(t){let e=this.peds.list.indexOf(t);e>=0&&this.peds.list.splice(e,1)}start(t,e,n,i){if(this.stop(e,i,!0),t==="taxi")return this._startTaxi(e,n);if(t==="courier")return this._startCourier(e,n);if(t==="bus"||t==="marshrutka")return this._startBus(t,e,n,i)}stop(t,e,n){let i=this.active;i&&(i.ped&&this._removePed(i.ped),i.boarders&&i.boarders.forEach(s=>this._removePed(s)),i.prevCar&&e&&e(i.prevCar.type,i.prevCar.color,!0),this.active=null,this._hideMarker(),this.game.clearRoute(),n||this.hud.toast("Shift ended",1.5))}_startTaxi(t,e){for(let n=0;n<40;n++){let i=Math.random()*Math.PI*2,s=150+Math.random()*450,o=this._curbPoint(t.x+Math.cos(i)*s,t.z+Math.sin(i)*s,80);if(!o||this.map.insideBuilding(o.x,o.z,.5))continue;let a=Xe.filter(c=>c.x!==void 0&&Math.hypot(c.x-o.x,c.z-o.z)>700&&(!c.airport||Math.random()<.35)),l=On(a);if(Math.random()<.5&&this.shops.length){let c=On(this.shops);Math.hypot(c.x-o.x,c.z-o.z)>600&&(l={name:c.name,x:c.x,z:c.z})}return this.active={type:"taxi",stage:"pickup",x:o.x,z:o.z,dest:l,passenger:On(mv),t:0,damage0:t.damage},this.active.ped=this._spawnPed(o.x,o.z,!0,15909376),this.game.setRoute(o.x,o.z,"Passenger"),this._marker(e,o.x,o.z,16760864),this.audio.chime(),this.hud.toast(`\u{1F695} <b>${this.active.passenger}</b> is waiting for a taxi`,3),!0}return!1}_startCourier(t,e){let n=this.shops.filter(c=>{let h=Math.hypot(c.x-t.x,c.z-t.z);return h>120&&h<900});if(!n.length)return!1;let i=On(n),s=this._curbPoint(i.x,i.z,60)||{x:i.x,z:i.z},o=null;for(let c=0;c<60&&!o;c++){let h=this.map.buildings[Math.floor(Math.random()*this.map.buildings.length)],u=Math.hypot(h.cx-s.x,h.cz-s.z);u>900&&u<3200&&h.h>3&&(o=h)}if(!o)return!1;let a=this._curbPoint(o.cx,o.cz,80)||{x:o.cx,z:o.cz},l={cafe:"coffee & samsa",restaurant:"plov & lagman",fast_food:"shawarma",supermarket:"groceries",convenience:"a parcel",pharmacy:"medicine",bakery:"fresh nan",clothes:"a clothes parcel"}[i.kind]||"a parcel";return this.active={type:"courier",stage:"pickup",x:s.x,z:s.z,shop:i,item:l,dest:{name:"Customer",x:a.x,z:a.z},t:0,damage0:t.damage},this.game.setRoute(s.x,s.z,i.name),this._marker(e,s.x,s.z,4251776),this.audio.chime(),this.hud.toast(`\u{1F4E6} Pick up <b>${l}</b> at <b>${i.name}</b>`,3),!0}_startBus(t,e,n,i){let s=this.map.busStopList,o=s.map(a=>({s:a,d:Math.hypot(a[0]-e.x,a[1]-e.z)})).filter(a=>a.d<1500).sort((a,l)=>a.d-l.d).slice(0,12);if(!o.length)return this.hud.toast("No bus stops nearby \u2013 drive into the city",2),!1;for(let a=0;a<12;a++){let l=On(o).s,c=s.filter(M=>{let _=Math.hypot(M[0]-l[0],M[1]-l[1]);return _>2500&&_<5500});if(!c.length)continue;let h=On(c),u=this.map.route(l[0],l[1],h[0],h[1]);if(!u||u.length<8)continue;let f=[],d=0;for(let M=0;M<u.length-2;M+=2){let _=u[M],v=u[M+1],I=u[M+2],w=u[M+3],S=I-_,R=w-v,y=Math.hypot(S,R)||1;for(let b of s){if(Math.abs(b[0]-_)>y+25||Math.abs(b[1]-v)>y+25)continue;let C=((b[0]-_)*S+(b[1]-v)*R)/(y*y);if(C<0||C>1)continue;let U=_+S*C,N=v+R*C,T=((b[0]-_)*-R+(b[1]-v)*S)/y;Math.abs(T)<22&&T>-4&&f.push({x:b[0],z:b[1],d:d+C*y,px:U,pz:N})}d+=y}f.sort((M,_)=>M.d-_.d);let x=[];for(let M of f)(!x.length||M.d-x[x.length-1].d>220)&&x.push(M);if(x.length<4)continue;let p=On(t==="bus"?["7","20","31","35","38","42","48","52","62","64"]:["107","110","126","144","150","174","192","206","212","238","246","265"]);this.active={type:t,stage:"drive",stops:x.slice(0,12),i:0,num:p,t:0,pax:0,earned:0,boarders:[],prevCar:{type:e.type,color:e.color}},i(Ki[t].car,t==="bus"?2783802:16053492,!1);let m=this.active.stops[0],g=this.map.nearestRoad(m.px,m.pz,40,M=>M.cls<=4);if(g){let M=this.map.laneOffset(g.e,(g.e.ow,g.e.lanes-1)),_=u[2]-u[0],v=u[3]-u[1],I=g.dx,w=g.dz;I*_+w*v<0&&(I=-I,w=-w),e.place(g.x-w*M,g.z+I*M,Math.atan2(I,w))}return this.active.i=1,this._nextStop(n),this.audio.chime(),this.hud.toast(`${Ki[t].icon} Route <b>${p}</b>: ${x.length} stops. Stop at each bus stop to pick up passengers.`,4),!0}return this.hud.toast("Could not build a route here \u2013 try on a main avenue",2),!1}_nextStop(t){let e=this.active,n=e.stops[e.i];this.game.setRoute(n.x,n.z,`Stop ${e.i+1}/${e.stops.length}`),this._marker(t,n.px,n.pz,4235519),e.boarders.forEach(s=>this._removePed(s)),e.boarders=[];let i=1+Math.floor(Math.random()*(e.type==="bus"?6:4));for(let s=0;s<i;s++)e.boarders.push(this._spawnPed(n.x+(Math.random()-.5)*4,n.z+(Math.random()-.5)*3,!1))}update(t,e,n,i){let s=this.active;return s?(s.t+=t,this.markerMesh&&(this.ring.rotation.y+=t,this.beam.material.opacity=.08+.05*Math.sin(s.t*4)),s.type==="taxi"||s.type==="courier"?this._updateAB(t,e,n):this._updateBus(t,e,n,i)):null}_updateAB(t,e,n){let i=this.active,s=Math.hypot(e.x-i.x,e.z-i.z);if(i.ped&&i.stage==="pickup"&&(i.ped.h=Math.atan2(e.x-i.ped.x,e.z-i.ped.z),i.ped.moving=!1),i.stage==="pickup"&&s<10&&e.speed<1.5)return i.ped?(i.stage="boarding",i.ped.wave=!1,i.ped.tx=e.x,i.ped.tz=e.z,i.ped.idle=0,i.ped.zone.r=.1,i.bt=0):this._beginRide(e,n),null;if(i.stage==="boarding"){i.bt+=t;let o=i.ped,a=e.x-o.x,l=e.z-o.z,c=Math.hypot(a,l);return c>2&&i.bt<5?(o.x+=a/c*1.6*t,o.z+=l/c*1.6*t,o.h=Math.atan2(a,l),o.moving=!0,o.phase+=t*8):(this._removePed(o),i.ped=null,this.audio.blip(520,.06),this._beginRide(e,n)),null}if(i.stage==="ride"&&s<14&&e.speed<1.5){let o=i.t-i.t0,a=i.dist,l=i.type==="taxi"?120+a/1e3*55:90+a/1e3*45,c=a/1e3*95+35,h=Math.max(0,e.damage-i.damage0),u=o<c?Math.min(l*.4,(c-o)*1.2):0,f=h*(i.type==="courier"?6:3),d=Math.max(1,Math.min(5,Math.round(5-h/8-Math.max(0,o-c)/40))),x=Math.max(20,Math.round((l+u-f)*(.6+d*.1)/5)*5);this.game.money+=x,this.completed++,this.audio.cash(),this.hud.toast(`${i.type==="taxi"?"\u{1F695}":"\u{1F4E6}"} +${x} coins \xB7 ${"\u2605".repeat(d)}${"\u2606".repeat(5-d)}${i.type==="taxi"?` \xB7 ${i.passenger}: "Rahmat!"`:""}`,4);let p=i.type;return this.active=null,this._hideMarker(),this.game.clearRoute(),this.nextIn=3,this.nextType=p,{done:!0,coins:x}}return null}_beginRide(t,e){let n=this.active;n.stage="ride",n.t0=n.t,n.x=n.dest.x,n.z=n.dest.z,n.dist=Math.hypot(n.x-t.x,n.z-t.z),this.game.setRoute(n.x,n.z,n.dest.name),this._marker(e,n.x,n.z,n.type==="taxi"?16728160:4251776),this.audio.chime(),this.hud.toast(n.type==="taxi"?`${n.passenger}: "Salam! To ${n.dest.name}, please."`:`\u{1F4E6} Got ${n.item}. Deliver it carefully!`,3)}_updateBus(t,e,n,i){let s=this.active,o=s.stops[s.i],a=Math.hypot(e.x-o.px,e.z-o.pz);if(s.stage==="drive"&&a<14&&e.speed<1&&(s.stage="doors",s.dt=0,this.audio.blip(440,.1)),s.stage==="doors"){s.dt+=t;let l=0;for(let c of s.boarders){if(c.gone)continue;let h=e.x-c.x,u=e.z-c.z,f=Math.hypot(h,u);f<2.8||s.dt>7?(c.gone=!0,this._removePed(c),s.pax++,this.game.money+=s.type==="bus"?15:20,s.earned+=s.type==="bus"?15:20,this.audio.blip(880,.03,.05)):(c.x+=h/f*1.7*t,c.z+=u/f*1.7*t,c.h=Math.atan2(h,u),c.moving=!0,c.phase+=t*8,l++)}if(e.speed>2&&(s.stage="drive",this.hud.toast("You left before everyone boarded!",1.5)),!l&&s.dt>2.5){if(s.i++,s.i>=s.stops.length){let c=150+s.stops.length*20;this.game.money+=c,s.earned+=c,this.completed++,this.audio.cash(),this.hud.toast(`\u{1F3C1} Route ${s.num} complete! ${s.pax} passengers \xB7 +${s.earned} coins`,5);let h=s.prevCar;return this.active=null,this._hideMarker(),this.game.clearRoute(),i(h.type,h.color,!0),{done:!0,coins:s.earned}}s.stage="drive",this._nextStop(n)}}return null}status(t){let e=this.active;return e?e.type==="taxi"?e.stage==="ride"?`\u{1F695} ${e.passenger} \u2192 ${e.dest.name}`:`\u{1F695} Pick up ${e.passenger}`:e.type==="courier"?e.stage==="ride"?`\u{1F4E6} Deliver ${e.item}`:`\u{1F4E6} Pick up at ${e.shop.name}`:`${Ki[e.type].icon} Route ${e.num} \xB7 stop ${Math.min(e.i+1,e.stops.length)}/${e.stops.length} \xB7 ${e.pax} pax`:null}};var gv="wss://lzamxwqxnzcrazyuipjx.supabase.co/realtime/v1/websocket",bf="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6YW14d3F4bnpjcmF6eXVpcGp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAzNDM1MzAsImV4cCI6MjEwNTkxOTUzMH0.eaW442nZuPMywP230Ml6evWcH_IPGX1-Th4r0G8HKVU",ih="realtime:bskdrive-world-v1";function xv(){try{let r=localStorage.getItem("bd_uid");return r||(r=Math.random().toString(36).slice(2,10),localStorage.setItem("bd_uid",r)),r}catch{return Math.random().toString(36).slice(2,10)}}function wf(r,t="#ffffff"){let e=document.createElement("canvas");e.width=256,e.height=64;let n=e.getContext("2d");n.font="700 30px Inter, Arial";let i=Math.min(248,n.measureText(r).width+28);n.fillStyle="rgba(10,14,20,0.72)";let s=18,o=(256-i)/2;n.beginPath(),n.moveTo(o+s,8),n.arcTo(o+i,8,o+i,56,s),n.arcTo(o+i,56,o,56,s),n.arcTo(o,56,o,8,s),n.arcTo(o,8,o+i,8,s),n.fill(),n.fillStyle=t,n.textAlign="center",n.textBaseline="middle",n.fillText(r,128,33);let a=new Pe(e);a.colorSpace=de;let l=new wn(new pn({map:a,depthTest:!0,transparent:!0}));return l.scale.set(4.2,1.05,1),l}var fa=class{constructor(t){this.scene=t,this.id=xv(),this.players=new Map,this.ws=null,this.ref=1,this.joined=!1,this.status="offline",this.enabled=!1,this.sendT=0,this.hbT=0,this.onChat=null,this.onJoin=null,this.lastSent=null}connect(t){this.name=(t||"Driver").slice(0,18),this.enabled=!0,this._open()}disconnect(){if(this.enabled=!1,this.ws)try{this._push("bye",{i:this.id}),this.ws.close()}catch{}this.ws=null,this.joined=!1,this.status="offline";for(let t of[...this.players.keys()])this._drop(t)}_open(){if(!this.enabled)return;this.status="connecting";let t;try{t=new WebSocket(`${gv}?apikey=${bf}&vsn=1.0.0`)}catch{this._retry();return}this.ws=t,t.onopen=()=>{t.send(JSON.stringify({topic:ih,event:"phx_join",payload:{config:{broadcast:{self:!1,ack:!1},presence:{key:this.id}},access_token:bf},ref:String(this.ref++),join_ref:"1"}))},t.onmessage=e=>{let n;try{n=JSON.parse(e.data)}catch{return}if(n.event==="phx_reply"&&n.topic===ih&&n.payload?.status==="ok"&&!this.joined){this.joined=!0,this.status="online",this.backoff=1,this._push("hi",{i:this.id,n:this.name});return}n.event==="broadcast"&&n.payload&&this._recv(n.payload.event,n.payload.payload)},t.onclose=()=>{this.joined=!1,this.status="offline",this.ws=null,this._retry()},t.onerror=()=>{}}_retry(){this.enabled&&(this.backoff=Math.min(30,(this.backoff||1)*2),clearTimeout(this._rt),this._rt=setTimeout(()=>this._open(),this.backoff*1e3))}_push(t,e){!this.ws||this.ws.readyState!==1||!this.joined||this.ws.send(JSON.stringify({topic:ih,event:"broadcast",payload:{type:"broadcast",event:t,payload:e},ref:String(this.ref++),join_ref:"1"}))}chat(t){t=String(t).slice(0,120).trim(),t&&(this._push("c",{i:this.id,n:this.name,m:t}),this.onChat&&this.onChat(this.name,t,!0))}_recv(t,e){if(!(!e||e.i===this.id))if(t==="s"){let n=this.players.get(e.i);n||(n=this._add(e)),(n.type!==e.t||n.color!==e.c)&&this._rebuild(n,e.t,e.c),n.name!==e.n&&(n.name=e.n,n.group.remove(n.tag),n.tag=wf(e.n),n.tag.position.y=n.spec.roof[2][1]+1.6,n.group.add(n.tag)),n.snaps.push({t:performance.now(),x:e.x,z:e.z,h:e.h,v:e.v,b:e.b}),n.snaps.length>20&&n.snaps.shift(),n.last=performance.now(),n.money=e.m??n.money,n.job=e.j||"",n.jobs=e.k??n.jobs}else t==="c"?this.onChat&&this.onChat(e.n,e.m,!1):t==="hi"?(this.onJoin&&this.onJoin(e.n),this.sendT=0,this.lastSent=null):t==="bye"&&this._drop(e.i)}_add(t){let e=new Yt,n={id:t.i,name:t.n,group:e,snaps:[],last:performance.now(),x:t.x,z:t.z,h:t.h,money:0,type:null,color:null};return this.players.set(t.i,n),this._rebuild(n,t.t,t.c),n.tag=wf(t.n),n.tag.position.y=n.spec.roof[2][1]+1.6,e.add(n.tag),this.scene.add(e),this.onJoin&&this.onJoin(t.n),n}_rebuild(t,e,n){t.body&&(t.group.remove(t.body),t.body.traverse(c=>c.geometry&&c.geometry.dispose()));let i=Bn(["sedan","suv","coupe","hatch","oldsedan","van","bus"].includes(e)?e:"sedan",{}),s=new Yt,o=new Q(i.paint,new Si({color:n??16777215,metalness:.45,roughness:.32,clearcoat:1,vertexColors:!0})),a=new Q(i.detail,new wt({vertexColors:!0,metalness:.3,roughness:.3}));t.lightMat=new wt({vertexColors:!0,emissive:16777215,emissiveIntensity:.3});let l=new Q(i.lights,t.lightMat);o.castShadow=a.castShadow=!0,s.add(o,a,l),t.body=s,t.group.add(s),t.spec=i.spec,t.type=e,t.color=n,t.tag&&(t.tag.position.y=i.spec.roof[2][1]+1.6)}_drop(t){let e=this.players.get(t);e&&(this.scene.remove(e.group),e.group.traverse(n=>{n.geometry&&n.geometry.dispose(),n.material&&(n.material.map&&n.material.map.dispose(),n.material.dispose())}),this.players.delete(t))}update(t,e,n,i){if(!this.enabled)return;let s=performance.now();if(this.sendT-=t,this.hbT-=t,this.joined&&this.sendT<=0){let a=e.speed>.3,l={i:this.id,n:this.name,t:e.type,c:e.color,x:Math.round(e.x*10)/10,z:Math.round(e.z*10)/10,h:Math.round(e.h*1e3)/1e3,v:Math.round(e.speed*10)/10,b:e.braking?1:0,m:Math.round(n.money),j:n.job||"",k:n.jobs||0};this._push("s",l),this.sendT=a?.16:1}this.hbT<=0&&this.ws&&this.ws.readyState===1&&(this.hbT=25,this.ws.send(JSON.stringify({topic:"phoenix",event:"heartbeat",payload:{},ref:String(this.ref++)})));let o=s-200;for(let[a,l]of this.players){if(s-l.last>8e3){this._drop(a);continue}let c=l.snaps;if(!c.length)continue;let h=c[0],u=c[c.length-1];for(let p=0;p<c.length-1;p++)if(c[p].t<=o&&c[p+1].t>=o){h=c[p],u=c[p+1];break}let f,d,x;if(o>=u.t){let p=Math.min(.5,(o-u.t)/1e3);f=u.x+Math.sin(u.h)*u.v*p,d=u.z+Math.cos(u.h)*u.v*p,x=u.h}else{let p=(o-h.t)/Math.max(1,u.t-h.t);f=h.x+(u.x-h.x)*p,d=h.z+(u.z-h.z)*p;let m=u.h-h.h;m=Math.atan2(Math.sin(m),Math.cos(m)),x=h.h+m*p}l.x=f,l.z=d,l.h=x,l.v=u.v,l.group.position.set(f,.02,d),l.group.rotation.y=x,l.lightMat.emissiveIntensity=u.b?1.4:i>.45?1.8:.3}}collide(t,e){for(let n of this.players.values()){let i=t.x-n.x,s=t.z-n.z;if(i*i+s*s>200)continue;let o=n.spec.W/2,a=Math.max(2,Math.round(n.spec.L/2.2));for(let l=0;l<a;l++){let c=(l/(a-1)-.5)*(n.spec.L-o*2),h=n.x+Math.sin(n.h)*c,u=n.z+Math.cos(n.h)*c;for(let f of[t.spec.L*.3,0,-t.spec.L*.3]){let d=t.x+Math.sin(t.h)*f,x=t.z+Math.cos(t.h)*f,p=d-h,m=x-u,g=Math.hypot(p,m),M=t.radius+o;if(g<M&&g>1e-4){let _=p/g,v=m/g;t.x+=_*(M-g),t.z+=v*(M-g);let I=(t.vx-Math.sin(n.h)*n.v)*_+(t.vz-Math.cos(n.h)*n.v)*v;I<0&&(t.vx-=_*I*1.2,t.vz-=v*I*1.2,-I>2&&e&&e(-I,"player"))}}}}}list(){return[...this.players.values()].map(t=>({name:t.name,money:t.money||0,job:t.job,car:t.type,x:t.x,z:t.z}))}};var da={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var un=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},vv=new ks(-1,1,1,-1,0,1),sh=class extends se{constructor(){super(),this.setAttribute("position",new Wt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Wt([0,2,0,0,2,0],2))}},yv=new sh,Pi=class{constructor(t){this._mesh=new Q(yv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}};var ji=class extends un{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof xe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Nn.clone(t.uniforms),this.material=new xe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Pi(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Pr=class extends un{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){let i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},pa=class extends un{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}};var ma=class{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){let n=t.getSize(new j);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ji(da),this.copyPass.material.blending=zn,this.clock=new Gs}swapBuffers(){let t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){let e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());let e=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Pr!==void 0&&(o instanceof Pr?n=!0:o instanceof pa&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){let e=this.renderer.getSize(new j);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ef={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var Zs=class r extends un{constructor(t,e,n,i){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=i,this.resolution=t!==void 0?new j(t.x,t.y):new j(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(s,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){let f=new Ye(s,o,{type:hn});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Ye(s,o,{type:hn});d.texture.name="UnrealBloomPass.v"+u,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}let a=Ef;this.highPassUniforms=Nn.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new xe({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new j(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let h=da;this.copyUniforms=Nn.clone(h.uniforms),this.blendMaterial=new xe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:qe,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new pe,this.fsQuad=new Pi(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),i=Math.round(e/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new j(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(t,e,n,i,s){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),s&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){let e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new xe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new j(.5,.5)},direction:{value:new j(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}};Zs.BlurDirectionX=new j(1,0);Zs.BlurDirectionY=new j(0,1);var Sf={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var ga=class extends un{constructor(){super();let t=Sf;this.uniforms=Nn.clone(t.uniforms),this.material=new No({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Pi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===fe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ic?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Rr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var rh=class extends un{constructor(t,e,n){super(),this.env=t,this.scene=e,this.camera=n,this.needsSwap=!1}render(t,e,n){t.setRenderTarget(this.renderToScreen?null:n),t.clear(),this.env.render(t),t.clearDepth(),t.render(this.scene,this.camera)}},_v={uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); c.rgb = clamp(c.rgb, 0.0, 30.0); if (any(isnan(c.rgb))) c.rgb = vec3(0.0); gl_FragColor = c; }"},Mv={uniforms:{tDiffuse:{value:null},uVignette:{value:.32},uSat:{value:1.08},uContrast:{value:1.06},uWarm:{value:.02},uTime:{value:0},uGrain:{value:.025}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uVignette, uSat, uContrast, uWarm, uTime, uGrain; varying vec2 vUv;
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
    }`},xa=class{constructor(t,e,n,i,s){this.renderer=t;let o=t.getDrawingBufferSize(new j),a=new Ye(o.x,o.y,{type:hn,samples:s.msaa?4:0});this.composer=new ma(t,a),this.composer.addPass(new rh(e,n,i)),this.composer.addPass(new ji(_v)),this.bloom=new Zs(new j(o.x/2,o.y/2),.35,.55,.92),this.bloom.enabled=s.bloom!==!1,this.composer.addPass(this.bloom),this.composer.addPass(new ga),this.grade=new ji(Mv),this.composer.addPass(this.grade)}setSize(t,e){this.composer.setSize(t,e)}setNight(t){this.bloom.strength=.18+t*.7,this.bloom.threshold=2.2-t*1.5,this.grade.uniforms.uWarm.value=.015*(1-t),this.grade.uniforms.uSat.value=1.08-t*.1}render(t){this.grade.uniforms.uTime.value+=t,this.composer.render(t)}};var va=class{constructor(t){this.scene=t,this.ND=260;let e=new Dt(1,1,1);this.debris=new Ae(e,new wt({roughness:.4,metalness:.4}),this.ND),this.debris.instanceMatrix.setUsage(Xs),this.debris.frustumCulled=!1,this.debris.castShadow=!0,this.debris.count=0,this.debris.setColorAt(0,new yt),t.add(this.debris),this.parts=[],this.NS=200,this.sparkPos=new Float32Array(this.NS*3);let n=new se;n.setAttribute("position",new le(this.sparkPos,3)),this.sparkPts=new ii(n,new qi({color:16762976,size:.18,transparent:!0,blending:qe,depthWrite:!1})),this.sparkPts.frustumCulled=!1,t.add(this.sparkPts),this.sparks=[];let i=document.createElement("canvas");i.width=i.height=64;let s=i.getContext("2d"),o=s.createRadialGradient(32,32,2,32,32,30);o.addColorStop(0,"rgba(255,255,255,0.9)"),o.addColorStop(1,"rgba(255,255,255,0)"),s.fillStyle=o,s.fillRect(0,0,64,64),this.smokeTex=new Pe(i),this.smokePool=[];for(let a=0;a<140;a++){let l=new wn(new pn({map:this.smokeTex,color:3355443,transparent:!0,opacity:0,depthWrite:!1}));l.visible=!1,t.add(l),this.smokePool.push({s:l,life:0})}this.si=0,this.emitters=[],this.M=new te,this.Q=new Ue,this.E=new Ge,this.V=new L,this.S=new L,this.C=new yt}crash(t,e,n,i,s,o,a=13421772){let l=Math.min(26,Math.round(4+o*1.6));for(let h=0;h<l;h++){let u=Math.random(),f=u<.35?12572904:u<.6?1381653:u<.7?16724e3:a,d=u<.35?.05+Math.random()*.06:.08+Math.random()*.22,x=2+Math.random()*o*.5,p=Math.atan2(s,i)+(Math.random()-.5)*2.2;this._part({x:t,y:e+Math.random()*.5,z:n,vx:Math.cos(p)*x,vy:1.5+Math.random()*3.5,vz:Math.sin(p)*x,rx:Math.random()*6,ry:Math.random()*6,wx:(Math.random()-.5)*20,wy:(Math.random()-.5)*20,s:d,sx:d*(u<.35?1.4:1+Math.random()*2),life:5+Math.random()*4,col:f})}let c=Math.min(40,Math.round(o*3));for(let h=0;h<c;h++){let u=Math.random()*Math.PI*2,f=2+Math.random()*6;this.sparks.push({x:t,y:e+.4,z:n,vx:Math.cos(u)*f+i*2,vy:Math.random()*4,vz:Math.sin(u)*f+s*2,life:.3+Math.random()*.4}),this.sparks.length>this.NS&&this.sparks.shift()}for(let h=0;h<4;h++)this.puff(t,e+.5,n,7829367,1.5)}_part(t){this.parts.length>=this.ND&&this.parts.shift(),this.parts.push(t)}puff(t,e,n,i=3355443,s=1,o=1.2){let a=this.smokePool[this.si++%this.smokePool.length];a.s.position.set(t+(Math.random()-.5)*.4,e,n+(Math.random()-.5)*.4),a.s.material.color.setHex(i),a.life=1,a.size=s,a.vy=o*(.7+Math.random()*.6),a.vx=(Math.random()-.5)*.6,a.vz=(Math.random()-.5)*.6,a.s.visible=!0}emitter(t,e,n=!0){let i={obj:t,offset:e,dark:n,t:0};return this.emitters.push(i),i}removeEmitter(t){let e=this.emitters.indexOf(t);e>=0&&this.emitters.splice(e,1)}update(t){let{M:e,Q:n,E:i,V:s,S:o,C:a}=this,l=0;for(let h=this.parts.length-1;h>=0;h--){let u=this.parts[h];if(u.life-=t,u.life<=0){this.parts.splice(h,1);continue}(u.y>u.s*.5||u.vy>0)&&(u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t,u.rx+=u.wx*t,u.ry+=u.wy*t,u.y<u.s*.5&&(u.y=u.s*.5,u.vy=-u.vy*.3,u.vx*=.6,u.vz*=.6,u.wx*=.5,u.wy*=.5,Math.abs(u.vy)<.5&&(u.vy=0)))}for(let h of this.parts){i.set(h.rx,h.ry,0),n.setFromEuler(i);let u=Math.min(1,h.life);e.compose(s.set(h.x,h.y+.12,h.z),n,o.set(h.sx*u,h.s*.35*u,h.s*u)),this.debris.setMatrixAt(l,e),this.debris.setColorAt(l,a.setHex(h.col)),l++}this.debris.count=l,this.debris.instanceMatrix.needsUpdate=!0,this.debris.instanceColor&&(this.debris.instanceColor.needsUpdate=!0);let c=0;for(let h=this.sparks.length-1;h>=0;h--){let u=this.sparks[h];if(u.life-=t,u.life<=0){this.sparks.splice(h,1);continue}u.vy-=9.8*t,u.x+=u.vx*t,u.y+=u.vy*t,u.z+=u.vz*t}for(let h of this.sparks)this.sparkPos[c*3]=h.x,this.sparkPos[c*3+1]=Math.max(.05,h.y),this.sparkPos[c*3+2]=h.z,c++;this.sparkPts.geometry.setDrawRange(0,c),this.sparkPts.geometry.attributes.position.needsUpdate=!0;for(let h of this.emitters)if(h.t-=t,h.t<=0){h.t=h.dark?.12:.25;let u=h.obj,f=Math.cos(u.h),d=Math.sin(u.h),x=h.offset[0],p=h.offset[2];this.puff(u.x+x*f+p*d,h.offset[1],u.z-x*d+p*f,h.dark?2236962:10066329,h.dark?1.4:.9,h.dark?2.2:1.2)}for(let h of this.smokePool)h.life<=0||(h.life-=t*.35,h.s.position.x+=h.vx*t,h.s.position.y+=h.vy*t,h.s.position.z+=h.vz*t,h.s.scale.setScalar(h.size*(1+(1-h.life)*4)),h.s.material.opacity=Math.max(0,h.life*.55),h.life<=0&&(h.s.visible=!1))}};function bv(){let r=document.createElement("canvas");r.width=512,r.height=96;let t=r.getContext("2d");t.fillStyle="#1446a0",t.fillRect(0,30,512,40),t.fillStyle="#ffffff",t.font="bold 34px Arial",t.textAlign="center",t.textBaseline="middle",t.fillText("\u041F\u0410\u0422\u0420\u0423\u041B\u042C\u041D\u0410\u042F \u041C\u0418\u041B\u0418\u0426\u0418\u042F",256,51);let e=new Pe(r);return e.colorSpace=de,e.anisotropy=4,e}function wv(){let r=new Yt,t=new wt({color:2896962,roughness:.8}),e=new wt({color:13164576,roughness:.6,emissive:3160064}),n=new wt({color:13146744}),i=(a,l,c,h,u)=>{let f=new Q(a,l);return f.position.set(c,h,u),f.castShadow=!0,r.add(f),f};i(new Dt(.46,.62,.27),e,0,1.25,0),i(new Dt(.4,.2,.24),t,0,.9,0),i(new Re(.12,12,10),n,0,1.7,0),i(new Vt(.15,.14,.08,14),t,0,1.84,0),i(new Dt(.34,.03,.36),t,0,1.8,.04);let s=[],o=[];for(let a of[-1,1]){let l=new Yt;l.position.set(.1*a,.9,0);let c=new Q(new Dt(.15,.88,.16).translate(0,-.44,0),t);c.castShadow=!0,l.add(c),r.add(l),s.push(l);let h=new Yt;h.position.set(.28*a,1.52,0);let u=new Q(new Dt(.1,.62,.11).translate(0,-.31,0),t);u.castShadow=!0,h.add(u),r.add(h),o.push(h)}return r.userData={legs:s,arms:o},r}var ya=class{constructor(t,e,n,i,s,o){this.scene=t,this.map=e,this.world=n,this.audio=i,this.hud=s,this.fx=o,this.cars=[],this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this.lastSeen=0,this.cutscene=null;let a=Bn("sedan",{});this.geo=a,this.mats={paint:new Si({color:16054008,metalness:.4,roughness:.3,clearcoat:1,vertexColors:!0}),det:new wt({vertexColors:!0,metalness:.3,roughness:.3}),red:new wt({color:4194304,emissive:16715792,emissiveIntensity:0}),blue:new wt({color:64,emissive:1065215,emissiveIntensity:0}),text:new wt({map:bv(),transparent:!0,roughness:.4}),stripe:new wt({color:1328800,roughness:.4})},this.lights=[new Ji(16719904,0,30,2),new Ji(2117887,0,30,2)];for(let l of this.lights)t.add(l)}crime(t,e){let n=this.wanted;this.heat=Math.min(5.99,this.heat+t),this.wanted=Math.max(this.wanted,Math.floor(this.heat)),this.escapeT=0,this.wanted>n&&(this.hud.toast(`\u{1F6A8} ${e} \u2013 the police are after you!`,2.5),this._updateStars())}_updateStars(){let t=document.getElementById("wanted");t&&(t.innerHTML=this.wanted?"\u2605".repeat(this.wanted)+"<span>"+"\u2605".repeat(5-this.wanted)+"</span>":"",t.classList.toggle("show",this.wanted>0))}_makeCar(t,e,n){let i=new Yt,s=this.geo.spec,o=new Q(this.geo.paint,this.mats.paint),a=new Q(this.geo.detail,this.mats.det);o.castShadow=a.castShadow=!0,i.add(o,a);let l=s.roof[2][1],c=new Q(new Dt(1.1,.12,.3),new wt({color:2236962}));c.position.set(0,l+.06,-.2),i.add(c);let h=new Q(new Dt(.5,.14,.26),this.mats.red);h.position.set(-.28,l+.12,-.2);let u=new Q(new Dt(.5,.14,.26),this.mats.blue);u.position.set(.28,l+.12,-.2),i.add(h,u);for(let d of[-1,1]){let x=new Q(new Ee(s.L*.8,.22),this.mats.stripe);x.position.set(d*(s.W/2+.012),.72,0),x.rotation.y=d*Math.PI/2,i.add(x);let p=new Q(new Ee(2.4,.45),this.mats.text);p.position.set(d*(s.W/2+.02),.72,-.1),p.rotation.y=d*Math.PI/2,i.add(p)}this.scene.add(i);let f={g:i,x:t,z:e,h:n,v:0,path:null,pi:0,repath:0,stuck:0,spec:s,radius:s.W/2+.05};return this.cars.push(f),f}_spawn(t,e,n){for(let i=0;i<30;i++){let s=n+Math.PI+(Math.random()-.5)*2.2*(i>15?2:1),o=180+Math.random()*120,a=this.map.nearestRoad(t+Math.sin(s)*o,e+Math.cos(s)*o,80,c=>c.cls<=4);if(!a||this.map.insideBuilding(a.x,a.z,1))continue;let l=Math.atan2(t-a.x,e-a.z);return this._makeCar(a.x,a.z,l)}return null}clear(){for(let t of this.cars)this.scene.remove(t.g);this.cars.length=0,this.wanted=0,this.heat=0,this.escapeT=0,this.bustT=0,this._updateStars(),this.audio.siren(!1);for(let t of this.lights)t.intensity=0}update(t,e,n){if(this.cutscene)return this._updateCutscene(t,e);let s=performance.now()/1e3*4%2<1;if(this.mats.red.emissiveIntensity=this.wanted?s?4:.2:0,this.mats.blue.emissiveIntensity=this.wanted?s?.2:4:0,!this.wanted){this.cars.length&&this.clear(),this.heat=Math.max(0,this.heat-t*.05);return}let o=Math.min(4,this.wanted);this.cars.length<o&&Math.random()<t*.8&&this._spawn(e.x,e.z,e.h);let a=1e9,l=null;for(let u of this.cars){this._drive(u,t,e);let f=Math.hypot(u.x-e.x,u.z-e.z);f<a&&(a=f,l=u),u.g.position.set(u.x,.02,u.z),u.g.rotation.y=u.h}if(l)for(let u=0;u<2;u++)this.lights[u].position.set(l.x+(u?.4:-.4),2,l.z),this.lights[u].intensity=(u?!s:s)?25:2;this.audio.siren(a<450),a<9&&e.speed<2.2?this.bustT+=t:this.bustT=Math.max(0,this.bustT-t*.5),e.damage>=100&&a<20&&(this.bustT+=t);let c=document.getElementById("bust");if(c&&(c.style.width=Math.min(100,this.bustT/2.5*100)+"%",c.parentElement.classList.toggle("show",this.bustT>.05)),this.bustT>2.5){this._startCutscene(l,e),n&&n();return}a>260?this.escapeT+=t:this.escapeT=0;let h=8+this.wanted*4;this.escapeT>h&&(this.hud.toast(`\u{1F60E} You lost the police! (${this.wanted}\u2605 escape)`,3),this.onEscape&&this.onEscape(this.wanted),this.clear())}_drive(t,e,n){let i=Math.hypot(n.x-t.x,n.z-t.z),s=n.x+n.vx*Math.min(1.2,i/40),o=n.z+n.vz*Math.min(1.2,i/40);if(t.repath-=e,i>70&&((t.repath<=0||!t.path)&&(t.path=this.map.route(t.x,t.z,n.x,n.z),t.pi=2,t.repath=2.5),t.path)){for(;t.pi<t.path.length-2&&Math.hypot(t.path[t.pi]-t.x,t.path[t.pi+1]-t.z)<14;)t.pi+=2;s=t.path[t.pi],o=t.path[t.pi+1]}let l=Math.atan2(s-t.x,o-t.z)-t.h;l=Math.atan2(Math.sin(l),Math.cos(l));let c=Math.min(2.2,9/Math.max(4,t.v))*e;t.h+=ze.clamp(l,-c,c);let h=i>70?44:Math.max(6,n.speed+6);Math.abs(l)>.6&&(h=Math.min(h,12)),i<12&&(h=Math.max(2,n.speed)),t.v+=ze.clamp(h-t.v,-12*e,7*e),t.x+=Math.sin(t.h)*t.v*e,t.z+=Math.cos(t.h)*t.v*e;let u={};for(let f of[1.5,-1.5])this.world.collide(t.x+Math.sin(t.h)*f,t.z+Math.cos(t.h)*f,t.radius,u)&&(t.x+=u.x,t.z+=u.z,t.v*=.85);t.v<1.5&&i>40?t.stuck+=e:t.stuck=0,t.stuck>4&&i>120&&(this.scene.remove(t.g),this.cars.splice(this.cars.indexOf(t),1));for(let f of[n.spec.L*.3,0,-n.spec.L*.3]){let d=n.x+Math.sin(n.h)*f,x=n.z+Math.cos(n.h)*f;for(let p of[1.3,-1.3]){let m=t.x+Math.sin(t.h)*p,g=t.z+Math.cos(t.h)*p,M=d-m,_=x-g,v=Math.hypot(M,_),I=n.radius+t.radius;if(v<I&&v>1e-4){let w=M/v,S=_/v;n.x+=w*(I-v)*.6,n.z+=S*(I-v)*.6,t.x-=w*(I-v)*.4,t.z-=S*(I-v)*.4;let R=(n.vx-Math.sin(t.h)*t.v)*w+(n.vz-Math.cos(t.h)*t.v)*S;R<0&&(n.vx-=w*R,n.vz-=S*R,t.v*=.6,-R>4&&(this.fx&&this.fx.crash(m+w*t.radius,.6,g+S*t.radius,w,S,-R,16054008),this.audio.crash(-R),n.damage=Math.min(100,n.damage+-R*.4),this.onRam&&this.onRam(-R)))}}}}_startCutscene(t,e){this.audio.siren(!0);let n=wv();this.scene.add(n);let i=Math.sin(e.h),s=Math.cos(e.h),o=-s,a=i;t||(t=this._makeCar(e.x+i*7,e.z+s*7,e.h+Math.PI));let l=e.x+i*6.5-o*2.2,c=e.z+s*6.5-a*2.2;this.cutscene={t:0,pc:t,off:n,from:{x:t.x,z:t.z,h:t.h},to:{x:l,z:c,h:e.h+Math.PI*.8},fine:250+this.wanted*250,stars:this.wanted},document.getElementById("cine").classList.add("on"),document.getElementById("bustBox").classList.remove("show")}_updateCutscene(t,e){let n=this.cutscene,i=n.pc;n.t+=t;let s=n.t;e.vx=e.vz=0,e.r=0;let o=performance.now()/250%2<1;this.mats.red.emissiveIntensity=o?4:.2,this.mats.blue.emissiveIntensity=o?.2:4;let a=Math.min(1,s/1.5),l=1-Math.pow(1-a,3);i.x=n.from.x+(n.to.x-n.from.x)*l,i.z=n.from.z+(n.to.z-n.from.z)*l;let c=n.to.h-n.from.h;c=Math.atan2(Math.sin(c),Math.cos(c)),i.h=n.from.h+c*l,i.g.position.set(i.x,.02,i.z),i.g.rotation.y=i.h;for(let y=0;y<2;y++)this.lights[y].position.set(i.x+(y?.4:-.4),2.2,i.z),this.lights[y].intensity=(y?!o:o)?30:3;let h=n.off,u=h.userData,f=i.x+Math.cos(i.h)*1.4,d=i.z-Math.sin(i.h)*1.4,x=e.x+Math.cos(e.h)*1.6+Math.sin(e.h)*.4,p=e.z-Math.sin(e.h)*1.6+Math.cos(e.h)*.4,m=f,g=d,M=!1;if(s>1.5){let y=Math.min(1,(s-1.5)/3);m=f+(x-f)*y,g=d+(p-d)*y,M=y<1}h.visible=s>1.4,h.position.set(m,.02,g),h.rotation.y=M?Math.atan2(x-f,p-d):Math.atan2(e.x-m,e.z-g);let _=M?Math.sin(s*9):0;u.legs[0].rotation.x=_*.5,u.legs[1].rotation.x=-_*.5,u.arms[0].rotation.x=-_*.45,u.arms[1].rotation.x=s>4.6?-1.4-Math.sin(s*3)*.1:_*.45;let v=document.getElementById("cineSub"),I=[[1.6,""],[4.6,"\u{1F46E} \xAB\u0417\u0434\u0440\u0430\u0432\u0441\u0442\u0432\u0443\u0439\u0442\u0435! \u041F\u0430\u0442\u0440\u0443\u043B\u044C\u043D\u0430\u044F \u043C\u0438\u043B\u0438\u0446\u0438\u044F. \u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B, \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430.\xBB"],[6.6,"\u{1F46E} \xAB\u041F\u0440\u0435\u0432\u044B\u0448\u0435\u043D\u0438\u0435 \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u0438, \u0414\u0422\u041F, \u043D\u0435\u043F\u043E\u0434\u0447\u0438\u043D\u0435\u043D\u0438\u0435\u2026 \u041E\u0444\u043E\u0440\u043C\u043B\u044F\u0435\u043C.\xBB"],[8.6,`Fine: \u2212${n.fine} coins \xB7 ${"\u2605".repeat(n.stars)} cleared`]],w="";for(let[y,b]of I)s>y&&(w=b);v.textContent!==w&&(v.textContent=w),document.getElementById("busted").classList.toggle("show",s>7.6);let S=new L,R=new L;if(s<2.5){let y=e.h+2.2+s*.35;S.set(e.x+Math.sin(y)*9,1.1,e.z+Math.cos(y)*9),R.set((e.x+i.x)/2,1,(e.z+i.z)/2)}else s<4.6?(S.set(m-Math.sin(h.rotation.y)*4+1.2,1.8,g-Math.cos(h.rotation.y)*4),R.set(m,1.4,g)):s<7.6?(S.set(m+Math.cos(e.h)*1.4-Math.sin(e.h)*1.2,1.75,g-Math.sin(e.h)*1.4-Math.cos(e.h)*1.2),R.set(e.x,1.1,e.z)):(S.set(e.x+Math.cos(e.h)*12+Math.sin(e.h)*6,4,e.z-Math.sin(e.h)*12+Math.cos(e.h)*6),R.set(e.x,.8,e.z));if(s>10.5){this.scene.remove(h),document.getElementById("cine").classList.remove("on"),document.getElementById("busted").classList.remove("show"),v.textContent="";let y=n.fine;return this.cutscene=null,this.clear(),{done:!0,fine:y,cam:S,look:R}}return{cam:S,look:R}}};var Ev={\u0430:"a",\u0431:"b",\u0432:"v",\u0433:"g",\u0434:"d",\u0435:"e",\u0451:"e",\u0436:"zh",\u0437:"z",\u0438:"i",\u0439:"i",\u043A:"k",\u043B:"l",\u043C:"m",\u043D:"n",\u043E:"o",\u043F:"p",\u0440:"r",\u0441:"s",\u0442:"t",\u0443:"u",\u0444:"f",\u0445:"h",\u0446:"ts",\u0447:"ch",\u0448:"sh",\u0449:"sh",\u044A:"",\u044B:"y",\u044C:"",\u044D:"e",\u044E:"yu",\u044F:"ya",\u04E9:"o",\u04AF:"u",\u04A3:"n",\u0456:"i"};function _a(r){r=String(r||"").toLowerCase();let t="";for(let e of r)t+=Ev[e]??e;return t.replace(/kh/g,"h").replace(/[jy]/g,"i").replace(/[^a-z0-9 ]/g," ").replace(/\s+/g," ").trim()}var Tf={cafe:"Caf\xE9",restaurant:"Restaurant",fast_food:"Fast food",pharmacy:"Pharmacy",bank:"Bank",supermarket:"Supermarket",convenience:"Shop",fuel:"Petrol station",hotel:"Hotel",clothes:"Clothes",bar:"Bar",mall:"Mall",museum:"Museum",theatre:"Theatre",university:"University",hospital:"Hospital",cinema:"Cinema",park:"Park",stadium:"Stadium",place_of_worship:"Place of worship",marketplace:"Bazaar",square:"Square",terminal:"Airport",department_store:"Department store",attraction:"Attraction",memorial:"Memorial",monument:"Monument",bakery:"Bakery",mobile_phone:"Phones"},Sv={Landmark:"\u2B50",Street:"\u{1F6E3}",Caf\u00E9:"\u2615",Restaurant:"\u{1F37D}","Fast food":"\u{1F32F}",Pharmacy:"\u{1F48A}",Bank:"\u{1F3E6}",Supermarket:"\u{1F6D2}",Shop:"\u{1F3EA}","Petrol station":"\u26FD",Hotel:"\u{1F3E8}",Mall:"\u{1F6CD}",Museum:"\u{1F3DB}",Park:"\u{1F333}",Bazaar:"\u{1F9FA}",Airport:"\u2708",University:"\u{1F393}",Hospital:"\u{1F3E5}",Building:"\u{1F3E2}"},Ma=class{constructor(t){this.items=[];let e=new Set,n=(s,o,a,l,c,h)=>{if(!s||l===void 0)return;let u=_a(s)+"|"+Math.round(l/150)+","+Math.round(c/150);e.has(u)||(e.add(u),this.items.push({name:s,alt:o&&o!==s?o:"",kind:a,x:l,z:c,w:h,n:_a(s)+" "+_a(o)}))};for(let s of Xe)n(s.name,s.local,"Landmark",s.x,s.z,5);let i=new Map;for(let s of t.edges){if(s.name<0||s.cls>5)continue;let o=i.get(s.name);(!o||s.len>o.len)&&i.set(s.name,s)}for(let[s,o]of i){let[a,l]=t.names[s],c=Math.floor(o.pts.length/4)*2;n(l||a,l?a:"","Street",o.pts[c],o.pts[c+1],4-o.cls*.3)}for(let s of t.pois)n(s.en||s.name,s.en?s.name:"",Tf[s.kind]||"Place",s.x,s.z,3);for(let s of t.chunks.values())for(let o of s.signs)n(o.name,"",Tf[o.kind]||"Shop",o.x,o.z,1);for(let s of t.buildings)s.name&&n(s.name,"","Building",s.cx,s.cz,1.5)}find(t,e=12,n){let i=_a(t);if(!i)return[];let s=i.split(" "),o=[];for(let a of this.items){let l=0;if(a.n.startsWith(i))l=10;else if(a.n.includes(" "+i))l=7;else if(s.every(c=>a.n.includes(c)))l=4;else continue;l+=a.w,n&&(l-=Math.min(3,Math.hypot(a.x-n.x,a.z-n.z)/4e3)),o.push([l,a])}return o.sort((a,l)=>l[0]-a[0]),o.slice(0,e).map(a=>a[1])}icon(t){return Sv[t]||"\u{1F4CD}"}};var xt=r=>document.getElementById(r),Ii=r=>new Promise(t=>setTimeout(t,r)),Tv=[15790320,1118740,9212054,5922918,12589080,1718906,2779706,15909376,6953530,14187040,4237528,13154458],oh=[{id:"sedan",name:"Sedan",desc:"The classic white Bishkek sedan. 165 hp",price:0},{id:"oldsedan",name:"Old Classic",desc:"Boxy Soviet-era legend. 75 hp",price:2500},{id:"hatch",name:"City Hatch",desc:"Small Japanese import. Nimble. 110 hp",price:6e3},{id:"van",name:"Marshrutka",desc:"Your own white minibus. 160 hp",price:12e3},{id:"suv",name:"Land SUV",desc:"Big 4x4 \u2013 rules the potholes. 280 hp",price:25e3},{id:"coupe",name:"Sport Coupe",desc:"420 hp. Mind the 150 km/h cameras!",price:6e4}],Ir={low:{scale:.7,view:900,far:2500,shadows:!1,bloom:!1,msaa:!1},medium:{scale:1,view:1250,far:4500,shadows:!0,bloom:!0,msaa:!1},high:{scale:1.25,view:1600,far:6500,shadows:!0,bloom:!0,msaa:!0},ultra:{scale:1.6,view:2200,far:9e3,shadows:!0,bloom:!0,msaa:!0}},Av={preset:"medium",traffic:1,peds:1,sens:1,abs:!0,tcs:!0,esc:!0,steerAssist:!0,manual:!1,fov:62,vol:.7,minimap:!0,timeSpeed:1,mp:!0,name:"",shake:!0,...Ir.medium};function Rv(){let r={};try{r=JSON.parse(localStorage.getItem("bd_settings2")||"{}")}catch{}if(!r.preset){let t=navigator.hardwareConcurrency||4,e=/Mobi|Android|iPhone/i.test(navigator.userAgent),n=new URLSearchParams(location.search).get("q");r.preset=n||(e?"low":t>=8?"high":"medium"),Object.assign(r,Ir[r.preset])}return Object.assign({},Av,Ir[r.preset]||{},r)}function Af(r){try{localStorage.setItem("bd_settings2",JSON.stringify(r))}catch{}}async function Cv(){let r=(E,B)=>{xt("loadText").textContent=E,xt("loadBar").style.width=(B*100).toFixed(0)+"%"};if(r("Reading OpenStreetMap data of Bishkek\u2026",.05),await Ii(30),!window.BISHKEK_DATA){xt("loadText").textContent="Map data missing (data/bishkek-data.js)";return}let t=new Xo(window.BISHKEK_DATA);window.BISHKEK_DATA=null,r(`${t.buildings.length.toLocaleString()} buildings \xB7 ${t.edges.length.toLocaleString()} streets \xB7 ${t.signalClusters.length} traffic lights`,.25),await Ii(30);let e=Rv(),n=new So({antialias:!1,powerPreference:"high-performance"}),i=()=>n.setPixelRatio(Math.min(window.devicePixelRatio*e.scale,2)*(window.devicePixelRatio>=2?.75:1)||1);i(),n.setSize(window.innerWidth,window.innerHeight),n.outputColorSpace=de,n.toneMapping=Rr,n.toneMappingExposure=.95,n.shadowMap.enabled=e.shadows,n.shadowMap.type=Rc,n.autoClear=!1,xt("app").appendChild(n.domElement);let s=new Xi,o=new ke(e.fov,window.innerWidth/window.innerHeight,.5,4200),a=new jo(n,s);a.sun.shadow.mapSize.set(e.preset==="ultra"?4096:e.preset==="high"?2048:1536,e.preset==="ultra"?4096:e.preset==="high"?2048:1536);let l=Yu();r("Building Bishkek\u2026",.35),await Ii(20);let c=new Ko(s,t,l);for(let E of["grass","dirt","field","asphalt","concrete","water"])Object.assign(c.mat[E],{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});Object.assign(c.mat.paving,{polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-3}),Object.assign(c.mat.road,{polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-5}),Object.assign(c.mat.mark,{polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-9});let h=new ha(t),u=new la,f=new ca(t,h,u);f.owned||(f.owned=["sedan"]);let d=new oa(s,t,c);f.setAirport(d),r("Landmarks: Ala-Too Square, Victory Square, Central Mosque\u2026",.45),await Ii(20);let x=new aa(s,t,c),p=t.nearestRoad(40,55,120,E=>E.cls<=2)||t.nearestRoad(0,0,500),m=new ta(s,f.owned.includes(f.savedCar)?f.savedCar:"sedan",f.savedColor);f.homeCar=m.type,f.homeColor=m.color;let g=p.x-p.dz*t.laneOffset(p.e,0),M=p.z+p.dx*t.laneOffset(p.e,0);m.place(g,M,Math.atan2(p.dx,p.dz));let _={x:g,z:M};r("Streets, buildings and parks around Ala-Too Square\u2026",.5),c.radius=500,c.update({x:m.x,z:m.z},0,!0),c.radius=Math.min(e.view,900);for(let E=0;E<15;E++)c.update({x:m.x,z:m.z},0,!1),r("Streets, buildings, trees and shop signs\u2026",.55+E*.025),await Ii(1);c.radius=e.view,r("Traffic, traffic lights and people\u2026",.92),await Ii(20);let v=new na(s,t,c),I=new sa(s,t);I.addZone({name:"Manas Airport",x:d.dropoff.x+d.n.x*18,z:d.dropoff.y+d.n.y*-18,r:45,n:40,bags:!0});let w=new ua(t,f,h,u,I);w.completed=f.jobsDone||0;let S=new Ma(t),R=new va(s),y=new ya(s,t,c,u,h,R);y.onEscape=E=>{let B=100*E;f.money+=B,u.cash(),h.toast(`+${B} coins escape bonus`,2)};let b=new fa(s);m.remotes=b;let C=new ea(o);C.snap(m);let U=null,N=()=>{U=e.bloom||e.msaa?new xa(n,a,s,o,{bloom:e.bloom,msaa:e.msaa}):null};N();let T={mode:"menu",hour:8.4,paused:!0,flight:null,flightCam:0,spot:null,keys:{},steer:0,thr:0,mapOpen:!1,photoCbs:[],lastSave:0,time:0,mouseYaw:0,hud:!0,chatOpen:!1};function F(){v.target=Math.round(260*e.traffic),I.target=Math.round(220*e.peds),m.assists={abs:e.abs,tcs:e.tcs,esc:e.esc,steerAssist:e.steerAssist,sens:e.sens,manual:e.manual},u.setVolume(e.vol),c.radius=e.view,c.farRadius=e.far||0,o.far=Math.max(4200,(e.far||0)+800),o.updateProjectionMatrix(),o.fov=e.fov,xt("hudRoot").classList.toggle("nomini",!e.minimap),Af(e)}F(),window.__bd={fx:R,police:y,teleport:(...E)=>ut(...E),rig:C,map:t,world:c,car:m,traffic:v,peds:I,airport:d,game:f,jobs:w,net:b,S:T,scene:s,camera:o,renderer:n,env:a,settings:e};function k(E,B,tt){m.setType(E,B??m.color),T.engineSmoke&&(R.removeEmitter(T.engineSmoke),T.engineSmoke=null),m.assists&&(m.assists={...m.assists}),tt&&(f.homeCar=E,f.homeColor=B??m.color),C.snap(m)}let X={steer:0,gas:0,brake:0,hand:!1},V=["KeyW","KeyS","KeyA","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Space"];window.addEventListener("keydown",E=>{if(!T.chatOpen&&!(E.target&&E.target.tagName==="INPUT"&&E.target.type==="text")){if(E.code==="Tab"){E.preventDefault(),T.mode!=="menu"&&Ct(!0);return}E.code==="F1"&&E.preventDefault(),!(E.repeat&&!V.includes(E.code))&&(T.keys[E.code]=!0,V.includes(E.code)&&E.preventDefault(),q(E.code))}}),window.addEventListener("keyup",E=>{T.keys[E.code]=!1,E.code==="Tab"&&T.tabOnline&&Ct(!1)}),window.addEventListener("blur",()=>{T.keys={}});function q(E){if(u.start(),T.mode==="menu"){E==="Enter"&&xt("startBtn").click();return}if(E==="Escape")return T.mapOpen?Ht(!1):xt("airportMenu").classList.contains("hidden")?T.mode==="flight"?Ut(!0):T.mode==="spot"?Pt():T.mode==="cutscene"?void 0:Tt():xt("airportMenu").classList.add("hidden");if(!T.paused)switch(E){case"KeyC":T.mode==="flight"?T.flightCam=(T.flightCam+1)%4:h.toast("Camera: "+C.cycle(),1.2);break;case"KeyM":Ht();break;case"KeyH":u.horn(.3,.45),I.list.forEach(B=>{!B.fixed&&Math.hypot(B.x-m.x,B.z-m.z)<15&&B.mode==="walk"&&(B.dodge=.5,B.dside=Math.random()<.5?1:-1)});break;case"KeyE":rt();break;case"KeyJ":Tt(!0,"pJobs");break;case"KeyR":lt();break;case"KeyG":f.routeTarget&&!w.active&&(f.clearRoute(),h.toast("GPS cleared",1.2));break;case"KeyK":h.toast(u.toggleMute()?"Sound off":"Sound on",1.2);break;case"BracketRight":T.hour=(T.hour+1)%24,h.toast(h.clockText(),.8);break;case"BracketLeft":T.hour=(T.hour+23)%24,h.toast(h.clockText(),.8);break;case"ShiftLeft":case"ShiftRight":e.manual&&m.shiftUp();break;case"ControlLeft":case"ControlRight":e.manual&&m.shiftDown();break;case"F1":T.hud=!T.hud,xt("hudRoot").classList.toggle("off",!T.hud);break;case"Enter":e.mp&&st();break}}let K=!1;n.domElement.addEventListener("contextmenu",E=>E.preventDefault()),n.domElement.addEventListener("mousedown",E=>{E.button===2&&(K=!0),u.start()}),window.addEventListener("mouseup",E=>{E.button===2&&(K=!1)}),window.addEventListener("mousemove",E=>{K&&(T.mouseYaw-=E.movementX*.006)});function lt(){let E=t.nearestRoad(m.x,m.z,300,et=>et.cls<=4);if(!E)return;let B=t.laneOffset(E.e,0),tt=E.dx,ct=E.dz;!E.e.ow&&Math.sin(m.h)*tt+Math.cos(m.h)*ct<0&&(tt=-tt,ct=-ct),m.place(E.x-ct*B,E.z+tt*B,Math.atan2(tt,ct)),h.toast("Car reset",1)}function ut(E,B){let tt=t.nearestRoad(E,B,400,et=>et.cls<=4);if(!tt)return;let ct=t.laneOffset(tt.e,0);m.place(tt.x-tt.dz*ct,tt.z+tt.dx*ct,Math.atan2(tt.dx,tt.dz)),v.clear();for(let et in v.models)v.models[et].n=0;y.clear();for(let et of[...R.emitters])et.ai&&R.removeEmitter(et);I.list=I.list.filter(et=>et.fixed);for(let et of I.extraZones)et.count=0;C.snap(m);for(let et=0;et<6;et++)c.update({x:m.x,z:m.z},0,!0)}function it(E,B,tt,ct,et,Ft,me,ne){e.shake&&(C.shake=Math.min(.7,E*.05)),u.crash(E),ct!==void 0&&E>3&&(R.crash(ct,.6,et,Ft??0,me??0,E,B==="car"&&tt?tt.color:m.color),E>4&&m.dent(ct,et,Math.min(.32,E*.022))),B==="car"&&tt&&(ne?(tt.emitter=R.emitter(tt,[0,1,tt.spec.L*.32],!0),tt.emitter.ai=!0,h.toast("\u{1F4A5} Car wrecked!",1.5),y.crime(1.6,"You wrecked a car")):E>7?y.crime(1,"Hit-and-run"):E>4&&y.crime(.4,"Reckless driving")),B==="player"&&E>6&&y.crime(.6,"Rammed another driver"),O()}function O(){m.damage>55&&!T.engineSmoke&&(T.engineSmoke=R.emitter(m,[0,1.05,m.spec.L*.36],!1)),T.engineSmoke&&(T.engineSmoke.dark=m.damage>=90),m.damage<=55&&T.engineSmoke&&(R.removeEmitter(T.engineSmoke),T.engineSmoke=null)}y.onRam=()=>O(),f.onFine=E=>{E.kind==="Speeding"&&E.amount>=500?y.crime(1,"Extreme speeding"):E.kind==="Runway incursion"?y.crime(2,"Runway incursion"):E.kind==="Red light"&&y.crime(.35,"Ran a red light")};let $=[];function at(E,B,tt){let ct=document.createElement("div");for(ct.innerHTML=`<b>${Rn(E)}</b> ${Rn(B)}`,tt&&(ct.style.opacity="0.85"),xt("chat").appendChild(ct),$.push(ct);$.length>6;)$.shift().remove();setTimeout(()=>{ct.style.opacity="0"},9e3),setTimeout(()=>ct.remove(),10500),tt||u.blip(700,.04,.06)}b.onChat=at,b.onJoin=E=>at("\u25CF",`${E} is driving in Bishkek`,!0);function st(){if(!b.enabled)return;T.chatOpen=!0,T.keys={};let E=xt("chatInput");E.classList.remove("hidden"),E.value="",E.focus()}xt("chatInput").addEventListener("keydown",E=>{E.stopPropagation(),E.key==="Enter"&&(b.chat(E.target.value),pt()),E.key==="Escape"&&pt()});function pt(){T.chatOpen=!1,xt("chatInput").classList.add("hidden"),xt("chatInput").blur()}document.querySelectorAll(".tab").forEach(E=>E.onclick=()=>Et(E.dataset.p));function Et(E){document.querySelectorAll(".tab").forEach(B=>B.classList.toggle("on",B.dataset.p===E)),document.querySelectorAll(".page").forEach(B=>B.classList.toggle("on",B.id===E)),E==="pJobs"&&Lt(),E==="pGarage"&&vt(),E==="pOnline"&&Xt(),E==="pPlaces"&&z(),E==="pSettings"&&A()}function Tt(E,B){T.paused=E!==void 0?E:!T.paused,xt("pause").classList.toggle("hidden",!T.paused),T.paused&&Et(B||"pJobs"),T.keys={}}xt("resume").onclick=()=>Tt(!1);function Ht(E){T.mapOpen=E!==void 0?E:!T.mapOpen,xt("mapPanel").classList.toggle("hidden",!T.mapOpen),T.keys={},T.mapOpen?(h._resize(),h.centerMap(m.x,m.z,.12),setTimeout(()=>xt("searchInput").focus(),50)):xt("searchInput").blur()}let nt=[],ft=0,D=null;function zt(){xt("searchRes").innerHTML=nt.map((E,B)=>`<button class="${B===ft?"on":""}" data-i="${B}"><span class="ic">${S.icon(E.kind)}</span><span>${Rn(E.name)}<small>${E.kind}${E.alt?" \xB7 "+Rn(E.alt):""} \xB7 ${ba(Math.hypot(E.x-m.x,E.z-m.z))}</small></span></button>`).join(""),xt("searchRes").querySelectorAll("button").forEach(E=>E.onclick=()=>dt(nt[+E.dataset.i]))}function dt(E){E&&(D=E,h.searchMark=E,h.centerMap(E.x,E.z,.6),xt("pcName").textContent=E.name,xt("pcSub").textContent=`${E.kind}${E.alt?" \xB7 "+E.alt:""} \xB7 ${ba(Math.hypot(E.x-m.x,E.z-m.z))} away`,xt("placeCard").classList.remove("hidden"),nt=[],zt(),xt("searchInput").blur())}xt("searchInput").addEventListener("input",E=>{ft=0,nt=S.find(E.target.value,10,m),zt()}),xt("searchInput").addEventListener("keydown",E=>{E.stopPropagation(),E.key==="ArrowDown"&&(ft=Math.min(nt.length-1,ft+1),zt(),E.preventDefault()),E.key==="ArrowUp"&&(ft=Math.max(0,ft-1),zt(),E.preventDefault()),E.key==="Enter"&&dt(nt[ft]),E.key==="Escape"&&(E.target.value?(E.target.value="",nt=[],zt()):Ht(!1))}),xt("pcRoute").onclick=()=>{D&&(f.setRoute(D.x,D.z,D.name),h.toast(`\u{1F9ED} Route to ${Rn(D.name)}`,2),Ht(!1))},xt("pcGo").onclick=()=>{D&&(ut(D.x,D.z),h.toast(`\u26A1 ${Rn(D.name)}`,2),Ht(!1))},h.onMapClick=(E,B,tt)=>{if(xt("placeCard").classList.add("hidden"),h.searchMark=null,tt){ut(E,B),Ht(!1);return}f.setRoute(E,B,"Waypoint"),h.toast("GPS route set",1.2)},xt("mapClose").onclick=()=>Ht(!1);function Lt(){xt("jobCards").innerHTML=Object.entries(Ki).map(([B,tt])=>`<button class="card ${w.active?.type===B?"sel":""}" data-id="${B}"><div class="ic">${tt.icon}</div><b>${tt.name}</b><small>${tt.desc}</small></button>`).join(""),xt("jobCards").querySelectorAll("button").forEach(B=>B.onclick=()=>{if(T.mode==="drive"){if(Tt(!1),w.active?.type===B.dataset.id){w.stop(m,k);return}w.start(B.dataset.id,m,s,k)}}),xt("jobNow").innerHTML=w.active?`On shift: <b>${w.status(m)}</b> \xB7 <a href="#" id="endShift" style="color:#3fc8ff">end shift</a>`:`${w.completed} jobs done \xB7 balance <b>${Fn(f.money)} coins</b>`;let E=xt("endShift");E&&(E.onclick=B=>{B.preventDefault(),w.stop(m,k),Lt()})}function vt(){xt("garage").innerHTML=oh.map(B=>{let tt=f.owned.includes(B.id);return`<button class="card ${m.type===B.id?"sel":""} ${tt?"":"locked"}" data-id="${B.id}"><b>${B.name}</b><small>${B.desc}</small><div class="price">${tt?m.type===B.id?"Driving":"Owned":"\u{1FA99} "+Fn(B.price)}</div></button>`}).join(""),xt("garage").querySelectorAll("button").forEach(B=>B.onclick=()=>{let tt=oh.find(ct=>ct.id===B.dataset.id);if(w.active&&(w.active.type==="bus"||w.active.type==="marshrutka")){h.toast("Finish your route first",1.5);return}if(!f.owned.includes(tt.id)){if(f.money<tt.price){h.toast(`Not enough coins (${Fn(tt.price)} needed)`,1.6);return}f.money-=tt.price,f.owned.push(tt.id),u.cash()}k(tt.id,m.color,!0),f.save(m),vt()});let E=Math.round(m.damage*3+m.dents*5);xt("dmgTxt").textContent=m.damage>1||m.dents?`Damage ${Math.round(m.damage)}% \xB7 ${E} coins`:"Your car is in perfect shape",xt("repairBtn").onclick=()=>{if(m.damage>1||m.dents){if(f.money<E){h.toast("Not enough coins",1.2);return}f.money-=E,m.repair(),O(),u.cash(),vt()}},xt("colors").innerHTML=Tv.map(B=>`<button class="sw" style="background:#${B.toString(16).padStart(6,"0")}" data-c="${B}"></button>`).join(""),xt("colors").querySelectorAll("button").forEach(B=>B.onclick=()=>{m.setColor(+B.dataset.c),f.homeColor=+B.dataset.c,f.save(m)})}function Xt(){xt("netStatus").innerHTML=e.mp?b.status==="online"?`<span class="dot on"></span> Connected \xB7 ${b.players.size+1} drivers in Bishkek right now`:`Connecting\u2026 (${b.status})`:"Multiplayer is off (Settings \u2192 Online).";let E=[{name:b.name||e.name||"You",money:f.money,job:w.active?Ki[w.active.type].icon:"",car:m.type,me:!0}].concat(b.list());E.sort((B,tt)=>tt.money-B.money),xt("lb").innerHTML="<tr><th>#</th><th>Driver</th><th>Coins</th><th>Now</th></tr>"+E.map((B,tt)=>`<tr class="${B.me?"me":""}"><td>${tt+1}</td><td>${Rn(B.name)}</td><td>${Fn(B.money)}</td><td>${B.job||oh.find(ct=>ct.id===B.car)?.name||""}</td></tr>`).join("")}function Ct(E){T.tabOnline=E,E?(Xt(),xt("pause").classList.remove("hidden"),Et("pOnline")):T.paused||xt("pause").classList.add("hidden")}function z(){xt("placeCount").textContent=`${f.visited.size}/${Xe.length} landmarks discovered \xB7 click to travel`,xt("placeList").innerHTML=Xe.map(E=>`<button class="place ${f.visited.has(E.id)?"done":""}" data-id="${E.id}"><span>${f.visited.has(E.id)?"\u2714":"\u25CB"} ${E.name}</span><small>${E.local||""}</small></button>`).join(""),xt("placeList").querySelectorAll("button").forEach(E=>E.onclick=()=>{let B=Xe.find(tt=>tt.id===E.dataset.id);ut(B.x,B.z),Tt(!1)}),xt("fineList").innerHTML=f.fines.length?f.fines.slice(-10).reverse().map(E=>`<div class="row"><span>${E.kind}<br><small class="muted">${E.time} \xB7 ${Rn(E.detail)}</small></span><b style="color:#ff8a80">\u2212${Fn(E.amount)}</b></div>`).join(""):'<p class="muted">No fines. Keep it under 150 km/h!</p>'}function A(){let E=(et,Ft)=>`<div class="row"><label>${Ft}</label><button class="tog ${e[et]?"on":""}" data-k="${et}"></button></div>`,B=(et,Ft,me,ne,He,Ie=oi=>oi)=>`<div class="row"><label>${Ft} <small class="muted" id="v_${et}">${Ie(e[et])}</small></label><input type="range" data-k="${et}" min="${me}" max="${ne}" step="${He}" value="${e[et]}"></div>`,tt=(et,Ft,me)=>`<div class="row"><label>${Ft}</label><select data-k="${et}">${me.map(([ne,He])=>`<option value="${ne}" ${String(e[et])===String(ne)?"selected":""}>${He}</option>`).join("")}</select></div>`;xt("settingsBox").innerHTML=`<div class="set"><div>
      <h4>Graphics</h4>
      ${tt("preset","Quality preset",[["low","Low"],["medium","Medium"],["high","High"],["ultra","Ultra"],["custom","Custom"]])}
      ${B("scale","Resolution",.5,2,.05,et=>Math.round(et*100)+"%")}
      ${B("view","Detail distance",600,2600,100,et=>et+" m")}
      ${B("far","City skyline distance",0,1e4,500,et=>et?et/1e3+" km":"off")}
      ${E("shadows","Shadows")}${E("bloom","Bloom & colour grading")}${E("msaa","Anti-aliasing")}
      ${B("fov","Field of view",50,85,1,et=>et+"\xB0")}
      <h4>World</h4>
      ${B("traffic","Traffic density",.2,2,.1,et=>Math.round(et*100)+"%")}
      ${B("peds","Pedestrians",0,2,.1,et=>Math.round(et*100)+"%")}
      ${B("timeSpeed","Day speed",0,6,.5,et=>et?et+"\xD7":"paused")}
    </div><div>
      <h4>Driving</h4>
      ${B("sens","Steering sensitivity",.4,1.6,.05,et=>Math.round(et*100)+"%")}
      ${tt("manual","Gearbox",[["false","Automatic"],["true","Manual (Shift / Ctrl)"]])}
      ${E("abs","ABS")}${E("tcs","Traction control")}${E("esc","Stability control")}${E("steerAssist","Counter-steer assist")}
      <h4>Interface &amp; sound</h4>
      ${E("minimap","Minimap")}${E("shake","Camera shake")}
      ${B("vol","Volume",0,1,.05,et=>Math.round(et*100)+"%")}
      <h4>Online</h4>
      ${E("mp","Multiplayer")}
      <div class="row"><label>Driver name</label><input type="text" maxlength="18" data-k="name" value="${Rn(e.name||"")}"></div>
      <div class="row"><label>Progress</label><button class="btn" id="resetProg">Reset progress</button></div>
    </div></div>`;let ct=xt("settingsBox");ct.querySelectorAll(".tog").forEach(et=>et.onclick=()=>{let Ft=et.dataset.k;e[Ft]=!e[Ft],et.classList.toggle("on",e[Ft]),Y(Ft)}),ct.querySelectorAll("input[type=range]").forEach(et=>et.oninput=()=>{let Ft=et.dataset.k;e[Ft]=+et.value;let me=xt("v_"+Ft);me&&(me.textContent=et.parentElement.querySelector("small").textContent=Ft==="view"?et.value+" m":Ft==="far"?+et.value?et.value/1e3+" km":"off":Ft==="fov"?et.value+"\xB0":Ft==="timeSpeed"?+et.value?et.value+"\xD7":"paused":Math.round(et.value*100)+"%"),Y(Ft)}),ct.querySelectorAll("select").forEach(et=>et.onchange=()=>{let Ft=et.dataset.k;e[Ft]=Ft==="manual"?et.value==="true":et.value,Y(Ft)}),ct.querySelector("input[type=text]").onchange=et=>{e.name=et.target.value.trim().slice(0,18)||"Driver",Y("name")},xt("resetProg").onclick=()=>{confirm("Reset coins, cars and landmarks?")&&(localStorage.removeItem("bishkekDrive"),location.reload())}}function Y(E){E==="preset"&&Ir[e.preset]?(Object.assign(e,Ir[e.preset]),A()):["scale","view","far","shadows","bloom","msaa"].includes(E)&&(e.preset="custom"),["scale","preset"].includes(E)&&(i(),n.setSize(window.innerWidth,window.innerHeight)),["shadows","preset"].includes(E)&&(n.shadowMap.enabled=e.shadows,s.traverse(B=>{B.material&&(Array.isArray(B.material)?B.material:[B.material]).forEach(tt=>tt.needsUpdate=!0)})),["bloom","msaa","preset","scale"].includes(E)&&N(),E==="mp"&&(e.mp?b.connect(e.name||"Driver"):b.disconnect()),E==="name"&&b.enabled&&(b.name=e.name),F(),o.updateProjectionMatrix()}xt("nameInput").value=e.name||"",xt("mpToggle").classList.toggle("on",e.mp),xt("mpToggle").onclick=()=>{e.mp=!e.mp,xt("mpToggle").classList.toggle("on",e.mp)},xt("startBtn").onclick=()=>{u.start(),e.name=(xt("nameInput").value.trim()||e.name||"Driver"+Math.floor(Math.random()*900+100)).slice(0,18),Af(e),xt("menu").classList.add("hidden"),T.mode="drive",T.paused=!1,C.snap(m),e.mp&&b.connect(e.name);let E=!1;try{E=!!localStorage.getItem("bd_intro")}catch{}E?h.toast(`Salam, <b>${Rn(e.name)}</b>! <b>J</b> jobs \xB7 <b>M</b> map \xB7 <b>Esc</b> menu`,4):(T.paused=!0,xt("intro").classList.remove("hidden"))},xt("introGo").onclick=()=>{xt("intro").classList.add("hidden"),T.paused=!1;try{localStorage.setItem("bd_intro","1")}catch{}h.toast(`Salam, <b>${Rn(e.name)}</b>! Press <b>J</b> to start working`,4)};function rt(){if(T.mode!=="drive")return;let E=Math.hypot(m.x-d.dropoff.x,m.z-d.dropoff.y),B=Math.hypot(m.x-d.spotter.x,m.z-d.spotter.y);if(E<14){if(m.speed>3){h.toast("Stop the car first",1.2);return}h.renderBoard(d.board,xt("fids")),xt("airportMenu").classList.remove("hidden"),u.pa()}else B<14&&_t()}xt("apFlight").onclick=()=>{if(f.money<500){h.toast("Not enough coins for a ticket (500)",1.6);return}f.money-=500,u.cash(),xt("airportMenu").classList.add("hidden"),ot()},xt("apSpot").onclick=()=>{xt("airportMenu").classList.add("hidden"),_t()},xt("apTaxi").onclick=()=>{if(xt("airportMenu").classList.add("hidden"),!w.start("taxi",m,s,k))return;let E=w.active;E.x=d.dropoff.x+d.n.x*6,E.z=d.dropoff.y+d.n.y*6,E.ped&&(E.ped.x=E.ped.tx=E.x,E.ped.z=E.ped.tz=E.z),E.dest=Xe.filter(B=>!B.airport)[Math.floor(Math.random()*(Xe.length-1))],f.setRoute(E.x,E.z,"Passenger"),h.toast(`\u{1F695} <b>${E.passenger}</b> just landed and needs a ride to ${E.dest.name}`,3.5)},xt("apClose").onclick=()=>xt("airportMenu").classList.add("hidden");let ht=E=>xt("fade").classList.toggle("on",E);async function ot(){ht(!0),await Ii(700),T.flight=d.createScenicFlight(),T.mode="flight",T.flightCam=0,d.scenicCamera(T.flight,0,Gt,qt),o.position.copy(Gt),At.copy(qt),c.radius=Math.max(e.view,2400),o.far=12e3,o.updateProjectionMatrix(),xt("boarding").classList.add("show"),setTimeout(()=>xt("boarding").classList.remove("show"),4e3),u.pa(),ht(!1)}async function Ut(E){if(!T.flight||T.ending)return;T.ending=!0;let B=T.flight;ht(!0),await Ii(700),d.endScenic(B),T.flight=null,T.ending=!1,T.mode="drive",c.radius=e.view,o.far=Math.max(4200,(e.far||0)+800),o.updateProjectionMatrix(),h.setFlightInfo(null),C.snap(m),ht(!1),h.toast(E?"Back at Manas airport":"Welcome back to Bishkek!",2.5)}function _t(){T.mode="spot";let E=d.planes.find(B=>B.state==="approach"||B.state==="flare");E||(E=d._newPlane(),d._startApproach(E,.45)),T.spot={pl:E,cam:new L(d.spotter.x,2.2,d.spotter.y)},At.set(E.x,E.y,E.z),h.toast("Plane spotting \xB7 Esc to exit",2.5)}function Pt(){T.mode="drive",T.spot=null}if("ontouchstart"in window){xt("touch").classList.remove("hidden");let E=(B,tt,ct)=>{let et=xt(B);et.addEventListener("touchstart",Ft=>{Ft.preventDefault(),u.start(),tt()}),et.addEventListener("touchend",Ft=>{Ft.preventDefault(),ct()})};E("tLeft",()=>X.steer=-1,()=>X.steer=0),E("tRight",()=>X.steer=1,()=>X.steer=0),E("tGas",()=>X.gas=1,()=>X.gas=0),E("tBrake",()=>X.brake=1,()=>X.brake=0),E("tHand",()=>X.hand=!0,()=>X.hand=!1),E("tCam",()=>q("KeyC"),()=>{}),E("tAct",()=>q("KeyE"),()=>{}),E("tMenu",()=>q("Escape"),()=>{})}window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),n.setSize(window.innerWidth,window.innerHeight),U&&U.setSize(window.innerWidth,window.innerHeight)});let ie=new Gs,mt={x:0,z:0,h:0,speed:0,spec:m.spec,vx:0,vz:0,radius:1},St={},Gt=new L,qt=new L,At=new L,ee=document.createElement("canvas");ee.width=320,ee.height=180;let Zt=E=>T.photoCbs.push(E);if(xt("loading").classList.add("hidden"),xt("menu").classList.remove("hidden"),!localStorage.getItem("bd_seen"))try{localStorage.setItem("bd_seen","1")}catch{}function ve(E,B){return d.rel(new j(E,B)).x>-2500&&B<-15500?"Manas International Airport":B<-3600?"Bishkek \u2013 Manas road":B<300?E<500?"Pervomaisky district":"Sverdlovsky district":E<0?"Leninsky district":"Oktyabrsky district"}let H=0;function Mt(){requestAnimationFrame(Mt);let E=Math.min(.05,ie.getDelta()),B=!T.paused&&T.mode!=="menu",tt=B?E:0;T.time+=tt,An.uTime.value+=E,T.hour=(T.hour+tt/60*e.timeSpeed)%24,a.setHour(T.hour);let ct=T.hour;v.rush=ct>7.5&&ct<10||ct>17&&ct<20?1.65:ct>23||ct<6?.45:1;let et=T.keys,Ft=(et.KeyD||et.ArrowRight?1:0)-(et.KeyA||et.ArrowLeft?1:0)+X.steer,me=(et.KeyW||et.ArrowUp?1:0)+X.gas,ne=(et.KeyS||et.ArrowDown?1:0)+X.brake,He=!1,Ie=navigator.getGamepads?[...navigator.getGamepads()].find(re=>re):null;Ie&&(Math.abs(Ie.axes[0])>.08&&(Ft=Math.sign(Ie.axes[0])*Math.pow(Math.abs(Ie.axes[0]),1.5),He=!0),Ie.buttons[7]?.value>.02&&(me=Ie.buttons[7].value),Ie.buttons[6]?.value>.02&&(ne=Ie.buttons[6].value)),T.steer=He?Ft:T.steer+(ze.clamp(Ft,-1,1)-T.steer)*Math.min(1,E*(Ft===0?12:8)),T.thr+=(Math.min(1,me)-T.thr)*Math.min(1,E*(me?5:12));let oi={steer:T.steer,throttle:T.thr<.02?0:T.thr,brake:Math.min(1,ne),hand:!!(et.Space||X.hand||Ie?.buttons[0]?.pressed)};m.throttleOn=oi.throttle>0;let ai=a.night;if(m.night=ai>.45,B){if(T.mode==="drive"||T.mode==="spot"){let jt=t.nearestRoad(m.x,m.z,25),Gn=jt&&jt.dist<jt.e.w/2+3.5;m.surface=Gn||d.runwayIncursion(m.x,m.z)?1:.72,St.road=jt&&jt.dist<jt.e.w/2+4?jt:null;let Js=T.mode==="spot"?{steer:0,throttle:0,brake:1,hand:!0}:oi;m.update(E,Js,c,v,it)}let re=T.mode==="flight"?Object.assign(mt,{x:T.flight.plane.x,z:T.flight.plane.z,h:T.flight.plane.h,speed:0}):m;v.night=ai,v.update(E,re,e.peds>0?I:null),I.update(E,re,e.peds>0);for(let jt of v.honks){let Gn=Math.hypot(jt.x-m.x,jt.z-m.z);u.horn(Math.min(.3,6/(Gn+8)),.35+Math.random()*.4,.8+Math.random()*.5)}if(d.update(E,ai,m,T.flight?T.flight.plane:null),x.update(E,T.time,ai),T.mode==="drive"||T.mode==="cutscene"){let jt=y.update(E,m,()=>{T.mode="cutscene",document.body.classList.add("cinemode"),w.active&&w.stop(m,k,!0)});jt&&jt.cam&&(T.cutCam=jt),jt&&jt.done&&(T.mode="drive",document.body.classList.remove("cinemode"),T.cutCam=null,f.money-=jt.fine,f.fines.push({kind:"Arrest",amount:jt.fine,detail:"Caught by the patrol police",time:h.clockText()}),C.snap(m),f.save(m),h.toast(`Released after paying ${jt.fine} coins`,3))}if(R.update(E),H%60===0)for(let jt of[...R.emitters])jt.ai&&!v.cars.includes(jt.obj)&&R.removeEmitter(jt);if(T.mode==="drive"){let jt=St.road?t.roadName(St.road.e.name):null;St.street=jt?jt.en:null,f.trafficTime=v.time,f.checkRules(E,m,St,null,d,Zt),f.checkLandmarks(m);let Gn=w.update(E,m,s,k);if(Gn&&Gn.done&&(f.jobsDone=w.completed,f.save(m)),!w.active&&w.nextIn!==void 0&&(w.nextIn-=E,w.nextIn<=0)){let G=w.nextType;w.nextIn=void 0,w.start(G,m,s,k)}h.setStreet(jt?jt.en!==jt.local?`${jt.en}`:jt.local:St.runway?"Runway 07/25":"",jt&&jt.en!==jt.local?jt.local:ve(m.x,m.z)),h.setLimit(m.speed*3.6,St.wrongWay,St.runway);let Js=Math.hypot(m.x-d.dropoff.x,m.z-d.dropoff.y),wa=Math.hypot(m.x-d.spotter.x,m.z-d.spotter.y),P=Js<14?"<b>E</b> \xB7 Manas Airport":wa<14?"<b>E</b> \xB7 watch planes land":"";P!==T.hintTxt&&(T.hintTxt=P,xt("hint").innerHTML=P,xt("hint").classList.toggle("show",!!P))}else T.hintTxt&&(T.hintTxt="",xt("hint").classList.remove("show"));if(T.mode==="flight"){let jt=["pushback","taxi","taxiIn"].includes(T.flight.stage)?E*3:E;!T.ending&&d.updateScenic(T.flight,jt)&&Ut(!1)}f.updateRoute(T.mode==="flight"?mt:m,s),f.routeMat&&(f.routeMat.uniforms.uTime.value=T.time);let gn=w.status(m),Li=f.routeTarget?Math.hypot(m.x-f.routeTarget.x,m.z-f.routeTarget.z):0;h.setMission(gn?`${gn} \xB7 ${ba(Li)}`:f.routeTarget?`\u{1F4CD} ${f.routeTarget.label} \xB7 ${ba(Li)}`:""),T.lastSave+=E,T.lastSave>10&&(T.lastSave=0,f.save(m))}if(b.update(E,m,{money:f.money,job:w.active?Ki[w.active.type].icon:"",jobs:w.completed},ai),T.mode==="flight"&&T.flight){d.scenicCamera(T.flight,T.flightCam,Gt,qt),o.position.lerp(Gt,T.flightCam===0?1-Math.exp(-E*4):1),At.lerp(qt,T.flightCam===0?1-Math.exp(-E*6):1),o.lookAt(At),o.fov=T.flightCam===2?70:55,o.updateProjectionMatrix();let re=T.flight.plane,gn=(Math.atan2(Math.sin(re.h),-Math.cos(re.h))*180/Math.PI+360)%360;h.setFlightInfo({alt:re.y-re.a.groundY+627,spd:re.v,hdg:gn,stage:{pushback:"Pushback",taxi:"Taxi to runway 07",roll:"Take-off",air:"Over Bishkek",final:"Final approach",taxiIn:"Taxi to gate",done:"Arrived"}[T.flight.stage],cam:["Chase","Window","Cockpit","Spotter"][T.flightCam]})}else if(T.mode==="spot"&&T.spot){let re=T.spot.pl;o.position.copy(T.spot.cam),At.lerp(new L(re.x,re.y,re.z),1-Math.exp(-E*5)),o.lookAt(At),o.fov=ze.clamp(Math.hypot(re.x-T.spot.cam.x,re.z-T.spot.cam.z)/40,12,60),o.updateProjectionMatrix(),(!d.planes.includes(re)||re.state==="taxiIn"||re.state==="climb"||re.state==="goaround"&&re.y>300)&&Pt()}else if(T.mode!=="free"&&(K||(T.mouseYaw*=Math.exp(-E*2)),C.baseFov=e.fov,C.update(Math.max(E,.001),m,T.mouseYaw),T.mode==="menu")){let re=performance.now()*4e-5;o.position.set(m.x+Math.sin(re)*26,6+Math.sin(re*3)*2,m.z+Math.cos(re)*26),o.lookAt(m.x,2,m.z)}let Hn=T.mode==="flight"||T.mode==="free"?{x:o.position.x,z:o.position.z}:{x:m.x,z:m.z};c.update(Hn,E);let Qi=a.update(o,T.mode==="flight"&&T.flight?{x:T.flight.plane.x,z:T.flight.plane.z}:m),Vn=a.sun.shadow.camera,ts=T.mode==="flight"?160:110;Vn.right!==ts&&(Vn.left=Vn.bottom=-ts,Vn.right=Vn.top=ts,Vn.updateProjectionMatrix()),c.setNight(Qi.night),U&&U.setNight(Qi.night),T.mode!=="flight"&&(s.fog.near=450,s.fog.far=Math.max(c.radius+700,(e.far||0)*1.15));let es=d.noiseAt(o.position.x,o.position.z,o.position.y);if(u.update(E,m,{throttle:oi.throttle,inFlight:T.mode==="flight",cityLevel:Math.min(1,v.cars.length/200)*(Math.abs(m.z)<6e3?1:.2),jet:T.mode==="flight"?.35:es}),U?U.render(E):(n.setRenderTarget(null),n.clear(),a.render(n),n.clearDepth(),n.render(s,o)),T.photoCbs.length){let re=ee.getContext("2d");re.drawImage(n.domElement,0,0,320,180),re.fillStyle="rgba(0,0,0,0.55)",re.fillRect(0,158,320,22),re.fillStyle="#ffeb3b",re.font="bold 12px monospace",re.fillText(`${Math.round(m.speed*3.6)} km/h  LIMIT 150  ${h.clockText()}  01KG`,8,173);let gn=ee.toDataURL("image/jpeg",.7);for(let Li of T.photoCbs)Li(gn);T.photoCbs.length=0}T.mode!=="menu"&&(H++,H%2===0&&h.drawSpeedo(m),e.minimap&&H%3===0&&h.drawMini(m,v,f,d,b),h.setMoney(f.money),h.setClock(T.hour,e.mp&&b.status==="online"?b.players.size:null),T.mapOpen&&h.drawBigMap(m,f,d,b),T.tabOnline&&H%20===0&&Xt(),xt("hudRoot").classList.toggle("flightmode",T.mode==="flight"||T.mode==="spot"))}Mt(),window.addEventListener("beforeunload",()=>{f.save(m),b.disconnect()})}function Rn(r){return String(r).replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t])}function ba(r){return r>1e3?(r/1e3).toFixed(1)+" km":Math.round(r/10)*10+" m"}Cv().catch(r=>{console.error(r);let t=document.getElementById("loadText");t&&(t.textContent="Error: "+r.message)});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
