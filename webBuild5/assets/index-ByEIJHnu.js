(function(){const r=document.createElement("link").relList;if(!(r&&r.supports&&r.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const n=function(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}(t);fetch(t.href,n)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="162",Ls=0,Is=1,Ns=2,Us=0,Yl=1,Ds=2,ql=3,ol=1,Kl=2,rn=3,sn=0,xt=1,Hn=100,ll=0,Zl=1,Jl=2,Mn=0,$l=1,Ql=2,ec=3,tc=4,nc=5,ic=6,rc=7,Os="attached",_i=301,vi=302,Nr=303,Vr=306,xi=1e3,Bt=1001,Ur=1002,ht=1003,Ga=1004,hi=1005,Je=1006,Lr=1007,Sn=1008,fi=1009,ns=1012,cl=1013,vn=1014,Et=1015,an=1016,kn=1020,Wt=1023,Gn=1026,yi=1027,Qr=33776,ea=33777,ta=33778,na=33779,ia=36492,Xi=2300,Mi=2301,ra=2302,ui="",pt="srgb",at="srgb-linear",is="display-p3",kr="display-p3-linear",Dr="linear",Ge="srgb",Or="rec709",Fr="p3",Yn=7680,Wa=35044,Fs="300 es",Xa=1035,Si=2e3,Br=2001;class jn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Bs=1234567;const ki=Math.PI/180,Ei=180/Math.PI;function zt(){const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return(lt[255&r]+lt[r>>8&255]+lt[r>>16&255]+lt[r>>24&255]+"-"+lt[255&e]+lt[e>>8&255]+"-"+lt[e>>16&15|64]+lt[e>>24&255]+"-"+lt[63&t|128]+lt[t>>8&255]+"-"+lt[t>>16&255]+lt[t>>24&255]+lt[255&n]+lt[n>>8&255]+lt[n>>16&255]+lt[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function ja(r,e){return(r%e+e)%e}function Gi(r,e,t){return(1-t)*r+t*e}function Ya(r){return!(r&r-1)&&r!==0}function zr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ft(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ze(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}const Hr={DEG2RAD:ki,RAD2DEG:Ei,generateUUID:zt,clamp:nt,euclideanModulo:ja,mapLinear:function(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)},inverseLerp:function(r,e,t){return r!==e?(t-r)/(e-r):0},lerp:Gi,damp:function(r,e,t,n){return Gi(r,e,1-Math.exp(-t*n))},pingpong:function(r,e=1){return e-Math.abs(ja(r,2*e)-e)},smoothstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*(3-2*r)},smootherstep:function(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e))*r*r*(r*(6*r-15)+10)},randInt:function(r,e){return r+Math.floor(Math.random()*(e-r+1))},randFloat:function(r,e){return r+Math.random()*(e-r)},randFloatSpread:function(r){return r*(.5-Math.random())},seededRandom:function(r){r!==void 0&&(Bs=r);let e=Bs+=1831565813;return e=Math.imul(e^e>>>15,1|e),e^=e+Math.imul(e^e>>>7,61|e),((e^e>>>14)>>>0)/4294967296},degToRad:function(r){return r*ki},radToDeg:function(r){return r*Ei},isPowerOfTwo:Ya,ceilPowerOfTwo:function(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))},floorPowerOfTwo:zr,setQuaternionFromProperEuler:function(r,e,t,n,i){const a=Math.cos,s=Math.sin,o=a(t/2),c=s(t/2),l=a((e+n)/2),h=s((e+n)/2),u=a((e-n)/2),d=s((e-n)/2),p=a((n-e)/2),m=s((n-e)/2);switch(i){case"XYX":r.set(o*h,c*u,c*d,o*l);break;case"YZY":r.set(c*d,o*h,c*u,o*l);break;case"ZXZ":r.set(c*u,c*d,o*h,o*l);break;case"XZX":r.set(o*h,c*m,c*p,o*l);break;case"YXY":r.set(c*p,o*h,c*m,o*l);break;case"ZYZ":r.set(c*m,c*p,o*h,o*l)}},normalize:ze,denormalize:Ft};class ve{constructor(e=0,t=0){ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ae{constructor(e,t,n,i,a,s,o,c,l){Ae.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,c,l)}set(e,t,n,i,a,s,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=a,h[5]=c,h[6]=n,h[7]=s,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],p=n[5],m=n[8],v=i[0],_=i[3],f=i[6],x=i[1],g=i[4],y=i[7],C=i[2],w=i[5],T=i[8];return a[0]=s*v+o*x+c*C,a[3]=s*_+o*g+c*w,a[6]=s*f+o*y+c*T,a[1]=l*v+h*x+u*C,a[4]=l*_+h*g+u*w,a[7]=l*f+h*y+u*T,a[2]=d*v+p*x+m*C,a[5]=d*_+p*g+m*w,a[8]=d*f+p*y+m*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*s*h-t*o*l-n*a*h+n*o*c+i*a*l-i*s*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*s-o*l,d=o*c-h*a,p=l*a-s*c,m=t*u+n*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=u*v,e[1]=(i*l-h*n)*v,e[2]=(o*n-i*s)*v,e[3]=d*v,e[4]=(h*t-i*c)*v,e[5]=(i*a-o*t)*v,e[6]=p*v,e[7]=(n*c-l*t)*v,e[8]=(s*t-n*a)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,o){const c=Math.cos(a),l=Math.sin(a);return this.set(n*c,n*l,-n*(c*s+l*o)+s+e,-i*l,i*c,-i*(-l*s+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(aa.makeScale(e,t)),this}rotate(e){return this.premultiply(aa.makeRotation(-e)),this}translate(e,t){return this.premultiply(aa.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new Ae;function hl(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ji(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ac(){const r=ji("canvas");return r.style.display="block",r}const zs={};function ul(r){r in zs||(zs[r]=!0)}const Hs=new Ae().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Vs=new Ae().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),$i={[at]:{transfer:Dr,primaries:Or,toReference:r=>r,fromReference:r=>r},[pt]:{transfer:Ge,primaries:Or,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[kr]:{transfer:Dr,primaries:Fr,toReference:r=>r.applyMatrix3(Vs),fromReference:r=>r.applyMatrix3(Hs)},[is]:{transfer:Ge,primaries:Fr,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Vs),fromReference:r=>r.applyMatrix3(Hs).convertLinearToSRGB()}},sc=new Set([at,kr]),He={enabled:!0,_workingColorSpace:at,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!sc.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=$i[e].toReference;return(0,$i[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return $i[r].primaries},getTransfer:function(r){return r===ui?Dr:$i[r].transfer}};function mi(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function sa(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let qn;class dl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qn===void 0&&(qn=ji("canvas")),qn.width=e.width,qn.height=e.height;const n=qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=qn}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ji("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=255*mi(a[s]/255);return n.putImageData(i,0,0),t}if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*mi(t[n]/255)):t[n]=mi(t[n]);return{data:t,width:e.width,height:e.height}}return e}}let oc=0;class pl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:oc++}),this.uuid=zt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,o=i.length;s<o;s++)i[s].isDataTexture?a.push(oa(i[s].image)):a.push(oa(i[s]))}else a=oa(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function oa(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dl.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let lc=0;class it extends jn{constructor(e=it.DEFAULT_IMAGE,t=it.DEFAULT_MAPPING,n=1001,i=1001,a=1006,s=1008,o=1023,c=1009,l=it.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lc++}),this.uuid=zt(),this.name="",this.source=new pl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ae,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xi:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case Ur:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case xi:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case Ur:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}it.DEFAULT_IMAGE=null,it.DEFAULT_MAPPING=300,it.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,n=0,i=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],p=c[5],m=c[9],v=c[2],_=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+_)<.1&&Math.abs(l+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(l+1)/2,y=(p+1)/2,C=(f+1)/2,w=(h+d)/4,T=(u+v)/4,U=(m+_)/4;return g>y&&g>C?g<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(g),i=w/n,a=T/n):y>C?y<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(y),n=w/i,a=U/i):C<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(C),n=T/a,i=U/a),this.set(n,i,a,t),this}let x=Math.sqrt((_-m)*(_-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(_-m)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((l+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cc extends jn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new it(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xn extends cc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class fl extends it{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hc extends it{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=ht,this.minFilter=ht,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ht{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=a[s+0],p=a[s+1],m=a[s+2],v=a[s+3];if(o===0)return e[t+0]=c,e[t+1]=l,e[t+2]=h,void(e[t+3]=u);if(o===1)return e[t+0]=d,e[t+1]=p,e[t+2]=m,void(e[t+3]=v);if(u!==v||c!==d||l!==p||h!==m){let _=1-o;const f=c*d+l*p+h*m+u*v,x=f>=0?1:-1,g=1-f*f;if(g>Number.EPSILON){const C=Math.sqrt(g),w=Math.atan2(C,f*x);_=Math.sin(_*w)/C,o=Math.sin(o*w)/C}const y=o*x;if(c=c*_+d*y,l=l*_+p*y,h=h*_+m*y,u=u*_+v*y,_===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=C,l*=C,h*=C,u*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,a,s){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=a[s],d=a[s+1],p=a[s+2],m=a[s+3];return e[t]=o*m+h*u+c*p-l*d,e[t+1]=c*m+h*d+l*u-o*p,e[t+2]=l*m+h*p+o*d-c*u,e[t+3]=h*m-o*u-c*d-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,s=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(a/2),d=c(n/2),p=c(i/2),m=c(a/2);switch(s){case"XYZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"YXZ":this._x=d*h*u+l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"ZXY":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u-d*p*m;break;case"ZYX":this._x=d*h*u-l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u+d*p*m;break;case"YZX":this._x=d*h*u+l*p*m,this._y=l*p*u+d*h*m,this._z=l*h*m-d*p*u,this._w=l*h*u-d*p*m;break;case"XZY":this._x=d*h*u-l*p*m,this._y=l*p*u-d*h*m,this._z=l*h*m+d*p*u,this._w=l*h*u+d*p*m}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=n+o+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-c)*p,this._y=(a-l)*p,this._z=(s-i)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-c)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(a-l)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(s-i)/p,this._x=(a+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+s*o+i*l-a*c,this._y=i*h+s*c+a*o-n*l,this._z=a*h+s*l+n*c-i*o,this._w=s*h-n*o-i*c-a*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let o=s*e._w+n*e._x+i*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const c=1-o*o;if(c<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ks.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ks.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,o=e.z,c=e.w,l=2*(s*i-o*n),h=2*(o*t-a*i),u=2*(a*n-s*t);return this.x=t+c*l+s*u-o*h,this.y=n+c*h+o*l-a*u,this.z=i+c*u+a*h-s*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,o=t.y,c=t.z;return this.x=i*c-a*o,this.y=a*s-n*c,this.z=n*o-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return la.copy(this).projectOnVector(e),this.sub(la)}reflect(e){return this.sub(la.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new P,ks=new Ht;class on{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Ut):Ut.fromBufferAttribute(a,s),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ni),er.subVectors(this.max,Ni),Kn.subVectors(e.a,Ni),Zn.subVectors(e.b,Ni),Jn.subVectors(e.c,Ni),cn.subVectors(Zn,Kn),hn.subVectors(Jn,Zn),Pn.subVectors(Kn,Jn);let t=[0,-cn.z,cn.y,0,-hn.z,hn.y,0,-Pn.z,Pn.y,cn.z,0,-cn.x,hn.z,0,-hn.x,Pn.z,0,-Pn.x,-cn.y,cn.x,0,-hn.y,hn.x,0,-Pn.y,Pn.x,0];return!!ca(t,Kn,Zn,Jn,er)&&(t=[1,0,0,0,1,0,0,0,1],!!ca(t,Kn,Zn,Jn,er)&&(tr.crossVectors(cn,hn),t=[tr.x,tr.y,tr.z],ca(t,Kn,Zn,Jn,er)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(Ut).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Zt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Zt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Zt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Zt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Zt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Zt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Zt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Zt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Zt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Zt=[new P,new P,new P,new P,new P,new P,new P,new P],Ut=new P,Qi=new on,Kn=new P,Zn=new P,Jn=new P,cn=new P,hn=new P,Pn=new P,Ni=new P,er=new P,tr=new P,Ln=new P;function ca(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){Ln.fromArray(r,a);const o=i.x*Math.abs(Ln.x)+i.y*Math.abs(Ln.y)+i.z*Math.abs(Ln.z),c=e.dot(Ln),l=t.dot(Ln),h=n.dot(Ln);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const uc=new on,Ui=new P,ha=new P;class qt{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):uc.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ui.subVectors(e,this.center);const t=Ui.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(Ui,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ha.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ui.copy(e.center).add(ha)),this.expandByPoint(Ui.copy(e.center).sub(ha))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Jt=new P,ua=new P,nr=new P,un=new P,da=new P,ir=new P,pa=new P;class Ri{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Jt)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Jt.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Jt.copy(this.origin).addScaledVector(this.direction,t),Jt.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){ua.copy(e).add(t).multiplyScalar(.5),nr.copy(t).sub(e).normalize(),un.copy(this.origin).sub(ua);const a=.5*e.distanceTo(t),s=-this.direction.dot(nr),o=un.dot(this.direction),c=-un.dot(nr),l=un.lengthSq(),h=Math.abs(1-s*s);let u,d,p,m;if(h>0)if(u=s*c-o,d=s*o-c,m=a*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,p=u*(u+s*d+2*o)+d*(s*u+d+2*c)+l}else d=a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d=-a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-s*a+o)),d=u>0?-a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-a,-c),a),p=d*(d+2*c)+l):(u=Math.max(0,-(s*a+o)),d=u>0?a:Math.min(Math.max(-a,-c),a),p=-u*u+d*(d+2*c)+l);else d=s>0?-a:a,u=Math.max(0,-(s*d+o)),p=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ua).addScaledVector(nr,d),p}intersectSphere(e,t){Jt.subVectors(e.center,this.origin);const n=Jt.dot(this.direction),i=Jt.dot(Jt)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),o=n-s,c=n+s;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(a=(e.min.y-d.y)*h,s=(e.max.y-d.y)*h):(a=(e.max.y-d.y)*h,s=(e.min.y-d.y)*h),n>s||a>i?null:((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),n>c||o>i?null:((o>n||n!=n)&&(n=o),(c<i||i!=i)&&(i=c),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Jt)!==null}intersectTriangle(e,t,n,i,a){da.subVectors(t,e),ir.subVectors(n,e),pa.crossVectors(da,ir);let s,o=this.direction.dot(pa);if(o>0){if(i)return null;s=1}else{if(!(o<0))return null;s=-1,o=-o}un.subVectors(this.origin,e);const c=s*this.direction.dot(ir.crossVectors(un,ir));if(c<0)return null;const l=s*this.direction.dot(da.cross(un));if(l<0||c+l>o)return null;const h=-s*un.dot(pa);return h<0?null:this.at(h/o,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Te{constructor(e,t,n,i,a,s,o,c,l,h,u,d,p,m,v,_){Te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,o,c,l,h,u,d,p,m,v,_)}set(e,t,n,i,a,s,o,c,l,h,u,d,p,m,v,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=s,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=m,f[11]=v,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Te().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/$n.setFromMatrixColumn(e,0).length(),a=1/$n.setFromMatrixColumn(e,1).length(),s=1/$n.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*h,p=s*u,m=o*h,v=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=p+m*l,t[5]=d-v*l,t[9]=-o*c,t[2]=v-d*l,t[6]=m+p*l,t[10]=s*c}else if(e.order==="YXZ"){const d=c*h,p=c*u,m=l*h,v=l*u;t[0]=d+v*o,t[4]=m*o-p,t[8]=s*l,t[1]=s*u,t[5]=s*h,t[9]=-o,t[2]=p*o-m,t[6]=v+d*o,t[10]=s*c}else if(e.order==="ZXY"){const d=c*h,p=c*u,m=l*h,v=l*u;t[0]=d-v*o,t[4]=-s*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=s*h,t[9]=v-d*o,t[2]=-s*l,t[6]=o,t[10]=s*c}else if(e.order==="ZYX"){const d=s*h,p=s*u,m=o*h,v=o*u;t[0]=c*h,t[4]=m*l-p,t[8]=d*l+v,t[1]=c*u,t[5]=v*l+d,t[9]=p*l-m,t[2]=-l,t[6]=o*c,t[10]=s*c}else if(e.order==="YZX"){const d=s*c,p=s*l,m=o*c,v=o*l;t[0]=c*h,t[4]=v-d*u,t[8]=m*u+p,t[1]=u,t[5]=s*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*u+m,t[10]=d-v*u}else if(e.order==="XZY"){const d=s*c,p=s*l,m=o*c,v=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+v,t[5]=s*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=v*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dc,e,pc)}lookAt(e,t,n){const i=this.elements;return Mt.subVectors(e,t),Mt.lengthSq()===0&&(Mt.z=1),Mt.normalize(),dn.crossVectors(n,Mt),dn.lengthSq()===0&&(Math.abs(n.z)===1?Mt.x+=1e-4:Mt.z+=1e-4,Mt.normalize(),dn.crossVectors(n,Mt)),dn.normalize(),rr.crossVectors(Mt,dn),i[0]=dn.x,i[4]=rr.x,i[8]=Mt.x,i[1]=dn.y,i[5]=rr.y,i[9]=Mt.y,i[2]=dn.z,i[6]=rr.z,i[10]=Mt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],p=n[13],m=n[2],v=n[6],_=n[10],f=n[14],x=n[3],g=n[7],y=n[11],C=n[15],w=i[0],T=i[4],U=i[8],L=i[12],B=i[1],re=i[5],A=i[9],k=i[13],Z=i[2],se=i[6],pe=i[10],K=i[14],j=i[3],Y=i[7],ue=i[11],X=i[15];return a[0]=s*w+o*B+c*Z+l*j,a[4]=s*T+o*re+c*se+l*Y,a[8]=s*U+o*A+c*pe+l*ue,a[12]=s*L+o*k+c*K+l*X,a[1]=h*w+u*B+d*Z+p*j,a[5]=h*T+u*re+d*se+p*Y,a[9]=h*U+u*A+d*pe+p*ue,a[13]=h*L+u*k+d*K+p*X,a[2]=m*w+v*B+_*Z+f*j,a[6]=m*T+v*re+_*se+f*Y,a[10]=m*U+v*A+_*pe+f*ue,a[14]=m*L+v*k+_*K+f*X,a[3]=x*w+g*B+y*Z+C*j,a[7]=x*T+g*re+y*se+C*Y,a[11]=x*U+g*A+y*pe+C*ue,a[15]=x*L+g*k+y*K+C*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*c*u-i*l*u-a*o*d+n*l*d+i*o*p-n*c*p)+e[7]*(+t*c*p-t*l*d+a*s*d-i*s*p+i*l*h-a*c*h)+e[11]*(+t*l*u-t*o*p-a*s*u+n*s*p+a*o*h-n*l*h)+e[15]*(-i*o*h-t*c*u+t*o*d+i*s*u-n*s*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],p=e[11],m=e[12],v=e[13],_=e[14],f=e[15],x=u*_*l-v*d*l+v*c*p-o*_*p-u*c*f+o*d*f,g=m*d*l-h*_*l-m*c*p+s*_*p+h*c*f-s*d*f,y=h*v*l-m*u*l+m*o*p-s*v*p-h*o*f+s*u*f,C=m*u*c-h*v*c-m*o*d+s*v*d+h*o*_-s*u*_,w=t*x+n*g+i*y+a*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=x*T,e[1]=(v*d*a-u*_*a-v*i*p+n*_*p+u*i*f-n*d*f)*T,e[2]=(o*_*a-v*c*a+v*i*l-n*_*l-o*i*f+n*c*f)*T,e[3]=(u*c*a-o*d*a-u*i*l+n*d*l+o*i*p-n*c*p)*T,e[4]=g*T,e[5]=(h*_*a-m*d*a+m*i*p-t*_*p-h*i*f+t*d*f)*T,e[6]=(m*c*a-s*_*a-m*i*l+t*_*l+s*i*f-t*c*f)*T,e[7]=(s*d*a-h*c*a+h*i*l-t*d*l-s*i*p+t*c*p)*T,e[8]=y*T,e[9]=(m*u*a-h*v*a-m*n*p+t*v*p+h*n*f-t*u*f)*T,e[10]=(s*v*a-m*o*a+m*n*l-t*v*l-s*n*f+t*o*f)*T,e[11]=(h*o*a-s*u*a-h*n*l+t*u*l+s*n*p-t*o*p)*T,e[12]=C*T,e[13]=(h*v*i-m*u*i+m*n*d-t*v*d-h*n*_+t*u*_)*T,e[14]=(m*o*i-s*v*i-m*n*c+t*v*c+s*n*_-t*o*_)*T,e[15]=(s*u*i-h*o*i+h*n*c-t*u*c-s*n*d+t*o*d)*T,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,o=e.y,c=e.z,l=a*s,h=a*o;return this.set(l*s+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*s,0,l*c-i*o,h*c+i*s,a*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,o=t._z,c=t._w,l=a+a,h=s+s,u=o+o,d=a*l,p=a*h,m=a*u,v=s*h,_=s*u,f=o*u,x=c*l,g=c*h,y=c*u,C=n.x,w=n.y,T=n.z;return i[0]=(1-(v+f))*C,i[1]=(p+y)*C,i[2]=(m-g)*C,i[3]=0,i[4]=(p-y)*w,i[5]=(1-(d+f))*w,i[6]=(_+x)*w,i[7]=0,i[8]=(m+g)*T,i[9]=(_-x)*T,i[10]=(1-(d+v))*T,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=$n.set(i[0],i[1],i[2]).length();const s=$n.set(i[4],i[5],i[6]).length(),o=$n.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Dt.copy(this);const c=1/a,l=1/s,h=1/o;return Dt.elements[0]*=c,Dt.elements[1]*=c,Dt.elements[2]*=c,Dt.elements[4]*=l,Dt.elements[5]*=l,Dt.elements[6]*=l,Dt.elements[8]*=h,Dt.elements[9]*=h,Dt.elements[10]*=h,t.setFromRotationMatrix(Dt),n.x=a,n.y=s,n.z=o,this}makePerspective(e,t,n,i,a,s,o=2e3){const c=this.elements,l=2*a/(t-e),h=2*a/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,m;if(o===Si)p=-(s+a)/(s-a),m=-2*s*a/(s-a);else{if(o!==Br)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);p=-s/(s-a),m=-s*a/(s-a)}return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,a,s,o=2e3){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(s-a),d=(t+e)*l,p=(n+i)*h;let m,v;if(o===Si)m=(s+a)*u,v=-2*u;else{if(o!==Br)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);m=a*u,v=-1*u}return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const $n=new P,Dt=new Te,dc=new P(0,0,0),pc=new P(1,1,1),dn=new P,rr=new P,Mt=new P,Gs=new Te,Ws=new Ht;class Yt{constructor(e=0,t=0,n=0,i=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(c,a));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(c,a)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gs.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gs,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ws.setFromEuler(this),this.setFromQuaternion(Ws,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class rs{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}}let fc=0;const Xs=new P,Qn=new Ht,$t=new Te,ar=new P,Di=new P,mc=new P,gc=new Ht,js=new P(1,0,0),Ys=new P(0,1,0),qs=new P(0,0,1),_c={type:"added"},vc={type:"removed"},fa={type:"childadded",child:null},ma={type:"childremoved",child:null};class ke extends jn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fc++}),this.uuid=zt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ke.DEFAULT_UP.clone();const e=new P,t=new Yt,n=new Ht,i=new P(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Te},normalMatrix:{value:new Ae}}),this.matrix=new Te,this.matrixWorld=new Te,this.matrixAutoUpdate=ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.multiply(Qn),this}rotateOnWorldAxis(e,t){return Qn.setFromAxisAngle(e,t),this.quaternion.premultiply(Qn),this}rotateX(e){return this.rotateOnAxis(js,e)}rotateY(e){return this.rotateOnAxis(Ys,e)}rotateZ(e){return this.rotateOnAxis(qs,e)}translateOnAxis(e,t){return Xs.copy(e).applyQuaternion(this.quaternion),this.position.add(Xs.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(js,e)}translateY(e){return this.translateOnAxis(Ys,e)}translateZ(e){return this.translateOnAxis(qs,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($t.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ar.copy(e):ar.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Di.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$t.lookAt(Di,ar,this.up):$t.lookAt(ar,Di,this.up),this.quaternion.setFromRotationMatrix($t),i&&($t.extractRotation(i.matrixWorld),Qn.setFromRotationMatrix($t),this.quaternion.premultiply(Qn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this||e&&e.isObject3D&&(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(_c),fa.child=e,this.dispatchEvent(fa),fa.child=null),this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vc),ma.child=e,this.dispatchEvent(ma),ma.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$t.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$t.multiply(e.parent.matrixWorld)),e.applyMatrix4($t),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,e,mc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Di,gc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];a.matrixWorldAutoUpdate!==!0&&e!==!0||a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const o=i[a];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function a(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];a(e.shapes,u)}else a(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(a(e.materials,this.material[c]));i.material=o}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(a(e.animations,c))}}if(t){const o=s(e.geometries),c=s(e.materials),l=s(e.textures),h=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),m=s(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=i,n;function s(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ke.DEFAULT_UP=new P(0,1,0),ke.DEFAULT_MATRIX_AUTO_UPDATE=!0,ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ot=new P,Qt=new P,ga=new P,en=new P,ei=new P,ti=new P,Ks=new P,_a=new P,va=new P,xa=new P;class Gt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ot.subVectors(e,t),i.cross(Ot);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){Ot.subVectors(i,t),Qt.subVectors(n,t),ga.subVectors(e,t);const s=Ot.dot(Ot),o=Ot.dot(Qt),c=Ot.dot(ga),l=Qt.dot(Qt),h=Qt.dot(ga),u=s*l-o*o;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(l*c-o*h)*d,m=(s*h-o*c)*d;return a.set(1-p-m,m,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,en)!==null&&en.x>=0&&en.y>=0&&en.x+en.y<=1}static getInterpolation(e,t,n,i,a,s,o,c){return this.getBarycoord(e,t,n,i,en)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(a,en.x),c.addScaledVector(s,en.y),c.addScaledVector(o,en.z),c)}static isFrontFacing(e,t,n,i){return Ot.subVectors(n,t),Qt.subVectors(e,t),Ot.cross(Qt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ot.subVectors(this.c,this.b),Qt.subVectors(this.a,this.b),.5*Ot.cross(Qt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Gt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return Gt.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return Gt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,o;ei.subVectors(i,n),ti.subVectors(a,n),_a.subVectors(e,n);const c=ei.dot(_a),l=ti.dot(_a);if(c<=0&&l<=0)return t.copy(n);va.subVectors(e,i);const h=ei.dot(va),u=ti.dot(va);if(h>=0&&u<=h)return t.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return s=c/(c-h),t.copy(n).addScaledVector(ei,s);xa.subVectors(e,a);const p=ei.dot(xa),m=ti.dot(xa);if(m>=0&&p<=m)return t.copy(a);const v=p*l-c*m;if(v<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(ti,o);const _=h*m-p*u;if(_<=0&&u-h>=0&&p-m>=0)return Ks.subVectors(a,i),o=(u-h)/(u-h+(p-m)),t.copy(i).addScaledVector(Ks,o);const f=1/(_+v+d);return s=v*f,o=d*f,t.copy(n).addScaledVector(ei,s).addScaledVector(ti,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ml={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},pn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function ya(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}class Ee{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=ja(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=ya(s,a,e+1/3),this.g=ya(s,a,e),this.b=ya(s,a,e-1/3)}return He.toWorkingColorSpace(this,i),this}setStyle(e,t=pt){function n(a){a!==void 0&&parseFloat(a)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],o=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=ml[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mi(e.r),this.g=mi(e.g),this.b=mi(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return He.fromWorkingColorSpace(ct.copy(this),e),65536*Math.round(nt(255*ct.r,0,255))+256*Math.round(nt(255*ct.g,0,255))+Math.round(nt(255*ct.b,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(ct.copy(this),t);const n=ct.r,i=ct.g,a=ct.b,s=Math.max(n,i,a),o=Math.min(n,i,a);let c,l;const h=(o+s)/2;if(o===s)c=0,l=0;else{const u=s-o;switch(l=h<=.5?u/(s+o):u/(2-s-o),s){case n:c=(i-a)/u+(i<a?6:0);break;case i:c=(a-n)/u+2;break;case a:c=(n-i)/u+4}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(ct.copy(this),t),e.r=ct.r,e.g=ct.g,e.b=ct.b,e}getStyle(e=pt){He.fromWorkingColorSpace(ct.copy(this),e);const t=ct.r,n=ct.g,i=ct.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(pn),this.setHSL(pn.h+e,pn.s+t,pn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(pn),e.getHSL(sr);const n=Gi(pn.h,sr.h,t),i=Gi(pn.s,sr.s,t),a=Gi(pn.l,sr.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ct=new Ee;Ee.NAMES=ml;let xc=0;class Xt extends jn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xc++}),this.uuid=zt(),this.name="",this.type="Material",this.blending=1,this.side=sn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=Hn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ee(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yn,this.stencilZFail=Yn,this.stencilZPass=Yn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(a){const s=[];for(const o in a){const c=a[o];delete c.metadata,s.push(c)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==sn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==Hn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Yn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Yn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class xn extends Xt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ee(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=ll,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const tn=yc();function yc(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[256|c]=32768,i[c]=24,i[256|c]=24):l<-14?(n[c]=1024>>-l-14,n[256|c]=1024>>-l-14|32768,i[c]=-l-1,i[256|c]=-l-1):l<=15?(n[c]=l+15<<10,n[256|c]=l+15<<10|32768,i[c]=13,i[256|c]=13):l<128?(n[c]=31744,n[256|c]=64512,i[c]=24,i[256|c]=24):(n[c]=31744,n[256|c]=64512,i[c]=13,i[256|c]=13)}const a=new Uint32Array(2048),s=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(8388608&l);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,a[c]=l|h}for(let c=1024;c<2048;++c)a[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)s[c]=c<<23;s[31]=1199570944,s[32]=2147483648;for(let c=33;c<63;++c)s[c]=2147483648+(c-32<<23);s[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:a,exponentTable:s,offsetTable:o}}const or={toHalfFloat:function(r){Math.abs(r),r=nt(r,-65504,65504),tn.floatView[0]=r;const e=tn.uint32View[0],t=e>>23&511;return tn.baseTable[t]+((8388607&e)>>tn.shiftTable[t])},fromHalfFloat:function(r){const e=r>>10;return tn.uint32View[0]=tn.mantissaTable[tn.offsetTable[e]+(1023&r)]+tn.exponentTable[e],tn.floatView[0]}},qe=new P,lr=new ve;class mt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Et,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ul("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix3(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyMatrix4(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.applyNormalMatrix(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qe.fromBufferAttribute(this,t),qe.transformDirection(e),this.setXYZ(t,qe.x,qe.y,qe.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ft(t,this.array)),t}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ft(t,this.array)),t}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ft(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ft(t,this.array)),t}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),i=ze(i,this.array),a=ze(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wa&&(e.usage=this.usage),e}}class gl extends mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class _l extends mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends mt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mc=0;const Rt=new Te,Ma=new ke,ni=new P,St=new on,Oi=new on,et=new P;class Tt extends jn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=zt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hl(e)?_l:gl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ae().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rt.makeRotationFromQuaternion(e),this.applyMatrix4(Rt),this}rotateX(e){return Rt.makeRotationX(e),this.applyMatrix4(Rt),this}rotateY(e){return Rt.makeRotationY(e),this.applyMatrix4(Rt),this}rotateZ(e){return Rt.makeRotationZ(e),this.applyMatrix4(Rt),this}translate(e,t,n){return Rt.makeTranslation(e,t,n),this.applyMatrix4(Rt),this}scale(e,t,n){return Rt.makeScale(e,t,n),this.applyMatrix4(Rt),this}lookAt(e){return Ma.lookAt(e),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ni).negate(),this.translate(ni.x,ni.y,ni.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new on);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];St.setFromBufferAttribute(a),this.morphTargetsRelative?(et.addVectors(this.boundingBox.min,St.min),this.boundingBox.expandByPoint(et),et.addVectors(this.boundingBox.max,St.max),this.boundingBox.expandByPoint(et)):(this.boundingBox.expandByPoint(St.min),this.boundingBox.expandByPoint(St.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qt);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)this.boundingSphere.set(new P,1/0);else if(e){const n=this.boundingSphere.center;if(St.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Oi.setFromBufferAttribute(o),this.morphTargetsRelative?(et.addVectors(St.min,Oi.min),St.expandByPoint(et),et.addVectors(St.max,Oi.max),St.expandByPoint(et)):(St.expandByPoint(Oi.min),St.expandByPoint(Oi.max))}St.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)et.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(et));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)et.fromBufferAttribute(o,l),c&&(ni.fromBufferAttribute(e,l),et.add(ni)),i=Math.max(i,n.distanceToSquared(et))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new mt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),o=[],c=[];for(let U=0;U<n.count;U++)o[U]=new P,c[U]=new P;const l=new P,h=new P,u=new P,d=new ve,p=new ve,m=new ve,v=new P,_=new P;function f(U,L,B){l.fromBufferAttribute(n,U),h.fromBufferAttribute(n,L),u.fromBufferAttribute(n,B),d.fromBufferAttribute(a,U),p.fromBufferAttribute(a,L),m.fromBufferAttribute(a,B),h.sub(l),u.sub(l),p.sub(d),m.sub(d);const re=1/(p.x*m.y-m.x*p.y);isFinite(re)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(re),_.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(re),o[U].add(v),o[L].add(v),o[B].add(v),c[U].add(_),c[L].add(_),c[B].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let U=0,L=x.length;U<L;++U){const B=x[U],re=B.start;for(let A=re,k=re+B.count;A<k;A+=3)f(e.getX(A+0),e.getX(A+1),e.getX(A+2))}const g=new P,y=new P,C=new P,w=new P;function T(U){C.fromBufferAttribute(i,U),w.copy(C);const L=o[U];g.copy(L),g.sub(C.multiplyScalar(C.dot(L))).normalize(),y.crossVectors(w,L);const B=y.dot(c[U])<0?-1:1;s.setXYZW(U,g.x,g.y,g.z,B)}for(let U=0,L=x.length;U<L;++U){const B=x[U],re=B.start;for(let A=re,k=re+B.count;A<k;A+=3)T(e.getX(A+0)),T(e.getX(A+1)),T(e.getX(A+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new mt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,a=new P,s=new P,o=new P,c=new P,l=new P,h=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const m=e.getX(d+0),v=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,m),a.fromBufferAttribute(t,v),s.fromBufferAttribute(t,_),h.subVectors(s,a),u.subVectors(i,a),h.cross(u),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,_),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(_,l.x,l.y,l.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),h.subVectors(s,a),u.subVectors(i,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)et.fromBufferAttribute(e,t),et.normalize(),e.setXYZ(t,et.x,et.y,et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h);let p=0,m=0;for(let v=0,_=c.length;v<_;v++){p=o.isInterleavedBufferAttribute?c[v]*o.data.stride+o.offset:c[v]*h;for(let f=0;f<h;f++)d[m++]=l[p++]}return new mt(d,h,u)}if(this.index===null)return this;const t=new Tt,n=this.index.array,i=this.attributes;for(const o in i){const c=e(i[o],n);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const c=[],l=a[o];for(let h=0,u=l.length;h<u;h++){const d=e(l[h],n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,c=s.length;o<c;o++){const l=s[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let a=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const p=l[u];h.push(p.toJSON(e.data))}h.length>0&&(i[c]=h,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const a=e.morphAttributes;for(const l in a){const h=[],u=a[l];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let l=0,h=s.length;l<h;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zs=new Te,In=new Ri,cr=new qt,Js=new P,ii=new P,ri=new P,ai=new P,Sa=new P,hr=new P,ur=new ve,dr=new ve,pr=new ve,$s=new P,Qs=new P,eo=new P,fr=new P,mr=new P;class vt extends ke{constructor(e=new Tt,t=new xn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(a&&o){hr.set(0,0,0);for(let c=0,l=a.length;c<l;c++){const h=o[c],u=a[c];h!==0&&(Sa.fromBufferAttribute(u,e),s?hr.addScaledVector(Sa,h):hr.addScaledVector(Sa.sub(t),h))}t.add(hr)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),cr.copy(n.boundingSphere),cr.applyMatrix4(a),In.copy(e.ray).recast(e.near),cr.containsPoint(In.origin)===!1&&(In.intersectSphere(cr,Js)===null||In.origin.distanceToSquared(Js)>(e.far-e.near)**2))return;Zs.copy(a).invert(),In.copy(e.ray).applyMatrix4(Zs),n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,In)}}_computeIntersections(e,t,n){let i;const a=this.geometry,s=this.material,o=a.index,c=a.attributes.position,l=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const _=d[m],f=s[_.materialIndex];for(let x=Math.max(_.start,p.start),g=Math.min(o.count,Math.min(_.start+_.count,p.start+p.count));x<g;x+=3)i=gr(this,f,e,n,l,h,u,o.getX(x),o.getX(x+1),o.getX(x+2)),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);m<v;m+=3)i=gr(this,s,e,n,l,h,u,o.getX(m),o.getX(m+1),o.getX(m+2)),i&&(i.faceIndex=Math.floor(m/3),t.push(i));else if(c!==void 0)if(Array.isArray(s))for(let m=0,v=d.length;m<v;m++){const _=d[m],f=s[_.materialIndex];for(let x=Math.max(_.start,p.start),g=Math.min(c.count,Math.min(_.start+_.count,p.start+p.count));x<g;x+=3)i=gr(this,f,e,n,l,h,u,x,x+1,x+2),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=_.materialIndex,t.push(i))}else for(let m=Math.max(0,p.start),v=Math.min(c.count,p.start+p.count);m<v;m+=3)i=gr(this,s,e,n,l,h,u,m,m+1,m+2),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}function gr(r,e,t,n,i,a,s,o,c,l){r.getVertexPosition(o,ii),r.getVertexPosition(c,ri),r.getVertexPosition(l,ai);const h=function(u,d,p,m,v,_,f,x){let g;if(g=d.side===xt?m.intersectTriangle(f,_,v,!0,x):m.intersectTriangle(v,_,f,d.side===sn,x),g===null)return null;mr.copy(x),mr.applyMatrix4(u.matrixWorld);const y=p.ray.origin.distanceTo(mr);return y<p.near||y>p.far?null:{distance:y,point:mr.clone(),object:u}}(r,e,t,n,ii,ri,ai,fr);if(h){i&&(ur.fromBufferAttribute(i,o),dr.fromBufferAttribute(i,c),pr.fromBufferAttribute(i,l),h.uv=Gt.getInterpolation(fr,ii,ri,ai,ur,dr,pr,new ve)),a&&(ur.fromBufferAttribute(a,o),dr.fromBufferAttribute(a,c),pr.fromBufferAttribute(a,l),h.uv1=Gt.getInterpolation(fr,ii,ri,ai,ur,dr,pr,new ve)),s&&($s.fromBufferAttribute(s,o),Qs.fromBufferAttribute(s,c),eo.fromBufferAttribute(s,l),h.normal=Gt.getInterpolation(fr,ii,ri,ai,$s,Qs,eo,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new P,materialIndex:0};Gt.getNormal(ii,ri,ai,u.normal),h.face=u}return h}class Yi extends Tt{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const o=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const c=[],l=[],h=[],u=[];let d=0,p=0;function m(v,_,f,x,g,y,C,w,T,U,L){const B=y/T,re=C/U,A=y/2,k=C/2,Z=w/2,se=T+1,pe=U+1;let K=0,j=0;const Y=new P;for(let ue=0;ue<pe;ue++){const X=ue*re-k;for(let J=0;J<se;J++){const me=J*B-A;Y[v]=me*x,Y[_]=X*g,Y[f]=Z,l.push(Y.x,Y.y,Y.z),Y[v]=0,Y[_]=0,Y[f]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),u.push(J/T),u.push(1-ue/U),K+=1}}for(let ue=0;ue<U;ue++)for(let X=0;X<T;X++){const J=d+X+se*ue,me=d+X+se*(ue+1),le=d+(X+1)+se*(ue+1),b=d+(X+1)+se*ue;c.push(J,me,b),c.push(me,le,b),j+=6}o.addGroup(p,j,L),p+=j,d+=K}m("z","y","x",-1,-1,n,t,e,s,a,0),m("z","y","x",1,-1,n,t,-e,s,a,1),m("x","z","y",1,1,e,n,t,i,s,2),m("x","z","y",1,-1,e,n,-t,i,s,3),m("x","y","z",1,-1,e,t,n,i,a,4),m("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ti(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?e[t][n]=null:e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function dt(r){const e={};for(let t=0;t<r.length;t++){const n=Ti(r[t]);for(const i in n)e[i]=n[i]}return e}function vl(r){return r.getRenderTarget()===null?r.outputColorSpace:He.workingColorSpace}const Sc={clone:Ti,merge:dt};class En extends Xt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ti(e.uniforms),this.uniformsGroups=function(t){const n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class xl extends ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Te,this.projectionMatrix=new Te,this.projectionMatrixInverse=new Te,this.coordinateSystem=Si}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fn=new P,to=new ve,no=new ve;class ft extends xl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Ei*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*ki*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Ei*Math.atan(Math.tan(.5*ki*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fn.x,fn.y).multiplyScalar(-e/fn.z),fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fn.x,fn.y).multiplyScalar(-e/fn.z)}getViewSize(e,t){return this.getViewBounds(e,to,no),t.subVectors(no,to)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*ki*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const c=s.fullWidth,l=s.fullHeight;a+=s.offsetX*i/c,t-=s.offsetY*n/l,i*=s.width/c,n*=s.height/l}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const si=-90;class Ec extends ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ft(si,1,e,t);i.layers=this.layers,this.add(i);const a=new ft(si,1,e,t);a.layers=this.layers,this.add(a);const s=new ft(si,1,e,t);s.layers=this.layers,this.add(s);const o=new ft(si,1,e,t);o.layers=this.layers,this.add(o);const c=new ft(si,1,e,t);c.layers=this.layers,this.add(c);const l=new ft(si,1,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,s,o,c]=t;for(const l of t)this.remove(l);if(e===Si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else{if(e!==Br)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1)}for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class yl extends it{constructor(e,t,n,i,a,s,o,c,l,h){super(e=e!==void 0?e:[],t=t!==void 0?t:_i,n,i,a,s,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Tc extends Xn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new yl(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Je}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Yi(5,5,5),a=new En({name:"CubemapFromEquirect",uniforms:Ti(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:xt,blending:0});a.uniforms.tEquirect.value=t;const s=new vt(i,a),o=t.minFilter;return t.minFilter===Sn&&(t.minFilter=Je),new Ec(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const Ea=new P,bc=new P,Ac=new Ae;class gn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ea.subVectors(n,t).cross(bc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ea),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ac.getNormalMatrix(e),i=this.coplanarPoint(Ea).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Nn=new qt,_r=new P;class as{constructor(e=new gn,t=new gn,n=new gn,i=new gn,a=new gn,s=new gn){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,i=e.elements,a=i[0],s=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],p=i[8],m=i[9],v=i[10],_=i[11],f=i[12],x=i[13],g=i[14],y=i[15];if(n[0].setComponents(c-a,d-l,_-p,y-f).normalize(),n[1].setComponents(c+a,d+l,_+p,y+f).normalize(),n[2].setComponents(c+s,d+h,_+m,y+x).normalize(),n[3].setComponents(c-s,d-h,_-m,y-x).normalize(),n[4].setComponents(c-o,d-u,_-v,y-g).normalize(),t===Si)n[5].setComponents(c+o,d+u,_+v,y+g).normalize();else{if(t!==Br)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(o,u,v,g).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Nn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nn)}intersectsSprite(e){return Nn.center.set(0,0,0),Nn.radius=.7071067811865476,Nn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(_r.x=i.normal.x>0?e.max.x:e.min.x,_r.y=i.normal.y>0?e.max.y:e.min.y,_r.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ml(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function wc(r,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a&&(r.deleteBuffer(a.buffer),n.delete(i))},update:function(i,a){if(i.isGLBufferAttribute){const o=n.get(i);return void((!o||o.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);if(s===void 0)n.set(i,function(o,c){const l=o.array,h=o.usage,u=l.byteLength,d=r.createBuffer();let p;if(r.bindBuffer(c,d),r.bufferData(c,l,h),o.onUploadCallback(),l instanceof Float32Array)p=r.FLOAT;else if(l instanceof Uint16Array)if(o.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=r.SHORT;else if(l instanceof Uint32Array)p=r.UNSIGNED_INT;else if(l instanceof Int32Array)p=r.INT;else if(l instanceof Int8Array)p=r.BYTE;else if(l instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(l instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}(i,a));else if(s.version<i.version){if(s.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(o,c,l){const h=c.array,u=c._updateRange,d=c.updateRanges;if(r.bindBuffer(l,o),u.count===-1&&d.length===0&&r.bufferSubData(l,0,h),d.length!==0){for(let p=0,m=d.length;p<m;p++){const v=d[p];t?r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count):r.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h.subarray(v.start,v.start+v.count))}c.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count):r.bufferSubData(l,u.offset*h.BYTES_PER_ELEMENT,h.subarray(u.offset,u.offset+u.count)),u.count=-1),c.onUploadCallback()})(s.buffer,i,a),s.version=i.version}}}}class Gr extends Tt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,d=t/c,p=[],m=[],v=[],_=[];for(let f=0;f<h;f++){const x=f*d-s;for(let g=0;g<l;g++){const y=g*u-a;m.push(y,-x,0),v.push(0,0,1),_.push(g/o),_.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const g=x+l*f,y=x+l*(f+1),C=x+1+l*(f+1),w=x+1+l*f;p.push(g,y,w),p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gr(e.width,e.height,e.widthSegments,e.heightSegments)}}const be={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
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
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
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
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
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
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
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
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
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
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
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
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,common:`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:"gl_FragColor = linearToOutputTexel( gl_FragColor );",colorspace_pars_fragment:`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,envmap_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
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
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
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
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
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
}`,lightmap_fragment:`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
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
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,lights_fragment_begin:`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
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
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
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
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
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
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
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
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
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
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},he={common:{diffuse:{value:new Ee(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ae}},envmap:{envMap:{value:null},envMapRotation:{value:new Ae},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ae}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ae}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ae},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ae},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ae},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ae}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ae}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ae}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ee(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ee(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0},uvTransform:{value:new Ae}},sprite:{diffuse:{value:new Ee(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ae},alphaMap:{value:null},alphaMapTransform:{value:new Ae},alphaTest:{value:0}}},kt={basic:{uniforms:dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:be.meshbasic_vert,fragmentShader:be.meshbasic_frag},lambert:{uniforms:dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ee(0)}}]),vertexShader:be.meshlambert_vert,fragmentShader:be.meshlambert_frag},phong:{uniforms:dt([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ee(0)},specular:{value:new Ee(1118481)},shininess:{value:30}}]),vertexShader:be.meshphong_vert,fragmentShader:be.meshphong_frag},standard:{uniforms:dt([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ee(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag},toon:{uniforms:dt([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ee(0)}}]),vertexShader:be.meshtoon_vert,fragmentShader:be.meshtoon_frag},matcap:{uniforms:dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:be.meshmatcap_vert,fragmentShader:be.meshmatcap_frag},points:{uniforms:dt([he.points,he.fog]),vertexShader:be.points_vert,fragmentShader:be.points_frag},dashed:{uniforms:dt([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:be.linedashed_vert,fragmentShader:be.linedashed_frag},depth:{uniforms:dt([he.common,he.displacementmap]),vertexShader:be.depth_vert,fragmentShader:be.depth_frag},normal:{uniforms:dt([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:be.meshnormal_vert,fragmentShader:be.meshnormal_frag},sprite:{uniforms:dt([he.sprite,he.fog]),vertexShader:be.sprite_vert,fragmentShader:be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ae},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:be.background_vert,fragmentShader:be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ae}},vertexShader:be.backgroundCube_vert,fragmentShader:be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:be.cube_vert,fragmentShader:be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:be.equirect_vert,fragmentShader:be.equirect_frag},distanceRGBA:{uniforms:dt([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:be.distanceRGBA_vert,fragmentShader:be.distanceRGBA_frag},shadow:{uniforms:dt([he.lights,he.fog,{color:{value:new Ee(0)},opacity:{value:1}}]),vertexShader:be.shadow_vert,fragmentShader:be.shadow_frag}};kt.physical={uniforms:dt([kt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ae},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ae},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ae},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ae},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ae},sheen:{value:0},sheenColor:{value:new Ee(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ae},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ae},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ae},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ae},attenuationDistance:{value:0},attenuationColor:{value:new Ee(0)},specularColor:{value:new Ee(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ae},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ae},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ae}}]),vertexShader:be.meshphysical_vert,fragmentShader:be.meshphysical_frag};const vr={r:0,b:0,g:0},Un=new Yt,Rc=new Te;function Cc(r,e,t,n,i,a,s){const o=new Ee(0);let c,l,h=a===!0?0:1,u=null,d=0,p=null;function m(v,_){v.getRGB(vr,vl(r)),n.buffers.color.setClear(vr.r,vr.g,vr.b,_,s)}return{getClearColor:function(){return o},setClearColor:function(v,_=1){o.set(v),h=_,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(v){h=v,m(o,h)},render:function(v,_){let f=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x)),x===null?m(o,h):x&&x.isColor&&(m(x,1),f=!0);const g=r.xr.getEnvironmentBlendMode();g==="additive"?n.buffers.color.setClear(0,0,0,1,s):g==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(r.autoClear||f)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Vr)?(l===void 0&&(l=new vt(new Yi(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:Ti(kt.backgroundCube.uniforms),vertexShader:kt.backgroundCube.vertexShader,fragmentShader:kt.backgroundCube.fragmentShader,side:xt,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),Un.copy(_.backgroundRotation),Un.x*=-1,Un.y*=-1,Un.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Un.y*=-1,Un.z*=-1),l.material.uniforms.envMap.value=x,l.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Rc.makeRotationFromEuler(Un)),l.material.toneMapped=He.getTransfer(x.colorSpace)!==Ge,u===x&&d===x.version&&p===r.toneMapping||(l.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new vt(new Gr(2,2),new En({name:"BackgroundMaterial",uniforms:Ti(kt.background.uniforms),vertexShader:kt.background.vertexShader,fragmentShader:kt.background.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=He.getTransfer(x.colorSpace)!==Ge,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),u===x&&d===x.version&&p===r.toneMapping||(c.material.needsUpdate=!0,u=x,d=x.version,p=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}}}function Pc(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,o={},c=p(null);let l=c,h=!1;function u(C){return n.isWebGL2?r.bindVertexArray(C):a.bindVertexArrayOES(C)}function d(C){return n.isWebGL2?r.deleteVertexArray(C):a.deleteVertexArrayOES(C)}function p(C){const w=[],T=[],U=[];for(let L=0;L<i;L++)w[L]=0,T[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:T,attributeDivisors:U,object:C,attributes:{},index:null}}function m(){const C=l.newAttributes;for(let w=0,T=C.length;w<T;w++)C[w]=0}function v(C){_(C,0)}function _(C,w){const T=l.newAttributes,U=l.enabledAttributes,L=l.attributeDivisors;T[C]=1,U[C]===0&&(r.enableVertexAttribArray(C),U[C]=1),L[C]!==w&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,w),L[C]=w)}function f(){const C=l.newAttributes,w=l.enabledAttributes;for(let T=0,U=w.length;T<U;T++)w[T]!==C[T]&&(r.disableVertexAttribArray(T),w[T]=0)}function x(C,w,T,U,L,B,re){re===!0?r.vertexAttribIPointer(C,w,T,L,B):r.vertexAttribPointer(C,w,T,U,L,B)}function g(){y(),h=!0,l!==c&&(l=c,u(l.object))}function y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:function(C,w,T,U,L){let B=!1;if(s){const re=function(A,k,Z){const se=Z.wireframe===!0;let pe=o[A.id];pe===void 0&&(pe={},o[A.id]=pe);let K=pe[k.id];K===void 0&&(K={},pe[k.id]=K);let j=K[se];return j===void 0&&(j=p(n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()),K[se]=j),j}(U,T,w);l!==re&&(l=re,u(l.object)),B=function(A,k,Z,se){const pe=l.attributes,K=k.attributes;let j=0;const Y=Z.getAttributes();for(const ue in Y)if(Y[ue].location>=0){const X=pe[ue];let J=K[ue];if(J===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(J=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(J=A.instanceColor)),X===void 0||X.attribute!==J||J&&X.data!==J.data)return!0;j++}return l.attributesNum!==j||l.index!==se}(C,U,T,L),B&&function(A,k,Z,se){const pe={},K=k.attributes;let j=0;const Y=Z.getAttributes();for(const ue in Y)if(Y[ue].location>=0){let X=K[ue];X===void 0&&(ue==="instanceMatrix"&&A.instanceMatrix&&(X=A.instanceMatrix),ue==="instanceColor"&&A.instanceColor&&(X=A.instanceColor));const J={};J.attribute=X,X&&X.data&&(J.data=X.data),pe[ue]=J,j++}l.attributes=pe,l.attributesNum=j,l.index=se}(C,U,T,L)}else{const re=w.wireframe===!0;l.geometry===U.id&&l.program===T.id&&l.wireframe===re||(l.geometry=U.id,l.program=T.id,l.wireframe=re,B=!0)}L!==null&&t.update(L,r.ELEMENT_ARRAY_BUFFER),(B||h)&&(h=!1,function(re,A,k,Z){if(n.isWebGL2===!1&&(re.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;m();const se=Z.attributes,pe=k.getAttributes(),K=A.defaultAttributeValues;for(const j in pe){const Y=pe[j];if(Y.location>=0){let ue=se[j];if(ue===void 0&&(j==="instanceMatrix"&&re.instanceMatrix&&(ue=re.instanceMatrix),j==="instanceColor"&&re.instanceColor&&(ue=re.instanceColor)),ue!==void 0){const X=ue.normalized,J=ue.itemSize,me=t.get(ue);if(me===void 0)continue;const le=me.buffer,b=me.type,M=me.bytesPerElement,F=n.isWebGL2===!0&&(b===r.INT||b===r.UNSIGNED_INT||ue.gpuType===cl);if(ue.isInterleavedBufferAttribute){const O=ue.data,N=O.stride,H=ue.offset;if(O.isInstancedInterleavedBuffer){for(let ae=0;ae<Y.locationSize;ae++)_(Y.location+ae,O.meshPerAttribute);re.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ae=0;ae<Y.locationSize;ae++)v(Y.location+ae);r.bindBuffer(r.ARRAY_BUFFER,le);for(let ae=0;ae<Y.locationSize;ae++)x(Y.location+ae,J/Y.locationSize,b,X,N*M,(H+J/Y.locationSize*ae)*M,F)}else{if(ue.isInstancedBufferAttribute){for(let O=0;O<Y.locationSize;O++)_(Y.location+O,ue.meshPerAttribute);re.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let O=0;O<Y.locationSize;O++)v(Y.location+O);r.bindBuffer(r.ARRAY_BUFFER,le);for(let O=0;O<Y.locationSize;O++)x(Y.location+O,J/Y.locationSize,b,X,J*M,J/Y.locationSize*O*M,F)}}else if(K!==void 0){const X=K[j];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(Y.location,X);break;case 3:r.vertexAttrib3fv(Y.location,X);break;case 4:r.vertexAttrib4fv(Y.location,X);break;default:r.vertexAttrib1fv(Y.location,X)}}}}f()}(C,w,T,U),L!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))},reset:g,resetDefaultState:y,dispose:function(){g();for(const C in o){const w=o[C];for(const T in w){const U=w[T];for(const L in U)d(U[L].object),delete U[L];delete w[T]}delete o[C]}},releaseStatesOfGeometry:function(C){if(o[C.id]===void 0)return;const w=o[C.id];for(const T in w){const U=w[T];for(const L in U)d(U[L].object),delete U[L];delete w[T]}delete o[C.id]},releaseStatesOfProgram:function(C){for(const w in o){const T=o[w];if(T[C.id]===void 0)continue;const U=T[C.id];for(const L in U)d(U[L].object),delete U[L];delete T[C.id]}},initAttributes:m,enableAttribute:v,disableUnusedAttributes:f}}function Lc(r,e,t,n){const i=n.isWebGL2;let a;this.setMode=function(s){a=s},this.render=function(s,o){r.drawArrays(a,s,o),t.update(o,a,1)},this.renderInstances=function(s,o,c){if(c===0)return;let l,h;if(i)l=r,h="drawArraysInstanced";else if(l=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",l===null)return;l[h](a,s,o,c),t.update(o,a,c)},this.renderMultiDraw=function(s,o,c){if(c===0)return;const l=e.get("WEBGL_multi_draw");if(l===null)for(let h=0;h<c;h++)this.render(s[h],o[h]);else{l.multiDrawArraysWEBGL(a,s,0,o,0,c);let h=0;for(let u=0;u<c;u++)h+=o[u];t.update(h,a,1)}}}function Ic(r,e,t){let n;function i(y){if(y==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";y="mediump"}return y==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const o=i(s);o!==s&&(s=o);const c=a||e.has("WEBGL_draw_buffers"),l=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),f=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),x=u>0,g=a||e.has("OES_texture_float");return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const y=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(y.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:s,logarithmicDepthBuffer:l,maxTextures:h,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:f,vertexTextures:x,floatFragmentTextures:g,floatVertexTextures:x&&g,maxSamples:a?r.getParameter(r.MAX_SAMPLES):0}}function Nc(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new gn,o=new Ae,c={value:null,needsUpdate:!1};function l(h,u,d,p){const m=h!==null?h.length:0;let v=null;if(m!==0){if(v=c.value,p!==!0||v===null){const _=d+4*m,f=u.matrixWorldInverse;o.getNormalMatrix(f),(v===null||v.length<_)&&(v=new Float32Array(_));for(let x=0,g=d;x!==m;++x,g+=4)s.copy(h[x]).applyMatrix4(f,o),s.normal.toArray(v,g),v[g+3]=s.constant}c.value=v,c.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,v}this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,u){const d=h.length!==0||u||n!==0||i;return i=u,n=h.length,d},this.beginShadows=function(){a=!0,l(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(h,u){t=l(h,u,0)},this.setState=function(h,u,d){const p=h.clippingPlanes,m=h.clipIntersection,v=h.clipShadows,_=r.get(h);if(!i||p===null||p.length===0||a&&!v)a?l(null):function(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{const f=a?0:n,x=4*f;let g=_.clippingState||null;c.value=g,g=l(p,u,x,d);for(let y=0;y!==x;++y)g[y]=t[y];_.clippingState=g,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=f}}}function Uc(r){let e=new WeakMap;function t(i,a){return a===Nr?i.mapping=_i:a===304&&(i.mapping=vi),i}function n(i){const a=i.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture){const a=i.mapping;if(a===Nr||a===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const s=i.image;if(s&&s.height>0){const o=new Tc(s.height);return o.fromEquirectangularTexture(r,i),e.set(i,o),i.addEventListener("dispose",n),t(o.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}class ss extends xl{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=l*this.view.offsetX,s=a+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const io=[.125,.215,.35,.446,.526,.582],xr=20,Ta=new ss,ro=new Ee;let ba=null,Aa=0,wa=0;const zn=(1+Math.sqrt(5))/2,oi=1/zn,ao=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,zn,oi),new P(0,zn,-oi),new P(oi,0,zn),new P(-oi,0,zn),new P(zn,oi,0),new P(-zn,oi,0)];class so{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=co(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ba,Aa,wa),e.scissorTest=!1,yr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===_i||e.mapping===vi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ba=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),wa=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:an,format:Wt,colorSpace:at,depthBuffer:!1},i=oo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=oo(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){const o=[],c=[],l=[];let h=s;const u=s-4+1+io.length;for(let d=0;d<u;d++){const p=Math.pow(2,h);c.push(p);let m=1/p;d>s-4?m=io[d-s+4-1]:d===0&&(m=0),l.push(m);const v=1/(p-2),_=-v,f=1+v,x=[_,_,f,_,f,f,_,_,f,f,_,f],g=6,y=6,C=3,w=2,T=1,U=new Float32Array(C*y*g),L=new Float32Array(w*y*g),B=new Float32Array(T*y*g);for(let A=0;A<g;A++){const k=A%3*2/3-1,Z=A>2?0:-1,se=[k,Z,0,k+2/3,Z,0,k+2/3,Z+1,0,k,Z,0,k+2/3,Z+1,0,k,Z+1,0];U.set(se,C*y*A),L.set(x,w*y*A);const pe=[A,A,A,A,A,A];B.set(pe,T*y*A)}const re=new Tt;re.setAttribute("position",new mt(U,C)),re.setAttribute("uv",new mt(L,w)),re.setAttribute("faceIndex",new mt(B,T)),o.push(re),h>4&&h--}return{lodPlanes:o,sizeLods:c,sigmas:l}}(a)),this._blurMaterial=function(s,o,c){const l=new Float32Array(xr),h=new P(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/o,CUBEUV_TEXEL_HEIGHT:1/c,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:l},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:h}},vertexShader:os(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(a,e,t)}return i}_compileMaterial(e){const t=new vt(this._lodPlanes[0],e);this._renderer.compile(t,Ta)}_sceneToCubeUV(e,t,n,i){const a=new ft(90,1,t,n),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],c=this._renderer,l=c.autoClear,h=c.toneMapping;c.getClearColor(ro),c.toneMapping=Mn,c.autoClear=!1;const u=new xn({name:"PMREM.Background",side:xt,depthWrite:!1,depthTest:!1}),d=new vt(new Yi,u);let p=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,p=!0):(u.color.copy(ro),p=!0);for(let v=0;v<6;v++){const _=v%3;_===0?(a.up.set(0,s[v],0),a.lookAt(o[v],0,0)):_===1?(a.up.set(0,0,s[v]),a.lookAt(0,o[v],0)):(a.up.set(0,s[v],0),a.lookAt(0,0,o[v]));const f=this._cubeSize;yr(i,_*f,v>2?f:0,f,f),c.setRenderTarget(i),p&&c.render(d,a),c.render(e,a)}d.geometry.dispose(),d.material.dispose(),c.toneMapping=h,c.autoClear=l,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===_i||e.mapping===vi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=co()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lo());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new vt(this._lodPlanes[0],a);a.uniforms.envMap.value=e;const o=this._cubeSize;yr(t,0,0,3*o,2*o),n.setRenderTarget(t),n.render(s,Ta)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=ao[(i-1)%ao.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,o){const c=this._renderer,l=this._blurMaterial,h=new vt(this._lodPlanes[i],l),u=l.uniforms,d=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,m=a/p,v=isFinite(a)?1+Math.floor(3*m):xr,_=[];let f=0;for(let y=0;y<xr;++y){const C=y/m,w=Math.exp(-C*C/2);_.push(w),y===0?f+=w:y<v&&(f+=2*w)}for(let y=0;y<_.length;y++)_[y]=_[y]/f;u.envMap.value=e.texture,u.samples.value=v,u.weights.value=_,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=p,u.mipInt.value=x-n;const g=this._sizeLods[i];yr(t,3*g*(i>x-4?i-x+4:0),4*(this._cubeSize-g),3*g,2*g),c.setRenderTarget(t),c.render(h,Ta)}}function oo(r,e,t){const n=new Xn(r,e,t);return n.texture.mapping=Vr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function yr(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function lo(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:os(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function co(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:os(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function os(){return`

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
	`}function Dc(r){let e=new WeakMap,t=null;function n(i){const a=i.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture){const a=i.mapping,s=a===Nr||a===304,o=a===_i||a===vi;if(s||o){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let c=e.get(i);return t===null&&(t=new so(r)),c=s?t.fromEquirectangular(i,c):t.fromCubemap(i,c),e.set(i,c),c.texture}if(e.has(i))return e.get(i).texture;{const c=i.image;if(s&&c&&c.height>0||o&&c&&function(l){let h=0;const u=6;for(let d=0;d<u;d++)l[d]!==void 0&&h++;return h===u}(c)){t===null&&(t=new so(r));const l=s?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,l),i.addEventListener("dispose",n),l.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Oc(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){return t(n)}}}function Fc(r,e,t,n){const i={},a=new WeakMap;function s(c){const l=c.target;l.index!==null&&e.remove(l.index);for(const u in l.attributes)e.remove(l.attributes[u]);for(const u in l.morphAttributes){const d=l.morphAttributes[u];for(let p=0,m=d.length;p<m;p++)e.remove(d[p])}l.removeEventListener("dispose",s),delete i[l.id];const h=a.get(l);h&&(e.remove(h),a.delete(l)),n.releaseStatesOfGeometry(l),l.isInstancedBufferGeometry===!0&&delete l._maxInstanceCount,t.memory.geometries--}function o(c){const l=[],h=c.index,u=c.attributes.position;let d=0;if(h!==null){const v=h.array;d=h.version;for(let _=0,f=v.length;_<f;_+=3){const x=v[_+0],g=v[_+1],y=v[_+2];l.push(x,g,g,y,y,x)}}else{if(u===void 0)return;{const v=u.array;d=u.version;for(let _=0,f=v.length/3-1;_<f;_+=3){const x=_+0,g=_+1,y=_+2;l.push(x,g,g,y,y,x)}}}const p=new(hl(l)?_l:gl)(l,1);p.version=d;const m=a.get(c);m&&e.remove(m),a.set(c,p)}return{get:function(c,l){return i[l.id]===!0||(l.addEventListener("dispose",s),i[l.id]=!0,t.memory.geometries++),l},update:function(c){const l=c.attributes;for(const u in l)e.update(l[u],r.ARRAY_BUFFER);const h=c.morphAttributes;for(const u in h){const d=h[u];for(let p=0,m=d.length;p<m;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(c){const l=a.get(c);if(l){const h=c.index;h!==null&&l.version<h.version&&o(c)}else o(c);return a.get(c)}}}function Bc(r,e,t,n){const i=n.isWebGL2;let a,s,o;this.setMode=function(c){a=c},this.setIndex=function(c){s=c.type,o=c.bytesPerElement},this.render=function(c,l){r.drawElements(a,l,s,c*o),t.update(l,a,1)},this.renderInstances=function(c,l,h){if(h===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return;u[d](a,l,s,c*o,h),t.update(l,a,h)},this.renderMultiDraw=function(c,l,h){if(h===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(c[d]/o,l[d]);else{u.multiDrawElementsWEBGL(a,l,0,s,c,0,h);let d=0;for(let p=0;p<h;p++)d+=l[p];t.update(d,a,1)}}}function zc(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t}}}}function Hc(r,e){return r[0]-e[0]}function Vc(r,e){return Math.abs(e[1])-Math.abs(r[1])}function kc(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new Ve,o=[];for(let c=0;c<8;c++)o[c]=[c,0];return{update:function(c,l,h){const u=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,m=p!==void 0?p.length:0;let v=a.get(l);if(v===void 0||v.count!==m){let A=function(){B.dispose(),a.delete(l),l.removeEventListener("dispose",A)};var d=A;v!==void 0&&v.texture.dispose();const _=l.morphAttributes.position!==void 0,f=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],C=l.morphAttributes.color||[];let w=0;_===!0&&(w=1),f===!0&&(w=2),x===!0&&(w=3);let T=l.attributes.position.count*w,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const L=new Float32Array(T*U*4*m),B=new fl(L,T,U,m);B.type=Et,B.needsUpdate=!0;const re=4*w;for(let k=0;k<m;k++){const Z=g[k],se=y[k],pe=C[k],K=T*U*4*k;for(let j=0;j<Z.count;j++){const Y=j*re;_===!0&&(s.fromBufferAttribute(Z,j),L[K+Y+0]=s.x,L[K+Y+1]=s.y,L[K+Y+2]=s.z,L[K+Y+3]=0),f===!0&&(s.fromBufferAttribute(se,j),L[K+Y+4]=s.x,L[K+Y+5]=s.y,L[K+Y+6]=s.z,L[K+Y+7]=0),x===!0&&(s.fromBufferAttribute(pe,j),L[K+Y+8]=s.x,L[K+Y+9]=s.y,L[K+Y+10]=s.z,L[K+Y+11]=pe.itemSize===4?s.w:1)}}v={count:m,texture:B,size:new ve(T,U)},a.set(l,v),l.addEventListener("dispose",A)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",c.morphTexture,t);else{let _=0;for(let x=0;x<u.length;x++)_+=u[x];const f=l.morphTargetsRelative?1:1-_;h.getUniforms().setValue(r,"morphTargetBaseInfluence",f),h.getUniforms().setValue(r,"morphTargetInfluences",u)}h.getUniforms().setValue(r,"morphTargetsTexture",v.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}else{const p=u===void 0?0:u.length;let m=n[l.id];if(m===void 0||m.length!==p){m=[];for(let g=0;g<p;g++)m[g]=[g,0];n[l.id]=m}for(let g=0;g<p;g++){const y=m[g];y[0]=g,y[1]=u[g]}m.sort(Vc);for(let g=0;g<8;g++)g<p&&m[g][1]?(o[g][0]=m[g][0],o[g][1]=m[g][1]):(o[g][0]=Number.MAX_SAFE_INTEGER,o[g][1]=0);o.sort(Hc);const v=l.morphAttributes.position,_=l.morphAttributes.normal;let f=0;for(let g=0;g<8;g++){const y=o[g],C=y[0],w=y[1];C!==Number.MAX_SAFE_INTEGER&&w?(v&&l.getAttribute("morphTarget"+g)!==v[C]&&l.setAttribute("morphTarget"+g,v[C]),_&&l.getAttribute("morphNormal"+g)!==_[C]&&l.setAttribute("morphNormal"+g,_[C]),i[g]=w,f+=w):(v&&l.hasAttribute("morphTarget"+g)===!0&&l.deleteAttribute("morphTarget"+g),_&&l.hasAttribute("morphNormal"+g)===!0&&l.deleteAttribute("morphNormal"+g),i[g]=0)}const x=l.morphTargetsRelative?1:1-f;h.getUniforms().setValue(r,"morphTargetBaseInfluence",x),h.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function Gc(r,e,t,n){let i=new WeakMap;function a(s){const o=s.target;o.removeEventListener("dispose",a),t.remove(o.instanceMatrix),o.instanceColor!==null&&t.remove(o.instanceColor)}return{update:function(s){const o=n.render.frame,c=s.geometry,l=e.get(s,c);if(i.get(l)!==o&&(e.update(l),i.set(l,o)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),i.get(s)!==o&&(t.update(s.instanceMatrix,r.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,r.ARRAY_BUFFER),i.set(s,o))),s.isSkinnedMesh){const h=s.skeleton;i.get(h)!==o&&(h.update(),i.set(h,o))}return l},dispose:function(){i=new WeakMap}}}class Sl extends it{constructor(e,t,n,i,a,s,o,c,l,h){if((h=h!==void 0?h:Gn)!==Gn&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Gn&&(n=vn),n===void 0&&h===yi&&(n=kn),super(null,i,a,s,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:ht,this.minFilter=c!==void 0?c:ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const El=new it,Tl=new Sl(1,1);Tl.compareFunction=515;const bl=new fl,Al=new hc,wl=new yl,ho=[],uo=[],po=new Float32Array(16),fo=new Float32Array(9),mo=new Float32Array(4);function Ci(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=ho[i];if(a===void 0&&(a=new Float32Array(i),ho[i]=a),e!==0){n.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function $e(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Qe(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Wr(r,e){let t=uo[e];t===void 0&&(t=new Int32Array(e),uo[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Wc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Xc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2fv(this.addr,e),Qe(t,e)}}function jc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($e(t,e))return;r.uniform3fv(this.addr,e),Qe(t,e)}}function Yc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4fv(this.addr,e),Qe(t,e)}}function qc(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Qe(t,e)}else{if($e(t,n))return;mo.set(n),r.uniformMatrix2fv(this.addr,!1,mo),Qe(t,n)}}function Kc(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Qe(t,e)}else{if($e(t,n))return;fo.set(n),r.uniformMatrix3fv(this.addr,!1,fo),Qe(t,n)}}function Zc(r,e){const t=this.cache,n=e.elements;if(n===void 0){if($e(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Qe(t,e)}else{if($e(t,n))return;po.set(n),r.uniformMatrix4fv(this.addr,!1,po),Qe(t,n)}}function Jc(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $c(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2iv(this.addr,e),Qe(t,e)}}function Qc(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;r.uniform3iv(this.addr,e),Qe(t,e)}}function eh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4iv(this.addr,e),Qe(t,e)}}function th(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function nh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($e(t,e))return;r.uniform2uiv(this.addr,e),Qe(t,e)}}function ih(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($e(t,e))return;r.uniform3uiv(this.addr,e),Qe(t,e)}}function rh(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($e(t,e))return;r.uniform4uiv(this.addr,e),Qe(t,e)}}function ah(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const a=this.type===r.SAMPLER_2D_SHADOW?Tl:El;t.setTexture2D(e||a,i)}function sh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Al,i)}function oh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wl,i)}function lh(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bl,i)}function ch(r,e){r.uniform1fv(this.addr,e)}function hh(r,e){const t=Ci(e,this.size,2);r.uniform2fv(this.addr,t)}function uh(r,e){const t=Ci(e,this.size,3);r.uniform3fv(this.addr,t)}function dh(r,e){const t=Ci(e,this.size,4);r.uniform4fv(this.addr,t)}function ph(r,e){const t=Ci(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function fh(r,e){const t=Ci(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function mh(r,e){const t=Ci(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function gh(r,e){r.uniform1iv(this.addr,e)}function _h(r,e){r.uniform2iv(this.addr,e)}function vh(r,e){r.uniform3iv(this.addr,e)}function xh(r,e){r.uniform4iv(this.addr,e)}function yh(r,e){r.uniform1uiv(this.addr,e)}function Mh(r,e){r.uniform2uiv(this.addr,e)}function Sh(r,e){r.uniform3uiv(this.addr,e)}function Eh(r,e){r.uniform4uiv(this.addr,e)}function Th(r,e,t){const n=this.cache,i=e.length,a=Wr(t,i);$e(n,a)||(r.uniform1iv(this.addr,a),Qe(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||El,a[s])}function bh(r,e,t){const n=this.cache,i=e.length,a=Wr(t,i);$e(n,a)||(r.uniform1iv(this.addr,a),Qe(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Al,a[s])}function Ah(r,e,t){const n=this.cache,i=e.length,a=Wr(t,i);$e(n,a)||(r.uniform1iv(this.addr,a),Qe(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||wl,a[s])}function wh(r,e,t){const n=this.cache,i=e.length,a=Wr(t,i);$e(n,a)||(r.uniform1iv(this.addr,a),Qe(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||bl,a[s])}class Rh{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return Wc;case 35664:return Xc;case 35665:return jc;case 35666:return Yc;case 35674:return qc;case 35675:return Kc;case 35676:return Zc;case 5124:case 35670:return Jc;case 35667:case 35671:return $c;case 35668:case 35672:return Qc;case 35669:case 35673:return eh;case 5125:return th;case 36294:return nh;case 36295:return ih;case 36296:return rh;case 35678:case 36198:case 36298:case 36306:case 35682:return ah;case 35679:case 36299:case 36307:return sh;case 35680:case 36300:case 36308:case 36293:return oh;case 36289:case 36303:case 36311:case 36292:return lh}}(t.type)}}class Ch{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return ch;case 35664:return hh;case 35665:return uh;case 35666:return dh;case 35674:return ph;case 35675:return fh;case 35676:return mh;case 5124:case 35670:return gh;case 35667:case 35671:return _h;case 35668:case 35672:return vh;case 35669:case 35673:return xh;case 5125:return yh;case 36294:return Mh;case 36295:return Sh;case 36296:return Eh;case 35678:case 36198:case 36298:case 36306:case 35682:return Th;case 35679:case 36299:case 36307:return bh;case 35680:case 36300:case 36308:case 36293:return Ah;case 36289:case 36303:case 36311:case 36292:return wh}}(t.type)}}class Ph{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const o=i[a];o.setValue(e,t[o.id],n)}}}const Ra=/(\w+)(\])?(\[|\.)?/g;function go(r,e){r.seq.push(e),r.map[e.id]=e}function Lh(r,e,t){const n=r.name,i=n.length;for(Ra.lastIndex=0;;){const a=Ra.exec(n),s=Ra.lastIndex;let o=a[1];const c=a[2]==="]",l=a[3];if(c&&(o|=0),l===void 0||l==="["&&s+2===i){go(t,l===void 0?new Rh(o,r,e):new Ch(o,r,e));break}{let h=t.map[o];h===void 0&&(h=new Ph(o),go(t,h)),t=h}}}class Ir{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i);Lh(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const o=t[a],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function _o(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Ih=37297;let Nh=0;function vo(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+function(o,c){const l=o.split(`
`),h=[],u=Math.max(c-6,0),d=Math.min(c+6,l.length);for(let p=u;p<d;p++){const m=p+1;h.push(`${m===c?">":" "} ${m}: ${l[p]}`)}return h.join(`
`)}(r.getShaderSource(e),s)}return i}function Uh(r,e){const t=function(n){const i=He.getPrimaries(He.workingColorSpace),a=He.getPrimaries(n);let s;switch(i===a?s="":i===Fr&&a===Or?s="LinearDisplayP3ToLinearSRGB":i===Or&&a===Fr&&(s="LinearSRGBToLinearDisplayP3"),n){case at:case kr:return[s,"LinearTransferOETF"];case pt:case is:return[s,"sRGBTransferOETF"];default:return[s,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Dh(r,e){let t;switch(e){case $l:t="Linear";break;case Ql:t="Reinhard";break;case ec:t="OptimizedCineon";break;case tc:t="ACESFilmic";break;case ic:t="AgX";break;case rc:t="Neutral";break;case nc:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function li(r){return r!==""}function xo(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yo(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Oh=/^[ \t]*#include +<([\w\d./]+)>/gm;function qa(r){return r.replace(Oh,Bh)}const Fh=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bh(r,e){let t=be[e];if(t===void 0){const n=Fh.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=be[n]}return qa(t)}const zh=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mo(r){return r.replace(zh,Hh)}function Hh(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function So(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	`;return r.isWebGL2&&(e+=`precision ${r.precision} sampler3D;
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
		`),r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vh(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const c=function(A){let k="SHADOWMAP_TYPE_BASIC";return A.shadowMapType===ol?k="SHADOWMAP_TYPE_PCF":A.shadowMapType===Kl?k="SHADOWMAP_TYPE_PCF_SOFT":A.shadowMapType===rn&&(k="SHADOWMAP_TYPE_VSM"),k}(t),l=function(A){let k="ENVMAP_TYPE_CUBE";if(A.envMap)switch(A.envMapMode){case _i:case vi:k="ENVMAP_TYPE_CUBE";break;case Vr:k="ENVMAP_TYPE_CUBE_UV"}return k}(t),h=function(A){let k="ENVMAP_MODE_REFLECTION";return A.envMap&&A.envMapMode===vi&&(k="ENVMAP_MODE_REFRACTION"),k}(t),u=function(A){let k="ENVMAP_BLENDING_NONE";if(A.envMap)switch(A.combine){case ll:k="ENVMAP_BLENDING_MULTIPLY";break;case Zl:k="ENVMAP_BLENDING_MIX";break;case Jl:k="ENVMAP_BLENDING_ADD"}return k}(t),d=function(A){const k=A.envMapCubeUVHeight;if(k===null)return null;const Z=Math.log2(k)-2,se=1/k;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:se,maxMip:Z}}(t),p=t.isWebGL2?"":function(A){return[A.extensionDerivatives||A.envMapCubeUVHeight||A.bumpMap||A.normalMapTangentSpace||A.clearcoatNormalMap||A.flatShading||A.alphaToCoverage||A.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(A.extensionFragDepth||A.logarithmicDepthBuffer)&&A.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",A.extensionDrawBuffers&&A.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(A.extensionShaderTextureLOD||A.envMap||A.transmission)&&A.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(li).join(`
`)}(t),m=function(A){return[A.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",A.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(li).join(`
`)}(t),v=function(A){const k=[];for(const Z in A){const se=A[Z];se!==!1&&k.push("#define "+Z+" "+se)}return k.join(`
`)}(a),_=i.createProgram();let f,x,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(li).join(`
`),f.length>0&&(f+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(li).join(`
`),x.length>0&&(x+=`
`)):(f=[So(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(li).join(`
`),x=[p,So(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?be.tonemapping_pars_fragment:"",t.toneMapping!==Mn?Dh("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",be.colorspace_pars_fragment,Uh("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(li).join(`
`)),s=qa(s),s=xo(s,t),s=yo(s,t),o=qa(o),o=xo(o,t),o=yo(o,t),s=Mo(s),o=Mo(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,f=[m,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Fs?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fs?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=g+f+s,C=g+x+o,w=_o(i,i.VERTEX_SHADER,y),T=_o(i,i.FRAGMENT_SHADER,C);function U(A){if(r.debug.checkShaderErrors){const k=i.getProgramInfoLog(_).trim(),Z=i.getShaderInfoLog(w).trim(),se=i.getShaderInfoLog(T).trim();let pe=!0,K=!0;i.getProgramParameter(_,i.LINK_STATUS)===!1?(pe=!1,typeof r.debug.onShaderError=="function"?r.debug.onShaderError(i,_,w,T):(vo(i,w,"vertex"),vo(i,T,"fragment"))):k!==""||Z!==""&&se!==""||(K=!1),K&&(A.diagnostics={runnable:pe,programLog:k,vertexShader:{log:Z,prefix:f},fragmentShader:{log:se,prefix:x}})}i.deleteShader(w),i.deleteShader(T),L=new Ir(i,_),B=function(k,Z){const se={},pe=k.getProgramParameter(Z,k.ACTIVE_ATTRIBUTES);for(let K=0;K<pe;K++){const j=k.getActiveAttrib(Z,K),Y=j.name;let ue=1;j.type===k.FLOAT_MAT2&&(ue=2),j.type===k.FLOAT_MAT3&&(ue=3),j.type===k.FLOAT_MAT4&&(ue=4),se[Y]={type:j.type,location:k.getAttribLocation(Z,Y),locationSize:ue}}return se}(i,_)}let L,B;i.attachShader(_,w),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return L===void 0&&U(this),L},this.getAttributes=function(){return B===void 0&&U(this),B};let re=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return re===!1&&(re=i.getProgramParameter(_,Ih)),re},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nh++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=T,this}let kh=0;class Gh{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wh(e),t.set(e,n)),n}}class Wh{constructor(e){this.id=kh++,this.code=e,this.usedTimes=0}}function Xh(r,e,t,n,i,a,s){const o=new rs,c=new Gh,l=new Set,h=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let m=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return l.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,x,g,y,C){const w=y.fog,T=C.geometry,U=f.isMeshStandardMaterial?y.environment:null,L=(f.isMeshStandardMaterial?t:e).get(f.envMap||U),B=L&&L.mapping===Vr?L.image.height:null,re=v[f.type];f.precision!==null&&(m=i.getMaxPrecision(f.precision),f.precision);const A=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,k=A!==void 0?A.length:0;let Z,se,pe,K,j=0;if(T.morphAttributes.position!==void 0&&(j=1),T.morphAttributes.normal!==void 0&&(j=2),T.morphAttributes.color!==void 0&&(j=3),re){const Pi=kt[re];Z=Pi.vertexShader,se=Pi.fragmentShader}else Z=f.vertexShader,se=f.fragmentShader,c.update(f),pe=c.getVertexShaderID(f),K=c.getFragmentShaderID(f);const Y=r.getRenderTarget(),ue=C.isInstancedMesh===!0,X=C.isBatchedMesh===!0,J=!!f.map,me=!!f.matcap,le=!!L,b=!!f.aoMap,M=!!f.lightMap,F=!!f.bumpMap,O=!!f.normalMap,N=!!f.displacementMap,H=!!f.emissiveMap,ae=!!f.metalnessMap,ne=!!f.roughnessMap,Q=f.anisotropy>0,E=f.clearcoat>0,te=f.iridescence>0,D=f.sheen>0,oe=f.transmission>0,ee=Q&&!!f.anisotropyMap,R=E&&!!f.clearcoatMap,I=E&&!!f.clearcoatNormalMap,G=E&&!!f.clearcoatRoughnessMap,ie=te&&!!f.iridescenceMap,ce=te&&!!f.iridescenceThicknessMap,xe=D&&!!f.sheenColorMap,Se=D&&!!f.sheenRoughnessMap,We=!!f.specularMap,fe=!!f.specularColorMap,ye=!!f.specularIntensityMap,Fe=oe&&!!f.transmissionMap,ge=oe&&!!f.thicknessMap,Ce=!!f.gradientMap,Ne=!!f.alphaMap,rt=f.alphaTest>0,bt=!!f.alphaHash,Pt=!!f.extensions;let V=Mn;f.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(V=r.toneMapping));const bn={isWebGL2:u,shaderID:re,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:se,defines:f.defines,customVertexShaderID:pe,customFragmentShaderID:K,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:m,batching:X,instancing:ue,instancingColor:ue&&C.instanceColor!==null,instancingMorph:ue&&C.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:at,alphaToCoverage:!!f.alphaToCoverage,map:J,matcap:me,envMap:le,envMapMode:le&&L.mapping,envMapCubeUVHeight:B,aoMap:b,lightMap:M,bumpMap:F,normalMap:O,displacementMap:p&&N,emissiveMap:H,normalMapObjectSpace:O&&f.normalMapType===1,normalMapTangentSpace:O&&f.normalMapType===0,metalnessMap:ae,roughnessMap:ne,anisotropy:Q,anisotropyMap:ee,clearcoat:E,clearcoatMap:R,clearcoatNormalMap:I,clearcoatRoughnessMap:G,iridescence:te,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:D,sheenColorMap:xe,sheenRoughnessMap:Se,specularMap:We,specularColorMap:fe,specularIntensityMap:ye,transmission:oe,transmissionMap:Fe,thicknessMap:ge,gradientMap:Ce,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Ne,alphaTest:rt,alphaHash:bt,combine:f.combine,mapUv:J&&_(f.map.channel),aoMapUv:b&&_(f.aoMap.channel),lightMapUv:M&&_(f.lightMap.channel),bumpMapUv:F&&_(f.bumpMap.channel),normalMapUv:O&&_(f.normalMap.channel),displacementMapUv:N&&_(f.displacementMap.channel),emissiveMapUv:H&&_(f.emissiveMap.channel),metalnessMapUv:ae&&_(f.metalnessMap.channel),roughnessMapUv:ne&&_(f.roughnessMap.channel),anisotropyMapUv:ee&&_(f.anisotropyMap.channel),clearcoatMapUv:R&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:I&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(f.sheenRoughnessMap.channel),specularMapUv:We&&_(f.specularMap.channel),specularColorMapUv:fe&&_(f.specularColorMap.channel),specularIntensityMapUv:ye&&_(f.specularIntensityMap.channel),transmissionMapUv:Fe&&_(f.transmissionMap.channel),thicknessMapUv:ge&&_(f.thicknessMap.channel),alphaMapUv:Ne&&_(f.alphaMap.channel),vertexTangents:!!T.attributes.tangent&&(O||Q),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!T.attributes.uv&&(J||Ne),fog:!!w,useFog:f.fog===!0,fogExp2:!!w&&w.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:C.isSkinnedMesh===!0,morphTargets:T.morphAttributes.position!==void 0,morphNormals:T.morphAttributes.normal!==void 0,morphColors:T.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:j,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&g.length>0,shadowMapType:r.shadowMap.type,toneMapping:V,useLegacyLights:r._useLegacyLights,decodeVideoTexture:J&&f.map.isVideoTexture===!0&&He.getTransfer(f.map.colorSpace)===Ge,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===xt,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:Pt&&f.extensions.derivatives===!0,extensionFragDepth:Pt&&f.extensions.fragDepth===!0,extensionDrawBuffers:Pt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:Pt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:Pt&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Pt&&f.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return bn.vertexUv1s=l.has(1),bn.vertexUv2s=l.has(2),bn.vertexUv3s=l.has(3),l.clear(),bn},getProgramCacheKey:function(f){const x=[];if(f.shaderID?x.push(f.shaderID):(x.push(f.customVertexShaderID),x.push(f.customFragmentShaderID)),f.defines!==void 0)for(const g in f.defines)x.push(g),x.push(f.defines[g]);return f.isRawShaderMaterial===!1&&(function(g,y){g.push(y.precision),g.push(y.outputColorSpace),g.push(y.envMapMode),g.push(y.envMapCubeUVHeight),g.push(y.mapUv),g.push(y.alphaMapUv),g.push(y.lightMapUv),g.push(y.aoMapUv),g.push(y.bumpMapUv),g.push(y.normalMapUv),g.push(y.displacementMapUv),g.push(y.emissiveMapUv),g.push(y.metalnessMapUv),g.push(y.roughnessMapUv),g.push(y.anisotropyMapUv),g.push(y.clearcoatMapUv),g.push(y.clearcoatNormalMapUv),g.push(y.clearcoatRoughnessMapUv),g.push(y.iridescenceMapUv),g.push(y.iridescenceThicknessMapUv),g.push(y.sheenColorMapUv),g.push(y.sheenRoughnessMapUv),g.push(y.specularMapUv),g.push(y.specularColorMapUv),g.push(y.specularIntensityMapUv),g.push(y.transmissionMapUv),g.push(y.thicknessMapUv),g.push(y.combine),g.push(y.fogExp2),g.push(y.sizeAttenuation),g.push(y.morphTargetsCount),g.push(y.morphAttributeCount),g.push(y.numDirLights),g.push(y.numPointLights),g.push(y.numSpotLights),g.push(y.numSpotLightMaps),g.push(y.numHemiLights),g.push(y.numRectAreaLights),g.push(y.numDirLightShadows),g.push(y.numPointLightShadows),g.push(y.numSpotLightShadows),g.push(y.numSpotLightShadowsWithMaps),g.push(y.numLightProbes),g.push(y.shadowMapType),g.push(y.toneMapping),g.push(y.numClippingPlanes),g.push(y.numClipIntersection),g.push(y.depthPacking)}(x,f),function(g,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.instancingMorph&&o.enable(4),y.matcap&&o.enable(5),y.envMap&&o.enable(6),y.normalMapObjectSpace&&o.enable(7),y.normalMapTangentSpace&&o.enable(8),y.clearcoat&&o.enable(9),y.iridescence&&o.enable(10),y.alphaTest&&o.enable(11),y.vertexColors&&o.enable(12),y.vertexAlphas&&o.enable(13),y.vertexUv1s&&o.enable(14),y.vertexUv2s&&o.enable(15),y.vertexUv3s&&o.enable(16),y.vertexTangents&&o.enable(17),y.anisotropy&&o.enable(18),y.alphaHash&&o.enable(19),y.batching&&o.enable(20),g.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),g.push(o.mask)}(x,f),x.push(r.outputColorSpace)),x.push(f.customProgramCacheKey),x.join()},getUniforms:function(f){const x=v[f.type];let g;if(x){const y=kt[x];g=Sc.clone(y.uniforms)}else g=f.uniforms;return g},acquireProgram:function(f,x){let g;for(let y=0,C=h.length;y<C;y++){const w=h[y];if(w.cacheKey===x){g=w,++g.usedTimes;break}}return g===void 0&&(g=new Vh(r,x,f,a),h.push(g)),g},releaseProgram:function(f){if(--f.usedTimes==0){const x=h.indexOf(f);h[x]=h[h.length-1],h.pop(),f.destroy()}},releaseShaderCache:function(f){c.remove(f)},programs:h,dispose:function(){c.dispose()}}}function jh(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function Yh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Eo(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function To(){const r=[];let e=0;const t=[],n=[],i=[];function a(s,o,c,l,h,u){let d=r[e];return d===void 0?(d={id:s.id,object:s,geometry:o,material:c,groupOrder:l,renderOrder:s.renderOrder,z:h,group:u},r[e]=d):(d.id=s.id,d.object=s,d.geometry=o,d.material=c,d.groupOrder=l,d.renderOrder=s.renderOrder,d.z=h,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(s,o,c,l,h,u){const d=a(s,o,c,l,h,u);c.transmission>0?n.push(d):c.transparent===!0?i.push(d):t.push(d)},unshift:function(s,o,c,l,h,u){const d=a(s,o,c,l,h,u);c.transmission>0?n.unshift(d):c.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let s=e,o=r.length;s<o;s++){const c=r[s];if(c.id===null)break;c.id=null,c.object=null,c.geometry=null,c.material=null,c.group=null}},sort:function(s,o){t.length>1&&t.sort(s||Yh),n.length>1&&n.sort(o||Eo),i.length>1&&i.sort(o||Eo)}}}function qh(){let r=new WeakMap;return{get:function(e,t){const n=r.get(e);let i;return n===void 0?(i=new To,r.set(e,[i])):t>=n.length?(i=new To,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function Kh(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ee};break;case"SpotLight":t={position:new P,direction:new P,color:new Ee,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ee,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ee,groundColor:new Ee};break;case"RectAreaLight":t={color:new Ee,position:new P,halfWidth:new P,halfHeight:new P}}return r[e.id]=t,t}}}let Zh=0;function Jh(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function $h(r,e){const t=new Kh,n=function(){const c={};return{get:function(l){if(c[l.id]!==void 0)return c[l.id];let h;switch(l.type){case"DirectionalLight":case"SpotLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":h={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3}}return c[l.id]=h,h}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new P);const a=new P,s=new Te,o=new Te;return{setup:function(c,l){let h=0,u=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let p=0,m=0,v=0,_=0,f=0,x=0,g=0,y=0,C=0,w=0,T=0;c.sort(Jh);const U=l===!0?Math.PI:1;for(let B=0,re=c.length;B<re;B++){const A=c[B],k=A.color,Z=A.intensity,se=A.distance,pe=A.shadow&&A.shadow.map?A.shadow.map.texture:null;if(A.isAmbientLight)h+=k.r*Z*U,u+=k.g*Z*U,d+=k.b*Z*U;else if(A.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(A.sh.coefficients[K],Z);T++}else if(A.isDirectionalLight){const K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity*U),A.castShadow){const j=A.shadow,Y=n.get(A);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=pe,i.directionalShadowMatrix[p]=A.shadow.matrix,x++}i.directional[p]=K,p++}else if(A.isSpotLight){const K=t.get(A);K.position.setFromMatrixPosition(A.matrixWorld),K.color.copy(k).multiplyScalar(Z*U),K.distance=se,K.coneCos=Math.cos(A.angle),K.penumbraCos=Math.cos(A.angle*(1-A.penumbra)),K.decay=A.decay,i.spot[v]=K;const j=A.shadow;if(A.map&&(i.spotLightMap[C]=A.map,C++,j.updateMatrices(A),A.castShadow&&w++),i.spotLightMatrix[v]=j.matrix,A.castShadow){const Y=n.get(A);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[v]=Y,i.spotShadowMap[v]=pe,y++}v++}else if(A.isRectAreaLight){const K=t.get(A);K.color.copy(k).multiplyScalar(Z),K.halfWidth.set(.5*A.width,0,0),K.halfHeight.set(0,.5*A.height,0),i.rectArea[_]=K,_++}else if(A.isPointLight){const K=t.get(A);if(K.color.copy(A.color).multiplyScalar(A.intensity*U),K.distance=A.distance,K.decay=A.decay,A.castShadow){const j=A.shadow,Y=n.get(A);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[m]=Y,i.pointShadowMap[m]=pe,i.pointShadowMatrix[m]=A.shadow.matrix,g++}i.point[m]=K,m++}else if(A.isHemisphereLight){const K=t.get(A);K.skyColor.copy(A.color).multiplyScalar(Z*U),K.groundColor.copy(A.groundColor).multiplyScalar(Z*U),i.hemi[f]=K,f++}}_>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0&&(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;const L=i.hash;L.directionalLength===p&&L.pointLength===m&&L.spotLength===v&&L.rectAreaLength===_&&L.hemiLength===f&&L.numDirectionalShadows===x&&L.numPointShadows===g&&L.numSpotShadows===y&&L.numSpotMaps===C&&L.numLightProbes===T||(i.directional.length=p,i.spot.length=v,i.rectArea.length=_,i.point.length=m,i.hemi.length=f,i.directionalShadow.length=x,i.directionalShadowMap.length=x,i.pointShadow.length=g,i.pointShadowMap.length=g,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=x,i.pointShadowMatrix.length=g,i.spotLightMatrix.length=y+C-w,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=w,i.numLightProbes=T,L.directionalLength=p,L.pointLength=m,L.spotLength=v,L.rectAreaLength=_,L.hemiLength=f,L.numDirectionalShadows=x,L.numPointShadows=g,L.numSpotShadows=y,L.numSpotMaps=C,L.numLightProbes=T,i.version=Zh++)},setupView:function(c,l){let h=0,u=0,d=0,p=0,m=0;const v=l.matrixWorldInverse;for(let _=0,f=c.length;_<f;_++){const x=c[_];if(x.isDirectionalLight){const g=i.directional[h];g.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(v),h++}else if(x.isSpotLight){const g=i.spot[d];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(v),g.direction.setFromMatrixPosition(x.matrixWorld),a.setFromMatrixPosition(x.target.matrixWorld),g.direction.sub(a),g.direction.transformDirection(v),d++}else if(x.isRectAreaLight){const g=i.rectArea[p];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(v),o.identity(),s.copy(x.matrixWorld),s.premultiply(v),o.extractRotation(s),g.halfWidth.set(.5*x.width,0,0),g.halfHeight.set(0,.5*x.height,0),g.halfWidth.applyMatrix4(o),g.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const g=i.point[u];g.position.setFromMatrixPosition(x.matrixWorld),g.position.applyMatrix4(v),u++}else if(x.isHemisphereLight){const g=i.hemi[m];g.direction.setFromMatrixPosition(x.matrixWorld),g.direction.transformDirection(v),m++}}},state:i}}function bo(r,e){const t=new $h(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(a){t.setup(n,a)},setupLightsView:function(a){t.setupView(n,a)},pushLight:function(a){n.push(a)},pushShadow:function(a){i.push(a)}}}function Qh(r,e){let t=new WeakMap;return{get:function(n,i=0){const a=t.get(n);let s;return a===void 0?(s=new bo(r,e),t.set(n,[s])):i>=a.length?(s=new bo(r,e),a.push(s)):s=a[i],s},dispose:function(){t=new WeakMap}}}class eu extends Xt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class tu extends Xt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function nu(r,e,t){let n=new as;const i=new ve,a=new ve,s=new Ve,o=new eu({depthPacking:3201}),c=new tu,l={},h=t.maxTextureSize,u={[sn]:xt,[xt]:sn,2:2},d=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fragmentShader:`uniform sampler2D shadow_pass;
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new Tt;m.setAttribute("position",new mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vt(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ol;let f=this.type;function x(w,T){const U=e.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Xn(i.x,i.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(T,null,U,d,v,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(T,null,U,p,v,null)}function g(w,T,U,L){let B=null;const re=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(re!==void 0)B=re;else if(B=U.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const A=B.uuid,k=T.uuid;let Z=l[A];Z===void 0&&(Z={},l[A]=Z);let se=Z[k];se===void 0&&(se=B.clone(),Z[k]=se,T.addEventListener("dispose",C)),B=se}return B.visible=T.visible,B.wireframe=T.wireframe,B.side=L===rn?T.shadowSide!==null?T.shadowSide:T.side:T.shadowSide!==null?T.shadowSide:u[T.side],B.alphaMap=T.alphaMap,B.alphaTest=T.alphaTest,B.map=T.map,B.clipShadows=T.clipShadows,B.clippingPlanes=T.clippingPlanes,B.clipIntersection=T.clipIntersection,B.displacementMap=T.displacementMap,B.displacementScale=T.displacementScale,B.displacementBias=T.displacementBias,B.wireframeLinewidth=T.wireframeLinewidth,B.linewidth=T.linewidth,U.isPointLight===!0&&B.isMeshDistanceMaterial===!0&&(r.properties.get(B).light=U),B}function y(w,T,U,L,B){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&B===rn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const A=e.update(w),k=w.material;if(Array.isArray(k)){const Z=A.groups;for(let se=0,pe=Z.length;se<pe;se++){const K=Z[se],j=k[K.materialIndex];if(j&&j.visible){const Y=g(w,j,L,B);w.onBeforeShadow(r,w,T,U,A,Y,K),r.renderBufferDirect(U,null,A,Y,w,K),w.onAfterShadow(r,w,T,U,A,Y,K)}}}else if(k.visible){const Z=g(w,k,L,B);w.onBeforeShadow(r,w,T,U,A,Z,null),r.renderBufferDirect(U,null,A,Z,w,null),w.onAfterShadow(r,w,T,U,A,Z,null)}}const re=w.children;for(let A=0,k=re.length;A<k;A++)y(re[A],T,U,L,B)}function C(w){w.target.removeEventListener("dispose",C);for(const T in l){const U=l[T],L=w.target.uuid;L in U&&(U[L].dispose(),delete U[L])}}this.render=function(w,T,U){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;const L=r.getRenderTarget(),B=r.getActiveCubeFace(),re=r.getActiveMipmapLevel(),A=r.state;A.setBlending(0),A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const k=f!==rn&&this.type===rn,Z=f===rn&&this.type!==rn;for(let se=0,pe=w.length;se<pe;se++){const K=w[se],j=K.shadow;if(j===void 0||j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const Y=j.getFrameExtents();if(i.multiply(Y),a.copy(j.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(a.x=Math.floor(h/Y.x),i.x=a.x*Y.x,j.mapSize.x=a.x),i.y>h&&(a.y=Math.floor(h/Y.y),i.y=a.y*Y.y,j.mapSize.y=a.y)),j.map===null||k===!0||Z===!0){const X=this.type!==rn?{minFilter:ht,magFilter:ht}:{};j.map!==null&&j.map.dispose(),j.map=new Xn(i.x,i.y,X),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const ue=j.getViewportCount();for(let X=0;X<ue;X++){const J=j.getViewport(X);s.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),A.viewport(s),j.updateMatrices(K,X),n=j.getFrustum(),y(T,U,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===rn&&x(j,U),j.needsUpdate=!1}f=this.type,_.needsUpdate=!1,r.setRenderTarget(L,B,re)}}function iu(r,e,t){const n=t.isWebGL2,i=new function(){let E=!1;const te=new Ve;let D=null;const oe=new Ve(0,0,0,0);return{setMask:function(ee){D===ee||E||(r.colorMask(ee,ee,ee,ee),D=ee)},setLocked:function(ee){E=ee},setClear:function(ee,R,I,G,ie){ie===!0&&(ee*=G,R*=G,I*=G),te.set(ee,R,I,G),oe.equals(te)===!1&&(r.clearColor(ee,R,I,G),oe.copy(te))},reset:function(){E=!1,D=null,oe.set(-1,0,0,0)}}},a=new function(){let E=!1,te=null,D=null,oe=null;return{setTest:function(ee){ee?M(r.DEPTH_TEST):F(r.DEPTH_TEST)},setMask:function(ee){te===ee||E||(r.depthMask(ee),te=ee)},setFunc:function(ee){if(D!==ee){switch(ee){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}D=ee}},setLocked:function(ee){E=ee},setClear:function(ee){oe!==ee&&(r.clearDepth(ee),oe=ee)},reset:function(){E=!1,te=null,D=null,oe=null}}},s=new function(){let E=!1,te=null,D=null,oe=null,ee=null,R=null,I=null,G=null,ie=null;return{setTest:function(ce){E||(ce?M(r.STENCIL_TEST):F(r.STENCIL_TEST))},setMask:function(ce){te===ce||E||(r.stencilMask(ce),te=ce)},setFunc:function(ce,xe,Se){D===ce&&oe===xe&&ee===Se||(r.stencilFunc(ce,xe,Se),D=ce,oe=xe,ee=Se)},setOp:function(ce,xe,Se){R===ce&&I===xe&&G===Se||(r.stencilOp(ce,xe,Se),R=ce,I=xe,G=Se)},setLocked:function(ce){E=ce},setClear:function(ce){ie!==ce&&(r.clearStencil(ce),ie=ce)},reset:function(){E=!1,te=null,D=null,oe=null,ee=null,R=null,I=null,G=null,ie=null}}},o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,_=null,f=null,x=null,g=null,y=null,C=null,w=new Ee(0,0,0),T=0,U=!1,L=null,B=null,re=null,A=null,k=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,pe=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=pe>=1):K.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=pe>=2);let j=null,Y={};const ue=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),J=new Ve().fromArray(ue),me=new Ve().fromArray(X);function le(E,te,D,oe){const ee=new Uint8Array(4),R=r.createTexture();r.bindTexture(E,R),r.texParameteri(E,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(E,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let I=0;I<D;I++)!n||E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY?r.texImage2D(te+I,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage3D(te,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,ee);return R}const b={};function M(E){l[E]!==!0&&(r.enable(E),l[E]=!0)}function F(E){l[E]!==!1&&(r.disable(E),l[E]=!1)}b[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),b[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(b[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),b[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),a.setClear(1),s.setClear(0),M(r.DEPTH_TEST),a.setFunc(3),ae(!1),ne(1),M(r.CULL_FACE),H(0);const O={[Hn]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)O[103]=r.MIN,O[104]=r.MAX;else{const E=e.get("EXT_blend_minmax");E!==null&&(O[103]=E.MIN_EXT,O[104]=E.MAX_EXT)}const N={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function H(E,te,D,oe,ee,R,I,G,ie,ce){if(E!==0){if(m===!1&&(M(r.BLEND),m=!0),E===5)ee=ee||te,R=R||D,I=I||oe,te===_&&ee===g||(r.blendEquationSeparate(O[te],O[ee]),_=te,g=ee),D===f&&oe===x&&R===y&&I===C||(r.blendFuncSeparate(N[D],N[oe],N[R],N[I]),f=D,x=oe,y=R,C=I),G.equals(w)!==!1&&ie===T||(r.blendColor(G.r,G.g,G.b,ie),w.copy(G),T=ie),v=E,U=!1;else if(E!==v||ce!==U){if(_===Hn&&g===Hn||(r.blendEquation(r.FUNC_ADD),_=Hn,g=Hn),ce)switch(E){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA)}else switch(E){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR)}f=null,x=null,y=null,C=null,w.set(0,0,0),T=0,v=E,U=ce}}else m===!0&&(F(r.BLEND),m=!1)}function ae(E){L!==E&&(E?r.frontFace(r.CW):r.frontFace(r.CCW),L=E)}function ne(E){E!==0?(M(r.CULL_FACE),E!==B&&(E===1?r.cullFace(r.BACK):E===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):F(r.CULL_FACE),B=E}function Q(E,te,D){E?(M(r.POLYGON_OFFSET_FILL),A===te&&k===D||(r.polygonOffset(te,D),A=te,k=D)):F(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:a,stencil:s},enable:M,disable:F,bindFramebuffer:function(E,te){return h[E]!==te&&(r.bindFramebuffer(E,te),h[E]=te,n&&(E===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=te),E===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=te)),!0)},drawBuffers:function(E,te){let D=d,oe=!1;if(E){D=u.get(te),D===void 0&&(D=[],u.set(te,D));const ee=E.textures;if(D.length!==ee.length||D[0]!==r.COLOR_ATTACHMENT0){for(let R=0,I=ee.length;R<I;R++)D[R]=r.COLOR_ATTACHMENT0+R;D.length=ee.length,oe=!0}}else D[0]!==r.BACK&&(D[0]=r.BACK,oe=!0);if(oe)if(t.isWebGL2)r.drawBuffers(D);else{if(e.has("WEBGL_draw_buffers")!==!0)throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension");e.get("WEBGL_draw_buffers").drawBuffersWEBGL(D)}},useProgram:function(E){return p!==E&&(r.useProgram(E),p=E,!0)},setBlending:H,setMaterial:function(E,te){E.side===2?F(r.CULL_FACE):M(r.CULL_FACE);let D=E.side===xt;te&&(D=!D),ae(D),E.blending===1&&E.transparent===!1?H(0):H(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),i.setMask(E.colorWrite);const oe=E.stencilWrite;s.setTest(oe),oe&&(s.setMask(E.stencilWriteMask),s.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),s.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Q(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?M(r.SAMPLE_ALPHA_TO_COVERAGE):F(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:ae,setCullFace:ne,setLineWidth:function(E){E!==re&&(se&&r.lineWidth(E),re=E)},setPolygonOffset:Q,setScissorTest:function(E){E?M(r.SCISSOR_TEST):F(r.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=r.TEXTURE0+Z-1),j!==E&&(r.activeTexture(E),j=E)},bindTexture:function(E,te,D){D===void 0&&(D=j===null?r.TEXTURE0+Z-1:j);let oe=Y[D];oe===void 0&&(oe={type:void 0,texture:void 0},Y[D]=oe),oe.type===E&&oe.texture===te||(j!==D&&(r.activeTexture(D),j=D),r.bindTexture(E,te||b[E]),oe.type=E,oe.texture=te)},unbindTexture:function(){const E=Y[j];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch{}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch{}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch{}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch{}},updateUBOMapping:function(E,te){let D=c.get(te);D===void 0&&(D=new WeakMap,c.set(te,D));let oe=D.get(E);oe===void 0&&(oe=r.getUniformBlockIndex(te,E.name),D.set(E,oe))},uniformBlockBinding:function(E,te){const D=c.get(te).get(E);o.get(te)!==D&&(r.uniformBlockBinding(te,D,E.__bindingPointIndex),o.set(te,D))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch{}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch{}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch{}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch{}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch{}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch{}},scissor:function(E){J.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),J.copy(E))},viewport:function(E){me.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),me.copy(E))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),l={},j=null,Y={},h={},u=new WeakMap,d=[],p=null,m=!1,v=null,_=null,f=null,x=null,g=null,y=null,C=null,w=new Ee(0,0,0),T=0,U=!1,L=null,B=null,re=null,A=null,k=null,J.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),s.reset()}}}function ru(r,e,t,n,i,a,s){const o=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),h=new ve,u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,M){return m?new OffscreenCanvas(b,M):ji("canvas")}function _(b,M,F,O){let N=1;const H=le(b);if((H.width>O||H.height>O)&&(N=O/Math.max(H.width,H.height)),N<1||M===!0){if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ae=M?zr:Math.floor,ne=ae(N*H.width),Q=ae(N*H.height);d===void 0&&(d=v(ne,Q));const E=F?v(ne,Q):d;return E.width=ne,E.height=Q,E.getContext("2d").drawImage(b,0,0,ne,Q),E}return b}return b}function f(b){const M=le(b);return Ya(M.width)&&Ya(M.height)}function x(b,M){return b.generateMipmaps&&M&&b.minFilter!==ht&&b.minFilter!==Je}function g(b){r.generateMipmap(b)}function y(b,M,F,O,N=!1){if(o===!1)return M;if(b!==null&&r[b]!==void 0)return r[b];let H=M;if(M===r.RED&&(F===r.FLOAT&&(H=r.R32F),F===r.HALF_FLOAT&&(H=r.R16F),F===r.UNSIGNED_BYTE&&(H=r.R8)),M===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(H=r.R8UI),F===r.UNSIGNED_SHORT&&(H=r.R16UI),F===r.UNSIGNED_INT&&(H=r.R32UI),F===r.BYTE&&(H=r.R8I),F===r.SHORT&&(H=r.R16I),F===r.INT&&(H=r.R32I)),M===r.RG&&(F===r.FLOAT&&(H=r.RG32F),F===r.HALF_FLOAT&&(H=r.RG16F),F===r.UNSIGNED_BYTE&&(H=r.RG8)),M===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(H=r.RG8UI),F===r.UNSIGNED_SHORT&&(H=r.RG16UI),F===r.UNSIGNED_INT&&(H=r.RG32UI),F===r.BYTE&&(H=r.RG8I),F===r.SHORT&&(H=r.RG16I),F===r.INT&&(H=r.RG32I)),M===r.RGBA){const ae=N?Dr:He.getTransfer(O);F===r.FLOAT&&(H=r.RGBA32F),F===r.HALF_FLOAT&&(H=r.RGBA16F),F===r.UNSIGNED_BYTE&&(H=ae===Ge?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(H=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(H=r.RGB5_A1)}return H!==r.R16F&&H!==r.R32F&&H!==r.RG16F&&H!==r.RG32F&&H!==r.RGBA16F&&H!==r.RGBA32F||e.get("EXT_color_buffer_float"),H}function C(b,M,F){return x(b,F)===!0||b.isFramebufferTexture&&b.minFilter!==ht&&b.minFilter!==Je?Math.log2(Math.max(M.width,M.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?M.mipmaps.length:1}function w(b){return b===ht||b===Ga||b===hi?r.NEAREST:r.LINEAR}function T(b){const M=b.target;M.removeEventListener("dispose",T),function(F){const O=n.get(F);if(O.__webglInit===void 0)return;const N=F.source,H=p.get(N);if(H){const ae=H[O.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&L(F),Object.keys(H).length===0&&p.delete(N)}n.remove(F)}(M),M.isVideoTexture&&u.delete(M)}function U(b){const M=b.target;M.removeEventListener("dispose",U),function(F){const O=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let H=0;H<6;H++){if(Array.isArray(O.__webglFramebuffer[H]))for(let ae=0;ae<O.__webglFramebuffer[H].length;ae++)r.deleteFramebuffer(O.__webglFramebuffer[H][ae]);else r.deleteFramebuffer(O.__webglFramebuffer[H]);O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer[H])}else{if(Array.isArray(O.__webglFramebuffer))for(let H=0;H<O.__webglFramebuffer.length;H++)r.deleteFramebuffer(O.__webglFramebuffer[H]);else r.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&r.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&r.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let H=0;H<O.__webglColorRenderbuffer.length;H++)O.__webglColorRenderbuffer[H]&&r.deleteRenderbuffer(O.__webglColorRenderbuffer[H]);O.__webglDepthRenderbuffer&&r.deleteRenderbuffer(O.__webglDepthRenderbuffer)}const N=F.textures;for(let H=0,ae=N.length;H<ae;H++){const ne=n.get(N[H]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(N[H])}n.remove(F)}(M)}function L(b){const M=n.get(b);r.deleteTexture(M.__webglTexture);const F=b.source;delete p.get(F)[M.__cacheKey],s.memory.textures--}let B=0;function re(b,M){const F=n.get(b);if(b.isVideoTexture&&function(O){const N=s.render.frame;u.get(O)!==N&&(u.set(O,N),O.update())}(b),b.isRenderTargetTexture===!1&&b.version>0&&F.__version!==b.version){const O=b.image;if(O!==null){if(O.complete!==!1)return void K(F,b,M)}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+M)}const A={[xi]:r.REPEAT,[Bt]:r.CLAMP_TO_EDGE,[Ur]:r.MIRRORED_REPEAT},k={[ht]:r.NEAREST,[Ga]:r.NEAREST_MIPMAP_NEAREST,[hi]:r.NEAREST_MIPMAP_LINEAR,[Je]:r.LINEAR,[Lr]:r.LINEAR_MIPMAP_NEAREST,[Sn]:r.LINEAR_MIPMAP_LINEAR},Z={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function se(b,M,F){if(M.type===Et&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Je||M.magFilter===Lr||M.magFilter===hi||M.magFilter===Sn||M.minFilter===Je||M.minFilter===Lr||M.minFilter===hi||M.minFilter),F?(r.texParameteri(b,r.TEXTURE_WRAP_S,A[M.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,A[M.wrapT]),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,A[M.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,k[M.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,k[M.minFilter])):(r.texParameteri(b,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(b,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),b!==r.TEXTURE_3D&&b!==r.TEXTURE_2D_ARRAY||r.texParameteri(b,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),M.wrapS!==Bt||M.wrapT,r.texParameteri(b,r.TEXTURE_MAG_FILTER,w(M.magFilter)),r.texParameteri(b,r.TEXTURE_MIN_FILTER,w(M.minFilter)),M.minFilter!==ht&&M.minFilter),M.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,Z[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ht||M.minFilter!==hi&&M.minFilter!==Sn||M.type===Et&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===an&&e.has("OES_texture_half_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function pe(b,M){let F=!1;b.__webglInit===void 0&&(b.__webglInit=!0,M.addEventListener("dispose",T));const O=M.source;let N=p.get(O);N===void 0&&(N={},p.set(O,N));const H=function(ae){const ne=[];return ne.push(ae.wrapS),ne.push(ae.wrapT),ne.push(ae.wrapR||0),ne.push(ae.magFilter),ne.push(ae.minFilter),ne.push(ae.anisotropy),ne.push(ae.internalFormat),ne.push(ae.format),ne.push(ae.type),ne.push(ae.generateMipmaps),ne.push(ae.premultiplyAlpha),ne.push(ae.flipY),ne.push(ae.unpackAlignment),ne.push(ae.colorSpace),ne.join()}(M);if(H!==b.__cacheKey){N[H]===void 0&&(N[H]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,F=!0),N[H].usedTimes++;const ae=N[b.__cacheKey];ae!==void 0&&(N[b.__cacheKey].usedTimes--,ae.usedTimes===0&&L(M)),b.__cacheKey=H,b.__webglTexture=N[H].texture}return F}function K(b,M,F){let O=r.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(O=r.TEXTURE_2D_ARRAY),M.isData3DTexture&&(O=r.TEXTURE_3D);const N=pe(b,M),H=M.source;t.bindTexture(O,b.__webglTexture,r.TEXTURE0+F);const ae=n.get(H);if(H.version!==ae.__version||N===!0){t.activeTexture(r.TEXTURE0+F);const ne=He.getPrimaries(He.workingColorSpace),Q=M.colorSpace===ui?null:He.getPrimaries(M.colorSpace),E=M.colorSpace===ui||ne===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,M.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,M.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);const te=function(fe){return!o&&(fe.wrapS!==Bt||fe.wrapT!==Bt||fe.minFilter!==ht&&fe.minFilter!==Je)}(M)&&f(M.image)===!1;let D=_(M.image,te,!1,i.maxTextureSize);D=me(M,D);const oe=f(D)||o,ee=a.convert(M.format,M.colorSpace);let R,I=a.convert(M.type),G=y(M.internalFormat,ee,I,M.colorSpace,M.isVideoTexture);se(O,M,oe);const ie=M.mipmaps,ce=o&&M.isVideoTexture!==!0&&G!==36196,xe=ae.__version===void 0||N===!0,Se=H.dataReady,We=C(M,D,oe);if(M.isDepthTexture)G=r.DEPTH_COMPONENT,o?G=M.type===Et?r.DEPTH_COMPONENT32F:M.type===vn?r.DEPTH_COMPONENT24:M.type===kn?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:M.type,M.format===Gn&&G===r.DEPTH_COMPONENT&&M.type!==ns&&M.type!==vn&&(M.type=vn,I=a.convert(M.type)),M.format===yi&&G===r.DEPTH_COMPONENT&&(G=r.DEPTH_STENCIL,M.type!==kn&&(M.type=kn,I=a.convert(M.type))),xe&&(ce?t.texStorage2D(r.TEXTURE_2D,1,G,D.width,D.height):t.texImage2D(r.TEXTURE_2D,0,G,D.width,D.height,0,ee,I,null));else if(M.isDataTexture)if(ie.length>0&&oe){ce&&xe&&t.texStorage2D(r.TEXTURE_2D,We,G,ie[0].width,ie[0].height);for(let fe=0,ye=ie.length;fe<ye;fe++)R=ie[fe],ce?Se&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,R.width,R.height,ee,I,R.data):t.texImage2D(r.TEXTURE_2D,fe,G,R.width,R.height,0,ee,I,R.data);M.generateMipmaps=!1}else ce?(xe&&t.texStorage2D(r.TEXTURE_2D,We,G,D.width,D.height),Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,D.width,D.height,ee,I,D.data)):t.texImage2D(r.TEXTURE_2D,0,G,D.width,D.height,0,ee,I,D.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ce&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,G,ie[0].width,ie[0].height,D.depth);for(let fe=0,ye=ie.length;fe<ye;fe++)R=ie[fe],M.format!==Wt?ee!==null&&(ce?Se&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,R.width,R.height,D.depth,ee,R.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,G,R.width,R.height,D.depth,0,R.data,0,0)):ce?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,R.width,R.height,D.depth,ee,I,R.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,G,R.width,R.height,D.depth,0,ee,I,R.data)}else{ce&&xe&&t.texStorage2D(r.TEXTURE_2D,We,G,ie[0].width,ie[0].height);for(let fe=0,ye=ie.length;fe<ye;fe++)R=ie[fe],M.format!==Wt?ee!==null&&(ce?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,R.width,R.height,ee,R.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,G,R.width,R.height,0,R.data)):ce?Se&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,R.width,R.height,ee,I,R.data):t.texImage2D(r.TEXTURE_2D,fe,G,R.width,R.height,0,ee,I,R.data)}else if(M.isDataArrayTexture)ce?(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,We,G,D.width,D.height,D.depth),Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,D.width,D.height,D.depth,ee,I,D.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,G,D.width,D.height,D.depth,0,ee,I,D.data);else if(M.isData3DTexture)ce?(xe&&t.texStorage3D(r.TEXTURE_3D,We,G,D.width,D.height,D.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,D.width,D.height,D.depth,ee,I,D.data)):t.texImage3D(r.TEXTURE_3D,0,G,D.width,D.height,D.depth,0,ee,I,D.data);else if(M.isFramebufferTexture){if(xe)if(ce)t.texStorage2D(r.TEXTURE_2D,We,G,D.width,D.height);else{let fe=D.width,ye=D.height;for(let Fe=0;Fe<We;Fe++)t.texImage2D(r.TEXTURE_2D,Fe,G,fe,ye,0,ee,I,null),fe>>=1,ye>>=1}}else if(ie.length>0&&oe){if(ce&&xe){const fe=le(ie[0]);t.texStorage2D(r.TEXTURE_2D,We,G,fe.width,fe.height)}for(let fe=0,ye=ie.length;fe<ye;fe++)R=ie[fe],ce?Se&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ee,I,R):t.texImage2D(r.TEXTURE_2D,fe,G,ee,I,R);M.generateMipmaps=!1}else if(ce){if(xe){const fe=le(D);t.texStorage2D(r.TEXTURE_2D,We,G,fe.width,fe.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee,I,D)}else t.texImage2D(r.TEXTURE_2D,0,G,ee,I,D);x(M,oe)&&g(O),ae.__version=H.version,M.onUpdate&&M.onUpdate(M)}b.__version=M.version}function j(b,M,F,O,N,H){const ae=a.convert(F.format,F.colorSpace),ne=a.convert(F.type),Q=y(F.internalFormat,ae,ne,F.colorSpace);if(!n.get(M).__hasExternalTextures){const E=Math.max(1,M.width>>H),te=Math.max(1,M.height>>H);N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?t.texImage3D(N,H,Q,E,te,M.depth,0,ae,ne,null):t.texImage2D(N,H,Q,E,te,0,ae,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),J(M)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,O,N,n.get(F).__webglTexture,0,X(M)):(N===r.TEXTURE_2D||N>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&N<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,O,N,n.get(F).__webglTexture,H),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(b,M,F){if(r.bindRenderbuffer(r.RENDERBUFFER,b),M.depthBuffer&&!M.stencilBuffer){let O=o===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||J(M)){const N=M.depthTexture;N&&N.isDepthTexture&&(N.type===Et?O=r.DEPTH_COMPONENT32F:N.type===vn&&(O=r.DEPTH_COMPONENT24));const H=X(M);J(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H,O,M.width,M.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,H,O,M.width,M.height)}else r.renderbufferStorage(r.RENDERBUFFER,O,M.width,M.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,b)}else if(M.depthBuffer&&M.stencilBuffer){const O=X(M);F&&J(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,O,r.DEPTH24_STENCIL8,M.width,M.height):J(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O,r.DEPTH24_STENCIL8,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,M.width,M.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,b)}else{const O=M.textures;for(let N=0;N<O.length;N++){const H=O[N],ae=a.convert(H.format,H.colorSpace),ne=a.convert(H.type),Q=y(H.internalFormat,ae,ne,H.colorSpace),E=X(M);F&&J(M)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,E,Q,M.width,M.height):J(M)?c.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,E,Q,M.width,M.height):r.renderbufferStorage(r.RENDERBUFFER,Q,M.width,M.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(b){const M=n.get(b),F=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(O,N){if(N&&N.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,O),!N.depthTexture||!N.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(N.depthTexture).__webglTexture&&N.depthTexture.image.width===N.width&&N.depthTexture.image.height===N.height||(N.depthTexture.image.width=N.width,N.depthTexture.image.height=N.height,N.depthTexture.needsUpdate=!0),re(N.depthTexture,0);const H=n.get(N.depthTexture).__webglTexture,ae=X(N);if(N.depthTexture.format===Gn)J(N)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,H,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,H,0);else{if(N.depthTexture.format!==yi)throw new Error("Unknown depthTexture format");J(N)?c.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,H,0,ae):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,H,0)}})(M.__webglFramebuffer,b)}else if(F){M.__webglDepthbuffer=[];for(let O=0;O<6;O++)t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer[O]),M.__webglDepthbuffer[O]=r.createRenderbuffer(),Y(M.__webglDepthbuffer[O],b,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=r.createRenderbuffer(),Y(M.__webglDepthbuffer,b,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function X(b){return Math.min(i.maxSamples,b.samples)}function J(b){const M=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function me(b,M){const F=b.colorSpace,O=b.format;return b.type,b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Xa||F!==at&&F!==ui&&He.getTransfer(F)===Ge&&o===!1&&(e.has("EXT_sRGB")===!0&&O===Wt?(b.format=Xa,b.minFilter=Je,b.generateMipmaps=!1):M=dl.sRGBToLinear(M)),M}function le(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(h.width=b.naturalWidth||b.width,h.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(h.width=b.displayWidth,h.height=b.displayHeight):(h.width=b.width,h.height=b.height),h}this.allocateTextureUnit=function(){const b=B;return i.maxTextures,B+=1,b},this.resetTextureUnits=function(){B=0},this.setTexture2D=re,this.setTexture2DArray=function(b,M){const F=n.get(b);b.version>0&&F.__version!==b.version?K(F,b,M):t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+M)},this.setTexture3D=function(b,M){const F=n.get(b);b.version>0&&F.__version!==b.version?K(F,b,M):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+M)},this.setTextureCube=function(b,M){const F=n.get(b);b.version>0&&F.__version!==b.version?function(O,N,H){if(N.image.length!==6)return;const ae=pe(O,N),ne=N.source;t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture,r.TEXTURE0+H);const Q=n.get(ne);if(ne.version!==Q.__version||ae===!0){t.activeTexture(r.TEXTURE0+H);const E=He.getPrimaries(He.workingColorSpace),te=N.colorSpace===ui?null:He.getPrimaries(N.colorSpace),D=N.colorSpace===ui||E===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,N.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,N.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,D);const oe=N.isCompressedTexture||N.image[0].isCompressedTexture,ee=N.image[0]&&N.image[0].isDataTexture,R=[];for(let ge=0;ge<6;ge++)R[ge]=oe||ee?ee?N.image[ge].image:N.image[ge]:_(N.image[ge],!1,!0,i.maxCubemapSize),R[ge]=me(N,R[ge]);const I=R[0],G=f(I)||o,ie=a.convert(N.format,N.colorSpace),ce=a.convert(N.type),xe=y(N.internalFormat,ie,ce,N.colorSpace),Se=o&&N.isVideoTexture!==!0,We=Q.__version===void 0||ae===!0,fe=ne.dataReady;let ye,Fe=C(N,I,G);if(se(r.TEXTURE_CUBE_MAP,N,G),oe){Se&&We&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,xe,I.width,I.height);for(let ge=0;ge<6;ge++){ye=R[ge].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){const Ne=ye[Ce];N.format!==Wt?ie!==null&&(Se?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,Ne.width,Ne.height,ie,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,xe,Ne.width,Ne.height,0,Ne.data)):Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,0,0,Ne.width,Ne.height,ie,ce,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce,xe,Ne.width,Ne.height,0,ie,ce,Ne.data)}}}else{if(ye=N.mipmaps,Se&&We){ye.length>0&&Fe++;const ge=le(R[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Fe,xe,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ee){Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,R[ge].width,R[ge].height,ie,ce,R[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,R[ge].width,R[ge].height,0,ie,ce,R[ge].data);for(let Ce=0;Ce<ye.length;Ce++){const Ne=ye[Ce].image[ge].image;Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,Ne.width,Ne.height,ie,ce,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,xe,Ne.width,Ne.height,0,ie,ce,Ne.data)}}else{Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ie,ce,R[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,xe,ie,ce,R[ge]);for(let Ce=0;Ce<ye.length;Ce++){const Ne=ye[Ce];Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,0,0,ie,ce,Ne.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Ce+1,xe,ie,ce,Ne.image[ge])}}}x(N,G)&&g(r.TEXTURE_CUBE_MAP),Q.__version=ne.version,N.onUpdate&&N.onUpdate(N)}O.__version=N.version}(F,b,M):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+M)},this.rebindTextures=function(b,M,F){const O=n.get(b);M!==void 0&&j(O.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ue(b)},this.setupRenderTarget=function(b){const M=b.texture,F=n.get(b),O=n.get(M);b.addEventListener("dispose",U);const N=b.textures,H=b.isWebGLCubeRenderTarget===!0,ae=N.length>1,ne=f(b)||o;if(ae||(O.__webglTexture===void 0&&(O.__webglTexture=r.createTexture()),O.__version=M.version,s.memory.textures++),H){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let E=0;E<M.mipmaps.length;E++)F.__webglFramebuffer[Q][E]=r.createFramebuffer()}else F.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)F.__webglFramebuffer[Q]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(ae&&i.drawBuffers)for(let Q=0,E=N.length;Q<E;Q++){const te=n.get(N[Q]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),s.memory.textures++)}if(o&&b.samples>0&&J(b)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<N.length;Q++){const E=N[Q];F.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const te=a.convert(E.format,E.colorSpace),D=a.convert(E.type),oe=y(E.internalFormat,te,D,E.colorSpace,b.isXRRenderTarget===!0),ee=X(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,oe,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(F.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(H){t.bindTexture(r.TEXTURE_CUBE_MAP,O.__webglTexture),se(r.TEXTURE_CUBE_MAP,M,ne);for(let Q=0;Q<6;Q++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let E=0;E<M.mipmaps.length;E++)j(F.__webglFramebuffer[Q][E],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,E);else j(F.__webglFramebuffer[Q],b,M,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);x(M,ne)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let Q=0,E=N.length;Q<E;Q++){const te=N[Q],D=n.get(te);t.bindTexture(r.TEXTURE_2D,D.__webglTexture),se(r.TEXTURE_2D,te,ne),j(F.__webglFramebuffer,b,te,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,0),x(te,ne)&&g(r.TEXTURE_2D)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&o&&(Q=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,O.__webglTexture),se(Q,M,ne),o&&M.mipmaps&&M.mipmaps.length>0)for(let E=0;E<M.mipmaps.length;E++)j(F.__webglFramebuffer[E],b,M,r.COLOR_ATTACHMENT0,Q,E);else j(F.__webglFramebuffer,b,M,r.COLOR_ATTACHMENT0,Q,0);x(M,ne)&&g(Q),t.unbindTexture()}b.depthBuffer&&ue(b)},this.updateRenderTargetMipmap=function(b){const M=f(b)||o,F=b.textures;for(let O=0,N=F.length;O<N;O++){const H=F[O];if(x(H,M)){const ae=b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ne=n.get(H).__webglTexture;t.bindTexture(ae,ne),g(ae),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(b){if(o&&b.samples>0&&J(b)===!1){const M=b.textures,F=b.width,O=b.height;let N=r.COLOR_BUFFER_BIT;const H=[],ae=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=n.get(b),Q=M.length>1;if(Q)for(let E=0;E<M.length;E++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let E=0;E<M.length;E++){H.push(r.COLOR_ATTACHMENT0+E),b.depthBuffer&&H.push(ae);const te=ne.__ignoreDepthValues!==void 0&&ne.__ignoreDepthValues;if(te===!1&&(b.depthBuffer&&(N|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&(N|=r.STENCIL_BUFFER_BIT)),Q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[E]),te===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[ae]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[ae])),Q){const D=n.get(M[E]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,D,0)}r.blitFramebuffer(0,0,F,O,0,0,F,O,N,r.NEAREST),l&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,H)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let E=0;E<M.length;E++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.RENDERBUFFER,ne.__webglColorRenderbuffer[E]);const te=n.get(M[E]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=j,this.useMultisampledRTT=J}function au(r,e,t){const n=t.isWebGL2;return{convert:function(i,a=""){let s;const o=He.getTransfer(a);if(i===fi)return r.UNSIGNED_BYTE;if(i===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===ns)return r.UNSIGNED_SHORT;if(i===cl)return r.INT;if(i===vn)return r.UNSIGNED_INT;if(i===Et)return r.FLOAT;if(i===an)return n?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===Wt)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===Gn)return r.DEPTH_COMPONENT;if(i===yi)return r.DEPTH_STENCIL;if(i===Xa)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===1029)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===1031)return r.RG_INTEGER;if(i===1033)return r.RGBA_INTEGER;if(i===Qr||i===ea||i===ta||i===na)if(o===Ge){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(i===Qr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===Qr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ta)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===37492||i===37496){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(i===37492)return o===Ge?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(i===37808)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return o===Ge?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===ia||i===36494||i===36495){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(i===ia)return o===Ge?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===36284||i===36285||i===36286){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(i===ia)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===kn?n?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}class su extends ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vn extends ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ou={type:"move"};class Ca{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){s=!0;for(const v of e.hand.values()){const _=t.getJointPose(v,n),f=this._getHandJoint(l,v);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,m=.005;l.inputState.pinching&&d>p+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=p-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(c.matrix.fromArray(a.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,a.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(a.linearVelocity)):c.hasLinearVelocity=!1,a.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(a.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ou)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=a!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class lu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new it;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new En({extensions:{fragDepth:!0},vertexShader:`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fragmentShader:`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new vt(new Gr(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cu extends jn{constructor(e,t){super();const n=this;let i=null,a=1,s=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,p=null,m=null;const v=new lu,_=t.getContextAttributes();let f=null,x=null;const g=[],y=[],C=new ve;let w=null;const T=new ft;T.layers.enable(1),T.viewport=new Ve;const U=new ft;U.layers.enable(2),U.viewport=new Ve;const L=[T,U],B=new su;B.layers.enable(1),B.layers.enable(2);let re=null,A=null;function k(X){const J=y.indexOf(X.inputSource);if(J===-1)return;const me=g[J];me!==void 0&&(me.update(X.inputSource,X.frame,l||s),me.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){i.removeEventListener("select",k),i.removeEventListener("selectstart",k),i.removeEventListener("selectend",k),i.removeEventListener("squeeze",k),i.removeEventListener("squeezestart",k),i.removeEventListener("squeezeend",k),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",se);for(let X=0;X<g.length;X++){const J=y[X];J!==null&&(y[X]=null,g[X].disconnect(J))}re=null,A=null,v.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,x=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}function se(X){for(let J=0;J<X.removed.length;J++){const me=X.removed[J],le=y.indexOf(me);le>=0&&(y[le]=null,g[le].disconnect(me))}for(let J=0;J<X.added.length;J++){const me=X.added[J];let le=y.indexOf(me);if(le===-1){for(let M=0;M<g.length;M++){if(M>=y.length){y.push(me),le=M;break}if(y[M]===null){y[M]=me,le=M;break}}if(le===-1)break}const b=g[le];b&&b.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=g[X];return J===void 0&&(J=new Ca,g[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=g[X];return J===void 0&&(J=new Ca,g[X]=J),J.getGripSpace()},this.getHand=function(X){let J=g[X];return J===void 0&&(J=new Ca,g[X]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting},this.setReferenceSpaceType=function(X){o=X,n.isPresenting},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",k),i.addEventListener("selectstart",k),i.addEventListener("selectend",k),i.addEventListener("squeeze",k),i.addEventListener("squeezestart",k),i.addEventListener("squeezeend",k),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Xn(p.framebufferWidth,p.framebufferHeight,{format:Wt,type:fi,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,me=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?yi:Gn,me=_.stencil?kn:vn);const b={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(b),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Xn(d.textureWidth,d.textureHeight,{format:Wt,type:fi,depthTexture:new Sl(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(x).__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,s=await i.requestReferenceSpace(o),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};const pe=new P,K=new P;function j(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;v.texture!==null&&(X.near=v.depthNear,X.far=v.depthFar),B.near=U.near=T.near=X.near,B.far=U.far=T.far=X.far,re===B.near&&A===B.far||(i.updateRenderState({depthNear:B.near,depthFar:B.far}),re=B.near,A=B.far,T.near=re,T.far=A,U.near=re,U.far=A,T.updateProjectionMatrix(),U.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,me=B.cameras;j(B,J);for(let le=0;le<me.length;le++)j(me[le],J);me.length===2?function(le,b,M){pe.setFromMatrixPosition(b.matrixWorld),K.setFromMatrixPosition(M.matrixWorld);const F=pe.distanceTo(K),O=b.projectionMatrix.elements,N=M.projectionMatrix.elements,H=O[14]/(O[10]-1),ae=O[14]/(O[10]+1),ne=(O[9]+1)/O[5],Q=(O[9]-1)/O[5],E=(O[8]-1)/O[0],te=(N[8]+1)/N[0],D=H*E,oe=H*te,ee=F/(-E+te),R=ee*-E;b.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(R),le.translateZ(ee),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();const I=H+ee,G=ae+ee,ie=D-R,ce=oe+(F-R),xe=ne*ae/G*I,Se=Q*ae/G*I;le.projectionMatrix.makePerspective(ie,ce,xe,Se,I,G),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}(B,T,U):B.projectionMatrix.copy(T.projectionMatrix),function(le,b,M){M===null?le.matrix.copy(b.matrixWorld):(le.matrix.copy(M.matrixWorld),le.matrix.invert(),le.matrix.multiply(b.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(b.projectionMatrix),le.projectionMatrixInverse.copy(b.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=2*Ei*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}(X,B,J)},this.getCamera=function(){return B},this.getFoveation=function(){if(d!==null||p!==null)return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null};let Y=null;const ue=new Ml;ue.setAnimationLoop(function(X,J){if(h=J.getViewerPose(l||s),m=J,h!==null){const me=h.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let le=!1;me.length!==B.cameras.length&&(B.cameras.length=0,le=!0);for(let M=0;M<me.length;M++){const F=me[M];let O=null;if(p!==null)O=p.getViewport(F);else{const H=u.getViewSubImage(d,F);O=H.viewport,M===0&&(e.setRenderTargetTextures(x,H.colorTexture,d.ignoreDepthValues?void 0:H.depthStencilTexture),e.setRenderTarget(x))}let N=L[M];N===void 0&&(N=new ft,N.layers.enable(M),N.viewport=new Ve,L[M]=N),N.matrix.fromArray(F.transform.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale),N.projectionMatrix.fromArray(F.projectionMatrix),N.projectionMatrixInverse.copy(N.projectionMatrix).invert(),N.viewport.set(O.x,O.y,O.width,O.height),M===0&&(B.matrix.copy(N.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),le===!0&&B.cameras.push(N)}const b=i.enabledFeatures;if(b&&b.includes("depth-sensing")){const M=u.getDepthInformation(me[0]);M&&M.isValid&&M.texture&&v.init(e,M,i.renderState)}}for(let me=0;me<g.length;me++){const le=y[me],b=g[me];le!==null&&b!==void 0&&b.update(le,J,l||s)}v.render(e,B),Y&&Y(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}const Dn=new Yt,hu=new Te;function uu(r,e){function t(i,a){i.matrixAutoUpdate===!0&&i.updateMatrix(),a.value.copy(i.matrix)}function n(i,a){i.opacity.value=a.opacity,a.color&&i.diffuse.value.copy(a.color),a.emissive&&i.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(i.map.value=a.map,t(a.map,i.mapTransform)),a.alphaMap&&(i.alphaMap.value=a.alphaMap,t(a.alphaMap,i.alphaMapTransform)),a.bumpMap&&(i.bumpMap.value=a.bumpMap,t(a.bumpMap,i.bumpMapTransform),i.bumpScale.value=a.bumpScale,a.side===xt&&(i.bumpScale.value*=-1)),a.normalMap&&(i.normalMap.value=a.normalMap,t(a.normalMap,i.normalMapTransform),i.normalScale.value.copy(a.normalScale),a.side===xt&&i.normalScale.value.negate()),a.displacementMap&&(i.displacementMap.value=a.displacementMap,t(a.displacementMap,i.displacementMapTransform),i.displacementScale.value=a.displacementScale,i.displacementBias.value=a.displacementBias),a.emissiveMap&&(i.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,i.emissiveMapTransform)),a.specularMap&&(i.specularMap.value=a.specularMap,t(a.specularMap,i.specularMapTransform)),a.alphaTest>0&&(i.alphaTest.value=a.alphaTest);const s=e.get(a),o=s.envMap,c=s.envMapRotation;if(o&&(i.envMap.value=o,Dn.copy(c),Dn.x*=-1,Dn.y*=-1,Dn.z*=-1,o.isCubeTexture&&o.isRenderTargetTexture===!1&&(Dn.y*=-1,Dn.z*=-1),i.envMapRotation.value.setFromMatrix4(hu.makeRotationFromEuler(Dn)),i.flipEnvMap.value=o.isCubeTexture&&o.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=a.reflectivity,i.ior.value=a.ior,i.refractionRatio.value=a.refractionRatio),a.lightMap){i.lightMap.value=a.lightMap;const l=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=a.lightMapIntensity*l,t(a.lightMap,i.lightMapTransform)}a.aoMap&&(i.aoMap.value=a.aoMap,i.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,a){a.color.getRGB(i.fogColor.value,vl(r)),a.isFog?(i.fogNear.value=a.near,i.fogFar.value=a.far):a.isFogExp2&&(i.fogDensity.value=a.density)},refreshMaterialUniforms:function(i,a,s,o,c){a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(i,a):a.isMeshToonMaterial?(n(i,a),function(l,h){h.gradientMap&&(l.gradientMap.value=h.gradientMap)}(i,a)):a.isMeshPhongMaterial?(n(i,a),function(l,h){l.specular.value.copy(h.specular),l.shininess.value=Math.max(h.shininess,1e-4)}(i,a)):a.isMeshStandardMaterial?(n(i,a),function(l,h){l.metalness.value=h.metalness,h.metalnessMap&&(l.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,l.metalnessMapTransform)),l.roughness.value=h.roughness,h.roughnessMap&&(l.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,l.roughnessMapTransform)),e.get(h).envMap&&(l.envMapIntensity.value=h.envMapIntensity)}(i,a),a.isMeshPhysicalMaterial&&function(l,h,u){l.ior.value=h.ior,h.sheen>0&&(l.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),l.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(l.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,l.sheenColorMapTransform)),h.sheenRoughnessMap&&(l.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,l.sheenRoughnessMapTransform))),h.clearcoat>0&&(l.clearcoat.value=h.clearcoat,l.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(l.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,l.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(l.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,l.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(l.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,l.clearcoatNormalMapTransform),l.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===xt&&l.clearcoatNormalScale.value.negate())),h.iridescence>0&&(l.iridescence.value=h.iridescence,l.iridescenceIOR.value=h.iridescenceIOR,l.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],l.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(l.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,l.iridescenceMapTransform)),h.iridescenceThicknessMap&&(l.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,l.iridescenceThicknessMapTransform))),h.transmission>0&&(l.transmission.value=h.transmission,l.transmissionSamplerMap.value=u.texture,l.transmissionSamplerSize.value.set(u.width,u.height),h.transmissionMap&&(l.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,l.transmissionMapTransform)),l.thickness.value=h.thickness,h.thicknessMap&&(l.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,l.thicknessMapTransform)),l.attenuationDistance.value=h.attenuationDistance,l.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(l.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(l.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,l.anisotropyMapTransform))),l.specularIntensity.value=h.specularIntensity,l.specularColor.value.copy(h.specularColor),h.specularColorMap&&(l.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,l.specularColorMapTransform)),h.specularIntensityMap&&(l.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,l.specularIntensityMapTransform))}(i,a,c)):a.isMeshMatcapMaterial?(n(i,a),function(l,h){h.matcap&&(l.matcap.value=h.matcap)}(i,a)):a.isMeshDepthMaterial?n(i,a):a.isMeshDistanceMaterial?(n(i,a),function(l,h){const u=e.get(h).light;l.referencePosition.value.setFromMatrixPosition(u.matrixWorld),l.nearDistance.value=u.shadow.camera.near,l.farDistance.value=u.shadow.camera.far}(i,a)):a.isMeshNormalMaterial?n(i,a):a.isLineBasicMaterial?(function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform))}(i,a),a.isLineDashedMaterial&&function(l,h){l.dashSize.value=h.dashSize,l.totalSize.value=h.dashSize+h.gapSize,l.scale.value=h.scale}(i,a)):a.isPointsMaterial?function(l,h,u,d){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.size.value=h.size*u,l.scale.value=.5*d,h.map&&(l.map.value=h.map,t(h.map,l.uvTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(i,a,s,o):a.isSpriteMaterial?function(l,h){l.diffuse.value.copy(h.color),l.opacity.value=h.opacity,l.rotation.value=h.rotation,h.map&&(l.map.value=h.map,t(h.map,l.mapTransform)),h.alphaMap&&(l.alphaMap.value=h.alphaMap,t(h.alphaMap,l.alphaMapTransform)),h.alphaTest>0&&(l.alphaTest.value=h.alphaTest)}(i,a):a.isShadowMaterial?(i.color.value.copy(a.color),i.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function du(r,e,t,n){let i={},a={},s=[];const o=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(u,d,p,m){const v=u.value,_=d+"_"+p;if(m[_]===void 0)return m[_]=typeof v=="number"||typeof v=="boolean"?v:v.clone(),!0;{const f=m[_];if(typeof v=="number"||typeof v=="boolean"){if(f!==v)return m[_]=v,!0}else if(f.equals(v)===!1)return f.copy(v),!0}return!1}function l(u){const d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture,d}function h(u){const d=u.target;d.removeEventListener("dispose",h);const p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete a[d.id]}return{bind:function(u,d){const p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(_){const f=_.uniforms;let x=0;const g=16;for(let C=0,w=f.length;C<w;C++){const T=Array.isArray(f[C])?f[C]:[f[C]];for(let U=0,L=T.length;U<L;U++){const B=T[U],re=Array.isArray(B.value)?B.value:[B.value];for(let A=0,k=re.length;A<k;A++){const Z=l(re[A]),se=x%g;se!==0&&g-se<Z.boundary&&(x+=g-se),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=x,x+=Z.storage}}}const y=x%g;y>0&&(x+=g-y),_.__size=x,_.__cache={}}(u),p=function(_){const f=function(){for(let C=0;C<o;C++)if(s.indexOf(C)===-1)return s.push(C),C;return 0}();_.__bindingPointIndex=f;const x=r.createBuffer(),g=_.__size,y=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,g,y),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,x),x}(u),i[u.id]=p,u.addEventListener("dispose",h));const m=d.program;n.updateUBOMapping(u,m);const v=e.render.frame;a[u.id]!==v&&(function(_){const f=i[_.id],x=_.uniforms,g=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let y=0,C=x.length;y<C;y++){const w=Array.isArray(x[y])?x[y]:[x[y]];for(let T=0,U=w.length;T<U;T++){const L=w[T];if(c(L,y,T,g)===!0){const B=L.__offset,re=Array.isArray(L.value)?L.value:[L.value];let A=0;for(let k=0;k<re.length;k++){const Z=re[k],se=l(Z);typeof Z=="number"||typeof Z=="boolean"?(L.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,B+A,L.__data)):Z.isMatrix3?(L.__data[0]=Z.elements[0],L.__data[1]=Z.elements[1],L.__data[2]=Z.elements[2],L.__data[3]=0,L.__data[4]=Z.elements[3],L.__data[5]=Z.elements[4],L.__data[6]=Z.elements[5],L.__data[7]=0,L.__data[8]=Z.elements[6],L.__data[9]=Z.elements[7],L.__data[10]=Z.elements[8],L.__data[11]=0):(Z.toArray(L.__data,A),A+=se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),a[u.id]=v)},dispose:function(){for(const u in i)r.deleteBuffer(i[u]);s=[],i={},a={}}}}class Rl{constructor(e={}){const{canvas:t=ac(),context:n=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;let d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:s;const p=new Uint32Array(4),m=new Int32Array(4);let v=null,_=null;const f=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this._useLegacyLights=!1,this.toneMapping=Mn,this.toneMappingExposure=1;const g=this;let y=!1,C=0,w=0,T=null,U=-1,L=null;const B=new Ve,re=new Ve;let A=null;const k=new Ee(0);let Z=0,se=t.width,pe=t.height,K=1,j=null,Y=null;const ue=new Ve(0,0,se,pe),X=new Ve(0,0,se,pe);let J=!1;const me=new as;let le=!1,b=!1,M=null;const F=new Te,O=new ve,N=new P,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ae(){return T===null?K:1}let ne,Q,E,te,D,oe,ee,R,I,G,ie,ce,xe,Se,We,fe,ye,Fe,ge,Ce,Ne,rt,bt,Pt,V=n;function bn(S,z){for(let W=0;W<S.length;W++){const $=S[W],q=t.getContext($,z);if(q!==null)return q}return null}try{const S={alpha:!0,depth:i,stencil:a,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ka}`),t.addEventListener("webglcontextlost",ms,!1),t.addEventListener("webglcontextrestored",gs,!1),t.addEventListener("webglcontextcreationerror",_s,!1),V===null){const z=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&z.shift(),V=bn(z,S),V===null)throw bn(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u",V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw S}function Pi(){ne=new Oc(V),Q=new Ic(V,ne,e),ne.init(Q),rt=new au(V,ne,Q),E=new iu(V,ne,Q),te=new zc(V),D=new jh,oe=new ru(V,ne,E,D,Q,rt,te),ee=new Uc(g),R=new Dc(g),I=new wc(V,Q),bt=new Pc(V,ne,I,Q),G=new Fc(V,I,te,bt),ie=new Gc(V,G,I,te),ge=new kc(V,Q,oe),fe=new Nc(D),ce=new Xh(g,ee,R,ne,Q,bt,fe),xe=new uu(g,D),Se=new qh,We=new Qh(ne,Q),Fe=new Cc(g,ee,R,E,ie,d,c),ye=new nu(g,ie,Q),Pt=new du(V,te,Q,E),Ce=new Lc(V,ne,te,Q),Ne=new Bc(V,ne,te,Q),te.programs=ce.programs,g.capabilities=Q,g.extensions=ne,g.properties=D,g.renderLists=Se,g.shadowMap=ye,g.state=E,g.info=te}Pi();const st=new cu(g,V);function ms(S){S.preventDefault(),y=!0}function gs(){y=!1;const S=te.autoReset,z=ye.enabled,W=ye.autoUpdate,$=ye.needsUpdate,q=ye.type;Pi(),te.autoReset=S,ye.enabled=z,ye.autoUpdate=W,ye.needsUpdate=$,ye.type=q}function _s(S){}function vs(S){const z=S.target;z.removeEventListener("dispose",vs),function(W){(function($){const q=D.get($).programs;q!==void 0&&(q.forEach(function(de){ce.releaseProgram(de)}),$.isShaderMaterial&&ce.releaseShaderCache($))})(W),D.remove(W)}(z)}function xs(S,z,W){S.transparent===!0&&S.side===2&&S.forceSinglePass===!1?(S.side=xt,S.needsUpdate=!0,Zi(S,z,W),S.side=sn,S.needsUpdate=!0,Zi(S,z,W),S.side=2):Zi(S,z,W)}this.xr=st,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const S=ne.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ne.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(se,pe,!1))},this.getSize=function(S){return S.set(se,pe)},this.setSize=function(S,z,W=!0){st.isPresenting||(se=S,pe=z,t.width=Math.floor(S*K),t.height=Math.floor(z*K),W===!0&&(t.style.width=S+"px",t.style.height=z+"px"),this.setViewport(0,0,S,z))},this.getDrawingBufferSize=function(S){return S.set(se*K,pe*K).floor()},this.setDrawingBufferSize=function(S,z,W){se=S,pe=z,K=W,t.width=Math.floor(S*W),t.height=Math.floor(z*W),this.setViewport(0,0,S,z)},this.getCurrentViewport=function(S){return S.copy(B)},this.getViewport=function(S){return S.copy(ue)},this.setViewport=function(S,z,W,$){S.isVector4?ue.set(S.x,S.y,S.z,S.w):ue.set(S,z,W,$),E.viewport(B.copy(ue).multiplyScalar(K).round())},this.getScissor=function(S){return S.copy(X)},this.setScissor=function(S,z,W,$){S.isVector4?X.set(S.x,S.y,S.z,S.w):X.set(S,z,W,$),E.scissor(re.copy(X).multiplyScalar(K).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(S){E.setScissorTest(J=S)},this.setOpaqueSort=function(S){j=S},this.setTransparentSort=function(S){Y=S},this.getClearColor=function(S){return S.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor.apply(Fe,arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha.apply(Fe,arguments)},this.clear=function(S=!0,z=!0,W=!0){let $=0;if(S){let q=!1;if(T!==null){const de=T.texture.format;q=de===1033||de===1031||de===1029}if(q){const de=T.texture.type,_e=de===fi||de===vn||de===ns||de===kn||de===1017||de===1018,Me=Fe.getClearColor(),we=Fe.getClearAlpha(),Pe=Me.r,Le=Me.g,Ue=Me.b;_e?(p[0]=Pe,p[1]=Le,p[2]=Ue,p[3]=we,V.clearBufferuiv(V.COLOR,0,p)):(m[0]=Pe,m[1]=Le,m[2]=Ue,m[3]=we,V.clearBufferiv(V.COLOR,0,m))}else $|=V.COLOR_BUFFER_BIT}z&&($|=V.DEPTH_BUFFER_BIT),W&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ms,!1),t.removeEventListener("webglcontextrestored",gs,!1),t.removeEventListener("webglcontextcreationerror",_s,!1),Se.dispose(),We.dispose(),D.dispose(),ee.dispose(),R.dispose(),ie.dispose(),bt.dispose(),Pt.dispose(),ce.dispose(),st.dispose(),st.removeEventListener("sessionstart",ys),st.removeEventListener("sessionend",Ms),M&&(M.dispose(),M=null),An.stop()},this.renderBufferDirect=function(S,z,W,$,q,de){z===null&&(z=H);const _e=q.isMesh&&q.matrixWorld.determinant()<0,Me=function(Ke,At,gt,De,Re){At.isScene!==!0&&(At=H),oe.resetTextureUnits();const Li=At.fog,Kr=De.isMeshStandardMaterial?At.environment:null,Bl=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:at,Ji=(De.isMeshStandardMaterial?R:ee).get(De.envMap||Kr),zl=De.vertexColors===!0&&!!gt.attributes.color&&gt.attributes.color.itemSize===4,Hl=!!gt.attributes.tangent&&(!!De.normalMap||De.anisotropy>0),Vl=!!gt.morphAttributes.position,kl=!!gt.morphAttributes.normal,Gl=!!gt.morphAttributes.color;let ws=Mn;De.toneMapped&&(T!==null&&T.isXRRenderTarget!==!0||(ws=g.toneMapping));const Rs=gt.morphAttributes.position||gt.morphAttributes.normal||gt.morphAttributes.color,Wl=Rs!==void 0?Rs.length:0,Oe=D.get(De),Xl=_.state.lights;if(le===!0&&(b===!0||Ke!==L)){const wt=Ke===L&&De.id===U;fe.setState(De,Ke,wt)}let It=!1;De.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Xl.state.version||Oe.outputColorSpace!==Bl||Re.isBatchedMesh&&Oe.batching===!1?It=!0:Re.isBatchedMesh||Oe.batching!==!0?Re.isInstancedMesh&&Oe.instancing===!1?It=!0:Re.isInstancedMesh||Oe.instancing!==!0?Re.isSkinnedMesh&&Oe.skinning===!1?It=!0:Re.isSkinnedMesh||Oe.skinning!==!0?Re.isInstancedMesh&&Oe.instancingColor===!0&&Re.instanceColor===null||Re.isInstancedMesh&&Oe.instancingColor===!1&&Re.instanceColor!==null||Re.isInstancedMesh&&Oe.instancingMorph===!0&&Re.morphTexture===null||Re.isInstancedMesh&&Oe.instancingMorph===!1&&Re.morphTexture!==null||Oe.envMap!==Ji||De.fog===!0&&Oe.fog!==Li?It=!0:Oe.numClippingPlanes===void 0||Oe.numClippingPlanes===fe.numPlanes&&Oe.numIntersection===fe.numIntersection?(Oe.vertexAlphas!==zl||Oe.vertexTangents!==Hl||Oe.morphTargets!==Vl||Oe.morphNormals!==kl||Oe.morphColors!==Gl||Oe.toneMapping!==ws||Q.isWebGL2===!0&&Oe.morphTargetsCount!==Wl)&&(It=!0):It=!0:It=!0:It=!0:It=!0:(It=!0,Oe.__version=De.version);let Rn=Oe.currentProgram;It===!0&&(Rn=Zi(De,At,Re));let Cs=!1,Ii=!1,Zr=!1;const ot=Rn.getUniforms(),Cn=Oe.uniforms;if(E.useProgram(Rn.program)&&(Cs=!0,Ii=!0,Zr=!0),De.id!==U&&(U=De.id,Ii=!0),Cs||L!==Ke){ot.setValue(V,"projectionMatrix",Ke.projectionMatrix),ot.setValue(V,"viewMatrix",Ke.matrixWorldInverse);const wt=ot.map.cameraPosition;wt!==void 0&&wt.setValue(V,N.setFromMatrixPosition(Ke.matrixWorld)),Q.logarithmicDepthBuffer&&ot.setValue(V,"logDepthBufFC",2/(Math.log(Ke.far+1)/Math.LN2)),(De.isMeshPhongMaterial||De.isMeshToonMaterial||De.isMeshLambertMaterial||De.isMeshBasicMaterial||De.isMeshStandardMaterial||De.isShaderMaterial)&&ot.setValue(V,"isOrthographic",Ke.isOrthographicCamera===!0),L!==Ke&&(L=Ke,Ii=!0,Zr=!0)}if(Re.isSkinnedMesh){ot.setOptional(V,Re,"bindMatrix"),ot.setOptional(V,Re,"bindMatrixInverse");const wt=Re.skeleton;wt&&Q.floatVertexTextures&&(wt.boneTexture===null&&wt.computeBoneTexture(),ot.setValue(V,"boneTexture",wt.boneTexture,oe))}Re.isBatchedMesh&&(ot.setOptional(V,Re,"batchingTexture"),ot.setValue(V,"batchingTexture",Re._matricesTexture,oe));const Jr=gt.morphAttributes;(Jr.position!==void 0||Jr.normal!==void 0||Jr.color!==void 0&&Q.isWebGL2===!0)&&ge.update(Re,gt,Rn),(Ii||Oe.receiveShadow!==Re.receiveShadow)&&(Oe.receiveShadow=Re.receiveShadow,ot.setValue(V,"receiveShadow",Re.receiveShadow)),De.isMeshGouraudMaterial&&De.envMap!==null&&(Cn.envMap.value=Ji,Cn.flipEnvMap.value=Ji.isCubeTexture&&Ji.isRenderTargetTexture===!1?-1:1),Ii&&(ot.setValue(V,"toneMappingExposure",g.toneMappingExposure),Oe.needsLights&&(Nt=Zr,(Vt=Cn).ambientLightColor.needsUpdate=Nt,Vt.lightProbe.needsUpdate=Nt,Vt.directionalLights.needsUpdate=Nt,Vt.directionalLightShadows.needsUpdate=Nt,Vt.pointLights.needsUpdate=Nt,Vt.pointLightShadows.needsUpdate=Nt,Vt.spotLights.needsUpdate=Nt,Vt.spotLightShadows.needsUpdate=Nt,Vt.rectAreaLights.needsUpdate=Nt,Vt.hemisphereLights.needsUpdate=Nt),Li&&De.fog===!0&&xe.refreshFogUniforms(Cn,Li),xe.refreshMaterialUniforms(Cn,De,K,pe,M),Ir.upload(V,bs(Oe),Cn,oe));var Vt,Nt;if(De.isShaderMaterial&&De.uniformsNeedUpdate===!0&&(Ir.upload(V,bs(Oe),Cn,oe),De.uniformsNeedUpdate=!1),De.isSpriteMaterial&&ot.setValue(V,"center",Re.center),ot.setValue(V,"modelViewMatrix",Re.modelViewMatrix),ot.setValue(V,"normalMatrix",Re.normalMatrix),ot.setValue(V,"modelMatrix",Re.matrixWorld),De.isShaderMaterial||De.isRawShaderMaterial){const wt=De.uniformsGroups;for(let $r=0,jl=wt.length;$r<jl;$r++)if(Q.isWebGL2){const Ps=wt[$r];Pt.update(Ps,Rn),Pt.bind(Ps,Rn)}}return Rn}(S,z,W,$,q);E.setMaterial($,_e);let we=W.index,Pe=1;if($.wireframe===!0){if(we=G.getWireframeAttribute(W),we===void 0)return;Pe=2}const Le=W.drawRange,Ue=W.attributes.position;let Xe=Le.start*Pe,Lt=(Le.start+Le.count)*Pe;de!==null&&(Xe=Math.max(Xe,de.start*Pe),Lt=Math.min(Lt,(de.start+de.count)*Pe)),we!==null?(Xe=Math.max(Xe,0),Lt=Math.min(Lt,we.count)):Ue!=null&&(Xe=Math.max(Xe,0),Lt=Math.min(Lt,Ue.count));const Kt=Lt-Xe;if(Kt<0||Kt===1/0)return;let wn;bt.setup(q,$,Me,W,we);let je=Ce;if(we!==null&&(wn=I.get(we),je=Ne,je.setIndex(wn)),q.isMesh)$.wireframe===!0?(E.setLineWidth($.wireframeLinewidth*ae()),je.setMode(V.LINES)):je.setMode(V.TRIANGLES);else if(q.isLine){let Ke=$.linewidth;Ke===void 0&&(Ke=1),E.setLineWidth(Ke*ae()),q.isLineSegments?je.setMode(V.LINES):q.isLineLoop?je.setMode(V.LINE_LOOP):je.setMode(V.LINE_STRIP)}else q.isPoints?je.setMode(V.POINTS):q.isSprite&&je.setMode(V.TRIANGLES);if(q.isBatchedMesh)je.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)je.renderInstances(Xe,Kt,q.count);else if(W.isInstancedBufferGeometry){const Ke=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,At=Math.min(W.instanceCount,Ke);je.renderInstances(Xe,Kt,At)}else je.render(Xe,Kt)},this.compile=function(S,z,W=null){W===null&&(W=S),_=We.get(W),_.init(),x.push(_),W.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),S!==W&&S.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights(g._useLegacyLights);const $=new Set;return S.traverse(function(q){const de=q.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const Me=de[_e];xs(Me,W,q),$.add(Me)}else xs(de,W,q),$.add(de)}),x.pop(),_=null,$},this.compileAsync=function(S,z,W=null){const $=this.compile(S,z,W);return new Promise(q=>{function de(){$.forEach(function(_e){D.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size!==0?setTimeout(de,10):q(S)}ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qr=null;function ys(){An.stop()}function Ms(){An.start()}const An=new Ml;function Ss(S,z,W,$){if(S.visible===!1)return;if(S.layers.test(z.layers)){if(S.isGroup)W=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(z);else if(S.isLight)_.pushLight(S),S.castShadow&&_.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||me.intersectsSprite(S)){$&&N.setFromMatrixPosition(S.matrixWorld).applyMatrix4(F);const de=ie.update(S),_e=S.material;_e.visible&&v.push(S,de,_e,W,N.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||me.intersectsObject(S))){const de=ie.update(S),_e=S.material;if($&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),N.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),N.copy(de.boundingSphere.center)),N.applyMatrix4(S.matrixWorld).applyMatrix4(F)),Array.isArray(_e)){const Me=de.groups;for(let we=0,Pe=Me.length;we<Pe;we++){const Le=Me[we],Ue=_e[Le.materialIndex];Ue&&Ue.visible&&v.push(S,de,Ue,W,N.z,Le)}}else _e.visible&&v.push(S,de,_e,W,N.z,null)}}const q=S.children;for(let de=0,_e=q.length;de<_e;de++)Ss(q[de],z,W,$)}function Es(S,z,W,$){const q=S.opaque,de=S.transmissive,_e=S.transparent;_.setupLightsView(W),le===!0&&fe.setGlobalState(g.clippingPlanes,W),de.length>0&&function(Me,we,Pe,Le){if((Pe.isScene===!0?Pe.overrideMaterial:null)!==null)return;const Xe=Q.isWebGL2;M===null&&(M=new Xn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?an:fi,minFilter:Sn,samples:Xe?4:0})),g.getDrawingBufferSize(O),Xe?M.setSize(O.x,O.y):M.setSize(zr(O.x),zr(O.y));const Lt=g.getRenderTarget();g.setRenderTarget(M),g.getClearColor(k),Z=g.getClearAlpha(),Z<1&&g.setClearColor(16777215,.5),g.clear();const Kt=g.toneMapping;g.toneMapping=Mn,Ki(Me,Pe,Le),oe.updateMultisampleRenderTarget(M),oe.updateRenderTargetMipmap(M);let wn=!1;for(let je=0,Ke=we.length;je<Ke;je++){const At=we[je],gt=At.object,De=At.geometry,Re=At.material,Li=At.group;if(Re.side===2&&gt.layers.test(Le.layers)){const Kr=Re.side;Re.side=xt,Re.needsUpdate=!0,Ts(gt,Pe,Le,De,Re,Li),Re.side=Kr,Re.needsUpdate=!0,wn=!0}}wn===!0&&(oe.updateMultisampleRenderTarget(M),oe.updateRenderTargetMipmap(M)),g.setRenderTarget(Lt),g.setClearColor(k,Z),g.toneMapping=Kt}(q,de,z,W),$&&E.viewport(B.copy($)),q.length>0&&Ki(q,z,W),de.length>0&&Ki(de,z,W),_e.length>0&&Ki(_e,z,W),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Ki(S,z,W){const $=z.isScene===!0?z.overrideMaterial:null;for(let q=0,de=S.length;q<de;q++){const _e=S[q],Me=_e.object,we=_e.geometry,Pe=$===null?_e.material:$,Le=_e.group;Me.layers.test(W.layers)&&Ts(Me,z,W,we,Pe,Le)}}function Ts(S,z,W,$,q,de){S.onBeforeRender(g,z,W,$,q,de),S.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),q.onBeforeRender(g,z,W,$,S,de),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=xt,q.needsUpdate=!0,g.renderBufferDirect(W,z,$,q,S,de),q.side=sn,q.needsUpdate=!0,g.renderBufferDirect(W,z,$,q,S,de),q.side=2):g.renderBufferDirect(W,z,$,q,S,de),S.onAfterRender(g,z,W,$,q,de)}function Zi(S,z,W){z.isScene!==!0&&(z=H);const $=D.get(S),q=_.state.lights,de=_.state.shadowsArray,_e=q.state.version,Me=ce.getParameters(S,q.state,de,z,W),we=ce.getProgramCacheKey(Me);let Pe=$.programs;$.environment=S.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(S.isMeshStandardMaterial?R:ee).get(S.envMap||$.environment),$.envMapRotation=$.environment!==null&&S.envMap===null?z.environmentRotation:S.envMapRotation,Pe===void 0&&(S.addEventListener("dispose",vs),Pe=new Map,$.programs=Pe);let Le=Pe.get(we);if(Le!==void 0){if($.currentProgram===Le&&$.lightsStateVersion===_e)return As(S,Me),Le}else Me.uniforms=ce.getUniforms(S),S.onBuild(W,Me,g),S.onBeforeCompile(Me,g),Le=ce.acquireProgram(Me,we),Pe.set(we,Le),$.uniforms=Me.uniforms;const Ue=$.uniforms;return(S.isShaderMaterial||S.isRawShaderMaterial)&&S.clipping!==!0||(Ue.clippingPlanes=fe.uniform),As(S,Me),$.needsLights=function(Xe){return Xe.isMeshLambertMaterial||Xe.isMeshToonMaterial||Xe.isMeshPhongMaterial||Xe.isMeshStandardMaterial||Xe.isShadowMaterial||Xe.isShaderMaterial&&Xe.lights===!0}(S),$.lightsStateVersion=_e,$.needsLights&&(Ue.ambientLightColor.value=q.state.ambient,Ue.lightProbe.value=q.state.probe,Ue.directionalLights.value=q.state.directional,Ue.directionalLightShadows.value=q.state.directionalShadow,Ue.spotLights.value=q.state.spot,Ue.spotLightShadows.value=q.state.spotShadow,Ue.rectAreaLights.value=q.state.rectArea,Ue.ltc_1.value=q.state.rectAreaLTC1,Ue.ltc_2.value=q.state.rectAreaLTC2,Ue.pointLights.value=q.state.point,Ue.pointLightShadows.value=q.state.pointShadow,Ue.hemisphereLights.value=q.state.hemi,Ue.directionalShadowMap.value=q.state.directionalShadowMap,Ue.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ue.spotShadowMap.value=q.state.spotShadowMap,Ue.spotLightMatrix.value=q.state.spotLightMatrix,Ue.spotLightMap.value=q.state.spotLightMap,Ue.pointShadowMap.value=q.state.pointShadowMap,Ue.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=Le,$.uniformsList=null,Le}function bs(S){if(S.uniformsList===null){const z=S.currentProgram.getUniforms();S.uniformsList=Ir.seqWithValue(z.seq,S.uniforms)}return S.uniformsList}function As(S,z){const W=D.get(S);W.outputColorSpace=z.outputColorSpace,W.batching=z.batching,W.instancing=z.instancing,W.instancingColor=z.instancingColor,W.instancingMorph=z.instancingMorph,W.skinning=z.skinning,W.morphTargets=z.morphTargets,W.morphNormals=z.morphNormals,W.morphColors=z.morphColors,W.morphTargetsCount=z.morphTargetsCount,W.numClippingPlanes=z.numClippingPlanes,W.numIntersection=z.numClipIntersection,W.vertexAlphas=z.vertexAlphas,W.vertexTangents=z.vertexTangents,W.toneMapping=z.toneMapping}An.setAnimationLoop(function(S){qr&&qr(S)}),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(S){qr=S,st.setAnimationLoop(S),S===null?An.stop():An.start()},st.addEventListener("sessionstart",ys),st.addEventListener("sessionend",Ms),this.render=function(S,z){if(z!==void 0&&z.isCamera!==!0||y===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),S.isScene===!0&&S.onBeforeRender(g,S,z,T),_=We.get(S,x.length),_.init(),x.push(_),F.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(F),b=this.localClippingEnabled,le=fe.init(this.clippingPlanes,b),v=Se.get(S,f.length),v.init(),f.push(v),Ss(S,z,0,g.sortObjects),v.finish(),g.sortObjects===!0&&v.sort(j,Y),this.info.render.frame++,le===!0&&fe.beginShadows();const W=_.state.shadowsArray;if(ye.render(W,S,z),le===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),st.enabled!==!1&&st.isPresenting!==!1&&st.hasDepthSensing()!==!1||Fe.render(v,S),_.setupLights(g._useLegacyLights),z.isArrayCamera){const $=z.cameras;for(let q=0,de=$.length;q<de;q++){const _e=$[q];Es(v,S,_e,_e.viewport)}}else Es(v,S,z);T!==null&&(oe.updateMultisampleRenderTarget(T),oe.updateRenderTargetMipmap(T)),S.isScene===!0&&S.onAfterRender(g,S,z),bt.resetDefaultState(),U=-1,L=null,x.pop(),_=x.length>0?x[x.length-1]:null,f.pop(),v=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(S,z,W){D.get(S.texture).__webglTexture=z,D.get(S.depthTexture).__webglTexture=W;const $=D.get(S);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=W===void 0,$.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&($.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,z){const W=D.get(S);W.__webglFramebuffer=z,W.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(S,z=0,W=0){T=S,C=z,w=W;let $=!0,q=null,de=!1,_e=!1;if(S){const Me=D.get(S);Me.__useDefaultFramebuffer!==void 0?(E.bindFramebuffer(V.FRAMEBUFFER,null),$=!1):Me.__webglFramebuffer===void 0?oe.setupRenderTarget(S):Me.__hasExternalTextures&&oe.rebindTextures(S,D.get(S.texture).__webglTexture,D.get(S.depthTexture).__webglTexture);const we=S.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(_e=!0);const Pe=D.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(q=Array.isArray(Pe[z])?Pe[z][W]:Pe[z],de=!0):q=Q.isWebGL2&&S.samples>0&&oe.useMultisampledRTT(S)===!1?D.get(S).__webglMultisampledFramebuffer:Array.isArray(Pe)?Pe[W]:Pe,B.copy(S.viewport),re.copy(S.scissor),A=S.scissorTest}else B.copy(ue).multiplyScalar(K).floor(),re.copy(X).multiplyScalar(K).floor(),A=J;if(E.bindFramebuffer(V.FRAMEBUFFER,q)&&Q.drawBuffers&&$&&E.drawBuffers(S,q),E.viewport(B),E.scissor(re),E.setScissorTest(A),de){const Me=D.get(S.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,W)}else if(_e){const Me=D.get(S.texture),we=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Me.__webglTexture,W||0,we)}U=-1},this.readRenderTargetPixels=function(S,z,W,$,q,de,_e){if(!S||!S.isWebGLRenderTarget)return;let Me=D.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){E.bindFramebuffer(V.FRAMEBUFFER,Me);try{const we=S.texture,Pe=we.format,Le=we.type;if(Pe!==Wt&&rt.convert(Pe)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT))return;const Ue=Le===an&&(ne.has("EXT_color_buffer_half_float")||Q.isWebGL2&&ne.has("EXT_color_buffer_float"));if(!(Le===fi||rt.convert(Le)===V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)||Le===Et&&(Q.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float"))||Ue))return;z>=0&&z<=S.width-$&&W>=0&&W<=S.height-q&&V.readPixels(z,W,$,q,rt.convert(Pe),rt.convert(Le),de)}finally{const we=T!==null?D.get(T).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,we)}}},this.copyFramebufferToTexture=function(S,z,W=0){const $=Math.pow(2,-W),q=Math.floor(z.image.width*$),de=Math.floor(z.image.height*$);oe.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,W,0,0,S.x,S.y,q,de),E.unbindTexture()},this.copyTextureToTexture=function(S,z,W,$=0){const q=z.image.width,de=z.image.height,_e=rt.convert(W.format),Me=rt.convert(W.type);oe.setTexture2D(W,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,W.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,W.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,$,S.x,S.y,q,de,_e,Me,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,$,S.x,S.y,z.mipmaps[0].width,z.mipmaps[0].height,_e,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,$,S.x,S.y,_e,Me,z.image),$===0&&W.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),E.unbindTexture()},this.copyTextureToTexture3D=function(S,z,W,$,q=0){if(g.isWebGL1Renderer)return;const de=Math.round(S.max.x-S.min.x),_e=Math.round(S.max.y-S.min.y),Me=S.max.z-S.min.z+1,we=rt.convert($.format),Pe=rt.convert($.type);let Le;if($.isData3DTexture)oe.setTexture3D($,0),Le=V.TEXTURE_3D;else{if(!$.isDataArrayTexture&&!$.isCompressedArrayTexture)return;oe.setTexture2DArray($,0),Le=V.TEXTURE_2D_ARRAY}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const Ue=V.getParameter(V.UNPACK_ROW_LENGTH),Xe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Lt=V.getParameter(V.UNPACK_SKIP_PIXELS),Kt=V.getParameter(V.UNPACK_SKIP_ROWS),wn=V.getParameter(V.UNPACK_SKIP_IMAGES),je=W.isCompressedTexture?W.mipmaps[q]:W.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,je.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,je.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,S.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,S.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,S.min.z),W.isDataTexture||W.isData3DTexture?V.texSubImage3D(Le,q,z.x,z.y,z.z,de,_e,Me,we,Pe,je.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Le,q,z.x,z.y,z.z,de,_e,Me,we,je.data):V.texSubImage3D(Le,q,z.x,z.y,z.z,de,_e,Me,we,Pe,je),V.pixelStorei(V.UNPACK_ROW_LENGTH,Ue),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Xe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Lt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Kt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,wn),q===0&&$.generateMipmaps&&V.generateMipmap(Le),E.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?oe.setTextureCube(S,0):S.isData3DTexture?oe.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?oe.setTexture2DArray(S,0):oe.setTexture2D(S,0),E.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,E.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===is?"display-p3":"srgb",t.unpackColorSpace=He.workingColorSpace===kr?"display-p3":"srgb"}get useLegacyLights(){return this._useLegacyLights}set useLegacyLights(e){this._useLegacyLights=e}}(class extends Rl{}).prototype.isWebGL1Renderer=!0;class pu extends ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class fu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Wa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=zt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ul("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,a=this.stride;i<a;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ut=new P;class ls{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyMatrix4(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.applyNormalMatrix(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ut.fromBufferAttribute(this,t),ut.transformDirection(e),this.setXYZ(t,ut.x,ut.y,ut.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ft(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ft(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ft(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ft(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ft(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),i=ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),i=ze(i,this.array),a=ze(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=a,this}clone(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return new mt(new this.array.constructor(t),this.itemSize,this.normalized)}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ls(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let a=0;a<this.itemSize;a++)t.push(this.data.array[i+a])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Ao=new P,wo=new Ve,Ro=new Ve,mu=new P,Co=new Te,Mr=new P,Pa=new qt,Po=new Te,La=new Ri;class gu extends vt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Os,this.bindMatrix=new Te,this.bindMatrixInverse=new Te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new on),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mr),this.boundingBox.expandByPoint(Mr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qt),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Mr),this.boundingSphere.expandByPoint(Mr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pa.copy(this.boundingSphere),Pa.applyMatrix4(i),e.ray.intersectsSphere(Pa)!==!1&&(Po.copy(i).invert(),La.copy(e.ray).applyMatrix4(Po),this.boundingBox!==null&&La.intersectsBox(this.boundingBox)===!1||this._computeIntersections(e,t,La)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ve,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const a=1/e.manhattanLength();a!==1/0?e.multiplyScalar(a):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Os?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"&&this.bindMatrixInverse.copy(this.bindMatrix).invert()}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;wo.fromBufferAttribute(i.attributes.skinIndex,e),Ro.fromBufferAttribute(i.attributes.skinWeight,e),Ao.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let a=0;a<4;a++){const s=Ro.getComponent(a);if(s!==0){const o=wo.getComponent(a);Co.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(mu.copy(Ao).applyMatrix4(Co),s)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Cl extends ke{constructor(){super(),this.isBone=!0,this.type="Bone"}}class cs extends it{constructor(e=null,t=1,n=1,i,a,s,o,c,l=1003,h=1003,u,d){super(null,s,o,c,l,h,i,a,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Lo=new Te,_u=new Te;class hs{constructor(e=[],t=[]){this.uuid=zt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(16*e.length),t.length===0)this.calculateInverses();else if(e.length!==t.length){this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Te)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Te;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let a=0,s=e.length;a<s;a++){const o=e[a]?e[a].matrixWorld:_u;Lo.multiplyMatrices(o,t[a]),Lo.toArray(n,16*a)}i!==null&&(i.needsUpdate=!0)}clone(){return new hs(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(4*this.bones.length);e=4*Math.ceil(e/4),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new cs(t,e,e,Wt,Et);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let a=t[e.bones[n]];a===void 0&&(a=new Cl),this.bones.push(a),this.boneInverses.push(new Te().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,a=t.length;i<a;i++){const s=t[i];e.bones.push(s.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class Ka extends mt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ci=new Te,Io=new Te,Sr=[],No=new on,vu=new Te,Fi=new vt,Bi=new qt;class xu extends vt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ka(new Float32Array(16*n),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,vu)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new on),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),No.copy(e.boundingBox).applyMatrix4(ci),this.boundingBox.union(No)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qt),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ci),Bi.copy(e.boundingSphere).applyMatrix4(ci),this.boundingSphere.union(Bi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,3*e)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,16*e)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,a=e*(n.length+1)+1;for(let s=0;s<n.length;s++)n[s]=i[a+s]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fi.geometry=this.geometry,Fi.material=this.material,Fi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(n),e.ray.intersectsSphere(Bi)!==!1))for(let a=0;a<i;a++){this.getMatrixAt(a,ci),Io.multiplyMatrices(n,ci),Fi.matrixWorld=Io,Fi.raycast(e,Sr);for(let s=0,o=Sr.length;s<o;s++){const c=Sr[s];c.instanceId=a,c.object=this,t.push(c)}Sr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ka(new Float32Array(3*this.instanceMatrix.count),3)),t.toArray(this.instanceColor.array,3*e)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,16*e)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cs(new Float32Array(i*this.count),i,this.count,1028,Et));const a=this.morphTexture.source.data.data;let s=0;for(let l=0;l<n.length;l++)s+=n[l];const o=this.geometry.morphTargetsRelative?1:1-s,c=i*e;a[c]=o,a.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class us extends Xt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ee(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Uo=new P,Do=new P,Oo=new Te,Ia=new Ri,Er=new qt;class Xr extends ke{constructor(e=new Tt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)Uo.fromBufferAttribute(t,i-1),Do.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Uo.distanceTo(Do);e.setAttribute("lineDistance",new yt(n,1))}return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(i),Er.radius+=a,e.ray.intersectsSphere(Er)===!1)return;Oo.copy(i).invert(),Ia.copy(e.ray).applyMatrix4(Oo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=new P,h=new P,u=new P,d=new P,p=this.isLineSegments?2:1,m=n.index,v=n.attributes.position;if(m!==null)for(let _=Math.max(0,s.start),f=Math.min(m.count,s.start+s.count)-1;_<f;_+=p){const x=m.getX(_),g=m.getX(_+1);if(l.fromBufferAttribute(v,x),h.fromBufferAttribute(v,g),Ia.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const y=e.ray.origin.distanceTo(d);y<e.near||y>e.far||t.push({distance:y,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}else for(let _=Math.max(0,s.start),f=Math.min(v.count,s.start+s.count)-1;_<f;_+=p){if(l.fromBufferAttribute(v,_),h.fromBufferAttribute(v,_+1),Ia.distanceSqToSegment(l,h,d,u)>c)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}const Fo=new P,Bo=new P;class Pl extends Xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)Fo.fromBufferAttribute(t,i),Bo.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Fo.distanceTo(Bo);e.setAttribute("lineDistance",new yt(n,1))}return this}}class yu extends Xr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ll extends Xt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ee(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const zo=new Te,Za=new Ri,Tr=new qt,br=new P;class Mu extends ke{constructor(e=new Tt,t=new Ll){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Points.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Tr.copy(n.boundingSphere),Tr.applyMatrix4(i),Tr.radius+=a,e.ray.intersectsSphere(Tr)===!1)return;zo.copy(i).invert(),Za.copy(e.ray).applyMatrix4(zo);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null)for(let u=Math.max(0,s.start),d=Math.min(l.count,s.start+s.count);u<d;u++){const p=l.getX(u);br.fromBufferAttribute(h,p),Ho(br,p,c,i,e,t,this)}else for(let u=Math.max(0,s.start),d=Math.min(h.count,s.start+s.count);u<d;u++)br.fromBufferAttribute(h,u),Ho(br,u,c,i,e,t,this)}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}function Ho(r,e,t,n,i,a,s){const o=Za.distanceSqToPoint(r);if(o<t){const c=new P;Za.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;a.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,object:s})}}class ds extends Tt{constructor(e=1,t=32,n=16,i=0,a=2*Math.PI,s=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:a,thetaStart:s,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(s+o,Math.PI);let l=0;const h=[],u=new P,d=new P,p=[],m=[],v=[],_=[];for(let f=0;f<=n;f++){const x=[],g=f/n;let y=0;f===0&&s===0?y=.5/t:f===n&&c===Math.PI&&(y=-.5/t);for(let C=0;C<=t;C++){const w=C/t;u.x=-e*Math.cos(i+w*a)*Math.sin(s+g*o),u.y=e*Math.cos(s+g*o),u.z=e*Math.sin(i+w*a)*Math.sin(s+g*o),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),_.push(w+y,1-g),x.push(l++)}h.push(x)}for(let f=0;f<n;f++)for(let x=0;x<t;x++){const g=h[f][x+1],y=h[f][x],C=h[f+1][x],w=h[f+1][x+1];(f!==0||s>0)&&p.push(g,y,w),(f!==n-1||c<Math.PI)&&p.push(y,C,w)}this.setIndex(p),this.setAttribute("position",new yt(m,3)),this.setAttribute("normal",new yt(v,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ds(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Ja extends Xt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ee(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ee(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ln extends Ja{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ee(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ee(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ee(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Ar(r,e,t){return!r||!t&&r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}function Su(r){const e=r.length,t=new Array(e);for(let n=0;n!==e;++n)t[n]=n;return t.sort(function(n,i){return r[n]-r[i]}),t}function Vo(r,e,t){const n=r.length,i=new r.constructor(n);for(let a=0,s=0;s!==n;++a){const o=t[a]*e;for(let c=0;c!==e;++c)i[s++]=r[o+c]}return i}function Il(r,e,t,n){let i=1,a=r[0];for(;a!==void 0&&a[n]===void 0;)a=r[i++];if(a===void 0)return;let s=a[n];if(s!==void 0)if(Array.isArray(s))do s=a[n],s!==void 0&&(e.push(a.time),t.push.apply(t,s)),a=r[i++];while(a!==void 0);else if(s.toArray!==void 0)do s=a[n],s!==void 0&&(e.push(a.time),s.toArray(t,t.length)),a=r[i++];while(a!==void 0);else do s=a[n],s!==void 0&&(e.push(a.time),t.push(s)),a=r[i++];while(a!==void 0)}class qi{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],a=t[n-1];t:{e:{let s;n:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<a)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(a=i,i=t[++n],e<i)break e}s=t.length;break n}if(e>=a)break t;{const o=t[1];e<o&&(n=2,a=o);for(let c=n-2;;){if(a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=a,a=t[--n-1],e>=a)break e}s=n,n=0}}for(;n<s;){const o=n+s>>>1;e<t[o]?s=o:n=o+1}if(i=t[n],a=t[n-1],a===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,a,i)}return this.interpolate_(n,a,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i;for(let s=0;s!==i;++s)t[s]=n[a+s];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Eu extends qi{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:2400,endingEnd:2400}}intervalChanged_(e,t,n){const i=this.parameterPositions;let a=e-2,s=e+1,o=i[a],c=i[s];if(o===void 0)switch(this.getSettings_().endingStart){case 2401:a=e,o=2*t-n;break;case 2402:a=i.length-2,o=t+i[a]-i[a+1];break;default:a=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case 2401:s=e,c=2*n-t;break;case 2402:s=1,c=n+i[1]-i[0];break;default:s=e-1,c=t}const l=.5*(n-t),h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=a*h,this._offsetNext=s*h}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,m=(n-t)/(i-t),v=m*m,_=v*m,f=-d*_+2*d*v-d*m,x=(1+d)*_+(-1.5-2*d)*v+(-.5+d)*m+1,g=(-1-p)*_+(1.5+p)*v+.5*m,y=p*_-p*v;for(let C=0;C!==o;++C)a[C]=f*s[h+C]+x*s[l+C]+g*s[c+C]+y*s[u+C];return a}}class Tu extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==o;++d)a[d]=s[l+d]*u+s[c+d]*h;return a}}class bu extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class jt{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ar(t,this.TimeBufferType),this.values=Ar(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ar(e.times,Array),values:Ar(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Tu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xi:t=this.InterpolantFactoryMethodDiscrete;break;case Mi:t=this.InterpolantFactoryMethodLinear;break;case ra:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0){if(e===this.DefaultInterpolation)throw new Error(n);this.setInterpolation(this.DefaultInterpolation)}return this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xi;case this.InterpolantFactoryMethodLinear:return Mi;case this.InterpolantFactoryMethodSmooth:return ra}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let a=0,s=i-1;for(;a!==i&&n[a]<e;)++a;for(;s!==-1&&n[s]>t;)--s;if(++s,a!==0||s!==i){a>=s&&(s=Math.max(s,1),a=s-1);const o=this.getValueSize();this.times=n.slice(a,s),this.values=this.values.slice(a*o,s*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!=0&&(e=!1);const n=this.times,i=this.values,a=n.length;a===0&&(e=!1);let s=null;for(let c=0;c!==a;c++){const l=n[c];if(typeof l=="number"&&isNaN(l)){e=!1;break}if(s!==null&&s>l){e=!1;break}s=l}if(i!==void 0&&(o=i,ArrayBuffer.isView(o)&&!(o instanceof DataView)))for(let c=0,l=i.length;c!==l;++c){const h=i[c];if(isNaN(h)){e=!1;break}}var o;return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ra,a=e.length-1;let s=1;for(let o=1;o<a;++o){let c=!1;const l=e[o];if(l!==e[o+1]&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,u=h-n,d=h+n;for(let p=0;p!==n;++p){const m=t[h+p];if(m!==t[u+p]||m!==t[d+p]){c=!0;break}}}if(c){if(o!==s){e[s]=e[o];const h=o*n,u=s*n;for(let d=0;d!==n;++d)t[u+d]=t[h+d]}++s}}if(a>0){e[s]=e[a];for(let o=a*n,c=s*n,l=0;l!==n;++l)t[c+l]=t[o+l];++s}return s!==e.length?(this.times=e.slice(0,s),this.values=t.slice(0,s*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=new this.constructor(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}jt.prototype.TimeBufferType=Float32Array,jt.prototype.ValueBufferType=Float32Array,jt.prototype.DefaultInterpolation=Mi;class di extends jt{}di.prototype.ValueTypeName="bool",di.prototype.ValueBufferType=Array,di.prototype.DefaultInterpolation=Xi,di.prototype.InterpolantFactoryMethodLinear=void 0,di.prototype.InterpolantFactoryMethodSmooth=void 0;class Nl extends jt{}Nl.prototype.ValueTypeName="color";class bi extends jt{}bi.prototype.ValueTypeName="number";class Au extends qi{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)Ht.slerpFlat(a,0,s,l-o,s,l,c);return a}}class Wn extends jt{InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}}Wn.prototype.ValueTypeName="quaternion",Wn.prototype.DefaultInterpolation=Mi,Wn.prototype.InterpolantFactoryMethodSmooth=void 0;class pi extends jt{}pi.prototype.ValueTypeName="string",pi.prototype.ValueBufferType=Array,pi.prototype.DefaultInterpolation=Xi,pi.prototype.InterpolantFactoryMethodLinear=void 0,pi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ai extends jt{}Ai.prototype.ValueTypeName="vector";class wu{constructor(e,t=-1,n,i=2500){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=zt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let s=0,o=n.length;s!==o;++s)t.push(Ru(n[s]).scale(i));const a=new this(e.name,e.duration,t,e.blendMode);return a.uuid=e.uuid,a}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let a=0,s=n.length;a!==s;++a)t.push(jt.toJSON(n[a]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const a=t.length,s=[];for(let o=0;o<a;o++){let c=[],l=[];c.push((o+a-1)%a,o,(o+1)%a),l.push(0,1,0);const h=Su(c);c=Vo(c,1,h),l=Vo(l,1,h),i||c[0]!==0||(c.push(a),l.push(l[0])),s.push(new bi(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,s)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},a=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(a);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(l)}}const s=[];for(const o in i)s.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return s}static parseAnimation(e,t){if(!e)return null;const n=function(h,u,d,p,m){if(d.length!==0){const v=[],_=[];Il(d,v,_,p),v.length!==0&&m.push(new h(u,v,_))}},i=[],a=e.name||"default",s=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const u=l[h].keys;if(u&&u.length!==0)if(u[0].morphTargets){const d={};let p;for(p=0;p<u.length;p++)if(u[p].morphTargets)for(let m=0;m<u[p].morphTargets.length;m++)d[u[p].morphTargets[m]]=-1;for(const m in d){const v=[],_=[];for(let f=0;f!==u[p].morphTargets.length;++f){const x=u[p];v.push(x.time),_.push(x.morphTarget===m?1:0)}i.push(new bi(".morphTargetInfluence["+m+"]",v,_))}c=d.length*s}else{const d=".bones["+t[h].name+"]";n(Ai,d+".position",u,"pos",i),n(Wn,d+".quaternion",u,"rot",i),n(Ai,d+".scale",u,"scl",i)}}return i.length===0?null:new this(a,c,i,o)}resetDuration(){let e=0;for(let t=0,n=this.tracks.length;t!==n;++t){const i=this.tracks[t];e=Math.max(e,i.times[i.times.length-1])}return this.duration=e,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Ru(r){if(r.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=function(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return bi;case"vector":case"vector2":case"vector3":case"vector4":return Ai;case"color":return Nl;case"quaternion":return Wn;case"bool":case"boolean":return di;case"string":return pi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}(r.type);if(r.times===void 0){const t=[],n=[];Il(r.keys,t,n,"value"),r.times=t,r.values=n}return e.parse!==void 0?e.parse(r):new e(r.name,r.times,r.values,r.interpolation)}const yn={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class Cu{constructor(e,t,n){const i=this;let a,s=!1,o=0,c=0;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){c++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,c),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,c),o===c&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return a?a(h):h},this.setURLModifier=function(h){return a=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const p=l[u],m=l[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null}}}const Pu=new Cu;class Tn{constructor(e){this.manager=e!==void 0?e:Pu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,a){n.load(e,i,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Tn.DEFAULT_MATERIAL_NAME="__DEFAULT";const nn={};class Lu extends Error{constructor(e,t){super(e),this.response=t}}class jr extends Tn{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=yn.get(e);if(a!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(a),this.manager.itemEnd(e)},0),a;if(nn[e]!==void 0)return void nn[e].push({onLoad:t,onProgress:n,onError:i});nn[e]=[],nn[e].push({onLoad:t,onProgress:n,onError:i});const s=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(s).then(l=>{if(l.status===200||l.status===0){if(l.status,typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=nn[e],u=l.body.getReader(),d=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),p=d?parseInt(d):0,m=p!==0;let v=0;const _=new ReadableStream({start(f){(function x(){u.read().then(({done:g,value:y})=>{if(g)f.close();else{v+=y.byteLength;const C=new ProgressEvent("progress",{lengthComputable:m,loaded:v,total:p});for(let w=0,T=h.length;w<T;w++){const U=h[w];U.onProgress&&U.onProgress(C)}f.enqueue(y),x()}})})()}});return new Response(_)}throw new Lu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),u=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(u);return l.arrayBuffer().then(p=>d.decode(p))}}}).then(l=>{yn.add(e,l);const h=nn[e];delete nn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(l)}}).catch(l=>{const h=nn[e];if(h===void 0)throw this.manager.itemError(e),l;delete nn[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Iu extends Tn{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=yn.get(e);if(s!==void 0)return a.manager.itemStart(e),setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s;const o=ji("img");function c(){h(),yn.add(e,this),t&&t(this),a.manager.itemEnd(e)}function l(u){h(),i&&i(u),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),a.manager.itemStart(e),o.src=e,o}}class Nu extends Tn{constructor(e){super(e)}load(e,t,n,i){const a=this,s=new cs,o=new jr(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(a.withCredentials),o.load(e,function(c){let l;try{l=a.parse(c)}catch(h){if(i===void 0)return;i(h)}l.image!==void 0?s.image=l.image:l.data!==void 0&&(s.image.width=l.width,s.image.height=l.height,s.image.data=l.data),s.wrapS=l.wrapS!==void 0?l.wrapS:Bt,s.wrapT=l.wrapT!==void 0?l.wrapT:Bt,s.magFilter=l.magFilter!==void 0?l.magFilter:Je,s.minFilter=l.minFilter!==void 0?l.minFilter:Je,s.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(s.colorSpace=l.colorSpace),l.flipY!==void 0&&(s.flipY=l.flipY),l.format!==void 0&&(s.format=l.format),l.type!==void 0&&(s.type=l.type),l.mipmaps!==void 0&&(s.mipmaps=l.mipmaps,s.minFilter=Sn),l.mipmapCount===1&&(s.minFilter=Je),l.generateMipmaps!==void 0&&(s.generateMipmaps=l.generateMipmaps),s.needsUpdate=!0,t&&t(s,l)},n,i),s}}class Uu extends Tn{constructor(e){super(e)}load(e,t,n,i){const a=new it,s=new Iu(this.manager);return s.setCrossOrigin(this.crossOrigin),s.setPath(this.path),s.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},n,i),a}}class Yr extends ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ee(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Na=new Te,ko=new P,Go=new P;class ps{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new Te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ko.setFromMatrixPosition(e.matrixWorld),t.position.copy(ko),Go.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Go),t.updateMatrixWorld(),Na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Du extends ps{constructor(){super(new ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=2*Ei*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,a=e.distance||t.far;n===t.fov&&i===t.aspect&&a===t.far||(t.fov=n,t.aspect=i,t.far=a,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Ou extends Yr{constructor(e,t,n=0,i=Math.PI/3,a=0,s=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.distance=n,this.angle=i,this.penumbra=a,this.decay=s,this.map=null,this.shadow=new Du}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wo=new Te,zi=new P,Ua=new P;class Fu extends ps{constructor(){super(new ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ve(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,a=e.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),zi.setFromMatrixPosition(e.matrixWorld),n.position.copy(zi),Ua.copy(n.position),Ua.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ua),n.updateMatrixWorld(),i.makeTranslation(-zi.x,-zi.y,-zi.z),Wo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wo)}}class Bu extends Yr{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Fu}get power(){return 4*this.intensity*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class zu extends ps{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ul extends Yr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ke.DEFAULT_UP),this.updateMatrix(),this.target=new ke,this.shadow=new zu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Hu extends Yr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wi{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Vu extends Tn{constructor(e){super(e),this.isImageBitmapLoader=!0,this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,s=yn.get(e);if(s!==void 0)return a.manager.itemStart(e),s.then?void s.then(l=>{t&&t(l),a.manager.itemEnd(e)}).catch(l=>{i&&i(l)}):(setTimeout(function(){t&&t(s),a.manager.itemEnd(e)},0),s);const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(a.options,{colorSpaceConversion:"none"}))}).then(function(l){return yn.add(e,l),t&&t(l),a.manager.itemEnd(e),l}).catch(function(l){i&&i(l),yn.remove(e),a.manager.itemError(e),a.manager.itemEnd(e)});yn.add(e,c),a.manager.itemStart(e)}}let wr;class Dl{static getContext(){return wr===void 0&&(wr=new(window.AudioContext||window.webkitAudioContext)),wr}static setContext(e){wr=e}}class ku extends Tn{constructor(e){super(e)}load(e,t,n,i){const a=this,s=new jr(this.manager);function o(c){i&&i(c),a.manager.itemError(e)}s.setResponseType("arraybuffer"),s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,function(c){try{const l=c.slice(0);Dl.getContext().decodeAudioData(l,function(h){t(h)}).catch(o)}catch(l){o(l)}},n,i)}}class Gu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Xo(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Xo();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Xo(){return(typeof performance>"u"?Date:performance).now()}const On=new P,jo=new Ht,Wu=new P,Fn=new P;class Xu extends ke{constructor(){super(),this.type="AudioListener",this.context=Dl.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Gu}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(On,jo,Wu),Fn.set(0,0,-1).applyQuaternion(jo),t.positionX){const i=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(On.x,i),t.positionY.linearRampToValueAtTime(On.y,i),t.positionZ.linearRampToValueAtTime(On.z,i),t.forwardX.linearRampToValueAtTime(Fn.x,i),t.forwardY.linearRampToValueAtTime(Fn.y,i),t.forwardZ.linearRampToValueAtTime(Fn.z,i),t.upX.linearRampToValueAtTime(n.x,i),t.upY.linearRampToValueAtTime(n.y,i),t.upZ.linearRampToValueAtTime(n.z,i)}else t.setPosition(On.x,On.y,On.z),t.setOrientation(Fn.x,Fn.y,Fn.z,n.x,n.y,n.z)}}class ju extends ke{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0||this.hasPlaybackControl===!1)return;this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl!==!1)return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl!==!1)return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl!==!1)return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl!==!1&&this.loop}setLoop(e){if(this.hasPlaybackControl!==!1)return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const fs="\\[\\]\\.:\\/",Yu=new RegExp("["+fs+"]","g"),Da="[^"+fs+"]",qu="[^"+fs.replace("\\.","")+"]",Ku=new RegExp("^"+/((?:WC+[\/:])*)/.source.replace("WC",Da)+/(WCOD+)?/.source.replace("WCOD",qu)+/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Da)+/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Da)+"$"),Zu=["material","materials","bones","map"];class Be{constructor(e,t,n){this.path=t,this.parsedPath=n||Be.parseTrackName(t),this.node=Be.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Be.Composite(e,t,n):new Be(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Yu,"")}static parseTrackName(e){const t=Ku.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const a=n.nodeName.substring(i+1);Zu.indexOf(a)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=a)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(a){for(let s=0;s<a.length;s++){const o=a[s];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,a=n.length;i!==a;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let a=t.propertyIndex;if(e||(e=Be.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e)return;if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material||!e.material.materials)return;e=e.material.materials;break;case"bones":if(!e.skeleton)return;e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material||!e.material.map)return;e=e.material.map;break;default:if(e[n]===void 0)return;e=e[n]}if(l!==void 0){if(e[l]===void 0)return;e=e[l]}}const s=e[i];if(s===void 0){t.nodeName;return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry||!e.geometry.morphAttributes)return;e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=s,this.propertyIndex=a}else s.fromArray!==void 0&&s.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=s):Array.isArray(s)?(c=this.BindingType.EntireArray,this.resolvedProperty=s):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Be.Composite=class{constructor(r,e,t){const n=t||Be.parseTrackName(e);this._targetGroup=r,this._bindings=r.subscribe_(e,n)}getValue(r,e){this.bind();const t=this._targetGroup.nCachedObjects_,n=this._bindings[t];n!==void 0&&n.getValue(r,e)}setValue(r,e){const t=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=t.length;n!==i;++n)t[n].setValue(r,e)}bind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].bind()}unbind(){const r=this._bindings;for(let e=this._targetGroup.nCachedObjects_,t=r.length;e!==t;++e)r[e].unbind()}},Be.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Be.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Be.prototype.GetterByBindingType=[Be.prototype._getValue_direct,Be.prototype._getValue_array,Be.prototype._getValue_arrayElement,Be.prototype._getValue_toArray],Be.prototype.SetterByBindingTypeAndVersioning=[[Be.prototype._setValue_direct,Be.prototype._setValue_direct_setNeedsUpdate,Be.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_array,Be.prototype._setValue_array_setNeedsUpdate,Be.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_arrayElement,Be.prototype._setValue_arrayElement_setNeedsUpdate,Be.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Be.prototype._setValue_fromArray,Be.prototype._setValue_fromArray_setNeedsUpdate,Be.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Yo=new Te;class Ju{constructor(e,t,n=0,i=1/0){this.ray=new Ri(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera&&(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t)}setFromXRController(e){return Yo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Yo),this}intersectObject(e,t=!0,n=[]){return $a(e,this,n,t),n.sort(qo),n}intersectObjects(e,t=!0,n=[]){for(let i=0,a=e.length;i<a;i++)$a(e[i],this,n,t);return n.sort(qo),n}}function qo(r,e){return r.distance-e.distance}function $a(r,e,t,n){if(r.layers.test(e.layers)&&r.raycast(e,t),n===!0){const i=r.children;for(let a=0,s=i.length;a<s;a++)$a(i[a],e,t,!0)}}class Ko{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class $u extends Pl{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=new Tt;n.setAttribute("position",new yt(t,3)),n.setAttribute("color",new yt([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(n,new us({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,n){const i=new Ee,a=this.geometry.attributes.color.array;return i.set(e),i.toArray(a,0),i.toArray(a,3),i.set(t),i.toArray(a,6),i.toArray(a,9),i.set(n),i.toArray(a,12),i.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}function Zo(r,e){if(e===0)return r;if(e===2||e===1){let t=r.getIndex();if(t===null){const s=[],o=r.getAttribute("position");if(o===void 0)return r;for(let c=0;c<o.count;c++)s.push(c);r.setIndex(s),t=r.getIndex()}const n=t.count-2,i=[];if(e===2)for(let s=1;s<=n;s++)i.push(t.getX(0)),i.push(t.getX(s)),i.push(t.getX(s+1));else for(let s=0;s<n;s++)s%2==0?(i.push(t.getX(s)),i.push(t.getX(s+1)),i.push(t.getX(s+2))):(i.push(t.getX(s+2)),i.push(t.getX(s+1)),i.push(t.getX(s)));i.length;const a=r.clone();return a.setIndex(i),a.clearGroups(),a}return r}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}})),typeof window<"u"&&(window.__THREE__||(window.__THREE__=ka));class Qa extends Tn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new id(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new ad(t)}),this.register(function(t){return new sd(t)}),this.register(function(t){return new od(t)}),this.register(function(t){return new ld(t)}),this.register(function(t){return new nd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new rd(t)}),this.register(function(t){return new ud(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new ed(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)})}load(e,t,n,i){const a=this;let s;if(this.resourcePath!=="")s=this.resourcePath;else if(this.path!==""){const l=Wi.extractUrlBase(e);s=Wi.resolveURL(l,this.path)}else s=Wi.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i&&i(l),a.manager.itemError(e),a.manager.itemEnd(e)},c=new jr(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{a.parse(l,s,function(h){t(h),a.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let a;const s={},o={},c=new TextDecoder;if(typeof e=="string")a=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Ol){try{s[Ie.KHR_BINARY_GLTF]=new xd(e)}catch(h){return void(i&&i(h))}a=JSON.parse(s[Ie.KHR_BINARY_GLTF].content)}else a=JSON.parse(c.decode(e));else a=e;if(a.asset===void 0||a.asset.version[0]<2)return void(i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));const l=new Id(a,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name,o[u.name]=u,s[u.name]=!0}if(a.extensionsUsed)for(let h=0;h<a.extensionsUsed.length;++h){const u=a.extensionsUsed[h],d=a.extensionsRequired||[];switch(u){case Ie.KHR_MATERIALS_UNLIT:s[u]=new td;break;case Ie.KHR_DRACO_MESH_COMPRESSION:s[u]=new yd(a,this.dracoLoader);break;case Ie.KHR_TEXTURE_TRANSFORM:s[u]=new Md;break;case Ie.KHR_MESH_QUANTIZATION:s[u]=new Sd;break;default:d.indexOf(u)>=0&&o[u]}}l.setExtensions(s),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,a){n.parse(e,t,i,a)})}}function Qu(){let r={};return{get:function(e){return r[e]},add:function(e,t){r[e]=t},remove:function(e){delete r[e]},removeAll:function(){r={}}}}const Ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ed{constructor(e){this.parser=e,this.name=Ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const a=t[n];a.extensions&&a.extensions[this.name]&&a.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,a.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const a=t.json,s=((a.extensions&&a.extensions[this.name]||{}).lights||[])[e];let o;const c=new Ee(16777215);s.color!==void 0&&c.setRGB(s.color[0],s.color[1],s.color[2],at);const l=s.range!==void 0?s.range:0;switch(s.type){case"directional":o=new Ul(c),o.target.position.set(0,0,-1),o.add(o.target);break;case"point":o=new Bu(c),o.distance=l;break;case"spot":o=new Ou(c),o.distance=l,s.spot=s.spot||{},s.spot.innerConeAngle=s.spot.innerConeAngle!==void 0?s.spot.innerConeAngle:0,s.spot.outerConeAngle=s.spot.outerConeAngle!==void 0?s.spot.outerConeAngle:Math.PI/4,o.angle=s.spot.outerConeAngle,o.penumbra=1-s.spot.innerConeAngle/s.spot.outerConeAngle,o.target.position.set(0,0,-1),o.add(o.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+s.type)}return o.position.set(0,0,0),o.decay=2,_n(o,s),s.intensity!==void 0&&(o.intensity=s.intensity),o.name=t.createUniqueName(s.name||"light_"+e),i=Promise.resolve(o),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,i=n.json.nodes[e],a=(i.extensions&&i.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(s){return n._getNodeRef(t.cache,a,s)})}}class td{constructor(){this.name=Ie.KHR_MATERIALS_UNLIT}getMaterialType(){return xn}extendParams(e,t,n){const i=[];e.color=new Ee(1,1,1),e.opacity=1;const a=t.pbrMetallicRoughness;if(a){if(Array.isArray(a.baseColorFactor)){const s=a.baseColorFactor;e.color.setRGB(s[0],s[1],s[2],at),e.opacity=s[3]}a.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",a.baseColorTexture,pt))}return Promise.all(i)}}class nd{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name].emissiveStrength;return i!==void 0&&(t.emissiveIntensity=i),Promise.resolve()}}class id{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];if(s.clearcoatFactor!==void 0&&(t.clearcoat=s.clearcoatFactor),s.clearcoatTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatMap",s.clearcoatTexture)),s.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=s.clearcoatRoughnessFactor),s.clearcoatRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"clearcoatRoughnessMap",s.clearcoatRoughnessTexture)),s.clearcoatNormalTexture!==void 0&&(a.push(n.assignTexture(t,"clearcoatNormalMap",s.clearcoatNormalTexture)),s.clearcoatNormalTexture.scale!==void 0)){const o=s.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ve(o,o)}return Promise.all(a)}}class rd{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.iridescenceFactor!==void 0&&(t.iridescence=s.iridescenceFactor),s.iridescenceTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceMap",s.iridescenceTexture)),s.iridescenceIor!==void 0&&(t.iridescenceIOR=s.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),s.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=s.iridescenceThicknessMinimum),s.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=s.iridescenceThicknessMaximum),s.iridescenceThicknessTexture!==void 0&&a.push(n.assignTexture(t,"iridescenceThicknessMap",s.iridescenceThicknessTexture)),Promise.all(a)}}class ad{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SHEEN}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[];t.sheenColor=new Ee(0,0,0),t.sheenRoughness=0,t.sheen=1;const s=i.extensions[this.name];if(s.sheenColorFactor!==void 0){const o=s.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],at)}return s.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=s.sheenRoughnessFactor),s.sheenColorTexture!==void 0&&a.push(n.assignTexture(t,"sheenColorMap",s.sheenColorTexture,pt)),s.sheenRoughnessTexture!==void 0&&a.push(n.assignTexture(t,"sheenRoughnessMap",s.sheenRoughnessTexture)),Promise.all(a)}}class sd{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.transmissionFactor!==void 0&&(t.transmission=s.transmissionFactor),s.transmissionTexture!==void 0&&a.push(n.assignTexture(t,"transmissionMap",s.transmissionTexture)),Promise.all(a)}}class od{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_VOLUME}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];t.thickness=s.thicknessFactor!==void 0?s.thicknessFactor:0,s.thicknessTexture!==void 0&&a.push(n.assignTexture(t,"thicknessMap",s.thicknessTexture)),t.attenuationDistance=s.attenuationDistance||1/0;const o=s.attenuationColor||[1,1,1];return t.attenuationColor=new Ee().setRGB(o[0],o[1],o[2],at),Promise.all(a)}}class ld{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IOR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const i=n.extensions[this.name];return t.ior=i.ior!==void 0?i.ior:1.5,Promise.resolve()}}class cd{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SPECULAR}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];t.specularIntensity=s.specularFactor!==void 0?s.specularFactor:1,s.specularTexture!==void 0&&a.push(n.assignTexture(t,"specularIntensityMap",s.specularTexture));const o=s.specularColorFactor||[1,1,1];return t.specularColor=new Ee().setRGB(o[0],o[1],o[2],at),s.specularColorTexture!==void 0&&a.push(n.assignTexture(t,"specularColorMap",s.specularColorTexture,pt)),Promise.all(a)}}class hd{constructor(e){this.parser=e,this.name=Ie.EXT_MATERIALS_BUMP}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return t.bumpScale=s.bumpFactor!==void 0?s.bumpFactor:1,s.bumpTexture!==void 0&&a.push(n.assignTexture(t,"bumpMap",s.bumpTexture)),Promise.all(a)}}class ud{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const t=this.parser.json.materials[e];return t.extensions&&t.extensions[this.name]?ln:null}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const a=[],s=i.extensions[this.name];return s.anisotropyStrength!==void 0&&(t.anisotropy=s.anisotropyStrength),s.anisotropyRotation!==void 0&&(t.anisotropyRotation=s.anisotropyRotation),s.anisotropyTexture!==void 0&&a.push(n.assignTexture(t,"anisotropyMap",s.anisotropyTexture)),Promise.all(a)}}class dd{constructor(e){this.parser=e,this.name=Ie.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const a=i.extensions[this.name],s=t.options.ktx2Loader;if(!s){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,a.source,s)}}class pd{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=i.images[s.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class fd{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,a=i.textures[e];if(!a.extensions||!a.extensions[t])return null;const s=a.extensions[t],o=i.images[s.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,s.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class md{constructor(e){this.name=Ie.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],a=this.parser.getDependency("buffer",i.buffer),s=this.parser.options.meshoptDecoder;if(!s||!s.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return a.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(o,c,l);return s.decodeGltfBufferAsync?s.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(p){return p.buffer}):s.ready.then(function(){const p=new ArrayBuffer(h*u);return s.decodeGltfBuffer(new Uint8Array(p),h,u,d,i.mode,i.filter),p})})}return null}}class gd{constructor(e){this.name=Ie.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Ct.TRIANGLES&&c.mode!==Ct.TRIANGLE_STRIP&&c.mode!==Ct.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,s=[],o={};for(const c in a)s.push(this.parser.getDependency("accessor",a[c]).then(l=>(o[c]=l,o[c])));return s.length<1?null:(s.push(this.parser.createNodeMesh(e)),Promise.all(s).then(c=>{const l=c.pop(),h=l.isGroup?l.children:[l],u=c[0].count,d=[];for(const p of h){const m=new Te,v=new P,_=new Ht,f=new P(1,1,1),x=new xu(p.geometry,p.material,u);for(let g=0;g<u;g++)o.TRANSLATION&&v.fromBufferAttribute(o.TRANSLATION,g),o.ROTATION&&_.fromBufferAttribute(o.ROTATION,g),o.SCALE&&f.fromBufferAttribute(o.SCALE,g),x.setMatrixAt(g,m.compose(v,_,f));for(const g in o)if(g==="_COLOR_0"){const y=o[g];x.instanceColor=new Ka(y.array,y.itemSize,y.normalized)}else g!=="TRANSLATION"&&g!=="ROTATION"&&g!=="SCALE"&&p.geometry.setAttribute(g,o[g]);ke.prototype.copy.call(x,p),this.parser.assignFinalMaterial(x),d.push(x)}return l.isGroup?(l.clear(),l.add(...d),l):d[0]}))}}const Ol="glTF",_d=1313821514,vd=5130562;class xd{constructor(e){this.name=Ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,12),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ol)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-12,a=new DataView(e,12);let s=0;for(;s<i;){const o=a.getUint32(s,!0);s+=4;const c=a.getUint32(s,!0);if(s+=4,c===_d){const l=new Uint8Array(e,12+s,o);this.content=n.decode(l)}else if(c===vd){const l=12+s;this.body=e.slice(l,l+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class yd{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ie.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,a=e.extensions[this.name].bufferView,s=e.extensions[this.name].attributes,o={},c={},l={};for(const h in s){const u=es[h]||h.toLowerCase();o[u]=s[h]}for(const h in e.attributes){const u=es[h]||h.toLowerCase();if(s[h]!==void 0){const d=n.accessors[e.attributes[h]],p=gi[d.componentType];l[u]=p.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",a).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(p){for(const m in p.attributes){const v=p.attributes[m],_=c[m];_!==void 0&&(v.normalized=_)}u(p)},o,l,at,d)})})}}class Md{constructor(){this.name=Ie.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord!==void 0&&t.texCoord!==e.channel||t.offset!==void 0||t.rotation!==void 0||t.scale!==void 0)&&(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Sd{constructor(){this.name=Ie.KHR_MESH_QUANTIZATION}}class Fl extends qi{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,a=e*i*3+i;for(let s=0;s!==i;s++)t[s]=n[a+s];return t}interpolate_(e,t,n,i){const a=this.resultBuffer,s=this.sampleValues,o=this.valueSize,c=2*o,l=3*o,h=i-t,u=(n-t)/h,d=u*u,p=d*u,m=e*l,v=m-l,_=-2*p+3*d,f=p-d,x=1-_,g=f-d+u;for(let y=0;y!==o;y++){const C=s[v+y+o],w=s[v+y+c]*h,T=s[m+y+o],U=s[m+y]*h;a[y]=x*C+g*w+_*T+f*U}return a}}const Ed=new Ht;class Td extends Fl{interpolate_(e,t,n,i){const a=super.interpolate_(e,t,n,i);return Ed.fromArray(a).normalize().toArray(a),a}}const Ct={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},gi={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Jo={9728:ht,9729:Je,9984:Ga,9985:Lr,9986:hi,9987:Sn},$o={33071:Bt,33648:Ur,10497:xi},Oa={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},es={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},bd={CUBICSPLINE:void 0,LINEAR:Mi,STEP:Xi},Ad="OPAQUE",wd="MASK",Rd="BLEND";function Bn(r,e,t){for(const n in t.extensions)r[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function _n(r,e){e.extras!==void 0&&typeof e.extras=="object"&&Object.assign(r.userData,e.extras)}function Cd(r,e){if(r.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)r.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(r.morphTargetInfluences.length===t.length){r.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)r.morphTargetDictionary[t[n]]=n}}}function Pd(r){let e;const t=r.extensions&&r.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];if(e=t?"draco:"+t.bufferView+":"+t.indices+":"+Fa(t.attributes):r.indices+":"+Fa(r.attributes)+":"+r.mode,r.targets!==void 0)for(let n=0,i=r.targets.length;n<i;n++)e+=":"+Fa(r.targets[n]);return e}function Fa(r){let e="";const t=Object.keys(r).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+r[t[n]]+";";return e}function ts(r){switch(r){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}const Ld=new Te;class Id{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qu,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,a=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,a=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&a<98?this.textureLoader=new Uu(this.options.manager):this.textureLoader=new Vu(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new jr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,a=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(s){return s._markDefs&&s._markDefs()}),Promise.all(this._invokeAll(function(s){return s.beforeRoot&&s.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(s){const o={scene:s[0][i.scene||0],scenes:s[0],animations:s[1],cameras:s[2],asset:i.asset,parser:n,userData:{}};return Bn(a,o,i),_n(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,a=t.length;i<a;i++){const s=t[i].joints;for(let o=0,c=s.length;o<c;o++)e[s[o]].isBone=!0}for(let i=0,a=e.length;i<a;i++){const s=e[i];s.mesh!==void 0&&(this._addNodeRef(this.meshCache,s.mesh),s.skin!==void 0&&(n[s.mesh].isSkinnedMesh=!0)),s.camera!==void 0&&this._addNodeRef(this.cameraCache,s.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),a=(s,o)=>{const c=this.associations.get(s);c!=null&&this.associations.set(o,c);for(const[l,h]of s.children.entries())a(h,o.children[l])};return a(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const a=e(t[i]);a&&n.push(a)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(a){return a.loadNode&&a.loadNode(t)});break;case"mesh":i=this._invokeOne(function(a){return a.loadMesh&&a.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(a){return a.loadBufferView&&a.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(a){return a.loadMaterial&&a.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(a){return a.loadTexture&&a.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(a){return a.loadAnimation&&a.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(a){return a!=this&&a.getDependency&&a.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e)}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(a,s){return n.getDependency(e,s)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(a,s){n.load(Wi.resolveURL(t.uri,i.path),a,void 0,function(){s(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,a=t.byteOffset||0;return n.slice(a,a+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const s=Oa[i.type],o=gi[i.componentType],c=i.normalized===!0,l=new o(i.count*s);return Promise.resolve(new mt(l,s,c))}const a=[];return i.bufferView!==void 0?a.push(this.getDependency("bufferView",i.bufferView)):a.push(null),i.sparse!==void 0&&(a.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),a.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(a).then(function(s){const o=s[0],c=Oa[i.type],l=gi[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,m=i.normalized===!0;let v,_;if(p&&p!==u){const f=Math.floor(d/p),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let g=t.cache.get(x);g||(v=new l(o,f*p,i.count*p/h),g=new fu(v,p/h),t.cache.add(x,g)),_=new ls(g,c,d%p/h,m)}else v=o===null?new l(i.count*c):new l(o,d,i.count*c),_=new mt(v,c,m);if(i.sparse!==void 0){const f=Oa.SCALAR,x=gi[i.sparse.indices.componentType],g=i.sparse.indices.byteOffset||0,y=i.sparse.values.byteOffset||0,C=new x(s[1],g,i.sparse.count*f),w=new l(s[2],y,i.sparse.count*c);o!==null&&(_=new mt(_.array.slice(),_.itemSize,_.normalized));for(let T=0,U=C.length;T<U;T++){const L=C[T];if(_.setX(L,w[T*c]),c>=2&&_.setY(L,w[T*c+1]),c>=3&&_.setZ(L,w[T*c+2]),c>=4&&_.setW(L,w[T*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return _})}loadTexture(e){const t=this.json,n=this.options,i=t.textures[e].source,a=t.images[i];let s=this.textureLoader;if(a.uri){const o=n.manager.getHandler(a.uri);o!==null&&(s=o)}return this.loadTextureImage(e,i,s)}loadTextureImage(e,t,n){const i=this,a=this.json,s=a.textures[e],o=a.images[t],c=(o.uri||o.bufferView)+":"+s.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=s.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const u=(a.samplers||{})[s.sampler]||{};return h.magFilter=Jo[u.magFilter]||Je,h.minFilter=Jo[u.minFilter]||Sn,h.wrapS=$o[u.wrapS]||xi,h.wrapT=$o[u.wrapT]||xi,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,a=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const s=i.images[e],o=self.URL||self.webkitURL;let c=s.uri||"",l=!1;if(s.bufferView!==void 0)c=n.getDependency("bufferView",s.bufferView).then(function(u){l=!0;const d=new Blob([u],{type:s.mimeType});return c=o.createObjectURL(d),c});else if(s.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(d,p){let m=d;t.isImageBitmapLoader===!0&&(m=function(v){const _=new it(v);_.needsUpdate=!0,d(_)}),t.load(Wi.resolveURL(u,a.path),m,void 0,p)})}).then(function(u){var d;return l===!0&&o.revokeObjectURL(c),u.userData.mimeType=s.mimeType||((d=s.uri).search(/\.jpe?g($|\?)/i)>0||d.search(/^data\:image\/jpeg/)===0?"image/jpeg":d.search(/\.webp($|\?)/i)>0||d.search(/^data\:image\/webp/)===0?"image/webp":"image/png"),u}).catch(function(u){throw u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const a=this;return this.getDependency("texture",n.index).then(function(s){if(!s)return null;if(n.texCoord!==void 0&&n.texCoord>0&&((s=s.clone()).channel=n.texCoord),a.extensions[Ie.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[Ie.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=a.associations.get(s);s=a.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(s,o),a.associations.set(s,c)}}return i!==void 0&&(s.colorSpace=i),e[t]=s,s})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,a=t.attributes.color!==void 0,s=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Ll,Xt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new us,Xt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||a||s){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),a&&(o+="vertex-colors:"),s&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),a&&(c.vertexColors=!0),s&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ja}loadMaterial(e){const t=this,n=this.json,i=this.extensions,a=n.materials[e];let s;const o={},c=[];if((a.extensions||{})[Ie.KHR_MATERIALS_UNLIT]){const h=i[Ie.KHR_MATERIALS_UNLIT];s=h.getMaterialType(),c.push(h.extendParams(o,a,t))}else{const h=a.pbrMetallicRoughness||{};if(o.color=new Ee(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const u=h.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],at),o.opacity=u[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,pt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),s=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}a.doubleSided===!0&&(o.side=2);const l=a.alphaMode||Ad;if(l===Rd?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,l===wd&&(o.alphaTest=a.alphaCutoff!==void 0?a.alphaCutoff:.5)),a.normalTexture!==void 0&&s!==xn&&(c.push(t.assignTexture(o,"normalMap",a.normalTexture)),o.normalScale=new ve(1,1),a.normalTexture.scale!==void 0)){const h=a.normalTexture.scale;o.normalScale.set(h,h)}if(a.occlusionTexture!==void 0&&s!==xn&&(c.push(t.assignTexture(o,"aoMap",a.occlusionTexture)),a.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=a.occlusionTexture.strength)),a.emissiveFactor!==void 0&&s!==xn){const h=a.emissiveFactor;o.emissive=new Ee().setRGB(h[0],h[1],h[2],at)}return a.emissiveTexture!==void 0&&s!==xn&&c.push(t.assignTexture(o,"emissiveMap",a.emissiveTexture,pt)),Promise.all(c).then(function(){const h=new s(o);return a.name&&(h.name=a.name),_n(h,a),t.associations.set(h,{materials:e}),a.extensions&&Bn(i,h,a),h})}createUniqueName(e){const t=Be.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function a(o){return n[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Qo(c,o,t)})}const s=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=Pd(l),u=i[h];if(u)s.push(u.promise);else{let d;d=l.extensions&&l.extensions[Ie.KHR_DRACO_MESH_COMPRESSION]?a(l):Qo(new Tt,l,t),i[h]={primitive:l,promise:d},s.push(d)}}return Promise.all(s)}loadMesh(e){const t=this,n=this.json,i=this.extensions,a=n.meshes[e],s=a.primitives,o=[];for(let l=0,h=s.length;l<h;l++){const u=s[l].material===void 0?((c=this.cache).DefaultMaterial===void 0&&(c.DefaultMaterial=new Ja({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:sn})),c.DefaultMaterial):this.getDependency("material",s[l].material);o.push(u)}var c;return o.push(t.loadGeometries(s)),Promise.all(o).then(function(l){const h=l.slice(0,l.length-1),u=l[l.length-1],d=[];for(let m=0,v=u.length;m<v;m++){const _=u[m],f=s[m];let x;const g=h[m];if(f.mode===Ct.TRIANGLES||f.mode===Ct.TRIANGLE_STRIP||f.mode===Ct.TRIANGLE_FAN||f.mode===void 0)x=a.isSkinnedMesh===!0?new gu(_,g):new vt(_,g),x.isSkinnedMesh===!0&&x.normalizeSkinWeights(),f.mode===Ct.TRIANGLE_STRIP?x.geometry=Zo(x.geometry,1):f.mode===Ct.TRIANGLE_FAN&&(x.geometry=Zo(x.geometry,2));else if(f.mode===Ct.LINES)x=new Pl(_,g);else if(f.mode===Ct.LINE_STRIP)x=new Xr(_,g);else if(f.mode===Ct.LINE_LOOP)x=new yu(_,g);else{if(f.mode!==Ct.POINTS)throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+f.mode);x=new Mu(_,g)}Object.keys(x.geometry.morphAttributes).length>0&&Cd(x,a),x.name=t.createUniqueName(a.name||"mesh_"+e),_n(x,a),f.extensions&&Bn(i,x,f),t.assignFinalMaterial(x),d.push(x)}for(let m=0,v=d.length;m<v;m++)t.associations.set(d[m],{meshes:e,primitives:m});if(d.length===1)return a.extensions&&Bn(i,d[0],a),d[0];const p=new Vn;a.extensions&&Bn(i,p,a),t.associations.set(p,{meshes:e});for(let m=0,v=d.length;m<v;m++)p.add(d[m]);return p})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(i)return n.type==="perspective"?t=new ft(Hr.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new ss(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),_n(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,a=t.joints.length;i<a;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const a=i.pop(),s=i,o=[],c=[];for(let l=0,h=s.length;l<h;l++){const u=s[l];if(u){o.push(u);const d=new Te;a!==null&&d.fromArray(a.array,16*l),c.push(d)}}return new hs(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],a=i.name?i.name:"animation_"+e,s=[],o=[],c=[],l=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const p=i.channels[u],m=i.samplers[p.sampler],v=p.target,_=v.node,f=i.parameters!==void 0?i.parameters[m.input]:m.input,x=i.parameters!==void 0?i.parameters[m.output]:m.output;v.node!==void 0&&(s.push(this.getDependency("node",_)),o.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",x)),l.push(m),h.push(v))}return Promise.all([Promise.all(s),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],m=u[2],v=u[3],_=u[4],f=[];for(let x=0,g=d.length;x<g;x++){const y=d[x],C=p[x],w=m[x],T=v[x],U=_[x];if(y===void 0)continue;y.updateMatrix&&y.updateMatrix();const L=n._createAnimationTracks(y,C,w,T,U);if(L)for(let B=0;B<L.length;B++)f.push(L[B])}return new wu(a,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(a){const s=n._getNodeRef(n.meshCache,i.mesh,a);return i.weights!==void 0&&s.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),s})}loadNode(e){const t=this,n=this.json.nodes[e],i=t._loadNodeShallow(e),a=[],s=n.children||[];for(let c=0,l=s.length;c<l;c++)a.push(t.getDependency("node",s[c]));const o=n.skin===void 0?Promise.resolve(null):t.getDependency("skin",n.skin);return Promise.all([i,Promise.all(a),o]).then(function(c){const l=c[0],h=c[1],u=c[2];u!==null&&l.traverse(function(d){d.isSkinnedMesh&&d.bind(u,Ld)});for(let d=0,p=h.length;d<p;d++)l.add(h[d]);return l})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const a=t.nodes[e],s=a.name?i.createUniqueName(a.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),a.camera!==void 0&&o.push(i.getDependency("camera",a.camera).then(function(l){return i._getNodeRef(i.cameraCache,a.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(h=a.isBone===!0?new Cl:l.length>1?new Vn:l.length===1?l[0]:new ke,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(a.name&&(h.userData.name=a.name,h.name=s),_n(h,a),a.extensions&&Bn(n,h,a),a.matrix!==void 0){const u=new Te;u.fromArray(a.matrix),h.applyMatrix4(u)}else a.translation!==void 0&&h.position.fromArray(a.translation),a.rotation!==void 0&&h.quaternion.fromArray(a.rotation),a.scale!==void 0&&h.scale.fromArray(a.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,a=new Vn;n.name&&(a.name=i.createUniqueName(n.name)),_n(a,n),n.extensions&&Bn(t,a,n);const s=n.nodes||[],o=[];for(let c=0,l=s.length;c<l;c++)o.push(i.getDependency("node",s[c]));return Promise.all(o).then(function(c){for(let l=0,h=c.length;l<h;l++)a.add(c[l]);return i.associations=(l=>{const h=new Map;for(const[u,d]of i.associations)(u instanceof Xt||u instanceof it)&&h.set(u,d);return l.traverse(u=>{const d=i.associations.get(u);d!=null&&h.set(u,d)}),h})(a),a})}_createAnimationTracks(e,t,n,i,a){const s=[],o=e.name?e.name:e.uuid,c=[];let l;switch(mn[a.path]===mn.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(o),mn[a.path]){case mn.weights:l=bi;break;case mn.rotation:l=Wn;break;case mn.position:case mn.scale:l=Ai;break;default:n.itemSize===1?l=bi:l=Ai}const h=i.interpolation!==void 0?bd[i.interpolation]:Mi,u=this._getArrayFromAccessor(n);for(let d=0,p=c.length;d<p;d++){const m=new l(c[d]+"."+mn[a.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),s.push(m)}return s}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=ts(t.constructor),i=new Float32Array(t.length);for(let a=0,s=t.length;a<s;a++)i[a]=t[a]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(t){return new(this instanceof Wn?Td:Fl)(this.times,this.values,this.getValueSize()/3,t)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Qo(r,e,t){const n=e.attributes,i=[];function a(s,o){return t.getDependency("accessor",s).then(function(c){r.setAttribute(o,c)})}for(const s in n){const o=es[s]||s.toLowerCase();o in r.attributes||i.push(a(n[s],o))}if(e.indices!==void 0&&!r.index){const s=t.getDependency("accessor",e.indices).then(function(o){r.setIndex(o)});i.push(s)}return He.workingColorSpace,_n(r,e),function(s,o,c){const l=o.attributes,h=new on;if(l.POSITION===void 0)return;{const p=c.json.accessors[l.POSITION],m=p.min,v=p.max;if(m===void 0||v===void 0)return;if(h.set(new P(m[0],m[1],m[2]),new P(v[0],v[1],v[2])),p.normalized){const _=ts(gi[p.componentType]);h.min.multiplyScalar(_),h.max.multiplyScalar(_)}}const u=o.targets;if(u!==void 0){const p=new P,m=new P;for(let v=0,_=u.length;v<_;v++){const f=u[v];if(f.POSITION!==void 0){const x=c.json.accessors[f.POSITION],g=x.min,y=x.max;if(g!==void 0&&y!==void 0){if(m.setX(Math.max(Math.abs(g[0]),Math.abs(y[0]))),m.setY(Math.max(Math.abs(g[1]),Math.abs(y[1]))),m.setZ(Math.max(Math.abs(g[2]),Math.abs(y[2]))),x.normalized){const C=ts(gi[x.componentType]);m.multiplyScalar(C)}p.max(m)}}}h.expandByVector(p)}s.boundingBox=h;const d=new qt;h.getCenter(d.center),d.radius=h.min.distanceTo(h.max)/2,s.boundingSphere=d}(r,e,t),Promise.all(i).then(function(){return e.targets!==void 0?function(s,o,c){let l=!1,h=!1,u=!1;for(let v=0,_=o.length;v<_;v++){const f=o[v];if(f.POSITION!==void 0&&(l=!0),f.NORMAL!==void 0&&(h=!0),f.COLOR_0!==void 0&&(u=!0),l&&h&&u)break}if(!l&&!h&&!u)return Promise.resolve(s);const d=[],p=[],m=[];for(let v=0,_=o.length;v<_;v++){const f=o[v];if(l){const x=f.POSITION!==void 0?c.getDependency("accessor",f.POSITION):s.attributes.position;d.push(x)}if(h){const x=f.NORMAL!==void 0?c.getDependency("accessor",f.NORMAL):s.attributes.normal;p.push(x)}if(u){const x=f.COLOR_0!==void 0?c.getDependency("accessor",f.COLOR_0):s.attributes.color;m.push(x)}}return Promise.all([Promise.all(d),Promise.all(p),Promise.all(m)]).then(function(v){const _=v[0],f=v[1],x=v[2];return l&&(s.morphAttributes.position=_),h&&(s.morphAttributes.normal=f),u&&(s.morphAttributes.color=x),s.morphTargetsRelative=!0,s})}(r,e.targets,t):r})}class Nd extends Nu{constructor(e){super(e),this.type=an}parse(e){const t=function(m,v){switch(m){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(v||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(v||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(v||""));default:throw new Error("THREE.RGBELoader: Memory Error: "+(v||""))}},n=function(m,v,_){v=v||1024;let f=m.pos,x=-1,g=0,y="",C=String.fromCharCode.apply(null,new Uint16Array(m.subarray(f,f+128)));for(;0>(x=C.indexOf(`
`))&&g<v&&f<m.byteLength;)y+=C,g+=C.length,f+=128,C+=String.fromCharCode.apply(null,new Uint16Array(m.subarray(f,f+128)));return-1<x&&(_!==!1&&(m.pos+=g+x+1),y+C.slice(0,x))},i=function(m,v,_,f){const x=m[v+3],g=Math.pow(2,x-128)/255;_[f+0]=m[v+0]*g,_[f+1]=m[v+1]*g,_[f+2]=m[v+2]*g,_[f+3]=1},a=function(m,v,_,f){const x=m[v+3],g=Math.pow(2,x-128)/255;_[f+0]=or.toHalfFloat(Math.min(m[v+0]*g,65504)),_[f+1]=or.toHalfFloat(Math.min(m[v+1]*g,65504)),_[f+2]=or.toHalfFloat(Math.min(m[v+2]*g,65504)),_[f+3]=or.toHalfFloat(1)},s=new Uint8Array(e);s.pos=0;const o=function(m){const v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,_=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,f=/^\s*FORMAT=(\S+)\s*$/,x=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,g={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let y,C;for((m.pos>=m.byteLength||!(y=n(m)))&&t(1,"no header found"),(C=y.match(/^#\?(\S+)/))||t(3,"bad initial token"),g.valid|=1,g.programtype=C[1],g.string+=y+`
`;y=n(m),y!==!1;)if(g.string+=y+`
`,y.charAt(0)!=="#"){if((C=y.match(v))&&(g.gamma=parseFloat(C[1])),(C=y.match(_))&&(g.exposure=parseFloat(C[1])),(C=y.match(f))&&(g.valid|=2,g.format=C[1]),(C=y.match(x))&&(g.valid|=4,g.height=parseInt(C[1],10),g.width=parseInt(C[2],10)),2&g.valid&&4&g.valid)break}else g.comments+=y+`
`;return 2&g.valid||t(3,"missing format specifier"),4&g.valid||t(3,"missing image size specifier"),g}(s),c=o.width,l=o.height,h=function(m,v,_){const f=v;if(f<8||f>32767||m[0]!==2||m[1]!==2||128&m[2])return new Uint8Array(m);f!==(m[2]<<8|m[3])&&t(3,"wrong scanline width");const x=new Uint8Array(4*v*_);x.length||t(4,"unable to allocate buffer space");let g=0,y=0;const C=4*f,w=new Uint8Array(4),T=new Uint8Array(C);let U=_;for(;U>0&&y<m.byteLength;){y+4>m.byteLength&&t(1),w[0]=m[y++],w[1]=m[y++],w[2]=m[y++],w[3]=m[y++],w[0]==2&&w[1]==2&&(w[2]<<8|w[3])==f||t(3,"bad rgbe scanline format");let L,B=0;for(;B<C&&y<m.byteLength;){L=m[y++];const A=L>128;if(A&&(L-=128),(L===0||B+L>C)&&t(3,"bad scanline data"),A){const k=m[y++];for(let Z=0;Z<L;Z++)T[B++]=k}else T.set(m.subarray(y,y+L),B),B+=L,y+=L}const re=f;for(let A=0;A<re;A++){let k=0;x[g]=T[A+k],k+=f,x[g+1]=T[A+k],k+=f,x[g+2]=T[A+k],k+=f,x[g+3]=T[A+k],g+=4}U--}return x}(s.subarray(s.pos),c,l);let u,d,p;switch(this.type){case Et:p=h.length/4;const m=new Float32Array(4*p);for(let _=0;_<p;_++)i(h,4*_,m,4*_);u=m,d=Et;break;case an:p=h.length/4;const v=new Uint16Array(4*p);for(let _=0;_<p;_++)a(h,4*_,v,4*_);u=v,d=an;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:c,height:l,data:u,header:o.string,gamma:o.gamma,exposure:o.exposure,type:d}}setDataType(e){return this.type=e,this}load(e,t,n,i){return super.load(e,function(a,s){switch(a.type){case Et:case an:a.colorSpace=at,a.minFilter=Je,a.magFilter=Je,a.generateMipmaps=!1,a.flipY=!0}t&&t(a,s)},n,i)}}class wi{static createButton(e,t={}){const n=document.createElement("button");function i(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(s){s.style.position="absolute",s.style.bottom="20px",s.style.padding="12px 6px",s.style.border="1px solid #fff",s.style.borderRadius="4px",s.style.background="rgba(0,0,0,0.1)",s.style.color="#fff",s.style.font="normal 13px sans-serif",s.style.textAlign="center",s.style.opacity="0.5",s.style.outline="none",s.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",a(n),navigator.xr.isSessionSupported("immersive-vr").then(function(s){s?function(){let o=null;async function c(u){u.addEventListener("end",l),await e.xr.setSession(u),n.textContent="EXIT VR",o=u}function l(){o.removeEventListener("end",l),n.textContent="ENTER VR",o=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const h={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){o===null?navigator.xr.requestSession("immersive-vr",h).then(c):(o.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(c).catch(u=>{}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",h).then(c).catch(u=>{})}():(i(),n.textContent="VR NOT SUPPORTED"),s&&wi.xrSessionIsGranted&&n.click()}).catch(function(s){i(),n.textContent="VR NOT ALLOWED"}),n;{const s=document.createElement("a");return window.isSecureContext===!1?(s.href=document.location.href.replace(/^http:/,"https:"),s.innerHTML="WEBXR NEEDS HTTPS"):(s.href="https://immersiveweb.dev/",s.innerHTML="WEBXR NOT AVAILABLE"),s.style.left="calc(50% - 90px)",s.style.width="180px",s.style.textDecoration="none",a(s),s}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{wi.xrSessionIsGranted=!0})}}}wi.xrSessionIsGranted=!1,wi.registerSessionGrantedListener();const Ye={Handedness:Object.freeze({NONE:"none",LEFT:"left",RIGHT:"right"}),ComponentState:Object.freeze({DEFAULT:"default",TOUCHED:"touched",PRESSED:"pressed"}),ComponentProperty:Object.freeze({BUTTON:"button",X_AXIS:"xAxis",Y_AXIS:"yAxis",STATE:"state"}),ComponentType:Object.freeze({TRIGGER:"trigger",SQUEEZE:"squeeze",TOUCHPAD:"touchpad",THUMBSTICK:"thumbstick",BUTTON:"button"}),ButtonTouchThreshold:.05,AxisTouchThreshold:.1,VisualResponseProperty:Object.freeze({TRANSFORM:"transform",VISIBILITY:"visibility"})};async function el(r){const e=await fetch(r);if(e.ok)return e.json();throw new Error(e.statusText)}async function Ud(r,e,t=null,n=!0){if(!r)throw new Error("No xrInputSource supplied");if(!e)throw new Error("No basePath supplied");const i=await async function(c){if(!c)throw new Error("No basePath supplied");return await el(`${c}/profilesList.json`)}(e);let a;if(r.profiles.some(c=>{const l=i[c];return l&&(a={profileId:c,profilePath:`${e}/${l.path}`,deprecated:!!l.deprecated}),!!a}),!a){if(!t)throw new Error("No matching profile name found");const c=i[t];if(!c)throw new Error(`No matching profile name found and default profile "${t}" missing.`);a={profileId:t,profilePath:`${e}/${c.path}`,deprecated:!!c.deprecated}}const s=await el(a.profilePath);let o;if(n){let c;if(c=r.handedness==="any"?s.layouts[Object.keys(s.layouts)[0]]:s.layouts[r.handedness],!c)throw new Error(`No matching handedness, ${r.handedness}, in profile ${a.profileId}`);c.assetPath&&(o=a.profilePath.replace("profile.json",c.assetPath))}return{profile:s,assetPath:o}}const Dd={xAxis:0,yAxis:0,button:0,state:Ye.ComponentState.DEFAULT};class Od{constructor(e){this.componentProperty=e.componentProperty,this.states=e.states,this.valueNodeName=e.valueNodeName,this.valueNodeProperty=e.valueNodeProperty,this.valueNodeProperty===Ye.VisualResponseProperty.TRANSFORM&&(this.minNodeName=e.minNodeName,this.maxNodeName=e.maxNodeName),this.value=0,this.updateFromComponent(Dd)}updateFromComponent({xAxis:e,yAxis:t,button:n,state:i}){const{normalizedXAxis:a,normalizedYAxis:s}=function(o=0,c=0){let l=o,h=c;if(Math.sqrt(o*o+c*c)>1){const u=Math.atan2(c,o);l=Math.cos(u),h=Math.sin(u)}return{normalizedXAxis:.5*l+.5,normalizedYAxis:.5*h+.5}}(e,t);switch(this.componentProperty){case Ye.ComponentProperty.X_AXIS:this.value=this.states.includes(i)?a:.5;break;case Ye.ComponentProperty.Y_AXIS:this.value=this.states.includes(i)?s:.5;break;case Ye.ComponentProperty.BUTTON:this.value=this.states.includes(i)?n:0;break;case Ye.ComponentProperty.STATE:this.valueNodeProperty===Ye.VisualResponseProperty.VISIBILITY?this.value=this.states.includes(i):this.value=this.states.includes(i)?1:0;break;default:throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)}}}class Fd{constructor(e,t){if(!(e&&t&&t.visualResponses&&t.gamepadIndices&&Object.keys(t.gamepadIndices).length!==0))throw new Error("Invalid arguments supplied");this.id=e,this.type=t.type,this.rootNodeName=t.rootNodeName,this.touchPointNodeName=t.touchPointNodeName,this.visualResponses={},Object.keys(t.visualResponses).forEach(n=>{const i=new Od(t.visualResponses[n]);this.visualResponses[n]=i}),this.gamepadIndices=Object.assign({},t.gamepadIndices),this.values={state:Ye.ComponentState.DEFAULT,button:this.gamepadIndices.button!==void 0?0:void 0,xAxis:this.gamepadIndices.xAxis!==void 0?0:void 0,yAxis:this.gamepadIndices.yAxis!==void 0?0:void 0}}get data(){return{id:this.id,...this.values}}updateFromGamepad(e){if(this.values.state=Ye.ComponentState.DEFAULT,this.gamepadIndices.button!==void 0&&e.buttons.length>this.gamepadIndices.button){const t=e.buttons[this.gamepadIndices.button];this.values.button=t.value,this.values.button=this.values.button<0?0:this.values.button,this.values.button=this.values.button>1?1:this.values.button,t.pressed||this.values.button===1?this.values.state=Ye.ComponentState.PRESSED:(t.touched||this.values.button>Ye.ButtonTouchThreshold)&&(this.values.state=Ye.ComponentState.TOUCHED)}this.gamepadIndices.xAxis!==void 0&&e.axes.length>this.gamepadIndices.xAxis&&(this.values.xAxis=e.axes[this.gamepadIndices.xAxis],this.values.xAxis=this.values.xAxis<-1?-1:this.values.xAxis,this.values.xAxis=this.values.xAxis>1?1:this.values.xAxis,this.values.state===Ye.ComponentState.DEFAULT&&Math.abs(this.values.xAxis)>Ye.AxisTouchThreshold&&(this.values.state=Ye.ComponentState.TOUCHED)),this.gamepadIndices.yAxis!==void 0&&e.axes.length>this.gamepadIndices.yAxis&&(this.values.yAxis=e.axes[this.gamepadIndices.yAxis],this.values.yAxis=this.values.yAxis<-1?-1:this.values.yAxis,this.values.yAxis=this.values.yAxis>1?1:this.values.yAxis,this.values.state===Ye.ComponentState.DEFAULT&&Math.abs(this.values.yAxis)>Ye.AxisTouchThreshold&&(this.values.state=Ye.ComponentState.TOUCHED)),Object.values(this.visualResponses).forEach(t=>{t.updateFromComponent(this.values)})}}class Bd{constructor(e,t,n){if(!e)throw new Error("No xrInputSource supplied");if(!t)throw new Error("No profile supplied");this.xrInputSource=e,this.assetUrl=n,this.id=t.profileId,this.layoutDescription=t.layouts[e.handedness],this.components={},Object.keys(this.layoutDescription.components).forEach(i=>{const a=this.layoutDescription.components[i];this.components[i]=new Fd(i,a)}),this.updateFromGamepad()}get gripSpace(){return this.xrInputSource.gripSpace}get targetRaySpace(){return this.xrInputSource.targetRaySpace}get data(){const e=[];return Object.values(this.components).forEach(t=>{e.push(t.data)}),e}updateFromGamepad(){Object.values(this.components).forEach(e=>{e.updateFromGamepad(this.xrInputSource.gamepad)})}}class zd extends ke{constructor(){super(),this.motionController=null,this.envMap=null}setEnvironmentMap(e){return this.envMap==e||(this.envMap=e,this.traverse(t=>{t.isMesh&&(t.material.envMap=this.envMap,t.material.needsUpdate=!0)})),this}updateMatrixWorld(e){super.updateMatrixWorld(e),this.motionController&&(this.motionController.updateFromGamepad(),Object.values(this.motionController.components).forEach(t=>{Object.values(t.visualResponses).forEach(n=>{const{valueNode:i,minNode:a,maxNode:s,value:o,valueNodeProperty:c}=n;i&&(c===Ye.VisualResponseProperty.VISIBILITY?i.visible=o:c===Ye.VisualResponseProperty.TRANSFORM&&(i.quaternion.slerpQuaternions(a.quaternion,s.quaternion,o),i.position.lerpVectors(a.position,s.position,o)))})}))}}function tl(r,e){(function(t,n){Object.values(t.components).forEach(i=>{const{type:a,touchPointNodeName:s,visualResponses:o}=i;if(a===Ye.ComponentType.TOUCHPAD&&(i.touchPointNode=n.getObjectByName(s),i.touchPointNode)){const c=new ds(.001),l=new xn({color:255}),h=new vt(c,l);i.touchPointNode.add(h)}Object.values(o).forEach(c=>{const{valueNodeName:l,minNodeName:h,maxNodeName:u,valueNodeProperty:d}=c;d===Ye.VisualResponseProperty.TRANSFORM&&(c.minNode=n.getObjectByName(h),c.maxNode=n.getObjectByName(u),!c.minNode||!c.maxNode)||(c.valueNode=n.getObjectByName(l),c.valueNode)})})})(r.motionController,e),r.envMap&&e.traverse(t=>{t.isMesh&&(t.material.envMap=r.envMap,t.material.needsUpdate=!0)}),r.add(e)}class Hd{constructor(e=null,t=null){this.gltfLoader=e,this.path="https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles",this._assetCache={},this.onLoad=t,this.gltfLoader||(this.gltfLoader=new Qa)}setPath(e){return this.path=e,this}createControllerModel(e){const t=new zd;let n=null;return e.addEventListener("connected",i=>{const a=i.data;a.targetRayMode==="tracked-pointer"&&a.gamepad&&Ud(a,this.path,"generic-trigger").then(({profile:s,assetPath:o})=>{t.motionController=new Bd(a,s,o);const c=this._assetCache[t.motionController.assetUrl];if(c)n=c.scene.clone(),tl(t,n),this.onLoad&&this.onLoad(n);else{if(!this.gltfLoader)throw new Error("GLTFLoader not set.");this.gltfLoader.setPath(""),this.gltfLoader.load(t.motionController.assetUrl,l=>{this._assetCache[t.motionController.assetUrl]=l,n=l.scene.clone(),tl(t,n),this.onLoad&&this.onLoad(n)},null,()=>{throw new Error(`Asset ${t.motionController.assetUrl} missing or malformed.`)})}}).catch(s=>{})}),e.addEventListener("disconnected",()=>{t.motionController=null,t.remove(n),n=null}),t}}const nl={type:"change"},Ba={type:"start"},il={type:"end"},Rr=new Ri,rl=new gn,Vd=Math.cos(70*Hr.DEG2RAD);class kd extends jn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ls,MIDDLE:Is,RIGHT:Ns},this.touches={ONE:Us,TWO:Ds},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",E),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(nl),n.update(),a=i.NONE},this.update=function(){const R=new P,I=new Ht().setFromUnitVectors(e.up,new P(0,1,0)),G=I.clone().invert(),ie=new P,ce=new Ht,xe=new P,Se=2*Math.PI;return function(We=null){const fe=n.object.position;R.copy(fe).sub(n.target),R.applyQuaternion(I),o.setFromVector3(R),n.autoRotate&&a===i.NONE&&re(function(Ce){return Ce!==null?2*Math.PI/60*n.autoRotateSpeed*Ce:2*Math.PI/60/60*n.autoRotateSpeed}(We)),n.enableDamping?(o.theta+=c.theta*n.dampingFactor,o.phi+=c.phi*n.dampingFactor):(o.theta+=c.theta,o.phi+=c.phi);let ye=n.minAzimuthAngle,Fe=n.maxAzimuthAngle;isFinite(ye)&&isFinite(Fe)&&(ye<-Math.PI?ye+=Se:ye>Math.PI&&(ye-=Se),Fe<-Math.PI?Fe+=Se:Fe>Math.PI&&(Fe-=Se),o.theta=ye<=Fe?Math.max(ye,Math.min(Fe,o.theta)):o.theta>(ye+Fe)/2?Math.max(ye,o.theta):Math.min(Fe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(h,n.dampingFactor):n.target.add(h),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ge=!1;if(n.zoomToCursor&&w||n.object.isOrthographicCamera)o.radius=Y(o.radius);else{const Ce=o.radius;o.radius=Y(o.radius*l),ge=Ce!=o.radius}if(R.setFromSpherical(o),R.applyQuaternion(G),fe.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,h.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),h.set(0,0,0)),n.zoomToCursor&&w){let Ce=null;if(n.object.isPerspectiveCamera){const Ne=R.length();Ce=Y(Ne*l);const rt=Ne-Ce;n.object.position.addScaledVector(y,rt),n.object.updateMatrixWorld(),ge=!!rt}else if(n.object.isOrthographicCamera){const Ne=new P(C.x,C.y,0);Ne.unproject(n.object);const rt=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),n.object.updateProjectionMatrix(),ge=rt!==n.object.zoom;const bt=new P(C.x,C.y,0);bt.unproject(n.object),n.object.position.sub(bt).add(Ne),n.object.updateMatrixWorld(),Ce=R.length()}else n.zoomToCursor=!1;Ce!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ce).add(n.object.position):(Rr.origin.copy(n.object.position),Rr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Rr.direction))<Vd?e.lookAt(n.target):(rl.setFromNormalAndCoplanarPoint(n.object.up,n.target),Rr.intersectPlane(rl,n.target))))}else if(n.object.isOrthographicCamera){const Ce=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/l)),Ce!==n.object.zoom&&(n.object.updateProjectionMatrix(),ge=!0)}return l=1,w=!1,!!(ge||ie.distanceToSquared(n.object.position)>s||8*(1-ce.dot(n.object.quaternion))>s||xe.distanceToSquared(n.target)>s)&&(n.dispatchEvent(nl),ie.copy(n.object.position),ce.copy(n.object.quaternion),xe.copy(n.target),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",D),n.domElement.removeEventListener("pointerdown",O),n.domElement.removeEventListener("pointercancel",H),n.domElement.removeEventListener("wheel",ae),n.domElement.removeEventListener("pointermove",N),n.domElement.removeEventListener("pointerup",H),n.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,o=new Ko,c=new Ko;let l=1;const h=new P,u=new ve,d=new ve,p=new ve,m=new ve,v=new ve,_=new ve,f=new ve,x=new ve,g=new ve,y=new P,C=new ve;let w=!1;const T=[],U={};let L=!1;function B(R){const I=Math.abs(.01*R);return Math.pow(.95,n.zoomSpeed*I)}function re(R){c.theta-=R}function A(R){c.phi-=R}const k=function(){const R=new P;return function(I,G){R.setFromMatrixColumn(G,0),R.multiplyScalar(-I),h.add(R)}}(),Z=function(){const R=new P;return function(I,G){n.screenSpacePanning===!0?R.setFromMatrixColumn(G,1):(R.setFromMatrixColumn(G,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(I),h.add(R)}}(),se=function(){const R=new P;return function(I,G){const ie=n.domElement;if(n.object.isPerspectiveCamera){const ce=n.object.position;R.copy(ce).sub(n.target);let xe=R.length();xe*=Math.tan(n.object.fov/2*Math.PI/180),k(2*I*xe/ie.clientHeight,n.object.matrix),Z(2*G*xe/ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(I*(n.object.right-n.object.left)/n.object.zoom/ie.clientWidth,n.object.matrix),Z(G*(n.object.top-n.object.bottom)/n.object.zoom/ie.clientHeight,n.object.matrix)):n.enablePan=!1}}();function pe(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l/=R:n.enableZoom=!1}function K(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?l*=R:n.enableZoom=!1}function j(R,I){if(!n.zoomToCursor)return;w=!0;const G=n.domElement.getBoundingClientRect(),ie=R-G.left,ce=I-G.top,xe=G.width,Se=G.height;C.x=ie/xe*2-1,C.y=-ce/Se*2+1,y.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function ue(R){u.set(R.clientX,R.clientY)}function X(R){m.set(R.clientX,R.clientY)}function J(R){if(T.length===1)u.set(R.pageX,R.pageY);else{const I=ee(R),G=.5*(R.pageX+I.x),ie=.5*(R.pageY+I.y);u.set(G,ie)}}function me(R){if(T.length===1)m.set(R.pageX,R.pageY);else{const I=ee(R),G=.5*(R.pageX+I.x),ie=.5*(R.pageY+I.y);m.set(G,ie)}}function le(R){const I=ee(R),G=R.pageX-I.x,ie=R.pageY-I.y,ce=Math.sqrt(G*G+ie*ie);f.set(0,ce)}function b(R){if(T.length==1)d.set(R.pageX,R.pageY);else{const G=ee(R),ie=.5*(R.pageX+G.x),ce=.5*(R.pageY+G.y);d.set(ie,ce)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const I=n.domElement;re(2*Math.PI*p.x/I.clientHeight),A(2*Math.PI*p.y/I.clientHeight),u.copy(d)}function M(R){if(T.length===1)v.set(R.pageX,R.pageY);else{const I=ee(R),G=.5*(R.pageX+I.x),ie=.5*(R.pageY+I.y);v.set(G,ie)}_.subVectors(v,m).multiplyScalar(n.panSpeed),se(_.x,_.y),m.copy(v)}function F(R){const I=ee(R),G=R.pageX-I.x,ie=R.pageY-I.y,ce=Math.sqrt(G*G+ie*ie);x.set(0,ce),g.set(0,Math.pow(x.y/f.y,n.zoomSpeed)),pe(g.y),f.copy(x),j(.5*(R.pageX+I.x),.5*(R.pageY+I.y))}function O(R){n.enabled!==!1&&(T.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",N),n.domElement.addEventListener("pointerup",H)),function(I){for(let G=0;G<T.length;G++)if(T[G]==I.pointerId)return!0;return!1}(R)||(function(I){T.push(I.pointerId)}(R),R.pointerType==="touch"?te(R):function(I){let G;switch(I.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case Is:if(n.enableZoom===!1)return;(function(ie){j(ie.clientX,ie.clientX),f.set(ie.clientX,ie.clientY)})(I),a=i.DOLLY;break;case Ls:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enablePan===!1)return;X(I),a=i.PAN}else{if(n.enableRotate===!1)return;ue(I),a=i.ROTATE}break;case Ns:if(I.ctrlKey||I.metaKey||I.shiftKey){if(n.enableRotate===!1)return;ue(I),a=i.ROTATE}else{if(n.enablePan===!1)return;X(I),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(Ba)}(R)))}function N(R){n.enabled!==!1&&(R.pointerType==="touch"?function(I){switch(oe(I),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;b(I),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;M(I),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;(function(G){n.enableZoom&&F(G),n.enablePan&&M(G)})(I),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;(function(G){n.enableZoom&&F(G),n.enableRotate&&b(G)})(I),n.update();break;default:a=i.NONE}}(R):function(I){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;(function(G){d.set(G.clientX,G.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ie=n.domElement;re(2*Math.PI*p.x/ie.clientHeight),A(2*Math.PI*p.y/ie.clientHeight),u.copy(d),n.update()})(I);break;case i.DOLLY:if(n.enableZoom===!1)return;(function(G){x.set(G.clientX,G.clientY),g.subVectors(x,f),g.y>0?pe(B(g.y)):g.y<0&&K(B(g.y)),f.copy(x),n.update()})(I);break;case i.PAN:if(n.enablePan===!1)return;(function(G){v.set(G.clientX,G.clientY),_.subVectors(v,m).multiplyScalar(n.panSpeed),se(_.x,_.y),m.copy(v),n.update()})(I)}}(R))}function H(R){switch(function(I){delete U[I.pointerId];for(let G=0;G<T.length;G++)if(T[G]==I.pointerId)return void T.splice(G,1)}(R),T.length){case 0:n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",N),n.domElement.removeEventListener("pointerup",H),n.dispatchEvent(il),a=i.NONE;break;case 1:const I=T[0],G=U[I];te({pointerId:I,pageX:G.x,pageY:G.y})}}function ae(R){n.enabled!==!1&&n.enableZoom!==!1&&a===i.NONE&&(R.preventDefault(),n.dispatchEvent(Ba),function(I){j(I.clientX,I.clientY),I.deltaY<0?K(B(I.deltaY)):I.deltaY>0&&pe(B(I.deltaY)),n.update()}(function(I){const G=I.deltaMode,ie={clientX:I.clientX,clientY:I.clientY,deltaY:I.deltaY};switch(G){case 1:ie.deltaY*=16;break;case 2:ie.deltaY*=100}return I.ctrlKey&&!L&&(ie.deltaY*=10),ie}(R)),n.dispatchEvent(il))}function ne(R){R.key==="Control"&&(L=!0,n.domElement.getRootNode().addEventListener("keyup",Q,{passive:!0,capture:!0}))}function Q(R){R.key==="Control"&&(L=!1,n.domElement.getRootNode().removeEventListener("keyup",Q,{passive:!0,capture:!0}))}function E(R){n.enabled!==!1&&n.enablePan!==!1&&function(I){let G=!1;switch(I.code){case n.keys.UP:I.ctrlKey||I.metaKey||I.shiftKey?A(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:I.ctrlKey||I.metaKey||I.shiftKey?A(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:I.ctrlKey||I.metaKey||I.shiftKey?re(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:I.ctrlKey||I.metaKey||I.shiftKey?re(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(-n.keyPanSpeed,0),G=!0}G&&(I.preventDefault(),n.update())}(R)}function te(R){switch(oe(R),T.length){case 1:switch(n.touches.ONE){case Us:if(n.enableRotate===!1)return;J(R),a=i.TOUCH_ROTATE;break;case Yl:if(n.enablePan===!1)return;me(R),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case Ds:if(n.enableZoom===!1&&n.enablePan===!1)return;(function(I){n.enableZoom&&le(I),n.enablePan&&me(I)})(R),a=i.TOUCH_DOLLY_PAN;break;case ql:if(n.enableZoom===!1&&n.enableRotate===!1)return;(function(I){n.enableZoom&&le(I),n.enableRotate&&J(I)})(R),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(Ba)}function D(R){n.enabled!==!1&&R.preventDefault()}function oe(R){let I=U[R.pointerId];I===void 0&&(I=new ve,U[R.pointerId]=I),I.set(R.pageX,R.pageY)}function ee(R){const I=R.pointerId===T[0]?T[1]:T[0];return U[I]}n.domElement.addEventListener("contextmenu",D),n.domElement.addEventListener("pointerdown",O),n.domElement.addEventListener("pointercancel",H),n.domElement.addEventListener("wheel",ae,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}let Cr,Hi,Vi,Pr,za,Ha,_t,Ze,tt,Va;function al(r){}function sl(r){}Cr="/3DModelingAndMRApps/webBuild5/",new Te,function(){Ha=document.createElement("div"),document.body.appendChild(Ha),Ze=new pu,new Nd().setPath(Cr).load("hdr/Scenery.hdr",function(a){a.mapping=Nr,Ze.background=a,Ze.environment=a,tt.toneMappingExposure=10;const s=new Qa().setPath(Cr);s.load("mazda.gltf",async function(o){const c=o.scene;c.position.set(17,0,-1),await tt.compileAsync(c,_t,Ze),Ze.add(c)}),s.load("tow_boat/scene.gltf",async function(o){const c=o.scene;c.position.set(-20,-10,-1),await tt.compileAsync(c,_t,Ze),Ze.add(c)}),s.load("street_lamp/street_lamp.gltf",async function(o){const c=o.scene;c.position.set(0,0,-1),await tt.compileAsync(c,_t,Ze),Ze.add(c)}),s.load("mylandscape/landscape.gltf",async function(o){const c=o.scene;c.position.set(0,0,0),await tt.compileAsync(c,_t,Ze),Ze.add(c)})}),_t=new ft(75,window.innerWidth/window.innerHeight,.1,1e3);const r=new Xu;_t.add(r);const e=new ju(r);new ku().load("sounds/song.mp3",function(a){e.setBuffer(a),e.setLoop(!0),e.setVolume(.5),e.play()}),tt=new Rl({antialias:!0}),tt.setSize(window.innerWidth,window.innerHeight),Ha.appendChild(tt.domElement);const t=new Ul(16777215,1);Ze.add(t);const n=new $u(5);Ze.add(n);const i=new Hu(4210752);Ze.add(i),_t.position.set(2,2,2),_t.lookAt(n.position),_t.lookAt(new P(0,0,0)),Va=new kd(_t,tt.domElement),_t.position.set(7,3,6),Va.update(),tt.setAnimationLoop(function(){tt.render(Ze,_t),Va.update()})}(),function(){document.body.appendChild(wi.createButton(tt)),tt.xr.enabled=!0,Hi=tt.xr.getController(0),Hi.addEventListener("selectstart",al),Hi.addEventListener("selectend",sl),Ze.add(Hi),Vi=tt.xr.getController(1),Vi.addEventListener("selectstart",al),Vi.addEventListener("selectend",sl),Ze.add(Vi);const r=new Hd;Pr=tt.xr.getControllerGrip(0),Pr.add(r.createControllerModel(Pr)),Ze.add(Pr),za=tt.xr.getControllerGrip(1),Ze.add(za),new Qa().setPath(Cr).load("low_poly_blue_handgun_pistol/scene.gltf",async function(n){n.scene.scale.set(.3003,.3003,.3003);let i=n.scene;i.rotation.y=Hr.degToRad(-90),i.rotation.x=Hr.degToRad(-30),i.position.set(0,.01,0),za.add(i)});const e=new Tt().setFromPoints([new P(0,0,0),new P(0,0,-1)]),t=new Xr(e);t.name="line",t.scale.z=5,Hi.add(t.clone()),Vi.add(t.clone()),new Ju}(),window.addEventListener("resize",function(){_t.aspect=window.innerWidth/window.innerHeight,_t.updateProjectionMatrix(),tt.setSize(window.innerWidth,window.innerHeight)},!1);
