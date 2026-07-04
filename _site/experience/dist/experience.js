var t_=Object.defineProperty;var n_=(s,e,t)=>e in s?t_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var wf=(s,e,t)=>n_(s,typeof e!="symbol"?e+"":e,t);const i_="modulepreload",r_=function(s,e){return new URL(s,e).href},Af={},pl=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));i=Promise.allSettled(t.map(l=>{if(l=r_(l,n),l in Af)return;Af[l]=!0;const u=l.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let _=a.length-1;_>=0;_--){const b=a[_];if(b.href===l&&(!u||b.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":i_,u||(d.as="script"),d.crossOrigin="",d.href=l,c&&d.setAttribute("nonce",c),document.head.appendChild(d),u)return new Promise((_,b)=>{d.addEventListener("load",_),d.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${l}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return e().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Lh="169",n1={ROTATE:0,DOLLY:1,PAN:2},i1={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},s_=0,Rf=1,a_=2,Dp=1,Ip=2,er=3,dr=0,Fn=1,wi=2,Ur=0,ta=1,Cf=2,Pf=3,Lf=4,o_=5,os=100,c_=101,l_=102,u_=103,h_=104,f_=200,d_=201,p_=202,m_=203,mu=204,gu=205,g_=206,__=207,b_=208,x_=209,v_=210,y_=211,S_=212,M_=213,E_=214,_u=0,bu=1,xu=2,fa=3,vu=4,yu=5,Su=6,Mu=7,Up=0,T_=1,w_=2,hr=0,Np=1,Op=2,Fp=3,kp=4,A_=5,Bp=6,zp=7,Df="attached",R_="detached",Hp=300,da=301,pa=302,Eu=303,Tu=304,rl=306,ma=1e3,Fi=1001,zc=1002,On=1003,Gp=1004,Xa=1005,pn=1006,Mc=1007,ki=1008,pr=1009,Vp=1010,Wp=1011,_o=1012,Dh=1013,vs=1014,zn=1015,or=1016,Ih=1017,Uh=1018,ga=1020,Xp=35902,qp=1021,jp=1022,ti=1023,Yp=1024,Kp=1025,na=1026,_a=1027,sl=1028,Nh=1029,Zp=1030,Oh=1031,Fh=1033,Ec=33776,Tc=33777,wc=33778,Ac=33779,wu=35840,Au=35841,Ru=35842,Cu=35843,Pu=36196,Lu=37492,Du=37496,Iu=37808,Uu=37809,Nu=37810,Ou=37811,Fu=37812,ku=37813,Bu=37814,zu=37815,Hu=37816,Gu=37817,Vu=37818,Wu=37819,Xu=37820,qu=37821,Rc=36492,ju=36494,Yu=36495,Jp=36283,Ku=36284,Zu=36285,Ju=36286,bo=2300,xo=2301,ml=2302,If=2400,Uf=2401,Nf=2402,C_=2500,P_=0,Qp=1,Qu=2,L_=3200,D_=3201,$p=0,I_=1,rr="",Yt="srgb",sn="srgb-linear",kh="display-p3",al="display-p3-linear",Hc="linear",kt="srgb",Gc="rec709",Vc="p3",Rs=7680,Of=519,U_=512,N_=513,O_=514,em=515,F_=516,k_=517,B_=518,z_=519,$u=35044,Ff="300 es",cr=2e3,Wc=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,a=i.length;r<a;r++)i[r].call(this,e);e.target=null}}}const xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const eo=Math.PI/180,ba=180/Math.PI;function Ci(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(xn[s&255]+xn[s>>8&255]+xn[s>>16&255]+xn[s>>24&255]+"-"+xn[e&255]+xn[e>>8&255]+"-"+xn[e>>16&15|64]+xn[e>>24&255]+"-"+xn[t&63|128]+xn[t>>8&255]+"-"+xn[t>>16&255]+xn[t>>24&255]+xn[n&255]+xn[n>>8&255]+xn[n>>16&255]+xn[n>>24&255]).toLowerCase()}function dn(s,e,t){return Math.max(e,Math.min(t,s))}function Bh(s,e){return(s%e+e)%e}function H_(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function G_(s,e,t){return s!==e?(t-s)/(e-s):0}function to(s,e,t){return(1-t)*s+t*e}function V_(s,e,t,n){return to(s,e,1-Math.exp(-t*n))}function W_(s,e=1){return e-Math.abs(Bh(s,e*2)-e)}function X_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function q_(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function j_(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Y_(s,e){return s+Math.random()*(e-s)}function K_(s){return s*(.5-Math.random())}function Z_(s){s!==void 0&&(kf=s);let e=kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function J_(s){return s*eo}function Q_(s){return s*ba}function $_(s){return(s&s-1)===0&&s!==0}function e0(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function t0(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function n0(s,e,t,n,i){const r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),u=a((e+n)/2),h=r((e-n)/2),f=a((e-n)/2),d=r((n-e)/2),_=a((n-e)/2);switch(i){case"XYX":s.set(o*u,c*h,c*f,o*l);break;case"YZY":s.set(c*f,o*u,c*h,o*l);break;case"ZXZ":s.set(c*h,c*f,o*u,o*l);break;case"XZX":s.set(o*u,c*_,c*d,o*l);break;case"YXY":s.set(c*d,o*u,c*_,o*l);break;case"ZYZ":s.set(c*_,c*d,o*u,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Ai(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Lt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const i0={DEG2RAD:eo,RAD2DEG:ba,generateUUID:Ci,clamp:dn,euclideanModulo:Bh,mapLinear:H_,inverseLerp:G_,lerp:to,damp:V_,pingpong:W_,smoothstep:X_,smootherstep:q_,randInt:j_,randFloat:Y_,randFloatSpread:K_,seededRandom:Z_,degToRad:J_,radToDeg:Q_,isPowerOfTwo:$_,ceilPowerOfTwo:e0,floorPowerOfTwo:t0,setQuaternionFromProperEuler:n0,normalize:Lt,denormalize:Ai};class yt{constructor(e=0,t=0){yt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*i+e.x,this.y=r*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,n,i,r,a,o,c,l){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l)}set(e,t,n,i,r,a,o,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],_=n[8],b=i[0],m=i[3],g=i[6],S=i[1],y=i[4],M=i[7],L=i[2],P=i[5],w=i[8];return r[0]=a*b+o*S+c*L,r[3]=a*m+o*y+c*P,r[6]=a*g+o*M+c*w,r[1]=l*b+u*S+h*L,r[4]=l*m+u*y+h*P,r[7]=l*g+u*M+h*w,r[2]=f*b+d*S+_*L,r[5]=f*m+d*y+_*P,r[8]=f*g+d*M+_*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8];return t*a*u-t*o*l-n*r*u+n*o*c+i*r*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=u*a-o*l,f=o*c-u*r,d=l*r-a*c,_=t*h+n*f+i*d;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/_;return e[0]=h*b,e[1]=(i*l-u*n)*b,e[2]=(o*n-i*a)*b,e[3]=f*b,e[4]=(u*t-i*c)*b,e[5]=(i*r-o*t)*b,e[6]=d*b,e[7]=(n*c-l*t)*b,e[8]=(a*t-n*r)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(gl.makeScale(e,t)),this}rotate(e){return this.premultiply(gl.makeRotation(-e)),this}translate(e,t){return this.premultiply(gl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const gl=new ot;function tm(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function r0(){const s=vo("canvas");return s.style.display="block",s}const Bf={};function Cc(s){s in Bf||(Bf[s]=!0,console.warn(s))}function s0(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function a0(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function o0(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const zf=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Hf=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Da={[sn]:{transfer:Hc,primaries:Gc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Yt]:{transfer:kt,primaries:Gc,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[al]:{transfer:Hc,primaries:Vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Hf),fromReference:s=>s.applyMatrix3(zf)},[kh]:{transfer:kt,primaries:Vc,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Hf),fromReference:s=>s.applyMatrix3(zf).convertLinearToSRGB()}},c0=new Set([sn,al]),Mt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!c0.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Da[e].toReference,i=Da[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Da[s].primaries},getTransfer:function(s){return s===rr?Hc:Da[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Da[e].luminanceCoefficients)}};function ia(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function _l(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Cs;class l0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cs===void 0&&(Cs=vo("canvas")),Cs.width=e.width,Cs.height=e.height;const n=Cs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Cs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let a=0;a<r.length;a++)r[a]=ia(r[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ia(t[n]/255)*255):t[n]=ia(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let u0=0;class nm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u0++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?r.push(bl(i[a].image)):r.push(bl(i[a]))}else r=bl(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function bl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?l0.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let h0=0;class Zt extends Ts{constructor(e=Zt.DEFAULT_IMAGE,t=Zt.DEFAULT_MAPPING,n=Fi,i=Fi,r=pn,a=ki,o=ti,c=pr,l=Zt.DEFAULT_ANISOTROPY,u=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Ci(),this.name="",this.source=new nm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new yt(0,0),this.repeat=new yt(1,1),this.center=new yt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ma:e.x=e.x-Math.floor(e.x);break;case Fi:e.x=e.x<0?0:1;break;case zc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ma:e.y=e.y-Math.floor(e.y);break;case Fi:e.y=e.y<0?0:1;break;case zc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zt.DEFAULT_IMAGE=null;Zt.DEFAULT_MAPPING=Hp;Zt.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,t=0,n=0,i=1){Tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],_=c[9],b=c[2],m=c[6],g=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-b)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+b)<.1&&Math.abs(_+m)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(l+1)/2,M=(d+1)/2,L=(g+1)/2,P=(u+f)/4,w=(h+b)/4,I=(_+m)/4;return y>M&&y>L?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=P/n,r=w/n):M>L?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=P/i,r=I/i):L<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(L),n=w/r,i=I/r),this.set(n,i,r,t),this}let S=Math.sqrt((m-_)*(m-_)+(h-b)*(h-b)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-_)/S,this.y=(h-b)/S,this.z=(f-u)/S,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class f0 extends Ts{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tt(0,0,e,t),this.scissorTest=!1,this.viewport=new Tt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Zt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new nm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ys extends f0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class im extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class d0 extends Zt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=On,this.minFilter=On,this.wrapR=Fi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Wr{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const f=r[a+0],d=r[a+1],_=r[a+2],b=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=d,e[t+2]=_,e[t+3]=b;return}if(h!==b||c!==f||l!==d||u!==_){let m=1-o;const g=c*f+l*d+u*_+h*b,S=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const L=Math.sqrt(y),P=Math.atan2(L,g*S);m=Math.sin(m*P)/L,o=Math.sin(o*P)/L}const M=o*S;if(c=c*m+f*M,l=l*m+d*M,u=u*m+_*M,h=h*m+b*M,m===1-o){const L=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=L,l*=L,u*=L,h*=L}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,a){const o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[a],f=r[a+1],d=r[a+2],_=r[a+3];return e[t]=o*_+u*h+c*d-l*f,e[t+1]=c*_+u*f+l*h-o*d,e[t+2]=l*_+u*d+o*f-c*h,e[t+3]=u*_-o*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),h=o(r/2),f=c(n/2),d=c(i/2),_=c(r/2);switch(a){case"XYZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"YXZ":this._x=f*u*h+l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"ZXY":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h-f*d*_;break;case"ZYX":this._x=f*u*h-l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h+f*d*_;break;case"YZX":this._x=f*u*h+l*d*_,this._y=l*d*h+f*u*_,this._z=l*u*_-f*d*h,this._w=l*u*h-f*d*_;break;case"XZY":this._x=f*u*h-l*d*_,this._y=l*d*h-f*u*_,this._z=l*u*_+f*d*h,this._w=l*u*h+f*d*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(a-i)*d}else if(n>o&&n>h){const d=2*Math.sqrt(1+n-o-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+a)/d,this._z=(r+l)/d}else if(o>h){const d=2*Math.sqrt(1+o-n-h);this._w=(r-l)/d,this._x=(i+a)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+h-n-o);this._w=(a-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+a*o+i*l-r*c,this._y=i*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+i*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=i,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,o),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Gf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Gf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),u=2*(o*t-r*i),h=2*(r*n-a*t);return this.x=t+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=i+c*h+r*u-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-r*o,this.y=r*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xl.copy(this).projectOnVector(e),this.sub(xl)}reflect(e){return this.sub(xl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(dn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xl=new q,Gf=new Wr;class Xi{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,xi):xi.fromBufferAttribute(r,a),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Oo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Oo.copy(n.boundingBox)),Oo.applyMatrix4(e.matrixWorld),this.union(Oo)}const i=e.children;for(let r=0,a=i.length;r<a;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ia),Fo.subVectors(this.max,Ia),Ps.subVectors(e.a,Ia),Ls.subVectors(e.b,Ia),Ds.subVectors(e.c,Ia),br.subVectors(Ls,Ps),xr.subVectors(Ds,Ls),jr.subVectors(Ps,Ds);let t=[0,-br.z,br.y,0,-xr.z,xr.y,0,-jr.z,jr.y,br.z,0,-br.x,xr.z,0,-xr.x,jr.z,0,-jr.x,-br.y,br.x,0,-xr.y,xr.x,0,-jr.y,jr.x,0];return!vl(t,Ps,Ls,Ds,Fo)||(t=[1,0,0,0,1,0,0,0,1],!vl(t,Ps,Ls,Ds,Fo))?!1:(ko.crossVectors(br,xr),t=[ko.x,ko.y,ko.z],vl(t,Ps,Ls,Ds,Fo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Yi=[new q,new q,new q,new q,new q,new q,new q,new q],xi=new q,Oo=new Xi,Ps=new q,Ls=new q,Ds=new q,br=new q,xr=new q,jr=new q,Ia=new q,Fo=new q,ko=new q,Yr=new q;function vl(s,e,t,n,i){for(let r=0,a=s.length-3;r<=a;r+=3){Yr.fromArray(s,r);const o=i.x*Math.abs(Yr.x)+i.y*Math.abs(Yr.y)+i.z*Math.abs(Yr.z),c=e.dot(Yr),l=t.dot(Yr),u=n.dot(Yr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}const p0=new Xi,Ua=new q,yl=new q;class qi{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):p0.setFromPoints(e).getCenter(n);let i=0;for(let r=0,a=e.length;r<a;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);const t=Ua.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(yl)),this.expandByPoint(Ua.copy(e.center).sub(yl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ki=new q,Sl=new q,Bo=new q,vr=new q,Ml=new q,zo=new q,El=new q;class ol{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ki.copy(this.origin).addScaledVector(this.direction,t),Ki.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sl.copy(e).add(t).multiplyScalar(.5),Bo.copy(t).sub(e).normalize(),vr.copy(this.origin).sub(Sl);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Bo),o=vr.dot(this.direction),c=-vr.dot(Bo),l=vr.lengthSq(),u=Math.abs(1-a*a);let h,f,d,_;if(u>0)if(h=a*c-o,f=a*o-c,_=r*u,h>=0)if(f>=-_)if(f<=_){const b=1/u;h*=b,f*=b,d=h*(h+a*f+2*o)+f*(a*h+f+2*c)+l}else f=r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;else f<=-_?(h=Math.max(0,-(-a*r+o)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=_?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(a*r+o)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=a>0?-r:r,h=Math.max(0,-(a*f+o)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Sl).addScaledVector(Bo,f),d}intersectSphere(e,t){Ki.subVectors(e.center,this.origin);const n=Ki.dot(this.direction),i=Ki.dot(Ki)-n*n,r=e.radius*e.radius;if(i>r)return null;const a=Math.sqrt(r-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,a,o,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>i||((r>n||isNaN(n))&&(n=r),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ki)!==null}intersectTriangle(e,t,n,i,r){Ml.subVectors(t,e),zo.subVectors(n,e),El.crossVectors(Ml,zo);let a=this.direction.dot(El),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vr.subVectors(this.origin,e);const c=o*this.direction.dot(zo.crossVectors(vr,zo));if(c<0)return null;const l=o*this.direction.dot(Ml.cross(vr));if(l<0||c+l>a)return null;const u=-o*vr.dot(El);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,r,a,o,c,l,u,h,f,d,_,b,m){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,a,o,c,l,u,h,f,d,_,b,m)}set(e,t,n,i,r,a,o,c,l,u,h,f,d,_,b,m){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=f,g[3]=d,g[7]=_,g[11]=b,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Is.setFromMatrixColumn(e,0).length(),r=1/Is.setFromMatrixColumn(e,1).length(),a=1/Is.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const f=a*u,d=a*h,_=o*u,b=o*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+_*l,t[5]=f-b*l,t[9]=-o*c,t[2]=b-f*l,t[6]=_+d*l,t[10]=a*c}else if(e.order==="YXZ"){const f=c*u,d=c*h,_=l*u,b=l*h;t[0]=f+b*o,t[4]=_*o-d,t[8]=a*l,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=d*o-_,t[6]=b+f*o,t[10]=a*c}else if(e.order==="ZXY"){const f=c*u,d=c*h,_=l*u,b=l*h;t[0]=f-b*o,t[4]=-a*h,t[8]=_+d*o,t[1]=d+_*o,t[5]=a*u,t[9]=b-f*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const f=a*u,d=a*h,_=o*u,b=o*h;t[0]=c*u,t[4]=_*l-d,t[8]=f*l+b,t[1]=c*h,t[5]=b*l+f,t[9]=d*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const f=a*c,d=a*l,_=o*c,b=o*l;t[0]=c*u,t[4]=b-f*h,t[8]=_*h+d,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-l*u,t[6]=d*h+_,t[10]=f-b*h}else if(e.order==="XZY"){const f=a*c,d=a*l,_=o*c,b=o*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+b,t[5]=a*u,t[9]=d*h-_,t[2]=_*h-d,t[6]=o*u,t[10]=b*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(m0,e,g0)}lookAt(e,t,n){const i=this.elements;return qn.subVectors(e,t),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),yr.crossVectors(n,qn),yr.lengthSq()===0&&(Math.abs(n.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),yr.crossVectors(n,qn)),yr.normalize(),Ho.crossVectors(qn,yr),i[0]=yr.x,i[4]=Ho.x,i[8]=qn.x,i[1]=yr.y,i[5]=Ho.y,i[9]=qn.y,i[2]=yr.z,i[6]=Ho.z,i[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],_=n[2],b=n[6],m=n[10],g=n[14],S=n[3],y=n[7],M=n[11],L=n[15],P=i[0],w=i[4],I=i[8],B=i[12],v=i[1],R=i[5],F=i[9],j=i[13],X=i[2],ne=i[6],W=i[10],ee=i[14],K=i[3],de=i[7],U=i[11],xe=i[15];return r[0]=a*P+o*v+c*X+l*K,r[4]=a*w+o*R+c*ne+l*de,r[8]=a*I+o*F+c*W+l*U,r[12]=a*B+o*j+c*ee+l*xe,r[1]=u*P+h*v+f*X+d*K,r[5]=u*w+h*R+f*ne+d*de,r[9]=u*I+h*F+f*W+d*U,r[13]=u*B+h*j+f*ee+d*xe,r[2]=_*P+b*v+m*X+g*K,r[6]=_*w+b*R+m*ne+g*de,r[10]=_*I+b*F+m*W+g*U,r[14]=_*B+b*j+m*ee+g*xe,r[3]=S*P+y*v+M*X+L*K,r[7]=S*w+y*R+M*ne+L*de,r[11]=S*I+y*F+M*W+L*U,r[15]=S*B+y*j+M*ee+L*xe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],_=e[3],b=e[7],m=e[11],g=e[15];return _*(+r*c*h-i*l*h-r*o*f+n*l*f+i*o*d-n*c*d)+b*(+t*c*d-t*l*f+r*a*f-i*a*d+i*l*u-r*c*u)+m*(+t*l*h-t*o*d-r*a*h+n*a*d+r*o*u-n*l*u)+g*(-i*o*u-t*c*h+t*o*f+i*a*h-n*a*f+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],_=e[12],b=e[13],m=e[14],g=e[15],S=h*m*l-b*f*l+b*c*d-o*m*d-h*c*g+o*f*g,y=_*f*l-u*m*l-_*c*d+a*m*d+u*c*g-a*f*g,M=u*b*l-_*h*l+_*o*d-a*b*d-u*o*g+a*h*g,L=_*h*c-u*b*c-_*o*f+a*b*f+u*o*m-a*h*m,P=t*S+n*y+i*M+r*L;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/P;return e[0]=S*w,e[1]=(b*f*r-h*m*r-b*i*d+n*m*d+h*i*g-n*f*g)*w,e[2]=(o*m*r-b*c*r+b*i*l-n*m*l-o*i*g+n*c*g)*w,e[3]=(h*c*r-o*f*r-h*i*l+n*f*l+o*i*d-n*c*d)*w,e[4]=y*w,e[5]=(u*m*r-_*f*r+_*i*d-t*m*d-u*i*g+t*f*g)*w,e[6]=(_*c*r-a*m*r-_*i*l+t*m*l+a*i*g-t*c*g)*w,e[7]=(a*f*r-u*c*r+u*i*l-t*f*l-a*i*d+t*c*d)*w,e[8]=M*w,e[9]=(_*h*r-u*b*r-_*n*d+t*b*d+u*n*g-t*h*g)*w,e[10]=(a*b*r-_*o*r+_*n*l-t*b*l-a*n*g+t*o*g)*w,e[11]=(u*o*r-a*h*r-u*n*l+t*h*l+a*n*d-t*o*d)*w,e[12]=L*w,e[13]=(u*b*i-_*h*i+_*n*f-t*b*f-u*n*m+t*h*m)*w,e[14]=(_*o*i-a*b*i-_*n*c+t*b*c+a*n*m-t*o*m)*w,e[15]=(a*h*i-u*o*i+u*n*c-t*h*c-a*n*f+t*o*f)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,a){return this.set(1,n,r,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,u=a+a,h=o+o,f=r*l,d=r*u,_=r*h,b=a*u,m=a*h,g=o*h,S=c*l,y=c*u,M=c*h,L=n.x,P=n.y,w=n.z;return i[0]=(1-(b+g))*L,i[1]=(d+M)*L,i[2]=(_-y)*L,i[3]=0,i[4]=(d-M)*P,i[5]=(1-(f+g))*P,i[6]=(m+S)*P,i[7]=0,i[8]=(_+y)*w,i[9]=(m-S)*w,i[10]=(1-(f+b))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Is.set(i[0],i[1],i[2]).length();const a=Is.set(i[4],i[5],i[6]).length(),o=Is.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],vi.copy(this);const l=1/r,u=1/a,h=1/o;return vi.elements[0]*=l,vi.elements[1]*=l,vi.elements[2]*=l,vi.elements[4]*=u,vi.elements[5]*=u,vi.elements[6]*=u,vi.elements[8]*=h,vi.elements[9]*=h,vi.elements[10]*=h,t.setFromRotationMatrix(vi),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,i,r,a,o=cr){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i);let d,_;if(o===cr)d=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Wc)d=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,a,o=cr){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(a-r),f=(t+e)*l,d=(n+i)*u;let _,b;if(o===cr)_=(a+r)*h,b=-2*h;else if(o===Wc)_=r*h,b=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=b,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Is=new q,vi=new st,m0=new q(0,0,0),g0=new q(1,1,1),yr=new q,Ho=new q,qn=new q,Vf=new st,Wf=new Wr;class Vi{constructor(e=0,t=0,n=0,i=Vi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],a=i[4],o=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(dn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vi.DEFAULT_ORDER="XYZ";class rm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _0=0;const Xf=new q,Us=new Wr,Zi=new st,Go=new q,Na=new q,b0=new q,x0=new Wr,qf=new q(1,0,0),jf=new q(0,1,0),Yf=new q(0,0,1),Kf={type:"added"},v0={type:"removed"},Ns={type:"childadded",child:null},Tl={type:"childremoved",child:null};class Gt extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_0++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new q,t=new Vi,n=new Wr,i=new q(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new ot}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,t){return Us.setFromAxisAngle(e,t),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(qf,e)}rotateY(e){return this.rotateOnAxis(jf,e)}rotateZ(e){return this.rotateOnAxis(Yf,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qf,e)}translateY(e){return this.translateOnAxis(jf,e)}translateZ(e){return this.translateOnAxis(Yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Go.copy(e):Go.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Na.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zi.lookAt(Na,Go,this.up):Zi.lookAt(Go,Na,this.up),this.quaternion.setFromRotationMatrix(Zi),i&&(Zi.extractRotation(i.matrixWorld),Us.setFromRotationMatrix(Zi),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Kf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(v0),Tl.child=e,this.dispatchEvent(Tl),Tl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Kf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,e,b0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Na,x0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,a=i.length;r<a;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));i.material=o}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),d=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),_.length>0&&(n.nodes=_)}return n.object=i,n;function a(o){const c=[];for(const l in o){const u=o[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Gt.DEFAULT_UP=new q(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yi=new q,Ji=new q,wl=new q,Qi=new q,Os=new q,Fs=new q,Zf=new q,Al=new q,Rl=new q,Cl=new q,Pl=new Tt,Ll=new Tt,Dl=new Tt;class Ri{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),yi.subVectors(e,t),i.cross(yi);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){yi.subVectors(i,t),Ji.subVectors(n,t),wl.subVectors(e,t);const a=yi.dot(yi),o=yi.dot(Ji),c=yi.dot(wl),l=Ji.dot(Ji),u=Ji.dot(wl),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(l*c-o*u)*f,_=(a*u-o*c)*f;return r.set(1-d-_,_,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Qi)===null?!1:Qi.x>=0&&Qi.y>=0&&Qi.x+Qi.y<=1}static getInterpolation(e,t,n,i,r,a,o,c){return this.getBarycoord(e,t,n,i,Qi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Qi.x),c.addScaledVector(a,Qi.y),c.addScaledVector(o,Qi.z),c)}static getInterpolatedAttribute(e,t,n,i,r,a){return Pl.setScalar(0),Ll.setScalar(0),Dl.setScalar(0),Pl.fromBufferAttribute(e,t),Ll.fromBufferAttribute(e,n),Dl.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Pl,r.x),a.addScaledVector(Ll,r.y),a.addScaledVector(Dl,r.z),a}static isFrontFacing(e,t,n,i){return yi.subVectors(n,t),Ji.subVectors(e,t),yi.cross(Ji).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yi.subVectors(this.c,this.b),Ji.subVectors(this.a,this.b),yi.cross(Ji).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Ri.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let a,o;Os.subVectors(i,n),Fs.subVectors(r,n),Al.subVectors(e,n);const c=Os.dot(Al),l=Fs.dot(Al);if(c<=0&&l<=0)return t.copy(n);Rl.subVectors(e,i);const u=Os.dot(Rl),h=Fs.dot(Rl);if(u>=0&&h<=u)return t.copy(i);const f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return a=c/(c-u),t.copy(n).addScaledVector(Os,a);Cl.subVectors(e,r);const d=Os.dot(Cl),_=Fs.dot(Cl);if(_>=0&&d<=_)return t.copy(r);const b=d*l-c*_;if(b<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Fs,o);const m=u*_-d*h;if(m<=0&&h-u>=0&&d-_>=0)return Zf.subVectors(r,i),o=(h-u)/(h-u+(d-_)),t.copy(i).addScaledVector(Zf,o);const g=1/(m+b+f);return a=b*g,o=f*g,t.copy(n).addScaledVector(Os,a).addScaledVector(Fs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Vo={h:0,s:0,l:0};function Il(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Mt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Mt.workingColorSpace){if(e=Bh(e,1),t=dn(t,0,1),n=dn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Il(a,r,e+1/3),this.g=Il(a,r,e),this.b=Il(a,r,e-1/3)}return Mt.toWorkingColorSpace(this,i),this}setStyle(e,t=Yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Yt){const n=sm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ia(e.r),this.g=ia(e.g),this.b=ia(e.b),this}copyLinearToSRGB(e){return this.r=_l(e.r),this.g=_l(e.g),this.b=_l(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Yt){return Mt.fromWorkingColorSpace(vn.copy(this),e),Math.round(dn(vn.r*255,0,255))*65536+Math.round(dn(vn.g*255,0,255))*256+Math.round(dn(vn.b*255,0,255))}getHexString(e=Yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(vn.copy(this),t);const n=vn.r,i=vn.g,r=vn.b,a=Math.max(n,i,r),o=Math.min(n,i,r);let c,l;const u=(o+a)/2;if(o===a)c=0,l=0;else{const h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(vn.copy(this),t),e.r=vn.r,e.g=vn.g,e.b=vn.b,e}getStyle(e=Yt){Mt.fromWorkingColorSpace(vn.copy(this),e);const t=vn.r,n=vn.g,i=vn.b;return e!==Yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Vo);const n=to(Sr.h,Vo.h,t),i=to(Sr.s,Vo.s,t),r=to(Sr.l,Vo.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vn=new Je;Je.NAMES=sm;let y0=0;class Hi extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y0++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=ta,this.side=dr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mu,this.blendDst=gu,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ta&&(n.blending=this.blending),this.side!==dr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mu&&(n.blendSrc=this.blendSrc),this.blendDst!==gu&&(n.blendDst=this.blendDst),this.blendEquation!==os&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Of&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=i(e.textures),a=i(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Qn extends Hi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.combine=Up,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sr=S0();function S0(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;!(l&8388608);)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:a,offsetTable:o}}function M0(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=dn(s,-65504,65504),sr.floatView[0]=s;const e=sr.uint32View[0],t=e>>23&511;return sr.baseTable[t]+((e&8388607)>>sr.shiftTable[t])}function E0(s){const e=s>>10;return sr.uint32View[0]=sr.mantissaTable[sr.offsetTable[e]+(s&1023)]+sr.exponentTable[e],sr.floatView[0]}const Jf={toHalfFloat:M0,fromHalfFloat:E0},tn=new q,Wo=new yt;class _n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Wo.fromBufferAttribute(this,t),Wo.applyMatrix3(e),this.setXY(t,Wo.x,Wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix3(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$u&&(e.usage=this.usage),e}}class am extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class om extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class mi extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}let T0=0;const oi=new st,Ul=new Gt,ks=new q,jn=new Xi,Oa=new Xi,un=new q;class _i extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(tm(e)?om:am)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return oi.makeRotationFromQuaternion(e),this.applyMatrix4(oi),this}rotateX(e){return oi.makeRotationX(e),this.applyMatrix4(oi),this}rotateY(e){return oi.makeRotationY(e),this.applyMatrix4(oi),this}rotateZ(e){return oi.makeRotationZ(e),this.applyMatrix4(oi),this}translate(e,t,n){return oi.makeTranslation(e,t,n),this.applyMatrix4(oi),this}scale(e,t,n){return oi.makeScale(e,t,n),this.applyMatrix4(oi),this}lookAt(e){return Ul.lookAt(e),Ul.updateMatrix(),this.applyMatrix4(Ul.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];jn.setFromBufferAttribute(r),this.morphTargetsRelative?(un.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(un),un.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(un)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Oa.setFromBufferAttribute(o),this.morphTargetsRelative?(un.addVectors(jn.min,Oa.min),jn.expandByPoint(un),un.addVectors(jn.max,Oa.max),jn.expandByPoint(un)):(jn.expandByPoint(Oa.min),jn.expandByPoint(Oa.max))}jn.getCenter(n);let i=0;for(let r=0,a=e.count;r<a;r++)un.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(un));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)un.fromBufferAttribute(o,l),c&&(ks.fromBufferAttribute(e,l),un.add(ks)),i=Math.max(i,n.distanceToSquared(un))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let I=0;I<n.count;I++)o[I]=new q,c[I]=new q;const l=new q,u=new q,h=new q,f=new yt,d=new yt,_=new yt,b=new q,m=new q;function g(I,B,v){l.fromBufferAttribute(n,I),u.fromBufferAttribute(n,B),h.fromBufferAttribute(n,v),f.fromBufferAttribute(r,I),d.fromBufferAttribute(r,B),_.fromBufferAttribute(r,v),u.sub(l),h.sub(l),d.sub(f),_.sub(f);const R=1/(d.x*_.y-_.x*d.y);isFinite(R)&&(b.copy(u).multiplyScalar(_.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-_.x).multiplyScalar(R),o[I].add(b),o[B].add(b),o[v].add(b),c[I].add(m),c[B].add(m),c[v].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let I=0,B=S.length;I<B;++I){const v=S[I],R=v.start,F=v.count;for(let j=R,X=R+F;j<X;j+=3)g(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const y=new q,M=new q,L=new q,P=new q;function w(I){L.fromBufferAttribute(i,I),P.copy(L);const B=o[I];y.copy(B),y.sub(L.multiplyScalar(L.dot(B))).normalize(),M.crossVectors(P,B);const R=M.dot(c[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,R)}for(let I=0,B=S.length;I<B;++I){const v=S[I],R=v.start,F=v.count;for(let j=R,X=R+F;j<X;j+=3)w(e.getX(j+0)),w(e.getX(j+1)),w(e.getX(j+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const i=new q,r=new q,a=new q,o=new q,c=new q,l=new q,u=new q,h=new q;if(e)for(let f=0,d=e.count;f<d;f+=3){const _=e.getX(f+0),b=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,b),a.fromBufferAttribute(t,m),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,b),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(b,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)un.fromBufferAttribute(e,t),un.normalize(),e.setXYZ(t,un.x,un.y,un.z)}toNonIndexed(){function e(o,c){const l=o.array,u=o.itemSize,h=o.normalized,f=new l.constructor(c.length*u);let d=0,_=0;for(let b=0,m=c.length;b<m;b++){o.isInterleavedBufferAttribute?d=c[b]*o.data.stride+o.offset:d=c[b]*u;for(let g=0;g<u;g++)f[_++]=l[d++]}return new _n(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new _i,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){const f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){const d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,u=a.length;l<u;l++){const h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qf=new st,Kr=new ol,Xo=new qi,$f=new q,qo=new q,jo=new q,Yo=new q,Nl=new q,Ko=new q,ed=new q,Zo=new q;class bt extends Gt{constructor(e=new _i,t=new Qn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(r&&o){Ko.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=o[c],h=r[c];u!==0&&(Nl.fromBufferAttribute(h,e),a?Ko.addScaledVector(Nl,u):Ko.addScaledVector(Nl.sub(t),u))}t.add(Ko)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Xo.copy(n.boundingSphere),Xo.applyMatrix4(r),Kr.copy(e.ray).recast(e.near),!(Xo.containsPoint(Kr.origin)===!1&&(Kr.intersectSphere(Xo,$f)===null||Kr.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Qf.copy(r).invert(),Kr.copy(e.ray).applyMatrix4(Qf),!(n.boundingBox!==null&&Kr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Kr)))}_computeIntersections(e,t,n){let i;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const m=f[_],g=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,L=y;M<L;M+=3){const P=o.getX(M),w=o.getX(M+1),I=o.getX(M+2);i=Jo(this,g,e,n,l,u,h,P,w,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),b=Math.min(o.count,d.start+d.count);for(let m=_,g=b;m<g;m+=3){const S=o.getX(m),y=o.getX(m+1),M=o.getX(m+2);i=Jo(this,a,e,n,l,u,h,S,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,b=f.length;_<b;_++){const m=f[_],g=a[m.materialIndex],S=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=S,L=y;M<L;M+=3){const P=M,w=M+1,I=M+2;i=Jo(this,g,e,n,l,u,h,P,w,I),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,d.start),b=Math.min(c.count,d.start+d.count);for(let m=_,g=b;m<g;m+=3){const S=m,y=m+1,M=m+2;i=Jo(this,a,e,n,l,u,h,S,y,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function w0(s,e,t,n,i,r,a,o){let c;if(e.side===Fn?c=n.intersectTriangle(a,r,i,!0,o):c=n.intersectTriangle(i,r,a,e.side===dr,o),c===null)return null;Zo.copy(o),Zo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Zo);return l<t.near||l>t.far?null:{distance:l,point:Zo.clone(),object:s}}function Jo(s,e,t,n,i,r,a,o,c,l){s.getVertexPosition(o,qo),s.getVertexPosition(c,jo),s.getVertexPosition(l,Yo);const u=w0(s,e,t,n,qo,jo,Yo,ed);if(u){const h=new q;Ri.getBarycoord(ed,qo,jo,Yo,h),i&&(u.uv=Ri.getInterpolatedAttribute(i,o,c,l,h,new yt)),r&&(u.uv1=Ri.getInterpolatedAttribute(r,o,c,l,h,new yt)),a&&(u.normal=Ri.getInterpolatedAttribute(a,o,c,l,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:o,b:c,c:l,normal:new q,materialIndex:0};Ri.getNormal(qo,jo,Yo,f.normal),u.face=f,u.barycoord=h}return u}class ws extends _i{constructor(e=1,t=1,n=1,i=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:a};const o=this;i=Math.floor(i),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],u=[],h=[];let f=0,d=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,i,a,2),_("x","z","y",1,-1,e,n,-t,i,a,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new mi(l,3)),this.setAttribute("normal",new mi(u,3)),this.setAttribute("uv",new mi(h,2));function _(b,m,g,S,y,M,L,P,w,I,B){const v=M/w,R=L/I,F=M/2,j=L/2,X=P/2,ne=w+1,W=I+1;let ee=0,K=0;const de=new q;for(let U=0;U<W;U++){const xe=U*R-j;for(let Oe=0;Oe<ne;Oe++){const We=Oe*v-F;de[b]=We*S,de[m]=xe*y,de[g]=X,l.push(de.x,de.y,de.z),de[b]=0,de[m]=0,de[g]=P>0?1:-1,u.push(de.x,de.y,de.z),h.push(Oe/w),h.push(1-U/I),ee+=1}}for(let U=0;U<I;U++)for(let xe=0;xe<w;xe++){const Oe=f+xe+ne*U,We=f+xe+ne*(U+1),te=f+(xe+1)+ne*(U+1),oe=f+(xe+1)+ne*U;c.push(Oe,We,oe),c.push(We,te,oe),K+=6}o.addGroup(d,K,B),d+=K,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ws(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function xa(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Pn(s){const e={};for(let t=0;t<s.length;t++){const n=xa(s[t]);for(const i in n)e[i]=n[i]}return e}function A0(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function cm(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const R0={clone:xa,merge:Pn};var C0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,P0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class kr extends Hi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=C0,this.fragmentShader=P0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=xa(e.uniforms),this.uniformsGroups=A0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}let lm=class extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=cr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const Mr=new q,td=new yt,nd=new yt;class Un extends lm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ba*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ba*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,td,nd),t.subVectors(nd,td)}setViewOffset(e,t,n,i,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(eo*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bs=-90,zs=1;class L0 extends Gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Un(Bs,zs,e,t);i.layers=this.layers,this.add(i);const r=new Un(Bs,zs,e,t);r.layers=this.layers,this.add(r);const a=new Un(Bs,zs,e,t);a.layers=this.layers,this.add(a);const o=new Un(Bs,zs,e,t);o.layers=this.layers,this.add(o);const c=new Un(Bs,zs,e,t);c.layers=this.layers,this.add(c);const l=new Un(Bs,zs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===cr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const b=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=b,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class um extends Zt{constructor(e,t,n,i,r,a,o,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:da,super(e,t,n,i,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class D0 extends ys{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new um(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new ws(5,5,5),r=new kr({name:"CubemapFromEquirect",uniforms:xa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:Ur});r.uniforms.tEquirect.value=t;const a=new bt(i,r),o=t.minFilter;return t.minFilter===ki&&(t.minFilter=pn),new L0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(r)}}const Ol=new q,I0=new q,U0=new ot;class ns{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ol.subVectors(n,t).cross(I0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ol),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||U0.getNormalMatrix(e),i=this.coplanarPoint(Ol).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Zr=new qi,Qo=new q;class zh{constructor(e=new ns,t=new ns,n=new ns,i=new ns,r=new ns,a=new ns){this.planes=[e,t,n,i,r,a]}set(e,t,n,i,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=cr){const n=this.planes,i=e.elements,r=i[0],a=i[1],o=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],_=i[9],b=i[10],m=i[11],g=i[12],S=i[13],y=i[14],M=i[15];if(n[0].setComponents(c-r,f-l,m-d,M-g).normalize(),n[1].setComponents(c+r,f+l,m+d,M+g).normalize(),n[2].setComponents(c+a,f+u,m+_,M+S).normalize(),n[3].setComponents(c-a,f-u,m-_,M-S).normalize(),n[4].setComponents(c-o,f-h,m-b,M-y).normalize(),t===cr)n[5].setComponents(c+o,f+h,m+b,M+y).normalize();else if(t===Wc)n[5].setComponents(o,h,b,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Zr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Zr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Zr)}intersectsSprite(e){return Zr.center.set(0,0,0),Zr.radius=.7071067811865476,Zr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Zr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Qo.x=i.normal.x>0?e.max.x:e.min.x,Qo.y=i.normal.y>0?e.max.y:e.min.y,Qo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hm(){let s=null,e=!1,t=null,n=null;function i(r,a){t(r,a),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function N0(s){const e=new WeakMap;function t(o,c){const l=o.array,u=o.usage,h=l.byteLength,f=s.createBuffer();s.bindBuffer(c,f),s.bufferData(c,l,u),o.onUploadCallback();let d;if(l instanceof Float32Array)d=s.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?d=s.HALF_FLOAT:d=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=s.SHORT;else if(l instanceof Uint32Array)d=s.UNSIGNED_INT;else if(l instanceof Int32Array)d=s.INT;else if(l instanceof Int8Array)d=s.BYTE;else if(l instanceof Uint8Array)d=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,o),h.length===0)s.bufferSubData(l,0,u);else{h.sort((d,_)=>d.start-_.start);let f=0;for(let d=1;d<h.length;d++){const _=h[f],b=h[d];b.start<=_.start+_.count+1?_.count=Math.max(_.count,b.start+b.count-_.start):(++f,h[f]=b)}h.length=f+1;for(let d=0,_=h.length;d<_;d++){const b=h[d];s.bufferSubData(l,b.start*u.BYTES_PER_ELEMENT,u,b.start,b.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:r,update:a}}class Ui extends _i{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,h=e/o,f=t/c,d=[],_=[],b=[],m=[];for(let g=0;g<u;g++){const S=g*f-a;for(let y=0;y<l;y++){const M=y*h-r;_.push(M,-S,0),b.push(0,0,1),m.push(y/o),m.push(1-g/c)}}for(let g=0;g<c;g++)for(let S=0;S<o;S++){const y=S+l*g,M=S+l*(g+1),L=S+1+l*(g+1),P=S+1+l*g;d.push(y,M,P),d.push(M,L,P)}this.setIndex(d),this.setAttribute("position",new mi(_,3)),this.setAttribute("normal",new mi(b,3)),this.setAttribute("uv",new mi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ui(e.width,e.height,e.widthSegments,e.heightSegments)}}var O0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,F0=`#ifdef USE_ALPHAHASH
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
#endif`,k0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,B0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,z0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,H0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,G0=`#ifdef USE_AOMAP
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
#endif`,V0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W0=`#ifdef USE_BATCHING
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
#endif`,X0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,q0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,j0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Y0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,K0=`#ifdef USE_IRIDESCENCE
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
#endif`,Z0=`#ifdef USE_BUMPMAP
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
#endif`,J0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Q0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sb=`#define PI 3.141592653589793
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
} // validated`,ab=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ob=`vec3 transformedNormal = objectNormal;
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
#endif`,cb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`
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
}`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mb=`#ifdef USE_GRADIENTMAP
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
}`,Eb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ab=`uniform bool receiveShadow;
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
#endif`,Rb=`#ifdef USE_ENVMAP
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
#endif`,Cb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Lb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Db=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ib=`PhysicalMaterial material;
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
#endif`,Ub=`struct PhysicalMaterial {
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
}`,Nb=`
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kb=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bb=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zb=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hb=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,qb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Kb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Qb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$b=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ex=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ix=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rx=`#ifdef USE_NORMALMAP
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
#endif`,sx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ax=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ox=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,px=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_x=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,vx=`float getShadowMask() {
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
}`,yx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sx=`#ifdef USE_SKINNING
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
#endif`,Mx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ex=`#ifdef USE_SKINNING
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
#endif`,Tx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ax=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cx=`#ifdef USE_TRANSMISSION
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
#endif`,Px=`#ifdef USE_TRANSMISSION
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
#endif`,Lx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ix=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ux=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ox=`uniform sampler2D t2D;
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
}`,Fx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kx=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zx=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hx=`#include <common>
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
}`,Gx=`#if DEPTH_PACKING == 3200
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
}`,Vx=`#define DISTANCE
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
}`,Wx=`#define DISTANCE
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
}`,Xx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jx=`uniform float scale;
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
}`,Yx=`uniform vec3 diffuse;
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
}`,Kx=`#include <common>
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
}`,Zx=`uniform vec3 diffuse;
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
}`,Jx=`#define LAMBERT
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
}`,Qx=`#define LAMBERT
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
}`,$x=`#define MATCAP
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
}`,ev=`#define MATCAP
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
}`,tv=`#define NORMAL
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
}`,nv=`#define NORMAL
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
}`,iv=`#define PHONG
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
}`,rv=`#define PHONG
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
}`,sv=`#define STANDARD
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
}`,av=`#define STANDARD
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
}`,ov=`#define TOON
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
}`,cv=`#define TOON
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
}`,lv=`uniform float size;
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
}`,uv=`uniform vec3 diffuse;
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
}`,hv=`#include <common>
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
}`,fv=`uniform vec3 color;
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
}`,dv=`uniform float rotation;
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
}`,pv=`uniform vec3 diffuse;
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
}`,at={alphahash_fragment:O0,alphahash_pars_fragment:F0,alphamap_fragment:k0,alphamap_pars_fragment:B0,alphatest_fragment:z0,alphatest_pars_fragment:H0,aomap_fragment:G0,aomap_pars_fragment:V0,batching_pars_vertex:W0,batching_vertex:X0,begin_vertex:q0,beginnormal_vertex:j0,bsdfs:Y0,iridescence_fragment:K0,bumpmap_pars_fragment:Z0,clipping_planes_fragment:J0,clipping_planes_pars_fragment:Q0,clipping_planes_pars_vertex:$0,clipping_planes_vertex:eb,color_fragment:tb,color_pars_fragment:nb,color_pars_vertex:ib,color_vertex:rb,common:sb,cube_uv_reflection_fragment:ab,defaultnormal_vertex:ob,displacementmap_pars_vertex:cb,displacementmap_vertex:lb,emissivemap_fragment:ub,emissivemap_pars_fragment:hb,colorspace_fragment:fb,colorspace_pars_fragment:db,envmap_fragment:pb,envmap_common_pars_fragment:mb,envmap_pars_fragment:gb,envmap_pars_vertex:_b,envmap_physical_pars_fragment:Rb,envmap_vertex:bb,fog_vertex:xb,fog_pars_vertex:vb,fog_fragment:yb,fog_pars_fragment:Sb,gradientmap_pars_fragment:Mb,lightmap_pars_fragment:Eb,lights_lambert_fragment:Tb,lights_lambert_pars_fragment:wb,lights_pars_begin:Ab,lights_toon_fragment:Cb,lights_toon_pars_fragment:Pb,lights_phong_fragment:Lb,lights_phong_pars_fragment:Db,lights_physical_fragment:Ib,lights_physical_pars_fragment:Ub,lights_fragment_begin:Nb,lights_fragment_maps:Ob,lights_fragment_end:Fb,logdepthbuf_fragment:kb,logdepthbuf_pars_fragment:Bb,logdepthbuf_pars_vertex:zb,logdepthbuf_vertex:Hb,map_fragment:Gb,map_pars_fragment:Vb,map_particle_fragment:Wb,map_particle_pars_fragment:Xb,metalnessmap_fragment:qb,metalnessmap_pars_fragment:jb,morphinstance_vertex:Yb,morphcolor_vertex:Kb,morphnormal_vertex:Zb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Qb,normal_fragment_begin:$b,normal_fragment_maps:ex,normal_pars_fragment:tx,normal_pars_vertex:nx,normal_vertex:ix,normalmap_pars_fragment:rx,clearcoat_normal_fragment_begin:sx,clearcoat_normal_fragment_maps:ax,clearcoat_pars_fragment:ox,iridescence_pars_fragment:cx,opaque_fragment:lx,packing:ux,premultiplied_alpha_fragment:hx,project_vertex:fx,dithering_fragment:dx,dithering_pars_fragment:px,roughnessmap_fragment:mx,roughnessmap_pars_fragment:gx,shadowmap_pars_fragment:_x,shadowmap_pars_vertex:bx,shadowmap_vertex:xx,shadowmask_pars_fragment:vx,skinbase_vertex:yx,skinning_pars_vertex:Sx,skinning_vertex:Mx,skinnormal_vertex:Ex,specularmap_fragment:Tx,specularmap_pars_fragment:wx,tonemapping_fragment:Ax,tonemapping_pars_fragment:Rx,transmission_fragment:Cx,transmission_pars_fragment:Px,uv_pars_fragment:Lx,uv_pars_vertex:Dx,uv_vertex:Ix,worldpos_vertex:Ux,background_vert:Nx,background_frag:Ox,backgroundCube_vert:Fx,backgroundCube_frag:kx,cube_vert:Bx,cube_frag:zx,depth_vert:Hx,depth_frag:Gx,distanceRGBA_vert:Vx,distanceRGBA_frag:Wx,equirect_vert:Xx,equirect_frag:qx,linedashed_vert:jx,linedashed_frag:Yx,meshbasic_vert:Kx,meshbasic_frag:Zx,meshlambert_vert:Jx,meshlambert_frag:Qx,meshmatcap_vert:$x,meshmatcap_frag:ev,meshnormal_vert:tv,meshnormal_frag:nv,meshphong_vert:iv,meshphong_frag:rv,meshphysical_vert:sv,meshphysical_frag:av,meshtoon_vert:ov,meshtoon_frag:cv,points_vert:lv,points_frag:uv,shadow_vert:hv,shadow_frag:fv,sprite_vert:dv,sprite_frag:pv},Te={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new yt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new yt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Ni={basic:{uniforms:Pn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:at.meshbasic_vert,fragmentShader:at.meshbasic_frag},lambert:{uniforms:Pn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:at.meshlambert_vert,fragmentShader:at.meshlambert_frag},phong:{uniforms:Pn([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:at.meshphong_vert,fragmentShader:at.meshphong_frag},standard:{uniforms:Pn([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag},toon:{uniforms:Pn([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new Je(0)}}]),vertexShader:at.meshtoon_vert,fragmentShader:at.meshtoon_frag},matcap:{uniforms:Pn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:at.meshmatcap_vert,fragmentShader:at.meshmatcap_frag},points:{uniforms:Pn([Te.points,Te.fog]),vertexShader:at.points_vert,fragmentShader:at.points_frag},dashed:{uniforms:Pn([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:at.linedashed_vert,fragmentShader:at.linedashed_frag},depth:{uniforms:Pn([Te.common,Te.displacementmap]),vertexShader:at.depth_vert,fragmentShader:at.depth_frag},normal:{uniforms:Pn([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:at.meshnormal_vert,fragmentShader:at.meshnormal_frag},sprite:{uniforms:Pn([Te.sprite,Te.fog]),vertexShader:at.sprite_vert,fragmentShader:at.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:at.background_vert,fragmentShader:at.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:at.backgroundCube_vert,fragmentShader:at.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:at.cube_vert,fragmentShader:at.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:at.equirect_vert,fragmentShader:at.equirect_frag},distanceRGBA:{uniforms:Pn([Te.common,Te.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:at.distanceRGBA_vert,fragmentShader:at.distanceRGBA_frag},shadow:{uniforms:Pn([Te.lights,Te.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:at.shadow_vert,fragmentShader:at.shadow_frag}};Ni.physical={uniforms:Pn([Ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new yt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new yt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new yt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:at.meshphysical_vert,fragmentShader:at.meshphysical_frag};const $o={r:0,b:0,g:0},Jr=new Vi,mv=new st;function gv(s,e,t,n,i,r,a){const o=new Je(0);let c=r===!0?0:1,l,u,h=null,f=0,d=null;function _(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?t:e).get(y)),y}function b(S){let y=!1;const M=_(S);M===null?g(o,c):M&&M.isColor&&(g(M,1),y=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(S,y){const M=_(y);M&&(M.isCubeTexture||M.mapping===rl)?(u===void 0&&(u=new bt(new ws(1,1,1),new kr({name:"BackgroundCubeMaterial",uniforms:xa(Ni.backgroundCube.uniforms),vertexShader:Ni.backgroundCube.vertexShader,fragmentShader:Ni.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,P,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Jr.copy(y.backgroundRotation),Jr.x*=-1,Jr.y*=-1,Jr.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Jr.y*=-1,Jr.z*=-1),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(mv.makeRotationFromEuler(Jr)),u.material.toneMapped=Mt.getTransfer(M.colorSpace)!==kt,(h!==M||f!==M.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new bt(new Ui(2,2),new kr({name:"BackgroundMaterial",uniforms:xa(Ni.background.uniforms),vertexShader:Ni.background.vertexShader,fragmentShader:Ni.background.fragmentShader,side:dr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Mt.getTransfer(M.colorSpace)!==kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||f!==M.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=M,f=M.version,d=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,y){S.getRGB($o,cm(s)),n.buffers.color.setClear($o.r,$o.g,$o.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(S,y=1){o.set(S),c=y,g(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,g(o,c)},render:b,addToRenderList:m}}function _v(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=f(null);let r=i,a=!1;function o(v,R,F,j,X){let ne=!1;const W=h(j,F,R);r!==W&&(r=W,l(r.object)),ne=d(v,j,F,X),ne&&_(v,j,F,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(ne||a)&&(a=!1,M(v,R,F,j),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return s.createVertexArray()}function l(v){return s.bindVertexArray(v)}function u(v){return s.deleteVertexArray(v)}function h(v,R,F){const j=F.wireframe===!0;let X=n[v.id];X===void 0&&(X={},n[v.id]=X);let ne=X[R.id];ne===void 0&&(ne={},X[R.id]=ne);let W=ne[j];return W===void 0&&(W=f(c()),ne[j]=W),W}function f(v){const R=[],F=[],j=[];for(let X=0;X<t;X++)R[X]=0,F[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:j,object:v,attributes:{},index:null}}function d(v,R,F,j){const X=r.attributes,ne=R.attributes;let W=0;const ee=F.getAttributes();for(const K in ee)if(ee[K].location>=0){const U=X[K];let xe=ne[K];if(xe===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(xe=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(xe=v.instanceColor)),U===void 0||U.attribute!==xe||xe&&U.data!==xe.data)return!0;W++}return r.attributesNum!==W||r.index!==j}function _(v,R,F,j){const X={},ne=R.attributes;let W=0;const ee=F.getAttributes();for(const K in ee)if(ee[K].location>=0){let U=ne[K];U===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(U=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(U=v.instanceColor));const xe={};xe.attribute=U,U&&U.data&&(xe.data=U.data),X[K]=xe,W++}r.attributes=X,r.attributesNum=W,r.index=j}function b(){const v=r.newAttributes;for(let R=0,F=v.length;R<F;R++)v[R]=0}function m(v){g(v,0)}function g(v,R){const F=r.newAttributes,j=r.enabledAttributes,X=r.attributeDivisors;F[v]=1,j[v]===0&&(s.enableVertexAttribArray(v),j[v]=1),X[v]!==R&&(s.vertexAttribDivisor(v,R),X[v]=R)}function S(){const v=r.newAttributes,R=r.enabledAttributes;for(let F=0,j=R.length;F<j;F++)R[F]!==v[F]&&(s.disableVertexAttribArray(F),R[F]=0)}function y(v,R,F,j,X,ne,W){W===!0?s.vertexAttribIPointer(v,R,F,X,ne):s.vertexAttribPointer(v,R,F,j,X,ne)}function M(v,R,F,j){b();const X=j.attributes,ne=F.getAttributes(),W=R.defaultAttributeValues;for(const ee in ne){const K=ne[ee];if(K.location>=0){let de=X[ee];if(de===void 0&&(ee==="instanceMatrix"&&v.instanceMatrix&&(de=v.instanceMatrix),ee==="instanceColor"&&v.instanceColor&&(de=v.instanceColor)),de!==void 0){const U=de.normalized,xe=de.itemSize,Oe=e.get(de);if(Oe===void 0)continue;const We=Oe.buffer,te=Oe.type,oe=Oe.bytesPerElement,he=te===s.INT||te===s.UNSIGNED_INT||de.gpuType===Dh;if(de.isInterleavedBufferAttribute){const ge=de.data,Re=ge.stride,Ce=de.offset;if(ge.isInstancedInterleavedBuffer){for(let Qe=0;Qe<K.locationSize;Qe++)g(K.location+Qe,ge.meshPerAttribute);v.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let Qe=0;Qe<K.locationSize;Qe++)m(K.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,We);for(let Qe=0;Qe<K.locationSize;Qe++)y(K.location+Qe,xe/K.locationSize,te,U,Re*oe,(Ce+xe/K.locationSize*Qe)*oe,he)}else{if(de.isInstancedBufferAttribute){for(let ge=0;ge<K.locationSize;ge++)g(K.location+ge,de.meshPerAttribute);v.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ge=0;ge<K.locationSize;ge++)m(K.location+ge);s.bindBuffer(s.ARRAY_BUFFER,We);for(let ge=0;ge<K.locationSize;ge++)y(K.location+ge,xe/K.locationSize,te,U,xe*oe,xe/K.locationSize*ge*oe,he)}}else if(W!==void 0){const U=W[ee];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(K.location,U);break;case 3:s.vertexAttrib3fv(K.location,U);break;case 4:s.vertexAttrib4fv(K.location,U);break;default:s.vertexAttrib1fv(K.location,U)}}}}S()}function L(){I();for(const v in n){const R=n[v];for(const F in R){const j=R[F];for(const X in j)u(j[X].object),delete j[X];delete R[F]}delete n[v]}}function P(v){if(n[v.id]===void 0)return;const R=n[v.id];for(const F in R){const j=R[F];for(const X in j)u(j[X].object),delete j[X];delete R[F]}delete n[v.id]}function w(v){for(const R in n){const F=n[R];if(F[v.id]===void 0)continue;const j=F[v.id];for(const X in j)u(j[X].object),delete j[X];delete F[v.id]}}function I(){B(),a=!0,r!==i&&(r=i,l(r.object))}function B(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:I,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfProgram:w,initAttributes:b,enableAttribute:m,disableUnusedAttributes:S}}function bv(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function a(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function o(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let d=0;for(let _=0;_<h;_++)d+=u[_];t.update(d,n,1)}function c(l,u,h,f){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let _=0;_<l.length;_++)a(l[_],u[_],f[_]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,u,0,f,0,h);let _=0;for(let b=0;b<h;b++)_+=u[b];for(let b=0;b<f.length;b++)t.update(_,n,f[b])}}this.setMode=i,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function xv(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==ti&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const I=w===or&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==pr&&n.convert(w)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==zn&&!I)}function c(w){if(w==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const d=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),M=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=_>0,P=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:_,maxTextureSize:b,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:L,maxSamples:P}}function vv(s){const e=this;let t=null,n=0,i=!1,r=!1;const a=new ns,o=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){const _=h.clippingPlanes,b=h.clipIntersection,m=h.clipShadows,g=s.get(h);if(!i||_===null||_.length===0||r&&!m)r?u(null):l();else{const S=r?0:n,y=S*4;let M=g.clippingState||null;c.value=M,M=u(_,f,y,d);for(let L=0;L!==y;++L)M[L]=t[L];g.clippingState=M,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,_){const b=h!==null?h.length:0;let m=null;if(b!==0){if(m=c.value,_!==!0||m===null){const g=d+b*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<g)&&(m=new Float32Array(g));for(let y=0,M=d;y!==b;++y,M+=4)a.copy(h[y]).applyMatrix4(S,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,m}}function yv(s){let e=new WeakMap;function t(a,o){return o===Eu?a.mapping=da:o===Tu&&(a.mapping=pa),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Eu||o===Tu)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new D0(c.height);return l.fromEquirectangularTexture(s,a),e.set(a,l),a.addEventListener("dispose",i),t(l.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Hh extends lm{constructor(e=-1,t=1,n=1,i=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zs=4,id=[.125,.215,.35,.446,.526,.582],cs=20,Fl=new Hh,rd=new Je;let kl=null,Bl=0,zl=0,Hl=!1;const is=(1+Math.sqrt(5))/2,Hs=1/is,sd=[new q(-is,Hs,0),new q(is,Hs,0),new q(-Hs,0,is),new q(Hs,0,is),new q(0,is,-Hs),new q(0,is,Hs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class eh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){kl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=od(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(kl,Bl,zl),this._renderer.xr.enabled=Hl,e.scissorTest=!1,ec(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===da||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),kl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:or,format:ti,colorSpace:sn,depthBuffer:!1},i=ad(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ad(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Sv(r)),this._blurMaterial=Mv(r,e,t)}return i}_compileMaterial(e){const t=new bt(this._lodPlanes[0],e);this._renderer.compile(t,Fl)}_sceneToCubeUV(e,t,n,i){const o=new Un(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(rd),u.toneMapping=hr,u.autoClear=!1;const d=new Qn({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1}),_=new bt(new ws,d);let b=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,b=!0):(d.color.copy(rd),b=!0);for(let g=0;g<6;g++){const S=g%3;S===0?(o.up.set(0,c[g],0),o.lookAt(l[g],0,0)):S===1?(o.up.set(0,0,c[g]),o.lookAt(0,l[g],0)):(o.up.set(0,c[g],0),o.lookAt(0,0,l[g]));const y=this._cubeSize;ec(i,S*y,g>2?y:0,y,y),u.setRenderTarget(i),b&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===da||e.mapping===pa;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=od());const r=i?this._cubemapMaterial:this._equirectMaterial,a=new bt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;ec(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Fl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=sd[(i-r-1)%sd.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,i,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",r),this._halfBlur(a,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new bt(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*cs-1),b=r/_,m=isFinite(r)?1+Math.floor(u*b):cs;m>cs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${cs}`);const g=[];let S=0;for(let w=0;w<cs;++w){const I=w/b,B=Math.exp(-I*I/2);g.push(B),w===0?S+=B:w<m&&(S+=2*B)}for(let w=0;w<g.length;w++)g[w]=g[w]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=g,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=_,f.mipInt.value=y-n;const M=this._sizeLods[i],L=3*M*(i>y-Zs?i-y+Zs:0),P=4*(this._cubeSize-M);ec(t,L,P,3*M,2*M),c.setRenderTarget(t),c.render(h,Fl)}}function Sv(s){const e=[],t=[],n=[];let i=s;const r=s-Zs+1+id.length;for(let a=0;a<r;a++){const o=Math.pow(2,i);t.push(o);let c=1/o;a>s-Zs?c=id[a-s+Zs-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,_=6,b=3,m=2,g=1,S=new Float32Array(b*_*d),y=new Float32Array(m*_*d),M=new Float32Array(g*_*d);for(let P=0;P<d;P++){const w=P%3*2/3-1,I=P>2?0:-1,B=[w,I,0,w+2/3,I,0,w+2/3,I+1,0,w,I,0,w+2/3,I+1,0,w,I+1,0];S.set(B,b*_*P),y.set(f,m*_*P);const v=[P,P,P,P,P,P];M.set(v,g*_*P)}const L=new _i;L.setAttribute("position",new _n(S,b)),L.setAttribute("uv",new _n(y,m)),L.setAttribute("faceIndex",new _n(M,g)),e.push(L),i>Zs&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ad(s,e,t){const n=new ys(s,e,t);return n.texture.mapping=rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ec(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Mv(s,e,t){const n=new Float32Array(cs),i=new q(0,1,0);return new kr({name:"SphericalGaussianBlur",defines:{n:cs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function od(){return new kr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gh(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function cd(){return new kr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Gh(){return`

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
	`}function Ev(s){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Eu||c===Tu,u=c===da||c===pa;if(l||u){let h=e.get(o);const f=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new eh(s)),h=l?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const d=o.image;return l&&d&&d.height>0||u&&d&&i(d)?(t===null&&(t=new eh(s)),h=l?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",r),h.texture):null}}}return o}function i(o){let c=0;const l=6;for(let u=0;u<l;u++)o[u]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Tv(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Cc("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function wv(s,e,t,n){const i={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const b=f.morphAttributes[_];for(let m=0,g=b.length;m<g;m++)e.remove(b[m])}f.removeEventListener("dispose",a),delete i[f.id];const d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return i[f.id]===!0||(f.addEventListener("dispose",a),i[f.id]=!0,t.memory.geometries++),f}function c(h){const f=h.attributes;for(const _ in f)e.update(f[_],s.ARRAY_BUFFER);const d=h.morphAttributes;for(const _ in d){const b=d[_];for(let m=0,g=b.length;m<g;m++)e.update(b[m],s.ARRAY_BUFFER)}}function l(h){const f=[],d=h.index,_=h.attributes.position;let b=0;if(d!==null){const S=d.array;b=d.version;for(let y=0,M=S.length;y<M;y+=3){const L=S[y+0],P=S[y+1],w=S[y+2];f.push(L,P,P,w,w,L)}}else if(_!==void 0){const S=_.array;b=_.version;for(let y=0,M=S.length/3-1;y<M;y+=3){const L=y+0,P=y+1,w=y+2;f.push(L,P,P,w,w,L)}}else return;const m=new(tm(f)?om:am)(f,1);m.version=b;const g=r.get(h);g&&e.remove(g),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Av(s,e,t){let n;function i(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){s.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,_){_!==0&&(s.drawElementsInstanced(n,d,r,f*a,_),t.update(d,n,_))}function u(f,d,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,_);let m=0;for(let g=0;g<_;g++)m+=d[g];t.update(m,n,1)}function h(f,d,_,b){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f.length;g++)l(f[g]/a,d[g],b[g]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,b,0,_);let g=0;for(let S=0;S<_;S++)g+=d[S];for(let S=0;S<b.length;S++)t.update(g,n,b[S])}}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Rv(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Cv(s,e,t){const n=new WeakMap,i=new Tt;function r(a,o,c){const l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(o);if(f===void 0||f.count!==h){let B=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();const d=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,b=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],S=o.morphAttributes.color||[];let y=0;d===!0&&(y=1),_===!0&&(y=2),b===!0&&(y=3);let M=o.attributes.position.count*y,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const P=new Float32Array(M*L*4*h),w=new im(P,M,L,h);w.type=zn,w.needsUpdate=!0;const I=y*4;for(let v=0;v<h;v++){const R=m[v],F=g[v],j=S[v],X=M*L*4*v;for(let ne=0;ne<R.count;ne++){const W=ne*I;d===!0&&(i.fromBufferAttribute(R,ne),P[X+W+0]=i.x,P[X+W+1]=i.y,P[X+W+2]=i.z,P[X+W+3]=0),_===!0&&(i.fromBufferAttribute(F,ne),P[X+W+4]=i.x,P[X+W+5]=i.y,P[X+W+6]=i.z,P[X+W+7]=0),b===!0&&(i.fromBufferAttribute(j,ne),P[X+W+8]=i.x,P[X+W+9]=i.y,P[X+W+10]=i.z,P[X+W+11]=j.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new yt(M,L)},n.set(o,f),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let d=0;for(let b=0;b<l.length;b++)d+=l[b];const _=o.morphTargetsRelative?1:1-d;c.getUniforms().setValue(s,"morphTargetBaseInfluence",_),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",f.size)}return{update:r}}function Pv(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function a(){i=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class fm extends Zt{constructor(e,t,n,i,r,a,o,c,l,u=na){if(u!==na&&u!==_a)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===na&&(n=vs),n===void 0&&u===_a&&(n=ga),super(null,i,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:On,this.minFilter=c!==void 0?c:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const dm=new Zt,ld=new fm(1,1),pm=new im,mm=new d0,gm=new um,ud=[],hd=[],fd=new Float32Array(16),dd=new Float32Array(9),pd=new Float32Array(4);function Ca(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=ud[i];if(r===void 0&&(r=new Float32Array(i),ud[i]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function cn(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cl(s,e){let t=hd[e];t===void 0&&(t=new Int32Array(e),hd[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Lv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function Iv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(cn(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function Uv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function Nv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;pd.set(n),s.uniformMatrix2fv(this.addr,!1,pd),ln(t,n)}}function Ov(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;dd.set(n),s.uniformMatrix3fv(this.addr,!1,dd),ln(t,n)}}function Fv(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(cn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(cn(t,n))return;fd.set(n),s.uniformMatrix4fv(this.addr,!1,fd),ln(t,n)}}function kv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Bv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function zv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function Hv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function Gv(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(cn(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function Wv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(cn(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function Xv(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(cn(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function qv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(ld.compareFunction=em,r=ld):r=dm,t.setTexture2D(e||r,i)}function jv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||mm,i)}function Yv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||gm,i)}function Kv(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||pm,i)}function Zv(s){switch(s){case 5126:return Lv;case 35664:return Dv;case 35665:return Iv;case 35666:return Uv;case 35674:return Nv;case 35675:return Ov;case 35676:return Fv;case 5124:case 35670:return kv;case 35667:case 35671:return Bv;case 35668:case 35672:return zv;case 35669:case 35673:return Hv;case 5125:return Gv;case 36294:return Vv;case 36295:return Wv;case 36296:return Xv;case 35678:case 36198:case 36298:case 36306:case 35682:return qv;case 35679:case 36299:case 36307:return jv;case 35680:case 36300:case 36308:case 36293:return Yv;case 36289:case 36303:case 36311:case 36292:return Kv}}function Jv(s,e){s.uniform1fv(this.addr,e)}function Qv(s,e){const t=Ca(e,this.size,2);s.uniform2fv(this.addr,t)}function $v(s,e){const t=Ca(e,this.size,3);s.uniform3fv(this.addr,t)}function ey(s,e){const t=Ca(e,this.size,4);s.uniform4fv(this.addr,t)}function ty(s,e){const t=Ca(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ny(s,e){const t=Ca(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function iy(s,e){const t=Ca(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function ry(s,e){s.uniform1iv(this.addr,e)}function sy(s,e){s.uniform2iv(this.addr,e)}function ay(s,e){s.uniform3iv(this.addr,e)}function oy(s,e){s.uniform4iv(this.addr,e)}function cy(s,e){s.uniform1uiv(this.addr,e)}function ly(s,e){s.uniform2uiv(this.addr,e)}function uy(s,e){s.uniform3uiv(this.addr,e)}function hy(s,e){s.uniform4uiv(this.addr,e)}function fy(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTexture2D(e[a]||dm,r[a])}function dy(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||mm,r[a])}function py(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||gm,r[a])}function my(s,e,t){const n=this.cache,i=e.length,r=cl(t,i);cn(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||pm,r[a])}function gy(s){switch(s){case 5126:return Jv;case 35664:return Qv;case 35665:return $v;case 35666:return ey;case 35674:return ty;case 35675:return ny;case 35676:return iy;case 5124:case 35670:return ry;case 35667:case 35671:return sy;case 35668:case 35672:return ay;case 35669:case 35673:return oy;case 5125:return cy;case 36294:return ly;case 36295:return uy;case 36296:return hy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return py;case 36289:case 36303:case 36311:case 36292:return my}}class _y{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Zv(t.type)}}class by{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gy(t.type)}}class xy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,a=i.length;r!==a;++r){const o=i[r];o.setValue(e,t[o.id],n)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function md(s,e){s.seq.push(e),s.map[e.id]=e}function vy(s,e,t){const n=s.name,i=n.length;for(Gl.lastIndex=0;;){const r=Gl.exec(n),a=Gl.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){md(t,l===void 0?new _y(o,s,e):new by(o,s,e));break}else{let h=t.map[o];h===void 0&&(h=new xy(o),md(t,h)),t=h}}}class Pc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),a=e.getUniformLocation(t,r.name);vy(r,a,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function gd(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const yy=37297;let Sy=0;function My(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=i;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Ey(s){const e=Mt.getPrimaries(Mt.workingColorSpace),t=Mt.getPrimaries(s);let n;switch(e===t?n="":e===Vc&&t===Gc?n="LinearDisplayP3ToLinearSRGB":e===Gc&&t===Vc&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case al:return[n,"LinearTransferOETF"];case Yt:case kh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function _d(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+My(s.getShaderSource(e),a)}else return i}function Ty(s,e){const t=Ey(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wy(s,e){let t;switch(e){case Np:t="Linear";break;case Op:t="Reinhard";break;case Fp:t="Cineon";break;case kp:t="ACESFilmic";break;case Bp:t="AgX";break;case zp:t="Neutral";break;case A_:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const tc=new q;function Ay(){Mt.getLuminanceCoefficients(tc);const s=tc.x.toFixed(4),e=tc.y.toFixed(4),t=tc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ry(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qa).join(`
`)}function Cy(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Py(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),a=r.name;let o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function qa(s){return s!==""}function bd(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function xd(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ly=/^[ \t]*#include +<([\w\d./]+)>/gm;function th(s){return s.replace(Ly,Iy)}const Dy=new Map;function Iy(s,e){let t=at[e];if(t===void 0){const n=Dy.get(e);if(n!==void 0)t=at[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return th(t)}const Uy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vd(s){return s.replace(Uy,Ny)}function Ny(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function yd(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function Oy(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Dp?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Ip?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===er&&(e="SHADOWMAP_TYPE_VSM"),e}function Fy(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case da:case pa:e="ENVMAP_TYPE_CUBE";break;case rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function ky(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pa:e="ENVMAP_MODE_REFRACTION";break}return e}function By(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Up:e="ENVMAP_BLENDING_MULTIPLY";break;case T_:e="ENVMAP_BLENDING_MIX";break;case w_:e="ENVMAP_BLENDING_ADD";break}return e}function zy(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Hy(s,e,t,n){const i=s.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Oy(t),l=Fy(t),u=ky(t),h=By(t),f=zy(t),d=Ry(t),_=Cy(r),b=i.createProgram();let m,g,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qa).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(qa).join(`
`),g.length>0&&(g+=`
`)):(m=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qa).join(`
`),g=[yd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==hr?"#define TONE_MAPPING":"",t.toneMapping!==hr?at.tonemapping_pars_fragment:"",t.toneMapping!==hr?wy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",at.colorspace_pars_fragment,Ty("linearToOutputTexel",t.outputColorSpace),Ay(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(qa).join(`
`)),a=th(a),a=bd(a,t),a=xd(a,t),o=th(o),o=bd(o,t),o=xd(o,t),a=vd(a),o=vd(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=S+m+a,M=S+g+o,L=gd(i,i.VERTEX_SHADER,y),P=gd(i,i.FRAGMENT_SHADER,M);i.attachShader(b,L),i.attachShader(b,P),t.index0AttributeName!==void 0?i.bindAttribLocation(b,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(b,0,"position"),i.linkProgram(b);function w(R){if(s.debug.checkShaderErrors){const F=i.getProgramInfoLog(b).trim(),j=i.getShaderInfoLog(L).trim(),X=i.getShaderInfoLog(P).trim();let ne=!0,W=!0;if(i.getProgramParameter(b,i.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,b,L,P);else{const ee=_d(i,L,"vertex"),K=_d(i,P,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(b,i.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+ee+`
`+K)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(j===""||X==="")&&(W=!1);W&&(R.diagnostics={runnable:ne,programLog:F,vertexShader:{log:j,prefix:m},fragmentShader:{log:X,prefix:g}})}i.deleteShader(L),i.deleteShader(P),I=new Pc(i,b),B=Py(i,b)}let I;this.getUniforms=function(){return I===void 0&&w(this),I};let B;this.getAttributes=function(){return B===void 0&&w(this),B};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(b,yy)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Sy++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let Gy=0;class Vy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Wy(e),t.set(e,n)),n}}class Wy{constructor(e){this.id=Gy++,this.code=e,this.usedTimes=0}}function Xy(s,e,t,n,i,r,a){const o=new rm,c=new Vy,l=new Set,u=[],h=i.logarithmicDepthBuffer,f=i.reverseDepthBuffer,d=i.vertexTextures;let _=i.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function g(v,R,F,j,X){const ne=j.fog,W=X.geometry,ee=v.isMeshStandardMaterial?j.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||ee),de=K&&K.mapping===rl?K.image.height:null,U=b[v.type];v.precision!==null&&(_=i.getMaxPrecision(v.precision),_!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",_,"instead."));const xe=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Oe=xe!==void 0?xe.length:0;let We=0;W.morphAttributes.position!==void 0&&(We=1),W.morphAttributes.normal!==void 0&&(We=2),W.morphAttributes.color!==void 0&&(We=3);let te,oe,he,ge;if(U){const Fe=Ni[U];te=Fe.vertexShader,oe=Fe.fragmentShader}else te=v.vertexShader,oe=v.fragmentShader,c.update(v),he=c.getVertexShaderID(v),ge=c.getFragmentShaderID(v);const Re=s.getRenderTarget(),Ce=X.isInstancedMesh===!0,Qe=X.isBatchedMesh===!0,qe=!!v.map,Ge=!!v.matcap,N=!!K,ft=!!v.aoMap,Xe=!!v.lightMap,Ke=!!v.bumpMap,G=!!v.normalMap,it=!!v.displacementMap,He=!!v.emissiveMap,D=!!v.metalnessMap,T=!!v.roughnessMap,Z=v.anisotropy>0,re=v.clearcoat>0,fe=v.dispersion>0,ie=v.iridescence>0,Le=v.sheen>0,_e=v.transmission>0,Me=Z&&!!v.anisotropyMap,je=re&&!!v.clearcoatMap,me=re&&!!v.clearcoatNormalMap,Ae=re&&!!v.clearcoatRoughnessMap,Pe=ie&&!!v.iridescenceMap,Ie=ie&&!!v.iridescenceThicknessMap,ve=Le&&!!v.sheenColorMap,$e=Le&&!!v.sheenRoughnessMap,Be=!!v.specularMap,Ye=!!v.specularColorMap,z=!!v.specularIntensityMap,le=_e&&!!v.transmissionMap,H=_e&&!!v.thicknessMap,se=!!v.gradientMap,ye=!!v.alphaMap,Se=v.alphaTest>0,et=!!v.alphaHash,Ct=!!v.extensions;let Ot=hr;v.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(Ot=s.toneMapping);const ct={shaderID:U,shaderType:v.type,shaderName:v.name,vertexShader:te,fragmentShader:oe,defines:v.defines,customVertexShaderID:he,customFragmentShaderID:ge,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:_,batching:Qe,batchingColor:Qe&&X._colorsTexture!==null,instancing:Ce,instancingColor:Ce&&X.instanceColor!==null,instancingMorph:Ce&&X.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Re===null?s.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:sn,alphaToCoverage:!!v.alphaToCoverage,map:qe,matcap:Ge,envMap:N,envMapMode:N&&K.mapping,envMapCubeUVHeight:de,aoMap:ft,lightMap:Xe,bumpMap:Ke,normalMap:G,displacementMap:d&&it,emissiveMap:He,normalMapObjectSpace:G&&v.normalMapType===I_,normalMapTangentSpace:G&&v.normalMapType===$p,metalnessMap:D,roughnessMap:T,anisotropy:Z,anisotropyMap:Me,clearcoat:re,clearcoatMap:je,clearcoatNormalMap:me,clearcoatRoughnessMap:Ae,dispersion:fe,iridescence:ie,iridescenceMap:Pe,iridescenceThicknessMap:Ie,sheen:Le,sheenColorMap:ve,sheenRoughnessMap:$e,specularMap:Be,specularColorMap:Ye,specularIntensityMap:z,transmission:_e,transmissionMap:le,thicknessMap:H,gradientMap:se,opaque:v.transparent===!1&&v.blending===ta&&v.alphaToCoverage===!1,alphaMap:ye,alphaTest:Se,alphaHash:et,combine:v.combine,mapUv:qe&&m(v.map.channel),aoMapUv:ft&&m(v.aoMap.channel),lightMapUv:Xe&&m(v.lightMap.channel),bumpMapUv:Ke&&m(v.bumpMap.channel),normalMapUv:G&&m(v.normalMap.channel),displacementMapUv:it&&m(v.displacementMap.channel),emissiveMapUv:He&&m(v.emissiveMap.channel),metalnessMapUv:D&&m(v.metalnessMap.channel),roughnessMapUv:T&&m(v.roughnessMap.channel),anisotropyMapUv:Me&&m(v.anisotropyMap.channel),clearcoatMapUv:je&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:me&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(v.sheenRoughnessMap.channel),specularMapUv:Be&&m(v.specularMap.channel),specularColorMapUv:Ye&&m(v.specularColorMap.channel),specularIntensityMapUv:z&&m(v.specularIntensityMap.channel),transmissionMapUv:le&&m(v.transmissionMap.channel),thicknessMapUv:H&&m(v.thicknessMap.channel),alphaMapUv:ye&&m(v.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(G||Z),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(qe||ye),fog:!!ne,useFog:v.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Oe,morphTextureStride:We,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&F.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ot,decodeVideoTexture:qe&&v.map.isVideoTexture===!0&&Mt.getTransfer(v.map.colorSpace)===kt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===wi,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Ct&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&v.extensions.multiDraw===!0||Qe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function S(v){const R=[];if(v.shaderID?R.push(v.shaderID):(R.push(v.customVertexShaderID),R.push(v.customFragmentShaderID)),v.defines!==void 0)for(const F in v.defines)R.push(F),R.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(y(R,v),M(R,v),R.push(s.outputColorSpace)),R.push(v.customProgramCacheKey),R.join()}function y(v,R){v.push(R.precision),v.push(R.outputColorSpace),v.push(R.envMapMode),v.push(R.envMapCubeUVHeight),v.push(R.mapUv),v.push(R.alphaMapUv),v.push(R.lightMapUv),v.push(R.aoMapUv),v.push(R.bumpMapUv),v.push(R.normalMapUv),v.push(R.displacementMapUv),v.push(R.emissiveMapUv),v.push(R.metalnessMapUv),v.push(R.roughnessMapUv),v.push(R.anisotropyMapUv),v.push(R.clearcoatMapUv),v.push(R.clearcoatNormalMapUv),v.push(R.clearcoatRoughnessMapUv),v.push(R.iridescenceMapUv),v.push(R.iridescenceThicknessMapUv),v.push(R.sheenColorMapUv),v.push(R.sheenRoughnessMapUv),v.push(R.specularMapUv),v.push(R.specularColorMapUv),v.push(R.specularIntensityMapUv),v.push(R.transmissionMapUv),v.push(R.thicknessMapUv),v.push(R.combine),v.push(R.fogExp2),v.push(R.sizeAttenuation),v.push(R.morphTargetsCount),v.push(R.morphAttributeCount),v.push(R.numDirLights),v.push(R.numPointLights),v.push(R.numSpotLights),v.push(R.numSpotLightMaps),v.push(R.numHemiLights),v.push(R.numRectAreaLights),v.push(R.numDirLightShadows),v.push(R.numPointLightShadows),v.push(R.numSpotLightShadows),v.push(R.numSpotLightShadowsWithMaps),v.push(R.numLightProbes),v.push(R.shadowMapType),v.push(R.toneMapping),v.push(R.numClippingPlanes),v.push(R.numClipIntersection),v.push(R.depthPacking)}function M(v,R){o.disableAll(),R.supportsVertexTextures&&o.enable(0),R.instancing&&o.enable(1),R.instancingColor&&o.enable(2),R.instancingMorph&&o.enable(3),R.matcap&&o.enable(4),R.envMap&&o.enable(5),R.normalMapObjectSpace&&o.enable(6),R.normalMapTangentSpace&&o.enable(7),R.clearcoat&&o.enable(8),R.iridescence&&o.enable(9),R.alphaTest&&o.enable(10),R.vertexColors&&o.enable(11),R.vertexAlphas&&o.enable(12),R.vertexUv1s&&o.enable(13),R.vertexUv2s&&o.enable(14),R.vertexUv3s&&o.enable(15),R.vertexTangents&&o.enable(16),R.anisotropy&&o.enable(17),R.alphaHash&&o.enable(18),R.batching&&o.enable(19),R.dispersion&&o.enable(20),R.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),R.fog&&o.enable(0),R.useFog&&o.enable(1),R.flatShading&&o.enable(2),R.logarithmicDepthBuffer&&o.enable(3),R.reverseDepthBuffer&&o.enable(4),R.skinning&&o.enable(5),R.morphTargets&&o.enable(6),R.morphNormals&&o.enable(7),R.morphColors&&o.enable(8),R.premultipliedAlpha&&o.enable(9),R.shadowMapEnabled&&o.enable(10),R.doubleSided&&o.enable(11),R.flipSided&&o.enable(12),R.useDepthPacking&&o.enable(13),R.dithering&&o.enable(14),R.transmission&&o.enable(15),R.sheen&&o.enable(16),R.opaque&&o.enable(17),R.pointsUvs&&o.enable(18),R.decodeVideoTexture&&o.enable(19),R.alphaToCoverage&&o.enable(20),v.push(o.mask)}function L(v){const R=b[v.type];let F;if(R){const j=Ni[R];F=R0.clone(j.uniforms)}else F=v.uniforms;return F}function P(v,R){let F;for(let j=0,X=u.length;j<X;j++){const ne=u[j];if(ne.cacheKey===R){F=ne,++F.usedTimes;break}}return F===void 0&&(F=new Hy(s,R,v,r),u.push(F)),F}function w(v){if(--v.usedTimes===0){const R=u.indexOf(v);u[R]=u[u.length-1],u.pop(),v.destroy()}}function I(v){c.remove(v)}function B(){c.dispose()}return{getParameters:g,getProgramCacheKey:S,getUniforms:L,acquireProgram:P,releaseProgram:w,releaseShaderCache:I,programs:u,dispose:B}}function qy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function n(a){s.delete(a)}function i(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function jy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Sd(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Md(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function a(h,f,d,_,b,m){let g=s[e];return g===void 0?(g={id:h.id,object:h,geometry:f,material:d,groupOrder:_,renderOrder:h.renderOrder,z:b,group:m},s[e]=g):(g.id=h.id,g.object=h,g.geometry=f,g.material=d,g.groupOrder=_,g.renderOrder=h.renderOrder,g.z=b,g.group=m),e++,g}function o(h,f,d,_,b,m){const g=a(h,f,d,_,b,m);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function c(h,f,d,_,b,m){const g=a(h,f,d,_,b,m);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function l(h,f){t.length>1&&t.sort(h||jy),n.length>1&&n.sort(f||Sd),i.length>1&&i.sort(f||Sd)}function u(){for(let h=e,f=s.length;h<f;h++){const d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:o,unshift:c,finish:u,sort:l}}function Yy(){let s=new WeakMap;function e(n,i){const r=s.get(n);let a;return r===void 0?(a=new Md,s.set(n,[a])):i>=r.length?(a=new Md,r.push(a)):a=r[i],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ky(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new Je};break;case"SpotLight":t={position:new q,direction:new q,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function Zy(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new yt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Jy=0;function Qy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function $y(s){const e=new Ky,t=Zy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);const i=new q,r=new st,a=new st;function o(l){let u=0,h=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let d=0,_=0,b=0,m=0,g=0,S=0,y=0,M=0,L=0,P=0,w=0;l.sort(Qy);for(let B=0,v=l.length;B<v;B++){const R=l[B],F=R.color,j=R.intensity,X=R.distance,ne=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=F.r*j,h+=F.g*j,f+=F.b*j;else if(R.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(R.sh.coefficients[W],j);w++}else if(R.isDirectionalLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const ee=R.shadow,K=t.get(R);K.shadowIntensity=ee.intensity,K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=ne,n.directionalShadowMatrix[d]=R.shadow.matrix,S++}n.directional[d]=W,d++}else if(R.isSpotLight){const W=e.get(R);W.position.setFromMatrixPosition(R.matrixWorld),W.color.copy(F).multiplyScalar(j),W.distance=X,W.coneCos=Math.cos(R.angle),W.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),W.decay=R.decay,n.spot[b]=W;const ee=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,ee.updateMatrices(R),R.castShadow&&P++),n.spotLightMatrix[b]=ee.matrix,R.castShadow){const K=t.get(R);K.shadowIntensity=ee.intensity,K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,n.spotShadow[b]=K,n.spotShadowMap[b]=ne,M++}b++}else if(R.isRectAreaLight){const W=e.get(R);W.color.copy(F).multiplyScalar(j),W.halfWidth.set(R.width*.5,0,0),W.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=W,m++}else if(R.isPointLight){const W=e.get(R);if(W.color.copy(R.color).multiplyScalar(R.intensity),W.distance=R.distance,W.decay=R.decay,R.castShadow){const ee=R.shadow,K=t.get(R);K.shadowIntensity=ee.intensity,K.shadowBias=ee.bias,K.shadowNormalBias=ee.normalBias,K.shadowRadius=ee.radius,K.shadowMapSize=ee.mapSize,K.shadowCameraNear=ee.camera.near,K.shadowCameraFar=ee.camera.far,n.pointShadow[_]=K,n.pointShadowMap[_]=ne,n.pointShadowMatrix[_]=R.shadow.matrix,y++}n.point[_]=W,_++}else if(R.isHemisphereLight){const W=e.get(R);W.skyColor.copy(R.color).multiplyScalar(j),W.groundColor.copy(R.groundColor).multiplyScalar(j),n.hemi[g]=W,g++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Te.LTC_FLOAT_1,n.rectAreaLTC2=Te.LTC_FLOAT_2):(n.rectAreaLTC1=Te.LTC_HALF_1,n.rectAreaLTC2=Te.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==d||I.pointLength!==_||I.spotLength!==b||I.rectAreaLength!==m||I.hemiLength!==g||I.numDirectionalShadows!==S||I.numPointShadows!==y||I.numSpotShadows!==M||I.numSpotMaps!==L||I.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=b,n.rectArea.length=m,n.point.length=_,n.hemi.length=g,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+L-P,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=w,I.directionalLength=d,I.pointLength=_,I.spotLength=b,I.rectAreaLength=m,I.hemiLength=g,I.numDirectionalShadows=S,I.numPointShadows=y,I.numSpotShadows=M,I.numSpotMaps=L,I.numLightProbes=w,n.version=Jy++)}function c(l,u){let h=0,f=0,d=0,_=0,b=0;const m=u.matrixWorldInverse;for(let g=0,S=l.length;g<S;g++){const y=l[g];if(y.isDirectionalLight){const M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(y.isSpotLight){const M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){const M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const M=n.hemi[b];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),b++}}}return{setup:o,setupView:c,state:n}}function Ed(s){const e=new $y(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function eS(s){let e=new WeakMap;function t(i,r=0){const a=e.get(i);let o;return a===void 0?(o=new Ed(s),e.set(i,[o])):r>=a.length?(o=new Ed(s),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class tS extends Hi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=L_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class nS extends Hi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const iS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rS=`uniform sampler2D shadow_pass;
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
}`;function sS(s,e,t){let n=new zh;const i=new yt,r=new yt,a=new Tt,o=new tS({depthPacking:D_}),c=new nS,l={},u=t.maxTextureSize,h={[dr]:Fn,[Fn]:dr,[wi]:wi},f=new kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new yt},radius:{value:4}},vertexShader:iS,fragmentShader:rS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const _=new _i;_.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new bt(_,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dp;let g=this.type;this.render=function(P,w,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||P.length===0)return;const B=s.getRenderTarget(),v=s.getActiveCubeFace(),R=s.getActiveMipmapLevel(),F=s.state;F.setBlending(Ur),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const j=g!==er&&this.type===er,X=g===er&&this.type!==er;for(let ne=0,W=P.length;ne<W;ne++){const ee=P[ne],K=ee.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;i.copy(K.mapSize);const de=K.getFrameExtents();if(i.multiply(de),r.copy(K.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/de.x),i.x=r.x*de.x,K.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/de.y),i.y=r.y*de.y,K.mapSize.y=r.y)),K.map===null||j===!0||X===!0){const xe=this.type!==er?{minFilter:On,magFilter:On}:{};K.map!==null&&K.map.dispose(),K.map=new ys(i.x,i.y,xe),K.map.texture.name=ee.name+".shadowMap",K.camera.updateProjectionMatrix()}s.setRenderTarget(K.map),s.clear();const U=K.getViewportCount();for(let xe=0;xe<U;xe++){const Oe=K.getViewport(xe);a.set(r.x*Oe.x,r.y*Oe.y,r.x*Oe.z,r.y*Oe.w),F.viewport(a),K.updateMatrices(ee,xe),n=K.getFrustum(),M(w,I,K.camera,ee,this.type)}K.isPointLightShadow!==!0&&this.type===er&&S(K,I),K.needsUpdate=!1}g=this.type,m.needsUpdate=!1,s.setRenderTarget(B,v,R)};function S(P,w){const I=e.update(b);f.defines.VSM_SAMPLES!==P.blurSamples&&(f.defines.VSM_SAMPLES=P.blurSamples,d.defines.VSM_SAMPLES=P.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ys(i.x,i.y)),f.uniforms.shadow_pass.value=P.map.texture,f.uniforms.resolution.value=P.mapSize,f.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(w,null,I,f,b,null),d.uniforms.shadow_pass.value=P.mapPass.texture,d.uniforms.resolution.value=P.mapSize,d.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(w,null,I,d,b,null)}function y(P,w,I,B){let v=null;const R=I.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(R!==void 0)v=R;else if(v=I.isPointLight===!0?c:o,s.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=v.uuid,j=w.uuid;let X=l[F];X===void 0&&(X={},l[F]=X);let ne=X[j];ne===void 0&&(ne=v.clone(),X[j]=ne,w.addEventListener("dispose",L)),v=ne}if(v.visible=w.visible,v.wireframe=w.wireframe,B===er?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:h[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const F=s.properties.get(v);F.light=I}return v}function M(P,w,I,B,v){if(P.visible===!1)return;if(P.layers.test(w.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&v===er)&&(!P.frustumCulled||n.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,P.matrixWorld);const j=e.update(P),X=P.material;if(Array.isArray(X)){const ne=j.groups;for(let W=0,ee=ne.length;W<ee;W++){const K=ne[W],de=X[K.materialIndex];if(de&&de.visible){const U=y(P,de,B,v);P.onBeforeShadow(s,P,w,I,j,U,K),s.renderBufferDirect(I,null,j,U,P,K),P.onAfterShadow(s,P,w,I,j,U,K)}}}else if(X.visible){const ne=y(P,X,B,v);P.onBeforeShadow(s,P,w,I,j,ne,null),s.renderBufferDirect(I,null,j,ne,P,null),P.onAfterShadow(s,P,w,I,j,ne,null)}}const F=P.children;for(let j=0,X=F.length;j<X;j++)M(F[j],w,I,B,v)}function L(P){P.target.removeEventListener("dispose",L);for(const I in l){const B=l[I],v=P.target.uuid;v in B&&(B[v].dispose(),delete B[v])}}}const aS={[_u]:bu,[xu]:Su,[vu]:Mu,[fa]:yu,[bu]:_u,[Su]:xu,[Mu]:vu,[yu]:fa};function oS(s){function e(){let z=!1;const le=new Tt;let H=null;const se=new Tt(0,0,0,0);return{setMask:function(ye){H!==ye&&!z&&(s.colorMask(ye,ye,ye,ye),H=ye)},setLocked:function(ye){z=ye},setClear:function(ye,Se,et,Ct,Ot){Ot===!0&&(ye*=Ct,Se*=Ct,et*=Ct),le.set(ye,Se,et,Ct),se.equals(le)===!1&&(s.clearColor(ye,Se,et,Ct),se.copy(le))},reset:function(){z=!1,H=null,se.set(-1,0,0,0)}}}function t(){let z=!1,le=!1,H=null,se=null,ye=null;return{setReversed:function(Se){le=Se},setTest:function(Se){Se?he(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Se){H!==Se&&!z&&(s.depthMask(Se),H=Se)},setFunc:function(Se){if(le&&(Se=aS[Se]),se!==Se){switch(Se){case _u:s.depthFunc(s.NEVER);break;case bu:s.depthFunc(s.ALWAYS);break;case xu:s.depthFunc(s.LESS);break;case fa:s.depthFunc(s.LEQUAL);break;case vu:s.depthFunc(s.EQUAL);break;case yu:s.depthFunc(s.GEQUAL);break;case Su:s.depthFunc(s.GREATER);break;case Mu:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}se=Se}},setLocked:function(Se){z=Se},setClear:function(Se){ye!==Se&&(s.clearDepth(Se),ye=Se)},reset:function(){z=!1,H=null,se=null,ye=null}}}function n(){let z=!1,le=null,H=null,se=null,ye=null,Se=null,et=null,Ct=null,Ot=null;return{setTest:function(ct){z||(ct?he(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(ct){le!==ct&&!z&&(s.stencilMask(ct),le=ct)},setFunc:function(ct,Fe,Ue){(H!==ct||se!==Fe||ye!==Ue)&&(s.stencilFunc(ct,Fe,Ue),H=ct,se=Fe,ye=Ue)},setOp:function(ct,Fe,Ue){(Se!==ct||et!==Fe||Ct!==Ue)&&(s.stencilOp(ct,Fe,Ue),Se=ct,et=Fe,Ct=Ue)},setLocked:function(ct){z=ct},setClear:function(ct){Ot!==ct&&(s.clearStencil(ct),Ot=ct)},reset:function(){z=!1,le=null,H=null,se=null,ye=null,Se=null,et=null,Ct=null,Ot=null}}}const i=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,f=[],d=null,_=!1,b=null,m=null,g=null,S=null,y=null,M=null,L=null,P=new Je(0,0,0),w=0,I=!1,B=null,v=null,R=null,F=null,j=null;const X=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,W=0;const ee=s.getParameter(s.VERSION);ee.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(ee)[1]),ne=W>=1):ee.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),ne=W>=2);let K=null,de={};const U=s.getParameter(s.SCISSOR_BOX),xe=s.getParameter(s.VIEWPORT),Oe=new Tt().fromArray(U),We=new Tt().fromArray(xe);function te(z,le,H,se){const ye=new Uint8Array(4),Se=s.createTexture();s.bindTexture(z,Se),s.texParameteri(z,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(z,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let et=0;et<H;et++)z===s.TEXTURE_3D||z===s.TEXTURE_2D_ARRAY?s.texImage3D(le,0,s.RGBA,1,1,se,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(le+et,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return Se}const oe={};oe[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),oe[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),oe[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),a.setClear(0),he(s.DEPTH_TEST),r.setFunc(fa),Xe(!1),Ke(Rf),he(s.CULL_FACE),N(Ur);function he(z){l[z]!==!0&&(s.enable(z),l[z]=!0)}function ge(z){l[z]!==!1&&(s.disable(z),l[z]=!1)}function Re(z,le){return u[z]!==le?(s.bindFramebuffer(z,le),u[z]=le,z===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=le),z===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=le),!0):!1}function Ce(z,le){let H=f,se=!1;if(z){H=h.get(le),H===void 0&&(H=[],h.set(le,H));const ye=z.textures;if(H.length!==ye.length||H[0]!==s.COLOR_ATTACHMENT0){for(let Se=0,et=ye.length;Se<et;Se++)H[Se]=s.COLOR_ATTACHMENT0+Se;H.length=ye.length,se=!0}}else H[0]!==s.BACK&&(H[0]=s.BACK,se=!0);se&&s.drawBuffers(H)}function Qe(z){return d!==z?(s.useProgram(z),d=z,!0):!1}const qe={[os]:s.FUNC_ADD,[c_]:s.FUNC_SUBTRACT,[l_]:s.FUNC_REVERSE_SUBTRACT};qe[u_]=s.MIN,qe[h_]=s.MAX;const Ge={[f_]:s.ZERO,[d_]:s.ONE,[p_]:s.SRC_COLOR,[mu]:s.SRC_ALPHA,[v_]:s.SRC_ALPHA_SATURATE,[b_]:s.DST_COLOR,[g_]:s.DST_ALPHA,[m_]:s.ONE_MINUS_SRC_COLOR,[gu]:s.ONE_MINUS_SRC_ALPHA,[x_]:s.ONE_MINUS_DST_COLOR,[__]:s.ONE_MINUS_DST_ALPHA,[y_]:s.CONSTANT_COLOR,[S_]:s.ONE_MINUS_CONSTANT_COLOR,[M_]:s.CONSTANT_ALPHA,[E_]:s.ONE_MINUS_CONSTANT_ALPHA};function N(z,le,H,se,ye,Se,et,Ct,Ot,ct){if(z===Ur){_===!0&&(ge(s.BLEND),_=!1);return}if(_===!1&&(he(s.BLEND),_=!0),z!==o_){if(z!==b||ct!==I){if((m!==os||y!==os)&&(s.blendEquation(s.FUNC_ADD),m=os,y=os),ct)switch(z){case ta:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cf:s.blendFunc(s.ONE,s.ONE);break;case Pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lf:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case ta:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Cf:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Pf:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Lf:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}g=null,S=null,M=null,L=null,P.set(0,0,0),w=0,b=z,I=ct}return}ye=ye||le,Se=Se||H,et=et||se,(le!==m||ye!==y)&&(s.blendEquationSeparate(qe[le],qe[ye]),m=le,y=ye),(H!==g||se!==S||Se!==M||et!==L)&&(s.blendFuncSeparate(Ge[H],Ge[se],Ge[Se],Ge[et]),g=H,S=se,M=Se,L=et),(Ct.equals(P)===!1||Ot!==w)&&(s.blendColor(Ct.r,Ct.g,Ct.b,Ot),P.copy(Ct),w=Ot),b=z,I=!1}function ft(z,le){z.side===wi?ge(s.CULL_FACE):he(s.CULL_FACE);let H=z.side===Fn;le&&(H=!H),Xe(H),z.blending===ta&&z.transparent===!1?N(Ur):N(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),i.setMask(z.colorWrite);const se=z.stencilWrite;a.setTest(se),se&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?he(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function Xe(z){B!==z&&(z?s.frontFace(s.CW):s.frontFace(s.CCW),B=z)}function Ke(z){z!==s_?(he(s.CULL_FACE),z!==v&&(z===Rf?s.cullFace(s.BACK):z===a_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),v=z}function G(z){z!==R&&(ne&&s.lineWidth(z),R=z)}function it(z,le,H){z?(he(s.POLYGON_OFFSET_FILL),(F!==le||j!==H)&&(s.polygonOffset(le,H),F=le,j=H)):ge(s.POLYGON_OFFSET_FILL)}function He(z){z?he(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function D(z){z===void 0&&(z=s.TEXTURE0+X-1),K!==z&&(s.activeTexture(z),K=z)}function T(z,le,H){H===void 0&&(K===null?H=s.TEXTURE0+X-1:H=K);let se=de[H];se===void 0&&(se={type:void 0,texture:void 0},de[H]=se),(se.type!==z||se.texture!==le)&&(K!==H&&(s.activeTexture(H),K=H),s.bindTexture(z,le||oe[z]),se.type=z,se.texture=le)}function Z(){const z=de[K];z!==void 0&&z.type!==void 0&&(s.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function re(){try{s.compressedTexImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function fe(){try{s.compressedTexImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ie(){try{s.texSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Le(){try{s.texSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _e(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Me(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function je(){try{s.texStorage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function me(){try{s.texStorage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ae(){try{s.texImage2D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pe(){try{s.texImage3D.apply(s,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ie(z){Oe.equals(z)===!1&&(s.scissor(z.x,z.y,z.z,z.w),Oe.copy(z))}function ve(z){We.equals(z)===!1&&(s.viewport(z.x,z.y,z.z,z.w),We.copy(z))}function $e(z,le){let H=c.get(le);H===void 0&&(H=new WeakMap,c.set(le,H));let se=H.get(z);se===void 0&&(se=s.getUniformBlockIndex(le,z.name),H.set(z,se))}function Be(z,le){const se=c.get(le).get(z);o.get(le)!==se&&(s.uniformBlockBinding(le,se,z.__bindingPointIndex),o.set(le,se))}function Ye(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},K=null,de={},u={},h=new WeakMap,f=[],d=null,_=!1,b=null,m=null,g=null,S=null,y=null,M=null,L=null,P=new Je(0,0,0),w=0,I=!1,B=null,v=null,R=null,F=null,j=null,Oe.set(0,0,s.canvas.width,s.canvas.height),We.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),a.reset()}return{buffers:{color:i,depth:r,stencil:a},enable:he,disable:ge,bindFramebuffer:Re,drawBuffers:Ce,useProgram:Qe,setBlending:N,setMaterial:ft,setFlipSided:Xe,setCullFace:Ke,setLineWidth:G,setPolygonOffset:it,setScissorTest:He,activeTexture:D,bindTexture:T,unbindTexture:Z,compressedTexImage2D:re,compressedTexImage3D:fe,texImage2D:Ae,texImage3D:Pe,updateUBOMapping:$e,uniformBlockBinding:Be,texStorage2D:je,texStorage3D:me,texSubImage2D:ie,texSubImage3D:Le,compressedTexSubImage2D:_e,compressedTexSubImage3D:Me,scissor:Ie,viewport:ve,reset:Ye}}function Td(s,e,t,n){const i=cS(n);switch(t){case qp:return s*e;case Yp:return s*e;case Kp:return s*e*2;case sl:return s*e/i.components*i.byteLength;case Nh:return s*e/i.components*i.byteLength;case Zp:return s*e*2/i.components*i.byteLength;case Oh:return s*e*2/i.components*i.byteLength;case jp:return s*e*3/i.components*i.byteLength;case ti:return s*e*4/i.components*i.byteLength;case Fh:return s*e*4/i.components*i.byteLength;case Ec:case Tc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case wc:case Ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Au:case Cu:return Math.max(s,16)*Math.max(e,8)/4;case wu:case Ru:return Math.max(s,8)*Math.max(e,8)/2;case Pu:case Lu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Iu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uu:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Nu:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Ou:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ku:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Bu:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zu:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Hu:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Gu:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Vu:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wu:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xu:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case qu:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Rc:case ju:case Yu:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Jp:case Ku:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zu:case Ju:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function cS(s){switch(s){case pr:case Vp:return{byteLength:1,components:1};case _o:case Wp:case or:return{byteLength:2,components:1};case Ih:case Uh:return{byteLength:2,components:4};case vs:case Dh:case zn:return{byteLength:4,components:1};case Xp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function lS(s,e,t,n,i,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new yt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return d?new OffscreenCanvas(D,T):vo("canvas")}function b(D,T,Z){let re=1;const fe=He(D);if((fe.width>Z||fe.height>Z)&&(re=Z/Math.max(fe.width,fe.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(re*fe.width),Le=Math.floor(re*fe.height);h===void 0&&(h=_(ie,Le));const _e=T?_(ie,Le):h;return _e.width=ie,_e.height=Le,_e.getContext("2d").drawImage(D,0,0,ie,Le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+ie+"x"+Le+")."),_e}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==On&&D.minFilter!==pn}function g(D){s.generateMipmap(D)}function S(D,T,Z,re,fe=!1){if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ie=T;if(T===s.RED&&(Z===s.FLOAT&&(ie=s.R32F),Z===s.HALF_FLOAT&&(ie=s.R16F),Z===s.UNSIGNED_BYTE&&(ie=s.R8)),T===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.R8UI),Z===s.UNSIGNED_SHORT&&(ie=s.R16UI),Z===s.UNSIGNED_INT&&(ie=s.R32UI),Z===s.BYTE&&(ie=s.R8I),Z===s.SHORT&&(ie=s.R16I),Z===s.INT&&(ie=s.R32I)),T===s.RG&&(Z===s.FLOAT&&(ie=s.RG32F),Z===s.HALF_FLOAT&&(ie=s.RG16F),Z===s.UNSIGNED_BYTE&&(ie=s.RG8)),T===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.RG8UI),Z===s.UNSIGNED_SHORT&&(ie=s.RG16UI),Z===s.UNSIGNED_INT&&(ie=s.RG32UI),Z===s.BYTE&&(ie=s.RG8I),Z===s.SHORT&&(ie=s.RG16I),Z===s.INT&&(ie=s.RG32I)),T===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(ie=s.RGB16UI),Z===s.UNSIGNED_INT&&(ie=s.RGB32UI),Z===s.BYTE&&(ie=s.RGB8I),Z===s.SHORT&&(ie=s.RGB16I),Z===s.INT&&(ie=s.RGB32I)),T===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(ie=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(ie=s.RGBA16UI),Z===s.UNSIGNED_INT&&(ie=s.RGBA32UI),Z===s.BYTE&&(ie=s.RGBA8I),Z===s.SHORT&&(ie=s.RGBA16I),Z===s.INT&&(ie=s.RGBA32I)),T===s.RGB&&Z===s.UNSIGNED_INT_5_9_9_9_REV&&(ie=s.RGB9_E5),T===s.RGBA){const Le=fe?Hc:Mt.getTransfer(re);Z===s.FLOAT&&(ie=s.RGBA32F),Z===s.HALF_FLOAT&&(ie=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(ie=Le===kt?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT_4_4_4_4&&(ie=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(ie=s.RGB5_A1)}return(ie===s.R16F||ie===s.R32F||ie===s.RG16F||ie===s.RG32F||ie===s.RGBA16F||ie===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(D,T){let Z;return D?T===null||T===vs||T===ga?Z=s.DEPTH24_STENCIL8:T===zn?Z=s.DEPTH32F_STENCIL8:T===_o&&(Z=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===vs||T===ga?Z=s.DEPTH_COMPONENT24:T===zn?Z=s.DEPTH_COMPONENT32F:T===_o&&(Z=s.DEPTH_COMPONENT16),Z}function M(D,T){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==On&&D.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function L(D){const T=D.target;T.removeEventListener("dispose",L),w(T),T.isVideoTexture&&u.delete(T)}function P(D){const T=D.target;T.removeEventListener("dispose",P),B(T)}function w(D){const T=n.get(D);if(T.__webglInit===void 0)return;const Z=D.source,re=f.get(Z);if(re){const fe=re[T.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&I(D),Object.keys(re).length===0&&f.delete(Z)}n.remove(D)}function I(D){const T=n.get(D);s.deleteTexture(T.__webglTexture);const Z=D.source,re=f.get(Z);delete re[T.__cacheKey],a.memory.textures--}function B(D){const T=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(T.__webglFramebuffer[re]))for(let fe=0;fe<T.__webglFramebuffer[re].length;fe++)s.deleteFramebuffer(T.__webglFramebuffer[re][fe]);else s.deleteFramebuffer(T.__webglFramebuffer[re]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[re])}else{if(Array.isArray(T.__webglFramebuffer))for(let re=0;re<T.__webglFramebuffer.length;re++)s.deleteFramebuffer(T.__webglFramebuffer[re]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let re=0;re<T.__webglColorRenderbuffer.length;re++)T.__webglColorRenderbuffer[re]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[re]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Z=D.textures;for(let re=0,fe=Z.length;re<fe;re++){const ie=n.get(Z[re]);ie.__webglTexture&&(s.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(Z[re])}n.remove(D)}let v=0;function R(){v=0}function F(){const D=v;return D>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),v+=1,D}function j(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function X(D,T){const Z=n.get(D);if(D.isVideoTexture&&G(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{We(Z,D,T);return}}t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+T)}function ne(D,T){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){We(Z,D,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+T)}function W(D,T){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){We(Z,D,T);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+T)}function ee(D,T){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){te(Z,D,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+T)}const K={[ma]:s.REPEAT,[Fi]:s.CLAMP_TO_EDGE,[zc]:s.MIRRORED_REPEAT},de={[On]:s.NEAREST,[Gp]:s.NEAREST_MIPMAP_NEAREST,[Xa]:s.NEAREST_MIPMAP_LINEAR,[pn]:s.LINEAR,[Mc]:s.LINEAR_MIPMAP_NEAREST,[ki]:s.LINEAR_MIPMAP_LINEAR},U={[U_]:s.NEVER,[z_]:s.ALWAYS,[N_]:s.LESS,[em]:s.LEQUAL,[O_]:s.EQUAL,[B_]:s.GEQUAL,[F_]:s.GREATER,[k_]:s.NOTEQUAL};function xe(D,T){if(T.type===zn&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===pn||T.magFilter===Mc||T.magFilter===Xa||T.magFilter===ki||T.minFilter===pn||T.minFilter===Mc||T.minFilter===Xa||T.minFilter===ki)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,K[T.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,K[T.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,K[T.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,de[T.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,de[T.minFilter]),T.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===On||T.minFilter!==Xa&&T.minFilter!==ki||T.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function Oe(D,T){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",L));const re=T.source;let fe=f.get(re);fe===void 0&&(fe={},f.set(re,fe));const ie=j(T);if(ie!==D.__cacheKey){fe[ie]===void 0&&(fe[ie]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,Z=!0),fe[ie].usedTimes++;const Le=fe[D.__cacheKey];Le!==void 0&&(fe[D.__cacheKey].usedTimes--,Le.usedTimes===0&&I(T)),D.__cacheKey=ie,D.__webglTexture=fe[ie].texture}return Z}function We(D,T,Z){let re=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(re=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(re=s.TEXTURE_3D);const fe=Oe(D,T),ie=T.source;t.bindTexture(re,D.__webglTexture,s.TEXTURE0+Z);const Le=n.get(ie);if(ie.version!==Le.__version||fe===!0){t.activeTexture(s.TEXTURE0+Z);const _e=Mt.getPrimaries(Mt.workingColorSpace),Me=T.colorSpace===rr?null:Mt.getPrimaries(T.colorSpace),je=T.colorSpace===rr||_e===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,je);let me=b(T.image,!1,i.maxTextureSize);me=it(T,me);const Ae=r.convert(T.format,T.colorSpace),Pe=r.convert(T.type);let Ie=S(T.internalFormat,Ae,Pe,T.colorSpace,T.isVideoTexture);xe(re,T);let ve;const $e=T.mipmaps,Be=T.isVideoTexture!==!0,Ye=Le.__version===void 0||fe===!0,z=ie.dataReady,le=M(T,me);if(T.isDepthTexture)Ie=y(T.format===_a,T.type),Ye&&(Be?t.texStorage2D(s.TEXTURE_2D,1,Ie,me.width,me.height):t.texImage2D(s.TEXTURE_2D,0,Ie,me.width,me.height,0,Ae,Pe,null));else if(T.isDataTexture)if($e.length>0){Be&&Ye&&t.texStorage2D(s.TEXTURE_2D,le,Ie,$e[0].width,$e[0].height);for(let H=0,se=$e.length;H<se;H++)ve=$e[H],Be?z&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ve.width,ve.height,Ae,Pe,ve.data):t.texImage2D(s.TEXTURE_2D,H,Ie,ve.width,ve.height,0,Ae,Pe,ve.data);T.generateMipmaps=!1}else Be?(Ye&&t.texStorage2D(s.TEXTURE_2D,le,Ie,me.width,me.height),z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,me.width,me.height,Ae,Pe,me.data)):t.texImage2D(s.TEXTURE_2D,0,Ie,me.width,me.height,0,Ae,Pe,me.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Be&&Ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Ie,$e[0].width,$e[0].height,me.depth);for(let H=0,se=$e.length;H<se;H++)if(ve=$e[H],T.format!==ti)if(Ae!==null)if(Be){if(z)if(T.layerUpdates.size>0){const ye=Td(ve.width,ve.height,T.format,T.type);for(const Se of T.layerUpdates){const et=ve.data.subarray(Se*ye/ve.data.BYTES_PER_ELEMENT,(Se+1)*ye/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,Se,ve.width,ve.height,1,Ae,et,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,me.depth,Ae,ve.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,H,Ie,ve.width,ve.height,me.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?z&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,me.depth,Ae,Pe,ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,H,Ie,ve.width,ve.height,me.depth,0,Ae,Pe,ve.data)}else{Be&&Ye&&t.texStorage2D(s.TEXTURE_2D,le,Ie,$e[0].width,$e[0].height);for(let H=0,se=$e.length;H<se;H++)ve=$e[H],T.format!==ti?Ae!==null?Be?z&&t.compressedTexSubImage2D(s.TEXTURE_2D,H,0,0,ve.width,ve.height,Ae,ve.data):t.compressedTexImage2D(s.TEXTURE_2D,H,Ie,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?z&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,ve.width,ve.height,Ae,Pe,ve.data):t.texImage2D(s.TEXTURE_2D,H,Ie,ve.width,ve.height,0,Ae,Pe,ve.data)}else if(T.isDataArrayTexture)if(Be){if(Ye&&t.texStorage3D(s.TEXTURE_2D_ARRAY,le,Ie,me.width,me.height,me.depth),z)if(T.layerUpdates.size>0){const H=Td(me.width,me.height,T.format,T.type);for(const se of T.layerUpdates){const ye=me.data.subarray(se*H/me.data.BYTES_PER_ELEMENT,(se+1)*H/me.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,se,me.width,me.height,1,Ae,Pe,ye)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,me.width,me.height,me.depth,Ae,Pe,me.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,me.width,me.height,me.depth,0,Ae,Pe,me.data);else if(T.isData3DTexture)Be?(Ye&&t.texStorage3D(s.TEXTURE_3D,le,Ie,me.width,me.height,me.depth),z&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,me.width,me.height,me.depth,Ae,Pe,me.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,me.width,me.height,me.depth,0,Ae,Pe,me.data);else if(T.isFramebufferTexture){if(Ye)if(Be)t.texStorage2D(s.TEXTURE_2D,le,Ie,me.width,me.height);else{let H=me.width,se=me.height;for(let ye=0;ye<le;ye++)t.texImage2D(s.TEXTURE_2D,ye,Ie,H,se,0,Ae,Pe,null),H>>=1,se>>=1}}else if($e.length>0){if(Be&&Ye){const H=He($e[0]);t.texStorage2D(s.TEXTURE_2D,le,Ie,H.width,H.height)}for(let H=0,se=$e.length;H<se;H++)ve=$e[H],Be?z&&t.texSubImage2D(s.TEXTURE_2D,H,0,0,Ae,Pe,ve):t.texImage2D(s.TEXTURE_2D,H,Ie,Ae,Pe,ve);T.generateMipmaps=!1}else if(Be){if(Ye){const H=He(me);t.texStorage2D(s.TEXTURE_2D,le,Ie,H.width,H.height)}z&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ae,Pe,me)}else t.texImage2D(s.TEXTURE_2D,0,Ie,Ae,Pe,me);m(T)&&g(re),Le.__version=ie.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function te(D,T,Z){if(T.image.length!==6)return;const re=Oe(D,T),fe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+Z);const ie=n.get(fe);if(fe.version!==ie.__version||re===!0){t.activeTexture(s.TEXTURE0+Z);const Le=Mt.getPrimaries(Mt.workingColorSpace),_e=T.colorSpace===rr?null:Mt.getPrimaries(T.colorSpace),Me=T.colorSpace===rr||Le===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const je=T.isCompressedTexture||T.image[0].isCompressedTexture,me=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let se=0;se<6;se++)!je&&!me?Ae[se]=b(T.image[se],!0,i.maxCubemapSize):Ae[se]=me?T.image[se].image:T.image[se],Ae[se]=it(T,Ae[se]);const Pe=Ae[0],Ie=r.convert(T.format,T.colorSpace),ve=r.convert(T.type),$e=S(T.internalFormat,Ie,ve,T.colorSpace),Be=T.isVideoTexture!==!0,Ye=ie.__version===void 0||re===!0,z=fe.dataReady;let le=M(T,Pe);xe(s.TEXTURE_CUBE_MAP,T);let H;if(je){Be&&Ye&&t.texStorage2D(s.TEXTURE_CUBE_MAP,le,$e,Pe.width,Pe.height);for(let se=0;se<6;se++){H=Ae[se].mipmaps;for(let ye=0;ye<H.length;ye++){const Se=H[ye];T.format!==ti?Ie!==null?Be?z&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,Se.width,Se.height,Ie,Se.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,$e,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Be?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,0,0,Se.width,Se.height,Ie,ve,Se.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye,$e,Se.width,Se.height,0,Ie,ve,Se.data)}}}else{if(H=T.mipmaps,Be&&Ye){H.length>0&&le++;const se=He(Ae[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,le,$e,se.width,se.height)}for(let se=0;se<6;se++)if(me){Be?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ae[se].width,Ae[se].height,Ie,ve,Ae[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Ae[se].width,Ae[se].height,0,Ie,ve,Ae[se].data);for(let ye=0;ye<H.length;ye++){const et=H[ye].image[se].image;Be?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,et.width,et.height,Ie,ve,et.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,$e,et.width,et.height,0,Ie,ve,et.data)}}else{Be?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Ie,ve,Ae[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,$e,Ie,ve,Ae[se]);for(let ye=0;ye<H.length;ye++){const Se=H[ye];Be?z&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,0,0,Ie,ve,Se.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,ye+1,$e,Ie,ve,Se.image[se])}}}m(T)&&g(s.TEXTURE_CUBE_MAP),ie.__version=fe.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function oe(D,T,Z,re,fe,ie){const Le=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),Me=S(Z.internalFormat,Le,_e,Z.colorSpace);if(!n.get(T).__hasExternalTextures){const me=Math.max(1,T.width>>ie),Ae=Math.max(1,T.height>>ie);fe===s.TEXTURE_3D||fe===s.TEXTURE_2D_ARRAY?t.texImage3D(fe,ie,Me,me,Ae,T.depth,0,Le,_e,null):t.texImage2D(fe,ie,Me,me,Ae,0,Le,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),Ke(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,re,fe,n.get(Z).__webglTexture,0,Xe(T)):(fe===s.TEXTURE_2D||fe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,re,fe,n.get(Z).__webglTexture,ie),t.bindFramebuffer(s.FRAMEBUFFER,null)}function he(D,T,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,D),T.depthBuffer){const re=T.depthTexture,fe=re&&re.isDepthTexture?re.type:null,ie=y(T.stencilBuffer,fe),Le=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=Xe(T);Ke(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,_e,ie,T.width,T.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,_e,ie,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ie,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Le,s.RENDERBUFFER,D)}else{const re=T.textures;for(let fe=0;fe<re.length;fe++){const ie=re[fe],Le=r.convert(ie.format,ie.colorSpace),_e=r.convert(ie.type),Me=S(ie.internalFormat,Le,_e,ie.colorSpace),je=Xe(T);Z&&Ke(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,je,Me,T.width,T.height):Ke(T)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je,Me,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Me,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),X(T.depthTexture,0);const re=n.get(T.depthTexture).__webglTexture,fe=Xe(T);if(T.depthTexture.format===na)Ke(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,re,0);else if(T.depthTexture.format===_a)Ke(T)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Re(D){const T=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),re){const fe=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,re.removeEventListener("dispose",fe)};re.addEventListener("dispose",fe),T.__depthDisposeCallback=fe}T.__boundDepthTexture=re}if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ge(T.__webglFramebuffer,D)}else if(Z){T.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[re]),T.__webglDepthbuffer[re]===void 0)T.__webglDepthbuffer[re]=s.createRenderbuffer(),he(T.__webglDepthbuffer[re],D,!1);else{const fe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ie=T.__webglDepthbuffer[re];s.bindRenderbuffer(s.RENDERBUFFER,ie),s.framebufferRenderbuffer(s.FRAMEBUFFER,fe,s.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),he(T.__webglDepthbuffer,D,!1);else{const re=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,re,s.RENDERBUFFER,fe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ce(D,T,Z){const re=n.get(D);T!==void 0&&oe(re.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&Re(D)}function Qe(D){const T=D.texture,Z=n.get(D),re=n.get(T);D.addEventListener("dispose",P);const fe=D.textures,ie=D.isWebGLCubeRenderTarget===!0,Le=fe.length>1;if(Le||(re.__webglTexture===void 0&&(re.__webglTexture=s.createTexture()),re.__version=T.version,a.memory.textures++),ie){Z.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer[_e]=[];for(let Me=0;Me<T.mipmaps.length;Me++)Z.__webglFramebuffer[_e][Me]=s.createFramebuffer()}else Z.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Z.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)Z.__webglFramebuffer[_e]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Le)for(let _e=0,Me=fe.length;_e<Me;_e++){const je=n.get(fe[_e]);je.__webglTexture===void 0&&(je.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&Ke(D)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let _e=0;_e<fe.length;_e++){const Me=fe[_e];Z.__webglColorRenderbuffer[_e]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[_e]);const je=r.convert(Me.format,Me.colorSpace),me=r.convert(Me.type),Ae=S(Me.internalFormat,je,me,Me.colorSpace,D.isXRRenderTarget===!0),Pe=Xe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Pe,Ae,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+_e,s.RENDERBUFFER,Z.__webglColorRenderbuffer[_e])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),he(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ie){t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture),xe(s.TEXTURE_CUBE_MAP,T);for(let _e=0;_e<6;_e++)if(T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)oe(Z.__webglFramebuffer[_e][Me],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else oe(Z.__webglFramebuffer[_e],D,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);m(T)&&g(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Le){for(let _e=0,Me=fe.length;_e<Me;_e++){const je=fe[_e],me=n.get(je);t.bindTexture(s.TEXTURE_2D,me.__webglTexture),xe(s.TEXTURE_2D,je),oe(Z.__webglFramebuffer,D,je,s.COLOR_ATTACHMENT0+_e,s.TEXTURE_2D,0),m(je)&&g(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(_e=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,re.__webglTexture),xe(_e,T),T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)oe(Z.__webglFramebuffer[Me],D,T,s.COLOR_ATTACHMENT0,_e,Me);else oe(Z.__webglFramebuffer,D,T,s.COLOR_ATTACHMENT0,_e,0);m(T)&&g(_e),t.unbindTexture()}D.depthBuffer&&Re(D)}function qe(D){const T=D.textures;for(let Z=0,re=T.length;Z<re;Z++){const fe=T[Z];if(m(fe)){const ie=D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,Le=n.get(fe).__webglTexture;t.bindTexture(ie,Le),g(ie),t.unbindTexture()}}}const Ge=[],N=[];function ft(D){if(D.samples>0){if(Ke(D)===!1){const T=D.textures,Z=D.width,re=D.height;let fe=s.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Le=n.get(D),_e=T.length>1;if(_e)for(let Me=0;Me<T.length;Me++)t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Le.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglFramebuffer);for(let Me=0;Me<T.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(fe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(fe|=s.STENCIL_BUFFER_BIT)),_e){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const je=n.get(T[Me]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,je,0)}s.blitFramebuffer(0,0,Z,re,0,0,Z,re,fe,s.NEAREST),c===!0&&(Ge.length=0,N.length=0,Ge.push(s.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ge.push(ie),N.push(ie),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ge))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),_e)for(let Me=0;Me<T.length;Me++){t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Le.__webglColorRenderbuffer[Me]);const je=n.get(T[Me]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,je,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Le.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){const T=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Xe(D){return Math.min(i.maxSamples,D.samples)}function Ke(D){const T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function G(D){const T=a.render.frame;u.get(D)!==T&&(u.set(D,T),D.update())}function it(D,T){const Z=D.colorSpace,re=D.format,fe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==sn&&Z!==rr&&(Mt.getTransfer(Z)===kt?(re!==ti||fe!==pr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),T}function He(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=R,this.setTexture2D=X,this.setTexture2DArray=ne,this.setTexture3D=W,this.setTextureCube=ee,this.rebindTextures=Ce,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=Re,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=Ke}function uS(s,e){function t(n,i=rr){let r;const a=Mt.getTransfer(i);if(n===pr)return s.UNSIGNED_BYTE;if(n===Ih)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Uh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Xp)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return s.BYTE;if(n===Wp)return s.SHORT;if(n===_o)return s.UNSIGNED_SHORT;if(n===Dh)return s.INT;if(n===vs)return s.UNSIGNED_INT;if(n===zn)return s.FLOAT;if(n===or)return s.HALF_FLOAT;if(n===qp)return s.ALPHA;if(n===jp)return s.RGB;if(n===ti)return s.RGBA;if(n===Yp)return s.LUMINANCE;if(n===Kp)return s.LUMINANCE_ALPHA;if(n===na)return s.DEPTH_COMPONENT;if(n===_a)return s.DEPTH_STENCIL;if(n===sl)return s.RED;if(n===Nh)return s.RED_INTEGER;if(n===Zp)return s.RG;if(n===Oh)return s.RG_INTEGER;if(n===Fh)return s.RGBA_INTEGER;if(n===Ec||n===Tc||n===wc||n===Ac)if(a===kt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ec)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Tc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ac)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ec)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Tc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===wc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ac)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===wu||n===Au||n===Ru||n===Cu)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===wu)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Au)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ru)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Cu)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Pu||n===Lu||n===Du)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Pu||n===Lu)return a===kt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Du)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Iu||n===Uu||n===Nu||n===Ou||n===Fu||n===ku||n===Bu||n===zu||n===Hu||n===Gu||n===Vu||n===Wu||n===Xu||n===qu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Iu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Uu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Nu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ou)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Fu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ku)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Bu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Hu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Gu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qu)return a===kt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Rc||n===ju||n===Yu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Rc)return a===kt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ju)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Jp||n===Ku||n===Zu||n===Ju)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ku)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Zu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ju)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ga?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class hS extends Un{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class lr extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fS={type:"move"};class Vl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new lr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new lr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new lr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const b of e.hand.values()){const m=t.getJointPose(b,n),g=this._getHandJoint(l,b);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,_=.005;l.inputState.pinching&&f>d+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fS)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new lr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const dS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pS=`
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

}`;class mS{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Zt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new kr({vertexShader:dS,fragmentShader:pS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gS extends Ts{constructor(e,t){super();const n=this;let i=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,_=null;const b=new mS,m=t.getContextAttributes();let g=null,S=null;const y=[],M=[],L=new yt;let P=null;const w=new Un;w.layers.enable(1),w.viewport=new Tt;const I=new Un;I.layers.enable(2),I.viewport=new Tt;const B=[w,I],v=new hS;v.layers.enable(1),v.layers.enable(2);let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let oe=y[te];return oe===void 0&&(oe=new Vl,y[te]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(te){let oe=y[te];return oe===void 0&&(oe=new Vl,y[te]=oe),oe.getGripSpace()},this.getHand=function(te){let oe=y[te];return oe===void 0&&(oe=new Vl,y[te]=oe),oe.getHandSpace()};function j(te){const oe=M.indexOf(te.inputSource);if(oe===-1)return;const he=y[oe];he!==void 0&&(he.update(te.inputSource,te.frame,l||a),he.dispatchEvent({type:te.type,data:te.inputSource}))}function X(){i.removeEventListener("select",j),i.removeEventListener("selectstart",j),i.removeEventListener("selectend",j),i.removeEventListener("squeeze",j),i.removeEventListener("squeezestart",j),i.removeEventListener("squeezeend",j),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",ne);for(let te=0;te<y.length;te++){const oe=M[te];oe!==null&&(M[te]=null,y[te].disconnect(oe))}R=null,F=null,b.reset(),e.setRenderTarget(g),d=null,f=null,h=null,i=null,S=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){o=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(g=e.getRenderTarget(),i.addEventListener("select",j),i.addEventListener("selectstart",j),i.addEventListener("selectend",j),i.addEventListener("squeeze",j),i.addEventListener("squeezestart",j),i.addEventListener("squeezeend",j),i.addEventListener("end",X),i.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(L),i.renderState.layers===void 0){const oe={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,oe),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new ys(d.framebufferWidth,d.framebufferHeight,{format:ti,type:pr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let oe=null,he=null,ge=null;m.depth&&(ge=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=m.stencil?_a:na,he=m.stencil?ga:vs);const Re={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(Re),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new ys(f.textureWidth,f.textureHeight,{format:ti,type:pr,depthTexture:new fm(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function ne(te){for(let oe=0;oe<te.removed.length;oe++){const he=te.removed[oe],ge=M.indexOf(he);ge>=0&&(M[ge]=null,y[ge].disconnect(he))}for(let oe=0;oe<te.added.length;oe++){const he=te.added[oe];let ge=M.indexOf(he);if(ge===-1){for(let Ce=0;Ce<y.length;Ce++)if(Ce>=M.length){M.push(he),ge=Ce;break}else if(M[Ce]===null){M[Ce]=he,ge=Ce;break}if(ge===-1)break}const Re=y[ge];Re&&Re.connect(he)}}const W=new q,ee=new q;function K(te,oe,he){W.setFromMatrixPosition(oe.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const ge=W.distanceTo(ee),Re=oe.projectionMatrix.elements,Ce=he.projectionMatrix.elements,Qe=Re[14]/(Re[10]-1),qe=Re[14]/(Re[10]+1),Ge=(Re[9]+1)/Re[5],N=(Re[9]-1)/Re[5],ft=(Re[8]-1)/Re[0],Xe=(Ce[8]+1)/Ce[0],Ke=Qe*ft,G=Qe*Xe,it=ge/(-ft+Xe),He=it*-ft;if(oe.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(He),te.translateZ(it),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Re[10]===-1)te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{const D=Qe+it,T=qe+it,Z=Ke-He,re=G+(ge-He),fe=Ge*qe/T*D,ie=N*qe/T*D;te.projectionMatrix.makePerspective(Z,re,fe,ie,D,T),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function de(te,oe){oe===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(oe.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let oe=te.near,he=te.far;b.texture!==null&&(b.depthNear>0&&(oe=b.depthNear),b.depthFar>0&&(he=b.depthFar)),v.near=I.near=w.near=oe,v.far=I.far=w.far=he,(R!==v.near||F!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,F=v.far);const ge=te.parent,Re=v.cameras;de(v,ge);for(let Ce=0;Ce<Re.length;Ce++)de(Re[Ce],ge);Re.length===2?K(v,w,I):v.projectionMatrix.copy(w.projectionMatrix),U(te,v,ge)};function U(te,oe,he){he===null?te.matrix.copy(oe.matrixWorld):(te.matrix.copy(he.matrixWorld),te.matrix.invert(),te.matrix.multiply(oe.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(oe.projectionMatrix),te.projectionMatrixInverse.copy(oe.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=ba*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(v)};let xe=null;function Oe(te,oe){if(u=oe.getViewerPose(l||a),_=oe,u!==null){const he=u.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let ge=!1;he.length!==v.cameras.length&&(v.cameras.length=0,ge=!0);for(let Ce=0;Ce<he.length;Ce++){const Qe=he[Ce];let qe=null;if(d!==null)qe=d.getViewport(Qe);else{const N=h.getViewSubImage(f,Qe);qe=N.viewport,Ce===0&&(e.setRenderTargetTextures(S,N.colorTexture,f.ignoreDepthValues?void 0:N.depthStencilTexture),e.setRenderTarget(S))}let Ge=B[Ce];Ge===void 0&&(Ge=new Un,Ge.layers.enable(Ce),Ge.viewport=new Tt,B[Ce]=Ge),Ge.matrix.fromArray(Qe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Qe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(qe.x,qe.y,qe.width,qe.height),Ce===0&&(v.matrix.copy(Ge.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ge===!0&&v.cameras.push(Ge)}const Re=i.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ce=h.getDepthInformation(he[0]);Ce&&Ce.isValid&&Ce.texture&&b.init(e,Ce,i.renderState)}}for(let he=0;he<y.length;he++){const ge=M[he],Re=y[he];ge!==null&&Re!==void 0&&Re.update(ge,oe,l||a)}xe&&xe(te,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),_=null}const We=new hm;We.setAnimationLoop(Oe),this.setAnimationLoop=function(te){xe=te},this.dispose=function(){}}}const Qr=new Vi,_S=new st;function bS(s,e){function t(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function n(m,g){g.color.getRGB(m.fogColor.value,cm(s)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function i(m,g,S,y,M){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(m,g):g.isMeshToonMaterial?(r(m,g),h(m,g)):g.isMeshPhongMaterial?(r(m,g),u(m,g)):g.isMeshStandardMaterial?(r(m,g),f(m,g),g.isMeshPhysicalMaterial&&d(m,g,M)):g.isMeshMatcapMaterial?(r(m,g),_(m,g)):g.isMeshDepthMaterial?r(m,g):g.isMeshDistanceMaterial?(r(m,g),b(m,g)):g.isMeshNormalMaterial?r(m,g):g.isLineBasicMaterial?(a(m,g),g.isLineDashedMaterial&&o(m,g)):g.isPointsMaterial?c(m,g,S,y):g.isSpriteMaterial?l(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,t(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===Fn&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,t(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===Fn&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,t(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,t(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const S=e.get(g),y=S.envMap,M=S.envMapRotation;y&&(m.envMap.value=y,Qr.copy(M),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(_S.makeRotationFromEuler(Qr)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,m.aoMapTransform))}function a(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform))}function o(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function c(m,g,S,y){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*S,m.scale.value=y*.5,g.map&&(m.map.value=g.map,t(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function l(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,t(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,t(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function u(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function h(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function f(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function d(m,g,S){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Fn&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,g){g.matcap&&(m.matcap.value=g.matcap)}function b(m,g){const S=e.get(g).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function xS(s,e,t,n){let i={},r={},a=[];const o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const M=y.program;n.uniformBlockBinding(S,M)}function l(S,y){let M=i[S.id];M===void 0&&(_(S),M=u(S),i[S.id]=M,S.addEventListener("dispose",m));const L=y.program;n.updateUBOMapping(S,L);const P=e.render.frame;r[S.id]!==P&&(f(S),r[S.id]=P)}function u(S){const y=h();S.__bindingPointIndex=y;const M=s.createBuffer(),L=S.__size,P=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,L,P),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,M),M}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const y=i[S.id],M=S.uniforms,L=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let P=0,w=M.length;P<w;P++){const I=Array.isArray(M[P])?M[P]:[M[P]];for(let B=0,v=I.length;B<v;B++){const R=I[B];if(d(R,P,B,L)===!0){const F=R.__offset,j=Array.isArray(R.value)?R.value:[R.value];let X=0;for(let ne=0;ne<j.length;ne++){const W=j[ne],ee=b(W);typeof W=="number"||typeof W=="boolean"?(R.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,F+X,R.__data)):W.isMatrix3?(R.__data[0]=W.elements[0],R.__data[1]=W.elements[1],R.__data[2]=W.elements[2],R.__data[3]=0,R.__data[4]=W.elements[3],R.__data[5]=W.elements[4],R.__data[6]=W.elements[5],R.__data[7]=0,R.__data[8]=W.elements[6],R.__data[9]=W.elements[7],R.__data[10]=W.elements[8],R.__data[11]=0):(W.toArray(R.__data,X),X+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,F,R.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(S,y,M,L){const P=S.value,w=y+"_"+M;if(L[w]===void 0)return typeof P=="number"||typeof P=="boolean"?L[w]=P:L[w]=P.clone(),!0;{const I=L[w];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return L[w]=P,!0}else if(I.equals(P)===!1)return I.copy(P),!0}return!1}function _(S){const y=S.uniforms;let M=0;const L=16;for(let w=0,I=y.length;w<I;w++){const B=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,R=B.length;v<R;v++){const F=B[v],j=Array.isArray(F.value)?F.value:[F.value];for(let X=0,ne=j.length;X<ne;X++){const W=j[X],ee=b(W),K=M%L,de=K%ee.boundary,U=K+de;M+=de,U!==0&&L-U<ee.storage&&(M+=L-U),F.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=ee.storage}}}const P=M%L;return P>0&&(M+=L-P),S.__size=M,S.__cache={},this}function b(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function m(S){const y=S.target;y.removeEventListener("dispose",m);const M=a.indexOf(y.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function g(){for(const S in i)s.deleteBuffer(i[S]);a=[],i={},r={}}return{bind:c,update:l,dispose:g}}class vS{constructor(e={}){const{canvas:t=r0(),context:n=null,depth:i=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const d=new Uint32Array(4),_=new Int32Array(4);let b=null,m=null;const g=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Yt,this.toneMapping=hr,this.toneMappingExposure=1;const y=this;let M=!1,L=0,P=0,w=null,I=-1,B=null;const v=new Tt,R=new Tt;let F=null;const j=new Je(0);let X=0,ne=t.width,W=t.height,ee=1,K=null,de=null;const U=new Tt(0,0,ne,W),xe=new Tt(0,0,ne,W);let Oe=!1;const We=new zh;let te=!1,oe=!1;const he=new st,ge=new st,Re=new q,Ce=new Tt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ge(){return w===null?ee:1}let N=n;function ft(C,p){return t.getContext(C,p)}try{const C={alpha:!0,depth:i,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Lh}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",Se,!1),N===null){const p="webgl2";if(N=ft(p,C),N===null)throw ft(p)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let Xe,Ke,G,it,He,D,T,Z,re,fe,ie,Le,_e,Me,je,me,Ae,Pe,Ie,ve,$e,Be,Ye,z;function le(){Xe=new Tv(N),Xe.init(),Be=new uS(N,Xe),Ke=new xv(N,Xe,e,Be),G=new oS(N),Ke.reverseDepthBuffer&&G.buffers.depth.setReversed(!0),it=new Rv(N),He=new qy,D=new lS(N,Xe,G,He,Ke,Be,it),T=new yv(y),Z=new Ev(y),re=new N0(N),Ye=new _v(N,re),fe=new wv(N,re,it,Ye),ie=new Pv(N,fe,re,it),Ie=new Cv(N,Ke,D),me=new vv(He),Le=new Xy(y,T,Z,Xe,Ke,Ye,me),_e=new bS(y,He),Me=new Yy,je=new eS(Xe),Pe=new gv(y,T,Z,G,ie,f,c),Ae=new sS(y,ie,Ke),z=new xS(N,it,Ke,G),ve=new bv(N,Xe,it),$e=new Av(N,Xe,it),it.programs=Le.programs,y.capabilities=Ke,y.extensions=Xe,y.properties=He,y.renderLists=Me,y.shadowMap=Ae,y.state=G,y.info=it}le();const H=new gS(y,N);this.xr=H,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const C=Xe.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Xe.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(C){C!==void 0&&(ee=C,this.setSize(ne,W,!1))},this.getSize=function(C){return C.set(ne,W)},this.setSize=function(C,p,x=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=C,W=p,t.width=Math.floor(C*ee),t.height=Math.floor(p*ee),x===!0&&(t.style.width=C+"px",t.style.height=p+"px"),this.setViewport(0,0,C,p)},this.getDrawingBufferSize=function(C){return C.set(ne*ee,W*ee).floor()},this.setDrawingBufferSize=function(C,p,x){ne=C,W=p,ee=x,t.width=Math.floor(C*x),t.height=Math.floor(p*x),this.setViewport(0,0,C,p)},this.getCurrentViewport=function(C){return C.copy(v)},this.getViewport=function(C){return C.copy(U)},this.setViewport=function(C,p,x,E){C.isVector4?U.set(C.x,C.y,C.z,C.w):U.set(C,p,x,E),G.viewport(v.copy(U).multiplyScalar(ee).round())},this.getScissor=function(C){return C.copy(xe)},this.setScissor=function(C,p,x,E){C.isVector4?xe.set(C.x,C.y,C.z,C.w):xe.set(C,p,x,E),G.scissor(R.copy(xe).multiplyScalar(ee).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(C){G.setScissorTest(Oe=C)},this.setOpaqueSort=function(C){K=C},this.setTransparentSort=function(C){de=C},this.getClearColor=function(C){return C.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(C=!0,p=!0,x=!0){let E=0;if(C){let A=!1;if(w!==null){const k=w.texture.format;A=k===Fh||k===Oh||k===Nh}if(A){const k=w.texture.type,O=k===pr||k===vs||k===_o||k===ga||k===Ih||k===Uh,V=Pe.getClearColor(),J=Pe.getClearAlpha(),Q=V.r,$=V.g,Y=V.b;O?(d[0]=Q,d[1]=$,d[2]=Y,d[3]=J,N.clearBufferuiv(N.COLOR,0,d)):(_[0]=Q,_[1]=$,_[2]=Y,_[3]=J,N.clearBufferiv(N.COLOR,0,_))}else E|=N.COLOR_BUFFER_BIT}p&&(E|=N.DEPTH_BUFFER_BIT,N.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),x&&(E|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(E)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",Se,!1),Me.dispose(),je.dispose(),He.dispose(),T.dispose(),Z.dispose(),ie.dispose(),Ye.dispose(),z.dispose(),Le.dispose(),H.dispose(),H.removeEventListener("sessionstart",_t),H.removeEventListener("sessionend",Ee),Ve.stop()};function se(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const C=it.autoReset,p=Ae.enabled,x=Ae.autoUpdate,E=Ae.needsUpdate,A=Ae.type;le(),it.autoReset=C,Ae.enabled=p,Ae.autoUpdate=x,Ae.needsUpdate=E,Ae.type=A}function Se(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function et(C){const p=C.target;p.removeEventListener("dispose",et),Ct(p)}function Ct(C){Ot(C),He.remove(C)}function Ot(C){const p=He.get(C).programs;p!==void 0&&(p.forEach(function(x){Le.releaseProgram(x)}),C.isShaderMaterial&&Le.releaseShaderCache(C))}this.renderBufferDirect=function(C,p,x,E,A,k){p===null&&(p=Qe);const O=A.isMesh&&A.matrixWorld.determinant()<0,V=Et(C,p,x,E,A);G.setMaterial(E,O);let J=x.index,Q=1;if(E.wireframe===!0){if(J=fe.getWireframeAttribute(x),J===void 0)return;Q=2}const $=x.drawRange,Y=x.attributes.position;let ce=$.start*Q,pe=($.start+$.count)*Q;k!==null&&(ce=Math.max(ce,k.start*Q),pe=Math.min(pe,(k.start+k.count)*Q)),J!==null?(ce=Math.max(ce,0),pe=Math.min(pe,J.count)):Y!=null&&(ce=Math.max(ce,0),pe=Math.min(pe,Y.count));const be=pe-ce;if(be<0||be===1/0)return;Ye.setup(A,E,V,x,J);let we,ue=ve;if(J!==null&&(we=re.get(J),ue=$e,ue.setIndex(we)),A.isMesh)E.wireframe===!0?(G.setLineWidth(E.wireframeLinewidth*Ge()),ue.setMode(N.LINES)):ue.setMode(N.TRIANGLES);else if(A.isLine){let ae=E.linewidth;ae===void 0&&(ae=1),G.setLineWidth(ae*Ge()),A.isLineSegments?ue.setMode(N.LINES):A.isLineLoop?ue.setMode(N.LINE_LOOP):ue.setMode(N.LINE_STRIP)}else A.isPoints?ue.setMode(N.POINTS):A.isSprite&&ue.setMode(N.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)ue.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(Xe.get("WEBGL_multi_draw"))ue.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const ae=A._multiDrawStarts,Ne=A._multiDrawCounts,ke=A._multiDrawCount,xt=J?re.get(J).bytesPerElement:1,en=He.get(E).currentProgram.getUniforms();for(let lt=0;lt<ke;lt++)en.setValue(N,"_gl_DrawID",lt),ue.render(ae[lt]/xt,Ne[lt])}else if(A.isInstancedMesh)ue.renderInstances(ce,be,A.count);else if(x.isInstancedBufferGeometry){const ae=x._maxInstanceCount!==void 0?x._maxInstanceCount:1/0,Ne=Math.min(x.instanceCount,ae);ue.renderInstances(ce,be,Ne)}else ue.render(ce,be)};function ct(C,p,x){C.transparent===!0&&C.side===wi&&C.forceSinglePass===!1?(C.side=Fn,C.needsUpdate=!0,Vt(C,p,x),C.side=dr,C.needsUpdate=!0,Vt(C,p,x),C.side=wi):Vt(C,p,x)}this.compile=function(C,p,x=null){x===null&&(x=C),m=je.get(x),m.init(p),S.push(m),x.traverseVisible(function(A){A.isLight&&A.layers.test(p.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),C!==x&&C.traverseVisible(function(A){A.isLight&&A.layers.test(p.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights();const E=new Set;return C.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const k=A.material;if(k)if(Array.isArray(k))for(let O=0;O<k.length;O++){const V=k[O];ct(V,x,A),E.add(V)}else ct(k,x,A),E.add(k)}),S.pop(),m=null,E},this.compileAsync=function(C,p,x=null){const E=this.compile(C,p,x);return new Promise(A=>{function k(){if(E.forEach(function(O){He.get(O).currentProgram.isReady()&&E.delete(O)}),E.size===0){A(C);return}setTimeout(k,10)}Xe.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Fe=null;function Ue(C){Fe&&Fe(C)}function _t(){Ve.stop()}function Ee(){Ve.start()}const Ve=new hm;Ve.setAnimationLoop(Ue),typeof self<"u"&&Ve.setContext(self),this.setAnimationLoop=function(C){Fe=C,H.setAnimationLoop(C),C===null?Ve.stop():Ve.start()},H.addEventListener("sessionstart",_t),H.addEventListener("sessionend",Ee),this.render=function(C,p){if(p!==void 0&&p.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),p.parent===null&&p.matrixWorldAutoUpdate===!0&&p.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(p),p=H.getCamera()),C.isScene===!0&&C.onBeforeRender(y,C,p,w),m=je.get(C,S.length),m.init(p),S.push(m),ge.multiplyMatrices(p.projectionMatrix,p.matrixWorldInverse),We.setFromProjectionMatrix(ge),oe=this.localClippingEnabled,te=me.init(this.clippingPlanes,oe),b=Me.get(C,g.length),b.init(),g.push(b),H.enabled===!0&&H.isPresenting===!0){const k=y.xr.getDepthSensingMesh();k!==null&&ze(k,p,-1/0,y.sortObjects)}ze(C,p,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(K,de),qe=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,qe&&Pe.addToRenderList(b,C),this.info.render.frame++,te===!0&&me.beginShadows();const x=m.state.shadowsArray;Ae.render(x,C,p),te===!0&&me.endShadows(),this.info.autoReset===!0&&this.info.reset();const E=b.opaque,A=b.transmissive;if(m.setupLights(),p.isArrayCamera){const k=p.cameras;if(A.length>0)for(let O=0,V=k.length;O<V;O++){const J=k[O];zt(E,A,C,J)}qe&&Pe.render(C);for(let O=0,V=k.length;O<V;O++){const J=k[O];Ze(b,C,J,J.viewport)}}else A.length>0&&zt(E,A,C,p),qe&&Pe.render(C),Ze(b,C,p);w!==null&&(D.updateMultisampleRenderTarget(w),D.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(y,C,p),Ye.resetDefaultState(),I=-1,B=null,S.pop(),S.length>0?(m=S[S.length-1],te===!0&&me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,g.pop(),g.length>0?b=g[g.length-1]:b=null};function ze(C,p,x,E){if(C.visible===!1)return;if(C.layers.test(p.layers)){if(C.isGroup)x=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(p);else if(C.isLight)m.pushLight(C),C.castShadow&&m.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||We.intersectsSprite(C)){E&&Ce.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ge);const O=ie.update(C),V=C.material;V.visible&&b.push(C,O,V,x,Ce.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||We.intersectsObject(C))){const O=ie.update(C),V=C.material;if(E&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ce.copy(C.boundingSphere.center)):(O.boundingSphere===null&&O.computeBoundingSphere(),Ce.copy(O.boundingSphere.center)),Ce.applyMatrix4(C.matrixWorld).applyMatrix4(ge)),Array.isArray(V)){const J=O.groups;for(let Q=0,$=J.length;Q<$;Q++){const Y=J[Q],ce=V[Y.materialIndex];ce&&ce.visible&&b.push(C,O,ce,x,Ce.z,Y)}}else V.visible&&b.push(C,O,V,x,Ce.z,null)}}const k=C.children;for(let O=0,V=k.length;O<V;O++)ze(k[O],p,x,E)}function Ze(C,p,x,E){const A=C.opaque,k=C.transmissive,O=C.transparent;m.setupLightsView(x),te===!0&&me.setGlobalState(y.clippingPlanes,x),E&&G.viewport(v.copy(E)),A.length>0&&tt(A,p,x),k.length>0&&tt(k,p,x),O.length>0&&tt(O,p,x),G.buffers.depth.setTest(!0),G.buffers.depth.setMask(!0),G.buffers.color.setMask(!0),G.setPolygonOffset(!1)}function zt(C,p,x,E){if((x.isScene===!0?x.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[E.id]===void 0&&(m.state.transmissionRenderTarget[E.id]=new ys(1,1,{generateMipmaps:!0,type:Xe.has("EXT_color_buffer_half_float")||Xe.has("EXT_color_buffer_float")?or:pr,minFilter:ki,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace}));const k=m.state.transmissionRenderTarget[E.id],O=E.viewport||v;k.setSize(O.z,O.w);const V=y.getRenderTarget();y.setRenderTarget(k),y.getClearColor(j),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),qe&&Pe.render(x);const J=y.toneMapping;y.toneMapping=hr;const Q=E.viewport;if(E.viewport!==void 0&&(E.viewport=void 0),m.setupLightsView(E),te===!0&&me.setGlobalState(y.clippingPlanes,E),tt(C,x,E),D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k),Xe.has("WEBGL_multisampled_render_to_texture")===!1){let $=!1;for(let Y=0,ce=p.length;Y<ce;Y++){const pe=p[Y],be=pe.object,we=pe.geometry,ue=pe.material,ae=pe.group;if(ue.side===wi&&be.layers.test(E.layers)){const Ne=ue.side;ue.side=Fn,ue.needsUpdate=!0,Ft(be,x,E,we,ue,ae),ue.side=Ne,ue.needsUpdate=!0,$=!0}}$===!0&&(D.updateMultisampleRenderTarget(k),D.updateRenderTargetMipmap(k))}y.setRenderTarget(V),y.setClearColor(j,X),Q!==void 0&&(E.viewport=Q),y.toneMapping=J}function tt(C,p,x){const E=p.isScene===!0?p.overrideMaterial:null;for(let A=0,k=C.length;A<k;A++){const O=C[A],V=O.object,J=O.geometry,Q=E===null?O.material:E,$=O.group;V.layers.test(x.layers)&&Ft(V,p,x,J,Q,$)}}function Ft(C,p,x,E,A,k){C.onBeforeRender(y,p,x,E,A,k),C.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),A.onBeforeRender(y,p,x,E,C,k),A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=Fn,A.needsUpdate=!0,y.renderBufferDirect(x,p,E,A,C,k),A.side=dr,A.needsUpdate=!0,y.renderBufferDirect(x,p,E,A,C,k),A.side=wi):y.renderBufferDirect(x,p,E,A,C,k),C.onAfterRender(y,p,x,E,A,k)}function Vt(C,p,x){p.isScene!==!0&&(p=Qe);const E=He.get(C),A=m.state.lights,k=m.state.shadowsArray,O=A.state.version,V=Le.getParameters(C,A.state,k,p,x),J=Le.getProgramCacheKey(V);let Q=E.programs;E.environment=C.isMeshStandardMaterial?p.environment:null,E.fog=p.fog,E.envMap=(C.isMeshStandardMaterial?Z:T).get(C.envMap||E.environment),E.envMapRotation=E.environment!==null&&C.envMap===null?p.environmentRotation:C.envMapRotation,Q===void 0&&(C.addEventListener("dispose",et),Q=new Map,E.programs=Q);let $=Q.get(J);if($!==void 0){if(E.currentProgram===$&&E.lightsStateVersion===O)return wt(C,V),$}else V.uniforms=Le.getUniforms(C),C.onBeforeCompile(V,y),$=Le.acquireProgram(V,J),Q.set(J,$),E.uniforms=V.uniforms;const Y=E.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Y.clippingPlanes=me.uniform),wt(C,V),E.needsLights=St(C),E.lightsStateVersion=O,E.needsLights&&(Y.ambientLightColor.value=A.state.ambient,Y.lightProbe.value=A.state.probe,Y.directionalLights.value=A.state.directional,Y.directionalLightShadows.value=A.state.directionalShadow,Y.spotLights.value=A.state.spot,Y.spotLightShadows.value=A.state.spotShadow,Y.rectAreaLights.value=A.state.rectArea,Y.ltc_1.value=A.state.rectAreaLTC1,Y.ltc_2.value=A.state.rectAreaLTC2,Y.pointLights.value=A.state.point,Y.pointLightShadows.value=A.state.pointShadow,Y.hemisphereLights.value=A.state.hemi,Y.directionalShadowMap.value=A.state.directionalShadowMap,Y.directionalShadowMatrix.value=A.state.directionalShadowMatrix,Y.spotShadowMap.value=A.state.spotShadowMap,Y.spotLightMatrix.value=A.state.spotLightMatrix,Y.spotLightMap.value=A.state.spotLightMap,Y.pointShadowMap.value=A.state.pointShadowMap,Y.pointShadowMatrix.value=A.state.pointShadowMatrix),E.currentProgram=$,E.uniformsList=null,$}function It(C){if(C.uniformsList===null){const p=C.currentProgram.getUniforms();C.uniformsList=Pc.seqWithValue(p.seq,C.uniforms)}return C.uniformsList}function wt(C,p){const x=He.get(C);x.outputColorSpace=p.outputColorSpace,x.batching=p.batching,x.batchingColor=p.batchingColor,x.instancing=p.instancing,x.instancingColor=p.instancingColor,x.instancingMorph=p.instancingMorph,x.skinning=p.skinning,x.morphTargets=p.morphTargets,x.morphNormals=p.morphNormals,x.morphColors=p.morphColors,x.morphTargetsCount=p.morphTargetsCount,x.numClippingPlanes=p.numClippingPlanes,x.numIntersection=p.numClipIntersection,x.vertexAlphas=p.vertexAlphas,x.vertexTangents=p.vertexTangents,x.toneMapping=p.toneMapping}function Et(C,p,x,E,A){p.isScene!==!0&&(p=Qe),D.resetTextureUnits();const k=p.fog,O=E.isMeshStandardMaterial?p.environment:null,V=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:sn,J=(E.isMeshStandardMaterial?Z:T).get(E.envMap||O),Q=E.vertexColors===!0&&!!x.attributes.color&&x.attributes.color.itemSize===4,$=!!x.attributes.tangent&&(!!E.normalMap||E.anisotropy>0),Y=!!x.morphAttributes.position,ce=!!x.morphAttributes.normal,pe=!!x.morphAttributes.color;let be=hr;E.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(be=y.toneMapping);const we=x.morphAttributes.position||x.morphAttributes.normal||x.morphAttributes.color,ue=we!==void 0?we.length:0,ae=He.get(E),Ne=m.state.lights;if(te===!0&&(oe===!0||C!==B)){const nt=C===B&&E.id===I;me.setState(E,C,nt)}let ke=!1;E.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Ne.state.version||ae.outputColorSpace!==V||A.isBatchedMesh&&ae.batching===!1||!A.isBatchedMesh&&ae.batching===!0||A.isBatchedMesh&&ae.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&ae.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&ae.instancing===!1||!A.isInstancedMesh&&ae.instancing===!0||A.isSkinnedMesh&&ae.skinning===!1||!A.isSkinnedMesh&&ae.skinning===!0||A.isInstancedMesh&&ae.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&ae.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&ae.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&ae.instancingMorph===!1&&A.morphTexture!==null||ae.envMap!==J||E.fog===!0&&ae.fog!==k||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==me.numPlanes||ae.numIntersection!==me.numIntersection)||ae.vertexAlphas!==Q||ae.vertexTangents!==$||ae.morphTargets!==Y||ae.morphNormals!==ce||ae.morphColors!==pe||ae.toneMapping!==be||ae.morphTargetsCount!==ue)&&(ke=!0):(ke=!0,ae.__version=E.version);let xt=ae.currentProgram;ke===!0&&(xt=Vt(E,p,A));let en=!1,lt=!1,mt=!1;const rt=xt.getUniforms(),Jt=ae.uniforms;if(G.useProgram(xt.program)&&(en=!0,lt=!0,mt=!0),E.id!==I&&(I=E.id,lt=!0),en||B!==C){Ke.reverseDepthBuffer?(he.copy(C.projectionMatrix),a0(he),o0(he),rt.setValue(N,"projectionMatrix",he)):rt.setValue(N,"projectionMatrix",C.projectionMatrix),rt.setValue(N,"viewMatrix",C.matrixWorldInverse);const nt=rt.map.cameraPosition;nt!==void 0&&nt.setValue(N,Re.setFromMatrixPosition(C.matrixWorld)),Ke.logarithmicDepthBuffer&&rt.setValue(N,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(E.isMeshPhongMaterial||E.isMeshToonMaterial||E.isMeshLambertMaterial||E.isMeshBasicMaterial||E.isMeshStandardMaterial||E.isShaderMaterial)&&rt.setValue(N,"isOrthographic",C.isOrthographicCamera===!0),B!==C&&(B=C,lt=!0,mt=!0)}if(A.isSkinnedMesh){rt.setOptional(N,A,"bindMatrix"),rt.setOptional(N,A,"bindMatrixInverse");const nt=A.skeleton;nt&&(nt.boneTexture===null&&nt.computeBoneTexture(),rt.setValue(N,"boneTexture",nt.boneTexture,D))}A.isBatchedMesh&&(rt.setOptional(N,A,"batchingTexture"),rt.setValue(N,"batchingTexture",A._matricesTexture,D),rt.setOptional(N,A,"batchingIdTexture"),rt.setValue(N,"batchingIdTexture",A._indirectTexture,D),rt.setOptional(N,A,"batchingColorTexture"),A._colorsTexture!==null&&rt.setValue(N,"batchingColorTexture",A._colorsTexture,D));const jt=x.morphAttributes;if((jt.position!==void 0||jt.normal!==void 0||jt.color!==void 0)&&Ie.update(A,x,xt),(lt||ae.receiveShadow!==A.receiveShadow)&&(ae.receiveShadow=A.receiveShadow,rt.setValue(N,"receiveShadow",A.receiveShadow)),E.isMeshGouraudMaterial&&E.envMap!==null&&(Jt.envMap.value=J,Jt.flipEnvMap.value=J.isCubeTexture&&J.isRenderTargetTexture===!1?-1:1),E.isMeshStandardMaterial&&E.envMap===null&&p.environment!==null&&(Jt.envMapIntensity.value=p.environmentIntensity),lt&&(rt.setValue(N,"toneMappingExposure",y.toneMappingExposure),ae.needsLights&&wn(Jt,mt),k&&E.fog===!0&&_e.refreshFogUniforms(Jt,k),_e.refreshMaterialUniforms(Jt,E,ee,W,m.state.transmissionRenderTarget[C.id]),Pc.upload(N,It(ae),Jt,D)),E.isShaderMaterial&&E.uniformsNeedUpdate===!0&&(Pc.upload(N,It(ae),Jt,D),E.uniformsNeedUpdate=!1),E.isSpriteMaterial&&rt.setValue(N,"center",A.center),rt.setValue(N,"modelViewMatrix",A.modelViewMatrix),rt.setValue(N,"normalMatrix",A.normalMatrix),rt.setValue(N,"modelMatrix",A.matrixWorld),E.isShaderMaterial||E.isRawShaderMaterial){const nt=E.uniformsGroups;for(let At=0,bi=nt.length;At<bi;At++){const _r=nt[At];z.update(_r,xt),z.bind(_r,xt)}}return xt}function wn(C,p){C.ambientLightColor.needsUpdate=p,C.lightProbe.needsUpdate=p,C.directionalLights.needsUpdate=p,C.directionalLightShadows.needsUpdate=p,C.pointLights.needsUpdate=p,C.pointLightShadows.needsUpdate=p,C.spotLights.needsUpdate=p,C.spotLightShadows.needsUpdate=p,C.rectAreaLights.needsUpdate=p,C.hemisphereLights.needsUpdate=p}function St(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,p,x){He.get(C.texture).__webglTexture=p,He.get(C.depthTexture).__webglTexture=x;const E=He.get(C);E.__hasExternalTextures=!0,E.__autoAllocateDepthBuffer=x===void 0,E.__autoAllocateDepthBuffer||Xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),E.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,p){const x=He.get(C);x.__webglFramebuffer=p,x.__useDefaultFramebuffer=p===void 0},this.setRenderTarget=function(C,p=0,x=0){w=C,L=p,P=x;let E=!0,A=null,k=!1,O=!1;if(C){const J=He.get(C);if(J.__useDefaultFramebuffer!==void 0)G.bindFramebuffer(N.FRAMEBUFFER,null),E=!1;else if(J.__webglFramebuffer===void 0)D.setupRenderTarget(C);else if(J.__hasExternalTextures)D.rebindTextures(C,He.get(C.texture).__webglTexture,He.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const Y=C.depthTexture;if(J.__boundDepthTexture!==Y){if(Y!==null&&He.has(Y)&&(C.width!==Y.image.width||C.height!==Y.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(C)}}const Q=C.texture;(Q.isData3DTexture||Q.isDataArrayTexture||Q.isCompressedArrayTexture)&&(O=!0);const $=He.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray($[p])?A=$[p][x]:A=$[p],k=!0):C.samples>0&&D.useMultisampledRTT(C)===!1?A=He.get(C).__webglMultisampledFramebuffer:Array.isArray($)?A=$[x]:A=$,v.copy(C.viewport),R.copy(C.scissor),F=C.scissorTest}else v.copy(U).multiplyScalar(ee).floor(),R.copy(xe).multiplyScalar(ee).floor(),F=Oe;if(G.bindFramebuffer(N.FRAMEBUFFER,A)&&E&&G.drawBuffers(C,A),G.viewport(v),G.scissor(R),G.setScissorTest(F),k){const J=He.get(C.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+p,J.__webglTexture,x)}else if(O){const J=He.get(C.texture),Q=p||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,J.__webglTexture,x||0,Q)}I=-1},this.readRenderTargetPixels=function(C,p,x,E,A,k,O){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let V=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&O!==void 0&&(V=V[O]),V){G.bindFramebuffer(N.FRAMEBUFFER,V);try{const J=C.texture,Q=J.format,$=J.type;if(!Ke.textureFormatReadable(Q)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ke.textureTypeReadable($)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}p>=0&&p<=C.width-E&&x>=0&&x<=C.height-A&&N.readPixels(p,x,E,A,Be.convert(Q),Be.convert($),k)}finally{const J=w!==null?He.get(w).__webglFramebuffer:null;G.bindFramebuffer(N.FRAMEBUFFER,J)}}},this.readRenderTargetPixelsAsync=async function(C,p,x,E,A,k,O){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let V=He.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&O!==void 0&&(V=V[O]),V){const J=C.texture,Q=J.format,$=J.type;if(!Ke.textureFormatReadable(Q))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ke.textureTypeReadable($))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(p>=0&&p<=C.width-E&&x>=0&&x<=C.height-A){G.bindFramebuffer(N.FRAMEBUFFER,V);const Y=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Y),N.bufferData(N.PIXEL_PACK_BUFFER,k.byteLength,N.STREAM_READ),N.readPixels(p,x,E,A,Be.convert(Q),Be.convert($),0);const ce=w!==null?He.get(w).__webglFramebuffer:null;G.bindFramebuffer(N.FRAMEBUFFER,ce);const pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await s0(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Y),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,k),N.deleteBuffer(Y),N.deleteSync(pe),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,p=null,x=0){C.isTexture!==!0&&(Cc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),p=arguments[0]||null,C=arguments[1]);const E=Math.pow(2,-x),A=Math.floor(C.image.width*E),k=Math.floor(C.image.height*E),O=p!==null?p.x:0,V=p!==null?p.y:0;D.setTexture2D(C,0),N.copyTexSubImage2D(N.TEXTURE_2D,x,0,0,O,V,A,k),G.unbindTexture()},this.copyTextureToTexture=function(C,p,x=null,E=null,A=0){C.isTexture!==!0&&(Cc("WebGLRenderer: copyTextureToTexture function signature has changed."),E=arguments[0]||null,C=arguments[1],p=arguments[2],A=arguments[3]||0,x=null);let k,O,V,J,Q,$;x!==null?(k=x.max.x-x.min.x,O=x.max.y-x.min.y,V=x.min.x,J=x.min.y):(k=C.image.width,O=C.image.height,V=0,J=0),E!==null?(Q=E.x,$=E.y):(Q=0,$=0);const Y=Be.convert(p.format),ce=Be.convert(p.type);D.setTexture2D(p,0),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,p.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,p.unpackAlignment);const pe=N.getParameter(N.UNPACK_ROW_LENGTH),be=N.getParameter(N.UNPACK_IMAGE_HEIGHT),we=N.getParameter(N.UNPACK_SKIP_PIXELS),ue=N.getParameter(N.UNPACK_SKIP_ROWS),ae=N.getParameter(N.UNPACK_SKIP_IMAGES),Ne=C.isCompressedTexture?C.mipmaps[A]:C.image;N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ne.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,V),N.pixelStorei(N.UNPACK_SKIP_ROWS,J),C.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,A,Q,$,k,O,Y,ce,Ne.data):C.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,A,Q,$,Ne.width,Ne.height,Y,Ne.data):N.texSubImage2D(N.TEXTURE_2D,A,Q,$,k,O,Y,ce,Ne),N.pixelStorei(N.UNPACK_ROW_LENGTH,pe),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be),N.pixelStorei(N.UNPACK_SKIP_PIXELS,we),N.pixelStorei(N.UNPACK_SKIP_ROWS,ue),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ae),A===0&&p.generateMipmaps&&N.generateMipmap(N.TEXTURE_2D),G.unbindTexture()},this.copyTextureToTexture3D=function(C,p,x=null,E=null,A=0){C.isTexture!==!0&&(Cc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),x=arguments[0]||null,E=arguments[1]||null,C=arguments[2],p=arguments[3],A=arguments[4]||0);let k,O,V,J,Q,$,Y,ce,pe;const be=C.isCompressedTexture?C.mipmaps[A]:C.image;x!==null?(k=x.max.x-x.min.x,O=x.max.y-x.min.y,V=x.max.z-x.min.z,J=x.min.x,Q=x.min.y,$=x.min.z):(k=be.width,O=be.height,V=be.depth,J=0,Q=0,$=0),E!==null?(Y=E.x,ce=E.y,pe=E.z):(Y=0,ce=0,pe=0);const we=Be.convert(p.format),ue=Be.convert(p.type);let ae;if(p.isData3DTexture)D.setTexture3D(p,0),ae=N.TEXTURE_3D;else if(p.isDataArrayTexture||p.isCompressedArrayTexture)D.setTexture2DArray(p,0),ae=N.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,p.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,p.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,p.unpackAlignment);const Ne=N.getParameter(N.UNPACK_ROW_LENGTH),ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),xt=N.getParameter(N.UNPACK_SKIP_PIXELS),en=N.getParameter(N.UNPACK_SKIP_ROWS),lt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,be.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,be.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,J),N.pixelStorei(N.UNPACK_SKIP_ROWS,Q),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$),C.isDataTexture||C.isData3DTexture?N.texSubImage3D(ae,A,Y,ce,pe,k,O,V,we,ue,be.data):p.isCompressedArrayTexture?N.compressedTexSubImage3D(ae,A,Y,ce,pe,k,O,V,we,be.data):N.texSubImage3D(ae,A,Y,ce,pe,k,O,V,we,ue,be),N.pixelStorei(N.UNPACK_ROW_LENGTH,Ne),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,xt),N.pixelStorei(N.UNPACK_SKIP_ROWS,en),N.pixelStorei(N.UNPACK_SKIP_IMAGES,lt),A===0&&p.generateMipmaps&&N.generateMipmap(ae),G.unbindTexture()},this.initRenderTarget=function(C){He.get(C).__webglFramebuffer===void 0&&D.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?D.setTextureCube(C,0):C.isData3DTexture?D.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?D.setTexture2DArray(C,0):D.setTexture2D(C,0),G.unbindTexture()},this.resetState=function(){L=0,P=0,w=null,G.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===kh?"display-p3":"srgb",t.unpackColorSpace=Mt.workingColorSpace===al?"display-p3":"srgb"}}class Vh{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Je(e),this.near=t,this.far=n}clone(){return new Vh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class _m extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vi,this.environmentIntensity=1,this.environmentRotation=new Vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yS{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=$u,this.updateRanges=[],this.version=0,this.uuid=Ci()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ci()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const An=new q;class Wh{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyMatrix4(e),this.setXYZ(t,An.x,An.y,An.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.applyNormalMatrix(e),this.setXYZ(t,An.x,An.y,An.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)An.fromBufferAttribute(this,t),An.transformDirection(e),this.setXYZ(t,An.x,An.y,An.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Lt(t,this.array),n=Lt(n,this.array),i=Lt(i,this.array),r=Lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new _n(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Wh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const wd=new q,Ad=new Tt,Rd=new Tt,SS=new q,Cd=new st,nc=new q,Wl=new qi,Pd=new st,Xl=new ol;class MS extends bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Df,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Xi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nc),this.boundingBox.expandByPoint(nc)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new qi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,nc),this.boundingSphere.expandByPoint(nc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Wl.copy(this.boundingSphere),Wl.applyMatrix4(i),e.ray.intersectsSphere(Wl)!==!1&&(Pd.copy(i).invert(),Xl.copy(e.ray).applyMatrix4(Pd),!(this.boundingBox!==null&&Xl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Xl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Tt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Df?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R_?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Ad.fromBufferAttribute(i.attributes.skinIndex,e),Rd.fromBufferAttribute(i.attributes.skinWeight,e),wd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const a=Rd.getComponent(r);if(a!==0){const o=Ad.getComponent(r);Cd.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(SS.copy(wd).applyMatrix4(Cd),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bm extends Gt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Xh extends Zt{constructor(e=null,t=1,n=1,i,r,a,o,c,l=On,u=On,h,f){super(null,a,o,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Ld=new st,ES=new st;class qh{constructor(e=[],t=[]){this.uuid=Ci(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,a=e.length;r<a;r++){const o=e[r]?e[r].matrixWorld:ES;Ld.multiplyMatrices(o,t[r]),Ld.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Xh(t,e,e,ti,zn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let a=t[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new bm),this.bones.push(a),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const a=t[i];e.bones.push(a.uuid);const o=n[i];e.boneInverses.push(o.toArray())}return e}}class nh extends _n{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Gs=new st,Dd=new st,ic=[],Id=new Xi,TS=new st,Fa=new bt,ka=new qi;class wS extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new nh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,TS)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Xi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Id.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Id)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new qi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),ka.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(ka)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fa.geometry=this.geometry,Fa.material=this.material,Fa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ka.copy(this.boundingSphere),ka.applyMatrix4(n),e.ray.intersectsSphere(ka)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Gs),Dd.multiplyMatrices(n,Gs),Fa.matrixWorld=Dd,Fa.raycast(e,ic);for(let a=0,o=ic.length;a<o;a++){const c=ic[a];c.instanceId=r,c.object=this,t.push(c)}ic.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new nh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xh(new Float32Array(i*this.count),i,this.count,sl,zn));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class xm extends Hi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Je(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Xc=new q,qc=new q,Ud=new st,Ba=new ol,rc=new qi,ql=new q,Nd=new q;class jh extends Gt{constructor(e=new _i,t=new xm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Xc.fromBufferAttribute(t,i-1),qc.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Xc.distanceTo(qc);e.setAttribute("lineDistance",new mi(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),rc.copy(n.boundingSphere),rc.applyMatrix4(i),rc.radius+=r,e.ray.intersectsSphere(rc)===!1)return;Ud.copy(i).invert(),Ba.copy(e.ray).applyMatrix4(Ud);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let b=d,m=_-1;b<m;b+=l){const g=u.getX(b),S=u.getX(b+1),y=sc(this,e,Ba,c,g,S);y&&t.push(y)}if(this.isLineLoop){const b=u.getX(_-1),m=u.getX(d),g=sc(this,e,Ba,c,b,m);g&&t.push(g)}}else{const d=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let b=d,m=_-1;b<m;b+=l){const g=sc(this,e,Ba,c,b,b+1);g&&t.push(g)}if(this.isLineLoop){const b=sc(this,e,Ba,c,_-1,d);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function sc(s,e,t,n,i,r){const a=s.geometry.attributes.position;if(Xc.fromBufferAttribute(a,i),qc.fromBufferAttribute(a,r),t.distanceSqToSegment(Xc,qc,ql,Nd)>n)return;ql.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(ql);if(!(c<e.near||c>e.far))return{distance:c,point:Nd.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Od=new q,Fd=new q;class AS extends jh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Od.fromBufferAttribute(t,i),Fd.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Od.distanceTo(Fd);e.setAttribute("lineDistance",new mi(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class RS extends jh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class vm extends Hi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const kd=new st,ih=new ol,ac=new qi,oc=new q;class CS extends Gt{constructor(e=new _i,t=new vm){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(i),ac.radius+=r,e.ray.intersectsSphere(ac)===!1)return;kd.copy(i).invert(),ih.copy(e.ray).applyMatrix4(kd);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){const f=Math.max(0,a.start),d=Math.min(l.count,a.start+a.count);for(let _=f,b=d;_<b;_++){const m=l.getX(_);oc.fromBufferAttribute(h,m),Bd(oc,m,c,i,e,t,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let _=f,b=d;_<b;_++)oc.fromBufferAttribute(h,_),Bd(oc,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=i.length;r<a;r++){const o=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Bd(s,e,t,n,i,r,a){const o=ih.distanceSqToPoint(s);if(o<t){const c=new q;ih.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class zd extends Zt{constructor(e,t,n,i,r,a,o,c,l){super(e,t,n,i,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Yh extends _i{constructor(e=1,t=1,n=1,i=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],f=[],d=[];let _=0;const b=[],m=n/2;let g=0;S(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new mi(h,3)),this.setAttribute("normal",new mi(f,3)),this.setAttribute("uv",new mi(d,2));function S(){const M=new q,L=new q;let P=0;const w=(t-e)/n;for(let I=0;I<=r;I++){const B=[],v=I/r,R=v*(t-e)+e;for(let F=0;F<=i;F++){const j=F/i,X=j*c+o,ne=Math.sin(X),W=Math.cos(X);L.x=R*ne,L.y=-v*n+m,L.z=R*W,h.push(L.x,L.y,L.z),M.set(ne,w,W).normalize(),f.push(M.x,M.y,M.z),d.push(j,1-v),B.push(_++)}b.push(B)}for(let I=0;I<i;I++)for(let B=0;B<r;B++){const v=b[B][I],R=b[B+1][I],F=b[B+1][I+1],j=b[B][I+1];e>0&&(u.push(v,R,j),P+=3),t>0&&(u.push(R,F,j),P+=3)}l.addGroup(g,P,0),g+=P}function y(M){const L=_,P=new yt,w=new q;let I=0;const B=M===!0?e:t,v=M===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),_++;const R=_;for(let F=0;F<=i;F++){const X=F/i*c+o,ne=Math.cos(X),W=Math.sin(X);w.x=B*W,w.y=m*v,w.z=B*ne,h.push(w.x,w.y,w.z),f.push(0,v,0),P.x=ne*.5+.5,P.y=W*.5*v+.5,d.push(P.x,P.y),_++}for(let F=0;F<i;F++){const j=L+F,X=R+F;M===!0?u.push(X,X+1,j):u.push(X+1,X,j),I+=3}l.addGroup(g,I,M===!0?1:2),g+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ti extends Hi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new yt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Pi extends Ti{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new yt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return dn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Je(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Je(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Je(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function cc(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function PS(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function LS(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Hd(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,a=0;a!==n;++r){const o=t[r]*e;for(let c=0;c!==e;++c)i[a++]=s[o+c]}return i}function ym(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push.apply(t,a)),r=s[i++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=s[i++];while(r!==void 0)}class Do{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<i)){for(let o=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=i,i=t[++n],e<i)break e}a=t.length;break t}if(!(e>=r)){const o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let a=0;a!==i;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class DS extends Do{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:If,endingEnd:If}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,a=e+1,o=i[r],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uf:r=e,o=2*t-n;break;case Nf:r=i.length-2,o=t+i[r]-i[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Uf:a=e,c=2*n-t;break;case Nf:a=1,c=n+i[1]-i[0];break;default:a=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,_=(n-t)/(i-t),b=_*_,m=b*_,g=-f*m+2*f*b-f*_,S=(1+f)*m+(-1.5-2*f)*b+(-.5+f)*_+1,y=(-1-d)*m+(1.5+d)*b+.5*_,M=d*m-d*b;for(let L=0;L!==o;++L)r[L]=g*a[u+L]+S*a[l+L]+y*a[c+L]+M*a[h+L];return r}}class IS extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==o;++f)r[f]=a[l+f]*h+a[c+f]*u;return r}}class US extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class ji{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=cc(t,this.TimeBufferType),this.values=cc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:cc(e.times,Array),values:cc(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new US(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new IS(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new DS(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case bo:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case ml:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return bo;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return ml}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,a=i-1;for(;r!==i&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==i){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){const c=n[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(i!==void 0&&PS(i))for(let o=0,c=i.length;o!==c;++o){const l=i[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ml,r=e.length-1;let a=1;for(let o=1;o<r;++o){let c=!1;const l=e[o],u=e[o+1];if(l!==u&&(o!==1||l!==e[0]))if(i)c=!0;else{const h=o*n,f=h-n,d=h+n;for(let _=0;_!==n;++_){const b=t[h+_];if(b!==t[f+_]||b!==t[d+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}ji.prototype.TimeBufferType=Float32Array;ji.prototype.ValueBufferType=Float32Array;ji.prototype.DefaultInterpolation=xo;class Pa extends ji{constructor(e,t,n){super(e,t,n)}}Pa.prototype.ValueTypeName="bool";Pa.prototype.ValueBufferType=Array;Pa.prototype.DefaultInterpolation=bo;Pa.prototype.InterpolantFactoryMethodLinear=void 0;Pa.prototype.InterpolantFactoryMethodSmooth=void 0;class Sm extends ji{}Sm.prototype.ValueTypeName="color";class va extends ji{}va.prototype.ValueTypeName="number";class NS extends Do{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(i-t);let l=e*o;for(let u=l+o;l!==u;l+=4)Wr.slerpFlat(r,0,a,l-o,a,l,c);return r}}class ya extends ji{InterpolantFactoryMethodLinear(e){return new NS(this.times,this.values,this.getValueSize(),e)}}ya.prototype.ValueTypeName="quaternion";ya.prototype.InterpolantFactoryMethodSmooth=void 0;class La extends ji{constructor(e,t,n){super(e,t,n)}}La.prototype.ValueTypeName="string";La.prototype.ValueBufferType=Array;La.prototype.DefaultInterpolation=bo;La.prototype.InterpolantFactoryMethodLinear=void 0;La.prototype.InterpolantFactoryMethodSmooth=void 0;class Sa extends ji{}Sa.prototype.ValueTypeName="vector";class OS{constructor(e="",t=-1,n=[],i=C_){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Ci(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(kS(n[a]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,a=n.length;r!==a;++r)t.push(ji.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);const u=LS(c);c=Hd(c,1,u),l=Hd(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new va(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){const l=e[o],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let f=i[h];f||(i[h]=f=[]),f.push(l)}}const a=[];for(const o in i)a.push(this.CreateFromMorphTargetSequence(o,i[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,d,_,b){if(d.length!==0){const m=[],g=[];ym(d,m,g,_),m.length!==0&&b.push(new h(f,m,g))}},i=[],r=e.name||"default",a=e.fps||30,o=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const d={};let _;for(_=0;_<f.length;_++)if(f[_].morphTargets)for(let b=0;b<f[_].morphTargets.length;b++)d[f[_].morphTargets[b]]=-1;for(const b in d){const m=[],g=[];for(let S=0;S!==f[_].morphTargets.length;++S){const y=f[_];m.push(y.time),g.push(y.morphTarget===b?1:0)}i.push(new va(".morphTargetInfluence["+b+"]",m,g))}c=d.length*a}else{const d=".bones["+t[h].name+"]";n(Sa,d+".position",f,"pos",i),n(ya,d+".quaternion",f,"rot",i),n(Sa,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function FS(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return va;case"vector":case"vector2":case"vector3":case"vector4":return Sa;case"color":return Sm;case"quaternion":return ya;case"bool":case"boolean":return Pa;case"string":return La}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function kS(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=FS(s.type);if(s.times===void 0){const t=[],n=[];ym(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const Rr={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class BS{constructor(e,t,n){const i=this;let r=!1,a=0,o=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,r===!1&&i.onStart!==void 0&&i.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){const d=l[h],_=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return _}return null}}}const zS=new BS;class Xr{constructor(e){this.manager=e!==void 0?e:zS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Xr.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class HS extends Error{constructor(e,t){super(e),this.response=t}}class yo extends Xr{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=Rr.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:i});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:i});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=$i[e],h=l.body.getReader(),f=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),d=f?parseInt(f):0,_=d!==0;let b=0;const m=new ReadableStream({start(g){S();function S(){h.read().then(({done:y,value:M})=>{if(y)g.close();else{b+=M.byteLength;const L=new ProgressEvent("progress",{lengthComputable:_,loaded:b,total:d});for(let P=0,w=u.length;P<w;P++){const I=u[P];I.onProgress&&I.onProgress(L)}g.enqueue(M),S()}},y=>{g.error(y)})}}});return new Response(m)}else throw new HS(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(_=>d.decode(_))}}}).then(l=>{Rr.add(e,l);const u=$i[e];delete $i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=$i[e];if(u===void 0)throw this.manager.itemError(e),l;delete $i[e];for(let h=0,f=u.length;h<f;h++){const d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class GS extends Xr{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Rr.get(e);if(a!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a;const o=vo("img");function c(){u(),Rr.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(e),o.src=e,o}}class VS extends Xr{constructor(e){super(e)}load(e,t,n,i){const r=this,a=new Xh,o=new yo(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?a.image=l.image:l.data!==void 0&&(a.image.width=l.width,a.image.height=l.height,a.image.data=l.data),a.wrapS=l.wrapS!==void 0?l.wrapS:Fi,a.wrapT=l.wrapT!==void 0?l.wrapT:Fi,a.magFilter=l.magFilter!==void 0?l.magFilter:pn,a.minFilter=l.minFilter!==void 0?l.minFilter:pn,a.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(a.colorSpace=l.colorSpace),l.flipY!==void 0&&(a.flipY=l.flipY),l.format!==void 0&&(a.format=l.format),l.type!==void 0&&(a.type=l.type),l.mipmaps!==void 0&&(a.mipmaps=l.mipmaps,a.minFilter=ki),l.mipmapCount===1&&(a.minFilter=pn),l.generateMipmaps!==void 0&&(a.generateMipmaps=l.generateMipmaps),a.needsUpdate=!0,t&&t(a,l)},n,i),a}}class WS extends Xr{constructor(e){super(e)}load(e,t,n,i){const r=new Zt,a=new GS(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class ll extends Gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class XS extends ll{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const jl=new st,Gd=new q,Vd=new q;class Kh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new yt(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zh,this._frameExtents=new yt(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Gd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Gd),Vd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vd),t.updateMatrixWorld(),jl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(jl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qS extends Kh{constructor(){super(new Un(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ba*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Mm extends ll{constructor(e,t,n=0,i=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new qS}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Wd=new st,za=new q,Yl=new q;class jS extends Kh{constructor(){super(new Un(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new yt(4,2),this._viewportCount=6,this._viewports=[new Tt(2,1,1,1),new Tt(0,1,1,1),new Tt(3,1,1,1),new Tt(1,1,1,1),new Tt(3,0,1,1),new Tt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),za.setFromMatrixPosition(e.matrixWorld),n.position.copy(za),Yl.copy(n.position),Yl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Yl),n.updateMatrixWorld(),i.makeTranslation(-za.x,-za.y,-za.z),Wd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Wd)}}class Em extends ll{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jS}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class YS extends Kh{constructor(){super(new Hh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tm extends ll{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new YS}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class no{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class KS extends Xr{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Rr.get(e);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Rr.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Rr.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Rr.add(e,c),r.manager.itemStart(e)}}const Zh="\\[\\]\\.:\\/",ZS=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",JS="[^"+Zh.replace("\\.","")+"]",QS=/((?:WC+[\/:])*)/.source.replace("WC",Jh),$S=/(WCOD+)?/.source.replace("WCOD",JS),eM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),tM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),nM=new RegExp("^"+QS+$S+eM+tM+"$"),iM=["material","materials","bones","map"];class rM{constructor(e,t,n){const i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ZS,"")}static parseTrackName(e){const t=nM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);iM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===t||o.uuid===t)return o;const c=n(o.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const a=e[i];if(a===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=rM;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class s1{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(dn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class a1 extends Ts{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Lh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Lh);class Qh{constructor(){this.callbacks={},this.callbacks.base={}}on(e,t){const n=this;return typeof e>"u"||e===""?(console.warn("wrong names"),!1):typeof t>"u"?(console.warn("wrong callback"),!1):(this.resolveNames(e).forEach(function(r){const a=n.resolveName(r);n.callbacks[a.namespace]instanceof Object||(n.callbacks[a.namespace]={}),n.callbacks[a.namespace][a.value]instanceof Array||(n.callbacks[a.namespace][a.value]=[]),n.callbacks[a.namespace][a.value].push(t)}),this)}off(e){const t=this;return typeof e>"u"||e===""?(console.warn("wrong name"),!1):(this.resolveNames(e).forEach(function(i){const r=t.resolveName(i);if(r.namespace!=="base"&&r.value==="")delete t.callbacks[r.namespace];else if(r.namespace==="base")for(const a in t.callbacks)t.callbacks[a]instanceof Object&&t.callbacks[a][r.value]instanceof Array&&(delete t.callbacks[a][r.value],Object.keys(t.callbacks[a]).length===0&&delete t.callbacks[a]);else t.callbacks[r.namespace]instanceof Object&&t.callbacks[r.namespace][r.value]instanceof Array&&(delete t.callbacks[r.namespace][r.value],Object.keys(t.callbacks[r.namespace]).length===0&&delete t.callbacks[r.namespace])}),this)}trigger(e,t){if(typeof e>"u"||e==="")return console.warn("wrong name"),!1;const n=this;let i=null;const r=t instanceof Array?t:[];let a=this.resolveNames(e);if(a=this.resolveName(a[0]),a.namespace==="base")for(const o in n.callbacks)n.callbacks[o]instanceof Object&&n.callbacks[o][a.value]instanceof Array&&n.callbacks[o][a.value].forEach(function(c){c.apply(n,r)});else if(this.callbacks[a.namespace]instanceof Object){if(a.value==="")return console.warn("wrong name"),this;n.callbacks[a.namespace][a.value].forEach(function(o){o.apply(n,r)})}return i}resolveNames(e){let t=e;return t=t.replace(/[^a-zA-Z0-9 ,/.]/g,""),t=t.replace(/[,/]+/g," "),t=t.split(" "),t}resolveName(e){const t={},n=e.split(".");return t.original=e,t.value=n[0],t.namespace="base",n.length>1&&n[1]!==""&&(t.namespace=n[1]),t}}class sM extends Qh{constructor(){super(),this.onResize=()=>{window.clearTimeout(this.debounce),this.debounce=window.setTimeout(()=>this.trigger("resize"),150)},window.addEventListener("resize",this.onResize)}destroy(){window.clearTimeout(this.debounce),window.removeEventListener("resize",this.onResize),this.off("resize")}}function Xd(s,e){if(e===P_)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Qu||e===Qp){let t=s.getIndex();if(t===null){const a=[],o=s.getAttribute("position");if(o!==void 0){for(let c=0;c<o.count;c++)a.push(c);s.setIndex(a),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Qu)for(let a=1;a<=n;a++)i.push(t.getX(0)),i.push(t.getX(a)),i.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(i.push(t.getX(a)),i.push(t.getX(a+1)),i.push(t.getX(a+2))):(i.push(t.getX(a+2)),i.push(t.getX(a+1)),i.push(t.getX(a)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class aM extends Xr{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hM(t)}),this.register(function(t){return new fM(t)}),this.register(function(t){return new yM(t)}),this.register(function(t){return new SM(t)}),this.register(function(t){return new MM(t)}),this.register(function(t){return new pM(t)}),this.register(function(t){return new mM(t)}),this.register(function(t){return new gM(t)}),this.register(function(t){return new _M(t)}),this.register(function(t){return new uM(t)}),this.register(function(t){return new bM(t)}),this.register(function(t){return new dM(t)}),this.register(function(t){return new vM(t)}),this.register(function(t){return new xM(t)}),this.register(function(t){return new cM(t)}),this.register(function(t){return new EM(t)}),this.register(function(t){return new TM(t)})}load(e,t,n,i){const r=this;let a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){const l=no.extractUrlBase(e);a=no.resolveURL(l,this.path)}else a=no.extractUrlBase(e);this.manager.itemStart(e);const o=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new yo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(u){t(u),r.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===wm){try{a[gt.KHR_BINARY_GLTF]=new wM(e)}catch(h){i&&i(h);return}r=JSON.parse(a[gt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new BM(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case gt.KHR_MATERIALS_UNLIT:a[h]=new lM;break;case gt.KHR_DRACO_MESH_COMPRESSION:a[h]=new AM(r,this.dracoLoader);break;case gt.KHR_TEXTURE_TRANSFORM:a[h]=new RM;break;case gt.KHR_MESH_QUANTIZATION:a[h]=new CM;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function oM(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const gt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class cM{constructor(e){this.parser=e,this.name=gt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Je(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],sn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Tm(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Em(u),l.distance=h;break;case"spot":l=new Mm(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,tr(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}}class lM{constructor(){this.name=gt.KHR_MATERIALS_UNLIT}getMaterialType(){return Qn}extendParams(e,t,n){const i=[];e.color=new Je(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Yt))}return Promise.all(i)}}class uM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class hM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new yt(o,o)}return Promise.all(r)}}class fM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class dM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(r)}}class pM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Je(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=i.extensions[this.name];if(a.sheenColorFactor!==void 0){const o=a.sheenColorFactor;t.sheenColor.setRGB(o[0],o[1],o[2],sn)}return a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Yt)),a.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(r)}}class mM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(r)}}class gM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new Je().setRGB(o[0],o[1],o[2],sn),Promise.all(r)}}class _M{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class bM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new Je().setRGB(o[0],o[1],o[2],sn),a.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Yt)),Promise.all(r)}}class xM{constructor(e){this.parser=e,this.name=gt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return t.bumpScale=a.bumpFactor!==void 0?a.bumpFactor:1,a.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",a.bumpTexture)),Promise.all(r)}}class vM{constructor(e){this.parser=e,this.name=gt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Pi}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],a=i.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(r)}}class yM{constructor(e){this.parser=e,this.name=gt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}}class SM{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class MM{constructor(e){this.parser=e,this.name=gt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const a=r.extensions[t],o=i.images[a.source];let c=n.textureLoader;if(o.uri){const l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,a.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class EM{constructor(e){this.name=gt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):a.ready.then(function(){const d=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}}class TM{constructor(e){this.name=gt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==li.TRIANGLES&&l.mode!==li.TRIANGLE_STRIP&&l.mode!==li.TRIANGLE_FAN&&l.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],c={};for(const l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(const _ of h){const b=new st,m=new q,g=new Wr,S=new q(1,1,1),y=new wS(_.geometry,_.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,M),c.SCALE&&S.fromBufferAttribute(c.SCALE,M),y.setMatrixAt(M,b.compose(m,g,S));for(const M in c)if(M==="_COLOR_0"){const L=c[M];y.instanceColor=new nh(L.array,L.itemSize,L.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&_.geometry.setAttribute(M,c[M]);Gt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),d.push(y)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const wm="glTF",Ha=12,qd={JSON:1313821514,BIN:5130562};class wM{constructor(e){this.name=gt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Ha),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==wm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Ha,r=new DataView(e,Ha);let a=0;for(;a<i;){const o=r.getUint32(a,!0);a+=4;const c=r.getUint32(a,!0);if(a+=4,c===qd.JSON){const l=new Uint8Array(e,Ha+a,o);this.content=n.decode(l)}else if(c===qd.BIN){const l=Ha+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class AM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=gt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(const u in a){const h=rh[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=rh[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],d=ra[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(const _ in d.attributes){const b=d.attributes[_],m=c[_];m!==void 0&&(b.normalized=m)}h(d)},o,l,sn,f)})})}}class RM{constructor(){this.name=gt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class CM{constructor(){this.name=gt.KHR_MESH_QUANTIZATION}}class Am extends Do{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let a=0;a!==i;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,_=e*l,b=_-l,m=-2*d+3*f,g=d-f,S=1-m,y=g-f+h;for(let M=0;M!==o;M++){const L=a[b+M+o],P=a[b+M+c]*u,w=a[_+M+o],I=a[_+M]*u;r[M]=S*L+y*P+m*w+g*I}return r}}const PM=new Wr;class LM extends Am{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return PM.fromArray(r).normalize().toArray(r),r}}const li={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},ra={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},jd={9728:On,9729:pn,9984:Gp,9985:Mc,9986:Xa,9987:ki},Yd={33071:Fi,33648:zc,10497:ma},Kl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},rh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Er={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},DM={CUBICSPLINE:void 0,LINEAR:xo,STEP:bo},Zl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function IM(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Ti({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:dr})),s.DefaultMaterial}function $r(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function tr(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function UM(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const a=[],o=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;a.push(f)}if(i){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;o.push(f)}if(r){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function NM(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function OM(s){let e;const t=s.extensions&&s.extensions[gt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jl(t.attributes):e=s.indices+":"+Jl(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jl(s.targets[n]);return e}function Jl(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function sh(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function FM(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const kM=new st;class BM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new oM,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,a=-1;if(typeof navigator<"u"){const o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;const c=o.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&a<98?this.textureLoader=new WS(this.options.manager):this.textureLoader=new KS(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new yo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][i.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:i.asset,parser:n,userData:{}};return $r(r,o,i),tr(o,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(const c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const a=t[i].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const a=e[i];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(a,o)=>{const c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(const[l,u]of a.children.entries())r(u,o.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[gt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,a){n.load(no.resolveURL(t.uri,i.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const a=Kl[i.type],o=ra[i.componentType],c=i.normalized===!0,l=new o(i.count*a);return Promise.resolve(new _n(l,a,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(a){const o=a[0],c=Kl[i.type],l=ra[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let b,m;if(d&&d!==h){const g=Math.floor(f/d),S="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+g+":"+i.count;let y=t.cache.get(S);y||(b=new l(o,g*d,i.count*d/u),y=new yS(b,d/u),t.cache.add(S,y)),m=new Wh(y,c,f%d/u,_)}else o===null?b=new l(i.count*c):b=new l(o,f,i.count*c),m=new _n(b,c,_);if(i.sparse!==void 0){const g=Kl.SCALAR,S=ra[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,L=new S(a[1],y,i.sparse.count*g),P=new l(a[2],M,i.sparse.count*c);o!==null&&(m=new _n(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let w=0,I=L.length;w<I;w++){const B=L[w];if(m.setX(B,P[w*c]),c>=2&&m.setY(B,P[w*c+1]),c>=3&&m.setZ(B,P[w*c+2]),c>=4&&m.setW(B,P[w*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r];let o=this.textureLoader;if(a.uri){const c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){const i=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(r.samplers||{})[a.sampler]||{};return u.magFilter=jd[f.magFilter]||pn,u.minFilter=jd[f.minFilter]||ki,u.wrapS=Yd[f.wrapS]||ma,u.wrapT=Yd[f.wrapT]||ma,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=i.images[e],o=self.URL||self.webkitURL;let c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;const f=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let _=f;t.isImageBitmapLoader===!0&&(_=function(b){const m=new Zt(b);m.needsUpdate=!0,f(m)}),t.load(no.resolveURL(h,r.path),_,void 0,d)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),tr(h,a),h.userData.mimeType=a.mimeType||FM(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[gt.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[gt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const c=r.associations.get(a);a=r.extensions[gt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return i!==void 0&&(a.colorSpace=i),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new vm,Hi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let c=this.cache.get(o);c||(c=new xm,Hi.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(i||r||a){let o="ClonedMaterial:"+n.uuid+":";i&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Ti}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let a;const o={},c=r.extensions||{},l=[];if(c[gt.KHR_MATERIALS_UNLIT]){const h=i[gt.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,t))}else{const h=r.pbrMetallicRoughness||{};if(o.color=new Je(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],sn),o.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",h.baseColorTexture,Yt)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=wi);const u=r.alphaMode||Zl.OPAQUE;if(u===Zl.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===Zl.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Qn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new yt(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Qn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Qn){const h=r.emissiveFactor;o.emissive=new Je().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&a!==Qn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,Yt)),Promise.all(l).then(function(){const h=new a(o);return r.name&&(h.name=r.name),tr(h,r),t.associations.set(h,{materials:e}),r.extensions&&$r(i,h,r),h})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(o){return n[gt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Kd(c,o,t)})}const a=[];for(let o=0,c=e.length;o<c;o++){const l=e[o],u=OM(l),h=i[u];if(h)a.push(h.promise);else{let f;l.extensions&&l.extensions[gt.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=Kd(new _i,l,t),i[u]={primitive:l,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){const u=a[c].material===void 0?IM(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,_=u.length;d<_;d++){const b=u[d],m=a[d];let g;const S=l[d];if(m.mode===li.TRIANGLES||m.mode===li.TRIANGLE_STRIP||m.mode===li.TRIANGLE_FAN||m.mode===void 0)g=r.isSkinnedMesh===!0?new MS(b,S):new bt(b,S),g.isSkinnedMesh===!0&&g.normalizeSkinWeights(),m.mode===li.TRIANGLE_STRIP?g.geometry=Xd(g.geometry,Qp):m.mode===li.TRIANGLE_FAN&&(g.geometry=Xd(g.geometry,Qu));else if(m.mode===li.LINES)g=new AS(b,S);else if(m.mode===li.LINE_STRIP)g=new jh(b,S);else if(m.mode===li.LINE_LOOP)g=new RS(b,S);else if(m.mode===li.POINTS)g=new CS(b,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(g.geometry.morphAttributes).length>0&&NM(g,r),g.name=t.createUniqueName(r.name||"mesh_"+e),tr(g,r),m.extensions&&$r(i,g,m),t.assignFinalMaterial(g),h.push(g)}for(let d=0,_=h.length;d<_;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&$r(i,h[0],r),h[0];const f=new lr;r.extensions&&$r(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,_=h.length;d<_;d++)f.add(h[d]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Un(i0.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Hh(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),tr(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),a=i,o=[],c=[];for(let l=0,u=a.length;l<u;l++){const h=a[l];if(h){o.push(h);const f=new st;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new qh(o,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,a=[],o=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){const d=i.channels[h],_=i.samplers[d.sampler],b=d.target,m=b.node,g=i.parameters!==void 0?i.parameters[_.input]:_.input,S=i.parameters!==void 0?i.parameters[_.output]:_.output;b.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",S)),l.push(_),u.push(b))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const f=h[0],d=h[1],_=h[2],b=h[3],m=h[4],g=[];for(let S=0,y=f.length;S<y;S++){const M=f[S],L=d[S],P=_[S],w=b[S],I=m[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const B=n._createAnimationTracks(M,L,P,w,I);if(B)for(let v=0;v<B.length;v++)g.push(B[v])}return new OS(r,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const a=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=i.weights.length;c<l;c++)o.morphTargetInfluences[c]=i.weights[c]}),a})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=i.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){const u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,kM)});for(let d=0,_=h.length;d<_;d++)u.add(h[d]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],a=r.name?i.createUniqueName(r.name):"",o=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new bm:l.length>1?u=new lr:l.length===1?u=l[0]:u=new Gt,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),tr(u,r),r.extensions&&$r(n,u,r),r.matrix!==void 0){const h=new st;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new lr;n.name&&(r.name=i.createUniqueName(n.name)),tr(r,n),n.extensions&&$r(t,r,n);const a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(i.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[f,d]of i.associations)(f instanceof Hi||f instanceof Zt)&&h.set(f,d);return u.traverse(f=>{const d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const a=[],o=e.name?e.name:e.uuid,c=[];Er[r.path]===Er.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(o);let l;switch(Er[r.path]){case Er.weights:l=va;break;case Er.rotation:l=ya;break;case Er.position:case Er.scale:l=Sa;break;default:switch(n.itemSize){case 1:l=va;break;case 2:case 3:default:l=Sa;break}break}const u=i.interpolation!==void 0?DM[i.interpolation]:xo,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){const _=new l(c[f]+"."+Er[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=sh(t.constructor),i=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ya?LM:Am;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zM(s,e,t){const n=e.attributes,i=new Xi;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(i.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),o.normalized){const u=sh(ra[o.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const o=new q,c=new q;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],d=f.min,_=f.max;if(d!==void 0&&_!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(_[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(_[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(_[2]))),f.normalized){const b=sh(ra[f.componentType]);c.multiplyScalar(b)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(o)}s.boundingBox=i;const a=new qi;i.getCenter(a.center),a.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=a}function Kd(s,e,t){const n=e.attributes,i=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(const a in n){const o=rh[a]||a.toLowerCase();o in s.attributes||i.push(r(n[a],o))}if(e.indices!==void 0&&!s.index){const a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});i.push(a)}return Mt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Mt.workingColorSpace}" not supported.`),tr(s,e),zM(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?UM(s,e.targets,t):s})}const Ql=new WeakMap;class HM extends Xr{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new yo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,a=>{this.parse(a,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Yt,n).catch(n)}decodeDracoFile(e,t,n,i,r=sn,a=()=>{}){const o={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,o).then(t).catch(a)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Ql.has(e)){const c=Ql.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(r,a).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return o.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Ql.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new _i;e.index&&t.setIndex(new _n(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,a=i.array,o=i.itemSize,c=new _n(a,o);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(a instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Yt)return;const n=new Je;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),Mt.toWorkingColorSpace(n,Yt),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new yo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=GM.toString(),a=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const a=r.data;switch(a.type){case"decode":i._callbacks[a.id].resolve(a);break;case"error":i._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function GM(){let s,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":s=o.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=o.buffer,l=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const d=t(h,f,new Int8Array(c),l),_=d.attributes.map(b=>b.array.buffer);d.index&&_.push(d.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:d},_)}catch(d){console.error(d),self.postMessage({type:"error",id:o.id,error:d.message})}finally{h.destroy(f)}});break}};function t(a,o,c,l){const u=l.attributeIDs,h=l.attributeTypes;let f,d;const _=o.GetEncodedGeometryType(c);if(_===a.TRIANGULAR_MESH)f=new a.Mesh,d=o.DecodeArrayToMesh(c,c.byteLength,f);else if(_===a.POINT_CLOUD)f=new a.PointCloud,d=o.DecodeArrayToPointCloud(c,c.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!d.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+d.error_msg());const b={index:null,attributes:[]};for(const m in u){const g=self[h[m]];let S,y;if(l.useUniqueIDs)y=u[m],S=o.GetAttributeByUniqueId(f,y);else{if(y=o.GetAttributeId(f,a[u[m]]),y===-1)continue;S=o.GetAttribute(f,y)}const M=i(a,o,f,m,g,S);m==="color"&&(M.vertexColorSpace=l.vertexColorSpace),b.attributes.push(M)}return _===a.TRIANGULAR_MESH&&(b.index=n(a,o,f)),a.destroy(f),b}function n(a,o,c){const u=c.num_faces()*3,h=u*4,f=a._malloc(h);o.GetTrianglesUInt32Array(c,h,f);const d=new Uint32Array(a.HEAPF32.buffer,f,u).slice();return a._free(f),{array:d,itemSize:1}}function i(a,o,c,l,u,h){const f=h.num_components(),_=c.num_points()*f,b=_*u.BYTES_PER_ELEMENT,m=r(a,u),g=a._malloc(b);o.GetAttributeDataArrayForAllPoints(c,h,m,b,g);const S=new u(a.HEAPF32.buffer,g,_).slice();return a._free(g),{name:l,array:S,itemSize:f}}function r(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}var VM=function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq:P8Yqdbk;3sezu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfgocl4cifcd4hxdndndndnaoc9WGgmTmbcbhPcehsawcjdfhzalhHinaraH9Rax6midnaraHaxfgl9RcK6mbczhoinawcj;cbfaogifgoc9WfhOdndndndndnaHaic9WfgAco4fRbbaAci4coG4ciGPlbedibkaO9cb83ibaOcwf9cb83ibxikaOalRblalRbbgAco4gCaCciSgCE86bbaocGfalclfaCfgORbbaAcl4ciGgCaCciSgCE86bbaocVfaOaCfgORbbaAcd4ciGgCaCciSgCE86bbaoc7faOaCfgORbbaAciGgAaAciSgAE86bbaoctfaOaAfgARbbalRbegOco4gCaCciSgCE86bbaoc91faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc4faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc93faAaCfgARbbaOciGgOaOciSgOE86bbaoc94faAaOfgARbbalRbdgOco4gCaCciSgCE86bbaoc95faAaCfgARbbaOcl4ciGgCaCciSgCE86bbaoc96faAaCfgARbbaOcd4ciGgCaCciSgCE86bbaoc97faAaCfgARbbaOciGgOaOciSgOE86bbaoc98faAaOfgORbbalRbiglco4gAaAciSgAE86bbaoc99faOaAfgORbbalcl4ciGgAaAciSgAE86bbaoc9:faOaAfgORbbalcd4ciGgAaAciSgAE86bbaocufaOaAfgoRbbalciGglalciSglE86bbaoalfhlxdkaOalRbwalRbbgAcl4gCaCcsSgCE86bbaocGfalcwfaCfgORbbaAcsGgAaAcsSgAE86bbaocVfaOaAfgORbbalRbegAcl4gCaCcsSgCE86bbaoc7faOaCfgORbbaAcsGgAaAcsSgAE86bbaoctfaOaAfgORbbalRbdgAcl4gCaCcsSgCE86bbaoc91faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc4faOaAfgORbbalRbigAcl4gCaCcsSgCE86bbaoc93faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc94faOaAfgORbbalRblgAcl4gCaCcsSgCE86bbaoc95faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc96faOaAfgORbbalRbvgAcl4gCaCcsSgCE86bbaoc97faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc98faOaAfgORbbalRbogAcl4gCaCcsSgCE86bbaoc99faOaCfgORbbaAcsGgAaAcsSgAE86bbaoc9:faOaAfgORbbalRbrglcl4gAaAcsSgAE86bbaocufaOaAfgoRbbalcsGglalcsSglE86bbaoalfhlxekaOal8Pbb83bbaOcwfalcwf8Pbb83bbalczfhlkdnaiam9pmbaiczfhoaral9RcL0mekkaiam6mialTmidnakTmbawaPfRbbhOcbhoazhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkkazcefhzaPcefgPad6hsalhHaPad9hmexvkkcbhlasceGmdxikalaxad2fhCdnakTmbcbhHcehsawcjdfhminaral9Rax6mialTmdalaxfhlawaHfRbbhOcbhoamhiinaiawcj;cbfaofRbbgAce4cbaAceG9R7aOfgO86bbaiadfhiaocefgoak9hmbkamcefhmaHcefgHad6hsaHad9hmbkaChlxikcbhocehsinaral9Rax6mdalTmealaxfhlaocefgoad6hsadao9hmbkaChlxdkcbhlasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqalmbkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;yzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabavcefciGaiVcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabavcdfciGaiVcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabavcufciGaiVcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabavciGaiVcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2geTmbinababydbgdcwtcw91:Yadce91cjjj;8ifcjjj98G::NUdbabclfhbaecufgembkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaiczfhiaeczfheadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;t9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;h8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincehHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAci6hHalhOaAcefgohAaoclSmdxekkcbhlaHceGmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;uzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhDcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgrc;Ve0mbavc;abfalarcl4cu7fcsGcitfgPydlhsaPydbhzdnarcsGgPak9pmbavaiarcu7fcsGcdtfydbaxaPEhraPThPdndnadcd9hmbabaDcetfgHaz87ebaHcdfas87ebaHclfar87ebxekabaDcdtfgHazBdbaHclfasBdbaHcwfarBdbkaxaPfhxavc;abfalcitfgHarBdbaHasBdlavaicdtfarBdbavc;abfalcefcsGglcitfgHazBdbaHarBdlaiaPfhialcefhlxdkdndnaPcsSmbamaPfaPc987fcefhmxekaocefhrao8SbbgPcFeGhHdndnaPcu9mmbarhoxekaocvfhoaHcFbGhHcrhPdninar8SbbgOcFbGaPtaHVhHaOcu9kmearcefhraPcrfgPc8J9hmbxdkkarcefhokaHce4cbaHceG9R7amfhmkdndnadcd9hmbabaDcetfgraz87ebarcdfas87ebarclfam87ebxekabaDcdtfgrazBdbarclfasBdbarcwfamBdbkavc;abfalcitfgramBdbarasBdlavaicdtfamBdbavc;abfalcefcsGglcitfgrazBdbaramBdlaicefhialcefhlxekdnarcpe0mbaxcefgOavaiaqarcsGfRbbgPcl49RcsGcdtfydbaPcz6gHEhravaiaP9RcsGcdtfydbaOaHfgsaPcsGgOEhPaOThOdndnadcd9hmbabaDcetfgzax87ebazcdfar87ebazclfaP87ebxekabaDcdtfgzaxBdbazclfarBdbazcwfaPBdbkavaicdtfaxBdbavc;abfalcitfgzarBdbazaxBdlavaicefgicsGcdtfarBdbavc;abfalcefcsGcitfgzaPBdbazarBdlavaiaHfcsGgicdtfaPBdbavc;abfalcdfcsGglcitfgraxBdbaraPBdlalcefhlaiaOfhiasaOfhxxekaxcbaoRbbgzEgAarc;:eSgrfhsazcsGhCazcl4hXdndnazcs0mbascefhOxekashOavaiaX9RcsGcdtfydbhskdndnaCmbaOcefhxxekaOhxavaiaz9RcsGcdtfydbhOkdndnarTmbaocefhrxekaocdfhrao8SbegHcFeGhPdnaHcu9kmbaocofhAaPcFbGhPcrhodninar8SbbgHcFbGaotaPVhPaHcu9kmearcefhraocrfgoc8J9hmbkaAhrxekarcefhrkaPce4cbaPceG9R7amfgmhAkdndnaXcsSmbarhPxekarcefhPar8SbbgocFeGhHdnaocu9kmbarcvfhsaHcFbGhHcrhodninaP8SbbgrcFbGaotaHVhHarcu9kmeaPcefhPaocrfgoc8J9hmbkashPxekaPcefhPkaHce4cbaHceG9R7amfgmhskdndnaCcsSmbaPhoxekaPcefhoaP8SbbgrcFeGhHdnarcu9kmbaPcvfhOaHcFbGhHcrhrdninao8SbbgPcFbGartaHVhHaPcu9kmeaocefhoarcrfgrc8J9hmbkaOhoxekaocefhokaHce4cbaHceG9R7amfgmhOkdndnadcd9hmbabaDcetfgraA87ebarcdfas87ebarclfaO87ebxekabaDcdtfgraABdbarclfasBdbarcwfaOBdbkavc;abfalcitfgrasBdbaraABdlavaicdtfaABdbavc;abfalcefcsGcitfgraOBdbarasBdlavaicefgicsGcdtfasBdbavc;abfalcdfcsGcitfgraABdbaraOBdlavaiazcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiaDcifgDae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:llevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaicd4cbaice4ceG9R7avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:EPliuo97eue978Jjjjjbca9Rhidndnadcl9hmbdnaec98GglTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaiaeciGgvcdtgdVcbczad9R;8kbaiabalcdtfglad;8qbbdnavTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkalaiad;8qbbskdnaec98GgxTmbcbhvabhdinadczfglalpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgvax6mbkkaxae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabaxcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbhdabheinaeaepbbbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepkbbaeczfheadclfgdav6mbkkdnaval9pmbaialciGgdcdtgeVcbc;abae9R;8kbaiabavcdtfgvae;8qbbdnadTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjZbbjZbbjZbbjZp:UepxbbjFbbjFbbjFbbjFp9op;Mepklbkavaiae;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var i=WebAssembly.validate(t)?e:s,r,a=WebAssembly.instantiate(o(i),{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var S=new Uint8Array(g.length),y=0;y<g.length;++y){var M=g.charCodeAt(y);S[y]=M>96?M-97:M>64?M-39:M+4}for(var L=0,y=0;y<g.length;++y)S[L++]=S[y]<60?n[S[y]]:(S[y]-60)*64+S[++y];return S.buffer.slice(0,L)}function c(g,S,y,M,L,P){var w=r.exports.sbrk,I=y+3&-4,B=w(I*M),v=w(L.length),R=new Uint8Array(r.exports.memory.buffer);R.set(L,v);var F=g(B,y,M,v,L.length);if(F==0&&P&&P(B,I,M),S.set(R.subarray(B,B+y*M)),w(B-w(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],f=0;function d(g){var S={object:new Worker(g),pending:0,requests:{}};return S.object.onmessage=function(y){var M=y.data;S.pending-=M.count,S.requests[M.id][M.action](M.value),delete S.requests[M.id]},S}function _(g){for(var S="var instance; var ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(o(i))+"]), {}).then(function(result) { instance = result.instance; instance.exports.__wasm_call_ctors(); });self.onmessage = workerProcess;"+c.toString()+m.toString(),y=new Blob([S],{type:"text/javascript"}),M=URL.createObjectURL(y),L=0;L<g;++L)h[L]=d(M);URL.revokeObjectURL(M)}function b(g,S,y,M,L){for(var P=h[0],w=1;w<h.length;++w)h[w].pending<P.pending&&(P=h[w]);return new Promise(function(I,B){var v=new Uint8Array(y),R=f++;P.pending+=g,P.requests[R]={resolve:I,reject:B},P.object.postMessage({id:R,count:g,size:S,source:v,mode:M,filter:L},[v.buffer])})}function m(g){a.then(function(){var S=g.data;try{var y=new Uint8Array(S.count*S.size);c(r.exports[S.mode],y,S.count,S.size,S.source,r.exports[S.filter]),self.postMessage({id:S.id,count:S.count,action:"resolve",value:y},[y.buffer])}catch(M){self.postMessage({id:S.id,count:S.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(g){_(g)},decodeVertexBuffer:function(g,S,y,M,L){c(r.exports.meshopt_decodeVertexBuffer,g,S,y,M,r.exports[l[L]])},decodeIndexBuffer:function(g,S,y,M){c(r.exports.meshopt_decodeIndexBuffer,g,S,y,M)},decodeIndexSequence:function(g,S,y,M){c(r.exports.meshopt_decodeIndexSequence,g,S,y,M)},decodeGltfBuffer:function(g,S,y,M,L,P){c(r.exports[u[L]],g,S,y,M,r.exports[l[P]])},decodeGltfBufferAsync:function(g,S,y,M,L){return h.length>0?b(g,S,y,u[M],l[L]):a.then(function(){var P=new Uint8Array(g*S);return c(r.exports[u[M]],P,g,S,y,r.exports[l[L]]),P})}}}();/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var fi=Uint8Array,Js=Uint16Array,WM=Int32Array,Rm=new fi([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Cm=new fi([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),XM=new fi([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pm=function(s,e){for(var t=new Js(31),n=0;n<31;++n)t[n]=e+=1<<s[n-1];for(var i=new WM(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)i[r]=r-t[n]<<5|n;return{b:t,r:i}},Lm=Pm(Rm,2),Dm=Lm.b,qM=Lm.r;Dm[28]=258,qM[258]=28;var jM=Pm(Cm,0),YM=jM.b,ah=new Js(32768);for(var Bt=0;Bt<32768;++Bt){var Tr=(Bt&43690)>>1|(Bt&21845)<<1;Tr=(Tr&52428)>>2|(Tr&13107)<<2,Tr=(Tr&61680)>>4|(Tr&3855)<<4,ah[Bt]=((Tr&65280)>>8|(Tr&255)<<8)>>1}var io=function(s,e,t){for(var n=s.length,i=0,r=new Js(e);i<n;++i)s[i]&&++r[s[i]-1];var a=new Js(e);for(i=1;i<e;++i)a[i]=a[i-1]+r[i-1]<<1;var o;if(t){o=new Js(1<<e);var c=15-e;for(i=0;i<n;++i)if(s[i])for(var l=i<<4|s[i],u=e-s[i],h=a[s[i]-1]++<<u,f=h|(1<<u)-1;h<=f;++h)o[ah[h]>>c]=l}else for(o=new Js(n),i=0;i<n;++i)s[i]&&(o[i]=ah[a[s[i]-1]++]>>15-s[i]);return o},Io=new fi(288);for(var Bt=0;Bt<144;++Bt)Io[Bt]=8;for(var Bt=144;Bt<256;++Bt)Io[Bt]=9;for(var Bt=256;Bt<280;++Bt)Io[Bt]=7;for(var Bt=280;Bt<288;++Bt)Io[Bt]=8;var Im=new fi(32);for(var Bt=0;Bt<32;++Bt)Im[Bt]=5;var KM=io(Io,9,1),ZM=io(Im,5,1),$l=function(s){for(var e=s[0],t=1;t<s.length;++t)s[t]>e&&(e=s[t]);return e},Si=function(s,e,t){var n=e/8|0;return(s[n]|s[n+1]<<8)>>(e&7)&t},eu=function(s,e){var t=e/8|0;return(s[t]|s[t+1]<<8|s[t+2]<<16)>>(e&7)},JM=function(s){return(s+7)/8|0},QM=function(s,e,t){return(t==null||t>s.length)&&(t=s.length),new fi(s.subarray(e,t))},$M=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],Ei=function(s,e,t){var n=new Error(e||$M[s]);if(n.code=s,Error.captureStackTrace&&Error.captureStackTrace(n,Ei),!t)throw n;return n},eE=function(s,e,t,n){var i=s.length,r=0;if(!i||e.f&&!e.l)return t||new fi(0);var a=!t,o=a||e.i!=2,c=e.i;a&&(t=new fi(i*3));var l=function(qe){var Ge=t.length;if(qe>Ge){var N=new fi(Math.max(Ge*2,qe));N.set(t),t=N}},u=e.f||0,h=e.p||0,f=e.b||0,d=e.l,_=e.d,b=e.m,m=e.n,g=i*8;do{if(!d){u=Si(s,h,1);var S=Si(s,h+1,3);if(h+=3,S)if(S==1)d=KM,_=ZM,b=9,m=5;else if(S==2){var P=Si(s,h,31)+257,w=Si(s,h+10,15)+4,I=P+Si(s,h+5,31)+1;h+=14;for(var B=new fi(I),v=new fi(19),R=0;R<w;++R)v[XM[R]]=Si(s,h+R*3,7);h+=w*3;for(var F=$l(v),j=(1<<F)-1,X=io(v,F,1),R=0;R<I;){var ne=X[Si(s,h,j)];h+=ne&15;var y=ne>>4;if(y<16)B[R++]=y;else{var W=0,ee=0;for(y==16?(ee=3+Si(s,h,3),h+=2,W=B[R-1]):y==17?(ee=3+Si(s,h,7),h+=3):y==18&&(ee=11+Si(s,h,127),h+=7);ee--;)B[R++]=W}}var K=B.subarray(0,P),de=B.subarray(P);b=$l(K),m=$l(de),d=io(K,b,1),_=io(de,m,1)}else Ei(1);else{var y=JM(h)+4,M=s[y-4]|s[y-3]<<8,L=y+M;if(L>i){c&&Ei(0);break}o&&l(f+M),t.set(s.subarray(y,L),f),e.b=f+=M,e.p=h=L*8,e.f=u;continue}if(h>g){c&&Ei(0);break}}o&&l(f+131072);for(var U=(1<<b)-1,xe=(1<<m)-1,Oe=h;;Oe=h){var W=d[eu(s,h)&U],We=W>>4;if(h+=W&15,h>g){c&&Ei(0);break}if(W||Ei(2),We<256)t[f++]=We;else if(We==256){Oe=h,d=null;break}else{var te=We-254;if(We>264){var R=We-257,oe=Rm[R];te=Si(s,h,(1<<oe)-1)+Dm[R],h+=oe}var he=_[eu(s,h)&xe],ge=he>>4;he||Ei(3),h+=he&15;var de=YM[ge];if(ge>3){var oe=Cm[ge];de+=eu(s,h)&(1<<oe)-1,h+=oe}if(h>g){c&&Ei(0);break}o&&l(f+131072);var Re=f+te;if(f<de){var Ce=r-de,Qe=Math.min(de,Re);for(Ce+f<0&&Ei(3);f<Qe;++f)t[f]=n[Ce+f]}for(;f<Re;++f)t[f]=t[f-de]}}e.l=d,e.p=Oe,e.b=f,e.f=u,d&&(u=1,e.m=b,e.d=_,e.n=m)}while(!u);return f!=t.length&&a?QM(t,0,f):t.subarray(0,f)},tE=new fi(0),nE=function(s,e){return((s[0]&15)!=8||s[0]>>4>7||(s[0]<<8|s[1])%31)&&Ei(6,"invalid zlib data"),(s[1]>>5&1)==1&&Ei(6,"invalid zlib data: "+(s[1]&32?"need":"unexpected")+" dictionary"),(s[1]>>3&4)+2};function lc(s,e){return eE(s.subarray(nE(s),-4),{i:2},e,e)}var iE=typeof TextDecoder<"u"&&new TextDecoder,rE=0;try{iE.decode(tE,{stream:!0}),rE=1}catch{}class sE extends VS{constructor(e){super(e),this.type=or}parse(e){const B=Math.pow(2.7182818,2.2);function v(p,x){let E=0;for(let k=0;k<65536;++k)(k==0||p[k>>3]&1<<(k&7))&&(x[E++]=k);const A=E-1;for(;E<65536;)x[E++]=0;return A}function R(p){for(let x=0;x<16384;x++)p[x]={},p[x].len=0,p[x].lit=0,p[x].p=null}const F={l:0,c:0,lc:0};function j(p,x,E,A,k){for(;E<p;)x=x<<8|$e(A,k),E+=8;E-=p,F.l=x>>E&(1<<p)-1,F.c=x,F.lc=E}const X=new Array(59);function ne(p){for(let E=0;E<=58;++E)X[E]=0;for(let E=0;E<65537;++E)X[p[E]]+=1;let x=0;for(let E=58;E>0;--E){const A=x+X[E]>>1;X[E]=x,x=A}for(let E=0;E<65537;++E){const A=p[E];A>0&&(p[E]=A|X[A]++<<6)}}function W(p,x,E,A,k,O){const V=x;let J=0,Q=0;for(;A<=k;A++){if(V.value-x.value>E)return!1;j(6,J,Q,p,V);const $=F.l;if(J=F.c,Q=F.lc,O[A]=$,$==63){if(V.value-x.value>E)throw new Error("Something wrong with hufUnpackEncTable");j(8,J,Q,p,V);let Y=F.l+6;if(J=F.c,Q=F.lc,A+Y>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)O[A++]=0;A--}else if($>=59){let Y=$-59+2;if(A+Y>k+1)throw new Error("Something wrong with hufUnpackEncTable");for(;Y--;)O[A++]=0;A--}}ne(O)}function ee(p){return p&63}function K(p){return p>>6}function de(p,x,E,A){for(;x<=E;x++){const k=K(p[x]),O=ee(p[x]);if(k>>O)throw new Error("Invalid table entry");if(O>14){const V=A[k>>O-14];if(V.len)throw new Error("Invalid table entry");if(V.lit++,V.p){const J=V.p;V.p=new Array(V.lit);for(let Q=0;Q<V.lit-1;++Q)V.p[Q]=J[Q]}else V.p=new Array(1);V.p[V.lit-1]=x}else if(O){let V=0;for(let J=1<<14-O;J>0;J--){const Q=A[(k<<14-O)+V];if(Q.len||Q.p)throw new Error("Invalid table entry");Q.len=O,Q.lit=x,V++}}}return!0}const U={c:0,lc:0};function xe(p,x,E,A){p=p<<8|$e(E,A),x+=8,U.c=p,U.lc=x}const Oe={c:0,lc:0};function We(p,x,E,A,k,O,V,J,Q){if(p==x){A<8&&(xe(E,A,k,O),E=U.c,A=U.lc),A-=8;let $=E>>A;if($=new Uint8Array([$])[0],J.value+$>Q)return!1;const Y=V[J.value-1];for(;$-- >0;)V[J.value++]=Y}else if(J.value<Q)V[J.value++]=p;else return!1;Oe.c=E,Oe.lc=A}function te(p){return p&65535}function oe(p){const x=te(p);return x>32767?x-65536:x}const he={a:0,b:0};function ge(p,x){const E=oe(p),k=oe(x),O=E+(k&1)+(k>>1),V=O,J=O-k;he.a=V,he.b=J}function Re(p,x){const E=te(p),A=te(x),k=E-(A>>1)&65535,O=A+k-32768&65535;he.a=O,he.b=k}function Ce(p,x,E,A,k,O,V){const J=V<16384,Q=E>k?k:E;let $=1,Y,ce;for(;$<=Q;)$<<=1;for($>>=1,Y=$,$>>=1;$>=1;){ce=0;const pe=ce+O*(k-Y),be=O*$,we=O*Y,ue=A*$,ae=A*Y;let Ne,ke,xt,en;for(;ce<=pe;ce+=we){let lt=ce;const mt=ce+A*(E-Y);for(;lt<=mt;lt+=ae){const rt=lt+ue,Jt=lt+be,jt=Jt+ue;J?(ge(p[lt+x],p[Jt+x]),Ne=he.a,xt=he.b,ge(p[rt+x],p[jt+x]),ke=he.a,en=he.b,ge(Ne,ke),p[lt+x]=he.a,p[rt+x]=he.b,ge(xt,en),p[Jt+x]=he.a,p[jt+x]=he.b):(Re(p[lt+x],p[Jt+x]),Ne=he.a,xt=he.b,Re(p[rt+x],p[jt+x]),ke=he.a,en=he.b,Re(Ne,ke),p[lt+x]=he.a,p[rt+x]=he.b,Re(xt,en),p[Jt+x]=he.a,p[jt+x]=he.b)}if(E&$){const rt=lt+be;J?ge(p[lt+x],p[rt+x]):Re(p[lt+x],p[rt+x]),Ne=he.a,p[rt+x]=he.b,p[lt+x]=Ne}}if(k&$){let lt=ce;const mt=ce+A*(E-Y);for(;lt<=mt;lt+=ae){const rt=lt+ue;J?ge(p[lt+x],p[rt+x]):Re(p[lt+x],p[rt+x]),Ne=he.a,p[rt+x]=he.b,p[lt+x]=Ne}}Y=$,$>>=1}return ce}function Qe(p,x,E,A,k,O,V,J,Q){let $=0,Y=0;const ce=V,pe=Math.trunc(A.value+(k+7)/8);for(;A.value<pe;)for(xe($,Y,E,A),$=U.c,Y=U.lc;Y>=14;){const we=$>>Y-14&16383,ue=x[we];if(ue.len)Y-=ue.len,We(ue.lit,O,$,Y,E,A,J,Q,ce),$=Oe.c,Y=Oe.lc;else{if(!ue.p)throw new Error("hufDecode issues");let ae;for(ae=0;ae<ue.lit;ae++){const Ne=ee(p[ue.p[ae]]);for(;Y<Ne&&A.value<pe;)xe($,Y,E,A),$=U.c,Y=U.lc;if(Y>=Ne&&K(p[ue.p[ae]])==($>>Y-Ne&(1<<Ne)-1)){Y-=Ne,We(ue.p[ae],O,$,Y,E,A,J,Q,ce),$=Oe.c,Y=Oe.lc;break}}if(ae==ue.lit)throw new Error("hufDecode issues")}}const be=8-k&7;for($>>=be,Y-=be;Y>0;){const we=x[$<<14-Y&16383];if(we.len)Y-=we.len,We(we.lit,O,$,Y,E,A,J,Q,ce),$=Oe.c,Y=Oe.lc;else throw new Error("hufDecode issues")}return!0}function qe(p,x,E,A,k,O){const V={value:0},J=E.value,Q=ve(x,E),$=ve(x,E);E.value+=4;const Y=ve(x,E);if(E.value+=4,Q<0||Q>=65537||$<0||$>=65537)throw new Error("Something wrong with HUF_ENCSIZE");const ce=new Array(65537),pe=new Array(16384);R(pe);const be=A-(E.value-J);if(W(p,E,be,Q,$,ce),Y>8*(A-(E.value-J)))throw new Error("Something wrong with hufUncompress");de(ce,Q,$,pe),Qe(ce,pe,p,E,Y,$,O,k,V)}function Ge(p,x,E){for(let A=0;A<E;++A)x[A]=p[x[A]]}function N(p){for(let x=1;x<p.length;x++){const E=p[x-1]+p[x]-128;p[x]=E}}function ft(p,x){let E=0,A=Math.floor((p.length+1)/2),k=0;const O=p.length-1;for(;!(k>O||(x[k++]=p[E++],k>O));)x[k++]=p[A++]}function Xe(p){let x=p.byteLength;const E=new Array;let A=0;const k=new DataView(p);for(;x>0;){const O=k.getInt8(A++);if(O<0){const V=-O;x-=V+1;for(let J=0;J<V;J++)E.push(k.getUint8(A++))}else{const V=O;x-=2;const J=k.getUint8(A++);for(let Q=0;Q<V+1;Q++)E.push(J)}}return E}function Ke(p,x,E,A,k,O){let V=new DataView(O.buffer);const J=E[p.idx[0]].width,Q=E[p.idx[0]].height,$=3,Y=Math.floor(J/8),ce=Math.ceil(J/8),pe=Math.ceil(Q/8),be=J-(ce-1)*8,we=Q-(pe-1)*8,ue={value:0},ae=new Array($),Ne=new Array($),ke=new Array($),xt=new Array($),en=new Array($);for(let mt=0;mt<$;++mt)en[mt]=x[p.idx[mt]],ae[mt]=mt<1?0:ae[mt-1]+ce*pe,Ne[mt]=new Float32Array(64),ke[mt]=new Uint16Array(64),xt[mt]=new Uint16Array(ce*64);for(let mt=0;mt<pe;++mt){let rt=8;mt==pe-1&&(rt=we);let Jt=8;for(let nt=0;nt<ce;++nt){nt==ce-1&&(Jt=be);for(let At=0;At<$;++At)ke[At].fill(0),ke[At][0]=k[ae[At]++],G(ue,A,ke[At]),it(ke[At],Ne[At]),He(Ne[At]);D(Ne);for(let At=0;At<$;++At)T(Ne[At],xt[At],nt*64)}let jt=0;for(let nt=0;nt<$;++nt){const At=E[p.idx[nt]].type;for(let bi=8*mt;bi<8*mt+rt;++bi){jt=en[nt][bi];for(let _r=0;_r<Y;++_r){const Li=_r*64+(bi&7)*8;V.setUint16(jt+0*2*At,xt[nt][Li+0],!0),V.setUint16(jt+1*2*At,xt[nt][Li+1],!0),V.setUint16(jt+2*2*At,xt[nt][Li+2],!0),V.setUint16(jt+3*2*At,xt[nt][Li+3],!0),V.setUint16(jt+4*2*At,xt[nt][Li+4],!0),V.setUint16(jt+5*2*At,xt[nt][Li+5],!0),V.setUint16(jt+6*2*At,xt[nt][Li+6],!0),V.setUint16(jt+7*2*At,xt[nt][Li+7],!0),jt+=8*2*At}}if(Y!=ce)for(let bi=8*mt;bi<8*mt+rt;++bi){const _r=en[nt][bi]+8*Y*2*At,Li=Y*64+(bi&7)*8;for(let No=0;No<Jt;++No)V.setUint16(_r+No*2*At,xt[nt][Li+No],!0)}}}const lt=new Uint16Array(J);V=new DataView(O.buffer);for(let mt=0;mt<$;++mt){E[p.idx[mt]].decoded=!0;const rt=E[p.idx[mt]].type;if(E[mt].type==2)for(let Jt=0;Jt<Q;++Jt){const jt=en[mt][Jt];for(let nt=0;nt<J;++nt)lt[nt]=V.getUint16(jt+nt*2*rt,!0);for(let nt=0;nt<J;++nt)V.setFloat32(jt+nt*2*rt,H(lt[nt]),!0)}}}function G(p,x,E){let A,k=1;for(;k<64;)A=x[p.value],A==65280?k=64:A>>8==255?k+=A&255:(E[k]=A,k++),p.value++}function it(p,x){x[0]=H(p[0]),x[1]=H(p[1]),x[2]=H(p[5]),x[3]=H(p[6]),x[4]=H(p[14]),x[5]=H(p[15]),x[6]=H(p[27]),x[7]=H(p[28]),x[8]=H(p[2]),x[9]=H(p[4]),x[10]=H(p[7]),x[11]=H(p[13]),x[12]=H(p[16]),x[13]=H(p[26]),x[14]=H(p[29]),x[15]=H(p[42]),x[16]=H(p[3]),x[17]=H(p[8]),x[18]=H(p[12]),x[19]=H(p[17]),x[20]=H(p[25]),x[21]=H(p[30]),x[22]=H(p[41]),x[23]=H(p[43]),x[24]=H(p[9]),x[25]=H(p[11]),x[26]=H(p[18]),x[27]=H(p[24]),x[28]=H(p[31]),x[29]=H(p[40]),x[30]=H(p[44]),x[31]=H(p[53]),x[32]=H(p[10]),x[33]=H(p[19]),x[34]=H(p[23]),x[35]=H(p[32]),x[36]=H(p[39]),x[37]=H(p[45]),x[38]=H(p[52]),x[39]=H(p[54]),x[40]=H(p[20]),x[41]=H(p[22]),x[42]=H(p[33]),x[43]=H(p[38]),x[44]=H(p[46]),x[45]=H(p[51]),x[46]=H(p[55]),x[47]=H(p[60]),x[48]=H(p[21]),x[49]=H(p[34]),x[50]=H(p[37]),x[51]=H(p[47]),x[52]=H(p[50]),x[53]=H(p[56]),x[54]=H(p[59]),x[55]=H(p[61]),x[56]=H(p[35]),x[57]=H(p[36]),x[58]=H(p[48]),x[59]=H(p[49]),x[60]=H(p[57]),x[61]=H(p[58]),x[62]=H(p[62]),x[63]=H(p[63])}function He(p){const x=.5*Math.cos(.7853975),E=.5*Math.cos(3.14159/16),A=.5*Math.cos(3.14159/8),k=.5*Math.cos(3*3.14159/16),O=.5*Math.cos(5*3.14159/16),V=.5*Math.cos(3*3.14159/8),J=.5*Math.cos(7*3.14159/16),Q=new Array(4),$=new Array(4),Y=new Array(4),ce=new Array(4);for(let pe=0;pe<8;++pe){const be=pe*8;Q[0]=A*p[be+2],Q[1]=V*p[be+2],Q[2]=A*p[be+6],Q[3]=V*p[be+6],$[0]=E*p[be+1]+k*p[be+3]+O*p[be+5]+J*p[be+7],$[1]=k*p[be+1]-J*p[be+3]-E*p[be+5]-O*p[be+7],$[2]=O*p[be+1]-E*p[be+3]+J*p[be+5]+k*p[be+7],$[3]=J*p[be+1]-O*p[be+3]+k*p[be+5]-E*p[be+7],Y[0]=x*(p[be+0]+p[be+4]),Y[3]=x*(p[be+0]-p[be+4]),Y[1]=Q[0]+Q[3],Y[2]=Q[1]-Q[2],ce[0]=Y[0]+Y[1],ce[1]=Y[3]+Y[2],ce[2]=Y[3]-Y[2],ce[3]=Y[0]-Y[1],p[be+0]=ce[0]+$[0],p[be+1]=ce[1]+$[1],p[be+2]=ce[2]+$[2],p[be+3]=ce[3]+$[3],p[be+4]=ce[3]-$[3],p[be+5]=ce[2]-$[2],p[be+6]=ce[1]-$[1],p[be+7]=ce[0]-$[0]}for(let pe=0;pe<8;++pe)Q[0]=A*p[16+pe],Q[1]=V*p[16+pe],Q[2]=A*p[48+pe],Q[3]=V*p[48+pe],$[0]=E*p[8+pe]+k*p[24+pe]+O*p[40+pe]+J*p[56+pe],$[1]=k*p[8+pe]-J*p[24+pe]-E*p[40+pe]-O*p[56+pe],$[2]=O*p[8+pe]-E*p[24+pe]+J*p[40+pe]+k*p[56+pe],$[3]=J*p[8+pe]-O*p[24+pe]+k*p[40+pe]-E*p[56+pe],Y[0]=x*(p[pe]+p[32+pe]),Y[3]=x*(p[pe]-p[32+pe]),Y[1]=Q[0]+Q[3],Y[2]=Q[1]-Q[2],ce[0]=Y[0]+Y[1],ce[1]=Y[3]+Y[2],ce[2]=Y[3]-Y[2],ce[3]=Y[0]-Y[1],p[0+pe]=ce[0]+$[0],p[8+pe]=ce[1]+$[1],p[16+pe]=ce[2]+$[2],p[24+pe]=ce[3]+$[3],p[32+pe]=ce[3]-$[3],p[40+pe]=ce[2]-$[2],p[48+pe]=ce[1]-$[1],p[56+pe]=ce[0]-$[0]}function D(p){for(let x=0;x<64;++x){const E=p[0][x],A=p[1][x],k=p[2][x];p[0][x]=E+1.5747*k,p[1][x]=E-.1873*A-.4682*k,p[2][x]=E+1.8556*A}}function T(p,x,E){for(let A=0;A<64;++A)x[E+A]=Jf.toHalfFloat(Z(p[A]))}function Z(p){return p<=1?Math.sign(p)*Math.pow(Math.abs(p),2.2):Math.sign(p)*Math.pow(B,Math.abs(p)-1)}function re(p){return new DataView(p.array.buffer,p.offset.value,p.size)}function fe(p){const x=p.viewer.buffer.slice(p.offset.value,p.offset.value+p.size),E=new Uint8Array(Xe(x)),A=new Uint8Array(E.length);return N(E),ft(E,A),new DataView(A.buffer)}function ie(p){const x=p.array.slice(p.offset.value,p.offset.value+p.size),E=lc(x),A=new Uint8Array(E.length);return N(E),ft(E,A),new DataView(A.buffer)}function Le(p){const x=p.viewer,E={value:p.offset.value},A=new Uint16Array(p.columns*p.lines*(p.inputChannels.length*p.type)),k=new Uint8Array(8192);let O=0;const V=new Array(p.inputChannels.length);for(let we=0,ue=p.inputChannels.length;we<ue;we++)V[we]={},V[we].start=O,V[we].end=V[we].start,V[we].nx=p.columns,V[we].ny=p.lines,V[we].size=p.type,O+=V[we].nx*V[we].ny*V[we].size;const J=se(x,E),Q=se(x,E);if(Q>=8192)throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");if(J<=Q)for(let we=0;we<Q-J+1;we++)k[we+J]=Be(x,E);const $=new Uint16Array(65536),Y=v(k,$),ce=ve(x,E);qe(p.array,x,E,ce,A,O);for(let we=0;we<p.inputChannels.length;++we){const ue=V[we];for(let ae=0;ae<V[we].size;++ae)Ce(A,ue.start+ae,ue.nx,ue.size,ue.ny,ue.nx*ue.size,Y)}Ge($,A,O);let pe=0;const be=new Uint8Array(A.buffer.byteLength);for(let we=0;we<p.lines;we++)for(let ue=0;ue<p.inputChannels.length;ue++){const ae=V[ue],Ne=ae.nx*ae.size,ke=new Uint8Array(A.buffer,ae.end*2,Ne*2);be.set(ke,pe),pe+=Ne*2,ae.end+=Ne}return new DataView(be.buffer)}function _e(p){const x=p.array.slice(p.offset.value,p.offset.value+p.size),E=lc(x),A=p.inputChannels.length*p.lines*p.columns*p.totalBytes,k=new ArrayBuffer(A),O=new DataView(k);let V=0,J=0;const Q=new Array(4);for(let $=0;$<p.lines;$++)for(let Y=0;Y<p.inputChannels.length;Y++){let ce=0;switch(p.inputChannels[Y].pixelType){case 1:Q[0]=V,Q[1]=Q[0]+p.columns,V=Q[1]+p.columns;for(let be=0;be<p.columns;++be){const we=E[Q[0]++]<<8|E[Q[1]++];ce+=we,O.setUint16(J,ce,!0),J+=2}break;case 2:Q[0]=V,Q[1]=Q[0]+p.columns,Q[2]=Q[1]+p.columns,V=Q[2]+p.columns;for(let be=0;be<p.columns;++be){const we=E[Q[0]++]<<24|E[Q[1]++]<<16|E[Q[2]++]<<8;ce+=we,O.setUint32(J,ce,!0),J+=4}break}}return O}function Me(p){const x=p.viewer,E={value:p.offset.value},A=new Uint8Array(p.columns*p.lines*(p.inputChannels.length*p.type*2)),k={version:Ye(x,E),unknownUncompressedSize:Ye(x,E),unknownCompressedSize:Ye(x,E),acCompressedSize:Ye(x,E),dcCompressedSize:Ye(x,E),rleCompressedSize:Ye(x,E),rleUncompressedSize:Ye(x,E),rleRawSize:Ye(x,E),totalAcUncompressedCount:Ye(x,E),totalDcUncompressedCount:Ye(x,E),acCompression:Ye(x,E)};if(k.version<2)throw new Error("EXRLoader.parse: "+St.compression+" version "+k.version+" is unsupported");const O=new Array;let V=se(x,E)-2;for(;V>0;){const ue=je(x.buffer,E),ae=Be(x,E),Ne=ae>>2&3,ke=(ae>>4)-1,xt=new Int8Array([ke])[0],en=Be(x,E);O.push({name:ue,index:xt,type:en,compression:Ne}),V-=ue.length+3}const J=St.channels,Q=new Array(p.inputChannels.length);for(let ue=0;ue<p.inputChannels.length;++ue){const ae=Q[ue]={},Ne=J[ue];ae.name=Ne.name,ae.compression=0,ae.decoded=!1,ae.type=Ne.pixelType,ae.pLinear=Ne.pLinear,ae.width=p.columns,ae.height=p.lines}const $={idx:new Array(3)};for(let ue=0;ue<p.inputChannels.length;++ue){const ae=Q[ue];for(let Ne=0;Ne<O.length;++Ne){const ke=O[Ne];ae.name==ke.name&&(ae.compression=ke.compression,ke.index>=0&&($.idx[ke.index]=ue),ae.offset=ue)}}let Y,ce,pe;if(k.acCompressedSize>0)switch(k.acCompression){case 0:Y=new Uint16Array(k.totalAcUncompressedCount),qe(p.array,x,E,k.acCompressedSize,Y,k.totalAcUncompressedCount);break;case 1:const ue=p.array.slice(E.value,E.value+k.totalAcUncompressedCount),ae=lc(ue);Y=new Uint16Array(ae.buffer),E.value+=k.totalAcUncompressedCount;break}if(k.dcCompressedSize>0){const ue={array:p.array,offset:E,size:k.dcCompressedSize};ce=new Uint16Array(ie(ue).buffer),E.value+=k.dcCompressedSize}if(k.rleRawSize>0){const ue=p.array.slice(E.value,E.value+k.rleCompressedSize),ae=lc(ue);pe=Xe(ae.buffer),E.value+=k.rleCompressedSize}let be=0;const we=new Array(Q.length);for(let ue=0;ue<we.length;++ue)we[ue]=new Array;for(let ue=0;ue<p.lines;++ue)for(let ae=0;ae<Q.length;++ae)we[ae].push(be),be+=Q[ae].width*p.type*2;Ke($,we,Q,Y,ce,A);for(let ue=0;ue<Q.length;++ue){const ae=Q[ue];if(!ae.decoded)switch(ae.compression){case 2:let Ne=0,ke=0;for(let xt=0;xt<p.lines;++xt){let en=we[ue][Ne];for(let lt=0;lt<ae.width;++lt){for(let mt=0;mt<2*ae.type;++mt)A[en++]=pe[ke+mt*ae.width*ae.height];ke++}Ne++}break;case 1:default:throw new Error("EXRLoader.parse: unsupported channel compression")}}return new DataView(A.buffer)}function je(p,x){const E=new Uint8Array(p);let A=0;for(;E[x.value+A]!=0;)A+=1;const k=new TextDecoder().decode(E.slice(x.value,x.value+A));return x.value=x.value+A+1,k}function me(p,x,E){const A=new TextDecoder().decode(new Uint8Array(p).slice(x.value,x.value+E));return x.value=x.value+E,A}function Ae(p,x){const E=Ie(p,x),A=ve(p,x);return[E,A]}function Pe(p,x){const E=ve(p,x),A=ve(p,x);return[E,A]}function Ie(p,x){const E=p.getInt32(x.value,!0);return x.value=x.value+4,E}function ve(p,x){const E=p.getUint32(x.value,!0);return x.value=x.value+4,E}function $e(p,x){const E=p[x.value];return x.value=x.value+1,E}function Be(p,x){const E=p.getUint8(x.value);return x.value=x.value+1,E}const Ye=function(p,x){let E;return"getBigInt64"in DataView.prototype?E=Number(p.getBigInt64(x.value,!0)):E=p.getUint32(x.value+4,!0)+Number(p.getUint32(x.value,!0)<<32),x.value+=8,E};function z(p,x){const E=p.getFloat32(x.value,!0);return x.value+=4,E}function le(p,x){return Jf.toHalfFloat(z(p,x))}function H(p){const x=(p&31744)>>10,E=p&1023;return(p>>15?-1:1)*(x?x===31?E?NaN:1/0:Math.pow(2,x-15)*(1+E/1024):6103515625e-14*(E/1024))}function se(p,x){const E=p.getUint16(x.value,!0);return x.value+=2,E}function ye(p,x){return H(se(p,x))}function Se(p,x,E,A){const k=E.value,O=[];for(;E.value<k+A-1;){const V=je(x,E),J=Ie(p,E),Q=Be(p,E);E.value+=3;const $=Ie(p,E),Y=Ie(p,E);O.push({name:V,pixelType:J,pLinear:Q,xSampling:$,ySampling:Y})}return E.value+=1,O}function et(p,x){const E=z(p,x),A=z(p,x),k=z(p,x),O=z(p,x),V=z(p,x),J=z(p,x),Q=z(p,x),$=z(p,x);return{redX:E,redY:A,greenX:k,greenY:O,blueX:V,blueY:J,whiteX:Q,whiteY:$}}function Ct(p,x){const E=["NO_COMPRESSION","RLE_COMPRESSION","ZIPS_COMPRESSION","ZIP_COMPRESSION","PIZ_COMPRESSION","PXR24_COMPRESSION","B44_COMPRESSION","B44A_COMPRESSION","DWAA_COMPRESSION","DWAB_COMPRESSION"],A=Be(p,x);return E[A]}function Ot(p,x){const E=Ie(p,x),A=Ie(p,x),k=Ie(p,x),O=Ie(p,x);return{xMin:E,yMin:A,xMax:k,yMax:O}}function ct(p,x){const E=["INCREASING_Y","DECREASING_Y","RANDOM_Y"],A=Be(p,x);return E[A]}function Fe(p,x){const E=["ENVMAP_LATLONG","ENVMAP_CUBE"],A=Be(p,x);return E[A]}function Ue(p,x){const E=["ONE_LEVEL","MIPMAP_LEVELS","RIPMAP_LEVELS"],A=["ROUND_DOWN","ROUND_UP"],k=ve(p,x),O=ve(p,x),V=Be(p,x);return{xSize:k,ySize:O,levelMode:E[V&15],roundingMode:A[V>>4]}}function _t(p,x){const E=z(p,x),A=z(p,x);return[E,A]}function Ee(p,x){const E=z(p,x),A=z(p,x),k=z(p,x);return[E,A,k]}function Ve(p,x,E,A,k){if(A==="string"||A==="stringvector"||A==="iccProfile")return me(x,E,k);if(A==="chlist")return Se(p,x,E,k);if(A==="chromaticities")return et(p,E);if(A==="compression")return Ct(p,E);if(A==="box2i")return Ot(p,E);if(A==="envmap")return Fe(p,E);if(A==="tiledesc")return Ue(p,E);if(A==="lineOrder")return ct(p,E);if(A==="float")return z(p,E);if(A==="v2f")return _t(p,E);if(A==="v3f")return Ee(p,E);if(A==="int")return Ie(p,E);if(A==="rational")return Ae(p,E);if(A==="timecode")return Pe(p,E);if(A==="preview")return E.value+=k,"skipped";E.value+=k}function ze(p,x){const E=Math.log2(p);return x=="ROUND_DOWN"?Math.floor(E):Math.ceil(E)}function Ze(p,x,E){let A=0;switch(p.levelMode){case"ONE_LEVEL":A=1;break;case"MIPMAP_LEVELS":A=ze(Math.max(x,E),p.roundingMode)+1;break;case"RIPMAP_LEVELS":throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")}return A}function zt(p,x,E,A){const k=new Array(p);for(let O=0;O<p;O++){const V=1<<O;let J=x/V|0;A=="ROUND_UP"&&J*V<x&&(J+=1);const Q=Math.max(J,1);k[O]=(Q+E-1)/E|0}return k}function tt(){const p=this,x=p.offset,E={value:0};for(let A=0;A<p.tileCount;A++){const k=Ie(p.viewer,x),O=Ie(p.viewer,x);x.value+=8,p.size=ve(p.viewer,x);const V=k*p.blockWidth,J=O*p.blockHeight;p.columns=V+p.blockWidth>p.width?p.width-V:p.blockWidth,p.lines=J+p.blockHeight>p.height?p.height-J:p.blockHeight;const Q=p.columns*p.totalBytes,Y=p.size<p.lines*Q?p.uncompress(p):re(p);x.value+=p.size;for(let ce=0;ce<p.lines;ce++){const pe=ce*p.columns*p.totalBytes;for(let be=0;be<p.inputChannels.length;be++){const we=St.channels[be].name,ue=p.channelByteOffsets[we]*p.columns,ae=p.decodeChannels[we];if(ae===void 0)continue;E.value=pe+ue;const Ne=(p.height-(1+J+ce))*p.outLineWidth;for(let ke=0;ke<p.columns;ke++){const xt=Ne+(ke+V)*p.outputChannels+ae;p.byteArray[xt]=p.getter(Y,E)}}}}}function Ft(){const p=this,x=p.offset,E={value:0};for(let A=0;A<p.height/p.blockHeight;A++){const k=Ie(p.viewer,x)-St.dataWindow.yMin;p.size=ve(p.viewer,x),p.lines=k+p.blockHeight>p.height?p.height-k:p.blockHeight;const O=p.columns*p.totalBytes,J=p.size<p.lines*O?p.uncompress(p):re(p);x.value+=p.size;for(let Q=0;Q<p.blockHeight;Q++){const $=A*p.blockHeight,Y=Q+p.scanOrder($);if(Y>=p.height)continue;const ce=Q*O,pe=(p.height-1-Y)*p.outLineWidth;for(let be=0;be<p.inputChannels.length;be++){const we=St.channels[be].name,ue=p.channelByteOffsets[we]*p.columns,ae=p.decodeChannels[we];if(ae!==void 0){E.value=ce+ue;for(let Ne=0;Ne<p.columns;Ne++){const ke=pe+Ne*p.outputChannels+ae;p.byteArray[ke]=p.getter(J,E)}}}}}}function Vt(p,x,E){const A={};if(p.getUint32(0,!0)!=20000630)throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");A.version=p.getUint8(4);const k=p.getUint8(5);A.spec={singleTile:!!(k&2),longName:!!(k&4),deepFormat:!!(k&8),multiPart:!!(k&16)},E.value=8;let O=!0;for(;O;){const V=je(x,E);if(V==0)O=!1;else{const J=je(x,E),Q=ve(p,E),$=Ve(p,x,E,J,Q);$===void 0?console.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${J}'.`):A[V]=$}}if(k&-7)throw console.error("THREE.EXRHeader:",A),new Error("THREE.EXRLoader: Provided file is currently unsupported.");return A}function It(p,x,E,A,k){const O={size:0,viewer:x,array:E,offset:A,width:p.dataWindow.xMax-p.dataWindow.xMin+1,height:p.dataWindow.yMax-p.dataWindow.yMin+1,inputChannels:p.channels,channelByteOffsets:{},scanOrder:null,totalBytes:null,columns:null,lines:null,type:null,uncompress:null,getter:null,format:null,colorSpace:sn};switch(p.compression){case"NO_COMPRESSION":O.blockHeight=1,O.uncompress=re;break;case"RLE_COMPRESSION":O.blockHeight=1,O.uncompress=fe;break;case"ZIPS_COMPRESSION":O.blockHeight=1,O.uncompress=ie;break;case"ZIP_COMPRESSION":O.blockHeight=16,O.uncompress=ie;break;case"PIZ_COMPRESSION":O.blockHeight=32,O.uncompress=Le;break;case"PXR24_COMPRESSION":O.blockHeight=16,O.uncompress=_e;break;case"DWAA_COMPRESSION":O.blockHeight=32,O.uncompress=Me;break;case"DWAB_COMPRESSION":O.blockHeight=256,O.uncompress=Me;break;default:throw new Error("EXRLoader.parse: "+p.compression+" is unsupported")}const V={};for(const Y of p.channels)switch(Y.name){case"Y":case"R":case"G":case"B":case"A":V[Y.name]=!0,O.type=Y.pixelType}let J=!1;if(V.R&&V.G&&V.B)J=!V.A,O.outputChannels=4,O.decodeChannels={R:0,G:1,B:2,A:3};else if(V.Y)O.outputChannels=1,O.decodeChannels={Y:0};else throw new Error("EXRLoader.parse: file contains unsupported data channels.");if(O.type==1)switch(k){case zn:O.getter=ye;break;case or:O.getter=se;break}else if(O.type==2)switch(k){case zn:O.getter=z;break;case or:O.getter=le}else throw new Error("EXRLoader.parse: unsupported pixelType "+O.type+" for "+p.compression+".");O.columns=O.width;const Q=O.width*O.height*O.outputChannels;switch(k){case zn:O.byteArray=new Float32Array(Q),J&&O.byteArray.fill(1,0,Q);break;case or:O.byteArray=new Uint16Array(Q),J&&O.byteArray.fill(15360,0,Q);break;default:console.error("THREE.EXRLoader: unsupported type: ",k);break}let $=0;for(const Y of p.channels)O.decodeChannels[Y.name]!==void 0&&(O.channelByteOffsets[Y.name]=$),$+=Y.pixelType*2;if(O.totalBytes=$,O.outLineWidth=O.width*O.outputChannels,p.lineOrder==="INCREASING_Y"?O.scanOrder=Y=>Y:O.scanOrder=Y=>O.height-1-Y,O.outputChannels==4?(O.format=ti,O.colorSpace=sn):(O.format=sl,O.colorSpace=rr),p.spec.singleTile){O.blockHeight=p.tiles.ySize,O.blockWidth=p.tiles.xSize;const Y=Ze(p.tiles,O.width,O.height),ce=zt(Y,O.width,p.tiles.xSize,p.tiles.roundingMode),pe=zt(Y,O.height,p.tiles.ySize,p.tiles.roundingMode);O.tileCount=ce[0]*pe[0];for(let be=0;be<Y;be++)for(let we=0;we<pe[be];we++)for(let ue=0;ue<ce[be];ue++)Ye(x,A);O.decode=tt.bind(O)}else{O.blockWidth=O.width;const Y=Math.ceil(O.height/O.blockHeight);for(let ce=0;ce<Y;ce++)Ye(x,A);O.decode=Ft.bind(O)}return O}const wt={value:0},Et=new DataView(e),wn=new Uint8Array(e),St=Vt(Et,e,wt),C=It(St,Et,wn,wt,this.type);return C.decode(),{header:St,width:C.width,height:C.height,data:C.byteArray,format:C.format,colorSpace:C.colorSpace,type:this.type}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(a,o){a.colorSpace=o.colorSpace,a.minFilter=pn,a.magFilter=pn,a.generateMipmaps=!1,a.flipY=!1,t&&t(a,o)}return super.load(e,r,n,i)}}let aE=class extends Qh{constructor(){super(),this.experience=new Vr,this.renderer=this.experience.renderer.instance,this.setLoaders(),this.toLoad=0,this.loaded=0,this.items={}}setLoaders(){this.loaders=[],this.loaders.push({extensions:["jpg","png","webp"],action:i=>{const r=new Image;r.addEventListener("load",()=>{this.fileLoadEnd(i,r)}),r.addEventListener("error",()=>{this.fileLoadEnd(i,r)}),r.src=i.source}});const e=new HM;e.setDecoderPath(new URL("draco/",import.meta.url).href);const t=new aM;t.setDRACOLoader(e),t.setMeshoptDecoder(VM),this.loaders.push({extensions:["glb","gltf"],action:i=>{t.load(i.source,r=>{this.fileLoadEnd(i,r)})}});const n=new sE;this.loaders.push({extensions:["exr"],action:i=>{n.load(i.source,r=>{this.fileLoadEnd(i,r)})}})}load(e=[]){for(const t of e){this.toLoad++;const n=t.source.match(/\.([a-z]+)$/);if(typeof n[1]<"u"){const i=n[1],r=this.loaders.find(a=>a.extensions.find(o=>o===i));r?r.action(t):console.warn(`Cannot found loader for ${t}`)}else console.warn(`Cannot found extension of ${t}`)}}fileLoadEnd(e,t){this.loaded++,this.items[e.name]=t,this.trigger("fileEnd",[e,t]),this.loaded===this.toLoad&&this.trigger("end")}};class oE extends Qh{constructor(e){super(),this.items={},this.loader=new aE({renderer:this.renderer}),this.groups={},this.groups.assets=[...e],this.groups.loaded=[],this.groups.current=null,this.loadNextGroup(),this.loader.on("fileEnd",(t,n)=>{let i=n;t.type==="texture"&&(i instanceof Zt||(i=new Zt(n)),i.needsUpdate=!0,t.colorSpace==="srgb"&&(i.colorSpace=Yt)),this.items[t.name]=i,this.groups.current.loaded++,this.trigger("progress",[this.groups.current,t,i])}),this.loader.on("end",()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),this.groups.assets.length>0?this.loadNextGroup():this.trigger("end")})}loadNextGroup(){if(this.groups.current=this.groups.assets.shift(),this.groups.current.toLoad=this.groups.current.items.length,this.groups.current.loaded=0,this.groups.current.toLoad===0){queueMicrotask(()=>{this.groups.loaded.push(this.groups.current),this.trigger("groupEnd",[this.groups.current]),this.groups.assets.length>0?this.loadNextGroup():this.trigger("end")});return}this.loader.load(this.groups.current.items)}destroy(){for(const e in this.items){const t=this.items[e];t instanceof Zt&&t.dispose()}}}class cE{constructor(e={}){this.experience=new Vr,this.config=this.experience.config,this.debug=this.experience.debug,this.stats=this.experience.stats,this.scene=this.experience.scene,this.camera=this.experience.camera,this.debug&&(this.debugFolder=this.debug.addFolder("renderer")),this.setInstance()}setInstance(){var e;this.clearColor=((e=this.experience.sceneConfig)==null?void 0:e.clearColor)??"#010101",this.instance=new vS({alpha:!1,antialias:!0,powerPreference:"high-performance"}),this.instance.shadowMap.enabled=!0,this.instance.shadowMap.type=Ip,this.instance.shadowMap.autoUpdate=!1,this.instance.shadowMap.needsUpdate=!0,this.instance.domElement.style.position="absolute",this.instance.domElement.style.top=0,this.instance.domElement.style.left=0,this.instance.domElement.style.width="100%",this.instance.domElement.style.height="100%",this.instance.setClearColor(this.clearColor,1),this.instance.setSize(this.config.width,this.config.height),this.instance.setPixelRatio(this.config.pixelRatio),this.instance.outputColorSpace=Yt,this.instance.toneMapping=zp,this.instance.toneMappingExposure=1,this.context=this.instance.getContext(),this.stats&&this.stats.setRenderPanel(this.context),this.debug&&(this.debugFolder.addColor(this,"clearColor").onChange(()=>{this.instance.setClearColor(this.clearColor)}),this.debugFolder.add(this.instance,"toneMapping",{NoToneMapping:hr,LinearToneMapping:Np,ReinhardToneMapping:Op,CineonToneMapping:Fp,ACESFilmicToneMapping:kp,AgXToneMapping:Bp}).onChange(()=>{this.scene.traverse(t=>{t instanceof bt&&(t.material.needsUpdate=!0)})}),this.debugFolder.add(this.instance,"toneMappingExposure").min(0).max(10))}resize(){this.instance.setSize(this.config.width,this.config.height),this.instance.setPixelRatio(this.config.pixelRatio)}update(){this.stats&&this.stats.beforeRender(),this.instance.render(this.scene,this.camera.instance),this.stats&&this.stats.afterRender()}destroy(){this.instance.renderLists.dispose(),this.instance.dispose()}}class lE{constructor(e){this.experience=new Vr,this.config=this.experience.config,this.targetElement=this.experience.targetElement,this.scene=this.experience.scene,this.setInstance(),this.setModes()}setInstance(){this.instance=new Un(25,this.config.width/this.config.height,.1,150),this.instance.rotation.reorder("YXZ"),this.scene.add(this.instance)}setModes(){var t;this.modes={},this.modes.default={instance:this.instance.clone()},this.modes.default.instance.rotation.reorder("YXZ");const e=(t=this.experience.debugTools)==null?void 0:t.OrbitControls;this.config.debug&&e&&(this.modes.debug={instance:this.instance.clone()},this.modes.debug.instance.rotation.reorder("YXZ"),this.modes.debug.instance.position.set(5,5,5),this.modes.debug.orbitControls=new e(this.modes.debug.instance,this.targetElement),this.modes.debug.orbitControls.screenSpacePanning=!0,this.modes.debug.orbitControls.zoomSpeed=.25,this.modes.debug.orbitControls.enableDamping=!0,this.modes.debug.orbitControls.update()),this.mode=this.modes.debug?"debug":"default"}resize(){const e=this.config.width/this.config.height;this.instance.aspect=e,this.instance.updateProjectionMatrix();for(const t of Object.values(this.modes))t.instance.aspect=e,t.instance.updateProjectionMatrix()}update(){var e;(e=this.modes.debug)==null||e.orbitControls.update(),this.instance.position.copy(this.modes[this.mode].instance.position),this.instance.quaternion.copy(this.modes[this.mode].instance.quaternion),this.instance.updateMatrixWorld()}destroy(){var e;(e=this.modes.debug)==null||e.orbitControls.dispose()}}class uE extends _m{constructor(){super();const e=new ws;e.deleteAttribute("uv");const t=new Ti({side:Fn}),n=new Ti,i=new Em(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new bt(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const a=new bt(e,n);a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),this.add(a);const o=new bt(e,n);o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),this.add(o);const c=new bt(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new bt(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new bt(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new bt(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const f=new bt(e,Vs(50));f.position.set(-16.116,14.37,8.208),f.scale.set(.1,2.428,2.739),this.add(f);const d=new bt(e,Vs(50));d.position.set(-16.109,18.021,-8.207),d.scale.set(.1,2.425,2.751),this.add(d);const _=new bt(e,Vs(17));_.position.set(14.904,12.198,-1.832),_.scale.set(.15,4.265,6.331),this.add(_);const b=new bt(e,Vs(43));b.position.set(-.462,8.89,14.52),b.scale.set(4.38,5.441,.088),this.add(b);const m=new bt(e,Vs(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const g=new bt(e,Vs(100));g.position.set(0,20,0),g.scale.set(1,.1,1),this.add(g)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Vs(s){const e=new Qn;return e.color.setScalar(s),e}const wr=[0,16,32,48,64];class hE{constructor(e){this.experience=new Vr,this.config=this.experience.config,this.scene=this.experience.scene,this.resources=this.experience.resources,this.sceneConfig=this.experience.sceneConfig,this.colors=Object.assign({ground:"#f4f7fb",surface:"#f8f9ff",teal:"#003d5e",tealDeep:"#005581",ink:"#0b1c30",accent:"#f0aa10"},this.sceneConfig.colors),this.beats=this.sceneConfig.beats??[{id:"frame-index-01",from:0,to:.184},{id:"frame-index-02",from:.184,to:.466},{id:"frame-index-03",from:.466,to:.65},{id:"frame-index-04",from:.65,to:.825},{id:"frame-index-07",from:.825,to:1}],this.beatCams=[{a:{pos:[-.35,1.2,7.4],tgt:[.64,1.02,0]},s:{pos:[.5,1.08,5.8],tgt:[.75,.92,0]},settle:.3,depart:.62},{a:{pos:[14.3,1.1,7],tgt:[15.4,.78,0]},s:{pos:[16,1,5.6],tgt:[16,.62,0]},settle:.55,depart:.88},{a:{pos:[29.2,1.35,8.6],tgt:[31.6,.75,-.3]},s:{pos:[30.4,1.25,7.6],tgt:[31.9,.7,-.4]},settle:.3,depart:.82},{a:{pos:[48,1.05,7.8],tgt:[48,.9,0]},s:{pos:[48,1.05,7.5],tgt:[48,.88,0]},settle:.25,depart:.84},{a:{pos:[55,1.15,7.8],tgt:[55.8,.95,-.4]},s:{pos:[64,1.08,6.2],tgt:[64,.85,-.5]},settle:.22,depart:1.01}],this.disposables={geometries:[],materials:[],textures:[]},this.trackedModels=new Set,this.camPos=new q,this.camTgt=new q,this.tmp=new q,this.resources.on("groupEnd",t=>{t.name==="base"&&this.build()})}geo(e){return this.disposables.geometries.push(e),e}mat(e){return this.disposables.materials.push(e),e}box(e,t,n,i,r,a,o,c){const l=new bt(this.geo(new ws(e,t,n)),i);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,(c??this.scene).add(l),l}cylinder(e,t,n,i,r,a,o,c){const l=new bt(this.geo(new Yh(e,t,n,24)),i);return l.position.set(r,a,o),l.castShadow=!0,l.receiveShadow=!0,(c??this.scene).add(l),l}brassFeet(e,t,n,i,r){const o=n/2-.03,c=i/2-.03;for(const[l,u]of[[-o,-c],[o,-c],[-o,c],[o,c]])this.cylinder(.022,.03,.06,this.brass,e+l,.03,t+u,r)}reflect(e){const t=new bt(e.geometry,this.reflection);return t.position.copy(e.position),t.position.y=-e.position.y,t.scale.set(1,-1,1),t.castShadow=!1,t.receiveShadow=!1,this.scene.add(t),t}placeModel(e,{axis:t,size:n,x:i,y:r=0,z:a,rotY:o=0}){var d;const c=(d=this.resources.items[e])==null?void 0:d.scene;if(!c)return null;this.trackedModels.has(e)||(this.trackedModels.add(e),c.traverse(_=>{if(_.isMesh){this.disposables.geometries.push(_.geometry);for(const b of Array.isArray(_.material)?_.material:[_.material])this.disposables.materials.push(b),b.map&&this.disposables.textures.push(b.map)}}));const l=c.clone(),u=new Xi().setFromObject(l),h=u.getSize(new q),f=n/h[t];return l.scale.setScalar(f),l.position.set(i,r-u.min.y*f,a),l.rotation.y=o,l.traverse(_=>{_.isMesh&&(_.castShadow=!0,_.receiveShadow=!0)}),this.scene.add(l),l}reflectModel(e){const t=e.clone();return t.traverse(n=>{n.isMesh&&(n.material=this.reflection,n.castShadow=!1,n.receiveShadow=!1)}),t.scale.y*=-1,t.position.y*=-1,this.scene.add(t),t}radialGlowTexture(){if(this._radialGlow)return this._radialGlow;const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d"),n=t.createRadialGradient(128,128,0,128,128,128);return n.addColorStop(0,"rgba(255,255,255,0.9)"),n.addColorStop(.4,"rgba(255,255,255,0.45)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,256,256),this._radialGlow=new zd(e),this._radialGlow.colorSpace=Yt,this.disposables.textures.push(this._radialGlow),this._radialGlow}skylightPool(e,t){const n=new bt(this.geo(new Ui(t*2,t*2)),this.mat(new Qn({map:this.radialGlowTexture(),transparent:!0,opacity:.5,depthWrite:!1})));n.rotation.x=-Math.PI/2,n.position.set(e,.006,.4),this.scene.add(n)}build(){this.setEnvironment(),this.setMaterials(),this.setGallery(),this.setLights(),this.setVignette01(),this.setVignette02(),this.setVignette03(),this.setVignette04(),this.setVignette07(),this.scene.traverse(e=>{e.isMesh&&(e.updateMatrix(),e.matrixAutoUpdate=!1)}),this.built=!0,this.experience.needsRender=!0,this.experience.renderer.instance.shadowMap.needsUpdate=!0}setEnvironment(){const e=this.experience.renderer.instance,t=new eh(e),n=this.resources.items.environment;n?(this.envMap=t.fromEquirectangular(n).texture,n.dispose(),this.scene.environmentIntensity=this.sceneConfig.environmentIntensity??.45):(this.envMap=t.fromScene(new uE,.04).texture,this.scene.environmentIntensity=this.sceneConfig.environmentIntensity??.25),t.dispose(),this.envBase=this.scene.environmentIntensity,this.disposables.textures.push(this.envMap),this.scene.environment=this.envMap,this.scene.fog=new Vh(this.colors.ground,11,30)}setMaterials(){this.matteBlack=this.mat(new Ti({color:"#17191d",roughness:.48,metalness:.15})),this.blackDetail=this.mat(new Ti({color:"#0d0e11",roughness:.6,metalness:.1})),this.brass=this.mat(new Ti({color:"#b98f47",roughness:.3,metalness:.95})),this.plinth=this.mat(new Pi({color:"#e8edf4",roughness:.32,metalness:0,clearcoat:.6,clearcoatRoughness:.22})),this.plinth.onBeforeCompile=e=>{e.vertexShader=e.vertexShader.replace("#include <common>",`#include <common>
varying float vPlinthY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vPlinthY = (modelMatrix * vec4(transformed, 1.0)).y;`),e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
varying float vPlinthY;`).replace("#include <color_fragment>",`#include <color_fragment>
{
	float plinthH = smoothstep(0.0, 0.55, vPlinthY);
	diffuseColor.rgb *= mix(0.82, 1.06, plinthH);
}`)},this.glove=this.mat(new Ti({color:"#f5f2ea",roughness:.95,metalness:0})),this.reflection=this.mat(new Qn({color:"#3a4250",transparent:!0,opacity:.16,depthWrite:!1,side:wi}))}setGallery(){const e=new bt(this.geo(new Ui(120,32)),this.mat(new Ti({color:"#e2e8f1",roughness:.56,metalness:0,envMapIntensity:.22})));e.rotation.x=-Math.PI/2,e.position.set(32,0,2),e.receiveShadow=!0,this.scene.add(e);const t=this.mat(new Ti({color:"#f4f7fb",roughness:1})),n=new Je("#e6ebf3");t.onBeforeCompile=u=>{u.uniforms.uCoveColor={value:n},u.vertexShader=u.vertexShader.replace("#include <common>",`#include <common>
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
}`)};const i=new bt(this.geo(new Ui(120,12)),t);for(const u of wr){const h=new bt(this.geo(new Ui(8.5,4)),this.mat(new Qn({map:this.radialGlowTexture(),transparent:!0,opacity:u===wr[4]?.4:.28,depthWrite:!1})));h.position.set(u,3.1,-4.42),this.scene.add(h)}i.position.set(32,6,-4.5),i.receiveShadow=!0,this.scene.add(i);const r=document.createElement("canvas");r.width=1,r.height=128;const a=r.getContext("2d"),o=a.createLinearGradient(0,128,0,0);o.addColorStop(0,"rgba(255,255,255,0.6)"),o.addColorStop(.35,"rgba(255,255,255,0.22)"),o.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=o,a.fillRect(0,0,1,128);const c=new zd(r);c.colorSpace=Yt,this.disposables.textures.push(c);const l=new bt(this.geo(new Ui(120,1.1)),this.mat(new Qn({map:c,transparent:!0,opacity:.4,depthWrite:!1})));l.position.set(32,.55,-4.45),this.scene.add(l);for(const u of wr)this.skylightPool(u,2.6)}setLights(){this.hemiBase=.65,this.hemi=new XS("#f4f7fb","#c5d1e0",this.hemiBase),this.scene.add(this.hemi),this.fillBase=.95,this.fill=new Tm("#f4f7fb",this.fillBase),this.fill.position.set(0,4,12),this.fill.target.position.set(0,3.2,-4.5),this.scene.add(this.fill),this.scene.add(this.fill.target),this.lightTrims=[{key:1,fill:1,env:1,hemi:1,vig:1},{key:1,fill:1,env:1,hemi:1,vig:1},{key:1,fill:1,env:1,hemi:1,vig:1},{key:1,fill:1,env:1,hemi:1,vig:1},{key:.9,fill:.22,env:.3,hemi:.55,vig:2.6}],this.keyBase=2.1,this.key=new Mm("#fff8ee",this.keyBase,0,.36,1,0),this.key.position.set(0,9,2.5),this.key.target.position.set(0,0,0),this.key.castShadow=!0,this.key.shadow.mapSize.set(1024,1024),this.key.shadow.radius=8,this.key.shadow.bias=-2e-4,this.key.shadow.normalBias=.03,this.key.shadow.camera.near=.5,this.key.shadow.camera.far=20,this.scene.add(this.key),this.scene.add(this.key.target)}setVignette01(){const e=wr[0]+1.6,t=this.placeModel("floorstanding-loudspeaker",{axis:"y",size:1.9,x:e,z:.4,rotY:-.42});if(t){this.reflectModel(t);return}const n=this.box(.5,1.7,.6,this.matteBlack,e,.9,0);this.brassFeet(e,0,.5,.6),this.cylinder(.12,.12,.028,this.blackDetail,e,1.42,.31).rotation.x=Math.PI/2,this.cylinder(.16,.16,.028,this.blackDetail,e,.92,.31).rotation.x=Math.PI/2,this.cylinder(.16,.16,.028,this.blackDetail,e,.5,.31).rotation.x=Math.PI/2,this.reflect(n)}setVignette02(){const e=wr[1],t=this.placeModel("turntable",{axis:"x",size:1,x:e-1.05,z:0});if(t)this.reflectModel(t);else{const r=this.box(.8,.14,.6,this.matteBlack,e-1.05,.07,0);this.cylinder(.26,.26,.05,this.blackDetail,e-1.6,.165,0),this.cylinder(.012,.012,.08,this.brass,e-1.6,.21,0),this.reflect(r)}const n=this.placeModel("integrated-amplifier",{axis:"x",size:.8,x:e,z:0});if(n)this.reflectModel(n);else{const r=this.box(.8,.31,.6,this.matteBlack,e,.155,0),a=this.cylinder(.045,.045,.04,this.brass,e-.2,.18,.31);a.rotation.x=Math.PI/2;const o=this.cylinder(.045,.045,.04,this.brass,e+.2,.18,.31);o.rotation.x=Math.PI/2,this.reflect(r)}const i=this.placeModel("cd-player",{axis:"x",size:.8,x:e+1.05,z:0});if(i)this.reflectModel(i);else{const r=this.box(.8,.2,.6,this.matteBlack,e+1.05,.1,0);this.cylinder(.06,.06,.014,this.brass,e+1.05,.21,.14),this.reflect(r)}this.goldAxisMat=this.mat(new Qn({color:this.colors.accent,transparent:!0,opacity:0})),this.goldAxis=new bt(this.geo(new Ui(3.1,.022)),this.goldAxisMat),this.goldAxis.rotation.x=-Math.PI/2,this.goldAxis.position.set(e,.012,.5),this.scene.add(this.goldAxis)}setVignette03(){const e=wr[2],t=[[e-1.7,.8],[e-.1,.1],[e+1.5,-.6]];for(const[l,u]of t)this.box(.9,.5,.9,this.plinth,l,.25,u);const[n,i]=t[0];this.placeModel("turntable",{axis:"x",size:.88,x:n,y:.5,z:i})||(this.box(.66,.1,.5,this.matteBlack,n,.55,i),this.cylinder(.2,.2,.04,this.blackDetail,n,.62,i),this.cylinder(.01,.01,.06,this.brass,n,.66,i));const[r,a]=t[1];this.placeModel("integrated-amplifier",{axis:"x",size:.66,x:r,y:.5,z:a})||(this.box(.66,.24,.5,this.matteBlack,r,.62,a),this.cylinder(.04,.04,.035,this.brass,r+.16,.64,a+.26).rotation.x=Math.PI/2);const[o,c]=t[2];this.placeModel("cd-player",{axis:"x",size:.66,x:o,y:.5,z:c})||(this.box(.56,.16,.46,this.matteBlack,o,.58,c),this.cylinder(.03,.03,.02,this.brass,o+.15,.6,c+.24).rotation.x=Math.PI/2)}setVignette04(){const e=wr[3];this.box(2.2,.06,.9,this.plinth,e,.72,0);for(const[r,a]of[[-1,-.38],[1,-.38],[-1,.38],[1,.38]])this.box(.06,.72,.06,this.matteBlack,e+r,.36,a);this.placeModel("turntable",{axis:"x",size:.82,x:e-.05,y:.75,z:0})||(this.box(.82,.2,.56,this.matteBlack,e-.05,.85,0),this.cylinder(.045,.045,.035,this.brass,e+.2,.88,.29).rotation.x=Math.PI/2);const t=this.box(.16,.02,.08,this.glove,e+.55,.765,.12);t.rotation.y=.4;const n=this.box(.16,.02,.08,this.glove,e+.68,.765,-.02);n.rotation.y=-.25,this.cylinder(.045,.055,.07,this.brass,e+.95,.79,.1);const i=new lr;i.position.set(e+1.35,0,1),i.rotation.y=-.5,this.scene.add(i),this.box(.46,.05,.44,this.matteBlack,0,.45,0,i),this.box(.46,.5,.05,this.matteBlack,0,.72,-.2,i);for(const[r,a]of[[-.19,-.18],[.19,-.18],[-.19,.18],[.19,.18]])this.box(.04,.45,.04,this.matteBlack,r,.22,a,i)}setVignette07(){const e=wr[4];for(const n of[-1.3,1.3]){const i=n<0?.3:-.3,r=this.placeModel("floorstanding-loudspeaker",{axis:"y",size:1.55,x:e+n,z:-.6,rotY:i});if(r){this.reflectModel(r);continue}const a=this.box(.46,1.55,.56,this.matteBlack,e+n,.85,-.6);this.brassFeet(e+n,-.6,.46,.56),this.cylinder(.12,.12,.026,this.blackDetail,e+n,1.32,-.31).rotation.x=Math.PI/2,this.cylinder(.15,.15,.026,this.blackDetail,e+n,.66,-.31).rotation.x=Math.PI/2,this.reflect(a)}const t=this.placeModel("low-listening-chair",{axis:"x",size:.6,x:e,z:2.1,rotY:Math.PI});if(t){const n=new Je("#cdd6e2");t.traverse(i=>{if(i.isMesh)for(const r of Array.isArray(i.material)?i.material:[i.material])r.emissive=n.clone(),r.emissiveIntensity=.16})}else{const n=new lr;n.position.set(e,0,2.1),n.rotation.y=Math.PI,this.scene.add(n),this.box(.44,.05,.42,this.matteBlack,0,.3,0,n),this.box(.44,.3,.05,this.matteBlack,0,.47,-.19,n);for(const[i,r]of[[-.18,-.17],[.18,-.17],[-.18,.17],[.18,.17]])this.box(.035,.3,.035,this.matteBlack,i,.15,r,n)}}ramp(e,t,n){const i=Math.min(1,Math.max(0,(e-t)/(n-t)));return i*i*(3-2*i)}updateCamera(e){var f;let t=this.beats.length-1;for(let d=0;d<this.beats.length;d++)if(e<=this.beats[d].to){t=d;break}const n=this.beats[t],i=this.beatCams[t],r=Math.max(n.to-n.from,1e-6),a=Math.min(1,Math.max(0,(e-n.from)/r)),o=((f=this.experience.sceneState.beatScales)==null?void 0:f[t])||1,c=a/o,l=i.a,u=i.s;if(c<=i.settle){const d=this.ramp(c,0,i.settle);this.camPos.set(...l.pos).lerp(this.tmp.set(...u.pos),d),this.camTgt.set(...l.tgt).lerp(this.tmp.set(...u.tgt),d)}else if(c<=i.depart||t===this.beatCams.length-1)this.camPos.set(...u.pos),this.camTgt.set(...u.tgt);else{const d=this.beatCams[t+1],_=this.ramp(a,i.depart*o,1);this.camPos.set(...u.pos).lerp(this.tmp.set(...d.a.pos),_),this.camTgt.set(...u.tgt).lerp(this.tmp.set(...d.a.tgt),_)}const h=this.experience.camera.modes.default.instance;return h.position.copy(this.camPos),h.lookAt(this.camTgt),Math.abs(this.camTgt.x-(this.lastShadowX??1/0))>.15&&(this.lastShadowX=this.camTgt.x,this.experience.renderer.instance.shadowMap.needsUpdate=!0),this.key.position.set(this.camTgt.x,9,2.5),this.key.target.position.set(this.camTgt.x,0,0),this.fill.position.set(this.camTgt.x,4,12),this.fill.target.position.set(this.camTgt.x,2,-4.5),{beatIndex:t,localT:Math.min(c,1)}}updateGoldAccents(e,t){this.goldAxisMat.opacity=e===1?this.ramp(t,.4,.62)*(1-this.ramp(t,.82,.96))*.85:0}updateLightTrims(e){var o;const t=this.lightTrims[e]??{key:1,fill:1,env:1,hemi:1,vig:1},n=this.keyBase*t.key,i=this.fillBase*t.fill,r=this.envBase*t.env,a=this.hemiBase*t.hemi;if(this.key.intensity+=(n-this.key.intensity)*.08,this.fill.intensity+=(i-this.fill.intensity)*.08,this.hemi.intensity+=(a-this.hemi.intensity)*.08,this.scene.environmentIntensity+=(r-this.scene.environmentIntensity)*.08,this.vignetteEl??(this.vignetteEl=(o=this.experience.targetElement)==null?void 0:o.querySelector(".experience__vignette")),this.vignetteEl){this.vigCurrent??(this.vigCurrent=.45);const c=Math.min(1,.45*t.vig);Math.abs(c-this.vigCurrent)>.002&&(this.vigCurrent+=(c-this.vigCurrent)*.08,this.vignetteEl.style.opacity=this.vigCurrent.toFixed(3))}(Math.abs(n-this.key.intensity)>.005||Math.abs(i-this.fill.intensity)>.005||Math.abs(a-this.hemi.intensity)>.005||Math.abs(r-this.scene.environmentIntensity)>.002)&&(this.experience.needsRender=!0)}resize(){}update(){if(!this.built)return;const e=this.experience.sceneState.scrollProgress,{beatIndex:t,localT:n}=this.updateCamera(e);this.updateGoldAccents(t,n),this.updateLightTrims(t)}destroy(){for(const e of this.disposables.geometries)e.dispose();for(const e of this.disposables.materials)e.dispose();for(const e of this.disposables.textures)e.dispose();this.scene.environment=null,this.scene.fog=null,this.scene.clear()}}function nr(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Um(s,e){s.prototype=Object.create(e.prototype),s.prototype.constructor=s,s.__proto__=e}/*!
 * GSAP 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},So={duration:.5,overwrite:!1,delay:0},$h,bn,Ht,di=1e8,Nt=1/di,oh=Math.PI*2,fE=oh/4,dE=0,Nm=Math.sqrt,pE=Math.cos,mE=Math.sin,mn=function(e){return typeof e=="string"},Kt=function(e){return typeof e=="function"},mr=function(e){return typeof e=="number"},ef=function(e){return typeof e>"u"},Wi=function(e){return typeof e=="object"},Hn=function(e){return e!==!1},tf=function(){return typeof window<"u"},uc=function(e){return Kt(e)||mn(e)},Om=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Tn=Array.isArray,gE=/random\([^)]+\)/g,_E=/,\s*/g,Zd=/(?:-?\.?\d|\.)+/gi,Fm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Qs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,tu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,km=/[+-]=-?[.\d]+/,bE=/[^,'"\[\]\s]+/gi,xE=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xt,Di,ch,nf,si={},jc={},Bm,zm=function(e){return(jc=Ma(e,si))&&Xn},rf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Mo=function(e,t){return!t&&console.warn(e)},Hm=function(e,t){return e&&(si[e]=t)&&jc&&(jc[e]=t)||si},Eo=function(){return 0},vE={suppressEvents:!0,isStart:!0,kill:!1},Lc={suppressEvents:!0,kill:!1},yE={suppressEvents:!0},sf={},Nr=[],lh={},Gm,Zn={},nu={},Jd=30,Dc=[],af="",of=function(e){var t=e[0],n,i;if(Wi(t)||Kt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Dc.length;i--&&!Dc[i].targetTest(t););n=Dc[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new ug(e[i],n)))||e.splice(i,1);return e},ds=function(e){return e._gsap||of(pi(e))[0]._gsap},Vm=function(e,t,n){return(n=e[t])&&Kt(n)?e[t]():ef(n)&&e.getAttribute&&e.getAttribute(t)||n},Gn=function(e,t){return(e=e.split(",")).forEach(t)||e},Qt=function(e){return Math.round(e*1e5)/1e5||0},Wt=function(e){return Math.round(e*1e7)/1e7||0},sa=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},SE=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Yc=function(){var e=Nr.length,t=Nr.slice(0),n,i;for(lh={},Nr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},cf=function(e){return!!(e._initted||e._startAt||e.add)},Wm=function(e,t,n,i){Nr.length&&!bn&&Yc(),e.render(t,n,!!(bn&&t<0&&cf(e))),Nr.length&&!bn&&Yc()},Xm=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bE).length<2?t:mn(e)?e.trim():e},qm=function(e){return e},ai=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ME=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ma=function(e,t){for(var n in t)e[n]=t[n];return e},Qd=function s(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Wi(t[n])?s(e[n]||(e[n]={}),t[n]):t[n]);return e},Kc=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},ro=function(e){var t=e.parent||Xt,n=e.keyframes?ME(Tn(e.keyframes)):ai;if(Hn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},EE=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},jm=function(e,t,n,i,r){var a=e[i],o;if(r)for(o=t[r];a&&a[r]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},ul=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=t._prev,a=t._next;r?r._next=a:e[n]===t&&(e[n]=a),a?a._prev=r:e[i]===t&&(e[i]=r),t._next=t._prev=t.parent=null},Br=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},ps=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},TE=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},uh=function(e,t,n,i){return e._startAt&&(bn?e._startAt.revert(Lc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},wE=function s(e){return!e||e._ts&&s(e.parent)},$d=function(e){return e._repeat?Ea(e._tTime,e=e.duration()+e._rDelay)*e:0},Ea=function(e,t){var n=Math.floor(e=Wt(e/t));return e&&n===e?n-1:n},Zc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},hl=function(e){return e._end=Wt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Nt)||0))},fl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Wt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),hl(e),n._dirty||ps(n,e)),e},Ym=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Zc(e.rawTime(),t),(!t._dur||Uo(0,t.totalDuration(),n)-t._tTime>Nt)&&t.render(n,!0)),ps(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Nt}},Oi=function(e,t,n,i){return t.parent&&Br(t),t._start=Wt((mr(n)?n:n||e!==Xt?ci(e,n,t):e._time)+t._delay),t._end=Wt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),jm(e,t,"_first","_last",e._sort?"_start":0),hh(t)||(e._recent=t),i||Ym(e,t),e._ts<0&&fl(e,e._tTime),e},Km=function(e,t){return(si.ScrollTrigger||rf("scrollTrigger",t))&&si.ScrollTrigger.create(t,e)},Zm=function(e,t,n,i,r){if(uf(e,t,r),!e._initted)return 1;if(!n&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Gm!==$n.frame)return Nr.push(e),e._lazy=[r,i],1},AE=function s(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||s(t))},hh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},RE=function(e,t,n,i){var r=e.ratio,a=t<0||!t&&(!e._start&&AE(e)&&!(!e._initted&&hh(e))||(e._ts<0||e._dp._ts<0)&&!hh(e))?0:1,o=e._rDelay,c=0,l,u,h;if(o&&e._repeat&&(c=Uo(0,e._tDur,t),u=Ea(c,o),e._yoyo&&u&1&&(a=1-a),u!==Ea(e._tTime,o)&&(r=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==r||bn||i||e._zTime===Nt||!t&&e._zTime){if(!e._initted&&Zm(e,t,i,n,c))return;for(h=e._zTime,e._zTime=t||(n?Nt:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&uh(e,t,n,!0),e._onUpdate&&!n&&ni(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&ni(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Br(e,1),!n&&!bn&&(ni(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},CE=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Ta=function(e,t,n,i){var r=e._repeat,a=Wt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=r?r<0?1e10:Wt(a*(r+1)+e._rDelay*r):a,o>0&&!i&&fl(e,e._tTime=e._tDur*o),e.parent&&hl(e),n||ps(e.parent,e),e},ep=function(e){return e instanceof Bn?ps(e):Ta(e,e._dur)},PE={_start:0,endTime:Eo,totalDuration:Eo},ci=function s(e,t,n){var i=e.labels,r=e._recent||PE,a=e.duration()>=di?r.endTime(!1):e._dur,o,c,l;return mn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?r:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(Tn(n)?n[0]:n).totalDuration()),o>1?s(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},so=function(e,t,n){var i=mr(t[1]),r=(i?2:1)+(e<2?0:1),a=t[r],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=Hn(c.vars.inherit)&&c.parent;a.immediateRender=Hn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[r-1]}return new rn(t[0],a,t[r+1])},qr=function(e,t){return e||e===0?t(e):t},Uo=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!mn(e)||!(t=xE.exec(e))?"":t[1]},LE=function(e,t,n){return qr(n,function(i){return Uo(e,t,i)})},fh=[].slice,Jm=function(e,t){return e&&Wi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Wi(e[0]))&&!e.nodeType&&e!==Di},DE=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var r;return mn(i)&&!t||Jm(i,1)?(r=n).push.apply(r,pi(i)):n.push(i)})||n},pi=function(e,t,n){return Ht&&!t&&Ht.selector?Ht.selector(e):mn(e)&&!n&&(ch||!wa())?fh.call((t||nf).querySelectorAll(e),0):Tn(e)?DE(e,n):Jm(e)?fh.call(e,0):e?[e]:[]},dh=function(e){return e=pi(e)[0]||Mo("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return pi(t,n.querySelectorAll?n:n===e?Mo("Invalid scope")||nf.createElement("div"):e)}},Qm=function(e){return e.sort(function(){return .5-Math.random()})},$m=function(e){if(Kt(e))return e;var t=Wi(e)?e:{each:e},n=ms(t.ease),i=t.from||0,r=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,u=i,h=i;return mn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],h=i[1]),function(f,d,_){var b=(_||t).length,m=a[b],g,S,y,M,L,P,w,I,B;if(!m){if(B=t.grid==="auto"?0:(t.grid||[1,di])[1],!B){for(w=-di;w<(w=_[B++].getBoundingClientRect().left)&&B<b;);B<b&&B--}for(m=a[b]=[],g=c?Math.min(B,b)*u-.5:i%B,S=B===di?0:c?b*h/B-.5:i/B|0,w=0,I=di,P=0;P<b;P++)y=P%B-g,M=S-(P/B|0),m[P]=L=l?Math.abs(l==="y"?M:y):Nm(y*y+M*M),L>w&&(w=L),L<I&&(I=L);i==="random"&&Qm(m),m.max=w-I,m.min=I,m.v=b=(parseFloat(t.amount)||parseFloat(t.each)*(B>b?b-1:l?l==="y"?b/B:B:Math.max(B,b/B))||0)*(i==="edges"?-1:1),m.b=b<0?r-b:r,m.u=Mn(t.amount||t.each)||0,n=n&&b<0?XE(n):n}return b=(m[f]-m.min)/m.max||0,Wt(m.b+(n?n(b):b)*m.v)+m.u}},ph=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Wt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(mr(n)?0:Mn(n))}},eg=function(e,t){var n=Tn(e),i,r;return!n&&Wi(e)&&(i=n=e.radius||di,e.values?(e=pi(e.values),(r=!mr(e[0]))&&(i*=i)):e=ph(e.increment)),qr(t,n?Kt(e)?function(a){return r=e(a),Math.abs(r-a)<=i?r:a}:function(a){for(var o=parseFloat(r?a.x:a),c=parseFloat(r?a.y:0),l=di,u=0,h=e.length,f,d;h--;)r?(f=e[h].x-o,d=e[h].y-c,f=f*f+d*d):f=Math.abs(e[h]-o),f<l&&(l=f,u=h);return u=!i||l<=i?e[u]:a,r||u===a||mr(a)?u:u+Mn(a)}:ph(e))},tg=function(e,t,n,i){return qr(Tn(e)?!t:n===!0?!!(n=0):!i,function(){return Tn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},IE=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(r,a){return a(r)},i)}},UE=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},NE=function(e,t,n){return ig(e,t,0,1,n)},ng=function(e,t,n){return qr(n,function(i){return e[~~t(i)]})},OE=function s(e,t,n){var i=t-e;return Tn(e)?ng(e,s(0,e.length),t):qr(n,function(r){return(i+(r-e)%i)%i+e})},FE=function s(e,t,n){var i=t-e,r=i*2;return Tn(e)?ng(e,s(0,e.length-1),t):qr(n,function(a){return a=(r+(a-e)%r)%r||0,e+(a>i?r-a:a)})},To=function(e){return e.replace(gE,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(_E);return tg(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},ig=function(e,t,n,i,r){var a=t-e,o=i-n;return qr(r,function(c){return n+((c-e)/a*o||0)})},kE=function s(e,t,n,i){var r=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!r){var a=mn(e),o={},c,l,u,h,f;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(Tn(e)&&!Tn(t)){for(u=[],h=e.length,f=h-2,l=1;l<h;l++)u.push(s(e[l-1],e[l]));h--,r=function(_){_*=h;var b=Math.min(f,~~_);return u[b](_-b)},n=t}else i||(e=Ma(Tn(e)?[]:{},e));if(!u){for(c in t)lf.call(o,e,c,"get",t[c]);r=function(_){return df(_,o)||(a?e.p:e)}}}return qr(n,r)},tp=function(e,t,n){var i=e.labels,r=di,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&r>(o=Math.abs(o))&&(c=a,r=o);return c},ni=function(e,t,n){var i=e.vars,r=i[t],a=Ht,o=e._ctx,c,l,u;if(r)return c=i[t+"Params"],l=i.callbackScope||e,n&&Nr.length&&Yc(),o&&(Ht=o),u=c?r.apply(l,c):r.call(l),Ht=a,u},ja=function(e){return Br(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&ni(e,"onInterrupt"),e},$s,rg=[],sg=function(e){if(e)if(e=!e.name&&e.default||e,tf()||e.headless){var t=e.name,n=Kt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,r={init:Eo,render:df,add:lf,kill:tT,modifier:eT,rawVars:0},a={targetTest:0,get:0,getSetter:ff,aliases:{},register:0};if(wa(),e!==i){if(Zn[t])return;ai(i,ai(Kc(e,r),a)),Ma(i.prototype,Ma(r,Kc(e,a))),Zn[i.prop=t]=i,e.targetTest&&(Dc.push(i),sf[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Hm(t,i),e.register&&e.register(Xn,i,Vn)}else rg.push(e)},Ut=255,Ya={aqua:[0,Ut,Ut],lime:[0,Ut,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ut],navy:[0,0,128],white:[Ut,Ut,Ut],olive:[128,128,0],yellow:[Ut,Ut,0],orange:[Ut,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ut,0,0],pink:[Ut,192,203],cyan:[0,Ut,Ut],transparent:[Ut,Ut,Ut,0]},iu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ut+.5|0},ag=function(e,t,n){var i=e?mr(e)?[e>>16,e>>8&Ut,e&Ut]:0:Ya.black,r,a,o,c,l,u,h,f,d,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Ya[e])i=Ya[e];else if(e.charAt(0)==="#"){if(e.length<6&&(r=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+r+r+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Ut,i&Ut,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Ut,e&Ut]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(Zd),!t)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,r=u*2-a,i.length>3&&(i[3]*=1),i[0]=iu(c+1/3,r,a),i[1]=iu(c,r,a),i[2]=iu(c-1/3,r,a);else if(~e.indexOf("="))return i=e.match(Fm),n&&i.length<4&&(i[3]=1),i}else i=e.match(Zd)||Ya.transparent;i=i.map(Number)}return t&&!_&&(r=i[0]/Ut,a=i[1]/Ut,o=i[2]/Ut,h=Math.max(r,a,o),f=Math.min(r,a,o),u=(h+f)/2,h===f?c=l=0:(d=h-f,l=u>.5?d/(2-h-f):d/(h+f),c=h===r?(a-o)/d+(a<o?6:0):h===a?(o-r)/d+2:(r-a)/d+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},og=function(e){var t=[],n=[],i=-1;return e.split(Or).forEach(function(r){var a=r.match(Qs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},np=function(e,t,n){var i="",r=(e+i).match(Or),a=t?"hsla(":"rgba(",o=0,c,l,u,h;if(!r)return e;if(r=r.map(function(f){return(f=ag(f,t,1))&&a+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=og(e),c=n.c,c.join(i)!==u.c.join(i)))for(l=e.replace(Or,"1").split(Qs),h=l.length-1;o<h;o++)i+=l[o]+(~c.indexOf(o)?r.shift()||a+"0,0,0,0)":(u.length?u:r.length?r:n).shift());if(!l)for(l=e.split(Or),h=l.length-1;o<h;o++)i+=l[o]+r[o];return i+l[h]},Or=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Ya)s+="|"+e+"\\b";return new RegExp(s+")","gi")}(),BE=/hsl[a]?\(/,cg=function(e){var t=e.join(" "),n;if(Or.lastIndex=0,Or.test(t))return n=BE.test(t),e[1]=np(e[1],n),e[0]=np(e[0],n,og(e[1])),!0},wo,$n=function(){var s=Date.now,e=500,t=33,n=s(),i=n,r=1e3/240,a=r,o=[],c,l,u,h,f,d,_=function b(m){var g=s()-i,S=m===!0,y,M,L,P;if((g>e||g<0)&&(n+=g-t),i+=g,L=i-n,y=L-a,(y>0||S)&&(P=++h.frame,f=L-h.time*1e3,h.time=L=L/1e3,a+=y+(y>=r?4:r-y),M=1),S||(c=l(b)),M)for(d=0;d<o.length;d++)o[d](L,f,P,m)};return h={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return f/(1e3/(m||60))},wake:function(){Bm&&(!ch&&tf()&&(Di=ch=window,nf=Di.document||{},si.gsap=Xn,(Di.gsapVersions||(Di.gsapVersions=[])).push(Xn.version),zm(jc||Di.GreenSockGlobals||!Di.gsap&&Di||{}),rg.forEach(sg)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&h.sleep(),l=u||function(m){return setTimeout(m,a-h.time*1e3+1|0)},wo=1,_(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),wo=0,l=Eo},lagSmoothing:function(m,g){e=m||1/0,t=Math.min(g||33,e)},fps:function(m){r=1e3/(m||240),a=h.time*1e3+r},add:function(m,g,S){var y=g?function(M,L,P,w){m(M,L,P,w),h.remove(y)}:m;return h.remove(m),o[S?"unshift":"push"](y),wa(),y},remove:function(m,g){~(g=o.indexOf(m))&&o.splice(g,1)&&d>=g&&d--},_listeners:o},h}(),wa=function(){return!wo&&$n.wake()},vt={},zE=/^[\d.\-M][\d.\-,\s]/,HE=/["']/g,GE=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],r=1,a=n.length,o,c,l;r<a;r++)c=n[r],o=r!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(HE,"").trim():+l,i=c.substr(o+1).trim();return t},VE=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},WE=function(e){var t=(e+"").split("("),n=vt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[GE(t[1])]:VE(e).split(",").map(Xm)):vt._CE&&zE.test(e)?vt._CE("",e):n},XE=function(e){return function(t){return 1-e(1-t)}},ms=function(e,t){return e&&(Kt(e)?e:vt[e]||WE(e))||t},As=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var r={easeIn:t,easeOut:n,easeInOut:i},a;return Gn(e,function(o){vt[o]=si[o]=r,vt[a=o.toLowerCase()]=n;for(var c in r)vt[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=vt[o+"."+c]=r[c]}),r},lg=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},ru=function s(e,t,n){var i=t>=1?t:1,r=(n||(e?.3:.45))/(t<1?t:1),a=r/oh*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*mE((u-a)*r)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:lg(o);return r=oh/r,c.config=function(l,u){return s(e,l,u)},c},su=function s(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(r){return 1-n(1-r)}:lg(n);return i.config=function(r){return s(e,r)},i};Gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,e){var t=e<5?e+1:e;As(s+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});vt.Linear.easeNone=vt.none=vt.Linear.easeIn;As("Elastic",ru("in"),ru("out"),ru());(function(s,e){var t=1/e,n=2*t,i=2.5*t,r=function(o){return o<t?s*o*o:o<n?s*Math.pow(o-1.5/e,2)+.75:o<i?s*(o-=2.25/e)*o+.9375:s*Math.pow(o-2.625/e,2)+.984375};As("Bounce",function(a){return 1-r(1-a)},r)})(7.5625,2.75);As("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});As("Circ",function(s){return-(Nm(1-s*s)-1)});As("Sine",function(s){return s===1?1:-pE(s*fE)+1});As("Back",su("in"),su("out"),su());vt.SteppedEase=vt.steps=si.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),r=t?1:0,a=1-Nt;return function(o){return((i*Uo(0,a,o)|0)+r)*n}}};So.ease=vt["quad.out"];Gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return af+=s+","+s+"Params,"});var ug=function(e,t){this.id=dE++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Vm,this.set=t?t.getSetter:ff},Ao=function(){function s(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Ta(this,+t.duration,1,1),this.data=t.data,Ht&&(this._ctx=Ht,Ht.data.push(this)),wo||$n.wake()}var e=s.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Ta(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(wa(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(fl(this,n),!r._dp||r.parent||Ym(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Oi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Nt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Wm(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+$d(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+$d(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Ea(this._tTime,r)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Nt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Zc(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Nt?0:this._rts,this.totalTime(Uo(-Math.abs(this._delay),this.totalDuration(),r),i!==!1),hl(this),TE(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wa(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Nt&&(this._tTime-=Nt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Wt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Oi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Hn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Zc(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=yE);var i=bn;return bn=n,cf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},e.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,ep(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,ep(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ci(this,n),Hn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Hn(i)),this._dur||(this._zTime=-Nt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Nt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Nt)},e.eventCallback=function(n,i,r){var a=this.vars;return arguments.length>1?(i?(a[n]=i,r&&(a[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,r=i._prom;return new Promise(function(a){var o=Kt(n)?n:qm,c=function(){var u=i.then;i.then=null,r&&r(),Kt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){ja(this)},s}();ai(Ao.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Nt,_prom:0,_ps:!1,_rts:1});var Bn=function(s){Um(e,s);function e(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=Hn(n.sortChildren),Xt&&Oi(n.parent||Xt,nr(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Km(nr(r),n.scrollTrigger),r}var t=e.prototype;return t.to=function(i,r,a){return so(0,arguments,this),this},t.from=function(i,r,a){return so(1,arguments,this),this},t.fromTo=function(i,r,a,o){return so(2,arguments,this),this},t.set=function(i,r,a){return r.duration=0,r.parent=this,ro(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new rn(i,r,ci(this,a),1),this},t.call=function(i,r,a){return Oi(this,rn.delayedCall(0,i,r),a)},t.staggerTo=function(i,r,a,o,c,l,u){return a.duration=r,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new rn(i,a,ci(this,c)),this},t.staggerFrom=function(i,r,a,o,c,l,u){return a.runBackwards=1,ro(a).immediateRender=Hn(a.immediateRender),this.staggerTo(i,r,a,o,c,l,u)},t.staggerFromTo=function(i,r,a,o,c,l,u,h){return o.startAt=a,ro(o).immediateRender=Hn(o.immediateRender),this.staggerTo(i,r,o,c,l,u,h)},t.render=function(i,r,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Wt(i),h=this._zTime<0!=i<0&&(this._initted||!l),f,d,_,b,m,g,S,y,M,L,P,w;if(this!==Xt&&u>c&&i>=0&&(u=c),u!==this._tTime||a||h){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),f=u,M=this._start,y=this._ts,g=!y,h&&(l||(o=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(P=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,a);if(f=Wt(u%m),u===c?(b=this._repeat,f=l):(L=Wt(u/m),b=~~L,b&&b===L&&(f=l,b--),f>l&&(f=l)),L=Ea(this._tTime,m),!o&&this._tTime&&L!==b&&this._tTime-L*m-this._dur<=0&&(L=b),P&&b&1&&(f=l-f,w=1),b!==L&&!this._lock){var I=P&&L&1,B=I===(P&&b&1);if(b<L&&(I=!I),o=I?0:u%l?l:u,this._lock=1,this.render(o||(w?0:Wt(b*m)),r,!l)._lock=0,this._tTime=u,!r&&this.parent&&ni(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,L=b),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,B&&(this._lock=2,o=I?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!g)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(S=CE(this,Wt(o),Wt(f)),S&&(u-=f-(f=S._start))),this._tTime=u,this._time=f,this._act=!!y,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!r&&!L&&(ni(this,"onStart"),this._tTime!==u))return this;if(f>=o&&i>=0)for(d=this._first;d;){if(_=d._next,(d._act||f>=d._start)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,r,a),f!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=-Nt);break}}d=_}else{d=this._last;for(var v=i<0?i:f;d;){if(_=d._prev,(d._act||v<=d._end)&&d._ts&&S!==d){if(d.parent!==this)return this.render(i,r,a);if(d.render(d._ts>0?(v-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(v-d._start)*d._ts,r,a||bn&&cf(d)),f!==this._time||!this._ts&&!g){S=0,_&&(u+=this._zTime=v?-Nt:Nt);break}}d=_}}if(S&&!r&&(this.pause(),S.render(f>=o?0:-Nt)._zTime=f>=o?1:-1,this._ts))return this._start=M,hl(this),this.render(i,r,a);this._onUpdate&&!r&&ni(this,"onUpdate",!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(y)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&Br(this,1),!r&&!(i<0&&!o)&&(u||o||!c)&&(ni(this,u===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,r){var a=this;if(mr(r)||(r=ci(this,r,i)),!(i instanceof Ao)){if(Tn(i))return i.forEach(function(o){return a.add(o,r)}),this;if(mn(i))return this.addLabel(i,r);if(Kt(i))i=rn.delayedCall(0,i);else return this}return this!==i?Oi(this,i,r):this},t.getChildren=function(i,r,a,o){i===void 0&&(i=!0),r===void 0&&(r=!0),a===void 0&&(a=!0),o===void 0&&(o=-di);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof rn?r&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,r,a)))),l=l._next;return c},t.getById=function(i){for(var r=this.getChildren(1,1,1),a=r.length;a--;)if(r[a].vars.id===i)return r[a]},t.remove=function(i){return mn(i)?this.removeLabel(i):Kt(i)?this.killTweensOf(i):(i.parent===this&&ul(this,i),i===this._recent&&(this._recent=this._last),ps(this))},t.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Wt($n.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},t.addLabel=function(i,r){return this.labels[i]=ci(this,r),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,r,a){var o=rn.delayedCall(0,r||Eo,a);return o.data="isPause",this._hasPause=1,Oi(this,o,ci(this,i))},t.removePause=function(i){var r=this._first;for(i=ci(this,i);r;)r._start===i&&r.data==="isPause"&&Br(r),r=r._next},t.killTweensOf=function(i,r,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)Cr!==o[c]&&o[c].kill(i,r);return this},t.getTweensOf=function(i,r){for(var a=[],o=pi(i),c=this._first,l=mr(r),u;c;)c instanceof rn?SE(c._targets,o)&&(l?(!Cr||c._initted&&c._ts)&&c.globalTime(0)<=r&&c.globalTime(c.totalDuration())>r:!r||c.isActive())&&a.push(c):(u=c.getTweensOf(o,r)).length&&a.push.apply(a,u),c=c._next;return a},t.tweenTo=function(i,r){r=r||{};var a=this,o=ci(a,i),c=r,l=c.startAt,u=c.onStart,h=c.onStartParams,f=c.immediateRender,d,_=rn.to(a,ai({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Nt,onStart:function(){if(a.pause(),!d){var m=r.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());_._dur!==m&&Ta(_,m,0,1).render(_._time,!0,!0),d=1}u&&u.apply(_,h||[])}},r));return f?_.render(0):_},t.tweenFromTo=function(i,r,a){return this.tweenTo(r,ai({startAt:{time:ci(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),tp(this,ci(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),tp(this,ci(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Nt)},t.shiftChildren=function(i,r,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Wt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(r)for(l in c)c[l]>=a&&(c[l]+=i);return ps(this)},t.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,a;r;)a=r._next,this.remove(r),r=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ps(this)},t.totalDuration=function(i){var r=0,a=this,o=a._last,c=di,l,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Oi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(r-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Wt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),c=0),o._end>r&&o._ts&&(r=o._end),o=l;Ta(a,a===Xt&&a._time>r?a._time:r,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Xt._ts&&(Wm(Xt,Zc(i,Xt)),Gm=$n.frame),$n.frame>=Jd){Jd+=ri.autoSleep||120;var r=Xt._first;if((!r||!r._ts)&&ri.autoSleep&&$n._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||$n.sleep()}}},e}(Ao);ai(Bn.prototype,{_lock:0,_hasPause:0,_forcing:0});var qE=function(e,t,n,i,r,a,o){var c=new Vn(this._pt,e,t,0,1,gg,null,r),l=0,u=0,h,f,d,_,b,m,g,S;for(c.b=n,c.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=To(i)),a&&(S=[n,i],a(S,e,t),n=S[0],i=S[1]),f=n.match(tu)||[];h=tu.exec(i);)_=h[0],b=i.substring(l,h.index),d?d=(d+1)%5:b.substr(-5)==="rgba("&&(d=1),_!==f[u++]&&(m=parseFloat(f[u-1])||0,c._pt={_next:c._pt,p:b||u===1?b:",",s:m,c:_.charAt(1)==="="?sa(m,_)-m:parseFloat(_)-m,m:d&&d<4?Math.round:0},l=tu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(km.test(i)||g)&&(c.e=0),this._pt=c,c},lf=function(e,t,n,i,r,a,o,c,l,u){Kt(i)&&(i=i(r||0,e,a));var h=e[t],f=n!=="get"?n:Kt(h)?l?e[t.indexOf("set")||!Kt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():h,d=Kt(h)?l?JE:pg:hf,_;if(mn(i)&&(~i.indexOf("random(")&&(i=To(i)),i.charAt(1)==="="&&(_=sa(f,i)+(Mn(f)||0),(_||_===0)&&(i=_))),!u||f!==i||mh)return!isNaN(f*i)&&i!==""?(_=new Vn(this._pt,e,t,+f||0,i-(f||0),typeof h=="boolean"?$E:mg,0,d),l&&(_.fp=l),o&&_.modifier(o,this,e),this._pt=_):(!h&&!(t in e)&&rf(t,i),qE.call(this,e,t,f,i,d,c||ri.stringFilter,l))},jE=function(e,t,n,i,r){if(Kt(e)&&(e=ao(e,r,t,n,i)),!Wi(e)||e.style&&e.nodeType||Tn(e)||Om(e))return mn(e)?ao(e,r,t,n,i):e;var a={},o;for(o in e)a[o]=ao(e[o],r,t,n,i);return a},hg=function(e,t,n,i,r,a){var o,c,l,u;if(Zn[e]&&(o=new Zn[e]).init(r,o.rawVars?t[e]:jE(t[e],i,r,a,n),n,i,a)!==!1&&(n._pt=c=new Vn(n._pt,r,e,0,1,o.render,o,0,o.priority),n!==$s))for(l=n._ptLookup[n._targets.indexOf(r)],u=o._props.length;u--;)l[o._props[u]]=c;return o},Cr,mh,uf=function s(e,t,n){var i=e.vars,r=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,_=e._dur,b=e._startAt,m=e._targets,g=e.parent,S=g&&g.data==="nested"?g.vars.targets:m,y=e._overwrite==="auto"&&!$h,M=e.timeline,L=i.easeReverse||h,P,w,I,B,v,R,F,j,X,ne,W,ee,K;if(M&&(!f||!r)&&(r="none"),e._ease=ms(r,So.ease),e._rEase=L&&(ms(L)||e._ease),e._from=!M&&!!i.runBackwards,e._from&&(e.ratio=1),!M||f&&!i.stagger){if(j=m[0]?ds(m[0]).harness:0,ee=j&&i[j.prop],P=Kc(i,sf),b&&(b._zTime<0&&b.progress(1),t<0&&u&&o&&!d?b.render(-1,!0):b.revert(u&&_?Lc:vE),b._lazy=0),a){if(Br(e._startAt=rn.set(m,ai({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!b&&Hn(c),startAt:null,delay:0,onUpdate:l&&function(){return ni(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!o&&!d)&&e._startAt.revert(Lc),o&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&_&&!b){if(t&&(o=!1),I=ai({overwrite:!1,data:"isFromStart",lazy:o&&!b&&Hn(c),immediateRender:o,stagger:0,parent:g},P),ee&&(I[j.prop]=ee),Br(e._startAt=rn.set(m,I)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(Lc):e._startAt.render(-1,!0)),e._zTime=t,!o)s(e._startAt,Nt,Nt);else if(!t)return}for(e._pt=e._ptCache=0,c=_&&Hn(c)||c&&!_,w=0;w<m.length;w++){if(v=m[w],F=v._gsap||of(m)[w]._gsap,e._ptLookup[w]=ne={},lh[F.id]&&Nr.length&&Yc(),W=S===m?w:S.indexOf(v),j&&(X=new j).init(v,ee||P,e,W,S)!==!1&&(e._pt=B=new Vn(e._pt,v,X.name,0,1,X.render,X,0,X.priority),X._props.forEach(function(de){ne[de]=B}),X.priority&&(R=1)),!j||ee)for(I in P)Zn[I]&&(X=hg(I,P,e,W,v,S))?X.priority&&(R=1):ne[I]=B=lf.call(e,v,I,"get",P[I],W,S,0,i.stringFilter);e._op&&e._op[w]&&e.kill(v,e._op[w]),y&&e._pt&&(Cr=e,Xt.killTweensOf(v,ne,e.globalTime(t)),K=!e.parent,Cr=0),e._pt&&c&&(lh[F.id]=1)}R&&_g(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!K,f&&t<=0&&M.render(di,!0,!0)},YE=function(e,t,n,i,r,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,f,d;if(!l)for(l=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(u=f[d][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return mh=1,e.vars[t]="+=0",uf(e,o),mh=0,c?Mo(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(u)}for(d=l.length;d--;)h=l[d],u=h._pt||h,u.s=(i||i===0)&&!r?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Qt(n)+Mn(h.e)),h.b&&(h.b=u.s+Mn(h.b))},KE=function(e,t){var n=e[0]?ds(e[0]).harness:0,i=n&&n.aliases,r,a,o,c;if(!i)return t;r=Ma({},t);for(a in i)if(a in r)for(c=i[a].split(","),o=c.length;o--;)r[c[o]]=r[a];return r},ZE=function(e,t,n,i){var r=t.ease||i||"power1.inOut",a,o;if(Tn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:r})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:r})},ao=function(e,t,n,i,r){return Kt(e)?e.call(t,n,i,r):mn(e)&&~e.indexOf("random(")?To(e):e},fg=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",dg={};Gn(fg+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return dg[s]=1});var rn=function(s){Um(e,s);function e(n,i,r,a){var o;typeof i=="number"&&(r.duration=i,i=r,r=null),o=s.call(this,a?i:ro(i))||this;var c=o.vars,l=c.duration,u=c.delay,h=c.immediateRender,f=c.stagger,d=c.overwrite,_=c.keyframes,b=c.defaults,m=c.scrollTrigger,g=i.parent||Xt,S=(Tn(n)||Om(n)?mr(n[0]):"length"in i)?[n]:pi(n),y,M,L,P,w,I,B,v;if(o._targets=S.length?of(S):Mo("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=d,_||f||uc(l)||uc(u)){i=o.vars;var R=i.easeReverse||i.yoyoEase;if(y=o.timeline=new Bn({data:"nested",defaults:b||{},targets:g&&g.data==="nested"?g.vars.targets:S}),y.kill(),y.parent=y._dp=nr(o),y._start=0,f||uc(l)||uc(u)){if(P=S.length,B=f&&$m(f),Wi(f))for(w in f)~fg.indexOf(w)&&(v||(v={}),v[w]=f[w]);for(M=0;M<P;M++)L=Kc(i,dg),L.stagger=0,R&&(L.easeReverse=R),v&&Ma(L,v),I=S[M],L.duration=+ao(l,nr(o),M,I,S),L.delay=(+ao(u,nr(o),M,I,S)||0)-o._delay,!f&&P===1&&L.delay&&(o._delay=u=L.delay,o._start+=u,L.delay=0),y.to(I,L,B?B(M,I,S):0),y._ease=vt.none;y.duration()?l=u=0:o.timeline=0}else if(_){ro(ai(y.vars.defaults,{ease:"none"})),y._ease=ms(_.ease||i.ease||"none");var F=0,j,X,ne;if(Tn(_))_.forEach(function(W){return y.to(S,W,">")}),y.duration();else{L={};for(w in _)w==="ease"||w==="easeEach"||ZE(w,_[w],L,_.easeEach);for(w in L)for(j=L[w].sort(function(W,ee){return W.t-ee.t}),F=0,M=0;M<j.length;M++)X=j[M],ne={ease:X.e,duration:(X.t-(M?j[M-1].t:0))/100*l},ne[w]=X.v,y.to(S,ne,F),F+=ne.duration;y.duration()<l&&y.to({},{duration:l-y.duration()})}}l||o.duration(l=y.duration())}else o.timeline=0;return d===!0&&!$h&&(Cr=nr(o),Xt.killTweensOf(S),Cr=0),Oi(g,nr(o),r),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!l&&!_&&o._start===Wt(g._time)&&Hn(h)&&wE(nr(o))&&g.data!=="nested")&&(o._tTime=-Nt,o.render(Math.max(0,-u)||0)),m&&Km(nr(o),m),o}var t=e.prototype;return t.render=function(i,r,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,h=i>c-Nt&&!u?c:i<Nt?0:i,f,d,_,b,m,g,S,y;if(!l)RE(this,i,r,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,y=this.timeline,this._repeat){if(b=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(b*100+i,r,a);if(f=Wt(h%b),h===c?(_=this._repeat,f=l):(m=Wt(h/b),_=~~m,_&&_===m?(f=l,_--):f>l&&(f=l)),g=this._yoyo&&_&1,g&&(f=l-f),m=Ea(this._tTime,b),f===o&&!a&&this._initted&&_===m)return this._tTime=h,this;_!==m&&this.vars.repeatRefresh&&!g&&!this._lock&&f!==b&&this._initted&&(this._lock=a=1,this.render(Wt(b*_),!0).invalidate()._lock=0)}if(!this._initted){if(Zm(this,u?i:f,a,r,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&_!==m))return this;if(l!==this._dur)return this.render(i,r,a)}if(this._rEase){var M=f<o;if(M!==this._inv){var L=M?o:l-o;this._inv=M,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=L?(M?-1:1)/L:0,this._invScale=M?-this.ratio:1-this.ratio,this._invEase=M?this._rEase:this._ease}this.ratio=S=this._invRatio+this._invScale*this._invEase((f-this._invTime)*this._invRecip)}else this.ratio=S=this._ease(f/l);if(this._from&&(this.ratio=S=1-S),this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&h&&!r&&!m&&(ni(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(S,d.d),d=d._next;y&&y.render(i<0?i:y._dur*y._ease(f/this._dur),r,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(u&&uh(this,i,r,a),ni(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!r&&this.parent&&ni(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&uh(this,i,!0,!0),(i||!l)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Br(this,1),!r&&!(u&&!o)&&(h||o||g)&&(ni(this,h===c?"onComplete":"onReverseComplete",!0),this._prom&&!(h<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},t.resetTo=function(i,r,a,o,c){wo||$n.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||uf(this,l),u=this._ease(l/this._dur),YE(this,i,r,a,o,u,l,c)?this.resetTo(i,r,a,o,1):(fl(this,0),this.parent||jm(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?ja(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Cr&&Cr.vars.overwrite!==!0)._first||ja(this),this.parent&&a!==this.timeline.totalDuration()&&Ta(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?pi(i):o,l=this._ptLookup,u=this._pt,h,f,d,_,b,m,g;if((!r||r==="all")&&EE(o,c))return r==="all"&&(this._pt=0),ja(this);for(h=this._op=this._op||[],r!=="all"&&(mn(r)&&(b={},Gn(r,function(S){return b[S]=1}),r=b),r=KE(o,r)),g=o.length;g--;)if(~c.indexOf(o[g])){f=l[g],r==="all"?(h[g]=r,_=f,d={}):(d=h[g]=h[g]||{},_=r);for(b in _)m=f&&f[b],m&&((!("kill"in m.d)||m.d.kill(b)===!0)&&ul(this,m,"_pt"),delete f[b]),d!=="all"&&(d[b]=1)}return this._initted&&!this._pt&&u&&ja(this),this},e.to=function(i,r){return new e(i,r,arguments[2])},e.from=function(i,r){return so(1,arguments)},e.delayedCall=function(i,r,a,o){return new e(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,r,a){return so(2,arguments)},e.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new e(i,r)},e.killTweensOf=function(i,r,a){return Xt.killTweensOf(i,r,a)},e}(Ao);ai(rn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Gn("staggerTo,staggerFrom,staggerFromTo",function(s){rn[s]=function(){var e=new Bn,t=fh.call(arguments,0);return t.splice(s==="staggerFromTo"?5:4,0,0),e[s].apply(e,t)}});var hf=function(e,t,n){return e[t]=n},pg=function(e,t,n){return e[t](n)},JE=function(e,t,n,i){return e[t](i.fp,n)},QE=function(e,t,n){return e.setAttribute(t,n)},ff=function(e,t){return Kt(e[t])?pg:ef(e[t])&&e.setAttribute?QE:hf},mg=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},$E=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},gg=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},eT=function(e,t,n,i){for(var r=this._pt,a;r;)a=r._next,r.p===i&&r.modifier(e,t,n),r=a},tT=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ul(this,t,"_pt"):t.dep||(n=1),t=i;return!n},nT=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},_g=function(e){for(var t=e._pt,n,i,r,a;t;){for(n=t._next,i=r;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:r=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=r},Vn=function(){function s(t,n,i,r,a,o,c,l,u){this.t=n,this.s=r,this.c=a,this.p=i,this.r=o||mg,this.d=c||this,this.set=l||hf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=s.prototype;return e.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=nT,this.m=n,this.mt=r,this.tween=i},s}();Gn(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return sf[s]=1});si.TweenMax=si.TweenLite=rn;si.TimelineLite=si.TimelineMax=Bn;Xt=new Bn({sortChildren:!1,defaults:So,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=cg;var gs=[],Ic={},iT=[],ip=0,rT=0,au=function(e){return(Ic[e]||iT).map(function(t){return t()})},gh=function(){var e=Date.now(),t=[];e-ip>2&&(au("matchMediaInit"),gs.forEach(function(n){var i=n.queries,r=n.conditions,a,o,c,l;for(o in i)a=Di.matchMedia(i[o]).matches,a&&(c=1),a!==r[o]&&(r[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),au("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ip=e,au("matchMedia"))},bg=function(){function s(t,n){this.selector=n&&dh(n),this.data=[],this._r=[],this.isReverted=!1,this.id=rT++,t&&this.add(t)}var e=s.prototype;return e.add=function(n,i,r){Kt(n)&&(r=i,i=n,n=Kt);var a=this,o=function(){var l=Ht,u=a.selector,h;return l&&l!==a&&l.data.push(a),r&&(a.selector=dh(r)),Ht=a,h=i.apply(a,arguments),Kt(h)&&a._r.push(h),Ht=l,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Kt?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Ht;Ht=null,n(this),Ht=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof rn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var r=this;if(n?function(){for(var o=r.getTweens(),c=r.data.length,l;c--;)l=r.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),c=r.data.length;c--;)l=r.data[c],l instanceof Bn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof rn)&&l.revert&&l.revert(n);r._r.forEach(function(u){return u(n,r)}),r.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=gs.length;a--;)gs[a].id===this.id&&gs.splice(a,1)},e.revert=function(n){this.kill(n||{})},s}(),sT=function(){function s(t){this.contexts=[],this.scope=t,Ht&&Ht.data.push(this)}var e=s.prototype;return e.add=function(n,i,r){Wi(n)||(n={matches:n});var a=new bg(0,r||this.scope),o=a.conditions={},c,l,u;Ht&&!a.selector&&(a.selector=Ht.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?u=1:(c=Di.matchMedia(n[l]),c&&(gs.indexOf(a)<0&&gs.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(gh):c.addEventListener("change",gh)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s}(),Jc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return sg(i)})},timeline:function(e){return new Bn(e)},getTweensOf:function(e,t){return Xt.getTweensOf(e,t)},getProperty:function(e,t,n,i){mn(e)&&(e=pi(e)[0]);var r=ds(e||{}).get,a=n?qm:Xm;return n==="native"&&(n=""),e&&(t?a((Zn[t]&&Zn[t].get||r)(e,t,n,i)):function(o,c,l){return a((Zn[o]&&Zn[o].get||r)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=pi(e),e.length>1){var i=e.map(function(u){return Xn.quickSetter(u,t,n)}),r=i.length;return function(u){for(var h=r;h--;)i[h](u)}}e=e[0]||{};var a=Zn[t],o=ds(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(u){var h=new a;$s._pt=0,h.init(e,n?u+n:u,$s,0,[e]),h.render(1,h),$s._pt&&df(1,$s)}:o.set(e,c);return a?l:function(u){return l(e,c,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,r=Xn.to(e,ai((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return r.resetTo(t,c,l,u)};return a.tween=r,a},isTweening:function(e){return Xt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=ms(e.ease,So.ease)),Qd(So,e||{})},config:function(e){return Qd(ri,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,r=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Zn[o]&&!si[o]&&Mo(t+" effect requires "+o+" plugin.")}),nu[t]=function(o,c,l){return n(pi(o),ai(c||{},r),l)},a&&(Bn.prototype[t]=function(o,c,l){return this.add(nu[t](o,Wi(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){vt[e]=ms(t)},parseEase:function(e,t){return arguments.length?ms(e,t):vt},getById:function(e){return Xt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Bn(e),i,r;for(n.smoothChildTiming=Hn(e.smoothChildTiming),Xt.remove(n),n._dp=0,n._time=n._tTime=Xt._time,i=Xt._first;i;)r=i._next,(t||!(!i._dur&&i instanceof rn&&i.vars.onComplete===i._targets[0]))&&Oi(n,i,i._start-i._delay),i=r;return Oi(Xt,n,0),n},context:function(e,t){return e?new bg(e,t):Ht},matchMedia:function(e){return new sT(e)},matchMediaRefresh:function(){return gs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||gh()},addEventListener:function(e,t){var n=Ic[e]||(Ic[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ic[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:OE,wrapYoyo:FE,distribute:$m,random:tg,snap:eg,normalize:NE,getUnit:Mn,clamp:LE,splitColor:ag,toArray:pi,selector:dh,mapRange:ig,pipe:IE,unitize:UE,interpolate:kE,shuffle:Qm},install:zm,effects:nu,ticker:$n,updateRoot:Bn.updateRoot,plugins:Zn,globalTimeline:Xt,core:{PropTween:Vn,globals:Hm,Tween:rn,Timeline:Bn,Animation:Ao,getCache:ds,_removeLinkedListItem:ul,reverting:function(){return bn},context:function(e){return e&&Ht&&(Ht.data.push(e),e._ctx=Ht),Ht},suppressOverwrites:function(e){return $h=e}}};Gn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Jc[s]=rn[s]});$n.add(Bn.updateRoot);$s=Jc.to({},{duration:0});var aT=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},oT=function(e,t){var n=e._targets,i,r,a;for(i in t)for(r=n.length;r--;)a=e._ptLookup[r][i],a&&(a=a.d)&&(a._pt&&(a=aT(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[r],i))},ou=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,r,a){a._onInit=function(o){var c,l;if(mn(r)&&(c={},Gn(r,function(u){return c[u]=1}),r=c),t){c={};for(l in r)c[l]=t(r[l]);r=c}oT(o,r)}}}},Xn=Jc.registerPlugin({name:"attr",init:function(e,t,n,i,r){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,r,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},ou("roundProps",ph),ou("modifiers"),ou("snap",eg))||Jc;rn.version=Bn.version=Xn.version="3.15.0";Bm=1;tf()&&wa();vt.Power0;vt.Power1;vt.Power2;vt.Power3;vt.Power4;vt.Linear;vt.Quad;vt.Cubic;vt.Quart;vt.Quint;vt.Strong;vt.Elastic;vt.Back;vt.SteppedEase;vt.Bounce;vt.Sine;vt.Expo;vt.Circ;/*!
 * CSSPlugin 3.15.0
 * https://gsap.com
 *
 * Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var rp,Pr,aa,pf,hs,sp,mf,cT=function(){return typeof window<"u"},gr={},rs=180/Math.PI,oa=Math.PI/180,Ws=Math.atan2,ap=1e8,gf=/([A-Z])/g,lT=/(left|right|width|margin|padding|x)/i,uT=/[\s,\(]\S/,Bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},_h=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},hT=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fT=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},dT=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},pT=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},xg=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},vg=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},mT=function(e,t,n){return e.style[t]=n},gT=function(e,t,n){return e.style.setProperty(t,n)},_T=function(e,t,n){return e._gsap[t]=n},bT=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},xT=function(e,t,n,i,r){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(r,a)},vT=function(e,t,n,i,r){var a=e._gsap;a[t]=n,a.renderTransform(r,a)},qt="transform",Wn=qt+"Origin",yT=function s(e,t){var n=this,i=this.target,r=i.style,a=i._gsap;if(e in gr&&r){if(this.tfm=this.tfm||{},e!=="transform")e=Bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=ir(i,o)}):this.tfm[e]=a.x?a[e]:ir(i,e),e===Wn&&(this.tfm.zOrigin=a.zOrigin);else return Bi.transform.split(",").forEach(function(o){return s.call(n,o,t)});if(this.props.indexOf(qt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Wn,t,"")),e=qt}(r||t)&&this.props.push(e,t,r[e])},yg=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},ST=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,r,a;for(r=0;r<e.length;r+=3)e[r+1]?e[r+1]===2?t[e[r]](e[r+2]):t[e[r]]=e[r+2]:e[r+2]?n[e[r]]=e[r+2]:n.removeProperty(e[r].substr(0,2)==="--"?e[r]:e[r].replace(gf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),r=mf(),(!r||!r.isStart)&&!n[qt]&&(yg(n),i.zOrigin&&n[Wn]&&(n[Wn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Sg=function(e,t){var n={target:e,props:[],revert:ST,save:yT};return e._gsap||Xn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Mg,bh=function(e,t){var n=Pr.createElementNS?Pr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Pr.createElement(e);return n&&n.style?n:Pr.createElement(e)},ii=function s(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(gf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&s(e,Aa(t)||t,1)||""},op="O,Moz,ms,Ms,Webkit".split(","),Aa=function(e,t,n){var i=t||hs,r=i.style,a=5;if(e in r&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(op[a]+e in r););return a<0?null:(a===3?"ms":a>=0?op[a]:"")+e},xh=function(){cT()&&window.document&&(rp=window,Pr=rp.document,aa=Pr.documentElement,hs=bh("div")||{style:{}},bh("div"),qt=Aa(qt),Wn=qt+"Origin",hs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Mg=!!Aa("perspective"),mf=Xn.core.reverting,pf=1)},cp=function(e){var t=e.ownerSVGElement,n=bh("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),r;i.style.display="block",n.appendChild(i),aa.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),aa.removeChild(n),r},lp=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Eg=function(e){var t,n;try{t=e.getBBox()}catch{t=cp(e),n=1}return t&&(t.width||t.height)||n||(t=cp(e)),t&&!t.width&&!t.x&&!t.y?{x:+lp(e,["x","cx","x1"])||0,y:+lp(e,["y","cy","y1"])||0,width:0,height:0}:t},Tg=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Eg(e))},zr=function(e,t){if(t){var n=e.style,i;t in gr&&t!==Wn&&(t=qt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(gf,"-$1").toLowerCase())):n.removeAttribute(t)}},Lr=function(e,t,n,i,r,a){var o=new Vn(e._pt,t,n,0,1,a?vg:xg);return e._pt=o,o.b=i,o.e=r,e._props.push(n),o},up={deg:1,rad:1,turn:1},MT={grid:1,flex:1},Hr=function s(e,t,n,i){var r=parseFloat(n)||0,a=(n+"").trim().substr((r+"").length)||"px",o=hs.style,c=lT.test(t),l=e.tagName.toLowerCase()==="svg",u=(l?"client":"offset")+(c?"Width":"Height"),h=100,f=i==="px",d=i==="%",_,b,m,g;if(i===a||!r||up[i]||up[a])return r;if(a!=="px"&&!f&&(r=s(e,t,n,"px")),g=e.getCTM&&Tg(e),(d||a==="%")&&(gr[t]||~t.indexOf("adius")))return _=g?e.getBBox()[c?"width":"height"]:e[u],Qt(d?r/_*h:r/100*_);if(o[c?"width":"height"]=h+(f?a:i),b=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,g&&(b=(e.ownerSVGElement||{}).parentNode),(!b||b===Pr||!b.appendChild)&&(b=Pr.body),m=b._gsap,m&&d&&m.width&&c&&m.time===$n.time&&!m.uncache)return Qt(r/m.width*h);if(d&&(t==="height"||t==="width")){var S=e.style[t];e.style[t]=h+i,_=e[u],S?e.style[t]=S:zr(e,t)}else(d||a==="%")&&!MT[ii(b,"display")]&&(o.position=ii(e,"position")),b===e&&(o.position="static"),b.appendChild(hs),_=hs[u],b.removeChild(hs),o.position="absolute";return c&&d&&(m=ds(b),m.time=$n.time,m.width=b[u]),Qt(f?_*r/h:_&&r?h/_*r:0)},ir=function(e,t,n,i){var r;return pf||xh(),t in Bi&&t!=="transform"&&(t=Bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),gr[t]&&t!=="transform"?(r=Co(e,i),r=t!=="transformOrigin"?r[t]:r.svg?r.origin:$c(ii(e,Wn))+" "+r.zOrigin+"px"):(r=e.style[t],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Qc[t]&&Qc[t](e,t,n)||ii(e,t)||Vm(e,t)||(t==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Hr(e,t,r,n)+n:r},ET=function(e,t,n,i){if(!n||n==="none"){var r=Aa(t,e,1),a=r&&ii(e,r,1);a&&a!==n?(t=r,n=a):t==="borderColor"&&(n=ii(e,"borderTopColor"))}var o=new Vn(this._pt,e.style,t,0,1,gg),c=0,l=0,u,h,f,d,_,b,m,g,S,y,M,L;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ii(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(b=e.style[t],e.style[t]=i,i=ii(e,t)||i,b?e.style[t]=b:zr(e,t)),u=[n,i],cg(u),n=u[0],i=u[1],f=n.match(Qs)||[],L=i.match(Qs)||[],L.length){for(;h=Qs.exec(i);)m=h[0],S=i.substring(c,h.index),_?_=(_+1)%5:(S.substr(-5)==="rgba("||S.substr(-5)==="hsla(")&&(_=1),m!==(b=f[l++]||"")&&(d=parseFloat(b)||0,M=b.substr((d+"").length),m.charAt(1)==="="&&(m=sa(d,m)+M),g=parseFloat(m),y=m.substr((g+"").length),c=Qs.lastIndex-y.length,y||(y=y||ri.units[t]||M,c===i.length&&(i+=y,o.e+=y)),M!==y&&(d=Hr(e,t,b,y)||0),o._pt={_next:o._pt,p:S||l===1?S:",",s:d,c:g-d,m:_&&_<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?vg:xg;return km.test(i)&&(o.e=0),this._pt=o,o},hp={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},TT=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=hp[n]||n,t[1]=hp[i]||i,t.join(" ")},wT=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,r=t.u,a=n._gsap,o,c,l;if(r==="all"||r===!0)i.cssText="",c=1;else for(r=r.split(","),l=r.length;--l>-1;)o=r[l],gr[o]&&(c=1,o=o==="transformOrigin"?Wn:qt),zr(n,o);c&&(zr(n,qt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Co(n,1),a.uncache=1,yg(i)))}},Qc={clearProps:function(e,t,n,i,r){if(r.data!=="isFromStart"){var a=e._pt=new Vn(e._pt,t,n,0,0,wT);return a.u=i,a.pr=-10,a.tween=r,e._props.push(n),1}}},Ro=[1,0,0,1,0,0],wg={},Ag=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},fp=function(e){var t=ii(e,qt);return Ag(t)?Ro:t.substr(7).match(Fm).map(Qt)},_f=function(e,t){var n=e._gsap||ds(e),i=e.style,r=fp(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,r=[c.a,c.b,c.c,c.d,c.e,c.f],r.join(",")==="1,0,0,1,0,0"?Ro:r):(r===Ro&&!e.offsetParent&&e!==aa&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,aa.appendChild(e)),r=fp(e),c?i.display=c:zr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):aa.removeChild(e))),t&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},vh=function(e,t,n,i,r,a){var o=e._gsap,c=r||_f(e,!0),l=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,f=o.yOffset||0,d=c[0],_=c[1],b=c[2],m=c[3],g=c[4],S=c[5],y=t.split(" "),M=parseFloat(y[0])||0,L=parseFloat(y[1])||0,P,w,I,B;n?c!==Ro&&(w=d*m-_*b)&&(I=M*(m/w)+L*(-b/w)+(b*S-m*g)/w,B=M*(-_/w)+L*(d/w)-(d*S-_*g)/w,M=I,L=B):(P=Eg(e),M=P.x+(~y[0].indexOf("%")?M/100*P.width:M),L=P.y+(~(y[1]||y[0]).indexOf("%")?L/100*P.height:L)),i||i!==!1&&o.smooth?(g=M-l,S=L-u,o.xOffset=h+(g*d+S*b)-g,o.yOffset=f+(g*_+S*m)-S):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=L,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Wn]="0px 0px",a&&(Lr(a,o,"xOrigin",l,M),Lr(a,o,"yOrigin",u,L),Lr(a,o,"xOffset",h,o.xOffset),Lr(a,o,"yOffset",f,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+L)},Co=function(e,t){var n=e._gsap||new ug(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,r=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=ii(e,Wn)||"0",u,h,f,d,_,b,m,g,S,y,M,L,P,w,I,B,v,R,F,j,X,ne,W,ee,K,de,U,xe,Oe,We,te,oe;return u=h=f=b=m=g=S=y=M=0,d=_=1,n.svg=!!(e.getCTM&&Tg(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[qt]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[qt]!=="none"?c[qt]:"")),i.scale=i.rotate=i.translate="none"),w=_f(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),l=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",ee=""):ee=!t&&e.getAttribute("data-svg-origin"),vh(e,ee||l,!!ee||n.originIsAbsolute,n.smooth!==!1,w)),L=n.xOrigin||0,P=n.yOrigin||0,w!==Ro&&(R=w[0],F=w[1],j=w[2],X=w[3],u=ne=w[4],h=W=w[5],w.length===6?(d=Math.sqrt(R*R+F*F),_=Math.sqrt(X*X+j*j),b=R||F?Ws(F,R)*rs:0,S=j||X?Ws(j,X)*rs+b:0,S&&(_*=Math.abs(Math.cos(S*oa))),n.svg&&(u-=L-(L*R+P*j),h-=P-(L*F+P*X))):(oe=w[6],We=w[7],U=w[8],xe=w[9],Oe=w[10],te=w[11],u=w[12],h=w[13],f=w[14],I=Ws(oe,Oe),m=I*rs,I&&(B=Math.cos(-I),v=Math.sin(-I),ee=ne*B+U*v,K=W*B+xe*v,de=oe*B+Oe*v,U=ne*-v+U*B,xe=W*-v+xe*B,Oe=oe*-v+Oe*B,te=We*-v+te*B,ne=ee,W=K,oe=de),I=Ws(-j,Oe),g=I*rs,I&&(B=Math.cos(-I),v=Math.sin(-I),ee=R*B-U*v,K=F*B-xe*v,de=j*B-Oe*v,te=X*v+te*B,R=ee,F=K,j=de),I=Ws(F,R),b=I*rs,I&&(B=Math.cos(I),v=Math.sin(I),ee=R*B+F*v,K=ne*B+W*v,F=F*B-R*v,W=W*B-ne*v,R=ee,ne=K),m&&Math.abs(m)+Math.abs(b)>359.9&&(m=b=0,g=180-g),d=Qt(Math.sqrt(R*R+F*F+j*j)),_=Qt(Math.sqrt(W*W+oe*oe)),I=Ws(ne,W),S=Math.abs(I)>2e-4?I*rs:0,M=te?1/(te<0?-te:te):0),n.svg&&(ee=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Ag(ii(e,qt)),ee&&e.setAttribute("transform",ee))),Math.abs(S)>90&&Math.abs(S)<270&&(r?(d*=-1,S+=b<=0?180:-180,b+=b<=0?180:-180):(_*=-1,S+=S<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=f+a,n.scaleX=Qt(d),n.scaleY=Qt(_),n.rotation=Qt(b)+o,n.rotationX=Qt(m)+o,n.rotationY=Qt(g)+o,n.skewX=S+o,n.skewY=y+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Wn]=$c(l)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?RT:Mg?Rg:AT,n.uncache=0,n},$c=function(e){return(e=e.split(" "))[0]+" "+e[1]},cu=function(e,t,n){var i=Mn(t);return Qt(parseFloat(t)+parseFloat(Hr(e,"x",n+"px",i)))+i},AT=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Rg(e,t)},es="0deg",Ga="0px",ts=") ",Rg=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,_=n.scaleX,b=n.scaleY,m=n.transformPerspective,g=n.force3D,S=n.target,y=n.zOrigin,M="",L=g==="auto"&&e&&e!==1||g===!0;if(y&&(h!==es||u!==es)){var P=parseFloat(u)*oa,w=Math.sin(P),I=Math.cos(P),B;P=parseFloat(h)*oa,B=Math.cos(P),a=cu(S,a,w*B*-y),o=cu(S,o,-Math.sin(P)*-y),c=cu(S,c,I*B*-y+y)}m!==Ga&&(M+="perspective("+m+ts),(i||r)&&(M+="translate("+i+"%, "+r+"%) "),(L||a!==Ga||o!==Ga||c!==Ga)&&(M+=c!==Ga||L?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+ts),l!==es&&(M+="rotate("+l+ts),u!==es&&(M+="rotateY("+u+ts),h!==es&&(M+="rotateX("+h+ts),(f!==es||d!==es)&&(M+="skew("+f+", "+d+ts),(_!==1||b!==1)&&(M+="scale("+_+", "+b+ts),S.style[qt]=M||"translate(0, 0)"},RT=function(e,t){var n=t||this,i=n.xPercent,r=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,_=n.xOrigin,b=n.yOrigin,m=n.xOffset,g=n.yOffset,S=n.forceCSS,y=parseFloat(a),M=parseFloat(o),L,P,w,I,B;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=oa,l*=oa,L=Math.cos(c)*h,P=Math.sin(c)*h,w=Math.sin(c-l)*-f,I=Math.cos(c-l)*f,l&&(u*=oa,B=Math.tan(l-u),B=Math.sqrt(1+B*B),w*=B,I*=B,u&&(B=Math.tan(u),B=Math.sqrt(1+B*B),L*=B,P*=B)),L=Qt(L),P=Qt(P),w=Qt(w),I=Qt(I)):(L=h,I=f,P=w=0),(y&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(y=Hr(d,"x",a,"px"),M=Hr(d,"y",o,"px")),(_||b||m||g)&&(y=Qt(y+_-(_*L+b*w)+m),M=Qt(M+b-(_*P+b*I)+g)),(i||r)&&(B=d.getBBox(),y=Qt(y+i/100*B.width),M=Qt(M+r/100*B.height)),B="matrix("+L+","+P+","+w+","+I+","+y+","+M+")",d.setAttribute("transform",B),S&&(d.style[qt]=B)},CT=function(e,t,n,i,r){var a=360,o=mn(r),c=parseFloat(r)*(o&&~r.indexOf("rad")?rs:1),l=c-i,u=i+l+"deg",h,f;return o&&(h=r.split("_")[1],h==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),h==="cw"&&l<0?l=(l+a*ap)%a-~~(l/a)*a:h==="ccw"&&l>0&&(l=(l-a*ap)%a-~~(l/a)*a)),e._pt=f=new Vn(e._pt,t,n,i,l,hT),f.e=u,f.u="deg",e._props.push(n),f},dp=function(e,t){for(var n in t)e[n]=t[n];return e},PT=function(e,t,n){var i=dp({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,u,h,f,d,_;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[qt]=t,o=Co(n,1),zr(n,qt),n.setAttribute("transform",l)):(l=getComputedStyle(n)[qt],a[qt]=t,o=Co(n,1),a[qt]=l);for(c in gr)l=i[c],u=o[c],l!==u&&r.indexOf(c)<0&&(d=Mn(l),_=Mn(u),h=d!==_?Hr(n,c,l,_):parseFloat(l),f=parseFloat(u),e._pt=new Vn(e._pt,o,c,h,f-h,_h),e._pt.u=_||0,e._props.push(c));dp(o,i)};Gn("padding,margin,Width,Radius",function(s,e){var t="Top",n="Right",i="Bottom",r="Left",a=(e<3?[t,n,i,r]:[t+r,t+n,i+n,i+r]).map(function(o){return e<2?s+o:"border"+o+s});Qc[e>1?"border"+s:s]=function(o,c,l,u,h){var f,d;if(arguments.length<4)return f=a.map(function(_){return ir(o,_,l)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},a.forEach(function(_,b){return d[_]=f[b]=f[b]||f[(b-1)/2|0]}),o.init(c,d,h)}});var Cg={name:"css",register:xh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,r){var a=this._props,o=e.style,c=n.vars.startAt,l,u,h,f,d,_,b,m,g,S,y,M,L,P,w,I,B;pf||xh(),this.styles=this.styles||Sg(e),I=this.styles.props,this.tween=n;for(b in t)if(b!=="autoRound"&&(u=t[b],!(Zn[b]&&hg(b,t,n,i,e,r)))){if(d=typeof u,_=Qc[b],d==="function"&&(u=u.call(n,i,e,r),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=To(u)),_)_(this,e,b,u,n)&&(w=1);else if(b.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(b)+"").trim(),u+="",Or.lastIndex=0,Or.test(l)||(m=Mn(l),g=Mn(u),g?m!==g&&(l=Hr(e,b,l,g)+g):m&&(u+=m)),this.add(o,"setProperty",l,u,i,r,0,0,b),a.push(b),I.push(b,0,o[b]);else if(d!=="undefined"){if(c&&b in c?(l=typeof c[b]=="function"?c[b].call(n,i,e,r):c[b],mn(l)&&~l.indexOf("random(")&&(l=To(l)),Mn(l+"")||l==="auto"||(l+=ri.units[b]||Mn(ir(e,b))||""),(l+"").charAt(1)==="="&&(l=ir(e,b))):l=ir(e,b),f=parseFloat(l),S=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),S&&(u=u.substr(2)),h=parseFloat(u),b in Bi&&(b==="autoAlpha"&&(f===1&&ir(e,"visibility")==="hidden"&&h&&(f=0),I.push("visibility",0,o.visibility),Lr(this,o,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),b!=="scale"&&b!=="transform"&&(b=Bi[b],~b.indexOf(",")&&(b=b.split(",")[0]))),y=b in gr,y){if(this.styles.save(b),B=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=ii(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var v=e.style.perspective;e.style.perspective=u,u=ii(e,"perspective"),v?e.style.perspective=v:zr(e,"perspective")}h=parseFloat(u)}if(M||(L=e._gsap,L.renderTransform&&!t.parseTransform||Co(e,t.parseTransform),P=t.smoothOrigin!==!1&&L.smooth,M=this._pt=new Vn(this._pt,o,qt,0,1,L.renderTransform,L,0,-1),M.dep=1),b==="scale")this._pt=new Vn(this._pt,L,"scaleY",L.scaleY,(S?sa(L.scaleY,S+h):h)-L.scaleY||0,_h),this._pt.u=0,a.push("scaleY",b),b+="X";else if(b==="transformOrigin"){I.push(Wn,0,o[Wn]),u=TT(u),L.svg?vh(e,u,0,P,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==L.zOrigin&&Lr(this,L,"zOrigin",L.zOrigin,g),Lr(this,o,b,$c(l),$c(u)));continue}else if(b==="svgOrigin"){vh(e,u,1,P,0,this);continue}else if(b in wg){CT(this,L,b,f,S?sa(f,S+u):u);continue}else if(b==="smoothOrigin"){Lr(this,L,"smooth",L.smooth,u);continue}else if(b==="force3D"){L[b]=u;continue}else if(b==="transform"){PT(this,u,e);continue}}else b in o||(b=Aa(b)||b);if(y||(h||h===0)&&(f||f===0)&&!uT.test(u)&&b in o)m=(l+"").substr((f+"").length),h||(h=0),g=Mn(u)||(b in ri.units?ri.units[b]:m),m!==g&&(f=Hr(e,b,l,g)),this._pt=new Vn(this._pt,y?L:o,b,f,(S?sa(f,S+h):h)-f,!y&&(g==="px"||b==="zIndex")&&t.autoRound!==!1?pT:_h),this._pt.u=g||0,y&&B!==u?(this._pt.b=l,this._pt.e=B,this._pt.r=dT):m!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=fT);else if(b in o)ET.call(this,e,b,l,S?S+u:u);else if(b in e)this.add(e,b,l||e[b],S?S+u:u,i,r);else if(b!=="parseTransform"){rf(b,u);continue}y||(b in o?I.push(b,0,o[b]):typeof e[b]=="function"?I.push(b,2,e[b]()):I.push(b,1,l||e[b])),a.push(b)}}w&&_g(this)},render:function(e,t){if(t.tween._time||!mf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:ir,aliases:Bi,getSetter:function(e,t,n){var i=Bi[t];return i&&i.indexOf(",")<0&&(t=i),t in gr&&t!==Wn&&(e._gsap.x||ir(e,"x"))?n&&sp===n?t==="scale"?bT:_T:(sp=n||{})&&(t==="scale"?xT:vT):e.style&&!ef(e.style[t])?mT:~t.indexOf("-")?gT:ff(e,t)},core:{_removeProperty:zr,_getMatrix:_f}};Xn.utils.checkPrefix=Aa;Xn.core.getStyleSaver=Sg;(function(s,e,t,n){var i=Gn(s+","+e+","+t,function(r){gr[r]=1});Gn(e,function(r){ri.units[r]="deg",wg[r]=1}),Bi[i[13]]=s+","+e,Gn(n,function(r){var a=r.split(":");Bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ri.units[s]="px"});Xn.registerPlugin(Cg);var ls=Xn.registerPlugin(Cg)||Xn;ls.core.Tween;function LT(s,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function DT(s,e,t){return e&&LT(s.prototype,e),s}/*!
 * Observer 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var gn,Uc,ei,Dr,Ir,ca,Pg,ss,la,Lg,ur,Mi,Dg,Ig=function(){return gn||typeof window<"u"&&(gn=window.gsap)&&gn.registerPlugin&&gn},Ug=1,ea=[],pt=[],Gi=[],oo=Date.now,yh=function(e,t){return t},IT=function(){var e=la.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,pt),i.push.apply(i,Gi),pt=n,Gi=i,yh=function(a,o){return t[a](o)}},Fr=function(e,t){return~Gi.indexOf(e)&&Gi[Gi.indexOf(e)+1][t]},co=function(e){return!!~Lg.indexOf(e)},Cn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:i!==!1,capture:!!r})},Rn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},hc="scrollLeft",fc="scrollTop",Sh=function(){return ur&&ur.isPressed||pt.cache++},el=function(e,t){var n=function i(r){if(r||r===0){Ug&&(ei.history.scrollRestoration="manual");var a=ur&&ur.isPressed;r=i.v=Math.round(r)||(ur&&ur.iOS?1:0),e(r),i.cacheID=pt.cache,a&&yh("ss",r)}else(t||pt.cache!==i.cacheID||yh("ref"))&&(i.cacheID=pt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Nn={s:hc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:el(function(s){return arguments.length?ei.scrollTo(s,on.sc()):ei.pageXOffset||Dr[hc]||Ir[hc]||ca[hc]||0})},on={s:fc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Nn,sc:el(function(s){return arguments.length?ei.scrollTo(Nn.sc(),s):ei.pageYOffset||Dr[fc]||Ir[fc]||ca[fc]||0})},kn=function(e,t){return(t&&t._ctx&&t._ctx.selector||gn.utils.toArray)(e)[0]||(typeof e=="string"&&gn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},UT=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Gr=function(e,t){var n=t.s,i=t.sc;co(e)&&(e=Dr.scrollingElement||Ir);var r=pt.indexOf(e),a=i===on.sc?1:2;!~r&&(r=pt.push(e)-1),pt[r+a]||Cn(e,"scroll",Sh);var o=pt[r+a],c=o||(pt[r+a]=el(Fr(e,n),!0)||(co(e)?i:el(function(l){return arguments.length?e[n]=l:e[n]})));return c.target=e,o||(c.smooth=gn.getProperty(e,"scrollBehavior")==="smooth"),c},Mh=function(e,t,n){var i=e,r=e,a=oo(),o=a,c=t||50,l=Math.max(500,c*3),u=function(_,b){var m=oo();b||m-a>c?(r=i,i=_,o=a,a=m):n?i+=_:i=r+(_-r)/(m-o)*(a-o)},h=function(){r=i=n?0:i,o=a=0},f=function(_){var b=o,m=r,g=oo();return(_||_===0)&&_!==i&&u(_),a===o||g-o>l?0:(i+(n?m:-m))/((n?g:a)-b)*1e3};return{update:u,reset:h,getVelocity:f}},Va=function(e,t){return t&&!e._gsapAllow&&e.cancelable!==!1&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},pp=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Ng=function(){la=gn.core.globals().ScrollTrigger,la&&la.core&&IT()},Og=function(e){return gn=e||Ig(),!Uc&&gn&&typeof document<"u"&&document.body&&(ei=window,Dr=document,Ir=Dr.documentElement,ca=Dr.body,Lg=[ei,Dr,Ir,ca],gn.utils.clamp,Dg=gn.core.context||function(){},ss="onpointerenter"in ca?"pointer":"mouse",Pg=$t.isTouch=ei.matchMedia&&ei.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ei||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Mi=$t.eventTypes=("ontouchstart"in Ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ug=0},500),Uc=1),la||Ng(),Uc};Nn.op=on;pt.cache=0;var $t=function(){function s(t){this.init(t)}var e=s.prototype;return e.init=function(n){Uc||Og(gn)||console.warn("Please gsap.registerPlugin(Observer)"),la||Ng();var i=n.tolerance,r=n.dragMinimum,a=n.type,o=n.target,c=n.lineHeight,l=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,_=n.wheelSpeed,b=n.event,m=n.onDragStart,g=n.onDragEnd,S=n.onDrag,y=n.onPress,M=n.onRelease,L=n.onRight,P=n.onLeft,w=n.onUp,I=n.onDown,B=n.onChangeX,v=n.onChangeY,R=n.onChange,F=n.onToggleX,j=n.onToggleY,X=n.onHover,ne=n.onHoverEnd,W=n.onMove,ee=n.ignoreCheck,K=n.isNormalizer,de=n.onGestureStart,U=n.onGestureEnd,xe=n.onWheel,Oe=n.onEnable,We=n.onDisable,te=n.onClick,oe=n.scrollSpeed,he=n.capture,ge=n.allowClicks,Re=n.lockAxis,Ce=n.onLockAxis;this.target=o=kn(o)||Ir,this.vars=n,d&&(d=gn.utils.toArray(d)),i=i||1e-9,r=r||0,_=_||1,oe=oe||1,a=a||"wheel,touch,pointer",l=l!==!1,c||(c=parseFloat(ei.getComputedStyle(ca).lineHeight)||22);var Qe,qe,Ge,N,ft,Xe,Ke,G=this,it=0,He=0,D=n.passive||!u&&n.passive!==!1,T=Gr(o,Nn),Z=Gr(o,on),re=T(),fe=Z(),ie=~a.indexOf("touch")&&!~a.indexOf("pointer")&&Mi[0]==="pointerdown",Le=co(o),_e=o.ownerDocument||Dr,Me=[0,0,0],je=[0,0,0],me=0,Ae=function(){return me=oo()},Pe=function(Ue,_t){return(G.event=Ue)&&d&&UT(Ue.target,d)||_t&&ie&&Ue.pointerType!=="touch"||ee&&ee(Ue,_t)},Ie=function(){G._vx.reset(),G._vy.reset(),qe.pause(),h&&h(G)},ve=function(){var Ue=G.deltaX=pp(Me),_t=G.deltaY=pp(je),Ee=Math.abs(Ue)>=i,Ve=Math.abs(_t)>=i;R&&(Ee||Ve)&&R(G,Ue,_t,Me,je),Ee&&(L&&G.deltaX>0&&L(G),P&&G.deltaX<0&&P(G),B&&B(G),F&&G.deltaX<0!=it<0&&F(G),it=G.deltaX,Me[0]=Me[1]=Me[2]=0),Ve&&(I&&G.deltaY>0&&I(G),w&&G.deltaY<0&&w(G),v&&v(G),j&&G.deltaY<0!=He<0&&j(G),He=G.deltaY,je[0]=je[1]=je[2]=0),(N||Ge)&&(W&&W(G),Ge&&(m&&Ge===1&&m(G),S&&S(G),Ge=0),N=!1),Xe&&!(Xe=!1)&&Ce&&Ce(G),ft&&(xe(G),ft=!1),Qe=0},$e=function(Ue,_t,Ee){Me[Ee]+=Ue,je[Ee]+=_t,G._vx.update(Ue),G._vy.update(_t),l?Qe||(Qe=requestAnimationFrame(ve)):ve()},Be=function(Ue,_t){Re&&!Ke&&(G.axis=Ke=Math.abs(Ue)>Math.abs(_t)?"x":"y",Xe=!0),Ke!=="y"&&(Me[2]+=Ue,G._vx.update(Ue,!0)),Ke!=="x"&&(je[2]+=_t,G._vy.update(_t,!0)),l?Qe||(Qe=requestAnimationFrame(ve)):ve()},Ye=function(Ue){if(!Pe(Ue,1)){Ue=Va(Ue,u);var _t=Ue.clientX,Ee=Ue.clientY,Ve=_t-G.x,ze=Ee-G.y,Ze=G.isDragging;G.x=_t,G.y=Ee,(Ze||(Ve||ze)&&(Math.abs(G.startX-_t)>=r||Math.abs(G.startY-Ee)>=r))&&(Ge||(Ge=Ze?2:1),Ze||(G.isDragging=!0),Be(Ve,ze))}},z=G.onPress=function(Fe){Pe(Fe,1)||Fe&&Fe.button||(G.axis=Ke=null,qe.pause(),G.isPressed=!0,Fe=Va(Fe),it=He=0,G.startX=G.x=Fe.clientX,G.startY=G.y=Fe.clientY,G._vx.reset(),G._vy.reset(),Cn(K?o:_e,Mi[1],Ye,D,!0),G.deltaX=G.deltaY=0,y&&y(G))},le=G.onRelease=function(Fe){if(!Pe(Fe,1)){Rn(K?o:_e,Mi[1],Ye,!0);var Ue=!isNaN(G.y-G.startY),_t=G.isDragging,Ee=_t&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ve=Va(Fe);!Ee&&Ue&&(G._vx.reset(),G._vy.reset(),u&&ge&&gn.delayedCall(.08,function(){if(oo()-me>300&&!Fe.defaultPrevented){if(Fe.target.click)Fe.target.click();else if(_e.createEvent){var ze=_e.createEvent("MouseEvents");ze.initMouseEvent("click",!0,!0,ei,1,Ve.screenX,Ve.screenY,Ve.clientX,Ve.clientY,!1,!1,!1,!1,0,null),Fe.target.dispatchEvent(ze)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,h&&_t&&!K&&qe.restart(!0),Ge&&ve(),g&&_t&&g(G),M&&M(G,Ee)}},H=function(Ue){return Ue.touches&&Ue.touches.length>1&&(G.isGesturing=!0)&&de(Ue,G.isDragging)},se=function(){return(G.isGesturing=!1)||U(G)},ye=function(Ue){if(!Pe(Ue)){var _t=T(),Ee=Z();$e((_t-re)*oe,(Ee-fe)*oe,1),re=_t,fe=Ee,h&&qe.restart(!0)}},Se=function(Ue){if(!Pe(Ue)){Ue=Va(Ue,u),xe&&(ft=!0);var _t=(Ue.deltaMode===1?c:Ue.deltaMode===2?ei.innerHeight:1)*_;$e(Ue.deltaX*_t,Ue.deltaY*_t,0),h&&!K&&qe.restart(!0)}},et=function(Ue){if(!Pe(Ue)){var _t=Ue.clientX,Ee=Ue.clientY,Ve=_t-G.x,ze=Ee-G.y;G.x=_t,G.y=Ee,N=!0,h&&qe.restart(!0),(Ve||ze)&&Be(Ve,ze)}},Ct=function(Ue){G.event=Ue,X(G)},Ot=function(Ue){G.event=Ue,ne(G)},ct=function(Ue){return Pe(Ue)||Va(Ue,u)&&te(G)};qe=G._dc=gn.delayedCall(f||.25,Ie).pause(),G.deltaX=G.deltaY=0,G._vx=Mh(0,50,!0),G._vy=Mh(0,50,!0),G.scrollX=T,G.scrollY=Z,G.isDragging=G.isGesturing=G.isPressed=!1,Dg(this),G.enable=function(Fe){return G.isEnabled||(Cn(Le?_e:o,"scroll",Sh),a.indexOf("scroll")>=0&&Cn(Le?_e:o,"scroll",ye,D,he),a.indexOf("wheel")>=0&&Cn(o,"wheel",Se,D,he),(a.indexOf("touch")>=0&&Pg||a.indexOf("pointer")>=0)&&(Cn(o,Mi[0],z,D,he),Cn(_e,Mi[2],le),Cn(_e,Mi[3],le),ge&&Cn(o,"click",Ae,!0,!0),te&&Cn(o,"click",ct),de&&Cn(_e,"gesturestart",H),U&&Cn(_e,"gestureend",se),X&&Cn(o,ss+"enter",Ct),ne&&Cn(o,ss+"leave",Ot),W&&Cn(o,ss+"move",et)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=N=Ge=!1,G._vx.reset(),G._vy.reset(),re=T(),fe=Z(),Fe&&Fe.type&&z(Fe),Oe&&Oe(G)),G},G.disable=function(){G.isEnabled&&(ea.filter(function(Fe){return Fe!==G&&co(Fe.target)}).length||Rn(Le?_e:o,"scroll",Sh),G.isPressed&&(G._vx.reset(),G._vy.reset(),Rn(K?o:_e,Mi[1],Ye,!0)),Rn(Le?_e:o,"scroll",ye,he),Rn(o,"wheel",Se,he),Rn(o,Mi[0],z,he),Rn(_e,Mi[2],le),Rn(_e,Mi[3],le),Rn(o,"click",Ae,!0),Rn(o,"click",ct),Rn(_e,"gesturestart",H),Rn(_e,"gestureend",se),Rn(o,ss+"enter",Ct),Rn(o,ss+"leave",Ot),Rn(o,ss+"move",et),G.isEnabled=G.isPressed=G.isDragging=!1,We&&We(G))},G.kill=G.revert=function(){G.disable();var Fe=ea.indexOf(G);Fe>=0&&ea.splice(Fe,1),ur===G&&(ur=0)},ea.push(G),K&&co(o)&&(ur=G),G.enable(b)},DT(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();$t.version="3.15.0";$t.create=function(s){return new $t(s)};$t.register=Og;$t.getAll=function(){return ea.slice()};$t.getById=function(s){return ea.filter(function(e){return e.vars.id===s})[0]};Ig()&&gn.registerPlugin($t);/*!
 * ScrollTrigger 3.15.0
 * https://gsap.com
 *
 * @license Copyright 2008-2026, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var De,Ys,dt,Pt,Jn,Rt,bf,tl,Po,lo,Ka,dc,yn,dl,Eh,Dn,mp,gp,Ks,Fg,lu,kg,Ln,Th,Bg,zg,Ar,wh,xf,ua,vf,uo,Ah,uu,pc=1,Sn=Date.now,hu=Sn(),gi=0,Za=0,_p=function(e,t,n){var i=Kn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},bp=function(e,t){return t&&(!Kn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},NT=function s(){return Za&&requestAnimationFrame(s)},xp=function(){return dl=1},vp=function(){return dl=0},Ii=function(e){return e},Ja=function(e){return Math.round(e*1e5)/1e5||0},Hg=function(){return typeof window<"u"},Gg=function(){return De||Hg()&&(De=window.gsap)&&De.registerPlugin&&De},Ss=function(e){return!!~bf.indexOf(e)},Vg=function(e){return(e==="Height"?vf:dt["inner"+e])||Jn["client"+e]||Rt["client"+e]},Wg=function(e){return Fr(e,"getBoundingClientRect")||(Ss(e)?function(){return Bc.width=dt.innerWidth,Bc.height=vf,Bc}:function(){return ar(e)})},OT=function(e,t,n){var i=n.d,r=n.d2,a=n.a;return(a=Fr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Vg(r):e["client"+r])||0}},FT=function(e,t){return!t||~Gi.indexOf(e)?Wg(e):function(){return Bc}},zi=function(e,t){var n=t.s,i=t.d2,r=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Fr(e,n))?a()-Wg(e)()[r]:Ss(e)?(Jn[n]||Rt[n])-Vg(i):e[n]-e["offset"+i])},mc=function(e,t){for(var n=0;n<Ks.length;n+=3)(!t||~t.indexOf(Ks[n+1]))&&e(Ks[n],Ks[n+1],Ks[n+2])},Kn=function(e){return typeof e=="string"},En=function(e){return typeof e=="function"},Qa=function(e){return typeof e=="number"},as=function(e){return typeof e=="object"},Wa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Xs=function(e,t,n){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e,n)}):t(e,n);i&&i.totalTime&&(e.callbackAnimation=i)}},qs=Math.abs,Xg="left",qg="top",yf="right",Sf="bottom",_s="width",bs="height",ho="Right",fo="Left",po="Top",mo="Bottom",nn="padding",ui="margin",Ra="Width",Mf="Height",an="px",hi=function(e){return dt.getComputedStyle(e.nodeType===Node.DOCUMENT_NODE?e.scrollingElement:e)},kT=function(e){var t=hi(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},yp=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ar=function(e,t){var n=t&&hi(e)[Eh]!=="matrix(1, 0, 0, 1, 0, 0)"&&De.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect?e.getBoundingClientRect():e.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},nl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},jg=function(e){var t=[],n=e.labels,i=e.duration(),r;for(r in n)t.push(n[r]/i);return t},BT=function(e){return function(t){return De.utils.snap(jg(e),t)}},Ef=function(e){var t=De.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,r){return i-r});return n?function(i,r,a){a===void 0&&(a=.001);var o;if(!r)return t(i);if(r>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,r,a){a===void 0&&(a=.001);var o=t(i);return!r||Math.abs(o-i)<a||o-i<0==r<0?o:t(r<0?i-e:i+e)}},zT=function(e){return function(t,n){return Ef(jg(e))(t,n.direction)}},gc=function(e,t,n,i){return n.split(",").forEach(function(r){return e(t,r,i)})},fn=function(e,t,n,i,r){return e.addEventListener(t,n,{passive:!i,capture:!!r})},hn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},_c=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Sp={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bc={toggleActions:"play",anticipatePin:0},il={top:0,left:0,center:.5,bottom:1,right:1},Nc=function(e,t){if(Kn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in il?il[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},xc=function(e,t,n,i,r,a,o,c){var l=r.startColor,u=r.endColor,h=r.fontSize,f=r.indent,d=r.fontWeight,_=Pt.createElement("div"),b=Ss(n)||Fr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,g=b?Rt:n.tagName==="IFRAME"?n.contentDocument.body:n,S=e.indexOf("start")!==-1,y=S?l:u,M="border-color:"+y+";font-size:"+h+";color:"+y+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||c)&&b?"fixed;":"absolute;"),(m||c||!b)&&(M+=(i===on?yf:Sf)+":"+(a+parseFloat(f))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),_._isStart=S,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=M,_.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(_,g.children[0]):g.appendChild(_),_._offset=_["offset"+i.op.d2],Oc(_,0,i,S),_},Oc=function(e,t,n,i){var r={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+a+Ra]=1,r["border"+o+Ra]=0,r[n.p]=t+"px",De.set(e,r)},ut=[],Rh={},Lo,Mp=function(){return Sn()-gi>34&&(Lo||(Lo=requestAnimationFrame(fr)))},js=function(){(!Ln||!Ln.isPressed||Ln.startX>Rt.clientWidth)&&(pt.cache++,Ln?Lo||(Lo=requestAnimationFrame(fr)):fr(),gi||Es("scrollStart"),gi=Sn())},fu=function(){zg=dt.innerWidth,Bg=dt.innerHeight},$a=function(e){pt.cache++,(e===!0||!yn&&!kg&&!Pt.fullscreenElement&&!Pt.webkitFullscreenElement&&(!Th||zg!==dt.innerWidth||Math.abs(dt.innerHeight-Bg)>dt.innerHeight*.25))&&tl.restart(!0)},Ms={},HT=[],Yg=function s(){return hn(ht,"scrollEnd",s)||fs(!0)},Es=function(e){return Ms[e]&&Ms[e].map(function(t){return t()})||HT},Yn=[],Kg=function(e){for(var t=0;t<Yn.length;t+=5)(!e||Yn[t+4]&&Yn[t+4].query===e)&&(Yn[t].style.cssText=Yn[t+1],Yn[t].getBBox&&Yn[t].setAttribute("transform",Yn[t+2]||""),Yn[t+3].uncache=1)},Zg=function(){return pt.forEach(function(e){return En(e)&&++e.cacheID&&(e.rec=e())})},Tf=function(e,t){var n;for(Dn=0;Dn<ut.length;Dn++)n=ut[Dn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));uo=!0,t&&Kg(t),t||Es("revert")},Jg=function(e,t){pt.cache++,(t||!In)&&pt.forEach(function(n){return En(n)&&n.cacheID++&&(n.rec=0)}),Kn(e)&&(dt.history.scrollRestoration=xf=e)},In,xs=0,Ep,GT=function(){if(Ep!==xs){var e=Ep=xs;requestAnimationFrame(function(){return e===xs&&fs(!0)})}},Qg=function(){Rt.appendChild(ua),vf=!Ln&&ua.offsetHeight||dt.innerHeight,Rt.removeChild(ua)},Tp=function(e){return Po(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},fs=function(e,t){if(Jn=Pt.documentElement,Rt=Pt.body,bf=[dt,Pt,Jn,Rt],gi&&!e&&!uo){fn(ht,"scrollEnd",Yg);return}Qg(),In=ht.isRefreshing=!0,uo||Zg();var n=Es("refreshInit");Fg&&ht.sort(),t||Tf(),pt.forEach(function(i){En(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ut.slice(0).forEach(function(i){return i.refresh()}),uo=!1,ut.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-a),i.refresh()}}),Ah=1,Tp(!0),ut.forEach(function(i){var r=zi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>r,o=i._startClamp&&i.start>=r;(a||o)&&i.setPositions(o?r-1:i.start,a?Math.max(o?r:i.start+1,r):i.end,!0)}),Tp(!1),Ah=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),pt.forEach(function(i){En(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Jg(xf,1),tl.pause(),xs++,In=2,fr(2),ut.forEach(function(i){return En(i.vars.onRefresh)&&i.vars.onRefresh(i)}),In=ht.isRefreshing=!1,Es("refresh")},Ch=0,Fc=1,go,fr=function(e){if(e===2||!In&&!uo){ht.isUpdating=!0,go&&go.update(0);var t=ut.length,n=Sn(),i=n-hu>=50,r=t&&ut[0].scroll();if(Fc=Ch>r?-1:1,In||(Ch=r),i&&(gi&&!dl&&n-gi>200&&(gi=0,Es("scrollEnd")),Ka=hu,hu=n),Fc<0){for(Dn=t;Dn-- >0;)ut[Dn]&&ut[Dn].update(0,i);Fc=1}else for(Dn=0;Dn<t;Dn++)ut[Dn]&&ut[Dn].update(0,i);ht.isUpdating=!1}Lo=0},Ph=[Xg,qg,Sf,yf,ui+mo,ui+ho,ui+po,ui+fo,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],kc=Ph.concat([_s,bs,"boxSizing","max"+Ra,"max"+Mf,"position",ui,nn,nn+po,nn+ho,nn+mo,nn+fo]),VT=function(e,t,n){ha(n);var i=e._gsap;if(i.spacerIsNative)ha(i.spacerState);else if(e._gsap.swappedIn){var r=t.parentNode;r&&(r.insertBefore(e,t),r.removeChild(t))}e._gsap.swappedIn=!1},du=function(e,t,n,i){if(!e._gsap.swappedIn){for(var r=Ph.length,a=t.style,o=e.style,c;r--;)c=Ph[r],a[c]=n[c];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[Sf]=o[yf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[_s]=nl(e,Nn)+an,a[bs]=nl(e,on)+an,a[nn]=o[ui]=o[qg]=o[Xg]="0",ha(i),o[_s]=o["max"+Ra]=n[_s],o[bs]=o["max"+Mf]=n[bs],o[nn]=n[nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},WT=/([A-Z])/g,ha=function(e){if(e){var t=e.t.style,n=e.length,i=0,r,a;for((e.t._gsap||De.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],r=e[i],a?t[r]=a:t[r]&&t.removeProperty(r.replace(WT,"-$1").toLowerCase())}},vc=function(e){for(var t=kc.length,n=e.style,i=[],r=0;r<t;r++)i.push(kc[r],n[kc[r]]);return i.t=e,i},XT=function(e,t,n){for(var i=[],r=e.length,a=n?8:0,o;a<r;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Bc={left:0,top:0},wp=function(e,t,n,i,r,a,o,c,l,u,h,f,d,_){En(e)&&(e=e(c)),Kn(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?Nc("0"+e.substr(3),n):0));var b=d?d.time():0,m,g,S;if(d&&d.seek(0),isNaN(e)||(e=+e),Qa(e))d&&(e=De.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),o&&Oc(o,n,i,!0);else{En(t)&&(t=t(c));var y=(e||"0").split(" "),M,L,P,w;S=kn(t,c)||Rt,M=ar(S)||{},(!M||!M.left&&!M.top)&&hi(S).display==="none"&&(w=S.style.display,S.style.display="block",M=ar(S),w?S.style.display=w:S.style.removeProperty("display")),L=Nc(y[0],M[i.d]),P=Nc(y[1]||"0",n),e=M[i.p]-l[i.p]-u+L+r-P,o&&Oc(o,P,i,n-P<20||o._isStart&&P>20),n-=n-P}if(_&&(c[_]=e||-.001,e<0&&(e=0)),a){var I=e+n,B=a._isStart;m="scroll"+i.d2,Oc(a,I,i,B&&I>20||!B&&(h?Math.max(Rt[m],Jn[m]):a.parentNode[m])<=I+1),h&&(l=ar(o),h&&(a.style[i.op.p]=l[i.op.p]-i.op.m-a._offset+an))}return d&&S&&(m=ar(S),d.seek(f),g=ar(S),d._caScrollDist=m[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(b),d?e:Math.round(e)},qT=/(webkit|moz|length|cssText|inset)/i,Ap=function(e,t,n,i){if(e.parentNode!==t){var r=e.style,a,o;if(t===Rt){e._stOrig=r.cssText,o=hi(e);for(a in o)!+a&&!qT.test(a)&&o[a]&&typeof r[a]=="string"&&a!=="0"&&(r[a]=o[a]);r.top=n,r.left=i}else r.cssText=e._stOrig;De.core.getCache(e).uncache=1,t.appendChild(e)}},$g=function(e,t,n){var i=t,r=i;return function(a){var o=Math.round(e());return o!==i&&o!==r&&Math.abs(o-i)>3&&Math.abs(o-r)>3&&(a=o,n&&n()),r=i,i=Math.round(a),i}},yc=function(e,t,n){var i={};i[t.p]="+="+n,De.set(e,i)},Rp=function(e,t){var n=Gr(e,t),i="_scroll"+t.p2,r=function a(o,c,l,u,h){var f=a.tween,d=c.onComplete,_={};l=l||n();var b=$g(n,l,function(){f.kill(),a.tween=0});return h=u&&h||0,u=u||o-l,f&&f.kill(),c[i]=o,c.inherit=!1,c.modifiers=_,_[i]=function(){return b(l+u*f.ratio+h*f.ratio*f.ratio)},c.onUpdate=function(){pt.cache++,a.tween&&fr()},c.onComplete=function(){a.tween=0,d&&d.call(f)},f=a.tween=De.to(e,c),f};return e[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},fn(e,"wheel",n.wheelHandler),ht.isTouch&&fn(e,"touchmove",n.wheelHandler),r},ht=function(){function s(t,n){Ys||s.register(De)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),wh(this),this.init(t,n)}var e=s.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Za){this.update=this.refresh=this.kill=Ii;return}n=yp(Kn(n)||Qa(n)||n.nodeType?{trigger:n}:n,bc);var r=n,a=r.onUpdate,o=r.toggleClass,c=r.id,l=r.onToggle,u=r.onRefresh,h=r.scrub,f=r.trigger,d=r.pin,_=r.pinSpacing,b=r.invalidateOnRefresh,m=r.anticipatePin,g=r.onScrubComplete,S=r.onSnapComplete,y=r.once,M=r.snap,L=r.pinReparent,P=r.pinSpacer,w=r.containerAnimation,I=r.fastScrollEnd,B=r.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Nn:on,R=!h&&h!==0,F=kn(n.scroller||dt),j=De.core.getCache(F),X=Ss(F),ne=("pinType"in n?n.pinType:Fr(F,"pinType")||X&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],ee=R&&n.toggleActions.split(" "),K="markers"in n?n.markers:bc.markers,de=X?0:parseFloat(hi(F)["border"+v.p2+Ra])||0,U=this,xe=n.onRefreshInit&&function(){return n.onRefreshInit(U)},Oe=OT(F,X,v),We=FT(F,X),te=0,oe=0,he=0,ge=Gr(F,v),Re,Ce,Qe,qe,Ge,N,ft,Xe,Ke,G,it,He,D,T,Z,re,fe,ie,Le,_e,Me,je,me,Ae,Pe,Ie,ve,$e,Be,Ye,z,le,H,se,ye,Se,et,Ct,Ot;if(U._startClamp=U._endClamp=!1,U._dir=v,m*=45,U.scroller=F,U.scroll=w?w.time.bind(w):ge,qe=ge(),U.vars=n,i=i||n.animation,"refreshPriority"in n&&(Fg=1,n.refreshPriority===-9999&&(go=U)),j.tweenScroll=j.tweenScroll||{top:Rp(F,on),left:Rp(F,Nn)},U.tweenTo=Re=j.tweenScroll[v.p],U.scrubDuration=function(Ee){H=Qa(Ee)&&Ee,H?le?le.duration(Ee):le=De.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:H,paused:!0,onComplete:function(){return g&&g(U)}}):(le&&le.progress(1).kill(),le=0)},i&&(i.vars.lazy=!1,i._initted&&!U.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),U.animation=i.pause(),i.scrollTrigger=U,U.scrubDuration(h),Ye=0,c||(c=i.vars.id)),M&&((!as(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Rt.style&&De.set(X?[Rt,Jn]:F,{scrollBehavior:"auto"}),pt.forEach(function(Ee){return En(Ee)&&Ee.target===(X?Pt.scrollingElement||Jn:F)&&(Ee.smooth=!1)}),Qe=En(M.snapTo)?M.snapTo:M.snapTo==="labels"?BT(i):M.snapTo==="labelsDirectional"?zT(i):M.directional!==!1?function(Ee,Ve){return Ef(M.snapTo)(Ee,Sn()-oe<500?0:Ve.direction)}:De.utils.snap(M.snapTo),se=M.duration||{min:.1,max:2},se=as(se)?lo(se.min,se.max):lo(se,se),ye=De.delayedCall(M.delay||H/2||.1,function(){var Ee=ge(),Ve=Sn()-oe<500,ze=Re.tween;if((Ve||Math.abs(U.getVelocity())<10)&&!ze&&!dl&&te!==Ee){var Ze=(Ee-N)/T,zt=i&&!R?i.totalProgress():Ze,tt=Ve?0:(zt-z)/(Sn()-Ka)*1e3||0,Ft=De.utils.clamp(-Ze,1-Ze,qs(tt/2)*tt/.185),Vt=Ze+(M.inertia===!1?0:Ft),It,wt,Et=M,wn=Et.onStart,St=Et.onInterrupt,C=Et.onComplete;if(It=Qe(Vt,U),Qa(It)||(It=Vt),wt=Math.max(0,Math.round(N+It*T)),Ee<=ft&&Ee>=N&&wt!==Ee){if(ze&&!ze._initted&&ze.data<=qs(wt-Ee))return;M.inertia===!1&&(Ft=It-Ze),Re(wt,{duration:se(qs(Math.max(qs(Vt-zt),qs(It-zt))*.185/tt/.05||0)),ease:M.ease||"power3",data:qs(wt-Ee),onInterrupt:function(){return ye.restart(!0)&&St&&Xs(U,St)},onComplete:function(){U.update(),te=ge(),i&&!R&&(le?le.resetTo("totalProgress",It,i._tTime/i._tDur):i.progress(It)),Ye=z=i&&!R?i.totalProgress():U.progress,S&&S(U),C&&Xs(U,C)}},Ee,Ft*T,wt-Ee-Ft*T),wn&&Xs(U,wn,Re.tween)}}else U.isActive&&te!==Ee&&ye.restart(!0)}).pause()),c&&(Rh[c]=U),f=U.trigger=kn(f||d!==!0&&d),Ot=f&&f._gsap&&f._gsap.stRevert,Ot&&(Ot=Ot(U)),d=d===!0?f:kn(d),Kn(o)&&(o={targets:f,className:o}),d&&(_===!1||_===ui||(_=!_&&d.parentNode&&d.parentNode.style&&hi(d.parentNode).display==="flex"?!1:nn),U.pin=d,Ce=De.core.getCache(d),Ce.spacer?Z=Ce.pinState:(P&&(P=kn(P),P&&!P.nodeType&&(P=P.current||P.nativeElement),Ce.spacerIsNative=!!P,P&&(Ce.spacerState=vc(P))),Ce.spacer=ie=P||Pt.createElement("div"),ie.classList.add("pin-spacer"),c&&ie.classList.add("pin-spacer-"+c),Ce.pinState=Z=vc(d)),n.force3D!==!1&&De.set(d,{force3D:!0}),U.spacer=ie=Ce.spacer,Be=hi(d),Ae=Be[_+v.os2],_e=De.getProperty(d),Me=De.quickSetter(d,v.a,an),du(d,ie,Be),fe=vc(d)),K){He=as(K)?yp(K,Sp):Sp,G=xc("scroller-start",c,F,v,He,0),it=xc("scroller-end",c,F,v,He,0,G),Le=G["offset"+v.op.d2];var ct=kn(Fr(F,"content")||F);Xe=this.markerStart=xc("start",c,ct,v,He,Le,0,w),Ke=this.markerEnd=xc("end",c,ct,v,He,Le,0,w),w&&(Ct=De.quickSetter([Xe,Ke],v.a,an)),!ne&&!(Gi.length&&Fr(F,"fixedMarkers")===!0)&&(kT(X?Rt:F),De.set([G,it],{force3D:!0}),Ie=De.quickSetter(G,v.a,an),$e=De.quickSetter(it,v.a,an))}if(w){var Fe=w.vars.onUpdate,Ue=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){U.update(0,0,1),Fe&&Fe.apply(w,Ue||[])})}if(U.previous=function(){return ut[ut.indexOf(U)-1]},U.next=function(){return ut[ut.indexOf(U)+1]},U.revert=function(Ee,Ve){if(!Ve)return U.kill(!0);var ze=Ee!==!1||!U.enabled,Ze=yn;ze!==U.isReverted&&(ze&&(Se=Math.max(ge(),U.scroll.rec||0),he=U.progress,et=i&&i.progress()),Xe&&[Xe,Ke,G,it].forEach(function(zt){return zt.style.display=ze?"none":"block"}),ze&&(yn=U,U.update(ze)),d&&(!L||!U.isActive)&&(ze?VT(d,ie,Z):du(d,ie,hi(d),Pe)),ze||U.update(ze),yn=Ze,U.isReverted=ze)},U.refresh=function(Ee,Ve,ze,Ze){if(!((yn||!U.enabled)&&!Ve)){if(d&&Ee&&gi){fn(s,"scrollEnd",Yg);return}!In&&xe&&xe(U),yn=U,Re.tween&&!ze&&(Re.tween.kill(),Re.tween=0),le&&le.pause(),b&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ue){return ue.vars.immediateRender&&ue.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),U.isReverted||U.revert(!0,!0),U._subPinOffset=!1;var zt=Oe(),tt=We(),Ft=w?w.duration():zi(F,v),Vt=T<=.01||!T,It=0,wt=Ze||0,Et=as(ze)?ze.end:n.end,wn=n.endTrigger||f,St=as(ze)?ze.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),C=U.pinnedContainer=n.pinnedContainer&&kn(n.pinnedContainer,U),p=f&&Math.max(0,ut.indexOf(U))||0,x=p,E,A,k,O,V,J,Q,$,Y,ce,pe,be,we;for(K&&as(ze)&&(be=De.getProperty(G,v.p),we=De.getProperty(it,v.p));x-- >0;)J=ut[x],J.end||J.refresh(0,1)||(yn=U),Q=J.pin,Q&&(Q===f||Q===d||Q===C)&&!J.isReverted&&(ce||(ce=[]),ce.unshift(J),J.revert(!0,!0)),J!==ut[x]&&(p--,x--);for(En(St)&&(St=St(U)),St=_p(St,"start",U),N=wp(St,f,zt,v,ge(),Xe,G,U,tt,de,ne,Ft,w,U._startClamp&&"_startClamp")||(d?-.001:0),En(Et)&&(Et=Et(U)),Kn(Et)&&!Et.indexOf("+=")&&(~Et.indexOf(" ")?Et=(Kn(St)?St.split(" ")[0]:"")+Et:(It=Nc(Et.substr(2),zt),Et=Kn(St)?St:(w?De.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,N):N)+It,wn=f)),Et=_p(Et,"end",U),ft=Math.max(N,wp(Et||(wn?"100% 0":Ft),wn,zt,v,ge()+It,Ke,it,U,tt,de,ne,Ft,w,U._endClamp&&"_endClamp"))||-.001,It=0,x=p;x--;)J=ut[x]||{},Q=J.pin,Q&&J.start-J._pinPush<=N&&!w&&J.end>0&&(E=J.end-(U._startClamp?Math.max(0,J.start):J.start),(Q===f&&J.start-J._pinPush<N||Q===C)&&isNaN(St)&&(It+=E*(1-J.progress)),Q===d&&(wt+=E));if(N+=It,ft+=It,U._startClamp&&(U._startClamp+=It),U._endClamp&&!In&&(U._endClamp=ft||-.001,ft=Math.min(ft,zi(F,v))),T=ft-N||(N-=.01)&&.001,Vt&&(he=De.utils.clamp(0,1,De.utils.normalize(N,ft,Se))),U._pinPush=wt,Xe&&It&&(E={},E[v.a]="+="+It,C&&(E[v.p]="-="+ge()),De.set([Xe,Ke],E)),d&&!(Ah&&U.end>=zi(F,v)))E=hi(d),O=v===on,k=ge(),je=parseFloat(_e(v.a))+wt,!Ft&&ft>1&&(pe=(X?Pt.scrollingElement||Jn:F).style,pe={style:pe,value:pe["overflow"+v.a.toUpperCase()]},X&&hi(Rt)["overflow"+v.a.toUpperCase()]!=="scroll"&&(pe.style["overflow"+v.a.toUpperCase()]="scroll")),du(d,ie,E),fe=vc(d),A=ar(d,!0),$=ne&&Gr(F,O?Nn:on)(),_?(Pe=[_+v.os2,T+wt+an],Pe.t=ie,x=_===nn?nl(d,v)+T+wt:0,x&&(Pe.push(v.d,x+an),ie.style.flexBasis!=="auto"&&(ie.style.flexBasis=x+an)),ha(Pe),C&&ut.forEach(function(ue){ue.pin===C&&ue.vars.pinSpacing!==!1&&(ue._subPinOffset=!0)}),ne&&ge(Se)):(x=nl(d,v),x&&ie.style.flexBasis!=="auto"&&(ie.style.flexBasis=x+an)),ne&&(V={top:A.top+(O?k-N:$)+an,left:A.left+(O?$:k-N)+an,boxSizing:"border-box",position:"fixed"},V[_s]=V["max"+Ra]=Math.ceil(A.width)+an,V[bs]=V["max"+Mf]=Math.ceil(A.height)+an,V[ui]=V[ui+po]=V[ui+ho]=V[ui+mo]=V[ui+fo]="0",V[nn]=E[nn],V[nn+po]=E[nn+po],V[nn+ho]=E[nn+ho],V[nn+mo]=E[nn+mo],V[nn+fo]=E[nn+fo],re=XT(Z,V,L),In&&ge(0)),i?(Y=i._initted,lu(1),i.render(i.duration(),!0,!0),me=_e(v.a)-je+T+wt,ve=Math.abs(T-me)>1,ne&&ve&&re.splice(re.length-2,2),i.render(0,!0,!0),Y||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),lu(0)):me=T,pe&&(pe.value?pe.style["overflow"+v.a.toUpperCase()]=pe.value:pe.style.removeProperty("overflow-"+v.a));else if(f&&ge()&&!w)for(A=f.parentNode;A&&A!==Rt;)A._pinOffset&&(N-=A._pinOffset,ft-=A._pinOffset),A=A.parentNode;ce&&ce.forEach(function(ue){return ue.revert(!1,!0)}),U.start=N,U.end=ft,qe=Ge=In?Se:ge(),!w&&!In&&(qe<Se&&ge(Se),U.scroll.rec=0),U.revert(!1,!0),oe=Sn(),ye&&(te=-1,ye.restart(!0)),yn=0,i&&R&&(i._initted||et)&&i.progress()!==et&&i.progress(et||0,!0).render(i.time(),!0,!0),(Vt||he!==U.progress||w||b||i&&!i._initted)&&(i&&!R&&(i._initted||he||i.vars.immediateRender!==!1)&&i.totalProgress(w&&N<-.001&&!he?De.utils.normalize(N,ft,0):he,!0),U.progress=Vt||(qe-N)/T===he?0:he),d&&_&&(ie._pinOffset=Math.round(U.progress*me)),le&&le.invalidate(),isNaN(be)||(be-=De.getProperty(G,v.p),we-=De.getProperty(it,v.p),yc(G,v,be),yc(Xe,v,be-(Ze||0)),yc(it,v,we),yc(Ke,v,we-(Ze||0))),Vt&&!In&&U.update(),u&&!In&&!D&&(D=!0,u(U),D=!1)}},U.getVelocity=function(){return(ge()-Ge)/(Sn()-Ka)*1e3||0},U.endAnimation=function(){Wa(U.callbackAnimation),i&&(le?le.progress(1):i.paused()?R||Wa(i,U.direction<0,1):Wa(i,i.reversed()))},U.labelToScroll=function(Ee){return i&&i.labels&&(N||U.refresh()||N)+i.labels[Ee]/i.duration()*T||0},U.getTrailing=function(Ee){var Ve=ut.indexOf(U),ze=U.direction>0?ut.slice(0,Ve).reverse():ut.slice(Ve+1);return(Kn(Ee)?ze.filter(function(Ze){return Ze.vars.preventOverlaps===Ee}):ze).filter(function(Ze){return U.direction>0?Ze.end<=N:Ze.start>=ft})},U.update=function(Ee,Ve,ze){if(!(w&&!ze&&!Ee)){var Ze=In===!0?Se:U.scroll(),zt=Ee?0:(Ze-N)/T,tt=zt<0?0:zt>1?1:zt||0,Ft=U.progress,Vt,It,wt,Et,wn,St,C,p;if(Ve&&(Ge=qe,qe=w?ge():Ze,M&&(z=Ye,Ye=i&&!R?i.totalProgress():tt)),m&&d&&!yn&&!pc&&gi&&(!tt&&N<Ze+(Ze-Ge)/(Sn()-Ka)*m?tt=1e-4:tt===1&&ft>Ze+(Ze-Ge)/(Sn()-Ka)*m&&(tt=.9999)),tt!==Ft&&U.enabled){if(Vt=U.isActive=!!tt&&tt<1,It=!!Ft&&Ft<1,St=Vt!==It,wn=St||!!tt!=!!Ft,U.direction=tt>Ft?1:-1,U.progress=tt,wn&&!yn&&(wt=tt&&!Ft?0:tt===1?1:Ft===1?2:3,R&&(Et=!St&&ee[wt+1]!=="none"&&ee[wt+1]||ee[wt],p=i&&(Et==="complete"||Et==="reset"||Et in i))),B&&(St||p)&&(p||h||!i)&&(En(B)?B(U):U.getTrailing(B).forEach(function(k){return k.endAnimation()})),R||(le&&!yn&&!pc?(le._dp._time-le._start!==le._time&&le.render(le._dp._time-le._start),le.resetTo?le.resetTo("totalProgress",tt,i._tTime/i._tDur):(le.vars.totalProgress=tt,le.invalidate().restart())):i&&i.totalProgress(tt,!!(yn&&(oe||Ee)))),d){if(Ee&&_&&(ie.style[_+v.os2]=Ae),!ne)Me(Ja(je+me*tt));else if(wn){if(C=!Ee&&tt>Ft&&ft+1>Ze&&Ze+1>=zi(F,v),L)if(!Ee&&(Vt||C)){var x=ar(d,!0),E=Ze-N;Ap(d,Rt,x.top+(v===on?E:0)+an,x.left+(v===on?0:E)+an)}else Ap(d,ie);ha(Vt||C?re:fe),ve&&tt<1&&Vt||Me(je+(tt===1&&!C?me:0))}}M&&!Re.tween&&!yn&&!pc&&ye.restart(!0),o&&(St||y&&tt&&(tt<1||!uu))&&Po(o.targets).forEach(function(k){return k.classList[Vt||y?"add":"remove"](o.className)}),a&&!R&&!Ee&&a(U),wn&&!yn?(R&&(p&&(Et==="complete"?i.pause().totalProgress(1):Et==="reset"?i.restart(!0).pause():Et==="restart"?i.restart(!0):i[Et]()),a&&a(U)),(St||!uu)&&(l&&St&&Xs(U,l),W[wt]&&Xs(U,W[wt]),y&&(tt===1?U.kill(!1,1):W[wt]=0),St||(wt=tt===1?1:3,W[wt]&&Xs(U,W[wt]))),I&&!Vt&&Math.abs(U.getVelocity())>(Qa(I)?I:2500)&&(Wa(U.callbackAnimation),le?le.progress(1):Wa(i,Et==="reverse"?1:!tt,1))):R&&a&&!yn&&a(U)}if($e){var A=w?Ze/w.duration()*(w._caScrollDist||0):Ze;Ie(A+(G._isFlipped?1:0)),$e(A)}Ct&&Ct(-Ze/w.duration()*(w._caScrollDist||0))}},U.enable=function(Ee,Ve){U.enabled||(U.enabled=!0,fn(F,"resize",$a),X||fn(F,"scroll",js),xe&&fn(s,"refreshInit",xe),Ee!==!1&&(U.progress=he=0,qe=Ge=te=ge()),Ve!==!1&&U.refresh())},U.getTween=function(Ee){return Ee&&Re?Re.tween:le},U.setPositions=function(Ee,Ve,ze,Ze){if(w){var zt=w.scrollTrigger,tt=w.duration(),Ft=zt.end-zt.start;Ee=zt.start+Ft*Ee/tt,Ve=zt.start+Ft*Ve/tt}U.refresh(!1,!1,{start:bp(Ee,ze&&!!U._startClamp),end:bp(Ve,ze&&!!U._endClamp)},Ze),U.update()},U.adjustPinSpacing=function(Ee){if(Pe&&Ee){var Ve=Pe.indexOf(v.d)+1;Pe[Ve]=parseFloat(Pe[Ve])+Ee+an,Pe[1]=parseFloat(Pe[1])+Ee+an,ha(Pe)}},U.disable=function(Ee,Ve){if(Ee!==!1&&U.revert(!0,!0),U.enabled&&(U.enabled=U.isActive=!1,Ve||le&&le.pause(),Se=0,Ce&&(Ce.uncache=1),xe&&hn(s,"refreshInit",xe),ye&&(ye.pause(),Re.tween&&Re.tween.kill()&&(Re.tween=0)),!X)){for(var ze=ut.length;ze--;)if(ut[ze].scroller===F&&ut[ze]!==U)return;hn(F,"resize",$a),X||hn(F,"scroll",js)}},U.kill=function(Ee,Ve){U.disable(Ee,Ve),le&&!Ve&&le.kill(),c&&delete Rh[c];var ze=ut.indexOf(U);ze>=0&&ut.splice(ze,1),ze===Dn&&Fc>0&&Dn--,ze=0,ut.forEach(function(Ze){return Ze.scroller===U.scroller&&(ze=1)}),ze||In||(U.scroll.rec=0),i&&(i.scrollTrigger=null,Ee&&i.revert({kill:!1}),Ve||i.kill()),Xe&&[Xe,Ke,G,it].forEach(function(Ze){return Ze.parentNode&&Ze.parentNode.removeChild(Ze)}),go===U&&(go=0),d&&(Ce&&(Ce.uncache=1),ze=0,ut.forEach(function(Ze){return Ze.pin===d&&ze++}),ze||(Ce.spacer=0)),n.onKill&&n.onKill(U)},ut.push(U),U.enable(!1,!1),Ot&&Ot(U),i&&i.add&&!T){var _t=U.update;U.update=function(){U.update=_t,pt.cache++,N||ft||U.refresh()},De.delayedCall(.01,U.update),T=.01,N=ft=0}else U.refresh();d&&GT()},s.register=function(n){return Ys||(De=n||Gg(),Hg()&&window.document&&s.enable(),Ys=Za),Ys},s.defaults=function(n){if(n)for(var i in n)bc[i]=n[i];return bc},s.disable=function(n,i){Za=0,ut.forEach(function(a){return a[i?"kill":"disable"](n)}),hn(dt,"wheel",js),hn(Pt,"scroll",js),clearInterval(dc),hn(Pt,"touchcancel",Ii),hn(Rt,"touchstart",Ii),gc(hn,Pt,"pointerdown,touchstart,mousedown",xp),gc(hn,Pt,"pointerup,touchend,mouseup",vp),tl.kill(),mc(hn);for(var r=0;r<pt.length;r+=3)_c(hn,pt[r],pt[r+1]),_c(hn,pt[r],pt[r+2])},s.enable=function(){if(dt=window,Pt=document,Jn=Pt.documentElement,Rt=Pt.body,De){if(Po=De.utils.toArray,lo=De.utils.clamp,wh=De.core.context||Ii,lu=De.core.suppressOverwrites||Ii,xf=dt.history.scrollRestoration||"auto",Ch=dt.pageYOffset||0,De.core.globals("ScrollTrigger",s),Rt){Za=1,ua=document.createElement("div"),ua.style.height="100vh",ua.style.position="absolute",Qg(),NT(),$t.register(De),s.isTouch=$t.isTouch,Ar=$t.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Th=$t.isTouch===1,fn(dt,"wheel",js),bf=[dt,Pt,Jn,Rt],De.matchMedia?(s.matchMedia=function(u){var h=De.matchMedia(),f;for(f in u)h.add(f,u[f]);return h},De.addEventListener("matchMediaInit",function(){Zg(),Tf()}),De.addEventListener("matchMediaRevert",function(){return Kg()}),De.addEventListener("matchMedia",function(){fs(0,1),Es("matchMedia")}),De.matchMedia().add("(orientation: portrait)",function(){return fu(),fu})):console.warn("Requires GSAP 3.11.0 or later"),fu(),fn(Pt,"scroll",js);var n=Rt.hasAttribute("style"),i=Rt.style,r=i.borderTopStyle,a=De.core.Animation.prototype,o,c;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=ar(Rt),on.m=Math.round(o.top+on.sc())||0,Nn.m=Math.round(o.left+Nn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Rt.setAttribute("style",""),Rt.removeAttribute("style")),dc=setInterval(Mp,250),De.delayedCall(.5,function(){return pc=0}),fn(Pt,"touchcancel",Ii),fn(Rt,"touchstart",Ii),gc(fn,Pt,"pointerdown,touchstart,mousedown",xp),gc(fn,Pt,"pointerup,touchend,mouseup",vp),Eh=De.utils.checkPrefix("transform"),kc.push(Eh),Ys=Sn(),tl=De.delayedCall(.2,fs).pause(),Ks=[Pt,"visibilitychange",function(){var u=dt.innerWidth,h=dt.innerHeight;Pt.hidden?(mp=u,gp=h):(mp!==u||gp!==h)&&$a()},Pt,"DOMContentLoaded",fs,dt,"load",fs,dt,"resize",$a],mc(fn),ut.forEach(function(u){return u.enable(0,1)}),c=0;c<pt.length;c+=3)_c(hn,pt[c],pt[c+1]),_c(hn,pt[c],pt[c+2])}else if(Pt){var l=function u(){s.enable(),Pt.removeEventListener("DOMContentLoaded",u)};Pt.addEventListener("DOMContentLoaded",l)}}},s.config=function(n){"limitCallbacks"in n&&(uu=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(dc)||(dc=i)&&setInterval(Mp,i),"ignoreMobileResize"in n&&(Th=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(mc(hn)||mc(fn,n.autoRefreshEvents||"none"),kg=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=kn(n),a=pt.indexOf(r),o=Ss(r);~a&&pt.splice(a,o?6:2),i&&(o?Gi.unshift(dt,i,Rt,i,Jn,i):Gi.unshift(r,i))},s.clearMatchMedia=function(n){ut.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var a=(Kn(n)?kn(n):n).getBoundingClientRect(),o=a[r?_s:bs]*i||0;return r?a.right-o>0&&a.left+o<dt.innerWidth:a.bottom-o>0&&a.top+o<dt.innerHeight},s.positionInViewport=function(n,i,r){Kn(n)&&(n=kn(n));var a=n.getBoundingClientRect(),o=a[r?_s:bs],c=i==null?o/2:i in il?il[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return r?(a.left+c)/dt.innerWidth:(a.top+c)/dt.innerHeight},s.killAll=function(n){if(ut.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Ms.killAll||[];Ms={},i.forEach(function(r){return r()})}},s}();ht.version="3.15.0";ht.saveStyles=function(s){return s?Po(s).forEach(function(e){if(e&&e.style){var t=Yn.indexOf(e);t>=0&&Yn.splice(t,5),Yn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),De.core.getCache(e),wh())}}):Yn};ht.revert=function(s,e){return Tf(!s,e)};ht.create=function(s,e){return new ht(s,e)};ht.refresh=function(s){return s?$a(!0):(Ys||ht.register())&&fs(!0)};ht.update=function(s){return++pt.cache&&fr(s===!0?2:0)};ht.clearScrollMemory=Jg;ht.maxScroll=function(s,e){return zi(s,e?Nn:on)};ht.getScrollFunc=function(s,e){return Gr(kn(s),e?Nn:on)};ht.getById=function(s){return Rh[s]};ht.getAll=function(){return ut.filter(function(s){return s.vars.id!=="ScrollSmoother"})};ht.isScrolling=function(){return!!gi};ht.snapDirectional=Ef;ht.addEventListener=function(s,e){var t=Ms[s]||(Ms[s]=[]);~t.indexOf(e)||t.push(e)};ht.removeEventListener=function(s,e){var t=Ms[s],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};ht.batch=function(s,e){var t=[],n={},i=e.interval||.016,r=e.batchMax||1e9,a=function(l,u){var h=[],f=[],d=De.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(_){h.length||d.restart(!0),h.push(_.trigger),f.push(_),r<=h.length&&d.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&En(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return En(r)&&(r=r(),fn(ht,"refresh",function(){return r=e.batchMax()})),Po(s).forEach(function(c){var l={};for(o in n)l[o]=n[o];l.trigger=c,t.push(ht.create(l))}),t};var Cp=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},pu=function s(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+($t.isTouch?" pinch-zoom":""):"none",e===Jn&&s(Rt,t)},Sc={auto:1,scroll:1},jT=function(e){var t=e.event,n=e.target,i=e.axis,r=(t.changedTouches?t.changedTouches[0]:t).target,a=r._gsap||De.core.getCache(r),o=Sn(),c;if(!a._isScrollT||o-a._isScrollT>2e3){for(;r&&r!==Rt&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(Sc[(c=hi(r)).overflowY]||Sc[c.overflowX]));)r=r.parentNode;a._isScroll=r&&r!==n&&!Ss(r)&&(Sc[(c=hi(r)).overflowY]||Sc[c.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},e_=function(e,t,n,i){return $t.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&jT,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&fn(Pt,$t.eventTypes[0],Lp,!1,!0)},onDisable:function(){return hn(Pt,$t.eventTypes[0],Lp,!0)}})},YT=/(input|label|select|textarea)/i,Pp,Lp=function(e){var t=YT.test(e.target.tagName);(t||Pp)&&(e._gsapAllow=!0,Pp=t)},KT=function(e){as(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,r=t.allowNestedScroll,a=t.onRelease,o,c,l=kn(e.target)||Jn,u=De.core.globals().ScrollSmoother,h=u&&u.get(),f=Ar&&(e.content&&kn(e.content)||h&&e.content!==!1&&!h.smooth()&&h.content()),d=Gr(l,on),_=Gr(l,Nn),b=1,m=($t.isTouch&&dt.visualViewport?dt.visualViewport.scale*dt.visualViewport.width:dt.outerWidth)/dt.innerWidth,g=0,S=En(i)?function(){return i(o)}:function(){return i||2.8},y,M,L=e_(l,e.type,!0,r),P=function(){return M=!1},w=Ii,I=Ii,B=function(){c=zi(l,on),I=lo(Ar?1:0,c),n&&(w=lo(0,zi(l,Nn))),y=xs},v=function(){f._gsap.y=Ja(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},R=function(){if(M){requestAnimationFrame(P);var K=Ja(o.deltaY/2),de=I(d.v-K);if(f&&de!==d.v+d.offset){d.offset=de-d.v;var U=Ja((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+U+", 0, 1)",f._gsap.y=U+"px",d.cacheID=pt.cache,fr()}return!0}d.offset&&v(),M=!0},F,j,X,ne,W=function(){B(),F.isActive()&&F.vars.scrollY>c&&(d()>c?F.progress(1)&&d(c):F.resetTo("scrollY",c))};return f&&De.set(f,{y:"+=0"}),e.ignoreCheck=function(ee){return Ar&&ee.type==="touchmove"&&R()||b>1.05&&ee.type!=="touchstart"||o.isGesturing||ee.touches&&ee.touches.length>1},e.onPress=function(){M=!1;var ee=b;b=Ja((dt.visualViewport&&dt.visualViewport.scale||1)/m),F.pause(),ee!==b&&pu(l,b>1.01?!0:n?!1:"x"),j=_(),X=d(),B(),y=xs},e.onRelease=e.onGestureStart=function(ee,K){if(d.offset&&v(),!K)ne.restart(!0);else{pt.cache++;var de=S(),U,xe;n&&(U=_(),xe=U+de*.05*-ee.velocityX/.227,de*=Cp(_,U,xe,zi(l,Nn)),F.vars.scrollX=w(xe)),U=d(),xe=U+de*.05*-ee.velocityY/.227,de*=Cp(d,U,xe,zi(l,on)),F.vars.scrollY=I(xe),F.invalidate().duration(de).play(.01),(Ar&&F.vars.scrollY>=c||U>=c-1)&&De.to({},{onUpdate:W,duration:de})}a&&a(ee)},e.onWheel=function(){F._ts&&F.pause(),Sn()-g>1e3&&(y=0,g=Sn())},e.onChange=function(ee,K,de,U,xe){if(xs!==y&&B(),K&&n&&_(w(U[2]===K?j+(ee.startX-ee.x):_()+K-U[1])),de){d.offset&&v();var Oe=xe[2]===de,We=Oe?X+ee.startY-ee.y:d()+de-xe[1],te=I(We);Oe&&We!==te&&(X+=te-We),d(te)}(de||K)&&fr()},e.onEnable=function(){pu(l,n?!1:"x"),ht.addEventListener("refresh",W),fn(dt,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=_.smooth=!1),L.enable()},e.onDisable=function(){pu(l,!0),hn(dt,"resize",W),ht.removeEventListener("refresh",W),L.kill()},e.lockAxis=e.lockAxis!==!1,o=new $t(e),o.iOS=Ar,Ar&&!d()&&d(1),Ar&&De.ticker.add(Ii),ne=o._dc,F=De.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:$g(d,d(),function(){return F.pause()})},onUpdate:fr,onComplete:ne.vars.onComplete}),o};ht.sort=function(s){if(En(s))return ut.sort(s);var e=dt.pageYOffset||0;return ht.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+dt.innerHeight}),ut.sort(s||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};ht.observe=function(s){return new $t(s)};ht.normalizeScroll=function(s){if(typeof s>"u")return Ln;if(s===!0&&Ln)return Ln.enable();if(s===!1){Ln&&Ln.kill(),Ln=s;return}var e=s instanceof $t?s:KT(s);return Ln&&Ln.target===e.target&&Ln.kill(),Ss(e.target)&&(Ln=e),e};ht.core={_getVelocityProp:Mh,_inputObserver:e_,_scrollers:pt,_proxies:Gi,bridge:{ss:function(){gi||Es("scrollStart"),gi=Sn()},ref:function(){return yn}}};Gg()&&De.registerPlugin(ht);ls.registerPlugin(ht);class ZT{constructor(){var e;this.experience=new Vr,this.targetElement=this.experience.targetElement,this.sceneState=this.experience.sceneState,this.sceneConfig=this.experience.sceneConfig,this.resources=this.experience.resources,this.beats=this.sceneConfig.beats??[],(e=document.fonts)!=null&&e.ready&&document.fonts.ready.then(()=>ht.refresh()),this.mm=ls.matchMedia(),this.mm.add({standard:"(prefers-reduced-motion: no-preference)",reduceMotion:"(prefers-reduced-motion: reduce)"},t=>{const{reduceMotion:n}=t.conditions;if(n){this.sceneState.scrollProgress=0;return}this.setBeatScrub(),this.setFrameBeatReveals(),this.setDomOnlyReveals()})}setBeatScrub(){const e=this.sceneState.beatScales=[];this.beats.forEach((t,n)=>{const i=document.querySelector(`[data-beat="${t.id}"]`);if(!i)return;const r=()=>{var u;const o=i.offsetTop+i.offsetHeight-window.innerHeight,c=((u=i.nextElementSibling)==null?void 0:u.offsetTop)??o,l=o+window.innerHeight*.5;return Math.round(Math.min(Math.max(c,o),l))},a=n===this.beats.length-1;ls.fromTo(this.sceneState,{scrollProgress:t.from},{scrollProgress:t.to,ease:"none",immediateRender:!1,scrollTrigger:{trigger:i,start:a?"top 70%":"top top",end:r,scrub:.8,onRefresh:o=>{const c=i.offsetHeight-window.innerHeight;e[n]=Math.min(1,c/Math.max(o.end-o.start,1))}}})})}setFrameBeatReveals(){const e=(t,n,i=.9)=>{const r=document.querySelector(`[data-beat="${t}"]`);if(!r)return;const a=ls.timeline({defaults:{ease:"power2.out"},scrollTrigger:{trigger:r,start:"top top",end:"bottom bottom",scrub:.8}});for(const o of n){const c=r.querySelectorAll(o.sel);c.length&&a.from(c,{autoAlpha:0,y:o.y??28,x:o.x??0,stagger:o.stagger??0,duration:o.duration??.12},o.at)}a.to(r.querySelectorAll("[data-stage-content]"),{autoAlpha:0,y:-20,duration:.1},i),a.set({},{},1)};ls.from('[data-reveal="hero-copy"]',{autoAlpha:0,x:-24,duration:.9,ease:"power2.out",delay:.15}),e("frame-index-01",[],.5),e("frame-index-02",[{sel:'[data-reveal="approach-heading"]',at:.05,duration:.1},{sel:'[data-reveal="approach-card"]',at:.26,stagger:.08,duration:.1}]),e("frame-index-03",[{sel:'[data-reveal="categories-heading"]',at:.05,duration:.1},{sel:'[data-reveal="category"]',at:.22,stagger:.1,duration:.1},{sel:'[data-reveal="categories-cta"]',at:.66,duration:.08}]),e("frame-index-04",[{sel:'[data-reveal="founder-heading"]',at:.08,duration:.1},{sel:'[data-reveal="founder-copy"]',at:.24,stagger:.08,duration:.1},{sel:'[data-reveal="founder-cta"]',at:.6,duration:.08}]),e("frame-index-07",[{sel:'[data-reveal="closing-heading"]',at:.3,y:-36,duration:.12},{sel:'[data-reveal="closing-cta"]',at:.5,y:-24,duration:.1}])}setDomOnlyReveals(){for(const e of document.querySelectorAll("[data-dom-beat]")){const t=e.querySelectorAll("[data-reveal-item]");t.length&&ls.from(t,{autoAlpha:0,y:32,duration:.7,ease:"power2.out",stagger:.12,scrollTrigger:{trigger:e,start:"top 78%",toggleActions:"play none none none"}})}}refresh(){ht.refresh()}destroy(){var e;(e=this.mm)==null||e.revert()}}const JT=[{name:"base",data:{},items:[]}],us=class us{constructor(e={}){if(us.instance)return us.instance;if(us.instance=this,this.targetElement=e.targetElement,this.assets=e.assets??JT,this.sceneConfig=e.sceneConfig??{},this.debugTools=e.debugTools??null,this.sceneState={scrollProgress:0},this.needsRender=!0,this.lastRenderedProgress=-1,!this.targetElement){console.warn("Missing 'targetElement' property");return}this.sizes=new sM,this.setConfig(),this.setDebug(),this.setStats(),this.setScene(),this.setCamera(),this.setRenderer(),this.setResources(),this.setWorld(),this.setMotion(),this.sizes.on("resize",()=>{this.resize()}),this.update()}setConfig(){this.config={},this.config.debug=window.location.hash==="#debug",this.config.reducedMotion=window.matchMedia("(prefers-reduced-motion: reduce)").matches,this.config.pixelRatio=Math.min(Math.max(window.devicePixelRatio,1),1.5);const e=this.targetElement.getBoundingClientRect();this.config.width=e.width,this.config.height=e.height||window.innerHeight}setDebug(){this.config.debug&&this.debugTools&&(this.debug=new this.debugTools.GUI)}setStats(){this.config.debug&&this.debugTools&&(this.stats=new this.debugTools.Stats(!0))}setScene(){this.scene=new _m}setCamera(){this.camera=new lE}setRenderer(){this.renderer=new cE({rendererInstance:this.rendererInstance}),this.targetElement.appendChild(this.renderer.instance.domElement)}setResources(){this.resources=new oE(this.assets)}setWorld(){this.world=new hE}setMotion(){this.motion=new ZT}update(){this.stats&&this.stats.update(),this.world&&this.world.update(),this.camera.update();const e=this.needsRender||this.config.debug||this.sceneState.scrollProgress!==this.lastRenderedProgress;this.renderer&&e&&(this.renderer.update(),this.lastRenderedProgress=this.sceneState.scrollProgress,this.needsRender=!1),this.animationFrame=window.requestAnimationFrame(()=>{this.update()})}resize(){const e=this.targetElement.getBoundingClientRect();this.config.width=e.width,this.config.height=e.height,this.config.pixelRatio=Math.min(Math.max(window.devicePixelRatio,1),1.5),this.camera&&this.camera.resize(),this.renderer&&this.renderer.resize(),this.world&&this.world.resize(),this.needsRender=!0}destroy(){var e,t,n,i,r,a,o,c,l;this.animationFrame&&window.cancelAnimationFrame(this.animationFrame),(e=this.sizes)==null||e.destroy(),(t=this.motion)==null||t.destroy(),(n=this.world)==null||n.destroy(),(i=this.camera)==null||i.destroy(),(r=this.renderer)==null||r.destroy(),(a=this.resources)==null||a.destroy(),this.debug&&this.debug.destroy(),(l=(c=(o=this.renderer)==null?void 0:o.instance)==null?void 0:c.domElement)==null||l.remove(),us.instance=null}};wf(us,"instance");let Vr=us;function QT(s){const e=s.querySelector('script[type="application/json"][data-experience-manifest]');if(!e)return{};try{return JSON.parse(e.textContent)}catch(t){return console.warn("Invalid experience manifest JSON",t),{}}}function $T(){try{const s=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(s.getContext("webgl2")||s.getContext("webgl")))}catch{return!1}}async function e1(s){const e=QT(s);let t=null;if(window.location.hash==="#debug"){const[{default:i},{default:r},{OrbitControls:a}]=await Promise.all([pl(()=>import("./assets/lil-gui.esm-BVNW_y_o.js"),[],import.meta.url),pl(()=>import("./assets/Stats-D-arLcjY.js"),[],import.meta.url),pl(()=>import("./assets/OrbitControls-DmMu1N6-.js"),[],import.meta.url)]);t={GUI:i,Stats:r,OrbitControls:a}}const n=new Vr({targetElement:s,assets:e.assets,sceneConfig:e.sceneConfig,debugTools:t});return n.resources.on("progress",i=>{window.dispatchEvent(new CustomEvent("experience:progress",{detail:{ratio:i.toLoad?i.loaded/i.toLoad:1}}))}),n.resources.on("end",()=>{window.requestAnimationFrame(()=>{window.requestAnimationFrame(()=>{s.classList.add("is-live"),window.dispatchEvent(new CustomEvent("experience:ready"))})})}),window.addEventListener("page:revealed",()=>{var i;(i=n.motion)==null||i.refresh()},{once:!0}),t&&(window.__experience=n),n}document.querySelectorAll("[data-experience]").forEach(s=>{if(!$T()){document.documentElement.classList.remove("experience-on"),window.dispatchEvent(new CustomEvent("experience:ready"));return}e1(s)});export{a1 as C,n1 as M,ns as P,Wr as Q,ol as R,s1 as S,i1 as T,q as V,yt as a,i0 as b};
