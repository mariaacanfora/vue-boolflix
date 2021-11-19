(function(e){function t(t){for(var n,s,o=t[0],l=t[1],u=t[2],p=0,f=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,o=1;o<r.length;o++){var l=r[o];0!==a[l]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},i=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var c=l;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"17b5":function(e,t,r){e.exports=r.p+"img/en.38c13285.png"},"25fe":function(e,t,r){e.exports=r.p+"img/es.045c1f47.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("Header",{on:{search:e.receiveQueryString}}),r("Main",{attrs:{query:e.query}})],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("main",[r("div",{staticClass:"container py-5"},[r("div",{staticClass:"row row-cols-3"},e._l(e.movies,(function(e){return r("Card",{key:e.id,attrs:{film:e}})})),1),r("div",{staticClass:"row row-cols-3"},e._l(e.series,(function(e){return r("Card",{key:e.id,attrs:{film:e}})})),1)])])},o=[],l=r("bc3a"),u=r.n(l),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"col p-0 card-container text-center"},[r("img",{staticClass:"poster-img",attrs:{src:e.getPosterImg("w342",e.film.poster_path),alt:"film's poster"}}),r("div",{staticClass:"d-flex flex-column align-items-center overlay p-5"},[r("h1",[e._v(e._s(e.film.title))]),e._v(" "),e.film.title!==e.film.original_title?r("h3",[e._v(e._s(e.film.original_title))]):e._e(),r("img",{staticClass:"w-15",attrs:{src:e.getLangFlag(e.film.original_language),alt:"language's flag"}}),r("span",[e._l(e.getVote(e.film.vote_average),(function(e,t){return r("i",{key:t,staticClass:"fa fa-star",attrs:{"aria-hidden":"true"}})})),e._l(5-e.getVote(e.film.vote_average),(function(e,t){return r("i",{key:"A"+t,staticClass:"fa fa-star-o",attrs:{"aria-hidden":"true"}})}))],2),r("p",{staticClass:"text-center"},[e._v(e._s(e.film.overview))])])])},p=[],f=(r("5377"),{name:"Card",props:{film:Object},data:function(){return{imgUrl:"https://image.tmdb.org/t/p/",flags:{en:"en.png",it:"it.png",fr:"fr.png",es:"es.png"}}},methods:{getPosterImg:function(e,t){return null===t?r("a345"):this.imgUrl+e+t},getLangFlag:function(e){return this.flags[e]?r("bb6e")("./"+this.flags[e]):r("ee87")},getVote:function(e){var t=e/2,r=Math.ceil(t);return r}}}),d=f,g=r("2877"),m=Object(g["a"])(d,c,p,!1,null,null,null),v=m.exports,h={components:{Card:v},name:"Main",data:function(){return{apiKey:"bdb91d3c68495961f770560622014e12",apiUrl:"https://api.themoviedb.org/3",imgUrl:"https://image.tmdb.org/t/p/",movies:[],series:[],flags:{en:"en.png",it:"it.png",fr:"fr.png",es:"es.png"},totalStars:[]}},props:{query:String},methods:{serverCall:function(e,t,r){var n=this;u.a.get(this.apiUrl+"/search/"+e,{params:{query:t,api_key:this.apiKey}}).then((function(e){n[r]=e.data.results}))},doubleServerCall:function(e,t,r,n,a){this.serverCall(e,r,n),this.serverCall(t,r,a)}},watch:{query:function(e){this.doubleServerCall("movie","tv",e,"movies","series")}}},y=h,b=Object(g["a"])(y,s,o,!1,null,null,null),_=b.exports,x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"py-3 bg-dark d-flex justify-content-between"},[r("h1",{staticClass:"text-danger ps-3"},[e._v("BOOLFLIX")]),r("Searchbar",{on:{search:e.passQuery}})],1)},C=[],w=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"input-group justify-content-end pe-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],staticClass:"w-25",attrs:{type:"text",placeholder:"Search..."},domProps:{value:e.query},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$emit("search",e.query)},input:function(t){t.target.composing||(e.query=t.target.value)}}})])},O=[],j={name:"Searchbar",data:function(){return{query:""}}},k=j,q=Object(g["a"])(k,w,O,!1,null,null,null),S=q.exports,P={components:{Searchbar:S},name:"Header",data:function(){return{query:""}},methods:{passQuery:function(e){this.query=e,this.$emit("search",this.query)}}},M=P,E=Object(g["a"])(M,x,C,!1,null,null,null),$=E.exports,U={components:{Header:$,Main:_},name:"App",data:function(){return{query:""}},methods:{receiveQueryString:function(e){this.query=e}}},L=U,F=(r("5c0b"),Object(g["a"])(L,a,i,!1,null,null,null)),Q=F.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Q)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},6921:function(e,t,r){e.exports=r.p+"img/fr.275d4a9d.png"},"9c0c":function(e,t,r){},a345:function(e,t,r){e.exports=r.p+"img/default_poster.99397ac5.png"},bb6e:function(e,t,r){var n={"./default.png":"ee87","./default_poster.png":"a345","./en.png":"17b5","./es.png":"25fe","./fr.png":"6921","./it.png":"e33f"};function a(e){var t=i(e);return r(t)}function i(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id="bb6e"},e33f:function(e,t,r){e.exports=r.p+"img/it.e832bda1.png"},ee87:function(e,t,r){e.exports=r.p+"img/default.52b0f754.png"}});
//# sourceMappingURL=app.fb74078d.js.map