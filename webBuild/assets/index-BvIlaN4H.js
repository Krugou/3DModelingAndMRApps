(function(){const r=document.createElement("link").relList;if(!(r&&r.supports&&r.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&e(i)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const n=function(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}(t);fetch(t.href,n)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="162",ua=0,da=1,pa=2,fa=0,Zs=1,ma=2,Js=3,ms=1,$s=2,Ot=3,Jt=0,at=1,pn=100,kr=0,Qs=1,eo=2,Zt=0,to=1,no=2,io=3,ro=4,ao=5,so=6,oo=7,Hn=301,Vn=302,ki=306,Or=1e3,Yt=1001,Fr=1002,tt=1003,Jn=1005,pt=1006,Qi=1007,ri=1008,zn=1009,Wr=1012,gs=1013,qt=1014,Kt=1015,ai=1016,fn=1020,zt=1023,mn=1026,Gn=1027,er=33776,tr=33777,nr=33778,ir=33779,rr=36492,In="",Tt="srgb",Qt="srgb-linear",Xr="display-p3",Wi="display-p3-linear",zi="linear",Fe="srgb",Bi="rec709",Hi="p3",xn=7680,ga="300 es",zr=1035,kn=2e3,Vi=2001;class vn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const n=t.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oi=Math.PI/180,Br=180/Math.PI;function si(){const r=4294967295*Math.random()|0,e=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return($e[255&r]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]+"-"+$e[255&e]+$e[e>>8&255]+"-"+$e[e>>16&15|64]+$e[e>>24&255]+"-"+$e[63&t|128]+$e[t>>8&255]+"-"+$e[t>>16&255]+$e[t>>24&255]+$e[255&n]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function lo(r,e){return(r%e+e)%e}function ar(r,e,t){return(1-t)*r+t*e}function _a(r){return!(r&r-1)&&r!==0}function Hr(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function $n(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(4294967295*r);case Uint16Array:return Math.round(65535*r);case Uint8Array:return Math.round(255*r);case Int32Array:return Math.round(2147483647*r);case Int16Array:return Math.round(32767*r);case Int8Array:return Math.round(127*r);default:throw new Error("Invalid component type.")}}const co=Oi;class ye{constructor(e=0,t=0){ye.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*n-s*i+e.x,this.y=a*i+s*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Te{constructor(e,t,n,i,a,s,l,h,o){Te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,l,h,o)}set(e,t,n,i,a,s,l,h,o){const c=this.elements;return c[0]=e,c[1]=i,c[2]=l,c[3]=t,c[4]=a,c[5]=h,c[6]=n,c[7]=s,c[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],l=n[3],h=n[6],o=n[1],c=n[4],u=n[7],d=n[2],p=n[5],g=n[8],x=i[0],_=i[3],f=i[6],M=i[1],m=i[4],S=i[7],U=i[2],R=i[5],b=i[8];return a[0]=s*x+l*M+h*U,a[3]=s*_+l*m+h*R,a[6]=s*f+l*S+h*b,a[1]=o*x+c*M+u*U,a[4]=o*_+c*m+u*R,a[7]=o*f+c*S+u*b,a[2]=d*x+p*M+g*U,a[5]=d*_+p*m+g*R,a[8]=d*f+p*S+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],h=e[6],o=e[7],c=e[8];return t*s*c-t*l*o-n*a*c+n*l*h+i*a*o-i*s*h}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],h=e[6],o=e[7],c=e[8],u=c*s-l*o,d=l*h-c*a,p=o*a-s*h,g=t*u+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(i*o-c*n)*x,e[2]=(l*n-i*s)*x,e[3]=d*x,e[4]=(c*t-i*h)*x,e[5]=(i*a-l*t)*x,e[6]=p*x,e[7]=(n*h-o*t)*x,e[8]=(s*t-n*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,a,s,l){const h=Math.cos(a),o=Math.sin(a);return this.set(n*h,n*o,-n*(h*s+o*l)+s+e,-i*o,i*h,-i*(-o*s+h*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(sr.makeScale(e,t)),this}rotate(e){return this.premultiply(sr.makeRotation(-e)),this}translate(e,t){return this.premultiply(sr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const sr=new Te;function _s(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gi(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ho(){const r=Gi("canvas");return r.style.display="block",r}const va={},xa=new Te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ma=new Te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ui={[Qt]:{transfer:zi,primaries:Bi,toReference:r=>r,fromReference:r=>r},[Tt]:{transfer:Fe,primaries:Bi,toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[Wi]:{transfer:zi,primaries:Hi,toReference:r=>r.applyMatrix3(Ma),fromReference:r=>r.applyMatrix3(xa)},[Xr]:{transfer:Fe,primaries:Hi,toReference:r=>r.convertSRGBToLinear().applyMatrix3(Ma),fromReference:r=>r.applyMatrix3(xa).convertLinearToSRGB()}},uo=new Set([Qt,Wi]),Oe={enabled:!0,_workingColorSpace:Qt,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!uo.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const n=ui[e].toReference;return(0,ui[t].fromReference)(n(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return ui[r].primaries},getTransfer:function(r){return r===In?zi:ui[r].transfer}};function Bn(r){return r<.04045?.0773993808*r:Math.pow(.9478672986*r+.0521327014,2.4)}function or(r){return r<.0031308?12.92*r:1.055*Math.pow(r,.41666)-.055}let Mn;class vs{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Mn===void 0&&(Mn=Gi("canvas")),Mn.width=e.width,Mn.height=e.height;const n=Mn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Mn}return t.width>2048||t.height>2048?t.toDataURL("image/jpeg",.6):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Gi("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),a=i.data;for(let s=0;s<a.length;s++)a[s]=255*Bn(a[s]/255);return n.putImageData(i,0,0),t}if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(255*Bn(t[n]/255)):t[n]=Bn(t[n]);return{data:t,width:e.width,height:e.height}}return e}}let po=0;class xs{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:po++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let a;if(Array.isArray(i)){a=[];for(let s=0,l=i.length;s<l;s++)i[s].isDataTexture?a.push(lr(i[s].image)):a.push(lr(i[s]))}else a=lr(i);n.url=a}return t||(e.images[this.uuid]=n),n}}function lr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?vs.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:{}}let fo=0;class st extends vn{constructor(e=st.DEFAULT_IMAGE,t=st.DEFAULT_MAPPING,n=1001,i=1001,a=1006,s=1008,l=1023,h=1009,o=st.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fo++}),this.uuid=si(),this.name="",this.source=new xs(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=a,this.minFilter=s,this.anisotropy=o,this.format=l,this.internalFormat=null,this.type=h,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Or:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case Or:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}st.DEFAULT_IMAGE=null,st.DEFAULT_MAPPING=300,st.DEFAULT_ANISOTROPY=1;class Ye{constructor(e=0,t=0,n=0,i=1){Ye.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i+s[12]*a,this.y=s[1]*t+s[5]*n+s[9]*i+s[13]*a,this.z=s[2]*t+s[6]*n+s[10]*i+s[14]*a,this.w=s[3]*t+s[7]*n+s[11]*i+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,a;const h=e.elements,o=h[0],c=h[4],u=h[8],d=h[1],p=h[5],g=h[9],x=h[2],_=h[6],f=h[10];if(Math.abs(c-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-_)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+_)<.1&&Math.abs(o+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,S=(p+1)/2,U=(f+1)/2,R=(c+d)/4,b=(u+x)/4,O=(g+_)/4;return m>S&&m>U?m<.01?(n=0,i=.707106781,a=.707106781):(n=Math.sqrt(m),i=R/n,a=b/n):S>U?S<.01?(n=.707106781,i=0,a=.707106781):(i=Math.sqrt(S),n=R/i,a=O/i):U<.01?(n=.707106781,i=.707106781,a=0):(a=Math.sqrt(U),n=b/a,i=O/a),this.set(n,i,a,t),this}let M=Math.sqrt((_-g)*(_-g)+(u-x)*(u-x)+(d-c)*(d-c));return Math.abs(M)<.001&&(M=1),this.x=(_-g)/M,this.y=(u-x)/M,this.z=(d-c)/M,this.w=Math.acos((o+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mo extends vn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ye(0,0,e,t),this.scissorTest=!1,this.viewport=new Ye(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const a=new st(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const s=n.count;for(let l=0;l<s;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,a=this.textures.length;i<a;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new xs(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends mo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ms extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go extends st{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=tt,this.minFilter=tt,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _n{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,a,s,l){let h=n[i+0],o=n[i+1],c=n[i+2],u=n[i+3];const d=a[s+0],p=a[s+1],g=a[s+2],x=a[s+3];if(l===0)return e[t+0]=h,e[t+1]=o,e[t+2]=c,void(e[t+3]=u);if(l===1)return e[t+0]=d,e[t+1]=p,e[t+2]=g,void(e[t+3]=x);if(u!==x||h!==d||o!==p||c!==g){let _=1-l;const f=h*d+o*p+c*g+u*x,M=f>=0?1:-1,m=1-f*f;if(m>Number.EPSILON){const U=Math.sqrt(m),R=Math.atan2(U,f*M);_=Math.sin(_*R)/U,l=Math.sin(l*R)/U}const S=l*M;if(h=h*_+d*S,o=o*_+p*S,c=c*_+g*S,u=u*_+x*S,_===1-l){const U=1/Math.sqrt(h*h+o*o+c*c+u*u);h*=U,o*=U,c*=U,u*=U}}e[t]=h,e[t+1]=o,e[t+2]=c,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,a,s){const l=n[i],h=n[i+1],o=n[i+2],c=n[i+3],u=a[s],d=a[s+1],p=a[s+2],g=a[s+3];return e[t]=l*g+c*u+h*p-o*d,e[t+1]=h*g+c*d+o*u-l*p,e[t+2]=o*g+c*p+l*d-h*u,e[t+3]=c*g-l*u-h*d-o*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,a=e._z,s=e._order,l=Math.cos,h=Math.sin,o=l(n/2),c=l(i/2),u=l(a/2),d=h(n/2),p=h(i/2),g=h(a/2);switch(s){case"XYZ":this._x=d*c*u+o*p*g,this._y=o*p*u-d*c*g,this._z=o*c*g+d*p*u,this._w=o*c*u-d*p*g;break;case"YXZ":this._x=d*c*u+o*p*g,this._y=o*p*u-d*c*g,this._z=o*c*g-d*p*u,this._w=o*c*u+d*p*g;break;case"ZXY":this._x=d*c*u-o*p*g,this._y=o*p*u+d*c*g,this._z=o*c*g+d*p*u,this._w=o*c*u-d*p*g;break;case"ZYX":this._x=d*c*u-o*p*g,this._y=o*p*u+d*c*g,this._z=o*c*g-d*p*u,this._w=o*c*u+d*p*g;break;case"YZX":this._x=d*c*u+o*p*g,this._y=o*p*u+d*c*g,this._z=o*c*g-d*p*u,this._w=o*c*u-d*p*g;break;case"XZY":this._x=d*c*u-o*p*g,this._y=o*p*u-d*c*g,this._z=o*c*g+d*p*u,this._w=o*c*u+d*p*g}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],a=t[8],s=t[1],l=t[5],h=t[9],o=t[2],c=t[6],u=t[10],d=n+l+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-h)*p,this._y=(a-o)*p,this._z=(s-i)*p}else if(n>l&&n>u){const p=2*Math.sqrt(1+n-l-u);this._w=(c-h)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(a+o)/p}else if(l>u){const p=2*Math.sqrt(1+l-n-u);this._w=(a-o)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+u-n-l);this._w=(s-i)/p,this._x=(a+o)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,a=e._z,s=e._w,l=t._x,h=t._y,o=t._z,c=t._w;return this._x=n*c+s*l+i*o-a*h,this._y=i*c+s*h+a*l-n*o,this._z=a*c+s*o+n*h-i*l,this._w=s*c-n*l-i*h-a*o,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,a=this._z,s=this._w;let l=s*e._w+n*e._x+i*e._y+a*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=s,this._x=n,this._y=i,this._z=a,this;const h=1-l*l;if(h<=Number.EPSILON){const p=1-t;return this._w=p*s+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const o=Math.sqrt(h),c=Math.atan2(o,l),u=Math.sin((1-t)*c)/o,d=Math.sin(t*c)/o;return this._w=s*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[3]*n+a[6]*i,this.y=a[1]*t+a[4]*n+a[7]*i,this.z=a[2]*t+a[5]*n+a[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,a=e.elements,s=1/(a[3]*t+a[7]*n+a[11]*i+a[15]);return this.x=(a[0]*t+a[4]*n+a[8]*i+a[12])*s,this.y=(a[1]*t+a[5]*n+a[9]*i+a[13])*s,this.z=(a[2]*t+a[6]*n+a[10]*i+a[14])*s,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,a=e.x,s=e.y,l=e.z,h=e.w,o=2*(s*i-l*n),c=2*(l*t-a*i),u=2*(a*n-s*t);return this.x=t+h*o+s*u-l*c,this.y=n+h*c+l*o-a*u,this.z=i+h*u+a*c-s*o,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i,this.y=a[1]*t+a[5]*n+a[9]*i,this.z=a[2]*t+a[6]*n+a[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,a=e.z,s=t.x,l=t.y,h=t.z;return this.x=i*h-a*l,this.y=a*s-n*h,this.z=n*l-i*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return cr.copy(this).projectOnVector(e),this.sub(cr)}reflect(e){return this.sub(cr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,4*t)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,3*t)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=2*Math.random()-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cr=new P,Sa=new _n;class oi{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const a=n.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,l=a.count;s<l;s++)e.isMesh===!0?e.getVertexPosition(s,xt):xt.fromBufferAttribute(a,s),xt.applyMatrix4(e.matrixWorld),this.expandByPoint(xt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),di.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),di.copy(n.boundingBox)),di.applyMatrix4(e.matrixWorld),this.union(di)}const i=e.children;for(let a=0,s=i.length;a<s;a++)this.expandByObject(i[a],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xt),xt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qn),pi.subVectors(this.max,Qn),Sn.subVectors(e.a,Qn),yn.subVectors(e.b,Qn),En.subVectors(e.c,Qn),Ht.subVectors(yn,Sn),Vt.subVectors(En,yn),sn.subVectors(Sn,En);let t=[0,-Ht.z,Ht.y,0,-Vt.z,Vt.y,0,-sn.z,sn.y,Ht.z,0,-Ht.x,Vt.z,0,-Vt.x,sn.z,0,-sn.x,-Ht.y,Ht.x,0,-Vt.y,Vt.x,0,-sn.y,sn.x,0];return!!hr(t,Sn,yn,En,pi)&&(t=[1,0,0,0,1,0,0,0,1],!!hr(t,Sn,yn,En,pi)&&(fi.crossVectors(Ht,Vt),t=[fi.x,fi.y,fi.z],hr(t,Sn,yn,En,pi)))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=.5*this.getSize(xt).length()),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Lt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Lt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Lt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Lt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Lt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Lt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Lt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Lt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Lt)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Lt=[new P,new P,new P,new P,new P,new P,new P,new P],xt=new P,di=new oi,Sn=new P,yn=new P,En=new P,Ht=new P,Vt=new P,sn=new P,Qn=new P,pi=new P,fi=new P,on=new P;function hr(r,e,t,n,i){for(let a=0,s=r.length-3;a<=s;a+=3){on.fromArray(r,a);const l=i.x*Math.abs(on.x)+i.y*Math.abs(on.y)+i.z*Math.abs(on.z),h=e.dot(on),o=t.dot(on),c=n.dot(on);if(Math.max(-Math.max(h,o,c),Math.min(h,o,c))>l)return!1}return!0}const _o=new oi,ei=new P,ur=new P;class Xi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):_o.setFromPoints(e).getCenter(n);let i=0;for(let a=0,s=e.length;a<s;a++)i=Math.max(i,n.distanceToSquared(e[a]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ei.subVectors(e,this.center);const t=ei.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=.5*(n-this.radius);this.center.addScaledVector(ei,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ei.copy(e.center).add(ur)),this.expandByPoint(ei.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ut=new P,dr=new P,mi=new P,Gt=new P,pr=new P,gi=new P,fr=new P;class jr{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ut)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ut.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ut.copy(this.origin).addScaledVector(this.direction,t),Ut.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){dr.copy(e).add(t).multiplyScalar(.5),mi.copy(t).sub(e).normalize(),Gt.copy(this.origin).sub(dr);const a=.5*e.distanceTo(t),s=-this.direction.dot(mi),l=Gt.dot(this.direction),h=-Gt.dot(mi),o=Gt.lengthSq(),c=Math.abs(1-s*s);let u,d,p,g;if(c>0)if(u=s*h-l,d=s*l-h,g=a*c,u>=0)if(d>=-g)if(d<=g){const x=1/c;u*=x,d*=x,p=u*(u+s*d+2*l)+d*(s*u+d+2*h)+o}else d=a,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*h)+o;else d=-a,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*h)+o;else d<=-g?(u=Math.max(0,-(-s*a+l)),d=u>0?-a:Math.min(Math.max(-a,-h),a),p=-u*u+d*(d+2*h)+o):d<=g?(u=0,d=Math.min(Math.max(-a,-h),a),p=d*(d+2*h)+o):(u=Math.max(0,-(s*a+l)),d=u>0?a:Math.min(Math.max(-a,-h),a),p=-u*u+d*(d+2*h)+o);else d=s>0?-a:a,u=Math.max(0,-(s*d+l)),p=-u*u+d*(d+2*h)+o;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(dr).addScaledVector(mi,d),p}intersectSphere(e,t){Ut.subVectors(e.center,this.origin);const n=Ut.dot(this.direction),i=Ut.dot(Ut)-n*n,a=e.radius*e.radius;if(i>a)return null;const s=Math.sqrt(a-i),l=n-s,h=n+s;return h<0?null:l<0?this.at(h,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0?!0:e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,a,s,l,h;const o=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return o>=0?(n=(e.min.x-d.x)*o,i=(e.max.x-d.x)*o):(n=(e.max.x-d.x)*o,i=(e.min.x-d.x)*o),c>=0?(a=(e.min.y-d.y)*c,s=(e.max.y-d.y)*c):(a=(e.max.y-d.y)*c,s=(e.min.y-d.y)*c),n>s||a>i?null:((a>n||isNaN(n))&&(n=a),(s<i||isNaN(i))&&(i=s),u>=0?(l=(e.min.z-d.z)*u,h=(e.max.z-d.z)*u):(l=(e.max.z-d.z)*u,h=(e.min.z-d.z)*u),n>h||l>i?null:((l>n||n!=n)&&(n=l),(h<i||i!=i)&&(i=h),i<0?null:this.at(n>=0?n:i,t)))}intersectsBox(e){return this.intersectBox(e,Ut)!==null}intersectTriangle(e,t,n,i,a){pr.subVectors(t,e),gi.subVectors(n,e),fr.crossVectors(pr,gi);let s,l=this.direction.dot(fr);if(l>0){if(i)return null;s=1}else{if(!(l<0))return null;s=-1,l=-l}Gt.subVectors(this.origin,e);const h=s*this.direction.dot(gi.crossVectors(Gt,gi));if(h<0)return null;const o=s*this.direction.dot(pr.cross(Gt));if(o<0||h+o>l)return null;const c=-s*Gt.dot(fr);return c<0?null:this.at(c/l,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(e,t,n,i,a,s,l,h,o,c,u,d,p,g,x,_){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,a,s,l,h,o,c,u,d,p,g,x,_)}set(e,t,n,i,a,s,l,h,o,c,u,d,p,g,x,_){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=a,f[5]=s,f[9]=l,f[13]=h,f[2]=o,f[6]=c,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=x,f[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Tn.setFromMatrixColumn(e,0).length(),a=1/Tn.setFromMatrixColumn(e,1).length(),s=1/Tn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*a,t[5]=n[5]*a,t[6]=n[6]*a,t[7]=0,t[8]=n[8]*s,t[9]=n[9]*s,t[10]=n[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,a=e.z,s=Math.cos(n),l=Math.sin(n),h=Math.cos(i),o=Math.sin(i),c=Math.cos(a),u=Math.sin(a);if(e.order==="XYZ"){const d=s*c,p=s*u,g=l*c,x=l*u;t[0]=h*c,t[4]=-h*u,t[8]=o,t[1]=p+g*o,t[5]=d-x*o,t[9]=-l*h,t[2]=x-d*o,t[6]=g+p*o,t[10]=s*h}else if(e.order==="YXZ"){const d=h*c,p=h*u,g=o*c,x=o*u;t[0]=d+x*l,t[4]=g*l-p,t[8]=s*o,t[1]=s*u,t[5]=s*c,t[9]=-l,t[2]=p*l-g,t[6]=x+d*l,t[10]=s*h}else if(e.order==="ZXY"){const d=h*c,p=h*u,g=o*c,x=o*u;t[0]=d-x*l,t[4]=-s*u,t[8]=g+p*l,t[1]=p+g*l,t[5]=s*c,t[9]=x-d*l,t[2]=-s*o,t[6]=l,t[10]=s*h}else if(e.order==="ZYX"){const d=s*c,p=s*u,g=l*c,x=l*u;t[0]=h*c,t[4]=g*o-p,t[8]=d*o+x,t[1]=h*u,t[5]=x*o+d,t[9]=p*o-g,t[2]=-o,t[6]=l*h,t[10]=s*h}else if(e.order==="YZX"){const d=s*h,p=s*o,g=l*h,x=l*o;t[0]=h*c,t[4]=x-d*u,t[8]=g*u+p,t[1]=u,t[5]=s*c,t[9]=-l*c,t[2]=-o*c,t[6]=p*u+g,t[10]=d-x*u}else if(e.order==="XZY"){const d=s*h,p=s*o,g=l*h,x=l*o;t[0]=h*c,t[4]=-u,t[8]=o*c,t[1]=d*u+x,t[5]=s*c,t[9]=p*u-g,t[2]=g*u-p,t[6]=l*c,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vo,e,xo)}lookAt(e,t,n){const i=this.elements;return ot.subVectors(e,t),ot.lengthSq()===0&&(ot.z=1),ot.normalize(),kt.crossVectors(n,ot),kt.lengthSq()===0&&(Math.abs(n.z)===1?ot.x+=1e-4:ot.z+=1e-4,ot.normalize(),kt.crossVectors(n,ot)),kt.normalize(),_i.crossVectors(ot,kt),i[0]=kt.x,i[4]=_i.x,i[8]=ot.x,i[1]=kt.y,i[5]=_i.y,i[9]=ot.y,i[2]=kt.z,i[6]=_i.z,i[10]=ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,a=this.elements,s=n[0],l=n[4],h=n[8],o=n[12],c=n[1],u=n[5],d=n[9],p=n[13],g=n[2],x=n[6],_=n[10],f=n[14],M=n[3],m=n[7],S=n[11],U=n[15],R=i[0],b=i[4],O=i[8],D=i[12],H=i[1],ae=i[5],w=i[9],W=i[13],Z=i[2],se=i[6],pe=i[10],K=i[14],j=i[3],Y=i[7],ue=i[11],X=i[15];return a[0]=s*R+l*H+h*Z+o*j,a[4]=s*b+l*ae+h*se+o*Y,a[8]=s*O+l*w+h*pe+o*ue,a[12]=s*D+l*W+h*K+o*X,a[1]=c*R+u*H+d*Z+p*j,a[5]=c*b+u*ae+d*se+p*Y,a[9]=c*O+u*w+d*pe+p*ue,a[13]=c*D+u*W+d*K+p*X,a[2]=g*R+x*H+_*Z+f*j,a[6]=g*b+x*ae+_*se+f*Y,a[10]=g*O+x*w+_*pe+f*ue,a[14]=g*D+x*W+_*K+f*X,a[3]=M*R+m*H+S*Z+U*j,a[7]=M*b+m*ae+S*se+U*Y,a[11]=M*O+m*w+S*pe+U*ue,a[15]=M*D+m*W+S*K+U*X,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],a=e[12],s=e[1],l=e[5],h=e[9],o=e[13],c=e[2],u=e[6],d=e[10],p=e[14];return e[3]*(+a*h*u-i*o*u-a*l*d+n*o*d+i*l*p-n*h*p)+e[7]*(+t*h*p-t*o*d+a*s*d-i*s*p+i*o*c-a*h*c)+e[11]*(+t*o*u-t*l*p-a*s*u+n*s*p+a*l*c-n*o*c)+e[15]*(-i*l*c-t*h*u+t*l*d+i*s*u-n*s*d+n*h*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],a=e[3],s=e[4],l=e[5],h=e[6],o=e[7],c=e[8],u=e[9],d=e[10],p=e[11],g=e[12],x=e[13],_=e[14],f=e[15],M=u*_*o-x*d*o+x*h*p-l*_*p-u*h*f+l*d*f,m=g*d*o-c*_*o-g*h*p+s*_*p+c*h*f-s*d*f,S=c*x*o-g*u*o+g*l*p-s*x*p-c*l*f+s*u*f,U=g*u*h-c*x*h-g*l*d+s*x*d+c*l*_-s*u*_,R=t*M+n*m+i*S+a*U;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/R;return e[0]=M*b,e[1]=(x*d*a-u*_*a-x*i*p+n*_*p+u*i*f-n*d*f)*b,e[2]=(l*_*a-x*h*a+x*i*o-n*_*o-l*i*f+n*h*f)*b,e[3]=(u*h*a-l*d*a-u*i*o+n*d*o+l*i*p-n*h*p)*b,e[4]=m*b,e[5]=(c*_*a-g*d*a+g*i*p-t*_*p-c*i*f+t*d*f)*b,e[6]=(g*h*a-s*_*a-g*i*o+t*_*o+s*i*f-t*h*f)*b,e[7]=(s*d*a-c*h*a+c*i*o-t*d*o-s*i*p+t*h*p)*b,e[8]=S*b,e[9]=(g*u*a-c*x*a-g*n*p+t*x*p+c*n*f-t*u*f)*b,e[10]=(s*x*a-g*l*a+g*n*o-t*x*o-s*n*f+t*l*f)*b,e[11]=(c*l*a-s*u*a-c*n*o+t*u*o+s*n*p-t*l*p)*b,e[12]=U*b,e[13]=(c*x*i-g*u*i+g*n*d-t*x*d-c*n*_+t*u*_)*b,e[14]=(g*l*i-s*x*i-g*n*h+t*x*h+s*n*_-t*l*_)*b,e[15]=(s*u*i-c*l*i+c*n*h-t*u*h-s*n*d+t*l*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,a=e.z;return t[0]*=n,t[4]*=i,t[8]*=a,t[1]*=n,t[5]*=i,t[9]*=a,t[2]*=n,t[6]*=i,t[10]*=a,t[3]*=n,t[7]*=i,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),a=1-n,s=e.x,l=e.y,h=e.z,o=a*s,c=a*l;return this.set(o*s+n,o*l-i*h,o*h+i*l,0,o*l+i*h,c*l+n,c*h-i*s,0,o*h-i*l,c*h+i*s,a*h*h+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,a,s){return this.set(1,n,a,0,e,1,s,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,a=t._x,s=t._y,l=t._z,h=t._w,o=a+a,c=s+s,u=l+l,d=a*o,p=a*c,g=a*u,x=s*c,_=s*u,f=l*u,M=h*o,m=h*c,S=h*u,U=n.x,R=n.y,b=n.z;return i[0]=(1-(x+f))*U,i[1]=(p+S)*U,i[2]=(g-m)*U,i[3]=0,i[4]=(p-S)*R,i[5]=(1-(d+f))*R,i[6]=(_+M)*R,i[7]=0,i[8]=(g+m)*b,i[9]=(_-M)*b,i[10]=(1-(d+x))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let a=Tn.set(i[0],i[1],i[2]).length();const s=Tn.set(i[4],i[5],i[6]).length(),l=Tn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(a=-a),e.x=i[12],e.y=i[13],e.z=i[14],Mt.copy(this);const h=1/a,o=1/s,c=1/l;return Mt.elements[0]*=h,Mt.elements[1]*=h,Mt.elements[2]*=h,Mt.elements[4]*=o,Mt.elements[5]*=o,Mt.elements[6]*=o,Mt.elements[8]*=c,Mt.elements[9]*=c,Mt.elements[10]*=c,t.setFromRotationMatrix(Mt),n.x=a,n.y=s,n.z=l,this}makePerspective(e,t,n,i,a,s,l=2e3){const h=this.elements,o=2*a/(t-e),c=2*a/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(l===kn)p=-(s+a)/(s-a),g=-2*s*a/(s-a);else{if(l!==Vi)throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);p=-s/(s-a),g=-s*a/(s-a)}return h[0]=o,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=d,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,n,i,a,s,l=2e3){const h=this.elements,o=1/(t-e),c=1/(n-i),u=1/(s-a),d=(t+e)*o,p=(n+i)*c;let g,x;if(l===kn)g=(s+a)*u,x=-2*u;else{if(l!==Vi)throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);g=a*u,x=-1*u}return h[0]=2*o,h[4]=0,h[8]=0,h[12]=-d,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-p,h[2]=0,h[6]=0,h[10]=x,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Tn=new P,Mt=new Ve,vo=new P(0,0,0),xo=new P(1,1,1),kt=new P,_i=new P,ot=new P,ya=new Ve,Ea=new _n;class Ct{constructor(e=0,t=0,n=0,i=Ct.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,a=i[0],s=i[4],l=i[8],h=i[1],o=i[5],c=i[9],u=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(l,p),this._z=Math.atan2(h,o)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(nt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(h,a));break;case"ZYX":this._y=Math.asin(-nt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(h,a)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,o),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,p));break;case"XZY":this._z=Math.asin(-nt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-c,p),this._y=0)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ya.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ya,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ea.setFromEuler(this),this.setFromQuaternion(Ea,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ct.DEFAULT_ORDER="XYZ";class Ss{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return!!(this.mask&e.mask)}isEnabled(e){return!!(this.mask&1<<e)}}let Mo=0;const Ta=new P,bn=new _n,Dt=new Ve,vi=new P,ti=new P,So=new P,yo=new _n,ba=new P(1,0,0),Aa=new P(0,1,0),wa=new P(0,0,1),Eo={type:"added"},To={type:"removed"},mr={type:"childadded",child:null},gr={type:"childremoved",child:null};class Ke extends vn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mo++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const e=new P,t=new Ct,n=new _n,i=new P(1,1,1);t._onChange(function(){n.setFromEuler(t,!1)}),n._onChange(function(){t.setFromQuaternion(n,void 0,!1)}),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new Te}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.multiply(bn),this}rotateOnWorldAxis(e,t){return bn.setFromAxisAngle(e,t),this.quaternion.premultiply(bn),this}rotateX(e){return this.rotateOnAxis(ba,e)}rotateY(e){return this.rotateOnAxis(Aa,e)}rotateZ(e){return this.rotateOnAxis(wa,e)}translateOnAxis(e,t){return Ta.copy(e).applyQuaternion(this.quaternion),this.position.add(Ta.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ba,e)}translateY(e){return this.translateOnAxis(Aa,e)}translateZ(e){return this.translateOnAxis(wa,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Dt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?vi.copy(e):vi.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ti.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dt.lookAt(ti,vi,this.up):Dt.lookAt(vi,ti,this.up),this.quaternion.setFromRotationMatrix(Dt),i&&(Dt.extractRotation(i.matrixWorld),bn.setFromRotationMatrix(Dt),this.quaternion.premultiply(bn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this||e&&e.isObject3D&&(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Eo),mr.child=e,this.dispatchEvent(mr),mr.child=null),this}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(To),gr.child=e,this.dispatchEvent(gr),gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Dt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Dt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Dt),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let a=0,s=i.length;a<s;a++)i[a].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ti,e,So),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ti,yo,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const a=t[n];a.matrixWorldAutoUpdate!==!0&&e!==!0||a.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let a=0,s=i.length;a<s;a++){const l=i[a];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};function a(l,h){return l[h.uuid]===void 0&&(l[h.uuid]=h.toJSON(e)),h.uuid}if(i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()})),this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=a(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const h=l.shapes;if(Array.isArray(h))for(let o=0,c=h.length;o<c;o++){const u=h[o];a(e.shapes,u)}else a(e.shapes,h)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let h=0,o=this.material.length;h<o;h++)l.push(a(e.materials,this.material[h]));i.material=l}else i.material=a(e.materials,this.material);if(this.children.length>0){i.children=[];for(let l=0;l<this.children.length;l++)i.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let l=0;l<this.animations.length;l++){const h=this.animations[l];i.animations.push(a(e.animations,h))}}if(t){const l=s(e.geometries),h=s(e.materials),o=s(e.textures),c=s(e.images),u=s(e.shapes),d=s(e.skeletons),p=s(e.animations),g=s(e.nodes);l.length>0&&(n.geometries=l),h.length>0&&(n.materials=h),o.length>0&&(n.textures=o),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function s(l){const h=[];for(const o in l){const c=l[o];delete c.metadata,h.push(c)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Ke.DEFAULT_UP=new P(0,1,0),Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0,Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const St=new P,Nt=new P,_r=new P,It=new P,An=new P,wn=new P,Ra=new P,vr=new P,xr=new P,Mr=new P;class At{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),St.subVectors(e,t),i.cross(St);const a=i.lengthSq();return a>0?i.multiplyScalar(1/Math.sqrt(a)):i.set(0,0,0)}static getBarycoord(e,t,n,i,a){St.subVectors(i,t),Nt.subVectors(n,t),_r.subVectors(e,t);const s=St.dot(St),l=St.dot(Nt),h=St.dot(_r),o=Nt.dot(Nt),c=Nt.dot(_r),u=s*o-l*l;if(u===0)return a.set(0,0,0),null;const d=1/u,p=(o*h-l*c)*d,g=(s*c-l*h)*d;return a.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,It)!==null&&It.x>=0&&It.y>=0&&It.x+It.y<=1}static getInterpolation(e,t,n,i,a,s,l,h){return this.getBarycoord(e,t,n,i,It)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(a,It.x),h.addScaledVector(s,It.y),h.addScaledVector(l,It.z),h)}static isFrontFacing(e,t,n,i){return St.subVectors(n,t),Nt.subVectors(e,t),St.cross(Nt).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return St.subVectors(this.c,this.b),Nt.subVectors(this.a,this.b),.5*St.cross(Nt).length()}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return At.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return At.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,a){return At.getInterpolation(e,this.a,this.b,this.c,t,n,i,a)}containsPoint(e){return At.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return At.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,a=this.c;let s,l;An.subVectors(i,n),wn.subVectors(a,n),vr.subVectors(e,n);const h=An.dot(vr),o=wn.dot(vr);if(h<=0&&o<=0)return t.copy(n);xr.subVectors(e,i);const c=An.dot(xr),u=wn.dot(xr);if(c>=0&&u<=c)return t.copy(i);const d=h*u-c*o;if(d<=0&&h>=0&&c<=0)return s=h/(h-c),t.copy(n).addScaledVector(An,s);Mr.subVectors(e,a);const p=An.dot(Mr),g=wn.dot(Mr);if(g>=0&&p<=g)return t.copy(a);const x=p*o-h*g;if(x<=0&&o>=0&&g<=0)return l=o/(o-g),t.copy(n).addScaledVector(wn,l);const _=c*g-p*u;if(_<=0&&u-c>=0&&p-g>=0)return Ra.subVectors(a,i),l=(u-c)/(u-c+(p-g)),t.copy(i).addScaledVector(Ra,l);const f=1/(_+x+d);return s=x*f,l=d*f,t.copy(n).addScaledVector(An,s).addScaledVector(wn,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ys={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wt={h:0,s:0,l:0},xi={h:0,s:0,l:0};function Sr(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+6*(e-r)*t:t<.5?e:t<2/3?r+6*(e-r)*(2/3-t):r}class Ne{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(255&e)/255,Oe.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Oe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Oe.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Oe.workingColorSpace){if(e=lo(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+t):n+t-n*t,s=2*n-a;this.r=Sr(s,a,e+1/3),this.g=Sr(s,a,e),this.b=Sr(s,a,e-1/3)}return Oe.toWorkingColorSpace(this,i),this}setStyle(e,t=Tt){function n(a){a!==void 0&&parseFloat(a)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=i[1],l=i[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=i[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tt){const n=ys[e.toLowerCase()];return n!==void 0&&this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Bn(e.r),this.g=Bn(e.g),this.b=Bn(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tt){return Oe.fromWorkingColorSpace(Qe.copy(this),e),65536*Math.round(nt(255*Qe.r,0,255))+256*Math.round(nt(255*Qe.g,0,255))+Math.round(nt(255*Qe.b,0,255))}getHexString(e=Tt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Oe.workingColorSpace){Oe.fromWorkingColorSpace(Qe.copy(this),t);const n=Qe.r,i=Qe.g,a=Qe.b,s=Math.max(n,i,a),l=Math.min(n,i,a);let h,o;const c=(l+s)/2;if(l===s)h=0,o=0;else{const u=s-l;switch(o=c<=.5?u/(s+l):u/(2-s-l),s){case n:h=(i-a)/u+(i<a?6:0);break;case i:h=(a-n)/u+2;break;case a:h=(n-i)/u+4}h/=6}return e.h=h,e.s=o,e.l=c,e}getRGB(e,t=Oe.workingColorSpace){return Oe.fromWorkingColorSpace(Qe.copy(this),t),e.r=Qe.r,e.g=Qe.g,e.b=Qe.b,e}getStyle(e=Tt){Oe.fromWorkingColorSpace(Qe.copy(this),e);const t=Qe.r,n=Qe.g,i=Qe.b;return e!==Tt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(255*t)},${Math.round(255*n)},${Math.round(255*i)})`}offsetHSL(e,t,n){return this.getHSL(Wt),this.setHSL(Wt.h+e,Wt.s+t,Wt.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(xi);const n=ar(Wt.h,xi.h,t),i=ar(Wt.s,xi.s,t),a=ar(Wt.l,xi.l,t);return this.setHSL(n,i,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,a=e.elements;return this.r=a[0]*t+a[3]*n+a[6]*i,this.g=a[1]*t+a[4]*n+a[7]*i,this.b=a[2]*t+a[5]*n+a[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qe=new Ne;Ne.NAMES=ys;let bo=0;class Xn extends vn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bo++}),this.uuid=si(),this.name="",this.type="Material",this.blending=1,this.side=Jt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xn,this.stencilZFail=xn,this.stencilZPass=xn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0)continue;const i=this[t];i!==void 0&&(i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n)}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};function i(a){const s=[];for(const l in a){const h=a[l];delete h.metadata,s.push(h)}return s}if(n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==Jt&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==xn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==xn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==xn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData),t){const a=i(e.textures),s=i(e.images);a.length>0&&(n.textures=a),s.length>0&&(n.images=s)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let a=0;a!==i;++a)n[a]=t[a].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Es extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ge=new P,Mi=new ye;class Rt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=35044,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Kt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){var e;return(e="THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead.")in va||(va[e]=!0),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,a=this.itemSize;i<a;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Mi.fromBufferAttribute(this,t),Mi.applyMatrix3(e),this.setXY(t,Mi.x,Mi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix3(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyMatrix4(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.applyNormalMatrix(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ge.fromBufferAttribute(this,t),Ge.transformDirection(e),this.setXYZ(t,Ge.x,Ge.y,Ge.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,a){return e*=this.itemSize,this.normalized&&(t=rt(t,this.array),n=rt(n,this.array),i=rt(i,this.array),a=rt(a,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}}class Ts extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class bs extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Ao=0;const dt=new Ve,yr=new Ke,Rn=new P,lt=new oi,ni=new oi,je=new P;class Bt extends vn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ao++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_s(e)?bs:Ts)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Te().getNormalMatrix(e);n.applyNormalMatrix(a),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return dt.makeRotationFromQuaternion(e),this.applyMatrix4(dt),this}rotateX(e){return dt.makeRotationX(e),this.applyMatrix4(dt),this}rotateY(e){return dt.makeRotationY(e),this.applyMatrix4(dt),this}rotateZ(e){return dt.makeRotationZ(e),this.applyMatrix4(dt),this}translate(e,t,n){return dt.makeTranslation(e,t,n),this.applyMatrix4(dt),this}scale(e,t,n){return dt.makeScale(e,t,n),this.applyMatrix4(dt),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Rn).negate(),this.translate(Rn.x,Rn.y,Rn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const a=e[n];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new yt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const a=t[n];lt.setFromBufferAttribute(a),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,lt.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,lt.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(lt.min),this.boundingBox.expandByPoint(lt.max))}}else this.boundingBox.makeEmpty();isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)this.boundingSphere.set(new P,1/0);else if(e){const n=this.boundingSphere.center;if(lt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(je.addVectors(lt.min,ni.min),lt.expandByPoint(je),je.addVectors(lt.max,ni.max),lt.expandByPoint(je)):(lt.expandByPoint(ni.min),lt.expandByPoint(ni.max))}lt.getCenter(n);let i=0;for(let a=0,s=e.count;a<s;a++)je.fromBufferAttribute(e,a),i=Math.max(i,n.distanceToSquared(je));if(t)for(let a=0,s=t.length;a<s;a++){const l=t[a],h=this.morphTargetsRelative;for(let o=0,c=l.count;o<c;o++)je.fromBufferAttribute(l,o),h&&(Rn.fromBufferAttribute(e,o),je.add(Rn)),i=Math.max(i,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0)return;const n=t.position,i=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rt(new Float32Array(4*n.count),4));const s=this.getAttribute("tangent"),l=[],h=[];for(let O=0;O<n.count;O++)l[O]=new P,h[O]=new P;const o=new P,c=new P,u=new P,d=new ye,p=new ye,g=new ye,x=new P,_=new P;function f(O,D,H){o.fromBufferAttribute(n,O),c.fromBufferAttribute(n,D),u.fromBufferAttribute(n,H),d.fromBufferAttribute(a,O),p.fromBufferAttribute(a,D),g.fromBufferAttribute(a,H),c.sub(o),u.sub(o),p.sub(d),g.sub(d);const ae=1/(p.x*g.y-g.x*p.y);isFinite(ae)&&(x.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(ae),_.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(ae),l[O].add(x),l[D].add(x),l[H].add(x),h[O].add(_),h[D].add(_),h[H].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let O=0,D=M.length;O<D;++O){const H=M[O],ae=H.start;for(let w=ae,W=ae+H.count;w<W;w+=3)f(e.getX(w+0),e.getX(w+1),e.getX(w+2))}const m=new P,S=new P,U=new P,R=new P;function b(O){U.fromBufferAttribute(i,O),R.copy(U);const D=l[O];m.copy(D),m.sub(U.multiplyScalar(U.dot(D))).normalize(),S.crossVectors(R,D);const H=S.dot(h[O])<0?-1:1;s.setXYZW(O,m.x,m.y,m.z,H)}for(let O=0,D=M.length;O<D;++O){const H=M[O],ae=H.start;for(let w=ae,W=ae+H.count;w<W;w+=3)b(e.getX(w+0)),b(e.getX(w+1)),b(e.getX(w+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rt(new Float32Array(3*t.count),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,a=new P,s=new P,l=new P,h=new P,o=new P,c=new P,u=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),x=e.getX(d+1),_=e.getX(d+2);i.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),c.subVectors(s,a),u.subVectors(i,a),c.cross(u),l.fromBufferAttribute(n,g),h.fromBufferAttribute(n,x),o.fromBufferAttribute(n,_),l.add(c),h.add(c),o.add(c),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(x,h.x,h.y,h.z),n.setXYZ(_,o.x,o.y,o.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),a.fromBufferAttribute(t,d+1),s.fromBufferAttribute(t,d+2),c.subVectors(s,a),u.subVectors(i,a),c.cross(u),n.setXYZ(d+0,c.x,c.y,c.z),n.setXYZ(d+1,c.x,c.y,c.z),n.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)je.fromBufferAttribute(e,t),je.normalize(),e.setXYZ(t,je.x,je.y,je.z)}toNonIndexed(){function e(l,h){const o=l.array,c=l.itemSize,u=l.normalized,d=new o.constructor(h.length*c);let p=0,g=0;for(let x=0,_=h.length;x<_;x++){p=l.isInterleavedBufferAttribute?h[x]*l.data.stride+l.offset:h[x]*c;for(let f=0;f<c;f++)d[g++]=o[p++]}return new Rt(d,c,u)}if(this.index===null)return this;const t=new Bt,n=this.index.array,i=this.attributes;for(const l in i){const h=e(i[l],n);t.setAttribute(l,h)}const a=this.morphAttributes;for(const l in a){const h=[],o=a[l];for(let c=0,u=o.length;c<u;c++){const d=e(o[c],n);h.push(d)}t.morphAttributes[l]=h}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let l=0,h=s.length;l<h;l++){const o=s[l];t.addGroup(o.start,o.count,o.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const o in h)h[o]!==void 0&&(e[o]=h[o]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const h in n){const o=n[h];e.data.attributes[h]=o.toJSON(e.data)}const i={};let a=!1;for(const h in this.morphAttributes){const o=this.morphAttributes[h],c=[];for(let u=0,d=o.length;u<d;u++){const p=o[u];c.push(p.toJSON(e.data))}c.length>0&&(i[h]=c,a=!0)}a&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const o in i){const c=i[o];this.setAttribute(o,c.clone(t))}const a=e.morphAttributes;for(const o in a){const c=[],u=a[o];for(let d=0,p=u.length;d<p;d++)c.push(u[d].clone(t));this.morphAttributes[o]=c}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let o=0,c=s.length;o<c;o++){const u=s[o];this.addGroup(u.start,u.count,u.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ca=new Ve,ln=new jr,Si=new Xi,Pa=new P,Cn=new P,Pn=new P,Ln=new P,Er=new P,yi=new P,Ei=new ye,Ti=new ye,bi=new ye,La=new P,Ua=new P,Da=new P,Ai=new P,wi=new P;class wt extends Ke{constructor(e=new Bt,t=new Es){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,a=n.morphAttributes.position,s=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const l=this.morphTargetInfluences;if(a&&l){yi.set(0,0,0);for(let h=0,o=a.length;h<o;h++){const c=l[h],u=a[h];c!==0&&(Er.fromBufferAttribute(u,e),s?yi.addScaledVector(Er,c):yi.addScaledVector(Er.sub(t),c))}t.add(yi)}return t}raycast(e,t){const n=this.geometry,i=this.material,a=this.matrixWorld;if(i!==void 0){if(n.boundingSphere===null&&n.computeBoundingSphere(),Si.copy(n.boundingSphere),Si.applyMatrix4(a),ln.copy(e.ray).recast(e.near),Si.containsPoint(ln.origin)===!1&&(ln.intersectSphere(Si,Pa)===null||ln.origin.distanceToSquared(Pa)>(e.far-e.near)**2))return;Ca.copy(a).invert(),ln.copy(e.ray).applyMatrix4(Ca),n.boundingBox!==null&&ln.intersectsBox(n.boundingBox)===!1||this._computeIntersections(e,t,ln)}}_computeIntersections(e,t,n){let i;const a=this.geometry,s=this.material,l=a.index,h=a.attributes.position,o=a.attributes.uv,c=a.attributes.uv1,u=a.attributes.normal,d=a.groups,p=a.drawRange;if(l!==null)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const _=d[g],f=s[_.materialIndex];for(let M=Math.max(_.start,p.start),m=Math.min(l.count,Math.min(_.start+_.count,p.start+p.count));M<m;M+=3)i=Ri(this,f,e,n,o,c,u,l.getX(M),l.getX(M+1),l.getX(M+2)),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}else for(let g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);g<x;g+=3)i=Ri(this,s,e,n,o,c,u,l.getX(g),l.getX(g+1),l.getX(g+2)),i&&(i.faceIndex=Math.floor(g/3),t.push(i));else if(h!==void 0)if(Array.isArray(s))for(let g=0,x=d.length;g<x;g++){const _=d[g],f=s[_.materialIndex];for(let M=Math.max(_.start,p.start),m=Math.min(h.count,Math.min(_.start+_.count,p.start+p.count));M<m;M+=3)i=Ri(this,f,e,n,o,c,u,M,M+1,M+2),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,t.push(i))}else for(let g=Math.max(0,p.start),x=Math.min(h.count,p.start+p.count);g<x;g+=3)i=Ri(this,s,e,n,o,c,u,g,g+1,g+2),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}function Ri(r,e,t,n,i,a,s,l,h,o){r.getVertexPosition(l,Cn),r.getVertexPosition(h,Pn),r.getVertexPosition(o,Ln);const c=function(u,d,p,g,x,_,f,M){let m;if(m=d.side===at?g.intersectTriangle(f,_,x,!0,M):g.intersectTriangle(x,_,f,d.side===Jt,M),m===null)return null;wi.copy(M),wi.applyMatrix4(u.matrixWorld);const S=p.ray.origin.distanceTo(wi);return S<p.near||S>p.far?null:{distance:S,point:wi.clone(),object:u}}(r,e,t,n,Cn,Pn,Ln,Ai);if(c){i&&(Ei.fromBufferAttribute(i,l),Ti.fromBufferAttribute(i,h),bi.fromBufferAttribute(i,o),c.uv=At.getInterpolation(Ai,Cn,Pn,Ln,Ei,Ti,bi,new ye)),a&&(Ei.fromBufferAttribute(a,l),Ti.fromBufferAttribute(a,h),bi.fromBufferAttribute(a,o),c.uv1=At.getInterpolation(Ai,Cn,Pn,Ln,Ei,Ti,bi,new ye)),s&&(La.fromBufferAttribute(s,l),Ua.fromBufferAttribute(s,h),Da.fromBufferAttribute(s,o),c.normal=At.getInterpolation(Ai,Cn,Pn,Ln,La,Ua,Da,new P),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const u={a:l,b:h,c:o,normal:new P,materialIndex:0};At.getNormal(Cn,Pn,Ln,u.normal),c.face=u}return c}class jn extends Bt{constructor(e=1,t=1,n=1,i=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:a,depthSegments:s};const l=this;i=Math.floor(i),a=Math.floor(a),s=Math.floor(s);const h=[],o=[],c=[],u=[];let d=0,p=0;function g(x,_,f,M,m,S,U,R,b,O,D){const H=S/b,ae=U/O,w=S/2,W=U/2,Z=R/2,se=b+1,pe=O+1;let K=0,j=0;const Y=new P;for(let ue=0;ue<pe;ue++){const X=ue*ae-W;for(let J=0;J<se;J++){const me=J*H-w;Y[x]=me*M,Y[_]=X*m,Y[f]=Z,o.push(Y.x,Y.y,Y.z),Y[x]=0,Y[_]=0,Y[f]=R>0?1:-1,c.push(Y.x,Y.y,Y.z),u.push(J/b),u.push(1-ue/O),K+=1}}for(let ue=0;ue<O;ue++)for(let X=0;X<b;X++){const J=d+X+se*ue,me=d+X+se*(ue+1),le=d+(X+1)+se*(ue+1),T=d+(X+1)+se*ue;h.push(J,me,T),h.push(me,le,T),j+=6}l.addGroup(p,j,D),p+=j,d+=K}g("z","y","x",-1,-1,n,t,e,s,a,0),g("z","y","x",1,-1,n,t,-e,s,a,1),g("x","z","y",1,1,e,n,t,i,s,2),g("x","z","y",1,-1,e,n,-t,i,s,3),g("x","y","z",1,-1,e,t,n,i,a,4),g("x","y","z",-1,-1,e,t,-n,i,a,5),this.setIndex(h),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Wn(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?e[t][n]=null:e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function et(r){const e={};for(let t=0;t<r.length;t++){const n=Wn(r[t]);for(const i in n)e[i]=n[i]}return e}function As(r){return r.getRenderTarget()===null?r.outputColorSpace:Oe.workingColorSpace}const wo={clone:Wn,merge:et};class $t extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,this.fragmentShader=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wn(e.uniforms),this.uniformsGroups=function(t){const n=[];for(let i=0;i<t.length;i++)n.push(t[i].clone());return n}(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ws extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xt=new P,Na=new ye,Ia=new ye;class ft extends ws{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=2*Br*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(.5*Oi*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return 2*Br*Math.atan(Math.tan(.5*Oi*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xt.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xt.x,Xt.y).multiplyScalar(-e/Xt.z),Xt.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xt.x,Xt.y).multiplyScalar(-e/Xt.z)}getViewSize(e,t){return this.getViewBounds(e,Na,Ia),t.subVectors(Ia,Na)}setViewOffset(e,t,n,i,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(.5*Oi*this.fov)/this.zoom,n=2*t,i=this.aspect*n,a=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const h=s.fullWidth,o=s.fullHeight;a+=s.offsetX*i/h,t-=s.offsetY*n/o,i*=s.width/h,n*=s.height/o}const l=this.filmOffset;l!==0&&(a+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Un=-90;class Ro extends Ke{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new ft(Un,1,e,t);i.layers=this.layers,this.add(i);const a=new ft(Un,1,e,t);a.layers=this.layers,this.add(a);const s=new ft(Un,1,e,t);s.layers=this.layers,this.add(s);const l=new ft(Un,1,e,t);l.layers=this.layers,this.add(l);const h=new ft(Un,1,e,t);h.layers=this.layers,this.add(h);const o=new ft(Un,1,e,t);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,a,s,l,h]=t;for(const o of t)this.remove(o);if(e===kn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else{if(e!==Vi)throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1)}for(const o of t)this.add(o),o.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,l,h,o,c]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,a),e.setRenderTarget(n,1,i),e.render(t,s),e.setRenderTarget(n,2,i),e.render(t,l),e.setRenderTarget(n,3,i),e.render(t,h),e.setRenderTarget(n,4,i),e.render(t,o),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,i),e.render(t,c),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Rs extends st{constructor(e,t,n,i,a,s,l,h,o,c){super(e=e!==void 0?e:[],t=t!==void 0?t:Hn,n,i,a,s,l,h,o,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Co extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Rs(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new jn(5,5,5),a=new $t({name:"CubemapFromEquirect",uniforms:Wn(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:at,blending:0});a.uniforms.tEquirect.value=t;const s=new wt(i,a),l=t.minFilter;return t.minFilter===ri&&(t.minFilter=pt),new Ro(1,10,this).update(e,s),t.minFilter=l,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,n,i){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,n,i);e.setRenderTarget(a)}}const Tr=new P,Po=new P,Lo=new Te;class jt{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Tr.subVectors(n,t).cross(Po.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Tr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/i;return a<0||a>1?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lo.getNormalMatrix(e),i=this.coplanarPoint(Tr).applyMatrix4(e),a=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cn=new Xi,Ci=new P;class Yr{constructor(e=new jt,t=new jt,n=new jt,i=new jt,a=new jt,s=new jt){this.planes=[e,t,n,i,a,s]}set(e,t,n,i,a,s){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(n),l[3].copy(i),l[4].copy(a),l[5].copy(s),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=2e3){const n=this.planes,i=e.elements,a=i[0],s=i[1],l=i[2],h=i[3],o=i[4],c=i[5],u=i[6],d=i[7],p=i[8],g=i[9],x=i[10],_=i[11],f=i[12],M=i[13],m=i[14],S=i[15];if(n[0].setComponents(h-a,d-o,_-p,S-f).normalize(),n[1].setComponents(h+a,d+o,_+p,S+f).normalize(),n[2].setComponents(h+s,d+c,_+g,S+M).normalize(),n[3].setComponents(h-s,d-c,_-g,S-M).normalize(),n[4].setComponents(h-l,d-u,_-x,S-m).normalize(),t===kn)n[5].setComponents(h+l,d+u,_+x,S+m).normalize();else{if(t!==Vi)throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);n[5].setComponents(l,u,x,m).normalize()}return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),cn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),cn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(cn)}intersectsSprite(e){return cn.center.set(0,0,0),cn.radius=.7071067811865476,cn.applyMatrix4(e.matrixWorld),this.intersectsSphere(cn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ci.x=i.normal.x>0?e.max.x:e.min.x,Ci.y=i.normal.y>0?e.max.y:e.min.y,Ci.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ci)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Cs(){let r=null,e=!1,t=null,n=null;function i(a,s){t(a,s),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Uo(r,e){const t=e.isWebGL2,n=new WeakMap;return{get:function(i){return i.isInterleavedBufferAttribute&&(i=i.data),n.get(i)},remove:function(i){i.isInterleavedBufferAttribute&&(i=i.data);const a=n.get(i);a&&(r.deleteBuffer(a.buffer),n.delete(i))},update:function(i,a){if(i.isGLBufferAttribute){const l=n.get(i);return void((!l||l.version<i.version)&&n.set(i,{buffer:i.buffer,type:i.type,bytesPerElement:i.elementSize,version:i.version}))}i.isInterleavedBufferAttribute&&(i=i.data);const s=n.get(i);if(s===void 0)n.set(i,function(l,h){const o=l.array,c=l.usage,u=o.byteLength,d=r.createBuffer();let p;if(r.bindBuffer(h,d),r.bufferData(h,o,c),l.onUploadCallback(),o instanceof Float32Array)p=r.FLOAT;else if(o instanceof Uint16Array)if(l.isFloat16BufferAttribute){if(!t)throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");p=r.HALF_FLOAT}else p=r.UNSIGNED_SHORT;else if(o instanceof Int16Array)p=r.SHORT;else if(o instanceof Uint32Array)p=r.UNSIGNED_INT;else if(o instanceof Int32Array)p=r.INT;else if(o instanceof Int8Array)p=r.BYTE;else if(o instanceof Uint8Array)p=r.UNSIGNED_BYTE;else{if(!(o instanceof Uint8ClampedArray))throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);p=r.UNSIGNED_BYTE}return{buffer:d,type:p,bytesPerElement:o.BYTES_PER_ELEMENT,version:l.version,size:u}}(i,a));else if(s.version<i.version){if(s.size!==i.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");(function(l,h,o){const c=h.array,u=h._updateRange,d=h.updateRanges;if(r.bindBuffer(o,l),u.count===-1&&d.length===0&&r.bufferSubData(o,0,c),d.length!==0){for(let p=0,g=d.length;p<g;p++){const x=d[p];t?r.bufferSubData(o,x.start*c.BYTES_PER_ELEMENT,c,x.start,x.count):r.bufferSubData(o,x.start*c.BYTES_PER_ELEMENT,c.subarray(x.start,x.start+x.count))}h.clearUpdateRanges()}u.count!==-1&&(t?r.bufferSubData(o,u.offset*c.BYTES_PER_ELEMENT,c,u.offset,u.count):r.bufferSubData(o,u.offset*c.BYTES_PER_ELEMENT,c.subarray(u.offset,u.offset+u.count)),u.count=-1),h.onUploadCallback()})(s.buffer,i,a),s.version=i.version}}}}class ji extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const a=e/2,s=t/2,l=Math.floor(n),h=Math.floor(i),o=l+1,c=h+1,u=e/l,d=t/h,p=[],g=[],x=[],_=[];for(let f=0;f<c;f++){const M=f*d-s;for(let m=0;m<o;m++){const S=m*u-a;g.push(S,-M,0),x.push(0,0,1),_.push(m/l),_.push(1-f/h)}}for(let f=0;f<h;f++)for(let M=0;M<l;M++){const m=M+o*f,S=M+o*(f+1),U=M+1+o*(f+1),R=M+1+o*f;p.push(m,S,R),p.push(S,U,R)}this.setIndex(p),this.setAttribute("position",new yt(g,3)),this.setAttribute("normal",new yt(x,3)),this.setAttribute("uv",new yt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ji(e.width,e.height,e.widthSegments,e.heightSegments)}}const Ee={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},he={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Te}},envmap:{envMap:{value:null},envMapRotation:{value:new Te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Te},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0},uvTransform:{value:new Te}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Te},alphaMap:{value:null},alphaMapTransform:{value:new Te},alphaTest:{value:0}}},bt={basic:{uniforms:et([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:et([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:et([he.common,he.specularmap,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.fog,he.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:et([he.common,he.envmap,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.roughnessmap,he.metalnessmap,he.fog,he.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:et([he.common,he.aomap,he.lightmap,he.emissivemap,he.bumpmap,he.normalmap,he.displacementmap,he.gradientmap,he.fog,he.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:et([he.common,he.bumpmap,he.normalmap,he.displacementmap,he.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:et([he.points,he.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:et([he.common,he.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:et([he.common,he.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:et([he.common,he.bumpmap,he.normalmap,he.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:et([he.sprite,he.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Te}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:et([he.common,he.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:et([he.lights,he.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};bt.physical={uniforms:et([bt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Te},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Te},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Te},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Te},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Te},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Te},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Te}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Pi={r:0,b:0,g:0},hn=new Ct,Do=new Ve;function No(r,e,t,n,i,a,s){const l=new Ne(0);let h,o,c=a===!0?0:1,u=null,d=0,p=null;function g(x,_){x.getRGB(Pi,As(r)),n.buffers.color.setClear(Pi.r,Pi.g,Pi.b,_,s)}return{getClearColor:function(){return l},setClearColor:function(x,_=1){l.set(x),c=_,g(l,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,g(l,c)},render:function(x,_){let f=!1,M=_.isScene===!0?_.background:null;M&&M.isTexture&&(M=(_.backgroundBlurriness>0?t:e).get(M)),M===null?g(l,c):M&&M.isColor&&(g(M,1),f=!0);const m=r.xr.getEnvironmentBlendMode();m==="additive"?n.buffers.color.setClear(0,0,0,1,s):m==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(r.autoClear||f)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),M&&(M.isCubeTexture||M.mapping===ki)?(o===void 0&&(o=new wt(new jn(1,1,1),new $t({name:"BackgroundCubeMaterial",uniforms:Wn(bt.backgroundCube.uniforms),vertexShader:bt.backgroundCube.vertexShader,fragmentShader:bt.backgroundCube.fragmentShader,side:at,depthTest:!1,depthWrite:!1,fog:!1})),o.geometry.deleteAttribute("normal"),o.geometry.deleteAttribute("uv"),o.onBeforeRender=function(S,U,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(o.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(o)),hn.copy(_.backgroundRotation),hn.x*=-1,hn.y*=-1,hn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hn.y*=-1,hn.z*=-1),o.material.uniforms.envMap.value=M,o.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,o.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,o.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,o.material.uniforms.backgroundRotation.value.setFromMatrix4(Do.makeRotationFromEuler(hn)),o.material.toneMapped=Oe.getTransfer(M.colorSpace)!==Fe,u===M&&d===M.version&&p===r.toneMapping||(o.material.needsUpdate=!0,u=M,d=M.version,p=r.toneMapping),o.layers.enableAll(),x.unshift(o,o.geometry,o.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new wt(new ji(2,2),new $t({name:"BackgroundMaterial",uniforms:Wn(bt.background.uniforms),vertexShader:bt.background.vertexShader,fragmentShader:bt.background.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=Oe.getTransfer(M.colorSpace)!==Fe,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),u===M&&d===M.version&&p===r.toneMapping||(h.material.needsUpdate=!0,u=M,d=M.version,p=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null))}}}function Io(r,e,t,n){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),a=n.isWebGL2?null:e.get("OES_vertex_array_object"),s=n.isWebGL2||a!==null,l={},h=p(null);let o=h,c=!1;function u(U){return n.isWebGL2?r.bindVertexArray(U):a.bindVertexArrayOES(U)}function d(U){return n.isWebGL2?r.deleteVertexArray(U):a.deleteVertexArrayOES(U)}function p(U){const R=[],b=[],O=[];for(let D=0;D<i;D++)R[D]=0,b[D]=0,O[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:b,attributeDivisors:O,object:U,attributes:{},index:null}}function g(){const U=o.newAttributes;for(let R=0,b=U.length;R<b;R++)U[R]=0}function x(U){_(U,0)}function _(U,R){const b=o.newAttributes,O=o.enabledAttributes,D=o.attributeDivisors;b[U]=1,O[U]===0&&(r.enableVertexAttribArray(U),O[U]=1),D[U]!==R&&((n.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,R),D[U]=R)}function f(){const U=o.newAttributes,R=o.enabledAttributes;for(let b=0,O=R.length;b<O;b++)R[b]!==U[b]&&(r.disableVertexAttribArray(b),R[b]=0)}function M(U,R,b,O,D,H,ae){ae===!0?r.vertexAttribIPointer(U,R,b,D,H):r.vertexAttribPointer(U,R,b,O,D,H)}function m(){S(),c=!0,o!==h&&(o=h,u(o.object))}function S(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:function(U,R,b,O,D){let H=!1;if(s){const ae=function(w,W,Z){const se=Z.wireframe===!0;let pe=l[w.id];pe===void 0&&(pe={},l[w.id]=pe);let K=pe[W.id];K===void 0&&(K={},pe[W.id]=K);let j=K[se];return j===void 0&&(j=p(n.isWebGL2?r.createVertexArray():a.createVertexArrayOES()),K[se]=j),j}(O,b,R);o!==ae&&(o=ae,u(o.object)),H=function(w,W,Z,se){const pe=o.attributes,K=W.attributes;let j=0;const Y=Z.getAttributes();for(const ue in Y)if(Y[ue].location>=0){const X=pe[ue];let J=K[ue];if(J===void 0&&(ue==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),ue==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),X===void 0||X.attribute!==J||J&&X.data!==J.data)return!0;j++}return o.attributesNum!==j||o.index!==se}(U,O,b,D),H&&function(w,W,Z,se){const pe={},K=W.attributes;let j=0;const Y=Z.getAttributes();for(const ue in Y)if(Y[ue].location>=0){let X=K[ue];X===void 0&&(ue==="instanceMatrix"&&w.instanceMatrix&&(X=w.instanceMatrix),ue==="instanceColor"&&w.instanceColor&&(X=w.instanceColor));const J={};J.attribute=X,X&&X.data&&(J.data=X.data),pe[ue]=J,j++}o.attributes=pe,o.attributesNum=j,o.index=se}(U,O,b,D)}else{const ae=R.wireframe===!0;o.geometry===O.id&&o.program===b.id&&o.wireframe===ae||(o.geometry=O.id,o.program=b.id,o.wireframe=ae,H=!0)}D!==null&&t.update(D,r.ELEMENT_ARRAY_BUFFER),(H||c)&&(c=!1,function(ae,w,W,Z){if(n.isWebGL2===!1&&(ae.isInstancedMesh||Z.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const se=Z.attributes,pe=W.getAttributes(),K=w.defaultAttributeValues;for(const j in pe){const Y=pe[j];if(Y.location>=0){let ue=se[j];if(ue===void 0&&(j==="instanceMatrix"&&ae.instanceMatrix&&(ue=ae.instanceMatrix),j==="instanceColor"&&ae.instanceColor&&(ue=ae.instanceColor)),ue!==void 0){const X=ue.normalized,J=ue.itemSize,me=t.get(ue);if(me===void 0)continue;const le=me.buffer,T=me.type,v=me.bytesPerElement,F=n.isWebGL2===!0&&(T===r.INT||T===r.UNSIGNED_INT||ue.gpuType===gs);if(ue.isInterleavedBufferAttribute){const I=ue.data,L=I.stride,B=ue.offset;if(I.isInstancedInterleavedBuffer){for(let re=0;re<Y.locationSize;re++)_(Y.location+re,I.meshPerAttribute);ae.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=I.meshPerAttribute*I.count)}else for(let re=0;re<Y.locationSize;re++)x(Y.location+re);r.bindBuffer(r.ARRAY_BUFFER,le);for(let re=0;re<Y.locationSize;re++)M(Y.location+re,J/Y.locationSize,T,X,L*v,(B+J/Y.locationSize*re)*v,F)}else{if(ue.isInstancedBufferAttribute){for(let I=0;I<Y.locationSize;I++)_(Y.location+I,ue.meshPerAttribute);ae.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let I=0;I<Y.locationSize;I++)x(Y.location+I);r.bindBuffer(r.ARRAY_BUFFER,le);for(let I=0;I<Y.locationSize;I++)M(Y.location+I,J/Y.locationSize,T,X,J*v,J/Y.locationSize*I*v,F)}}else if(K!==void 0){const X=K[j];if(X!==void 0)switch(X.length){case 2:r.vertexAttrib2fv(Y.location,X);break;case 3:r.vertexAttrib3fv(Y.location,X);break;case 4:r.vertexAttrib4fv(Y.location,X);break;default:r.vertexAttrib1fv(Y.location,X)}}}}f()}(U,R,b,O),D!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))},reset:m,resetDefaultState:S,dispose:function(){m();for(const U in l){const R=l[U];for(const b in R){const O=R[b];for(const D in O)d(O[D].object),delete O[D];delete R[b]}delete l[U]}},releaseStatesOfGeometry:function(U){if(l[U.id]===void 0)return;const R=l[U.id];for(const b in R){const O=R[b];for(const D in O)d(O[D].object),delete O[D];delete R[b]}delete l[U.id]},releaseStatesOfProgram:function(U){for(const R in l){const b=l[R];if(b[U.id]===void 0)continue;const O=b[U.id];for(const D in O)d(O[D].object),delete O[D];delete b[U.id]}},initAttributes:g,enableAttribute:x,disableUnusedAttributes:f}}function Oo(r,e,t,n){const i=n.isWebGL2;let a;this.setMode=function(s){a=s},this.render=function(s,l){r.drawArrays(a,s,l),t.update(l,a,1)},this.renderInstances=function(s,l,h){if(h===0)return;let o,c;if(i)o=r,c="drawArraysInstanced";else if(o=e.get("ANGLE_instanced_arrays"),c="drawArraysInstancedANGLE",o===null)return;o[c](a,s,l,h),t.update(l,a,h)},this.renderMultiDraw=function(s,l,h){if(h===0)return;const o=e.get("WEBGL_multi_draw");if(o===null)for(let c=0;c<h;c++)this.render(s[c],l[c]);else{o.multiDrawArraysWEBGL(a,s,0,l,0,h);let c=0;for(let u=0;u<h;u++)c+=l[u];t.update(c,a,1)}}}function Fo(r,e,t){let n;function i(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=i(s);l!==s&&(s=l);const h=a||e.has("WEBGL_draw_buffers"),o=t.logarithmicDepthBuffer===!0,c=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),u=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),_=r.getParameter(r.MAX_VARYING_VECTORS),f=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=u>0,m=a||e.has("OES_texture_float");return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:function(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const S=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n},getMaxPrecision:i,precision:s,logarithmicDepthBuffer:o,maxTextures:c,maxVertexTextures:u,maxTextureSize:d,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:_,maxFragmentUniforms:f,vertexTextures:M,floatFragmentTextures:m,floatVertexTextures:M&&m,maxSamples:a?r.getParameter(r.MAX_SAMPLES):0}}function zo(r){const e=this;let t=null,n=0,i=!1,a=!1;const s=new jt,l=new Te,h={value:null,needsUpdate:!1};function o(c,u,d,p){const g=c!==null?c.length:0;let x=null;if(g!==0){if(x=h.value,p!==!0||x===null){const _=d+4*g,f=u.matrixWorldInverse;l.getNormalMatrix(f),(x===null||x.length<_)&&(x=new Float32Array(_));for(let M=0,m=d;M!==g;++M,m+=4)s.copy(c[M]).applyMatrix4(f,l),s.normal.toArray(x,m),x[m+3]=s.constant}h.value=x,h.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,x}this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const d=c.length!==0||u||n!==0||i;return i=u,n=c.length,d},this.beginShadows=function(){a=!0,o(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(c,u){t=o(c,u,0)},this.setState=function(c,u,d){const p=c.clippingPlanes,g=c.clipIntersection,x=c.clipShadows,_=r.get(c);if(!i||p===null||p.length===0||a&&!x)a?o(null):function(){h.value!==t&&(h.value=t,h.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}();else{const f=a?0:n,M=4*f;let m=_.clippingState||null;h.value=m,m=o(p,u,M,d);for(let S=0;S!==M;++S)m[S]=t[S];_.clippingState=m,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=f}}}function Bo(r){let e=new WeakMap;function t(i,a){return a===303?i.mapping=Hn:a===304&&(i.mapping=Vn),i}function n(i){const a=i.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture){const a=i.mapping;if(a===303||a===304){if(e.has(i))return t(e.get(i).texture,i.mapping);{const s=i.image;if(s&&s.height>0){const l=new Co(s.height);return l.fromEquirectangularTexture(r,i),e.set(i,l),i.addEventListener("dispose",n),t(l.texture,i.mapping)}return null}}}return i},dispose:function(){e=new WeakMap}}}class Ps extends ws{constructor(e=-1,t=1,n=1,i=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let a=n-e,s=n+e,l=i+t,h=i-t;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=o*this.view.offsetX,s=a+o*this.view.width,l-=c*this.view.offsetY,h=l-c*this.view.height}this.projectionMatrix.makeOrthographic(a,s,l,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oa=[.125,.215,.35,.446,.526,.582],Li=20,br=new Ps,Fa=new Ne;let Ar=null,wr=0,Rr=0;const dn=(1+Math.sqrt(5))/2,Dn=1/dn,za=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,dn,Dn),new P(0,dn,-Dn),new P(Dn,0,dn),new P(-Dn,0,dn),new P(dn,Dn,0),new P(-dn,Dn,0)];class Ba{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ar=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,n,i,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ga(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Va(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ar,wr,Rr),e.scissorTest=!1,Ui(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hn||e.mapping===Vn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ar=this._renderer.getRenderTarget(),wr=this._renderer.getActiveCubeFace(),Rr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pt,minFilter:pt,generateMipmaps:!1,type:ai,format:zt,colorSpace:Qt,depthBuffer:!1},i=Ha(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ha(e,t,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=function(s){const l=[],h=[],o=[];let c=s;const u=s-4+1+Oa.length;for(let d=0;d<u;d++){const p=Math.pow(2,c);h.push(p);let g=1/p;d>s-4?g=Oa[d-s+4-1]:d===0&&(g=0),o.push(g);const x=1/(p-2),_=-x,f=1+x,M=[_,_,f,_,f,f,_,_,f,f,_,f],m=6,S=6,U=3,R=2,b=1,O=new Float32Array(U*S*m),D=new Float32Array(R*S*m),H=new Float32Array(b*S*m);for(let w=0;w<m;w++){const W=w%3*2/3-1,Z=w>2?0:-1,se=[W,Z,0,W+2/3,Z,0,W+2/3,Z+1,0,W,Z,0,W+2/3,Z+1,0,W,Z+1,0];O.set(se,U*S*w),D.set(M,R*S*w);const pe=[w,w,w,w,w,w];H.set(pe,b*S*w)}const ae=new Bt;ae.setAttribute("position",new Rt(O,U)),ae.setAttribute("uv",new Rt(D,R)),ae.setAttribute("faceIndex",new Rt(H,b)),l.push(ae),c>4&&c--}return{lodPlanes:l,sizeLods:h,sigmas:o}}(a)),this._blurMaterial=function(s,l,h){const o=new Float32Array(Li),c=new P(0,1,0);return new $t({name:"SphericalGaussianBlur",defines:{n:Li,CUBEUV_TEXEL_WIDTH:1/l,CUBEUV_TEXEL_HEIGHT:1/h,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:o},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:c}},vertexShader:qr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}(a,e,t)}return i}_compileMaterial(e){const t=new wt(this._lodPlanes[0],e);this._renderer.compile(t,br)}_sceneToCubeUV(e,t,n,i){const a=new ft(90,1,t,n),s=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,o=h.autoClear,c=h.toneMapping;h.getClearColor(Fa),h.toneMapping=Zt,h.autoClear=!1;const u=new Es({name:"PMREM.Background",side:at,depthWrite:!1,depthTest:!1}),d=new wt(new jn,u);let p=!1;const g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,p=!0):(u.color.copy(Fa),p=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(a.up.set(0,s[x],0),a.lookAt(l[x],0,0)):_===1?(a.up.set(0,0,s[x]),a.lookAt(0,l[x],0)):(a.up.set(0,s[x],0),a.lookAt(0,0,l[x]));const f=this._cubeSize;Ui(i,_*f,x>2?f:0,f,f),h.setRenderTarget(i),p&&h.render(d,a),h.render(e,a)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=c,h.autoClear=o,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Hn||e.mapping===Vn;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ga()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Va());const a=i?this._cubemapMaterial:this._equirectMaterial,s=new wt(this._lodPlanes[0],a);a.uniforms.envMap.value=e;const l=this._cubeSize;Ui(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(s,br)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const a=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),s=za[(i-1)%za.length];this._blur(e,i-1,i,a,s)}t.autoClear=n}_blur(e,t,n,i,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,n,i,"latitudinal",a),this._halfBlur(s,e,n,n,i,"longitudinal",a)}_halfBlur(e,t,n,i,a,s,l){const h=this._renderer,o=this._blurMaterial,c=new wt(this._lodPlanes[i],o),u=o.uniforms,d=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*d):2*Math.PI/39,g=a/p,x=isFinite(a)?1+Math.floor(3*g):Li,_=[];let f=0;for(let S=0;S<Li;++S){const U=S/g,R=Math.exp(-U*U/2);_.push(R),S===0?f+=R:S<x&&(f+=2*R)}for(let S=0;S<_.length;S++)_[S]=_[S]/f;u.envMap.value=e.texture,u.samples.value=x,u.weights.value=_,u.latitudinal.value=s==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:M}=this;u.dTheta.value=p,u.mipInt.value=M-n;const m=this._sizeLods[i];Ui(t,3*m*(i>M-4?i-M+4:0),4*(this._cubeSize-m),3*m,2*m),h.setRenderTarget(t),h.render(c,br)}}function Ha(r,e,t){const n=new gn(r,e,t);return n.texture.mapping=ki,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ui(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Va(){return new $t({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qr(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ga(){return new $t({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function qr(){return`

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
	`}function Ho(r){let e=new WeakMap,t=null;function n(i){const a=i.target;a.removeEventListener("dispose",n);const s=e.get(a);s!==void 0&&(e.delete(a),s.dispose())}return{get:function(i){if(i&&i.isTexture){const a=i.mapping,s=a===303||a===304,l=a===Hn||a===Vn;if(s||l){if(i.isRenderTargetTexture&&i.needsPMREMUpdate===!0){i.needsPMREMUpdate=!1;let h=e.get(i);return t===null&&(t=new Ba(r)),h=s?t.fromEquirectangular(i,h):t.fromCubemap(i,h),e.set(i,h),h.texture}if(e.has(i))return e.get(i).texture;{const h=i.image;if(s&&h&&h.height>0||l&&h&&function(o){let c=0;const u=6;for(let d=0;d<u;d++)o[d]!==void 0&&c++;return c===u}(h)){t===null&&(t=new Ba(r));const o=s?t.fromEquirectangular(i):t.fromCubemap(i);return e.set(i,o),i.addEventListener("dispose",n),o.texture}return null}}}return i},dispose:function(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}}}function Vo(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){return t(n)}}}function Go(r,e,t,n){const i={},a=new WeakMap;function s(h){const o=h.target;o.index!==null&&e.remove(o.index);for(const u in o.attributes)e.remove(o.attributes[u]);for(const u in o.morphAttributes){const d=o.morphAttributes[u];for(let p=0,g=d.length;p<g;p++)e.remove(d[p])}o.removeEventListener("dispose",s),delete i[o.id];const c=a.get(o);c&&(e.remove(c),a.delete(o)),n.releaseStatesOfGeometry(o),o.isInstancedBufferGeometry===!0&&delete o._maxInstanceCount,t.memory.geometries--}function l(h){const o=[],c=h.index,u=h.attributes.position;let d=0;if(c!==null){const x=c.array;d=c.version;for(let _=0,f=x.length;_<f;_+=3){const M=x[_+0],m=x[_+1],S=x[_+2];o.push(M,m,m,S,S,M)}}else{if(u===void 0)return;{const x=u.array;d=u.version;for(let _=0,f=x.length/3-1;_<f;_+=3){const M=_+0,m=_+1,S=_+2;o.push(M,m,m,S,S,M)}}}const p=new(_s(o)?bs:Ts)(o,1);p.version=d;const g=a.get(h);g&&e.remove(g),a.set(h,p)}return{get:function(h,o){return i[o.id]===!0||(o.addEventListener("dispose",s),i[o.id]=!0,t.memory.geometries++),o},update:function(h){const o=h.attributes;for(const u in o)e.update(o[u],r.ARRAY_BUFFER);const c=h.morphAttributes;for(const u in c){const d=c[u];for(let p=0,g=d.length;p<g;p++)e.update(d[p],r.ARRAY_BUFFER)}},getWireframeAttribute:function(h){const o=a.get(h);if(o){const c=h.index;c!==null&&o.version<c.version&&l(h)}else l(h);return a.get(h)}}}function ko(r,e,t,n){const i=n.isWebGL2;let a,s,l;this.setMode=function(h){a=h},this.setIndex=function(h){s=h.type,l=h.bytesPerElement},this.render=function(h,o){r.drawElements(a,o,s,h*l),t.update(o,a,1)},this.renderInstances=function(h,o,c){if(c===0)return;let u,d;if(i)u=r,d="drawElementsInstanced";else if(u=e.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",u===null)return;u[d](a,o,s,h*l,c),t.update(o,a,c)},this.renderMultiDraw=function(h,o,c){if(c===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<c;d++)this.render(h[d]/l,o[d]);else{u.multiDrawElementsWEBGL(a,o,0,s,h,0,c);let d=0;for(let p=0;p<c;p++)d+=o[p];t.update(d,a,1)}}}function Wo(r){const e={frame:0,calls:0,triangles:0,points:0,lines:0};return{memory:{geometries:0,textures:0},render:e,programs:null,autoReset:!0,reset:function(){e.calls=0,e.triangles=0,e.points=0,e.lines=0},update:function(t,n,i){switch(e.calls++,n){case r.TRIANGLES:e.triangles+=i*(t/3);break;case r.LINES:e.lines+=i*(t/2);break;case r.LINE_STRIP:e.lines+=i*(t-1);break;case r.LINE_LOOP:e.lines+=i*t;break;case r.POINTS:e.points+=i*t}}}}function Xo(r,e){return r[0]-e[0]}function jo(r,e){return Math.abs(e[1])-Math.abs(r[1])}function Yo(r,e,t){const n={},i=new Float32Array(8),a=new WeakMap,s=new Ye,l=[];for(let h=0;h<8;h++)l[h]=[h,0];return{update:function(h,o,c){const u=h.morphTargetInfluences;if(e.isWebGL2===!0){const p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=p!==void 0?p.length:0;let x=a.get(o);if(x===void 0||x.count!==g){let w=function(){H.dispose(),a.delete(o),o.removeEventListener("dispose",w)};var d=w;x!==void 0&&x.texture.dispose();const _=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],S=o.morphAttributes.normal||[],U=o.morphAttributes.color||[];let R=0;_===!0&&(R=1),f===!0&&(R=2),M===!0&&(R=3);let b=o.attributes.position.count*R,O=1;b>e.maxTextureSize&&(O=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const D=new Float32Array(b*O*4*g),H=new Ms(D,b,O,g);H.type=Kt,H.needsUpdate=!0;const ae=4*R;for(let W=0;W<g;W++){const Z=m[W],se=S[W],pe=U[W],K=b*O*4*W;for(let j=0;j<Z.count;j++){const Y=j*ae;_===!0&&(s.fromBufferAttribute(Z,j),D[K+Y+0]=s.x,D[K+Y+1]=s.y,D[K+Y+2]=s.z,D[K+Y+3]=0),f===!0&&(s.fromBufferAttribute(se,j),D[K+Y+4]=s.x,D[K+Y+5]=s.y,D[K+Y+6]=s.z,D[K+Y+7]=0),M===!0&&(s.fromBufferAttribute(pe,j),D[K+Y+8]=s.x,D[K+Y+9]=s.y,D[K+Y+10]=s.z,D[K+Y+11]=pe.itemSize===4?s.w:1)}}x={count:g,texture:H,size:new ye(b,O)},a.set(o,x),o.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",h.morphTexture,t);else{let _=0;for(let M=0;M<u.length;M++)_+=u[M];const f=o.morphTargetsRelative?1:1-_;c.getUniforms().setValue(r,"morphTargetBaseInfluence",f),c.getUniforms().setValue(r,"morphTargetInfluences",u)}c.getUniforms().setValue(r,"morphTargetsTexture",x.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}else{const p=u===void 0?0:u.length;let g=n[o.id];if(g===void 0||g.length!==p){g=[];for(let m=0;m<p;m++)g[m]=[m,0];n[o.id]=g}for(let m=0;m<p;m++){const S=g[m];S[0]=m,S[1]=u[m]}g.sort(jo);for(let m=0;m<8;m++)m<p&&g[m][1]?(l[m][0]=g[m][0],l[m][1]=g[m][1]):(l[m][0]=Number.MAX_SAFE_INTEGER,l[m][1]=0);l.sort(Xo);const x=o.morphAttributes.position,_=o.morphAttributes.normal;let f=0;for(let m=0;m<8;m++){const S=l[m],U=S[0],R=S[1];U!==Number.MAX_SAFE_INTEGER&&R?(x&&o.getAttribute("morphTarget"+m)!==x[U]&&o.setAttribute("morphTarget"+m,x[U]),_&&o.getAttribute("morphNormal"+m)!==_[U]&&o.setAttribute("morphNormal"+m,_[U]),i[m]=R,f+=R):(x&&o.hasAttribute("morphTarget"+m)===!0&&o.deleteAttribute("morphTarget"+m),_&&o.hasAttribute("morphNormal"+m)===!0&&o.deleteAttribute("morphNormal"+m),i[m]=0)}const M=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,"morphTargetBaseInfluence",M),c.getUniforms().setValue(r,"morphTargetInfluences",i)}}}}function qo(r,e,t,n){let i=new WeakMap;function a(s){const l=s.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:function(s){const l=n.render.frame,h=s.geometry,o=e.get(s,h);if(i.get(o)!==l&&(e.update(o),i.set(o,l)),s.isInstancedMesh&&(s.hasEventListener("dispose",a)===!1&&s.addEventListener("dispose",a),i.get(s)!==l&&(t.update(s.instanceMatrix,r.ARRAY_BUFFER),s.instanceColor!==null&&t.update(s.instanceColor,r.ARRAY_BUFFER),i.set(s,l))),s.isSkinnedMesh){const c=s.skeleton;i.get(c)!==l&&(c.update(),i.set(c,l))}return o},dispose:function(){i=new WeakMap}}}class Ls extends st{constructor(e,t,n,i,a,s,l,h,o,c){if((c=c!==void 0?c:mn)!==mn&&c!==Gn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===mn&&(n=qt),n===void 0&&c===Gn&&(n=fn),super(null,i,a,s,l,h,c,n,o),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:tt,this.minFilter=h!==void 0?h:tt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Us=new st,Ds=new Ls(1,1);Ds.compareFunction=515;const Ns=new Ms,Is=new go,Os=new Rs,ka=[],Wa=[],Xa=new Float32Array(16),ja=new Float32Array(9),Ya=new Float32Array(4);function Yn(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let a=ka[i];if(a===void 0&&(a=new Float32Array(i),ka[i]=a),e!==0){n.toArray(a,0);for(let s=1,l=0;s!==e;++s)l+=t,r[s].toArray(a,l)}return a}function We(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Xe(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Yi(r,e){let t=Wa[e];t===void 0&&(t=new Int32Array(e),Wa[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ko(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Zo(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2fv(this.addr,e),Xe(t,e)}}function Jo(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)t[0]===e.r&&t[1]===e.g&&t[2]===e.b||(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(We(t,e))return;r.uniform3fv(this.addr,e),Xe(t,e)}}function $o(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4fv(this.addr,e),Xe(t,e)}}function Qo(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;Ya.set(n),r.uniformMatrix2fv(this.addr,!1,Ya),Xe(t,n)}}function el(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;ja.set(n),r.uniformMatrix3fv(this.addr,!1,ja),Xe(t,n)}}function tl(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(We(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Xe(t,e)}else{if(We(t,n))return;Xa.set(n),r.uniformMatrix4fv(this.addr,!1,Xa),Xe(t,n)}}function nl(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function il(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2iv(this.addr,e),Xe(t,e)}}function rl(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3iv(this.addr,e),Xe(t,e)}}function al(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4iv(this.addr,e),Xe(t,e)}}function sl(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ol(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y||(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(We(t,e))return;r.uniform2uiv(this.addr,e),Xe(t,e)}}function ll(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z||(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(We(t,e))return;r.uniform3uiv(this.addr,e),Xe(t,e)}}function cl(r,e){const t=this.cache;if(e.x!==void 0)t[0]===e.x&&t[1]===e.y&&t[2]===e.z&&t[3]===e.w||(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(We(t,e))return;r.uniform4uiv(this.addr,e),Xe(t,e)}}function hl(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);const a=this.type===r.SAMPLER_2D_SHADOW?Ds:Us;t.setTexture2D(e||a,i)}function ul(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Is,i)}function dl(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Os,i)}function pl(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Ns,i)}function fl(r,e){r.uniform1fv(this.addr,e)}function ml(r,e){const t=Yn(e,this.size,2);r.uniform2fv(this.addr,t)}function gl(r,e){const t=Yn(e,this.size,3);r.uniform3fv(this.addr,t)}function _l(r,e){const t=Yn(e,this.size,4);r.uniform4fv(this.addr,t)}function vl(r,e){const t=Yn(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xl(r,e){const t=Yn(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Ml(r,e){const t=Yn(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Sl(r,e){r.uniform1iv(this.addr,e)}function yl(r,e){r.uniform2iv(this.addr,e)}function El(r,e){r.uniform3iv(this.addr,e)}function Tl(r,e){r.uniform4iv(this.addr,e)}function bl(r,e){r.uniform1uiv(this.addr,e)}function Al(r,e){r.uniform2uiv(this.addr,e)}function wl(r,e){r.uniform3uiv(this.addr,e)}function Rl(r,e){r.uniform4uiv(this.addr,e)}function Cl(r,e,t){const n=this.cache,i=e.length,a=Yi(t,i);We(n,a)||(r.uniform1iv(this.addr,a),Xe(n,a));for(let s=0;s!==i;++s)t.setTexture2D(e[s]||Us,a[s])}function Pl(r,e,t){const n=this.cache,i=e.length,a=Yi(t,i);We(n,a)||(r.uniform1iv(this.addr,a),Xe(n,a));for(let s=0;s!==i;++s)t.setTexture3D(e[s]||Is,a[s])}function Ll(r,e,t){const n=this.cache,i=e.length,a=Yi(t,i);We(n,a)||(r.uniform1iv(this.addr,a),Xe(n,a));for(let s=0;s!==i;++s)t.setTextureCube(e[s]||Os,a[s])}function Ul(r,e,t){const n=this.cache,i=e.length,a=Yi(t,i);We(n,a)||(r.uniform1iv(this.addr,a),Xe(n,a));for(let s=0;s!==i;++s)t.setTexture2DArray(e[s]||Ns,a[s])}class Dl{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=function(i){switch(i){case 5126:return Ko;case 35664:return Zo;case 35665:return Jo;case 35666:return $o;case 35674:return Qo;case 35675:return el;case 35676:return tl;case 5124:case 35670:return nl;case 35667:case 35671:return il;case 35668:case 35672:return rl;case 35669:case 35673:return al;case 5125:return sl;case 36294:return ol;case 36295:return ll;case 36296:return cl;case 35678:case 36198:case 36298:case 36306:case 35682:return hl;case 35679:case 36299:case 36307:return ul;case 35680:case 36300:case 36308:case 36293:return dl;case 36289:case 36303:case 36311:case 36292:return pl}}(t.type)}}class Nl{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=function(i){switch(i){case 5126:return fl;case 35664:return ml;case 35665:return gl;case 35666:return _l;case 35674:return vl;case 35675:return xl;case 35676:return Ml;case 5124:case 35670:return Sl;case 35667:case 35671:return yl;case 35668:case 35672:return El;case 35669:case 35673:return Tl;case 5125:return bl;case 36294:return Al;case 36295:return wl;case 36296:return Rl;case 35678:case 36198:case 36298:case 36306:case 35682:return Cl;case 35679:case 36299:case 36307:return Pl;case 35680:case 36300:case 36308:case 36293:return Ll;case 36289:case 36303:case 36311:case 36292:return Ul}}(t.type)}}class Il{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let a=0,s=i.length;a!==s;++a){const l=i[a];l.setValue(e,t[l.id],n)}}}const Cr=/(\w+)(\])?(\[|\.)?/g;function qa(r,e){r.seq.push(e),r.map[e.id]=e}function Ol(r,e,t){const n=r.name,i=n.length;for(Cr.lastIndex=0;;){const a=Cr.exec(n),s=Cr.lastIndex;let l=a[1];const h=a[2]==="]",o=a[3];if(h&&(l|=0),o===void 0||o==="["&&s+2===i){qa(t,o===void 0?new Dl(l,r,e):new Nl(l,r,e));break}{let c=t.map[l];c===void 0&&(c=new Il(l),qa(t,c)),t=c}}}class Fi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const a=e.getActiveUniform(t,i);Ol(a,e.getUniformLocation(t,a.name),this)}}setValue(e,t,n,i){const a=this.map[t];a!==void 0&&a.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let a=0,s=t.length;a!==s;++a){const l=t[a],h=n[l.id];h.needsUpdate!==!1&&l.setValue(e,h.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,a=e.length;i!==a;++i){const s=e[i];s.id in t&&n.push(s)}return n}}function Ka(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Fl=37297;let zl=0;function Za(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const a=/ERROR: 0:(\d+)/.exec(i);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+function(l,h){const o=l.split(`
`),c=[],u=Math.max(h-6,0),d=Math.min(h+6,o.length);for(let p=u;p<d;p++){const g=p+1;c.push(`${g===h?">":" "} ${g}: ${o[p]}`)}return c.join(`
`)}(r.getShaderSource(e),s)}return i}function Bl(r,e){const t=function(n){const i=Oe.getPrimaries(Oe.workingColorSpace),a=Oe.getPrimaries(n);let s;switch(i===a?s="":i===Hi&&a===Bi?s="LinearDisplayP3ToLinearSRGB":i===Bi&&a===Hi&&(s="LinearSRGBToLinearDisplayP3"),n){case Qt:case Wi:return[s,"LinearTransferOETF"];case Tt:case Xr:return[s,"sRGBTransferOETF"];default:return[s,"LinearTransferOETF"]}}(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Hl(r,e){let t;switch(e){case to:t="Linear";break;case no:t="Reinhard";break;case io:t="OptimizedCineon";break;case ro:t="ACESFilmic";break;case so:t="AgX";break;case oo:t="Neutral";break;case ao:t="Custom";break;default:t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Nn(r){return r!==""}function Ja(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $a(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Vl=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vr(r){return r.replace(Vl,kl)}const Gl=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function kl(r,e){let t=Ee[e];if(t===void 0){const n=Gl.get(e);if(n===void 0)throw new Error("Can not resolve #include <"+e+">");t=Ee[n]}return Vr(t)}const Wl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qa(r){return r.replace(Wl,Xl)}function Xl(r,e,t,n){let i="";for(let a=parseInt(e);a<parseInt(t);a++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return i}function es(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function jl(r,e,t,n){const i=r.getContext(),a=t.defines;let s=t.vertexShader,l=t.fragmentShader;const h=function(w){let W="SHADOWMAP_TYPE_BASIC";return w.shadowMapType===ms?W="SHADOWMAP_TYPE_PCF":w.shadowMapType===$s?W="SHADOWMAP_TYPE_PCF_SOFT":w.shadowMapType===Ot&&(W="SHADOWMAP_TYPE_VSM"),W}(t),o=function(w){let W="ENVMAP_TYPE_CUBE";if(w.envMap)switch(w.envMapMode){case Hn:case Vn:W="ENVMAP_TYPE_CUBE";break;case ki:W="ENVMAP_TYPE_CUBE_UV"}return W}(t),c=function(w){let W="ENVMAP_MODE_REFLECTION";return w.envMap&&w.envMapMode===Vn&&(W="ENVMAP_MODE_REFRACTION"),W}(t),u=function(w){let W="ENVMAP_BLENDING_NONE";if(w.envMap)switch(w.combine){case kr:W="ENVMAP_BLENDING_MULTIPLY";break;case Qs:W="ENVMAP_BLENDING_MIX";break;case eo:W="ENVMAP_BLENDING_ADD"}return W}(t),d=function(w){const W=w.envMapCubeUVHeight;if(W===null)return null;const Z=Math.log2(W)-2,se=1/W;return{texelWidth:1/(3*Math.max(Math.pow(2,Z),112)),texelHeight:se,maxMip:Z}}(t),p=t.isWebGL2?"":function(w){return[w.extensionDerivatives||w.envMapCubeUVHeight||w.bumpMap||w.normalMapTangentSpace||w.clearcoatNormalMap||w.flatShading||w.alphaToCoverage||w.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(w.extensionFragDepth||w.logarithmicDepthBuffer)&&w.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",w.extensionDrawBuffers&&w.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(w.extensionShaderTextureLOD||w.envMap||w.transmission)&&w.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nn).join(`
`)}(t),g=function(w){return[w.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",w.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nn).join(`
`)}(t),x=function(w){const W=[];for(const Z in w){const se=w[Z];se!==!1&&W.push("#define "+Z+" "+se)}return W.join(`
`)}(a),_=i.createProgram();let f,M,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Nn).join(`
`),f.length>0&&(f+=`
`),M=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Nn).join(`
`),M.length>0&&(M+=`
`)):(f=[es(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nn).join(`
`),M=[p,es(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+o:"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zt?"#define TONE_MAPPING":"",t.toneMapping!==Zt?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Zt?Hl("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,Bl("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Nn).join(`
`)),s=Vr(s),s=Ja(s,t),s=$a(s,t),l=Vr(l),l=Ja(l,t),l=$a(l,t),s=Qa(s),l=Qa(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,f=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ga?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ga?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const S=m+f+s,U=m+M+l,R=Ka(i,i.VERTEX_SHADER,S),b=Ka(i,i.FRAGMENT_SHADER,U);function O(w){if(r.debug.checkShaderErrors){const W=i.getProgramInfoLog(_).trim(),Z=i.getShaderInfoLog(R).trim(),se=i.getShaderInfoLog(b).trim();let pe=!0,K=!0;i.getProgramParameter(_,i.LINK_STATUS)===!1?(pe=!1,typeof r.debug.onShaderError=="function"?r.debug.onShaderError(i,_,R,b):(Za(i,R,"vertex"),Za(i,b,"fragment"))):W!==""||Z!==""&&se!==""||(K=!1),K&&(w.diagnostics={runnable:pe,programLog:W,vertexShader:{log:Z,prefix:f},fragmentShader:{log:se,prefix:M}})}i.deleteShader(R),i.deleteShader(b),D=new Fi(i,_),H=function(W,Z){const se={},pe=W.getProgramParameter(Z,W.ACTIVE_ATTRIBUTES);for(let K=0;K<pe;K++){const j=W.getActiveAttrib(Z,K),Y=j.name;let ue=1;j.type===W.FLOAT_MAT2&&(ue=2),j.type===W.FLOAT_MAT3&&(ue=3),j.type===W.FLOAT_MAT4&&(ue=4),se[Y]={type:j.type,location:W.getAttribLocation(Z,Y),locationSize:ue}}return se}(i,_)}let D,H;i.attachShader(_,R),i.attachShader(_,b),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_),this.getUniforms=function(){return D===void 0&&O(this),D},this.getAttributes=function(){return H===void 0&&O(this),H};let ae=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return ae===!1&&(ae=i.getProgramParameter(_,Fl)),ae},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zl++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let Yl=0;class ql{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),a=this._getShaderStage(n),s=this._getShaderCacheForMaterial(e);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kl(e),t.set(e,n)),n}}class Kl{constructor(e){this.id=Yl++,this.code=e,this.usedTimes=0}}function Zl(r,e,t,n,i,a,s){const l=new Ss,h=new ql,o=new Set,c=[],u=i.isWebGL2,d=i.logarithmicDepthBuffer,p=i.vertexTextures;let g=i.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(f){return o.add(f),f===0?"uv":`uv${f}`}return{getParameters:function(f,M,m,S,U){const R=S.fog,b=U.geometry,O=f.isMeshStandardMaterial?S.environment:null,D=(f.isMeshStandardMaterial?t:e).get(f.envMap||O),H=D&&D.mapping===ki?D.image.height:null,ae=x[f.type];f.precision!==null&&(g=i.getMaxPrecision(f.precision),f.precision);const w=b.morphAttributes.position||b.morphAttributes.normal||b.morphAttributes.color,W=w!==void 0?w.length:0;let Z,se,pe,K,j=0;if(b.morphAttributes.position!==void 0&&(j=1),b.morphAttributes.normal!==void 0&&(j=2),b.morphAttributes.color!==void 0&&(j=3),ae){const qn=bt[ae];Z=qn.vertexShader,se=qn.fragmentShader}else Z=f.vertexShader,se=f.fragmentShader,h.update(f),pe=h.getVertexShaderID(f),K=h.getFragmentShaderID(f);const Y=r.getRenderTarget(),ue=U.isInstancedMesh===!0,X=U.isBatchedMesh===!0,J=!!f.map,me=!!f.matcap,le=!!D,T=!!f.aoMap,v=!!f.lightMap,F=!!f.bumpMap,I=!!f.normalMap,L=!!f.displacementMap,B=!!f.emissiveMap,re=!!f.metalnessMap,ne=!!f.roughnessMap,Q=f.anisotropy>0,E=f.clearcoat>0,te=f.iridescence>0,N=f.sheen>0,oe=f.transmission>0,ee=Q&&!!f.anisotropyMap,A=E&&!!f.clearcoatMap,C=E&&!!f.clearcoatNormalMap,G=E&&!!f.clearcoatRoughnessMap,ie=te&&!!f.iridescenceMap,ce=te&&!!f.iridescenceThicknessMap,ve=N&&!!f.sheenColorMap,Se=N&&!!f.sheenRoughnessMap,ze=!!f.specularMap,fe=!!f.specularColorMap,xe=!!f.specularIntensityMap,Ie=oe&&!!f.transmissionMap,ge=oe&&!!f.thicknessMap,we=!!f.gradientMap,Pe=!!f.alphaMap,qe=f.alphaTest>0,ct=!!f.alphaHash,mt=!!f.extensions;let V=Zt;f.toneMapped&&(Y!==null&&Y.isXRRenderTarget!==!0||(V=r.toneMapping));const en={isWebGL2:u,shaderID:ae,shaderType:f.type,shaderName:f.name,vertexShader:Z,fragmentShader:se,defines:f.defines,customVertexShaderID:pe,customFragmentShaderID:K,isRawShaderMaterial:f.isRawShaderMaterial===!0,glslVersion:f.glslVersion,precision:g,batching:X,instancing:ue,instancingColor:ue&&U.instanceColor!==null,instancingMorph:ue&&U.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Y===null?r.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Qt,alphaToCoverage:!!f.alphaToCoverage,map:J,matcap:me,envMap:le,envMapMode:le&&D.mapping,envMapCubeUVHeight:H,aoMap:T,lightMap:v,bumpMap:F,normalMap:I,displacementMap:p&&L,emissiveMap:B,normalMapObjectSpace:I&&f.normalMapType===1,normalMapTangentSpace:I&&f.normalMapType===0,metalnessMap:re,roughnessMap:ne,anisotropy:Q,anisotropyMap:ee,clearcoat:E,clearcoatMap:A,clearcoatNormalMap:C,clearcoatRoughnessMap:G,iridescence:te,iridescenceMap:ie,iridescenceThicknessMap:ce,sheen:N,sheenColorMap:ve,sheenRoughnessMap:Se,specularMap:ze,specularColorMap:fe,specularIntensityMap:xe,transmission:oe,transmissionMap:Ie,thicknessMap:ge,gradientMap:we,opaque:f.transparent===!1&&f.blending===1&&f.alphaToCoverage===!1,alphaMap:Pe,alphaTest:qe,alphaHash:ct,combine:f.combine,mapUv:J&&_(f.map.channel),aoMapUv:T&&_(f.aoMap.channel),lightMapUv:v&&_(f.lightMap.channel),bumpMapUv:F&&_(f.bumpMap.channel),normalMapUv:I&&_(f.normalMap.channel),displacementMapUv:L&&_(f.displacementMap.channel),emissiveMapUv:B&&_(f.emissiveMap.channel),metalnessMapUv:re&&_(f.metalnessMap.channel),roughnessMapUv:ne&&_(f.roughnessMap.channel),anisotropyMapUv:ee&&_(f.anisotropyMap.channel),clearcoatMapUv:A&&_(f.clearcoatMap.channel),clearcoatNormalMapUv:C&&_(f.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&_(f.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&_(f.iridescenceMap.channel),iridescenceThicknessMapUv:ce&&_(f.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(f.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(f.sheenRoughnessMap.channel),specularMapUv:ze&&_(f.specularMap.channel),specularColorMapUv:fe&&_(f.specularColorMap.channel),specularIntensityMapUv:xe&&_(f.specularIntensityMap.channel),transmissionMapUv:Ie&&_(f.transmissionMap.channel),thicknessMapUv:ge&&_(f.thicknessMap.channel),alphaMapUv:Pe&&_(f.alphaMap.channel),vertexTangents:!!b.attributes.tangent&&(I||Q),vertexColors:f.vertexColors,vertexAlphas:f.vertexColors===!0&&!!b.attributes.color&&b.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!b.attributes.uv&&(J||Pe),fog:!!R,useFog:f.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:f.flatShading===!0,sizeAttenuation:f.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:b.morphAttributes.position!==void 0,morphNormals:b.morphAttributes.normal!==void 0,morphColors:b.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:j,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:f.dithering,shadowMapEnabled:r.shadowMap.enabled&&m.length>0,shadowMapType:r.shadowMap.type,toneMapping:V,useLegacyLights:r._useLegacyLights,decodeVideoTexture:J&&f.map.isVideoTexture===!0&&Oe.getTransfer(f.map.colorSpace)===Fe,premultipliedAlpha:f.premultipliedAlpha,doubleSided:f.side===2,flipSided:f.side===at,useDepthPacking:f.depthPacking>=0,depthPacking:f.depthPacking||0,index0AttributeName:f.index0AttributeName,extensionDerivatives:mt&&f.extensions.derivatives===!0,extensionFragDepth:mt&&f.extensions.fragDepth===!0,extensionDrawBuffers:mt&&f.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&f.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&f.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:mt&&f.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:f.customProgramCacheKey()};return en.vertexUv1s=o.has(1),en.vertexUv2s=o.has(2),en.vertexUv3s=o.has(3),o.clear(),en},getProgramCacheKey:function(f){const M=[];if(f.shaderID?M.push(f.shaderID):(M.push(f.customVertexShaderID),M.push(f.customFragmentShaderID)),f.defines!==void 0)for(const m in f.defines)M.push(m),M.push(f.defines[m]);return f.isRawShaderMaterial===!1&&(function(m,S){m.push(S.precision),m.push(S.outputColorSpace),m.push(S.envMapMode),m.push(S.envMapCubeUVHeight),m.push(S.mapUv),m.push(S.alphaMapUv),m.push(S.lightMapUv),m.push(S.aoMapUv),m.push(S.bumpMapUv),m.push(S.normalMapUv),m.push(S.displacementMapUv),m.push(S.emissiveMapUv),m.push(S.metalnessMapUv),m.push(S.roughnessMapUv),m.push(S.anisotropyMapUv),m.push(S.clearcoatMapUv),m.push(S.clearcoatNormalMapUv),m.push(S.clearcoatRoughnessMapUv),m.push(S.iridescenceMapUv),m.push(S.iridescenceThicknessMapUv),m.push(S.sheenColorMapUv),m.push(S.sheenRoughnessMapUv),m.push(S.specularMapUv),m.push(S.specularColorMapUv),m.push(S.specularIntensityMapUv),m.push(S.transmissionMapUv),m.push(S.thicknessMapUv),m.push(S.combine),m.push(S.fogExp2),m.push(S.sizeAttenuation),m.push(S.morphTargetsCount),m.push(S.morphAttributeCount),m.push(S.numDirLights),m.push(S.numPointLights),m.push(S.numSpotLights),m.push(S.numSpotLightMaps),m.push(S.numHemiLights),m.push(S.numRectAreaLights),m.push(S.numDirLightShadows),m.push(S.numPointLightShadows),m.push(S.numSpotLightShadows),m.push(S.numSpotLightShadowsWithMaps),m.push(S.numLightProbes),m.push(S.shadowMapType),m.push(S.toneMapping),m.push(S.numClippingPlanes),m.push(S.numClipIntersection),m.push(S.depthPacking)}(M,f),function(m,S){l.disableAll(),S.isWebGL2&&l.enable(0),S.supportsVertexTextures&&l.enable(1),S.instancing&&l.enable(2),S.instancingColor&&l.enable(3),S.instancingMorph&&l.enable(4),S.matcap&&l.enable(5),S.envMap&&l.enable(6),S.normalMapObjectSpace&&l.enable(7),S.normalMapTangentSpace&&l.enable(8),S.clearcoat&&l.enable(9),S.iridescence&&l.enable(10),S.alphaTest&&l.enable(11),S.vertexColors&&l.enable(12),S.vertexAlphas&&l.enable(13),S.vertexUv1s&&l.enable(14),S.vertexUv2s&&l.enable(15),S.vertexUv3s&&l.enable(16),S.vertexTangents&&l.enable(17),S.anisotropy&&l.enable(18),S.alphaHash&&l.enable(19),S.batching&&l.enable(20),m.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.skinning&&l.enable(4),S.morphTargets&&l.enable(5),S.morphNormals&&l.enable(6),S.morphColors&&l.enable(7),S.premultipliedAlpha&&l.enable(8),S.shadowMapEnabled&&l.enable(9),S.useLegacyLights&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.alphaToCoverage&&l.enable(20),m.push(l.mask)}(M,f),M.push(r.outputColorSpace)),M.push(f.customProgramCacheKey),M.join()},getUniforms:function(f){const M=x[f.type];let m;if(M){const S=bt[M];m=wo.clone(S.uniforms)}else m=f.uniforms;return m},acquireProgram:function(f,M){let m;for(let S=0,U=c.length;S<U;S++){const R=c[S];if(R.cacheKey===M){m=R,++m.usedTimes;break}}return m===void 0&&(m=new jl(r,M,f,a),c.push(m)),m},releaseProgram:function(f){if(--f.usedTimes==0){const M=c.indexOf(f);c[M]=c[c.length-1],c.pop(),f.destroy()}},releaseShaderCache:function(f){h.remove(f)},programs:c,dispose:function(){h.dispose()}}}function Jl(){let r=new WeakMap;return{get:function(e){let t=r.get(e);return t===void 0&&(t={},r.set(e,t)),t},remove:function(e){r.delete(e)},update:function(e,t,n){r.get(e)[t]=n},dispose:function(){r=new WeakMap}}}function $l(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ts(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function ns(){const r=[];let e=0;const t=[],n=[],i=[];function a(s,l,h,o,c,u){let d=r[e];return d===void 0?(d={id:s.id,object:s,geometry:l,material:h,groupOrder:o,renderOrder:s.renderOrder,z:c,group:u},r[e]=d):(d.id=s.id,d.object=s,d.geometry=l,d.material=h,d.groupOrder=o,d.renderOrder=s.renderOrder,d.z=c,d.group=u),e++,d}return{opaque:t,transmissive:n,transparent:i,init:function(){e=0,t.length=0,n.length=0,i.length=0},push:function(s,l,h,o,c,u){const d=a(s,l,h,o,c,u);h.transmission>0?n.push(d):h.transparent===!0?i.push(d):t.push(d)},unshift:function(s,l,h,o,c,u){const d=a(s,l,h,o,c,u);h.transmission>0?n.unshift(d):h.transparent===!0?i.unshift(d):t.unshift(d)},finish:function(){for(let s=e,l=r.length;s<l;s++){const h=r[s];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}},sort:function(s,l){t.length>1&&t.sort(s||$l),n.length>1&&n.sort(l||ts),i.length>1&&i.sort(l||ts)}}}function Ql(){let r=new WeakMap;return{get:function(e,t){const n=r.get(e);let i;return n===void 0?(i=new ns,r.set(e,[i])):t>=n.length?(i=new ns,n.push(i)):i=n[t],i},dispose:function(){r=new WeakMap}}}function ec(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Ne};break;case"SpotLight":t={position:new P,direction:new P,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new P,halfWidth:new P,halfHeight:new P}}return r[e.id]=t,t}}}let tc=0;function nc(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function ic(r,e){const t=new ec,n=function(){const h={};return{get:function(o){if(h[o.id]!==void 0)return h[o.id];let c;switch(o.type){case"DirectionalLight":case"SpotLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":c={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3}}return h[o.id]=c,c}}}(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const a=new P,s=new Ve,l=new Ve;return{setup:function(h,o){let c=0,u=0,d=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let p=0,g=0,x=0,_=0,f=0,M=0,m=0,S=0,U=0,R=0,b=0;h.sort(nc);const O=o===!0?Math.PI:1;for(let H=0,ae=h.length;H<ae;H++){const w=h[H],W=w.color,Z=w.intensity,se=w.distance,pe=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)c+=W.r*Z*O,u+=W.g*Z*O,d+=W.b*Z*O;else if(w.isLightProbe){for(let K=0;K<9;K++)i.probe[K].addScaledVector(w.sh.coefficients[K],Z);b++}else if(w.isDirectionalLight){const K=t.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*O),w.castShadow){const j=w.shadow,Y=n.get(w);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.directionalShadow[p]=Y,i.directionalShadowMap[p]=pe,i.directionalShadowMatrix[p]=w.shadow.matrix,M++}i.directional[p]=K,p++}else if(w.isSpotLight){const K=t.get(w);K.position.setFromMatrixPosition(w.matrixWorld),K.color.copy(W).multiplyScalar(Z*O),K.distance=se,K.coneCos=Math.cos(w.angle),K.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),K.decay=w.decay,i.spot[x]=K;const j=w.shadow;if(w.map&&(i.spotLightMap[U]=w.map,U++,j.updateMatrices(w),w.castShadow&&R++),i.spotLightMatrix[x]=j.matrix,w.castShadow){const Y=n.get(w);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,i.spotShadow[x]=Y,i.spotShadowMap[x]=pe,S++}x++}else if(w.isRectAreaLight){const K=t.get(w);K.color.copy(W).multiplyScalar(Z),K.halfWidth.set(.5*w.width,0,0),K.halfHeight.set(0,.5*w.height,0),i.rectArea[_]=K,_++}else if(w.isPointLight){const K=t.get(w);if(K.color.copy(w.color).multiplyScalar(w.intensity*O),K.distance=w.distance,K.decay=w.decay,w.castShadow){const j=w.shadow,Y=n.get(w);Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,i.pointShadow[g]=Y,i.pointShadowMap[g]=pe,i.pointShadowMatrix[g]=w.shadow.matrix,m++}i.point[g]=K,g++}else if(w.isHemisphereLight){const K=t.get(w);K.skyColor.copy(w.color).multiplyScalar(Z*O),K.groundColor.copy(w.groundColor).multiplyScalar(Z*O),i.hemi[f]=K,f++}}_>0&&(e.isWebGL2?r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2):r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=he.LTC_FLOAT_1,i.rectAreaLTC2=he.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0&&(i.rectAreaLTC1=he.LTC_HALF_1,i.rectAreaLTC2=he.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=u,i.ambient[2]=d;const D=i.hash;D.directionalLength===p&&D.pointLength===g&&D.spotLength===x&&D.rectAreaLength===_&&D.hemiLength===f&&D.numDirectionalShadows===M&&D.numPointShadows===m&&D.numSpotShadows===S&&D.numSpotMaps===U&&D.numLightProbes===b||(i.directional.length=p,i.spot.length=x,i.rectArea.length=_,i.point.length=g,i.hemi.length=f,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=m,i.pointShadowMap.length=m,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=m,i.spotLightMatrix.length=S+U-R,i.spotLightMap.length=U,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=b,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=_,D.hemiLength=f,D.numDirectionalShadows=M,D.numPointShadows=m,D.numSpotShadows=S,D.numSpotMaps=U,D.numLightProbes=b,i.version=tc++)},setupView:function(h,o){let c=0,u=0,d=0,p=0,g=0;const x=o.matrixWorldInverse;for(let _=0,f=h.length;_<f;_++){const M=h[_];if(M.isDirectionalLight){const m=i.directional[c];m.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),m.direction.sub(a),m.direction.transformDirection(x),c++}else if(M.isSpotLight){const m=i.spot[d];m.position.setFromMatrixPosition(M.matrixWorld),m.position.applyMatrix4(x),m.direction.setFromMatrixPosition(M.matrixWorld),a.setFromMatrixPosition(M.target.matrixWorld),m.direction.sub(a),m.direction.transformDirection(x),d++}else if(M.isRectAreaLight){const m=i.rectArea[p];m.position.setFromMatrixPosition(M.matrixWorld),m.position.applyMatrix4(x),l.identity(),s.copy(M.matrixWorld),s.premultiply(x),l.extractRotation(s),m.halfWidth.set(.5*M.width,0,0),m.halfHeight.set(0,.5*M.height,0),m.halfWidth.applyMatrix4(l),m.halfHeight.applyMatrix4(l),p++}else if(M.isPointLight){const m=i.point[u];m.position.setFromMatrixPosition(M.matrixWorld),m.position.applyMatrix4(x),u++}else if(M.isHemisphereLight){const m=i.hemi[g];m.direction.setFromMatrixPosition(M.matrixWorld),m.direction.transformDirection(x),g++}}},state:i}}function is(r,e){const t=new ic(r,e),n=[],i=[];return{init:function(){n.length=0,i.length=0},state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:function(a){t.setup(n,a)},setupLightsView:function(a){t.setupView(n,a)},pushLight:function(a){n.push(a)},pushShadow:function(a){i.push(a)}}}function rc(r,e){let t=new WeakMap;return{get:function(n,i=0){const a=t.get(n);let s;return a===void 0?(s=new is(r,e),t.set(n,[s])):i>=a.length?(s=new is(r,e),a.push(s)):s=a[i],s},dispose:function(){t=new WeakMap}}}class ac extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class sc extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}function oc(r,e,t){let n=new Yr;const i=new ye,a=new ye,s=new Ye,l=new ac({depthPacking:3201}),h=new sc,o={},c=t.maxTextureSize,u={[Jt]:at,[at]:Jt,2:2},d=new $t({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:`void main() {
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
}`}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Bt;g.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new wt(g,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ms;let f=this.type;function M(R,b){const O=e.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new gn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(b,null,O,d,x,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(b,null,O,p,x,null)}function m(R,b,O,D){let H=null;const ae=O.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(ae!==void 0)H=ae;else if(H=O.isPointLight===!0?h:l,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const w=H.uuid,W=b.uuid;let Z=o[w];Z===void 0&&(Z={},o[w]=Z);let se=Z[W];se===void 0&&(se=H.clone(),Z[W]=se,b.addEventListener("dispose",U)),H=se}return H.visible=b.visible,H.wireframe=b.wireframe,H.side=D===Ot?b.shadowSide!==null?b.shadowSide:b.side:b.shadowSide!==null?b.shadowSide:u[b.side],H.alphaMap=b.alphaMap,H.alphaTest=b.alphaTest,H.map=b.map,H.clipShadows=b.clipShadows,H.clippingPlanes=b.clippingPlanes,H.clipIntersection=b.clipIntersection,H.displacementMap=b.displacementMap,H.displacementScale=b.displacementScale,H.displacementBias=b.displacementBias,H.wireframeLinewidth=b.wireframeLinewidth,H.linewidth=b.linewidth,O.isPointLight===!0&&H.isMeshDistanceMaterial===!0&&(r.properties.get(H).light=O),H}function S(R,b,O,D,H){if(R.visible===!1)return;if(R.layers.test(b.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&H===Ot)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,R.matrixWorld);const w=e.update(R),W=R.material;if(Array.isArray(W)){const Z=w.groups;for(let se=0,pe=Z.length;se<pe;se++){const K=Z[se],j=W[K.materialIndex];if(j&&j.visible){const Y=m(R,j,D,H);R.onBeforeShadow(r,R,b,O,w,Y,K),r.renderBufferDirect(O,null,w,Y,R,K),R.onAfterShadow(r,R,b,O,w,Y,K)}}}else if(W.visible){const Z=m(R,W,D,H);R.onBeforeShadow(r,R,b,O,w,Z,null),r.renderBufferDirect(O,null,w,Z,R,null),R.onAfterShadow(r,R,b,O,w,Z,null)}}const ae=R.children;for(let w=0,W=ae.length;w<W;w++)S(ae[w],b,O,D,H)}function U(R){R.target.removeEventListener("dispose",U);for(const b in o){const O=o[b],D=R.target.uuid;D in O&&(O[D].dispose(),delete O[D])}}this.render=function(R,b,O){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||R.length===0)return;const D=r.getRenderTarget(),H=r.getActiveCubeFace(),ae=r.getActiveMipmapLevel(),w=r.state;w.setBlending(0),w.buffers.color.setClear(1,1,1,1),w.buffers.depth.setTest(!0),w.setScissorTest(!1);const W=f!==Ot&&this.type===Ot,Z=f===Ot&&this.type!==Ot;for(let se=0,pe=R.length;se<pe;se++){const K=R[se],j=K.shadow;if(j===void 0||j.autoUpdate===!1&&j.needsUpdate===!1)continue;i.copy(j.mapSize);const Y=j.getFrameExtents();if(i.multiply(Y),a.copy(j.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(a.x=Math.floor(c/Y.x),i.x=a.x*Y.x,j.mapSize.x=a.x),i.y>c&&(a.y=Math.floor(c/Y.y),i.y=a.y*Y.y,j.mapSize.y=a.y)),j.map===null||W===!0||Z===!0){const X=this.type!==Ot?{minFilter:tt,magFilter:tt}:{};j.map!==null&&j.map.dispose(),j.map=new gn(i.x,i.y,X),j.map.texture.name=K.name+".shadowMap",j.camera.updateProjectionMatrix()}r.setRenderTarget(j.map),r.clear();const ue=j.getViewportCount();for(let X=0;X<ue;X++){const J=j.getViewport(X);s.set(a.x*J.x,a.y*J.y,a.x*J.z,a.y*J.w),w.viewport(s),j.updateMatrices(K,X),n=j.getFrustum(),S(b,O,j.camera,K,this.type)}j.isPointLightShadow!==!0&&this.type===Ot&&M(j,O),j.needsUpdate=!1}f=this.type,_.needsUpdate=!1,r.setRenderTarget(D,H,ae)}}function lc(r,e,t){const n=t.isWebGL2,i=new function(){let E=!1;const te=new Ye;let N=null;const oe=new Ye(0,0,0,0);return{setMask:function(ee){N===ee||E||(r.colorMask(ee,ee,ee,ee),N=ee)},setLocked:function(ee){E=ee},setClear:function(ee,A,C,G,ie){ie===!0&&(ee*=G,A*=G,C*=G),te.set(ee,A,C,G),oe.equals(te)===!1&&(r.clearColor(ee,A,C,G),oe.copy(te))},reset:function(){E=!1,N=null,oe.set(-1,0,0,0)}}},a=new function(){let E=!1,te=null,N=null,oe=null;return{setTest:function(ee){ee?v(r.DEPTH_TEST):F(r.DEPTH_TEST)},setMask:function(ee){te===ee||E||(r.depthMask(ee),te=ee)},setFunc:function(ee){if(N!==ee){switch(ee){case 0:r.depthFunc(r.NEVER);break;case 1:r.depthFunc(r.ALWAYS);break;case 2:r.depthFunc(r.LESS);break;case 3:default:r.depthFunc(r.LEQUAL);break;case 4:r.depthFunc(r.EQUAL);break;case 5:r.depthFunc(r.GEQUAL);break;case 6:r.depthFunc(r.GREATER);break;case 7:r.depthFunc(r.NOTEQUAL)}N=ee}},setLocked:function(ee){E=ee},setClear:function(ee){oe!==ee&&(r.clearDepth(ee),oe=ee)},reset:function(){E=!1,te=null,N=null,oe=null}}},s=new function(){let E=!1,te=null,N=null,oe=null,ee=null,A=null,C=null,G=null,ie=null;return{setTest:function(ce){E||(ce?v(r.STENCIL_TEST):F(r.STENCIL_TEST))},setMask:function(ce){te===ce||E||(r.stencilMask(ce),te=ce)},setFunc:function(ce,ve,Se){N===ce&&oe===ve&&ee===Se||(r.stencilFunc(ce,ve,Se),N=ce,oe=ve,ee=Se)},setOp:function(ce,ve,Se){A===ce&&C===ve&&G===Se||(r.stencilOp(ce,ve,Se),A=ce,C=ve,G=Se)},setLocked:function(ce){E=ce},setClear:function(ce){ie!==ce&&(r.clearStencil(ce),ie=ce)},reset:function(){E=!1,te=null,N=null,oe=null,ee=null,A=null,C=null,G=null,ie=null}}},l=new WeakMap,h=new WeakMap;let o={},c={},u=new WeakMap,d=[],p=null,g=!1,x=null,_=null,f=null,M=null,m=null,S=null,U=null,R=new Ne(0,0,0),b=0,O=!1,D=null,H=null,ae=null,w=null,W=null;const Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,pe=0;const K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(pe=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=pe>=1):K.indexOf("OpenGL ES")!==-1&&(pe=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=pe>=2);let j=null,Y={};const ue=r.getParameter(r.SCISSOR_BOX),X=r.getParameter(r.VIEWPORT),J=new Ye().fromArray(ue),me=new Ye().fromArray(X);function le(E,te,N,oe){const ee=new Uint8Array(4),A=r.createTexture();r.bindTexture(E,A),r.texParameteri(E,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(E,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let C=0;C<N;C++)!n||E!==r.TEXTURE_3D&&E!==r.TEXTURE_2D_ARRAY?r.texImage2D(te+C,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage3D(te,0,r.RGBA,1,1,oe,0,r.RGBA,r.UNSIGNED_BYTE,ee);return A}const T={};function v(E){o[E]!==!0&&(r.enable(E),o[E]=!0)}function F(E){o[E]!==!1&&(r.disable(E),o[E]=!1)}T[r.TEXTURE_2D]=le(r.TEXTURE_2D,r.TEXTURE_2D,1),T[r.TEXTURE_CUBE_MAP]=le(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(T[r.TEXTURE_2D_ARRAY]=le(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),T[r.TEXTURE_3D]=le(r.TEXTURE_3D,r.TEXTURE_3D,1,1)),i.setClear(0,0,0,1),a.setClear(1),s.setClear(0),v(r.DEPTH_TEST),a.setFunc(3),re(!1),ne(1),v(r.CULL_FACE),B(0);const I={[pn]:r.FUNC_ADD,101:r.FUNC_SUBTRACT,102:r.FUNC_REVERSE_SUBTRACT};if(n)I[103]=r.MIN,I[104]=r.MAX;else{const E=e.get("EXT_blend_minmax");E!==null&&(I[103]=E.MIN_EXT,I[104]=E.MAX_EXT)}const L={200:r.ZERO,201:r.ONE,202:r.SRC_COLOR,204:r.SRC_ALPHA,210:r.SRC_ALPHA_SATURATE,208:r.DST_COLOR,206:r.DST_ALPHA,203:r.ONE_MINUS_SRC_COLOR,205:r.ONE_MINUS_SRC_ALPHA,209:r.ONE_MINUS_DST_COLOR,207:r.ONE_MINUS_DST_ALPHA,211:r.CONSTANT_COLOR,212:r.ONE_MINUS_CONSTANT_COLOR,213:r.CONSTANT_ALPHA,214:r.ONE_MINUS_CONSTANT_ALPHA};function B(E,te,N,oe,ee,A,C,G,ie,ce){if(E!==0){if(g===!1&&(v(r.BLEND),g=!0),E===5)ee=ee||te,A=A||N,C=C||oe,te===_&&ee===m||(r.blendEquationSeparate(I[te],I[ee]),_=te,m=ee),N===f&&oe===M&&A===S&&C===U||(r.blendFuncSeparate(L[N],L[oe],L[A],L[C]),f=N,M=oe,S=A,U=C),G.equals(R)!==!1&&ie===b||(r.blendColor(G.r,G.g,G.b,ie),R.copy(G),b=ie),x=E,O=!1;else if(E!==x||ce!==O){if(_===pn&&m===pn||(r.blendEquation(r.FUNC_ADD),_=pn,m=pn),ce)switch(E){case 1:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.ONE,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA)}else switch(E){case 1:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case 2:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case 3:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case 4:r.blendFunc(r.ZERO,r.SRC_COLOR)}f=null,M=null,S=null,U=null,R.set(0,0,0),b=0,x=E,O=ce}}else g===!0&&(F(r.BLEND),g=!1)}function re(E){D!==E&&(E?r.frontFace(r.CW):r.frontFace(r.CCW),D=E)}function ne(E){E!==0?(v(r.CULL_FACE),E!==H&&(E===1?r.cullFace(r.BACK):E===2?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):F(r.CULL_FACE),H=E}function Q(E,te,N){E?(v(r.POLYGON_OFFSET_FILL),w===te&&W===N||(r.polygonOffset(te,N),w=te,W=N)):F(r.POLYGON_OFFSET_FILL)}return{buffers:{color:i,depth:a,stencil:s},enable:v,disable:F,bindFramebuffer:function(E,te){return c[E]!==te&&(r.bindFramebuffer(E,te),c[E]=te,n&&(E===r.DRAW_FRAMEBUFFER&&(c[r.FRAMEBUFFER]=te),E===r.FRAMEBUFFER&&(c[r.DRAW_FRAMEBUFFER]=te)),!0)},drawBuffers:function(E,te){let N=d,oe=!1;if(E){N=u.get(te),N===void 0&&(N=[],u.set(te,N));const ee=E.textures;if(N.length!==ee.length||N[0]!==r.COLOR_ATTACHMENT0){for(let A=0,C=ee.length;A<C;A++)N[A]=r.COLOR_ATTACHMENT0+A;N.length=ee.length,oe=!0}}else N[0]!==r.BACK&&(N[0]=r.BACK,oe=!0);if(oe)if(t.isWebGL2)r.drawBuffers(N);else{if(e.has("WEBGL_draw_buffers")!==!0)throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension");e.get("WEBGL_draw_buffers").drawBuffersWEBGL(N)}},useProgram:function(E){return p!==E&&(r.useProgram(E),p=E,!0)},setBlending:B,setMaterial:function(E,te){E.side===2?F(r.CULL_FACE):v(r.CULL_FACE);let N=E.side===at;te&&(N=!N),re(N),E.blending===1&&E.transparent===!1?B(0):B(E.blending,E.blendEquation,E.blendSrc,E.blendDst,E.blendEquationAlpha,E.blendSrcAlpha,E.blendDstAlpha,E.blendColor,E.blendAlpha,E.premultipliedAlpha),a.setFunc(E.depthFunc),a.setTest(E.depthTest),a.setMask(E.depthWrite),i.setMask(E.colorWrite);const oe=E.stencilWrite;s.setTest(oe),oe&&(s.setMask(E.stencilWriteMask),s.setFunc(E.stencilFunc,E.stencilRef,E.stencilFuncMask),s.setOp(E.stencilFail,E.stencilZFail,E.stencilZPass)),Q(E.polygonOffset,E.polygonOffsetFactor,E.polygonOffsetUnits),E.alphaToCoverage===!0?v(r.SAMPLE_ALPHA_TO_COVERAGE):F(r.SAMPLE_ALPHA_TO_COVERAGE)},setFlipSided:re,setCullFace:ne,setLineWidth:function(E){E!==ae&&(se&&r.lineWidth(E),ae=E)},setPolygonOffset:Q,setScissorTest:function(E){E?v(r.SCISSOR_TEST):F(r.SCISSOR_TEST)},activeTexture:function(E){E===void 0&&(E=r.TEXTURE0+Z-1),j!==E&&(r.activeTexture(E),j=E)},bindTexture:function(E,te,N){N===void 0&&(N=j===null?r.TEXTURE0+Z-1:j);let oe=Y[N];oe===void 0&&(oe={type:void 0,texture:void 0},Y[N]=oe),oe.type===E&&oe.texture===te||(j!==N&&(r.activeTexture(N),j=N),r.bindTexture(E,te||T[E]),oe.type=E,oe.texture=te)},unbindTexture:function(){const E=Y[j];E!==void 0&&E.type!==void 0&&(r.bindTexture(E.type,null),E.type=void 0,E.texture=void 0)},compressedTexImage2D:function(){try{r.compressedTexImage2D.apply(r,arguments)}catch{}},compressedTexImage3D:function(){try{r.compressedTexImage3D.apply(r,arguments)}catch{}},texImage2D:function(){try{r.texImage2D.apply(r,arguments)}catch{}},texImage3D:function(){try{r.texImage3D.apply(r,arguments)}catch{}},updateUBOMapping:function(E,te){let N=h.get(te);N===void 0&&(N=new WeakMap,h.set(te,N));let oe=N.get(E);oe===void 0&&(oe=r.getUniformBlockIndex(te,E.name),N.set(E,oe))},uniformBlockBinding:function(E,te){const N=h.get(te).get(E);l.get(te)!==N&&(r.uniformBlockBinding(te,N,E.__bindingPointIndex),l.set(te,N))},texStorage2D:function(){try{r.texStorage2D.apply(r,arguments)}catch{}},texStorage3D:function(){try{r.texStorage3D.apply(r,arguments)}catch{}},texSubImage2D:function(){try{r.texSubImage2D.apply(r,arguments)}catch{}},texSubImage3D:function(){try{r.texSubImage3D.apply(r,arguments)}catch{}},compressedTexSubImage2D:function(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch{}},compressedTexSubImage3D:function(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch{}},scissor:function(E){J.equals(E)===!1&&(r.scissor(E.x,E.y,E.z,E.w),J.copy(E))},viewport:function(E){me.equals(E)===!1&&(r.viewport(E.x,E.y,E.z,E.w),me.copy(E))},reset:function(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),n===!0&&(r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),o={},j=null,Y={},c={},u=new WeakMap,d=[],p=null,g=!1,x=null,_=null,f=null,M=null,m=null,S=null,U=null,R=new Ne(0,0,0),b=0,O=!1,D=null,H=null,ae=null,w=null,W=null,J.set(0,0,r.canvas.width,r.canvas.height),me.set(0,0,r.canvas.width,r.canvas.height),i.reset(),a.reset(),s.reset()}}}function cc(r,e,t,n,i,a,s){const l=i.isWebGL2,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator<"u"&&/OculusBrowser/g.test(navigator.userAgent),c=new ye,u=new WeakMap;let d;const p=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(T,v){return g?new OffscreenCanvas(T,v):Gi("canvas")}function _(T,v,F,I){let L=1;const B=le(T);if((B.width>I||B.height>I)&&(L=I/Math.max(B.width,B.height)),L<1||v===!0){if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const re=v?Hr:Math.floor,ne=re(L*B.width),Q=re(L*B.height);d===void 0&&(d=x(ne,Q));const E=F?x(ne,Q):d;return E.width=ne,E.height=Q,E.getContext("2d").drawImage(T,0,0,ne,Q),E}return T}return T}function f(T){const v=le(T);return _a(v.width)&&_a(v.height)}function M(T,v){return T.generateMipmaps&&v&&T.minFilter!==tt&&T.minFilter!==pt}function m(T){r.generateMipmap(T)}function S(T,v,F,I,L=!1){if(l===!1)return v;if(T!==null&&r[T]!==void 0)return r[T];let B=v;if(v===r.RED&&(F===r.FLOAT&&(B=r.R32F),F===r.HALF_FLOAT&&(B=r.R16F),F===r.UNSIGNED_BYTE&&(B=r.R8)),v===r.RED_INTEGER&&(F===r.UNSIGNED_BYTE&&(B=r.R8UI),F===r.UNSIGNED_SHORT&&(B=r.R16UI),F===r.UNSIGNED_INT&&(B=r.R32UI),F===r.BYTE&&(B=r.R8I),F===r.SHORT&&(B=r.R16I),F===r.INT&&(B=r.R32I)),v===r.RG&&(F===r.FLOAT&&(B=r.RG32F),F===r.HALF_FLOAT&&(B=r.RG16F),F===r.UNSIGNED_BYTE&&(B=r.RG8)),v===r.RG_INTEGER&&(F===r.UNSIGNED_BYTE&&(B=r.RG8UI),F===r.UNSIGNED_SHORT&&(B=r.RG16UI),F===r.UNSIGNED_INT&&(B=r.RG32UI),F===r.BYTE&&(B=r.RG8I),F===r.SHORT&&(B=r.RG16I),F===r.INT&&(B=r.RG32I)),v===r.RGBA){const re=L?zi:Oe.getTransfer(I);F===r.FLOAT&&(B=r.RGBA32F),F===r.HALF_FLOAT&&(B=r.RGBA16F),F===r.UNSIGNED_BYTE&&(B=re===Fe?r.SRGB8_ALPHA8:r.RGBA8),F===r.UNSIGNED_SHORT_4_4_4_4&&(B=r.RGBA4),F===r.UNSIGNED_SHORT_5_5_5_1&&(B=r.RGB5_A1)}return B!==r.R16F&&B!==r.R32F&&B!==r.RG16F&&B!==r.RG32F&&B!==r.RGBA16F&&B!==r.RGBA32F||e.get("EXT_color_buffer_float"),B}function U(T,v,F){return M(T,F)===!0||T.isFramebufferTexture&&T.minFilter!==tt&&T.minFilter!==pt?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function R(T){return T===tt||T===1004||T===Jn?r.NEAREST:r.LINEAR}function b(T){const v=T.target;v.removeEventListener("dispose",b),function(F){const I=n.get(F);if(I.__webglInit===void 0)return;const L=F.source,B=p.get(L);if(B){const re=B[I.__cacheKey];re.usedTimes--,re.usedTimes===0&&D(F),Object.keys(B).length===0&&p.delete(L)}n.remove(F)}(v),v.isVideoTexture&&u.delete(v)}function O(T){const v=T.target;v.removeEventListener("dispose",O),function(F){const I=n.get(F);if(F.depthTexture&&F.depthTexture.dispose(),F.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(I.__webglFramebuffer[B]))for(let re=0;re<I.__webglFramebuffer[B].length;re++)r.deleteFramebuffer(I.__webglFramebuffer[B][re]);else r.deleteFramebuffer(I.__webglFramebuffer[B]);I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer[B])}else{if(Array.isArray(I.__webglFramebuffer))for(let B=0;B<I.__webglFramebuffer.length;B++)r.deleteFramebuffer(I.__webglFramebuffer[B]);else r.deleteFramebuffer(I.__webglFramebuffer);if(I.__webglDepthbuffer&&r.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&r.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let B=0;B<I.__webglColorRenderbuffer.length;B++)I.__webglColorRenderbuffer[B]&&r.deleteRenderbuffer(I.__webglColorRenderbuffer[B]);I.__webglDepthRenderbuffer&&r.deleteRenderbuffer(I.__webglDepthRenderbuffer)}const L=F.textures;for(let B=0,re=L.length;B<re;B++){const ne=n.get(L[B]);ne.__webglTexture&&(r.deleteTexture(ne.__webglTexture),s.memory.textures--),n.remove(L[B])}n.remove(F)}(v)}function D(T){const v=n.get(T);r.deleteTexture(v.__webglTexture);const F=T.source;delete p.get(F)[v.__cacheKey],s.memory.textures--}let H=0;function ae(T,v){const F=n.get(T);if(T.isVideoTexture&&function(I){const L=s.render.frame;u.get(I)!==L&&(u.set(I,L),I.update())}(T),T.isRenderTargetTexture===!1&&T.version>0&&F.__version!==T.version){const I=T.image;if(I!==null){if(I.complete!==!1)return void K(F,T,v)}}t.bindTexture(r.TEXTURE_2D,F.__webglTexture,r.TEXTURE0+v)}const w={[Or]:r.REPEAT,[Yt]:r.CLAMP_TO_EDGE,[Fr]:r.MIRRORED_REPEAT},W={[tt]:r.NEAREST,1004:r.NEAREST_MIPMAP_NEAREST,[Jn]:r.NEAREST_MIPMAP_LINEAR,[pt]:r.LINEAR,[Qi]:r.LINEAR_MIPMAP_NEAREST,[ri]:r.LINEAR_MIPMAP_LINEAR},Z={512:r.NEVER,519:r.ALWAYS,513:r.LESS,515:r.LEQUAL,514:r.EQUAL,518:r.GEQUAL,516:r.GREATER,517:r.NOTEQUAL};function se(T,v,F){if(v.type===Kt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pt||v.magFilter===Qi||v.magFilter===Jn||v.magFilter===ri||v.minFilter===pt||v.minFilter===Qi||v.minFilter===Jn||v.minFilter),F?(r.texParameteri(T,r.TEXTURE_WRAP_S,w[v.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,w[v.wrapT]),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,w[v.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,W[v.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,W[v.minFilter])):(r.texParameteri(T,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(T,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),T!==r.TEXTURE_3D&&T!==r.TEXTURE_2D_ARRAY||r.texParameteri(T,r.TEXTURE_WRAP_R,r.CLAMP_TO_EDGE),v.wrapS!==Yt||v.wrapT,r.texParameteri(T,r.TEXTURE_MAG_FILTER,R(v.magFilter)),r.texParameteri(T,r.TEXTURE_MIN_FILTER,R(v.minFilter)),v.minFilter!==tt&&v.minFilter),v.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,Z[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===tt||v.minFilter!==Jn&&v.minFilter!==ri||v.type===Kt&&e.has("OES_texture_float_linear")===!1||l===!1&&v.type===ai&&e.has("OES_texture_half_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function pe(T,v){let F=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",b));const I=v.source;let L=p.get(I);L===void 0&&(L={},p.set(I,L));const B=function(re){const ne=[];return ne.push(re.wrapS),ne.push(re.wrapT),ne.push(re.wrapR||0),ne.push(re.magFilter),ne.push(re.minFilter),ne.push(re.anisotropy),ne.push(re.internalFormat),ne.push(re.format),ne.push(re.type),ne.push(re.generateMipmaps),ne.push(re.premultiplyAlpha),ne.push(re.flipY),ne.push(re.unpackAlignment),ne.push(re.colorSpace),ne.join()}(v);if(B!==T.__cacheKey){L[B]===void 0&&(L[B]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,F=!0),L[B].usedTimes++;const re=L[T.__cacheKey];re!==void 0&&(L[T.__cacheKey].usedTimes--,re.usedTimes===0&&D(v)),T.__cacheKey=B,T.__webglTexture=L[B].texture}return F}function K(T,v,F){let I=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(I=r.TEXTURE_3D);const L=pe(T,v),B=v.source;t.bindTexture(I,T.__webglTexture,r.TEXTURE0+F);const re=n.get(B);if(B.version!==re.__version||L===!0){t.activeTexture(r.TEXTURE0+F);const ne=Oe.getPrimaries(Oe.workingColorSpace),Q=v.colorSpace===In?null:Oe.getPrimaries(v.colorSpace),E=v.colorSpace===In||ne===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,E);const te=function(fe){return!l&&(fe.wrapS!==Yt||fe.wrapT!==Yt||fe.minFilter!==tt&&fe.minFilter!==pt)}(v)&&f(v.image)===!1;let N=_(v.image,te,!1,i.maxTextureSize);N=me(v,N);const oe=f(N)||l,ee=a.convert(v.format,v.colorSpace);let A,C=a.convert(v.type),G=S(v.internalFormat,ee,C,v.colorSpace,v.isVideoTexture);se(I,v,oe);const ie=v.mipmaps,ce=l&&v.isVideoTexture!==!0&&G!==36196,ve=re.__version===void 0||L===!0,Se=B.dataReady,ze=U(v,N,oe);if(v.isDepthTexture)G=r.DEPTH_COMPONENT,l?G=v.type===Kt?r.DEPTH_COMPONENT32F:v.type===qt?r.DEPTH_COMPONENT24:v.type===fn?r.DEPTH24_STENCIL8:r.DEPTH_COMPONENT16:v.type,v.format===mn&&G===r.DEPTH_COMPONENT&&v.type!==Wr&&v.type!==qt&&(v.type=qt,C=a.convert(v.type)),v.format===Gn&&G===r.DEPTH_COMPONENT&&(G=r.DEPTH_STENCIL,v.type!==fn&&(v.type=fn,C=a.convert(v.type))),ve&&(ce?t.texStorage2D(r.TEXTURE_2D,1,G,N.width,N.height):t.texImage2D(r.TEXTURE_2D,0,G,N.width,N.height,0,ee,C,null));else if(v.isDataTexture)if(ie.length>0&&oe){ce&&ve&&t.texStorage2D(r.TEXTURE_2D,ze,G,ie[0].width,ie[0].height);for(let fe=0,xe=ie.length;fe<xe;fe++)A=ie[fe],ce?Se&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,A.width,A.height,ee,C,A.data):t.texImage2D(r.TEXTURE_2D,fe,G,A.width,A.height,0,ee,C,A.data);v.generateMipmaps=!1}else ce?(ve&&t.texStorage2D(r.TEXTURE_2D,ze,G,N.width,N.height),Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,N.width,N.height,ee,C,N.data)):t.texImage2D(r.TEXTURE_2D,0,G,N.width,N.height,0,ee,C,N.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ce&&ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ze,G,ie[0].width,ie[0].height,N.depth);for(let fe=0,xe=ie.length;fe<xe;fe++)A=ie[fe],v.format!==zt?ee!==null&&(ce?Se&&t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,A.width,A.height,N.depth,ee,A.data,0,0):t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,G,A.width,A.height,N.depth,0,A.data,0,0)):ce?Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,A.width,A.height,N.depth,ee,C,A.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,G,A.width,A.height,N.depth,0,ee,C,A.data)}else{ce&&ve&&t.texStorage2D(r.TEXTURE_2D,ze,G,ie[0].width,ie[0].height);for(let fe=0,xe=ie.length;fe<xe;fe++)A=ie[fe],v.format!==zt?ee!==null&&(ce?Se&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,A.width,A.height,ee,A.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,G,A.width,A.height,0,A.data)):ce?Se&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,A.width,A.height,ee,C,A.data):t.texImage2D(r.TEXTURE_2D,fe,G,A.width,A.height,0,ee,C,A.data)}else if(v.isDataArrayTexture)ce?(ve&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ze,G,N.width,N.height,N.depth),Se&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,N.width,N.height,N.depth,ee,C,N.data)):t.texImage3D(r.TEXTURE_2D_ARRAY,0,G,N.width,N.height,N.depth,0,ee,C,N.data);else if(v.isData3DTexture)ce?(ve&&t.texStorage3D(r.TEXTURE_3D,ze,G,N.width,N.height,N.depth),Se&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,N.width,N.height,N.depth,ee,C,N.data)):t.texImage3D(r.TEXTURE_3D,0,G,N.width,N.height,N.depth,0,ee,C,N.data);else if(v.isFramebufferTexture){if(ve)if(ce)t.texStorage2D(r.TEXTURE_2D,ze,G,N.width,N.height);else{let fe=N.width,xe=N.height;for(let Ie=0;Ie<ze;Ie++)t.texImage2D(r.TEXTURE_2D,Ie,G,fe,xe,0,ee,C,null),fe>>=1,xe>>=1}}else if(ie.length>0&&oe){if(ce&&ve){const fe=le(ie[0]);t.texStorage2D(r.TEXTURE_2D,ze,G,fe.width,fe.height)}for(let fe=0,xe=ie.length;fe<xe;fe++)A=ie[fe],ce?Se&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,ee,C,A):t.texImage2D(r.TEXTURE_2D,fe,G,ee,C,A);v.generateMipmaps=!1}else if(ce){if(ve){const fe=le(N);t.texStorage2D(r.TEXTURE_2D,ze,G,fe.width,fe.height)}Se&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ee,C,N)}else t.texImage2D(r.TEXTURE_2D,0,G,ee,C,N);M(v,oe)&&m(I),re.__version=B.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function j(T,v,F,I,L,B){const re=a.convert(F.format,F.colorSpace),ne=a.convert(F.type),Q=S(F.internalFormat,re,ne,F.colorSpace);if(!n.get(v).__hasExternalTextures){const E=Math.max(1,v.width>>B),te=Math.max(1,v.height>>B);L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?t.texImage3D(L,B,Q,E,te,v.depth,0,re,ne,null):t.texImage2D(L,B,Q,E,te,0,re,ne,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),J(v)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,L,n.get(F).__webglTexture,0,X(v)):(L===r.TEXTURE_2D||L>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&L<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,L,n.get(F).__webglTexture,B),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Y(T,v,F){if(r.bindRenderbuffer(r.RENDERBUFFER,T),v.depthBuffer&&!v.stencilBuffer){let I=l===!0?r.DEPTH_COMPONENT24:r.DEPTH_COMPONENT16;if(F||J(v)){const L=v.depthTexture;L&&L.isDepthTexture&&(L.type===Kt?I=r.DEPTH_COMPONENT32F:L.type===qt&&(I=r.DEPTH_COMPONENT24));const B=X(v);J(v)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,B,I,v.width,v.height):r.renderbufferStorageMultisample(r.RENDERBUFFER,B,I,v.width,v.height)}else r.renderbufferStorage(r.RENDERBUFFER,I,v.width,v.height);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.RENDERBUFFER,T)}else if(v.depthBuffer&&v.stencilBuffer){const I=X(v);F&&J(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,I,r.DEPTH24_STENCIL8,v.width,v.height):J(v)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,I,r.DEPTH24_STENCIL8,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,r.DEPTH_STENCIL,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.RENDERBUFFER,T)}else{const I=v.textures;for(let L=0;L<I.length;L++){const B=I[L],re=a.convert(B.format,B.colorSpace),ne=a.convert(B.type),Q=S(B.internalFormat,re,ne,B.colorSpace),E=X(v);F&&J(v)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,E,Q,v.width,v.height):J(v)?h.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,E,Q,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,Q,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ue(T){const v=n.get(T),F=T.isWebGLCubeRenderTarget===!0;if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");(function(I,L){if(L&&L.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,I),!L.depthTexture||!L.depthTexture.isDepthTexture)throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");n.get(L.depthTexture).__webglTexture&&L.depthTexture.image.width===L.width&&L.depthTexture.image.height===L.height||(L.depthTexture.image.width=L.width,L.depthTexture.image.height=L.height,L.depthTexture.needsUpdate=!0),ae(L.depthTexture,0);const B=n.get(L.depthTexture).__webglTexture,re=X(L);if(L.depthTexture.format===mn)J(L)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,B,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,B,0);else{if(L.depthTexture.format!==Gn)throw new Error("Unknown depthTexture format");J(L)?h.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,B,0,re):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,B,0)}})(v.__webglFramebuffer,T)}else if(F){v.__webglDepthbuffer=[];for(let I=0;I<6;I++)t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[I]),v.__webglDepthbuffer[I]=r.createRenderbuffer(),Y(v.__webglDepthbuffer[I],T,!1)}else t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=r.createRenderbuffer(),Y(v.__webglDepthbuffer,T,!1);t.bindFramebuffer(r.FRAMEBUFFER,null)}function X(T){return Math.min(i.maxSamples,T.samples)}function J(T){const v=n.get(T);return l&&T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function me(T,v){const F=T.colorSpace,I=T.format;return T.type,T.isCompressedTexture===!0||T.isVideoTexture===!0||T.format===zr||F!==Qt&&F!==In&&Oe.getTransfer(F)===Fe&&l===!1&&(e.has("EXT_sRGB")===!0&&I===zt?(T.format=zr,T.minFilter=pt,T.generateMipmaps=!1):v=vs.sRGBToLinear(v)),v}function le(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=function(){const T=H;return i.maxTextures,H+=1,T},this.resetTextureUnits=function(){H=0},this.setTexture2D=ae,this.setTexture2DArray=function(T,v){const F=n.get(T);T.version>0&&F.__version!==T.version?K(F,T,v):t.bindTexture(r.TEXTURE_2D_ARRAY,F.__webglTexture,r.TEXTURE0+v)},this.setTexture3D=function(T,v){const F=n.get(T);T.version>0&&F.__version!==T.version?K(F,T,v):t.bindTexture(r.TEXTURE_3D,F.__webglTexture,r.TEXTURE0+v)},this.setTextureCube=function(T,v){const F=n.get(T);T.version>0&&F.__version!==T.version?function(I,L,B){if(L.image.length!==6)return;const re=pe(I,L),ne=L.source;t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+B);const Q=n.get(ne);if(ne.version!==Q.__version||re===!0){t.activeTexture(r.TEXTURE0+B);const E=Oe.getPrimaries(Oe.workingColorSpace),te=L.colorSpace===In?null:Oe.getPrimaries(L.colorSpace),N=L.colorSpace===In||E===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,L.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,L.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const oe=L.isCompressedTexture||L.image[0].isCompressedTexture,ee=L.image[0]&&L.image[0].isDataTexture,A=[];for(let ge=0;ge<6;ge++)A[ge]=oe||ee?ee?L.image[ge].image:L.image[ge]:_(L.image[ge],!1,!0,i.maxCubemapSize),A[ge]=me(L,A[ge]);const C=A[0],G=f(C)||l,ie=a.convert(L.format,L.colorSpace),ce=a.convert(L.type),ve=S(L.internalFormat,ie,ce,L.colorSpace),Se=l&&L.isVideoTexture!==!0,ze=Q.__version===void 0||re===!0,fe=ne.dataReady;let xe,Ie=U(L,C,G);if(se(r.TEXTURE_CUBE_MAP,L,G),oe){Se&&ze&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ve,C.width,C.height);for(let ge=0;ge<6;ge++){xe=A[ge].mipmaps;for(let we=0;we<xe.length;we++){const Pe=xe[we];L.format!==zt?ie!==null&&(Se?fe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,Pe.width,Pe.height,ie,Pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,ve,Pe.width,Pe.height,0,Pe.data)):Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,0,0,Pe.width,Pe.height,ie,ce,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we,ve,Pe.width,Pe.height,0,ie,ce,Pe.data)}}}else{if(xe=L.mipmaps,Se&&ze){xe.length>0&&Ie++;const ge=le(A[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ve,ge.width,ge.height)}for(let ge=0;ge<6;ge++)if(ee){Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,A[ge].width,A[ge].height,ie,ce,A[ge].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,A[ge].width,A[ge].height,0,ie,ce,A[ge].data);for(let we=0;we<xe.length;we++){const Pe=xe[we].image[ge].image;Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,Pe.width,Pe.height,ie,ce,Pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,ve,Pe.width,Pe.height,0,ie,ce,Pe.data)}}else{Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,0,0,ie,ce,A[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ve,ie,ce,A[ge]);for(let we=0;we<xe.length;we++){const Pe=xe[we];Se?fe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,0,0,ie,ce,Pe.image[ge]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ge,we+1,ve,ie,ce,Pe.image[ge])}}}M(L,G)&&m(r.TEXTURE_CUBE_MAP),Q.__version=ne.version,L.onUpdate&&L.onUpdate(L)}I.__version=L.version}(F,T,v):t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+v)},this.rebindTextures=function(T,v,F){const I=n.get(T);v!==void 0&&j(I.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),F!==void 0&&ue(T)},this.setupRenderTarget=function(T){const v=T.texture,F=n.get(T),I=n.get(v);T.addEventListener("dispose",O);const L=T.textures,B=T.isWebGLCubeRenderTarget===!0,re=L.length>1,ne=f(T)||l;if(re||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=v.version,s.memory.textures++),B){F.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(l&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer[Q]=[];for(let E=0;E<v.mipmaps.length;E++)F.__webglFramebuffer[Q][E]=r.createFramebuffer()}else F.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(l&&v.mipmaps&&v.mipmaps.length>0){F.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)F.__webglFramebuffer[Q]=r.createFramebuffer()}else F.__webglFramebuffer=r.createFramebuffer();if(re&&i.drawBuffers)for(let Q=0,E=L.length;Q<E;Q++){const te=n.get(L[Q]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),s.memory.textures++)}if(l&&T.samples>0&&J(T)===!1){F.__webglMultisampledFramebuffer=r.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let Q=0;Q<L.length;Q++){const E=L[Q];F.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,F.__webglColorRenderbuffer[Q]);const te=a.convert(E.format,E.colorSpace),N=a.convert(E.type),oe=S(E.internalFormat,te,N,E.colorSpace,T.isXRRenderTarget===!0),ee=X(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,oe,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,F.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(F.__webglDepthRenderbuffer=r.createRenderbuffer(),Y(F.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(B){t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),se(r.TEXTURE_CUBE_MAP,v,ne);for(let Q=0;Q<6;Q++)if(l&&v.mipmaps&&v.mipmaps.length>0)for(let E=0;E<v.mipmaps.length;E++)j(F.__webglFramebuffer[Q][E],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,E);else j(F.__webglFramebuffer[Q],T,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);M(v,ne)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let Q=0,E=L.length;Q<E;Q++){const te=L[Q],N=n.get(te);t.bindTexture(r.TEXTURE_2D,N.__webglTexture),se(r.TEXTURE_2D,te,ne),j(F.__webglFramebuffer,T,te,r.COLOR_ATTACHMENT0+Q,r.TEXTURE_2D,0),M(te,ne)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let Q=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&l&&(Q=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Q,I.__webglTexture),se(Q,v,ne),l&&v.mipmaps&&v.mipmaps.length>0)for(let E=0;E<v.mipmaps.length;E++)j(F.__webglFramebuffer[E],T,v,r.COLOR_ATTACHMENT0,Q,E);else j(F.__webglFramebuffer,T,v,r.COLOR_ATTACHMENT0,Q,0);M(v,ne)&&m(Q),t.unbindTexture()}T.depthBuffer&&ue(T)},this.updateRenderTargetMipmap=function(T){const v=f(T)||l,F=T.textures;for(let I=0,L=F.length;I<L;I++){const B=F[I];if(M(B,v)){const re=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,ne=n.get(B).__webglTexture;t.bindTexture(re,ne),m(re),t.unbindTexture()}}},this.updateMultisampleRenderTarget=function(T){if(l&&T.samples>0&&J(T)===!1){const v=T.textures,F=T.width,I=T.height;let L=r.COLOR_BUFFER_BIT;const B=[],re=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ne=n.get(T),Q=v.length>1;if(Q)for(let E=0;E<v.length;E++)t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ne.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglFramebuffer);for(let E=0;E<v.length;E++){B.push(r.COLOR_ATTACHMENT0+E),T.depthBuffer&&B.push(re);const te=ne.__ignoreDepthValues!==void 0&&ne.__ignoreDepthValues;if(te===!1&&(T.depthBuffer&&(L|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&(L|=r.STENCIL_BUFFER_BIT)),Q&&r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ne.__webglColorRenderbuffer[E]),te===!0&&(r.invalidateFramebuffer(r.READ_FRAMEBUFFER,[re]),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[re])),Q){const N=n.get(v[E]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,N,0)}r.blitFramebuffer(0,0,F,I,0,0,F,I,L,r.NEAREST),o&&r.invalidateFramebuffer(r.READ_FRAMEBUFFER,B)}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let E=0;E<v.length;E++){t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.RENDERBUFFER,ne.__webglColorRenderbuffer[E]);const te=n.get(v[E]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ne.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+E,r.TEXTURE_2D,te,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ne.__webglMultisampledFramebuffer)}},this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=j,this.useMultisampledRTT=J}function hc(r,e,t){const n=t.isWebGL2;return{convert:function(i,a=""){let s;const l=Oe.getTransfer(a);if(i===zn)return r.UNSIGNED_BYTE;if(i===1017)return r.UNSIGNED_SHORT_4_4_4_4;if(i===1018)return r.UNSIGNED_SHORT_5_5_5_1;if(i===1010)return r.BYTE;if(i===1011)return r.SHORT;if(i===Wr)return r.UNSIGNED_SHORT;if(i===gs)return r.INT;if(i===qt)return r.UNSIGNED_INT;if(i===Kt)return r.FLOAT;if(i===ai)return n?r.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(i===1021)return r.ALPHA;if(i===zt)return r.RGBA;if(i===1024)return r.LUMINANCE;if(i===1025)return r.LUMINANCE_ALPHA;if(i===mn)return r.DEPTH_COMPONENT;if(i===Gn)return r.DEPTH_STENCIL;if(i===zr)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(i===1028)return r.RED;if(i===1029)return r.RED_INTEGER;if(i===1030)return r.RG;if(i===1031)return r.RG_INTEGER;if(i===1033)return r.RGBA_INTEGER;if(i===er||i===tr||i===nr||i===ir)if(l===Fe){if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s===null)return null;if(i===er)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===tr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===nr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else{if(s=e.get("WEBGL_compressed_texture_s3tc"),s===null)return null;if(i===er)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===tr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===nr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}if(i===35840||i===35841||i===35842||i===35843){if(s=e.get("WEBGL_compressed_texture_pvrtc"),s===null)return null;if(i===35840)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===35841)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===35842)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===35843)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}if(i===36196)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(i===37492||i===37496){if(s=e.get("WEBGL_compressed_texture_etc"),s===null)return null;if(i===37492)return l===Fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===37496)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}if(i===37808||i===37809||i===37810||i===37811||i===37812||i===37813||i===37814||i===37815||i===37816||i===37817||i===37818||i===37819||i===37820||i===37821){if(s=e.get("WEBGL_compressed_texture_astc"),s===null)return null;if(i===37808)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===37809)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===37810)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===37811)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===37812)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===37813)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===37814)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===37815)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===37816)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===37817)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===37818)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===37819)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===37820)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===37821)return l===Fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}if(i===rr||i===36494||i===36495){if(s=e.get("EXT_texture_compression_bptc"),s===null)return null;if(i===rr)return l===Fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===36494)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===36495)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}if(i===36283||i===36284||i===36285||i===36286){if(s=e.get("EXT_texture_compression_rgtc"),s===null)return null;if(i===rr)return s.COMPRESSED_RED_RGTC1_EXT;if(i===36284)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===36285)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===36286)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}return i===fn?n?r.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):r[i]!==void 0?r[i]:null}}}class uc extends ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Di extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dc={type:"move"};class Pr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Di,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Di,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Di,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,a=null,s=null;const l=this._targetRay,h=this._grip,o=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(o&&e.hand){s=!0;for(const x of e.hand.values()){const _=t.getJointPose(x,n),f=this._getHandJoint(o,x);_!==null&&(f.matrix.fromArray(_.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=_.radius),f.visible=_!==null}const c=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],d=c.position.distanceTo(u.position),p=.02,g=.005;o.inputState.pinching&&d>p+g?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!o.inputState.pinching&&d<=p-g&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,n),a!==null&&(h.matrix.fromArray(a.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,a.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(a.linearVelocity)):h.hasLinearVelocity=!1,a.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(a.angularVelocity)):h.hasAngularVelocity=!1));l!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&a!==null&&(i=a),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(dc)))}return l!==null&&(l.visible=i!==null),h!==null&&(h.visible=a!==null),o!==null&&(o.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Di;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class pc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new st;e.properties.get(i).__webglTexture=t.texture,t.depthNear==n.depthNear&&t.depthFar==n.depthFar||(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,i=new $t({extensions:{fragDepth:!0},vertexShader:`
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

}`,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new wt(new ji(20,20),i)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class fc extends vn{constructor(e,t){super();const n=this;let i=null,a=1,s=null,l="local-floor",h=1,o=null,c=null,u=null,d=null,p=null,g=null;const x=new pc,_=t.getContextAttributes();let f=null,M=null;const m=[],S=[],U=new ye;let R=null;const b=new ft;b.layers.enable(1),b.viewport=new Ye;const O=new ft;O.layers.enable(2),O.viewport=new Ye;const D=[b,O],H=new uc;H.layers.enable(1),H.layers.enable(2);let ae=null,w=null;function W(X){const J=S.indexOf(X.inputSource);if(J===-1)return;const me=m[J];me!==void 0&&(me.update(X.inputSource,X.frame,o||s),me.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Z),i.removeEventListener("inputsourceschange",se);for(let X=0;X<m.length;X++){const J=S[X];J!==null&&(S[X]=null,m[X].disconnect(J))}ae=null,w=null,x.reset(),e.setRenderTarget(f),p=null,d=null,u=null,i=null,M=null,ue.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}function se(X){for(let J=0;J<X.removed.length;J++){const me=X.removed[J],le=S.indexOf(me);le>=0&&(S[le]=null,m[le].disconnect(me))}for(let J=0;J<X.added.length;J++){const me=X.added[J];let le=S.indexOf(me);if(le===-1){for(let v=0;v<m.length;v++){if(v>=S.length){S.push(me),le=v;break}if(S[v]===null){S[v]=me,le=v;break}}if(le===-1)break}const T=m[le];T&&T.connect(me)}}this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=m[X];return J===void 0&&(J=new Pr,m[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=m[X];return J===void 0&&(J=new Pr,m[X]=J),J.getGripSpace()},this.getHand=function(X){let J=m[X];return J===void 0&&(J=new Pr,m[X]=J),J.getHandSpace()},this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting},this.setReferenceSpaceType=function(X){l=X,n.isPresenting},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(X){o=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Z),i.addEventListener("inputsourceschange",se),_.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(U),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:i.renderState.layers!==void 0||_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(i,t,J),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),M=new gn(p.framebufferWidth,p.framebufferHeight,{format:zt,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let J=null,me=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,J=_.stencil?Gn:mn,me=_.stencil?fn:qt);const T={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:a};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(T),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new gn(d.textureWidth,d.textureHeight,{format:zt,type:zn,depthTexture:new Ls(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0}),e.properties.get(M).__ignoreDepthValues=d.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(h),o=null,s=await i.requestReferenceSpace(l),ue.setContext(i),ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};const pe=new P,K=new P;function j(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;x.texture!==null&&(X.near=x.depthNear,X.far=x.depthFar),H.near=O.near=b.near=X.near,H.far=O.far=b.far=X.far,ae===H.near&&w===H.far||(i.updateRenderState({depthNear:H.near,depthFar:H.far}),ae=H.near,w=H.far,b.near=ae,b.far=w,O.near=ae,O.far=w,b.updateProjectionMatrix(),O.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,me=H.cameras;j(H,J);for(let le=0;le<me.length;le++)j(me[le],J);me.length===2?function(le,T,v){pe.setFromMatrixPosition(T.matrixWorld),K.setFromMatrixPosition(v.matrixWorld);const F=pe.distanceTo(K),I=T.projectionMatrix.elements,L=v.projectionMatrix.elements,B=I[14]/(I[10]-1),re=I[14]/(I[10]+1),ne=(I[9]+1)/I[5],Q=(I[9]-1)/I[5],E=(I[8]-1)/I[0],te=(L[8]+1)/L[0],N=B*E,oe=B*te,ee=F/(-E+te),A=ee*-E;T.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(A),le.translateZ(ee),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert();const C=B+ee,G=re+ee,ie=N-A,ce=oe+(F-A),ve=ne*re/G*C,Se=Q*re/G*C;le.projectionMatrix.makePerspective(ie,ce,ve,Se,C,G),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}(H,b,O):H.projectionMatrix.copy(b.projectionMatrix),function(le,T,v){v===null?le.matrix.copy(T.matrixWorld):(le.matrix.copy(v.matrixWorld),le.matrix.invert(),le.matrix.multiply(T.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(T.projectionMatrix),le.projectionMatrixInverse.copy(T.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=2*Br*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}(X,H,J)},this.getCamera=function(){return H},this.getFoveation=function(){if(d!==null||p!==null)return h},this.setFoveation=function(X){h=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null};let Y=null;const ue=new Cs;ue.setAnimationLoop(function(X,J){if(c=J.getViewerPose(o||s),g=J,c!==null){const me=c.views;p!==null&&(e.setRenderTargetFramebuffer(M,p.framebuffer),e.setRenderTarget(M));let le=!1;me.length!==H.cameras.length&&(H.cameras.length=0,le=!0);for(let v=0;v<me.length;v++){const F=me[v];let I=null;if(p!==null)I=p.getViewport(F);else{const B=u.getViewSubImage(d,F);I=B.viewport,v===0&&(e.setRenderTargetTextures(M,B.colorTexture,d.ignoreDepthValues?void 0:B.depthStencilTexture),e.setRenderTarget(M))}let L=D[v];L===void 0&&(L=new ft,L.layers.enable(v),L.viewport=new Ye,D[v]=L),L.matrix.fromArray(F.transform.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale),L.projectionMatrix.fromArray(F.projectionMatrix),L.projectionMatrixInverse.copy(L.projectionMatrix).invert(),L.viewport.set(I.x,I.y,I.width,I.height),v===0&&(H.matrix.copy(L.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),le===!0&&H.cameras.push(L)}const T=i.enabledFeatures;if(T&&T.includes("depth-sensing")){const v=u.getDepthInformation(me[0]);v&&v.isValid&&v.texture&&x.init(e,v,i.renderState)}}for(let me=0;me<m.length;me++){const le=S[me],T=m[me];le!==null&&T!==void 0&&T.update(le,J,o||s)}x.render(e,H),Y&&Y(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}),this.setAnimationLoop=function(X){Y=X},this.dispose=function(){}}}const un=new Ct,mc=new Ve;function gc(r,e){function t(i,a){i.matrixAutoUpdate===!0&&i.updateMatrix(),a.value.copy(i.matrix)}function n(i,a){i.opacity.value=a.opacity,a.color&&i.diffuse.value.copy(a.color),a.emissive&&i.emissive.value.copy(a.emissive).multiplyScalar(a.emissiveIntensity),a.map&&(i.map.value=a.map,t(a.map,i.mapTransform)),a.alphaMap&&(i.alphaMap.value=a.alphaMap,t(a.alphaMap,i.alphaMapTransform)),a.bumpMap&&(i.bumpMap.value=a.bumpMap,t(a.bumpMap,i.bumpMapTransform),i.bumpScale.value=a.bumpScale,a.side===at&&(i.bumpScale.value*=-1)),a.normalMap&&(i.normalMap.value=a.normalMap,t(a.normalMap,i.normalMapTransform),i.normalScale.value.copy(a.normalScale),a.side===at&&i.normalScale.value.negate()),a.displacementMap&&(i.displacementMap.value=a.displacementMap,t(a.displacementMap,i.displacementMapTransform),i.displacementScale.value=a.displacementScale,i.displacementBias.value=a.displacementBias),a.emissiveMap&&(i.emissiveMap.value=a.emissiveMap,t(a.emissiveMap,i.emissiveMapTransform)),a.specularMap&&(i.specularMap.value=a.specularMap,t(a.specularMap,i.specularMapTransform)),a.alphaTest>0&&(i.alphaTest.value=a.alphaTest);const s=e.get(a),l=s.envMap,h=s.envMapRotation;if(l&&(i.envMap.value=l,un.copy(h),un.x*=-1,un.y*=-1,un.z*=-1,l.isCubeTexture&&l.isRenderTargetTexture===!1&&(un.y*=-1,un.z*=-1),i.envMapRotation.value.setFromMatrix4(mc.makeRotationFromEuler(un)),i.flipEnvMap.value=l.isCubeTexture&&l.isRenderTargetTexture===!1?-1:1,i.reflectivity.value=a.reflectivity,i.ior.value=a.ior,i.refractionRatio.value=a.refractionRatio),a.lightMap){i.lightMap.value=a.lightMap;const o=r._useLegacyLights===!0?Math.PI:1;i.lightMapIntensity.value=a.lightMapIntensity*o,t(a.lightMap,i.lightMapTransform)}a.aoMap&&(i.aoMap.value=a.aoMap,i.aoMapIntensity.value=a.aoMapIntensity,t(a.aoMap,i.aoMapTransform))}return{refreshFogUniforms:function(i,a){a.color.getRGB(i.fogColor.value,As(r)),a.isFog?(i.fogNear.value=a.near,i.fogFar.value=a.far):a.isFogExp2&&(i.fogDensity.value=a.density)},refreshMaterialUniforms:function(i,a,s,l,h){a.isMeshBasicMaterial||a.isMeshLambertMaterial?n(i,a):a.isMeshToonMaterial?(n(i,a),function(o,c){c.gradientMap&&(o.gradientMap.value=c.gradientMap)}(i,a)):a.isMeshPhongMaterial?(n(i,a),function(o,c){o.specular.value.copy(c.specular),o.shininess.value=Math.max(c.shininess,1e-4)}(i,a)):a.isMeshStandardMaterial?(n(i,a),function(o,c){o.metalness.value=c.metalness,c.metalnessMap&&(o.metalnessMap.value=c.metalnessMap,t(c.metalnessMap,o.metalnessMapTransform)),o.roughness.value=c.roughness,c.roughnessMap&&(o.roughnessMap.value=c.roughnessMap,t(c.roughnessMap,o.roughnessMapTransform)),e.get(c).envMap&&(o.envMapIntensity.value=c.envMapIntensity)}(i,a),a.isMeshPhysicalMaterial&&function(o,c,u){o.ior.value=c.ior,c.sheen>0&&(o.sheenColor.value.copy(c.sheenColor).multiplyScalar(c.sheen),o.sheenRoughness.value=c.sheenRoughness,c.sheenColorMap&&(o.sheenColorMap.value=c.sheenColorMap,t(c.sheenColorMap,o.sheenColorMapTransform)),c.sheenRoughnessMap&&(o.sheenRoughnessMap.value=c.sheenRoughnessMap,t(c.sheenRoughnessMap,o.sheenRoughnessMapTransform))),c.clearcoat>0&&(o.clearcoat.value=c.clearcoat,o.clearcoatRoughness.value=c.clearcoatRoughness,c.clearcoatMap&&(o.clearcoatMap.value=c.clearcoatMap,t(c.clearcoatMap,o.clearcoatMapTransform)),c.clearcoatRoughnessMap&&(o.clearcoatRoughnessMap.value=c.clearcoatRoughnessMap,t(c.clearcoatRoughnessMap,o.clearcoatRoughnessMapTransform)),c.clearcoatNormalMap&&(o.clearcoatNormalMap.value=c.clearcoatNormalMap,t(c.clearcoatNormalMap,o.clearcoatNormalMapTransform),o.clearcoatNormalScale.value.copy(c.clearcoatNormalScale),c.side===at&&o.clearcoatNormalScale.value.negate())),c.iridescence>0&&(o.iridescence.value=c.iridescence,o.iridescenceIOR.value=c.iridescenceIOR,o.iridescenceThicknessMinimum.value=c.iridescenceThicknessRange[0],o.iridescenceThicknessMaximum.value=c.iridescenceThicknessRange[1],c.iridescenceMap&&(o.iridescenceMap.value=c.iridescenceMap,t(c.iridescenceMap,o.iridescenceMapTransform)),c.iridescenceThicknessMap&&(o.iridescenceThicknessMap.value=c.iridescenceThicknessMap,t(c.iridescenceThicknessMap,o.iridescenceThicknessMapTransform))),c.transmission>0&&(o.transmission.value=c.transmission,o.transmissionSamplerMap.value=u.texture,o.transmissionSamplerSize.value.set(u.width,u.height),c.transmissionMap&&(o.transmissionMap.value=c.transmissionMap,t(c.transmissionMap,o.transmissionMapTransform)),o.thickness.value=c.thickness,c.thicknessMap&&(o.thicknessMap.value=c.thicknessMap,t(c.thicknessMap,o.thicknessMapTransform)),o.attenuationDistance.value=c.attenuationDistance,o.attenuationColor.value.copy(c.attenuationColor)),c.anisotropy>0&&(o.anisotropyVector.value.set(c.anisotropy*Math.cos(c.anisotropyRotation),c.anisotropy*Math.sin(c.anisotropyRotation)),c.anisotropyMap&&(o.anisotropyMap.value=c.anisotropyMap,t(c.anisotropyMap,o.anisotropyMapTransform))),o.specularIntensity.value=c.specularIntensity,o.specularColor.value.copy(c.specularColor),c.specularColorMap&&(o.specularColorMap.value=c.specularColorMap,t(c.specularColorMap,o.specularColorMapTransform)),c.specularIntensityMap&&(o.specularIntensityMap.value=c.specularIntensityMap,t(c.specularIntensityMap,o.specularIntensityMapTransform))}(i,a,h)):a.isMeshMatcapMaterial?(n(i,a),function(o,c){c.matcap&&(o.matcap.value=c.matcap)}(i,a)):a.isMeshDepthMaterial?n(i,a):a.isMeshDistanceMaterial?(n(i,a),function(o,c){const u=e.get(c).light;o.referencePosition.value.setFromMatrixPosition(u.matrixWorld),o.nearDistance.value=u.shadow.camera.near,o.farDistance.value=u.shadow.camera.far}(i,a)):a.isMeshNormalMaterial?n(i,a):a.isLineBasicMaterial?(function(o,c){o.diffuse.value.copy(c.color),o.opacity.value=c.opacity,c.map&&(o.map.value=c.map,t(c.map,o.mapTransform))}(i,a),a.isLineDashedMaterial&&function(o,c){o.dashSize.value=c.dashSize,o.totalSize.value=c.dashSize+c.gapSize,o.scale.value=c.scale}(i,a)):a.isPointsMaterial?function(o,c,u,d){o.diffuse.value.copy(c.color),o.opacity.value=c.opacity,o.size.value=c.size*u,o.scale.value=.5*d,c.map&&(o.map.value=c.map,t(c.map,o.uvTransform)),c.alphaMap&&(o.alphaMap.value=c.alphaMap,t(c.alphaMap,o.alphaMapTransform)),c.alphaTest>0&&(o.alphaTest.value=c.alphaTest)}(i,a,s,l):a.isSpriteMaterial?function(o,c){o.diffuse.value.copy(c.color),o.opacity.value=c.opacity,o.rotation.value=c.rotation,c.map&&(o.map.value=c.map,t(c.map,o.mapTransform)),c.alphaMap&&(o.alphaMap.value=c.alphaMap,t(c.alphaMap,o.alphaMapTransform)),c.alphaTest>0&&(o.alphaTest.value=c.alphaTest)}(i,a):a.isShadowMaterial?(i.color.value.copy(a.color),i.opacity.value=a.opacity):a.isShaderMaterial&&(a.uniformsNeedUpdate=!1)}}}function _c(r,e,t,n){let i={},a={},s=[];const l=t.isWebGL2?r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(u,d,p,g){const x=u.value,_=d+"_"+p;if(g[_]===void 0)return g[_]=typeof x=="number"||typeof x=="boolean"?x:x.clone(),!0;{const f=g[_];if(typeof x=="number"||typeof x=="boolean"){if(f!==x)return g[_]=x,!0}else if(f.equals(x)===!1)return f.copy(x),!0}return!1}function o(u){const d={boundary:0,storage:0};return typeof u=="number"||typeof u=="boolean"?(d.boundary=4,d.storage=4):u.isVector2?(d.boundary=8,d.storage=8):u.isVector3||u.isColor?(d.boundary=16,d.storage=12):u.isVector4?(d.boundary=16,d.storage=16):u.isMatrix3?(d.boundary=48,d.storage=48):u.isMatrix4?(d.boundary=64,d.storage=64):u.isTexture,d}function c(u){const d=u.target;d.removeEventListener("dispose",c);const p=s.indexOf(d.__bindingPointIndex);s.splice(p,1),r.deleteBuffer(i[d.id]),delete i[d.id],delete a[d.id]}return{bind:function(u,d){const p=d.program;n.uniformBlockBinding(u,p)},update:function(u,d){let p=i[u.id];p===void 0&&(function(_){const f=_.uniforms;let M=0;const m=16;for(let U=0,R=f.length;U<R;U++){const b=Array.isArray(f[U])?f[U]:[f[U]];for(let O=0,D=b.length;O<D;O++){const H=b[O],ae=Array.isArray(H.value)?H.value:[H.value];for(let w=0,W=ae.length;w<W;w++){const Z=o(ae[w]),se=M%m;se!==0&&m-se<Z.boundary&&(M+=m-se),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=M,M+=Z.storage}}}const S=M%m;S>0&&(M+=m-S),_.__size=M,_.__cache={}}(u),p=function(_){const f=function(){for(let U=0;U<l;U++)if(s.indexOf(U)===-1)return s.push(U),U;return 0}();_.__bindingPointIndex=f;const M=r.createBuffer(),m=_.__size,S=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,m,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,f,M),M}(u),i[u.id]=p,u.addEventListener("dispose",c));const g=d.program;n.updateUBOMapping(u,g);const x=e.render.frame;a[u.id]!==x&&(function(_){const f=i[_.id],M=_.uniforms,m=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,f);for(let S=0,U=M.length;S<U;S++){const R=Array.isArray(M[S])?M[S]:[M[S]];for(let b=0,O=R.length;b<O;b++){const D=R[b];if(h(D,S,b,m)===!0){const H=D.__offset,ae=Array.isArray(D.value)?D.value:[D.value];let w=0;for(let W=0;W<ae.length;W++){const Z=ae[W],se=o(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,r.bufferSubData(r.UNIFORM_BUFFER,H+w,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,w),w+=se.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,H,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}(u),a[u.id]=x)},dispose:function(){for(const u in i)r.deleteBuffer(i[u]);s=[],i={},a={}}}}class Fs{constructor(e={}){const{canvas:t=ho(),context:n=null,depth:i=!0,stencil:a=!0,alpha:s=!1,antialias:l=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:o=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=e;let d;this.isWebGLRenderer=!0,d=n!==null?n.getContextAttributes().alpha:s;const p=new Uint32Array(4),g=new Int32Array(4);let x=null,_=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tt,this._useLegacyLights=!1,this.toneMapping=Zt,this.toneMappingExposure=1;const m=this;let S=!1,U=0,R=0,b=null,O=-1,D=null;const H=new Ye,ae=new Ye;let w=null;const W=new Ne(0);let Z=0,se=t.width,pe=t.height,K=1,j=null,Y=null;const ue=new Ye(0,0,se,pe),X=new Ye(0,0,se,pe);let J=!1;const me=new Yr;let le=!1,T=!1,v=null;const F=new Ve,I=new ye,L=new P,B={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return b===null?K:1}let ne,Q,E,te,N,oe,ee,A,C,G,ie,ce,ve,Se,ze,fe,xe,Ie,ge,we,Pe,qe,ct,mt,V=n;function en(y,z){for(let k=0;k<y.length;k++){const $=y[k],q=t.getContext($,z);if(q!==null)return q}return null}try{const y={alpha:!0,depth:i,stencil:a,antialias:l,premultipliedAlpha:h,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ir}`),t.addEventListener("webglcontextlost",Kr,!1),t.addEventListener("webglcontextrestored",Zr,!1),t.addEventListener("webglcontextcreationerror",Jr,!1),V===null){const z=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&z.shift(),V=en(z,y),V===null)throw en(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u",V.getShaderPrecisionFormat===void 0&&(V.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw y}function qn(){ne=new Vo(V),Q=new Fo(V,ne,e),ne.init(Q),qe=new hc(V,ne,Q),E=new lc(V,ne,Q),te=new Wo(V),N=new Jl,oe=new cc(V,ne,E,N,Q,qe,te),ee=new Bo(m),A=new Ho(m),C=new Uo(V,Q),ct=new Io(V,ne,C,Q),G=new Go(V,C,te,ct),ie=new qo(V,G,C,te),ge=new Yo(V,Q,oe),fe=new zo(N),ce=new Zl(m,ee,A,ne,Q,ct,fe),ve=new gc(m,N),Se=new Ql,ze=new rc(ne,Q),Ie=new No(m,ee,A,E,ie,d,h),xe=new oc(m,ie,Q),mt=new _c(V,te,Q,E),we=new Oo(V,ne,te,Q),Pe=new ko(V,ne,te,Q),te.programs=ce.programs,m.capabilities=Q,m.extensions=ne,m.properties=N,m.renderLists=Se,m.shadowMap=xe,m.state=E,m.info=te}qn();const Ze=new fc(m,V);function Kr(y){y.preventDefault(),S=!0}function Zr(){S=!1;const y=te.autoReset,z=xe.enabled,k=xe.autoUpdate,$=xe.needsUpdate,q=xe.type;qn(),te.autoReset=y,xe.enabled=z,xe.autoUpdate=k,xe.needsUpdate=$,xe.type=q}function Jr(y){}function $r(y){const z=y.target;z.removeEventListener("dispose",$r),function(k){(function($){const q=N.get($).programs;q!==void 0&&(q.forEach(function(de){ce.releaseProgram(de)}),$.isShaderMaterial&&ce.releaseShaderCache($))})(k),N.remove(k)}(z)}function Qr(y,z,k){y.transparent===!0&&y.side===2&&y.forceSinglePass===!1?(y.side=at,y.needsUpdate=!0,ci(y,z,k),y.side=Jt,y.needsUpdate=!0,ci(y,z,k),y.side=2):ci(y,z,k)}this.xr=Ze,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const y=ne.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ne.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(y){y!==void 0&&(K=y,this.setSize(se,pe,!1))},this.getSize=function(y){return y.set(se,pe)},this.setSize=function(y,z,k=!0){Ze.isPresenting||(se=y,pe=z,t.width=Math.floor(y*K),t.height=Math.floor(z*K),k===!0&&(t.style.width=y+"px",t.style.height=z+"px"),this.setViewport(0,0,y,z))},this.getDrawingBufferSize=function(y){return y.set(se*K,pe*K).floor()},this.setDrawingBufferSize=function(y,z,k){se=y,pe=z,K=k,t.width=Math.floor(y*k),t.height=Math.floor(z*k),this.setViewport(0,0,y,z)},this.getCurrentViewport=function(y){return y.copy(H)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,z,k,$){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,z,k,$),E.viewport(H.copy(ue).multiplyScalar(K).round())},this.getScissor=function(y){return y.copy(X)},this.setScissor=function(y,z,k,$){y.isVector4?X.set(y.x,y.y,y.z,y.w):X.set(y,z,k,$),E.scissor(ae.copy(X).multiplyScalar(K).round())},this.getScissorTest=function(){return J},this.setScissorTest=function(y){E.setScissorTest(J=y)},this.setOpaqueSort=function(y){j=y},this.setTransparentSort=function(y){Y=y},this.getClearColor=function(y){return y.copy(Ie.getClearColor())},this.setClearColor=function(){Ie.setClearColor.apply(Ie,arguments)},this.getClearAlpha=function(){return Ie.getClearAlpha()},this.setClearAlpha=function(){Ie.setClearAlpha.apply(Ie,arguments)},this.clear=function(y=!0,z=!0,k=!0){let $=0;if(y){let q=!1;if(b!==null){const de=b.texture.format;q=de===1033||de===1031||de===1029}if(q){const de=b.texture.type,_e=de===zn||de===qt||de===Wr||de===fn||de===1017||de===1018,Me=Ie.getClearColor(),be=Ie.getClearAlpha(),Re=Me.r,Ce=Me.g,Le=Me.b;_e?(p[0]=Re,p[1]=Ce,p[2]=Le,p[3]=be,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=Re,g[1]=Ce,g[2]=Le,g[3]=be,V.clearBufferiv(V.COLOR,0,g))}else $|=V.COLOR_BUFFER_BIT}z&&($|=V.DEPTH_BUFFER_BIT),k&&($|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Kr,!1),t.removeEventListener("webglcontextrestored",Zr,!1),t.removeEventListener("webglcontextcreationerror",Jr,!1),Se.dispose(),ze.dispose(),N.dispose(),ee.dispose(),A.dispose(),ie.dispose(),ct.dispose(),mt.dispose(),ce.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",ea),Ze.removeEventListener("sessionend",ta),v&&(v.dispose(),v=null),tn.stop()},this.renderBufferDirect=function(y,z,k,$,q,de){z===null&&(z=B);const _e=q.isMesh&&q.matrixWorld.determinant()<0,Me=function(ke,ht,it,Ue,Ae){ht.isScene!==!0&&(ht=B),oe.resetTextureUnits();const Kn=ht.fog,Ki=Ue.isMeshStandardMaterial?ht.environment:null,Vs=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Qt,hi=(Ue.isMeshStandardMaterial?A:ee).get(Ue.envMap||Ki),Gs=Ue.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ks=!!it.attributes.tangent&&(!!Ue.normalMap||Ue.anisotropy>0),Ws=!!it.morphAttributes.position,Xs=!!it.morphAttributes.normal,js=!!it.morphAttributes.color;let oa=Zt;Ue.toneMapped&&(b!==null&&b.isXRRenderTarget!==!0||(oa=m.toneMapping));const la=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ys=la!==void 0?la.length:0,De=N.get(Ue),qs=_.state.lights;if(le===!0&&(T===!0||ke!==D)){const ut=ke===D&&Ue.id===O;fe.setState(Ue,ke,ut)}let _t=!1;Ue.version===De.__version?De.needsLights&&De.lightsStateVersion!==qs.state.version||De.outputColorSpace!==Vs||Ae.isBatchedMesh&&De.batching===!1?_t=!0:Ae.isBatchedMesh||De.batching!==!0?Ae.isInstancedMesh&&De.instancing===!1?_t=!0:Ae.isInstancedMesh||De.instancing!==!0?Ae.isSkinnedMesh&&De.skinning===!1?_t=!0:Ae.isSkinnedMesh||De.skinning!==!0?Ae.isInstancedMesh&&De.instancingColor===!0&&Ae.instanceColor===null||Ae.isInstancedMesh&&De.instancingColor===!1&&Ae.instanceColor!==null||Ae.isInstancedMesh&&De.instancingMorph===!0&&Ae.morphTexture===null||Ae.isInstancedMesh&&De.instancingMorph===!1&&Ae.morphTexture!==null||De.envMap!==hi||Ue.fog===!0&&De.fog!==Kn?_t=!0:De.numClippingPlanes===void 0||De.numClippingPlanes===fe.numPlanes&&De.numIntersection===fe.numIntersection?(De.vertexAlphas!==Gs||De.vertexTangents!==ks||De.morphTargets!==Ws||De.morphNormals!==Xs||De.morphColors!==js||De.toneMapping!==oa||Q.isWebGL2===!0&&De.morphTargetsCount!==Ys)&&(_t=!0):_t=!0:_t=!0:_t=!0:_t=!0:(_t=!0,De.__version=Ue.version);let rn=De.currentProgram;_t===!0&&(rn=ci(Ue,ht,Ae));let ca=!1,Zn=!1,Zi=!1;const Je=rn.getUniforms(),an=De.uniforms;if(E.useProgram(rn.program)&&(ca=!0,Zn=!0,Zi=!0),Ue.id!==O&&(O=Ue.id,Zn=!0),ca||D!==ke){Je.setValue(V,"projectionMatrix",ke.projectionMatrix),Je.setValue(V,"viewMatrix",ke.matrixWorldInverse);const ut=Je.map.cameraPosition;ut!==void 0&&ut.setValue(V,L.setFromMatrixPosition(ke.matrixWorld)),Q.logarithmicDepthBuffer&&Je.setValue(V,"logDepthBufFC",2/(Math.log(ke.far+1)/Math.LN2)),(Ue.isMeshPhongMaterial||Ue.isMeshToonMaterial||Ue.isMeshLambertMaterial||Ue.isMeshBasicMaterial||Ue.isMeshStandardMaterial||Ue.isShaderMaterial)&&Je.setValue(V,"isOrthographic",ke.isOrthographicCamera===!0),D!==ke&&(D=ke,Zn=!0,Zi=!0)}if(Ae.isSkinnedMesh){Je.setOptional(V,Ae,"bindMatrix"),Je.setOptional(V,Ae,"bindMatrixInverse");const ut=Ae.skeleton;ut&&Q.floatVertexTextures&&(ut.boneTexture===null&&ut.computeBoneTexture(),Je.setValue(V,"boneTexture",ut.boneTexture,oe))}Ae.isBatchedMesh&&(Je.setOptional(V,Ae,"batchingTexture"),Je.setValue(V,"batchingTexture",Ae._matricesTexture,oe));const Ji=it.morphAttributes;(Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0&&Q.isWebGL2===!0)&&ge.update(Ae,it,rn),(Zn||De.receiveShadow!==Ae.receiveShadow)&&(De.receiveShadow=Ae.receiveShadow,Je.setValue(V,"receiveShadow",Ae.receiveShadow)),Ue.isMeshGouraudMaterial&&Ue.envMap!==null&&(an.envMap.value=hi,an.flipEnvMap.value=hi.isCubeTexture&&hi.isRenderTargetTexture===!1?-1:1),Zn&&(Je.setValue(V,"toneMappingExposure",m.toneMappingExposure),De.needsLights&&(vt=Zi,(Et=an).ambientLightColor.needsUpdate=vt,Et.lightProbe.needsUpdate=vt,Et.directionalLights.needsUpdate=vt,Et.directionalLightShadows.needsUpdate=vt,Et.pointLights.needsUpdate=vt,Et.pointLightShadows.needsUpdate=vt,Et.spotLights.needsUpdate=vt,Et.spotLightShadows.needsUpdate=vt,Et.rectAreaLights.needsUpdate=vt,Et.hemisphereLights.needsUpdate=vt),Kn&&Ue.fog===!0&&ve.refreshFogUniforms(an,Kn),ve.refreshMaterialUniforms(an,Ue,K,pe,v),Fi.upload(V,aa(De),an,oe));var Et,vt;if(Ue.isShaderMaterial&&Ue.uniformsNeedUpdate===!0&&(Fi.upload(V,aa(De),an,oe),Ue.uniformsNeedUpdate=!1),Ue.isSpriteMaterial&&Je.setValue(V,"center",Ae.center),Je.setValue(V,"modelViewMatrix",Ae.modelViewMatrix),Je.setValue(V,"normalMatrix",Ae.normalMatrix),Je.setValue(V,"modelMatrix",Ae.matrixWorld),Ue.isShaderMaterial||Ue.isRawShaderMaterial){const ut=Ue.uniformsGroups;for(let $i=0,Ks=ut.length;$i<Ks;$i++)if(Q.isWebGL2){const ha=ut[$i];mt.update(ha,rn),mt.bind(ha,rn)}}return rn}(y,z,k,$,q);E.setMaterial($,_e);let be=k.index,Re=1;if($.wireframe===!0){if(be=G.getWireframeAttribute(k),be===void 0)return;Re=2}const Ce=k.drawRange,Le=k.attributes.position;let Be=Ce.start*Re,gt=(Ce.start+Ce.count)*Re;de!==null&&(Be=Math.max(Be,de.start*Re),gt=Math.min(gt,(de.start+de.count)*Re)),be!==null?(Be=Math.max(Be,0),gt=Math.min(gt,be.count)):Le!=null&&(Be=Math.max(Be,0),gt=Math.min(gt,Le.count));const Pt=gt-Be;if(Pt<0||Pt===1/0)return;let nn;ct.setup(q,$,Me,k,be);let He=we;if(be!==null&&(nn=C.get(be),He=Pe,He.setIndex(nn)),q.isMesh)$.wireframe===!0?(E.setLineWidth($.wireframeLinewidth*re()),He.setMode(V.LINES)):He.setMode(V.TRIANGLES);else if(q.isLine){let ke=$.linewidth;ke===void 0&&(ke=1),E.setLineWidth(ke*re()),q.isLineSegments?He.setMode(V.LINES):q.isLineLoop?He.setMode(V.LINE_LOOP):He.setMode(V.LINE_STRIP)}else q.isPoints?He.setMode(V.POINTS):q.isSprite&&He.setMode(V.TRIANGLES);if(q.isBatchedMesh)He.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else if(q.isInstancedMesh)He.renderInstances(Be,Pt,q.count);else if(k.isInstancedBufferGeometry){const ke=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ht=Math.min(k.instanceCount,ke);He.renderInstances(Be,Pt,ht)}else He.render(Be,Pt)},this.compile=function(y,z,k=null){k===null&&(k=y),_=ze.get(k),_.init(),M.push(_),k.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),y!==k&&y.traverseVisible(function(q){q.isLight&&q.layers.test(z.layers)&&(_.pushLight(q),q.castShadow&&_.pushShadow(q))}),_.setupLights(m._useLegacyLights);const $=new Set;return y.traverse(function(q){const de=q.material;if(de)if(Array.isArray(de))for(let _e=0;_e<de.length;_e++){const Me=de[_e];Qr(Me,k,q),$.add(Me)}else Qr(de,k,q),$.add(de)}),M.pop(),_=null,$},this.compileAsync=function(y,z,k=null){const $=this.compile(y,z,k);return new Promise(q=>{function de(){$.forEach(function(_e){N.get(_e).currentProgram.isReady()&&$.delete(_e)}),$.size!==0?setTimeout(de,10):q(y)}ne.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let qi=null;function ea(){tn.stop()}function ta(){tn.start()}const tn=new Cs;function na(y,z,k,$){if(y.visible===!1)return;if(y.layers.test(z.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(z);else if(y.isLight)_.pushLight(y),y.castShadow&&_.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||me.intersectsSprite(y)){$&&L.setFromMatrixPosition(y.matrixWorld).applyMatrix4(F);const de=ie.update(y),_e=y.material;_e.visible&&x.push(y,de,_e,k,L.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||me.intersectsObject(y))){const de=ie.update(y),_e=y.material;if($&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),L.copy(y.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),L.copy(de.boundingSphere.center)),L.applyMatrix4(y.matrixWorld).applyMatrix4(F)),Array.isArray(_e)){const Me=de.groups;for(let be=0,Re=Me.length;be<Re;be++){const Ce=Me[be],Le=_e[Ce.materialIndex];Le&&Le.visible&&x.push(y,de,Le,k,L.z,Ce)}}else _e.visible&&x.push(y,de,_e,k,L.z,null)}}const q=y.children;for(let de=0,_e=q.length;de<_e;de++)na(q[de],z,k,$)}function ia(y,z,k,$){const q=y.opaque,de=y.transmissive,_e=y.transparent;_.setupLightsView(k),le===!0&&fe.setGlobalState(m.clippingPlanes,k),de.length>0&&function(Me,be,Re,Ce){if((Re.isScene===!0?Re.overrideMaterial:null)!==null)return;const Be=Q.isWebGL2;v===null&&(v=new gn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")?ai:zn,minFilter:ri,samples:Be?4:0})),m.getDrawingBufferSize(I),Be?v.setSize(I.x,I.y):v.setSize(Hr(I.x),Hr(I.y));const gt=m.getRenderTarget();m.setRenderTarget(v),m.getClearColor(W),Z=m.getClearAlpha(),Z<1&&m.setClearColor(16777215,.5),m.clear();const Pt=m.toneMapping;m.toneMapping=Zt,li(Me,Re,Ce),oe.updateMultisampleRenderTarget(v),oe.updateRenderTargetMipmap(v);let nn=!1;for(let He=0,ke=be.length;He<ke;He++){const ht=be[He],it=ht.object,Ue=ht.geometry,Ae=ht.material,Kn=ht.group;if(Ae.side===2&&it.layers.test(Ce.layers)){const Ki=Ae.side;Ae.side=at,Ae.needsUpdate=!0,ra(it,Re,Ce,Ue,Ae,Kn),Ae.side=Ki,Ae.needsUpdate=!0,nn=!0}}nn===!0&&(oe.updateMultisampleRenderTarget(v),oe.updateRenderTargetMipmap(v)),m.setRenderTarget(gt),m.setClearColor(W,Z),m.toneMapping=Pt}(q,de,z,k),$&&E.viewport(H.copy($)),q.length>0&&li(q,z,k),de.length>0&&li(de,z,k),_e.length>0&&li(_e,z,k),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function li(y,z,k){const $=z.isScene===!0?z.overrideMaterial:null;for(let q=0,de=y.length;q<de;q++){const _e=y[q],Me=_e.object,be=_e.geometry,Re=$===null?_e.material:$,Ce=_e.group;Me.layers.test(k.layers)&&ra(Me,z,k,be,Re,Ce)}}function ra(y,z,k,$,q,de){y.onBeforeRender(m,z,k,$,q,de),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),q.onBeforeRender(m,z,k,$,y,de),q.transparent===!0&&q.side===2&&q.forceSinglePass===!1?(q.side=at,q.needsUpdate=!0,m.renderBufferDirect(k,z,$,q,y,de),q.side=Jt,q.needsUpdate=!0,m.renderBufferDirect(k,z,$,q,y,de),q.side=2):m.renderBufferDirect(k,z,$,q,y,de),y.onAfterRender(m,z,k,$,q,de)}function ci(y,z,k){z.isScene!==!0&&(z=B);const $=N.get(y),q=_.state.lights,de=_.state.shadowsArray,_e=q.state.version,Me=ce.getParameters(y,q.state,de,z,k),be=ce.getProgramCacheKey(Me);let Re=$.programs;$.environment=y.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(y.isMeshStandardMaterial?A:ee).get(y.envMap||$.environment),$.envMapRotation=$.environment!==null&&y.envMap===null?z.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",$r),Re=new Map,$.programs=Re);let Ce=Re.get(be);if(Ce!==void 0){if($.currentProgram===Ce&&$.lightsStateVersion===_e)return sa(y,Me),Ce}else Me.uniforms=ce.getUniforms(y),y.onBuild(k,Me,m),y.onBeforeCompile(Me,m),Ce=ce.acquireProgram(Me,be),Re.set(be,Ce),$.uniforms=Me.uniforms;const Le=$.uniforms;return(y.isShaderMaterial||y.isRawShaderMaterial)&&y.clipping!==!0||(Le.clippingPlanes=fe.uniform),sa(y,Me),$.needsLights=function(Be){return Be.isMeshLambertMaterial||Be.isMeshToonMaterial||Be.isMeshPhongMaterial||Be.isMeshStandardMaterial||Be.isShadowMaterial||Be.isShaderMaterial&&Be.lights===!0}(y),$.lightsStateVersion=_e,$.needsLights&&(Le.ambientLightColor.value=q.state.ambient,Le.lightProbe.value=q.state.probe,Le.directionalLights.value=q.state.directional,Le.directionalLightShadows.value=q.state.directionalShadow,Le.spotLights.value=q.state.spot,Le.spotLightShadows.value=q.state.spotShadow,Le.rectAreaLights.value=q.state.rectArea,Le.ltc_1.value=q.state.rectAreaLTC1,Le.ltc_2.value=q.state.rectAreaLTC2,Le.pointLights.value=q.state.point,Le.pointLightShadows.value=q.state.pointShadow,Le.hemisphereLights.value=q.state.hemi,Le.directionalShadowMap.value=q.state.directionalShadowMap,Le.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Le.spotShadowMap.value=q.state.spotShadowMap,Le.spotLightMatrix.value=q.state.spotLightMatrix,Le.spotLightMap.value=q.state.spotLightMap,Le.pointShadowMap.value=q.state.pointShadowMap,Le.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=Ce,$.uniformsList=null,Ce}function aa(y){if(y.uniformsList===null){const z=y.currentProgram.getUniforms();y.uniformsList=Fi.seqWithValue(z.seq,y.uniforms)}return y.uniformsList}function sa(y,z){const k=N.get(y);k.outputColorSpace=z.outputColorSpace,k.batching=z.batching,k.instancing=z.instancing,k.instancingColor=z.instancingColor,k.instancingMorph=z.instancingMorph,k.skinning=z.skinning,k.morphTargets=z.morphTargets,k.morphNormals=z.morphNormals,k.morphColors=z.morphColors,k.morphTargetsCount=z.morphTargetsCount,k.numClippingPlanes=z.numClippingPlanes,k.numIntersection=z.numClipIntersection,k.vertexAlphas=z.vertexAlphas,k.vertexTangents=z.vertexTangents,k.toneMapping=z.toneMapping}tn.setAnimationLoop(function(y){qi&&qi(y)}),typeof self<"u"&&tn.setContext(self),this.setAnimationLoop=function(y){qi=y,Ze.setAnimationLoop(y),y===null?tn.stop():tn.start()},Ze.addEventListener("sessionstart",ea),Ze.addEventListener("sessionend",ta),this.render=function(y,z){if(z!==void 0&&z.isCamera!==!0||S===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(z),z=Ze.getCamera()),y.isScene===!0&&y.onBeforeRender(m,y,z,b),_=ze.get(y,M.length),_.init(),M.push(_),F.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),me.setFromProjectionMatrix(F),T=this.localClippingEnabled,le=fe.init(this.clippingPlanes,T),x=Se.get(y,f.length),x.init(),f.push(x),na(y,z,0,m.sortObjects),x.finish(),m.sortObjects===!0&&x.sort(j,Y),this.info.render.frame++,le===!0&&fe.beginShadows();const k=_.state.shadowsArray;if(xe.render(k,y,z),le===!0&&fe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ze.enabled!==!1&&Ze.isPresenting!==!1&&Ze.hasDepthSensing()!==!1||Ie.render(x,y),_.setupLights(m._useLegacyLights),z.isArrayCamera){const $=z.cameras;for(let q=0,de=$.length;q<de;q++){const _e=$[q];ia(x,y,_e,_e.viewport)}}else ia(x,y,z);b!==null&&(oe.updateMultisampleRenderTarget(b),oe.updateRenderTargetMipmap(b)),y.isScene===!0&&y.onAfterRender(m,y,z),ct.resetDefaultState(),O=-1,D=null,M.pop(),_=M.length>0?M[M.length-1]:null,f.pop(),x=f.length>0?f[f.length-1]:null},this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(y,z,k){N.get(y.texture).__webglTexture=z,N.get(y.depthTexture).__webglTexture=k;const $=N.get(y);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=k===void 0,$.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&($.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,z){const k=N.get(y);k.__webglFramebuffer=z,k.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(y,z=0,k=0){b=y,U=z,R=k;let $=!0,q=null,de=!1,_e=!1;if(y){const Me=N.get(y);Me.__useDefaultFramebuffer!==void 0?(E.bindFramebuffer(V.FRAMEBUFFER,null),$=!1):Me.__webglFramebuffer===void 0?oe.setupRenderTarget(y):Me.__hasExternalTextures&&oe.rebindTextures(y,N.get(y.texture).__webglTexture,N.get(y.depthTexture).__webglTexture);const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(_e=!0);const Re=N.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(q=Array.isArray(Re[z])?Re[z][k]:Re[z],de=!0):q=Q.isWebGL2&&y.samples>0&&oe.useMultisampledRTT(y)===!1?N.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?Re[k]:Re,H.copy(y.viewport),ae.copy(y.scissor),w=y.scissorTest}else H.copy(ue).multiplyScalar(K).floor(),ae.copy(X).multiplyScalar(K).floor(),w=J;if(E.bindFramebuffer(V.FRAMEBUFFER,q)&&Q.drawBuffers&&$&&E.drawBuffers(y,q),E.viewport(H),E.scissor(ae),E.setScissorTest(w),de){const Me=N.get(y.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+z,Me.__webglTexture,k)}else if(_e){const Me=N.get(y.texture),be=z||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,Me.__webglTexture,k||0,be)}O=-1},this.readRenderTargetPixels=function(y,z,k,$,q,de,_e){if(!y||!y.isWebGLRenderTarget)return;let Me=N.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&_e!==void 0&&(Me=Me[_e]),Me){E.bindFramebuffer(V.FRAMEBUFFER,Me);try{const be=y.texture,Re=be.format,Ce=be.type;if(Re!==zt&&qe.convert(Re)!==V.getParameter(V.IMPLEMENTATION_COLOR_READ_FORMAT))return;const Le=Ce===ai&&(ne.has("EXT_color_buffer_half_float")||Q.isWebGL2&&ne.has("EXT_color_buffer_float"));if(!(Ce===zn||qe.convert(Ce)===V.getParameter(V.IMPLEMENTATION_COLOR_READ_TYPE)||Ce===Kt&&(Q.isWebGL2||ne.has("OES_texture_float")||ne.has("WEBGL_color_buffer_float"))||Le))return;z>=0&&z<=y.width-$&&k>=0&&k<=y.height-q&&V.readPixels(z,k,$,q,qe.convert(Re),qe.convert(Ce),de)}finally{const be=b!==null?N.get(b).__webglFramebuffer:null;E.bindFramebuffer(V.FRAMEBUFFER,be)}}},this.copyFramebufferToTexture=function(y,z,k=0){const $=Math.pow(2,-k),q=Math.floor(z.image.width*$),de=Math.floor(z.image.height*$);oe.setTexture2D(z,0),V.copyTexSubImage2D(V.TEXTURE_2D,k,0,0,y.x,y.y,q,de),E.unbindTexture()},this.copyTextureToTexture=function(y,z,k,$=0){const q=z.image.width,de=z.image.height,_e=qe.convert(k.format),Me=qe.convert(k.type);oe.setTexture2D(k,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,k.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,k.unpackAlignment),z.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,$,y.x,y.y,q,de,_e,Me,z.image.data):z.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,$,y.x,y.y,z.mipmaps[0].width,z.mipmaps[0].height,_e,z.mipmaps[0].data):V.texSubImage2D(V.TEXTURE_2D,$,y.x,y.y,_e,Me,z.image),$===0&&k.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),E.unbindTexture()},this.copyTextureToTexture3D=function(y,z,k,$,q=0){if(m.isWebGL1Renderer)return;const de=Math.round(y.max.x-y.min.x),_e=Math.round(y.max.y-y.min.y),Me=y.max.z-y.min.z+1,be=qe.convert($.format),Re=qe.convert($.type);let Ce;if($.isData3DTexture)oe.setTexture3D($,0),Ce=V.TEXTURE_3D;else{if(!$.isDataArrayTexture&&!$.isCompressedArrayTexture)return;oe.setTexture2DArray($,0),Ce=V.TEXTURE_2D_ARRAY}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,$.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,$.unpackAlignment);const Le=V.getParameter(V.UNPACK_ROW_LENGTH),Be=V.getParameter(V.UNPACK_IMAGE_HEIGHT),gt=V.getParameter(V.UNPACK_SKIP_PIXELS),Pt=V.getParameter(V.UNPACK_SKIP_ROWS),nn=V.getParameter(V.UNPACK_SKIP_IMAGES),He=k.isCompressedTexture?k.mipmaps[q]:k.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,He.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,He.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,y.min.x),V.pixelStorei(V.UNPACK_SKIP_ROWS,y.min.y),V.pixelStorei(V.UNPACK_SKIP_IMAGES,y.min.z),k.isDataTexture||k.isData3DTexture?V.texSubImage3D(Ce,q,z.x,z.y,z.z,de,_e,Me,be,Re,He.data):$.isCompressedArrayTexture?V.compressedTexSubImage3D(Ce,q,z.x,z.y,z.z,de,_e,Me,be,He.data):V.texSubImage3D(Ce,q,z.x,z.y,z.z,de,_e,Me,be,Re,He),V.pixelStorei(V.UNPACK_ROW_LENGTH,Le),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,Be),V.pixelStorei(V.UNPACK_SKIP_PIXELS,gt),V.pixelStorei(V.UNPACK_SKIP_ROWS,Pt),V.pixelStorei(V.UNPACK_SKIP_IMAGES,nn),q===0&&$.generateMipmaps&&V.generateMipmap(Ce),E.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?oe.setTextureCube(y,0):y.isData3DTexture?oe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?oe.setTexture2DArray(y,0):oe.setTexture2D(y,0),E.unbindTexture()},this.resetState=function(){U=0,R=0,b=null,E.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Xr?"display-p3":"srgb",t.unpackColorSpace=Oe.workingColorSpace===Wi?"display-p3":"srgb"}get useLegacyLights(){return this._useLegacyLights}set useLegacyLights(e){this._useLegacyLights=e}}(class extends Fs{}).prototype.isWebGL1Renderer=!0;class vc extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ct,this.environmentRotation=new Ct,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class zs extends Xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ne(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const rs=new P,as=new P,ss=new Ve,Lr=new jr,Ni=new Xi;class xc extends Ke{constructor(e=new Bt,t=new zs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,a=t.count;i<a;i++)rs.fromBufferAttribute(t,i-1),as.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rs.distanceTo(as);e.setAttribute("lineDistance",new yt(n,1))}return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,a=e.params.Line.threshold,s=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(i),Ni.radius+=a,e.ray.intersectsSphere(Ni)===!1)return;ss.copy(i).invert(),Lr.copy(e.ray).applyMatrix4(ss);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),h=l*l,o=new P,c=new P,u=new P,d=new P,p=this.isLineSegments?2:1,g=n.index,x=n.attributes.position;if(g!==null)for(let _=Math.max(0,s.start),f=Math.min(g.count,s.start+s.count)-1;_<f;_+=p){const M=g.getX(_),m=g.getX(_+1);if(o.fromBufferAttribute(x,M),c.fromBufferAttribute(x,m),Lr.distanceSqToSegment(o,c,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(d);S<e.near||S>e.far||t.push({distance:S,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}else for(let _=Math.max(0,s.start),f=Math.min(x.count,s.start+s.count)-1;_<f;_+=p){if(o.fromBufferAttribute(x,_),c.fromBufferAttribute(x,_+1),Lr.distanceSqToSegment(o,c,d,u)>h)continue;d.applyMatrix4(this.matrixWorld);const M=e.ray.origin.distanceTo(d);M<e.near||M>e.far||t.push({distance:M,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){const s=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=i}}}}}const os=new P,ls=new P;class Mc extends xc{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,a=t.count;i<a;i+=2)os.fromBufferAttribute(t,i),ls.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+os.distanceTo(ls);e.setAttribute("lineDistance",new yt(n,1))}return this}}class Sc extends Xn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ne(16777215),this.specular=new Ne(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ct,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Bs extends Ke{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ur=new Ve,cs=new P,hs=new P;class yc{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yr,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new Ye(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;cs.setFromMatrixPosition(e.matrixWorld),t.position.copy(cs),hs.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(hs),t.updateMatrixWorld(),Ur.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ur),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ur)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),this.mapSize.x===512&&this.mapSize.y===512||(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ec extends yc{constructor(){super(new Ps(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tc extends Bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new Ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class bc extends Bs{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class us{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(nt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ac extends Mc{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=new Bt;n.setAttribute("position",new yt(t,3)),n.setAttribute("color",new yt([1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],3)),super(n,new zs({vertexColors:!0,toneMapped:!1})),this.type="AxesHelper"}setColors(e,t,n){const i=new Ne,a=this.geometry.attributes.color.array;return i.set(e),i.toArray(a,0),i.toArray(a,3),i.set(t),i.toArray(a,6),i.toArray(a,9),i.set(n),i.toArray(a,12),i.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}})),typeof window<"u"&&(window.__THREE__||(window.__THREE__=Ir));const ds={type:"change"},Dr={type:"start"},ps={type:"end"},Ii=new jr,fs=new jt,wc=Math.cos(70*co);class Rc extends vn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new P,this.cursor=new P,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ua,MIDDLE:da,RIGHT:pa},this.touches={ONE:fa,TWO:ma},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",E),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(ds),n.update(),a=i.NONE},this.update=function(){const A=new P,C=new _n().setFromUnitVectors(e.up,new P(0,1,0)),G=C.clone().invert(),ie=new P,ce=new _n,ve=new P,Se=2*Math.PI;return function(ze=null){const fe=n.object.position;A.copy(fe).sub(n.target),A.applyQuaternion(C),l.setFromVector3(A),n.autoRotate&&a===i.NONE&&ae(function(we){return we!==null?2*Math.PI/60*n.autoRotateSpeed*we:2*Math.PI/60/60*n.autoRotateSpeed}(ze)),n.enableDamping?(l.theta+=h.theta*n.dampingFactor,l.phi+=h.phi*n.dampingFactor):(l.theta+=h.theta,l.phi+=h.phi);let xe=n.minAzimuthAngle,Ie=n.maxAzimuthAngle;isFinite(xe)&&isFinite(Ie)&&(xe<-Math.PI?xe+=Se:xe>Math.PI&&(xe-=Se),Ie<-Math.PI?Ie+=Se:Ie>Math.PI&&(Ie-=Se),l.theta=xe<=Ie?Math.max(xe,Math.min(Ie,l.theta)):l.theta>(xe+Ie)/2?Math.max(xe,l.theta):Math.min(Ie,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(c,n.dampingFactor):n.target.add(c),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor);let ge=!1;if(n.zoomToCursor&&R||n.object.isOrthographicCamera)l.radius=Y(l.radius);else{const we=l.radius;l.radius=Y(l.radius*o),ge=we!=l.radius}if(A.setFromSpherical(l),A.applyQuaternion(G),fe.copy(n.target).add(A),n.object.lookAt(n.target),n.enableDamping===!0?(h.theta*=1-n.dampingFactor,h.phi*=1-n.dampingFactor,c.multiplyScalar(1-n.dampingFactor)):(h.set(0,0,0),c.set(0,0,0)),n.zoomToCursor&&R){let we=null;if(n.object.isPerspectiveCamera){const Pe=A.length();we=Y(Pe*o);const qe=Pe-we;n.object.position.addScaledVector(S,qe),n.object.updateMatrixWorld(),ge=!!qe}else if(n.object.isOrthographicCamera){const Pe=new P(U.x,U.y,0);Pe.unproject(n.object);const qe=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/o)),n.object.updateProjectionMatrix(),ge=qe!==n.object.zoom;const ct=new P(U.x,U.y,0);ct.unproject(n.object),n.object.position.sub(ct).add(Pe),n.object.updateMatrixWorld(),we=A.length()}else n.zoomToCursor=!1;we!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(we).add(n.object.position):(Ii.origin.copy(n.object.position),Ii.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ii.direction))<wc?e.lookAt(n.target):(fs.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ii.intersectPlane(fs,n.target))))}else if(n.object.isOrthographicCamera){const we=n.object.zoom;n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/o)),we!==n.object.zoom&&(n.object.updateProjectionMatrix(),ge=!0)}return o=1,R=!1,!!(ge||ie.distanceToSquared(n.object.position)>s||8*(1-ce.dot(n.object.quaternion))>s||ve.distanceToSquared(n.target)>s)&&(n.dispatchEvent(ds),ie.copy(n.object.position),ce.copy(n.object.quaternion),ve.copy(n.target),!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",N),n.domElement.removeEventListener("pointerdown",I),n.domElement.removeEventListener("pointercancel",B),n.domElement.removeEventListener("wheel",re),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",B),n.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let a=i.NONE;const s=1e-6,l=new us,h=new us;let o=1;const c=new P,u=new ye,d=new ye,p=new ye,g=new ye,x=new ye,_=new ye,f=new ye,M=new ye,m=new ye,S=new P,U=new ye;let R=!1;const b=[],O={};let D=!1;function H(A){const C=Math.abs(.01*A);return Math.pow(.95,n.zoomSpeed*C)}function ae(A){h.theta-=A}function w(A){h.phi-=A}const W=function(){const A=new P;return function(C,G){A.setFromMatrixColumn(G,0),A.multiplyScalar(-C),c.add(A)}}(),Z=function(){const A=new P;return function(C,G){n.screenSpacePanning===!0?A.setFromMatrixColumn(G,1):(A.setFromMatrixColumn(G,0),A.crossVectors(n.object.up,A)),A.multiplyScalar(C),c.add(A)}}(),se=function(){const A=new P;return function(C,G){const ie=n.domElement;if(n.object.isPerspectiveCamera){const ce=n.object.position;A.copy(ce).sub(n.target);let ve=A.length();ve*=Math.tan(n.object.fov/2*Math.PI/180),W(2*C*ve/ie.clientHeight,n.object.matrix),Z(2*G*ve/ie.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(C*(n.object.right-n.object.left)/n.object.zoom/ie.clientWidth,n.object.matrix),Z(G*(n.object.top-n.object.bottom)/n.object.zoom/ie.clientHeight,n.object.matrix)):n.enablePan=!1}}();function pe(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?o/=A:n.enableZoom=!1}function K(A){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?o*=A:n.enableZoom=!1}function j(A,C){if(!n.zoomToCursor)return;R=!0;const G=n.domElement.getBoundingClientRect(),ie=A-G.left,ce=C-G.top,ve=G.width,Se=G.height;U.x=ie/ve*2-1,U.y=-ce/Se*2+1,S.set(U.x,U.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(A){return Math.max(n.minDistance,Math.min(n.maxDistance,A))}function ue(A){u.set(A.clientX,A.clientY)}function X(A){g.set(A.clientX,A.clientY)}function J(A){if(b.length===1)u.set(A.pageX,A.pageY);else{const C=ee(A),G=.5*(A.pageX+C.x),ie=.5*(A.pageY+C.y);u.set(G,ie)}}function me(A){if(b.length===1)g.set(A.pageX,A.pageY);else{const C=ee(A),G=.5*(A.pageX+C.x),ie=.5*(A.pageY+C.y);g.set(G,ie)}}function le(A){const C=ee(A),G=A.pageX-C.x,ie=A.pageY-C.y,ce=Math.sqrt(G*G+ie*ie);f.set(0,ce)}function T(A){if(b.length==1)d.set(A.pageX,A.pageY);else{const G=ee(A),ie=.5*(A.pageX+G.x),ce=.5*(A.pageY+G.y);d.set(ie,ce)}p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const C=n.domElement;ae(2*Math.PI*p.x/C.clientHeight),w(2*Math.PI*p.y/C.clientHeight),u.copy(d)}function v(A){if(b.length===1)x.set(A.pageX,A.pageY);else{const C=ee(A),G=.5*(A.pageX+C.x),ie=.5*(A.pageY+C.y);x.set(G,ie)}_.subVectors(x,g).multiplyScalar(n.panSpeed),se(_.x,_.y),g.copy(x)}function F(A){const C=ee(A),G=A.pageX-C.x,ie=A.pageY-C.y,ce=Math.sqrt(G*G+ie*ie);M.set(0,ce),m.set(0,Math.pow(M.y/f.y,n.zoomSpeed)),pe(m.y),f.copy(M),j(.5*(A.pageX+C.x),.5*(A.pageY+C.y))}function I(A){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(A.pointerId),n.domElement.addEventListener("pointermove",L),n.domElement.addEventListener("pointerup",B)),function(C){for(let G=0;G<b.length;G++)if(b[G]==C.pointerId)return!0;return!1}(A)||(function(C){b.push(C.pointerId)}(A),A.pointerType==="touch"?te(A):function(C){let G;switch(C.button){case 0:G=n.mouseButtons.LEFT;break;case 1:G=n.mouseButtons.MIDDLE;break;case 2:G=n.mouseButtons.RIGHT;break;default:G=-1}switch(G){case da:if(n.enableZoom===!1)return;(function(ie){j(ie.clientX,ie.clientX),f.set(ie.clientX,ie.clientY)})(C),a=i.DOLLY;break;case ua:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enablePan===!1)return;X(C),a=i.PAN}else{if(n.enableRotate===!1)return;ue(C),a=i.ROTATE}break;case pa:if(C.ctrlKey||C.metaKey||C.shiftKey){if(n.enableRotate===!1)return;ue(C),a=i.ROTATE}else{if(n.enablePan===!1)return;X(C),a=i.PAN}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(Dr)}(A)))}function L(A){n.enabled!==!1&&(A.pointerType==="touch"?function(C){switch(oe(C),a){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;T(C),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;v(C),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;(function(G){n.enableZoom&&F(G),n.enablePan&&v(G)})(C),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;(function(G){n.enableZoom&&F(G),n.enableRotate&&T(G)})(C),n.update();break;default:a=i.NONE}}(A):function(C){switch(a){case i.ROTATE:if(n.enableRotate===!1)return;(function(G){d.set(G.clientX,G.clientY),p.subVectors(d,u).multiplyScalar(n.rotateSpeed);const ie=n.domElement;ae(2*Math.PI*p.x/ie.clientHeight),w(2*Math.PI*p.y/ie.clientHeight),u.copy(d),n.update()})(C);break;case i.DOLLY:if(n.enableZoom===!1)return;(function(G){M.set(G.clientX,G.clientY),m.subVectors(M,f),m.y>0?pe(H(m.y)):m.y<0&&K(H(m.y)),f.copy(M),n.update()})(C);break;case i.PAN:if(n.enablePan===!1)return;(function(G){x.set(G.clientX,G.clientY),_.subVectors(x,g).multiplyScalar(n.panSpeed),se(_.x,_.y),g.copy(x),n.update()})(C)}}(A))}function B(A){switch(function(C){delete O[C.pointerId];for(let G=0;G<b.length;G++)if(b[G]==C.pointerId)return void b.splice(G,1)}(A),b.length){case 0:n.domElement.releasePointerCapture(A.pointerId),n.domElement.removeEventListener("pointermove",L),n.domElement.removeEventListener("pointerup",B),n.dispatchEvent(ps),a=i.NONE;break;case 1:const C=b[0],G=O[C];te({pointerId:C,pageX:G.x,pageY:G.y})}}function re(A){n.enabled!==!1&&n.enableZoom!==!1&&a===i.NONE&&(A.preventDefault(),n.dispatchEvent(Dr),function(C){j(C.clientX,C.clientY),C.deltaY<0?K(H(C.deltaY)):C.deltaY>0&&pe(H(C.deltaY)),n.update()}(function(C){const G=C.deltaMode,ie={clientX:C.clientX,clientY:C.clientY,deltaY:C.deltaY};switch(G){case 1:ie.deltaY*=16;break;case 2:ie.deltaY*=100}return C.ctrlKey&&!D&&(ie.deltaY*=10),ie}(A)),n.dispatchEvent(ps))}function ne(A){A.key==="Control"&&(D=!0,n.domElement.getRootNode().addEventListener("keyup",Q,{passive:!0,capture:!0}))}function Q(A){A.key==="Control"&&(D=!1,n.domElement.getRootNode().removeEventListener("keyup",Q,{passive:!0,capture:!0}))}function E(A){n.enabled!==!1&&n.enablePan!==!1&&function(C){let G=!1;switch(C.code){case n.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(0,n.keyPanSpeed),G=!0;break;case n.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(0,-n.keyPanSpeed),G=!0;break;case n.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?ae(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(n.keyPanSpeed,0),G=!0;break;case n.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?ae(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):se(-n.keyPanSpeed,0),G=!0}G&&(C.preventDefault(),n.update())}(A)}function te(A){switch(oe(A),b.length){case 1:switch(n.touches.ONE){case fa:if(n.enableRotate===!1)return;J(A),a=i.TOUCH_ROTATE;break;case Zs:if(n.enablePan===!1)return;me(A),a=i.TOUCH_PAN;break;default:a=i.NONE}break;case 2:switch(n.touches.TWO){case ma:if(n.enableZoom===!1&&n.enablePan===!1)return;(function(C){n.enableZoom&&le(C),n.enablePan&&me(C)})(A),a=i.TOUCH_DOLLY_PAN;break;case Js:if(n.enableZoom===!1&&n.enableRotate===!1)return;(function(C){n.enableZoom&&le(C),n.enableRotate&&J(C)})(A),a=i.TOUCH_DOLLY_ROTATE;break;default:a=i.NONE}break;default:a=i.NONE}a!==i.NONE&&n.dispatchEvent(Dr)}function N(A){n.enabled!==!1&&A.preventDefault()}function oe(A){let C=O[A.pointerId];C===void 0&&(C=new ye,O[A.pointerId]=C),C.set(A.pageX,A.pageY)}function ee(A){const C=A.pointerId===b[0]?b[1]:b[0];return O[C]}n.domElement.addEventListener("contextmenu",N),n.domElement.addEventListener("pointerdown",I),n.domElement.addEventListener("pointercancel",B),n.domElement.addEventListener("wheel",re,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}let Nr,Ft,On,Fn,ii,Gr;function Hs(){requestAnimationFrame(Hs),Gr.update(),Fn.render(On,Ft)}(function(){Nr=document.createElement("div"),document.body.appendChild(Nr),On=new vc,Ft=new ft(75,window.innerWidth/window.innerHeight,.1,1e3),Fn=new Fs,Fn.setSize(window.innerWidth,window.innerHeight),Nr.appendChild(Fn.domElement);const r=new jn(1,1,1),e=new Sc({color:65280});ii=new wt(r,e),On.add(ii);const t=new Tc(16777215,1);On.add(t);const n=new Ac(5);On.add(n);const i=new bc(4210752);On.add(i),Ft.position.set(2,2,2),Ft.lookAt(n.position),Ft.lookAt(new P(0,0,0)),Gr=new Rc(Ft,Fn.domElement),Ft.position.set(0,20,100),Gr.update(),ii.position.x=0,ii.scale.set(2,2,2),ii.rotation.y=Math.PI/4,Hs()})(),window.addEventListener("resize",function(){Ft.aspect=window.innerWidth/window.innerHeight,Ft.updateProjectionMatrix(),Fn.setSize(window.innerWidth,window.innerHeight)},!1);
