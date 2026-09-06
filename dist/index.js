"use strict";var o=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var m=o(function(G,p){
var E=require('@stdlib/math-base-assert-is-nanf/dist'),b=require('@stdlib/math-base-special-absf/dist');function O(r,e,n,f,s,c,_){var v,u,t,i,a;if(r<=0)return NaN;for(u=f,t=_,a=0;a<r&&(i=e[u],!(i===i&&s[t]===0));a++)u+=n,t+=c;if(a===r)return NaN;for(v=b(i),a+=1,a;a<r;a++)u+=n,t+=c,!s[t]&&(i=e[u],!E(i)&&(i=b(i),i<v&&(v=i)));return v}p.exports=O
});var j=o(function(H,x){
var y=require('@stdlib/strided-base-stride2offset/dist'),g=m();function h(r,e,n,f,s){return g(r,e,n,y(r,n),f,s,y(r,s))}x.exports=h
});var l=o(function(I,k){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=j(),z=m();w(d,"ndarray",z);k.exports=d
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=l(),q,R=B(A(__dirname,"./native.js"));C(R)?q=D:q=R;module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
