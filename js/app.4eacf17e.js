(function(e){function t(t){for(var a,o,s=t[0],u=t[1],l=t[2],p=0,f=[];p<s.length;p++)o=s[p],r[o]&&f.push(r[o][0]),r[o]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var u=n[s];0!==r[u]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var c=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var a=n("c21b"),r=n.n(a);r.a},1:function(e,t){},2687:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Leaflet"),n("h2",[e._v("All Rides")]),n("Vuetable")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"leaflet-comp"}},[n("l-map",{attrs:{zoom:e.zoom,center:e.center}},[n("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),e._l(e.popups,function(t,a){return n("l-marker",{key:"marker"+a,attrs:{"lat-lng":t[0]}},[n("l-popup",{key:"pop"+a,attrs:{"lat-lng":e.popups[a][0],content:e.popups[a][1]}})],1)})],2)],1)},s=[],u=(n("96cf"),n("3040")),l=(n("7f7f"),n("458e")),c=(n("6cc5"),n("e11e")),p=n.n(c),f=n("bf2a"),m=n.n(f);delete p.a.Icon.Default.prototype._getIconUrl,p.a.Icon.Default.mergeOptions({iconRetinaUrl:n("584d"),iconUrl:n("6397"),shadowUrl:n("e2b9")});var d={components:{LMap:l["LMap"],LTileLayer:l["LTileLayer"],LMarker:l["LMarker"],LPolyline:l["LPolyline"],LPopup:l["LPopup"]},data:function(){return{zoom:2,center:[0,0],url:"http://{s}.tile.osm.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}},computed:{rides:function(){return this.$store.state.activities.map(function(e){return e.start_latlng})},polylines:function(){return this.$store.state.activities.map(function(e){var t=m.a.polyline.parse(e.map.summary_polyline),n=t._layers[t._leaflet_id-1].feature.geometry.coordinates;return console.log(n),n||void console.log(n)})},popups:function(){return this.$store.state.activities.map(function(e){return[e.start_latlng,"<p>"+e.name+"<br>"+(e.distance/1e3).toFixed(2)+" km "+e.type+"<br>"+(e.moving_time/3600).toFixed(2)+" hrs Moving   "+(e.elapsed_time/3600).toFixed(2)+" hrs Total</p>"]})}},methods:{getAllActivities:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n,a,r,i,o;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=new Date(this.$store.state.start),n=1,a=[],r="";case 4:return e.next=6,fetch("https://www.strava.com/api/v3/athletes/7594/activities?access_token=641c02aede2bd589ccf83096c9ea706c2fd3a1ec&per_page=50&page="+n);case 6:return i=e.sent,e.next=9,i.json();case 9:if(r=e.sent,o=r.reduce(function(e,n){var a=new Date(n.start_date);return t>a||e},!1),r=r.filter(function(e){var n=new Date(e.start_date);return n>=t}),a=a.concat(r),!o){e.next=16;break}return this.$store.commit("setActivities",a),e.abrupt("return");case 16:n++;case 17:if(""!=r){e.next=4;break}case 18:return this.$store.commit("setActivities",a),e.abrupt("return");case 20:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},mounted:function(){this.$nextTick(this.getAllActivities())}},v=d,b=(n("df6a"),n("2877")),h=Object(b["a"])(v,o,s,!1,null,null,null);h.options.__file="Leaflet.vue";var g=h.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vue-virtual-table",{attrs:{config:e.tableConfig,data:e.tableData2,height:500,itemHeight:40,minWidth:800,enableExport:!0,language:"en"}})},y=[],x=n("b360"),w={components:{VueVirtualTable:x["a"]},data:function(){return{tableConfig:[{prop:"date",name:"Date",sortable:!0,summary:"COUNT"},{prop:"name",name:"Name",searchable:!0},{prop:"distance",name:"Distance (km)",summary:"SUM",sortable:!0},{prop:"moving_time",name:"Moving Time (hrs)",summary:"SUM",sortable:!0},{prop:"elapsed_time",name:"Elapsed Time (hrs)",summary:"SUM",sortable:!0},{prop:"total_elevation_gain",name:"Climbed (m)",summary:"SUM",sortable:!0},{prop:"type",name:"Type",searchable:!0,sortable:!0}],tableData:[{user:"a1",age:20},{user:"a2",age:21},{user:"a3",age:23}]}},computed:{tableData2:function(){return this.$store.state.activities.map(function(e){return{date:e.start_date_local.slice(0,10),name:e.name,distance:(e.distance/1e3).toFixed(2),moving_time:(e.moving_time/3600).toFixed(2),elapsed_time:(e.elapsed_time/3600).toFixed(2),total_elevation_gain:e.total_elevation_gain,type:e.type}})}}},k=w,O=Object(b["a"])(k,_,y,!1,null,null,null);O.options.__file="Vuetable.vue";var L=O.exports,M=n("2f62");a["a"].use(M["a"]);var j=new M["a"].Store({state:{start:"1/1/2018",end:"",athlete:"",activities:[]},mutations:{setStart:function(e,t){e.start=t},setEnd:function(e,t){e.end=t},setAthlete:function(e,t){e.athlete=t},setActivities:function(e,t){e.activities=t},addActivities:function(e,t){e.activities=e.activities.append(t)}}}),S={name:"app",store:j,components:{Leaflet:g,Vuetable:L}},T=S,$=(n("034f"),Object(b["a"])(T,r,i,!1,null,null,null));$.options.__file="App.vue";var A=$.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(e){return e(A)}}).$mount("#app")},c21b:function(e,t,n){},df6a:function(e,t,n){"use strict";var a=n("2687"),r=n.n(a);r.a}});
//# sourceMappingURL=app.4eacf17e.js.map