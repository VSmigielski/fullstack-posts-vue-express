(function(e){function t(t){for(var r,a,u=t[0],s=t[1],i=t[2],p=0,f=[];p<u.length;p++)a=u[p],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&f.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,i||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,u=1;u<n.length;u++){var s=n[u];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={app:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var i=0;i<u.length;i++)t(u[i]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1126:function(e,t,n){"use strict";n("b6f8")},1159:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("cf05"),o=n.n(c),a=Object(r["e"])("img",{alt:"Vue logo",src:o.a},null,-1);function u(e,t,n,c,o,u){var s=Object(r["l"])("PostComponent");return Object(r["h"])(),Object(r["d"])("div",null,[a,Object(r["g"])(s)])}n("99af");var s=function(e){return Object(r["j"])("data-v-13863f24"),e=e(),Object(r["i"])(),e},i={class:"container"},l=s((function(){return Object(r["e"])("h1",null,"Latest Posts",-1)})),p={class:"create-post"},f=s((function(){return Object(r["e"])("label",{for:"create-post"},"Say Something...",-1)})),d=s((function(){return Object(r["e"])("hr",null,null,-1)})),b={key:0,class:"error"},O=["item","index","onDblclick"],j={class:"text"};function v(e,t,n,c,o,a){return Object(r["h"])(),Object(r["d"])("div",i,[l,Object(r["e"])("div",p,[f,Object(r["o"])(Object(r["e"])("input",{type:"text",id:"create-post","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.text=e}),placeholder:"Create a post"},null,512),[[r["n"],o.text]]),Object(r["e"])("button",{onClick:t[1]||(t[1]=function(){return a.createPost&&a.createPost.apply(a,arguments)})},"Post!")]),d,o.error?(Object(r["h"])(),Object(r["d"])("p",b,Object(r["m"])(o.error),1)):Object(r["c"])("",!0),(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(o.posts,(function(e,t){return Object(r["h"])(),Object(r["d"])("div",{class:"post",item:e,index:t,key:e._id,onDblclick:function(t){return a.deletePost(e._id)}},[Object(r["f"])(Object(r["m"])("".concat(e.createdAt.getDate(),"/\n            ").concat(e.createdAt.getMonth(),"/\n            ").concat(e.createdAt.getFullYear()))+" ",1),Object(r["e"])("p",j,Object(r["m"])(e.text),1)],40,O)})),128))])}var h=n("1da1"),m=(n("96cf"),n("5530")),g=n("d4ec"),x=n("bee2"),y=(n("d3b7"),n("d81d"),n("bc3a")),P=n.n(y),w="api/posts/",k=function(){function e(){Object(g["a"])(this,e)}return Object(x["a"])(e,null,[{key:"getPosts",value:function(){return new Promise(function(){var e=Object(h["a"])(regeneratorRuntime.mark((function e(t,n){var r,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,P.a.get(w);case 3:r=e.sent,c=r.data,t(c.map((function(e){return Object(m["a"])(Object(m["a"])({},e),{},{createdAt:new Date(e.createdAt)})}))),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),n(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,n){return e.apply(this,arguments)}}())}},{key:"insertPost",value:function(e){return P.a.post(w,{text:e})}},{key:"deletePost",value:function(e){return P.a.delete("".concat(w).concat(e))}}]),e}(),_=k,R={name:"PostComponent",data:function(){return{posts:[],error:"",text:""}},created:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,_.getPosts();case 3:e.posts=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),e.error=t.t0.message;case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},methods:{createPost:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,_.insertPost(e.text);case 2:return t.next=4,_.getPosts();case 4:e.posts=t.sent,e.text="";case 6:case"end":return t.stop()}}),t)})))()},deletePost:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,_.deletePost(e);case 2:return n.next=4,_.getPosts();case 4:t.posts=n.sent;case 5:case"end":return n.stop()}}),n)})))()}}},S=(n("d49a"),n("6b0d")),A=n.n(S);const C=A()(R,[["render",v],["__scopeId","data-v-13863f24"]]);var M=C,D={name:"App",components:{PostComponent:M}};n("1126");const J=A()(D,[["render",u]]);var T=J;Object(r["b"])(T).mount("#app")},b6f8:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d49a:function(e,t,n){"use strict";n("1159")}});
//# sourceMappingURL=app.426ac7d7.js.map