var amd=function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=2)}([function(t,e){t.exports=L},function(t,e,o){t.exports=function(){return o(4)('!function(t){var e={};function o(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o(o.s=0)}([function(t,e,o){"use strict";function n(t,e,o,s,i,u){if(i-s<=o)return;const p=s+i>>1;!function t(e,o,n,s,i,u){for(;i>s;){if(i-s>600){const r=i-s+1,p=n-s+1,c=Math.log(r),a=.5*Math.exp(2*c/3),l=.5*Math.sqrt(c*a*(r-a)/r)*(p-r/2<0?-1:1),h=Math.max(s,Math.floor(n-p*a/r+l)),d=Math.min(i,Math.floor(n+(r-p)*a/r+l));t(e,o,n,h,d,u)}const p=o[2*n+u];let c=s,a=i;for(r(e,o,s,n),o[2*i+u]>p&&r(e,o,s,i);c<a;){for(r(e,o,c,a),c++,a--;o[2*c+u]<p;)c++;for(;o[2*a+u]>p;)a--}o[2*s+u]===p?r(e,o,s,a):r(e,o,++a,i),a<=n&&(s=a+1),n<=a&&(i=a-1)}}(t,e,p,s,i,u%2),n(t,e,o,s,p-1,u+1),n(t,e,o,p+1,i,u+1)}function r(t,e,o,n){s(t,o,n),s(e,2*o,2*n),s(e,2*o+1,2*n+1)}function s(t,e,o){const n=t[e];t[e]=t[o],t[o]=n}function i(t,e,o,n){const r=t-o,s=e-n;return r*r+s*s}o.r(e);const u=t=>t[0],p=t=>t[1];class c{constructor(t,e=u,o=p,r=64,s=Float64Array){this.nodeSize=r,this.points=t;const i=t.length<65536?Uint16Array:Uint32Array,c=this.ids=new i(t.length),a=this.coords=new s(2*t.length);for(let n=0;n<t.length;n++)c[n]=n,a[2*n]=e(t[n]),a[2*n+1]=o(t[n]);n(c,a,r,0,c.length-1,0)}range(t,e,o,n){return function(t,e,o,n,r,s,i){const u=[0,t.length-1,0],p=[];let c,a;for(;u.length;){const l=u.pop(),h=u.pop(),d=u.pop();if(h-d<=i){for(let i=d;i<=h;i++)c=e[2*i],a=e[2*i+1],c>=o&&c<=r&&a>=n&&a<=s&&p.push(t[i]);continue}const f=Math.floor((d+h)/2);c=e[2*f],a=e[2*f+1],c>=o&&c<=r&&a>=n&&a<=s&&p.push(t[f]);const m=(l+1)%2;(0===l?o<=c:n<=a)&&(u.push(d),u.push(f-1),u.push(m)),(0===l?r>=c:s>=a)&&(u.push(f+1),u.push(h),u.push(m))}return p}(this.ids,this.coords,t,e,o,n,this.nodeSize)}within(t,e,o){return function(t,e,o,n,r,s){const u=[0,t.length-1,0],p=[],c=r*r;for(;u.length;){const a=u.pop(),l=u.pop(),h=u.pop();if(l-h<=s){for(let r=h;r<=l;r++)i(e[2*r],e[2*r+1],o,n)<=c&&p.push(t[r]);continue}const d=Math.floor((h+l)/2),f=e[2*d],m=e[2*d+1];i(f,m,o,n)<=c&&p.push(t[d]);const g=(a+1)%2;(0===a?o-r<=f:n-r<=m)&&(u.push(h),u.push(d-1),u.push(g)),(0===a?o+r>=f:n+r>=m)&&(u.push(d+1),u.push(l),u.push(g))}return p}(this.ids,this.coords,t,e,o,this.nodeSize)}}const a={minZoom:0,maxZoom:16,radius:40,extent:512,nodeSize:64,log:!1,reduce:null,map:t=>t};class l{constructor(t){this.options=M(Object.create(a),t),this.trees=new Array(this.options.maxZoom+1)}load(t){const{log:e,minZoom:o,maxZoom:n,nodeSize:r}=this.options;e&&console.time("total time");const s=`prepare ${t.length} points`;e&&console.time(s),this.points=t;let i=[];for(let e=0;e<t.length;e++)t[e].geometry&&i.push(d(t[e],e));this.trees[n+1]=new c(i,y,b,r,Float32Array),e&&console.timeEnd(s);for(let t=n;t>=o;t--){const o=+Date.now();i=this._cluster(i,t),this.trees[t]=new c(i,y,b,r,Float32Array),e&&console.log("z%d: %d clusters in %dms",t,i.length,+Date.now()-o)}return e&&console.timeEnd("total time"),this}getClusters(t,e){let o=((t[0]+180)%360+360)%360-180;const n=Math.max(-90,Math.min(90,t[1]));let r=180===t[2]?180:((t[2]+180)%360+360)%360-180;const s=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)o=-180,r=180;else if(o>r){const t=this.getClusters([o,n,180,s],e),i=this.getClusters([-180,n,r,s],e);return t.concat(i)}const i=this.trees[this._limitZoom(e)],u=i.range(g(o),x(s),g(r),x(n)),p=[];for(const t of u){const e=i.points[t];p.push(e.numPoints?f(e):this.points[e.index])}return p}getChildren(t){const e=t>>5,o=t%32,n="No cluster with the specified id.",r=this.trees[o];if(!r)throw new Error(n);const s=r.points[e];if(!s)throw new Error(n);const i=this.options.radius/(this.options.extent*Math.pow(2,o-1)),u=r.within(s.x,s.y,i),p=[];for(const e of u){const o=r.points[e];o.parentId===t&&p.push(o.numPoints?f(o):this.points[o.index])}if(0===p.length)throw new Error(n);return p}getLeaves(t,e,o){e=e||10,o=o||0;const n=[];return this._appendLeaves(n,t,e,o,0),n}getTile(t,e,o){const n=this.trees[this._limitZoom(t)],r=Math.pow(2,t),{extent:s,radius:i}=this.options,u=i/s,p=(o-u)/r,c=(o+1+u)/r,a={features:[]};return this._addTileFeatures(n.range((e-u)/r,p,(e+1+u)/r,c),n.points,e,o,r,a),0===e&&this._addTileFeatures(n.range(1-u/r,p,1,c),n.points,r,o,r,a),e===r-1&&this._addTileFeatures(n.range(0,p,u/r,c),n.points,-1,o,r,a),a.features.length?a:null}getClusterExpansionZoom(t){let e=t%32-1;for(;e<=this.options.maxZoom;){const o=this.getChildren(t);if(e++,1!==o.length)break;t=o[0].properties.cluster_id}return e}_appendLeaves(t,e,o,n,r){const s=this.getChildren(e);for(const e of s){const s=e.properties;if(s&&s.cluster?r+s.point_count<=n?r+=s.point_count:r=this._appendLeaves(t,s.cluster_id,o,n,r):r<n?r++:t.push(e),t.length===o)break}return r}_addTileFeatures(t,e,o,n,r,s){for(const i of t){const t=e[i],u={type:1,geometry:[[Math.round(this.options.extent*(t.x*r-o)),Math.round(this.options.extent*(t.y*r-n))]],tags:t.numPoints?m(t):this.points[t.index].properties},p=t.numPoints?t.id:this.points[t.index].id;void 0!==p&&(u.id=p),s.features.push(u)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(t,this.options.maxZoom+1))}_cluster(t,e){const o=[],{radius:n,extent:r,reduce:s}=this.options,i=n/(r*Math.pow(2,e));for(let n=0;n<t.length;n++){const r=t[n];if(r.zoom<=e)continue;r.zoom=e;const u=this.trees[e+1],p=u.within(r.x,r.y,i);let c=r.numPoints||1,a=r.x*c,l=r.y*c;const d=s?this._map(r,!0):null,f=(n<<5)+(e+1);for(const t of p){const o=u.points[t];if(o.zoom<=e)continue;o.zoom=e;const n=o.numPoints||1;a+=o.x*n,l+=o.y*n,c+=n,o.parentId=f,s&&s(d,this._map(o))}1===c?o.push(r):(r.parentId=f,o.push(h(a/c,l/c,f,c,d)))}return o}_map(t,e){if(t.numPoints)return e?M({},t.properties):t.properties;const o=this.points[t.index].properties,n=this.options.map(o);return e&&n===o?M({},n):n}}function h(t,e,o,n,r){return{x:t,y:e,zoom:1/0,id:o,parentId:-1,numPoints:n,properties:r}}function d(t,e){const[o,n]=t.geometry.coordinates;return{x:g(o),y:x(n),zoom:1/0,index:e,parentId:-1}}function f(t){return{type:"Feature",id:t.id,properties:m(t),geometry:{type:"Point",coordinates:[(e=t.x,360*(e-.5)),_(t.y)]}};var e}function m(t){const e=t.numPoints,o=e>=1e4?`${Math.round(e/1e3)}k`:e>=1e3?`${Math.round(e/100)/10}k`:e;return M(M({},t.properties),{cluster:!0,cluster_id:t.id,point_count:e,point_count_abbreviated:o})}function g(t){return t/360+.5}function x(t){const e=Math.sin(t*Math.PI/180),o=.5-.25*Math.log((1+e)/(1-e))/Math.PI;return o<0?0:o>1?1:o}function _(t){const e=(180-360*t)*Math.PI/180;return 360*Math.atan(Math.exp(e))/Math.PI-90}function M(t,e){for(const o in e)t[o]=e[o];return t}function y(t){return t.x}function b(t){return t.y}let w=null,P=null,I={},C={};function v(t){let e,o,n=0;if(0===t.length)return n;for(e=0;e<t.length;e++)n=(n<<5)-n+(o=t.charCodeAt(e)),n|=0;return n}function z(t,e={}){e.action=t,postMessage(e)}function Z(t){if(I[t])return I[t];const e=[],o=[t];for(;o.length;){const t=o.pop();w.getChildren(t).forEach(t=>{t.properties.cluster?o.push(t.properties.cluster_id):e.push(t.properties.id)})}return I[t]=e,I[t]}self.onmessage=({data:t})=>{switch(t.action){case"loadFeatures":!function({features:t=[]},{supercluster:e}){(w=new l(e)).load(t),P=t,I={},C={},z("load")}(t.data,t.options);break;case"clusteringData":!function({keptPointIds:t=[],bbox:e,zoom:o},{log:n,bboxIncreasePer:r,appendChildIdsToCluster:s,optimizeRedrawClusters:i}){if(!w)return;const[u,p,c,a]=e;let l=(c-u)*r;l<0&&(l*=-1);let h=(a-p)*r;h<0&&(h*=-1);const d=[u-l,p-h,c+l,a+h],f=w.getClusters(d,o),m=t.length>0,g=m||s||i,x=f.length,_=[];for(let e=0;e<x;e++){if(f[e].properties.composite_id=f[e].properties.cluster_id,f[e].properties.cluster&&!0===g){I[f[e].properties.cluster_id]=I[f[e].properties.cluster_id]||Z(f[e].properties.cluster_id);const o=I[f[e].properties.cluster_id];!0===s&&(f[e].properties.childIds=o),!0===i&&(C[f[e].properties.composite_id]=f[e].properties.composite_id||v(o.sort().join(";")).toString(),f[e].properties.composite_id=C[f[e].properties.composite_id]),!0===m&&t.forEach(t=>{o.indexOf(t)>-1&&f[e].properties.point_count--})}f[e].properties.id&&_.push(f[e].properties.id)}t.forEach(t=>{if(-1===_.indexOf(t)&&P){const e=P.length;for(let o=0;o<e;o++)if(P[o].properties.id===t){f.push(P[o]);break}}}),n&&console.log(t),z("dataClustered",{features:f,zoom:o,bbox:e})}(t.data,t.options);break;case"expansionZoom":!function({clusterId:t,latlng:e}){const o=w.getClusterExpansionZoom(t);z("expansionZoom",{latlng:e,zoom:o,clusterId:t})}(t.data);break;case"pointsInCluster":!function({clusterId:t}){z("pointsInCluster",{features:w.getLeaves(t,1/0),clusterId:t})}(t.data)}}}]);',o.p+"33ee469cd60b11b05c75.worker.js")}},function(t,e,o){t.exports=o(3)},function(t,e,o){"use strict";o.r(e),o.d(e,"SuperclusterGroup",function(){return a});var n=o(0),r=o(1),s=o.n(r);o(5);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,o=new Array(t.length);e<t.length;e++)o[e]=t[e];return o}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var a=n["SuperclusterGroup"]=n["FeatureGroup"].extend({options:{clusterIconFunc:null,pointIconFunc:null,optimizeRedrawClusters:!0,optimizeRedrawPoints:!0,optimizeRedrawPointsInOpenedCluster:!0,appendChildIdsToCluster:!1,showClustersOnMaxZoom:!0,showedSubClusterMultiplier:2,showMarkersBeforeMaxZoom:1,bboxIncreasePer:0,moveToLastKept:!1,moveToLastKeptBoundsMultiplier:.3,clusterzIndexOffset:1e3,pointzIndexOffset:8e3,maxMarkersInClusterOnOnePoint:250,animated:!1,spiderfyDistanceMultiplier:.8,log:!1,legsStyle:{weight:1,color:"#707070"},supercluster:{radius:60,extent:180,minZoom:null,maxZoom:null,log:!1}},_geoJsonLayer:null,_worker:null,_map:null,_keptPointIds:[],_initWorker:function(){var t=this;this._worker=new s.a,this._worker.onmessage=function(e){return t._onWorkerMessage(e)},this._worker.onerror=function(e){return t.fire("error",e)}},_createGeoJsonLayer:function(){var t=this;this._geoJsonLayer=n["geoJson"](null,{pointToLayer:function(e,o){return n["marker"](o,{zIndexOffset:e.properties.cluster?t.options.clusterzIndexOffset:t.options.pointzIndexOffset,icon:e.properties.cluster?t.options.clusterIconFunc(e,o):t.options.pointIconFunc(e,o)})}}),this._geoJsonLayer.on("click",this._geoJsonClick,this),this._geoJsonLayer.on("layerremove",function(e){var o=e.layer;t._checkAndUnKeepPoint(o)}),this._geoJsonLayer.on("popupclose",function(e){var o=e.layer;t._checkAndUnKeepPoint(o)}),this._geoJsonLayer.on("popupopen",function(e){var o=e.layer;t._checkAndKeepPoint(o)}),!0===this.options.animated&&this._geoJsonLayer.on("layeradd",function(e){var o=e.layer;t._animatedAdd(o)})},_deleteLayerFromGeoJsonLayer:function(t){this._recursiveRemoveAllOpenedClusterLayer(t),this._geoJsonLayer.removeLayer(t)},_geoJsonClick:function(t){var e=t.latlng,o=t.layer;if(o.feature.properties.cluster){var n=this._map.getZoom()>=this._map.getMaxZoom(),r=o.feature.properties.cluster_id;!!o._openedClusterLayer?this._closeCluster(o):!0===n?this._sendMessage("pointsInCluster",{clusterId:r}):this._sendMessage("expansionZoom",{clusterId:r,latlng:e})}else this._onPointClick(null,o)},_onPointClick:function(t,e){this.fire("point.click",{parentLayer:t,layer:e})},_zoomEnd:function(){this._clusteringData()},_moveEnd:function(){this._clusteringData()},_clusteringData:function(){var t=this._map.getBounds(),e=[t.getWest(),t.getSouth(),t.getEast(),t.getNorth()],o=this._map.getZoom();this._sendMessage("clusteringData",{zoom:o,bbox:e,keptPointIds:this._keptPointIds})},_sendMessage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o={action:t,data:e,options:{bboxIncreasePer:this.options.bboxIncreasePer,optimizeRedrawClusters:this.options.optimizeRedrawClusters,optimizeRedrawPoints:this.options.optimizeRedrawPoints,supercluster:this.options.supercluster}};this._worker.postMessage(o)},loadGeoJsonData:function(t){var e=[];e=Array.isArray(t)?t:t.features,this._sendMessage("loadFeatures",{features:e})},_checkAndKeepPoint:function(t){t instanceof n["Marker"]&&!t.feature.properties.subCluster&&this.keepPoint(t.feature.properties.id)},_checkAndUnKeepPoint:function(t){t instanceof n["Marker"]&&!t.feature.properties.subCluster&&this.unKeepPoint(t.feature.properties.id)},keepPoint:function(t){this._keptPointIds.indexOf(t)>-1||(this.options.log&&console.log("keepPoint",t),this._keptPointIds.push(t))},unKeepPoint:function(t){this._keptPointIds.length>0&&(this.options.log&&console.log("unKeepPoint",t),this._keptPointIds=this._keptPointIds.filter(function(e){return e!==t}),this._clusteringData())},moveToLastKept:function(){this.options.log&&console.log("move to last");var t=this._geoJsonLayer.getLayers(),e=this._keptPointIds[this._keptPointIds.length-1];if(e){var o=t.find(function(t){return t.feature.properties.id===e});if(o){var r=this._getDistanceFromMapCenter().distMin,s=n["latLngBounds"](o.getLatLng().toBounds(r*this.options.moveToLastKeptBoundsMultiplier));this._map.getBounds().contains(s)||this._map.setView(s.getCenter())}}},_onWorkerMessage:function(t){var e=t.data;switch(this.options.log&&console.log("_onWorkerMessage",e.action,e),e.action){case"dataClustered":this._drawItems(e.features,e.zoom);break;case"load":this._clusteringData(e);break;case"expansionZoom":this._expansionZoom(e);break;case"pointsInCluster":this._openCluster(e)}},_expansionZoom:function(t){var e=t.latlng,o=t.zoom;this._map.setView(e,o)},_drawItems:function(t,e){if(this._map.getZoom()===e){var o=this._geoJsonLayer.getLayers(),n=o.length;if(!1===(this.options.optimizeRedrawPoints||this.options.optimizeRedrawClusters)||0===n)this._geoJsonLayer.clearLayers(),this._geoJsonLayer.addData(t);else{for(var r={},s={},i=t.length,a=0;a<i;a++)t[a].properties.cluster?s[t[a].properties.composite_id]=t[a]:r[t[a].properties.id]=t[a];for(var u=o.length,p=0;p<u;p++){var c=o[p];c.feature.properties.cluster?!0===this.options.optimizeRedrawClusters?this._removeOrUpdateLayer(c,s,"composite_id"):this._deleteLayerFromGeoJsonLayer(c):!0===this.options.optimizeRedrawPoints?this._removeOrUpdateLayer(c,r,"id"):this._deleteLayerFromGeoJsonLayer(c)}this._geoJsonLayer.addData(Object.values(s)),this._geoJsonLayer.addData(Object.values(r))}this.options.moveToLastKept&&this.moveToLastKept(),this.fire("draw",{layer:this._geoJsonLayer})}},_removeOrUpdateLayer:function(t,e,o){var r=t.feature.properties[o];e[r]?(t.setLatLng(new n["LatLng"](e[r].geometry.coordinates[1],e[r].geometry.coordinates[0])),t.feature.properties.cluster&&t.feature.properties.point_count!==e[r].properties.point_count?(t.feature=e[r],t.setIcon(this.options.clusterIconFunc(t.feature))):t.feature=e[r],delete e[r],this.fire("layer.updated",{layer:t}),this.options.animated&&this._animatedMove(t),this._updateMarkersInOpenedClusterLayer(t)):this._deleteLayerFromGeoJsonLayer(t)},_clusterIconFunc:function(t){return new n["DivIcon"]({className:"supercluster",html:'<div class="cluster-icon">'.concat(t.properties.point_count,"</div>"),iconSize:[44,44],iconAnchor:[22,22]})},_pointIconFunc:function(){return new n["DivIcon"]({className:"supercluster",html:'<div class="point-icon"><div class="pulsate"></div></div>',iconSize:[14,14],iconAnchor:[7,7]})},initialize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var e in t)this.options.hasOwnProperty(e)&&(this.options[e]instanceof Object?this.options[e]=Object.assign(this.options[e],t[e]):this.options[e]=t[e]);this.options.clusterIconFunc=this.options.clusterIconFunc||this._clusterIconFunc,this.options.pointIconFunc=this.options.pointIconFunc||this._pointIconFunc,this._initWorker()},onAdd:function(t){this._map=t,this.options.supercluster.maxZoom||(this.options.supercluster.maxZoom=this._map.getMaxZoom(),this.options.showClustersOnMaxZoom||(this.options.supercluster.maxZoom=this._map.getMaxZoom()-this.options.showMarkersBeforeMaxZoom)),this.options.supercluster.minZoom||(this.options.supercluster.minZoom=this._map.getMinZoom()),this._createGeoJsonLayer(),this._geoJsonLayer.addTo(this._map),this._map.on("zoomend",this._zoomEnd,this),this._map.on("moveend",this._moveEnd,this),this._clusteringData()},onRemove:function(t){t.off("zoomend",this._zoomEnd,this),t.off("moveend",this._moveEnd,this),this._geoJsonLayer.clearLayers()},_updateMarkersInOpenedClusterLayer:function(t){if(t._openedClusterLayer){var e=t.feature.properties.cluster_id;this._sendMessage("pointsInCluster",{clusterId:e})}},_closeCluster:function(t){this._recursiveRemoveAllOpenedClusterLayer(t),t._icon&&t._icon.classList.remove("opened")},_getLegsForMarkersInCluster:function(t,e){for(var o=[t.lng,t.lat],n=[],r=e.length,s=0;s<r;s++)n.push({type:"LineString",coordinates:[e[s].geometry.coordinates,o]});return n},_updateMarkersInCluster:function(t,e,o){for(var r={},s=e.length,i=0;i<s;i++)r[e[i].properties.id]=e[i];for(var a=t._openedClusterLayer.getLayers(),u=a.length,p=0;p<u;p++){var c=a[p],l=c.feature.properties.id;r[l]?(c.setLatLng(new n["LatLng"](r[l].geometry.coordinates[1],r[l].geometry.coordinates[0])),c.feature=r[l],this.fire("layer.updated",{layer:c})):t._openedClusterLayer.removeLayer(c)}t._openedClusterLayer.addData(o)},_createMarkersInCluster:function(t,e,o){var r=this;t._openedClusterLayer=n["geoJson"]([].concat(i(e),i(o)),{pointToLayer:function(t,e){return t.properties.subCluster?n["marker"](e,{zIndexOffset:r.options.pointzIndexOffset,icon:r.options.clusterIconFunc(t,e)}):n["marker"](e,{zIndexOffset:r.options.pointzIndexOffset,icon:r.options.pointIconFunc(t,e)})},style:this.options.legsStyle}).addTo(this._map),t._openedClusterLayer.on("click",function(e){var o=e.layer;o instanceof n["Marker"]&&(o.feature.properties.subCluster?r._toggleSubCluster(o):r._onPointClick(t,o))})},_recursiveRemoveAllOpenedClusterLayer:function(t){var e=this;t._openedClusterLayer&&(t._openedClusterLayer.getLayers().forEach(function(t){e._recursiveRemoveAllOpenedClusterLayer(t)}),this._map.removeLayer(t._openedClusterLayer),t._openedClusterLayer=null)},_toggleSubCluster:function(t){t._openedClusterLayer?this._closeSubCluster(t):this._openSubCluster(t,t.feature.properties.features)},_openCluster:function(t){var e=t.clusterId,o=t.features,n=this._geoJsonLayer.getLayers().find(function(t){return t.feature.properties.cluster_id===e});if(n){var r=n.getLatLng(),s=this._segmentFeatures(o,r),i=this._getLegsForMarkersInCluster(r,s);n._openedClusterLayer?this._updateMarkersInCluster(n,s,i):this._createMarkersInCluster(n,s,i),n._icon&&n._icon.classList.add("opened")}},_closeSubCluster:function(t){t._openedClusterLayer&&(this._map.removeLayer(t._openedClusterLayer),t._openedClusterLayer=null,t._icon&&t._icon.classList.remove("opened"))},_openSubCluster:function(t,e){var o=t.getLatLng(),n=this._segmentFeatures(e,o),r=this._getLegsForMarkersInCluster(o,n);t._openedClusterLayer?this._updateMarkersInCluster(t,n,r):this._createMarkersInCluster(t,n,r)},_getDistanceFromMapCenter:function(){var t=this._map.getCenter(),e=this._map.getBounds(),o=n["latLng"](t.lat,e.getEast()),r=t.distanceTo(o),s=n["latLng"](e.getNorth(),t.lng),i=t.distanceTo(s),a=r>i?i:r;return this.options.log&&console.log({distCenterToEast:r,distCenterToNorth:i,distMin:a}),{distCenterToEast:r,distCenterToNorth:i,distMin:a}},_segmentFeatures:function(t,e){var o=t.length,n=this.options.maxMarkersInClusterOnOnePoint,r=Math.ceil(o/n);if(o<=n)return this._createSpiral(t,e);for(var s=[],i=0;i<r;i++){var a=t.slice(i*n,(i+1)*n);s.push({type:"Feature",properties:{id:"sub_".concat(i),subCluster:!0,point_count:a.length,features:a},geometry:{type:"Point",coordinates:[]}})}return this._createSpiral(s,e,!0)},_createSpiral:function(t,e){var o,r,s,i=arguments.length>2&&void 0!==arguments[2]&&arguments[2],a=5,u=this.options.spiderfyDistanceMultiplier*(i?this.options.showedSubClusterMultiplier:1),p=28,c=11,l=this._map.latLngToLayerPoint(e),d=2*Math.PI,h=t.length,f=u*p,m=u*a*d,_=u*c,g=0,y=[];for(o=h;o>=0;o--)o<h&&(r=new n["Point"](l.x+_*Math.cos(g),l.y+_*Math.sin(g))._round(),s=this._map.layerPointToLatLng(r),t[o].geometry.coordinates=[s.lng,s.lat],y.push(t[o])),_+=m/(g+=f/_+5e-4*o);return y},_animatedAdd:function(t){t._icon&&t._icon.classList&&t._icon.classList.add("animate-add")},_animatedMove:function(t){t._icon&&t._icon.classList&&t._icon.classList.add("animate-move")}})},function(t,e,o){"use strict";var n=window.URL||window.webkitURL;t.exports=function(t,e){try{try{var o;try{(o=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder||window.MSBlobBuilder)).append(t),o=o.getBlob()}catch(e){o=new Blob([t])}return new Worker(n.createObjectURL(o))}catch(e){return new Worker("data:application/javascript,"+encodeURIComponent(t))}}catch(t){if(!e)throw Error("Inline worker is not supported");return new Worker(e)}}},function(t,e,o){}]);