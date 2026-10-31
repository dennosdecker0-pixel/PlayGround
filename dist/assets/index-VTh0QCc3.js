(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=35899,S=1021,C=1022,w=1023,T=1026,E=1027,D=1028,O=1029,k=1030,A=1031,ee=1033,j=33776,te=33777,M=33778,ne=33779,N=35840,re=35841,ie=35842,ae=35843,oe=36196,se=37492,ce=37496,le=37488,P=37489,ue=37490,de=37491,fe=37808,pe=37809,me=37810,he=37811,ge=37812,_e=37813,ve=37814,ye=37815,be=37816,xe=37817,Se=37818,Ce=37819,we=37820,Te=37821,Ee=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,Pe=2301,F=2302,Fe=2303,Ie=2400,Le=2401,I=2402,Re=3200,ze=`srgb`,L=`srgb-linear`,Be=`linear`,Ve=`srgb`,He=7680,Ue=35044,We=2e3;function Ge(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Ke(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function qe(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Je(){let e=qe(`canvas`);return e.style.display=`block`,e}var Ye={};function Xe(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function Ze(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function R(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function z(...e){e=Ze(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function Qe(...e){let t=e.join(` `);t in Ye||(Ye[t]=!0,R(...e))}function $e(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var et={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},tt=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},nt=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),rt=Math.PI/180,it=180/Math.PI;function at(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(nt[e&255]+nt[e>>8&255]+nt[e>>16&255]+nt[e>>24&255]+`-`+nt[t&255]+nt[t>>8&255]+`-`+nt[t>>16&15|64]+nt[t>>24&255]+`-`+nt[n&63|128]+nt[n>>8&255]+`-`+nt[n>>16&255]+nt[n>>24&255]+nt[r&255]+nt[r>>8&255]+nt[r>>16&255]+nt[r>>24&255]).toLowerCase()}function B(e,t,n){return Math.max(t,Math.min(n,e))}function ot(e,t){return(e%t+t)%t}function st(e,t,n){return(1-n)*e+n*t}function ct(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function lt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ut(e,t){if(t.constructor===Float32Array)return e;let n=lt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function dt(e,t){if(t.constructor===Float32Array)return e;let n=lt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var V=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:R(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(B(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return pt.copy(this).projectOnVector(e),this.sub(pt)}reflect(e){return this.sub(pt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(B(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},pt=new H,mt=new ft,U=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return Qe(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(ht.makeScale(e,t)),this}rotate(e){return Qe(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(ht.makeRotation(-e)),this}translate(e,t){return Qe(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(ht.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ht=new U,gt=new U().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_t=new U().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vt(){let e={enabled:!0,workingColorSpace:L,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=xt(e.r),e.g=xt(e.g),e.b=xt(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Be:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[L]:{primaries:t,whitePoint:r,transfer:Be,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:r,transfer:Ve,toXYZ:gt,fromXYZ:_t,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),e}var yt=vt();function bt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function xt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var St,Ct=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{St===void 0&&(St=qe(`canvas`)),St.width=e.width,St.height=e.height;let t=St.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=St}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=qe(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=bt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(bt(t[e]/255)*255):t[e]=bt(t[e]);return{data:t,width:e.width,height:e.height}}return R(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wt=0,Tt=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=at(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Et(r[t].image)):e.push(Et(r[t]))}else e=Et(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Et(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(R(`Texture: Unable to serialize Texture.`),{})}var Dt=0,Ot=new H,kt=class r extends tt{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=w,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=at(),this.name=``,this.source=new Tt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new V(0,0),this.repeat=new V(1,1),this.center=new V(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new U,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ot).x}get height(){return this.source.getSize(Ot).y}get depth(){return this.source.getSize(Ot).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){R(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};kt.DEFAULT_IMAGE=null,kt.DEFAULT_MAPPING=300,kt.DEFAULT_ANISOTROPY=1;var At=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=B(this.x,e.x,t.x),this.y=B(this.y,e.y,t.y),this.z=B(this.z,e.z,t.z),this.w=B(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=B(this.x,e,t),this.y=B(this.y,e,t),this.z=B(this.z,e,t),this.w=B(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(B(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jt=class extends tt{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new kt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:o,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Tt(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Mt=class extends jt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Nt=class extends kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Pt=class extends kt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Ft=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/It.setFromMatrixColumn(e,0).length(),i=1/It.setFromMatrixColumn(e,1).length(),a=1/It.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Rt,e,zt)}lookAt(e,t,n){let r=this.elements;return Ht.subVectors(e,t),Ht.lengthSq()===0&&(Ht.z=1),Ht.normalize(),Bt.crossVectors(n,Ht),Bt.lengthSq()===0&&(Math.abs(n.z)===1?Ht.x+=1e-4:Ht.z+=1e-4,Ht.normalize(),Bt.crossVectors(n,Ht)),Bt.normalize(),Vt.crossVectors(Ht,Bt),r[0]=Bt.x,r[4]=Vt.x,r[8]=Ht.x,r[1]=Bt.y,r[5]=Vt.y,r[9]=Ht.y,r[2]=Bt.z,r[6]=Vt.z,r[10]=Ht.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],k=r[2],A=r[6],ee=r[10],j=r[14],te=r[3],M=r[7],ne=r[11],N=r[15];return i[0]=a*x+o*T+s*k+c*te,i[4]=a*S+o*E+s*A+c*M,i[8]=a*C+o*D+s*ee+c*ne,i[12]=a*w+o*O+s*j+c*N,i[1]=l*x+u*T+d*k+f*te,i[5]=l*S+u*E+d*A+f*M,i[9]=l*C+u*D+d*ee+f*ne,i[13]=l*w+u*O+d*j+f*N,i[2]=p*x+m*T+h*k+g*te,i[6]=p*S+m*E+h*A+g*M,i[10]=p*C+m*D+h*ee+g*ne,i[14]=p*w+m*O+h*j+g*N,i[3]=_*x+v*T+y*k+b*te,i[7]=_*S+v*E+y*A+b*M,i[11]=_*C+v*D+y*ee+b*ne,i[15]=_*w+v*O+y*j+b*N,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,k=_*O-v*D+y*E+b*T-x*w+S*C;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/k;return e[0]=(o*O-s*D+c*E)*A,e[1]=(r*D-n*O-i*E)*A,e[2]=(m*S-h*x+g*b)*A,e[3]=(d*x-u*S-f*b)*A,e[4]=(s*T-a*O-c*w)*A,e[5]=(t*O-r*T+i*w)*A,e[6]=(h*y-p*S-g*v)*A,e[7]=(l*S-d*y+f*v)*A,e[8]=(a*D-o*T+c*C)*A,e[9]=(n*T-t*D-i*C)*A,e[10]=(p*x-m*y+g*_)*A,e[11]=(u*y-l*x-f*_)*A,e[12]=(o*w-a*E-s*C)*A,e[13]=(t*E-n*w+r*C)*A,e[14]=(m*v-p*b-h*_)*A,e[15]=(l*b-u*v+d*_)*A,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=It.set(r[0],r[1],r[2]).length(),o=It.set(r[4],r[5],r[6]).length(),s=It.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Lt.copy(this);let c=1/a,l=1/o,u=1/s;return Lt.elements[0]*=c,Lt.elements[1]*=c,Lt.elements[2]*=c,Lt.elements[4]*=l,Lt.elements[5]*=l,Lt.elements[6]*=l,Lt.elements[8]*=u,Lt.elements[9]*=u,Lt.elements[10]*=u,t.setFromRotationMatrix(Lt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=We,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},It=new H,Lt=new Ft,Rt=new H(0,0,0),zt=new H(1,1,1),Bt=new H,Vt=new H,Ht=new H,Ut=new Ft,Wt=new ft,Gt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(B(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-B(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(B(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-B(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(B(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-B(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:R(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ut.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ut,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wt.setFromEuler(this),this.setFromQuaternion(Wt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gt.DEFAULT_ORDER=`XYZ`;var Kt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},qt=0,Jt=new H,Yt=new ft,Xt=new Ft,Zt=new H,Qt=new H,$t=new H,en=new ft,tn=new H(1,0,0),nn=new H(0,1,0),rn=new H(0,0,1),an={type:`added`},on={type:`removed`},sn={type:`childadded`,child:null},cn={type:`childremoved`,child:null},ln=class e extends tt{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qt++}),this.uuid=at(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new H,n=new Gt,r=new ft,i=new H(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ft},normalMatrix:{value:new U}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Kt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.multiply(Yt),this}rotateOnWorldAxis(e,t){return Yt.setFromAxisAngle(e,t),this.quaternion.premultiply(Yt),this}rotateX(e){return this.rotateOnAxis(tn,e)}rotateY(e){return this.rotateOnAxis(nn,e)}rotateZ(e){return this.rotateOnAxis(rn,e)}translateOnAxis(e,t){return Jt.copy(e).applyQuaternion(this.quaternion),this.position.add(Jt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tn,e)}translateY(e){return this.translateOnAxis(nn,e)}translateZ(e){return this.translateOnAxis(rn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xt.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Zt.copy(e):Zt.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Qt.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xt.lookAt(Qt,Zt,this.up):Xt.lookAt(Zt,Qt,this.up),this.quaternion.setFromRotationMatrix(Xt),r&&(Xt.extractRotation(r.matrixWorld),Yt.setFromRotationMatrix(Xt),this.quaternion.premultiply(Yt.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(z(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null):z(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(on),cn.child=e,this.dispatchEvent(cn),cn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xt.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xt.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xt),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(an),sn.child=e,this.dispatchEvent(sn),sn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,e,$t),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qt,en,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};ln.DEFAULT_UP=new H(0,1,0),ln.DEFAULT_MATRIX_AUTO_UPDATE=!0,ln.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends ln{constructor(){super(),this.isGroup=!0,this.type=`Group`}},dn={type:`move`},fn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(dn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},pn={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},hn={h:0,s:0,l:0};function gn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var W=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,yt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,yt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=yt.workingColorSpace){if(e=ot(e,1),t=B(t,0,1),n=B(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=gn(i,r,e+1/3),this.g=gn(i,r,e),this.b=gn(i,r,e-1/3)}return yt.colorSpaceToWorking(this,r),this}setStyle(e,t=ze){function n(t){t!==void 0&&parseFloat(t)<1&&R(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:R(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);R(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ze){let n=pn[e.toLowerCase()];return n===void 0?R(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}copyLinearToSRGB(e){return this.r=xt(e.r),this.g=xt(e.g),this.b=xt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return yt.workingToColorSpace(_n.copy(this),e),Math.round(B(_n.r*255,0,255))*65536+Math.round(B(_n.g*255,0,255))*256+Math.round(B(_n.b*255,0,255))}getHexString(e=ze){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=yt.workingColorSpace){yt.workingToColorSpace(_n.copy(this),t);let n=_n.r,r=_n.g,i=_n.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=yt.workingColorSpace){return yt.workingToColorSpace(_n.copy(this),t),e.r=_n.r,e.g=_n.g,e.b=_n.b,e}getStyle(e=ze){yt.workingToColorSpace(_n.copy(this),e);let t=_n.r,n=_n.g,r=_n.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(mn),this.setHSL(mn.h+e,mn.s+t,mn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(mn),e.getHSL(hn);let n=st(mn.h,hn.h,t),r=st(mn.s,hn.s,t),i=st(mn.l,hn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},_n=new W;W.NAMES=pn;var vn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new W(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},yn=class extends ln{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gt,this.environmentIntensity=1,this.environmentRotation=new Gt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new H,xn=new H,Sn=new H,Cn=new H,wn=new H,Tn=new H,En=new H,Dn=new H,On=new H,kn=new H,An=new At,jn=new At,Mn=new At,Nn=class e{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),bn.subVectors(e,t),r.cross(bn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){bn.subVectors(r,t),xn.subVectors(n,t),Sn.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(xn),s=bn.dot(Sn),c=xn.dot(xn),l=xn.dot(Sn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Cn)!==null&&Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Cn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Cn.x),s.addScaledVector(a,Cn.y),s.addScaledVector(o,Cn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return An.setScalar(0),jn.setScalar(0),Mn.setScalar(0),An.fromBufferAttribute(e,t),jn.fromBufferAttribute(e,n),Mn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(An,i.x),a.addScaledVector(jn,i.y),a.addScaledVector(Mn,i.z),a}static isFrontFacing(e,t,n,r){return bn.subVectors(n,t),xn.subVectors(e,t),bn.cross(xn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),bn.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;wn.subVectors(r,n),Tn.subVectors(i,n),Dn.subVectors(e,n);let s=wn.dot(Dn),c=Tn.dot(Dn);if(s<=0&&c<=0)return t.copy(n);On.subVectors(e,r);let l=wn.dot(On),u=Tn.dot(On);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(wn,a);kn.subVectors(e,i);let f=wn.dot(kn),p=Tn.dot(kn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Tn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return En.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(En,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(wn,a).addScaledVector(Tn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Pn=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(In.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(In.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=In.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,In):In.fromBufferAttribute(r,t),In.applyMatrix4(e.matrixWorld),this.expandByPoint(In);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Ln.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Ln.copy(e.boundingBox)),Ln.applyMatrix4(e.matrixWorld),this.union(Ln)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,In),In.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wn),Gn.subVectors(this.max,Wn),Rn.subVectors(e.a,Wn),zn.subVectors(e.b,Wn),Bn.subVectors(e.c,Wn),Vn.subVectors(zn,Rn),Hn.subVectors(Bn,zn),Un.subVectors(Rn,Bn);let t=[0,-Vn.z,Vn.y,0,-Hn.z,Hn.y,0,-Un.z,Un.y,Vn.z,0,-Vn.x,Hn.z,0,-Hn.x,Un.z,0,-Un.x,-Vn.y,Vn.x,0,-Hn.y,Hn.x,0,-Un.y,Un.x,0];return!Jn(t,Rn,zn,Bn,Gn)||(t=[1,0,0,0,1,0,0,0,1],!Jn(t,Rn,zn,Bn,Gn))?!1:(Kn.crossVectors(Vn,Hn),t=[Kn.x,Kn.y,Kn.z],Jn(t,Rn,zn,Bn,Gn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,In).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(In).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(Fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Fn=[new H,new H,new H,new H,new H,new H,new H,new H],In=new H,Ln=new Pn,Rn=new H,zn=new H,Bn=new H,Vn=new H,Hn=new H,Un=new H,Wn=new H,Gn=new H,Kn=new H,qn=new H;function Jn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){qn.fromArray(e,a);let o=i.x*Math.abs(qn.x)+i.y*Math.abs(qn.y)+i.z*Math.abs(qn.z),s=t.dot(qn),c=n.dot(qn),l=r.dot(qn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Yn=new H,Xn=new V,Zn=0,Qn=class extends tt{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zn++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ue,this.updateRanges=[],this.gpuType=h,this.version=0,this._normalizationScale=e===void 0?void 0:lt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Xn.fromBufferAttribute(this,t),Xn.applyMatrix3(e),this.setXY(t,Xn.x,Xn.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix3(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyMatrix4(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.applyNormalMatrix(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Yn.fromBufferAttribute(this,t),Yn.transformDirection(e),this.setXYZ(t,Yn.x,Yn.y,Yn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ut(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?dt(e,this.array):Math.round(e*t)}},$n=class extends Qn{constructor(e,t,n){super(new Uint16Array(e),t,n)}},er=class extends Qn{constructor(e,t,n){super(new Uint32Array(e),t,n)}},tr=class extends Qn{constructor(e,t,n){super(new Float32Array(e),t,n)}},nr=new Pn,rr=new H,ir=new H,ar=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?nr.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rr.subVectors(e,this.center);let t=rr.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(rr,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rr.copy(e.center).add(ir)),this.expandByPoint(rr.copy(e.center).sub(ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},or=0,sr=new Ft,cr=new ln,lr=new H,ur=new Pn,dr=new Pn,fr=new H,pr=class e extends tt{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:or++}),this.uuid=at(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ge(e)?er:$n)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new U().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return sr.makeRotationFromQuaternion(e),this.applyMatrix4(sr),this}rotateX(e){return sr.makeRotationX(e),this.applyMatrix4(sr),this}rotateY(e){return sr.makeRotationY(e),this.applyMatrix4(sr),this}rotateZ(e){return sr.makeRotationZ(e),this.applyMatrix4(sr),this}translate(e,t,n){return sr.makeTranslation(e,t,n),this.applyMatrix4(sr),this}scale(e,t,n){return sr.makeScale(e,t,n),this.applyMatrix4(sr),this}lookAt(e){return cr.lookAt(e),cr.updateMatrix(),this.applyMatrix4(cr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new tr(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&R(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];ur.setFromBufferAttribute(n),this.morphTargetsRelative?(fr.addVectors(this.boundingBox.min,ur.min),this.boundingBox.expandByPoint(fr),fr.addVectors(this.boundingBox.max,ur.max),this.boundingBox.expandByPoint(fr)):(this.boundingBox.expandByPoint(ur.min),this.boundingBox.expandByPoint(ur.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&z(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)z(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new H,1/0);else if(e){let n=this.boundingSphere.center;if(ur.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];dr.setFromBufferAttribute(n),this.morphTargetsRelative?(fr.addVectors(ur.min,dr.min),ur.expandByPoint(fr),fr.addVectors(ur.max,dr.max),ur.expandByPoint(fr)):(ur.expandByPoint(dr.min),ur.expandByPoint(dr.max))}ur.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)fr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(fr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)fr.fromBufferAttribute(a,t),o&&(lr.fromBufferAttribute(e,t),fr.add(lr)),r=Math.max(r,n.distanceToSquared(fr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&z(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){z(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new Qn(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new H,s[e]=new H;let l=new H,u=new H,d=new H,f=new V,p=new V,m=new V,h=new H,g=new H;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new H,b=new H,x=new H,S=new H;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new Qn(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new H,i=new H,a=new H,o=new H,s=new H,c=new H,l=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)fr.fromBufferAttribute(e,t),fr.normalize(),e.setXYZ(t,fr.x,fr.y,fr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new Qn(a,r,i)}if(this.index===null)return R(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},mr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ue,this.updateRanges=[],this.version=0,this.uuid=at()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),r=new this.constructor(n,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=hr(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function hr(e){return e.buffer._uuid===void 0&&(e.buffer._uuid=at()),e.byteOffset===0&&e.byteLength===e.buffer.byteLength?e.buffer._uuid:e.buffer._uuid+`:`+e.byteOffset+`:`+e.byteLength}var gr=new H,_r=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r,this._normalizationScale=e===void 0?void 0:lt(e.array)}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyMatrix4(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.applyNormalMatrix(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)gr.fromBufferAttribute(this,t),gr.transformDirection(e),this.setXYZ(t,gr.x,gr.y,gr.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){Xe(`InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new Qn(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Xe(`InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t===void 0?ut(e,this.data.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?dt(e,this.data.array):Math.round(e*t)}},vr=new H,yr=new H,br=new U,xr=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=vr.subVectors(n,t).cross(yr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(vr),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||br.getNormalMatrix(e),r=this.coplanarPoint(vr).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Sr=0,Cr=class extends tt{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sr++}),this.uuid=at(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new W(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=He,this.stencilZFail=He,this.stencilZPass=He,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){R(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?R(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new W().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new xr().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new V().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new V().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},wr=class extends Cr{constructor(e){super(),this.isSpriteMaterial=!0,this.type=`SpriteMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Tr,Er=new H,Dr=new H,Or=new H,kr=new V,Ar=new V,jr=new Ft,Mr=new H,Nr=new H,Pr=new H,Fr=new V,Ir=new V,Lr=new V,Rr=class extends ln{constructor(e=new wr){if(super(),this.isSprite=!0,this.type=`Sprite`,Tr===void 0){Tr=new pr;let e=new mr(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);Tr.setIndex([0,1,2,0,2,3]),Tr.setAttribute(`position`,new _r(e,3,0,!1)),Tr.setAttribute(`uv`,new _r(e,2,3,!1))}this.geometry=Tr,this.material=e,this.center=new V(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&z(`Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Dr.setFromMatrixScale(this.matrixWorld),jr.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Dr.multiplyScalar(-Or.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;zr(Mr.set(-.5,-.5,0),Or,a,Dr,r,i),zr(Nr.set(.5,-.5,0),Or,a,Dr,r,i),zr(Pr.set(.5,.5,0),Or,a,Dr,r,i),Fr.set(0,0),Ir.set(1,0),Lr.set(1,1);let o=e.ray.intersectTriangle(Mr,Nr,Pr,!1,Er);if(o===null&&(zr(Nr.set(-.5,.5,0),Or,a,Dr,r,i),Ir.set(0,1),o=e.ray.intersectTriangle(Mr,Pr,Nr,!1,Er),o===null))return;let s=e.ray.origin.distanceTo(Er);s<e.near||s>e.far||t.push({distance:s,point:Er.clone(),uv:Nn.getInterpolation(Er,Mr,Nr,Pr,Fr,Ir,Lr,new V),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function zr(e,t,n,r,i,a){kr.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ar.copy(kr):(Ar.x=a*kr.x-i*kr.y,Ar.y=i*kr.x+a*kr.y),e.copy(t),e.x+=Ar.x,e.y+=Ar.y,e.applyMatrix4(jr)}var Br=new H,Vr=new H,Hr=new H,Ur=new H,Wr=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Br)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Br.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Br.copy(this.origin).addScaledVector(this.direction,t),Br.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Vr.copy(e).add(t).multiplyScalar(.5),Hr.copy(t).sub(e).normalize(),Ur.copy(this.origin).sub(Vr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Hr),o=Ur.dot(this.direction),s=-Ur.dot(Hr),c=Ur.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Vr).addScaledVector(Hr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Br.subVectors(e.center,this.origin);let n=Br.dot(this.direction),r=Br.dot(Br)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Br)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,k,A,ee,j,te;if(y>=b&&y>=x?(w=s,D=u,A=p,te=g,s>=0?(S=c,C=l,T=d,E=f,O=m,k=h,ee=_,j=v):(S=l,C=c,T=f,E=d,O=h,k=m,ee=v,j=_)):b>=x?(w=c,D=d,A=m,te=_,c>=0?(S=l,C=s,T=f,E=u,O=h,k=p,ee=v,j=g):(S=s,C=l,T=u,E=f,O=p,k=h,ee=g,j=v)):(w=l,D=f,A=h,te=v,l>=0?(S=s,C=c,T=u,E=d,O=p,k=m,ee=g,j=_):(S=c,C=s,T=d,E=u,O=m,k=p,ee=_,j=g)),w===0)return null;let M=S/w,ne=C/w,N=1/w,re=T-M*D,ie=E-ne*D,ae=O-M*A,oe=k-ne*A,se=ee-M*te,ce=j-ne*te,le=se*oe-ce*ae,P=re*ce-ie*se,ue=ae*ie-oe*re;if(r){if(le<0||P<0||ue<0)return null}else if((le<0||P<0||ue<0)&&(le>0||P>0||ue>0))return null;let de=le+P+ue;if(de===0)return null;let fe=N*(le*D+P*A+ue*te);return(de>0?fe<0:fe>0)?null:this.at(fe/de,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Gr=class extends Cr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new W(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Kr=new Ft,qr=new Wr,Jr=new ar,Yr=new H,Xr=new H,Zr=new H,Qr=new H,$r=new H,ei=new H,ti=new H,ni=new H,ri=class extends ln{constructor(e=new pr,t=new Gr){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){ei.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&($r.fromBufferAttribute(s,e),a?ei.addScaledVector($r,r):ei.addScaledVector($r.sub(t),r))}t.add(ei)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jr.copy(n.boundingSphere),Jr.applyMatrix4(i),qr.copy(e.ray).recast(e.near),Jr.containsPoint(qr.origin)===!1&&(qr.intersectSphere(Jr,Yr)===null||qr.origin.distanceToSquared(Yr)>(e.far-e.near)**2)||(Kr.copy(i).invert(),qr.copy(e.ray).applyMatrix4(Kr),(n.boundingBox===null||qr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,qr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=ai(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=ai(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=ai(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=ai(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function ii(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;ni.copy(s),ni.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(ni);return l<n.near||l>n.far?null:{distance:l,point:ni.clone(),object:e}}function ai(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Xr),e.getVertexPosition(c,Zr),e.getVertexPosition(l,Qr);let u=ii(e,t,n,r,Xr,Zr,Qr,ti);if(u){let e=new H;Nn.getBarycoord(ti,Xr,Zr,Qr,e),i&&(u.uv=Nn.getInterpolatedAttribute(i,s,c,l,e,new V)),a&&(u.uv1=Nn.getInterpolatedAttribute(a,s,c,l,e,new V)),o&&(u.normal=Nn.getInterpolatedAttribute(o,s,c,l,e,new H),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new H,materialIndex:0};Nn.getNormal(Xr,Zr,Qr,t.normal),u.face=t,u.barycoord=e}return u}var oi=class extends kt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},si=new ar,ci=new V(.5,.5),li=new H,ui=class{constructor(e=new xr,t=new xr,n=new xr,r=new xr,i=new xr,a=new xr){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=We,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476+ci.distanceTo(e.center),si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(li.x=r.normal.x>0?e.max.x:e.min.x,li.y=r.normal.y>0?e.max.y:e.min.y,li.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(li)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},di=new Ft,fi=class e{constructor(){this.coordinateSystem=We,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];di.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new ui),n[e].setFromProjectionMatrix(di,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new ui),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},pi=class extends Cr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type=`LineBasicMaterial`,this.color=new W(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},mi=new H,hi=new H,gi=new Ft,_i=new Wr,vi=new ar,yi=new H,bi=new H,xi=class extends ln{constructor(e=new pr,t=new pi){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)mi.fromBufferAttribute(t,e-1),hi.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=mi.distanceTo(hi);e.setAttribute(`lineDistance`,new tr(n,1))}else R(`Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),vi.copy(n.boundingSphere),vi.applyMatrix4(r),vi.radius+=i,e.ray.intersectsSphere(vi)===!1)return;gi.copy(r).invert(),_i.copy(e.ray).applyMatrix4(gi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=Si(this,e,_i,s,n,r,i);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=Si(this,e,_i,s,i,a,r-1);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=Si(this,e,_i,s,i,i+1,i);n&&t.push(n)}if(this.isLineLoop){let i=Si(this,e,_i,s,r-1,n,r-1);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function Si(e,t,n,r,i,a,o){let s=e.geometry.attributes.position;if(mi.fromBufferAttribute(s,i),hi.fromBufferAttribute(s,a),n.distanceSqToSegment(mi,hi,yi,bi)>r)return;yi.applyMatrix4(e.matrixWorld);let c=t.ray.origin.distanceTo(yi);if(!(c<t.near||c>t.far))return{distance:c,point:bi.clone().applyMatrix4(e.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:e}}var Ci=class extends Cr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new W(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},wi=new Ft,Ti=new Wr,Ei=new ar,Di=new H,Oi=class extends ln{constructor(e=new pr,t=new Ci){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ei.copy(n.boundingSphere),Ei.applyMatrix4(r),Ei.radius+=i,e.ray.intersectsSphere(Ei)===!1)return;wi.copy(r).invert(),Ti.copy(e.ray).applyMatrix4(wi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Di.fromBufferAttribute(l,n),ki(Di,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Di.fromBufferAttribute(l,a),ki(Di,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function ki(e,t,n,r,i,a,o){let s=Ti.distanceSqToPoint(e);if(s<n){let n=new H;Ti.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ai=class extends kt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ji=class extends kt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Mi=class extends kt{constructor(e,t,n=m,i,a,o,s=r,c=r,l,u=T,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tt(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ni=class extends Mi{constructor(e,t=m,n=301,i,a,o=r,s=r,c,l=T){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,i,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Pi=class extends kt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fi=class e extends pr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new tr(c,3)),this.setAttribute(`normal`,new tr(l,3)),this.setAttribute(`uv`,new tr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new H;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ii=class e extends pr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new tr(u,3)),this.setAttribute(`normal`,new tr(d,3)),this.setAttribute(`uv`,new tr(f,2));function _(){let a=new H,_=new H,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new V,m=new H,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Li=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){R(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new V:new H);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new H,r=[],i=[],a=[],o=new H,s=new Ft;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new H)}i[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(B(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(B(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}};function Ri(e,t){let n=1-e;return n*n*t}function zi(e,t){return 2*(1-e)*e*t}function Bi(e,t){return e*e*t}function Vi(e,t,n,r){return Ri(e,t)+zi(e,n)+Bi(e,r)}var Hi=class extends Li{constructor(e=new H,t=new H,n=new H){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new H){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Vi(e,r.x,i.x,a.x),Vi(e,r.y,i.y,a.y),Vi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ui=class e extends pr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},Wi=class e extends pr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new H,p=new V;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new tr(s,3)),this.setAttribute(`normal`,new tr(c,3)),this.setAttribute(`uv`,new tr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Gi=class e extends pr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new H,d=new H,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new tr(p,3)),this.setAttribute(`normal`,new tr(m,3)),this.setAttribute(`uv`,new tr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function Ki(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(Ji(i))i.isRenderTargetTexture?(R(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(Ji(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function qi(e){let t={};for(let n=0;n<e.length;n++){let r=Ki(e[n]);for(let e in r)t[e]=r[e]}return t}function Ji(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function Yi(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Xi(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:yt.workingColorSpace}var Zi={clone:Ki,merge:qi},Qi=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$i=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ea=class extends Cr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qi,this.fragmentShader=$i,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ki(e.uniforms),this.uniformsGroups=Yi(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new W().setHex(r.value);break;case`v2`:this.uniforms[n].value=new V().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new H().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new At().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new U().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new Ft().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ta=class extends ea{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},na=class extends Cr{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new W(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new W(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new V(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:``},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ra=class extends na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:``,PHYSICAL:``},this.type=`MeshPhysicalMaterial`,this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new V(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return B(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new W(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new W(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new W(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Qe(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Qe(`MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".`),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:``,PHYSICAL:``},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},ia=class extends Cr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=Re,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},aa=class extends Cr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function oa(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function sa(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var ca=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},la=class extends ca{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case I:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case I:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},ua=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},da=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},fa=class extends ca{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=ha(n,t,g,y,r);i[p]=pa(x,o,_,b,m)}return i}};function pa(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function ma(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function ha(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=pa(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=ma(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var ga=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=oa(t,this.TimeBufferType),this.values=oa(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:oa(e.times,Array),values:oa(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),sa(e.settings)&&(n.settings={inTangents:oa(e.settings.inTangents,Array),outTangents:oa(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new la(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new fa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case F:t=this.InterpolantFactoryMethodSmooth;break;case Fe:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return R(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return F;case this.InterpolantFactoryMethodBezier:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;sa(this.settings)&&(_a(this.settings.inTangents,e),_a(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;sa(this.settings)&&(va(this.settings.inTangents,e),va(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(z(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(z(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){z(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){z(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Ke(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){z(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===F,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,sa(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function _a(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function va(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}ga.prototype.ValueTypeName=``,ga.prototype.TimeBufferType=Float32Array,ga.prototype.ValueBufferType=Float32Array,ga.prototype.DefaultInterpolation=Pe;var ya=class extends ga{constructor(e,t,n){super(e,t,n)}};ya.prototype.ValueTypeName=`bool`,ya.prototype.ValueBufferType=Array,ya.prototype.DefaultInterpolation=Ne,ya.prototype.InterpolantFactoryMethodLinear=void 0,ya.prototype.InterpolantFactoryMethodSmooth=void 0;var ba=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}};ba.prototype.ValueTypeName=`color`;var xa=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}};xa.prototype.ValueTypeName=`number`;var Sa=class extends ca{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)ft.slerpFlat(i,0,a,c-o,a,c,s);return i}},Ca=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Sa(this.times,this.values,this.getValueSize(),e)}};Ca.prototype.ValueTypeName=`quaternion`,Ca.prototype.InterpolantFactoryMethodSmooth=void 0;var wa=class extends ga{constructor(e,t,n){super(e,t,n)}};wa.prototype.ValueTypeName=`string`,wa.prototype.ValueBufferType=Array,wa.prototype.DefaultInterpolation=Ne,wa.prototype.InterpolantFactoryMethodLinear=void 0,wa.prototype.InterpolantFactoryMethodSmooth=void 0;var Ta=class extends ga{constructor(e,t,n,r){super(e,t,n,r)}};Ta.prototype.ValueTypeName=`vector`;var Ea=class extends ln{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new W(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Da=class extends Ea{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.groundColor=new W(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Oa=new Ft,ka=new H,Aa=new H,ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new V(512,512),this.mapType=l,this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ui,this._frameExtents=new V(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Aa.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Aa),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Oa,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Oa)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Ma=new H,Na=new ft,Pa=new H,Fa=class extends ln{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=We,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ma,Na,Pa),Pa.x===1&&Pa.y===1&&Pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Na,Pa.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ma,Na,Pa),Pa.x===1&&Pa.y===1&&Pa.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ma,Na,Pa.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ia=new H,La=new V,Ra=new V,za=class extends Fa{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=it*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(rt*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return it*2*Math.atan(Math.tan(rt*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z),Ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ia.x,Ia.y).multiplyScalar(-e/Ia.z)}getViewSize(e,t){return this.getViewBounds(e,La,Ra),t.subVectors(Ra,La)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(rt*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ba=class extends ja{constructor(){super(new za(90,1,.5,500)),this.isPointLightShadow=!0}},Va=class extends Ea{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new Ba}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ha=class extends Fa{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ua=class extends ja{constructor(){super(new Ha(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Wa=class extends Ea{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(ln.DEFAULT_UP),this.updateMatrix(),this.target=new ln,this.shadow=new Ua}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ga=class extends Ea{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type=`AmbientLight`}},Ka=-90,qa=1,Ja=class extends ln{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new za(Ka,qa,e,t);r.layers=this.layers,this.add(r);let i=new za(Ka,qa,e,t);i.layers=this.layers,this.add(i);let a=new za(Ka,qa,e,t);a.layers=this.layers,this.add(a);let o=new za(Ka,qa,e,t);o.layers=this.layers,this.add(o);let s=new za(Ka,qa,e,t);s.layers=this.layers,this.add(s);let c=new za(Ka,qa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Ya=class extends za{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Xa=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=Za.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function Za(){this._document.hidden===!1&&this.reset()}var Qa=`\\[\\]\\.:\\/`,$a=RegExp(`[\\[\\]\\.:\\/]`,`g`),eo=`[^\\[\\]\\.:\\/]`,to=`[^`+Qa.replace(`\\.`,``)+`]`,no=`((?:WC+[\\/:])*)`.replace(`WC`,eo),ro=`(WCOD+)?`.replace(`WCOD`,to),io=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,eo),ao=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,eo),oo=RegExp(`^`+no+ro+io+ao+`$`),so=[`material`,`materials`,`bones`,`map`],co=class{constructor(e,t,n){let r=n||lo.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lo=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace($a,``)}static parseTrackName(e){let t=oo.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);so.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){R(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){z(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){z(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){z(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){z(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){z(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){z(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;z(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){z(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lo.Composite=co,lo.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},lo.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},lo.prototype.GetterByBindingType=[lo.prototype._getValue_direct,lo.prototype._getValue_array,lo.prototype._getValue_arrayElement,lo.prototype._getValue_toArray],lo.prototype.SetterByBindingTypeAndVersioning=[[lo.prototype._setValue_direct,lo.prototype._setValue_direct_setNeedsUpdate,lo.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lo.prototype._setValue_array,lo.prototype._setValue_array_setNeedsUpdate,lo.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lo.prototype._setValue_arrayElement,lo.prototype._setValue_arrayElement_setNeedsUpdate,lo.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lo.prototype._setValue_fromArray,lo.prototype._setValue_fromArray_setNeedsUpdate,lo.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var uo=new Ft,fo=class{constructor(e,t,n=0,r=1/0){this.ray=new Wr(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Kt,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):z(`Raycaster: Unsupported camera type: `+t.type)}setFromXRController(e){return uo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(uo),this}intersectObject(e,t=!0,n=[]){return mo(e,this,n,t),n.sort(po),n}intersectObjects(e,t=!0,n=[]){for(let r=0,i=e.length;r<i;r++)mo(e[r],this,n,t);return n.sort(po),n}};function po(e,t){return e.distance-t.distance}function mo(e,t,n,r){let i=!0;if(e.layers.test(t.layers)&&e.raycast(t,n)===!1&&(i=!1),i===!0&&r===!0){let r=e.children;for(let e=0,i=r.length;e<i;e++)mo(r[e],t,n,!0)}}(class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}});function ho(e,t,n,r){let i=go(r);switch(n){case S:return e*t;case D:return e*t/i.components*i.byteLength;case O:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case A:return e*t*2/i.components*i.byteLength;case C:return e*t*3/i.components*i.byteLength;case w:return e*t*4/i.components*i.byteLength;case ee:return e*t*4/i.components*i.byteLength;case j:case te:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case M:case ne:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case re:case ae:return Math.max(e,16)*Math.max(t,8)/4;case N:case ie:return Math.max(e,8)*Math.max(t,8)/2;case oe:case se:case le:case P:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ce:case ue:case de:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case pe:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case me:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case he:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ge:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case _e:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case ye:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case be:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case we:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Te:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case Ee:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function go(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:case x:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?R(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function _o(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function vo(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var G={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
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
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
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
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
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
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
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
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
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
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
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
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
		return 0.5 / max( gv + gl, EPSILON );
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
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
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
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
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
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
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
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
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
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
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
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
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
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
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
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
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
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
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
#include <envmap_physical_pars_fragment>
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
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
#include <envmap_physical_pars_fragment>
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
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
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
}`},K={common:{diffuse:{value:new W(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new U}},envmap:{envMap:{value:null},envMapRotation:{value:new U},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new U}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new U}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new U},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new U},normalScale:{value:new V(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new U},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new U}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new U}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new U}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new W(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new W(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0},uvTransform:{value:new U}},sprite:{diffuse:{value:new W(16777215)},opacity:{value:1},center:{value:new V(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new U},alphaMap:{value:null},alphaMapTransform:{value:new U},alphaTest:{value:0}}},yo={basic:{uniforms:qi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:G.meshbasic_vert,fragmentShader:G.meshbasic_frag},lambert:{uniforms:qi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},envMapIntensity:{value:1}}]),vertexShader:G.meshlambert_vert,fragmentShader:G.meshlambert_frag},phong:{uniforms:qi([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new W(0)},specular:{value:new W(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:G.meshphong_vert,fragmentShader:G.meshphong_frag},standard:{uniforms:qi([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new W(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag},toon:{uniforms:qi([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new W(0)}}]),vertexShader:G.meshtoon_vert,fragmentShader:G.meshtoon_frag},matcap:{uniforms:qi([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:G.meshmatcap_vert,fragmentShader:G.meshmatcap_frag},points:{uniforms:qi([K.points,K.fog]),vertexShader:G.points_vert,fragmentShader:G.points_frag},dashed:{uniforms:qi([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:G.linedashed_vert,fragmentShader:G.linedashed_frag},depth:{uniforms:qi([K.common,K.displacementmap]),vertexShader:G.depth_vert,fragmentShader:G.depth_frag},normal:{uniforms:qi([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:G.meshnormal_vert,fragmentShader:G.meshnormal_frag},sprite:{uniforms:qi([K.sprite,K.fog]),vertexShader:G.sprite_vert,fragmentShader:G.sprite_frag},background:{uniforms:{uvTransform:{value:new U},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:G.background_vert,fragmentShader:G.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new U}},vertexShader:G.backgroundCube_vert,fragmentShader:G.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:G.cube_vert,fragmentShader:G.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:G.equirect_vert,fragmentShader:G.equirect_frag},distance:{uniforms:qi([K.common,K.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:G.distance_vert,fragmentShader:G.distance_frag},shadow:{uniforms:qi([K.lights,K.fog,{color:{value:new W(0)},opacity:{value:1}}]),vertexShader:G.shadow_vert,fragmentShader:G.shadow_frag}};yo.physical={uniforms:qi([yo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new U},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new U},clearcoatNormalScale:{value:new V(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new U},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new U},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new U},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new U},sheen:{value:0},sheenColor:{value:new W(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new U},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new U},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new U},transmissionSamplerSize:{value:new V},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new U},attenuationDistance:{value:0},attenuationColor:{value:new W(0)},specularColor:{value:new W(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new U},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new U},anisotropyVector:{value:new V},anisotropyMap:{value:null},anisotropyMapTransform:{value:new U}}]),vertexShader:G.meshphysical_vert,fragmentShader:G.meshphysical_frag};var bo={r:0,b:0,g:0},xo=new Ft,So=new U;So.set(-1,0,0,0,1,0,0,0,1);function Co(e,t,n,r,i,a){let o=new W(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new ri(new Fi(1,1,1),new ea({name:`BackgroundCubeMaterial`,uniforms:Ki(yo.backgroundCube.uniforms),vertexShader:yo.backgroundCube.vertexShader,fragmentShader:yo.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(xo.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(So),l.material.toneMapped=yt.getTransfer(i.colorSpace)!==Ve,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new ri(new Ui(2,2),new ea({name:`BackgroundMaterial`,uniforms:Ki(yo.background.uniforms),vertexShader:yo.background.vertexShader,fragmentShader:yo.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=yt.getTransfer(i.colorSpace)!==Ve,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(bo,Xi(e)),n.buffers.color.setClear(bo.r,bo.g,bo.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function wo(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function To(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Eo(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(R(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&R(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&R(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Do(e){let t=this,n=null,r=0,i=!1,a=!1,o=new xr,s=new U,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Oo=class extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ai(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Fi(5,5,5),i=new ea({name:`CubemapFromEquirect`,uniforms:Ki(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new ri(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Ja(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ko=256,Ao=3,jo=20,Mo=256,No=16,Po=3,Fo=new H,Io=new W,Lo=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ja(1,10,null),this._boxMesh=new ri(new Fi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Fo}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Io));let h=new Ja(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(ko,ct(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?ko:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Ro(e,!1,!1),n=Math.log2(e)-Ao;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Ro(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wo()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Uo()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Bo(),this._integrationMaterial=Vo());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/No);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Po)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Mo*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Ho());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Ro(e,t,n){return new Oo(e,{minFilter:c,generateMipmaps:t,type:g,colorSpace:L,depthBuffer:n})}function zo(e,t,n){return new ea({name:e,uniforms:t,vertexShader:G.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Bo(){return zo(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Mo}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Vo(){return zo(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:No}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Ho(){return zo(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${jo}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Uo(){return zo(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Wo(){return zo(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Go(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Oo(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new Lo(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new Lo(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function Ko(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&Qe(`WebGLRenderer: `+e+` extension not supported.`),t}}}function qo(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?er:$n)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function Jo(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Yo(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:z(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Xo(e,t,n){let r=new WeakMap,i=new At;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Nt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new V(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Zo(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var Qo={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function $o(e,t,n,r,i,a){let o=new Mt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new pr;u.setAttribute(`position`,new tr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new tr([0,2,0,0,2,0],2));let d=new ta({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new ri(u,d),p=new Ha(-1,1,1,-1,0,1),m=null,h=null,_=!1,v,b=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Mt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}),c=new Mt(t,n,{type:g,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Mi(t,n),a===!0&&(l.format=E,l.type=y)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(_||e.toneMapping===0&&x.length===0)return!1;if(b=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,_=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},yt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=Qo[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(b),e.render(f,p),b=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var es=new kt,ts=new Mi(1,1),ns=new Ni(1),rs=new Nt,is=new Pt,as=new Ai,os=[],ss=[],cs=new Float32Array(16),ls=new Float32Array(9),us=new Float32Array(4);function ds(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=os[i];if(a===void 0&&(a=new Float32Array(i),os[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function fs(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function ps(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function ms(e,t){let n=ss[t];n===void 0&&(n=new Int32Array(t),ss[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function hs(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function gs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fs(n,t))return;e.uniform2fv(this.addr,t),ps(n,t)}}function _s(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(fs(n,t))return;e.uniform3fv(this.addr,t),ps(n,t)}}function vs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fs(n,t))return;e.uniform4fv(this.addr,t),ps(n,t)}}function ys(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fs(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),ps(n,t)}else{if(fs(n,r))return;us.set(r),e.uniformMatrix2fv(this.addr,!1,us),ps(n,r)}}function bs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fs(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),ps(n,t)}else{if(fs(n,r))return;ls.set(r),e.uniformMatrix3fv(this.addr,!1,ls),ps(n,r)}}function xs(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(fs(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),ps(n,t)}else{if(fs(n,r))return;cs.set(r),e.uniformMatrix4fv(this.addr,!1,cs),ps(n,r)}}function Ss(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Cs(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fs(n,t))return;e.uniform2iv(this.addr,t),ps(n,t)}}function ws(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fs(n,t))return;e.uniform3iv(this.addr,t),ps(n,t)}}function Ts(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fs(n,t))return;e.uniform4iv(this.addr,t),ps(n,t)}}function Es(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ds(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(fs(n,t))return;e.uniform2uiv(this.addr,t),ps(n,t)}}function Os(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(fs(n,t))return;e.uniform3uiv(this.addr,t),ps(n,t)}}function ks(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(fs(n,t))return;e.uniform4uiv(this.addr,t),ps(n,t)}}function As(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function js(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?As(ts):es,n.setTexture2D(t||a,i)}function Ms(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||is,i)}function Ns(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?As(ns):as,n.setTextureCube(t||a,i)}function Ps(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||rs,i)}function Fs(e){switch(e){case 5126:return hs;case 35664:return gs;case 35665:return _s;case 35666:return vs;case 35674:return ys;case 35675:return bs;case 35676:return xs;case 5124:case 35670:return Ss;case 35667:case 35671:return Cs;case 35668:case 35672:return ws;case 35669:case 35673:return Ts;case 5125:return Es;case 36294:return Ds;case 36295:return Os;case 36296:return ks;case 35678:case 36198:case 36298:case 36306:case 35682:return js;case 35679:case 36299:case 36307:return Ms;case 35680:case 36300:case 36308:case 36293:return Ns;case 36289:case 36303:case 36311:case 36292:return Ps}}function Is(e,t){e.uniform1fv(this.addr,t)}function Ls(e,t){let n=ds(t,this.size,2);e.uniform2fv(this.addr,n)}function Rs(e,t){let n=ds(t,this.size,3);e.uniform3fv(this.addr,n)}function zs(e,t){let n=ds(t,this.size,4);e.uniform4fv(this.addr,n)}function Bs(e,t){let n=ds(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Vs(e,t){let n=ds(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Hs(e,t){let n=ds(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Us(e,t){e.uniform1iv(this.addr,t)}function Ws(e,t){e.uniform2iv(this.addr,t)}function Gs(e,t){e.uniform3iv(this.addr,t)}function Ks(e,t){e.uniform4iv(this.addr,t)}function qs(e,t){e.uniform1uiv(this.addr,t)}function Js(e,t){e.uniform2uiv(this.addr,t)}function Ys(e,t){e.uniform3uiv(this.addr,t)}function Xs(e,t){e.uniform4uiv(this.addr,t)}function Zs(e,t,n){let r=this.cache,i=t.length,a=ms(n,i);fs(r,a)||(e.uniform1iv(this.addr,a),ps(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?As(ts):es;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function Qs(e,t,n){let r=this.cache,i=t.length,a=ms(n,i);fs(r,a)||(e.uniform1iv(this.addr,a),ps(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||is,a[e])}function $s(e,t,n){let r=this.cache,i=t.length,a=ms(n,i);fs(r,a)||(e.uniform1iv(this.addr,a),ps(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?As(ns):as;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ec(e,t,n){let r=this.cache,i=t.length,a=ms(n,i);fs(r,a)||(e.uniform1iv(this.addr,a),ps(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||rs,a[e])}function tc(e){switch(e){case 5126:return Is;case 35664:return Ls;case 35665:return Rs;case 35666:return zs;case 35674:return Bs;case 35675:return Vs;case 35676:return Hs;case 5124:case 35670:return Us;case 35667:case 35671:return Ws;case 35668:case 35672:return Gs;case 35669:case 35673:return Ks;case 5125:return qs;case 36294:return Js;case 36295:return Ys;case 36296:return Xs;case 35678:case 36198:case 36298:case 36306:case 35682:return Zs;case 35679:case 36299:case 36307:return Qs;case 35680:case 36300:case 36308:case 36293:return $s;case 36289:case 36303:case 36311:case 36292:return ec}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Fs(t.type)}},rc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tc(t.type)}},ic=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},ac=/(\w+)(\])?(\[|\.)?/g;function oc(e,t){e.seq.push(t),e.map[t.id]=t}function sc(e,t,n){let r=e.name,i=r.length;for(ac.lastIndex=0;;){let a=ac.exec(r),o=ac.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){oc(n,l===void 0?new nc(s,e,t):new rc(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ic(s),oc(n,e)),n=e}}}var cc=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);sc(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function lc(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var uc=37297,dc=0;function fc(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var pc=new U;function mc(e){yt._getMatrix(pc,yt.workingColorSpace,e);let t=`mat3( ${pc.elements.map(e=>e.toFixed(4))} )`;switch(yt.getTransfer(e)){case Be:return[t,`LinearTransferOETF`];case Ve:return[t,`sRGBTransferOETF`];default:return R(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function hc(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+fc(e.getShaderSource(t),r)}return i}function gc(e,t){let n=mc(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var _c={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function vc(e,t){let n=_c[t];return n===void 0?(R(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var yc=new H;function bc(){return yt.getLuminanceCoefficients(yc),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${yc.x.toFixed(4)}, ${yc.y.toFixed(4)}, ${yc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function xc(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(wc).join(`
`)}function Sc(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Cc(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function wc(e){return e!==``}function Tc(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Ec(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Dc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oc(e){return e.replace(Dc,kc)}function kc(e,t){let n=G[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Oc(n)}var Ac=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jc(e){return e.replace(Ac,Mc)}function Mc(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Nc(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Pc={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Fc(e){return Pc[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Ic={302:`ENVMAP_MODE_REFRACTION`};function Lc(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Ic[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Rc={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function zc(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Rc[e.combine]||`ENVMAP_BLENDING_NONE`}function Bc(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Fc(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=Lc(n),d=zc(n),f=xc(n),p=Sc(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(wc).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(wc).join(`
`),g.length>0&&(g+=`
`)):(h=[Nc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(wc).join(`
`),g=[Nc(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:G.tonemapping_pars_fragment,n.toneMapping===0?``:vc(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,G.colorspace_pars_fragment,gc(`linearToOutputTexel`,n.outputColorSpace),bc(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(wc).join(`
`)),o=Oc(o),o=Tc(o,n),o=Ec(o,n),s=Oc(s),s=Tc(s,n),s=Ec(s,n),o=jc(o),s=jc(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=lc(i,i.VERTEX_SHADER,v),x=lc(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=hc(i,b,`vertex`),n=hc(i,x,`fragment`);z(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):R(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new cc(i,m),w=Cc(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,uc)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=dc++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Vc=0,Hc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Uc(e),t.set(e,n)),n}},Uc=class{constructor(e){this.id=Vc++,this.code=e,this.usedTimes=0}};function Wc(e){return e===1030||e===37490||e===36285}function Gc(e,t,n,r,i,a){let o=new Kt,s=new Hc,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&R(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,k;if(x){let e=yo[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,k=t.id}let A=e.getRenderTarget(),ee=e.state.buffers.depth.getReversed(),j=m.isInstancedMesh===!0,te=m.isBatchedMesh===!0,M=!!i.map,ne=!!i.matcap,N=!!b,re=N&&b.isPMREMTexture===!0,ie=!!i.aoMap,ae=!!i.lightMap,oe=!!i.bumpMap&&i.wireframe===!1,se=!!i.normalMap,ce=!!i.displacementMap,le=!!i.emissiveMap,P=!!i.metalnessMap,ue=!!i.roughnessMap,de=i.anisotropy>0,fe=i.clearcoat>0,pe=i.diffuseRoughness>0,me=i.dispersion>0,he=i.retroreflectivity>0,ge=i.iridescence>0,_e=i.sheen>0,ve=i.transmission>0,ye=de&&!!i.anisotropyMap,be=fe&&!!i.clearcoatMap,xe=fe&&!!i.clearcoatNormalMap,Se=fe&&!!i.clearcoatRoughnessMap,Ce=pe&&!!i.diffuseRoughnessMap,we=ge&&!!i.iridescenceMap,Te=ge&&!!i.iridescenceThicknessMap,Ee=_e&&!!i.sheenColorMap,De=_e&&!!i.sheenRoughnessMap,Oe=!!i.specularMap,ke=!!i.specularColorMap,Ae=!!i.specularIntensityMap,je=ve&&!!i.transmissionMap,Me=ve&&!!i.thicknessMap,Ne=!!i.gradientMap,Pe=!!i.alphaMap,F=i.alphaTest>0,Fe=!!i.alphaHash,Ie=!!i.extensions,Le=0;i.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Le=e.toneMapping);let I=re?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Re={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:k,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:te,batchingColor:te&&m._colorsTexture!==null,instancing:j,instancingColor:j&&m.instanceColor!==null,instancingMorph:j&&m.morphTexture!==null,outputColorSpace:A===null?e.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:yt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:M,matcap:ne,envMap:N,envMapMode:N&&b.mapping,envMapPMREM:re,envMapMaxLod:re?I.length-1:null,envMapSize:re?I[0].width:null,aoMap:ie,lightMap:ae,bumpMap:oe,normalMap:se,displacementMap:ce,emissiveMap:le,normalMapObjectSpace:se&&i.normalMapType===1,normalMapTangentSpace:se&&i.normalMapType===0,packedNormalMap:se&&i.normalMapType===0&&Wc(i.normalMap.format),metalnessMap:P,roughnessMap:ue,anisotropy:de,anisotropyMap:ye,clearcoat:fe,clearcoatMap:be,clearcoatNormalMap:xe,clearcoatRoughnessMap:Se,diffuseRoughness:pe,diffuseRoughnessMap:Ce,dispersion:me,retroreflection:he,iridescence:ge,iridescenceMap:we,iridescenceThicknessMap:Te,sheen:_e,sheenColorMap:Ee,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:ve,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Pe,alphaTest:F,alphaHash:Fe,combine:i.combine,mapUv:M&&p(i.map.channel),aoMapUv:ie&&p(i.aoMap.channel),lightMapUv:ae&&p(i.lightMap.channel),bumpMapUv:oe&&p(i.bumpMap.channel),normalMapUv:se&&p(i.normalMap.channel),displacementMapUv:ce&&p(i.displacementMap.channel),emissiveMapUv:le&&p(i.emissiveMap.channel),metalnessMapUv:P&&p(i.metalnessMap.channel),roughnessMapUv:ue&&p(i.roughnessMap.channel),anisotropyMapUv:ye&&p(i.anisotropyMap.channel),clearcoatMapUv:be&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:xe&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Ce&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:we&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:De&&p(i.sheenRoughnessMap.channel),specularMapUv:Oe&&p(i.specularMap.channel),specularColorMapUv:ke&&p(i.specularColorMap.channel),specularIntensityMapUv:Ae&&p(i.specularIntensityMap.channel),transmissionMapUv:je&&p(i.transmissionMap.channel),thicknessMapUv:Me&&p(i.thicknessMap.channel),alphaMapUv:Pe&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(se||de),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(M||Pe),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&se===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ee,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:Le,decodeVideoTexture:M&&i.map.isVideoTexture===!0&&yt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:le&&i.emissiveMap.isVideoTexture===!0&&yt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Ie&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Ie&&i.extensions.multiDraw===!0||te)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Re.vertexUv1s=c.has(1),Re.vertexUv2s=c.has(2),Re.vertexUv3s=c.has(3),c.clear(),Re}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=yo[t];n=Zi.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Bc(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function Kc(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function qc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Jc(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Yc(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||qc),r.length>1&&r.sort(t||Jc),i.length>1&&i.sort(t||Jc)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function Xc(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Yc,e.set(t,[i])):n>=r.length?(i=new Yc,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new H,color:new W};break;case`SpotLight`:n={position:new H,direction:new H,color:new W,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new H,color:new W,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new H,skyColor:new W,groundColor:new W};break;case`RectAreaLight`:n={color:new W,position:new H,halfWidth:new H,halfHeight:new H}}return e[t.id]=n,n}}}function Qc(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new V,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var $c=0;function el(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function tl(e){let t=new Zc,n=Qc(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new H);let i=new H,a=new Ft,o=new Ft;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(el);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=$c++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function nl(e){let t=new tl(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function rl(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new nl(e),t.set(n,[a])):r>=i.length?(a=new nl(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var il=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,al=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ol=[new H(1,0,0),new H(-1,0,0),new H(0,1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1)],sl=[new H(0,-1,0),new H(0,-1,0),new H(0,0,1),new H(0,0,-1),new H(0,-1,0),new H(0,-1,0)],cl=new Ft,ll=new H,ul=new H;function dl(e,t,n){let i=new ui,a=new V,s=new V,c=new At,l=new ia,u=new aa,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},_=new ea({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new V},radius:{value:4}},vertexShader:il,fragmentShader:al}),v=_.clone();v.defines.HORIZONTAL_PASS=1;let y=new pr;y.setAttribute(`position`,new Qn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new ri(y,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(R(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.state;_.setBlending(0),_.buffers.depth.getReversed()===!0?_.buffers.color.setClear(0,0,0,0):_.buffers.color.setClear(1,1,1,1),_.buffers.depth.setTest(!0),_.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){R(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),s.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(s.x=Math.floor(f/y.x),a.x=s.x*y.x,p.mapSize.x=s.x),a.y>f&&(s.y=Math.floor(f/y.y),a.y=s.y*y.y,p.mapSize.y=s.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){R(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Mt(a.x,a.y,{format:k,type:g,minFilter:o,magFilter:o,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Mi(a.x,a.y,h),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=T,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r}else d.isPointLight?(p.map=new Oo(a.x),p.map.depthTexture=new Ni(a.x,m)):(p.map=new Mt(a.x,a.y),p.map.depthTexture=new Mi(a.x,a.y,m)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=T,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=o,p.map.depthTexture.magFilter=o):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=r,p.map.depthTexture.magFilter=r);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let r=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),ll.setFromMatrixPosition(d.matrixWorld),e.position.copy(ll),ul.copy(e.position),ul.add(ol[t]),e.up.copy(sl[t]),e.lookAt(ul),e.updateMatrixWorld(),n.makeTranslation(-ll.x,-ll.y,-ll.z),cl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(cl,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(s.x*n.x,s.y*n.y,s.x*n.z,s.y*n.w),_.viewport(c)}i=p.getFrustum(t),E(n,l,r,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);_.defines.VSM_SAMPLES!==n.blurSamples&&(_.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,_.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Mt(a.x,a.y,{format:k,type:g}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),_.uniforms.shadow_pass.value=n.map.depthTexture,_.uniforms.resolution.value.set(n.map.width,n.map.height),_.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,_,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function E(n,r,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(i))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),s=n.material;if(Array.isArray(s)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)E(l[e],r,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function fl(e,t){function n(){let t=!1,n=new At,r=null,i=new At(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?P(e.DEPTH_TEST):ue(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=et[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?P(e.STENCIL_TEST):ue(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,j=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,M=0,ne=e.getParameter(e.VERSION);ne.indexOf(`WebGL`)===-1?ne.indexOf(`OpenGL ES`)!==-1&&(M=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),te=M>=2):(M=parseFloat(/^WebGL (\d)/.exec(ne)[1]),te=M>=1);let N=null,re={},ie=e.getParameter(e.SCISSOR_BOX),ae=e.getParameter(e.VIEWPORT),oe=new At().fromArray(ie),se=new At().fromArray(ae);function ce(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let le={};le[e.TEXTURE_2D]=ce(e.TEXTURE_2D,e.TEXTURE_2D,1),le[e.TEXTURE_CUBE_MAP]=ce(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[e.TEXTURE_2D_ARRAY]=ce(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),le[e.TEXTURE_3D]=ce(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),P(e.DEPTH_TEST),o.setFunc(3),ve(!1),ye(1),P(e.CULL_FACE),ge(0);function P(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ue(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function de(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function fe(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function pe(t){return h!==t&&(e.useProgram(t),h=t,!0)}let me={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};me[103]=e.MIN,me[104]=e.MAX;let he={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ge(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(ue(e.BLEND),g=!1);else if(g===!1&&(P(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:z(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:z(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:z(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:z(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(me[n],me[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(he[r],he[i],he[o],he[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function _e(t,n){t.side===2?ue(e.CULL_FACE):P(e.CULL_FACE);let r=t.side===1;n&&(r=!r),ve(r),t.blending===1&&t.transparent===!1?ge(0):ge(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),xe(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?P(e.SAMPLE_ALPHA_TO_COVERAGE):ue(e.SAMPLE_ALPHA_TO_COVERAGE)}function ve(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function ye(t){t===0?ue(e.CULL_FACE):(P(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function be(t){t!==k&&(te&&e.lineWidth(t),k=t)}function xe(t,n,r){t?(P(e.POLYGON_OFFSET_FILL),(A!==n||ee!==r)&&(A=n,ee=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):ue(e.POLYGON_OFFSET_FILL)}function Se(t){t?P(e.SCISSOR_TEST):ue(e.SCISSOR_TEST)}function Ce(t){t===void 0&&(t=e.TEXTURE0+j-1),N!==t&&(e.activeTexture(t),N=t)}function we(t,n,r){r===void 0&&(r=N===null?e.TEXTURE0+j-1:N);let i=re[r];i===void 0&&(i={type:void 0,texture:void 0},re[r]=i),(i.type!==t||i.texture!==n)&&(N!==r&&(e.activeTexture(r),N=r),e.bindTexture(t,n||le[t]),i.type=t,i.texture=n)}function Te(){let t=re[N];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Ee(){try{e.compressedTexImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function De(){try{e.compressedTexImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Oe(){try{e.texSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function ke(){try{e.texSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ae(){try{e.compressedTexSubImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function je(){try{e.compressedTexSubImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Me(){try{e.texStorage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Ne(){try{e.texStorage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Pe(){try{e.texImage2D(...arguments)}catch(e){z(`WebGLState:`,e)}}function F(){try{e.texImage3D(...arguments)}catch(e){z(`WebGLState:`,e)}}function Fe(t){return d[t]===void 0?e.getParameter(t):d[t]}function Ie(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function Le(t){oe.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),oe.copy(t))}function I(t){se.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),se.copy(t))}function Re(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function ze(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function L(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},N=null,re={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new W(0,0,0),T=0,E=!1,D=null,O=null,k=null,A=null,ee=null,oe.set(0,0,e.canvas.width,e.canvas.height),se.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:P,disable:ue,bindFramebuffer:de,drawBuffers:fe,useProgram:pe,setBlending:ge,setMaterial:_e,setFlipSided:ve,setCullFace:ye,setLineWidth:be,setPolygonOffset:xe,setScissorTest:Se,activeTexture:Ce,bindTexture:we,unbindTexture:Te,compressedTexImage2D:Ee,compressedTexImage3D:De,texImage2D:Pe,texImage3D:F,pixelStorei:Ie,getParameter:Fe,updateUBOMapping:Re,uniformBlockBinding:ze,texStorage2D:Me,texStorage3D:Ne,texSubImage2D:Oe,texSubImage3D:ke,compressedTexSubImage2D:Ae,compressedTexSubImage3D:je,scissor:Le,viewport:I,reset:L}}function pl(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new V,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function D(e,t){return T?new OffscreenCanvas(e,t):qe(`canvas`)}function O(e,t,n){let r=1,i=L(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=D(n,a));let o=t?D(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),R(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&R(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function k(e){return e.generateMipmaps}function A(e){l.generateMipmap(e)}function ee(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function j(e,t,n,r,i,a=!1){if(e!==null){if(l[e]!==void 0)return l[e];R(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let o;r&&(o=u.get(`EXT_texture_norm16`),o||R(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let s=t;if(t===l.RED&&(n===l.FLOAT&&(s=l.R32F),n===l.HALF_FLOAT&&(s=l.R16F),n===l.UNSIGNED_BYTE&&(s=l.R8),n===l.UNSIGNED_SHORT&&o&&(s=o.R16_EXT),n===l.SHORT&&o&&(s=o.R16_SNORM_EXT)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.R8UI),n===l.UNSIGNED_SHORT&&(s=l.R16UI),n===l.UNSIGNED_INT&&(s=l.R32UI),n===l.BYTE&&(s=l.R8I),n===l.SHORT&&(s=l.R16I),n===l.INT&&(s=l.R32I)),t===l.RG&&(n===l.FLOAT&&(s=l.RG32F),n===l.HALF_FLOAT&&(s=l.RG16F),n===l.UNSIGNED_BYTE&&(s=l.RG8),n===l.UNSIGNED_SHORT&&o&&(s=o.RG16_EXT),n===l.SHORT&&o&&(s=o.RG16_SNORM_EXT)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RG8UI),n===l.UNSIGNED_SHORT&&(s=l.RG16UI),n===l.UNSIGNED_INT&&(s=l.RG32UI),n===l.BYTE&&(s=l.RG8I),n===l.SHORT&&(s=l.RG16I),n===l.INT&&(s=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGB8UI),n===l.UNSIGNED_SHORT&&(s=l.RGB16UI),n===l.UNSIGNED_INT&&(s=l.RGB32UI),n===l.BYTE&&(s=l.RGB8I),n===l.SHORT&&(s=l.RGB16I),n===l.INT&&(s=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(s=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(s=l.RGBA16UI),n===l.UNSIGNED_INT&&(s=l.RGBA32UI),n===l.BYTE&&(s=l.RGBA8I),n===l.SHORT&&(s=l.RGBA16I),n===l.INT&&(s=l.RGBA32I)),t===l.RGB&&(n===l.UNSIGNED_SHORT&&o&&(s=o.RGB16_EXT),n===l.SHORT&&o&&(s=o.RGB16_SNORM_EXT),n===l.UNSIGNED_INT_5_9_9_9_REV&&(s=l.RGB9_E5),n===l.UNSIGNED_INT_10F_11F_11F_REV&&(s=l.R11F_G11F_B10F)),t===l.RGBA){let e=a?Be:yt.getTransfer(i);n===l.FLOAT&&(s=l.RGBA32F),n===l.HALF_FLOAT&&(s=l.RGBA16F),n===l.UNSIGNED_BYTE&&(s=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT&&o&&(s=o.RGBA16_EXT),n===l.SHORT&&o&&(s=o.RGBA16_SNORM_EXT),n===l.UNSIGNED_SHORT_4_4_4_4&&(s=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(s=l.RGB5_A1)}return(s===l.R16F||s===l.R32F||s===l.RG16F||s===l.RG32F||s===l.RGBA16F||s===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),s}function te(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,R(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function M(e,t){return k(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ne(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function N(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function re(e){ae(e.target)}function ie(e){oe(e.target)}function ae(e){e.removeEventListener(`dispose`,re),N(e),ce(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function oe(e){e.removeEventListener(`dispose`,ie),N(e),P(e)}function se(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?oe(t):ae(t))}C.clear(),b.clear()}function ce(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&le(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function le(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=S.get(n);delete r[t.__cacheKey],h.memory.textures--}function P(e){let t=f.get(e);t.__depthDisposeCallback&&t.__depthDisposeCallback();let n=e.depthTexture;if(n&&n.renderTarget===e&&ae(n),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let r=e.textures;for(let e=0,t=r.length;e<t;e++){let t=f.get(r[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(r[e])}f.remove(e)}let ue=0;function de(){ue=0}function fe(){return ue}function pe(e){ue=e}function me(){let e=ue;return e>=p.maxTextures&&R(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),ue+=1,e}function he(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ge(e,t){let n=f.get(e);if(e.isVideoTexture&&Re(e),e.isRenderTargetTexture===!1&&e.isExternalTexture!==!0&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)R(`WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)R(`WebGLRenderer: Texture marked for update but image is incomplete`);else{De(n,e,t);return}}else e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null);d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function _e(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):(e.isExternalTexture&&(n.__webglTexture=e.sourceTexture?e.sourceTexture:null),d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t))}function ve(e,t){let n=f.get(e);e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version?De(n,e,t):d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ye(e,t){let n=f.get(e);e.version>0&&n.__version!==e.version?Oe(n,e,t):d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let be={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},xe={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},Se={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function Ce(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&R(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,be[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,be[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,be[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,xe[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,xe[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,Se[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function we(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re),ne(t));let r=t.source,i=S.get(r);i===void 0&&(i={},S.set(r,i));let a=he(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&le(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Te(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Ee(e,t,n,r){let i=e.updateRanges;if(i.length===0)d.texSubImage2D(l.TEXTURE_2D,0,0,0,t.width,t.height,n,r,t.data);else{i.sort((e,t)=>e.start-t.start);let a=0;for(let e=1;e<i.length;e++){let n=i[a],r=i[e],o=n.start+n.count,s=Te(r.start,t.width,4),c=Te(n.start,t.width,4);r.start<=o+1&&s===c&&Te(r.start+r.count-1,t.width,4)===s?n.count=Math.max(n.count,r.start+r.count-n.start):(++a,i[a]=r)}i.length=a+1;let o=d.getParameter(l.UNPACK_ROW_LENGTH),s=d.getParameter(l.UNPACK_SKIP_PIXELS),c=d.getParameter(l.UNPACK_SKIP_ROWS);d.pixelStorei(l.UNPACK_ROW_LENGTH,t.width);for(let e=0,a=i.length;e<a;e++){let a=i[e],o=Math.floor(a.start/4),s=Math.ceil(a.count/4),c=o%t.width,u=Math.floor(o/t.width),f=s;d.pixelStorei(l.UNPACK_SKIP_PIXELS,c),d.pixelStorei(l.UNPACK_SKIP_ROWS,u),d.texSubImage2D(l.TEXTURE_2D,0,c,u,f,1,n,r,t.data)}e.clearUpdateRanges(),d.pixelStorei(l.UNPACK_ROW_LENGTH,o),d.pixelStorei(l.UNPACK_SKIP_PIXELS,s),d.pixelStorei(l.UNPACK_SKIP_ROWS,c)}}function De(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=we(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){if(d.activeTexture(l.TEXTURE0+n),!(typeof ImageBitmap<`u`&&t.image instanceof ImageBitmap)){let e=yt.getPrimaries(yt.workingColorSpace),n=t.colorSpace===``?null:yt.getPrimaries(t.colorSpace),r=t.colorSpace===``||e===n?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,r)}d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment);let e=O(t.image,!1,p.maxTextureSize);e=ze(t,e);let s=m.convert(t.format,t.colorSpace),c=m.convert(t.type),u=j(t.internalFormat,s,c,t.normalized,t.colorSpace,t.isVideoTexture);Ce(r,t);let f,h=t.mipmaps,g=t.isVideoTexture!==!0,_=o.__version===void 0||i===!0,v=a.dataReady,y=M(t,e);if(t.isDepthTexture)u=te(t.format===E,t.type),_&&(g?d.texStorage2D(l.TEXTURE_2D,1,u,e.width,e.height):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,null));else if(t.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data);t.generateMipmaps=!1}else g?(_&&d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height),v&&Ee(t,e,s,c)):d.texImage2D(l.TEXTURE_2D,0,u,e.width,e.height,0,s,c,e.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){g&&_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,e.depth);for(let n=0,r=h.length;n<r;n++)if(f=h[n],t.format!==1023){if(s!==null){if(g){if(v){if(t.layerUpdates.size>0){let e=ho(f.width,f.height,t.format,t.type);for(let r of t.layerUpdates){let t=f.data.subarray(r*e/f.data.BYTES_PER_ELEMENT,(r+1)*e/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,r,f.width,f.height,1,s,t)}}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,f.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,f.data,0,0)}else R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,n,0,0,0,f.width,f.height,e.depth,s,c,f.data):d.texImage3D(l.TEXTURE_2D_ARRAY,n,u,f.width,f.height,e.depth,0,s,c,f.data);t.layerUpdates.size>0&&t.clearLayerUpdates()}else{g&&_&&d.texStorage2D(l.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let e=0,n=h.length;e<n;e++)f=h[e],t.format===1023?g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,c,f.data):d.texImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,s,c,f.data):s===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,f.width,f.height,s,f.data):d.compressedTexImage2D(l.TEXTURE_2D,e,u,f.width,f.height,0,f.data)}}else if(t.isDataArrayTexture){if(g){if(_&&d.texStorage3D(l.TEXTURE_2D_ARRAY,y,u,e.width,e.height,e.depth),v){if(t.layerUpdates.size>0){let n=ho(e.width,e.height,t.format,t.type);for(let r of t.layerUpdates){let t=e.data.subarray(r*n/e.data.BYTES_PER_ELEMENT,(r+1)*n/e.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,r,e.width,e.height,1,s,c,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,u,e.width,e.height,e.depth,0,s,c,e.data)}else if(t.isData3DTexture)g?(_&&d.texStorage3D(l.TEXTURE_3D,y,u,e.width,e.height,e.depth),v&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,e.width,e.height,e.depth,s,c,e.data)):d.texImage3D(l.TEXTURE_3D,0,u,e.width,e.height,e.depth,0,s,c,e.data);else if(t.isFramebufferTexture){if(_){if(g)d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height);else{let t=e.width,n=e.height;for(let e=0;e<y;e++)d.texImage2D(l.TEXTURE_2D,e,u,t,n,0,s,c,null),t>>=1,n>>=1}}}else if(t.isHTMLTexture){if(`texElementImage2D`in l){let n=l.canvas;if(n.hasAttribute(`layoutsubtree`)||n.setAttribute(`layoutsubtree`,`true`),e.parentNode!==n){n.appendChild(e),b.add(t),n.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},n.requestPaint();return}if(l.texElementImage2D.length===3)l.texElementImage2D(l.TEXTURE_2D,l.RGBA8,e);else{let t=l.RGBA,n=l.RGBA,r=l.UNSIGNED_BYTE;l.texElementImage2D(l.TEXTURE_2D,0,t,n,r,e)}l.texParameteri(l.TEXTURE_2D,l.TEXTURE_MIN_FILTER,l.LINEAR),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_S,l.CLAMP_TO_EDGE),l.texParameteri(l.TEXTURE_2D,l.TEXTURE_WRAP_T,l.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let e=L(h[0]);d.texStorage2D(l.TEXTURE_2D,y,u,e.width,e.height)}for(let e=0,t=h.length;e<t;e++)f=h[e],g?v&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,s,c,f):d.texImage2D(l.TEXTURE_2D,e,u,s,c,f);t.generateMipmaps=!1}else if(g){if(_){let t=L(e);d.texStorage2D(l.TEXTURE_2D,y,u,t.width,t.height)}v&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,s,c,e)}else d.texImage2D(l.TEXTURE_2D,0,u,s,c,e);k(t)&&t.mipmapsAutoUpdate===!0&&A(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Oe(e,t,n){if(t.image.length!==6)return;let r=we(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=yt.getPrimaries(yt.workingColorSpace),o=t.colorSpace===``?null:yt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;d.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),d.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),d.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),d.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=O(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=ze(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=j(t.internalFormat,g,_,t.normalized,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=M(t,h);Ce(l.TEXTURE_CUBE_MAP,t);let C;if(t.isDepthTexture){if(v=te(t.format===E,t.type),b){if(y)d.texStorage2D(l.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let e=0;e<6;e++)d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,h.width,h.height,0,g,_,null)}}else if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?R(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=L(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}k(t)&&t.mipmapsAutoUpdate===!0&&A(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function ke(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=j(n.internalFormat,o,s,n.normalized,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Le(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ae(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=te(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=j(i.internalFormat,a,o,i.normalized,i.colorSpace);I(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,Le(t),s,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,Le(t),s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function je(e,t,n){let r=t.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let i=f.get(t.depthTexture);i.__renderTarget=t;let a=r?t.depthTexture.image[0]:t.depthTexture.image;i.__webglTexture&&a.width===t.width&&a.height===t.height||(a.width=t.width,a.height=t.height,t.depthTexture.needsUpdate=!0),r?ye(t.depthTexture,0):ge(t.depthTexture,0);let o=i.__webglTexture,s=Le(t),c=r?l.TEXTURE_CUBE_MAP_POSITIVE_X+n:l.TEXTURE_2D,u=t.depthTexture.format===1027?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;if(t.depthTexture.format===1026)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else if(t.depthTexture.format===1027)I(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,u,c,o,0,s):l.framebufferTexture2D(l.FRAMEBUFFER,u,c,o,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Me(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)for(let n=0;n<6;n++)je(t.__webglFramebuffer[n],e,n);else e.texture.mipmaps.length>0?je(t.__webglFramebuffer[0],e,0):je(t.__webglFramebuffer,e,0)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ae(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(e.texture.mipmaps.length>0?d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[0]):d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ae(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ne(e,t,n){let r=f.get(e);t!==void 0&&ke(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Me(e)}function Pe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ie),ne(e);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&I(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=j(r.internalFormat,a,o,r.normalized,r.colorSpace,e.isXRRenderTarget===!0),c=Le(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ae(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),Ce(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)ke(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);k(t)?A(l.TEXTURE_CUBE_MAP):t.mipmaps.length>0&&l.texParameteri(l.TEXTURE_CUBE_MAP,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r),o=l.TEXTURE_2D;(e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(o=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(o,a.__webglTexture),Ce(o,r),ke(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,o,0),k(r)&&A(o)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),Ce(i,t),t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)ke(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else ke(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);k(t)?A(i):t.mipmaps.length>0&&l.texParameteri(i,l.TEXTURE_MAX_LEVEL,t.mipmaps.length-1),d.unbindTexture()}e.depthBuffer&&Me(e)}function F(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(k(r)&&r.mipmapsAutoUpdate===!0){let t=ee(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),A(t),d.unbindTexture()}}}let Fe=[];function Ie(e){if(e.samples>0){if(I(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),e.texture.mipmaps.length>0?d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer[0]):d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Fe.length=0,Fe.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&Fe.push(a),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Fe))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.storeMultisampledDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Le(e){return Math.min(p.maxSamples,e.samples)}function I(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Re(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function ze(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(yt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&R(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):z(`WebGLTextures: Unsupported texture color space:`,n)),t}function L(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=me,this.resetTextureUnits=de,this.getTextureUnits=fe,this.setTextureUnits=pe,this.setTexture2D=ge,this.setTexture2DArray=_e,this.setTexture3D=ve,this.setTextureCube=ye,this.rebindTextures=Ne,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=ke,this.useMultisampledRTT=I,this.dispose=se}function ml(e,t){function n(n,r=``){let i,a=yt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var hl=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,gl=`
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

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Pi(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ea({vertexShader:hl,fragmentShader:gl,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ri(new Ui(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},vl=class extends tt{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=typeof XRWebGLBinding<`u`,_=new _l,v={},b=t.getContextAttributes(),x=null,S=null,C=[],D=[],O=new V,k=null,A=null,ee=new za;ee.viewport=new At;let j=new za;j.viewport=new At;let te=[ee,j],M=new Ya,ne=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new fn,C[e]=t),t.getHandSpace()};function re(e){let t=D.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function ie(){r.removeEventListener(`select`,re),r.removeEventListener(`selectstart`,re),r.removeEventListener(`selectend`,re),r.removeEventListener(`squeeze`,re),r.removeEventListener(`squeezestart`,re),r.removeEventListener(`squeezeend`,re),r.removeEventListener(`end`,ie),r.removeEventListener(`inputsourceschange`,ae);for(let e=0;e<C.length;e++){let t=D[e];t!==null&&(D[e]=null,C[e].disconnect(t))}ne=null,N=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,P.stop(),n.isPresenting=!1,e.setPixelRatio(k),e.setSize(O.width,O.height,!1),A!==null){let e=A.camera;e.fov=A.fov,e.zoom=A.zoom,e.updateProjectionMatrix(),A=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&R(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,re),r.addEventListener(`selectstart`,re),r.addEventListener(`selectend`,re),r.addEventListener(`squeeze`,re),r.addEventListener(`squeezestart`,re),r.addEventListener(`squeezeend`,re),r.addEventListener(`end`,ie),r.addEventListener(`inputsourceschange`,ae),b.xrCompatible!==!0&&await t.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;b.depth&&(o=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=b.stencil?E:T,a=b.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Mt(f.textureWidth,f.textureHeight,{format:w,type:l,depthTexture:new Mi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Mt(p.framebufferWidth,p.framebufferHeight,{format:w,type:l,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),P.setContext(r),P.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=D.indexOf(n);r>=0&&(D[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=D.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=D.length){D.push(n),r=e;break}else if(D[e]===null){D[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function oe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),M.near=j.near=ee.near=t,M.far=j.far=ee.far=n,(ne!==M.near||N!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),ne=M.near,N=M.far),M.layers.mask=e.layers.mask|6,ee.layers.mask=M.layers.mask&-5,j.layers.mask=M.layers.mask&-3;let i=e.parent,a=M.cameras;oe(M,i);for(let e=0;e<a.length;e++)oe(a[e],i);M.projectionMatrix.copy(ee.projectionMatrix),M.projectionMatrixInverse.copy(ee.projectionMatrixInverse),A===null&&e.isPerspectiveCamera&&(A={camera:e,fov:e.fov,zoom:e.zoom}),se(e,M,i)};function se(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=it*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)},this.getCameraTexture=function(e){return v[e]};let ce=null;function le(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==M.cameras.length&&(M.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=te[n];o===void 0&&(o=new za,o.layers.enable(n),o.viewport=new At,te[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(M.matrix.copy(o.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),i===!0&&M.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new Pi,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=D[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ce&&ce(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let P=new _o;P.setAnimationLoop(le),this.setAnimationLoop=function(e){ce=e},this.dispose=function(){}}},yl=new Ft,bl=new U;bl.set(-1,0,0,0,1,0,0,0,1);function xl(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Xi(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(yl.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(bl),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Sl(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?R(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):R(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Cl=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),wl=null;function Tl(){return wl===null&&(wl=new oi(Cl,16,16,k,g),wl.name=`DFG_LUT`,wl.minFilter=o,wl.magFilter=o,wl.wrapS=t,wl.wrapT=t,wl.generateMipmaps=!1,wl.needsUpdate=!0),wl}var El=class{constructor(e={}){let{canvas:t=Je(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:h=!1,outputBufferType:b=l}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=b,C=new Set([ee,A,O]),w=new Set([l,m,f,y,_,v]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},k=null,j=null,te=[],M=[],ne=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let N=this,re=!1,ie=null,ae=null,oe=null,se=null;this._outputColorSpace=ze;let ce=0,le=0,P=null,ue=-1,de=null,fe=new At,pe=new At,me=null,he=new W(0),ge=0,_e=t.width,ve=t.height,ye=1,be=null,xe=null,Se=new At(0,0,_e,ve),Ce=new At(0,0,_e,ve),we=!1,Te=new ui,Ee=new fi,De=!1,Oe=!1,ke=new Ft,Ae=new H,je=new At,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ne=!1;function Pe(){return P===null?ye:1}let F=n;function Fe(e,n){return t.getContext(e,n)}let Ie,Le,I,Re,L,Be,Ve,He,Ue,Ge,Ke,qe,Ye,Ze,Qe,et,tt,nt,rt,it,at,B,ot;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:p};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,lt,!1),t.addEventListener(`webglcontextrestored`,ut,!1),t.addEventListener(`webglcontextcreationerror`,dt,!1),F===null){let t=`webgl2`;if(F=Fe(t,e),F===null)throw Fe(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}st()}catch(e){throw t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),z(`WebGLRenderer: `+e.message),e}function st(){Ie=new Ko(F),Ie.init(),at=new ml(F,Ie),Le=new Eo(F,Ie,e,at),I=new fl(F,Ie),Le.reversedDepthBuffer&&h&&I.buffers.depth.setReversed(!0),ae=F.createFramebuffer(),oe=F.createFramebuffer(),se=F.createFramebuffer(),Re=new Yo(F),L=new Kc,Be=new pl(F,Ie,I,L,Le,at,Re),Ve=new Go(N),He=new vo(F),B=new wo(F,He),Ue=new qo(F,He,Re,B),Ge=new Zo(F,Ue,He,B,Re),nt=new Xo(F,Le,Be),Qe=new Do(L),Ke=new Gc(N,Ve,Ie,Le,B,Qe),qe=new xl(N,L),Ye=new Xc,Ze=new rl(Ie),tt=new Co(N,Ve,I,Ge,x,s),et=new dl(N,Ge,Le),ot=new Sl(F,Re,Le,I),rt=new To(F,Ie,Re),it=new Jo(F,Ie,Re),Re.programs=Ke.programs,N.capabilities=Le,N.extensions=Ie,N.properties=L,N.renderLists=Ye,N.shadowMap=et,N.state=I,N.info=Re}S!==1009&&(ne=new $o(S,t.width,t.height,o,r,i));let ct=new vl(N,F);this.xr=ct,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Ie.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(e){e!==void 0&&(ye=e,this.setSize(_e,ve,!1))},this.getSize=function(e){return e.set(_e,ve)},this.setSize=function(e,n,r=!0){ct.isPresenting?R(`WebGLRenderer: Can't change size while VR device is presenting.`):(_e=e,ve=n,t.width=Math.floor(e*ye),t.height=Math.floor(n*ye),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ne!==null&&ne.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(_e*ye,ve*ye).floor()},this.setDrawingBufferSize=function(e,n,r){_e=e,ve=n,ye=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)z(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){R(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ne.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(fe)},this.getViewport=function(e){return e.copy(Se)},this.setViewport=function(e,t,n,r){e.isVector4?Se.set(e.x,e.y,e.z,e.w):Se.set(e,t,n,r),I.viewport(fe.copy(Se).multiplyScalar(Pe()).round())},this.getScissor=function(e){return e.copy(Ce)},this.setScissor=function(e,t,n,r){e.isVector4?Ce.set(e.x,e.y,e.z,e.w):Ce.set(e,t,n,r),I.scissor(pe.copy(Ce).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(e){I.setScissorTest(we=e)},this.setOpaqueSort=function(e){be=e},this.setTransparentSort=function(e){xe=e},this.getClearColor=function(e){return e.copy(tt.getClearColor())},this.setClearColor=function(){tt.setClearColor(...arguments)},this.getClearAlpha=function(){return tt.getClearAlpha()},this.setClearAlpha=function(){tt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(P!==null){let t=P.texture.format;e=C.has(t)}if(e){let e=P.texture.type,t=w.has(e),n=tt.getClearColor(),r=tt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,F.clearBufferuiv(F.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,F.clearBufferiv(F.COLOR,0,E))}else r|=F.COLOR_BUFFER_BIT}t&&(r|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&F.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),ie=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,lt,!1),t.removeEventListener(`webglcontextrestored`,ut,!1),t.removeEventListener(`webglcontextcreationerror`,dt,!1),tt.dispose(),Ye.dispose(),Ze.dispose(),Be.dispose(),L.dispose(),Ve.dispose(),Ge.dispose(),Ue.dispose(),B.dispose(),ot.dispose(),Ke.dispose(),ct.dispose(),ct.removeEventListener(`sessionstart`,gt),ct.removeEventListener(`sessionend`,_t),vt.stop()};function lt(e){e.preventDefault(),Xe(`WebGLRenderer: Context Lost.`),re=!0}function ut(){Xe(`WebGLRenderer: Context Restored.`),re=!1;let e=Re.autoReset,t=et.enabled,n=et.autoUpdate,r=et.needsUpdate,i=et.type;st(),Re.autoReset=e,et.enabled=t,et.autoUpdate=n,et.needsUpdate=r,et.type=i}function dt(e){z(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function V(e){let t=e.target;t.removeEventListener(`dispose`,V),ft(t)}function ft(e){pt(e),L.remove(e)}function pt(e){let t=L.get(e).programs;t!==void 0&&(t.forEach(function(e){Ke.releaseProgram(e)}),e.isShaderMaterial&&Ke.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Me);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=jt(e,t,n,r,i);I.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ue.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;B.setup(i,r,s,n,c);let h,g=rt;if(c!==null&&(h=He.get(c),g=it,g.setIndex(h)),i.isMesh)r.wireframe===!0?(I.setLineWidth(r.wireframeLinewidth*Pe()),g.setMode(F.LINES)):g.setMode(F.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),I.setLineWidth(e*Pe()),i.isLineSegments?g.setMode(F.LINES):i.isLineLoop?g.setMode(F.LINE_LOOP):g.setMode(F.LINE_STRIP)}else i.isPoints?g.setMode(F.POINTS):i.isSprite&&g.setMode(F.TRIANGLES);if(i.isBatchedMesh){if(Ie.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?He.get(c).bytesPerElement:1,o=L.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(F,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function mt(e,t,n,r){ie!==null&&e.isNodeMaterial&&ie.setObject(r,e),De===!0&&Qe.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,Et(e,t,r),e.side=0,e.needsUpdate=!0,Et(e,t,r),e.side=2):Et(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),ie!==null&&ie.renderStart(e,t,n),j=Ze.get(n),j.init(t),M.push(j),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(j.pushLight(e),e.castShadow&&j.pushShadow(e))}),j.setupLights(),ie!==null&&ie.updateLights(j.state.lightsArray),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),De===!0&&Qe.setGlobalState(this.clippingPlanes,t),ie!==null&&et.render(j.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];mt(o,n,t,e),r.add(o)}else mt(i,n,t,e),r.add(i)}}),j=M.pop(),ie!==null&&ie.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=L.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Ie.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let U=null;function ht(e){U&&U(e)}function gt(){vt.stop()}function _t(){vt.start()}let vt=new _o;vt.setAnimationLoop(ht),typeof self<`u`&&vt.setContext(self),this.setAnimationLoop=function(e){U=e,ct.setAnimationLoop(e),e===null?vt.stop():vt.start()},ct.addEventListener(`sessionstart`,gt),ct.addEventListener(`sessionend`,_t),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){z(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(re===!0)return;ie!==null&&ie.renderStart(e,t);let n=ct.enabled===!0&&ct.isPresenting===!0,r=ne!==null&&(P===null||n)&&ne.begin(N,P);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ne===null||ne.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(t),t=ct.getCamera()),e.isScene===!0&&e.onBeforeRender(N,e,t,P),j=Ze.get(e,M.length),j.init(t),j.state.textureUnits=Be.getTextureUnits(),M.push(j),ke.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Ee.setFromArrayCamera(t):Te.setFromProjectionMatrix(ke,We,t.reversedDepth),Oe=this.localClippingEnabled,De=Qe.init(this.clippingPlanes,Oe),k=Ye.get(e,te.length),k.init(),te.push(k),this.info.render.frame++,ct.enabled===!0&&ct.isPresenting===!0){let e=N.xr.getDepthSensingMesh();e!==null&&bt(e,t,-1/0,N.sortObjects)}bt(e,t,0,N.sortObjects),k.finish(),ie!==null&&ie.updateLights(j.state.lightsArray),N.sortObjects===!0&&k.sort(be,xe),Ne=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ne&&tt.addToRenderList(k,e),this.info.autoReset===!0&&this.info.reset(),De===!0&&Qe.beginShadows();let i=j.state.shadowsArray;if(et.render(i,e,t),De===!0&&Qe.endShadows(),(r&&ne.hasRenderPass())===!1){let n=k.opaque,r=k.transmissive;if(j.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];St(n,r,e,a)}Ne&&tt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];xt(k,e,n,n.viewport)}}else r.length>0&&St(n,r,e,t),Ne&&tt.render(e),xt(k,e,t)}P!==null&&le===0&&(Be.updateMultisampleRenderTarget(P),Be.updateRenderTargetMipmap(P)),r&&ne.end(N),e.isScene===!0&&e.onAfterRender(N,e,t),B.resetDefaultState(),ue=-1,de=null,M.pop(),M.length>0?(j=M[M.length-1],Be.setTextureUnits(j.state.textureUnits),De===!0&&Qe.setGlobalState(N.clippingPlanes,j.state.camera)):j=null,te.pop(),k=te.length>0?te[te.length-1]:null,ie!==null&&ie.renderEnd()};function bt(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)j.pushLight(e),e.castShadow&&j.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&je.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ke);let i=Ge.update(e),a=e.material;a.visible&&k.push(e,i,a,n,je.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Ee:Te;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ge.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),je.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),je.copy(e.boundingSphere.center)),je.applyMatrix4(e.matrixWorld).applyMatrix4(ke)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&k.push(e,i,c,n,je.z,s,t)}}else a.visible&&k.push(e,i,a,n,je.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)bt(i[e],t,n,r)}function xt(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;j.setupLightsView(n),De===!0&&Qe.setGlobalState(N.clippingPlanes,n),r&&I.viewport(fe.copy(r)),i.length>0&&Ct(i,t,n),a.length>0&&Ct(a,t,n),o.length>0&&Ct(o,t,n),I.buffers.depth.setTest(!0),I.buffers.depth.setMask(!0),I.buffers.color.setMask(!0),I.setPolygonOffset(!1)}function St(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(j.state.transmissionRenderTarget[r.id]===void 0){let e=Ie.has(`EXT_color_buffer_half_float`)||Ie.has(`EXT_color_buffer_float`);j.state.transmissionRenderTarget[r.id]=new Mt(1,1,{generateMipmaps:!0,type:e?g:l,minFilter:c,samples:Math.max(4,Le.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:yt.workingColorSpace})}let a=j.state.transmissionRenderTarget[r.id],o=r.viewport||fe;a.setSize(o.z*N.transmissionResolutionScale,o.w*N.transmissionResolutionScale);let s=N.getRenderTarget(),u=N.getActiveCubeFace(),d=N.getActiveMipmapLevel();N.setRenderTarget(a),N.getClearColor(he),ge=N.getClearAlpha(),ge<1&&N.setClearColor(16777215,.5),N.clear(),Ne&&tt.render(n);let f=N.toneMapping;N.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),j.setupLightsView(r),De===!0&&Qe.setGlobalState(N.clippingPlanes,r),Ct(e,n,r),Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a),Ie.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,wt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(Be.updateMultisampleRenderTarget(a),Be.updateRenderTargetMipmap(a))}N.setRenderTarget(s,u,d),N.setClearColor(he,ge),p!==void 0&&(r.viewport=p),N.toneMapping=f}function Ct(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&wt(o,t,n,s,l,c)}}function wt(e,t,n,r,i,a){ie!==null&&i.isNodeMaterial&&ie.setObject(e,i),e.onBeforeRender(N,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(N,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,N.renderBufferDirect(n,t,r,i,e,a),i.side=2):N.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(N,t,n,r,i,a)}function Tt(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function Et(e,t,n){t.isScene!==!0&&(t=Me);let r=L.get(e),i=j.state.lights,a=j.state.shadowsArray,o=i.state.version,s=Ke.getParameters(e,i.state,a,t,n,j.state.lightProbeGridArray),c=Ke.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ve.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,V),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return kt(e,s),d}else s.uniforms=Ke.getUniforms(e),ie!==null&&e.isNodeMaterial&&ie.build(e,n,s),e.onBeforeCompile(s,N),d=Ke.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=Qe.uniform),kt(e,s),r.needsLights=Pt(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Tt(j.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function Dt(e,t,n,r,i){let a=L.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=Et(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function Ot(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=cc.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function kt(e,t){let n=L.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function jt(e,t,n,r,i){t.isScene!==!0&&(t=Me),Be.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=P===null?N.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:yt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ve.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(h=N.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=L.get(r),y=j.state.lights;if(De===!0&&(Oe===!0||e!==de)){let t=e===de&&r.id===ue;Qe.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==Qe.numPlanes||v.numIntersection!==Qe.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Tt(j.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?Dt(r,t,i,s,h):Et(r,t,i),ie&&r.isNodeMaterial&&ie.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(I.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==ue&&(ue=r.id,w=!0),C||de!==e){I.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(F,`projectionMatrix`,e.projectionMatrix),E.setValue(F,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(F,Ae.setFromMatrixPosition(e.matrixWorld)),Le.logarithmicDepthBuffer&&E.setValue(F,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(F,`isOrthographic`,e.isOrthographicCamera===!0),de!==e&&(de=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(F,`sunShadowMap`,y.state.sunShadowMap,Be),y.state.directionalShadowMap.length>0&&E.setValue(F,`directionalShadowMap`,y.state.directionalShadowMap,Be),y.state.spotShadowMap.length>0&&E.setValue(F,`spotShadowMap`,y.state.spotShadowMap,Be),y.state.pointShadowMap.length>0&&E.setValue(F,`pointShadowMap`,y.state.pointShadowMap,Be)),i.isSkinnedMesh){E.setOptional(F,i,`bindMatrix`),E.setOptional(F,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(F,`boneTexture`,e.boneTexture,Be))}i.isBatchedMesh&&(E.setOptional(F,i,`batchingTexture`),E.setValue(F,`batchingTexture`,i._matricesTexture,Be),E.setOptional(F,i,`batchingIdTexture`),E.setValue(F,`batchingIdTexture`,i._indirectTexture,Be),E.setOptional(F,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(F,`batchingColorTexture`,i._colorsTexture,Be));let k=n.morphAttributes;if((k.position!==void 0||k.normal!==void 0||k.color!==void 0)&&nt.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(F,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Tl()),w){if(E.setValue(F,`toneMappingExposure`,N.toneMappingExposure),v.needsLights&&Nt(O,T),a&&r.fog===!0&&qe.refreshFogUniforms(O,a),qe.refreshMaterialUniforms(O,r,ye,ve,j.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of j.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}cc.upload(F,Ot(v),O,Be)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(cc.upload(F,Ot(v),O,Be),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(F,`center`,i.center),E.setValue(F,`modelViewMatrix`,i.modelViewMatrix),E.setValue(F,`normalMatrix`,i.normalMatrix),E.setValue(F,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];ot.update(n,S),ot.bind(n,S)}}return S}function Nt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Pt(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(e,t,n){let r=L.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),L.get(e.texture).__webglTexture=t,L.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=L.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){P=e,ce=t,le=n;let r=null,i=!1,a=!1;if(e){let o=L.get(e);if(o.__useDefaultFramebuffer!==void 0){I.bindFramebuffer(F.FRAMEBUFFER,o.__webglFramebuffer),fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest,I.viewport(fe),I.scissor(pe),I.setScissorTest(me),ue=-1;return}if(o.__webglFramebuffer===void 0)Be.setupRenderTarget(e);else if(o.__hasExternalTextures)Be.rebindTextures(e,L.get(e.texture).__webglTexture,L.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&L.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);Be.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=L.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&Be.useMultisampledRTT(e)===!1?L.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,fe.copy(e.viewport),pe.copy(e.scissor),me=e.scissorTest}else fe.copy(Se).multiplyScalar(ye).floor(),pe.copy(Ce).multiplyScalar(ye).floor(),me=we;if(n!==0&&(r=ae),I.bindFramebuffer(F.FRAMEBUFFER,r)&&I.drawBuffers(e,r),I.viewport(fe),I.scissor(pe),I.setScissorTest(me),i){let r=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=L.get(e.textures[t]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=L.get(e.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,t.__webglTexture,n)}ue=-1};function It(e){let t=L.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=Le.textureFormatReadable(e.format),t.__typeReadable=Le.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){I.bindFramebuffer(F.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let u=It(o);if(u.__formatReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){z(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&F.readPixels(t,n,r,i,at.convert(c),at.convert(l),a)}finally{let e=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=L.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){I.bindFramebuffer(F.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+s);let d=It(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.bufferData(F.PIXEL_PACK_BUFFER,a.byteLength,F.STREAM_READ),F.readPixels(t,n,r,i,at.convert(l),at.convert(u),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let p=P===null?null:L.get(P).__webglFramebuffer;I.bindFramebuffer(F.FRAMEBUFFER,p);let m=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await $e(F,m,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,f),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,a),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(f),F.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Be.setTexture2D(e,0),F.copyTexSubImage2D(F.TEXTURE_2D,n,0,0,o,s,i,a),I.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=at.convert(t.format),_=at.convert(t.type),v;t.isData3DTexture?(Be.setTexture3D(t,0),v=F.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Be.setTexture2DArray(t,0),v=F.TEXTURE_2D_ARRAY):(Be.setTexture2D(t,0),v=F.TEXTURE_2D),I.activeTexture(F.TEXTURE0),I.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,t.flipY),I.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),I.pixelStorei(F.UNPACK_ALIGNMENT,t.unpackAlignment);let y=I.getParameter(F.UNPACK_ROW_LENGTH),b=I.getParameter(F.UNPACK_IMAGE_HEIGHT),x=I.getParameter(F.UNPACK_SKIP_PIXELS),S=I.getParameter(F.UNPACK_SKIP_ROWS),C=I.getParameter(F.UNPACK_SKIP_IMAGES);I.pixelStorei(F.UNPACK_ROW_LENGTH,h.width),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,h.height),I.pixelStorei(F.UNPACK_SKIP_PIXELS,l),I.pixelStorei(F.UNPACK_SKIP_ROWS,u),I.pixelStorei(F.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=L.get(e),r=L.get(t),h=L.get(n.__renderTarget),g=L.get(r.__renderTarget);I.bindFramebuffer(F.READ_FRAMEBUFFER,h.__webglFramebuffer),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(e).__webglTexture,i,d+n),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,L.get(t).__webglTexture,a,m+n)),F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.DEPTH_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||L.has(e)){let n=L.get(e),r=L.get(t);I.bindFramebuffer(F.READ_FRAMEBUFFER,oe),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,se);for(let e=0;e<c;e++)w?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,n.__webglTexture,i),T?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,r.__webglTexture,a),i===0?T?F.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):F.copyTexSubImage2D(v,a,f,p,l,u,o,s):F.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,F.COLOR_BUFFER_BIT,F.NEAREST);I.bindFramebuffer(F.READ_FRAMEBUFFER,null),I.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?F.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):F.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):F.texSubImage2D(F.TEXTURE_2D,a,f,p,o,s,g,_,h);I.pixelStorei(F.UNPACK_ROW_LENGTH,y),I.pixelStorei(F.UNPACK_IMAGE_HEIGHT,b),I.pixelStorei(F.UNPACK_SKIP_PIXELS,x),I.pixelStorei(F.UNPACK_SKIP_ROWS,S),I.pixelStorei(F.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&F.generateMipmap(v),I.unbindTexture()},this.initRenderTarget=function(e){L.get(e).__webglFramebuffer===void 0&&Be.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Be.setTextureCube(e,0):e.isData3DTexture?Be.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Be.setTexture2DArray(e,0):Be.setTexture2D(e,0),I.unbindTexture()},this.resetState=function(){ce=0,le=0,P=null,I.reset(),B.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return We}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=yt._getDrawingBufferColorSpace(e),t.unpackColorSpace=yt._getUnpackColorSpace()}};function Dl(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new pr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=Ol(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=Ol(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function Ol(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new Qn(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function q(e){let t=e>>>0;return function(){t|=0,t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var J=(e,t,n)=>Math.max(t,Math.min(n,e)),kl=(e,t,n)=>e+(t-e)*n,Al=(e,t,n,r)=>kl(e,t,1-Math.exp(-n*r)),jl=(e,t=0,n=1)=>t+(n-t)*e(),Ml=(e,t,n)=>Math.floor(t+(n-t+1)*e()),Nl=(e,t)=>t[Math.floor(e()*t.length)%t.length];function Pl(e,t,n=0){let r=Math.imul(e|0,374761393)^Math.imul(t|0,668265263)^Math.imul(n|0,2246822519);return r=Math.imul(r^r>>>13,1274126177),((r^r>>>16)>>>0)/4294967296}function Fl(e,t,n=0){let r=Math.floor(e),i=Math.floor(t),a=e-r,o=t-i,s=a*a*(3-2*a),c=o*o*(3-2*o),l=Pl(r,i,n),u=Pl(r+1,i,n),d=Pl(r,i+1,n),f=Pl(r+1,i+1,n);return kl(kl(l,u,s),kl(d,f,s),c)}function Il(e,t,n=4,r=0){let i=0,a=.5,o=1;for(let s=0;s<n;s++)i+=a*Fl(e*o,t*o,r+s*17),o*=2.03,a*=.5;return i}var Ll=class{constructor(){this.buckets=new Map,this.materials=new Map}use(e,t){return this.materials.set(e,t),this.buckets.has(e)||this.buckets.set(e,[]),t}push(e,t,n){let r=t.attributes.position.count;if(!t.attributes.color){let e=new Float32Array(r*3),i=n instanceof W?n:new W(n??16777215);for(let t=0;t<r;t++)e[t*3]=i.r,e[t*3+1]=i.g,e[t*3+2]=i.b;t.setAttribute(`color`,new Qn(e,3))}else if(n){let e=t.attributes.color,r=n instanceof W?n:new W(n);for(let t=0;t<e.count;t++)e.setXYZ(t,r.r,r.g,r.b)}t.index,this.buckets.get(e).push(t)}add(e,t,n,r){return n&&t.applyMatrix4(n),this.push(e,t,r),t}box(e,t,n,r,i,a,o,s,{rotY:c=0,rotX:l=0,rotZ:u=0,uvScale:d=0,uvRotate:f=!1}={}){let p=new Fi(t,n,r);d&&Rl(p,t,n,r,d);let m=new Ft().compose(new H(i,a,o),new ft().setFromEuler(new Gt(l,c,u,`YXZ`)),new H(1,1,1));return this.add(e,p,m,s)}plane(e,t,n,r,i,a,o,{rotY:s=0,rotX:c=0,rotZ:l=0,uvScale:u=0}={}){let d=new Ui(t,n);if(u){let e=d.attributes.uv;for(let r=0;r<e.count;r++)e.setXY(r,e.getX(r)*t/u,e.getY(r)*n/u)}let f=new Ft().compose(new H(r,i,a),new ft().setFromEuler(new Gt(c,s,l,`YXZ`)),new H(1,1,1));return this.add(e,d,f,o)}cylinder(e,t,n,r,i,a,o,s,c,{rotY:l=0,rotX:u=0,rotZ:d=0,open:f=!1}={}){let p=new Ii(t,n,r,i,1,f),m=new Ft().compose(new H(a,o,s),new ft().setFromEuler(new Gt(u,l,d,`YXZ`)),new H(1,1,1));return this.add(e,p,m,c)}build(e,{shadows:t=!1}={}){let n=[];for(let[r,i]of this.buckets){if(!i.length)continue;let a=Dl(i,!1);if(!a){console.warn(`merge failed`,r,i.length);continue}for(let e of i)e.dispose();a.computeBoundingSphere();let o=this.materials.get(r),s=new ri(a,o);s.name=`batch-`+r,s.castShadow=t&&o&&!o.transparent,s.receiveShadow=t,s.matrixAutoUpdate=!1,e.add(s),n.push(s)}return this.buckets.clear(),n}};function Rl(e,t,n,r,i){let a=e.attributes.uv,o=[[r,n],[r,n],[t,r],[t,r],[t,n],[t,n]];for(let e=0;e<6;e++){let[t,n]=o[e];for(let r=0;r<4;r++){let o=e*4+r;a.setXY(o,a.getX(o)*t/i,a.getY(o)*n/i)}}a.needsUpdate=!0}var zl=null;function Bl(e=128){if(zl&&zl.width===e)return zl;let t=document.createElement(`canvas`);t.width=t.height=e;let n=t.getContext(`2d`),r=n.createRadialGradient(e/2,e/2,0,e/2,e/2,e/2);return r.addColorStop(0,`rgba(255,255,255,1)`),r.addColorStop(.18,`rgba(255,255,255,0.78)`),r.addColorStop(.5,`rgba(255,255,255,0.23)`),r.addColorStop(1,`rgba(255,255,255,0)`),n.fillStyle=r,n.fillRect(0,0,e,e),zl=t,t}function Vl(e=128,t=.1,n=.95){let r=document.createElement(`canvas`);r.width=r.height=e;let i=r.getContext(`2d`),a=i.createRadialGradient(e/2,e/2,e*t,e/2,e/2,e*n);return a.addColorStop(0,`rgba(0,0,0,0.8)`),a.addColorStop(.55,`rgba(0,0,0,0.35)`),a.addColorStop(1,`rgba(0,0,0,0)`),i.fillStyle=a,i.fillRect(0,0,e,e),r}function Y(t,{repeat:n=[1,1],srgb:r=!0,anisotropy:i=8}={}){let a=new ji(t);return a.wrapS=a.wrapT=e,a.repeat.set(n[0],n[1]),a.colorSpace=r?ze:``,a.anisotropy=i,a.needsUpdate=!0,a}var Hl=`
varying vec3 vWorld;
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  gl_Position = projectionMatrix * viewMatrix * wp;
}
`,Ul=`
precision highp float;
varying vec3 vWorld;
uniform vec3 uSunDir;
uniform vec3 uMoonDir;
uniform vec3 uZenith;
uniform vec3 uHorizon;
uniform vec3 uGround;
uniform vec3 uSunColor;
uniform vec3 uMoonColor;
uniform float uNight;
uniform float uOvercast;
uniform float uRain;
uniform float uTime;
uniform float uStars;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i), b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0)), d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.55;
  for (int i = 0; i < 3; i++) { v += a * noise(p); p = p * 2.03 + 11.7; a *= 0.5; }
  return v;
}

void main() {
  vec3 d = normalize(vWorld);
  float h = d.y;
  vec3 col = mix(uHorizon, uZenith, pow(clamp(h, 0.0, 1.0), 0.42));
  if (h < 0.0) col = mix(uHorizon, uGround, clamp(-h * 3.5, 0.0, 1.0));

  float sunDot = max(dot(d, uSunDir), 0.0);
  float sunVisible = 1.0 - uOvercast * 0.88;

  // atmospheric scattering around the sun
  col += uSunColor * (pow(sunDot, 6.0) * 0.18 + pow(sunDot, 48.0) * 0.6) * sunVisible * (1.0 - uNight * 0.94);
  col += uSunColor * smoothstep(0.99945, 0.99985, sunDot) * 3.4 * sunVisible;

  // moon
  float moonDot = max(dot(d, uMoonDir), 0.0);
  float moonDisc = smoothstep(0.99955, 0.9998, moonDot);
  col += uMoonColor * moonDisc * 2.2 * uStars;
  col += uMoonColor * pow(moonDot, 24.0) * 0.22 * uStars;

  // stars
  if (uStars > 0.01 && h > 0.01) {
    vec2 sp = d.xz / (h + 0.35) * 180.0;
    float s = hash21(floor(sp));
    float twinkle = 0.65 + 0.35 * sin(uTime * 1.3 + s * 80.0);
    float star = smoothstep(0.9955, 1.0, s) * twinkle;
    col += vec3(0.72, 0.78, 0.9) * star * uStars * smoothstep(0.02, 0.2, h) * 0.85;
  }

  // clouds - flattened domain, slowly drifting
  if (h > -0.02) {
    vec2 cp = d.xz / (max(h, 0.0) + 0.16) * 0.62;
    cp += vec2(uTime * 0.004, uTime * 0.0016);
    float base = fbm(cp * 0.72);
    float detail = fbm(cp * 1.9 + 3.1);
    float cl = base * 0.72 + detail * 0.34;
    float cover = mix(0.61, 0.33, uOvercast);
    float mask = smoothstep(cover, cover + 0.22, cl) * smoothstep(-0.01, 0.1, h);
    float thin = smoothstep(cover - 0.14, cover + 0.1, cl) * 0.3;
    vec3 cloudCol = mix(vec3(0.30, 0.31, 0.31), uSunColor * 0.85, pow(sunDot, 2.5) * 0.55);
    cloudCol = mix(cloudCol, vec3(0.055, 0.06, 0.068), uNight * 0.82 + uOvercast * 0.25);
    cloudCol *= 1.0 - uRain * 0.22;
    col = mix(col, cloudCol, clamp(mask * 0.78 + thin * 0.3, 0.0, 0.95));
  }

  // horizon haze
  float haze = exp(-max(h, 0.0) * 11.0);
  col = mix(col, uHorizon * (1.0 - uRain * 0.3), haze * 0.4);

  // filmic-ish rolloff for the sky glow
  col = col / (col + vec3(0.72));
  col = pow(col, vec3(0.92));
  gl_FragColor = vec4(col, 1.0);
}
`,Wl=class{constructor(e,t){this.scene=e,this.renderer=t,this.time=17.32,this.day=1,this.dayLength=64,this.weather=`haze`,this.weatherTimer=105,this.overcast=.18,this.rainAmount=0,this.flash=0,this.rng=q(4242),this.sunDir=new H(-1,.12,.15).normalize(),this.moonDir=new H(1,-.12,-.15).normalize(),this.onLightning=null,this.onWeatherChange=null;let n={uSunDir:{value:this.sunDir},uMoonDir:{value:this.moonDir},uZenith:{value:new W(`#3e5c75`)},uHorizon:{value:new W(`#c89a75`)},uGround:{value:new W(`#2b2822`)},uSunColor:{value:new W(`#ffd6a0`)},uMoonColor:{value:new W(`#a9bddb`)},uNight:{value:0},uOvercast:{value:this.overcast},uRain:{value:0},uTime:{value:0},uStars:{value:0}};this.uniforms=n,this.material=new ea({vertexShader:Hl,fragmentShader:Ul,uniforms:n,side:1,depthWrite:!1,fog:!1}),this.mesh=new ri(new Gi(760,48,32),this.material),this.mesh.name=`sky`,this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,e.add(this.mesh),this.hemi=new Da(12109519,5325875,.78),e.add(this.hemi),this.ambient=new Ga(4870232,.24),e.add(this.ambient),this.sun=new Wa(16766624,2.6),this.sun.position.set(-60,26,14),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024),this.sun.shadow.camera.near=.5,this.sun.shadow.camera.far=90,this.sun.shadow.camera.left=-22,this.sun.shadow.camera.right=22,this.sun.shadow.camera.top=22,this.sun.shadow.camera.bottom=-22,this.sun.shadow.bias=-.0012,this.sun.shadow.normalBias=.04,this.sun.target.position.set(0,0,0),e.add(this.sun,this.sun.target),this.moonLight=new Wa(9414344,0),this.moonLight.position.set(40,50,-20),e.add(this.moonLight),this.scene.fog=new vn(11111538,.0125),this.envDirty=!0,this.envTimer=0,this.envMap=null,this.pmrem=new Lo(t),this.pmrem.compileEquirectangularShader()}setWeather(e){e!==this.weather&&(this.weather=e,this.onWeatherChange&&this.onWeatherChange(e))}update(e,t,n){if(this.time+=e*(24/(this.dayLength*60)),this.time>=24&&(this.time-=24,this.day++),this.uniforms.uTime.value+=e,this.weatherTimer-=e,this.weatherTimer<=0){this.weatherTimer=70+this.rng()*90;let e=this.time>7&&this.time<20?[`clear`,`haze`,`overcast`,`rain`,`clear`,`haze`]:[`haze`,`overcast`,`rain`,`clear`],t=e[Math.floor(this.rng()*e.length)];this.setWeather(t)}let r={clear:.05,haze:.2,overcast:.78,rain:.92,storm:1}[this.weather]??.2,i={rain:1,storm:1,overcast:.15}[this.weather]??0,a={clear:.12,haze:.08,overcast:.25,rain:.9,storm:1}[this.weather]??.1;this.overcast=Al(this.overcast,r,.5,e),this.rainAmount,this.rainAmount=Al(this.rainAmount,i,.7,e),this.wetness=Al(this.wetness??.05,a,.35,e),this.raining=this.rainAmount>.04,this.onRainIntensity&&this.onRainIntensity(this.rainAmount,this.raining),this.weather===`storm`&&this.rainAmount>.8&&this.rng()<e*.08&&(this.flash=1,this.onLightning&&this.onLightning()),this.flash=Math.max(0,this.flash-e*4.2);let o=(this.time-6)/13,s=Math.sin(o*Math.PI)*1.12,c=Math.PI*(this.time-6)/13;this.sunDir.set(Math.cos(c)*Math.cos(s),Math.sin(s),Math.sin(c)*Math.cos(s)*.62+.08).normalize(),this.moonDir.copy(this.sunDir).multiplyScalar(-1),this.moonDir.z=.24;let l=this.sunDir.y,u=J((l+.06)/.3,0,1),d=J(1-Math.abs(l)/.35,0,1)*J(u*1.2,0,1),f=1-J((l+.02)/.16,0,1);this.daylight=u,this.night=f;let p=new W(`#4c718d`),m=new W(`#2f465c`),h=new W(`#060a12`),g=new W(`#bfc5bd`),_=new W(`#d99b6e`),v=new W(`#101823`),y=p.clone().lerp(m,d).lerp(h,f),b=g.clone().lerp(_,d*.95).lerp(v,f);y.lerp(new W(`#535b61`),this.overcast*.55),b.lerp(new W(`#78766f`),this.overcast*.55),f>.5&&b.lerp(new W(`#293440`),this.overcast*.25),this.uniforms.uZenith.value.copy(y),this.uniforms.uHorizon.value.copy(b),this.uniforms.uGround.value.copy(b).multiplyScalar(.42),this.uniforms.uNight.value=f,this.uniforms.uOvercast.value=this.overcast,this.uniforms.uRain.value=this.rainAmount,this.uniforms.uStars.value=J(f*1.4,0,1)*(1-this.overcast*.75);let x=new W(`#ffe0b0`).lerp(new W(`#ff9c5c`),d*.8).lerp(new W(`#c8d4e6`),f*.85);this.uniforms.uSunColor.value.copy(x),this.uniforms.uMoonColor.value.copy(new W(`#a9bddb`)),this.sun.color.copy(x),this.sun.intensity=(2.25*u+.55*d)*(1-this.overcast*.7)*(1-f*.9)+this.flash*2.5,this.moonLight.intensity=f*.34*(1-this.overcast*.75),this.hemi.intensity=(.72*u+.16)*(1-this.overcast*.25)+f*.22,this.hemi.color.copy(y).lerp(new W(`#d9c4a4`),d*.35),this.hemi.groundColor.set(`#574b3a`).lerp(new W(`#1b2027`),f),this.ambient.intensity=(.18+f*.13)*(1-this.overcast*.2),this.ambient.color.copy(y);let S=b.clone().lerp(new W(`#5a5c58`),this.overcast*.35);this.scene.fog.color.copy(S),this.scene.fog.density=kl(.011,.028,this.overcast*.7+this.rainAmount*.5)*kl(1,1.32,f),this.renderer&&(this.renderer.toneMappingExposure=1.02+f*.18+this.overcast*.06+this.flash*.5),this.sun.intensity+=this.flash*3.2,n&&(this.sun.position.copy(n).addScaledVector(this.sunDir,46),this.sun.target.position.copy(n),this.sun.target.updateMatrixWorld(),this.moonLight.position.copy(n).addScaledVector(this.moonDir,50),this.moonLight.target.position.copy(n),this.moonLight.target.updateMatrixWorld()),t&&this.mesh.position.copy(t),this.envTimer-=e,this.envTimer<=0&&(this.envTimer=120,this.refreshEnvironment()),this.updateRain(e,t)}refreshEnvironment(){try{let e=new yn,t=new ri(new Gi(100,32,16),this.material);t.material=this.material,e.add(t);let n=this.pmrem.fromScene(e,0,.1,500);this.envMap&&this.envMap.dispose(),this.envMap=n.texture,this.scene.environment=this.envMap,this.scene.environmentIntensity=.32,t.geometry.dispose()}catch(e){console.warn(`env refresh failed`,e)}}updateRain(e,t){this.rainSystem||=new Gl(this.scene),this.rainSystem.update(e,t,this.rainAmount,this.wind??.4)}clockString(){let e=Math.floor(this.time),t=Math.floor((this.time-e)*60);return`${String(e).padStart(2,`0`)}:${String(t).padStart(2,`0`)}`}sunElevation(){return this.sunDir.y}},Gl=class{constructor(e){this.count=5200;let t=new pr,n=new Float32Array(this.count*3),r=new Float32Array(this.count);for(let e=0;e<this.count;e++)n[e*3]=(Math.random()-.5)*46,n[e*3+1]=Math.random()*22,n[e*3+2]=(Math.random()-.5)*46,r[e]=Math.random();t.setAttribute(`position`,new Qn(n,3)),t.setAttribute(`aSeed`,new Qn(r,1));let i=new ea({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uAmount:{value:0},uCam:{value:new H},uWind:{value:.4}},vertexShader:`
        attribute float aSeed;
        uniform float uTime; uniform float uAmount; uniform vec3 uCam; uniform float uWind;
        varying float vAlpha;
        void main() {
          vec3 p = position;
          p.y = mod(p.y - uTime * (12.0 + aSeed * 7.0), 22.0);
          p.x += sin(uTime * 0.5 + aSeed * 30.0) * 0.4 + uWind * p.y;
          p.z += cos(uTime * 0.3 + aSeed * 20.0) * 0.25;
          vec3 world = p + vec3(uCam.x, uCam.y - 12.0, uCam.z);
          vec4 mv = viewMatrix * vec4(world, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = mix(1.0, 2.6, aSeed) * (280.0 / max(1.0, -mv.z));
          vAlpha = uAmount * smoothstep(22.0, 19.0, p.y) * smoothstep(0.0, 2.0, p.y);
        }
      `,fragmentShader:`
        varying float vAlpha;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.0, length(vec2(c.x * 4.0, c.y)));
          gl_FragColor = vec4(0.72, 0.78, 0.82, a * vAlpha * 0.45);
        }
      `});this.points=new Oi(t,i),this.points.frustumCulled=!1,this.points.renderOrder=10,e.add(this.points),this.mat=i,this.entered=!1}update(e,t,n,r){this.mat.uniforms.uTime.value+=e,this.mat.uniforms.uAmount.value=n,t&&this.mat.uniforms.uCam.value.copy(t),this.mat.uniforms.uWind.value=r,this.points.visible=n>.02}},Kl=new Map;function ql(e,t){return Kl.has(e)||Kl.set(e,t()),Kl.get(e)}function Jl(e){let t=document.createElement(`canvas`);return t.width=t.height=e,t}function Yl(e,t,n,r,i=4,a=8,o=0){let s=Jl(e),c=s.getContext(`2d`),l=c.createImageData(e,e),u=l.data;q(r);for(let s=0;s<e;s++)for(let c=0;c<e;c++){let l=Il(c/e*a,s/e*a,i,r),d=(Pl(c,s,r+9)-.5)*o,f=t+(l-.5)*n+d*255,p=(s*e+c)*4;u[p]=J(f,0,255),u[p+1]=J(f,0,255),u[p+2]=J(f,0,255),u[p+3]=255}return c.putImageData(l,0,0),s}function Xl(e,t,n,r,i=4,a=8){return Yl(e,t,n,r,i,a,8)}function Zl(e,t=1.6){let n=e.width,r=e.getContext(`2d`).getImageData(0,0,n,n).data,i=new ImageData(n,n),a=(e,t)=>r[((t+n)%n*n+(e+n)%n)*4]/255;for(let e=0;e<n;e++)for(let r=0;r<n;r++){let o=a(r-1,e),s=a(r+1,e),c=a(r,e-1),l=a(r,e+1),u=(o-s)*t,d=(l-c)*t,f=1,p=Math.hypot(u,d,f);u/=p,d/=p,f/=p;let m=(e*n+r)*4;i.data[m]=(u*.5+.5)*255,i.data[m+1]=(d*.5+.5)*255,i.data[m+2]=(f*.5+.5)*255,i.data[m+3]=255}let o=Jl(n);return o.getContext(`2d`).putImageData(i,0,0),o}function Ql(e,t,n,r,i=null){let a=Yl(e,t,n,r,5,7,10);return i&&i(a.getContext(`2d`),e),a}function $l(e,t,n,r,i,a,o,s=3){e.save(),e.strokeStyle=o,e.lineWidth=a,e.beginPath(),e.moveTo(n,r);let c=n,l=r,u=t()*Math.PI*2;for(let n=0;n<i;n++)u+=(t()-.5)*.9,c+=Math.cos(u)*(3+t()*6),l+=Math.sin(u)*(3+t()*6),e.lineTo(c,l),s>0&&t()<.045&&(e.stroke(),$l(e,t,c,l,Math.floor(i*.35),a*.65,o,s-1),e.beginPath(),e.moveTo(c,l));return e.stroke(),e.restore(),{x:c,y:l}}function eu(e,t,n,r,i,a,o=1){let s=e.createRadialGradient(n,r,i*.1,n,r,i);s.addColorStop(0,a.replace(`@a`,o)),s.addColorStop(1,a.replace(`@a`,0)),e.fillStyle=s,e.beginPath(),e.arc(n,r,i,0,Math.PI*2),e.fill()}function tu(){return ql(`asphalt`,()=>{let e=1024,t=Jl(e),n=t.getContext(`2d`),r=Yl(e,47,20,11,5,6,.25);n.drawImage(r,0,0);let i=q(11);for(let t=0;t<35;t++)eu(n,i,i()*e,i()*e,30+i()*160,i()<.5?`rgba(22,24,25,@a)`:`rgba(96,98,96,@a)`,.2+i()*.3);for(let t=0;t<8500;t++){let t=i()*e,r=i()*e,a=i()*1.5;n.fillStyle=i()<.55?`rgba(30,31,32,${.2+i()*.5})`:`rgba(112,112,106,${.08+i()*.3})`,n.beginPath(),n.arc(t,r,a,0,Math.PI*2),n.fill()}n.strokeStyle=`rgba(22,23,23,0.85)`,n.lineWidth=5;for(let t=0;t<5;t++){let r=80+i()*864;n.beginPath(),n.moveTo(0,r);for(let a=0;a<=e;a+=32)n.lineTo(a,r+Math.sin(a*.01+t)*7+(i()-.5)*8);n.stroke()}for(let t=0;t<22;t++)$l(n,i,i()*e,i()*e,28+i()*55,.7+i()*1.4,`rgba(14,15,15,0.65)`),i()<.4&&$l(n,i,i()*e,i()*e,20,.6,`rgba(120,120,112,0.12)`,1);for(let t=0;t<18;t++)eu(n,i,i()*e,i()*e,18+i()*60,`rgba(9,10,9,@a)`,.15+i()*.35);let a=Xl(e,120,70,14,6,9),o=a.getContext(`2d`);o.globalAlpha=.9;let s=q(99);for(let t=0;t<18;t++)$l(o,s,s()*e,s()*e,30+s()*60,1.4,`#202020`);o.globalAlpha=1;let c=Ql(512,205,30,18,(e,t)=>{let n=q(31);for(let r=0;r<18;r++)eu(e,n,n()*t,n()*t,20+n()*70,`rgba(45,45,45,@a)`,.6)});return{map:Y(t,{repeat:[10,10]}),normalMap:Y(Zl(a,1.4),{repeat:[10,10],srgb:!1}),roughnessMap:Y(c,{repeat:[8,8],srgb:!1})}})}function nu(){return ql(`sidewalk`,()=>{let e=Jl(768),t=e.getContext(`2d`);t.drawImage(Yl(768,139,26,23,5,10,.16),0,0);let n=q(23);for(let e=0;e<4;e++)for(let r=0;r<4;r++){let i=122+Math.floor(n()*26);t.fillStyle=`rgba(${i},${i-4},${i-12},0.38)`,t.fillRect(r*192+3,e*192+3,186,186),t.strokeStyle=`rgba(38,37,33,0.55)`,t.lineWidth=3,t.strokeRect(r*192+2,e*192+2,188,188)}for(let e=0;e<120;e++)eu(t,n,n()*768,n()*768,4+n()*34,`rgba(37,35,30,@a)`,.1+n()*.22);for(let e=0;e<10;e++)$l(t,n,n()*768,n()*768,25+n()*30,1,`rgba(32,31,28,0.55)`,2);for(let e=0;e<80;e++)t.fillStyle=`rgba(62,62,55,${.1+n()*.2})`,t.beginPath(),t.arc(n()*768,n()*768,n()*3,0,Math.PI*2),t.fill();let r=Yl(768,150,24,27,4,12,10),i=r.getContext(`2d`);i.strokeStyle=`#282828`,i.lineWidth=8;for(let e=0;e<=4;e++)i.beginPath(),i.moveTo(e*192,0),i.lineTo(e*192,768),i.stroke(),i.beginPath(),i.moveTo(0,e*192),i.lineTo(768,e*192),i.stroke();let a=Ql(384,218,20,28);return{map:Y(e,{repeat:[1,1]}),normalMap:Y(Zl(r,1.2),{srgb:!1}),roughnessMap:Y(a,{srgb:!1})}})}function ru(){return ql(`concrete`,()=>{let e=Jl(512),t=e.getContext(`2d`);t.drawImage(Yl(512,151,34,41,5,7,.2),0,0);let n=q(41);t.fillStyle=`rgba(87,82,72,0.13)`;for(let e=0;e<7;e++)t.fillRect(0,n()*512,512,2+n()*7);for(let e=0;e<26;e++){let e=n()*512,r=1+n()*3,i=n()*512,a=10+n()*90,o=t.createLinearGradient(e,i,e,i+a);o.addColorStop(0,`rgba(55,51,44,0.24)`),o.addColorStop(1,`rgba(55,51,44,0)`),t.fillStyle=o,t.fillRect(e,i,r,a)}for(let e=0;e<24;e++)eu(t,n,n()*512,n()*512,8+n()*60,`rgba(40,38,33,@a)`,.2+n()*.3);for(let e=0;e<12;e++)$l(t,n,n()*512,n()*512,20+n()*30,.6+n(),`rgba(42,40,35,0.4)`,2);let r=Yl(512,135,55,43,5,9,12),i=r.getContext(`2d`),a=q(49);for(let e=0;e<10;e++)$l(i,a,a()*512,a()*512,20+a()*30,1.5,`#222`);return{map:Y(e),normalMap:Y(Zl(r,1.4),{srgb:!1}),roughnessMap:Y(Ql(256,225,20,45),{srgb:!1})}})}function iu(){return ql(`plaster`,()=>{let e=Jl(512),t=e.getContext(`2d`);t.drawImage(Yl(512,173,22,57,5,6,.12),0,0);let n=q(57);for(let e=0;e<14;e++){let e=n()*512,r=n()*512,i=15+n()*55;t.save(),t.beginPath();for(let a=0;a<9;a++){let o=a/9*Math.PI*2,s=i*(.5+n()*.6),c=e+Math.cos(o)*s,l=r+Math.sin(o)*s;a?t.lineTo(c,l):t.moveTo(c,l)}t.closePath(),t.fillStyle=`rgba(${105+n()*20},${84+n()*15},${68+n()*10},${.25+n()*.35})`,t.fill(),t.clip();for(let i=0;i<12;i++)t.fillStyle=`rgba(${120+n()*40},${70+n()*20},${50+n()*15},0.35)`,t.fillRect(e-60,r-60+i*11,120,7);t.restore(),t.strokeStyle=`rgba(80,66,54,0.45)`,t.lineWidth=1,t.stroke()}for(let e=0;e<40;e++)eu(t,n,n()*512,n()*512,8+n()*45,`rgba(47,42,34,@a)`,.12+n()*.25);for(let e=0;e<10;e++)$l(t,n,n()*512,n()*512,25+n()*40,.7,`rgba(50,44,37,0.4)`,2);let r=t.createLinearGradient(0,358.4,0,512);r.addColorStop(0,`rgba(50,45,37,0)`),r.addColorStop(1,`rgba(50,45,37,0.25)`),t.fillStyle=r,t.fillRect(0,358.4,512,153.6);let i=Yl(512,135,55,59,5,8,10),a=i.getContext(`2d`),o=q(66);for(let e=0;e<7;e++){let e=o()*512,t=o()*512,n=15+o()*40;a.fillStyle=`#4f4f4f`,a.beginPath(),a.arc(e,t,n,0,Math.PI*2),a.fill()}return{map:Y(e),normalMap:Y(Zl(i,1.6),{srgb:!1}),roughnessMap:Y(Ql(256,228,18,63),{srgb:!1})}})}function au(){return ql(`brick`,()=>{let e=Jl(512),t=e.getContext(`2d`);t.fillStyle=`#6d675c`,t.fillRect(0,0,512,512);let n=q(71);for(let e=0;e<20;e++){let r=e%2?-32:0;for(let i=-1;i<9;i++){let a=i*64+r,o=e*26;t.fillStyle=`rgb(${104+n()*46},${66+n()*24},${48+n()*15})`,t.fillRect(a+2,o+2,60,22),n()<.4&&(t.fillStyle=`rgba(38,30,24,0.3)`,t.beginPath(),t.ellipse(a+n()*64,o+n()*26,2+n()*5,1+n()*3,n(),0,Math.PI*2),t.fill()),t.fillStyle=`rgba(255,235,210,${.03+n()*.04})`,t.fillRect(a+4,o+4,54,2)}}t.drawImage(Yl(512,110,30,72,4,14,.2),0,0,512,512,0,0,512,512),t.globalCompositeOperation=`multiply`,t.globalAlpha=.65,t.drawImage(Yl(512,200,70,74,5,5,0),0,0),t.globalAlpha=1,t.globalCompositeOperation=`source-over`;for(let e=0;e<55;e++)eu(t,n,n()*512,n()*512,8+n()*50,`rgba(34,31,26,@a)`,.1+n()*.3);let r=Jl(512),i=r.getContext(`2d`);i.fillStyle=`#555`,i.fillRect(0,0,512,512);for(let e=0;e<20;e++){let t=e%2?-32:0;for(let n=-1;n<9;n++)i.fillStyle=`#d8d8d8`,i.fillRect(n*64+t+2,e*26+2,60,22)}return{map:Y(e),normalMap:Y(Zl(r,2),{srgb:!1}),roughnessMap:Y(Ql(256,232,18,76),{srgb:!1})}})}function ou(){return ql(`wood`,()=>{let e=Jl(512),t=e.getContext(`2d`),n=q(83);for(let e=0;e<512/42;e++){let r=90+n()*30;t.fillStyle=`rgb(${r+20},${r-10},${r-38})`,t.fillRect(0,e*42,512,40);for(let r=0;r<35;r++){let i=e*42+n()*42;t.strokeStyle=`rgba(${45+n()*25},${30+n()*16},${18+n()*10},${.1+n()*.2})`,t.lineWidth=.5+n()*1.2,t.beginPath(),t.moveTo(0,i);for(let e=0;e<=512;e+=24)t.lineTo(e,i+Math.sin(e*.02+r)*2.4);t.stroke()}n()<.5&&(t.fillStyle=`rgba(42,27,16,0.4)`,t.beginPath(),t.ellipse(n()*512,e*42+n()*42,4+n()*8,2+n()*3,0,0,Math.PI*2),t.fill()),t.fillStyle=`rgba(22,16,11,0.55)`,t.fillRect(0,e*42+42-2,512,2)}for(let e=0;e<120;e++)t.strokeStyle=`rgba(35,25,17,${.05+n()*.18})`,t.lineWidth=.6,t.beginPath(),t.moveTo(n()*512,n()*512),t.lineTo(n()*512,n()*512),t.stroke();let r=Yl(512,120,60,85,4,20,6);return{map:Y(e),normalMap:Y(Zl(r,1.2),{srgb:!1}),roughnessMap:Y(Ql(256,200,30,88),{srgb:!1})}})}function su(){return ql(`metal`,()=>{let e=Yl(512,80,40,97,5,8,.2),t=e.getContext(`2d`),n=q(97);for(let e=0;e<600;e++){t.strokeStyle=`rgba(${140+n()*60},${140+n()*60},${140+n()*55},${.02+n()*.08})`,t.lineWidth=.5;let e=n()*512;t.beginPath(),t.moveTo(0,e),t.lineTo(512,e+(n()-.5)*6),t.stroke()}for(let e=0;e<55;e++){let e=n()*512,r=n()*512,i=4+n()*35,a=t.createRadialGradient(e,r,0,e,r,i);a.addColorStop(0,`rgba(${100+n()*40},${48+n()*20},${24+n()*12},${.35+n()*.4})`),a.addColorStop(.7,`rgba(78,50,32,${.14+n()*.2})`),a.addColorStop(1,`rgba(60,40,26,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill()}for(let e=0;e<26;e++)t.strokeStyle=`rgba(210,210,205,${.04+n()*.1})`,t.lineWidth=.6,t.beginPath(),t.moveTo(n()*512,n()*512),t.lineTo(n()*512,n()*512),t.stroke();return{map:Y(e),normalMap:Y(Zl(Yl(512,128,50,100,4,12,14),.8),{srgb:!1}),roughnessMap:Y(Ql(256,150,50,105),{srgb:!1})}})}function cu(){return ql(`wallpaper`,()=>{let e=Jl(512),t=e.getContext(`2d`);t.fillStyle=`#8d8874`,t.fillRect(0,0,512,512);let n=q(111);for(let e=0;e<512;e+=64)t.fillStyle=`rgba(120,112,92,0.35)`,t.fillRect(e,0,26,512),t.fillStyle=`rgba(160,150,126,0.16)`,t.fillRect(e+30,0,3,512);for(let e=40;e<512;e+=110)for(let n=32;n<512;n+=64)t.save(),t.translate(n,e),t.strokeStyle=`rgba(105,98,80,0.35)`,t.lineWidth=1.2,t.beginPath(),t.ellipse(0,0,13,22,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.ellipse(0,0,6,12,0,0,Math.PI*2),t.stroke(),t.beginPath(),t.moveTo(-13,0),t.lineTo(13,0),t.stroke(),t.restore();t.drawImage(Yl(512,150,40,113,5,8,.2),0,0,512,512,0,0,512,512),t.globalCompositeOperation=`multiply`,t.globalAlpha=.4,t.drawImage(Yl(512,210,55,115,4,4,0),0,0),t.globalAlpha=1,t.globalCompositeOperation=`source-over`;for(let e=0;e<25;e++)eu(t,n,n()*512,n()*512,12+n()*80,`rgba(55,49,38,@a)`,.1+n()*.25);for(let e=0;e<8;e++){let e=n()*512,r=n()*512;t.fillStyle=`rgba(145,136,115,0.5)`,t.beginPath(),t.moveTo(e,r);for(let i=0;i<7;i++)t.lineTo(e+(n()-.5)*55,r+(n()-.5)*55);t.closePath(),t.fill()}return{map:Y(e),normalMap:Y(Zl(Yl(512,128,40,117,4,10,6),.8),{srgb:!1}),roughnessMap:Y(Ql(256,220,20,120),{srgb:!1})}})}function lu(e=`hospital`){return ql(`tile-`+e,()=>{let t=e===`hospital`?121:131,n=Jl(512),r=n.getContext(`2d`),i=q(t),a=e===`hospital`?[[156,165,145],[140,151,132],[166,172,152]]:[[116,104,84],[102,92,74],[126,112,90]];r.fillStyle=e===`hospital`?`#6f7566`:`#5c5344`,r.fillRect(0,0,512,512);for(let e=0;e<512;e+=64)for(let t=0;t<512;t+=64){let n=a[Math.floor(i()*a.length)];r.fillStyle=`rgb(${n[0]},${n[1]},${n[2]})`,r.fillRect(t+2,e+2,60,60),r.fillStyle=`rgba(255,255,255,0.035)`,r.fillRect(t+5,e+5,52,2)}r.drawImage(Yl(512,140,32,t+3,5,10,.2),0,0,512,512,0,0,512,512),r.globalCompositeOperation=`multiply`,r.globalAlpha=.45,r.drawImage(Yl(512,200,60,t+4,4,5,0),0,0),r.globalAlpha=1,r.globalCompositeOperation=`source-over`;for(let e=0;e<22;e++)eu(r,i,i()*512,i()*512,6+i()*55,`rgba(48,44,35,@a)`,.12+i()*.3);for(let e=0;e<5;e++)$l(r,i,i()*512,i()*512,20+i()*20,.7,`rgba(45,42,35,0.5)`,1);let o=Jl(512),s=o.getContext(`2d`);s.fillStyle=`#555`,s.fillRect(0,0,512,512);for(let e=0;e<512;e+=64)for(let t=0;t<512;t+=64)s.fillStyle=`#d0d0d0`,s.fillRect(t+2,e+2,60,60);return{map:Y(n),normalMap:Y(Zl(o,1),{srgb:!1}),roughnessMap:Y(Ql(256,150,30,t+5),{srgb:!1})}})}function uu(){return ql(`carpet`,()=>{let e=Jl(256).getContext(`2d`);return e.drawImage(Yl(256,105,50,151,5,24,.5),0,0),e.strokeStyle=`rgba(130,80,55,0.18)`,e.lineWidth=2,e.strokeRect(20,20,216,216),e.strokeRect(28,28,200,200),{map:Y(e.canvas),normalMap:Y(Zl(Yl(256,128,60,152,4,25,8),.6),{srgb:!1})}})}function du(e=1){return ql(`litwindow`+e,()=>{let t=document.createElement(`canvas`);t.width=256,t.height=256;let n=t.getContext(`2d`),r=q(e*77+3),i=e%3==0?[`#ffd99c`,`#e8a75c`,`#6e3c1e`]:e%3==1?[`#e7d8b6`,`#b79868`,`#4b2f19`]:[`#c6d6c2`,`#8b9f8a`,`#33443a`],a=n.createLinearGradient(0,0,0,256);if(a.addColorStop(0,i[0]),a.addColorStop(.52,i[1]),a.addColorStop(1,i[2]),n.fillStyle=a,n.fillRect(0,0,256,256),n.fillStyle=`rgba(22,16,11,0.65)`,r()<.6&&n.fillRect(0,158.72,256,97.28),r()<.6&&n.fillRect(153.6,76.8,87.04,128),r()<.55){n.fillStyle=`rgba(32,24,16,0.55)`;for(let e=10;e<158.72;e+=12)n.fillRect(0,e,256,5)}else n.fillStyle=`rgba(25,20,15,0.5)`,n.fillRect(0,0,40.96,256),n.fillRect(215.04,0,40.96,256);n.fillStyle=`rgba(17,20,17,0.65)`,n.fillRect(125,0,6,256),n.fillRect(0,125,256,6),n.strokeStyle=`rgba(18,20,17,0.8)`,n.lineWidth=10,n.strokeRect(0,0,256,256);for(let e=0;e<10;e++)eu(n,r,r()*256,r()*256,5+r()*20,`rgba(20,16,10,@a)`,.2);return Y(t)})}function fu(){return ql(`windowpane`,()=>{let e=document.createElement(`canvas`);e.width=256,e.height=256;let t=e.getContext(`2d`),n=t.createLinearGradient(0,0,256,256);n.addColorStop(0,`#1d2828`),n.addColorStop(.45,`#0e1718`),n.addColorStop(1,`#25302e`),t.fillStyle=n,t.fillRect(0,0,256,256);let r=t.createLinearGradient(0,0,0,256);r.addColorStop(0,`rgba(210,195,165,0.22)`),r.addColorStop(.4,`rgba(160,165,150,0.05)`),r.addColorStop(1,`rgba(30,35,30,0)`),t.fillStyle=r,t.fillRect(0,0,256,256);let i=q(171);for(let e=0;e<30;e++){let e=i()*256,n=i()*256,r=t.createLinearGradient(e,n,e+3,n+60);r.addColorStop(0,`rgba(25,30,25,0.25)`),r.addColorStop(1,`rgba(25,30,25,0)`),t.fillStyle=r,t.fillRect(e,n,2+i()*5,40+i()*70)}return t.strokeStyle=`rgba(8,10,9,0.9)`,t.lineWidth=9,t.strokeRect(0,0,256,256),t.fillStyle=`rgba(10,12,10,0.7)`,t.fillRect(125,0,6,256),t.fillRect(0,125,256,6),Y(e)})}function pu(e,{bg:t=`#1b1c17`,fg:n=`#e8e2d2`,accent:r=`#c94f2d`,sub:i=``,w:a=512,h:o=256,border:s=!0,font:c=`Barlow Condensed`,weight:l=600,size:u=96,align:d=`center`,vertical:f=!1,icon:p=``}={}){let m=document.createElement(`canvas`);m.width=a,m.height=o;let h=m.getContext(`2d`);h.fillStyle=t,h.fillRect(0,0,a,o);let g=q(e.length*37+a);for(let e=0;e<25;e++)eu(h,g,g()*a,g()*o,5+g()*40,`rgba(40,36,28,@a)`,.08+g()*.14);s&&(h.strokeStyle=r,h.lineWidth=6,h.strokeRect(12,12,a-24,o-24),h.strokeStyle=`rgba(232,226,210,0.3)`,h.lineWidth=1,h.strokeRect(20,20,a-40,o-40)),h.textAlign=d,h.textBaseline=`middle`;let _=d===`center`?a/2:d===`left`?38:a-38;f?(h.save(),h.translate(a/2,o/2),h.rotate(-Math.PI/2),h.fillStyle=n,h.font=`${l} ${u}px "${c}", Arial Narrow, sans-serif`,h.fillText(e,0,0),h.restore()):(p&&(h.font=`${u*.75}px "Barlow Condensed", sans-serif`,h.fillStyle=r,h.fillText(p,_,o/2-(i?22:0))),h.fillStyle=n,h.font=`${l} ${u}px "${c}", Arial Narrow, sans-serif`,h.fillText(e,_,o/2-(i?20:0)+(p?u*.52:0)),i&&(h.fillStyle=r,h.font=`400 ${Math.max(18,u*.22)}px "Barlow Condensed", sans-serif`,h.letterSpacing=`4px`,h.fillText(i,_,o/2+u*.55))),h.globalCompositeOperation=`destination-out`;for(let e=0;e<90;e++)h.globalAlpha=.15+g()*.5,h.beginPath(),h.arc(g()*a,g()*o,g()*2.5,0,Math.PI*2),h.fill();return h.globalAlpha=1,h.globalCompositeOperation=`source-over`,Y(m)}function mu(e=`missing`){return ql(`poster-`+e,()=>{let t=document.createElement(`canvas`);t.width=512,t.height=720;let n=t.getContext(`2d`),r=q(e.length*91+7);n.fillStyle=`#d8d1bf`,n.fillRect(0,0,512,720),e===`missing`?(n.fillStyle=`#1c1c18`,n.font=`600 78px "Barlow Condensed", Arial Narrow, sans-serif`,n.textAlign=`center`,n.fillText(`MISSING`,256,105),n.font=`400 26px "Barlow Condensed", sans-serif`,n.fillStyle=`#b33a2c`,n.fillText(`HAVE YOU SEEN HER?`,256,145),n.fillStyle=`#b9b2a2`,n.fillRect(60,180,392,330),n.fillStyle=`#6d675c`,n.beginPath(),n.arc(256,300,90,0,Math.PI*2),n.fill(),n.beginPath(),n.ellipse(256,500,135,155,0,Math.PI,0),n.fill(),n.fillStyle=`#1c1c18`,n.font=`500 24px "Barlow Condensed", sans-serif`,n.textAlign=`left`,n.fillText(`MARTA VEGA · 14 YEARS OLD`,50,565),n.font=`400 19px Inter, sans-serif`,n.fillStyle=`#3a3833`,n.fillText(`Last seen near the Harbor Pharmacy, Sector 7.`,50,603),n.fillText(`Do not approach infected. Call quarantine line 118.`,50,632),n.fillStyle=`#b33a2c`,n.fillRect(50,655,412,34),n.fillStyle=`#f0e9da`,n.font=`600 22px "Barlow Condensed", sans-serif`,n.textAlign=`center`,n.fillText(`REWARD — 2 DAYS OF SUPPLIES`,256,680)):e===`quarantine`?(n.fillStyle=`#d8c25c`,n.fillRect(0,0,512,720),n.fillStyle=`#171711`,n.fillRect(22,22,468,676),n.strokeStyle=`#d8c25c`,n.lineWidth=8,n.strokeRect(38,38,436,644),n.fillStyle=`#d8c25c`,n.textAlign=`center`,n.font=`700 64px "Barlow Condensed", sans-serif`,n.fillText(`QUARANTINE`,256,140),n.font=`600 138px "Barlow Condensed", sans-serif`,n.fillText(`KEEP`,256,290),n.fillText(`OUT`,256,410),n.font=`400 27px "Barlow Condensed", sans-serif`,n.fillText(`SECTOR 7 SEALED BY ORDER OF`,256,500),n.fillText(`HARBOR CITY EMERGENCY COUNCIL`,256,536),n.strokeStyle=`#d8c25c`,n.lineWidth=4,n.beginPath(),n.arc(256,620,22,0,Math.PI*2),n.stroke(),n.beginPath(),n.moveTo(256,598),n.lineTo(256,620),n.lineTo(270,630),n.stroke()):(n.fillStyle=`#22231e`,n.fillRect(0,0,512,720),n.strokeStyle=`#c8c2b0`,n.lineWidth=3,n.strokeRect(20,20,472,680),n.fillStyle=`#d8d1bf`,n.textAlign=`center`,n.font=`700 58px "Barlow Condensed", sans-serif`,n.fillText(`SAFE HOUSE`,256,120),n.fillStyle=`#a9c46a`,n.font=`600 38px "Barlow Condensed", sans-serif`,n.fillText(`THE OLD LAUNDRY`,256,175),n.fillStyle=`#d8d1bf`,n.font=`400 24px Inter, sans-serif`,n.fillText(`Water · Shelter · Radio`,256,230),n.strokeStyle=`#6d6a5c`,n.lineWidth=5,n.beginPath(),n.moveTo(70,300),n.lineTo(440,300),n.moveTo(260,260),n.lineTo(260,590),n.stroke(),n.strokeStyle=`#a9c46a`,n.lineWidth=8,n.beginPath(),n.moveTo(260,300),n.lineTo(260,470),n.lineTo(350,470),n.lineTo(350,560),n.stroke(),n.fillStyle=`#a9c46a`,n.beginPath(),n.arc(350,560,18,0,Math.PI*2),n.fill(),n.fillStyle=`#d8d1bf`,n.font=`400 22px "Barlow Condensed", sans-serif`,n.fillText(`IF YOU CAN READ THIS — THE CITY IS LOST.`,256,660)),n.globalCompositeOperation=`multiply`,n.globalAlpha=.25,n.drawImage(Yl(256,190,50,4,4,5,0),0,0,256,256,0,0,512,720),n.globalAlpha=1,n.globalCompositeOperation=`source-over`;for(let e=0;e<35;e++)eu(n,r,r()*512,r()*720,5+r()*45,`rgba(50,42,28,@a)`,.1+r()*.2);return n.globalCompositeOperation=`destination-out`,n.beginPath(),n.moveTo(0,0),n.lineTo(55,0),n.lineTo(0,70),n.fill(),n.beginPath(),n.moveTo(512,720),n.lineTo(467,720),n.lineTo(512,660),n.fill(),Y(t)})}function hu(e,t=`#b8472f`,n=1){return ql(`graffiti-`+e+t+n,()=>{let r=document.createElement(`canvas`);r.width=512,r.height=256;let i=r.getContext(`2d`),a=q(n*51+e.length);i.translate(256,128),i.rotate((a()-.5)*.12),i.textAlign=`center`,i.textBaseline=`middle`,i.font=`700 96px "Barlow Condensed", Arial Narrow, sans-serif`,i.shadowColor=t,i.shadowBlur=18,i.strokeStyle=`rgba(28,25,20,0.35)`,i.lineWidth=16,i.strokeText(e,0,0),i.fillStyle=t,i.globalAlpha=.9,i.fillText(e,0,0),i.shadowBlur=0,i.globalAlpha=1;for(let e=0;e<26;e++){let e=(a()-.5)*512*.8,n=20+a()*40;i.fillStyle=t,i.globalAlpha=.35+a()*.3,i.fillRect(e,n,2+a()*2,10+a()*80)}i.globalAlpha=1,i.globalCompositeOperation=`destination-out`;for(let e=0;e<220;e++)i.globalAlpha=a()*.7,i.beginPath(),i.arc(a()*512-256,a()*256-128,a()*2.2,0,Math.PI*2),i.fill();return Y(r)})}function gu(e=1){return ql(`blood`+e,()=>{let t=Jl(256),n=t.getContext(`2d`),r=q(e*19+5);for(let e=0;e<42;e++){let t=128+(r()-.5)*120,i=128+(r()-.5)*120,a=2+r()*(e<6?28:10),o=n.createRadialGradient(t,i,0,t,i,a);o.addColorStop(0,`rgba(${70+r()*30},${8+r()*8},${5+r()*5},${.5+r()*.4})`),o.addColorStop(1,`rgba(45,4,3,0)`),n.fillStyle=o,n.beginPath(),n.arc(t,i,a,0,Math.PI*2),n.fill()}for(let e=0;e<12;e++){let e=r()*256,t=r()*256,i=10+r()*60,a=n.createLinearGradient(e,t,e,t+i);a.addColorStop(0,`rgba(72,8,5,0.55)`),a.addColorStop(1,`rgba(55,4,3,0)`),n.strokeStyle=a,n.lineWidth=1+r()*4,n.beginPath(),n.moveTo(e,t),n.lineTo(e,t+i),n.stroke()}return Y(t)})}function _u(){return ql(`puddle`,()=>{let e=Jl(512),t=e.getContext(`2d`);t.clearRect(0,0,512,512),t.fillStyle=`#1a2020`,t.beginPath(),q(202);for(let e=0;e<24;e++){let n=e/24*Math.PI*2,r=512*(.29+Il(Math.cos(n)*2+5,Math.sin(n)*2+5,3,4)*.12),i=256+Math.cos(n)*r,a=256+Math.sin(n)*r;e?t.lineTo(i,a):t.moveTo(i,a)}return t.closePath(),t.fill(),t.strokeStyle=`rgba(160,170,160,0.15)`,t.lineWidth=2,t.stroke(),Y(e)})}function vu(){return ql(`weeds`,()=>{let e=document.createElement(`canvas`);e.width=256,e.height=256;let n=e.getContext(`2d`),r=q(303);for(let e=0;e<80;e++){let e=30+r()*196,t=30+r()*150,i=(r()-.5)*55,a=r()<.4?`rgba(108,112,62,${.5+r()*.4})`:`rgba(${120+r()*30},${105+r()*25},${62+r()*20},${.4+r()*.4})`;n.strokeStyle=a,n.lineWidth=1+r()*2,n.beginPath(),n.moveTo(e,256),n.quadraticCurveTo(e+i*.3,256-t*.6,e+i,256-t),n.stroke(),r()<.5&&(n.fillStyle=a,n.beginPath(),n.ellipse(e+i,256-t,2+r()*3,6+r()*8,i*.01,0,Math.PI*2),n.fill())}let i=Y(e);return i.wrapS=i.wrapT=t,i})}function yu(){return ql(`ivy`,()=>{let e=document.createElement(`canvas`);e.width=256,e.height=256;let n=e.getContext(`2d`),r=q(404);for(let e=0;e<240;e++){let e=r()*256,t=r()*256,i=3+r()*10;n.fillStyle=`rgba(${32+r()*30},${52+r()*30},${25+r()*15},${.5+r()*.4})`,n.beginPath(),n.ellipse(e,t,i,i*(.4+r()*.5),r()*3,0,Math.PI*2),n.fill()}let i=Y(e);return i.wrapS=i.wrapT=t,i})}function bu(){return ql(`paper`,()=>{let e=Jl(256),t=e.getContext(`2d`);t.drawImage(Yl(256,205,30,505,5,14,.4),0,0);let n=q(505);for(let e=0;e<40;e++)t.strokeStyle=`rgba(90,85,72,${.05+n()*.15})`,t.beginPath(),t.moveTo(n()*256,n()*256),t.lineTo(n()*256,n()*256),t.stroke();return Y(e)})}function xu(){return ql(`hazard`,()=>{let e=Jl(256),t=e.getContext(`2d`);t.fillStyle=`#c9a93f`,t.fillRect(0,0,256,256),t.fillStyle=`#1b1a16`;for(let e=-256;e<512;e+=64)t.beginPath(),t.moveTo(e,0),t.lineTo(e+32,0),t.lineTo(e+32-256,256),t.lineTo(e-256,256),t.closePath(),t.fill();return t.globalAlpha=.3,t.drawImage(Yl(256,128,90,606,5,10,.3),0,0),Y(e)})}function Su(e=`#8c3d2c`,t=`#d9cdb2`){return ql(`awning-`+e+t,()=>{let n=document.createElement(`canvas`);n.width=256,n.height=256;let r=n.getContext(`2d`);r.fillStyle=e,r.fillRect(0,0,256,256);for(let e=0;e<256;e+=48)r.fillStyle=t,r.fillRect(e,0,24,256);return r.globalAlpha=.25,r.drawImage(Yl(256,128,80,707,5,8,.4),0,0),Y(n)})}function Cu(){return ql(`dirt`,()=>{let e=Yl(512,93,60,808,6,8,.4),t=e.getContext(`2d`),n=q(808);for(let e=0;e<60;e++)eu(t,n,n()*512,n()*512,8+n()*45,`rgba(55,45,30,@a)`,.2+n()*.3);return{map:Y(e),normalMap:Y(Zl(Yl(512,128,80,809,5,12,12),1.4),{srgb:!1}),roughnessMap:Y(Ql(256,235,15,810),{srgb:!1})}})}function wu(){return Cu()}function Tu(){return ql(`crackdecal`,()=>{let e=document.createElement(`canvas`);e.width=512,e.height=512;let t=e.getContext(`2d`),n=q(1001);t.strokeStyle=`rgba(210,220,218,0.5)`;for(let e=0;e<16;e++)t.lineWidth=.6+n(),$l(t,n,20+n()*472,20+n()*472,30+n()*60,1.2,`rgba(215,225,222,0.38)`,3);for(let e=0;e<25;e++)t.fillStyle=`rgba(225,235,230,0.08)`,t.beginPath(),t.moveTo(n()*512,n()*512),t.lineTo(n()*512,n()*512),t.lineTo(n()*512,n()*512),t.closePath(),t.fill();return Y(e)})}function Eu(e){return ql(`decal-`+e,()=>{let t=Jl(256),n=t.getContext(`2d`),r=q(e.length*33+3);if(e===`oil`)for(let e=0;e<16;e++)eu(n,r,128+(r()-.5)*80,128+(r()-.5)*80,15+r()*45,`rgba(10,10,9,@a)`,.35);else if(e===`leaves`)for(let e=0;e<90;e++){let e=r()*256,t=r()*256;n.fillStyle=`rgba(${95+r()*40},${72+r()*30},${35+r()*20},${.4+r()*.4})`,n.save(),n.translate(e,t),n.rotate(r()*6),n.beginPath(),n.ellipse(0,0,2+r()*5,1+r()*2,0,0,Math.PI*2),n.fill(),n.restore()}else if(e===`trash`)for(let e=0;e<20;e++)n.fillStyle=`rgba(${190+r()*40},${185+r()*35},${165+r()*30},${.4+r()*.5})`,n.save(),n.translate(r()*256,r()*256),n.rotate(r()*6),n.fillRect(0,0,4+r()*16,2+r()*8),n.restore();return Y(t)})}function Du(){return ql(`smoke`,()=>{let e=Jl(256),t=e.getContext(`2d`);t.clearRect(0,0,256,256);let n=q(1100);for(let e=0;e<38;e++){let e=128+(n()-.5)*90,r=128+(n()-.5)*90,i=18+n()*60,a=t.createRadialGradient(e,r,0,e,r,i);a.addColorStop(0,`rgba(70,70,68,0.16)`),a.addColorStop(1,`rgba(70,70,68,0)`),t.fillStyle=a,t.beginPath(),t.arc(e,r,i,0,Math.PI*2),t.fill()}return Y(e)})}var Ou={machete:`<svg viewBox="0 0 64 64"><path d="M10 50l7-3 25-27c2-2 6-5 9-6l4 4c-2 4-5 7-7 9L22 52l-4-2 26-28-25 26-2-1z" fill="currentColor"/><path d="M13 45l8 8-6 5-7-7z" fill="currentColor" opacity=".55"/></svg>`,axe:`<svg viewBox="0 0 64 64"><path d="M29 8l4 3-20 45-5-2z" fill="currentColor" opacity=".75"/><path d="M32 9c8-5 19-2 24 5-7 5-15 10-24 12l-4-8z" fill="currentColor"/><path d="M30 21c9-2 17-6 25-11l3 4c-7 7-16 12-26 15z" fill="currentColor" opacity=".4"/></svg>`,pipe:`<svg viewBox="0 0 64 64"><path d="M10 48l6-6 27-30 6 6-28 29 3 3-8 8z" fill="currentColor"/><path d="M12 46l7 7-5 5-7-7z" fill="currentColor" opacity=".6"/></svg>`,knife:`<svg viewBox="0 0 64 64"><path d="M10 52l8-3 26-31c3-3 8-4 10-4l1 3c-3 4-9 8-13 13L18 56l-8-1z" fill="currentColor"/><path d="M13 46l9 9-6 4-7-7z" fill="currentColor" opacity=".6"/></svg>`,pistol:`<svg viewBox="0 0 64 64"><path d="M8 20h37l8 8v8H37l-3 6 4 4-3 6-13-1-4-11-10-2z" fill="currentColor"/><path d="M37 25h9v7h-9z" fill="currentColor" opacity=".4"/></svg>`,shotgun:`<svg viewBox="0 0 64 64"><path d="M4 25h41l4 2v4H33l-2 7h-8l-3-5-16-1z" fill="currentColor"/><path d="M45 24l12 2 3 4-2 5-13-2z" fill="currentColor" opacity=".8"/><path d="M31 38l8 1-2 15-6 1z" fill="currentColor" opacity=".6"/></svg>`,rifle:`<svg viewBox="0 0 64 64"><path d="M3 26h48l5 3v5H54l-2 7h-8l-3-6H20l-6 8H8l2-10-7-1z" fill="currentColor"/><path d="M24 38h12l-2 17h-7z" fill="currentColor" opacity=".6"/><path d="M45 30h10v4H45z" fill="currentColor" opacity=".4"/></svg>`,ammo:`<svg viewBox="0 0 64 64"><path d="M15 12h8l3 8-2 34h-10l-2-34z" fill="currentColor"/><path d="M30 12h8l3 8-2 34H29l-2-34z" fill="currentColor" opacity=".7"/><path d="M45 12h8l3 8-2 34H44l-2-34z" fill="currentColor" opacity=".45"/></svg>`,shells:`<svg viewBox="0 0 64 64"><path d="M10 10h12v42H10zM28 10h12v42H28zM46 10h12v42H46z" fill="currentColor"/><path d="M10 14h12v10H10zM28 14h12v10H28zM46 14h12v10H46z" fill="currentColor" opacity=".4"/></svg>`,bandage:`<svg viewBox="0 0 64 64"><g transform="rotate(-38 32 32)"><rect x="6" y="22" width="52" height="21" rx="9" fill="currentColor"/><rect x="22" y="24" width="20" height="17" rx="2" fill="#111" opacity=".35"/><path d="M28 27h8v3h-8zm0 6h8v3h-8z" fill="currentColor" opacity=".5"/></g></svg>`,medkit:`<svg viewBox="0 0 64 64"><rect x="8" y="19" width="48" height="33" rx="3" fill="currentColor"/><path d="M24 19v-6h16v6h-5v-3h-6v3z" fill="currentColor" opacity=".55"/><path d="M28 28h8v5h5v8h-5v5h-8v-5h-5v-8h5z" fill="#10110f"/></svg>`,pills:`<svg viewBox="0 0 64 64"><rect x="12" y="18" width="40" height="34" rx="3" fill="currentColor"/><path d="M12 18h40v9H12z" fill="#10110f" opacity=".4"/><path d="M26 33h12v4H26zM30 29h4v12h-4z" fill="#10110f"/></svg>`,water:`<svg viewBox="0 0 64 64"><path d="M25 7h14v5l4 6v36a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V18l4-6z" fill="currentColor"/><path d="M23 26h18v22H23z" fill="#10110f" opacity=".35"/><path d="M24 30c3-3 5 3 8 0s5 3 8 0v18H24z" fill="currentColor" opacity=".55"/></svg>`,can:`<svg viewBox="0 0 64 64"><rect x="18" y="14" width="28" height="38" rx="4" fill="currentColor"/><ellipse cx="32" cy="15" rx="14" ry="4" fill="currentColor" opacity=".6"/><rect x="18" y="24" width="28" height="17" fill="#10110f" opacity=".3"/></svg>`,bar:`<svg viewBox="0 0 64 64"><rect x="14" y="24" width="36" height="22" rx="3" transform="rotate(-8 32 32)" fill="currentColor"/><path d="M20 30l24-3v5L20 35z" fill="#10110f" opacity=".3"/></svg>`,antibiotics:`<svg viewBox="0 0 64 64"><rect x="12" y="16" width="40" height="36" rx="3" fill="currentColor"/><path d="M12 16h40v8H12z" fill="#10110f" opacity=".45"/><path d="M26 30h12v4H26zM30 26h4v12h-4z" fill="#10110f"/><circle cx="46" cy="46" r="3" fill="#10110f" opacity=".4"/></svg>`,scrap:`<svg viewBox="0 0 64 64"><path d="M10 38l10-16 10 6 6-12 16 14-6 18-14 6-12-6z" fill="currentColor"/><path d="M28 28l8 6-4 14-8-4z" fill="#10110f" opacity=".25"/><circle cx="20" cy="36" r="3" fill="#10110f" opacity=".4"/></svg>`,lockpick:`<svg viewBox="0 0 64 64"><path d="M12 50l6 6 8-8-6-6z" fill="currentColor"/><path d="M24 42l22-26 6 5-22 26z" fill="currentColor" opacity=".7"/><path d="M46 12l8-3 2 8-6 3z" fill="currentColor"/></svg>`,flare:`<svg viewBox="0 0 64 64"><path d="M27 17h10l3 39H24z" fill="currentColor"/><path d="M27 17c0-7 10-7 10 0z" fill="currentColor" opacity=".6"/><path d="M31 10l2-7 3 8 5-5-1 9 7-2-7 6 8 2-8 2 4 6-7-4-1 8-3-7-4 7 1-8-9 3 7-6-8-4 9-1z" fill="currentColor" opacity=".35"/></svg>`,molotov:`<svg viewBox="0 0 64 64"><path d="M27 6h10v13l8 15v21a4 4 0 0 1-4 4H23a4 4 0 0 1-4-4V34l8-15z" fill="currentColor"/><path d="M21 39h22v17H21z" fill="#10110f" opacity=".3"/><path d="M27 6h10v6H27z" fill="#10110f" opacity=".4"/><path d="M34 4l8 5-6 6z" fill="currentColor" opacity=".7"/></svg>`,repair:`<svg viewBox="0 0 64 64"><path d="M40 8a14 14 0 0 0-13 19L8 46l10 10 19-19A14 14 0 1 0 40 8zm4 17a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" fill="currentColor"/></svg>`,money:`<svg viewBox="0 0 64 64"><rect x="6" y="20" width="52" height="26" rx="2" transform="rotate(-5 32 33)" fill="currentColor"/><circle cx="32" cy="33" r="8" fill="#10110f" opacity=".3"/><path d="M12 26h8M44 38h8" stroke="#10110f" stroke-width="2" opacity=".3"/></svg>`,walkie:`<svg viewBox="0 0 64 64"><rect x="18" y="18" width="28" height="40" rx="3" fill="currentColor"/><path d="M34 18V5l6-2v15z" fill="currentColor" opacity=".7"/><rect x="23" y="25" width="18" height="11" fill="#10110f" opacity=".35"/><circle cx="26" cy="48" r="3" fill="#10110f" opacity=".4"/></svg>`,battery:`<svg viewBox="0 0 64 64"><rect x="10" y="21" width="44" height="26" rx="2" fill="currentColor"/><path d="M54 28h5v12h-5z" fill="currentColor" opacity=".6"/><path d="M30 25l-7 12h6l-3 10 10-14h-6z" fill="#10110f"/></svg>`,clothing:`<svg viewBox="0 0 64 64"><path d="M24 8l8 5 8-5 14 10-7 12-6-4v26H23V26l-6 4-7-12z" fill="currentColor"/></svg>`,backpack:`<svg viewBox="0 0 64 64"><rect x="15" y="18" width="34" height="38" rx="8" fill="currentColor"/><path d="M24 14h16v8H24z" fill="currentColor" opacity=".6"/><rect x="22" y="31" width="20" height="14" rx="2" fill="#10110f" opacity=".3"/></svg>`,note:`<svg viewBox="0 0 64 64"><path d="M14 6h26l10 10v42H14z" fill="currentColor"/><path d="M40 6v10h10" fill="#10110f" opacity=".35"/><path d="M21 26h22M21 33h22M21 40h14" stroke="#10110f" stroke-width="2.5" opacity=".45"/></svg>`,default:`<svg viewBox="0 0 64 64"><path d="M16 24l16-12 16 12v26H16z" fill="currentColor"/></svg>`},ku={machete:{name:`Worn Machete`,kind:`melee`,desc:`A dull steel machete. The handle is wrapped in dried tape. It has opened more than just crates.`,weight:1.2,stack:1,icon:`machete`,color:`#b9b4a6`,weapon:{damage:38,range:2.35,rate:.58,stamina:11,durability:120,durabilityLoss:.9,type:`blade`,sound:`blade`}},pipe:{name:`Steel Pipe`,kind:`melee`,desc:`A length of scaffolding pipe. Heavy, loud, and reliable in a pinch.`,weight:1.6,stack:1,icon:`pipe`,color:`#9a9488`,weapon:{damage:27,range:2.2,rate:.52,stamina:9,durability:160,durabilityLoss:.6,type:`blunt`,sound:`blunt`}},axe:{name:`Fire Axe`,kind:`melee`,desc:`Harbor City Fire Department. The blade still has red paint in the stamp.`,weight:2.4,stack:1,icon:`axe`,color:`#c2b9a5`,weapon:{damage:62,range:2.25,rate:.9,stamina:19,durability:90,durabilityLoss:1.4,type:`blade`,sound:`axe`}},knife:{name:`Kitchen Knife`,kind:`melee`,desc:`Quiet, fast, and far too close for comfort.`,weight:.4,stack:1,icon:`knife`,color:`#b9b9b0`,weapon:{damage:19,range:1.8,rate:.34,stamina:5,durability:70,durabilityLoss:1.1,type:`blade`,sound:`blade`}},pistol:{name:`Harbor M9`,kind:`firearm`,desc:`Standard issue sidearm. Reliable, but every shot carries.`,weight:1,stack:1,icon:`pistol`,color:`#a7a8a4`,weapon:{damage:44,headshot:2.4,rate:.28,mag:8,reload:1.4,spread:.012,range:80,stamina:1,ammo:`pistol_ammo`,sound:`pistol`,recoil:.028}},shotgun:{name:`Pump Shotgun`,kind:`firearm`,desc:`Eight pellets of close-range persuasion. The stock is cracked and taped.`,weight:3.4,stack:1,icon:`shotgun`,color:`#a58d6e`,weapon:{damage:15,pellets:8,headshot:1.8,rate:.85,mag:6,reload:2.1,spread:.075,range:32,stamina:5,ammo:`shotgun_shells`,sound:`shotgun`,recoil:.065}},rifle:{name:`Patrol Rifle`,kind:`firearm`,desc:`An old service rifle. Scoped, heavy, and very loud.`,weight:3.8,stack:1,icon:`rifle`,color:`#8b857a`,weapon:{damage:68,headshot:3,rate:.16,mag:30,reload:2,spread:.009,range:140,stamina:2,ammo:`rifle_ammo`,sound:`rifle`,recoil:.02}},pistol_ammo:{name:`9mm Rounds`,kind:`ammo`,desc:`Eight rounds of tarnished 9mm. Fits the Harbor M9.`,weight:.02,stack:64,icon:`ammo`,color:`#c3a96b`,ammo:`pistol_ammo`},shotgun_shells:{name:`12ga Shells`,kind:`ammo`,desc:`Buck shot. Brass is green with age but the powder still smells dry.`,weight:.05,stack:32,icon:`shells`,color:`#b3674a`,ammo:`shotgun_shells`},rifle_ammo:{name:`5.56 Rounds`,kind:`ammo`,desc:`Military surplus rifle ammunition.`,weight:.03,stack:90,icon:`ammo`,color:`#c3a96b`,ammo:`rifle_ammo`},bandage:{name:`Bandage`,kind:`medical`,desc:`Clean gauze and a strip of tape. Stops the bleeding, not the fear.`,weight:.1,stack:8,icon:`bandage`,color:`#ded5c2`,use:{health:22,time:1.2}},medkit:{name:`Field Medkit`,kind:`medical`,desc:`Sealed trauma kit. Everything you need to stitch yourself back together.`,weight:.7,stack:3,icon:`medkit`,color:`#ded5c2`,use:{health:65,time:2.4}},painkillers:{name:`Painkillers`,kind:`medical`,desc:`Expired painkillers. Takes the edge off, briefly.`,weight:.05,stack:6,icon:`pills`,color:`#d9c9a2`,use:{health:8,stamina:30,time:.8}},antibiotics:{name:`Antibiotics`,kind:`quest`,desc:`A full course of broad-spectrum antibiotics. This is what the safe house needs.`,weight:.2,stack:1,icon:`antibiotics`,color:`#d3c99d`,quest:`antibiotics`},water:{name:`Bottled Water`,kind:`drink`,desc:`Half a litre of water. The plastic tastes faintly of chlorine.`,weight:.5,stack:4,icon:`water`,color:`#9fb7c0`,use:{thirst:34,health:2,time:1}},canned_food:{name:`Canned Beans`,kind:`food`,desc:`Six years past the best-before date. Still sealed.`,weight:.4,stack:4,icon:`can`,color:`#b99a6b`,use:{hunger:30,time:1.6}},energy_bar:{name:`Protein Bar`,kind:`food`,desc:`Chalky, sweet, and weirdly comforting.`,weight:.1,stack:6,icon:`bar`,color:`#b08a58`,use:{hunger:14,stamina:22,time:.8}},vitamins:{name:`Vitamins`,kind:`food`,desc:`A dusty bottle of multivitamins. Better than nothing.`,weight:.1,stack:4,icon:`pills`,color:`#c7b472`,use:{hunger:5,health:5,time:.5}},scrap:{name:`Scrap Metal`,kind:`material`,desc:`Bent brackets, screws, and wire. Good for repairing weapons.`,weight:.3,stack:20,icon:`scrap`,color:`#9b9184`},repair_kit:{name:`Weapon Repair Kit`,kind:`material`,desc:`A roll of wire, oil, and abrasive tape. Restores a weapon’s edge.`,weight:.6,stack:4,icon:`repair`,color:`#b7a47f`,use:{repair:!0,time:1.4}},lockpick:{name:`Lockpick Set`,kind:`material`,desc:`Two tension bars and a bent pick. Opens the things people wanted kept shut.`,weight:.1,stack:5,icon:`lockpick`,color:`#bdb6a3`},flare:{name:`Road Flare`,kind:`throwable`,desc:`Burns hot and red for minutes. The infected hate the light. So does everything else.`,weight:.2,stack:5,icon:`flare`,color:`#d25732`},molotov:{name:`Molotov`,kind:`throwable`,desc:`Fuel, rag, bottle. A bright, stupid answer to a dark problem.`,weight:.7,stack:3,icon:`molotov`,color:`#c9763f`},money:{name:`Old Banknotes`,kind:`misc`,desc:`Harbor City dinars. Worth less than toilet paper now, but old habits die hard.`,weight:.01,stack:99,icon:`money`,color:`#b2a274`},clothing:{name:`Clothes`,kind:`misc`,desc:`A clean shirt and socks. A small mercy.`,weight:.4,stack:3,icon:`clothing`,color:`#8d8e78`},walkie:{name:`Broken Walkie`,kind:`misc`,desc:`The battery is dead, but the speaker still clicks sometimes.`,weight:.3,stack:1,icon:`walkie`,color:`#8f9b92`},battery:{name:`Battery`,kind:`material`,desc:`A heavy 6V battery. Could power a light, a radio, or a trap.`,weight:.3,stack:4,icon:`battery`,color:`#a89b6d`},note:{name:`Torn Note`,kind:`misc`,desc:`A page torn from someone’s diary. The last line reads: “Do not open the door after dark.”`,weight:.01,stack:1,icon:`note`,color:`#c3bba7`}};function Au(e){return Ou[ku[e]?.icon]||Ou.default}function ju(e,t=1){return{id:e,qty:t}}var Mu={med_cabinet:[[`bandage`,2,.55],[`painkillers`,1,.35],[`medkit`,1,.18],[`antibiotics`,1,.05]],pharmacy_shelf:[[`bandage`,2,.5],[`painkillers`,2,.4],[`vitamins`,1,.25],[`medkit`,1,.08]],hospital_cabinet:[[`bandage`,2,.5],[`medkit`,1,.3],[`painkillers`,2,.3],[`antibiotics`,1,.12]],kitchen:[[`canned_food`,1,.5],[`water`,1,.4],[`energy_bar`,1,.25],[`scrap`,2,.2]],fridge:[[`water`,1,.55],[`canned_food`,1,.3],[`energy_bar`,1,.2]],nightstand:[[`bandage`,1,.3],[`painkillers`,1,.25],[`battery`,1,.3],[`note`,1,.18]],wardrobe:[[`clothing`,1,.55],[`scrap`,1,.15],[`pistol_ammo`,4,.06]],toolbox:[[`scrap`,3,.7],[`repair_kit`,1,.35],[`lockpick`,1,.3],[`flare`,1,.15]],market_shelf:[[`canned_food`,2,.55],[`water`,2,.5],[`energy_bar`,2,.35],[`vitamins`,1,.15]],register:[[`money`,15,.7],[`lockpick`,1,.2],[`pistol_ammo`,4,.1]],storage:[[`water`,2,.35],[`canned_food`,2,.35],[`medkit`,1,.12],[`bandage`,2,.3],[`shotgun_shells`,4,.15]],locker:[[`bandage`,2,.4],[`pistol_ammo`,8,.12],[`money`,10,.25],[`note`,1,.2]],corpse:[[`bandage`,1,.25],[`painkillers`,1,.2],[`money`,8,.4],[`pistol_ammo`,3,.15],[`note`,1,.2]],safehouse:[[`water`,2,.8],[`canned_food`,1,.6],[`bandage`,2,.6],[`repair_kit`,1,.25]],ammo_cache:[[`pistol_ammo`,12,.7],[`shotgun_shells`,6,.5],[`rifle_ammo`,20,.3]]};function Nu(e,t,{min:n=1,max:r=3}={}){let i=Mu[e]||Mu.kitchen,a=Ml(t,n,r),o=[];for(let e=0;e<a;e++)for(let[e,n,r]of i)if(t()<r){let r=Math.max(1,Math.round(jl(t,n*.6,n*1.4)));o.push(ju(e,r));break}o.length||o.push(ju(`scrap`,1));let s=[];for(let e of o){let t=s.find(t=>t.id===e.id);t?t.qty+=e.qty:s.push({...e})}return s}function Pu(e){return ku[e]?.weight||.1}var X=Math.PI,Z=Math.PI/2;function Fu(e){if(!e)return null;let t=e.clone();return t.repeat.set(1,1),t.needsUpdate=!0,t}function Iu(e,t={}){let n={vertexColors:!0,roughness:.92,metalness:.02,envMapIntensity:.38,...t};return e&&(e.map&&(n.map=Fu(e.map)),e.normalMap&&(n.normalMap=Fu(e.normalMap)),e.roughnessMap&&(n.roughnessMap=Fu(e.roughnessMap))),new na(n)}function Q(e,t,n,r,i){let a=Math.cos(n),o=Math.sin(n);return[e+r*a+i*o,t-r*o+i*a]}function Lu(e,t,n,r,i,a,o,s,c){return e.plane(t,n,r,i,a,o,s,c)}var Ru=(()=>{let e=null;return()=>(e||=Vl(128,.05,.98),e)})(),zu=class{constructor(e,t={}){this.scene=e,this.quality=t.quality||`balanced`,this.root=new un,this.root.name=`city`,e.add(this.root),this.rng=q(20261031),this.batches=new Ll,this.colliders=[],this.doors=[],this.containers=[],this.interactRoots=[],this.flickerLights=[],this.streetLamps=[],this.glows=[],this.spawnPoints=[],this.safeZones=[],this.questPoints={},this.ambientEmitters=[],this.smoke=[],this.flames=[],this.pointLights=[],this.dust=null,this.focusRecord=null,this.doorSfx=null,this._tmpV=new H,this._ray=new fo,this.makeMaterials(),this.build()}makeMaterials(){let e=tu(),t=nu(),n=ru(),r=iu(),i=au(),a=ou(),o=su(),s=cu(),c=lu(`hospital`),l=lu(`apartment`),u=uu(),d=wu();this.mats={asphalt:Iu(e,{metalness:.04,roughness:.96,envMapIntensity:.42}),sidewalk:Iu(t,{roughness:.94,envMapIntensity:.32}),concrete:Iu(n,{roughness:.94,envMapIntensity:.3}),plaster:Iu(r,{roughness:.95,envMapIntensity:.28}),brick:Iu(i,{roughness:.96,envMapIntensity:.26}),wood:Iu(a,{roughness:.82,envMapIntensity:.3}),metal:Iu(o,{metalness:.55,roughness:.58,envMapIntensity:.7}),wallpaper:Iu(s,{roughness:.97,envMapIntensity:.2}),tileH:Iu(c,{roughness:.42,metalness:.04,envMapIntensity:.55}),tileA:Iu(l,{roughness:.72,envMapIntensity:.35}),carpet:Iu(u,{roughness:1,envMapIntensity:.15}),dirt:Iu(d,{roughness:1,envMapIntensity:.16}),fabric:new na({vertexColors:!0,roughness:.98,metalness:0,envMapIntensity:.18}),plastic:new na({vertexColors:!0,roughness:.52,metalness:.05,envMapIntensity:.4}),rubber:new na({vertexColors:!0,roughness:.9,metalness:0,envMapIntensity:.1}),paint:new na({vertexColors:!0,roughness:.7,metalness:.02,envMapIntensity:.3,transparent:!0,opacity:.72}),glass:new ra({vertexColors:!0,color:12371652,metalness:.35,roughness:.12,transparent:!0,opacity:.34,envMapIntensity:1.2,depthWrite:!1,side:2}),windowPane:Iu({map:fu(),normalMap:null,roughnessMap:null},{roughness:.16,metalness:.28,envMapIntensity:1.1,transparent:!1}),dark:new na({vertexColors:!0,color:16777215,roughness:.9,metalness:.1}),emissive:new Gr({vertexColors:!0,color:16777215}),shadow:new Gr({vertexColors:!0,map:Y(Ru()),transparent:!0,opacity:.58,depthWrite:!1,color:16777215,blending:1}),blood:new na({vertexColors:!0,map:gu(1),transparent:!0,opacity:.88,depthWrite:!1,roughness:.42,metalness:.05,polygonOffset:!0,polygonOffsetFactor:-2}),blood2:new na({vertexColors:!0,map:gu(2),transparent:!0,opacity:.75,depthWrite:!1,roughness:.5,polygonOffset:!0,polygonOffsetFactor:-2}),crack:new Gr({vertexColors:!0,map:Tu(),transparent:!0,opacity:.55,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),decalLeaves:new na({vertexColors:!0,map:Eu(`leaves`),transparent:!0,opacity:.9,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),decalTrash:new na({vertexColors:!0,map:Eu(`trash`),transparent:!0,opacity:.9,depthWrite:!1,roughness:1,polygonOffset:!0,polygonOffsetFactor:-2}),decalOil:new na({vertexColors:!0,map:Eu(`oil`),transparent:!0,opacity:.75,depthWrite:!1,roughness:.4,polygonOffset:!0,polygonOffsetFactor:-2}),puddle:new na({map:_u(),color:10134688,transparent:!0,opacity:.55,roughness:.06,metalness:.55,envMapIntensity:1.7,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),weeds:new na({map:vu(),transparent:!0,alphaTest:.32,side:2,vertexColors:!0,roughness:1,metalness:0,envMapIntensity:.2}),ivy:new na({map:yu(),transparent:!0,alphaTest:.3,side:2,vertexColors:!0,roughness:1,metalness:0,envMapIntensity:.2}),hazard:new na({vertexColors:!0,map:xu(),roughness:.8,metalness:.15,envMapIntensity:.4}),awning:new na({vertexColors:!0,map:Su(`#7b3f31`,`#cfc3a4`),roughness:.94,side:2}),awningGreen:new na({vertexColors:!0,map:Su(`#3d5a4a`,`#cfc3a4`),roughness:.94,side:2}),paper:new na({vertexColors:!0,map:bu(),roughness:1}),lightPool:new Gr({vertexColors:!0,map:Y(Bl()),transparent:!0,opacity:.3,depthWrite:!1,blending:2}),glassLit:[]};for(let e=1;e<=4;e++){let t=new Gr({map:du(e),vertexColors:!0,color:new W(1.2,1.02,.82),fog:!0});t.userData.baseColor=t.color.clone(),this.mats.glassLit.push(t)}this.litMaterials=this.mats.glassLit;let f=this.batches;for(let[e,t]of Object.entries(this.mats))t&&t.isMaterial&&f.use(e,t);for(let e=0;e<this.mats.glassLit.length;e++)f.use(`lit`+(e+1),this.mats.glassLit[e]);this.posters={missing:this.decalMaterial(mu(`missing`)),quarantine:this.decalMaterial(mu(`quarantine`)),safe:this.decalMaterial(mu(`help`))},this.graffitiMats=new Map}decalMaterial(e,{opacity:t=.92}={}){return new na({map:e,transparent:!0,opacity:t,depthWrite:!1,vertexColors:!0,roughness:.95,metalness:0,polygonOffset:!0,polygonOffsetFactor:-3,side:2})}addCollider(e,t,n,r,i=0,a=6,o=``){let s={minX:e,maxX:t,minZ:n,maxZ:r,y0:i,y1:a,tag:o,enabled:!0};return this.colliders.push(s),s}addColliderBox(e,t,n,r,i,a,o,s=0){if(s){let c=Math.abs(Math.cos(s)),l=Math.abs(Math.sin(s)),u=n*c+r*l,d=n*l+r*c;return this.addCollider(e-u/2,e+u/2,t-d/2,t+d/2,i,a,o)}return this.addCollider(e-n/2,e+n/2,t-r/2,t+r/2,i,a,o)}box(e,t,n,r,i,a,o,s,c={}){return this.batches.box(e,t,n,r,i,a+n/2,o,s,c)}wallX(e,t,n,r,i,a,o,{y0:s=0,collide:c=!0,uvScale:l=2.2}={}){let u=Math.abs(n-t),d=(t+n)/2;this.box(a,u,r,i,d,s,e,o,{uvScale:l}),c&&this.addCollider(Math.min(t,n),Math.max(t,n),e-i/2,e+i/2,s,s+r,`wall`)}wallZ(e,t,n,r,i,a,o,{y0:s=0,collide:c=!0,uvScale:l=2.2}={}){let u=Math.abs(n-t),d=(t+n)/2;this.box(a,i,r,u,e,s,d,o,{uvScale:l}),c&&this.addCollider(e-i/2,e+i/2,Math.min(t,n),Math.max(t,n),s,s+r,`wall`)}wallXGap(e,t,n,r,i,a,o,s,c,l={}){let u=Math.min(t,n),d=Math.max(t,n),f=J(r,u,d),p=J(i,u,d);f>u+.01&&this.wallX(e,u,f,a,o,s,c,l),p<d-.01&&this.wallX(e,p,d,a,o,s,c,l);let m=l.doorH??2.35;this.box(s,p-f,a-m,o,(f+p)/2,m,e,c,{uvScale:l.uvScale??2.2})}wallZGap(e,t,n,r,i,a,o,s,c,l={}){let u=Math.min(t,n),d=Math.max(t,n),f=J(r,u,d),p=J(i,u,d);f>u+.01&&this.wallZ(e,u,f,a,o,s,c,l),p<d-.01&&this.wallZ(e,p,d,a,o,s,c,l);let m=l.doorH??2.35;this.box(s,o,a-m,p-f,e,m,(f+p)/2,c,{uvScale:l.uvScale??2.2})}addWindow(e,t,n,r,i,a,o={}){let s=Math.cos(r),c=Math.sin(r),l=(r,i,a)=>[e+r*s+a*c,t+i,n-r*c+a*s],u=o.frame??`#8f8879`,d=o.lit??!1,f=o.broken??!1,p=o.boarded??!1,[m,h,g]=l(0,0,.035);this.batches.plane(d?`lit`+(o.litVar||1):`windowPane`,i,a,m,h,g,o.tint||`#ffffff`,{rotY:r});let[_,v,y]=l(0,0,.09);this.batches.box(`concrete`,i+.22,.1,.13,_,v+a/2+.02,y,u,{rotY:r,uvScale:1.4}),this.batches.box(`concrete`,i+.22,.1,.13,_,v-a/2-.02,y,u,{rotY:r,uvScale:1.4});let[b,x,S]=l(-i/2-.055,0,.09);this.batches.box(`concrete`,.11,a,.13,b,x,S,u,{rotY:r,uvScale:1.4});let[C,w,T]=l(i/2+.055,0,.09);this.batches.box(`concrete`,.11,a,.13,C,w,T,u,{rotY:r,uvScale:1.4});let[E,D,O]=l(0,0,.1);if(this.batches.box(`concrete`,i,.055,.09,E,D,O,u,{rotY:r}),this.batches.box(`concrete`,.05,a,.09,E,D,O,u,{rotY:r}),o.sill!==!1){let[e,t,n]=l(0,-a/2-.11,.17);this.batches.box(`concrete`,i+.4,.12,.28,e,t,n,o.sillColor||`#a79c88`,{rotY:r,uvScale:1.2})}if(p)for(let e=0;e<3;e++){let[t,n,o]=l(0,-a/2+a*(.25+e*.25),.17);this.batches.box(`wood`,i+.6,.22,.07,t,n,o,e===1?`#6e5940`:`#7d674b`,{rotY:r,rotZ:(e-1)*.06,uvScale:1.3})}else if(f){let[e,t,n]=l(0,0,.18);this.batches.plane(`crack`,i,a,e,t,n,`#ffffff`,{rotY:r})}if(o.shutter){let[e,t,n]=l(-i/2-.24,0,.14);this.batches.box(`wood`,i*.22,a+.12,.06,e,t,n,o.shutterColor||`#6d6250`,{rotY:r,uvScale:1.1});let[s,c,u]=l(i/2+.24,0,.14);this.batches.box(`wood`,i*.22,a+.12,.06,s,c,u,o.shutterColor||`#6d6250`,{rotY:r,uvScale:1.1})}}addWindowFloor(e,t,n,r,i,a,o){let s=q(o),c=s()<.31,l=s()<.22,u=!l&&s()<.14;this.addWindow(e,t,n,r,i,a,{lit:c,litVar:1+Math.floor(s()*4),broken:l,boarded:u,shutter:s()<.24,shutterColor:s()<.5?`#6d6250`:`#4e5f52`,frame:s()<.3?`#b4a58e`:`#8d8678`})}addWindowGrid(e,t,n,r,i,a,o,s){q(s);let c=r>0?0:X,l=Math.abs(t-e),u=Math.min(1.5,l*.12),d=(l-u*2)/Math.max(1,o-1);for(let r=0;r<a;r++)for(let a=0;a<o;a++){let o=Math.min(e,t)+u+d*a,l=i+r*3;this.addWindowFloor(o,l,n,c,1.28,1.72,s+r*131+a*17)}}addSign(e,t,n,r,i,a,o,s={}){let c=pu(e,{bg:s.bg??`#1b1c17`,fg:s.fg??`#e8e2d2`,accent:s.accent??`#c94f2d`,sub:s.sub??``,w:s.texW??512,h:s.texH??256,border:s.border??!0,size:s.size??96,font:s.font??`Barlow Condensed`,weight:s.weight??600,icon:s.icon??``,vertical:s.vertical??!1}),l=new na({map:c,roughness:.72,metalness:.08,envMapIntensity:.35,emissiveMap:c,emissive:new W(s.glow??`#2a1a0c`),emissiveIntensity:s.glowIntensity??.16,transparent:!1}),u=new ri(new Ui(a,o),l);return u.position.set(t,n,r),u.rotation.y=i,u.renderOrder=2,this.root.add(u),s.backing!==!1&&this.batches.box(`metal`,a+.12,o+.12,.06,t-Math.sin(i)*.04,n,r-Math.cos(i)*.04,`#2a2a26`,{rotY:i}),u}addPoster(e,t,n,r,i,a=1.05,o=1.48){let s=this.posters[e]||this.posters.missing,c=new ri(new Ui(a,o),s);return c.position.set(t,n,r),c.rotation.y=i,c.renderOrder=3,this.root.add(c),c}addGraffiti(e,t,n,r,i,a=3.2,o=1.6,s=`#a3442f`,c=1){let l=e+s+c,u=this.graffitiMats.get(l);u||(u=this.decalMaterial(hu(e,s,c),{opacity:.82}),this.graffitiMats.set(l,u));let d=new ri(new Ui(a,o),u);return d.position.set(t,n,r),d.rotation.y=i,d.renderOrder=3,this.root.add(d),d}addGroundDecal(e,t,n,r,i=0,a=.025,o=`#ffffff`){if(this.batches){this.batches.plane(e,r,r,t,a,n,o,{rotX:-Z,rotZ:i,uvScale:0});return}let s=this.mats[e];if(!s)return;let c=s.clone();c.vertexColors=!1,c.color=new W(o);let l=new ri(new Ui(r,r),c);l.rotation.set(-Z,0,i),l.position.set(t,a,n),l.renderOrder=1,this.root.add(l)}addBlobShadow(e,t,n,r,i=0,a=1){this.batches.plane(`shadow`,n,r,e,.012,t,new W(a,a,a),{rotX:-Z,rotY:i,uvScale:0})}addGlow(e,t,n,r,i=1.4,a=.5){this._glowMap||=Y(Bl());let o=new Rr(new wr({map:this._glowMap,color:new W(r),transparent:!0,opacity:a,blending:2,depthWrite:!1,fog:!0}));return o.position.set(e,t,n),o.scale.set(i,i,1),this.root.add(o),this.glows.push({sprite:o,base:a,seed:this.rng()*100}),o}build(){this.buildGround(),this.buildHeroBuildings(),this.buildFillerBuildings(),this.buildBackdrop(),this.buildStreetProps(),this.buildAtmosphere(),this.buildDecals(),this.batches.build(this.root,{shadows:!1}),this.batches=null,this.root.traverse(e=>{e.isMesh&&(e.matrixAutoUpdate=!1,e.updateMatrix())})}buildGround(){let e=this.batches;e.plane(`dirt`,260,260,0,-.06,0,`#c9c0ad`,{rotX:-Z,uvScale:9}),e.plane(`asphalt`,184,11,0,.008,0,`#bcbcb8`,{rotX:-Z,uvScale:4.2}),e.plane(`asphalt`,12,94,50,.009,-12,`#b6b6b3`,{rotX:-Z,uvScale:4.2}),e.plane(`sidewalk`,184,3.5,0,.02,-7.25,`#d4cbb8`,{rotX:-Z,uvScale:2.3}),e.plane(`sidewalk`,184,3.5,0,.02,7.25,`#cdc4b2`,{rotX:-Z,uvScale:2.3}),e.plane(`sidewalk`,3.2,94,45.5,.02,-12,`#cdc4b2`,{rotX:-Z,uvScale:2.3}),e.plane(`sidewalk`,3.2,94,54.5,.02,-12,`#cdc4b2`,{rotX:-Z,uvScale:2.3});for(let e of[-1,1]){let t=e*5.55;for(let e=0;e<22;e++){if(this.rng()<.08)continue;let n=-90+e*8.3;this.box(`concrete`,8.1,.17,.34,n,0,t,`#9b9688`,{uvScale:1.2})}}for(let e of[-1,1]){let t=50+e*6.1;for(let e=0;e<10;e++){let n=-56+e*8.2;this.box(`concrete`,.34,.17,8,t,0,n,`#948f82`,{uvScale:1.2})}}for(let t=-88;t<88;t+=7)this.rng()<.22||e.plane(`paint`,3.1,.12,t,.028,0,`#d6c99f`,{rotX:-Z});for(let t=-52;t<28;t+=7)this.rng()<.2||e.plane(`paint`,.12,3.1,50,.028,t,`#d6c99f`,{rotX:-Z});for(let t=0;t<7;t++)e.plane(`paint`,.5,3.6,5.6+t*.95,.029,0,`#d2c8ae`,{rotX:-Z});e.plane(`concrete`,6.2,16,-8.9,.015,-17,`#b5ae9e`,{rotX:-Z,uvScale:2.2}),e.plane(`concrete`,4.8,20,10.1,.015,-19,`#aea795`,{rotX:-Z,uvScale:2.2}),e.plane(`dirt`,16,16,63,.01,16,`#b2a68f`,{rotX:-Z,uvScale:4}),e.plane(`concrete`,8.2,18,21,.012,16,`#aaa492`,{rotX:-Z,uvScale:2.4}),e.plane(`dirt`,15,16,-18,.011,32,`#b6ab95`,{rotX:-Z,uvScale:5});for(let[t,n]of[[-12,2.3],[22.5,-1.4],[41,3.1],[-37,-3.4],[50,-24]])e.cylinder(`metal`,.46,.46,.04,16,t,.03,n,`#4b4a44`,{open:!1}),e.cylinder(`dark`,.31,.31,.045,12,t,.032,n,`#1c1c1a`);for(let t=0;t<9;t++){let n=-78+t*19;e.plane(`dark`,.72,.3,n,.033,5.1,`#0c0d0b`,{rotX:-Z})}for(let[e,t,n]of[[-2,3.1,3.6],[17,-3.9,2.7],[-26,-2,4.3],[36,3.8,2.2],[7.4,-6.9,2.1],[-45,2.8,3.1],[50,-6,3.8],[63,12,2.4]]){let r=new ri(new Ui(n,n*.72),this.mats.puddle);r.rotation.x=-Z,r.rotation.z=this.rng()*X,r.position.set(e,.035,t),r.renderOrder=1,this.root.add(r)}let t=[];for(let e=0;e<40;e++)t.push([jl(this.rng,-80,80),jl(this.rng,0,1)<.5?-5.35:5.35]);for(let e=0;e<14;e++)t.push([jl(this.rng,-84,84),-8.65]);for(let[n,r]of t){let t=jl(this.rng,.45,1.1),i=Nl(this.rng,[`#ffffff`,`#c8c6a0`,`#b7b58c`,`#d8d4b4`]);e.plane(`weeds`,t,t*.65,n,.28,r,i,{rotY:this.rng()*X,uvScale:0}),e.plane(`weeds`,t,t*.65,n,.28,r,i,{rotY:this.rng()*X+Z,uvScale:0})}this.addCollider(-96,-92,-60,60,0,20,`bounds`),this.addCollider(92,96,-60,60,0,20,`bounds`),this.addCollider(-96,96,-62,-58,0,20,`bounds`),this.addCollider(-96,96,58,62,0,20,`bounds`)}buildShell({cx:e,cz:t,w:n,d:r,h:i,facing:a=1,doorX:o,doorW:s=1.25,ceiling:c=3.08,floor:l=`wood`,wall:u=`wallpaper`,wallColor:d=`#b6ac96`,frontKey:f=`plaster`,frontColor:p=`#b4a892`,backKey:m=`plaster`,backColor:h=`#a79b87`,thickness:g=.34,doorLabel:_=`Door`,doorKind:v=`wood`,doorRotY:y=null,ceilColor:b=`#b0a89a`,roofColor:x=`#746c5c`,doorHeight:S=2.32}){let C=e-n/2,w=e+n/2,T=t-r/2,E=t+r/2,D=a>0?E:T,O=a>0?T:E,k=D-a*g/2,A=O+a*g/2,ee=C+g/2,j=w-g/2,te=a>0?0:X,M=d,ne=o-s/2,N=o+s/2;this.wallX(D-a*g/2,C,ne,i,g,f,p,{doorH:S}),this.wallX(D-a*g/2,N,w,i,g,f,p),this.box(f,s,i-S,g,o,S,D-a*g/2,p,{uvScale:2.2}),this.addCollider(ne,N,D-a*g/2-g/2,D-a*g/2+g/2,S,i,`wall`),this.box(`concrete`,.14,2.46,g+.12,ne-.02,0,D-a*g/2,`#a99b85`),this.box(`concrete`,.14,2.46,g+.12,N+.02,0,D-a*g/2,`#a99b85`),this.box(`concrete`,s+.18,.14,g+.12,o,S,D-a*g/2,`#a99b85`),this.wallZ(ee,T+g/2,E-g/2,i,g,f,p),this.wallZ(j,T+g/2,E-g/2,i,g,f,p),this.wallX(O+a*g/2,C,w,i,g,m,h),Lu(this.batches,l,n-g*2,r-g*2,e,.016,t,M,{rotX:-Z,uvScale:1.8}),Lu(this.batches,`plaster`,n-g*2,r-g*2,e,c,t,b,{rotX:Z,uvScale:2.5});for(let i=-1;i<=1;i++){let a=t+r*.27*i;this.box(`wood`,n-.7,.13,.16,e,c-.1,a,`#5c4d3b`,{uvScale:2})}this.box(`wood`,n-.7,.16,.06,e,0,D-a*.19,`#4a3c2d`,{uvScale:1.4}),this.box(`wood`,n-.7,.16,.06,e,0,O+a*.19,`#4a3c2d`,{uvScale:1.4}),this.box(`wood`,.06,.16,r-.7,ee+.16,0,t,`#4a3c2d`,{uvScale:1.4}),this.box(`wood`,.06,.16,r-.7,j-.16,0,t,`#4a3c2d`,{uvScale:1.4}),this.box(`dark`,n,.22,r,e,i-.1,t,`#3b3730`);for(let a of[-1,1])this.box(f,n,.52,.22,e,i,t+a*(r/2-.1),`#857b69`),this.box(f,.22,.52,r,e+a*(n/2-.1),i,t,`#857b69`);return this.addRoofDetails(e,t,n,r,i,this.rng),this.createDoor({x:o,z:D-a*.16,rotY:y??te,width:s,height:S,kind:v,label:_,opensIn:a>0?1:-1}),this.box(`metal`,.1,.16,.16,ne-.45,2.5,D+a*.1,`#3a3a34`),this.addGlow(ne-.45,2.45,D+a*.24,`#ffb56b`,.8,.32),this.addRoomLight(e+n*.18,c-.16,t+a*r*.18,`#ffcf96`,12,7.5,`bulb`,.55),{minX:C,maxX:w,minZ:T,maxZ:E,frontZ:D,backZ:O,innerFrontZ:k,innerBackZ:A,leftX:ee,rightX:j,ceiling:c,rotY:te,intColor:M}}wallXWithGaps(e,t,n,r,i,a,o,s,c={}){let l=Math.min(t,n),u=Math.max(t,n),d=s.map(e=>[Math.max(l,Math.min(e[0],e[1])),Math.min(u,Math.max(e[0],e[1]))]).sort((e,t)=>e[0]-t[0]),f=l;for(let[t,n]of d){t>f+.01&&this.wallX(e,f,t,r,i,a,o,c);let s=c.doorH??2.32;this.box(a,n-t,r-s,i,(t+n)/2,s,e,o,{uvScale:c.uvScale??2.2}),f=n}f<u-.01&&this.wallX(e,f,u,r,i,a,o,c)}wallZWithGaps(e,t,n,r,i,a,o,s,c={}){let l=Math.min(t,n),u=Math.max(t,n),d=s.map(e=>[Math.max(l,Math.min(e[0],e[1])),Math.min(u,Math.max(e[0],e[1]))]).sort((e,t)=>e[0]-t[0]),f=l;for(let[t,n]of d){t>f+.01&&this.wallZ(e,f,t,r,i,a,o,c);let s=c.doorH??2.32;this.box(a,i,r-s,n-t,e,s,(t+n)/2,o,{uvScale:c.uvScale??2.2}),f=n}f<u-.01&&this.wallZ(e,f,u,r,i,a,o,c)}createDoor({x:e,z:t,rotY:n=0,width:r=1.25,height:i=2.28,kind:a=`wood`,label:o=`Door`,opensIn:s=1,hingeLeft:c=!0,locked:l=!1}){let u=new un,d=(c?-1:1)*r/2,f=e+Math.cos(n)*d,p=t-Math.sin(n)*d;u.position.set(f,0,p),u.rotation.y=n,this.root.add(u);let m=a===`metal`?this.mats.metal.clone():a===`glass`?new ra({color:8624026,metalness:.4,roughness:.1,transparent:!0,opacity:.38,envMapIntensity:1.2,vertexColors:!0}):this.mats.wood.clone();m.vertexColors=!0;let h=new Ll;h.use(`m`,m);let g=r,_=(c?1:-1)*g/2,v=a===`metal`?`#6f746e`:a===`glass`?`#8ea1a2`:`#6b543c`;a===`glass`?(h.box(`m`,g,i,.06,_,i/2,0,`#8ea1a2`),h.box(`m`,g,.16,.11,_,i-.08,0,`#4d514b`),h.box(`m`,g,.16,.11,_,.1,0,`#4d514b`),h.box(`m`,.1,i,.11,_-g/2+.05,i/2,0,`#4d514b`),h.box(`m`,.1,i,.11,_+g/2-.05,i/2,0,`#4d514b`)):(h.box(`m`,g,i,.075,_,i/2,0,v,{uvScale:1.4}),h.box(`m`,g*.62,i*.28,.02,_,i*.72,.048,v,{uvScale:1.2}),h.box(`m`,g*.62,i*.28,.02,_,i*.32,.048,v,{uvScale:1.2}),h.box(`m`,.06,i,.085,_-g/2+.04,i/2,.005,`#4b3c2c`),h.box(`m`,.06,i,.085,_+g/2-.04,i/2,.005,`#4b3c2c`)),a===`metal`?h.box(`m`,.06,.36,.16,_+g*.36,1.05,.09,`#272925`):h.cylinder(`m`,.035,.035,.24,8,_+g*.36,1.02,.09,`#b3a275`,{rotX:Z}),h.box(`m`,.18,.12,.02,_,i*.82,.06,`#c2b28a`),h.build(u,{shadows:!1});let y={type:`door`,door:null,object:u,label:o,action:l?`LOCKED`:`OPEN`,locked:l};u.traverse(e=>{e.isMesh&&(e.userData.interact=y,e.castShadow=!1)});let b={group:u,baseAngle:n,angle:0,target:0,open:!1,locked:l,rec:y,label:o,width:r,height:i,rotY:n,hingeSign:c?1:-1,opensIn:s,kind:a,collider:this.addColliderBox(e,t,Math.abs(Math.cos(n))>.5?r:.18,Math.abs(Math.cos(n))>.5?.18:r,0,i,`door`)};return b.collider.door=b,y.door=b,this.doors.push(b),this.interactRoots.push(u),b}addRoomLight(e,t,n,r,i=12,a=8,o=`bulb`,s=0){let c=new Va(new W(r),i,a,2);return c.position.set(e,t,n),this.scene.add(c),this.pointLights.push(c),o===`tube`?(this.box(`metal`,1.2,.08,.16,e,t-.04,n,`#55574f`),this.box(`emissive`,1.1,.05,.1,e,t-.1,n,r)):(this.box(`metal`,.3,.06,.3,e,t+.08,n,`#3d3c35`),this.batches.cylinder(`emissive`,.06,.09,.14,10,e,t,n,r)),this.addGlow(e,t,n,r,o===`tube`?1.8:1.15,.36),this.batches.plane(`lightPool`,4.2,4.2,e,.03,n,r,{rotX:-Z}),s&&this.flickerLights.push({light:c,base:i,seed:this.rng()*100,flicker:s,tube:o===`tube`}),c}addRoofDetails(e,t,n,r,i,a){if(a()<.55){let o=e+(a()-.5)*n*.5,s=t+(a()-.5)*r*.5;this.batches.cylinder(`metal`,.62,.62,1.25,12,o,i+.65,s,`#56574f`),this.batches.cylinder(`metal`,.66,.66,.08,12,o,i+1.28,s,`#3f403a`);for(let e=0;e<4;e++)this.box(`metal`,.08,.55,.08,o+Math.cos(e*Z)*.4,i+.2,s+Math.sin(e*Z)*.4,`#3b3c36`)}if(a()<.6){let o=e+(a()-.5)*n*.7,s=t+(a()-.5)*r*.7;this.batches.cylinder(`metal`,.025,.045,2.6,5,o,i+1.3,s,`#5b5a51`);for(let e=0;e<3;e++)this.box(`metal`,.7,.02,.02,o,i+1.4+e*.35,s,`#5b5a51`,{rotY:a()*X})}if(a()<.6){let o=e+(a()-.5)*n*.5,s=t+(a()-.5)*r*.5;this.box(`metal`,.85,.55,.6,o,i+.28,s,`#6e6f67`),this.batches.cylinder(`dark`,.2,.2,.02,12,o+.42,i+.55,s,`#22231f`,{rotZ:Z})}if(a()<.35){let o=e+(a()-.5)*n*.6,s=t+(a()-.5)*r*.6;this.batches.cylinder(`metal`,.03,.03,.8,5,o,i+.4,s,`#5b5a51`);let c=new ri(new Gi(.42,10,6,0,X*2,0,.9),new na({color:12105128,roughness:.7,metalness:.3,side:2}));c.position.set(o,i+.85,s),c.rotation.set(-.65,a()*X,.2),this.root.add(c)}}containerMaterial(e=`wood`){let t=(e===`metal`?this.mats.metal:e===`appliance`?this.mats.plastic:this.mats.wood).clone();return t.vertexColors=!0,t.emissive=new W(0),t.emissiveIntensity=0,t}addContainer({type:e,name:t,x:n,z:r,y:i=.018,rotY:a=0,table:o=null,items:s=null,quest:c=null,collide:l=!0,label:u=null,action:d=`SEARCH`}){let f=new un;f.position.set(n,i,r),f.rotation.y=a,this.root.add(f);let p=[`fridge`,`washer`].includes(e)?`appliance`:[`med_cabinet`,`locker`,`toolbox`,`register`,`shelf`].includes(e)?`metal`:e===`corpse`?`fabric`:`wood`,m=this.containerMaterial(p),h=new Ll;h.use(`m`,m);let g=1,_=.5;if(e===`dresser`){g=1.02,_=.5,h.box(`m`,g,.94,_,0,.47,0,`#7a5f40`,{uvScale:1.1});for(let e=0;e<3;e++)h.box(`m`,g-.12,.23,.035,0,.21+e*.28,_/2+.015,e===1?`#86694a`:`#7f6345`,{uvScale:.9}),h.cylinder(`m`,.022,.022,.16,6,0,.21+e*.28,_/2+.06,`#b0a077`,{rotZ:Z});h.box(`m`,g-.1,.035,_-.08,0,.955,0,`#6b5237`),h.cylinder(`m`,.05,.06,.22,8,.3,1.05,.04,`#9aa982`),h.plane(`m`,.3,.4,-.25,.97,.12,`#c6bda7`,{rotX:-Z})}else if(e===`med_cabinet`)g=.74,_=.28,h.box(`m`,g,.92,_,0,.48,0,`#8c938c`,{uvScale:.9}),h.box(`m`,g-.08,.36,.02,0,.68,_/2+.012,`#9fa8a0`,{uvScale:.8}),h.box(`m`,g-.08,.3,.02,0,.3,_/2+.012,`#9fa8a0`,{uvScale:.8}),h.box(`m`,.03,.16,.04,.18,.68,_/2+.035,`#c6c8bc`),h.box(`m`,.03,.16,.04,.18,.3,_/2+.035,`#c6c8bc`),h.box(`m`,.26,.05,.015,0,.46,_/2+.03,`#b94332`),h.box(`m`,.08,.22,.015,0,.46,_/2+.031,`#b94332`);else if(e===`fridge`){g=.8,_=.7,h.box(`m`,g,1.82,_,0,.91,0,`#b7b6a8`,{uvScale:1.2}),h.box(`m`,g-.04,.62,.025,0,1.48,_/2+.015,`#c2c1b3`),h.box(`m`,g-.04,.95,.025,0,.6,_/2+.015,`#b0afa1`),h.box(`m`,.035,.5,.07,g/2-.12,1.48,_/2+.07,`#8d8c81`),h.box(`m`,.035,.6,.07,g/2-.12,.62,_/2+.07,`#8d8c81`),h.box(`m`,.2,.1,.01,-.15,1.15,_/2+.03,`#8f967d`);for(let e=0;e<7;e++)h.box(`m`,.08+this.rng()*.15,.02,.005,-.2+this.rng()*.4,.35+this.rng()*1.1,_/2+.032,`#6e5b45`)}else if(e===`shelf`){g=1.72,_=.48,h.box(`m`,.06,1.86,_,-g/2+.03,.93,0,`#6f7169`),h.box(`m`,.06,1.86,_,g/2-.03,.93,0,`#6f7169`);for(let e=0;e<4;e++)if(h.box(`m`,g,.05,_,0,.26+e*.52,0,`#7f8178`),e<3)for(let t=0;t<4;t++){let n=.14+this.rng()*.18,r=.12+this.rng()*.15;h.box(`m`,n,r,.16+this.rng()*.1,-g/2+.25+t*.37,.3+e*.52+r/2,.02,Nl(this.rng,[`#b8ad91`,`#8e9d8c`,`#a47b5a`,`#c2b6a0`]))}h.box(`m`,g-.1,.08,_-.04,0,2,0,`#66685f`)}else if(e===`crate`){g=.95,_=.64,h.box(`m`,g,.52,_,0,.28,0,`#7c5c3c`,{uvScale:.8});for(let e=0;e<5;e++)h.box(`m`,g+.04,.07,.03,0,.08+e*.1,_/2+.01,e%2?`#6b4e33`:`#8a6844`);h.box(`m`,g-.06,.05,_-.06,0,.55,0,`#8e6e49`),h.box(`m`,.16,.24,.025,.2,.28,_/2+.025,`#d0b787`)}else if(e===`locker`){g=.56,_=.5,h.box(`m`,g,1.88,_,0,.94,0,`#5e665f`,{uvScale:1}),h.box(`m`,g-.04,1.75,.03,0,.98,_/2+.015,`#69726a`);for(let e=0;e<4;e++)h.box(`m`,g-.14,.02,.01,0,1.62-e*.06,_/2+.035,`#333a35`);h.box(`m`,.04,.17,.05,.16,1,_/2+.04,`#b5b4a6`),h.box(`m`,.18,.05,.01,0,1.7,_/2+.04,`#a68c5f`)}else if(e===`toolbox`)g=.56,_=.34,h.box(`m`,g,.27,_,0,.135,0,`#8a3c2b`,{uvScale:.7}),h.box(`m`,g+.04,.06,_+.04,0,.31,0,`#792f22`),h.box(`m`,.16,.05,.04,0,.35,0,`#3e3b33`),h.box(`m`,.03,.08,.03,.2,.27,_/2+.02,`#3e3b33`);else if(e===`register`){g=.48,_=.42,h.box(`m`,g,.24,_,0,.12,0,`#4f5049`),h.box(`m`,.34,.18,.18,0,.33,-.02,`#70756f`),h.box(`m`,.24,.08,.02,0,.36,.08,`#232b23`);for(let e=0;e<5;e++)h.box(`m`,.055,.03,.03,-.16+e*.08,.25,.14,`#c2b99d`)}else if(e===`suitcase`){g=.7,_=.44,h.box(`m`,g,.16,_,0,.08,0,`#584d3c`),h.box(`m`,g-.08,.3,_-.05,0,.28,0,`#655742`),h.box(`m`,.2,.05,.05,0,.46,0,`#2f2b23`);for(let e=0;e<2;e++)h.box(`m`,.06,.06,.02,-.18+e*.36,.27,_/2+.01,`#a8916d`)}else if(e===`corpse`){g=.62,_=1.72;let e=Nl(this.rng,[`#5b5646`,`#6b4e3f`,`#4a5554`]);h.box(`m`,.48,.24,.72,0,.16,.18,e,{uvScale:.8}),h.box(`m`,.27,.25,.27,.02,.18,-.32,`#8a927d`),h.box(`m`,.38,.22,.48,0,.14,.78,`#4e4d44`),h.box(`m`,.15,.14,.6,-.34,.1,.16,e,{rotZ:.18}),h.box(`m`,.15,.14,.58,.36,.12,.08,e,{rotZ:-.3,rotY:.5}),h.box(`m`,.14,.13,.72,-.16,.09,1.02,`#4e4d44`,{rotY:.12}),h.box(`m`,.14,.13,.66,.18,.09,.95,`#4e4d44`,{rotY:-.2}),h.box(`m`,.21,.08,.04,.02,.2,-.46,`#3f4339`),this.addGroundDecal(`blood`,n,r,2.2,a+.4,.028)}else g=.84,_=.57,h.box(`m`,g,.86,_,0,.43,0,`#7d6850`,{uvScale:1}),h.box(`m`,g+.05,.05,_+.05,0,.89,0,`#403a30`),h.box(`m`,g/2-.05,.68,.03,-g/4,.44,_/2+.015,`#8b7357`),h.box(`m`,g/2-.05,.68,.03,g/4,.44,_/2+.015,`#8b7357`),h.box(`m`,.03,.16,.04,-.05,.55,_/2+.05,`#b0a077`),h.box(`m`,.03,.16,.04,.05,.55,_/2+.05,`#b0a077`);let v=h.build(f,{shadows:!1})[0];v&&(v.userData.containerOwn=!0);let y=s?s.map(e=>({...e})):Nu(o||e,this.rng,e===`corpse`?{min:1,max:2}:{min:1,max:3});c&&!y.some(e=>e.id===c)&&y.unshift(ju(c,1));let b={type:`container`,object:f,label:u||t,action:d,container:null};f.traverse(e=>{e.isMesh&&(e.userData.interact=b)}),this.interactRoots.push(f);let x={type:e,name:u||t,group:f,rec:b,loot:y,searched:!1,material:m,w:g,d:_,x:n,z:r,rotY:a,quest:c||null};return b.container=x,this.containers.push(x),l&&this.addColliderBox(n,r,g,_,0,e===`med_cabinet`?2.2:1.2,`container`,a),x}highlightContainer(e,t){if(!e)return;let n=e.material;n&&(n.emissive.set(t?`#6b4a1c`:`#000000`),n.emissiveIntensity=t?.75:0)}addTable(e,t,n,r,i,a=0,o=`#6b5238`,s={}){let c=this.batches,[l,u]=Q(e,t,a,0,0);c.box(`wood`,n,.09,r,l,i,u,o,{rotY:a,uvScale:1.2});let d=n/2-.12,f=r/2-.12;for(let[n,r]of[[-d,-f],[d,-f],[-d,f],[d,f]]){let[s,l]=Q(e,t,a,n,r);c.box(`wood`,.09,i,.09,s,i/2,l,o,{rotY:a,uvScale:.8})}if(s.clutter!==!1){let[o,s]=Q(e,t,a,jl(this.rng,-n*.25,n*.25),jl(this.rng,-r*.2,r*.2));c.cylinder(`plastic`,.035,.04,.16,6,o,i+.125,s,Nl(this.rng,[`#7d8d76`,`#8c7655`,`#b2a98f`]))}}addChair(e,t,n=0,r=`#5d4a33`){let i=this.batches,[a,o]=Q(e,t,n,0,0);i.box(`wood`,.42,.06,.42,a,.46,o,r,{rotY:n});let[s,c]=Q(e,t,n,0,-.19);i.box(`wood`,.42,.5,.06,s,.72,c,r,{rotY:n,rotX:-.1});for(let[a,o]of[[-.17,-.17],[.17,-.17],[-.17,.17],[.17,.17]]){let[s,c]=Q(e,t,n,a,o);i.box(`wood`,.045,.46,.045,s,.23,c,r,{rotY:n})}}addSofa(e,t,n,r=0,i=`#6a5d4a`,a=`#7b6d56`){let o=this.batches,[s,c]=Q(e,t,r,0,0);o.box(`fabric`,n,.4,.85,s,.24,c,i,{rotY:r,uvScale:1.4});let[l,u]=Q(e,t,r,0,-.33);o.box(`fabric`,n,.62,.18,l,.6,u,i,{rotY:r,rotX:.08,uvScale:1.2});for(let a of[-1,1]){let[s,c]=Q(e,t,r,a*(n/2-.08),0);o.box(`fabric`,.16,.56,.9,s,.38,c,i,{rotY:r,uvScale:1.2});let[l,u]=Q(e,t,r,a*(n/2-.1),-.36);o.box(`fabric`,.18,.68,.2,l,.65,u,i,{rotY:r,uvScale:1.1})}let d=Math.max(2,Math.round(n/.75));for(let s=0;s<d;s++){let[c,l]=Q(e,t,r,-n/2+.4+s*((n-.8)/Math.max(1,d-1)),.06);o.box(`fabric`,(n-.8)/d-.04,.13,.6,c,.49,l,s%2?a:i,{rotY:r,uvScale:1})}if(this.rng()<.5){let[n,i]=Q(e,t,r,.2,.1);o.box(`fabric`,.36,.36,.16,n,.68,i,Nl(this.rng,[`#8e7b5e`,`#7e8c7d`,`#9b8870`]),{rotY:r,rotY2:0,rotZ:.2})}}addBed(e,t,n=0,r=1.55,i=2.05,a=`#5f4c38`,o=`#a49b86`){let s=this.batches,[c,l]=Q(e,t,n,0,0);s.box(`wood`,r+.1,.22,i+.1,c,.22,l,a,{rotY:n,uvScale:1.3});for(let[a,o]of[[-r/2+.08,-i/2+.08],[r/2-.08,-i/2+.08],[-r/2+.08,i/2-.08],[r/2-.08,i/2-.08]]){let[r,i]=Q(e,t,n,a,o);s.box(`wood`,.12,.22,.12,r,.11,i,`#43372a`,{rotY:n})}s.box(`fabric`,r,.24,i,c,.45,l,`#bdb39c`,{rotY:n,uvScale:1.4});let[u,d]=Q(e,t,n,0,.12);s.box(`fabric`,r+.06,.08,i*.78,u,.6,d,o,{rotY:n,rotX:.03,uvScale:1.5});let[f,p]=Q(e,t,n,0,-i/2+.3);s.box(`fabric`,r*.62,.13,.42,f,.62,p,`#d3c9b2`,{rotY:n,rotX:-.08,uvScale:1.2});let[m,h]=Q(e,t,n,0,-i/2-.04);if(s.box(`wood`,r+.12,.85,.12,m,.65,h,a,{rotY:n,uvScale:1.3}),this.rng()<.7){let[a,o]=Q(e,t,n,r*.25,i*.23);s.box(`fabric`,.8,.06,i*.55,a,.66,o,Nl(this.rng,[`#6e5a48`,`#7b6f5a`,`#586459`]),{rotY:n,uvScale:1})}}addKitchen(e,t,n=0,r=3.2,i=`#7d705e`){let a=this.batches,[o,s]=Q(e,t,n,0,0);a.box(`wood`,r,.86,.62,o,.43,s,i,{rotY:n,uvScale:1.3}),a.box(`concrete`,r,.06,.66,o,.9,s,`#514b41`,{rotY:n,uvScale:1});let c=Math.max(2,Math.round(r/.65));for(let o=0;o<c;o++){let[s,l]=Q(e,t,n,-r/2+(o+.5)*(r/c),.315);a.box(`wood`,r/c-.06,.7,.03,s,.44,l,o%2?`#897962`:i,{rotY:n,uvScale:1.1}),a.box(`metal`,.16,.025,.035,s,.58,l+.03,`#b1a37f`,{rotY:n})}let[l,u]=Q(e,t,n,r*.16,0);a.box(`metal`,.55,.04,.38,l,.94,u,`#858a84`,{rotY:n});let[d,f]=Q(e,t,n,r*.16,-.18);a.cylinder(`metal`,.025,.025,.25,6,d,1.05,f,`#9ea39c`,{rotX:.3});let[p,m]=Q(e,t,n,-r*.28,0);a.box(`metal`,.6,.06,.54,p,.94,m,`#4d4e47`,{rotY:n});for(let i=0;i<4;i++){let[o,s]=Q(e,t,n,-r*.28+(i%2?.14:-.14),i<2?-.12:.12);a.cylinder(`dark`,.08,.09,.02,10,o,.98,s,`#25251f`,{rotY:n})}let[h,g]=Q(e,t,n,0,-.16);a.box(`wood`,r,.68,.35,h,1.95,g,i,{rotY:n,uvScale:1.2});for(let o=0;o<c;o++){let[s,l]=Q(e,t,n,-r/2+(o+.5)*(r/c),-.34);a.box(`wood`,r/c-.06,.6,.03,s,1.95,l,o%2?`#897962`:i,{rotY:n,uvScale:1})}a.cylinder(`plastic`,.05,.06,.17,6,...(()=>{let[r,i]=Q(e,t,n,-.1,.16);return[r,1.01,i]})(),`#8f8d79`,{}),a.plane(`paper`,.35,.5,...(()=>{let[i,a]=Q(e,t,n,r*.32,.1);return[i,.935,a]})(),`#d0c8b4`,{rotX:-Z})}addStaticShelf(e,t,n,r,i,a,o,s=!0){let c=this.batches,[l,u]=Q(e,t,n,0,0);for(let s of[-1,1]){let[l,u]=Q(e,t,n,s*r/2,0);c.box(`metal`,.05,i,a,l,i/2,u,o,{rotY:n})}let d=Math.max(2,Math.floor(i/.55));for(let i=0;i<d;i++){let[l,u]=Q(e,t,n,0,0);if(c.box(`metal`,r,.05,a,l,.3+i*.52,u,o,{rotY:n}),s&&i<d-1)for(let a=0;a<4;a++){let[o,s]=Q(e,t,n,-r/2+.25+a*(r-.5)/3,.02),l=.12+this.rng()*.16;c.box(`plastic`,l,.14+this.rng()*.12,.16,o,.3+i*.52+.1,s,Nl(this.rng,[`#b7ad94`,`#9fae9b`,`#b07b55`,`#c8bda3`]))}}}addTV(e,t,n=0,r=.9){let i=this.batches,[a,o]=Q(e,t,n,0,0);i.box(`plastic`,r,.52,.12,a,.86,o,`#2d2e2a`,{rotY:n}),i.box(`dark`,r-.1,.42,.02,a,.87,o+.07,`#090b0a`,{rotY:n}),i.box(`metal`,.6,.06,.35,a,.56,o+.05,`#4d4a41`,{rotY:n})}addGurney(e,t,n=0){let r=this.batches,[i,a]=Q(e,t,n,0,0);r.box(`metal`,.72,.08,1.9,i,.72,a,`#8e938b`,{rotY:n}),r.box(`fabric`,.66,.12,1.82,i,.82,a,`#b7b7a8`,{rotY:n,uvScale:1.4});for(let[i,a]of[[-.28,-.82],[.28,-.82],[-.28,.82],[.28,.82]]){let[o,s]=Q(e,t,n,i,a);r.cylinder(`metal`,.025,.025,.72,6,o,.36,s,`#72766e`)}for(let i of[-1,1]){let[a,o]=Q(e,t,n,i*.34,0);r.box(`metal`,.03,.03,1.5,a,1.05,o,`#7e827a`,{rotY:n});for(let a of[-.7,.7]){let[o,s]=Q(e,t,n,i*.34,a);r.box(`metal`,.03,.3,.03,o,.9,s,`#7e827a`,{rotY:n})}}}addHospitalBed(e,t,n=0){this.addGurney(e,t,n);let r=this.batches,[i,a]=Q(e,t,n,0,-1.02);r.box(`metal`,.72,.45,.05,i,.95,a,`#7c817a`,{rotY:n});let[o,s]=Q(e,t,n,.45,.85);r.cylinder(`metal`,.02,.02,1.6,6,o,.8,s,`#8a8e86`),r.box(`metal`,.22,.02,.22,o,1.6,s,`#8a8e86`)}addWheelchair(e,t,n=0){let r=this.batches,[i,a]=Q(e,t,n,0,0);r.box(`fabric`,.5,.08,.48,i,.52,a,`#3e4440`,{rotY:n});let[o,s]=Q(e,t,n,0,-.23);r.box(`fabric`,.46,.46,.06,o,.78,s,`#3e4440`,{rotY:n});for(let i of[-1,1]){let[a,o]=Q(e,t,n,i*.28,.02);r.cylinder(`dark`,.3,.3,.05,14,a,.32,o,`#1b1c19`,{rotX:Z}),r.cylinder(`metal`,.03,.03,.06,8,a,.32,o,`#8a8e86`,{rotX:Z});let[s,c]=Q(e,t,n,i*.24,.35);r.cylinder(`dark`,.09,.09,.04,10,s,.11,c,`#24251f`,{rotX:Z})}}addWasher(e,t,n=0,r=`#b3b4a4`){let i=this.batches,[a,o]=Q(e,t,n,0,0);i.box(`plastic`,.62,.92,.64,a,.46,o,r,{rotY:n,uvScale:1.1});let[s,c]=Q(e,t,n,0,.33);i.cylinder(`dark`,.2,.2,.04,16,s,.53,c,`#33352f`,{rotX:Z}),i.cylinder(`metal`,.15,.15,.02,16,s,.53,c+.01,`#5e6a64`,{rotX:Z}),i.box(`metal`,.45,.08,.03,s,.87,c,`#5c5f57`,{rotY:n});for(let r=0;r<4;r++)i.cylinder(`metal`,.018,.018,.04,6,...(()=>{let[i,a]=Q(e,t,n,-.18+r*.12,.335);return[i,.88,a]})(),`#44463f`,{rotX:Z})}addCot(e,t,n=0){let r=this.batches,[i,a]=Q(e,t,n,0,0);r.box(`metal`,.72,.12,1.9,i,.35,a,`#6c7068`,{rotY:n}),r.box(`fabric`,.7,.12,1.86,i,.46,a,`#8b8a78`,{rotY:n,uvScale:1.4});let[o,s]=Q(e,t,n,0,-.7);r.box(`fabric`,.5,.1,.3,o,.55,s,`#c2b9a2`,{rotY:n})}addRug(e,t,n,r,i=0,a=`#6b5541`){this.batches.plane(`fabric`,n,r,e,.032,t,a,{rotX:-Z,rotZ:i,uvScale:0})}addCeilingFan(e,t,n){this.batches.cylinder(`metal`,.05,.05,.3,6,e,t-.15,n,`#4f4f47`),this.batches.cylinder(`metal`,.22,.22,.06,10,e,t-.32,n,`#565850`);for(let r=0;r<4;r++){let i=r*Z+.2;this.batches.box(`wood`,.85,.02,.14,e+Math.cos(i)*.5,t-.34,n+Math.sin(i)*.5,`#6b5a43`,{rotY:-i})}}addClutter(e,t,n=0,r=6,i=1.2,a=0){let o=this.batches;for(let a=0;a<r;a++){let[r,a]=Q(e,t,n,this.rng()*i*2-i,this.rng()*i*2-i),s=this.rng();s<.28?o.plane(`paper`,.22+this.rng()*.2,.3+this.rng()*.2,r,.037,a,`#c9c1ad`,{rotX:-Z,rotZ:this.rng()*X}):s<.52?o.cylinder(`plastic`,.03,.04,.15,6,r,.08,a,Nl(this.rng,[`#8d9b88`,`#a58a58`,`#b6b0a0`])):s<.72?o.box(`fabric`,.18+this.rng()*.2,.05+this.rng()*.1,.2,r,.05,a,Nl(this.rng,[`#7a7464`,`#655d50`,`#8d8674`]),{rotY:this.rng()*X}):o.box(`wood`,.1+this.rng()*.2,.05,.08,r,.03,a,`#5b4c38`,{rotY:this.rng()*X})}}buildHeroBuildings(){this.buildPharmacy(),this.buildApartment(),this.buildMarket(),this.buildHospital(),this.buildTenement(),this.buildSafehouse()}buildPharmacy(){this.buildShell({cx:1,cz:-15.5,w:13.4,d:13,h:7.6,facing:1,doorX:3,doorW:1.25,ceiling:3.08,floor:`tileA`,wall:`wallpaper`,wallColor:`#b0a68f`,frontKey:`plaster`,frontColor:`#aea28c`,backKey:`brick`,backColor:`#9c8b78`,doorLabel:`Harbor Pharmacy`,ceilColor:`#b3aa9a`,roofColor:`#6e6556`});let e=-8.96;this.addWindow(-2.7,1.75,e,0,4,2.05,{lit:!0,litVar:2,frame:`#6e6555`,sill:!0,sillColor:`#8e816c`}),this.addWindow(5.5,1.75,e,0,2.7,2.05,{lit:!1,broken:!0,frame:`#6e6555`,sill:!0,sillColor:`#8e816c`}),this.addWindowGrid(-5.5,7.5,e,1,4.55,1,3,731),this.batches.box(`awning`,4.6,.09,1.6,-2.6,3.24,-8.22,`#cfc4aa`,{rotX:-.14,rotY:0}),this.batches.box(`awning`,3.2,.09,1.6,5.6,3.24,-8.22,`#cfc4aa`,{rotX:-.14,rotY:0});for(let e=0;e<14;e++)this.batches.box(`awning`,.3,.22,.06,-4.7+e*.68,3.05,-7.44,`#bfb49b`);this.addSign(`HARBOR PHARMACY`,1.6,4,-8.91,0,4.5,.86,{bg:`#e0d8c2`,fg:`#234333`,accent:`#2f6b4c`,sub:`OPEN 24 HOURS · EST. 1998`,size:82,texH:300,glow:`#243f2c`,glowIntensity:.1}),this.addSign(`PHARMACY`,7.98,2.55,-9.75,Z,.62,2.2,{bg:`#dfd7c1`,fg:`#1e3f30`,accent:`#2f6b4c`,vertical:!0,texW:256,texH:512,size:86,border:!1,backing:!1}),this.box(`metal`,.05,2.4,.64,7.78,2.3,-9.75,`#3b3d36`),this.box(`emissive`,.5,.13,.06,-2.4,4.95,-8.94,`#65c98e`),this.box(`emissive`,.13,.5,.06,-2.4,4.95,-8.94,`#65c98e`),this.addPoster(`missing`,6.9,1.8,-8.93,0,.82,1.16),this.addPoster(`quarantine`,-5.15,1.95,-8.93,0,.9,1.25),this.addGraffiti(`NO CURE`,-9,2.5,-16.2,Z,3.4,1.7,`#7d3a2c`,2),this.addGraffiti(`THEY HEAR YOU`,10.3,3.4,-14,-Z,3,1.5,`#6d382f`,5),this.addGraffiti(`DEAD INSIDE`,-6.45,2.2,-18.5,-Z,3,1.5,`#8c3a2b`,8);for(let e=0;e<2;e++)this.batches.box(`hazard`,1.55,.18,.015,3,1.25+e*.9,-8.82,`#ffffff`,{rotZ:e?-.22:.22});this.wallXGap(-17.75,-5.25,7.25,.7,2,3,.2,`wallpaper`,`#b9ad95`),this.box(`wood`,.1,2.2,.12,.7,0,-17.75,`#554534`),this.box(`wood`,.1,2.2,.12,2,0,-17.75,`#554534`),this.addSign(`STAFF ONLY`,1.35,2.6,-17.63,0,1,.26,{bg:`#342e26`,fg:`#d5c8ad`,accent:`#8a5a3a`,border:!1,size:86,texH:160}),this.addStaticShelf(-4.6,-12.5,Z,2.6,2.25,.55,`#5f6159`),this.addStaticShelf(-4.6,-15.3,Z,2.3,2.25,.55,`#585a53`),this.addStaticShelf(6.75,-12.4,-Z,2.4,2.1,.5,`#5f6159`),this.addContainer({type:`shelf`,name:`Pharmacy Shelves`,label:`Pharmacy Shelves`,x:6.6,z:-15.4,rotY:-Z,table:`pharmacy_shelf`}),this.addContainer({type:`med_cabinet`,name:`Medicine Cabinet`,label:`Medicine Cabinet`,x:-4.98,z:-13.4,rotY:Z,y:1.22,collide:!1,table:`med_cabinet`}),this.box(`wood`,5.2,1.02,.75,1,0,-15.9,`#6f5b42`,{uvScale:1.3}),this.box(`concrete`,5.3,.06,.82,1,1.02,-15.9,`#4c463b`),this.box(`glass`,5,.55,.03,1,1.3,-15.55,`#aabdb8`,{}),this.addContainer({type:`register`,name:`Cash Register`,label:`Cash Register`,x:2.5,z:-15.85,y:1.03,rotY:0,collide:!1,table:`register`}),this.addClutter(1,-14.9,0,7,1.6),this.addContainer({type:`crate`,name:`Delivery Crate`,label:`Delivery Crate`,x:5.9,z:-20.5,rotY:.2,table:`storage`,quest:`antibiotics`,items:[ju(`antibiotics`,1),ju(`medkit`,1),ju(`bandage`,2)]}),this.addStaticShelf(-3.6,-21,0,2.8,1.9,.5,`#585a53`),this.addContainer({type:`suitcase`,name:`Abandoned Suitcase`,label:`Abandoned Suitcase`,x:.3,z:-20.3,rotY:.6,table:`storage`}),this.addContainer({type:`corpse`,name:`Pharmacist`,label:`Body of the Pharmacist`,x:-2.9,z:-19.8,rotY:1.2,table:`corpse`}),this.addGroundDecal(`blood2`,-1.4,-18.6,3.2,.8,.03),this.addGroundDecal(`blood`,4.4,-19.6,1.8,2.1,.03),this.addRoomLight(-1.2,2.85,-20.3,`#dfe4cf`,8,6,`tube`,.75),this.addGlow(-2.4,4.95,-8.9,`#65c98e`,1,.35),this.questPoints.pharmacy=new H(3,1.6,-9),this.spawnPoints.push({x:.5,z:-13.8,type:`walker`,rot:1.9}),this.spawnPoints.push({x:5,z:-19.6,type:`infected`,rot:2.7}),this.ambientEmitters.push({type:`buzz`,x:1,z:-15})}buildApartment(){this.buildShell({cx:-6,cz:17,w:16,d:16,h:10.8,facing:-1,doorX:-7,doorW:1.3,ceiling:3.05,floor:`wood`,wall:`wallpaper`,wallColor:`#b5a892`,frontKey:`plaster`,frontColor:`#ad9d84`,backKey:`brick`,backColor:`#95816d`,doorLabel:`Apartment 2B`,ceilColor:`#b4aa98`,roofColor:`#6e6354`});let e=8.96;this.addWindow(-11.6,1.85,e,X,1.7,1.7,{lit:!1,frame:`#8e8371`,broken:!0}),this.addWindow(0,1.85,e,X,1.7,1.7,{lit:!0,litVar:1,frame:`#8e8371`}),this.addWindowGrid(-13.2,1.2,e,-1,4.65,2,4,1201),this.addBalcony(-10.5,4.2,8.35,3.1,1.25,X),this.addBalcony(-1.2,7.3,8.35,3.1,1.25,X),this.addFireEscape(-3.8,8.95,7.8),this.addSign(`APARTMENTS`,-7,3.6,8.9,X,2,.4,{bg:`#3d3c33`,fg:`#c9c0a9`,accent:`#8c7b60`,size:92,texH:180,border:!1}),this.addPoster(`missing`,-4.4,1.9,8.92,X,.78,1.1),this.addGraffiti(`HELP US`,3.7,2.7,13.5,-Z,3.2,1.6,`#743429`,12),this.addGraffiti(`2B`,-14.05,2.5,12,Z,1,.7,`#9d3c2b`,14),this.addIvyWall(2.05,2.6,16.5,-Z,2.4,3.8,3),this.addAC(2.1,4.9,14.2,-Z),this.addPipes(2.12,12.1,20.5,Z),this.wallXWithGaps(15.4,-13.5,1.5,3,.2,`wallpaper`,`#a99d88`,[[-9.4,-8],[-3.5,-2.1],[.2,1.3]]),this.wallZ(-6,15.4,24.65,3,.2,`wallpaper`,`#a99d88`),this.wallZ(-1.5,15.4,24.65,3,.2,`wallpaper`,`#a99d88`),this.box(`wood`,.09,2.2,.1,-9.4,0,15.4,`#4d3d2d`),this.box(`wood`,.09,2.2,.1,-8,0,15.4,`#4d3d2d`),this.addRug(-8.4,12.6,4.6,3.4,0,`#6b5541`),this.addSofa(-9.8,13.9,2.7,X,`#6d5e49`,`#7e6c53`),this.addTable(-8.2,11.6,1.35,.72,.46,0,`#604b34`),this.addTV(-8.3,14.6,0,1),this.addChair(-6.6,11.8,-.6),this.addStaticShelf(-13.25,12.3,Z,2.2,1.9,.38,`#5e5140`,!0),this.addCeilingFan(-8,3,12.2),this.addKitchen(-2.7,9.8,0,3.3,`#7f715d`),this.addContainer({type:`fridge`,name:`Refrigerator`,label:`Refrigerator`,x:.6,z:13.7,rotY:-Z,table:`fridge`}),this.addContainer({type:`kitchen_cabinet`,name:`Kitchen Drawers`,label:`Kitchen Drawers`,x:.7,z:11.6,rotY:-Z,table:`kitchen`}),this.addTable(-1,12.6,1.1,.75,.75,0,`#5d4934`),this.addChair(-1,13.4,X),this.addClutter(-2,11.2,0,5,.8),this.addBed(-10.6,20.4,0,1.55,2.05,`#5a4732`,`#94896f`),this.addContainer({type:`wardrobe`,name:`Wardrobe`,label:`Wardrobe`,x:-7.4,z:23.9,rotY:0,table:`wardrobe`}),this.addContainer({type:`nightstand`,name:`Nightstand`,label:`Nightstand`,x:-12.2,z:19,rotY:Z,table:`nightstand`}),this.addContainer({type:`dresser`,name:`Dresser`,label:`Dresser`,x:-13.1,z:22.4,rotY:-Z,table:`nightstand`}),this.addTable(-10.4,17,.9,.45,.48,0,`#5e4a34`),this.addChair(-10.4,17.7,X),this.addClutter(-9.2,21.8,0,4,.7),this.addStaticShelf(-5.3,20.5,Z,1.2,1.6,.3,`#6b6d64`,!1),this.box(`plastic`,1.5,.6,.75,-5.4,0,22.7,`#b9b6a4`,{uvScale:1.2}),this.box(`plastic`,.5,.35,.42,-4.9,.65,21.9,`#c1bfb0`),this.addContainer({type:`med_cabinet`,name:`Bathroom Cabinet`,label:`Bathroom Cabinet`,x:-6.25,z:19.1,y:1.2,rotY:Z,collide:!1,table:`nightstand`}),this.addContainer({type:`toolbox`,name:`Toolbox`,label:`Toolbox`,x:.1,z:22.7,rotY:-.4,table:`toolbox`}),this.addStaticShelf(.9,19.2,-Z,1.5,1.9,.35,`#5f5142`,!0),this.addClutter(.4,20.5,0,5,.6),this.addGroundDecal(`blood`,-5.2,18.9,1.9,.4,.03),this.addPoster(`missing`,-8.85,1.7,15.17,0,.7,1),this.spawnPoints.push({x:-2.2,z:12.6,type:`walker`,rot:2.4}),this.spawnPoints.push({x:-10.5,z:21.5,type:`infected`,rot:.7}),this.ambientEmitters.push({type:`drip`,x:-5,z:20})}buildMarket(){this.buildShell({cx:12,cz:14.5,w:12,d:11,h:6.4,facing:-1,doorX:10.5,doorW:1.35,ceiling:3.02,floor:`tileA`,wall:`plaster`,wallColor:`#9b9b82`,frontKey:`brick`,frontColor:`#9d8a74`,backKey:`brick`,backColor:`#8f7c68`,doorLabel:`Harbor Market`,ceilColor:`#a8a695`,roofColor:`#675f51`}),this.addWindow(7.4,1.8,8.96,X,2.1,1.9,{lit:!0,litVar:3,frame:`#7c6f5b`}),this.addWindow(15.4,1.8,8.96,X,2.4,1.9,{lit:!1,boarded:!0,frame:`#7c6f5b`}),this.addWindowGrid(6.6,17.4,8.96,-1,4.2,0,3,44),this.addSign(`HARBOR MARKET`,12,3.45,8.9,X,3.6,.6,{bg:`#d5c6a8`,fg:`#4b3c26`,accent:`#9b3e2d`,sub:`GROCERY · WATER · SUPPLIES`,size:78,texH:260,glow:`#453116`,glowIntensity:.1}),this.batches.box(`awningGreen`,5.2,.08,1.4,8.8,3.02,8.3,`#d2c8ae`,{rotX:.12});for(let e=0;e<12;e++)this.batches.box(`awningGreen`,.36,.2,.05,6.5+e*.42,2.88,7.65,`#c8bda3`);this.addPoster(`quarantine`,17.3,1.8,8.9,X,.85,1.2),this.addGraffiti(`FOOD`,18.05,2.1,12.5,-Z,2,1.1,`#a76b2f`,17),this.addGraffiti(`WE ARE STILL HERE`,5.95,3.3,12.5,Z,3,1.5,`#7b3a2d`,19),this.wallXGap(17.4,6.5,17.5,11.6,13,3,.2,`plaster`,`#99957f`),this.box(`wood`,.12,2.2,.12,11.6,0,17.4,`#514331`),this.addSign(`STOCKROOM`,12.3,2.55,17.29,X,1.2,.26,{bg:`#38342a`,fg:`#c9bea7`,accent:`#7c5b3b`,border:!1,size:86,texH:160}),this.addStaticShelf(8,12,0,4.2,1.9,.45,`#6d6f65`,!0),this.addStaticShelf(13.4,12,0,4.2,1.9,.45,`#66685e`,!0),this.addStaticShelf(6.9,15.6,Z,3.2,1.8,.4,`#6d6f65`,!0),this.addContainer({type:`shelf`,name:`Market Shelves`,label:`Market Shelves`,x:15.8,z:14.8,rotY:-Z,table:`market_shelf`}),this.addContainer({type:`fridge`,name:`Display Fridge`,label:`Display Fridge`,x:14.9,z:10,rotY:X,table:`fridge`}),this.box(`wood`,4,1,.7,9.5,0,16.35,`#675339`,{uvScale:1.2}),this.box(`concrete`,4.1,.05,.76,9.5,1,16.35,`#494337`),this.addContainer({type:`register`,name:`Cash Register`,label:`Cash Register`,x:10.2,z:16.3,y:1.01,rotY:X,collide:!1,table:`register`}),this.addContainer({type:`crate`,name:`Supply Crate`,label:`Supply Crate`,x:15.9,z:18.8,rotY:.3,table:`storage`}),this.addContainer({type:`suitcase`,name:`Suitcase`,label:`Old Suitcase`,x:8.1,z:19,rotY:.8,table:`storage`}),this.addStaticShelf(7.1,18.8,0,1.3,1.5,.3,`#6c6e64`,!1),this.addClutter(9.2,13.6,0,9,1.8),this.addClutter(13,18.6,0,5,1),this.addGroundDecal(`blood2`,8,15,2,.8,.03),this.spawnPoints.push({x:13.2,z:15,type:`walker`,rot:3.4}),this.ambientEmitters.push({type:`buzz`,x:12,z:14})}buildHospital(){this.buildShell({cx:27,cz:-21.5,w:29,d:25,h:14.8,facing:1,doorX:27,doorW:3,ceiling:3.42,floor:`tileH`,wall:`plaster`,wallColor:`#b4b8a8`,frontKey:`concrete`,frontColor:`#b9b5a6`,backKey:`concrete`,backColor:`#aaa697`,doorLabel:`Harbor General — Main Entrance`,doorKind:`glass`,ceilColor:`#b8bbad`,roofColor:`#6b6a5e`,doorHeight:2.55});let e=-8.95;this.addWindowGrid(13.6,40.4,e,1,5,3,8,3301);for(let t of[17.4,37])this.addWindow(t,1.95,e,0,3.4,2.35,{lit:t<20,litVar:4,frame:`#8e9288`});this.batches.box(`concrete`,12.5,.28,3.4,27,3.85,-7.3,`#8c887b`,{uvScale:2}),this.box(`concrete`,.45,3.7,.45,22.4,0,-6.15,`#848073`),this.box(`concrete`,.45,3.7,.45,31.6,0,-6.15,`#848073`),this.box(`concrete`,.36,.5,2.9,22.4,3.35,-7.3,`#7f7b6e`),this.box(`concrete`,.36,.5,2.9,31.6,3.35,-7.3,`#7f7b6e`),this.addSign(`HARBOR GENERAL`,27,4.75,-8.9,0,7.2,1,{bg:`#d4d3c8`,fg:`#3c4a46`,accent:`#a63c32`,sub:`EMERGENCY · SURGERY · PHARMACY`,size:102,texH:300,glow:`#36413d`,glowIntensity:.12}),this.box(`emissive`,1.2,.3,.07,33.2,4.6,-8.85,`#c34736`),this.box(`emissive`,.3,1.2,.07,33.2,4.6,-8.85,`#c34736`),this.batches.box(`hazard`,7.5,.2,.02,20,3.1,-8.79,`#ffffff`,{rotZ:.03}),this.addPoster(`quarantine`,15.1,2,-8.9,0,1,1.4),this.addPoster(`missing`,39,2,-8.9,0,.86,1.2),this.addGraffiti(`NO ENTRY`,12.4,3.2,-17,Z,3.6,1.8,`#7b2f26`,21),this.addGraffiti(`THEY ARE INSIDE`,41.55,1.8,-14,-Z,3,1.5,`#752f26`,23),this.addGlow(27,3.6,-6.9,`#ffb46c`,2.2,.3),this.wallXWithGaps(-19.6,13.4,40.6,3.3,.22,`plaster`,`#a9ad9f`,[[16.2,17.7],[25.2,26.7],[34,35.5]]),this.wallZ(21.2,-33.4,-19.6,3.3,.22,`plaster`,`#a9ad9f`),this.wallZ(31.8,-33.4,-19.6,3.3,.22,`plaster`,`#a9ad9f`);for(let[e,t]of[[16.95,`SUPPLY`],[25.95,`SURGERY`],[34.75,`WARD`]])this.addSign(t,e,2.6,-19.45,0,1.35,.28,{bg:`#383c36`,fg:`#ced1c2`,accent:`#8b9a7c`,size:84,texH:150,border:!1});this.box(`wood`,7.2,1.05,1,22.4,0,-12.2,`#635545`,{uvScale:1.3}),this.box(`concrete`,7.3,.06,1.08,22.4,1.05,-12.2,`#4a463d`),this.box(`wood`,1.2,1.05,3.4,18.9,0,-13.6,`#5d5041`,{uvScale:1.2}),this.addContainer({type:`register`,name:`Reception Drawer`,label:`Reception Desk`,x:21,z:-12.2,y:1.06,rotY:0,collide:!1,table:`register`}),this.addContainer({type:`dresser`,name:`Reception Files`,label:`Reception Files`,x:24.7,z:-12.8,rotY:.2,table:`nightstand`}),this.addSign(`HARBOR GENERAL`,27,2.65,-19.56,0,5.4,.42,{bg:`#b8b9ac`,fg:`#45504a`,accent:`#944137`,size:88,texH:160,border:!1});for(let e=0;e<7;e++){let t=15.3+e%4*1,n=-15.8-Math.floor(e/4)*1.15;this.addChair(t,n,Z,`#4c5b52`)}this.addWheelchair(37.7,-13.5,-.7),this.addWheelchair(36.5,-14.8,-2.2),this.addStaticShelf(39.9,-17.1,Z,3.2,1.7,.35,`#7b7f74`,!0),this.addClutter(29,-13.5,0,10,2.2),this.addClutter(36,-17,0,5,1),this.addGroundDecal(`blood`,25.3,-14.1,3.2,1.5,.03),this.addGroundDecal(`blood2`,33.7,-21,2.4,.3,.03),this.addGroundDecal(`blood2`,17,-22,2.8,2,.03),this.addPoster(`help`,14,1.7,-18.5,Z,.8,1.1),this.addStaticShelf(14.2,-24.5,Z,4.2,2.1,.45,`#6c6f66`,!0),this.addStaticShelf(14.2,-29.3,Z,3.6,2.1,.45,`#666960`,!0),this.addContainer({type:`med_cabinet`,name:`Supply Cabinet`,label:`Supply Cabinet`,x:15,z:-31.9,y:1.15,rotY:0,collide:!1,table:`hospital_cabinet`}),this.addContainer({type:`crate`,name:`Medical Crate`,label:`Medical Crate`,x:18.5,z:-31.7,rotY:.3,table:`storage`}),this.addContainer({type:`locker`,name:`Medicine Locker`,label:`Medicine Locker`,x:20.3,z:-30.5,rotY:-Z,table:`locker`}),this.addContainer({type:`corpse`,name:`Nurse`,label:`Body of a Nurse`,x:17,z:-27.4,rotY:1.1,table:`corpse`}),this.addGurney(25.7,-26,0),this.addGurney(29.4,-26.2,.2),this.box(`metal`,1.8,.05,.06,26.2,3,-26,`#7f837b`),this.box(`emissive`,1.5,.05,.35,26.2,2.96,-26,`#cfe0d4`),this.addContainer({type:`med_cabinet`,name:`Surgical Cabinet`,label:`Surgical Cabinet`,x:30.7,z:-23,y:1.22,rotY:-Z,collide:!1,table:`hospital_cabinet`}),this.addContainer({type:`toolbox`,name:`Surgical Tray`,label:`Surgical Tray`,x:24,z:-29.8,rotY:.6,table:`toolbox`}),this.addStaticShelf(30.9,-30.2,-Z,2.8,1.8,.45,`#74776e`,!0),this.addClutter(27,-28.8,0,8,1.5);for(let e=0;e<3;e++)this.addHospitalBed(34+e%2*4,-23-Math.floor(e/2)*4,Z);this.addHospitalBed(37.5,-30.5,Z),this.addContainer({type:`med_cabinet`,name:`Ward Cabinet`,label:`Ward Cabinet`,x:40.2,z:-25,y:1.2,rotY:-Z,collide:!1,table:`hospital_cabinet`}),this.addContainer({type:`suitcase`,name:`Patient Bag`,label:`Patient Bag`,x:40,z:-31.5,rotY:.4,table:`nightstand`}),this.addContainer({type:`corpse`,name:`Patient`,label:`Body of a Patient`,x:33.4,z:-32.2,rotY:2.5,table:`corpse`}),this.addStaticShelf(32.6,-32.9,0,3,1.7,.34,`#73766d`,!0),this.addRoomLight(16.6,2.95,-27,`#d6e2d2`,11,8,`tube`,.62),this.addRoomLight(34.5,2.9,-26.5,`#ff8a6a`,8,7,`bulb`,.85),this.addGlow(27,2.4,-17.5,`#a7c4a4`,1.4,.24),this.ambientEmitters.push({type:`hospital`,x:27,z:-16},{type:`buzz`,x:16,z:-27}),this.questPoints.hospital=new H(27,1.6,-9),this.spawnPoints.push({x:19,z:-16,type:`walker`,rot:.4}),this.spawnPoints.push({x:27,z:-24,type:`infected`,rot:2.6}),this.spawnPoints.push({x:37,z:-29,type:`walker`,rot:1.7})}buildTenement(){this.buildShell({cx:-23,cz:-17,w:22,d:16,h:10.2,facing:1,doorX:-25,doorW:1.3,ceiling:3.02,floor:`wood`,wall:`wallpaper`,wallColor:`#aa9c85`,frontKey:`brick`,frontColor:`#9a8570`,backKey:`brick`,backColor:`#8d7965`,doorLabel:`Row House 14`,ceilColor:`#ac9f8c`,roofColor:`#65594b`});let e=-8.96;this.addWindow(-31.1,1.85,e,0,1.6,1.7,{broken:!0,frame:`#8f826f`}),this.addWindow(-15.3,1.85,e,0,1.6,1.7,{lit:!0,litVar:2,frame:`#8f826f`}),this.addWindowGrid(-32.5,-13.5,e,1,4.55,2,6,8801),this.addBalcony(-29,4.2,-8.35,3.2,1.2,0),this.addBalcony(-18,7.25,-8.35,3.2,1.2,0),this.addFireEscape(-21.3,-8.9,7.7),this.addSign(`ROWHOUSES 12-18`,-23,3.5,-8.92,0,2.6,.44,{bg:`#3a372f`,fg:`#c9c0aa`,accent:`#806d55`,size:72,texH:150,border:!1}),this.addGraffiti(`DEAD INSIDE`,-15,2.4,-8.93,0,3.2,1.6,`#80352a`,26),this.addGraffiti(`ROOM 14`,-12.1,2.6,-15,-Z,2.2,1.1,`#7a6b4b`,28),this.addPoster(`missing`,-17.7,1.9,e,0,.8,1.14),this.addAC(-12,4.8,-14.5,-Z),this.addPipes(-12,-22.8,-10.6,-Z),this.wallXWithGaps(-16.5,-32.4,-13.6,3,.2,`wallpaper`,`#a3957f`,[[-25.2,-23.7],[-18.2,-16.8]]),this.wallZ(-23,-24.6,-16.5,3,.2,`wallpaper`,`#a3957f`),this.box(`wood`,.1,2.2,.12,-25.2,0,-16.5,`#4c3c2c`),this.box(`wood`,.1,2.2,.12,-23.7,0,-16.5,`#4c3c2c`),this.addKitchen(-30.9,-10,0,3.4,`#776b57`),this.addContainer({type:`fridge`,name:`Old Fridge`,label:`Old Fridge`,x:-31,z:-12.6,rotY:Z,table:`fridge`}),this.addContainer({type:`kitchen_cabinet`,name:`Kitchen Drawers`,label:`Kitchen Drawers`,x:-27.9,z:-9.95,rotY:0,table:`kitchen`}),this.addTable(-27,-12.4,1.2,.8,.74,0,`#5a4732`),this.addChair(-27,-13.2,X),this.addChair(-26,-11.6,-1.4),this.addSofa(-20.3,-13.5,2.5,0,`#5e5c49`,`#726f58`),this.addTable(-20.5,-11,1.2,.65,.44,0,`#5a4632`),this.addTV(-20.5,-9.75,0,.85),this.addRug(-20.4,-12.2,3.4,2.5,0,`#665441`),this.addStaticShelf(-15.3,-12.4,-Z,3,1.9,.4,`#5f5140`,!0),this.addClutter(-20,-10.7,0,6,.9),this.addBed(-29.7,-21.5,Z,1.55,2.05,`#59452f`,`#887c66`),this.addContainer({type:`wardrobe`,name:`Wardrobe`,label:`Wardrobe`,x:-19,z:-23.7,rotY:0,table:`wardrobe`}),this.addContainer({type:`nightstand`,name:`Nightstand`,label:`Nightstand`,x:-26.8,z:-23.6,rotY:0,table:`nightstand`}),this.addContainer({type:`dresser`,name:`Dresser`,label:`Dresser`,x:-32.1,z:-19.8,rotY:Z,table:`nightstand`}),this.addStaticShelf(-24.2,-20.3,Z,1.2,1.7,.3,`#5c5040`,!1),this.box(`plastic`,1.45,.55,.72,-15,0,-22.7,`#b6b4a2`,{uvScale:1.2}),this.box(`metal`,.45,.09,.4,-15,.72,-22.6,`#83887f`),this.box(`plastic`,.4,.32,.4,-14.2,.35,-18.8,`#b9b7a6`),this.addContainer({type:`med_cabinet`,name:`Bathroom Cabinet`,label:`Bathroom Cabinet`,x:-14.1,z:-20.1,y:1.18,rotY:-Z,collide:!1,table:`nightstand`}),this.addContainer({type:`toolbox`,name:`Toolbox`,label:`Toolbox`,x:-15.2,z:-24,rotY:-.5,table:`toolbox`}),this.addClutter(-28,-18,0,6,1.4),this.addGroundDecal(`blood`,-23.6,-17.4,2.4,1,.03),this.addPoster(`quarantine`,-23.5,1.8,-16.6,0,.75,1.05),this.addRoomLight(-24,2.8,-21,`#ffd0a0`,7,6,`bulb`,.66),this.spawnPoints.push({x:-29,z:-19,type:`walker`,rot:2.3}),this.spawnPoints.push({x:-19,z:-12.5,type:`infected`,rot:1}),this.ambientEmitters.push({type:`drip`,x:-15,z:-22},{type:`buzz`,x:-24,z:-21})}buildSafehouse(){this.buildShell({cx:-27,cz:14.5,w:14,d:11,h:7,facing:-1,doorX:-27,doorW:1.35,ceiling:3,floor:`tileA`,wall:`plaster`,wallColor:`#a7ab99`,frontKey:`brick`,frontColor:`#8f7d69`,backKey:`concrete`,backColor:`#9a9688`,doorLabel:`Safe House`,ceilColor:`#aeb0a1`,roofColor:`#625a4c`}),this.addWindow(-31.5,1.9,8.96,X,2,1.6,{lit:!0,litVar:2,frame:`#7f7a6b`,boarded:!1}),this.addWindow(-22.4,1.9,8.96,X,2,1.6,{lit:!1,boarded:!0,frame:`#7f7a6b`}),this.addSign(`THE OLD LAUNDRY`,-27,3.25,8.9,X,3.8,.62,{bg:`#21352b`,fg:`#d7d4b9`,accent:`#7fa15f`,sub:`SAFE HOUSE · WATER · RADIO`,size:76,texH:260,glow:`#4d6a42`,glowIntensity:.5}),this.box(`emissive`,.9,.08,.22,-27,2.72,8.72,`#9adf7c`),this.addGlow(-27,2.6,8.55,`#7fb35f`,2.8,.55),this.addGlow(-27,2.2,8.3,`#6f9d55`,1.6,.28),this.addPoster(`help`,-31.4,1.7,8.92,X,.8,1.1),this.addGraffiti(`SAFE`,-22,2,8.93,X,1.8,.8,`#96b56e`,31);for(let e=0;e<7;e++){let t=-29.6+e%3*.72,n=e>4?.34:0;this.batches.box(`fabric`,.62,.36,.42,t,n+.16,7.55,`#8a7f63`,{rotY:.1*e,uvScale:.6})}this.addBlobShadow(-27,8.7,4.6,3,0,.7),this.addWasher(-31.5,11,0,`#b7b8a8`),this.addWasher(-30.4,11,0,`#b0b1a2`),this.addWasher(-29.3,11,0,`#bbbcaa`),this.addWasher(-31.5,12.4,0,`#b3b4a4`),this.addWasher(-30.4,12.4,0,`#adae9f`),this.box(`wood`,3.6,1,.65,-29.9,0,14.3,`#655540`,{uvScale:1.2}),this.box(`concrete`,3.7,.05,.7,-29.9,1,14.3,`#48443a`),this.addSofa(-23.2,16.8,2.4,X,`#5f6250`,`#727458`),this.addRug(-25.3,15.8,4.4,3.2,0,`#70604b`),this.addTable(-25.3,14.9,1.8,1,.76,0,`#5d4935`),this.batches.plane(`paper`,1.3,.95,-25.3,.78,14.9,`#d3c8ad`,{rotX:-Z}),this.box(`emissive`,.12,.02,.12,-25.3,.8,14.9,`#ffbc73`),this.addCot(-21.4,12.2,0),this.addContainer({type:`suitcase`,name:`Supply Crate`,label:`Safe House Supplies`,x:-30.7,z:16.9,rotY:.3,table:`safehouse`,items:[ju(`water`,2),ju(`canned_food`,1),ju(`bandage`,2),ju(`repair_kit`,1)]}),this.addContainer({type:`locker`,name:`Weapon Locker`,label:`Weapon Locker`,x:-20.8,z:18.4,rotY:-Z,table:`safehouse`,items:[ju(`pistol`,1),ju(`pipe`,1),ju(`pistol_ammo`,8),ju(`flare`,1),ju(`bandage`,2)]}),this.addContainer({type:`med_cabinet`,name:`First Aid Cabinet`,label:`First Aid Cabinet`,x:-20,z:15.4,y:1.2,rotY:-Z,collide:!1,table:`med_cabinet`}),this.addStaticShelf(-32.1,17.6,Z,2.2,1.8,.34,`#5e5140`,!0),this.box(`plastic`,.4,.24,.2,-28.7,1.02,14.1,`#3f443b`),this.box(`metal`,.06,.18,.04,-28.5,1.15,14.08,`#8d8a76`),this.addGlow(-28.7,1.1,13.95,`#d7a566`,.4,.24),this.addRoomLight(-26.5,2.85,15,`#ffd0a2`,9,7,`bulb`,.2),this.addSign(`YOU ARE SAFE`,-27,2.55,9.2,X,2.6,.3,{bg:`#1c2b23`,fg:`#9fc27d`,accent:`#6c8a57`,size:84,texH:140,border:!1}),this.addClutter(-28.2,17.2,0,4,.8),this.addGroundDecal(`blood`,-29.7,9.7,1.4,.8,.032),this.safeZones.push({x:-27,z:14.5,r:5.2,name:`The Old Laundry`}),this.questPoints.safehouse=new H(-27,1.6,9.5),this.ambientEmitters.push({type:`safe`,x:-27,z:14.5})}addBalcony(e,t,n,r,i,a=0){let o=this.batches,[s,c]=Q(e,n,a,0,i/2);o.box(`concrete`,r,.16,i,s,t,c,`#8f8777`,{rotY:a,uvScale:1.4});let[l,u]=Q(e,n,a,0,i);o.box(`metal`,r,.06,.06,l,t+1.02,u,`#474741`,{rotY:a}),o.box(`metal`,r,.04,.04,l,t+.55,u,`#474741`,{rotY:a});for(let s=0;s<=6;s++){let[c,l]=Q(e,n,a,-r/2+s/6*r,i);o.box(`metal`,.045,1.05,.045,c,t+.54,l,`#474741`,{rotY:a})}for(let s of[-1,1]){let[c,l]=Q(e,n,a,s*r/2,i/2);o.box(`metal`,.05,1.02,i,c,t+.54,l,`#474741`,{rotY:a})}if(this.rng()<.6){let s=[`#a8a08a`,`#7b8876`,`#b39a7e`];for(let c=0;c<3;c++){let[l,u]=Q(e,n,a,-r*.3+c*.55,i-.16);o.plane(`fabric`,.34,.65+this.rng()*.2,l,t+.68,u,Nl(this.rng,s),{rotY:a,uvScale:0})}}if(this.rng()<.5){let[s,c]=Q(e,n,a,r*.35,i-.28);o.cylinder(`plastic`,.16,.12,.26,8,s,t+.21,c,`#8d5d42`),o.plane(`weeds`,.4,.4,s,t+.42,c,`#b9b17b`,{rotY:a,uvScale:0})}this.addBlobShadow(s,c,r,i,a,.35)}addFireEscape(e,t,n){let r=this.batches;r.box(`metal`,2.6,.08,1.15,e,4.4,t-.5,`#4b4b45`,{uvScale:1.4}),r.box(`metal`,2.6,.08,1.15,e,7.2,t-.5,`#4b4b45`,{uvScale:1.4});for(let n=0;n<7;n++){let i=e-1.25+n*.42;r.box(`metal`,.035,.9,.035,i,4.9,t-1.05,`#43433e`),r.box(`metal`,.035,.9,.035,i,7.7,t-1.05,`#43433e`)}r.box(`metal`,2.6,.05,.05,e,5.85,t-1.05,`#43433e`),r.box(`metal`,2.6,.05,.05,e,5.4,t-1.05,`#43433e`),r.box(`metal`,2.6,.05,.05,e,8.1,t-1.05,`#43433e`);for(let n=0;n<10;n++)r.box(`metal`,.5,.04,.04,e+.8,4.55+n*.28,t-1.02,`#4a4a44`);r.box(`metal`,.04,2.9,.04,e+.55,5.95,t-1.02,`#4a4a44`),r.box(`metal`,.04,2.9,.04,e+1.05,5.95,t-1.02,`#4a4a44`);for(let n of[e-1.2,e+1.2])r.box(`metal`,.06,.06,1.1,n,4.76,t-.6,`#3f3f3a`,{rotX:-.45})}addAC(e,t,n,r){let i=this.batches,[a,o]=Q(e,n,r,0,.35);i.box(`metal`,.9,.58,.55,a,t,o,`#797b71`,{rotY:r});let[s,c]=Q(e,n,r,.25,.64);i.cylinder(`dark`,.21,.21,.02,12,s,t,c,`#252621`,{rotX:Z}),i.box(`metal`,.06,.06,.5,...(()=>{let[i,a]=Q(e,n,r,0,.1);return[i,t-.35,a]})(),`#494a43`),i.plane(`blood2`,.3,1.2,...(()=>{let[i,a]=Q(e,n,r,0,.04);return[i,t-1.2,a]})(),`#3b3a32`,{rotY:r})}addPipes(e,t,n,r){let i=this.batches,a=(t+n)/2,o=Math.abs(n-t),[s,c]=Q(e,a,r,0,0);i.cylinder(`metal`,.06,.06,o,8,s,o/2+.4,c,`#6d6a5c`,{rotX:Z}),i.cylinder(`metal`,.085,.085,o,8,s+.12,o/2+.4,c,`#5a574b`,{rotX:Z});for(let e=0;e<5;e++)i.box(`metal`,.18,.06,.06,s,.8+o/4.5*e,c,`#4d4b43`)}addIvyWall(e,t,n,r,i,a,o){let s=q(o*17+3);for(let o=0;o<7;o++){let o=(s()-.5)*i,c=(s()-.5)*a,[l,u]=Q(e,n,r,o,.03);this.batches.plane(`ivy`,.7+s()*1.5,.7+s()*1.5,l,t+c,u,`#ffffff`,{rotY:r,rotZ:s()*X,uvScale:0})}}buildFillerBuildings(){let e=[`CAFÉ NABIL`,`HOTEL MARINA`,`HARDWARE`,`FURNITURE`,`BAKERY`,`PHONE REPAIR`,`BARBER`,`LAUNDRY`,`PHARMACY`,`BOOKS`],t=[{cx:61,cz:-14.5,w:10,d:11,h:6.6,style:`brick`,facing:1,shop:0,boarded:!0,seed:101},{cx:79,cz:-22,w:18,d:20,h:11.4,style:`plaster`,facing:1,shop:3,seed:102},{cx:53.5,cz:-39,w:14,d:14,h:13,style:`brick`,facing:1,seed:103,noFront:!0}],n=[{cx:30,cz:15,w:12,d:12,h:8.4,style:`plaster`,facing:-1,shop:6,boarded:!0,seed:111,sign:`CLINIC`},{cx:61,cz:16,w:14,d:14,h:8.2,style:`brick`,facing:-1,shop:4,seed:112},{cx:79,cz:17,w:18,d:18,h:10,style:`plaster`,facing:-1,shop:7,seed:113},{cx:40,cz:25,w:9,d:10,h:7.5,style:`concrete`,facing:-1,seed:114,noFront:!0}];for(let n of t)this.addFillerBuilding({...n,name:e[n.shop]});for(let t of n)this.addFillerBuilding({...t,name:e[t.shop],sign:t.sign})}addFillerBuilding({cx:e,cz:t,w:n,d:r,h:i,facing:a=1,style:o=`plaster`,shop:s=0,name:c=``,boarded:l=!1,seed:u=1,sign:d=null,noFront:f=!1}){let p=q(u*131+7),m=this.batches,h=a>0?t+r/2:t-r/2;a>0?t-r/2:t+r/2;let g=o===`brick`?`brick`:o===`concrete`?`concrete`:`plaster`,_=o===`brick`?Nl(p,[`#8e7c69`,`#9b8470`,`#857364`,`#a08a72`]):o===`concrete`?Nl(p,[`#98978b`,`#8d8c82`,`#a3a093`]):Nl(p,[`#b5a98f`,`#ad9f88`,`#b9ad96`,`#a99b83`,`#c0b39a`]);this.box(g,n,i,r,e,0,t,_,{uvScale:2.4}),this.addColliderBox(e,t,n,r,0,i,`building`),this.box(`dark`,n+.4,.26,r+.4,e,i-.1,t,`#37342d`);for(let a of[-1,1])this.box(g,n,.6,.24,e,i,t+a*(r/2-.1),_),this.box(g,.24,.6,r,e+a*(n/2-.1),i,t,_);this.addRoofDetails(e,t,n,r,i,p),this.batches.box(g,n+.15,.7,r+.15,e,.35,t,`#766e60`,{uvScale:2}),this.batches.box(`concrete`,n+.35,.18,r+.35,e,i-.65,t,`#a69b85`,{uvScale:2});let v=Math.max(1,Math.floor((i-4.4)/3)),y=Math.max(2,Math.floor(n/3));if(f||this.addWindowGrid(e-n/2+1.2,e+n/2-1.2,h+a*.045,a,4.4,v,y,u*17),n>10){let i=e+n/2+.045,a=Z;for(let e=0;e<Math.max(1,v-1);e++)for(let n=0;n<2;n++)this.addWindowFloor(i,4.5+e*3,t+r*.12+n*2.4,a,1.15,1.55,u+300+e*13+n)}if(!f){let t=e+(p()-.5)*n*.25,r=h+a*.05,i=a>0?0:X;m.box(`wood`,1.1,2.25,.1,t,1.125,r,`#5c4a36`,{rotY:i,uvScale:1.2}),m.box(`concrete`,.12,2.4,.25,t-.62,1.2,r,`#91846f`,{rotY:i}),m.box(`concrete`,.12,2.4,.25,t+.62,1.2,r,`#91846f`,{rotY:i}),m.box(`concrete`,1.34,.12,.25,t,2.42,r,`#91846f`,{rotY:i});let o=e+(p()<.5?-1:1)*n*.24;if(this.addWindow(o,1.55,h+a*.045,i,Math.min(3.8,n*.32),1.85,{lit:!l&&p()<.45,litVar:1+Math.floor(p()*4),broken:l||p()<.25,boarded:l,frame:`#7e7461`,sill:!0}),!l&&p()<.55){let e=Math.min(3.8,n*.35);m.box(p()<.5?`awning`:`awningGreen`,e,.07,1.35,o,2.62,h+a*.75,`#ffffff`,{rotX:a>0?.13:-.13,rotY:0});for(let t=0;t<8;t++)m.box(`awning`,e/9,.2,.05,o-e/2+e/8*t,2.48,h+a*1.4,`#ffffff`)}let s=d||c||`CAFÉ NABIL`;if(this.addSign(s,e,3.25,h+a*.05,i,Math.min(4.4,n*.48),.56,{bg:Nl(p,[`#26261f`,`#34302a`,`#2a332c`,`#3a2b25`]),fg:Nl(p,[`#d8cfb8`,`#cfc5aa`,`#c8d0bc`]),accent:Nl(p,[`#a34a32`,`#8b6e3e`,`#5f7d5d`]),size:76,texH:220,glow:`#2a2116`,glowIntensity:.1,border:p()<.6}),l){for(let e=0;e<3;e++)m.box(`wood`,2.4,.18,.05,o,1+e*.5,h+a*.075,`#6c5943`,{rotY:i,rotZ:(e%2?1:-1)*.02});this.addGraffiti(`CONDEMNED`,o,1.65,h+a*.085,i,2.4,1,`#8a3c2b`,u+6)}p()<.5&&this.addClutter(e+(p()-.5)*n*.6,h+a*.45,0,4,.8)}p()<.6&&this.addAC(e+n/2+.06,4.2+p()*2.4,t+(p()-.5)*r*.5,Z),p()<.5&&this.addPipes(e-n/2-.08,t-r*.3,t+r*.3,-Z),p()<.65&&this.addGraffiti(Nl(p,[`RUN`,`HELP`,`NO WATER`,`KEEP OUT`,`DEAD INSIDE`,`SIGNAL LOST`,`THEY COME AT NIGHT`]),e+n/2+.07,1.7+p()*1.5,t+(p()-.5)*r*.6,Z,3+p()*2,1.4+p()*.8,Nl(p,[`#8f3a2a`,`#736f42`,`#6b3b31`,`#3f5a51`]),u+11),p()<.5&&this.addPoster(p()<.5?`missing`:`quarantine`,e-n/2+.8,1.7,h+a*.07,a>0?0:X,.8,1.14),this.addBlobShadow(e,t,n+3,r+3,0,.45),p()<.25&&this.addFireEscape(e+n*.22,h+a*.08,i)}buildBackdrop(){let e=this.batches,t=q(9090);for(let[n,r,i,a,o,s]of[[-31,-45,18,16,18.5,`#8d8272`],[-9,-47,23,18,23.2,`#948674`],[19,-44,19,15,17,`#8a7c6b`],[44,-46,22,16,27,`#7f7567`],[72,-45,18,16,20,`#8f8373`],[90,-39,20,18,24,`#7e7364`],[-70,-48,22,18,25,`#857a6b`],[-92,-40,20,18,19,`#8e8272`],[-27,37,22,16,16.2,`#8f8373`],[1,40,18,15,13.5,`#988a78`],[27,39,20,14,19.5,`#877c6c`],[55,38,19,16,15.5,`#948674`],[79,39,17,15,18,`#897d6d`],[96,35,18,17,22,`#7e7365`]]){e.box(`plaster`,i,o,a,n,o/2,r,s,{uvScale:2.6}),e.box(`dark`,i+.5,.3,a+.5,n,o,r,`#36332c`),this.addColliderBox(n,r,i,a,0,o,`building`);let c=r<0?r+a/2:r-a/2,l=r<0?1:-1;for(let e=0;e<Math.floor(o/3.4);e++)for(let r=0;r<Math.floor(i/2.8);r++){let a=n-i/2+1.3+r*2.8,o=3.1+e*3.3,s=t()<.12;this.addWindow(a,o,c+l*.03,l>0?0:X,1.1,1.5,{lit:s,litVar:1+Math.floor(t()*4),broken:t()<.3,sill:!1})}this.addRoofDetails(n,r,i,a,o,t)}for(let n=0;n<22;n++){let r=n%2?1:-1,i=jl(t,-130,130),a=r*jl(t,62,120),o=jl(t,8,22),s=jl(t,8,20),c=jl(t,12,42),l=Nl(t,[`#6d665b`,`#786f62`,`#625d53`,`#7d7466`]);e.box(`plaster`,o,c,s,i,c/2,a,l,{uvScale:3.4}),e.box(`dark`,o+.3,.25,s+.3,i,c,a,`#302e28`);for(let n=0;n<Math.floor(c/4);n++)for(let r=0;r<Math.max(1,Math.floor(o/4));r++){if(t()<.55)continue;let c=i-o/2+1.4+r*4,l=3.2+n*3.8,u=t()<.1;e.plane(u?`lit`+(1+Math.floor(t()*4)):`windowPane`,.9,1.2,c,l,a+(a<0?s/2+.03:-s/2-.03),`#ffffff`,{rotY:a<0?0:X})}}for(let[t,n,r,i,a]of[[-100,-12,18,28,25],[-103,22,20,22,18],[103,-18,22,26,29],[104,18,18,24,17]])e.box(`plaster`,r,a,i,t,a/2,n,`#7a7265`,{uvScale:3}),e.box(`dark`,r+.4,.3,i+.4,t,a,n,`#302e28`);e.cylinder(`concrete`,1.25,1.7,40,12,-64,20,-78,`#8f8878`),e.cylinder(`concrete`,2.4,2.4,2,12,-64,40.5,-78,`#9a9382`),e.cylinder(`metal`,.12,.45,7.5,8,-64,45,-78,`#6f6759`);for(let t=0;t<3;t++)e.cylinder(`concrete`,2.6,2.6,.4,12,-64,12+t*10,-78,`#aaa190`);let n=new ri(new Gi(12,20,10,0,X*2,0,Z),new na({color:9145212,roughness:.9,metalness:.05}));n.position.set(-50,7,-76),n.scale.y=.8,this.root.add(n),e.box(`concrete`,22,10,18,-50,5,-76,`#8d8778`,{uvScale:3}),e.cylinder(`concrete`,1,1.3,30,10,-38,15,-81,`#8c8373`),e.cylinder(`metal`,.08,.3,5.4,6,-38,32,-81,`#6d6558`),e.box(`metal`,.6,34,.6,74,17,-63,`#6d6656`,{rotZ:.04}),e.box(`metal`,28,.5,.5,84,33.5,-63,`#6d6656`,{rotZ:-.02});for(let t=0;t<12;t++)e.box(`metal`,.2,2.2,.2,72+t*2.2,33.4,-63,`#5e584a`,{rotZ:.45});for(let n=0;n<14;n++){let r=-120+n*18;e.box(`plaster`,12+t()*10,18+t()*24,14,r,10,-135-t()*30,`#5f5a50`,{uvScale:4})}let r=Du();for(let[e,n,i,a]of[[68,-40,16,12],[-45,-42,14,10],[20,-112,22,18],[96,30,18,13]])for(let o=0;o<5;o++){let s=new Rr(new wr({map:r,color:5592143,transparent:!0,opacity:.15,depthWrite:!1}));s.position.set(e+jl(t,-2,2),i+o*6,n+jl(t,-2,2)),s.scale.set(a+o*3,a+o*3,1),s.userData={baseY:s.position.y,baseX:s.position.x,phase:t()*10,speed:.12+t()*.1},this.root.add(s),this.smoke.push(s)}for(let e=0;e<9;e++){let n=-80+e*18;this.addCable(new H(n,7.8+t()*1.2,-8.9),new H(n+jl(t,-3,3),7.6+t()*1.2,8.9),1.2),this.addCable(new H(n,6.8+t(),-8.9),new H(n+jl(t,-2,2),6.6+t(),8.9),1.8)}for(let e=0;e<5;e++){let t=-34+e*17;this.addCable(new H(t,5.6,-8.9),new H(t+4,5.3,8.9),2,5065538)}}addCable(e,t,n=1.2,r=2565664){let i=e.clone().lerp(t,.5);i.y-=n;let a=new Hi(e,i,t).getPoints(16),o=new xi(new pr().setFromPoints(a),new pi({color:r,transparent:!0,opacity:.85}));this.root.add(o)}addCar(e,t,n,r,{burnt:i=!1,body:a=4.25,width:o=1.86,tall:s=0}={}){let c=this.batches,l=(r,i)=>Q(e,t,n,r,i),u=i?`#2b2823`:r,[d,f]=l(0,0);if(c.box(i?`dark`:`metal`,a,.58+s,o,d,.62+s*.5,f,u,{rotY:n,uvScale:1.7}),[d,f]=l(-.1,0),c.box(i?`dark`:`metal`,a*.5,.56,o*.88,d,1.16+s*.6,f,i?`#312e28`:u,{rotY:n,uvScale:1.4}),[d,f]=l(-.12,0),c.box(i?`dark`:`metal`,a*.44,.07,o*.8,d,1.47+s*.6,f,i?`#26241f`:`#3a3a35`,{rotY:n,uvScale:1}),i)[d,f]=l(1.42,0),c.box(`dark`,1.2,.04,o*.82,d,.95+s,f,`#1c1b18`,{rotY:n,rotX:.26}),[d,f]=l(-1.6,0),c.box(`dark`,.9,.03,o*.7,d,1.5,f,`#1e1d19`,{rotY:n,rotZ:-.4}),this.addGlow(e,1.05,t,`#ff8a3c`,1.2,.1);else{for(let e of[-1,1])[d,f]=l(.62,e*o*.43),c.plane(`glass`,a*.34,.4,d,1.19,f,`#9fb0ad`,{rotY:n+(e>0?0:X)}),[d,f]=l(-.62,e*o*.43),c.plane(`glass`,a*.3,.4,d,1.19,f,`#9fb0ad`,{rotY:n+(e>0?0:X)});[d,f]=l(.93,0),c.plane(`glass`,o*.78,.42,d,1.2,f,`#a7b5b1`,{rotY:n+Z}),[d,f]=l(-1.12,0),c.plane(`glass`,o*.72,.38,d,1.18,f,`#9faeab`,{rotY:n+Z});for(let e of[-1,1])[d,f]=l(a/2-.02,e*o*.32),c.box(`emissive`,.04,.13,.28,d,.66,f,`#d9c69a`,{rotY:n}),[d,f]=l(-a/2+.02,e*o*.33),c.box(`emissive`,.04,.12,.24,d,.66,f,`#8e3a2e`,{rotY:n});[d,f]=l(a/2+.04,0),c.box(`metal`,.12,.17,o*.96,d,.42,f,`#575750`,{rotY:n}),[d,f]=l(-a/2-.04,0),c.box(`metal`,.12,.17,o*.96,d,.42,f,`#55554e`,{rotY:n});for(let e of[-1,1])[d,f]=l(.82,o*.53*e),c.box(`plastic`,.13,.1,.2,d,1.18,f,`#33352f`,{rotY:n})}for(let e of[-1.36,1.42])for(let t of[-1,1])[d,f]=l(e,t*o*.5),c.cylinder(`rubber`,.33,.33,.22,10,d,.33,f,i?`#141412`:`#1d1e1a`,{rotX:Z}),[d,f]=l(e,t*o*.51),c.cylinder(`metal`,.17,.17,.03,8,d,.33,f,i?`#302e29`:`#77796f`,{rotX:Z});this.addBlobShadow(e,t,a+.8,o+.9,n,i?.25:.55),this.addColliderBox(e,t,a,o,0,1.7,`car`,n)}addBus(e,t,n){let r=this.batches,i=(r,i)=>Q(e,t,n,r,i),[a,o]=i(0,0);r.box(`metal`,11.2,2.5,2.55,a,1.55,o,`#6f7364`,{rotY:n,uvScale:2.4}),[a,o]=i(0,0),r.box(`dark`,11,.28,2.45,a,2.9,o,`#3a3b34`,{rotY:n}),[a,o]=i(.2,0),r.box(`metal`,10.6,.35,2.4,a,.42,o,`#5b5e51`,{rotY:n});for(let e=0;e<8;e++)for(let t of[-1,1])[a,o]=i(-4.2+e*1.22,t*1.29),r.plane(`glass`,1.03,.95,a,2.05,o,`#9aacaa`,{rotY:n+(t>0?0:X)});[a,o]=i(5.58,0),this.addSign(`HARBOR CITY TRANSIT`,a,2.72,o,n+Z,1.9,.32,{bg:`#232720`,fg:`#d6b45e`,accent:`#7b5f2c`,size:68,texH:120,border:!1,backing:!1,glow:`#3b3117`,glowIntensity:.3});for(let e of[-3.6,3.7])for(let t of[-1,1])[a,o]=i(e,t*1.3),r.cylinder(`rubber`,.46,.46,.3,12,a,.46,o,`#161714`,{rotX:Z}),[a,o]=i(e,t*1.31),r.cylinder(`metal`,.23,.23,.04,8,a,.46,o,`#6c6e63`,{rotX:Z});[a,o]=i(3,-1.29),r.box(`metal`,1,1.9,.04,a,1.2,o,`#5b5f52`,{rotY:n}),[a,o]=i(-2.2,1.29),r.box(`metal`,1,1.9,.04,a,1.2,o,`#585c4f`,{rotY:n}),this.addGroundDecal(`decalOil`,e-2,t+1.5,3.4,.6,.027,`#6b6154`),this.addBlobShadow(e,t,12.6,3.6,n,.55),this.addColliderBox(e,t,11.2,2.55,0,3.2,`bus`,n)}addAmbulance(e,t,n){let r=this.batches,i=(r,i)=>Q(e,t,n,r,i),[a,o]=i(0,0);r.box(`metal`,4.9,2,2.1,a,1.28,o,`#c8c6b6`,{rotY:n,uvScale:1.8}),[a,o]=i(1.55,0),r.box(`metal`,1.5,1.15,1.98,a,1.05,o,`#bcbaa9`,{rotY:n}),[a,o]=i(1.75,0),r.plane(`glass`,1.45,.62,a,1.55,o,`#9aacaa`,{rotY:n+Z}),[a,o]=i(0,0),r.box(`emissive`,4.92,.16,2.12,a,1.06,o,`#9c3a2d`,{rotY:n}),[a,o]=i(-1,1.07),r.plane(`paper`,.7,.5,a,1.55,o,`#b6c0ad`,{rotY:n}),[a,o]=i(.65,0),r.box(`metal`,1.2,.1,1.7,a,2.33,o,`#33352f`,{rotY:n});for(let e of[-1,1])[a,o]=i(.65,e*.55),r.box(`emissive`,.34,.16,.5,a,2.44,o,e>0?`#c04435`:`#5b7fa0`,{rotY:n});for(let e of[-1.55,1.75])for(let t of[-1,1])[a,o]=i(e,t*1),r.cylinder(`rubber`,.37,.37,.24,10,a,.37,o,`#1a1b17`,{rotX:Z});this.addBlobShadow(e,t,5.6,3,n,.55),this.addColliderBox(e,t,4.9,2.1,0,2.4,`ambulance`,n),this.addGlow(e+1.4,1.35,t,`#d9a06a`,1.6,.18)}addBarrier(e,t,n,r=`concrete`){let i=this.batches;if(r===`concrete`)i.box(`concrete`,2.2,.52,.55,e,.48,t,`#a5a08f`,{rotY:n,uvScale:1.2}),i.box(`concrete`,2.25,.22,.6,e,.09,t,`#8f8a7b`,{rotY:n}),i.box(`hazard`,2.2,.2,.57,e,.72,t,`#ffffff`,{rotY:n}),this.addColliderBox(e,t,2.2,.6,0,1.1,`barrier`,n);else{i.box(`metal`,2.4,.06,.06,e,1.02,t,`#71756c`,{rotY:n}),i.box(`metal`,2.4,.06,.06,e,.2,t,`#71756c`,{rotY:n});for(let r=0;r<8;r++){let[a,o]=Q(e,t,n,-1.1+r*.31,0);i.box(`metal`,.035,.85,.035,a,.6,o,`#787c72`,{rotY:n})}i.box(`metal`,2.4,.3,.86,e,0,t,`#5e6259`,{rotY:n}),this.addColliderBox(e,t,2.4,.3,0,1.15,`barrier`,n)}this.addBlobShadow(e,t,2.8,1.1,n,.4)}addSandbagWall(e,t,n,r=3.4,i=3){let a=this.batches,o=Math.max(3,Math.round(r/.62));for(let s=0;s<i;s++)for(let i=0;i<o-s;i++){let[o,c]=Q(e,t,n,-r/2+.35+i*.62+s*.31,0);a.box(`fabric`,.64,.28,.44,o,.15+s*.27,c,s%2?`#8b8063`:`#93876a`,{rotY:n,rotZ:(i%3-1)*.03,uvScale:.7})}this.addColliderBox(e,t,r,.6,0,i*.3,`sandbags`,n)}addFireBarrel(e,t,n=1){let r=this.batches;r.cylinder(`metal`,.34,.32,.92,12,e,.46,t,`#4a443a`),r.cylinder(`dark`,.36,.36,.1,12,e,.94,t,`#1d1c18`);for(let n=0;n<3;n++)r.box(`metal`,.05,.05,.7,e,.2+n*.3,t,`#38332b`,{rotY:n*.4});let i=Du(),a=new un;a.position.set(e,1.05,t);let o=[];for(let e=0;e<5;e++){let t=new Rr(new wr({map:i,color:new W(e<2?`#ffd27a`:`#ff7a2e`),transparent:!0,opacity:.62-e*.09,depthWrite:!1,blending:2}));t.scale.setScalar(n*(.7-e*.06)),t.position.y=e*.22,a.add(t),o.push(t)}this.root.add(a);let s=new Va(new W(`#ff8a3a`),7,9,2);s.position.set(e,1.5,t),this.scene.add(s),this.pointLights.push(s),this.flames.push({group:a,sprites:o,light:s,base:7,seed:this.rng()*60,scale:n}),this.addGlow(e,1.15,t,`#ff7c30`,1.8,.34),this.addGroundDecal(`decalOil`,e,t,2,this.rng()*X,.026,`#3a332b`)}buildStreetProps(){let e=this.batches,t=this.rng;this.addCar(-11.5,-3.35,.02,`#5e655b`),this.addCar(7.6,3.45,3.14,`#77684f`),this.addCar(23.2,-3.35,.03,`#6b5148`),this.addCar(40.5,3.35,3.13,`#5b5f58`),this.addCar(-30.5,2.95,3.1,`#4f5650`,{burnt:!0}),this.addCar(-47,-3.45,.02,`#7f7a63`,{burnt:!0}),this.addCar(70,3.15,3.12,`#6c6656`),this.addCar(-66,2.95,3.14,`#595a50`),this.addCar(84,-3.3,.02,`#675f50`,{burnt:!0}),this.addBus(-20,-2.7,.02),this.addAmbulance(18.6,-4.9,.05),this.addCar(52.5,-4.2,1.58,`#555e61`,{body:4.4});for(let e=0;e<3;e++)this.addBarrier(58+e*2.35,-3.1,.02,e===1?`metal`:`concrete`);this.addBarrier(58.4,3.4,.02,`metal`),this.addBarrier(63.2,3.4,.02,`metal`),this.addSandbagWall(56.6,-5.7,.02,3.6,3),this.addSandbagWall(66.4,5.8,.02,3.2,3),this.addSign(`QUARANTINE`,60.4,2.6,-4.3,0,2.6,.64,{bg:`#b6a87f`,fg:`#3c2f1e`,accent:`#a23a2b`,sub:`NO PASSAGE · SECTOR 7`,size:90,texH:210}),this.addSign(`CHECKPOINT 4`,62,2.2,4,X,1.9,.44,{bg:`#33352d`,fg:`#cfc6ae`,accent:`#8e3a2b`,size:84,texH:180,border:!1,backing:!1});for(let[t,n,r]of[[61.5,8.6,.2],[68,8,-.18],[61,-8.6,.05]]){e.box(`fabric`,3.2,.1,4,t,2.15,n,`#6f715d`,{rotY:r,rotX:.02}),e.box(`fabric`,3,2,.08,t,1.05,n+1.95,`#656753`,{rotY:r}),e.box(`fabric`,3,2,.08,t,1.05,n-1.95,`#5e604d`,{rotY:r});for(let r=0;r<3;r++)e.box(`metal`,.05,2.2,.05,t-1.5+r*1.5,1.1,n+1.92,`#4b4c42`);this.addColliderBox(t,n,3.2,4,0,2.2,`tent`,r)}this.addFireBarrel(57.2,6.6,1.2),this.addFireBarrel(66,-6.4,1),this.addBarrier(-2.6,-5.35,.02,`metal`),this.addBarrier(37.2,-5.45,.02,`metal`),this.addSandbagWall(31.5,6.15,.02,3,2),this.addSign(`CURFEW`,5.2,2.45,6.9,X,1.8,.52,{bg:`#2b2c25`,fg:`#d7cdb4`,accent:`#a54632`,sub:`DUSK UNTIL DAWN`,size:78,texH:190});for(let[e,t,n]of[[-72,-6.15,1],[-52,6.15,-1],[-34,-6.15,1],[-14,6.15,-1],[4,-6.15,1],[24,6.15,-1],[44,-6.15,1],[66,6.15,-1],[84,-6.15,1],[47.2,-28,1],[47.2,14,1],[52.8,-44,-1]]){let r=this.batches;r.cylinder(`metal`,.09,.13,5.6,8,e,2.8,t,`#3a3b34`),r.cylinder(`metal`,.2,.26,.34,8,e,.17,t,`#33342d`);let i=t+n*-.75;r.box(`metal`,.08,.08,1.5,e,5.55,(t+i)/2,`#3a3b34`),r.box(`metal`,.5,.16,.3,e,5.44,i,`#43443b`),r.plane(`emissive`,.38,.2,e,5.34,i,`#ffcf8a`,{rotX:Z});let a=this.addGlow(e,5.3,i,`#ffbd75`,2.3,.34);a.userData.lamp=!0,this.batches.plane(`lightPool`,7.5,7.5,e,.031,i,`#ffb46c`,{rotX:-Z});let o=new Va(new W(`#ffb977`),13,15,2);o.position.set(e,5.15,i),this.scene.add(o),this.pointLights.push(o),this.streetLamps.push({light:o,x:e,z:i,base:13,seed:this.rng()*100})}for(let[t,n,r]of[[44.4,5.9,1],[55.6,-5.9,-1],[44.4,-25,1]]){e.cylinder(`metal`,.1,.14,4.2,8,t,2.1,n,`#32332c`),e.box(`metal`,.42,1,.36,t,4.35,n,`#2e2f29`);for(let i=0;i<3;i++)e.cylinder(`dark`,.12,.12,.03,10,t,4.66-i*.3,n+r*.19,`#11120f`,{rotX:Z});e.box(`emissive`,.2,.2,.03,t,4.36,n+r*.2,`#8e4a2b`),this.addGlow(t,4.36,n+r*.28,`#b5532b`,.8,.28)}let n=33.5,r=6.4;e.box(`metal`,4.4,.08,1.7,n,2.55,r,`#5c6058`);for(let t of[-2,2])e.box(`metal`,.1,2.55,.1,n+t,1.27,5.680000000000001,`#4c4f47`);e.plane(`glass`,4.2,2.1,n,1.25,7.180000000000001,`#93a3a0`,{rotY:X}),e.box(`metal`,3.4,.09,.42,n,.53,6.75,`#5a5d54`),this.addSign(`BUS`,n,2.86,7.24,X,.9,.28,{bg:`#2b3129`,fg:`#c9c0a4`,accent:`#7c6337`,size:90,texH:140,border:!1,backing:!1}),this.addColliderBox(n,r,4.4,1.2,0,2.6,`shelter`);for(let[t,n,r,i]of[[10.2,-23.4,.05,`#4a5a4b`],[-8.4,-20.6,-.08,`#4c5148`],[17.2,20.6,1.57,`#4d4f43`],[-34.2,20,.1,`#47524a`]]){e.box(`metal`,1.9,1.25,1.15,t,.72,n,i,{rotY:r,uvScale:1.2}),e.box(`metal`,1.94,.1,1.2,t,1.39,n,`#3d4139`,{rotY:r,rotX:.06}),e.box(`metal`,.16,.14,.1,t+.7,.6,n+.62,`#2e302b`,{rotY:r});for(let r of[-1,1])e.cylinder(`rubber`,.14,.14,.08,8,t+r*.72,.15,n+.4,`#1b1c18`,{rotX:Z});this.addColliderBox(t,n,1.9,1.15,0,1.45,`dumpster`,r),this.addBlobShadow(t,n,2.5,1.7,r,.4)}for(let[t,n]of[[-6.8,-5.9],[29,5.9],[64,-5.9],[-41,5.9]])e.cylinder(`metal`,.14,.17,.55,8,t,.3,n,`#8e3a2b`),e.cylinder(`metal`,.1,.1,.16,8,t,.64,n,`#7d3225`),e.box(`metal`,.5,.1,.1,t,.42,n,`#7d3225`);for(let[t,n]of[[-1.5,6.1],[21.2,-6],[45.8,8.2],[-27,-6],[58,5.8]])e.cylinder(`metal`,.32,.28,.86,10,t,.43,n,`#4b4e45`),e.cylinder(`dark`,.34,.34,.06,10,t,.9,n,`#22231f`),e.box(`fabric`,.3,.34,.3,t+.55,.17,n+.16,`#2a2b26`,{rotY:.4});for(let[t,n,r]of[[-25.6,5.9,.1],[-25,5.9,-.14],[12.2,-6,.05]])e.box(`metal`,.46,.9,.4,t,.52,n,`#6a705f`,{rotY:r}),e.box(`glass`,.36,.42,.02,t,.72,n-.21,`#8d9b94`,{rotY:r}),e.box(`metal`,.46,.08,.42,t,.98,n,`#4b5145`,{rotY:r});for(let t=0;t<7;t++){let n=50+(t-3)*1.5;e.cylinder(`metal`,.07,.09,.8,8,n,.4,7.6,`#54564c`)}for(let[t,n,r]of[[7.6,6.2,.08],[13.4,6,-.05]]){e.box(`wood`,2.2,.08,1.2,t,.86,n,`#6d5a42`,{rotY:r,uvScale:1.2});for(let i of[-1,1])e.box(`wood`,.08,.86,.08,t+i*.95,.43,n+.45,`#5e4b35`,{rotY:r});for(let i of[-1,1])e.box(`wood`,.08,.86,.08,t+i*.95,.43,n-.45,`#5e4b35`,{rotY:r});e.box(`awning`,2.5,.06,1.5,t,2.2,n,`#8a6d54`,{rotY:r,rotX:.1});for(let i=0;i<3;i++)e.box(`wood`,.4,.3,.3,t-.7+i*.6,1.05,n,`#8b7350`,{rotY:r+i*.3});this.addColliderBox(t,n,2.2,1.2,0,1,`stall`,r)}for(let n=0;n<9;n++){let n=-34.5+t()*4.2,r=-7.6+t()*1.4;e.box(`concrete`,.35+t()*.7,.25+t()*.4,.3+t()*.5,n,.15+t()*.2,r,Nl(t,[`#98917f`,`#8b8372`,`#a39b87`]),{rotY:t()*X,rotZ:t()*.5,uvScale:1.2})}this.addContainer({type:`corpse`,name:`Body`,label:`Body of a Courier`,x:9.4,z:-5.4,rotY:.9,table:`corpse`}),this.addContainer({type:`corpse`,name:`Body`,label:`Body of a Soldier`,x:55,z:2.4,rotY:2.1,table:`corpse`}),this.addContainer({type:`crate`,name:`Military Crate`,label:`Military Crate`,x:63.6,z:-7.2,rotY:.2,table:`storage`,items:[ju(`rifle`,1),ju(`rifle_ammo`,18),ju(`shotgun_shells`,6),ju(`bandage`,2)]}),this.addContainer({type:`locker`,name:`Field Locker`,label:`Field Locker`,x:60.4,z:9.4,rotY:-Z,table:`locker`,items:[ju(`shotgun`,1),ju(`shotgun_shells`,6),ju(`medkit`,1),ju(`painkillers`,1)]}),this.addFireBarrel(-13.6,-6.2,1),this.addFireBarrel(34.8,6.7,.95),this.addFireBarrel(-32,-6.3,.85)}buildAtmosphere(){let e=this.rng,t=new pr,n=new Float32Array(2700),r=new Float32Array(900);for(let t=0;t<900;t++)n[t*3]=(e()-.5)*90,n[t*3+1]=e()*9+.2,n[t*3+2]=(e()-.5)*44,r[t]=e();t.setAttribute(`position`,new Qn(n,3)),t.setAttribute(`aSeed`,new Qn(r,1));let i=new ea({transparent:!0,depthWrite:!1,blending:2,uniforms:{uTime:{value:0},uOpacity:{value:.5}},vertexShader:`
        attribute float aSeed;
        uniform float uTime;
        varying float vA;
        void main() {
          vec3 p = position;
          p.y += sin(uTime * 0.22 + aSeed * 33.0) * 0.5;
          p.x += sin(uTime * 0.12 + aSeed * 17.0) * 1.4;
          p.z += cos(uTime * 0.1 + aSeed * 23.0) * 1.0;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          gl_Position = projectionMatrix * mv;
          gl_PointSize = clamp((1.0 + aSeed * 2.4) * (10.0 / max(1.5, -mv.z)), 1.0, 14.0);
          vA = (0.07 + aSeed * 0.2) * smoothstep(46.0, 8.0, -mv.z);
        }
      `,fragmentShader:`
        varying float vA;
        void main() {
          vec2 c = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.05, length(c));
          gl_FragColor = vec4(0.86, 0.8, 0.66, a * vA);
        }
      `}),a=new Oi(t,i);a.frustumCulled=!1,a.renderOrder=8,this.root.add(a),this.dust={points:a,mat:i,base:n.slice()};let o=Du();this.steam=[];for(let[t,n]of[[-12,2.3],[41,3.1],[50,-24],[-37,-3.4]])for(let r=0;r<3;r++){let i=new Rr(new wr({map:o,color:12567224,transparent:!0,opacity:.1,depthWrite:!1}));i.position.set(t+jl(e,-.4,.4),.5+r*.8,n+jl(e,-.4,.4)),i.scale.setScalar(1.6+r*1.2),i.userData={baseX:i.position.x,baseZ:i.position.z,phase:e()*10,rise:.16+e()*.12,index:r},this.root.add(i),this.steam.push(i)}for(let t of this.flames){let n=new pr,r=new Float32Array(78);for(let t=0;t<26;t++)r[t*3]=(e()-.5)*.5,r[t*3+1]=e()*1.6,r[t*3+2]=(e()-.5)*.5;n.setAttribute(`position`,new Qn(r,3));let i=new Oi(n,new Ci({color:16751178,size:.045,transparent:!0,opacity:.8,depthWrite:!1,blending:2}));i.position.set(t.group.position.x,.6,t.group.position.z),this.root.add(i),t.embers=i,t.emberSeed=Array.from({length:26},()=>e())}this.crows=[];let s=new Gr({color:2434079,transparent:!0,opacity:.85,side:2});for(let t=0;t<7;t++){let t=new un,n=new Ui(.9,.16),r=new ri(n,s),i=new ri(n,s);r.position.x=-.44,i.position.x=.44,t.add(r,i),t.position.set(jl(e,-40,40),jl(e,16,26),jl(e,-30,10)),t.userData={radius:jl(e,18,42),speed:jl(e,.1,.24),phase:e()*X*2,cx:t.position.x,cz:t.position.z,w1:r,w2:i,flap:jl(e,3,7)},this.root.add(t),this.crows.push(t)}for(let[e,t,n]of[[-15,-8.75,0],[6.8,-8.76,0]]){let r=this.batches;r.plane(`fabric`,2.4,1.1,e,2.5,t,`#8b8d7a`,{rotY:n,rotZ:.02}),r.box(`metal`,2.5,.04,.04,e,3.06,t,`#5b5c50`,{rotY:n})}}buildDecals(){let e=this.rng;for(let[t,n,r]of[[2,-7.9,1.5],[3.6,-7.2,1.1],[1.2,-5,1.8],[-1,-3.2,1.3],[24,-7.6,2.2],[28.4,-6.4,1.6],[31.2,-12,1.4],[17,-6.8,1.2],[-22,-7.4,1.7],[-25.4,-6.2,1.2],[-28,-15,1.6],[-3,8.4,1.4],[-9,9.2,1.2],[10.5,8.6,1.3],[12,8.9,1.5],[54,1,1.8],[56.5,-1,1.4],[51.8,-4,1.2]])this.addGroundDecal(e()<.5?`blood`:`blood2`,t,n,r,e()*X,.029);for(let[t,n,r,i]of[[1.2,-6,1.1,3],[26,-8.4,2.4,3.6],[-23.8,-8,1.5,2.4],[55.4,1.8,.4,2.8]])for(let a=0;a<4;a++)this.addGroundDecal(`blood2`,t+Math.cos(r)*a*i/4,n+Math.sin(r)*a*i/4,.55+e()*.35,r,.03,`#b0a79a`);for(let t=0;t<110;t++){let t=jl(e,-86,86),n=e()<.55?(e()<.5?-1:1)*jl(e,5.8,8.6):jl(e,-5.2,5.2),r=e();r<.4?this.addGroundDecal(`decalTrash`,t,n,jl(e,.35,.8),e()*X,.028+e()*.004):r<.72?this.addGroundDecal(`decalLeaves`,t,n,jl(e,.5,1.1),e()*X,.027):this.addGroundDecal(`decalOil`,t,n,jl(e,.8,1.8),e()*X,.026,`#8a8172`)}for(let t=0;t<24;t++){let t=jl(e,-80,80),n=jl(e,-7,7);this.addGroundDecal(`crack`,t,n,jl(e,1.2,3.2),e()*X,.029)}for(let[e,t,n]of[[-18,1.4,.02],[11,-1.6,.02],[45.5,1.2,1.57]])for(let r of[-.55,.55]){let[i,a]=Q(e,t,n,0,r);this.addGroundDecal(`decalOil`,i,a,5,n+Z,.027,`#5f5a51`)}let t=-2.9,n=-19.8,r=new Gr({color:14144194,transparent:!0,opacity:.4,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}),i=new ri(new Wi(.42,.47,20),r);i.rotation.x=-Z,i.position.set(t,.032,n),this.root.add(i);for(let[e,i,a,o]of[[0,-.9,.34,.7],[.34,-.45,.16,.5],[-.34,-.4,.16,.45],[0,.75,.28,.9]]){let s=new ri(new Ui(a,o),r);s.rotation.x=-Z,s.rotation.z=.1,s.position.set(t+e,.032,n+i),this.root.add(s)}for(let[t,n,r,i]of[[-4.65,1.8,-14,Z],[7.4,1.5,-19,-Z],[13.6,2.4,-8.84,0],[26.8,2.2,-8.85,0],[-18.2,1.6,-8.84,0]])for(let a=0;a<5;a++)this.batches.plane(`dark`,.1,.1,t+jl(e,-.7,.7),n+jl(e,-.5,.5),r+.01,`#1a1916`,{rotY:i,rotZ:e()*X});this.batches.plane(`paint`,3.2,.28,50,.03,2.2,`#c7b784`,{rotX:-Z,rotZ:Z})}update(e,t,n,r){for(let t of this.doors){let n=t.open?1.38*t.opensIn:0;t.angle+=(n-t.angle)*Math.min(1,e*7.5),t.group.rotation.y=t.baseAngle+t.angle,t.collider&&(t.collider.enabled=Math.abs(t.angle)<.3),t.rec&&(t.rec.action=t.locked?`LOCKED`:t.open?`CLOSE`:`OPEN`)}for(let e of this.flickerLights){let n=Math.sin(t*9.3+e.seed)*Math.sin(t*2.1+e.seed*.7)<-.72?.18:1;e.light.intensity=e.base*(.82+.18*Math.sin(t*3+e.seed))*n}for(let e of this.streetLamps){let n=Math.sin(t*2.2+e.seed);e.light.intensity=e.base*(.88+n*.08+(n<-.96?-.7:0))}for(let n of this.flames){let r=t*7+n.seed;for(let e=0;e<n.sprites.length;e++){let t=n.sprites[e],i=.78+Math.sin(r+e*1.7)*.16+Math.sin(r*2.3+e)*.08;t.scale.setScalar(n.scale*(.62-e*.05)*i),t.position.y=e*.2+Math.sin(r*1.4+e)*.05,t.position.x=Math.sin(r*.9+e*2)*.05}if(n.light.intensity=n.base*(.7+Math.sin(r*1.1)*.16+Math.sin(r*3.7)*.1),n.embers){let r=n.embers.geometry.attributes.position;for(let i=0;i<r.count;i++){let a=r.getY(i)+e*(.5+n.emberSeed[i]*.8);a>2&&(a=0),r.setY(i,a),r.setX(i,Math.sin(t*1.4+i)*.22)}r.needsUpdate=!0}}for(let e of this.smoke){let n=e.userData;e.position.y=n.baseY+Math.sin(t*n.speed+n.phase)*1.2+(t*.06+n.phase)%6,e.position.x=n.baseX+Math.sin(t*.07+n.phase)*2.4,e.material.opacity=.11+Math.sin(t*.4+n.phase)*.04}if(this.steam)for(let n of this.steam){let r=n.userData;n.position.y+=e*r.rise,n.position.y>3.4&&(n.position.y=.4+r.index*.3),n.position.x=r.baseX+Math.sin(t*.35+r.phase)*.35,n.position.z=r.baseZ+Math.cos(t*.28+r.phase)*.3,n.material.opacity=.055*(1-(n.position.y-.4)/3.2)}this.dust&&(this.dust.mat.uniforms.uTime.value=t);for(let e of this.glows){let n=.85+Math.sin(t*1.7+e.seed)*.12;e.sprite.material.opacity=e.base*n}for(let n of this.crows){let r=n.userData;r.phase+=e*r.speed,n.position.x=r.cx+Math.cos(r.phase)*r.radius,n.position.z=r.cz+Math.sin(r.phase)*r.radius*.6,n.position.y=18+Math.sin(r.phase*1.3)*2.2,n.rotation.y=-r.phase+Z;let i=Math.sin(t*r.flap+r.phase)*.5;r.w1.rotation.z=i,r.w2.rotation.z=-i}if(n&&this.pointLights.length&&(this._lightTimer=(this._lightTimer??0)-e,this._lightTimer<=0)){this._lightTimer=.35;let e=this.pointLights.map(e=>({l:e,d:(e.position.x-n.x)**2+(e.position.z-n.z)**2})).sort((e,t)=>e.d-t.d);for(let t=0;t<e.length;t++)e[t].l.visible=t<7}}focus(e,t=3.4){if(!e||!this.interactRoots.length)return this.focusRecord&&this.highlightContainer(this.focusRecord.container,!1),this.focusRecord=null,null;this._ray.setFromCamera({x:0,y:0},e),this._ray.far=t;let n=this._ray.intersectObjects(this.interactRoots,!0),r=null;for(let e of n){let t=e.object.userData.interact;if(t){r=t;break}}return r!==this.focusRecord&&(this.focusRecord&&this.highlightContainer(this.focusRecord.container,!1),r&&this.highlightContainer(r.container,!0),this.focusRecord=r),r}interact(e){if(!e)return null;if(e.type===`door`){let t=e.door;return t?t.locked?{type:`locked`,label:t.label}:(t.open=!t.open,{type:`door`,open:t.open,label:t.label}):null}if(e.type===`container`){let t=e.container;if(!t)return null;if(t.searched)return{type:`empty`,label:t.name};t.searched=!0,e.action=`SEARCHED`,t.material&&(t.material.emissive.set(`#000000`),t.material.emissiveIntensity=0);let n=t.loot.map(e=>({...e}));return t.loot=[],{type:`loot`,label:t.name,loot:n}}return null}inSafeZone(e){for(let t of this.safeZones)if((e.x-t.x)**2+(e.z-t.z)**2<t.r*t.r)return t;return null}nearestQuest(e,t){let n=this.questPoints[e];return n?{point:n,distance:Math.hypot(n.x-t.x,n.z-t.z)}:null}dispose(){this.scene.remove(this.root)}},Bu=1.66,Vu=1.12,Hu=.34,Uu=1.78,Wu=1.28,Gu=class{constructor(e,t,n={}){this.camera=e,this.world=t,this.canvas=n.canvas||document.getElementById(`game`),this.pos=new H(18,0,3.8),this.vel=new H,this.yaw=Math.PI/2,this.pitch=-.035,this.sensitivity=n.sensitivity??.0022,this.eye=Bu,this.crouching=!1,this.crouchAmount=0,this.grounded=!0,this.gravity=24,this.jumpSpeed=6.2,this.moving=!1,this.sprinting=!1,this.speed=0,this.bobTime=0,this.bobAmount=0,this.stepTimer=0,this.footstepCount=0,this.locked=!1,this.enabled=!0,this.frozen=!1,this.trauma=0,this.shake=new H,this.keys=Object.create(null),this.noise=0,this.surface=`stone`,this._tmp=new H,this._fwd=new H,this._right=new H,this._focusTimer=0,this.focus=null,this.onStep=null,this.onInteractFocus=null,this.onLockChange=null,this.onJump=null,this.health=100,this.maxHealth=100,this.stamina=100,this.maxStamina=100,this.hunger=86,this.thirst=74,this.infection=0,this.staminaDelay=0,this.healthFlash=0,this.alive=!0,this.inSafeZone=!1,this.safeZone=null,this.distanceWalked=0,this.kills=0,this.deaths=0,this.timeAlive=0,this.lastDamage=-99,this.exhausted=!1,this.rng=q(77),this.bind(),this.applyCamera(0)}bind(){this._onKeyDown=e=>{if(e.repeat)return;let t=e.code;this.keys[t]=!0,t===`Space`&&this.enabled&&this.locked&&this.grounded&&!this.frozen&&(this.vel.y=this.jumpSpeed,this.grounded=!1,this.stamina=Math.max(0,this.stamina-6),this.addTrauma(.16),this.onJump?.()),(t===`ControlLeft`||t===`ControlRight`)&&(this.crouching=!0),[`Tab`,`Space`,`KeyE`,`KeyQ`,`KeyF`,`KeyR`,`Digit1`,`Digit2`,`Digit3`,`Digit4`,`Digit5`,`Digit6`,`Digit7`,`Digit8`].includes(t)&&e.preventDefault()},this._onKeyUp=e=>{this.keys[e.code]=!1,(e.code===`ControlLeft`||e.code===`ControlRight`)&&(this.crouching=!1)},this._onMouseMove=e=>{this.locked&&this.enabled&&(this.yaw-=e.movementX*this.sensitivity,this.pitch-=e.movementY*this.sensitivity,this.pitch=J(this.pitch,-1.45,1.45))},this._onLockChange=()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange?.(this.locked)},this._onBlur=()=>{for(let e in this.keys)this.keys[e]=!1;this.crouching=!1},window.addEventListener(`keydown`,this._onKeyDown),window.addEventListener(`keyup`,this._onKeyUp),window.addEventListener(`blur`,this._onBlur),document.addEventListener(`mousemove`,this._onMouseMove),document.addEventListener(`pointerlockchange`,this._onLockChange)}lock(){if(document.pointerLockElement!==this.canvas){let e=this.canvas.requestPointerLock?.();e&&e.catch&&e.catch(()=>{})}}unlock(){document.pointerLockElement&&document.exitPointerLock()}setPosition(e,t,n){this.pos.set(e,t,n),this.vel.set(0,0,0),this.applyCamera(0)}get eyeHeight(){return kl(Bu,Vu,this.crouchAmount)}get height(){return kl(Uu,Wu,this.crouchAmount)}get forward(){return this._fwd.set(-Math.sin(this.yaw),0,-Math.cos(this.yaw))}get right(){return this._right.set(Math.cos(this.yaw),0,-Math.sin(this.yaw))}addTrauma(e){this.trauma=J(this.trauma+e,0,1)}addStamina(e){this.stamina=J(this.stamina+e,0,this.maxStamina)}useStamina(e){return this.stamina<e?!1:(this.stamina-=e,this.staminaDelay=1.3,!0)}hurt(e,{infection:t=0,source:n=null,force:r=0}={}){this.alive&&(this.health=J(this.health-e,0,this.maxHealth),this.infection=J(this.infection+t,0,100),this.lastDamage=this.timeAlive,this.healthFlash=1,this.addTrauma(J(e/34+(r||0),.12,.85)),this.onHurt&&this.onHurt(e,n),this.health<=0&&this.die(n))}heal(e){this.health=J(this.health+e,0,this.maxHealth),this.onHeal&&this.onHeal(e)}die(e=`the infected`){this.alive&&(this.alive=!1,this.enabled=!1,this.deaths++,this.vel.set(0,0,0),this.onDeath?.(e))}respawn(e=18,t=3.8){this.alive=!0,this.enabled=!0,this.health=this.maxHealth,this.stamina=this.maxStamina,this.infection=Math.max(0,this.infection-35),this.hunger=Math.max(35,this.hunger),this.thirst=Math.max(35,this.thirst),this.setPosition(e,0,t),this.pitch=-.03,this.yaw=Math.PI/2,this.trauma=0}surfaceAt(e,t){return Math.abs(t)<5.5?`asphalt`:Math.abs(t)<9?`stone`:e>-14&&e<8&&t>-22&&t<-9||e>-14&&e<2&&t>9&&t<25||e>6&&e<18&&t>9&&t<20||e>13&&e<41&&t>-34&&t<-9||e>-34&&e<-12&&t>-25&&t<-9||e>-34&&e<-20&&t>9&&t<20?`interior`:`stone`}resolveCollisions(){let e=Hu,t=this.pos.y,n=t+this.height,r=this.world.colliders;for(let i=0;i<2;i++)for(let i of r){if(!i.enabled||i.y1<=t+.25||i.y0>=n)continue;let r=i.minX-e,a=i.maxX+e,o=i.minZ-e,s=i.maxZ+e;if(this.pos.x<=r||this.pos.x>=a||this.pos.z<=o||this.pos.z>=s)continue;let c=this.pos.x-r,l=a-this.pos.x,u=this.pos.z-o,d=s-this.pos.z,f=Math.min(c,l,u,d);f===c?this.pos.x=r:f===l?this.pos.x=a:f===u?this.pos.z=o:this.pos.z=s}this.pos.x=J(this.pos.x,-91,91),this.pos.z=J(this.pos.z,-57,57)}update(e,t){if(this.timeAlive+=e,!this.alive){this.applyCamera(e);return}let n=this.enabled&&this.locked&&!this.frozen,r=this.keys,i=0,a=0;n&&((r.KeyW||r.ArrowUp)&&(a+=1),(r.KeyS||r.ArrowDown)&&--a,(r.KeyD||r.ArrowRight)&&(i+=1),(r.KeyA||r.ArrowLeft)&&--i);let o=i!==0||a!==0,s=n&&o&&a>0&&(r.ShiftLeft||r.ShiftRight)&&!this.crouching&&this.stamina>2;this.sprinting=s,this.moving=o,this.crouchAmount=Al(this.crouchAmount,+!!this.crouching,12,e);let c=this.crouching?2.15:s?7:4.25,l=this.grounded?15:4.5,u=i,d=a,f=Math.hypot(u,d)||1,p=this.forward,m=this.right,h=(p.x*d+m.x*u)/f,g=(p.z*d+m.z*u)/f,_=o?h*c:0,v=o?g*c:0;if(this.vel.x=Al(this.vel.x,_,l,e),this.vel.z=Al(this.vel.z,v,l,e),this.speed=Math.hypot(this.vel.x,this.vel.z),this.vel.y-=this.gravity*e,this.pos.addScaledVector(this.vel,e),this.pos.y<=0?(this.pos.y=0,this.vel.y=0,this.grounded=!0):this.grounded=!1,this.resolveCollisions(),s&&this.speed>1.2)this.stamina=Math.max(0,this.stamina-17*e),this.staminaDelay=.9,this.stamina<=0&&(this.exhausted=!0);else if(this.staminaDelay=Math.max(0,this.staminaDelay-e),this.staminaDelay<=0){let t=this.crouching?19:this.grounded?12.5:7;this.stamina=Math.min(this.maxStamina,this.stamina+t*e),this.stamina>35&&(this.exhausted=!1)}let y=this.speed>.35;this.hunger=J(this.hunger-e*(this.sprinting?.075:y?.05:.03),0,100),this.thirst=J(this.thirst-e*(this.sprinting?.11:y?.075:.045),0,100),(this.hunger<=0||this.thirst<=0)&&(this.health=Math.max(0,this.health-e*((this.hunger<=0?.55:0)+(this.thirst<=0?.75:0))),this.health<=0&&this.die(`dehydration`)),this.infection>60&&(this.health=Math.max(0,this.health-e*(this.infection-60)*.006),this.health<=0&&this.die(`infection`));let b=this.world.inSafeZone(this.pos);if(this.safeZone=b,this.inSafeZone=!!b,b&&(this.health=Math.min(this.maxHealth,this.health+e*1.4),this.infection>0&&(this.infection=Math.max(0,this.infection-e*.5))),y&&this.grounded){let t=this.crouching?.78:this.sprinting?.34:.52;this.bobTime+=e*(this.sprinting?12.5:this.crouching?5.2:8),this.bobAmount=Al(this.bobAmount,1,7,e),this.stepTimer-=e,this.distanceWalked+=this.speed*e,this.surface=this.surfaceAt(this.pos.x,this.pos.z),this.stepTimer<=0&&(this.stepTimer=t,this.footstepCount++,this.onStep?.({sprint:this.sprinting,crouch:this.crouching,surface:this.surface,volume:this.crouching?.28:this.sprinting?1:.62})),this.noise=Al(this.noise,this.crouching?.08:this.sprinting?.95:.34,6,e)}else this.bobAmount=Al(this.bobAmount,0,6,e),this.noise=Al(this.noise,0,3.5,e);if(this._focusTimer-=e,this._focusTimer<=0&&n){this._focusTimer=.1;let e=this.focus;this.focus=this.world.focus(this.camera,3.25),e!==this.focus&&this.onInteractFocus?.(this.focus)}else!n&&this.focus&&(this.focus=null,this.world.focus(null),this.onInteractFocus?.(null));this.healthFlash=Math.max(0,this.healthFlash-e*1.5),this.applyCamera(e)}applyCamera(e){let t=this.bobAmount,n=Math.sin(this.bobTime*2)*.028*t,r=Math.cos(this.bobTime)*.035*t,i=Math.sin(performance.now()*.0011)*.006,a=this.eyeHeight+n+i-(this.alive?0:Math.min(.5,e*.1));this.trauma=Math.max(0,this.trauma-e*1.35);let o=this.trauma*this.trauma,s=performance.now()*.001;this.shake.set((Math.sin(s*37.1)+Math.sin(s*19.3))*.5*o*.42,(Math.sin(s*41.7)+Math.sin(s*23.9))*.5*o*.34,(Math.sin(s*29.3)+Math.sin(s*13.1))*.5*o*.2);let c=Math.cos(this.yaw)*r,l=-Math.sin(this.yaw)*r;this.camera.position.set(this.pos.x+c+this.shake.x,this.pos.y+a+this.shake.y,this.pos.z+l+this.shake.z),this.camera.rotation.set(this.pitch+this.shake.z*.12,this.yaw,this.shake.x*.16,`YXZ`),this._tmp.copy(this.pos),this._tmp.y+=this.eyeHeight}status(){return{health:this.health,stamina:this.stamina,hunger:this.hunger,thirst:this.thirst,infection:this.infection,safe:this.inSafeZone,alive:this.alive}}dispose(){window.removeEventListener(`keydown`,this._onKeyDown),window.removeEventListener(`keyup`,this._onKeyUp),window.removeEventListener(`blur`,this._onBlur),document.removeEventListener(`mousemove`,this._onMouseMove),document.removeEventListener(`pointerlockchange`,this._onLockChange)}},Ku={walker:{name:`Walker`,health:110,speed:1.15,chaseSpeed:1.65,detect:15,reach:1.5,damage:13,attackTime:.75,cooldown:1.55,scale:1,radius:.36,infection:3.2,label:`Shambler`,score:10,headMul:2,hunch:.2},infected:{name:`Infected`,health:68,speed:1.5,chaseSpeed:4.15,detect:19,reach:1.35,damage:9,attackTime:.5,cooldown:.95,scale:.96,radius:.32,infection:5.5,label:`Infected`,score:14,headMul:2.2,hunch:.32},brute:{name:`Brute`,health:340,speed:.9,chaseSpeed:1.5,detect:14,reach:1.85,damage:34,attackTime:1,cooldown:2.1,scale:1.34,radius:.48,infection:8,label:`Brute`,score:40,headMul:1.45,hunch:.12},screamer:{name:`Screamer`,health:85,speed:1.35,chaseSpeed:2.2,detect:24,reach:1.3,damage:7,attackTime:.55,cooldown:1.4,scale:.93,radius:.31,infection:6.5,label:`Screamer`,score:22,headMul:2.1,hunch:.24,scream:!0}},qu=[`#969a83`,`#9a9480`,`#8f9684`,`#a19a83`,`#8b907c`,`#a29a86`],Ju=[`#5b5749`,`#665243`,`#4e5550`,`#6a5f4c`,`#56544a`,`#705a48`,`#4b5048`];function Yu(){return new Fi(1,1,1)}var Xu=class{constructor(e,t,n,r={}){this.scene=e,this.world=t,this.player=n,this.root=new un,this.root.name=`infected`,e.add(this.root),this.zombies=[],this.corpses=[],this.onEvent=r.onEvent||null,this.rng=q(9182),this.maxAlive=r.maxAlive??18,this.geo={box:Yu()},this.spawnTimer=0,this.blockers=t.colliders.filter(e=>(e.tag===`wall`||e.tag===`building`||e.tag===`door`)&&e.y1>1.3),this.initBlood(),this.spawnInitial()}initBlood(){let e=new Float32Array(780),t=new Float32Array(780);for(let n=0;n<260;n++)e[n*3+1]=-100,t[n*3]=.34,t[n*3+1]=.06,t[n*3+2]=.045;let n=new pr;n.setAttribute(`position`,new Qn(e,3)),n.setAttribute(`color`,new Qn(t,3));let r=new Ci({size:.07,vertexColors:!0,transparent:!0,opacity:.95,depthWrite:!1});this.bloodPoints=new Oi(n,r),this.bloodPoints.frustumCulled=!1,this.bloodPoints.renderOrder=6,this.scene.add(this.bloodPoints),this.blood={pos:e,vel:new Float32Array(780),life:new Float32Array(260),cursor:0,n:260,attr:n.attributes.position}}spawnBlood(e,t=10,n=null){let r=this.blood;for(let i=0;i<t;i++){let t=r.cursor++%r.n,i=this.rng()*Math.PI*2,a=.8+this.rng()*2.6;r.pos[t*3]=e.x,r.pos[t*3+1]=e.y,r.pos[t*3+2]=e.z,r.vel[t*3]=Math.cos(i)*a*.5+(n?n.x*a*.6:0),r.vel[t*3+1]=1+this.rng()*3,r.vel[t*3+2]=Math.sin(i)*a*.5+(n?n.z*a*.6:0),r.life[t]=.55+this.rng()*.7}}updateBlood(e){let t=this.blood,n=!1;for(let r=0;r<t.n;r++)t.life[r]<=0||(n=!0,t.life[r]-=e,t.life[r]<=0?t.pos[r*3+1]=-100:(t.vel[r*3+1]-=9.8*e,t.pos[r*3]+=t.vel[r*3]*e,t.pos[r*3+1]+=t.vel[r*3+1]*e,t.pos[r*3+2]+=t.vel[r*3+2]*e,t.pos[r*3+1]<.03&&(t.pos[r*3+1]=.03,t.vel[r*3+1]*=-.18,t.vel[r*3]*=.7,t.vel[r*3+2]*=.7)));n&&(t.attr.needsUpdate=!0)}makePart(e,t,n,r,i,a,o,s){let c=new ri(this.geo.box,t);return c.scale.set(n,r,i),c.position.set(a,o,s),c.castShadow=!1,c.receiveShadow=!1,e.add(c),c}createMesh(e){let t=Ku[e],n=this.rng,r=Nl(n,qu),i=Nl(n,Ju),a=new na({color:r,roughness:.95,metalness:0,envMapIntensity:.15}),o=new na({color:i,roughness:.98,metalness:0,envMapIntensity:.12}),s=new na({color:e===`brute`?`#3c3630`:`#37352e`,roughness:.95}),c=new Gr({color:e===`infected`?`#c9d6a8`:e===`screamer`?`#e0cba0`:`#b9c4a2`});a.userData.base=new W(r),o.userData.base=new W(i);let l=new un;l.scale.setScalar(t.scale);let u=new un;u.position.y=.9,l.add(u);let d=new un;u.add(d),d.rotation.x=t.hunch,this.makePart(d,o,.52,.64,.3,0,.29,0),this.makePart(d,o,.44,.2,.32,0,-.04,0),e===`brute`&&(this.makePart(d,o,.64,.22,.36,0,.52,0),this.makePart(d,a,.2,.28,.2,0,.18,.18)),e===`infected`&&(this.makePart(d,a,.24,.22,.02,.08,.2,.16),this.makePart(d,s,.18,.04,.02,.08,.28,.17),this.makePart(d,s,.18,.04,.02,.08,.2,.17));let f=new un;f.position.set(0,.72,.015),d.add(f),this.makePart(f,a,.25,.27,.24,0,.02,0),this.makePart(f,a,.19,.1,.17,0,-.13,.035),this.makePart(f,s,.075,.035,.03,0,.06,.125);let p=this.makePart(f,c,.045,.032,.015,-.062,.075,.122),m=this.makePart(f,c,.045,.032,.015,.062,.075,.122);e===`brute`&&(this.makePart(f,a,.06,.12,.16,-.14,.04,0),this.makePart(f,a,.06,.12,.16,.14,.04,0)),e===`screamer`?this.makePart(f,s,.09,.08,.03,0,-.06,.12):this.makePart(f,s,.1,.022,.02,0,-.06,.122),n()<.7&&this.makePart(f,s,.24,.06,.23,0,.145,-.01);let h=[];for(let e of[-1,1]){let t=new un;t.position.set(e*.34,.52,0),d.add(t),this.makePart(t,o,.13,.32,.14,0,-.15,0),this.makePart(t,a,.115,.34,.12,0,-.43,.015),this.makePart(t,a,.115,.12,.13,0,-.62,.03),h.push(t)}let g=[];for(let e of[-1,1]){let t=new un;t.position.set(e*.15,.9,0),l.add(t),this.makePart(t,s,.18,.44,.18,0,-.22,0),this.makePart(t,s,.16,.4,.16,0,-.62,0),this.makePart(t,s,.17,.1,.28,0,-.85,.055),g.push(t)}if(n()<.75){let e=this.makePart(d,s,.16+n()*.18,.12+n()*.2,.02,(n()-.5)*.3,.15+n()*.3,.16);e.material=new na({color:`#4a1512`,roughness:.6})}let _=new Gr({map:this.shadowTexture(),transparent:!0,opacity:.5,depthWrite:!1,color:0}),v=new ri(new Ui(.95*t.scale,.62*t.scale),_);return v.rotation.x=-Math.PI/2,v.position.y=.02,l.add(v),this.root.add(l),{group:l,upper:u,torso:d,head:f,arms:h,legs:g,skin:a,cloth:o,eye:[p,m],tools:[],shadow:v}}shadowTexture(){if(!this._shadowTex){let e=document.createElement(`canvas`);e.width=e.height=64;let t=e.getContext(`2d`),n=t.createRadialGradient(32,32,2,32,32,31);n.addColorStop(0,`rgba(0,0,0,0.72)`),n.addColorStop(.65,`rgba(0,0,0,0.28)`),n.addColorStop(1,`rgba(0,0,0,0)`),t.fillStyle=n,t.fillRect(0,0,64,64),this._shadowTex=new ji(e)}return this._shadowTex}spawn(e,t,n,r=0){if(this.zombies.filter(e=>!e.dead).length>=this.maxAlive)return null;let i=Ku[e]||Ku.walker,a=this.createMesh(e);i.scale;let o={type:e,t:i,parts:a,group:a.group,pos:new H(t,0,n),vel:new H,rot:r||this.rng()*Math.PI*2,health:i.health,maxHealth:i.health,state:`idle`,phase:this.rng()*10,cooldown:.5+this.rng()*1.5,attackT:-1,flash:0,stagger:0,dead:!1,deathT:0,home:new H(t,0,n),wander:new H(t,0,n),wanderTimer:0,alert:0,groanTimer:2+this.rng()*6,heard:null,screamTimer:3,radius:i.radius,speedMul:.9+this.rng()*.22,hasLooted:!1,corpseMade:!1,animSpeed:1,lastHitDir:new H};return o.group.position.copy(o.pos),o.group.rotation.y=o.rot,this.zombies.push(o),o}spawnInitial(){let e=this.world.spawnPoints||[];for(let t of e)this.spawn(t.type||`walker`,t.x,t.z,t.rot||0);for(let[e,t,n]of[[-4.5,-1.8,`walker`],[-24.5,1.6,`walker`],[31,1.2,`infected`],[54,-1.4,`walker`],[44.8,13,`infected`],[-42,3.7,`walker`],[75,-2.2,`walker`],[61,7.4,`infected`],[-58,-1,`walker`],[10,20,`walker`],[-31,27.5,`walker`],[36,28,`infected`]])this.spawn(n,e,t)}aliveCount(){return this.zombies.reduce((e,t)=>e+ +!t.dead,0)}lineBlocked(e,t,n,r){let i=n-e,a=r-t,o=Math.min(26,Math.ceil(Math.hypot(i,a)/1.1));for(let n=1;n<o;n++){let r=n/o,s=e+i*r,c=t+a*r;for(let e of this.blockers)if(s>e.minX-.15&&s<e.maxX+.15&&c>e.minZ-.15&&c<e.maxZ+.15)return!0}return!1}findBlocked(e,t,n){let r=e.radius;for(let i of this.world.colliders){if(!i.enabled||i.tag===`bounds`||i.y1<.45||i.y0>1.5)continue;let a=J(e.pos.x,i.minX,i.maxX),o=J(e.pos.z,i.minZ,i.maxZ);if((t-a)**2+(n-o)**2<r*r)return i}return null}moveZombie(e,t,n){let r=e.pos.x,i=e.pos.z;e.pos.x+=t;let a=this.findBlocked(e,e.pos.x,e.pos.z);return a&&(e.pos.x=t>0?a.minX-e.radius:a.maxX+e.radius),e.pos.z+=n,a=this.findBlocked(e,e.pos.x,e.pos.z),a&&(e.pos.z=n>0?a.minZ-e.radius:a.maxZ+e.radius),e.pos.x=J(e.pos.x,-90,90),e.pos.z=J(e.pos.z,-56,56),Math.hypot(e.pos.x-r,e.pos.z-i)}alertAt(e,t,n,r=null){for(let i of this.zombies)i.dead||Math.hypot(i.pos.x-e,i.pos.z-t)<n&&(i.alert=Math.max(i.alert,8),i.state=`chase`,i.heard=new H(e,0,t),r||(i.groanTimer=Math.min(i.groanTimer,.4+this.rng())))}raycast(e,t,n=40){let r=null;for(let i of this.zombies){if(i.dead)continue;let a=i.t.scale,o=new H(i.pos.x,i.pos.y+1.02*a,i.pos.z),s=new H(i.pos.x,i.pos.y+1.66*a,i.pos.z),c=this.raySphere(e,t,o,.42*a),l=this.raySphere(e,t,s,.235*a),u=null,d=!1;l!==null&&l<=n&&(u=l,d=!0),c!==null&&c<=n&&(u===null||c<u)&&(u=c,d=!1),u!==null&&(!r||u<r.distance)&&(r={zombie:i,distance:u,headshot:d,point:e.clone().addScaledVector(t,u),type:i.type})}return r}raySphere(e,t,n,r){let i=e.x-n.x,a=e.y-n.y,o=e.z-n.z,s=i*t.x+a*t.y+o*t.z,c=i*i+a*a+o*o-r*r,l=s*s-c;if(l<0)return null;let u=-s-Math.sqrt(l);return u>=0?u:null}damage(e,t,{headshot:n=!1,point:r=null,dir:i=null,force:a=0,source:o=`melee`}={}){if(!e||e.dead)return null;let s=t*(n?e.t.headMul:1);e.health-=s,e.flash=.16,e.alert=Math.max(e.alert,10),e.state!==`chase`&&(e.state=`chase`),i&&e.lastHitDir.copy(i);let c=r||new H(e.pos.x,1.2*e.t.scale,e.pos.z);if(this.spawnBlood(c,n?14:9,i),this.onEvent?.({type:`hit`,headshot:n,point:c,zombie:e,source:o}),e.health<=0)return this.kill(e,i),{killed:!0,damage:s,headshot:n,zombie:e};let l=n?.5:a>20?.4:.16;if(e.stagger=Math.max(e.stagger,l),i&&a>0){let t=a*.025;this.moveZombie(e,i.x*t,i.z*t)}return this.onEvent?.({type:`zombieHurt`,zombie:e,headshot:n}),{killed:!1,damage:s,headshot:n,zombie:e}}kill(e,t=null){e.dead||(e.dead=!0,e.state=`dead`,e.deathT=0,e.group.rotation.z=0,e.parts.skin.emissive?.set(`#000000`),this.player.kills++,this.onEvent?.({type:`kill`,zombie:e}),this.alertAt(e.pos.x,e.pos.z,8,e),e.corpseLoot=Nu(`corpse`,this.rng,{min:1,max:3}),e.type===`brute`&&e.corpseLoot.push(ju(`repair_kit`,1)),e.type===`infected`&&this.rng()<.4&&e.corpseLoot.push(ju(`pistol_ammo`,2)))}makeCorpse(e){if(e.corpseMade)return;e.corpseMade=!0,e.group.visible=!1;let t=e.pos.x,n=e.pos.z,r=e.rot;try{let i=this.world.addContainer({type:`corpse`,name:e.t.label,label:`Body of a ${e.t.label}`,x:t,z:n,rotY:r,table:`corpse`,items:e.corpseLoot||null});i.zombieCorpse=!0}catch(e){console.warn(`corpse failed`,e)}}update(e,t){this.updateBlood(e);let n=this.player,r=n.pos,i=new H(n.pos.x,n.pos.y+1.2,n.pos.z);for(let a of this.zombies){if(a.dead){a.deathT+=e;let t=Math.min(1,a.deathT/.8);a.group.rotation.z=a.group.rotation.z+(1.35*(a.lastHitDir.x>0?-1:1)-a.group.rotation.z)*Math.min(1,e*5),a.group.position.y=-.1*t,a.parts.shadow.visible=!1,a.deathT>1.5&&!a.corpseMade&&this.makeCorpse(a);continue}let o=r.x-a.pos.x,s=r.z-a.pos.z,c=Math.hypot(o,s);a.alert=Math.max(0,a.alert-e),a.cooldown=Math.max(0,a.cooldown-e),a.stagger=Math.max(0,a.stagger-e),a.flash=Math.max(0,a.flash-e),a.groanTimer-=e,a.screamTimer-=e;let l=1+(n.noise||0)*2.2+(n.sprinting?.4:0),u=a.t.detect*l*(n.crouching?.72:1);n.alive&&c<u&&(c<4.5||!this.lineBlocked(a.pos.x,a.pos.z,r.x,r.z))&&(a.state===`idle`&&(a.state=`chase`,a.groanTimer=Math.min(a.groanTimer,.3+this.rng()*1.2)),a.alert=Math.max(a.alert,3.5)),n.alive||(a.alert=0),a.alert<=0&&c>22&&(a.state=`idle`),a.t.scream&&a.state===`chase`&&a.screamTimer<=0&&c<16&&(a.screamTimer=7+this.rng()*5,a.attackT=.01,this.alertAt(a.pos.x,a.pos.z,26,a),this.onEvent?.({type:`scream`,zombie:a})),a.groanTimer<=0&&(a.groanTimer=3.5+this.rng()*7,c<24&&a.state===`chase`&&this.onEvent?.({type:`groan`,zombie:a,distance:c}));let d=0,f=a.pos.x,p=a.pos.z;if(a.stagger<=0){if(a.state===`chase`&&n.alive){f=r.x,p=r.z,d=a.t.chaseSpeed*a.speedMul;let e=a.t.reach+.1;c<e+.2&&a.cooldown<=0&&a.attackT<0&&(a.attackT=0,a.cooldown=a.t.cooldown+this.rng()*.35,this.onEvent?.({type:`attack`,zombie:a})),c<e&&(d=0)}else{if(a.wanderTimer-=e,a.wanderTimer<=0){a.wanderTimer=4+this.rng()*7;let e=this.rng()*Math.PI*2,t=2+this.rng()*6;a.wander.set(a.home.x+Math.cos(e)*t,0,a.home.z+Math.sin(e)*t)}let t=a.wander.x-a.pos.x,n=a.wander.z-a.pos.z;Math.hypot(t,n)>.7&&(f=a.wander.x,p=a.wander.z,d=a.t.speed*.62)}}if(a.attackT>=0){a.attackT+=e;let t=a.t.attackTime;if(a.attackT>t*.46&&!a.attackHit){a.attackHit=!0;let e=Math.hypot(r.x-a.pos.x,r.z-a.pos.z);if(e<a.t.reach+.7&&n.alive){let t=a.t.infection;if(n.hurt(a.t.damage*(.85+this.rng()*.3),{infection:t,source:a.type,force:a.type===`brute`?.7:.2}),a.type===`brute`){let t=(r.x-a.pos.x)/Math.max(.001,e),i=(r.z-a.pos.z)/Math.max(.001,e);n.pos.x+=t*.75,n.pos.z+=i*.75}this.spawnBlood(i,5,null),this.onEvent?.({type:`playerHit`,zombie:a})}}a.attackT>t&&(a.attackT=-1,a.attackHit=!1)}if(d>0&&a.stagger<=0){let t=f-a.pos.x,n=p-a.pos.z,r=Math.hypot(t,n)||1;t/=r,n/=r;let i=d*e;if(this.moveZombie(a,t*i,n*i)<i*.3){if(a.stuck=(a.stuck||0)+e,a.stuck>.6){let e=this.rng()<.5?1:-1;this.moveZombie(a,-n*e*i,t*e*i),a.stuck>2&&(a.stuck=0,a.alert=1.5,a.state=`idle`,a.wanderTimer=0)}}else a.stuck=0;a.rot=Zu(a.rot,Math.atan2(t,n),Math.min(1,e*5.5))}else a.state===`chase`&&n.alive&&(a.rot=Zu(a.rot,Math.atan2(o,s),Math.min(1,e*4)));for(let e of this.zombies){if(e===a||e.dead)continue;let t=a.pos.x-e.pos.x,n=a.pos.z-e.pos.z,r=Math.hypot(t,n),i=(a.radius+e.radius)*.85;if(r>.001&&r<i){let e=(i-r)*.5;this.moveZombie(a,t/r*e,n/r*e)}}let m=d>0&&a.stagger<=0,h=a.state===`chase`?a.type===`infected`?10.5:5.2:3.4;m&&(a.phase+=e*h*(.8+a.speedMul*.25));let g=m?Math.sin(a.phase):Math.sin(t*1.4+a.phase)*.12,_=a.type===`infected`?.95:a.type===`brute`?.45:.6;a.parts.legs[0].rotation.x=g*_,a.parts.legs[1].rotation.x=-g*_;let v=a.type===`walker`?-1.15:a.type===`infected`?-.55:a.type===`screamer`?0:-.25,y=m?g*.34:0;if(a.type===`screamer`&&a.state===`chase`?(a.parts.arms[0].rotation.z=-2.15+Math.sin(t*3.2)*.16,a.parts.arms[1].rotation.z=2.15-Math.sin(t*3.2)*.16):(a.parts.arms[0].rotation.z=-.1,a.parts.arms[1].rotation.z=.1),a.attackT>=0){let e=a.t.attackTime,t=a.attackT/e,n=Math.sin(Math.min(1,t)*Math.PI);v=-2.25*n-.2,y=0,a.parts.upper.rotation.x=-.12*n,a.parts.upper.position.y=.9-n*.06}else a.parts.upper.rotation.x=0,a.parts.upper.position.y=.9+(m?Math.abs(Math.sin(a.phase))*.035:0);a.parts.arms[0].rotation.x=v+y,a.parts.arms[1].rotation.x=v-y,a.parts.torso.rotation.x=a.t.hunch+(a.attackT>=0?.14:0),a.parts.head.rotation.y=J(Math.atan2(o,s)-a.rot,-.6,.6)*.5,a.parts.torso.rotation.z=Math.sin(a.phase*.5)*.025,a.group.position.set(a.pos.x,a.pos.y-(a.stagger>0?.03:0),a.pos.z),a.group.rotation.y=a.rot,a.flash>0?(a.parts.skin.emissive.setRGB(.55,.06,.04),a.parts.skin.emissiveIntensity=a.flash*4,a.parts.cloth.emissive.setRGB(.3,.02,.01),a.parts.cloth.emissiveIntensity=a.flash*2):(a.parts.skin.emissive.setRGB(0,0,0),a.parts.skin.emissiveIntensity=0,a.parts.cloth.emissive.setRGB(0,0,0),a.parts.cloth.emissiveIntensity=0)}if(this.spawnTimer-=e,this.spawnTimer<=0&&(this.spawnTimer=48,this.aliveCount()<10)){let e=[[-62,1],[78,1.5],[-48,30],[66,30],[-70,-24],[52,-36]].filter(([e,t])=>Math.hypot(e-n.pos.x,t-n.pos.z)>32);if(e.length){let[t,n]=Nl(this.rng,e);this.spawn(Nl(this.rng,[`walker`,`walker`,`infected`]),t+jl(this.rng,-2,2),n+jl(this.rng,-2,2))}}}reset(){for(let e of this.zombies)this.root.remove(e.group),e.parts.skin.dispose(),e.parts.cloth.dispose();this.zombies.length=0,this.spawnInitial()}dispose(){this.scene.remove(this.root),this.scene.remove(this.bloodPoints)}};function Zu(e,t,n){let r=t-e;for(;r>Math.PI;)r-=Math.PI*2;for(;r<-Math.PI;)r+=Math.PI*2;return e+r*n}var Qu=class{constructor(e,t={}){this.game=e,this.slots=[],this.maxWeight=t.maxWeight??34,this.equipped=null,this.condition={},this.onChange=null}get weight(){return this.slots.reduce((e,t)=>e+Pu(t.id)*t.qty,0)}get weapons(){return this.slots.filter(e=>ku[e.id]?.kind===`melee`||ku[e.id]?.kind===`firearm`)}count(e){return this.slots.filter(t=>t.id===e).reduce((e,t)=>e+t.qty,0)}find(e){return this.slots.find(t=>t.id===e)||null}canAdd(e,t=1){if(!ku[e])return!1;let n=Pu(e)*t;return this.weight+n<=this.maxWeight+.001}add(e,t=1){let n=ku[e];if(!n||!this.canAdd(e,t))return!1;let r=n.stack||1,i=t;for(let t of this.slots){if(t.id!==e||t.qty>=r)continue;let n=Math.min(r-t.qty,i);if(t.qty+=n,i-=n,i<=0)break}for(;i>0;){let t=Math.min(r,i);this.slots.push({id:e,qty:t}),i-=t}return this.equipped||n.kind!==`melee`&&n.kind!==`firearm`||(this.equipped=e),(n.kind===`melee`||n.kind===`firearm`)&&(this.condition[e]??(this.condition[e]=100)),this.onChange?.(),!0}remove(e,t=1){let n=t;for(let t=this.slots.length-1;t>=0&&n>0;t--){let r=this.slots[t];if(r.id!==e)continue;let i=Math.min(r.qty,n);r.qty-=i,n-=i,r.qty<=0&&this.slots.splice(t,1)}if(this.count(e)===0&&this.equipped===e){let e=this.weapons[0];this.equipped=e?e.id:null}return this.onChange?.(),n===0}equip(e){let t=ku[e];return!t||t.kind!==`melee`&&t.kind!==`firearm`||!this.find(e)?!1:(this.equipped=e,this.condition[e]??(this.condition[e]=100),this.onChange?.(),!0)}damageCondition(e,t){this.condition[e]??(this.condition[e]=100),this.condition[e]=Math.max(0,this.condition[e]-t),this.onChange?.()}repair(e,t=45){return this.condition[e]==null||this.count(`repair_kit`)<=0?!1:(this.remove(`repair_kit`,1),this.condition[e]=Math.min(100,this.condition[e]+t),this.onChange?.(),!0)}drop(e,t=1){return this.remove(e,t)}clear(){this.slots.length=0,this.equipped=null,this.condition={},this.onChange?.()}serialize(){return{slots:this.slots.map(e=>({...e})),equipped:this.equipped,condition:{...this.condition}}}},$u=class{constructor(){this.ctx=null,this.ready=!1,this.master=null,this.volume=.72,this.rng=q(5150),this.weather={rain:0,overcast:.2},this.creakTimer=6,this.moanTimer=9,this.heartTimer=0,this.lastStep=0,this.enabled=!1,this.playing=!1}init(){if(this.ctx){this.ctx.resume?.();return}let e=window.AudioContext||window.webkitAudioContext;if(!e)return;this.ctx=new e;let t=this.ctx,n=t.createDynamicsCompressor();n.threshold.value=-18,n.knee.value=22,n.ratio.value=4,n.attack.value=.004,n.release.value=.22,this.master=t.createGain(),this.master.gain.value=this.volume,this.master.connect(n),n.connect(t.destination),this.comp=n;let r=t.sampleRate*2,i=t.createBuffer(1,r,t.sampleRate),a=i.getChannelData(0);for(let e=0;e<r;e++)a[e]=Math.random()*2-1;this.noiseBuffer=i;let o=t.createBuffer(1,r,t.sampleRate),s=o.getChannelData(0),c=0;for(let e=0;e<r;e++)c=c*.985+(Math.random()*2-1)*.015,s[e]=c*3.2;this.windBuffer=o,this.buildAmbience(),this.ready=!0,this.enabled=!0}buildAmbience(){let e=this.ctx,t=e.createBufferSource();t.buffer=this.windBuffer,t.loop=!0;let n=e.createBiquadFilter();n.type=`lowpass`,n.frequency.value=380,n.Q.value=.6,this.windGain=e.createGain(),this.windGain.gain.value=.001,t.connect(n),n.connect(this.windGain),this.windGain.connect(this.master),t.start(),this.wind=t;let r=e.createBufferSource();r.buffer=this.noiseBuffer,r.loop=!0;let i=e.createBiquadFilter();i.type=`bandpass`,i.frequency.value=1400,i.Q.value=.35,this.airGain=e.createGain(),this.airGain.gain.value=1e-4,r.connect(i),i.connect(this.airGain),this.airGain.connect(this.master),r.start(),this.air=r;let a=e.createBufferSource();a.buffer=this.noiseBuffer,a.loop=!0;let o=e.createBiquadFilter();o.type=`highpass`,o.frequency.value=1500,this.rainFilter=o,this.rainGain=e.createGain(),this.rainGain.gain.value=0,a.connect(o),o.connect(this.rainGain),this.rainGain.connect(this.master),a.start(),this.rain=a;let s=e.createGain();s.gain.value=.038,s.connect(this.master),this.droneGain=s;for(let[t,n,r]of[[41.2,`sine`,.6],[61.7,`triangle`,.32],[82.4,`sine`,.18]]){let i=e.createOscillator();i.type=n,i.frequency.value=t;let a=e.createGain();a.gain.value=r;let o=e.createBiquadFilter();o.type=`lowpass`,o.frequency.value=220,i.connect(o),o.connect(a),a.connect(s),i.start();let c=e.createOscillator();c.frequency.value=.03+this.rng()*.05;let l=e.createGain();l.gain.value=.6,c.connect(l),l.connect(i.frequency),c.start()}}resume(){this.ctx?.state===`suspended`&&this.ctx.resume()}setVolume(e){this.volume=J(e,0,1),this.master&&(this.master.gain.value=this.volume)}setWeather({rain:e=0,overcast:t=.2}={}){if(this.weather={rain:e,overcast:t},!this.ready)return;let n=this.ctx.currentTime;this.rainGain.gain.setTargetAtTime(e*.05,n,.8),this.rainFilter.frequency.setTargetAtTime(1e3+e*1800,n,.8),this.windGain.gain.setTargetAtTime(.016+t*.026,n,1.2),this.airGain.gain.setTargetAtTime(.0016+t*.004,n,1.2)}panFor(e,t,n){if(!e)return{pan:0,vol:1,dist:0};let r=e.x-t.x,i=e.z-t.z,a=Math.hypot(r,i),o=Math.cos(n),s=-Math.sin(n);return{pan:J((r*o+i*s)/Math.max(1,a),-1,1)*.85,vol:J(1/(1+a*.11),0,1),dist:a}}connectOutput(e,t=0,n=1){let r=this.ctx,i=r.createGain();i.gain.value=n;let a=i;if(r.createStereoPanner){let e=r.createStereoPanner();e.pan.value=t,i.connect(e),a=e}return a.connect(this.master),e.connect(i),i}noise(e,{type:t=`bandpass`,freq:n=800,q:r=.8,gain:i=.3,pan:a=0,attack:o=.002,sweepTo:s=null}={}){if(!this.ready)return;let c=this.ctx,l=c.createBufferSource();l.buffer=this.noiseBuffer,l.loop=!0;let u=c.createBiquadFilter();u.type=t,u.frequency.value=n,u.Q.value=r,s&&u.frequency.exponentialRampToValueAtTime(Math.max(40,s),c.currentTime+e);let d=c.createGain(),f=c.currentTime;d.gain.setValueAtTime(1e-4,f),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,i),f+o),d.gain.exponentialRampToValueAtTime(1e-4,f+e),l.connect(u),u.connect(d),this.connectOutput(d,a),l.start(f,this.rng()*1.5),l.stop(f+e+.02)}tone(e,t,{type:n=`sine`,gain:r=.2,pan:i=0,glide:a=null,attack:o=.004,delay:s=0}={}){if(!this.ready)return;let c=this.ctx,l=c.createOscillator();l.type=n;let u=c.currentTime+s;l.frequency.setValueAtTime(e,u),a&&l.frequency.exponentialRampToValueAtTime(Math.max(20,a),u+t);let d=c.createGain();d.gain.setValueAtTime(1e-4,u),d.gain.exponentialRampToValueAtTime(Math.max(2e-4,r),u+o),d.gain.exponentialRampToValueAtTime(1e-4,u+t),l.connect(d),this.connectOutput(d,i),l.start(u),l.stop(u+t+.02)}play(e,t={}){if(!this.ready||!this.enabled)return;let n=t.pan??0;switch(e){case`footstep`:{let e=t.surface||`stone`,r=(t.volume??.6)*.55;e===`interior`?(this.noise(.11,{type:`bandpass`,freq:320+this.rng()*160,q:1.4,gain:r*.75,pan:n}),this.tone(72+this.rng()*22,.11,{type:`sine`,gain:r*.4,pan:n})):e===`asphalt`?(this.noise(.1,{type:`bandpass`,freq:700+this.rng()*500,q:.8,gain:r*.62,pan:n}),this.tone(96,.08,{type:`sine`,gain:r*.22,pan:n})):this.noise(.09,{type:`bandpass`,freq:1150+this.rng()*600,q:1.1,gain:r*.5,pan:n});break}case`swing`:this.noise(.24,{type:`bandpass`,freq:t.heavy?320:520,q:1.1,gain:t.heavy?.36:.24,pan:n,sweepTo:t.heavy?140:1800,attack:.03});break;case`bladeHit`:this.noise(.16,{type:`lowpass`,freq:1050,q:1.4,gain:.4,pan:n}),this.tone(120,.16,{type:`square`,gain:.1,pan:n,glide:55}),this.noise(.09,{type:`highpass`,freq:2400,gain:.16,pan:n});break;case`bluntHit`:this.tone(74,.24,{type:`sine`,gain:.42,pan:n,glide:36}),this.noise(.18,{type:`lowpass`,freq:550,q:1.2,gain:.34,pan:n});break;case`pistol`:this.noise(.17,{type:`lowpass`,freq:2600,q:.9,gain:.7,pan:n,attack:.001,sweepTo:260}),this.tone(155,.2,{type:`square`,gain:.3,pan:n,glide:45}),this.tone(70,.26,{type:`sine`,gain:.42,pan:n,glide:34}),this.noise(.5,{type:`lowpass`,freq:600,q:.6,gain:.12,pan:n});break;case`shotgun`:this.noise(.32,{type:`lowpass`,freq:2100,q:.7,gain:.9,pan:n,attack:.001,sweepTo:170}),this.tone(92,.36,{type:`sine`,gain:.55,pan:n,glide:28}),this.noise(.9,{type:`lowpass`,freq:480,q:.5,gain:.16,pan:n});break;case`rifle`:this.noise(.2,{type:`lowpass`,freq:3200,q:.8,gain:.8,pan:n,attack:.001,sweepTo:300}),this.tone(180,.18,{type:`square`,gain:.25,pan:n,glide:50}),this.tone(64,.3,{type:`sine`,gain:.4,pan:n,glide:30});break;case`dryfire`:this.noise(.035,{type:`highpass`,freq:2200,gain:.16,pan:n}),this.tone(1600,.03,{type:`square`,gain:.04,pan:n});break;case`reload`:this.noise(.05,{type:`highpass`,freq:2600,gain:.16,pan:n}),this.tone(280,.06,{type:`square`,gain:.05,pan:n,delay:.05}),this.noise(.06,{type:`highpass`,freq:1800,gain:.15,pan:n+.2,delay:.35}),this.tone(180,.05,{type:`square`,gain:.05,pan:n,delay:.5});break;case`impact`:this.noise(.06,{type:t.surface===`ground`?`lowpass`:`bandpass`,freq:t.surface===`ground`?500:1800,q:1.2,gain:.14,pan:n});break;case`hurt`:this.tone(66,.28,{type:`sine`,gain:.34,pan:n,glide:38}),this.noise(.2,{type:`lowpass`,freq:420,q:1,gain:.24,pan:n});break;case`groan`:this.groan(n,t.vol??.5,!1);break;case`scream`:this.scream(n,t.vol??.55);break;case`kill`:this.tone(88,.4,{type:`sawtooth`,gain:.18,pan:n,glide:41}),this.noise(.3,{type:`lowpass`,freq:380,q:1.4,gain:.22,pan:n});break;case`pickup`:this.tone(620,.08,{type:`sine`,gain:.1,pan:n}),this.tone(880,.12,{type:`sine`,gain:.08,pan:n,delay:.06});break;case`click`:this.tone(420,.04,{type:`square`,gain:.05,pan:n});break;case`door`:this.noise(.5,{type:`bandpass`,freq:240,q:2.2,gain:.18,pan:n,sweepTo:120,attack:.05});break;case`quest`:this.tone(392,.6,{type:`sine`,gain:.14,pan:n}),this.tone(523.25,.7,{type:`sine`,gain:.11,pan:n,delay:.14}),this.tone(659.25,.9,{type:`sine`,gain:.09,pan:n,delay:.3});break;case`pickupGun`:this.noise(.08,{type:`highpass`,freq:1400,gain:.14,pan:n}),this.tone(340,.1,{type:`square`,gain:.06,pan:n});break;case`heartbeat`:this.tone(48,.19,{type:`sine`,gain:.4,pan:n}),this.tone(42,.22,{type:`sine`,gain:.3,pan:n,delay:.24});break;case`lightning`:this.noise(1.4,{type:`lowpass`,freq:420,q:.5,gain:.35,pan:(this.rng()-.5)*1.4,attack:.06})}}groan(e=0,t=.4,n=!1){if(!this.ready)return;let r=this.ctx,i=r.currentTime,a=.9+this.rng()*1.1,o=58+this.rng()*46,s=r.createGain();s.gain.setValueAtTime(1e-4,i),s.gain.exponentialRampToValueAtTime(t*.14,i+.15),s.gain.setValueAtTime(t*.14,i+a*.6),s.gain.exponentialRampToValueAtTime(1e-4,i+a);let c=r.createBiquadFilter();c.type=`bandpass`,c.frequency.value=340+this.rng()*260,c.Q.value=3.2;let l=r.createOscillator();l.type=`sawtooth`,l.frequency.setValueAtTime(o,i),l.frequency.linearRampToValueAtTime(o*(.8+this.rng()*.5),i+a);let u=r.createOscillator();u.frequency.value=5+this.rng()*4;let d=r.createGain();d.gain.value=12,u.connect(d),d.connect(l.frequency),l.connect(c),c.connect(s),this.connectOutput(s,e,n?.55:1),l.start(i),u.start(i),l.stop(i+a+.05),u.stop(i+a+.05),n||this.noise(a*.7,{type:`bandpass`,freq:600,q:2,gain:t*.03,pan:e})}scream(e=0,t=.5){if(!this.ready)return;let n=this.ctx,r=n.currentTime,i=1.8,a=n.createGain();a.gain.setValueAtTime(1e-4,r),a.gain.exponentialRampToValueAtTime(t*.2,r+.1),a.gain.setValueAtTime(t*.2,r+i*.55),a.gain.exponentialRampToValueAtTime(1e-4,r+i);let o=n.createOscillator();o.type=`sawtooth`,o.frequency.setValueAtTime(340,r),o.frequency.exponentialRampToValueAtTime(900,r+.35),o.frequency.exponentialRampToValueAtTime(480,r+i*.8);let s=n.createOscillator();s.type=`square`,s.frequency.setValueAtTime(510,r),s.frequency.exponentialRampToValueAtTime(760,r+.3),s.frequency.exponentialRampToValueAtTime(390,r+i*.8);let c=n.createBiquadFilter();c.type=`bandpass`,c.frequency.value=1300,c.Q.value=1.2,o.connect(c),s.connect(c),c.connect(a),this.connectOutput(a,e),o.start(r),s.start(r),o.stop(r+i),s.stop(r+i),this.noise(i*.7,{type:`bandpass`,freq:1600,q:1.2,gain:.05,pan:e})}update(e,t={}){if(!this.ready)return;let{playing:n,player:r,sky:i,camera:a,yaw:o}=t;if(!n)this.master.gain.setTargetAtTime(this.volume*.45,this.ctx.currentTime,.5);else{if(this.master.gain.setTargetAtTime(this.volume,this.ctx.currentTime,.4),this.creakTimer-=e,this.moanTimer-=e,this.creakTimer<=0){this.creakTimer=9+this.rng()*18;let e=(this.rng()-.5)*1.5;this.rng()<.55?this.noise(.7+this.rng()*.7,{type:`bandpass`,freq:190+this.rng()*300,q:4,gain:.055,pan:e,attack:.08,sweepTo:120}):this.tone(220+this.rng()*160,.5,{type:`triangle`,gain:.025,pan:e,glide:180})}if(this.moanTimer<=0&&(this.moanTimer=14+this.rng()*24,this.groan((this.rng()-.5)*1.3,.28,!0)),r&&r.health<38&&r.alive&&(this.heartTimer-=e,this.heartTimer<=0&&(this.heartTimer=.8+r.health/60,this.play(`heartbeat`))),i){let e=i.rainAmount||0,t=i.overcast||.2;(Math.abs(e-this.weather.rain)>.02||Math.abs(t-this.weather.overcast)>.05)&&this.setWeather({rain:e,overcast:t})}}}playAt(e,t,n,r,i={}){let{pan:a,vol:o,dist:s}=this.panFor(t,n,r);s>42||this.play(e,{...i,pan:a,vol:o*(i.vol??1)})}},$=e=>document.getElementById(e),ed={clear:{label:`CLEAR SKIES`,icon:`☀`},haze:{label:`LIGHT HAZE`,icon:`◌`},overcast:{label:`OVERCAST`,icon:`☁`},rain:{label:`RAIN`,icon:`☂`},storm:{label:`STORM`,icon:`⚡`}},td={inventory:{kicker:`CARRY`,title:`Field Pack`},loot:{kicker:`SEARCHED`,title:`Supplies`},pause:{kicker:`STANDBY`,title:`Paused`},howto:{kicker:`BRIEFING`,title:`How To Play`},settings:{kicker:`CONFIGURATION`,title:`Settings`}},nd=class{constructor(e){this.game=e,this.screen=`menu`,this.panel=null,this.panelContext=null,this.selected=null,this.loot=null,this.eHeld=!1,this.searchTarget=null,this.searchProgress=0,this.subtitleTimer=0,this.hintTimer=0,this.toastCount=0,this.clockAccum=0,this.lastHud=0,this.barState={},this.questDisplay=null,this.deathEl=null,this.lastWeapon=null,this.el={menu:$(`menu`),hud:$(`hud`),panel:$(`panel`),frame:$(`panel-frame`),play:$(`play-btn`),howto:$(`howto-btn`),settings:$(`settings-btn`),status:$(`menu-status`),health:$(`health-fill`),healthNum:$(`health-num`),stamina:$(`stamina-fill`),hunger:$(`hunger-fill`),hungerNum:$(`hunger-num`),thirst:$(`thirst-fill`),thirstNum:$(`thirst-num`),infection:$(`infection-fill`),infectionNum:$(`infection-num`),quickbar:$(`quickbar`),weaponName:$(`weapon-name`),weaponType:$(`weapon-type`),weaponCond:$(`weapon-cond`),condFill:$(`cond-fill`),ammo:$(`ammo`),ammoReserve:$(`ammo-reserve`),ammoWrap:$(`ammo-wrap`),weaponIcon:$(`weapon-icon`),interact:$(`interact`),interactAction:$(`interact-action`),interactTarget:$(`interact-target`),ring:$(`ring-progress`),clock:$(`clock`),day:$(`day`),weatherLabel:$(`weather-label`),weatherIcon:$(`weather-icon`),temp:$(`temp`),dialFill:$(`dial-fill`),dialHand:$(`dial-hand`),questTitle:$(`quest-title`),questSub:$(`quest-sub`),quest:$(`quest`),compassStrip:$(`compass-strip`),compassHead:$(`compass-head`),compassDegree:$(`compass-degree`),compassMarker:$(`compass-marker`),noise:$(`noise-meter`),noiseBars:$(`noise-meter`)?.querySelectorAll(`.noise-bars i`),notifications:$(`notifications`),toastLayer:$(`toast-layer`),crosshair:$(`crosshair`),hitmarker:$(`hitmarker`),damage:$(`damage-vignette`),lowHealth:$(`low-health`),subtitle:$(`subtitle`),stance:$(`stance`),hint:$(`hint-bar`),stanceText:$(`stance`),marker:$(`compass-marker`)},this.bind(),this.refreshQuickbar(),this.applySettings(),$(`menu-status`)?.classList.add(`ready`),this.el.status&&(this.el.status.innerHTML=`<i class="status-dot"></i> CITY READY · CLICK PLAY`)}bind(){this.el.play?.addEventListener(`click`,()=>{this.game.audio?.play(`click`),this.game.start()}),this.el.howto?.addEventListener(`click`,()=>this.openHowTo()),this.el.settings?.addEventListener(`click`,()=>this.openSettings()),this.el.panel?.addEventListener(`click`,e=>{(e.target===this.el.panel||e.target.classList.contains(`panel-bg`))&&(this.panel!==`loot`||1)&&this.closePanel()}),this._onKeyDown=e=>{if(e.code===`KeyE`){this.eHeld=!0;let e=this.game.player.focus;e&&e.type===`door`&&this.screen===`game`&&!this.game.paused&&this.activate(e)}if(e.code===`Tab`){if(e.preventDefault(),this.screen===`game`&&!this.game.player.alive)return;this.panel===`inventory`?this.closePanel():this.panel||this.openInventory()}if(e.code===`Escape`&&(e.preventDefault(),this.panel&&this.panel!==`death`?this.closePanel():this.screen===`game`&&this.game.playing&&!this.panel&&this.openPause()),this.screen===`game`&&!this.panel){let t=[`Digit5`,`Digit6`,`Digit7`,`Digit8`].indexOf(e.code);t>=0&&this.useQuickSlot(t)}},this._onKeyUp=e=>{e.code===`KeyE`&&(this.eHeld=!1)},window.addEventListener(`keydown`,this._onKeyDown),window.addEventListener(`keyup`,this._onKeyUp),this.game.canvas?.addEventListener(`click`,()=>{this.screen===`game`&&this.game.playing&&!this.game.paused&&!this.game.player.locked&&this.game.player.lock()}),document.addEventListener(`pointerlockchange`,()=>{})}showGame(){this.screen=`game`,this.el.menu?.classList.add(`out`),setTimeout(()=>this.el.menu?.classList.add(`hidden`),750),this.el.hud?.classList.remove(`hidden`),this.hintTimer=14}showMenu(){this.screen=`menu`,this.el.menu?.classList.remove(`hidden`),requestAnimationFrame(()=>this.el.menu?.classList.remove(`out`)),this.el.hud?.classList.add(`hidden`),this.closeDeath()}openPanel(e,t,n={}){this.panel=e,this.panelContext=n;let r=td[e]||{kicker:``,title:``},i=e===`loot`?`LEAVE`:e===`pause`?`RESUME`:`CLOSE`;this.el.frame.innerHTML=`
      <div class="panel-head">
        <div>
          <div class="panel-kicker">${r.kicker}</div>
          <div class="panel-title">${r.title}</div>
        </div>
        <button class="panel-close" data-close="1">${i} · ESC</button>
      </div>
      <div id="panel-body">${t}</div>
    `,this.el.panel.classList.remove(`hidden`),this.el.frame.querySelector(`[data-close]`)?.addEventListener(`click`,()=>this.closePanel()),this.game.setPaused(!0),this.game.player.unlock(),this.game.audio?.play(`click`)}closePanel(){if(!this.panel)return;let e=this.panel;this.panel=null,this.panelContext=null,this.el.panel.classList.add(`hidden`),this.el.frame.innerHTML=``,this.game.setPaused(!1),(this.screen!==`game`||!this.game.playing||this.game.player.alive)&&e!==`death`&&this.game.player.lock()}openInventory(){this.selected=this.selected&&this.game.inventory.find(this.selected)?this.selected:this.game.inventory.slots[0]?.id||null,this.renderInventory()}renderInventory(){let e=this.game.inventory,t=`
      <div class="inventory-body">
        <div class="inv-left">
          <div>
            <div class="inv-section-label"><span>CARRIED ITEMS</span><span>${e.weight.toFixed(1)} / ${e.maxWeight.toFixed(0)} KG</span></div>
            <div class="inv-grid">${this.slotHtml(e)}</div>
          </div>
          <div>
            <div class="inv-section-label"><span>EQUIPPED</span><span>${e.equipped?ku[e.equipped]?.name:`UNARMED`}</span></div>
            <div class="equip-row">${this.equipHtml(e)}</div>
          </div>
        </div>
        <div class="inv-right">${this.detailHtml(e)}</div>
      </div>`;this.openPanel(`inventory`,t),this.wireInventory()}slotHtml(e){let t=e.slots.slice(0,32),n=``;for(let r=0;r<32;r++){let i=t[r];if(!i){n+=`<div class="inv-slot empty"></div>`;continue}let a=ku[i.id]||{},o=this.selected===i.id?` selected`:``,s=e.equipped===i.id?`<span class="eq"></span>`:``;n+=`<div class="inv-slot${o}" data-item="${i.id}" title="${a.name}">
        ${s}<div class="ico">${Au(i.id)}</div>${i.qty>1?`<span class="qty">${i.qty}</span>`:``}
      </div>`}return n}equipHtml(e){let t=[`melee`,`firearm`],n=``;for(let r of t){let t=e.slots.filter(e=>ku[e.id]?.kind===r);if(!t.length)n+=`<div class="equip-slot"><div class="ico" style="opacity:.18">${Au(`default`)}</div><small>${r===`melee`?`Melee`:`Firearm`}</small></div>`;else for(let r of t.slice(0,4)){let t=e.equipped===r.id?` style="border-color:var(--amber)"`:``;n+=`<div class="equip-slot" data-equip="${r.id}"${t}><div class="ico">${Au(r.id)}</div><small>${ku[r.id].name}</small></div>`}}return n}detailHtml(e){let t=this.selected,n=ku[t];if(!n)return`<div class="loot-empty">SELECT AN ITEM</div>`;let r=e.condition[t],i=(n.kind||`misc`).toUpperCase(),a=[];n.weapon&&(a.push(`<div class="stat-line"><b>DAMAGE</b><div class="stat-track"><i style="width:${J(n.weapon.damage/70*100,4,100)}%"></i></div><span>${n.weapon.damage}</span></div>`),a.push(`<div class="stat-line"><b>RANGE</b><div class="stat-track"><i style="width:${J(n.weapon.range/140*100,4,100)}%"></i></div><span>${n.weapon.range}m</span></div>`),r!=null&&a.push(`<div class="stat-line"><b>CONDITION</b><div class="stat-track"><i style="width:${r}%;background:var(--sage)"></i></div><span>${Math.round(r)}%</span></div>`));let o=n.kind===`melee`||n.kind===`firearm`,s=!!n.use||n.kind===`food`||n.kind===`drink`||n.kind===`medical`||n.kind===`throwable`,c=``;return o&&(c+=`<button class="btn-act primary" data-act="equip">EQUIP</button>`),s&&(c+=`<button class="btn-act primary" data-act="use">USE</button>`),o&&r!=null&&r<100&&(c+=`<button class="btn-act" data-act="repair" ${e.count(`repair_kit`)?``:`disabled`}>REPAIR</button>`),c+=`<button class="btn-act" data-act="drop">DROP</button>`,`
      <div class="item-hero">
        <div class="item-ico-lg"><div class="ico">${Au(t)}</div></div>
        <div>
          <div class="item-name">${n.name}</div>
          <div class="item-kind">${i}${n.quest?` · QUEST ITEM`:``}</div>
        </div>
      </div>
      <div class="item-desc">${n.desc||``}</div>
      <div class="item-stats">${a.join(``)}
        <div class="stat-line"><b>WEIGHT</b><span style="color:var(--bone-dim)">${n.weight.toFixed(1)} kg</span></div>
      </div>
      <div class="item-actions">${c}</div>`}wireInventory(){this.el.frame.querySelectorAll(`[data-item]`).forEach(e=>{e.addEventListener(`click`,()=>{this.selected=e.dataset.item,this.game.audio?.play(`click`),this.refreshInventoryBody()})}),this.el.frame.querySelectorAll(`[data-equip]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.equip;this.game.inventory.equip(t)&&(this.game.combat?.setWeapon(t),this.toast(ku[t].name,`Equipped`,`good`),this.refreshInventoryBody())})}),this.el.frame.querySelectorAll(`[data-act]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.act,n=this.selected;n&&(t===`equip`?this.game.inventory.equip(n)&&(this.game.combat?.setWeapon(n),this.toast(ku[n].name,`Equipped`,`good`)):t===`use`?this.useItem(n):t===`drop`?(this.game.inventory.drop(n,1),this.game.audio?.play(`pickup`)):t===`repair`&&(this.game.inventory.repair(n)?(this.toast(ku[n].name,`Repaired`,`good`),this.game.audio?.play(`pickupGun`)):this.toast(`No repair kit`,`Search toolboxes and lockers`,`danger`)),this.refreshInventoryBody())})})}refreshInventoryBody(){if(this.panel!==`inventory`)return;let e=`
      <div class="inventory-body">
        <div class="inv-left">
          <div>
            <div class="inv-section-label"><span>CARRIED ITEMS</span><span>${this.game.inventory.weight.toFixed(1)} / ${this.game.inventory.maxWeight.toFixed(0)} KG</span></div>
            <div class="inv-grid">${this.slotHtml(this.game.inventory)}</div>
          </div>
          <div>
            <div class="inv-section-label"><span>EQUIPPED</span><span>${this.game.inventory.equipped?ku[this.game.inventory.equipped]?.name:`UNARMED`}</span></div>
            <div class="equip-row">${this.equipHtml(this.game.inventory)}</div>
          </div>
        </div>
        <div class="inv-right">${this.detailHtml(this.game.inventory)}</div>
      </div>`;this.el.frame.querySelector(`#panel-body`).innerHTML=e,this.wireInventory()}useItem(e){let t=ku[e];if(!t||!t.use){if(t?.kind===`throwable`){this.toast(t.name,`Hold a flare and throw with G`,`danger`);return}return}let n=this.game.inventory;if(!n.find(e))return;let r=this.game.player;t.use.health&&r.heal(t.use.health),t.use.stamina&&r.addStamina(t.use.stamina),t.use.hunger&&(r.hunger=Math.min(100,r.hunger+t.use.hunger)),t.use.thirst&&(r.thirst=Math.min(100,r.thirst+t.use.thirst)),t.use.repair?n.equipped&&(n.repair(n.equipped)?(this.toast(`Weapon repaired`,ku[n.equipped].name,`good`),n.remove(e,1)):this.toast(`Repair failed`,`You need a weapon`,`danger`)):(n.remove(e,1),this.game.audio?.play(`pickup`),this.toast(t.name,`Used`,`good`))}openLoot(e){let t=e.loot||[];this.loot={label:e.label,items:t},this.game.audio?.play(`pickupGun`),this.game.player.noise=Math.max(this.game.player.noise,.45),this.renderLoot()}renderLoot(){let e=this.loot?.items||[],t=``;e.length?e.forEach((e,n)=>{let r=ku[e.id]||{};t+=`<div class="loot-card" data-loot="${n}">
          <div class="item-ico-lg"><div class="ico">${Au(e.id)}</div></div>
          <div class="loot-info"><div class="loot-name">${r.name}</div><div class="loot-kind">${(r.kind||`misc`).toUpperCase()}${r.quest?` · QUEST`:``}</div></div>
          <div class="loot-qty">×${e.qty}</div>
        </div>`}):t=`<div class="loot-empty">NOTHING LEFT</div>`;let n=`
      <div class="loot-body">${t}</div>
      <div class="loot-footer">
        <div class="loot-note">Searching <b>${this.loot?.label||`container`}</b> · weight <b>${this.game.inventory.weight.toFixed(1)} kg</b></div>
        <div style="display:flex;gap:8px">
          <button class="btn-act" data-loot-leave="1">LEAVE</button>
          <button class="btn-act primary" data-loot-all="1" ${e.length?``:`disabled`}>TAKE ALL</button>
        </div>
      </div>`;this.openPanel(`loot`,n),this.el.frame.querySelectorAll(`[data-loot]`).forEach(e=>{e.addEventListener(`click`,()=>this.takeLoot(Number(e.dataset.loot)))}),this.el.frame.querySelector(`[data-loot-all]`)?.addEventListener(`click`,()=>this.takeAllLoot()),this.el.frame.querySelector(`[data-loot-leave]`)?.addEventListener(`click`,()=>this.closePanel())}takeLoot(e){if(!this.loot)return;let t=this.loot.items[e];t&&(this.game.inventory.add(t.id,t.qty)?(this.loot.items.splice(e,1),this.game.audio?.play(`pickup`),this.toast(ku[t.id]?.name||`Item`,`+${t.qty}`,`good`),this.game.onLoot?.(t.id,t.qty),this.refreshQuickbar(),this.renderLoot()):this.toast(`Pack too heavy`,`${ku[t.id]?.name||`Item`} cannot fit`,`danger`))}takeAllLoot(){if(!this.loot)return;let e=[...this.loot.items],t=0;for(let n of e){let e=this.game.inventory,r=n.qty;if(!e.add(n.id,r)){r=0;for(let t=1;t<=n.qty;t++)e.add(n.id,1)&&(r=t);r>0&&e.remove(n.id,0)}if(r>0){t+=r;let e=this.loot.items.findIndex(e=>e===n);e>=0&&this.loot.items.splice(e,1),this.game.onLoot?.(n.id,r),this.toast(ku[n.id]?.name||`Item`,`+${r}`,`good`)}}t?this.game.audio?.play(`pickup`):this.toast(`Pack too heavy`,`Drop something first`,`danger`),this.refreshQuickbar(),this.renderLoot()}openHowTo(e=!1){let t=`
      <div class="big-copy">Harbor City fell in a single night. You are alive because you were lucky. Stay that way by searching carefully, moving quietly, and never fighting more than you can handle.</div>
      <div class="controls-sheet">
        <div class="ctrl-line"><span>Move</span><kbd>W A S D</kbd></div>
        <div class="ctrl-line"><span>Look</span><kbd>MOUSE</kbd></div>
        <div class="ctrl-line"><span>Sprint</span><kbd>SHIFT</kbd></div>
        <div class="ctrl-line"><span>Crouch</span><kbd>CTRL</kbd></div>
        <div class="ctrl-line"><span>Jump</span><kbd>SPACE</kbd></div>
        <div class="ctrl-line"><span>Search / open</span><kbd>E</kbd></div>
        <div class="ctrl-line"><span>Attack / fire</span><kbd>LMB</kbd></div>
        <div class="ctrl-line"><span>Aim</span><kbd>RMB</kbd></div>
        <div class="ctrl-line"><span>Reload</span><kbd>R</kbd></div>
        <div class="ctrl-line"><span>Switch weapon</span><kbd>1-4 / Q</kbd></div>
        <div class="ctrl-line"><span>Inventory</span><kbd>TAB</kbd></div>
        <div class="ctrl-line"><span>Quick items</span><kbd>5-8</kbd></div>
      </div>
      <div class="big-copy"><b>Survive:</b> hold <b>E</b> on cupboards, shelves, bodies and lockers. Food, water and medicine keep you moving. Zombies hear sprinting and gunfire. Search the pharmacy for antibiotics, then bring them to the Old Laundry safe house. Safe houses stop infection and slowly heal you.</div>
      <div class="panel-actions"><button class="btn-act" data-howto-back="1">${e?`BACK TO PAUSE`:`BACK`}</button></div>`;this.openPanel(`howto`,t),this.el.frame.querySelector(`[data-howto-back]`)?.addEventListener(`click`,()=>{e?this.openPause():this.closePanel()})}openSettings(e=!1){let t=this.game.settings,n=t.quality,r=`
      <div class="settings-grid">
        <div class="setting">
          <div><div class="setting-label">Graphics quality</div><div class="setting-sub">Lower settings help on integrated or software renderers.</div></div>
          <div class="setting-opts" data-setting="quality">
            <button data-val="low" class="${n===`low`?`on`:``}">LOW</button>
            <button data-val="balanced" class="${n===`balanced`?`on`:``}">BALANCED</button>
            <button data-val="high" class="${n===`high`?`on`:``}">HIGH</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Render scale</div><div class="setting-sub">Reduce internal resolution to improve frame rate.</div></div>
          <div class="setting-opts" data-setting="scale">
            <button data-val="0.7" class="${t.scale===.7?`on`:``}">70%</button>
            <button data-val="0.85" class="${t.scale===.85?`on`:``}">85%</button>
            <button data-val="1" class="${t.scale===1?`on`:``}">100%</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Bloom &amp; grading</div><div class="setting-sub">Cinematic light bloom and colour grade.</div></div>
          <div class="setting-opts" data-setting="bloom">
            <button data-val="1" class="${t.bloom?`on`:``}">ON</button>
            <button data-val="0" class="${t.bloom?``:`on`}">OFF</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Subtitles</div><div class="setting-sub">Show dialogue and ambient captioning.</div></div>
          <div class="setting-opts" data-setting="subtitles">
            <button data-val="1" class="${t.subtitles?`on`:``}">ON</button>
            <button data-val="0" class="${t.subtitles?``:`on`}">OFF</button>
          </div>
        </div>
        <div class="setting">
          <div><div class="setting-label">Mouse sensitivity</div><div class="setting-sub">Look speed.</div></div>
          <div class="setting-opts" data-setting="sens">
            <button data-val="0.5" class="${t.sens===.5?`on`:``}">LOW</button>
            <button data-val="1" class="${t.sens===1?`on`:``}">NORMAL</button>
            <button data-val="1.6" class="${t.sens===1.6?`on`:``}">HIGH</button>
          </div>
        </div>
      </div>
      <div class="panel-actions"><button class="btn-act" data-settings-back="1">${e?`BACK TO PAUSE`:`BACK`}</button></div>`;this.openPanel(`settings`,r),this.el.frame.querySelectorAll(`[data-setting]`).forEach(t=>{t.querySelectorAll(`button`).forEach(n=>{n.addEventListener(`click`,()=>{let r=t.dataset.setting,i=n.dataset.val;(r===`bloom`||r===`subtitles`)&&(i=i===`1`),(r===`scale`||r===`sens`)&&(i=Number(i)),this.game.setSetting(r,i),this.openSettings(e)})})}),this.el.frame.querySelector(`[data-settings-back]`)?.addEventListener(`click`,()=>{e?this.openPause():this.closePanel()})}openPause(){if(this.panel===`pause`)return;let e=this.game.stats(),t=`
      <div class="pause-body">
        <button class="pause-btn" data-pause="resume">RESUME <span>ESC</span></button>
        <button class="pause-btn" data-pause="inventory">FIELD PACK <span>TAB</span></button>
        <button class="pause-btn" data-pause="howto">HOW TO PLAY <span>CONTROLS</span></button>
        <button class="pause-btn" data-pause="settings">SETTINGS <span>GRAPHICS / AUDIO</span></button>
        <button class="pause-btn" data-pause="menu">QUIT TO MAIN MENU <span>PROGRESS IS NOT SAVED</span></button>
      </div>
      <div class="loot-footer">
        <div class="loot-note">SURVIVED <b>${rd(e.time)}</b> · KILLS <b>${e.kills}</b> · LOOT <b>${e.loot}</b></div>
        <div class="loot-note">HARBOR CITY · DAY ${this.game.sky?.day||1}</div>
      </div>`;this.openPanel(`pause`,t),this.el.frame.querySelectorAll(`[data-pause]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.pause;t===`resume`?this.closePanel():t===`inventory`?this.openInventory():t===`howto`?this.openHowTo(!0):t===`settings`?this.openSettings(!0):t===`menu`&&(this.closePanel(),this.game.quitToMenu())})})}showDeath(e){this.closePanel(),this.closeDeath();let t=this.game.stats(),n=document.createElement(`div`);n.className=`death-screen`,n.innerHTML=`
      <div class="death-inner">
        <div class="death-kicker">SIGNAL LOST</div>
        <div class="death-title">You Died</div>
        <div class="death-sub">${e?.cause||`The city took another one.`}</div>
        <div class="death-stats">
          <div class="death-stat"><b>${rd(t.time)}</b><span>SURVIVED</span></div>
          <div class="death-stat"><b>${t.kills}</b><span>INFECTED KILLED</span></div>
          <div class="death-stat"><b>${t.loot}</b><span>ITEMS LOOTED</span></div>
        </div>
        <div class="death-actions">
          <button data-death="retry">TRY AGAIN</button>
          <button data-death="menu">MAIN MENU</button>
        </div>
      </div>`,document.getElementById(`app`).appendChild(n),this.deathEl=n,n.querySelector(`[data-death="retry"]`)?.addEventListener(`click`,()=>{this.closeDeath(),this.game.restart()}),n.querySelector(`[data-death="menu"]`)?.addEventListener(`click`,()=>{this.closeDeath(),this.game.quitToMenu()}),this.game.player.unlock()}closeDeath(){this.deathEl?.remove(),this.deathEl=null}toast(e,t=``,n=``){let r=this.el.notifications;if(!r)return;let i=document.createElement(`div`);for(i.className=`toast `+n,i.innerHTML=`<div class="t-ico">${Au(this.guessIcon(e))}</div><div><div class="t-main">${e}</div>${t?`<div class="t-sub">${t}</div>`:``}</div>`,r.prepend(i);r.children.length>4;)r.lastChild.remove();setTimeout(()=>{i.classList.add(`out`),setTimeout(()=>i.remove(),420)},3800)}guessIcon(e){let t=String(e).toLowerCase();return t.includes(`water`)?`water`:t.includes(`food`)||t.includes(`bean`)||t.includes(`bar`)?`can`:t.includes(`bandage`)||t.includes(`med`)?`bandage`:t.includes(`ammo`)||t.includes(`round`)?`ammo`:t.includes(`antibiotic`)?`antibiotics`:t.includes(`weapon`)||t.includes(`machete`)||t.includes(`pipe`)?`machete`:`paper`}mini(e){let t=this.el.toastLayer;if(!t)return;let n=document.createElement(`div`);n.className=`mini`,n.textContent=e,t.appendChild(n),setTimeout(()=>{n.style.opacity=`0`,n.style.transition=`opacity .4s`,setTimeout(()=>n.remove(),420)},2200)}subtitle(e,t=4){if(!this.game.settings.subtitles)return;let n=this.el.subtitle;n&&(n.textContent=e,n.classList.add(`on`),this.subtitleTimer=t)}setQuest(e,t){this.el.questTitle.textContent=e,this.el.questSub.textContent=t,this.el.quest?.classList.remove(`done`)}activate(e){if(!e)return;let t=this.game.world;if(e.type===`door`){let n=t.interact(e);n?.type===`door`?(this.game.audio?.play(`door`),this.toast(n.label,n.open?`Opened`:`Closed`,``)):n?.type===`locked`&&this.toast(`Locked`,n.label,`danger`)}else e.type===`container`&&(this.searchProgress=0,this.searchTarget=e)}completeSearch(e){let t=this.game.world.interact(e);t&&(t.type===`loot`?(this.searchTarget=null,this.searchProgress=0,this.openLoot(t)):t.type===`empty`&&(this.searchTarget=null,this.searchProgress=0,this.toast(t.label,`Already searched`,``)))}update(e,t){if(this.screen!==`game`)return;let n=this.game.player,r=this.game.inventory,i=performance.now(),a=n.focus;if(a&&a.type===`container`&&!a.container?.searched&&this.eHeld&&!this.game.paused&&n.locked){this.searchTarget!==a&&(this.searchProgress=0,this.searchTarget=a);let t=a.container?.type===`corpse`?1.25:.85;this.searchProgress=Math.min(1,this.searchProgress+e/t),this.game.player.noise=Math.max(this.game.player.noise,.25),this.searchProgress>=1&&this.completeSearch(a)}else this.searchProgress=Math.max(0,this.searchProgress-e*2.6),this.eHeld||(this.searchTarget=null);let o=a&&!this.game.paused&&n.alive;if(this.el.interact?.classList.toggle(`on`,!!o),o){let e=a.type===`container`&&a.container?.searched;this.el.interactAction.textContent=e?`EMPTY`:a.action||`SEARCH`,this.el.interactTarget.textContent=a.label||`Object`;let t=this.searchProgress;this.el.ring.style.strokeDashoffset=String(119*(1-t))}else this.el.ring.style.strokeDashoffset=`119`;this.setBar(this.el.health,n.health),this.el.healthNum.textContent=String(Math.round(n.health)),this.setBar(this.el.stamina,n.stamina),this.setBar(this.el.hunger,n.hunger),this.el.hungerNum.textContent=String(Math.round(n.hunger)),this.setBar(this.el.thirst,n.thirst),this.el.thirstNum.textContent=String(Math.round(n.thirst)),this.setBar(this.el.infection,n.infection),this.el.infectionNum.textContent=String(Math.round(n.infection)),this.el.lowHealth?.classList.toggle(`on`,n.health<34&&n.alive),this.el.damage?.classList.toggle(`hit`,n.healthFlash>.82),this.el.stanceText.textContent=n.crouching?`CROUCHED`:n.sprinting?`SPRINTING`:`STANDING`;let s=Math.round(J(n.noise,0,1)*8);this.el.noiseBars&&(this.el.noiseBars.forEach((e,t)=>e.classList.toggle(`on`,t<s)),this.el.noise?.classList.toggle(`hot`,s>6)),this.clockAccum+=e,this.clockAccum>.12&&(this.clockAccum=0,this.updateWorldInfo(),this.updateCompass(),this.updateQuestDistance(),this.refreshWeapon());let c=ku[r.equipped]?.kind===`melee`;this.el.crosshair?.classList.toggle(`melee`,!!c),this.el.crosshair?.classList.toggle(`ads`,!!this.game.combat?.aimingForUi),this.el.crosshair?.classList.toggle(`hidden`,!n.alive),i-this.lastHud>260&&(this.lastHud=i,this.refreshQuickbar()),this.subtitleTimer>0&&(this.subtitleTimer-=e,this.subtitleTimer<=0&&this.el.subtitle?.classList.remove(`on`)),this.hintTimer>0&&(this.hintTimer-=e,this.hintTimer<=0&&this.el.hint?.classList.add(`fade`))}setBar(e,t){if(!e)return;let n=J(t,0,100);e.style.width=n+`%`}updateWorldInfo(){let e=this.game.sky;if(!e)return;let t=e.clockString();this.el.clock.textContent=t,this.el.day.textContent=`DAY `+e.day;let n=ed[e.weather]||ed.haze;this.el.weatherLabel.textContent=n.label,this.el.weatherIcon.textContent=n.icon;let r=e.time,i=Math.round(19+Math.sin((r-6)/24*Math.PI*2)*6);this.el.temp.textContent=i+`°C`,this.el.dialFill.style.width=(r/24*100).toFixed(1)+`%`,this.el.dialHand.style.left=(r/24*100).toFixed(1)+`%`}updateCompass(){let e=(-this.game.player.yaw*180/Math.PI%360+360)%360,t=[`N`,`NE`,`E`,`SE`,`S`,`SW`,`W`,`NW`],n=Math.round(e/45)%8;this.el.compassHead.textContent=t[n],this.el.compassDegree.textContent=String(Math.round(e)).padStart(3,`0`)+`°`;let r=this.el.compassStrip;r&&(r.style.transform=`translateX(${-(e/360*440+55)}px)`);let i=this.game.quest,a=this.el.compassMarker;if(a&&i?.target){let t=i.target.x-this.game.player.pos.x,n=i.target.z-this.game.player.pos.z,r=((Math.atan2(t,n)*180/Math.PI+360)%360-e+540)%360-180,o=J(50+r*.62,4,96);a.style.left=o+`%`,a.classList.toggle(`off`,Math.abs(r)>80),a.style.opacity=Math.abs(r)>110?`0.25`:`1`}else a&&(a.style.left=`50%`)}updateQuestDistance(){let e=this.game.quest;if(e){if(e.target){let t=Math.hypot(e.target.x-this.game.player.pos.x,e.target.z-this.game.player.pos.z),n=t<4?`HERE`:Math.round(t)+` m`;this.el.questSub.textContent=`${e.sub||``}${e.sub?` · `:``}${n}`}else this.el.questSub.textContent=e.sub||``}}refreshWeapon(){let e=this.game.inventory,t=e.equipped,n=ku[t];this.el.weaponName.textContent=n?n.name.toUpperCase():`UNARMED`,this.el.weaponType.textContent=n?n.weapon?.mag?`FIREARM`:`MELEE`:`—`;let r=t?e.condition[t]:null;r==null?(this.el.weaponCond.textContent=`—`,this.el.condFill.style.width=`0%`):(this.el.weaponCond.textContent=Math.round(r)+`%`,this.el.condFill.style.width=r+`%`,this.el.weaponCond.style.color=r<22?`var(--danger)`:`var(--sage)`);let i=n?.weapon;if(i?.mag){let n=this.game.combat?.mags[t]??i.mag,r=e.count(i.ammo);this.el.ammo.textContent=String(n),this.el.ammoReserve.textContent=`/ `+r,this.el.ammoWrap.style.opacity=`1`}else this.el.ammo.textContent=`—`,this.el.ammoReserve.textContent=``;let a=this.el.weaponIcon;a&&this.lastWeapon!==t&&(this.lastWeapon=t,a.innerHTML=Au(t||`default`))}refreshQuickbar(){let e=this.game.inventory;if(!this.el.quickbar)return;let t=e.slots.filter(e=>ku[e.id]?.kind===`melee`||ku[e.id]?.kind===`firearm`).slice(0,4),n=[`bandage`,`water`,`canned_food`,`flare`],r=``;for(let n=0;n<4;n++){let i=t[n];r+=i?`<button class="quick ${e.equipped===i.id?`active`:``}" data-quick="weapon" data-id="${i.id}"><span class="q-key">${n+1}</span><span class="q-ico">${Au(i.id)}</span></button>`:`<button class="quick" disabled><span class="q-key">${n+1}</span></button>`}for(let t=0;t<4;t++){let i=n[t],a=e.count(i);r+=`<button class="quick ${a?``:`empty`}" data-quick="use" data-id="${i}" ${a?``:`disabled`}><span class="q-key">${t+5}</span><span class="q-ico">${Au(i)}</span>${a?`<span class="q-count">${a}</span>`:``}</button>`}this.el.quickbar.dataset.sig!==r&&(this.el.quickbar.dataset.sig=r,this.el.quickbar.innerHTML=r,this.el.quickbar.querySelectorAll(`[data-quick]`).forEach(t=>{t.addEventListener(`click`,()=>{let n=t.dataset.id;t.dataset.quick===`weapon`?e.equip(n)&&(this.game.combat?.setWeapon(n),this.game.audio?.play(`click`)):this.useItem(n),this.refreshQuickbar()})})),this.refreshWeapon()}useQuickSlot(e){let t=[`bandage`,`water`,`canned_food`,`flare`][e];t&&(t===`flare`?this.toast(`Road Flare`,`Not yet implemented`,``):this.game.inventory.count(t)<=0?this.mini(`No `+ku[t].name):(this.useItem(t),this.refreshQuickbar()))}hitmarker(e=!1){let t=this.el.hitmarker;t&&(t.classList.remove(`show`,`kill`),t.offsetWidth,t.classList.add(`show`),t.classList.toggle(`kill`,e))}damageFlash(){this.el.damage?.classList.remove(`hit`),this.el.damage?.offsetWidth,this.el.damage?.classList.add(`hit`)}applySettings(){let e=this.game.settings;this.game.player&&(this.game.player.sensitivity=.0022*e.sens)}};function rd(e){let t=Math.floor(e/60),n=Math.floor(e%60);return`${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}var id={pistol:8,shotgun:6,rifle:30},ad=class{constructor(e){this.game=e,this.camera=e.camera,this.player=e.player,this.zombies=e.zombies,this.world=e.world,this.audio=e.audio,this.ui=e.ui,this.inventory=e.inventory,this.enabled=!1,this.cooldown=0,this.attackT=-1,this.attackKind=null,this.attackDone=!1,this.reloadT=0,this.reloadWeapon=null,this.aiming=!1,this.recoil=0,this.recoilPitch=0,this.recoilYaw=0,this.swayX=0,this.swayY=0,this.muzzleT=0,this.lastFire=-99,this.mags={...id},this.condition={},this.rng=q(808),this._dir=new H,this._right=new H,this._up=new H,this._ray=new fo,this._tmp=new H,this._impacts=[],this.buildView(),this.bind()}buildView(){this.viewScene=new yn,this.viewCamera=new za(58,16/9,.01,6),this.viewScene.add(this.viewCamera),this.root=new un,this.root.position.set(.26,-.23,-.48),this.viewScene.add(this.root);let e=new Ga(14208960,.62),t=new Wa(16769725,1.25);t.position.set(-1.2,1.8,.9);let n=new Wa(9347768,.55);n.position.set(1.6,-.4,-.8),this.viewScene.add(e,t,n),this.viewLights={amb:e,key:t,rim:n},this.models={},this.models.machete=this.buildMachete(),this.models.pipe=this.buildPipe(),this.models.axe=this.buildAxe(),this.models.knife=this.buildKnife(),this.models.pistol=this.buildPistol(),this.models.shotgun=this.buildShotgun(),this.models.rifle=this.buildRifle();for(let e of Object.values(this.models))e.visible=!1,this.root.add(e);let r=document.createElement(`canvas`);r.width=r.height=128;let i=r.getContext(`2d`),a=i.createRadialGradient(64,64,2,64,64,62);a.addColorStop(0,`rgba(255,244,208,1)`),a.addColorStop(.28,`rgba(255,204,110,0.95)`),a.addColorStop(.62,`rgba(255,124,38,0.42)`),a.addColorStop(1,`rgba(255,90,20,0)`),i.fillStyle=a,i.fillRect(0,0,128,128),i.strokeStyle=`rgba(255,226,166,0.85)`,i.lineWidth=3;for(let e=0;e<8;e++){let t=e/8*Math.PI*2+.2;i.beginPath(),i.moveTo(64+Math.cos(t)*14,64+Math.sin(t)*14),i.lineTo(64+Math.cos(t)*(34+e%3*8),64+Math.sin(t)*(34+e%3*8)),i.stroke()}let o=new ji(r);this.flashSprite=new Rr(new wr({map:o,color:16767392,transparent:!0,blending:2,depthWrite:!1,depthTest:!1})),this.flashSprite.scale.set(.34,.34,1),this.flashSprite.visible=!1,this.flashSprite.renderOrder=999,this.viewScene.add(this.flashSprite),this.flashLight=new Va(16758887,0,3.4,2),this.viewScene.add(this.flashLight),this.current=null,this.setWeapon(this.inventory.equipped||`machete`,!0)}mat(e,t={}){return new na({color:e,roughness:t.roughness??.55,metalness:t.metalness??.25,emissive:new W(e).multiplyScalar(t.emissive??.12),envMapIntensity:1.2})}addBox(e,t,n,r,i,a,o,s,c=0,l=0,u=0){let d=new ri(new Fi(n,r,i),t);return d.position.set(a,o,s),d.rotation.set(c,l,u),e.add(d),d}addCyl(e,t,n,r,i,a,o,s,c=0,l=0,u=0,d=12){let f=new ri(new Ii(n,r,i,d),t);return f.position.set(a,o,s),f.rotation.set(c,l,u),e.add(f),f}buildHand(e,t,n,r,i=0){let a=this.mat(`#a88468`,{roughness:.8,metalness:0,emissive:.1}),o=this.mat(`#4a5146`,{roughness:.95,metalness:0,emissive:.08}),s=new un;return s.position.set(t,n,r),s.rotation.y=i,e.add(s),this.addBox(s,a,.072,.085,.11,0,0,0),this.addBox(s,a,.06,.06,.05,-.045,-.01,.03),this.addBox(s,o,.085,.1,.2,.01,-.01,.16,.18),s}buildMachete(){let e=new un,t=this.mat(`#a7a795`,{roughness:.34,metalness:.85,emissive:.06}),n=this.mat(`#c9c6b0`,{roughness:.22,metalness:.9,emissive:.08}),r=this.mat(`#3d3428`,{roughness:.85,metalness:.05,emissive:.05}),i=this.mat(`#6f6350`,{roughness:1,metalness:0,emissive:.04});this.addBox(e,r,.052,.058,.24,0,0,.02,0,0,-.1),this.addBox(e,i,.058,.062,.07,0,0,.055,0,0,-.1),this.addBox(e,i,.058,.062,.045,0,0,.13,0,0,-.1),this.addBox(e,this.mat(`#7b7768`,{metalness:.6}),.13,.03,.045,0,.012,-.115,0,0,-.1),this.addBox(e,t,.075,.018,.56,.005,.03,-.39,-.045,0,-.1),this.addBox(e,n,.018,.02,.53,.032,.04,-.39,-.045,0,-.1),e.rotation.set(.14,-.12,-.12),e.position.set(0,.02,-.05);let a=this.buildHand(e,0,-.02,.06,.1);return a.rotation.z=.2,e}buildKnife(){let e=new un,t=this.mat(`#b6b6a6`,{roughness:.28,metalness:.9,emissive:.08}),n=this.mat(`#2f2a22`,{roughness:.9,metalness:.05});return this.addBox(e,n,.04,.045,.17,0,0,.03,0,0,-.08),this.addBox(e,this.mat(`#747163`,{metalness:.7}),.06,.025,.03,0,.005,-.065,0,0,-.08),this.addBox(e,t,.028,.012,.3,0,.012,-.23,0,0,-.08),this.buildHand(e,0,-.015,.06,.1),e.rotation.set(.12,-.1,-.08),e}buildPipe(){let e=new un,t=this.mat(`#8f9185`,{roughness:.48,metalness:.8,emissive:.07}),n=this.mat(`#6a5641`,{roughness:.92,metalness:.35});return this.addCyl(e,t,.028,.031,.72,0,.02,-.28,Math.PI/2,0,0,10),this.addCyl(e,n,.034,.034,.09,0,.02,.03,Math.PI/2,0,0,10),this.addCyl(e,n,.034,.034,.06,0,.02,-.52,Math.PI/2,0,0,10),this.addBox(e,n,.06,.012,.1,0,.045,-.3,0,0,.2),this.buildHand(e,0,-.01,.08,.1),e.rotation.set(.1,-.18,-.06),e}buildAxe(){let e=new un,t=this.mat(`#6c553b`,{roughness:.9,metalness:.02}),n=this.mat(`#9a9b8e`,{roughness:.38,metalness:.8,emissive:.06}),r=this.mat(`#7d3427`,{roughness:.7,metalness:.3});return this.addCyl(e,t,.024,.03,.72,0,.015,-.24,Math.PI/2+.06,0,0,8),this.addBox(e,n,.055,.19,.2,0,.075,-.56,.05,0,0),this.addBox(e,n,.02,.24,.17,.045,.075,-.57,.05,0,0),this.addBox(e,r,.058,.05,.07,0,.07,-.51,.05,0,0),this.buildHand(e,0,-.005,.09,.1),e.rotation.set(.12,-.15,-.1),e}buildPistol(){let e=new un,t=this.mat(`#3c3f3c`,{roughness:.42,metalness:.75,emissive:.06}),n=this.mat(`#22241f`,{roughness:.8,metalness:.3}),r=this.mat(`#2b2c27`,{roughness:.95,metalness:.05});return this.addBox(e,t,.045,.05,.24,0,.012,-.1),this.addBox(e,t,.036,.036,.1,0,.005,-.26),this.addBox(e,r,.046,.13,.062,0,-.072,.005,.22,0,0),this.addBox(e,n,.05,.02,.12,0,.043,-.06),this.addBox(e,n,.03,.024,.03,0,.052,-.19),this.addBox(e,this.mat(`#8d8d7c`,{metalness:.8}),.012,.012,.02,0,.052,-.275),this.buildHand(e,0,-.06,.03,.05),this.buildHand(e,-.035,-.065,.05,-.25),e.rotation.set(.02,-.04,0),e}buildShotgun(){let e=new un,t=this.mat(`#4a4c46`,{roughness:.4,metalness:.72,emissive:.06}),n=this.mat(`#6b4f34`,{roughness:.82,metalness:.03}),r=this.mat(`#262823`,{roughness:.85,metalness:.2});return this.addCyl(e,t,.022,.022,.62,0,.03,-.36,Math.PI/2,0,0,10),this.addCyl(e,t,.028,.028,.44,0,-.012,-.27,Math.PI/2,0,0,10),this.addBox(e,r,.05,.08,.18,0,0,-.02),this.addBox(e,n,.055,.09,.22,0,-.035,.16,-.1,0,0),this.addBox(e,n,.062,.075,.26,0,-.02,-.2,0,0,0),this.addBox(e,r,.014,.014,.04,0,.066,-.62),this.buildHand(e,0,-.05,.06,.08),this.buildHand(e,-.02,-.055,-.18,-.15),e.rotation.set(.03,-.05,0),e}buildRifle(){let e=new un,t=this.mat(`#3f423d`,{roughness:.38,metalness:.7,emissive:.05}),n=this.mat(`#2c2e28`,{roughness:.7,metalness:.1}),r=this.mat(`#20221d`,{roughness:.8,metalness:.2}),i=this.mat(`#5b7a74`,{roughness:.1,metalness:.5,emissive:.2});return this.addBox(e,t,.05,.07,.42,0,.01,-.12),this.addCyl(e,t,.016,.016,.4,0,.024,-.47,Math.PI/2,0,0,8),this.addBox(e,n,.045,.1,.22,0,-.02,.18,.06,0,0),this.addBox(e,r,.04,.14,.065,0,-.09,-.06,.16,0,0),this.addBox(e,r,.055,.05,.16,0,.062,-.08),this.addCyl(e,i,.026,.026,.16,0,.085,-.09,Math.PI/2,0,0,10),this.addBox(e,r,.04,.04,.05,0,.085,-.17),this.addBox(e,n,.04,.05,.1,0,-.01,.31,.05,0,0),this.buildHand(e,0,-.045,.07,.08),this.buildHand(e,-.015,-.06,-.24,-.1),e.rotation.set(.02,-.04,0),e}setWeapon(e,t=!1){e&&this.models[e]||(e=`machete`),(t||this.current!==e)&&(this.current&&this.models[this.current]&&(this.models[this.current].visible=!1),this.current=e,this.models[e].visible=!0,this.attackT=-1,this.reloadT=0,this.reloadWeapon=null,this.aiming=!1,ku[e]?.weapon?.mag&&this.mags[e]==null&&(this.mags[e]=ku[e].weapon.mag),this.ui?.refreshWeapon?.())}currentStats(){return ku[this.current]?.weapon||null}ammoInfo(){let e=this.currentStats();return!e||!e.mag?{clip:null,reserve:0}:{clip:this.mags[this.current]??e.mag,reserve:this.inventory.count(e.ammo)}}bind(){this._onDown=e=>{this.enabled&&this.player.locked&&(e.button===0&&(this.attack(),e.preventDefault()),e.button===2&&(this.aiming=!0,e.preventDefault()))},this._onUp=e=>{e.button===2&&(this.aiming=!1)},this._onKey=e=>{if(!this.enabled)return;e.code===`KeyR`&&this.startReload(),e.code===`KeyF`&&this.toggleFireMode?.();let t=[`Digit1`,`Digit2`,`Digit3`,`Digit4`].indexOf(e.code);if(t>=0){let e=this.inventory.weapons;e[t]&&(this.inventory.equip(e[t].id),this.setWeapon(e[t].id))}if(e.code===`KeyQ`){let e=this.inventory.weapons;if(e.length>1){let t=e[(e.findIndex(e=>e.id===this.current)+1)%e.length];this.inventory.equip(t.id),this.setWeapon(t.id)}}},this._onContext=e=>e.preventDefault(),this._onWheel=e=>{if(!this.enabled||!this.player.locked)return;let t=this.inventory.weapons;if(t.length<2)return;let n=t[(t.findIndex(e=>e.id===this.current)+(e.deltaY>0?1:-1)+t.length)%t.length];this.inventory.equip(n.id),this.setWeapon(n.id)},window.addEventListener(`mousedown`,this._onDown),window.addEventListener(`mouseup`,this._onUp),window.addEventListener(`keydown`,this._onKey),window.addEventListener(`contextmenu`,this._onContext),window.addEventListener(`wheel`,this._onWheel,{passive:!0})}attack(){if(this.cooldown>0||this.attackT>=0||this.reloadT>0||!this.game.playing||this.game.paused)return!1;let e=this.currentStats();if(!e)return!1;if(e.mag){if((this.mags[this.current]??0)<=0)return this.audio?.play(`dryfire`),this.startReload(),!1;this.fireGun(e)}else this.startMelee(e);return!0}startMelee(e){let t=this.player.useStamina(e.stamina);this.attackT=0,this.attackKind=`melee`,this.attackDone=!1,this.cooldown=e.rate,this.weak=!t,this.audio?.play(`swing`,{heavy:e.sound===`axe`}),this.player.noise=Math.max(this.player.noise,e.sound===`axe`?.7:.5)}fireGun(e){this.mags[this.current]--,this.cooldown=e.rate,this.attackT=0,this.attackKind=`fire`,this.attackDone=!0,this.recoil=Math.min(1.4,(this.recoil||0)+(e.recoil||.04)*15),this.recoilPitch=(e.recoil||.03)*(.8+this.rng()*.5),this.recoilYaw=(this.rng()-.5)*(e.recoil||.03)*1.2,this.muzzleT=.055,this.lastFire=performance.now(),this.player.noise=1,this.audio?.play(e.sound,{distance:0}),this.game.zombies.alertAt(this.player.pos.x,this.player.pos.z,34),this.game.addTrauma?.(e.recoil?e.recoil*2.4:.2);let t=this.camera.position.clone(),n=this.camera.getWorldDirection(new H),r=new H().crossVectors(n,this.camera.up).normalize(),i=new H().crossVectors(r,n).normalize(),a=e.pellets||1,o=!1,s=0;for(let c=0;c<a;c++){let c=e.spread*(this.aiming?.42:1)*(a>1?1.9:1),l=(this.rng()*2-1)*c,u=(this.rng()*2-1)*c;this._dir.copy(n).addScaledVector(r,l).addScaledVector(i,u).normalize();let d=this.zombies.raycast(t,this._dir,e.range);if(d){o=!0;let t=J(1-d.distance/e.range*.42,.5,1);this.zombies.damage(d.zombie,e.damage*t,{headshot:d.headshot,point:d.point,dir:this._dir,force:e.damage*.4,source:`gun`})?.killed&&s++,this.spawnImpact(d.point,this._dir,`#5f1813`,!0)}else this.worldImpact(t,this._dir,e.range)}o&&this.ui?.hitmarker?.(s>0),this.muzzleFlash(n),this.ui?.refreshWeapon?.()}startReload(){let e=this.currentStats();!e||!e.mag||this.reloadT>0||(this.mags[this.current]??0)>=e.mag||(this.inventory.count(e.ammo)<=0?this.audio?.play(`dryfire`):(this.reloadWeapon=this.current,this.reloadT=e.reload,this.attackT=-1,this.reloadingTotal=e.reload,this.audio?.play(`reload`,{duration:e.reload})))}completeReload(){let e=this.reloadWeapon||this.current,t=ku[e]?.weapon;if(!t||!t.mag)return;let n=t.mag-(this.mags[e]??0),r=this.inventory.count(t.ammo),i=Math.min(n,r);i>0&&(this.inventory.remove(t.ammo,i),this.mags[e]=(this.mags[e]??0)+i),this.reloadT=0,this.reloadWeapon=null,this.ui?.refreshWeapon?.()}muzzleFlash(e){let t=this.current,n={pistol:new H(0,.052,-.29),shotgun:new H(0,.066,-.66),rifle:new H(0,.024,-.68)}[t]||new H(0,.05,-.4);this.root.updateMatrixWorld(!0);let r=n.clone();this.root.localToWorld(r),this.flashSprite.position.copy(r),this.flashSprite.material.rotation=this.rng()*Math.PI*2,this.flashSprite.scale.setScalar(t===`shotgun`?.5:t===`rifle`?.42:.3),this.flashSprite.visible=!0,this.flashLight.position.copy(r),this.flashLight.intensity=5}worldImpact(e,t,n){this._ray.set(e,t),this._ray.far=n;let r=[];try{r=this._ray.intersectObject(this.world.root,!0)}catch{r=[]}if(!r.length)return;let i=r[0],a=i.face?i.face.normal.clone().transformDirection(i.object.matrixWorld):t.clone().negate();this.spawnImpact(i.point,a,`#9a9182`,!1),this.audio?.play(`impact`,{surface:od(a)})}spawnImpact(e,t,n,r){let i=this.game.impactTexture,a=new Rr(new wr({map:i,color:new W(n),transparent:!0,opacity:.9,depthWrite:!1,blending:r?1:2}));if(a.position.copy(e),a.scale.setScalar(r?.22:.17),this.game.scene.add(a),this._impacts.push({sprite:a,vel:t.clone().multiplyScalar(.6),life:.38+this.rng()*.2,max:.6,blood:r}),this._impacts.length>26){let e=this._impacts.shift();e.sprite.parent?.remove(e.sprite),e.sprite.material.dispose()}}update(e,t){this.cooldown=Math.max(0,this.cooldown-e),this.muzzleT=Math.max(0,this.muzzleT-e),this.muzzleT<=0?(this.flashSprite.visible=!1,this.flashLight.intensity=0):this.flashLight.intensity=4+this.rng()*4,this.reloadT>0&&(this.reloadT-=e,this.reloadT<=0&&this.completeReload());let n=this.game.player,r=n.speed,i=n.sprinting;n.bobAxis;let a=t,o=Math.sin(a*1.2)*.004+Math.cos(n.bobTime)*.014*Math.min(1,r/4.2),s=Math.sin(a*1.7)*.003+Math.abs(Math.sin(n.bobTime))*.012*Math.min(1,r/4.2);this.swayX=Al(this.swayX,o,8,e),this.swayY=Al(this.swayY,s,8,e);let c=this.aiming&&this.currentStats()?.mag&&this.reloadT<=0,l=Al(this.aimBlend||0,+!!c,14,e);this.aimBlend=l,this.recoil=Al(this.recoil||0,0,9,e),this.recoilPitch=Al(this.recoilPitch||0,0,8,e),this.recoilYaw=Al(this.recoilYaw||0,0,9,e);let u=.255+this.swayX,d=-.225+this.swayY,f=-.47,p=.015,m=-.035,h=.005;if(c&&(u=kl(u,0,l),d=kl(d,-.115,l),f=kl(f,-.38,l),m=kl(m,0,l),p=kl(p,0,l)),i&&(u+=.045,d-=.055,p-=.22,h+=.2,m+=.15),this.reloadT>0){let e=1-this.reloadT/this.reloadingTotal,t=Math.sin(Math.min(1,e)*Math.PI);d-=t*.14,p-=t*.5,h+=t*.35}if(f+=this.recoil*.055,p-=this.recoil*.09,u+=this.recoilYaw*.4,this.attackT>=0){this.attackT+=e;let t=this.currentStats(),n=this.attackKind===`melee`?.42:.12,r=Math.min(1,this.attackT/n);if(this.attackKind===`melee`){let e=Math.sin(r*Math.PI),n=Math.sin(r*Math.PI*.9);m-=n*1.25,p+=e*.45,h-=e*.75,u-=e*.08,d+=e*.06,!this.attackDone&&r>.34&&(this.attackDone=!0,this.meleeHit(t)),r>=1&&(this.attackT=-1,this.attackKind=null)}else r>=1&&(this.attackT=-1)}this.root.position.set(u,d,f),this.root.rotation.set(p,m,h);let g=this.game.sky?.night||0;this.viewLights.amb.intensity=.62-g*.3,this.viewLights.key.intensity=1.25-g*.65,this.viewLights.rim.intensity=.55-g*.25,this.flashSprite.visible=this.muzzleT>0;for(let t=this._impacts.length-1;t>=0;t--){let n=this._impacts[t];n.life-=e,n.sprite.position.addScaledVector(n.vel,e),n.vel.multiplyScalar(.92),n.sprite.material.opacity=Math.max(0,n.life/n.max)*.9,n.sprite.scale.setScalar((n.blood?.16:.13)*(1.6-n.life/n.max)),n.life<=0&&(n.sprite.parent?.remove(n.sprite),n.sprite.material.dispose(),this._impacts.splice(t,1))}let _=c?52:74;this.game.camera.fov=Al(this.game.camera.fov,_,10,e),this.game.camera.updateProjectionMatrix(),this.aimingForUi=c}meleeHit(e){let t=this.camera.position.clone(),n=this.camera.getWorldDirection(new H),r=e.range,i=null,a=this.zombies.raycast(t,n,r+.25);if(a&&(i=a),!i){let e=null;for(let i of this.zombies.zombies){if(i.dead)continue;let a=i.pos.x,o=i.pos.z,s=a-t.x,c=o-t.z,l=Math.hypot(s,c);l>r+.55||(s*n.x+c*n.z)/Math.max(.001,l)<.5||this.zombies.lineBlocked(t.x,t.z,a,o)||(!e||l<e.d)&&(e={zombie:i,d:l,point:new H(a,1.1,o)})}e&&(i={zombie:e.zombie,distance:e.d,headshot:!1,point:e.point})}if(!i){this._ray.set(t,n),this._ray.far=r;try{let e=this._ray.intersectObject(this.world.root,!0);e.length&&(this.audio?.play(`impact`,{surface:`wall`}),this.spawnImpact(e[0].point,n.clone().negate(),`#8f8779`,!1))}catch{}return}let o=(this.weak?e.damage*.48:e.damage)*((this.inventory.condition[this.current]??100)<20?.62:1),s=new H().subVectors(i.zombie.pos,t).setY(0).normalize(),c=this.zombies.damage(i.zombie,o,{headshot:i.headshot,point:i.point,dir:s,force:o*.5,source:`melee`});this.inventory.damageCondition(this.current,.55+(e.sound===`axe`?.8:0)),this.audio?.play(e.sound===`blunt`?`bluntHit`:`bladeHit`),this.ui?.hitmarker?.(!!c?.killed),this.game.addTrauma?.(i.headshot?.24:.14),this.player.noise=Math.max(this.player.noise,.8),this.game.zombies.alertAt(this.player.pos.x,this.player.pos.z,9)}bindResize(e,t){this.viewCamera.aspect=e/t,this.viewCamera.updateProjectionMatrix()}render(){this.viewCamera.aspect=this.game.camera.aspect,this.viewCamera.updateProjectionMatrix();let e=this.game.renderer,t=e.autoClear;e.autoClear=!1,e.clearDepth(),e.render(this.viewScene,this.viewCamera),e.autoClear=t}reset(){this.mags={...id},this.cooldown=0,this.attackT=-1,this.reloadT=0,this.setWeapon(this.inventory.equipped||`machete`,!0)}dispose(){window.removeEventListener(`mousedown`,this._onDown),window.removeEventListener(`mouseup`,this._onUp),window.removeEventListener(`keydown`,this._onKey),window.removeEventListener(`contextmenu`,this._onContext),window.removeEventListener(`wheel`,this._onWheel);for(let e of this._impacts)e.sprite.parent?.remove(e.sprite),e.sprite.material.dispose()}};function od(e){return Math.abs(e.y)>.7?`ground`:`wall`}var sd={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},cd=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ld=new Ha(-1,1,1,-1,0,1),ud=new class extends pr{constructor(){super(),this.setAttribute(`position`,new tr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new tr([0,2,0,0,2,0],2))}},dd=class{constructor(e){this._mesh=new ri(ud,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ld)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},fd=class extends cd{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof ea?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Zi.clone(e.uniforms),this.material=new ea({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new dd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},pd=class extends cd{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},md=class extends cd{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},hd=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new V);this._width=n.width,this._height=n.height,t=new Mt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fd(sd),this.copyPass.material.blending=0,this.timer=new Xa}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}pd!==void 0&&(r instanceof pd?n=!0:r instanceof md&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new V);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},gd=class extends cd{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new W}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},_d={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new W(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},vd=class e extends cd{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new V(256,256):new V(e.x,e.y),this.clearColor=new W(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Mt(i,a,{type:g,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Mt(i,a,{type:g,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Mt(i,a,{type:g,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=_d;this.highPassUniforms=Zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new ea({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Zi.clone(sd.uniforms),this.blendMaterial=new ea({uniforms:this.copyUniforms,vertexShader:sd.vertexShader,fragmentShader:sd.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new W,this._oldClearAlpha=1,this._basic=new Gr,this._fsQuad=new dd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new V(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new ea({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new V(.5,.5)},direction:{value:new V(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new ea({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};vd.BlurDirectionX=new V(1,0),vd.BlurDirectionY=new V(0,1);var yd={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},bd=class extends cd{constructor(){super(),this.isOutputPass=!0,this.uniforms=Zi.clone(yd.uniforms),this.material=new ta({name:yd.name,uniforms:this.uniforms,vertexShader:yd.vertexShader,fragmentShader:yd.fragmentShader}),this._fsQuad=new dd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},yt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},xd={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1.05},uAberration:{value:65e-5},uGrain:{value:.008},uDesaturate:{value:.16},uWarmth:{value:.06},uDamage:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    precision highp float;
    varying vec2 vUv;
    uniform sampler2D tDiffuse;
    uniform float uTime;
    uniform float uVignette;
    uniform float uAberration;
    uniform float uGrain;
    uniform float uDesaturate;
    uniform float uWarmth;
    uniform float uDamage;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    void main() {
      vec2 uv = vUv;
      vec2 centered = uv - 0.5;
      float r2 = dot(centered, centered);

      // subtle lateral chromatic aberration toward the edges
      vec2 dir = centered * uAberration * (0.35 + r2 * 2.4);
      vec3 col;
      col.r = texture2D(tDiffuse, uv + dir).r;
      col.g = texture2D(tDiffuse, uv).g;
      col.b = texture2D(tDiffuse, uv - dir).b;

      // filmic contrast and colour grade
      float luma = dot(col, vec3(0.2126, 0.7152, 0.0722));
      col = mix(col, vec3(luma), uDesaturate);
      col *= vec3(1.0 + uWarmth * 0.5, 1.0 + uWarmth * 0.12, 1.0 - uWarmth * 0.3);
      col = pow(col, vec3(0.97));
      col = mix(col, col * col * (3.0 - 2.0 * col), 0.12);
      // warm lifted shadows / cool highlights
      col += vec3(0.012, 0.006, -0.004) * (1.0 - smoothstep(0.0, 0.5, luma));
      col = mix(col, col * vec3(0.94, 0.99, 1.04), smoothstep(0.55, 1.0, luma) * 0.4);

      // vignette
      float vig = smoothstep(0.86, 0.24, r2 * uVignette);
      col *= mix(0.72, 1.0, vig);

      // damage tint at low health
      col = mix(col, vec3(0.24, 0.02, 0.01), uDamage * smoothstep(0.2, 0.7, r2) * 0.6);

      // grain
      float g = hash(uv * vec2(1920.0, 1080.0) + uTime * 53.0) - 0.5;
      col += g * uGrain;

      // gentle scanline
      col *= 1.0 - 0.006 * (0.5 + 0.5 * sin(uv.y * 1080.0 * 3.14159));

      gl_FragColor = vec4(max(col, vec3(0.0)), 1.0);
    }
  `},Sd=class{constructor(e,t,n,r={}){this.renderer=e,this.scene=t,this.camera=n,this.quality=r.quality||`balanced`,this.bloomEnabled=r.bloom!==!1,this.enabled=!0,this.width=window.innerWidth,this.height=window.innerHeight,this.composer=new hd(e),this.composer.renderTarget1.samples=4,this.composer.renderTarget2.samples=4,this.renderPass=new gd(t,n),this.bloom=new vd(new V(this.width,this.height),.34,.62,.8),this.grade=new fd(xd),this.output=new bd,this.composer.addPass(this.renderPass),this.composer.addPass(this.bloom),this.composer.addPass(this.grade),this.composer.addPass(this.output),this.setQuality(this.quality)}setQuality(e){this.quality=e,this.enabled=e!==`low`,this.bloom.enabled=this.bloomEnabled&&e!==`low`,this.bloom&&(this.bloom.strength=e===`high`?.46:.3,this.bloom.radius=e===`high`?.5:.38,this.bloom.threshold=e===`high`?.76:.82),this.grade.uniforms.uGrain.value=e===`high`?.009:.007,this.grade.uniforms.uAberration.value=e===`high`?8e-4:6e-4}setBloom(e){this.bloomEnabled=e,this.bloom.enabled=e&&this.quality!==`low`}setSize(e,t,n=1){this.width=Math.max(1,Math.floor(e*n)),this.height=Math.max(1,Math.floor(t*n)),this.composer.setSize(this.width,this.height),this.renderPass.setSize?.(this.width,this.height),this.bloom.setSize(this.width,this.height),this.grade.uniforms.uAberration.value=(this.quality===`high`?8e-4:6e-4)*(1080/Math.max(480,this.height))*.9}setDamage(e){this.grade.uniforms.uDamage.value=e}update(e){this.grade.uniforms.uTime.value+=e*.6}render(){this.enabled?this.composer.render():this.renderer.render(this.scene,this.camera)}},Cd=`deadhour.settings.v1`,wd={quality:`balanced`,scale:1,bloom:!0,subtitles:!0,sens:1},Td={clear:`CLEAR SKIES`,haze:`LIGHT HAZE`,overcast:`OVERCAST`,rain:`RAIN`,storm:`STORM`},Ed={walker:`The dead found you in the street.`,infected:`It was faster than it looked.`,brute:`The big one got its hands on you.`,screamer:`Its scream brought the whole block down on you.`,dehydration:`The city is thirsty work.`,infection:`The fever took you before the dead could.`,theinfected:`The city took another one.`};function Dd(){let e={...wd};try{let t=localStorage.getItem(Cd);if(t){let n=JSON.parse(t);for(let t of Object.keys(wd))t in n&&(t!==`quality`||[`low`,`balanced`,`high`].includes(n[t]))&&(t!==`scale`||[.7,.85,1].includes(Number(n[t])))&&(t!==`sens`||[.5,1,1.6].includes(Number(n[t])))&&(e[t]=t===`scale`||t===`sens`?Number(n[t]):n[t])}}catch{}return e}function Od(){let e=document.createElement(`canvas`);e.width=e.height=96;let t=e.getContext(`2d`),n=t.createRadialGradient(48,48,1,48,48,48);n.addColorStop(0,`rgba(255,255,255,1)`),n.addColorStop(.2,`rgba(255,246,224,0.95)`),n.addColorStop(.48,`rgba(255,214,150,0.5)`),n.addColorStop(1,`rgba(255,180,90,0)`),t.fillStyle=n,t.fillRect(0,0,96,96),t.globalCompositeOperation=`lighter`,t.strokeStyle=`rgba(255,238,196,0.8)`,t.lineWidth=1.5;for(let e=0;e<9;e++){let n=e/9*Math.PI*2+.41,r=4+e%3*2,i=16+e%4*5;t.beginPath(),t.moveTo(48+Math.cos(n)*r,48+Math.sin(n)*r),t.lineTo(48+Math.cos(n)*i,48+Math.sin(n)*i),t.stroke()}let r=new ji(e);return r.needsUpdate=!0,r}var kd=class{constructor(){this.canvas=document.getElementById(`game`),this.settings=Dd(),this.playing=!1,this.paused=!1,this.startedOnce=!1,this.everLocked=!1,this.elapsed=0,this.lastFrame=performance.now(),this.statsData={loot:0},this._safeToast=!1,this._lastCause=null,this._questDelivered=!1,this.setupRenderer(),this.setupScene(),this.impactTexture=Od(),this.sky=new Wl(this.scene,this.renderer),this.world=new zu(this.scene,{quality:this.settings.quality}),this.player=new Gu(this.camera,this.world,{canvas:this.canvas,sensitivity:.0022*this.settings.sens}),this.audio=new $u,this.inventory=new Qu(this,{maxWeight:34}),this.giveStartingKit(),this.quest={stage:0,title:`Search the pharmacy`,sub:`Harbor Pharmacy`,target:this.world.questPoints.pharmacy||new H(1,1.6,-9)},this.ui=new nd(this),this.zombies=new Xu(this.scene,this.world,this.player,{maxAlive:18,onEvent:e=>this.onZombieEvent(e)}),this.combat=new ad(this),this.post=new Sd(this.renderer,this.scene,this.camera,{quality:this.settings.quality,bloom:this.settings.bloom}),this.bindPlayer(),this.bindSky(),this.bindWindow(),this.ui.setQuest(this.quest.title,this.quest.sub),this.applySettings(),this.resize(),this.sky.update(0,this.camera.position,this.player.pos),this.world.update(.016,0,this.player.pos,this.camera.position),this.camera.updateMatrixWorld(!0),this.post.render(),this.ui.el.status.innerHTML=`<i class="status-dot"></i> CITY READY · CLICK PLAY`,this.lastFrame=performance.now(),this.frame=this.frame.bind(this),requestAnimationFrame(this.frame)}setupRenderer(){this.renderer=new El({canvas:this.canvas,antialias:!0,alpha:!1,stencil:!1,powerPreference:`high-performance`}),this.renderer.setClearColor(723978,1),this.renderer.outputColorSpace=ze,this.renderer.toneMapping=4,this.renderer.toneMappingExposure=1.04,this.renderer.shadowMap.enabled=!1,this.renderer.shadowMap.type=2,this.renderer.info.autoReset=!0}setupScene(){this.scene=new yn,this.scene.background=new W(`#0d0e0c`),this.camera=new za(74,16/9,.06,820),this.camera.rotation.order=`YXZ`}giveStartingKit(){let e=this.inventory;e.add(`machete`,1),e.add(`bandage`,2),e.add(`water`,1),e.add(`energy_bar`,1),e.equip(`machete`)}bindPlayer(){this.player.onStep=({surface:e,volume:t,sprint:n})=>{this.audio.play(`footstep`,{surface:e,volume:J(t*(n?1.05:1),0,1)})},this.player.onJump=()=>{this.audio.play(`footstep`,{surface:`stone`,volume:.4})},this.player.onHurt=(e,t)=>{this.audio.play(`hurt`),this.ui.damageFlash(),e>14&&this.ui.mini(`WOUNDED`),this.post?.setDamage(1)},this.player.onHeal=()=>{this.ui.mini(`PATCHED UP`)},this.player.onDeath=e=>this.onDeath(e),this.player.onLockChange=e=>this.onLockChange(e),this.player.onInteractFocus=e=>{!e&&this.ui&&(this.ui.searchTarget=null)}}bindSky(){this.sky.onWeatherChange=e=>{this.ui&&(this.ui.mini(`WEATHER · `+(Td[e]||e.toUpperCase())),this.audio?.setWeather({rain:this.sky.rainAmount||0,overcast:this.sky.overcast||.2}))},this.sky.onLightning=()=>{this.audio?.play(`lightning`)}}bindWindow(){this._onResize=()=>this.resize(),this._onVisibility=()=>{if(document.hidden)for(let e in this.player.keys)this.player.keys[e]=!1},window.addEventListener(`resize`,this._onResize),document.addEventListener(`visibilitychange`,this._onVisibility)}start(){(!this.playing||this.paused)&&(this.audio.init(),this.audio.resume(),this.audio.playing=!0,this.audio.setWeather({rain:this.sky.rainAmount||0,overcast:this.sky.overcast||.2}),this.playing=!0,this.paused=!1,this.player.enabled=!0,this.player.frozen=!1,this.combat.enabled=!0,this.player.alive||this.player.respawn(18,3.8),this.ui.showGame(),this.player.lock(),this.startedOnce||(this.startedOnce=!0,this.ui.subtitle(`Harbor City, six hours after the evacuation order. The pharmacy on Harbor Avenue may still have antibiotics.`,7),this.ui.toast(`Harbor City`,`Search the pharmacy`,``)),this.syncQuest())}setPaused(e){if(this.paused=e,this.player.frozen=e,this.player.enabled=this.playing&&!e,this.combat.enabled=this.playing&&!e,e){for(let e in this.player.keys)this.player.keys[e]=!1;this.player.crouching=!1}}restart(){this.ui.closeDeath(),this.player.respawn(18,3.8),this.player.hunger=86,this.player.thirst=74,this.player.infection=0,this.player.kills=0,this.player.timeAlive=0,this.player.speed=0,this.zombies.reset(),this.combat.reset(),this.statsData.loot=0,this._safeToast=!1,this.playing=!0,this.setPaused(!1),this.ui.showGame(),this.syncQuest(),this.player.lock(),this.ui.toast(`Back on Harbor Avenue`,`Try to last a little longer`,``)}quitToMenu(){this.playing=!1,this.setPaused(!1),this.player.enabled=!1,this.player.frozen=!0,this.player.unlock(),this.combat.enabled=!1,this.audio.playing=!1,this.ui.closeDeath(),this.ui.closePanel(),this.ui.showMenu()}onDeath(e){this._lastCause=e,this.audio.play(`hurt`),this.post?.setDamage(1),this.ui.showDeath({cause:Ed[String(e).toLowerCase()]||Ed[String(e)]||`The city took another one.`}),this.paused=!0,this.combat.enabled=!1,this.player.enabled=!1}onLockChange(e){e?this.everLocked=!0:this.playing&&!this.paused&&this.everLocked&&!document.hidden&&(this.ui?.panel||(this.setPaused(!0),this.ui.openPause()))}syncQuest(){if(this.ui){if(this.ui.setQuest(this.quest.title,this.quest.sub),this.quest.target){let e=Math.hypot(this.quest.target.x-this.player.pos.x,this.quest.target.z-this.player.pos.z);this.ui.el.questSub.textContent=`${this.quest.sub} · ${e<4?`HERE`:Math.round(e)+` m`}`}this.quest.stage>=2&&this.ui.el.quest?.classList.add(`done`)}}onLoot(e,t){this.statsData.loot+=t,e===`antibiotics`&&this.quest.stage===0&&(this.quest.stage=1,this.quest.title=`Deliver the antibiotics`,this.quest.sub=`The Old Laundry`,this.quest.target=this.world.questPoints.safehouse,this.ui.setQuest(this.quest.title,this.quest.sub),this.ui.toast(`Antibiotics found`,`Take them to the Old Laundry safe house`,`good`),this.ui.subtitle(`This is the full course. The Old Laundry safe house is west, past the checkpoint.`,6),this.audio.play(`quest`))}updateQuest(){if(this.quest.stage===1&&!this._questDelivered){let e=this.world.questPoints.safehouse;Math.hypot(e.x-this.player.pos.x,e.z-this.player.pos.z)<6.5&&this.inventory.count(`antibiotics`)>0&&(this._questDelivered=!0,this.quest.stage=2,this.quest.title=`Safe house supplied`,this.quest.sub=`The Old Laundry`,this.quest.target=null,this.inventory.remove(`antibiotics`,1),this.ui.setQuest(this.quest.title,this.quest.sub),this.ui.el.quest?.classList.add(`done`),this.ui.toast(`Antibiotics delivered`,`The Old Laundry will hold a little longer`,`good`),this.ui.subtitle(`The antibiotics are in the right hands. The safe house can treat the sick — and you.`,6),this.audio.play(`quest`),this.player.heal(20),this.player.addStamina(30))}this.player.inSafeZone&&!this._safeToast?(this._safeToast=!0,this.ui.mini(`SAFE HOUSE · THE OLD LAUNDRY`),this.ui.subtitle(`The Old Laundry. The infected rarely come this far inside. Catch your breath.`,5)):this.player.inSafeZone||(this._safeToast=!1)}onZombieEvent(e){let t=this.audio;if(!t)return;let n=this.camera.position,r=this.player.yaw;if(e.type===`groan`&&e.zombie){let{pan:i,vol:a,dist:o}=t.panFor(e.zombie.pos,n,r);o<30&&t.groan(i,a*.7,o>13)}else if(e.type===`scream`&&e.zombie){let{pan:i,vol:a,dist:o}=t.panFor(e.zombie.pos,n,r);o<42&&t.scream(i,a)}else e.type===`attack`&&e.zombie?t.playAt(`swing`,{x:e.zombie.pos.x,y:1.2,z:e.zombie.pos.z},n,r,{heavy:!0}):e.type===`playerHit`?this.ui.damageFlash():e.type===`kill`&&e.zombie&&t.playAt(`kill`,{x:e.zombie.pos.x,y:1.1,z:e.zombie.pos.z},n,r,{})}setSetting(e,t){this.settings[e]=t;try{localStorage.setItem(Cd,JSON.stringify(this.settings))}catch{}this.applySettings()}applySettings(){let e=this.settings;this.renderer&&(this.post&&(this.post.setQuality(e.quality),this.post.setBloom(e.bloom)),this.renderer.shadowMap.enabled=!1),this.player&&(this.player.sensitivity=.0022*e.sens),this.ui&&this.ui.applySettings(),this.resize()}resize(){let e=Math.max(1,window.innerWidth),t=Math.max(1,window.innerHeight),n=this.settings,r=n.quality===`low`?1:n.quality===`high`?1.6:1.3,i=Math.min(window.devicePixelRatio||1,r),a=Math.max(320,Math.floor(e*n.scale*i)),o=Math.max(180,Math.floor(t*n.scale*i));this.renderer.setPixelRatio(1),this.renderer.setSize(a,o,!1),this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.combat?.bindResize(e,t),this.post&&(this.post.composer.setPixelRatio(1),this.post.setSize(a,o,1))}stats(){return{time:this.player.timeAlive,kills:this.player.kills,loot:this.statsData.loot,health:this.player.health,weight:this.inventory.weight}}addTrauma(e){this.player.addTrauma(e)}frame(e){requestAnimationFrame(this.frame);let t=(e-this.lastFrame)/1e3;this.lastFrame=e;let n=J(t,0,.05);if(this.elapsed+=n,this.paused||(this.sky.update(n,this.camera.position,this.player.pos),this.world.update(n,this.elapsed,this.player.pos,this.camera.position),this.playing&&(this.player.update(n,this.elapsed),this.player.alive&&this.zombies.update(n,this.elapsed),this.combat.update(n,this.elapsed),this.updateQuest(),this.audio.update(n,{playing:!0,player:this.player,sky:this.sky,camera:this.camera.position,yaw:this.player.yaw}),this.ui.update(n,this.elapsed))),this.player){let e=1-J(this.player.health/100,0,1),t=J(this.player.infection/100,0,1),n=this.player.healthFlash>0?.16*Math.min(1,this.player.healthFlash):0;this.post?.setDamage(J(e*.82+t*.22+n,0,1))}this.post.update(n),this.post.render();let r=this.playing&&this.player.alive&&!this.paused&&this.ui.screen===`game`;this.combat.root.visible=r,r&&this.combat.render()}};try{let e=new kd;window.__deadHour=e,window.game=e}catch(e){console.error(e);let t=document.getElementById(`menu-status`);t&&(t.innerHTML=`<i class="status-dot"></i> CITY FAILED TO LOAD · SEE CONSOLE`);let n=document.getElementById(`play-btn`);n&&(n.disabled=!0)}