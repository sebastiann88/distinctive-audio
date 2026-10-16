var f_=Object.defineProperty;var d_=(s,e,t)=>e in s?f_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Wf=(s,e,t)=>d_(s,typeof e!="symbol"?e+"":e,t);const p_="modulepreload",m_=function(s,e){return new URL(s,e).href},Xf={},Al=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=m_(l,n),l in Xf)return;Xf[l]=!0;const h=l.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const b=a[_];if(b.href===l&&(!h||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":p_,h||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),h)return new Promise((_,b)=>{d.addEventListener("load",_),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gu="169",Mw={ROTATE:0,DOLLY:1,PAN:2},Tw={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},g_=0,qf=1,__=2,Qp=1,Jp=2,ar=3,vr=0,Wn=1,Li=2,an=0,gr=1,jf=2,Yf=3,Kf=4,b_=5,hr=100,v_=101,x_=102,y_=103,S_=104,M_=200,T_=201,E_=202,w_=203,Mo=204,To=205,A_=206,R_=207,C_=208,P_=209,D_=210,L_=211,I_=212,U_=213,N_=214,Rh=0,Ch=1,Ph=2,_a=3,Dh=4,Lh=5,Ih=6,Uh=7,$p=0,O_=1,F_=2,_r=0,Hu=1,Vu=2,Wu=3,Xu=4,k_=5,qu=6,ju=7,Zf="attached",B_="detached",em=300,ba=301,va=302,Nh=303,Oh=304,ml=306,xa=1e3,Wi=1001,Zc=1002,Nt=1003,tm=1004,Qa=1005,cn=1006,Lc=1007,Xi=1008,xr=1009,nm=1010,im=1011,ya=1012,Yu=1013,yr=1014,vn=1015,un=1016,Ku=1017,Zu=1018,Sa=1020,rm=35902,sm=1021,am=1022,oi=1023,om=1024,cm=1025,oa=1026,Ma=1027,gl=1028,Qu=1029,lm=1030,Ju=1031,$u=1033,Ic=33776,Uc=33777,Nc=33778,Oc=33779,Fh=35840,kh=35841,Bh=35842,zh=35843,Gh=36196,Hh=37492,Vh=37496,Wh=37808,Xh=37809,qh=37810,jh=37811,Yh=37812,Kh=37813,Zh=37814,Qh=37815,Jh=37816,$h=37817,eu=37818,tu=37819,nu=37820,iu=37821,Fc=36492,ru=36494,su=36495,hm=36283,au=36284,ou=36285,cu=36286,Eo=2300,wo=2301,Rl=2302,Qf=2400,Jf=2401,$f=2402,z_=2500,G_=0,um=1,lu=2,H_=3200,V_=3201,ef=0,W_=1,ur="",Kt="srgb",tn="srgb-linear",tf="display-p3",_l="display-p3-linear",Qc="linear",Bt="srgb",Jc="rec709",$c="p3",Is=7680,ed=519,X_=512,q_=513,j_=514,fm=515,Y_=516,K_=517,Z_=518,Q_=519,hu=35044,td="300 es",pr=2e3,el=2001;class Ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const Mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let nd=1234567;const ao=Math.PI/180,Ta=180/Math.PI;function Ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Mn[s&255]+Mn[s>>8&255]+Mn[s>>16&255]+Mn[s>>24&255]+"-"+Mn[e&255]+Mn[e>>8&255]+"-"+Mn[e>>16&15|64]+Mn[e>>24&255]+"-"+Mn[t&63|128]+Mn[t>>8&255]+"-"+Mn[t>>16&255]+Mn[t>>24&255]+Mn[n&255]+Mn[n>>8&255]+Mn[n>>16&255]+Mn[n>>24&255]).toLowerCase()}function _n(s,e,t){return Math.max(e,Math.min(t,s))}function nf(s,e){return(s%e+e)%e}function J_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function $_(s,e,t){return s!==e?(t-s)/(e-s):0}function oo(s,e,t){return(1-t)*s+t*e}function e0(s,e,t,n){return oo(s,e,1-Math.exp(-t*n))}function t0(s,e=1){return e-Math.abs(nf(s,e*2)-e)}function n0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function i0(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function r0(s,e){return s+Math.floor(Math.random()*(e-s+1))}function s0(s,e){return s+Math.random()*(e-s)}function a0(s){return s*(.5-Math.random())}function o0(s){s!==void 0&&(nd=s);let e=nd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function c0(s){return s*ao}function l0(s){return s*Ta}function h0(s){return(s&s-1)===0&&s!==0}function u0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function f0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function d0(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),u=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*h,c*u,c*f,o*l);break;case"YZY":s.set(c*f,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*f,o*h,o*l);break;case"XZX":s.set(o*h,c*_,c*d,o*l);break;case"YXY":s.set(c*d,o*h,c*_,o*l);break;case"ZYZ":s.set(c*_,c*d,o*h,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ii(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Dt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const p0={DEG2RAD:ao,RAD2DEG:Ta,generateUUID:Ni,clamp:_n,euclideanModulo:nf,mapLinear:J_,inverseLerp:$_,lerp:oo,damp:e0,pingpong:t0,smoothstep:n0,smootherstep:i0,randInt:r0,randFloat:s0,randFloatSpread:a0,seededRandom:o0,degToRad:c0,radToDeg:l0,isPowerOfTwo:h0,ceilPowerOfTwo:u0,floorPowerOfTwo:f0,setQuaternionFromProperEuler:d0,normalize:Dt,denormalize:Ii};class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,r,a,o,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],_=n[8],b=i[0],p=i[3],m=i[6],S=i[1],y=i[4],M=i[7],D=i[2],P=i[5],w=i[8];return r[0]=a*b+o*S+c*D,r[3]=a*p+o*y+c*P,r[6]=a*m+o*M+c*w,r[1]=l*b+h*S+u*D,r[4]=l*p+h*y+u*P,r[7]=l*m+h*M+u*w,r[2]=f*b+d*S+_*D,r[5]=f*p+d*y+_*P,r[8]=f*m+d*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,f=o*c-h*r,d=l*r-a*c,_=t*u+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=u*b,e[1]=(i*l-h*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(h*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=d*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Cl.makeScale(e,t)),this}rotate(e){return this.premultiply(Cl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Cl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cl=new ot;function dm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ao(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function m0(){const s=Ao("canvas");return s.style.display="block",s}const id={};function kc(s){s in id||(id[s]=!0,console.warn(s))}function g0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function _0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function b0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const rd=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sd=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ka={[tn]:{transfer:Qc,primaries:Jc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Kt]:{transfer:Bt,primaries:Jc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[_l]:{transfer:Qc,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(sd),fromReference:s=>s.applyMatrix3(rd)},[tf]:{transfer:Bt,primaries:$c,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(sd),fromReference:s=>s.applyMatrix3(rd).convertLinearToSRGB()}},v0=new Set([tn,_l]),St={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!v0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=ka[e].toReference,i=ka[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return ka[s].primaries},getTransfer:function(s){return s===ur?Qc:ka[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(ka[e].luminanceCoefficients)}};function ca(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Pl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class x0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=Ao("canvas")),Us.width=e.width,Us.height=e.height;const n=Us.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ao("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ca(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ca(t[n]/255)*255):t[n]=ca(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let y0=0;class pm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(Dl(i[a].image)):r.push(Dl(i[a]))}else r=Dl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Dl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?x0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let S0=0;class Qt extends Ps{constructor(e=Qt.DEFAULT_IMAGE,t=Qt.DEFAULT_MAPPING,n=Wi,i=Wi,r=cn,a=Xi,o=oi,c=xr,l=Qt.DEFAULT_ANISOTROPY,h=ur){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:S0++}),this.uuid=Ni(),this.name="",this.source=new pm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==em)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xa:e.x=e.x-Math.floor(e.x);break;case Wi:e.x=e.x<0?0:1;break;case Zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xa:e.y=e.y-Math.floor(e.y);break;case Wi:e.y=e.y<0?0:1;break;case Zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=em;Qt.DEFAULT_ANISOTROPY=1;class Et{constructor(e=0,t=0,n=0,i=1){Et.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],_=c[9],b=c[2],p=c[6],m=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-b)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+b)<.1&&Math.abs(_+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(d+1)/2,D=(m+1)/2,P=(h+f)/4,w=(u+b)/4,L=(_+p)/4;return y>M&&y>D?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=w/n):M>D?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=P/i,r=L/i):D<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),n=w/r,i=L/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(u-b)*(u-b)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(u-b)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+m-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class M0 extends Ps{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Qt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new pm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends M0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class mm extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class T0 extends Qt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Nt,this.minFilter=Nt,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const f=r[a+0],d=r[a+1],_=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=b;return}if(u!==b||c!==f||l!==d||h!==_){let p=1-o;const m=c*f+l*d+h*_+u*b,S=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const D=Math.sqrt(y),P=Math.atan2(D,m*S);p=Math.sin(p*P)/D,o=Math.sin(o*P)/D}const M=o*S;if(c=c*p+f*M,l=l*p+d*M,h=h*p+_*M,u=u*p+b*M,p===1-o){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+h*u+c*d-l*f,e[t+1]=c*_+h*f+l*u-o*d,e[t+2]=l*_+h*d+o*f-c*u,e[t+3]=h*_-o*u-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(i/2),u=o(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"YXZ":this._x=f*h*u+l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"ZXY":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u-f*d*_;break;case"ZYX":this._x=f*h*u-l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u+f*d*_;break;case"YZX":this._x=f*h*u+l*d*_,this._y=l*d*u+f*h*_,this._z=l*h*_-f*d*u,this._w=l*h*u-f*d*_;break;case"XZY":this._x=f*h*u-l*d*_,this._y=l*d*u-f*h*_,this._z=l*h*_+f*d*u,this._w=l*h*u+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>u){const d=2*Math.sqrt(1+n-o-u);this._w=(h-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>u){const d=2*Math.sqrt(1+o-n-u);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+h)/d}else{const d=2*Math.sqrt(1+u-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+i*l-r*c,this._y=i*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-i*o,this._w=a*h-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=i*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class j{constructor(e=0,t=0,n=0){j.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ad.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ad.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),h=2*(o*t-r*i),u=2*(r*n-a*t);return this.x=t+c*l+a*u-o*h,this.y=n+c*h+o*l-r*u,this.z=i+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ll.copy(this).projectOnVector(e),this.sub(Ll)}reflect(e){return this.sub(Ll.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ll=new j,ad=new $r;class Qi{constructor(e=new j(1/0,1/0,1/0),t=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ei):Ei.fromBufferAttribute(r,a),Ei.applyMatrix4(e.matrixWorld),this.expandByPoint(Ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ei),Ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ba),Xo.subVectors(this.max,Ba),Ns.subVectors(e.a,Ba),Os.subVectors(e.b,Ba),Fs.subVectors(e.c,Ba),Er.subVectors(Os,Ns),wr.subVectors(Fs,Os),ns.subVectors(Ns,Fs);let t=[0,-Er.z,Er.y,0,-wr.z,wr.y,0,-ns.z,ns.y,Er.z,0,-Er.x,wr.z,0,-wr.x,ns.z,0,-ns.x,-Er.y,Er.x,0,-wr.y,wr.x,0,-ns.y,ns.x,0];return!Il(t,Ns,Os,Fs,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Il(t,Ns,Os,Fs,Xo))?!1:(qo.crossVectors(Er,wr),t=[qo.x,qo.y,qo.z],Il(t,Ns,Os,Fs,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const er=[new j,new j,new j,new j,new j,new j,new j,new j],Ei=new j,Wo=new Qi,Ns=new j,Os=new j,Fs=new j,Er=new j,wr=new j,ns=new j,Ba=new j,Xo=new j,qo=new j,is=new j;function Il(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){is.fromArray(s,r);const o=i.x*Math.abs(is.x)+i.y*Math.abs(is.y)+i.z*Math.abs(is.z),c=e.dot(is),l=t.dot(is),h=n.dot(is);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const E0=new Qi,za=new j,Ul=new j;class Ji{constructor(e=new j,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):E0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;za.subVectors(e,this.center);const t=za.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(za,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ul.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(za.copy(e.center).add(Ul)),this.expandByPoint(za.copy(e.center).sub(Ul))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const tr=new j,Nl=new j,jo=new j,Ar=new j,Ol=new j,Yo=new j,Fl=new j;class bl{constructor(e=new j,t=new j(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(tr.copy(this.origin).addScaledVector(this.direction,t),tr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Nl.copy(e).add(t).multiplyScalar(.5),jo.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(Nl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(jo),o=Ar.dot(this.direction),c=-Ar.dot(jo),l=Ar.lengthSq(),h=Math.abs(1-a*a);let u,f,d,_;if(h>0)if(u=a*c-o,f=a*o-c,_=r*h,u>=0)if(f>=-_)if(f<=_){const b=1/h;u*=b,f*=b,d=u*(u+a*f+2*o)+f*(a*u+f+2*c)+l}else f=r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;else f<=-_?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=_?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Nl).addScaledVector(jo,f),d}intersectSphere(e,t){tr.subVectors(e.center,this.origin);const n=tr.dot(this.direction),i=tr.dot(tr)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),u>=0?(o=(e.min.z-f.z)*u,c=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,c=(e.min.z-f.z)*u),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,tr)!==null}intersectTriangle(e,t,n,i,r){Ol.subVectors(t,e),Yo.subVectors(n,e),Fl.crossVectors(Ol,Yo);let a=this.direction.dot(Fl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Ar.subVectors(this.origin,e);const c=o*this.direction.dot(Yo.crossVectors(Ar,Yo));if(c<0)return null;const l=o*this.direction.dot(Ol.cross(Ar));if(l<0||c+l>a)return null;const h=-o*Ar.dot(Fl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,i,r,a,o,c,l,h,u,f,d,_,b,p){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,h,u,f,d,_,b,p)}set(e,t,n,i,r,a,o,c,l,h,u,f,d,_,b,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=r,m[5]=a,m[9]=o,m[13]=c,m[2]=l,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=_,m[11]=b,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/ks.setFromMatrixColumn(e,0).length(),r=1/ks.setFromMatrixColumn(e,1).length(),a=1/ks.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,d=a*u,_=o*h,b=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=d+_*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*h,d=c*u,_=l*h,b=l*u;t[0]=f+b*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=d*o-_,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*h,d=c*u,_=l*h,b=l*u;t[0]=f-b*o,t[4]=-a*u,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*h,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*h,d=a*u,_=o*h,b=o*u;t[0]=c*h,t[4]=_*l-d,t[8]=f*l+b,t[1]=c*u,t[5]=b*l+f,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,_=o*c,b=o*l;t[0]=c*h,t[4]=b-f*u,t[8]=_*u+d,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=d*u+_,t[10]=f-b*u}else if(e.order==="XZY"){const f=a*c,d=a*l,_=o*c,b=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=f*u+b,t[5]=a*h,t[9]=d*u-_,t[2]=_*u-d,t[6]=o*h,t[10]=b*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(w0,e,A0)}lookAt(e,t,n){const i=this.elements;return $n.subVectors(e,t),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Rr.crossVectors(n,$n),Rr.lengthSq()===0&&(Math.abs(n.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Rr.crossVectors(n,$n)),Rr.normalize(),Ko.crossVectors($n,Rr),i[0]=Rr.x,i[4]=Ko.x,i[8]=$n.x,i[1]=Rr.y,i[5]=Ko.y,i[9]=$n.y,i[2]=Rr.z,i[6]=Ko.z,i[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],_=n[2],b=n[6],p=n[10],m=n[14],S=n[3],y=n[7],M=n[11],D=n[15],P=i[0],w=i[4],L=i[8],O=i[12],v=i[1],E=i[5],N=i[9],W=i[13],z=i[2],$=i[6],H=i[10],te=i[14],Y=i[3],ce=i[7],U=i[11],ve=i[15];return r[0]=a*P+o*v+c*z+l*Y,r[4]=a*w+o*E+c*$+l*ce,r[8]=a*L+o*N+c*H+l*U,r[12]=a*O+o*W+c*te+l*ve,r[1]=h*P+u*v+f*z+d*Y,r[5]=h*w+u*E+f*$+d*ce,r[9]=h*L+u*N+f*H+d*U,r[13]=h*O+u*W+f*te+d*ve,r[2]=_*P+b*v+p*z+m*Y,r[6]=_*w+b*E+p*$+m*ce,r[10]=_*L+b*N+p*H+m*U,r[14]=_*O+b*W+p*te+m*ve,r[3]=S*P+y*v+M*z+D*Y,r[7]=S*w+y*E+M*$+D*ce,r[11]=S*L+y*N+M*H+D*U,r[15]=S*O+y*W+M*te+D*ve,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],f=e[10],d=e[14],_=e[3],b=e[7],p=e[11],m=e[15];return _*(+r*c*u-i*l*u-r*o*f+n*l*f+i*o*d-n*c*d)+b*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*h-r*c*h)+p*(+t*l*u-t*o*d-r*a*u+n*a*d+r*o*h-n*l*h)+m*(-i*o*h-t*c*u+t*o*f+i*a*u-n*a*f+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],f=e[10],d=e[11],_=e[12],b=e[13],p=e[14],m=e[15],S=u*p*l-b*f*l+b*c*d-o*p*d-u*c*m+o*f*m,y=_*f*l-h*p*l-_*c*d+a*p*d+h*c*m-a*f*m,M=h*b*l-_*u*l+_*o*d-a*b*d-h*o*m+a*u*m,D=_*u*c-h*b*c-_*o*f+a*b*f+h*o*p-a*u*p,P=t*S+n*y+i*M+r*D;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=S*w,e[1]=(b*f*r-u*p*r-b*i*d+n*p*d+u*i*m-n*f*m)*w,e[2]=(o*p*r-b*c*r+b*i*l-n*p*l-o*i*m+n*c*m)*w,e[3]=(u*c*r-o*f*r-u*i*l+n*f*l+o*i*d-n*c*d)*w,e[4]=y*w,e[5]=(h*p*r-_*f*r+_*i*d-t*p*d-h*i*m+t*f*m)*w,e[6]=(_*c*r-a*p*r-_*i*l+t*p*l+a*i*m-t*c*m)*w,e[7]=(a*f*r-h*c*r+h*i*l-t*f*l-a*i*d+t*c*d)*w,e[8]=M*w,e[9]=(_*u*r-h*b*r-_*n*d+t*b*d+h*n*m-t*u*m)*w,e[10]=(a*b*r-_*o*r+_*n*l-t*b*l-a*n*m+t*o*m)*w,e[11]=(h*o*r-a*u*r-h*n*l+t*u*l+a*n*d-t*o*d)*w,e[12]=D*w,e[13]=(h*b*i-_*u*i+_*n*f-t*b*f-h*n*p+t*u*p)*w,e[14]=(_*o*i-a*b*i-_*n*c+t*b*c+a*n*p-t*o*p)*w,e[15]=(a*u*i-h*o*i+h*n*c-t*u*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,h*o+n,h*c-i*a,0,l*c-i*o,h*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,f=r*l,d=r*h,_=r*u,b=a*h,p=a*u,m=o*u,S=c*l,y=c*h,M=c*u,D=n.x,P=n.y,w=n.z;return i[0]=(1-(b+m))*D,i[1]=(d+M)*D,i[2]=(_-y)*D,i[3]=0,i[4]=(d-M)*P,i[5]=(1-(f+m))*P,i[6]=(p+S)*P,i[7]=0,i[8]=(_+y)*w,i[9]=(p-S)*w,i[10]=(1-(f+b))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=ks.set(i[0],i[1],i[2]).length();const a=ks.set(i[4],i[5],i[6]).length(),o=ks.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],wi.copy(this);const l=1/r,h=1/a,u=1/o;return wi.elements[0]*=l,wi.elements[1]*=l,wi.elements[2]*=l,wi.elements[4]*=h,wi.elements[5]*=h,wi.elements[6]*=h,wi.elements[8]*=u,wi.elements[9]*=u,wi.elements[10]*=u,t.setFromRotationMatrix(wi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=pr){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===pr)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===el)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=pr){const c=this.elements,l=1/(t-e),h=1/(n-i),u=1/(a-r),f=(t+e)*l,d=(n+i)*h;let _,b;if(o===pr)_=(a+r)*u,b=-2*u;else if(o===el)_=r*u,b=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=b,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ks=new j,wi=new tt,w0=new j(0,0,0),A0=new j(1,1,1),Rr=new j,Ko=new j,$n=new j,od=new tt,cd=new $r;class Ki{constructor(e=0,t=0,n=0,i=Ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(_n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return od.makeRotationFromQuaternion(e),this.setFromRotationMatrix(od,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cd.setFromEuler(this),this.setFromQuaternion(cd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ki.DEFAULT_ORDER="XYZ";class gm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let R0=0;const ld=new j,Bs=new $r,nr=new tt,Zo=new j,Ga=new j,C0=new j,P0=new $r,hd=new j(1,0,0),ud=new j(0,1,0),fd=new j(0,0,1),dd={type:"added"},D0={type:"removed"},zs={type:"childadded",child:null},kl={type:"childremoved",child:null};class Vt extends Ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:R0++}),this.uuid=Ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vt.DEFAULT_UP.clone();const e=new j,t=new Ki,n=new $r,i=new j(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new tt},normalMatrix:{value:new ot}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=Vt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(hd,e)}rotateY(e){return this.rotateOnAxis(ud,e)}rotateZ(e){return this.rotateOnAxis(fd,e)}translateOnAxis(e,t){return ld.copy(e).applyQuaternion(this.quaternion),this.position.add(ld.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hd,e)}translateY(e){return this.translateOnAxis(ud,e)}translateZ(e){return this.translateOnAxis(fd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zo.copy(e):Zo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ga.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Ga,Zo,this.up):nr.lookAt(Zo,Ga,this.up),this.quaternion.setFromRotationMatrix(nr),i&&(nr.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(nr),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(dd),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(D0),kl.child=e,this.dispatchEvent(kl),kl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(dd),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,e,C0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ga,P0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Vt.DEFAULT_UP=new j(0,1,0);Vt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new j,ir=new j,Bl=new j,rr=new j,Gs=new j,Hs=new j,pd=new j,zl=new j,Gl=new j,Hl=new j,Vl=new Et,Wl=new Et,Xl=new Et;class Ui{constructor(e=new j,t=new j,n=new j){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Ai.subVectors(e,t),i.cross(Ai);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Ai.subVectors(i,t),ir.subVectors(n,t),Bl.subVectors(e,t);const a=Ai.dot(Ai),o=Ai.dot(ir),c=Ai.dot(Bl),l=ir.dot(ir),h=ir.dot(Bl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,d=(l*c-o*h)*f,_=(a*h-o*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,rr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,rr.x),c.addScaledVector(a,rr.y),c.addScaledVector(o,rr.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Vl.setScalar(0),Wl.setScalar(0),Xl.setScalar(0),Vl.fromBufferAttribute(e,t),Wl.fromBufferAttribute(e,n),Xl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Vl,r.x),a.addScaledVector(Wl,r.y),a.addScaledVector(Xl,r.z),a}static isFrontFacing(e,t,n,i){return Ai.subVectors(n,t),ir.subVectors(e,t),Ai.cross(ir).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ai.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ai.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ui.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ui.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Gs.subVectors(i,n),Hs.subVectors(r,n),zl.subVectors(e,n);const c=Gs.dot(zl),l=Hs.dot(zl);if(c<=0&&l<=0)return t.copy(n);Gl.subVectors(e,i);const h=Gs.dot(Gl),u=Hs.dot(Gl);if(h>=0&&u<=h)return t.copy(i);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(Gs,a);Hl.subVectors(e,r);const d=Gs.dot(Hl),_=Hs.dot(Hl);if(_>=0&&d<=_)return t.copy(r);const b=d*l-c*_;if(b<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Hs,o);const p=h*_-d*u;if(p<=0&&u-h>=0&&d-_>=0)return pd.subVectors(r,i),o=(u-h)/(u-h+(d-_)),t.copy(i).addScaledVector(pd,o);const m=1/(p+b+f);return a=b*m,o=f*m,t.copy(n).addScaledVector(Gs,a).addScaledVector(Hs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const _m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cr={h:0,s:0,l:0},Qo={h:0,s:0,l:0};function ql(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,St.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=St.workingColorSpace){return this.r=e,this.g=t,this.b=n,St.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=St.workingColorSpace){if(e=nf(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ql(a,r,e+1/3),this.g=ql(a,r,e),this.b=ql(a,r,e-1/3)}return St.toWorkingColorSpace(this,i),this}setStyle(e,t=Kt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){const n=_m[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ca(e.r),this.g=ca(e.g),this.b=ca(e.b),this}copyLinearToSRGB(e){return this.r=Pl(e.r),this.g=Pl(e.g),this.b=Pl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return St.fromWorkingColorSpace(Tn.copy(this),e),Math.round(_n(Tn.r*255,0,255))*65536+Math.round(_n(Tn.g*255,0,255))*256+Math.round(_n(Tn.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=St.workingColorSpace){St.fromWorkingColorSpace(Tn.copy(this),t);const n=Tn.r,i=Tn.g,r=Tn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=St.workingColorSpace){return St.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Kt){St.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,n=Tn.g,i=Tn.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Cr),this.setHSL(Cr.h+e,Cr.s+t,Cr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cr),e.getHSL(Qo);const n=oo(Cr.h,Qo.h,t),i=oo(Cr.s,Qo.s,t),r=oo(Cr.l,Qo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Xe;Xe.NAMES=_m;let L0=0;class Oi extends Ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:L0++}),this.uuid=Ni(),this.name="",this.type="Material",this.blending=gr,this.side=vr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=To,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=_a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ed,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==vr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==To&&(n.blendDst=this.blendDst),this.blendEquation!==hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==_a&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ed&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Hn extends Oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fr=I0();function I0(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;!(l&8388608);)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function U0(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=_n(s,-65504,65504),fr.floatView[0]=s;const e=fr.uint32View[0],t=e>>23&511;return fr.baseTable[t]+((e&8388607)>>fr.shiftTable[t])}function N0(s){const e=s>>10;return fr.uint32View[0]=fr.mantissaTable[fr.offsetTable[e]+(s&1023)]+fr.exponentTable[e],fr.floatView[0]}const ta={toHalfFloat:U0,fromHalfFloat:N0},rn=new j,Jo=new ct;class yn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=hu,this.updateRanges=[],this.gpuType=vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Jo.fromBufferAttribute(this,t),Jo.applyMatrix3(e),this.setXY(t,Jo.x,Jo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ii(t,this.array)),t}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ii(t,this.array)),t}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ii(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ii(t,this.array)),t}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==hu&&(e.usage=this.usage),e}}class bm extends yn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vm extends yn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class jn extends yn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let O0=0;const mi=new tt,jl=new Vt,Vs=new j,ei=new Qi,Ha=new Qi,pn=new j;class pi extends Ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dm(e)?vm:bm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,n){return mi.makeTranslation(e,t,n),this.applyMatrix4(mi),this}scale(e,t,n){return mi.makeScale(e,t,n),this.applyMatrix4(mi),this}lookAt(e){return jl.lookAt(e),jl.updateMatrix(),this.applyMatrix4(jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];ei.setFromBufferAttribute(r),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ji);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(e){const n=this.boundingSphere.center;if(ei.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ha.setFromBufferAttribute(o),this.morphTargetsRelative?(pn.addVectors(ei.min,Ha.min),ei.expandByPoint(pn),pn.addVectors(ei.max,Ha.max),ei.expandByPoint(pn)):(ei.expandByPoint(Ha.min),ei.expandByPoint(Ha.max))}ei.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)pn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(pn));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pn.fromBufferAttribute(o,l),c&&(Vs.fromBufferAttribute(e,l),pn.add(Vs)),i=Math.max(i,n.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new j,c[L]=new j;const l=new j,h=new j,u=new j,f=new ct,d=new ct,_=new ct,b=new j,p=new j;function m(L,O,v){l.fromBufferAttribute(n,L),h.fromBufferAttribute(n,O),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,L),d.fromBufferAttribute(r,O),_.fromBufferAttribute(r,v),h.sub(l),u.sub(l),d.sub(f),_.sub(f);const E=1/(d.x*_.y-_.x*d.y);isFinite(E)&&(b.copy(h).multiplyScalar(_.y).addScaledVector(u,-d.y).multiplyScalar(E),p.copy(u).multiplyScalar(d.x).addScaledVector(h,-_.x).multiplyScalar(E),o[L].add(b),o[O].add(b),o[v].add(b),c[L].add(p),c[O].add(p),c[v].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let L=0,O=S.length;L<O;++L){const v=S[L],E=v.start,N=v.count;for(let W=E,z=E+N;W<z;W+=3)m(e.getX(W+0),e.getX(W+1),e.getX(W+2))}const y=new j,M=new j,D=new j,P=new j;function w(L){D.fromBufferAttribute(i,L),P.copy(D);const O=o[L];y.copy(O),y.sub(D.multiplyScalar(D.dot(O))).normalize(),M.crossVectors(P,O);const E=M.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,E)}for(let L=0,O=S.length;L<O;++L){const v=S[L],E=v.start,N=v.count;for(let W=E,z=E+N;W<z;W+=3)w(e.getX(W+0)),w(e.getX(W+1)),w(e.getX(W+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new j,r=new j,a=new j,o=new j,c=new j,l=new j,h=new j,u=new j;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),b=e.getX(f+1),p=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,p),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,p),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(i,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pn.fromBufferAttribute(e,t),pn.normalize(),e.setXYZ(t,pn.x,pn.y,pn.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,u=o.normalized,f=new l.constructor(c.length*h);let d=0,_=0;for(let b=0,p=c.length;b<p;b++){o.isInterleavedBufferAttribute?d=c[b]*o.data.stride+o.offset:d=c[b]*h;for(let m=0;m<h;m++)f[_++]=l[d++]}return new yn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){const f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const d=l[u];h.push(d.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const md=new tt,rs=new bl,$o=new Ji,gd=new j,ec=new j,tc=new j,nc=new j,Yl=new j,ic=new j,_d=new j,rc=new j;class _t extends Vt{constructor(e=new pi,t=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){ic.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],u=r[c];h!==0&&(Yl.fromBufferAttribute(u,e),a?ic.addScaledVector(Yl,h):ic.addScaledVector(Yl.sub(t),h))}t.add(ic)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(r),rs.copy(e.ray).recast(e.near),!($o.containsPoint(rs.origin)===!1&&(rs.intersectSphere($o,gd)===null||rs.origin.distanceToSquared(gd)>(e.far-e.near)**2))&&(md.copy(r).invert(),rs.copy(e.ray).applyMatrix4(md),!(n.boundingBox!==null&&rs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,rs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,D=y;M<D;M+=3){const P=o.getX(M),w=o.getX(M+1),L=o.getX(M+2);i=sc(this,m,e,n,l,h,u,P,w,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let p=_,m=b;p<m;p+=3){const S=o.getX(p),y=o.getX(p+1),M=o.getX(p+2);i=sc(this,a,e,n,l,h,u,S,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const p=f[_],m=a[p.materialIndex],S=Math.max(p.start,d.start),y=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let M=S,D=y;M<D;M+=3){const P=M,w=M+1,L=M+2;i=sc(this,m,e,n,l,h,u,P,w,L),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let p=_,m=b;p<m;p+=3){const S=p,y=p+1,M=p+2;i=sc(this,a,e,n,l,h,u,S,y,M),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function F0(s,e,t,n,i,r,a,o){let c;if(e.side===Wn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===vr,o),c===null)return null;rc.copy(o),rc.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(rc);return l<t.near||l>t.far?null:{distance:l,point:rc.clone(),object:s}}function sc(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,ec),s.getVertexPosition(c,tc),s.getVertexPosition(l,nc);const h=F0(s,e,t,n,ec,tc,nc,_d);if(h){const u=new j;Ui.getBarycoord(_d,ec,tc,nc,u),i&&(h.uv=Ui.getInterpolatedAttribute(i,o,c,l,u,new ct)),r&&(h.uv1=Ui.getInterpolatedAttribute(r,o,c,l,u,new ct)),a&&(h.normal=Ui.getInterpolatedAttribute(a,o,c,l,u,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new j,materialIndex:0};Ui.getNormal(ec,tc,nc,f.normal),h.face=f,h.barycoord=u}return h}class Ds extends pi{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],u=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new jn(l,3)),this.setAttribute("normal",new jn(h,3)),this.setAttribute("uv",new jn(u,2));function _(b,p,m,S,y,M,D,P,w,L,O){const v=M/w,E=D/L,N=M/2,W=D/2,z=P/2,$=w+1,H=L+1;let te=0,Y=0;const ce=new j;for(let U=0;U<H;U++){const ve=U*E-W;for(let Re=0;Re<$;Re++){const Ne=Re*v-N;ce[b]=Ne*S,ce[p]=ve*y,ce[m]=z,l.push(ce.x,ce.y,ce.z),ce[b]=0,ce[p]=0,ce[m]=P>0?1:-1,h.push(ce.x,ce.y,ce.z),u.push(Re/w),u.push(1-U/L),te+=1}}for(let U=0;U<L;U++)for(let ve=0;ve<w;ve++){const Re=f+ve+$*U,Ne=f+ve+$*(U+1),ne=f+(ve+1)+$*(U+1),oe=f+(ve+1)+$*U;c.push(Re,Ne,oe),c.push(Ne,ne,oe),Y+=6}o.addGroup(d,Y,O),d+=Y,f+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ea(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function On(s){const e={};for(let t=0;t<s.length;t++){const n=Ea(s[t]);for(const i in n)e[i]=n[i]}return e}function k0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function xm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:St.workingColorSpace}const Fr={clone:Ea,merge:On};var B0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,z0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rn extends Oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=B0,this.fragmentShader=z0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ea(e.uniforms),this.uniformsGroups=k0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let ym=class extends Vt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=pr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Pr=new j,bd=new ct,vd=new ct;class An extends ym{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ta*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ta*2*Math.atan(Math.tan(ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z),Pr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pr.x,Pr.y).multiplyScalar(-e/Pr.z)}getViewSize(e,t){return this.getViewBounds(e,bd,vd),t.subVectors(vd,bd)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ao*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ws=-90,Xs=1;class G0 extends Vt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new An(Ws,Xs,e,t);i.layers=this.layers,this.add(i);const r=new An(Ws,Xs,e,t);r.layers=this.layers,this.add(r);const a=new An(Ws,Xs,e,t);a.layers=this.layers,this.add(a);const o=new An(Ws,Xs,e,t);o.layers=this.layers,this.add(o);const c=new An(Ws,Xs,e,t);c.layers=this.layers,this.add(c);const l=new An(Ws,Xs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===pr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===el)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Sm extends Qt{constructor(e,t,n,i,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ba,super(e,t,n,i,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class H0 extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Sm(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:cn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ds(5,5,5),r=new Rn({name:"CubemapFromEquirect",uniforms:Ea(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wn,blending:an});r.uniforms.tEquirect.value=t;const a=new _t(i,r),o=t.minFilter;return t.minFilter===Xi&&(t.minFilter=cn),new G0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Kl=new j,V0=new j,W0=new ot;class us{constructor(e=new j(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Kl.subVectors(n,t).cross(V0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Kl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||W0.getNormalMatrix(e),i=this.coplanarPoint(Kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ss=new Ji,ac=new j;class rf{constructor(e=new us,t=new us,n=new us,i=new us,r=new us,a=new us){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pr){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],h=i[5],u=i[6],f=i[7],d=i[8],_=i[9],b=i[10],p=i[11],m=i[12],S=i[13],y=i[14],M=i[15];if(n[0].setComponents(c-r,f-l,p-d,M-m).normalize(),n[1].setComponents(c+r,f+l,p+d,M+m).normalize(),n[2].setComponents(c+a,f+h,p+_,M+S).normalize(),n[3].setComponents(c-a,f-h,p-_,M-S).normalize(),n[4].setComponents(c-o,f-u,p-b,M-y).normalize(),t===pr)n[5].setComponents(c+o,f+u,p+b,M+y).normalize();else if(t===el)n[5].setComponents(o,u,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ss.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ss.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ss)}intersectsSprite(e){return ss.center.set(0,0,0),ss.radius=.7071067811865476,ss.applyMatrix4(e.matrixWorld),this.intersectsSphere(ss)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ac.x=i.normal.x>0?e.max.x:e.min.x,ac.y=i.normal.y>0?e.max.y:e.min.y,ac.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ac)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function X0(s){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,u=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,h),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<u.length;d++){const _=u[f],b=u[d];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,u[f]=b)}u.length=f+1;for(let d=0,_=u.length;d<_;d++){const b=u[d];s.bufferSubData(l,b.start*h.BYTES_PER_ELEMENT,h,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Gi extends pi{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,h=c+1,u=e/o,f=t/c,d=[],_=[],b=[],p=[];for(let m=0;m<h;m++){const S=m*f-a;for(let y=0;y<l;y++){const M=y*u-r;_.push(M,-S,0),b.push(0,0,1),p.push(y/o),p.push(1-m/c)}}for(let m=0;m<c;m++)for(let S=0;S<o;S++){const y=S+l*m,M=S+l*(m+1),D=S+1+l*(m+1),P=S+1+l*m;d.push(y,M,P),d.push(M,D,P)}this.setIndex(d),this.setAttribute("position",new jn(_,3)),this.setAttribute("normal",new jn(b,3)),this.setAttribute("uv",new jn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var q0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,j0=`#ifdef USE_ALPHAHASH
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
#endif`,Y0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,K0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Q0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,J0=`#ifdef USE_AOMAP
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
#endif`,$0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,eb=`#ifdef USE_BATCHING
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
#endif`,tb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,nb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ib=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sb=`#ifdef USE_IRIDESCENCE
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
#endif`,ab=`#ifdef USE_BUMPMAP
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
#endif`,ob=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ub=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,db=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,mb=`#define PI 3.141592653589793
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
} // validated`,gb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_b=`vec3 transformedNormal = objectNormal;
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
#endif`,bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Mb=`
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
}`,Tb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,wb=`#ifdef USE_ENVMAP
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
#endif`,Ab=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Db=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ib=`#ifdef USE_GRADIENTMAP
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
}`,Ub=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Nb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ob=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fb=`uniform bool receiveShadow;
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
#endif`,kb=`#ifdef USE_ENVMAP
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
#endif`,Bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Hb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Vb=`PhysicalMaterial material;
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
#endif`,Wb=`struct PhysicalMaterial {
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
}`,Xb=`
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
#endif`,qb=`#if defined( RE_IndirectDiffuse )
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Yb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Kb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Jb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$b=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ev=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tv=`#if defined( USE_POINTS_UV )
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
#endif`,nv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,sv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,av=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ov=`#ifdef USE_MORPHTARGETS
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
#endif`,cv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pv=`#ifdef USE_NORMALMAP
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
#endif`,mv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_v=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Av=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pv=`float getShadowMask() {
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
}`,Dv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Lv=`#ifdef USE_SKINNING
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
#endif`,Iv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ov=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bv=`#ifdef USE_TRANSMISSION
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
#endif`,zv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qv=`uniform sampler2D t2D;
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,Jv=`#if DEPTH_PACKING == 3200
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
}`,$v=`#define DISTANCE
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
}`,ex=`#define DISTANCE
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
}`,tx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ix=`uniform float scale;
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
}`,rx=`uniform vec3 diffuse;
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
}`,sx=`#include <common>
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
}`,ax=`uniform vec3 diffuse;
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
}`,ox=`#define LAMBERT
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
}`,cx=`#define LAMBERT
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
}`,lx=`#define MATCAP
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
}`,hx=`#define MATCAP
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
}`,ux=`#define NORMAL
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
}`,fx=`#define NORMAL
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
}`,dx=`#define PHONG
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
}`,px=`#define PHONG
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
}`,mx=`#define STANDARD
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
}`,gx=`#define STANDARD
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
}`,_x=`#define TOON
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
}`,bx=`#define TOON
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
}`,vx=`uniform float size;
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
}`,xx=`uniform vec3 diffuse;
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
}`,yx=`#include <common>
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
}`,Sx=`uniform vec3 color;
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
}`,Mx=`uniform float rotation;
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
}`,Tx=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:q0,alphahash_pars_fragment:j0,alphamap_fragment:Y0,alphamap_pars_fragment:K0,alphatest_fragment:Z0,alphatest_pars_fragment:Q0,aomap_fragment:J0,aomap_pars_fragment:$0,batching_pars_vertex:eb,batching_vertex:tb,begin_vertex:nb,beginnormal_vertex:ib,bsdfs:rb,iridescence_fragment:sb,bumpmap_pars_fragment:ab,clipping_planes_fragment:ob,clipping_planes_pars_fragment:cb,clipping_planes_pars_vertex:lb,clipping_planes_vertex:hb,color_fragment:ub,color_pars_fragment:fb,color_pars_vertex:db,color_vertex:pb,common:mb,cube_uv_reflection_fragment:gb,defaultnormal_vertex:_b,displacementmap_pars_vertex:bb,displacementmap_vertex:vb,emissivemap_fragment:xb,emissivemap_pars_fragment:yb,colorspace_fragment:Sb,colorspace_pars_fragment:Mb,envmap_fragment:Tb,envmap_common_pars_fragment:Eb,envmap_pars_fragment:wb,envmap_pars_vertex:Ab,envmap_physical_pars_fragment:kb,envmap_vertex:Rb,fog_vertex:Cb,fog_pars_vertex:Pb,fog_fragment:Db,fog_pars_fragment:Lb,gradientmap_pars_fragment:Ib,lightmap_pars_fragment:Ub,lights_lambert_fragment:Nb,lights_lambert_pars_fragment:Ob,lights_pars_begin:Fb,lights_toon_fragment:Bb,lights_toon_pars_fragment:zb,lights_phong_fragment:Gb,lights_phong_pars_fragment:Hb,lights_physical_fragment:Vb,lights_physical_pars_fragment:Wb,lights_fragment_begin:Xb,lights_fragment_maps:qb,lights_fragment_end:jb,logdepthbuf_fragment:Yb,logdepthbuf_pars_fragment:Kb,logdepthbuf_pars_vertex:Zb,logdepthbuf_vertex:Qb,map_fragment:Jb,map_pars_fragment:$b,map_particle_fragment:ev,map_particle_pars_fragment:tv,metalnessmap_fragment:nv,metalnessmap_pars_fragment:iv,morphinstance_vertex:rv,morphcolor_vertex:sv,morphnormal_vertex:av,morphtarget_pars_vertex:ov,morphtarget_vertex:cv,normal_fragment_begin:lv,normal_fragment_maps:hv,normal_pars_fragment:uv,normal_pars_vertex:fv,normal_vertex:dv,normalmap_pars_fragment:pv,clearcoat_normal_fragment_begin:mv,clearcoat_normal_fragment_maps:gv,clearcoat_pars_fragment:_v,iridescence_pars_fragment:bv,opaque_fragment:vv,packing:xv,premultiplied_alpha_fragment:yv,project_vertex:Sv,dithering_fragment:Mv,dithering_pars_fragment:Tv,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:wv,shadowmap_pars_fragment:Av,shadowmap_pars_vertex:Rv,shadowmap_vertex:Cv,shadowmask_pars_fragment:Pv,skinbase_vertex:Dv,skinning_pars_vertex:Lv,skinning_vertex:Iv,skinnormal_vertex:Uv,specularmap_fragment:Nv,specularmap_pars_fragment:Ov,tonemapping_fragment:Fv,tonemapping_pars_fragment:kv,transmission_fragment:Bv,transmission_pars_fragment:zv,uv_pars_fragment:Gv,uv_pars_vertex:Hv,uv_vertex:Vv,worldpos_vertex:Wv,background_vert:Xv,background_frag:qv,backgroundCube_vert:jv,backgroundCube_frag:Yv,cube_vert:Kv,cube_frag:Zv,depth_vert:Qv,depth_frag:Jv,distanceRGBA_vert:$v,distanceRGBA_frag:ex,equirect_vert:tx,equirect_frag:nx,linedashed_vert:ix,linedashed_frag:rx,meshbasic_vert:sx,meshbasic_frag:ax,meshlambert_vert:ox,meshlambert_frag:cx,meshmatcap_vert:lx,meshmatcap_frag:hx,meshnormal_vert:ux,meshnormal_frag:fx,meshphong_vert:dx,meshphong_frag:px,meshphysical_vert:mx,meshphysical_frag:gx,meshtoon_vert:_x,meshtoon_frag:bx,points_vert:vx,points_frag:xx,shadow_vert:yx,shadow_frag:Sx,sprite_vert:Mx,sprite_frag:Tx},Ee={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Hi={basic:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:On([Ee.common,Ee.specularmap,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:On([Ee.common,Ee.envmap,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.roughnessmap,Ee.metalnessmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:On([Ee.common,Ee.aomap,Ee.lightmap,Ee.emissivemap,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.gradientmap,Ee.fog,Ee.lights,{emissive:{value:new Xe(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,Ee.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:On([Ee.points,Ee.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:On([Ee.common,Ee.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:On([Ee.common,Ee.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:On([Ee.common,Ee.bumpmap,Ee.normalmap,Ee.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:On([Ee.sprite,Ee.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:On([Ee.common,Ee.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:On([Ee.lights,Ee.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Hi.physical={uniforms:On([Hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const oc={r:0,b:0,g:0},as=new Ki,Ex=new tt;function wx(s,e,t,n,i,r,a){const o=new Xe(0);let c=r===!0?0:1,l,h,u=null,f=0,d=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function b(S){let y=!1;const M=_(S);M===null?m(o,c):M&&M.isColor&&(m(M,1),y=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(S,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===ml)?(h===void 0&&(h=new _t(new Ds(1,1,1),new Rn({name:"BackgroundCubeMaterial",uniforms:Ea(Hi.backgroundCube.uniforms),vertexShader:Hi.backgroundCube.vertexShader,fragmentShader:Hi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),as.copy(y.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Ex.makeRotationFromEuler(as)),h.material.toneMapped=St.getTransfer(M.colorSpace)!==Bt,(u!==M||f!==M.version||d!==s.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=s.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new _t(new Gi(2,2),new Rn({name:"BackgroundMaterial",uniforms:Ea(Hi.background.uniforms),vertexShader:Hi.background.vertexShader,fragmentShader:Hi.background.fragmentShader,side:vr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=St.getTransfer(M.colorSpace)!==Bt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,u=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function m(S,y){S.getRGB(oc,xm(s)),n.buffers.color.setClear(oc.r,oc.g,oc.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,m(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,m(o,c)},render:b,addToRenderList:p}}function Ax(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(v,E,N,W,z){let $=!1;const H=u(W,N,E);r!==H&&(r=H,l(r.object)),$=d(v,W,N,z),$&&_(v,W,N,z),z!==null&&e.update(z,s.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,M(v,E,N,W),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function h(v){return s.deleteVertexArray(v)}function u(v,E,N){const W=N.wireframe===!0;let z=n[v.id];z===void 0&&(z={},n[v.id]=z);let $=z[E.id];$===void 0&&($={},z[E.id]=$);let H=$[W];return H===void 0&&(H=f(c()),$[W]=H),H}function f(v){const E=[],N=[],W=[];for(let z=0;z<t;z++)E[z]=0,N[z]=0,W[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:N,attributeDivisors:W,object:v,attributes:{},index:null}}function d(v,E,N,W){const z=r.attributes,$=E.attributes;let H=0;const te=N.getAttributes();for(const Y in te)if(te[Y].location>=0){const U=z[Y];let ve=$[Y];if(ve===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(ve=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(ve=v.instanceColor)),U===void 0||U.attribute!==ve||ve&&U.data!==ve.data)return!0;H++}return r.attributesNum!==H||r.index!==W}function _(v,E,N,W){const z={},$=E.attributes;let H=0;const te=N.getAttributes();for(const Y in te)if(te[Y].location>=0){let U=$[Y];U===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(U=v.instanceColor));const ve={};ve.attribute=U,U&&U.data&&(ve.data=U.data),z[Y]=ve,H++}r.attributes=z,r.attributesNum=H,r.index=W}function b(){const v=r.newAttributes;for(let E=0,N=v.length;E<N;E++)v[E]=0}function p(v){m(v,0)}function m(v,E){const N=r.newAttributes,W=r.enabledAttributes,z=r.attributeDivisors;N[v]=1,W[v]===0&&(s.enableVertexAttribArray(v),W[v]=1),z[v]!==E&&(s.vertexAttribDivisor(v,E),z[v]=E)}function S(){const v=r.newAttributes,E=r.enabledAttributes;for(let N=0,W=E.length;N<W;N++)E[N]!==v[N]&&(s.disableVertexAttribArray(N),E[N]=0)}function y(v,E,N,W,z,$,H){H===!0?s.vertexAttribIPointer(v,E,N,z,$):s.vertexAttribPointer(v,E,N,W,z,$)}function M(v,E,N,W){b();const z=W.attributes,$=N.getAttributes(),H=E.defaultAttributeValues;for(const te in $){const Y=$[te];if(Y.location>=0){let ce=z[te];if(ce===void 0&&(te==="instanceMatrix"&&v.instanceMatrix&&(ce=v.instanceMatrix),te==="instanceColor"&&v.instanceColor&&(ce=v.instanceColor)),ce!==void 0){const U=ce.normalized,ve=ce.itemSize,Re=e.get(ce);if(Re===void 0)continue;const Ne=Re.buffer,ne=Re.type,oe=Re.bytesPerElement,fe=ne===s.INT||ne===s.UNSIGNED_INT||ce.gpuType===Yu;if(ce.isInterleavedBufferAttribute){const ge=ce.data,Ce=ge.stride,Pe=ce.offset;if(ge.isInstancedInterleavedBuffer){for(let Je=0;Je<Y.locationSize;Je++)m(Y.location+Je,ge.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Je=0;Je<Y.locationSize;Je++)p(Y.location+Je);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let Je=0;Je<Y.locationSize;Je++)y(Y.location+Je,ve/Y.locationSize,ne,U,Ce*oe,(Pe+ve/Y.locationSize*Je)*oe,fe)}else{if(ce.isInstancedBufferAttribute){for(let ge=0;ge<Y.locationSize;ge++)m(Y.location+ge,ce.meshPerAttribute);v.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let ge=0;ge<Y.locationSize;ge++)p(Y.location+ge);s.bindBuffer(s.ARRAY_BUFFER,Ne);for(let ge=0;ge<Y.locationSize;ge++)y(Y.location+ge,ve/Y.locationSize,ne,U,ve*oe,ve/Y.locationSize*ge*oe,fe)}}else if(H!==void 0){const U=H[te];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(Y.location,U);break;case 3:s.vertexAttrib3fv(Y.location,U);break;case 4:s.vertexAttrib4fv(Y.location,U);break;default:s.vertexAttrib1fv(Y.location,U)}}}}S()}function D(){L();for(const v in n){const E=n[v];for(const N in E){const W=E[N];for(const z in W)h(W[z].object),delete W[z];delete E[N]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const N in E){const W=E[N];for(const z in W)h(W[z].object),delete W[z];delete E[N]}delete n[v.id]}function w(v){for(const E in n){const N=n[E];if(N[v.id]===void 0)continue;const W=N[v.id];for(const z in W)h(W[z].object),delete W[z];delete N[v.id]}}function L(){O(),a=!0,r!==i&&(r=i,l(r.object))}function O(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:L,resetDefaultState:O,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:p,disableUnusedAttributes:S}}function Rx(s,e,t){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),t.update(h,n,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let d=0;for(let _=0;_<u;_++)d+=h[_];t.update(d,n,1)}function c(l,h,u,f){if(u===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)a(l[_],h[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let _=0;for(let b=0;b<u;b++)_+=h[b];for(let b=0;b<f.length;b++)t.update(_,n,f[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Cx(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==oi&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==xr&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vn&&!L)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=_>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:D,maxSamples:P}}function Px(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new us,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){const _=u.clippingPlanes,b=u.clipIntersection,p=u.clipShadows,m=s.get(u);if(!i||_===null||_.length===0||r&&!p)r?h(null):l();else{const S=r?0:n,y=S*4;let M=m.clippingState||null;c.value=M,M=h(_,f,y,d);for(let D=0;D!==y;++D)M[D]=t[D];m.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,_){const b=u!==null?u.length:0;let p=null;if(b!==0){if(p=c.value,_!==!0||p===null){const m=d+b*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,M=d;y!==b;++y,M+=4)a.copy(u[y]).applyMatrix4(S,o),a.normal.toArray(p,M),p[M+3]=a.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,p}}function Dx(s){let e=new WeakMap;function t(a,o){return o===Nh?a.mapping=ba:o===Oh&&(a.mapping=va),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nh||o===Oh)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new H0(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vl extends ym{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const na=4,xd=[.125,.215,.35,.446,.526,.582],gs=20,Zl=new vl,yd=new Xe;let Ql=null,Jl=0,$l=0,eh=!1;const fs=(1+Math.sqrt(5))/2,qs=1/fs,Sd=[new j(-fs,qs,0),new j(fs,qs,0),new j(-qs,0,fs),new j(qs,0,fs),new j(0,fs,-qs),new j(0,fs,qs),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class tl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Ql=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ed(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Td(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ql,Jl,$l),this._renderer.xr.enabled=eh,e.scissorTest=!1,cc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ba||e.mapping===va?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ql=this._renderer.getRenderTarget(),Jl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:un,format:oi,colorSpace:tn,depthBuffer:!1},i=Md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Md(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Lx(r)),this._blurMaterial=Ix(r,e,t)}return i}_compileMaterial(e){const t=new _t(this._lodPlanes[0],e);this._renderer.compile(t,Zl)}_sceneToCubeUV(e,t,n,i){const o=new An(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(yd),h.toneMapping=_r,h.autoClear=!1;const d=new Hn({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1}),_=new _t(new Ds,d);let b=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,b=!0):(d.color.copy(yd),b=!0);for(let m=0;m<6;m++){const S=m%3;S===0?(o.up.set(0,c[m],0),o.lookAt(l[m],0,0)):S===1?(o.up.set(0,0,c[m]),o.lookAt(0,l[m],0)):(o.up.set(0,c[m],0),o.lookAt(0,0,l[m]));const y=this._cubeSize;cc(i,S*y,m>2?y:0,y,y),h.setRenderTarget(i),b&&h.render(_,o),h.render(e,o)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=f,h.autoClear=u,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ba||e.mapping===va;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ed()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Td());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new _t(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;cc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Zl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Sd[(i-r-1)%Sd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*gs-1),b=r/_,p=isFinite(r)?1+Math.floor(h*b):gs;p>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);const m=[];let S=0;for(let w=0;w<gs;++w){const L=w/b,O=Math.exp(-L*L/2);m.push(O),w===0?S+=O:w<p&&(S+=2*O)}for(let w=0;w<m.length;w++)m[w]=m[w]/S;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const M=this._sizeLods[i],D=3*M*(i>y-na?i-y+na:0),P=4*(this._cubeSize-M);cc(t,D,P,3*M,2*M),c.setRenderTarget(t),c.render(u,Zl)}}function Lx(s){const e=[],t=[],n=[];let i=s;const r=s-na+1+xd.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-na?c=xd[a-s+na-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,_=6,b=3,p=2,m=1,S=new Float32Array(b*_*d),y=new Float32Array(p*_*d),M=new Float32Array(m*_*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,L=P>2?0:-1,O=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];S.set(O,b*_*P),y.set(f,p*_*P);const v=[P,P,P,P,P,P];M.set(v,m*_*P)}const D=new pi;D.setAttribute("position",new yn(S,b)),D.setAttribute("uv",new yn(y,p)),D.setAttribute("faceIndex",new yn(M,m)),e.push(D),i>na&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Md(s,e,t){const n=new Gn(s,e,t);return n.texture.mapping=ml,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cc(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Ix(s,e,t){const n=new Float32Array(gs),i=new j(0,1,0);return new Rn({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sf(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Td(){return new Rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

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
		`,blending:an,depthTest:!1,depthWrite:!1})}function Ed(){return new Rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:an,depthTest:!1,depthWrite:!1})}function sf(){return`

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
	`}function Ux(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Nh||c===Oh,h=c===ba||c===va;if(l||h){let u=e.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new tl(s)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{const d=o.image;return l&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new tl(s)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function i(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Nx(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&kc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ox(s,e,t,n){const i={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const b=f.morphAttributes[_];for(let p=0,m=b.length;p<m;p++)e.remove(b[p])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(u){const f=u.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const d=u.morphAttributes;for(const _ in d){const b=d[_];for(let p=0,m=b.length;p<m;p++)e.update(b[p],s.ARRAY_BUFFER)}}function l(u){const f=[],d=u.index,_=u.attributes.position;let b=0;if(d!==null){const S=d.array;b=d.version;for(let y=0,M=S.length;y<M;y+=3){const D=S[y+0],P=S[y+1],w=S[y+2];f.push(D,P,P,w,w,D)}}else if(_!==void 0){const S=_.array;b=_.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const D=y+0,P=y+1,w=y+2;f.push(D,P,P,w,w,D)}}else return;const p=new(dm(f)?vm:bm)(f,1);p.version=b;const m=r.get(u);m&&e.remove(m),r.set(u,p)}function h(u){const f=r.get(u);if(f){const d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function Fx(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),t.update(d,n,_))}function h(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let p=0;for(let m=0;m<_;m++)p+=d[m];t.update(p,n,1)}function u(f,d,_,b){if(_===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<f.length;m++)l(f[m]/a,d[m],b[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,b,0,_);let m=0;for(let S=0;S<_;S++)m+=d[S];for(let S=0;S<b.length;S++)t.update(m,n,b[S])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kx(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Bx(s,e,t){const n=new WeakMap,i=new Et;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let O=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),b===!0&&(y=3);let M=o.attributes.position.count*y,D=1;M>e.maxTextureSize&&(D=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*D*4*u),w=new mm(P,M,D,u);w.type=vn,w.needsUpdate=!0;const L=y*4;for(let v=0;v<u;v++){const E=p[v],N=m[v],W=S[v],z=M*D*4*v;for(let $=0;$<E.count;$++){const H=$*L;d===!0&&(i.fromBufferAttribute(E,$),P[z+H+0]=i.x,P[z+H+1]=i.y,P[z+H+2]=i.z,P[z+H+3]=0),_===!0&&(i.fromBufferAttribute(N,$),P[z+H+4]=i.x,P[z+H+5]=i.y,P[z+H+6]=i.z,P[z+H+7]=0),b===!0&&(i.fromBufferAttribute(W,$),P[z+H+8]=i.x,P[z+H+9]=i.y,P[z+H+10]=i.z,P[z+H+11]=W.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new ct(M,D)},n.set(o,f),o.addEventListener("dispose",O)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<l.length;b++)d+=l[b];const _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function zx(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=e.get(c,h);if(i.get(u)!==l&&(e.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return u}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class xl extends Qt{constructor(e,t,n,i,r,a,o,c,l,h=oa){if(h!==oa&&h!==Ma)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oa&&(n=yr),n===void 0&&h===Ma&&(n=Sa),super(null,i,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Nt,this.minFilter=c!==void 0?c:Nt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tm=new Qt,wd=new xl(1,1),Em=new mm,wm=new T0,Am=new Sm,Ad=[],Rd=[],Cd=new Float32Array(16),Pd=new Float32Array(9),Dd=new Float32Array(4);function Na(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ad[i];if(r===void 0&&(r=new Float32Array(i),Ad[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function fn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function dn(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function yl(s,e){let t=Rd[e];t===void 0&&(t=new Int32Array(e),Rd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Gx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Hx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2fv(this.addr,e),dn(t,e)}}function Vx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(fn(t,e))return;s.uniform3fv(this.addr,e),dn(t,e)}}function Wx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4fv(this.addr,e),dn(t,e)}}function Xx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Dd.set(n),s.uniformMatrix2fv(this.addr,!1,Dd),dn(t,n)}}function qx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Pd.set(n),s.uniformMatrix3fv(this.addr,!1,Pd),dn(t,n)}}function jx(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(fn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),dn(t,e)}else{if(fn(t,n))return;Cd.set(n),s.uniformMatrix4fv(this.addr,!1,Cd),dn(t,n)}}function Yx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Kx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2iv(this.addr,e),dn(t,e)}}function Zx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3iv(this.addr,e),dn(t,e)}}function Qx(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4iv(this.addr,e),dn(t,e)}}function Jx(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function $x(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(fn(t,e))return;s.uniform2uiv(this.addr,e),dn(t,e)}}function ey(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(fn(t,e))return;s.uniform3uiv(this.addr,e),dn(t,e)}}function ty(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(fn(t,e))return;s.uniform4uiv(this.addr,e),dn(t,e)}}function ny(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(wd.compareFunction=fm,r=wd):r=Tm,t.setTexture2D(e||r,i)}function iy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||wm,i)}function ry(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Am,i)}function sy(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Em,i)}function ay(s){switch(s){case 5126:return Gx;case 35664:return Hx;case 35665:return Vx;case 35666:return Wx;case 35674:return Xx;case 35675:return qx;case 35676:return jx;case 5124:case 35670:return Yx;case 35667:case 35671:return Kx;case 35668:case 35672:return Zx;case 35669:case 35673:return Qx;case 5125:return Jx;case 36294:return $x;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return ry;case 36289:case 36303:case 36311:case 36292:return sy}}function oy(s,e){s.uniform1fv(this.addr,e)}function cy(s,e){const t=Na(e,this.size,2);s.uniform2fv(this.addr,t)}function ly(s,e){const t=Na(e,this.size,3);s.uniform3fv(this.addr,t)}function hy(s,e){const t=Na(e,this.size,4);s.uniform4fv(this.addr,t)}function uy(s,e){const t=Na(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function fy(s,e){const t=Na(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function dy(s,e){const t=Na(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function py(s,e){s.uniform1iv(this.addr,e)}function my(s,e){s.uniform2iv(this.addr,e)}function gy(s,e){s.uniform3iv(this.addr,e)}function _y(s,e){s.uniform4iv(this.addr,e)}function by(s,e){s.uniform1uiv(this.addr,e)}function vy(s,e){s.uniform2uiv(this.addr,e)}function xy(s,e){s.uniform3uiv(this.addr,e)}function yy(s,e){s.uniform4uiv(this.addr,e)}function Sy(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||Tm,r[a])}function My(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||wm,r[a])}function Ty(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Am,r[a])}function Ey(s,e,t){const n=this.cache,i=e.length,r=yl(t,i);fn(n,r)||(s.uniform1iv(this.addr,r),dn(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||Em,r[a])}function wy(s){switch(s){case 5126:return oy;case 35664:return cy;case 35665:return ly;case 35666:return hy;case 35674:return uy;case 35675:return fy;case 35676:return dy;case 5124:case 35670:return py;case 35667:case 35671:return my;case 35668:case 35672:return gy;case 35669:case 35673:return _y;case 5125:return by;case 36294:return vy;case 36295:return xy;case 36296:return yy;case 35678:case 36198:case 36298:case 36306:case 35682:return Sy;case 35679:case 36299:case 36307:return My;case 35680:case 36300:case 36308:case 36293:return Ty;case 36289:case 36303:case 36311:case 36292:return Ey}}class Ay{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ay(t.type)}}class Ry{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wy(t.type)}}class Cy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const th=/(\w+)(\])?(\[|\.)?/g;function Ld(s,e){s.seq.push(e),s.map[e.id]=e}function Py(s,e,t){const n=s.name,i=n.length;for(th.lastIndex=0;;){const r=th.exec(n),a=th.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Ld(t,l===void 0?new Ay(o,s,e):new Ry(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Cy(o),Ld(t,u)),t=u}}}class Bc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);Py(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Id(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Dy=37297;let Ly=0;function Iy(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Uy(s){const e=St.getPrimaries(St.workingColorSpace),t=St.getPrimaries(s);let n;switch(e===t?n="":e===$c&&t===Jc?n="LinearDisplayP3ToLinearSRGB":e===Jc&&t===$c&&(n="LinearSRGBToLinearDisplayP3"),s){case tn:case _l:return[n,"LinearTransferOETF"];case Kt:case tf:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ud(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Iy(s.getShaderSource(e),a)}else return i}function Ny(s,e){const t=Uy(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Oy(s,e){let t;switch(e){case Hu:t="Linear";break;case Vu:t="Reinhard";break;case Wu:t="Cineon";break;case Xu:t="ACESFilmic";break;case qu:t="AgX";break;case ju:t="Neutral";break;case k_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const lc=new j;function Fy(){St.getLuminanceCoefficients(lc);const s=lc.x.toFixed(4),e=lc.y.toFixed(4),t=lc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ky(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ja).join(`
`)}function By(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zy(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function Ja(s){return s!==""}function Nd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Od(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gy=/^[ \t]*#include +<([\w\d./]+)>/gm;function uu(s){return s.replace(Gy,Vy)}const Hy=new Map;function Vy(s,e){let t=at[e];if(t===void 0){const n=Hy.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uu(t)}const Wy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fd(s){return s.replace(Wy,Xy)}function Xy(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function kd(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Qp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Jp?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ar&&(e="SHADOWMAP_TYPE_VSM"),e}function jy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ba:case va:e="ENVMAP_TYPE_CUBE";break;case ml:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Yy(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case va:e="ENVMAP_MODE_REFRACTION";break}return e}function Ky(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case $p:e="ENVMAP_BLENDING_MULTIPLY";break;case O_:e="ENVMAP_BLENDING_MIX";break;case F_:e="ENVMAP_BLENDING_ADD";break}return e}function Zy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=qy(t),l=jy(t),h=Yy(t),u=Ky(t),f=Zy(t),d=ky(t),_=By(r),b=i.createProgram();let p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ja).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Ja).join(`
`),m.length>0&&(m+=`
`)):(p=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ja).join(`
`),m=[kd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_r?"#define TONE_MAPPING":"",t.toneMapping!==_r?at.tonemapping_pars_fragment:"",t.toneMapping!==_r?Oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ny("linearToOutputTexel",t.outputColorSpace),Fy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ja).join(`
`)),a=uu(a),a=Nd(a,t),a=Od(a,t),o=uu(o),o=Nd(o,t),o=Od(o,t),a=Fd(a),o=Fd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===td?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===td?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=S+p+a,M=S+m+o,D=Id(i,i.VERTEX_SHADER,y),P=Id(i,i.FRAGMENT_SHADER,M);i.attachShader(b,D),i.attachShader(b,P),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(E){if(s.debug.checkShaderErrors){const N=i.getProgramInfoLog(b).trim(),W=i.getShaderInfoLog(D).trim(),z=i.getShaderInfoLog(P).trim();let $=!0,H=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,D,P);else{const te=Ud(i,D,"vertex"),Y=Ud(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+N+`
`+te+`
`+Y)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(W===""||z==="")&&(H=!1);H&&(E.diagnostics={runnable:$,programLog:N,vertexShader:{log:W,prefix:p},fragmentShader:{log:z,prefix:m}})}i.deleteShader(D),i.deleteShader(P),L=new Bc(i,b),O=zy(i,b)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let O;this.getAttributes=function(){return O===void 0&&w(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(b,Dy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Ly++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=D,this.fragmentShader=P,this}let Jy=0;class $y{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new eS(e),t.set(e,n)),n}}class eS{constructor(e){this.id=Jy++,this.code=e,this.usedTimes=0}}function tS(s,e,t,n,i,r,a){const o=new gm,c=new $y,l=new Set,h=[],u=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,E,N,W,z){const $=W.fog,H=z.geometry,te=v.isMeshStandardMaterial?W.environment:null,Y=(v.isMeshStandardMaterial?t:e).get(v.envMap||te),ce=Y&&Y.mapping===ml?Y.image.height:null,U=b[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const ve=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Re=ve!==void 0?ve.length:0;let Ne=0;H.morphAttributes.position!==void 0&&(Ne=1),H.morphAttributes.normal!==void 0&&(Ne=2),H.morphAttributes.color!==void 0&&(Ne=3);let ne,oe,fe,ge;if(U){const ke=Hi[U];ne=ke.vertexShader,oe=ke.fragmentShader}else ne=v.vertexShader,oe=v.fragmentShader,c.update(v),fe=c.getVertexShaderID(v),ge=c.getFragmentShaderID(v);const Ce=s.getRenderTarget(),Pe=z.isInstancedMesh===!0,Je=z.isBatchedMesh===!0,je=!!v.map,Ve=!!v.matcap,F=!!Y,dt=!!v.aoMap,qe=!!v.lightMap,Ze=!!v.bumpMap,X=!!v.normalMap,rt=!!v.displacementMap,He=!!v.emissiveMap,I=!!v.metalnessMap,A=!!v.roughnessMap,Z=v.anisotropy>0,re=v.clearcoat>0,de=v.dispersion>0,ie=v.iridescence>0,Le=v.sheen>0,_e=v.transmission>0,Me=Z&&!!v.anisotropyMap,Ye=re&&!!v.clearcoatMap,me=re&&!!v.clearcoatNormalMap,Ae=re&&!!v.clearcoatRoughnessMap,De=ie&&!!v.iridescenceMap,Ue=ie&&!!v.iridescenceThicknessMap,xe=Le&&!!v.sheenColorMap,$e=Le&&!!v.sheenRoughnessMap,ze=!!v.specularMap,Ke=!!v.specularColorMap,G=!!v.specularIntensityMap,he=_e&&!!v.transmissionMap,V=_e&&!!v.thicknessMap,se=!!v.gradientMap,ye=!!v.alphaMap,Se=v.alphaTest>0,et=!!v.alphaHash,Ct=!!v.extensions;let Ft=_r;v.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const lt={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:ne,fragmentShader:oe,defines:v.defines,customVertexShaderID:fe,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Je,batchingColor:Je&&z._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&z.instanceColor!==null,instancingMorph:Pe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ce===null?s.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:tn,alphaToCoverage:!!v.alphaToCoverage,map:je,matcap:Ve,envMap:F,envMapMode:F&&Y.mapping,envMapCubeUVHeight:ce,aoMap:dt,lightMap:qe,bumpMap:Ze,normalMap:X,displacementMap:d&&rt,emissiveMap:He,normalMapObjectSpace:X&&v.normalMapType===W_,normalMapTangentSpace:X&&v.normalMapType===ef,metalnessMap:I,roughnessMap:A,anisotropy:Z,anisotropyMap:Me,clearcoat:re,clearcoatMap:Ye,clearcoatNormalMap:me,clearcoatRoughnessMap:Ae,dispersion:de,iridescence:ie,iridescenceMap:De,iridescenceThicknessMap:Ue,sheen:Le,sheenColorMap:xe,sheenRoughnessMap:$e,specularMap:ze,specularColorMap:Ke,specularIntensityMap:G,transmission:_e,transmissionMap:he,thicknessMap:V,gradientMap:se,opaque:v.transparent===!1&&v.blending===gr&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:Se,alphaHash:et,combine:v.combine,mapUv:je&&p(v.map.channel),aoMapUv:dt&&p(v.aoMap.channel),lightMapUv:qe&&p(v.lightMap.channel),bumpMapUv:Ze&&p(v.bumpMap.channel),normalMapUv:X&&p(v.normalMap.channel),displacementMapUv:rt&&p(v.displacementMap.channel),emissiveMapUv:He&&p(v.emissiveMap.channel),metalnessMapUv:I&&p(v.metalnessMap.channel),roughnessMapUv:A&&p(v.roughnessMap.channel),anisotropyMapUv:Me&&p(v.anisotropyMap.channel),clearcoatMapUv:Ye&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:xe&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:$e&&p(v.sheenRoughnessMap.channel),specularMapUv:ze&&p(v.specularMap.channel),specularColorMapUv:Ke&&p(v.specularColorMap.channel),specularIntensityMapUv:G&&p(v.specularIntensityMap.channel),transmissionMapUv:he&&p(v.transmissionMap.channel),thicknessMapUv:V&&p(v.thicknessMap.channel),alphaMapUv:ye&&p(v.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(X||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!H.attributes.uv&&(je||ye),fog:!!$,useFog:v.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&N.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:je&&v.map.isVideoTexture===!0&&St.getTransfer(v.map.colorSpace)===Bt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Li,flipSided:v.side===Wn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ct&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&v.extensions.multiDraw===!0||Je)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function S(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const N in v.defines)E.push(N),E.push(v.defines[N]);return v.isRawShaderMaterial===!1&&(y(E,v),M(E,v),E.push(s.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function y(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function M(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function D(v){const E=b[v.type];let N;if(E){const W=Hi[E];N=Fr.clone(W.uniforms)}else N=v.uniforms;return N}function P(v,E){let N;for(let W=0,z=h.length;W<z;W++){const $=h[W];if($.cacheKey===E){N=$,++N.usedTimes;break}}return N===void 0&&(N=new Qy(s,E,v,r),h.push(N)),N}function w(v){if(--v.usedTimes===0){const E=h.indexOf(v);h[E]=h[h.length-1],h.pop(),v.destroy()}}function L(v){c.remove(v)}function O(){c.dispose()}return{getParameters:m,getProgramCacheKey:S,getUniforms:D,acquireProgram:P,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:O}}function nS(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function iS(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function zd(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(u,f,d,_,b,p){let m=s[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:_,renderOrder:u.renderOrder,z:b,group:p},s[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=_,m.renderOrder=u.renderOrder,m.z=b,m.group=p),e++,m}function o(u,f,d,_,b,p){const m=a(u,f,d,_,b,p);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function c(u,f,d,_,b,p){const m=a(u,f,d,_,b,p);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function l(u,f){t.length>1&&t.sort(u||iS),n.length>1&&n.sort(f||Bd),i.length>1&&i.sort(f||Bd)}function h(){for(let u=e,f=s.length;u<f;u++){const d=s[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:h,sort:l}}function rS(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new zd,s.set(n,[a])):i>=r.length?(a=new zd,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function sS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new j,color:new Xe};break;case"SpotLight":t={position:new j,direction:new j,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new j,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new j,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new j,halfWidth:new j,halfHeight:new j};break}return s[e.id]=t,t}}}function aS(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let oS=0;function cS(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function lS(s){const e=new sS,t=aS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new j);const i=new j,r=new tt,a=new tt;function o(l){let h=0,u=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,_=0,b=0,p=0,m=0,S=0,y=0,M=0,D=0,P=0,w=0;l.sort(cS);for(let O=0,v=l.length;O<v;O++){const E=l[O],N=E.color,W=E.intensity,z=E.distance,$=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=N.r*W,u+=N.g*W,f+=N.b*W;else if(E.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(E.sh.coefficients[H],W);w++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const te=E.shadow,Y=t.get(E);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,n.directionalShadow[d]=Y,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=E.shadow.matrix,S++}n.directional[d]=H,d++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(N).multiplyScalar(W),H.distance=z,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,n.spot[b]=H;const te=E.shadow;if(E.map&&(n.spotLightMap[D]=E.map,D++,te.updateMatrices(E),E.castShadow&&P++),n.spotLightMatrix[b]=te.matrix,E.castShadow){const Y=t.get(E);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,n.spotShadow[b]=Y,n.spotShadowMap[b]=$,M++}b++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(N).multiplyScalar(W),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=H,p++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const te=E.shadow,Y=t.get(E);Y.shadowIntensity=te.intensity,Y.shadowBias=te.bias,Y.shadowNormalBias=te.normalBias,Y.shadowRadius=te.radius,Y.shadowMapSize=te.mapSize,Y.shadowCameraNear=te.camera.near,Y.shadowCameraFar=te.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=$,n.pointShadowMatrix[_]=E.shadow.matrix,y++}n.point[_]=H,_++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(W),H.groundColor.copy(E.groundColor).multiplyScalar(W),n.hemi[m]=H,m++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ee.LTC_FLOAT_1,n.rectAreaLTC2=Ee.LTC_FLOAT_2):(n.rectAreaLTC1=Ee.LTC_HALF_1,n.rectAreaLTC2=Ee.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const L=n.hash;(L.directionalLength!==d||L.pointLength!==_||L.spotLength!==b||L.rectAreaLength!==p||L.hemiLength!==m||L.numDirectionalShadows!==S||L.numPointShadows!==y||L.numSpotShadows!==M||L.numSpotMaps!==D||L.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=b,n.rectArea.length=p,n.point.length=_,n.hemi.length=m,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+D-P,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,L.directionalLength=d,L.pointLength=_,L.spotLength=b,L.rectAreaLength=p,L.hemiLength=m,L.numDirectionalShadows=S,L.numPointShadows=y,L.numSpotShadows=M,L.numSpotMaps=D,L.numLightProbes=w,n.version=oS++)}function c(l,h){let u=0,f=0,d=0,_=0,b=0;const p=h.matrixWorldInverse;for(let m=0,S=l.length;m<S;m++){const y=l[m];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),u++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),d++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){const M=n.hemi[b];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),b++}}}return{setup:o,setupView:c,state:n}}function Gd(s){const e=new lS(s),t=[],n=[];function i(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function hS(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Gd(s),e.set(i,[o])):r>=a.length?(o=new Gd(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class uS extends Oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=H_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fS extends Oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const dS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pS=`uniform sampler2D shadow_pass;
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
}`;function mS(s,e,t){let n=new rf;const i=new ct,r=new ct,a=new Et,o=new uS({depthPacking:V_}),c=new fS,l={},h=t.maxTextureSize,u={[vr]:Wn,[Wn]:vr,[Li]:Li},f=new Rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:dS,fragmentShader:pS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new pi;_.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new _t(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qp;let m=this.type;this.render=function(P,w,L){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||P.length===0)return;const O=s.getRenderTarget(),v=s.getActiveCubeFace(),E=s.getActiveMipmapLevel(),N=s.state;N.setBlending(an),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const W=m!==ar&&this.type===ar,z=m===ar&&this.type!==ar;for(let $=0,H=P.length;$<H;$++){const te=P[$],Y=te.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const ce=Y.getFrameExtents();if(i.multiply(ce),r.copy(Y.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/ce.x),i.x=r.x*ce.x,Y.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/ce.y),i.y=r.y*ce.y,Y.mapSize.y=r.y)),Y.map===null||W===!0||z===!0){const ve=this.type!==ar?{minFilter:Nt,magFilter:Nt}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Gn(i.x,i.y,ve),Y.map.texture.name=te.name+".shadowMap",Y.camera.updateProjectionMatrix()}s.setRenderTarget(Y.map),s.clear();const U=Y.getViewportCount();for(let ve=0;ve<U;ve++){const Re=Y.getViewport(ve);a.set(r.x*Re.x,r.y*Re.y,r.x*Re.z,r.y*Re.w),N.viewport(a),Y.updateMatrices(te,ve),n=Y.getFrustum(),M(w,L,Y.camera,te,this.type)}Y.isPointLightShadow!==!0&&this.type===ar&&S(Y,L),Y.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(O,v,E)};function S(P,w){const L=e.update(b);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Gn(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(w,null,L,f,b,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(w,null,L,d,b,null)}function y(P,w,L,O){let v=null;const E=L.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(E!==void 0)v=E;else if(v=L.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=v.uuid,W=w.uuid;let z=l[N];z===void 0&&(z={},l[N]=z);let $=z[W];$===void 0&&($=v.clone(),z[W]=$,w.addEventListener("dispose",D)),v=$}if(v.visible=w.visible,v.wireframe=w.wireframe,O===ar?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const N=s.properties.get(v);N.light=L}return v}function M(P,w,L,O,v){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===ar)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,P.matrixWorld);const W=e.update(P),z=P.material;if(Array.isArray(z)){const $=W.groups;for(let H=0,te=$.length;H<te;H++){const Y=$[H],ce=z[Y.materialIndex];if(ce&&ce.visible){const U=y(P,ce,O,v);P.onBeforeShadow(s,P,w,L,W,U,Y),s.renderBufferDirect(L,null,W,U,P,Y),P.onAfterShadow(s,P,w,L,W,U,Y)}}}else if(z.visible){const $=y(P,z,O,v);P.onBeforeShadow(s,P,w,L,W,$,null),s.renderBufferDirect(L,null,W,$,P,null),P.onAfterShadow(s,P,w,L,W,$,null)}}const N=P.children;for(let W=0,z=N.length;W<z;W++)M(N[W],w,L,O,v)}function D(P){P.target.removeEventListener("dispose",D);for(const L in l){const O=l[L],v=P.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}const gS={[Rh]:Ch,[Ph]:Ih,[Dh]:Uh,[_a]:Lh,[Ch]:Rh,[Ih]:Ph,[Uh]:Dh,[Lh]:_a};function _S(s){function e(){let G=!1;const he=new Et;let V=null;const se=new Et(0,0,0,0);return{setMask:function(ye){V!==ye&&!G&&(s.colorMask(ye,ye,ye,ye),V=ye)},setLocked:function(ye){G=ye},setClear:function(ye,Se,et,Ct,Ft){Ft===!0&&(ye*=Ct,Se*=Ct,et*=Ct),he.set(ye,Se,et,Ct),se.equals(he)===!1&&(s.clearColor(ye,Se,et,Ct),se.copy(he))},reset:function(){G=!1,V=null,se.set(-1,0,0,0)}}}function t(){let G=!1,he=!1,V=null,se=null,ye=null;return{setReversed:function(Se){he=Se},setTest:function(Se){Se?fe(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Se){V!==Se&&!G&&(s.depthMask(Se),V=Se)},setFunc:function(Se){if(he&&(Se=gS[Se]),se!==Se){switch(Se){case Rh:s.depthFunc(s.NEVER);break;case Ch:s.depthFunc(s.ALWAYS);break;case Ph:s.depthFunc(s.LESS);break;case _a:s.depthFunc(s.LEQUAL);break;case Dh:s.depthFunc(s.EQUAL);break;case Lh:s.depthFunc(s.GEQUAL);break;case Ih:s.depthFunc(s.GREATER);break;case Uh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Se}},setLocked:function(Se){G=Se},setClear:function(Se){ye!==Se&&(s.clearDepth(Se),ye=Se)},reset:function(){G=!1,V=null,se=null,ye=null}}}function n(){let G=!1,he=null,V=null,se=null,ye=null,Se=null,et=null,Ct=null,Ft=null;return{setTest:function(lt){G||(lt?fe(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(lt){he!==lt&&!G&&(s.stencilMask(lt),he=lt)},setFunc:function(lt,ke,Oe){(V!==lt||se!==ke||ye!==Oe)&&(s.stencilFunc(lt,ke,Oe),V=lt,se=ke,ye=Oe)},setOp:function(lt,ke,Oe){(Se!==lt||et!==ke||Ct!==Oe)&&(s.stencilOp(lt,ke,Oe),Se=lt,et=ke,Ct=Oe)},setLocked:function(lt){G=lt},setClear:function(lt){Ft!==lt&&(s.clearStencil(lt),Ft=lt)},reset:function(){G=!1,he=null,V=null,se=null,ye=null,Se=null,et=null,Ct=null,Ft=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},u=new WeakMap,f=[],d=null,_=!1,b=null,p=null,m=null,S=null,y=null,M=null,D=null,P=new Xe(0,0,0),w=0,L=!1,O=null,v=null,E=null,N=null,W=null;const z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,H=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=H>=1):te.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=H>=2);let Y=null,ce={};const U=s.getParameter(s.SCISSOR_BOX),ve=s.getParameter(s.VIEWPORT),Re=new Et().fromArray(U),Ne=new Et().fromArray(ve);function ne(G,he,V,se){const ye=new Uint8Array(4),Se=s.createTexture();s.bindTexture(G,Se),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<V;et++)G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY?s.texImage3D(he,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(he+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return Se}const oe={};oe[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),fe(s.DEPTH_TEST),r.setFunc(_a),qe(!1),Ze(qf),fe(s.CULL_FACE),F(an);function fe(G){l[G]!==!0&&(s.enable(G),l[G]=!0)}function ge(G){l[G]!==!1&&(s.disable(G),l[G]=!1)}function Ce(G,he){return h[G]!==he?(s.bindFramebuffer(G,he),h[G]=he,G===s.DRAW_FRAMEBUFFER&&(h[s.FRAMEBUFFER]=he),G===s.FRAMEBUFFER&&(h[s.DRAW_FRAMEBUFFER]=he),!0):!1}function Pe(G,he){let V=f,se=!1;if(G){V=u.get(he),V===void 0&&(V=[],u.set(he,V));const ye=G.textures;if(V.length!==ye.length||V[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,et=ye.length;Se<et;Se++)V[Se]=s.COLOR_ATTACHMENT0+Se;V.length=ye.length,se=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,se=!0);se&&s.drawBuffers(V)}function Je(G){return d!==G?(s.useProgram(G),d=G,!0):!1}const je={[hr]:s.FUNC_ADD,[v_]:s.FUNC_SUBTRACT,[x_]:s.FUNC_REVERSE_SUBTRACT};je[y_]=s.MIN,je[S_]=s.MAX;const Ve={[M_]:s.ZERO,[T_]:s.ONE,[E_]:s.SRC_COLOR,[Mo]:s.SRC_ALPHA,[D_]:s.SRC_ALPHA_SATURATE,[C_]:s.DST_COLOR,[A_]:s.DST_ALPHA,[w_]:s.ONE_MINUS_SRC_COLOR,[To]:s.ONE_MINUS_SRC_ALPHA,[P_]:s.ONE_MINUS_DST_COLOR,[R_]:s.ONE_MINUS_DST_ALPHA,[L_]:s.CONSTANT_COLOR,[I_]:s.ONE_MINUS_CONSTANT_COLOR,[U_]:s.CONSTANT_ALPHA,[N_]:s.ONE_MINUS_CONSTANT_ALPHA};function F(G,he,V,se,ye,Se,et,Ct,Ft,lt){if(G===an){_===!0&&(ge(s.BLEND),_=!1);return}if(_===!1&&(fe(s.BLEND),_=!0),G!==b_){if(G!==b||lt!==L){if((p!==hr||y!==hr)&&(s.blendEquation(s.FUNC_ADD),p=hr,y=hr),lt)switch(G){case gr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFunc(s.ONE,s.ONE);break;case Yf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case gr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case jf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Yf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Kf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}m=null,S=null,M=null,D=null,P.set(0,0,0),w=0,b=G,L=lt}return}ye=ye||he,Se=Se||V,et=et||se,(he!==p||ye!==y)&&(s.blendEquationSeparate(je[he],je[ye]),p=he,y=ye),(V!==m||se!==S||Se!==M||et!==D)&&(s.blendFuncSeparate(Ve[V],Ve[se],Ve[Se],Ve[et]),m=V,S=se,M=Se,D=et),(Ct.equals(P)===!1||Ft!==w)&&(s.blendColor(Ct.r,Ct.g,Ct.b,Ft),P.copy(Ct),w=Ft),b=G,L=!1}function dt(G,he){G.side===Li?ge(s.CULL_FACE):fe(s.CULL_FACE);let V=G.side===Wn;he&&(V=!V),qe(V),G.blending===gr&&G.transparent===!1?F(an):F(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),i.setMask(G.colorWrite);const se=G.stencilWrite;a.setTest(se),se&&(a.setMask(G.stencilWriteMask),a.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),a.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),rt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?fe(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function qe(G){O!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),O=G)}function Ze(G){G!==g_?(fe(s.CULL_FACE),G!==v&&(G===qf?s.cullFace(s.BACK):G===__?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),v=G}function X(G){G!==E&&($&&s.lineWidth(G),E=G)}function rt(G,he,V){G?(fe(s.POLYGON_OFFSET_FILL),(N!==he||W!==V)&&(s.polygonOffset(he,V),N=he,W=V)):ge(s.POLYGON_OFFSET_FILL)}function He(G){G?fe(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function I(G){G===void 0&&(G=s.TEXTURE0+z-1),Y!==G&&(s.activeTexture(G),Y=G)}function A(G,he,V){V===void 0&&(Y===null?V=s.TEXTURE0+z-1:V=Y);let se=ce[V];se===void 0&&(se={type:void 0,texture:void 0},ce[V]=se),(se.type!==G||se.texture!==he)&&(Y!==V&&(s.activeTexture(V),Y=V),s.bindTexture(G,he||oe[G]),se.type=G,se.texture=he)}function Z(){const G=ce[Y];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function de(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ye(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Ue(G){Re.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),Re.copy(G))}function xe(G){Ne.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),Ne.copy(G))}function $e(G,he){let V=c.get(he);V===void 0&&(V=new WeakMap,c.set(he,V));let se=V.get(G);se===void 0&&(se=s.getUniformBlockIndex(he,G.name),V.set(G,se))}function ze(G,he){const se=c.get(he).get(G);o.get(he)!==se&&(s.uniformBlockBinding(he,se,G.__bindingPointIndex),o.set(he,se))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},Y=null,ce={},h={},u=new WeakMap,f=[],d=null,_=!1,b=null,p=null,m=null,S=null,y=null,M=null,D=null,P=new Xe(0,0,0),w=0,L=!1,O=null,v=null,E=null,N=null,W=null,Re.set(0,0,s.canvas.width,s.canvas.height),Ne.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:fe,disable:ge,bindFramebuffer:Ce,drawBuffers:Pe,useProgram:Je,setBlending:F,setMaterial:dt,setFlipSided:qe,setCullFace:Ze,setLineWidth:X,setPolygonOffset:rt,setScissorTest:He,activeTexture:I,bindTexture:A,unbindTexture:Z,compressedTexImage2D:re,compressedTexImage3D:de,texImage2D:Ae,texImage3D:De,updateUBOMapping:$e,uniformBlockBinding:ze,texStorage2D:Ye,texStorage3D:me,texSubImage2D:ie,texSubImage3D:Le,compressedTexSubImage2D:_e,compressedTexSubImage3D:Me,scissor:Ue,viewport:xe,reset:Ke}}function Hd(s,e,t,n){const i=bS(n);switch(t){case sm:return s*e;case om:return s*e;case cm:return s*e*2;case gl:return s*e/i.components*i.byteLength;case Qu:return s*e/i.components*i.byteLength;case lm:return s*e*2/i.components*i.byteLength;case Ju:return s*e*2/i.components*i.byteLength;case am:return s*e*3/i.components*i.byteLength;case oi:return s*e*4/i.components*i.byteLength;case $u:return s*e*4/i.components*i.byteLength;case Ic:case Uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Nc:case Oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case kh:case zh:return Math.max(s,16)*Math.max(e,8)/4;case Fh:case Bh:return Math.max(s,8)*Math.max(e,8)/2;case Gh:case Hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Wh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Xh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case qh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case jh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Yh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Kh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Zh:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Jh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case $h:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case eu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case tu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case nu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case iu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Fc:case ru:case su:return Math.ceil(s/4)*Math.ceil(e/4)*16;case hm:case au:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ou:case cu:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function bS(s){switch(s){case xr:case nm:return{byteLength:1,components:1};case ya:case im:case un:return{byteLength:2,components:1};case Ku:case Zu:return{byteLength:2,components:4};case yr:case Yu:case vn:return{byteLength:4,components:1};case rm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function vS(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ct,h=new WeakMap;let u;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,A){return d?new OffscreenCanvas(I,A):Ao("canvas")}function b(I,A,Z){let re=1;const de=He(I);if((de.width>Z||de.height>Z)&&(re=Z/Math.max(de.width,de.height)),re<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const ie=Math.floor(re*de.width),Le=Math.floor(re*de.height);u===void 0&&(u=_(ie,Le));const _e=A?_(ie,Le):u;return _e.width=ie,_e.height=Le,_e.getContext("2d").drawImage(I,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+de.width+"x"+de.height+") to ("+ie+"x"+Le+")."),_e}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+de.width+"x"+de.height+")."),I;return I}function p(I){return I.generateMipmaps&&I.minFilter!==Nt&&I.minFilter!==cn}function m(I){s.generateMipmap(I)}function S(I,A,Z,re,de=!1){if(I!==null){if(s[I]!==void 0)return s[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ie=A;if(A===s.RED&&(Z===s.FLOAT&&(ie=s.R32F),Z===s.HALF_FLOAT&&(ie=s.R16F),Z===s.UNSIGNED_BYTE&&(ie=s.R8)),A===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.R8UI),Z===s.UNSIGNED_SHORT&&(ie=s.R16UI),Z===s.UNSIGNED_INT&&(ie=s.R32UI),Z===s.BYTE&&(ie=s.R8I),Z===s.SHORT&&(ie=s.R16I),Z===s.INT&&(ie=s.R32I)),A===s.RG&&(Z===s.FLOAT&&(ie=s.RG32F),Z===s.HALF_FLOAT&&(ie=s.RG16F),Z===s.UNSIGNED_BYTE&&(ie=s.RG8)),A===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ie=s.RG16UI),Z===s.UNSIGNED_INT&&(ie=s.RG32UI),Z===s.BYTE&&(ie=s.RG8I),Z===s.SHORT&&(ie=s.RG16I),Z===s.INT&&(ie=s.RG32I)),A===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),Z===s.UNSIGNED_INT&&(ie=s.RGB32UI),Z===s.BYTE&&(ie=s.RGB8I),Z===s.SHORT&&(ie=s.RGB16I),Z===s.INT&&(ie=s.RGB32I)),A===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ie=s.RGBA32UI),Z===s.BYTE&&(ie=s.RGBA8I),Z===s.SHORT&&(ie=s.RGBA16I),Z===s.INT&&(ie=s.RGBA32I)),A===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),A===s.RGBA){const Le=de?Qc:St.getTransfer(re);Z===s.FLOAT&&(ie=s.RGBA32F),Z===s.HALF_FLOAT&&(ie=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ie=Le===Bt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(I,A){let Z;return I?A===null||A===yr||A===Sa?Z=s.DEPTH24_STENCIL8:A===vn?Z=s.DEPTH32F_STENCIL8:A===ya&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===yr||A===Sa?Z=s.DEPTH_COMPONENT24:A===vn?Z=s.DEPTH_COMPONENT32F:A===ya&&(Z=s.DEPTH_COMPONENT16),Z}function M(I,A){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==Nt&&I.minFilter!==cn?Math.log2(Math.max(A.width,A.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?A.mipmaps.length:1}function D(I){const A=I.target;A.removeEventListener("dispose",D),w(A),A.isVideoTexture&&h.delete(A)}function P(I){const A=I.target;A.removeEventListener("dispose",P),O(A)}function w(I){const A=n.get(I);if(A.__webglInit===void 0)return;const Z=I.source,re=f.get(Z);if(re){const de=re[A.__cacheKey];de.usedTimes--,de.usedTimes===0&&L(I),Object.keys(re).length===0&&f.delete(Z)}n.remove(I)}function L(I){const A=n.get(I);s.deleteTexture(A.__webglTexture);const Z=I.source,re=f.get(Z);delete re[A.__cacheKey],a.memory.textures--}function O(I){const A=n.get(I);if(I.depthTexture&&I.depthTexture.dispose(),I.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(A.__webglFramebuffer[re]))for(let de=0;de<A.__webglFramebuffer[re].length;de++)s.deleteFramebuffer(A.__webglFramebuffer[re][de]);else s.deleteFramebuffer(A.__webglFramebuffer[re]);A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer[re])}else{if(Array.isArray(A.__webglFramebuffer))for(let re=0;re<A.__webglFramebuffer.length;re++)s.deleteFramebuffer(A.__webglFramebuffer[re]);else s.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&s.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&s.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let re=0;re<A.__webglColorRenderbuffer.length;re++)A.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(A.__webglColorRenderbuffer[re]);A.__webglDepthRenderbuffer&&s.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const Z=I.textures;for(let re=0,de=Z.length;re<de;re++){const ie=n.get(Z[re]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(Z[re])}n.remove(I)}let v=0;function E(){v=0}function N(){const I=v;return I>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+i.maxTextures),v+=1,I}function W(I){const A=[];return A.push(I.wrapS),A.push(I.wrapT),A.push(I.wrapR||0),A.push(I.magFilter),A.push(I.minFilter),A.push(I.anisotropy),A.push(I.internalFormat),A.push(I.format),A.push(I.type),A.push(I.generateMipmaps),A.push(I.premultiplyAlpha),A.push(I.flipY),A.push(I.unpackAlignment),A.push(I.colorSpace),A.join()}function z(I,A){const Z=n.get(I);if(I.isVideoTexture&&X(I),I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){const re=I.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(Z,I,A);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+A)}function $(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){Ne(Z,I,A);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+A)}function H(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){Ne(Z,I,A);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+A)}function te(I,A){const Z=n.get(I);if(I.version>0&&Z.__version!==I.version){ne(Z,I,A);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+A)}const Y={[xa]:s.REPEAT,[Wi]:s.CLAMP_TO_EDGE,[Zc]:s.MIRRORED_REPEAT},ce={[Nt]:s.NEAREST,[tm]:s.NEAREST_MIPMAP_NEAREST,[Qa]:s.NEAREST_MIPMAP_LINEAR,[cn]:s.LINEAR,[Lc]:s.LINEAR_MIPMAP_NEAREST,[Xi]:s.LINEAR_MIPMAP_LINEAR},U={[X_]:s.NEVER,[Q_]:s.ALWAYS,[q_]:s.LESS,[fm]:s.LEQUAL,[j_]:s.EQUAL,[Z_]:s.GEQUAL,[Y_]:s.GREATER,[K_]:s.NOTEQUAL};function ve(I,A){if(A.type===vn&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===cn||A.magFilter===Lc||A.magFilter===Qa||A.magFilter===Xi||A.minFilter===cn||A.minFilter===Lc||A.minFilter===Qa||A.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,Y[A.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,Y[A.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,Y[A.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,ce[A.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,ce[A.minFilter]),A.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,U[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Nt||A.minFilter!==Qa&&A.minFilter!==Xi||A.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||n.get(A).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,i.getMaxAnisotropy())),n.get(A).__currentAnisotropy=A.anisotropy}}}function Re(I,A){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,A.addEventListener("dispose",D));const re=A.source;let de=f.get(re);de===void 0&&(de={},f.set(re,de));const ie=W(A);if(ie!==I.__cacheKey){de[ie]===void 0&&(de[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),de[ie].usedTimes++;const Le=de[I.__cacheKey];Le!==void 0&&(de[I.__cacheKey].usedTimes--,Le.usedTimes===0&&L(A)),I.__cacheKey=ie,I.__webglTexture=de[ie].texture}return Z}function Ne(I,A,Z){let re=s.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),A.isData3DTexture&&(re=s.TEXTURE_3D);const de=Re(I,A),ie=A.source;t.bindTexture(re,I.__webglTexture,s.TEXTURE0+Z);const Le=n.get(ie);if(ie.version!==Le.__version||de===!0){t.activeTexture(s.TEXTURE0+Z);const _e=St.getPrimaries(St.workingColorSpace),Me=A.colorSpace===ur?null:St.getPrimaries(A.colorSpace),Ye=A.colorSpace===ur||_e===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let me=b(A.image,!1,i.maxTextureSize);me=rt(A,me);const Ae=r.convert(A.format,A.colorSpace),De=r.convert(A.type);let Ue=S(A.internalFormat,Ae,De,A.colorSpace,A.isVideoTexture);ve(re,A);let xe;const $e=A.mipmaps,ze=A.isVideoTexture!==!0,Ke=Le.__version===void 0||de===!0,G=ie.dataReady,he=M(A,me);if(A.isDepthTexture)Ue=y(A.format===Ma,A.type),Ke&&(ze?t.texStorage2D(s.TEXTURE_2D,1,Ue,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Ue,me.width,me.height,0,Ae,De,null));else if(A.isDataTexture)if($e.length>0){ze&&Ke&&t.texStorage2D(s.TEXTURE_2D,he,Ue,$e[0].width,$e[0].height);for(let V=0,se=$e.length;V<se;V++)xe=$e[V],ze?G&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,Ae,De,xe.data):t.texImage2D(s.TEXTURE_2D,V,Ue,xe.width,xe.height,0,Ae,De,xe.data);A.generateMipmaps=!1}else ze?(Ke&&t.texStorage2D(s.TEXTURE_2D,he,Ue,me.width,me.height),G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ae,De,me.data)):t.texImage2D(s.TEXTURE_2D,0,Ue,me.width,me.height,0,Ae,De,me.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){ze&&Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ue,$e[0].width,$e[0].height,me.depth);for(let V=0,se=$e.length;V<se;V++)if(xe=$e[V],A.format!==oi)if(Ae!==null)if(ze){if(G)if(A.layerUpdates.size>0){const ye=Hd(xe.width,xe.height,A.format,A.type);for(const Se of A.layerUpdates){const et=xe.data.subarray(Se*ye/xe.data.BYTES_PER_ELEMENT,(Se+1)*ye/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,Se,xe.width,xe.height,1,Ae,et,0,0)}A.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xe.width,xe.height,me.depth,Ae,xe.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Ue,xe.width,xe.height,me.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?G&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,xe.width,xe.height,me.depth,Ae,De,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Ue,xe.width,xe.height,me.depth,0,Ae,De,xe.data)}else{ze&&Ke&&t.texStorage2D(s.TEXTURE_2D,he,Ue,$e[0].width,$e[0].height);for(let V=0,se=$e.length;V<se;V++)xe=$e[V],A.format!==oi?Ae!==null?ze?G&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Ue,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?G&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,xe.width,xe.height,Ae,De,xe.data):t.texImage2D(s.TEXTURE_2D,V,Ue,xe.width,xe.height,0,Ae,De,xe.data)}else if(A.isDataArrayTexture)if(ze){if(Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,he,Ue,me.width,me.height,me.depth),G)if(A.layerUpdates.size>0){const V=Hd(me.width,me.height,A.format,A.type);for(const se of A.layerUpdates){const ye=me.data.subarray(se*V/me.data.BYTES_PER_ELEMENT,(se+1)*V/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,me.width,me.height,1,Ae,De,ye)}A.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ae,De,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ue,me.width,me.height,me.depth,0,Ae,De,me.data);else if(A.isData3DTexture)ze?(Ke&&t.texStorage3D(s.TEXTURE_3D,he,Ue,me.width,me.height,me.depth),G&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ae,De,me.data)):t.texImage3D(s.TEXTURE_3D,0,Ue,me.width,me.height,me.depth,0,Ae,De,me.data);else if(A.isFramebufferTexture){if(Ke)if(ze)t.texStorage2D(s.TEXTURE_2D,he,Ue,me.width,me.height);else{let V=me.width,se=me.height;for(let ye=0;ye<he;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ue,V,se,0,Ae,De,null),V>>=1,se>>=1}}else if($e.length>0){if(ze&&Ke){const V=He($e[0]);t.texStorage2D(s.TEXTURE_2D,he,Ue,V.width,V.height)}for(let V=0,se=$e.length;V<se;V++)xe=$e[V],ze?G&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,Ae,De,xe):t.texImage2D(s.TEXTURE_2D,V,Ue,Ae,De,xe);A.generateMipmaps=!1}else if(ze){if(Ke){const V=He(me);t.texStorage2D(s.TEXTURE_2D,he,Ue,V.width,V.height)}G&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,De,me)}else t.texImage2D(s.TEXTURE_2D,0,Ue,Ae,De,me);p(A)&&m(re),Le.__version=ie.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function ne(I,A,Z){if(A.image.length!==6)return;const re=Re(I,A),de=A.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Z);const ie=n.get(de);if(de.version!==ie.__version||re===!0){t.activeTexture(s.TEXTURE0+Z);const Le=St.getPrimaries(St.workingColorSpace),_e=A.colorSpace===ur?null:St.getPrimaries(A.colorSpace),Me=A.colorSpace===ur||Le===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,A.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,A.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ye=A.isCompressedTexture||A.image[0].isCompressedTexture,me=A.image[0]&&A.image[0].isDataTexture,Ae=[];for(let se=0;se<6;se++)!Ye&&!me?Ae[se]=b(A.image[se],!0,i.maxCubemapSize):Ae[se]=me?A.image[se].image:A.image[se],Ae[se]=rt(A,Ae[se]);const De=Ae[0],Ue=r.convert(A.format,A.colorSpace),xe=r.convert(A.type),$e=S(A.internalFormat,Ue,xe,A.colorSpace),ze=A.isVideoTexture!==!0,Ke=ie.__version===void 0||re===!0,G=de.dataReady;let he=M(A,De);ve(s.TEXTURE_CUBE_MAP,A);let V;if(Ye){ze&&Ke&&t.texStorage2D(s.TEXTURE_CUBE_MAP,he,$e,De.width,De.height);for(let se=0;se<6;se++){V=Ae[se].mipmaps;for(let ye=0;ye<V.length;ye++){const Se=V[ye];A.format!==oi?Ue!==null?ze?G&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,Se.width,Se.height,Ue,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,$e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,Se.width,Se.height,Ue,xe,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,$e,Se.width,Se.height,0,Ue,xe,Se.data)}}}else{if(V=A.mipmaps,ze&&Ke){V.length>0&&he++;const se=He(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,he,$e,se.width,se.height)}for(let se=0;se<6;se++)if(me){ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae[se].width,Ae[se].height,Ue,xe,Ae[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Ae[se].width,Ae[se].height,0,Ue,xe,Ae[se].data);for(let ye=0;ye<V.length;ye++){const et=V[ye].image[se].image;ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,et.width,et.height,Ue,xe,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,$e,et.width,et.height,0,Ue,xe,et.data)}}else{ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ue,xe,Ae[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Ue,xe,Ae[se]);for(let ye=0;ye<V.length;ye++){const Se=V[ye];ze?G&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,Ue,xe,Se.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,$e,Ue,xe,Se.image[se])}}}p(A)&&m(s.TEXTURE_CUBE_MAP),ie.__version=de.version,A.onUpdate&&A.onUpdate(A)}I.__version=A.version}function oe(I,A,Z,re,de,ie){const Le=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),Me=S(Z.internalFormat,Le,_e,Z.colorSpace);if(!n.get(A).__hasExternalTextures){const me=Math.max(1,A.width>>ie),Ae=Math.max(1,A.height>>ie);de===s.TEXTURE_3D||de===s.TEXTURE_2D_ARRAY?t.texImage3D(de,ie,Me,me,Ae,A.depth,0,Le,_e,null):t.texImage2D(de,ie,Me,me,Ae,0,Le,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),Ze(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,de,n.get(Z).__webglTexture,0,qe(A)):(de===s.TEXTURE_2D||de>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&de<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,de,n.get(Z).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(I,A,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),A.depthBuffer){const re=A.depthTexture,de=re&&re.isDepthTexture?re.type:null,ie=y(A.stencilBuffer,de),Le=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=qe(A);Ze(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,ie,A.width,A.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ie,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,ie,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,I)}else{const re=A.textures;for(let de=0;de<re.length;de++){const ie=re[de],Le=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),Me=S(ie.internalFormat,Le,_e,ie.colorSpace),Ye=qe(A);Z&&Ze(A)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ye,Me,A.width,A.height):Ze(A)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ye,Me,A.width,A.height):s.renderbufferStorage(s.RENDERBUFFER,Me,A.width,A.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(I,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(A.depthTexture).__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),z(A.depthTexture,0);const re=n.get(A.depthTexture).__webglTexture,de=qe(A);if(A.depthTexture.format===oa)Ze(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(A.depthTexture.format===Ma)Ze(A)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,de):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Ce(I){const A=n.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==I.depthTexture){const re=I.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),re){const de=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,re.removeEventListener("dispose",de)};re.addEventListener("dispose",de),A.__depthDisposeCallback=de}A.__boundDepthTexture=re}if(I.depthTexture&&!A.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ge(A.__webglFramebuffer,I)}else if(Z){A.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer[re]),A.__webglDepthbuffer[re]===void 0)A.__webglDepthbuffer[re]=s.createRenderbuffer(),fe(A.__webglDepthbuffer[re],I,!1);else{const de=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=A.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,de,s.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=s.createRenderbuffer(),fe(A.__webglDepthbuffer,I,!1);else{const re=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=A.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,de),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,de)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pe(I,A,Z){const re=n.get(I);A!==void 0&&oe(re.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Ce(I)}function Je(I){const A=I.texture,Z=n.get(I),re=n.get(A);I.addEventListener("dispose",P);const de=I.textures,ie=I.isWebGLCubeRenderTarget===!0,Le=de.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=A.version,a.memory.textures++),ie){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let Me=0;Me<A.mipmaps.length;Me++)Z.__webglFramebuffer[_e][Me]=s.createFramebuffer()}else Z.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<A.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Le)for(let _e=0,Me=de.length;_e<Me;_e++){const Ye=n.get(de[_e]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=s.createTexture(),a.memory.textures++)}if(I.samples>0&&Ze(I)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _e=0;_e<de.length;_e++){const Me=de[_e];Z.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[_e]);const Ye=r.convert(Me.format,Me.colorSpace),me=r.convert(Me.type),Ae=S(Me.internalFormat,Ye,me,Me.colorSpace,I.isXRRenderTarget===!0),De=qe(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Ae,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Z.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),ve(s.TEXTURE_CUBE_MAP,A);for(let _e=0;_e<6;_e++)if(A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)oe(Z.__webglFramebuffer[_e][Me],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else oe(Z.__webglFramebuffer[_e],I,A,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);p(A)&&m(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let _e=0,Me=de.length;_e<Me;_e++){const Ye=de[_e],me=n.get(Ye);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),ve(s.TEXTURE_2D,Ye),oe(Z.__webglFramebuffer,I,Ye,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,0),p(Ye)&&m(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(_e=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),ve(_e,A),A.mipmaps&&A.mipmaps.length>0)for(let Me=0;Me<A.mipmaps.length;Me++)oe(Z.__webglFramebuffer[Me],I,A,s.COLOR_ATTACHMENT0,_e,Me);else oe(Z.__webglFramebuffer,I,A,s.COLOR_ATTACHMENT0,_e,0);p(A)&&m(_e),t.unbindTexture()}I.depthBuffer&&Ce(I)}function je(I){const A=I.textures;for(let Z=0,re=A.length;Z<re;Z++){const de=A[Z];if(p(de)){const ie=I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Le=n.get(de).__webglTexture;t.bindTexture(ie,Le),m(ie),t.unbindTexture()}}}const Ve=[],F=[];function dt(I){if(I.samples>0){if(Ze(I)===!1){const A=I.textures,Z=I.width,re=I.height;let de=s.COLOR_BUFFER_BIT;const ie=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(I),_e=A.length>1;if(_e)for(let Me=0;Me<A.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Me=0;Me<A.length;Me++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(de|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(de|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const Ye=n.get(A[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,Z,re,0,0,Z,re,de,s.NEAREST),c===!0&&(Ve.length=0,F.length=0,Ve.push(s.COLOR_ATTACHMENT0+Me),I.depthBuffer&&I.resolveDepthBuffer===!1&&(Ve.push(ie),F.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,F)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<A.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const Ye=n.get(A[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,Ye,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&c){const A=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[A])}}}function qe(I){return Math.min(i.maxSamples,I.samples)}function Ze(I){const A=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function X(I){const A=a.render.frame;h.get(I)!==A&&(h.set(I,A),I.update())}function rt(I,A){const Z=I.colorSpace,re=I.format,de=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==tn&&Z!==ur&&(St.getTransfer(Z)===Bt?(re!==oi||de!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),A}function He(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=E,this.setTexture2D=z,this.setTexture2DArray=$,this.setTexture3D=H,this.setTextureCube=te,this.rebindTextures=Pe,this.setupRenderTarget=Je,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ce,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ze}function xS(s,e){function t(n,i=ur){let r;const a=St.getTransfer(i);if(n===xr)return s.UNSIGNED_BYTE;if(n===Ku)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Zu)return s.UNSIGNED_SHORT_5_5_5_1;if(n===rm)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===nm)return s.BYTE;if(n===im)return s.SHORT;if(n===ya)return s.UNSIGNED_SHORT;if(n===Yu)return s.INT;if(n===yr)return s.UNSIGNED_INT;if(n===vn)return s.FLOAT;if(n===un)return s.HALF_FLOAT;if(n===sm)return s.ALPHA;if(n===am)return s.RGB;if(n===oi)return s.RGBA;if(n===om)return s.LUMINANCE;if(n===cm)return s.LUMINANCE_ALPHA;if(n===oa)return s.DEPTH_COMPONENT;if(n===Ma)return s.DEPTH_STENCIL;if(n===gl)return s.RED;if(n===Qu)return s.RED_INTEGER;if(n===lm)return s.RG;if(n===Ju)return s.RG_INTEGER;if(n===$u)return s.RGBA_INTEGER;if(n===Ic||n===Uc||n===Nc||n===Oc)if(a===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ic)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Uc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Nc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Oc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ic)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Uc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Nc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Oc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===kh||n===Bh||n===zh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Gh||n===Hh||n===Vh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Gh||n===Hh)return a===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Vh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wh||n===Xh||n===qh||n===jh||n===Yh||n===Kh||n===Zh||n===Qh||n===Jh||n===$h||n===eu||n===tu||n===nu||n===iu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Qh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jh)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$h)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eu)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===tu)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===nu)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===iu)return a===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Fc||n===ru||n===su)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Fc)return a===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ru)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===su)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hm||n===au||n===ou||n===cu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===au)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ou)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===cu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Sa?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class yS extends An{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class kr extends Vt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const SS={type:"move"};class nh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const p=t.getJointPose(b,n),m=this._getHandJoint(l,b);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(SS)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new kr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const MS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TS=`
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

}`;class ES{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Qt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Rn({vertexShader:MS,fragmentShader:TS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Gi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wS extends Ps{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,_=null;const b=new ES,p=t.getContextAttributes();let m=null,S=null;const y=[],M=[],D=new ct;let P=null;const w=new An;w.layers.enable(1),w.viewport=new Et;const L=new An;L.layers.enable(2),L.viewport=new Et;const O=[w,L],v=new yS;v.layers.enable(1),v.layers.enable(2);let E=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let oe=y[ne];return oe===void 0&&(oe=new nh,y[ne]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(ne){let oe=y[ne];return oe===void 0&&(oe=new nh,y[ne]=oe),oe.getGripSpace()},this.getHand=function(ne){let oe=y[ne];return oe===void 0&&(oe=new nh,y[ne]=oe),oe.getHandSpace()};function W(ne){const oe=M.indexOf(ne.inputSource);if(oe===-1)return;const fe=y[oe];fe!==void 0&&(fe.update(ne.inputSource,ne.frame,l||a),fe.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",$);for(let ne=0;ne<y.length;ne++){const oe=M[ne];oe!==null&&(M[ne]=null,y[ne].disconnect(oe))}E=null,N=null,b.reset(),e.setRenderTarget(m),d=null,f=null,u=null,i=null,S=null,Ne.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",z),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(D),i.renderState.layers===void 0){const oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new Gn(d.framebufferWidth,d.framebufferHeight,{format:oi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,fe=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?Ma:oa,fe=p.stencil?Sa:yr);const Ce={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=new XRWebGLBinding(i,t),f=u.createProjectionLayer(Ce),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Gn(f.textureWidth,f.textureHeight,{format:oi,type:xr,depthTexture:new xl(f.textureWidth,f.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ne.setContext(i),Ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function $(ne){for(let oe=0;oe<ne.removed.length;oe++){const fe=ne.removed[oe],ge=M.indexOf(fe);ge>=0&&(M[ge]=null,y[ge].disconnect(fe))}for(let oe=0;oe<ne.added.length;oe++){const fe=ne.added[oe];let ge=M.indexOf(fe);if(ge===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=M.length){M.push(fe),ge=Pe;break}else if(M[Pe]===null){M[Pe]=fe,ge=Pe;break}if(ge===-1)break}const Ce=y[ge];Ce&&Ce.connect(fe)}}const H=new j,te=new j;function Y(ne,oe,fe){H.setFromMatrixPosition(oe.matrixWorld),te.setFromMatrixPosition(fe.matrixWorld);const ge=H.distanceTo(te),Ce=oe.projectionMatrix.elements,Pe=fe.projectionMatrix.elements,Je=Ce[14]/(Ce[10]-1),je=Ce[14]/(Ce[10]+1),Ve=(Ce[9]+1)/Ce[5],F=(Ce[9]-1)/Ce[5],dt=(Ce[8]-1)/Ce[0],qe=(Pe[8]+1)/Pe[0],Ze=Je*dt,X=Je*qe,rt=ge/(-dt+qe),He=rt*-dt;if(oe.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(He),ne.translateZ(rt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const I=Je+rt,A=je+rt,Z=Ze-He,re=X+(ge-He),de=Ve*je/A*I,ie=F*je/A*I;ne.projectionMatrix.makePerspective(Z,re,de,ie,I,A),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function ce(ne,oe){oe===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(oe.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let oe=ne.near,fe=ne.far;b.texture!==null&&(b.depthNear>0&&(oe=b.depthNear),b.depthFar>0&&(fe=b.depthFar)),v.near=L.near=w.near=oe,v.far=L.far=w.far=fe,(E!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,N=v.far);const ge=ne.parent,Ce=v.cameras;ce(v,ge);for(let Pe=0;Pe<Ce.length;Pe++)ce(Ce[Pe],ge);Ce.length===2?Y(v,w,L):v.projectionMatrix.copy(w.projectionMatrix),U(ne,v,ge)};function U(ne,oe,fe){fe===null?ne.matrix.copy(oe.matrixWorld):(ne.matrix.copy(fe.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(oe.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(oe.projectionMatrix),ne.projectionMatrixInverse.copy(oe.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Ta*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(ne){c=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let ve=null;function Re(ne,oe){if(h=oe.getViewerPose(l||a),_=oe,h!==null){const fe=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ge=!1;fe.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let Pe=0;Pe<fe.length;Pe++){const Je=fe[Pe];let je=null;if(d!==null)je=d.getViewport(Je);else{const F=u.getViewSubImage(f,Je);je=F.viewport,Pe===0&&(e.setRenderTargetTextures(S,F.colorTexture,f.ignoreDepthValues?void 0:F.depthStencilTexture),e.setRenderTarget(S))}let Ve=O[Pe];Ve===void 0&&(Ve=new An,Ve.layers.enable(Pe),Ve.viewport=new Et,O[Pe]=Ve),Ve.matrix.fromArray(Je.transform.matrix),Ve.matrix.decompose(Ve.position,Ve.quaternion,Ve.scale),Ve.projectionMatrix.fromArray(Je.projectionMatrix),Ve.projectionMatrixInverse.copy(Ve.projectionMatrix).invert(),Ve.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(v.matrix.copy(Ve.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(Ve)}const Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const Pe=u.getDepthInformation(fe[0]);Pe&&Pe.isValid&&Pe.texture&&b.init(e,Pe,i.renderState)}}for(let fe=0;fe<y.length;fe++){const ge=M[fe],Ce=y[fe];ge!==null&&Ce!==void 0&&Ce.update(ge,oe,l||a)}ve&&ve(ne,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const Ne=new Mm;Ne.setAnimationLoop(Re),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const os=new Ki,AS=new tt;function RS(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,xm(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,S,y,M){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,M)):m.isMeshMatcapMaterial?(r(p,m),_(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),b(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?c(p,m,S,y):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Wn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Wn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const S=e.get(m),y=S.envMap,M=S.envMapRotation;y&&(p.envMap.value=y,os.copy(M),os.x*=-1,os.y*=-1,os.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(os.y*=-1,os.z*=-1),p.envMapRotation.value.setFromMatrix4(AS.makeRotationFromEuler(os)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function c(p,m,S,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=y*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Wn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,m){m.matcap&&(p.matcap.value=m.matcap)}function b(p,m){const S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function CS(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function l(S,y){let M=i[S.id];M===void 0&&(_(S),M=h(S),i[S.id]=M,S.addEventListener("dispose",p));const D=y.program;n.updateUBOMapping(S,D);const P=e.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}function h(S){const y=u();S.__bindingPointIndex=y;const M=s.createBuffer(),D=S.__size,P=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,D,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],M=S.uniforms,D=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,w=M.length;P<w;P++){const L=Array.isArray(M[P])?M[P]:[M[P]];for(let O=0,v=L.length;O<v;O++){const E=L[O];if(d(E,P,O,D)===!0){const N=E.__offset,W=Array.isArray(E.value)?E.value:[E.value];let z=0;for(let $=0;$<W.length;$++){const H=W[$],te=b(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,s.bufferSubData(s.UNIFORM_BUFFER,N+z,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,z),z+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,N,E.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,M,D){const P=S.value,w=y+"_"+M;if(D[w]===void 0)return typeof P=="number"||typeof P=="boolean"?D[w]=P:D[w]=P.clone(),!0;{const L=D[w];if(typeof P=="number"||typeof P=="boolean"){if(L!==P)return D[w]=P,!0}else if(L.equals(P)===!1)return L.copy(P),!0}return!1}function _(S){const y=S.uniforms;let M=0;const D=16;for(let w=0,L=y.length;w<L;w++){const O=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,E=O.length;v<E;v++){const N=O[v],W=Array.isArray(N.value)?N.value:[N.value];for(let z=0,$=W.length;z<$;z++){const H=W[z],te=b(H),Y=M%D,ce=Y%te.boundary,U=Y+ce;M+=ce,U!==0&&D-U<te.storage&&(M+=D-U),N.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=M,M+=te.storage}}}const P=M%D;return P>0&&(M+=D-P),S.__size=M,S.__cache={},this}function b(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function p(S){const y=S.target;y.removeEventListener("dispose",p);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function m(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:m}}class PS{constructor(e={}){const{canvas:t=m0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let b=null,p=null;const m=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this.toneMapping=_r,this.toneMappingExposure=1;const y=this;let M=!1,D=0,P=0,w=null,L=-1,O=null;const v=new Et,E=new Et;let N=null;const W=new Xe(0);let z=0,$=t.width,H=t.height,te=1,Y=null,ce=null;const U=new Et(0,0,$,H),ve=new Et(0,0,$,H);let Re=!1;const Ne=new rf;let ne=!1,oe=!1;const fe=new tt,ge=new tt,Ce=new j,Pe=new Et,Je={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let je=!1;function Ve(){return w===null?te:1}let F=n;function dt(C,g){return t.getContext(C,g)}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Gu}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Se,!1),F===null){const g="webgl2";if(F=dt(g,C),F===null)throw dt(g)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let qe,Ze,X,rt,He,I,A,Z,re,de,ie,Le,_e,Me,Ye,me,Ae,De,Ue,xe,$e,ze,Ke,G;function he(){qe=new Nx(F),qe.init(),ze=new xS(F,qe),Ze=new Cx(F,qe,e,ze),X=new _S(F),Ze.reverseDepthBuffer&&X.buffers.depth.setReversed(!0),rt=new kx(F),He=new nS,I=new vS(F,qe,X,He,Ze,ze,rt),A=new Dx(y),Z=new Ux(y),re=new X0(F),Ke=new Ax(F,re),de=new Ox(F,re,rt,Ke),ie=new zx(F,de,re,rt),Ue=new Bx(F,Ze,I),me=new Px(He),Le=new tS(y,A,Z,qe,Ze,Ke,me),_e=new RS(y,He),Me=new rS,Ye=new hS(qe),De=new wx(y,A,Z,X,ie,f,c),Ae=new mS(y,ie,Ze),G=new CS(F,rt,Ze,X),xe=new Rx(F,qe,rt),$e=new Fx(F,qe,rt),rt.programs=Le.programs,y.capabilities=Ze,y.extensions=qe,y.properties=He,y.renderLists=Me,y.shadowMap=Ae,y.state=X,y.info=rt}he();const V=new wS(y,F);this.xr=V,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const C=qe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=qe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(C){C!==void 0&&(te=C,this.setSize($,H,!1))},this.getSize=function(C){return C.set($,H)},this.setSize=function(C,g,x=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=C,H=g,t.width=Math.floor(C*te),t.height=Math.floor(g*te),x===!0&&(t.style.width=C+"px",t.style.height=g+"px"),this.setViewport(0,0,C,g)},this.getDrawingBufferSize=function(C){return C.set($*te,H*te).floor()},this.setDrawingBufferSize=function(C,g,x){$=C,H=g,te=x,t.width=Math.floor(C*x),t.height=Math.floor(g*x),this.setViewport(0,0,C,g)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,g,x,T){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,g,x,T),X.viewport(v.copy(U).multiplyScalar(te).round())},this.getScissor=function(C){return C.copy(ve)},this.setScissor=function(C,g,x,T){C.isVector4?ve.set(C.x,C.y,C.z,C.w):ve.set(C,g,x,T),X.scissor(E.copy(ve).multiplyScalar(te).round())},this.getScissorTest=function(){return Re},this.setScissorTest=function(C){X.setScissorTest(Re=C)},this.setOpaqueSort=function(C){Y=C},this.setTransparentSort=function(C){ce=C},this.getClearColor=function(C){return C.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(C=!0,g=!0,x=!0){let T=0;if(C){let R=!1;if(w!==null){const B=w.texture.format;R=B===$u||B===Ju||B===Qu}if(R){const B=w.texture.type,k=B===xr||B===yr||B===ya||B===Sa||B===Ku||B===Zu,q=De.getClearColor(),Q=De.getClearAlpha(),J=q.r,ee=q.g,K=q.b;k?(d[0]=J,d[1]=ee,d[2]=K,d[3]=Q,F.clearBufferuiv(F.COLOR,0,d)):(_[0]=J,_[1]=ee,_[2]=K,_[3]=Q,F.clearBufferiv(F.COLOR,0,_))}else T|=F.COLOR_BUFFER_BIT}g&&(T|=F.DEPTH_BUFFER_BIT,F.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),x&&(T|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Me.dispose(),Ye.dispose(),He.dispose(),A.dispose(),Z.dispose(),ie.dispose(),Ke.dispose(),G.dispose(),Le.dispose(),V.dispose(),V.removeEventListener("sessionstart",vt),V.removeEventListener("sessionend",Te),We.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=rt.autoReset,g=Ae.enabled,x=Ae.autoUpdate,T=Ae.needsUpdate,R=Ae.type;he(),rt.autoReset=C,Ae.enabled=g,Ae.autoUpdate=x,Ae.needsUpdate=T,Ae.type=R}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){const g=C.target;g.removeEventListener("dispose",et),Ct(g)}function Ct(C){Ft(C),He.remove(C)}function Ft(C){const g=He.get(C).programs;g!==void 0&&(g.forEach(function(x){Le.releaseProgram(x)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,g,x,T,R,B){g===null&&(g=Je);const k=R.isMesh&&R.matrixWorld.determinant()<0,q=Tt(C,g,x,T,R);X.setMaterial(T,k);let Q=x.index,J=1;if(T.wireframe===!0){if(Q=de.getWireframeAttribute(x),Q===void 0)return;J=2}const ee=x.drawRange,K=x.attributes.position;let le=ee.start*J,pe=(ee.start+ee.count)*J;B!==null&&(le=Math.max(le,B.start*J),pe=Math.min(pe,(B.start+B.count)*J)),Q!==null?(le=Math.max(le,0),pe=Math.min(pe,Q.count)):K!=null&&(le=Math.max(le,0),pe=Math.min(pe,K.count));const be=pe-le;if(be<0||be===1/0)return;Ke.setup(R,T,q,x,Q);let we,ue=xe;if(Q!==null&&(we=re.get(Q),ue=$e,ue.setIndex(we)),R.isMesh)T.wireframe===!0?(X.setLineWidth(T.wireframeLinewidth*Ve()),ue.setMode(F.LINES)):ue.setMode(F.TRIANGLES);else if(R.isLine){let ae=T.linewidth;ae===void 0&&(ae=1),X.setLineWidth(ae*Ve()),R.isLineSegments?ue.setMode(F.LINES):R.isLineLoop?ue.setMode(F.LINE_LOOP):ue.setMode(F.LINE_STRIP)}else R.isPoints?ue.setMode(F.POINTS):R.isSprite&&ue.setMode(F.TRIANGLES);if(R.isBatchedMesh)if(R._multiDrawInstances!==null)ue.renderMultiDrawInstances(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount,R._multiDrawInstances);else if(qe.get("WEBGL_multi_draw"))ue.renderMultiDraw(R._multiDrawStarts,R._multiDrawCounts,R._multiDrawCount);else{const ae=R._multiDrawStarts,Fe=R._multiDrawCounts,Be=R._multiDrawCount,xt=Q?re.get(Q).bytesPerElement:1,nn=He.get(T).currentProgram.getUniforms();for(let ht=0;ht<Be;ht++)nn.setValue(F,"_gl_DrawID",ht),ue.render(ae[ht]/xt,Fe[ht])}else if(R.isInstancedMesh)ue.renderInstances(le,be,R.count);else if(x.isInstancedBufferGeometry){const ae=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,Fe=Math.min(x.instanceCount,ae);ue.renderInstances(le,be,Fe)}else ue.render(le,be)};function lt(C,g,x){C.transparent===!0&&C.side===Li&&C.forceSinglePass===!1?(C.side=Wn,C.needsUpdate=!0,Wt(C,g,x),C.side=vr,C.needsUpdate=!0,Wt(C,g,x),C.side=Li):Wt(C,g,x)}this.compile=function(C,g,x=null){x===null&&(x=C),p=Ye.get(x),p.init(g),S.push(p),x.traverseVisible(function(R){R.isLight&&R.layers.test(g.layers)&&(p.pushLight(R),R.castShadow&&p.pushShadow(R))}),C!==x&&C.traverseVisible(function(R){R.isLight&&R.layers.test(g.layers)&&(p.pushLight(R),R.castShadow&&p.pushShadow(R))}),p.setupLights();const T=new Set;return C.traverse(function(R){if(!(R.isMesh||R.isPoints||R.isLine||R.isSprite))return;const B=R.material;if(B)if(Array.isArray(B))for(let k=0;k<B.length;k++){const q=B[k];lt(q,x,R),T.add(q)}else lt(B,x,R),T.add(B)}),S.pop(),p=null,T},this.compileAsync=function(C,g,x=null){const T=this.compile(C,g,x);return new Promise(R=>{function B(){if(T.forEach(function(k){He.get(k).currentProgram.isReady()&&T.delete(k)}),T.size===0){R(C);return}setTimeout(B,10)}qe.get("KHR_parallel_shader_compile")!==null?B():setTimeout(B,10)})};let ke=null;function Oe(C){ke&&ke(C)}function vt(){We.stop()}function Te(){We.start()}const We=new Mm;We.setAnimationLoop(Oe),typeof self<"u"&&We.setContext(self),this.setAnimationLoop=function(C){ke=C,V.setAnimationLoop(C),C===null?We.stop():We.start()},V.addEventListener("sessionstart",vt),V.addEventListener("sessionend",Te),this.render=function(C,g){if(g!==void 0&&g.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(g),g=V.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,g,w),p=Ye.get(C,S.length),p.init(g),S.push(p),ge.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),Ne.setFromProjectionMatrix(ge),oe=this.localClippingEnabled,ne=me.init(this.clippingPlanes,oe),b=Me.get(C,m.length),b.init(),m.push(b),V.enabled===!0&&V.isPresenting===!0){const B=y.xr.getDepthSensingMesh();B!==null&&Ge(B,g,-1/0,y.sortObjects)}Ge(C,g,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(Y,ce),je=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,je&&De.addToRenderList(b,C),this.info.render.frame++,ne===!0&&me.beginShadows();const x=p.state.shadowsArray;Ae.render(x,C,g),ne===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const T=b.opaque,R=b.transmissive;if(p.setupLights(),g.isArrayCamera){const B=g.cameras;if(R.length>0)for(let k=0,q=B.length;k<q;k++){const Q=B[k];Gt(T,R,C,Q)}je&&De.render(C);for(let k=0,q=B.length;k<q;k++){const Q=B[k];Qe(b,C,Q,Q.viewport)}}else R.length>0&&Gt(T,R,C,g),je&&De.render(C),Qe(b,C,g);w!==null&&(I.updateMultisampleRenderTarget(w),I.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(y,C,g),Ke.resetDefaultState(),L=-1,O=null,S.pop(),S.length>0?(p=S[S.length-1],ne===!0&&me.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?b=m[m.length-1]:b=null};function Ge(C,g,x,T){if(C.visible===!1)return;if(C.layers.test(g.layers)){if(C.isGroup)x=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(g);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Ne.intersectsSprite(C)){T&&Pe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const k=ie.update(C),q=C.material;q.visible&&b.push(C,k,q,x,Pe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Ne.intersectsObject(C))){const k=ie.update(C),q=C.material;if(T&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Pe.copy(C.boundingSphere.center)):(k.boundingSphere===null&&k.computeBoundingSphere(),Pe.copy(k.boundingSphere.center)),Pe.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(q)){const Q=k.groups;for(let J=0,ee=Q.length;J<ee;J++){const K=Q[J],le=q[K.materialIndex];le&&le.visible&&b.push(C,k,le,x,Pe.z,K)}}else q.visible&&b.push(C,k,q,x,Pe.z,null)}}const B=C.children;for(let k=0,q=B.length;k<q;k++)Ge(B[k],g,x,T)}function Qe(C,g,x,T){const R=C.opaque,B=C.transmissive,k=C.transparent;p.setupLightsView(x),ne===!0&&me.setGlobalState(y.clippingPlanes,x),T&&X.viewport(v.copy(T)),R.length>0&&nt(R,g,x),B.length>0&&nt(B,g,x),k.length>0&&nt(k,g,x),X.buffers.depth.setTest(!0),X.buffers.depth.setMask(!0),X.buffers.color.setMask(!0),X.setPolygonOffset(!1)}function Gt(C,g,x,T){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[T.id]===void 0&&(p.state.transmissionRenderTarget[T.id]=new Gn(1,1,{generateMipmaps:!0,type:qe.has("EXT_color_buffer_half_float")||qe.has("EXT_color_buffer_float")?un:xr,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:St.workingColorSpace}));const B=p.state.transmissionRenderTarget[T.id],k=T.viewport||v;B.setSize(k.z,k.w);const q=y.getRenderTarget();y.setRenderTarget(B),y.getClearColor(W),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),je&&De.render(x);const Q=y.toneMapping;y.toneMapping=_r;const J=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),p.setupLightsView(T),ne===!0&&me.setGlobalState(y.clippingPlanes,T),nt(C,x,T),I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B),qe.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let K=0,le=g.length;K<le;K++){const pe=g[K],be=pe.object,we=pe.geometry,ue=pe.material,ae=pe.group;if(ue.side===Li&&be.layers.test(T.layers)){const Fe=ue.side;ue.side=Wn,ue.needsUpdate=!0,kt(be,x,T,we,ue,ae),ue.side=Fe,ue.needsUpdate=!0,ee=!0}}ee===!0&&(I.updateMultisampleRenderTarget(B),I.updateRenderTargetMipmap(B))}y.setRenderTarget(q),y.setClearColor(W,z),J!==void 0&&(T.viewport=J),y.toneMapping=Q}function nt(C,g,x){const T=g.isScene===!0?g.overrideMaterial:null;for(let R=0,B=C.length;R<B;R++){const k=C[R],q=k.object,Q=k.geometry,J=T===null?k.material:T,ee=k.group;q.layers.test(x.layers)&&kt(q,g,x,Q,J,ee)}}function kt(C,g,x,T,R,B){C.onBeforeRender(y,g,x,T,R,B),C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),R.onBeforeRender(y,g,x,T,C,B),R.transparent===!0&&R.side===Li&&R.forceSinglePass===!1?(R.side=Wn,R.needsUpdate=!0,y.renderBufferDirect(x,g,T,R,C,B),R.side=vr,R.needsUpdate=!0,y.renderBufferDirect(x,g,T,R,C,B),R.side=Li):y.renderBufferDirect(x,g,T,R,C,B),C.onAfterRender(y,g,x,T,R,B)}function Wt(C,g,x){g.isScene!==!0&&(g=Je);const T=He.get(C),R=p.state.lights,B=p.state.shadowsArray,k=R.state.version,q=Le.getParameters(C,R.state,B,g,x),Q=Le.getProgramCacheKey(q);let J=T.programs;T.environment=C.isMeshStandardMaterial?g.environment:null,T.fog=g.fog,T.envMap=(C.isMeshStandardMaterial?Z:A).get(C.envMap||T.environment),T.envMapRotation=T.environment!==null&&C.envMap===null?g.environmentRotation:C.envMapRotation,J===void 0&&(C.addEventListener("dispose",et),J=new Map,T.programs=J);let ee=J.get(Q);if(ee!==void 0){if(T.currentProgram===ee&&T.lightsStateVersion===k)return wt(C,q),ee}else q.uniforms=Le.getUniforms(C),C.onBeforeCompile(q,y),ee=Le.acquireProgram(q,Q),J.set(Q,ee),T.uniforms=q.uniforms;const K=T.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(K.clippingPlanes=me.uniform),wt(C,q),T.needsLights=Mt(C),T.lightsStateVersion=k,T.needsLights&&(K.ambientLightColor.value=R.state.ambient,K.lightProbe.value=R.state.probe,K.directionalLights.value=R.state.directional,K.directionalLightShadows.value=R.state.directionalShadow,K.spotLights.value=R.state.spot,K.spotLightShadows.value=R.state.spotShadow,K.rectAreaLights.value=R.state.rectArea,K.ltc_1.value=R.state.rectAreaLTC1,K.ltc_2.value=R.state.rectAreaLTC2,K.pointLights.value=R.state.point,K.pointLightShadows.value=R.state.pointShadow,K.hemisphereLights.value=R.state.hemi,K.directionalShadowMap.value=R.state.directionalShadowMap,K.directionalShadowMatrix.value=R.state.directionalShadowMatrix,K.spotShadowMap.value=R.state.spotShadowMap,K.spotLightMatrix.value=R.state.spotLightMatrix,K.spotLightMap.value=R.state.spotLightMap,K.pointShadowMap.value=R.state.pointShadowMap,K.pointShadowMatrix.value=R.state.pointShadowMatrix),T.currentProgram=ee,T.uniformsList=null,ee}function It(C){if(C.uniformsList===null){const g=C.currentProgram.getUniforms();C.uniformsList=Bc.seqWithValue(g.seq,C.uniforms)}return C.uniformsList}function wt(C,g){const x=He.get(C);x.outputColorSpace=g.outputColorSpace,x.batching=g.batching,x.batchingColor=g.batchingColor,x.instancing=g.instancing,x.instancingColor=g.instancingColor,x.instancingMorph=g.instancingMorph,x.skinning=g.skinning,x.morphTargets=g.morphTargets,x.morphNormals=g.morphNormals,x.morphColors=g.morphColors,x.morphTargetsCount=g.morphTargetsCount,x.numClippingPlanes=g.numClippingPlanes,x.numIntersection=g.numClipIntersection,x.vertexAlphas=g.vertexAlphas,x.vertexTangents=g.vertexTangents,x.toneMapping=g.toneMapping}function Tt(C,g,x,T,R){g.isScene!==!0&&(g=Je),I.resetTextureUnits();const B=g.fog,k=T.isMeshStandardMaterial?g.environment:null,q=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:tn,Q=(T.isMeshStandardMaterial?Z:A).get(T.envMap||k),J=T.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,ee=!!x.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),K=!!x.morphAttributes.position,le=!!x.morphAttributes.normal,pe=!!x.morphAttributes.color;let be=_r;T.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(be=y.toneMapping);const we=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ue=we!==void 0?we.length:0,ae=He.get(T),Fe=p.state.lights;if(ne===!0&&(oe===!0||C!==O)){const it=C===O&&T.id===L;me.setState(T,C,it)}let Be=!1;T.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Fe.state.version||ae.outputColorSpace!==q||R.isBatchedMesh&&ae.batching===!1||!R.isBatchedMesh&&ae.batching===!0||R.isBatchedMesh&&ae.batchingColor===!0&&R.colorTexture===null||R.isBatchedMesh&&ae.batchingColor===!1&&R.colorTexture!==null||R.isInstancedMesh&&ae.instancing===!1||!R.isInstancedMesh&&ae.instancing===!0||R.isSkinnedMesh&&ae.skinning===!1||!R.isSkinnedMesh&&ae.skinning===!0||R.isInstancedMesh&&ae.instancingColor===!0&&R.instanceColor===null||R.isInstancedMesh&&ae.instancingColor===!1&&R.instanceColor!==null||R.isInstancedMesh&&ae.instancingMorph===!0&&R.morphTexture===null||R.isInstancedMesh&&ae.instancingMorph===!1&&R.morphTexture!==null||ae.envMap!==Q||T.fog===!0&&ae.fog!==B||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==me.numPlanes||ae.numIntersection!==me.numIntersection)||ae.vertexAlphas!==J||ae.vertexTangents!==ee||ae.morphTargets!==K||ae.morphNormals!==le||ae.morphColors!==pe||ae.toneMapping!==be||ae.morphTargetsCount!==ue)&&(Be=!0):(Be=!0,ae.__version=T.version);let xt=ae.currentProgram;Be===!0&&(xt=Wt(T,g,R));let nn=!1,ht=!1,gt=!1;const st=xt.getUniforms(),Jt=ae.uniforms;if(X.useProgram(xt.program)&&(nn=!0,ht=!0,gt=!0),T.id!==L&&(L=T.id,ht=!0),nn||O!==C){Ze.reverseDepthBuffer?(fe.copy(C.projectionMatrix),_0(fe),b0(fe),st.setValue(F,"projectionMatrix",fe)):st.setValue(F,"projectionMatrix",C.projectionMatrix),st.setValue(F,"viewMatrix",C.matrixWorldInverse);const it=st.map.cameraPosition;it!==void 0&&it.setValue(F,Ce.setFromMatrixPosition(C.matrixWorld)),Ze.logarithmicDepthBuffer&&st.setValue(F,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&st.setValue(F,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,ht=!0,gt=!0)}if(R.isSkinnedMesh){st.setOptional(F,R,"bindMatrix"),st.setOptional(F,R,"bindMatrixInverse");const it=R.skeleton;it&&(it.boneTexture===null&&it.computeBoneTexture(),st.setValue(F,"boneTexture",it.boneTexture,I))}R.isBatchedMesh&&(st.setOptional(F,R,"batchingTexture"),st.setValue(F,"batchingTexture",R._matricesTexture,I),st.setOptional(F,R,"batchingIdTexture"),st.setValue(F,"batchingIdTexture",R._indirectTexture,I),st.setOptional(F,R,"batchingColorTexture"),R._colorsTexture!==null&&st.setValue(F,"batchingColorTexture",R._colorsTexture,I));const Yt=x.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Ue.update(R,x,xt),(ht||ae.receiveShadow!==R.receiveShadow)&&(ae.receiveShadow=R.receiveShadow,st.setValue(F,"receiveShadow",R.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(Jt.envMap.value=Q,Jt.flipEnvMap.value=Q.isCubeTexture&&Q.isRenderTargetTexture===!1?-1:1),T.isMeshStandardMaterial&&T.envMap===null&&g.environment!==null&&(Jt.envMapIntensity.value=g.environmentIntensity),ht&&(st.setValue(F,"toneMappingExposure",y.toneMappingExposure),ae.needsLights&&Ln(Jt,gt),B&&T.fog===!0&&_e.refreshFogUniforms(Jt,B),_e.refreshMaterialUniforms(Jt,T,te,H,p.state.transmissionRenderTarget[C.id]),Bc.upload(F,It(ae),Jt,I)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(Bc.upload(F,It(ae),Jt,I),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&st.setValue(F,"center",R.center),st.setValue(F,"modelViewMatrix",R.modelViewMatrix),st.setValue(F,"normalMatrix",R.normalMatrix),st.setValue(F,"modelMatrix",R.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){const it=T.uniformsGroups;for(let At=0,Ti=it.length;At<Ti;At++){const Tr=it[At];G.update(Tr,xt),G.bind(Tr,xt)}}return xt}function Ln(C,g){C.ambientLightColor.needsUpdate=g,C.lightProbe.needsUpdate=g,C.directionalLights.needsUpdate=g,C.directionalLightShadows.needsUpdate=g,C.pointLights.needsUpdate=g,C.pointLightShadows.needsUpdate=g,C.spotLights.needsUpdate=g,C.spotLightShadows.needsUpdate=g,C.rectAreaLights.needsUpdate=g,C.hemisphereLights.needsUpdate=g}function Mt(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,g,x){He.get(C.texture).__webglTexture=g,He.get(C.depthTexture).__webglTexture=x;const T=He.get(C);T.__hasExternalTextures=!0,T.__autoAllocateDepthBuffer=x===void 0,T.__autoAllocateDepthBuffer||qe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,g){const x=He.get(C);x.__webglFramebuffer=g,x.__useDefaultFramebuffer=g===void 0},this.setRenderTarget=function(C,g=0,x=0){w=C,D=g,P=x;let T=!0,R=null,B=!1,k=!1;if(C){const Q=He.get(C);if(Q.__useDefaultFramebuffer!==void 0)X.bindFramebuffer(F.FRAMEBUFFER,null),T=!1;else if(Q.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Q.__hasExternalTextures)I.rebindTextures(C,He.get(C.texture).__webglTexture,He.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const K=C.depthTexture;if(Q.__boundDepthTexture!==K){if(K!==null&&He.has(K)&&(C.width!==K.image.width||C.height!==K.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}const J=C.texture;(J.isData3DTexture||J.isDataArrayTexture||J.isCompressedArrayTexture)&&(k=!0);const ee=He.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(ee[g])?R=ee[g][x]:R=ee[g],B=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?R=He.get(C).__webglMultisampledFramebuffer:Array.isArray(ee)?R=ee[x]:R=ee,v.copy(C.viewport),E.copy(C.scissor),N=C.scissorTest}else v.copy(U).multiplyScalar(te).floor(),E.copy(ve).multiplyScalar(te).floor(),N=Re;if(X.bindFramebuffer(F.FRAMEBUFFER,R)&&T&&X.drawBuffers(C,R),X.viewport(v),X.scissor(E),X.setScissorTest(N),B){const Q=He.get(C.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+g,Q.__webglTexture,x)}else if(k){const Q=He.get(C.texture),J=g||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Q.__webglTexture,x||0,J)}L=-1},this.readRenderTargetPixels=function(C,g,x,T,R,B,k){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(q=q[k]),q){X.bindFramebuffer(F.FRAMEBUFFER,q);try{const Q=C.texture,J=Q.format,ee=Q.type;if(!Ze.textureFormatReadable(J)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ze.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}g>=0&&g<=C.width-T&&x>=0&&x<=C.height-R&&F.readPixels(g,x,T,R,ze.convert(J),ze.convert(ee),B)}finally{const Q=w!==null?He.get(w).__webglFramebuffer:null;X.bindFramebuffer(F.FRAMEBUFFER,Q)}}},this.readRenderTargetPixelsAsync=async function(C,g,x,T,R,B,k){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&k!==void 0&&(q=q[k]),q){const Q=C.texture,J=Q.format,ee=Q.type;if(!Ze.textureFormatReadable(J))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ze.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(g>=0&&g<=C.width-T&&x>=0&&x<=C.height-R){X.bindFramebuffer(F.FRAMEBUFFER,q);const K=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,K),F.bufferData(F.PIXEL_PACK_BUFFER,B.byteLength,F.STREAM_READ),F.readPixels(g,x,T,R,ze.convert(J),ze.convert(ee),0);const le=w!==null?He.get(w).__webglFramebuffer:null;X.bindFramebuffer(F.FRAMEBUFFER,le);const pe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await g0(F,pe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,K),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,B),F.deleteBuffer(K),F.deleteSync(pe),B}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,g=null,x=0){C.isTexture!==!0&&(kc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),g=arguments[0]||null,C=arguments[1]);const T=Math.pow(2,-x),R=Math.floor(C.image.width*T),B=Math.floor(C.image.height*T),k=g!==null?g.x:0,q=g!==null?g.y:0;I.setTexture2D(C,0),F.copyTexSubImage2D(F.TEXTURE_2D,x,0,0,k,q,R,B),X.unbindTexture()},this.copyTextureToTexture=function(C,g,x=null,T=null,R=0){C.isTexture!==!0&&(kc("WebGLRenderer: copyTextureToTexture function signature has changed."),T=arguments[0]||null,C=arguments[1],g=arguments[2],R=arguments[3]||0,x=null);let B,k,q,Q,J,ee;x!==null?(B=x.max.x-x.min.x,k=x.max.y-x.min.y,q=x.min.x,Q=x.min.y):(B=C.image.width,k=C.image.height,q=0,Q=0),T!==null?(J=T.x,ee=T.y):(J=0,ee=0);const K=ze.convert(g.format),le=ze.convert(g.type);I.setTexture2D(g,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,g.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,g.unpackAlignment);const pe=F.getParameter(F.UNPACK_ROW_LENGTH),be=F.getParameter(F.UNPACK_IMAGE_HEIGHT),we=F.getParameter(F.UNPACK_SKIP_PIXELS),ue=F.getParameter(F.UNPACK_SKIP_ROWS),ae=F.getParameter(F.UNPACK_SKIP_IMAGES),Fe=C.isCompressedTexture?C.mipmaps[R]:C.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Fe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,q),F.pixelStorei(F.UNPACK_SKIP_ROWS,Q),C.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,R,J,ee,B,k,K,le,Fe.data):C.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,R,J,ee,Fe.width,Fe.height,K,Fe.data):F.texSubImage2D(F.TEXTURE_2D,R,J,ee,B,k,K,le,Fe),F.pixelStorei(F.UNPACK_ROW_LENGTH,pe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be),F.pixelStorei(F.UNPACK_SKIP_PIXELS,we),F.pixelStorei(F.UNPACK_SKIP_ROWS,ue),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ae),R===0&&g.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),X.unbindTexture()},this.copyTextureToTexture3D=function(C,g,x=null,T=null,R=0){C.isTexture!==!0&&(kc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,T=arguments[1]||null,C=arguments[2],g=arguments[3],R=arguments[4]||0);let B,k,q,Q,J,ee,K,le,pe;const be=C.isCompressedTexture?C.mipmaps[R]:C.image;x!==null?(B=x.max.x-x.min.x,k=x.max.y-x.min.y,q=x.max.z-x.min.z,Q=x.min.x,J=x.min.y,ee=x.min.z):(B=be.width,k=be.height,q=be.depth,Q=0,J=0,ee=0),T!==null?(K=T.x,le=T.y,pe=T.z):(K=0,le=0,pe=0);const we=ze.convert(g.format),ue=ze.convert(g.type);let ae;if(g.isData3DTexture)I.setTexture3D(g,0),ae=F.TEXTURE_3D;else if(g.isDataArrayTexture||g.isCompressedArrayTexture)I.setTexture2DArray(g,0),ae=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,g.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,g.unpackAlignment);const Fe=F.getParameter(F.UNPACK_ROW_LENGTH),Be=F.getParameter(F.UNPACK_IMAGE_HEIGHT),xt=F.getParameter(F.UNPACK_SKIP_PIXELS),nn=F.getParameter(F.UNPACK_SKIP_ROWS),ht=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,be.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,be.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Q),F.pixelStorei(F.UNPACK_SKIP_ROWS,J),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ee),C.isDataTexture||C.isData3DTexture?F.texSubImage3D(ae,R,K,le,pe,B,k,q,we,ue,be.data):g.isCompressedArrayTexture?F.compressedTexSubImage3D(ae,R,K,le,pe,B,k,q,we,be.data):F.texSubImage3D(ae,R,K,le,pe,B,k,q,we,ue,be),F.pixelStorei(F.UNPACK_ROW_LENGTH,Fe),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Be),F.pixelStorei(F.UNPACK_SKIP_PIXELS,xt),F.pixelStorei(F.UNPACK_SKIP_ROWS,nn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,ht),R===0&&g.generateMipmaps&&F.generateMipmap(ae),X.unbindTexture()},this.initRenderTarget=function(C){He.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),X.unbindTexture()},this.resetState=function(){D=0,P=0,w=null,X.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===tf?"display-p3":"srgb",t.unpackColorSpace=St.workingColorSpace===_l?"display-p3":"srgb"}}class af{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new af(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class of extends Vt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ki,this.environmentIntensity=1,this.environmentRotation=new Ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class DS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=hu,this.updateRanges=[],this.version=0,this.uuid=Ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const In=new j;class cf{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyMatrix4(e),this.setXYZ(t,In.x,In.y,In.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.applyNormalMatrix(e),this.setXYZ(t,In.x,In.y,In.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)In.fromBufferAttribute(this,t),In.transformDirection(e),this.setXYZ(t,In.x,In.y,In.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Dt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Dt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ii(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ii(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ii(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ii(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Dt(t,this.array),n=Dt(n,this.array),i=Dt(i,this.array),r=Dt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new yn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new cf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Vd=new j,Wd=new Et,Xd=new Et,LS=new j,qd=new tt,hc=new j,ih=new Ji,jd=new tt,rh=new bl;class IS extends _t{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zf,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingBox.expandByPoint(hc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ji),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,hc),this.boundingSphere.expandByPoint(hc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ih.copy(this.boundingSphere),ih.applyMatrix4(i),e.ray.intersectsSphere(ih)!==!1&&(jd.copy(i).invert(),rh.copy(e.ray).applyMatrix4(jd),!(this.boundingBox!==null&&rh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,rh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Et,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===B_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Wd.fromBufferAttribute(i.attributes.skinIndex,e),Xd.fromBufferAttribute(i.attributes.skinWeight,e),Vd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Xd.getComponent(r);if(a!==0){const o=Wd.getComponent(r);qd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(LS.copy(Vd).applyMatrix4(qd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rm extends Vt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class lf extends Qt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=Nt,h=Nt,u,f){super(null,a,o,c,l,h,i,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Yd=new tt,US=new tt;class hf{constructor(e=[],t=[]){this.uuid=Ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:US;Yd.multiplyMatrices(o,t[r]),Yd.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new hf(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new lf(t,e,e,oi,vn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Rm),this.bones.push(a),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class fu extends yn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const js=new tt,Kd=new tt,uc=[],Zd=new Qi,NS=new tt,Va=new _t,Wa=new Ji;class OS extends _t{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new fu(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,NS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Zd.copy(e.boundingBox).applyMatrix4(js),this.boundingBox.union(Zd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ji),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,js),Wa.copy(e.boundingSphere).applyMatrix4(js),this.boundingSphere.union(Wa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Va.geometry=this.geometry,Va.material=this.material,Va.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wa.copy(this.boundingSphere),Wa.applyMatrix4(n),e.ray.intersectsSphere(Wa)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,js),Kd.multiplyMatrices(n,js),Va.matrixWorld=Kd,Va.raycast(e,uc);for(let a=0,o=uc.length;a<o;a++){const c=uc[a];c.instanceId=r,c.object=this,t.push(c)}uc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new fu(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new lf(new Float32Array(i*this.count),i,this.count,gl,vn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Cm extends Oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new j,il=new j,Qd=new tt,Xa=new bl,fc=new Ji,sh=new j,Jd=new j;class uf extends Vt{constructor(e=new pi,t=new Cm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)nl.fromBufferAttribute(t,i-1),il.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=nl.distanceTo(il);e.setAttribute("lineDistance",new jn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fc.copy(n.boundingSphere),fc.applyMatrix4(i),fc.radius+=r,e.ray.intersectsSphere(fc)===!1)return;Qd.copy(i).invert(),Xa.copy(e.ray).applyMatrix4(Qd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let b=d,p=_-1;b<p;b+=l){const m=h.getX(b),S=h.getX(b+1),y=dc(this,e,Xa,c,m,S);y&&t.push(y)}if(this.isLineLoop){const b=h.getX(_-1),p=h.getX(d),m=dc(this,e,Xa,c,b,p);m&&t.push(m)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let b=d,p=_-1;b<p;b+=l){const m=dc(this,e,Xa,c,b,b+1);m&&t.push(m)}if(this.isLineLoop){const b=dc(this,e,Xa,c,_-1,d);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function dc(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(nl.fromBufferAttribute(a,i),il.fromBufferAttribute(a,r),t.distanceSqToSegment(nl,il,sh,Jd)>n)return;sh.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(sh);if(!(c<e.near||c>e.far))return{distance:c,point:Jd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const $d=new j,ep=new j;class FS extends uf{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)$d.fromBufferAttribute(t,i),ep.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+$d.distanceTo(ep);e.setAttribute("lineDistance",new jn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kS extends uf{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Pm extends Oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const tp=new tt,du=new bl,pc=new Ji,mc=new j;class BS extends Vt{constructor(e=new pi,t=new Pm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(i),pc.radius+=r,e.ray.intersectsSphere(pc)===!1)return;tp.copy(i).invert(),du.copy(e.ray).applyMatrix4(tp);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,u=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=f,b=d;_<b;_++){const p=l.getX(_);mc.fromBufferAttribute(u,p),np(mc,p,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(u.count,a.start+a.count);for(let _=f,b=d;_<b;_++)mc.fromBufferAttribute(u,_),np(mc,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function np(s,e,t,n,i,r,a){const o=du.distanceSqToPoint(s);if(o<t){const c=new j;du.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class ip extends Qt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ff extends pi{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],f=[],d=[];let _=0;const b=[],p=n/2;let m=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new jn(u,3)),this.setAttribute("normal",new jn(f,3)),this.setAttribute("uv",new jn(d,2));function S(){const M=new j,D=new j;let P=0;const w=(t-e)/n;for(let L=0;L<=r;L++){const O=[],v=L/r,E=v*(t-e)+e;for(let N=0;N<=i;N++){const W=N/i,z=W*c+o,$=Math.sin(z),H=Math.cos(z);D.x=E*$,D.y=-v*n+p,D.z=E*H,u.push(D.x,D.y,D.z),M.set($,w,H).normalize(),f.push(M.x,M.y,M.z),d.push(W,1-v),O.push(_++)}b.push(O)}for(let L=0;L<i;L++)for(let O=0;O<r;O++){const v=b[O][L],E=b[O+1][L],N=b[O+1][L+1],W=b[O][L+1];e>0&&(h.push(v,E,W),P+=3),t>0&&(h.push(E,N,W),P+=3)}l.addGroup(m,P,0),m+=P}function y(M){const D=_,P=new ct,w=new j;let L=0;const O=M===!0?e:t,v=M===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,p*v,0),f.push(0,v,0),d.push(.5,.5),_++;const E=_;for(let N=0;N<=i;N++){const z=N/i*c+o,$=Math.cos(z),H=Math.sin(z);w.x=O*H,w.y=p*v,w.z=O*$,u.push(w.x,w.y,w.z),f.push(0,v,0),P.x=$*.5+.5,P.y=H*.5*v+.5,d.push(P.x,P.y),_++}for(let N=0;N<i;N++){const W=D+N,z=E+N;M===!0?h.push(z,z+1,W):h.push(z+1,z,W),L+=3}l.addGroup(m,L,M===!0?1:2),m+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ff(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class zS extends Rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Di extends Oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class hi extends Di{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class GS extends Oi{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ef,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function gc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function HS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function VS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function rp(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function Dm(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Bo{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class WS extends Bo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Qf,endingEnd:Qf}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jf:r=e,o=2*t-n;break;case $f:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Jf:a=e,c=2*n-t;break;case $f:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),b=_*_,p=b*_,m=-f*p+2*f*b-f*_,S=(1+f)*p+(-1.5-2*f)*b+(-.5+f)*_+1,y=(-1-d)*p+(1.5+d)*b+.5*_,M=d*p-d*b;for(let D=0;D!==o;++D)r[D]=m*a[h+D]+S*a[l+D]+y*a[c+D]+M*a[u+D];return r}}class XS extends Bo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==o;++f)r[f]=a[l+f]*u+a[c+f]*h;return r}}class qS extends Bo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class $i{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=gc(t,this.TimeBufferType),this.values=gc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:gc(e.times,Array),values:gc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new qS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new XS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new WS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case wo:t=this.InterpolantFactoryMethodLinear;break;case Rl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return wo;case this.InterpolantFactoryMethodSmooth:return Rl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&HS(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Rl,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(i)c=!0;else{const u=o*n,f=u-n,d=u+n;for(let _=0;_!==n;++_){const b=t[u+_];if(b!==t[f+_]||b!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const u=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}$i.prototype.TimeBufferType=Float32Array;$i.prototype.ValueBufferType=Float32Array;$i.prototype.DefaultInterpolation=wo;class Oa extends $i{constructor(e,t,n){super(e,t,n)}}Oa.prototype.ValueTypeName="bool";Oa.prototype.ValueBufferType=Array;Oa.prototype.DefaultInterpolation=Eo;Oa.prototype.InterpolantFactoryMethodLinear=void 0;Oa.prototype.InterpolantFactoryMethodSmooth=void 0;class Lm extends $i{}Lm.prototype.ValueTypeName="color";class wa extends $i{}wa.prototype.ValueTypeName="number";class jS extends Bo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let h=l+o;l!==h;l+=4)$r.slerpFlat(r,0,a,l-o,a,l,c);return r}}class Aa extends $i{InterpolantFactoryMethodLinear(e){return new jS(this.times,this.values,this.getValueSize(),e)}}Aa.prototype.ValueTypeName="quaternion";Aa.prototype.InterpolantFactoryMethodSmooth=void 0;class Fa extends $i{constructor(e,t,n){super(e,t,n)}}Fa.prototype.ValueTypeName="string";Fa.prototype.ValueBufferType=Array;Fa.prototype.DefaultInterpolation=Eo;Fa.prototype.InterpolantFactoryMethodLinear=void 0;Fa.prototype.InterpolantFactoryMethodSmooth=void 0;class Ra extends $i{}Ra.prototype.ValueTypeName="vector";class YS{constructor(e="",t=-1,n=[],i=z_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(ZS(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push($i.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const h=VS(c);c=rp(c,1,h),l=rp(l,1,h),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new wa(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],h=l.name.match(r);if(h&&h.length>1){const u=h[1];let f=i[u];f||(i[u]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,f,d,_,b){if(d.length!==0){const p=[],m=[];Dm(d,p,m,_),p.length!==0&&b.push(new u(f,p,m))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let u=0;u<l.length;u++){const f=l[u].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let b=0;b<f[_].morphTargets.length;b++)d[f[_].morphTargets[b]]=-1;for(const b in d){const p=[],m=[];for(let S=0;S!==f[_].morphTargets.length;++S){const y=f[_];p.push(y.time),m.push(y.morphTarget===b?1:0)}i.push(new wa(".morphTargetInfluence["+b+"]",p,m))}c=d.length*a}else{const d=".bones["+t[u].name+"]";n(Ra,d+".position",f,"pos",i),n(Aa,d+".quaternion",f,"rot",i),n(Ra,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function KS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return wa;case"vector":case"vector2":case"vector3":case"vector4":return Ra;case"color":return Lm;case"quaternion":return Aa;case"bool":case"boolean":return Oa;case"string":return Fa}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function ZS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=KS(s.type);if(s.times===void 0){const t=[],n=[];Dm(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Br={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class QS{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&i.onStart!==void 0&&i.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,i.onProgress!==void 0&&i.onProgress(h,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){const d=l[u],_=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return _}return null}}}const JS=new QS;class es{constructor(e){this.manager=e!==void 0?e:JS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}es.DEFAULT_MATERIAL_NAME="__DEFAULT";const sr={};class $S extends Error{constructor(e,t){super(e),this.response=t}}class Ro extends es{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Br.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(sr[e]!==void 0){sr[e].push({onLoad:t,onProgress:n,onError:i});return}sr[e]=[],sr[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const h=sr[e],u=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let b=0;const p=new ReadableStream({start(m){S();function S(){u.read().then(({done:y,value:M})=>{if(y)m.close();else{b+=M.byteLength;const D=new ProgressEvent("progress",{lengthComputable:_,loaded:b,total:d});for(let P=0,w=h.length;P<w;P++){const L=h[P];L.onProgress&&L.onProgress(D)}m.enqueue(M),S()}},y=>{m.error(y)})}}});return new Response(p)}else throw new $S(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o===void 0)return l.text();{const u=/charset="?([^;"\s]*)"?/i.exec(o),f=u&&u[1]?u[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Br.add(e,l);const h=sr[e];delete sr[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onLoad&&d.onLoad(l)}}).catch(l=>{const h=sr[e];if(h===void 0)throw this.manager.itemError(e),l;delete sr[e];for(let u=0,f=h.length;u<f;u++){const d=h[u];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class eM extends es{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Br.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=Ao("img");function c(){h(),Br.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class Im extends es{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new lf,o=new Ro(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Wi,a.wrapT=l.wrapT!==void 0?l.wrapT:Wi,a.magFilter=l.magFilter!==void 0?l.magFilter:cn,a.minFilter=l.minFilter!==void 0?l.minFilter:cn,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=Xi),l.mipmapCount===1&&(a.minFilter=cn),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class tM extends es{constructor(e){super(e)}load(e,t,n,i){const r=new Qt,a=new eM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class Sl extends Vt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class nM extends Sl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const ah=new tt,sp=new j,ap=new j;class df{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rf,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;sp.setFromMatrixPosition(e.matrixWorld),t.position.copy(sp),ap.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ap),t.updateMatrixWorld(),ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class iM extends df{constructor(){super(new An(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Ta*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Um extends Sl{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new iM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const op=new tt,qa=new j,oh=new j;class rM extends df{constructor(){super(new An(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Et(2,1,1,1),new Et(0,1,1,1),new Et(3,1,1,1),new Et(1,1,1,1),new Et(3,0,1,1),new Et(1,0,1,1)],this._cubeDirections=[new j(1,0,0),new j(-1,0,0),new j(0,0,1),new j(0,0,-1),new j(0,1,0),new j(0,-1,0)],this._cubeUps=[new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,1,0),new j(0,0,1),new j(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),qa.setFromMatrixPosition(e.matrixWorld),n.position.copy(qa),oh.copy(n.position),oh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(oh),n.updateMatrixWorld(),i.makeTranslation(-qa.x,-qa.y,-qa.z),op.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(op)}}class Nm extends Sl{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new rM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class sM extends df{constructor(){super(new vl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Om extends Sl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Vt.DEFAULT_UP),this.updateMatrix(),this.target=new Vt,this.shadow=new sM}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class co{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class aM extends es{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Br.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Br.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Br.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Br.add(e,c),r.manager.itemStart(e)}}class oM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=cp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function cp(){return performance.now()}const pf="\\[\\]\\.:\\/",cM=new RegExp("["+pf+"]","g"),mf="[^"+pf+"]",lM="[^"+pf.replace("\\.","")+"]",hM=/((?:WC+[\/:])*)/.source.replace("WC",mf),uM=/(WCOD+)?/.source.replace("WCOD",lM),fM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",mf),dM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",mf),pM=new RegExp("^"+hM+uM+fM+dM+"$"),mM=["material","materials","bones","map"];class gM{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cM,"")}static parseTrackName(e){const t=pM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);mM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=gM;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class ww{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(_n(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Aw extends Ps{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gu);class gf{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){const n=this;return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(function(r){const a=n.resolveName(r);n.callbacks[a.namespace]instanceof Object||(n.callbacks[a.namespace]={}),n.callbacks[a.namespace][a.value]instanceof Array||(n.callbacks[a.namespace][a.value]=[]),n.callbacks[a.namespace][a.value].push(t)}),this)}off(e){const t=this;return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(function(i){const r=t.resolveName(i);if(r.namespace!=="base"&&r.value==="")delete t.callbacks[r.namespace];else if(r.namespace==="base")for(const a in t.callbacks)t.callbacks[a]instanceof Object&&t.callbacks[a][r.value]instanceof Array&&(delete t.callbacks[a][r.value],Object.keys(t.callbacks[a]).length===0&&delete t.callbacks[a]);else t.callbacks[r.namespace]instanceof Object&&t.callbacks[r.namespace][r.value]instanceof Array&&(delete t.callbacks[r.namespace][r.value],Object.keys(t.callbacks[r.namespace]).length===0&&delete t.callbacks[r.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;const n=this;let i=null;const r=t instanceof Array?t:[];let a=this.resolveNames(e);if(a=this.resolveName(a[0]),a.namespace==="base")for(const o in n.callbacks)n.callbacks[o]instanceof Object&&n.callbacks[o][a.value]instanceof Array&&n.callbacks[o][a.value].forEach(function(c){c.apply(n,r)});else if(this.callbacks[a.namespace]instanceof Object){if(a.value==="")return console.warn("wrong name"),this;n.callbacks[a.namespace][a.value].forEach(function(o){o.apply(n,r)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class _M extends gf{constructor(){super(),this.onResize=()=>{window.clearTimeout(this.debounce),this.debounce=window.setTimeout(()=>this.trigger("resize"),150)},window.addEventListener("resize",this.onResize)}destroy(){window.clearTimeout(this.debounce),window.removeEventListener("resize",this.onResize),this.off("resize")}}function lp(s,e){if(e===G_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===lu||e===um){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===lu)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class bM extends es{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new MM(t)}),this.register(function(t){return new TM(t)}),this.register(function(t){return new IM(t)}),this.register(function(t){return new UM(t)}),this.register(function(t){return new NM(t)}),this.register(function(t){return new wM(t)}),this.register(function(t){return new AM(t)}),this.register(function(t){return new RM(t)}),this.register(function(t){return new CM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new PM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new LM(t)}),this.register(function(t){return new DM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new OM(t)}),this.register(function(t){return new FM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=co.extractUrlBase(e);a=co.resolveURL(l,this.path)}else a=co.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ro(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Fm){try{a[bt.KHR_BINARY_GLTF]=new kM(e)}catch(u){i&&i(u);return}r=JSON.parse(a[bt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new QM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],f=r.extensionsRequired||[];switch(u){case bt.KHR_MATERIALS_UNLIT:a[u]=new yM;break;case bt.KHR_DRACO_MESH_COMPRESSION:a[u]=new BM(r,this.dracoLoader);break;case bt.KHR_TEXTURE_TRANSFORM:a[u]=new zM;break;case bt.KHR_MESH_QUANTIZATION:a[u]=new GM;break;default:f.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function vM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const bt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class xM{constructor(e){this.parser=e,this.name=bt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const h=new Xe(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],tn);const u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Om(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Nm(h),l.distance=u;break;case"spot":l=new Um(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,or(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class yM{constructor(){this.name=bt.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(e,t,n){const i=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Kt))}return Promise.all(i)}}class SM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class MM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ct(o,o)}return Promise.all(r)}}class TM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class EM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class wM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],tn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Kt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class AM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class RM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(o[0],o[1],o[2],tn),Promise.all(r)}}class CM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class PM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(o[0],o[1],o[2],tn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Kt)),Promise.all(r)}}class DM{constructor(e){this.parser=e,this.name=bt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class LM{constructor(e){this.parser=e,this.name=bt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:hi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class IM{constructor(e){this.parser=e,this.name=bt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class UM{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class NM{constructor(e){this.parser=e,this.name=bt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class OM{constructor(e){this.name=bt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,h=i.count,u=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(d),h,u,f,i.mode,i.filter),d})})}else return null}}class FM{constructor(e){this.name=bt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==_i.TRIANGLES&&l.mode!==_i.TRIANGLE_STRIP&&l.mode!==_i.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const h=l.pop(),u=h.isGroup?h.children:[h],f=l[0].count,d=[];for(const _ of u){const b=new tt,p=new j,m=new $r,S=new j(1,1,1),y=new OS(_.geometry,_.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&m.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,b.compose(p,m,S));for(const M in c)if(M==="_COLOR_0"){const D=c[M];y.instanceColor=new fu(D.array,D.itemSize,D.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,c[M]);Vt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return h.isGroup?(h.clear(),h.add(...d),h):d[0]}))}}const Fm="glTF",ja=12,hp={JSON:1313821514,BIN:5130562};class kM{constructor(e){this.name=bt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ja),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Fm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-ja,r=new DataView(e,ja);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===hp.JSON){const l=new Uint8Array(e,ja+a,o);this.content=n.decode(l)}else if(c===hp.BIN){const l=ja+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class BM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=bt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const h in a){const u=pu[h]||h.toLowerCase();o[u]=a[h]}for(const h in e.attributes){const u=pu[h]||h.toLowerCase();if(a[h]!==void 0){const f=n.accessors[e.attributes[h]],d=la[f.componentType];l[u]=d.name,c[u]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,f){i.decodeDracoFile(h,function(d){for(const _ in d.attributes){const b=d.attributes[_],p=c[_];p!==void 0&&(b.normalized=p)}u(d)},o,l,tn,f)})})}}class zM{constructor(){this.name=bt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class GM{constructor(){this.name=bt.KHR_MESH_QUANTIZATION}}class km extends Bo{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=i-t,u=(n-t)/h,f=u*u,d=f*u,_=e*l,b=_-l,p=-2*d+3*f,m=d-f,S=1-p,y=m-f+u;for(let M=0;M!==o;M++){const D=a[b+M+o],P=a[b+M+c]*h,w=a[_+M+o],L=a[_+M]*h;r[M]=S*D+y*P+p*w+m*L}return r}}const HM=new $r;class VM extends km{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return HM.fromArray(r).normalize().toArray(r),r}}const _i={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},la={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},up={9728:Nt,9729:cn,9984:tm,9985:Lc,9986:Qa,9987:Xi},fp={33071:Wi,33648:Zc,10497:xa},ch={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},pu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Dr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},WM={CUBICSPLINE:void 0,LINEAR:wo,STEP:Eo},lh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function XM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Di({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vr})),s.DefaultMaterial}function cs(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function or(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function qM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,h=e.length;l<h;l++){const u=e[l];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){const u=e[l];if(n){const f=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(f)}if(i){const f=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const h=l[0],u=l[1],f=l[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function jM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function YM(s){let e;const t=s.extensions&&s.extensions[bt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+hh(t.attributes):e=s.indices+":"+hh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+hh(s.targets[n]);return e}function hh(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function mu(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function KM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const ZM=new tt;class QM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new tM(this.options.manager):this.textureLoader=new aM(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ro(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return cs(r,o,i),or(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,h]of a.children.entries())r(h,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[bt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(co.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=ch[i.type],o=la[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new yn(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=ch[i.type],l=la[i.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let b,p;if(d&&d!==u){const m=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+m+":"+i.count;let y=t.cache.get(S);y||(b=new l(o,m*d,i.count*d/h),y=new DS(b,d/h),t.cache.add(S,y)),p=new cf(y,c,f%d/h,_)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),p=new yn(b,c,_);if(i.sparse!==void 0){const m=ch.SCALAR,S=la[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,D=new S(a[1],y,i.sparse.count*m),P=new l(a[2],M,i.sparse.count*c);o!==null&&(p=new yn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let w=0,L=D.length;w<L;w++){const O=D[w];if(p.setX(O,P[w*c]),c>=2&&p.setY(O,P[w*c+1]),c>=3&&p.setZ(O,P[w*c+2]),c>=4&&p.setW(O,P[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=_}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return h.magFilter=up[f.magFilter]||cn,h.minFilter=up[f.minFilter]||Xi,h.wrapS=fp[f.wrapS]||xa,h.wrapT=fp[f.wrapT]||xa,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(u){l=!0;const f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(c).then(function(u){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(b){const p=new Qt(b);p.needsUpdate=!0,f(p)}),t.load(co.resolveURL(u,r.path),_,void 0,d)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),or(u,a),u.userData.mimeType=a.mimeType||KM(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[bt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[bt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[bt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Pm,Oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new Cm,Oi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Di}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[bt.KHR_MATERIALS_UNLIT]){const u=i[bt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{const u=r.pbrMetallicRoughness||{};if(o.color=new Xe(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){const f=u.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],tn),o.opacity=f[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,Kt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Li);const h=r.alphaMode||lh.OPAQUE;if(h===lh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===lh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Hn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ct(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Hn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Hn){const u=r.emissiveFactor;o.emissive=new Xe().setRGB(u[0],u[1],u[2],tn)}return r.emissiveTexture!==void 0&&a!==Hn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Kt)),Promise.all(l).then(function(){const u=new a(o);return r.name&&(u.name=r.name),or(u,r),t.associations.set(u,{materials:e}),r.extensions&&cs(i,u,r),u})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[bt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return dp(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],h=YM(l),u=i[h];if(u)a.push(u.promise);else{let f;l.extensions&&l.extensions[bt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=dp(new pi,l,t),i[h]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const h=a[c].material===void 0?XM(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let d=0,_=h.length;d<_;d++){const b=h[d],p=a[d];let m;const S=l[d];if(p.mode===_i.TRIANGLES||p.mode===_i.TRIANGLE_STRIP||p.mode===_i.TRIANGLE_FAN||p.mode===void 0)m=r.isSkinnedMesh===!0?new IS(b,S):new _t(b,S),m.isSkinnedMesh===!0&&m.normalizeSkinWeights(),p.mode===_i.TRIANGLE_STRIP?m.geometry=lp(m.geometry,um):p.mode===_i.TRIANGLE_FAN&&(m.geometry=lp(m.geometry,lu));else if(p.mode===_i.LINES)m=new FS(b,S);else if(p.mode===_i.LINE_STRIP)m=new uf(b,S);else if(p.mode===_i.LINE_LOOP)m=new kS(b,S);else if(p.mode===_i.POINTS)m=new BS(b,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(m.geometry.morphAttributes).length>0&&jM(m,r),m.name=t.createUniqueName(r.name||"mesh_"+e),or(m,r),p.extensions&&cs(i,m,p),t.assignFinalMaterial(m),u.push(m)}for(let d=0,_=u.length;d<_;d++)t.associations.set(u[d],{meshes:e,primitives:d});if(u.length===1)return r.extensions&&cs(i,u[0],r),u[0];const f=new kr;r.extensions&&cs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=u.length;d<_;d++)f.add(u[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new An(p0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new vl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),or(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,h=a.length;l<h;l++){const u=a[l];if(u){o.push(u);const f=new tt;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new hf(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,f=i.channels.length;u<f;u++){const d=i.channels[u],_=i.samplers[d.sampler],b=d.target,p=b.node,m=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;b.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",m)),c.push(this.getDependency("accessor",S)),l.push(_),h.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){const f=u[0],d=u[1],_=u[2],b=u[3],p=u[4],m=[];for(let S=0,y=f.length;S<y;S++){const M=f[S],D=d[S],P=_[S],w=b[S],L=p[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const O=n._createAnimationTracks(M,D,P,w,L);if(O)for(let v=0;v<O.length;v++)m.push(O[v])}return new YS(r,void 0,m)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const h=l[0],u=l[1],f=l[2];f!==null&&h.traverse(function(d){d.isSkinnedMesh&&d.bind(f,ZM)});for(let d=0,_=u.length;d<_;d++)h.add(u[d]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Rm:l.length>1?h=new kr:l.length===1?h=l[0]:h=new Vt,h!==l[0])for(let u=0,f=l.length;u<f;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),or(h,r),r.extensions&&cs(n,h,r),r.matrix!==void 0){const u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new kr;n.name&&(r.name=i.createUniqueName(n.name)),or(r,n),n.extensions&&cs(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++)r.add(c[h]);const l=h=>{const u=new Map;for(const[f,d]of i.associations)(f instanceof Oi||f instanceof Qt)&&u.set(f,d);return h.traverse(f=>{const d=i.associations.get(f);d!=null&&u.set(f,d)}),u};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Dr[r.path]===Dr.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Dr[r.path]){case Dr.weights:l=wa;break;case Dr.rotation:l=Aa;break;case Dr.position:case Dr.scale:l=Ra;break;default:switch(n.itemSize){case 1:l=wa;break;case 2:case 3:default:l=Ra;break}break}const h=i.interpolation!==void 0?WM[i.interpolation]:wo,u=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+Dr[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=mu(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof Aa?VM:km;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function JM(s,e,t){const n=e.attributes,i=new Qi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new j(c[0],c[1],c[2]),new j(l[0],l[1],l[2])),o.normalized){const h=mu(la[o.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new j,c=new j;for(let l=0,h=r.length;l<h;l++){const u=r[l];if(u.POSITION!==void 0){const f=t.json.accessors[u.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const b=mu(la[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new Ji;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function dp(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=pu[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return St.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${St.workingColorSpace}" not supported.`),or(s,e),JM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?qM(s,e.targets,t):s})}const uh=new WeakMap;class $M extends es{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new Ro(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Kt,n).catch(n)}decodeDracoFile(e,t,n,i,r=tn,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(uh.has(e)){const c=uh.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(i=c,new Promise((l,h)=>{i._callbacks[r]={resolve:l,reject:h},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),uh.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new pi;e.index&&t.setIndex(new yn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,c=new yn(a,o);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Kt)return;const n=new Xe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),St.toWorkingColorSpace(n,Kt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Ro(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=eT.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function eT(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(h){s.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(s)});break;case"decode":const c=o.buffer,l=o.taskConfig;e.then(h=>{const u=h.draco,f=new u.Decoder;try{const d=t(u,f,new Int8Array(c),l),_=d.attributes.map(b=>b.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{u.destroy(f)}});break}};function t(a,o,c,l){const h=l.attributeIDs,u=l.attributeTypes;let f,d;const _=o.GetEncodedGeometryType(c);if(_===a.TRIANGULAR_MESH)f=new a.Mesh,d=o.DecodeArrayToMesh(c,c.byteLength,f);else if(_===a.POINT_CLOUD)f=new a.PointCloud,d=o.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const b={index:null,attributes:[]};for(const p in h){const m=self[u[p]];let S,y;if(l.useUniqueIDs)y=h[p],S=o.GetAttributeByUniqueId(f,y);else{if(y=o.GetAttributeId(f,a[h[p]]),y===-1)continue;S=o.GetAttribute(f,y)}const M=i(a,o,f,p,m,S);p==="color"&&(M.vertexColorSpace=l.vertexColorSpace),b.attributes.push(M)}return _===a.TRIANGULAR_MESH&&(b.index=n(a,o,f)),a.destroy(f),b}function n(a,o,c){const h=c.num_faces()*3,u=h*4,f=a._malloc(u);o.GetTrianglesUInt32Array(c,u,f);const d=new Uint32Array(a.HEAPF32.buffer,f,h).slice();return a._free(f),{array:d,itemSize:1}}function i(a,o,c,l,h,u){const f=u.num_components(),_=c.num_points()*f,b=_*h.BYTES_PER_ELEMENT,p=r(a,h),m=a._malloc(b);o.GetAttributeDataArrayForAllPoints(c,u,p,b,m);const S=new h(a.HEAPF32.buffer,m,_).slice();return a._free(m),{name:l,array:S,itemSize:f}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var tT=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(m){r=m.instance,r.exports.__wasm_call_ctors()});function o(m){for(var S=new Uint8Array(m.length),y=0;y<m.length;++y){var M=m.charCodeAt(y);S[y]=M>96?M-97:M>64?M-39:M+4}for(var D=0,y=0;y<m.length;++y)S[D++]=S[y]<60?n[S[y]]:(S[y]-60)*64+S[++y];return S.buffer.slice(0,D)}function c(m,S,y,M,D,P){var w=r.exports.sbrk,L=y+3&-4,O=w(L*M),v=w(D.length),E=new Uint8Array(r.exports.memory.buffer);E.set(D,v);var N=m(O,y,M,v,D.length);if(N==0&&P&&P(O,L,M),S.set(E.subarray(O,O+y*M)),w(O-w(0)),N!=0)throw new Error("Malformed buffer data: "+N)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],f=0;function d(m){var S={object:new Worker(m),pending:0,requests:{}};return S.object.onmessage=function(y){var M=y.data;S.pending-=M.count,S.requests[M.id][M.action](M.value),delete S.requests[M.id]},S}function _(m){for(var S="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+p.toString(),y=new Blob([S],{type:"text/javascript"}),M=URL.createObjectURL(y),D=0;D<m;++D)u[D]=d(M);URL.revokeObjectURL(M)}function b(m,S,y,M,D){for(var P=u[0],w=1;w<u.length;++w)u[w].pending<P.pending&&(P=u[w]);return new Promise(function(L,O){var v=new Uint8Array(y),E=f++;P.pending+=m,P.requests[E]={resolve:L,reject:O},P.object.postMessage({id:E,count:m,size:S,source:v,mode:M,filter:D},[v.buffer])})}function p(m){a.then(function(){var S=m.data;try{var y=new Uint8Array(S.count*S.size);c(r.exports[S.mode],y,S.count,S.size,S.source,r.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:S.id,count:S.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(m){_(m)},decodeVertexBuffer:function(m,S,y,M,D){c(r.exports.meshopt_decodeVertexBuffer,m,S,y,M,r.exports[l[D]])},decodeIndexBuffer:function(m,S,y,M){c(r.exports.meshopt_decodeIndexBuffer,m,S,y,M)},decodeIndexSequence:function(m,S,y,M){c(r.exports.meshopt_decodeIndexSequence,m,S,y,M)},decodeGltfBuffer:function(m,S,y,M,D,P){c(r.exports[h[D]],m,S,y,M,r.exports[l[P]])},decodeGltfBufferAsync:function(m,S,y,M,D){return u.length>0?b(m,S,y,h[M],l[D]):a.then(function(){var P=new Uint8Array(m*S);return c(r.exports[h[M]],P,m,S,y,r.exports[l[D]]),P})}}}();/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var xi=Uint8Array,ia=Uint16Array,nT=Int32Array,Bm=new xi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),zm=new xi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),iT=new xi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Gm=function(s,e){for(var t=new ia(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new nT(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Hm=Gm(Bm,2),Vm=Hm.b,rT=Hm.r;Vm[28]=258,rT[258]=28;var sT=Gm(zm,0),aT=sT.b,gu=new ia(32768);for(var zt=0;zt<32768;++zt){var Lr=(zt&43690)>>1|(zt&21845)<<1;Lr=(Lr&52428)>>2|(Lr&13107)<<2,Lr=(Lr&61680)>>4|(Lr&3855)<<4,gu[zt]=((Lr&65280)>>8|(Lr&255)<<8)>>1}var lo=function(s,e,t){for(var n=s.length,i=0,r=new ia(e);i<n;++i)s[i]&&++r[s[i]-1];var a=new ia(e);for(i=1;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new ia(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],h=e-s[i],u=a[s[i]-1]++<<h,f=u|(1<<h)-1;u<=f;++u)o[gu[u]>>c]=l}else for(o=new ia(n),i=0;i<n;++i)s[i]&&(o[i]=gu[a[s[i]-1]++]>>15-s[i]);return o},zo=new xi(288);for(var zt=0;zt<144;++zt)zo[zt]=8;for(var zt=144;zt<256;++zt)zo[zt]=9;for(var zt=256;zt<280;++zt)zo[zt]=7;for(var zt=280;zt<288;++zt)zo[zt]=8;var Wm=new xi(32);for(var zt=0;zt<32;++zt)Wm[zt]=5;var oT=lo(zo,9,1),cT=lo(Wm,5,1),fh=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Ri=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},dh=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},lT=function(s){return(s+7)/8|0},hT=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new xi(s.subarray(e,t))},uT=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Pi=function(s,e,t){var n=new Error(e||uT[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Pi),!t)throw n;return n},fT=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new xi(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new xi(i*3));var l=function(je){var Ve=t.length;if(je>Ve){var F=new xi(Math.max(Ve*2,je));F.set(t),t=F}},h=e.f||0,u=e.p||0,f=e.b||0,d=e.l,_=e.d,b=e.m,p=e.n,m=i*8;do{if(!d){h=Ri(s,u,1);var S=Ri(s,u+1,3);if(u+=3,S)if(S==1)d=oT,_=cT,b=9,p=5;else if(S==2){var P=Ri(s,u,31)+257,w=Ri(s,u+10,15)+4,L=P+Ri(s,u+5,31)+1;u+=14;for(var O=new xi(L),v=new xi(19),E=0;E<w;++E)v[iT[E]]=Ri(s,u+E*3,7);u+=w*3;for(var N=fh(v),W=(1<<N)-1,z=lo(v,N,1),E=0;E<L;){var $=z[Ri(s,u,W)];u+=$&15;var y=$>>4;if(y<16)O[E++]=y;else{var H=0,te=0;for(y==16?(te=3+Ri(s,u,3),u+=2,H=O[E-1]):y==17?(te=3+Ri(s,u,7),u+=3):y==18&&(te=11+Ri(s,u,127),u+=7);te--;)O[E++]=H}}var Y=O.subarray(0,P),ce=O.subarray(P);b=fh(Y),p=fh(ce),d=lo(Y,b,1),_=lo(ce,p,1)}else Pi(1);else{var y=lT(u)+4,M=s[y-4]|s[y-3]<<8,D=y+M;if(D>i){c&&Pi(0);break}o&&l(f+M),t.set(s.subarray(y,D),f),e.b=f+=M,e.p=u=D*8,e.f=h;continue}if(u>m){c&&Pi(0);break}}o&&l(f+131072);for(var U=(1<<b)-1,ve=(1<<p)-1,Re=u;;Re=u){var H=d[dh(s,u)&U],Ne=H>>4;if(u+=H&15,u>m){c&&Pi(0);break}if(H||Pi(2),Ne<256)t[f++]=Ne;else if(Ne==256){Re=u,d=null;break}else{var ne=Ne-254;if(Ne>264){var E=Ne-257,oe=Bm[E];ne=Ri(s,u,(1<<oe)-1)+Vm[E],u+=oe}var fe=_[dh(s,u)&ve],ge=fe>>4;fe||Pi(3),u+=fe&15;var ce=aT[ge];if(ge>3){var oe=zm[ge];ce+=dh(s,u)&(1<<oe)-1,u+=oe}if(u>m){c&&Pi(0);break}o&&l(f+131072);var Ce=f+ne;if(f<ce){var Pe=r-ce,Je=Math.min(ce,Ce);for(Pe+f<0&&Pi(3);f<Je;++f)t[f]=n[Pe+f]}for(;f<Ce;++f)t[f]=t[f-ce]}}e.l=d,e.p=Re,e.b=f,e.f=h,d&&(h=1,e.m=b,e.d=_,e.n=p)}while(!h);return f!=t.length&&a?hT(t,0,f):t.subarray(0,f)},dT=new xi(0),pT=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Pi(6,"invalid zlib data"),(s[1]>>5&1)==1&&Pi(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function _c(s,e){return fT(s.subarray(pT(s),-4),{i:2},e,e)}var mT=typeof TextDecoder<"u"&&new TextDecoder,gT=0;try{mT.decode(dT,{stream:!0}),gT=1}catch{}class _T extends Im{constructor(e){super(e),this.type=un}parse(e){const O=Math.pow(2.7182818,2.2);function v(g,x){let T=0;for(let B=0;B<65536;++B)(B==0||g[B>>3]&1<<(B&7))&&(x[T++]=B);const R=T-1;for(;T<65536;)x[T++]=0;return R}function E(g){for(let x=0;x<16384;x++)g[x]={},g[x].len=0,g[x].lit=0,g[x].p=null}const N={l:0,c:0,lc:0};function W(g,x,T,R,B){for(;T<g;)x=x<<8|$e(R,B),T+=8;T-=g,N.l=x>>T&(1<<g)-1,N.c=x,N.lc=T}const z=new Array(59);function $(g){for(let T=0;T<=58;++T)z[T]=0;for(let T=0;T<65537;++T)z[g[T]]+=1;let x=0;for(let T=58;T>0;--T){const R=x+z[T]>>1;z[T]=x,x=R}for(let T=0;T<65537;++T){const R=g[T];R>0&&(g[T]=R|z[R]++<<6)}}function H(g,x,T,R,B,k){const q=x;let Q=0,J=0;for(;R<=B;R++){if(q.value-x.value>T)return!1;W(6,Q,J,g,q);const ee=N.l;if(Q=N.c,J=N.lc,k[R]=ee,ee==63){if(q.value-x.value>T)throw new Error("Something wrong with hufUnpackEncTable");W(8,Q,J,g,q);let K=N.l+6;if(Q=N.c,J=N.lc,R+K>B+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)k[R++]=0;R--}else if(ee>=59){let K=ee-59+2;if(R+K>B+1)throw new Error("Something wrong with hufUnpackEncTable");for(;K--;)k[R++]=0;R--}}$(k)}function te(g){return g&63}function Y(g){return g>>6}function ce(g,x,T,R){for(;x<=T;x++){const B=Y(g[x]),k=te(g[x]);if(B>>k)throw new Error("Invalid table entry");if(k>14){const q=R[B>>k-14];if(q.len)throw new Error("Invalid table entry");if(q.lit++,q.p){const Q=q.p;q.p=new Array(q.lit);for(let J=0;J<q.lit-1;++J)q.p[J]=Q[J]}else q.p=new Array(1);q.p[q.lit-1]=x}else if(k){let q=0;for(let Q=1<<14-k;Q>0;Q--){const J=R[(B<<14-k)+q];if(J.len||J.p)throw new Error("Invalid table entry");J.len=k,J.lit=x,q++}}}return!0}const U={c:0,lc:0};function ve(g,x,T,R){g=g<<8|$e(T,R),x+=8,U.c=g,U.lc=x}const Re={c:0,lc:0};function Ne(g,x,T,R,B,k,q,Q,J){if(g==x){R<8&&(ve(T,R,B,k),T=U.c,R=U.lc),R-=8;let ee=T>>R;if(ee=new Uint8Array([ee])[0],Q.value+ee>J)return!1;const K=q[Q.value-1];for(;ee-- >0;)q[Q.value++]=K}else if(Q.value<J)q[Q.value++]=g;else return!1;Re.c=T,Re.lc=R}function ne(g){return g&65535}function oe(g){const x=ne(g);return x>32767?x-65536:x}const fe={a:0,b:0};function ge(g,x){const T=oe(g),B=oe(x),k=T+(B&1)+(B>>1),q=k,Q=k-B;fe.a=q,fe.b=Q}function Ce(g,x){const T=ne(g),R=ne(x),B=T-(R>>1)&65535,k=R+B-32768&65535;fe.a=k,fe.b=B}function Pe(g,x,T,R,B,k,q){const Q=q<16384,J=T>B?B:T;let ee=1,K,le;for(;ee<=J;)ee<<=1;for(ee>>=1,K=ee,ee>>=1;ee>=1;){le=0;const pe=le+k*(B-K),be=k*ee,we=k*K,ue=R*ee,ae=R*K;let Fe,Be,xt,nn;for(;le<=pe;le+=we){let ht=le;const gt=le+R*(T-K);for(;ht<=gt;ht+=ae){const st=ht+ue,Jt=ht+be,Yt=Jt+ue;Q?(ge(g[ht+x],g[Jt+x]),Fe=fe.a,xt=fe.b,ge(g[st+x],g[Yt+x]),Be=fe.a,nn=fe.b,ge(Fe,Be),g[ht+x]=fe.a,g[st+x]=fe.b,ge(xt,nn),g[Jt+x]=fe.a,g[Yt+x]=fe.b):(Ce(g[ht+x],g[Jt+x]),Fe=fe.a,xt=fe.b,Ce(g[st+x],g[Yt+x]),Be=fe.a,nn=fe.b,Ce(Fe,Be),g[ht+x]=fe.a,g[st+x]=fe.b,Ce(xt,nn),g[Jt+x]=fe.a,g[Yt+x]=fe.b)}if(T&ee){const st=ht+be;Q?ge(g[ht+x],g[st+x]):Ce(g[ht+x],g[st+x]),Fe=fe.a,g[st+x]=fe.b,g[ht+x]=Fe}}if(B&ee){let ht=le;const gt=le+R*(T-K);for(;ht<=gt;ht+=ae){const st=ht+ue;Q?ge(g[ht+x],g[st+x]):Ce(g[ht+x],g[st+x]),Fe=fe.a,g[st+x]=fe.b,g[ht+x]=Fe}}K=ee,ee>>=1}return le}function Je(g,x,T,R,B,k,q,Q,J){let ee=0,K=0;const le=q,pe=Math.trunc(R.value+(B+7)/8);for(;R.value<pe;)for(ve(ee,K,T,R),ee=U.c,K=U.lc;K>=14;){const we=ee>>K-14&16383,ue=x[we];if(ue.len)K-=ue.len,Ne(ue.lit,k,ee,K,T,R,Q,J,le),ee=Re.c,K=Re.lc;else{if(!ue.p)throw new Error("hufDecode issues");let ae;for(ae=0;ae<ue.lit;ae++){const Fe=te(g[ue.p[ae]]);for(;K<Fe&&R.value<pe;)ve(ee,K,T,R),ee=U.c,K=U.lc;if(K>=Fe&&Y(g[ue.p[ae]])==(ee>>K-Fe&(1<<Fe)-1)){K-=Fe,Ne(ue.p[ae],k,ee,K,T,R,Q,J,le),ee=Re.c,K=Re.lc;break}}if(ae==ue.lit)throw new Error("hufDecode issues")}}const be=8-B&7;for(ee>>=be,K-=be;K>0;){const we=x[ee<<14-K&16383];if(we.len)K-=we.len,Ne(we.lit,k,ee,K,T,R,Q,J,le),ee=Re.c,K=Re.lc;else throw new Error("hufDecode issues")}return!0}function je(g,x,T,R,B,k){const q={value:0},Q=T.value,J=xe(x,T),ee=xe(x,T);T.value+=4;const K=xe(x,T);if(T.value+=4,J<0||J>=65537||ee<0||ee>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const le=new Array(65537),pe=new Array(16384);E(pe);const be=R-(T.value-Q);if(H(g,T,be,J,ee,le),K>8*(R-(T.value-Q)))throw new Error("Something wrong with hufUncompress");ce(le,J,ee,pe),Je(le,pe,g,T,K,ee,k,B,q)}function Ve(g,x,T){for(let R=0;R<T;++R)x[R]=g[x[R]]}function F(g){for(let x=1;x<g.length;x++){const T=g[x-1]+g[x]-128;g[x]=T}}function dt(g,x){let T=0,R=Math.floor((g.length+1)/2),B=0;const k=g.length-1;for(;!(B>k||(x[B++]=g[T++],B>k));)x[B++]=g[R++]}function qe(g){let x=g.byteLength;const T=new Array;let R=0;const B=new DataView(g);for(;x>0;){const k=B.getInt8(R++);if(k<0){const q=-k;x-=q+1;for(let Q=0;Q<q;Q++)T.push(B.getUint8(R++))}else{const q=k;x-=2;const Q=B.getUint8(R++);for(let J=0;J<q+1;J++)T.push(Q)}}return T}function Ze(g,x,T,R,B,k){let q=new DataView(k.buffer);const Q=T[g.idx[0]].width,J=T[g.idx[0]].height,ee=3,K=Math.floor(Q/8),le=Math.ceil(Q/8),pe=Math.ceil(J/8),be=Q-(le-1)*8,we=J-(pe-1)*8,ue={value:0},ae=new Array(ee),Fe=new Array(ee),Be=new Array(ee),xt=new Array(ee),nn=new Array(ee);for(let gt=0;gt<ee;++gt)nn[gt]=x[g.idx[gt]],ae[gt]=gt<1?0:ae[gt-1]+le*pe,Fe[gt]=new Float32Array(64),Be[gt]=new Uint16Array(64),xt[gt]=new Uint16Array(le*64);for(let gt=0;gt<pe;++gt){let st=8;gt==pe-1&&(st=we);let Jt=8;for(let it=0;it<le;++it){it==le-1&&(Jt=be);for(let At=0;At<ee;++At)Be[At].fill(0),Be[At][0]=B[ae[At]++],X(ue,R,Be[At]),rt(Be[At],Fe[At]),He(Fe[At]);I(Fe);for(let At=0;At<ee;++At)A(Fe[At],xt[At],it*64)}let Yt=0;for(let it=0;it<ee;++it){const At=T[g.idx[it]].type;for(let Ti=8*gt;Ti<8*gt+st;++Ti){Yt=nn[it][Ti];for(let Tr=0;Tr<K;++Tr){const Fi=Tr*64+(Ti&7)*8;q.setUint16(Yt+0*2*At,xt[it][Fi+0],!0),q.setUint16(Yt+1*2*At,xt[it][Fi+1],!0),q.setUint16(Yt+2*2*At,xt[it][Fi+2],!0),q.setUint16(Yt+3*2*At,xt[it][Fi+3],!0),q.setUint16(Yt+4*2*At,xt[it][Fi+4],!0),q.setUint16(Yt+5*2*At,xt[it][Fi+5],!0),q.setUint16(Yt+6*2*At,xt[it][Fi+6],!0),q.setUint16(Yt+7*2*At,xt[it][Fi+7],!0),Yt+=8*2*At}}if(K!=le)for(let Ti=8*gt;Ti<8*gt+st;++Ti){const Tr=nn[it][Ti]+8*K*2*At,Fi=K*64+(Ti&7)*8;for(let Vo=0;Vo<Jt;++Vo)q.setUint16(Tr+Vo*2*At,xt[it][Fi+Vo],!0)}}}const ht=new Uint16Array(Q);q=new DataView(k.buffer);for(let gt=0;gt<ee;++gt){T[g.idx[gt]].decoded=!0;const st=T[g.idx[gt]].type;if(T[gt].type==2)for(let Jt=0;Jt<J;++Jt){const Yt=nn[gt][Jt];for(let it=0;it<Q;++it)ht[it]=q.getUint16(Yt+it*2*st,!0);for(let it=0;it<Q;++it)q.setFloat32(Yt+it*2*st,V(ht[it]),!0)}}}function X(g,x,T){let R,B=1;for(;B<64;)R=x[g.value],R==65280?B=64:R>>8==255?B+=R&255:(T[B]=R,B++),g.value++}function rt(g,x){x[0]=V(g[0]),x[1]=V(g[1]),x[2]=V(g[5]),x[3]=V(g[6]),x[4]=V(g[14]),x[5]=V(g[15]),x[6]=V(g[27]),x[7]=V(g[28]),x[8]=V(g[2]),x[9]=V(g[4]),x[10]=V(g[7]),x[11]=V(g[13]),x[12]=V(g[16]),x[13]=V(g[26]),x[14]=V(g[29]),x[15]=V(g[42]),x[16]=V(g[3]),x[17]=V(g[8]),x[18]=V(g[12]),x[19]=V(g[17]),x[20]=V(g[25]),x[21]=V(g[30]),x[22]=V(g[41]),x[23]=V(g[43]),x[24]=V(g[9]),x[25]=V(g[11]),x[26]=V(g[18]),x[27]=V(g[24]),x[28]=V(g[31]),x[29]=V(g[40]),x[30]=V(g[44]),x[31]=V(g[53]),x[32]=V(g[10]),x[33]=V(g[19]),x[34]=V(g[23]),x[35]=V(g[32]),x[36]=V(g[39]),x[37]=V(g[45]),x[38]=V(g[52]),x[39]=V(g[54]),x[40]=V(g[20]),x[41]=V(g[22]),x[42]=V(g[33]),x[43]=V(g[38]),x[44]=V(g[46]),x[45]=V(g[51]),x[46]=V(g[55]),x[47]=V(g[60]),x[48]=V(g[21]),x[49]=V(g[34]),x[50]=V(g[37]),x[51]=V(g[47]),x[52]=V(g[50]),x[53]=V(g[56]),x[54]=V(g[59]),x[55]=V(g[61]),x[56]=V(g[35]),x[57]=V(g[36]),x[58]=V(g[48]),x[59]=V(g[49]),x[60]=V(g[57]),x[61]=V(g[58]),x[62]=V(g[62]),x[63]=V(g[63])}function He(g){const x=.5*Math.cos(.7853975),T=.5*Math.cos(3.14159/16),R=.5*Math.cos(3.14159/8),B=.5*Math.cos(3*3.14159/16),k=.5*Math.cos(5*3.14159/16),q=.5*Math.cos(3*3.14159/8),Q=.5*Math.cos(7*3.14159/16),J=new Array(4),ee=new Array(4),K=new Array(4),le=new Array(4);for(let pe=0;pe<8;++pe){const be=pe*8;J[0]=R*g[be+2],J[1]=q*g[be+2],J[2]=R*g[be+6],J[3]=q*g[be+6],ee[0]=T*g[be+1]+B*g[be+3]+k*g[be+5]+Q*g[be+7],ee[1]=B*g[be+1]-Q*g[be+3]-T*g[be+5]-k*g[be+7],ee[2]=k*g[be+1]-T*g[be+3]+Q*g[be+5]+B*g[be+7],ee[3]=Q*g[be+1]-k*g[be+3]+B*g[be+5]-T*g[be+7],K[0]=x*(g[be+0]+g[be+4]),K[3]=x*(g[be+0]-g[be+4]),K[1]=J[0]+J[3],K[2]=J[1]-J[2],le[0]=K[0]+K[1],le[1]=K[3]+K[2],le[2]=K[3]-K[2],le[3]=K[0]-K[1],g[be+0]=le[0]+ee[0],g[be+1]=le[1]+ee[1],g[be+2]=le[2]+ee[2],g[be+3]=le[3]+ee[3],g[be+4]=le[3]-ee[3],g[be+5]=le[2]-ee[2],g[be+6]=le[1]-ee[1],g[be+7]=le[0]-ee[0]}for(let pe=0;pe<8;++pe)J[0]=R*g[16+pe],J[1]=q*g[16+pe],J[2]=R*g[48+pe],J[3]=q*g[48+pe],ee[0]=T*g[8+pe]+B*g[24+pe]+k*g[40+pe]+Q*g[56+pe],ee[1]=B*g[8+pe]-Q*g[24+pe]-T*g[40+pe]-k*g[56+pe],ee[2]=k*g[8+pe]-T*g[24+pe]+Q*g[40+pe]+B*g[56+pe],ee[3]=Q*g[8+pe]-k*g[24+pe]+B*g[40+pe]-T*g[56+pe],K[0]=x*(g[pe]+g[32+pe]),K[3]=x*(g[pe]-g[32+pe]),K[1]=J[0]+J[3],K[2]=J[1]-J[2],le[0]=K[0]+K[1],le[1]=K[3]+K[2],le[2]=K[3]-K[2],le[3]=K[0]-K[1],g[0+pe]=le[0]+ee[0],g[8+pe]=le[1]+ee[1],g[16+pe]=le[2]+ee[2],g[24+pe]=le[3]+ee[3],g[32+pe]=le[3]-ee[3],g[40+pe]=le[2]-ee[2],g[48+pe]=le[1]-ee[1],g[56+pe]=le[0]-ee[0]}function I(g){for(let x=0;x<64;++x){const T=g[0][x],R=g[1][x],B=g[2][x];g[0][x]=T+1.5747*B,g[1][x]=T-.1873*R-.4682*B,g[2][x]=T+1.8556*R}}function A(g,x,T){for(let R=0;R<64;++R)x[T+R]=ta.toHalfFloat(Z(g[R]))}function Z(g){return g<=1?Math.sign(g)*Math.pow(Math.abs(g),2.2):Math.sign(g)*Math.pow(O,Math.abs(g)-1)}function re(g){return new DataView(g.array.buffer,g.offset.value,g.size)}function de(g){const x=g.viewer.buffer.slice(g.offset.value,g.offset.value+g.size),T=new Uint8Array(qe(x)),R=new Uint8Array(T.length);return F(T),dt(T,R),new DataView(R.buffer)}function ie(g){const x=g.array.slice(g.offset.value,g.offset.value+g.size),T=_c(x),R=new Uint8Array(T.length);return F(T),dt(T,R),new DataView(R.buffer)}function Le(g){const x=g.viewer,T={value:g.offset.value},R=new Uint16Array(g.columns*g.lines*(g.inputChannels.length*g.type)),B=new Uint8Array(8192);let k=0;const q=new Array(g.inputChannels.length);for(let we=0,ue=g.inputChannels.length;we<ue;we++)q[we]={},q[we].start=k,q[we].end=q[we].start,q[we].nx=g.columns,q[we].ny=g.lines,q[we].size=g.type,k+=q[we].nx*q[we].ny*q[we].size;const Q=se(x,T),J=se(x,T);if(J>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(Q<=J)for(let we=0;we<J-Q+1;we++)B[we+Q]=ze(x,T);const ee=new Uint16Array(65536),K=v(B,ee),le=xe(x,T);je(g.array,x,T,le,R,k);for(let we=0;we<g.inputChannels.length;++we){const ue=q[we];for(let ae=0;ae<q[we].size;++ae)Pe(R,ue.start+ae,ue.nx,ue.size,ue.ny,ue.nx*ue.size,K)}Ve(ee,R,k);let pe=0;const be=new Uint8Array(R.buffer.byteLength);for(let we=0;we<g.lines;we++)for(let ue=0;ue<g.inputChannels.length;ue++){const ae=q[ue],Fe=ae.nx*ae.size,Be=new Uint8Array(R.buffer,ae.end*2,Fe*2);be.set(Be,pe),pe+=Fe*2,ae.end+=Fe}return new DataView(be.buffer)}function _e(g){const x=g.array.slice(g.offset.value,g.offset.value+g.size),T=_c(x),R=g.inputChannels.length*g.lines*g.columns*g.totalBytes,B=new ArrayBuffer(R),k=new DataView(B);let q=0,Q=0;const J=new Array(4);for(let ee=0;ee<g.lines;ee++)for(let K=0;K<g.inputChannels.length;K++){let le=0;switch(g.inputChannels[K].pixelType){case 1:J[0]=q,J[1]=J[0]+g.columns,q=J[1]+g.columns;for(let be=0;be<g.columns;++be){const we=T[J[0]++]<<8|T[J[1]++];le+=we,k.setUint16(Q,le,!0),Q+=2}break;case 2:J[0]=q,J[1]=J[0]+g.columns,J[2]=J[1]+g.columns,q=J[2]+g.columns;for(let be=0;be<g.columns;++be){const we=T[J[0]++]<<24|T[J[1]++]<<16|T[J[2]++]<<8;le+=we,k.setUint32(Q,le,!0),Q+=4}break}}return k}function Me(g){const x=g.viewer,T={value:g.offset.value},R=new Uint8Array(g.columns*g.lines*(g.inputChannels.length*g.type*2)),B={version:Ke(x,T),unknownUncompressedSize:Ke(x,T),unknownCompressedSize:Ke(x,T),acCompressedSize:Ke(x,T),dcCompressedSize:Ke(x,T),rleCompressedSize:Ke(x,T),rleUncompressedSize:Ke(x,T),rleRawSize:Ke(x,T),totalAcUncompressedCount:Ke(x,T),totalDcUncompressedCount:Ke(x,T),acCompression:Ke(x,T)};if(B.version<2)throw new Error("EXRLoader.parse: "+Mt.compression+" version "+B.version+" is unsupported");const k=new Array;let q=se(x,T)-2;for(;q>0;){const ue=Ye(x.buffer,T),ae=ze(x,T),Fe=ae>>2&3,Be=(ae>>4)-1,xt=new Int8Array([Be])[0],nn=ze(x,T);k.push({name:ue,index:xt,type:nn,compression:Fe}),q-=ue.length+3}const Q=Mt.channels,J=new Array(g.inputChannels.length);for(let ue=0;ue<g.inputChannels.length;++ue){const ae=J[ue]={},Fe=Q[ue];ae.name=Fe.name,ae.compression=0,ae.decoded=!1,ae.type=Fe.pixelType,ae.pLinear=Fe.pLinear,ae.width=g.columns,ae.height=g.lines}const ee={idx:new Array(3)};for(let ue=0;ue<g.inputChannels.length;++ue){const ae=J[ue];for(let Fe=0;Fe<k.length;++Fe){const Be=k[Fe];ae.name==Be.name&&(ae.compression=Be.compression,Be.index>=0&&(ee.idx[Be.index]=ue),ae.offset=ue)}}let K,le,pe;if(B.acCompressedSize>0)switch(B.acCompression){case 0:K=new Uint16Array(B.totalAcUncompressedCount),je(g.array,x,T,B.acCompressedSize,K,B.totalAcUncompressedCount);break;case 1:const ue=g.array.slice(T.value,T.value+B.totalAcUncompressedCount),ae=_c(ue);K=new Uint16Array(ae.buffer),T.value+=B.totalAcUncompressedCount;break}if(B.dcCompressedSize>0){const ue={array:g.array,offset:T,size:B.dcCompressedSize};le=new Uint16Array(ie(ue).buffer),T.value+=B.dcCompressedSize}if(B.rleRawSize>0){const ue=g.array.slice(T.value,T.value+B.rleCompressedSize),ae=_c(ue);pe=qe(ae.buffer),T.value+=B.rleCompressedSize}let be=0;const we=new Array(J.length);for(let ue=0;ue<we.length;++ue)we[ue]=new Array;for(let ue=0;ue<g.lines;++ue)for(let ae=0;ae<J.length;++ae)we[ae].push(be),be+=J[ae].width*g.type*2;Ze(ee,we,J,K,le,R);for(let ue=0;ue<J.length;++ue){const ae=J[ue];if(!ae.decoded)switch(ae.compression){case 2:let Fe=0,Be=0;for(let xt=0;xt<g.lines;++xt){let nn=we[ue][Fe];for(let ht=0;ht<ae.width;++ht){for(let gt=0;gt<2*ae.type;++gt)R[nn++]=pe[Be+gt*ae.width*ae.height];Be++}Fe++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(R.buffer)}function Ye(g,x){const T=new Uint8Array(g);let R=0;for(;T[x.value+R]!=0;)R+=1;const B=new TextDecoder().decode(T.slice(x.value,x.value+R));return x.value=x.value+R+1,B}function me(g,x,T){const R=new TextDecoder().decode(new Uint8Array(g).slice(x.value,x.value+T));return x.value=x.value+T,R}function Ae(g,x){const T=Ue(g,x),R=xe(g,x);return[T,R]}function De(g,x){const T=xe(g,x),R=xe(g,x);return[T,R]}function Ue(g,x){const T=g.getInt32(x.value,!0);return x.value=x.value+4,T}function xe(g,x){const T=g.getUint32(x.value,!0);return x.value=x.value+4,T}function $e(g,x){const T=g[x.value];return x.value=x.value+1,T}function ze(g,x){const T=g.getUint8(x.value);return x.value=x.value+1,T}const Ke=function(g,x){let T;return"getBigInt64"in DataView.prototype?T=Number(g.getBigInt64(x.value,!0)):T=g.getUint32(x.value+4,!0)+Number(g.getUint32(x.value,!0)<<32),x.value+=8,T};function G(g,x){const T=g.getFloat32(x.value,!0);return x.value+=4,T}function he(g,x){return ta.toHalfFloat(G(g,x))}function V(g){const x=(g&31744)>>10,T=g&1023;return(g>>15?-1:1)*(x?x===31?T?NaN:1/0:Math.pow(2,x-15)*(1+T/1024):6103515625e-14*(T/1024))}function se(g,x){const T=g.getUint16(x.value,!0);return x.value+=2,T}function ye(g,x){return V(se(g,x))}function Se(g,x,T,R){const B=T.value,k=[];for(;T.value<B+R-1;){const q=Ye(x,T),Q=Ue(g,T),J=ze(g,T);T.value+=3;const ee=Ue(g,T),K=Ue(g,T);k.push({name:q,pixelType:Q,pLinear:J,xSampling:ee,ySampling:K})}return T.value+=1,k}function et(g,x){const T=G(g,x),R=G(g,x),B=G(g,x),k=G(g,x),q=G(g,x),Q=G(g,x),J=G(g,x),ee=G(g,x);return{redX:T,redY:R,greenX:B,greenY:k,blueX:q,blueY:Q,whiteX:J,whiteY:ee}}function Ct(g,x){const T=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],R=ze(g,x);return T[R]}function Ft(g,x){const T=Ue(g,x),R=Ue(g,x),B=Ue(g,x),k=Ue(g,x);return{xMin:T,yMin:R,xMax:B,yMax:k}}function lt(g,x){const T=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],R=ze(g,x);return T[R]}function ke(g,x){const T=["ENVMAP_LATLONG","ENVMAP_CUBE"],R=ze(g,x);return T[R]}function Oe(g,x){const T=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],R=["ROUND_DOWN","ROUND_UP"],B=xe(g,x),k=xe(g,x),q=ze(g,x);return{xSize:B,ySize:k,levelMode:T[q&15],roundingMode:R[q>>4]}}function vt(g,x){const T=G(g,x),R=G(g,x);return[T,R]}function Te(g,x){const T=G(g,x),R=G(g,x),B=G(g,x);return[T,R,B]}function We(g,x,T,R,B){if(R==="string"||R==="stringvector"||R==="iccProfile")return me(x,T,B);if(R==="chlist")return Se(g,x,T,B);if(R==="chromaticities")return et(g,T);if(R==="compression")return Ct(g,T);if(R==="box2i")return Ft(g,T);if(R==="envmap")return ke(g,T);if(R==="tiledesc")return Oe(g,T);if(R==="lineOrder")return lt(g,T);if(R==="float")return G(g,T);if(R==="v2f")return vt(g,T);if(R==="v3f")return Te(g,T);if(R==="int")return Ue(g,T);if(R==="rational")return Ae(g,T);if(R==="timecode")return De(g,T);if(R==="preview")return T.value+=B,"skipped";T.value+=B}function Ge(g,x){const T=Math.log2(g);return x=="ROUND_DOWN"?Math.floor(T):Math.ceil(T)}function Qe(g,x,T){let R=0;switch(g.levelMode){case"ONE_LEVEL":R=1;break;case"MIPMAP_LEVELS":R=Ge(Math.max(x,T),g.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return R}function Gt(g,x,T,R){const B=new Array(g);for(let k=0;k<g;k++){const q=1<<k;let Q=x/q|0;R=="ROUND_UP"&&Q*q<x&&(Q+=1);const J=Math.max(Q,1);B[k]=(J+T-1)/T|0}return B}function nt(){const g=this,x=g.offset,T={value:0};for(let R=0;R<g.tileCount;R++){const B=Ue(g.viewer,x),k=Ue(g.viewer,x);x.value+=8,g.size=xe(g.viewer,x);const q=B*g.blockWidth,Q=k*g.blockHeight;g.columns=q+g.blockWidth>g.width?g.width-q:g.blockWidth,g.lines=Q+g.blockHeight>g.height?g.height-Q:g.blockHeight;const J=g.columns*g.totalBytes,K=g.size<g.lines*J?g.uncompress(g):re(g);x.value+=g.size;for(let le=0;le<g.lines;le++){const pe=le*g.columns*g.totalBytes;for(let be=0;be<g.inputChannels.length;be++){const we=Mt.channels[be].name,ue=g.channelByteOffsets[we]*g.columns,ae=g.decodeChannels[we];if(ae===void 0)continue;T.value=pe+ue;const Fe=(g.height-(1+Q+le))*g.outLineWidth;for(let Be=0;Be<g.columns;Be++){const xt=Fe+(Be+q)*g.outputChannels+ae;g.byteArray[xt]=g.getter(K,T)}}}}}function kt(){const g=this,x=g.offset,T={value:0};for(let R=0;R<g.height/g.blockHeight;R++){const B=Ue(g.viewer,x)-Mt.dataWindow.yMin;g.size=xe(g.viewer,x),g.lines=B+g.blockHeight>g.height?g.height-B:g.blockHeight;const k=g.columns*g.totalBytes,Q=g.size<g.lines*k?g.uncompress(g):re(g);x.value+=g.size;for(let J=0;J<g.blockHeight;J++){const ee=R*g.blockHeight,K=J+g.scanOrder(ee);if(K>=g.height)continue;const le=J*k,pe=(g.height-1-K)*g.outLineWidth;for(let be=0;be<g.inputChannels.length;be++){const we=Mt.channels[be].name,ue=g.channelByteOffsets[we]*g.columns,ae=g.decodeChannels[we];if(ae!==void 0){T.value=le+ue;for(let Fe=0;Fe<g.columns;Fe++){const Be=pe+Fe*g.outputChannels+ae;g.byteArray[Be]=g.getter(Q,T)}}}}}}function Wt(g,x,T){const R={};if(g.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");R.version=g.getUint8(4);const B=g.getUint8(5);R.spec={singleTile:!!(B&2),longName:!!(B&4),deepFormat:!!(B&8),multiPart:!!(B&16)},T.value=8;let k=!0;for(;k;){const q=Ye(x,T);if(q==0)k=!1;else{const Q=Ye(x,T),J=xe(g,T),ee=We(g,x,T,Q,J);ee===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${Q}'.`):R[q]=ee}}if(B&-7)throw console.error("THREE.EXRHeader:",R),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return R}function It(g,x,T,R,B){const k={size:0,viewer:x,array:T,offset:R,width:g.dataWindow.xMax-g.dataWindow.xMin+1,height:g.dataWindow.yMax-g.dataWindow.yMin+1,inputChannels:g.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:tn};switch(g.compression){case"NO_COMPRESSION":k.blockHeight=1,k.uncompress=re;break;case"RLE_COMPRESSION":k.blockHeight=1,k.uncompress=de;break;case"ZIPS_COMPRESSION":k.blockHeight=1,k.uncompress=ie;break;case"ZIP_COMPRESSION":k.blockHeight=16,k.uncompress=ie;break;case"PIZ_COMPRESSION":k.blockHeight=32,k.uncompress=Le;break;case"PXR24_COMPRESSION":k.blockHeight=16,k.uncompress=_e;break;case"DWAA_COMPRESSION":k.blockHeight=32,k.uncompress=Me;break;case"DWAB_COMPRESSION":k.blockHeight=256,k.uncompress=Me;break;default:throw new Error("EXRLoader.parse: "+g.compression+" is unsupported")}const q={};for(const K of g.channels)switch(K.name){case"Y":case"R":case"G":case"B":case"A":q[K.name]=!0,k.type=K.pixelType}let Q=!1;if(q.R&&q.G&&q.B)Q=!q.A,k.outputChannels=4,k.decodeChannels={R:0,G:1,B:2,A:3};else if(q.Y)k.outputChannels=1,k.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(k.type==1)switch(B){case vn:k.getter=ye;break;case un:k.getter=se;break}else if(k.type==2)switch(B){case vn:k.getter=G;break;case un:k.getter=he}else throw new Error("EXRLoader.parse: unsupported pixelType "+k.type+" for "+g.compression+".");k.columns=k.width;const J=k.width*k.height*k.outputChannels;switch(B){case vn:k.byteArray=new Float32Array(J),Q&&k.byteArray.fill(1,0,J);break;case un:k.byteArray=new Uint16Array(J),Q&&k.byteArray.fill(15360,0,J);break;default:console.error("THREE.EXRLoader: unsupported type: ",B);break}let ee=0;for(const K of g.channels)k.decodeChannels[K.name]!==void 0&&(k.channelByteOffsets[K.name]=ee),ee+=K.pixelType*2;if(k.totalBytes=ee,k.outLineWidth=k.width*k.outputChannels,g.lineOrder==="INCREASING_Y"?k.scanOrder=K=>K:k.scanOrder=K=>k.height-1-K,k.outputChannels==4?(k.format=oi,k.colorSpace=tn):(k.format=gl,k.colorSpace=ur),g.spec.singleTile){k.blockHeight=g.tiles.ySize,k.blockWidth=g.tiles.xSize;const K=Qe(g.tiles,k.width,k.height),le=Gt(K,k.width,g.tiles.xSize,g.tiles.roundingMode),pe=Gt(K,k.height,g.tiles.ySize,g.tiles.roundingMode);k.tileCount=le[0]*pe[0];for(let be=0;be<K;be++)for(let we=0;we<pe[be];we++)for(let ue=0;ue<le[be];ue++)Ke(x,R);k.decode=nt.bind(k)}else{k.blockWidth=k.width;const K=Math.ceil(k.height/k.blockHeight);for(let le=0;le<K;le++)Ke(x,R);k.decode=kt.bind(k)}return k}const wt={value:0},Tt=new DataView(e),Ln=new Uint8Array(e),Mt=Wt(Tt,e,wt),C=It(Mt,Tt,Ln,wt,this.type);return C.decode(),{header:Mt,width:C.width,height:C.height,data:C.byteArray,format:C.format,colorSpace:C.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=cn,a.magFilter=cn,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,n,i)}}class bT extends Im{constructor(e){super(e),this.type=un}parse(e){const a=function(L,O){switch(L){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(O||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(O||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(O||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(O||""))}},h=`
`,u=function(L,O,v){O=O||1024;let N=L.pos,W=-1,z=0,$="",H=String.fromCharCode.apply(null,new Uint16Array(L.subarray(N,N+128)));for(;0>(W=H.indexOf(h))&&z<O&&N<L.byteLength;)$+=H,z+=H.length,N+=128,H+=String.fromCharCode.apply(null,new Uint16Array(L.subarray(N,N+128)));return-1<W?(L.pos+=z+W+1,$+H.slice(0,W)):!1},f=function(L){const O=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,E=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*FORMAT=(\S+)\s*$/,W=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,H;for((L.pos>=L.byteLength||!($=u(L)))&&a(1,"no header found"),(H=$.match(O))||a(3,"bad initial token"),z.valid|=1,z.programtype=H[1],z.string+=$+`
`;$=u(L),$!==!1;){if(z.string+=$+`
`,$.charAt(0)==="#"){z.comments+=$+`
`;continue}if((H=$.match(v))&&(z.gamma=parseFloat(H[1])),(H=$.match(E))&&(z.exposure=parseFloat(H[1])),(H=$.match(N))&&(z.valid|=2,z.format=H[1]),(H=$.match(W))&&(z.valid|=4,z.height=parseInt(H[1],10),z.width=parseInt(H[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||a(3,"missing format specifier"),z.valid&4||a(3,"missing image size specifier"),z},d=function(L,O,v){const E=O;if(E<8||E>32767||L[0]!==2||L[1]!==2||L[2]&128)return new Uint8Array(L);E!==(L[2]<<8|L[3])&&a(3,"wrong scanline width");const N=new Uint8Array(4*O*v);N.length||a(4,"unable to allocate buffer space");let W=0,z=0;const $=4*E,H=new Uint8Array(4),te=new Uint8Array($);let Y=v;for(;Y>0&&z<L.byteLength;){z+4>L.byteLength&&a(1),H[0]=L[z++],H[1]=L[z++],H[2]=L[z++],H[3]=L[z++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=E)&&a(3,"bad rgbe scanline format");let ce=0,U;for(;ce<$&&z<L.byteLength;){U=L[z++];const Re=U>128;if(Re&&(U-=128),(U===0||ce+U>$)&&a(3,"bad scanline data"),Re){const Ne=L[z++];for(let ne=0;ne<U;ne++)te[ce++]=Ne}else te.set(L.subarray(z,z+U),ce),ce+=U,z+=U}const ve=E;for(let Re=0;Re<ve;Re++){let Ne=0;N[W]=te[Re+Ne],Ne+=E,N[W+1]=te[Re+Ne],Ne+=E,N[W+2]=te[Re+Ne],Ne+=E,N[W+3]=te[Re+Ne],W+=4}Y--}return N},_=function(L,O,v,E){const N=L[O+3],W=Math.pow(2,N-128)/255;v[E+0]=L[O+0]*W,v[E+1]=L[O+1]*W,v[E+2]=L[O+2]*W,v[E+3]=1},b=function(L,O,v,E){const N=L[O+3],W=Math.pow(2,N-128)/255;v[E+0]=ta.toHalfFloat(Math.min(L[O+0]*W,65504)),v[E+1]=ta.toHalfFloat(Math.min(L[O+1]*W,65504)),v[E+2]=ta.toHalfFloat(Math.min(L[O+2]*W,65504)),v[E+3]=ta.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const m=f(p),S=m.width,y=m.height,M=d(p.subarray(p.pos),S,y);let D,P,w;switch(this.type){case vn:w=M.length/4;const L=new Float32Array(w*4);for(let v=0;v<w;v++)_(M,v*4,L,v*4);D=L,P=vn;break;case un:w=M.length/4;const O=new Uint16Array(w*4);for(let v=0;v<w;v++)b(M,v*4,O,v*4);D=O,P=un;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:S,height:y,data:D,header:m.string,gamma:m.gamma,exposure:m.exposure,type:P}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){switch(a.type){case vn:case un:a.colorSpace=tn,a.minFilter=cn,a.magFilter=cn,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,r,n,i)}}let vT=class extends gf{constructor(){super(),this.experience=new Jr,this.renderer=this.experience.renderer.instance,this.setLoaders(),this.toLoad=0,this.loaded=0,this.items={}}setLoaders(){this.loaders=[],this.loaders.push({extensions:["jpg","png","webp"],action:r=>{const a=new Image;a.addEventListener("load",()=>{this.fileLoadEnd(r,a)}),a.addEventListener("error",()=>{this.fileLoadEnd(r,a)}),a.src=r.source}});const e=new $M;e.setDecoderPath(new URL("draco/",import.meta.url).href);const t=new bM;t.setDRACOLoader(e),t.setMeshoptDecoder(tT),this.loaders.push({extensions:["glb","gltf"],action:r=>{t.load(r.source,a=>{this.fileLoadEnd(r,a)},a=>{a.total&&this.trigger("fileProgress",[r,a.loaded/a.total])})}});const n=new _T;this.loaders.push({extensions:["exr"],action:r=>{n.load(r.source,a=>{this.fileLoadEnd(r,a)},a=>{a.total&&this.trigger("fileProgress",[r,a.loaded/a.total])})}});const i=new bT;this.loaders.push({extensions:["hdr"],action:r=>{i.load(r.source,a=>{this.fileLoadEnd(r,a)})}})}load(e=[]){for(const t of e){this.toLoad++;const n=t.source.match(/\.([a-z]+)$/);if(typeof n[1]<"u"){const i=n[1],r=this.loaders.find(a=>a.extensions.find(o=>o===i));r?r.action(t):console.warn(`Cannot found loader for ${t}`)}else console.warn(`Cannot found extension of ${t}`)}}fileLoadEnd(e,t){this.loaded++,this.items[e.name]=t,this.trigger("fileEnd",[e,t]),this.loaded===this.toLoad&&this.trigger("end")}};class xT extends gf{constructor(e){super(),this.items={},this.loader=new vT({renderer:this.renderer}),this.groups={},this.groups.assets=[...e],this.groups.loaded=[],this.groups.current=null,this.loadNextGroup(),this.loader.on("fileProgress",(t,n)=>{const i=this.groups.current;i.ratio=(i.loaded+n)/i.toLoad,this.trigger("progress",[i,t,n])}),this.loader.on("fileEnd",(t,n)=>{let i=n;t.type==="texture"&&(i instanceof Qt||(i=new Qt(n)),i.needsUpdate=!0,t.colorSpace==="srgb"&&(i.colorSpace=Kt)),this.items[t.name]=i,this.groups.current.loaded++,this.groups.current.ratio=this.groups.current.loaded/this.groups.current.toLoad,this.trigger("progress",[this.groups.current,t,i])}),this.loader.on("end",()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),this.groups.assets.length>0?this.loadNextGroup():this.trigger("end")})}loadNextGroup(){if(this.groups.current=this.groups.assets.shift(),this.groups.current.toLoad=this.groups.current.items.length,this.groups.current.loaded=0,this.groups.current.toLoad===0){queueMicrotask(()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),this.groups.assets.length>0?this.loadNextGroup():this.trigger("end")});return}this.loader.load(this.groups.current.items)}destroy(){for(const e in this.items){const t=this.items[e];t instanceof Qt&&t.dispose()}}}const zc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Go{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const yT=new vl(-1,1,1,-1,0,1);class ST extends pi{constructor(){super(),this.setAttribute("position",new jn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jn([0,2,0,0,2,0],2))}}const MT=new ST;class _f{constructor(e){this._mesh=new _t(MT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,yT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class TT extends Go{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Fr.clone(e.uniforms),this.material=new Rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new _f(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class pp extends Go{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class ET extends Go{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new ct);this._width=n.width,this._height=n.height,t=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new TT(zc),this.copyPass.material.blending=an,this.clock=new oM}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}pp!==void 0&&(a instanceof pp?n=!0:a instanceof ET&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const ki={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new ct},cameraProjectionMatrix:{value:new tt},cameraInverseProjectionMatrix:{value:new tt},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},bc={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},Ir={uniforms:{tDiffuse:{value:null},resolution:{value:new ct},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class zn extends Go{constructor({renderer:e,scene:t,camera:n,width:i,height:r,selects:a,bouncing:o=!1,groundReflector:c}){super(),this.width=i!==void 0?i:512,this.height=r!==void 0?r:512,this.clear=!0,this.renderer=e,this.scene=t,this.camera=n,this.groundReflector=c,this.opacity=ki.uniforms.opacity.value,this.output=0,this.maxDistance=ki.uniforms.maxDistance.value,this.thickness=ki.uniforms.thickness.value,this.tempColor=new Xe,this._selects=a,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(h){this._selects!==h&&(this._selects=h,Array.isArray(h)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=o,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(h){this._bouncing!==h&&(this._bouncing=h,h?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=ki.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(h){this._distanceAttenuation!==h&&(this._distanceAttenuation=h,this.ssrMaterial.defines.DISTANCE_ATTENUATION=h,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=ki.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(h){this._fresnel!==h&&(this._fresnel=h,this.ssrMaterial.defines.FRESNEL=h,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=ki.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(h){this._infiniteThick!==h&&(this._infiniteThick=h,this.ssrMaterial.defines.INFINITE_THICK=h,this.ssrMaterial.needsUpdate=!0)}});const l=new xl;l.type=ya,l.minFilter=Nt,l.magFilter=Nt,this.beautyRenderTarget=new Gn(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:un,depthTexture:l,depthBuffer:!0}),this.prevRenderTarget=new Gn(this.width,this.height,{minFilter:Nt,magFilter:Nt}),this.normalRenderTarget=new Gn(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:un}),this.metalnessRenderTarget=new Gn(this.width,this.height,{minFilter:Nt,magFilter:Nt,type:un}),this.ssrRenderTarget=new Gn(this.width,this.height,{minFilter:Nt,magFilter:Nt}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new Rn({defines:Object.assign({},ki.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:Fr.clone(ki.uniforms),vertexShader:ki.vertexShader,fragmentShader:ki.fragmentShader,blending:an}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new GS,this.normalMaterial.blending=an,this.metalnessOnMaterial=new Hn({color:"white"}),this.metalnessOffMaterial=new Hn({color:"black"}),this.blurMaterial=new Rn({defines:Object.assign({},Ir.defines),uniforms:Fr.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new Rn({defines:Object.assign({},Ir.defines),uniforms:Fr.clone(Ir.uniforms),vertexShader:Ir.vertexShader,fragmentShader:Ir.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new Rn({defines:Object.assign({},bc.defines),uniforms:Fr.clone(bc.uniforms),vertexShader:bc.vertexShader,fragmentShader:bc.fragmentShader,blending:an}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new Rn({uniforms:Fr.clone(zc.uniforms),vertexShader:zc.vertexShader,fragmentShader:zc.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Mo,blendDst:To,blendEquation:hr,blendSrcAlpha:Mo,blendDstAlpha:To,blendEquationAlpha:hr}),this.fsQuad=new _f(null),this.originalClearColor=new Xe}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case zn.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=gr,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=gr,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case zn.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=gr,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case zn.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case zn.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=an,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderOverride(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}renderMetalness(e,t,n,i,r){this.originalClearColor.copy(e.getClearColor(this.tempColor));const a=e.getClearAlpha(this.tempColor),o=e.autoClear;e.setRenderTarget(n),e.autoClear=!1,i=t.clearColor||i,r=t.clearAlpha||r,i!=null&&(e.setClearColor(i),e.setClearAlpha(r||0),e.clear()),this.scene.traverseVisible(c=>{c._SSRPassBackupMaterial=c.material,this._selects.includes(c)?c.material=this.metalnessOnMaterial:c.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(c=>{c.material=c._SSRPassBackupMaterial}),e.autoClear=o,e.setClearColor(this.originalClearColor),e.setClearAlpha(a)}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}}zn.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};const AT={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class RT extends Go{constructor(){super();const e=AT;this.uniforms=Fr.clone(e.uniforms),this.material=new zS({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new _f(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},St.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xu?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ju&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class CT{constructor(e={}){this.experience=new Jr,this.config=this.experience.config,this.debug=this.experience.debug,this.stats=this.experience.stats,this.scene=this.experience.scene,this.camera=this.experience.camera,this.useSSR=!1,this.debug&&(this.debugFolder=this.debug.addFolder("renderer")),this.setInstance(),this.setPostProcess()}setInstance(){var e;this.clearColor=((e=this.experience.sceneConfig)==null?void 0:e.clearColor)??"#010101",this.instance=new PS({alpha:!1,antialias:!0,powerPreference:"high-performance"}),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Jp,this.instance.shadowMap.autoUpdate=!1,this.instance.shadowMap.needsUpdate=!0,this.instance.domElement.style.position="absolute",this.instance.domElement.style.top=0,this.instance.domElement.style.left=0,this.instance.domElement.style.width="100%",this.instance.domElement.style.height="100%",this.instance.setClearColor(this.clearColor,1),this.instance.setSize(this.config.width,this.config.height),this.instance.setPixelRatio(this.config.pixelRatio),this.instance.outputColorSpace=Kt,this.instance.toneMapping=ju,this.instance.toneMappingExposure=1,this.context=this.instance.getContext(),this.stats&&this.stats.setRenderPanel(this.context),this.debug&&(this.debugFolder.addColor(this,"clearColor").onChange(()=>{this.instance.setClearColor(this.clearColor)}),this.debugFolder.add(this.instance,"toneMapping",{NoToneMapping:_r,LinearToneMapping:Hu,ReinhardToneMapping:Vu,CineonToneMapping:Wu,ACESFilmicToneMapping:Xu,AgXToneMapping:qu}).onChange(()=>{this.scene.traverse(t=>{t instanceof _t&&(t.material.needsUpdate=!0)})}),this.debugFolder.add(this.instance,"toneMappingExposure").min(0).max(10))}setPostProcess(){if(!this.debug||!this.supportsMultisampledDepthResolve())return;const e=this.config.width*this.config.pixelRatio,t=this.config.height*this.config.pixelRatio,n=new Gn(e,t,{samples:4,type:un});if(this.composer=new wT(this.instance,n),this.composer.setPixelRatio(this.config.pixelRatio),this.composer.setSize(this.config.width,this.config.height),this.ssrPass=new zn({renderer:this.instance,scene:this.scene,camera:this.camera.instance,width:e,height:t,selects:[]}),this.ssrPass.beautyRenderTarget.samples=4,this.ssrPass.beautyRenderTarget.depthTexture.type=yr,this.ssrPass.maxDistance=6,this.ssrPass.thickness=.04,this.ssrPass.opacity=.4,this.outputPass=new RT,this.composer.addPass(this.ssrPass),this.composer.addPass(this.outputPass),this.debug){const i=this.debugFolder.addFolder("screen space reflections"),r=()=>{this.experience.needsRender=!0};i.add(this,"useSSR").name("enabled").onChange(()=>{var a,o;(o=(a=this.experience.world)==null?void 0:a.syncMirrorReflections)==null||o.call(a),this.experience.needsRender=!0}),i.add(this.ssrPass,"opacity").min(0).max(1).step(.01).onChange(r),i.add(this.ssrPass,"maxDistance").min(.5).max(20).step(.1).onChange(r),i.add(this.ssrPass,"thickness").min(.005).max(.2).step(.001).onChange(r),i.add(this.ssrPass,"blur").onChange(r),i.add(this.ssrPass,"fresnel").onChange(r),i.add(this.ssrPass,"distanceAttenuation").onChange(r),i.add(this.ssrPass,"output",{"Default (beauty + SSR)":zn.OUTPUT.Default,"SSR only":zn.OUTPUT.SSR,Beauty:zn.OUTPUT.Beauty,Depth:zn.OUTPUT.Depth,Normal:zn.OUTPUT.Normal,"Metalness mask":zn.OUTPUT.Metalness}).onChange(r)}}supportsMultisampledDepthResolve(){const e=this.context,t=new xl(4,4);t.type=yr;const n=new Gn(4,4,{samples:4,type:un,depthTexture:t});for(;e.getError()!==e.NO_ERROR;);this.instance.setRenderTarget(n),this.instance.render(new of,new An),this.instance.setRenderTarget(null);const i=e.getError()===e.NO_ERROR;return n.dispose(),t.dispose(),i}setSSRSelects(e){this.ssrPass&&(this.ssrPass.selects=e)}setSSREnabled(e){this.ssrPass&&(this.useSSR=e,this.experience.needsRender=!0)}resize(){this.instance.setSize(this.config.width,this.config.height),this.instance.setPixelRatio(this.config.pixelRatio),this.composer&&(this.composer.setPixelRatio(this.config.pixelRatio),this.composer.setSize(this.config.width,this.config.height))}update(){this.stats&&this.stats.beforeRender(),this.useSSR&&this.composer?this.composer.render():this.instance.render(this.scene,this.camera.instance),this.stats&&this.stats.afterRender()}destroy(){var e,t,n;(e=this.ssrPass)==null||e.dispose(),(t=this.outputPass)==null||t.dispose(),(n=this.composer)==null||n.dispose(),this.instance.renderLists.dispose(),this.instance.dispose()}}class PT{constructor(e){this.experience=new Jr,this.config=this.experience.config,this.targetElement=this.experience.targetElement,this.scene=this.experience.scene,this.setInstance(),this.setModes()}setInstance(){this.instance=new An(25,this.config.width/this.config.height,.1,150),this.instance.rotation.reorder("YXZ"),this.scene.add(this.instance)}setModes(){var t;this.modes={},this.modes.default={instance:this.instance.clone()},this.modes.default.instance.rotation.reorder("YXZ");const e=(t=this.experience.debugTools)==null?void 0:t.OrbitControls;this.config.debug&&e&&(this.modes.debug={instance:this.instance.clone()},this.modes.debug.instance.rotation.reorder("YXZ"),this.modes.debug.instance.position.set(5,5,5),this.modes.debug.orbitControls=new e(this.modes.debug.instance,this.targetElement),this.modes.debug.orbitControls.screenSpacePanning=!0,this.modes.debug.orbitControls.zoomSpeed=.25,this.modes.debug.orbitControls.enableDamping=!0,this.modes.debug.orbitControls.update()),this.mode=this.modes.debug?"debug":"default"}resize(){const e=this.config.width/this.config.height;this.instance.aspect=e,this.instance.updateProjectionMatrix();for(const t of Object.values(this.modes))t.instance.aspect=e,t.instance.updateProjectionMatrix()}update(){var e;(e=this.modes.debug)==null||e.orbitControls.update(),this.instance.position.copy(this.modes[this.mode].instance.position),this.instance.quaternion.copy(this.modes[this.mode].instance.quaternion),this.instance.updateMatrixWorld()}destroy(){var e;(e=this.modes.debug)==null||e.orbitControls.dispose()}}class DT extends of{constructor(){super();const e=new Ds;e.deleteAttribute("uv");const t=new Di({side:Wn}),n=new Di,i=new Nm(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new _t(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new _t(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new _t(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new _t(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new _t(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const h=new _t(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new _t(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const f=new _t(e,Ys(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new _t(e,Ys(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new _t(e,Ys(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const b=new _t(e,Ys(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const p=new _t(e,Ys(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const m=new _t(e,Ys(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Ys(s){const e=new Hn;return e.color.setScalar(s),e}const Ur=[0,16,32,48,64];class LT{constructor(e){this.experience=new Jr,this.config=this.experience.config,this.scene=this.experience.scene,this.resources=this.experience.resources,this.sceneConfig=this.experience.sceneConfig,this.colors=Object.assign({ground:"#f4f7fb",surface:"#f8f9ff",teal:"#003d5e",tealDeep:"#005581",ink:"#0b1c30",accent:"#f0aa10"},this.sceneConfig.colors),this.beats=this.sceneConfig.beats??[{id:"frame-index-01",from:0,to:.184},{id:"frame-index-02",from:.184,to:.466},{id:"frame-index-03",from:.466,to:.65},{id:"frame-index-04",from:.65,to:.825},{id:"frame-index-07",from:.825,to:1}],this.beatCams=[{a:{pos:[-.35,1.2,7.4],tgt:[.64,1.02,0]},s:{pos:[.5,1.08,5.8],tgt:[.75,.92,0]},settle:.3,depart:.62},{a:{pos:[14.3,1.1,7],tgt:[15.4,.78,0]},s:{pos:[16,1,5.6],tgt:[16,.62,0]},settle:.55,depart:.88},{a:{pos:[29.2,1.35,8.6],tgt:[31.6,.75,-.3]},s:{pos:[30.4,1.25,7.6],tgt:[31.9,.7,-.4]},settle:.3,depart:.82},{a:{pos:[48,1.05,7.8],tgt:[48,.9,0]},s:{pos:[48,1.05,7.5],tgt:[48,.88,0]},settle:.25,depart:1},{a:{pos:[55,1.15,7.8],tgt:[55.8,.95,-.4]},s:{pos:[64,1.08,6.2],tgt:[64,.85,-.5]},settle:.35,depart:1.01}],this.disposables={geometries:[],materials:[],textures:[]},this.trackedModels=new Set,this.mirrorClones=[],this.floorOverlays=[],this.camPos=new j,this.camTgt=new j,this.tmp=new j,this.hasExtras=(this.experience.assets??[]).some(t=>t.name==="extras"),this.resources.on("groupEnd",t=>{t.name==="base"?this.build():t.name==="environment"?this.swapEnvironment():t.name==="extras"&&this.built&&this.buildLaterVignettes()})}geo(e){return this.disposables.geometries.push(e),e}mat(e){return this.disposables.materials.push(e),e}box(e,t,n,i,r,a,o,c){const l=new _t(this.geo(new Ds(e,t,n)),i);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,(c??this.scene).add(l),l}cylinder(e,t,n,i,r,a,o,c){const l=new _t(this.geo(new ff(e,t,n,24)),i);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,(c??this.scene).add(l),l}brassFeet(e,t,n,i,r){const o=n/2-.03,c=i/2-.03;for(const[l,h]of[[-o,-c],[o,-c],[-o,c],[o,c]])this.cylinder(.022,.03,.06,this.brass,e+l,.03,t+h,r)}primitiveChair(e,t,n,{seatW:i,seatD:r,seatH:a,backH:o,legT:c}){const l=new kr;l.position.set(e,0,t),l.rotation.y=n,this.scene.add(l),this.box(i,.045,r,this.chairShell,0,a,0,l),this.box(i-.05,.035,r-.05,this.chairPad,0,a+.04,0,l);const h=a+o/2+.03,u=-r/2+.025,f=this.box(i,o,.045,this.chairShell,0,h,u,l);f.rotation.x=-.09;const d=this.box(i-.06,o-.08,.02,this.chairPad,0,h,u+.033,l);d.rotation.x=-.09;const _=i/2-c/2-.015,b=r/2-c/2-.015;for(const[p,m]of[[-_,-b],[_,-b],[-_,b],[_,b]])this.box(c,a-.03,c,this.chairShell,p,(a-.03)/2+.03,m,l),this.cylinder(c*.44,c*.55,.03,this.brass,p,.015,m,l);return l}reflect(e){const t=new _t(e.geometry,this.reflection);return t.position.copy(e.position),t.position.y=-e.position.y,t.scale.set(1,-1,1),t.castShadow=!1,t.receiveShadow=!1,this.scene.add(t),this.mirrorClones.push(t),t}placeModel(e,{axis:t,size:n,x:i,y:r=0,z:a,rotY:o=0,rig:c=null,rigIntensity:l=1}){var p;const h=(p=this.resources.items[e])==null?void 0:p.scene;if(!h)return null;this.trackedModels.has(e)||(this.trackedModels.add(e),h.traverse(m=>{if(m.isMesh){this.disposables.geometries.push(m.geometry);for(const S of Array.isArray(m.material)?m.material:[m.material])this.disposables.materials.push(S),S.map&&this.disposables.textures.push(S.map)}}),e==="floorstanding-loudspeaker"&&this.brightenFloorstander(h),e==="integrated-amplifier"&&this.repairAmplifier(h));const u=h.clone(),f=[];u.traverse(m=>{m.isLight&&f.push(m)});for(const m of f){if(c!=null&&c.includes(m.name)){m.castShadow=!1,m.intensity*=l,m.distance=8,m.isSpotLight&&(m.target.position.set(0,0,-1),m.add(m.target));continue}m.removeFromParent()}const d=new Qi().setFromObject(u),_=d.getSize(new j),b=n/_[t];return u.scale.setScalar(b),u.position.set(i,r-d.min.y*b,a),u.rotation.y=o,u.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.scene.add(u),u}brightenFloorstander(e){e.traverse(t=>{if(t.isMesh)for(const n of Array.isArray(t.material)?t.material:[t.material]){n.envMapIntensity=3.4;const i=n.color.clone(),r=Math.max(i.r,i.g,i.b,.001);i.multiplyScalar(Math.min(.55/r,12)),n.emissive=i,n.emissiveIntensity=.22}})}repairAmplifier(e){e.traverse(t=>{if(t.isMesh){t.geometry.computeVertexNormals();for(const n of Array.isArray(t.material)?t.material:[t.material])n.name==="Front Panel"&&n.normalMap&&(n.normalMap=null,n.needsUpdate=!0)}})}contactShadow(e,t,n,i){const r=this.contactShadowUniform.value;this.contactShadowCount>=r.length||r[this.contactShadowCount++].set(e,t,n,i)}reflectModel(e){const t=e.clone(),n=[];t.traverse(i=>{i.isMesh&&(i.material=this.reflection,i.castShadow=!1,i.receiveShadow=!1),i.isLight&&n.push(i)});for(const i of n)i.removeFromParent();return t.scale.y*=-1,t.position.y*=-1,this.scene.add(t),this.mirrorClones.push(t),t}maskReflection(e,t,n,i){const r=new _t(this.geo(new Gi(n,i)),this.mat(new Hn({colorWrite:!1,depthWrite:!1})));return r.rotation.x=-Math.PI/2,r.position.set(e,.009,t),this.scene.add(r),r}radialGlowTexture(){if(this._radialGlow)return this._radialGlow;const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.4,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,256,256),this._radialGlow=new ip(e),this._radialGlow.colorSpace=Kt,this.disposables.textures.push(this._radialGlow),this._radialGlow}skylightPool(e,t){const n=new _t(this.geo(new Gi(t*2,t*2)),this.mat(new Hn({map:this.radialGlowTexture(),transparent:!0,opacity:.5,depthWrite:!1})));n.rotation.x=-Math.PI/2,n.position.set(e,.006,.4),this.scene.add(n),this.floorOverlays.push(n)}build(){this.setEnvironment(),this.setMaterials(),this.setGallery(),this.setLights(),this.setVignette01(),this.hasExtras||this.buildLaterVignettes(),this.freezeMatrices(),this.setReflections(),this.built=!0,this.experience.needsRender=!0,this.experience.renderer.instance.shadowMap.needsUpdate=!0}buildLaterVignettes(){this.setVignette02(),this.setVignette03(),this.setVignette04(),this.setVignette07(),this.built&&(this.freezeMatrices(),this.setReflections(),this.experience.needsRender=!0,this.experience.renderer.instance.shadowMap.needsUpdate=!0)}freezeMatrices(){this.scene.traverse(e=>{e.isMesh&&(e.updateMatrix(),e.matrixAutoUpdate=!1)})}setReflections(){const e=this.experience.renderer;e.ssrPass&&e.setSSRSelects([this.floor,...this.floorOverlays]),this.syncMirrorReflections()}syncMirrorReflections(){const e=this.experience.renderer,t=!!(e.ssrPass&&e.useSSR);for(const n of this.mirrorClones)n.visible=!t;this.experience.needsRender=!0}setEnvironment(){const e=this.resources.items.environment;if(e)this.applyEnvironment(e,this.sceneConfig.environmentIntensity??.45);else{const t=new tl(this.experience.renderer.instance);this.envMap=t.fromScene(new DT,.04).texture,t.dispose(),this.disposables.textures.push(this.envMap),this.scene.environment=this.envMap,this.scene.environmentIntensity=this.sceneConfig.environmentIntensity??.25,this.envBase=this.scene.environmentIntensity}this.scene.fog=new af(this.colors.ground,11,30),this.fogBase=new Xe(this.colors.ground),this.fogTarget=new Xe}applyEnvironment(e,t){const n=new tl(this.experience.renderer.instance);this.envMap=n.fromEquirectangular(e).texture,n.dispose(),e.dispose(),this.disposables.textures.push(this.envMap),this.scene.environment=this.envMap,this.scene.environmentIntensity=t,this.envBase=t}swapEnvironment(){const e=this.resources.items.environment;if(!e||!this.built)return;const t=this.envMap;this.applyEnvironment(e,this.sceneConfig.environmentIntensity??.45),this.scene.environmentIntensity=.12,t==null||t.dispose(),this.experience.needsRender=!0}setMaterials(){this.matteBlack=this.mat(new Di({color:"#17191d",roughness:.48,metalness:.15})),this.blackDetail=this.mat(new Di({color:"#0d0e11",roughness:.6,metalness:.1})),this.brass=this.mat(new Di({color:"#b98f47",roughness:.3,metalness:.95})),this.plinth=this.mat(new hi({color:"#e8edf4",roughness:.32,metalness:0,clearcoat:.6,clearcoatRoughness:.22})),this.plinth.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vPlinthY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPlinthY = (modelMatrix * vec4(transformed, 1.0)).y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vPlinthY;`).replace("#include <color_fragment>",`#include <color_fragment>
{
	float plinthH = smoothstep(0.0, 0.55, vPlinthY);
	diffuseColor.rgb *= mix(0.82, 1.06, plinthH);
}`)},this.glove=this.mat(new Di({color:"#f5f2ea",roughness:.95,metalness:0})),this.chairShell=this.mat(new hi({color:"#4d545f",roughness:.38,metalness:.05,clearcoat:.55,clearcoatRoughness:.28})),this.chairPad=this.mat(new hi({color:"#6b7280",roughness:.9,metalness:0,sheen:.5,sheenColor:new Xe("#aeb6c2"),sheenRoughness:.6})),this.reflection=this.mat(new Hn({color:"#3a4250",transparent:!0,opacity:.16,depthWrite:!1,side:Li}))}setGallery(){const e=this.mat(new Di({color:"#d7dfeb",roughness:.56,metalness:0,envMapIntensity:.22}));this.contactShadowUniform={value:Array.from({length:16},()=>new Et)},this.contactShadowCount=0,e.onBeforeCompile=u=>{u.uniforms.uContactShadows=this.contactShadowUniform,u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vFloorXZ;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vFloorXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vFloorXZ;
uniform vec4 uContactShadows[16];`).replace("#include <color_fragment>",`#include <color_fragment>
{
	// Skylight pool grade — same room math as the wall's oculus falloff.
	float roomDx = abs(mod(vFloorXZ.x + 8.0, 16.0) - 8.0);
	float poolR = length(vec2(roomDx, (vFloorXZ.y - 0.4) * 0.9));
	diffuseColor.rgb *= mix(1.05, 0.84, smoothstep(2.4, 9.5, poolR));

	// Soft contact shadows: xy = world xz, z = radius, w = strength.
	float shade = 1.0;
	for(int i = 0; i < 16; i++)
	{
		vec4 s = uContactShadows[i];
		if(s.z <= 0.0) continue;
		float d = length(vFloorXZ - s.xy) / s.z;
		shade *= 1.0 - s.w * (1.0 - smoothstep(0.25, 1.0, d));
	}
	diffuseColor.rgb *= shade;
}`)};const t=new _t(this.geo(new Gi(120,32)),e);t.rotation.x=-Math.PI/2,t.position.set(32,0,2),t.receiveShadow=!0,this.scene.add(t),this.floor=t;const n=this.mat(new Di({color:"#f4f7fb",roughness:1})),i=new Xe("#d3dbe8");n.onBeforeCompile=u=>{u.uniforms.uCoveColor={value:i},u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vWallXY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vWallXY = (modelMatrix * vec4(transformed, 1.0)).xy;`),u.fragmentShader=u.fragmentShader.replace("#include <common>",`#include <common>
varying vec2 vWallXY;
uniform vec3 uCoveColor;`).replace("#include <color_fragment>",`#include <color_fragment>
{
	vec3 wallCol = mix(uCoveColor, diffuseColor.rgb, smoothstep(0.0, 2.2, vWallXY.y));
	float roomDx = abs(mod(vWallXY.x + 8.0, 16.0) - 8.0);
	float oculusR = length(vec2(roomDx, (vWallXY.y - 3.2) * 0.85));
	wallCol *= mix(1.05, 0.78, smoothstep(1.8, 7.5, oculusR));
	diffuseColor.rgb = wallCol;
}`)};const r=new _t(this.geo(new Gi(120,12)),n);for(const u of Ur){const f=new _t(this.geo(new Gi(8.5,4)),this.mat(new Hn({map:this.radialGlowTexture(),transparent:!0,opacity:u===Ur[4]?.3:.28,depthWrite:!1})));f.position.set(u,3.1,-4.42),this.scene.add(f)}r.position.set(32,6,-4.5),r.receiveShadow=!0,this.scene.add(r);const a=document.createElement("canvas");a.width=1,a.height=128;const o=a.getContext("2d"),c=o.createLinearGradient(0,128,0,0);c.addColorStop(0,"rgba(255,255,255,0.6)"),c.addColorStop(.35,"rgba(255,255,255,0.22)"),c.addColorStop(1,"rgba(255,255,255,0)"),o.fillStyle=c,o.fillRect(0,0,1,128);const l=new ip(a);l.colorSpace=Kt,this.disposables.textures.push(l);const h=new _t(this.geo(new Gi(120,1.1)),this.mat(new Hn({map:l,transparent:!0,opacity:.4,depthWrite:!1})));h.position.set(32,.55,-4.45),this.scene.add(h);for(const u of Ur)this.skylightPool(u,2.6)}setLights(){this.hemiBase=.65,this.hemi=new nM("#f4f7fb","#c5d1e0",this.hemiBase),this.scene.add(this.hemi),this.fillBase=.95,this.fill=new Om("#f4f7fb",this.fillBase),this.fill.position.set(0,4,12),this.fill.target.position.set(0,3.2,-4.5),this.scene.add(this.fill),this.scene.add(this.fill.target),this.lightTrims=[{key:1,fill:1,env:1,hemi:1,vig:1,fog:1},{key:1,fill:1,env:1,hemi:1,vig:1,fog:1},{key:.95,fill:.72,env:.78,hemi:.82,vig:1.2,fog:1},{key:1,fill:1,env:1,hemi:1,vig:1,fog:1},{key:1,fill:.62,env:.68,hemi:.8,vig:1.4,fog:.99,late:!0}],this.keyOffsets=[{x:2.6,z:1.2},{x:0,z:0},{x:0,z:0},{x:0,z:0},{x:0,z:0}],this.keyBase=2.1,this.key=new Um("#fff8ee",this.keyBase,0,.36,1,0),this.key.position.set(0,9,2.5),this.key.target.position.set(0,0,0),this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024),this.key.shadow.radius=5,this.key.shadow.bias=-2e-4,this.key.shadow.normalBias=.03,this.key.shadow.camera.near=.5,this.key.shadow.camera.far=20,this.scene.add(this.key),this.scene.add(this.key.target)}setVignette01(){const e=Ur[0]+1.6;this.maskReflection(e-.1,2.6,3,5.2),this.contactShadow(e,.4,.95,.6),this.contactShadow(e-.85,.15,.8,.32),this.contactShadow(e-1.55,-.15,.65,.2),!this.placeModel("floorstanding-loudspeaker",{axis:"y",size:1.9,x:e,z:.4,rotY:-.42,rig:["Key_Light","Rim_Light"],rigIntensity:.25})&&(this.box(.5,1.7,.6,this.matteBlack,e,.9,0),this.brassFeet(e,0,.5,.6),this.cylinder(.12,.12,.028,this.blackDetail,e,1.42,.31).rotation.x=Math.PI/2,this.cylinder(.16,.16,.028,this.blackDetail,e,.92,.31).rotation.x=Math.PI/2,this.cylinder(.16,.16,.028,this.blackDetail,e,.5,.31).rotation.x=Math.PI/2)}setVignette02(){const e=Ur[1];for(const r of[-1.05,0,1.05])this.contactShadow(e+r,0,.7,.22);const t=this.placeModel("turntable",{axis:"x",size:1,x:e-1.05,z:0});if(t)this.reflectModel(t);else{const r=this.box(.8,.14,.6,this.matteBlack,e-1.05,.07,0);this.cylinder(.26,.26,.05,this.blackDetail,e-1.6,.165,0),this.cylinder(.012,.012,.08,this.brass,e-1.6,.21,0),this.reflect(r)}const n=this.placeModel("integrated-amplifier",{axis:"x",size:.8,x:e,z:0});if(n)this.reflectModel(n);else{const r=this.box(.8,.31,.6,this.matteBlack,e,.155,0),a=this.cylinder(.045,.045,.04,this.brass,e-.2,.18,.31);a.rotation.x=Math.PI/2;const o=this.cylinder(.045,.045,.04,this.brass,e+.2,.18,.31);o.rotation.x=Math.PI/2,this.reflect(r)}const i=this.placeModel("cd-player",{axis:"x",size:.8,x:e+1.05,z:0});if(i)this.reflectModel(i);else{const r=this.box(.8,.2,.6,this.matteBlack,e+1.05,.1,0);this.cylinder(.06,.06,.014,this.brass,e+1.05,.21,.14),this.reflect(r)}}setVignette03(){const e=Ur[2],t=[[e-1.7,.8],[e-.1,.1],[e+1.5,-.6]];for(const[l,h]of t){const u=this.box(.9,.5,.9,this.plinth,l,.25,h);this.reflect(u),this.contactShadow(l,h,.85,.24)}const[n,i]=t[0];this.placeModel("turntable",{axis:"x",size:.88,x:n,y:.5,z:i})||(this.box(.66,.1,.5,this.matteBlack,n,.55,i),this.cylinder(.2,.2,.04,this.blackDetail,n,.62,i),this.cylinder(.01,.01,.06,this.brass,n,.66,i));const[r,a]=t[1];this.placeModel("integrated-amplifier",{axis:"x",size:.66,x:r,y:.5,z:a})||(this.box(.66,.24,.5,this.matteBlack,r,.62,a),this.cylinder(.04,.04,.035,this.brass,r+.16,.64,a+.26).rotation.x=Math.PI/2);const[o,c]=t[2];this.placeModel("cd-player",{axis:"x",size:.66,x:o,y:.5,z:c})||(this.box(.56,.16,.46,this.matteBlack,o,.58,c),this.cylinder(.03,.03,.02,this.brass,o+.15,.6,c+.24).rotation.x=Math.PI/2)}setVignette04(){const e=Ur[3];this.contactShadow(e,0,1.5,.2),this.contactShadow(e+1.35,1,.62,.3),this.box(2.2,.06,.9,this.plinth,e,.72,0);for(const[i,r]of[[-1,-.38],[1,-.38],[-1,.38],[1,.38]])this.box(.06,.72,.06,this.chairShell,e+i,.36,r);this.placeModel("turntable",{axis:"x",size:.82,x:e-.05,y:.75,z:0})||(this.box(.82,.2,.56,this.matteBlack,e-.05,.85,0),this.cylinder(.045,.045,.035,this.brass,e+.2,.88,.29).rotation.x=Math.PI/2);const t=this.box(.16,.02,.08,this.glove,e+.55,.765,.12);t.rotation.y=.4;const n=this.box(.16,.02,.08,this.glove,e+.68,.765,-.02);n.rotation.y=-.25,this.cylinder(.045,.055,.07,this.brass,e+.95,.79,.1),this.primitiveChair(e+1.35,1,-.5,{seatW:.46,seatD:.44,seatH:.45,backH:.5,legT:.04})}setVignette07(){const e=Ur[4];for(const n of[-1.3,1.3])this.contactShadow(e+n,-.6,.9,.3);this.contactShadow(e,2.1,.6,.26);for(const n of[-1.3,1.3]){const i=n<0?.3:-.3,r=this.placeModel("floorstanding-loudspeaker",{axis:"y",size:1.55,x:e+n,z:-.6,rotY:i,rig:["Rim_Light"],rigIntensity:.15});if(r){this.reflectModel(r);continue}const a=this.box(.46,1.55,.56,this.matteBlack,e+n,.85,-.6);this.brassFeet(e+n,-.6,.46,.56),this.cylinder(.12,.12,.026,this.blackDetail,e+n,1.32,-.31).rotation.x=Math.PI/2,this.cylinder(.15,.15,.026,this.blackDetail,e+n,.66,-.31).rotation.x=Math.PI/2,this.reflect(a)}const t=this.placeModel("low-listening-chair",{axis:"x",size:.6,x:e,z:2.1,rotY:Math.PI});if(t){const n=new Xe("#cdd6e2");t.traverse(i=>{if(i.isMesh)for(const r of Array.isArray(i.material)?i.material:[i.material])r.emissive=n.clone(),r.emissiveIntensity=.16})}else this.primitiveChair(e,2.1,Math.PI,{seatW:.44,seatD:.42,seatH:.3,backH:.32,legT:.035})}ramp(e,t,n){const i=Math.min(1,Math.max(0,(e-t)/(n-t)));return i*i*(3-2*i)}updateCamera(e){var b;let t=this.beats.length-1;for(let p=0;p<this.beats.length;p++)if(e<=this.beats[p].to){t=p;break}const n=this.beats[t],i=this.beatCams[t],r=Math.max(n.to-n.from,1e-6),a=Math.min(1,Math.max(0,(e-n.from)/r)),o=((b=this.experience.sceneState.beatScales)==null?void 0:b[t])||1,c=a/o;let l=0;const h=i.a,u=i.s;if(c<=i.settle){const p=this.ramp(c,0,i.settle);this.camPos.set(...h.pos).lerp(this.tmp.set(...u.pos),p),this.camTgt.set(...h.tgt).lerp(this.tmp.set(...u.tgt),p)}else if(c<=i.depart||t===this.beatCams.length-1)this.camPos.set(...u.pos),this.camTgt.set(...u.tgt);else{const p=this.beatCams[t+1],m=this.ramp(a,i.depart*o,1);l=m,this.camPos.set(...u.pos).lerp(this.tmp.set(...p.a.pos),m),this.camTgt.set(...u.tgt).lerp(this.tmp.set(...p.a.tgt),m)}const f=this.experience.camera.modes.default.instance;f.position.copy(this.camPos),f.lookAt(this.camTgt);const d=this.keyOffsets[t]??{x:0,z:0};this.keyOffCur??(this.keyOffCur={x:d.x,z:d.z}),this.keyOffCur.x+=(d.x-this.keyOffCur.x)*.08,this.keyOffCur.z+=(d.z-this.keyOffCur.z)*.08,(Math.abs(d.x-this.keyOffCur.x)>.01||Math.abs(d.z-this.keyOffCur.z)>.01)&&(this.experience.needsRender=!0);const _=this.camTgt.x+this.keyOffCur.x;return Math.abs(_-(this.lastShadowX??1/0))>.15&&(this.lastShadowX=_,this.experience.renderer.instance.shadowMap.needsUpdate=!0),this.key.position.set(_,9,2.5+this.keyOffCur.z),this.key.target.position.set(this.camTgt.x,0,0),this.fill.position.set(this.camTgt.x,4,12),this.fill.target.position.set(this.camTgt.x,2,-4.5),{beatIndex:t,localT:Math.min(c,1),departK:l}}updateLightTrims(e,t=0,n=0){var d,_;const i={key:1,fill:1,env:1,hemi:1,vig:1,fog:1};let r=this.lightTrims[e]??i,a=this.lightTrims[e+1]??r;if(a.late&&(a=i),r.late){const b=this.ramp(n,.06,((d=this.beatCams[e])==null?void 0:d.settle)??.35);r={key:1+(r.key-1)*b,fill:1+(r.fill-1)*b,env:1+(r.env-1)*b,hemi:1+(r.hemi-1)*b,vig:1+(r.vig-1)*b,fog:1+((r.fog??1)-1)*b}}const o=this.ramp(t,0,.6),c=(b,p)=>b+(p-b)*o,l=this.keyBase*c(r.key,a.key),h=this.fillBase*c(r.fill,a.fill),u=this.envBase*c(r.env,a.env),f=this.hemiBase*c(r.hemi,a.hemi);if(this.key.intensity+=(l-this.key.intensity)*.08,this.fill.intensity+=(h-this.fill.intensity)*.08,this.hemi.intensity+=(f-this.hemi.intensity)*.08,this.scene.environmentIntensity+=(u-this.scene.environmentIntensity)*.08,this.scene.fog&&(this.fogTarget.copy(this.fogBase).multiplyScalar(c(r.fog??1,a.fog??1)),this.scene.fog.color.lerp(this.fogTarget,.08),this.experience.renderer.instance.setClearColor(this.scene.fog.color,1)),this.vignetteEl??(this.vignetteEl=(_=this.experience.targetElement)==null?void 0:_.querySelector(".experience__vignette")),this.vignetteEl){this.vigCurrent??(this.vigCurrent=.45);const b=Math.min(1,.45*c(r.vig,a.vig));Math.abs(b-this.vigCurrent)>.002&&(this.vigCurrent+=(b-this.vigCurrent)*.08,this.vignetteEl.style.opacity=this.vigCurrent.toFixed(3))}(Math.abs(l-this.key.intensity)>.005||Math.abs(h-this.fill.intensity)>.005||Math.abs(f-this.hemi.intensity)>.005||Math.abs(u-this.scene.environmentIntensity)>.002||this.scene.fog&&Math.abs(this.fogTarget.r-this.scene.fog.color.r)>.002)&&(this.experience.needsRender=!0)}resize(){}update(){if(!this.built)return;const e=this.experience.sceneState.scrollProgress,{beatIndex:t,localT:n,departK:i}=this.updateCamera(e);this.updateLightTrims(t,i,n)}destroy(){for(const e of this.disposables.geometries)e.dispose();for(const e of this.disposables.materials)e.dispose();for(const e of this.disposables.textures)e.dispose();this.scene.environment=null,this.scene.fog=null,this.scene.clear()}}function cr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Xm(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ui={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Co={duration:.5,overwrite:!1,delay:0},bf,Sn,Ht,yi=1e8,Ot=1/yi,_u=Math.PI*2,IT=_u/4,UT=0,qm=Math.sqrt,NT=Math.cos,OT=Math.sin,bn=function(e){return typeof e=="string"},Zt=function(e){return typeof e=="function"},Sr=function(e){return typeof e=="number"},vf=function(e){return typeof e>"u"},Zi=function(e){return typeof e=="object"},Yn=function(e){return e!==!1},xf=function(){return typeof window<"u"},vc=function(e){return Zt(e)||bn(e)},jm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Dn=Array.isArray,FT=/random\([^)]+\)/g,kT=/,\s*/g,mp=/(?:-?\.?\d|\.)+/gi,Ym=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ph=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Km=/[+-]=-?[.\d]+/,BT=/[^,'"\[\]\s]+/gi,zT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,qt,Bi,bu,yf,fi={},rl={},Zm,Qm=function(e){return(rl=Ca(e,fi))&&Jn},Sf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Po=function(e,t){return!t&&console.warn(e)},Jm=function(e,t){return e&&(fi[e]=t)&&rl&&(rl[e]=t)||fi},Do=function(){return 0},GT={suppressEvents:!0,isStart:!0,kill:!1},Gc={suppressEvents:!0,kill:!1},HT={suppressEvents:!0},Mf={},Xr=[],vu={},$m,ii={},mh={},gp=30,Hc=[],Tf="",Ef=function(e){var t=e[0],n,i;if(Zi(t)||Zt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Hc.length;i--&&!Hc[i].targetTest(t););n=Hc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new yg(e[i],n)))||e.splice(i,1);return e},xs=function(e){return e._gsap||Ef(Si(e))[0]._gsap},eg=function(e,t,n){return(n=e[t])&&Zt(n)?e[t]():vf(n)&&e.getAttribute&&e.getAttribute(t)||n},Kn=function(e,t){return(e=e.split(",")).forEach(t)||e},$t=function(e){return Math.round(e*1e5)/1e5||0},Xt=function(e){return Math.round(e*1e7)/1e7||0},ha=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},VT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},sl=function(){var e=Xr.length,t=Xr.slice(0),n,i;for(vu={},Xr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},wf=function(e){return!!(e._initted||e._startAt||e.add)},tg=function(e,t,n,i){Xr.length&&!Sn&&sl(),e.render(t,n,!!(Sn&&t<0&&wf(e))),Xr.length&&!Sn&&sl()},ng=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(BT).length<2?t:bn(e)?e.trim():e},ig=function(e){return e},di=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},WT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ca=function(e,t){for(var n in t)e[n]=t[n];return e},_p=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},al=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ho=function(e){var t=e.parent||qt,n=e.keyframes?WT(Dn(e.keyframes)):di;if(Yn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},XT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},rg=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Ml=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Yr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ys=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},qT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},xu=function(e,t,n,i){return e._startAt&&(Sn?e._startAt.revert(Gc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},jT=function s(e){return!e||e._ts&&s(e.parent)},bp=function(e){return e._repeat?Pa(e._tTime,e=e.duration()+e._rDelay)*e:0},Pa=function(e,t){var n=Math.floor(e=Xt(e/t));return e&&n===e?n-1:n},ol=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Tl=function(e){return e._end=Xt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Ot)||0))},El=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Xt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Tl(e),n._dirty||ys(n,e)),e},sg=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=ol(e.rawTime(),t),(!t._dur||Ho(0,t.totalDuration(),n)-t._tTime>Ot)&&t.render(n,!0)),ys(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Ot}},Vi=function(e,t,n,i){return t.parent&&Yr(t),t._start=Xt((Sr(n)?n:n||e!==qt?gi(e,n,t):e._time)+t._delay),t._end=Xt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),rg(e,t,"_first","_last",e._sort?"_start":0),yu(t)||(e._recent=t),i||sg(e,t),e._ts<0&&El(e,e._tTime),e},ag=function(e,t){return(fi.ScrollTrigger||Sf("scrollTrigger",t))&&fi.ScrollTrigger.create(t,e)},og=function(e,t,n,i,r){if(Rf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!Sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&$m!==si.frame)return Xr.push(e),e._lazy=[r,i],1},YT=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},yu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},KT=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&YT(e)&&!(!e._initted&&yu(e))||(e._ts<0||e._dp._ts<0)&&!yu(e))?0:1,o=e._rDelay,c=0,l,h,u;if(o&&e._repeat&&(c=Ho(0,e._tDur,t),h=Pa(c,o),e._yoyo&&h&1&&(a=1-a),h!==Pa(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||Sn||i||e._zTime===Ot||!t&&e._zTime){if(!e._initted&&og(e,t,i,n,c))return;for(u=e._zTime,e._zTime=t||(n?Ot:0),n||(n=t&&!u),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&xu(e,t,n,!0),e._onUpdate&&!n&&ci(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ci(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Yr(e,1),!n&&!Sn&&(ci(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ZT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Da=function(e,t,n,i){var r=e._repeat,a=Xt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Xt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&El(e,e._tTime=e._tDur*o),e.parent&&Tl(e),n||ys(e.parent,e),e},vp=function(e){return e instanceof qn?ys(e):Da(e,e._dur)},QT={_start:0,endTime:Do,totalDuration:Do},gi=function s(e,t,n){var i=e.labels,r=e._recent||QT,a=e.duration()>=yi?r.endTime(!1):e._dur,o,c,l;return bn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Dn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},uo=function(e,t,n){var i=Sr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Yn(c.vars.inherit)&&c.parent;a.immediateRender=Yn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new on(t[0],a,t[r+1])},ts=function(e,t){return e||e===0?t(e):t},Ho=function(e,t,n){return n<e?e:n>t?t:n},Cn=function(e,t){return!bn(e)||!(t=zT.exec(e))?"":t[1]},JT=function(e,t,n){return ts(n,function(i){return Ho(e,t,i)})},Su=[].slice,cg=function(e,t){return e&&Zi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zi(e[0]))&&!e.nodeType&&e!==Bi},$T=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return bn(i)&&!t||cg(i,1)?(r=n).push.apply(r,Si(i)):n.push(i)})||n},Si=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):bn(e)&&!n&&(bu||!La())?Su.call((t||yf).querySelectorAll(e),0):Dn(e)?$T(e,n):cg(e)?Su.call(e,0):e?[e]:[]},Mu=function(e){return e=Si(e)[0]||Po("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Si(t,n.querySelectorAll?n:n===e?Po("Invalid scope")||yf.createElement("div"):e)}},lg=function(e){return e.sort(function(){return .5-Math.random()})},hg=function(e){if(Zt(e))return e;var t=Zi(e)?e:{each:e},n=Ss(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,h=i,u=i;return bn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(h=i[0],u=i[1]),function(f,d,_){var b=(_||t).length,p=a[b],m,S,y,M,D,P,w,L,O;if(!p){if(O=t.grid==="auto"?0:(t.grid||[1,yi])[1],!O){for(w=-yi;w<(w=_[O++].getBoundingClientRect().left)&&O<b;);O<b&&O--}for(p=a[b]=[],m=c?Math.min(O,b)*h-.5:i%O,S=O===yi?0:c?b*u/O-.5:i/O|0,w=0,L=yi,P=0;P<b;P++)y=P%O-m,M=S-(P/O|0),p[P]=D=l?Math.abs(l==="y"?M:y):qm(y*y+M*M),D>w&&(w=D),D<L&&(L=D);i==="random"&&lg(p),p.max=w-L,p.min=L,p.v=b=(parseFloat(t.amount)||parseFloat(t.each)*(O>b?b-1:l?l==="y"?b/O:O:Math.max(O,b/O))||0)*(i==="edges"?-1:1),p.b=b<0?r-b:r,p.u=Cn(t.amount||t.each)||0,n=n&&b<0?fE(n):n}return b=(p[f]-p.min)/p.max||0,Xt(p.b+(n?n(b):b)*p.v)+p.u}},Tu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Xt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Sr(n)?0:Cn(n))}},ug=function(e,t){var n=Dn(e),i,r;return!n&&Zi(e)&&(i=n=e.radius||yi,e.values?(e=Si(e.values),(r=!Sr(e[0]))&&(i*=i)):e=Tu(e.increment)),ts(t,n?Zt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=yi,h=0,u=e.length,f,d;u--;)r?(f=e[u].x-o,d=e[u].y-c,f=f*f+d*d):f=Math.abs(e[u]-o),f<l&&(l=f,h=u);return h=!i||l<=i?e[h]:a,r||h===a||Sr(a)?h:h+Cn(a)}:Tu(e))},fg=function(e,t,n,i){return ts(Dn(e)?!t:n===!0?!!(n=0):!i,function(){return Dn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},eE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},tE=function(e,t){return function(n){return e(parseFloat(n))+(t||Cn(n))}},nE=function(e,t,n){return pg(e,t,0,1,n)},dg=function(e,t,n){return ts(n,function(i){return e[~~t(i)]})},iE=function s(e,t,n){var i=t-e;return Dn(e)?dg(e,s(0,e.length),t):ts(n,function(r){return(i+(r-e)%i)%i+e})},rE=function s(e,t,n){var i=t-e,r=i*2;return Dn(e)?dg(e,s(0,e.length-1),t):ts(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},Lo=function(e){return e.replace(FT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(kT);return fg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},pg=function(e,t,n,i,r){var a=t-e,o=i-n;return ts(r,function(c){return n+((c-e)/a*o||0)})},sE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=bn(e),o={},c,l,h,u,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Dn(e)&&!Dn(t)){for(h=[],u=e.length,f=u-2,l=1;l<u;l++)h.push(s(e[l-1],e[l]));u--,r=function(_){_*=u;var b=Math.min(f,~~_);return h[b](_-b)},n=t}else i||(e=Ca(Dn(e)?[]:{},e));if(!h){for(c in t)Af.call(o,e,c,"get",t[c]);r=function(_){return Df(_,o)||(a?e.p:e)}}}return ts(n,r)},xp=function(e,t,n){var i=e.labels,r=yi,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},ci=function(e,t,n){var i=e.vars,r=i[t],a=Ht,o=e._ctx,c,l,h;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Xr.length&&sl(),o&&(Ht=o),h=c?r.apply(l,c):r.call(l),Ht=a,h},$a=function(e){return Yr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Sn),e.progress()<1&&ci(e,"onInterrupt"),e},sa,mg=[],gg=function(e){if(e)if(e=!e.name&&e.default||e,xf()||e.headless){var t=e.name,n=Zt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Do,render:Df,add:Af,kill:SE,modifier:yE,rawVars:0},a={targetTest:0,get:0,getSetter:Pf,aliases:{},register:0};if(La(),e!==i){if(ii[t])return;di(i,di(al(e,r),a)),Ca(i.prototype,Ca(r,al(e,a))),ii[i.prop=t]=i,e.targetTest&&(Hc.push(i),Mf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Jm(t,i),e.register&&e.register(Jn,i,Zn)}else mg.push(e)},Ut=255,eo={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},gh=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},_g=function(e,t,n){var i=e?Sr(e)?[e>>16,e>>8&Ut,e&Ut]:0:eo.black,r,a,o,c,l,h,u,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),eo[e])i=eo[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(mp),!t)c=+i[0]%360/360,l=+i[1]/100,h=+i[2]/100,a=h<=.5?h*(l+1):h+l-h*l,r=h*2-a,i.length>3&&(i[3]*=1),i[0]=gh(c+1/3,r,a),i[1]=gh(c,r,a),i[2]=gh(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Ym),n&&i.length<4&&(i[3]=1),i}else i=e.match(mp)||eo.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ut,a=i[1]/Ut,o=i[2]/Ut,u=Math.max(r,a,o),f=Math.min(r,a,o),h=(u+f)/2,u===f?c=l=0:(d=u-f,l=h>.5?d/(2-u-f):d/(u+f),c=u===r?(a-o)/d+(a<o?6:0):u===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},bg=function(e){var t=[],n=[],i=-1;return e.split(qr).forEach(function(r){var a=r.match(ra)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},yp=function(e,t,n){var i="",r=(e+i).match(qr),a=t?"hsla(":"rgba(",o=0,c,l,h,u;if(!r)return e;if(r=r.map(function(f){return(f=_g(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=bg(e),c=n.c,c.join(i)!==h.c.join(i)))for(l=e.replace(qr,"1").split(ra),u=l.length-1;o<u;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!l)for(l=e.split(qr),u=l.length-1;o<u;o++)i+=l[o]+r[o];return i+l[u]},qr=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in eo)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),aE=/hsl[a]?\(/,vg=function(e){var t=e.join(" "),n;if(qr.lastIndex=0,qr.test(t))return n=aE.test(t),e[1]=yp(e[1],n),e[0]=yp(e[0],n,bg(e[1])),!0},Io,si=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,h,u,f,d,_=function b(p){var m=s()-i,S=p===!0,y,M,D,P;if((m>e||m<0)&&(n+=m-t),i+=m,D=i-n,y=D-a,(y>0||S)&&(P=++u.frame,f=D-u.time*1e3,u.time=D=D/1e3,a+=y+(y>=r?4:r-y),M=1),S||(c=l(b)),M)for(d=0;d<o.length;d++)o[d](D,f,P,p)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(p){return f/(1e3/(p||60))},wake:function(){Zm&&(!bu&&xf()&&(Bi=bu=window,yf=Bi.document||{},fi.gsap=Jn,(Bi.gsapVersions||(Bi.gsapVersions=[])).push(Jn.version),Qm(rl||Bi.GreenSockGlobals||!Bi.gsap&&Bi||{}),mg.forEach(gg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&u.sleep(),l=h||function(p){return setTimeout(p,a-u.time*1e3+1|0)},Io=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(c),Io=0,l=Do},lagSmoothing:function(p,m){e=p||1/0,t=Math.min(m||33,e)},fps:function(p){r=1e3/(p||240),a=u.time*1e3+r},add:function(p,m,S){var y=m?function(M,D,P,w){p(M,D,P,w),u.remove(y)}:p;return u.remove(p),o[S?"unshift":"push"](y),La(),y},remove:function(p,m){~(m=o.indexOf(p))&&o.splice(m,1)&&d>=m&&d--},_listeners:o},u}(),La=function(){return!Io&&si.wake()},yt={},oE=/^[\d.\-M][\d.\-,\s]/,cE=/["']/g,lE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(cE,"").trim():+l,i=c.substr(o+1).trim();return t},hE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},uE=function(e){var t=(e+"").split("("),n=yt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[lE(t[1])]:hE(e).split(",").map(ng)):yt._CE&&oE.test(e)?yt._CE("",e):n},fE=function(e){return function(t){return 1-e(1-t)}},Ss=function(e,t){return e&&(Zt(e)?e:yt[e]||uE(e))||t},Ls=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Kn(e,function(o){yt[o]=fi[o]=r,yt[a=o.toLowerCase()]=n;for(var c in r)yt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=yt[o+"."+c]=r[c]}),r},xg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},_h=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/_u*(Math.asin(1/i)||0),o=function(h){return h===1?1:i*Math.pow(2,-10*h)*OT((h-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:xg(o);return r=_u/r,c.config=function(l,h){return s(e,l,h)},c},bh=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:xg(n);return i.config=function(r){return s(e,r)},i};Kn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;Ls(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});yt.Linear.easeNone=yt.none=yt.Linear.easeIn;Ls("Elastic",_h("in"),_h("out"),_h());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};Ls("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);Ls("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Ls("Circ",function(s){return-(qm(1-s*s)-1)});Ls("Sine",function(s){return s===1?1:-NT(s*IT)+1});Ls("Back",bh("in"),bh("out"),bh());yt.SteppedEase=yt.steps=fi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Ot;return function(o){return((i*Ho(0,a,o)|0)+r)*n}}};Co.ease=yt["quad.out"];Kn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Tf+=s+","+s+"Params,"});var yg=function(e,t){this.id=UT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:eg,this.set=t?t.getSetter:Pf},Uo=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Da(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),Io||si.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Da(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(La(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(El(this,n),!r._dp||r.parent||sg(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Vi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ot||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),tg(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+bp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+bp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Pa(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ot?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?ol(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ot?0:this._rts,this.totalTime(Ho(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),Tl(this),qT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(La(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ot&&(this._tTime-=Ot)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Xt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Vi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Yn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ol(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=HT);var i=Sn;return Sn=n,wf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,vp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,vp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(gi(this,n),Yn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Yn(i)),this._dur||(this._zTime=-Ot),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ot:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ot,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Ot)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Zt(n)?n:ig,c=function(){var h=i.then;i.then=null,r&&r(),Zt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=h),a(o),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){$a(this)},s}();di(Uo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ot,_prom:0,_ps:!1,_rts:1});var qn=function(s){Xm(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Yn(n.sortChildren),qt&&Vi(n.parent||qt,cr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&ag(cr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return uo(0,arguments,this),this},t.from=function(i,r,a){return uo(1,arguments,this),this},t.fromTo=function(i,r,a,o){return uo(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ho(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new on(i,r,gi(this,a),1),this},t.call=function(i,r,a){return Vi(this,on.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,h){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=h,a.parent=this,new on(i,a,gi(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,h){return a.runBackwards=1,ho(a).immediateRender=Yn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,h)},t.staggerFromTo=function(i,r,a,o,c,l,h,u){return o.startAt=a,ho(o).immediateRender=Yn(o.immediateRender),this.staggerTo(i,r,o,c,l,h,u)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,h=i<=0?0:Xt(i),u=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,b,p,m,S,y,M,D,P,w;if(this!==qt&&h>c&&i>=0&&(h=c),h!==this._tTime||a||u){if(o!==this._time&&l&&(h+=this._time-o,i+=this._time-o),f=h,M=this._start,y=this._ts,m=!y,u&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,p=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,r,a);if(f=Xt(h%p),h===c?(b=this._repeat,f=l):(D=Xt(h/p),b=~~D,b&&b===D&&(f=l,b--),f>l&&(f=l)),D=Pa(this._tTime,p),!o&&this._tTime&&D!==b&&this._tTime-D*p-this._dur<=0&&(D=b),P&&b&1&&(f=l-f,w=1),b!==D&&!this._lock){var L=P&&D&1,O=L===(P&&b&1);if(b<D&&(L=!L),o=L?0:h%l?l:h,this._lock=1,this.render(o||(w?0:Xt(b*p)),r,!l)._lock=0,this._tTime=h,!r&&this.parent&&ci(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,D=b),o&&o!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,O&&(this._lock=2,o=L?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=ZT(this,Xt(o),Xt(f)),S&&(h-=f-(f=S._start))),this._tTime=h,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&h&&l&&!r&&!D&&(ci(this,"onStart"),this._tTime!==h))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=-Ot);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,a||Sn&&wf(d)),f!==this._time||!this._ts&&!m){S=0,_&&(h+=this._zTime=v?-Ot:Ot);break}}d=_}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-Ot)._zTime=f>=o?1:-1,this._ts))return this._start=M,Tl(this),this.render(i,r,a);this._onUpdate&&!r&&ci(this,"onUpdate",!0),(h===c&&this._tTime>=this.totalDuration()||!h&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(h===c&&this._ts>0||!h&&this._ts<0)&&Yr(this,1),!r&&!(i<0&&!o)&&(h||o||!c)&&(ci(this,h===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(Sr(r)||(r=gi(this,r,i)),!(i instanceof Uo)){if(Dn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(bn(i))return this.addLabel(i,r);if(Zt(i))i=on.delayedCall(0,i);else return this}return this!==i?Vi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-yi);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof on?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return bn(i)?this.removeLabel(i):Zt(i)?this.killTweensOf(i):(i.parent===this&&Ml(this,i),i===this._recent&&(this._recent=this._last),ys(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Xt(si.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=gi(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=on.delayedCall(0,r||Do,a);return o.data="isPause",this._hasPause=1,Vi(this,o,gi(this,i))},t.removePause=function(i){var r=this._first;for(i=gi(this,i);r;)r._start===i&&r.data==="isPause"&&Yr(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)zr!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=Si(i),c=this._first,l=Sr(r),h;c;)c instanceof on?VT(c._targets,o)&&(l?(!zr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(h=c.getTweensOf(o,r)).length&&a.push.apply(a,h),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=gi(a,i),c=r,l=c.startAt,h=c.onStart,u=c.onStartParams,f=c.immediateRender,d,_=on.to(a,di({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Ot,onStart:function(){if(a.pause(),!d){var p=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==p&&Da(_,p,0,1).render(_._time,!0,!0),d=1}h&&h.apply(_,u||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,di({startAt:{time:gi(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xp(this,gi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xp(this,gi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ot)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Xt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return ys(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ys(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=yi,l,h,u;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(u=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),h=o._start,h>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Vi(a,o,h-o._delay,1)._lock=0):c=h,h<0&&o._ts&&(r-=h,(!u&&!a._dp||u&&u.smoothChildTiming)&&(a._start+=Xt(h/a._ts),a._time-=h,a._tTime-=h),a.shiftChildren(-h,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Da(a,a===qt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(qt._ts&&(tg(qt,ol(i,qt)),$m=si.frame),si.frame>=gp){gp+=ui.autoSleep||120;var r=qt._first;if((!r||!r._ts)&&ui.autoSleep&&si._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||si.sleep()}}},e}(Uo);di(qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var dE=function(e,t,n,i,r,a,o){var c=new Zn(this._pt,e,t,0,1,Ag,null,r),l=0,h=0,u,f,d,_,b,p,m,S;for(c.b=n,c.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Lo(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(ph)||[];u=ph.exec(i);)_=u[0],b=i.substring(l,u.index),d?d=(d+1)%5:b.substr(-5)==="rgba("&&(d=1),_!==f[h++]&&(p=parseFloat(f[h-1])||0,c._pt={_next:c._pt,p:b||h===1?b:",",s:p,c:_.charAt(1)==="="?ha(p,_)-p:parseFloat(_)-p,m:d&&d<4?Math.round:0},l=ph.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(Km.test(i)||m)&&(c.e=0),this._pt=c,c},Af=function(e,t,n,i,r,a,o,c,l,h){Zt(i)&&(i=i(r||0,e,a));var u=e[t],f=n!=="get"?n:Zt(u)?l?e[t.indexOf("set")||!Zt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():u,d=Zt(u)?l?bE:Eg:Cf,_;if(bn(i)&&(~i.indexOf("random(")&&(i=Lo(i)),i.charAt(1)==="="&&(_=ha(f,i)+(Cn(f)||0),(_||_===0)&&(i=_))),!h||f!==i||Eu)return!isNaN(f*i)&&i!==""?(_=new Zn(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?xE:wg,0,d),l&&(_.fp=l),o&&_.modifier(o,this,e),this._pt=_):(!u&&!(t in e)&&Sf(t,i),dE.call(this,e,t,f,i,d,c||ui.stringFilter,l))},pE=function(e,t,n,i,r){if(Zt(e)&&(e=fo(e,r,t,n,i)),!Zi(e)||e.style&&e.nodeType||Dn(e)||jm(e))return bn(e)?fo(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=fo(e[o],r,t,n,i);return a},Sg=function(e,t,n,i,r,a){var o,c,l,h;if(ii[e]&&(o=new ii[e]).init(r,o.rawVars?t[e]:pE(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Zn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==sa))for(l=n._ptLookup[n._targets.indexOf(r)],h=o._props.length;h--;)l[o._props[h]]=c;return o},zr,Eu,Rf=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,b=e._startAt,p=e._targets,m=e.parent,S=m&&m.data==="nested"?m.vars.targets:p,y=e._overwrite==="auto"&&!bf,M=e.timeline,D=i.easeReverse||u,P,w,L,O,v,E,N,W,z,$,H,te,Y;if(M&&(!f||!r)&&(r="none"),e._ease=Ss(r,Co.ease),e._rEase=D&&(Ss(D)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||f&&!i.stagger){if(W=p[0]?xs(p[0]).harness:0,te=W&&i[W.prop],P=al(i,Mf),b&&(b._zTime<0&&b.progress(1),t<0&&h&&o&&!d?b.render(-1,!0):b.revert(h&&_?Gc:GT),b._lazy=0),a){if(Yr(e._startAt=on.set(p,di({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!b&&Yn(c),startAt:null,delay:0,onUpdate:l&&function(){return ci(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn||!o&&!d)&&e._startAt.revert(Gc),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!b){if(t&&(o=!1),L=di({overwrite:!1,data:"isFromStart",lazy:o&&!b&&Yn(c),immediateRender:o,stagger:0,parent:m},P),te&&(L[W.prop]=te),Yr(e._startAt=on.set(p,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Sn?e._startAt.revert(Gc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Ot,Ot);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Yn(c)||c&&!_,w=0;w<p.length;w++){if(v=p[w],N=v._gsap||Ef(p)[w]._gsap,e._ptLookup[w]=$={},vu[N.id]&&Xr.length&&sl(),H=S===p?w:S.indexOf(v),W&&(z=new W).init(v,te||P,e,H,S)!==!1&&(e._pt=O=new Zn(e._pt,v,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(ce){$[ce]=O}),z.priority&&(E=1)),!W||te)for(L in P)ii[L]&&(z=Sg(L,P,e,H,v,S))?z.priority&&(E=1):$[L]=O=Af.call(e,v,L,"get",P[L],H,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),y&&e._pt&&(zr=e,qt.killTweensOf(v,$,e.globalTime(t)),Y=!e.parent,zr=0),e._pt&&c&&(vu[N.id]=1)}E&&Rg(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!Y,f&&t<=0&&M.render(yi,!0,!0)},mE=function(e,t,n,i,r,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Eu=1,e.vars[t]="+=0",Rf(e,o),Eu=0,c?Po(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(h)}for(d=l.length;d--;)u=l[d],h=u._pt||u,h.s=(i||i===0)&&!r?i:h.s+(i||0)+a*h.c,h.c=n-h.s,u.e&&(u.e=$t(n)+Cn(u.e)),u.b&&(u.b=h.s+Cn(u.b))},gE=function(e,t){var n=e[0]?xs(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Ca({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},_E=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Dn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},fo=function(e,t,n,i,r){return Zt(e)?e.call(t,n,i,r):bn(e)&&~e.indexOf("random(")?Lo(e):e},Mg=Tf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Tg={};Kn(Mg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Tg[s]=1});var on=function(s){Xm(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ho(i))||this;var c=o.vars,l=c.duration,h=c.delay,u=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,b=c.defaults,p=c.scrollTrigger,m=i.parent||qt,S=(Dn(n)||jm(n)?Sr(n[0]):"length"in i)?[n]:Si(n),y,M,D,P,w,L,O,v;if(o._targets=S.length?Ef(S):Po("GSAP target "+n+" not found. https://gsap.com",!ui.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||vc(l)||vc(h)){i=o.vars;var E=i.easeReverse||i.yoyoEase;if(y=o.timeline=new qn({data:"nested",defaults:b||{},targets:m&&m.data==="nested"?m.vars.targets:S}),y.kill(),y.parent=y._dp=cr(o),y._start=0,f||vc(l)||vc(h)){if(P=S.length,O=f&&hg(f),Zi(f))for(w in f)~Mg.indexOf(w)&&(v||(v={}),v[w]=f[w]);for(M=0;M<P;M++)D=al(i,Tg),D.stagger=0,E&&(D.easeReverse=E),v&&Ca(D,v),L=S[M],D.duration=+fo(l,cr(o),M,L,S),D.delay=(+fo(h,cr(o),M,L,S)||0)-o._delay,!f&&P===1&&D.delay&&(o._delay=h=D.delay,o._start+=h,D.delay=0),y.to(L,D,O?O(M,L,S):0),y._ease=yt.none;y.duration()?l=h=0:o.timeline=0}else if(_){ho(di(y.vars.defaults,{ease:"none"})),y._ease=Ss(_.ease||i.ease||"none");var N=0,W,z,$;if(Dn(_))_.forEach(function(H){return y.to(S,H,">")}),y.duration();else{D={};for(w in _)w==="ease"||w==="easeEach"||_E(w,_[w],D,_.easeEach);for(w in D)for(W=D[w].sort(function(H,te){return H.t-te.t}),N=0,M=0;M<W.length;M++)z=W[M],$={ease:z.e,duration:(z.t-(M?W[M-1].t:0))/100*l},$[w]=z.v,y.to(S,$,N),N+=$.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return d===!0&&!bf&&(zr=cr(o),qt.killTweensOf(S),zr=0),Vi(m,cr(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(u||!l&&!_&&o._start===Xt(m._time)&&Yn(u)&&jT(cr(o))&&m.data!=="nested")&&(o._tTime=-Ot,o.render(Math.max(0,-h)||0)),p&&ag(cr(o),p),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,h=i<0,u=i>c-Ot&&!h?c:i<Ot?0:i,f,d,_,b,p,m,S,y;if(!l)KT(this,i,r,a);else if(u!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,y=this.timeline,this._repeat){if(b=l+this._rDelay,this._repeat<-1&&h)return this.totalTime(b*100+i,r,a);if(f=Xt(u%b),u===c?(_=this._repeat,f=l):(p=Xt(u/b),_=~~p,_&&_===p?(f=l,_--):f>l&&(f=l)),m=this._yoyo&&_&1,m&&(f=l-f),p=Pa(this._tTime,b),f===o&&!a&&this._initted&&_===p)return this._tTime=u,this;_!==p&&this.vars.repeatRefresh&&!m&&!this._lock&&f!==b&&this._initted&&(this._lock=a=1,this.render(Xt(b*_),!0).invalidate()._lock=0)}if(!this._initted){if(og(this,h?i:f,a,r,u))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==p))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._rEase){var M=f<o;if(M!==this._inv){var D=M?o:l-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=D?(M?-1:1)/D:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/l);if(this._from&&(this.ratio=S=1-S),this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&u&&!r&&!p&&(ci(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&xu(this,i,r,a),ci(this,"onUpdate")),this._repeat&&_!==p&&this.vars.onRepeat&&!r&&this.parent&&ci(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&xu(this,i,!0,!0),(i||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Yr(this,1),!r&&!(h&&!o)&&(u||o||m)&&(ci(this,u===c?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){Io||si.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Rf(this,l),h=this._ease(l/this._dur),mE(this,i,r,a,o,h,l,c)?this.resetTo(i,r,a,o,1):(El(this,0),this.parent||rg(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?$a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,zr&&zr.vars.overwrite!==!0)._first||$a(this),this.parent&&a!==this.timeline.totalDuration()&&Da(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?Si(i):o,l=this._ptLookup,h=this._pt,u,f,d,_,b,p,m;if((!r||r==="all")&&XT(o,c))return r==="all"&&(this._pt=0),$a(this);for(u=this._op=this._op||[],r!=="all"&&(bn(r)&&(b={},Kn(r,function(S){return b[S]=1}),r=b),r=gE(o,r)),m=o.length;m--;)if(~c.indexOf(o[m])){f=l[m],r==="all"?(u[m]=r,_=f,d={}):(d=u[m]=u[m]||{},_=r);for(b in _)p=f&&f[b],p&&((!("kill"in p.d)||p.d.kill(b)===!0)&&Ml(this,p,"_pt"),delete f[b]),d!=="all"&&(d[b]=1)}return this._initted&&!this._pt&&h&&$a(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return uo(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return uo(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return qt.killTweensOf(i,r,a)},e}(Uo);di(on.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Kn("staggerTo,staggerFrom,staggerFromTo",function(s){on[s]=function(){var e=new qn,t=Su.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var Cf=function(e,t,n){return e[t]=n},Eg=function(e,t,n){return e[t](n)},bE=function(e,t,n,i){return e[t](i.fp,n)},vE=function(e,t,n){return e.setAttribute(t,n)},Pf=function(e,t){return Zt(e[t])?Eg:vf(e[t])&&e.setAttribute?vE:Cf},wg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},xE=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ag=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},yE=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},SE=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Ml(this,t,"_pt"):t.dep||(n=1),t=i;return!n},ME=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Rg=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Zn=function(){function s(t,n,i,r,a,o,c,l,h){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||wg,this.d=c||this,this.set=l||Cf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=ME,this.m=n,this.mt=r,this.tween=i},s}();Kn(Tf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Mf[s]=1});fi.TweenMax=fi.TweenLite=on;fi.TimelineLite=fi.TimelineMax=qn;qt=new qn({sortChildren:!1,defaults:Co,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ui.stringFilter=vg;var Ms=[],Vc={},TE=[],Sp=0,EE=0,vh=function(e){return(Vc[e]||TE).map(function(t){return t()})},wu=function(){var e=Date.now(),t=[];e-Sp>2&&(vh("matchMediaInit"),Ms.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=Bi.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),vh("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sp=e,vh("matchMedia"))},Cg=function(){function s(t,n){this.selector=n&&Mu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=EE++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Zt(n)&&(r=i,i=n,n=Zt);var a=this,o=function(){var l=Ht,h=a.selector,u;return l&&l!==a&&l.data.push(a),r&&(a.selector=Mu(r)),Ht=a,u=i.apply(a,arguments),Zt(u)&&a._r.push(u),Ht=l,a.selector=h,a.isReverted=!1,u};return a.last=o,n===Zt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Ht;Ht=null,n(this),Ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof on&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}));for(o.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof qn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof on)&&l.revert&&l.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Ms.length;a--;)Ms[a].id===this.id&&Ms.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),wE=function(){function s(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Zi(n)||(n={matches:n});var a=new Cg(0,r||this.scope),o=a.conditions={},c,l,h;Ht&&!a.selector&&(a.selector=Ht.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?h=1:(c=Bi.matchMedia(n[l]),c&&(Ms.indexOf(a)<0&&Ms.push(a),(o[l]=c.matches)&&(h=1),c.addListener?c.addListener(wu):c.addEventListener("change",wu)));return h&&i(a,function(u){return a.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),cl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return gg(i)})},timeline:function(e){return new qn(e)},getTweensOf:function(e,t){return qt.getTweensOf(e,t)},getProperty:function(e,t,n,i){bn(e)&&(e=Si(e)[0]);var r=xs(e||{}).get,a=n?ig:ng;return n==="native"&&(n=""),e&&(t?a((ii[t]&&ii[t].get||r)(e,t,n,i)):function(o,c,l){return a((ii[o]&&ii[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=Si(e),e.length>1){var i=e.map(function(h){return Jn.quickSetter(h,t,n)}),r=i.length;return function(h){for(var u=r;u--;)i[u](h)}}e=e[0]||{};var a=ii[t],o=xs(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(h){var u=new a;sa._pt=0,u.init(e,n?h+n:h,sa,0,[e]),u.render(1,u),sa._pt&&Df(1,sa)}:o.set(e,c);return a?l:function(h){return l(e,c,n?h+n:h,o,1)}},quickTo:function(e,t,n){var i,r=Jn.to(e,di((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,h){return r.resetTo(t,c,l,h)};return a.tween=r,a},isTweening:function(e){return qt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Ss(e.ease,Co.ease)),_p(Co,e||{})},config:function(e){return _p(ui,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!ii[o]&&!fi[o]&&Po(t+" effect requires "+o+" plugin.")}),mh[t]=function(o,c,l){return n(Si(o),di(c||{},r),l)},a&&(qn.prototype[t]=function(o,c,l){return this.add(mh[t](o,Zi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){yt[e]=Ss(t)},parseEase:function(e,t){return arguments.length?Ss(e,t):yt},getById:function(e){return qt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new qn(e),i,r;for(n.smoothChildTiming=Yn(e.smoothChildTiming),qt.remove(n),n._dp=0,n._time=n._tTime=qt._time,i=qt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof on&&i.vars.onComplete===i._targets[0]))&&Vi(n,i,i._start-i._delay),i=r;return Vi(qt,n,0),n},context:function(e,t){return e?new Cg(e,t):Ht},matchMedia:function(e){return new wE(e)},matchMediaRefresh:function(){return Ms.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||wu()},addEventListener:function(e,t){var n=Vc[e]||(Vc[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Vc[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:iE,wrapYoyo:rE,distribute:hg,random:fg,snap:ug,normalize:nE,getUnit:Cn,clamp:JT,splitColor:_g,toArray:Si,selector:Mu,mapRange:pg,pipe:eE,unitize:tE,interpolate:sE,shuffle:lg},install:Qm,effects:mh,ticker:si,updateRoot:qn.updateRoot,plugins:ii,globalTimeline:qt,core:{PropTween:Zn,globals:Jm,Tween:on,Timeline:qn,Animation:Uo,getCache:xs,_removeLinkedListItem:Ml,reverting:function(){return Sn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return bf=e}}};Kn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return cl[s]=on[s]});si.add(qn.updateRoot);sa=cl.to({},{duration:0});var AE=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},RE=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=AE(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},xh=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(bn(r)&&(c={},Kn(r,function(h){return c[h]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}RE(o,r)}}}},Jn=cl.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},xh("roundProps",Tu),xh("modifiers"),xh("snap",ug))||cl;on.version=qn.version=Jn.version="3.15.0";Zm=1;xf()&&La();yt.Power0;yt.Power1;yt.Power2;yt.Power3;yt.Power4;yt.Linear;yt.Quad;yt.Cubic;yt.Quart;yt.Quint;yt.Strong;yt.Elastic;yt.Back;yt.SteppedEase;yt.Bounce;yt.Sine;yt.Expo;yt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Mp,Gr,ua,Lf,bs,Tp,If,CE=function(){return typeof window<"u"},Mr={},ds=180/Math.PI,fa=Math.PI/180,Ks=Math.atan2,Ep=1e8,Uf=/([A-Z])/g,PE=/(left|right|width|margin|padding|x)/i,DE=/[\s,\(]\S/,qi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Au=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},LE=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},IE=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},UE=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},NE=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Pg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Dg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},OE=function(e,t,n){return e.style[t]=n},FE=function(e,t,n){return e.style.setProperty(t,n)},kE=function(e,t,n){return e._gsap[t]=n},BE=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},zE=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},GE=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},jt="transform",Qn=jt+"Origin",HE=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in Mr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=qi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=lr(i,o)}):this.tfm[e]=a.x?a[e]:lr(i,e),e===Qn&&(this.tfm.zOrigin=a.zOrigin);else return qi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(jt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Qn,t,"")),e=jt}(r||t)&&this.props.push(e,t,r[e])},Lg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},VE=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(Uf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=If(),(!r||!r.isStart)&&!n[jt]&&(Lg(n),i.zOrigin&&n[Qn]&&(n[Qn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ig=function(e,t){var n={target:e,props:[],revert:VE,save:HE};return e._gsap||Jn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Ug,Ru=function(e,t){var n=Gr.createElementNS?Gr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Gr.createElement(e);return n&&n.style?n:Gr.createElement(e)},li=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Uf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Ia(t)||t,1)||""},wp="O,Moz,ms,Ms,Webkit".split(","),Ia=function(e,t,n){var i=t||bs,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(wp[a]+e in r););return a<0?null:(a===3?"ms":a>=0?wp[a]:"")+e},Cu=function(){CE()&&window.document&&(Mp=window,Gr=Mp.document,ua=Gr.documentElement,bs=Ru("div")||{style:{}},Ru("div"),jt=Ia(jt),Qn=jt+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ug=!!Ia("perspective"),If=Jn.core.reverting,Lf=1)},Ap=function(e){var t=e.ownerSVGElement,n=Ru("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),ua.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),ua.removeChild(n),r},Rp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ng=function(e){var t,n;try{t=e.getBBox()}catch{t=Ap(e),n=1}return t&&(t.width||t.height)||n||(t=Ap(e)),t&&!t.width&&!t.x&&!t.y?{x:+Rp(e,["x","cx","x1"])||0,y:+Rp(e,["y","cy","y1"])||0,width:0,height:0}:t},Og=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ng(e))},Kr=function(e,t){if(t){var n=e.style,i;t in Mr&&t!==Qn&&(t=jt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Uf,"-$1").toLowerCase())):n.removeAttribute(t)}},Hr=function(e,t,n,i,r,a){var o=new Zn(e._pt,t,n,0,1,a?Dg:Pg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},Cp={deg:1,rad:1,turn:1},WE={grid:1,flex:1},Zr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=bs.style,c=PE.test(t),l=e.tagName.toLowerCase()==="svg",h=(l?"client":"offset")+(c?"Width":"Height"),u=100,f=i==="px",d=i==="%",_,b,p,m;if(i===a||!r||Cp[i]||Cp[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),m=e.getCTM&&Og(e),(d||a==="%")&&(Mr[t]||~t.indexOf("adius")))return _=m?e.getBBox()[c?"width":"height"]:e[h],$t(d?r/_*u:r/100*_);if(o[c?"width":"height"]=u+(f?a:i),b=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,m&&(b=(e.ownerSVGElement||{}).parentNode),(!b||b===Gr||!b.appendChild)&&(b=Gr.body),p=b._gsap,p&&d&&p.width&&c&&p.time===si.time&&!p.uncache)return $t(r/p.width*u);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=u+i,_=e[h],S?e.style[t]=S:Kr(e,t)}else(d||a==="%")&&!WE[li(b,"display")]&&(o.position=li(e,"position")),b===e&&(o.position="static"),b.appendChild(bs),_=bs[h],b.removeChild(bs),o.position="absolute";return c&&d&&(p=xs(b),p.time=si.time,p.width=b[h]),$t(f?_*r/u:_&&r?u/_*r:0)},lr=function(e,t,n,i){var r;return Lf||Cu(),t in qi&&t!=="transform"&&(t=qi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mr[t]&&t!=="transform"?(r=Oo(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:hl(li(e,Qn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=ll[t]&&ll[t](e,t,n)||li(e,t)||eg(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Zr(e,t,r,n)+n:r},XE=function(e,t,n,i){if(!n||n==="none"){var r=Ia(t,e,1),a=r&&li(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=li(e,"borderTopColor"))}var o=new Zn(this._pt,e.style,t,0,1,Ag),c=0,l=0,h,u,f,d,_,b,p,m,S,y,M,D;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=li(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(b=e.style[t],e.style[t]=i,i=li(e,t)||i,b?e.style[t]=b:Kr(e,t)),h=[n,i],vg(h),n=h[0],i=h[1],f=n.match(ra)||[],D=i.match(ra)||[],D.length){for(;u=ra.exec(i);)p=u[0],S=i.substring(c,u.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),p!==(b=f[l++]||"")&&(d=parseFloat(b)||0,M=b.substr((d+"").length),p.charAt(1)==="="&&(p=ha(d,p)+M),m=parseFloat(p),y=p.substr((m+"").length),c=ra.lastIndex-y.length,y||(y=y||ui.units[t]||M,c===i.length&&(i+=y,o.e+=y)),M!==y&&(d=Zr(e,t,b,y)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:d,c:m-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Dg:Pg;return Km.test(i)&&(o.e=0),this._pt=o,o},Pp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qE=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Pp[n]||n,t[1]=Pp[i]||i,t.join(" ")},jE=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],Mr[o]&&(c=1,o=o==="transformOrigin"?Qn:jt),Kr(n,o);c&&(Kr(n,jt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Oo(n,1),a.uncache=1,Lg(i)))}},ll={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Zn(e._pt,t,n,0,0,jE);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},No=[1,0,0,1,0,0],Fg={},kg=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Dp=function(e){var t=li(e,jt);return kg(t)?No:t.substr(7).match(Ym).map($t)},Nf=function(e,t){var n=e._gsap||xs(e),i=e.style,r=Dp(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?No:r):(r===No&&!e.offsetParent&&e!==ua&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,ua.appendChild(e)),r=Dp(e),c?i.display=c:Kr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):ua.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},Pu=function(e,t,n,i,r,a){var o=e._gsap,c=r||Nf(e,!0),l=o.xOrigin||0,h=o.yOrigin||0,u=o.xOffset||0,f=o.yOffset||0,d=c[0],_=c[1],b=c[2],p=c[3],m=c[4],S=c[5],y=t.split(" "),M=parseFloat(y[0])||0,D=parseFloat(y[1])||0,P,w,L,O;n?c!==No&&(w=d*p-_*b)&&(L=M*(p/w)+D*(-b/w)+(b*S-p*m)/w,O=M*(-_/w)+D*(d/w)-(d*S-_*m)/w,M=L,D=O):(P=Ng(e),M=P.x+(~y[0].indexOf("%")?M/100*P.width:M),D=P.y+(~(y[1]||y[0]).indexOf("%")?D/100*P.height:D)),i||i!==!1&&o.smooth?(m=M-l,S=D-h,o.xOffset=u+(m*d+S*b)-m,o.yOffset=f+(m*_+S*p)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=D,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Qn]="0px 0px",a&&(Hr(a,o,"xOrigin",l,M),Hr(a,o,"yOrigin",h,D),Hr(a,o,"xOffset",u,o.xOffset),Hr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+D)},Oo=function(e,t){var n=e._gsap||new yg(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=li(e,Qn)||"0",h,u,f,d,_,b,p,m,S,y,M,D,P,w,L,O,v,E,N,W,z,$,H,te,Y,ce,U,ve,Re,Ne,ne,oe;return h=u=f=b=p=m=S=y=M=0,d=_=1,n.svg=!!(e.getCTM&&Og(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[jt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[jt]!=="none"?c[jt]:"")),i.scale=i.rotate=i.translate="none"),w=Nf(e,n.svg),n.svg&&(n.uncache?(Y=e.getBBox(),l=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",te=""):te=!t&&e.getAttribute("data-svg-origin"),Pu(e,te||l,!!te||n.originIsAbsolute,n.smooth!==!1,w)),D=n.xOrigin||0,P=n.yOrigin||0,w!==No&&(E=w[0],N=w[1],W=w[2],z=w[3],h=$=w[4],u=H=w[5],w.length===6?(d=Math.sqrt(E*E+N*N),_=Math.sqrt(z*z+W*W),b=E||N?Ks(N,E)*ds:0,S=W||z?Ks(W,z)*ds+b:0,S&&(_*=Math.abs(Math.cos(S*fa))),n.svg&&(h-=D-(D*E+P*W),u-=P-(D*N+P*z))):(oe=w[6],Ne=w[7],U=w[8],ve=w[9],Re=w[10],ne=w[11],h=w[12],u=w[13],f=w[14],L=Ks(oe,Re),p=L*ds,L&&(O=Math.cos(-L),v=Math.sin(-L),te=$*O+U*v,Y=H*O+ve*v,ce=oe*O+Re*v,U=$*-v+U*O,ve=H*-v+ve*O,Re=oe*-v+Re*O,ne=Ne*-v+ne*O,$=te,H=Y,oe=ce),L=Ks(-W,Re),m=L*ds,L&&(O=Math.cos(-L),v=Math.sin(-L),te=E*O-U*v,Y=N*O-ve*v,ce=W*O-Re*v,ne=z*v+ne*O,E=te,N=Y,W=ce),L=Ks(N,E),b=L*ds,L&&(O=Math.cos(L),v=Math.sin(L),te=E*O+N*v,Y=$*O+H*v,N=N*O-E*v,H=H*O-$*v,E=te,$=Y),p&&Math.abs(p)+Math.abs(b)>359.9&&(p=b=0,m=180-m),d=$t(Math.sqrt(E*E+N*N+W*W)),_=$t(Math.sqrt(H*H+oe*oe)),L=Ks($,H),S=Math.abs(L)>2e-4?L*ds:0,M=ne?1/(ne<0?-ne:ne):0),n.svg&&(te=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!kg(li(e,jt)),te&&e.setAttribute("transform",te))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=b<=0?180:-180,b+=b<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=$t(d),n.scaleY=$t(_),n.rotation=$t(b)+o,n.rotationX=$t(p)+o,n.rotationY=$t(m)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Qn]=hl(l)),n.xOffset=n.yOffset=0,n.force3D=ui.force3D,n.renderTransform=n.svg?KE:Ug?Bg:YE,n.uncache=0,n},hl=function(e){return(e=e.split(" "))[0]+" "+e[1]},yh=function(e,t,n){var i=Cn(t);return $t(parseFloat(t)+parseFloat(Zr(e,"x",n+"px",i)))+i},YE=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Bg(e,t)},ls="0deg",Ya="0px",hs=") ",Bg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,b=n.scaleY,p=n.transformPerspective,m=n.force3D,S=n.target,y=n.zOrigin,M="",D=m==="auto"&&e&&e!==1||m===!0;if(y&&(u!==ls||h!==ls)){var P=parseFloat(h)*fa,w=Math.sin(P),L=Math.cos(P),O;P=parseFloat(u)*fa,O=Math.cos(P),a=yh(S,a,w*O*-y),o=yh(S,o,-Math.sin(P)*-y),c=yh(S,c,L*O*-y+y)}p!==Ya&&(M+="perspective("+p+hs),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(D||a!==Ya||o!==Ya||c!==Ya)&&(M+=c!==Ya||D?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+hs),l!==ls&&(M+="rotate("+l+hs),h!==ls&&(M+="rotateY("+h+hs),u!==ls&&(M+="rotateX("+u+hs),(f!==ls||d!==ls)&&(M+="skew("+f+", "+d+hs),(_!==1||b!==1)&&(M+="scale("+_+", "+b+hs),S.style[jt]=M||"translate(0, 0)"},KE=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,b=n.yOrigin,p=n.xOffset,m=n.yOffset,S=n.forceCSS,y=parseFloat(a),M=parseFloat(o),D,P,w,L,O;c=parseFloat(c),l=parseFloat(l),h=parseFloat(h),h&&(h=parseFloat(h),l+=h,c+=h),c||l?(c*=fa,l*=fa,D=Math.cos(c)*u,P=Math.sin(c)*u,w=Math.sin(c-l)*-f,L=Math.cos(c-l)*f,l&&(h*=fa,O=Math.tan(l-h),O=Math.sqrt(1+O*O),w*=O,L*=O,h&&(O=Math.tan(h),O=Math.sqrt(1+O*O),D*=O,P*=O)),D=$t(D),P=$t(P),w=$t(w),L=$t(L)):(D=u,L=f,P=w=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Zr(d,"x",a,"px"),M=Zr(d,"y",o,"px")),(_||b||p||m)&&(y=$t(y+_-(_*D+b*w)+p),M=$t(M+b-(_*P+b*L)+m)),(i||r)&&(O=d.getBBox(),y=$t(y+i/100*O.width),M=$t(M+r/100*O.height)),O="matrix("+D+","+P+","+w+","+L+","+y+","+M+")",d.setAttribute("transform",O),S&&(d.style[jt]=O)},ZE=function(e,t,n,i,r){var a=360,o=bn(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?ds:1),l=c-i,h=i+l+"deg",u,f;return o&&(u=r.split("_")[1],u==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),u==="cw"&&l<0?l=(l+a*Ep)%a-~~(l/a)*a:u==="ccw"&&l>0&&(l=(l-a*Ep)%a-~~(l/a)*a)),e._pt=f=new Zn(e._pt,t,n,i,l,LE),f.e=h,f.u="deg",e._props.push(n),f},Lp=function(e,t){for(var n in t)e[n]=t[n];return e},QE=function(e,t,n){var i=Lp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,h,u,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[jt]=t,o=Oo(n,1),Kr(n,jt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[jt],a[jt]=t,o=Oo(n,1),a[jt]=l);for(c in Mr)l=i[c],h=o[c],l!==h&&r.indexOf(c)<0&&(d=Cn(l),_=Cn(h),u=d!==_?Zr(n,c,l,_):parseFloat(l),f=parseFloat(h),e._pt=new Zn(e._pt,o,c,u,f-u,Au),e._pt.u=_||0,e._props.push(c));Lp(o,i)};Kn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});ll[e>1?"border"+s:s]=function(o,c,l,h,u){var f,d;if(arguments.length<4)return f=a.map(function(_){return lr(o,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},a.forEach(function(_,b){return d[_]=f[b]=f[b]||f[(b-1)/2|0]}),o.init(c,d,u)}});var zg={name:"css",register:Cu,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,h,u,f,d,_,b,p,m,S,y,M,D,P,w,L,O;Lf||Cu(),this.styles=this.styles||Ig(e),L=this.styles.props,this.tween=n;for(b in t)if(b!=="autoRound"&&(h=t[b],!(ii[b]&&Sg(b,t,n,i,e,r)))){if(d=typeof h,_=ll[b],d==="function"&&(h=h.call(n,i,e,r),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Lo(h)),_)_(this,e,b,h,n)&&(w=1);else if(b.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(b)+"").trim(),h+="",qr.lastIndex=0,qr.test(l)||(p=Cn(l),m=Cn(h),m?p!==m&&(l=Zr(e,b,l,m)+m):p&&(h+=p)),this.add(o,"setProperty",l,h,i,r,0,0,b),a.push(b),L.push(b,0,o[b]);else if(d!=="undefined"){if(c&&b in c?(l=typeof c[b]=="function"?c[b].call(n,i,e,r):c[b],bn(l)&&~l.indexOf("random(")&&(l=Lo(l)),Cn(l+"")||l==="auto"||(l+=ui.units[b]||Cn(lr(e,b))||""),(l+"").charAt(1)==="="&&(l=lr(e,b))):l=lr(e,b),f=parseFloat(l),S=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),S&&(h=h.substr(2)),u=parseFloat(h),b in qi&&(b==="autoAlpha"&&(f===1&&lr(e,"visibility")==="hidden"&&u&&(f=0),L.push("visibility",0,o.visibility),Hr(this,o,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),b!=="scale"&&b!=="transform"&&(b=qi[b],~b.indexOf(",")&&(b=b.split(",")[0]))),y=b in Mr,y){if(this.styles.save(b),O=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=li(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=h,h=li(e,"perspective"),v?e.style.perspective=v:Kr(e,"perspective")}u=parseFloat(h)}if(M||(D=e._gsap,D.renderTransform&&!t.parseTransform||Oo(e,t.parseTransform),P=t.smoothOrigin!==!1&&D.smooth,M=this._pt=new Zn(this._pt,o,jt,0,1,D.renderTransform,D,0,-1),M.dep=1),b==="scale")this._pt=new Zn(this._pt,D,"scaleY",D.scaleY,(S?ha(D.scaleY,S+u):u)-D.scaleY||0,Au),this._pt.u=0,a.push("scaleY",b),b+="X";else if(b==="transformOrigin"){L.push(Qn,0,o[Qn]),h=qE(h),D.svg?Pu(e,h,0,P,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==D.zOrigin&&Hr(this,D,"zOrigin",D.zOrigin,m),Hr(this,o,b,hl(l),hl(h)));continue}else if(b==="svgOrigin"){Pu(e,h,1,P,0,this);continue}else if(b in Fg){ZE(this,D,b,f,S?ha(f,S+h):h);continue}else if(b==="smoothOrigin"){Hr(this,D,"smooth",D.smooth,h);continue}else if(b==="force3D"){D[b]=h;continue}else if(b==="transform"){QE(this,h,e);continue}}else b in o||(b=Ia(b)||b);if(y||(u||u===0)&&(f||f===0)&&!DE.test(h)&&b in o)p=(l+"").substr((f+"").length),u||(u=0),m=Cn(h)||(b in ui.units?ui.units[b]:p),p!==m&&(f=Zr(e,b,l,m)),this._pt=new Zn(this._pt,y?D:o,b,f,(S?ha(f,S+u):u)-f,!y&&(m==="px"||b==="zIndex")&&t.autoRound!==!1?NE:Au),this._pt.u=m||0,y&&O!==h?(this._pt.b=l,this._pt.e=O,this._pt.r=UE):p!==m&&m!=="%"&&(this._pt.b=l,this._pt.r=IE);else if(b in o)XE.call(this,e,b,l,S?S+h:h);else if(b in e)this.add(e,b,l||e[b],S?S+h:h,i,r);else if(b!=="parseTransform"){Sf(b,h);continue}y||(b in o?L.push(b,0,o[b]):typeof e[b]=="function"?L.push(b,2,e[b]()):L.push(b,1,l||e[b])),a.push(b)}}w&&Rg(this)},render:function(e,t){if(t.tween._time||!If())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:lr,aliases:qi,getSetter:function(e,t,n){var i=qi[t];return i&&i.indexOf(",")<0&&(t=i),t in Mr&&t!==Qn&&(e._gsap.x||lr(e,"x"))?n&&Tp===n?t==="scale"?BE:kE:(Tp=n||{})&&(t==="scale"?zE:GE):e.style&&!vf(e.style[t])?OE:~t.indexOf("-")?FE:Pf(e,t)},core:{_removeProperty:Kr,_getMatrix:Nf}};Jn.utils.checkPrefix=Ia;Jn.core.getStyleSaver=Ig;(function(s,e,t,n){var i=Kn(s+","+e+","+t,function(r){Mr[r]=1});Kn(e,function(r){ui.units[r]="deg",Fg[r]=1}),qi[i[13]]=s+","+e,Kn(n,function(r){var a=r.split(":");qi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Kn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ui.units[s]="px"});Jn.registerPlugin(zg);var Or=Jn.registerPlugin(zg)||Jn;Or.core.Tween;function JE(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function $E(s,e,t){return e&&JE(s.prototype,e),s}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var xn,Wc,ai,Vr,Wr,da,Gg,ps,pa,Hg,mr,Ci,Vg,Wg=function(){return xn||typeof window<"u"&&(xn=window.gsap)&&xn.registerPlugin&&xn},Xg=1,aa=[],mt=[],Yi=[],po=Date.now,Du=function(e,t){return t},ew=function(){var e=pa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,mt),i.push.apply(i,Yi),mt=n,Yi=i,Du=function(a,o){return t[a](o)}},jr=function(e,t){return~Yi.indexOf(e)&&Yi[Yi.indexOf(e)+1][t]},mo=function(e){return!!~Hg.indexOf(e)},Nn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Un=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},xc="scrollLeft",yc="scrollTop",Lu=function(){return mr&&mr.isPressed||mt.cache++},ul=function(e,t){var n=function i(r){if(r||r===0){Xg&&(ai.history.scrollRestoration="manual");var a=mr&&mr.isPressed;r=i.v=Math.round(r)||(mr&&mr.iOS?1:0),e(r),i.cacheID=mt.cache,a&&Du("ss",r)}else(t||mt.cache!==i.cacheID||Du("ref"))&&(i.cacheID=mt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Vn={s:xc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ul(function(s){return arguments.length?ai.scrollTo(s,hn.sc()):ai.pageXOffset||Vr[xc]||Wr[xc]||da[xc]||0})},hn={s:yc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Vn,sc:ul(function(s){return arguments.length?ai.scrollTo(Vn.sc(),s):ai.pageYOffset||Vr[yc]||Wr[yc]||da[yc]||0})},Xn=function(e,t){return(t&&t._ctx&&t._ctx.selector||xn.utils.toArray)(e)[0]||(typeof e=="string"&&xn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},tw=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Qr=function(e,t){var n=t.s,i=t.sc;mo(e)&&(e=Vr.scrollingElement||Wr);var r=mt.indexOf(e),a=i===hn.sc?1:2;!~r&&(r=mt.push(e)-1),mt[r+a]||Nn(e,"scroll",Lu);var o=mt[r+a],c=o||(mt[r+a]=ul(jr(e,n),!0)||(mo(e)?i:ul(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=xn.getProperty(e,"scrollBehavior")==="smooth"),c},Iu=function(e,t,n){var i=e,r=e,a=po(),o=a,c=t||50,l=Math.max(500,c*3),h=function(_,b){var p=po();b||p-a>c?(r=i,i=_,o=a,a=p):n?i+=_:i=r+(_-r)/(p-o)*(a-o)},u=function(){r=i=n?0:i,o=a=0},f=function(_){var b=o,p=r,m=po();return(_||_===0)&&_!==i&&h(_),a===o||m-o>l?0:(i+(n?p:-p))/((n?m:a)-b)*1e3};return{update:h,reset:u,getVelocity:f}},Ka=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Ip=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},qg=function(){pa=xn.core.globals().ScrollTrigger,pa&&pa.core&&ew()},jg=function(e){return xn=e||Wg(),!Wc&&xn&&typeof document<"u"&&document.body&&(ai=window,Vr=document,Wr=Vr.documentElement,da=Vr.body,Hg=[ai,Vr,Wr,da],xn.utils.clamp,Vg=xn.core.context||function(){},ps="onpointerenter"in da?"pointer":"mouse",Gg=en.isTouch=ai.matchMedia&&ai.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ai||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Ci=en.eventTypes=("ontouchstart"in Wr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Wr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Xg=0},500),Wc=1),pa||qg(),Wc};Vn.op=hn;mt.cache=0;var en=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Wc||jg(xn)||console.warn("Please gsap.registerPlugin(Observer)"),pa||qg();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,b=n.event,p=n.onDragStart,m=n.onDragEnd,S=n.onDrag,y=n.onPress,M=n.onRelease,D=n.onRight,P=n.onLeft,w=n.onUp,L=n.onDown,O=n.onChangeX,v=n.onChangeY,E=n.onChange,N=n.onToggleX,W=n.onToggleY,z=n.onHover,$=n.onHoverEnd,H=n.onMove,te=n.ignoreCheck,Y=n.isNormalizer,ce=n.onGestureStart,U=n.onGestureEnd,ve=n.onWheel,Re=n.onEnable,Ne=n.onDisable,ne=n.onClick,oe=n.scrollSpeed,fe=n.capture,ge=n.allowClicks,Ce=n.lockAxis,Pe=n.onLockAxis;this.target=o=Xn(o)||Wr,this.vars=n,d&&(d=xn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,oe=oe||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ai.getComputedStyle(da).lineHeight)||22);var Je,je,Ve,F,dt,qe,Ze,X=this,rt=0,He=0,I=n.passive||!h&&n.passive!==!1,A=Qr(o,Vn),Z=Qr(o,hn),re=A(),de=Z(),ie=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Ci[0]==="pointerdown",Le=mo(o),_e=o.ownerDocument||Vr,Me=[0,0,0],Ye=[0,0,0],me=0,Ae=function(){return me=po()},De=function(Oe,vt){return(X.event=Oe)&&d&&tw(Oe.target,d)||vt&&ie&&Oe.pointerType!=="touch"||te&&te(Oe,vt)},Ue=function(){X._vx.reset(),X._vy.reset(),je.pause(),u&&u(X)},xe=function(){var Oe=X.deltaX=Ip(Me),vt=X.deltaY=Ip(Ye),Te=Math.abs(Oe)>=i,We=Math.abs(vt)>=i;E&&(Te||We)&&E(X,Oe,vt,Me,Ye),Te&&(D&&X.deltaX>0&&D(X),P&&X.deltaX<0&&P(X),O&&O(X),N&&X.deltaX<0!=rt<0&&N(X),rt=X.deltaX,Me[0]=Me[1]=Me[2]=0),We&&(L&&X.deltaY>0&&L(X),w&&X.deltaY<0&&w(X),v&&v(X),W&&X.deltaY<0!=He<0&&W(X),He=X.deltaY,Ye[0]=Ye[1]=Ye[2]=0),(F||Ve)&&(H&&H(X),Ve&&(p&&Ve===1&&p(X),S&&S(X),Ve=0),F=!1),qe&&!(qe=!1)&&Pe&&Pe(X),dt&&(ve(X),dt=!1),Je=0},$e=function(Oe,vt,Te){Me[Te]+=Oe,Ye[Te]+=vt,X._vx.update(Oe),X._vy.update(vt),l?Je||(Je=requestAnimationFrame(xe)):xe()},ze=function(Oe,vt){Ce&&!Ze&&(X.axis=Ze=Math.abs(Oe)>Math.abs(vt)?"x":"y",qe=!0),Ze!=="y"&&(Me[2]+=Oe,X._vx.update(Oe,!0)),Ze!=="x"&&(Ye[2]+=vt,X._vy.update(vt,!0)),l?Je||(Je=requestAnimationFrame(xe)):xe()},Ke=function(Oe){if(!De(Oe,1)){Oe=Ka(Oe,h);var vt=Oe.clientX,Te=Oe.clientY,We=vt-X.x,Ge=Te-X.y,Qe=X.isDragging;X.x=vt,X.y=Te,(Qe||(We||Ge)&&(Math.abs(X.startX-vt)>=r||Math.abs(X.startY-Te)>=r))&&(Ve||(Ve=Qe?2:1),Qe||(X.isDragging=!0),ze(We,Ge))}},G=X.onPress=function(ke){De(ke,1)||ke&&ke.button||(X.axis=Ze=null,je.pause(),X.isPressed=!0,ke=Ka(ke),rt=He=0,X.startX=X.x=ke.clientX,X.startY=X.y=ke.clientY,X._vx.reset(),X._vy.reset(),Nn(Y?o:_e,Ci[1],Ke,I,!0),X.deltaX=X.deltaY=0,y&&y(X))},he=X.onRelease=function(ke){if(!De(ke,1)){Un(Y?o:_e,Ci[1],Ke,!0);var Oe=!isNaN(X.y-X.startY),vt=X.isDragging,Te=vt&&(Math.abs(X.x-X.startX)>3||Math.abs(X.y-X.startY)>3),We=Ka(ke);!Te&&Oe&&(X._vx.reset(),X._vy.reset(),h&&ge&&xn.delayedCall(.08,function(){if(po()-me>300&&!ke.defaultPrevented){if(ke.target.click)ke.target.click();else if(_e.createEvent){var Ge=_e.createEvent("MouseEvents");Ge.initMouseEvent("click",!0,!0,ai,1,We.screenX,We.screenY,We.clientX,We.clientY,!1,!1,!1,!1,0,null),ke.target.dispatchEvent(Ge)}}})),X.isDragging=X.isGesturing=X.isPressed=!1,u&&vt&&!Y&&je.restart(!0),Ve&&xe(),m&&vt&&m(X),M&&M(X,Te)}},V=function(Oe){return Oe.touches&&Oe.touches.length>1&&(X.isGesturing=!0)&&ce(Oe,X.isDragging)},se=function(){return(X.isGesturing=!1)||U(X)},ye=function(Oe){if(!De(Oe)){var vt=A(),Te=Z();$e((vt-re)*oe,(Te-de)*oe,1),re=vt,de=Te,u&&je.restart(!0)}},Se=function(Oe){if(!De(Oe)){Oe=Ka(Oe,h),ve&&(dt=!0);var vt=(Oe.deltaMode===1?c:Oe.deltaMode===2?ai.innerHeight:1)*_;$e(Oe.deltaX*vt,Oe.deltaY*vt,0),u&&!Y&&je.restart(!0)}},et=function(Oe){if(!De(Oe)){var vt=Oe.clientX,Te=Oe.clientY,We=vt-X.x,Ge=Te-X.y;X.x=vt,X.y=Te,F=!0,u&&je.restart(!0),(We||Ge)&&ze(We,Ge)}},Ct=function(Oe){X.event=Oe,z(X)},Ft=function(Oe){X.event=Oe,$(X)},lt=function(Oe){return De(Oe)||Ka(Oe,h)&&ne(X)};je=X._dc=xn.delayedCall(f||.25,Ue).pause(),X.deltaX=X.deltaY=0,X._vx=Iu(0,50,!0),X._vy=Iu(0,50,!0),X.scrollX=A,X.scrollY=Z,X.isDragging=X.isGesturing=X.isPressed=!1,Vg(this),X.enable=function(ke){return X.isEnabled||(Nn(Le?_e:o,"scroll",Lu),a.indexOf("scroll")>=0&&Nn(Le?_e:o,"scroll",ye,I,fe),a.indexOf("wheel")>=0&&Nn(o,"wheel",Se,I,fe),(a.indexOf("touch")>=0&&Gg||a.indexOf("pointer")>=0)&&(Nn(o,Ci[0],G,I,fe),Nn(_e,Ci[2],he),Nn(_e,Ci[3],he),ge&&Nn(o,"click",Ae,!0,!0),ne&&Nn(o,"click",lt),ce&&Nn(_e,"gesturestart",V),U&&Nn(_e,"gestureend",se),z&&Nn(o,ps+"enter",Ct),$&&Nn(o,ps+"leave",Ft),H&&Nn(o,ps+"move",et)),X.isEnabled=!0,X.isDragging=X.isGesturing=X.isPressed=F=Ve=!1,X._vx.reset(),X._vy.reset(),re=A(),de=Z(),ke&&ke.type&&G(ke),Re&&Re(X)),X},X.disable=function(){X.isEnabled&&(aa.filter(function(ke){return ke!==X&&mo(ke.target)}).length||Un(Le?_e:o,"scroll",Lu),X.isPressed&&(X._vx.reset(),X._vy.reset(),Un(Y?o:_e,Ci[1],Ke,!0)),Un(Le?_e:o,"scroll",ye,fe),Un(o,"wheel",Se,fe),Un(o,Ci[0],G,fe),Un(_e,Ci[2],he),Un(_e,Ci[3],he),Un(o,"click",Ae,!0),Un(o,"click",lt),Un(_e,"gesturestart",V),Un(_e,"gestureend",se),Un(o,ps+"enter",Ct),Un(o,ps+"leave",Ft),Un(o,ps+"move",et),X.isEnabled=X.isPressed=X.isDragging=!1,Ne&&Ne(X))},X.kill=X.revert=function(){X.disable();var ke=aa.indexOf(X);ke>=0&&aa.splice(ke,1),mr===X&&(mr=0)},aa.push(X),Y&&mo(o)&&(mr=X),X.enable(b)},$E(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();en.version="3.15.0";en.create=function(s){return new en(s)};en.register=jg;en.getAll=function(){return aa.slice()};en.getById=function(s){return aa.filter(function(e){return e.vars.id===s})[0]};Wg()&&xn.registerPlugin(en);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ie,$s,pt,Pt,ri,Rt,Of,fl,Fo,go,to,Sc,En,wl,Uu,kn,Up,Np,ea,Yg,Sh,Kg,Fn,Nu,Zg,Qg,Nr,Ou,Ff,ma,kf,_o,Fu,Mh,Mc=1,wn=Date.now,Th=wn(),Mi=0,no=0,Op=function(e,t,n){var i=ni(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Fp=function(e,t){return t&&(!ni(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},nw=function s(){return no&&requestAnimationFrame(s)},kp=function(){return wl=1},Bp=function(){return wl=0},zi=function(e){return e},io=function(e){return Math.round(e*1e5)/1e5||0},Jg=function(){return typeof window<"u"},$g=function(){return Ie||Jg()&&(Ie=window.gsap)&&Ie.registerPlugin&&Ie},As=function(e){return!!~Of.indexOf(e)},e_=function(e){return(e==="Height"?kf:pt["inner"+e])||ri["client"+e]||Rt["client"+e]},t_=function(e){return jr(e,"getBoundingClientRect")||(As(e)?function(){return Kc.width=pt.innerWidth,Kc.height=kf,Kc}:function(){return dr(e)})},iw=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=jr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?e_(r):e["client"+r])||0}},rw=function(e,t){return!t||~Yi.indexOf(e)?t_(e):function(){return Kc}},ji=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=jr(e,n))?a()-t_(e)()[r]:As(e)?(ri[n]||Rt[n])-e_(i):e[n]-e["offset"+i])},Tc=function(e,t){for(var n=0;n<ea.length;n+=3)(!t||~t.indexOf(ea[n+1]))&&e(ea[n],ea[n+1],ea[n+2])},ni=function(e){return typeof e=="string"},Pn=function(e){return typeof e=="function"},ro=function(e){return typeof e=="number"},ms=function(e){return typeof e=="object"},Za=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Zs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},Qs=Math.abs,n_="left",i_="top",Bf="right",zf="bottom",Ts="width",Es="height",bo="Right",vo="Left",xo="Top",yo="Bottom",sn="padding",bi="margin",Ua="Width",Gf="Height",ln="px",vi=function(e){return pt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},sw=function(e){var t=vi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},zp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},dr=function(e,t){var n=t&&vi(e)[Uu]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ie.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},dl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},r_=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},aw=function(e){return function(t){return Ie.utils.snap(r_(e),t)}},Hf=function(e){var t=Ie.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},ow=function(e){return function(t,n){return Hf(r_(e))(t,n.direction)}},Ec=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},gn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},mn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},wc=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Gp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Ac={toggleActions:"play",anticipatePin:0},pl={top:0,left:0,center:.5,bottom:1,right:1},Xc=function(e,t){if(ni(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in pl?pl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Rc=function(e,t,n,i,r,a,o,c){var l=r.startColor,h=r.endColor,u=r.fontSize,f=r.indent,d=r.fontWeight,_=Pt.createElement("div"),b=As(n)||jr(n,"pinType")==="fixed",p=e.indexOf("scroller")!==-1,m=b?Rt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,y=S?l:h,M="border-color:"+y+";font-size:"+u+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((p||c)&&b?"fixed;":"absolute;"),(p||c||!b)&&(M+=(i===hn?Bf:zf)+":"+(a+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(_,m.children[0]):m.appendChild(_),_._offset=_["offset"+i.op.d2],qc(_,0,i,S),_},qc=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ua]=1,r["border"+o+Ua]=0,r[n.p]=t+"px",Ie.set(e,r)},ut=[],ku={},ko,Hp=function(){return wn()-Mi>34&&(ko||(ko=requestAnimationFrame(br)))},Js=function(){(!Fn||!Fn.isPressed||Fn.startX>Rt.clientWidth)&&(mt.cache++,Fn?ko||(ko=requestAnimationFrame(br)):br(),Mi||Cs("scrollStart"),Mi=wn())},Eh=function(){Qg=pt.innerWidth,Zg=pt.innerHeight},so=function(e){mt.cache++,(e===!0||!En&&!Kg&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Nu||Qg!==pt.innerWidth||Math.abs(pt.innerHeight-Zg)>pt.innerHeight*.25))&&fl.restart(!0)},Rs={},cw=[],s_=function s(){return mn(ft,"scrollEnd",s)||vs(!0)},Cs=function(e){return Rs[e]&&Rs[e].map(function(t){return t()})||cw},ti=[],a_=function(e){for(var t=0;t<ti.length;t+=5)(!e||ti[t+4]&&ti[t+4].query===e)&&(ti[t].style.cssText=ti[t+1],ti[t].getBBox&&ti[t].setAttribute("transform",ti[t+2]||""),ti[t+3].uncache=1)},o_=function(){return mt.forEach(function(e){return Pn(e)&&++e.cacheID&&(e.rec=e())})},Vf=function(e,t){var n;for(kn=0;kn<ut.length;kn++)n=ut[kn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));_o=!0,t&&a_(t),t||Cs("revert")},c_=function(e,t){mt.cache++,(t||!Bn)&&mt.forEach(function(n){return Pn(n)&&n.cacheID++&&(n.rec=0)}),ni(e)&&(pt.history.scrollRestoration=Ff=e)},Bn,ws=0,Vp,lw=function(){if(Vp!==ws){var e=Vp=ws;requestAnimationFrame(function(){return e===ws&&vs(!0)})}},l_=function(){Rt.appendChild(ma),kf=!Fn&&ma.offsetHeight||pt.innerHeight,Rt.removeChild(ma)},Wp=function(e){return Fo(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vs=function(e,t){if(ri=Pt.documentElement,Rt=Pt.body,Of=[pt,Pt,ri,Rt],Mi&&!e&&!_o){gn(ft,"scrollEnd",s_);return}l_(),Bn=ft.isRefreshing=!0,_o||o_();var n=Cs("refreshInit");Yg&&ft.sort(),t||Vf(),mt.forEach(function(i){Pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),_o=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),Fu=1,Wp(!0),ut.forEach(function(i){var r=ji(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),Wp(!1),Fu=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),mt.forEach(function(i){Pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),c_(Ff,1),fl.pause(),ws++,Bn=2,br(2),ut.forEach(function(i){return Pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Bn=ft.isRefreshing=!1,Cs("refresh")},Bu=0,jc=1,So,br=function(e){if(e===2||!Bn&&!_o){ft.isUpdating=!0,So&&So.update(0);var t=ut.length,n=wn(),i=n-Th>=50,r=t&&ut[0].scroll();if(jc=Bu>r?-1:1,Bn||(Bu=r),i&&(Mi&&!wl&&n-Mi>200&&(Mi=0,Cs("scrollEnd")),to=Th,Th=n),jc<0){for(kn=t;kn-- >0;)ut[kn]&&ut[kn].update(0,i);jc=1}else for(kn=0;kn<t;kn++)ut[kn]&&ut[kn].update(0,i);ft.isUpdating=!1}ko=0},zu=[n_,i_,zf,Bf,bi+yo,bi+bo,bi+xo,bi+vo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Yc=zu.concat([Ts,Es,"boxSizing","max"+Ua,"max"+Gf,"position",bi,sn,sn+xo,sn+bo,sn+yo,sn+vo]),hw=function(e,t,n){ga(n);var i=e._gsap;if(i.spacerIsNative)ga(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},wh=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=zu.length,a=t.style,o=e.style,c;r--;)c=zu[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[zf]=o[Bf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[Ts]=dl(e,Vn)+ln,a[Es]=dl(e,hn)+ln,a[sn]=o[bi]=o[i_]=o[n_]="0",ga(i),o[Ts]=o["max"+Ua]=n[Ts],o[Es]=o["max"+Gf]=n[Es],o[sn]=n[sn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},uw=/([A-Z])/g,ga=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||Ie.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(uw,"-$1").toLowerCase())}},Cc=function(e){for(var t=Yc.length,n=e.style,i=[],r=0;r<t;r++)i.push(Yc[r],n[Yc[r]]);return i.t=e,i},fw=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Kc={left:0,top:0},Xp=function(e,t,n,i,r,a,o,c,l,h,u,f,d,_){Pn(e)&&(e=e(c)),ni(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Xc("0"+e.substr(3),n):0));var b=d?d.time():0,p,m,S;if(d&&d.seek(0),isNaN(e)||(e=+e),ro(e))d&&(e=Ie.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&qc(o,n,i,!0);else{Pn(t)&&(t=t(c));var y=(e||"0").split(" "),M,D,P,w;S=Xn(t,c)||Rt,M=dr(S)||{},(!M||!M.left&&!M.top)&&vi(S).display==="none"&&(w=S.style.display,S.style.display="block",M=dr(S),w?S.style.display=w:S.style.removeProperty("display")),D=Xc(y[0],M[i.d]),P=Xc(y[1]||"0",n),e=M[i.p]-l[i.p]-h+D+r-P,o&&qc(o,P,i,n-P<20||o._isStart&&P>20),n-=n-P}if(_&&(c[_]=e||-.001,e<0&&(e=0)),a){var L=e+n,O=a._isStart;p="scroll"+i.d2,qc(a,L,i,O&&L>20||!O&&(u?Math.max(Rt[p],ri[p]):a.parentNode[p])<=L+1),u&&(l=dr(o),u&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+ln))}return d&&S&&(p=dr(S),d.seek(f),m=dr(S),d._caScrollDist=p[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)},dw=/(webkit|moz|length|cssText|inset)/i,qp=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===Rt){e._stOrig=r.cssText,o=vi(e);for(a in o)!+a&&!dw.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;Ie.core.getCache(e).uncache=1,t.appendChild(e)}},h_=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},Pc=function(e,t,n){var i={};i[t.p]="+="+n,Ie.set(e,i)},jp=function(e,t){var n=Qr(e,t),i="_scroll"+t.p2,r=function a(o,c,l,h,u){var f=a.tween,d=c.onComplete,_={};l=l||n();var b=h_(n,l,function(){f.kill(),a.tween=0});return u=h&&u||0,h=h||o-l,f&&f.kill(),c[i]=o,c.inherit=!1,c.modifiers=_,_[i]=function(){return b(l+h*f.ratio+u*f.ratio*f.ratio)},c.onUpdate=function(){mt.cache++,a.tween&&br()},c.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=Ie.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},gn(e,"wheel",n.wheelHandler),ft.isTouch&&gn(e,"touchmove",n.wheelHandler),r},ft=function(){function s(t,n){$s||s.register(Ie)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Ou(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!no){this.update=this.refresh=this.kill=zi;return}n=zp(ni(n)||ro(n)||n.nodeType?{trigger:n}:n,Ac);var r=n,a=r.onUpdate,o=r.toggleClass,c=r.id,l=r.onToggle,h=r.onRefresh,u=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,b=r.invalidateOnRefresh,p=r.anticipatePin,m=r.onScrubComplete,S=r.onSnapComplete,y=r.once,M=r.snap,D=r.pinReparent,P=r.pinSpacer,w=r.containerAnimation,L=r.fastScrollEnd,O=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Vn:hn,E=!u&&u!==0,N=Xn(n.scroller||pt),W=Ie.core.getCache(N),z=As(N),$=("pinType"in n?n.pinType:jr(N,"pinType")||z&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],te=E&&n.toggleActions.split(" "),Y="markers"in n?n.markers:Ac.markers,ce=z?0:parseFloat(vi(N)["border"+v.p2+Ua])||0,U=this,ve=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Re=iw(N,z,v),Ne=rw(N,z),ne=0,oe=0,fe=0,ge=Qr(N,v),Ce,Pe,Je,je,Ve,F,dt,qe,Ze,X,rt,He,I,A,Z,re,de,ie,Le,_e,Me,Ye,me,Ae,De,Ue,xe,$e,ze,Ke,G,he,V,se,ye,Se,et,Ct,Ft;if(U._startClamp=U._endClamp=!1,U._dir=v,p*=45,U.scroller=N,U.scroll=w?w.time.bind(w):ge,je=ge(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(Yg=1,n.refreshPriority===-9999&&(So=U)),W.tweenScroll=W.tweenScroll||{top:jp(N,hn),left:jp(N,Vn)},U.tweenTo=Ce=W.tweenScroll[v.p],U.scrubDuration=function(Te){V=ro(Te)&&Te,V?he?he.duration(Te):he=Ie.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:V,paused:!0,onComplete:function(){return m&&m(U)}}):(he&&he.progress(1).kill(),he=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(u),Ke=0,c||(c=i.vars.id)),M&&((!ms(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Rt.style&&Ie.set(z?[Rt,ri]:N,{scrollBehavior:"auto"}),mt.forEach(function(Te){return Pn(Te)&&Te.target===(z?Pt.scrollingElement||ri:N)&&(Te.smooth=!1)}),Je=Pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?aw(i):M.snapTo==="labelsDirectional"?ow(i):M.directional!==!1?function(Te,We){return Hf(M.snapTo)(Te,wn()-oe<500?0:We.direction)}:Ie.utils.snap(M.snapTo),se=M.duration||{min:.1,max:2},se=ms(se)?go(se.min,se.max):go(se,se),ye=Ie.delayedCall(M.delay||V/2||.1,function(){var Te=ge(),We=wn()-oe<500,Ge=Ce.tween;if((We||Math.abs(U.getVelocity())<10)&&!Ge&&!wl&&ne!==Te){var Qe=(Te-F)/A,Gt=i&&!E?i.totalProgress():Qe,nt=We?0:(Gt-G)/(wn()-to)*1e3||0,kt=Ie.utils.clamp(-Qe,1-Qe,Qs(nt/2)*nt/.185),Wt=Qe+(M.inertia===!1?0:kt),It,wt,Tt=M,Ln=Tt.onStart,Mt=Tt.onInterrupt,C=Tt.onComplete;if(It=Je(Wt,U),ro(It)||(It=Wt),wt=Math.max(0,Math.round(F+It*A)),Te<=dt&&Te>=F&&wt!==Te){if(Ge&&!Ge._initted&&Ge.data<=Qs(wt-Te))return;M.inertia===!1&&(kt=It-Qe),Ce(wt,{duration:se(Qs(Math.max(Qs(Wt-Gt),Qs(It-Gt))*.185/nt/.05||0)),ease:M.ease||"power3",data:Qs(wt-Te),onInterrupt:function(){return ye.restart(!0)&&Mt&&Zs(U,Mt)},onComplete:function(){U.update(),ne=ge(),i&&!E&&(he?he.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),Ke=G=i&&!E?i.totalProgress():U.progress,S&&S(U),C&&Zs(U,C)}},Te,kt*A,wt-Te-kt*A),Ln&&Zs(U,Ln,Ce.tween)}}else U.isActive&&ne!==Te&&ye.restart(!0)}).pause()),c&&(ku[c]=U),f=U.trigger=Xn(f||d!==!0&&d),Ft=f&&f._gsap&&f._gsap.stRevert,Ft&&(Ft=Ft(U)),d=d===!0?f:Xn(d),ni(o)&&(o={targets:f,className:o}),d&&(_===!1||_===bi||(_=!_&&d.parentNode&&d.parentNode.style&&vi(d.parentNode).display==="flex"?!1:sn),U.pin=d,Pe=Ie.core.getCache(d),Pe.spacer?Z=Pe.pinState:(P&&(P=Xn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Pe.spacerIsNative=!!P,P&&(Pe.spacerState=Cc(P))),Pe.spacer=ie=P||Pt.createElement("div"),ie.classList.add("pin-spacer"),c&&ie.classList.add("pin-spacer-"+c),Pe.pinState=Z=Cc(d)),n.force3D!==!1&&Ie.set(d,{force3D:!0}),U.spacer=ie=Pe.spacer,ze=vi(d),Ae=ze[_+v.os2],_e=Ie.getProperty(d),Me=Ie.quickSetter(d,v.a,ln),wh(d,ie,ze),de=Cc(d)),Y){He=ms(Y)?zp(Y,Gp):Gp,X=Rc("scroller-start",c,N,v,He,0),rt=Rc("scroller-end",c,N,v,He,0,X),Le=X["offset"+v.op.d2];var lt=Xn(jr(N,"content")||N);qe=this.markerStart=Rc("start",c,lt,v,He,Le,0,w),Ze=this.markerEnd=Rc("end",c,lt,v,He,Le,0,w),w&&(Ct=Ie.quickSetter([qe,Ze],v.a,ln)),!$&&!(Yi.length&&jr(N,"fixedMarkers")===!0)&&(sw(z?Rt:N),Ie.set([X,rt],{force3D:!0}),Ue=Ie.quickSetter(X,v.a,ln),$e=Ie.quickSetter(rt,v.a,ln))}if(w){var ke=w.vars.onUpdate,Oe=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){U.update(0,0,1),ke&&ke.apply(w,Oe||[])})}if(U.previous=function(){return ut[ut.indexOf(U)-1]},U.next=function(){return ut[ut.indexOf(U)+1]},U.revert=function(Te,We){if(!We)return U.kill(!0);var Ge=Te!==!1||!U.enabled,Qe=En;Ge!==U.isReverted&&(Ge&&(Se=Math.max(ge(),U.scroll.rec||0),fe=U.progress,et=i&&i.progress()),qe&&[qe,Ze,X,rt].forEach(function(Gt){return Gt.style.display=Ge?"none":"block"}),Ge&&(En=U,U.update(Ge)),d&&(!D||!U.isActive)&&(Ge?hw(d,ie,Z):wh(d,ie,vi(d),De)),Ge||U.update(Ge),En=Qe,U.isReverted=Ge)},U.refresh=function(Te,We,Ge,Qe){if(!((En||!U.enabled)&&!We)){if(d&&Te&&Mi){gn(s,"scrollEnd",s_);return}!Bn&&ve&&ve(U),En=U,Ce.tween&&!Ge&&(Ce.tween.kill(),Ce.tween=0),he&&he.pause(),b&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ue){return ue.vars.immediateRender&&ue.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var Gt=Re(),nt=Ne(),kt=w?w.duration():ji(N,v),Wt=A<=.01||!A,It=0,wt=Qe||0,Tt=ms(Ge)?Ge.end:n.end,Ln=n.endTrigger||f,Mt=ms(Ge)?Ge.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),C=U.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,U),g=f&&Math.max(0,ut.indexOf(U))||0,x=g,T,R,B,k,q,Q,J,ee,K,le,pe,be,we;for(Y&&ms(Ge)&&(be=Ie.getProperty(X,v.p),we=Ie.getProperty(rt,v.p));x-- >0;)Q=ut[x],Q.end||Q.refresh(0,1)||(En=U),J=Q.pin,J&&(J===f||J===d||J===C)&&!Q.isReverted&&(le||(le=[]),le.unshift(Q),Q.revert(!0,!0)),Q!==ut[x]&&(g--,x--);for(Pn(Mt)&&(Mt=Mt(U)),Mt=Op(Mt,"start",U),F=Xp(Mt,f,Gt,v,ge(),qe,X,U,nt,ce,$,kt,w,U._startClamp&&"_startClamp")||(d?-.001:0),Pn(Tt)&&(Tt=Tt(U)),ni(Tt)&&!Tt.indexOf("+=")&&(~Tt.indexOf(" ")?Tt=(ni(Mt)?Mt.split(" ")[0]:"")+Tt:(It=Xc(Tt.substr(2),Gt),Tt=ni(Mt)?Mt:(w?Ie.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,F):F)+It,Ln=f)),Tt=Op(Tt,"end",U),dt=Math.max(F,Xp(Tt||(Ln?"100% 0":kt),Ln,Gt,v,ge()+It,Ze,rt,U,nt,ce,$,kt,w,U._endClamp&&"_endClamp"))||-.001,It=0,x=g;x--;)Q=ut[x]||{},J=Q.pin,J&&Q.start-Q._pinPush<=F&&!w&&Q.end>0&&(T=Q.end-(U._startClamp?Math.max(0,Q.start):Q.start),(J===f&&Q.start-Q._pinPush<F||J===C)&&isNaN(Mt)&&(It+=T*(1-Q.progress)),J===d&&(wt+=T));if(F+=It,dt+=It,U._startClamp&&(U._startClamp+=It),U._endClamp&&!Bn&&(U._endClamp=dt||-.001,dt=Math.min(dt,ji(N,v))),A=dt-F||(F-=.01)&&.001,Wt&&(fe=Ie.utils.clamp(0,1,Ie.utils.normalize(F,dt,Se))),U._pinPush=wt,qe&&It&&(T={},T[v.a]="+="+It,C&&(T[v.p]="-="+ge()),Ie.set([qe,Ze],T)),d&&!(Fu&&U.end>=ji(N,v)))T=vi(d),k=v===hn,B=ge(),Ye=parseFloat(_e(v.a))+wt,!kt&&dt>1&&(pe=(z?Pt.scrollingElement||ri:N).style,pe={style:pe,value:pe["overflow"+v.a.toUpperCase()]},z&&vi(Rt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+v.a.toUpperCase()]="scroll")),wh(d,ie,T),de=Cc(d),R=dr(d,!0),ee=$&&Qr(N,k?Vn:hn)(),_?(De=[_+v.os2,A+wt+ln],De.t=ie,x=_===sn?dl(d,v)+A+wt:0,x&&(De.push(v.d,x+ln),ie.style.flexBasis!=="auto"&&(ie.style.flexBasis=x+ln)),ga(De),C&&ut.forEach(function(ue){ue.pin===C&&ue.vars.pinSpacing!==!1&&(ue._subPinOffset=!0)}),$&&ge(Se)):(x=dl(d,v),x&&ie.style.flexBasis!=="auto"&&(ie.style.flexBasis=x+ln)),$&&(q={top:R.top+(k?B-F:ee)+ln,left:R.left+(k?ee:B-F)+ln,boxSizing:"border-box",position:"fixed"},q[Ts]=q["max"+Ua]=Math.ceil(R.width)+ln,q[Es]=q["max"+Gf]=Math.ceil(R.height)+ln,q[bi]=q[bi+xo]=q[bi+bo]=q[bi+yo]=q[bi+vo]="0",q[sn]=T[sn],q[sn+xo]=T[sn+xo],q[sn+bo]=T[sn+bo],q[sn+yo]=T[sn+yo],q[sn+vo]=T[sn+vo],re=fw(Z,q,D),Bn&&ge(0)),i?(K=i._initted,Sh(1),i.render(i.duration(),!0,!0),me=_e(v.a)-Ye+A+wt,xe=Math.abs(A-me)>1,$&&xe&&re.splice(re.length-2,2),i.render(0,!0,!0),K||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Sh(0)):me=A,pe&&(pe.value?pe.style["overflow"+v.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+v.a));else if(f&&ge()&&!w)for(R=f.parentNode;R&&R!==Rt;)R._pinOffset&&(F-=R._pinOffset,dt-=R._pinOffset),R=R.parentNode;le&&le.forEach(function(ue){return ue.revert(!1,!0)}),U.start=F,U.end=dt,je=Ve=Bn?Se:ge(),!w&&!Bn&&(je<Se&&ge(Se),U.scroll.rec=0),U.revert(!1,!0),oe=wn(),ye&&(ne=-1,ye.restart(!0)),En=0,i&&E&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(Wt||fe!==U.progress||w||b||i&&!i._initted)&&(i&&!E&&(i._initted||fe||i.vars.immediateRender!==!1)&&i.totalProgress(w&&F<-.001&&!fe?Ie.utils.normalize(F,dt,0):fe,!0),U.progress=Wt||(je-F)/A===fe?0:fe),d&&_&&(ie._pinOffset=Math.round(U.progress*me)),he&&he.invalidate(),isNaN(be)||(be-=Ie.getProperty(X,v.p),we-=Ie.getProperty(rt,v.p),Pc(X,v,be),Pc(qe,v,be-(Qe||0)),Pc(rt,v,we),Pc(Ze,v,we-(Qe||0))),Wt&&!Bn&&U.update(),h&&!Bn&&!I&&(I=!0,h(U),I=!1)}},U.getVelocity=function(){return(ge()-Ve)/(wn()-to)*1e3||0},U.endAnimation=function(){Za(U.callbackAnimation),i&&(he?he.progress(1):i.paused()?E||Za(i,U.direction<0,1):Za(i,i.reversed()))},U.labelToScroll=function(Te){return i&&i.labels&&(F||U.refresh()||F)+i.labels[Te]/i.duration()*A||0},U.getTrailing=function(Te){var We=ut.indexOf(U),Ge=U.direction>0?ut.slice(0,We).reverse():ut.slice(We+1);return(ni(Te)?Ge.filter(function(Qe){return Qe.vars.preventOverlaps===Te}):Ge).filter(function(Qe){return U.direction>0?Qe.end<=F:Qe.start>=dt})},U.update=function(Te,We,Ge){if(!(w&&!Ge&&!Te)){var Qe=Bn===!0?Se:U.scroll(),Gt=Te?0:(Qe-F)/A,nt=Gt<0?0:Gt>1?1:Gt||0,kt=U.progress,Wt,It,wt,Tt,Ln,Mt,C,g;if(We&&(Ve=je,je=w?ge():Qe,M&&(G=Ke,Ke=i&&!E?i.totalProgress():nt)),p&&d&&!En&&!Mc&&Mi&&(!nt&&F<Qe+(Qe-Ve)/(wn()-to)*p?nt=1e-4:nt===1&&dt>Qe+(Qe-Ve)/(wn()-to)*p&&(nt=.9999)),nt!==kt&&U.enabled){if(Wt=U.isActive=!!nt&&nt<1,It=!!kt&&kt<1,Mt=Wt!==It,Ln=Mt||!!nt!=!!kt,U.direction=nt>kt?1:-1,U.progress=nt,Ln&&!En&&(wt=nt&&!kt?0:nt===1?1:kt===1?2:3,E&&(Tt=!Mt&&te[wt+1]!=="none"&&te[wt+1]||te[wt],g=i&&(Tt==="complete"||Tt==="reset"||Tt in i))),O&&(Mt||g)&&(g||u||!i)&&(Pn(O)?O(U):U.getTrailing(O).forEach(function(B){return B.endAnimation()})),E||(he&&!En&&!Mc?(he._dp._time-he._start!==he._time&&he.render(he._dp._time-he._start),he.resetTo?he.resetTo("totalProgress",nt,i._tTime/i._tDur):(he.vars.totalProgress=nt,he.invalidate().restart())):i&&i.totalProgress(nt,!!(En&&(oe||Te)))),d){if(Te&&_&&(ie.style[_+v.os2]=Ae),!$)Me(io(Ye+me*nt));else if(Ln){if(C=!Te&&nt>kt&&dt+1>Qe&&Qe+1>=ji(N,v),D)if(!Te&&(Wt||C)){var x=dr(d,!0),T=Qe-F;qp(d,Rt,x.top+(v===hn?T:0)+ln,x.left+(v===hn?0:T)+ln)}else qp(d,ie);ga(Wt||C?re:de),xe&&nt<1&&Wt||Me(Ye+(nt===1&&!C?me:0))}}M&&!Ce.tween&&!En&&!Mc&&ye.restart(!0),o&&(Mt||y&&nt&&(nt<1||!Mh))&&Fo(o.targets).forEach(function(B){return B.classList[Wt||y?"add":"remove"](o.className)}),a&&!E&&!Te&&a(U),Ln&&!En?(E&&(g&&(Tt==="complete"?i.pause().totalProgress(1):Tt==="reset"?i.restart(!0).pause():Tt==="restart"?i.restart(!0):i[Tt]()),a&&a(U)),(Mt||!Mh)&&(l&&Mt&&Zs(U,l),H[wt]&&Zs(U,H[wt]),y&&(nt===1?U.kill(!1,1):H[wt]=0),Mt||(wt=nt===1?1:3,H[wt]&&Zs(U,H[wt]))),L&&!Wt&&Math.abs(U.getVelocity())>(ro(L)?L:2500)&&(Za(U.callbackAnimation),he?he.progress(1):Za(i,Tt==="reverse"?1:!nt,1))):E&&a&&!En&&a(U)}if($e){var R=w?Qe/w.duration()*(w._caScrollDist||0):Qe;Ue(R+(X._isFlipped?1:0)),$e(R)}Ct&&Ct(-Qe/w.duration()*(w._caScrollDist||0))}},U.enable=function(Te,We){U.enabled||(U.enabled=!0,gn(N,"resize",so),z||gn(N,"scroll",Js),ve&&gn(s,"refreshInit",ve),Te!==!1&&(U.progress=fe=0,je=Ve=ne=ge()),We!==!1&&U.refresh())},U.getTween=function(Te){return Te&&Ce?Ce.tween:he},U.setPositions=function(Te,We,Ge,Qe){if(w){var Gt=w.scrollTrigger,nt=w.duration(),kt=Gt.end-Gt.start;Te=Gt.start+kt*Te/nt,We=Gt.start+kt*We/nt}U.refresh(!1,!1,{start:Fp(Te,Ge&&!!U._startClamp),end:Fp(We,Ge&&!!U._endClamp)},Qe),U.update()},U.adjustPinSpacing=function(Te){if(De&&Te){var We=De.indexOf(v.d)+1;De[We]=parseFloat(De[We])+Te+ln,De[1]=parseFloat(De[1])+Te+ln,ga(De)}},U.disable=function(Te,We){if(Te!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,We||he&&he.pause(),Se=0,Pe&&(Pe.uncache=1),ve&&mn(s,"refreshInit",ve),ye&&(ye.pause(),Ce.tween&&Ce.tween.kill()&&(Ce.tween=0)),!z)){for(var Ge=ut.length;Ge--;)if(ut[Ge].scroller===N&&ut[Ge]!==U)return;mn(N,"resize",so),z||mn(N,"scroll",Js)}},U.kill=function(Te,We){U.disable(Te,We),he&&!We&&he.kill(),c&&delete ku[c];var Ge=ut.indexOf(U);Ge>=0&&ut.splice(Ge,1),Ge===kn&&jc>0&&kn--,Ge=0,ut.forEach(function(Qe){return Qe.scroller===U.scroller&&(Ge=1)}),Ge||Bn||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Te&&i.revert({kill:!1}),We||i.kill()),qe&&[qe,Ze,X,rt].forEach(function(Qe){return Qe.parentNode&&Qe.parentNode.removeChild(Qe)}),So===U&&(So=0),d&&(Pe&&(Pe.uncache=1),Ge=0,ut.forEach(function(Qe){return Qe.pin===d&&Ge++}),Ge||(Pe.spacer=0)),n.onKill&&n.onKill(U)},ut.push(U),U.enable(!1,!1),Ft&&Ft(U),i&&i.add&&!A){var vt=U.update;U.update=function(){U.update=vt,mt.cache++,F||dt||U.refresh()},Ie.delayedCall(.01,U.update),A=.01,F=dt=0}else U.refresh();d&&lw()},s.register=function(n){return $s||(Ie=n||$g(),Jg()&&window.document&&s.enable(),$s=no),$s},s.defaults=function(n){if(n)for(var i in n)Ac[i]=n[i];return Ac},s.disable=function(n,i){no=0,ut.forEach(function(a){return a[i?"kill":"disable"](n)}),mn(pt,"wheel",Js),mn(Pt,"scroll",Js),clearInterval(Sc),mn(Pt,"touchcancel",zi),mn(Rt,"touchstart",zi),Ec(mn,Pt,"pointerdown,touchstart,mousedown",kp),Ec(mn,Pt,"pointerup,touchend,mouseup",Bp),fl.kill(),Tc(mn);for(var r=0;r<mt.length;r+=3)wc(mn,mt[r],mt[r+1]),wc(mn,mt[r],mt[r+2])},s.enable=function(){if(pt=window,Pt=document,ri=Pt.documentElement,Rt=Pt.body,Ie){if(Fo=Ie.utils.toArray,go=Ie.utils.clamp,Ou=Ie.core.context||zi,Sh=Ie.core.suppressOverwrites||zi,Ff=pt.history.scrollRestoration||"auto",Bu=pt.pageYOffset||0,Ie.core.globals("ScrollTrigger",s),Rt){no=1,ma=document.createElement("div"),ma.style.height="100vh",ma.style.position="absolute",l_(),nw(),en.register(Ie),s.isTouch=en.isTouch,Nr=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Nu=en.isTouch===1,gn(pt,"wheel",Js),Of=[pt,Pt,ri,Rt],Ie.matchMedia?(s.matchMedia=function(h){var u=Ie.matchMedia(),f;for(f in h)u.add(f,h[f]);return u},Ie.addEventListener("matchMediaInit",function(){o_(),Vf()}),Ie.addEventListener("matchMediaRevert",function(){return a_()}),Ie.addEventListener("matchMedia",function(){vs(0,1),Cs("matchMedia")}),Ie.matchMedia().add("(orientation: portrait)",function(){return Eh(),Eh})):console.warn("Requires GSAP 3.11.0 or later"),Eh(),gn(Pt,"scroll",Js);var n=Rt.hasAttribute("style"),i=Rt.style,r=i.borderTopStyle,a=Ie.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=dr(Rt),hn.m=Math.round(o.top+hn.sc())||0,Vn.m=Math.round(o.left+Vn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Rt.setAttribute("style",""),Rt.removeAttribute("style")),Sc=setInterval(Hp,250),Ie.delayedCall(.5,function(){return Mc=0}),gn(Pt,"touchcancel",zi),gn(Rt,"touchstart",zi),Ec(gn,Pt,"pointerdown,touchstart,mousedown",kp),Ec(gn,Pt,"pointerup,touchend,mouseup",Bp),Uu=Ie.utils.checkPrefix("transform"),Yc.push(Uu),$s=wn(),fl=Ie.delayedCall(.2,vs).pause(),ea=[Pt,"visibilitychange",function(){var h=pt.innerWidth,u=pt.innerHeight;Pt.hidden?(Up=h,Np=u):(Up!==h||Np!==u)&&so()},Pt,"DOMContentLoaded",vs,pt,"load",vs,pt,"resize",so],Tc(gn),ut.forEach(function(h){return h.enable(0,1)}),c=0;c<mt.length;c+=3)wc(mn,mt[c],mt[c+1]),wc(mn,mt[c],mt[c+2])}else if(Pt){var l=function h(){s.enable(),Pt.removeEventListener("DOMContentLoaded",h)};Pt.addEventListener("DOMContentLoaded",l)}}},s.config=function(n){"limitCallbacks"in n&&(Mh=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Sc)||(Sc=i)&&setInterval(Hp,i),"ignoreMobileResize"in n&&(Nu=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(Tc(mn)||Tc(gn,n.autoRefreshEvents||"none"),Kg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Xn(n),a=mt.indexOf(r),o=As(r);~a&&mt.splice(a,o?6:2),i&&(o?Yi.unshift(pt,i,Rt,i,ri,i):Yi.unshift(r,i))},s.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(ni(n)?Xn(n):n).getBoundingClientRect(),o=a[r?Ts:Es]*i||0;return r?a.right-o>0&&a.left+o<pt.innerWidth:a.bottom-o>0&&a.top+o<pt.innerHeight},s.positionInViewport=function(n,i,r){ni(n)&&(n=Xn(n));var a=n.getBoundingClientRect(),o=a[r?Ts:Es],c=i==null?o/2:i in pl?pl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+c)/pt.innerWidth:(a.top+c)/pt.innerHeight},s.killAll=function(n){if(ut.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Rs.killAll||[];Rs={},i.forEach(function(r){return r()})}},s}();ft.version="3.15.0";ft.saveStyles=function(s){return s?Fo(s).forEach(function(e){if(e&&e.style){var t=ti.indexOf(e);t>=0&&ti.splice(t,5),ti.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ie.core.getCache(e),Ou())}}):ti};ft.revert=function(s,e){return Vf(!s,e)};ft.create=function(s,e){return new ft(s,e)};ft.refresh=function(s){return s?so(!0):($s||ft.register())&&vs(!0)};ft.update=function(s){return++mt.cache&&br(s===!0?2:0)};ft.clearScrollMemory=c_;ft.maxScroll=function(s,e){return ji(s,e?Vn:hn)};ft.getScrollFunc=function(s,e){return Qr(Xn(s),e?Vn:hn)};ft.getById=function(s){return ku[s]};ft.getAll=function(){return ut.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ft.isScrolling=function(){return!!Mi};ft.snapDirectional=Hf;ft.addEventListener=function(s,e){var t=Rs[s]||(Rs[s]=[]);~t.indexOf(e)||t.push(e)};ft.removeEventListener=function(s,e){var t=Rs[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ft.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(l,h){var u=[],f=[],d=Ie.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(_){u.length||d.restart(!0),u.push(_.trigger),f.push(_),r<=u.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&Pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return Pn(r)&&(r=r(),gn(ft,"refresh",function(){return r=e.batchMax()})),Fo(s).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(ft.create(l))}),t};var Yp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Ah=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(en.isTouch?" pinch-zoom":""):"none",e===ri&&s(Rt,t)},Dc={auto:1,scroll:1},pw=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||Ie.core.getCache(r),o=wn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==Rt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Dc[(c=vi(r)).overflowY]||Dc[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!As(r)&&(Dc[(c=vi(r)).overflowY]||Dc[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},u_=function(e,t,n,i){return en.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&pw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&gn(Pt,en.eventTypes[0],Zp,!1,!0)},onDisable:function(){return mn(Pt,en.eventTypes[0],Zp,!0)}})},mw=/(input|label|select|textarea)/i,Kp,Zp=function(e){var t=mw.test(e.target.tagName);(t||Kp)&&(e._gsapAllow=!0,Kp=t)},gw=function(e){ms(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,c,l=Xn(e.target)||ri,h=Ie.core.globals().ScrollSmoother,u=h&&h.get(),f=Nr&&(e.content&&Xn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=Qr(l,hn),_=Qr(l,Vn),b=1,p=(en.isTouch&&pt.visualViewport?pt.visualViewport.scale*pt.visualViewport.width:pt.outerWidth)/pt.innerWidth,m=0,S=Pn(i)?function(){return i(o)}:function(){return i||2.8},y,M,D=u_(l,e.type,!0,r),P=function(){return M=!1},w=zi,L=zi,O=function(){c=ji(l,hn),L=go(Nr?1:0,c),n&&(w=go(0,ji(l,Vn))),y=ws},v=function(){f._gsap.y=io(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},E=function(){if(M){requestAnimationFrame(P);var Y=io(o.deltaY/2),ce=L(d.v-Y);if(f&&ce!==d.v+d.offset){d.offset=ce-d.v;var U=io((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",f._gsap.y=U+"px",d.cacheID=mt.cache,br()}return!0}d.offset&&v(),M=!0},N,W,z,$,H=function(){O(),N.isActive()&&N.vars.scrollY>c&&(d()>c?N.progress(1)&&d(c):N.resetTo("scrollY",c))};return f&&Ie.set(f,{y:"+=0"}),e.ignoreCheck=function(te){return Nr&&te.type==="touchmove"&&E()||b>1.05&&te.type!=="touchstart"||o.isGesturing||te.touches&&te.touches.length>1},e.onPress=function(){M=!1;var te=b;b=io((pt.visualViewport&&pt.visualViewport.scale||1)/p),N.pause(),te!==b&&Ah(l,b>1.01?!0:n?!1:"x"),W=_(),z=d(),O(),y=ws},e.onRelease=e.onGestureStart=function(te,Y){if(d.offset&&v(),!Y)$.restart(!0);else{mt.cache++;var ce=S(),U,ve;n&&(U=_(),ve=U+ce*.05*-te.velocityX/.227,ce*=Yp(_,U,ve,ji(l,Vn)),N.vars.scrollX=w(ve)),U=d(),ve=U+ce*.05*-te.velocityY/.227,ce*=Yp(d,U,ve,ji(l,hn)),N.vars.scrollY=L(ve),N.invalidate().duration(ce).play(.01),(Nr&&N.vars.scrollY>=c||U>=c-1)&&Ie.to({},{onUpdate:H,duration:ce})}a&&a(te)},e.onWheel=function(){N._ts&&N.pause(),wn()-m>1e3&&(y=0,m=wn())},e.onChange=function(te,Y,ce,U,ve){if(ws!==y&&O(),Y&&n&&_(w(U[2]===Y?W+(te.startX-te.x):_()+Y-U[1])),ce){d.offset&&v();var Re=ve[2]===ce,Ne=Re?z+te.startY-te.y:d()+ce-ve[1],ne=L(Ne);Re&&Ne!==ne&&(z+=ne-Ne),d(ne)}(ce||Y)&&br()},e.onEnable=function(){Ah(l,n?!1:"x"),ft.addEventListener("refresh",H),gn(pt,"resize",H),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),D.enable()},e.onDisable=function(){Ah(l,!0),mn(pt,"resize",H),ft.removeEventListener("refresh",H),D.kill()},e.lockAxis=e.lockAxis!==!1,o=new en(e),o.iOS=Nr,Nr&&!d()&&d(1),Nr&&Ie.ticker.add(zi),$=o._dc,N=Ie.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:h_(d,d(),function(){return N.pause()})},onUpdate:br,onComplete:$.vars.onComplete}),o};ft.sort=function(s){if(Pn(s))return ut.sort(s);var e=pt.pageYOffset||0;return ft.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+pt.innerHeight}),ut.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ft.observe=function(s){return new en(s)};ft.normalizeScroll=function(s){if(typeof s>"u")return Fn;if(s===!0&&Fn)return Fn.enable();if(s===!1){Fn&&Fn.kill(),Fn=s;return}var e=s instanceof en?s:gw(s);return Fn&&Fn.target===e.target&&Fn.kill(),As(e.target)&&(Fn=e),e};ft.core={_getVelocityProp:Iu,_inputObserver:u_,_scrollers:mt,_proxies:Yi,bridge:{ss:function(){Mi||Cs("scrollStart"),Mi=wn()},ref:function(){return En}}};$g()&&Ie.registerPlugin(ft);Or.registerPlugin(ft);class _w{constructor(){var e;this.experience=new Jr,this.targetElement=this.experience.targetElement,this.sceneState=this.experience.sceneState,this.sceneConfig=this.experience.sceneConfig,this.resources=this.experience.resources,this.beats=this.sceneConfig.beats??[],(e=document.fonts)!=null&&e.ready&&document.fonts.ready.then(()=>ft.refresh()),this.mm=Or.matchMedia(),this.mm.add({standard:"(prefers-reduced-motion: no-preference)",reduceMotion:"(prefers-reduced-motion: reduce)"},t=>{const{reduceMotion:n}=t.conditions;if(n){this.sceneState.scrollProgress=0;return}this.setBeatScrub(),this.setFrameBeatReveals(),this.setDomOnlyReveals()})}setBeatScrub(){const e=this.sceneState.beatScales=[];this.beats.forEach((t,n)=>{const i=document.querySelector(`[data-beat="${t.id}"]`);if(!i)return;const r=()=>{var l;const o=i.offsetTop+i.offsetHeight-window.innerHeight,c=((l=i.nextElementSibling)==null?void 0:l.offsetTop)??o;return Math.round(Math.max(c,o))},a=n===this.beats.length-1;Or.fromTo(this.sceneState,{scrollProgress:t.from},{scrollProgress:t.to,ease:"none",immediateRender:!1,scrollTrigger:{trigger:i,start:a?"top 70%":"top top",end:r,scrub:.8,onRefresh:o=>{const c=i.offsetHeight-window.innerHeight;e[n]=Math.min(1,c/Math.max(o.end-o.start,1))}}})})}setFrameBeatReveals(){const e=(t,n,i=.9)=>{const r=document.querySelector(`[data-beat="${t}"]`);if(!r)return;const a=Or.timeline({defaults:{ease:"power2.out"},scrollTrigger:{trigger:r,start:"top top",end:"bottom bottom",scrub:.8}});for(const o of n){const c=r.querySelectorAll(o.sel);c.length&&a.from(c,{autoAlpha:0,y:o.y??28,x:o.x??0,stagger:o.stagger??0,duration:o.duration??.12},o.at)}a.to(r.querySelectorAll("[data-stage-content]"),{autoAlpha:0,y:-20,duration:.1},i),a.set({},{},1)};Or.from('[data-reveal="hero-copy"]',{autoAlpha:0,x:-24,duration:.9,ease:"power2.out",delay:.15}),Or.to("[data-scroll-hint]",{autoAlpha:0,ease:"none",scrollTrigger:{start:0,end:()=>window.innerHeight*.125,scrub:!0}}),e("frame-index-01",[],.5),e("frame-index-02",[{sel:'[data-reveal="approach-heading"]',at:.05,duration:.1},{sel:'[data-reveal="approach-card"]',at:.26,stagger:.08,duration:.1}]),e("frame-index-03",[{sel:'[data-reveal="categories-heading"]',at:.05,duration:.1},{sel:'[data-reveal="category"]',at:.22,stagger:.1,duration:.1},{sel:'[data-reveal="categories-cta"]',at:.66,duration:.08}]),e("frame-index-04",[{sel:'[data-reveal="founder-heading"]',at:.08,duration:.1},{sel:'[data-reveal="founder-copy"]',at:.24,stagger:.08,duration:.1},{sel:'[data-reveal="founder-cta"]',at:.6,duration:.08}]),e("frame-index-07",[{sel:'[data-reveal="closing-heading"]',at:.2,y:-36,duration:.12},{sel:'[data-reveal="closing-cta"]',at:.38,y:-24,duration:.1}])}setDomOnlyReveals(){for(const e of document.querySelectorAll("[data-dom-beat]")){const t=e.querySelectorAll("[data-reveal-item]");t.length&&Or.from(t,{autoAlpha:0,y:32,duration:.7,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:e,start:"top 78%",toggleActions:"play none none none"}})}}refresh(){ft.refresh()}destroy(){var e;(e=this.mm)==null||e.revert()}}const bw=[{name:"base",data:{},items:[]}],_s=class _s{constructor(e={}){if(_s.instance)return _s.instance;_s.instance=this,this.targetElement=e.targetElement,this.assets=e.assets??bw,this.sceneConfig=e.sceneConfig??{},this.debugTools=e.debugTools??null,this.sceneState={scrollProgress:0},this.needsRender=!0,this.lastRenderedProgress=-1,this.qualityPhase="waiting",this.qualitySamples=[],this.lastQualityTime=0;const t=()=>{this.qualityPhase="warmup"};if(window.addEventListener("page:revealed",t,{once:!0}),window.setTimeout(t,8e3),!this.targetElement){console.warn("Missing 'targetElement' property");return}this.sizes=new _M,this.setConfig(),this.setDebug(),this.setStats(),this.setScene(),this.setCamera(),this.setRenderer(),this.setResources(),this.setWorld(),this.setMotion(),this.sizes.on("resize",()=>{this.resize()}),this.update()}setConfig(){this.config={},this.config.debug=window.location.hash==="#debug",this.config.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.pixelRatioCap??(this.pixelRatioCap=1.35),this.config.pixelRatio=Math.min(Math.max(window.devicePixelRatio,1),this.pixelRatioCap);const e=this.targetElement.getBoundingClientRect();this.config.width=e.width,this.config.height=e.height||window.innerHeight}setDebug(){this.config.debug&&this.debugTools&&(this.debug=new this.debugTools.GUI)}setStats(){this.config.debug&&this.debugTools&&(this.stats=new this.debugTools.Stats(!0))}setScene(){this.scene=new of}setCamera(){this.camera=new PT}setRenderer(){this.renderer=new CT({rendererInstance:this.rendererInstance}),this.targetElement.appendChild(this.renderer.instance.domElement)}setResources(){this.resources=new xT(this.assets)}setWorld(){this.world=new LT}setMotion(){this.motion=new _w}runAdaptiveQuality(){var i,r,a;if(this.qualityPhase==="waiting"||this.qualityPhase==="done"||!((i=this.world)!=null&&i.built)||document.hidden)return;this.needsRender=!0;const e=performance.now(),t=e-this.lastQualityTime;if(this.lastQualityTime=e,t>250)return;if(this.qualityPhase==="warmup"){this.qualitySamples.push(t)>=30&&(this.qualityPhase="sampling",this.qualitySamples=[]);return}if(this.qualitySamples.push(t),this.qualitySamples.length<90)return;this.qualityPhase="done",this.qualitySamples.sort((o,c)=>o-c);const n=this.qualitySamples[45];this.qualitySamples=[],!(n<=20)&&(this.renderer.useSSR&&this.renderer.ssrPass&&(this.renderer.setSSREnabled(!1),(a=(r=this.world)==null?void 0:r.syncMirrorReflections)==null||a.call(r),console.info(`[experience] adaptive quality: SSR off (median frame ${n.toFixed(1)}ms)`),n<=30)||(this.pixelRatioCap=n>40?1:1.15,this.resize(),console.info(`[experience] adaptive quality: pixel ratio capped at ${this.pixelRatioCap}`)))}update(){this.stats&&this.stats.update(),this.runAdaptiveQuality(),this.world&&this.world.update(),this.camera.update();const e=this.needsRender||this.config.debug||this.sceneState.scrollProgress!==this.lastRenderedProgress;this.renderer&&e&&(this.renderer.update(),this.lastRenderedProgress=this.sceneState.scrollProgress,this.needsRender=!1),this.animationFrame=window.requestAnimationFrame(()=>{this.update()})}resize(){const e=this.targetElement.getBoundingClientRect();this.config.width=e.width,this.config.height=e.height,this.config.pixelRatio=Math.min(Math.max(window.devicePixelRatio,1),this.pixelRatioCap??1.35),this.camera&&this.camera.resize(),this.renderer&&this.renderer.resize(),this.world&&this.world.resize(),this.needsRender=!0}destroy(){var e,t,n,i,r,a,o,c,l;this.animationFrame&&window.cancelAnimationFrame(this.animationFrame),(e=this.sizes)==null||e.destroy(),(t=this.motion)==null||t.destroy(),(n=this.world)==null||n.destroy(),(i=this.camera)==null||i.destroy(),(r=this.renderer)==null||r.destroy(),(a=this.resources)==null||a.destroy(),this.debug&&this.debug.destroy(),(l=(c=(o=this.renderer)==null?void 0:o.instance)==null?void 0:c.domElement)==null||l.remove(),_s.instance=null}};Wf(_s,"instance");let Jr=_s;function vw(s){const e=s.querySelector('script[type="application/json"][data-experience-manifest]');if(!e)return{};try{return JSON.parse(e.textContent)}catch(t){return console.warn("Invalid experience manifest JSON",t),{}}}function xw(){try{const s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}async function yw(s){const e=vw(s);let t=null;if(window.location.hash==="#debug"){const[{default:i},{default:r},{OrbitControls:a}]=await Promise.all([Al(()=>import("./assets/lil-gui.esm-BVNW_y_o.js"),[],import.meta.url),Al(()=>import("./assets/Stats-D-arLcjY.js"),[],import.meta.url),Al(()=>import("./assets/OrbitControls-DmMu1N6-.js"),[],import.meta.url)]);t={GUI:i,Stats:r,OrbitControls:a}}const n=new Jr({targetElement:s,assets:e.assets,sceneConfig:e.sceneConfig,debugTools:t});return n.resources.on("progress",i=>{i.name==="base"&&window.dispatchEvent(new CustomEvent("experience:progress",{detail:{ratio:i.ratio??(i.toLoad?i.loaded/i.toLoad:1)}}))}),n.resources.on("groupEnd",i=>{i.name==="base"&&window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{s.classList.add("is-live"),window.dispatchEvent(new CustomEvent("experience:ready"))})})}),window.addEventListener("page:revealed",()=>{var i;(i=n.motion)==null||i.refresh()},{once:!0}),t&&(window.__experience=n),n}document.querySelectorAll("[data-experience]").forEach(s=>{if(!xw()){document.documentElement.classList.remove("experience-on"),window.dispatchEvent(new CustomEvent("experience:ready"));return}yw(s)});export{Aw as C,Mw as M,us as P,$r as Q,bl as R,ww as S,Tw as T,j as V,ct as a,p0 as b};
