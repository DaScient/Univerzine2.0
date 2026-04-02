(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const va="170",xi={ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Xl=0,Ha=1,ql=2,Jo=1,Yl=2,dn=3,On=0,Pt=1,mn=2,vn=0,Mi=1,ki=2,ka=3,Wa=4,Kl=5,Yn=100,jl=101,Zl=102,$l=103,Jl=104,Ql=200,ec=201,tc=202,nc=203,Cr=204,Pr=205,ic=206,sc=207,rc=208,ac=209,oc=210,lc=211,cc=212,uc=213,hc=214,Dr=0,Lr=1,Ur=2,Ei=3,Ir=4,Fr=5,Nr=6,Or=7,Qo=0,dc=1,fc=2,Nn=0,pc=1,mc=2,gc=3,_c=4,vc=5,xc=6,Mc=7,el=300,Ai=301,bi=302,Br=303,zr=304,Vs=306,$n=1e3,Jt=1001,Gr=1002,mt=1003,Sc=1004,es=1005,Vt=1006,Js=1007,Zn=1008,Sn=1009,tl=1010,nl=1011,Wi=1012,xa=1013,Jn=1014,Ht=1015,sn=1016,Ma=1017,Sa=1018,Ri=1020,il=35902,sl=1021,rl=1022,Ct=1023,al=1024,ol=1025,Si=1026,wi=1027,ll=1028,ya=1029,cl=1030,Ta=1031,Ea=1033,Rs=33776,ws=33777,Cs=33778,Ps=33779,Vr=35840,Hr=35841,kr=35842,Wr=35843,Xr=36196,qr=37492,Yr=37496,Kr=37808,jr=37809,Zr=37810,$r=37811,Jr=37812,Qr=37813,ea=37814,ta=37815,na=37816,ia=37817,sa=37818,ra=37819,aa=37820,oa=37821,Ds=36492,la=36494,ca=36495,ul=36283,ua=36284,ha=36285,da=36286,yc=3200,Tc=3201,Ec=0,Ac=1,Un="",Nt="srgb",Di="srgb-linear",Hs="linear",je="srgb",ii=7680,Xa=519,bc=512,Rc=513,wc=514,hl=515,Cc=516,Pc=517,Dc=518,Lc=519,qa=35044,Ya="300 es",gn=2e3,Fs=2001;class ti{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ls=Math.PI/180,fa=180/Math.PI;function qi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function Uc(i,e){return(i%e+e)%e}function Qs(i,e,t){return(1-t)*i+t*e}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ic={DEG2RAD:Ls};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class De{constructor(e,t,n,s,r,a,o,l,c){De.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],f=n[7],h=n[2],m=n[5],_=n[8],x=s[0],p=s[3],u=s[6],A=s[1],E=s[4],y=s[7],B=s[2],C=s[5],b=s[8];return r[0]=a*x+o*A+l*B,r[3]=a*p+o*E+l*C,r[6]=a*u+o*y+l*b,r[1]=c*x+d*A+f*B,r[4]=c*p+d*E+f*C,r[7]=c*u+d*y+f*b,r[2]=h*x+m*A+_*B,r[5]=h*p+m*E+_*C,r[8]=h*u+m*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=d*a-o*c,h=o*l-d*r,m=c*r-a*l,_=t*f+n*h+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=f*x,e[1]=(s*c-d*n)*x,e[2]=(o*n-s*a)*x,e[3]=h*x,e[4]=(d*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(er.makeScale(e,t)),this}rotate(e){return this.premultiply(er.makeRotation(-e)),this}translate(e,t){return this.premultiply(er.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const er=new De;function dl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Fc(){const i=Ns("canvas");return i.style.display="block",i}const Ka={};function Vi(i){i in Ka||(Ka[i]=!0,console.warn(i))}function Nc(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Oc(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bc(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const He={enabled:!0,workingColorSpace:Di,spaces:{},convert:function(i,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===je&&(i.r=xn(i.r),i.g=xn(i.g),i.b=xn(i.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(i.applyMatrix3(this.spaces[e].toXYZ),i.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===je&&(i.r=yi(i.r),i.g=yi(i.g),i.b=yi(i.b))),i},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?Hs:this.spaces[i].transfer},getLuminanceCoefficients:function(i,e=this.workingColorSpace){return i.fromArray(this.spaces[e].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,e,t){return i.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function xn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ja=[.64,.33,.3,.6,.15,.06],Za=[.2126,.7152,.0722],$a=[.3127,.329],Ja=new De().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qa=new De().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);He.define({[Di]:{primaries:ja,whitePoint:$a,transfer:Hs,toXYZ:Ja,fromXYZ:Qa,luminanceCoefficients:Za,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:ja,whitePoint:$a,transfer:je,toXYZ:Ja,fromXYZ:Qa,luminanceCoefficients:Za,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}});let si;class zc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{si===void 0&&(si=Ns("canvas")),si.width=e.width,si.height=e.height;const n=si.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=si}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(xn(t[n]/255)*255):t[n]=xn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Gc=0;class fl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gc++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(tr(s[a].image)):r.push(tr(s[a]))}else r=tr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function tr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vc=0;class Et extends ti{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Jt,s=Jt,r=Vt,a=Zn,o=Ct,l=Sn,c=Et.DEFAULT_ANISOTROPY,d=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vc++}),this.uuid=qi(),this.name="",this.source=new fl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new De,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==el)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case $n:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case $n:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=el;Et.DEFAULT_ANISOTROPY=1;class at{constructor(e=0,t=0,n=0,s=1){at.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],d=l[4],f=l[8],h=l[1],m=l[5],_=l[9],x=l[2],p=l[6],u=l[10];if(Math.abs(d-h)<.01&&Math.abs(f-x)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+h)<.1&&Math.abs(f+x)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(m+1)/2,B=(u+1)/2,C=(d+h)/4,b=(f+x)/4,I=(_+p)/4;return E>y&&E>B?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=C/n,r=b/n):y>B?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=C/s,r=I/s):B<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(B),n=b/r,s=I/r),this.set(n,s,r,t),this}let A=Math.sqrt((p-_)*(p-_)+(f-x)*(f-x)+(h-d)*(h-d));return Math.abs(A)<.001&&(A=1),this.x=(p-_)/A,this.y=(f-x)/A,this.z=(h-d)/A,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hc extends ti{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new fl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kt extends Hc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pl extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kc extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=mt,this.minFilter=mt,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],f=n[s+3];const h=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(f!==x||l!==h||c!==m||d!==_){let p=1-o;const u=l*h+c*m+d*_+f*x,A=u>=0?1:-1,E=1-u*u;if(E>Number.EPSILON){const B=Math.sqrt(E),C=Math.atan2(B,u*A);p=Math.sin(p*C)/B,o=Math.sin(o*C)/B}const y=o*A;if(l=l*p+h*y,c=c*p+m*y,d=d*p+_*y,f=f*p+x*y,p===1-o){const B=1/Math.sqrt(l*l+c*c+d*d+f*f);l*=B,c*=B,d*=B,f*=B}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],f=r[a],h=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+d*f+l*m-c*h,e[t+1]=l*_+d*h+c*f-o*m,e[t+2]=c*_+d*m+o*h-l*f,e[t+3]=d*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),f=o(r/2),h=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"YXZ":this._x=h*d*f+c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"ZXY":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f-h*m*_;break;case"ZYX":this._x=h*d*f-c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f+h*m*_;break;case"YZX":this._x=h*d*f+c*m*_,this._y=c*m*f+h*d*_,this._z=c*d*_-h*m*f,this._w=c*d*f-h*m*_;break;case"XZY":this._x=h*d*f-c*m*_,this._y=c*m*f-h*d*_,this._z=c*d*_+h*m*f,this._w=c*d*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],f=t[10],h=n+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(d-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(d-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),f=Math.sin((1-t)*d)/c,h=Math.sin(t*d)/c;return this._w=a*f+this._w*h,this._x=n*f+this._x*h,this._y=s*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,n=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*d,this.y=n+l*d+o*c-r*f,this.z=s+l*f+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return nr.copy(this).projectOnVector(e),this.sub(nr)}reflect(e){return this.sub(nr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const nr=new U,eo=new Qn;class Yi{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Yt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Yt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Yt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Yt):Yt.fromBufferAttribute(r,a),Yt.applyMatrix4(e.matrixWorld),this.expandByPoint(Yt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ts.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(e.matrixWorld),this.union(ts)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Yt),Yt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),ns.subVectors(this.max,Ni),ri.subVectors(e.a,Ni),ai.subVectors(e.b,Ni),oi.subVectors(e.c,Ni),Rn.subVectors(ai,ri),wn.subVectors(oi,ai),Gn.subVectors(ri,oi);let t=[0,-Rn.z,Rn.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,Rn.z,0,-Rn.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-Rn.y,Rn.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!ir(t,ri,ai,oi,ns)||(t=[1,0,0,0,1,0,0,0,1],!ir(t,ri,ai,oi,ns))?!1:(is.crossVectors(Rn,wn),t=[is.x,is.y,is.z],ir(t,ri,ai,oi,ns))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Yt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Yt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(on),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const on=[new U,new U,new U,new U,new U,new U,new U,new U],Yt=new U,ts=new Yi,ri=new U,ai=new U,oi=new U,Rn=new U,wn=new U,Gn=new U,Ni=new U,ns=new U,is=new U,Vn=new U;function ir(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Vn.fromArray(i,r);const o=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),l=e.dot(Vn),c=t.dot(Vn),d=n.dot(Vn);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const Wc=new Yi,Oi=new U,sr=new U;class ks{constructor(e=new U,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Wc.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oi.subVectors(e,this.center);const t=Oi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oi.copy(e.center).add(sr)),this.expandByPoint(Oi.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ln=new U,rr=new U,ss=new U,Cn=new U,ar=new U,rs=new U,or=new U;class Ws{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ln.copy(this.origin).addScaledVector(this.direction,t),ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){rr.copy(e).add(t).multiplyScalar(.5),ss.copy(t).sub(e).normalize(),Cn.copy(this.origin).sub(rr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ss),o=Cn.dot(this.direction),l=-Cn.dot(ss),c=Cn.lengthSq(),d=Math.abs(1-a*a);let f,h,m,_;if(d>0)if(f=a*l-o,h=a*o-l,_=r*d,f>=0)if(h>=-_)if(h<=_){const x=1/d;f*=x,h*=x,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*r+o)),h=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-r,-l),r),m=h*(h+2*l)+c):(f=Math.max(0,-(a*r+o)),h=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+h*(h+2*l)+c);else h=a>0?-r:r,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(rr).addScaledVector(ss,h),m}intersectSphere(e,t){ln.subVectors(e.center,this.origin);const n=ln.dot(this.direction),s=ln.dot(ln)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,s=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,s=(e.min.x-h.x)*c),d>=0?(r=(e.min.y-h.y)*d,a=(e.max.y-h.y)*d):(r=(e.max.y-h.y)*d,a=(e.min.y-h.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,ln)!==null}intersectTriangle(e,t,n,s,r){ar.subVectors(t,e),rs.subVectors(n,e),or.crossVectors(ar,rs);let a=this.direction.dot(or),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Cn.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(Cn,rs));if(l<0)return null;const c=o*this.direction.dot(ar.cross(Cn));if(c<0||l+c>a)return null;const d=-o*Cn.dot(or);return d<0?null:this.at(d/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,s,r,a,o,l,c,d,f,h,m,_,x,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,f,h,m,_,x,p)}set(e,t,n,s,r,a,o,l,c,d,f,h,m,_,x,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=f,u[14]=h,u[3]=m,u[7]=_,u[11]=x,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/li.setFromMatrixColumn(e,0).length(),r=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const h=a*d,m=a*f,_=o*d,x=o*f;t[0]=l*d,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-x*c,t[9]=-o*l,t[2]=x-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*d,m=l*f,_=c*d,x=c*f;t[0]=h+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*d,t[9]=-o,t[2]=m*o-_,t[6]=x+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*d,m=l*f,_=c*d,x=c*f;t[0]=h-x*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*d,t[9]=x-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*d,m=a*f,_=o*d,x=o*f;t[0]=l*d,t[4]=_*c-m,t[8]=h*c+x,t[1]=l*f,t[5]=x*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*d,t[4]=x-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=m*f+_,t[10]=h-x*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*d,t[4]=-f,t[8]=c*d,t[1]=h*f+x,t[5]=a*d,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*d,t[10]=x*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xc,e,qc)}lookAt(e,t,n){const s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Pn.crossVectors(n,Ut),Pn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Pn.crossVectors(n,Ut)),Pn.normalize(),as.crossVectors(Ut,Pn),s[0]=Pn.x,s[4]=as.x,s[8]=Ut.x,s[1]=Pn.y,s[5]=as.y,s[9]=Ut.y,s[2]=Pn.z,s[6]=as.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],f=n[5],h=n[9],m=n[13],_=n[2],x=n[6],p=n[10],u=n[14],A=n[3],E=n[7],y=n[11],B=n[15],C=s[0],b=s[4],I=s[8],S=s[12],M=s[1],R=s[5],H=s[9],z=s[13],j=s[2],K=s[6],k=s[10],Z=s[14],G=s[3],ne=s[7],ce=s[11],_e=s[15];return r[0]=a*C+o*M+l*j+c*G,r[4]=a*b+o*R+l*K+c*ne,r[8]=a*I+o*H+l*k+c*ce,r[12]=a*S+o*z+l*Z+c*_e,r[1]=d*C+f*M+h*j+m*G,r[5]=d*b+f*R+h*K+m*ne,r[9]=d*I+f*H+h*k+m*ce,r[13]=d*S+f*z+h*Z+m*_e,r[2]=_*C+x*M+p*j+u*G,r[6]=_*b+x*R+p*K+u*ne,r[10]=_*I+x*H+p*k+u*ce,r[14]=_*S+x*z+p*Z+u*_e,r[3]=A*C+E*M+y*j+B*G,r[7]=A*b+E*R+y*K+B*ne,r[11]=A*I+E*H+y*k+B*ce,r[15]=A*S+E*z+y*Z+B*_e,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],f=e[6],h=e[10],m=e[14],_=e[3],x=e[7],p=e[11],u=e[15];return _*(+r*l*f-s*c*f-r*o*h+n*c*h+s*o*m-n*l*m)+x*(+t*l*m-t*c*h+r*a*h-s*a*m+s*c*d-r*l*d)+p*(+t*c*f-t*o*m-r*a*f+n*a*m+r*o*d-n*c*d)+u*(-s*o*d-t*l*f+t*o*h+s*a*f-n*a*h+n*l*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],f=e[9],h=e[10],m=e[11],_=e[12],x=e[13],p=e[14],u=e[15],A=f*p*c-x*h*c+x*l*m-o*p*m-f*l*u+o*h*u,E=_*h*c-d*p*c-_*l*m+a*p*m+d*l*u-a*h*u,y=d*x*c-_*f*c+_*o*m-a*x*m-d*o*u+a*f*u,B=_*f*l-d*x*l-_*o*h+a*x*h+d*o*p-a*f*p,C=t*A+n*E+s*y+r*B;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/C;return e[0]=A*b,e[1]=(x*h*r-f*p*r-x*s*m+n*p*m+f*s*u-n*h*u)*b,e[2]=(o*p*r-x*l*r+x*s*c-n*p*c-o*s*u+n*l*u)*b,e[3]=(f*l*r-o*h*r-f*s*c+n*h*c+o*s*m-n*l*m)*b,e[4]=E*b,e[5]=(d*p*r-_*h*r+_*s*m-t*p*m-d*s*u+t*h*u)*b,e[6]=(_*l*r-a*p*r-_*s*c+t*p*c+a*s*u-t*l*u)*b,e[7]=(a*h*r-d*l*r+d*s*c-t*h*c-a*s*m+t*l*m)*b,e[8]=y*b,e[9]=(_*f*r-d*x*r-_*n*m+t*x*m+d*n*u-t*f*u)*b,e[10]=(a*x*r-_*o*r+_*n*c-t*x*c-a*n*u+t*o*u)*b,e[11]=(d*o*r-a*f*r-d*n*c+t*f*c+a*n*m-t*o*m)*b,e[12]=B*b,e[13]=(d*x*s-_*f*s+_*n*h-t*x*h-d*n*p+t*f*p)*b,e[14]=(_*o*s-a*x*s-_*n*l+t*x*l+a*n*p-t*o*p)*b,e[15]=(a*f*s-d*o*s+d*n*l-t*f*l-a*n*h+t*o*h)*b,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,f=o+o,h=r*c,m=r*d,_=r*f,x=a*d,p=a*f,u=o*f,A=l*c,E=l*d,y=l*f,B=n.x,C=n.y,b=n.z;return s[0]=(1-(x+u))*B,s[1]=(m+y)*B,s[2]=(_-E)*B,s[3]=0,s[4]=(m-y)*C,s[5]=(1-(h+u))*C,s[6]=(p+A)*C,s[7]=0,s[8]=(_+E)*b,s[9]=(p-A)*b,s[10]=(1-(h+x))*b,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=li.set(s[0],s[1],s[2]).length();const a=li.set(s[4],s[5],s[6]).length(),o=li.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Kt.copy(this);const c=1/r,d=1/a,f=1/o;return Kt.elements[0]*=c,Kt.elements[1]*=c,Kt.elements[2]*=c,Kt.elements[4]*=d,Kt.elements[5]*=d,Kt.elements[6]*=d,Kt.elements[8]*=f,Kt.elements[9]*=f,Kt.elements[10]*=f,t.setFromRotationMatrix(Kt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=gn){const l=this.elements,c=2*r/(t-e),d=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s);let m,_;if(o===gn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Fs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn){const l=this.elements,c=1/(t-e),d=1/(n-s),f=1/(a-r),h=(t+e)*c,m=(n+s)*d;let _,x;if(o===gn)_=(a+r)*f,x=-2*f;else if(o===Fs)_=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new U,Kt=new st,Xc=new U(0,0,0),qc=new U(1,1,1),Pn=new U,as=new U,Ut=new U,to=new st,no=new Qn;class yn{constructor(e=0,t=0,n=0,s=yn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],f=s[2],h=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return to.makeRotationFromQuaternion(e),this.setFromRotationMatrix(to,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return no.setFromEuler(this),this.setFromQuaternion(no,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yn.DEFAULT_ORDER="XYZ";class Aa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Yc=0;const io=new U,ci=new Qn,cn=new st,os=new U,Bi=new U,Kc=new U,jc=new Qn,so=new U(1,0,0),ro=new U(0,1,0),ao=new U(0,0,1),oo={type:"added"},Zc={type:"removed"},ui={type:"childadded",child:null},lr={type:"childremoved",child:null};class Dt extends ti{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new U,t=new yn,n=new Qn,s=new U(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new st},normalMatrix:{value:new De}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Aa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(so,e)}rotateY(e){return this.rotateOnAxis(ro,e)}rotateZ(e){return this.rotateOnAxis(ao,e)}translateOnAxis(e,t){return io.copy(e).applyQuaternion(this.quaternion),this.position.add(io.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(so,e)}translateY(e){return this.translateOnAxis(ro,e)}translateZ(e){return this.translateOnAxis(ao,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?os.copy(e):os.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cn.lookAt(Bi,os,this.up):cn.lookAt(os,Bi,this.up),this.quaternion.setFromRotationMatrix(cn),s&&(cn.extractRotation(s.matrixWorld),ci.setFromRotationMatrix(cn),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(oo),ui.child=e,this.dispatchEvent(ui),ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zc),lr.child=e,this.dispatchEvent(lr),lr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(oo),ui.child=e,this.dispatchEvent(ui),ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,e,Kc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bi,jc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Dt.DEFAULT_UP=new U(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const jt=new U,un=new U,cr=new U,hn=new U,hi=new U,di=new U,lo=new U,ur=new U,hr=new U,dr=new U,fr=new at,pr=new at,mr=new at;class Zt{constructor(e=new U,t=new U,n=new U){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),jt.subVectors(e,t),s.cross(jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){jt.subVectors(s,t),un.subVectors(n,t),cr.subVectors(e,t);const a=jt.dot(jt),o=jt.dot(un),l=jt.dot(cr),c=un.dot(un),d=un.dot(cr),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;const h=1/f,m=(c*l-o*d)*h,_=(a*d-o*l)*h;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hn)===null?!1:hn.x>=0&&hn.y>=0&&hn.x+hn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,hn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,hn.x),l.addScaledVector(a,hn.y),l.addScaledVector(o,hn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return fr.setScalar(0),pr.setScalar(0),mr.setScalar(0),fr.fromBufferAttribute(e,t),pr.fromBufferAttribute(e,n),mr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fr,r.x),a.addScaledVector(pr,r.y),a.addScaledVector(mr,r.z),a}static isFrontFacing(e,t,n,s){return jt.subVectors(n,t),un.subVectors(e,t),jt.cross(un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return jt.subVectors(this.c,this.b),un.subVectors(this.a,this.b),jt.cross(un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;hi.subVectors(s,n),di.subVectors(r,n),ur.subVectors(e,n);const l=hi.dot(ur),c=di.dot(ur);if(l<=0&&c<=0)return t.copy(n);hr.subVectors(e,s);const d=hi.dot(hr),f=di.dot(hr);if(d>=0&&f<=d)return t.copy(s);const h=l*f-d*c;if(h<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(hi,a);dr.subVectors(e,r);const m=hi.dot(dr),_=di.dot(dr);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(di,o);const p=d*_-m*f;if(p<=0&&f-d>=0&&m-_>=0)return lo.subVectors(r,s),o=(f-d)/(f-d+(m-_)),t.copy(s).addScaledVector(lo,o);const u=1/(p+x+h);return a=x*u,o=h*u,t.copy(n).addScaledVector(hi,a).addScaledVector(di,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},ls={h:0,s:0,l:0};function gr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ke{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=He.workingColorSpace){if(e=Uc(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gr(a,r,e+1/3),this.g=gr(a,r,e),this.b=gr(a,r,e-1/3)}return He.toWorkingColorSpace(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){const n=ml[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xn(e.r),this.g=xn(e.g),this.b=xn(e.b),this}copyLinearToSRGB(e){return this.r=yi(e.r),this.g=yi(e.g),this.b=yi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return He.fromWorkingColorSpace(xt.copy(this),e),Math.round(Tt(xt.r*255,0,255))*65536+Math.round(Tt(xt.g*255,0,255))*256+Math.round(Tt(xt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(xt.copy(this),t);const n=xt.r,s=xt.g,r=xt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=d<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=Nt){He.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,n=xt.g,s=xt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Dn),this.setHSL(Dn.h+e,Dn.s+t,Dn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Dn),e.getHSL(ls);const n=Qs(Dn.h,ls.h,t),s=Qs(Dn.s,ls.s,t),r=Qs(Dn.l,ls.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new ke;ke.NAMES=ml;let $c=0;class Ki extends ti{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$c++}),this.uuid=qi(),this.name="",this.blending=Mi,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cr,this.blendDst=Pr,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Xa,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Cr&&(n.blendSrc=this.blendSrc),this.blendDst!==Pr&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Xa&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ba extends Ki{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yn,this.combine=Qo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ot=new U,cs=new Se;class Mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=qa,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cs.fromBufferAttribute(this,t),cs.applyMatrix3(e),this.setXY(t,cs.x,cs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix3(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyMatrix4(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.applyNormalMatrix(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ot.fromBufferAttribute(this,t),ot.transformDirection(e),this.setXYZ(t,ot.x,ot.y,ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),s=Rt(s,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==qa&&(e.usage=this.usage),e}}class gl extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _l extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Mn extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Jc=0;const zt=new st,_r=new Dt,fi=new U,It=new Yi,zi=new Yi,pt=new U;class Wt extends ti{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jc++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dl(e)?_l:gl)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new De().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,n){return zt.makeTranslation(e,t,n),this.applyMatrix4(zt),this}scale(e,t,n){return zt.makeScale(e,t,n),this.applyMatrix4(zt),this}lookAt(e){return _r.lookAt(e),_r.updateMatrix(),this.applyMatrix4(_r.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Mn(n,3))}else{for(let n=0,s=t.count;n<s;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];It.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,It.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,It.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(It.min),this.boundingBox.expandByPoint(It.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ks);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const n=this.boundingSphere.center;if(It.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(It.min,zi.min),It.expandByPoint(pt),pt.addVectors(It.max,zi.max),It.expandByPoint(pt)):(It.expandByPoint(zi.min),It.expandByPoint(zi.max))}It.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)pt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),pt.add(fi)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new U,l[I]=new U;const c=new U,d=new U,f=new U,h=new Se,m=new Se,_=new Se,x=new U,p=new U;function u(I,S,M){c.fromBufferAttribute(n,I),d.fromBufferAttribute(n,S),f.fromBufferAttribute(n,M),h.fromBufferAttribute(r,I),m.fromBufferAttribute(r,S),_.fromBufferAttribute(r,M),d.sub(c),f.sub(c),m.sub(h),_.sub(h);const R=1/(m.x*_.y-_.x*m.y);isFinite(R)&&(x.copy(d).multiplyScalar(_.y).addScaledVector(f,-m.y).multiplyScalar(R),p.copy(f).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(R),o[I].add(x),o[S].add(x),o[M].add(x),l[I].add(p),l[S].add(p),l[M].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let I=0,S=A.length;I<S;++I){const M=A[I],R=M.start,H=M.count;for(let z=R,j=R+H;z<j;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const E=new U,y=new U,B=new U,C=new U;function b(I){B.fromBufferAttribute(s,I),C.copy(B);const S=o[I];E.copy(S),E.sub(B.multiplyScalar(B.dot(S))).normalize(),y.crossVectors(C,S);const R=y.dot(l[I])<0?-1:1;a.setXYZW(I,E.x,E.y,E.z,R)}for(let I=0,S=A.length;I<S;++I){const M=A[I],R=M.start,H=M.count;for(let z=R,j=R+H;z<j;z+=3)b(e.getX(z+0)),b(e.getX(z+1)),b(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,m=n.count;h<m;h++)n.setXYZ(h,0,0,0);const s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,d=new U,f=new U;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),x=e.getX(h+1),p=e.getX(h+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(d),l.add(d),c.add(d),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)s.fromBufferAttribute(t,h+0),r.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),d.subVectors(a,r),f.subVectors(s,r),d.cross(f),n.setXYZ(h+0,d.x,d.y,d.z),n.setXYZ(h+1,d.x,d.y,d.z),n.setXYZ(h+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,f=o.normalized,h=new c.constructor(l.length*d);let m=0,_=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*d;for(let u=0;u<d;u++)h[_++]=c[m++]}return new Mt(h,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Wt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let d=0,f=c.length;d<f;d++){const h=c[d],m=e(h,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];d.push(m.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const d=s[c];this.setAttribute(c,d.clone(t))}const r=e.morphAttributes;for(const c in r){const d=[],f=r[c];for(let h=0,m=f.length;h<m;h++)d.push(f[h].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const co=new st,Hn=new Ws,us=new ks,uo=new U,hs=new U,ds=new U,fs=new U,vr=new U,ps=new U,ho=new U,ms=new U;class nn extends Dt{constructor(e=new Wt,t=new ba){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){ps.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const d=o[l],f=r[l];d!==0&&(vr.fromBufferAttribute(f,e),a?ps.addScaledVector(vr,d):ps.addScaledVector(vr.sub(t),d))}t.add(ps)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),us.copy(n.boundingSphere),us.applyMatrix4(r),Hn.copy(e.ray).recast(e.near),!(us.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(us,uo)===null||Hn.origin.distanceToSquared(uo)>(e.far-e.near)**2))&&(co.copy(r).invert(),Hn.copy(e.ray).applyMatrix4(co),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,f=r.attributes.normal,h=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],A=Math.max(p.start,m.start),E=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,B=E;y<B;y+=3){const C=o.getX(y),b=o.getX(y+1),I=o.getX(y+2);s=gs(this,u,e,n,c,d,f,C,b,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const A=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);s=gs(this,a,e,n,c,d,f,A,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=h.length;_<x;_++){const p=h[_],u=a[p.materialIndex],A=Math.max(p.start,m.start),E=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=A,B=E;y<B;y+=3){const C=y,b=y+1,I=y+2;s=gs(this,u,e,n,c,d,f,C,b,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=_,u=x;p<u;p+=3){const A=p,E=p+1,y=p+2;s=gs(this,a,e,n,c,d,f,A,E,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}}function Qc(i,e,t,n,s,r,a,o){let l;if(e.side===Pt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===On,o),l===null)return null;ms.copy(o),ms.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ms);return c<t.near||c>t.far?null:{distance:c,point:ms.clone(),object:i}}function gs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,hs),i.getVertexPosition(l,ds),i.getVertexPosition(c,fs);const d=Qc(i,e,t,n,hs,ds,fs,ho);if(d){const f=new U;Zt.getBarycoord(ho,hs,ds,fs,f),s&&(d.uv=Zt.getInterpolatedAttribute(s,o,l,c,f,new Se)),r&&(d.uv1=Zt.getInterpolatedAttribute(r,o,l,c,f,new Se)),a&&(d.normal=Zt.getInterpolatedAttribute(a,o,l,c,f,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};Zt.getNormal(hs,ds,fs,h.normal),d.face=h,d.barycoord=f}return d}class ji extends Wt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],d=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Mn(c,3)),this.setAttribute("normal",new Mn(d,3)),this.setAttribute("uv",new Mn(f,2));function _(x,p,u,A,E,y,B,C,b,I,S){const M=y/b,R=B/I,H=y/2,z=B/2,j=C/2,K=b+1,k=I+1;let Z=0,G=0;const ne=new U;for(let ce=0;ce<k;ce++){const _e=ce*R-z;for(let Le=0;Le<K;Le++){const Ye=Le*M-H;ne[x]=Ye*A,ne[p]=_e*E,ne[u]=j,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[p]=0,ne[u]=C>0?1:-1,d.push(ne.x,ne.y,ne.z),f.push(Le/b),f.push(1-ce/I),Z+=1}}for(let ce=0;ce<I;ce++)for(let _e=0;_e<b;_e++){const Le=h+_e+K*ce,Ye=h+_e+K*(ce+1),W=h+(_e+1)+K*(ce+1),J=h+(_e+1)+K*ce;l.push(Le,Ye,J),l.push(Ye,W,J),G+=6}o.addGroup(m,G,S),m+=G,h+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ci(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Ci(i[t]);for(const s in n)e[s]=n[s]}return e}function eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function vl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const Os={clone:Ci,merge:yt};var tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gt extends Ki{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ci(e.uniforms),this.uniformsGroups=eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xl extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=gn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new U,fo=new Se,po=new Se;class Gt extends xl{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=fa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ls*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return fa*2*Math.atan(Math.tan(Ls*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,fo,po),t.subVectors(po,fo)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ls*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class iu extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Gt(pi,mi,e,t);s.layers=this.layers,this.add(s);const r=new Gt(pi,mi,e,t);r.layers=this.layers,this.add(r);const a=new Gt(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,d]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,d),e.setRenderTarget(f,h,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Ml extends Et{constructor(e,t,n,s,r,a,o,l,c,d){e=e!==void 0?e:[],t=t!==void 0?t:Ai,super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class su extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ml(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ji(5,5,5),r=new gt({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pt,blending:vn});r.uniforms.tEquirect.value=t;const a=new nn(s,r),o=t.minFilter;return t.minFilter===Zn&&(t.minFilter=Vt),new iu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const xr=new U,ru=new U,au=new De;class pn{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=xr.subVectors(n,t).cross(ru.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||au.getNormalMatrix(e),s=this.coplanarPoint(xr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const kn=new ks,_s=new U;class Sl{constructor(e=new pn,t=new pn,n=new pn,s=new pn,r=new pn,a=new pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],d=s[5],f=s[6],h=s[7],m=s[8],_=s[9],x=s[10],p=s[11],u=s[12],A=s[13],E=s[14],y=s[15];if(n[0].setComponents(l-r,h-c,p-m,y-u).normalize(),n[1].setComponents(l+r,h+c,p+m,y+u).normalize(),n[2].setComponents(l+a,h+d,p+_,y+A).normalize(),n[3].setComponents(l-a,h-d,p-_,y-A).normalize(),n[4].setComponents(l-o,h-f,p-x,y-E).normalize(),t===gn)n[5].setComponents(l+o,h+f,p+x,y+E).normalize();else if(t===Fs)n[5].setComponents(o,f,x,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),kn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),kn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(kn)}intersectsSprite(e){return kn.center.set(0,0,0),kn.radius=.7071067811865476,kn.applyMatrix4(e.matrixWorld),this.intersectsSphere(kn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(_s.x=s.normal.x>0?e.max.x:e.min.x,_s.y=s.normal.y>0?e.max.y:e.min.y,_s.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yl(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ou(i){const e=new WeakMap;function t(o,l){const c=o.array,d=o.usage,f=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,d),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const d=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,d);else{f.sort((m,_)=>m.start-_.start);let h=0;for(let m=1;m<f.length;m++){const _=f[h],x=f[m];x.start<=_.start+_.count+1?_.count=Math.max(_.count,x.start+x.count-_.start):(++h,f[h]=x)}f.length=h+1;for(let m=0,_=f.length;m<_;m++){const x=f[m];i.bufferSubData(c,x.start*d.BYTES_PER_ELEMENT,d,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Xs extends Wt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,f=e/o,h=t/l,m=[],_=[],x=[],p=[];for(let u=0;u<d;u++){const A=u*h-a;for(let E=0;E<c;E++){const y=E*f-r;_.push(y,-A,0),x.push(0,0,1),p.push(E/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let A=0;A<o;A++){const E=A+c*u,y=A+c*(u+1),B=A+1+c*(u+1),C=A+1+c*u;m.push(E,y,C),m.push(y,B,C)}this.setIndex(m),this.setAttribute("position",new Mn(_,3)),this.setAttribute("normal",new Mn(x,3)),this.setAttribute("uv",new Mn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var lu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cu=`#ifdef USE_ALPHAHASH
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
#endif`,uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,du=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pu=`#ifdef USE_AOMAP
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
#endif`,mu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,gu=`#ifdef USE_BATCHING
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
#endif`,_u=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,vu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Su=`#ifdef USE_IRIDESCENCE
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
#endif`,yu=`#ifdef USE_BUMPMAP
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
#endif`,Tu=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Au=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ru=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Pu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Du=`#define PI 3.141592653589793
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
} // validated`,Lu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Uu=`vec3 transformedNormal = objectNormal;
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
#endif`,Iu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ou=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",zu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gu=`#ifdef USE_ENVMAP
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
#endif`,Vu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wu=`#ifdef USE_ENVMAP
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
#endif`,Xu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,qu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Yu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ku=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ju=`#ifdef USE_GRADIENTMAP
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
}`,Zu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$u=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qu=`uniform bool receiveShadow;
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
#endif`,eh=`#ifdef USE_ENVMAP
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
#endif`,th=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ih=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,sh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rh=`PhysicalMaterial material;
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
#endif`,ah=`struct PhysicalMaterial {
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
}`,oh=`
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
#endif`,lh=`#if defined( RE_IndirectDiffuse )
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
#endif`,ch=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uh=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hh=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dh=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fh=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ph=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,mh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_h=`#if defined( USE_POINTS_UV )
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
#endif`,vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Mh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Sh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Th=`#ifdef USE_MORPHTARGETS
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
#endif`,Eh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ah=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ch=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ph=`#ifdef USE_NORMALMAP
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
#endif`,Dh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lh=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Uh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ih=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nh=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Oh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Vh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wh=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,qh=`float getShadowMask() {
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
}`,Yh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kh=`#ifdef USE_SKINNING
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
#endif`,jh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zh=`#ifdef USE_SKINNING
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
#endif`,$h=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qh=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ed=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,td=`#ifdef USE_TRANSMISSION
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
#endif`,nd=`#ifdef USE_TRANSMISSION
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
#endif`,id=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ad=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const od=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ld=`uniform sampler2D t2D;
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
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ud=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fd=`#include <common>
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
}`,pd=`#if DEPTH_PACKING == 3200
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
}`,md=`#define DISTANCE
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
}`,gd=`#define DISTANCE
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
}`,_d=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xd=`uniform float scale;
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
}`,Md=`uniform vec3 diffuse;
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
}`,Sd=`#include <common>
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
}`,yd=`uniform vec3 diffuse;
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
}`,Td=`#define LAMBERT
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
}`,Ed=`#define LAMBERT
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
}`,Ad=`#define MATCAP
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
}`,bd=`#define MATCAP
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
}`,Rd=`#define NORMAL
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
}`,wd=`#define NORMAL
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
}`,Cd=`#define PHONG
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
}`,Pd=`#define PHONG
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
}`,Dd=`#define STANDARD
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
}`,Ld=`#define STANDARD
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
}`,Ud=`#define TOON
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
}`,Id=`#define TOON
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
}`,Fd=`uniform float size;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,Od=`#include <common>
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
}`,Bd=`uniform vec3 color;
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
}`,zd=`uniform float rotation;
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
}`,Gd=`uniform vec3 diffuse;
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
}`,Ie={alphahash_fragment:lu,alphahash_pars_fragment:cu,alphamap_fragment:uu,alphamap_pars_fragment:hu,alphatest_fragment:du,alphatest_pars_fragment:fu,aomap_fragment:pu,aomap_pars_fragment:mu,batching_pars_vertex:gu,batching_vertex:_u,begin_vertex:vu,beginnormal_vertex:xu,bsdfs:Mu,iridescence_fragment:Su,bumpmap_pars_fragment:yu,clipping_planes_fragment:Tu,clipping_planes_pars_fragment:Eu,clipping_planes_pars_vertex:Au,clipping_planes_vertex:bu,color_fragment:Ru,color_pars_fragment:wu,color_pars_vertex:Cu,color_vertex:Pu,common:Du,cube_uv_reflection_fragment:Lu,defaultnormal_vertex:Uu,displacementmap_pars_vertex:Iu,displacementmap_vertex:Fu,emissivemap_fragment:Nu,emissivemap_pars_fragment:Ou,colorspace_fragment:Bu,colorspace_pars_fragment:zu,envmap_fragment:Gu,envmap_common_pars_fragment:Vu,envmap_pars_fragment:Hu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:eh,envmap_vertex:Wu,fog_vertex:Xu,fog_pars_vertex:qu,fog_fragment:Yu,fog_pars_fragment:Ku,gradientmap_pars_fragment:ju,lightmap_pars_fragment:Zu,lights_lambert_fragment:$u,lights_lambert_pars_fragment:Ju,lights_pars_begin:Qu,lights_toon_fragment:th,lights_toon_pars_fragment:nh,lights_phong_fragment:ih,lights_phong_pars_fragment:sh,lights_physical_fragment:rh,lights_physical_pars_fragment:ah,lights_fragment_begin:oh,lights_fragment_maps:lh,lights_fragment_end:ch,logdepthbuf_fragment:uh,logdepthbuf_pars_fragment:hh,logdepthbuf_pars_vertex:dh,logdepthbuf_vertex:fh,map_fragment:ph,map_pars_fragment:mh,map_particle_fragment:gh,map_particle_pars_fragment:_h,metalnessmap_fragment:vh,metalnessmap_pars_fragment:xh,morphinstance_vertex:Mh,morphcolor_vertex:Sh,morphnormal_vertex:yh,morphtarget_pars_vertex:Th,morphtarget_vertex:Eh,normal_fragment_begin:Ah,normal_fragment_maps:bh,normal_pars_fragment:Rh,normal_pars_vertex:wh,normal_vertex:Ch,normalmap_pars_fragment:Ph,clearcoat_normal_fragment_begin:Dh,clearcoat_normal_fragment_maps:Lh,clearcoat_pars_fragment:Uh,iridescence_pars_fragment:Ih,opaque_fragment:Fh,packing:Nh,premultiplied_alpha_fragment:Oh,project_vertex:Bh,dithering_fragment:zh,dithering_pars_fragment:Gh,roughnessmap_fragment:Vh,roughnessmap_pars_fragment:Hh,shadowmap_pars_fragment:kh,shadowmap_pars_vertex:Wh,shadowmap_vertex:Xh,shadowmask_pars_fragment:qh,skinbase_vertex:Yh,skinning_pars_vertex:Kh,skinning_vertex:jh,skinnormal_vertex:Zh,specularmap_fragment:$h,specularmap_pars_fragment:Jh,tonemapping_fragment:Qh,tonemapping_pars_fragment:ed,transmission_fragment:td,transmission_pars_fragment:nd,uv_pars_fragment:id,uv_pars_vertex:sd,uv_vertex:rd,worldpos_vertex:ad,background_vert:od,background_frag:ld,backgroundCube_vert:cd,backgroundCube_frag:ud,cube_vert:hd,cube_frag:dd,depth_vert:fd,depth_frag:pd,distanceRGBA_vert:md,distanceRGBA_frag:gd,equirect_vert:_d,equirect_frag:vd,linedashed_vert:xd,linedashed_frag:Md,meshbasic_vert:Sd,meshbasic_frag:yd,meshlambert_vert:Td,meshlambert_frag:Ed,meshmatcap_vert:Ad,meshmatcap_frag:bd,meshnormal_vert:Rd,meshnormal_frag:wd,meshphong_vert:Cd,meshphong_frag:Pd,meshphysical_vert:Dd,meshphysical_frag:Ld,meshtoon_vert:Ud,meshtoon_frag:Id,points_vert:Fd,points_frag:Nd,shadow_vert:Od,shadow_frag:Bd,sprite_vert:zd,sprite_frag:Gd},te={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new De}},envmap:{envMap:{value:null},envMapRotation:{value:new De},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new De}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new De}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new De},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new De},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new De},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new De}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new De}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new De}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0},uvTransform:{value:new De}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new De},alphaMap:{value:null},alphaMapTransform:{value:new De},alphaTest:{value:0}}},tn={basic:{uniforms:yt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:yt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:yt([te.common,te.specularmap,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.fog,te.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:yt([te.common,te.envmap,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.roughnessmap,te.metalnessmap,te.fog,te.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:yt([te.common,te.aomap,te.lightmap,te.emissivemap,te.bumpmap,te.normalmap,te.displacementmap,te.gradientmap,te.fog,te.lights,{emissive:{value:new ke(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:yt([te.common,te.bumpmap,te.normalmap,te.displacementmap,te.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:yt([te.points,te.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:yt([te.common,te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:yt([te.common,te.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:yt([te.common,te.bumpmap,te.normalmap,te.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:yt([te.sprite,te.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new De},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new De}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:yt([te.common,te.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:yt([te.lights,te.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};tn.physical={uniforms:yt([tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new De},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new De},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new De},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new De},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new De},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new De},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new De},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new De},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new De},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new De},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new De},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new De}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const vs={r:0,b:0,g:0},Wn=new yn,Vd=new st;function Hd(i,e,t,n,s,r,a){const o=new ke(0);let l=r===!0?0:1,c,d,f=null,h=0,m=null;function _(A){let E=A.isScene===!0?A.background:null;return E&&E.isTexture&&(E=(A.backgroundBlurriness>0?t:e).get(E)),E}function x(A){let E=!1;const y=_(A);y===null?u(o,l):y&&y.isColor&&(u(y,1),E=!0);const B=i.xr.getEnvironmentBlendMode();B==="additive"?n.buffers.color.setClear(0,0,0,1,a):B==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||E)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(A,E){const y=_(E);y&&(y.isCubeTexture||y.mapping===Vs)?(d===void 0&&(d=new nn(new ji(1,1,1),new gt({name:"BackgroundCubeMaterial",uniforms:Ci(tn.backgroundCube.uniforms),vertexShader:tn.backgroundCube.vertexShader,fragmentShader:tn.backgroundCube.fragmentShader,side:Pt,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(B,C,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(d)),Wn.copy(E.backgroundRotation),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),d.material.uniforms.envMap.value=y,d.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(Vd.makeRotationFromEuler(Wn)),d.material.toneMapped=He.getTransfer(y.colorSpace)!==je,(f!==y||h!==y.version||m!==i.toneMapping)&&(d.material.needsUpdate=!0,f=y,h=y.version,m=i.toneMapping),d.layers.enableAll(),A.unshift(d,d.geometry,d.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new nn(new Xs(2,2),new gt({name:"BackgroundMaterial",uniforms:Ci(tn.background.uniforms),vertexShader:tn.background.vertexShader,fragmentShader:tn.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=He.getTransfer(y.colorSpace)!==je,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,m=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function u(A,E){A.getRGB(vs,vl(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,E,a)}return{getClearColor:function(){return o},setClearColor:function(A,E=1){o.set(A),l=E,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,u(o,l)},render:x,addToRenderList:p}}function kd(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=h(null);let r=s,a=!1;function o(M,R,H,z,j){let K=!1;const k=f(z,H,R);r!==k&&(r=k,c(r.object)),K=m(M,z,H,j),K&&_(M,z,H,j),j!==null&&e.update(j,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,y(M,R,H,z),j!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function d(M){return i.deleteVertexArray(M)}function f(M,R,H){const z=H.wireframe===!0;let j=n[M.id];j===void 0&&(j={},n[M.id]=j);let K=j[R.id];K===void 0&&(K={},j[R.id]=K);let k=K[z];return k===void 0&&(k=h(l()),K[z]=k),k}function h(M){const R=[],H=[],z=[];for(let j=0;j<t;j++)R[j]=0,H[j]=0,z[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:H,attributeDivisors:z,object:M,attributes:{},index:null}}function m(M,R,H,z){const j=r.attributes,K=R.attributes;let k=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){const ce=j[G];let _e=K[G];if(_e===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),ce===void 0||ce.attribute!==_e||_e&&ce.data!==_e.data)return!0;k++}return r.attributesNum!==k||r.index!==z}function _(M,R,H,z){const j={},K=R.attributes;let k=0;const Z=H.getAttributes();for(const G in Z)if(Z[G].location>=0){let ce=K[G];ce===void 0&&(G==="instanceMatrix"&&M.instanceMatrix&&(ce=M.instanceMatrix),G==="instanceColor"&&M.instanceColor&&(ce=M.instanceColor));const _e={};_e.attribute=ce,ce&&ce.data&&(_e.data=ce.data),j[G]=_e,k++}r.attributes=j,r.attributesNum=k,r.index=z}function x(){const M=r.newAttributes;for(let R=0,H=M.length;R<H;R++)M[R]=0}function p(M){u(M,0)}function u(M,R){const H=r.newAttributes,z=r.enabledAttributes,j=r.attributeDivisors;H[M]=1,z[M]===0&&(i.enableVertexAttribArray(M),z[M]=1),j[M]!==R&&(i.vertexAttribDivisor(M,R),j[M]=R)}function A(){const M=r.newAttributes,R=r.enabledAttributes;for(let H=0,z=R.length;H<z;H++)R[H]!==M[H]&&(i.disableVertexAttribArray(H),R[H]=0)}function E(M,R,H,z,j,K,k){k===!0?i.vertexAttribIPointer(M,R,H,j,K):i.vertexAttribPointer(M,R,H,z,j,K)}function y(M,R,H,z){x();const j=z.attributes,K=H.getAttributes(),k=R.defaultAttributeValues;for(const Z in K){const G=K[Z];if(G.location>=0){let ne=j[Z];if(ne===void 0&&(Z==="instanceMatrix"&&M.instanceMatrix&&(ne=M.instanceMatrix),Z==="instanceColor"&&M.instanceColor&&(ne=M.instanceColor)),ne!==void 0){const ce=ne.normalized,_e=ne.itemSize,Le=e.get(ne);if(Le===void 0)continue;const Ye=Le.buffer,W=Le.type,J=Le.bytesPerElement,fe=W===i.INT||W===i.UNSIGNED_INT||ne.gpuType===xa;if(ne.isInterleavedBufferAttribute){const ie=ne.data,Ee=ie.stride,we=ne.offset;if(ie.isInstancedInterleavedBuffer){for(let Ne=0;Ne<G.locationSize;Ne++)u(G.location+Ne,ie.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ne=0;Ne<G.locationSize;Ne++)p(G.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ne=0;Ne<G.locationSize;Ne++)E(G.location+Ne,_e/G.locationSize,W,ce,Ee*J,(we+_e/G.locationSize*Ne)*J,fe)}else{if(ne.isInstancedBufferAttribute){for(let ie=0;ie<G.locationSize;ie++)u(G.location+ie,ne.meshPerAttribute);M.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ie=0;ie<G.locationSize;ie++)p(G.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let ie=0;ie<G.locationSize;ie++)E(G.location+ie,_e/G.locationSize,W,ce,_e*J,_e/G.locationSize*ie*J,fe)}}else if(k!==void 0){const ce=k[Z];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(G.location,ce);break;case 3:i.vertexAttrib3fv(G.location,ce);break;case 4:i.vertexAttrib4fv(G.location,ce);break;default:i.vertexAttrib1fv(G.location,ce)}}}}A()}function B(){I();for(const M in n){const R=n[M];for(const H in R){const z=R[H];for(const j in z)d(z[j].object),delete z[j];delete R[H]}delete n[M]}}function C(M){if(n[M.id]===void 0)return;const R=n[M.id];for(const H in R){const z=R[H];for(const j in z)d(z[j].object),delete z[j];delete R[H]}delete n[M.id]}function b(M){for(const R in n){const H=n[R];if(H[M.id]===void 0)continue;const z=H[M.id];for(const j in z)d(z[j].object),delete z[j];delete H[M.id]}}function I(){S(),a=!0,r!==s&&(r=s,c(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:S,dispose:B,releaseStatesOfGeometry:C,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:p,disableUnusedAttributes:A}}function Wd(i,e,t){let n;function s(c){n=c}function r(c,d){i.drawArrays(n,c,d),t.update(d,n,1)}function a(c,d,f){f!==0&&(i.drawArraysInstanced(n,c,d,f),t.update(d,n,f))}function o(c,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,d,0,f);let m=0;for(let _=0;_<f;_++)m+=d[_];t.update(m,n,1)}function l(c,d,f,h){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<c.length;_++)a(c[_],d[_],h[_]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,d,0,h,0,f);let _=0;for(let x=0;x<f;x++)_+=d[x]*h[x];t.update(_,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Xd(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(b){return!(b!==Ct&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(b){const I=b===sn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==Sn&&n.convert(b)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==Ht&&!I)}function l(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const f=t.logarithmicDepthBuffer===!0,h=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),A=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),B=_>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:m,maxVertexTextures:_,maxTextureSize:x,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:A,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:B,maxSamples:C}}function qd(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new pn,o=new De,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||n!==0||s;return s=h,n=f.length,m},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){t=d(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,u=i.get(f);if(!s||_===null||_.length===0||r&&!p)r?d(null):c();else{const A=r?0:n,E=A*4;let y=u.clippingState||null;l.value=y,y=d(_,h,E,m);for(let B=0;B!==E;++B)y[B]=t[B];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(f,h,m,_){const x=f!==null?f.length:0;let p=null;if(x!==0){if(p=l.value,_!==!0||p===null){const u=m+x*4,A=h.matrixWorldInverse;o.getNormalMatrix(A),(p===null||p.length<u)&&(p=new Float32Array(u));for(let E=0,y=m;E!==x;++E,y+=4)a.copy(f[E]).applyMatrix4(A,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Yd(i){let e=new WeakMap;function t(a,o){return o===Br?a.mapping=Ai:o===zr&&(a.mapping=bi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Br||o===zr)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new su(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Tl extends xl{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const vi=4,mo=[.125,.215,.35,.446,.526,.582],Kn=20,Mr=new Tl,go=new ke;let Sr=null,yr=0,Tr=0,Er=!1;const qn=(1+Math.sqrt(5))/2,gi=1/qn,_o=[new U(-qn,gi,0),new U(qn,gi,0),new U(-gi,0,qn),new U(gi,0,qn),new U(0,qn,-gi),new U(0,qn,gi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)];class vo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=So(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sr,yr,Tr),this._renderer.xr.enabled=Er,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ai||e.mapping===bi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sr=this._renderer.getRenderTarget(),yr=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),Er=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Vt,minFilter:Vt,generateMipmaps:!1,type:sn,format:Ct,colorSpace:Di,depthBuffer:!1},s=xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Kd(r)),this._blurMaterial=jd(r,e,t)}return s}_compileMaterial(e){const t=new nn(this._lodPlanes[0],e);this._renderer.compile(t,Mr)}_sceneToCubeUV(e,t,n,s){const o=new Gt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,h=d.toneMapping;d.getClearColor(go),d.toneMapping=Nn,d.autoClear=!1;const m=new ba({name:"PMREM.Background",side:Pt,depthWrite:!1,depthTest:!1}),_=new nn(new ji,m);let x=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,x=!0):(m.color.copy(go),x=!0);for(let u=0;u<6;u++){const A=u%3;A===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):A===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const E=this._cubeSize;xs(s,A*E,u>2?E:0,E,E),d.setRenderTarget(s),x&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=h,d.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ai||e.mapping===bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=So()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mo());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new nn(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Mr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=_o[(s-r-1)%_o.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new nn(this._lodPlanes[s],c),h=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Kn-1),x=r/_,p=isFinite(r)?1+Math.floor(d*x):Kn;p>Kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Kn}`);const u=[];let A=0;for(let b=0;b<Kn;++b){const I=b/x,S=Math.exp(-I*I/2);u.push(S),b===0?A+=S:b<p&&(A+=2*S)}for(let b=0;b<u.length;b++)u[b]=u[b]/A;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=u,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:E}=this;h.dTheta.value=_,h.mipInt.value=E-n;const y=this._sizeLods[s],B=3*y*(s>E-vi?s-E+vi:0),C=4*(this._cubeSize-y);xs(t,B,C,3*y,2*y),l.setRenderTarget(t),l.render(f,Mr)}}function Kd(i){const e=[],t=[],n=[];let s=i;const r=i-vi+1+mo.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-vi?l=mo[a-i+vi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),d=-c,f=1+c,h=[d,d,f,d,f,f,d,d,f,f,d,f],m=6,_=6,x=3,p=2,u=1,A=new Float32Array(x*_*m),E=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let C=0;C<m;C++){const b=C%3*2/3-1,I=C>2?0:-1,S=[b,I,0,b+2/3,I,0,b+2/3,I+1,0,b,I,0,b+2/3,I+1,0,b,I+1,0];A.set(S,x*_*C),E.set(h,p*_*C);const M=[C,C,C,C,C,C];y.set(M,u*_*C)}const B=new Wt;B.setAttribute("position",new Mt(A,x)),B.setAttribute("uv",new Mt(E,p)),B.setAttribute("faceIndex",new Mt(y,u)),e.push(B),s>vi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xo(i,e,t){const n=new kt(i,e,t);return n.texture.mapping=Vs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function jd(i,e,t){const n=new Float32Array(Kn),s=new U(0,1,0);return new gt({name:"SphericalGaussianBlur",defines:{n:Kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Mo(){return new gt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ra(),fragmentShader:`

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
		`,blending:vn,depthTest:!1,depthWrite:!1})}function So(){return new gt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ra(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:vn,depthTest:!1,depthWrite:!1})}function Ra(){return`

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
	`}function Zd(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Br||l===zr,d=l===Ai||l===bi;if(c||d){let f=e.get(o);const h=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new vo(i)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return c&&m&&m.height>0||d&&m&&s(m)?(t===null&&(t=new vo(i)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function $d(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Vi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jd(i,e,t,n){const s={},r=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);for(const _ in h.morphAttributes){const x=h.morphAttributes[_];for(let p=0,u=x.length;p<u;p++)e.remove(x[p])}h.removeEventListener("dispose",a),delete s[h.id];const m=r.get(h);m&&(e.remove(m),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return s[h.id]===!0||(h.addEventListener("dispose",a),s[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const x=m[_];for(let p=0,u=x.length;p<u;p++)e.update(x[p],i.ARRAY_BUFFER)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let E=0,y=A.length;E<y;E+=3){const B=A[E+0],C=A[E+1],b=A[E+2];h.push(B,C,C,b,b,B)}}else if(_!==void 0){const A=_.array;x=_.version;for(let E=0,y=A.length/3-1;E<y;E+=3){const B=E+0,C=E+1,b=E+2;h.push(B,C,C,b,b,B)}}else return;const p=new(dl(h)?_l:gl)(h,1);p.version=x;const u=r.get(f);u&&e.remove(u),r.set(f,p)}function d(f){const h=r.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:d}}function Qd(i,e,t){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function l(h,m){i.drawElements(n,m,r,h*a),t.update(m,n,1)}function c(h,m,_){_!==0&&(i.drawElementsInstanced(n,m,r,h*a,_),t.update(m,n,_))}function d(h,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,h,0,_);let p=0;for(let u=0;u<_;u++)p+=m[u];t.update(p,n,1)}function f(h,m,_,x){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<h.length;u++)c(h[u]/a,m[u],x[u]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,h,0,x,0,_);let u=0;for(let A=0;A<_;A++)u+=m[A]*x[A];t.update(u,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function ef(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tf(i,e,t){const n=new WeakMap,s=new at;function r(a,o,l){const c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=d!==void 0?d.length:0;let h=n.get(o);if(h===void 0||h.count!==f){let M=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;h!==void 0&&h.texture.dispose();const _=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],A=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),x===!0&&(y=2),p===!0&&(y=3);let B=o.attributes.position.count*y,C=1;B>e.maxTextureSize&&(C=Math.ceil(B/e.maxTextureSize),B=e.maxTextureSize);const b=new Float32Array(B*C*4*f),I=new pl(b,B,C,f);I.type=Ht,I.needsUpdate=!0;const S=y*4;for(let R=0;R<f;R++){const H=u[R],z=A[R],j=E[R],K=B*C*4*R;for(let k=0;k<H.count;k++){const Z=k*S;_===!0&&(s.fromBufferAttribute(H,k),b[K+Z+0]=s.x,b[K+Z+1]=s.y,b[K+Z+2]=s.z,b[K+Z+3]=0),x===!0&&(s.fromBufferAttribute(z,k),b[K+Z+4]=s.x,b[K+Z+5]=s.y,b[K+Z+6]=s.z,b[K+Z+7]=0),p===!0&&(s.fromBufferAttribute(j,k),b[K+Z+8]=s.x,b[K+Z+9]=s.y,b[K+Z+10]=s.z,b[K+Z+11]=j.itemSize===4?s.w:1)}}h={count:f,texture:I,size:new Se(B,C)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let _=0;for(let p=0;p<c.length;p++)_+=c[p];const x=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:r}}function nf(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,d=l.geometry,f=e.get(l,d);if(s.get(f)!==c&&(e.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;s.get(h)!==c&&(h.update(),s.set(h,c))}return f}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class El extends Et{constructor(e,t,n,s,r,a,o,l,c,d=Si){if(d!==Si&&d!==wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Si&&(n=Jn),n===void 0&&d===wi&&(n=Ri),super(null,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:mt,this.minFilter=l!==void 0?l:mt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Al=new Et,yo=new El(1,1),bl=new pl,Rl=new kc,wl=new Ml,To=[],Eo=[],Ao=new Float32Array(16),bo=new Float32Array(9),Ro=new Float32Array(4);function Li(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=To[s];if(r===void 0&&(r=new Float32Array(s),To[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=Eo[e];t===void 0&&(t=new Int32Array(e),Eo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function sf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function of(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ro.set(n),i.uniformMatrix2fv(this.addr,!1,Ro),ft(t,n)}}function cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;bo.set(n),i.uniformMatrix3fv(this.addr,!1,bo),ft(t,n)}}function uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ao.set(n),i.uniformMatrix4fv(this.addr,!1,Ao),ft(t,n)}}function hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function mf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function xf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(yo.compareFunction=hl,r=yo):r=Al,t.setTexture2D(e||r,s)}function Mf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rl,s)}function Sf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wl,s)}function yf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||bl,s)}function Tf(i){switch(i){case 5126:return sf;case 35664:return rf;case 35665:return af;case 35666:return of;case 35674:return lf;case 35675:return cf;case 35676:return uf;case 5124:case 35670:return hf;case 35667:case 35671:return df;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return mf;case 36294:return gf;case 36295:return _f;case 36296:return vf;case 35678:case 36198:case 36298:case 36306:case 35682:return xf;case 35679:case 36299:case 36307:return Mf;case 35680:case 36300:case 36308:case 36293:return Sf;case 36289:case 36303:case 36311:case 36292:return yf}}function Ef(i,e){i.uniform1fv(this.addr,e)}function Af(i,e){const t=Li(e,this.size,2);i.uniform2fv(this.addr,t)}function bf(i,e){const t=Li(e,this.size,3);i.uniform3fv(this.addr,t)}function Rf(i,e){const t=Li(e,this.size,4);i.uniform4fv(this.addr,t)}function wf(i,e){const t=Li(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Cf(i,e){const t=Li(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pf(i,e){const t=Li(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Df(i,e){i.uniform1iv(this.addr,e)}function Lf(i,e){i.uniform2iv(this.addr,e)}function Uf(i,e){i.uniform3iv(this.addr,e)}function If(i,e){i.uniform4iv(this.addr,e)}function Ff(i,e){i.uniform1uiv(this.addr,e)}function Nf(i,e){i.uniform2uiv(this.addr,e)}function Of(i,e){i.uniform3uiv(this.addr,e)}function Bf(i,e){i.uniform4uiv(this.addr,e)}function zf(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Al,r[a])}function Gf(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Rl,r[a])}function Vf(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wl,r[a])}function Hf(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||bl,r[a])}function kf(i){switch(i){case 5126:return Ef;case 35664:return Af;case 35665:return bf;case 35666:return Rf;case 35674:return wf;case 35675:return Cf;case 35676:return Pf;case 5124:case 35670:return Df;case 35667:case 35671:return Lf;case 35668:case 35672:return Uf;case 35669:case 35673:return If;case 5125:return Ff;case 36294:return Nf;case 36295:return Of;case 36296:return Bf;case 35678:case 36198:case 36298:case 36306:case 35682:return zf;case 35679:case 36299:case 36307:return Gf;case 35680:case 36300:case 36308:case 36293:return Vf;case 36289:case 36303:case 36311:case 36292:return Hf}}class Wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Tf(t.type)}}class Xf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=kf(t.type)}}class qf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function wo(i,e){i.seq.push(e),i.map[e.id]=e}function Yf(i,e,t){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const r=Ar.exec(n),a=Ar.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){wo(t,c===void 0?new Wf(o,i,e):new Xf(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new qf(o),wo(t,f)),t=f}}}class Us{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);Yf(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Co(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Kf=37297;let jf=0;function Zf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Po=new De;function $f(i){He._getMatrix(Po,He.workingColorSpace,i);const e=`mat3( ${Po.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(i)){case Hs:return[e,"LinearTransferOETF"];case je:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Do(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Zf(i.getShaderSource(e),a)}else return s}function Jf(i,e){const t=$f(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Qf(i,e){let t;switch(e){case pc:t="Linear";break;case mc:t="Reinhard";break;case gc:t="Cineon";break;case _c:t="ACESFilmic";break;case xc:t="AgX";break;case Mc:t="Neutral";break;case vc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ms=new U;function ep(){He.getLuminanceCoefficients(Ms);const i=Ms.x.toFixed(4),e=Ms.y.toFixed(4),t=Ms.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Hi).join(`
`)}function np(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ip(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Hi(i){return i!==""}function Lo(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Uo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const sp=/^[ \t]*#include +<([\w\d./]+)>/gm;function pa(i){return i.replace(sp,ap)}const rp=new Map;function ap(i,e){let t=Ie[e];if(t===void 0){const n=rp.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return pa(t)}const op=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Io(i){return i.replace(op,lp)}function lp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fo(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Jo?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===dn&&(e="SHADOWMAP_TYPE_VSM"),e}function up(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ai:case bi:e="ENVMAP_TYPE_CUBE";break;case Vs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case bi:e="ENVMAP_MODE_REFRACTION";break}return e}function dp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Qo:e="ENVMAP_BLENDING_MULTIPLY";break;case dc:e="ENVMAP_BLENDING_MIX";break;case fc:e="ENVMAP_BLENDING_ADD";break}return e}function fp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function pp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=cp(t),c=up(t),d=hp(t),f=dp(t),h=fp(t),m=tp(t),_=np(r),x=s.createProgram();let p,u,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hi).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Hi).join(`
`),u.length>0&&(u+=`
`)):(p=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Hi).join(`
`),u=[Fo(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?Ie.tonemapping_pars_fragment:"",t.toneMapping!==Nn?Qf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,Jf("linearToOutputTexel",t.outputColorSpace),ep(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Hi).join(`
`)),a=pa(a),a=Lo(a,t),a=Uo(a,t),o=pa(o),o=Lo(o,t),o=Uo(o,t),a=Io(a),o=Io(o),t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",t.glslVersion===Ya?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ya?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const E=A+p+a,y=A+u+o,B=Co(s,s.VERTEX_SHADER,E),C=Co(s,s.FRAGMENT_SHADER,y);s.attachShader(x,B),s.attachShader(x,C),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function b(R){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(B).trim(),j=s.getShaderInfoLog(C).trim();let K=!0,k=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,B,C);else{const Z=Do(s,B,"vertex"),G=Do(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+H+`
`+Z+`
`+G)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(z===""||j==="")&&(k=!1);k&&(R.diagnostics={runnable:K,programLog:H,vertexShader:{log:z,prefix:p},fragmentShader:{log:j,prefix:u}})}s.deleteShader(B),s.deleteShader(C),I=new Us(s,x),S=ip(s,x)}let I;this.getUniforms=function(){return I===void 0&&b(this),I};let S;this.getAttributes=function(){return S===void 0&&b(this),S};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(x,Kf)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=jf++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=B,this.fragmentShader=C,this}let mp=0;class gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new _p(e),t.set(e,n)),n}}class _p{constructor(e){this.id=mp++,this.code=e,this.usedTimes=0}}function vp(i,e,t,n,s,r,a){const o=new Aa,l=new gp,c=new Set,d=[],f=s.logarithmicDepthBuffer,h=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function p(S,M,R,H,z){const j=H.fog,K=z.geometry,k=S.isMeshStandardMaterial?H.environment:null,Z=(S.isMeshStandardMaterial?t:e).get(S.envMap||k),G=Z&&Z.mapping===Vs?Z.image.height:null,ne=_[S.type];S.precision!==null&&(m=s.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ce=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,_e=ce!==void 0?ce.length:0;let Le=0;K.morphAttributes.position!==void 0&&(Le=1),K.morphAttributes.normal!==void 0&&(Le=2),K.morphAttributes.color!==void 0&&(Le=3);let Ye,W,J,fe;if(ne){const Ke=tn[ne];Ye=Ke.vertexShader,W=Ke.fragmentShader}else Ye=S.vertexShader,W=S.fragmentShader,l.update(S),J=l.getVertexShaderID(S),fe=l.getFragmentShaderID(S);const ie=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),we=z.isInstancedMesh===!0,Ne=z.isBatchedMesh===!0,nt=!!S.map,Ge=!!S.matcap,rt=!!Z,L=!!S.aoMap,Ot=!!S.lightMap,Oe=!!S.bumpMap,Be=!!S.normalMap,ye=!!S.displacementMap,Qe=!!S.emissiveMap,Me=!!S.metalnessMap,T=!!S.roughnessMap,g=S.anisotropy>0,F=S.clearcoat>0,q=S.dispersion>0,$=S.iridescence>0,X=S.sheen>0,ve=S.transmission>0,re=g&&!!S.anisotropyMap,ue=F&&!!S.clearcoatMap,Ve=F&&!!S.clearcoatNormalMap,Q=F&&!!S.clearcoatRoughnessMap,he=$&&!!S.iridescenceMap,Te=$&&!!S.iridescenceThicknessMap,Ae=X&&!!S.sheenColorMap,de=X&&!!S.sheenRoughnessMap,ze=!!S.specularMap,Ue=!!S.specularColorMap,$e=!!S.specularIntensityMap,w=ve&&!!S.transmissionMap,se=ve&&!!S.thicknessMap,V=!!S.gradientMap,Y=!!S.alphaMap,le=S.alphaTest>0,ae=!!S.alphaHash,Ce=!!S.extensions;let it=Nn;S.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(it=i.toneMapping);const _t={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:Ye,fragmentShader:W,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:fe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ne,batchingColor:Ne&&z._colorsTexture!==null,instancing:we,instancingColor:we&&z.instanceColor!==null,instancingMorph:we&&z.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:ie===null?i.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:Di,alphaToCoverage:!!S.alphaToCoverage,map:nt,matcap:Ge,envMap:rt,envMapMode:rt&&Z.mapping,envMapCubeUVHeight:G,aoMap:L,lightMap:Ot,bumpMap:Oe,normalMap:Be,displacementMap:h&&ye,emissiveMap:Qe,normalMapObjectSpace:Be&&S.normalMapType===Ac,normalMapTangentSpace:Be&&S.normalMapType===Ec,metalnessMap:Me,roughnessMap:T,anisotropy:g,anisotropyMap:re,clearcoat:F,clearcoatMap:ue,clearcoatNormalMap:Ve,clearcoatRoughnessMap:Q,dispersion:q,iridescence:$,iridescenceMap:he,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:Ae,sheenRoughnessMap:de,specularMap:ze,specularColorMap:Ue,specularIntensityMap:$e,transmission:ve,transmissionMap:w,thicknessMap:se,gradientMap:V,opaque:S.transparent===!1&&S.blending===Mi&&S.alphaToCoverage===!1,alphaMap:Y,alphaTest:le,alphaHash:ae,combine:S.combine,mapUv:nt&&x(S.map.channel),aoMapUv:L&&x(S.aoMap.channel),lightMapUv:Ot&&x(S.lightMap.channel),bumpMapUv:Oe&&x(S.bumpMap.channel),normalMapUv:Be&&x(S.normalMap.channel),displacementMapUv:ye&&x(S.displacementMap.channel),emissiveMapUv:Qe&&x(S.emissiveMap.channel),metalnessMapUv:Me&&x(S.metalnessMap.channel),roughnessMapUv:T&&x(S.roughnessMap.channel),anisotropyMapUv:re&&x(S.anisotropyMap.channel),clearcoatMapUv:ue&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:Ve&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:he&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&x(S.sheenRoughnessMap.channel),specularMapUv:ze&&x(S.specularMap.channel),specularColorMapUv:Ue&&x(S.specularColorMap.channel),specularIntensityMapUv:$e&&x(S.specularIntensityMap.channel),transmissionMapUv:w&&x(S.transmissionMap.channel),thicknessMapUv:se&&x(S.thicknessMap.channel),alphaMapUv:Y&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Be||g),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!K.attributes.uv&&(nt||Y),fog:!!j,useFog:S.fog===!0,fogExp2:!!j&&j.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ee,skinning:z.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:Le,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:nt&&S.map.isVideoTexture===!0&&He.getTransfer(S.map.colorSpace)===je,decodeVideoTextureEmissive:Qe&&S.emissiveMap.isVideoTexture===!0&&He.getTransfer(S.emissiveMap.colorSpace)===je,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===mn,flipSided:S.side===Pt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||Ne)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return _t.vertexUv1s=c.has(1),_t.vertexUv2s=c.has(2),_t.vertexUv3s=c.has(3),c.clear(),_t}function u(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(A(M,S),E(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function A(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function E(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const M=_[S.type];let R;if(M){const H=tn[M];R=Os.clone(H.uniforms)}else R=S.uniforms;return R}function B(S,M){let R;for(let H=0,z=d.length;H<z;H++){const j=d[H];if(j.cacheKey===M){R=j,++R.usedTimes;break}}return R===void 0&&(R=new pp(i,M,S,r),d.push(R)),R}function C(S){if(--S.usedTimes===0){const M=d.indexOf(S);d[M]=d[d.length-1],d.pop(),S.destroy()}}function b(S){l.remove(S)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:B,releaseProgram:C,releaseShaderCache:b,programs:d,dispose:I}}function xp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function No(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Oo(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f,h,m,_,x,p){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:x,group:p},i[e]=u):(u.id=f.id,u.object=f,u.geometry=h,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=x,u.group=p),e++,u}function o(f,h,m,_,x,p){const u=a(f,h,m,_,x,p);m.transmission>0?n.push(u):m.transparent===!0?s.push(u):t.push(u)}function l(f,h,m,_,x,p){const u=a(f,h,m,_,x,p);m.transmission>0?n.unshift(u):m.transparent===!0?s.unshift(u):t.unshift(u)}function c(f,h){t.length>1&&t.sort(f||Mp),n.length>1&&n.sort(h||No),s.length>1&&s.sort(h||No)}function d(){for(let f=e,h=i.length;f<h;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:d,sort:c}}function Sp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Oo,i.set(n,[a])):s>=r.length?(a=new Oo,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new ke};break;case"SpotLight":t={position:new U,direction:new U,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new U,halfWidth:new U,halfHeight:new U};break}return i[e.id]=t,t}}}function Tp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ep=0;function Ap(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function bp(i){const e=new yp,t=Tp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);const s=new U,r=new st,a=new st;function o(c){let d=0,f=0,h=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,_=0,x=0,p=0,u=0,A=0,E=0,y=0,B=0,C=0,b=0;c.sort(Ap);for(let S=0,M=c.length;S<M;S++){const R=c[S],H=R.color,z=R.intensity,j=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)d+=H.r*z,f+=H.g*z,h+=H.b*z;else if(R.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(R.sh.coefficients[k],z);b++}else if(R.isDirectionalLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Z=R.shadow,G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=K,n.directionalShadowMatrix[m]=R.shadow.matrix,A++}n.directional[m]=k,m++}else if(R.isSpotLight){const k=e.get(R);k.position.setFromMatrixPosition(R.matrixWorld),k.color.copy(H).multiplyScalar(z),k.distance=j,k.coneCos=Math.cos(R.angle),k.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),k.decay=R.decay,n.spot[x]=k;const Z=R.shadow;if(R.map&&(n.spotLightMap[B]=R.map,B++,Z.updateMatrices(R),R.castShadow&&C++),n.spotLightMatrix[x]=Z.matrix,R.castShadow){const G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[x]=G,n.spotShadowMap[x]=K,y++}x++}else if(R.isRectAreaLight){const k=e.get(R);k.color.copy(H).multiplyScalar(z),k.halfWidth.set(R.width*.5,0,0),k.halfHeight.set(0,R.height*.5,0),n.rectArea[p]=k,p++}else if(R.isPointLight){const k=e.get(R);if(k.color.copy(R.color).multiplyScalar(R.intensity),k.distance=R.distance,k.decay=R.decay,R.castShadow){const Z=R.shadow,G=t.get(R);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=R.shadow.matrix,E++}n.point[_]=k,_++}else if(R.isHemisphereLight){const k=e.get(R);k.skyColor.copy(R.color).multiplyScalar(z),k.groundColor.copy(R.groundColor).multiplyScalar(z),n.hemi[u]=k,u++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=te.LTC_FLOAT_1,n.rectAreaLTC2=te.LTC_FLOAT_2):(n.rectAreaLTC1=te.LTC_HALF_1,n.rectAreaLTC2=te.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=h;const I=n.hash;(I.directionalLength!==m||I.pointLength!==_||I.spotLength!==x||I.rectAreaLength!==p||I.hemiLength!==u||I.numDirectionalShadows!==A||I.numPointShadows!==E||I.numSpotShadows!==y||I.numSpotMaps!==B||I.numLightProbes!==b)&&(n.directional.length=m,n.spot.length=x,n.rectArea.length=p,n.point.length=_,n.hemi.length=u,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=A,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+B-C,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=b,I.directionalLength=m,I.pointLength=_,I.spotLength=x,I.rectAreaLength=p,I.hemiLength=u,I.numDirectionalShadows=A,I.numPointShadows=E,I.numSpotShadows=y,I.numSpotMaps=B,I.numLightProbes=b,n.version=Ep++)}function l(c,d){let f=0,h=0,m=0,_=0,x=0;const p=d.matrixWorldInverse;for(let u=0,A=c.length;u<A;u++){const E=c[u];if(E.isDirectionalLight){const y=n.directional[f];y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),f++}else if(E.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(p),m++}else if(E.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),a.identity(),r.copy(E.matrixWorld),r.premultiply(p),a.extractRotation(r),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(E.isPointLight){const y=n.point[h];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(p),h++}else if(E.isHemisphereLight){const y=n.hemi[x];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:n}}function Bo(i){const e=new bp(i),t=[],n=[];function s(d){c.camera=d,t.length=0,n.length=0}function r(d){t.push(d)}function a(d){n.push(d)}function o(){e.setup(t)}function l(d){e.setupView(t,d)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Rp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Bo(i),e.set(s,[o])):r>=a.length?(o=new Bo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class wp extends Ki{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cp extends Ki{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Pp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dp=`uniform sampler2D shadow_pass;
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
}`;function Lp(i,e,t){let n=new Sl;const s=new Se,r=new Se,a=new at,o=new wp({depthPacking:Tc}),l=new Cp,c={},d=t.maxTextureSize,f={[On]:Pt,[Pt]:On,[mn]:mn},h=new gt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:Pp,fragmentShader:Dp}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Wt;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new nn(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Jo;let u=this.type;this.render=function(C,b,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),H=i.state;H.setBlending(vn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const z=u!==dn&&this.type===dn,j=u===dn&&this.type!==dn;for(let K=0,k=C.length;K<k;K++){const Z=C[K],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();if(s.multiply(ne),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y)),G.map===null||z===!0||j===!0){const _e=this.type!==dn?{minFilter:mt,magFilter:mt}:{};G.map!==null&&G.map.dispose(),G.map=new kt(s.x,s.y,_e),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const ce=G.getViewportCount();for(let _e=0;_e<ce;_e++){const Le=G.getViewport(_e);a.set(r.x*Le.x,r.y*Le.y,r.x*Le.z,r.y*Le.w),H.viewport(a),G.updateMatrices(Z,_e),n=G.getFrustum(),y(b,I,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===dn&&A(G,I),G.needsUpdate=!1}u=this.type,p.needsUpdate=!1,i.setRenderTarget(S,M,R)};function A(C,b){const I=e.update(x);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new kt(s.x,s.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(b,null,I,h,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(b,null,I,m,x,null)}function E(C,b,I,S){let M=null;const R=I.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(R!==void 0)M=R;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=M.uuid,z=b.uuid;let j=c[H];j===void 0&&(j={},c[H]=j);let K=j[z];K===void 0&&(K=M.clone(),j[z]=K,b.addEventListener("dispose",B)),M=K}if(M.visible=b.visible,M.wireframe=b.wireframe,S===dn?M.side=b.shadowSide!==null?b.shadowSide:b.side:M.side=b.shadowSide!==null?b.shadowSide:f[b.side],M.alphaMap=b.alphaMap,M.alphaTest=b.alphaTest,M.map=b.map,M.clipShadows=b.clipShadows,M.clippingPlanes=b.clippingPlanes,M.clipIntersection=b.clipIntersection,M.displacementMap=b.displacementMap,M.displacementScale=b.displacementScale,M.displacementBias=b.displacementBias,M.wireframeLinewidth=b.wireframeLinewidth,M.linewidth=b.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=I}return M}function y(C,b,I,S,M){if(C.visible===!1)return;if(C.layers.test(b.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===dn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,C.matrixWorld);const z=e.update(C),j=C.material;if(Array.isArray(j)){const K=z.groups;for(let k=0,Z=K.length;k<Z;k++){const G=K[k],ne=j[G.materialIndex];if(ne&&ne.visible){const ce=E(C,ne,S,M);C.onBeforeShadow(i,C,b,I,z,ce,G),i.renderBufferDirect(I,null,z,ce,C,G),C.onAfterShadow(i,C,b,I,z,ce,G)}}}else if(j.visible){const K=E(C,j,S,M);C.onBeforeShadow(i,C,b,I,z,K,null),i.renderBufferDirect(I,null,z,K,C,null),C.onAfterShadow(i,C,b,I,z,K,null)}}const H=C.children;for(let z=0,j=H.length;z<j;z++)y(H[z],b,I,S,M)}function B(C){C.target.removeEventListener("dispose",B);for(const I in c){const S=c[I],M=C.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Up={[Dr]:Lr,[Ur]:Nr,[Ir]:Or,[Ei]:Fr,[Lr]:Dr,[Nr]:Ur,[Or]:Ir,[Fr]:Ei};function Ip(i,e){function t(){let w=!1;const se=new at;let V=null;const Y=new at(0,0,0,0);return{setMask:function(le){V!==le&&!w&&(i.colorMask(le,le,le,le),V=le)},setLocked:function(le){w=le},setClear:function(le,ae,Ce,it,_t){_t===!0&&(le*=it,ae*=it,Ce*=it),se.set(le,ae,Ce,it),Y.equals(se)===!1&&(i.clearColor(le,ae,Ce,it),Y.copy(se))},reset:function(){w=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let w=!1,se=!1,V=null,Y=null,le=null;return{setReversed:function(ae){if(se!==ae){const Ce=e.get("EXT_clip_control");se?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT);const it=le;le=null,this.setClear(it)}se=ae},getReversed:function(){return se},setTest:function(ae){ae?ie(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(ae){V!==ae&&!w&&(i.depthMask(ae),V=ae)},setFunc:function(ae){if(se&&(ae=Up[ae]),Y!==ae){switch(ae){case Dr:i.depthFunc(i.NEVER);break;case Lr:i.depthFunc(i.ALWAYS);break;case Ur:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Ir:i.depthFunc(i.EQUAL);break;case Fr:i.depthFunc(i.GEQUAL);break;case Nr:i.depthFunc(i.GREATER);break;case Or:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Y=ae}},setLocked:function(ae){w=ae},setClear:function(ae){le!==ae&&(se&&(ae=1-ae),i.clearDepth(ae),le=ae)},reset:function(){w=!1,V=null,Y=null,le=null,se=!1}}}function s(){let w=!1,se=null,V=null,Y=null,le=null,ae=null,Ce=null,it=null,_t=null;return{setTest:function(Ke){w||(Ke?ie(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(Ke){se!==Ke&&!w&&(i.stencilMask(Ke),se=Ke)},setFunc:function(Ke,Xt,rn){(V!==Ke||Y!==Xt||le!==rn)&&(i.stencilFunc(Ke,Xt,rn),V=Ke,Y=Xt,le=rn)},setOp:function(Ke,Xt,rn){(ae!==Ke||Ce!==Xt||it!==rn)&&(i.stencilOp(Ke,Xt,rn),ae=Ke,Ce=Xt,it=rn)},setLocked:function(Ke){w=Ke},setClear:function(Ke){_t!==Ke&&(i.clearStencil(Ke),_t=Ke)},reset:function(){w=!1,se=null,V=null,Y=null,le=null,ae=null,Ce=null,it=null,_t=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let d={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,u=null,A=null,E=null,y=null,B=null,C=null,b=new ke(0,0,0),I=0,S=!1,M=null,R=null,H=null,z=null,j=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,Z=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(G)[1]),k=Z>=1):G.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),k=Z>=2);let ne=null,ce={};const _e=i.getParameter(i.SCISSOR_BOX),Le=i.getParameter(i.VIEWPORT),Ye=new at().fromArray(_e),W=new at().fromArray(Le);function J(w,se,V,Y){const le=new Uint8Array(4),ae=i.createTexture();i.bindTexture(w,ae),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<V;Ce++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D(se,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,le):i.texImage2D(se+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,le);return ae}const fe={};fe[i.TEXTURE_2D]=J(i.TEXTURE_2D,i.TEXTURE_2D,1),fe[i.TEXTURE_CUBE_MAP]=J(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[i.TEXTURE_2D_ARRAY]=J(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),fe[i.TEXTURE_3D]=J(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ie(i.DEPTH_TEST),a.setFunc(Ei),Oe(!1),Be(Ha),ie(i.CULL_FACE),L(vn);function ie(w){d[w]!==!0&&(i.enable(w),d[w]=!0)}function Ee(w){d[w]!==!1&&(i.disable(w),d[w]=!1)}function we(w,se){return f[w]!==se?(i.bindFramebuffer(w,se),f[w]=se,w===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=se),w===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=se),!0):!1}function Ne(w,se){let V=m,Y=!1;if(w){V=h.get(se),V===void 0&&(V=[],h.set(se,V));const le=w.textures;if(V.length!==le.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ce=le.length;ae<Ce;ae++)V[ae]=i.COLOR_ATTACHMENT0+ae;V.length=le.length,Y=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,Y=!0);Y&&i.drawBuffers(V)}function nt(w){return _!==w?(i.useProgram(w),_=w,!0):!1}const Ge={[Yn]:i.FUNC_ADD,[jl]:i.FUNC_SUBTRACT,[Zl]:i.FUNC_REVERSE_SUBTRACT};Ge[$l]=i.MIN,Ge[Jl]=i.MAX;const rt={[Ql]:i.ZERO,[ec]:i.ONE,[tc]:i.SRC_COLOR,[Cr]:i.SRC_ALPHA,[oc]:i.SRC_ALPHA_SATURATE,[rc]:i.DST_COLOR,[ic]:i.DST_ALPHA,[nc]:i.ONE_MINUS_SRC_COLOR,[Pr]:i.ONE_MINUS_SRC_ALPHA,[ac]:i.ONE_MINUS_DST_COLOR,[sc]:i.ONE_MINUS_DST_ALPHA,[lc]:i.CONSTANT_COLOR,[cc]:i.ONE_MINUS_CONSTANT_COLOR,[uc]:i.CONSTANT_ALPHA,[hc]:i.ONE_MINUS_CONSTANT_ALPHA};function L(w,se,V,Y,le,ae,Ce,it,_t,Ke){if(w===vn){x===!0&&(Ee(i.BLEND),x=!1);return}if(x===!1&&(ie(i.BLEND),x=!0),w!==Kl){if(w!==p||Ke!==S){if((u!==Yn||y!==Yn)&&(i.blendEquation(i.FUNC_ADD),u=Yn,y=Yn),Ke)switch(w){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.ONE,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ki:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Wa:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}A=null,E=null,B=null,C=null,b.set(0,0,0),I=0,p=w,S=Ke}return}le=le||se,ae=ae||V,Ce=Ce||Y,(se!==u||le!==y)&&(i.blendEquationSeparate(Ge[se],Ge[le]),u=se,y=le),(V!==A||Y!==E||ae!==B||Ce!==C)&&(i.blendFuncSeparate(rt[V],rt[Y],rt[ae],rt[Ce]),A=V,E=Y,B=ae,C=Ce),(it.equals(b)===!1||_t!==I)&&(i.blendColor(it.r,it.g,it.b,_t),b.copy(it),I=_t),p=w,S=!1}function Ot(w,se){w.side===mn?Ee(i.CULL_FACE):ie(i.CULL_FACE);let V=w.side===Pt;se&&(V=!V),Oe(V),w.blending===Mi&&w.transparent===!1?L(vn):L(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),a.setFunc(w.depthFunc),a.setTest(w.depthTest),a.setMask(w.depthWrite),r.setMask(w.colorWrite);const Y=w.stencilWrite;o.setTest(Y),Y&&(o.setMask(w.stencilWriteMask),o.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),o.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),Qe(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(w){M!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),M=w)}function Be(w){w!==Xl?(ie(i.CULL_FACE),w!==R&&(w===Ha?i.cullFace(i.BACK):w===ql?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),R=w}function ye(w){w!==H&&(k&&i.lineWidth(w),H=w)}function Qe(w,se,V){w?(ie(i.POLYGON_OFFSET_FILL),(z!==se||j!==V)&&(i.polygonOffset(se,V),z=se,j=V)):Ee(i.POLYGON_OFFSET_FILL)}function Me(w){w?ie(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function T(w){w===void 0&&(w=i.TEXTURE0+K-1),ne!==w&&(i.activeTexture(w),ne=w)}function g(w,se,V){V===void 0&&(ne===null?V=i.TEXTURE0+K-1:V=ne);let Y=ce[V];Y===void 0&&(Y={type:void 0,texture:void 0},ce[V]=Y),(Y.type!==w||Y.texture!==se)&&(ne!==V&&(i.activeTexture(V),ne=V),i.bindTexture(w,se||fe[w]),Y.type=w,Y.texture=se)}function F(){const w=ce[ne];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ve(){try{i.texSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function re(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ue(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ve(){try{i.texStorage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function he(){try{i.texImage2D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Te(){try{i.texImage3D.apply(i,arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Ae(w){Ye.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Ye.copy(w))}function de(w){W.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),W.copy(w))}function ze(w,se){let V=c.get(se);V===void 0&&(V=new WeakMap,c.set(se,V));let Y=V.get(w);Y===void 0&&(Y=i.getUniformBlockIndex(se,w.name),V.set(w,Y))}function Ue(w,se){const Y=c.get(se).get(w);l.get(se)!==Y&&(i.uniformBlockBinding(se,Y,w.__bindingPointIndex),l.set(se,Y))}function $e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},ne=null,ce={},f={},h=new WeakMap,m=[],_=null,x=!1,p=null,u=null,A=null,E=null,y=null,B=null,C=null,b=new ke(0,0,0),I=0,S=!1,M=null,R=null,H=null,z=null,j=null,Ye.set(0,0,i.canvas.width,i.canvas.height),W.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ie,disable:Ee,bindFramebuffer:we,drawBuffers:Ne,useProgram:nt,setBlending:L,setMaterial:Ot,setFlipSided:Oe,setCullFace:Be,setLineWidth:ye,setPolygonOffset:Qe,setScissorTest:Me,activeTexture:T,bindTexture:g,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:$,texImage2D:he,texImage3D:Te,updateUBOMapping:ze,uniformBlockBinding:Ue,texStorage2D:Ve,texStorage3D:Q,texSubImage2D:X,texSubImage3D:ve,compressedTexSubImage2D:re,compressedTexSubImage3D:ue,scissor:Ae,viewport:de,reset:$e}}function zo(i,e,t,n){const s=Fp(n);switch(t){case sl:return i*e;case al:return i*e;case ol:return i*e*2;case ll:return i*e/s.components*s.byteLength;case ya:return i*e/s.components*s.byteLength;case cl:return i*e*2/s.components*s.byteLength;case Ta:return i*e*2/s.components*s.byteLength;case rl:return i*e*3/s.components*s.byteLength;case Ct:return i*e*4/s.components*s.byteLength;case Ea:return i*e*4/s.components*s.byteLength;case Rs:case ws:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Cs:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hr:case Wr:return Math.max(i,16)*Math.max(e,8)/4;case Vr:case kr:return Math.max(i,8)*Math.max(e,8)/2;case Xr:case qr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Zr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $r:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Jr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Qr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ea:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ta:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case na:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case sa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ra:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case aa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ds:case la:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ul:case ua:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ha:case da:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fp(i){switch(i){case Sn:case tl:return{byteLength:1,components:1};case Wi:case nl:case sn:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case Jn:case xa:case Ht:return{byteLength:4,components:1};case il:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Np(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Se,d=new WeakMap;let f;const h=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(T,g){return m?new OffscreenCanvas(T,g):Ns("canvas")}function x(T,g,F){let q=1;const $=Me(T);if(($.width>F||$.height>F)&&(q=F/Math.max($.width,$.height)),q<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor(q*$.width),ve=Math.floor(q*$.height);f===void 0&&(f=_(X,ve));const re=g?_(X,ve):f;return re.width=X,re.height=ve,re.getContext("2d").drawImage(T,0,0,X,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+X+"x"+ve+")."),re}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function p(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(T,g,F,q,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=g;if(g===i.RED&&(F===i.FLOAT&&(X=i.R32F),F===i.HALF_FLOAT&&(X=i.R16F),F===i.UNSIGNED_BYTE&&(X=i.R8)),g===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.R8UI),F===i.UNSIGNED_SHORT&&(X=i.R16UI),F===i.UNSIGNED_INT&&(X=i.R32UI),F===i.BYTE&&(X=i.R8I),F===i.SHORT&&(X=i.R16I),F===i.INT&&(X=i.R32I)),g===i.RG&&(F===i.FLOAT&&(X=i.RG32F),F===i.HALF_FLOAT&&(X=i.RG16F),F===i.UNSIGNED_BYTE&&(X=i.RG8)),g===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RG8UI),F===i.UNSIGNED_SHORT&&(X=i.RG16UI),F===i.UNSIGNED_INT&&(X=i.RG32UI),F===i.BYTE&&(X=i.RG8I),F===i.SHORT&&(X=i.RG16I),F===i.INT&&(X=i.RG32I)),g===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGB8UI),F===i.UNSIGNED_SHORT&&(X=i.RGB16UI),F===i.UNSIGNED_INT&&(X=i.RGB32UI),F===i.BYTE&&(X=i.RGB8I),F===i.SHORT&&(X=i.RGB16I),F===i.INT&&(X=i.RGB32I)),g===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),F===i.UNSIGNED_INT&&(X=i.RGBA32UI),F===i.BYTE&&(X=i.RGBA8I),F===i.SHORT&&(X=i.RGBA16I),F===i.INT&&(X=i.RGBA32I)),g===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),g===i.RGBA){const ve=$?Hs:He.getTransfer(q);F===i.FLOAT&&(X=i.RGBA32F),F===i.HALF_FLOAT&&(X=i.RGBA16F),F===i.UNSIGNED_BYTE&&(X=ve===je?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(T,g){let F;return T?g===null||g===Jn||g===Ri?F=i.DEPTH24_STENCIL8:g===Ht?F=i.DEPTH32F_STENCIL8:g===Wi&&(F=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Jn||g===Ri?F=i.DEPTH_COMPONENT24:g===Ht?F=i.DEPTH_COMPONENT32F:g===Wi&&(F=i.DEPTH_COMPONENT16),F}function B(T,g){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==mt&&T.minFilter!==Vt?Math.log2(Math.max(g.width,g.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?g.mipmaps.length:1}function C(T){const g=T.target;g.removeEventListener("dispose",C),I(g),g.isVideoTexture&&d.delete(g)}function b(T){const g=T.target;g.removeEventListener("dispose",b),M(g)}function I(T){const g=n.get(T);if(g.__webglInit===void 0)return;const F=T.source,q=h.get(F);if(q){const $=q[g.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(T),Object.keys(q).length===0&&h.delete(F)}n.remove(T)}function S(T){const g=n.get(T);i.deleteTexture(g.__webglTexture);const F=T.source,q=h.get(F);delete q[g.__cacheKey],a.memory.textures--}function M(T){const g=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(g.__webglFramebuffer[q]))for(let $=0;$<g.__webglFramebuffer[q].length;$++)i.deleteFramebuffer(g.__webglFramebuffer[q][$]);else i.deleteFramebuffer(g.__webglFramebuffer[q]);g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer[q])}else{if(Array.isArray(g.__webglFramebuffer))for(let q=0;q<g.__webglFramebuffer.length;q++)i.deleteFramebuffer(g.__webglFramebuffer[q]);else i.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&i.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&i.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let q=0;q<g.__webglColorRenderbuffer.length;q++)g.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(g.__webglColorRenderbuffer[q]);g.__webglDepthRenderbuffer&&i.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=T.textures;for(let q=0,$=F.length;q<$;q++){const X=n.get(F[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(F[q])}n.remove(T)}let R=0;function H(){R=0}function z(){const T=R;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),R+=1,T}function j(T){const g=[];return g.push(T.wrapS),g.push(T.wrapT),g.push(T.wrapR||0),g.push(T.magFilter),g.push(T.minFilter),g.push(T.anisotropy),g.push(T.internalFormat),g.push(T.format),g.push(T.type),g.push(T.generateMipmaps),g.push(T.premultiplyAlpha),g.push(T.flipY),g.push(T.unpackAlignment),g.push(T.colorSpace),g.join()}function K(T,g){const F=n.get(T);if(T.isVideoTexture&&ye(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const q=T.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,T,g);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+g)}function k(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){W(F,T,g);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+g)}function Z(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){W(F,T,g);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+g)}function G(T,g){const F=n.get(T);if(T.version>0&&F.__version!==T.version){J(F,T,g);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+g)}const ne={[$n]:i.REPEAT,[Jt]:i.CLAMP_TO_EDGE,[Gr]:i.MIRRORED_REPEAT},ce={[mt]:i.NEAREST,[Sc]:i.NEAREST_MIPMAP_NEAREST,[es]:i.NEAREST_MIPMAP_LINEAR,[Vt]:i.LINEAR,[Js]:i.LINEAR_MIPMAP_NEAREST,[Zn]:i.LINEAR_MIPMAP_LINEAR},_e={[bc]:i.NEVER,[Lc]:i.ALWAYS,[Rc]:i.LESS,[hl]:i.LEQUAL,[wc]:i.EQUAL,[Dc]:i.GEQUAL,[Cc]:i.GREATER,[Pc]:i.NOTEQUAL};function Le(T,g){if(g.type===Ht&&e.has("OES_texture_float_linear")===!1&&(g.magFilter===Vt||g.magFilter===Js||g.magFilter===es||g.magFilter===Zn||g.minFilter===Vt||g.minFilter===Js||g.minFilter===es||g.minFilter===Zn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ne[g.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ne[g.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ne[g.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ce[g.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ce[g.minFilter]),g.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,_e[g.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===mt||g.minFilter!==es&&g.minFilter!==Zn||g.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||n.get(g).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(T,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),n.get(g).__currentAnisotropy=g.anisotropy}}}function Ye(T,g){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,g.addEventListener("dispose",C));const q=g.source;let $=h.get(q);$===void 0&&($={},h.set(q,$));const X=j(g);if(X!==T.__cacheKey){$[X]===void 0&&($[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,F=!0),$[X].usedTimes++;const ve=$[T.__cacheKey];ve!==void 0&&($[T.__cacheKey].usedTimes--,ve.usedTimes===0&&S(g)),T.__cacheKey=X,T.__webglTexture=$[X].texture}return F}function W(T,g,F){let q=i.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),g.isData3DTexture&&(q=i.TEXTURE_3D);const $=Ye(T,g),X=g.source;t.bindTexture(q,T.__webglTexture,i.TEXTURE0+F);const ve=n.get(X);if(X.version!==ve.__version||$===!0){t.activeTexture(i.TEXTURE0+F);const re=He.getPrimaries(He.workingColorSpace),ue=g.colorSpace===Un?null:He.getPrimaries(g.colorSpace),Ve=g.colorSpace===Un||re===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve);let Q=x(g.image,!1,s.maxTextureSize);Q=Qe(g,Q);const he=r.convert(g.format,g.colorSpace),Te=r.convert(g.type);let Ae=E(g.internalFormat,he,Te,g.colorSpace,g.isVideoTexture);Le(q,g);let de;const ze=g.mipmaps,Ue=g.isVideoTexture!==!0,$e=ve.__version===void 0||$===!0,w=X.dataReady,se=B(g,Q);if(g.isDepthTexture)Ae=y(g.format===wi,g.type),$e&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Ae,Q.width,Q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,he,Te,null));else if(g.isDataTexture)if(ze.length>0){Ue&&$e&&t.texStorage2D(i.TEXTURE_2D,se,Ae,ze[0].width,ze[0].height);for(let V=0,Y=ze.length;V<Y;V++)de=ze[V],Ue?w&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,de.width,de.height,he,Te,de.data):t.texImage2D(i.TEXTURE_2D,V,Ae,de.width,de.height,0,he,Te,de.data);g.generateMipmaps=!1}else Ue?($e&&t.texStorage2D(i.TEXTURE_2D,se,Ae,Q.width,Q.height),w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,he,Te,Q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,Q.width,Q.height,0,he,Te,Q.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){Ue&&$e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Ae,ze[0].width,ze[0].height,Q.depth);for(let V=0,Y=ze.length;V<Y;V++)if(de=ze[V],g.format!==Ct)if(he!==null)if(Ue){if(w)if(g.layerUpdates.size>0){const le=zo(de.width,de.height,g.format,g.type);for(const ae of g.layerUpdates){const Ce=de.data.subarray(ae*le/de.data.BYTES_PER_ELEMENT,(ae+1)*le/de.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,ae,de.width,de.height,1,he,Ce)}g.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,de.width,de.height,Q.depth,he,de.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,V,Ae,de.width,de.height,Q.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?w&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,V,0,0,0,de.width,de.height,Q.depth,he,Te,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,V,Ae,de.width,de.height,Q.depth,0,he,Te,de.data)}else{Ue&&$e&&t.texStorage2D(i.TEXTURE_2D,se,Ae,ze[0].width,ze[0].height);for(let V=0,Y=ze.length;V<Y;V++)de=ze[V],g.format!==Ct?he!==null?Ue?w&&t.compressedTexSubImage2D(i.TEXTURE_2D,V,0,0,de.width,de.height,he,de.data):t.compressedTexImage2D(i.TEXTURE_2D,V,Ae,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?w&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,de.width,de.height,he,Te,de.data):t.texImage2D(i.TEXTURE_2D,V,Ae,de.width,de.height,0,he,Te,de.data)}else if(g.isDataArrayTexture)if(Ue){if($e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,se,Ae,Q.width,Q.height,Q.depth),w)if(g.layerUpdates.size>0){const V=zo(Q.width,Q.height,g.format,g.type);for(const Y of g.layerUpdates){const le=Q.data.subarray(Y*V/Q.data.BYTES_PER_ELEMENT,(Y+1)*V/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Y,Q.width,Q.height,1,he,Te,le)}g.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(g.isData3DTexture)Ue?($e&&t.texStorage3D(i.TEXTURE_3D,se,Ae,Q.width,Q.height,Q.depth),w&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,he,Te,Q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,Q.width,Q.height,Q.depth,0,he,Te,Q.data);else if(g.isFramebufferTexture){if($e)if(Ue)t.texStorage2D(i.TEXTURE_2D,se,Ae,Q.width,Q.height);else{let V=Q.width,Y=Q.height;for(let le=0;le<se;le++)t.texImage2D(i.TEXTURE_2D,le,Ae,V,Y,0,he,Te,null),V>>=1,Y>>=1}}else if(ze.length>0){if(Ue&&$e){const V=Me(ze[0]);t.texStorage2D(i.TEXTURE_2D,se,Ae,V.width,V.height)}for(let V=0,Y=ze.length;V<Y;V++)de=ze[V],Ue?w&&t.texSubImage2D(i.TEXTURE_2D,V,0,0,he,Te,de):t.texImage2D(i.TEXTURE_2D,V,Ae,he,Te,de);g.generateMipmaps=!1}else if(Ue){if($e){const V=Me(Q);t.texStorage2D(i.TEXTURE_2D,se,Ae,V.width,V.height)}w&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,he,Te,Q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,he,Te,Q);p(g)&&u(q),ve.__version=X.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function J(T,g,F){if(g.image.length!==6)return;const q=Ye(T,g),$=g.source;t.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+F);const X=n.get($);if($.version!==X.__version||q===!0){t.activeTexture(i.TEXTURE0+F);const ve=He.getPrimaries(He.workingColorSpace),re=g.colorSpace===Un?null:He.getPrimaries(g.colorSpace),ue=g.colorSpace===Un||ve===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,g.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,g.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ue);const Ve=g.isCompressedTexture||g.image[0].isCompressedTexture,Q=g.image[0]&&g.image[0].isDataTexture,he=[];for(let Y=0;Y<6;Y++)!Ve&&!Q?he[Y]=x(g.image[Y],!0,s.maxCubemapSize):he[Y]=Q?g.image[Y].image:g.image[Y],he[Y]=Qe(g,he[Y]);const Te=he[0],Ae=r.convert(g.format,g.colorSpace),de=r.convert(g.type),ze=E(g.internalFormat,Ae,de,g.colorSpace),Ue=g.isVideoTexture!==!0,$e=X.__version===void 0||q===!0,w=$.dataReady;let se=B(g,Te);Le(i.TEXTURE_CUBE_MAP,g);let V;if(Ve){Ue&&$e&&t.texStorage2D(i.TEXTURE_CUBE_MAP,se,ze,Te.width,Te.height);for(let Y=0;Y<6;Y++){V=he[Y].mipmaps;for(let le=0;le<V.length;le++){const ae=V[le];g.format!==Ct?Ae!==null?Ue?w&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,ae.width,ae.height,Ae,ae.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,ze,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,0,0,ae.width,ae.height,Ae,de,ae.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le,ze,ae.width,ae.height,0,Ae,de,ae.data)}}}else{if(V=g.mipmaps,Ue&&$e){V.length>0&&se++;const Y=Me(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,se,ze,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Ue?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,he[Y].width,he[Y].height,Ae,de,he[Y].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,he[Y].width,he[Y].height,0,Ae,de,he[Y].data);for(let le=0;le<V.length;le++){const Ce=V[le].image[Y].image;Ue?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Ce.width,Ce.height,Ae,de,Ce.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,ze,Ce.width,Ce.height,0,Ae,de,Ce.data)}}else{Ue?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Ae,de,he[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,ze,Ae,de,he[Y]);for(let le=0;le<V.length;le++){const ae=V[le];Ue?w&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,0,0,Ae,de,ae.image[Y]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,le+1,ze,Ae,de,ae.image[Y])}}}p(g)&&u(i.TEXTURE_CUBE_MAP),X.__version=$.version,g.onUpdate&&g.onUpdate(g)}T.__version=g.version}function fe(T,g,F,q,$,X){const ve=r.convert(F.format,F.colorSpace),re=r.convert(F.type),ue=E(F.internalFormat,ve,re,F.colorSpace),Ve=n.get(g),Q=n.get(F);if(Q.__renderTarget=g,!Ve.__hasExternalTextures){const he=Math.max(1,g.width>>X),Te=Math.max(1,g.height>>X);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,X,ue,he,Te,g.depth,0,ve,re,null):t.texImage2D($,X,ue,he,Te,0,ve,re,null)}t.bindFramebuffer(i.FRAMEBUFFER,T),Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,$,Q.__webglTexture,0,Oe(g)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,$,Q.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ie(T,g,F){if(i.bindRenderbuffer(i.RENDERBUFFER,T),g.depthBuffer){const q=g.depthTexture,$=q&&q.isDepthTexture?q.type:null,X=y(g.stencilBuffer,$),ve=g.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=Oe(g);Be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,X,g.width,g.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,X,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,X,g.width,g.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ve,i.RENDERBUFFER,T)}else{const q=g.textures;for(let $=0;$<q.length;$++){const X=q[$],ve=r.convert(X.format,X.colorSpace),re=r.convert(X.type),ue=E(X.internalFormat,ve,re,X.colorSpace),Ve=Oe(g);F&&Be(g)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve,ue,g.width,g.height):Be(g)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve,ue,g.width,g.height):i.renderbufferStorage(i.RENDERBUFFER,ue,g.width,g.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ee(T,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,T),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(g.depthTexture);q.__renderTarget=g,(!q.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),K(g.depthTexture,0);const $=q.__webglTexture,X=Oe(g);if(g.depthTexture.format===Si)Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,$,0);else if(g.depthTexture.format===wi)Be(g)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,$,0);else throw new Error("Unknown depthTexture format")}function we(T){const g=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==T.depthTexture){const q=T.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),q){const $=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,q.removeEventListener("dispose",$)};q.addEventListener("dispose",$),g.__depthDisposeCallback=$}g.__boundDepthTexture=q}if(T.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ee(g.__webglFramebuffer,T)}else if(F){g.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer[q]),g.__webglDepthbuffer[q]===void 0)g.__webglDepthbuffer[q]=i.createRenderbuffer(),ie(g.__webglDepthbuffer[q],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=g.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,X)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=i.createRenderbuffer(),ie(g.__webglDepthbuffer,T,!1);else{const q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=g.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,q,i.RENDERBUFFER,$)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ne(T,g,F){const q=n.get(T);g!==void 0&&fe(q.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&we(T)}function nt(T){const g=T.texture,F=n.get(T),q=n.get(g);T.addEventListener("dispose",b);const $=T.textures,X=T.isWebGLCubeRenderTarget===!0,ve=$.length>1;if(ve||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=g.version,a.memory.textures++),X){F.__webglFramebuffer=[];for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[re]=[];for(let ue=0;ue<g.mipmaps.length;ue++)F.__webglFramebuffer[re][ue]=i.createFramebuffer()}else F.__webglFramebuffer[re]=i.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let re=0;re<g.mipmaps.length;re++)F.__webglFramebuffer[re]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ve)for(let re=0,ue=$.length;re<ue;re++){const Ve=n.get($[re]);Ve.__webglTexture===void 0&&(Ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&Be(T)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let re=0;re<$.length;re++){const ue=$[re];F.__webglColorRenderbuffer[re]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[re]);const Ve=r.convert(ue.format,ue.colorSpace),Q=r.convert(ue.type),he=E(ue.internalFormat,Ve,Q,ue.colorSpace,T.isXRRenderTarget===!0),Te=Oe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,he,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+re,i.RENDERBUFFER,F.__webglColorRenderbuffer[re])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),ie(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),Le(i.TEXTURE_CUBE_MAP,g);for(let re=0;re<6;re++)if(g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)fe(F.__webglFramebuffer[re][ue],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,ue);else fe(F.__webglFramebuffer[re],T,g,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0);p(g)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let re=0,ue=$.length;re<ue;re++){const Ve=$[re],Q=n.get(Ve);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Le(i.TEXTURE_2D,Ve),fe(F.__webglFramebuffer,T,Ve,i.COLOR_ATTACHMENT0+re,i.TEXTURE_2D,0),p(Ve)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let re=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(re=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(re,q.__webglTexture),Le(re,g),g.mipmaps&&g.mipmaps.length>0)for(let ue=0;ue<g.mipmaps.length;ue++)fe(F.__webglFramebuffer[ue],T,g,i.COLOR_ATTACHMENT0,re,ue);else fe(F.__webglFramebuffer,T,g,i.COLOR_ATTACHMENT0,re,0);p(g)&&u(re),t.unbindTexture()}T.depthBuffer&&we(T)}function Ge(T){const g=T.textures;for(let F=0,q=g.length;F<q;F++){const $=g[F];if(p($)){const X=A(T),ve=n.get($).__webglTexture;t.bindTexture(X,ve),u(X),t.unbindTexture()}}}const rt=[],L=[];function Ot(T){if(T.samples>0){if(Be(T)===!1){const g=T.textures,F=T.width,q=T.height;let $=i.COLOR_BUFFER_BIT;const X=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=n.get(T),re=g.length>1;if(re)for(let ue=0;ue<g.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let ue=0;ue<g.length;ue++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),re){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ve=n.get(g[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ve,0)}i.blitFramebuffer(0,0,F,q,0,0,F,q,$,i.NEAREST),l===!0&&(rt.length=0,L.length=0,rt.push(i.COLOR_ATTACHMENT0+ue),T.depthBuffer&&T.resolveDepthBuffer===!1&&(rt.push(X),L.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let ue=0;ue<g.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,ve.__webglColorRenderbuffer[ue]);const Ve=n.get(g[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ve.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ve,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const g=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[g])}}}function Oe(T){return Math.min(s.maxSamples,T.samples)}function Be(T){const g=n.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function ye(T){const g=a.render.frame;d.get(T)!==g&&(d.set(T,g),T.update())}function Qe(T,g){const F=T.colorSpace,q=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||F!==Di&&F!==Un&&(He.getTransfer(F)===je?(q!==Ct||$!==Sn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function Me(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=H,this.setTexture2D=K,this.setTexture2DArray=k,this.setTexture3D=Z,this.setTextureCube=G,this.rebindTextures=Ne,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Be}function Op(i,e){function t(n,s=Un){let r;const a=He.getTransfer(s);if(n===Sn)return i.UNSIGNED_BYTE;if(n===Ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===tl)return i.BYTE;if(n===nl)return i.SHORT;if(n===Wi)return i.UNSIGNED_SHORT;if(n===xa)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Ht)return i.FLOAT;if(n===sn)return i.HALF_FLOAT;if(n===sl)return i.ALPHA;if(n===rl)return i.RGB;if(n===Ct)return i.RGBA;if(n===al)return i.LUMINANCE;if(n===ol)return i.LUMINANCE_ALPHA;if(n===Si)return i.DEPTH_COMPONENT;if(n===wi)return i.DEPTH_STENCIL;if(n===ll)return i.RED;if(n===ya)return i.RED_INTEGER;if(n===cl)return i.RG;if(n===Ta)return i.RG_INTEGER;if(n===Ea)return i.RGBA_INTEGER;if(n===Rs||n===ws||n===Cs||n===Ps)if(a===je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ws)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vr||n===Hr||n===kr||n===Wr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Vr)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Hr)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xr||n===qr||n===Yr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xr||n===qr)return a===je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Kr||n===jr||n===Zr||n===$r||n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia||n===sa||n===ra||n===aa||n===oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Kr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Zr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qr)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ea)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ta)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===aa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===oa)return a===je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ds||n===la||n===ca)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ds)return a===je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ul||n===ua||n===ha||n===da)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ds)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ua)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ha)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ri?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Bp extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ss extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zp={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ss,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ss,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ss,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const p=t.getJointPose(x,n),u=this._getHandJoint(c,x);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=d.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(zp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ss;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Gp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vp=`
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

}`;class Hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new gt({vertexShader:Gp,fragmentShader:Vp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new nn(new Xs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kp extends ti{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,f=null,h=null,m=null,_=null;const x=new Hp,p=t.getContextAttributes();let u=null,A=null;const E=[],y=[],B=new Se;let C=null;const b=new Gt;b.viewport=new at;const I=new Gt;I.viewport=new at;const S=[b,I],M=new Bp;let R=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let J=E[W];return J===void 0&&(J=new br,E[W]=J),J.getTargetRaySpace()},this.getControllerGrip=function(W){let J=E[W];return J===void 0&&(J=new br,E[W]=J),J.getGripSpace()},this.getHand=function(W){let J=E[W];return J===void 0&&(J=new br,E[W]=J),J.getHandSpace()};function z(W){const J=y.indexOf(W.inputSource);if(J===-1)return;const fe=E[J];fe!==void 0&&(fe.update(W.inputSource,W.frame,c||a),fe.dispatchEvent({type:W.type,data:W.inputSource}))}function j(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",j),s.removeEventListener("inputsourceschange",K);for(let W=0;W<E.length;W++){const J=y[W];J!==null&&(y[W]=null,E[W].disconnect(J))}R=null,H=null,x.reset(),e.setRenderTarget(u),m=null,h=null,f=null,s=null,A=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(B.width,B.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){o=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(W){if(s=W,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",j),s.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(B),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,J),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),A=new kt(m.framebufferWidth,m.framebufferHeight,{format:Ct,type:Sn,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,fe=null,ie=null;p.depth&&(ie=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=p.stencil?wi:Si,fe=p.stencil?Ri:Jn);const Ee={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=new XRWebGLBinding(s,t),h=f.createProjectionLayer(Ee),s.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),A=new kt(h.textureWidth,h.textureHeight,{format:Ct,type:Sn,depthTexture:new El(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(W){for(let J=0;J<W.removed.length;J++){const fe=W.removed[J],ie=y.indexOf(fe);ie>=0&&(y[ie]=null,E[ie].disconnect(fe))}for(let J=0;J<W.added.length;J++){const fe=W.added[J];let ie=y.indexOf(fe);if(ie===-1){for(let we=0;we<E.length;we++)if(we>=y.length){y.push(fe),ie=we;break}else if(y[we]===null){y[we]=fe,ie=we;break}if(ie===-1)break}const Ee=E[ie];Ee&&Ee.connect(fe)}}const k=new U,Z=new U;function G(W,J,fe){k.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(fe.matrixWorld);const ie=k.distanceTo(Z),Ee=J.projectionMatrix.elements,we=fe.projectionMatrix.elements,Ne=Ee[14]/(Ee[10]-1),nt=Ee[14]/(Ee[10]+1),Ge=(Ee[9]+1)/Ee[5],rt=(Ee[9]-1)/Ee[5],L=(Ee[8]-1)/Ee[0],Ot=(we[8]+1)/we[0],Oe=Ne*L,Be=Ne*Ot,ye=ie/(-L+Ot),Qe=ye*-L;if(J.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Qe),W.translateZ(ye),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Ee[10]===-1)W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=Ne+ye,T=nt+ye,g=Oe-Qe,F=Be+(ie-Qe),q=Ge*nt/T*Me,$=rt*nt/T*Me;W.projectionMatrix.makePerspective(g,F,q,$,Me,T),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function ne(W,J){J===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(J.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(s===null)return;let J=W.near,fe=W.far;x.texture!==null&&(x.depthNear>0&&(J=x.depthNear),x.depthFar>0&&(fe=x.depthFar)),M.near=I.near=b.near=J,M.far=I.far=b.far=fe,(R!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),R=M.near,H=M.far),b.layers.mask=W.layers.mask|2,I.layers.mask=W.layers.mask|4,M.layers.mask=b.layers.mask|I.layers.mask;const ie=W.parent,Ee=M.cameras;ne(M,ie);for(let we=0;we<Ee.length;we++)ne(Ee[we],ie);Ee.length===2?G(M,b,I):M.projectionMatrix.copy(b.projectionMatrix),ce(W,M,ie)};function ce(W,J,fe){fe===null?W.matrix.copy(J.matrixWorld):(W.matrix.copy(fe.matrixWorld),W.matrix.invert(),W.matrix.multiply(J.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(J.projectionMatrix),W.projectionMatrixInverse.copy(J.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=fa*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(W){l=W,h!==null&&(h.fixedFoveation=W),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=W)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(M)};let _e=null;function Le(W,J){if(d=J.getViewerPose(c||a),_=J,d!==null){const fe=d.views;m!==null&&(e.setRenderTargetFramebuffer(A,m.framebuffer),e.setRenderTarget(A));let ie=!1;fe.length!==M.cameras.length&&(M.cameras.length=0,ie=!0);for(let we=0;we<fe.length;we++){const Ne=fe[we];let nt=null;if(m!==null)nt=m.getViewport(Ne);else{const rt=f.getViewSubImage(h,Ne);nt=rt.viewport,we===0&&(e.setRenderTargetTextures(A,rt.colorTexture,h.ignoreDepthValues?void 0:rt.depthStencilTexture),e.setRenderTarget(A))}let Ge=S[we];Ge===void 0&&(Ge=new Gt,Ge.layers.enable(we),Ge.viewport=new at,S[we]=Ge),Ge.matrix.fromArray(Ne.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Ne.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(nt.x,nt.y,nt.width,nt.height),we===0&&(M.matrix.copy(Ge.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ie===!0&&M.cameras.push(Ge)}const Ee=s.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const we=f.getDepthInformation(fe[0]);we&&we.isValid&&we.texture&&x.init(e,we,s.renderState)}}for(let fe=0;fe<E.length;fe++){const ie=y[fe],Ee=E[fe];ie!==null&&Ee!==void 0&&Ee.update(ie,J,c||a)}_e&&_e(W,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),_=null}const Ye=new yl;Ye.setAnimationLoop(Le),this.setAnimationLoop=function(W){_e=W},this.dispose=function(){}}}const Xn=new yn,Wp=new st;function Xp(i,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,vl(i)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,A,E,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),d(p,u)):u.isMeshStandardMaterial?(r(p,u),h(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),x(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,A,E):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Pt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Pt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const A=e.get(u),E=A.envMap,y=A.envMapRotation;E&&(p.envMap.value=E,Xn.copy(y),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),p.envMapRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(Xn)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,A,E){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*A,p.scale.value=E*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function h(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,A){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Pt&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=A.texture,p.transmissionSamplerSize.value.set(A.width,A.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function x(p,u){const A=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(A.matrixWorld),p.nearDistance.value=A.shadow.camera.near,p.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function qp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(A,E){const y=E.program;n.uniformBlockBinding(A,y)}function c(A,E){let y=s[A.id];y===void 0&&(_(A),y=d(A),s[A.id]=y,A.addEventListener("dispose",p));const B=E.program;n.updateUBOMapping(A,B);const C=e.render.frame;r[A.id]!==C&&(h(A),r[A.id]=C)}function d(A){const E=f();A.__bindingPointIndex=E;const y=i.createBuffer(),B=A.__size,C=A.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,B,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,E,y),y}function f(){for(let A=0;A<o;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(A){const E=s[A.id],y=A.uniforms,B=A.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let C=0,b=y.length;C<b;C++){const I=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,M=I.length;S<M;S++){const R=I[S];if(m(R,C,S,B)===!0){const H=R.__offset,z=Array.isArray(R.value)?R.value:[R.value];let j=0;for(let K=0;K<z.length;K++){const k=z[K],Z=x(k);typeof k=="number"||typeof k=="boolean"?(R.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,H+j,R.__data)):k.isMatrix3?(R.__data[0]=k.elements[0],R.__data[1]=k.elements[1],R.__data[2]=k.elements[2],R.__data[3]=0,R.__data[4]=k.elements[3],R.__data[5]=k.elements[4],R.__data[6]=k.elements[5],R.__data[7]=0,R.__data[8]=k.elements[6],R.__data[9]=k.elements[7],R.__data[10]=k.elements[8],R.__data[11]=0):(k.toArray(R.__data,j),j+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(A,E,y,B){const C=A.value,b=E+"_"+y;if(B[b]===void 0)return typeof C=="number"||typeof C=="boolean"?B[b]=C:B[b]=C.clone(),!0;{const I=B[b];if(typeof C=="number"||typeof C=="boolean"){if(I!==C)return B[b]=C,!0}else if(I.equals(C)===!1)return I.copy(C),!0}return!1}function _(A){const E=A.uniforms;let y=0;const B=16;for(let b=0,I=E.length;b<I;b++){const S=Array.isArray(E[b])?E[b]:[E[b]];for(let M=0,R=S.length;M<R;M++){const H=S[M],z=Array.isArray(H.value)?H.value:[H.value];for(let j=0,K=z.length;j<K;j++){const k=z[j],Z=x(k),G=y%B,ne=G%Z.boundary,ce=G+ne;y+=ne,ce!==0&&B-ce<Z.storage&&(y+=B-ce),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=Z.storage}}}const C=y%B;return C>0&&(y+=B-C),A.__size=y,A.__cache={},this}function x(A){const E={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(E.boundary=4,E.storage=4):A.isVector2?(E.boundary=8,E.storage=8):A.isVector3||A.isColor?(E.boundary=16,E.storage=12):A.isVector4?(E.boundary=16,E.storage=16):A.isMatrix3?(E.boundary=48,E.storage=48):A.isMatrix4?(E.boundary=64,E.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),E}function p(A){const E=A.target;E.removeEventListener("dispose",p);const y=a.indexOf(E.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function u(){for(const A in s)i.deleteBuffer(s[A]);a=[],s={},r={}}return{bind:l,update:c,dispose:u}}class Yp{constructor(e={}){const{canvas:t=Fc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=new Uint32Array(4),x=new Int32Array(4);let p=null,u=null;const A=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Nt,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let B=!1,C=0,b=0,I=null,S=-1,M=null;const R=new at,H=new at;let z=null;const j=new ke(0);let K=0,k=t.width,Z=t.height,G=1,ne=null,ce=null;const _e=new at(0,0,k,Z),Le=new at(0,0,k,Z);let Ye=!1;const W=new Sl;let J=!1,fe=!1;const ie=new st,Ee=new st,we=new U,Ne=new at,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function rt(){return I===null?G:1}let L=n;function Ot(v,P){return t.getContext(v,P)}try{const v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${va}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",le,!1),t.addEventListener("webglcontextcreationerror",ae,!1),L===null){const P="webgl2";if(L=Ot(P,v),L===null)throw Ot(P)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Oe,Be,ye,Qe,Me,T,g,F,q,$,X,ve,re,ue,Ve,Q,he,Te,Ae,de,ze,Ue,$e,w;function se(){Oe=new $d(L),Oe.init(),Ue=new Op(L,Oe),Be=new Xd(L,Oe,e,Ue),ye=new Ip(L,Oe),Be.reverseDepthBuffer&&h&&ye.buffers.depth.setReversed(!0),Qe=new ef(L),Me=new xp,T=new Np(L,Oe,ye,Me,Be,Ue,Qe),g=new Yd(y),F=new Zd(y),q=new ou(L),$e=new kd(L,q),$=new Jd(L,q,Qe,$e),X=new nf(L,$,q,Qe),Ae=new tf(L,Be,T),Q=new qd(Me),ve=new vp(y,g,F,Oe,Be,$e,Q),re=new Xp(y,Me),ue=new Sp,Ve=new Rp(Oe),Te=new Hd(y,g,F,ye,X,m,l),he=new Lp(y,X,Be),w=new qp(L,Qe,Be,ye),de=new Wd(L,Oe,Qe),ze=new Qd(L,Oe,Qe),Qe.programs=ve.programs,y.capabilities=Be,y.extensions=Oe,y.properties=Me,y.renderLists=ue,y.shadowMap=he,y.state=ye,y.info=Qe}se();const V=new kp(y,L);this.xr=V,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const v=Oe.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Oe.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(k,Z,!1))},this.getSize=function(v){return v.set(k,Z)},this.setSize=function(v,P,N=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=v,Z=P,t.width=Math.floor(v*G),t.height=Math.floor(P*G),N===!0&&(t.style.width=v+"px",t.style.height=P+"px"),this.setViewport(0,0,v,P)},this.getDrawingBufferSize=function(v){return v.set(k*G,Z*G).floor()},this.setDrawingBufferSize=function(v,P,N){k=v,Z=P,G=N,t.width=Math.floor(v*N),t.height=Math.floor(P*N),this.setViewport(0,0,v,P)},this.getCurrentViewport=function(v){return v.copy(R)},this.getViewport=function(v){return v.copy(_e)},this.setViewport=function(v,P,N,O){v.isVector4?_e.set(v.x,v.y,v.z,v.w):_e.set(v,P,N,O),ye.viewport(R.copy(_e).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(Le)},this.setScissor=function(v,P,N,O){v.isVector4?Le.set(v.x,v.y,v.z,v.w):Le.set(v,P,N,O),ye.scissor(H.copy(Le).multiplyScalar(G).round())},this.getScissorTest=function(){return Ye},this.setScissorTest=function(v){ye.setScissorTest(Ye=v)},this.setOpaqueSort=function(v){ne=v},this.setTransparentSort=function(v){ce=v},this.getClearColor=function(v){return v.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(v=!0,P=!0,N=!0){let O=0;if(v){let D=!1;if(I!==null){const ee=I.texture.format;D=ee===Ea||ee===Ta||ee===ya}if(D){const ee=I.texture.type,oe=ee===Sn||ee===Jn||ee===Wi||ee===Ri||ee===Ma||ee===Sa,pe=Te.getClearColor(),me=Te.getClearAlpha(),Re=pe.r,Pe=pe.g,ge=pe.b;oe?(_[0]=Re,_[1]=Pe,_[2]=ge,_[3]=me,L.clearBufferuiv(L.COLOR,0,_)):(x[0]=Re,x[1]=Pe,x[2]=ge,x[3]=me,L.clearBufferiv(L.COLOR,0,x))}else O|=L.COLOR_BUFFER_BIT}P&&(O|=L.DEPTH_BUFFER_BIT),N&&(O|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",le,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),ue.dispose(),Ve.dispose(),Me.dispose(),g.dispose(),F.dispose(),X.dispose(),$e.dispose(),w.dispose(),ve.dispose(),V.dispose(),V.removeEventListener("sessionstart",Ia),V.removeEventListener("sessionend",Fa),zn.stop()};function Y(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),B=!0}function le(){console.log("THREE.WebGLRenderer: Context Restored."),B=!1;const v=Qe.autoReset,P=he.enabled,N=he.autoUpdate,O=he.needsUpdate,D=he.type;se(),Qe.autoReset=v,he.enabled=P,he.autoUpdate=N,he.needsUpdate=O,he.type=D}function ae(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Ce(v){const P=v.target;P.removeEventListener("dispose",Ce),it(P)}function it(v){_t(v),Me.remove(v)}function _t(v){const P=Me.get(v).programs;P!==void 0&&(P.forEach(function(N){ve.releaseProgram(N)}),v.isShaderMaterial&&ve.releaseShaderCache(v))}this.renderBufferDirect=function(v,P,N,O,D,ee){P===null&&(P=nt);const oe=D.isMesh&&D.matrixWorld.determinant()<0,pe=Hl(v,P,N,O,D);ye.setMaterial(O,oe);let me=N.index,Re=1;if(O.wireframe===!0){if(me=$.getWireframeAttribute(N),me===void 0)return;Re=2}const Pe=N.drawRange,ge=N.attributes.position;let We=Pe.start*Re,Je=(Pe.start+Pe.count)*Re;ee!==null&&(We=Math.max(We,ee.start*Re),Je=Math.min(Je,(ee.start+ee.count)*Re)),me!==null?(We=Math.max(We,0),Je=Math.min(Je,me.count)):ge!=null&&(We=Math.max(We,0),Je=Math.min(Je,ge.count));const et=Je-We;if(et<0||et===1/0)return;$e.setup(D,O,pe,N,me);let bt,Xe=de;if(me!==null&&(bt=q.get(me),Xe=ze,Xe.setIndex(bt)),D.isMesh)O.wireframe===!0?(ye.setLineWidth(O.wireframeLinewidth*rt()),Xe.setMode(L.LINES)):Xe.setMode(L.TRIANGLES);else if(D.isLine){let xe=O.linewidth;xe===void 0&&(xe=1),ye.setLineWidth(xe*rt()),D.isLineSegments?Xe.setMode(L.LINES):D.isLineLoop?Xe.setMode(L.LINE_LOOP):Xe.setMode(L.LINE_STRIP)}else D.isPoints?Xe.setMode(L.POINTS):D.isSprite&&Xe.setMode(L.TRIANGLES);if(D.isBatchedMesh)if(D._multiDrawInstances!==null)Xe.renderMultiDrawInstances(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount,D._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Xe.renderMultiDraw(D._multiDrawStarts,D._multiDrawCounts,D._multiDrawCount);else{const xe=D._multiDrawStarts,an=D._multiDrawCounts,qe=D._multiDrawCount,qt=me?q.get(me).bytesPerElement:1,ni=Me.get(O).currentProgram.getUniforms();for(let Lt=0;Lt<qe;Lt++)ni.setValue(L,"_gl_DrawID",Lt),Xe.render(xe[Lt]/qt,an[Lt])}else if(D.isInstancedMesh)Xe.renderInstances(We,et,D.count);else if(N.isInstancedBufferGeometry){const xe=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,an=Math.min(N.instanceCount,xe);Xe.renderInstances(We,et,an)}else Xe.render(We,et)};function Ke(v,P,N){v.transparent===!0&&v.side===mn&&v.forceSinglePass===!1?(v.side=Pt,v.needsUpdate=!0,Qi(v,P,N),v.side=On,v.needsUpdate=!0,Qi(v,P,N),v.side=mn):Qi(v,P,N)}this.compile=function(v,P,N=null){N===null&&(N=v),u=Ve.get(N),u.init(P),E.push(u),N.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),v!==N&&v.traverseVisible(function(D){D.isLight&&D.layers.test(P.layers)&&(u.pushLight(D),D.castShadow&&u.pushShadow(D))}),u.setupLights();const O=new Set;return v.traverse(function(D){if(!(D.isMesh||D.isPoints||D.isLine||D.isSprite))return;const ee=D.material;if(ee)if(Array.isArray(ee))for(let oe=0;oe<ee.length;oe++){const pe=ee[oe];Ke(pe,N,D),O.add(pe)}else Ke(ee,N,D),O.add(ee)}),E.pop(),u=null,O},this.compileAsync=function(v,P,N=null){const O=this.compile(v,P,N);return new Promise(D=>{function ee(){if(O.forEach(function(oe){Me.get(oe).currentProgram.isReady()&&O.delete(oe)}),O.size===0){D(v);return}setTimeout(ee,10)}Oe.get("KHR_parallel_shader_compile")!==null?ee():setTimeout(ee,10)})};let Xt=null;function rn(v){Xt&&Xt(v)}function Ia(){zn.stop()}function Fa(){zn.start()}const zn=new yl;zn.setAnimationLoop(rn),typeof self<"u"&&zn.setContext(self),this.setAnimationLoop=function(v){Xt=v,V.setAnimationLoop(v),v===null?zn.stop():zn.start()},V.addEventListener("sessionstart",Ia),V.addEventListener("sessionend",Fa),this.render=function(v,P){if(P!==void 0&&P.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(P),P=V.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,P,I),u=Ve.get(v,E.length),u.init(P),E.push(u),Ee.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),W.setFromProjectionMatrix(Ee),fe=this.localClippingEnabled,J=Q.init(this.clippingPlanes,fe),p=ue.get(v,A.length),p.init(),A.push(p),V.enabled===!0&&V.isPresenting===!0){const ee=y.xr.getDepthSensingMesh();ee!==null&&$s(ee,P,-1/0,y.sortObjects)}$s(v,P,0,y.sortObjects),p.finish(),y.sortObjects===!0&&p.sort(ne,ce),Ge=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Ge&&Te.addToRenderList(p,v),this.info.render.frame++,J===!0&&Q.beginShadows();const N=u.state.shadowsArray;he.render(N,v,P),J===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,D=p.transmissive;if(u.setupLights(),P.isArrayCamera){const ee=P.cameras;if(D.length>0)for(let oe=0,pe=ee.length;oe<pe;oe++){const me=ee[oe];Oa(O,D,v,me)}Ge&&Te.render(v);for(let oe=0,pe=ee.length;oe<pe;oe++){const me=ee[oe];Na(p,v,me,me.viewport)}}else D.length>0&&Oa(O,D,v,P),Ge&&Te.render(v),Na(p,v,P);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),v.isScene===!0&&v.onAfterRender(y,v,P),$e.resetDefaultState(),S=-1,M=null,E.pop(),E.length>0?(u=E[E.length-1],J===!0&&Q.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,A.pop(),A.length>0?p=A[A.length-1]:p=null};function $s(v,P,N,O){if(v.visible===!1)return;if(v.layers.test(P.layers)){if(v.isGroup)N=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(P);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||W.intersectsSprite(v)){O&&Ne.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ee);const oe=X.update(v),pe=v.material;pe.visible&&p.push(v,oe,pe,N,Ne.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||W.intersectsObject(v))){const oe=X.update(v),pe=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ne.copy(v.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ne.copy(oe.boundingSphere.center)),Ne.applyMatrix4(v.matrixWorld).applyMatrix4(Ee)),Array.isArray(pe)){const me=oe.groups;for(let Re=0,Pe=me.length;Re<Pe;Re++){const ge=me[Re],We=pe[ge.materialIndex];We&&We.visible&&p.push(v,oe,We,N,Ne.z,ge)}}else pe.visible&&p.push(v,oe,pe,N,Ne.z,null)}}const ee=v.children;for(let oe=0,pe=ee.length;oe<pe;oe++)$s(ee[oe],P,N,O)}function Na(v,P,N,O){const D=v.opaque,ee=v.transmissive,oe=v.transparent;u.setupLightsView(N),J===!0&&Q.setGlobalState(y.clippingPlanes,N),O&&ye.viewport(R.copy(O)),D.length>0&&Ji(D,P,N),ee.length>0&&Ji(ee,P,N),oe.length>0&&Ji(oe,P,N),ye.buffers.depth.setTest(!0),ye.buffers.depth.setMask(!0),ye.buffers.color.setMask(!0),ye.setPolygonOffset(!1)}function Oa(v,P,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new kt(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?sn:Sn,minFilter:Zn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const ee=u.state.transmissionRenderTarget[O.id],oe=O.viewport||R;ee.setSize(oe.z,oe.w);const pe=y.getRenderTarget();y.setRenderTarget(ee),y.getClearColor(j),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&Te.render(N);const me=y.toneMapping;y.toneMapping=Nn;const Re=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),J===!0&&Q.setGlobalState(y.clippingPlanes,O),Ji(v,N,O),T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let Pe=!1;for(let ge=0,We=P.length;ge<We;ge++){const Je=P[ge],et=Je.object,bt=Je.geometry,Xe=Je.material,xe=Je.group;if(Xe.side===mn&&et.layers.test(O.layers)){const an=Xe.side;Xe.side=Pt,Xe.needsUpdate=!0,Ba(et,N,O,bt,Xe,xe),Xe.side=an,Xe.needsUpdate=!0,Pe=!0}}Pe===!0&&(T.updateMultisampleRenderTarget(ee),T.updateRenderTargetMipmap(ee))}y.setRenderTarget(pe),y.setClearColor(j,K),Re!==void 0&&(O.viewport=Re),y.toneMapping=me}function Ji(v,P,N){const O=P.isScene===!0?P.overrideMaterial:null;for(let D=0,ee=v.length;D<ee;D++){const oe=v[D],pe=oe.object,me=oe.geometry,Re=O===null?oe.material:O,Pe=oe.group;pe.layers.test(N.layers)&&Ba(pe,P,N,me,Re,Pe)}}function Ba(v,P,N,O,D,ee){v.onBeforeRender(y,P,N,O,D,ee),v.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),D.onBeforeRender(y,P,N,O,v,ee),D.transparent===!0&&D.side===mn&&D.forceSinglePass===!1?(D.side=Pt,D.needsUpdate=!0,y.renderBufferDirect(N,P,O,D,v,ee),D.side=On,D.needsUpdate=!0,y.renderBufferDirect(N,P,O,D,v,ee),D.side=mn):y.renderBufferDirect(N,P,O,D,v,ee),v.onAfterRender(y,P,N,O,D,ee)}function Qi(v,P,N){P.isScene!==!0&&(P=nt);const O=Me.get(v),D=u.state.lights,ee=u.state.shadowsArray,oe=D.state.version,pe=ve.getParameters(v,D.state,ee,P,N),me=ve.getProgramCacheKey(pe);let Re=O.programs;O.environment=v.isMeshStandardMaterial?P.environment:null,O.fog=P.fog,O.envMap=(v.isMeshStandardMaterial?F:g).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?P.environmentRotation:v.envMapRotation,Re===void 0&&(v.addEventListener("dispose",Ce),Re=new Map,O.programs=Re);let Pe=Re.get(me);if(Pe!==void 0){if(O.currentProgram===Pe&&O.lightsStateVersion===oe)return Ga(v,pe),Pe}else pe.uniforms=ve.getUniforms(v),v.onBeforeCompile(pe,y),Pe=ve.acquireProgram(pe,me),Re.set(me,Pe),O.uniforms=pe.uniforms;const ge=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(ge.clippingPlanes=Q.uniform),Ga(v,pe),O.needsLights=Wl(v),O.lightsStateVersion=oe,O.needsLights&&(ge.ambientLightColor.value=D.state.ambient,ge.lightProbe.value=D.state.probe,ge.directionalLights.value=D.state.directional,ge.directionalLightShadows.value=D.state.directionalShadow,ge.spotLights.value=D.state.spot,ge.spotLightShadows.value=D.state.spotShadow,ge.rectAreaLights.value=D.state.rectArea,ge.ltc_1.value=D.state.rectAreaLTC1,ge.ltc_2.value=D.state.rectAreaLTC2,ge.pointLights.value=D.state.point,ge.pointLightShadows.value=D.state.pointShadow,ge.hemisphereLights.value=D.state.hemi,ge.directionalShadowMap.value=D.state.directionalShadowMap,ge.directionalShadowMatrix.value=D.state.directionalShadowMatrix,ge.spotShadowMap.value=D.state.spotShadowMap,ge.spotLightMatrix.value=D.state.spotLightMatrix,ge.spotLightMap.value=D.state.spotLightMap,ge.pointShadowMap.value=D.state.pointShadowMap,ge.pointShadowMatrix.value=D.state.pointShadowMatrix),O.currentProgram=Pe,O.uniformsList=null,Pe}function za(v){if(v.uniformsList===null){const P=v.currentProgram.getUniforms();v.uniformsList=Us.seqWithValue(P.seq,v.uniforms)}return v.uniformsList}function Ga(v,P){const N=Me.get(v);N.outputColorSpace=P.outputColorSpace,N.batching=P.batching,N.batchingColor=P.batchingColor,N.instancing=P.instancing,N.instancingColor=P.instancingColor,N.instancingMorph=P.instancingMorph,N.skinning=P.skinning,N.morphTargets=P.morphTargets,N.morphNormals=P.morphNormals,N.morphColors=P.morphColors,N.morphTargetsCount=P.morphTargetsCount,N.numClippingPlanes=P.numClippingPlanes,N.numIntersection=P.numClipIntersection,N.vertexAlphas=P.vertexAlphas,N.vertexTangents=P.vertexTangents,N.toneMapping=P.toneMapping}function Hl(v,P,N,O,D){P.isScene!==!0&&(P=nt),T.resetTextureUnits();const ee=P.fog,oe=O.isMeshStandardMaterial?P.environment:null,pe=I===null?y.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:Di,me=(O.isMeshStandardMaterial?F:g).get(O.envMap||oe),Re=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Pe=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),ge=!!N.morphAttributes.position,We=!!N.morphAttributes.normal,Je=!!N.morphAttributes.color;let et=Nn;O.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(et=y.toneMapping);const bt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Xe=bt!==void 0?bt.length:0,xe=Me.get(O),an=u.state.lights;if(J===!0&&(fe===!0||v!==M)){const Bt=v===M&&O.id===S;Q.setState(O,v,Bt)}let qe=!1;O.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==an.state.version||xe.outputColorSpace!==pe||D.isBatchedMesh&&xe.batching===!1||!D.isBatchedMesh&&xe.batching===!0||D.isBatchedMesh&&xe.batchingColor===!0&&D.colorTexture===null||D.isBatchedMesh&&xe.batchingColor===!1&&D.colorTexture!==null||D.isInstancedMesh&&xe.instancing===!1||!D.isInstancedMesh&&xe.instancing===!0||D.isSkinnedMesh&&xe.skinning===!1||!D.isSkinnedMesh&&xe.skinning===!0||D.isInstancedMesh&&xe.instancingColor===!0&&D.instanceColor===null||D.isInstancedMesh&&xe.instancingColor===!1&&D.instanceColor!==null||D.isInstancedMesh&&xe.instancingMorph===!0&&D.morphTexture===null||D.isInstancedMesh&&xe.instancingMorph===!1&&D.morphTexture!==null||xe.envMap!==me||O.fog===!0&&xe.fog!==ee||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Q.numPlanes||xe.numIntersection!==Q.numIntersection)||xe.vertexAlphas!==Re||xe.vertexTangents!==Pe||xe.morphTargets!==ge||xe.morphNormals!==We||xe.morphColors!==Je||xe.toneMapping!==et||xe.morphTargetsCount!==Xe)&&(qe=!0):(qe=!0,xe.__version=O.version);let qt=xe.currentProgram;qe===!0&&(qt=Qi(O,P,D));let ni=!1,Lt=!1,Ui=!1;const tt=qt.getUniforms(),Qt=xe.uniforms;if(ye.useProgram(qt.program)&&(ni=!0,Lt=!0,Ui=!0),O.id!==S&&(S=O.id,Lt=!0),ni||M!==v){ye.buffers.depth.getReversed()?(ie.copy(v.projectionMatrix),Oc(ie),Bc(ie),tt.setValue(L,"projectionMatrix",ie)):tt.setValue(L,"projectionMatrix",v.projectionMatrix),tt.setValue(L,"viewMatrix",v.matrixWorldInverse);const An=tt.map.cameraPosition;An!==void 0&&An.setValue(L,we.setFromMatrixPosition(v.matrixWorld)),Be.logarithmicDepthBuffer&&tt.setValue(L,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&tt.setValue(L,"isOrthographic",v.isOrthographicCamera===!0),M!==v&&(M=v,Lt=!0,Ui=!0)}if(D.isSkinnedMesh){tt.setOptional(L,D,"bindMatrix"),tt.setOptional(L,D,"bindMatrixInverse");const Bt=D.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),tt.setValue(L,"boneTexture",Bt.boneTexture,T))}D.isBatchedMesh&&(tt.setOptional(L,D,"batchingTexture"),tt.setValue(L,"batchingTexture",D._matricesTexture,T),tt.setOptional(L,D,"batchingIdTexture"),tt.setValue(L,"batchingIdTexture",D._indirectTexture,T),tt.setOptional(L,D,"batchingColorTexture"),D._colorsTexture!==null&&tt.setValue(L,"batchingColorTexture",D._colorsTexture,T));const Ii=N.morphAttributes;if((Ii.position!==void 0||Ii.normal!==void 0||Ii.color!==void 0)&&Ae.update(D,N,qt),(Lt||xe.receiveShadow!==D.receiveShadow)&&(xe.receiveShadow=D.receiveShadow,tt.setValue(L,"receiveShadow",D.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Qt.envMap.value=me,Qt.flipEnvMap.value=me.isCubeTexture&&me.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&P.environment!==null&&(Qt.envMapIntensity.value=P.environmentIntensity),Lt&&(tt.setValue(L,"toneMappingExposure",y.toneMappingExposure),xe.needsLights&&kl(Qt,Ui),ee&&O.fog===!0&&re.refreshFogUniforms(Qt,ee),re.refreshMaterialUniforms(Qt,O,G,Z,u.state.transmissionRenderTarget[v.id]),Us.upload(L,za(xe),Qt,T)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Us.upload(L,za(xe),Qt,T),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&tt.setValue(L,"center",D.center),tt.setValue(L,"modelViewMatrix",D.modelViewMatrix),tt.setValue(L,"normalMatrix",D.normalMatrix),tt.setValue(L,"modelMatrix",D.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Bt=O.uniformsGroups;for(let An=0,bn=Bt.length;An<bn;An++){const Va=Bt[An];w.update(Va,qt),w.bind(Va,qt)}}return qt}function kl(v,P){v.ambientLightColor.needsUpdate=P,v.lightProbe.needsUpdate=P,v.directionalLights.needsUpdate=P,v.directionalLightShadows.needsUpdate=P,v.pointLights.needsUpdate=P,v.pointLightShadows.needsUpdate=P,v.spotLights.needsUpdate=P,v.spotLightShadows.needsUpdate=P,v.rectAreaLights.needsUpdate=P,v.hemisphereLights.needsUpdate=P}function Wl(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(v,P,N){Me.get(v.texture).__webglTexture=P,Me.get(v.depthTexture).__webglTexture=N;const O=Me.get(v);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=N===void 0,O.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,P){const N=Me.get(v);N.__webglFramebuffer=P,N.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(v,P=0,N=0){I=v,C=P,b=N;let O=!0,D=null,ee=!1,oe=!1;if(v){const me=Me.get(v);if(me.__useDefaultFramebuffer!==void 0)ye.bindFramebuffer(L.FRAMEBUFFER,null),O=!1;else if(me.__webglFramebuffer===void 0)T.setupRenderTarget(v);else if(me.__hasExternalTextures)T.rebindTextures(v,Me.get(v.texture).__webglTexture,Me.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const ge=v.depthTexture;if(me.__boundDepthTexture!==ge){if(ge!==null&&Me.has(ge)&&(v.width!==ge.image.width||v.height!==ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(v)}}const Re=v.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(oe=!0);const Pe=Me.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Pe[P])?D=Pe[P][N]:D=Pe[P],ee=!0):v.samples>0&&T.useMultisampledRTT(v)===!1?D=Me.get(v).__webglMultisampledFramebuffer:Array.isArray(Pe)?D=Pe[N]:D=Pe,R.copy(v.viewport),H.copy(v.scissor),z=v.scissorTest}else R.copy(_e).multiplyScalar(G).floor(),H.copy(Le).multiplyScalar(G).floor(),z=Ye;if(ye.bindFramebuffer(L.FRAMEBUFFER,D)&&O&&ye.drawBuffers(v,D),ye.viewport(R),ye.scissor(H),ye.setScissorTest(z),ee){const me=Me.get(v.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+P,me.__webglTexture,N)}else if(oe){const me=Me.get(v.texture),Re=P||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,me.__webglTexture,N||0,Re)}S=-1},this.readRenderTargetPixels=function(v,P,N,O,D,ee,oe){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){ye.bindFramebuffer(L.FRAMEBUFFER,pe);try{const me=v.texture,Re=me.format,Pe=me.type;if(!Be.textureFormatReadable(Re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Be.textureTypeReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=v.width-O&&N>=0&&N<=v.height-D&&L.readPixels(P,N,O,D,Ue.convert(Re),Ue.convert(Pe),ee)}finally{const me=I!==null?Me.get(I).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(v,P,N,O,D,ee,oe){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Me.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&oe!==void 0&&(pe=pe[oe]),pe){const me=v.texture,Re=me.format,Pe=me.type;if(!Be.textureFormatReadable(Re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Be.textureTypeReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(P>=0&&P<=v.width-O&&N>=0&&N<=v.height-D){ye.bindFramebuffer(L.FRAMEBUFFER,pe);const ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.bufferData(L.PIXEL_PACK_BUFFER,ee.byteLength,L.STREAM_READ),L.readPixels(P,N,O,D,Ue.convert(Re),Ue.convert(Pe),0);const We=I!==null?Me.get(I).__webglFramebuffer:null;ye.bindFramebuffer(L.FRAMEBUFFER,We);const Je=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Nc(L,Je,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,ee),L.deleteBuffer(ge),L.deleteSync(Je),ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,P=null,N=0){v.isTexture!==!0&&(Vi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),P=arguments[0]||null,v=arguments[1]);const O=Math.pow(2,-N),D=Math.floor(v.image.width*O),ee=Math.floor(v.image.height*O),oe=P!==null?P.x:0,pe=P!==null?P.y:0;T.setTexture2D(v,0),L.copyTexSubImage2D(L.TEXTURE_2D,N,0,0,oe,pe,D,ee),ye.unbindTexture()},this.copyTextureToTexture=function(v,P,N=null,O=null,D=0){v.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,v=arguments[1],P=arguments[2],D=arguments[3]||0,N=null);let ee,oe,pe,me,Re,Pe,ge,We,Je;const et=v.isCompressedTexture?v.mipmaps[D]:v.image;N!==null?(ee=N.max.x-N.min.x,oe=N.max.y-N.min.y,pe=N.isBox3?N.max.z-N.min.z:1,me=N.min.x,Re=N.min.y,Pe=N.isBox3?N.min.z:0):(ee=et.width,oe=et.height,pe=et.depth||1,me=0,Re=0,Pe=0),O!==null?(ge=O.x,We=O.y,Je=O.z):(ge=0,We=0,Je=0);const bt=Ue.convert(P.format),Xe=Ue.convert(P.type);let xe;P.isData3DTexture?(T.setTexture3D(P,0),xe=L.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(T.setTexture2DArray(P,0),xe=L.TEXTURE_2D_ARRAY):(T.setTexture2D(P,0),xe=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,P.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,P.unpackAlignment);const an=L.getParameter(L.UNPACK_ROW_LENGTH),qe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qt=L.getParameter(L.UNPACK_SKIP_PIXELS),ni=L.getParameter(L.UNPACK_SKIP_ROWS),Lt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,et.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,et.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,me),L.pixelStorei(L.UNPACK_SKIP_ROWS,Re),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Pe);const Ui=v.isDataArrayTexture||v.isData3DTexture,tt=P.isDataArrayTexture||P.isData3DTexture;if(v.isRenderTargetTexture||v.isDepthTexture){const Qt=Me.get(v),Ii=Me.get(P),Bt=Me.get(Qt.__renderTarget),An=Me.get(Ii.__renderTarget);ye.bindFramebuffer(L.READ_FRAMEBUFFER,Bt.__webglFramebuffer),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,An.__webglFramebuffer);for(let bn=0;bn<pe;bn++)Ui&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(v).__webglTexture,D,Pe+bn),v.isDepthTexture?(tt&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Me.get(P).__webglTexture,D,Je+bn),L.blitFramebuffer(me,Re,ee,oe,ge,We,ee,oe,L.DEPTH_BUFFER_BIT,L.NEAREST)):tt?L.copyTexSubImage3D(xe,D,ge,We,Je+bn,me,Re,ee,oe):L.copyTexSubImage2D(xe,D,ge,We,Je+bn,me,Re,ee,oe);ye.bindFramebuffer(L.READ_FRAMEBUFFER,null),ye.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tt?v.isDataTexture||v.isData3DTexture?L.texSubImage3D(xe,D,ge,We,Je,ee,oe,pe,bt,Xe,et.data):P.isCompressedArrayTexture?L.compressedTexSubImage3D(xe,D,ge,We,Je,ee,oe,pe,bt,et.data):L.texSubImage3D(xe,D,ge,We,Je,ee,oe,pe,bt,Xe,et):v.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,D,ge,We,ee,oe,bt,Xe,et.data):v.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,D,ge,We,et.width,et.height,bt,et.data):L.texSubImage2D(L.TEXTURE_2D,D,ge,We,ee,oe,bt,Xe,et);L.pixelStorei(L.UNPACK_ROW_LENGTH,an),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,qe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ni),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Lt),D===0&&P.generateMipmaps&&L.generateMipmap(xe),ye.unbindTexture()},this.copyTextureToTexture3D=function(v,P,N=null,O=null,D=0){return v.isTexture!==!0&&(Vi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,O=arguments[1]||null,v=arguments[2],P=arguments[3],D=arguments[4]||0),Vi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(v,P,N,O,D)},this.initRenderTarget=function(v){Me.get(v).__webglFramebuffer===void 0&&T.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?T.setTextureCube(v,0):v.isData3DTexture?T.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?T.setTexture2DArray(v,0):T.setTexture2D(v,0),ye.unbindTexture()},this.resetState=function(){C=0,b=0,I=null,ye.reset(),$e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}class Kp extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yn,this.environmentIntensity=1,this.environmentRotation=new yn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Cl extends Et{constructor(e=null,t=1,n=1,s,r,a,o,l,c=mt,d=mt,f,h){super(null,a,o,l,c,d,s,r,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Pl extends Ki{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Go=new st,ma=new Ws,ys=new ks,Ts=new U;class wa extends Dt{constructor(e=new Wt,t=new Pl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ys.copy(n.boundingSphere),ys.applyMatrix4(s),ys.radius+=r,e.ray.intersectsSphere(ys)===!1)return;Go.copy(s).invert(),ma.copy(e.ray).applyMatrix4(Go);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,f=n.attributes.position;if(c!==null){const h=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=h,x=m;_<x;_++){const p=c.getX(_);Ts.fromBufferAttribute(f,p),Vo(Ts,p,l,s,e,t,this)}}else{const h=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let _=h,x=m;_<x;_++)Ts.fromBufferAttribute(f,_),Vo(Ts,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Vo(i,e,t,n,s,r,a){const o=ma.distanceSqToPoint(i);if(o<t){const l=new U;ma.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Dl{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ho(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ho();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ho(){return performance.now()}const ko=new st;class jp{constructor(e,t,n=0,s=1/0){this.ray=new Ws(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Aa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ko.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ko),this}intersectObject(e,t=!0,n=[]){return ga(e,this,n,t),n.sort(Wo),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ga(e[s],this,n,t);return n.sort(Wo),n}}function Wo(i,e){return i.distance-e.distance}function ga(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)ga(r[a],e,t,!0)}}class Xo{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Zp extends ti{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=va);class Zi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $p=new Tl(-1,1,1,-1,0,1);class Jp extends Wt{constructor(){super(),this.setAttribute("position",new Mn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Mn([0,2,0,0,2,0],2))}}const Qp=new Jp;class Ca{constructor(e){this._mesh=new nn(Qp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$p)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class em{constructor(e,t,n){this.variables=[],this.currentTextureIndex=0;let s=Ht;const r={passThruTexture:{value:null}},a=c(f(),r),o=new Ca(a);this.setDataType=function(h){return s=h,this},this.addVariable=function(h,m,_){const x=this.createShaderMaterial(m),p={name:h,initialValueTexture:_,material:x,dependencies:null,renderTargets:[],wrapS:null,wrapT:null,minFilter:mt,magFilter:mt};return this.variables.push(p),p},this.setVariableDependencies=function(h,m){h.dependencies=m},this.init=function(){if(n.capabilities.maxVertexTextures===0)return"No support for vertex shader textures.";for(let h=0;h<this.variables.length;h++){const m=this.variables[h];m.renderTargets[0]=this.createRenderTarget(e,t,m.wrapS,m.wrapT,m.minFilter,m.magFilter),m.renderTargets[1]=this.createRenderTarget(e,t,m.wrapS,m.wrapT,m.minFilter,m.magFilter),this.renderTexture(m.initialValueTexture,m.renderTargets[0]),this.renderTexture(m.initialValueTexture,m.renderTargets[1]);const _=m.material,x=_.uniforms;if(m.dependencies!==null)for(let p=0;p<m.dependencies.length;p++){const u=m.dependencies[p];if(u.name!==m.name){let A=!1;for(let E=0;E<this.variables.length;E++)if(u.name===this.variables[E].name){A=!0;break}if(!A)return"Variable dependency not found. Variable="+m.name+", dependency="+u.name}x[u.name]={value:null},_.fragmentShader=`
uniform sampler2D `+u.name+`;
`+_.fragmentShader}}return this.currentTextureIndex=0,null},this.compute=function(){const h=this.currentTextureIndex,m=this.currentTextureIndex===0?1:0;for(let _=0,x=this.variables.length;_<x;_++){const p=this.variables[_];if(p.dependencies!==null){const u=p.material.uniforms;for(let A=0,E=p.dependencies.length;A<E;A++){const y=p.dependencies[A];u[y.name].value=y.renderTargets[h].texture}}this.doRenderTarget(p.material,p.renderTargets[m])}this.currentTextureIndex=m},this.getCurrentRenderTarget=function(h){return h.renderTargets[this.currentTextureIndex]},this.getAlternateRenderTarget=function(h){return h.renderTargets[this.currentTextureIndex===0?1:0]},this.dispose=function(){o.dispose();const h=this.variables;for(let m=0;m<h.length;m++){const _=h[m];_.initialValueTexture&&_.initialValueTexture.dispose();const x=_.renderTargets;for(let p=0;p<x.length;p++)x[p].dispose()}};function l(h){h.defines.resolution="vec2( "+e.toFixed(1)+", "+t.toFixed(1)+" )"}this.addResolutionDefine=l;function c(h,m){m=m||{};const _=new gt({name:"GPUComputationShader",uniforms:m,vertexShader:d(),fragmentShader:h});return l(_),_}this.createShaderMaterial=c,this.createRenderTarget=function(h,m,_,x,p,u){return h=h||e,m=m||t,_=_||Jt,x=x||Jt,p=p||mt,u=u||mt,new kt(h,m,{wrapS:_,wrapT:x,minFilter:p,magFilter:u,format:Ct,type:s,depthBuffer:!1})},this.createTexture=function(){const h=new Float32Array(e*t*4),m=new Cl(h,e,t,Ct,Ht);return m.needsUpdate=!0,m},this.renderTexture=function(h,m){r.passThruTexture.value=h,this.doRenderTarget(a,m),r.passThruTexture.value=null},this.doRenderTarget=function(h,m){const _=n.getRenderTarget(),x=n.xr.enabled,p=n.shadowMap.autoUpdate;n.xr.enabled=!1,n.shadowMap.autoUpdate=!1,o.material=h,n.setRenderTarget(m),o.render(n),o.material=a,n.xr.enabled=x,n.shadowMap.autoUpdate=p,n.setRenderTarget(_)};function d(){return`void main()	{

	gl_Position = vec4( position, 1.0 );

}
`}function f(){return`uniform sampler2D passThruTexture;

void main() {

	vec2 uv = gl_FragCoord.xy / resolution.xy;

	gl_FragColor = texture2D( passThruTexture, uv );

}
`}}}const Ll={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ul extends Zi{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Os.clone(e.uniforms),this.material=new gt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ca(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qo extends Zi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class tm extends Zi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nm{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Se);this._width=n.width,this._height=n.height,t=new kt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:sn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ul(Ll),this.copyPass.material.blending=vn,this.clock=new Dl}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}qo!==void 0&&(a instanceof qo?n=!0:a instanceof tm&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Se);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class im extends Zi{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ke}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const sm={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ke(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Pi extends Zi{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Se(e.x,e.y):new Se(256,256),this.clearColor=new ke(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new kt(r,a,{type:sn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new kt(r,a,{type:sn});h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const m=new kt(r,a,{type:sn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=sm;this.highPassUniforms=Os.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new gt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new Se(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=Ll;this.copyUniforms=Os.clone(d.uniforms),this.blendMaterial=new gt({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:ki,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new ke,this.oldClearAlpha=1,this.basic=new ba,this.fsQuad=new Ca(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Se(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Pi.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Pi.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new gt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Se(.5,.5)},direction:{value:new Se(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new gt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Pi.BlurDirectionX=new Se(1,0);Pi.BlurDirectionY=new Se(0,1);const Yo={type:"change"},Pa={type:"start"},Il={type:"end"},Es=new Ws,Ko=new pn,rm=Math.cos(70*Ic.DEG2RAD),ct=new U,wt=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Rr=1e-6;class am extends Zp{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xi.ROTATE,MIDDLE:xi.DOLLY,RIGHT:xi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Qn,this._lastTargetPosition=new U,this._quat=new Qn().setFromUnitVectors(e.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xo,this._sphericalDelta=new Xo,this._scale=1,this._panOffset=new U,this._rotateStart=new Se,this._rotateEnd=new Se,this._rotateDelta=new Se,this._panStart=new Se,this._panEnd=new Se,this._panDelta=new Se,this._dollyStart=new Se,this._dollyEnd=new Se,this._dollyDelta=new Se,this._dollyDirection=new U,this._mouse=new Se,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=lm.bind(this),this._onPointerDown=om.bind(this),this._onPointerUp=cm.bind(this),this._onContextMenu=gm.bind(this),this._onMouseWheel=dm.bind(this),this._onKeyDown=fm.bind(this),this._onTouchStart=pm.bind(this),this._onTouchMove=mm.bind(this),this._onMouseDown=um.bind(this),this._onMouseMove=hm.bind(this),this._interceptControlDown=_m.bind(this),this._interceptControlUp=vm.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Yo),this.update(),this.state=Ze.NONE}update(e=null){const t=this.object.position;ct.copy(t).sub(this.target),ct.applyQuaternion(this._quat),this._spherical.setFromVector3(ct),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=wt:n>Math.PI&&(n-=wt),s<-Math.PI?s+=wt:s>Math.PI&&(s-=wt),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ct.setFromSpherical(this._spherical),ct.applyQuaternion(this._quatInverse),t.copy(this.target).add(ct),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ct.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new U(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new U(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),a=ct.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Es.origin.copy(this.object.position),Es.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Es.direction))<rm?this.object.lookAt(this.target):(Ko.setFromNormalAndCoplanarPoint(this.object.up,this.target),Es.intersectPlane(Ko,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Rr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Rr||this._lastTargetPosition.distanceToSquared(this.target)>Rr?(this.dispatchEvent(Yo),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?wt/60*this.autoRotateSpeed*e:wt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ct.setFromMatrixColumn(t,0),ct.multiplyScalar(-e),this._panOffset.add(ct)}_panUp(e,t){this.screenSpacePanning===!0?ct.setFromMatrixColumn(t,1):(ct.setFromMatrixColumn(t,0),ct.crossVectors(this.object.up,ct)),ct.multiplyScalar(e),this._panOffset.add(ct)}_pan(e,t){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ct.copy(s).sub(this.target);let r=ct.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-wt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(wt*this._rotateDelta.x/t.clientHeight),this._rotateUp(wt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Se,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function om(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function lm(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function cm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Il),this.state=Ze.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function um(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case xi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Ze.DOLLY;break;case xi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ze.ROTATE}break;case xi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Pa)}function hm(i){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function dm(i){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(i.preventDefault(),this.dispatchEvent(Pa),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Il))}function fm(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function pm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case _i.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Ze.TOUCH_ROTATE;break;case _i.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case _i.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Ze.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Pa)}function mm(i){switch(this._trackPointer(i),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Ze.NONE}}function gm(i){this.enabled!==!1&&i.preventDefault()}function _m(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function vm(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class xm{constructor(){this.time=0,this.phase=0,this.phaseName="SINGULARITY",this.expansionRate=0,this.temperature=1e12,this.gravityStrength=0,this.started=!1,this._prevPhase=-1,this.galaxySeed=Math.random()*1e4,this.numGalaxies=6+Math.floor(Math.random()*12),this.supernovaIntensity=0,this.starFormationRate=0,this.quantumJitter=0,this.cycleCount=0,this.needsReseed=!1,this.epochs=[{name:"SINGULARITY",end:4},{name:"COSMIC INFLATION",end:9},{name:"QUARK-GLUON PLASMA",end:14},{name:"HADRON EPOCH",end:19},{name:"NUCLEOSYNTHESIS",end:26},{name:"RECOMBINATION",end:34},{name:"STELLAR IGNITION",end:44},{name:"GALAXY FORMATION",end:58},{name:"STELLAR EVOLUTION",end:70},{name:"SUPERNOVA ERA",end:80},{name:"HEAT DEATH",end:95}]}start(){this.started=!0,this.time=0}restart(){this.time=0,this.phase=0,this._prevPhase=-1,this.phaseName="SINGULARITY",this.expansionRate=0,this.temperature=1e12,this.gravityStrength=0,this.supernovaIntensity=0,this.starFormationRate=0,this.quantumJitter=0,this.started=!0,this.cycleCount++,this.galaxySeed=Math.random()*1e4,this.numGalaxies=6+Math.floor(Math.random()*12),this.needsReseed=!0}update(e){if(!this.started)return;if(this.time+=e,this.time>=95){this.restart();return}for(const n of this.epochs)if(this.time<n.end){this.phaseName=n.name;break}const t=this.time;if(t<4)this.phase=0,this.expansionRate=.05,this.temperature=1e12,this.gravityStrength=.5,this.quantumJitter=.8+.2*Math.sin(t*3),this.starFormationRate=0,this.supernovaIntensity=0;else if(t<9){this.phase=1;const n=(t-4)/5,s=n*n*(3-2*n);this.expansionRate=2+s*30,this.temperature=1e12*Math.exp(-n*3),this.gravityStrength=.3,this.quantumJitter=1.5*(1-n*.5),this.starFormationRate=0,this.supernovaIntensity=0}else if(t<26){this.phase=2;const n=(t-9)/17;this.expansionRate=Math.max(.3,5*(1-n)),this.temperature=1e9*Math.exp(-n*4),this.gravityStrength=1+n*2,this.quantumJitter=.3+.4*Math.sin(t*.7),this.starFormationRate=n*.2,this.supernovaIntensity=0}else if(t<44){this.phase=3;const n=(t-26)/18;this.expansionRate=.2+.1*Math.sin(t*.1),this.temperature=Math.max(2.725,this.temperature*.9995),this.gravityStrength=3+n*3,this.quantumJitter=.2+.3*Math.sin(t*1.3)*Math.cos(t*.7),this.starFormationRate=.3+n*.7,this.supernovaIntensity=n*.2}else if(t<58){this.phase=4;const n=(t-44)/14;this.expansionRate=.15+.05*Math.sin(t*.08),this.temperature=Math.max(2.725,80*(1-n)+2.725),this.gravityStrength=5+n*2.5,this.quantumJitter=.15+.15*Math.abs(Math.sin(t*2.1)),this.starFormationRate=1,this.supernovaIntensity=.3+n*.3}else if(t<70){this.phase=5;const n=(t-58)/12;this.expansionRate=.1,this.temperature=2.725,this.gravityStrength=6.5+Math.sin(t*.05)*1,this.quantumJitter=.1+.15*Math.sin(t*3.7),this.starFormationRate=1-n*.3,this.supernovaIntensity=.6+n*.4}else if(t<80){this.phase=6;const n=(t-70)/10;this.expansionRate=.08-n*.03,this.temperature=2.725,this.gravityStrength=5-n*2,this.quantumJitter=.5+.5*Math.sin(t*5),this.starFormationRate=.3*(1-n),this.supernovaIntensity=1}else{this.phase=7;const s=1-Math.min((t-80)/15,1);this.expansionRate=.02*s,this.temperature=2.725*Math.max(.01,s),this.gravityStrength=1*s,this.quantumJitter=.05*s,this.starFormationRate=0,this.supernovaIntensity=.3*s}this._prevPhase=this.phase}shouldPulseHaptic(){return this.phase===1&&this.time>4&&this.time<6&&Math.random()<.3||this.phase!==this._prevPhase&&this._prevPhase>=0||this.supernovaIntensity>.8&&Math.random()<.1}}class Mm{constructor(e){this.gyro={x:0,y:0,z:0},this._gyroRaw={x:0,y:0,z:0},this.accel={x:0,y:0,z:0},this.rotationRate={alpha:0,beta:0,gamma:0},this.shakeIntensity=0,this.audioLevel=0,this.audioBass=0,this.hasGyro=!1,this.hasMotion=!1,this.hasAudio=!1,this.isMobile=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),this._cosmicAudio=e,this._analyser=null,this._freqData=null,this._smoothing=.12}async init(){await Promise.allSettled([this._initGyro(),this._initMotion(),this._initProceduralAudio()])}async _initGyro(){if(!(typeof DeviceOrientationEvent>"u")){if(typeof DeviceOrientationEvent.requestPermission=="function")try{if(await DeviceOrientationEvent.requestPermission()!=="granted")return}catch{return}window.addEventListener("deviceorientation",e=>{this.hasGyro=!0,this._gyroRaw.x=(e.gamma||0)/90,this._gyroRaw.y=(e.beta||0)/180,this._gyroRaw.z=(e.alpha||0)/360},{passive:!0})}}async _initMotion(){if(!(typeof DeviceMotionEvent>"u")){if(typeof DeviceMotionEvent.requestPermission=="function")try{if(await DeviceMotionEvent.requestPermission()!=="granted")return}catch{return}window.addEventListener("devicemotion",e=>{this.hasMotion=!0;const t=e.accelerationIncludingGravity||{};this.accel.x=t.x||0,this.accel.y=t.y||0,this.accel.z=t.z||0;const n=e.rotationRate||{};this.rotationRate.alpha=n.alpha||0,this.rotationRate.beta=n.beta||0,this.rotationRate.gamma=n.gamma||0;const s=Math.sqrt(this.accel.x**2+this.accel.y**2+this.accel.z**2);this.shakeIntensity=Math.abs(s-9.81)},{passive:!0})}}_initProceduralAudio(){if(!(!this._cosmicAudio||!this._cosmicAudio.ctx))try{const e=this._cosmicAudio.ctx;this._analyser=e.createAnalyser(),this._analyser.fftSize=256,this._analyser.smoothingTimeConstant=.8,this._cosmicAudio.masterGain&&this._cosmicAudio.masterGain.connect(this._analyser),this._freqData=new Uint8Array(this._analyser.frequencyBinCount),this.hasAudio=!0}catch{}}update(e){const t=this._smoothing;if(this.gyro.x+=(this._gyroRaw.x-this.gyro.x)*t,this.gyro.y+=(this._gyroRaw.y-this.gyro.y)*t,this.gyro.z+=(this._gyroRaw.z-this.gyro.z)*t,this.shakeIntensity*=.9,!this.hasAudio&&this._cosmicAudio&&this._cosmicAudio.ready&&this._initProceduralAudio(),!this.hasAudio||!this._analyser)return;this._analyser.getByteFrequencyData(this._freqData);const n=this._freqData.length;let s=0;for(let o=0;o<n;o++)s+=this._freqData[o];this.audioLevel=s/n/255;let r=0;const a=n>>2;for(let o=0;o<a;o++)r+=this._freqData[o];this.audioBass=r/a/255}pulseHaptic(e=15){navigator.vibrate&&navigator.vibrate(e)}pulseHapticPattern(e){navigator.vibrate&&navigator.vibrate(e)}dispose(){}}class Sm{constructor(){this.ctx=null,this.masterGain=null,this.droneOsc=null,this.subOsc=null,this.harmOsc=null,this.noiseGain=null,this.noiseSource=null,this.filter=null,this.compressor=null,this.ready=!1}init(){try{this.ctx=new(window.AudioContext||window.webkitAudioContext)}catch{return}this.compressor=this.ctx.createDynamicsCompressor(),this.compressor.threshold.value=-24,this.compressor.knee.value=12,this.compressor.ratio.value=4,this.compressor.attack.value=.003,this.compressor.release.value=.15,this.compressor.connect(this.ctx.destination),this.masterGain=this.ctx.createGain(),this.masterGain.gain.value=0,this.masterGain.connect(this.compressor),this.filter=this.ctx.createBiquadFilter(),this.filter.type="lowpass",this.filter.frequency.value=300,this.filter.Q.value=1.5,this.filter.connect(this.masterGain),this.droneOsc=this.ctx.createOscillator(),this.droneOsc.type="sine",this.droneOsc.frequency.value=55;const e=this.ctx.createGain();e.gain.value=.15,this.droneOsc.connect(e),e.connect(this.filter),this.droneOsc.start(),this.subOsc=this.ctx.createOscillator(),this.subOsc.type="sine",this.subOsc.frequency.value=27.5;const t=this.ctx.createGain();t.gain.value=.12,this.subOsc.connect(t),t.connect(this.filter),this.subOsc.start(),this.harmOsc=this.ctx.createOscillator(),this.harmOsc.type="triangle",this.harmOsc.frequency.value=110,this._harmGain=this.ctx.createGain(),this._harmGain.gain.value=.04,this.harmOsc.connect(this._harmGain),this._harmGain.connect(this.filter),this.harmOsc.start(),this._createNoise(),this.ready=!0}_createNoise(){const e=this.ctx.sampleRate*2,t=this.ctx.createBuffer(1,e,this.ctx.sampleRate),n=t.getChannelData(0);for(let r=0;r<e;r++)n[r]=(Math.random()*2-1)*.5;this.noiseSource=this.ctx.createBufferSource(),this.noiseSource.buffer=t,this.noiseSource.loop=!0,this.noiseGain=this.ctx.createGain(),this.noiseGain.gain.value=.03;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=800,this.noiseSource.connect(s),s.connect(this.noiseGain),this.noiseGain.connect(this.masterGain),this.noiseSource.start()}update(e,t,n){if(!this.ready)return;const s=this.ctx.currentTime,r=.1;if(e===0)this.masterGain.gain.linearRampToValueAtTime(.12,s+r),this.droneOsc.frequency.linearRampToValueAtTime(40+Math.sin(n*.5)*5,s+r),this.filter.frequency.linearRampToValueAtTime(200,s+r),this.noiseGain.gain.linearRampToValueAtTime(.01,s+r),this._harmGain.gain.linearRampToValueAtTime(.02,s+r),this.harmOsc.frequency.linearRampToValueAtTime(80,s+r);else if(e===1)this.masterGain.gain.linearRampToValueAtTime(.35,s+r),this.droneOsc.frequency.linearRampToValueAtTime(80+n*4,s+r),this.filter.frequency.linearRampToValueAtTime(1200+n*100,s+r),this.noiseGain.gain.linearRampToValueAtTime(.08,s+r),this._harmGain.gain.linearRampToValueAtTime(.08,s+r),this.harmOsc.frequency.linearRampToValueAtTime(165+n*3,s+r);else if(e===2)this.masterGain.gain.linearRampToValueAtTime(.2,s+r),this.droneOsc.frequency.linearRampToValueAtTime(55+Math.sin(n*.2)*10,s+r),this.filter.frequency.linearRampToValueAtTime(600,s+r),this.noiseGain.gain.linearRampToValueAtTime(.04,s+r),this._harmGain.gain.linearRampToValueAtTime(.05,s+r),this.harmOsc.frequency.linearRampToValueAtTime(110,s+r);else if(e===3)this.masterGain.gain.linearRampToValueAtTime(.22,s+r),this.droneOsc.frequency.linearRampToValueAtTime(60+Math.sin(n*.15)*12,s+r),this.filter.frequency.linearRampToValueAtTime(700+Math.sin(n*.3)*100,s+r),this.noiseGain.gain.linearRampToValueAtTime(.05,s+r),this._harmGain.gain.linearRampToValueAtTime(.06,s+r),this.harmOsc.frequency.linearRampToValueAtTime(130+Math.sin(n*.1)*15,s+r);else if(e===4)this.masterGain.gain.linearRampToValueAtTime(.25,s+r),this.droneOsc.frequency.linearRampToValueAtTime(65+Math.sin(n*.12)*8,s+r),this.filter.frequency.linearRampToValueAtTime(900,s+r),this.noiseGain.gain.linearRampToValueAtTime(.045,s+r),this._harmGain.gain.linearRampToValueAtTime(.07,s+r),this.harmOsc.frequency.linearRampToValueAtTime(155+Math.sin(n*.08)*20,s+r);else if(e===5)this.masterGain.gain.linearRampToValueAtTime(.2,s+r),this.droneOsc.frequency.linearRampToValueAtTime(55+Math.sin(n*.1)*6,s+r),this.filter.frequency.linearRampToValueAtTime(500,s+r),this.noiseGain.gain.linearRampToValueAtTime(.035,s+r),this._harmGain.gain.linearRampToValueAtTime(.05,s+r),this.harmOsc.frequency.linearRampToValueAtTime(110+Math.sin(n*.06)*10,s+r);else if(e===6)this.masterGain.gain.linearRampToValueAtTime(.3,s+r),this.droneOsc.frequency.linearRampToValueAtTime(70+Math.sin(n*1.5)*20,s+r),this.filter.frequency.linearRampToValueAtTime(1500+Math.sin(n*2)*500,s+r),this.noiseGain.gain.linearRampToValueAtTime(.09,s+r),this._harmGain.gain.linearRampToValueAtTime(.09,s+r),this.harmOsc.frequency.linearRampToValueAtTime(200+Math.sin(n*.8)*40,s+r);else{const a=Math.max(.01,1-(n-80)/15);this.masterGain.gain.linearRampToValueAtTime(.08*a,s+r),this.droneOsc.frequency.linearRampToValueAtTime(35+a*10,s+r),this.filter.frequency.linearRampToValueAtTime(150*a+50,s+r),this.noiseGain.gain.linearRampToValueAtTime(.015*a,s+r),this._harmGain.gain.linearRampToValueAtTime(.02*a,s+r),this.harmOsc.frequency.linearRampToValueAtTime(60,s+r)}}dispose(){if(!this.ready)return;const e=this.ctx.currentTime;this.masterGain.gain.linearRampToValueAtTime(0,e+1),setTimeout(()=>this.ctx.close(),1200)}}class ym{constructor(e,t){this.camera=e,this.domElement=t,this.worldPos=new U,this.strength=6,this.active=!1,this._ndc=new Se,this._ray=new jp,this._plane=new pn(new U(0,0,1),0),this._onMove=this._onMove.bind(this),this._onDown=this._onDown.bind(this),this._onUp=this._onUp.bind(this),this._onWheel=this._onWheel.bind(this),t.addEventListener("pointermove",this._onMove,{passive:!0}),t.addEventListener("pointerdown",this._onDown,{passive:!0}),t.addEventListener("pointerup",this._onUp,{passive:!0}),t.addEventListener("wheel",this._onWheel,{passive:!0})}_updateNDC(e){const t=this.domElement.getBoundingClientRect();this._ndc.x=(e.clientX-t.left)/t.width*2-1,this._ndc.y=-((e.clientY-t.top)/t.height)*2+1}_project(){this._ray.setFromCamera(this._ndc,this.camera),this._ray.ray.intersectPlane(this._plane,this.worldPos)}_onMove(e){this._updateNDC(e),this._project(),e.pointerType==="mouse"&&(this.active=!0)}_onDown(e){this._updateNDC(e),this._project(),this.active=!0}_onUp(){this.active=!1}_onWheel(e){this.strength=Math.max(-12,Math.min(12,this.strength+(e.deltaY>0?-.5:.5)))}dispose(){this.domElement.removeEventListener("pointermove",this._onMove),this.domElement.removeEventListener("pointerdown",this._onDown),this.domElement.removeEventListener("pointerup",this._onUp),this.domElement.removeEventListener("wheel",this._onWheel)}}const Tm={uniforms:{tDiffuse:{value:null},uTime:{value:0},uIntensity:{value:.06}},vertexShader:`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,fragmentShader:`
        uniform sampler2D tDiffuse;
        uniform float uTime;
        uniform float uIntensity;
        varying vec2 vUv;

        float hash(vec2 p) {
            vec3 p3 = fract(vec3(p.xyx) * 0.1031);
            p3 += dot(p3, p3.yzx + 33.33);
            return fract((p3.x + p3.y) * p3.z);
        }

        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float noise = hash(gl_FragCoord.xy + uTime * 100.0) * 2.0 - 1.0;
            color.rgb += noise * uIntensity;
            gl_FragColor = color;
        }
    `};function Em(){return new Ul(Tm)}class Am{constructor(){this.video=null,this.stream=null,this.active=!1,this.supported=!!(navigator.mediaDevices&&navigator.mediaDevices.getUserMedia),this.state="idle",this._constraints={video:{facingMode:{ideal:"environment"},width:{ideal:1920},height:{ideal:1080},frameRate:{ideal:30,max:60}},audio:!1}}async start(e){if(!this.supported)return console.warn("[CameraAR] getUserMedia not supported"),this.state="error",!1;if(this.active)return!0;this.state="requesting";try{this.stream=await navigator.mediaDevices.getUserMedia(this._constraints)}catch{try{this.stream=await navigator.mediaDevices.getUserMedia({video:{width:{ideal:1280},height:{ideal:720}},audio:!1})}catch(n){return console.warn("[CameraAR] Camera access denied:",n.name),this.state=n.name==="NotAllowedError"?"denied":"error",!1}}return this.video||(this.video=document.createElement("video"),this.video.id="ar-video",this.video.playsInline=!0,this.video.muted=!0,this.video.autoplay=!0,this.video.setAttribute("playsinline",""),this.video.setAttribute("muted",""),document.body.insertBefore(this.video,document.getElementById("canvas"))),this.video.srcObject=this.stream,await this.video.play(),this.video.classList.add("active"),e.setClearColor(0,0),document.getElementById("canvas").classList.add("ar-mode"),this.active=!0,this.state="streaming",!0}stop(e){if(this.stream){for(const t of this.stream.getTracks())t.stop();this.stream=null}this.video&&(this.video.srcObject=null,this.video.classList.remove("active")),e.setClearColor(0,1),document.getElementById("canvas").classList.remove("ar-mode"),this.active=!1,this.state="idle"}async toggle(e){return this.active?(this.stop(e),!1):this.start(e)}dispose(e){this.stop(e),this.video&&this.video.parentNode&&(this.video.parentNode.removeChild(this.video),this.video=null)}}const St=64;class bm{constructor(e){this.renderer=e,this.active=!1,this._canvas=document.createElement("canvas"),this._canvas.width=St,this._canvas.height=St,this._ctx=this._canvas.getContext("2d",{willReadFrequently:!0,alpha:!1}),this._currentPixels=new Uint8Array(St*St*4),this._previousPixels=new Uint8Array(St*St*4),this._outputData=new Float32Array(St*St*4),this._hasFrame=!1,this._frameCount=0,this.flowTexture=new Cl(this._outputData,St,St,Ct,Ht),this.flowTexture.minFilter=Vt,this.flowTexture.magFilter=Vt,this.flowTexture.wrapS=Jt,this.flowTexture.wrapT=Jt,this.flowTexture.needsUpdate=!0,this.sceneLuminance=0,this.sceneMotion=0,this.surfaceCoverage=0,this.dominantFlowX=0,this.dominantFlowY=0,this._smooth=.15}update(e){if(!e||e.readyState<2)return;this._ctx.drawImage(e,0,0,St,St);const t=this._ctx.getImageData(0,0,St,St);if(this._previousPixels.set(this._currentPixels),this._currentPixels.set(t.data),this._frameCount++,this._frameCount<2){this._hasFrame=!0;return}this._computeFlowField(),this.flowTexture.needsUpdate=!0,this.active=!0}_computeFlowField(){const e=this._currentPixels,t=this._previousPixels,n=this._outputData,s=St;let r=0,a=0,o=0,l=0,c=0,d=0;for(let f=1;f<s-1;f++)for(let h=1;h<s-1;h++){const m=(f*s+h)*4,_=(f*s+h)*4,x=e[m]*.2126,p=e[m+1]*.7152,u=e[m+2]*.0722,A=(x+p+u)/255,E=e[m]-t[m],y=e[m+1]-t[m+1],B=e[m+2]-t[m+2],C=Math.sqrt(E*E+y*y+B*B)/441.67,b=(f*s+(h-1))*4,I=(f*s+(h+1))*4,S=((f-1)*s+h)*4,M=((f+1)*s+h)*4,R=(e[b]*.2126+e[b+1]*.7152+e[b+2]*.0722)/255,H=(e[I]*.2126+e[I+1]*.7152+e[I+2]*.0722)/255,z=(e[S]*.2126+e[S+1]*.7152+e[S+2]*.0722)/255,j=(e[M]*.2126+e[M+1]*.7152+e[M+2]*.0722)/255,K=(H-R)*.5,k=(j-z)*.5,Z=Math.sqrt(K*K+k*k),G=Z*Z+.01,ne=-K*C/G,ce=-k*C/G,_e=Math.max(-1,Math.min(1,ne*4)),Le=Math.max(-1,Math.min(1,ce*4)),Ye=Math.min(1,Z*8),W=1-Math.min(1,C*6);let J=Ye*W;const fe=Math.abs(K)+Math.abs(k),ie=Math.max(0,1-fe*10);J=J*.6+ie*.4,n[_]=_e,n[_+1]=Le,n[_+2]=J,n[_+3]=A,r+=A,a+=C,o+=J,l+=_e,c+=Le,d++}if(d>0){const f=1/d,h=this._smooth;this.sceneLuminance+=(r*f-this.sceneLuminance)*h,this.sceneMotion+=(a*f-this.sceneMotion)*h,this.surfaceCoverage+=(o*f-this.surfaceCoverage)*h,this.dominantFlowX+=(l*f-this.dominantFlowX)*h,this.dominantFlowY+=(c*f-this.dominantFlowY)*h}}reset(){this.active=!1,this._hasFrame=!1,this._frameCount=0,this.sceneLuminance=0,this.sceneMotion=0,this.surfaceCoverage=0,this.dominantFlowX=0,this.dominantFlowY=0,this._outputData.fill(0),this.flowTexture.needsUpdate=!0}dispose(){this.reset(),this.flowTexture.dispose()}}const Rm=`
uniform float uDeltaTime;
uniform float uPhase;
uniform float uTime;

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    if (uPhase < 0.5) {
        // SINGULARITY — particles barely drift, swirling in place
        pos.xyz += vel.xyz * uDeltaTime * 0.04;
    } else if (uPhase > 6.5) {
        // HEAT DEATH — slow drift, particles scatter and fade
        pos.xyz += vel.xyz * uDeltaTime * 0.3;
    } else {
        // INFLATION / COOLING / STRUCTURE / GALAXIES / STELLAR / SUPERNOVA
        pos.xyz += vel.xyz * uDeltaTime;
    }

    // Increment particle age (w channel)
    pos.w += uDeltaTime;

    // Soft boundary — prevent particles from drifting to infinity
    float r = length(pos.xyz);
    float maxR = 500.0 + uPhase * 50.0;
    if (r > maxR) {
        pos.xyz *= maxR / r;
    }

    gl_FragColor = pos;
}
`,Fl=`
vec4 _permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
vec4 _taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);

    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);

    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;

    i = mod(i, 289.0);
    vec4 p = _permute(_permute(_permute(
        i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));

    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);

    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);

    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);

    vec4 norm = _taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;

    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}

float fbm(vec3 p, int octaves) {
    float value = 0.0;
    float amplitude = 0.5;
    float frequency = 1.0;
    for (int i = 0; i < 6; i++) {
        if (i >= octaves) break;
        value += amplitude * snoise(p * frequency);
        frequency *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}
`,wm=Fl+`

uniform float uTime;
uniform float uDeltaTime;
uniform float uExpansionRate;
uniform float uTemperature;
uniform float uGravityStrength;
uniform vec3  uGyro;
uniform float uAudioLevel;
uniform float uAudioBass;
uniform float uPhase;

// Mouse / touch interaction
uniform vec3  uMouseWorldPos;
uniform float uMouseStrength;
uniform float uMouseActive;

// Galaxy formation
uniform float uGalaxySeed;
uniform float uNumGalaxies;

// Star lifecycle
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

// Quantum eccentricity
uniform float uQuantumJitter;

// ─── AR Camera Flow / Surface Detection ─────────
uniform sampler2D uFlowTexture;     // (flowX, flowY, surfaceConf, luminance) 64×64
uniform float     uARActive;        // 0 or 1
uniform float     uARSurfaceForce;  // surface repulsion strength
uniform float     uARFlowForce;     // motion-following strength
uniform float     uARLuminance;     // scene-average brightness [0,1]

// ─── Deterministic hash functions ───────────────────
float hash11(float p) {
    p = fract(p * 0.1031);
    p *= p + 33.33;
    p *= p + p;
    return fract(p);
}

vec3 hash31(float p) {
    vec3 p3 = fract(vec3(p) * vec3(0.1031, 0.1030, 0.0973));
    p3 += dot(p3, p3.yzx + 33.33);
    return fract((p3.xxy + p3.yzz) * p3.zyx);
}

void main() {
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec4 pos = texture2D(texturePosition, uv);
    vec4 vel = texture2D(textureVelocity, uv);

    vec3 position = pos.xyz;
    vec3 velocity = vel.xyz;
    float age  = pos.w;
    float mass = vel.w;

    float dist = length(position);
    vec3  dir  = dist > 0.001 ? position / dist : vec3(0.0);

    // Particle ID for deterministic per-particle randomness
    float pid = uv.x * 1024.0 + uv.y;

    // ─── HUBBLE-LIKE EXPANSION ──────────────────────
    float hubble = uExpansionRate * (1.0 + dist * 0.005);
    vec3 expansion = dir * hubble;

    // ─── GRAVITATIONAL CLUSTERING (noise field) ─────
    vec3 nc = position * 0.03 + uTime * 0.008;
    vec3 gravField = vec3(
        snoise(nc),
        snoise(nc + vec3(31.416, 0.0, 0.0)),
        snoise(nc + vec3(0.0, 67.123, 0.0))
    ) * uGravityStrength;

    // ─── CENTRAL ATTRACTOR ──────────────────────────
    float attract = mass * 0.5 / (dist * dist + 0.5);
    vec3 centralPull = -dir * attract;

    // ─── TURBULENCE (multi-scale) ───────────────────
    vec3 tc = position * 0.015 + uTime * 0.12;
    vec3 turbulence = vec3(
        snoise(tc),
        snoise(tc + vec3(100.0, 0.0, 0.0)),
        snoise(tc + vec3(0.0, 200.0, 0.0))
    );

    // ─── VORTICITY (spiral arm formation) ───────────
    vec3 vortex = vec3(-position.y, position.x, 0.0) * 0.002 / (dist + 1.0);

    // ─── FILAMENT FORMATION (anisotropic structure) ─
    vec3 filCoord = position * 0.008 + uTime * 0.003;
    float filament = fbm(filCoord, 3);   // 3 octaves — saves GPU ALU
    vec3 filForce = vec3(
        snoise(filCoord + vec3(200.0)),
        snoise(filCoord + vec3(300.0)),
        snoise(filCoord + vec3(400.0))
    ) * filament * 0.4;

    // ─── GALAXY ATTRACTOR FIELD ─────────────────────
    // Procedural galaxy centers with varied morphology:
    //   spiral, elliptical, irregular, barred spiral
    vec3 galaxyForce = vec3(0.0);
    if (uPhase >= 2.5) {
        float galaxySpread = 80.0 + uPhase * 30.0;

        for (int i = 0; i < 16; i++) {
            if (float(i) >= uNumGalaxies) break;

            float fi = float(i);
            vec3 seed = hash31(fi * 127.1 + uGalaxySeed);
            vec3 gCenter = (seed - 0.5) * galaxySpread * 2.0;

            // Galaxy properties from hash
            float gMass = (hash11(fi * 31.7 + uGalaxySeed) * 0.7 + 0.3) * 8.0;
            float gType = hash11(fi * 73.3 + uGalaxySeed);
            float gSize = (hash11(fi * 53.1 + uGalaxySeed) * 0.6 + 0.4) * 60.0;

            vec3 toGalaxy = gCenter - position;
            float gDist = length(toGalaxy);
            vec3 gDir = gDist > 0.01 ? toGalaxy / gDist : vec3(0.0);

            // Gravitational attraction with softened falloff
            float gAttract = gMass / (gDist * gDist + gSize * 0.5);
            float falloff = smoothstep(gSize * 3.0, 0.0, gDist);

            vec3 force = gDir * gAttract * falloff;

            if (gType < 0.35) {
                // SPIRAL GALAXY — rotational component
                vec3 tangent = normalize(cross(toGalaxy, vec3(seed.x, 1.0, seed.z)));
                float spiralStrength = falloff * gMass * 0.3;
                float spiralAngle = gDist * 0.05 + uTime * 0.1;
                vec3 spiral = tangent * spiralStrength * sin(spiralAngle)
                            + cross(tangent, gDir) * spiralStrength * cos(spiralAngle) * 0.3;
                force += spiral;

            } else if (gType < 0.55) {
                // ELLIPTICAL GALAXY — anisotropic compression
                vec3 axis = normalize(hash31(fi * 91.3 + uGalaxySeed) - 0.5);
                float compression = dot(gDir, axis);
                force += axis * compression * gAttract * falloff * 0.5;

            } else if (gType < 0.75) {
                // IRREGULAR GALAXY — chaotic noise perturbation
                vec3 chaosCoord = position * 0.02 + vec3(fi * 10.0) + uTime * 0.05;
                vec3 chaos = vec3(
                    snoise(chaosCoord),
                    snoise(chaosCoord + vec3(50.0)),
                    snoise(chaosCoord + vec3(100.0))
                ) * gMass * falloff * 0.4;
                force += chaos;

            } else {
                // BARRED SPIRAL — bar structure + spiral arms
                vec3 barAxis = normalize(hash31(fi * 47.7 + uGalaxySeed) - 0.5);
                float barAlign = abs(dot(gDir, barAxis));
                force += barAxis * barAlign * gAttract * falloff * 0.6;
                vec3 tangent = normalize(cross(toGalaxy, barAxis));
                float spiralStrength = falloff * gMass * 0.25 * (1.0 - barAlign);
                force += tangent * spiralStrength * sin(gDist * 0.08 + uTime * 0.08);
            }

            galaxyForce += force;
        }
    }

    // ─── SUPERNOVA EVENTS ───────────────────────────
    vec3 supernovaForce = vec3(0.0);
    if (uSupernovaIntensity > 0.01) {
        float snNoise = snoise(vec3(pid * 0.01, age * 0.1, uTime * 0.3));
        float snThreshold = 1.0 - uSupernovaIntensity * 0.15;

        if (snNoise > snThreshold && mass > 1.2) {
            float intensity = (snNoise - snThreshold) * 20.0 * uSupernovaIntensity;
            vec3 explosionDir = normalize(vec3(
                snoise(vec3(pid, uTime * 2.0, 0.0)),
                snoise(vec3(0.0, pid, uTime * 2.0)),
                snoise(vec3(uTime * 2.0, 0.0, pid))
            ));
            supernovaForce = explosionDir * intensity;
        }
    }

    // ─── STAR FORMATION COMPRESSION ─────────────────
    vec3 starFormForce = vec3(0.0);
    if (uStarFormationRate > 0.01) {
        vec3 densityCoord = position * 0.02 + uTime * 0.01;
        float density = fbm(densityCoord, 2);
        if (density > 0.2) {
            vec3 densityGrad = vec3(
                snoise(densityCoord + vec3(0.01, 0.0, 0.0)) - snoise(densityCoord - vec3(0.01, 0.0, 0.0)),
                snoise(densityCoord + vec3(0.0, 0.01, 0.0)) - snoise(densityCoord - vec3(0.0, 0.01, 0.0)),
                snoise(densityCoord + vec3(0.0, 0.0, 0.01)) - snoise(densityCoord - vec3(0.0, 0.0, 0.01))
            );
            starFormForce = -densityGrad * density * uStarFormationRate * 3.0;
        }
    }

    // ─── QUANTUM ECCENTRICITY ───────────────────────
    vec3 quantumForce = vec3(0.0);
    if (uQuantumJitter > 0.01) {
        float qScale1 = sin(uTime * 1.618 + pid * 0.1) * 0.5 + 0.5;
        float qScale2 = cos(uTime * 2.718 + pid * 0.3) * 0.5 + 0.5;
        vec3 qCoord = position * (0.01 + qScale1 * 0.05) + uTime * (0.5 + qScale2);
        quantumForce = vec3(
            snoise(qCoord),
            snoise(qCoord + vec3(777.0)),
            snoise(qCoord + vec3(1234.0))
        ) * uQuantumJitter * 3.0;

        // Occasional quantum tunneling — sudden velocity spike
        float tunnel = snoise(vec3(pid * 0.001, uTime * 0.7, 0.0));
        if (tunnel > 0.97) {
            quantumForce *= 8.0;
        }
    }

    // ─── SENSOR: GYROSCOPE (full 3-axis) ────────────
    vec3 gyroForce = uGyro * 5.0;
    // Cross-axis coupling for realistic tilt-to-force
    gyroForce += vec3(-uGyro.y, uGyro.x, 0.0) * 1.5;

    // ─── SENSOR: AUDIO (procedural, non-echo) ──────
    vec3 audioForce = dir * uAudioLevel * 10.0
                    * sin(age * uAudioBass * 6.28318);

    // ─── MOUSE / TOUCH INTERACTION ──────────────────
    vec3 toMouse    = position - uMouseWorldPos;
    float mouseDist  = length(toMouse);
    vec3 mouseDir   = mouseDist > 0.01 ? toMouse / mouseDist : vec3(0.0);
    float mouseRadius = 40.0;
    float mouseFalloff = smoothstep(mouseRadius, 0.0, mouseDist);
    vec3 mouseForce = mouseDir * uMouseStrength * mouseFalloff * uMouseActive * 12.0;

    // ─── AR SURFACE-REACTIVE FORCE FIELD ────────────
    // Projects particle into screen-space UV, samples the flow
    // texture, and generates forces from detected surfaces.
    vec3 arSurfaceForce = vec3(0.0);
    vec3 arFlowForce    = vec3(0.0);
    if (uARActive > 0.5) {
        // Project particle position into normalised screen UV [0,1]
        // Approximate: use XY position mapped to a viewport range
        float viewRange = 200.0 + uPhase * 40.0;
        vec2 screenUV = clamp(position.xy / viewRange * 0.5 + 0.5, 0.0, 1.0);

        // Sample flow texture: (flowX, flowY, surfaceConfidence, luminance)
        vec4 flowData = texture2D(uFlowTexture, screenUV);
        float flowX       = flowData.r;
        float flowY       = flowData.g;
        float surfaceConf = flowData.b;
        float localLum    = flowData.a;

        // ── Surface repulsion: particles bounce off detected surfaces ──
        // High surfaceConf → strong outward force pushing particles away
        // from the camera plane in the Z direction, plus deflection in XY
        float surfaceStrength = surfaceConf * uARSurfaceForce;

        // Primary: push particles outward along Z (away from camera/surface)
        arSurfaceForce.z += surfaceStrength * 15.0;

        // Secondary: deflect tangentially based on surface normal approximation
        // Use flow gradients as proxy for surface orientation
        float flowMag = length(vec2(flowX, flowY));
        arSurfaceForce.x += flowX * surfaceStrength * 8.0;
        arSurfaceForce.y += flowY * surfaceStrength * 8.0;

        // Proximity boost: particles closer to camera plane (small |z|) feel more force
        float zProximity = smoothstep(80.0, 5.0, abs(position.z));
        arSurfaceForce *= zProximity;

        // ── Motion-following: particles drift with camera motion flow ──
        arFlowForce.x = flowX * uARFlowForce * 6.0;
        arFlowForce.y = flowY * uARFlowForce * 6.0;

        // Flow-induced turbulence: large flow vectors create local swirl
        if (flowMag > 0.1) {
            vec3 swirl = vec3(-flowY, flowX, 0.0) * flowMag * uARFlowForce * 3.0;
            arFlowForce += swirl;
        }

        // ── Luminance-reactive energy: bright regions accelerate particles ──
        float lumBoost = localLum * uARLuminance * 5.0;
        arFlowForce += dir * lumBoost * 0.5;
    }

    // ══════════════════════════════════════════════════
    // PHASE-SPECIFIC DYNAMICS
    // ══════════════════════════════════════════════════
    if (uPhase < 0.5) {
        // ** SINGULARITY ** — tight compressed swirl
        velocity += centralPull  * 15.0  * uDeltaTime;
        velocity += turbulence   *  3.0  * uDeltaTime;
        velocity += vortex       * 20.0  * uDeltaTime;
        velocity += quantumForce *  2.0  * uDeltaTime;
        velocity *= 0.97;

    } else if (uPhase < 1.5) {
        // ** INFLATION ** — violent outward burst
        velocity += expansion    *  8.0  * uDeltaTime;
        velocity += turbulence   *  1.5  * uDeltaTime;
        velocity += vortex       *  5.0  * uDeltaTime;
        velocity += quantumForce *  1.0  * uDeltaTime;

    } else if (uPhase < 2.5) {
        // ** COOLING ** — decelerate, grow filaments
        velocity += expansion    *  0.4  * uDeltaTime;
        velocity += gravField    *  2.5  * uDeltaTime;
        velocity += centralPull  *  0.3  * uDeltaTime;
        velocity += vortex       *  3.0  * uDeltaTime;
        velocity += filForce     *  1.5  * uDeltaTime;
        velocity += quantumForce *  0.5  * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity *= 0.997;

    } else if (uPhase < 3.5) {
        // ** STRUCTURE + STELLAR IGNITION ** — galaxies forming
        velocity += expansion    *  0.15 * uDeltaTime;
        velocity += gravField    *  3.0  * uDeltaTime;
        velocity += centralPull  *  0.2  * uDeltaTime;
        velocity += vortex       *  4.0  * uDeltaTime;
        velocity += filForce     *  2.0  * uDeltaTime;
        velocity += galaxyForce  *  1.5  * uDeltaTime;
        velocity += starFormForce * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce *  0.3  * uDeltaTime;
        velocity += turbulence   *  0.3  * uDeltaTime;
        velocity *= 0.998;

    } else if (uPhase < 4.5) {
        // ** GALAXY FORMATION ** — strong galaxy attractors
        velocity += expansion    *  0.1  * uDeltaTime;
        velocity += gravField    *  2.0  * uDeltaTime;
        velocity += galaxyForce  *  3.0  * uDeltaTime;
        velocity += vortex       *  3.0  * uDeltaTime;
        velocity += filForce     *  1.5  * uDeltaTime;
        velocity += starFormForce * 1.5  * uDeltaTime;
        velocity += supernovaForce * uDeltaTime;
        velocity += quantumForce *  0.2  * uDeltaTime;
        velocity *= 0.996;

    } else if (uPhase < 5.5) {
        // ** STELLAR EVOLUTION ** — mature galaxies
        velocity += galaxyForce  *  3.5  * uDeltaTime;
        velocity += gravField    *  1.5  * uDeltaTime;
        velocity += vortex       *  2.5  * uDeltaTime;
        velocity += starFormForce * 1.0  * uDeltaTime;
        velocity += supernovaForce * 1.5 * uDeltaTime;
        velocity += quantumForce *  0.15 * uDeltaTime;
        velocity += turbulence   *  0.2  * uDeltaTime;
        velocity *= 0.997;

    } else if (uPhase < 6.5) {
        // ** SUPERNOVA ERA ** — explosive stellar deaths
        velocity += galaxyForce  *  2.0  * uDeltaTime;
        velocity += supernovaForce * 3.0 * uDeltaTime;
        velocity += gravField    *  1.0  * uDeltaTime;
        velocity += vortex       *  1.5  * uDeltaTime;
        velocity += quantumForce *  0.8  * uDeltaTime;
        velocity += turbulence   *  0.5  * uDeltaTime;
        velocity *= 0.995;

    } else {
        // ** HEAT DEATH ** — everything dissipates
        velocity += expansion    *  0.02 * uDeltaTime;
        velocity += quantumForce *  0.05 * uDeltaTime;
        velocity *= 0.99;
    }

    // Always apply environmental sensors + mouse + AR
    velocity += gyroForce  * uDeltaTime;
    velocity += audioForce * uDeltaTime;
    velocity += mouseForce * uDeltaTime;
    velocity += arSurfaceForce * uDeltaTime;
    velocity += arFlowForce    * uDeltaTime;

    // Speed ceiling (increased for supernovae)
    float maxSpeed = 60.0 + uSupernovaIntensity * 40.0;
    float speed = length(velocity);
    if (speed > maxSpeed) velocity = velocity / speed * maxSpeed;

    gl_FragColor = vec4(velocity, mass);
}
`,Cm=`
uniform sampler2D uPositionTexture;
uniform sampler2D uVelocityTexture;
uniform float uPixelRatio;
uniform float uPointSize;
uniform float uTime;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

void main() {
    // position.xy stores the UV into the GPGPU data textures
    vec2 uv = position.xy;

    vec4 posData = texture2D(uPositionTexture, uv);
    vec4 velData = texture2D(uVelocityTexture, uv);

    vec3 pos = posData.xyz;
    vAge            = posData.w;
    vSpeed          = length(velData.xyz);
    vDistFromCenter = length(pos);
    vMass           = velData.w;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;

    // Dynamic point sizing — fast / nearby particles are larger
    float basePx     = uPointSize * uPixelRatio;
    float speedBoost = 1.0 + smoothstep(0.0, 20.0, vSpeed) * 2.0;
    float depthScale = 250.0 / max(1.0, -mvPosition.z);

    // Star formation: dense regions get brighter larger points
    float starGlow = uStarFormationRate * smoothstep(15.0, 5.0, vDistFromCenter) * 0.5;

    // Supernova: high-speed massive particles flash large
    float snFlash = 0.0;
    if (uSupernovaIntensity > 0.01 && vSpeed > 30.0 && vMass > 1.2) {
        snFlash = (vSpeed - 30.0) / 30.0 * uSupernovaIntensity * 3.0;
    }

    gl_PointSize = basePx * (speedBoost + starGlow + snFlash) * depthScale;
    gl_PointSize = clamp(gl_PointSize, 0.5, 120.0);
}
`,Pm=Fl+`

varying float vSpeed;
varying float vAge;
varying float vDistFromCenter;
varying float vMass;

uniform float uTime;
uniform float uTemperature;
uniform float uPhase;
uniform float uSupernovaIntensity;
uniform float uStarFormationRate;

// AR camera integration
uniform float uARActive;
uniform float uARSceneLuminance;
uniform float uARSurfaceCoverage;

// ─── CIE-approximate wavelength → visible RGB ──────────
vec3 wavelengthToRGB(float wavelength) {
    float w = clamp(wavelength, 380.0, 780.0);
    vec3 color = vec3(0.0);

    if      (w < 440.0) { color = vec3(-(w - 440.0) / 60.0, 0.0, 1.0); }
    else if (w < 490.0) { color = vec3(0.0, (w - 440.0) / 50.0, 1.0); }
    else if (w < 510.0) { color = vec3(0.0, 1.0, -(w - 510.0) / 20.0); }
    else if (w < 580.0) { color = vec3((w - 510.0) / 70.0, 1.0, 0.0); }
    else if (w < 645.0) { color = vec3(1.0, -(w - 645.0) / 65.0, 0.0); }
    else                { color = vec3(1.0, 0.0, 0.0); }

    // Intensity taper at spectral boundaries
    float intensity;
    if      (w < 420.0) intensity = 0.3 + 0.7 * (w - 380.0) / 40.0;
    else if (w > 700.0) intensity = 0.3 + 0.7 * (780.0 - w) / 80.0;
    else                intensity = 1.0;

    return color * intensity;
}

void main() {
    // Soft circular point sprite
    vec2 uvc = gl_PointCoord - 0.5;
    float d = length(uvc);
    if (d > 0.5) discard;
    float softEdge = 1.0 - smoothstep(0.15, 0.5, d);

    // ─── HYPERSPECTRAL VELOCITY MAPPING ─────────────
    // Fast → blueshift (short λ ≈ 390 nm)
    // Slow → redshift  (long  λ ≈ 740 nm)
    float speedNorm      = clamp(vSpeed / 25.0, 0.0, 1.0);
    float baseWavelength = mix(740.0, 390.0, speedNorm);

    // ─── CMB SPECTRAL INTERFERENCE (Simplex noise) ──
    float cmb = snoise(vec3(
        vSpeed * 0.3 + uTime * 0.02,
        vAge   * 0.08,
        vDistFromCenter * 0.01
    ));
    float wavelength = clamp(baseWavelength + cmb * 50.0, 380.0, 780.0);

    vec3 color = wavelengthToRGB(wavelength);

    // ─── HOT PARTICLE WHITE-BLUE BOOST ──────────────
    float hotGlow = smoothstep(18.0, 40.0, vSpeed);
    color += vec3(0.7, 0.85, 1.0) * hotGlow * 0.6;

    // ─── TEMPERATURE AMBIENT GLOW ───────────────────
    float tempNorm = clamp(uTemperature / 1.0e8, 0.0, 1.0);
    color += vec3(1.0, 0.5, 0.15) * tempNorm * 0.35;

    // ─── SINGULARITY / INFLATION CORE FLASH ─────────
    if (uPhase < 1.5) {
        float coreGlow = exp(-vDistFromCenter * 0.5) * (1.5 - uPhase);
        color += vec3(1.0, 0.95, 0.9) * coreGlow;
    }

    // ─── STAR FORMATION — ELECTRIC PLASMA EFFECT ────
    if (uStarFormationRate > 0.01) {
        float densityProxy = smoothstep(60.0, 10.0, vDistFromCenter);
        float sparkle = snoise(vec3(
            vAge * 2.0 + uTime * 5.0,
            vSpeed * 0.5,
            vMass * 3.0
        ));
        float electricArc = pow(max(0.0, sparkle), 3.0) * densityProxy * uStarFormationRate;

        // Electric blue-white with purple fringe
        vec3 electricColor = mix(
            vec3(0.3, 0.5, 1.0),
            vec3(0.8, 0.6, 1.0),
            sin(uTime * 3.0 + vAge) * 0.5 + 0.5
        );
        color += electricColor * electricArc * 2.0;

        // Bright white core for newborn stars
        float newborn = smoothstep(2.0, 0.0, vAge) * uStarFormationRate * densityProxy;
        color += vec3(1.0, 0.98, 0.95) * newborn * 1.5;
    }

    // ─── SUPERNOVA FLASH — EXPLOSIVE DEATH ──────────
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0 && vMass > 1.0) {
        float snStrength = smoothstep(25.0, 60.0, vSpeed) * uSupernovaIntensity;

        // White-hot core
        float coreFlash = (1.0 - smoothstep(0.0, 0.2, d)) * snStrength;
        color += vec3(1.0, 1.0, 1.0) * coreFlash * 3.0;

        // Electric blue corona
        float corona = smoothstep(0.15, 0.4, d) * (1.0 - smoothstep(0.4, 0.5, d));
        color += vec3(0.4, 0.6, 1.0) * corona * snStrength * 2.0;

        // Purple-red shockwave edge
        float shockwave = smoothstep(0.3, 0.45, d) * (1.0 - smoothstep(0.45, 0.5, d));
        color += vec3(1.0, 0.2, 0.5) * shockwave * snStrength * 1.5;

        // Pulsating intensity
        float pulse = sin(uTime * 8.0 + vAge * 3.0) * 0.3 + 0.7;
        color *= pulse;
    }

    // ─── GALAXY ARM COLORING ────────────────────────
    if (uPhase >= 3.5) {
        float armNoise = snoise(vec3(
            vDistFromCenter * 0.02,
            vAge * 0.01,
            uTime * 0.005
        ));
        float armFactor = smoothstep(-0.2, 0.5, armNoise);
        vec3 armColor = mix(
            vec3(0.1, 0.15, 0.3),
            vec3(0.8, 0.6, 0.2),
            armFactor
        );
        float galaxyBlend = smoothstep(2.5, 4.5, uPhase) * 0.3;
        color = mix(color, color + armColor, galaxyBlend);
    }

    // ─── DEEP-INFRARED AFTERGLOW (old particles) ────
    float irGlow = smoothstep(40.0, 80.0, vAge) * (1.0 - speedNorm);
    color += vec3(0.4, 0.05, 0.0) * irGlow * 0.5;

    // ─── HEAT DEATH DIMMING ─────────────────────────
    if (uPhase > 6.5) {
        float deathFade = (uPhase - 6.5) * 2.0;
        color *= max(0.02, 1.0 - deathFade * 0.95);
    }

    // ─── AR CAMERA LUMINANCE-REACTIVE COLORING ──────
    if (uARActive > 0.5) {
        // Bright environments: warm golden-white uplift
        // Dark environments: deep blue-violet shift
        float lumShift = uARSceneLuminance * 2.0 - 1.0;   // [-1, 1] dark-to-bright

        // Warm boost in bright scenes (golden photon bath)
        vec3 warmTint = vec3(1.0, 0.85, 0.55) * max(0.0, lumShift) * 0.3;
        // Cool boost in dark scenes (cosmic void deepening)
        vec3 coolTint = vec3(0.3, 0.4, 1.0) * max(0.0, -lumShift) * 0.25;
        color += warmTint + coolTint;

        // Surface-detected regions: particles near surfaces get
        // an iridescent edge shimmer (holographic AR effect)
        if (uARSurfaceCoverage > 0.1) {
            float iridescence = sin(vDistFromCenter * 0.3 + uTime * 2.0 + vSpeed) * 0.5 + 0.5;
            vec3 iriColor = mix(
                vec3(0.3, 0.8, 1.0),
                vec3(1.0, 0.4, 0.8),
                iridescence
            );
            float surfaceGlow = uARSurfaceCoverage * smoothstep(100.0, 20.0, vDistFromCenter);
            color += iriColor * surfaceGlow * 0.2;
        }

        // Overall brightness modulation: AR mode slightly boosts
        // emissive intensity so particles stand out over camera feed
        color *= 1.0 + uARSceneLuminance * 0.4;
    }

    // ─── ALPHA COMPOSITING ──────────────────────────
    float alpha = softEdge;
    alpha *= mix(1.0, 0.15, clamp(vAge / 80.0, 0.0, 1.0));

    // Keep supernovae bright
    if (uSupernovaIntensity > 0.01 && vSpeed > 25.0) {
        alpha = max(alpha, smoothstep(25.0, 50.0, vSpeed) * uSupernovaIntensity * 0.8);
    }

    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
}
`,Bn=/Android|iPhone|iPad|iPod/i.test(navigator.userAgent),Nl=Bn&&(navigator.hardwareConcurrency||4)<=4,Dm=navigator.deviceMemory||4,Da=Nl&&Dm<=2,In=Da?256:Bn?512:1024,Ys=In*In,ei=document.getElementById("canvas"),At=new Yp({canvas:ei,antialias:!1,alpha:!0,premultipliedAlpha:!1,powerPreference:"high-performance",stencil:!1,depth:!0}),Lm=Bn?1.5:2;At.setPixelRatio(Math.min(window.devicePixelRatio,Lm));At.setSize(window.innerWidth,window.innerHeight);At.outputColorSpace=Nt;At.setClearColor(0,1);if(!At.capabilities.isWebGL2)throw document.getElementById("overlay").innerHTML='<div style="text-align:center;padding:2em;color:#f44"><h2>WebGL 2 Required</h2><p>Your browser does not support WebGL 2.</p></div>',new Error("WebGL 2 not available");ei.addEventListener("webglcontextlost",i=>{i.preventDefault(),document.getElementById("phase-label").textContent="CONTEXT LOST — RECOVERING…"},!1);ei.addEventListener("webglcontextrestored",()=>{location.reload()},!1);const Ks=new Kp,ut=new Gt(60,window.innerWidth/window.innerHeight,.1,1e4);ut.position.set(0,0,120);const jo={0:30,1:250,2:350,3:400,4:450,5:500,6:400,7:600},$t=new am(ut,ei);$t.enableDamping=!0;$t.dampingFactor=.04;$t.minDistance=10;$t.maxDistance=800;$t.autoRotate=!0;$t.autoRotateSpeed=.15;{const e=new Float32Array(24e3),t=new Float32Array(8e3*3);for(let r=0;r<8e3;r++){const a=r*3;e[a]=(Math.random()-.5)*2800,e[a+1]=(Math.random()-.5)*2800,e[a+2]=(Math.random()-.5)*2800;const o=Math.random();t[a]=.8+o*.2,t[a+1]=.85+o*.15,t[a+2]=.95+o*.05}const n=new Wt;n.setAttribute("position",new Mt(e,3)),n.setAttribute("color",new Mt(t,3));const s=new Pl({size:.5,vertexColors:!0,transparent:!0,opacity:.3,depthWrite:!1,sizeAttenuation:!0});Ks.add(new wa(n,s))}let Bs;{const e=new Float32Array(1200),t=new Float32Array(400*3),n=new Float32Array(400);for(let a=0;a<400;a++){const o=a*3,l=40+Math.random()*300,c=Math.random()*Math.PI*2,d=Math.acos(2*Math.random()-1);e[o]=l*Math.sin(d)*Math.cos(c),e[o+1]=l*Math.sin(d)*Math.sin(c),e[o+2]=l*Math.cos(d);const f=Math.random();f<.33?(t[o]=.25,t[o+1]=.05,t[o+2]=.35):f<.66?(t[o]=.05,t[o+1]=.2,t[o+2]=.3):(t[o]=.35,t[o+1]=.15,t[o+2]=.05),n[a]=15+Math.random()*40}const s=new Wt;s.setAttribute("position",new Mt(e,3)),s.setAttribute("color",new Mt(t,3)),s.setAttribute("size",new Mt(n,1));const r=new gt({vertexShader:`
            attribute float size;
            varying vec3 vColor;
            void main() {
                vColor = color;
                vec4 mv = modelViewMatrix * vec4(position, 1.0);
                gl_Position = projectionMatrix * mv;
                gl_PointSize = size * (200.0 / max(1.0, -mv.z));
                gl_PointSize = clamp(gl_PointSize, 2.0, 120.0);
            }
        `,fragmentShader:`
            varying vec3 vColor;
            void main() {
                float d = length(gl_PointCoord - 0.5);
                float alpha = smoothstep(0.5, 0.0, d) * 0.07;
                gl_FragColor = vec4(vColor, alpha);
            }
        `,transparent:!0,depthWrite:!1,blending:ki,vertexColors:!0});Bs=new wa(s,r),Ks.add(Bs)}const ht=new em(In,In,At);(Bn||Nl)&&ht.setDataType(sn);const js=ht.createTexture(),Zs=ht.createTexture();function La(){const i=js.image.data,e=Zs.image.data;for(let t=0;t<Ys;t++){const n=t*4,s=Math.pow(Math.random(),.5)*2,r=Math.random()*Math.PI*2,a=Math.acos(2*Math.random()-1);i[n+0]=s*Math.sin(a)*Math.cos(r),i[n+1]=s*Math.sin(a)*Math.sin(r),i[n+2]=s*Math.cos(a),i[n+3]=0,e[n+0]=(Math.random()-.5)*.5,e[n+1]=(Math.random()-.5)*.5,e[n+2]=(Math.random()-.5)*.5,e[n+3]=.5+Math.random()*1.5}}La();const Tn=ht.addVariable("texturePosition",Rm,js),En=ht.addVariable("textureVelocity",wm,Zs);ht.setVariableDependencies(Tn,[Tn,En]);ht.setVariableDependencies(En,[Tn,En]);const Ti=Tn.material.uniforms;Ti.uDeltaTime={value:0};Ti.uPhase={value:0};Ti.uTime={value:0};const be=En.material.uniforms;be.uTime={value:0};be.uDeltaTime={value:0};be.uExpansionRate={value:0};be.uTemperature={value:1e12};be.uGravityStrength={value:0};be.uGyro={value:new U};be.uAudioLevel={value:0};be.uAudioBass={value:0};be.uPhase={value:0};be.uMouseWorldPos={value:new U};be.uMouseStrength={value:0};be.uMouseActive={value:0};be.uGalaxySeed={value:0};be.uNumGalaxies={value:8};be.uSupernovaIntensity={value:0};be.uStarFormationRate={value:0};be.uQuantumJitter={value:0};be.uFlowTexture={value:null};be.uARActive={value:0};be.uARSurfaceForce={value:0};be.uARFlowForce={value:0};be.uARLuminance={value:0};Tn.wrapS=$n;Tn.wrapT=$n;En.wrapS=$n;En.wrapT=$n;const Zo=ht.init();Zo&&console.error("GPUComputationRenderer:",Zo);const Ol=new Wt,Is=new Float32Array(Ys*3);for(let i=0;i<Ys;i++)Is[i*3+0]=(i%In+.5)/In,Is[i*3+1]=(Math.floor(i/In)+.5)/In,Is[i*3+2]=0;Ol.setAttribute("position",new Mt(Is,3));const Ft=new gt({vertexShader:Cm,fragmentShader:Pm,uniforms:{uPositionTexture:{value:null},uVelocityTexture:{value:null},uPixelRatio:{value:At.getPixelRatio()},uPointSize:{value:Da?2.5:Bn?1.8:2},uTime:{value:0},uTemperature:{value:1e12},uPhase:{value:0},uSupernovaIntensity:{value:0},uStarFormationRate:{value:0},uARActive:{value:0},uARSceneLuminance:{value:0},uARSurfaceCoverage:{value:0}},transparent:!0,blending:ki,depthWrite:!1,depthTest:!0}),Um=new wa(Ol,Ft);Ks.add(Um);const $i=new nm(At);$i.addPass(new im(Ks,ut));const zs=Bn?.5:1,Xi=new Pi(new Se(window.innerWidth*zs,window.innerHeight*zs),1.8,.6,.05);$i.addPass(Xi);const _n=Da?null:Em();_n&&$i.addPass(_n);const Fe=new xm,Ua=new Sm,lt=new Mm(Ua),As=new ym(ut,ei),jn=new Am,en=new bm(At);let wr=0,bs=0,_a=60,Gs=Bn?1:2,Gi=0;function Im(i){wr++,bs+=i,bs>=.5&&(_a=Math.round(wr/bs),wr=0,bs=0,_a<24&&Gs>0?(Gi++,Gi>=3&&(Gs--,Gi=0,Fm())):Gi=Math.max(0,Gi-1))}function Fm(){Gs===0?(At.setPixelRatio(1),Xi.strength=.6,_n&&(_n.enabled=!1)):Gs===1&&(At.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),_n&&(_n.enabled=!0)),Ft.uniforms.uPixelRatio.value=At.getPixelRatio(),zl()}const Nm=document.getElementById("overlay"),Om=document.getElementById("hud"),Bm=document.getElementById("phase-label"),zm=document.getElementById("stats");function Bl(){lt.init(),Ua.init(),Fe.start(),Nm.classList.add("hidden"),Om.classList.add("visible"),lt.pulseHaptic(50),Gl.start(),Fn&&jn.supported&&(Fn.style.display="block")}function Gm(){Fe.restart(),La(),ht.renderTexture(js,ht.getCurrentRenderTarget(Tn)),ht.renderTexture(Zs,ht.getCurrentRenderTarget(En)),fn=0,ut.position.set(0,0,30),lt.pulseHaptic(50)}document.getElementById("start-btn").addEventListener("click",Bl);setTimeout(()=>{Fe.started||Bl()},2500);const Fn=document.getElementById("ar-toggle");Fn&&Fn.addEventListener("click",async()=>{const i=await jn.toggle(At);Fn.classList.toggle("active",i),Fn.textContent=i?"AR ON":"AR",i||en.reset()});window.addEventListener("keydown",i=>{(i.key==="r"||i.key==="R")&&Fe.started&&Gm(),(i.key==="f"||i.key==="F")&&Vm(),(i.key==="c"||i.key==="C")&&Fe.started&&Fn&&Fn.click()});let $o;function zl(){const i=window.innerWidth,e=window.innerHeight;ut.aspect=i/e,ut.updateProjectionMatrix(),At.setSize(i,e),$i.setSize(i,e),Xi.resolution.set(i*zs,e*zs),Ft.uniforms.uPixelRatio.value=At.getPixelRatio()}window.addEventListener("resize",()=>{clearTimeout($o),$o=setTimeout(zl,100)});function Vm(){document.fullscreenElement?document.exitFullscreen?.()||document.webkitExitFullscreen?.():ei.requestFullscreen?.()||ei.webkitRequestFullscreen?.()}const Gl=new Dl(!1);let fn=0;function Vl(){requestAnimationFrame(Vl);const i=Math.min(Gl.getDelta(),.05);fn+=i,Im(i),Fe.update(i),lt.update(i),Ti.uDeltaTime.value=i,Ti.uPhase.value=Fe.phase,Ti.uTime.value=fn,be.uTime.value=fn,be.uDeltaTime.value=i,be.uExpansionRate.value=Fe.expansionRate,be.uTemperature.value=Fe.temperature,be.uGravityStrength.value=Fe.gravityStrength,be.uPhase.value=Fe.phase,be.uGalaxySeed.value=Fe.galaxySeed,be.uNumGalaxies.value=Bn?Math.min(Fe.numGalaxies,8):Fe.numGalaxies,be.uSupernovaIntensity.value=Fe.supernovaIntensity,be.uStarFormationRate.value=Fe.starFormationRate,be.uQuantumJitter.value=Fe.quantumJitter,be.uGyro.value.set(lt.gyro.x,lt.gyro.y,lt.gyro.z),be.uAudioLevel.value=lt.audioLevel,be.uAudioBass.value=lt.audioBass,be.uMouseWorldPos.value.copy(As.worldPos),be.uMouseStrength.value=As.strength,be.uMouseActive.value=As.active?1:0,jn.active&&jn.video&&en.update(jn.video);const e=jn.active&&en.active?1:0;if(be.uARActive.value=e,be.uFlowTexture.value=en.flowTexture,be.uARSurfaceForce.value=en.surfaceCoverage*2,be.uARFlowForce.value=en.sceneMotion*3,be.uARLuminance.value=en.sceneLuminance,lt.hasGyro){$t.autoRotate=!1;const a=.04;ut.position.x+=(lt.gyro.x*100-ut.position.x)*a,ut.position.y+=(lt.gyro.y*80-ut.position.y)*a;const o=lt.gyro.z*Math.PI*.15;ut.rotation.z+=(o-ut.rotation.z)*.02;const l=jo[Fe.phase]||400;ut.position.z+=(l-ut.position.z)*.02,ut.lookAt(0,0,0),lt.hasMotion&&lt.shakeIntensity>2&&(be.uExpansionRate.value+=lt.shakeIntensity*.5)}else{const a=jo[Fe.phase]||400,o=Fe.phase===1?.03:.008;ut.position.z+=(a-ut.position.z)*o,Fe.phase>=6?$t.autoRotateSpeed=.08:Fe.phase>=3?$t.autoRotateSpeed=.35:$t.autoRotateSpeed=.15}Fe.needsReseed&&(La(),ht.renderTexture(js,ht.getCurrentRenderTarget(Tn)),ht.renderTexture(Zs,ht.getCurrentRenderTarget(En)),fn=0,ut.position.set(0,0,30),Fe.needsReseed=!1),Fe.started&&ht.compute();const t=ht.getCurrentRenderTarget(Tn).texture,n=ht.getCurrentRenderTarget(En).texture;Ft.uniforms.uPositionTexture.value=t,Ft.uniforms.uVelocityTexture.value=n,Ft.uniforms.uTime.value=fn,Ft.uniforms.uTemperature.value=Fe.temperature,Ft.uniforms.uPhase.value=Fe.phase,Ft.uniforms.uSupernovaIntensity.value=Fe.supernovaIntensity,Ft.uniforms.uStarFormationRate.value=Fe.starFormationRate,Ft.uniforms.uARActive.value=e,Ft.uniforms.uARSceneLuminance.value=en.sceneLuminance,Ft.uniforms.uARSurfaceCoverage.value=en.surfaceCoverage,Fe.shouldPulseHaptic()&&lt.pulseHaptic(12),Ua.update(Fe.phase,Fe.temperature,Fe.time);const s=.8+Math.min(Fe.temperature/1e10,1.5);Xi.strength+=(s-Xi.strength)*.05,_n&&(_n.uniforms.uTime.value=fn,_n.uniforms.uIntensity.value=Fe.phase<2?.08:.04),Bs.rotation.y=fn*.003,Bs.rotation.x=Math.sin(fn*.002)*.1,$t.update(),$i.render(),Bm.textContent=Fe.phaseName;const r=(lt.hasGyro?" · GYRO":"")+(lt.hasMotion?" · ACCEL":"")+(lt.hasAudio?" · AUDIO":"")+(jn.active?" · CAM":"")+(en.active?" · FLOW":"")+(As.active?" · TOUCH":"");zm.textContent=`${(Ys/1e6).toFixed(2)}M particles · T = ${Fe.temperature.toExponential(1)} K · ${_a} FPS`+(Fe.cycleCount>0?` · CYCLE ${Fe.cycleCount+1}`:"")+r}Vl();
